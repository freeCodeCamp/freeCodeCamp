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
/// <reference lib="es2015.symbol" />

interface SymbolConstructor {
    /**
     * A regular expression method that matches the regular expression against a string. Called
     * by the String.prototype.matchAll method.
     */
    readonly matchAll: unique symbol;
}

interface RegExpStringIterator<T> extends IteratorObject<T, BuiltinIteratorReturn, unknown> {
    [Symbol.iterator](): RegExpStringIterator<T>;
}

interface RegExp {
    /**
     * Matches a string with this regular expression, and returns an iterable of matches
     * containing the results of that search.
     * @param string A string to search within.
     */
    [Symbol.matchAll](str: string): RegExpStringIterator<RegExpMatchArray>;
}
