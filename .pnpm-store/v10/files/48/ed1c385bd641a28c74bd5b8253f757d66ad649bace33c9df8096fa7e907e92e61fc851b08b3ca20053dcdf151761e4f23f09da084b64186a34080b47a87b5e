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

import {
    defaults,
    keep_name,
    mergeSort,
    push_uniq,
    make_node,
    return_false,
    return_this,
    return_true,
    string_template,
} from "./utils/index.js";
import {
    AST_Arrow,
    AST_Block,
    AST_Call,
    AST_Class,
    AST_Conditional,
    AST_DefClass,
    AST_Defun,
    AST_Destructuring,
    AST_Dot,
    AST_DotHash,
    AST_Export,
    AST_For,
    AST_ForIn,
    AST_ForOf,
    AST_Function,
    AST_Import,
    AST_IterationStatement,
    AST_Label,
    AST_LabeledStatement,
    AST_LabelRef,
    AST_Lambda,
    AST_LoopControl,
    AST_NameMapping,
    AST_Node,
    AST_Scope,
    AST_Sequence,
    AST_String,
    AST_Sub,
    AST_Switch,
    AST_SwitchBranch,
    AST_Symbol,
    AST_SymbolBlockDeclaration,
    AST_SymbolCatch,
    AST_SymbolClass,
    AST_SymbolConst,
    AST_SymbolDefClass,
    AST_SymbolDefun,
    AST_SymbolExport,
    AST_SymbolFunarg,
    AST_SymbolImport,
    AST_SymbolLambda,
    AST_SymbolLet,
    AST_SymbolMethod,
    AST_SymbolRef,
    AST_SymbolUsing,
    AST_SymbolVar,
    AST_Toplevel,
    AST_VarDef,
    AST_With,
    TreeWalker,
    walk,
    walk_abort
} from "./ast.js";
import {
    ALL_RESERVED_WORDS,
    js_error,
} from "./parse.js";

const MASK_EXPORT_DONT_MANGLE = 1 << 0;
const MASK_EXPORT_WANT_MANGLE = 1 << 1;

let function_defs = null;
let unmangleable_names = null;
/**
 * When defined, there is a function declaration somewhere that's inside of a block.
 * See https://tc39.es/ecma262/multipage/additional-ecmascript-features-for-web-browsers.html#sec-block-level-function-declarations-web-legacy-compatibility-semantics
*/
let scopes_with_block_defuns = null;

class SymbolDef {
    constructor(scope, orig, init) {
        this.name = orig.name;
        this.orig = [ orig ];
        this.init = init;
        this.eliminated = 0;
        this.assignments = 0;
        this.scope = scope;
        this.replaced = 0;
        this.global = false;
        this.export = 0;
        this.mangled_name = null;
        this.undeclared = false;
        this.id = SymbolDef.next_id++;
        this.chained = false;
        this.direct_access = false;
        this.escaped = 0;
        this.recursive_refs = 0;
        this.references = [];
        this.should_replace = undefined;
        this.single_use = false;
        this.fixed = false;
        Object.seal(this);
    }
    fixed_value() {
        if (!this.fixed || this.fixed instanceof AST_Node) return this.fixed;
        return this.fixed();
    }
    unmangleable(options) {
        if (!options) options = {};

        if (
            function_defs &&
            function_defs.has(this.id) &&
            keep_name(options.keep_fnames, this.orig[0].name)
        ) return true;

        return this.global && !options.toplevel
            || (this.export & MASK_EXPORT_DONT_MANGLE)
            || this.undeclared
            || !options.eval && this.scope.pinned()
            || (this.orig[0] instanceof AST_SymbolLambda
                  || this.orig[0] instanceof AST_SymbolDefun) && keep_name(options.keep_fnames, this.orig[0].name)
            || this.orig[0] instanceof AST_SymbolMethod
            || (this.orig[0] instanceof AST_SymbolClass
                  || this.orig[0] instanceof AST_SymbolDefClass) && keep_name(options.keep_classnames, this.orig[0].name);
    }
    mangle(options) {
        const cache = options.cache && options.cache.props;
        if (this.global && cache && cache.has(this.name)) {
            this.mangled_name = cache.get(this.name);
        } else if (!this.mangled_name && !this.unmangleable(options)) {
            var s = this.scope;
            var sym = this.orig[0];
            if (options.ie8 && sym instanceof AST_SymbolLambda)
                s = s.parent_scope;
            const redefinition = redefined_catch_def(this);
            this.mangled_name = redefinition
                ? redefinition.mangled_name || redefinition.name
                : s.next_mangled(options, this);
            if (this.global && cache) {
                cache.set(this.name, this.mangled_name);
            }
        }
    }
}

