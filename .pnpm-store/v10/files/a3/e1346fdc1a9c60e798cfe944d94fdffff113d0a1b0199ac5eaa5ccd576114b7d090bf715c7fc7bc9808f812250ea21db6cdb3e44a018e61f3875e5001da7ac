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
    AST_Accessor,
    AST_Array,
    AST_Assign,
    AST_Await,
    AST_Binary,
    AST_Block,
    AST_Call,
    AST_Case,
    AST_Chain,
    AST_Class,
    AST_ClassStaticBlock,
    AST_ClassExpression,
    AST_Conditional,
    AST_Default,
    AST_Defun,
    AST_Destructuring,
    AST_Do,
    AST_Exit,
    AST_Expansion,
    AST_For,
    AST_ForIn,
    AST_If,
    AST_LabeledStatement,
    AST_Lambda,
    AST_New,
    AST_Node,
    AST_Number,
    AST_ObjectKeyVal,
    AST_PropAccess,
    AST_Scope,
    AST_Sequence,
    AST_SimpleStatement,
    AST_Symbol,
    AST_SymbolCatch,
    AST_SymbolConst,
    AST_SymbolDeclaration,
    AST_SymbolDefun,
    AST_SymbolFunarg,
    AST_SymbolLambda,
    AST_SymbolRef,
    AST_This,
    AST_Toplevel,
    AST_Try,
    AST_Unary,
    AST_UnaryPrefix,
    AST_UsingDef,
    AST_VarDef,
    AST_VarDefLike,
    AST_While,
    AST_Yield,

    walk,
    walk_body,
    walk_parent,
} from "../ast.js";
import { HOP, make_node, make_void_0, noop } from "../utils/index.js";

import { lazy_op, is_modified, is_lhs } from "./inference.js";
import { INLINED, clear_flag } from "./compressor-flags.js";
import { read_property, has_break_or_continue, is_recursive_ref } from "./common.js";

/**
 * Define the method AST_Node#reduce_vars, which goes through the AST in
 * execution order to perform basic flow analysis
 */
function def_reduce_vars(node, func) {
    node.DEFMETHOD("reduce_vars", func);
}

def_reduce_vars(AST_Node, noop);

/** Clear definition properties */
function reset_def(compressor, def) {
    def.assignments = 0;
    def.chained = false;
    def.direct_access = false;
    def.escaped = 0;
    def.recursive_refs = 0;
    def.references = [];
    def.single_use = undefined;
    if (
        def.scope.pinned()
        || (def.orig[0] instanceof AST_SymbolFunarg && def.scope.uses_arguments)
    ) {
        def.fixed = false;
    } else if (def.orig[0] instanceof AST_SymbolConst || !compressor.exposed(def)) {
        def.fixed = def.init;
    } else {
        def.fixed = false;
    }
}

function reset_variables(tw, compressor, node) {
    node.variables.forEach(function(def) {
        reset_def(compressor, def);
        if (def.fixed === null) {
            tw.defs_to_safe_ids.set(def.id, tw.safe_ids);
            mark(tw, def, true);
        } else if (def.fixed) {
            tw.loop_ids.set(def.id, tw.in_loop);
            mark(tw, def, true);
        }
    });
}

function reset_block_variables(compressor, node) {
    if (node.block_scope) node.block_scope.variables.forEach((def) => {
        reset_def(compressor, def);
    });
}

function push(tw) {
    tw.safe_ids = Object.create(tw.safe_ids);
}

function pop(tw) {
    tw.safe_ids = Object.getPrototypeOf(tw.safe_ids);
}

function mark(tw, def, safe) {
    tw.safe_ids[def.id] = safe;
}

function safe_to_read(tw, def) {
    if (def.single_use == "m") return false;
    if (tw.safe_ids[def.id]) {
        if (def.fixed == null) {
            var orig = def.orig[0];
            if (orig instanceof AST_SymbolFunarg || orig.name == "arguments") return false;
            def.fixed = make_void_0(orig);
        }
        return true;
    }
    return def.fixed instanceof AST_Defun;
}

