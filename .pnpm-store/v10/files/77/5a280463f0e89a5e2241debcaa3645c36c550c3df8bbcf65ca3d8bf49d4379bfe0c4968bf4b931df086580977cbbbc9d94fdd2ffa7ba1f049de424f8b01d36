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
    AST_Arrow,
    AST_Assign,
    AST_BigInt,
    AST_Binary,
    AST_Block,
    AST_BlockStatement,
    AST_Boolean,
    AST_Break,
    AST_Call,
    AST_Catch,
    AST_Chain,
    AST_Class,
    AST_ClassProperty,
    AST_ClassStaticBlock,
    AST_ConciseMethod,
    AST_Conditional,
    AST_Const,
    AST_Constant,
    AST_Debugger,
    AST_Default,
    AST_DefaultAssign,
    AST_Definitions,
    AST_Defun,
    AST_Destructuring,
    AST_Directive,
    AST_Do,
    AST_Dot,
    AST_DotHash,
    AST_DWLoop,
    AST_EmptyStatement,
    AST_Exit,
    AST_Expansion,
    AST_Export,
    AST_False,
    AST_For,
    AST_ForIn,
    AST_Function,
    AST_Hole,
    AST_If,
    AST_Import,
    AST_Infinity,
    AST_LabeledStatement,
    AST_Lambda,
    AST_Let,
    AST_NaN,
    AST_New,
    AST_Node,
    AST_Null,
    AST_Number,
    AST_Object,
    AST_ObjectKeyVal,
    AST_ObjectProperty,
    AST_PrefixedTemplateString,
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
    AST_Symbol,
    AST_SymbolClassProperty,
    AST_SymbolDeclaration,
    AST_SymbolDefun,
    AST_SymbolExport,
    AST_SymbolFunarg,
    AST_SymbolLambda,
    AST_SymbolLet,
    AST_SymbolMethod,
    AST_SymbolRef,
    AST_SymbolUsing,
    AST_TemplateString,
    AST_This,
    AST_Toplevel,
    AST_True,
    AST_Try,
    AST_Unary,
    AST_UnaryPostfix,
    AST_UnaryPrefix,
    AST_Undefined,
    AST_Using,
    AST_Var,
    AST_VarDef,
    AST_While,
    AST_With,
    AST_Yield,

    TreeTransformer,
    TreeWalker,
    walk,
    walk_abort,

    _NOINLINE,
} from "../ast.js";
import {
    defaults,
    HOP,
    make_node,
    make_void_0,
    makePredicate,
    MAP,
    remove,
    return_false,
    return_true,
    regexp_source_fix,
    has_annotation,
    regexp_is_safe,
} from "../utils/index.js";
import { first_in_statement } from "../utils/first_in_statement.js";
import { equivalent_to } from "../equivalent-to.js";
import {
    is_basic_identifier_string,
    JS_Parse_Error,
    parse,
    PRECEDENCE,
} from "../parse.js";
import { OutputStream } from "../output.js";
import { base54, format_mangler_options } from "../scope.js";
import "../size.js";

import "./evaluate.js";
import "./drop-side-effect-free.js";
import "./drop-unused.js";
import "./reduce-vars.js";
import {
    is_undeclared_ref,
    bitwise_binop,
    lazy_op,
    is_nullish,
    is_undefined,
    is_lhs,
    aborts,
    is_used_in_expression,
} from "./inference.js";
import {
    SQUEEZED,
    OPTIMIZED,
    CLEAR_BETWEEN_PASSES,
    TOP,
    UNDEFINED,
    UNUSED,
    TRUTHY,
    FALSY,
    has_flag,
    set_flag,
    clear_flag,
} from "./compressor-flags.js";
import {
    make_sequence,
    best_of,
    best_of_expression,
    make_empty_function,
    make_node_from_constant,
    merge_sequence,
    get_simple_key,
    has_break_or_continue,
    maintain_this_binding,
    is_empty,
    is_identifier_atom,
    is_reachable,
    can_be_evicted_from_block,
    as_statement_array,
    is_func_expr,
} from "./common.js";
import { tighten_body, extract_from_unreachable_code } from "./tighten-body.js";
import { inline_into_symbolref, inline_into_call } from "./inline.js";
import "./global-defs.js";

class Compressor extends TreeWalker {
    constructor(options, { false_by_default = false, mangle_options = false }) {
        super();
        if (options.defaults !== undefined && !options.defaults) false_by_default = true;
        this.options = defaults(options, {
            arguments     : false,
            arrows        : !false_by_default,
            booleans      : !false_by_default,
            booleans_as_integers : false,
            collapse_vars : !false_by_default,
            comparisons   : !false_by_default,
            computed_props: !false_by_default,
            conditionals  : !false_by_default,
            dead_code     : !false_by_default,
            defaults      : true,
            directives    : !false_by_default,
            drop_console  : false,
            drop_debugger : !false_by_default,
            ecma          : 5,
            evaluate      : !false_by_default,
            expression    : false,
            global_defs   : false,
            hoist_funs    : false,
            hoist_props   : !false_by_default,
            hoist_vars    : false,
            ie8           : false,
            if_return     : !false_by_default,
            inline        : !false_by_default,
            join_vars     : !false_by_default,
            keep_classnames: false,
            keep_fargs    : true,
            keep_fnames   : false,
            keep_infinity : false,
            lhs_constants : !false_by_default,
            loops         : !false_by_default,
            module        : false,
            negate_iife   : !false_by_default,
            passes        : 1,
            properties    : !false_by_default,
            pure_getters  : !false_by_default && "strict",
            pure_funcs    : null,
            pure_new      : false,
            reduce_funcs  : !false_by_default,
            reduce_vars   : !false_by_default,
            sequences     : !false_by_default,
            side_effects  : !false_by_default,
            switches      : !false_by_default,
            top_retain    : null,
            toplevel      : !!(options && options["top_retain"]),
            typeofs       : !false_by_default,
            unsafe        : false,
            unsafe_arrows : false,
            unsafe_comps  : false,
            unsafe_Function: false,
            unsafe_math   : false,
            unsafe_symbols: false,
            unsafe_methods: false,
            unsafe_proto  : false,
            unsafe_regexp : false,
            unsafe_undefined: false,
            unused        : !false_by_default,
            warnings      : false  // legacy
        }, true);
        var global_defs = this.options["global_defs"];
        if (typeof global_defs == "object") for (var key in global_defs) {
            if (key[0] === "@" && HOP(global_defs, key)) {
                global_defs[key.slice(1)] = parse(global_defs[key], {
                    expression: true
                });
            }
        }
        if (this.options["inline"] === true) this.options["inline"] = 3;
        var pure_funcs = this.options["pure_funcs"];
        if (typeof pure_funcs == "function") {
            this.pure_funcs = pure_funcs;
        } else {
            this.pure_funcs = pure_funcs ? function(node) {
                return !pure_funcs.includes(node.expression.print_to_string());
            } : return_true;
        }
        var top_retain = this.options["top_retain"];
        if (top_retain instanceof RegExp) {
            this.top_retain = function(def) {
                return top_retain.test(def.name);
            };
        } else if (typeof top_retain == "function") {
            this.top_retain = top_retain;
        } else if (top_retain) {
            if (typeof top_retain == "string") {
                top_retain = top_retain.split(/,/);
            }
            this.top_retain = function(def) {
                return top_retain.includes(def.name);
            };
        }
        if (this.options["module"]) {
            this.directives["use strict"] = true;
            this.options["toplevel"] = true;
        }
        var toplevel = this.options["toplevel"];
        this.toplevel = typeof toplevel == "string" ? {
            funcs: /funcs/.test(toplevel),
            vars: /vars/.test(toplevel)
        } : {
            funcs: toplevel,
            vars: toplevel
        };
        var sequences = this.options["sequences"];
        this.sequences_limit = sequences == 1 ? 800 : sequences | 0;
        this.evaluated_regexps = new Map();
        this._toplevel = undefined;
        this._mangle_options = mangle_options
            ? format_mangler_options(mangle_options)
            : mangle_options;
    }

    mangle_options() {
        var nth_identifier = this._mangle_options && this._mangle_options.nth_identifier || base54;
        var module = this._mangle_options && this._mangle_options.module || this.option("module");
        return { ie8: this.option("ie8"), nth_identifier, module };
    }

    option(key) {
        return this.options[key];
    }

    exposed(def) {
        if (def.export) return true;
        if (def.global) for (var i = 0, len = def.orig.length; i < len; i++)
            if (!this.toplevel[def.orig[i] instanceof AST_SymbolDefun ? "funcs" : "vars"])
                return true;
        return false;
    }

    in_boolean_context() {
        if (!this.option("booleans")) return false;
        var self = this.self();
        for (var i = 0, p; p = this.parent(i); i++) {
            if (p instanceof AST_SimpleStatement
                || p instanceof AST_Conditional && p.condition === self
                || p instanceof AST_DWLoop && p.condition === self
                || p instanceof AST_For && p.condition === self
                || p instanceof AST_If && p.condition === self
                || p instanceof AST_UnaryPrefix && p.operator == "!" && p.expression === self) {
                return true;
            }
            if (
                p instanceof AST_Binary
                    && (
                        p.operator == "&&"
                        || p.operator == "||"
                        || p.operator == "??"
                    )
                || p instanceof AST_Conditional
                || p.tail_node() === self
            ) {
                self = p;
            } else {
                return false;
            }
        }
    }

    /** True if compressor.self()'s result will be turned into a 32-bit integer.
     * ex:
     * ~{expr}
     * (1, 2, {expr}) | 0
     **/
    in_32_bit_context(other_operand_must_be_number) {
        if (!this.option("evaluate")) return false;
        var self = this.self();
        for (var i = 0, p; p = this.parent(i); i++) {
            if (p instanceof AST_Binary && bitwise_binop.has(p.operator)) {
                if (other_operand_must_be_number) {
                    return (self === p.left ? p.right : p.left).is_number(this);
                } else {
                    return true;
                }
            }
            if (p instanceof AST_UnaryPrefix) {
                return p.operator === "~";
            }
            if (
                p instanceof AST_Binary
                    && (
                        // Don't talk about p.left. Can change branch taken
                        p.operator == "&&" && p.right === self
                        || p.operator == "||" && p.right === self
                        || p.operator == "??" && p.right === self
                    )
                || p instanceof AST_Conditional && p.condition !== self
                || p.tail_node() === self
            ) {
                self = p;
            } else {
                return false;
            }
        }
    }

    in_computed_key() {
        if (!this.option("evaluate")) return false;
        var self = this.self();
        for (var i = 0, p; p = this.parent(i); i++) {
            if (p instanceof AST_ObjectProperty && p.key === self) {
                return true;
            }
        }
        return false;
    }

    get_toplevel() {
        return this._toplevel;
    }

    compress(toplevel) {
        toplevel = toplevel.resolve_defines(this);
        this._toplevel = toplevel;
        if (this.option("expression")) {
            this._toplevel.process_expression(true);
        }
        var passes = +this.options.passes || 1;
        var min_count = 1 / 0;
        var stopping = false;
        var mangle = this.mangle_options();
        for (var pass = 0; pass < passes; pass++) {
            this._toplevel.figure_out_scope(mangle);
            if (pass === 0 && this.option("drop_console")) {
                // must be run before reduce_vars and compress pass
                this._toplevel = this._toplevel.drop_console(this.option("drop_console"));
            }
            if (pass > 0 || this.option("reduce_vars")) {
                this._toplevel.reset_opt_flags(this);
            }
            this._toplevel = this._toplevel.transform(this);
            if (passes > 1) {
                let count = 0;
                walk(this._toplevel, () => { count++; });
                if (count < min_count) {
                    min_count = count;
                    stopping = false;
                } else if (stopping) {
                    break;
                } else {
                    stopping = true;
                }
            }
        }
        if (this.option("expression")) {
            this._toplevel.process_expression(false);
        }
        toplevel = this._toplevel;
        this._toplevel = undefined;
        return toplevel;
    }

    before(node, descend) {
        if (has_flag(node, SQUEEZED)) return node;
        var was_scope = false;
        if (node instanceof AST_Scope) {
            node = node.hoist_properties(this);
            node = node.hoist_declarations(this);
            was_scope = true;
        }
        // Before https://github.com/mishoo/UglifyJS2/pull/1602 AST_Node.optimize()
        // would call AST_Node.transform() if a different instance of AST_Node is
        // produced after def_optimize().
        // This corrupts TreeWalker.stack, which cause AST look-ups to malfunction.
        // Migrate and defer all children's AST_Node.transform() to below, which
        // will now happen after this parent AST_Node has been properly substituted
        // thus gives a consistent AST snapshot.
        descend(node, this);
        // Existing code relies on how AST_Node.optimize() worked, and omitting the
        // following replacement call would result in degraded efficiency of both
        // output and performance.
        descend(node, this);
        var opt = node.optimize(this);
        if (was_scope && opt instanceof AST_Scope) {
            opt.drop_unused(this);
            descend(opt, this);
        }
        if (opt === node) set_flag(opt, SQUEEZED);
        return opt;
    }

    /** Alternative to plain is_lhs() which doesn't work within .optimize() */
    is_lhs() {
        const self = this.stack[this.stack.length - 1];
        const parent = this.stack[this.stack.length - 2];
        return is_lhs(self, parent);
    }
}


function def_optimize(node, optimizer) {
    node.DEFMETHOD("optimize", function(compressor) {
        var self = this;
        if (has_flag(self, OPTIMIZED)) return self;
        if (compressor.has_directive("use asm")) return self;
        var opt = optimizer(self, compressor);
        set_flag(opt, OPTIMIZED);
        return opt;
    });
}

def_optimize(AST_Node, function(self) {
    return self;
});

AST_Toplevel.DEFMETHOD("drop_console", function(options) {
    const isArray = Array.isArray(options);
    const tt = new TreeTransformer(function(self) {
        if (self.TYPE !== "Call") {
            return;
        }

        var exp = self.expression;

        if (!(exp instanceof AST_PropAccess)) {
            return;
        }

        var name = exp.expression;
        var property = exp.property;
        var depth = 2;
        while (name.expression) {
            property = name.property;
            name = name.expression;
            depth++;
        }

        if (isArray && !options.includes(property)) {
            return;
        }

        if (is_undeclared_ref(name) && name.name == "console") {
            if (
                depth === 3
                && !["call", "apply"].includes(exp.property)
                && is_used_in_expression(tt)
            ) {
                // a (used) call to Function.prototype methods (eg: console.log.bind(console))
                // but not .call and .apply which would also return undefined.
                exp.expression = make_empty_function(self);
                set_flag(exp.expression, SQUEEZED);
                self.args = [];
            } else {
                return make_void_0(self);
            }
        }
    });

    return this.transform(tt);
});

AST_Node.DEFMETHOD("equivalent_to", function(node) {
    return equivalent_to(this, node);
});

AST_Scope.DEFMETHOD("process_expression", function(insert, compressor) {
    var self = this;
    var tt = new TreeTransformer(function(node) {
        if (insert && node instanceof AST_SimpleStatement) {
            return make_node(AST_Return, node, {
                value: node.body
            });
        }
        if (!insert && node instanceof AST_Return) {
            if (compressor) {
                var value = node.value && node.value.drop_side_effect_free(compressor, true);
                return value
                    ? make_node(AST_SimpleStatement, node, { body: value })
                    : make_node(AST_EmptyStatement, node);
            }
            return make_node(AST_SimpleStatement, node, {
                body: node.value || make_void_0(node)
            });
        }
        if (node instanceof AST_Class || node instanceof AST_Lambda && node !== self) {
            return node;
        }
        if (node instanceof AST_Block) {
            var index = node.body.length - 1;
            if (index >= 0) {
                node.body[index] = node.body[index].transform(tt);
            }
        } else if (node instanceof AST_If) {
            node.body = node.body.transform(tt);
            if (node.alternative) {
                node.alternative = node.alternative.transform(tt);
            }
        } else if (node instanceof AST_With) {
            node.body = node.body.transform(tt);
        }
        return node;
    });
    self.transform(tt);
});

