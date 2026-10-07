"use strict";

const DOMException = require("../generated/DOMException");

const { clone } = require("../node");
const NODE_TYPE = require("../node-type");
const { parseFragment } = require("../../browser/parser/index");

const { HTML_NS } = require("../helpers/namespaces");
const { domSymbolTree } = require("../helpers/internal-constants");
const { compareBoundaryPointsPosition } = require("./boundary-point");
const { nodeRoot, nodeLength, isInclusiveAncestor } = require("../helpers/node");
const { createElement } = require("../helpers/create-element");

const AbstractRangeImpl = require("./AbstractRange-impl").implementation;

const Range = require("../generated/Range");
const DocumentFragment = require("../generated/DocumentFragment");
const { implForWrapper } = require("../generated/utils");

const RANGE_COMPARISON_TYPE = {
  START_TO_START: 0,
  START_TO_END: 1,
  END_TO_END: 2,
  END_TO_START: 3
};

class RangeImpl extends AbstractRangeImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    const defaultBoundaryPoint = {
      node: implForWrapper(globalObject._document),
      offset: 0
    };

    const {
      start = defaultBoundaryPoint,
      end = defaultBoundaryPoint
    } = privateData;

    this._setLiveRangeStart(start.node, start.offset);
    this._setLiveRangeEnd(end.node, end.offset);
  }

  // https://dom.spec.whatwg.org/#dom-range-commonancestorcontainer
  get commonAncestorContainer() {
    const { _start, _end } = this;

    for (const container of domSymbolTree.ancestorsIterator(_start.node)) {
      if (isInclusiveAncestor(container, _end.node)) {
        return container;
      }
    }

    return null;
  }

  // https://dom.spec.whatwg.org/#dom-range-setstart
  setStart(node, offset) {
    setBoundaryPointStart(this, node, offset);
  }

  // https://dom.spec.whatwg.org/#dom-range-setend
  setEnd(node, offset) {
    setBoundaryPointEnd(this, node, offset);
  }

  // https://dom.spec.whatwg.org/#dom-range-setstartbefore
  setStartBefore(node) {
    const parent = domSymbolTree.parent(node);

    if (!parent) {
      throw DOMException.create(this._globalObject, ["The given Node has no parent.", "InvalidNodeTypeError"]);
    }

    setBoundaryPointStart(this, parent, domSymbolTree.index(node));
  }

  // https://dom.spec.whatwg.org/#dom-range-setstartafter
  setStartAfter(node) {
    const parent = domSymbolTree.parent(node);

    if (!parent) {
      throw DOMException.create(this._globalObject, ["The given Node has no parent.", "InvalidNodeTypeError"]);
    }

    setBoundaryPointStart(this, parent, domSymbolTree.index(node) + 1);
  }

  // https://dom.spec.whatwg.org/#dom-range-setendbefore
  setEndBefore(node) {
    const parent = domSymbolTree.parent(node);

    if (!parent) {
      throw DOMException.create(this._globalObject, ["The given Node has no parent.", "InvalidNodeTypeError"]);
    }

    setBoundaryPointEnd(this, parent, domSymbolTree.index(node));
  }

  // https://dom.spec.whatwg.org/#dom-range-setendafter
  setEndAfter(node) {
    const parent = domSymbolTree.parent(node);

    if (!parent) {
      throw DOMException.create(this._globalObject, ["The given Node has no parent.", "InvalidNodeTypeError"]);
    }

    setBoundaryPointEnd(this, parent, domSymbolTree.index(node) + 1);
  }

  // https://dom.spec.whatwg.org/#dom-range-collapse
  collapse(toStart) {
    if (toStart) {
      this._setLiveRangeEnd(this._start.node, this._start.offset);
    } else {
      this._setLiveRangeStart(this._end.node, this._end.offset);
    }
  }

  // https://dom.spec.whatwg.org/#dom-range-selectnode
  selectNode(node) {
    selectNodeWithinRange(node, this);
  }

  // https://dom.spec.whatwg.org/#dom-range-selectnodecontents
  selectNodeContents(node) {
    if (node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) {
      throw DOMException.create(this._globalObject, [
        "DocumentType Node can't be used as boundary point.",
        "InvalidNodeTypeError"
      ]);
    }

    const length = nodeLength(node);

    this._setLiveRangeStart(node, 0);
    this._setLiveRangeEnd(node, length);
  }

  // https://dom.spec.whatwg.org/#dom-range-compareboundarypoints
  compareBoundaryPoints(how, sourceRange) {
    if (
      how !== RANGE_COMPARISON_TYPE.START_TO_START &&
      how !== RANGE_COMPARISON_TYPE.START_TO_END &&
      how !== RANGE_COMPARISON_TYPE.END_TO_END &&
      how !== RANGE_COMPARISON_TYPE.END_TO_START
    ) {
      const message = "The comparison method provided must be one of 'START_TO_START', 'START_TO_END', 'END_TO_END', " +
                      "or 'END_TO_START'.";
      throw DOMException.create(this._globalObject, [message, "NotSupportedError"]);
    }

    if (this._root !== sourceRange._root) {
      throw DOMException.create(this._globalObject, ["The two Ranges are not in the same tree.", "WrongDocumentError"]);
    }

    let thisPoint, otherPoint;
    if (how === RANGE_COMPARISON_TYPE.START_TO_START) {
      thisPoint = this._start;
      otherPoint = sourceRange._start;
    } else if (how === RANGE_COMPARISON_TYPE.START_TO_END) {
      thisPoint = this._end;
      otherPoint = sourceRange._start;
    } else if (how === RANGE_COMPARISON_TYPE.END_TO_END) {
      thisPoint = this._end;
      otherPoint = sourceRange._end;
    } else {
      thisPoint = this._start;
      otherPoint = sourceRange._end;
    }

    return compareBoundaryPointsPosition(thisPoint, otherPoint);
  }

  // https://dom.spec.whatwg.org/#dom-range-deletecontents
  deleteContents() {
    if (this.collapsed) {
      return;
    }

    const { _start: originalStart, _end: originalEnd } = this;

    if (
      originalStart.node === originalEnd.node &&
      (
        originalStart.node.nodeType === NODE_TYPE.TEXT_NODE ||
        originalStart.node.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
        originalStart.node.nodeType === NODE_TYPE.COMMENT_NODE
      )
    ) {
      originalStart.node.replaceData(originalStart.offset, originalEnd.offset - originalStart.offset, "");
      return;
    }

    const nodesToRemove = [];
    let currentNode = this._start.node;
    const endNode = nextNodeDescendant(this._end.node);
    while (currentNode && currentNode !== endNode) {
      if (
        isContained(currentNode, this) &&
        !isContained(domSymbolTree.parent(currentNode), this)
      ) {
        nodesToRemove.push(currentNode);
      }

      currentNode = domSymbolTree.following(currentNode);
    }

    let newNode, newOffset;
    if (isInclusiveAncestor(originalStart.node, originalEnd.node)) {
      newNode = originalStart.node;
      newOffset = originalStart.offset;
    } else {
      let referenceNode = originalStart.node;

      while (
        referenceNode &&
        !isInclusiveAncestor(domSymbolTree.parent(referenceNode), originalEnd.node)
      ) {
        referenceNode = domSymbolTree.parent(referenceNode);
      }

      newNode = domSymbolTree.parent(referenceNode);
      newOffset = domSymbolTree.index(referenceNode) + 1;
    }

    if (
      originalStart.node.nodeType === NODE_TYPE.TEXT_NODE ||
      originalStart.node.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      originalStart.node.nodeType === NODE_TYPE.COMMENT_NODE
    ) {
      originalStart.node.replaceData(originalStart.offset, nodeLength(originalStart.node) - originalStart.offset, "");
    }

    for (const node of nodesToRemove) {
      const parent = domSymbolTree.parent(node);
      parent.removeChild(node);
    }

    if (
      originalEnd.node.nodeType === NODE_TYPE.TEXT_NODE ||
      originalEnd.node.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      originalEnd.node.nodeType === NODE_TYPE.COMMENT_NODE
    ) {
      originalEnd.node.replaceData(0, originalEnd.offset, "");
    }

    this._setLiveRangeStart(newNode, newOffset);
    this._setLiveRangeEnd(newNode, newOffset);
  }

  // https://dom.spec.whatwg.org/#dom-range-extractcontents
  extractContents() {
    return extractRange(this);
  }

  // https://dom.spec.whatwg.org/#dom-range-clonecontents
  cloneContents() {
    return cloneRange(this);
  }

  // https://dom.spec.whatwg.org/#dom-range-insertnode
  insertNode(node) {
    insertNodeInRange(node, this);
  }

  // https://dom.spec.whatwg.org/#dom-range-surroundcontents
  surroundContents(newParent) {
    let node = this.commonAncestorContainer;
    const endNode = nextNodeDescendant(node);
    while (node !== endNode) {
      if (node.nodeType !== NODE_TYPE.TEXT_NODE && isPartiallyContained(node, this)) {
        throw DOMException.create(this._globalObject, [
          "The Range has partially contains a non-Text node.",
          "InvalidStateError"
        ]);
      }

      node = domSymbolTree.following(node);
    }

    if (
      newParent.nodeType === NODE_TYPE.DOCUMENT_NODE ||
      newParent.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE ||
      newParent.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE
    ) {
      throw DOMException.create(this._globalObject, ["Invalid element type.", "InvalidNodeTypeError"]);
    }

    const fragment = extractRange(this);

    while (domSymbolTree.firstChild(newParent)) {
      newParent.removeChild(domSymbolTree.firstChild(newParent));
    }

    insertNodeInRange(newParent, this);

    newParent.appendChild(fragment);

    selectNodeWithinRange(newParent, this);
  }

  // https://dom.spec.whatwg.org/#dom-range-clonerange
  cloneRange() {
    const { _start, _end, _globalObject } = this;

    return Range.createImpl(_globalObject, [], {
      start: { node: _start.node, offset: _start.offset },
      end: { node: _end.node, offset: _end.offset }
    });
  }

  // https://dom.spec.whatwg.org/#dom-range-detach
  detach() {
    // Do nothing by spec!
  }

  // https://dom.spec.whatwg.org/#dom-range-ispointinrange
  isPointInRange(node, offset) {
    if (nodeRoot(node) !== this._root) {
      return false;
    }

    validateSetBoundaryPoint(node, offset);

    const bp = { node, offset };

    if (
      compareBoundaryPointsPosition(bp, this._start) === -1 ||
      compareBoundaryPointsPosition(bp, this._end) === 1
    ) {
      return false;
    }

    return true;
  }

  // https://dom.spec.whatwg.org/#dom-range-comparepoint
  comparePoint(node, offset) {
    if (nodeRoot(node) !== this._root) {
      throw DOMException.create(this._globalObject, [
        "The given Node and the Range are not in the same tree.",
        "WrongDocumentError"
      ]);
    }

    validateSetBoundaryPoint(node, offset);

    const bp = { node, offset };
    if (compareBoundaryPointsPosition(bp, this._start) === -1) {
      return -1;
    } else if (compareBoundaryPointsPosition(bp, this._end) === 1) {
      return 1;
    }

    return 0;
  }

  // https://dom.spec.whatwg.org/#dom-range-intersectsnode
  intersectsNode(node) {
    if (nodeRoot(node) !== this._root) {
      return false;
    }

    const parent = domSymbolTree.parent(node);
    if (!parent) {
      return true;
    }

    const offset = domSymbolTree.index(node);

    return (
      compareBoundaryPointsPosition({ node: parent, offset }, this._end) === -1 &&
      compareBoundaryPointsPosition({ node: parent, offset: offset + 1 }, this._start) === 1
    );
  }

  // https://dom.spec.whatwg.org/#dom-range-stringifier
  toString() {
    let s = "";
    const { _start, _end } = this;

    if (_start.node === _end.node && _start.node.nodeType === NODE_TYPE.TEXT_NODE) {
      return _start.node.data.slice(_start.offset, _end.offset);
    }

    if (_start.node.nodeType === NODE_TYPE.TEXT_NODE) {
      s += _start.node.data.slice(_start.offset);
    }

    let currentNode = _start.node;
    const endNode = nextNodeDescendant(_end.node);
    while (currentNode && currentNode !== endNode) {
      if (currentNode.nodeType === NODE_TYPE.TEXT_NODE && isContained(currentNode, this)) {
        s += currentNode.data;
      }

      currentNode = domSymbolTree.following(currentNode);
    }

    if (_end.node.nodeType === NODE_TYPE.TEXT_NODE) {
      s += _end.node.data.slice(0, _end.offset);
    }

    return s;
  }

  // https://w3c.github.io/DOM-Parsing/#dom-range-createcontextualfragment
  createContextualFragment(fragment) {
    const { node } = this._start;

    let element;
    switch (node.nodeType) {
      case NODE_TYPE.DOCUMENT_NODE:
      case NODE_TYPE.DOCUMENT_FRAGMENT_NODE:
        element = null;
        break;

      case NODE_TYPE.ELEMENT_NODE:
        element = node;
        break;

      case NODE_TYPE.TEXT_NODE:
      case NODE_TYPE.COMMENT_NODE:
        element = node.parentElement;
        break;

      default:
        throw new Error("Internal error: Invalid range start node");
    }

    if (
      element === null || (
        element._ownerDocument._parsingMode === "html" &&
        element._localName === "html" &&
        element._namespaceURI === HTML_NS
      )
    ) {
      element = createElement(node._ownerDocument, "body", HTML_NS);
    }

    return parseFragment(fragment, element);
  }

  // https://dom.spec.whatwg.org/#concept-range-root
  get _root() {
    return nodeRoot(this._start.node);
  }

  _setLiveRangeStart(node, offset) {
    if (
      this._start &&
      this._start.node !== node &&
      this._start.node !== this._end.node
    ) {
      this._start.node._referencedRanges.delete(this);
    }

    if (!node._referencedRanges.has(this)) {
      node._referencedRanges.add(this);
    }

    this._start = {
      node,
      offset
    };
  }

  _setLiveRangeEnd(node, offset) {
    if (
      this._end &&
      this._end.node !== node &&
      this._end.node !== this._start.node
    ) {
      this._end.node._referencedRanges.delete(this);
    }

    if (!node._referencedRanges.has(this)) {
      node._referencedRanges.add(this);
    }

    this._end = {
      node,
      offset
    };
  }
}


