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
  AST_Assign,
  AST_BigInt,
  AST_Binary,
  AST_Block,
  AST_BlockStatement,
  AST_Call,
  AST_Case,
  AST_Chain,
  AST_Class,
  AST_DefClass,
  AST_ClassStaticBlock,
  AST_ClassPrivateProperty,
  AST_ClassProperty,
  AST_ConciseMethod,
  AST_Conditional,
  AST_Constant,
  AST_Definitions,
  AST_Dot,
  AST_EmptyStatement,
  AST_Expansion,
  AST_False,
  AST_ForIn,
  AST_Function,
  AST_If,
  AST_Import,
  AST_ImportMeta,
  AST_Jump,
  AST_LabeledStatement,
  AST_Lambda,
  AST_New,
  AST_Node,
  AST_Null,
  AST_Number,
  AST_Object,
  AST_ObjectGetter,
  AST_ObjectKeyVal,
  AST_ObjectProperty,
  AST_ObjectSetter,
  AST_PrivateGetter,
  AST_PrivateMethod,
  AST_PrivateSetter,
  AST_PropAccess,
  AST_RegExp,
  AST_Return,
  AST_Scope,
  AST_Sequence,
  AST_SimpleStatement,
  AST_Statement,
  AST_String,
  AST_Sub,
  AST_Switch,
  AST_SwitchBranch,
  AST_SymbolClassProperty,
  AST_SymbolDeclaration,
  AST_SymbolRef,
  AST_TemplateSegment,
  AST_TemplateString,
  AST_This,
  AST_True,
  AST_Try,
  AST_Unary,
  AST_UnaryPostfix,
  AST_UnaryPrefix,
  AST_Undefined,
  AST_VarDef,

  walk,
  walk_abort,

  _PURE
} from "../ast.js";
import {
    makePredicate,
    return_true,
    return_false,
    return_null,
    return_this,
    make_node,
    member,
    has_annotation,
} from "../utils/index.js";
import { make_sequence, best_of_expression, read_property, requires_sequence_to_maintain_binding } from "./common.js";

import { INLINED, UNDEFINED, has_flag } from "./compressor-flags.js";
import { pure_prop_access_globals, is_pure_native_fn, is_pure_native_method } from "./native-objects.js";

// Functions and methods to infer certain facts about expressions
// It's not always possible to be 100% sure about something just by static analysis,
// so `true` means yes, and `false` means maybe

export const is_undeclared_ref = (node) =>
    node instanceof AST_SymbolRef && node.definition().undeclared;

export const bitwise_binop = makePredicate("<<< >> << & | ^ ~");
export const lazy_op = makePredicate("&& || ??");
export const unary_side_effects = makePredicate("delete ++ --");

// methods to determine whether an expression has a boolean result type
(function(def_is_boolean) {
    const unary_bool = makePredicate("! delete");
    const binary_bool = makePredicate("in instanceof == != === !== < <= >= >");
    def_is_boolean(AST_Node, return_false);
    def_is_boolean(AST_UnaryPrefix, function() {
        return unary_bool.has(this.operator);
    });
    def_is_boolean(AST_Binary, function() {
        return binary_bool.has(this.operator)
            || lazy_op.has(this.operator)
                && this.left.is_boolean()
                && this.right.is_boolean();
    });
    def_is_boolean(AST_Conditional, function() {
        return this.consequent.is_boolean() && this.alternative.is_boolean();
    });
    def_is_boolean(AST_Assign, function() {
        return this.operator == "=" && this.right.is_boolean();
    });
    def_is_boolean(AST_Sequence, function() {
        return this.tail_node().is_boolean();
    });
    def_is_boolean(AST_True, return_true);
    def_is_boolean(AST_False, return_true);
})(function(node, func) {
    node.DEFMETHOD("is_boolean", func);
});

// methods to determine if an expression has a numeric result type
(function(def_is_number) {
    def_is_number(AST_Node, return_false);
    def_is_number(AST_Number, return_true);
    const unary = makePredicate("+ - ~ ++ --");
    def_is_number(AST_Unary, function(compressor) {
        return unary.has(this.operator) && this.expression.is_number(compressor);
    });
    const numeric_ops = makePredicate("- * / % & | ^ << >> >>>");
    def_is_number(AST_Binary, function(compressor) {
        if (this.operator === "+") {
            // Both sides need to be `number`. Or one is a `number` and the other is number-ish.
            return this.left.is_number(compressor) && this.right.is_number_or_bigint(compressor)
                || this.right.is_number(compressor) && this.left.is_number_or_bigint(compressor);
        } else if (numeric_ops.has(this.operator)) {
            return this.left.is_number(compressor) || this.right.is_number(compressor);
        } else {
            return false;
        }
    });
    def_is_number(AST_Assign, function(compressor) {
        return (this.operator === "=" || numeric_ops.has(this.operator.slice(0, -1)))
            && this.right.is_number(compressor);
    });
    def_is_number(AST_Sequence, function(compressor) {
        return this.tail_node().is_number(compressor);
    });
    def_is_number(AST_Conditional, function(compressor) {
        return this.consequent.is_number(compressor) && this.alternative.is_number(compressor);
    });
})(function(node, func) {
    node.DEFMETHOD("is_number", func);
});

