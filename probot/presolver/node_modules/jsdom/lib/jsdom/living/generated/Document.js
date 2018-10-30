"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const convertNode = require("./Node.js").convert;
const isNode = require("./Node.js").is;
const convertHTMLElement = require("./HTMLElement.js").convert;
const impl = utils.implSymbol;
const Node = require("./Node.js");
const GlobalEventHandlers = require("./GlobalEventHandlers.js");
const NonElementParentNode = require("./NonElementParentNode.js");
const ParentNode = require("./ParentNode.js");

function Document() {
  if (new.target === undefined) {
    throw new TypeError(
      "Failed to construct 'Document'. Please use the 'new' operator; this constructor " +
        "cannot be called as a function."
    );
  }

  iface.setup(this);
}

Object.setPrototypeOf(Document.prototype, Node.interface.prototype);
Object.setPrototypeOf(Document, Node.interface);

Object.defineProperty(Document, "prototype", {
  value: Document.prototype,
  writable: false,
  enumerable: false,
  configurable: false
});

Document.prototype.getElementsByTagName = function getElementsByTagName(qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementsByTagName' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementsByTagName' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementsByTagName(...args));
};

Document.prototype.getElementsByTagNameNS = function getElementsByTagNameNS(namespace, localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'getElementsByTagNameNS' on 'Document': 2 arguments required, but only " +
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
        context: "Failed to execute 'getElementsByTagNameNS' on 'Document': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementsByTagNameNS' on 'Document': parameter 2"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementsByTagNameNS(...args));
};

Document.prototype.getElementsByClassName = function getElementsByClassName(classNames) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementsByClassName' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementsByClassName' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementsByClassName(...args));
};

Document.prototype.createElement = function createElement(localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createElement' on 'Document': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createElement' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createElement(...args));
};

Document.prototype.createElementNS = function createElementNS(namespace, qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'createElementNS' on 'Document': 2 arguments required, but only " +
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
        context: "Failed to execute 'createElementNS' on 'Document': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createElementNS' on 'Document': parameter 2"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createElementNS(...args));
};

Document.prototype.createDocumentFragment = function createDocumentFragment() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return utils.tryWrapperForImpl(this[impl].createDocumentFragment());
};

Document.prototype.createTextNode = function createTextNode(data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createTextNode' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createTextNode' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createTextNode(...args));
};

Document.prototype.createCDATASection = function createCDATASection(data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createCDATASection' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createCDATASection' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createCDATASection(...args));
};

Document.prototype.createComment = function createComment(data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createComment' on 'Document': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createComment' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createComment(...args));
};

Document.prototype.createProcessingInstruction = function createProcessingInstruction(target, data) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'createProcessingInstruction' on 'Document': 2 arguments required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createProcessingInstruction' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createProcessingInstruction' on 'Document': parameter 2"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createProcessingInstruction(...args));
};

Document.prototype.importNode = function importNode(node) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'importNode' on 'Document': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertNode(curArg, { context: "Failed to execute 'importNode' on 'Document': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["boolean"](curArg, { context: "Failed to execute 'importNode' on 'Document': parameter 2" });
    } else {
      curArg = false;
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].importNode(...args));
};

Document.prototype.adoptNode = function adoptNode(node) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'adoptNode' on 'Document': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertNode(curArg, { context: "Failed to execute 'adoptNode' on 'Document': parameter 1" });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].adoptNode(...args));
};

Document.prototype.createAttribute = function createAttribute(localName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createAttribute' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createAttribute' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createAttribute(...args));
};

Document.prototype.createAttributeNS = function createAttributeNS(namespace, qualifiedName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 2) {
    throw new TypeError(
      "Failed to execute 'createAttributeNS' on 'Document': 2 arguments required, but only " +
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
        context: "Failed to execute 'createAttributeNS' on 'Document': parameter 1"
      });
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createAttributeNS' on 'Document': parameter 2"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createAttributeNS(...args));
};

Document.prototype.createEvent = function createEvent(_interface) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createEvent' on 'Document': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'createEvent' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].createEvent(...args));
};

Document.prototype.createNodeIterator = function createNodeIterator(root) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createNodeIterator' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertNode(curArg, { context: "Failed to execute 'createNodeIterator' on 'Document': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["unsigned long"](curArg, {
        context: "Failed to execute 'createNodeIterator' on 'Document': parameter 2"
      });
    } else {
      curArg = 0xffffffff;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
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
  return utils.tryWrapperForImpl(this[impl].createNodeIterator(...args));
};

Document.prototype.createTreeWalker = function createTreeWalker(root) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'createTreeWalker' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = convertNode(curArg, { context: "Failed to execute 'createTreeWalker' on 'Document': parameter 1" });
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["unsigned long"](curArg, {
        context: "Failed to execute 'createTreeWalker' on 'Document': parameter 2"
      });
    } else {
      curArg = 0xffffffff;
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[2];
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
  return utils.tryWrapperForImpl(this[impl].createTreeWalker(...args));
};