function nextNodeDescendant(node) {
  while (node && !domSymbolTree.nextSibling(node)) {
    node = domSymbolTree.parent(node);
  }

  if (!node) {
    return null;
  }

  return domSymbolTree.nextSibling(node);
}

// https://dom.spec.whatwg.org/#concept-range-bp-set
function validateSetBoundaryPoint(node, offset) {
  if (node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) {
    throw DOMException.create(node._globalObject, [
      "DocumentType Node can't be used as boundary point.",
      "InvalidNodeTypeError"
    ]);
  }

  if (offset > nodeLength(node)) {
    throw DOMException.create(node._globalObject, ["Offset out of bound.", "IndexSizeError"]);
  }
}
function setBoundaryPointStart(range, node, offset) {
  validateSetBoundaryPoint(node, offset);

  const bp = { node, offset };
  if (
    nodeRoot(node) !== range._root ||
    compareBoundaryPointsPosition(bp, range._end) === 1
  ) {
    range._setLiveRangeEnd(node, offset);
  }

  range._setLiveRangeStart(node, offset);
}
function setBoundaryPointEnd(range, node, offset) {
  validateSetBoundaryPoint(node, offset);

  const bp = { node, offset };
  if (
    nodeRoot(node) !== range._root ||
    compareBoundaryPointsPosition(bp, range._start) === -1
  ) {
    range._setLiveRangeStart(node, offset);
  }

  range._setLiveRangeEnd(node, offset);
}

