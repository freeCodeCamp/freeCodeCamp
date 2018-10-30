"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertMouseEventInit = require("./MouseEventInit.js").convert;
const convertEventTarget = require("./EventTarget.js").convert;
const impl = utils.implSymbol;
const UIEvent = require("./UIEvent.js");

function MouseEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'MouseEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'MouseEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'MouseEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertMouseEventInit(curArg, { context: "Failed to construct 'MouseEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(MouseEvent.prototype, UIEvent.interface.prototype);
Object.setPrototypeOf(MouseEvent, UIEvent.interface);

Object.defineProperty(MouseEvent, "prototype", {
  value: MouseEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

MouseEvent.prototype.getModifierState = function getModifierState(keyArg) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getModifierState' on 'MouseEvent': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getModifierState' on 'MouseEvent': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].getModifierState(...args);
};

MouseEvent.prototype.initMouseEvent = function initMouseEvent(typeArg) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'initMouseEvent' on 'MouseEvent': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 2"
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
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 3"
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
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 5"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[5];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 6"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[6];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 7"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[7];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 8"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[8];
    if (curArg !== undefined) {
      curArg = conversions["long"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 9"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[9];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 10"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[10];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 11"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[11];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 12"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[12];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 13"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[13];
    if (curArg !== undefined) {
      curArg = conversions["short"](curArg, {
        context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 14"
      });
    } else {
      curArg = 0;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[14];
    if (curArg !== undefined) {
      if (curArg === null || curArg === undefined) {
        curArg = null;
      } else {
        curArg = convertEventTarget(curArg, {
          context: "Failed to execute 'initMouseEvent' on 'MouseEvent': parameter 15"
        });
      }
    } else {
      curArg = null;
    }
    args.push(curArg);
  }
  return this[impl].initMouseEvent(...args);
};

Object.defineProperty(MouseEvent.prototype, "screenX", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["screenX"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "screenY", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["screenY"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "clientX", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["clientX"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "clientY", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["clientY"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "ctrlKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["ctrlKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "shiftKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["shiftKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "altKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["altKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "metaKey", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["metaKey"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "button", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["button"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "buttons", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["buttons"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, "relatedTarget", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["relatedTarget"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MouseEvent.prototype, Symbol.toStringTag, {
  value: "MouseEvent",
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
    throw new TypeError(`${context} is not of type 'MouseEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(MouseEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(MouseEvent.prototype);
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
  interface: MouseEvent,
  expose: {
    Window: { MouseEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/MouseEvent-impl.js");