AST_Toplevel.DEFMETHOD("reset_opt_flags", function(compressor) {
    const self = this;
    const reduce_vars = compressor.option("reduce_vars");

    const preparation = new TreeWalker(function(node, descend) {
        clear_flag(node, CLEAR_BETWEEN_PASSES);
        if (reduce_vars) {
            if (compressor.top_retain
                && node instanceof AST_Defun  // Only functions are retained
                && preparation.parent() === self
            ) {
                set_flag(node, TOP);
            }
            return node.reduce_vars(preparation, descend, compressor);
        }
    });
    // Stack of look-up tables to keep track of whether a `SymbolDef` has been
    // properly assigned before use:
    // - `push()` & `pop()` when visiting conditional branches
    preparation.safe_ids = Object.create(null);
    preparation.in_loop = null;
    preparation.loop_ids = new Map();
    preparation.defs_to_safe_ids = new Map();
    self.walk(preparation);
});

AST_Symbol.DEFMETHOD("fixed_value", function() {
    var fixed = this.thedef.fixed;
    if (!fixed || fixed instanceof AST_Node) return fixed;
    return fixed();
});

AST_SymbolRef.DEFMETHOD("is_immutable", function() {
    var orig = this.definition().orig;
    return orig.length == 1 && orig[0] instanceof AST_SymbolLambda;
});

function find_variable(compressor, name) {
    var scope, i = 0;
    while (scope = compressor.parent(i++)) {
        if (scope instanceof AST_Scope) break;
        if (scope instanceof AST_Catch && scope.argname) {
            scope = scope.argname.definition().scope;
            break;
        }
    }
    return scope.find_variable(name);
}

var global_names = makePredicate("Array Boolean clearInterval clearTimeout console Date decodeURI decodeURIComponent encodeURI encodeURIComponent Error escape eval EvalError Function isFinite isNaN JSON Math Number parseFloat parseInt RangeError ReferenceError RegExp Object setInterval setTimeout String SyntaxError TypeError unescape URIError");
AST_SymbolRef.DEFMETHOD("is_declared", function(compressor) {
    return !this.definition().undeclared
        || compressor.option("unsafe") && global_names.has(this.name);
});

/* -----[ optimizers ]----- */

var directives = new Set(["use asm", "use strict"]);
def_optimize(AST_Directive, function(self, compressor) {
    if (compressor.option("directives")
        && (!directives.has(self.value) || compressor.has_directive(self.value) !== self)) {
        return make_node(AST_EmptyStatement, self);
    }
    return self;
});

def_optimize(AST_Debugger, function(self, compressor) {
    if (compressor.option("drop_debugger"))
        return make_node(AST_EmptyStatement, self);
    return self;
});

def_optimize(AST_LabeledStatement, function(self, compressor) {
    if (self.body instanceof AST_Break
        && compressor.loopcontrol_target(self.body) === self.body) {
        return make_node(AST_EmptyStatement, self);
    }
    return self.label.references.length == 0 ? self.body : self;
});

def_optimize(AST_Block, function(self, compressor) {
    tighten_body(self.body, compressor);
    return self;
});

function can_be_extracted_from_if_block(node) {
    return !(
        node instanceof AST_Const
        || node instanceof AST_Let
        || node instanceof AST_Using
        || node instanceof AST_Class
    );
}

def_optimize(AST_BlockStatement, function(self, compressor) {
    tighten_body(self.body, compressor);
    switch (self.body.length) {
      case 1:
        if (!compressor.has_directive("use strict")
            && compressor.parent() instanceof AST_If
            && can_be_extracted_from_if_block(self.body[0])
            || can_be_evicted_from_block(self.body[0])) {
            return self.body[0];
        }
        break;
      case 0: return make_node(AST_EmptyStatement, self);
    }
    return self;
});

function opt_AST_Lambda(self, compressor) {
    tighten_body(self.body, compressor);
    if (compressor.option("side_effects")
        && self.body.length == 1
        && self.body[0] === compressor.has_directive("use strict")) {
        self.body.length = 0;
    }
    return self;
}
def_optimize(AST_Lambda, opt_AST_Lambda);

AST_Scope.DEFMETHOD("hoist_declarations", function(compressor) {
    var self = this;
    if (compressor.has_directive("use asm")) return self;

    var hoist_funs = compressor.option("hoist_funs");
    var hoist_vars = compressor.option("hoist_vars");

    if (hoist_funs || hoist_vars) {
        var dirs = [];
        var hoisted = [];
        var vars = new Map(), vars_found = 0, var_decl = 0;
        // let's count var_decl first, we seem to waste a lot of
        // space if we hoist `var` when there's only one.
        walk(self, node => {
            if (node instanceof AST_Scope && node !== self)
                return true;
            if (node instanceof AST_Var) {
                ++var_decl;
                return true;
            }
        });
        hoist_vars = hoist_vars && var_decl > 1;
        var tt = new TreeTransformer(
            function before(node) {
                if (node !== self) {
                    if (node instanceof AST_Directive) {
                        dirs.push(node);
                        return make_node(AST_EmptyStatement, node);
                    }
                    if (hoist_funs && node instanceof AST_Defun
                        && !(tt.parent() instanceof AST_Export)
                        && tt.parent() === self) {
                        hoisted.push(node);
                        return make_node(AST_EmptyStatement, node);
                    }
                    if (
                        hoist_vars
                        && node instanceof AST_Var
                        && !node.definitions.some(def => def.name instanceof AST_Destructuring)
                    ) {
                        node.definitions.forEach(function(def) {
                            vars.set(def.name.name, def);
                            ++vars_found;
                        });
                        var seq = node.to_assignments(compressor);
                        var p = tt.parent();
                        if (p instanceof AST_ForIn && p.init === node) {
                            if (seq == null) {
                                var def = node.definitions[0].name;
                                return make_node(AST_SymbolRef, def, def);
                            }
                            return seq;
                        }
                        if (p instanceof AST_For && p.init === node) {
                            return seq;
                        }
                        if (!seq) return make_node(AST_EmptyStatement, node);
                        return make_node(AST_SimpleStatement, node, {
                            body: seq
                        });
                    }
                    if (node instanceof AST_Scope)
                        return node; // to avoid descending in nested scopes
                }
            }
        );
        self = self.transform(tt);
        if (vars_found > 0) {
            // collect only vars which don't show up in self's arguments list
            var defs = [];
            const is_lambda = self instanceof AST_Lambda;
            const args_as_names = is_lambda ? self.args_as_names() : null;
            vars.forEach((def, name) => {
                if (is_lambda && args_as_names.some((x) => x.name === def.name.name)) {
                    vars.delete(name);
                } else {
                    def = def.clone();
                    def.value = null;
                    defs.push(def);
                    vars.set(name, def);
                }
            });
            if (defs.length > 0) {
                // try to merge in assignments
                for (var i = 0; i < self.body.length;) {
                    if (self.body[i] instanceof AST_SimpleStatement) {
                        var expr = self.body[i].body, sym, assign;
                        if (expr instanceof AST_Assign
                            && expr.operator == "="
                            && (sym = expr.left) instanceof AST_Symbol
                            && vars.has(sym.name)
                        ) {
                            var def = vars.get(sym.name);
                            if (def.value) break;
                            def.value = expr.right;
                            remove(defs, def);
                            defs.push(def);
                            self.body.splice(i, 1);
                            continue;
                        }
                        if (expr instanceof AST_Sequence
                            && (assign = expr.expressions[0]) instanceof AST_Assign
                            && assign.operator == "="
                            && (sym = assign.left) instanceof AST_Symbol
                            && vars.has(sym.name)
                        ) {
                            var def = vars.get(sym.name);
                            if (def.value) break;
                            def.value = assign.right;
                            remove(defs, def);
                            defs.push(def);
                            self.body[i].body = make_sequence(expr, expr.expressions.slice(1));
                            continue;
                        }
                    }
                    if (self.body[i] instanceof AST_EmptyStatement) {
                        self.body.splice(i, 1);
                        continue;
                    }
                    if (self.body[i] instanceof AST_BlockStatement) {
                        self.body.splice(i, 1, ...self.body[i].body);
                        continue;
                    }
                    break;
                }
                defs = make_node(AST_Var, self, {
                    definitions: defs
                });
                hoisted.push(defs);
            }
        }
        self.body = dirs.concat(hoisted, self.body);
    }
    return self;
});

AST_Scope.DEFMETHOD("hoist_properties", function(compressor) {
    var self = this;
    if (!compressor.option("hoist_props") || compressor.has_directive("use asm")) return self;
    var top_retain = self instanceof AST_Toplevel && compressor.top_retain || return_false;
    var defs_by_id = new Map();
    var hoister = new TreeTransformer(function(node, descend) {
        if (node instanceof AST_VarDef) {
            const sym = node.name;
            let def;
            let value;
            if (sym.scope === self
                && !(sym instanceof AST_SymbolUsing)
                && (def = sym.definition()).escaped != 1
                && !def.assignments
                && !def.direct_access
                && !def.single_use
                && !compressor.exposed(def)
                && !top_retain(def)
                && (value = sym.fixed_value()) === node.value
                && value instanceof AST_Object
                && !value.properties.some(prop =>
                    prop instanceof AST_Expansion || prop.computed_key()
                )
            ) {
                descend(node, this);
                const defs = new Map();
                const assignments = [];
                value.properties.forEach(({ key, value }) => {
                    const scope = hoister.find_scope();
                    const symbol = self.create_symbol(sym.CTOR, {
                        source: sym,
                        scope,
                        conflict_scopes: new Set([
                            scope,
                            ...sym.definition().references.map(ref => ref.scope)
                        ]),
                        tentative_name: sym.name + "_" + key
                    });

                    defs.set(String(key), symbol.definition());

                    assignments.push(make_node(AST_VarDef, node, {
                        name: symbol,
                        value
                    }));
                });
                defs_by_id.set(def.id, defs);
                return MAP.splice(assignments);
            }
        } else if (node instanceof AST_PropAccess
            && node.expression instanceof AST_SymbolRef
        ) {
            const defs = defs_by_id.get(node.expression.definition().id);
            if (defs) {
                const def = defs.get(String(get_simple_key(node.property)));
                const sym = make_node(AST_SymbolRef, node, {
                    name: def.name,
                    scope: node.expression.scope,
                    thedef: def
                });
                sym.reference({});
                return sym;
            }
        }
    });
    return self.transform(hoister);
});

def_optimize(AST_SimpleStatement, function(self, compressor) {
    if (compressor.option("side_effects")) {
        var body = self.body;
        var node = body.drop_side_effect_free(compressor, true);
        if (!node) {
            return make_node(AST_EmptyStatement, self);
        }
        if (node !== body) {
            return make_node(AST_SimpleStatement, self, { body: node });
        }
    }
    return self;
});

def_optimize(AST_While, function(self, compressor) {
    return compressor.option("loops") ? make_node(AST_For, self, self).optimize(compressor) : self;
});

def_optimize(AST_Do, function(self, compressor) {
    if (!compressor.option("loops")) return self;
    var cond = self.condition.tail_node().evaluate(compressor);
    if (!(cond instanceof AST_Node)) {
        if (cond) return make_node(AST_For, self, {
            body: make_node(AST_BlockStatement, self.body, {
                body: [
                    self.body,
                    make_node(AST_SimpleStatement, self.condition, {
                        body: self.condition
                    })
                ]
            })
        }).optimize(compressor);
        if (!has_break_or_continue(self, compressor.parent())) {
            return make_node(AST_BlockStatement, self.body, {
                body: [
                    self.body,
                    make_node(AST_SimpleStatement, self.condition, {
                        body: self.condition
                    })
                ]
            }).optimize(compressor);
        }
    }
    return self;
});

function if_break_in_loop(self, compressor) {
    var first = self.body instanceof AST_BlockStatement ? self.body.body[0] : self.body;
    if (compressor.option("dead_code") && is_break(first)) {
        var body = [];
        if (self.init instanceof AST_Statement) {
            body.push(self.init);
        } else if (self.init) {
            body.push(make_node(AST_SimpleStatement, self.init, {
                body: self.init
            }));
        }
        if (self.condition) {
            body.push(make_node(AST_SimpleStatement, self.condition, {
                body: self.condition
            }));
        }
        extract_from_unreachable_code(compressor, self.body, body);
        return make_node(AST_BlockStatement, self, {
            body: body
        });
    }
    if (first instanceof AST_If) {
        if (is_break(first.body)) {
            if (self.condition) {
                self.condition = make_node(AST_Binary, self.condition, {
                    left: self.condition,
                    operator: "&&",
                    right: first.condition.negate(compressor),
                });
            } else {
                self.condition = first.condition.negate(compressor);
            }
            drop_it(first.alternative);
        } else if (is_break(first.alternative)) {
            if (self.condition) {
                self.condition = make_node(AST_Binary, self.condition, {
                    left: self.condition,
                    operator: "&&",
                    right: first.condition,
                });
            } else {
                self.condition = first.condition;
            }
            drop_it(first.body);
        }
    }
    return self;

    function is_break(node) {
        return node instanceof AST_Break
            && compressor.loopcontrol_target(node) === compressor.self();
    }

    function drop_it(rest) {
        rest = as_statement_array(rest);
        if (self.body instanceof AST_BlockStatement) {
            self.body = self.body.clone();
            self.body.body = rest.concat(self.body.body.slice(1));
            self.body = self.body.transform(compressor);
        } else {
            self.body = make_node(AST_BlockStatement, self.body, {
                body: rest
            }).transform(compressor);
        }
        self = if_break_in_loop(self, compressor);
    }
}

def_optimize(AST_For, function(self, compressor) {
    if (!compressor.option("loops")) return self;
    if (compressor.option("side_effects") && self.init) {
        self.init = self.init.drop_side_effect_free(compressor);
    }
    if (self.condition) {
        var cond = self.condition.evaluate(compressor);
        if (!(cond instanceof AST_Node)) {
            if (cond) self.condition = null;
            else if (!compressor.option("dead_code")) {
                var orig = self.condition;
                self.condition = make_node_from_constant(cond, self.condition);
                self.condition = best_of_expression(self.condition.transform(compressor), orig);
            }
        }
        if (compressor.option("dead_code")) {
            if (cond instanceof AST_Node) cond = self.condition.tail_node().evaluate(compressor);
            if (!cond) {
                var body = [];
                extract_from_unreachable_code(compressor, self.body, body);
                if (self.init instanceof AST_Statement) {
                    body.push(self.init);
                } else if (self.init) {
                    body.push(make_node(AST_SimpleStatement, self.init, {
                        body: self.init
                    }));
                }
                body.push(make_node(AST_SimpleStatement, self.condition, {
                    body: self.condition
                }));
                return make_node(AST_BlockStatement, self, { body: body }).optimize(compressor);
            }
        }
    }
    return if_break_in_loop(self, compressor);
});

