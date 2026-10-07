import { strictEquals } from '../../equals.js';
import '../../event.js';
import { DisposableStore } from '../../lifecycle.js';
import { DebugLocation } from '../debugLocation.js';
import { DebugNameData } from '../debugName.js';
import { _setDerivedOpts } from './baseObservable.js';
import { Derived, DerivedWithSetter } from './derivedImpl.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function derived(computeFnOrOwner, computeFn, debugLocation = DebugLocation.ofCaller()) {
    if (computeFn !== undefined) {
        return new Derived(new DebugNameData(computeFnOrOwner, undefined, computeFn), computeFn, undefined, undefined, strictEquals, debugLocation);
    }
    return new Derived(
    // eslint-disable-next-line local/code-no-any-casts
    new DebugNameData(undefined, undefined, computeFnOrOwner), 
    // eslint-disable-next-line local/code-no-any-casts
    computeFnOrOwner, undefined, undefined, strictEquals, debugLocation);
}
function derivedWithSetter(owner, computeFn, setter, debugLocation = DebugLocation.ofCaller()) {
    return new DerivedWithSetter(new DebugNameData(owner, undefined, computeFn), computeFn, undefined, undefined, strictEquals, setter, debugLocation);
}
function derivedOpts(options, computeFn, debugLocation = DebugLocation.ofCaller()) {
    return new Derived(new DebugNameData(options.owner, options.debugName, options.debugReferenceFn), computeFn, undefined, options.onLastObserverRemoved, options.equalsFn ?? strictEquals, debugLocation);
}
_setDerivedOpts(derivedOpts);
/**
 * Represents an observable that is derived from other observables.
 * The value is only recomputed when absolutely needed.
 *
 * {@link computeFn} should start with a JS Doc using `@description` to name the derived.
 *
 * Use `createEmptyChangeSummary` to create a "change summary" that can collect the changes.
 * Use `handleChange` to add a reported change to the change summary.
 * The compute function is given the last change summary.
 * The change summary is discarded after the compute function was called.
 *
 * @see derived
 */
function derivedHandleChanges(options, computeFn, debugLocation = DebugLocation.ofCaller()) {
    return new Derived(new DebugNameData(options.owner, options.debugName, undefined), computeFn, options.changeTracker, undefined, options.equalityComparer ?? strictEquals, debugLocation);
}
function derivedDisposable(computeFnOrOwner, computeFnOrUndefined, debugLocation = DebugLocation.ofCaller()) {
    let computeFn;
    let owner;
    if (computeFnOrUndefined === undefined) {
        // eslint-disable-next-line local/code-no-any-casts
        computeFn = computeFnOrOwner;
        owner = undefined;
    }
    else {
        owner = computeFnOrOwner;
        // eslint-disable-next-line local/code-no-any-casts
        computeFn = computeFnOrUndefined;
    }
    let store = undefined;
    return new Derived(new DebugNameData(owner, undefined, computeFn), r => {
        if (!store) {
            store = new DisposableStore();
        }
        else {
            store.clear();
        }
        const result = computeFn(r);
        if (result) {
            store.add(result);
        }
        return result;
    }, undefined, () => {
        if (store) {
            store.dispose();
            store = undefined;
        }
    }, strictEquals, debugLocation);
}

export { derived, derivedDisposable, derivedHandleChanges, derivedOpts, derivedWithSetter };