// methods to determine if an expression returns a BigInt
(function(def_is_bigint) {
    def_is_bigint(AST_Node, return_false);
    def_is_bigint(AST_BigInt, return_true);
    const unary = makePredicate("+ - ~ ++ --");
    def_is_bigint(AST_Unary, function(compressor) {
        return unary.has(this.operator) && this.expression.is_bigint(compressor);
    });
    const numeric_ops = makePredicate("- * / % & | ^ << >>");
    def_is_bigint(AST_Binary, function(compressor) {
        if (this.operator === "+") {
            return this.left.is_bigint(compressor) && this.right.is_number_or_bigint(compressor)
                || this.right.is_bigint(compressor) && this.left.is_number_or_bigint(compressor);
        } else if (numeric_ops.has(this.operator)) {
            return this.left.is_bigint(compressor) || this.right.is_bigint(compressor);
        } else {
            return false;
        }
    });
    def_is_bigint(AST_Assign, function(compressor) {
        return (numeric_ops.has(this.operator.slice(0, -1)) || this.operator == "=")
            && this.right.is_bigint(compressor);
    });
    def_is_bigint(AST_Sequence, function(compressor) {
        return this.tail_node().is_bigint(compressor);
    });
    def_is_bigint(AST_Conditional, function(compressor) {
        return this.consequent.is_bigint(compressor) && this.alternative.is_bigint(compressor);
    });
})(function(node, func) {
    node.DEFMETHOD("is_bigint", func);
});

// methods to determine if an expression is a number or a bigint
(function(def_is_number_or_bigint) {
    def_is_number_or_bigint(AST_Node, return_false);
    def_is_number_or_bigint(AST_Number, return_true);
    def_is_number_or_bigint(AST_BigInt, return_true);
    const numeric_unary_ops = makePredicate("+ - ~ ++ --");
    def_is_number_or_bigint(AST_Unary, function(_compressor) {
        return numeric_unary_ops.has(this.operator);
    });
    const numeric_ops = makePredicate("- * / % & | ^ << >>");
    def_is_number_or_bigint(AST_Binary, function(compressor) {
        return this.operator === "+"
            ? this.left.is_number_or_bigint(compressor) && this.right.is_number_or_bigint(compressor)
            : numeric_ops.has(this.operator);
    });
    def_is_number_or_bigint(AST_Assign, function(compressor) {
        return numeric_ops.has(this.operator.slice(0, -1))
            || this.operator == "=" && this.right.is_number_or_bigint(compressor);
    });
    def_is_number_or_bigint(AST_Sequence, function(compressor) {
        return this.tail_node().is_number_or_bigint(compressor);
    });
    def_is_number_or_bigint(AST_Conditional, function(compressor) {
        return this.consequent.is_number_or_bigint(compressor) && this.alternative.is_number_or_bigint(compressor);
    });
}(function (node, func) {
    node.DEFMETHOD("is_number_or_bigint", func);
}));


// methods to determine if an expression is a 32 bit integer (IE results from bitwise ops, or is an integer constant fitting in that size
(function(def_is_32_bit_integer) {
    def_is_32_bit_integer(AST_Node, return_false);
    def_is_32_bit_integer(AST_Number, function(_compressor) {
        return this.value === (this.value | 0);
    });
    def_is_32_bit_integer(AST_UnaryPrefix, function(compressor) {
        return this.operator == "~" ? this.expression.is_number(compressor)
            : this.operator === "+" ? this.expression.is_32_bit_integer(compressor)
            : false;
    });
    def_is_32_bit_integer(AST_Binary, function(compressor) {
        return bitwise_binop.has(this.operator)
            && (this.left.is_number(compressor) || this.right.is_number(compressor));
    });
}(function (node, func) {
    node.DEFMETHOD("is_32_bit_integer", func);
}));

// methods to determine if an expression has a string result type
(function(def_is_string) {
    def_is_string(AST_Node, return_false);
    def_is_string(AST_String, return_true);
    def_is_string(AST_TemplateString, return_true);
    def_is_string(AST_UnaryPrefix, function() {
        return this.operator == "typeof";
    });
    def_is_string(AST_Binary, function(compressor) {
        return this.operator == "+" &&
            (this.left.is_string(compressor) || this.right.is_string(compressor));
    });
    def_is_string(AST_Assign, function(compressor) {
        return (this.operator == "=" || this.operator == "+=") && this.right.is_string(compressor);
    });
    def_is_string(AST_Sequence, function(compressor) {
        return this.tail_node().is_string(compressor);
    });
    def_is_string(AST_Conditional, function(compressor) {
        return this.consequent.is_string(compressor) && this.alternative.is_string(compressor);
    });
})(function(node, func) {
    node.DEFMETHOD("is_string", func);
});

