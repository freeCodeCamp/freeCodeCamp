/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */


/// <reference no-default-lib="true"/>

/// <reference lib="es2015.symbol.wellknown" />

interface WeakRef<T extends WeakKey> {
    readonly [Symbol.toStringTag]: "WeakRef";

    /**
     * Returns the WeakRef instance's target value, or undefined if the target value has been
     * reclaimed.
     * In es2023 the value can be either a symbol or an object, in previous versions only object is permissible.
     */
    deref(): T | undefined;
}

interface WeakRefConstructor {
    readonly prototype: WeakRef<any>;

    /**
     * Creates a WeakRef instance for the given target value.
     * In es2023 the value can be either a symbol or an object, in previous versions only object is permissible.
     * @param target The target value for the WeakRef instance.
     */
    new <T extends WeakKey>(target: T): WeakRef<T>;
}

declare var WeakRef: WeakRefConstructor;

interface FinalizationRegistry<T> {
    readonly [Symbol.toStringTag]: "FinalizationRegistry";

    /**
     * Registers a value with the registry.
     * In es2023 the value can be either a symbol or an object, in previous versions only object is permissible.
     * @param target The target value to register.
     * @param heldValue The value to pass to the finalizer for this value. This cannot be the
     * target value.
     * @param unregisterToken The token to pass to the unregister method to unregister the target
     * value. If not provided, the target cannot be unregistered.
     */
    register(target: WeakKey, heldValue: T, unregisterToken?: WeakKey): void;

    /**
     * Unregisters a value from the registry.
     * In es2023 the value can be either a symbol or an object, in previous versions only object is permissible.
     * @param unregisterToken The token that was used as the unregisterToken argument when calling
     * register to register the target value.
     */
    unregister(unregisterToken: WeakKey): boolean;
}

interface FinalizationRegistryConstructor {
    readonly prototype: FinalizationRegistry<any>;

    /**
     * Creates a finalization registry with an associated cleanup callback
     * @param cleanupCallback The callback to call after a value in the registry has been reclaimed.
     */
    new <T>(cleanupCallback: (heldValue: T) => void): FinalizationRegistry<T>;
}

declare var FinalizationRegistry: FinalizationRegistryConstructor;
