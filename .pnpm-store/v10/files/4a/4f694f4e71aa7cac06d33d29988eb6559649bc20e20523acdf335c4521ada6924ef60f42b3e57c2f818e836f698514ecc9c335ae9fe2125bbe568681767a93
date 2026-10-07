"use strict";

const idlUtils = require("../generated/utils");
const ErrorEvent = require("../generated/ErrorEvent");
const EventHandlerNonNull = require("../generated/EventHandlerNonNull.js");
const OnBeforeUnloadEventHandlerNonNull = require("../generated/OnBeforeUnloadEventHandlerNonNull.js");
const OnErrorEventHandlerNonNull = require("../generated/OnErrorEventHandlerNonNull.js");
const reportException = require("./runtime-script-errors");

exports.appendHandler = (el, eventName) => {
  // tryImplForWrapper() is currently required due to use in Window.js
  idlUtils.tryImplForWrapper(el).addEventListener(eventName, event => {
    // https://html.spec.whatwg.org/#the-event-handler-processing-algorithm
    const callback = exports.getCurrentEventHandlerValue(el, eventName);
    if (callback === null) {
      return;
    }

    const specialError = ErrorEvent.isImpl(event) && event.type === "error" &&
      event.currentTarget.constructor.name === "Window";

    let returnValue = null;
    // https://heycam.github.io/webidl/#es-invoking-callback-functions
    if (typeof callback === "function") {
      if (specialError) {
        returnValue = callback.call(
          event.currentTarget,
          event.message,
          event.filename,
          event.lineno,
          event.colno,
          event.error
        );
      } else {
        returnValue = callback.call(event.currentTarget, event);
      }
    }

    // TODO: we don't implement BeforeUnloadEvent so we can't brand-check here
    if (event.type === "beforeunload") {
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

// https://html.spec.whatwg.org/multipage/webappapis.html#getting-the-current-value-of-the-event-handler
exports.getCurrentEventHandlerValue = (target, event) => {
  const value = target._getEventHandlerFor(event);
  if (!value) {
    return null;
  }

  if (value.body !== undefined) {
    let element, document, fn;
    if (target.constructor.name === "Window") {
      element = null;
      document = idlUtils.implForWrapper(target.document);
    } else {
      element = target;
      document = element.ownerDocument;
    }
    const { body } = value;

    const formOwner = element !== null && element.form ? element.form : null;
    const window = target.constructor.name === "Window" && target._document ? target : document.defaultView;

    try {
      // eslint-disable-next-line no-new-func
      Function(body); // properly error out on syntax errors
      // Note: this won't execute body; that would require `Function(body)()`.
    } catch (e) {
      if (window) {
        reportException(window, e);
      }
      target._setEventHandlerFor(event, null);
      return null;
    }

    // Note: the with (window) { } is not necessary in Node, but is necessary in a browserified environment.

    const createFunction = document.defaultView.Function;
    if (event === "error" && element === null) {
      const sourceURL = document ? `\n//# sourceURL=${document.URL}` : "";

      fn = createFunction(`\
with (arguments[0]) { return function onerror(event, source, lineno, colno, error) {
${body}
}; }${sourceURL}`)(window);

      fn = OnErrorEventHandlerNonNull.convert(window, fn);
    } else {
      const calls = [];
      if (element !== null) {
        calls.push(idlUtils.wrapperForImpl(document));
      }

      if (formOwner !== null) {
        calls.push(idlUtils.wrapperForImpl(formOwner));
      }

      if (element !== null) {
        calls.push(idlUtils.wrapperForImpl(element));
      }

      let wrapperBody = `\
with (arguments[0]) { return function on${event}(event) {
${body}
}; }`;

      // eslint-disable-next-line no-unused-vars
      for (const call of calls) {
        wrapperBody = `\
with (arguments[0]) { return function () {
${wrapperBody}
}; }`;
      }

      if (document) {
        wrapperBody += `\n//# sourceURL=${document.URL}`;
      }

      fn = createFunction(wrapperBody)(window);
      for (const call of calls) {
        fn = fn(call);
      }

      if (event === "beforeunload") {
        fn = OnBeforeUnloadEventHandlerNonNull.convert(window, fn);
      } else {
        fn = EventHandlerNonNull.convert(window, fn);
      }
    }

    target._setEventHandlerFor(event, fn);
  }

  return target._getEventHandlerFor(event);
};

// https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-idl-attributes
// TODO: Consider replacing this with `[ReflectEvent]`
exports.createEventAccessor = (obj, event) => {
  Object.defineProperty(obj, "on" + event, {
    configurable: true,
    enumerable: true,
    get() {
      return exports.getCurrentEventHandlerValue(this, event);
    },
    set(val) {
      this._setEventHandlerFor(event, val);
    }
  });
};
