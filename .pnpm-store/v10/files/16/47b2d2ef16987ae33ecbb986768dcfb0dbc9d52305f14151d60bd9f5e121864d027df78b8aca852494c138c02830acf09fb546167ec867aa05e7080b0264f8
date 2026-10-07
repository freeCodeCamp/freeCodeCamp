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
     * Adds a value to the value at the given position in the array, returning the original value.
     * Until this atomic operation completes, any other read or write operation against the array
     * will block.
     */
    add(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;

    /**
     * Stores the bitwise AND of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or
     * write operation against the array will block.
     */
    and(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;

    /**
     * Replaces the value at the given position in the array if the original value equals the given
     * expected value, returning the original value. Until this atomic operation completes, any
     * other read or write operation against the array will block.
     */
    compareExchange(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, expectedValue: bigint, replacementValue: bigint): bigint;

    /**
     * Replaces the value at the given position in the array, returning the original value. Until
     * this atomic operation completes, any other read or write operation against the array will
     * block.
     */
    exchange(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;

    /**
     * Returns the value at the given position in the array. Until this atomic operation completes,
     * any other read or write operation against the array will block.
     */
    load(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number): bigint;

    /**
     * Stores the bitwise OR of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or write
     * operation against the array will block.
     */
    or(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;

    /**
     * Stores a value at the given position in the array, returning the new value. Until this
     * atomic operation completes, any other read or write operation against the array will block.
     */
    store(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;

    /**
     * Subtracts a value from the value at the given position in the array, returning the original
     * value. Until this atomic operation completes, any other read or write operation against the
     * array will block.
     */
    sub(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;

    /**
     * If the value at the given position in the array is equal to the provided value, the current
     * agent is put to sleep causing execution to suspend until the timeout expires (returning
     * `"timed-out"`) or until the agent is awoken (returning `"ok"`); otherwise, returns
     * `"not-equal"`.
     */
    wait(typedArray: BigInt64Array<ArrayBufferLike>, index: number, value: bigint, timeout?: number): "ok" | "not-equal" | "timed-out";

    /**
     * Wakes up sleeping agents that are waiting on the given index of the array, returning the
     * number of agents that were awoken.
     * @param typedArray A shared BigInt64Array.
     * @param index The position in the typedArray to wake up on.
     * @param count The number of sleeping agents to notify. Defaults to +Infinity.
     */
    notify(typedArray: BigInt64Array<ArrayBufferLike>, index: number, count?: number): number;

    /**
     * Stores the bitwise XOR of a value with the value at the given position in the array,
     * returning the original value. Until this atomic operation completes, any other read or write
     * operation against the array will block.
     */
    xor(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;
}