def_optimize(AST_If, function(self, compressor) {
    if (is_empty(self.alternative)) self.alternative = null;

    if (!compressor.option("conditionals")) return self;
    // if condition can be statically determined, drop
    // one of the blocks.  note, statically determined implies
    // “has no side effects”; also it doesn't work for cases like
    // `x && true`, though it probably should.
    var cond = self.condition.evaluate(compressor);
    if (!compressor.option("dead_code") && !(cond instanceof AST_Node)) {
        var orig = self.condition;
        self.condition = make_node_from_constant(cond, orig);
        self.condition = best_of_expression(self.condition.transform(compressor), orig);
    }
    if (compressor.option("dead_code")) {
        if (cond instanceof AST_Node) cond = self.condition.tail_node().evaluate(compressor);
        if (!cond) {
            var body = [];
            extract_from_unreachable_code(compressor, self.body, body);
            body.push(make_node(AST_SimpleStatement, self.condition, {
                body: self.condition
            }));
            if (self.alternative) body.push(self.alternative);
            return make_node(AST_BlockStatement, self, { body: body }).optimize(compressor);
        } else if (!(cond instanceof AST_Node)) {
            var body = [];
            body.push(make_node(AST_SimpleStatement, self.condition, {
                body: self.condition
            }));
            body.push(self.body);
            if (self.alternative) {
                extract_from_unreachable_code(compressor, self.alternative, body);
            }
            return make_node(AST_BlockStatement, self, { body: body }).optimize(compressor);
        }
    }
    var negated = self.condition.negate(compressor);
    var self_condition_length = self.condition.size();
    var negated_length = negated.size();
    var negated_is_best = negated_length < self_condition_length;
    if (self.alternative && negated_is_best) {
        negated_is_best = false; // because we already do the switch here.
        // no need to swap values of self_condition_length and negated_length
        // here because they are only used in an equality comparison later on.
        self.condition = negated;
        var tmp = self.body;
        self.body = self.alternative || make_node(AST_EmptyStatement, self);
        self.alternative = tmp;
    }
    if (is_empty(self.body) && is_empty(self.alternative)) {
        return make_node(AST_SimpleStatement, self.condition, {
            body: self.condition.clone()
        }).optimize(compressor);
    }
    if (self.body instanceof AST_SimpleStatement
        && self.alternative instanceof AST_SimpleStatement) {
        return make_node(AST_SimpleStatement, self, {
            body: make_node(AST_Conditional, self, {
                condition   : self.condition,
                consequent  : self.body.body,
                alternative : self.alternative.body
            })
        }).optimize(compressor);
    }
    if (is_empty(self.alternative) && self.body instanceof AST_SimpleStatement) {
        if (self_condition_length === negated_length && !negated_is_best
            && self.condition instanceof AST_Binary && self.condition.operator == "||") {
            // although the code length of self.condition and negated are the same,
            // negated does not require additional surrounding parentheses.
            // see https://github.com/mishoo/UglifyJS2/issues/979
            negated_is_best = true;
        }
        if (negated_is_best) return make_node(AST_SimpleStatement, self, {
            body: make_node(AST_Binary, self, {
                operator : "||",
                left     : negated,
                right    : self.body.body
            })
        }).optimize(compressor);
        return make_node(AST_SimpleStatement, self, {
            body: make_node(AST_Binary, self, {
                operator : "&&",
                left     : self.condition,
                right    : self.body.body
            })
        }).optimize(compressor);
    }
    if (self.body instanceof AST_EmptyStatement
        && self.alternative instanceof AST_SimpleStatement) {
        return make_node(AST_SimpleStatement, self, {
            body: make_node(AST_Binary, self, {
                operator : "||",
                left     : self.condition,
                right    : self.alternative.body
            })
        }).optimize(compressor);
    }
    if (self.body instanceof AST_Exit
        && self.alternative instanceof AST_Exit
        && self.body.TYPE == self.alternative.TYPE) {
        return make_node(self.body.CTOR, self, {
            value: make_node(AST_Conditional, self, {
                condition   : self.condition,
                consequent  : self.body.value || make_void_0(self.body),
                alternative : self.alternative.value || make_void_0(self.alternative),
            }).transform(compressor)
        }).optimize(compressor);
    }
    if (self.body instanceof AST_If
        && !self.body.alternative
        && !self.alternative) {
        self = make_node(AST_If, self, {
            condition: make_node(AST_Binary, self.condition, {
                operator: "&&",
                left: self.condition,
                right: self.body.condition
            }),
            body: self.body.body,
            alternative: null
        });
    }
    if (aborts(self.body)) {
        if (self.alternative) {
            var alt = self.alternative;
            self.alternative = null;
            return make_node(AST_BlockStatement, self, {
                body: [ self, alt ]
            }).optimize(compressor);
        }
    }
    if (aborts(self.alternative)) {
        var body = self.body;
        self.body = self.alternative;
        self.condition = negated_is_best ? negated : self.condition.negate(compressor);
        self.alternative = null;
        return make_node(AST_BlockStatement, self, {
            body: [ self, body ]
        }).optimize(compressor);
    }
    return self;
});

def_optimize(AST_Switch, function(self, compressor) {
    if (!compressor.option("switches")) return self;
    var branch;
    var value = self.expression.evaluate(compressor);
    if (!(value instanceof AST_Node)) {
        var orig = self.expression;
        self.expression = make_node_from_constant(value, orig);
        self.expression = best_of_expression(self.expression.transform(compressor), orig);
    }
    if (!compressor.option("dead_code")) return self;
    if (value instanceof AST_Node) {
        value = self.expression.tail_node().evaluate(compressor);
    }
    var decl = [];
    var body = [];
    var default_branch;
    var exact_match;
    // - compress self.body into `body`
    // - find and deduplicate default branch
    // - find the exact match (`case 1234` inside `switch(1234)`)
    for (var i = 0, len = self.body.length; i < len && !exact_match; i++) {
        branch = self.body[i];
        if (branch instanceof AST_Default) {
            if (!default_branch) {
                default_branch = branch;
            } else {
                eliminate_branch(branch, body[body.length - 1]);
            }
        } else if (!(value instanceof AST_Node)) {
            var exp = branch.expression.evaluate(compressor);
            if (!(exp instanceof AST_Node) && exp !== value) {
                eliminate_branch(branch, body[body.length - 1]);
                continue;
            }
            if (exp instanceof AST_Node && !exp.has_side_effects(compressor)) {
                exp = branch.expression.tail_node().evaluate(compressor);
            }
            if (exp === value) {
                exact_match = branch;
                if (default_branch) {
                    var default_index = body.indexOf(default_branch);
                    body.splice(default_index, 1);
                    eliminate_branch(default_branch, body[default_index - 1]);
                    default_branch = null;
                }
            }
        }
        body.push(branch);
    }
    // i < len if we found an exact_match. eliminate the rest
    while (i < len) eliminate_branch(self.body[i++], body[body.length - 1]);
    self.body = body;

    let default_or_exact = default_branch || exact_match;
    default_branch = null;
    exact_match = null;

    // group equivalent branches so they will be located next to each other,
    // that way the next micro-optimization will merge them.
    // ** bail micro-optimization if not a simple switch case with breaks
    if (body.every((branch, i) =>
        (branch === default_or_exact || branch.expression instanceof AST_Constant)
        && (branch.body.length === 0 || aborts(branch) || body.length - 1 === i))
    ) {
        for (let i = 0; i < body.length; i++) {
            const branch = body[i];
            for (let j = i + 1; j < body.length; j++) {
                const next = body[j];
                if (next.body.length === 0) continue;
                const last_branch = j === (body.length - 1);
                const equivalentBranch = branches_equivalent(next, branch, false);
                if (equivalentBranch || (last_branch && branches_equivalent(next, branch, true))) {
                    if (!equivalentBranch && last_branch) {
                        next.body.push(make_node(AST_Break));
                    }

                    // let's find previous siblings with inert fallthrough...
                    let x = j - 1;
                    let fallthroughDepth = 0;
                    while (x > i) {
                        if (is_inert_body(body[x--])) {
                            fallthroughDepth++;
                        } else {
                            break;
                        }
                    }

                    const plucked = body.splice(j - fallthroughDepth, 1 + fallthroughDepth);
                    body.splice(i + 1, 0, ...plucked);
                    i += plucked.length;
                }
            }
        }
    }

    // merge equivalent branches in a row
    for (let i = 0; i < body.length; i++) {
        let branch = body[i];
        if (branch.body.length === 0) continue;
        if (!aborts(branch)) continue;

        for (let j = i + 1; j < body.length; i++, j++) {
            let next = body[j];
            if (next.body.length === 0) continue;
            if (
                branches_equivalent(next, branch, false)
                || (j === body.length - 1 && branches_equivalent(next, branch, true))
            ) {
                branch.body = [];
                branch = next;
                continue;
            }
            break;
        }
    }

    // Prune any empty branches at the end of the switch statement.
    {
        let i = body.length - 1;
        for (; i >= 0; i--) {
            let bbody = body[i].body;
            while (is_break(bbody[bbody.length - 1], compressor)) bbody.pop();
            if (!is_inert_body(body[i])) break;
        }
        // i now points to the index of a branch that contains a body. By incrementing, it's
        // pointing to the first branch that's empty.
        i++;
        if (!default_or_exact || body.indexOf(default_or_exact) >= i) {
            // The default behavior is to do nothing. We can take advantage of that to
            // remove all case expressions that are side-effect free that also do
            // nothing, since they'll default to doing nothing. But we can't remove any
            // case expressions before one that would side-effect, since they may cause
            // the side-effect to be skipped.
            for (let j = body.length - 1; j >= i; j--) {
                let branch = body[j];
                if (branch === default_or_exact) {
                    default_or_exact = null;
                    eliminate_branch(body.pop());
                } else if (!branch.expression.has_side_effects(compressor)) {
                    eliminate_branch(body.pop());
                } else {
                    break;
                }
            }
        }
    }


    // Prune side-effect free branches that fall into default.
    DEFAULT: if (default_or_exact) {
        let default_index = body.indexOf(default_or_exact);
        let default_body_index = default_index;
        for (; default_body_index < body.length - 1; default_body_index++) {
            if (!is_inert_body(body[default_body_index])) break;
        }
        if (default_body_index < body.length - 1) {
            break DEFAULT;
        }

        let side_effect_index = body.length - 1;
        for (; side_effect_index >= 0; side_effect_index--) {
            let branch = body[side_effect_index];
            if (branch === default_or_exact) continue;
            if (branch.expression.has_side_effects(compressor)) break;
        }
        // If the default behavior comes after any side-effect case expressions,
        // then we can fold all side-effect free cases into the default branch.
        // If the side-effect case is after the default, then any side-effect
        // free cases could prevent the side-effect from occurring.
        if (default_body_index > side_effect_index) {
            let prev_body_index = default_index - 1;
            for (; prev_body_index >= 0; prev_body_index--) {
                if (!is_inert_body(body[prev_body_index])) break;
            }
            let before = Math.max(side_effect_index, prev_body_index) + 1;
            let after = default_index;
            if (side_effect_index > default_index) {
                // If the default falls into the same body as a side-effect
                // case, then we need preserve that case and only prune the
                // cases after it.
                after = side_effect_index;
                body[side_effect_index].body = body[default_body_index].body;
            } else {
                // The default will be the last branch.
                default_or_exact.body = body[default_body_index].body;
            }

            // Prune everything after the default (or last side-effect case)
            // until the next case with a body.
            body.splice(after + 1, default_body_index - after);
            // Prune everything before the default that falls into it.
            body.splice(before, default_index - before);
        }
    }

    // See if we can remove the switch entirely if all cases (the default) fall into the same case body.
    DEFAULT: if (default_or_exact) {
        let i = body.findIndex(branch => !is_inert_body(branch));
        let caseBody;
        // `i` is equal to one of the following:
        // - `-1`, there is no body in the switch statement.
        // - `body.length - 1`, all cases fall into the same body.
        // - anything else, there are multiple bodies in the switch.
        if (i === body.length - 1) {
            // All cases fall into the case body.
            let branch = body[i];
            if (has_nested_break(self)) break DEFAULT;

            // This is the last case body, and we've already pruned any breaks, so it's
            // safe to hoist.
            caseBody = make_node(AST_BlockStatement, branch, {
                body: branch.body
            });
            branch.body = [];
        } else if (i !== -1) {
            // If there are multiple bodies, then we cannot optimize anything.
            break DEFAULT;
        }

        let sideEffect = body.find(
            branch => branch !== default_or_exact && branch.expression.has_side_effects(compressor)
        );
        // If no cases cause a side-effect, we can eliminate the switch entirely.
        if (!sideEffect) {
            return make_node(AST_BlockStatement, self, {
                body: decl.concat(
                    statement(self.expression),
                    default_or_exact.expression ? statement(default_or_exact.expression) : [],
                    caseBody || []
                )
            }).optimize(compressor);
        }

        // If we're this far, either there was no body or all cases fell into the same body.
        // If there was no body, then we don't need a default branch (because the default is
        // do nothing). If there was a body, we'll extract it to after the switch, so the
        // switch's new default is to do nothing and we can still prune it.
        const default_index = body.indexOf(default_or_exact);
        body.splice(default_index, 1);
        default_or_exact = null;

        if (caseBody) {
            // Recurse into switch statement one more time so that we can append the case body
            // outside of the switch. This recursion will only happen once since we've pruned
            // the default case.
            return make_node(AST_BlockStatement, self, {
                body: decl.concat(self, caseBody)
            }).optimize(compressor);
        }
        // If we fall here, there is a default branch somewhere, there are no case bodies,
        // and there's a side-effect somewhere. Just let the below paths take care of it.
    }

    // Reintegrate `decl` (var statements)
    if (body.length > 0) {
        body[0].body = decl.concat(body[0].body);
    }
    if (body.length == 0) {
        return make_node(AST_BlockStatement, self, {
            body: decl.concat(statement(self.expression))
        }).optimize(compressor);
    }

    if (body.length == 1 && !has_nested_break(self)) {
        // This is the last case body, and we've already pruned any breaks, so it's
        // safe to hoist.
        let branch = body[0];
        return make_node(AST_If, self, {
            condition: make_node(AST_Binary, self, {
                operator: "===",
                left: self.expression,
                right: branch.expression,
            }),
            body: make_node(AST_BlockStatement, branch, {
                body: branch.body
            }),
            alternative: null
        }).optimize(compressor);
    }
    if (body.length === 2 && default_or_exact && !has_nested_break(self)) {
        let branch = body[0] === default_or_exact ? body[1] : body[0];
        let exact_exp = default_or_exact.expression && statement(default_or_exact.expression);
        if (aborts(body[0])) {
            // Only the first branch body could have a break (at the last statement)
            let first = body[0];
            if (is_break(first.body[first.body.length - 1], compressor)) {
                first.body.pop();
            }
            return make_node(AST_If, self, {
                condition: make_node(AST_Binary, self, {
                    operator: "===",
                    left: self.expression,
                    right: branch.expression,
                }),
                body: make_node(AST_BlockStatement, branch, {
                    body: branch.body
                }),
                alternative: make_node(AST_BlockStatement, default_or_exact, {
                    body: [].concat(
                        exact_exp || [],
                        default_or_exact.body
                    )
                })
            }).optimize(compressor);
        }
        let operator = "===";
        let consequent = make_node(AST_BlockStatement, branch, {
            body: branch.body,
        });
        let always = make_node(AST_BlockStatement, default_or_exact, {
            body: [].concat(
                exact_exp || [],
                default_or_exact.body
            )
        });
        if (body[0] === default_or_exact) {
            operator = "!==";
            let tmp = always;
            always = consequent;
            consequent = tmp;
        }
        return make_node(AST_BlockStatement, self, {
            body: [
                make_node(AST_If, self, {
                    condition: make_node(AST_Binary, self, {
                        operator: operator,
                        left: self.expression,
                        right: branch.expression,
                    }),
                    body: consequent,
                    alternative: null,
                }),
                always,
            ],
        }).optimize(compressor);
    }
    return self;

    function eliminate_branch(branch, prev) {
        if (prev && !aborts(prev)) {
            prev.body = prev.body.concat(branch.body);
        } else {
            extract_from_unreachable_code(compressor, branch, decl);
        }
    }
    function branches_equivalent(branch, prev, insertBreak) {
        let bbody = branch.body;
        let pbody = prev.body;
        if (insertBreak) {
            bbody = bbody.concat(make_node(AST_Break));
        }
        if (bbody.length !== pbody.length) return false;
        let bblock = make_node(AST_BlockStatement, branch, { body: bbody });
        let pblock = make_node(AST_BlockStatement, prev, { body: pbody });
        return bblock.equivalent_to(pblock);
    }
    function statement(body) {
        return make_node(AST_SimpleStatement, body, { body });
    }
    function has_nested_break(root) {
        let has_break = false;

        let tw = new TreeWalker(node => {
            if (has_break) return true;
            if (node instanceof AST_Lambda) return true;
            if (node instanceof AST_SimpleStatement) return true;
            if (!is_break(node, tw)) return;
            let parent = tw.parent();
            if (
                parent instanceof AST_SwitchBranch
                && parent.body[parent.body.length - 1] === node
            ) {
                return;
            }
            has_break = true;
        });
        root.walk(tw);
        return has_break;
    }
    function is_break(node, stack) {
        return node instanceof AST_Break
            && stack.loopcontrol_target(node) === self;
    }
    function is_inert_body(branch) {
        return !aborts(branch) && !make_node(AST_BlockStatement, branch, {
            body: branch.body
        }).has_side_effects(compressor);
    }
});