SymbolDef.next_id = 1;

function redefined_catch_def(def) {
    if (def.orig[0] instanceof AST_SymbolCatch
        && def.scope.is_block_scope()
    ) {
        return def.scope.get_defun_scope().variables.get(def.name);
    }
}

AST_Scope.DEFMETHOD("figure_out_scope", function(options, { parent_scope = undefined, toplevel = this } = {}) {
    options = defaults(options, {
        cache: null,
        ie8: false,
        safari10: false,
        module: false,
    });

    if (!(toplevel instanceof AST_Toplevel)) {
        throw new Error("Invalid toplevel scope");
    }

    // pass 1: setup scope chaining and handle definitions
    var scope = this.parent_scope = parent_scope;
    var labels = new Map();
    var defun = null;
    var in_destructuring = null;
    var for_scopes = [];
    var tw = new TreeWalker((node, descend) => {
        if (node.is_block_scope()) {
            const save_scope = scope;
            node.block_scope = scope = new AST_Scope(node);
            scope._block_scope = true;
            scope.init_scope_vars(save_scope);
            scope.uses_with = save_scope.uses_with;
            scope.uses_eval = save_scope.uses_eval;

            if (options.safari10) {
                if (node instanceof AST_For || node instanceof AST_ForIn || node instanceof AST_ForOf) {
                    for_scopes.push(scope);
                }
            }

            if (node instanceof AST_Switch) {
                // XXX: HACK! Ensure the switch expression gets the correct scope (the parent scope) and the body gets the contained scope
                // AST_Switch has a scope within the body, but it itself "is a block scope"
                // This means the switched expression has to belong to the outer scope
                // while the body inside belongs to the switch itself.
                // This is pretty nasty and warrants an AST change
                const the_block_scope = scope;
                scope = save_scope;
                node.expression.walk(tw);
                scope = the_block_scope;
                for (let i = 0; i < node.body.length; i++) {
                    node.body[i].walk(tw);
                }
            } else {
                descend();
            }
            scope = save_scope;
            return true;
        }
        if (node instanceof AST_Destructuring) {
            const save_destructuring = in_destructuring;
            in_destructuring = node;
            descend();
            in_destructuring = save_destructuring;
            return true;
        }
        if (node instanceof AST_Scope) {
            node.init_scope_vars(scope);
            var save_scope = scope;
            var save_defun = defun;
            var save_labels = labels;
            defun = scope = node;
            labels = new Map();
            descend();
            scope = save_scope;
            defun = save_defun;
            labels = save_labels;
            return true;        // don't descend again in TreeWalker
        }
        if (node instanceof AST_LabeledStatement) {
            var l = node.label;
            if (labels.has(l.name)) {
                throw new Error(string_template("Label {name} defined twice", l));
            }
            labels.set(l.name, l);
            descend();
            labels.delete(l.name);
            return true;        // no descend again
        }
        if (node instanceof AST_With) {
            for (var s = scope; s; s = s.parent_scope)
                s.uses_with = true;
            return;
        }
        if (node instanceof AST_Symbol) {
            node.scope = scope;
        }
        if (node instanceof AST_Label) {
            node.thedef = node;
            node.references = [];
        }
        if (node instanceof AST_SymbolLambda) {
            defun.def_function(node, node.name == "arguments" ? undefined : defun);
        } else if (node instanceof AST_SymbolDefun) {
            // Careful here, the scope where this should be defined is
            // the parent scope.  The reason is that we enter a new
            // scope when we encounter the AST_Defun node (which is
            // instanceof AST_Scope) but we get to the symbol a bit
            // later.
            const closest_scope = defun.parent_scope;

            // In strict mode, function definitions are block-scoped
            node.scope = tw.directives["use strict"]
                ? closest_scope
                : closest_scope.get_defun_scope();

            mark_export(node.scope.def_function(node, defun), 1);
        } else if (node instanceof AST_SymbolClass) {
            mark_export(defun.def_variable(node, defun), 1);
        } else if (node instanceof AST_SymbolImport) {
            scope.def_variable(node);
        } else if (node instanceof AST_SymbolDefClass) {
            // This deals with the name of the class being available
            // inside the class.
            mark_export((node.scope = defun.parent_scope).def_function(node, defun), 1);
        } else if (
            node instanceof AST_SymbolVar
            || node instanceof AST_SymbolLet
            || node instanceof AST_SymbolConst
            || node instanceof AST_SymbolUsing
            || node instanceof AST_SymbolCatch
        ) {
            var def;
            if (node instanceof AST_SymbolBlockDeclaration) {
                def = scope.def_variable(node, null);
            } else {
                def = defun.def_variable(node, node.TYPE == "SymbolVar" ? null : undefined);
            }
            if (!def.orig.every((sym) => {
                if (sym === node) return true;
                if (node instanceof AST_SymbolBlockDeclaration) {
                    return sym instanceof AST_SymbolLambda;
                }
                return !(sym instanceof AST_SymbolLet || sym instanceof AST_SymbolConst || sym instanceof AST_SymbolUsing);
            })) {
                js_error(
                    `"${node.name}" is redeclared`,
                    node.start.file,
                    node.start.line,
                    node.start.col,
                    node.start.pos
                );
            }
            if (!(node instanceof AST_SymbolFunarg)) mark_export(def, 2);
            if (defun !== scope) {
                node.mark_enclosed();
                var def = scope.find_variable(node);
                if (node.thedef !== def) {
                    node.thedef = def;
                    node.reference();
                }
            }
        } else if (node instanceof AST_LabelRef) {
            var sym = labels.get(node.name);
            if (!sym) throw new Error(string_template("Undefined label {name} [{line},{col}]", {
                name: node.name,
                line: node.start.line,
                col: node.start.col
            }));
            node.thedef = sym;
        }
        if (!(scope instanceof AST_Toplevel) && (node instanceof AST_Export || node instanceof AST_Import)) {
            js_error(
                `"${node.TYPE}" statement may only appear at the top level`,
                node.start.file,
                node.start.line,
                node.start.col,
                node.start.pos
            );
        }
    });

    if (options.module) {
        tw.directives["use strict"] = true;
    }

    this.walk(tw);

    function mark_export(def, level) {
        if (in_destructuring) {
            var i = 0;
            do {
                level++;
            } while (tw.parent(i++) !== in_destructuring);
        }
        var node = tw.parent(level);
        if (def.export = node instanceof AST_Export ? MASK_EXPORT_DONT_MANGLE : 0) {
            var exported = node.exported_definition;
            if ((exported instanceof AST_Defun || exported instanceof AST_DefClass) && node.is_default) {
                def.export = MASK_EXPORT_WANT_MANGLE;
            }
        }
    }

    // pass 2: find back references and eval
    const is_toplevel = this instanceof AST_Toplevel;
    if (is_toplevel) {
        this.globals = new Map();
    }

    var tw = new TreeWalker(node => {
        if (node instanceof AST_LoopControl && node.label) {
            node.label.thedef.references.push(node);
            return true;
        }
        if (node instanceof AST_SymbolRef) {
            var name = node.name;
            if (name == "eval" && tw.parent() instanceof AST_Call) {
                for (var s = node.scope; s && !s.uses_eval; s = s.parent_scope) {
                    s.uses_eval = true;
                }
            }
            var sym;
            if (tw.parent() instanceof AST_NameMapping && tw.parent(1).module_name
                || !(sym = node.scope.find_variable(name))) {

                sym = toplevel.def_global(node);
                if (node instanceof AST_SymbolExport) sym.export = MASK_EXPORT_DONT_MANGLE;
            } else if (sym.scope instanceof AST_Lambda && name == "arguments") {
                sym.scope.get_defun_scope().uses_arguments = true;
            }
            node.thedef = sym;
            node.reference();
            if (node.scope.is_block_scope()
                && !(sym.orig[0] instanceof AST_SymbolBlockDeclaration)) {
                node.scope = node.scope.get_defun_scope();
            }
            return true;
        }
        // ensure mangling works if catch reuses a scope variable
        var def;
        if (node instanceof AST_SymbolCatch && (def = redefined_catch_def(node.definition()))) {
            var s = node.scope;
            while (s) {
                push_uniq(s.enclosed, def);
                if (s === def.scope) break;
                s = s.parent_scope;
            }
        }
    });
    this.walk(tw);

    // pass 3: work around IE8 and Safari catch scope bugs
    if (options.ie8 || options.safari10) {
        walk(this, node => {
            if (node instanceof AST_SymbolCatch) {
                var name = node.name;
                var refs = node.thedef.references;
                var scope = node.scope.get_defun_scope();
                var def = scope.find_variable(name)
                    || toplevel.globals.get(name)
                    || scope.def_variable(node);
                refs.forEach(function(ref) {
                    ref.thedef = def;
                    ref.reference();
                });
                node.thedef = def;
                node.reference();
                return true;
            }
        });
    }

    // pass 4: add symbol definitions to loop scopes
    // Safari/Webkit bug workaround - loop init let variable shadowing argument.
    // https://github.com/mishoo/UglifyJS2/issues/1753
    // https://bugs.webkit.org/show_bug.cgi?id=171041
    if (options.safari10) {
        for (const scope of for_scopes) {
            scope.parent_scope.variables.forEach(function(def) {
                push_uniq(scope.enclosed, def);
            });
        }
    }
});

