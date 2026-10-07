import { TransactionImpl } from '../transaction.js';
import { getLogger } from '../logging/logging.js';
import { BaseObservable } from './baseObservable.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Holds off updating observers until the value is actually read.
*/
class LazyObservableValue extends BaseObservable {
    get debugName() {
        return this._debugNameData.getDebugName(this) ?? 'LazyObservableValue';
    }
    constructor(_debugNameData, initialValue, _equalityComparator, debugLocation) {
        super(debugLocation);
        this._debugNameData = _debugNameData;
        this._equalityComparator = _equalityComparator;
        this._isUpToDate = true;
        this._deltas = [];
        this._updateCounter = 0;
        this._value = initialValue;
    }
    get() {
        this._update();
        return this._value;
    }
    _update() {
        if (this._isUpToDate) {
            return;
        }
        this._isUpToDate = true;
        if (this._deltas.length > 0) {
            for (const change of this._deltas) {
                getLogger()?.handleObservableUpdated(this, { change, didChange: true, oldValue: '(unknown)', newValue: this._value, hadValue: true });
                for (const observer of this._observers) {
                    observer.handleChange(this, change);
                }
            }
            this._deltas.length = 0;
        }
        else {
            getLogger()?.handleObservableUpdated(this, { change: undefined, didChange: true, oldValue: '(unknown)', newValue: this._value, hadValue: true });
            for (const observer of this._observers) {
                observer.handleChange(this, undefined);
            }
        }
    }
    _beginUpdate() {
        this._updateCounter++;
        if (this._updateCounter === 1) {
            for (const observer of this._observers) {
                observer.beginUpdate(this);
            }
        }
    }
    _endUpdate() {
        this._updateCounter--;
        if (this._updateCounter === 0) {
            this._update();
            // End update could change the observer list.
            const observers = [...this._observers];
            for (const r of observers) {
                r.endUpdate(this);
            }
        }
    }
    addObserver(observer) {
        const shouldCallBeginUpdate = !this._observers.has(observer) && this._updateCounter > 0;
        super.addObserver(observer);
        if (shouldCallBeginUpdate) {
            observer.beginUpdate(this);
        }
    }
    removeObserver(observer) {
        const shouldCallEndUpdate = this._observers.has(observer) && this._updateCounter > 0;
        super.removeObserver(observer);
        if (shouldCallEndUpdate) {
            // Calling end update after removing the observer makes sure endUpdate cannot be called twice here.
            observer.endUpdate(this);
        }
    }
    set(value, tx, change) {
        if (change === undefined && this._equalityComparator(this._value, value)) {
            return;
        }
        let _tx;
        if (!tx) {
            tx = _tx = new TransactionImpl(() => { }, () => `Setting ${this.debugName}`);
        }
        try {
            this._isUpToDate = false;
            this._setValue(value);
            if (change !== undefined) {
                this._deltas.push(change);
            }
            tx.updateObserver({
                beginUpdate: () => this._beginUpdate(),
                endUpdate: () => this._endUpdate(),
                handleChange: (observable, change) => { },
                handlePossibleChange: (observable) => { },
            }, this);
            if (this._updateCounter > 1) {
                // We already started begin/end update, so we need to manually call handlePossibleChange
                for (const observer of this._observers) {
                    observer.handlePossibleChange(this);
                }
            }
        }
        finally {
            if (_tx) {
                _tx.finish();
            }
        }
    }
    toString() {
        return `${this.debugName}: ${this._value}`;
    }
    _setValue(newValue) {
        this._value = newValue;
    }
}

export { LazyObservableValue };