export function is_undefined(node, compressor) {
    return (
        has_flag(node, UNDEFINED)
        || node instanceof AST_Undefined
        || node instanceof AST_UnaryPrefix
            && node.operator == "void"
            && !node.expression.has_side_effects(compressor)
    );
}

// Is the node explicitly null or undefined.
function is_null_or_undefined(node, compressor) {
    let fixed;
    return (
        node instanceof AST_Null
        || is_undefined(node, compressor)
        || (
            node instanceof AST_SymbolRef
            && (fixed = node.definition().fixed) instanceof AST_Node
            && is_nullish(fixed, compressor)
        )
    );
}

// Find out if this expression is optionally chained from a base-point that we
// can statically analyze as null or undefined.
export function is_nullish_shortcircuited(node, compressor) {
    if (node instanceof AST_PropAccess || node instanceof AST_Call) {
        return (
            (node.optional && is_null_or_undefined(node.expression, compressor))
            || is_nullish_shortcircuited(node.expression, compressor)
        );
    }
    if (node instanceof AST_Chain) return is_nullish_shortcircuited(node.expression, compressor);
    return false;
}

// Find out if something is == null, or can short circuit into nullish.
// Used to optimize ?. and ??
export function is_nullish(node, compressor) {
    if (is_null_or_undefined(node, compressor)) return true;
    return is_nullish_shortcircuited(node, compressor);
}

// Determine if expression might cause side effects
// If there's a possibility that a node may change something when it's executed, this returns true
(function(def_has_side_effects) {
    def_has_side_effects(AST_Node, return_true);

    def_has_side_effects(AST_EmptyStatement, return_false);
    def_has_side_effects(AST_Constant, return_false);
    def_has_side_effects(AST_This, return_false);

    function any(list, compressor) {
        for (var i = list.length; --i >= 0;)
            if (list[i].has_side_effects(compressor))
                return true;
        return false;
    }

    def_has_side_effects(AST_Block, function(compressor) {
        return any(this.body, compressor);
    });
    def_has_side_effects(AST_Call, function(compressor) {
        if (
            !this.is_callee_pure(compressor)
            && (!this.expression.is_call_pure(compressor)
                || this.expression.has_side_effects(compressor))
        ) {
            return true;
        }
        return any(this.args, compressor);
    });
    def_has_side_effects(AST_Switch, function(compressor) {
        return this.expression.has_side_effects(compressor)
            || any(this.body, compressor);
    });
    def_has_side_effects(AST_Case, function(compressor) {
        return this.expression.has_side_effects(compressor)
            || any(this.body, compressor);
    });
    def_has_side_effects(AST_Try, function(compressor) {
        return this.body.has_side_effects(compressor)
            || this.bcatch && this.bcatch.has_side_effects(compressor)
            || this.bfinally && this.bfinally.has_side_effects(compressor);
    });
    def_has_side_effects(AST_If, function(compressor) {
        return this.condition.has_side_effects(compressor)
            || this.body && this.body.has_side_effects(compressor)
            || this.alternative && this.alternative.has_side_effects(compressor);
    });
    def_has_side_effects(AST_ImportMeta, return_false);
    def_has_side_effects(AST_LabeledStatement, function(compressor) {
        return this.body.has_side_effects(compressor);
    });
    def_has_side_effects(AST_SimpleStatement, function(compressor) {
        return this.body.has_side_effects(compressor);
    });
    def_has_side_effects(AST_Lambda, return_false);
    def_has_side_effects(AST_Class, function (compressor) {
        if (this.extends && this.extends.has_side_effects(compressor)) {
            return true;
        }
        return any(this.properties, compressor);
    });
    def_has_side_effects(AST_ClassStaticBlock, function(compressor) {
        return any(this.body, compressor);
    });
    def_has_side_effects(AST_Binary, function(compressor) {
        return this.left.has_side_effects(compressor)
            || this.right.has_side_effects(compressor);
    });
    def_has_side_effects(AST_Assign, return_true);
    def_has_side_effects(AST_Conditional, function(compressor) {
        return this.condition.has_side_effects(compressor)
            || this.consequent.has_side_effects(compressor)
            || this.alternative.has_side_effects(compressor);
    });
    def_has_side_effects(AST_Unary, function(compressor) {
        return unary_side_effects.has(this.operator)
            || this.expression.has_side_effects(compressor);
    });
    def_has_side_effects(AST_SymbolRef, function(compressor) {
        return !this.is_declared(compressor) && !pure_prop_access_globals.has(this.name);
    });
    def_has_side_effects(AST_SymbolClassProperty, return_false);
    def_has_side_effects(AST_SymbolDeclaration, return_false);
    def_has_side_effects(AST_Object, function(compressor) {
        return any(this.properties, compressor);
    });
    def_has_side_effects(AST_ObjectKeyVal, function(compressor) {
        return (
            this.computed_key() && this.key.has_side_effects(compressor)
            || this.value && this.value.has_side_effects(compressor)
        );
    });
    def_has_side_effects([
        AST_ClassProperty,
        AST_ClassPrivateProperty,
    ], function(compressor) {
        return (
            this.computed_key() && this.key.has_side_effects(compressor)
            || this.static && this.value && this.value.has_side_effects(compressor)
        );
    });
    def_has_side_effects([
        AST_PrivateMethod,
        AST_PrivateGetter,
        AST_PrivateSetter,
        AST_ConciseMethod,
        AST_ObjectGetter,
        AST_ObjectSetter,
    ], function(compressor) {
        return this.computed_key() && this.key.has_side_effects(compressor);
    });
    def_has_side_effects(AST_Array, function(compressor) {
        return any(this.elements, compressor);
    });
    def_has_side_effects(AST_Dot, function(compressor) {
        if (is_nullish(this, compressor)) {
            return this.expression.has_side_effects(compressor);
        }
        if (!this.optional && this.expression.may_throw_on_access(compressor)) {
            return true;
        }

        return this.expression.has_side_effects(compressor);
    });
    def_has_side_effects(AST_Sub, function(compressor) {
        if (is_nullish(this, compressor)) {
            return this.expression.has_side_effects(compressor);
        }
        if (!this.optional && this.expression.may_throw_on_access(compressor)) {
            return true;
        }

        var property = this.property.has_side_effects(compressor);
        if (property && this.optional) return true; // "?." is a condition

        return property || this.expression.has_side_effects(compressor);
    });
    def_has_side_effects(AST_Chain, function (compressor) {
        return this.expression.has_side_effects(compressor);
    });
    def_has_side_effects(AST_Sequence, function(compressor) {
        return any(this.expressions, compressor);
    });
    def_has_side_effects(AST_Definitions, function(compressor) {
        return any(this.definitions, compressor);
    });
    def_has_side_effects(AST_VarDef, function() {
        return this.value != null;
    });
    def_has_side_effects(AST_TemplateSegment, return_false);
    def_has_side_effects(AST_TemplateString, function(compressor) {
        return any(this.segments, compressor);
    });
})(function(node_or_nodes, func) {
    for (const node of [].concat(node_or_nodes)) {
        node.DEFMETHOD("has_side_effects", func);
    }
});

