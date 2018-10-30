"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertEventInit = require("./EventInit.js").convert;
const impl = utils.implSymbol;

function Event(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'Event'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError("Failed to construct 'Event': 1 argument required, but only " + arguments.length + " present.");
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'Event': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertEventInit(curArg, { context: "Failed to construct 'Event': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.defineProperty(Event, "prototype", {
  value: Event.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Event.prototype.stopPropagation = function stopPropagation() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].stopPropagation();
};

Event.prototype.stopImmediatePropagation = function stopImmediatePropagation() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].stopImmediatePropagation();
};

Event.prototype.preventDefault = function preventDefault() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].preventDefault();
};

Event.prototype.initEvent = function initEvent(type) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'initEvent' on 'Event': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'initEvent' on 'Event': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, { context: "Failed to execute 'initEvent' on 'Event': parameter 2" });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, { context: "Failed to execute 'initEvent' on 'Event': parameter 3" });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  return this[impl].initEvent(...args);
};

Object.defineProperty(Event.prototype, "type", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["type"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "target", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["target"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "srcElement", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["srcElement"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "currentTarget", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["currentTarget"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "eventPhase", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["eventPhase"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "cancelBubble", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["cancelBubble"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'cancelBubble' property on 'Event': The provided value"
    });

    this[impl]["cancelBubble"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "bubbles", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["bubbles"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "cancelable", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["cancelable"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "returnValue", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["returnValue"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'returnValue' property on 'Event': The provided value"
    });

    this[impl]["returnValue"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "defaultPrevented", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["defaultPrevented"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event.prototype, "timeStamp", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["timeStamp"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Event, "NONE", {
  value: 0,
  enumerable: true
});
Object.defineProperty(Event.prototype, "NONE", {
  value: 0,
  enumerable: true
});

Object.defineProperty(Event, "CAPTURING_PHASE", {
  value: 1,
  enumerable: true
});
Object.defineProperty(Event.prototype, "CAPTURING_PHASE", {
  value: 1,
  enumerable: true
});

Object.defineProperty(Event, "AT_TARGET", {
  value: 2,
  enumerable: true
});
Object.defineProperty(Event.prototype, "AT_TARGET", {
  value: 2,
  enumerable: true
});

Object.defineProperty(Event, "BUBBLING_PHASE", {
  value: 3,
  enumerable: true
});
Object.defineProperty(Event.prototype, "BUBBLING_PHASE", {
  value: 3,
  enumerable: true
});

Object.defineProperty(Event.prototype, Symbol.toStringTag, {
  value: "Event",
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
    throw new TypeError(`${context} is not of type 'Event'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Event.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Event.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Object.defineProperty(obj, "isTrusted", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return obj[impl]["isTrusted"];
      },

      enumerable: true,
      configurable: false
    });
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
  interface: Event,
  expose: {
    Window: { Event },
    Worker: { Event },
    AudioWorklet: { Event }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/Event-impl.js");
