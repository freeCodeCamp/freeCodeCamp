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

interface PromiseConstructor {
    /**
     * Takes a callback of any kind (returns or throws, synchronously or asynchronously) and wraps its result
     * in a Promise.
     *
     * @param callbackFn A function that is called synchronously. It can do anything: either return
     * a value, throw an error, or return a promise.
     * @param args Additional arguments, that will be passed to the callback.
     *
     * @returns A Promise that is:
     * - Already fulfilled, if the callback synchronously returns a value.
     * - Already rejected, if the callback synchronously throws an error.
     * - Asynchronously fulfilled or rejected, if the callback returns a promise.
     */
    try<T, U extends unknown[]>(callbackFn: (...args: U) => T | PromiseLike<T>, ...args: U): Promise<Awaited<T>>;
}
