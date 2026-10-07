import { Emitter } from '../../../../base/common/event.js';
import { IStorageService } from '../../../../platform/storage/common/storage.js';

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
var ReplaceWidgetHistory_1;
let ReplaceWidgetHistory = class ReplaceWidgetHistory {
    static { ReplaceWidgetHistory_1 = this; }
    static { this.FIND_HISTORY_KEY = 'workbench.replace.history'; }
    static { this._instance = null; }
    static getOrCreate(storageService) {
        if (!ReplaceWidgetHistory_1._instance) {
            ReplaceWidgetHistory_1._instance = new ReplaceWidgetHistory_1(storageService);
        }
        return ReplaceWidgetHistory_1._instance;
    }
    constructor(storageService) {
        this.storageService = storageService;
        this.inMemoryValues = new Set();
        this._onDidChangeEmitter = new Emitter();
        this.onDidChange = this._onDidChangeEmitter.event;
        this.load();
    }
    delete(t) {
        const result = this.inMemoryValues.delete(t);
        this.save();
        return result;
    }
    add(t) {
        this.inMemoryValues.add(t);
        this.save();
        return this;
    }
    has(t) {
        return this.inMemoryValues.has(t);
    }
    forEach(callbackfn, thisArg) {
        // fetch latest from storage
        this.load();
        return this.inMemoryValues.forEach(callbackfn);
    }
    replace(t) {
        this.inMemoryValues = new Set(t);
        this.save();
    }
    load() {
        let result;
        const raw = this.storageService.get(ReplaceWidgetHistory_1.FIND_HISTORY_KEY, 1 /* StorageScope.WORKSPACE */);
        if (raw) {
            try {
                result = JSON.parse(raw);
            }
            catch (e) {
                // Invalid data
            }
        }
        this.inMemoryValues = new Set(result || []);
    }
    // Run saves async
    save() {
        const elements = [];
        this.inMemoryValues.forEach(e => elements.push(e));
        return new Promise(resolve => {
            this.storageService.store(ReplaceWidgetHistory_1.FIND_HISTORY_KEY, JSON.stringify(elements), 1 /* StorageScope.WORKSPACE */, 0 /* StorageTarget.USER */);
            this._onDidChangeEmitter.fire(elements);
            resolve();
        });
    }
};
ReplaceWidgetHistory = ReplaceWidgetHistory_1 = __decorate([
    __param(0, IStorageService)
], ReplaceWidgetHistory);

export { ReplaceWidgetHistory };
