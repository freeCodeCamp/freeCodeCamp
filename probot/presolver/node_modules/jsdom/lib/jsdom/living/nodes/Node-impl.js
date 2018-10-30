"use strict";

const EventTargetImpl = require("../events/EventTarget-impl").implementation;
const { domSymbolTree } = require("../helpers/internal-constants");
const { simultaneousIterators } = require("../../utils");
const DOMException = require("domexception");
const NODE_TYPE = require("../node-type");
const NODE_DOCUMENT_POSITION = require("../node-document-position");
const NodeList = require("../generated/NodeList");
const { documentBaseURLSerialized } = require("../helpers/document-base-url");
const { clone, locateNamespacePrefix, locateNamespace } = require("../node");
const attributes = require("../attributes");

function isObsoleteNodeType(node) {
  return node.nodeType === NODE_TYPE.ENTITY_NODE ||
    node.nodeType === NODE_TYPE.ENTITY_REFERENCE_NODE ||
    node.nodeType === NODE_TYPE.NOTATION_NODE ||
  //  node.nodeType === NODE_TYPE.ATTRIBUTE_NODE ||  // this is missing how do we handle?
    node.nodeType === NODE_TYPE.CDATA_SECTION_NODE;
}

function nodeEquals(a, b) {
  if (a.nodeType !== b.nodeType) {
    return false;
  }

  switch (a.nodeType) {
    case NODE_TYPE.DOCUMENT_TYPE_NODE:
      if (a.name !== b.name || a.publicId !== b.publicId ||
          a.systemId !== b.systemId) {
        return false;
      }
      break;
    case NODE_TYPE.ELEMENT_NODE:
      if (a._namespaceURI !== b._namespaceURI || a._prefix !== b._prefix || a._localName !== b._localName ||
          a._attributes.length !== b._attributes.length) {
        return false;
      }
      break;
    case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
      if (a._target !== b._target || a._data !== b._data) {
        return false;
      }
      break;
    case NODE_TYPE.TEXT_NODE:
    case NODE_TYPE.COMMENT_NODE:
      if (a._data !== b._data) {
        return false;
      }
      break;
  }

  if (a.nodeType === NODE_TYPE.ELEMENT_NODE && !attributes.attributeListsEqual(a, b)) {
    return false;
  }

  for (const nodes of simultaneousIterators(domSymbolTree.childrenIterator(a), domSymbolTree.childrenIterator(b))) {
    if (!nodes[0] || !nodes[1]) {
      // mismatch in the amount of childNodes
      return false;
    }

    if (!nodeEquals(nodes[0], nodes[1])) {
      return false;
    }
  }

  return true;
}

class NodeImpl extends EventTargetImpl {
  constructor(args, privateData) {
    super();

    domSymbolTree.initialize(this);

    this._ownerDocument = privateData.ownerDocument;

    this._childNodesList = null;
    this._childrenList = null;
    this._version = 0;
    this._memoizedQueries = {};
  }

  get parentNode() {
    return domSymbolTree.parent(this);
  }

  getRootNode() {
    // ignore option for composed, because of no Shadow DOM support
    let root;
    for (const ancestor of domSymbolTree.ancestorsIterator(this)) {
      root = ancestor;
    }
    return root;
  }

  get nodeName() {
    switch (this.nodeType) {
      case NODE_TYPE.ELEMENT_NODE:
        return this.tagName;
      case NODE_TYPE.TEXT_NODE:
        return "#text";
      case NODE_TYPE.CDATA_SECTION_NODE:
        return "#cdata-section";
      case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
        return this.target;
      case NODE_TYPE.COMMENT_NODE:
        return "#comment";
      case NODE_TYPE.DOCUMENT_NODE:
        return "#document";
      case NODE_TYPE.DOCUMENT_TYPE_NODE:
        return this.name;
      case NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        return "#document-fragment";
    }

    // should never happen
    return null;
  }

  get firstChild() {
    return domSymbolTree.firstChild(this);
  }

