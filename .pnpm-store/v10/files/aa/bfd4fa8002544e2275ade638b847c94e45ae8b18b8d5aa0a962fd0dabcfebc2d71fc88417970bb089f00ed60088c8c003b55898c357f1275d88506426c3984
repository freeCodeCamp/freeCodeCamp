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

/// <reference lib="es2020.bigint" />

interface Atomics {
    /**
     * A non-blocking, asynchronous version of wait which is usable on the main thread.
     * Waits asynchronously on a shared memory location and returns a Promise
     * @param typedArray A shared Int32Array or BigInt64Array.
     * @param index The position in the typedArray to wait on.
     * @param value The expected value to test.
     * @param [timeout] The expected value to test.
     */
    waitAsync(typedArray: Int32Array, index: number, value: number, timeout?: number): { async: false; value: "not-equal" | "timed-out"; } | { async: true; value: Promise<"ok" | "timed-out">; };

    /**
     * A non-blocking, asynchronous version of wait which is usable on the main thread.
     * Waits asynchronously on a shared memory location and returns a Promise
     * @param typedArray A shared Int32Array or BigInt64Array.
     * @param index The position in the typedArray to wait on.
     * @param value The expected value to test.
     * @param [timeout] The expected value to test.
     */
    waitAsync(typedArray: BigInt64Array, index: number, value: bigint, timeout?: number): { async: false; value: "not-equal" | "timed-out"; } | { async: true; value: Promise<"ok" | "timed-out">; };
}

interface SharedArrayBuffer {
    /**
     * Returns true if this SharedArrayBuffer can be grown.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable)
     */
    get growable(): boolean;

    /**
     * If this SharedArrayBuffer is growable, returns the maximum byte length given during construction; returns the byte length if not.
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength)
     */
    get maxByteLength(): number;

    /**
     * Grows the SharedArrayBuffer to the specified size (in bytes).
     *
     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow)
     */
    grow(newByteLength?: number): void;
}

interface SharedArrayBufferConstructor {
    new (byteLength: number, options?: { maxByteLength?: number; }): SharedArrayBuffer;
}