function safe_to_assign(tw, def, scope, value) {
    if (def.fixed === undefined) return true;
    let def_safe_ids;
    if (def.fixed === null
        && (def_safe_ids = tw.defs_to_safe_ids.get(def.id))
    ) {
        def_safe_ids[def.id] = false;
        tw.defs_to_safe_ids.delete(def.id);
        return true;
    }
    if (!HOP(tw.safe_ids, def.id)) return false;
    if (!safe_to_read(tw, def)) return false;
    if (def.fixed === false) return false;
    if (def.fixed != null && (!value || def.references.length > def.assignments)) return false;
    if (def.fixed instanceof AST_Defun) {
        return value instanceof AST_Node && def.fixed.parent_scope === scope;
    }
    return def.orig.every((sym) => {
        return !(sym instanceof AST_SymbolConst
            || sym instanceof AST_SymbolDefun
            || sym instanceof AST_SymbolLambda);
    });
}

function ref_once(tw, compressor, def) {
    return compressor.option("unused")
        && !def.scope.pinned()
        && def.references.length - def.recursive_refs == 1
        && tw.loop_ids.get(def.id) === tw.in_loop;
}

function is_immutable(value) {
    if (!value) return false;
    return value.is_constant()
        || value instanceof AST_Lambda
        || value instanceof AST_This;
}

// A definition "escapes" when its value can leave the point of use.
// Example: `a = b || c`
// In this example, "b" and "c" are escaping, because they're going into "a"
//
// def.escaped is != 0 when it escapes.
//
// When greater than 1, it means that N chained properties will be read off
// of that def before an escape occurs. This is useful for evaluating
// property accesses, where you need to know when to stop.
function mark_escaped(tw, d, scope, node, value, level = 0, depth = 1) {
    var parent = tw.parent(level);
    if (value) {
        if (value.is_constant()) return;
        if (value instanceof AST_ClassExpression) return;
    }

    if (
        parent instanceof AST_Assign && (parent.operator === "=" || parent.logical) && node === parent.right
        || parent instanceof AST_Call && (node !== parent.expression || parent instanceof AST_New)
        || parent instanceof AST_Exit && node === parent.value && node.scope !== d.scope
        || parent instanceof AST_VarDefLike && node === parent.value
        || parent instanceof AST_Yield && node === parent.value && node.scope !== d.scope
    ) {
        if (depth > 1 && !(value && value.is_constant_expression(scope))) depth = 1;
        if (!d.escaped || d.escaped > depth) d.escaped = depth;
        return;
    } else if (
        parent instanceof AST_Array
        || parent instanceof AST_Await
        || parent instanceof AST_Binary && lazy_op.has(parent.operator)
        || parent instanceof AST_Conditional && node !== parent.condition
        || parent instanceof AST_Expansion
        || parent instanceof AST_Sequence && node === parent.tail_node()
    ) {
        mark_escaped(tw, d, scope, parent, parent, level + 1, depth);
    } else if (parent instanceof AST_ObjectKeyVal && node === parent.value) {
        var obj = tw.parent(level + 1);

        mark_escaped(tw, d, scope, obj, obj, level + 2, depth);
    } else if (parent instanceof AST_PropAccess && node === parent.expression) {
        value = read_property(value, parent.property);

        mark_escaped(tw, d, scope, parent, value, level + 1, depth + 1);
        if (value) return;
    }

    if (level > 0) return;
    if (parent instanceof AST_Sequence && node !== parent.tail_node()) return;
    if (parent instanceof AST_SimpleStatement) return;

    d.direct_access = true;
}

const suppress = node => walk(node, node => {
    if (!(node instanceof AST_Symbol)) return;
    var d = node.definition();
    if (!d) return;
    if (node instanceof AST_SymbolRef) d.references.push(node);
    d.fixed = false;
});

def_reduce_vars(AST_Accessor, function(tw, descend, compressor) {
    push(tw);
    reset_variables(tw, compressor, this);
    descend();
    pop(tw);
    return true;
});