  get isConnected() {
    for (const ancestor of domSymbolTree.ancestorsIterator(this)) {
      if (ancestor.nodeType === NODE_TYPE.DOCUMENT_NODE) {
        return true;
      }
    }
    return false;
  }

  get ownerDocument() {
    return this.nodeType === NODE_TYPE.DOCUMENT_NODE ? null : this._ownerDocument;
  }

  get lastChild() {
    return domSymbolTree.lastChild(this);
  }

  get childNodes() {
    if (!this._childNodesList) {
      this._childNodesList = NodeList.createImpl([], {
        element: this,
        query: () => domSymbolTree.childrenToArray(this)
      });
    } else {
      this._childNodesList._update();
    }

    return this._childNodesList;
  }

  get nextSibling() {
    return domSymbolTree.nextSibling(this);
  }

  get previousSibling() {
    return domSymbolTree.previousSibling(this);
  }

  insertBefore(newChildImpl, refChildImpl) {
    // DocumentType must be implicitly adopted
    if (newChildImpl.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) {
      newChildImpl._ownerDocument = this._ownerDocument;
    }

    if (newChildImpl.nodeType && newChildImpl.nodeType === NODE_TYPE.ATTRIBUTE_NODE) {
      throw new DOMException("The operation would yield an incorrect node tree.", "HierarchyRequestError");
    }

    if (this._ownerDocument !== newChildImpl._ownerDocument) {
      // adopt the node when it's not in this document
      this._ownerDocument.adoptNode(newChildImpl);
    } else {
      // search for parents matching the newChild
      for (const ancestor of domSymbolTree.ancestorsIterator(this)) {
        if (ancestor === newChildImpl) {
          throw new DOMException("The operation would yield an incorrect node tree.", "HierarchyRequestError");
        }
      }
    }

    // fragments are merged into the element (except parser-created fragments in <template>)
    if (newChildImpl.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      let grandChildImpl;
      while ((grandChildImpl = domSymbolTree.firstChild(newChildImpl))) {
        newChildImpl.removeChild(grandChildImpl);
        this.insertBefore(grandChildImpl, refChildImpl);
      }
    } else if (newChildImpl === refChildImpl) {
      return newChildImpl;
    } else {
      const oldParentImpl = domSymbolTree.parent(newChildImpl);
      // if the newChild is already in the tree elsewhere, remove it first
      if (oldParentImpl) {
        oldParentImpl.removeChild(newChildImpl);
      }

      if (refChildImpl === null) {
        domSymbolTree.appendChild(this, newChildImpl);
      } else {
        if (domSymbolTree.parent(refChildImpl) !== this) {
          throw new DOMException("The object can not be found here.", "NotFoundError");
        }

        domSymbolTree.insertBefore(refChildImpl, newChildImpl);
      }

      this._modified();
      if (newChildImpl.nodeType === NODE_TYPE.TEXT_NODE) {
        this._childTextContentChangeSteps();
      }

      if (this._attached && newChildImpl._attach) {
        newChildImpl._attach();
      }

      this._descendantAdded(this, newChildImpl);
    }

    return newChildImpl;
  } // raises(DOMException);

  _modified() {
    this._version++;
    for (const ancestor of domSymbolTree.ancestorsIterator(this)) {
      ancestor._version++;
    }

    if (this._childrenList) {
      this._childrenList._update();
    }
    if (this._childNodesList) {
      this._childNodesList._update();
    }
    this._clearMemoizedQueries();
  }

  _childTextContentChangeSteps() {
    // Default: do nothing
  }

  _clearMemoizedQueries() {
    this._memoizedQueries = {};
    const myParent = domSymbolTree.parent(this);
    if (myParent) {
      myParent._clearMemoizedQueries();
    }
  }

  _descendantRemoved(parent, child) {
    const myParent = domSymbolTree.parent(this);
    if (myParent) {
      myParent._descendantRemoved(parent, child);
    }
  }