AST_Toplevel.DEFMETHOD("def_global", function(node) {
    var globals = this.globals, name = node.name;
    if (globals.has(name)) {
        return globals.get(name);
    } else {
        var g = new SymbolDef(this, node);
        g.undeclared = true;
        g.global = true;
        globals.set(name, g);
        return g;
    }
});

AST_Scope.DEFMETHOD("init_scope_vars", function(parent_scope) {
    this.variables = new Map();         // map name to AST_SymbolVar (variables defined in this scope; includes functions)
    this.uses_with = false;             // will be set to true if this or some nested scope uses the `with` statement
    this.uses_eval = false;             // will be set to true if this or nested scope uses the global `eval`
    this.parent_scope = parent_scope;   // the parent scope
    this.enclosed = [];                 // a list of variables from this or outer scope(s) that are referenced from this or inner scopes
    this.cname = -1;                    // the current index for mangling functions/variables
});

AST_Scope.DEFMETHOD("conflicting_def", function (name) {
    return (
        this.enclosed.find(def => def.name === name)
        || this.variables.has(name)
        || (this.parent_scope && this.parent_scope.conflicting_def(name))
    );
});

AST_Scope.DEFMETHOD("conflicting_def_shallow", function (name) {
    return (
        this.enclosed.find(def => def.name === name)
        || this.variables.has(name)
    );
});