def_reduce_vars(AST_Assign, function(tw, descend, compressor) {
    var node = this;
    if (node.left instanceof AST_Destructuring) {
        suppress(node.left);
        return;
    }

    const finish_walk = () => {
        if (node.logical) {
            node.left.walk(tw);

            push(tw);
            node.right.walk(tw);
            pop(tw);

            return true;
        }
    };

    var sym = node.left;
    if (!(sym instanceof AST_SymbolRef)) return finish_walk();

    var def = sym.definition();
    var safe = safe_to_assign(tw, def, sym.scope, node.right);
    def.assignments++;
    if (!safe) return finish_walk();

    var fixed = def.fixed;
    if (!fixed && node.operator != "=" && !node.logical) return finish_walk();

    var eq = node.operator == "=";
    var value = eq ? node.right : node;
    if (is_modified(compressor, tw, node, value, 0)) return finish_walk();

    def.references.push(sym);

    if (!node.logical) {
        if (!eq) def.chained = true;

        def.fixed = eq ? function() {
            return node.right;
        } : function() {
            return make_node(AST_Binary, node, {
                operator: node.operator.slice(0, -1),
                left: fixed instanceof AST_Node ? fixed : fixed(),
                right: node.right
            });
        };
    }

    if (node.logical) {
        mark(tw, def, false);
        push(tw);
        node.right.walk(tw);
        pop(tw);
        return true;
    }

    mark(tw, def, false);
    node.right.walk(tw);
    mark(tw, def, true);

    mark_escaped(tw, def, sym.scope, node, value, 0, 1);

    return true;
});

def_reduce_vars(AST_Binary, function(tw) {
    if (!lazy_op.has(this.operator)) return;
    this.left.walk(tw);
    push(tw);
    this.right.walk(tw);
    pop(tw);
    return true;
});

def_reduce_vars(AST_Block, function(tw, descend, compressor) {
    reset_block_variables(compressor, this);
});

def_reduce_vars(AST_Case, function(tw) {
    push(tw);
    this.expression.walk(tw);
    pop(tw);
    push(tw);
    walk_body(this, tw);
    pop(tw);
    return true;
});

def_reduce_vars(AST_Class, function(tw, descend) {
    clear_flag(this, INLINED);
    push(tw);
    descend();
    pop(tw);
    return true;
});

def_reduce_vars(AST_ClassStaticBlock, function(tw, descend, compressor) {
    reset_block_variables(compressor, this);
});

def_reduce_vars(AST_Conditional, function(tw) {
    this.condition.walk(tw);
    push(tw);
    this.consequent.walk(tw);
    pop(tw);
    push(tw);
    this.alternative.walk(tw);
    pop(tw);
    return true;
});

def_reduce_vars(AST_Chain, function(tw, descend) {
    // Chains' conditions apply left-to-right, cumulatively.
    // If we walk normally we don't go in that order because we would pop before pushing again
    // Solution: AST_PropAccess and AST_Call push when they are optional, and never pop.
    // Then we pop everything when they are done being walked.
    const safe_ids = tw.safe_ids;

    descend();

    // Unroll back to start
    tw.safe_ids = safe_ids;
    return true;
});

def_reduce_vars(AST_Call, function (tw) {
    this.expression.walk(tw);

    if (this.optional) {
        // Never pop -- it's popped at AST_Chain above
        push(tw);
    }

    for (const arg of this.args) arg.walk(tw);

    return true;
});

def_reduce_vars(AST_PropAccess, function (tw) {
    if (!this.optional) return;

    this.expression.walk(tw);

    // Never pop -- it's popped at AST_Chain above
    push(tw);

    if (this.property instanceof AST_Node) this.property.walk(tw);

    return true;
});

def_reduce_vars(AST_Default, function(tw, descend) {
    push(tw);
    descend();
    pop(tw);
    return true;
});

