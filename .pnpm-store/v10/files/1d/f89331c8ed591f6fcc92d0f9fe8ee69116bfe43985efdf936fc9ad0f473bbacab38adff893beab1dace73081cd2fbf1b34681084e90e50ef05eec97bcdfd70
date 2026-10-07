import { asCSSUrl } from '../../../base/browser/cssValue.js';
import { ModifierKeyEmitter, addDisposableListener, prepend, $, append, EventType } from '../../../base/browser/dom.js';
import { StandardKeyboardEvent } from '../../../base/browser/keyboardEvent.js';
import { ActionViewItem, BaseActionViewItem, SelectActionViewItem } from '../../../base/browser/ui/actionbar/actionViewItems.js';
import { DropdownMenuActionViewItem } from '../../../base/browser/ui/dropdown/dropdownActionViewItem.js';
import { ActionRunner, Separator, SubmenuAction } from '../../../base/common/actions.js';
import { UILabelProvider } from '../../../base/common/keybindingLabels.js';
import { MutableDisposable, toDisposable, combinedDisposable, DisposableStore } from '../../../base/common/lifecycle.js';
import { OS, isWindows, isLinux } from '../../../base/common/platform.js';
import { ThemeIcon } from '../../../base/common/themables.js';
import { assertType } from '../../../base/common/types.js';
import { localize } from '../../../nls.js';
import { IAccessibilityService } from '../../accessibility/common/accessibility.js';
import { isICommandActionToggleInfo } from '../../action/common/action.js';
import { IConfigurationService } from '../../configuration/common/configuration.js';
import { IContextKeyService } from '../../contextkey/common/contextkey.js';
import { IContextMenuService, IContextViewService } from '../../contextview/browser/contextView.js';
import { IInstantiationService } from '../../instantiation/common/instantiation.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';
import { INotificationService } from '../../notification/common/notification.js';
import { IStorageService } from '../../storage/common/storage.js';
import { defaultSelectBoxStyles } from '../../theme/browser/defaultStyles.js';
import { asCssVariable } from '../../theme/common/colorUtils.js';
import '../../theme/common/colors/baseColors.js';
import '../../theme/common/colors/chartsColors.js';
import '../../theme/common/colors/editorColors.js';
import { selectBorder } from '../../theme/common/colors/inputColors.js';
import '../../theme/common/colors/listColors.js';
import '../../theme/common/colors/menuColors.js';
import '../../theme/common/colors/minimapColors.js';
import '../../theme/common/colors/miscColors.js';
import '../../theme/common/colors/quickpickColors.js';
import '../../theme/common/colors/searchColors.js';
import { isDark } from '../../theme/common/theme.js';
import { IThemeService } from '../../theme/common/themeService.js';
import { hasNativeContextMenu } from '../../window/common/window.js';
import { IMenuService, MenuItemAction, SubmenuItemAction } from '../common/actions.js';
import './menuEntryActionViewItem.css';

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
function getFlatContextMenuActions(groups, primaryGroup) {
    const target = [];
    getContextMenuActionsImpl(groups, target);
    return target;
}
function getContextMenuActionsImpl(groups, target, primaryGroup) {
    const modifierKeyEmitter = ModifierKeyEmitter.getInstance();
    const useAlternativeActions = modifierKeyEmitter.keyStatus.altKey || ((isWindows || isLinux) && modifierKeyEmitter.keyStatus.shiftKey);
    fillInActions(groups, target, useAlternativeActions, actionGroup => actionGroup === 'navigation');
}
function getActionBarActions(groups, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions) {
    const target = { primary: [], secondary: [] };
    fillInActionBarActions(groups, target, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions);
    return target;
}
function getFlatActionBarActions(groups, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions) {
    const target = [];
    fillInActionBarActions(groups, target, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions);
    return target;
}
function fillInActionBarActions(groups, target, primaryGroup, shouldInlineSubmenu, useSeparatorsInPrimaryActions) {
    const isPrimaryAction = typeof primaryGroup === 'string' ? (actionGroup) => actionGroup === primaryGroup : primaryGroup;
    // Action bars handle alternative actions on their own so the alternative actions should be ignored
    fillInActions(groups, target, false, isPrimaryAction, shouldInlineSubmenu, useSeparatorsInPrimaryActions);
}
function fillInActions(groups, target, useAlternativeActions, isPrimaryAction = actionGroup => actionGroup === 'navigation', shouldInlineSubmenu = () => false, useSeparatorsInPrimaryActions = false) {
    let primaryBucket;
    let secondaryBucket;
    if (Array.isArray(target)) {
        primaryBucket = target;
        secondaryBucket = target;
    }
    else {
        primaryBucket = target.primary;
        secondaryBucket = target.secondary;
    }
    const submenuInfo = new Set();
    for (const [group, actions] of groups) {
        let target;
        if (isPrimaryAction(group)) {
            target = primaryBucket;
            if (target.length > 0 && useSeparatorsInPrimaryActions) {
                target.push(new Separator());
            }
        }
        else {
            target = secondaryBucket;
            if (target.length > 0) {
                target.push(new Separator());
            }
        }
        for (let action of actions) {
            if (useAlternativeActions) {
                action = action instanceof MenuItemAction && action.alt ? action.alt : action;
            }
            const newLen = target.push(action);
            // keep submenu info for later inlining
            if (action instanceof SubmenuAction) {
                submenuInfo.add({ group, action, index: newLen - 1 });
            }
        }
    }
    // ask the outside if submenu should be inlined or not. only ask when
    // there would be enough space
    for (const { group, action, index } of submenuInfo) {
        const target = isPrimaryAction(group) ? primaryBucket : secondaryBucket;
        // inlining submenus with length 0 or 1 is easy,
        // larger submenus need to be checked with the overall limit
        const submenuActions = action.actions;
        if (shouldInlineSubmenu(action, group, target.length)) {
            target.splice(index, 1, ...submenuActions);
        }
    }
}
let MenuEntryActionViewItem = class MenuEntryActionViewItem extends ActionViewItem {
    constructor(action, _options, _keybindingService, _notificationService, _contextKeyService, _themeService, _contextMenuService, _accessibilityService) {
        super(undefined, action, { icon: !!(action.class || action.item.icon), label: !action.class && !action.item.icon, draggable: _options?.draggable, keybinding: _options?.keybinding, hoverDelegate: _options?.hoverDelegate, keybindingNotRenderedWithLabel: _options?.keybindingNotRenderedWithLabel });
        this._options = _options;
        this._keybindingService = _keybindingService;
        this._notificationService = _notificationService;
        this._contextKeyService = _contextKeyService;
        this._themeService = _themeService;
        this._contextMenuService = _contextMenuService;
        this._accessibilityService = _accessibilityService;
        this._wantsAltCommand = false;
        this._itemClassDispose = this._register(new MutableDisposable());
        this._altKey = ModifierKeyEmitter.getInstance();
    }
    get _menuItemAction() {
        return this._action;
    }
    get _commandAction() {
        return this._wantsAltCommand && this._menuItemAction.alt || this._menuItemAction;
    }
    async onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        try {
            await this.actionRunner.run(this._commandAction, this._context);
        }
        catch (err) {
            this._notificationService.error(err);
        }
    }
    render(container) {
        super.render(container);
        container.classList.add('menu-entry');
        if (this.options.icon) {
            this._updateItemClass(this._menuItemAction.item);
        }
        if (this._menuItemAction.alt) {
            let isMouseOver = false;
            const updateAltState = () => {
                const wantsAltCommand = !!this._menuItemAction.alt?.enabled &&
                    (!this._accessibilityService.isMotionReduced() || isMouseOver) && (this._altKey.keyStatus.altKey ||
                    (this._altKey.keyStatus.shiftKey && isMouseOver));
                if (wantsAltCommand !== this._wantsAltCommand) {
                    this._wantsAltCommand = wantsAltCommand;
                    this.updateLabel();
                    this.updateTooltip();
                    this.updateClass();
                }
            };
            this._register(this._altKey.event(updateAltState));
            this._register(addDisposableListener(container, 'mouseleave', _ => {
                isMouseOver = false;
                updateAltState();
            }));
            this._register(addDisposableListener(container, 'mouseenter', _ => {
                isMouseOver = true;
                updateAltState();
            }));
            updateAltState();
        }
    }
    updateLabel() {
        if (this.options.label && this.label) {
            this.label.textContent = this._commandAction.label;
        }
    }
    getTooltip() {
        const keybinding = this._keybindingService.lookupKeybinding(this._commandAction.id, this._contextKeyService);
        const keybindingLabel = keybinding && keybinding.getLabel();
        const tooltip = this._commandAction.tooltip || this._commandAction.label;
        let title = keybindingLabel
            ? localize(1644, "{0} ({1})", tooltip, keybindingLabel)
            : tooltip;
        if (!this._wantsAltCommand && this._menuItemAction.alt?.enabled) {
            const altTooltip = this._menuItemAction.alt.tooltip || this._menuItemAction.alt.label;
            const altKeybinding = this._keybindingService.lookupKeybinding(this._menuItemAction.alt.id, this._contextKeyService);
            const altKeybindingLabel = altKeybinding && altKeybinding.getLabel();
            const altTitleSection = altKeybindingLabel
                ? localize(1645, "{0} ({1})", altTooltip, altKeybindingLabel)
                : altTooltip;
            title = localize(1646, "{0}\n[{1}] {2}", title, UILabelProvider.modifierLabels[OS].altKey, altTitleSection);
        }
        return title;
    }
    updateClass() {
        if (this.options.icon) {
            if (this._commandAction !== this._menuItemAction) {
                if (this._menuItemAction.alt) {
                    this._updateItemClass(this._menuItemAction.alt.item);
                }
            }
            else {
                this._updateItemClass(this._menuItemAction.item);
            }
        }
    }
    _updateItemClass(item) {
        this._itemClassDispose.value = undefined;
        const { element, label } = this;
        if (!element || !label) {
            return;
        }
        const icon = this._commandAction.checked && isICommandActionToggleInfo(item.toggled) && item.toggled.icon ? item.toggled.icon : item.icon;
        if (!icon) {
            return;
        }
        if (ThemeIcon.isThemeIcon(icon)) {
            // theme icons
            const iconClasses = ThemeIcon.asClassNameArray(icon);
            label.classList.add(...iconClasses);
            this._itemClassDispose.value = toDisposable(() => {
                label.classList.remove(...iconClasses);
            });
        }
        else {
            // icon path/url
            label.style.backgroundImage = (isDark(this._themeService.getColorTheme().type)
                ? asCSSUrl(icon.dark)
                : asCSSUrl(icon.light));
            label.classList.add('icon');
            this._itemClassDispose.value = combinedDisposable(toDisposable(() => {
                label.style.backgroundImage = '';
                label.classList.remove('icon');
            }), this._themeService.onDidColorThemeChange(() => {
                // refresh when the theme changes in case we go between dark <-> light
                this.updateClass();
            }));
        }
    }
};
MenuEntryActionViewItem = __decorate([
    __param(2, IKeybindingService),
    __param(3, INotificationService),
    __param(4, IContextKeyService),
    __param(5, IThemeService),
    __param(6, IContextMenuService),
    __param(7, IAccessibilityService)
], MenuEntryActionViewItem);
class TextOnlyMenuEntryActionViewItem extends MenuEntryActionViewItem {
    render(container) {
        this.options.label = true;
        this.options.icon = false;
        super.render(container);
        container.classList.add('text-only');
        container.classList.toggle('use-comma', this._options?.useComma ?? false);
    }
    updateLabel() {
        const kb = this._keybindingService.lookupKeybinding(this._action.id, this._contextKeyService);
        if (!kb) {
            return super.updateLabel();
        }
        if (this.label) {
            const kb2 = TextOnlyMenuEntryActionViewItem._symbolPrintEnter(kb);
            if (this._options?.conversational) {
                this.label.textContent = localize(1647, '{1} to {0}', this._action.label, kb2);
            }
            else {
                this.label.textContent = localize(1648, '{0} ({1})', this._action.label, kb2);
            }
        }
    }
    static _symbolPrintEnter(kb) {
        return kb.getLabel()
            ?.replace(/\benter\b/gi, '\u23CE')
            .replace(/\bEscape\b/gi, 'Esc');
    }
}
let SubmenuEntryActionViewItem = class SubmenuEntryActionViewItem extends DropdownMenuActionViewItem {
    constructor(action, options, _keybindingService, _contextMenuService, _themeService) {
        const dropdownOptions = {
            ...options,
            menuAsChild: options?.menuAsChild ?? false,
            classNames: options?.classNames ?? (ThemeIcon.isThemeIcon(action.item.icon) ? ThemeIcon.asClassName(action.item.icon) : undefined),
            keybindingProvider: options?.keybindingProvider ?? (action => _keybindingService.lookupKeybinding(action.id))
        };
        super(action, { getActions: () => action.actions }, _contextMenuService, dropdownOptions);
        this._keybindingService = _keybindingService;
        this._contextMenuService = _contextMenuService;
        this._themeService = _themeService;
    }
    render(container) {
        super.render(container);
        assertType(this.element);
        container.classList.add('menu-entry');
        const action = this._action;
        const { icon } = action.item;
        if (icon && !ThemeIcon.isThemeIcon(icon)) {
            this.element.classList.add('icon');
            const setBackgroundImage = () => {
                if (this.element) {
                    this.element.style.backgroundImage = (isDark(this._themeService.getColorTheme().type)
                        ? asCSSUrl(icon.dark)
                        : asCSSUrl(icon.light));
                }
            };
            setBackgroundImage();
            this._register(this._themeService.onDidColorThemeChange(() => {
                // refresh when the theme changes in case we go between dark <-> light
                setBackgroundImage();
            }));
        }
    }
};
SubmenuEntryActionViewItem = __decorate([
    __param(2, IKeybindingService),
    __param(3, IContextMenuService),
    __param(4, IThemeService)
], SubmenuEntryActionViewItem);
let DropdownWithDefaultActionViewItem = class DropdownWithDefaultActionViewItem extends BaseActionViewItem {
    constructor(submenuAction, options, _keybindingService, _notificationService, _contextMenuService, _menuService, _instaService, _storageService) {
        super(null, submenuAction);
        this._keybindingService = _keybindingService;
        this._notificationService = _notificationService;
        this._contextMenuService = _contextMenuService;
        this._menuService = _menuService;
        this._instaService = _instaService;
        this._storageService = _storageService;
        this._defaultActionDisposables = this._register(new DisposableStore());
        this._container = null;
        this._options = options;
        this._storageKey = `${submenuAction.item.submenu.id}_lastActionId`;
        // determine default action
        let defaultAction;
        const defaultActionId = options?.togglePrimaryAction ? _storageService.get(this._storageKey, 1 /* StorageScope.WORKSPACE */) : undefined;
        if (defaultActionId) {
            defaultAction = submenuAction.actions.find(a => defaultActionId === a.id);
        }
        if (!defaultAction) {
            defaultAction = submenuAction.actions[0];
        }
        this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(MenuEntryActionViewItem, defaultAction, { keybinding: this._getDefaultActionKeybindingLabel(defaultAction) }));
        const dropdownOptions = {
            keybindingProvider: action => this._keybindingService.lookupKeybinding(action.id),
            ...options,
            menuAsChild: options?.menuAsChild ?? true,
            classNames: options?.classNames ?? ['codicon', 'codicon-chevron-down'],
            actionRunner: options?.actionRunner ?? this._register(new ActionRunner()),
        };
        this._dropdown = this._register(new DropdownMenuActionViewItem(submenuAction, submenuAction.actions, this._contextMenuService, dropdownOptions));
        if (options?.togglePrimaryAction) {
            this._register(this._dropdown.actionRunner.onDidRun((e) => {
                if (e.action instanceof MenuItemAction) {
                    this.update(e.action);
                }
            }));
        }
    }
    update(lastAction) {
        if (this._options?.togglePrimaryAction) {
            this._storageService.store(this._storageKey, lastAction.id, 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        }
        this._defaultActionDisposables.clear();
        this._defaultAction = this._defaultActionDisposables.add(this._instaService.createInstance(MenuEntryActionViewItem, lastAction, { keybinding: this._getDefaultActionKeybindingLabel(lastAction) }));
        this._defaultAction.actionRunner = this._defaultActionDisposables.add(new class extends ActionRunner {
            async runAction(action, context) {
                await action.run(undefined);
            }
        }());
        if (this._container) {
            this._defaultAction.render(prepend(this._container, $('.action-container')));
        }
    }
    _getDefaultActionKeybindingLabel(defaultAction) {
        let defaultActionKeybinding;
        if (this._options?.renderKeybindingWithDefaultActionLabel) {
            const kb = this._keybindingService.lookupKeybinding(defaultAction.id);
            if (kb) {
                defaultActionKeybinding = `(${kb.getLabel()})`;
            }
        }
        return defaultActionKeybinding;
    }
    setActionContext(newContext) {
        super.setActionContext(newContext);
        this._defaultAction.setActionContext(newContext);
        this._dropdown.setActionContext(newContext);
    }
    set actionRunner(actionRunner) {
        super.actionRunner = actionRunner;
        this._defaultAction.actionRunner = actionRunner;
        this._dropdown.actionRunner = actionRunner;
    }
    get actionRunner() {
        return super.actionRunner;
    }
    render(container) {
        this._container = container;
        super.render(this._container);
        this._container.classList.add('monaco-dropdown-with-default');
        const primaryContainer = $('.action-container');
        this._defaultAction.render(append(this._container, primaryContainer));
        this._register(addDisposableListener(primaryContainer, EventType.KEY_DOWN, (e) => {
            const event = new StandardKeyboardEvent(e);
            if (event.equals(17 /* KeyCode.RightArrow */)) {
                this._defaultAction.element.tabIndex = -1;
                this._dropdown.focus();
                event.stopPropagation();
            }
        }));
        const dropdownContainer = $('.dropdown-action-container');
        this._dropdown.render(append(this._container, dropdownContainer));
        this._register(addDisposableListener(dropdownContainer, EventType.KEY_DOWN, (e) => {
            const event = new StandardKeyboardEvent(e);
            if (event.equals(15 /* KeyCode.LeftArrow */)) {
                this._defaultAction.element.tabIndex = 0;
                this._dropdown.setFocusable(false);
                this._defaultAction.element?.focus();
                event.stopPropagation();
            }
        }));
    }
    focus(fromRight) {
        if (fromRight) {
            this._dropdown.focus();
        }
        else {
            this._defaultAction.element.tabIndex = 0;
            this._defaultAction.element.focus();
        }
    }
    blur() {
        this._defaultAction.element.tabIndex = -1;
        this._dropdown.blur();
        this._container.blur();
    }
    setFocusable(focusable) {
        if (focusable) {
            this._defaultAction.element.tabIndex = 0;
        }
        else {
            this._defaultAction.element.tabIndex = -1;
            this._dropdown.setFocusable(false);
        }
    }
};
DropdownWithDefaultActionViewItem = __decorate([
    __param(2, IKeybindingService),
    __param(3, INotificationService),
    __param(4, IContextMenuService),
    __param(5, IMenuService),
    __param(6, IInstantiationService),
    __param(7, IStorageService)
], DropdownWithDefaultActionViewItem);
let SubmenuEntrySelectActionViewItem = class SubmenuEntrySelectActionViewItem extends SelectActionViewItem {
    constructor(action, contextViewService, configurationService) {
        super(null, action, action.actions.map(a => ({
            text: a.id === Separator.ID ? '\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500' : a.label,
            isDisabled: !a.enabled,
        })), 0, contextViewService, defaultSelectBoxStyles, { ariaLabel: action.tooltip, optionsAsChildren: true, useCustomDrawn: !hasNativeContextMenu(configurationService) });
        this.select(Math.max(0, action.actions.findIndex(a => a.checked)));
    }
    render(container) {
        super.render(container);
        container.style.borderColor = asCssVariable(selectBorder);
    }
    runAction(option, index) {
        const action = this.action.actions[index];
        if (action) {
            this.actionRunner.run(action);
        }
    }
};
SubmenuEntrySelectActionViewItem = __decorate([
    __param(1, IContextViewService),
    __param(2, IConfigurationService)
], SubmenuEntrySelectActionViewItem);
/**
 * Creates action view items for menu actions or submenu actions.
 */
function createActionViewItem(instaService, action, options) {
    if (action instanceof MenuItemAction) {
        return instaService.createInstance(MenuEntryActionViewItem, action, options);
    }
    else if (action instanceof SubmenuItemAction) {
        if (action.item.isSelection) {
            return instaService.createInstance(SubmenuEntrySelectActionViewItem, action);
        }
        else if (action.item.isSplitButton) {
            return instaService.createInstance(DropdownWithDefaultActionViewItem, action, {
                ...options,
                togglePrimaryAction: typeof action.item.isSplitButton !== 'boolean' ? action.item.isSplitButton.togglePrimaryAction : false,
            });
        }
        else {
            return instaService.createInstance(SubmenuEntryActionViewItem, action, options);
        }
    }
    else {
        return undefined;
    }
}

export { DropdownWithDefaultActionViewItem, MenuEntryActionViewItem, SubmenuEntryActionViewItem, TextOnlyMenuEntryActionViewItem, createActionViewItem, fillInActionBarActions, getActionBarActions, getFlatActionBarActions, getFlatContextMenuActions };
