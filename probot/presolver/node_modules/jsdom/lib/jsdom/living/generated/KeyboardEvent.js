"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertKeyboardEventInit = require("./KeyboardEventInit.js").convert;
const impl = utils.implSymbol;
const UIEvent = require("./UIEvent.js");

function KeyboardEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'KeyboardEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'KeyboardEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'KeyboardEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertKeyboardEventInit(curArg, { context: "Failed to construct 'KeyboardEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(KeyboardEvent.prototype, UIEvent.interface.prototype);
Object.setPrototypeOf(KeyboardEvent, UIEvent.interface);

Object.defineProperty(KeyboardEvent, "prototype", {
  value: KeyboardEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

KeyboardEvent.prototype.getModifierState = function getModifierState(keyArg) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getModifierState' on 'KeyboardEvent': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getModifierState' on 'KeyboardEvent': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].getModifierState(...args);
};

KeyboardEvent.prototype.initKeyboardEvent = function initKeyboardEvent(typeArg) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 2"
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
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 3"
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
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 5"
      });
    } else {
      curArg = "";
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[5];
    if (curArg !== undefined) {
      curArg = conversions["unsigned long"](curArg, {
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 6"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[6];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 7"
      });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[7];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 8"
      });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[8];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 9"
      });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[9];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initKeyboardEvent' on 'KeyboardEvent': parameter 10"
      });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  return this[impl].initKeyboardEvent(...args);
};

Object.defineProperty(KeyboardEvent.prototype, "key", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["key"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "code", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["code"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "location", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["location"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "ctrlKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["ctrlKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "shiftKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["shiftKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "altKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["altKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "metaKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["metaKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "repeat", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["repeat"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "isComposing", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["isComposing"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "charCode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["charCode"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent.prototype, "keyCode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["keyCode"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_STANDARD", {
  value: 0x00,
  enumerable: true
});
Object.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_STANDARD", {
  value: 0x00,
  enumerable: true
});

Object.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_LEFT", {
  value: 0x01,
  enumerable: true
});
Object.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_LEFT", {
  value: 0x01,
  enumerable: true
});

Object.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_RIGHT", {
  value: 0x02,
  enumerable: true
});
Object.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_RIGHT", {
  value: 0x02,
  enumerable: true
});

Object.defineProperty(KeyboardEvent, "DOM_KEY_LOCATION_NUMPAD", {
  value: 0x03,
  enumerable: true
});
Object.defineProperty(KeyboardEvent.prototype, "DOM_KEY_LOCATION_NUMPAD", {
  value: 0x03,
  enumerable: true
});

Object.defineProperty(KeyboardEvent.prototype, Symbol.toStringTag, {
  value: "KeyboardEvent",
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
    throw new TypeError(`${context} is not of type 'KeyboardEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(KeyboardEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(KeyboardEvent.prototype);
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
  interface: KeyboardEvent,
  expose: {
    Window: { KeyboardEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/KeyboardEvent-impl.js");
