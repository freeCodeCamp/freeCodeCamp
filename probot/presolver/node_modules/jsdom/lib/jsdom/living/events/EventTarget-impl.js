"use strict";
const DOMException = require("domexception");
const reportException = require("../helpers/runtime-script-errors");
const { domSymbolTree } = require("../helpers/internal-constants");
const idlUtils = require("../generated/utils");

const Event = require("../generated/Event").interface;

class EventTargetImpl {
  constructor() {
    this._eventListeners = Object.create(null);
  }

  addEventListener(type, callback, options) {
    // webidl2js currently can't handle neither optional arguments nor callback interfaces
    if (callback === undefined || callback === null) {
      callback = null;
    } else if (typeof callback !== "object" && typeof callback !== "function") {
      throw new TypeError("Only undefined, null, an object, or a function are allowed for the callback parameter");
    }

    options = normalizeEventHandlerOptions(options, ["capture", "once"]);

    if (callback === null) {
      return;
    }

    if (!this._eventListeners[type]) {
      this._eventListeners[type] = [];
    }

    for (let i = 0; i < this._eventListeners[type].length; ++i) {
      const listener = this._eventListeners[type][i];
      if (listener.options.capture === options.capture && listener.callback === callback) {
        return;
      }
    }

    this._eventListeners[type].push({
      callback,
      options
    });
  }

  removeEventListener(type, callback, options) {
    if (callback === undefined || callback === null) {
      callback = null;
    } else if (typeof callback !== "object" && typeof callback !== "function") {
      throw new TypeError("Only undefined, null, an object, or a function are allowed for the callback parameter");
    }

    options = normalizeEventHandlerOptions(options, ["capture"]);

    if (callback === null) {
      // Optimization, not in the spec.
      return;
    }

    if (!this._eventListeners[type]) {
      return;
    }

    for (let i = 0; i < this._eventListeners[type].length; ++i) {
      const listener = this._eventListeners[type][i];
      if (listener.callback === callback && listener.options.capture === options.capture) {
        this._eventListeners[type].splice(i, 1);
        break;
      }
    }
  }

  dispatchEvent(eventImpl) {
    if (eventImpl._dispatchFlag || !eventImpl._initializedFlag) {
      throw new DOMException("Tried to dispatch an uninitialized event", "InvalidStateError");
    }
    if (eventImpl.eventPhase !== Event.NONE) {
      throw new DOMException("Tried to dispatch a dispatching event", "InvalidStateError");
    }

    eventImpl.isTrusted = false;

    return this._dispatch(eventImpl);
  }

  _dispatch(eventImpl, targetOverride) {
    eventImpl._dispatchFlag = true;
    eventImpl.target = targetOverride || this;

    const eventPath = [];
    let { target } = eventImpl;
    let targetParent = domSymbolTree.parent(target);
    while (targetParent) {
      eventPath.push(targetParent);
      target = targetParent;
      targetParent = domSymbolTree.parent(targetParent);
    }
    if (eventImpl.type !== "load" && target._defaultView) {
      // https://html.spec.whatwg.org/#events-and-the-window-object
      eventPath.push(idlUtils.implForWrapper(target._defaultView));
    }

    eventImpl.eventPhase = Event.CAPTURING_PHASE;
    for (let i = eventPath.length - 1; i >= 0; --i) {
      if (eventImpl._stopPropagationFlag) {
        break;
      }

      const object = eventPath[i];
      const objectImpl = idlUtils.implForWrapper(object) || object; // window :(
      const eventListeners = objectImpl._eventListeners[eventImpl.type];
      invokeEventListeners(eventListeners, object, eventImpl);
    }

    eventImpl.eventPhase = Event.AT_TARGET;

    if (!eventImpl._stopPropagationFlag) {
      if (this._eventListeners[eventImpl.type]) {
        const eventListeners = this._eventListeners[eventImpl.type];
        invokeEventListeners(eventListeners, eventImpl.target, eventImpl);
      }
    }

    if (eventImpl.bubbles) {
      eventImpl.eventPhase = Event.BUBBLING_PHASE;
      for (let i = 0; i < eventPath.length; ++i) {
        if (eventImpl._stopPropagationFlag) {
          break;
        }

        const object = eventPath[i];
        const objectImpl = idlUtils.implForWrapper(object) || object; // window :(
        const eventListeners = objectImpl._eventListeners[eventImpl.type];
        invokeEventListeners(eventListeners, object, eventImpl);
      }
    }

    eventImpl._dispatchFlag = false;
    eventImpl._stopPropagationFlag = false;
    eventImpl._stopImmediatePropagationFlag = false;
    eventImpl.eventPhase = Event.NONE;
    eventImpl.currentTarget = null;
    return !eventImpl._canceledFlag;
  }
}