def_optimize(AST_Try, function(self, compressor) {
    if (self.bcatch && self.bfinally && self.bfinally.body.every(is_empty)) self.bfinally = null;

    if (compressor.option("dead_code") && self.body.body.every(is_empty)) {
        var body = [];
        if (self.bcatch) {
            extract_from_unreachable_code(compressor, self.bcatch, body);
        }
        if (self.bfinally) body.push(...self.bfinally.body);
        return make_node(AST_BlockStatement, self, {
            body: body
        }).optimize(compressor);
    }
    return self;
});

AST_Definitions.DEFMETHOD("to_assignments", function(compressor) {
    var reduce_vars = compressor.option("reduce_vars");
    var assignments = [];

    for (const def of this.definitions) {
        if (def.value) {
            var name = make_node(AST_SymbolRef, def.name, def.name);
            assignments.push(make_node(AST_Assign, def, {
                operator : "=",
                logical: false,
                left     : name,
                right    : def.value
            }));
            if (reduce_vars) name.definition().fixed = false;
        }
        const thedef = def.name.definition();
        thedef.eliminated++;
        thedef.replaced--;
    }

    if (assignments.length == 0) return null;
    return make_sequence(this, assignments);
});

def_optimize(AST_Definitions, function(self) {
    if (self.definitions.length == 0) {
        return make_node(AST_EmptyStatement, self);
    }
    return self;
});

def_optimize(AST_VarDef, function(self, compressor) {
    if (
        self.name instanceof AST_SymbolLet
        && self.value != null
        && is_undefined(self.value, compressor)
    ) {
        self.value = null;
    }
    return self;
});

def_optimize(AST_Import, function(self) {
    return self;
});

def_optimize(AST_Call, function(self, compressor) {
    var exp = self.expression;
    var fn = exp;
    inline_array_like_spread(self.args);
    var simple_args = self.args.every((arg) => !(arg instanceof AST_Expansion));

    if (compressor.option("reduce_vars") && fn instanceof AST_SymbolRef) {
        fn = fn.fixed_value();
    }

    var is_func = fn instanceof AST_Lambda;

    if (is_func && fn.pinned()) return self;

    if (compressor.option("unused")
        && simple_args
        && is_func
        && !fn.uses_arguments) {
        var pos = 0, last = 0;
        for (var i = 0, len = self.args.length; i < len; i++) {
            if (fn.argnames[i] instanceof AST_Expansion) {
                if (has_flag(fn.argnames[i].expression, UNUSED)) while (i < len) {
                    var node = self.args[i++].drop_side_effect_free(compressor);
                    if (node) {
                        self.args[pos++] = node;
                    }
                } else while (i < len) {
                    self.args[pos++] = self.args[i++];
                }
                last = pos;
                break;
            }
            var trim = i >= fn.argnames.length;
            if (trim || has_flag(fn.argnames[i], UNUSED)) {
                var node = self.args[i].drop_side_effect_free(compressor);
                if (node) {
                    self.args[pos++] = node;
                } else if (!trim) {
                    self.args[pos++] = make_node(AST_Number, self.args[i], {
                        value: 0
                    });
                    continue;
                }
            } else {
                self.args[pos++] = self.args[i];
            }
            last = pos;
        }
        self.args.length = last;
    }

    if (
        exp instanceof AST_Dot
        && exp.expression instanceof AST_SymbolRef
        && exp.expression.name === "console"
        && exp.expression.definition().undeclared
        && exp.property === "assert"
    ) {
        const condition = self.args[0];
        if (condition) {
            const value = condition.evaluate(compressor);
    
            if (value === 1 || value === true) {
                return make_void_0(self).optimize(compressor);
            }
        }
    }    

    if (compressor.option("unsafe") && !exp.contains_optional()) {
        if (exp instanceof AST_Dot && exp.start.value === "Array" && exp.property === "from" && self.args.length === 1) {
            const [argument] = self.args;
            if (argument instanceof AST_Array) {
                return make_node(AST_Array, argument, {
                    elements: argument.elements
                }).optimize(compressor);
            }
        }
        if (is_undeclared_ref(exp)) switch (exp.name) {
          case "Array":
            if (self.args.length != 1) {
                return make_node(AST_Array, self, {
                    elements: self.args
                }).optimize(compressor);
            } else if (self.args[0] instanceof AST_Number && self.args[0].value <= 11) {
                const elements = [];
                for (let i = 0; i < self.args[0].value; i++) elements.push(new AST_Hole);
                return new AST_Array({ elements });
            }
            break;
          case "Object":
            if (self.args.length == 0) {
                return make_node(AST_Object, self, {
                    properties: []
                });
            }
            break;
          case "String":
            if (self.args.length == 0) return make_node(AST_String, self, {
                value: ""
            });
            if (self.args.length <= 1) return make_node(AST_Binary, self, {
                left: self.args[0],
                operator: "+",
                right: make_node(AST_String, self, { value: "" })
            }).optimize(compressor);
            break;
          case "Number":
            if (self.args.length == 0) return make_node(AST_Number, self, {
                value: 0
            });
            if (self.args.length == 1 && compressor.option("unsafe_math")) {
                return make_node(AST_UnaryPrefix, self, {
                    expression: self.args[0],
                    operator: "+"
                }).optimize(compressor);
            }
            break;
          case "Symbol":
            if (self.args.length == 1 && self.args[0] instanceof AST_String && compressor.option("unsafe_symbols"))
                self.args.length = 0;
                break;
          case "Boolean":
            if (self.args.length == 0) return make_node(AST_False, self);
            if (self.args.length == 1) return make_node(AST_UnaryPrefix, self, {
                expression: make_node(AST_UnaryPrefix, self, {
                    expression: self.args[0],
                    operator: "!"
                }),
                operator: "!"
            }).optimize(compressor);
            break;
          case "RegExp":
            var params = [];
            if (self.args.length >= 1
                && self.args.length <= 2
                && self.args.every((arg) => {
                    var value = arg.evaluate(compressor);
                    params.push(value);
                    return arg !== value;
                })
                && regexp_is_safe(params[0])
            ) {
                let [ source, flags ] = params;
                source = regexp_source_fix(new RegExp(source).source);
                const rx = make_node(AST_RegExp, self, {
                    value: { source, flags }
                });
                if (rx._eval(compressor) !== rx) {
                    return rx;
                }
            }
            break;
        } else if (exp instanceof AST_Dot) switch(exp.property) {
          case "toString":
            if (self.args.length == 0 && !exp.expression.may_throw_on_access(compressor)) {
                return make_node(AST_Binary, self, {
                    left: make_node(AST_String, self, { value: "" }),
                    operator: "+",
                    right: exp.expression
                }).optimize(compressor);
            }
            break;
          case "join":
            if (exp.expression instanceof AST_Array) EXIT: {
                var separator;
                if (self.args.length > 0) {
                    separator = self.args[0].evaluate(compressor);
                    if (separator === self.args[0]) break EXIT; // not a constant
                }
                var elements = [];
                var consts = [];
                for (var i = 0, len = exp.expression.elements.length; i < len; i++) {
                    var el = exp.expression.elements[i];
                    if (el instanceof AST_Expansion) break EXIT;
                    var value = el.evaluate(compressor);
                    if (value !== el) {
                        consts.push(value);
                    } else {
                        if (consts.length > 0) {
                            elements.push(make_node(AST_String, self, {
                                value: consts.join(separator)
                            }));
                            consts.length = 0;
                        }
                        elements.push(el);
                    }
                }
                if (consts.length > 0) {
                    elements.push(make_node(AST_String, self, {
                        value: consts.join(separator)
                    }));
                }
                if (elements.length == 0) return make_node(AST_String, self, { value: "" });
                if (elements.length == 1) {
                    if (elements[0].is_string(compressor)) {
                        return elements[0];
                    }
                    return make_node(AST_Binary, elements[0], {
                        operator : "+",
                        left     : make_node(AST_String, self, { value: "" }),
                        right    : elements[0]
                    });
                }
                if (separator == "") {
                    var first;
                    if (elements[0].is_string(compressor)
                        || elements[1].is_string(compressor)) {
                        first = elements.shift();
                    } else {
                        first = make_node(AST_String, self, { value: "" });
                    }
                    return elements.reduce(function(prev, el) {
                        return make_node(AST_Binary, el, {
                            operator : "+",
                            left     : prev,
                            right    : el
                        });
                    }, first).optimize(compressor);
                }
                // need this awkward cloning to not affect original element
                // best_of will decide which one to get through.
                var node = self.clone();
                node.expression = node.expression.clone();
                node.expression.expression = node.expression.expression.clone();
                node.expression.expression.elements = elements;
                return best_of(compressor, self, node);
            }
            break;
          case "charAt":
            if (exp.expression.is_string(compressor)) {
                var arg = self.args[0];
                var index = arg ? arg.evaluate(compressor) : 0;
                if (index !== arg) {
                    return make_node(AST_Sub, exp, {
                        expression: exp.expression,
                        property: make_node_from_constant(index | 0, arg || exp)
                    }).optimize(compressor);
                }
            }
            break;
          case "apply":
            if (self.args.length == 2 && self.args[1] instanceof AST_Array) {
                var args = self.args[1].elements.slice();
                args.unshift(self.args[0]);
                return make_node(AST_Call, self, {
                    expression: make_node(AST_Dot, exp, {
                        expression: exp.expression,
                        optional: false,
                        property: "call"
                    }),
                    args: args
                }).optimize(compressor);
            }
            break;
          case "call":
            var func = exp.expression;
            if (func instanceof AST_SymbolRef) {
                func = func.fixed_value();
            }
            if (func instanceof AST_Lambda && !func.contains_this()) {
                return (self.args.length ? make_sequence(this, [
                    self.args[0],
                    make_node(AST_Call, self, {
                        expression: exp.expression,
                        args: self.args.slice(1)
                    })
                ]) : make_node(AST_Call, self, {
                    expression: exp.expression,
                    args: []
                })).optimize(compressor);
            }
            break;
        }
    }

    if (compressor.option("unsafe_Function")
        && is_undeclared_ref(exp)
        && exp.name == "Function") {
        // new Function() => function(){}
        if (self.args.length == 0) return make_empty_function(self).optimize(compressor);
        if (self.args.every((x) => x instanceof AST_String)) {
            // quite a corner-case, but we can handle it:
            //   https://github.com/mishoo/UglifyJS2/issues/203
            // if the code argument is a constant, then we can minify it.
            try {
                var code = "n(function(" + self.args.slice(0, -1).map(function(arg) {
                    return arg.value;
                }).join(",") + "){" + self.args[self.args.length - 1].value + "})";
                var ast = parse(code);
                var mangle = compressor.mangle_options();
                ast.figure_out_scope(mangle);
                var comp = new Compressor(compressor.options, {
                    mangle_options: compressor._mangle_options
                });
                ast = ast.transform(comp);
                ast.figure_out_scope(mangle);
                ast.compute_char_frequency(mangle);
                ast.mangle_names(mangle);
                var fun;
                walk(ast, node => {
                    if (is_func_expr(node)) {
                        fun = node;
                        return walk_abort;
                    }
                });
                var code = OutputStream();
                AST_BlockStatement.prototype._codegen.call(fun, fun, code);
                self.args = [
                    make_node(AST_String, self, {
                        value: fun.argnames.map(function(arg) {
                            return arg.print_to_string();
                        }).join(",")
                    }),
                    make_node(AST_String, self.args[self.args.length - 1], {
                        value: code.get().replace(/^{|}$/g, "")
                    })
                ];
                return self;
            } catch (ex) {
                if (!(ex instanceof JS_Parse_Error)) {
                    throw ex;
                }

                // Otherwise, it crashes at runtime. Or maybe it's nonstandard syntax.
            }
        }
    }

    return inline_into_call(self, compressor);
});

/** Does this node contain optional property access or optional call? */
AST_Node.DEFMETHOD("contains_optional", function() {
    if (
        this instanceof AST_PropAccess
        || this instanceof AST_Call
        || this instanceof AST_Chain
    ) {
        if (this.optional) {
            return true;
        } else {
            return this.expression.contains_optional();
        }
    } else {
        return false;
    }
});

def_optimize(AST_New, function(self, compressor) {
    if (
        compressor.option("unsafe") &&
        is_undeclared_ref(self.expression) &&
        ["Object", "RegExp", "Function", "Error", "Array"].includes(self.expression.name)
    ) return make_node(AST_Call, self, self).transform(compressor);
    return self;
});

def_optimize(AST_Sequence, function(self, compressor) {
    if (!compressor.option("side_effects")) return self;
    var expressions = [];
    filter_for_side_effects();
    var end = expressions.length - 1;
    trim_right_for_undefined();
    if (end == 0) {
        self = maintain_this_binding(compressor.parent(), compressor.self(), expressions[0]);
        if (!(self instanceof AST_Sequence)) self = self.optimize(compressor);
        return self;
    }
    self.expressions = expressions;
    return self;

    function filter_for_side_effects() {
        var first = first_in_statement(compressor);
        var last = self.expressions.length - 1;
        self.expressions.forEach(function(expr, index) {
            if (index < last) expr = expr.drop_side_effect_free(compressor, first);
            if (expr) {
                merge_sequence(expressions, expr);
                first = false;
            }
        });
    }

    function trim_right_for_undefined() {
        while (end > 0 && is_undefined(expressions[end], compressor)) end--;
        if (end < expressions.length - 1) {
            expressions[end] = make_node(AST_UnaryPrefix, self, {
                operator   : "void",
                expression : expressions[end]
            });
            expressions.length = end + 1;
        }
    }
});

AST_Unary.DEFMETHOD("lift_sequences", function(compressor) {
    if (compressor.option("sequences")) {
        if (this.expression instanceof AST_Sequence) {
            var x = this.expression.expressions.slice();
            var e = this.clone();
            e.expression = x.pop();
            x.push(e);
            return make_sequence(this, x).optimize(compressor);
        }
    }
    return this;
});

