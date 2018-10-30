"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertCompositionEventInit = require("./CompositionEventInit.js").convert;
const impl = utils.implSymbol;
const UIEvent = require("./UIEvent.js");

function CompositionEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'CompositionEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'CompositionEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'CompositionEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertCompositionEventInit(curArg, { context: "Failed to construct 'CompositionEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(CompositionEvent.prototype, UIEvent.interface.prototype);
Object.setPrototypeOf(CompositionEvent, UIEvent.interface);

Object.defineProperty(CompositionEvent, "prototype", {
  value: CompositionEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

CompositionEvent.prototype.initCompositionEvent = function initCompositionEvent(typeArg) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'initCompositionEvent' on 'CompositionEvent': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'initCompositionEvent' on 'CompositionEvent': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initCompositionEvent' on 'CompositionEvent': parameter 2"
      });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initCompositionEvent' on 'CompositionEvent': parameter 3"
      });
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
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'initCompositionEvent' on 'CompositionEvent': parameter 5"
      });
    } else {
      curArg = "";
    }
    args.push(curArg);
  }
  return this[impl].initCompositionEvent(...args);
};

Object.defineProperty(CompositionEvent.prototype, "data", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["data"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(CompositionEvent.prototype, Symbol.toStringTag, {
  value: "CompositionEvent",
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
    throw new TypeError(`${context} is not of type 'CompositionEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(CompositionEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(CompositionEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    UIEvent._internalSetup(obj);
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
  interface: CompositionEvent,
  expose: {
    Window: { CompositionEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/CompositionEvent-impl.js");
