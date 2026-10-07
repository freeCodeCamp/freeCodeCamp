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

import { AST_Node, AST_Number, AST_UnaryPrefix } from "../ast.js";

function characters(str) {
    return str.split("");
}

function member(name, array) {
    return array.includes(name);
}

class DefaultsError extends Error {
    constructor(msg, defs) {
        super();

        this.name = "DefaultsError";
        this.message = msg;
        this.defs = defs;
    }
}

function defaults(args, defs, croak) {
    if (args === true) {
        args = {};
    } else if (args != null && typeof args === "object") {
        args = {...args};
    }

    const ret = args || {};

    if (croak) for (const i in ret) if (HOP(ret, i) && !HOP(defs, i)) {
        throw new DefaultsError("`" + i + "` is not a supported option", defs);
    }

    for (const i in defs) if (HOP(defs, i)) {
        if (!args || !HOP(args, i)) {
            ret[i] = defs[i];
        } else if (i === "ecma") {
            let ecma = args[i] | 0;
            if (ecma > 5 && ecma < 2015) ecma += 2009;
            ret[i] = ecma;
        } else {
            ret[i] = (args && HOP(args, i)) ? args[i] : defs[i];
        }
    }

    return ret;
}

function noop() {}
function return_false() { return false; }
function return_true() { return true; }
function return_this() { return this; }
function return_null() { return null; }

var MAP = (function() {
    function MAP(a, tw, allow_splicing = true) {
        const new_a = [];

        for (let i = 0; i < a.length; ++i) {
            let item = a[i];
            let ret = item.transform(tw, allow_splicing);

            if (ret instanceof AST_Node) {
                new_a.push(ret);
            } else if (ret instanceof Splice) {
                new_a.push(...ret.v);
            }
        }

        return new_a;
    }

    MAP.splice = function(val) { return new Splice(val); };
    MAP.skip = {};
    function Splice(val) { this.v = val; }
    return MAP;
})();

function make_node(ctor, orig, props) {
    if (!props) props = {};
    if (orig) {
        if (!props.start) props.start = orig.start;
        if (!props.end) props.end = orig.end;
    }
    return new ctor(props);
}

/** Makes a `void 0` expression. Use instead of AST_Undefined which may conflict
 * with an existing variable called `undefined` */
function make_void_0(orig) {
    return make_node(AST_UnaryPrefix, orig, {
        operator: "void",
        expression: make_node(AST_Number, orig, { value: 0 })
    });
}

function push_uniq(array, el) {
    if (!array.includes(el))
        array.push(el);
}

function string_template(text, props) {
    return text.replace(/{(.+?)}/g, function(str, p) {
        return props && props[p];
    });
}

function remove(array, el) {
    for (var i = array.length; --i >= 0;) {
        if (array[i] === el) array.splice(i, 1);
    }
}

function mergeSort(array, cmp) {
    if (array.length < 2) return array.slice();
    function merge(a, b) {
        var r = [], ai = 0, bi = 0, i = 0;
        while (ai < a.length && bi < b.length) {
            cmp(a[ai], b[bi]) <= 0
                ? r[i++] = a[ai++]
                : r[i++] = b[bi++];
        }
        if (ai < a.length) r.push.apply(r, a.slice(ai));
        if (bi < b.length) r.push.apply(r, b.slice(bi));
        return r;
    }
    function _ms(a) {
        if (a.length <= 1)
            return a;
        var m = Math.floor(a.length / 2), left = a.slice(0, m), right = a.slice(m);
        left = _ms(left);
        right = _ms(right);
        return merge(left, right);
    }
    return _ms(array);
}

function makePredicate(words) {
    if (!Array.isArray(words)) words = words.split(" ");

    return new Set(words.sort());
}

function map_add(map, key, value) {
    if (map.has(key)) {
        map.get(key).push(value);
    } else {
        map.set(key, [ value ]);
    }
}

function map_from_object(obj) {
    var map = new Map();
    for (var key in obj) {
        if (HOP(obj, key) && key.charAt(0) === "$") {
            map.set(key.substr(1), obj[key]);
        }
    }
    return map;
}

function map_to_object(map) {
    var obj = Object.create(null);
    map.forEach(function (value, key) {
        obj["$" + key] = value;
    });
    return obj;
}

function HOP(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

function keep_name(keep_setting, name) {
    return keep_setting === true
        || (keep_setting instanceof RegExp && keep_setting.test(name));
}

var lineTerminatorEscape = {
    "\0": "0",
    "\n": "n",
    "\r": "r",
    "\u2028": "u2028",
    "\u2029": "u2029",
};
function regexp_source_fix(source) {
    // V8 does not escape line terminators in regexp patterns in node 12
    // We'll also remove literal \0
    return source.replace(/[\0\n\r\u2028\u2029]/g, function (match, offset) {
        var escaped = source[offset - 1] == "\\"
            && (source[offset - 2] != "\\"
            || /(?:^|[^\\])(?:\\{2})*$/.test(source.slice(0, offset - 1)));
        return (escaped ? "" : "\\") + lineTerminatorEscape[match];
    });
}

// Subset of regexps that is not going to cause regexp based DDOS
// https://owasp.org/www-community/attacks/Regular_expression_Denial_of_Service_-_ReDoS
const re_safe_regexp = /^[\\/|\0\s\w^$.[\]()]*$/;

/** Check if the regexp is safe for Terser to create without risking a RegExp DOS */
export const regexp_is_safe = (source) => re_safe_regexp.test(source);

const all_flags = "dgimsuyv";
function sort_regexp_flags(flags) {
    const existing_flags = new Set(flags.split(""));
    let out = "";
    for (const flag of all_flags) {
        if (existing_flags.has(flag)) {
            out += flag;
            existing_flags.delete(flag);
        }
    }
    if (existing_flags.size) {
        // Flags Terser doesn't know about
        existing_flags.forEach(flag => { out += flag; });
    }
    return out;
}

function has_annotation(node, annotation) {
    return node._annotations & annotation;
}

function set_annotation(node, annotation) {
    node._annotations |= annotation;
}

function clear_annotation(node, annotation) {
    node._annotations &= ~annotation;
}

export {
    characters,
    defaults,
    HOP,
    keep_name,
    make_node,
    make_void_0,
    makePredicate,
    map_add,
    map_from_object,
    map_to_object,
    MAP,
    member,
    mergeSort,
    noop,
    push_uniq,
    regexp_source_fix,
    remove,
    return_false,
    return_null,
    return_this,
    return_true,
    sort_regexp_flags,
    string_template,
    has_annotation,
    set_annotation,
    clear_annotation,
};