def_optimize(AST_UnaryPostfix, function(self, compressor) {
    return self.lift_sequences(compressor);
});

def_optimize(AST_UnaryPrefix, function(self, compressor) {
    var e = self.expression;
    if (
        self.operator == "delete" &&
        !(
            e instanceof AST_SymbolRef ||
            e instanceof AST_PropAccess ||
            e instanceof AST_Chain ||
            is_identifier_atom(e)
        )
    ) {
        return make_sequence(self, [e, make_node(AST_True, self)]).optimize(compressor);
    }
    // Short-circuit common `void 0`
    if (self.operator === "void" && e instanceof AST_Number && e.value === 0) {
        return unsafe_undefined_ref(self, compressor) || self;
    }
    var seq = self.lift_sequences(compressor);
    if (seq !== self) {
        return seq;
    }
    if (compressor.option("side_effects") && self.operator == "void") {
        e = e.drop_side_effect_free(compressor);
        if (e) {
            self.expression = e;
            return self;
        } else {
            return make_void_0(self).optimize(compressor);
        }
    }
    if (compressor.in_boolean_context()) {
        switch (self.operator) {
          case "!":
            if (e instanceof AST_UnaryPrefix && e.operator == "!") {
                // !!foo ==> foo, if we're in boolean context
                return e.expression;
            }
            if (e instanceof AST_Binary) {
                self = best_of(compressor, self, e.negate(compressor, first_in_statement(compressor)));
            }
            break;
          case "typeof":
            // typeof always returns a non-empty string, thus it's
            // always true in booleans
            // And we don't need to check if it's undeclared, because in typeof, that's OK
            return (e instanceof AST_SymbolRef ? make_node(AST_True, self) : make_sequence(self, [
                e,
                make_node(AST_True, self)
            ])).optimize(compressor);
        }
    }
    if (self.operator == "-" && e instanceof AST_Infinity) {
        e = e.transform(compressor);
    }
    if (e instanceof AST_Binary
        && (self.operator == "+" || self.operator == "-")
        && (e.operator == "*" || e.operator == "/" || e.operator == "%")) {
        return make_node(AST_Binary, self, {
            operator: e.operator,
            left: make_node(AST_UnaryPrefix, e.left, {
                operator: self.operator,
                expression: e.left
            }),
            right: e.right
        });
    }

    if (compressor.option("evaluate")) {
        // ~~x => x (in 32-bit context)
        // ~~{32 bit integer} => {32 bit integer}
        if (
            self.operator === "~"
            && self.expression instanceof AST_UnaryPrefix
            && self.expression.operator === "~"
            && (compressor.in_32_bit_context(false) || self.expression.expression.is_32_bit_integer(compressor))
        ) {
            return self.expression.expression;
        }

        // ~(x ^ y) => x ^ ~y
        if (
            self.operator === "~"
            && e instanceof AST_Binary
            && e.operator === "^"
        ) {
            if (e.left instanceof AST_UnaryPrefix && e.left.operator === "~") {
                // ~(~x ^ y) => x ^ y
                e.left = e.left.bitwise_negate(compressor, true);
            } else {
                e.right = e.right.bitwise_negate(compressor, true);
            }
            return e;
        }
    }

    if (
        self.operator != "-"
        // avoid infinite recursion of numerals
        || !(e instanceof AST_Number || e instanceof AST_Infinity || e instanceof AST_BigInt)
    ) {
        var ev = self.evaluate(compressor);
        if (ev !== self) {
            ev = make_node_from_constant(ev, self).optimize(compressor);
            return best_of(compressor, ev, self);
        }
    }
    return self;
});

AST_Binary.DEFMETHOD("lift_sequences", function(compressor) {
    if (compressor.option("sequences")) {
        if (this.left instanceof AST_Sequence) {
            var x = this.left.expressions.slice();
            var e = this.clone();
            e.left = x.pop();
            x.push(e);
            return make_sequence(this, x).optimize(compressor);
        }
        if (this.right instanceof AST_Sequence && !this.left.has_side_effects(compressor)) {
            var assign = this.operator == "=" && this.left instanceof AST_SymbolRef;
            var x = this.right.expressions;
            var last = x.length - 1;
            for (var i = 0; i < last; i++) {
                if (!assign && x[i].has_side_effects(compressor)) break;
            }
            if (i == last) {
                x = x.slice();
                var e = this.clone();
                e.right = x.pop();
                x.push(e);
                return make_sequence(this, x).optimize(compressor);
            } else if (i > 0) {
                var e = this.clone();
                e.right = make_sequence(this.right, x.slice(i));
                x = x.slice(0, i);
                x.push(e);
                return make_sequence(this, x).optimize(compressor);
            }
        }
    }
    return this;
});

var commutativeOperators = makePredicate("== === != !== * & | ^");
function is_object(node) {
    return node instanceof AST_Array
        || node instanceof AST_Lambda
        || node instanceof AST_Object
        || node instanceof AST_Class;
}

