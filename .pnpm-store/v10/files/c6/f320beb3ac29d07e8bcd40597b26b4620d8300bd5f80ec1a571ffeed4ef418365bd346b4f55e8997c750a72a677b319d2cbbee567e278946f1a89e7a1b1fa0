import { isKeyboardEvent, isActiveElement } from '../../../base/browser/dom.js';
import { PagedList } from '../../../base/browser/ui/list/listPaging.js';
import { List, isSelectionSingleChangeEvent, isSelectionRangeChangeEvent, TypeNavigationMode } from '../../../base/browser/ui/list/listWidget.js';
import { Table } from '../../../base/browser/ui/table/tableWidget.js';
import { TreeFindMode, TreeFindMatchType } from '../../../base/browser/ui/tree/abstractTree.js';
import { AsyncDataTree, CompressibleAsyncDataTree } from '../../../base/browser/ui/tree/asyncDataTree.js';
import { DataTree } from '../../../base/browser/ui/tree/dataTree.js';
import { ObjectTree, CompressibleObjectTree } from '../../../base/browser/ui/tree/objectTree.js';
import { Emitter, Event } from '../../../base/common/event.js';
import { DisposableStore, dispose, Disposable, combinedDisposable, toDisposable } from '../../../base/common/lifecycle.js';
import { localize } from '../../../nls.js';
import { IConfigurationService } from '../../configuration/common/configuration.js';
import { Extensions } from '../../configuration/common/configurationRegistry.js';
import { RawContextKey, ContextKeyExpr, IContextKeyService } from '../../contextkey/common/contextkey.js';
import { InputFocusedContextKey } from '../../contextkey/common/contextkeys.js';
import { IContextViewService } from '../../contextview/browser/contextView.js';
import { createDecorator, IInstantiationService } from '../../instantiation/common/instantiation.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';
import { Registry } from '../../registry/common/platform.js';
import { getListStyles, defaultListStyles, defaultFindWidgetStyles } from '../../theme/browser/defaultStyles.js';

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
const IListService = createDecorator('listService');
class ListService {
    get lastFocusedList() {
        return this._lastFocusedWidget;
    }
    constructor() {
        this.disposables = new DisposableStore();
        this.lists = [];
        this._lastFocusedWidget = undefined;
    }
    setLastFocusedList(widget) {
        if (widget === this._lastFocusedWidget) {
            return;
        }
        this._lastFocusedWidget?.getHTMLElement().classList.remove('last-focused');
        this._lastFocusedWidget = widget;
        this._lastFocusedWidget?.getHTMLElement().classList.add('last-focused');
    }
    register(widget, extraContextKeys) {
        if (this.lists.some(l => l.widget === widget)) {
            throw new Error('Cannot register the same widget multiple times');
        }
        // Keep in our lists list
        const registeredList = { widget, extraContextKeys };
        this.lists.push(registeredList);
        // Check for currently being focused
        if (isActiveElement(widget.getHTMLElement())) {
            this.setLastFocusedList(widget);
        }
        return combinedDisposable(widget.onDidFocus(() => this.setLastFocusedList(widget)), toDisposable(() => this.lists.splice(this.lists.indexOf(registeredList), 1)), widget.onDidDispose(() => {
            this.lists = this.lists.filter(l => l !== registeredList);
            if (this._lastFocusedWidget === widget) {
                this.setLastFocusedList(undefined);
            }
        }));
    }
    dispose() {
        this.disposables.dispose();
    }
}
const RawWorkbenchListScrollAtBoundaryContextKey = new RawContextKey('listScrollAtBoundary', 'none');
ContextKeyExpr.or(RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('top'), RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('both'));
ContextKeyExpr.or(RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('bottom'), RawWorkbenchListScrollAtBoundaryContextKey.isEqualTo('both'));
const RawWorkbenchListFocusContextKey = new RawContextKey('listFocus', true);
const WorkbenchTreeStickyScrollFocused = new RawContextKey('treestickyScrollFocused', false);
const WorkbenchListSupportsMultiSelectContextKey = new RawContextKey('listSupportsMultiselect', true);
const WorkbenchListFocusContextKey = ContextKeyExpr.and(RawWorkbenchListFocusContextKey, ContextKeyExpr.not(InputFocusedContextKey), WorkbenchTreeStickyScrollFocused.negate());
const WorkbenchListHasSelectionOrFocus = new RawContextKey('listHasSelectionOrFocus', false);
const WorkbenchListDoubleSelection = new RawContextKey('listDoubleSelection', false);
const WorkbenchListMultiSelection = new RawContextKey('listMultiSelection', false);
const WorkbenchListSelectionNavigation = new RawContextKey('listSelectionNavigation', false);
const WorkbenchListSupportsFind = new RawContextKey('listSupportsFind', true);
const WorkbenchTreeElementCanCollapse = new RawContextKey('treeElementCanCollapse', false);
const WorkbenchTreeElementHasParent = new RawContextKey('treeElementHasParent', false);
const WorkbenchTreeElementCanExpand = new RawContextKey('treeElementCanExpand', false);
const WorkbenchTreeElementHasChild = new RawContextKey('treeElementHasChild', false);
const WorkbenchTreeFindOpen = new RawContextKey('treeFindOpen', false);
const WorkbenchListTypeNavigationModeKey = 'listTypeNavigationMode';
/**
 * @deprecated in favor of WorkbenchListTypeNavigationModeKey
 */
