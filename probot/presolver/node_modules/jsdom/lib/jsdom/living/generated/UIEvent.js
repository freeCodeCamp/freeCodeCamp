"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertUIEventInit = require("./UIEventInit.js").convert;
const impl = utils.implSymbol;
const Event = require("./Event.js");

function UIEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'UIEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'UIEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'UIEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertUIEventInit(curArg, { context: "Failed to construct 'UIEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(UIEvent.prototype, Event.interface.prototype);
Object.setPrototypeOf(UIEvent, Event.interface);

Object.defineProperty(UIEvent, "prototype", {
  value: UIEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

UIEvent.prototype.initUIEvent = function initUIEvent(typeArg) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'initUIEvent' on 'UIEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'initUIEvent' on 'UIEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, { context: "Failed to execute 'initUIEvent' on 'UIEvent': parameter 2" });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, { context: "Failed to execute 'initUIEvent' on 'UIEvent': parameter 3" });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[3];
    if (curArg !== undefined) {
      if (curArg === null || curArg === undefined) {
        curArg = null;
      } else {
        curArg = utils.tryImplForWrapper(curArg);
      }
    } else {
      curArg = null;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[4];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, { context: "Failed to execute 'initUIEvent' on 'UIEvent': parameter 5" });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  return this[impl].initUIEvent(...args);
};

Object.defineProperty(UIEvent.prototype, "view", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["view"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(UIEvent.prototype, "detail", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["detail"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(UIEvent.prototype, "which", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["which"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(UIEvent.prototype, Symbol.toStringTag, {
  value: "UIEvent",
  writable: false,
  enumerable: false,
  configurable: true
});

const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'UIEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(UIEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(UIEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Event._internalSetup(obj);
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      writable: false,
      enumerable: false,
      configurable: true
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: UIEvent,
  expose: {
    Window: { UIEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/UIEvent-impl.js");
