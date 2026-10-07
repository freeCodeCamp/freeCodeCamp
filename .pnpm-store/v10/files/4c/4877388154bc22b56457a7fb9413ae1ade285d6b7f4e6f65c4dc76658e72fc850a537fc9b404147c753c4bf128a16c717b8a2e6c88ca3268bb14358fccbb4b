import { transaction } from '../transaction.js';
import { DebugNameData } from '../debugName.js';
import { BaseObservable } from './baseObservable.js';
import { DebugLocation } from '../debugLocation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function observableSignal(debugNameOrOwner, debugLocation = DebugLocation.ofCaller()) {
    if (typeof debugNameOrOwner === 'string') {
        return new ObservableSignal(debugNameOrOwner, undefined, debugLocation);
    }
    else {
        return new ObservableSignal(undefined, debugNameOrOwner, debugLocation);
    }
}
class ObservableSignal extends BaseObservable {
    get debugName() {
        return new DebugNameData(this._owner, this._debugName, undefined).getDebugName(this) ?? 'Observable Signal';
    }
    toString() {
        return this.debugName;
    }
    constructor(_debugName, _owner, debugLocation) {
        super(debugLocation);
        this._debugName = _debugName;
        this._owner = _owner;
    }
    trigger(tx, change) {
        if (!tx) {
            transaction(tx => {
                this.trigger(tx, change);
            }, () => `Trigger signal ${this.debugName}`);
            return;
        }
        for (const o of this._observers) {
            tx.updateObserver(o, this);
            o.handleChange(this, change);
        }
    }
    get() {
        // NO OP
    }
}

export { observableSignal };
