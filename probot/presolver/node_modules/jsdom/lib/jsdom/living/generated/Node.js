"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertGetRootNodeOptions = require("./GetRootNodeOptions.js").convert;
const impl = utils.implSymbol;
const EventTarget = require("./EventTarget.js");

function Node() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(Node.prototype, EventTarget.interface.prototype);
Object.setPrototypeOf(Node, EventTarget.interface);

Object.defineProperty(Node, "prototype", {
  value: Node.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Node.prototype.getRootNode = function getRootNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertGetRootNodeOptions(curArg, { context: "Failed to execute 'getRootNode' on 'Node': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getRootNode(...args));
};

Node.prototype.hasChildNodes = function hasChildNodes() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].hasChildNodes();
};

Node.prototype.normalize = function normalize() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].normalize();
};

Node.prototype.cloneNode = function cloneNode() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, { context: "Failed to execute 'cloneNode' on 'Node': parameter 1" });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].cloneNode(...args));
};

Node.prototype.isEqualNode = function isEqualNode(otherNode) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'isEqualNode' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = module.exports.convert(curArg, { context: "Failed to execute 'isEqualNode' on 'Node': parameter 1" });
    }
    args.push(curArg);
  }
  return this[impl].isEqualNode(...args);
};

Node.prototype.isSameNode = function isSameNode(otherNode) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'isSameNode' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = module.exports.convert(curArg, { context: "Failed to execute 'isSameNode' on 'Node': parameter 1" });
    }
    args.push(curArg);
  }
  return this[impl].isSameNode(...args);
};

Node.prototype.compareDocumentPosition = function compareDocumentPosition(other) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'compareDocumentPosition' on 'Node': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = module.exports.convert(curArg, {
      context: "Failed to execute 'compareDocumentPosition' on 'Node': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].compareDocumentPosition(...args);
};

Node.prototype.contains = function contains(other) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'contains' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = module.exports.convert(curArg, { context: "Failed to execute 'contains' on 'Node': parameter 1" });
    }
    args.push(curArg);
  }
  return this[impl].contains(...args);
};

Node.prototype.lookupPrefix = function lookupPrefix(namespace) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'lookupPrefix' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'lookupPrefix' on 'Node': parameter 1" });
    }
    args.push(curArg);
  }
  return this[impl].lookupPrefix(...args);
};

Node.prototype.lookupNamespaceURI = function lookupNamespaceURI(prefix) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'lookupNamespaceURI' on 'Node': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'lookupNamespaceURI' on 'Node': parameter 1"
      });
    }
    args.push(curArg);
  }
  return this[impl].lookupNamespaceURI(...args);
};

Node.prototype.isDefaultNamespace = function isDefaultNamespace(namespace) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'isDefaultNamespace' on 'Node': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = conversions["DOMString"](curArg, {
        context: "Failed to execute 'isDefaultNamespace' on 'Node': parameter 1"
      });
    }
    args.push(curArg);
  }
  return this[impl].isDefaultNamespace(...args);
};

Node.prototype.insertBefore = function insertBefore(node, child) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'insertBefore' on 'Node': 2 arguments required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = module.exports.convert(curArg, { context: "Failed to execute 'insertBefore' on 'Node': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg === null || curArg === undefined) {
      curArg = null;
    } else {
      curArg = module.exports.convert(curArg, { context: "Failed to execute 'insertBefore' on 'Node': parameter 2" });
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].insertBefore(...args));
};

