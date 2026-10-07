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
const { parseFragment } = require("../../browser/parser");
const InnerHTMLImpl = require("../domparsing/InnerHTML-impl").implementation;
const { fragmentSerialization } = require("../domparsing/serialization");
const { domSymbolTree } = require("../helpers/internal-constants");
const DOMException = require("domexception/webidl2js-wrapper");
const DOMTokenList = require("../generated/DOMTokenList");
const NamedNodeMap = require("../generated/NamedNodeMap");
const validateNames = require("../helpers/validate-names");
const { asciiLowercase, asciiUppercase } = require("../helpers/strings");
const { listOfElementsWithQualifiedName, listOfElementsWithNamespaceAndLocalName,
  listOfElementsWithClassNames } = require("../node");
const SlotableMixinImpl = require("./Slotable-impl").implementation;
const NonDocumentTypeChildNode = require("./NonDocumentTypeChildNode-impl").implementation;
const ShadowRoot = require("../generated/ShadowRoot");
const Text = require("../generated/Text");
const { isValidHostElementName } = require("../helpers/shadow-dom");
const { isValidCustomElementName, lookupCEDefinition } = require("../helpers/custom-elements");

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
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._initSlotableMixin();

    this._namespaceURI = privateData.namespace;
    this._prefix = privateData.prefix;
    this._localName = privateData.localName;
    this._ceState = privateData.ceState;
    this._ceDefinition = privateData.ceDefinition;
    this._isValue = privateData.isValue;

    this._shadowRoot = null;
    this._ceReactionQueue = [];

    this.nodeType = NODE_TYPE.ELEMENT_NODE;
    this.scrollTop = 0;
    this.scrollLeft = 0;

    this._attributeList = [];
    // Used for caching.
    this._attributesByNameMap = new Map();
    this._attributes = NamedNodeMap.createImpl(this._globalObject, [], {
      element: this
    });

    this._cachedTagName = null;
  }

  _attach() {
    namedPropertiesWindow.nodeAttachedToDocument(this);

    const id = this.getAttributeNS(null, "id");
    if (id) {
      attachId(id, this, this._ownerDocument);
    }

    super._attach();
  }

  _detach() {
    super._detach();

    namedPropertiesWindow.nodeDetachedFromDocument(this);

    const id = this.getAttributeNS(null, "id");
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

    this._attrModifiedSlotableMixin(name, value, oldValue);
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
    // This getter can be a hotpath in getComputedStyle.
    // All these are invariants during the instance lifetime so we can safely cache the computed tagName.
    // We could create it during construction but since we already identified this as potentially slow we do it lazily.
    if (this._cachedTagName === null) {
      if (this.namespaceURI === HTML_NS && this._ownerDocument._parsingMode === "html") {
        this._cachedTagName = asciiUppercase(this._qualifiedName);
      } else {
        this._cachedTagName = this._qualifiedName;
      }
    }
    return this._cachedTagName;
  }

  get attributes() {
    return this._attributes;
  }

  // https://w3c.github.io/DOM-Parsing/#dom-element-outerhtml
  get outerHTML() {
    // TODO: maybe parse5 can give us a hook where it serializes the node itself too:
    // https://github.com/inikulin/parse5/issues/230
    // Alternatively, if we can create a virtual node in domSymbolTree, that'd also work.
    // It's currently prevented by the fact that a node can't be duplicated in the same tree.
    // Then we could get rid of all the code for childNodesForSerializing.
    return fragmentSerialization({ childNodesForSerializing: [this], _ownerDocument: this._ownerDocument }, {
      requireWellFormed: true,
      globalObject: this._globalObject
    });
  }
  set outerHTML(markup) {
    let parent = domSymbolTree.parent(this);
    const document = this._ownerDocument;

    if (!parent) {
      return;
    }

    if (parent.nodeType === NODE_TYPE.DOCUMENT_NODE) {
      throw DOMException.create(this._globalObject, [
        "Modifications are not allowed for this document",
        "NoModificationAllowedError"
      ]);
    }

    if (parent.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      parent = document.createElementNS(HTML_NS, "body");
    }

    const fragment = parseFragment(markup, parent);

    const contextObjectParent = domSymbolTree.parent(this);
    contextObjectParent._replace(fragment, this);
  }

  get classList() {
    if (this._classList === undefined) {
      this._classList = DOMTokenList.createImpl(this._globalObject, [], {
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
    validateNames.name(this._globalObject, name);

    if (this._namespaceURI === HTML_NS && this._ownerDocument._parsingMode === "html") {
      name = asciiLowercase(name);
    }

    const attribute = attributes.getAttributeByName(this, name);

    if (attribute === null) {
      const newAttr = this._ownerDocument._createAttribute({
        localName: name,
        value
      });
      attributes.appendAttribute(this, newAttr);
      return;
    }

    attributes.changeAttribute(this, attribute, value);
  }

  setAttributeNS(namespace, name, value) {
    const extracted = validateNames.validateAndExtract(this._globalObject, namespace, name);

    // Because of widespread use of this method internally, e.g. to manually implement attribute/content reflection, we
    // centralize the conversion to a string here, so that all call sites don't have to do it.
    value = `${value}`;

    attributes.setAttributeValue(this, extracted.localName, value, extracted.prefix, extracted.namespace);
  }

  removeAttribute(name) {
    attributes.removeAttributeByName(this, name);
  }

  removeAttributeNS(namespace, localName) {
    attributes.removeAttributeByNameNS(this, namespace, localName);
  }

  toggleAttribute(qualifiedName, force) {
    validateNames.name(this._globalObject, qualifiedName);

    if (this._namespaceURI === HTML_NS && this._ownerDocument._parsingMode === "html") {
      qualifiedName = asciiLowercase(qualifiedName);
    }

    const attribute = attributes.getAttributeByName(this, qualifiedName);

    if (attribute === null) {
      if (force === undefined || force === true) {
        const newAttr = this._ownerDocument._createAttribute({
          localName: qualifiedName,
          value: ""
        });
        attributes.appendAttribute(this, newAttr);
        return true;
      }
      return false;
    }

    if (force === undefined || force === false) {
      attributes.removeAttributeByName(this, qualifiedName);
      return false;
    }

    return true;
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
    // eslint-disable-next-line no-restricted-properties
    return attributes.setAttribute(this, attr);
  }

  setAttributeNodeNS(attr) {
    // eslint-disable-next-line no-restricted-properties
    return attributes.setAttribute(this, attr);
  }

  removeAttributeNode(attr) {
    // eslint-disable-next-line no-restricted-properties
    if (!attributes.hasAttribute(this, attr)) {
      throw DOMException.create(this._globalObject, [
        "Tried to remove an attribute that was not present",
        "NotFoundError"
      ]);
    }

    // eslint-disable-next-line no-restricted-properties
    attributes.removeAttribute(this, attr);

    return attr;
  }

  getBoundingClientRect() {
    return {
      x: 0,
      y: 0,
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

  // https://dom.spec.whatwg.org/#dom-element-attachshadow
  attachShadow(init) {
    const { _ownerDocument, _namespaceURI, _localName, _isValue } = this;

    if (this.namespaceURI !== HTML_NS) {
      throw DOMException.create(this._globalObject, [
        "This element does not support attachShadow. This element is not part of the HTML namespace.",
        "NotSupportedError"
      ]);
    }

    if (!isValidHostElementName(_localName) && !isValidCustomElementName(_localName)) {
      const message = "This element does not support attachShadow. This element is not a custom element nor " +
        "a standard element supporting a shadow root.";
      throw DOMException.create(this._globalObject, [message, "NotSupportedError"]);
    }

    if (isValidCustomElementName(_localName) || _isValue) {
      const definition = lookupCEDefinition(_ownerDocument, _namespaceURI, _localName, _isValue);

      if (definition && definition.disableShadow) {
        throw DOMException.create(this._globalObject, [
          "Shadow root cannot be create on a custom element with disabled shadow",
          "NotSupportedError"
        ]);
      }
    }

    if (this._shadowRoot !== null) {
      throw DOMException.create(this._globalObject, [
        "Shadow root cannot be created on a host which already hosts a shadow tree.",
        "NotSupportedError"
      ]);
    }

    const shadow = ShadowRoot.createImpl(this._globalObject, [], {
      ownerDocument: this.ownerDocument,
      mode: init.mode,
      host: this
    });

    this._shadowRoot = shadow;

    return shadow;
  }

  // https://dom.spec.whatwg.org/#dom-element-shadowroot
  get shadowRoot() {
    const shadow = this._shadowRoot;

    if (shadow === null || shadow.mode === "closed") {
      return null;
    }

    return shadow;
  }

  // https://dom.spec.whatwg.org/#insert-adjacent
  _insertAdjacent(element, where, node) {
    where = asciiLowercase(where);

    if (where === "beforebegin") {
      if (element.parentNode === null) {
        return null;
      }
      return element.parentNode._preInsert(node, element);
    }
    if (where === "afterbegin") {
      return element._preInsert(node, element.firstChild);
    }
    if (where === "beforeend") {
      return element._preInsert(node, null);
    }
    if (where === "afterend") {
      if (element.parentNode === null) {
        return null;
      }
      return element.parentNode._preInsert(node, element.nextSibling);
    }

    throw DOMException.create(this._globalObject, [
      'Must provide one of "beforebegin", "afterbegin", "beforeend", or "afterend".',
      "SyntaxError"
    ]);
  }

  insertAdjacentElement(where, element) {
    return this._insertAdjacent(this, where, element);
  }

  insertAdjacentText(where, data) {
    const text = Text.createImpl(this._globalObject, [], { data, ownerDocument: this._ownerDocument });

    this._insertAdjacent(this, where, text);
  }

  // https://w3c.github.io/DOM-Parsing/#dom-element-insertadjacenthtml
  insertAdjacentHTML(position, text) {
    position = asciiLowercase(position);

    let context;
    switch (position) {
      case "beforebegin":
      case "afterend": {
        context = this.parentNode;
        if (context === null || context.nodeType === NODE_TYPE.DOCUMENT_NODE) {
          throw DOMException.create(this._globalObject, [
            "Cannot insert HTML adjacent to parent-less nodes or children of document nodes.",
            "NoModificationAllowedError"
          ]);
        }
        break;
      }
      case "afterbegin":
      case "beforeend": {
        context = this;
        break;
      }
      default: {
        throw DOMException.create(this._globalObject, [
          'Must provide one of "beforebegin", "afterbegin", "beforeend", or "afterend".',
          "SyntaxError"
        ]);
      }
    }

    if (
      context.nodeType !== NODE_TYPE.ELEMENT_NODE ||
      (
        context._ownerDocument._parsingMode === "html" &&
        context._localName === "html" &&
        context._namespaceURI === HTML_NS
      )
    ) {
      context = context._ownerDocument.createElement("body");
    }

    const fragment = parseFragment(text, context);

    switch (position) {
      case "beforebegin": {
        this.parentNode._insert(fragment, this);
        break;
      }
      case "afterbegin": {
        this._insert(fragment, this.firstChild);
        break;
      }
      case "beforeend": {
        this._append(fragment);
        break;
      }
      case "afterend": {
        this.parentNode._insert(fragment, this.nextSibling);
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
mixin(ElementImpl.prototype, SlotableMixinImpl.prototype);
mixin(ElementImpl.prototype, InnerHTMLImpl.prototype);

ElementImpl.prototype.getElementsByTagName = memoizeQuery(function (qualifiedName) {
  return listOfElementsWithQualifiedName(qualifiedName, this);
});

ElementImpl.prototype.getElementsByTagNameNS = memoizeQuery(function (namespace, localName) {
  return listOfElementsWithNamespaceAndLocalName(namespace, localName, this);
});

ElementImpl.prototype.getElementsByClassName = memoizeQuery(function (classNames) {
  return listOfElementsWithClassNames(classNames, this);
});

ElementImpl.prototype.matches = function (selectors) {
  const matcher = addNwsapi(this);

  return matcher.match(selectors, idlUtils.wrapperForImpl(this));
};

ElementImpl.prototype.webkitMatchesSelector = ElementImpl.prototype.matches;

module.exports = {
  implementation: ElementImpl
};
