import { Emitter } from '../../../base/common/event.js';
import { registerSingleton } from '../../instantiation/common/extensions.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';
import { MenuId } from '../common/actions.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const IActionViewItemService = createDecorator('IActionViewItemService');
class ActionViewItemService {
    constructor() {
        this._providers = new Map();
        this._onDidChange = new Emitter();
        this.onDidChange = this._onDidChange.event;
    }
    dispose() {
        this._onDidChange.dispose();
    }
    lookUp(menu, commandOrMenuId) {
        return this._providers.get(this._makeKey(menu, commandOrMenuId));
    }
    _makeKey(menu, commandOrMenuId) {
        return `${menu.id}/${(commandOrMenuId instanceof MenuId ? commandOrMenuId.id : commandOrMenuId)}`;
    }
}
registerSingleton(IActionViewItemService, ActionViewItemService, 1 /* InstantiationType.Delayed */);

export { IActionViewItemService };
