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

/// <reference lib="es2015.symbol" />
/// <reference lib="es2015.iterable" />

interface SymbolConstructor {
    /**
     * A method that returns the default async iterator for an object. Called by the semantics of
     * the for-await-of statement.
     */
    readonly asyncIterator: unique symbol;
}

interface AsyncIterator<T, TReturn = any, TNext = any> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...[value]: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
    return?(value?: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
    throw?(e?: any): Promise<IteratorResult<T, TReturn>>;
}

interface AsyncIterable<T, TReturn = any, TNext = any> {
    [Symbol.asyncIterator](): AsyncIterator<T, TReturn, TNext>;
}

/**
 * Describes a user-defined {@link AsyncIterator} that is also async iterable.
 */
interface AsyncIterableIterator<T, TReturn = any, TNext = any> extends AsyncIterator<T, TReturn, TNext> {
    [Symbol.asyncIterator](): AsyncIterableIterator<T, TReturn, TNext>;
}

/**
 * Describes an {@link AsyncIterator} produced by the runtime that inherits from the intrinsic `AsyncIterator.prototype`.
 */
interface AsyncIteratorObject<T, TReturn = unknown, TNext = unknown> extends AsyncIterator<T, TReturn, TNext> {
    [Symbol.asyncIterator](): AsyncIteratorObject<T, TReturn, TNext>;
}
