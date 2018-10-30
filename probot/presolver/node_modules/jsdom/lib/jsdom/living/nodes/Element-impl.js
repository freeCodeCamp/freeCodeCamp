"use strict";
const { addNwsapi } = require("../helpers/selectors");
const { HTML_NS } = require("../helpers/namespaces");
const { mixin, memoizeQuery } = require("../../utils");
const idlUtils = require("../generated/utils");
const NodeImpl = require("./Node-impl").implementation;
const ParentNodeImpl = require("./ParentNode-impl").implementation;
const ChildNodeImpl = require("./ChildNode-impl").implementation;
const attributes = require("../attributes");
const namedPropertiesWindow = require("../named-properties-window");
const NODE_TYPE = require("../node-type");
const { domToHtml } = require("../../browser/domtohtml");
const { domSymbolTree } = require("../helpers/internal-constants");
const DOMException = require("domexception");
const DOMTokenList = require("../generated/DOMTokenList");
const attrGenerated = require("../generated/Attr");
const NamedNodeMap = require("../generated/NamedNodeMap");
const validateNames = require("../helpers/validate-names");
const { asciiLowercase } = require("../helpers/strings");
const { clone, listOfElementsWithQualifiedName, listOfElementsWithNamespaceAndLocalName,
  listOfElementsWithClassNames } = require("../node");
const NonDocumentTypeChildNode = require("./NonDocumentTypeChildNode-impl").implementation;

function clearChildNodes(node) {
  for (let child = domSymbolTree.firstChild(node); child; child = domSymbolTree.firstChild(node)) {
    node.removeChild(child);
  }
}

function setInnerHTML(document, node, html) {
  // Clear the children first:
  if (node._templateContents) {
    clearChildNodes(node._templateContents);
  } else {
    clearChildNodes(node);
  }

  if (node.nodeName === "#document") {
    document._htmlToDom.appendToDocument(html, node);
  } else {
    document._htmlToDom.appendToNode(html, node);
  }
}

function attachId(id, elm, doc) {
  if (id && elm && doc) {
    if (!doc._ids[id]) {
      doc._ids[id] = [];
    }
    doc._ids[id].push(elm);
  }
}

function detachId(id, elm, doc) {
  if (id && elm && doc) {
    if (doc._ids && doc._ids[id]) {
      const elms = doc._ids[id];
      for (let i = 0; i < elms.length; i++) {
        if (elms[i] === elm) {
          elms.splice(i, 1);
          --i;
        }
      }
      if (elms.length === 0) {
        delete doc._ids[id];
      }
    }
  }
}