AST_Scope.DEFMETHOD("add_child_scope", function (scope) {
    // `scope` is going to be moved into `this` right now.
    // Update the required scopes' information

    if (scope.parent_scope === this) return;

    scope.parent_scope = this;

    // Propagate to this.uses_arguments from arrow functions
    if ((scope instanceof AST_Arrow) && (this instanceof AST_Lambda && !this.uses_arguments)) {
        this.uses_arguments = walk(scope, node => {
            if (
                node instanceof AST_SymbolRef
                && node.scope instanceof AST_Lambda
                && node.name === "arguments"
            ) {
                return walk_abort;
            }

            if (node instanceof AST_Lambda && !(node instanceof AST_Arrow)) {
                return true;
            }
        });
    }

    this.uses_with = this.uses_with || scope.uses_with;
    this.uses_eval = this.uses_eval || scope.uses_eval;

    const scope_ancestry = (() => {
        const ancestry = [];
        let cur = this;
        do {
            ancestry.push(cur);
        } while ((cur = cur.parent_scope));
        ancestry.reverse();
        return ancestry;
    })();

    const new_scope_enclosed_set = new Set(scope.enclosed);
    const to_enclose = [];
    for (const scope_topdown of scope_ancestry) {
        to_enclose.forEach(e => push_uniq(scope_topdown.enclosed, e));
        for (const def of scope_topdown.variables.values()) {
            if (new_scope_enclosed_set.has(def)) {
                push_uniq(to_enclose, def);
                push_uniq(scope_topdown.enclosed, def);
            }
        }
    }
});