// determine if expression may throw
(function(def_may_throw) {
    def_may_throw(AST_Node, return_true);

    def_may_throw(AST_Constant, return_false);
    def_may_throw(AST_EmptyStatement, return_false);
    def_may_throw(AST_Lambda, return_false);
    def_may_throw(AST_SymbolDeclaration, return_false);
    def_may_throw(AST_This, return_false);
    def_may_throw(AST_ImportMeta, return_false);

    function any(list, compressor) {
        for (var i = list.length; --i >= 0;)
            if (list[i].may_throw(compressor))
                return true;
        return false;
    }

    def_may_throw(AST_Class, function(compressor) {
        if (this.extends && this.extends.may_throw(compressor)) return true;
        return any(this.properties, compressor);
    });
    def_may_throw(AST_ClassStaticBlock, function (compressor) {
        return any(this.body, compressor);
    });

    def_may_throw(AST_Array, function(compressor) {
        return any(this.elements, compressor);
    });
    def_may_throw(AST_Assign, function(compressor) {
        if (this.right.may_throw(compressor)) return true;
        if (!compressor.has_directive("use strict")
            && this.operator == "="
            && this.left instanceof AST_SymbolRef) {
            return false;
        }
        return this.left.may_throw(compressor);
    });
    def_may_throw(AST_Binary, function(compressor) {
        return this.left.may_throw(compressor)
            || this.right.may_throw(compressor);
    });
    def_may_throw(AST_Block, function(compressor) {
        return any(this.body, compressor);
    });
    def_may_throw(AST_Call, function(compressor) {
        if (is_nullish(this, compressor)) return false;
        if (any(this.args, compressor)) return true;
        if (this.is_callee_pure(compressor)) return false;
        if (this.expression.may_throw(compressor)) return true;
        return !(this.expression instanceof AST_Lambda)
            || any(this.expression.body, compressor);
    });
    def_may_throw(AST_Case, function(compressor) {
        return this.expression.may_throw(compressor)
            || any(this.body, compressor);
    });
    def_may_throw(AST_Conditional, function(compressor) {
        return this.condition.may_throw(compressor)
            || this.consequent.may_throw(compressor)
            || this.alternative.may_throw(compressor);
    });
    def_may_throw(AST_Definitions, function(compressor) {
        return any(this.definitions, compressor);
    });
    def_may_throw(AST_If, function(compressor) {
        return this.condition.may_throw(compressor)
            || this.body && this.body.may_throw(compressor)
            || this.alternative && this.alternative.may_throw(compressor);
    });
    def_may_throw(AST_LabeledStatement, function(compressor) {
        return this.body.may_throw(compressor);
    });
    def_may_throw(AST_Object, function(compressor) {
        return any(this.properties, compressor);
    });
    def_may_throw(AST_ObjectKeyVal, function(compressor) {
        return (
            this.computed_key() && this.key.may_throw(compressor)
            || this.value ? this.value.may_throw(compressor) : false
        );
    });
    def_may_throw([
        AST_ClassProperty,
        AST_ClassPrivateProperty,
    ], function(compressor) {
        return (
            this.computed_key() && this.key.may_throw(compressor)
            || this.static && this.value && this.value.may_throw(compressor)
        );
    });
    def_may_throw([
        AST_ConciseMethod,
        AST_ObjectGetter,
        AST_ObjectSetter,
    ], function(compressor) {
        return this.computed_key() && this.key.may_throw(compressor);
    });
    def_may_throw([
        AST_PrivateMethod,
        AST_PrivateGetter,
        AST_PrivateSetter,
    ], return_false);
    def_may_throw(AST_Return, function(compressor) {
        return this.value && this.value.may_throw(compressor);
    });
    def_may_throw(AST_Sequence, function(compressor) {
        return any(this.expressions, compressor);
    });
    def_may_throw(AST_SimpleStatement, function(compressor) {
        return this.body.may_throw(compressor);
    });
    def_may_throw(AST_Dot, function(compressor) {
        if (is_nullish(this, compressor)) return false;
        return !this.optional && this.expression.may_throw_on_access(compressor)
            || this.expression.may_throw(compressor);
    });
    def_may_throw(AST_Sub, function(compressor) {
        if (is_nullish(this, compressor)) return false;
        return !this.optional && this.expression.may_throw_on_access(compressor)
            || this.expression.may_throw(compressor)
            || this.property.may_throw(compressor);
    });
    def_may_throw(AST_Chain, function(compressor) {
        return this.expression.may_throw(compressor);
    });
    def_may_throw(AST_Switch, function(compressor) {
        return this.expression.may_throw(compressor)
            || any(this.body, compressor);
    });
    def_may_throw(AST_SymbolRef, function(compressor) {
        return !this.is_declared(compressor) && !pure_prop_access_globals.has(this.name);
    });
    def_may_throw(AST_SymbolClassProperty, return_false);
    def_may_throw(AST_Try, function(compressor) {
        return this.bcatch ? this.bcatch.may_throw(compressor) : this.body.may_throw(compressor)
            || this.bfinally && this.bfinally.may_throw(compressor);
    });
    def_may_throw(AST_Unary, function(compressor) {
        if (this.operator == "typeof" && this.expression instanceof AST_SymbolRef)
            return false;
        return this.expression.may_throw(compressor);
    });
    def_may_throw(AST_VarDef, function(compressor) {
        if (!this.value) return false;
        return this.value.may_throw(compressor);
    });
})(function(node_or_nodes, func) {
    for (const node of [].concat(node_or_nodes)) {
        node.DEFMETHOD("may_throw", func);
    }
});

