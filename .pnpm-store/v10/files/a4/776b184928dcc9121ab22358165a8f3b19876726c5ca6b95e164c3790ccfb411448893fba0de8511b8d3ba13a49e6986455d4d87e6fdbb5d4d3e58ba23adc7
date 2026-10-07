import { getShadowRoot, getDomNodePagePosition } from '../../../../base/browser/dom.js';
import { ActionViewItem } from '../../../../base/browser/ui/actionbar/actionViewItems.js';
import { SubmenuAction, Separator } from '../../../../base/common/actions.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { isIOS } from '../../../../base/common/platform.js';
import { registerEditorContribution, registerEditorAction, EditorAction } from '../../../browser/editorExtensions.js';
import { EditorContextKeys } from '../../../common/editorContextKeys.js';
import { localize, localize2 } from '../../../../nls.js';
import { SubmenuItemAction, IMenuService } from '../../../../platform/actions/common/actions.js';
import { IContextKeyService } from '../../../../platform/contextkey/common/contextkey.js';
import { IContextMenuService, IContextViewService } from '../../../../platform/contextview/browser/contextView.js';
import { IKeybindingService } from '../../../../platform/keybinding/common/keybinding.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { isStandaloneEditorWorkspace, IWorkspaceContextService } from '../../../../platform/workspace/common/workspace.js';

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
var ContextMenuController_1;
let ContextMenuController = class ContextMenuController {
    static { ContextMenuController_1 = this; }
    static { this.ID = 'editor.contrib.contextmenu'; }
    static get(editor) {
        return editor.getContribution(ContextMenuController_1.ID);
    }
    constructor(editor, _contextMenuService, _contextViewService, _contextKeyService, _keybindingService, _menuService, _configurationService, _workspaceContextService) {
        this._contextMenuService = _contextMenuService;
        this._contextViewService = _contextViewService;
        this._contextKeyService = _contextKeyService;
        this._keybindingService = _keybindingService;
        this._menuService = _menuService;
        this._configurationService = _configurationService;
        this._workspaceContextService = _workspaceContextService;
        this._toDispose = new DisposableStore();
        this._contextMenuIsBeingShownCount = 0;
        this._editor = editor;
        this._toDispose.add(this._editor.onContextMenu((e) => this._onContextMenu(e)));
        this._toDispose.add(this._editor.onMouseWheel((e) => {
            if (this._contextMenuIsBeingShownCount > 0) {
                const view = this._contextViewService.getContextViewElement();
                const target = e.srcElement;
                // Event triggers on shadow root host first
                // Check if the context view is under this host before hiding it #103169
                if (!(target.shadowRoot && getShadowRoot(view) === target.shadowRoot)) {
                    this._contextViewService.hideContextView();
                }
            }
        }));
        this._toDispose.add(this._editor.onKeyDown((e) => {
            if (!this._editor.getOption(30 /* EditorOption.contextmenu */)) {
                return; // Context menu is turned off through configuration
            }
            if (e.keyCode === 58 /* KeyCode.ContextMenu */) {
                // Chrome is funny like that
                e.preventDefault();
                e.stopPropagation();
                this.showContextMenu();
            }
        }));
    }
    _onContextMenu(e) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (!this._editor.getOption(30 /* EditorOption.contextmenu */)) {
            this._editor.focus();
            // Ensure the cursor is at the position of the mouse click
            if (e.target.position && !this._editor.getSelection().containsPosition(e.target.position)) {
                this._editor.setPosition(e.target.position);
            }
            return; // Context menu is turned off through configuration
        }
        if (e.target.type === 12 /* MouseTargetType.OVERLAY_WIDGET */) {
            return; // allow native menu on widgets to support right click on input field for example in find
        }
        if (e.target.type === 6 /* MouseTargetType.CONTENT_TEXT */ && e.target.detail.injectedText) {
            return; // allow native menu on injected text
        }
        e.event.preventDefault();
        e.event.stopPropagation();
        if (e.target.type === 11 /* MouseTargetType.SCROLLBAR */) {
            return this._showScrollbarContextMenu(e.event);
        }
        if (e.target.type !== 6 /* MouseTargetType.CONTENT_TEXT */ && e.target.type !== 7 /* MouseTargetType.CONTENT_EMPTY */ && e.target.type !== 1 /* MouseTargetType.TEXTAREA */) {
            return; // only support mouse click into text or native context menu key for now
        }
        // Ensure the editor gets focus if it hasn't, so the right events are being sent to other contributions
        this._editor.focus();
        // Ensure the cursor is at the position of the mouse click
        if (e.target.position) {
            let hasSelectionAtPosition = false;
            for (const selection of this._editor.getSelections()) {
                if (selection.containsPosition(e.target.position)) {
                    hasSelectionAtPosition = true;
                    break;
                }
            }
            if (!hasSelectionAtPosition) {
                this._editor.setPosition(e.target.position);
            }
        }
        // Unless the user triggerd the context menu through Shift+F10, use the mouse position as menu position
        let anchor = null;
        if (e.target.type !== 1 /* MouseTargetType.TEXTAREA */) {
            anchor = e.event;
        }
        // Show the context menu
        this.showContextMenu(anchor);
    }
    showContextMenu(anchor) {
        if (!this._editor.getOption(30 /* EditorOption.contextmenu */)) {
            return; // Context menu is turned off through configuration
        }
        if (!this._editor.hasModel()) {
            return;
        }
        // Find actions available for menu
        const menuActions = this._getMenuActions(this._editor.getModel(), this._editor.contextMenuId);
        // Show menu if we have actions to show
        if (menuActions.length > 0) {
            this._doShowContextMenu(menuActions, anchor);
        }
    }
    _getMenuActions(model, menuId) {
        const result = [];
        // get menu groups
        const groups = this._menuService.getMenuActions(menuId, this._contextKeyService, { arg: model.uri });
        // translate them into other actions
        for (const group of groups) {
            const [, actions] = group;
            let addedItems = 0;
            for (const action of actions) {
                if (action instanceof SubmenuItemAction) {
                    const subActions = this._getMenuActions(model, action.item.submenu);
                    if (subActions.length > 0) {
                        result.push(new SubmenuAction(action.id, action.label, subActions));
                        addedItems++;
                    }
                }
                else {
                    result.push(action);
                    addedItems++;
                }
            }
            if (addedItems) {
                result.push(new Separator());
            }
        }
        if (result.length) {
            result.pop(); // remove last separator
        }
        return result;
    }
    _doShowContextMenu(actions, event = null) {
        if (!this._editor.hasModel()) {
            return;
        }
        let anchor = event;
        if (!anchor) {
            // Ensure selection is visible
            this._editor.revealPosition(this._editor.getPosition(), 1 /* ScrollType.Immediate */);
            this._editor.render();
            const cursorCoords = this._editor.getScrolledVisiblePosition(this._editor.getPosition());
            // Translate to absolute editor position
            const editorCoords = getDomNodePagePosition(this._editor.getDomNode());
            const posx = editorCoords.left + cursorCoords.left;
            const posy = editorCoords.top + cursorCoords.top + cursorCoords.height;
            anchor = { x: posx, y: posy };
        }
        const useShadowDOM = this._editor.getOption(144 /* EditorOption.useShadowDOM */) && !isIOS; // Do not use shadow dom on IOS #122035
        // Show menu
        this._contextMenuIsBeingShownCount++;
        this._contextMenuService.showContextMenu({
            domForShadowRoot: useShadowDOM ? this._editor.getOverflowWidgetsDomNode() ?? this._editor.getDomNode() : undefined,
            getAnchor: () => anchor,
            getActions: () => actions,
            getActionViewItem: (action) => {
                const keybinding = this._keybindingFor(action);
                if (keybinding) {
                    return new ActionViewItem(action, action, { label: true, keybinding: keybinding.getLabel(), isMenu: true });
                }
                const customAction = action;
                if (typeof customAction.getActionViewItem === 'function') {
                    return customAction.getActionViewItem();
                }
                return new ActionViewItem(action, action, { icon: true, label: true, isMenu: true });
            },
            getKeyBinding: (action) => {
                return this._keybindingFor(action);
            },
            onHide: (wasCancelled) => {
                this._contextMenuIsBeingShownCount--;
            }
        });
    }
    _showScrollbarContextMenu(anchor) {
        if (!this._editor.hasModel()) {
            return;
        }
        if (isStandaloneEditorWorkspace(this._workspaceContextService.getWorkspace())) {
            // can't update the configuration properly in the standalone editor
            return;
        }
        const minimapOptions = this._editor.getOption(81 /* EditorOption.minimap */);
        let lastId = 0;
        const createAction = (opts) => {
            return {
                id: `menu-action-${++lastId}`,
                label: opts.label,
                tooltip: '',
                class: undefined,
                enabled: (typeof opts.enabled === 'undefined' ? true : opts.enabled),
                checked: opts.checked,
                run: opts.run
            };
        };
        const createSubmenuAction = (label, actions) => {
            return new SubmenuAction(`menu-action-${++lastId}`, label, actions, undefined);
        };
        const createEnumAction = (label, enabled, configName, configuredValue, options) => {
            if (!enabled) {
                return createAction({ label, enabled, run: () => { } });
            }
            const createRunner = (value) => {
                return () => {
                    this._configurationService.updateValue(configName, value);
                };
            };
            const actions = [];
            for (const option of options) {
                actions.push(createAction({
                    label: option.label,
                    checked: configuredValue === option.value,
                    run: createRunner(option.value)
                }));
            }
            return createSubmenuAction(label, actions);
        };
        const actions = [];
        actions.push(createAction({
            label: localize(901, "Minimap"),
            checked: minimapOptions.enabled,
            run: () => {
                this._configurationService.updateValue(`editor.minimap.enabled`, !minimapOptions.enabled);
            }
        }));
        actions.push(new Separator());
        actions.push(createAction({
            label: localize(902, "Render Characters"),
            enabled: minimapOptions.enabled,
            checked: minimapOptions.renderCharacters,
            run: () => {
                this._configurationService.updateValue(`editor.minimap.renderCharacters`, !minimapOptions.renderCharacters);
            }
        }));
        actions.push(createEnumAction(localize(903, "Vertical size"), minimapOptions.enabled, 'editor.minimap.size', minimapOptions.size, [{
                label: localize(904, "Proportional"),
                value: 'proportional'
            }, {
                label: localize(905, "Fill"),
                value: 'fill'
            }, {
                label: localize(906, "Fit"),
                value: 'fit'
            }]));
        actions.push(createEnumAction(localize(907, "Slider"), minimapOptions.enabled, 'editor.minimap.showSlider', minimapOptions.showSlider, [{
                label: localize(908, "Mouse Over"),
                value: 'mouseover'
            }, {
                label: localize(909, "Always"),
                value: 'always'
            }]));
        const useShadowDOM = this._editor.getOption(144 /* EditorOption.useShadowDOM */) && !isIOS; // Do not use shadow dom on IOS #122035
        this._contextMenuIsBeingShownCount++;
        this._contextMenuService.showContextMenu({
            domForShadowRoot: useShadowDOM ? this._editor.getDomNode() : undefined,
            getAnchor: () => anchor,
            getActions: () => actions,
            onHide: (wasCancelled) => {
                this._contextMenuIsBeingShownCount--;
                this._editor.focus();
            }
        });
    }
    _keybindingFor(action) {
        return this._keybindingService.lookupKeybinding(action.id);
    }
    dispose() {
        if (this._contextMenuIsBeingShownCount > 0) {
            this._contextViewService.hideContextView();
        }
        this._toDispose.dispose();
    }
};
ContextMenuController = ContextMenuController_1 = __decorate([
    __param(1, IContextMenuService),
    __param(2, IContextViewService),
    __param(3, IContextKeyService),
    __param(4, IKeybindingService),
    __param(5, IMenuService),
    __param(6, IConfigurationService),
    __param(7, IWorkspaceContextService)
], ContextMenuController);
class ShowContextMenu extends EditorAction {
    constructor() {
        super({
            id: 'editor.action.showContextMenu',
            label: localize2(910, "Show Editor Context Menu"),
            precondition: undefined,
            kbOpts: {
                kbExpr: EditorContextKeys.textInputFocus,
                primary: 1024 /* KeyMod.Shift */ | 68 /* KeyCode.F10 */,
                weight: 100 /* KeybindingWeight.EditorContrib */
            }
        });
    }
    run(accessor, editor) {
        ContextMenuController.get(editor)?.showContextMenu();
    }
}
registerEditorContribution(ContextMenuController.ID, ContextMenuController, 2 /* EditorContributionInstantiation.BeforeFirstInteraction */);
registerEditorAction(ShowContextMenu);

export { ContextMenuController };