module.exports = {
  implementation: EventTargetImpl
};

function invokeEventListeners(listeners, target, eventImpl) {
  const wrapper = idlUtils.wrapperForImpl(target);
  const document = target._ownerDocument || (wrapper && (wrapper._document || wrapper._ownerDocument));
  // Will be falsy for windows that have closed
  if (!document) {
    return;
  }

  // workaround for events emitted on window (window-proxy)
  // the wrapper is the root window instance, but we only want to expose the vm proxy at all times
  if (wrapper._document && wrapper.constructor.name === "Window") {
    target = idlUtils.implForWrapper(wrapper._document)._defaultView;
  }
  eventImpl.currentTarget = target;
  if (!listeners) {
    return;
  }

  const handlers = listeners.slice();
  for (let i = 0; i < handlers.length; ++i) {
    if (eventImpl._stopImmediatePropagationFlag) {
      return;
    }

    const listener = handlers[i];
    const { capture, once/* , passive */ } = listener.options;

    if (listeners.indexOf(listener) === -1 ||
        (eventImpl.eventPhase === Event.CAPTURING_PHASE && !capture) ||
        (eventImpl.eventPhase === Event.BUBBLING_PHASE && capture)) {
      continue;
    }

    if (once) {
      listeners.splice(listeners.indexOf(listener), 1);
    }

    try {
      if (typeof listener.callback === "object") {
        if (typeof listener.callback.handleEvent === "function") {
          listener.callback.handleEvent(idlUtils.wrapperForImpl(eventImpl));
        }
      } else {
        listener.callback.call(idlUtils.wrapperForImpl(eventImpl.currentTarget), idlUtils.wrapperForImpl(eventImpl));
      }
    } catch (e) {
      let window = null;
      if (wrapper && wrapper._document) {
        // Triggered by Window
        window = wrapper;
      } else if (target._ownerDocument) {
        // Triggered by most webidl2js'ed instances
        window = target._ownerDocument._defaultView;
      } else if (wrapper._ownerDocument) {
        // Currently triggered by XHR and some other non-webidl2js things
        window = wrapper._ownerDocument._defaultView;
      }

      if (window) {
        reportException(window, e);
      }
      // Errors in window-less documents just get swallowed... can you think of anything better?
    }
  }
}

/**
 * Normalize the event listeners options argument in order to get always a valid options object
 * @param   {Object} options         - user defined options
 * @param   {Array} defaultBoolKeys  - boolean properties that should belong to the options object
 * @returns {Object} object containing at least the "defaultBoolKeys"
 */
function normalizeEventHandlerOptions(options, defaultBoolKeys) {
  const returnValue = {};

  // no need to go further here
  if (typeof options === "boolean" || options === null || typeof options === "undefined") {
    returnValue.capture = Boolean(options);
    return returnValue;
  }

  // non objects options so we typecast its value as "capture" value
  if (typeof options !== "object") {
    returnValue.capture = Boolean(options);
    // at this point we don't need to loop the "capture" key anymore
    defaultBoolKeys = defaultBoolKeys.filter(k => k !== "capture");
  }

  for (const key of defaultBoolKeys) {
    returnValue[key] = Boolean(options[key]);
  }

  return returnValue;
}
