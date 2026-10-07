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
    AST_Assign,
    AST_BlockStatement,
    AST_Call,
    AST_Class,
    AST_ClassExpression,
    AST_ClassStaticBlock,
    AST_DefaultAssign,
    AST_DefClass,
    AST_Definitions,
    AST_Defun,
    AST_Destructuring,
    AST_EmptyStatement,
    AST_Expansion,
    AST_Export,
    AST_For,
    AST_ForIn,
    AST_Function,
    AST_LabeledStatement,
    AST_Lambda,
    AST_Number,
    AST_Scope,
    AST_Sequence,
    AST_SimpleStatement,
    AST_SymbolBlockDeclaration,
    AST_SymbolCatch,
    AST_SymbolDeclaration,
    AST_SymbolFunarg,
    AST_SymbolRef,
    AST_SymbolVar,
    AST_Toplevel,
    AST_Unary,
    AST_Var,

    TreeTransformer,
    TreeWalker,
    walk,
} from "../ast.js";
import {
    keep_name,
    make_node,
    map_add,
    MAP,
    remove,
    return_false,
} from "../utils/index.js";
import { SymbolDef } from "../scope.js";

import {
    WRITE_ONLY,
    UNUSED,

    has_flag,
    set_flag,
} from "./compressor-flags.js";
import {
    make_sequence,
    maintain_this_binding,
    is_empty,
    is_ref_of,
    can_be_evicted_from_block,
} from "./common.js";
import { is_used_in_expression } from "./inference.js";

const r_keep_assign = /keep_assign/;