function find_scopes_visible_from(scopes) {
    const found_scopes = new Set();

    for (const scope of new Set(scopes)) {
        (function bubble_up(scope) {
            if (scope == null || found_scopes.has(scope)) return;

            found_scopes.add(scope);

            bubble_up(scope.parent_scope);
        })(scope);
    }

    return [...found_scopes];
}

// Creates a symbol during compression
AST_Scope.DEFMETHOD("create_symbol", function(SymClass, {
    source,
    tentative_name,
    scope,
    conflict_scopes = [scope],
    init = null
} = {}) {
    let symbol_name;

    conflict_scopes = find_scopes_visible_from(conflict_scopes);

    if (tentative_name) {
        // Implement hygiene (no new names are conflicting with existing names)
        tentative_name =
            symbol_name =
            tentative_name.replace(/(?:^[^a-z_$]|[^a-z0-9_$])/ig, "_");

        let i = 0;
        while (conflict_scopes.find(s => s.conflicting_def_shallow(symbol_name))) {
            symbol_name = tentative_name + "$" + i++;
        }
    }

    if (!symbol_name) {
        throw new Error("No symbol name could be generated in create_symbol()");
    }

    const symbol = make_node(SymClass, source, {
        name: symbol_name,
        scope
    });

    this.def_variable(symbol, init || null);

    symbol.mark_enclosed();

    return symbol;
});


AST_Node.DEFMETHOD("is_block_scope", return_false);
AST_Class.DEFMETHOD("is_block_scope", return_false);
AST_Lambda.DEFMETHOD("is_block_scope", return_false);
AST_Toplevel.DEFMETHOD("is_block_scope", return_false);
AST_SwitchBranch.DEFMETHOD("is_block_scope", return_false);
AST_Block.DEFMETHOD("is_block_scope", return_true);
AST_Scope.DEFMETHOD("is_block_scope", function () {
    return this._block_scope || false;
});
AST_IterationStatement.DEFMETHOD("is_block_scope", return_true);

AST_Lambda.DEFMETHOD("init_scope_vars", function() {
    AST_Scope.prototype.init_scope_vars.apply(this, arguments);
    this.uses_arguments = false;
    this.def_variable(new AST_SymbolFunarg({
        name: "arguments",
        start: this.start,
        end: this.end
    }));
});

AST_Arrow.DEFMETHOD("init_scope_vars", function() {
    AST_Scope.prototype.init_scope_vars.apply(this, arguments);
    this.uses_arguments = false;
});

AST_Symbol.DEFMETHOD("mark_enclosed", function() {
    var def = this.definition();
    var s = this.scope;
    while (s) {
        push_uniq(s.enclosed, def);
        if (s === def.scope) break;
        s = s.parent_scope;
    }
});