def_optimize(AST_Binary, function(self, compressor) {
    function reversible() {
        return self.left.is_constant()
            || self.right.is_constant()
            || !self.left.has_side_effects(compressor)
                && !self.right.has_side_effects(compressor);
    }
    function reverse(op) {
        if (reversible()) {
            if (op) self.operator = op;
            var tmp = self.left;
            self.left = self.right;
            self.right = tmp;
        }
    }
    if (compressor.option("lhs_constants") && commutativeOperators.has(self.operator)) {
        if (self.right.is_constant()
            && !self.left.is_constant()) {
            // if right is a constant, whatever side effects the
            // left side might have could not influence the
            // result.  hence, force switch.

            if (!(self.left instanceof AST_Binary
                  && PRECEDENCE[self.left.operator] >= PRECEDENCE[self.operator])) {
                reverse();
            }
        }
    }
    self = self.lift_sequences(compressor);
    if (compressor.option("comparisons")) switch (self.operator) {
      case "===":
      case "!==":
        var is_strict_comparison = true;
        if (
            (self.left.is_string(compressor) && self.right.is_string(compressor)) ||
            (self.left.is_number(compressor) && self.right.is_number(compressor)) ||
            (self.left.is_bigint(compressor) && self.right.is_bigint(compressor)) ||
            (self.left.is_boolean() && self.right.is_boolean()) ||
            self.left.equivalent_to(self.right)
        ) {
            self.operator = self.operator.substr(0, 2);
        }

        // XXX: intentionally falling down to the next case
      case "==":
      case "!=":
        // void 0 == x => null == x
        if (!is_strict_comparison && is_undefined(self.left, compressor)) {
            self.left = make_node(AST_Null, self.left);
        // x == void 0 => x == null
        } else if (!is_strict_comparison && is_undefined(self.right, compressor)) {
            self.right = make_node(AST_Null, self.right);
        } else if (compressor.option("typeofs")
            // "undefined" == typeof x => undefined === x
            && self.left instanceof AST_String
            && self.left.value == "undefined"
            && self.right instanceof AST_UnaryPrefix
            && self.right.operator == "typeof") {
            var expr = self.right.expression;
            if (expr instanceof AST_SymbolRef ? expr.is_declared(compressor)
                : !(expr instanceof AST_PropAccess && compressor.option("ie8"))) {
                self.right = expr;
                self.left = make_void_0(self.left).optimize(compressor);
                if (self.operator.length == 2) self.operator += "=";
            }
        } else if (compressor.option("typeofs")
            // typeof x === "undefined" => x === undefined
            && self.left instanceof AST_UnaryPrefix
            && self.left.operator == "typeof"
            && self.right instanceof AST_String
            && self.right.value == "undefined") {
            var expr = self.left.expression;
            if (expr instanceof AST_SymbolRef ? expr.is_declared(compressor)
                : !(expr instanceof AST_PropAccess && compressor.option("ie8"))) {
                self.left = expr;
                self.right = make_void_0(self.right).optimize(compressor);
                if (self.operator.length == 2) self.operator += "=";
            }
        } else if (self.left instanceof AST_SymbolRef
            // obj !== obj => false
            && self.right instanceof AST_SymbolRef
            && self.left.definition() === self.right.definition()
            && is_object(self.left.fixed_value())) {
            return make_node(self.operator[0] == "=" ? AST_True : AST_False, self);
        } else if (self.left.is_32_bit_integer(compressor) && self.right.is_32_bit_integer(compressor)) {
            const not = node => make_node(AST_UnaryPrefix, node, {
                operator: "!",
                expression: node
            });
            const booleanify = (node, truthy) => {
                if (truthy) {
                    return compressor.in_boolean_context()
                        ? node
                        : not(not(node));
                } else {
                    return not(node);
                }
            };

            // The only falsy 32-bit integer is 0
            if (self.left instanceof AST_Number && self.left.value === 0) {
                return booleanify(self.right, self.operator[0] === "!");
            }
            if (self.right instanceof AST_Number && self.right.value === 0) {
                return booleanify(self.left, self.operator[0] === "!");
            }

            // Mask all-bits check
            // (x & 0xFF) != 0xFF => !(~x & 0xFF)
            let and_op, x, mask;
            if (
                (and_op =
                    self.left instanceof AST_Binary ? self.left
                    : self.right instanceof AST_Binary ? self.right : null)
                && (mask = and_op === self.left ? self.right : self.left)
                && and_op.operator === "&"
                && mask instanceof AST_Number
                && mask.is_32_bit_integer(compressor)
                && (x =
                    and_op.left.equivalent_to(mask) ? and_op.right
                    : and_op.right.equivalent_to(mask) ? and_op.left : null)
            ) {
                let optimized = booleanify(make_node(AST_Binary, self, {
                    operator: "&",
                    left: mask,
                    right: make_node(AST_UnaryPrefix, self, {
                        operator: "~",
                        expression: x
                    })
                }), self.operator[0] === "!");

                return best_of(compressor, optimized, self);
            }
        }
        break;
      case "&&":
      case "||":
        var lhs = self.left;
        if (lhs.operator == self.operator) {
            lhs = lhs.right;
        }
        if (lhs instanceof AST_Binary
            && lhs.operator == (self.operator == "&&" ? "!==" : "===")
            && self.right instanceof AST_Binary
            && lhs.operator == self.right.operator
            && (is_undefined(lhs.left, compressor) && self.right.left instanceof AST_Null
                || lhs.left instanceof AST_Null && is_undefined(self.right.left, compressor))
            && !lhs.right.has_side_effects(compressor)
            && lhs.right.equivalent_to(self.right.right)) {
            var combined = make_node(AST_Binary, self, {
                operator: lhs.operator.slice(0, -1),
                left: make_node(AST_Null, self),
                right: lhs.right
            });
            if (lhs !== self.left) {
                combined = make_node(AST_Binary, self, {
                    operator: self.operator,
                    left: self.left.left,
                    right: combined
                });
            }
            return combined;
        }
        break;
    }
    if (self.operator == "+" && compressor.in_boolean_context()) {
        var ll = self.left.evaluate(compressor);
        var rr = self.right.evaluate(compressor);
        if (ll && typeof ll == "string") {
            return make_sequence(self, [
                self.right,
                make_node(AST_True, self)
            ]).optimize(compressor);
        }
        if (rr && typeof rr == "string") {
            return make_sequence(self, [
                self.left,
                make_node(AST_True, self)
            ]).optimize(compressor);
        }
    }
    if (compressor.option("comparisons") && self.is_boolean()) {
        if (!(compressor.parent() instanceof AST_Binary)
            || compressor.parent() instanceof AST_Assign) {
            var negated = make_node(AST_UnaryPrefix, self, {
                operator: "!",
                expression: self.negate(compressor, first_in_statement(compressor))
            });
            self = best_of(compressor, self, negated);
        }
        if (compressor.option("unsafe_comps")) {
            switch (self.operator) {
              case "<": reverse(">"); break;
              case "<=": reverse(">="); break;
            }
        }
    }
    if (self.operator == "+") {
        if (self.right instanceof AST_String
            && self.right.getValue() == ""
            && self.left.is_string(compressor)) {
            return self.left;
        }
        if (self.left instanceof AST_String
            && self.left.getValue() == ""
            && self.right.is_string(compressor)) {
            return self.right;
        }
        if (self.left instanceof AST_Binary
            && self.left.operator == "+"
            && self.left.left instanceof AST_String
            && self.left.left.getValue() == ""
            && self.right.is_string(compressor)) {
            self.left = self.left.right;
            return self;
        }
    }
    if (compressor.option("evaluate")) {
        switch (self.operator) {
          case "&&":
            var ll = has_flag(self.left, TRUTHY)
                ? true
                : has_flag(self.left, FALSY)
                    ? false
                    : self.left.evaluate(compressor);
            if (!ll) {
                return maintain_this_binding(compressor.parent(), compressor.self(), self.left).optimize(compressor);
            } else if (!(ll instanceof AST_Node)) {
                return make_sequence(self, [ self.left, self.right ]).optimize(compressor);
            }
            var rr = self.right.evaluate(compressor);
            if (!rr) {
                if (compressor.in_boolean_context()) {
                    return make_sequence(self, [
                        self.left,
                        make_node(AST_False, self)
                    ]).optimize(compressor);
                } else {
                    set_flag(self, FALSY);
                }
            } else if (!(rr instanceof AST_Node)) {
                var parent = compressor.parent();
                if (parent.operator == "&&" && parent.left === compressor.self() || compressor.in_boolean_context()) {
                    return self.left.optimize(compressor);
                }
            }
            // x || false && y ---> x ? y : false
            if (self.left.operator == "||") {
                var lr = self.left.right.evaluate(compressor);
                if (!lr) return make_node(AST_Conditional, self, {
                    condition: self.left.left,
                    consequent: self.right,
                    alternative: self.left.right
                }).optimize(compressor);
            }
            break;
          case "||":
            var ll = has_flag(self.left, TRUTHY)
              ? true
              : has_flag(self.left, FALSY)
                ? false
                : self.left.evaluate(compressor);
            if (!ll) {
                return make_sequence(self, [ self.left, self.right ]).optimize(compressor);
            } else if (!(ll instanceof AST_Node)) {
                return maintain_this_binding(compressor.parent(), compressor.self(), self.left).optimize(compressor);
            }
            var rr = self.right.evaluate(compressor);
            if (!rr) {
                var parent = compressor.parent();
                if (parent.operator == "||" && parent.left === compressor.self() || compressor.in_boolean_context()) {
                    return self.left.optimize(compressor);
                }
            } else if (!(rr instanceof AST_Node)) {
                if (compressor.in_boolean_context()) {
                    return make_sequence(self, [
                        self.left,
                        make_node(AST_True, self)
                    ]).optimize(compressor);
                } else {
                    set_flag(self, TRUTHY);
                }
            }
            if (self.left.operator == "&&") {
                var lr = self.left.right.evaluate(compressor);
                if (lr && !(lr instanceof AST_Node)) return make_node(AST_Conditional, self, {
                    condition: self.left.left,
                    consequent: self.left.right,
                    alternative: self.right
                }).optimize(compressor);
            }
            break;
          case "??":
            if (is_nullish(self.left, compressor)) {
                return self.right;
            }

            var ll = self.left.evaluate(compressor);
            if (!(ll instanceof AST_Node)) {
                // if we know the value for sure we can simply compute right away.
                return ll == null ? self.right : self.left;
            }

            if (compressor.in_boolean_context()) {
                const rr = self.right.evaluate(compressor);
                if (!(rr instanceof AST_Node) && !rr) {
                    return self.left;
                }
            }
        }
        var associative = true;
        switch (self.operator) {
          case "+":
            // (x + "foo") + "bar" => x + "foobar"
            if (self.right instanceof AST_Constant
                && self.left instanceof AST_Binary
                && self.left.operator == "+"
                && self.left.is_string(compressor)) {
                var binary = make_node(AST_Binary, self, {
                    operator: "+",
                    left: self.left.right,
                    right: self.right,
                });
                var r = binary.optimize(compressor);
                if (binary !== r) {
                    self = make_node(AST_Binary, self, {
                        operator: "+",
                        left: self.left.left,
                        right: r
                    });
                }
            }
            // (x + "foo") + ("bar" + y) => (x + "foobar") + y
            if (self.left instanceof AST_Binary
                && self.left.operator == "+"
                && self.left.is_string(compressor)
                && self.right instanceof AST_Binary
                && self.right.operator == "+"
                && self.right.is_string(compressor)) {
                var binary = make_node(AST_Binary, self, {
                    operator: "+",
                    left: self.left.right,
                    right: self.right.left,
                });
                var m = binary.optimize(compressor);
                if (binary !== m) {
                    self = make_node(AST_Binary, self, {
                        operator: "+",
                        left: make_node(AST_Binary, self.left, {
                            operator: "+",
                            left: self.left.left,
                            right: m
                        }),
                        right: self.right.right
                    });
                }
            }
            // a + -b => a - b
            if (self.right instanceof AST_UnaryPrefix
                && self.right.operator == "-"
                && self.left.is_number_or_bigint(compressor)) {
                self = make_node(AST_Binary, self, {
                    operator: "-",
                    left: self.left,
                    right: self.right.expression
                });
                break;
            }
            // -a + b => b - a
            if (self.left instanceof AST_UnaryPrefix
                && self.left.operator == "-"
                && reversible()
                && self.right.is_number_or_bigint(compressor)) {
                self = make_node(AST_Binary, self, {
                    operator: "-",
                    left: self.right,
                    right: self.left.expression
                });
                break;
            }
            // `foo${bar}baz` + 1 => `foo${bar}baz1`
            if (self.left instanceof AST_TemplateString) {
                var l = self.left;
                var r = self.right.evaluate(compressor);
                if (r != self.right) {
                    l.segments[l.segments.length - 1].value += String(r);
                    return l;
                }
            }
            // 1 + `foo${bar}baz` => `1foo${bar}baz`
            if (self.right instanceof AST_TemplateString) {
                var r = self.right;
                var l = self.left.evaluate(compressor);
                if (l != self.left) {
                    r.segments[0].value = String(l) + r.segments[0].value;
                    return r;
                }
            }
            // `1${bar}2` + `foo${bar}baz` => `1${bar}2foo${bar}baz`
            if (self.left instanceof AST_TemplateString
                && self.right instanceof AST_TemplateString) {
                var l = self.left;
                var segments = l.segments;
                var r = self.right;
                segments[segments.length - 1].value += r.segments[0].value;
                for (var i = 1; i < r.segments.length; i++) {
                    segments.push(r.segments[i]);
                }
                return l;
            }
          case "*":
            associative = compressor.option("unsafe_math");
          case "&":
          case "|":
          case "^":
            // a + +b => +b + a
            if (
                self.left.is_number_or_bigint(compressor)
                && self.right.is_number_or_bigint(compressor)
                && reversible()
                && !(self.left instanceof AST_Binary
                    && self.left.operator != self.operator
                    && PRECEDENCE[self.left.operator] >= PRECEDENCE[self.operator])) {
                var reversed = make_node(AST_Binary, self, {
                    operator: self.operator,
                    left: self.right,
                    right: self.left
                });
                if (self.right instanceof AST_Constant
                    && !(self.left instanceof AST_Constant)) {
                    self = best_of(compressor, reversed, self);
                } else {
                    self = best_of(compressor, self, reversed);
                }
            }
            if (associative && self.is_number_or_bigint(compressor)) {
                // a + (b + c) => (a + b) + c
                if (self.right instanceof AST_Binary
                    && self.right.operator == self.operator) {
                    self = make_node(AST_Binary, self, {
                        operator: self.operator,
                        left: make_node(AST_Binary, self.left, {
                            operator: self.operator,
                            left: self.left,
                            right: self.right.left,
                            start: self.left.start,
                            end: self.right.left.end
                        }),
                        right: self.right.right
                    });
                }
                // (n + 2) + 3 => 5 + n
                // (2 * n) * 3 => 6 + n
                if (self.right instanceof AST_Constant
                    && self.left instanceof AST_Binary
                    && self.left.operator == self.operator) {
                    if (self.left.left instanceof AST_Constant) {
                        self = make_node(AST_Binary, self, {
                            operator: self.operator,
                            left: make_node(AST_Binary, self.left, {
                                operator: self.operator,
                                left: self.left.left,
                                right: self.right,
                                start: self.left.left.start,
                                end: self.right.end
                            }),
                            right: self.left.right
                        });
                    } else if (self.left.right instanceof AST_Constant) {
                        self = make_node(AST_Binary, self, {
                            operator: self.operator,
                            left: make_node(AST_Binary, self.left, {
                                operator: self.operator,
                                left: self.left.right,
                                right: self.right,
                                start: self.left.right.start,
                                end: self.right.end
                            }),
                            right: self.left.left
                        });
                    }
                }
                // (a | 1) | (2 | d) => (3 | a) | b
                if (self.left instanceof AST_Binary
                    && self.left.operator == self.operator
                    && self.left.right instanceof AST_Constant
                    && self.right instanceof AST_Binary
                    && self.right.operator == self.operator
                    && self.right.left instanceof AST_Constant) {
                    self = make_node(AST_Binary, self, {
                        operator: self.operator,
                        left: make_node(AST_Binary, self.left, {
                            operator: self.operator,
                            left: make_node(AST_Binary, self.left.left, {
                                operator: self.operator,
                                left: self.left.right,
                                right: self.right.left,
                                start: self.left.right.start,
                                end: self.right.left.end
                            }),
                            right: self.left.left
                        }),
                        right: self.right.right
                    });
                }
            }
        }

        // bitwise ops
        if (bitwise_binop.has(self.operator)) {
            // Use De Morgan's laws
            // z & (X | y)
            // => z & X (given y & z === 0)
            // => z & X | {y & z} (given y & z !== 0)
            let y, z, x_node, y_node, z_node = self.left;
            if (
                self.operator === "&"
                && self.right instanceof AST_Binary
                && self.right.operator === "|"
                && typeof (z = self.left.evaluate(compressor)) === "number"
            ) {
                if (typeof (y = self.right.right.evaluate(compressor)) === "number") {
                    // z & (X | y)
                    x_node = self.right.left;
                    y_node = self.right.right;
                } else if (typeof (y = self.right.left.evaluate(compressor)) === "number") {
                    // z & (y | X)
                    x_node = self.right.right;
                    y_node = self.right.left;
                }

                if (x_node && y_node) {
                    if ((y & z) === 0) {
                        self = make_node(AST_Binary, self, {
                            operator: self.operator,
                            left: z_node,
                            right: x_node
                        });
                    } else {
                        const reordered_ops = make_node(AST_Binary, self, {
                            operator: "|",
                            left: make_node(AST_Binary, self, {
                                operator: "&",
                                left: x_node,
                                right: z_node
                            }),
                            right: make_node_from_constant(y & z, y_node),
                        });

                        self = best_of(compressor, self, reordered_ops);
                    }
                }
            }

            // x | x => 0 | x
            // x & x => 0 | x
            if (
                (self.operator === "|" || self.operator === "&")
                && self.left.equivalent_to(self.right)
                && !self.left.has_side_effects(compressor)
                && compressor.in_32_bit_context(true)
            ) {
                self.left = make_node(AST_Number, self, { value: 0 });
                self.operator = "|";
            }

            // ~x ^ ~y => x ^ y
            if (
                self.operator === "^"
                && self.left instanceof AST_UnaryPrefix
                && self.left.operator === "~"
                && self.right instanceof AST_UnaryPrefix
                && self.right.operator === "~"
            ) {
                self = make_node(AST_Binary, self, {
                    operator: "^",
                    left: self.left.expression,
                    right: self.right.expression
                });
            }


            // Shifts that do nothing
            // {anything} >> 0 => {anything} | 0
            // {anything} << 0 => {anything} | 0
            if (
                (self.operator === "<<" || self.operator === ">>")
                && self.right instanceof AST_Number && self.right.value === 0
            ) {
                self.operator = "|";
            }

            // Find useless to-bitwise conversions
            // {32 bit integer} | 0 => {32 bit integer}
            // {32 bit integer} ^ 0 => {32 bit integer}
            const zero_side = self.right instanceof AST_Number && self.right.value === 0 ? self.right
                : self.left instanceof AST_Number && self.left.value === 0 ? self.left
                : null;
            const non_zero_side = zero_side && (zero_side === self.right ? self.left : self.right);
            if (
                zero_side
                && (self.operator === "|" || self.operator === "^")
                && (non_zero_side.is_32_bit_integer(compressor) || compressor.in_32_bit_context(true))
            ) {
                return non_zero_side;
            }

            // {anything} & 0 => 0
            if (
                zero_side
                && self.operator === "&"
                && !non_zero_side.has_side_effects(compressor)
                && non_zero_side.is_32_bit_integer(compressor)
            ) {
                return zero_side;
            }

            // ~0 is all ones, as well as -1.
            // We can ellide some operations with it.
            const is_full_mask = (node) =>
                node instanceof AST_Number && node.value === -1
                ||
                    node instanceof AST_UnaryPrefix
                    && node.operator === "-"
                    && node.expression instanceof AST_Number
                    && node.expression.value === 1;

            const full_mask = is_full_mask(self.right) ? self.right
                : is_full_mask(self.left) ? self.left
                : null;
            const other_side = (full_mask === self.right ? self.left : self.right);

            // {32 bit integer} & -1 => {32 bit integer}
            if (
                full_mask
                && self.operator === "&"
                && (
                    other_side.is_32_bit_integer(compressor)
                    || compressor.in_32_bit_context(true)
                )
            ) {
                return other_side;
            }

            // {anything} ^ -1 => ~{anything}
            if (
                full_mask
                && self.operator === "^"
                && (
                    other_side.is_32_bit_integer(compressor)
                    || compressor.in_32_bit_context(true)
                )
            ) {
                return other_side.bitwise_negate(compressor);
            }
        }
    }
    // x && (y && z)  ==>  x && y && z
    // x || (y || z)  ==>  x || y || z
    // x + ("y" + z)  ==>  x + "y" + z
    // "x" + (y + "z")==>  "x" + y + "z"
    if (self.right instanceof AST_Binary
        && self.right.operator == self.operator
        && (lazy_op.has(self.operator)
            || (self.operator == "+"
                && (self.right.left.is_string(compressor)
                    || (self.left.is_string(compressor)
                        && self.right.right.is_string(compressor)))))
    ) {
        self.left = make_node(AST_Binary, self.left, {
            operator : self.operator,
            left     : self.left.transform(compressor),
            right    : self.right.left.transform(compressor)
        });
        self.right = self.right.right.transform(compressor);
        return self.transform(compressor);
    }
    var ev = self.evaluate(compressor);
    if (ev !== self) {
        ev = make_node_from_constant(ev, self).optimize(compressor);
        return best_of(compressor, ev, self);
    }
    return self;
});

def_optimize(AST_SymbolExport, function(self) {
    return self;
});

def_optimize(AST_SymbolRef, function(self, compressor) {
    if (
        !compressor.option("ie8")
        && is_undeclared_ref(self)
        && !compressor.find_parent(AST_With)
    ) {
        switch (self.name) {
          case "undefined":
            return make_node(AST_Undefined, self).optimize(compressor);
          case "NaN":
            return make_node(AST_NaN, self).optimize(compressor);
          case "Infinity":
            return make_node(AST_Infinity, self).optimize(compressor);
        }
    }

    if (compressor.option("reduce_vars") && !compressor.is_lhs()) {
        return inline_into_symbolref(self, compressor);
    } else {
        return self;
    }
});

function is_atomic(lhs, self) {
    return lhs instanceof AST_SymbolRef || lhs.TYPE === self.TYPE;
}

/** Apply the `unsafe_undefined` option: find a variable called `undefined` and turn `self` into a reference to it. */
function unsafe_undefined_ref(self, compressor) {
    if (compressor.option("unsafe_undefined")) {
        var undef = find_variable(compressor, "undefined");
        if (undef) {
            var ref = make_node(AST_SymbolRef, self, {
                name   : "undefined",
                scope  : undef.scope,
                thedef : undef
            });
            set_flag(ref, UNDEFINED);
            return ref;
        }
    }
    return null;
}

def_optimize(AST_Undefined, function(self, compressor) {
    var symbolref = unsafe_undefined_ref(self, compressor);
    if (symbolref) return symbolref;
    var lhs = compressor.is_lhs();
    if (lhs && is_atomic(lhs, self)) return self;
    return make_void_0(self);
});

def_optimize(AST_Infinity, function(self, compressor) {
    var lhs = compressor.is_lhs();
    if (lhs && is_atomic(lhs, self)) return self;
    if (
        compressor.option("keep_infinity")
        && !(lhs && !is_atomic(lhs, self))
        && !find_variable(compressor, "Infinity")
    ) {
        return self;
    }
    return make_node(AST_Binary, self, {
        operator: "/",
        left: make_node(AST_Number, self, {
            value: 1
        }),
        right: make_node(AST_Number, self, {
            value: 0
        })
    });
});

def_optimize(AST_NaN, function(self, compressor) {
    var lhs = compressor.is_lhs();
    if (lhs && !is_atomic(lhs, self)
        || find_variable(compressor, "NaN")) {
        return make_node(AST_Binary, self, {
            operator: "/",
            left: make_node(AST_Number, self, {
                value: 0
            }),
            right: make_node(AST_Number, self, {
                value: 0
            })
        });
    }
    return self;
});

const ASSIGN_OPS = makePredicate("+ - / * % >> << >>> | ^ &");
const ASSIGN_OPS_COMMUTATIVE = makePredicate("* | ^ &");
def_optimize(AST_Assign, function(self, compressor) {
    if (self.logical) {
        return self.lift_sequences(compressor);
    }

    var def;
    // x = x ---> x
    if (
        self.operator === "="
        && self.left instanceof AST_SymbolRef
        && self.left.name !== "arguments"
        && !(def = self.left.definition()).undeclared
        && self.right.equivalent_to(self.left)
    ) {
        return self.right;
    }

    if (compressor.option("dead_code")
        && self.left instanceof AST_SymbolRef
        && (def = self.left.definition()).scope === compressor.find_parent(AST_Lambda)) {
        var level = 0, node, parent = self;
        do {
            node = parent;
            parent = compressor.parent(level++);
            if (parent instanceof AST_Exit) {
                if (in_try(level, parent)) break;
                if (is_reachable(def.scope, [ def ])) break;
                if (self.operator == "=") return self.right;
                def.fixed = false;
                return make_node(AST_Binary, self, {
                    operator: self.operator.slice(0, -1),
                    left: self.left,
                    right: self.right
                }).optimize(compressor);
            }
        } while (parent instanceof AST_Binary && parent.right === node
            || parent instanceof AST_Sequence && parent.tail_node() === node);
    }
    self = self.lift_sequences(compressor);

    if (self.operator == "=" && self.left instanceof AST_SymbolRef && self.right instanceof AST_Binary) {
        // x = expr1 OP expr2
        if (self.right.left instanceof AST_SymbolRef
            && self.right.left.name == self.left.name
            && ASSIGN_OPS.has(self.right.operator)) {
            // x = x - 2  --->  x -= 2
            self.operator = self.right.operator + "=";
            self.right = self.right.right;
        } else if (self.right.right instanceof AST_SymbolRef
            && self.right.right.name == self.left.name
            && ASSIGN_OPS_COMMUTATIVE.has(self.right.operator)
            && !self.right.left.has_side_effects(compressor)) {
            // x = 2 & x  --->  x &= 2
            self.operator = self.right.operator + "=";
            self.right = self.right.left;
        }
    }
    return self;

    function in_try(level, node) {
        function may_assignment_throw() {
            const right = self.right;
            self.right = make_node(AST_Null, right);
            const may_throw = node.may_throw(compressor);
            self.right = right;

            return may_throw;
        }

        var stop_at = self.left.definition().scope.get_defun_scope();
        var parent;
        while ((parent = compressor.parent(level++)) !== stop_at) {
            if (parent instanceof AST_Try) {
                if (parent.bfinally) return true;
                if (parent.bcatch && may_assignment_throw()) return true;
            }
        }
    }
});

