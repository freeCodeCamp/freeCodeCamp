"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const isNode = require("./Node.js").is;
const impl = utils.implSymbol;
const Node = require("./Node.js");
const ChildNode = require("./ChildNode.js");
const NonDocumentTypeChildNode = require("./NonDocumentTypeChildNode.js");

function CharacterData() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(CharacterData.prototype, Node.interface.prototype);
Object.setPrototypeOf(CharacterData, Node.interface);

Object.defineProperty(CharacterData, "prototype", {
  value: CharacterData.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

CharacterData.prototype.substringData = function substringData(offset, count) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'substringData' on 'CharacterData': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'substringData' on 'CharacterData': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'substringData' on 'CharacterData': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].substringData(...args);
};

CharacterData.prototype.appendData = function appendData(data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'appendData' on 'CharacterData': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'appendData' on 'CharacterData': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].appendData(...args);
};

CharacterData.prototype.insertData = function insertData(offset, data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'insertData' on 'CharacterData': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'insertData' on 'CharacterData': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'insertData' on 'CharacterData': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].insertData(...args);
};

CharacterData.prototype.deleteData = function deleteData(offset, count) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'deleteData' on 'CharacterData': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'deleteData' on 'CharacterData': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'deleteData' on 'CharacterData': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].deleteData(...args);
};

CharacterData.prototype.replaceData = function replaceData(offset, count, data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 3) {
    throw new TypeError(
      "Failed to execute 'replaceData' on 'CharacterData': 3 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'replaceData' on 'CharacterData': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["unsigned long"](curArg, {
      context: "Failed to execute 'replaceData' on 'CharacterData': parameter 2"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'replaceData' on 'CharacterData': parameter 3"
    });
    args.push(curArg);
  }
  return this[impl].replaceData(...args);
};

CharacterData.prototype.before = function before() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    if (isNode(curArg)) {
      curArg = utils.implForWrapper(curArg);
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'before' on 'CharacterData': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].before(...args);
};

CharacterData.prototype.after = function after() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    if (isNode(curArg)) {
      curArg = utils.implForWrapper(curArg);
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'after' on 'CharacterData': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].after(...args);
};

CharacterData.prototype.replaceWith = function replaceWith() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    if (isNode(curArg)) {
      curArg = utils.implForWrapper(curArg);
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'replaceWith' on 'CharacterData': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].replaceWith(...args);
};

CharacterData.prototype.remove = function remove() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].remove();
};

Object.defineProperty(CharacterData.prototype, "data", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["data"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'data' property on 'CharacterData': The provided value",
      treatNullAsEmptyString: true
    });

    this[impl]["data"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(CharacterData.prototype, "length", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["length"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(CharacterData.prototype, "previousElementSibling", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["previousElementSibling"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(CharacterData.prototype, "nextElementSibling", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["nextElementSibling"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(CharacterData.prototype, Symbol.toStringTag, {
  value: "CharacterData",
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
    throw new TypeError(`${context} is not of type 'CharacterData'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(CharacterData.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(CharacterData.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Node._internalSetup(obj);
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
  interface: CharacterData,
  expose: {
    Window: { CharacterData }
  }
}; // iface
module.exports = iface;

ChildNode._mixedIntoPredicates.push(module.exports.is);

NonDocumentTypeChildNode._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/CharacterData-impl.js");
