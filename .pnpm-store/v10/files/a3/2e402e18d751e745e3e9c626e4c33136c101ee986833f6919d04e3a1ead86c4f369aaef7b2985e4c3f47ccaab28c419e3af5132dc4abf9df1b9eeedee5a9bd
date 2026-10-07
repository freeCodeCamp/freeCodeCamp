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
    AST_Await,
    AST_Binary,
    AST_Block,
    AST_BlockStatement,
    AST_Break,
    AST_Call,
    AST_Case,
    AST_Chain,
    AST_Class,
    AST_Conditional,
    AST_Constant,
    AST_Continue,
    AST_Debugger,
    AST_Default,
    AST_Definitions,
    AST_DefinitionsLike,
    AST_Defun,
    AST_Destructuring,
    AST_Directive,
    AST_Dot,
    AST_DWLoop,
    AST_EmptyStatement,
    AST_Exit,
    AST_Expansion,
    AST_Export,
    AST_For,
    AST_ForIn,
    AST_If,
    AST_Import,
    AST_IterationStatement,
    AST_Lambda,
    AST_LoopControl,
    AST_Node,
    AST_Number,
    AST_Object,
    AST_ObjectKeyVal,
    AST_ObjectProperty,
    AST_PropAccess,
    AST_RegExp,
    AST_Return,
    AST_Scope,
    AST_Sequence,
    AST_SimpleStatement,
    AST_Sub,
    AST_Switch,
    AST_Symbol,
    AST_SymbolConst,
    AST_SymbolDeclaration,
    AST_SymbolDefun,
    AST_SymbolFunarg,
    AST_SymbolLambda,
    AST_SymbolLet,
    AST_SymbolRef,
    AST_SymbolUsing,
    AST_SymbolVar,
    AST_This,
    AST_Try,
    AST_TryBlock,
    AST_Unary,
    AST_UnaryPostfix,
    AST_UnaryPrefix,
    AST_Using,
    AST_Var,
    AST_VarDef,
    AST_With,
    AST_Yield,

    TreeTransformer,
    TreeWalker,
    walk,
    walk_abort,

    _NOINLINE,
} from "../ast.js";
import {
    make_node,
    make_void_0,
    MAP,
    member,
    remove,
    has_annotation
} from "../utils/index.js";

import { pure_prop_access_globals } from "./native-objects.js";
import {
    lazy_op,
    unary_side_effects,
    is_modified,
    is_lhs,
    aborts
} from "./inference.js";
import { WRITE_ONLY, clear_flag } from "./compressor-flags.js";
import {
    make_sequence,
    merge_sequence,
    maintain_this_binding,
    is_func_expr,
    is_identifier_atom,
    is_ref_of,
    can_be_evicted_from_block,
    as_statement_array,
} from "./common.js";

function loop_body(x) {
    if (x instanceof AST_IterationStatement) {
        return x.body instanceof AST_BlockStatement ? x.body : x;
    }
    return x;
}

function is_lhs_read_only(lhs) {
    if (lhs instanceof AST_This) return true;
    if (lhs instanceof AST_SymbolRef) return lhs.definition().orig[0] instanceof AST_SymbolLambda;
    if (lhs instanceof AST_PropAccess) {
        lhs = lhs.expression;
        if (lhs instanceof AST_SymbolRef) {
            if (lhs.is_immutable()) return false;
            lhs = lhs.fixed_value();
        }
        if (!lhs) return true;
        if (lhs instanceof AST_RegExp) return false;
        if (lhs instanceof AST_Constant) return true;
        return is_lhs_read_only(lhs);
    }
    return false;
}

/** var a = 1 --> var a*/
function remove_initializers(var_statement) {
    var decls = [];
    var_statement.definitions.forEach(function(def) {
        if (def.name instanceof AST_SymbolDeclaration) {
            def.value = null;
            decls.push(def);
        } else {
            def.declarations_as_names().forEach(name => {
                decls.push(make_node(AST_VarDef, def, {
                    name,
                    value: null
                }));
            });
        }
    });
    return decls.length ? make_node(AST_Var, var_statement, { definitions: decls }) : null;
}

/** Called on code which won't be executed but has an effect outside of itself: `var`, `function` statements, `export`, `import`. */
export function extract_from_unreachable_code(compressor, stat, target) {
    walk(stat, node => {
        if (node instanceof AST_Var) {
            const no_initializers = remove_initializers(node);
            if (no_initializers) target.push(no_initializers);
            return true;
        }
        if (
            node instanceof AST_Defun
            && (node === stat || !compressor.has_directive("use strict"))
        ) {
            target.push(node === stat ? node : make_node(AST_Var, node, {
                definitions: [
                    make_node(AST_VarDef, node, {
                        name: make_node(AST_SymbolVar, node.name, node.name),
                        value: null
                    })
                ]
            }));
            return true;
        }
        if (node instanceof AST_Export || node instanceof AST_Import) {
            target.push(node);
            return true;
        }
        if (node instanceof AST_Scope || node instanceof AST_Class) {
            // Do not go into nested scopes
            return true;
        }
    });
}

