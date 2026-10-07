/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function getNodeColor(node) {
    return ((node.metadata & 1 /* Constants.ColorMask */) >>> 0 /* Constants.ColorOffset */);
}
function setNodeColor(node, color) {
    node.metadata = ((node.metadata & 254 /* Constants.ColorMaskInverse */) | (color << 0 /* Constants.ColorOffset */));
}
function getNodeIsVisited(node) {
    return ((node.metadata & 2 /* Constants.IsVisitedMask */) >>> 1 /* Constants.IsVisitedOffset */) === 1;
}
function setNodeIsVisited(node, value) {
    node.metadata = ((node.metadata & 253 /* Constants.IsVisitedMaskInverse */) | ((value ? 1 : 0) << 1 /* Constants.IsVisitedOffset */));
}
function getNodeIsForValidation(node) {
    return ((node.metadata & 4 /* Constants.IsForValidationMask */) >>> 2 /* Constants.IsForValidationOffset */) === 1;
}
function setNodeIsForValidation(node, value) {
    node.metadata = ((node.metadata & 251 /* Constants.IsForValidationMaskInverse */) | ((value ? 1 : 0) << 2 /* Constants.IsForValidationOffset */));
}
function getNodeIsInGlyphMargin(node) {
    return ((node.metadata & 64 /* Constants.IsMarginMask */) >>> 6 /* Constants.IsMarginOffset */) === 1;
}
function setNodeIsInGlyphMargin(node, value) {
    node.metadata = ((node.metadata & 191 /* Constants.IsMarginMaskInverse */) | ((value ? 1 : 0) << 6 /* Constants.IsMarginOffset */));
}
function getNodeAffectsFont(node) {
    return ((node.metadata & 128 /* Constants.AffectsFontMask */) >>> 7 /* Constants.AffectsFontOffset */) === 1;
}
function setNodeAffectsFont(node, value) {
    node.metadata = ((node.metadata & 127 /* Constants.AffectsFontMaskInverse */) | ((value ? 1 : 0) << 7 /* Constants.AffectsFontOffset */));
}
function getNodeStickiness(node) {
    return ((node.metadata & 24 /* Constants.StickinessMask */) >>> 3 /* Constants.StickinessOffset */);
}
function _setNodeStickiness(node, stickiness) {
    node.metadata = ((node.metadata & 231 /* Constants.StickinessMaskInverse */) | (stickiness << 3 /* Constants.StickinessOffset */));
}
function getCollapseOnReplaceEdit(node) {
    return ((node.metadata & 32 /* Constants.CollapseOnReplaceEditMask */) >>> 5 /* Constants.CollapseOnReplaceEditOffset */) === 1;
}
function setCollapseOnReplaceEdit(node, value) {
    node.metadata = ((node.metadata & 223 /* Constants.CollapseOnReplaceEditMaskInverse */) | ((value ? 1 : 0) << 5 /* Constants.CollapseOnReplaceEditOffset */));
}
class IntervalNode {
    constructor(id, start, end) {
        this.metadata = 0;
        this.parent = this;
        this.left = this;
        this.right = this;
        setNodeColor(this, 1 /* NodeColor.Red */);
        this.start = start;
        this.end = end;
        // FORCE_OVERFLOWING_TEST: this.delta = start;
        this.delta = 0;
        this.maxEnd = end;
        this.id = id;
        this.ownerId = 0;
        this.options = null;
        setNodeIsForValidation(this, false);
        setNodeIsInGlyphMargin(this, false);
        _setNodeStickiness(this, 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */);
        setCollapseOnReplaceEdit(this, false);
        setNodeAffectsFont(this, false);
        this.cachedVersionId = 0;
        this.cachedAbsoluteStart = start;
        this.cachedAbsoluteEnd = end;
        this.range = null;
        setNodeIsVisited(this, false);
    }
    reset(versionId, start, end, range) {
        this.start = start;
        this.end = end;
        this.maxEnd = end;
        this.cachedVersionId = versionId;
        this.cachedAbsoluteStart = start;
        this.cachedAbsoluteEnd = end;
        this.range = range;
    }
    setOptions(options) {
        this.options = options;
        const className = this.options.className;
        setNodeIsForValidation(this, (className === "squiggly-error" /* ClassName.EditorErrorDecoration */
            || className === "squiggly-warning" /* ClassName.EditorWarningDecoration */
            || className === "squiggly-info" /* ClassName.EditorInfoDecoration */));
        setNodeIsInGlyphMargin(this, this.options.glyphMarginClassName !== null);
        _setNodeStickiness(this, this.options.stickiness);
        setCollapseOnReplaceEdit(this, this.options.collapseOnReplaceEdit);
        setNodeAffectsFont(this, this.options.affectsFont ?? false);
    }
    setCachedOffsets(absoluteStart, absoluteEnd, cachedVersionId) {
        if (this.cachedVersionId !== cachedVersionId) {
            this.range = null;
        }
        this.cachedVersionId = cachedVersionId;
        this.cachedAbsoluteStart = absoluteStart;
        this.cachedAbsoluteEnd = absoluteEnd;
    }
    detach() {
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}
const SENTINEL = new IntervalNode(null, 0, 0);
SENTINEL.parent = SENTINEL;
SENTINEL.left = SENTINEL;
SENTINEL.right = SENTINEL;
setNodeColor(SENTINEL, 0 /* NodeColor.Black */);
class IntervalTree {
    constructor() {
        this.root = SENTINEL;
        this.requestNormalizeDelta = false;
    }
    intervalSearch(start, end, filterOwnerId, filterOutValidation, filterFontDecorations, cachedVersionId, onlyMarginDecorations) {
        if (this.root === SENTINEL) {
            return [];
        }
        return intervalSearch(this, start, end, filterOwnerId, filterOutValidation, filterFontDecorations, cachedVersionId, onlyMarginDecorations);
    }
    search(filterOwnerId, filterOutValidation, filterFontDecorations, cachedVersionId, onlyMarginDecorations) {
        if (this.root === SENTINEL) {
            return [];
        }
        return search(this, filterOwnerId, filterOutValidation, filterFontDecorations, cachedVersionId, onlyMarginDecorations);
    }
    /**
     * Will not set `cachedAbsoluteStart` nor `cachedAbsoluteEnd` on the returned nodes!
     */
    collectNodesFromOwner(ownerId) {
        return collectNodesFromOwner(this, ownerId);
    }
    /**
     * Will not set `cachedAbsoluteStart` nor `cachedAbsoluteEnd` on the returned nodes!
     */
    collectNodesPostOrder() {
        return collectNodesPostOrder(this);
    }
    insert(node) {
        rbTreeInsert(this, node);
        this._normalizeDeltaIfNecessary();
    }
    delete(node) {
        rbTreeDelete(this, node);
        this._normalizeDeltaIfNecessary();
    }
    resolveNode(node, cachedVersionId) {
        const initialNode = node;
        let delta = 0;
        while (node !== this.root) {
            if (node === node.parent.right) {
                delta += node.parent.delta;
            }
            node = node.parent;
        }
        const nodeStart = initialNode.start + delta;
        const nodeEnd = initialNode.end + delta;
        initialNode.setCachedOffsets(nodeStart, nodeEnd, cachedVersionId);
    }
    acceptReplace(offset, length, textLength, forceMoveMarkers) {
        // Our strategy is to remove all directly impacted nodes, and then add them back to the tree.
        // (1) collect all nodes that are intersecting this edit as nodes of interest
        const nodesOfInterest = searchForEditing(this, offset, offset + length);
        // (2) remove all nodes that are intersecting this edit
        for (let i = 0, len = nodesOfInterest.length; i < len; i++) {
            const node = nodesOfInterest[i];
            rbTreeDelete(this, node);
        }
        this._normalizeDeltaIfNecessary();
        // (3) edit all tree nodes except the nodes of interest
        noOverlapReplace(this, offset, offset + length, textLength);
        this._normalizeDeltaIfNecessary();
        // (4) edit the nodes of interest and insert them back in the tree
        for (let i = 0, len = nodesOfInterest.length; i < len; i++) {
            const node = nodesOfInterest[i];
            node.start = node.cachedAbsoluteStart;
            node.end = node.cachedAbsoluteEnd;
            nodeAcceptEdit(node, offset, (offset + length), textLength, forceMoveMarkers);
            node.maxEnd = node.end;
            rbTreeInsert(this, node);
        }
        this._normalizeDeltaIfNecessary();
    }
    _normalizeDeltaIfNecessary() {
        if (!this.requestNormalizeDelta) {
            return;
        }
        this.requestNormalizeDelta = false;
        normalizeDelta(this);
    }
}
//#region Delta Normalization
function normalizeDelta(T) {
    let node = T.root;
    let delta = 0;
    while (node !== SENTINEL) {
        if (node.left !== SENTINEL && !getNodeIsVisited(node.left)) {
            // go left
            node = node.left;
            continue;
        }
        if (node.right !== SENTINEL && !getNodeIsVisited(node.right)) {
            // go right
            delta += node.delta;
            node = node.right;
            continue;
        }
        // handle current node
        node.start = delta + node.start;
        node.end = delta + node.end;
        node.delta = 0;
        recomputeMaxEnd(node);
        setNodeIsVisited(node, true);
        // going up from this node
        setNodeIsVisited(node.left, false);
        setNodeIsVisited(node.right, false);
        if (node === node.parent.right) {
            delta -= node.parent.delta;
        }
        node = node.parent;
    }
    setNodeIsVisited(T.root, false);
}
function adjustMarkerBeforeColumn(markerOffset, markerStickToPreviousCharacter, checkOffset, moveSemantics) {
    if (markerOffset < checkOffset) {
        return true;
    }
    if (markerOffset > checkOffset) {
        return false;
    }
    if (moveSemantics === 1 /* MarkerMoveSemantics.ForceMove */) {
        return false;
    }
    if (moveSemantics === 2 /* MarkerMoveSemantics.ForceStay */) {
        return true;
    }
    return markerStickToPreviousCharacter;
}
/**
 * This is a lot more complicated than strictly necessary to maintain the same behaviour
 * as when decorations were implemented using two markers.
 */
function nodeAcceptEdit(node, start, end, textLength, forceMoveMarkers) {
    const nodeStickiness = getNodeStickiness(node);
    const startStickToPreviousCharacter = (nodeStickiness === 0 /* TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges */
        || nodeStickiness === 2 /* TrackedRangeStickiness.GrowsOnlyWhenTypingBefore */);
    const endStickToPreviousCharacter = (nodeStickiness === 1 /* TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges */
        || nodeStickiness === 2 /* TrackedRangeStickiness.GrowsOnlyWhenTypingBefore */);
    const deletingCnt = (end - start);
    const insertingCnt = textLength;
    const commonLength = Math.min(deletingCnt, insertingCnt);
    const nodeStart = node.start;
    let startDone = false;
    const nodeEnd = node.end;
    let endDone = false;
    if (start <= nodeStart && nodeEnd <= end && getCollapseOnReplaceEdit(node)) {
        // This edit encompasses the entire decoration range
        // and the decoration has asked to become collapsed
        node.start = start;
        startDone = true;
        node.end = start;
        endDone = true;
    }
    {
        const moveSemantics = forceMoveMarkers ? 1 /* MarkerMoveSemantics.ForceMove */ : (deletingCnt > 0 ? 2 /* MarkerMoveSemantics.ForceStay */ : 0 /* MarkerMoveSemantics.MarkerDefined */);
        if (!startDone && adjustMarkerBeforeColumn(nodeStart, startStickToPreviousCharacter, start, moveSemantics)) {
            startDone = true;
        }
        if (!endDone && adjustMarkerBeforeColumn(nodeEnd, endStickToPreviousCharacter, start, moveSemantics)) {
            endDone = true;
        }
    }
    if (commonLength > 0 && !forceMoveMarkers) {
        const moveSemantics = (deletingCnt > insertingCnt ? 2 /* MarkerMoveSemantics.ForceStay */ : 0 /* MarkerMoveSemantics.MarkerDefined */);
        if (!startDone && adjustMarkerBeforeColumn(nodeStart, startStickToPreviousCharacter, start + commonLength, moveSemantics)) {
            startDone = true;
        }
        if (!endDone && adjustMarkerBeforeColumn(nodeEnd, endStickToPreviousCharacter, start + commonLength, moveSemantics)) {
            endDone = true;
        }
    }
    {
        const moveSemantics = forceMoveMarkers ? 1 /* MarkerMoveSemantics.ForceMove */ : 0 /* MarkerMoveSemantics.MarkerDefined */;
        if (!startDone && adjustMarkerBeforeColumn(nodeStart, startStickToPreviousCharacter, end, moveSemantics)) {
            node.start = start + insertingCnt;
            startDone = true;
        }
        if (!endDone && adjustMarkerBeforeColumn(nodeEnd, endStickToPreviousCharacter, end, moveSemantics)) {
            node.end = start + insertingCnt;
            endDone = true;
        }
    }
    // Finish
    const deltaColumn = (insertingCnt - deletingCnt);
    if (!startDone) {
        node.start = Math.max(0, nodeStart + deltaColumn);
    }
    if (!endDone) {
        node.end = Math.max(0, nodeEnd + deltaColumn);
    }
    if (node.start > node.end) {
        node.end = node.start;
    }
}
function searchForEditing(T, start, end) {
    // https://en.wikipedia.org/wiki/Interval_tree#Augmented_tree
    // Now, it is known that two intervals A and B overlap only when both
    // A.low <= B.high and A.high >= B.low. When searching the trees for
    // nodes overlapping with a given interval, you can immediately skip:
    //  a) all nodes to the right of nodes whose low value is past the end of the given interval.
    //  b) all nodes that have their maximum 'high' value below the start of the given interval.
    let node = T.root;
    let delta = 0;
    let nodeMaxEnd = 0;
    let nodeStart = 0;
    let nodeEnd = 0;
    const result = [];
    let resultLen = 0;
    while (node !== SENTINEL) {
        if (getNodeIsVisited(node)) {
            // going up from this node
            setNodeIsVisited(node.left, false);
            setNodeIsVisited(node.right, false);
            if (node === node.parent.right) {
                delta -= node.parent.delta;
            }
            node = node.parent;
            continue;
        }
        if (!getNodeIsVisited(node.left)) {
            // first time seeing this node
            nodeMaxEnd = delta + node.maxEnd;
            if (nodeMaxEnd < start) {
                // cover case b) from above
                // there is no need to search this node or its children
                setNodeIsVisited(node, true);
                continue;
            }
            if (node.left !== SENTINEL) {
                // go left
                node = node.left;
                continue;
            }
        }
        // handle current node
        nodeStart = delta + node.start;
        if (nodeStart > end) {
            // cover case a) from above
            // there is no need to search this node or its right subtree
            setNodeIsVisited(node, true);
            continue;
        }
        nodeEnd = delta + node.end;
        if (nodeEnd >= start) {
            node.setCachedOffsets(nodeStart, nodeEnd, 0);
            result[resultLen++] = node;
        }
        setNodeIsVisited(node, true);
        if (node.right !== SENTINEL && !getNodeIsVisited(node.right)) {
            // go right
            delta += node.delta;
            node = node.right;
            continue;
        }
    }
    setNodeIsVisited(T.root, false);
    return result;
}
function noOverlapReplace(T, start, end, textLength) {
    // https://en.wikipedia.org/wiki/Interval_tree#Augmented_tree
    // Now, it is known that two intervals A and B overlap only when both
    // A.low <= B.high and A.high >= B.low. When searching the trees for
    // nodes overlapping with a given interval, you can immediately skip:
    //  a) all nodes to the right of nodes whose low value is past the end of the given interval.
    //  b) all nodes that have their maximum 'high' value below the start of the given interval.
    let node = T.root;
    let delta = 0;
    let nodeMaxEnd = 0;
    let nodeStart = 0;
    const editDelta = (textLength - (end - start));
    while (node !== SENTINEL) {
        if (getNodeIsVisited(node)) {
            // going up from this node
            setNodeIsVisited(node.left, false);
            setNodeIsVisited(node.right, false);
            if (node === node.parent.right) {
                delta -= node.parent.delta;
            }
            recomputeMaxEnd(node);
            node = node.parent;
            continue;
        }
        if (!getNodeIsVisited(node.left)) {
            // first time seeing this node
            nodeMaxEnd = delta + node.maxEnd;
            if (nodeMaxEnd < start) {
                // cover case b) from above
                // there is no need to search this node or its children
                setNodeIsVisited(node, true);
                continue;
            }
            if (node.left !== SENTINEL) {
                // go left
                node = node.left;
                continue;
            }
        }
        // handle current node
        nodeStart = delta + node.start;
        if (nodeStart > end) {
            node.start += editDelta;
            node.end += editDelta;
            node.delta += editDelta;
            if (node.delta < -1073741824 /* Constants.MIN_SAFE_DELTA */ || node.delta > 1073741824 /* Constants.MAX_SAFE_DELTA */) {
                T.requestNormalizeDelta = true;
            }
            // cover case a) from above
            // there is no need to search this node or its right subtree
            setNodeIsVisited(node, true);
            continue;
        }
        setNodeIsVisited(node, true);
        if (node.right !== SENTINEL && !getNodeIsVisited(node.right)) {
            // go right
            delta += node.delta;
            node = node.right;
            continue;
        }
    }
    setNodeIsVisited(T.root, false);
}
//#endregion
//#region Searching
function collectNodesFromOwner(T, ownerId) {
    let node = T.root;
    const result = [];
    let resultLen = 0;
    while (node !== SENTINEL) {
        if (getNodeIsVisited(node)) {
            // going up from this node
            setNodeIsVisited(node.left, false);
            setNodeIsVisited(node.right, false);
            node = node.parent;
            continue;
        }
        if (node.left !== SENTINEL && !getNodeIsVisited(node.left)) {
            // go left
            node = node.left;
            continue;
        }
        // handle current node
        if (node.ownerId === ownerId) {
            result[resultLen++] = node;
        }
        setNodeIsVisited(node, true);
        if (node.right !== SENTINEL && !getNodeIsVisited(node.right)) {
            // go right
            node = node.right;
            continue;
        }
    }
    setNodeIsVisited(T.root, false);
    return result;
}
function collectNodesPostOrder(T) {
    let node = T.root;
    const result = [];
    let resultLen = 0;
    while (node !== SENTINEL) {
        if (getNodeIsVisited(node)) {
            // going up from this node
            setNodeIsVisited(node.left, false);
            setNodeIsVisited(node.right, false);
            node = node.parent;
            continue;
        }
        if (node.left !== SENTINEL && !getNodeIsVisited(node.left)) {
            // go left
            node = node.left;
            continue;
        }
        if (node.right !== SENTINEL && !getNodeIsVisited(node.right)) {
            // go right
            node = node.right;
            continue;
        }
        // handle current node
        result[resultLen++] = node;
        setNodeIsVisited(node, true);
    }
    setNodeIsVisited(T.root, false);
    return result;
}
function search(T, filterOwnerId, filterOutValidation, filterFontDecorations, cachedVersionId, onlyMarginDecorations) {
    let node = T.root;
    let delta = 0;
    let nodeStart = 0;
    let nodeEnd = 0;
    const result = [];
    let resultLen = 0;
    while (node !== SENTINEL) {
        if (getNodeIsVisited(node)) {
            // going up from this node
            setNodeIsVisited(node.left, false);
            setNodeIsVisited(node.right, false);
            if (node === node.parent.right) {
                delta -= node.parent.delta;
            }
            node = node.parent;
            continue;
        }
        if (node.left !== SENTINEL && !getNodeIsVisited(node.left)) {
            // go left
            node = node.left;
            continue;
        }
        // handle current node
        nodeStart = delta + node.start;
        nodeEnd = delta + node.end;
        node.setCachedOffsets(nodeStart, nodeEnd, cachedVersionId);
        let include = true;
        if (filterOwnerId && node.ownerId && node.ownerId !== filterOwnerId) {
            include = false;
        }
        if (filterOutValidation && getNodeIsForValidation(node)) {
            include = false;
        }
        if (filterFontDecorations && getNodeAffectsFont(node)) {
            include = false;
        }
        if (onlyMarginDecorations && !getNodeIsInGlyphMargin(node)) {
            include = false;
        }
        if (include) {
            result[resultLen++] = node;
        }
        setNodeIsVisited(node, true);
        if (node.right !== SENTINEL && !getNodeIsVisited(node.right)) {
            // go right
            delta += node.delta;
            node = node.right;
            continue;
        }
    }
    setNodeIsVisited(T.root, false);
    return result;
}
function intervalSearch(T, intervalStart, intervalEnd, filterOwnerId, filterOutValidation, filterFontDecorations, cachedVersionId, onlyMarginDecorations) {
    // https://en.wikipedia.org/wiki/Interval_tree#Augmented_tree
    // Now, it is known that two intervals A and B overlap only when both
    // A.low <= B.high and A.high >= B.low. When searching the trees for
    // nodes overlapping with a given interval, you can immediately skip:
    //  a) all nodes to the right of nodes whose low value is past the end of the given interval.
    //  b) all nodes that have their maximum 'high' value below the start of the given interval.
    let node = T.root;
    let delta = 0;
    let nodeMaxEnd = 0;
    let nodeStart = 0;
    let nodeEnd = 0;
    const result = [];
    let resultLen = 0;
    while (node !== SENTINEL) {
        if (getNodeIsVisited(node)) {
            // going up from this node
            setNodeIsVisited(node.left, false);
            setNodeIsVisited(node.right, false);
            if (node === node.parent.right) {
                delta -= node.parent.delta;
            }
            node = node.parent;
            continue;
        }
        if (!getNodeIsVisited(node.left)) {
            // first time seeing this node
            nodeMaxEnd = delta + node.maxEnd;
            if (nodeMaxEnd < intervalStart) {
                // cover case b) from above
                // there is no need to search this node or its children
                setNodeIsVisited(node, true);
                continue;
            }
            if (node.left !== SENTINEL) {
                // go left
                node = node.left;
                continue;
            }
        }
        // handle current node
        nodeStart = delta + node.start;
        if (nodeStart > intervalEnd) {
            // cover case a) from above
            // there is no need to search this node or its right subtree
            setNodeIsVisited(node, true);
            continue;
        }
        nodeEnd = delta + node.end;
        if (nodeEnd >= intervalStart) {
            // There is overlap
            node.setCachedOffsets(nodeStart, nodeEnd, cachedVersionId);
            let include = true;
            if (filterOwnerId && node.ownerId && node.ownerId !== filterOwnerId) {
                include = false;
            }
            if (filterOutValidation && getNodeIsForValidation(node)) {
                include = false;
            }
            if (filterFontDecorations && getNodeAffectsFont(node)) {
                include = false;
            }
            if (onlyMarginDecorations && !getNodeIsInGlyphMargin(node)) {
                include = false;
            }
            if (include) {
                result[resultLen++] = node;
            }
        }
        setNodeIsVisited(node, true);
        if (node.right !== SENTINEL && !getNodeIsVisited(node.right)) {
            // go right
            delta += node.delta;
            node = node.right;
            continue;
        }
    }
    setNodeIsVisited(T.root, false);
    return result;
}
//#endregion
//#region Insertion
function rbTreeInsert(T, newNode) {
    if (T.root === SENTINEL) {
        newNode.parent = SENTINEL;
        newNode.left = SENTINEL;
        newNode.right = SENTINEL;
        setNodeColor(newNode, 0 /* NodeColor.Black */);
        T.root = newNode;
        return T.root;
    }
    treeInsert(T, newNode);
    recomputeMaxEndWalkToRoot(newNode.parent);
    // repair tree
    let x = newNode;
    while (x !== T.root && getNodeColor(x.parent) === 1 /* NodeColor.Red */) {
        if (x.parent === x.parent.parent.left) {
            const y = x.parent.parent.right;
            if (getNodeColor(y) === 1 /* NodeColor.Red */) {
                setNodeColor(x.parent, 0 /* NodeColor.Black */);
                setNodeColor(y, 0 /* NodeColor.Black */);
                setNodeColor(x.parent.parent, 1 /* NodeColor.Red */);
                x = x.parent.parent;
            }
            else {
                if (x === x.parent.right) {
                    x = x.parent;
                    leftRotate(T, x);
                }
                setNodeColor(x.parent, 0 /* NodeColor.Black */);
                setNodeColor(x.parent.parent, 1 /* NodeColor.Red */);
                rightRotate(T, x.parent.parent);
            }
        }
        else {
            const y = x.parent.parent.left;
            if (getNodeColor(y) === 1 /* NodeColor.Red */) {
                setNodeColor(x.parent, 0 /* NodeColor.Black */);
                setNodeColor(y, 0 /* NodeColor.Black */);
                setNodeColor(x.parent.parent, 1 /* NodeColor.Red */);
                x = x.parent.parent;
            }
            else {
                if (x === x.parent.left) {
                    x = x.parent;
                    rightRotate(T, x);
                }
                setNodeColor(x.parent, 0 /* NodeColor.Black */);
                setNodeColor(x.parent.parent, 1 /* NodeColor.Red */);
                leftRotate(T, x.parent.parent);
            }
        }
    }
    setNodeColor(T.root, 0 /* NodeColor.Black */);
    return newNode;
}
function treeInsert(T, z) {
    let delta = 0;
    let x = T.root;
    const zAbsoluteStart = z.start;
    const zAbsoluteEnd = z.end;
    while (true) {
        const cmp = intervalCompare(zAbsoluteStart, zAbsoluteEnd, x.start + delta, x.end + delta);
        if (cmp < 0) {
            // this node should be inserted to the left
            // => it is not affected by the node's delta
            if (x.left === SENTINEL) {
                z.start -= delta;
                z.end -= delta;
                z.maxEnd -= delta;
                x.left = z;
                break;
            }
            else {
                x = x.left;
            }
        }
        else {
            // this node should be inserted to the right
            // => it is not affected by the node's delta
            if (x.right === SENTINEL) {
                z.start -= (delta + x.delta);
                z.end -= (delta + x.delta);
                z.maxEnd -= (delta + x.delta);
                x.right = z;
                break;
            }
            else {
                delta += x.delta;
                x = x.right;
            }
        }
    }
    z.parent = x;
    z.left = SENTINEL;
    z.right = SENTINEL;
    setNodeColor(z, 1 /* NodeColor.Red */);
}
//#endregion
//#region Deletion
function rbTreeDelete(T, z) {
    let x;
    let y;
    // RB-DELETE except we don't swap z and y in case c)
    // i.e. we always delete what's pointed at by z.
    if (z.left === SENTINEL) {
        x = z.right;
        y = z;
        // x's delta is no longer influenced by z's delta
        x.delta += z.delta;
        if (x.delta < -1073741824 /* Constants.MIN_SAFE_DELTA */ || x.delta > 1073741824 /* Constants.MAX_SAFE_DELTA */) {
            T.requestNormalizeDelta = true;
        }
        x.start += z.delta;
        x.end += z.delta;
    }
    else if (z.right === SENTINEL) {
        x = z.left;
        y = z;
    }
    else {
        y = leftest(z.right);
        x = y.right;
        // y's delta is no longer influenced by z's delta,
        // but we don't want to walk the entire right-hand-side subtree of x.
        // we therefore maintain z's delta in y, and adjust only x
        x.start += y.delta;
        x.end += y.delta;
        x.delta += y.delta;
        if (x.delta < -1073741824 /* Constants.MIN_SAFE_DELTA */ || x.delta > 1073741824 /* Constants.MAX_SAFE_DELTA */) {
            T.requestNormalizeDelta = true;
        }
        y.start += z.delta;
        y.end += z.delta;
        y.delta = z.delta;
        if (y.delta < -1073741824 /* Constants.MIN_SAFE_DELTA */ || y.delta > 1073741824 /* Constants.MAX_SAFE_DELTA */) {
            T.requestNormalizeDelta = true;
        }
    }
    if (y === T.root) {
        T.root = x;
        setNodeColor(x, 0 /* NodeColor.Black */);
        z.detach();
        resetSentinel();
        recomputeMaxEnd(x);
        T.root.parent = SENTINEL;
        return;
    }
    const yWasRed = (getNodeColor(y) === 1 /* NodeColor.Red */);
    if (y === y.parent.left) {
        y.parent.left = x;
    }
    else {
        y.parent.right = x;
    }
    if (y === z) {
        x.parent = y.parent;
    }
    else {
        if (y.parent === z) {
            x.parent = y;
        }
        else {
            x.parent = y.parent;
        }
        y.left = z.left;
        y.right = z.right;
        y.parent = z.parent;
        setNodeColor(y, getNodeColor(z));
        if (z === T.root) {
            T.root = y;
        }
        else {
            if (z === z.parent.left) {
                z.parent.left = y;
            }
            else {
                z.parent.right = y;
            }
        }
        if (y.left !== SENTINEL) {
            y.left.parent = y;
        }
        if (y.right !== SENTINEL) {
            y.right.parent = y;
        }
    }
    z.detach();
    if (yWasRed) {
        recomputeMaxEndWalkToRoot(x.parent);
        if (y !== z) {
            recomputeMaxEndWalkToRoot(y);
            recomputeMaxEndWalkToRoot(y.parent);
        }
        resetSentinel();
        return;
    }
    recomputeMaxEndWalkToRoot(x);
    recomputeMaxEndWalkToRoot(x.parent);
    if (y !== z) {
        recomputeMaxEndWalkToRoot(y);
        recomputeMaxEndWalkToRoot(y.parent);
    }
    // RB-DELETE-FIXUP
    let w;
    while (x !== T.root && getNodeColor(x) === 0 /* NodeColor.Black */) {
        if (x === x.parent.left) {
            w = x.parent.right;
            if (getNodeColor(w) === 1 /* NodeColor.Red */) {
                setNodeColor(w, 0 /* NodeColor.Black */);
                setNodeColor(x.parent, 1 /* NodeColor.Red */);
                leftRotate(T, x.parent);
                w = x.parent.right;
            }
            if (getNodeColor(w.left) === 0 /* NodeColor.Black */ && getNodeColor(w.right) === 0 /* NodeColor.Black */) {
                setNodeColor(w, 1 /* NodeColor.Red */);
                x = x.parent;
            }
            else {
                if (getNodeColor(w.right) === 0 /* NodeColor.Black */) {
                    setNodeColor(w.left, 0 /* NodeColor.Black */);
                    setNodeColor(w, 1 /* NodeColor.Red */);
                    rightRotate(T, w);
                    w = x.parent.right;
                }
                setNodeColor(w, getNodeColor(x.parent));
                setNodeColor(x.parent, 0 /* NodeColor.Black */);
                setNodeColor(w.right, 0 /* NodeColor.Black */);
                leftRotate(T, x.parent);
                x = T.root;
            }
        }
        else {
            w = x.parent.left;
            if (getNodeColor(w) === 1 /* NodeColor.Red */) {
                setNodeColor(w, 0 /* NodeColor.Black */);
                setNodeColor(x.parent, 1 /* NodeColor.Red */);
                rightRotate(T, x.parent);
                w = x.parent.left;
            }
            if (getNodeColor(w.left) === 0 /* NodeColor.Black */ && getNodeColor(w.right) === 0 /* NodeColor.Black */) {
                setNodeColor(w, 1 /* NodeColor.Red */);
                x = x.parent;
            }
            else {
                if (getNodeColor(w.left) === 0 /* NodeColor.Black */) {
                    setNodeColor(w.right, 0 /* NodeColor.Black */);
                    setNodeColor(w, 1 /* NodeColor.Red */);
                    leftRotate(T, w);
                    w = x.parent.left;
                }
                setNodeColor(w, getNodeColor(x.parent));
                setNodeColor(x.parent, 0 /* NodeColor.Black */);
                setNodeColor(w.left, 0 /* NodeColor.Black */);
                rightRotate(T, x.parent);
                x = T.root;
            }
        }
    }
    setNodeColor(x, 0 /* NodeColor.Black */);
    resetSentinel();
}
function leftest(node) {
    while (node.left !== SENTINEL) {
        node = node.left;
    }
    return node;
}
function resetSentinel() {
    SENTINEL.parent = SENTINEL;
    SENTINEL.delta = 0; // optional
    SENTINEL.start = 0; // optional
    SENTINEL.end = 0; // optional
}
//#endregion
//#region Rotations
function leftRotate(T, x) {
    const y = x.right; // set y.
    y.delta += x.delta; // y's delta is no longer influenced by x's delta
    if (y.delta < -1073741824 /* Constants.MIN_SAFE_DELTA */ || y.delta > 1073741824 /* Constants.MAX_SAFE_DELTA */) {
        T.requestNormalizeDelta = true;
    }
    y.start += x.delta;
    y.end += x.delta;
    x.right = y.left; // turn y's left subtree into x's right subtree.
    if (y.left !== SENTINEL) {
        y.left.parent = x;
    }
    y.parent = x.parent; // link x's parent to y.
    if (x.parent === SENTINEL) {
        T.root = y;
    }
    else if (x === x.parent.left) {
        x.parent.left = y;
    }
    else {
        x.parent.right = y;
    }
    y.left = x; // put x on y's left.
    x.parent = y;
    recomputeMaxEnd(x);
    recomputeMaxEnd(y);
}
function rightRotate(T, y) {
    const x = y.left;
    y.delta -= x.delta;
    if (y.delta < -1073741824 /* Constants.MIN_SAFE_DELTA */ || y.delta > 1073741824 /* Constants.MAX_SAFE_DELTA */) {
        T.requestNormalizeDelta = true;
    }
    y.start -= x.delta;
    y.end -= x.delta;
    y.left = x.right;
    if (x.right !== SENTINEL) {
        x.right.parent = y;
    }
    x.parent = y.parent;
    if (y.parent === SENTINEL) {
        T.root = x;
    }
    else if (y === y.parent.right) {
        y.parent.right = x;
    }
    else {
        y.parent.left = x;
    }
    x.right = y;
    y.parent = x;
    recomputeMaxEnd(y);
    recomputeMaxEnd(x);
}
//#endregion
//#region max end computation
function computeMaxEnd(node) {
    let maxEnd = node.end;
    if (node.left !== SENTINEL) {
        const leftMaxEnd = node.left.maxEnd;
        if (leftMaxEnd > maxEnd) {
            maxEnd = leftMaxEnd;
        }
    }
    if (node.right !== SENTINEL) {
        const rightMaxEnd = node.right.maxEnd + node.delta;
        if (rightMaxEnd > maxEnd) {
            maxEnd = rightMaxEnd;
        }
    }
    return maxEnd;
}
function recomputeMaxEnd(node) {
    node.maxEnd = computeMaxEnd(node);
}
function recomputeMaxEndWalkToRoot(node) {
    while (node !== SENTINEL) {
        const maxEnd = computeMaxEnd(node);
        if (node.maxEnd === maxEnd) {
            // no need to go further
            return;
        }
        node.maxEnd = maxEnd;
        node = node.parent;
    }
}
//#endregion
//#region utils
function intervalCompare(aStart, aEnd, bStart, bEnd) {
    if (aStart === bStart) {
        return aEnd - bEnd;
    }
    return aStart - bStart;
}
//#endregion

export { IntervalNode, IntervalTree, SENTINEL, getNodeColor, intervalCompare, nodeAcceptEdit, recomputeMaxEnd };