// determine if expression is constant
(function(def_is_constant_expression) {
    function all_refs_local(scope) {
        let result = true;
        walk(this, node => {
            if (node instanceof AST_SymbolRef) {
                if (has_flag(this, INLINED)) {
                    result = false;
                    return walk_abort;
                }
                var def = node.definition();
                if (
                    member(def, this.enclosed)
                    && !this.variables.has(def.name)
                ) {
                    if (scope) {
                        var scope_def = scope.find_variable(node);
                        if (def.undeclared ? !scope_def : scope_def === def) {
                            result = "f";
                            return true;
                        }
                    }
                    result = false;
                    return walk_abort;
                }
                return true;
            }
            if (node instanceof AST_This && this instanceof AST_Arrow) {
                result = false;
                return walk_abort;
            }
        });
        return result;
    }

    def_is_constant_expression(AST_Node, return_false);
    def_is_constant_expression(AST_Constant, return_true);
    def_is_constant_expression(AST_Class, function(scope) {
        if (this.extends && !this.extends.is_constant_expression(scope)) {
            return false;
        }

        for (const prop of this.properties) {
            if (prop.computed_key() && !prop.key.is_constant_expression(scope)) {
                return false;
            }
            if (prop.static && prop.value && !prop.value.is_constant_expression(scope)) {
                return false;
            }
            if (prop instanceof AST_ClassStaticBlock) {
                return false;
            }
        }

        return all_refs_local.call(this, scope);
    });
    def_is_constant_expression(AST_Lambda, all_refs_local);
    def_is_constant_expression(AST_Unary, function() {
        return this.expression.is_constant_expression();
    });
    def_is_constant_expression(AST_Binary, function() {
        return this.left.is_constant_expression()
            && this.right.is_constant_expression();
    });
    def_is_constant_expression(AST_Array, function() {
        return this.elements.every((l) => l.is_constant_expression());
    });
    def_is_constant_expression(AST_Object, function() {
        return this.properties.every((l) => l.is_constant_expression());
    });
    def_is_constant_expression(AST_ObjectProperty, function() {
        return !!(!(this.key instanceof AST_Node) && this.value && this.value.is_constant_expression());
    });
})(function(node, func) {
    node.DEFMETHOD("is_constant_expression", func);
});


