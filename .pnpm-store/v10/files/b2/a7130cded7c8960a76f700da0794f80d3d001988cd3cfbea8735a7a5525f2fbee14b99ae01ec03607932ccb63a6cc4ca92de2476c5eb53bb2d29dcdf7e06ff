import { ModifierKeyEmitter } from '../../../base/browser/dom.js';
import { Separator } from '../../../base/common/actions.js';
import { Emitter } from '../../../base/common/event.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { getFlatContextMenuActions } from '../../actions/browser/menuEntryActionViewItem.js';
import { IMenuService, MenuId } from '../../actions/common/actions.js';
import { IContextKeyService } from '../../contextkey/common/contextkey.js';
import { IKeybindingService } from '../../keybinding/common/keybinding.js';
import { INotificationService } from '../../notification/common/notification.js';
import { ITelemetryService } from '../../telemetry/common/telemetry.js';
import { ContextMenuHandler } from './contextMenuHandler.js';
import { IContextViewService } from './contextView.js';

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
let ContextMenuService = class ContextMenuService extends Disposable {
    get contextMenuHandler() {
        if (!this._contextMenuHandler) {
            this._contextMenuHandler = new ContextMenuHandler(this.contextViewService, this.telemetryService, this.notificationService, this.keybindingService);
        }
        return this._contextMenuHandler;
    }
    constructor(telemetryService, notificationService, contextViewService, keybindingService, menuService, contextKeyService) {
        super();
        this.telemetryService = telemetryService;
        this.notificationService = notificationService;
        this.contextViewService = contextViewService;
        this.keybindingService = keybindingService;
        this.menuService = menuService;
        this.contextKeyService = contextKeyService;
        this._contextMenuHandler = undefined;
        this._onDidShowContextMenu = this._store.add(new Emitter());
        this.onDidShowContextMenu = this._onDidShowContextMenu.event;
        this._onDidHideContextMenu = this._store.add(new Emitter());
        this.onDidHideContextMenu = this._onDidHideContextMenu.event;
    }
    configure(options) {
        this.contextMenuHandler.configure(options);
    }
    // ContextMenu
    showContextMenu(delegate) {
        delegate = ContextMenuMenuDelegate.transform(delegate, this.menuService, this.contextKeyService);
        this.contextMenuHandler.showContextMenu({
            ...delegate,
            onHide: (didCancel) => {
                delegate.onHide?.(didCancel);
                this._onDidHideContextMenu.fire();
            }
        });
        ModifierKeyEmitter.getInstance().resetKeyStatus();
        this._onDidShowContextMenu.fire();
    }
};
ContextMenuService = __decorate([
    __param(0, ITelemetryService),
    __param(1, INotificationService),
    __param(2, IContextViewService),
    __param(3, IKeybindingService),
    __param(4, IMenuService),
    __param(5, IContextKeyService)
], ContextMenuService);
var ContextMenuMenuDelegate;
(function (ContextMenuMenuDelegate) {
    function is(thing) {
        return thing && thing.menuId instanceof MenuId;
    }
    function transform(delegate, menuService, globalContextKeyService) {
        if (!is(delegate)) {
            return delegate;
        }
        const { menuId, menuActionOptions, contextKeyService } = delegate;
        return {
            ...delegate,
            getActions: () => {
                let target = [];
                if (menuId) {
                    const menu = menuService.getMenuActions(menuId, contextKeyService ?? globalContextKeyService, menuActionOptions);
                    target = getFlatContextMenuActions(menu);
                }
                if (!delegate.getActions) {
                    return target;
                }
                else {
                    return Separator.join(delegate.getActions(), target);
                }
            }
        };
    }
    ContextMenuMenuDelegate.transform = transform;
})(ContextMenuMenuDelegate || (ContextMenuMenuDelegate = {}));

export { ContextMenuMenuDelegate, ContextMenuService };
