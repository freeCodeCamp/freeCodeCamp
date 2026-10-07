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
    AST_Array,
    AST_Arrow,
    AST_BigInt,
    AST_BlockStatement,
    AST_Call,
    AST_Chain,
    AST_Class,
    AST_Const,
    AST_Constant,
    AST_DefClass,
    AST_Defun,
    AST_EmptyStatement,
    AST_Export,
    AST_False,
    AST_Function,
    AST_Import,
    AST_Infinity,
    AST_LabeledStatement,
    AST_Lambda,
    AST_Let,
    AST_LoopControl,
    AST_NaN,
    AST_Node,
    AST_Null,
    AST_Number,
    AST_Object,
    AST_ObjectKeyVal,
    AST_PropAccess,
    AST_RegExp,
    AST_Scope,
    AST_Sequence,
    AST_SimpleStatement,
    AST_Statement,
    AST_String,
    AST_SymbolRef,
    AST_True,
    AST_UnaryPrefix,
    AST_Undefined,
    AST_Using,

    TreeWalker,
    walk,
    walk_abort,
    walk_parent,
} from "../ast.js";
import { make_node, make_void_0, regexp_source_fix, string_template, makePredicate } from "../utils/index.js";
import { first_in_statement } from "../utils/first_in_statement.js";
import { has_flag, TOP } from "./compressor-flags.js";

export function merge_sequence(array, node) {
    if (node instanceof AST_Sequence) {
        array.push(...node.expressions);
    } else {
        array.push(node);
    }
    return array;
}

export function make_sequence(orig, expressions) {
    if (expressions.length == 1) return expressions[0];
    if (expressions.length == 0) throw new Error("trying to create a sequence with length zero!");
    return make_node(AST_Sequence, orig, {
        expressions: expressions.reduce(merge_sequence, [])
    });
}

export function make_empty_function(self) {
    return make_node(AST_Function, self, {
        uses_arguments: false,
        argnames: [],
        body: [],
        is_generator: false,
        async: false,
        variables: new Map(),
        uses_with: false,
        uses_eval: false,
        parent_scope: null,
        enclosed: [],
        cname: 0,
        block_scope: undefined,
    });
}

export function make_node_from_constant(val, orig) {
    switch (typeof val) {
      case "string":
        return make_node(AST_String, orig, {
            value: val
        });
      case "number":
        if (isNaN(val)) return make_node(AST_NaN, orig);
        if (isFinite(val)) {
            return 1 / val < 0 ? make_node(AST_UnaryPrefix, orig, {
                operator: "-",
                expression: make_node(AST_Number, orig, { value: -val })
            }) : make_node(AST_Number, orig, { value: val });
        }
        return val < 0 ? make_node(AST_UnaryPrefix, orig, {
            operator: "-",
            expression: make_node(AST_Infinity, orig)
        }) : make_node(AST_Infinity, orig);
      case "bigint":
        return make_node(AST_BigInt, orig, { value: val.toString() });
      case "boolean":
        return make_node(val ? AST_True : AST_False, orig);
      case "undefined":
        return make_void_0(orig);
      default:
        if (val === null) {
            return make_node(AST_Null, orig, { value: null });
        }
        if (val instanceof RegExp) {
            return make_node(AST_RegExp, orig, {
                value: {
                    source: regexp_source_fix(val.source),
                    flags: val.flags
                }
            });
        }
        throw new Error(string_template("Can't handle constant of type: {type}", {
            type: typeof val
        }));
    }
}

export function best_of_expression(ast1, ast2) {
    return ast1.size() > ast2.size() ? ast2 : ast1;
}

export function best_of_statement(ast1, ast2) {
    return best_of_expression(
        make_node(AST_SimpleStatement, ast1, {
            body: ast1
        }),
        make_node(AST_SimpleStatement, ast2, {
            body: ast2
        })
    ).body;
}

/** Find which node is smaller, and return that */
export function best_of(compressor, ast1, ast2) {
    if (first_in_statement(compressor)) {
        return best_of_statement(ast1, ast2);
    } else {
        return best_of_expression(ast1, ast2);
    }
}

/** Simplify an object property's key, if possible */
export function get_simple_key(key) {
    if (key instanceof AST_Constant) {
        return key.getValue();
    }
    if (key instanceof AST_UnaryPrefix
        && key.operator == "void"
        && key.expression instanceof AST_Constant) {
        return undefined;
    }
    return key;
}

export function read_property(obj, key) {
    key = get_simple_key(key);
    if (key instanceof AST_Node) return;

    var value;
    if (obj instanceof AST_Array) {
        var elements = obj.elements;
        if (key == "length") return make_node_from_constant(elements.length, obj);
        if (typeof key == "number" && key in elements) value = elements[key];
    } else if (obj instanceof AST_Object) {
        key = "" + key;
        var props = obj.properties;
        for (var i = props.length; --i >= 0;) {
            var prop = props[i];
            if (!(prop instanceof AST_ObjectKeyVal)) return;
            if (!value && props[i].key === key) value = props[i].value;
        }
    }

    return value instanceof AST_SymbolRef && value.fixed_value() || value;
}