AST_Symbol.DEFMETHOD("reference", function() {
    this.definition().references.push(this);
    this.mark_enclosed();
});

AST_Scope.DEFMETHOD("find_variable", function(name) {
    if (name instanceof AST_Symbol) name = name.name;
    return this.variables.get(name)
        || (this.parent_scope && this.parent_scope.find_variable(name));
});

AST_Scope.DEFMETHOD("def_function", function(symbol, init) {
    var def = this.def_variable(symbol, init);
    if (!def.init || def.init instanceof AST_Defun) def.init = init;
    return def;
});

AST_Scope.DEFMETHOD("def_variable", function(symbol, init) {
    var def = this.variables.get(symbol.name);
    if (def) {
        def.orig.push(symbol);
        if (def.init && (def.scope !== symbol.scope || def.init instanceof AST_Function)) {
            def.init = init;
        }
    } else {
        def = new SymbolDef(this, symbol, init);
        this.variables.set(symbol.name, def);
        def.global = !this.parent_scope;
    }
    return symbol.thedef = def;
});

function next_mangled(scope, options) {
    let defun_scope;
    if (
        scopes_with_block_defuns
        && (defun_scope = scope.get_defun_scope())
        && scopes_with_block_defuns.has(defun_scope)
    ) {
        scope = defun_scope;
    }

    var ext = scope.enclosed;
    var nth_identifier = options.nth_identifier;
    out: while (true) {
        var m = nth_identifier.get(++scope.cname);
        if (ALL_RESERVED_WORDS.has(m)) continue; // skip over "do"

        // https://github.com/mishoo/UglifyJS2/issues/242 -- do not
        // shadow a name reserved from mangling.
        if (options.reserved.has(m)) continue;

        // Functions with short names might collide with base54 output
        // and therefore cause collisions when keep_fnames is true.
        if (unmangleable_names && unmangleable_names.has(m)) continue out;

        // we must ensure that the mangled name does not shadow a name
        // from some parent scope that is referenced in this or in
        // inner scopes.
        for (let i = ext.length; --i >= 0;) {
            const def = ext[i];
            const name = def.mangled_name || (def.unmangleable(options) && def.name);
            if (m == name) continue out;
        }
        return m;
    }
}

AST_Scope.DEFMETHOD("next_mangled", function(options) {
    return next_mangled(this, options);
});

AST_Toplevel.DEFMETHOD("next_mangled", function(options) {
    let name;
    const mangled_names = this.mangled_names;
    do {
        name = next_mangled(this, options);
    } while (mangled_names.has(name));
    return name;
});

AST_Function.DEFMETHOD("next_mangled", function(options, def) {
    // #179, #326
    // in Safari strict mode, something like (function x(x){...}) is a syntax error;
    // a function expression's argument cannot shadow the function expression's name

    var tricky_def = def.orig[0] instanceof AST_SymbolFunarg && this.name && this.name.definition();

    // the function's mangled_name is null when keep_fnames is true
    var tricky_name = tricky_def ? tricky_def.mangled_name || tricky_def.name : null;

    while (true) {
        var name = next_mangled(this, options);
        if (!tricky_name || tricky_name != name)
            return name;
    }
});

AST_Symbol.DEFMETHOD("unmangleable", function(options) {
    var def = this.definition();
    return !def || def.unmangleable(options);
});

// labels are always mangleable
AST_Label.DEFMETHOD("unmangleable", return_false);

AST_Symbol.DEFMETHOD("unreferenced", function() {
    return !this.definition().references.length && !this.scope.pinned();
});

AST_Symbol.DEFMETHOD("definition", function() {
    return this.thedef;
});

AST_Symbol.DEFMETHOD("global", function() {
    return this.thedef.global;
});

/**
 * Format the mangler options (if any) into their appropriate types
 */