function mark_lambda(tw, descend, compressor) {
    clear_flag(this, INLINED);
    push(tw);
    reset_variables(tw, compressor, this);

    var iife;
    if (!this.name
        && !this.uses_arguments
        && !this.pinned()
        && (iife = tw.parent()) instanceof AST_Call
        && iife.expression === this
        && !iife.args.some(arg => arg instanceof AST_Expansion)
        && this.argnames.every(arg_name => arg_name instanceof AST_Symbol)
    ) {
        // Virtually turn IIFE parameters into variable definitions:
        //   (function(a,b) {...})(c,d) => (function() {var a=c,b=d; ...})()
        // So existing transformation rules can work on them.
        this.argnames.forEach((arg, i) => {
            if (!arg.definition) return;
            var d = arg.definition();
            // Avoid setting fixed when there's more than one origin for a variable value
            if (d.orig.length > 1) return;
            if (d.fixed === undefined && (!this.uses_arguments || tw.has_directive("use strict"))) {
                d.fixed = function() {
                    return iife.args[i] || make_void_0(iife);
                };
                tw.loop_ids.set(d.id, tw.in_loop);
                mark(tw, d, true);
            } else {
                d.fixed = false;
            }
        });
    }

    descend();
    pop(tw);

    handle_defined_after_hoist(this);

    return true;
}

/**
 * It's possible for a hoisted function to use something that's not defined yet. Example:
 *
 * hoisted();
 * var defined_after = true;
 * function hoisted() {
 *   // use defined_after
 * }
 *
 * Or even indirectly:
 *
 * B();
 * var defined_after = true;
 * function A() {
 *   // use defined_after
 * }
 * function B() {
 *   A();
 * }
 *
 * Access a variable before declaration will either throw a ReferenceError
 * (if the variable is declared with `let` or `const`),
 * or get an `undefined` (if the variable is declared with `var`).
 *
 * If the variable is inlined into the function, the behavior will change.
 *
 * This function is called on the parent to disallow inlining of such variables,
 */
