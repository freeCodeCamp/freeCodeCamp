import { BugIndicatingError } from '../../errors.js';
import { strictEquals } from '../../equals.js';
import '../../event.js';
import '../../lifecycle.js';
import { subtransaction } from '../transaction.js';
import { DebugNameData } from '../debugName.js';
import { DerivedWithSetter } from '../observables/derivedImpl.js';
import { DebugLocation } from '../debugLocation.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Creates an observable value that is based on values and changes from other observables.
 * Additionally, a reducer can report how that state changed.
*/
function observableReducerSettable(owner, options) {
    let prevValue = undefined;
    let hasValue = false;
    const d = new DerivedWithSetter(new DebugNameData(owner, undefined, options.update), (reader, changeSummary) => {
        if (!hasValue) {
            prevValue = options.initial instanceof Function ? options.initial() : options.initial;
            hasValue = true;
        }
        const newValue = options.update(reader, prevValue, changeSummary);
        prevValue = newValue;
        return newValue;
    }, options.changeTracker, () => {
        if (hasValue) {
            options.disposeFinal?.(prevValue);
            hasValue = false;
        }
    }, options.equalityComparer ?? strictEquals, (value, tx, change) => {
        if (!hasValue) {
            throw new BugIndicatingError('Can only set when there is a listener! This is to prevent leaks.');
        }
        subtransaction(tx, tx => {
            prevValue = value;
            d.setValue(value, tx, change);
        });
    }, DebugLocation.ofCaller());
    return d;
}

export { observableReducerSettable };