export function format_mangler_options(options) {
    options = defaults(options, {
        eval        : false,
        nth_identifier : base54,
        ie8         : false,
        keep_classnames: false,
        keep_fnames : false,
        module      : false,
        reserved    : [],
        toplevel    : false,
    });
    if (options.module) options.toplevel = true;
    if (!Array.isArray(options.reserved)
        && !(options.reserved instanceof Set)
    ) {
        options.reserved = [];
    }
    options.reserved = new Set(options.reserved);
    // Never mangle arguments
    options.reserved.add("arguments");
    return options;
}

AST_Toplevel.DEFMETHOD("mangle_names", function(options) {
    options = format_mangler_options(options);
    var nth_identifier = options.nth_identifier;

    // We only need to mangle declaration nodes.  Special logic wired
    // into the code generator will display the mangled name if it's
    // present (and for AST_SymbolRef-s it'll use the mangled name of
    // the AST_SymbolDeclaration that it points to).
    var lname = -1;
    var to_mangle = [];

    if (options.keep_fnames) {
        function_defs = new Set();
    }

    const mangled_names = this.mangled_names = new Set();
    unmangleable_names = new Set();

    if (options.cache) {
        this.globals.forEach(collect);
        if (options.cache.props) {
            options.cache.props.forEach(function(mangled_name) {
                mangled_names.add(mangled_name);
            });
        }
    }

    var tw = new TreeWalker(function(node, descend) {
        if (node instanceof AST_LabeledStatement) {
            // lname is incremented when we get to the AST_Label
            var save_nesting = lname;
            descend();
            lname = save_nesting;
            return true;        // don't descend again in TreeWalker
        }
        if (
            node instanceof AST_Defun
            && !(tw.parent() instanceof AST_Scope)
        ) {
            scopes_with_block_defuns = scopes_with_block_defuns || new Set();
            scopes_with_block_defuns.add(node.parent_scope.get_defun_scope());
        }
        if (node instanceof AST_Scope) {
            node.variables.forEach(collect);
            return;
        }
        if (node.is_block_scope()) {
            node.block_scope.variables.forEach(collect);
            return;
        }
        if (
            function_defs
            && node instanceof AST_VarDef
            && node.value instanceof AST_Lambda
            && !node.value.name
            && keep_name(options.keep_fnames, node.name.name)
        ) {
            function_defs.add(node.name.definition().id);
            return;
        }
        if (node instanceof AST_Label) {
            let name;
            do {
                name = nth_identifier.get(++lname);
            } while (ALL_RESERVED_WORDS.has(name));
            node.mangled_name = name;
            return true;
        }
        if (!(options.ie8 || options.safari10) && node instanceof AST_SymbolCatch) {
            to_mangle.push(node.definition());
            return;
        }
    });

    this.walk(tw);

    if (options.keep_fnames || options.keep_classnames) {
        // Collect a set of short names which are unmangleable,
        // for use in avoiding collisions in next_mangled.
        to_mangle.forEach(def => {
            if (def.name.length < 6 && def.unmangleable(options)) {
                unmangleable_names.add(def.name);
            }
        });
    }

    to_mangle.forEach(def => { def.mangle(options); });

    function_defs = null;
    unmangleable_names = null;
    scopes_with_block_defuns = null;

    function collect(symbol) {
        if (symbol.export & MASK_EXPORT_DONT_MANGLE) {
            unmangleable_names.add(symbol.name);
        } else if (!options.reserved.has(symbol.name)) {
            to_mangle.push(symbol);
        }
    }
});

AST_Toplevel.DEFMETHOD("find_colliding_names", function(options) {
    const cache = options.cache && options.cache.props;
    const avoid = new Set();
    options.reserved.forEach(to_avoid);
    this.globals.forEach(add_def);
    this.walk(new TreeWalker(function(node) {
        if (node instanceof AST_Scope) node.variables.forEach(add_def);
        if (node instanceof AST_SymbolCatch) add_def(node.definition());
    }));
    return avoid;

    function to_avoid(name) {
        avoid.add(name);
    }

    function add_def(def) {
        var name = def.name;
        if (def.global && cache && cache.has(name)) name = cache.get(name);
        else if (!def.unmangleable(options)) return;
        to_avoid(name);
    }
});

