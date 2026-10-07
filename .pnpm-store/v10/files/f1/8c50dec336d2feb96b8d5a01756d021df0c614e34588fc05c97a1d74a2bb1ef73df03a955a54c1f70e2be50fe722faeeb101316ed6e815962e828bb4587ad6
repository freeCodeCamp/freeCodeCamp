import { RunOnceScheduler } from '../../../../base/common/async.js';
import { DisposableStore } from '../../../../base/common/lifecycle.js';
import { LRUCache } from '../../../../base/common/map.js';
import { TernarySearchTree } from '../../../../base/common/ternarySearchTree.js';
import { CompletionItemKinds } from '../../../common/languages.js';
import { IConfigurationService } from '../../../../platform/configuration/common/configuration.js';
import { registerSingleton } from '../../../../platform/instantiation/common/extensions.js';
import { createDecorator } from '../../../../platform/instantiation/common/instantiation.js';
import { WillSaveStateReason, IStorageService } from '../../../../platform/storage/common/storage.js';

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
var SuggestMemoryService_1;
class Memory {
    constructor(name) {
        this.name = name;
    }
    select(model, pos, items) {
        if (items.length === 0) {
            return 0;
        }
        const topScore = items[0].score[0];
        for (let i = 0; i < items.length; i++) {
            const { score, completion: suggestion } = items[i];
            if (score[0] !== topScore) {
                // stop when leaving the group of top matches
                break;
            }
            if (suggestion.preselect) {
                // stop when seeing an auto-select-item
                return i;
            }
        }
        return 0;
    }
}
class NoMemory extends Memory {
    constructor() {
        super('first');
    }
    memorize(model, pos, item) {
        // no-op
    }
    toJSON() {
        return undefined;
    }
    fromJSON() {
        //
    }
}
class LRUMemory extends Memory {
    constructor() {
        super('recentlyUsed');
        this._cache = new LRUCache(300, 0.66);
        this._seq = 0;
    }
    memorize(model, pos, item) {
        const key = `${model.getLanguageId()}/${item.textLabel}`;
        this._cache.set(key, {
            touch: this._seq++,
            type: item.completion.kind,
            insertText: item.completion.insertText
        });
    }
    select(model, pos, items) {
        if (items.length === 0) {
            return 0;
        }
        const lineSuffix = model.getLineContent(pos.lineNumber).substr(pos.column - 10, pos.column - 1);
        if (/\s$/.test(lineSuffix)) {
            return super.select(model, pos, items);
        }
        const topScore = items[0].score[0];
        let indexPreselect = -1;
        let indexRecency = -1;
        let seq = -1;
        for (let i = 0; i < items.length; i++) {
            if (items[i].score[0] !== topScore) {
                // consider only top items
                break;
            }
            const key = `${model.getLanguageId()}/${items[i].textLabel}`;
            const item = this._cache.peek(key);
            if (item && item.touch > seq && item.type === items[i].completion.kind && item.insertText === items[i].completion.insertText) {
                seq = item.touch;
                indexRecency = i;
            }
            if (items[i].completion.preselect && indexPreselect === -1) {
                // stop when seeing an auto-select-item
                return indexPreselect = i;
            }
        }
        if (indexRecency !== -1) {
            return indexRecency;
        }
        else if (indexPreselect !== -1) {
            return indexPreselect;
        }
        else {
            return 0;
        }
    }
    toJSON() {
        return this._cache.toJSON();
    }
    fromJSON(data) {
        this._cache.clear();
        const seq = 0;
        for (const [key, value] of data) {
            value.touch = seq;
            value.type = typeof value.type === 'number' ? value.type : CompletionItemKinds.fromString(value.type);
            this._cache.set(key, value);
        }
        this._seq = this._cache.size;
    }
}
class PrefixMemory extends Memory {
    constructor() {
        super('recentlyUsedByPrefix');
        this._trie = TernarySearchTree.forStrings();
        this._seq = 0;
    }
    memorize(model, pos, item) {
        const { word } = model.getWordUntilPosition(pos);
        const key = `${model.getLanguageId()}/${word}`;
        this._trie.set(key, {
            type: item.completion.kind,
            insertText: item.completion.insertText,
            touch: this._seq++
        });
    }
    select(model, pos, items) {
        const { word } = model.getWordUntilPosition(pos);
        if (!word) {
            return super.select(model, pos, items);
        }
        const key = `${model.getLanguageId()}/${word}`;
        let item = this._trie.get(key);
        if (!item) {
            item = this._trie.findSubstr(key);
        }
        if (item) {
            for (let i = 0; i < items.length; i++) {
                const { kind, insertText } = items[i].completion;
                if (kind === item.type && insertText === item.insertText) {
                    return i;
                }
            }
        }
        return super.select(model, pos, items);
    }
    toJSON() {
        const entries = [];
        this._trie.forEach((value, key) => entries.push([key, value]));
        // sort by last recently used (touch), then
        // take the top 200 item and normalize their
        // touch
        entries
            .sort((a, b) => -(a[1].touch - b[1].touch))
            .forEach((value, i) => value[1].touch = i);
        return entries.slice(0, 200);
    }
    fromJSON(data) {
        this._trie.clear();
        if (data.length > 0) {
            this._seq = data[0][1].touch + 1;
            for (const [key, value] of data) {
                value.type = typeof value.type === 'number' ? value.type : CompletionItemKinds.fromString(value.type);
                this._trie.set(key, value);
            }
        }
    }
}
let SuggestMemoryService = class SuggestMemoryService {
    static { SuggestMemoryService_1 = this; }
    static { this._strategyCtors = new Map([
        ['recentlyUsedByPrefix', PrefixMemory],
        ['recentlyUsed', LRUMemory],
        ['first', NoMemory]
    ]); }
    static { this._storagePrefix = 'suggest/memories'; }
    constructor(_storageService, _configService) {
        this._storageService = _storageService;
        this._configService = _configService;
        this._disposables = new DisposableStore();
        this._persistSoon = new RunOnceScheduler(() => this._saveState(), 500);
        this._disposables.add(_storageService.onWillSaveState(e => {
            if (e.reason === WillSaveStateReason.SHUTDOWN) {
                this._saveState();
            }
        }));
    }
    dispose() {
        this._disposables.dispose();
        this._persistSoon.dispose();
    }
    memorize(model, pos, item) {
        this._withStrategy(model, pos).memorize(model, pos, item);
        this._persistSoon.schedule();
    }
    select(model, pos, items) {
        return this._withStrategy(model, pos).select(model, pos, items);
    }
    _withStrategy(model, pos) {
        const mode = this._configService.getValue('editor.suggestSelection', {
            overrideIdentifier: model.getLanguageIdAtPosition(pos.lineNumber, pos.column),
            resource: model.uri
        });
        if (this._strategy?.name !== mode) {
            this._saveState();
            const ctor = SuggestMemoryService_1._strategyCtors.get(mode) || NoMemory;
            this._strategy = new ctor();
            try {
                const share = this._configService.getValue('editor.suggest.shareSuggestSelections');
                const scope = share ? 0 /* StorageScope.PROFILE */ : 1 /* StorageScope.WORKSPACE */;
                const raw = this._storageService.get(`${SuggestMemoryService_1._storagePrefix}/${mode}`, scope);
                if (raw) {
                    this._strategy.fromJSON(JSON.parse(raw));
                }
            }
            catch (e) {
                // things can go wrong with JSON...
            }
        }
        return this._strategy;
    }
    _saveState() {
        if (this._strategy) {
            const share = this._configService.getValue('editor.suggest.shareSuggestSelections');
            const scope = share ? 0 /* StorageScope.PROFILE */ : 1 /* StorageScope.WORKSPACE */;
            const raw = JSON.stringify(this._strategy);
            this._storageService.store(`${SuggestMemoryService_1._storagePrefix}/${this._strategy.name}`, raw, scope, 1 /* StorageTarget.MACHINE */);
        }
    }
};
SuggestMemoryService = SuggestMemoryService_1 = __decorate([
    __param(0, IStorageService),
    __param(1, IConfigurationService)
], SuggestMemoryService);
const ISuggestMemoryService = createDecorator('ISuggestMemories');
registerSingleton(ISuggestMemoryService, SuggestMemoryService, 1 /* InstantiationType.Delayed */);

export { ISuggestMemoryService, LRUMemory, Memory, NoMemory, PrefixMemory, SuggestMemoryService };