// may_throw_on_access()
// returns true if this node may be null, undefined or contain `AST_Accessor`
(function(def_may_throw_on_access) {
    AST_Node.DEFMETHOD("may_throw_on_access", function(compressor) {
        return !compressor.option("pure_getters")
            || this._dot_throw(compressor);
    });

    function is_strict(compressor) {
        return /strict/.test(compressor.option("pure_getters"));
    }

    def_may_throw_on_access(AST_Node, is_strict);
    def_may_throw_on_access(AST_Null, return_true);
    def_may_throw_on_access(AST_Undefined, return_true);
    def_may_throw_on_access(AST_Constant, return_false);
    def_may_throw_on_access(AST_Array, return_false);
    def_may_throw_on_access(AST_Object, function(compressor) {
        if (!is_strict(compressor)) return false;
        for (var i = this.properties.length; --i >=0;)
            if (this.properties[i]._dot_throw(compressor)) return true;
        return false;
    });
    // Do not be as strict with classes as we are with objects.
    // Hopefully the community is not going to abuse static getters and setters.
    // https://github.com/terser/terser/issues/724#issuecomment-643655656
    def_may_throw_on_access(AST_Class, return_false);
    def_may_throw_on_access(AST_ObjectProperty, return_false);
    def_may_throw_on_access(AST_ObjectGetter, return_true);
    def_may_throw_on_access(AST_Expansion, function(compressor) {
        return this.expression._dot_throw(compressor);
    });
    def_may_throw_on_access(AST_Function, return_false);
    def_may_throw_on_access(AST_Arrow, return_false);
    def_may_throw_on_access(AST_UnaryPostfix, return_false);
    def_may_throw_on_access(AST_UnaryPrefix, function() {
        return this.operator == "void";
    });
    def_may_throw_on_access(AST_Binary, function(compressor) {
        return (this.operator == "&&" || this.operator == "||" || this.operator == "??")
            && (this.left._dot_throw(compressor) || this.right._dot_throw(compressor));
    });
    def_may_throw_on_access(AST_Assign, function(compressor) {
        if (this.logical) return true;

        return this.operator == "="
            && this.right._dot_throw(compressor);
    });
    def_may_throw_on_access(AST_Conditional, function(compressor) {
        return this.consequent._dot_throw(compressor)
            || this.alternative._dot_throw(compressor);
    });
    def_may_throw_on_access(AST_Dot, function(compressor) {
        if (!is_strict(compressor)) return false;

        if (this.property == "prototype") {
            return !(
                this.expression instanceof AST_Function
                || this.expression instanceof AST_Class
            );
        }
        return true;
    });
    def_may_throw_on_access(AST_Chain, function(compressor) {
        return this.expression._dot_throw(compressor);
    });
    def_may_throw_on_access(AST_Sequence, function(compressor) {
        return this.tail_node()._dot_throw(compressor);
    });
    def_may_throw_on_access(AST_SymbolRef, function(compressor) {
        if (this.name === "arguments" && this.scope instanceof AST_Lambda) return false;
        if (has_flag(this, UNDEFINED)) return true;
        if (!is_strict(compressor)) return false;
        if (is_undeclared_ref(this) && this.is_declared(compressor)) return false;
        if (this.is_immutable()) return false;
        var fixed = this.fixed_value();
        return !fixed || fixed._dot_throw(compressor);
    });
})(function(node, func) {
    node.DEFMETHOD("_dot_throw", func);
});

export function is_lhs(node, parent) {
    if (parent instanceof AST_Unary && unary_side_effects.has(parent.operator)) return parent.expression;
    if (parent instanceof AST_Assign && parent.left === node) return node;
    if (parent instanceof AST_ForIn && parent.init === node) return node;
}

