"use strict";

const DOMException = require("../generated/DOMException");

const NODE_TYPE = require("../node-type");
const { nodeLength, nodeRoot } = require("../helpers/node");
const { domSymbolTree } = require("../helpers/internal-constants");
const { compareBoundaryPointsPosition } = require("../range/boundary-point");

const { setBoundaryPointStart, setBoundaryPointEnd } = require("../range/Range-impl");

const Range = require("../generated/Range");
const { implForWrapper } = require("../generated/utils");
const { fireAnEvent } = require("../helpers/events");

// https://w3c.github.io/selection-api/#dfn-direction
const SELECTION_DIRECTION = {
  FORWARDS: 1,
  BACKWARDS: -1,
  DIRECTIONLESS: 0
};

// https://w3c.github.io/selection-api/#dom-selection
class SelectionImpl {
  constructor(globalObject) {
    this._range = null;
    this._direction = SELECTION_DIRECTION.DIRECTIONLESS;

    this._globalObject = globalObject;
  }

  // https://w3c.github.io/selection-api/#dom-selection-anchornode
  get anchorNode() {
    const anchor = this._anchor;
    return anchor ? anchor.node : null;
  }

  // https://w3c.github.io/selection-api/#dom-selection-anchoroffset
  get anchorOffset() {
    const anchor = this._anchor;
    return anchor ? anchor.offset : 0;
  }

  // https://w3c.github.io/selection-api/#dom-selection-focusnode
  get focusNode() {
    const focus = this._focus;
    return focus ? focus.node : null;
  }

  // https://w3c.github.io/selection-api/#dom-selection-focusoffset
  get focusOffset() {
    const focus = this._focus;
    return focus ? focus.offset : 0;
  }

  // https://w3c.github.io/selection-api/#dom-selection-iscollapsed
  get isCollapsed() {
    return this._range === null || this._range.collapsed;
  }

  // https://w3c.github.io/selection-api/#dom-selection-rangecount
  get rangeCount() {
    return this._isEmpty() ? 0 : 1;
  }

  // https://w3c.github.io/selection-api/#dom-selection-type
  get type() {
    if (this._isEmpty()) {
      return "None";
    } else if (this._range.collapsed) {
      return "Caret";
    }

    return "Range";
  }

  // https://w3c.github.io/selection-api/#dom-selection-getrangeat
  getRangeAt(index) {
    if (index !== 0 || this._isEmpty()) {
      throw DOMException.create(this._globalObject, ["Invalid range index.", "IndexSizeError"]);
    }

    return this._range;
  }

  // https://w3c.github.io/selection-api/#dom-selection-addrange
  addRange(range) {
    if (range._root === implForWrapper(this._globalObject._document) && this.rangeCount === 0) {
      this._associateRange(range);
    }
  }

  // https://w3c.github.io/selection-api/#dom-selection-removerange
  removeRange(range) {
    if (range !== this._range) {
      throw DOMException.create(this._globalObject, ["Invalid range.", "NotFoundError"]);
    }

    this._associateRange(null);
  }

  // https://w3c.github.io/selection-api/#dom-selection-removeallranges
  removeAllRanges() {
    this._associateRange(null);
  }

  // https://w3c.github.io/selection-api/#dom-selection-empty
  empty() {
    this.removeAllRanges();
  }

  // https://w3c.github.io/selection-api/#dom-selection-collapse
  collapse(node, offset) {
    if (node === null) {
      this.removeAllRanges();
      return;
    }

    if (node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) {
      throw DOMException.create(this._globalObject, [
        "DocumentType Node can't be used as boundary point.",
        "InvalidNodeTypeError"
      ]);
    }

    if (offset > nodeLength(node)) {
      throw DOMException.create(this._globalObject, ["Invalid range index.", "IndexSizeError"]);
    }

    if (nodeRoot(node) !== implForWrapper(this._globalObject._document)) {
      return;
    }

    const newRange = Range.createImpl(this._globalObject, [], {
      start: { node, offset: 0 },
      end: { node, offset: 0 }
    });

    setBoundaryPointStart(newRange, node, offset);
    setBoundaryPointEnd(newRange, node, offset);

    this._associateRange(newRange);
  }

  // https://w3c.github.io/selection-api/#dom-selection-setposition
  setPosition(node, offset) {
    this.collapse(node, offset);
  }

  // https://w3c.github.io/selection-api/#dom-selection-collapsetostart
  collapseToStart() {
    if (this._isEmpty()) {
      throw DOMException.create(this._globalObject, ["There is no selection to collapse.", "InvalidStateError"]);
    }

    const { node, offset } = this._range._start;
    const newRange = Range.createImpl(this._globalObject, [], {
      start: { node, offset },
      end: { node, offset }
    });

    this._associateRange(newRange);
  }

  // https://w3c.github.io/selection-api/#dom-selection-collapsetoend
  collapseToEnd() {
    if (this._isEmpty()) {
      throw DOMException.create(this._globalObject, ["There is no selection to collapse.", "InvalidStateError"]);
    }

    const { node, offset } = this._range._end;
    const newRange = Range.createImpl(this._globalObject, [], {
      start: { node, offset },
      end: { node, offset }
    });

    this._associateRange(newRange);
  }

