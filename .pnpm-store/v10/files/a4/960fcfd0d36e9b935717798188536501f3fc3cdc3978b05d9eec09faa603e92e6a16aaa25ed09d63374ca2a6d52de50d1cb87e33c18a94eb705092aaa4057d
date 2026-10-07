import { SyncDescriptor } from './descriptors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const _registry = [];
function registerSingleton(id, ctorOrDescriptor, supportsDelayedInstantiation) {
    if (!(ctorOrDescriptor instanceof SyncDescriptor)) {
        ctorOrDescriptor = new SyncDescriptor(ctorOrDescriptor, [], Boolean(supportsDelayedInstantiation));
    }
    _registry.push([id, ctorOrDescriptor]);
}
function getSingletonServiceDescriptors() {
    return _registry;
}

export { getSingletonServiceDescriptors, registerSingleton };
