import { RunOnceScheduler, runWhenGlobalIdle, Promises } from '../../../base/common/async.js';
import { PauseableEmitter, Emitter, Event } from '../../../base/common/event.js';
import { Disposable, MutableDisposable } from '../../../base/common/lifecycle.js';
import { isUndefinedOrNull } from '../../../base/common/types.js';
import { Storage, InMemoryStorageDatabase, StorageHint } from '../../../base/parts/storage/common/storage.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const TARGET_KEY = '__$__targetStorageMarker';
const IStorageService = createDecorator('storageService');
var WillSaveStateReason;
(function (WillSaveStateReason) {
    /**
     * No specific reason to save state.
     */
    WillSaveStateReason[WillSaveStateReason["NONE"] = 0] = "NONE";
    /**
     * A hint that the workbench is about to shutdown.
     */
    WillSaveStateReason[WillSaveStateReason["SHUTDOWN"] = 1] = "SHUTDOWN";
})(WillSaveStateReason || (WillSaveStateReason = {}));
function loadKeyTargets(storage) {
    const keysRaw = storage.get(TARGET_KEY);
    if (keysRaw) {
        try {
            return JSON.parse(keysRaw);
        }
        catch (error) {
            // Fail gracefully
        }
    }
    return Object.create(null);
}
class AbstractStorageService extends Disposable {
    static { this.DEFAULT_FLUSH_INTERVAL = 60 * 1000; } // every minute
    constructor(options = { flushInterval: AbstractStorageService.DEFAULT_FLUSH_INTERVAL }) {
        super();
        this._onDidChangeValue = this._register(new PauseableEmitter());
        this._onDidChangeTarget = this._register(new PauseableEmitter());
        this._onWillSaveState = this._register(new Emitter());
        this.onWillSaveState = this._onWillSaveState.event;
        this.runFlushWhenIdle = this._register(new MutableDisposable());
        this._workspaceKeyTargets = undefined;
        this._profileKeyTargets = undefined;
        this._applicationKeyTargets = undefined;
        this.flushWhenIdleScheduler = this._register(new RunOnceScheduler(() => this.doFlushWhenIdle(), options.flushInterval));
    }
    onDidChangeValue(scope, key, disposable) {
        return Event.filter(this._onDidChangeValue.event, e => e.scope === scope && (key === undefined || e.key === key), disposable);
    }
    doFlushWhenIdle() {
        this.runFlushWhenIdle.value = runWhenGlobalIdle(() => {
            if (this.shouldFlushWhenIdle()) {
                this.flush();
            }
            // repeat
            this.flushWhenIdleScheduler.schedule();
        });
    }
    shouldFlushWhenIdle() {
        return true;
    }
    emitDidChangeValue(scope, event) {
        const { key, external } = event;
        // Specially handle `TARGET_KEY`
        if (key === TARGET_KEY) {
            // Clear our cached version which is now out of date
            switch (scope) {
                case -1 /* StorageScope.APPLICATION */:
                    this._applicationKeyTargets = undefined;
                    break;
                case 0 /* StorageScope.PROFILE */:
                    this._profileKeyTargets = undefined;
                    break;
                case 1 /* StorageScope.WORKSPACE */:
                    this._workspaceKeyTargets = undefined;
                    break;
            }
            // Emit as `didChangeTarget` event
            this._onDidChangeTarget.fire({ scope });
        }
        // Emit any other key to outside
        else {
            this._onDidChangeValue.fire({ scope, key, target: this.getKeyTargets(scope)[key], external });
        }
    }
    get(key, scope, fallbackValue) {
        return this.getStorage(scope)?.get(key, fallbackValue);
    }
    getBoolean(key, scope, fallbackValue) {
        return this.getStorage(scope)?.getBoolean(key, fallbackValue);
    }
    getNumber(key, scope, fallbackValue) {
        return this.getStorage(scope)?.getNumber(key, fallbackValue);
    }
    store(key, value, scope, target, external = false) {
        // We remove the key for undefined/null values
        if (isUndefinedOrNull(value)) {
            this.remove(key, scope, external);
            return;
        }
        // Update our datastructures but send events only after
        this.withPausedEmitters(() => {
            // Update key-target map
            this.updateKeyTarget(key, scope, target);
            // Store actual value
            this.getStorage(scope)?.set(key, value, external);
        });
    }
    remove(key, scope, external = false) {
        // Update our datastructures but send events only after
        this.withPausedEmitters(() => {
            // Update key-target map
            this.updateKeyTarget(key, scope, undefined);
            // Remove actual key
            this.getStorage(scope)?.delete(key, external);
        });
    }
    withPausedEmitters(fn) {
        // Pause emitters
        this._onDidChangeValue.pause();
        this._onDidChangeTarget.pause();
        try {
            fn();
        }
        finally {
            // Resume emitters
            this._onDidChangeValue.resume();
            this._onDidChangeTarget.resume();
        }
    }
    updateKeyTarget(key, scope, target, external = false) {
        // Add
        const keyTargets = this.getKeyTargets(scope);
        if (typeof target === 'number') {
            if (keyTargets[key] !== target) {
                keyTargets[key] = target;
                this.getStorage(scope)?.set(TARGET_KEY, JSON.stringify(keyTargets), external);
            }
        }
        // Remove
        else {
            if (typeof keyTargets[key] === 'number') {
                delete keyTargets[key];
                this.getStorage(scope)?.set(TARGET_KEY, JSON.stringify(keyTargets), external);
            }
        }
    }
    get workspaceKeyTargets() {
        if (!this._workspaceKeyTargets) {
            this._workspaceKeyTargets = this.loadKeyTargets(1 /* StorageScope.WORKSPACE */);
        }
        return this._workspaceKeyTargets;
    }
    get profileKeyTargets() {
        if (!this._profileKeyTargets) {
            this._profileKeyTargets = this.loadKeyTargets(0 /* StorageScope.PROFILE */);
        }
        return this._profileKeyTargets;
    }
    get applicationKeyTargets() {
        if (!this._applicationKeyTargets) {
            this._applicationKeyTargets = this.loadKeyTargets(-1 /* StorageScope.APPLICATION */);
        }
        return this._applicationKeyTargets;
    }
    getKeyTargets(scope) {
        switch (scope) {
            case -1 /* StorageScope.APPLICATION */:
                return this.applicationKeyTargets;
            case 0 /* StorageScope.PROFILE */:
                return this.profileKeyTargets;
            default:
                return this.workspaceKeyTargets;
        }
    }
    loadKeyTargets(scope) {
        const storage = this.getStorage(scope);
        return storage ? loadKeyTargets(storage) : Object.create(null);
    }
    async flush(reason = WillSaveStateReason.NONE) {
        // Signal event to collect changes
        this._onWillSaveState.fire({ reason });
        const applicationStorage = this.getStorage(-1 /* StorageScope.APPLICATION */);
        const profileStorage = this.getStorage(0 /* StorageScope.PROFILE */);
        const workspaceStorage = this.getStorage(1 /* StorageScope.WORKSPACE */);
        switch (reason) {
            // Unspecific reason: just wait when data is flushed
            case WillSaveStateReason.NONE:
                await Promises.settled([
                    applicationStorage?.whenFlushed() ?? Promise.resolve(),
                    profileStorage?.whenFlushed() ?? Promise.resolve(),
                    workspaceStorage?.whenFlushed() ?? Promise.resolve()
                ]);
                break;
            // Shutdown: we want to flush as soon as possible
            // and not hit any delays that might be there
            case WillSaveStateReason.SHUTDOWN:
                await Promises.settled([
                    applicationStorage?.flush(0) ?? Promise.resolve(),
                    profileStorage?.flush(0) ?? Promise.resolve(),
                    workspaceStorage?.flush(0) ?? Promise.resolve()
                ]);
                break;
        }
    }
}
class InMemoryStorageService extends AbstractStorageService {
    constructor() {
        super();
        this.applicationStorage = this._register(new Storage(new InMemoryStorageDatabase(), { hint: StorageHint.STORAGE_IN_MEMORY }));
        this.profileStorage = this._register(new Storage(new InMemoryStorageDatabase(), { hint: StorageHint.STORAGE_IN_MEMORY }));
        this.workspaceStorage = this._register(new Storage(new InMemoryStorageDatabase(), { hint: StorageHint.STORAGE_IN_MEMORY }));
        this._register(this.workspaceStorage.onDidChangeStorage(e => this.emitDidChangeValue(1 /* StorageScope.WORKSPACE */, e)));
        this._register(this.profileStorage.onDidChangeStorage(e => this.emitDidChangeValue(0 /* StorageScope.PROFILE */, e)));
        this._register(this.applicationStorage.onDidChangeStorage(e => this.emitDidChangeValue(-1 /* StorageScope.APPLICATION */, e)));
    }
    getStorage(scope) {
        switch (scope) {
            case -1 /* StorageScope.APPLICATION */:
                return this.applicationStorage;
            case 0 /* StorageScope.PROFILE */:
                return this.profileStorage;
            default:
                return this.workspaceStorage;
        }
    }
    shouldFlushWhenIdle() {
        return false;
    }
}

export { AbstractStorageService, IStorageService, InMemoryStorageService, TARGET_KEY, WillSaveStateReason, loadKeyTargets };