  // https://w3c.github.io/selection-api/#dom-selection-extend
  extend(node, offset) {
    if (nodeRoot(node) !== implForWrapper(this._globalObject._document)) {
      return;
    }

    if (this._isEmpty()) {
      throw DOMException.create(this._globalObject, ["There is no selection to extend.", "InvalidStateError"]);
    }

    const { _anchor: oldAnchor } = this;
    const newFocus = { node, offset };

    const newRange = Range.createImpl(this._globalObject, [], {
      start: { node, offset: 0 },
      end: { node, offset: 0 }
    });

    if (nodeRoot(node) !== this._range._root) {
      setBoundaryPointStart(newRange, newFocus.node, newFocus.offset);
      setBoundaryPointEnd(newRange, newFocus.node, newFocus.offset);
    } else if (compareBoundaryPointsPosition(oldAnchor, newFocus) <= 0) {
      setBoundaryPointStart(newRange, oldAnchor.node, oldAnchor.offset);
      setBoundaryPointEnd(newRange, newFocus.node, newFocus.offset);
    } else {
      setBoundaryPointStart(newRange, newFocus.node, newFocus.offset);
      setBoundaryPointEnd(newRange, oldAnchor.node, oldAnchor.offset);
    }

    this._associateRange(newRange);

    this._direction = compareBoundaryPointsPosition(newFocus, oldAnchor) === -1 ?
      SELECTION_DIRECTION.BACKWARDS :
      SELECTION_DIRECTION.FORWARDS;
  }

  // https://w3c.github.io/selection-api/#dom-selection-setbaseandextent
  setBaseAndExtent(anchorNode, anchorOffset, focusNode, focusOffset) {
    if (anchorOffset > nodeLength(anchorNode) || focusOffset > nodeLength(focusNode)) {
      throw DOMException.create(this._globalObject, ["Invalid anchor or focus offset.", "IndexSizeError"]);
    }

    const document = implForWrapper(this._globalObject._document);
    if (document !== nodeRoot(anchorNode) || document !== nodeRoot(focusNode)) {
      return;
    }

    const anchor = { node: anchorNode, offset: anchorOffset };
    const focus = { node: focusNode, offset: focusOffset };

    let newRange;
    if (compareBoundaryPointsPosition(anchor, focus) === -1) {
      newRange = Range.createImpl(this._globalObject, [], {
        start: { node: anchor.node, offset: anchor.offset },
        end: { node: focus.node, offset: focus.offset }
      });
    } else {
      newRange = Range.createImpl(this._globalObject, [], {
        start: { node: focus.node, offset: focus.offset },
        end: { node: anchor.node, offset: anchor.offset }
      });
    }

    this._associateRange(newRange);

    this._direction = compareBoundaryPointsPosition(focus, anchor) === -1 ?
      SELECTION_DIRECTION.BACKWARDS :
      SELECTION_DIRECTION.FORWARDS;
  }

  // https://w3c.github.io/selection-api/#dom-selection-selectallchildren
  selectAllChildren(node) {
    if (node.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE) {
      throw DOMException.create(this._globalObject, [
        "DocumentType Node can't be used as boundary point.",
        "InvalidNodeTypeError"
      ]);
    }

    const document = implForWrapper(this._globalObject._document);
    if (document !== nodeRoot(node)) {
      return;
    }

    const length = domSymbolTree.childrenCount(node);

    const newRange = Range.createImpl(this._globalObject, [], {
      start: { node, offset: 0 },
      end: { node, offset: 0 }
    });

    setBoundaryPointStart(newRange, node, 0);
    setBoundaryPointEnd(newRange, node, length);

    this._associateRange(newRange);
  }

  // https://w3c.github.io/selection-api/#dom-selection-deletefromdocument
  deleteFromDocument() {
    if (!this._isEmpty()) {
      this._range.deleteContents();
    }
  }

  // https://w3c.github.io/selection-api/#dom-selection-containsnode
  containsNode(node, allowPartialContainment) {
    if (this._isEmpty() || nodeRoot(node) !== implForWrapper(this._globalObject._document)) {
      return false;
    }

    const { _start, _end } = this._range;

    const startIsBeforeNode = compareBoundaryPointsPosition(_start, { node, offset: 0 }) === -1;
    const endIsAfterNode = compareBoundaryPointsPosition(_end, { node, offset: nodeLength(node) }) === 1;

    return allowPartialContainment ?
      startIsBeforeNode || endIsAfterNode :
      startIsBeforeNode && endIsAfterNode;
  }

  // https://w3c.github.io/selection-api/#dom-selection-stringifier
  toString() {
    return this._range ? this._range.toString() : "";
  }

  // https://w3c.github.io/selection-api/#dfn-empty
  _isEmpty() {
    return this._range === null;
  }

  // https://w3c.github.io/selection-api/#dfn-anchor
  get _anchor() {
    if (!this._range) {
      return null;
    }

    return this._direction === SELECTION_DIRECTION.FORWARDS ?
      this._range._start :
      this._range._end;
  }

  // https://w3c.github.io/selection-api/#dfn-focus
  get _focus() {
    if (!this._range) {
      return null;
    }

    return this._direction === SELECTION_DIRECTION.FORWARDS ?
      this._range._end :
      this._range._start;
  }

  _associateRange(newRange) {
    const didSelectionChange = this._range !== newRange &&
      (
        // Change from/to null selection
        newRange === null ||
        this._range === null ||
        // Change of selection range
        compareBoundaryPointsPosition(newRange._start, this._range._start) !== 0 ||
        compareBoundaryPointsPosition(newRange._end, this._range._end) !== 0
      );
    this._range = newRange;
    this._direction = newRange === null ? SELECTION_DIRECTION.DIRECTIONLESS : SELECTION_DIRECTION.FORWARDS;

    // https://w3c.github.io/selection-api/#selectionchange-event
    if (didSelectionChange) {
      // Fire the event asynchronously, as it's done in the browser
      const document = this._globalObject._document;
      setTimeout(() => {
        fireAnEvent("selectionchange", implForWrapper(document));
      }, 0);
    }
  }
}

module.exports = {
  implementation: SelectionImpl
};
