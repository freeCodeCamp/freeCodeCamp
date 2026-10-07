"use strict";

const DOMException = require("../generated/DOMException");

const EventTargetImpl = require("../events/EventTarget-impl").implementation;
const { simultaneousIterators } = require("../../utils");
const NODE_TYPE = require("../node-type");
const NODE_DOCUMENT_POSITION = require("../node-document-position");
const { clone, locateNamespacePrefix, locateNamespace } = require("../node");
const { setAnExistingAttributeValue } = require("../attributes");

const NodeList = require("../generated/NodeList");

const { nodeRoot, nodeLength, isInclusiveAncestor } = require("../helpers/node");
const { domSymbolTree } = require("../helpers/internal-constants");
const { queueTreeMutationRecord } = require("../helpers/mutation-observers");
const { enqueueCECallbackReaction, tryUpgradeElement } = require("../helpers/custom-elements");
const {
  isShadowRoot, shadowIncludingRoot, assignSlot, assignSlotableForTree, assignSlotable, signalSlotChange, isSlot,
  shadowIncludingInclusiveDescendantsIterator, shadowIncludingDescendantsIterator
} = require("../helpers/shadow-dom");
const { invalidateStyleCache } = require("../helpers/style-rules");

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
          a._attributeList.length !== b._attributeList.length) {
        return false;
      }
      break;
    case NODE_TYPE.ATTRIBUTE_NODE:
      if (a._namespace !== b._namespace || a._localName !== b._localName || a._value !== b._value) {
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

  if (a.nodeType === NODE_TYPE.ELEMENT_NODE && !attributeListsEqual(a, b)) {
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

// Needed by https://dom.spec.whatwg.org/#concept-node-equals
function attributeListsEqual(elementA, elementB) {
  const listA = elementA._attributeList;
  const listB = elementB._attributeList;

  const lengthA = listA.length;
  const lengthB = listB.length;

  if (lengthA !== lengthB) {
    return false;
  }

  for (let i = 0; i < lengthA; ++i) {
    const attrA = listA[i];

    if (!listB.some(attrB => nodeEquals(attrA, attrB))) {
      return false;
    }
  }

  return true;
}

// https://dom.spec.whatwg.org/#concept-tree-host-including-inclusive-ancestor
function isHostInclusiveAncestor(nodeImplA, nodeImplB) {
  for (const ancestor of domSymbolTree.ancestorsIterator(nodeImplB)) {
    if (ancestor === nodeImplA) {
      return true;
    }
  }

  const rootImplB = nodeRoot(nodeImplB);
  if (rootImplB._host) {
    return isHostInclusiveAncestor(nodeImplA, rootImplB._host);
  }

  return false;
}

class NodeImpl extends EventTargetImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    domSymbolTree.initialize(this);

    this._ownerDocument = privateData.ownerDocument;

    this._childNodesList = null;
    this._childrenList = null;
    this._version = 0;
    this._memoizedQueries = {};
    this._registeredObserverList = [];
    this._referencedRanges = new Set();
  }

  _getTheParent() {
    if (this._assignedSlot) {
      return this._assignedSlot;
    }

    return domSymbolTree.parent(this);
  }

  get parentNode() {
    return domSymbolTree.parent(this);
  }

  getRootNode(options) {
    return options.composed ? shadowIncludingRoot(this) : nodeRoot(this);
  }

  get nodeName() {
    switch (this.nodeType) {
      case NODE_TYPE.ELEMENT_NODE:
        return this.tagName;
      case NODE_TYPE.ATTRIBUTE_NODE:
        return this._qualifiedName;
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

  // https://dom.spec.whatwg.org/#connected
  // https://dom.spec.whatwg.org/#dom-node-isconnected
  get isConnected() {
    const root = shadowIncludingRoot(this);
    return root && root.nodeType === NODE_TYPE.DOCUMENT_NODE;
  }

  get ownerDocument() {
    return this.nodeType === NODE_TYPE.DOCUMENT_NODE ? null : this._ownerDocument;
  }

  get lastChild() {
    return domSymbolTree.lastChild(this);
  }

  get childNodes() {
    if (!this._childNodesList) {
      this._childNodesList = NodeList.createImpl(this._globalObject, [], {
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
    invalidateStyleCache(this);
  }

  _childTextContentChangeSteps() {
    invalidateStyleCache(this);
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

  hasChildNodes() {
    return domSymbolTree.hasChildren(this);
  }

  // https://dom.spec.whatwg.org/#dom-node-normalize
  normalize() {
    // It is important to use a treeToArray instead of a treeToIterator here, because the
    // treeToIterator doesn't support tree mutation in the middle of the traversal.
    for (const node of domSymbolTree.treeToArray(this)) {
      const parentNode = domSymbolTree.parent(node);
      if (parentNode === null || node.nodeType !== NODE_TYPE.TEXT_NODE) {
        continue;
      }

      let length = nodeLength(node);

      if (length === 0) {
        parentNode._remove(node);
        continue;
      }

      const continuousExclusiveTextNodes = [];

      for (const currentNode of domSymbolTree.previousSiblingsIterator(node)) {
        if (currentNode.nodeType !== NODE_TYPE.TEXT_NODE) {
          break;
        }

        continuousExclusiveTextNodes.unshift(currentNode);
      }
      for (const currentNode of domSymbolTree.nextSiblingsIterator(node)) {
        if (currentNode.nodeType !== NODE_TYPE.TEXT_NODE) {
          break;
        }

        continuousExclusiveTextNodes.push(currentNode);
      }

      const data = continuousExclusiveTextNodes.reduce((d, n) => d + n._data, "");
      node.replaceData(length, 0, data);

      let currentNode = domSymbolTree.nextSibling(node);
      while (currentNode && currentNode.nodeType === NODE_TYPE.TEXT_NODE) {
        const currentNodeIndex = domSymbolTree.index(currentNode);

        for (const range of node._referencedRanges) {
          const { _start, _end } = range;

          if (_start.node === currentNode) {
            range._setLiveRangeStart(node, _start.offset + length);
          }
          if (_end.node === currentNode) {
            range._setLiveRangeEnd(node, _end.offset + length);
          }
        }

        for (const range of parentNode._referencedRanges) {
          const { _start, _end } = range;

          if (_start.node === parentNode && _start.offset === currentNodeIndex) {
            range._setLiveRangeStart(node, length);
          }
          if (_end.node === parentNode && _end.offset === currentNodeIndex) {
            range._setLiveRangeEnd(node, length);
          }
        }

        length += nodeLength(currentNode);
        currentNode = domSymbolTree.nextSibling(currentNode);
      }

      for (const continuousExclusiveTextNode of continuousExclusiveTextNodes) {
        parentNode._remove(continuousExclusiveTextNode);
      }
    }
  }

  get parentElement() {
    const parentNode = domSymbolTree.parent(this);
    return parentNode !== null && parentNode.nodeType === NODE_TYPE.ELEMENT_NODE ? parentNode : null;
  }

  get baseURI() {
    return this._ownerDocument.baseURLSerialized();
  }

  compareDocumentPosition(other) {
    // Let node1 be other and node2 be the context object.
    let node1 = other;
    let node2 = this;

    let attr1 = null;
    let attr2 = null;

    if (node1.nodeType === NODE_TYPE.ATTRIBUTE_NODE) {
      attr1 = node1;
      node1 = attr1._element;
    }

    if (node2.nodeType === NODE_TYPE.ATTRIBUTE_NODE) {
      attr2 = node2;
      node2 = attr2._element;

      if (attr1 !== null && node1 !== null && node2 === node1) {
        for (const attr of node2._attributeList) {
          if (nodeEquals(attr, attr1)) {
            return NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC |
              NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_PRECEDING;
          }

          if (nodeEquals(attr, attr2)) {
            return NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC |
              NODE_DOCUMENT_POSITION.DOCUMENT_POSITION_FOLLOWING;
          }
        }
      }
    }

    const result = domSymbolTree.compareTreePosition(node2, node1);

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
    return isInclusiveAncestor(this, other);
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
    if (isShadowRoot(this)) {
      throw DOMException.create(this._globalObject, ["ShadowRoot nodes are not clonable.", "NotSupportedError"]);
    }

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
        setAnExistingAttributeValue(this, value);
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

  // https://dom.spec.whatwg.org/#dom-node-textcontent
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
    if (value === null) {
      value = "";
    }

    switch (this.nodeType) {
      case NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
      case NODE_TYPE.ELEMENT_NODE: {
        // https://dom.spec.whatwg.org/#string-replace-all
        let nodeImpl = null;

        if (value !== "") {
          nodeImpl = this._ownerDocument.createTextNode(value);
        }

        this._replaceAll(nodeImpl);
        break;
      }

      case NODE_TYPE.ATTRIBUTE_NODE: {
        setAnExistingAttributeValue(this, value);
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

  // https://dom.spec.whatwg.org/#dom-node-insertbefore
  insertBefore(nodeImpl, childImpl) {
    return this._preInsert(nodeImpl, childImpl);
  }

  // https://dom.spec.whatwg.org/#dom-node-appendchild
  appendChild(nodeImpl) {
    return this._append(nodeImpl);
  }

  // https://dom.spec.whatwg.org/#dom-node-replacechild
  replaceChild(nodeImpl, childImpl) {
    return this._replace(nodeImpl, childImpl);
  }

  // https://dom.spec.whatwg.org/#dom-node-removechild
  removeChild(oldChildImpl) {
    return this._preRemove(oldChildImpl);
  }

  // https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
  _preInsertValidity(nodeImpl, childImpl) {
    const { nodeType } = nodeImpl;
    const parentType = this.nodeType;

    if (
      parentType !== NODE_TYPE.DOCUMENT_NODE &&
      parentType !== NODE_TYPE.DOCUMENT_FRAGMENT_NODE &&
      parentType !== NODE_TYPE.ELEMENT_NODE
    ) {
      throw DOMException.create(this._globalObject, [
        `Node can't be inserted in a ${this.nodeName} parent.`,
        "HierarchyRequestError"
      ]);
    }

    if (isHostInclusiveAncestor(nodeImpl, this)) {
      throw DOMException.create(this._globalObject, [
        "The operation would yield an incorrect node tree.",
        "HierarchyRequestError"
      ]);
    }

    if (childImpl && domSymbolTree.parent(childImpl) !== this) {
      throw DOMException.create(this._globalObject, [
        "The child can not be found in the parent.",
        "NotFoundError"
      ]);
    }

    if (
      nodeType !== NODE_TYPE.DOCUMENT_FRAGMENT_NODE &&
      nodeType !== NODE_TYPE.DOCUMENT_TYPE_NODE &&
      nodeType !== NODE_TYPE.ELEMENT_NODE &&
      nodeType !== NODE_TYPE.TEXT_NODE &&
      nodeType !== NODE_TYPE.CDATA_SECTION_NODE && // CData section extends from Text
      nodeType !== NODE_TYPE.PROCESSING_INSTRUCTION_NODE &&
      nodeType !== NODE_TYPE.COMMENT_NODE
    ) {
      throw DOMException.create(this._globalObject, [
        `${nodeImpl.nodeName} node can't be inserted in parent node.`,
        "HierarchyRequestError"
      ]);
    }

    if (
      (nodeType === NODE_TYPE.TEXT_NODE && parentType === NODE_TYPE.DOCUMENT_NODE) ||
      (nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE && parentType !== NODE_TYPE.DOCUMENT_NODE)
    ) {
      throw DOMException.create(this._globalObject, [
        `${nodeImpl.nodeName} node can't be inserted in ${this.nodeName} parent.`,
        "HierarchyRequestError"
      ]);
    }

    if (parentType === NODE_TYPE.DOCUMENT_NODE) {
      const nodeChildren = domSymbolTree.childrenToArray(nodeImpl);
      const parentChildren = domSymbolTree.childrenToArray(this);

      switch (nodeType) {
        case NODE_TYPE.DOCUMENT_FRAGMENT_NODE: {
          const nodeChildrenElements = nodeChildren.filter(child => child.nodeType === NODE_TYPE.ELEMENT_NODE);
          if (nodeChildrenElements.length > 1) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeImpl.nodeName} node in ${this.nodeName} node.`,
              "HierarchyRequestError"
            ]);
          }

          const hasNodeTextChildren = nodeChildren.some(child => child.nodeType === NODE_TYPE.TEXT_NODE);
          if (hasNodeTextChildren) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeImpl.nodeName} node in ${this.nodeName} node.`,
              "HierarchyRequestError"
            ]);
          }

          if (
            nodeChildrenElements.length === 1 &&
            (
              parentChildren.some(child => child.nodeType === NODE_TYPE.ELEMENT_NODE) ||
              (childImpl && childImpl.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) ||
              (
                childImpl &&
                domSymbolTree.nextSibling(childImpl) &&
                domSymbolTree.nextSibling(childImpl).nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE
              )
            )
          ) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeImpl.nodeName} node in ${this.nodeName} node.`,
              "HierarchyRequestError"
            ]);
          }
          break;
        }

        case NODE_TYPE.ELEMENT_NODE:
          if (
            parentChildren.some(child => child.nodeType === NODE_TYPE.ELEMENT_NODE) ||
            (childImpl && childImpl.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) ||
            (
              childImpl &&
              domSymbolTree.nextSibling(childImpl) &&
              domSymbolTree.nextSibling(childImpl).nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE
            )
          ) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeImpl.nodeName} node in ${this.nodeName} node.`,
              "HierarchyRequestError"
            ]);
          }
          break;

        case NODE_TYPE.DOCUMENT_TYPE_NODE:
          if (
            parentChildren.some(child => child.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) ||
            (
              childImpl &&
              domSymbolTree.previousSibling(childImpl) &&
              domSymbolTree.previousSibling(childImpl).nodeType === NODE_TYPE.ELEMENT_NODE
            ) ||
            (!childImpl && parentChildren.some(child => child.nodeType === NODE_TYPE.ELEMENT_NODE))
          ) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeImpl.nodeName} node in ${this.nodeName} node.`,
              "HierarchyRequestError"
            ]);
          }
          break;
      }
    }
  }

  // https://dom.spec.whatwg.org/#concept-node-pre-insert
  _preInsert(nodeImpl, childImpl) {
    this._preInsertValidity(nodeImpl, childImpl);

    let referenceChildImpl = childImpl;
    if (referenceChildImpl === nodeImpl) {
      referenceChildImpl = domSymbolTree.nextSibling(nodeImpl);
    }

    this._ownerDocument._adoptNode(nodeImpl);

    this._insert(nodeImpl, referenceChildImpl);

    return nodeImpl;
  }

  // https://dom.spec.whatwg.org/#concept-node-insert
  _insert(nodeImpl, childImpl, suppressObservers) {
    const count = nodeImpl.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE ?
        domSymbolTree.childrenCount(nodeImpl) :
        1;

    if (childImpl) {
      const childIndex = domSymbolTree.index(childImpl);

      for (const range of this._referencedRanges) {
        const { _start, _end } = range;

        if (_start.offset > childIndex) {
          range._setLiveRangeStart(this, _start.offset + count);
        }

        if (_end.offset > childIndex) {
          range._setLiveRangeEnd(this, _end.offset + count);
        }
      }
    }

    const nodesImpl = nodeImpl.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE ?
      domSymbolTree.childrenToArray(nodeImpl) :
      [nodeImpl];

    if (nodeImpl.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      let grandChildImpl;
      while ((grandChildImpl = domSymbolTree.firstChild(nodeImpl))) {
        nodeImpl._remove(grandChildImpl, true);
      }
    }

    if (nodeImpl.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      queueTreeMutationRecord(nodeImpl, [], nodesImpl, null, null);
    }

    const previousChildImpl = childImpl ?
      domSymbolTree.previousSibling(childImpl) :
      domSymbolTree.lastChild(this);

    let isConnected;

    for (const node of nodesImpl) {
      if (!childImpl) {
        domSymbolTree.appendChild(this, node);
      } else {
        domSymbolTree.insertBefore(childImpl, node);
      }

      if (
        (this.nodeType === NODE_TYPE.ELEMENT_NODE && this._shadowRoot !== null) &&
        (node.nodeType === NODE_TYPE.ELEMENT_NODE || node.nodeType === NODE_TYPE.TEXT_NODE)
      ) {
        assignSlot(node);
      }

      this._modified();

      if (node.nodeType === NODE_TYPE.TEXT_NODE ||
          node.nodeType === NODE_TYPE.CDATA_SECTION_NODE) {
        this._childTextContentChangeSteps();
      }

      if (isSlot(this) && this._assignedNodes.length === 0 && isShadowRoot(nodeRoot(this))) {
        signalSlotChange(this);
      }

      const root = nodeRoot(node);
      if (isShadowRoot(root)) {
        assignSlotableForTree(root);
      }

      if (this._attached && nodeImpl._attach) {
        node._attach();
      }

      this._descendantAdded(this, node);

      if (isConnected === undefined) {
        isConnected = node.isConnected;
      }

      if (isConnected) {
        for (const inclusiveDescendant of shadowIncludingInclusiveDescendantsIterator(node)) {
          if (inclusiveDescendant._ceState === "custom") {
            enqueueCECallbackReaction(inclusiveDescendant, "connectedCallback", []);
          } else {
            tryUpgradeElement(inclusiveDescendant);
          }
        }
      }
    }

    if (!suppressObservers) {
      queueTreeMutationRecord(this, nodesImpl, [], previousChildImpl, childImpl);
    }
  }

  // https://dom.spec.whatwg.org/#concept-node-append
  _append(nodeImpl) {
    return this._preInsert(nodeImpl, null);
  }

  // https://dom.spec.whatwg.org/#concept-node-replace
  _replace(nodeImpl, childImpl) {
    const { nodeType, nodeName } = nodeImpl;
    const { nodeType: parentType, nodeName: parentName } = this;

    // Note: This section differs from the pre-insert validation algorithm.
    if (
      parentType !== NODE_TYPE.DOCUMENT_NODE &&
      parentType !== NODE_TYPE.DOCUMENT_FRAGMENT_NODE &&
      parentType !== NODE_TYPE.ELEMENT_NODE
    ) {
      throw DOMException.create(this._globalObject, [
        `Node can't be inserted in a ${parentName} parent.`,
        "HierarchyRequestError"
      ]);
    }

    if (isHostInclusiveAncestor(nodeImpl, this)) {
      throw DOMException.create(this._globalObject, [
        "The operation would yield an incorrect node tree.",
        "HierarchyRequestError"
      ]);
    }

    if (childImpl && domSymbolTree.parent(childImpl) !== this) {
      throw DOMException.create(this._globalObject, [
        "The child can not be found in the parent.",
        "NotFoundError"
      ]);
    }

    if (
      nodeType !== NODE_TYPE.DOCUMENT_FRAGMENT_NODE &&
      nodeType !== NODE_TYPE.DOCUMENT_TYPE_NODE &&
      nodeType !== NODE_TYPE.ELEMENT_NODE &&
      nodeType !== NODE_TYPE.TEXT_NODE &&
      nodeType !== NODE_TYPE.CDATA_SECTION_NODE && // CData section extends from Text
      nodeType !== NODE_TYPE.PROCESSING_INSTRUCTION_NODE &&
      nodeType !== NODE_TYPE.COMMENT_NODE
    ) {
      throw DOMException.create(this._globalObject, [
        `${nodeName} node can't be inserted in parent node.`,
        "HierarchyRequestError"
      ]);
    }

    if (
      (nodeType === NODE_TYPE.TEXT_NODE && parentType === NODE_TYPE.DOCUMENT_NODE) ||
      (nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE && parentType !== NODE_TYPE.DOCUMENT_NODE)
    ) {
      throw DOMException.create(this._globalObject, [
        `${nodeName} node can't be inserted in ${parentName} parent.`,
        "HierarchyRequestError"
      ]);
    }

    if (parentType === NODE_TYPE.DOCUMENT_NODE) {
      const nodeChildren = domSymbolTree.childrenToArray(nodeImpl);
      const parentChildren = domSymbolTree.childrenToArray(this);

      switch (nodeType) {
        case NODE_TYPE.DOCUMENT_FRAGMENT_NODE: {
          const nodeChildrenElements = nodeChildren.filter(child => child.nodeType === NODE_TYPE.ELEMENT_NODE);
          if (nodeChildrenElements.length > 1) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeName} node in ${parentName} node.`,
              "HierarchyRequestError"
            ]);
          }

          const hasNodeTextChildren = nodeChildren.some(child => child.nodeType === NODE_TYPE.TEXT_NODE);
          if (hasNodeTextChildren) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeName} node in ${parentName} node.`,
              "HierarchyRequestError"
            ]);
          }


          const parentChildElements = parentChildren.filter(child => child.nodeType === NODE_TYPE.ELEMENT_NODE);
          if (
            nodeChildrenElements.length === 1 &&
            (
              (parentChildElements.length === 1 && parentChildElements[0] !== childImpl) ||
              (
                childImpl &&
                domSymbolTree.nextSibling(childImpl) &&
                domSymbolTree.nextSibling(childImpl).nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE
              )
            )
          ) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeName} node in ${parentName} node.`,
              "HierarchyRequestError"
            ]);
          }
          break;
        }

        case NODE_TYPE.ELEMENT_NODE:
          if (
            parentChildren.some(child => child.nodeType === NODE_TYPE.ELEMENT_NODE && child !== childImpl) ||
            (
              childImpl &&
              domSymbolTree.nextSibling(childImpl) &&
              domSymbolTree.nextSibling(childImpl).nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE
            )
          ) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeName} node in ${parentName} node.`,
              "HierarchyRequestError"
            ]);
          }
          break;

        case NODE_TYPE.DOCUMENT_TYPE_NODE:
          if (
            parentChildren.some(child => child.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE && child !== childImpl) ||
            (
              childImpl &&
              domSymbolTree.previousSibling(childImpl) &&
              domSymbolTree.previousSibling(childImpl).nodeType === NODE_TYPE.ELEMENT_NODE
            )
          ) {
            throw DOMException.create(this._globalObject, [
              `Invalid insertion of ${nodeName} node in ${parentName} node.`,
              "HierarchyRequestError"
            ]);
          }
          break;
      }
    }

    let referenceChildImpl = domSymbolTree.nextSibling(childImpl);
    if (referenceChildImpl === nodeImpl) {
      referenceChildImpl = domSymbolTree.nextSibling(nodeImpl);
    }

    const previousSiblingImpl = domSymbolTree.previousSibling(childImpl);

    this._ownerDocument._adoptNode(nodeImpl);

    let removedNodesImpl = [];

    if (domSymbolTree.parent(childImpl)) {
      removedNodesImpl = [childImpl];
      this._remove(childImpl, true);
    }

    const nodesImpl = nodeImpl.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE ?
      domSymbolTree.childrenToArray(nodeImpl) :
      [nodeImpl];

    this._insert(nodeImpl, referenceChildImpl, true);

    queueTreeMutationRecord(this, nodesImpl, removedNodesImpl, previousSiblingImpl, referenceChildImpl);

    return childImpl;
  }

  // https://dom.spec.whatwg.org/#concept-node-replace-all
  _replaceAll(nodeImpl) {
    if (nodeImpl !== null) {
      this._ownerDocument._adoptNode(nodeImpl);
    }

    const removedNodesImpl = domSymbolTree.childrenToArray(this);

    let addedNodesImpl;
    if (nodeImpl === null) {
      addedNodesImpl = [];
    } else if (nodeImpl.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE) {
      addedNodesImpl = domSymbolTree.childrenToArray(nodeImpl);
    } else {
      addedNodesImpl = [nodeImpl];
    }

    for (const childImpl of domSymbolTree.childrenIterator(this)) {
      this._remove(childImpl, true);
    }

    if (nodeImpl !== null) {
      this._insert(nodeImpl, null, true);
    }

    if (addedNodesImpl.length > 0 || removedNodesImpl.length > 0) {
      queueTreeMutationRecord(this, addedNodesImpl, removedNodesImpl, null, null);
    }
  }

  // https://dom.spec.whatwg.org/#concept-node-pre-remove
  _preRemove(childImpl) {
    if (domSymbolTree.parent(childImpl) !== this) {
      throw DOMException.create(this._globalObject, [
        "The node to be removed is not a child of this node.",
        "NotFoundError"
      ]);
    }

    this._remove(childImpl);

    return childImpl;
  }

  // https://dom.spec.whatwg.org/#concept-node-remove
  _remove(nodeImpl, suppressObservers) {
    const index = domSymbolTree.index(nodeImpl);

    for (const descendant of domSymbolTree.treeIterator(nodeImpl)) {
      for (const range of descendant._referencedRanges) {
        const { _start, _end } = range;

        if (_start.node === descendant) {
          range._setLiveRangeStart(this, index);
        }

        if (_end.node === descendant) {
          range._setLiveRangeEnd(this, index);
        }
      }
    }

    for (const range of this._referencedRanges) {
      const { _start, _end } = range;

      if (_start.node === this && _start.offset > index) {
        range._setLiveRangeStart(this, _start.offset - 1);
      }

      if (_end.node === this && _end.offset > index) {
        range._setLiveRangeEnd(this, _end.offset - 1);
      }
    }

    if (this._ownerDocument) {
      this._ownerDocument._runPreRemovingSteps(nodeImpl);
    }

    const oldPreviousSiblingImpl = domSymbolTree.previousSibling(nodeImpl);
    const oldNextSiblingImpl = domSymbolTree.nextSibling(nodeImpl);

    domSymbolTree.remove(nodeImpl);

    if (nodeImpl._assignedSlot) {
      assignSlotable(nodeImpl._assignedSlot);
    }

    if (isSlot(this) && this._assignedNodes.length === 0 && isShadowRoot(nodeRoot(this))) {
      signalSlotChange(this);
    }

    let hasSlotDescendant = isSlot(nodeImpl);
    if (!hasSlotDescendant) {
      for (const child of domSymbolTree.treeIterator(nodeImpl)) {
        if (isSlot(child)) {
          hasSlotDescendant = true;
          break;
        }
      }
    }

    if (hasSlotDescendant) {
      assignSlotableForTree(nodeRoot(this));
      assignSlotableForTree(nodeImpl);
    }

    this._modified();
    nodeImpl._detach();
    this._descendantRemoved(this, nodeImpl);

    if (this.isConnected) {
      if (nodeImpl._ceState === "custom") {
        enqueueCECallbackReaction(nodeImpl, "disconnectedCallback", []);
      }

      for (const descendantImpl of shadowIncludingDescendantsIterator(nodeImpl)) {
        if (descendantImpl._ceState === "custom") {
          enqueueCECallbackReaction(descendantImpl, "disconnectedCallback", []);
        }
      }
    }

    if (!suppressObservers) {
      queueTreeMutationRecord(this, [], [nodeImpl], oldPreviousSiblingImpl, oldNextSiblingImpl);
    }

    if (nodeImpl.nodeType === NODE_TYPE.TEXT_NODE) {
      this._childTextContentChangeSteps();
    }
  }
}

module.exports = {
  implementation: NodeImpl
};