class ElementImpl extends NodeImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this.nodeType = NODE_TYPE.ELEMENT_NODE;
    this.scrollTop = 0;
    this.scrollLeft = 0;

    this._namespaceURI = privateData.namespace || null;
    this._prefix = null;
    this._localName = privateData.localName;

    this._attributeList = [];
    // Used for caching.
    this._attributesByNameMap = new Map();
    this._attributes = NamedNodeMap.createImpl([], {
      element: this
    });
  }

  _attach() {
    namedPropertiesWindow.nodeAttachedToDocument(this);

    const id = this.getAttribute("id");
    if (id) {
      attachId(id, this, this._ownerDocument);
    }

    super._attach();
  }

  _detach() {
    super._detach();

    namedPropertiesWindow.nodeDetachedFromDocument(this);

    const id = this.getAttribute("id");
    if (id) {
      detachId(id, this, this._ownerDocument);
    }
  }

  _attrModified(name, value, oldValue) {
    this._modified();
    namedPropertiesWindow.elementAttributeModified(this, name, value, oldValue);

    if (name === "id" && this._attached) {
      const doc = this._ownerDocument;
      detachId(oldValue, this, doc);
      attachId(value, this, doc);
    }

    // update classList
    if (name === "class" && this._classList !== undefined) {
      this._classList.attrModified();
    }
  }

  get namespaceURI() {
    return this._namespaceURI;
  }
  get prefix() {
    return this._prefix;
  }
  get localName() {
    return this._localName;
  }
  get _qualifiedName() {
    return this._prefix !== null ? this._prefix + ":" + this._localName : this._localName;
  }
  get tagName() {
    let qualifiedName = this._qualifiedName;
    if (this.namespaceURI === HTML_NS && this._ownerDocument._parsingMode === "html") {
      qualifiedName = qualifiedName.toUpperCase();
    }
    return qualifiedName;
  }

  get attributes() {
    return this._attributes;
  }

  get outerHTML() {
    return domToHtml([this]);
  }

  set outerHTML(html) {
    if (html === null) {
      html = "";
    }

    const parent = domSymbolTree.parent(this);
    const document = this._ownerDocument;

    if (!parent) {
      return;
    }

    let contextElement;
    if (parent.nodeType === NODE_TYPE.DOCUMENT_NODE) {
      throw new DOMException("Modifications are not allowed for this document", "NoModificationAllowedError");
    } else if (parent.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      contextElement = document.createElementNS(HTML_NS, "body");
    } else if (parent.nodeType === NODE_TYPE.ELEMENT_NODE) {
      contextElement = clone(parent, undefined, false);
    } else {
      throw new TypeError("This should never happen");
    }

    document._htmlToDom.appendToNode(html, contextElement);

    while (contextElement.firstChild) {
      parent.insertBefore(contextElement.firstChild, this);
    }

    parent.removeChild(this);
  }

  get innerHTML() {
    // TODO is this necessary? I would have thought this would be handled at a different level.
    const { tagName } = this;
    if (tagName === "SCRIPT" || tagName === "STYLE") {
      const type = this.getAttribute("type");
      if (!type || /^text\//i.test(type) || /\/javascript$/i.test(type)) {
        return domToHtml(domSymbolTree.childrenIterator(this));
      }
    }

    // In case of <template> we should pass its "template contents" fragment as a serialization root if we have one
    if (this._templateContents) {
      return domToHtml(domSymbolTree.childrenIterator(this._templateContents));
    }

    return domToHtml(domSymbolTree.childrenIterator(this));
  }

  set innerHTML(html) {
    if (html === null) {
      html = "";
    }

    setInnerHTML(this.ownerDocument, this, html);
  }

  get classList() {
    if (this._classList === undefined) {
      this._classList = DOMTokenList.createImpl([], {
        element: this,
        attributeLocalName: "class"
      });
    }
    return this._classList;
  }

  hasAttributes() {
    return attributes.hasAttributes(this);
  }

  getAttributeNames() {
    return attributes.attributeNames(this);
  }

  getAttribute(name) {
    const attr = attributes.getAttributeByName(this, name);
    if (!attr) {
      return null;
    }
    return attr._value;
  }

  getAttributeNS(namespace, localName) {
    const attr = attributes.getAttributeByNameNS(this, namespace, localName);
    if (!attr) {
      return null;
    }
    return attr._value;
  }

  setAttribute(name, value) {
    validateNames.name(name);

    if (this._namespaceURI === HTML_NS && this._ownerDocument._parsingMode === "html") {
      name = asciiLowercase(name);
    }

    const attribute = attributes.getAttributeByName(this, name);

    if (attribute === null) {
      const newAttr = attrGenerated.createImpl([], { localName: name, value });
      attributes.appendAttribute(this, newAttr);
      return;
    }

    attributes.changeAttribute(this, attribute, value);
  }

  setAttributeNS(namespace, name, value) {
    const extracted = validateNames.validateAndExtract(namespace, name);

    attributes.setAttributeValue(this, extracted.localName, value, extracted.prefix, extracted.namespace);
  }

  removeAttribute(name) {
    attributes.removeAttributeByName(this, name);
  }

  removeAttributeNS(namespace, localName) {
    attributes.removeAttributeByNameNS(this, namespace, localName);
  }

  hasAttribute(name) {
    if (this._namespaceURI === HTML_NS && this._ownerDocument._parsingMode === "html") {
      name = asciiLowercase(name);
    }

    return attributes.hasAttributeByName(this, name);
  }

  hasAttributeNS(namespace, localName) {
    if (namespace === "") {
      namespace = null;
    }

    return attributes.hasAttributeByNameNS(this, namespace, localName);
  }

  getAttributeNode(name) {
    return attributes.getAttributeByName(this, name);
  }

  getAttributeNodeNS(namespace, localName) {
    return attributes.getAttributeByNameNS(this, namespace, localName);
  }

  setAttributeNode(attr) {
    return attributes.setAttribute(this, attr);
  }

  setAttributeNodeNS(attr) {
    return attributes.setAttribute(this, attr);
  }

  removeAttributeNode(attr) {
    if (!attributes.hasAttribute(this, attr)) {
      throw new DOMException("Tried to remove an attribute that was not present", "NotFoundError");
    }

    attributes.removeAttribute(this, attr);

    return attr;
  }

  getBoundingClientRect() {
    return {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0
    };
  }

  getClientRects() {
    return [];
  }

  get scrollWidth() {
    return 0;
  }

  get scrollHeight() {
    return 0;
  }

  get clientTop() {
    return 0;
  }

  get clientLeft() {
    return 0;
  }

  get clientWidth() {
    return 0;
  }

  get clientHeight() {
    return 0;
  }

  // https://w3c.github.io/DOM-Parsing/#dom-element-insertadjacenthtml
  insertAdjacentHTML(position, text) {
    position = position.toLowerCase();

    let context;
    switch (position) {
      case "beforebegin":
      case "afterend": {
        context = this.parentNode;
        if (context === null || context.nodeType === NODE_TYPE.DOCUMENT_NODE) {
          throw new DOMException("Cannot insert HTML adjacent to " +
            "parent-less nodes or children of document nodes.", "NoModificationAllowedError");
        }
        break;
      }
      case "afterbegin":
      case "beforeend": {
        context = this;
        break;
      }
      default: {
        throw new DOMException("Must provide one of \"beforebegin\", \"afterend\", " +
          "\"afterbegin\", or \"beforeend\".", "SyntaxError");
      }
    }

    // TODO: use context for parsing instead of a <template>.
    const fragment = this.ownerDocument.createElement("template");
    fragment.innerHTML = text;

    switch (position) {
      case "beforebegin": {
        this.parentNode.insertBefore(fragment.content, this);
        break;
      }
      case "afterbegin": {
        this.insertBefore(fragment.content, this.firstChild);
        break;
      }
      case "beforeend": {
        this.appendChild(fragment.content);
        break;
      }
      case "afterend": {
        this.parentNode.insertBefore(fragment.content, this.nextSibling);
        break;
      }
    }
  }

  closest(selectors) {
    const matcher = addNwsapi(this);
    return matcher.closest(selectors, idlUtils.wrapperForImpl(this));
  }
}

mixin(ElementImpl.prototype, NonDocumentTypeChildNode.prototype);
mixin(ElementImpl.prototype, ParentNodeImpl.prototype);
mixin(ElementImpl.prototype, ChildNodeImpl.prototype);

ElementImpl.prototype.getElementsByTagName = memoizeQuery(function (qualifiedName) {
  return listOfElementsWithQualifiedName(qualifiedName, this);
});

ElementImpl.prototype.getElementsByTagNameNS = memoizeQuery(function (namespace, localName) {
  return listOfElementsWithNamespaceAndLocalName(namespace, localName, this);
});

ElementImpl.prototype.getElementsByClassName = memoizeQuery(function (classNames) {
  return listOfElementsWithClassNames(classNames, this);
});

ElementImpl.prototype.matches = memoizeQuery(function (selectors) {
  const matcher = addNwsapi(this);

  return matcher.match(selectors, idlUtils.wrapperForImpl(this));
});

ElementImpl.prototype.webkitMatchesSelector = ElementImpl.prototype.matches;

module.exports = {
  implementation: ElementImpl
};