// https://dom.spec.whatwg.org/#concept-range-select
function selectNodeWithinRange(node, range) {
  const parent = domSymbolTree.parent(node);

  if (!parent) {
    throw DOMException.create(node._globalObject, ["The given Node has no parent.", "InvalidNodeTypeError"]);
  }

  const index = domSymbolTree.index(node);

  range._setLiveRangeStart(parent, index);
  range._setLiveRangeEnd(parent, index + 1);
}

// https://dom.spec.whatwg.org/#contained
function isContained(node, range) {
  const { _start, _end } = range;
  return (
    compareBoundaryPointsPosition({ node, offset: 0 }, _start) === 1 &&
    compareBoundaryPointsPosition({ node, offset: nodeLength(node) }, _end) === -1
  );
}

// https://dom.spec.whatwg.org/#partially-contained
function isPartiallyContained(node, range) {
  const { _start, _end } = range;
  return (
    (isInclusiveAncestor(node, _start.node) && !isInclusiveAncestor(node, _end.node)) ||
    (!isInclusiveAncestor(node, _start.node) && isInclusiveAncestor(node, _end.node))
  );
}

// https://dom.spec.whatwg.org/#concept-range-insert
function insertNodeInRange(node, range) {
  const { node: startNode, offset: startOffset } = range._start;

  if (
    startNode.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
    startNode.nodeType === NODE_TYPE.COMMENT_NODE ||
    (startNode.nodeType === NODE_TYPE.TEXT_NODE && !domSymbolTree.parent(startNode)) ||
    node === startNode
  ) {
    throw DOMException.create(node._globalObject, ["Invalid start node.", "HierarchyRequestError"]);
  }

  let referenceNode = startNode.nodeType === NODE_TYPE.TEXT_NODE ?
    startNode :
    domSymbolTree.childrenToArray(startNode)[startOffset] || null;
  const parent = !referenceNode ?
    startNode :
    domSymbolTree.parent(referenceNode);

  parent._preInsertValidity(node, referenceNode);

  if (startNode.nodeType === NODE_TYPE.TEXT_NODE) {
    referenceNode = startNode.splitText(startOffset);
  }

  if (node === referenceNode) {
    referenceNode = domSymbolTree.nextSibling(referenceNode);
  }

  const nodeParent = domSymbolTree.parent(node);
  if (nodeParent) {
    nodeParent.removeChild(node);
  }

  let newOffset = !referenceNode ? nodeLength(parent) : domSymbolTree.index(referenceNode);
  newOffset += node.nodeType === NODE_TYPE.DOCUMENT_FRAGMENT_NODE ? nodeLength(node) : 1;

  parent.insertBefore(node, referenceNode);

  if (range.collapsed) {
    range._setLiveRangeEnd(parent, newOffset);
  }
}

