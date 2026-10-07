import { Event } from '../../../../base/common/event.js';
import { LRUCache } from '../../../../base/common/map.js';
import { Range } from '../../../common/core/range.js';
import { CodeLensModel } from './codelens.js';
import { registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { createDecorator } from '../../../../platform/instantiation/common/instantiation.js';
import { IStorageService, WillSaveStateReason } from '../../../../platform/storage/common/storage.js';
import { mainWindow } from '../../../../base/browser/window.js';
import { runWhenWindowIdle } from '../../../../base/browser/dom.js';

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
const ICodeLensCache = createDecorator('ICodeLensCache');
class CacheItem {
    constructor(lineCount, data) {
        this.lineCount = lineCount;
        this.data = data;
    }
}
let CodeLensCache = class CodeLensCache {
    constructor(storageService) {
        this._fakeProvider = new class {
            provideCodeLenses() {
                throw new Error('not supported');
            }
        };
        this._cache = new LRUCache(20, 0.75);
        // remove old data
        const oldkey = 'codelens/cache';
        runWhenWindowIdle(mainWindow, () => storageService.remove(oldkey, 1 /* StorageScope.WORKSPACE */));
        // restore lens data on start
        const key = 'codelens/cache2';
        const raw = storageService.get(key, 1 /* StorageScope.WORKSPACE */, '{}');
        this._deserialize(raw);
        // store lens data on shutdown
        const onWillSaveStateBecauseOfShutdown = Event.filter(storageService.onWillSaveState, e => e.reason === WillSaveStateReason.SHUTDOWN);
        Event.once(onWillSaveStateBecauseOfShutdown)(e => {
            storageService.store(key, this._serialize(), 1 /* StorageScope.WORKSPACE */, 1 /* StorageTarget.MACHINE */);
        });
    }
    put(model, data) {
        // create a copy of the model that is without command-ids
        // but with comand-labels
        const copyItems = data.lenses.map((item) => {
            return {
                range: item.symbol.range,
                command: item.symbol.command && { id: '', title: item.symbol.command?.title },
            };
        });
        const copyModel = new CodeLensModel();
        copyModel.add({ lenses: copyItems }, this._fakeProvider);
        const item = new CacheItem(model.getLineCount(), copyModel);
        this._cache.set(model.uri.toString(), item);
    }
    get(model) {
        const item = this._cache.get(model.uri.toString());
        return item && item.lineCount === model.getLineCount() ? item.data : undefined;
    }
    delete(model) {
        this._cache.delete(model.uri.toString());
    }
    // --- persistence
    _serialize() {
        const data = Object.create(null);
        for (const [key, value] of this._cache) {
            const lines = new Set();
            for (const d of value.data.lenses) {
                lines.add(d.symbol.range.startLineNumber);
            }
            data[key] = {
                lineCount: value.lineCount,
                lines: [...lines.values()]
            };
        }
        return JSON.stringify(data);
    }
    _deserialize(raw) {
        try {
            const data = JSON.parse(raw);
            for (const key in data) {
                const element = data[key];
                const lenses = [];
                for (const line of element.lines) {
                    lenses.push({ range: new Range(line, 1, line, 11) });
                }
                const model = new CodeLensModel();
                model.add({ lenses }, this._fakeProvider);
                this._cache.set(key, new CacheItem(element.lineCount, model));
            }
        }
        catch {
            // ignore...
        }
    }
};
CodeLensCache = __decorate([
    __param(0, IStorageService)
], CodeLensCache);
registerSingleton(ICodeLensCache, CodeLensCache, 1 /* InstantiationType.Delayed */);

export { CodeLensCache, ICodeLensCache };
