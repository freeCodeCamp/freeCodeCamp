import { AutorunObserver } from '../../reactions/autorunImpl.js';
import { formatValue } from '../consoleObservableLogger.js';
import { registerDebugChannel } from './debuggerRpc.js';
import { Throttler, deepAssignDeleteNulls, deepAssign } from './utils.js';
import { isDefined } from '../../../types.js';
import { FromEventObservable } from '../../observables/observableFromEvent.js';
import { onUnexpectedError, BugIndicatingError } from '../../../errors.js';
import { Derived } from '../../observables/derivedImpl.js';
import { ObservableValue } from '../../observables/observableValue.js';
import { DebugLocation } from '../../debugLocation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class DevToolsLogger {
    static { this._instance = undefined; }
    static getInstance() {
        if (DevToolsLogger._instance === undefined) {
            DevToolsLogger._instance = new DevToolsLogger();
        }
        return DevToolsLogger._instance;
    }
    getTransactionState() {
        const affected = [];
        const txs = [...this._activeTransactions];
        if (txs.length === 0) {
            return undefined;
        }
        const observerQueue = txs.flatMap(t => t.debugGetUpdatingObservers() ?? []).map(o => o.observer);
        const processedObservers = new Set();
        while (observerQueue.length > 0) {
            const observer = observerQueue.shift();
            if (processedObservers.has(observer)) {
                continue;
            }
            processedObservers.add(observer);
            const state = this._getInfo(observer, d => {
                if (!processedObservers.has(d)) {
                    observerQueue.push(d);
                }
            });
            if (state) {
                affected.push(state);
            }
        }
        return { names: txs.map(t => t.getDebugName() ?? 'tx'), affected };
    }
    _getObservableInfo(observable) {
        const info = this._instanceInfos.get(observable);
        if (!info) {
            onUnexpectedError(new BugIndicatingError('No info found'));
            return undefined;
        }
        return info;
    }
    _getAutorunInfo(autorun) {
        const info = this._instanceInfos.get(autorun);
        if (!info) {
            onUnexpectedError(new BugIndicatingError('No info found'));
            return undefined;
        }
        return info;
    }
    _getInfo(observer, queue) {
        if (observer instanceof Derived) {
            const observersToUpdate = [...observer.debugGetObservers()];
            for (const o of observersToUpdate) {
                queue(o);
            }
            const info = this._getObservableInfo(observer);
            if (!info) {
                return;
            }
            const observerState = observer.debugGetState();
            const base = { name: observer.debugName, instanceId: info.instanceId, updateCount: observerState.updateCount };
            const changedDependencies = [...info.changedObservables].map(o => this._instanceInfos.get(o)?.instanceId).filter(isDefined);
            if (observerState.isComputing) {
                return { ...base, type: 'observable/derived', state: 'updating', changedDependencies, initialComputation: false };
            }
            switch (observerState.state) {
                case 0 /* DerivedState.initial */:
                    return { ...base, type: 'observable/derived', state: 'noValue' };
                case 3 /* DerivedState.upToDate */:
                    return { ...base, type: 'observable/derived', state: 'upToDate' };
                case 2 /* DerivedState.stale */:
                    return { ...base, type: 'observable/derived', state: 'stale', changedDependencies };
                case 1 /* DerivedState.dependenciesMightHaveChanged */:
                    return { ...base, type: 'observable/derived', state: 'possiblyStale' };
            }
        }
        else if (observer instanceof AutorunObserver) {
            const info = this._getAutorunInfo(observer);
            if (!info) {
                return undefined;
            }
            const base = { name: observer.debugName, instanceId: info.instanceId, updateCount: info.updateCount };
            const changedDependencies = [...info.changedObservables].map(o => this._instanceInfos.get(o).instanceId);
            if (observer.debugGetState().isRunning) {
                return { ...base, type: 'autorun', state: 'updating', changedDependencies };
            }
            switch (observer.debugGetState().state) {
                case 3 /* AutorunState.upToDate */:
                    return { ...base, type: 'autorun', state: 'upToDate' };
                case 2 /* AutorunState.stale */:
                    return { ...base, type: 'autorun', state: 'stale', changedDependencies };
                case 1 /* AutorunState.dependenciesMightHaveChanged */:
                    return { ...base, type: 'autorun', state: 'possiblyStale' };
            }
        }
        return undefined;
    }
    _formatObservable(obs) {
        const info = this._getObservableInfo(obs);
        if (!info) {
            return undefined;
        }
        return { name: obs.debugName, instanceId: info.instanceId };
    }
    _formatObserver(obs) {
        if (obs instanceof Derived) {
            return { name: obs.toString(), instanceId: this._getObservableInfo(obs)?.instanceId };
        }
        const autorunInfo = this._getAutorunInfo(obs);
        if (autorunInfo) {
            return { name: obs.toString(), instanceId: autorunInfo.instanceId };
        }
        return undefined;
    }
    constructor() {
        this._declarationId = 0;
        this._instanceId = 0;
        this._declarations = new Map();
        this._instanceInfos = new WeakMap();
        this._aliveInstances = new Map();
        this._activeTransactions = new Set();
        this._channel = registerDebugChannel('observableDevTools', () => {
            return {
                notifications: {
                    setDeclarationIdFilter: declarationIds => {
                    },
                    logObservableValue: (observableId) => {
                        console.log('logObservableValue', observableId);
                    },
                    flushUpdates: () => {
                        this._flushUpdates();
                    },
                    resetUpdates: () => {
                        this._pendingChanges = null;
                        this._channel.api.notifications.handleChange(this._fullState, true);
                    },
                },
                requests: {
                    getDeclarations: () => {
                        const result = {};
                        for (const decl of this._declarations.values()) {
                            result[decl.id] = decl;
                        }
                        return { decls: result };
                    },
                    getSummarizedInstances: () => {
                        return null;
                    },
                    getObservableValueInfo: instanceId => {
                        const obs = this._aliveInstances.get(instanceId);
                        return {
                            observers: [...obs.debugGetObservers()].map(d => this._formatObserver(d)).filter(isDefined),
                        };
                    },
                    getDerivedInfo: instanceId => {
                        const d = this._aliveInstances.get(instanceId);
                        return {
                            dependencies: [...d.debugGetState().dependencies].map(d => this._formatObservable(d)).filter(isDefined),
                            observers: [...d.debugGetObservers()].map(d => this._formatObserver(d)).filter(isDefined),
                        };
                    },
                    getAutorunInfo: instanceId => {
                        const obs = this._aliveInstances.get(instanceId);
                        return {
                            dependencies: [...obs.debugGetState().dependencies].map(d => this._formatObservable(d)).filter(isDefined),
                        };
                    },
                    getTransactionState: () => {
                        return this.getTransactionState();
                    },
                    setValue: (instanceId, jsonValue) => {
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof Derived) {
                            obs.debugSetValue(jsonValue);
                        }
                        else if (obs instanceof ObservableValue) {
                            obs.debugSetValue(jsonValue);
                        }
                        else if (obs instanceof FromEventObservable) {
                            obs.debugSetValue(jsonValue);
                        }
                        else {
                            throw new BugIndicatingError('Observable is not supported');
                        }
                        const observers = [...obs.debugGetObservers()];
                        for (const d of observers) {
                            d.beginUpdate(obs);
                        }
                        for (const d of observers) {
                            d.handleChange(obs, undefined);
                        }
                        for (const d of observers) {
                            d.endUpdate(obs);
                        }
                    },
                    getValue: instanceId => {
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof Derived) {
                            return formatValue(obs.debugGetState().value, 200);
                        }
                        else if (obs instanceof ObservableValue) {
                            return formatValue(obs.debugGetState().value, 200);
                        }
                        return undefined;
                    },
                    logValue: (instanceId) => {
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs && 'get' in obs) {
                            console.log('Logged Value:', obs.get());
                        }
                        else {
                            throw new BugIndicatingError('Observable is not supported');
                        }
                    },
                    rerun: (instanceId) => {
                        const obs = this._aliveInstances.get(instanceId);
                        if (obs instanceof Derived) {
                            obs.debugRecompute();
                        }
                        else if (obs instanceof AutorunObserver) {
                            obs.debugRerun();
                        }
                        else {
                            throw new BugIndicatingError('Observable is not supported');
                        }
                    },
                }
            };
        });
        this._pendingChanges = null;
        this._changeThrottler = new Throttler();
        this._fullState = {};
        this._flushUpdates = () => {
            if (this._pendingChanges !== null) {
                this._channel.api.notifications.handleChange(this._pendingChanges, false);
                this._pendingChanges = null;
            }
        };
        DebugLocation.enable();
    }
    _handleChange(update) {
        deepAssignDeleteNulls(this._fullState, update);
        if (this._pendingChanges === null) {
            this._pendingChanges = update;
        }
        else {
            deepAssign(this._pendingChanges, update);
        }
        this._changeThrottler.throttle(this._flushUpdates, 10);
    }
    _getDeclarationId(type, location) {
        if (!location) {
            return -1;
        }
        let decInfo = this._declarations.get(location.id);
        if (decInfo === undefined) {
            decInfo = {
                id: this._declarationId++,
                type,
                url: location.fileName,
                line: location.line,
                column: location.column,
            };
            this._declarations.set(location.id, decInfo);
            this._handleChange({ decls: { [decInfo.id]: decInfo } });
        }
        return decInfo.id;
    }
    handleObservableCreated(observable, location) {
        const declarationId = this._getDeclarationId('observable/value', location);
        const info = {
            declarationId,
            instanceId: this._instanceId++,
            listenerCount: 0,
            lastValue: undefined,
            updateCount: 0,
            changedObservables: new Set(),
        };
        this._instanceInfos.set(observable, info);
    }
    handleOnListenerCountChanged(observable, newCount) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        if (info.listenerCount === 0 && newCount > 0) {
            const type = observable instanceof Derived ? 'observable/derived' : 'observable/value';
            this._aliveInstances.set(info.instanceId, observable);
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        instanceId: info.instanceId,
                        declarationId: info.declarationId,
                        formattedValue: info.lastValue,
                        type,
                        name: observable.debugName,
                    }
                }
            });
        }
        else if (info.listenerCount > 0 && newCount === 0) {
            this._handleChange({
                instances: { [info.instanceId]: null }
            });
            this._aliveInstances.delete(info.instanceId);
        }
        info.listenerCount = newCount;
    }
    handleObservableUpdated(observable, changeInfo) {
        if (observable instanceof Derived) {
            this._handleDerivedRecomputed(observable, changeInfo);
            return;
        }
        const info = this._getObservableInfo(observable);
        if (info) {
            if (changeInfo.didChange) {
                info.lastValue = formatValue(changeInfo.newValue, 30);
                if (info.listenerCount > 0) {
                    this._handleChange({
                        instances: { [info.instanceId]: { formattedValue: info.lastValue } }
                    });
                }
            }
        }
    }
    handleAutorunCreated(autorun, location) {
        const declarationId = this._getDeclarationId('autorun', location);
        const info = {
            declarationId,
            instanceId: this._instanceId++,
            updateCount: 0,
            changedObservables: new Set(),
        };
        this._instanceInfos.set(autorun, info);
        this._aliveInstances.set(info.instanceId, autorun);
        if (info) {
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        instanceId: info.instanceId,
                        declarationId: info.declarationId,
                        runCount: 0,
                        type: 'autorun',
                        name: autorun.debugName,
                    }
                }
            });
        }
    }
    handleAutorunDisposed(autorun) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        this._handleChange({
            instances: { [info.instanceId]: null }
        });
        this._instanceInfos.delete(autorun);
        this._aliveInstances.delete(info.instanceId);
    }
    handleAutorunDependencyChanged(autorun, observable, change) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        info.changedObservables.add(observable);
    }
    handleAutorunStarted(autorun) {
    }
    handleAutorunFinished(autorun) {
        const info = this._getAutorunInfo(autorun);
        if (!info) {
            return;
        }
        info.changedObservables.clear();
        info.updateCount++;
        this._handleChange({
            instances: { [info.instanceId]: { runCount: info.updateCount } }
        });
    }
    handleDerivedDependencyChanged(derived, observable, change) {
        const info = this._getObservableInfo(derived);
        if (info) {
            info.changedObservables.add(observable);
        }
    }
    _handleDerivedRecomputed(observable, changeInfo) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        const formattedValue = formatValue(changeInfo.newValue, 30);
        info.updateCount++;
        info.changedObservables.clear();
        info.lastValue = formattedValue;
        if (info.listenerCount > 0) {
            this._handleChange({
                instances: { [info.instanceId]: { formattedValue: formattedValue, recomputationCount: info.updateCount } }
            });
        }
    }
    handleDerivedCleared(observable) {
        const info = this._getObservableInfo(observable);
        if (!info) {
            return;
        }
        info.lastValue = undefined;
        info.changedObservables.clear();
        if (info.listenerCount > 0) {
            this._handleChange({
                instances: {
                    [info.instanceId]: {
                        formattedValue: undefined,
                    }
                }
            });
        }
    }
    handleBeginTransaction(transaction) {
        this._activeTransactions.add(transaction);
    }
    handleEndTransaction(transaction) {
        this._activeTransactions.delete(transaction);
    }
}

export { DevToolsLogger };
