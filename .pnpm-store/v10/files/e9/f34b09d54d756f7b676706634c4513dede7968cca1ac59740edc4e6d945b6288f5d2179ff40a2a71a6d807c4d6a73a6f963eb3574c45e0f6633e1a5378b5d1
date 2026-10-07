import { DebugLocation } from '../debugLocation.js';
import { getFunctionName } from '../debugName.js';
import { getLogger } from '../logging/logging.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
let _derived;
/**
 * @internal
 * This is to allow splitting files.
*/
function _setDerivedOpts(derived) {
    _derived = derived;
}
let _recomputeInitiallyAndOnChange;
function _setRecomputeInitiallyAndOnChange(recomputeInitiallyAndOnChange) {
    _recomputeInitiallyAndOnChange = recomputeInitiallyAndOnChange;
}
class ConvenientObservable {
    get TChange() { return null; }
    reportChanges() {
        this.get();
    }
    /** @sealed */
    read(reader) {
        if (reader) {
            return reader.readObservable(this);
        }
        else {
            return this.get();
        }
    }
    map(fnOrOwner, fnOrUndefined, debugLocation = DebugLocation.ofCaller()) {
        const owner = fnOrUndefined === undefined ? undefined : fnOrOwner;
        const fn = fnOrUndefined === undefined ? fnOrOwner : fnOrUndefined;
        return _derived({
            owner,
            debugName: () => {
                const name = getFunctionName(fn);
                if (name !== undefined) {
                    return name;
                }
                // regexp to match `x => x.y` or `x => x?.y` where x and y can be arbitrary identifiers (uses backref):
                const regexp = /^\s*\(?\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*\)?\s*=>\s*\1(?:\??)\.([a-zA-Z_$][a-zA-Z_$0-9]*)\s*$/;
                const match = regexp.exec(fn.toString());
                if (match) {
                    return `${this.debugName}.${match[2]}`;
                }
                if (!owner) {
                    return `${this.debugName} (mapped)`;
                }
                return undefined;
            },
            debugReferenceFn: fn,
        }, (reader) => fn(this.read(reader), reader), debugLocation);
    }
    /**
     * @sealed
     * Converts an observable of an observable value into a direct observable of the value.
    */
    flatten() {
        return _derived({
            owner: undefined,
            debugName: () => `${this.debugName} (flattened)`,
        }, (reader) => this.read(reader).read(reader));
    }
    recomputeInitiallyAndOnChange(store, handleValue) {
        store.add(_recomputeInitiallyAndOnChange(this, handleValue));
        return this;
    }
}
class BaseObservable extends ConvenientObservable {
    constructor(debugLocation) {
        super();
        this._observers = new Set();
        getLogger()?.handleObservableCreated(this, debugLocation);
    }
    addObserver(observer) {
        const len = this._observers.size;
        this._observers.add(observer);
        if (len === 0) {
            this.onFirstObserverAdded();
        }
        if (len !== this._observers.size) {
            getLogger()?.handleOnListenerCountChanged(this, this._observers.size);
        }
    }
    removeObserver(observer) {
        const deleted = this._observers.delete(observer);
        if (deleted && this._observers.size === 0) {
            this.onLastObserverRemoved();
        }
        if (deleted) {
            getLogger()?.handleOnListenerCountChanged(this, this._observers.size);
        }
    }
    onFirstObserverAdded() { }
    onLastObserverRemoved() { }
    debugGetObservers() {
        return this._observers;
    }
}

export { BaseObservable, ConvenientObservable, _setDerivedOpts, _setRecomputeInitiallyAndOnChange };
