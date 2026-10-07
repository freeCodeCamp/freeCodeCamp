import { handleBugIndicatingErrorRecovery } from './base.js';
import { getFunctionName } from './debugName.js';
import { getLogger } from './logging/logging.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Starts a transaction in which many observables can be changed at once.
 * {@link fn} should start with a JS Doc using `@description` to give the transaction a debug name.
 * Reaction run on demand or when the transaction ends.
 */
function transaction(fn, getDebugName) {
    const tx = new TransactionImpl(fn, getDebugName);
    try {
        fn(tx);
    }
    finally {
        tx.finish();
    }
}
let _globalTransaction = undefined;
function globalTransaction(fn) {
    if (_globalTransaction) {
        fn(_globalTransaction);
    }
    else {
        const tx = new TransactionImpl(fn, undefined);
        _globalTransaction = tx;
        try {
            fn(tx);
        }
        finally {
            tx.finish(); // During finish, more actions might be added to the transaction.
            // Which is why we only clear the global transaction after finish.
            _globalTransaction = undefined;
        }
    }
}
/** @deprecated */
async function asyncTransaction(fn, getDebugName) {
    const tx = new TransactionImpl(fn, getDebugName);
    try {
        await fn(tx);
    }
    finally {
        tx.finish();
    }
}
/**
 * Allows to chain transactions.
 */
function subtransaction(tx, fn, getDebugName) {
    if (!tx) {
        transaction(fn, getDebugName);
    }
    else {
        fn(tx);
    }
}
class TransactionImpl {
    constructor(_fn, _getDebugName) {
        this._fn = _fn;
        this._getDebugName = _getDebugName;
        this._updatingObservers = [];
        getLogger()?.handleBeginTransaction(this);
    }
    getDebugName() {
        if (this._getDebugName) {
            return this._getDebugName();
        }
        return getFunctionName(this._fn);
    }
    updateObserver(observer, observable) {
        if (!this._updatingObservers) {
            // This happens when a transaction is used in a callback or async function.
            // If an async transaction is used, make sure the promise awaits all users of the transaction (e.g. no race).
            handleBugIndicatingErrorRecovery('Transaction already finished!');
            // Error recovery
            transaction(tx => {
                tx.updateObserver(observer, observable);
            });
            return;
        }
        // When this gets called while finish is active, they will still get considered
        this._updatingObservers.push({ observer, observable });
        observer.beginUpdate(observable);
    }
    finish() {
        const updatingObservers = this._updatingObservers;
        if (!updatingObservers) {
            handleBugIndicatingErrorRecovery('transaction.finish() has already been called!');
            return;
        }
        for (let i = 0; i < updatingObservers.length; i++) {
            const { observer, observable } = updatingObservers[i];
            observer.endUpdate(observable);
        }
        // Prevent anyone from updating observers from now on.
        this._updatingObservers = null;
        getLogger()?.handleEndTransaction(this);
    }
    debugGetUpdatingObservers() {
        return this._updatingObservers;
    }
}

export { TransactionImpl, asyncTransaction, globalTransaction, subtransaction, transaction };
