import { append, $ as $$1 } from '../../../../base/browser/dom.js';
import { RenderIndentGuides } from '../../../../base/browser/ui/tree/abstractTree.js';
import { Emitter } from '../../../../base/common/event.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { IInstantiationService } from '../../../instantiation/common/instantiation.js';
import { WorkbenchObjectTree } from '../../../list/browser/listService.js';
import { QuickInputTreeDelegate } from './quickInputDelegate.js';
import { getParentNodeState } from './quickInputTree.js';
import { QuickTreeAccessibilityProvider } from './quickInputTreeAccessibilityProvider.js';
import { QuickInputTreeFilter } from './quickInputTreeFilter.js';
import { QuickInputTreeRenderer } from './quickInputTreeRenderer.js';
import { QuickInputTreeSorter } from './quickInputTreeSorter.js';

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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const $ = $$1;
let QuickInputTreeController = class QuickInputTreeController extends Disposable {
    constructor(container, hoverDelegate, instantiationService) {
        super();
        this.instantiationService = instantiationService;
        this._onDidTriggerButton = this._register(new Emitter());
        this._onDidChangeCheckboxState = this._register(new Emitter());
        this.onDidChangeCheckboxState = this._onDidChangeCheckboxState.event;
        this._onDidCheckedLeafItemsChange = this._register(new Emitter);
        this._onLeave = new Emitter();
        /**
         * Event that is fired when the tree would no longer have focus.
        */
        this.onLeave = this._onLeave.event;
        this._onDidAccept = this._register(new Emitter());
        /**
         * Event that is fired when a non-pickable item is clicked, indicating acceptance.
         */
        this.onDidAccept = this._onDidAccept.event;
        this._container = append(container, $('.quick-input-tree'));
        this._renderer = this._register(this.instantiationService.createInstance(QuickInputTreeRenderer, hoverDelegate, this._onDidTriggerButton, this.onDidChangeCheckboxState));
        this._filter = this.instantiationService.createInstance(QuickInputTreeFilter);
        this._sorter = this._register(new QuickInputTreeSorter());
        this._tree = this._register(this.instantiationService.createInstance((WorkbenchObjectTree), 'QuickInputTree', this._container, new QuickInputTreeDelegate(), [this._renderer], {
            accessibilityProvider: new QuickTreeAccessibilityProvider(this.onDidChangeCheckboxState),
            horizontalScrolling: false,
            multipleSelectionSupport: false,
            findWidgetEnabled: false,
            alwaysConsumeMouseWheel: true,
            hideTwistiesOfChildlessElements: true,
            renderIndentGuides: RenderIndentGuides.None,
            expandOnDoubleClick: true,
            expandOnlyOnTwistieClick: true,
            disableExpandOnSpacebar: true,
            sorter: this._sorter,
            filter: this._filter
        }));
        this.registerOnOpenListener();
    }
    get tree() {
        return this._tree;
    }
    get displayed() {
        return this._container.style.display !== 'none';
    }
    set displayed(value) {
        this._container.style.display = value ? '' : 'none';
    }
    get sortByLabel() {
        return this._sorter.sortByLabel;
    }
    set sortByLabel(value) {
        this._sorter.sortByLabel = value;
        this._tree.resort(null, true);
    }
    getActiveDescendant() {
        return this._tree.getHTMLElement().getAttribute('aria-activedescendant');
    }
    updateFilterOptions(options) {
        if (options.matchOnLabel !== undefined) {
            this._filter.matchOnLabel = options.matchOnLabel;
        }
        if (options.matchOnDescription !== undefined) {
            this._filter.matchOnDescription = options.matchOnDescription;
        }
        this._tree.refilter();
    }
    layout(maxHeight) {
        this._tree.getHTMLElement().style.maxHeight = maxHeight ? `${
        // Make sure height aligns with list item heights
        Math.floor(maxHeight / 44) * 44
            // Add some extra height so that it's clear there's more to scroll
            + 6}px` : '';
        this._tree.layout();
    }
    registerOnOpenListener() {
        this._register(this._tree.onDidOpen(e => {
            const item = e.element;
            if (!item) {
                return;
            }
            if (item.disabled) {
                return;
            }
            // Check if the item is pickable (defaults to true if not specified)
            if (item.pickable === false) {
                // For non-pickable items, set it as the active item and fire the accept event
                this._tree.setFocus([item]);
                this._onDidAccept.fire();
                return;
            }
            const newState = item.checked !== true;
            if ((item.checked ?? false) === newState) {
                return; // No change
            }
            // Handle checked item
            item.checked = newState;
            this._tree.rerender(item);
            // Handle children of the checked item
            const updateSet = new Set();
            const toUpdate = [...this._tree.getNode(item).children];
            while (toUpdate.length) {
                const pop = toUpdate.shift();
                if (pop?.element && !updateSet.has(pop.element)) {
                    updateSet.add(pop.element);
                    if ((pop.element.checked ?? false) !== item.checked) {
                        pop.element.checked = item.checked;
                        this._tree.rerender(pop.element);
                    }
                    toUpdate.push(...pop.children);
                }
            }
            // Handle parents of the checked item
            let parent = this._tree.getParentElement(item);
            while (parent) {
                const parentChildren = [...this._tree.getNode(parent).children];
                const newState = getParentNodeState(parentChildren);
                if ((parent.checked ?? false) !== newState) {
                    parent.checked = newState;
                    this._tree.rerender(parent);
                }
                parent = this._tree.getParentElement(parent);
            }
            this._onDidChangeCheckboxState.fire({
                item,
                checked: item.checked ?? false
            });
            this._onDidCheckedLeafItemsChange.fire(this.getCheckedLeafItems());
        }));
    }
    getCheckedLeafItems() {
        const lookedAt = new Set();
        const toLookAt = [...this._tree.getNode().children];
        const checkedItems = new Array();
        while (toLookAt.length) {
            const lookAt = toLookAt.shift();
            if (!lookAt?.element || lookedAt.has(lookAt.element)) {
                continue;
            }
            if (lookAt.element.checked) {
                lookedAt.add(lookAt.element);
                toLookAt.push(...lookAt.children);
                if (!lookAt.element.children) {
                    checkedItems.push(lookAt.element);
                }
            }
        }
        return checkedItems;
    }
};
QuickInputTreeController = __decorate([
    __param(2, IInstantiationService)
], QuickInputTreeController);

export { QuickInputTreeController };
