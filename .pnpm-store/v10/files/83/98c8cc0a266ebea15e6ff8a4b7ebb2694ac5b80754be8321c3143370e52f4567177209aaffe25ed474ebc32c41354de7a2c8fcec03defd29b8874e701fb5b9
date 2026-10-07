import { RunOnceScheduler } from '../../../base/common/async.js';
import { Emitter, DebounceEmitter } from '../../../base/common/event.js';
import { DisposableStore } from '../../../base/common/lifecycle.js';
import { isIMenuItem, MenuItemAction, SubmenuItemAction, MenuRegistry, isISubmenuItem } from './actions.js';
import { ICommandService } from '../../commands/common/commands.js';
import { IContextKeyService } from '../../contextkey/common/contextkey.js';
import { Separator, toAction } from '../../../base/common/actions.js';
import { IStorageService } from '../../storage/common/storage.js';
import { removeFastWithoutKeepingOrder } from '../../../base/common/arrays.js';
import { localize } from '../../../nls.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';

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
var PersistedMenuHideState_1, MenuInfo_1;
let MenuService = class MenuService {
    constructor(_commandService, _keybindingService, storageService) {
        this._commandService = _commandService;
        this._keybindingService = _keybindingService;
        this._hiddenStates = new PersistedMenuHideState(storageService);
    }
    createMenu(id, contextKeyService, options) {
        return new MenuImpl(id, this._hiddenStates, { emitEventsForSubmenuChanges: false, eventDebounceDelay: 50, ...options }, this._commandService, this._keybindingService, contextKeyService);
    }
    getMenuActions(id, contextKeyService, options) {
        const menu = new MenuImpl(id, this._hiddenStates, { emitEventsForSubmenuChanges: false, eventDebounceDelay: 50, ...options }, this._commandService, this._keybindingService, contextKeyService);
        const actions = menu.getActions(options);
        menu.dispose();
        return actions;
    }
    resetHiddenStates(ids) {
        this._hiddenStates.reset(ids);
    }
};
MenuService = __decorate([
    __param(0, ICommandService),
    __param(1, IKeybindingService),
    __param(2, IStorageService)
], MenuService);
let PersistedMenuHideState = class PersistedMenuHideState {
    static { PersistedMenuHideState_1 = this; }
    static { this._key = 'menu.hiddenCommands'; }
    constructor(_storageService) {
        this._storageService = _storageService;
        this._disposables = new DisposableStore();
        this._onDidChange = new Emitter();
        this.onDidChange = this._onDidChange.event;
        this._ignoreChangeEvent = false;
        this._hiddenByDefaultCache = new Map();
        try {
            const raw = _storageService.get(PersistedMenuHideState_1._key, 0 /* StorageScope.PROFILE */, '{}');
            this._data = JSON.parse(raw);
        }
        catch (err) {
            this._data = Object.create(null);
        }
        this._disposables.add(_storageService.onDidChangeValue(0 /* StorageScope.PROFILE */, PersistedMenuHideState_1._key, this._disposables)(() => {
            if (!this._ignoreChangeEvent) {
                try {
                    const raw = _storageService.get(PersistedMenuHideState_1._key, 0 /* StorageScope.PROFILE */, '{}');
                    this._data = JSON.parse(raw);
                }
                catch (err) {
                    console.log('FAILED to read storage after UPDATE', err);
                }
            }
            this._onDidChange.fire();
        }));
    }
    dispose() {
        this._onDidChange.dispose();
        this._disposables.dispose();
    }
    _isHiddenByDefault(menu, commandId) {
        return this._hiddenByDefaultCache.get(`${menu.id}/${commandId}`) ?? false;
    }
    setDefaultState(menu, commandId, hidden) {
        this._hiddenByDefaultCache.set(`${menu.id}/${commandId}`, hidden);
    }
    isHidden(menu, commandId) {
        const hiddenByDefault = this._isHiddenByDefault(menu, commandId);
        const state = this._data[menu.id]?.includes(commandId) ?? false;
        return hiddenByDefault ? !state : state;
    }
    updateHidden(menu, commandId, hidden) {
        const hiddenByDefault = this._isHiddenByDefault(menu, commandId);
        if (hiddenByDefault) {
            hidden = !hidden;
        }
        const entries = this._data[menu.id];
        if (!hidden) {
            // remove and cleanup
            if (entries) {
                const idx = entries.indexOf(commandId);
                if (idx >= 0) {
                    removeFastWithoutKeepingOrder(entries, idx);
                }
                if (entries.length === 0) {
                    delete this._data[menu.id];
                }
            }
        }
        else {
            // add unless already added
            if (!entries) {
                this._data[menu.id] = [commandId];
            }
            else {
                const idx = entries.indexOf(commandId);
                if (idx < 0) {
                    entries.push(commandId);
                }
            }
        }
        this._persist();
    }
    reset(menus) {
        if (menus === undefined) {
            // reset all
            this._data = Object.create(null);
            this._persist();
        }
        else {
            // reset only for a specific menu
            for (const { id } of menus) {
                if (this._data[id]) {
                    delete this._data[id];
                }
            }
            this._persist();
        }
    }
    _persist() {
        try {
            this._ignoreChangeEvent = true;
            const raw = JSON.stringify(this._data);
            this._storageService.store(PersistedMenuHideState_1._key, raw, 0 /* StorageScope.PROFILE */, 0 /* StorageTarget.USER */);
        }
        finally {
            this._ignoreChangeEvent = false;
        }
    }
};
PersistedMenuHideState = PersistedMenuHideState_1 = __decorate([
    __param(0, IStorageService)
], PersistedMenuHideState);
class MenuInfoSnapshot {
    constructor(_id, _collectContextKeysForSubmenus) {
        this._id = _id;
        this._collectContextKeysForSubmenus = _collectContextKeysForSubmenus;
        this._menuGroups = [];
        this._allMenuIds = new Set();
        this._structureContextKeys = new Set();
        this._preconditionContextKeys = new Set();
        this._toggledContextKeys = new Set();
        this.refresh();
    }
    get allMenuIds() {
        return this._allMenuIds;
    }
    get structureContextKeys() {
        return this._structureContextKeys;
    }
    get preconditionContextKeys() {
        return this._preconditionContextKeys;
    }
    get toggledContextKeys() {
        return this._toggledContextKeys;
    }
    refresh() {
        // reset
        this._menuGroups.length = 0;
        this._allMenuIds.clear();
        this._structureContextKeys.clear();
        this._preconditionContextKeys.clear();
        this._toggledContextKeys.clear();
        const menuItems = this._sort(MenuRegistry.getMenuItems(this._id));
        let group;
        for (const item of menuItems) {
            // group by groupId
            const groupName = item.group || '';
            if (!group || group[0] !== groupName) {
                group = [groupName, []];
                this._menuGroups.push(group);
            }
            group[1].push(item);
            // keep keys and submenu ids for eventing
            this._collectContextKeysAndSubmenuIds(item);
        }
        this._allMenuIds.add(this._id);
    }
    _sort(menuItems) {
        // no sorting needed in snapshot
        return menuItems;
    }
    _collectContextKeysAndSubmenuIds(item) {
        MenuInfoSnapshot._fillInKbExprKeys(item.when, this._structureContextKeys);
        if (isIMenuItem(item)) {
            // keep precondition keys for event if applicable
            if (item.command.precondition) {
                MenuInfoSnapshot._fillInKbExprKeys(item.command.precondition, this._preconditionContextKeys);
            }
            // keep toggled keys for event if applicable
            if (item.command.toggled) {
                const toggledExpression = item.command.toggled.condition || item.command.toggled;
                MenuInfoSnapshot._fillInKbExprKeys(toggledExpression, this._toggledContextKeys);
            }
        }
        else if (this._collectContextKeysForSubmenus) {
            // recursively collect context keys from submenus so that this
            // menu fires events when context key changes affect submenus
            MenuRegistry.getMenuItems(item.submenu).forEach(this._collectContextKeysAndSubmenuIds, this);
            this._allMenuIds.add(item.submenu);
        }
    }
    static _fillInKbExprKeys(exp, set) {
        if (exp) {
            for (const key of exp.keys()) {
                set.add(key);
            }
        }
    }
}
let MenuInfo = MenuInfo_1 = class MenuInfo extends MenuInfoSnapshot {
    constructor(_id, _hiddenStates, _collectContextKeysForSubmenus, _commandService, _keybindingService, _contextKeyService) {
        super(_id, _collectContextKeysForSubmenus);
        this._hiddenStates = _hiddenStates;
        this._commandService = _commandService;
        this._keybindingService = _keybindingService;
        this._contextKeyService = _contextKeyService;
        this.refresh();
    }
    createActionGroups(options) {
        const result = [];
        for (const group of this._menuGroups) {
            const [id, items] = group;
            let activeActions;
            for (const item of items) {
                if (this._contextKeyService.contextMatchesRules(item.when)) {
                    const isMenuItem = isIMenuItem(item);
                    if (isMenuItem) {
                        this._hiddenStates.setDefaultState(this._id, item.command.id, !!item.isHiddenByDefault);
                    }
                    const menuHide = createMenuHide(this._id, isMenuItem ? item.command : item, this._hiddenStates);
                    if (isMenuItem) {
                        // MenuItemAction
                        const menuKeybinding = createConfigureKeybindingAction(this._commandService, this._keybindingService, item.command.id, item.when);
                        (activeActions ??= []).push(new MenuItemAction(item.command, item.alt, options, menuHide, menuKeybinding, this._contextKeyService, this._commandService));
                    }
                    else {
                        // SubmenuItemAction
                        const groups = new MenuInfo_1(item.submenu, this._hiddenStates, this._collectContextKeysForSubmenus, this._commandService, this._keybindingService, this._contextKeyService).createActionGroups(options);
                        const submenuActions = Separator.join(...groups.map(g => g[1]));
                        if (submenuActions.length > 0) {
                            (activeActions ??= []).push(new SubmenuItemAction(item, menuHide, submenuActions));
                        }
                    }
                }
            }
            if (activeActions && activeActions.length > 0) {
                result.push([id, activeActions]);
            }
        }
        return result;
    }
    _sort(menuItems) {
        return menuItems.sort(MenuInfo_1._compareMenuItems);
    }
    static _compareMenuItems(a, b) {
        const aGroup = a.group;
        const bGroup = b.group;
        if (aGroup !== bGroup) {
            // Falsy groups come last
            if (!aGroup) {
                return 1;
            }
            else if (!bGroup) {
                return -1;
            }
            // 'navigation' group comes first
            if (aGroup === 'navigation') {
                return -1;
            }
            else if (bGroup === 'navigation') {
                return 1;
            }
            // lexical sort for groups
            const value = aGroup.localeCompare(bGroup);
            if (value !== 0) {
                return value;
            }
        }
        // sort on priority - default is 0
        const aPrio = a.order || 0;
        const bPrio = b.order || 0;
        if (aPrio < bPrio) {
            return -1;
        }
        else if (aPrio > bPrio) {
            return 1;
        }
        // sort on titles
        return MenuInfo_1._compareTitles(isIMenuItem(a) ? a.command.title : a.title, isIMenuItem(b) ? b.command.title : b.title);
    }
    static _compareTitles(a, b) {
        const aStr = typeof a === 'string' ? a : a.original;
        const bStr = typeof b === 'string' ? b : b.original;
        return aStr.localeCompare(bStr);
    }
};
MenuInfo = MenuInfo_1 = __decorate([
    __param(3, ICommandService),
    __param(4, IKeybindingService),
    __param(5, IContextKeyService)
], MenuInfo);
let MenuImpl = class MenuImpl {
    constructor(id, hiddenStates, options, commandService, keybindingService, contextKeyService) {
        this._disposables = new DisposableStore();
        this._menuInfo = new MenuInfo(id, hiddenStates, options.emitEventsForSubmenuChanges, commandService, keybindingService, contextKeyService);
        // Rebuild this menu whenever the menu registry reports an event for this MenuId.
        // This usually happen while code and extensions are loaded and affects the over
        // structure of the menu
        const rebuildMenuSoon = new RunOnceScheduler(() => {
            this._menuInfo.refresh();
            this._onDidChange.fire({ menu: this, isStructuralChange: true, isEnablementChange: true, isToggleChange: true });
        }, options.eventDebounceDelay);
        this._disposables.add(rebuildMenuSoon);
        this._disposables.add(MenuRegistry.onDidChangeMenu(e => {
            for (const id of this._menuInfo.allMenuIds) {
                if (e.has(id)) {
                    rebuildMenuSoon.schedule();
                    break;
                }
            }
        }));
        // When context keys or storage state changes we need to check if the menu also has changed. However,
        // we only do that when someone listens on this menu because (1) these events are
        // firing often and (2) menu are often leaked
        const lazyListener = this._disposables.add(new DisposableStore());
        const merge = (events) => {
            let isStructuralChange = false;
            let isEnablementChange = false;
            let isToggleChange = false;
            for (const item of events) {
                isStructuralChange = isStructuralChange || item.isStructuralChange;
                isEnablementChange = isEnablementChange || item.isEnablementChange;
                isToggleChange = isToggleChange || item.isToggleChange;
                if (isStructuralChange && isEnablementChange && isToggleChange) {
                    // everything is TRUE, no need to continue iterating
                    break;
                }
            }
            return { menu: this, isStructuralChange, isEnablementChange, isToggleChange };
        };
        const startLazyListener = () => {
            lazyListener.add(contextKeyService.onDidChangeContext(e => {
                const isStructuralChange = e.affectsSome(this._menuInfo.structureContextKeys);
                const isEnablementChange = e.affectsSome(this._menuInfo.preconditionContextKeys);
                const isToggleChange = e.affectsSome(this._menuInfo.toggledContextKeys);
                if (isStructuralChange || isEnablementChange || isToggleChange) {
                    this._onDidChange.fire({ menu: this, isStructuralChange, isEnablementChange, isToggleChange });
                }
            }));
            lazyListener.add(hiddenStates.onDidChange(e => {
                this._onDidChange.fire({ menu: this, isStructuralChange: true, isEnablementChange: false, isToggleChange: false });
            }));
        };
        this._onDidChange = new DebounceEmitter({
            // start/stop context key listener
            onWillAddFirstListener: startLazyListener,
            onDidRemoveLastListener: lazyListener.clear.bind(lazyListener),
            delay: options.eventDebounceDelay,
            merge
        });
        this.onDidChange = this._onDidChange.event;
    }
    getActions(options) {
        return this._menuInfo.createActionGroups(options);
    }
    dispose() {
        this._disposables.dispose();
        this._onDidChange.dispose();
    }
};
MenuImpl = __decorate([
    __param(3, ICommandService),
    __param(4, IKeybindingService),
    __param(5, IContextKeyService)
], MenuImpl);
function createMenuHide(menu, command, states) {
    const id = isISubmenuItem(command) ? command.submenu.id : command.id;
    const title = typeof command.title === 'string' ? command.title : command.title.value;
    const hide = toAction({
        id: `hide/${menu.id}/${id}`,
        label: localize(1651, 'Hide \'{0}\'', title),
        run() { states.updateHidden(menu, id, true); }
    });
    const toggle = toAction({
        id: `toggle/${menu.id}/${id}`,
        label: title,
        get checked() { return !states.isHidden(menu, id); },
        run() { states.updateHidden(menu, id, !!this.checked); }
    });
    return {
        hide,
        toggle,
        get isHidden() { return !toggle.checked; },
    };
}
function createConfigureKeybindingAction(commandService, keybindingService, commandId, when = undefined, enabled = true) {
    return toAction({
        id: `configureKeybinding/${commandId}`,
        label: localize(1652, "Configure Keybinding"),
        enabled,
        run() {
            // Only set the when clause when there is no keybinding
            // It is possible that the action and the keybinding have different when clauses
            const hasKeybinding = !!keybindingService.lookupKeybinding(commandId); // This may only be called inside the `run()` method as it can be expensive on startup. #210529
            const whenValue = !hasKeybinding && when ? when.serialize() : undefined;
            commandService.executeCommand('workbench.action.openGlobalKeybindings', `@command:${commandId}` + (whenValue ? ` +when:${whenValue}` : ''));
        }
    });
}

export { MenuService, createConfigureKeybindingAction };