function handle_defined_after_hoist(parent) {
    const defuns = [];
    walk(parent, node => {
        if (node === parent) return;
        if (node instanceof AST_Defun) {
            defuns.push(node);
            return true;
        }
        if (
            node instanceof AST_Scope
            || node instanceof AST_SimpleStatement
        ) return true;
    });

    // `defun` id to array of `defun` it uses
    const defun_dependencies_map = new Map();
    // `defun` id to array of enclosing `def` that are used by the function
    const dependencies_map = new Map();
    // all symbol ids that will be tracked for read/write
    const symbols_of_interest = new Set();
    const defuns_of_interest = new Set();

    for (const defun of defuns) {
        const fname_def = defun.name.definition();
        const enclosing_defs = [];

        for (const def of defun.enclosed) {
            if (
                def.fixed === false
                || def === fname_def
                || def.scope.get_defun_scope() !== parent
            ) {
                continue;
            }

            symbols_of_interest.add(def.id);

            // found a reference to another function
            if (
                def.assignments === 0
                && def.orig.length === 1
                && def.orig[0] instanceof AST_SymbolDefun
            ) {
                defuns_of_interest.add(def.id);
                symbols_of_interest.add(def.id);

                defuns_of_interest.add(fname_def.id);
                symbols_of_interest.add(fname_def.id);

                if (!defun_dependencies_map.has(fname_def.id)) {
                    defun_dependencies_map.set(fname_def.id, []);
                }
                defun_dependencies_map.get(fname_def.id).push(def.id);

                continue;
            }

            enclosing_defs.push(def);
        }

        if (enclosing_defs.length) {
            dependencies_map.set(fname_def.id, enclosing_defs);
            defuns_of_interest.add(fname_def.id);
            symbols_of_interest.add(fname_def.id);
        }
    }

    // No defuns use outside constants
    if (!dependencies_map.size) {
        return;
    }

    // Increment to count "symbols of interest" (defuns or defs) that we found.
    // These are tracked in AST order so we can check which is after which.
    let symbol_index = 1;
    // Map a defun ID to its first read (a `symbol_index`)
    const defun_first_read_map = new Map();
    // Map a symbol ID to its last write (a `symbol_index`)
    const symbol_last_write_map = new Map();

    walk_parent(parent, (node, walk_info) => {
        if (node instanceof AST_Symbol && node.thedef) {
            const id = node.definition().id;

            symbol_index++;

            // Track last-writes to symbols
            if (symbols_of_interest.has(id)) {
                if (node instanceof AST_SymbolDeclaration || is_lhs(node, walk_info.parent())) {
                    symbol_last_write_map.set(id, symbol_index);
                }
            }

            // Track first-reads of defuns (refined later)
            if (defuns_of_interest.has(id)) {
                if (!defun_first_read_map.has(id) && !is_recursive_ref(walk_info, id)) {
                    defun_first_read_map.set(id, symbol_index);
                }
            }
        }
    });

    // Refine `defun_first_read_map` to be as high as possible
    for (const [defun, defun_first_read] of defun_first_read_map) {
        // Update all dependencies of `defun`
        const queue = new Set(defun_dependencies_map.get(defun));
        for (const enclosed_defun of queue) {
            let enclosed_defun_first_read = defun_first_read_map.get(enclosed_defun);
            if (enclosed_defun_first_read != null && enclosed_defun_first_read < defun_first_read) {
                continue;
            }

            defun_first_read_map.set(enclosed_defun, defun_first_read);

            for (const enclosed_enclosed_defun of defun_dependencies_map.get(enclosed_defun) || []) {
                queue.add(enclosed_enclosed_defun);
            }
        }
    }

    // ensure write-then-read order, otherwise clear `fixed`
    // This is safe because last-writes (found_symbol_writes) are assumed to be as late as possible, and first-reads (defun_first_read_map) are assumed to be as early as possible.
    for (const [defun, defs] of dependencies_map) {
        const defun_first_read = defun_first_read_map.get(defun);
        if (defun_first_read === undefined) {
            continue;
        }

        for (const def of defs) {
            if (def.fixed === false) {
                continue;
            }

            let def_last_write = symbol_last_write_map.get(def.id) || 0;

            if (defun_first_read < def_last_write) {
                def.fixed = false;
            }
        }
    }
}

def_reduce_vars(AST_Lambda, mark_lambda);

def_reduce_vars(AST_Do, function(tw, descend, compressor) {
    reset_block_variables(compressor, this);
    const saved_loop = tw.in_loop;
    tw.in_loop = this;
    push(tw);
    this.body.walk(tw);
    if (has_break_or_continue(this)) {
        pop(tw);
        push(tw);
    }
    this.condition.walk(tw);
    pop(tw);
    tw.in_loop = saved_loop;
    return true;
});

def_reduce_vars(AST_For, function(tw, descend, compressor) {
    reset_block_variables(compressor, this);
    if (this.init) this.init.walk(tw);
    const saved_loop = tw.in_loop;
    tw.in_loop = this;
    push(tw);
    if (this.condition) this.condition.walk(tw);
    this.body.walk(tw);
    if (this.step) {
        if (has_break_or_continue(this)) {
            pop(tw);
            push(tw);
        }
        this.step.walk(tw);
    }
    pop(tw);
    tw.in_loop = saved_loop;
    return true;
});

def_reduce_vars(AST_ForIn, function(tw, descend, compressor) {
    reset_block_variables(compressor, this);
    suppress(this.init);
    this.object.walk(tw);
    const saved_loop = tw.in_loop;
    tw.in_loop = this;
    push(tw);
    this.body.walk(tw);
    pop(tw);
    tw.in_loop = saved_loop;
    return true;
});

def_reduce_vars(AST_If, function(tw) {
    this.condition.walk(tw);
    push(tw);
    this.body.walk(tw);
    pop(tw);
    if (this.alternative) {
        push(tw);
        this.alternative.walk(tw);
        pop(tw);
    }
    return true;
});