/** Tighten a bunch of statements together, and perform statement-level optimization. */
export function tighten_body(statements, compressor) {
    const nearest_scope = compressor.find_scope();
    const defun_scope = nearest_scope.get_defun_scope();
    const { in_loop, in_try } = find_loop_scope_try();

    var CHANGED, max_iter = 10;
    do {
        CHANGED = false;
        eliminate_spurious_blocks(statements);
        if (compressor.option("dead_code")) {
            eliminate_dead_code(statements, compressor);
        }
        if (compressor.option("if_return")) {
            handle_if_return(statements, compressor);
        }
        if (compressor.sequences_limit > 0) {
            sequencesize(statements, compressor);
            sequencesize_2(statements, compressor);
        }
        if (compressor.option("join_vars")) {
            join_consecutive_vars(statements);
        }
        if (compressor.option("collapse_vars")) {
            collapse(statements, compressor);
        }
    } while (CHANGED && max_iter-- > 0);

    function find_loop_scope_try() {
        var node = compressor.self(), level = 0, in_loop = false, in_try = false;
        do {
            if (node instanceof AST_IterationStatement) {
                in_loop = true;
            } else if (node instanceof AST_Scope) {
                break;
            } else if (node instanceof AST_TryBlock) {
                in_try = true;
            }
        } while (node = compressor.parent(level++));

        return { in_loop, in_try };
    }

    // Search from right to left for assignment-like expressions:
    // - `var a = x;`
    // - `a = x;`
    // - `++a`
    // For each candidate, scan from left to right for first usage, then try
    // to fold assignment into the site for compression.
    // Will not attempt to collapse assignments into or past code blocks
    // which are not sequentially executed, e.g. loops and conditionals.
    function collapse(statements, compressor) {
        if (nearest_scope.pinned() || defun_scope.pinned())
            return statements;
        var args;
        var candidates = [];
        var stat_index = statements.length;
        var scanner = new TreeTransformer(function (node) {
            if (abort)
                return node;
            // Skip nodes before `candidate` as quickly as possible
            if (!hit) {
                if (node !== hit_stack[hit_index])
                    return node;
                hit_index++;
                if (hit_index < hit_stack.length)
                    return handle_custom_scan_order(node);
                hit = true;
                stop_after = find_stop(node, 0);
                if (stop_after === node)
                    abort = true;
                return node;
            }
            // Stop immediately if these node types are encountered
            var parent = scanner.parent();
            if (node instanceof AST_Assign
                    && (node.logical || node.operator != "=" && lhs.equivalent_to(node.left))
                || node instanceof AST_Await
                || node instanceof AST_Using
                || node instanceof AST_Call && lhs instanceof AST_PropAccess && lhs.equivalent_to(node.expression)
                ||
                    (node instanceof AST_Call || node instanceof AST_PropAccess)
                    && node.optional
                || node instanceof AST_Debugger
                || node instanceof AST_Destructuring
                || node instanceof AST_Expansion
                    && node.expression instanceof AST_Symbol
                    && (
                        node.expression instanceof AST_This
                        || node.expression.definition().references.length > 1
                    )
                || node instanceof AST_IterationStatement && !(node instanceof AST_For)
                || node instanceof AST_LoopControl
                || node instanceof AST_Try
                || node instanceof AST_With
                || node instanceof AST_Yield
                || node instanceof AST_Export
                || node instanceof AST_Class
                || parent instanceof AST_For && node !== parent.init
                || !replace_all
                    && (
                        node instanceof AST_SymbolRef
                        && !node.is_declared(compressor)
                        && !pure_prop_access_globals.has(node)
                    )
                || node instanceof AST_SymbolRef
                    && parent instanceof AST_Call
                    && has_annotation(parent, _NOINLINE)
                || node instanceof AST_ObjectProperty && node.key instanceof AST_Node
            ) {
                abort = true;
                return node;
            }
            // Stop only if candidate is found within conditional branches
            if (!stop_if_hit && (!lhs_local || !replace_all)
                && (parent instanceof AST_Binary && lazy_op.has(parent.operator) && parent.left !== node
                    || parent instanceof AST_Conditional && parent.condition !== node
                    || parent instanceof AST_If && parent.condition !== node)) {
                stop_if_hit = parent;
            }
            // Replace variable with assignment when found
            if (
                can_replace
                && !(node instanceof AST_SymbolDeclaration)
                && lhs.equivalent_to(node)
                && !shadows(scanner.find_scope() || nearest_scope, lvalues)
            ) {
                if (stop_if_hit) {
                    abort = true;
                    return node;
                }
                if (is_lhs(node, parent)) {
                    if (value_def)
                        replaced++;
                    return node;
                } else {
                    replaced++;
                    if (value_def && candidate instanceof AST_VarDef)
                        return node;
                }
                CHANGED = abort = true;
                if (candidate instanceof AST_UnaryPostfix) {
                    return make_node(AST_UnaryPrefix, candidate, candidate);
                }
                if (candidate instanceof AST_VarDef) {
                    var def = candidate.name.definition();
                    var value = candidate.value;
                    if (def.references.length - def.replaced == 1 && !compressor.exposed(def)) {
                        def.replaced++;
                        if (funarg && is_identifier_atom(value)) {
                            return value.transform(compressor);
                        } else {
                            return maintain_this_binding(parent, node, value);
                        }
                    }
                    return make_node(AST_Assign, candidate, {
                        operator: "=",
                        logical: false,
                        left: make_node(AST_SymbolRef, candidate.name, candidate.name),
                        right: value
                    });
                }
                clear_flag(candidate, WRITE_ONLY);
                return candidate;
            }
            // These node types have child nodes that execute sequentially,
            // but are otherwise not safe to scan into or beyond them.
            var sym;
            if (node instanceof AST_Call
                || node instanceof AST_Exit
                && (side_effects || lhs instanceof AST_PropAccess || may_modify(lhs))
                || node instanceof AST_PropAccess
                && (side_effects || node.expression.may_throw_on_access(compressor))
                || node instanceof AST_SymbolRef
                && ((lvalues.has(node.name) && lvalues.get(node.name).modified) || side_effects && may_modify(node))
                || node instanceof AST_VarDef && node.value
                && (lvalues.has(node.name.name) || side_effects && may_modify(node.name))
                || node instanceof AST_Using
                || (sym = is_lhs(node.left, node))
                && (sym instanceof AST_PropAccess || lvalues.has(sym.name))
                || may_throw
                && (in_try ? node.has_side_effects(compressor) : side_effects_external(node))) {
                stop_after = node;
                if (node instanceof AST_Scope)
                    abort = true;
            }
            return handle_custom_scan_order(node);
        }, function (node) {
            if (abort)
                return;
            if (stop_after === node)
                abort = true;
            if (stop_if_hit === node)
                stop_if_hit = null;
        });

        var multi_replacer = new TreeTransformer(function (node) {
            if (abort)
                return node;
            // Skip nodes before `candidate` as quickly as possible
            if (!hit) {
                if (node !== hit_stack[hit_index])
                    return node;
                hit_index++;
                if (hit_index < hit_stack.length)
                    return;
                hit = true;
                return node;
            }
            // Replace variable when found
            if (node instanceof AST_SymbolRef
                && node.name == def.name) {
                if (!--replaced)
                    abort = true;
                if (is_lhs(node, multi_replacer.parent()))
                    return node;
                def.replaced++;
                value_def.replaced--;
                return candidate.value;
            }
            // Skip (non-executed) functions and (leading) default case in switch statements
            if (node instanceof AST_Default || node instanceof AST_Scope)
                return node;
        });

        while (--stat_index >= 0) {
            // Treat parameters as collapsible in IIFE, i.e.
            //   function(a, b){ ... }(x());
            // would be translated into equivalent assignments:
            //   var a = x(), b = undefined;
            if (stat_index == 0 && compressor.option("unused"))
                extract_args();
            // Find collapsible assignments
            var hit_stack = [];
            extract_candidates(statements[stat_index]);
            while (candidates.length > 0) {
                hit_stack = candidates.pop();
                var hit_index = 0;
                var candidate = hit_stack[hit_stack.length - 1];
                var value_def = null;
                var stop_after = null;
                var stop_if_hit = null;
                var lhs = get_lhs(candidate);
                if (!lhs || is_lhs_read_only(lhs) || lhs.has_side_effects(compressor))
                    continue;
                // Locate symbols which may execute code outside of scanning range
                var lvalues = get_lvalues(candidate);
                var lhs_local = is_lhs_local(lhs);
                if (lhs instanceof AST_SymbolRef) {
                    lvalues.set(lhs.name, { def: lhs.definition(), modified: false });
                }
                var side_effects = value_has_side_effects(candidate);
                var replace_all = replace_all_symbols();
                var may_throw = candidate.may_throw(compressor);
                var funarg = candidate.name instanceof AST_SymbolFunarg;
                var hit = funarg;
                var abort = false, replaced = 0, can_replace = !args || !hit;
                if (!can_replace) {
                    for (
                        let j = compressor.self().argnames.lastIndexOf(candidate.name) + 1;
                        !abort && j < args.length;
                        j++
                    ) {
                        args[j].transform(scanner);
                    }
                    can_replace = true;
                }
                for (var i = stat_index; !abort && i < statements.length; i++) {
                    statements[i].transform(scanner);
                }
                if (value_def) {
                    var def = candidate.name.definition();
                    if (abort && def.references.length - def.replaced > replaced)
                        replaced = false;
                    else {
                        abort = false;
                        hit_index = 0;
                        hit = funarg;
                        for (var i = stat_index; !abort && i < statements.length; i++) {
                            statements[i].transform(multi_replacer);
                        }
                        value_def.single_use = false;
                    }
                }
                if (replaced && !remove_candidate(candidate))
                    statements.splice(stat_index, 1);
            }
        }

        function handle_custom_scan_order(node) {
            // Skip (non-executed) functions
            if (node instanceof AST_Scope)
                return node;

            // Scan case expressions first in a switch statement
            if (node instanceof AST_Switch) {
                node.expression = node.expression.transform(scanner);
                for (var i = 0, len = node.body.length; !abort && i < len; i++) {
                    var branch = node.body[i];
                    if (branch instanceof AST_Case) {
                        if (!hit) {
                            if (branch !== hit_stack[hit_index])
                                continue;
                            hit_index++;
                        }
                        branch.expression = branch.expression.transform(scanner);
                        if (!replace_all)
                            break;
                    }
                }
                abort = true;
                return node;
            }
        }

        function redefined_within_scope(def, scope) {
            if (def.global)
                return false;
            let cur_scope = def.scope;
            while (cur_scope && cur_scope !== scope) {
                if (cur_scope.variables.has(def.name)) {
                    return true;
                }
                cur_scope = cur_scope.parent_scope;
            }
            return false;
        }

        function has_overlapping_symbol(fn, arg, fn_strict) {
            var found = false, scan_this = !(fn instanceof AST_Arrow);
            arg.walk(new TreeWalker(function (node, descend) {
                if (found)
                    return true;
                if (node instanceof AST_SymbolRef && (fn.variables.has(node.name) || redefined_within_scope(node.definition(), fn))) {
                    var s = node.definition().scope;
                    if (s !== defun_scope)
                        while (s = s.parent_scope) {
                            if (s === defun_scope)
                                return true;
                        }
                    return found = true;
                }
                if ((fn_strict || scan_this) && node instanceof AST_This) {
                    return found = true;
                }
                if (node instanceof AST_Scope && !(node instanceof AST_Arrow)) {
                    var prev = scan_this;
                    scan_this = false;
                    descend();
                    scan_this = prev;
                    return true;
                }
            }));
            return found;
        }

        function arg_is_injectable(arg) {
            if (arg instanceof AST_Expansion) return false;
            const contains_await = walk(arg, (node) => {
                if (node instanceof AST_Await) return walk_abort;
            });
            if (contains_await) return false;
            return true;
        }
        function extract_args() {
            var iife, fn = compressor.self();
            if (is_func_expr(fn)
                && !fn.name
                && !fn.uses_arguments
                && !fn.pinned()
                && (iife = compressor.parent()) instanceof AST_Call
                && iife.expression === fn
                && iife.args.every(arg_is_injectable)
            ) {
                var fn_strict = compressor.has_directive("use strict");
                if (fn_strict && !member(fn_strict, fn.body))
                    fn_strict = false;
                var len = fn.argnames.length;
                args = iife.args.slice(len);
                var names = new Set();
                for (var i = len; --i >= 0;) {
                    var sym = fn.argnames[i];
                    var arg = iife.args[i];
                    // The following two line fix is a duplicate of the fix at
                    // https://github.com/terser/terser/commit/011d3eb08cefe6922c7d1bdfa113fc4aeaca1b75
                    // This might mean that these two pieces of code (one here in collapse_vars and another in reduce_vars
                    // Might be doing the exact same thing.
                    const def = sym.definition && sym.definition();
                    const is_reassigned = def && def.orig.length > 1;
                    if (is_reassigned)
                        continue;
                    args.unshift(make_node(AST_VarDef, sym, {
                        name: sym,
                        value: arg
                    }));
                    if (names.has(sym.name))
                        continue;
                    names.add(sym.name);
                    if (sym instanceof AST_Expansion) {
                        var elements = iife.args.slice(i);
                        if (elements.every((arg) => !has_overlapping_symbol(fn, arg, fn_strict)
                        )) {
                            candidates.unshift([make_node(AST_VarDef, sym, {
                                name: sym.expression,
                                value: make_node(AST_Array, iife, {
                                    elements: elements
                                })
                            })]);
                        }
                    } else {
                        if (!arg) {
                            arg = make_void_0(sym).transform(compressor);
                        } else if (arg instanceof AST_Lambda && arg.pinned()
                            || has_overlapping_symbol(fn, arg, fn_strict)) {
                            arg = null;
                        }
                        if (arg)
                            candidates.unshift([make_node(AST_VarDef, sym, {
                                name: sym,
                                value: arg
                            })]);
                    }
                }
            }
        }

        function extract_candidates(expr) {
            hit_stack.push(expr);
            if (expr instanceof AST_Assign) {
                if (!expr.left.has_side_effects(compressor)
                    && !(expr.right instanceof AST_Chain)) {
                    candidates.push(hit_stack.slice());
                }
                extract_candidates(expr.right);
            } else if (expr instanceof AST_Binary) {
                extract_candidates(expr.left);
                extract_candidates(expr.right);
            } else if (expr instanceof AST_Call && !has_annotation(expr, _NOINLINE)) {
                extract_candidates(expr.expression);
                expr.args.forEach(extract_candidates);
            } else if (expr instanceof AST_Case) {
                extract_candidates(expr.expression);
            } else if (expr instanceof AST_Conditional) {
                extract_candidates(expr.condition);
                extract_candidates(expr.consequent);
                extract_candidates(expr.alternative);
            } else if (expr instanceof AST_Definitions) {
                var len = expr.definitions.length;
                // limit number of trailing variable definitions for consideration
                var i = len - 200;
                if (i < 0)
                    i = 0;
                for (; i < len; i++) {
                    extract_candidates(expr.definitions[i]);
                }
            } else if (expr instanceof AST_DWLoop) {
                extract_candidates(expr.condition);
                if (!(expr.body instanceof AST_Block)) {
                    extract_candidates(expr.body);
                }
            } else if (expr instanceof AST_Exit) {
                if (expr.value)
                    extract_candidates(expr.value);
            } else if (expr instanceof AST_For) {
                if (expr.init)
                    extract_candidates(expr.init);
                if (expr.condition)
                    extract_candidates(expr.condition);
                if (expr.step)
                    extract_candidates(expr.step);
                if (!(expr.body instanceof AST_Block)) {
                    extract_candidates(expr.body);
                }
            } else if (expr instanceof AST_ForIn) {
                extract_candidates(expr.object);
                if (!(expr.body instanceof AST_Block)) {
                    extract_candidates(expr.body);
                }
            } else if (expr instanceof AST_If) {
                extract_candidates(expr.condition);
                if (!(expr.body instanceof AST_Block)) {
                    extract_candidates(expr.body);
                }
                if (expr.alternative && !(expr.alternative instanceof AST_Block)) {
                    extract_candidates(expr.alternative);
                }
            } else if (expr instanceof AST_Sequence) {
                expr.expressions.forEach(extract_candidates);
            } else if (expr instanceof AST_SimpleStatement) {
                extract_candidates(expr.body);
            } else if (expr instanceof AST_Switch) {
                extract_candidates(expr.expression);
                expr.body.forEach(extract_candidates);
            } else if (expr instanceof AST_Unary) {
                if (expr.operator == "++" || expr.operator == "--") {
                    candidates.push(hit_stack.slice());
                }
            } else if (expr instanceof AST_VarDef) {
                if (expr.value && !(expr.value instanceof AST_Chain)) {
                    candidates.push(hit_stack.slice());
                    extract_candidates(expr.value);
                }
            }
            hit_stack.pop();
        }

        function find_stop(node, level, write_only) {
            var parent = scanner.parent(level);
            if (parent instanceof AST_Assign) {
                if (write_only
                    && !parent.logical
                    && !(parent.left instanceof AST_PropAccess
                        || lvalues.has(parent.left.name))) {
                    return find_stop(parent, level + 1, write_only);
                }
                return node;
            }
            if (parent instanceof AST_Binary) {
                if (write_only && (!lazy_op.has(parent.operator) || parent.left === node)) {
                    return find_stop(parent, level + 1, write_only);
                }
                return node;
            }
            if (parent instanceof AST_Call)
                return node;
            if (parent instanceof AST_Case)
                return node;
            if (parent instanceof AST_Conditional) {
                if (write_only && parent.condition === node) {
                    return find_stop(parent, level + 1, write_only);
                }
                return node;
            }
            if (parent instanceof AST_Definitions) {
                return find_stop(parent, level + 1, true);
            }
            if (parent instanceof AST_Exit) {
                return write_only ? find_stop(parent, level + 1, write_only) : node;
            }
            if (parent instanceof AST_If) {
                if (write_only && parent.condition === node) {
                    return find_stop(parent, level + 1, write_only);
                }
                return node;
            }
            if (parent instanceof AST_IterationStatement)
                return node;
            if (parent instanceof AST_Sequence) {
                return find_stop(parent, level + 1, parent.tail_node() !== node);
            }
            if (parent instanceof AST_SimpleStatement) {
                return find_stop(parent, level + 1, true);
            }
            if (parent instanceof AST_Switch)
                return node;
            if (parent instanceof AST_VarDef)
                return node;
            return null;
        }

        function mangleable_var(var_def) {
            var value = var_def.value;
            if (!(value instanceof AST_SymbolRef))
                return;
            if (value.name == "arguments")
                return;
            var def = value.definition();
            if (def.undeclared)
                return;
            return value_def = def;
        }

        function get_lhs(expr) {
            if (expr instanceof AST_Assign && expr.logical) {
                return false;
            } else if (expr instanceof AST_VarDef && expr.name instanceof AST_SymbolDeclaration) {
                var def = expr.name.definition();
                if (!member(expr.name, def.orig))
                    return;
                var referenced = def.references.length - def.replaced;
                if (!referenced)
                    return;
                var declared = def.orig.length - def.eliminated;
                if (declared > 1 && !(expr.name instanceof AST_SymbolFunarg)
                    || (referenced > 1 ? mangleable_var(expr) : !compressor.exposed(def))) {
                    return make_node(AST_SymbolRef, expr.name, expr.name);
                }
            } else {
                const lhs = expr instanceof AST_Assign
                    ? expr.left
                    : expr.expression;
                return !is_ref_of(lhs, AST_SymbolConst)
                    && !is_ref_of(lhs, AST_SymbolLet)
                    && !is_ref_of(lhs, AST_SymbolUsing)
                    && lhs;
            }
        }

        function get_rvalue(expr) {
            if (expr instanceof AST_Assign) {
                return expr.right;
            } else {
                return expr.value;
            }
        }

        function get_lvalues(expr) {
            var lvalues = new Map();
            if (expr instanceof AST_Unary)
                return lvalues;
            var tw = new TreeWalker(function (node) {
                var sym = node;
                while (sym instanceof AST_PropAccess)
                    sym = sym.expression;
                if (sym instanceof AST_SymbolRef) {
                    const prev = lvalues.get(sym.name);
                    if (!prev || !prev.modified) {
                        lvalues.set(sym.name, {
                            def: sym.definition(),
                            modified: is_modified(compressor, tw, node, node, 0)
                        });
                    }
                }
            });
            get_rvalue(expr).walk(tw);
            return lvalues;
        }

        function remove_candidate(expr) {
            if (expr.name instanceof AST_SymbolFunarg) {
                var iife = compressor.parent(), argnames = compressor.self().argnames;
                var index = argnames.indexOf(expr.name);
                if (index < 0) {
                    iife.args.length = Math.min(iife.args.length, argnames.length - 1);
                } else {
                    var args = iife.args;
                    if (args[index])
                        args[index] = make_node(AST_Number, args[index], {
                            value: 0
                        });
                }
                return true;
            }
            var found = false;
            return statements[stat_index].transform(new TreeTransformer(function (node, descend, in_list) {
                if (found)
                    return node;
                if (node === expr || node.body === expr) {
                    found = true;
                    if (node instanceof AST_VarDef) {
                        node.value = node.name instanceof AST_SymbolConst
                            ? make_void_0(node.value) // `const` always needs value.
                            : null;
                        return node;
                    }
                    return in_list ? MAP.skip : null;
                }
            }, function (node) {
                if (node instanceof AST_Sequence)
                    switch (node.expressions.length) {
                        case 0: return null;
                        case 1: return node.expressions[0];
                    }
            }));
        }

        function is_lhs_local(lhs) {
            while (lhs instanceof AST_PropAccess)
                lhs = lhs.expression;
            return lhs instanceof AST_SymbolRef
                && lhs.definition().scope.get_defun_scope() === defun_scope
                && !(in_loop
                    && (lvalues.has(lhs.name)
                        || candidate instanceof AST_Unary
                        || (candidate instanceof AST_Assign
                            && !candidate.logical
                            && candidate.operator != "=")));
        }

        function value_has_side_effects(expr) {
            if (expr instanceof AST_Unary)
                return unary_side_effects.has(expr.operator);
            return get_rvalue(expr).has_side_effects(compressor);
        }

        function replace_all_symbols() {
            if (side_effects)
                return false;
            if (value_def)
                return true;
            if (lhs instanceof AST_SymbolRef) {
                var def = lhs.definition();
                if (def.references.length - def.replaced == (candidate instanceof AST_VarDef ? 1 : 2)) {
                    return true;
                }
            }
            return false;
        }

        function may_modify(sym) {
            if (!sym.definition)
                return true; // AST_Destructuring
            var def = sym.definition();
            if (def.orig.length == 1 && def.orig[0] instanceof AST_SymbolDefun)
                return false;
            if (def.scope.get_defun_scope() !== defun_scope)
                return true;
            return def.references.some((ref) =>
                ref.scope.get_defun_scope() !== defun_scope
            );
        }

        function side_effects_external(node, lhs) {
            if (node instanceof AST_Assign)
                return side_effects_external(node.left, true);
            if (node instanceof AST_Unary)
                return side_effects_external(node.expression, true);
            if (node instanceof AST_VarDef)
                return node.value && side_effects_external(node.value);
            if (lhs) {
                if (node instanceof AST_Dot)
                    return side_effects_external(node.expression, true);
                if (node instanceof AST_Sub)
                    return side_effects_external(node.expression, true);
                if (node instanceof AST_SymbolRef)
                    return node.definition().scope.get_defun_scope() !== defun_scope;
            }
            return false;
        }

        /**
         * Will any of the pulled-in lvalues shadow a variable in newScope or parents?
         * similar to scope_encloses_variables_in_this_scope */
        function shadows(my_scope, lvalues) {
            for (const { def } of lvalues.values()) {
                const looked_up = my_scope.find_variable(def.name);
                if (looked_up) {
                    if (looked_up === def) continue;
                    return true;
                }
            }
            return false;
        }
    }

    function eliminate_spurious_blocks(statements) {
        var seen_dirs = [];
        for (var i = 0; i < statements.length;) {
            var stat = statements[i];
            if (stat instanceof AST_BlockStatement && stat.body.every(can_be_evicted_from_block)) {
                CHANGED = true;
                eliminate_spurious_blocks(stat.body);
                statements.splice(i, 1, ...stat.body);
                i += stat.body.length;
            } else if (stat instanceof AST_EmptyStatement) {
                CHANGED = true;
                statements.splice(i, 1);
            } else if (stat instanceof AST_Directive) {
                if (seen_dirs.indexOf(stat.value) < 0) {
                    i++;
                    seen_dirs.push(stat.value);
                } else {
                    CHANGED = true;
                    statements.splice(i, 1);
                }
            } else
                i++;
        }
    }

    function handle_if_return(statements, compressor) {
        var self = compressor.self();
        var multiple_if_returns = has_multiple_if_returns(statements);
        var in_lambda = self instanceof AST_Lambda;
        // Prevent extremely deep nesting
        // https://github.com/terser/terser/issues/1432
        // https://github.com/webpack/webpack/issues/17548
        const iteration_start = Math.min(statements.length, 500);
        for (var i = iteration_start; --i >= 0;) {
            var stat = statements[i];
            var j = next_index(i);
            var next = statements[j];

            if (in_lambda && !next && stat instanceof AST_Return) {
                if (!stat.value) {
                    CHANGED = true;
                    statements.splice(i, 1);
                    continue;
                }
                if (stat.value instanceof AST_UnaryPrefix && stat.value.operator == "void") {
                    CHANGED = true;
                    statements[i] = make_node(AST_SimpleStatement, stat, {
                        body: stat.value.expression
                    });
                    continue;
                }
            }

            if (stat instanceof AST_If) {
                let ab, new_else;

                ab = aborts(stat.body);
                if (
                    can_merge_flow(ab)
                    && (new_else = as_statement_array_with_return(stat.body, ab))
                ) {
                    if (ab.label) {
                        remove(ab.label.thedef.references, ab);
                    }
                    CHANGED = true;
                    stat = stat.clone();
                    stat.condition = stat.condition.negate(compressor);
                    stat.body = make_node(AST_BlockStatement, stat, {
                        body: as_statement_array(stat.alternative).concat(extract_defuns())
                    });
                    stat.alternative = make_node(AST_BlockStatement, stat, {
                        body: new_else
                    });
                    statements[i] = stat.transform(compressor);
                    continue;
                }

                ab = aborts(stat.alternative);
                if (
                    can_merge_flow(ab)
                    && (new_else = as_statement_array_with_return(stat.alternative, ab))
                ) {
                    if (ab.label) {
                        remove(ab.label.thedef.references, ab);
                    }
                    CHANGED = true;
                    stat = stat.clone();
                    stat.body = make_node(AST_BlockStatement, stat.body, {
                        body: as_statement_array(stat.body).concat(extract_defuns())
                    });
                    stat.alternative = make_node(AST_BlockStatement, stat.alternative, {
                        body: new_else
                    });
                    statements[i] = stat.transform(compressor);
                    continue;
                }
            }

            if (stat instanceof AST_If && stat.body instanceof AST_Return) {
                var value = stat.body.value;
                //---
                // pretty silly case, but:
                // if (foo()) return; return; ==> foo(); return;
                if (!value && !stat.alternative
                    && (in_lambda && !next || next instanceof AST_Return && !next.value)) {
                    CHANGED = true;
                    statements[i] = make_node(AST_SimpleStatement, stat.condition, {
                        body: stat.condition
                    });
                    continue;
                }
                //---
                // if (foo()) return x; return y; ==> return foo() ? x : y;
                if (value && !stat.alternative && next instanceof AST_Return && next.value) {
                    CHANGED = true;
                    stat = stat.clone();
                    stat.alternative = next;
                    statements[i] = stat.transform(compressor);
                    statements.splice(j, 1);
                    continue;
                }
                //---
                // if (foo()) return x; [ return ; ] ==> return foo() ? x : undefined;
                if (value && !stat.alternative
                    && (!next && in_lambda && multiple_if_returns
                        || next instanceof AST_Return)) {
                    CHANGED = true;
                    stat = stat.clone();
                    stat.alternative = next || make_node(AST_Return, stat, {
                        value: null
                    });
                    statements[i] = stat.transform(compressor);
                    if (next)
                        statements.splice(j, 1);
                    continue;
                }
                //---
                // if (a) return b; if (c) return d; e; ==> return a ? b : c ? d : void e;
                //
                // if sequences is not enabled, this can lead to an endless loop (issue #866).
                // however, with sequences on this helps producing slightly better output for
                // the example code.
                var prev = statements[prev_index(i)];
                if (compressor.option("sequences") && in_lambda && !stat.alternative
                    && prev instanceof AST_If && prev.body instanceof AST_Return
                    && next_index(j) == statements.length && next instanceof AST_SimpleStatement) {
                    CHANGED = true;
                    stat = stat.clone();
                    stat.alternative = make_node(AST_BlockStatement, next, {
                        body: [
                            next,
                            make_node(AST_Return, next, {
                                value: null
                            })
                        ]
                    });
                    statements[i] = stat.transform(compressor);
                    statements.splice(j, 1);
                    continue;
                }
            }
        }

        function has_multiple_if_returns(statements) {
            var n = 0;
            for (var i = statements.length; --i >= 0;) {
                var stat = statements[i];
                if (stat instanceof AST_If && stat.body instanceof AST_Return) {
                    if (++n > 1)
                        return true;
                }
            }
            return false;
        }

        function is_return_void(value) {
            return !value || value instanceof AST_UnaryPrefix && value.operator == "void";
        }

        function can_merge_flow(ab) {
            if (!ab)
                return false;
            for (var j = i + 1, len = statements.length; j < len; j++) {
                var stat = statements[j];
                if (stat instanceof AST_DefinitionsLike && !(stat instanceof AST_Var))
                    return false;
            }
            var lct = ab instanceof AST_LoopControl ? compressor.loopcontrol_target(ab) : null;
            return ab instanceof AST_Return && in_lambda && is_return_void(ab.value)
                || ab instanceof AST_Continue && self === loop_body(lct)
                || ab instanceof AST_Break && lct instanceof AST_BlockStatement && self === lct;
        }

        function extract_defuns() {
            var tail = statements.slice(i + 1);
            statements.length = i + 1;
            return tail.filter(function (stat) {
                if (stat instanceof AST_Defun) {
                    statements.push(stat);
                    return false;
                }
                return true;
            });
        }

        function as_statement_array_with_return(node, ab) {
            var body = as_statement_array(node);
            if (ab !== body[body.length - 1]) {
                return undefined;
            }
            body = body.slice(0, -1);
            if (!body.every(stat => can_be_evicted_from_block(stat))) {
                return undefined;
            }
            if (ab.value) {
                body.push(make_node(AST_SimpleStatement, ab.value, {
                    body: ab.value.expression
                }));
            }
            return body;
        }

        function next_index(i) {
            for (var j = i + 1, len = statements.length; j < len; j++) {
                var stat = statements[j];
                if (!(stat instanceof AST_Var && declarations_only(stat))) {
                    break;
                }
            }
            return j;
        }

        function prev_index(i) {
            for (var j = i; --j >= 0;) {
                var stat = statements[j];
                if (!(stat instanceof AST_Var && declarations_only(stat))) {
                    break;
                }
            }
            return j;
        }
    }

    function eliminate_dead_code(statements, compressor) {
        var has_quit;
        var self = compressor.self();
        for (var i = 0, n = 0, len = statements.length; i < len; i++) {
            var stat = statements[i];
            if (stat instanceof AST_LoopControl) {
                var lct = compressor.loopcontrol_target(stat);
                if (stat instanceof AST_Break
                    && !(lct instanceof AST_IterationStatement)
                    && loop_body(lct) === self
                    || stat instanceof AST_Continue
                    && loop_body(lct) === self) {
                    if (stat.label) {
                        remove(stat.label.thedef.references, stat);
                    }
                } else {
                    statements[n++] = stat;
                }
            } else {
                statements[n++] = stat;
            }
            if (aborts(stat)) {
                has_quit = statements.slice(i + 1);
                break;
            }
        }
        statements.length = n;
        CHANGED = n != len;
        if (has_quit)
            has_quit.forEach(function (stat) {
                extract_from_unreachable_code(compressor, stat, statements);
            });
    }

    function declarations_only(node) {
        return node.definitions.every((var_def) => !var_def.value);
    }

    function sequencesize(statements, compressor) {
        if (statements.length < 2)
            return;
        var seq = [], n = 0;
        function push_seq() {
            if (!seq.length)
                return;
            var body = make_sequence(seq[0], seq);
            statements[n++] = make_node(AST_SimpleStatement, body, { body: body });
            seq = [];
        }
        for (var i = 0, len = statements.length; i < len; i++) {
            var stat = statements[i];
            if (stat instanceof AST_SimpleStatement) {
                if (seq.length >= compressor.sequences_limit)
                    push_seq();
                var body = stat.body;
                if (seq.length > 0)
                    body = body.drop_side_effect_free(compressor);
                if (body)
                    merge_sequence(seq, body);
            } else if (stat instanceof AST_Definitions && declarations_only(stat)
                || stat instanceof AST_Defun) {
                statements[n++] = stat;
            } else {
                push_seq();
                statements[n++] = stat;
            }
        }
        push_seq();
        statements.length = n;
        if (n != len)
            CHANGED = true;
    }

    function to_simple_statement(block, decls) {
        if (!(block instanceof AST_BlockStatement))
            return block;
        var stat = null;
        for (var i = 0, len = block.body.length; i < len; i++) {
            var line = block.body[i];
            if (line instanceof AST_Var && declarations_only(line)) {
                decls.push(line);
            } else if (stat || line instanceof AST_DefinitionsLike && !(line instanceof AST_Var)) {
                return false;
            } else {
                stat = line;
            }
        }
        return stat;
    }

    function sequencesize_2(statements, compressor) {
        function cons_seq(right) {
            n--;
            CHANGED = true;
            var left = prev.body;
            return make_sequence(left, [left, right]).transform(compressor);
        }
        var n = 0, prev;
        for (var i = 0; i < statements.length; i++) {
            var stat = statements[i];
            if (prev) {
                if (stat instanceof AST_Exit) {
                    stat.value = cons_seq(stat.value || make_void_0(stat).transform(compressor));
                } else if (stat instanceof AST_For) {
                    if (!(stat.init instanceof AST_DefinitionsLike)) {
                        const abort = walk(prev.body, node => {
                            if (node instanceof AST_Scope)
                                return true;
                            if (node instanceof AST_Binary
                                && node.operator === "in") {
                                return walk_abort;
                            }
                        });
                        if (!abort) {
                            if (stat.init)
                                stat.init = cons_seq(stat.init);
                            else {
                                stat.init = prev.body;
                                n--;
                                CHANGED = true;
                            }
                        }
                    }
                } else if (stat instanceof AST_ForIn) {
                    if (!(stat.init instanceof AST_DefinitionsLike) || stat.init instanceof AST_Var) {
                        stat.object = cons_seq(stat.object);
                    }
                } else if (stat instanceof AST_If) {
                    stat.condition = cons_seq(stat.condition);
                } else if (stat instanceof AST_Switch) {
                    stat.expression = cons_seq(stat.expression);
                } else if (stat instanceof AST_With) {
                    stat.expression = cons_seq(stat.expression);
                }
            }
            if (compressor.option("conditionals") && stat instanceof AST_If) {
                var decls = [];
                var body = to_simple_statement(stat.body, decls);
                var alt = to_simple_statement(stat.alternative, decls);
                if (body !== false && alt !== false && decls.length > 0) {
                    var len = decls.length;
                    decls.push(make_node(AST_If, stat, {
                        condition: stat.condition,
                        body: body || make_node(AST_EmptyStatement, stat.body),
                        alternative: alt
                    }));
                    decls.unshift(n, 1);
                    [].splice.apply(statements, decls);
                    i += len;
                    n += len + 1;
                    prev = null;
                    CHANGED = true;
                    continue;
                }
            }
            statements[n++] = stat;
            prev = stat instanceof AST_SimpleStatement ? stat : null;
        }
        statements.length = n;
    }

    function join_object_assignments(defn, body) {
        if (!(defn instanceof AST_Definitions))
            return;
        var def = defn.definitions[defn.definitions.length - 1];
        if (!(def.value instanceof AST_Object))
            return;
        var exprs;
        if (body instanceof AST_Assign && !body.logical) {
            exprs = [body];
        } else if (body instanceof AST_Sequence) {
            exprs = body.expressions.slice();
        }
        if (!exprs)
            return;
        var trimmed = false;
        do {
            var node = exprs[0];
            if (!(node instanceof AST_Assign))
                break;
            if (node.operator != "=")
                break;
            if (!(node.left instanceof AST_PropAccess))
                break;
            var sym = node.left.expression;
            if (!(sym instanceof AST_SymbolRef))
                break;
            if (def.name.name != sym.name)
                break;
            if (!node.right.is_constant_expression(nearest_scope))
                break;
            var prop = node.left.property;
            if (prop instanceof AST_Node) {
                prop = prop.evaluate(compressor);
            }
            if (prop instanceof AST_Node)
                break;
            prop = "" + prop;
            var diff = compressor.option("ecma") < 2015
                && compressor.has_directive("use strict") ? function (node) {
                    return node.key != prop && (node.key && node.key.name != prop);
                } : function (node) {
                    return node.key && node.key.name != prop;
                };
            if (!def.value.properties.every(diff))
                break;
            var p = def.value.properties.filter(function (p) { return p.key === prop; })[0];
            if (!p) {
                def.value.properties.push(make_node(AST_ObjectKeyVal, node, {
                    key: prop,
                    value: node.right
                }));
            } else {
                p.value = new AST_Sequence({
                    start: p.start,
                    expressions: [p.value.clone(), node.right.clone()],
                    end: p.end
                });
            }
            exprs.shift();
            trimmed = true;
        } while (exprs.length);
        return trimmed && exprs;
    }

    function join_consecutive_vars(statements) {
        var defs;
        for (var i = 0, j = -1, len = statements.length; i < len; i++) {
            var stat = statements[i];
            var prev = statements[j];
            if (stat instanceof AST_Definitions) {
                if (prev && prev.TYPE == stat.TYPE) {
                    prev.definitions = prev.definitions.concat(stat.definitions);
                    CHANGED = true;
                } else if (defs && defs.TYPE == stat.TYPE && declarations_only(stat)) {
                    defs.definitions = defs.definitions.concat(stat.definitions);
                    CHANGED = true;
                } else {
                    statements[++j] = stat;
                    defs = stat;
                }
            } else if (
                stat instanceof AST_Using
                && prev instanceof AST_Using
                && prev.await === stat.await
            ) {
                prev.definitions = prev.definitions.concat(stat.definitions);
            } else if (stat instanceof AST_Exit) {
                stat.value = extract_object_assignments(stat.value);
            } else if (stat instanceof AST_For) {
                var exprs = join_object_assignments(prev, stat.init);
                if (exprs) {
                    CHANGED = true;
                    stat.init = exprs.length ? make_sequence(stat.init, exprs) : null;
                    statements[++j] = stat;
                } else if (
                    prev instanceof AST_Var
                    && (!stat.init || stat.init.TYPE == prev.TYPE)
                ) {
                    if (stat.init) {
                        prev.definitions = prev.definitions.concat(stat.init.definitions);
                    }
                    stat.init = prev;
                    statements[j] = stat;
                    CHANGED = true;
                } else if (
                    defs instanceof AST_Var
                    && stat.init instanceof AST_Var
                    && declarations_only(stat.init)
                ) {
                    defs.definitions = defs.definitions.concat(stat.init.definitions);
                    stat.init = null;
                    statements[++j] = stat;
                    CHANGED = true;
                } else {
                    statements[++j] = stat;
                }
            } else if (stat instanceof AST_ForIn) {
                stat.object = extract_object_assignments(stat.object);
            } else if (stat instanceof AST_If) {
                stat.condition = extract_object_assignments(stat.condition);
            } else if (stat instanceof AST_SimpleStatement) {
                var exprs = join_object_assignments(prev, stat.body);
                if (exprs) {
                    CHANGED = true;
                    if (!exprs.length)
                        continue;
                    stat.body = make_sequence(stat.body, exprs);
                }
                statements[++j] = stat;
            } else if (stat instanceof AST_Switch) {
                stat.expression = extract_object_assignments(stat.expression);
            } else if (stat instanceof AST_With) {
                stat.expression = extract_object_assignments(stat.expression);
            } else {
                statements[++j] = stat;
            }
        }
        statements.length = j + 1;

        function extract_object_assignments(value) {
            statements[++j] = stat;
            var exprs = join_object_assignments(prev, value);
            if (exprs) {
                CHANGED = true;
                if (exprs.length) {
                    return make_sequence(value, exprs);
                } else if (value instanceof AST_Sequence) {
                    return value.tail_node().left;
                } else {
                    return value.left;
                }
            }
            return value;
        }
    }
}
