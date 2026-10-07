import { derivedObservableWithCache } from '../utils/utils.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Works like a derived.
 * However, if the value is not undefined, it is cached and will not be recomputed anymore.
 * In that case, the derived will unsubscribe from its dependencies.
*/
function derivedConstOnceDefined(owner, fn) {
    return derivedObservableWithCache(owner, (reader, lastValue) => lastValue ?? fn(reader));
}

export { derivedConstOnceDefined };
