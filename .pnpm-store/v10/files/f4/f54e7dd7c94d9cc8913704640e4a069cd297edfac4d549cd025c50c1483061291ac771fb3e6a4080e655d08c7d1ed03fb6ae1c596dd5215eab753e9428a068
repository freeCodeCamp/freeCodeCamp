import { autorun } from '../reactions/autorun.js';
import '../../arrays.js';
import '../../event.js';
import { toDisposable, DisposableStore } from '../../lifecycle.js';
import { derivedOpts } from '../observables/derived.js';
import { observableFromEvent } from '../observables/observableFromEvent.js';
import { _setRecomputeInitiallyAndOnChange } from '../observables/baseObservable.js';
import '../debugLocation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Creates an observable that debounces the input observable.
 */
function debouncedObservable(observable, debounceMs) {
    let hasValue = false;
    let lastValue;
    let timeout = undefined;
    return observableFromEvent(cb => {
        const d = autorun(reader => {
            const value = observable.read(reader);
            if (!hasValue) {
                hasValue = true;
                lastValue = value;
            }
            else {
                if (timeout) {
                    clearTimeout(timeout);
                }
                timeout = setTimeout(() => {
                    lastValue = value;
                    cb();
                }, debounceMs);
            }
        });
        return {
            dispose() {
                d.dispose();
                hasValue = false;
                lastValue = undefined;
            },
        };
    }, () => {
        if (hasValue) {
            return lastValue;
        }
        else {
            return observable.get();
        }
    });
}
/**
 * This converts the given observable into an autorun.
 */
function recomputeInitiallyAndOnChange(observable, handleValue) {
    const o = new KeepAliveObserver(true, handleValue);
    observable.addObserver(o);
    try {
        o.beginUpdate(observable);
    }
    finally {
        o.endUpdate(observable);
    }
    return toDisposable(() => {
        observable.removeObserver(o);
    });
}
_setRecomputeInitiallyAndOnChange(recomputeInitiallyAndOnChange);
class KeepAliveObserver {
    constructor(_forceRecompute, _handleValue) {
        this._forceRecompute = _forceRecompute;
        this._handleValue = _handleValue;
        this._counter = 0;
    }
    beginUpdate(observable) {
        this._counter++;
    }
    endUpdate(observable) {
        if (this._counter === 1 && this._forceRecompute) {
            if (this._handleValue) {
                this._handleValue(observable.get());
            }
            else {
                observable.reportChanges();
            }
        }
        this._counter--;
    }
    handlePossibleChange(observable) {
        // NO OP
    }
    handleChange(observable, change) {
        // NO OP
    }
}
function derivedObservableWithCache(owner, computeFn) {
    let lastValue = undefined;
    const observable = derivedOpts({ owner, debugReferenceFn: computeFn }, reader => {
        lastValue = computeFn(reader, lastValue);
        return lastValue;
    });
    return observable;
}
/**
 * When the items array changes, referential equal items are not mapped again.
 */
function mapObservableArrayCached(owner, items, map, keySelector) {
    let m = new ArrayMap(map, keySelector);
    const self = derivedOpts({
        debugReferenceFn: map,
        owner,
        onLastObserverRemoved: () => {
            m.dispose();
            m = new ArrayMap(map);
        }
    }, (reader) => {
        m.setItems(items.read(reader));
        return m.getItems();
    });
    return self;
}
class ArrayMap {
    constructor(_map, _keySelector) {
        this._map = _map;
        this._keySelector = _keySelector;
        this._cache = new Map();
        this._items = [];
    }
    dispose() {
        this._cache.forEach(entry => entry.store.dispose());
        this._cache.clear();
    }
    setItems(items) {
        const newItems = [];
        const itemsToRemove = new Set(this._cache.keys());
        for (const item of items) {
            const key = this._keySelector ? this._keySelector(item) : item;
            let entry = this._cache.get(key);
            if (!entry) {
                const store = new DisposableStore();
                const out = this._map(item, store);
                entry = { out, store };
                this._cache.set(key, entry);
            }
            else {
                itemsToRemove.delete(key);
            }
            newItems.push(entry.out);
        }
        for (const item of itemsToRemove) {
            const entry = this._cache.get(item);
            entry.store.dispose();
            this._cache.delete(item);
        }
        this._items = newItems;
    }
    getItems() {
        return this._items;
    }
}

export { KeepAliveObserver, debouncedObservable, derivedObservableWithCache, mapObservableArrayCached, recomputeInitiallyAndOnChange };