def_optimize(AST_DefaultAssign, function(self, compressor) {
    if (!compressor.option("evaluate")) {
        return self;
    }
    var evaluateRight = self.right.evaluate(compressor);

    // `[x = undefined] = foo` ---> `[x] = foo`
    // `(arg = undefined) => ...` ---> `(arg) => ...` (unless `keep_fargs`)
    // `((arg = undefined) => ...)()` ---> `((arg) => ...)()`
    let lambda, iife;
    if (evaluateRight === undefined) {
        if (
            (lambda = compressor.parent()) instanceof AST_Lambda
                ? (
                    compressor.option("keep_fargs") === false
                    || (iife = compressor.parent(1)).TYPE === "Call"
                        && iife.expression === lambda
                )
                : true
        ) {
            self = self.left;
        }
    } else if (evaluateRight !== self.right) {
        evaluateRight = make_node_from_constant(evaluateRight, self.right);
        self.right = best_of_expression(evaluateRight, self.right);
    }

    return self;
});

function is_nullish_check(check, check_subject, compressor) {
    if (check_subject.may_throw(compressor)) return false;

    let nullish_side;

    // foo == null
    if (
        check instanceof AST_Binary
        && check.operator === "=="
        // which side is nullish?
        && (
            (nullish_side = is_nullish(check.left, compressor) && check.left)
            || (nullish_side = is_nullish(check.right, compressor) && check.right)
        )
        // is the other side the same as the check_subject
        && (
            nullish_side === check.left
                ? check.right
                : check.left
        ).equivalent_to(check_subject)
    ) {
        return true;
    }

    // foo === null || foo === undefined
    if (check instanceof AST_Binary && check.operator === "||") {
        let null_cmp;
        let undefined_cmp;

        const find_comparison = cmp => {
            if (!(
                cmp instanceof AST_Binary
                && (cmp.operator === "===" || cmp.operator === "==")
            )) {
                return false;
            }

            let found = 0;
            let defined_side;

            if (cmp.left instanceof AST_Null) {
                found++;
                null_cmp = cmp;
                defined_side = cmp.right;
            }
            if (cmp.right instanceof AST_Null) {
                found++;
                null_cmp = cmp;
                defined_side = cmp.left;
            }
            if (is_undefined(cmp.left, compressor)) {
                found++;
                undefined_cmp = cmp;
                defined_side = cmp.right;
            }
            if (is_undefined(cmp.right, compressor)) {
                found++;
                undefined_cmp = cmp;
                defined_side = cmp.left;
            }

            if (found !== 1) {
                return false;
            }

            if (!defined_side.equivalent_to(check_subject)) {
                return false;
            }

            return true;
        };

        if (!find_comparison(check.left)) return false;
        if (!find_comparison(check.right)) return false;

        if (null_cmp && undefined_cmp && null_cmp !== undefined_cmp) {
            return true;
        }
    }

    return false;
}

def_optimize(AST_Conditional, function(self, compressor) {
    if (!compressor.option("conditionals")) return self;
    // This looks like lift_sequences(), should probably be under "sequences"
    if (self.condition instanceof AST_Sequence) {
        var expressions = self.condition.expressions.slice();
        self.condition = expressions.pop();
        expressions.push(self);
        return make_sequence(self, expressions);
    }
    var cond = self.condition.evaluate(compressor);
    if (cond !== self.condition) {
        if (cond) {
            return maintain_this_binding(compressor.parent(), compressor.self(), self.consequent);
        } else {
            return maintain_this_binding(compressor.parent(), compressor.self(), self.alternative);
        }
    }
    var negated = cond.negate(compressor, first_in_statement(compressor));
    if (best_of(compressor, cond, negated) === negated) {
        self = make_node(AST_Conditional, self, {
            condition: negated,
            consequent: self.alternative,
            alternative: self.consequent
        });
    }
    var condition = self.condition;
    var consequent = self.consequent;
    var alternative = self.alternative;
    // x?x:y --> x||y
    if (condition instanceof AST_SymbolRef
        && consequent instanceof AST_SymbolRef
        && condition.definition() === consequent.definition()) {
        return make_node(AST_Binary, self, {
            operator: "||",
            left: condition,
            right: alternative
        });
    }
    // if (foo) exp = something; else exp = something_else;
    //                   |
    //                   v
    // exp = foo ? something : something_else;
    if (
        consequent instanceof AST_Assign
        && alternative instanceof AST_Assign
        && consequent.operator === alternative.operator
        && consequent.logical === alternative.logical
        && consequent.left.equivalent_to(alternative.left)
        && (!self.condition.has_side_effects(compressor)
            || consequent.operator == "="
                && !consequent.left.has_side_effects(compressor))
    ) {
        return make_node(AST_Assign, self, {
            operator: consequent.operator,
            left: consequent.left,
            logical: consequent.logical,
            right: make_node(AST_Conditional, self, {
                condition: self.condition,
                consequent: consequent.right,
                alternative: alternative.right
            })
        });
    }
    // x ? y(a) : y(b) --> y(x ? a : b)
    var arg_index;
    if (consequent instanceof AST_Call
        && alternative.TYPE === consequent.TYPE
        && consequent.args.length > 0
        && consequent.args.length == alternative.args.length
        && consequent.expression.equivalent_to(alternative.expression)
        && !self.condition.has_side_effects(compressor)
        && !consequent.expression.has_side_effects(compressor)
        && typeof (arg_index = single_arg_diff()) == "number") {
        var node = consequent.clone();
        node.args[arg_index] = make_node(AST_Conditional, self, {
            condition: self.condition,
            consequent: consequent.args[arg_index],
            alternative: alternative.args[arg_index]
        });
        return node;
    }
    // a ? b : c ? b : d --> (a || c) ? b : d
    if (alternative instanceof AST_Conditional
        && consequent.equivalent_to(alternative.consequent)) {
        return make_node(AST_Conditional, self, {
            condition: make_node(AST_Binary, self, {
                operator: "||",
                left: condition,
                right: alternative.condition
            }),
            consequent: consequent,
            alternative: alternative.alternative
        }).optimize(compressor);
    }

    // a == null ? b : a -> a ?? b
    if (
        compressor.option("ecma") >= 2020 &&
        is_nullish_check(condition, alternative, compressor)
    ) {
        return make_node(AST_Binary, self, {
            operator: "??",
            left: alternative,
            right: consequent
        }).optimize(compressor);
    }

    // a ? b : (c, b) --> (a || c), b
    if (alternative instanceof AST_Sequence
        && consequent.equivalent_to(alternative.expressions[alternative.expressions.length - 1])) {
        return make_sequence(self, [
            make_node(AST_Binary, self, {
                operator: "||",
                left: condition,
                right: make_sequence(self, alternative.expressions.slice(0, -1))
            }),
            consequent
        ]).optimize(compressor);
    }
    // a ? b : (c && b) --> (a || c) && b
    if (alternative instanceof AST_Binary
        && alternative.operator == "&&"
        && consequent.equivalent_to(alternative.right)) {
        return make_node(AST_Binary, self, {
            operator: "&&",
            left: make_node(AST_Binary, self, {
                operator: "||",
                left: condition,
                right: alternative.left
            }),
            right: consequent
        }).optimize(compressor);
    }
    // x?y?z:a:a --> x&&y?z:a
    if (consequent instanceof AST_Conditional
        && consequent.alternative.equivalent_to(alternative)) {
        return make_node(AST_Conditional, self, {
            condition: make_node(AST_Binary, self, {
                left: self.condition,
                operator: "&&",
                right: consequent.condition
            }),
            consequent: consequent.consequent,
            alternative: alternative
        });
    }
    // x ? y : y --> x, y
    if (consequent.equivalent_to(alternative)) {
        return make_sequence(self, [
            self.condition,
            consequent
        ]).optimize(compressor);
    }
    // x ? y || z : z --> x && y || z
    if (consequent instanceof AST_Binary
        && consequent.operator == "||"
        && consequent.right.equivalent_to(alternative)) {
        return make_node(AST_Binary, self, {
            operator: "||",
            left: make_node(AST_Binary, self, {
                operator: "&&",
                left: self.condition,
                right: consequent.left
            }),
            right: alternative
        }).optimize(compressor);
    }

    const in_bool = compressor.in_boolean_context();
    if (is_true(self.consequent)) {
        if (is_false(self.alternative)) {
            // c ? true : false ---> !!c
            return booleanize(self.condition);
        }
        // c ? true : x ---> !!c || x
        return make_node(AST_Binary, self, {
            operator: "||",
            left: booleanize(self.condition),
            right: self.alternative
        });
    }
    if (is_false(self.consequent)) {
        if (is_true(self.alternative)) {
            // c ? false : true ---> !c
            return booleanize(self.condition.negate(compressor));
        }
        // c ? false : x ---> !c && x
        return make_node(AST_Binary, self, {
            operator: "&&",
            left: booleanize(self.condition.negate(compressor)),
            right: self.alternative
        });
    }
    if (is_true(self.alternative)) {
        // c ? x : true ---> !c || x
        return make_node(AST_Binary, self, {
            operator: "||",
            left: booleanize(self.condition.negate(compressor)),
            right: self.consequent
        });
    }
    if (is_false(self.alternative)) {
        // c ? x : false ---> !!c && x
        return make_node(AST_Binary, self, {
            operator: "&&",
            left: booleanize(self.condition),
            right: self.consequent
        });
    }

    return self;

    function booleanize(node) {
        if (node.is_boolean()) return node;
        // !!expression
        return make_node(AST_UnaryPrefix, node, {
            operator: "!",
            expression: node.negate(compressor)
        });
    }

    // AST_True or !0
    function is_true(node) {
        return node instanceof AST_True
            || in_bool
                && node instanceof AST_Constant
                && node.getValue()
            || (node instanceof AST_UnaryPrefix
                && node.operator == "!"
                && node.expression instanceof AST_Constant
                && !node.expression.getValue());
    }
    // AST_False or !1
    function is_false(node) {
        return node instanceof AST_False
            || in_bool
                && node instanceof AST_Constant
                && !node.getValue()
            || (node instanceof AST_UnaryPrefix
                && node.operator == "!"
                && node.expression instanceof AST_Constant
                && node.expression.getValue());
    }

    function single_arg_diff() {
        var a = consequent.args;
        var b = alternative.args;
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i] instanceof AST_Expansion) return;
            if (!a[i].equivalent_to(b[i])) {
                if (b[i] instanceof AST_Expansion) return;
                for (var j = i + 1; j < len; j++) {
                    if (a[j] instanceof AST_Expansion) return;
                    if (!a[j].equivalent_to(b[j])) return;
                }
                return i;
            }
        }
    }
});

def_optimize(AST_Boolean, function(self, compressor) {
    if (compressor.in_boolean_context()) return make_node(AST_Number, self, {
        value: +self.value
    });
    var p = compressor.parent();
    if (compressor.option("booleans_as_integers")) {
        if (p instanceof AST_Binary && (p.operator == "===" || p.operator == "!==")) {
            p.operator = p.operator.replace(/=$/, "");
        }
        return make_node(AST_Number, self, {
            value: +self.value
        });
    }
    if (compressor.option("booleans")) {
        if (p instanceof AST_Binary && (p.operator == "=="
                                        || p.operator == "!=")) {
            return make_node(AST_Number, self, {
                value: +self.value
            });
        }
        return make_node(AST_UnaryPrefix, self, {
            operator: "!",
            expression: make_node(AST_Number, self, {
                value: 1 - self.value
            })
        });
    }
    return self;
});

function safe_to_flatten(value, compressor) {
    if (value instanceof AST_SymbolRef) {
        value = value.fixed_value();
    }
    if (!value) return false;
    if (!(value instanceof AST_Lambda || value instanceof AST_Class)) return true;
    if (!(value instanceof AST_Lambda && value.contains_this())) return true;
    return compressor.parent() instanceof AST_New;
}

AST_PropAccess.DEFMETHOD("flatten_object", function(key, compressor) {
    if (!compressor.option("properties")) return;
    if (key === "__proto__") return;
    if (this instanceof AST_DotHash) return;

    var arrows = compressor.option("unsafe_arrows") && compressor.option("ecma") >= 2015;
    var expr = this.expression;
    if (expr instanceof AST_Object) {
        var props = expr.properties;

        for (var i = props.length; --i >= 0;) {
            var prop = props[i];

            if ("" + (prop instanceof AST_ConciseMethod ? prop.key.name : prop.key) == key) {
                const all_props_flattenable = props.every((p) =>
                    (p instanceof AST_ObjectKeyVal
                        || arrows && p instanceof AST_ConciseMethod && !p.value.is_generator
                    )
                    && !p.computed_key()
                );

                if (!all_props_flattenable) return;
                if (!safe_to_flatten(prop.value, compressor)) return;

                return make_node(AST_Sub, this, {
                    expression: make_node(AST_Array, expr, {
                        elements: props.map(function(prop) {
                            var v = prop.value;
                            if (v instanceof AST_Accessor) {
                                v = make_node(AST_Function, v, v);
                            }

                            var k = prop.key;
                            if (k instanceof AST_Node && !(k instanceof AST_SymbolMethod)) {
                                return make_sequence(prop, [ k, v ]);
                            }

                            return v;
                        })
                    }),
                    property: make_node(AST_Number, this, {
                        value: i
                    })
                });
            }
        }
    }
});

