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

import {
    HOP,
    makePredicate,
    return_this,
    string_template,
    regexp_source_fix,
    regexp_is_safe,
} from "../utils/index.js";
import {
    AST_Array,
    AST_BigInt,
    AST_Binary,
    AST_Call,
    AST_Chain,
    AST_Class,
    AST_Conditional,
    AST_Constant,
    AST_Dot,
    AST_Expansion,
    AST_Function,
    AST_Lambda,
    AST_New,
    AST_Node,
    AST_Object,
    AST_PropAccess,
    AST_RegExp,
    AST_Statement,
    AST_Symbol,
    AST_SymbolRef,
    AST_TemplateString,
    AST_UnaryPrefix,
    AST_With,
} from "../ast.js";
import { is_undeclared_ref} from "./inference.js";
import { is_pure_native_value, is_pure_native_fn, is_pure_native_method } from "./native-objects.js";

// methods to evaluate a constant expression

function def_eval(node, func) {
    node.DEFMETHOD("_eval", func);
}

// Used to propagate a nullish short-circuit signal upwards through the chain.
export const nullish = Symbol("This AST_Chain is nullish");

// If the node has been successfully reduced to a constant,
// then its value is returned; otherwise the element itself
// is returned.
// They can be distinguished as constant value is never a
// descendant of AST_Node.
AST_Node.DEFMETHOD("evaluate", function (compressor) {
    if (!compressor.option("evaluate"))
        return this;
    var val = this._eval(compressor, 1);
    if (!val || val instanceof RegExp)
        return val;
    if (typeof val == "function" || typeof val == "object" || val == nullish)
        return this;

    // Evaluated strings can be larger than the original expression
    if (typeof val === "string") {
        const unevaluated_size = this.size(compressor);
        if (val.length + 2 > unevaluated_size) return this;
    }

    return val;
});

var unaryPrefix = makePredicate("! ~ - + void");
AST_Node.DEFMETHOD("is_constant", function () {
    // Accomodate when compress option evaluate=false
    // as well as the common constant expressions !0 and -1
    if (this instanceof AST_Constant) {
        return !(this instanceof AST_RegExp);
    } else {
        return this instanceof AST_UnaryPrefix
            && unaryPrefix.has(this.operator)
            && (
                // `this.expression` may be an `AST_RegExp`,
                // so not only `.is_constant()`.
                this.expression instanceof AST_Constant
                || this.expression.is_constant()
            );
    }
});

def_eval(AST_Statement, function () {
    throw new Error(string_template("Cannot evaluate a statement [{file}:{line},{col}]", this.start));
});

def_eval(AST_Lambda, return_this);
def_eval(AST_Class, return_this);
def_eval(AST_Node, return_this);
def_eval(AST_Constant, function () {
    return this.getValue();
});

const supports_bigint = typeof BigInt === "function";
def_eval(AST_BigInt, function () {
    if (supports_bigint) {
        return BigInt(this.value);
    } else {
        return this;
    }
});

def_eval(AST_RegExp, function (compressor) {
    let evaluated = compressor.evaluated_regexps.get(this.value);
    if (evaluated === undefined && regexp_is_safe(this.value.source)) {
        try {
            const { source, flags } = this.value;
            evaluated = new RegExp(source, flags);
        } catch (e) {
            evaluated = null;
        }
        compressor.evaluated_regexps.set(this.value, evaluated);
    }
    return evaluated || this;
});

def_eval(AST_TemplateString, function () {
    if (this.segments.length !== 1) return this;
    return this.segments[0].value;
});

def_eval(AST_Function, function (compressor) {
    if (compressor.option("unsafe")) {
        var fn = function () { };
        fn.node = this;
        fn.toString = () => this.print_to_string();
        return fn;
    }
    return this;
});

def_eval(AST_Array, function (compressor, depth) {
    if (compressor.option("unsafe")) {
        var elements = [];
        for (var i = 0, len = this.elements.length; i < len; i++) {
            var element = this.elements[i];
            var value = element._eval(compressor, depth);
            if (element === value)
                return this;
            elements.push(value);
        }
        return elements;
    }
    return this;
});

def_eval(AST_Object, function (compressor, depth) {
    if (compressor.option("unsafe")) {
        var val = {};
        for (var i = 0, len = this.properties.length; i < len; i++) {
            var prop = this.properties[i];
            if (prop instanceof AST_Expansion)
                return this;
            var key = prop.key;
            if (key instanceof AST_Symbol) {
                key = key.name;
            } else if (key instanceof AST_Node) {
                key = key._eval(compressor, depth);
                if (key === prop.key)
                    return this;
            }
            if (typeof Object.prototype[key] === "function") {
                return this;
            }
            if (prop.value instanceof AST_Function)
                continue;
            val[key] = prop.value._eval(compressor, depth);
            if (val[key] === prop.value)
                return this;
        }
        return val;
    }
    return this;
});

