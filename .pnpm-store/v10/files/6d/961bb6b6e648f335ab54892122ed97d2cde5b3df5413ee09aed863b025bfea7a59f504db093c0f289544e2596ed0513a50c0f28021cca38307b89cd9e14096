import { AbstractTree } from './abstractTree.js';
import { CompressibleObjectTreeModel } from './compressedObjectTreeModel.js';
import { ObjectTreeModel } from './objectTreeModel.js';
import { memoize } from '../../../common/decorators.js';
import { Iterable } from '../../../common/iterator.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ObjectTree extends AbstractTree {
    get onDidChangeCollapseState() { return this.model.onDidChangeCollapseState; }
    constructor(user, container, delegate, renderers, options = {}) {
        super(user, container, delegate, renderers, options);
        this.user = user;
    }
    setChildren(element, children = Iterable.empty(), options) {
        this.model.setChildren(element, children, options);
    }
    rerender(element) {
        if (element === undefined) {
            this.view.rerender();
            return;
        }
        this.model.rerender(element);
    }
    resort(element, recursive = true) {
        this.model.resort(element, recursive);
    }
    hasElement(element) {
        return this.model.has(element);
    }
    createModel(user, options) {
        return new ObjectTreeModel(user, options);
    }
}
class CompressibleRenderer {
    get compressedTreeNodeProvider() {
        return this._compressedTreeNodeProvider();
    }
    constructor(_compressedTreeNodeProvider, stickyScrollDelegate, renderer) {
        this._compressedTreeNodeProvider = _compressedTreeNodeProvider;
        this.stickyScrollDelegate = stickyScrollDelegate;
        this.renderer = renderer;
        this.templateId = renderer.templateId;
        if (renderer.onDidChangeTwistieState) {
            this.onDidChangeTwistieState = renderer.onDidChangeTwistieState;
        }
    }
    renderTemplate(container) {
        const data = this.renderer.renderTemplate(container);
        return { compressedTreeNode: undefined, data };
    }
    renderElement(node, index, templateData, details) {
        let compressedTreeNode = this.stickyScrollDelegate.getCompressedNode(node);
        if (!compressedTreeNode) {
            compressedTreeNode = this.compressedTreeNodeProvider.getCompressedTreeNode(node.element);
        }
        if (compressedTreeNode.element.elements.length === 1) {
            templateData.compressedTreeNode = undefined;
            this.renderer.renderElement(node, index, templateData.data, details);
        }
        else {
            templateData.compressedTreeNode = compressedTreeNode;
            this.renderer.renderCompressedElements(compressedTreeNode, index, templateData.data, details);
        }
    }
    disposeElement(node, index, templateData, details) {
        if (templateData.compressedTreeNode) {
            this.renderer.disposeCompressedElements?.(templateData.compressedTreeNode, index, templateData.data, details);
        }
        else {
            this.renderer.disposeElement?.(node, index, templateData.data, details);
        }
    }
    disposeTemplate(templateData) {
        this.renderer.disposeTemplate(templateData.data);
    }
    renderTwistie(element, twistieElement) {
        return this.renderer.renderTwistie?.(element, twistieElement) ?? false;
    }
}
__decorate([
    memoize
], CompressibleRenderer.prototype, "compressedTreeNodeProvider", null);
class CompressibleStickyScrollDelegate {
    constructor(modelProvider) {
        this.modelProvider = modelProvider;
        this.compressedStickyNodes = new Map();
    }
    getCompressedNode(node) {
        return this.compressedStickyNodes.get(node);
    }
    constrainStickyScrollNodes(stickyNodes, stickyScrollMaxItemCount, maxWidgetHeight) {
        this.compressedStickyNodes.clear();
        if (stickyNodes.length === 0) {
            return [];
        }
        for (let i = 0; i < stickyNodes.length; i++) {
            const stickyNode = stickyNodes[i];
            const stickyNodeBottom = stickyNode.position + stickyNode.height;
            const followingReachesMaxHeight = i + 1 < stickyNodes.length && stickyNodeBottom + stickyNodes[i + 1].height > maxWidgetHeight;
            if (followingReachesMaxHeight || i >= stickyScrollMaxItemCount - 1 && stickyScrollMaxItemCount < stickyNodes.length) {
                const uncompressedStickyNodes = stickyNodes.slice(0, i);
                const overflowingStickyNodes = stickyNodes.slice(i);
                const compressedStickyNode = this.compressStickyNodes(overflowingStickyNodes);
                return [...uncompressedStickyNodes, compressedStickyNode];
            }
        }
        return stickyNodes;
    }
    compressStickyNodes(stickyNodes) {
        if (stickyNodes.length === 0) {
            throw new Error('Can\'t compress empty sticky nodes');
        }
        const compressionModel = this.modelProvider();
        if (!compressionModel.isCompressionEnabled()) {
            return stickyNodes[0];
        }
        // Collect all elements to be compressed
        const elements = [];
        for (let i = 0; i < stickyNodes.length; i++) {
            const stickyNode = stickyNodes[i];
            const compressedNode = compressionModel.getCompressedTreeNode(stickyNode.node.element);
            if (compressedNode.element) {
                // if an element is incompressible, it can't be compressed with it's parent element
                if (i !== 0 && compressedNode.element.incompressible) {
                    break;
                }
                elements.push(...compressedNode.element.elements);
            }
        }
        if (elements.length < 2) {
            return stickyNodes[0];
        }
        // Compress the elements
        const lastStickyNode = stickyNodes[stickyNodes.length - 1];
        const compressedElement = { elements, incompressible: false };
        const compressedNode = { ...lastStickyNode.node, children: [], element: compressedElement };
        const stickyTreeNode = new Proxy(stickyNodes[0].node, {});
        const compressedStickyNode = {
            node: stickyTreeNode,
            startIndex: stickyNodes[0].startIndex,
            endIndex: lastStickyNode.endIndex,
            position: stickyNodes[0].position,
            height: stickyNodes[0].height,
        };
        this.compressedStickyNodes.set(stickyTreeNode, compressedNode);
        return compressedStickyNode;
    }
}
function asObjectTreeOptions(compressedTreeNodeProvider, options) {
    return options && {
        ...options,
        keyboardNavigationLabelProvider: options.keyboardNavigationLabelProvider && {
            getKeyboardNavigationLabel(e) {
                let compressedTreeNode;
                try {
                    compressedTreeNode = compressedTreeNodeProvider().getCompressedTreeNode(e);
                }
                catch {
                    return options.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e);
                }
                if (compressedTreeNode.element.elements.length === 1) {
                    return options.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e);
                }
                else {
                    return options.keyboardNavigationLabelProvider.getCompressedNodeKeyboardNavigationLabel(compressedTreeNode.element.elements);
                }
            }
        }
    };
}
class CompressibleObjectTree extends ObjectTree {
    constructor(user, container, delegate, renderers, options = {}) {
        const compressedTreeNodeProvider = () => this;
        const stickyScrollDelegate = new CompressibleStickyScrollDelegate(() => this.model);
        const compressibleRenderers = renderers.map(r => new CompressibleRenderer(compressedTreeNodeProvider, stickyScrollDelegate, r));
        super(user, container, delegate, compressibleRenderers, { ...asObjectTreeOptions(compressedTreeNodeProvider, options), stickyScrollDelegate });
    }
    setChildren(element, children = Iterable.empty(), options) {
        this.model.setChildren(element, children, options);
    }
    createModel(user, options) {
        return new CompressibleObjectTreeModel(user, options);
    }
    updateOptions(optionsUpdate = {}) {
        super.updateOptions(optionsUpdate);
        if (typeof optionsUpdate.compressionEnabled !== 'undefined') {
            this.model.setCompressionEnabled(optionsUpdate.compressionEnabled);
        }
    }
    getCompressedTreeNode(element = null) {
        return this.model.getCompressedTreeNode(element);
    }
}

export { CompressibleObjectTree, ObjectTree };