Document.prototype.getElementsByName = function getElementsByName(elementName) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementsByName' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementsByName' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementsByName(...args));
};

Document.prototype.open = function open() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  {
    let curArg = arguments[0];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'open' on 'Document': parameter 1" });
    } else {
      curArg = "text/html";
    }
    args.push(curArg);
  }
  {
    let curArg = arguments[1];
    if (curArg !== undefined) {
      curArg = conversions["DOMString"](curArg, { context: "Failed to execute 'open' on 'Document': parameter 2" });
    } else {
      curArg = "";
    }
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].open(...args));
};

Document.prototype.close = function close() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].close();
};

Document.prototype.write = function write() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'write' on 'Document': parameter " + (i + 1)
    });
    args.push(curArg);
  }
  return this[impl].write(...args);
};

Document.prototype.writeln = function writeln() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }
  const args = [];
  for (let i = 0; i < arguments.length; i++) {
    let curArg = arguments[i];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'writeln' on 'Document': parameter " + (i + 1)
    });
    args.push(curArg);
  }
  return this[impl].writeln(...args);
};

Document.prototype.hasFocus = function hasFocus() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].hasFocus();
};

Document.prototype.clear = function clear() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].clear();
};

Document.prototype.captureEvents = function captureEvents() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].captureEvents();
};

Document.prototype.releaseEvents = function releaseEvents() {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  return this[impl].releaseEvents();
};

Document.prototype.getElementById = function getElementById(elementId) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'getElementById' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'getElementById' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].getElementById(...args));
};

Document.prototype.prepend = function prepend() {
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
        context: "Failed to execute 'prepend' on 'Document': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].prepend(...args);
};

Document.prototype.append = function append() {
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
        context: "Failed to execute 'append' on 'Document': parameter " + (i + 1)
      });
    }
    args.push(curArg);
  }
  return this[impl].append(...args);
};

Document.prototype.querySelector = function querySelector(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelector' on 'Document': 1 argument required, but only " + arguments.length + " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'querySelector' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].querySelector(...args));
};

Document.prototype.querySelectorAll = function querySelectorAll(selectors) {
  if (!this || !module.exports.is(this)) {
    throw new TypeError("Illegal invocation");
  }

  if (arguments.length < 1) {
    throw new TypeError(
      "Failed to execute 'querySelectorAll' on 'Document': 1 argument required, but only " +
        arguments.length +
        " present."
    );
  }
  const args = [];
  {
    let curArg = arguments[0];
    curArg = conversions["DOMString"](curArg, {
      context: "Failed to execute 'querySelectorAll' on 'Document': parameter 1"
    });
    args.push(curArg);
  }
  return utils.tryWrapperForImpl(this[impl].querySelectorAll(...args));
};