AST_Toplevel.DEFMETHOD("expand_names", function(options) {
    options = format_mangler_options(options);
    var nth_identifier = options.nth_identifier;
    if (nth_identifier.reset && nth_identifier.sort) {
        nth_identifier.reset();
        nth_identifier.sort();
    }
    var avoid = this.find_colliding_names(options);
    var cname = 0;
    this.globals.forEach(rename);
    this.walk(new TreeWalker(function(node) {
        if (node instanceof AST_Scope) node.variables.forEach(rename);
        if (node instanceof AST_SymbolCatch) rename(node.definition());
    }));

    function next_name() {
        var name;
        do {
            name = nth_identifier.get(cname++);
        } while (avoid.has(name) || ALL_RESERVED_WORDS.has(name));
        return name;
    }

    function rename(def) {
        if (def.global && options.cache) return;
        if (def.unmangleable(options)) return;
        if (options.reserved.has(def.name)) return;
        const redefinition = redefined_catch_def(def);
        const name = def.name = redefinition ? redefinition.name : next_name();
        def.orig.forEach(function(sym) {
            sym.name = name;
        });
        def.references.forEach(function(sym) {
            sym.name = name;
        });
    }
});

AST_Node.DEFMETHOD("tail_node", return_this);
AST_Sequence.DEFMETHOD("tail_node", function() {
    return this.expressions[this.expressions.length - 1];
});

AST_Toplevel.DEFMETHOD("compute_char_frequency", function(options) {
    options = format_mangler_options(options);
    var nth_identifier = options.nth_identifier;
    if (!nth_identifier.reset || !nth_identifier.consider || !nth_identifier.sort) {
        // If the identifier mangler is invariant, skip computing character frequency.
        return;
    }
    nth_identifier.reset();

    try {
        AST_Node.prototype.print = function(stream, force_parens) {
            this._print(stream, force_parens);
            if (this instanceof AST_Symbol && !this.unmangleable(options)) {
                nth_identifier.consider(this.name, -1);
            } else if (options.properties) {
                if (this instanceof AST_DotHash) {
                    nth_identifier.consider("#" + this.property, -1);
                } else if (this instanceof AST_Dot) {
                    nth_identifier.consider(this.property, -1);
                } else if (this instanceof AST_Sub) {
                    skip_string(this.property);
                }
            }
        };
        nth_identifier.consider(this.print_to_string(), 1);
    } finally {
        AST_Node.prototype.print = AST_Node.prototype._print;
    }
    nth_identifier.sort();

    function skip_string(node) {
        if (node instanceof AST_String) {
            nth_identifier.consider(node.value, -1);
        } else if (node instanceof AST_Conditional) {
            skip_string(node.consequent);
            skip_string(node.alternative);
        } else if (node instanceof AST_Sequence) {
            skip_string(node.tail_node());
        }
    }
});

const base54 = (() => {
    const leading = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_".split("");
    const digits = "0123456789".split("");
    let chars;
    let frequency;
    function reset() {
        frequency = new Map();
        leading.forEach(function(ch) {
            frequency.set(ch, 0);
        });
        digits.forEach(function(ch) {
            frequency.set(ch, 0);
        });
    }
    function consider(str, delta) {
        for (var i = str.length; --i >= 0;) {
            frequency.set(str[i], frequency.get(str[i]) + delta);
        }
    }
    function compare(a, b) {
        return frequency.get(b) - frequency.get(a);
    }
    function sort() {
        chars = mergeSort(leading, compare).concat(mergeSort(digits, compare));
    }
    // Ensure this is in a usable initial state.
    reset();
    sort();
    function base54(num) {
        var ret = "", base = 54;
        num++;
        do {
            num--;
            ret += chars[num % base];
            num = Math.floor(num / base);
            base = 64;
        } while (num > 0);
        return ret;
    }

    return {
        get: base54,
        consider,
        reset,
        sort
    };
})();

export {
    base54,
    SymbolDef,
};