var non_converting_unary = makePredicate("! typeof void");
def_eval(AST_UnaryPrefix, function (compressor, depth) {
    var e = this.expression;
    if (compressor.option("typeofs")
        && this.operator == "typeof") {
        // Function would be evaluated to an array and so typeof would
        // incorrectly return 'object'. Hence making is a special case.
        if (e instanceof AST_Lambda
            || e instanceof AST_SymbolRef
            && e.fixed_value() instanceof AST_Lambda) {
            return typeof function () { };
        }
        if (
            (e instanceof AST_Object
                || e instanceof AST_Array
                || (e instanceof AST_SymbolRef
                    && (e.fixed_value() instanceof AST_Object
                        || e.fixed_value() instanceof AST_Array)))
            && !e.has_side_effects(compressor)
        ) {
            return typeof {};
        }
    }
    if (!non_converting_unary.has(this.operator))
        depth++;
    e = e._eval(compressor, depth);
    if (e === this.expression)
        return this;
    switch (this.operator) {
        case "!": return !e;
        case "typeof":
            // typeof <RegExp> returns "object" or "function" on different platforms
            // so cannot evaluate reliably
            if (e instanceof RegExp)
                return this;
            return typeof e;
        case "void": return void e;
        case "~": return ~e;
        case "-": return -e;
        case "+": return +e;
    }
    return this;
});

var non_converting_binary = makePredicate("&& || ?? === !==");
const identity_comparison = makePredicate("== != === !==");
const has_identity = value => typeof value === "object"
    || typeof value === "function"
    || typeof value === "symbol";

def_eval(AST_Binary, function (compressor, depth) {
    if (!non_converting_binary.has(this.operator))
        depth++;

    var left = this.left._eval(compressor, depth);
    if (left === this.left)
        return this;
    var right = this.right._eval(compressor, depth);
    if (right === this.right)
        return this;

    if (left != null
        && right != null
        && identity_comparison.has(this.operator)
        && has_identity(left)
        && has_identity(right)
        && typeof left === typeof right) {
        // Do not compare by reference
        return this;
    }

    // Do not mix BigInt and Number; Don't use `>>>` on BigInt or `/ 0n`
    if (
        (typeof left === "bigint") !== (typeof right === "bigint")
        || typeof left === "bigint"
            && (this.operator === ">>>"
                || this.operator === "/" && Number(right) === 0)
    ) {
        return this;
    }

    var result;
    switch (this.operator) {
        case "&&": result = left && right; break;
        case "||": result = left || right; break;
        case "??": result = left != null ? left : right; break;
        case "|": result = left | right; break;
        case "&": result = left & right; break;
        case "^": result = left ^ right; break;
        case "+": result = left + right; break;
        case "*": result = left * right; break;
        case "**": result = left ** right; break;
        case "/": result = left / right; break;
        case "%": result = left % right; break;
        case "-": result = left - right; break;
        case "<<": result = left << right; break;
        case ">>": result = left >> right; break;
        case ">>>": result = left >>> right; break;
        case "==": result = left == right; break;
        case "===": result = left === right; break;
        case "!=": result = left != right; break;
        case "!==": result = left !== right; break;
        case "<": result = left < right; break;
        case "<=": result = left <= right; break;
        case ">": result = left > right; break;
        case ">=": result = left >= right; break;
        default:
            return this;
    }
    if (typeof result === "number" && isNaN(result) && compressor.find_parent(AST_With)) {
        // leave original expression as is
        return this;
    }
    return result;
});

def_eval(AST_Conditional, function (compressor, depth) {
    var condition = this.condition._eval(compressor, depth);
    if (condition === this.condition)
        return this;
    var node = condition ? this.consequent : this.alternative;
    var value = node._eval(compressor, depth);
    return value === node ? this : value;
});

// Set of AST_SymbolRef which are currently being evaluated.
// Avoids infinite recursion of ._eval()
const reentrant_ref_eval = new Set();
def_eval(AST_SymbolRef, function (compressor, depth) {
    if (reentrant_ref_eval.has(this))
        return this;

    var fixed = this.fixed_value();
    if (!fixed)
        return this;

    reentrant_ref_eval.add(this);
    const value = fixed._eval(compressor, depth);
    reentrant_ref_eval.delete(this);

    if (value === fixed)
        return this;

    if (value && typeof value == "object") {
        var escaped = this.definition().escaped;
        if (escaped && depth > escaped)
            return this;
    }
    return value;
});