export function has_break_or_continue(loop, parent) {
    var found = false;
    var tw = new TreeWalker(function(node) {
        if (found || node instanceof AST_Scope) return true;
        if (node instanceof AST_LoopControl && tw.loopcontrol_target(node) === loop) {
            return found = true;
        }
    });
    if (parent instanceof AST_LabeledStatement) tw.push(parent);
    tw.push(loop);
    loop.body.walk(tw);
    return found;
}

// we shouldn't compress (1,func)(something) to
// func(something) because that changes the meaning of
// the func (becomes lexical instead of global).
export function maintain_this_binding(parent, orig, val) {
    if (requires_sequence_to_maintain_binding(parent, orig, val)) {
        const zero = make_node(AST_Number, orig, { value: 0 });
        return make_sequence(orig, [ zero, val ]);
    } else {
        return val;
    }
}

/** Detect (1, x.noThis)(), (0, eval)(), which need sequences */
export function requires_sequence_to_maintain_binding(parent, orig, val) {
    return (
        parent instanceof AST_UnaryPrefix && parent.operator == "delete"
        || parent instanceof AST_Call && parent.expression === orig
            && (
                val instanceof AST_Chain
                || val instanceof AST_PropAccess
                || val instanceof AST_SymbolRef && val.name == "eval"
            )
    );
}

export function is_func_expr(node) {
    return node instanceof AST_Arrow || node instanceof AST_Function;
}

/**
 * Used to determine whether the node can benefit from negation.
 * Not the case with arrow functions (you need an extra set of parens). */
export function is_iife_call(node) {
    if (node.TYPE != "Call") return false;
    return node.expression instanceof AST_Function || is_iife_call(node.expression);
}

export function is_empty(thing) {
    if (thing === null) return true;
    if (thing instanceof AST_EmptyStatement) return true;
    if (thing instanceof AST_BlockStatement) return thing.body.length == 0;
    return false;
}

export const identifier_atom = makePredicate("Infinity NaN undefined");
export function is_identifier_atom(node) {
    return node instanceof AST_Infinity
        || node instanceof AST_NaN
        || node instanceof AST_Undefined;
}

/** Check if this is a SymbolRef node which has one def of a certain AST type */
export function is_ref_of(ref, type) {
    if (!(ref instanceof AST_SymbolRef)) return false;
    var orig = ref.definition().orig;
    for (var i = orig.length; --i >= 0;) {
        if (orig[i] instanceof type) return true;
    }
}

/**Can we turn { block contents... } into just the block contents ?
 * Not if one of these is inside.
 **/
export function can_be_evicted_from_block(node) {
    return !(
        node instanceof AST_DefClass ||
        node instanceof AST_Defun ||
        node instanceof AST_Let ||
        node instanceof AST_Const ||
        node instanceof AST_Using ||
        node instanceof AST_Export ||
        node instanceof AST_Import
    );
}

export function as_statement_array(thing) {
    if (thing === null) return [];
    if (thing instanceof AST_BlockStatement) return thing.body;
    if (thing instanceof AST_EmptyStatement) return [];
    if (thing instanceof AST_Statement) return [ thing ];
    throw new Error("Can't convert thing to statement array");
}

export function is_reachable(scope_node, defs) {
    const find_ref = node => {
        if (node instanceof AST_SymbolRef && defs.includes(node.definition())) {
            return walk_abort;
        }
    };

    return walk_parent(scope_node, (node, info) => {
        if (node instanceof AST_Scope && node !== scope_node) {
            var parent = info.parent();

            if (
                parent instanceof AST_Call
                && parent.expression === node
                // Async/Generators aren't guaranteed to sync evaluate all of
                // their body steps, so it's possible they close over the variable.
                && !(node.async || node.is_generator)
            ) {
                return;
            }

            if (walk(node, find_ref)) return walk_abort;

            return true;
        }
    });
}

/** Check if a ref refers to the name of a function/class it's defined within */
export function is_recursive_ref(tw, def) {
    var node;
    for (var i = 0; node = tw.parent(i); i++) {
        if (node instanceof AST_Lambda || node instanceof AST_Class) {
            var name = node.name;
            if (name && name.definition() === def) {
                return true;
            }
        }
    }
    return false;
}

// TODO this only works with AST_Defun, shouldn't it work for other ways of defining functions?
export function retain_top_func(fn, compressor) {
    return compressor.top_retain
        && fn instanceof AST_Defun
        && has_flag(fn, TOP)
        && fn.name
        && compressor.top_retain(fn.name.definition());
}