/** Drop unused variables from this scope */
AST_Scope.DEFMETHOD("drop_unused", function(compressor) {
    if (!compressor.option("unused")) return;
    if (compressor.has_directive("use asm")) return;
    if (!this.variables) return; // not really a scope (eg: AST_Class)

    var self = this;
    if (self.pinned()) return;
    var drop_funcs = !(self instanceof AST_Toplevel) || compressor.toplevel.funcs;
    var drop_vars = !(self instanceof AST_Toplevel) || compressor.toplevel.vars;
    const assign_as_unused = r_keep_assign.test(compressor.option("unused")) ? return_false : function(node) {
        if (node instanceof AST_Assign
            && !node.logical
            && (has_flag(node, WRITE_ONLY) || node.operator == "=")
        ) {
            return node.left;
        }
        if (node instanceof AST_Unary && has_flag(node, WRITE_ONLY)) {
            return node.expression;
        }
    };
    var in_use_ids = new Map();
    var fixed_ids = new Map();
    if (self instanceof AST_Toplevel && compressor.top_retain) {
        self.variables.forEach(function(def) {
            if (compressor.top_retain(def)) {
                in_use_ids.set(def.id, def);
            }
        });
    }
    var var_defs_by_id = new Map();
    var initializations = new Map();

    // pass 1: find out which symbols are directly used in
    // this scope (not in nested scopes).
    var scope = this;
    var tw = new TreeWalker(function(node, descend) {
        if (node instanceof AST_Lambda && node.uses_arguments && !tw.has_directive("use strict")) {
            node.argnames.forEach(function(argname) {
                if (!(argname instanceof AST_SymbolDeclaration)) return;
                var def = argname.definition();
                in_use_ids.set(def.id, def);
            });
        }
        if (node === self) return;
        if (node instanceof AST_Class && node.has_side_effects(compressor)) {
            if (node.is_self_referential()) {
                descend();
            } else {
                node.visit_nondeferred_class_parts(tw);
            }
        }
        if (node instanceof AST_Defun || node instanceof AST_DefClass) {
            var node_def = node.name.definition();
            const in_export = tw.parent() instanceof AST_Export;
            if (in_export || !drop_funcs && scope === self) {
                if (node_def.global) {
                    in_use_ids.set(node_def.id, node_def);
                }
            }

            map_add(initializations, node_def.id, node);
            return true; // don't go in nested scopes
        }
        // In the root scope, we drop things. In inner scopes, we just check for uses.
        const in_root_scope = scope === self;
        if (node instanceof AST_SymbolFunarg && in_root_scope) {
            map_add(var_defs_by_id, node.definition().id, node);
        }
        if (node instanceof AST_Definitions && in_root_scope) {
            const in_export = tw.parent() instanceof AST_Export;
            node.definitions.forEach(function(def) {
                if (def.name instanceof AST_SymbolVar) {
                    map_add(var_defs_by_id, def.name.definition().id, def);
                }
                if (in_export || !drop_vars) {
                    walk(def.name, node => {
                        if (node instanceof AST_SymbolDeclaration) {
                            const def = node.definition();
                            if (def.global) {
                                in_use_ids.set(def.id, def);
                            }
                        }
                    });
                }
                if (def.name instanceof AST_Destructuring) {
                    def.walk(tw);
                }
                if (def.name instanceof AST_SymbolDeclaration && def.value) {
                    var node_def = def.name.definition();
                    map_add(initializations, node_def.id, def.value);
                    if (!node_def.chained && def.name.fixed_value() === def.value) {
                        fixed_ids.set(node_def.id, def);
                    }
                    if (def.value.has_side_effects(compressor)) {
                        def.value.walk(tw);
                    }
                }
            });
            return true;
        }
        return scan_ref_scoped(node, descend);
    });
    self.walk(tw);
    // pass 2: for every used symbol we need to walk its
    // initialization code to figure out if it uses other
    // symbols (that may not be in_use).
    tw = new TreeWalker(scan_ref_scoped);
    in_use_ids.forEach(function (def) {
        var init = initializations.get(def.id);
        if (init) init.forEach(function(init) {
            init.walk(tw);
        });
    });
    // pass 3: we should drop declarations not in_use
    var tt = new TreeTransformer(
        function before(node, descend, in_list) {
            var parent = tt.parent();
            if (drop_vars) {
                const sym = assign_as_unused(node);
                if (sym instanceof AST_SymbolRef) {
                    var def = sym.definition();
                    var in_use = in_use_ids.has(def.id);
                    if (node instanceof AST_Assign) {
                        if (!in_use || fixed_ids.has(def.id) && fixed_ids.get(def.id) !== node) {
                            const assignee = node.right.transform(tt);
                            if (!in_use && !assignee.has_side_effects(compressor) && !is_used_in_expression(tt)) {
                                return in_list ? MAP.skip : make_node(AST_Number, node, { value: 0 });
                            }
                            return maintain_this_binding(parent, node, assignee);
                        }
                    } else if (!in_use) {
                        return in_list ? MAP.skip : make_node(AST_Number, node, { value: 0 });
                    }
                }
            }
            if (scope !== self) return;
            var def;
            if (node.name
                && (node instanceof AST_ClassExpression
                    && !keep_name(compressor.option("keep_classnames"), (def = node.name.definition()).name)
                || node instanceof AST_Function
                    && !keep_name(compressor.option("keep_fnames"), (def = node.name.definition()).name))) {
                // any declarations with same name will overshadow
                // name of this anonymous function and can therefore
                // never be used anywhere
                if (!in_use_ids.has(def.id) || def.orig.length > 1) node.name = null;
            }
            if (node instanceof AST_Lambda && !(node instanceof AST_Accessor)) {
                var trim =
                    !compressor.option("keep_fargs")
                    // Is this an IIFE that won't refer to its name?
                    || parent instanceof AST_Call
                        && parent.expression === node
                        && !node.pinned()
                        && (!node.name || node.name.unreferenced());
                for (var a = node.argnames, i = a.length; --i >= 0;) {
                    var sym = a[i];
                    if (sym instanceof AST_Expansion) {
                        sym = sym.expression;
                    }
                    if (sym instanceof AST_DefaultAssign) {
                        sym = sym.left;
                    }
                    // Do not drop destructuring arguments.
                    // They constitute a type assertion of sorts
                    if (
                        !(sym instanceof AST_Destructuring)
                        && !in_use_ids.has(sym.definition().id)
                    ) {
                        set_flag(sym, UNUSED);
                        if (trim) {
                            a.pop();
                        }
                    } else {
                        trim = false;
                    }
                }
            }
            if (node instanceof AST_DefClass && node !== self) {
                const def = node.name.definition();
                descend(node, this);
                const keep_class = def.global && !drop_funcs || in_use_ids.has(def.id);
                if (!keep_class) {
                    const kept = node.drop_side_effect_free(compressor);
                    if (kept == null) {
                        def.eliminated++;
                        return in_list ? MAP.skip : make_node(AST_EmptyStatement, node);
                    }
                    return kept;
                }
                return node;
            }
            if (node instanceof AST_Defun && node !== self) {
                const def = node.name.definition();
                const keep = def.global && !drop_funcs || in_use_ids.has(def.id);
                if (!keep) {
                    def.eliminated++;
                    return in_list ? MAP.skip : make_node(AST_EmptyStatement, node);
                }
            }
            if (node instanceof AST_Definitions && !(parent instanceof AST_ForIn && parent.init === node)) {
                var drop_block = !(parent instanceof AST_Toplevel) && !(node instanceof AST_Var);
                // place uninitialized names at the start
                var body = [], head = [], tail = [];
                // for unused names whose initialization has
                // side effects, we can cascade the init. code
                // into the next one, or next statement.
                var side_effects = [];
                node.definitions.forEach(function(def) {
                    if (def.value) def.value = def.value.transform(tt);
                    var is_destructure = def.name instanceof AST_Destructuring;
                    var sym = is_destructure
                        ? new SymbolDef(null, { name: "<destructure>" }) /* fake SymbolDef */
                        : def.name.definition();
                    if (drop_block && sym.global) return tail.push(def);
                    if (!(drop_vars || drop_block)
                        || is_destructure
                            && (def.name.names.length
                                || def.name.is_array
                                || compressor.option("pure_getters") != true)
                        || in_use_ids.has(sym.id)
                    ) {
                        if (def.value && fixed_ids.has(sym.id) && fixed_ids.get(sym.id) !== def) {
                            def.value = def.value.drop_side_effect_free(compressor);
                        }
                        if (def.name instanceof AST_SymbolVar) {
                            var var_defs = var_defs_by_id.get(sym.id);
                            if (var_defs.length > 1 && (!def.value || sym.orig.indexOf(def.name) > sym.eliminated)) {
                                if (def.value) {
                                    var ref = make_node(AST_SymbolRef, def.name, def.name);
                                    sym.references.push(ref);
                                    var assign = make_node(AST_Assign, def, {
                                        operator: "=",
                                        logical: false,
                                        left: ref,
                                        right: def.value
                                    });
                                    if (fixed_ids.get(sym.id) === def) {
                                        fixed_ids.set(sym.id, assign);
                                    }
                                    side_effects.push(assign.transform(tt));
                                }
                                remove(var_defs, def);
                                sym.eliminated++;
                                return;
                            }
                        }
                        if (def.value) {
                            if (side_effects.length > 0) {
                                if (tail.length > 0) {
                                    side_effects.push(def.value);
                                    def.value = make_sequence(def.value, side_effects);
                                } else {
                                    body.push(make_node(AST_SimpleStatement, node, {
                                        body: make_sequence(node, side_effects)
                                    }));
                                }
                                side_effects = [];
                            }
                            tail.push(def);
                        } else {
                            head.push(def);
                        }
                    } else if (sym.orig[0] instanceof AST_SymbolCatch) {
                        var value = def.value && def.value.drop_side_effect_free(compressor);
                        if (value) side_effects.push(value);
                        def.value = null;
                        head.push(def);
                    } else {
                        var value = def.value && def.value.drop_side_effect_free(compressor);
                        if (value) {
                            side_effects.push(value);
                        }
                        sym.eliminated++;
                    }
                });
                if (head.length > 0 || tail.length > 0) {
                    node.definitions = head.concat(tail);
                    body.push(node);
                }
                if (side_effects.length > 0) {
                    body.push(make_node(AST_SimpleStatement, node, {
                        body: make_sequence(node, side_effects)
                    }));
                }
                switch (body.length) {
                  case 0:
                    return in_list ? MAP.skip : make_node(AST_EmptyStatement, node);
                  case 1:
                    return body[0];
                  default:
                    return in_list ? MAP.splice(body) : make_node(AST_BlockStatement, node, { body });
                }
            }
            // certain combination of unused name + side effect leads to:
            //    https://github.com/mishoo/UglifyJS2/issues/44
            //    https://github.com/mishoo/UglifyJS2/issues/1830
            //    https://github.com/mishoo/UglifyJS2/issues/1838
            // that's an invalid AST.
            // We fix it at this stage by moving the `var` outside the `for`.
            if (node instanceof AST_For) {
                descend(node, this);
                var block;
                if (node.init instanceof AST_BlockStatement) {
                    block = node.init;
                    node.init = block.body.pop();
                    block.body.push(node);
                }
                if (node.init instanceof AST_SimpleStatement) {
                    node.init = node.init.body;
                } else if (is_empty(node.init)) {
                    node.init = null;
                }
                return !block ? node : in_list ? MAP.splice(block.body) : block;
            }
            if (node instanceof AST_LabeledStatement
                && node.body instanceof AST_For
            ) {
                descend(node, this);
                if (node.body instanceof AST_BlockStatement) {
                    var block = node.body;
                    node.body = block.body.pop();
                    block.body.push(node);
                    return in_list ? MAP.splice(block.body) : block;
                }
                return node;
            }
            if (node instanceof AST_BlockStatement) {
                descend(node, this);
                if (in_list && node.body.every(can_be_evicted_from_block)) {
                    return MAP.splice(node.body);
                }
                return node;
            }
            if (node instanceof AST_Scope && !(node instanceof AST_ClassStaticBlock)) {
                const save_scope = scope;
                scope = node;
                descend(node, this);
                scope = save_scope;
                return node;
            }
        },
        function after(node, in_list) {
            if (node instanceof AST_Sequence) {
                switch (node.expressions.length) {
                    case 0: return in_list ? MAP.skip : make_node(AST_Number, node, { value: 0 });
                    case 1: return node.expressions[0];
                }
            }
        }
    );

    self.transform(tt);

    function scan_ref_scoped(node, descend) {
        var node_def;
        const sym = assign_as_unused(node);
        if (sym instanceof AST_SymbolRef
            && !is_ref_of(node.left, AST_SymbolBlockDeclaration)
            && self.variables.get(sym.name) === (node_def = sym.definition())
        ) {
            if (node instanceof AST_Assign) {
                node.right.walk(tw);
                if (!node_def.chained && node.left.fixed_value() === node.right) {
                    fixed_ids.set(node_def.id, node);
                }
            }
            return true;
        }
        if (node instanceof AST_SymbolRef) {
            node_def = node.definition();
            if (!in_use_ids.has(node_def.id)) {
                in_use_ids.set(node_def.id, node_def);
                if (node_def.orig[0] instanceof AST_SymbolCatch) {
                    const redef = node_def.scope.is_block_scope()
                        && node_def.scope.get_defun_scope().variables.get(node_def.name);
                    if (redef) in_use_ids.set(redef.id, redef);
                }
            }
            return true;
        }
        if (node instanceof AST_Class) {
            descend();
            return true;
        }
        if (node instanceof AST_Scope && !(node instanceof AST_ClassStaticBlock)) {
            var save_scope = scope;
            scope = node;
            descend();
            scope = save_scope;
            return true;
        }
    }
});