def_eval(AST_Chain, function (compressor, depth) {
    const evaluated = this.expression._eval(compressor, depth, /*ast_chain=*/true);
    return evaluated === nullish
        ? undefined
        : evaluated === this.expression
          ? this
          : evaluated;
});

const global_objs = { Array, Math, Number, Object, String };

const regexp_flags = new Set([
    "dotAll",
    "global",
    "ignoreCase",
    "multiline",
    "sticky",
    "unicode",
]);

def_eval(AST_PropAccess, function (compressor, depth, ast_chain) {
    let obj = (ast_chain || this.property === "length" || compressor.option("unsafe"))
        && this.expression._eval(compressor, depth + 1, ast_chain);

    if (ast_chain) {
        if (obj === nullish || (this.optional && obj == null)) return nullish;
    }

    // `.length` of strings and arrays is always safe
    if (this.property === "length") {
        if (typeof obj === "string") {
            return obj.length;
        }

        const is_spreadless_array =
            obj instanceof AST_Array
            && obj.elements.every(el => !(el instanceof AST_Expansion));

        if (
            is_spreadless_array
            && obj.elements.every(el => !el.has_side_effects(compressor))
        ) {
            return obj.elements.length;
        }
    }

    if (compressor.option("unsafe")) {
        var key = this.property;
        if (key instanceof AST_Node) {
            key = key._eval(compressor, depth);
            if (key === this.property)
                return this;
        }

        var exp = this.expression;
        if (is_undeclared_ref(exp)) {
            var aa;
            var first_arg = exp.name === "hasOwnProperty"
                && key === "call"
                && (aa = compressor.parent() && compressor.parent().args)
                && (aa && aa[0]
                    && aa[0].evaluate(compressor));

            first_arg = first_arg instanceof AST_Dot ? first_arg.expression : first_arg;

            if (first_arg == null || first_arg.thedef && first_arg.thedef.undeclared) {
                return this.clone();
            }
            if (!is_pure_native_value(exp.name, key))
                return this;
            obj = global_objs[exp.name];
        } else {
            if (obj instanceof RegExp) {
                if (key == "source") {
                    return regexp_source_fix(obj.source);
                } else if (key == "flags" || regexp_flags.has(key)) {
                    return obj[key];
                }
            }
            if (!obj || obj === exp || !HOP(obj, key))
                return this;

            if (typeof obj == "function")
                switch (key) {
                    case "name":
                        return obj.node.name ? obj.node.name.name : "";
                    case "length":
                        return obj.node.length_property();
                    default:
                        return this;
                }
        }
        return obj[key];
    }
    return this;
});

def_eval(AST_Call, function (compressor, depth, ast_chain) {
    var exp = this.expression;

    if (ast_chain) {
        const callee = exp._eval(compressor, depth, ast_chain);
        if (callee === nullish || (this.optional && callee == null)) return nullish;
    }

    if (compressor.option("unsafe") && exp instanceof AST_PropAccess) {
        var key = exp.property;
        if (key instanceof AST_Node) {
            key = key._eval(compressor, depth);
            if (typeof key !== "string" && typeof key !== "number")
                return this;
        }
        var val;
        var e = exp.expression;
        if (is_undeclared_ref(e)) {
            var first_arg = e.name === "hasOwnProperty" &&
                key === "call" &&
                (this.args[0] && this.args[0].evaluate(compressor));

            first_arg = first_arg instanceof AST_Dot ? first_arg.expression : first_arg;

            if ((first_arg == null || first_arg.thedef && first_arg.thedef.undeclared)) {
                return this.clone();
            }
            if (!is_pure_native_fn(e.name, key)) return this;
            val = global_objs[e.name];
        } else {
            val = e._eval(compressor, depth + 1, /* don't pass ast_chain (exponential work) */);

            if (val === e || !val)
                return this;
            if (!is_pure_native_method(val.constructor.name, key))
                return this;
        }
        var args = [];
        for (var i = 0, len = this.args.length; i < len; i++) {
            var arg = this.args[i];
            var value = arg._eval(compressor, depth);
            if (arg === value)
                return this;
            if (arg instanceof AST_Lambda)
                return this;
            args.push(value);
        }
        try {
            return val[key].apply(val, args);
        } catch (ex) {
            // We don't really care
        }
    }
    return this;
});

// Also a subclass of AST_Call
def_eval(AST_New, return_this);
