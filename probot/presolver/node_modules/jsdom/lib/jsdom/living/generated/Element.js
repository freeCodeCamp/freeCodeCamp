"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertAttr = require("./Attr.js").convert;
const isNode = require("./Node.js").is;
const impl = utils.implSymbol;
const Node = require("./Node.js");
const ChildNode = require("./ChildNode.js");
const NonDocumentTypeChildNode = require("./NonDocumentTypeChildNode.js");
const ParentNode = require("./ParentNode.js");

function Element() {
  throw new TypeError("Illegal constructor");
}

Object.setPrototypeOf(Element.prototype, Node.interface.prototype);
Object.setPrototypeOf(Element, Node.interface);

Object.defineProperty(Element, "prototype", {
  value: Element.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Element.prototype.hasAttributes = function hasAttributes() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].hasAttributes();
};

Element.prototype.getAttributeNames = function getAttributeNames() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].getAttributeNames());
};

Element.prototype.getAttribute = function getAttribute(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getAttribute' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getAttribute' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].getAttribute(...args);
};

Element.prototype.getAttributeNS = function getAttributeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getAttributeNS' on 'Element': 2 arguments required, but only " +
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
        context: "Failed to execute 'getAttributeNS' on 'Element': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getAttributeNS' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].getAttributeNS(...args);
};

Element.prototype.setAttribute = function setAttribute(qualifiedName, value) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'setAttribute' on 'Element': 2 arguments required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setAttribute' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setAttribute' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].setAttribute(...args);
};

Element.prototype.setAttributeNS = function setAttributeNS(namespace, qualifiedName, value) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 3) {
    throw new TypeError(
      "Failed to execute 'setAttributeNS' on 'Element': 3 arguments required, but only " +
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
        context: "Failed to execute 'setAttributeNS' on 'Element': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setAttributeNS' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'setAttributeNS' on 'Element': parameter 3"
    });
    args.push(curArg);
  }
  return this[impl].setAttributeNS(...args);
};

Element.prototype.removeAttribute = function removeAttribute(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'removeAttribute' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'removeAttribute' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].removeAttribute(...args);
};

Element.prototype.removeAttributeNS = function removeAttributeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'removeAttributeNS' on 'Element': 2 arguments required, but only " +
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
        context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'removeAttributeNS' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].removeAttributeNS(...args);
};

Element.prototype.hasAttribute = function hasAttribute(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'hasAttribute' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'hasAttribute' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].hasAttribute(...args);
};

Element.prototype.hasAttributeNS = function hasAttributeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'hasAttributeNS' on 'Element': 2 arguments required, but only " +
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
        context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'hasAttributeNS' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].hasAttributeNS(...args);
};

Element.prototype.getAttributeNode = function getAttributeNode(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getAttributeNode' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getAttributeNode' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getAttributeNode(...args));
};

Element.prototype.getAttributeNodeNS = function getAttributeNodeNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getAttributeNodeNS' on 'Element': 2 arguments required, but only " +
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
        context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getAttributeNodeNS' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getAttributeNodeNS(...args));
};

Element.prototype.setAttributeNode = function setAttributeNode(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setAttributeNode' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertAttr(curArg, { context: "Failed to execute 'setAttributeNode' on 'Element': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].setAttributeNode(...args));
};

Element.prototype.setAttributeNodeNS = function setAttributeNodeNS(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'setAttributeNodeNS' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertAttr(curArg, { context: "Failed to execute 'setAttributeNodeNS' on 'Element': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].setAttributeNodeNS(...args));
};

Element.prototype.removeAttributeNode = function removeAttributeNode(attr) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'removeAttributeNode' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertAttr(curArg, { context: "Failed to execute 'removeAttributeNode' on 'Element': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].removeAttributeNode(...args));
};

Element.prototype.closest = function closest(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'closest' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'closest' on 'Element': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].closest(...args));
};

Element.prototype.matches = function matches(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'matches' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'matches' on 'Element': parameter 1" });
    args.push(curArg);
  }
  return this[impl].matches(...args);
};

Element.prototype.webkitMatchesSelector = function webkitMatchesSelector(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'webkitMatchesSelector' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'webkitMatchesSelector' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return this[impl].webkitMatchesSelector(...args);
};

Element.prototype.getElementsByTagName = function getElementsByTagName(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementsByTagName' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementsByTagName' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementsByTagName(...args));
};

