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
/// <reference lib="es2020.intl" />
/// <reference lib="es2020.symbol.wellknown" />

interface String {
    /**
     * Matches a string with a regular expression, and returns an iterable of matches
     * containing the results of that search.
     * @param regexp A variable name or string literal containing the regular expression pattern and flags.
     */
    matchAll(regexp: RegExp): RegExpStringIterator<RegExpExecArray>;

    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
    toLocaleLowerCase(locales?: Intl.LocalesArgument): string;

    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
    toLocaleUpperCase(locales?: Intl.LocalesArgument): string;

    /**
     * Determines whether two strings are equivalent in the current or specified locale.
     * @param that String to compare to target string
     * @param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
     * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
     */
    localeCompare(that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions): number;
}
