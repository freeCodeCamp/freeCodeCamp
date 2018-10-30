"use strict";

const idlUtils = require("../generated/utils");
const UIEventInit = require("../generated/UIEventInit");
const EventImpl = require("./Event-impl").implementation;

// Until webidl2js gains support for checking for Window, this would have to do.
function isWindow(val) {
  if (typeof val !== "object") {
    return false;
  }
  const wrapper = idlUtils.wrapperForImpl(val);
  if (typeof wrapper === "object") {
    return wrapper === wrapper._globalProxy;
  }

  // `val` may be either impl or wrapper currently, because webidl2js currently unwraps Window objects (and their global
  // proxies) to their underlying EventTargetImpl during conversion, which is not what we want. But at the same time,
  // some internal usage call this constructor with the actual global proxy.
  return isWindow(idlUtils.implForWrapper(val));
}

class UIEventImpl extends EventImpl {
  constructor(args, privateData) {
    const eventInitDict = args[1];

    // undefined check included so that we can omit the property in internal usage.
    if (eventInitDict && eventInitDict.view !== null && eventInitDict.view !== undefined) {
      if (!isWindow(eventInitDict.view)) {
        throw new TypeError(`Failed to construct '${new.target.name.replace(/Impl$/, "")}': member view is not of ` +
                            "type Window.");
      }
    }

    super(args, privateData);
  }

  initUIEvent(type, bubbles, cancelable, view, detail) {
    if (view !== null) {
      if (!isWindow(view)) {
        throw new TypeError(`Failed to execute 'initUIEvent' on '${this.constructor.name.replace(/Impl$/, "")}': ` +
                            "parameter 4 is not of type 'Window'.");
      }
    }

    if (this._dispatchFlag) {
      return;
    }

    this.initEvent(type, bubbles, cancelable);
    this.view = view;
    this.detail = detail;
  }
}
UIEventImpl.defaultInit = UIEventInit.convert(undefined);

module.exports = {
  implementation: UIEventImpl
};