// method to negate an expression
(function(def_negate) {
    function basic_negation(exp) {
        return make_node(AST_UnaryPrefix, exp, {
            operator: "!",
            expression: exp
        });
    }
    function best(orig, alt, first_in_statement) {
        var negated = basic_negation(orig);
        if (first_in_statement) {
            var stat = make_node(AST_SimpleStatement, alt, {
                body: alt
            });
            return best_of_expression(negated, stat) === stat ? alt : negated;
        }
        return best_of_expression(negated, alt);
    }
    def_negate(AST_Node, function() {
        return basic_negation(this);
    });
    def_negate(AST_Statement, function() {
        throw new Error("Cannot negate a statement");
    });
    def_negate(AST_Function, function() {
        return basic_negation(this);
    });
    def_negate(AST_Class, function() {
        return basic_negation(this);
    });
    def_negate(AST_Arrow, function() {
        return basic_negation(this);
    });
    def_negate(AST_UnaryPrefix, function() {
        if (this.operator == "!")
            return this.expression;
        return basic_negation(this);
    });
    def_negate(AST_Sequence, function(compressor) {
        var expressions = this.expressions.slice();
        expressions.push(expressions.pop().negate(compressor));
        return make_sequence(this, expressions);
    });
    def_negate(AST_Conditional, function(compressor, first_in_statement) {
        var self = this.clone();
        self.consequent = self.consequent.negate(compressor);
        self.alternative = self.alternative.negate(compressor);
        return best(this, self, first_in_statement);
    });
    def_negate(AST_Binary, function(compressor, first_in_statement) {
        var self = this.clone(), op = this.operator;
        if (compressor.option("unsafe_comps")) {
            switch (op) {
              case "<=" : self.operator = ">"  ; return self;
              case "<"  : self.operator = ">=" ; return self;
              case ">=" : self.operator = "<"  ; return self;
              case ">"  : self.operator = "<=" ; return self;
            }
        }
        switch (op) {
          case "==" : self.operator = "!="; return self;
          case "!=" : self.operator = "=="; return self;
          case "===": self.operator = "!=="; return self;
          case "!==": self.operator = "==="; return self;
          case "&&":
            self.operator = "||";
            self.left = self.left.negate(compressor, first_in_statement);
            self.right = self.right.negate(compressor);
            return best(this, self, first_in_statement);
          case "||":
            self.operator = "&&";
            self.left = self.left.negate(compressor, first_in_statement);
            self.right = self.right.negate(compressor);
            return best(this, self, first_in_statement);
        }
        return basic_negation(this);
    });
})(function(node, func) {
    node.DEFMETHOD("negate", function(compressor, first_in_statement) {
        return func.call(this, compressor, first_in_statement);
    });
});

(function (def_bitwise_negate) {
    function basic_bitwise_negation(exp) {
        return make_node(AST_UnaryPrefix, exp, {
            operator: "~",
            expression: exp
        });
    }

    def_bitwise_negate(AST_Node, function(_compressor) {
        return basic_bitwise_negation(this);
    });

    def_bitwise_negate(AST_Number, function(_compressor) {
        const neg = ~this.value;
        if (neg.toString().length > this.value.toString().length) {
            return basic_bitwise_negation(this);
        }
        return make_node(AST_Number, this, { value: neg });
    });

    def_bitwise_negate(AST_UnaryPrefix, function(compressor, in_32_bit_context) {
        if (
            this.operator == "~"
            && (
                this.expression.is_32_bit_integer(compressor) ||
                (in_32_bit_context != null ? in_32_bit_context : compressor.in_32_bit_context())
            )
        ) {
            return this.expression;
        } else {
            return basic_bitwise_negation(this);
        }
    });
})(function (node, func) {
    node.DEFMETHOD("bitwise_negate", func);
});

// Is the callee of this function pure?
var global_pure_fns = makePredicate("Boolean decodeURI decodeURIComponent Date encodeURI encodeURIComponent Error escape EvalError isFinite isNaN Number Object parseFloat parseInt RangeError ReferenceError String SyntaxError TypeError unescape URIError");
AST_Call.DEFMETHOD("is_callee_pure", function(compressor) {
    if (compressor.option("unsafe")) {
        var expr = this.expression;
        var first_arg;
        if (
            expr.expression && expr.expression.name === "hasOwnProperty" &&
            (
                (first_arg = (this.args && this.args[0] && this.args[0].evaluate(compressor))) == null
                || first_arg.thedef && first_arg.thedef.undeclared
            )
        ) {
            return false;
        }
        if (is_undeclared_ref(expr) && global_pure_fns.has(expr.name)) return true;
        if (
            expr instanceof AST_Dot
            && is_undeclared_ref(expr.expression)
            && is_pure_native_fn(expr.expression.name, expr.property)
        ) {
            return true;
        }
    }
    if ((this instanceof AST_New) && compressor.option("pure_new")) {
        return true;
    }
    if (compressor.option("side_effects") && has_annotation(this, _PURE)) {
        return true;
    }
    return !compressor.pure_funcs(this);
});

