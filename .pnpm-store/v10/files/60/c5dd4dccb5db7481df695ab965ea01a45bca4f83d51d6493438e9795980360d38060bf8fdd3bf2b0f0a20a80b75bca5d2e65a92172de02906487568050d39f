/***********************************************************************

  A JavaScript tokenizer / parser / beautifier / compressor.
  https://github.com/mishoo/UglifyJS2

  -------------------------------- (C) ---------------------------------

                           Author: Mihai Bazon
                         <mihai.bazon@gmail.com>
                       http://mihai.bazon.net/blog

  Distributed under the BSD license:

    Copyright 2012 (c) Mihai Bazon <mihai.bazon@gmail.com>

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions
    are met:

        * Redistributions of source code must retain the above
          copyright notice, this list of conditions and the following
          disclaimer.

        * Redistributions in binary form must reproduce the above
          copyright notice, this list of conditions and the following
          disclaimer in the documentation and/or other materials
          provided with the distribution.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER “AS IS” AND ANY
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER BE
    LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY,
    OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
    TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
    THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
    SUCH DAMAGE.

 ***********************************************************************/

import { makePredicate } from "../utils/index.js";

// Lists of native methods, useful for `unsafe` option which assumes they exist.
// Note: Lots of methods and functions are missing here, in case they aren't pure
// or not available in all JS environments.

function make_nested_lookup(obj) {
    const out = new Map();
    for (var key of Object.keys(obj)) {
        out.set(key, makePredicate(obj[key]));
    }

    const does_have = (global_name, fname) => {
        const inner_map = out.get(global_name);
        return inner_map != null && inner_map.has(fname);
    };
    return does_have;
}

// Objects which are safe to access without throwing or causing a side effect.
// Usually we'd check the `unsafe` option first but these are way too common for that
export const pure_prop_access_globals = new Set([
    "Number",
    "String",
    "Array",
    "Object",
    "Function",
    "Promise",
]);

const object_methods = [
    "constructor",
    "toString",
    "valueOf",
];

export const is_pure_native_method = make_nested_lookup({
    Array: [
        "at",
        "flat",
        "includes",
        "indexOf",
        "join",
        "lastIndexOf",
        "slice",
        ...object_methods,
    ],
    Boolean: object_methods,
    Function: object_methods,
    Number: [
        "toExponential",
        "toFixed",
        "toPrecision",
        ...object_methods,
    ],
    Object: object_methods,
    RegExp: [
        "test",
        ...object_methods,
    ],
    String: [
        "at",
        "charAt",
        "charCodeAt",
        "charPointAt",
        "concat",
        "endsWith",
        "fromCharCode",
        "fromCodePoint",
        "includes",
        "indexOf",
        "italics",
        "lastIndexOf",
        "localeCompare",
        "match",
        "matchAll",
        "normalize",
        "padStart",
        "padEnd",
        "repeat",
        "replace",
        "replaceAll",
        "search",
        "slice",
        "split",
        "startsWith",
        "substr",
        "substring",
        "repeat",
        "toLocaleLowerCase",
        "toLocaleUpperCase",
        "toLowerCase",
        "toUpperCase",
        "trim",
        "trimEnd",
        "trimStart",
        ...object_methods,
    ],
});

export const is_pure_native_fn = make_nested_lookup({
    Array: [
        "isArray",
    ],
    Math: [
        "abs",
        "acos",
        "asin",
        "atan",
        "ceil",
        "cos",
        "exp",
        "floor",
        "log",
        "round",
        "sin",
        "sqrt",
        "tan",
        "atan2",
        "pow",
        "max",
        "min",
    ],
    Number: [
        "isFinite",
        "isNaN",
    ],
    Object: [
        "create",
        "getOwnPropertyDescriptor",
        "getOwnPropertyNames",
        "getPrototypeOf",
        "isExtensible",
        "isFrozen",
        "isSealed",
        "hasOwn",
        "keys",
    ],
    String: [
        "fromCharCode",
    ],
});

// Known numeric values which come with JS environments
export const is_pure_native_value = make_nested_lookup({
    Math: [
        "E",
        "LN10",
        "LN2",
        "LOG2E",
        "LOG10E",
        "PI",
        "SQRT1_2",
        "SQRT2",
    ],
    Number: [
        "MAX_VALUE",
        "MIN_VALUE",
        "NaN",
        "NEGATIVE_INFINITY",
        "POSITIVE_INFINITY",
    ],
});
