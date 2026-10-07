import { DisposableStore } from '../../../base/common/lifecycle.js';
import '../../../base/common/observableInternal/index.js';
import { DebugLocation } from '../../../base/common/observableInternal/debugLocation.js';
import { observableFromEventOpts } from '../../../base/common/observableInternal/observables/observableFromEvent.js';
import { derivedOpts } from '../../../base/common/observableInternal/observables/derived.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/** Creates an observable update when a configuration key updates. */
function observableConfigValue(key, defaultValue, configurationService, debugLocation = DebugLocation.ofCaller()) {
    return observableFromEventOpts({ debugName: () => `Configuration Key "${key}"`, }, (handleChange) => configurationService.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration(key)) {
            handleChange(e);
        }
    }), () => configurationService.getValue(key) ?? defaultValue, debugLocation);
}
/** Update the configuration key with a value derived from observables. */
function bindContextKey(key, service, computeValue, debugLocation = DebugLocation.ofCaller()) {
    const boundKey = key.bindTo(service);
    const store = new DisposableStore();
    derivedOpts({ debugName: () => `Set Context Key "${key.key}"` }, reader => {
        const value = computeValue(reader);
        boundKey.set(value);
        return value;
    }, debugLocation).recomputeInitiallyAndOnChange(store);
    return store;
}

export { bindContextKey, observableConfigValue };