  _descendantAdded(parent, child) {
    const myParent = domSymbolTree.parent(this);
    if (myParent) {
      myParent._descendantAdded(parent, child);
    }
  }

  replaceChild(node, child) {
    this.insertBefore(node, child);
    return this.removeChild(child);
  }

  _attach() {
    this._attached = true;

    for (const child of domSymbolTree.childrenIterator(this)) {
      if (child._attach) {
        child._attach();
      }
    }
  }

  _detach() {
    this._attached = false;

    if (this._ownerDocument && this._ownerDocument._lastFocusedElement === this) {
      this._ownerDocument._lastFocusedElement = null;
    }

    for (const child of domSymbolTree.childrenIterator(this)) {
      if (child._detach) {
        child._detach();
      }
    }
  }

  removeChild(/* Node */ oldChildImpl) {
    if (!oldChildImpl || domSymbolTree.parent(oldChildImpl) !== this) {
      throw new DOMException("The object can not be found here.", "NotFoundError");
    }

    if (this._ownerDocument) {
      this._ownerDocument._runPreRemovingSteps(oldChildImpl);
    }
    domSymbolTree.remove(oldChildImpl);
    this._modified();
    oldChildImpl._detach();
    this._descendantRemoved(this, oldChildImpl);
    if (oldChildImpl.nodeType === NODE_TYPE.TEXT_NODE) {
      this._childTextContentChangeSteps();
    }
    return oldChildImpl;
  } // raises(DOMException);

  appendChild(newChild) {
    return this.insertBefore(newChild, null);
  }

  hasChildNodes() {
    return domSymbolTree.hasChildren(this);
  }

  normalize() {
    for (const child of domSymbolTree.childrenIterator(this)) {
      if (child.normalize) {
        child.normalize();
      }

      // Normalize should only transform Text nodes, and nothing else.
      if (child.nodeType !== NODE_TYPE.TEXT_NODE) {
        continue;
      }

      if (child.nodeValue === "") {
        this.removeChild(child);
        continue;
      }

      const prevChild = domSymbolTree.previousSibling(child);

      if (prevChild && prevChild.nodeType === NODE_TYPE.TEXT_NODE) {
        // merge text nodes
        prevChild.appendData(child.nodeValue);
        this.removeChild(child);
      }
    }
  }

  get parentElement() {
    const parentNode = domSymbolTree.parent(this);
    return parentNode !== null && parentNode.nodeType === NODE_TYPE.ELEMENT_NODE ? parentNode : null;
  }

  get baseURI() {
    return documentBaseURLSerialized(this._ownerDocument);
  }

  compareDocumentPosition(otherImpl) {
    // Let reference be the context object.
    const reference = this;

    if (isObsoleteNodeType(reference) || isObsoleteNodeType(otherImpl)) {
      throw new Error("Obsolete node type");
    }

    const result = domSymbolTree.compareTreePosition(reference, otherImpl);

    // “If other and reference are not in the same tree, return the result of adding DOCUMENT_POSITION_DISCONNECTED,
    //  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC, and either DOCUMENT_POSITION_PRECEDING or
    // DOCUMENT_POSITION_FOLLOWING, with the constraint that this is to be consistent, together.”
    if (result === NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_DISCONNECTED) {
      // symbol-tree does not add these bits required by the spec:
      return NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_DISCONNECTED |
        NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC |
        NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_FOLLOWING;
    }

    return result;
  }

  lookupPrefix(namespace) {
    if (namespace === null || namespace === "") {
      return null;
    }

    switch (this.nodeType) {
      case NODE_TYPE.ELEMENT_NODE: {
        return locateNamespacePrefix(this, namespace);
      }
      case NODE_TYPE.DOCUMENT_NODE: {
        return this.documentElement !== null ? locateNamespacePrefix(this.documentElement, namespace) : null;
      }
      case NODE_TYPE.DOCUMENT_TYPE_NODE:
      case NODE_TYPE.DOCUMENT_FRAGMENT_NODE: {
        return null;
      }
      case NODE_TYPE.ATTRIBUTE_NODE: {
        return this._element !== null ? locateNamespacePrefix(this._element, namespace) : null;
      }
      default: {
        return this.parentElement !== null ? locateNamespacePrefix(this.parentElement, namespace) : null;
      }
    }
  }

