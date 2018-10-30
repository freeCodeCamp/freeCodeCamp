"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertMessageEventInit = require("./MessageEventInit.js").convert;
const impl = utils.implSymbol;
const Event = require("./Event.js");

function MessageEvent(type) {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'MessageEvent'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to construct 'MessageEvent': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to construct 'MessageEvent': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = convertMessageEventInit(curArg, { context: "Failed to construct 'MessageEvent': parameter 2" });
    args.push(curArg);
  }

  iface.setup(this, args);
}

Object.setPrototypeOf(MessageEvent.prototype, Event.interface.prototype);
Object.setPrototypeOf(MessageEvent, Event.interface);

Object.defineProperty(MessageEvent, "prototype", {
  value: MessageEvent.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

MessageEvent.prototype.initMessageEvent = function initMessageEvent(type) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'initMessageEvent' on 'MessageEvent': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, {
        context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 2"
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
        context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 3"
      });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[3];
    if (curArg !== undefined) {
      curArg = conversions["any"](curArg, {
        context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 4"
      });
    } else {
      curArg = null;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[4];
    if (curArg !== undefined) {
      curArg = conversions["USVString"](curArg, {
        context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 5"
      });
    } else {
      curArg = "";
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[5];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 6"
      });
    } else {
      curArg = "";
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[6];
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
    let curArg = arguments[7];
    if (curArg !== undefined) {
      if (!utils.isObject(curArg)) {
        throw new TypeError(
          "Failed to execute 'initMessageEvent' on 'MessageEvent': parameter 8" + " is not an iterable object."
        );
      } else {
        const V = [];
        const tmp = curArg;
        for (let nextItem of tmp) {
          nextItem = utils.tryImplForWrapper(nextItem);

          V.push(nextItem);
        }
        curArg = V;
      }
    } else {
      curArg = [];
    }
    args.push(curArg);
  }
  return this[impl].initMessageEvent(...args);
};

Object.defineProperty(MessageEvent.prototype, "data", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["data"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MessageEvent.prototype, "origin", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["origin"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MessageEvent.prototype, "lastEventId", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["lastEventId"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MessageEvent.prototype, "source", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["source"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MessageEvent.prototype, "ports", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ports"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(MessageEvent.prototype, Symbol.toStringTag, {
  value: "MessageEvent",
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
    throw new TypeError(`${context} is not of type 'MessageEvent'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(MessageEvent.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(MessageEvent.prototype);
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
  interface: MessageEvent,
  expose: {
    Window: { MessageEvent },
    Worker: { MessageEvent },
    AudioWorklet: { MessageEvent }
  }
}; // iface
module.exports = iface;

const Impl = require("../events/MessageEvent-impl.js");