Node.prototype.appendChild = function appendChild(node) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'appendChild' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = module.exports.convert(curArg, { context: "Failed to execute 'appendChild' on 'Node': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].appendChild(...args));
};

Node.prototype.replaceChild = function replaceChild(node, child) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'replaceChild' on 'Node': 2 arguments required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = module.exports.convert(curArg, { context: "Failed to execute 'replaceChild' on 'Node': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = module.exports.convert(curArg, { context: "Failed to execute 'replaceChild' on 'Node': parameter 2" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].replaceChild(...args));
};

Node.prototype.removeChild = function removeChild(child) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'removeChild' on 'Node': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = module.exports.convert(curArg, { context: "Failed to execute 'removeChild' on 'Node': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].removeChild(...args));
};

Object.defineProperty(Node.prototype, "nodeType", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["nodeType"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "nodeName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["nodeName"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "baseURI", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["baseURI"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "isConnected", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["isConnected"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "ownerDocument", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ownerDocument"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "parentNode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["parentNode"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "parentElement", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["parentElement"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "childNodes", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "childNodes", () => {
      return utils.tryWrapperForImpl(this[impl]["childNodes"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "firstChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["firstChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "lastChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["lastChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "previousSibling", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["previousSibling"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "nextSibling", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["nextSibling"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "nodeValue", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["nodeValue"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'nodeValue' property on 'Node': The provided value"
      });
    }
    this[impl]["nodeValue"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node.prototype, "textContent", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["textContent"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = conversions["DOMString"](V, {
        context: "Failed to set the 'textContent' property on 'Node': The provided value"
      });
    }
    this[impl]["textContent"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Node, "ELEMENT_NODE", {
  value: 1,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ELEMENT_NODE", {
  value: 1,
  enumerable: true
});

Object.defineProperty(Node, "ATTRIBUTE_NODE", {
  value: 2,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ATTRIBUTE_NODE", {
  value: 2,
  enumerable: true
});

Object.defineProperty(Node, "TEXT_NODE", {
  value: 3,
  enumerable: true
});
Object.defineProperty(Node.prototype, "TEXT_NODE", {
  value: 3,
  enumerable: true
});

Object.defineProperty(Node, "CDATA_SECTION_NODE", {
  value: 4,
  enumerable: true
});
Object.defineProperty(Node.prototype, "CDATA_SECTION_NODE", {
  value: 4,
  enumerable: true
});

Object.defineProperty(Node, "ENTITY_REFERENCE_NODE", {
  value: 5,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ENTITY_REFERENCE_NODE", {
  value: 5,
  enumerable: true
});

Object.defineProperty(Node, "ENTITY_NODE", {
  value: 6,
  enumerable: true
});
Object.defineProperty(Node.prototype, "ENTITY_NODE", {
  value: 6,
  enumerable: true
});

Object.defineProperty(Node, "PROCESSING_INSTRUCTION_NODE", {
  value: 7,
  enumerable: true
});
Object.defineProperty(Node.prototype, "PROCESSING_INSTRUCTION_NODE", {
  value: 7,
  enumerable: true
});

Object.defineProperty(Node, "COMMENT_NODE", {
  value: 8,
  enumerable: true
});
Object.defineProperty(Node.prototype, "COMMENT_NODE", {
  value: 8,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_NODE", {
  value: 9,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_NODE", {
  value: 9,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_TYPE_NODE", {
  value: 10,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_TYPE_NODE", {
  value: 10,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_FRAGMENT_NODE", {
  value: 11,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_FRAGMENT_NODE", {
  value: 11,
  enumerable: true
});

Object.defineProperty(Node, "NOTATION_NODE", {
  value: 12,
  enumerable: true
});
Object.defineProperty(Node.prototype, "NOTATION_NODE", {
  value: 12,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_DISCONNECTED", {
  value: 0x01,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_DISCONNECTED", {
  value: 0x01,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_PRECEDING", {
  value: 0x02,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_PRECEDING", {
  value: 0x02,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_FOLLOWING", {
  value: 0x04,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_FOLLOWING", {
  value: 0x04,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_CONTAINS", {
  value: 0x08,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINS", {
  value: 0x08,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_CONTAINED_BY", {
  value: 0x10,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_CONTAINED_BY", {
  value: 0x10,
  enumerable: true
});

Object.defineProperty(Node, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  value: 0x20,
  enumerable: true
});
Object.defineProperty(Node.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", {
  value: 0x20,
  enumerable: true
});

Object.defineProperty(Node.prototype, Symbol.toStringTag, {
  value: "Node",
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
    throw new TypeError(`${context} is not of type 'Node'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Node.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Node.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    EventTarget._internalSetup(obj);
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
  interface: Node,
  expose: {
    Window: { Node }
  }
}; // iface
module.exports = iface;

const Impl = require("../nodes/Node-impl.js");
