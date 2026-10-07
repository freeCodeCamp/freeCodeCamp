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

"use strict";
/* global global, self */

import {
    defaults,
    push_uniq,
    has_annotation,
    clear_annotation,
} from "./utils/index.js";
import { base54 } from "./scope.js";
import {
    AST_Binary,
    AST_Call,
    AST_ClassPrivateProperty,
    AST_Conditional,
    AST_Dot,
    AST_DotHash,
    AST_ObjectKeyVal,
    AST_ObjectProperty,
    AST_PrivateMethod,
    AST_PrivateGetter,
    AST_PrivateSetter,
    AST_PrivateIn,
    AST_Sequence,
    AST_String,
    AST_Sub,
    TreeTransformer,
    TreeWalker,
    _KEY,
    _MANGLEPROP,

    walk,
} from "./ast.js";
import { domprops } from "../tools/domprops.js";

function find_builtins(reserved) {
    domprops.forEach(add);

    // Compatibility fix for some standard defined globals not defined on every js environment
    var new_globals = ["Symbol", "Map", "Promise", "Proxy", "Reflect", "Set", "WeakMap", "WeakSet"];
    var objects = {};
    var global_ref = typeof global === "object" ? global : self;

    new_globals.forEach(function (new_global) {
        objects[new_global] = global_ref[new_global] || function() {};
    });

    [
        "null",
        "true",
        "false",
        "NaN",
        "Infinity",
        "-Infinity",
        "undefined",
    ].forEach(add);
    [ Object, Array, Function, Number,
      String, Boolean, Error, Math,
      Date, RegExp, objects.Symbol, ArrayBuffer,
      DataView, decodeURI, decodeURIComponent,
      encodeURI, encodeURIComponent, eval, EvalError,
      Float32Array, Float64Array, Int8Array, Int16Array,
      Int32Array, isFinite, isNaN, JSON, objects.Map, parseFloat,
      parseInt, objects.Promise, objects.Proxy, RangeError, ReferenceError,
      objects.Reflect, objects.Set, SyntaxError, TypeError, Uint8Array,
      Uint8ClampedArray, Uint16Array, Uint32Array, URIError,
      objects.WeakMap, objects.WeakSet
    ].forEach(function(ctor) {
        Object.getOwnPropertyNames(ctor).map(add);
        if (ctor.prototype) {
            Object.getOwnPropertyNames(ctor.prototype).map(add);
        }
    });
    function add(name) {
        reserved.add(name);
    }
}

function reserve_quoted_keys(ast, reserved) {
    function add(name) {
        push_uniq(reserved, name);
    }

    ast.walk(new TreeWalker(function(node) {
        if (node instanceof AST_ObjectKeyVal && node.quote) {
            add(node.key);
        } else if (node instanceof AST_ObjectProperty && node.quote) {
            add(node.key.name);
        } else if (node instanceof AST_Sub) {
            addStrings(node.property, add);
        }
    }));
}

function addStrings(node, add) {
    node.walk(new TreeWalker(function(node) {
        if (node instanceof AST_Sequence) {
            addStrings(node.tail_node(), add);
        } else if (node instanceof AST_String) {
            add(node.value);
        } else if (node instanceof AST_Conditional) {
            addStrings(node.consequent, add);
            addStrings(node.alternative, add);
        }
        return true;
    }));
}

function mangle_private_properties(ast, options) {
    var cprivate = -1;
    var private_cache = new Map();
    var nth_identifier = options.nth_identifier || base54;

    ast =  ast.transform(new TreeTransformer(function(node) {
        if (
            node instanceof AST_ClassPrivateProperty
            || node instanceof AST_PrivateMethod
            || node instanceof AST_PrivateGetter
            || node instanceof AST_PrivateSetter
            || node instanceof AST_PrivateIn
        ) {
            node.key.name = mangle_private(node.key.name);
        } else if (node instanceof AST_DotHash) {
            node.property = mangle_private(node.property);
        }
    }));
    return ast;

    function mangle_private(name) {
        let mangled = private_cache.get(name);
        if (!mangled) {
            mangled = nth_identifier.get(++cprivate);
            private_cache.set(name, mangled);
        }

        return mangled;
    }
}