  lookupNamespaceURI(prefix) {
    if (prefix === "") {
      prefix = null;
    }

    return locateNamespace(this, prefix);
  }

  isDefaultNamespace(namespace) {
    if (namespace === "") {
      namespace = null;
    }

    const defaultNamespace = locateNamespace(this, null);
    return defaultNamespace === namespace;
  }

  contains(other) {
    if (other === null) {
      return false;
    } else if (this === other) {
      return true;
    }
    return Boolean(this.compareDocumentPosition(other) & NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_CONTAINED_BY);
  }

  isEqualNode(node) {
    if (node === null) {
      return false;
    }

    // Fast-path, not in the spec
    if (this === node) {
      return true;
    }

    return nodeEquals(this, node);
  }

  isSameNode(node) {
    if (this === node) {
      return true;
    }

    return false;
  }

  cloneNode(deep) {
    deep = Boolean(deep);

    return clone(this, undefined, deep);
  }

  get nodeValue() {
    switch (this.nodeType) {
      case NODE_TYPE.ATTRIBUTE_NODE: {
        return this._value;
      }
      case NODE_TYPE.TEXT_NODE:
      case NODE_TYPE.CDATA_SECTION_NODE: // CDATASection is a subclass of Text
      case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
      case NODE_TYPE.COMMENT_NODE: {
        return this._data;
      }
      default: {
        return null;
      }
    }
  }

  set nodeValue(value) {
    if (value === null) {
      value = "";
    }

    switch (this.nodeType) {
      case NODE_TYPE.ATTRIBUTE_NODE: {
        attributes.setAnExistingAttributeValue(this, value);
        break;
      }
      case NODE_TYPE.TEXT_NODE:
      case NODE_TYPE.CDATA_SECTION_NODE: // CDATASection is a subclass of Text
      case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
      case NODE_TYPE.COMMENT_NODE: {
        this.replaceData(0, this.length, value);
        break;
      }
    }
  }

  get textContent() {
    switch (this.nodeType) {
      case NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
      case NODE_TYPE.ELEMENT_NODE: {
        let text = "";
        for (const child of domSymbolTree.treeIterator(this)) {
          if (child.nodeType === NODE_TYPE.TEXT_NODE || child.nodeType === NODE_TYPE.CDATA_SECTION_NODE) {
            text += child.nodeValue;
          }
        }
        return text;
      }

      case NODE_TYPE.ATTRIBUTE_NODE: {
        return this._value;
      }

      case NODE_TYPE.TEXT_NODE:
      case NODE_TYPE.CDATA_SECTION_NODE: // CDATASection is a subclass of Text
      case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
      case NODE_TYPE.COMMENT_NODE: {
        return this._data;
      }

      default: {
        return null;
      }
    }
  }

  set textContent(value) {
    switch (this.nodeType) {
      case NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
      case NODE_TYPE.ELEMENT_NODE: {
        let child = domSymbolTree.firstChild(this);
        while (child) {
          this.removeChild(child);
          child = domSymbolTree.firstChild(this);
        }

        if (value !== null && value !== "") {
          this.appendChild(this._ownerDocument.createTextNode(value));
        }

        break;
      }

      case NODE_TYPE.ATTRIBUTE_NODE: {
        attributes.setAnExistingAttributeValue(this, value);
        break;
      }

      case NODE_TYPE.TEXT_NODE:
      case NODE_TYPE.CDATA_SECTION_NODE: // CDATASection is a subclass of Text
      case NODE_TYPE.PROCESSING_INSTRUCTION_NODE:
      case NODE_TYPE.COMMENT_NODE: {
        this.replaceData(0, this.length, value);
        break;
      }
    }
  }
}

module.exports = {
  implementation: NodeImpl
};
