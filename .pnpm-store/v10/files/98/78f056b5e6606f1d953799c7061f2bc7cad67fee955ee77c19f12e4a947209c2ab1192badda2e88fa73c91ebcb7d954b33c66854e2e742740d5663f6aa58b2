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

/// <reference lib="es2021.promise" />

interface ErrorOptions {
    cause?: unknown;
}

interface Error {
    cause?: unknown;
}

interface ErrorConstructor {
    new (message?: string, options?: ErrorOptions): Error;
    (message?: string, options?: ErrorOptions): Error;
}

interface EvalErrorConstructor {
    new (message?: string, options?: ErrorOptions): EvalError;
    (message?: string, options?: ErrorOptions): EvalError;
}

interface RangeErrorConstructor {
    new (message?: string, options?: ErrorOptions): RangeError;
    (message?: string, options?: ErrorOptions): RangeError;
}

interface ReferenceErrorConstructor {
    new (message?: string, options?: ErrorOptions): ReferenceError;
    (message?: string, options?: ErrorOptions): ReferenceError;
}

interface SyntaxErrorConstructor {
    new (message?: string, options?: ErrorOptions): SyntaxError;
    (message?: string, options?: ErrorOptions): SyntaxError;
}

interface TypeErrorConstructor {
    new (message?: string, options?: ErrorOptions): TypeError;
    (message?: string, options?: ErrorOptions): TypeError;
}

interface URIErrorConstructor {
    new (message?: string, options?: ErrorOptions): URIError;
    (message?: string, options?: ErrorOptions): URIError;
}

interface AggregateErrorConstructor {
    new (
        errors: Iterable<any>,
        message?: string,
        options?: ErrorOptions,
    ): AggregateError;
    (
        errors: Iterable<any>,
        message?: string,
        options?: ErrorOptions,
    ): AggregateError;
}