const WorkbenchListAutomaticKeyboardNavigationLegacyKey = 'listAutomaticKeyboardNavigation';
function createScopedContextKeyService(contextKeyService, widget) {
    const result = contextKeyService.createScoped(widget.getHTMLElement());
    RawWorkbenchListFocusContextKey.bindTo(result);
    return result;
}
function createScrollObserver(contextKeyService, widget) {
    const listScrollAt = RawWorkbenchListScrollAtBoundaryContextKey.bindTo(contextKeyService);
    const update = () => {
        const atTop = widget.scrollTop === 0;
        // We need a threshold `1` since scrollHeight is rounded.
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
        const atBottom = widget.scrollHeight - widget.renderHeight - widget.scrollTop < 1;
        if (atTop && atBottom) {
            listScrollAt.set('both');
        }
        else if (atTop) {
            listScrollAt.set('top');
        }
        else if (atBottom) {
            listScrollAt.set('bottom');
        }
        else {
            listScrollAt.set('none');
        }
    };
    update();
    return widget.onDidScroll(update);
}
const multiSelectModifierSettingKey = 'workbench.list.multiSelectModifier';
const openModeSettingKey = 'workbench.list.openMode';
const horizontalScrollingKey = 'workbench.list.horizontalScrolling';
const defaultFindModeSettingKey = 'workbench.list.defaultFindMode';
const typeNavigationModeSettingKey = 'workbench.list.typeNavigationMode';
/** @deprecated in favor of `workbench.list.defaultFindMode` and `workbench.list.typeNavigationMode` */
const keyboardNavigationSettingKey = 'workbench.list.keyboardNavigation';
const scrollByPageKey = 'workbench.list.scrollByPage';
const defaultFindMatchTypeSettingKey = 'workbench.list.defaultFindMatchType';
const treeIndentKey = 'workbench.tree.indent';
const treeRenderIndentGuidesKey = 'workbench.tree.renderIndentGuides';
const listSmoothScrolling = 'workbench.list.smoothScrolling';
const mouseWheelScrollSensitivityKey = 'workbench.list.mouseWheelScrollSensitivity';
const fastScrollSensitivityKey = 'workbench.list.fastScrollSensitivity';
const treeExpandMode = 'workbench.tree.expandMode';
const treeStickyScroll = 'workbench.tree.enableStickyScroll';
const treeStickyScrollMaxElements = 'workbench.tree.stickyScrollMaxItemCount';
function useAltAsMultipleSelectionModifier(configurationService) {
    return configurationService.getValue(multiSelectModifierSettingKey) === 'alt';
}
class MultipleSelectionController extends Disposable {
    constructor(configurationService) {
        super();
        this.configurationService = configurationService;
        this.useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.registerListeners();
    }
    registerListeners() {
        this._register(this.configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this.useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(this.configurationService);
            }
        }));
    }
    isSelectionSingleChangeEvent(event) {
        if (this.useAltAsMultipleSelectionModifier) {
            return event.browserEvent.altKey;
        }
        return isSelectionSingleChangeEvent(event);
    }
    isSelectionRangeChangeEvent(event) {
        return isSelectionRangeChangeEvent(event);
    }
}
function toWorkbenchListOptions(accessor, options) {
    const configurationService = accessor.get(IConfigurationService);
    const keybindingService = accessor.get(IKeybindingService);
    const disposables = new DisposableStore();
    const result = {
        ...options,
        keyboardNavigationDelegate: { mightProducePrintableCharacter(e) { return keybindingService.mightProducePrintableCharacter(e); } },
        smoothScrolling: Boolean(configurationService.getValue(listSmoothScrolling)),
        mouseWheelScrollSensitivity: configurationService.getValue(mouseWheelScrollSensitivityKey),
        fastScrollSensitivity: configurationService.getValue(fastScrollSensitivityKey),
        multipleSelectionController: options.multipleSelectionController ?? disposables.add(new MultipleSelectionController(configurationService)),
        keyboardNavigationEventFilter: createKeyboardNavigationEventFilter(keybindingService),
        scrollByPage: Boolean(configurationService.getValue(scrollByPageKey))
    };
    return [result, disposables];
}
let WorkbenchList = class WorkbenchList extends List {
    constructor(user, container, delegate, renderers, options, contextKeyService, listService, configurationService, instantiationService) {
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, renderers, {
            keyboardSupport: false,
            ...workbenchListOptions,
            horizontalScrolling,
        });
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listHasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.listDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.listMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.horizontalScrolling = options.horizontalScrolling;
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(this.onDidChangeSelection(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.contextKeyService.bufferChangeEvents(() => {
                this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.listMultiSelection.set(selection.length > 1);
                this.listDoubleSelection.set(selection.length === 2);
            });
        }));
        this.disposables.add(this.onDidChangeFocus(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
        }));
        this.disposables.add(configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = { ...options, horizontalScrolling };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = { ...options, scrollByPage };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = { ...options, smoothScrolling };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = { ...options, mouseWheelScrollSensitivity };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = { ...options, fastScrollSensitivity };
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new ListResourceNavigator(this, { configurationService, ...options });
        this.disposables.add(this.navigator);
    }
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? getListStyles(styles) : defaultListStyles);
    }
};
WorkbenchList = __decorate([
    __param(5, IContextKeyService),
    __param(6, IListService),
    __param(7, IConfigurationService),
    __param(8, IInstantiationService)
], WorkbenchList);
let WorkbenchPagedList = class WorkbenchPagedList extends PagedList {
    constructor(user, container, delegate, renderers, options, contextKeyService, listService, configurationService, instantiationService) {
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, renderers, {
            keyboardSupport: false,
            ...workbenchListOptions,
            horizontalScrolling,
        });
        this.disposables = new DisposableStore();
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this.widget));
        this.horizontalScrolling = options.horizontalScrolling;
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = { ...options, horizontalScrolling };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = { ...options, scrollByPage };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = { ...options, smoothScrolling };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = { ...options, mouseWheelScrollSensitivity };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = { ...options, fastScrollSensitivity };
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new ListResourceNavigator(this, { configurationService, ...options });
        this.disposables.add(this.navigator);
    }
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? getListStyles(styles) : defaultListStyles);
    }
    dispose() {
        this.disposables.dispose();
        super.dispose();
    }
};
WorkbenchPagedList = __decorate([
    __param(5, IContextKeyService),
    __param(6, IListService),
    __param(7, IConfigurationService),
    __param(8, IInstantiationService)
], WorkbenchPagedList);
let WorkbenchTable = class WorkbenchTable extends Table {
    constructor(user, container, delegate, columns, renderers, options, contextKeyService, listService, configurationService, instantiationService) {
        const horizontalScrolling = typeof options.horizontalScrolling !== 'undefined' ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
        const [workbenchListOptions, workbenchListOptionsDisposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
        super(user, container, delegate, columns, renderers, {
            keyboardSupport: false,
            ...workbenchListOptions,
            horizontalScrolling,
        });
        this.disposables.add(workbenchListOptionsDisposable);
        this.contextKeyService = createScopedContextKeyService(contextKeyService, this);
        this.disposables.add(createScrollObserver(this.contextKeyService, this));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listHasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.listDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.listMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.horizontalScrolling = options.horizontalScrolling;
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.disposables.add(this.contextKeyService);
        this.disposables.add(listService.register(this));
        this.updateStyles(options.overrideStyles);
        this.disposables.add(this.onDidChangeSelection(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.contextKeyService.bufferChangeEvents(() => {
                this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.listMultiSelection.set(selection.length > 1);
                this.listDoubleSelection.set(selection.length === 2);
            });
        }));
        this.disposables.add(this.onDidChangeFocus(() => {
            const selection = this.getSelection();
            const focus = this.getFocus();
            this.listHasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
        }));
        this.disposables.add(configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            let options = {};
            if (e.affectsConfiguration(horizontalScrollingKey) && this.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                options = { ...options, horizontalScrolling };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                options = { ...options, scrollByPage };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                options = { ...options, smoothScrolling };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                options = { ...options, mouseWheelScrollSensitivity };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                options = { ...options, fastScrollSensitivity };
            }
            if (Object.keys(options).length > 0) {
                this.updateOptions(options);
            }
        }));
        this.navigator = new TableResourceNavigator(this, { configurationService, ...options });
        this.disposables.add(this.navigator);
    }
    updateOptions(options) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.updateStyles(options.overrideStyles);
        }
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyles(styles) {
        this.style(styles ? getListStyles(styles) : defaultListStyles);
    }
    dispose() {
        this.disposables.dispose();
        super.dispose();
    }
};
WorkbenchTable = __decorate([
    __param(6, IContextKeyService),
    __param(7, IListService),
    __param(8, IConfigurationService),
    __param(9, IInstantiationService)
], WorkbenchTable);
class ResourceNavigator extends Disposable {
    constructor(widget, options) {
        super();
        this.widget = widget;
        this._onDidOpen = this._register(new Emitter());
        this.onDidOpen = this._onDidOpen.event;
        this._register(Event.filter(this.widget.onDidChangeSelection, e => isKeyboardEvent(e.browserEvent))(e => this.onSelectionFromKeyboard(e)));
        this._register(this.widget.onPointer((e) => this.onPointer(e.element, e.browserEvent)));
        this._register(this.widget.onMouseDblClick((e) => this.onMouseDblClick(e.element, e.browserEvent)));
        if (typeof options?.openOnSingleClick !== 'boolean' && options?.configurationService) {
            this.openOnSingleClick = options?.configurationService.getValue(openModeSettingKey) !== 'doubleClick';
            this._register(options?.configurationService.onDidChangeConfiguration(e => {
                if (e.affectsConfiguration(openModeSettingKey)) {
                    this.openOnSingleClick = options?.configurationService.getValue(openModeSettingKey) !== 'doubleClick';
                }
            }));
        }
        else {
            this.openOnSingleClick = options?.openOnSingleClick ?? true;
        }
    }
    onSelectionFromKeyboard(event) {
        if (event.elements.length !== 1) {
            return;
        }
        const selectionKeyboardEvent = event.browserEvent;
        const preserveFocus = typeof selectionKeyboardEvent.preserveFocus === 'boolean' ? selectionKeyboardEvent.preserveFocus : true;
        const pinned = typeof selectionKeyboardEvent.pinned === 'boolean' ? selectionKeyboardEvent.pinned : !preserveFocus;
        const sideBySide = false;
        this._open(this.getSelectedElement(), preserveFocus, pinned, sideBySide, event.browserEvent);
    }
    onPointer(element, browserEvent) {
        if (!this.openOnSingleClick) {
            return;
        }
        const isDoubleClick = browserEvent.detail === 2;
        if (isDoubleClick) {
            return;
        }
        const isMiddleClick = browserEvent.button === 1;
        const preserveFocus = true;
        const pinned = isMiddleClick;
        const sideBySide = browserEvent.ctrlKey || browserEvent.metaKey || browserEvent.altKey;
        this._open(element, preserveFocus, pinned, sideBySide, browserEvent);
    }
    onMouseDblClick(element, browserEvent) {
        if (!browserEvent) {
            return;
        }
        // copied from AbstractTree
        const target = browserEvent.target;
        const onTwistie = target.classList.contains('monaco-tl-twistie')
            || (target.classList.contains('monaco-icon-label') && target.classList.contains('folder-icon') && browserEvent.offsetX < 16);
        if (onTwistie) {
            return;
        }
        const preserveFocus = false;
        const pinned = true;
        const sideBySide = (browserEvent.ctrlKey || browserEvent.metaKey || browserEvent.altKey);
        this._open(element, preserveFocus, pinned, sideBySide, browserEvent);
    }
    _open(element, preserveFocus, pinned, sideBySide, browserEvent) {
        if (!element) {
            return;
        }
        this._onDidOpen.fire({
            editorOptions: {
                preserveFocus,
                pinned,
                revealIfVisible: true
            },
            sideBySide,
            element,
            browserEvent
        });
    }
}
class ListResourceNavigator extends ResourceNavigator {
    constructor(widget, options) {
        super(widget, options);
        this.widget = widget;
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}
class TableResourceNavigator extends ResourceNavigator {
    constructor(widget, options) {
        super(widget, options);
    }
    getSelectedElement() {
        return this.widget.getSelectedElements()[0];
    }
}
class TreeResourceNavigator extends ResourceNavigator {
    constructor(widget, options) {
        super(widget, options);
    }
    getSelectedElement() {
        return this.widget.getSelection()[0] ?? undefined;
    }
}
function createKeyboardNavigationEventFilter(keybindingService) {
    let inMultiChord = false;
    return event => {
        if (event.toKeyCodeChord().isModifierKey()) {
            return false;
        }
        if (inMultiChord) {
            inMultiChord = false;
            return false;
        }
        const result = keybindingService.softDispatch(event, event.target);
        if (result.kind === 1 /* ResultKind.MoreChordsNeeded */) {
            inMultiChord = true;
            return false;
        }
        inMultiChord = false;
        return result.kind === 0 /* ResultKind.NoMatchingKb */;
    };
}
let WorkbenchObjectTree = class WorkbenchObjectTree extends ObjectTree {
    get onDidOpen() { return this.internals.onDidOpen; }
    constructor(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, configurationService) {
        // eslint-disable-next-line local/code-no-any-casts
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options) {
        super.updateOptions(options);
        this.internals.updateOptions(options);
    }
};
WorkbenchObjectTree = __decorate([
    __param(5, IInstantiationService),
    __param(6, IContextKeyService),
    __param(7, IListService),
    __param(8, IConfigurationService)
], WorkbenchObjectTree);
let WorkbenchCompressibleObjectTree = class WorkbenchCompressibleObjectTree extends CompressibleObjectTree {
    constructor(user, container, delegate, renderers, options, instantiationService, contextKeyService, listService, configurationService) {
        // eslint-disable-next-line local/code-no-any-casts
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options = {}) {
        super.updateOptions(options);
        if (options.overrideStyles) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
};
WorkbenchCompressibleObjectTree = __decorate([
    __param(5, IInstantiationService),
    __param(6, IContextKeyService),
    __param(7, IListService),
    __param(8, IConfigurationService)
], WorkbenchCompressibleObjectTree);
let WorkbenchDataTree = class WorkbenchDataTree extends DataTree {
    constructor(user, container, delegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService) {
        // eslint-disable-next-line local/code-no-any-casts
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options = {}) {
        super.updateOptions(options);
        if (options.overrideStyles !== undefined) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
};
WorkbenchDataTree = __decorate([
    __param(6, IInstantiationService),
    __param(7, IContextKeyService),
    __param(8, IListService),
    __param(9, IConfigurationService)
], WorkbenchDataTree);
let WorkbenchAsyncDataTree = class WorkbenchAsyncDataTree extends AsyncDataTree {
    get onDidOpen() { return this.internals.onDidOpen; }
    constructor(user, container, delegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService) {
        // eslint-disable-next-line local/code-no-any-casts
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, delegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options = {}) {
        super.updateOptions(options);
        if (options.overrideStyles) {
            this.internals.updateStyleOverrides(options.overrideStyles);
        }
        this.internals.updateOptions(options);
    }
};
WorkbenchAsyncDataTree = __decorate([
    __param(6, IInstantiationService),
    __param(7, IContextKeyService),
    __param(8, IListService),
    __param(9, IConfigurationService)
], WorkbenchAsyncDataTree);
let WorkbenchCompressibleAsyncDataTree = class WorkbenchCompressibleAsyncDataTree extends CompressibleAsyncDataTree {
    constructor(user, container, virtualDelegate, compressionDelegate, renderers, dataSource, options, instantiationService, contextKeyService, listService, configurationService) {
        // eslint-disable-next-line local/code-no-any-casts
        const { options: treeOptions, getTypeNavigationMode, disposable } = instantiationService.invokeFunction(workbenchTreeDataPreamble, options);
        super(user, container, virtualDelegate, compressionDelegate, renderers, dataSource, treeOptions);
        this.disposables.add(disposable);
        this.internals = new WorkbenchTreeInternals(this, options, getTypeNavigationMode, options.overrideStyles, contextKeyService, listService, configurationService);
        this.disposables.add(this.internals);
    }
    updateOptions(options) {
        super.updateOptions(options);
        this.internals.updateOptions(options);
    }
};
WorkbenchCompressibleAsyncDataTree = __decorate([
    __param(7, IInstantiationService),
    __param(8, IContextKeyService),
    __param(9, IListService),
    __param(10, IConfigurationService)
], WorkbenchCompressibleAsyncDataTree);
function getDefaultTreeFindMode(configurationService) {
    const value = configurationService.getValue(defaultFindModeSettingKey);
    if (value === 'highlight') {
        return TreeFindMode.Highlight;
    }
    else if (value === 'filter') {
        return TreeFindMode.Filter;
    }
    const deprecatedValue = configurationService.getValue(keyboardNavigationSettingKey);
    if (deprecatedValue === 'simple' || deprecatedValue === 'highlight') {
        return TreeFindMode.Highlight;
    }
    else if (deprecatedValue === 'filter') {
        return TreeFindMode.Filter;
    }
    return undefined;
}
function getDefaultTreeFindMatchType(configurationService) {
    const value = configurationService.getValue(defaultFindMatchTypeSettingKey);
    if (value === 'fuzzy') {
        return TreeFindMatchType.Fuzzy;
    }
    else if (value === 'contiguous') {
        return TreeFindMatchType.Contiguous;
    }
    return undefined;
}
function workbenchTreeDataPreamble(accessor, options) {
    const configurationService = accessor.get(IConfigurationService);
    const contextViewService = accessor.get(IContextViewService);
    const contextKeyService = accessor.get(IContextKeyService);
    const instantiationService = accessor.get(IInstantiationService);
    const getTypeNavigationMode = () => {
        // give priority to the context key value to specify a value
        const modeString = contextKeyService.getContextKeyValue(WorkbenchListTypeNavigationModeKey);
        if (modeString === 'automatic') {
            return TypeNavigationMode.Automatic;
        }
        else if (modeString === 'trigger') {
            return TypeNavigationMode.Trigger;
        }
        // also check the deprecated context key to set the mode to 'trigger'
        const modeBoolean = contextKeyService.getContextKeyValue(WorkbenchListAutomaticKeyboardNavigationLegacyKey);
        if (modeBoolean === false) {
            return TypeNavigationMode.Trigger;
        }
        // finally, check the setting
        const configString = configurationService.getValue(typeNavigationModeSettingKey);
        if (configString === 'automatic') {
            return TypeNavigationMode.Automatic;
        }
        else if (configString === 'trigger') {
            return TypeNavigationMode.Trigger;
        }
        return undefined;
    };
    const horizontalScrolling = options.horizontalScrolling !== undefined ? options.horizontalScrolling : Boolean(configurationService.getValue(horizontalScrollingKey));
    const [workbenchListOptions, disposable] = instantiationService.invokeFunction(toWorkbenchListOptions, options);
    const paddingBottom = options.paddingBottom;
    const renderIndentGuides = options.renderIndentGuides !== undefined ? options.renderIndentGuides : configurationService.getValue(treeRenderIndentGuidesKey);
    return {
        getTypeNavigationMode,
        disposable,
        // eslint-disable-next-line local/code-no-dangerous-type-assertions
        options: {
            // ...options, // TODO@Joao why is this not splatted here?
            keyboardSupport: false,
            ...workbenchListOptions,
            indent: typeof configurationService.getValue(treeIndentKey) === 'number' ? configurationService.getValue(treeIndentKey) : undefined,
            renderIndentGuides,
            smoothScrolling: Boolean(configurationService.getValue(listSmoothScrolling)),
            defaultFindMode: options.defaultFindMode ?? getDefaultTreeFindMode(configurationService),
            defaultFindMatchType: options.defaultFindMatchType ?? getDefaultTreeFindMatchType(configurationService),
            horizontalScrolling,
            scrollByPage: Boolean(configurationService.getValue(scrollByPageKey)),
            paddingBottom: paddingBottom,
            hideTwistiesOfChildlessElements: options.hideTwistiesOfChildlessElements,
            expandOnlyOnTwistieClick: options.expandOnlyOnTwistieClick ?? (configurationService.getValue(treeExpandMode) === 'doubleClick'),
            contextViewProvider: contextViewService,
            findWidgetStyles: defaultFindWidgetStyles,
            enableStickyScroll: Boolean(configurationService.getValue(treeStickyScroll)),
            stickyScrollMaxItemCount: Number(configurationService.getValue(treeStickyScrollMaxElements)),
        }
    };
}
let WorkbenchTreeInternals = class WorkbenchTreeInternals {
    get onDidOpen() { return this.navigator.onDidOpen; }
    constructor(tree, options, getTypeNavigationMode, overrideStyles, contextKeyService, listService, configurationService) {
        this.tree = tree;
        this.disposables = [];
        this.contextKeyService = createScopedContextKeyService(contextKeyService, tree);
        this.disposables.push(createScrollObserver(this.contextKeyService, tree));
        this.listSupportsMultiSelect = WorkbenchListSupportsMultiSelectContextKey.bindTo(this.contextKeyService);
        this.listSupportsMultiSelect.set(options.multipleSelectionSupport !== false);
        const listSelectionNavigation = WorkbenchListSelectionNavigation.bindTo(this.contextKeyService);
        listSelectionNavigation.set(Boolean(options.selectionNavigation));
        this.listSupportFindWidget = WorkbenchListSupportsFind.bindTo(this.contextKeyService);
        this.listSupportFindWidget.set(options.findWidgetEnabled ?? true);
        this.hasSelectionOrFocus = WorkbenchListHasSelectionOrFocus.bindTo(this.contextKeyService);
        this.hasDoubleSelection = WorkbenchListDoubleSelection.bindTo(this.contextKeyService);
        this.hasMultiSelection = WorkbenchListMultiSelection.bindTo(this.contextKeyService);
        this.treeElementCanCollapse = WorkbenchTreeElementCanCollapse.bindTo(this.contextKeyService);
        this.treeElementHasParent = WorkbenchTreeElementHasParent.bindTo(this.contextKeyService);
        this.treeElementCanExpand = WorkbenchTreeElementCanExpand.bindTo(this.contextKeyService);
        this.treeElementHasChild = WorkbenchTreeElementHasChild.bindTo(this.contextKeyService);
        this.treeFindOpen = WorkbenchTreeFindOpen.bindTo(this.contextKeyService);
        this.treeStickyScrollFocused = WorkbenchTreeStickyScrollFocused.bindTo(this.contextKeyService);
        this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
        this.updateStyleOverrides(overrideStyles);
        const updateCollapseContextKeys = () => {
            const focus = tree.getFocus()[0];
            if (!focus) {
                return;
            }
            const node = tree.getNode(focus);
            this.treeElementCanCollapse.set(node.collapsible && !node.collapsed);
            this.treeElementHasParent.set(!!tree.getParentElement(focus));
            this.treeElementCanExpand.set(node.collapsible && node.collapsed);
            this.treeElementHasChild.set(!!tree.getFirstElementChild(focus));
        };
        const interestingContextKeys = new Set();
        interestingContextKeys.add(WorkbenchListTypeNavigationModeKey);
        interestingContextKeys.add(WorkbenchListAutomaticKeyboardNavigationLegacyKey);
        this.disposables.push(this.contextKeyService, listService.register(tree), tree.onDidChangeSelection(() => {
            const selection = tree.getSelection();
            const focus = tree.getFocus();
            this.contextKeyService.bufferChangeEvents(() => {
                this.hasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
                this.hasMultiSelection.set(selection.length > 1);
                this.hasDoubleSelection.set(selection.length === 2);
            });
        }), tree.onDidChangeFocus(() => {
            const selection = tree.getSelection();
            const focus = tree.getFocus();
            this.hasSelectionOrFocus.set(selection.length > 0 || focus.length > 0);
            updateCollapseContextKeys();
        }), tree.onDidChangeCollapseState(updateCollapseContextKeys), tree.onDidChangeModel(updateCollapseContextKeys), tree.onDidChangeFindOpenState(enabled => this.treeFindOpen.set(enabled)), tree.onDidChangeStickyScrollFocused(focused => this.treeStickyScrollFocused.set(focused)), configurationService.onDidChangeConfiguration(e => {
            let newOptions = {};
            if (e.affectsConfiguration(multiSelectModifierSettingKey)) {
                this._useAltAsMultipleSelectionModifier = useAltAsMultipleSelectionModifier(configurationService);
            }
            if (e.affectsConfiguration(treeIndentKey)) {
                const indent = configurationService.getValue(treeIndentKey);
                newOptions = { ...newOptions, indent };
            }
            if (e.affectsConfiguration(treeRenderIndentGuidesKey) && options.renderIndentGuides === undefined) {
                const renderIndentGuides = configurationService.getValue(treeRenderIndentGuidesKey);
                newOptions = { ...newOptions, renderIndentGuides };
            }
            if (e.affectsConfiguration(listSmoothScrolling)) {
                const smoothScrolling = Boolean(configurationService.getValue(listSmoothScrolling));
                newOptions = { ...newOptions, smoothScrolling };
            }
            if (e.affectsConfiguration(defaultFindModeSettingKey) || e.affectsConfiguration(keyboardNavigationSettingKey)) {
                const defaultFindMode = getDefaultTreeFindMode(configurationService);
                newOptions = { ...newOptions, defaultFindMode };
            }
            if (e.affectsConfiguration(typeNavigationModeSettingKey) || e.affectsConfiguration(keyboardNavigationSettingKey)) {
                const typeNavigationMode = getTypeNavigationMode();
                newOptions = { ...newOptions, typeNavigationMode };
            }
            if (e.affectsConfiguration(defaultFindMatchTypeSettingKey)) {
                const defaultFindMatchType = getDefaultTreeFindMatchType(configurationService);
                newOptions = { ...newOptions, defaultFindMatchType };
            }
            if (e.affectsConfiguration(horizontalScrollingKey) && options.horizontalScrolling === undefined) {
                const horizontalScrolling = Boolean(configurationService.getValue(horizontalScrollingKey));
                newOptions = { ...newOptions, horizontalScrolling };
            }
            if (e.affectsConfiguration(scrollByPageKey)) {
                const scrollByPage = Boolean(configurationService.getValue(scrollByPageKey));
                newOptions = { ...newOptions, scrollByPage };
            }
            if (e.affectsConfiguration(treeExpandMode) && options.expandOnlyOnTwistieClick === undefined) {
                newOptions = { ...newOptions, expandOnlyOnTwistieClick: configurationService.getValue(treeExpandMode) === 'doubleClick' };
            }
            if (e.affectsConfiguration(treeStickyScroll)) {
                const enableStickyScroll = configurationService.getValue(treeStickyScroll);
                newOptions = { ...newOptions, enableStickyScroll };
            }
            if (e.affectsConfiguration(treeStickyScrollMaxElements)) {
                const stickyScrollMaxItemCount = Math.max(1, configurationService.getValue(treeStickyScrollMaxElements));
                newOptions = { ...newOptions, stickyScrollMaxItemCount };
            }
            if (e.affectsConfiguration(mouseWheelScrollSensitivityKey)) {
                const mouseWheelScrollSensitivity = configurationService.getValue(mouseWheelScrollSensitivityKey);
                newOptions = { ...newOptions, mouseWheelScrollSensitivity };
            }
            if (e.affectsConfiguration(fastScrollSensitivityKey)) {
                const fastScrollSensitivity = configurationService.getValue(fastScrollSensitivityKey);
                newOptions = { ...newOptions, fastScrollSensitivity };
            }
            if (Object.keys(newOptions).length > 0) {
                tree.updateOptions(newOptions);
            }
        }), this.contextKeyService.onDidChangeContext(e => {
            if (e.affectsSome(interestingContextKeys)) {
                tree.updateOptions({ typeNavigationMode: getTypeNavigationMode() });
            }
        }));
        this.navigator = new TreeResourceNavigator(tree, { configurationService, ...options });
        this.disposables.push(this.navigator);
    }
    updateOptions(options) {
        if (options.multipleSelectionSupport !== undefined) {
            this.listSupportsMultiSelect.set(!!options.multipleSelectionSupport);
        }
    }
    updateStyleOverrides(overrideStyles) {
        this.tree.style(overrideStyles ? getListStyles(overrideStyles) : defaultListStyles);
    }
    dispose() {
        this.disposables = dispose(this.disposables);
    }
};
WorkbenchTreeInternals = __decorate([
    __param(4, IContextKeyService),
    __param(5, IListService),
    __param(6, IConfigurationService)
], WorkbenchTreeInternals);
const configurationRegistry = Registry.as(Extensions.Configuration);
configurationRegistry.registerConfiguration({
    id: 'workbench',
    order: 7,
    title: localize(1705, "Workbench"),
    type: 'object',
    properties: {
        [multiSelectModifierSettingKey]: {
            type: 'string',
            enum: ['ctrlCmd', 'alt'],
            markdownEnumDescriptions: [
                localize(1706, "Maps to `Control` on Windows and Linux and to `Command` on macOS."),
                localize(1707, "Maps to `Alt` on Windows and Linux and to `Option` on macOS.")
            ],
            default: 'ctrlCmd',
            description: localize(1708, "The modifier to be used to add an item in trees and lists to a multi-selection with the mouse (for example in the explorer, open editors and scm view). The 'Open to Side' mouse gestures - if supported - will adapt such that they do not conflict with the multiselect modifier.")






        },
        [openModeSettingKey]: {
            type: 'string',
            enum: ['singleClick', 'doubleClick'],
            default: 'singleClick',
            description: localize(1709, "Controls how to open items in trees and lists using the mouse (if supported). Note that some trees and lists might choose to ignore this setting if it is not applicable.")



        },
        [horizontalScrollingKey]: {
            type: 'boolean',
            default: false,
            description: localize(1710, "Controls whether lists and trees support horizontal scrolling in the workbench. Warning: turning on this setting has a performance implication.")
        },
        [scrollByPageKey]: {
            type: 'boolean',
            default: false,
            description: localize(1711, "Controls whether clicks in the scrollbar scroll page by page.")
        },
        [treeIndentKey]: {
            type: 'number',
            default: 8,
            minimum: 4,
            maximum: 40,
            description: localize(1712, "Controls tree indentation in pixels.")
        },
        [treeRenderIndentGuidesKey]: {
            type: 'string',
            enum: ['none', 'onHover', 'always'],
            default: 'onHover',
            description: localize(1713, "Controls whether the tree should render indent guides.")
        },
        [listSmoothScrolling]: {
            type: 'boolean',
            default: false,
            description: localize(1714, "Controls whether lists and trees have smooth scrolling."),
        },
        [mouseWheelScrollSensitivityKey]: {
            type: 'number',
            default: 1,
            markdownDescription: localize(1715, "A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events.")
        },
        [fastScrollSensitivityKey]: {
            type: 'number',
            default: 5,
            markdownDescription: localize(1716, "Scrolling speed multiplier when pressing `Alt`.")
        },
        [defaultFindModeSettingKey]: {
            type: 'string',
            enum: ['highlight', 'filter'],
            enumDescriptions: [
                localize(1717, "Highlight elements when searching. Further up and down navigation will traverse only the highlighted elements."),
                localize(1718, "Filter elements when searching.")
            ],
            default: 'highlight',
            description: localize(1719, "Controls the default find mode for lists and trees in the workbench.")
        },
        [keyboardNavigationSettingKey]: {
            type: 'string',
            enum: ['simple', 'highlight', 'filter'],
            enumDescriptions: [
                localize(1720, "Simple keyboard navigation focuses elements which match the keyboard input. Matching is done only on prefixes."),
                localize(1721, "Highlight keyboard navigation highlights elements which match the keyboard input. Further up and down navigation will traverse only the highlighted elements."),
                localize(1722, "Filter keyboard navigation will filter out and hide all the elements which do not match the keyboard input.")
            ],
            default: 'highlight',
            description: localize(1723, "Controls the keyboard navigation style for lists and trees in the workbench. Can be simple, highlight and filter."),
            deprecated: true,
            deprecationMessage: localize(1724, "Please use 'workbench.list.defaultFindMode' and	'workbench.list.typeNavigationMode' instead.")
        },
        [defaultFindMatchTypeSettingKey]: {
            type: 'string',
            enum: ['fuzzy', 'contiguous'],
            enumDescriptions: [
                localize(1725, "Use fuzzy matching when searching."),
                localize(1726, "Use contiguous matching when searching.")
            ],
            default: 'fuzzy',
            description: localize(1727, "Controls the type of matching used when searching lists and trees in the workbench.")
        },
        [treeExpandMode]: {
            type: 'string',
            enum: ['singleClick', 'doubleClick'],
            default: 'singleClick',
            description: localize(1728, "Controls how tree folders are expanded when clicking the folder names. Note that some trees and lists might choose to ignore this setting if it is not applicable."),
        },
        [treeStickyScroll]: {
            type: 'boolean',
            default: true,
            description: localize(1729, "Controls whether sticky scrolling is enabled in trees."),
        },
        [treeStickyScrollMaxElements]: {
            type: 'number',
            minimum: 1,
            default: 7,
            markdownDescription: localize(1730, "Controls the number of sticky elements displayed in the tree when {0} is enabled.", '`#workbench.tree.enableStickyScroll#`'),
        },
        [typeNavigationModeSettingKey]: {
            type: 'string',
            enum: ['automatic', 'trigger'],
            default: 'automatic',
            markdownDescription: localize(1731, "Controls how type navigation works in lists and trees in the workbench. When set to `trigger`, type navigation begins once the `list.triggerTypeNavigation` command is run."),
        }
    }
});

export { IListService, ListService, RawWorkbenchListFocusContextKey, RawWorkbenchListScrollAtBoundaryContextKey, WorkbenchAsyncDataTree, WorkbenchCompressibleAsyncDataTree, WorkbenchCompressibleObjectTree, WorkbenchDataTree, WorkbenchList, WorkbenchListDoubleSelection, WorkbenchListFocusContextKey, WorkbenchListHasSelectionOrFocus, WorkbenchListMultiSelection, WorkbenchListSelectionNavigation, WorkbenchListSupportsFind, WorkbenchListSupportsMultiSelectContextKey, WorkbenchObjectTree, WorkbenchPagedList, WorkbenchTable, WorkbenchTreeElementCanCollapse, WorkbenchTreeElementCanExpand, WorkbenchTreeElementHasChild, WorkbenchTreeElementHasParent, WorkbenchTreeFindOpen, WorkbenchTreeStickyScrollFocused };