def_optimize(AST_Sub, function(self, compressor) {
    var expr = self.expression;
    var prop = self.property;
    if (compressor.option("properties")) {
        var key = prop.evaluate(compressor);
        if (key !== prop) {
            if (typeof key == "string") {
                if (key == "undefined") {
                    key = undefined;
                } else {
                    var value = parseFloat(key);
                    if (value.toString() == key) {
                        key = value;
                    }
                }
            }
            prop = self.property = best_of_expression(
                prop,
                make_node_from_constant(key, prop).transform(compressor)
            );
            var property = "" + key;
            if (is_basic_identifier_string(property)
                && property.length <= prop.size() + 1) {
                return make_node(AST_Dot, self, {
                    expression: expr,
                    optional: self.optional,
                    property: property,
                    quote: prop.quote,
                }).optimize(compressor);
            }
        }
    }
    var fn;
    OPT_ARGUMENTS: if (compressor.option("arguments")
        && expr instanceof AST_SymbolRef
        && expr.name == "arguments"
        && expr.definition().orig.length == 1
        && (fn = expr.scope) instanceof AST_Lambda
        && fn.uses_arguments
        && !(fn instanceof AST_Arrow)
        && prop instanceof AST_Number) {
        var index = prop.getValue();
        var params = new Set();
        var argnames = fn.argnames;
        for (var n = 0; n < argnames.length; n++) {
            if (!(argnames[n] instanceof AST_SymbolFunarg)) {
                break OPT_ARGUMENTS; // destructuring parameter - bail
            }
            var param = argnames[n].name;
            if (params.has(param)) {
                break OPT_ARGUMENTS; // duplicate parameter - bail
            }
            params.add(param);
        }
        var argname = fn.argnames[index];
        if (argname && compressor.has_directive("use strict")) {
            var def = argname.definition();
            if (!compressor.option("reduce_vars") || def.assignments || def.orig.length > 1) {
                argname = null;
            }
        } else if (!argname && !compressor.option("keep_fargs") && index < fn.argnames.length + 5) {
            while (index >= fn.argnames.length) {
                argname = fn.create_symbol(AST_SymbolFunarg, {
                    source: fn,
                    scope: fn,
                    tentative_name: "argument_" + fn.argnames.length,
                });
                fn.argnames.push(argname);
            }
        }
        if (argname) {
            var sym = make_node(AST_SymbolRef, self, argname);
            sym.reference({});
            clear_flag(argname, UNUSED);
            return sym;
        }
    }
    if (compressor.is_lhs()) return self;
    if (key !== prop) {
        var sub = self.flatten_object(property, compressor);
        if (sub) {
            expr = self.expression = sub.expression;
            prop = self.property = sub.property;
        }
    }
    if (compressor.option("properties") && compressor.option("side_effects")
        && prop instanceof AST_Number && expr instanceof AST_Array) {
        var index = prop.getValue();
        var elements = expr.elements;
        var retValue = elements[index];
        FLATTEN: if (safe_to_flatten(retValue, compressor)) {
            var flatten = true;
            var values = [];
            for (var i = elements.length; --i > index;) {
                var value = elements[i].drop_side_effect_free(compressor);
                if (value) {
                    values.unshift(value);
                    if (flatten && value.has_side_effects(compressor)) flatten = false;
                }
            }
            if (retValue instanceof AST_Expansion) break FLATTEN;
            retValue = retValue instanceof AST_Hole ? make_void_0(retValue) : retValue;
            if (!flatten) values.unshift(retValue);
            while (--i >= 0) {
                var value = elements[i];
                if (value instanceof AST_Expansion) break FLATTEN;
                value = value.drop_side_effect_free(compressor);
                if (value) values.unshift(value);
                else index--;
            }
            if (flatten) {
                values.push(retValue);
                return make_sequence(self, values).optimize(compressor);
            } else return make_node(AST_Sub, self, {
                expression: make_node(AST_Array, expr, {
                    elements: values
                }),
                property: make_node(AST_Number, prop, {
                    value: index
                })
            });
        }
    }
    var ev = self.evaluate(compressor);
    if (ev !== self) {
        ev = make_node_from_constant(ev, self).optimize(compressor);
        return best_of(compressor, ev, self);
    }
    return self;
});

def_optimize(AST_Chain, function (self, compressor) {
    if (is_nullish(self.expression, compressor)) {
        let parent = compressor.parent();
        // It's valid to delete a nullish optional chain, but if we optimized
        // this to `delete undefined` then it would appear to be a syntax error
        // when we try to optimize the delete. Thankfully, `delete 0` is fine.
        if (parent instanceof AST_UnaryPrefix && parent.operator === "delete") {
            return make_node_from_constant(0, self);
        }
        return make_void_0(self).optimize(compressor);
    }
    if (
        self.expression instanceof AST_PropAccess
        || self.expression instanceof AST_Call
    ) {
        return self;
    } else {
        // Keep the AST valid, in case the child swapped itself
        return self.expression;
    }
});

def_optimize(AST_Dot, function(self, compressor) {
    const parent = compressor.parent();
    if (compressor.is_lhs()) return self;
    if (compressor.option("unsafe_proto")
        && self.expression instanceof AST_Dot
        && self.expression.property == "prototype") {
        var exp = self.expression.expression;
        if (is_undeclared_ref(exp)) switch (exp.name) {
          case "Array":
            self.expression = make_node(AST_Array, self.expression, {
                elements: []
            });
            break;
          case "Function":
            self.expression = make_empty_function(self.expression);
            break;
          case "Number":
            self.expression = make_node(AST_Number, self.expression, {
                value: 0
            });
            break;
          case "Object":
            self.expression = make_node(AST_Object, self.expression, {
                properties: []
            });
            break;
          case "RegExp":
            self.expression = make_node(AST_RegExp, self.expression, {
                value: { source: "t", flags: "" }
            });
            break;
          case "String":
            self.expression = make_node(AST_String, self.expression, {
                value: ""
            });
            break;
        }
    }
    if (!(parent instanceof AST_Call) || !has_annotation(parent, _NOINLINE)) {
        const sub = self.flatten_object(self.property, compressor);
        if (sub) return sub.optimize(compressor);
    }

    if (self.expression instanceof AST_PropAccess
        && parent instanceof AST_PropAccess) {
        return self;
    }

    let ev = self.evaluate(compressor);
    if (ev !== self) {
        ev = make_node_from_constant(ev, self).optimize(compressor);
        return best_of(compressor, ev, self);
    }
    return self;
});

function literals_in_boolean_context(self, compressor) {
    if (compressor.in_boolean_context()) {
        return best_of(compressor, self, make_sequence(self, [
            self,
            make_node(AST_True, self)
        ]).optimize(compressor));
    }
    return self;
}

function inline_array_like_spread(elements) {
    for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        if (el instanceof AST_Expansion) {
            var expr = el.expression;
            if (
                expr instanceof AST_Array
                && !expr.elements.some(elm => elm instanceof AST_Hole)
            ) {
                elements.splice(i, 1, ...expr.elements);
                // Step back one, as the element at i is now new.
                i--;
            }
            // In array-like spread, spreading a non-iterable value is TypeError.
            // We therefore can’t optimize anything else, unlike with object spread.
        }
    }
}

def_optimize(AST_Array, function(self, compressor) {
    var optimized = literals_in_boolean_context(self, compressor);
    if (optimized !== self) {
        return optimized;
    }
    inline_array_like_spread(self.elements);
    return self;
});

function inline_object_prop_spread(props) {
    for (var i = 0; i < props.length; i++) {
        var prop = props[i];
        if (prop instanceof AST_Expansion) {
            const expr = prop.expression;
            if (
                expr instanceof AST_Object
                && expr.properties.every(prop => prop instanceof AST_ObjectKeyVal)
            ) {
                props.splice(i, 1, ...expr.properties);
                // Step back one, as the property at i is now new.
                i--;
            } else if ((
                    // `expr.is_constant()` returns `false` for `AST_RegExp`, so need both.
                    expr instanceof AST_Constant
                    || expr.is_constant()
                ) && !(expr instanceof AST_String)) {
                // Unlike array-like spread, in object spread, spreading a
                // non-iterable value silently does nothing; it is thus safe
                // to remove. AST_String is the only iterable constant.
                props.splice(i, 1);
                i--;
            }
        }
    }
}

def_optimize(AST_Object, function(self, compressor) {
    var optimized = literals_in_boolean_context(self, compressor);
    if (optimized !== self) {
        return optimized;
    }
    inline_object_prop_spread(self.properties);
    return self;
});

def_optimize(AST_RegExp, literals_in_boolean_context);

def_optimize(AST_Return, function(self, compressor) {
    if (self.value && is_undefined(self.value, compressor)) {
        self.value = null;
    }
    return self;
});

def_optimize(AST_Arrow, opt_AST_Lambda);

def_optimize(AST_Function, function(self, compressor) {
    self = opt_AST_Lambda(self, compressor);
    if (compressor.option("unsafe_arrows")
        && compressor.option("ecma") >= 2015
        && !self.name
        && !self.is_generator
        && !self.uses_arguments
        && !self.pinned()) {
        const uses_this = walk(self, node => {
            if (node instanceof AST_This) return walk_abort;
        });
        if (!uses_this) return make_node(AST_Arrow, self, self).optimize(compressor);
    }
    return self;
});

def_optimize(AST_Class, function(self) {
    for (let i = 0; i < self.properties.length; i++) {
        const prop = self.properties[i];
        if (prop instanceof AST_ClassStaticBlock && prop.body.length == 0) {
            self.properties.splice(i, 1);
            i--;
        }
    }

    return self;
});

def_optimize(AST_ClassStaticBlock, function(self, compressor) {
    tighten_body(self.body, compressor);
    return self;
});

def_optimize(AST_Yield, function(self, compressor) {
    if (self.expression && !self.is_star && is_undefined(self.expression, compressor)) {
        self.expression = null;
    }
    return self;
});

def_optimize(AST_TemplateString, function(self, compressor) {
    if (
        !compressor.option("evaluate")
        || compressor.parent() instanceof AST_PrefixedTemplateString
    ) {
        return self;
    }

    var segments = [];
    for (var i = 0; i < self.segments.length; i++) {
        var segment = self.segments[i];
        if (segment instanceof AST_Node) {
            var result = segment.evaluate(compressor);
            // Evaluate to constant value
            // Constant value shorter than ${segment}
            if (result !== segment && (result + "").length <= segment.size() + "${}".length) {
                // There should always be a previous and next segment if segment is a node
                segments[segments.length - 1].value = segments[segments.length - 1].value + result + self.segments[++i].value;
                continue;
            }
            // `before ${`innerBefore ${any} innerAfter`} after` => `before innerBefore ${any} innerAfter after`
            // TODO:
            // `before ${'test' + foo} after` => `before innerBefore ${any} innerAfter after`
            // `before ${foo + 'test} after` => `before innerBefore ${any} innerAfter after`
            if (segment instanceof AST_TemplateString) {
                var inners = segment.segments;
                segments[segments.length - 1].value += inners[0].value;
                for (var j = 1; j < inners.length; j++) {
                    segment = inners[j];
                    segments.push(segment);
                }
                continue;
            }
        }
        segments.push(segment);
    }
    self.segments = segments;

    // `foo` => "foo"
    if (segments.length == 1) {
        return make_node(AST_String, self, segments[0]);
    }

    if (
        segments.length === 3
        && segments[1] instanceof AST_Node
        && (
            segments[1].is_string(compressor)
            || segments[1].is_number_or_bigint(compressor)
            || is_nullish(segments[1], compressor)
            || compressor.option("unsafe")
        )
    ) {
        // `foo${bar}` => "foo" + bar
        if (segments[2].value === "") {
            return make_node(AST_Binary, self, {
                operator: "+",
                left: make_node(AST_String, self, {
                    value: segments[0].value,
                }),
                right: segments[1],
            });
        }
        // `${bar}baz` => bar + "baz"
        if (segments[0].value === "") {
            return make_node(AST_Binary, self, {
                operator: "+",
                left: segments[1],
                right: make_node(AST_String, self, {
                    value: segments[2].value,
                }),
            });
        }
    }
    return self;
});

def_optimize(AST_PrefixedTemplateString, function(self) {
    return self;
});

// ["p"]:1 ---> p:1
// [42]:1 ---> 42:1
function lift_key(self, compressor) {
    if (!compressor.option("computed_props")) return self;
    // save a comparison in the typical case
    if (!(self.key instanceof AST_Constant)) return self;
    // allow certain acceptable props as not all AST_Constants are true constants
    if (self.key instanceof AST_String || self.key instanceof AST_Number) {
        const key = self.key.value.toString();

        if (key === "__proto__") return self;
        if (key == "constructor"
            && compressor.parent() instanceof AST_Class) return self;
        if (self instanceof AST_ObjectKeyVal) {
            self.quote = self.key.quote;
            self.key = key;
        } else if (self instanceof AST_ClassProperty) {
            self.quote = self.key.quote;
            self.key = make_node(AST_SymbolClassProperty, self.key, {
                name: key,
            });
        } else {
            self.quote = self.key.quote;
            self.key = make_node(AST_SymbolMethod, self.key, {
                name: key,
            });
        }
    }
    return self;
}

def_optimize(AST_ObjectProperty, lift_key);

def_optimize(AST_ConciseMethod, function(self, compressor) {
    lift_key(self, compressor);
    // p(){return x;} ---> p:()=>x
    if (compressor.option("arrows")
        && compressor.parent() instanceof AST_Object
        && !self.value.is_generator
        && !self.value.uses_arguments
        && !self.value.pinned()
        && self.value.body.length == 1
        && self.value.body[0] instanceof AST_Return
        && self.value.body[0].value
        && !self.value.contains_this()) {
        var arrow = make_node(AST_Arrow, self.value, self.value);
        arrow.async = self.value.async;
        arrow.is_generator = self.value.is_generator;
        return make_node(AST_ObjectKeyVal, self, {
            key: self.key instanceof AST_SymbolMethod ? self.key.name : self.key,
            value: arrow,
            quote: self.quote,
        });
    }
    return self;
});

def_optimize(AST_ObjectKeyVal, function(self, compressor) {
    lift_key(self, compressor);
    // p:function(){} ---> p(){}
    // p:function*(){} ---> *p(){}
    // p:async function(){} ---> async p(){}
    // p:()=>{} ---> p(){}
    // p:async()=>{} ---> async p(){}
    var unsafe_methods = compressor.option("unsafe_methods");
    if (unsafe_methods
        && compressor.option("ecma") >= 2015
        && (!(unsafe_methods instanceof RegExp) || unsafe_methods.test(self.key + ""))) {
        var key = self.key;
        var value = self.value;
        var is_arrow_with_block = value instanceof AST_Arrow
            && Array.isArray(value.body)
            && !value.contains_this();
        if ((is_arrow_with_block || value instanceof AST_Function) && !value.name) {
            return make_node(AST_ConciseMethod, self, {
                key: key instanceof AST_Node ? key : make_node(AST_SymbolMethod, self, {
                    name: key,
                }),
                value: make_node(AST_Accessor, value, value),
                quote: self.quote,
            });
        }
    }
    return self;
});

def_optimize(AST_Destructuring, function(self, compressor) {
    if (compressor.option("pure_getters") == true
        && compressor.option("unused")
        && !self.is_array
        && Array.isArray(self.names)
        && !is_destructuring_export_decl(compressor)
        && !(self.names[self.names.length - 1] instanceof AST_Expansion)) {
        var keep = [];
        for (var i = 0; i < self.names.length; i++) {
            var elem = self.names[i];
            if (!(elem instanceof AST_ObjectKeyVal
                && typeof elem.key == "string"
                && elem.value instanceof AST_SymbolDeclaration
                && !should_retain(compressor, elem.value.definition()))) {
                keep.push(elem);
            }
        }
        if (keep.length != self.names.length) {
            self.names = keep;
        }
    }
    return self;

    function is_destructuring_export_decl(compressor) {
        var ancestors = [/^VarDef$/, /^(Const|Let|Var)$/, /^Export$/];
        for (var a = 0, p = 0, len = ancestors.length; a < len; p++) {
            var parent = compressor.parent(p);
            if (!parent) return false;
            if (a === 0 && parent.TYPE == "Destructuring") continue;
            if (!ancestors[a].test(parent.TYPE)) {
                return false;
            }
            a++;
        }
        return true;
    }

    function should_retain(compressor, def) {
        if (def.references.length) return true;
        if (!def.global) return false;
        if (compressor.toplevel.vars) {
            if (compressor.top_retain) {
                return compressor.top_retain(def);
            }
            return false;
        }
        return true;
    }
});

export {
    Compressor,
};