function find_annotated_props(ast) {
    var annotated_props = new Set();
    walk(ast, node => {
        if (
            node instanceof AST_ClassPrivateProperty
            || node instanceof AST_PrivateMethod
            || node instanceof AST_PrivateGetter
            || node instanceof AST_PrivateSetter
            || node instanceof AST_DotHash
        ) {
            // handled by mangle_private_properties
        } else if (node instanceof AST_ObjectKeyVal) {
            if (typeof node.key == "string" && has_annotation(node, _MANGLEPROP)) {
                annotated_props.add(node.key);
            }
        } else if (node instanceof AST_ObjectProperty) {
            // setter or getter, since KeyVal is handled above
            if (has_annotation(node, _MANGLEPROP)) {
                annotated_props.add(node.key.name);
            }
        } else if (node instanceof AST_Dot) {
            if (has_annotation(node, _MANGLEPROP)) {
                annotated_props.add(node.property);
            }
        } else if (node instanceof AST_Sub) {
            if (node.property instanceof AST_String && has_annotation(node, _MANGLEPROP)) {
                annotated_props.add(node.property.value);
            }
        }
    });
    return annotated_props;
}

function mangle_properties(ast, options, annotated_props = find_annotated_props(ast)) {
    options = defaults(options, {
        builtins: false,
        cache: null,
        debug: false,
        keep_quoted: false,
        nth_identifier: base54,
        only_cache: false,
        regex: null,
        reserved: null,
        undeclared: false,
        only_annotated: false,
    }, true);

    var nth_identifier = options.nth_identifier;

    var reserved_option = options.reserved;
    if (!Array.isArray(reserved_option)) reserved_option = [reserved_option];
    var reserved = new Set(reserved_option);
    if (!options.builtins) find_builtins(reserved);

    var cname = -1;

    var cache;
    if (options.cache) {
        cache = options.cache.props;
    } else {
        cache = new Map();
    }

    var only_annotated = options.only_annotated;
    var regex = options.regex && new RegExp(options.regex);

    // note debug is either false (disabled), or a string of the debug suffix to use (enabled).
    // note debug may be enabled as an empty string, which is falsey. Also treat passing 'true'
    // the same as passing an empty string.
    var debug = options.debug !== false;
    var debug_name_suffix;
    if (debug) {
        debug_name_suffix = (options.debug === true ? "" : options.debug);
    }

    var names_to_mangle = new Set();
    var unmangleable = new Set();
    // Track each already-mangled name to prevent nth_identifier from generating
    // the same name.
    cache.forEach((mangled_name) => unmangleable.add(mangled_name));

    var keep_quoted = !!options.keep_quoted;

    // step 1: find candidates to mangle
    ast.walk(new TreeWalker(function(node) {
        if (
            node instanceof AST_ClassPrivateProperty
            || node instanceof AST_PrivateMethod
            || node instanceof AST_PrivateGetter
            || node instanceof AST_PrivateSetter
            || node instanceof AST_DotHash
        ) {
            // handled by mangle_private_properties
        } else if (node instanceof AST_ObjectKeyVal) {
            if (typeof node.key == "string" && (!keep_quoted || !node.quote)) {
                add(node.key);
            }
        } else if (node instanceof AST_ObjectProperty) {
            // setter or getter, since KeyVal is handled above
            if (!keep_quoted || !node.quote) {
                add(node.key.name);
            }
        } else if (node instanceof AST_Dot) {
            var declared = !!options.undeclared;
            if (!declared) {
                var root = node;
                while (root.expression) {
                    root = root.expression;
                }
                declared = !(root.thedef && root.thedef.undeclared);
            }
            if (declared &&
                (!keep_quoted || !node.quote)) {
                add(node.property);
            }
        } else if (node instanceof AST_Sub) {
            if (!keep_quoted) {
                addStrings(node.property, add);
            }
        } else if (node instanceof AST_Call
            && node.expression.print_to_string() == "Object.defineProperty") {
            addStrings(node.args[1], add);
        } else if (node instanceof AST_Binary && node.operator === "in") {
            addStrings(node.left, add);
        } else if (node instanceof AST_String && has_annotation(node, _KEY)) {
            add(node.value);
        }
    }));

    // step 2: transform the tree, renaming properties
    return ast.transform(new TreeTransformer(function(node) {
        if (
            node instanceof AST_ClassPrivateProperty
            || node instanceof AST_PrivateMethod
            || node instanceof AST_PrivateGetter
            || node instanceof AST_PrivateSetter
            || node instanceof AST_DotHash
        ) {
            // handled by mangle_private_properties
        } else if (node instanceof AST_ObjectKeyVal) {
            if (typeof node.key == "string" && (!keep_quoted || !node.quote)) {
                node.key = mangle(node.key);
            }
        } else if (node instanceof AST_ObjectProperty) {
            // setter, getter, method or class field
            if (!keep_quoted || !node.quote) {
                if (!node.computed_key()) {
                    node.key.name = mangle(node.key.name);
                }
            }
        } else if (node instanceof AST_Dot) {
            if (!keep_quoted || !node.quote) {
                node.property = mangle(node.property);
            }
        } else if (!keep_quoted && node instanceof AST_Sub) {
            node.property = mangleStrings(node.property);
        } else if (node instanceof AST_Call
            && node.expression.print_to_string() == "Object.defineProperty") {
            node.args[1] = mangleStrings(node.args[1]);
        } else if (node instanceof AST_Binary && node.operator === "in") {
            node.left = mangleStrings(node.left);
        } else if (node instanceof AST_String && has_annotation(node, _KEY)) {
            // Clear _KEY annotation to prevent double mangling
            clear_annotation(node, _KEY);
            node.value = mangle(node.value);
        }
    }));

    // only function declarations after this line

    function can_mangle(name) {
        if (unmangleable.has(name)) return false;
        if (reserved.has(name)) return false;
        if (options.only_cache) {
            return cache.has(name);
        }
        if (/^-?[0-9]+(\.[0-9]+)?(e[+-][0-9]+)?$/.test(name)) return false;
        return true;
    }

    function should_mangle(name) {
        if (only_annotated && !annotated_props.has(name)) return false;
        if (regex && !regex.test(name)) {
            return annotated_props.has(name);
        }
        if (reserved.has(name)) return false;
        return cache.has(name)
            || names_to_mangle.has(name);
    }

    function add(name) {
        if (can_mangle(name)) {
            names_to_mangle.add(name);
        }

        if (!should_mangle(name)) {
            unmangleable.add(name);
        }
    }

    function mangle(name) {
        if (!should_mangle(name)) {
            return name;
        }

        var mangled = cache.get(name);
        if (!mangled) {
            if (debug) {
                // debug mode: use a prefix and suffix to preserve readability, e.g. o.foo -> o._$foo$NNN_.
                var debug_mangled = "_$" + name + "$" + debug_name_suffix + "_";

                if (can_mangle(debug_mangled)) {
                    mangled = debug_mangled;
                }
            }

            // either debug mode is off, or it is on and we could not use the mangled name
            if (!mangled) {
                do {
                    mangled = nth_identifier.get(++cname);
                } while (!can_mangle(mangled));
            }

            cache.set(name, mangled);
        }
        return mangled;
    }

    function mangleStrings(node) {
        return node.transform(new TreeTransformer(function(node) {
            if (node instanceof AST_Sequence) {
                var last = node.expressions.length - 1;
                node.expressions[last] = mangleStrings(node.expressions[last]);
            } else if (node instanceof AST_String) {
                // Clear _KEY annotation to prevent double mangling
                clear_annotation(node, _KEY);
                node.value = mangle(node.value);
            } else if (node instanceof AST_Conditional) {
                node.consequent = mangleStrings(node.consequent);
                node.alternative = mangleStrings(node.alternative);
            }
            return node;
        }));
    }
}

export {
    reserve_quoted_keys,
    mangle_properties,
    mangle_private_properties,
    find_annotated_props,
};
