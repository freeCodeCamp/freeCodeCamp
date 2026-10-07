import { ThrottledDelayer } from '../../../common/async.js';
import { PauseableEmitter, Event } from '../../../common/event.js';
import { Disposable } from '../../../common/lifecycle.js';
import { stringify } from '../../../common/marshalling.js';
import { isUndefinedOrNull, isObject } from '../../../common/types.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var StorageHint;
(function (StorageHint) {
    // A hint to the storage that the storage
    // does not exist on disk yet. This allows
    // the storage library to improve startup
    // time by not checking the storage for data.
    StorageHint[StorageHint["STORAGE_DOES_NOT_EXIST"] = 0] = "STORAGE_DOES_NOT_EXIST";
    // A hint to the storage that the storage
    // is backed by an in-memory storage.
    StorageHint[StorageHint["STORAGE_IN_MEMORY"] = 1] = "STORAGE_IN_MEMORY";
})(StorageHint || (StorageHint = {}));
var StorageState;
(function (StorageState) {
    StorageState[StorageState["None"] = 0] = "None";
    StorageState[StorageState["Initialized"] = 1] = "Initialized";
    StorageState[StorageState["Closed"] = 2] = "Closed";
})(StorageState || (StorageState = {}));
class Storage extends Disposable {
    static { this.DEFAULT_FLUSH_DELAY = 100; }
    constructor(database, options = Object.create(null)) {
        super();
        this.database = database;
        this.options = options;
        this._onDidChangeStorage = this._register(new PauseableEmitter());
        this.onDidChangeStorage = this._onDidChangeStorage.event;
        this.state = StorageState.None;
        this.cache = new Map();
        this.flushDelayer = this._register(new ThrottledDelayer(Storage.DEFAULT_FLUSH_DELAY));
        this.pendingDeletes = new Set();
        this.pendingInserts = new Map();
        this.pendingClose = undefined;
        this.whenFlushedCallbacks = [];
        this.registerListeners();
    }
    registerListeners() {
        this._register(this.database.onDidChangeItemsExternal(e => this.onDidChangeItemsExternal(e)));
    }
    onDidChangeItemsExternal(e) {
        this._onDidChangeStorage.pause();
        try {
            // items that change external require us to update our
            // caches with the values. we just accept the value and
            // emit an event if there is a change.
            e.changed?.forEach((value, key) => this.acceptExternal(key, value));
            e.deleted?.forEach(key => this.acceptExternal(key, undefined));
        }
        finally {
            this._onDidChangeStorage.resume();
        }
    }
    acceptExternal(key, value) {
        if (this.state === StorageState.Closed) {
            return; // Return early if we are already closed
        }
        let changed = false;
        // Item got removed, check for deletion
        if (isUndefinedOrNull(value)) {
            changed = this.cache.delete(key);
        }
        // Item got updated, check for change
        else {
            const currentValue = this.cache.get(key);
            if (currentValue !== value) {
                this.cache.set(key, value);
                changed = true;
            }
        }
        // Signal to outside listeners
        if (changed) {
            this._onDidChangeStorage.fire({ key, external: true });
        }
    }
    get(key, fallbackValue) {
        const value = this.cache.get(key);
        if (isUndefinedOrNull(value)) {
            return fallbackValue;
        }
        return value;
    }
    getBoolean(key, fallbackValue) {
        const value = this.get(key);
        if (isUndefinedOrNull(value)) {
            return fallbackValue;
        }
        return value === 'true';
    }
    getNumber(key, fallbackValue) {
        const value = this.get(key);
        if (isUndefinedOrNull(value)) {
            return fallbackValue;
        }
        return parseInt(value, 10);
    }
    async set(key, value, external = false) {
        if (this.state === StorageState.Closed) {
            return; // Return early if we are already closed
        }
        // We remove the key for undefined/null values
        if (isUndefinedOrNull(value)) {
            return this.delete(key, external);
        }
        // Otherwise, convert to String and store
        const valueStr = isObject(value) || Array.isArray(value) ? stringify(value) : String(value);
        // Return early if value already set
        const currentValue = this.cache.get(key);
        if (currentValue === valueStr) {
            return;
        }
        // Update in cache and pending
        this.cache.set(key, valueStr);
        this.pendingInserts.set(key, valueStr);
        this.pendingDeletes.delete(key);
        // Event
        this._onDidChangeStorage.fire({ key, external });
        // Accumulate work by scheduling after timeout
        return this.doFlush();
    }
    async delete(key, external = false) {
        if (this.state === StorageState.Closed) {
            return; // Return early if we are already closed
        }
        // Remove from cache and add to pending
        const wasDeleted = this.cache.delete(key);
        if (!wasDeleted) {
            return; // Return early if value already deleted
        }
        if (!this.pendingDeletes.has(key)) {
            this.pendingDeletes.add(key);
        }
        this.pendingInserts.delete(key);
        // Event
        this._onDidChangeStorage.fire({ key, external });
        // Accumulate work by scheduling after timeout
        return this.doFlush();
    }
    get hasPending() {
        return this.pendingInserts.size > 0 || this.pendingDeletes.size > 0;
    }
    async flushPending() {
        if (!this.hasPending) {
            return; // return early if nothing to do
        }
        // Get pending data
        const updateRequest = { insert: this.pendingInserts, delete: this.pendingDeletes };
        // Reset pending data for next run
        this.pendingDeletes = new Set();
        this.pendingInserts = new Map();
        // Update in storage and release any
        // waiters we have once done
        return this.database.updateItems(updateRequest).finally(() => {
            if (!this.hasPending) {
                while (this.whenFlushedCallbacks.length) {
                    this.whenFlushedCallbacks.pop()?.();
                }
            }
        });
    }
    async flush(delay) {
        if (this.state === StorageState.Closed || // Return early if we are already closed
            this.pendingClose // return early if nothing to do
        ) {
            return;
        }
        return this.doFlush(delay);
    }
    async doFlush(delay) {
        if (this.options.hint === StorageHint.STORAGE_IN_MEMORY) {
            return this.flushPending(); // return early if in-memory
        }
        return this.flushDelayer.trigger(() => this.flushPending(), delay);
    }
    async whenFlushed() {
        if (!this.hasPending) {
            return; // return early if nothing to do
        }
        return new Promise(resolve => this.whenFlushedCallbacks.push(resolve));
    }
}
class InMemoryStorageDatabase {
    constructor() {
        this.onDidChangeItemsExternal = Event.None;
        this.items = new Map();
    }
    async updateItems(request) {
        request.insert?.forEach((value, key) => this.items.set(key, value));
        request.delete?.forEach(key => this.items.delete(key));
    }
}

export { InMemoryStorageDatabase, Storage, StorageHint, StorageState };