// If I call this, is it a pure function?
AST_Node.DEFMETHOD("is_call_pure", return_false);
AST_Dot.DEFMETHOD("is_call_pure", function(compressor) {
    if (!compressor.option("unsafe")) return;
    const expr = this.expression;

    let native_obj;
    if (expr instanceof AST_Array) {
        native_obj = "Array";
    } else if (expr.is_boolean()) {
        native_obj = "Boolean";
    } else if (expr.is_number(compressor)) {
        native_obj = "Number";
    } else if (expr instanceof AST_RegExp) {
        native_obj = "RegExp";
    } else if (expr.is_string(compressor)) {
        native_obj = "String";
    } else if (!this.may_throw_on_access(compressor)) {
        native_obj = "Object";
    }
    return native_obj != null && is_pure_native_method(native_obj, this.property);
});

// tell me if a statement aborts
export const aborts = (thing) => thing && thing.aborts();

(function(def_aborts) {
    def_aborts(AST_Statement, return_null);
    def_aborts(AST_Jump, return_this);
    function block_aborts() {
        for (var i = 0; i < this.body.length; i++) {
            if (aborts(this.body[i])) {
                return this.body[i];
            }
        }
        return null;
    }
    def_aborts(AST_Import, return_null);
    def_aborts(AST_BlockStatement, block_aborts);
    def_aborts(AST_SwitchBranch, block_aborts);
    def_aborts(AST_DefClass, function () {
        for (const prop of this.properties) {
            if (prop instanceof AST_ClassStaticBlock) {
                if (prop.aborts()) return prop;
            }
        }
        return null;
    });
    def_aborts(AST_ClassStaticBlock, block_aborts);
    def_aborts(AST_If, function() {
        return this.alternative && aborts(this.body) && aborts(this.alternative) && this;
    });
})(function(node, func) {
    node.DEFMETHOD("aborts", func);
});

AST_Node.DEFMETHOD("contains_this", function() {
    return walk(this, node => {
        if (node instanceof AST_This) return walk_abort;
        if (
            node !== this
            && node instanceof AST_Scope
            && !(node instanceof AST_Arrow)
        ) {
            return true;
        }
    });
});

export function is_modified(compressor, tw, node, value, level, immutable) {
    var parent = tw.parent(level);
    var lhs = is_lhs(node, parent);
    if (lhs) return lhs;
    if (!immutable
        && parent instanceof AST_Call
        && parent.expression === node
        && !(value instanceof AST_Arrow)
        && !(value instanceof AST_Class)
        && !parent.is_callee_pure(compressor)
        && (!(value instanceof AST_Function)
            || !(parent instanceof AST_New) && value.contains_this())) {
        return true;
    }
    if (parent instanceof AST_Array) {
        return is_modified(compressor, tw, parent, parent, level + 1);
    }
    if (parent instanceof AST_ObjectKeyVal && node === parent.value) {
        var obj = tw.parent(level + 1);
        return is_modified(compressor, tw, obj, obj, level + 2);
    }
    if (parent instanceof AST_PropAccess && parent.expression === node) {
        var prop = read_property(value, parent.property);
        return !immutable && is_modified(compressor, tw, parent, prop, level + 1);
    }
}

/**
 * Check if a node may be used by the expression it's in
 * void (0, 1, {node}, 2) -> false
 * console.log(0, {node}) -> true
 */
export function is_used_in_expression(tw) {
    for (let p = -1, node, parent; node = tw.parent(p), parent = tw.parent(p + 1); p++) {
        if (parent instanceof AST_Sequence) {
            const nth_expression = parent.expressions.indexOf(node);
            if (nth_expression !== parent.expressions.length - 1) {
                // Detect (0, x.noThis)() constructs
                const grandparent = tw.parent(p + 2);
                if (
                    parent.expressions.length > 2
                    || parent.expressions.length === 1
                    || !requires_sequence_to_maintain_binding(grandparent, parent, parent.expressions[1])
                ) {
                    return false;
                }
                return true;
            } else {
                continue;
            }
        }
        if (parent instanceof AST_Unary) {
            const op = parent.operator;
            if (op === "void") {
                return false;
            }
            if (op === "typeof" || op === "+" || op === "-" || op === "!" || op === "~") {
                continue;
            }
        }
        if (
            parent instanceof AST_SimpleStatement
            || parent instanceof AST_LabeledStatement
        ) {
            return false;
        }
        if (parent instanceof AST_Scope) {
            return false;
        }
        return true;
    }

    return true;
}
