import { FindInput } from '../../../base/browser/ui/findinput/findInput.js';
import { ReplaceInput } from '../../../base/browser/ui/findinput/replaceInput.js';
import { RawContextKey, IContextKeyService, ContextKeyExpr } from '../../contextkey/common/contextkey.js';
import { KeybindingsRegistry } from '../../keybinding/common/keybindingsRegistry.js';
import { localize } from '../../../nls.js';
import { DisposableStore, toDisposable } from '../../../base/common/lifecycle.js';
import { isActiveElement } from '../../../base/browser/dom.js';

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
const historyNavigationVisible = new RawContextKey('suggestWidgetVisible', false, localize(1698, "Whether suggestion are visible"));
const HistoryNavigationWidgetFocusContext = 'historyNavigationWidgetFocus';
const HistoryNavigationForwardsEnablementContext = 'historyNavigationForwardsEnabled';
const HistoryNavigationBackwardsEnablementContext = 'historyNavigationBackwardsEnabled';
let lastFocusedWidget = undefined;
const widgets = [];
function registerAndCreateHistoryNavigationContext(scopedContextKeyService, widget) {
    if (widgets.includes(widget)) {
        throw new Error('Cannot register the same widget multiple times');
    }
    widgets.push(widget);
    const disposableStore = new DisposableStore();
    const historyNavigationWidgetFocus = new RawContextKey(HistoryNavigationWidgetFocusContext, false).bindTo(scopedContextKeyService);
    const historyNavigationForwardsEnablement = new RawContextKey(HistoryNavigationForwardsEnablementContext, true).bindTo(scopedContextKeyService);
    const historyNavigationBackwardsEnablement = new RawContextKey(HistoryNavigationBackwardsEnablementContext, true).bindTo(scopedContextKeyService);
    const onDidFocus = () => {
        historyNavigationWidgetFocus.set(true);
        lastFocusedWidget = widget;
    };
    const onDidBlur = () => {
        historyNavigationWidgetFocus.set(false);
        if (lastFocusedWidget === widget) {
            lastFocusedWidget = undefined;
        }
    };
    // Check for currently being focused
    if (isActiveElement(widget.element)) {
        onDidFocus();
    }
    disposableStore.add(widget.onDidFocus(() => onDidFocus()));
    disposableStore.add(widget.onDidBlur(() => onDidBlur()));
    disposableStore.add(toDisposable(() => {
        widgets.splice(widgets.indexOf(widget), 1);
        onDidBlur();
    }));
    return {
        historyNavigationForwardsEnablement,
        historyNavigationBackwardsEnablement,
        dispose() {
            disposableStore.dispose();
        }
    };
}
let ContextScopedFindInput = class ContextScopedFindInput extends FindInput {
    constructor(container, contextViewProvider, options, contextKeyService) {
        super(container, contextViewProvider, options);
        const scopedContextKeyService = this._register(contextKeyService.createScoped(this.inputBox.element));
        this._register(registerAndCreateHistoryNavigationContext(scopedContextKeyService, this.inputBox));
    }
};
ContextScopedFindInput = __decorate([
    __param(3, IContextKeyService)
], ContextScopedFindInput);
let ContextScopedReplaceInput = class ContextScopedReplaceInput extends ReplaceInput {
    constructor(container, contextViewProvider, options, contextKeyService, showReplaceOptions = false) {
        super(container, contextViewProvider, showReplaceOptions, options);
        const scopedContextKeyService = this._register(contextKeyService.createScoped(this.inputBox.element));
        this._register(registerAndCreateHistoryNavigationContext(scopedContextKeyService, this.inputBox));
    }
};
ContextScopedReplaceInput = __decorate([
    __param(3, IContextKeyService)
], ContextScopedReplaceInput);
KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: 'history.showPrevious',
    weight: 200 /* KeybindingWeight.WorkbenchContrib */,
    when: ContextKeyExpr.and(ContextKeyExpr.has(HistoryNavigationWidgetFocusContext), ContextKeyExpr.equals(HistoryNavigationBackwardsEnablementContext, true), ContextKeyExpr.not('isComposing'), historyNavigationVisible.isEqualTo(false)),
    primary: 16 /* KeyCode.UpArrow */,
    secondary: [512 /* KeyMod.Alt */ | 16 /* KeyCode.UpArrow */],
    handler: (accessor) => {
        lastFocusedWidget?.showPreviousValue();
    }
});
KeybindingsRegistry.registerCommandAndKeybindingRule({
    id: 'history.showNext',
    weight: 200 /* KeybindingWeight.WorkbenchContrib */,
    when: ContextKeyExpr.and(ContextKeyExpr.has(HistoryNavigationWidgetFocusContext), ContextKeyExpr.equals(HistoryNavigationForwardsEnablementContext, true), ContextKeyExpr.not('isComposing'), historyNavigationVisible.isEqualTo(false)),
    primary: 18 /* KeyCode.DownArrow */,
    secondary: [512 /* KeyMod.Alt */ | 18 /* KeyCode.DownArrow */],
    handler: (accessor) => {
        lastFocusedWidget?.showNextValue();
    }
});

export { ContextScopedFindInput, ContextScopedReplaceInput, historyNavigationVisible, registerAndCreateHistoryNavigationContext };
