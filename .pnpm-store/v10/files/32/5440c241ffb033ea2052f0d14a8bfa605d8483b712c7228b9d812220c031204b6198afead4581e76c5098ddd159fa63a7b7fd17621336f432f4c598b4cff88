import { n, h } from '../../../../../base/browser/dom.js';
import { renderMarkdown } from '../../../../../base/browser/markdownRenderer.js';
import { ActionViewItem } from '../../../../../base/browser/ui/actionbar/actionViewItems.js';
import { KeybindingLabel, unthemedKeybindingLabelOptions } from '../../../../../base/browser/ui/keybindingLabel/keybindingLabel.js';
import { Action, Separator } from '../../../../../base/common/actions.js';
import { equals } from '../../../../../base/common/arrays.js';
import { RunOnceScheduler } from '../../../../../base/common/async.js';
import { Codicon } from '../../../../../base/common/codicons.js';
import { createHotClass } from '../../../../../base/common/hotReloadHelpers.js';
import { Disposable, toDisposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { OS } from '../../../../../base/common/platform.js';
import { ThemeIcon } from '../../../../../base/common/themables.js';
import { localize } from '../../../../../nls.js';
import { MenuEntryActionViewItem, getActionBarActions } from '../../../../../platform/actions/browser/menuEntryActionViewItem.js';
import { WorkbenchToolBar } from '../../../../../platform/actions/browser/toolbar.js';
import { MenuId, MenuItemAction, IMenuService } from '../../../../../platform/actions/common/actions.js';
import { ICommandService } from '../../../../../platform/commands/common/commands.js';
import { IContextKeyService } from '../../../../../platform/contextkey/common/contextkey.js';
import { IContextMenuService } from '../../../../../platform/contextview/browser/contextView.js';
import { IInstantiationService } from '../../../../../platform/instantiation/common/instantiation.js';
import { IKeybindingService } from '../../../../../platform/keybinding/common/keybinding.js';
import { ITelemetryService } from '../../../../../platform/telemetry/common/telemetry.js';
import { registerIcon } from '../../../../../platform/theme/common/iconRegistry.js';
import { Position } from '../../../../common/core/position.js';
import { InlineCompletionTriggerKind } from '../../../../common/languages.js';
import { showPreviousInlineSuggestionActionId, showNextInlineSuggestionActionId } from '../controller/commandIds.js';
import './inlineCompletionsHintsWidget.css';
import { derivedObservableWithCache } from '../../../../../base/common/observableInternal/utils/utils.js';
import { derived } from '../../../../../base/common/observableInternal/observables/derived.js';
import { autorun, autorunWithStore } from '../../../../../base/common/observableInternal/reactions/autorun.js';
import { observableFromEvent } from '../../../../../base/common/observableInternal/observables/observableFromEvent.js';

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
var InlineSuggestionHintsContentWidget_1;
let InlineCompletionsHintsWidget = class InlineCompletionsHintsWidget extends Disposable {
    constructor(editor, model, instantiationService) {
        super();
        this.editor = editor;
        this.model = model;
        this.instantiationService = instantiationService;
        this.alwaysShowToolbar = observableFromEvent(this, this.editor.onDidChangeConfiguration, () => this.editor.getOption(71 /* EditorOption.inlineSuggest */).showToolbar === 'always');
        this.sessionPosition = undefined;
        this.position = derived(this, reader => {
            const ghostText = this.model.read(reader)?.primaryGhostText.read(reader);
            if (!this.alwaysShowToolbar.read(reader) || !ghostText || ghostText.parts.length === 0) {
                this.sessionPosition = undefined;
                return null;
            }
            const firstColumn = ghostText.parts[0].column;
            if (this.sessionPosition && this.sessionPosition.lineNumber !== ghostText.lineNumber) {
                this.sessionPosition = undefined;
            }
            const position = new Position(ghostText.lineNumber, Math.min(firstColumn, this.sessionPosition?.column ?? Number.MAX_SAFE_INTEGER));
            this.sessionPosition = position;
            return position;
        });
        this._register(autorunWithStore((reader, store) => {
            /** @description setup content widget */
            const model = this.model.read(reader);
            if (!model || !this.alwaysShowToolbar.read(reader)) {
                return;
            }
            const contentWidgetValue = derived((reader) => {
                const contentWidget = reader.store.add(this.instantiationService.createInstance(InlineSuggestionHintsContentWidget.hot.read(reader), this.editor, true, this.position, model.selectedInlineCompletionIndex, model.inlineCompletionsCount, model.activeCommands, model.warning, () => { }));
                editor.addContentWidget(contentWidget);
                reader.store.add(toDisposable(() => editor.removeContentWidget(contentWidget)));
                reader.store.add(autorun(reader => {
                    /** @description request explicit */
                    const position = this.position.read(reader);
                    if (!position) {
                        return;
                    }
                    if (model.lastTriggerKind.read(reader) !== InlineCompletionTriggerKind.Explicit) {
                        model.triggerExplicitly();
                    }
                }));
                return contentWidget;
            });
            const hadPosition = derivedObservableWithCache(this, (reader, lastValue) => !!this.position.read(reader) || !!lastValue);
            store.add(autorun(reader => {
                if (hadPosition.read(reader)) {
                    contentWidgetValue.read(reader);
                }
            }));
        }));
    }
};
InlineCompletionsHintsWidget = __decorate([
    __param(2, IInstantiationService)
], InlineCompletionsHintsWidget);
const inlineSuggestionHintsNextIcon = registerIcon('inline-suggestion-hints-next', Codicon.chevronRight, localize(1207, 'Icon for show next parameter hint.'));
const inlineSuggestionHintsPreviousIcon = registerIcon('inline-suggestion-hints-previous', Codicon.chevronLeft, localize(1208, 'Icon for show previous parameter hint.'));
let InlineSuggestionHintsContentWidget = class InlineSuggestionHintsContentWidget extends Disposable {
    static { InlineSuggestionHintsContentWidget_1 = this; }
    static { this.hot = createHotClass(this); }
    static { this._dropDownVisible = false; }
    static get dropDownVisible() { return this._dropDownVisible; }
    static { this.id = 0; }
    createCommandAction(commandId, label, iconClassName) {
        const action = new Action(commandId, label, iconClassName, true, () => this._commandService.executeCommand(commandId));
        const kb = this.keybindingService.lookupKeybinding(commandId, this._contextKeyService);
        let tooltip = label;
        if (kb) {
            tooltip = localize(1209, '{0} ({1})', label, kb.getLabel());
        }
        action.tooltip = tooltip;
        return action;
    }
    constructor(editor, withBorder, _position, _currentSuggestionIdx, _suggestionCount, _extraCommands, _warning, _relayout, _commandService, instantiationService, keybindingService, _contextKeyService, _menuService) {
        super();
        this.editor = editor;
        this.withBorder = withBorder;
        this._position = _position;
        this._currentSuggestionIdx = _currentSuggestionIdx;
        this._suggestionCount = _suggestionCount;
        this._extraCommands = _extraCommands;
        this._warning = _warning;
        this._relayout = _relayout;
        this._commandService = _commandService;
        this.keybindingService = keybindingService;
        this._contextKeyService = _contextKeyService;
        this._menuService = _menuService;
        this.id = `InlineSuggestionHintsContentWidget${InlineSuggestionHintsContentWidget_1.id++}`;
        this.allowEditorOverflow = true;
        this.suppressMouseDown = false;
        this._warningMessageContentNode = derived((reader) => {
            const warning = this._warning.read(reader);
            if (!warning) {
                return undefined;
            }
            if (typeof warning.message === 'string') {
                return warning.message;
            }
            const markdownElement = reader.store.add(renderMarkdown(warning.message));
            return markdownElement.element;
        });
        this._warningMessageNode = n.div({
            class: 'warningMessage',
            style: {
                maxWidth: 400,
                margin: 4,
                marginBottom: 4,
                display: derived(reader => this._warning.read(reader) ? 'block' : 'none'),
            }
        }, [
            this._warningMessageContentNode,
        ]).keepUpdated(this._store);
        this.nodes = h('div.inlineSuggestionsHints', { className: this.withBorder ? 'monaco-hover monaco-hover-content' : '' }, [
            this._warningMessageNode.element,
            h('div@toolBar'),
        ]);
        this.previousAction = this._register(this.createCommandAction(showPreviousInlineSuggestionActionId, localize(1210, 'Previous'), ThemeIcon.asClassName(inlineSuggestionHintsPreviousIcon)));
        this.availableSuggestionCountAction = this._register(new Action('inlineSuggestionHints.availableSuggestionCount', '', undefined, false));
        this.nextAction = this._register(this.createCommandAction(showNextInlineSuggestionActionId, localize(1211, 'Next'), ThemeIcon.asClassName(inlineSuggestionHintsNextIcon)));
        this.inlineCompletionsActionsMenus = this._register(this._menuService.createMenu(MenuId.InlineCompletionsActions, this._contextKeyService));
        this.clearAvailableSuggestionCountLabelDebounced = this._register(new RunOnceScheduler(() => {
            this.availableSuggestionCountAction.label = '';
        }, 100));
        this.disableButtonsDebounced = this._register(new RunOnceScheduler(() => {
            this.previousAction.enabled = this.nextAction.enabled = false;
        }, 100));
        this._register(autorun(reader => {
            this._warningMessageContentNode.read(reader);
            this._warningMessageNode.readEffect(reader);
            // Only update after the warning message node has been rendered
            this._relayout();
        }));
        this.toolBar = this._register(instantiationService.createInstance(CustomizedMenuWorkbenchToolBar, this.nodes.toolBar, MenuId.InlineSuggestionToolbar, {
            menuOptions: { renderShortTitle: true },
            toolbarOptions: { primaryGroup: g => g.startsWith('primary') },
            actionViewItemProvider: (action, options) => {
                if (action instanceof MenuItemAction) {
                    return instantiationService.createInstance(StatusBarViewItem, action, undefined);
                }
                if (action === this.availableSuggestionCountAction) {
                    const a = new ActionViewItemWithClassName(undefined, action, { label: true, icon: false });
                    a.setClass('availableSuggestionCount');
                    return a;
                }
                return undefined;
            },
            telemetrySource: 'InlineSuggestionToolbar',
        }));
        this.toolBar.setPrependedPrimaryActions([
            this.previousAction,
            this.availableSuggestionCountAction,
            this.nextAction,
        ]);
        this._register(this.toolBar.onDidChangeDropdownVisibility(e => {
            InlineSuggestionHintsContentWidget_1._dropDownVisible = e;
        }));
        this._register(autorun(reader => {
            /** @description update position */
            this._position.read(reader);
            this.editor.layoutContentWidget(this);
        }));
        this._register(autorun(reader => {
            /** @description counts */
            const suggestionCount = this._suggestionCount.read(reader);
            const currentSuggestionIdx = this._currentSuggestionIdx.read(reader);
            if (suggestionCount !== undefined) {
                this.clearAvailableSuggestionCountLabelDebounced.cancel();
                this.availableSuggestionCountAction.label = `${currentSuggestionIdx + 1}/${suggestionCount}`;
            }
            else {
                this.clearAvailableSuggestionCountLabelDebounced.schedule();
            }
            if (suggestionCount !== undefined && suggestionCount > 1) {
                this.disableButtonsDebounced.cancel();
                this.previousAction.enabled = this.nextAction.enabled = true;
            }
            else {
                this.disableButtonsDebounced.schedule();
            }
        }));
        this._register(autorun(reader => {
            /** @description extra commands */
            const extraCommands = this._extraCommands.read(reader);
            const extraActions = extraCommands.map(c => ({
                class: undefined,
                id: c.command.id,
                enabled: true,
                tooltip: c.command.tooltip || '',
                label: c.command.title,
                run: (event) => {
                    return this._commandService.executeCommand(c.command.id);
                },
            }));
            for (const [_, group] of this.inlineCompletionsActionsMenus.getActions()) {
                for (const action of group) {
                    if (action instanceof MenuItemAction) {
                        extraActions.push(action);
                    }
                }
            }
            if (extraActions.length > 0) {
                extraActions.unshift(new Separator());
            }
            this.toolBar.setAdditionalSecondaryActions(extraActions);
        }));
    }
    getId() { return this.id; }
    getDomNode() {
        return this.nodes.root;
    }
    getPosition() {
        return {
            position: this._position.get(),
            preference: [1 /* ContentWidgetPositionPreference.ABOVE */, 2 /* ContentWidgetPositionPreference.BELOW */],
            positionAffinity: 3 /* PositionAffinity.LeftOfInjectedText */,
        };
    }
};
InlineSuggestionHintsContentWidget = InlineSuggestionHintsContentWidget_1 = __decorate([
    __param(8, ICommandService),
    __param(9, IInstantiationService),
    __param(10, IKeybindingService),
    __param(11, IContextKeyService),
    __param(12, IMenuService)
], InlineSuggestionHintsContentWidget);
class ActionViewItemWithClassName extends ActionViewItem {
    constructor() {
        super(...arguments);
        this._className = undefined;
    }
    setClass(className) {
        this._className = className;
    }
    render(container) {
        super.render(container);
        if (this._className) {
            container.classList.add(this._className);
        }
    }
    updateTooltip() {
        // NOOP, disable tooltip
    }
}
class StatusBarViewItem extends MenuEntryActionViewItem {
    updateLabel() {
        const kb = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService, true);
        if (!kb) {
            return super.updateLabel();
        }
        if (this.label) {
            const div = h('div.keybinding').root;
            const k = this._register(new KeybindingLabel(div, OS, { disableTitle: true, ...unthemedKeybindingLabelOptions }));
            k.set(kb);
            this.label.textContent = this._action.label;
            this.label.appendChild(div);
            this.label.classList.add('inlineSuggestionStatusBarItemLabel');
        }
    }
    updateTooltip() {
        // NOOP, disable tooltip
    }
}
let CustomizedMenuWorkbenchToolBar = class CustomizedMenuWorkbenchToolBar extends WorkbenchToolBar {
    constructor(container, menuId, options2, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService) {
        super(container, { resetMenu: menuId, ...options2 }, menuService, contextKeyService, contextMenuService, keybindingService, commandService, telemetryService);
        this.menuId = menuId;
        this.options2 = options2;
        this.menuService = menuService;
        this.contextKeyService = contextKeyService;
        this.menu = this._store.add(this.menuService.createMenu(this.menuId, this.contextKeyService, { emitEventsForSubmenuChanges: true }));
        this.additionalActions = [];
        this.prependedPrimaryActions = [];
        this.additionalPrimaryActions = [];
        this._store.add(this.menu.onDidChange(() => this.updateToolbar()));
        this.updateToolbar();
    }
    updateToolbar() {
        const { primary, secondary } = getActionBarActions(this.menu.getActions(this.options2?.menuOptions), this.options2?.toolbarOptions?.primaryGroup, this.options2?.toolbarOptions?.shouldInlineSubmenu, this.options2?.toolbarOptions?.useSeparatorsInPrimaryActions);
        secondary.push(...this.additionalActions);
        primary.unshift(...this.prependedPrimaryActions);
        primary.push(...this.additionalPrimaryActions);
        this.setActions(primary, secondary);
    }
    setPrependedPrimaryActions(actions) {
        if (equals(this.prependedPrimaryActions, actions, (a, b) => a === b)) {
            return;
        }
        this.prependedPrimaryActions = actions;
        this.updateToolbar();
    }
    setAdditionalSecondaryActions(actions) {
        if (equals(this.additionalActions, actions, (a, b) => a === b)) {
            return;
        }
        this.additionalActions = actions;
        this.updateToolbar();
    }
};
CustomizedMenuWorkbenchToolBar = __decorate([
    __param(3, IMenuService),
    __param(4, IContextKeyService),
    __param(5, IContextMenuService),
    __param(6, IKeybindingService),
    __param(7, ICommandService),
    __param(8, ITelemetryService)
], CustomizedMenuWorkbenchToolBar);

export { CustomizedMenuWorkbenchToolBar, InlineCompletionsHintsWidget, InlineSuggestionHintsContentWidget };
