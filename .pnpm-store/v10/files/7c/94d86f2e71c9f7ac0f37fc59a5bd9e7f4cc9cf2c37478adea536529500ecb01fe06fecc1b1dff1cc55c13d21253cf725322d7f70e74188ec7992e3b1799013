import { TreeError } from './tree.js';
import { splice, tail } from '../../../common/arrays.js';
import { Delayer } from '../../../common/async.js';
import { MicrotaskDelay } from '../../../common/symbols.js';
import { LcsDiff } from '../../../common/diff/diff.js';
import { EventBufferer, Emitter } from '../../../common/event.js';
import { Iterable } from '../../../common/iterator.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function isFilterResult(obj) {
    return !!obj && obj.visibility !== undefined;
}
function getVisibleState(visibility) {
    switch (visibility) {
        case true: return 1 /* TreeVisibility.Visible */;
        case false: return 0 /* TreeVisibility.Hidden */;
        default: return visibility;
    }
}
function isCollapsibleStateUpdate(update) {
    return 'collapsible' in update;
}
class IndexTreeModel {
    constructor(user, rootElement, options = {}) {
        this.user = user;
        this.rootRef = [];
        this.eventBufferer = new EventBufferer();
        this._onDidSpliceModel = new Emitter();
        this.onDidSpliceModel = this._onDidSpliceModel.event;
        this._onDidSpliceRenderedNodes = new Emitter();
        this.onDidSpliceRenderedNodes = this._onDidSpliceRenderedNodes.event;
        this._onDidChangeCollapseState = new Emitter();
        this.onDidChangeCollapseState = this.eventBufferer.wrapEvent(this._onDidChangeCollapseState.event);
        this._onDidChangeRenderNodeCount = new Emitter();
        this.onDidChangeRenderNodeCount = this.eventBufferer.wrapEvent(this._onDidChangeRenderNodeCount.event);
        this.refilterDelayer = new Delayer(MicrotaskDelay);
        this.collapseByDefault = typeof options.collapseByDefault === 'undefined' ? false : options.collapseByDefault;
        this.allowNonCollapsibleParents = options.allowNonCollapsibleParents ?? false;
        this.filter = options.filter;
        this.autoExpandSingleChildren = typeof options.autoExpandSingleChildren === 'undefined' ? false : options.autoExpandSingleChildren;
        this.root = {
            parent: undefined,
            element: rootElement,
            children: [],
            depth: 0,
            visibleChildrenCount: 0,
            visibleChildIndex: -1,
            collapsible: false,
            collapsed: false,
            renderNodeCount: 0,
            visibility: 1 /* TreeVisibility.Visible */,
            visible: true,
            filterData: undefined
        };
    }
    splice(location, deleteCount, toInsert = Iterable.empty(), options = {}) {
        if (location.length === 0) {
            throw new TreeError(this.user, 'Invalid tree location');
        }
        if (options.diffIdentityProvider) {
            this.spliceSmart(options.diffIdentityProvider, location, deleteCount, toInsert, options);
        }
        else {
            this.spliceSimple(location, deleteCount, toInsert, options);
        }
    }
    spliceSmart(identity, location, deleteCount, toInsertIterable = Iterable.empty(), options, recurseLevels = options.diffDepth ?? 0) {
        const { parentNode } = this.getParentNodeWithListIndex(location);
        if (!parentNode.lastDiffIds) {
            return this.spliceSimple(location, deleteCount, toInsertIterable, options);
        }
        const toInsert = [...toInsertIterable];
        const index = location[location.length - 1];
        const diff = new LcsDiff({ getElements: () => parentNode.lastDiffIds }, {
            getElements: () => [
                ...parentNode.children.slice(0, index),
                ...toInsert,
                ...parentNode.children.slice(index + deleteCount),
            ].map(e => identity.getId(e.element).toString())
        }).ComputeDiff(false);
        // if we were given a 'best effort' diff, use default behavior
        if (diff.quitEarly) {
            parentNode.lastDiffIds = undefined;
            return this.spliceSimple(location, deleteCount, toInsert, options);
        }
        const locationPrefix = location.slice(0, -1);
        const recurseSplice = (fromOriginal, fromModified, count) => {
            if (recurseLevels > 0) {
                for (let i = 0; i < count; i++) {
                    fromOriginal--;
                    fromModified--;
                    this.spliceSmart(identity, [...locationPrefix, fromOriginal, 0], Number.MAX_SAFE_INTEGER, toInsert[fromModified].children, options, recurseLevels - 1);
                }
            }
        };
        let lastStartO = Math.min(parentNode.children.length, index + deleteCount);
        let lastStartM = toInsert.length;
        for (const change of diff.changes.sort((a, b) => b.originalStart - a.originalStart)) {
            recurseSplice(lastStartO, lastStartM, lastStartO - (change.originalStart + change.originalLength));
            lastStartO = change.originalStart;
            lastStartM = change.modifiedStart - index;
            this.spliceSimple([...locationPrefix, lastStartO], change.originalLength, Iterable.slice(toInsert, lastStartM, lastStartM + change.modifiedLength), options);
        }
        // at this point, startO === startM === count since any remaining prefix should match
        recurseSplice(lastStartO, lastStartM, lastStartO);
    }
    spliceSimple(location, deleteCount, toInsert = Iterable.empty(), { onDidCreateNode, onDidDeleteNode, diffIdentityProvider }) {
        const { parentNode, listIndex, revealed, visible } = this.getParentNodeWithListIndex(location);
        const treeListElementsToInsert = [];
        const nodesToInsertIterator = Iterable.map(toInsert, el => this.createTreeNode(el, parentNode, parentNode.visible ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */, revealed, treeListElementsToInsert, onDidCreateNode));
        const lastIndex = location[location.length - 1];
        // figure out what's the visible child start index right before the
        // splice point
        let visibleChildStartIndex = 0;
        for (let i = lastIndex; i >= 0 && i < parentNode.children.length; i--) {
            const child = parentNode.children[i];
            if (child.visible) {
                visibleChildStartIndex = child.visibleChildIndex;
                break;
            }
        }
        const nodesToInsert = [];
        let insertedVisibleChildrenCount = 0;
        let renderNodeCount = 0;
        for (const child of nodesToInsertIterator) {
            nodesToInsert.push(child);
            renderNodeCount += child.renderNodeCount;
            if (child.visible) {
                child.visibleChildIndex = visibleChildStartIndex + insertedVisibleChildrenCount++;
            }
        }
        const deletedNodes = splice(parentNode.children, lastIndex, deleteCount, nodesToInsert);
        if (!diffIdentityProvider) {
            parentNode.lastDiffIds = undefined;
        }
        else if (parentNode.lastDiffIds) {
            splice(parentNode.lastDiffIds, lastIndex, deleteCount, nodesToInsert.map(n => diffIdentityProvider.getId(n.element).toString()));
        }
        else {
            parentNode.lastDiffIds = parentNode.children.map(n => diffIdentityProvider.getId(n.element).toString());
        }
        // figure out what is the count of deleted visible children
        let deletedVisibleChildrenCount = 0;
        for (const child of deletedNodes) {
            if (child.visible) {
                deletedVisibleChildrenCount++;
            }
        }
        // and adjust for all visible children after the splice point
        if (deletedVisibleChildrenCount !== 0) {
            for (let i = lastIndex + nodesToInsert.length; i < parentNode.children.length; i++) {
                const child = parentNode.children[i];
                if (child.visible) {
                    child.visibleChildIndex -= deletedVisibleChildrenCount;
                }
            }
        }
        // update parent's visible children count
        parentNode.visibleChildrenCount += insertedVisibleChildrenCount - deletedVisibleChildrenCount;
        if (deletedNodes.length > 0 && onDidDeleteNode) {
            const visit = (node) => {
                onDidDeleteNode(node);
                node.children.forEach(visit);
            };
            deletedNodes.forEach(visit);
        }
        if (revealed && visible) {
            const visibleDeleteCount = deletedNodes.reduce((r, node) => r + (node.visible ? node.renderNodeCount : 0), 0);
            this._updateAncestorsRenderNodeCount(parentNode, renderNodeCount - visibleDeleteCount);
            this._onDidSpliceRenderedNodes.fire({ start: listIndex, deleteCount: visibleDeleteCount, elements: treeListElementsToInsert });
        }
        this._onDidSpliceModel.fire({ insertedNodes: nodesToInsert, deletedNodes });
        let node = parentNode;
        while (node) {
            if (node.visibility === 2 /* TreeVisibility.Recurse */) {
                // delayed to avoid excessive refiltering, see #135941
                this.refilterDelayer.trigger(() => this.refilter());
                break;
            }
            node = node.parent;
        }
    }
    rerender(location) {
        if (location.length === 0) {
            throw new TreeError(this.user, 'Invalid tree location');
        }
        const { node, listIndex, revealed } = this.getTreeNodeWithListIndex(location);
        if (node.visible && revealed) {
            this._onDidSpliceRenderedNodes.fire({ start: listIndex, deleteCount: 1, elements: [node] });
        }
    }
    has(location) {
        return this.hasTreeNode(location);
    }
    getListIndex(location) {
        const { listIndex, visible, revealed } = this.getTreeNodeWithListIndex(location);
        return visible && revealed ? listIndex : -1;
    }
    getListRenderCount(location) {
        return this.getTreeNode(location).renderNodeCount;
    }
    isCollapsible(location) {
        return this.getTreeNode(location).collapsible;
    }
    setCollapsible(location, collapsible) {
        const node = this.getTreeNode(location);
        if (typeof collapsible === 'undefined') {
            collapsible = !node.collapsible;
        }
        const update = { collapsible };
        return this.eventBufferer.bufferEvents(() => this._setCollapseState(location, update));
    }
    isCollapsed(location) {
        return this.getTreeNode(location).collapsed;
    }
    setCollapsed(location, collapsed, recursive) {
        const node = this.getTreeNode(location);
        if (typeof collapsed === 'undefined') {
            collapsed = !node.collapsed;
        }
        const update = { collapsed, recursive: recursive || false };
        return this.eventBufferer.bufferEvents(() => this._setCollapseState(location, update));
    }
    _setCollapseState(location, update) {
        const { node, listIndex, revealed } = this.getTreeNodeWithListIndex(location);
        const result = this._setListNodeCollapseState(node, listIndex, revealed, update);
        if (node !== this.root && this.autoExpandSingleChildren && result && !isCollapsibleStateUpdate(update) && node.collapsible && !node.collapsed && !update.recursive) {
            let onlyVisibleChildIndex = -1;
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                if (child.visible) {
                    if (onlyVisibleChildIndex > -1) {
                        onlyVisibleChildIndex = -1;
                        break;
                    }
                    else {
                        onlyVisibleChildIndex = i;
                    }
                }
            }
            if (onlyVisibleChildIndex > -1) {
                this._setCollapseState([...location, onlyVisibleChildIndex], update);
            }
        }
        return result;
    }
    _setListNodeCollapseState(node, listIndex, revealed, update) {
        const result = this._setNodeCollapseState(node, update, false);
        if (!revealed || !node.visible || !result) {
            return result;
        }
        const previousRenderNodeCount = node.renderNodeCount;
        const toInsert = this.updateNodeAfterCollapseChange(node);
        const deleteCount = previousRenderNodeCount - (listIndex === -1 ? 0 : 1);
        this._onDidSpliceRenderedNodes.fire({ start: listIndex + 1, deleteCount: deleteCount, elements: toInsert.slice(1) });
        return result;
    }
    _setNodeCollapseState(node, update, deep) {
        let result;
        if (node === this.root) {
            result = false;
        }
        else {
            if (isCollapsibleStateUpdate(update)) {
                result = node.collapsible !== update.collapsible;
                node.collapsible = update.collapsible;
            }
            else if (!node.collapsible) {
                result = false;
            }
            else {
                result = node.collapsed !== update.collapsed;
                node.collapsed = update.collapsed;
            }
            if (result) {
                this._onDidChangeCollapseState.fire({ node, deep });
            }
        }
        if (!isCollapsibleStateUpdate(update) && update.recursive) {
            for (const child of node.children) {
                result = this._setNodeCollapseState(child, update, true) || result;
            }
        }
        return result;
    }
    expandTo(location) {
        this.eventBufferer.bufferEvents(() => {
            let node = this.getTreeNode(location);
            while (node.parent) {
                node = node.parent;
                location = location.slice(0, location.length - 1);
                if (node.collapsed) {
                    this._setCollapseState(location, { collapsed: false, recursive: false });
                }
            }
        });
    }
    refilter() {
        const previousRenderNodeCount = this.root.renderNodeCount;
        const toInsert = this.updateNodeAfterFilterChange(this.root);
        this._onDidSpliceRenderedNodes.fire({ start: 0, deleteCount: previousRenderNodeCount, elements: toInsert });
        this.refilterDelayer.cancel();
    }
    createTreeNode(treeElement, parent, parentVisibility, revealed, treeListElements, onDidCreateNode) {
        const node = {
            parent,
            element: treeElement.element,
            children: [],
            depth: parent.depth + 1,
            visibleChildrenCount: 0,
            visibleChildIndex: -1,
            collapsible: typeof treeElement.collapsible === 'boolean' ? treeElement.collapsible : (typeof treeElement.collapsed !== 'undefined'),
            collapsed: typeof treeElement.collapsed === 'undefined' ? this.collapseByDefault : treeElement.collapsed,
            renderNodeCount: 1,
            visibility: 1 /* TreeVisibility.Visible */,
            visible: true,
            filterData: undefined
        };
        const visibility = this._filterNode(node, parentVisibility);
        node.visibility = visibility;
        if (revealed) {
            treeListElements.push(node);
        }
        const childElements = treeElement.children || Iterable.empty();
        const childRevealed = revealed && visibility !== 0 /* TreeVisibility.Hidden */ && !node.collapsed;
        let visibleChildrenCount = 0;
        let renderNodeCount = 1;
        for (const el of childElements) {
            const child = this.createTreeNode(el, node, visibility, childRevealed, treeListElements, onDidCreateNode);
            node.children.push(child);
            renderNodeCount += child.renderNodeCount;
            if (child.visible) {
                child.visibleChildIndex = visibleChildrenCount++;
            }
        }
        if (!this.allowNonCollapsibleParents) {
            node.collapsible = node.collapsible || node.children.length > 0;
        }
        node.visibleChildrenCount = visibleChildrenCount;
        node.visible = visibility === 2 /* TreeVisibility.Recurse */ ? visibleChildrenCount > 0 : (visibility === 1 /* TreeVisibility.Visible */);
        if (!node.visible) {
            node.renderNodeCount = 0;
            if (revealed) {
                treeListElements.pop();
            }
        }
        else if (!node.collapsed) {
            node.renderNodeCount = renderNodeCount;
        }
        onDidCreateNode?.(node);
        return node;
    }
    updateNodeAfterCollapseChange(node) {
        const previousRenderNodeCount = node.renderNodeCount;
        const result = [];
        this._updateNodeAfterCollapseChange(node, result);
        this._updateAncestorsRenderNodeCount(node.parent, result.length - previousRenderNodeCount);
        return result;
    }
    _updateNodeAfterCollapseChange(node, result) {
        if (node.visible === false) {
            return 0;
        }
        result.push(node);
        node.renderNodeCount = 1;
        if (!node.collapsed) {
            for (const child of node.children) {
                node.renderNodeCount += this._updateNodeAfterCollapseChange(child, result);
            }
        }
        this._onDidChangeRenderNodeCount.fire(node);
        return node.renderNodeCount;
    }
    updateNodeAfterFilterChange(node) {
        const previousRenderNodeCount = node.renderNodeCount;
        const result = [];
        this._updateNodeAfterFilterChange(node, node.visible ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */, result);
        this._updateAncestorsRenderNodeCount(node.parent, result.length - previousRenderNodeCount);
        return result;
    }
    _updateNodeAfterFilterChange(node, parentVisibility, result, revealed = true) {
        let visibility;
        if (node !== this.root) {
            visibility = this._filterNode(node, parentVisibility);
            if (visibility === 0 /* TreeVisibility.Hidden */) {
                node.visible = false;
                node.renderNodeCount = 0;
                return false;
            }
            if (revealed) {
                result.push(node);
            }
        }
        const resultStartLength = result.length;
        node.renderNodeCount = node === this.root ? 0 : 1;
        let hasVisibleDescendants = false;
        if (!node.collapsed || visibility !== 0 /* TreeVisibility.Hidden */) {
            let visibleChildIndex = 0;
            for (const child of node.children) {
                hasVisibleDescendants = this._updateNodeAfterFilterChange(child, visibility, result, revealed && !node.collapsed) || hasVisibleDescendants;
                if (child.visible) {
                    child.visibleChildIndex = visibleChildIndex++;
                }
            }
            node.visibleChildrenCount = visibleChildIndex;
        }
        else {
            node.visibleChildrenCount = 0;
        }
        if (node !== this.root) {
            node.visible = visibility === 2 /* TreeVisibility.Recurse */ ? hasVisibleDescendants : (visibility === 1 /* TreeVisibility.Visible */);
            node.visibility = visibility;
        }
        if (!node.visible) {
            node.renderNodeCount = 0;
            if (revealed) {
                result.pop();
            }
        }
        else if (!node.collapsed) {
            node.renderNodeCount += result.length - resultStartLength;
        }
        this._onDidChangeRenderNodeCount.fire(node);
        return node.visible;
    }
    _updateAncestorsRenderNodeCount(node, diff) {
        if (diff === 0) {
            return;
        }
        while (node) {
            node.renderNodeCount += diff;
            this._onDidChangeRenderNodeCount.fire(node);
            node = node.parent;
        }
    }
    _filterNode(node, parentVisibility) {
        const result = this.filter ? this.filter.filter(node.element, parentVisibility) : 1 /* TreeVisibility.Visible */;
        if (typeof result === 'boolean') {
            node.filterData = undefined;
            return result ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */;
        }
        else if (isFilterResult(result)) {
            node.filterData = result.data;
            return getVisibleState(result.visibility);
        }
        else {
            node.filterData = undefined;
            return getVisibleState(result);
        }
    }
    // cheap
    hasTreeNode(location, node = this.root) {
        if (!location || location.length === 0) {
            return true;
        }
        const [index, ...rest] = location;
        if (index < 0 || index > node.children.length) {
            return false;
        }
        return this.hasTreeNode(rest, node.children[index]);
    }
    // cheap
    getTreeNode(location, node = this.root) {
        if (!location || location.length === 0) {
            return node;
        }
        const [index, ...rest] = location;
        if (index < 0 || index > node.children.length) {
            throw new TreeError(this.user, 'Invalid tree location');
        }
        return this.getTreeNode(rest, node.children[index]);
    }
    // expensive
    getTreeNodeWithListIndex(location) {
        if (location.length === 0) {
            return { node: this.root, listIndex: -1, revealed: true, visible: false };
        }
        const { parentNode, listIndex, revealed, visible } = this.getParentNodeWithListIndex(location);
        const index = location[location.length - 1];
        if (index < 0 || index > parentNode.children.length) {
            throw new TreeError(this.user, 'Invalid tree location');
        }
        const node = parentNode.children[index];
        return { node, listIndex, revealed, visible: visible && node.visible };
    }
    getParentNodeWithListIndex(location, node = this.root, listIndex = 0, revealed = true, visible = true) {
        const [index, ...rest] = location;
        if (index < 0 || index > node.children.length) {
            throw new TreeError(this.user, 'Invalid tree location');
        }
        // TODO@joao perf!
        for (let i = 0; i < index; i++) {
            listIndex += node.children[i].renderNodeCount;
        }
        revealed = revealed && !node.collapsed;
        visible = visible && node.visible;
        if (rest.length === 0) {
            return { parentNode: node, listIndex, revealed, visible };
        }
        return this.getParentNodeWithListIndex(rest, node.children[index], listIndex + 1, revealed, visible);
    }
    getNode(location = []) {
        return this.getTreeNode(location);
    }
    // TODO@joao perf!
    getNodeLocation(node) {
        const location = [];
        let indexTreeNode = node; // typing woes
        while (indexTreeNode.parent) {
            location.push(indexTreeNode.parent.children.indexOf(indexTreeNode));
            indexTreeNode = indexTreeNode.parent;
        }
        return location.reverse();
    }
    getParentNodeLocation(location) {
        if (location.length === 0) {
            return undefined;
        }
        else if (location.length === 1) {
            return [];
        }
        else {
            return tail(location)[0];
        }
    }
    getFirstElementChild(location) {
        const node = this.getTreeNode(location);
        if (node.children.length === 0) {
            return undefined;
        }
        return node.children[0].element;
    }
}

export { IndexTreeModel, getVisibleState, isFilterResult };