def_reduce_vars(AST_LabeledStatement, function(tw) {
    push(tw);
    this.body.walk(tw);
    pop(tw);
    return true;
});

def_reduce_vars(AST_SymbolCatch, function() {
    this.definition().fixed = false;
});

def_reduce_vars(AST_SymbolRef, function(tw, descend, compressor) {
    var d = this.definition();
    d.references.push(this);
    if (d.references.length == 1
        && !d.fixed
        && d.orig[0] instanceof AST_SymbolDefun) {
        tw.loop_ids.set(d.id, tw.in_loop);
    }
    var fixed_value;
    if (d.fixed === undefined || !safe_to_read(tw, d)) {
        d.fixed = false;
    } else if (d.fixed) {
        fixed_value = this.fixed_value();
        if (
            fixed_value instanceof AST_Lambda
            && is_recursive_ref(tw, d)
        ) {
            d.recursive_refs++;
        } else if (fixed_value
            && !compressor.exposed(d)
            && ref_once(tw, compressor, d)
        ) {
            d.single_use =
                fixed_value instanceof AST_Lambda && !fixed_value.pinned()
                || fixed_value instanceof AST_Class
                || d.scope === this.scope && fixed_value.is_constant_expression();
        } else {
            d.single_use = false;
        }
        if (is_modified(compressor, tw, this, fixed_value, 0, is_immutable(fixed_value))) {
            if (d.single_use) {
                d.single_use = "m";
            } else {
                d.fixed = false;
            }
        }
    }
    mark_escaped(tw, d, this.scope, this, fixed_value, 0, 1);
});

def_reduce_vars(AST_Toplevel, function(tw, descend, compressor) {
    this.globals.forEach(function(def) {
        reset_def(compressor, def);
    });
    reset_variables(tw, compressor, this);
    descend();
    handle_defined_after_hoist(this);
    return true;
});

def_reduce_vars(AST_Try, function(tw, descend, compressor) {
    reset_block_variables(compressor, this);
    push(tw);
    this.body.walk(tw);
    pop(tw);
    if (this.bcatch) {
        push(tw);
        this.bcatch.walk(tw);
        pop(tw);
    }
    if (this.bfinally) this.bfinally.walk(tw);
    return true;
});

def_reduce_vars(AST_Unary, function(tw) {
    var node = this;
    if (node.operator !== "++" && node.operator !== "--") return;
    var exp = node.expression;
    if (!(exp instanceof AST_SymbolRef)) return;
    var def = exp.definition();
    var safe = safe_to_assign(tw, def, exp.scope, true);
    def.assignments++;
    if (!safe) return;
    var fixed = def.fixed;
    if (!fixed) return;
    def.references.push(exp);
    def.chained = true;
    def.fixed = function() {
        return make_node(AST_Binary, node, {
            operator: node.operator.slice(0, -1),
            left: make_node(AST_UnaryPrefix, node, {
                operator: "+",
                expression: fixed instanceof AST_Node ? fixed : fixed()
            }),
            right: make_node(AST_Number, node, {
                value: 1
            })
        });
    };
    mark(tw, def, true);
    return true;
});

def_reduce_vars(AST_VarDef, function(tw, descend) {
    var node = this;
    if (node.name instanceof AST_Destructuring) {
        suppress(node.name);
        return;
    }
    var d = node.name.definition();
    if (node.value) {
        if (safe_to_assign(tw, d, node.name.scope, node.value)) {
            d.fixed = function() {
                return node.value;
            };
            tw.loop_ids.set(d.id, tw.in_loop);
            mark(tw, d, false);
            descend();
            mark(tw, d, true);
            return true;
        } else {
            d.fixed = false;
        }
    }
});

def_reduce_vars(AST_UsingDef, function() {
    suppress(this.name);
});

def_reduce_vars(AST_While, function(tw, descend, compressor) {
    reset_block_variables(compressor, this);
    const saved_loop = tw.in_loop;
    tw.in_loop = this;
    push(tw);
    descend();
    pop(tw);
    tw.in_loop = saved_loop;
    return true;
});
