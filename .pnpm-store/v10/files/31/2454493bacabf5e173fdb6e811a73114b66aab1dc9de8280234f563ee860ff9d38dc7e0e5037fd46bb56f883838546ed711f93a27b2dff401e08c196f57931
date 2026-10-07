import { isEditableElement, isKeyboardEvent, hasParentWithClass, append, $, clearNode, addDisposableListener } from '../../dom.js';
import { createStyleSheet } from '../../domStylesheets.js';
import { asCssValueWithDefault } from '../../cssValue.js';
import { Event, EventBufferer, Emitter, Relay } from '../../../common/event.js';
import { StandardKeyboardEvent } from '../../keyboardEvent.js';
import '../../browser.js';
import '../../dnd.js';
import '../../touch.js';
import '../hover/hoverDelegateFactory.js';
import '../../../common/platform.js';
import { DisposableStore, dispose, Disposable, toDisposable } from '../../../common/lifecycle.js';
import '../selectBox/selectBox.css';
import '../selectBox/selectBoxCustom.js';
import { equals, distinct, range } from '../../../common/arrays.js';
import '../../../common/actions.js';
import '../actionbar/actionbar.css';
import { localize } from '../../../../nls.js';
import '../findinput/findInput.js';
import { alert } from '../aria/aria.js';
import '../scrollbar/scrollableElement.js';
import '../inputbox/inputBox.css';
import { ElementsDragAndDropData } from '../list/listView.js';
import { isStickyScrollContainer, List, MouseController, isButton, isMonacoEditor, isStickyScrollElement, isMonacoCustomToggle, isActionItem } from '../list/listWidget.js';
import '../toggle/toggle.js';
import { isFilterResult, getVisibleState } from './indexTreeModel.js';
import { TreeMouseEventTarget } from './tree.js';
import { Delayer, disposableTimeout } from '../../../common/async.js';
import { Codicon } from '../../../common/codicons.js';
import { ThemeIcon } from '../../../common/themables.js';
import { SetMap } from '../../../common/map.js';
import { FuzzyScore, fuzzyScore } from '../../../common/filters.js';
import { clamp } from '../../../common/numbers.js';
import './media/tree.css';
import '../../../common/observableInternal/index.js';
import { constObservable } from '../../../common/observableInternal/observables/constObservable.js';
import { autorun } from '../../../common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class TreeElementsDragAndDropData extends ElementsDragAndDropData {
    constructor(data) {
        super(data.elements.map(node => node.element));
        this.data = data;
    }
}
function asTreeDragAndDropData(data) {
    if (data instanceof ElementsDragAndDropData) {
        return new TreeElementsDragAndDropData(data);
    }
    return data;
}
class TreeNodeListDragAndDrop {
    constructor(modelProvider, dnd) {
        this.modelProvider = modelProvider;
        this.dnd = dnd;
        this.autoExpandDisposable = Disposable.None;
        this.disposables = new DisposableStore();
    }
    getDragURI(node) {
        return this.dnd.getDragURI(node.element);
    }
    getDragLabel(nodes, originalEvent) {
        if (this.dnd.getDragLabel) {
            return this.dnd.getDragLabel(nodes.map(node => node.element), originalEvent);
        }
        return undefined;
    }
    onDragStart(data, originalEvent) {
        this.dnd.onDragStart?.(asTreeDragAndDropData(data), originalEvent);
    }
    onDragOver(data, targetNode, targetIndex, targetSector, originalEvent, raw = true) {
        const result = this.dnd.onDragOver(asTreeDragAndDropData(data), targetNode && targetNode.element, targetIndex, targetSector, originalEvent);
        const didChangeAutoExpandNode = this.autoExpandNode !== targetNode;
        if (didChangeAutoExpandNode) {
            this.autoExpandDisposable.dispose();
            this.autoExpandNode = targetNode;
        }
        if (typeof targetNode === 'undefined') {
            return result;
        }
        if (didChangeAutoExpandNode && typeof result !== 'boolean' && result.autoExpand) {
            this.autoExpandDisposable = disposableTimeout(() => {
                const model = this.modelProvider();
                const ref = model.getNodeLocation(targetNode);
                if (model.isCollapsed(ref)) {
                    model.setCollapsed(ref, false);
                }
                this.autoExpandNode = undefined;
            }, 500, this.disposables);
        }
        if (typeof result === 'boolean' || !result.accept || typeof result.bubble === 'undefined' || result.feedback) {
            if (!raw) {
                const accept = typeof result === 'boolean' ? result : result.accept;
                const effect = typeof result === 'boolean' ? undefined : result.effect;
                return { accept, effect, feedback: [targetIndex] };
            }
            return result;
        }
        if (result.bubble === 1 /* TreeDragOverBubble.Up */) {
            const model = this.modelProvider();
            const ref = model.getNodeLocation(targetNode);
            const parentRef = model.getParentNodeLocation(ref);
            const parentNode = model.getNode(parentRef);
            const parentIndex = parentRef && model.getListIndex(parentRef);
            return this.onDragOver(data, parentNode, parentIndex, targetSector, originalEvent, false);
        }
        const model = this.modelProvider();
        const ref = model.getNodeLocation(targetNode);
        const start = model.getListIndex(ref);
        const length = model.getListRenderCount(ref);
        return { ...result, feedback: range(start, start + length) };
    }
    drop(data, targetNode, targetIndex, targetSector, originalEvent) {
        this.autoExpandDisposable.dispose();
        this.autoExpandNode = undefined;
        this.dnd.drop(asTreeDragAndDropData(data), targetNode && targetNode.element, targetIndex, targetSector, originalEvent);
    }
    onDragEnd(originalEvent) {
        this.dnd.onDragEnd?.(originalEvent);
    }
    dispose() {
        this.disposables.dispose();
        this.dnd.dispose();
    }
}
function asListOptions(modelProvider, disposableStore, options) {
    return options && {
        ...options,
        identityProvider: options.identityProvider && {
            getId(el) {
                return options.identityProvider.getId(el.element);
            }
        },
        dnd: options.dnd && disposableStore.add(new TreeNodeListDragAndDrop(modelProvider, options.dnd)),
        multipleSelectionController: options.multipleSelectionController && {
            isSelectionSingleChangeEvent(e) {
                // eslint-disable-next-line local/code-no-dangerous-type-assertions
                return options.multipleSelectionController.isSelectionSingleChangeEvent({ ...e, element: e.element });
            },
            isSelectionRangeChangeEvent(e) {
                // eslint-disable-next-line local/code-no-dangerous-type-assertions
                return options.multipleSelectionController.isSelectionRangeChangeEvent({ ...e, element: e.element });
            }
        },
        accessibilityProvider: options.accessibilityProvider && {
            ...options.accessibilityProvider,
            getSetSize(node) {
                const model = modelProvider();
                const ref = model.getNodeLocation(node);
                const parentRef = model.getParentNodeLocation(ref);
                const parentNode = model.getNode(parentRef);
                return parentNode.visibleChildrenCount;
            },
            getPosInSet(node) {
                return node.visibleChildIndex + 1;
            },
            isChecked: options.accessibilityProvider && options.accessibilityProvider.isChecked ? (node) => {
                return options.accessibilityProvider.isChecked(node.element);
            } : undefined,
            getRole: options.accessibilityProvider && options.accessibilityProvider.getRole ? (node) => {
                return options.accessibilityProvider.getRole(node.element);
            } : () => 'treeitem',
            getAriaLabel(e) {
                return options.accessibilityProvider.getAriaLabel(e.element);
            },
            getWidgetAriaLabel() {
                return options.accessibilityProvider.getWidgetAriaLabel();
            },
            getWidgetRole: options.accessibilityProvider && options.accessibilityProvider.getWidgetRole ? () => options.accessibilityProvider.getWidgetRole() : () => 'tree',
            getAriaLevel: options.accessibilityProvider && options.accessibilityProvider.getAriaLevel ? (node) => options.accessibilityProvider.getAriaLevel(node.element) : (node) => {
                return node.depth;
            },
            getActiveDescendantId: options.accessibilityProvider.getActiveDescendantId && (node => {
                return options.accessibilityProvider.getActiveDescendantId(node.element);
            })
        },
        keyboardNavigationLabelProvider: options.keyboardNavigationLabelProvider && {
            ...options.keyboardNavigationLabelProvider,
            getKeyboardNavigationLabel(node) {
                return options.keyboardNavigationLabelProvider.getKeyboardNavigationLabel(node.element);
            }
        }
    };
}
class ComposedTreeDelegate {
    constructor(delegate) {
        this.delegate = delegate;
    }
    getHeight(element) {
        return this.delegate.getHeight(element.element);
    }
    getTemplateId(element) {
        return this.delegate.getTemplateId(element.element);
    }
    hasDynamicHeight(element) {
        return !!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(element.element);
    }
    setDynamicHeight(element, height) {
        this.delegate.setDynamicHeight?.(element.element, height);
    }
}
var RenderIndentGuides;
(function (RenderIndentGuides) {
    RenderIndentGuides["None"] = "none";
    RenderIndentGuides["OnHover"] = "onHover";
    RenderIndentGuides["Always"] = "always";
})(RenderIndentGuides || (RenderIndentGuides = {}));
class EventCollection {
    get elements() {
        return this._elements;
    }
    constructor(onDidChange, _elements = []) {
        this._elements = _elements;
        this.disposables = new DisposableStore();
        this.onDidChange = Event.forEach(onDidChange, elements => this._elements = elements, this.disposables);
    }
    dispose() {
        this.disposables.dispose();
    }
}
class TreeRenderer {
    static { this.DefaultIndent = 8; }
    constructor(renderer, model, onDidChangeCollapseState, activeNodes, renderedIndentGuides, options = {}) {
        this.renderer = renderer;
        this.model = model;
        this.activeNodes = activeNodes;
        this.renderedIndentGuides = renderedIndentGuides;
        this.renderedElements = new Map();
        this.renderedNodes = new Map();
        this.indent = TreeRenderer.DefaultIndent;
        this.hideTwistiesOfChildlessElements = false;
        this.shouldRenderIndentGuides = false;
        this.activeIndentNodes = new Set();
        this.indentGuidesDisposable = Disposable.None;
        this.disposables = new DisposableStore();
        this.templateId = renderer.templateId;
        this.updateOptions(options);
        Event.map(onDidChangeCollapseState, e => e.node)(this.onDidChangeNodeTwistieState, this, this.disposables);
        renderer.onDidChangeTwistieState?.(this.onDidChangeTwistieState, this, this.disposables);
    }
    updateOptions(options = {}) {
        if (typeof options.indent !== 'undefined') {
            const indent = clamp(options.indent, 0, 40);
            if (indent !== this.indent) {
                this.indent = indent;
                for (const [node, templateData] of this.renderedNodes) {
                    templateData.indentSize = TreeRenderer.DefaultIndent + (node.depth - 1) * this.indent;
                    this.renderTreeElement(node, templateData);
                }
            }
        }
        if (typeof options.renderIndentGuides !== 'undefined') {
            const shouldRenderIndentGuides = options.renderIndentGuides !== RenderIndentGuides.None;
            if (shouldRenderIndentGuides !== this.shouldRenderIndentGuides) {
                this.shouldRenderIndentGuides = shouldRenderIndentGuides;
                for (const [node, templateData] of this.renderedNodes) {
                    this._renderIndentGuides(node, templateData);
                }
                this.indentGuidesDisposable.dispose();
                if (shouldRenderIndentGuides) {
                    const disposables = new DisposableStore();
                    this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, disposables);
                    this.indentGuidesDisposable = disposables;
                    this._onDidChangeActiveNodes(this.activeNodes.elements);
                }
            }
        }
        if (typeof options.hideTwistiesOfChildlessElements !== 'undefined') {
            this.hideTwistiesOfChildlessElements = options.hideTwistiesOfChildlessElements;
        }
    }
    renderTemplate(container) {
        const el = append(container, $('.monaco-tl-row'));
        const indent = append(el, $('.monaco-tl-indent'));
        const twistie = append(el, $('.monaco-tl-twistie'));
        const contents = append(el, $('.monaco-tl-contents'));
        const templateData = this.renderer.renderTemplate(contents);
        return { container, indent, twistie, indentGuidesDisposable: Disposable.None, indentSize: 0, templateData };
    }
    renderElement(node, index, templateData, details) {
        templateData.indentSize = TreeRenderer.DefaultIndent + (node.depth - 1) * this.indent;
        this.renderedNodes.set(node, templateData);
        this.renderedElements.set(node.element, node);
        this.renderTreeElement(node, templateData);
        this.renderer.renderElement(node, index, templateData.templateData, { ...details, indent: templateData.indentSize });
    }
    disposeElement(node, index, templateData, details) {
        templateData.indentGuidesDisposable.dispose();
        this.renderer.disposeElement?.(node, index, templateData.templateData, { ...details, indent: templateData.indentSize });
        if (typeof details?.height === 'number') {
            this.renderedNodes.delete(node);
            this.renderedElements.delete(node.element);
        }
    }
    disposeTemplate(templateData) {
        this.renderer.disposeTemplate(templateData.templateData);
    }
    onDidChangeTwistieState(element) {
        const node = this.renderedElements.get(element);
        if (!node) {
            return;
        }
        this.onDidChangeNodeTwistieState(node);
    }
    onDidChangeNodeTwistieState(node) {
        const templateData = this.renderedNodes.get(node);
        if (!templateData) {
            return;
        }
        this._onDidChangeActiveNodes(this.activeNodes.elements);
        this.renderTreeElement(node, templateData);
    }
    renderTreeElement(node, templateData) {
        templateData.twistie.style.paddingLeft = `${templateData.indentSize}px`;
        templateData.indent.style.width = `${templateData.indentSize + this.indent - 16}px`;
        if (node.collapsible) {
            templateData.container.setAttribute('aria-expanded', String(!node.collapsed));
        }
        else {
            templateData.container.removeAttribute('aria-expanded');
        }
        templateData.twistie.classList.remove(...ThemeIcon.asClassNameArray(Codicon.treeItemExpanded));
        let twistieRendered = false;
        if (this.renderer.renderTwistie) {
            twistieRendered = this.renderer.renderTwistie(node.element, templateData.twistie);
        }
        if (node.collapsible && (!this.hideTwistiesOfChildlessElements || node.visibleChildrenCount > 0)) {
            if (!twistieRendered) {
                templateData.twistie.classList.add(...ThemeIcon.asClassNameArray(Codicon.treeItemExpanded));
            }
            templateData.twistie.classList.add('collapsible');
            templateData.twistie.classList.toggle('collapsed', node.collapsed);
        }
        else {
            templateData.twistie.classList.remove('collapsible', 'collapsed');
        }
        this._renderIndentGuides(node, templateData);
    }
    _renderIndentGuides(node, templateData) {
        clearNode(templateData.indent);
        templateData.indentGuidesDisposable.dispose();
        if (!this.shouldRenderIndentGuides) {
            return;
        }
        const disposableStore = new DisposableStore();
        while (true) {
            const ref = this.model.getNodeLocation(node);
            const parentRef = this.model.getParentNodeLocation(ref);
            if (!parentRef) {
                break;
            }
            const parent = this.model.getNode(parentRef);
            const guide = $('.indent-guide', { style: `width: ${this.indent}px` });
            if (this.activeIndentNodes.has(parent)) {
                guide.classList.add('active');
            }
            if (templateData.indent.childElementCount === 0) {
                templateData.indent.appendChild(guide);
            }
            else {
                templateData.indent.insertBefore(guide, templateData.indent.firstElementChild);
            }
            this.renderedIndentGuides.add(parent, guide);
            disposableStore.add(toDisposable(() => this.renderedIndentGuides.delete(parent, guide)));
            node = parent;
        }
        templateData.indentGuidesDisposable = disposableStore;
    }
    _onDidChangeActiveNodes(nodes) {
        if (!this.shouldRenderIndentGuides) {
            return;
        }
        const set = new Set();
        nodes.forEach(node => {
            const ref = this.model.getNodeLocation(node);
            try {
                const parentRef = this.model.getParentNodeLocation(ref);
                if (node.collapsible && node.children.length > 0 && !node.collapsed) {
                    set.add(node);
                }
                else if (parentRef) {
                    set.add(this.model.getNode(parentRef));
                }
            }
            catch {
                // noop
            }
        });
        this.activeIndentNodes.forEach(node => {
            if (!set.has(node)) {
                this.renderedIndentGuides.forEach(node, line => line.classList.remove('active'));
            }
        });
        set.forEach(node => {
            if (!this.activeIndentNodes.has(node)) {
                this.renderedIndentGuides.forEach(node, line => line.classList.add('active'));
            }
        });
        this.activeIndentNodes = set;
    }
    dispose() {
        this.renderedNodes.clear();
        this.renderedElements.clear();
        this.indentGuidesDisposable.dispose();
        dispose(this.disposables);
    }
}
function contiguousFuzzyScore(patternLower, wordLower) {
    const index = wordLower.toLowerCase().indexOf(patternLower);
    let score;
    if (index > -1) {
        score = [Number.MAX_SAFE_INTEGER, 0];
        for (let i = patternLower.length; i > 0; i--) {
            score.push(index + i - 1);
        }
    }
    return score;
}
class FindFilter {
    get totalCount() { return this._totalCount; }
    get matchCount() { return this._matchCount; }
    set findMatchType(type) { this._findMatchType = type; }
    get findMatchType() { return this._findMatchType; }
    set findMode(mode) { this._findMode = mode; }
    get findMode() { return this._findMode; }
    constructor(_keyboardNavigationLabelProvider, _filter, _defaultFindVisibility) {
        this._keyboardNavigationLabelProvider = _keyboardNavigationLabelProvider;
        this._filter = _filter;
        this._defaultFindVisibility = _defaultFindVisibility;
        this._totalCount = 0;
        this._matchCount = 0;
        this._findMatchType = TreeFindMatchType.Fuzzy;
        this._findMode = TreeFindMode.Highlight;
        this._pattern = '';
        this._lowercasePattern = '';
        this.disposables = new DisposableStore();
    }
    filter(element, parentVisibility) {
        let visibility = 1 /* TreeVisibility.Visible */;
        if (this._filter) {
            const result = this._filter.filter(element, parentVisibility);
            if (typeof result === 'boolean') {
                visibility = result ? 1 /* TreeVisibility.Visible */ : 0 /* TreeVisibility.Hidden */;
            }
            else if (isFilterResult(result)) {
                visibility = getVisibleState(result.visibility);
            }
            else {
                visibility = result;
            }
            if (visibility === 0 /* TreeVisibility.Hidden */) {
                return false;
            }
        }
        this._totalCount++;
        if (!this._pattern) {
            this._matchCount++;
            return { data: FuzzyScore.Default, visibility };
        }
        const label = this._keyboardNavigationLabelProvider.getKeyboardNavigationLabel(element);
        const labels = Array.isArray(label) ? label : [label];
        for (const l of labels) {
            const labelStr = l && l.toString();
            if (typeof labelStr === 'undefined') {
                return { data: FuzzyScore.Default, visibility };
            }
            let score;
            if (this._findMatchType === TreeFindMatchType.Contiguous) {
                score = contiguousFuzzyScore(this._lowercasePattern, labelStr.toLowerCase());
            }
            else {
                score = fuzzyScore(this._pattern, this._lowercasePattern, 0, labelStr, labelStr.toLowerCase(), 0, { firstMatchCanBeWeak: true, boostFullMatch: true });
            }
            if (score) {
                this._matchCount++;
                return labels.length === 1 ?
                    { data: score, visibility } :
                    { data: { label: labelStr, score: score }, visibility };
            }
        }
        if (this._findMode === TreeFindMode.Filter) {
            if (typeof this._defaultFindVisibility === 'number') {
                return this._defaultFindVisibility;
            }
            else if (this._defaultFindVisibility) {
                return this._defaultFindVisibility(element);
            }
            else {
                return 2 /* TreeVisibility.Recurse */;
            }
        }
        else {
            return { data: FuzzyScore.Default, visibility };
        }
    }
    reset() {
        this._totalCount = 0;
        this._matchCount = 0;
    }
    dispose() {
        dispose(this.disposables);
    }
}
class FindToggles {
    constructor(startStates) {
        this.stateMap = new Map(startStates.map(state => [state.id, { ...state }]));
    }
    get(id) {
        const state = this.stateMap.get(id);
        if (state === undefined) {
            throw new Error(`No state found for toggle id ${id}`);
        }
        return state.isChecked;
    }
    set(id, value) {
        const state = this.stateMap.get(id);
        if (state === undefined) {
            throw new Error(`No state found for toggle id ${id}`);
        }
        if (state.isChecked === value) {
            return false;
        }
        state.isChecked = value;
        return true;
    }
}
var TreeFindMode;
(function (TreeFindMode) {
    TreeFindMode[TreeFindMode["Highlight"] = 0] = "Highlight";
    TreeFindMode[TreeFindMode["Filter"] = 1] = "Filter";
})(TreeFindMode || (TreeFindMode = {}));
var TreeFindMatchType;
(function (TreeFindMatchType) {
    TreeFindMatchType[TreeFindMatchType["Fuzzy"] = 0] = "Fuzzy";
    TreeFindMatchType[TreeFindMatchType["Contiguous"] = 1] = "Contiguous";
})(TreeFindMatchType || (TreeFindMatchType = {}));
var DefaultTreeToggles;
(function (DefaultTreeToggles) {
    DefaultTreeToggles["Mode"] = "mode";
    DefaultTreeToggles["MatchType"] = "matchType";
})(DefaultTreeToggles || (DefaultTreeToggles = {}));
class AbstractFindController {
    get pattern() { return this._pattern; }
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        this._placeholder = value;
        this.widget?.setPlaceHolder(value);
    }
    constructor(tree, filter, contextViewProvider, options = {}) {
        this.tree = tree;
        this.filter = filter;
        this.contextViewProvider = contextViewProvider;
        this.options = options;
        this._pattern = '';
        this._onDidChangePattern = new Emitter();
        this._onDidChangeOpenState = new Emitter();
        this.onDidChangeOpenState = this._onDidChangeOpenState.event;
        this.enabledDisposables = new DisposableStore();
        this.disposables = new DisposableStore();
        this.toggles = new FindToggles(options.toggles ?? []);
        this._placeholder = options.placeholder ?? localize(20, "Type to search");
    }
    isOpened() {
        return !!this.widget;
    }
    updateToggleState(id, checked) {
        this.toggles.set(id, checked);
        this.widget?.setToggleState(id, checked);
    }
    renderMessage(showNotFound, warningMessage) {
        if (showNotFound) {
            if (this.tree.options.showNotFoundMessage ?? true) {
                this.widget?.showMessage({ type: 2 /* MessageType.WARNING */, content: warningMessage ?? localize(21, "No results found.") });
            }
            else {
                this.widget?.showMessage({ type: 2 /* MessageType.WARNING */ });
            }
        }
        else {
            this.widget?.clearMessage();
        }
    }
    alertResults(results) {
        if (!results) {
            alert(localize(22, "No results"));
        }
        else {
            alert(localize(23, "{0} results", results));
        }
    }
    dispose() {
        this._history = undefined;
        this._onDidChangePattern.dispose();
        this.enabledDisposables.dispose();
        this.disposables.dispose();
    }
}
class FindController extends AbstractFindController {
    get mode() { return this.toggles.get(DefaultTreeToggles.Mode) ? TreeFindMode.Filter : TreeFindMode.Highlight; }
    set mode(mode) {
        if (mode === this.mode) {
            return;
        }
        const isFilterMode = mode === TreeFindMode.Filter;
        this.updateToggleState(DefaultTreeToggles.Mode, isFilterMode);
        this.placeholder = isFilterMode ? localize(24, "Type to filter") : localize(25, "Type to search");
        this.filter.findMode = mode;
        this.tree.refilter();
        this.render();
        this._onDidChangeMode.fire(mode);
    }
    get matchType() { return this.toggles.get(DefaultTreeToggles.MatchType) ? TreeFindMatchType.Fuzzy : TreeFindMatchType.Contiguous; }
    set matchType(matchType) {
        if (matchType === this.matchType) {
            return;
        }
        this.updateToggleState(DefaultTreeToggles.MatchType, matchType === TreeFindMatchType.Fuzzy);
        this.filter.findMatchType = matchType;
        this.tree.refilter();
        this.render();
        this._onDidChangeMatchType.fire(matchType);
    }
    constructor(tree, filter, contextViewProvider, options = {}) {
        const defaultFindMode = options.defaultFindMode ?? TreeFindMode.Highlight;
        const defaultFindMatchType = options.defaultFindMatchType ?? TreeFindMatchType.Fuzzy;
        const toggleContributions = [{
                id: DefaultTreeToggles.Mode,
                icon: Codicon.listFilter,
                title: localize(26, "Filter"),
                isChecked: defaultFindMode === TreeFindMode.Filter,
            }, {
                id: DefaultTreeToggles.MatchType,
                icon: Codicon.searchFuzzy,
                title: localize(27, "Fuzzy Match"),
                isChecked: defaultFindMatchType === TreeFindMatchType.Fuzzy,
            }];
        filter.findMatchType = defaultFindMatchType;
        filter.findMode = defaultFindMode;
        super(tree, filter, contextViewProvider, { ...options, toggles: toggleContributions });
        this.filter = filter;
        this._onDidChangeMode = new Emitter();
        this.onDidChangeMode = this._onDidChangeMode.event;
        this._onDidChangeMatchType = new Emitter();
        this.onDidChangeMatchType = this._onDidChangeMatchType.event;
        this.disposables.add(this.tree.onDidChangeModel(() => {
            if (!this.isOpened()) {
                return;
            }
            if (this.pattern.length !== 0) {
                this.tree.refilter();
            }
            this.render();
        }));
        this.disposables.add(this.tree.onWillRefilter(() => this.filter.reset()));
    }
    updateOptions(optionsUpdate = {}) {
        if (optionsUpdate.defaultFindMode !== undefined) {
            this.mode = optionsUpdate.defaultFindMode;
        }
        if (optionsUpdate.defaultFindMatchType !== undefined) {
            this.matchType = optionsUpdate.defaultFindMatchType;
        }
    }
    shouldAllowFocus(node) {
        if (!this.isOpened() || !this.pattern) {
            return true;
        }
        if (this.filter.totalCount > 0 && this.filter.matchCount <= 1) {
            return true;
        }
        return !FuzzyScore.isDefault(node.filterData);
    }
    render() {
        const noMatches = this.filter.matchCount === 0 && this.filter.totalCount > 0;
        const showNotFound = noMatches && this.pattern.length > 0;
        this.renderMessage(showNotFound);
        if (this.pattern.length) {
            this.alertResults(this.filter.matchCount);
        }
    }
}
function stickyScrollNodeStateEquals(node1, node2) {
    return node1.position === node2.position && stickyScrollNodeEquals(node1, node2);
}
function stickyScrollNodeEquals(node1, node2) {
    return node1.node.element === node2.node.element &&
        node1.startIndex === node2.startIndex &&
        node1.height === node2.height &&
        node1.endIndex === node2.endIndex;
}
class StickyScrollState {
    constructor(stickyNodes = []) {
        this.stickyNodes = stickyNodes;
    }
    get count() { return this.stickyNodes.length; }
    equal(state) {
        return equals(this.stickyNodes, state.stickyNodes, stickyScrollNodeStateEquals);
    }
    contains(element) {
        return this.stickyNodes.some(node => node.node.element === element.element);
    }
    lastNodePartiallyVisible() {
        if (this.count === 0) {
            return false;
        }
        const lastStickyNode = this.stickyNodes[this.count - 1];
        if (this.count === 1) {
            return lastStickyNode.position !== 0;
        }
        const secondLastStickyNode = this.stickyNodes[this.count - 2];
        return secondLastStickyNode.position + secondLastStickyNode.height !== lastStickyNode.position;
    }
    animationStateChanged(previousState) {
        if (!equals(this.stickyNodes, previousState.stickyNodes, stickyScrollNodeEquals)) {
            return false;
        }
        if (this.count === 0) {
            return false;
        }
        const lastStickyNode = this.stickyNodes[this.count - 1];
        const previousLastStickyNode = previousState.stickyNodes[previousState.count - 1];
        return lastStickyNode.position !== previousLastStickyNode.position;
    }
}
class DefaultStickyScrollDelegate {
    constrainStickyScrollNodes(stickyNodes, stickyScrollMaxItemCount, maxWidgetHeight) {
        for (let i = 0; i < stickyNodes.length; i++) {
            const stickyNode = stickyNodes[i];
            const stickyNodeBottom = stickyNode.position + stickyNode.height;
            if (stickyNodeBottom > maxWidgetHeight || i >= stickyScrollMaxItemCount) {
                return stickyNodes.slice(0, i);
            }
        }
        return stickyNodes;
    }
}
class StickyScrollController extends Disposable {
    constructor(tree, model, view, renderers, treeDelegate, options = {}) {
        super();
        this.tree = tree;
        this.model = model;
        this.view = view;
        this.treeDelegate = treeDelegate;
        this.maxWidgetViewRatio = 0.4;
        const stickyScrollOptions = this.validateStickySettings(options);
        this.stickyScrollMaxItemCount = stickyScrollOptions.stickyScrollMaxItemCount;
        this.stickyScrollDelegate = options.stickyScrollDelegate ?? new DefaultStickyScrollDelegate();
        this.paddingTop = options.paddingTop ?? 0;
        this._widget = this._register(new StickyScrollWidget(view.getScrollableElement(), view, tree, renderers, treeDelegate, options.accessibilityProvider));
        this.onDidChangeHasFocus = this._widget.onDidChangeHasFocus;
        this.onContextMenu = this._widget.onContextMenu;
        this._register(view.onDidScroll(() => this.update()));
        this._register(view.onDidChangeContentHeight(() => this.update()));
        this._register(tree.onDidChangeCollapseState(() => this.update()));
        this._register(model.onDidSpliceRenderedNodes((e) => {
            const state = this._widget.state;
            if (!state) {
                return;
            }
            // If a sticky node is removed, recompute the state
            const hasRemovedStickyNode = e.deleteCount > 0 && state.stickyNodes.some(stickyNode => !this.model.has(this.model.getNodeLocation(stickyNode.node)));
            if (hasRemovedStickyNode) {
                this.update();
                return;
            }
            // If a sticky node is updated, rerender the widget
            const shouldRerenderStickyNodes = state.stickyNodes.some(stickyNode => {
                const listIndex = this.model.getListIndex(this.model.getNodeLocation(stickyNode.node));
                return listIndex >= e.start && listIndex < e.start + e.deleteCount && state.contains(stickyNode.node);
            });
            if (shouldRerenderStickyNodes) {
                this._widget.rerender();
            }
        }));
        this.update();
    }
    get height() {
        return this._widget.height;
    }
    getNodeAtHeight(height) {
        let index;
        if (height === 0) {
            index = this.view.firstVisibleIndex;
        }
        else {
            index = this.view.indexAt(height + this.view.scrollTop);
        }
        if (index < 0 || index >= this.view.length) {
            return undefined;
        }
        return this.view.element(index);
    }
    update() {
        const firstVisibleNode = this.getNodeAtHeight(this.paddingTop);
        // Don't render anything if there are no elements
        if (!firstVisibleNode || this.tree.scrollTop <= this.paddingTop) {
            this._widget.setState(undefined);
            return;
        }
        const stickyState = this.findStickyState(firstVisibleNode);
        this._widget.setState(stickyState);
    }
    findStickyState(firstVisibleNode) {
        const stickyNodes = [];
        let firstVisibleNodeUnderWidget = firstVisibleNode;
        let stickyNodesHeight = 0;
        let nextStickyNode = this.getNextStickyNode(firstVisibleNodeUnderWidget, undefined, stickyNodesHeight);
        while (nextStickyNode) {
            stickyNodes.push(nextStickyNode);
            stickyNodesHeight += nextStickyNode.height;
            if (stickyNodes.length <= this.stickyScrollMaxItemCount) {
                firstVisibleNodeUnderWidget = this.getNextVisibleNode(nextStickyNode);
                if (!firstVisibleNodeUnderWidget) {
                    break;
                }
            }
            nextStickyNode = this.getNextStickyNode(firstVisibleNodeUnderWidget, nextStickyNode.node, stickyNodesHeight);
        }
        const contrainedStickyNodes = this.constrainStickyNodes(stickyNodes);
        return contrainedStickyNodes.length ? new StickyScrollState(contrainedStickyNodes) : undefined;
    }
    getNextVisibleNode(previousStickyNode) {
        return this.getNodeAtHeight(previousStickyNode.position + previousStickyNode.height);
    }
    getNextStickyNode(firstVisibleNodeUnderWidget, previousStickyNode, stickyNodesHeight) {
        const nextStickyNode = this.getAncestorUnderPrevious(firstVisibleNodeUnderWidget, previousStickyNode);
        if (!nextStickyNode) {
            return undefined;
        }
        if (nextStickyNode === firstVisibleNodeUnderWidget) {
            if (!this.nodeIsUncollapsedParent(firstVisibleNodeUnderWidget)) {
                return undefined;
            }
            if (this.nodeTopAlignsWithStickyNodesBottom(firstVisibleNodeUnderWidget, stickyNodesHeight)) {
                return undefined;
            }
        }
        return this.createStickyScrollNode(nextStickyNode, stickyNodesHeight);
    }
    nodeTopAlignsWithStickyNodesBottom(node, stickyNodesHeight) {
        const nodeIndex = this.getNodeIndex(node);
        const elementTop = this.view.getElementTop(nodeIndex);
        const stickyPosition = stickyNodesHeight;
        return this.view.scrollTop === elementTop - stickyPosition;
    }
    createStickyScrollNode(node, currentStickyNodesHeight) {
        const height = this.treeDelegate.getHeight(node);
        const { startIndex, endIndex } = this.getNodeRange(node);
        const position = this.calculateStickyNodePosition(endIndex, currentStickyNodesHeight, height);
        return { node, position, height, startIndex, endIndex };
    }
    getAncestorUnderPrevious(node, previousAncestor = undefined) {
        let currentAncestor = node;
        let parentOfcurrentAncestor = this.getParentNode(currentAncestor);
        while (parentOfcurrentAncestor) {
            if (parentOfcurrentAncestor === previousAncestor) {
                return currentAncestor;
            }
            currentAncestor = parentOfcurrentAncestor;
            parentOfcurrentAncestor = this.getParentNode(currentAncestor);
        }
        if (previousAncestor === undefined) {
            return currentAncestor;
        }
        return undefined;
    }
    calculateStickyNodePosition(lastDescendantIndex, stickyRowPositionTop, stickyNodeHeight) {
        let lastChildRelativeTop = this.view.getRelativeTop(lastDescendantIndex);
        // If the last descendant is only partially visible at the top of the view, getRelativeTop() returns null
        // In that case, utilize the next node's relative top to calculate the sticky node's position
        if (lastChildRelativeTop === null && this.view.firstVisibleIndex === lastDescendantIndex && lastDescendantIndex + 1 < this.view.length) {
            const nodeHeight = this.treeDelegate.getHeight(this.view.element(lastDescendantIndex));
            const nextNodeRelativeTop = this.view.getRelativeTop(lastDescendantIndex + 1);
            lastChildRelativeTop = nextNodeRelativeTop ? nextNodeRelativeTop - nodeHeight / this.view.renderHeight : null;
        }
        if (lastChildRelativeTop === null) {
            return stickyRowPositionTop;
        }
        const lastChildNode = this.view.element(lastDescendantIndex);
        const lastChildHeight = this.treeDelegate.getHeight(lastChildNode);
        const topOfLastChild = lastChildRelativeTop * this.view.renderHeight;
        const bottomOfLastChild = topOfLastChild + lastChildHeight;
        if (stickyRowPositionTop + stickyNodeHeight > bottomOfLastChild && stickyRowPositionTop <= bottomOfLastChild) {
            return bottomOfLastChild - stickyNodeHeight;
        }
        return stickyRowPositionTop;
    }
    constrainStickyNodes(stickyNodes) {
        if (stickyNodes.length === 0) {
            return [];
        }
        // Check if sticky nodes need to be constrained
        const maximumStickyWidgetHeight = this.view.renderHeight * this.maxWidgetViewRatio;
        const lastStickyNode = stickyNodes[stickyNodes.length - 1];
        if (stickyNodes.length <= this.stickyScrollMaxItemCount && lastStickyNode.position + lastStickyNode.height <= maximumStickyWidgetHeight) {
            return stickyNodes;
        }
        // constrain sticky nodes
        const constrainedStickyNodes = this.stickyScrollDelegate.constrainStickyScrollNodes(stickyNodes, this.stickyScrollMaxItemCount, maximumStickyWidgetHeight);
        if (!constrainedStickyNodes.length) {
            return [];
        }
        // Validate constraints
        const lastConstrainedStickyNode = constrainedStickyNodes[constrainedStickyNodes.length - 1];
        if (constrainedStickyNodes.length > this.stickyScrollMaxItemCount || lastConstrainedStickyNode.position + lastConstrainedStickyNode.height > maximumStickyWidgetHeight) {
            throw new Error('stickyScrollDelegate violates constraints');
        }
        return constrainedStickyNodes;
    }
    getParentNode(node) {
        const nodeLocation = this.model.getNodeLocation(node);
        const parentLocation = this.model.getParentNodeLocation(nodeLocation);
        return parentLocation ? this.model.getNode(parentLocation) : undefined;
    }
    nodeIsUncollapsedParent(node) {
        const nodeLocation = this.model.getNodeLocation(node);
        return this.model.getListRenderCount(nodeLocation) > 1;
    }
    getNodeIndex(node) {
        const nodeLocation = this.model.getNodeLocation(node);
        const nodeIndex = this.model.getListIndex(nodeLocation);
        return nodeIndex;
    }
    getNodeRange(node) {
        const nodeLocation = this.model.getNodeLocation(node);
        const startIndex = this.model.getListIndex(nodeLocation);
        if (startIndex < 0) {
            throw new Error('Node not found in tree');
        }
        const renderCount = this.model.getListRenderCount(nodeLocation);
        const endIndex = startIndex + renderCount - 1;
        return { startIndex, endIndex };
    }
    nodePositionTopBelowWidget(node) {
        const ancestors = [];
        let currentAncestor = this.getParentNode(node);
        while (currentAncestor) {
            ancestors.push(currentAncestor);
            currentAncestor = this.getParentNode(currentAncestor);
        }
        let widgetHeight = 0;
        for (let i = 0; i < ancestors.length && i < this.stickyScrollMaxItemCount; i++) {
            widgetHeight += this.treeDelegate.getHeight(ancestors[i]);
        }
        return widgetHeight;
    }
    domFocus() {
        this._widget.domFocus();
    }
    // Whether sticky scroll was the last focused part in the tree or not
    focusedLast() {
        return this._widget.focusedLast();
    }
    updateOptions(optionsUpdate = {}) {
        if (optionsUpdate.paddingTop !== undefined) {
            this.paddingTop = optionsUpdate.paddingTop;
        }
        if (optionsUpdate.stickyScrollMaxItemCount !== undefined) {
            const validatedOptions = this.validateStickySettings(optionsUpdate);
            if (this.stickyScrollMaxItemCount !== validatedOptions.stickyScrollMaxItemCount) {
                this.stickyScrollMaxItemCount = validatedOptions.stickyScrollMaxItemCount;
                this.update();
            }
        }
    }
    validateStickySettings(options) {
        let stickyScrollMaxItemCount = 7;
        if (typeof options.stickyScrollMaxItemCount === 'number') {
            stickyScrollMaxItemCount = Math.max(options.stickyScrollMaxItemCount, 1);
        }
        return { stickyScrollMaxItemCount };
    }
}
class StickyScrollWidget {
    get state() { return this._previousState; }
    constructor(container, view, tree, treeRenderers, treeDelegate, accessibilityProvider) {
        this.view = view;
        this.tree = tree;
        this.treeRenderers = treeRenderers;
        this.treeDelegate = treeDelegate;
        this.accessibilityProvider = accessibilityProvider;
        this._previousElements = [];
        this._previousStateDisposables = new DisposableStore();
        this._rootDomNode = $('.monaco-tree-sticky-container.empty');
        container.appendChild(this._rootDomNode);
        const shadow = $('.monaco-tree-sticky-container-shadow');
        this._rootDomNode.appendChild(shadow);
        this.stickyScrollFocus = new StickyScrollFocus(this._rootDomNode, view);
        this.onDidChangeHasFocus = this.stickyScrollFocus.onDidChangeHasFocus;
        this.onContextMenu = this.stickyScrollFocus.onContextMenu;
    }
    get height() {
        if (!this._previousState) {
            return 0;
        }
        const lastElement = this._previousState.stickyNodes[this._previousState.count - 1];
        return lastElement.position + lastElement.height;
    }
    setState(state) {
        const wasVisible = !!this._previousState && this._previousState.count > 0;
        const isVisible = !!state && state.count > 0;
        // If state has not changed, do nothing
        if ((!wasVisible && !isVisible) || (wasVisible && isVisible && this._previousState.equal(state))) {
            return;
        }
        // Update visibility of the widget if changed
        if (wasVisible !== isVisible) {
            this.setVisible(isVisible);
        }
        if (!isVisible) {
            this._previousState = undefined;
            this._previousElements = [];
            this._previousStateDisposables.clear();
            return;
        }
        const lastStickyNode = state.stickyNodes[state.count - 1];
        // If the new state is only a change in the last node's position, update the position of the last element
        if (this._previousState && state.animationStateChanged(this._previousState)) {
            this._previousElements[this._previousState.count - 1].style.top = `${lastStickyNode.position}px`;
        }
        // create new dom elements
        else {
            this.renderState(state);
        }
        this._previousState = state;
        // Set the height of the widget to the bottom of the last sticky node
        this._rootDomNode.style.height = `${lastStickyNode.position + lastStickyNode.height}px`;
    }
    renderState(state) {
        this._previousStateDisposables.clear();
        const elements = Array(state.count);
        for (let stickyIndex = state.count - 1; stickyIndex >= 0; stickyIndex--) {
            const stickyNode = state.stickyNodes[stickyIndex];
            const { element, disposable } = this.createElement(stickyNode, stickyIndex, state.count);
            elements[stickyIndex] = element;
            this._rootDomNode.appendChild(element);
            this._previousStateDisposables.add(disposable);
        }
        this.stickyScrollFocus.updateElements(elements, state);
        this._previousElements = elements;
    }
    rerender() {
        if (this._previousState) {
            this.renderState(this._previousState);
        }
    }
    createElement(stickyNode, stickyIndex, stickyNodesTotal) {
        const nodeIndex = stickyNode.startIndex;
        // Sticky element container
        const stickyElement = document.createElement('div');
        stickyElement.style.top = `${stickyNode.position}px`;
        if (this.tree.options.setRowHeight !== false) {
            stickyElement.style.height = `${stickyNode.height}px`;
        }
        if (this.tree.options.setRowLineHeight !== false) {
            stickyElement.style.lineHeight = `${stickyNode.height}px`;
        }
        stickyElement.classList.add('monaco-tree-sticky-row');
        stickyElement.classList.add('monaco-list-row');
        stickyElement.setAttribute('data-index', `${nodeIndex}`);
        stickyElement.setAttribute('data-parity', nodeIndex % 2 === 0 ? 'even' : 'odd');
        stickyElement.setAttribute('id', this.view.getElementID(nodeIndex));
        const accessibilityDisposable = this.setAccessibilityAttributes(stickyElement, stickyNode.node.element, stickyIndex, stickyNodesTotal);
        // Get the renderer for the node
        const nodeTemplateId = this.treeDelegate.getTemplateId(stickyNode.node);
        const renderer = this.treeRenderers.find((renderer) => renderer.templateId === nodeTemplateId);
        if (!renderer) {
            throw new Error(`No renderer found for template id ${nodeTemplateId}`);
        }
        // To make sure we do not influence the original node, we create a copy of the node
        // We need to check if it is already a unique instance of the node by the delegate
        let nodeCopy = stickyNode.node;
        if (nodeCopy === this.tree.getNode(this.tree.getNodeLocation(stickyNode.node))) {
            nodeCopy = new Proxy(stickyNode.node, {});
        }
        // Render the element
        const templateData = renderer.renderTemplate(stickyElement);
        renderer.renderElement(nodeCopy, stickyNode.startIndex, templateData, { height: stickyNode.height });
        // Remove the element from the DOM when state is disposed
        const disposable = toDisposable(() => {
            accessibilityDisposable.dispose();
            renderer.disposeElement(nodeCopy, stickyNode.startIndex, templateData, { height: stickyNode.height });
            renderer.disposeTemplate(templateData);
            stickyElement.remove();
        });
        return { element: stickyElement, disposable };
    }
    setAccessibilityAttributes(container, element, stickyIndex, stickyNodesTotal) {
        if (!this.accessibilityProvider) {
            return Disposable.None;
        }
        if (this.accessibilityProvider.getSetSize) {
            container.setAttribute('aria-setsize', String(this.accessibilityProvider.getSetSize(element, stickyIndex, stickyNodesTotal)));
        }
        if (this.accessibilityProvider.getPosInSet) {
            container.setAttribute('aria-posinset', String(this.accessibilityProvider.getPosInSet(element, stickyIndex)));
        }
        if (this.accessibilityProvider.getRole) {
            container.setAttribute('role', this.accessibilityProvider.getRole(element) ?? 'treeitem');
        }
        const ariaLabel = this.accessibilityProvider.getAriaLabel(element);
        const observable = (ariaLabel && typeof ariaLabel !== 'string') ? ariaLabel : constObservable(ariaLabel);
        const result = autorun(reader => {
            const value = reader.readObservable(observable);
            if (value) {
                container.setAttribute('aria-label', value);
            }
            else {
                container.removeAttribute('aria-label');
            }
        });
        if (typeof ariaLabel === 'string') ;
        else if (ariaLabel) {
            container.setAttribute('aria-label', ariaLabel.get());
        }
        const ariaLevel = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(element);
        if (typeof ariaLevel === 'number') {
            container.setAttribute('aria-level', `${ariaLevel}`);
        }
        // Sticky Scroll elements can not be selected
        container.setAttribute('aria-selected', String(false));
        return result;
    }
    setVisible(visible) {
        this._rootDomNode.classList.toggle('empty', !visible);
        if (!visible) {
            this.stickyScrollFocus.updateElements([], undefined);
        }
    }
    domFocus() {
        this.stickyScrollFocus.domFocus();
    }
    focusedLast() {
        return this.stickyScrollFocus.focusedLast();
    }
    dispose() {
        this.stickyScrollFocus.dispose();
        this._previousStateDisposables.dispose();
        this._rootDomNode.remove();
    }
}
class StickyScrollFocus extends Disposable {
    get domHasFocus() { return this._domHasFocus; }
    set domHasFocus(hasFocus) {
        if (hasFocus !== this._domHasFocus) {
            this._onDidChangeHasFocus.fire(hasFocus);
            this._domHasFocus = hasFocus;
        }
    }
    constructor(container, view) {
        super();
        this.container = container;
        this.view = view;
        this.focusedIndex = -1;
        this.elements = [];
        this._onDidChangeHasFocus = new Emitter();
        this.onDidChangeHasFocus = this._onDidChangeHasFocus.event;
        this._onContextMenu = new Emitter();
        this.onContextMenu = this._onContextMenu.event;
        this._domHasFocus = false;
        this._register(addDisposableListener(this.container, 'focus', () => this.onFocus()));
        this._register(addDisposableListener(this.container, 'blur', () => this.onBlur()));
        this._register(this.view.onDidFocus(() => this.toggleStickyScrollFocused(false)));
        this._register(this.view.onKeyDown((e) => this.onKeyDown(e)));
        this._register(this.view.onMouseDown((e) => this.onMouseDown(e)));
        this._register(this.view.onContextMenu((e) => this.handleContextMenu(e)));
    }
    handleContextMenu(e) {
        const target = e.browserEvent.target;
        if (!isStickyScrollContainer(target) && !isStickyScrollElement(target)) {
            if (this.focusedLast()) {
                this.view.domFocus();
            }
            return;
        }
        // The list handles the context menu triggered by a mouse event
        // In that case only set the focus of the element clicked and leave the rest to the list to handle
        if (!isKeyboardEvent(e.browserEvent)) {
            if (!this.state) {
                throw new Error('Context menu should not be triggered when state is undefined');
            }
            const stickyIndex = this.state.stickyNodes.findIndex(stickyNode => stickyNode.node.element === e.element?.element);
            if (stickyIndex === -1) {
                throw new Error('Context menu should not be triggered when element is not in sticky scroll widget');
            }
            this.container.focus();
            this.setFocus(stickyIndex);
            return;
        }
        if (!this.state || this.focusedIndex < 0) {
            throw new Error('Context menu key should not be triggered when focus is not in sticky scroll widget');
        }
        const stickyNode = this.state.stickyNodes[this.focusedIndex];
        const element = stickyNode.node.element;
        const anchor = this.elements[this.focusedIndex];
        this._onContextMenu.fire({ element, anchor, browserEvent: e.browserEvent, isStickyScroll: true });
    }
    onKeyDown(e) {
        // Sticky Scroll Navigation
        if (this.domHasFocus && this.state) {
            // Move up
            if (e.key === 'ArrowUp') {
                this.setFocusedElement(Math.max(0, this.focusedIndex - 1));
                e.preventDefault();
                e.stopPropagation();
            }
            // Move down, if last sticky node is focused, move focus into first child of last sticky node
            else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                if (this.focusedIndex >= this.state.count - 1) {
                    const nodeIndexToFocus = this.state.stickyNodes[this.state.count - 1].startIndex + 1;
                    this.view.domFocus();
                    this.view.setFocus([nodeIndexToFocus]);
                    this.scrollNodeUnderWidget(nodeIndexToFocus, this.state);
                }
                else {
                    this.setFocusedElement(this.focusedIndex + 1);
                }
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
    onMouseDown(e) {
        const target = e.browserEvent.target;
        if (!isStickyScrollContainer(target) && !isStickyScrollElement(target)) {
            return;
        }
        e.browserEvent.preventDefault();
        e.browserEvent.stopPropagation();
    }
    updateElements(elements, state) {
        if (state && state.count === 0) {
            throw new Error('Sticky scroll state must be undefined when there are no sticky nodes');
        }
        if (state && state.count !== elements.length) {
            throw new Error('Sticky scroll focus received illigel state');
        }
        const previousIndex = this.focusedIndex;
        this.removeFocus();
        this.elements = elements;
        this.state = state;
        if (state) {
            const newFocusedIndex = clamp(previousIndex, 0, state.count - 1);
            this.setFocus(newFocusedIndex);
        }
        else {
            if (this.domHasFocus) {
                this.view.domFocus();
            }
        }
        // must come last as it calls blur()
        this.container.tabIndex = state ? 0 : -1;
    }
    setFocusedElement(stickyIndex) {
        // doesn't imply that the widget has (or will have) focus
        const state = this.state;
        if (!state) {
            throw new Error('Cannot set focus when state is undefined');
        }
        this.setFocus(stickyIndex);
        if (stickyIndex < state.count - 1) {
            return;
        }
        // If the last sticky node is not fully visible, scroll it into view
        if (state.lastNodePartiallyVisible()) {
            const lastStickyNode = state.stickyNodes[stickyIndex];
            this.scrollNodeUnderWidget(lastStickyNode.endIndex + 1, state);
        }
    }
    scrollNodeUnderWidget(nodeIndex, state) {
        const lastStickyNode = state.stickyNodes[state.count - 1];
        const secondLastStickyNode = state.count > 1 ? state.stickyNodes[state.count - 2] : undefined;
        const elementScrollTop = this.view.getElementTop(nodeIndex);
        const elementTargetViewTop = secondLastStickyNode ? secondLastStickyNode.position + secondLastStickyNode.height + lastStickyNode.height : lastStickyNode.height;
        this.view.scrollTop = elementScrollTop - elementTargetViewTop;
    }
    domFocus() {
        if (!this.state) {
            throw new Error('Cannot focus when state is undefined');
        }
        this.container.focus();
    }
    focusedLast() {
        if (!this.state) {
            return false;
        }
        return this.view.getHTMLElement().classList.contains('sticky-scroll-focused');
    }
    removeFocus() {
        if (this.focusedIndex === -1) {
            return;
        }
        this.toggleElementFocus(this.elements[this.focusedIndex], false);
        this.focusedIndex = -1;
    }
    setFocus(newFocusIndex) {
        if (0 > newFocusIndex) {
            throw new Error('addFocus() can not remove focus');
        }
        if (!this.state && newFocusIndex >= 0) {
            throw new Error('Cannot set focus index when state is undefined');
        }
        if (this.state && newFocusIndex >= this.state.count) {
            throw new Error('Cannot set focus index to an index that does not exist');
        }
        const oldIndex = this.focusedIndex;
        if (oldIndex >= 0) {
            this.toggleElementFocus(this.elements[oldIndex], false);
        }
        if (newFocusIndex >= 0) {
            this.toggleElementFocus(this.elements[newFocusIndex], true);
        }
        this.focusedIndex = newFocusIndex;
    }
    toggleElementFocus(element, focused) {
        this.toggleElementActiveFocus(element, focused && this.domHasFocus);
        this.toggleElementPassiveFocus(element, focused);
    }
    toggleCurrentElementActiveFocus(focused) {
        if (this.focusedIndex === -1) {
            return;
        }
        this.toggleElementActiveFocus(this.elements[this.focusedIndex], focused);
    }
    toggleElementActiveFocus(element, focused) {
        // active focus is set when sticky scroll has focus
        element.classList.toggle('focused', focused);
    }
    toggleElementPassiveFocus(element, focused) {
        // passive focus allows to show focus when sticky scroll does not have focus
        // for example when the context menu has focus
        element.classList.toggle('passive-focused', focused);
    }
    toggleStickyScrollFocused(focused) {
        // Weather the last focus in the view was sticky scroll and not the list
        // Is only removed when the focus is back in the tree an no longer in sticky scroll
        this.view.getHTMLElement().classList.toggle('sticky-scroll-focused', focused);
    }
    onFocus() {
        if (!this.state || this.elements.length === 0) {
            throw new Error('Cannot focus when state is undefined or elements are empty');
        }
        this.domHasFocus = true;
        this.toggleStickyScrollFocused(true);
        this.toggleCurrentElementActiveFocus(true);
        if (this.focusedIndex === -1) {
            this.setFocus(0);
        }
    }
    onBlur() {
        this.domHasFocus = false;
        this.toggleCurrentElementActiveFocus(false);
    }
    dispose() {
        this.toggleStickyScrollFocused(false);
        this._onDidChangeHasFocus.fire(false);
        super.dispose();
    }
}
function asTreeMouseEvent(event) {
    let target = TreeMouseEventTarget.Unknown;
    if (hasParentWithClass(event.browserEvent.target, 'monaco-tl-twistie', 'monaco-tl-row')) {
        target = TreeMouseEventTarget.Twistie;
    }
    else if (hasParentWithClass(event.browserEvent.target, 'monaco-tl-contents', 'monaco-tl-row')) {
        target = TreeMouseEventTarget.Element;
    }
    else if (hasParentWithClass(event.browserEvent.target, 'monaco-tree-type-filter', 'monaco-list')) {
        target = TreeMouseEventTarget.Filter;
    }
    return {
        browserEvent: event.browserEvent,
        element: event.element ? event.element.element : null,
        target
    };
}
function asTreeContextMenuEvent(event) {
    const isStickyScroll = isStickyScrollContainer(event.browserEvent.target);
    return {
        element: event.element ? event.element.element : null,
        browserEvent: event.browserEvent,
        anchor: event.anchor,
        isStickyScroll
    };
}
function dfs(node, fn) {
    fn(node);
    node.children.forEach(child => dfs(child, fn));
}
/**
 * The trait concept needs to exist at the tree level, because collapsed
 * tree nodes will not be known by the list.
 */
class Trait {
    get nodeSet() {
        if (!this._nodeSet) {
            this._nodeSet = this.createNodeSet();
        }
        return this._nodeSet;
    }
    constructor(getFirstViewElementWithTrait, identityProvider) {
        this.getFirstViewElementWithTrait = getFirstViewElementWithTrait;
        this.identityProvider = identityProvider;
        this.nodes = [];
        this._onDidChange = new Emitter();
        this.onDidChange = this._onDidChange.event;
    }
    set(nodes, browserEvent) {
        const event = browserEvent;
        if (!(event?.__forceEvent) && equals(this.nodes, nodes)) {
            return;
        }
        this._set(nodes, false, browserEvent);
    }
    _set(nodes, silent, browserEvent) {
        this.nodes = [...nodes];
        this.elements = undefined;
        this._nodeSet = undefined;
        if (!silent) {
            const that = this;
            this._onDidChange.fire({ get elements() { return that.get(); }, browserEvent });
        }
    }
    get() {
        if (!this.elements) {
            this.elements = this.nodes.map(node => node.element);
        }
        return [...this.elements];
    }
    getNodes() {
        return this.nodes;
    }
    has(node) {
        return this.nodeSet.has(node);
    }
    onDidModelSplice({ insertedNodes, deletedNodes }) {
        if (!this.identityProvider) {
            const set = this.createNodeSet();
            const visit = (node) => set.delete(node);
            deletedNodes.forEach(node => dfs(node, visit));
            this.set([...set.values()]);
            return;
        }
        const deletedNodesIdSet = new Set();
        const deletedNodesVisitor = (node) => deletedNodesIdSet.add(this.identityProvider.getId(node.element).toString());
        deletedNodes.forEach(node => dfs(node, deletedNodesVisitor));
        const insertedNodesMap = new Map();
        const insertedNodesVisitor = (node) => insertedNodesMap.set(this.identityProvider.getId(node.element).toString(), node);
        insertedNodes.forEach(node => dfs(node, insertedNodesVisitor));
        const nodes = [];
        for (const node of this.nodes) {
            const id = this.identityProvider.getId(node.element).toString();
            const wasDeleted = deletedNodesIdSet.has(id);
            if (!wasDeleted) {
                nodes.push(node);
            }
            else {
                const insertedNode = insertedNodesMap.get(id);
                if (insertedNode && insertedNode.visible) {
                    nodes.push(insertedNode);
                }
            }
        }
        if (this.nodes.length > 0 && nodes.length === 0) {
            const node = this.getFirstViewElementWithTrait();
            if (node) {
                nodes.push(node);
            }
        }
        this._set(nodes, true);
    }
    createNodeSet() {
        const set = new Set();
        for (const node of this.nodes) {
            set.add(node);
        }
        return set;
    }
}
class TreeNodeListMouseController extends MouseController {
    constructor(list, tree, stickyScrollProvider) {
        super(list);
        this.tree = tree;
        this.stickyScrollProvider = stickyScrollProvider;
    }
    onViewPointer(e) {
        if (isButton(e.browserEvent.target) ||
            isEditableElement(e.browserEvent.target) ||
            isMonacoEditor(e.browserEvent.target)) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        const node = e.element;
        if (!node) {
            return super.onViewPointer(e);
        }
        if (this.isSelectionRangeChangeEvent(e) || this.isSelectionSingleChangeEvent(e)) {
            return super.onViewPointer(e);
        }
        const target = e.browserEvent.target;
        const onTwistie = target.classList.contains('monaco-tl-twistie')
            || (target.classList.contains('monaco-icon-label') && target.classList.contains('folder-icon') && e.browserEvent.offsetX < 16);
        const isStickyElement = isStickyScrollElement(e.browserEvent.target);
        let expandOnlyOnTwistieClick = false;
        if (isStickyElement) {
            expandOnlyOnTwistieClick = true;
        }
        else if (typeof this.tree.expandOnlyOnTwistieClick === 'function') {
            expandOnlyOnTwistieClick = this.tree.expandOnlyOnTwistieClick(node.element);
        }
        else {
            expandOnlyOnTwistieClick = !!this.tree.expandOnlyOnTwistieClick;
        }
        if (!isStickyElement) {
            if (expandOnlyOnTwistieClick && !onTwistie && e.browserEvent.detail !== 2) {
                return super.onViewPointer(e);
            }
            if (!this.tree.expandOnDoubleClick && e.browserEvent.detail === 2) {
                return super.onViewPointer(e);
            }
        }
        else {
            this.handleStickyScrollMouseEvent(e, node);
        }
        if (node.collapsible && (!isStickyElement || onTwistie)) {
            const location = this.tree.getNodeLocation(node);
            const recursive = e.browserEvent.altKey;
            this.tree.setFocus([location]);
            this.tree.toggleCollapsed(location, recursive);
            if (onTwistie) {
                // Do not set this before calling a handler on the super class, because it will reject it as handled
                e.browserEvent.isHandledByList = true;
                return;
            }
        }
        if (!isStickyElement) {
            super.onViewPointer(e);
        }
    }
    handleStickyScrollMouseEvent(e, node) {
        if (isMonacoCustomToggle(e.browserEvent.target) || isActionItem(e.browserEvent.target)) {
            return;
        }
        const stickyScrollController = this.stickyScrollProvider();
        if (!stickyScrollController) {
            throw new Error('Sticky scroll controller not found');
        }
        const nodeIndex = this.list.indexOf(node);
        const elementScrollTop = this.list.getElementTop(nodeIndex);
        const elementTargetViewTop = stickyScrollController.nodePositionTopBelowWidget(node);
        this.tree.scrollTop = elementScrollTop - elementTargetViewTop;
        this.list.domFocus();
        this.list.setFocus([nodeIndex]);
        this.list.setSelection([nodeIndex]);
    }
    onDoubleClick(e) {
        const onTwistie = e.browserEvent.target.classList.contains('monaco-tl-twistie');
        if (onTwistie || !this.tree.expandOnDoubleClick) {
            return;
        }
        if (e.browserEvent.isHandledByList) {
            return;
        }
        super.onDoubleClick(e);
    }
    // to make sure dom focus is not stolen (for example with context menu)
    onMouseDown(e) {
        const target = e.browserEvent.target;
        if (!isStickyScrollContainer(target) && !isStickyScrollElement(target)) {
            super.onMouseDown(e);
            return;
        }
    }
    onContextMenu(e) {
        const target = e.browserEvent.target;
        if (!isStickyScrollContainer(target) && !isStickyScrollElement(target)) {
            super.onContextMenu(e);
            return;
        }
    }
}
/**
 * We use this List subclass to restore selection and focus as nodes
 * get rendered in the list, possibly due to a node expand() call.
 */
class TreeNodeList extends List {
    constructor(user, container, virtualDelegate, renderers, focusTrait, selectionTrait, anchorTrait, options) {
        super(user, container, virtualDelegate, renderers, options);
        this.focusTrait = focusTrait;
        this.selectionTrait = selectionTrait;
        this.anchorTrait = anchorTrait;
    }
    createMouseController(options) {
        return new TreeNodeListMouseController(this, options.tree, options.stickyScrollProvider);
    }
    splice(start, deleteCount, elements = []) {
        super.splice(start, deleteCount, elements);
        if (elements.length === 0) {
            return;
        }
        const additionalFocus = [];
        const additionalSelection = [];
        let anchor;
        elements.forEach((node, index) => {
            if (this.focusTrait.has(node)) {
                additionalFocus.push(start + index);
            }
            if (this.selectionTrait.has(node)) {
                additionalSelection.push(start + index);
            }
            if (this.anchorTrait.has(node)) {
                anchor = start + index;
            }
        });
        if (additionalFocus.length > 0) {
            super.setFocus(distinct([...super.getFocus(), ...additionalFocus]));
        }
        if (additionalSelection.length > 0) {
            super.setSelection(distinct([...super.getSelection(), ...additionalSelection]));
        }
        if (typeof anchor === 'number') {
            super.setAnchor(anchor);
        }
    }
    setFocus(indexes, browserEvent, fromAPI = false) {
        super.setFocus(indexes, browserEvent);
        if (!fromAPI) {
            this.focusTrait.set(indexes.map(i => this.element(i)), browserEvent);
        }
    }
    setSelection(indexes, browserEvent, fromAPI = false) {
        super.setSelection(indexes, browserEvent);
        if (!fromAPI) {
            this.selectionTrait.set(indexes.map(i => this.element(i)), browserEvent);
        }
    }
    setAnchor(index, fromAPI = false) {
        super.setAnchor(index);
        if (!fromAPI) {
            if (typeof index === 'undefined') {
                this.anchorTrait.set([]);
            }
            else {
                this.anchorTrait.set([this.element(index)]);
            }
        }
    }
}
class AbstractTree {
    get onDidScroll() { return this.view.onDidScroll; }
    get onDidChangeFocus() { return this.eventBufferer.wrapEvent(this.focus.onDidChange); }
    get onDidChangeSelection() { return this.eventBufferer.wrapEvent(this.selection.onDidChange); }
    get onMouseDblClick() { return Event.filter(Event.map(this.view.onMouseDblClick, asTreeMouseEvent), e => e.target !== TreeMouseEventTarget.Filter); }
    get onMouseOver() { return Event.map(this.view.onMouseOver, asTreeMouseEvent); }
    get onMouseOut() { return Event.map(this.view.onMouseOut, asTreeMouseEvent); }
    get onContextMenu() { return Event.any(Event.filter(Event.map(this.view.onContextMenu, asTreeContextMenuEvent), e => !e.isStickyScroll), this.stickyScrollController?.onContextMenu ?? Event.None); }
    get onPointer() { return Event.map(this.view.onPointer, asTreeMouseEvent); }
    get onKeyDown() { return this.view.onKeyDown; }
    get onDidFocus() { return this.view.onDidFocus; }
    get onDidChangeModel() { return Event.any(this.onDidChangeModelRelay.event, this.onDidSwapModel.event); }
    get onDidChangeCollapseState() { return this.onDidChangeCollapseStateRelay.event; }
    get expandOnDoubleClick() { return typeof this._options.expandOnDoubleClick === 'undefined' ? true : this._options.expandOnDoubleClick; }
    get expandOnlyOnTwistieClick() { return typeof this._options.expandOnlyOnTwistieClick === 'undefined' ? true : this._options.expandOnlyOnTwistieClick; }
    get onDidDispose() { return this.view.onDidDispose; }
    constructor(_user, container, delegate, renderers, _options = {}) {
        this._user = _user;
        this._options = _options;
        this.eventBufferer = new EventBufferer();
        this.onDidChangeFindOpenState = Event.None;
        this.onDidChangeStickyScrollFocused = Event.None;
        this.disposables = new DisposableStore();
        this.onDidSwapModel = this.disposables.add(new Emitter());
        this.onDidChangeModelRelay = this.disposables.add(new Relay());
        this.onDidSpliceModelRelay = this.disposables.add(new Relay());
        this.onDidChangeCollapseStateRelay = this.disposables.add(new Relay());
        this.onDidChangeRenderNodeCountRelay = this.disposables.add(new Relay());
        this.onDidChangeActiveNodesRelay = this.disposables.add(new Relay());
        this._onWillRefilter = new Emitter();
        this.onWillRefilter = this._onWillRefilter.event;
        this._onDidUpdateOptions = new Emitter();
        this.modelDisposables = new DisposableStore();
        if (_options.keyboardNavigationLabelProvider && (_options.findWidgetEnabled ?? true)) {
            this.findFilter = new FindFilter(_options.keyboardNavigationLabelProvider, _options.filter, _options.defaultFindVisibility);
            _options = { ..._options, filter: this.findFilter }; // TODO need typescript help here
            this.disposables.add(this.findFilter);
        }
        this.model = this.createModel(_user, _options);
        this.treeDelegate = new ComposedTreeDelegate(delegate);
        const activeNodes = this.disposables.add(new EventCollection(this.onDidChangeActiveNodesRelay.event));
        const renderedIndentGuides = new SetMap();
        this.renderers = renderers.map(r => new TreeRenderer(r, this.model, this.onDidChangeCollapseStateRelay.event, activeNodes, renderedIndentGuides, _options));
        for (const r of this.renderers) {
            this.disposables.add(r);
        }
        this.focus = new Trait(() => this.view.getFocusedElements()[0], _options.identityProvider);
        this.selection = new Trait(() => this.view.getSelectedElements()[0], _options.identityProvider);
        this.anchor = new Trait(() => this.view.getAnchorElement(), _options.identityProvider);
        this.view = new TreeNodeList(_user, container, this.treeDelegate, this.renderers, this.focus, this.selection, this.anchor, { ...asListOptions(() => this.model, this.disposables, _options), tree: this, stickyScrollProvider: () => this.stickyScrollController });
        this.setupModel(this.model); // model needs to be setup after the traits have been created
        if (_options.keyboardSupport !== false) {
            const onKeyDown = Event.chain(this.view.onKeyDown, $ => $.filter(e => !isEditableElement(e.target))
                .map(e => new StandardKeyboardEvent(e)));
            Event.chain(onKeyDown, $ => $.filter(e => e.keyCode === 15 /* KeyCode.LeftArrow */))(this.onLeftArrow, this, this.disposables);
            Event.chain(onKeyDown, $ => $.filter(e => e.keyCode === 17 /* KeyCode.RightArrow */))(this.onRightArrow, this, this.disposables);
            Event.chain(onKeyDown, $ => $.filter(e => e.keyCode === 10 /* KeyCode.Space */))(this.onSpace, this, this.disposables);
        }
        if ((_options.findWidgetEnabled ?? true) && _options.keyboardNavigationLabelProvider && _options.contextViewProvider) {
            const findOptions = {
                styles: _options.findWidgetStyles,
                defaultFindMode: _options.defaultFindMode,
                defaultFindMatchType: _options.defaultFindMatchType,
                showNotFoundMessage: _options.showNotFoundMessage,
            };
            this.findController = this.disposables.add(new FindController(this, this.findFilter, _options.contextViewProvider, findOptions));
            this.focusNavigationFilter = node => this.findController.shouldAllowFocus(node);
            this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState;
            this.onDidChangeFindMode = this.findController.onDidChangeMode;
            this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
        }
        else {
            this.onDidChangeFindMode = Event.None;
            this.onDidChangeFindMatchType = Event.None;
        }
        if (_options.enableStickyScroll) {
            this.stickyScrollController = new StickyScrollController(this, this.model, this.view, this.renderers, this.treeDelegate, _options);
            this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus;
        }
        this.styleElement = createStyleSheet(this.view.getHTMLElement());
        this.getHTMLElement().classList.toggle('always', this._options.renderIndentGuides === RenderIndentGuides.Always);
    }
    updateOptions(optionsUpdate = {}) {
        this._options = { ...this._options, ...optionsUpdate };
        for (const renderer of this.renderers) {
            renderer.updateOptions(optionsUpdate);
        }
        this.view.updateOptions(this._options);
        this.findController?.updateOptions(optionsUpdate);
        this.updateStickyScroll(optionsUpdate);
        this._onDidUpdateOptions.fire(this._options);
        this.getHTMLElement().classList.toggle('always', this._options.renderIndentGuides === RenderIndentGuides.Always);
    }
    get options() {
        return this._options;
    }
    updateStickyScroll(optionsUpdate) {
        if (!this.stickyScrollController && this._options.enableStickyScroll) {
            this.stickyScrollController = new StickyScrollController(this, this.model, this.view, this.renderers, this.treeDelegate, this._options);
            this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus;
        }
        else if (this.stickyScrollController && !this._options.enableStickyScroll) {
            this.onDidChangeStickyScrollFocused = Event.None;
            this.stickyScrollController.dispose();
            this.stickyScrollController = undefined;
        }
        this.stickyScrollController?.updateOptions(optionsUpdate);
    }
    // Widget
    getHTMLElement() {
        return this.view.getHTMLElement();
    }
    get onDidChangeContentHeight() {
        return this.view.onDidChangeContentHeight;
    }
    get scrollTop() {
        return this.view.scrollTop;
    }
    set scrollTop(scrollTop) {
        this.view.scrollTop = scrollTop;
    }
    get scrollHeight() {
        return this.view.scrollHeight;
    }
    get renderHeight() {
        return this.view.renderHeight;
    }
    get ariaLabel() {
        return this.view.ariaLabel;
    }
    set ariaLabel(value) {
        this.view.ariaLabel = value;
    }
    domFocus() {
        if (this.stickyScrollController?.focusedLast()) {
            this.stickyScrollController.domFocus();
        }
        else {
            this.view.domFocus();
        }
    }
    layout(height, width) {
        this.view.layout(height, width);
    }
    style(styles) {
        const suffix = `.${this.view.domId}`;
        const content = [];
        if (styles.treeIndentGuidesStroke) {
            content.push(`.monaco-list${suffix}:hover .monaco-tl-indent > .indent-guide, .monaco-list${suffix}.always .monaco-tl-indent > .indent-guide  { opacity: 1; border-color: ${styles.treeInactiveIndentGuidesStroke}; }`);
            content.push(`.monaco-list${suffix} .monaco-tl-indent > .indent-guide.active { opacity: 1; border-color: ${styles.treeIndentGuidesStroke}; }`);
        }
        // Sticky Scroll Background
        const stickyScrollBackground = styles.treeStickyScrollBackground ?? styles.listBackground;
        if (stickyScrollBackground) {
            content.push(`.monaco-list${suffix} .monaco-scrollable-element .monaco-tree-sticky-container { background-color: ${stickyScrollBackground}; }`);
            content.push(`.monaco-list${suffix} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row { background-color: ${stickyScrollBackground}; }`);
        }
        // Sticky Scroll Border
        if (styles.treeStickyScrollBorder) {
            content.push(`.monaco-list${suffix} .monaco-scrollable-element .monaco-tree-sticky-container { border-bottom: 1px solid ${styles.treeStickyScrollBorder}; }`);
        }
        // Sticky Scroll Shadow
        if (styles.treeStickyScrollShadow) {
            content.push(`.monaco-list${suffix} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-container-shadow { box-shadow: ${styles.treeStickyScrollShadow} 0 6px 6px -6px inset; height: 3px; }`);
        }
        // Sticky Scroll Focus
        if (styles.listFocusForeground) {
            content.push(`.monaco-list${suffix}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { color: ${styles.listFocusForeground}; }`);
            content.push(`.monaco-list${suffix}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { color: inherit; }`);
        }
        // Sticky Scroll Focus Outlines
        const focusAndSelectionOutline = asCssValueWithDefault(styles.listFocusAndSelectionOutline, asCssValueWithDefault(styles.listSelectionOutline, styles.listFocusOutline ?? ''));
        if (focusAndSelectionOutline) { // default: listFocusOutline
            content.push(`.monaco-list${suffix}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused.selected { outline: 1px solid ${focusAndSelectionOutline}; outline-offset: -1px;}`);
            content.push(`.monaco-list${suffix}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused.selected { outline: inherit;}`);
        }
        if (styles.listFocusOutline) { // default: set
            content.push(`.monaco-list${suffix}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { outline: 1px solid ${styles.listFocusOutline}; outline-offset: -1px; }`);
            content.push(`.monaco-list${suffix}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { outline: inherit; }`);
            content.push(`.context-menu-visible .monaco-list${suffix}.last-focused.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.passive-focused { outline: 1px solid ${styles.listFocusOutline}; outline-offset: -1px; }`);
            content.push(`.context-menu-visible .monaco-list${suffix}.last-focused.sticky-scroll-focused .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`);
            content.push(`.context-menu-visible .monaco-list${suffix}.last-focused:not(.sticky-scroll-focused) .monaco-tree-sticky-container .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`);
        }
        this.styleElement.textContent = content.join('\n');
        this.view.style(styles);
    }
    // Tree navigation
    getParentElement(location) {
        const parentRef = this.model.getParentNodeLocation(location);
        const parentNode = this.model.getNode(parentRef);
        return parentNode.element;
    }
    getFirstElementChild(location) {
        return this.model.getFirstElementChild(location);
    }
    // Tree
    getNode(location) {
        return this.model.getNode(location);
    }
    getNodeLocation(node) {
        return this.model.getNodeLocation(node);
    }
    collapse(location, recursive = false) {
        return this.model.setCollapsed(location, true, recursive);
    }
    expand(location, recursive = false) {
        return this.model.setCollapsed(location, false, recursive);
    }
    toggleCollapsed(location, recursive = false) {
        return this.model.setCollapsed(location, undefined, recursive);
    }
    isCollapsible(location) {
        return this.model.isCollapsible(location);
    }
    setCollapsible(location, collapsible) {
        return this.model.setCollapsible(location, collapsible);
    }
    isCollapsed(location) {
        return this.model.isCollapsed(location);
    }
    refilter() {
        this._onWillRefilter.fire(undefined);
        this.model.refilter();
    }
    setSelection(elements, browserEvent) {
        this.eventBufferer.bufferEvents(() => {
            const nodes = elements.map(e => this.model.getNode(e));
            this.selection.set(nodes, browserEvent);
            const indexes = elements.map(e => this.model.getListIndex(e)).filter(i => i > -1);
            this.view.setSelection(indexes, browserEvent, true);
        });
    }
    getSelection() {
        return this.selection.get();
    }
    setFocus(elements, browserEvent) {
        this.eventBufferer.bufferEvents(() => {
            const nodes = elements.map(e => this.model.getNode(e));
            this.focus.set(nodes, browserEvent);
            const indexes = elements.map(e => this.model.getListIndex(e)).filter(i => i > -1);
            this.view.setFocus(indexes, browserEvent, true);
        });
    }
    focusNext(n = 1, loop = false, browserEvent, filter = (isKeyboardEvent(browserEvent) && browserEvent.altKey) ? undefined : this.focusNavigationFilter) {
        this.view.focusNext(n, loop, browserEvent, filter);
    }
    focusPrevious(n = 1, loop = false, browserEvent, filter = (isKeyboardEvent(browserEvent) && browserEvent.altKey) ? undefined : this.focusNavigationFilter) {
        this.view.focusPrevious(n, loop, browserEvent, filter);
    }
    focusNextPage(browserEvent, filter = (isKeyboardEvent(browserEvent) && browserEvent.altKey) ? undefined : this.focusNavigationFilter) {
        return this.view.focusNextPage(browserEvent, filter);
    }
    focusPreviousPage(browserEvent, filter = (isKeyboardEvent(browserEvent) && browserEvent.altKey) ? undefined : this.focusNavigationFilter) {
        return this.view.focusPreviousPage(browserEvent, filter, () => this.stickyScrollController?.height ?? 0);
    }
    focusLast(browserEvent, filter = (isKeyboardEvent(browserEvent) && browserEvent.altKey) ? undefined : this.focusNavigationFilter) {
        this.view.focusLast(browserEvent, filter);
    }
    focusFirst(browserEvent, filter = (isKeyboardEvent(browserEvent) && browserEvent.altKey) ? undefined : this.focusNavigationFilter) {
        this.view.focusFirst(browserEvent, filter);
    }
    getFocus() {
        return this.focus.get();
    }
    reveal(location, relativeTop) {
        this.model.expandTo(location);
        const index = this.model.getListIndex(location);
        if (index === -1) {
            return;
        }
        if (!this.stickyScrollController) {
            this.view.reveal(index, relativeTop);
        }
        else {
            const paddingTop = this.stickyScrollController.nodePositionTopBelowWidget(this.getNode(location));
            this.view.reveal(index, relativeTop, paddingTop);
        }
    }
    // List
    onLeftArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        const nodes = this.view.getFocusedElements();
        if (nodes.length === 0) {
            return;
        }
        const node = nodes[0];
        const location = this.model.getNodeLocation(node);
        const didChange = this.model.setCollapsed(location, true);
        if (!didChange) {
            const parentLocation = this.model.getParentNodeLocation(location);
            if (!parentLocation) {
                return;
            }
            const parentListIndex = this.model.getListIndex(parentLocation);
            this.view.reveal(parentListIndex);
            this.view.setFocus([parentListIndex]);
        }
    }
    onRightArrow(e) {
        e.preventDefault();
        e.stopPropagation();
        const nodes = this.view.getFocusedElements();
        if (nodes.length === 0) {
            return;
        }
        const node = nodes[0];
        const location = this.model.getNodeLocation(node);
        const didChange = this.model.setCollapsed(location, false);
        if (!didChange) {
            if (!node.children.some(child => child.visible)) {
                return;
            }
            const [focusedIndex] = this.view.getFocus();
            const firstChildIndex = focusedIndex + 1;
            this.view.reveal(firstChildIndex);
            this.view.setFocus([firstChildIndex]);
        }
    }
    onSpace(e) {
        e.preventDefault();
        e.stopPropagation();
        const nodes = this.view.getFocusedElements();
        if (nodes.length === 0) {
            return;
        }
        const node = nodes[0];
        const location = this.model.getNodeLocation(node);
        const recursive = e.browserEvent.altKey;
        this.model.setCollapsed(location, undefined, recursive);
    }
    setupModel(model) {
        this.modelDisposables.clear();
        this.modelDisposables.add(model.onDidSpliceRenderedNodes(({ start, deleteCount, elements }) => this.view.splice(start, deleteCount, elements)));
        const onDidModelSplice = Event.forEach(model.onDidSpliceModel, e => {
            this.eventBufferer.bufferEvents(() => {
                this.focus.onDidModelSplice(e);
                this.selection.onDidModelSplice(e);
            });
        }, this.modelDisposables);
        // Make sure the `forEach` always runs
        onDidModelSplice(() => null, null, this.modelDisposables);
        // Active nodes can change when the model changes or when focus or selection change.
        // We debounce it with 0 delay since these events may fire in the same stack and we only
        // want to run this once. It also doesn't matter if it runs on the next tick since it's only
        // a nice to have UI feature.
        const activeNodesEmitter = this.modelDisposables.add(new Emitter());
        const activeNodesDebounce = this.modelDisposables.add(new Delayer(0));
        this.modelDisposables.add(Event.any(onDidModelSplice, this.focus.onDidChange, this.selection.onDidChange)(() => {
            activeNodesDebounce.trigger(() => {
                const set = new Set();
                for (const node of this.focus.getNodes()) {
                    set.add(node);
                }
                for (const node of this.selection.getNodes()) {
                    set.add(node);
                }
                activeNodesEmitter.fire([...set.values()]);
            });
        }));
        this.onDidChangeActiveNodesRelay.input = activeNodesEmitter.event;
        this.onDidChangeModelRelay.input = Event.signal(model.onDidSpliceModel);
        this.onDidChangeCollapseStateRelay.input = model.onDidChangeCollapseState;
        this.onDidChangeRenderNodeCountRelay.input = model.onDidChangeRenderNodeCount;
        this.onDidSpliceModelRelay.input = model.onDidSpliceModel;
    }
    dispose() {
        dispose(this.disposables);
        this.stickyScrollController?.dispose();
        this.view.dispose();
        this.modelDisposables.dispose();
    }
}

export { AbstractFindController, AbstractTree, ComposedTreeDelegate, FindController, FindFilter, FindToggles, RenderIndentGuides, TreeFindMatchType, TreeFindMode, TreeRenderer, contiguousFuzzyScore };