Element.prototype.getElementsByTagNameNS = function getElementsByTagNameNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getElementsByTagNameNS' on 'Element': 2 arguments required, but only " +
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
        context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementsByTagNameNS' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementsByTagNameNS(...args));
};

Element.prototype.getElementsByClassName = function getElementsByClassName(classNames) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementsByClassName' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementsByClassName' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementsByClassName(...args));
};

Element.prototype.insertAdjacentHTML = function insertAdjacentHTML(position, text) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'insertAdjacentHTML' on 'Element': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'insertAdjacentHTML' on 'Element': parameter 2"
    });
    args.push(curArg);
  }
  return this[impl].insertAdjacentHTML(...args);
};

Element.prototype.getClientRects = function getClientRects() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].getClientRects());
};

Element.prototype.getBoundingClientRect = function getBoundingClientRect() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].getBoundingClientRect());
};

Element.prototype.before = function before() {
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
        context: "Failed to execute 'before' on 'Element': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].before(...args);
};

Element.prototype.after = function after() {
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
        context: "Failed to execute 'after' on 'Element': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].after(...args);
};

Element.prototype.replaceWith = function replaceWith() {
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
        context: "Failed to execute 'replaceWith' on 'Element': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].replaceWith(...args);
};

Element.prototype.remove = function remove() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].remove();
};

Element.prototype.prepend = function prepend() {
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
        context: "Failed to execute 'prepend' on 'Element': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].prepend(...args);
};

Element.prototype.append = function append() {
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
        context: "Failed to execute 'append' on 'Element': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].append(...args);
};

Element.prototype.querySelector = function querySelector(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelector' on 'Element': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'querySelector' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].querySelector(...args));
};

Element.prototype.querySelectorAll = function querySelectorAll(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelectorAll' on 'Element': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'querySelectorAll' on 'Element': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].querySelectorAll(...args));
};

Object.defineProperty(Element.prototype, "namespaceURI", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["namespaceURI"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "prefix", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["prefix"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "localName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["localName"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "tagName", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["tagName"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "id", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("id");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, { context: "Failed to set the 'id' property on 'Element': The provided value" });

    this.setAttribute("id", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "className", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttribute("class");
    return value === null ? "" : value;
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'className' property on 'Element': The provided value"
    });

    this.setAttribute("class", V);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "classList", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "classList", () => {
      return utils.tryWrapperForImpl(this[impl]["classList"]);
    });
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    this.classList.value = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "attributes", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "attributes", () => {
      return utils.tryWrapperForImpl(this[impl]["attributes"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "innerHTML", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["innerHTML"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'innerHTML' property on 'Element': The provided value",
      treatNullAsEmptyString: true
    });

    this[impl]["innerHTML"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "outerHTML", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["outerHTML"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'outerHTML' property on 'Element': The provided value",
      treatNullAsEmptyString: true
    });

    this[impl]["outerHTML"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollTop", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["scrollTop"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unrestricted double"](V, {
      context: "Failed to set the 'scrollTop' property on 'Element': The provided value"
    });

    this[impl]["scrollTop"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollLeft", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["scrollLeft"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["unrestricted double"](V, {
      context: "Failed to set the 'scrollLeft' property on 'Element': The provided value"
    });

    this[impl]["scrollLeft"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollWidth", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["scrollWidth"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "scrollHeight", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["scrollHeight"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientTop", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["clientTop"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientLeft", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["clientLeft"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientWidth", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["clientWidth"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "clientHeight", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["clientHeight"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "previousElementSibling", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["previousElementSibling"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "nextElementSibling", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["nextElementSibling"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "children", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "children", () => {
      return utils.tryWrapperForImpl(this[impl]["children"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "firstElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["firstElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "lastElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["lastElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, "childElementCount", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["childElementCount"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Element.prototype, Symbol.toStringTag, {
  value: "Element",
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
    throw new TypeError(`${context} is not of type 'Element'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Element.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Element.prototype);
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
  interface: Element,
  expose: {
    Window: { Element }
  }
}; // iface
module.exports = iface;

ChildNode._mixedIntoPredicates.push(module.exports.is);

NonDocumentTypeChildNode._mixedIntoPredicates.push(module.exports.is);

ParentNode._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/Element-impl.js");