// https://dom.spec.whatwg.org/#concept-range-clone
function cloneRange(range) {
  const { _start: originalStart, _end: originalEnd, _globalObject } = range;

  const fragment = DocumentFragment.createImpl(_globalObject, [], {
    ownerDocument: originalStart.node._ownerDocument
  });

  if (range.collapsed) {
    return fragment;
  }

  if (
    originalStart.node === originalEnd.node &&
    (
      originalStart.node.nodeType === NODE_TYPE.TEXT_NODE ||
      originalStart.node.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      originalStart.node.nodeType === NODE_TYPE.COMMENT_NODE
    )
  ) {
    const cloned = clone(originalStart.node);
    cloned._data = cloned.substringData(originalStart.offset, originalEnd.offset - originalStart.offset);

    fragment.appendChild(cloned);

    return fragment;
  }

  let commonAncestor = originalStart.node;
  while (!isInclusiveAncestor(commonAncestor, originalEnd.node)) {
    commonAncestor = domSymbolTree.parent(commonAncestor);
  }

  let firstPartialContainedChild = null;
  if (!isInclusiveAncestor(originalStart.node, originalEnd.node)) {
    let candidate = domSymbolTree.firstChild(commonAncestor);
    while (!firstPartialContainedChild) {
      if (isPartiallyContained(candidate, range)) {
        firstPartialContainedChild = candidate;
      }

      candidate = domSymbolTree.nextSibling(candidate);
    }
  }

  let lastPartiallyContainedChild = null;
  if (!isInclusiveAncestor(originalEnd.node, originalStart.node)) {
    let candidate = domSymbolTree.lastChild(commonAncestor);
    while (!lastPartiallyContainedChild) {
      if (isPartiallyContained(candidate, range)) {
        lastPartiallyContainedChild = candidate;
      }

      candidate = domSymbolTree.previousSibling(candidate);
    }
  }

  const containedChildren = domSymbolTree.childrenToArray(commonAncestor)
    .filter(node => isContained(node, range));

  const hasDoctypeChildren = containedChildren.some(node => node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE);
  if (hasDoctypeChildren) {
    throw DOMException.create(range._globalObject, ["Invalid document type element.", "HierarchyRequestError"]);
  }

  if (
    firstPartialContainedChild !== null &&
    (
      firstPartialContainedChild.nodeType === NODE_TYPE.TEXT_NODE ||
      firstPartialContainedChild.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      firstPartialContainedChild.nodeType === NODE_TYPE.COMMENT_NODE
    )
  ) {
    const cloned = clone(originalStart.node);
    cloned._data = cloned.substringData(originalStart.offset, nodeLength(originalStart.node) - originalStart.offset);

    fragment.appendChild(cloned);
  } else if (firstPartialContainedChild !== null) {
    const cloned = clone(firstPartialContainedChild);
    fragment.appendChild(cloned);

    const subrange = Range.createImpl(_globalObject, [], {
      start: { node: originalStart.node, offset: originalStart.offset },
      end: { node: firstPartialContainedChild, offset: nodeLength(firstPartialContainedChild) }
    });

    const subfragment = cloneRange(subrange);
    cloned.appendChild(subfragment);
  }

  for (const containedChild of containedChildren) {
    const cloned = clone(containedChild, undefined, true);
    fragment.appendChild(cloned);
  }

  if (
    lastPartiallyContainedChild !== null &&
    (
      lastPartiallyContainedChild.nodeType === NODE_TYPE.TEXT_NODE ||
      lastPartiallyContainedChild.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      lastPartiallyContainedChild.nodeType === NODE_TYPE.COMMENT_NODE
    )
  ) {
    const cloned = clone(originalEnd.node);
    cloned._data = cloned.substringData(0, originalEnd.offset);

    fragment.appendChild(cloned);
  } else if (lastPartiallyContainedChild !== null) {
    const cloned = clone(lastPartiallyContainedChild);
    fragment.appendChild(cloned);

    const subrange = Range.createImpl(_globalObject, [], {
      start: { node: lastPartiallyContainedChild, offset: 0 },
      end: { node: originalEnd.node, offset: originalEnd.offset }
    });

    const subfragment = cloneRange(subrange);
    cloned.appendChild(subfragment);
  }

  return fragment;
}

