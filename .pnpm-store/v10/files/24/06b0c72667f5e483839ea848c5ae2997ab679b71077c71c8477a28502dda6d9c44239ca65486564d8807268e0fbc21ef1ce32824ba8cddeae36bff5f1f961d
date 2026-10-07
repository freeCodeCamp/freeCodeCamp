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

/// <reference lib="es2018.asynciterable" />

interface AsyncGenerator<T = unknown, TReturn = any, TNext = any> extends AsyncIteratorObject<T, TReturn, TNext> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...[value]: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
    return(value: TReturn | PromiseLike<TReturn>): Promise<IteratorResult<T, TReturn>>;
    throw(e: any): Promise<IteratorResult<T, TReturn>>;
    [Symbol.asyncIterator](): AsyncGenerator<T, TReturn, TNext>;
}

interface AsyncGeneratorFunction {
    /**
     * Creates a new AsyncGenerator object.
     * @param args A list of arguments the function accepts.
     */
    new (...args: any[]): AsyncGenerator;
    /**
     * Creates a new AsyncGenerator object.
     * @param args A list of arguments the function accepts.
     */
    (...args: any[]): AsyncGenerator;
    /**
     * The length of the arguments.
     */
    readonly length: number;
    /**
     * Returns the name of the function.
     */
    readonly name: string;
    /**
     * A reference to the prototype.
     */
    readonly prototype: AsyncGenerator;
}

interface AsyncGeneratorFunctionConstructor {
    /**
     * Creates a new AsyncGenerator function.
     * @param args A list of arguments the function accepts.
     */
    new (...args: string[]): AsyncGeneratorFunction;
    /**
     * Creates a new AsyncGenerator function.
     * @param args A list of arguments the function accepts.
     */
    (...args: string[]): AsyncGeneratorFunction;
    /**
     * The length of the arguments.
     */
    readonly length: number;
    /**
     * Returns the name of the function.
     */
    readonly name: string;
    /**
     * A reference to the prototype.
     */
    readonly prototype: AsyncGeneratorFunction;
}
