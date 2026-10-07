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

/// <reference lib="es2015.iterable" />

interface Generator<T = unknown, TReturn = any, TNext = any> extends IteratorObject<T, TReturn, TNext> {
    // NOTE: 'next' is defined using a tuple to ensure we report the correct assignability errors in all places.
    next(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
    return(value: TReturn): IteratorResult<T, TReturn>;
    throw(e: any): IteratorResult<T, TReturn>;
    [Symbol.iterator](): Generator<T, TReturn, TNext>;
}

interface GeneratorFunction {
    /**
     * Creates a new Generator object.
     * @param args A list of arguments the function accepts.
     */
    new (...args: any[]): Generator;
    /**
     * Creates a new Generator object.
     * @param args A list of arguments the function accepts.
     */
    (...args: any[]): Generator;
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
    readonly prototype: Generator;
}

interface GeneratorFunctionConstructor {
    /**
     * Creates a new Generator function.
     * @param args A list of arguments the function accepts.
     */
    new (...args: string[]): GeneratorFunction;
    /**
     * Creates a new Generator function.
     * @param args A list of arguments the function accepts.
     */
    (...args: string[]): GeneratorFunction;
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
    readonly prototype: GeneratorFunction;
}
