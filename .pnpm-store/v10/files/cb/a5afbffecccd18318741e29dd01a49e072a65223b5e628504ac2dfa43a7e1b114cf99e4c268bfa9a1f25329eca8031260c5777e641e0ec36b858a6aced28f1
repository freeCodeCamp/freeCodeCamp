import { cancelOnDispose } from '../../cancellation.js';
import '../../arrays.js';
import '../../event.js';
import { DisposableStore } from '../../lifecycle.js';
import { autorunWithStoreHandleChanges } from '../reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function runOnChange(observable, cb) {
    let _previousValue;
    let _firstRun = true;
    return autorunWithStoreHandleChanges({
        changeTracker: {
            createChangeSummary: () => ({ deltas: [], didChange: false }),
            handleChange: (context, changeSummary) => {
                if (context.didChange(observable)) {
                    const e = context.change;
                    if (e !== undefined) {
                        changeSummary.deltas.push(e);
                    }
                    changeSummary.didChange = true;
                }
                return true;
            },
        }
    }, (reader, changeSummary) => {
        const value = observable.read(reader);
        const previousValue = _previousValue;
        if (changeSummary.didChange) {
            _previousValue = value;
            // didChange can never be true on the first autorun, so we know previousValue is defined
            cb(value, previousValue, changeSummary.deltas);
        }
        if (_firstRun) {
            _firstRun = false;
            _previousValue = value;
        }
    });
}
function runOnChangeWithStore(observable, cb) {
    const store = new DisposableStore();
    const disposable = runOnChange(observable, (value, previousValue, deltas) => {
        store.clear();
        cb(value, previousValue, deltas, store);
    });
    return {
        dispose() {
            disposable.dispose();
            store.dispose();
        }
    };
}
function runOnChangeWithCancellationToken(observable, cb) {
    return runOnChangeWithStore(observable, (value, previousValue, deltas, store) => {
        cb(value, previousValue, deltas, cancelOnDispose(store));
    });
}

export { runOnChange, runOnChangeWithCancellationToken, runOnChangeWithStore };