Object.defineProperty(Document.prototype, "implementation", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "implementation", () => {
      return utils.tryWrapperForImpl(this[impl]["implementation"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "URL", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["URL"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "documentURI", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["documentURI"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "origin", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["origin"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "compatMode", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["compatMode"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "characterSet", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["characterSet"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "charset", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["charset"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "inputEncoding", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["inputEncoding"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "contentType", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["contentType"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "doctype", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["doctype"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "documentElement", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["documentElement"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "referrer", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["referrer"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "cookie", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["cookie"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["USVString"](V, {
      context: "Failed to set the 'cookie' property on 'Document': The provided value"
    });

    this[impl]["cookie"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "lastModified", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["lastModified"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "readyState", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["readyState"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "title", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["title"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'title' property on 'Document': The provided value"
    });

    this[impl]["title"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "dir", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["dir"];
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, { context: "Failed to set the 'dir' property on 'Document': The provided value" });

    this[impl]["dir"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "body", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["body"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    if (V === null || V === undefined) {
      V = null;
    } else {
      V = convertHTMLElement(V, { context: "Failed to set the 'body' property on 'Document': The provided value" });
    }
    this[impl]["body"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "head", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["head"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "images", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "images", () => {
      return utils.tryWrapperForImpl(this[impl]["images"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "embeds", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "embeds", () => {
      return utils.tryWrapperForImpl(this[impl]["embeds"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "plugins", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "plugins", () => {
      return utils.tryWrapperForImpl(this[impl]["plugins"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "links", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "links", () => {
      return utils.tryWrapperForImpl(this[impl]["links"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "forms", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "forms", () => {
      return utils.tryWrapperForImpl(this[impl]["forms"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "scripts", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "scripts", () => {
      return utils.tryWrapperForImpl(this[impl]["scripts"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "currentScript", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["currentScript"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "defaultView", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["defaultView"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "activeElement", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["activeElement"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onreadystatechange", {
  get() {
    return utils.tryWrapperForImpl(this[impl]["onreadystatechange"]);
  },

  set(V) {
    V = utils.tryImplForWrapper(V);

    this[impl]["onreadystatechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "anchors", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "anchors", () => {
      return utils.tryWrapperForImpl(this[impl]["anchors"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "applets", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "applets", () => {
      return utils.tryWrapperForImpl(this[impl]["applets"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "styleSheets", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "styleSheets", () => {
      return utils.tryWrapperForImpl(this[impl]["styleSheets"]);
    });
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "hidden", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["hidden"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "visibilityState", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["visibilityState"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onvisibilitychange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onvisibilitychange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onvisibilitychange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onabort", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onabort"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onabort"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onauxclick", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onauxclick"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onauxclick"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onblur", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onblur"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onblur"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "oncancel", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncancel"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncancel"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "oncanplay", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncanplay"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncanplay"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "oncanplaythrough", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncanplaythrough"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncanplaythrough"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onchange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onchange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onchange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onclick", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onclick"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onclick"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onclose", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onclose"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onclose"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "oncontextmenu", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncontextmenu"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncontextmenu"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "oncuechange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncuechange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncuechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondblclick", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondblclick"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondblclick"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondrag", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondrag"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondrag"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondragend", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragend"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragend"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondragenter", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragenter"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragenter"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondragexit", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragexit"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragexit"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondragleave", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragleave"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragleave"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondragover", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragover"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragover"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondragstart", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragstart"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragstart"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondrop", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondrop"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondrop"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ondurationchange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondurationchange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondurationchange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onemptied", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onemptied"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onemptied"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onended", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onended"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onended"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onerror", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onerror"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onerror"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onfocus", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onfocus"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onfocus"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "oninput", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oninput"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oninput"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "oninvalid", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oninvalid"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oninvalid"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onkeydown", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeydown"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeydown"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onkeypress", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeypress"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeypress"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onkeyup", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeyup"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeyup"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onload", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onload"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onload"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onloadeddata", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadeddata"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadeddata"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onloadedmetadata", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadedmetadata"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadedmetadata"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onloadend", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadend"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadend"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onloadstart", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadstart"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadstart"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onmousedown", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmousedown"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmousedown"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onmouseenter", {
  get() {
    return utils.tryWrapperForImpl(this[impl]["onmouseenter"]);
  },

  set(V) {
    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseenter"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onmouseleave", {
  get() {
    return utils.tryWrapperForImpl(this[impl]["onmouseleave"]);
  },

  set(V) {
    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseleave"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onmousemove", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmousemove"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmousemove"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onmouseout", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseout"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseout"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onmouseover", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseover"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseover"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onmouseup", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseup"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseup"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onwheel", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onwheel"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onwheel"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onpause", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onpause"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onpause"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onplay", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onplay"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onplay"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onplaying", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onplaying"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onplaying"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onprogress", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onprogress"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onprogress"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onratechange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onratechange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onratechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onreset", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onreset"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onreset"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onresize", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onresize"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onresize"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onscroll", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onscroll"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onscroll"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onsecuritypolicyviolation", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsecuritypolicyviolation"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsecuritypolicyviolation"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onseeked", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onseeked"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onseeked"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onseeking", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onseeking"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onseeking"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onselect", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onselect"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onselect"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onstalled", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onstalled"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onstalled"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onsubmit", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsubmit"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsubmit"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onsuspend", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsuspend"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsuspend"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ontimeupdate", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ontimeupdate"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ontimeupdate"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "ontoggle", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ontoggle"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ontoggle"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onvolumechange", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onvolumechange"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onvolumechange"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "onwaiting", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onwaiting"]);
  },

  set(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onwaiting"] = V;
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "children", {
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

Object.defineProperty(Document.prototype, "firstElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["firstElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "lastElementChild", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["lastElementChild"]);
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, "childElementCount", {
  get() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["childElementCount"];
  },

  enumerable: true,
  configurable: true
});

Object.defineProperty(Document.prototype, Symbol.toStringTag, {
  value: "Document",
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
    throw new TypeError(`${context} is not of type 'Document'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(Document.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(Document.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Node._internalSetup(obj);

    Object.defineProperty(obj, "location", {
      get() {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        return utils.tryWrapperForImpl(obj[impl]["location"]);
      },

      set(V) {
        if (!this || !module.exports.is(this)) {
          throw new TypeError("Illegal invocation");
        }

        this.location.href = V;
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
  interface: Document,
  expose: {
    Window: { Document }
  }
}; // iface
module.exports = iface;

GlobalEventHandlers._mixedIntoPredicates.push(module.exports.is);

NonElementParentNode._mixedIntoPredicates.push(module.exports.is);

ParentNode._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/Document-impl.js");