// https://dom.spec.whatwg.org/#concept-range-extract
function extractRange(range) {
  const { _start: originalStart, _end: originalEnd, _globalObject } = range;

  const fragment = DocumentFragment.createImpl(_globalObject, [], {
    ownerDocument: originalStart.node._ownerDocument
  });

  if (range.collapsed) {
    return fragment;
  }

  if (
    originalStart.node === originalEnd.node &&
    (
      originalStart.node.nodeType === NODE_TYPE.TEXT_NODE ||
      originalStart.node.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      originalStart.node.nodeType === NODE_TYPE.COMMENT_NODE
    )
  ) {
    const cloned = clone(originalStart.node);
    cloned._data = cloned.substringData(originalStart.offset, originalEnd.offset - originalStart.offset);

    fragment.appendChild(cloned);
    originalStart.node.replaceData(originalStart.offset, originalEnd.offset - originalStart.offset, "");

    return fragment;
  }

  let commonAncestor = originalStart.node;
  while (!isInclusiveAncestor(commonAncestor, originalEnd.node)) {
    commonAncestor = domSymbolTree.parent(commonAncestor);
  }

  let firstPartialContainedChild = null;
  if (!isInclusiveAncestor(originalStart.node, originalEnd.node)) {
    let candidate = domSymbolTree.firstChild(commonAncestor);
    while (!firstPartialContainedChild) {
      if (isPartiallyContained(candidate, range)) {
        firstPartialContainedChild = candidate;
      }

      candidate = domSymbolTree.nextSibling(candidate);
    }
  }

  let lastPartiallyContainedChild = null;
  if (!isInclusiveAncestor(originalEnd.node, originalStart.node)) {
    let candidate = domSymbolTree.lastChild(commonAncestor);
    while (!lastPartiallyContainedChild) {
      if (isPartiallyContained(candidate, range)) {
        lastPartiallyContainedChild = candidate;
      }

      candidate = domSymbolTree.previousSibling(candidate);
    }
  }

  const containedChildren = domSymbolTree.childrenToArray(commonAncestor)
    .filter(node => isContained(node, range));

  const hasDoctypeChildren = containedChildren.some(node => node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE);
  if (hasDoctypeChildren) {
    throw DOMException.create(range._globalObject, ["Invalid document type element.", "HierarchyRequestError"]);
  }

  let newNode, newOffset;
  if (isInclusiveAncestor(originalStart.node, originalEnd.node)) {
    newNode = originalStart.node;
    newOffset = originalStart.offset;
  } else {
    let referenceNode = originalStart.node;

    while (
      referenceNode &&
      !isInclusiveAncestor(domSymbolTree.parent(referenceNode), originalEnd.node)
    ) {
      referenceNode = domSymbolTree.parent(referenceNode);
    }

    newNode = domSymbolTree.parent(referenceNode);
    newOffset = domSymbolTree.index(referenceNode) + 1;
  }

  if (
    firstPartialContainedChild !== null &&
    (
      firstPartialContainedChild.nodeType === NODE_TYPE.TEXT_NODE ||
      firstPartialContainedChild.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      firstPartialContainedChild.nodeType === NODE_TYPE.COMMENT_NODE
    )
  ) {
    const cloned = clone(originalStart.node);
    cloned._data = cloned.substringData(originalStart.offset, nodeLength(originalStart.node) - originalStart.offset);

    fragment.appendChild(cloned);

    originalStart.node.replaceData(originalStart.offset, nodeLength(originalStart.node) - originalStart.offset, "");
  } else if (firstPartialContainedChild !== null) {
    const cloned = clone(firstPartialContainedChild);
    fragment.appendChild(cloned);

    const subrange = Range.createImpl(_globalObject, [], {
      start: { node: originalStart.node, offset: originalStart.offset },
      end: { node: firstPartialContainedChild, offset: nodeLength(firstPartialContainedChild) }
    });

    const subfragment = extractRange(subrange);
    cloned.appendChild(subfragment);
  }

  for (const containedChild of containedChildren) {
    fragment.appendChild(containedChild);
  }

  if (
    lastPartiallyContainedChild !== null &&
    (
      lastPartiallyContainedChild.nodeType === NODE_TYPE.TEXT_NODE ||
      lastPartiallyContainedChild.nodeType === NODE_TYPE.PROCESSING_INSTRUCTION_NODE ||
      lastPartiallyContainedChild.nodeType === NODE_TYPE.COMMENT_NODE
    )
  ) {
    const cloned = clone(originalEnd.node);
    cloned._data = cloned.substringData(0, originalEnd.offset);

    fragment.appendChild(cloned);

    originalEnd.node.replaceData(0, originalEnd.offset, "");
  } else if (lastPartiallyContainedChild !== null) {
    const cloned = clone(lastPartiallyContainedChild);
    fragment.appendChild(cloned);

    const subrange = Range.createImpl(_globalObject, [], {
      start: { node: lastPartiallyContainedChild, offset: 0 },
      end: { node: originalEnd.node, offset: originalEnd.offset }
    });

    const subfragment = extractRange(subrange);
    cloned.appendChild(subfragment);
  }

  range._setLiveRangeStart(newNode, newOffset);
  range._setLiveRangeEnd(newNode, newOffset);

  return fragment;
}

module.exports = {
  implementation: RangeImpl,

  setBoundaryPointStart,
  setBoundaryPointEnd
};
