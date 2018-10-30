"use strict";

const vm = require("vm");
const conversions = require("webidl-conversions");
const idlUtils = require("../generated/utils");
const ErrorEvent = require("../generated/ErrorEvent");
const reportException = require("./runtime-script-errors");

exports.appendHandler = function appendHandler(el, eventName) {
  el.addEventListener(eventName, event => {
    // https://html.spec.whatwg.org/#the-event-handler-processing-algorithm
    event = idlUtils.implForWrapper(event);

    const callback = el["on" + eventName];
    if (callback === null) {
      return;
    }

    const specialError = ErrorEvent.isImpl(event) && event.type === "error" &&
      event.currentTarget.constructor.name === "Window";

    let returnValue = null;
    const thisValue = idlUtils.tryWrapperForImpl(event.currentTarget);
    // https://heycam.github.io/webidl/#es-invoking-callback-functions
    if (typeof callback === "function") {
      if (specialError) {
        returnValue = callback.call(
          thisValue, event.message,
          event.filename, event.lineno, event.colno, event.error
        );
      } else {
        const eventWrapper = idlUtils.wrapperForImpl(event);
        returnValue = callback.call(thisValue, eventWrapper);
      }
    }

    if (event.type === "beforeunload") { // TODO: we don't implement BeforeUnloadEvent so we can't brand-check here
      // Perform conversion which in the spec is done by the event handler return type being DOMString?
      returnValue = returnValue === undefined || returnValue === null ? null : conversions.DOMString(returnValue);

      if (returnValue !== null) {
        event._canceledFlag = true;
        if (event.returnValue === "") {
          event.returnValue = returnValue;
        }
      }
    } else if (specialError) {
      if (returnValue === true) {
        event._canceledFlag = true;
      }
    } else if (returnValue === false) {
      event._canceledFlag = true;
    }
  });
};

// "Simple" in this case means "no content attributes involved"
exports.setupForSimpleEventAccessors = (prototype, events) => {
  prototype._getEventHandlerFor = function (event) {
    return this._eventHandlers ? this._eventHandlers[event] : undefined;
  };

  prototype._setEventHandlerFor = function (event, handler) {
    if (!this._registeredHandlers) {
      this._registeredHandlers = new Set();
      this._eventHandlers = Object.create(null);
    }

    if (!this._registeredHandlers.has(event) && handler !== null) {
      this._registeredHandlers.add(event);
      exports.appendHandler(this, event);
    }
    this._eventHandlers[event] = handler;
  };

  for (const event of events) {
    exports.createEventAccessor(prototype, event);
  }
};

// https://html.spec.whatwg.org/#event-handler-idl-attributes
exports.createEventAccessor = function createEventAccessor(obj, event) {
  Object.defineProperty(obj, "on" + event, {
    configurable: true,
    enumerable: true,
    get() { // https://html.spec.whatwg.org/#getting-the-current-value-of-the-event-handler
      const value = this._getEventHandlerFor(event);
      if (!value) {
        return null;
      }

      if (value.body !== undefined) {
        let element;
        let document;
        if (this.constructor.name === "Window") {
          element = null;
          document = idlUtils.implForWrapper(this.document);
        } else {
          element = this;
          document = element.ownerDocument;
        }
        const { body } = value;

        const formOwner = element !== null && element.form ? element.form : null;
        const window = this.constructor.name === "Window" && this._document ? this : document.defaultView;

        try {
          // eslint-disable-next-line no-new-func
          Function(body); // properly error out on syntax errors
          // Note: this won't execute body; that would require `Function(body)()`.
        } catch (e) {
          if (window) {
            reportException(window, e);
          }
          this._setEventHandlerFor(event, null);
          return null;
        }

        // Note: the with (window) { } is not necessary in Node, but is necessary in a browserified environment.

        let fn;
        const createFunction = vm.isContext(document._global) ? document.defaultView._globalProxy.Function : Function;
        if (event === "error" && element === null) {
          const wrapperBody = document ? body + `\n//# sourceURL=${document.URL}` : body;

          // eslint-disable-next-line no-new-func
          fn = createFunction("window", `with (window) { return function onerror(event, source, lineno, colno, error) {
  ${wrapperBody}
}; }`)(window);
        } else {
          const argNames = [];
          const args = [];

          argNames.push("window");
          args.push(window);

          if (element !== null) {
            argNames.push("document");
            args.push(idlUtils.wrapperForImpl(document));
          }
          if (formOwner !== null) {
            argNames.push("formOwner");
            args.push(idlUtils.wrapperForImpl(formOwner));
          }
          if (element !== null) {
            argNames.push("element");
            args.push(idlUtils.wrapperForImpl(element));
          }
          let wrapperBody = `
return function on${event}(event) {
  ${body}
};`;
          for (let i = argNames.length - 1; i >= 0; --i) {
            wrapperBody = `with (${argNames[i]}) { ${wrapperBody} }`;
          }
          if (document) {
            wrapperBody += `\n//# sourceURL=${document.URL}`;
          }
          argNames.push(wrapperBody);
          fn = createFunction(...argNames)(...args);
        }

        this._setEventHandlerFor(event, fn);
      }
      return this._getEventHandlerFor(event);
    },
    set(val) {
      val = eventHandlerArgCoercion(val);
      this._setEventHandlerFor(event, val);
    }
  });
};

function typeIsObject(v) {
  return (typeof v === "object" && v !== null) || typeof v === "function";
}

// Implements:
//     [TreatNonObjectAsNull]
//     callback EventHandlerNonNull = any (Event event);
//     typedef EventHandlerNonNull? EventHandler;
// Also implements the part of https://heycam.github.io/webidl/#es-invoking-callback-functions which treats
// non-callable callback functions as callback functions that return undefined.
// TODO: replace with webidl2js typechecking when it has sufficient callback support
function eventHandlerArgCoercion(val) {
  if (!typeIsObject(val)) {
    return null;
  }

  return val;
}
