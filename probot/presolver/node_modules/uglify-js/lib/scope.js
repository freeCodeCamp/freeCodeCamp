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

function SymbolDef(scope, index, orig) {
    this.name = orig.name;
    this.orig = [ orig ];
    this.scope = scope;
    this.references = [];
    this.global = false;
    this.mangled_name = null;
    this.undeclared = false;
    this.index = index;
    this.id = SymbolDef.next_id++;
};

SymbolDef.next_id = 1;

SymbolDef.prototype = {
    unmangleable: function(options) {
        if (!options) options = {};

        return (this.global && !options.toplevel)
            || this.undeclared
            || (!options.eval && (this.scope.uses_eval || this.scope.uses_with))
            || (options.keep_fnames
                && (this.orig[0] instanceof AST_SymbolLambda
                    || this.orig[0] instanceof AST_SymbolDefun));
    },
    mangle: function(options) {
        var cache = options.cache && options.cache.props;
        if (this.global && cache && cache.has(this.name)) {
            this.mangled_name = cache.get(this.name);
        }
        else if (!this.mangled_name && !this.unmangleable(options)) {
            var s = this.scope;
            var sym = this.orig[0];
            if (!options.screw_ie8 && sym instanceof AST_SymbolLambda)
                s = s.parent_scope;
            var def;
            if (this.defun && (def = this.defun.variables.get(this.name))) {
                this.mangled_name = def.mangled_name || def.name;
            } else
                this.mangled_name = s.next_mangled(options, this);
            if (this.global && cache) {
                cache.set(this.name, this.mangled_name);
            }
        }
    }
};

AST_Toplevel.DEFMETHOD("figure_out_scope", function(options){
    options = defaults(options, {
        cache: null,
        screw_ie8: true,
    });

    // pass 1: setup scope chaining and handle definitions
    var self = this;
    var scope = self.parent_scope = null;
    var labels = new Dictionary();
    var defun = null;
    var tw = new TreeWalker(function(node, descend){
        if (node instanceof AST_Catch) {
            var save_scope = scope;
            scope = new AST_Scope(node);
            scope.init_scope_vars(save_scope);
            descend();
            scope = save_scope;
            return true;
        }
        if (node instanceof AST_Scope) {
            node.init_scope_vars(scope);
            var save_scope = scope;
            var save_defun = defun;
            var save_labels = labels;
            defun = scope = node;
            labels = new Dictionary();
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
            labels.del(l.name);
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
            defun.def_function(node);
        }
        else if (node instanceof AST_SymbolDefun) {
            // Careful here, the scope where this should be defined is
            // the parent scope.  The reason is that we enter a new
            // scope when we encounter the AST_Defun node (which is
            // instanceof AST_Scope) but we get to the symbol a bit
            // later.
            (node.scope = defun.parent_scope).def_function(node);
        }
        else if (node instanceof AST_SymbolVar
            || node instanceof AST_SymbolConst) {
            defun.def_variable(node);
            if (defun !== scope) {
                node.mark_enclosed(options);
                var def = scope.find_variable(node);
                if (node.thedef !== def) {
                    node.thedef = def;
                    node.reference(options);
                }
            }
        }
        else if (node instanceof AST_SymbolCatch) {
            scope.def_variable(node).defun = defun;
        }
        else if (node instanceof AST_LabelRef) {
            var sym = labels.get(node.name);
            if (!sym) throw new Error(string_template("Undefined label {name} [{line},{col}]", {
                name: node.name,
                line: node.start.line,
                col: node.start.col
            }));
            node.thedef = sym;
        }
    });
    self.walk(tw);

    // pass 2: find back references and eval
    var func = null;
    var globals = self.globals = new Dictionary();
    var tw = new TreeWalker(function(node, descend){
        if (node instanceof AST_Lambda) {
            var prev_func = func;
            func = node;
            descend();
            func = prev_func;
            return true;
        }
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
            var sym = node.scope.find_variable(name);
            if (node.scope instanceof AST_Lambda && name == "arguments") {
                node.scope.uses_arguments = true;
            }
            if (!sym) {
                sym = self.def_global(node);
            }
            node.thedef = sym;
            node.reference(options);
            return true;
        }
    });
    self.walk(tw);

    // pass 3: fix up any scoping issue with IE8
    if (!options.screw_ie8) {
        self.walk(new TreeWalker(function(node, descend) {
            if (node instanceof AST_SymbolCatch) {
                var name = node.name;
                var refs = node.thedef.references;
                var scope = node.thedef.defun;
                var def = scope.find_variable(name) || self.globals.get(name) || scope.def_variable(node);
                refs.forEach(function(ref) {
                    ref.thedef = def;
                    ref.reference(options);
                });
                node.thedef = def;
                return true;
            }
        }));
    }

    if (options.cache) {
        this.cname = options.cache.cname;
    }
});

AST_Toplevel.DEFMETHOD("def_global", function(node){
    var globals = this.globals, name = node.name;
    if (globals.has(name)) {
        return globals.get(name);
    } else {
        var g = new SymbolDef(this, globals.size(), node);
        g.undeclared = true;
        g.global = true;
        globals.set(name, g);
        return g;
    }
});

AST_Scope.DEFMETHOD("init_scope_vars", function(parent_scope){
    this.variables = new Dictionary();  // map name to AST_SymbolVar (variables defined in this scope; includes functions)
    this.functions = new Dictionary();  // map name to AST_SymbolDefun (functions defined in this scope)
    this.uses_with = false;             // will be set to true if this or some nested scope uses the `with` statement
    this.uses_eval = false;             // will be set to true if this or nested scope uses the global `eval`
    this.parent_scope = parent_scope;   // the parent scope
    this.enclosed = [];                 // a list of variables from this or outer scope(s) that are referenced from this or inner scopes
    this.cname = -1;                    // the current index for mangling functions/variables
});

AST_Lambda.DEFMETHOD("init_scope_vars", function(){
    AST_Scope.prototype.init_scope_vars.apply(this, arguments);
    this.uses_arguments = false;
    this.def_variable(new AST_SymbolVar({
        name: "arguments",
        start: this.start,
        end: this.end
    }));
});

AST_Symbol.DEFMETHOD("mark_enclosed", function(options) {
    var def = this.definition();
    var s = this.scope;
    while (s) {
        push_uniq(s.enclosed, def);
        if (options.keep_fnames) {
            s.functions.each(function(d) {
                push_uniq(def.scope.enclosed, d);
            });
        }
        if (s === def.scope) break;
        s = s.parent_scope;
    }
});

AST_Symbol.DEFMETHOD("reference", function(options) {
    this.definition().references.push(this);
    this.mark_enclosed(options);
});

AST_Scope.DEFMETHOD("find_variable", function(name){
    if (name instanceof AST_Symbol) name = name.name;
    return this.variables.get(name)
        || (this.parent_scope && this.parent_scope.find_variable(name));
});

AST_Scope.DEFMETHOD("def_function", function(symbol){
    this.functions.set(symbol.name, this.def_variable(symbol));
});

AST_Scope.DEFMETHOD("def_variable", function(symbol){
    var def;
    if (!this.variables.has(symbol.name)) {
        def = new SymbolDef(this, this.variables.size(), symbol);
        this.variables.set(symbol.name, def);
        def.global = !this.parent_scope;
    } else {
        def = this.variables.get(symbol.name);
        def.orig.push(symbol);
    }
    return symbol.thedef = def;
});

AST_Scope.DEFMETHOD("next_mangled", function(options){
    var ext = this.enclosed;
    out: while (true) {
        var m = base54(++this.cname);
        if (!is_identifier(m)) continue; // skip over "do"

        // https://github.com/mishoo/UglifyJS2/issues/242 -- do not
        // shadow a name excepted from mangling.
        if (options.except.indexOf(m) >= 0) continue;

        // we must ensure that the mangled name does not shadow a name
        // from some parent scope that is referenced in this or in
        // inner scopes.
        for (var i = ext.length; --i >= 0;) {
            var sym = ext[i];
            var name = sym.mangled_name || (sym.unmangleable(options) && sym.name);
            if (m == name) continue out;
        }
        return m;
    }
});

AST_Function.DEFMETHOD("next_mangled", function(options, def){
    // #179, #326
    // in Safari strict mode, something like (function x(x){...}) is a syntax error;
    // a function expression's argument cannot shadow the function expression's name

    var tricky_def = def.orig[0] instanceof AST_SymbolFunarg && this.name && this.name.definition();

    // the function's mangled_name is null when keep_fnames is true
    var tricky_name = tricky_def ? tricky_def.mangled_name || tricky_def.name : null;

    while (true) {
        var name = AST_Lambda.prototype.next_mangled.call(this, options, def);
        if (!tricky_name || tricky_name != name)
            return name;
    }
});

AST_Symbol.DEFMETHOD("unmangleable", function(options){
    return this.definition().unmangleable(options);
});

// labels are always mangleable
AST_Label.DEFMETHOD("unmangleable", function(){
    return false;
});

AST_Symbol.DEFMETHOD("unreferenced", function(){
    return this.definition().references.length == 0
        && !(this.scope.uses_eval || this.scope.uses_with);
});

AST_Symbol.DEFMETHOD("undeclared", function(){
    return this.definition().undeclared;
});

AST_LabelRef.DEFMETHOD("undeclared", function(){
    return false;
});

AST_Label.DEFMETHOD("undeclared", function(){
    return false;
});

AST_Symbol.DEFMETHOD("definition", function(){
    return this.thedef;
});

AST_Symbol.DEFMETHOD("global", function(){
    return this.definition().global;
});

AST_Toplevel.DEFMETHOD("_default_mangler_options", function(options){
    return defaults(options, {
        eval        : false,
        except      : [],
        keep_fnames : false,
        screw_ie8   : true,
        sort        : false, // Ignored. Flag retained for backwards compatibility.
        toplevel    : false,
    });
});

AST_Toplevel.DEFMETHOD("mangle_names", function(options){
    options = this._default_mangler_options(options);

    // Never mangle arguments
    options.except.push('arguments');

    // We only need to mangle declaration nodes.  Special logic wired
    // into the code generator will display the mangled name if it's
    // present (and for AST_SymbolRef-s it'll use the mangled name of
    // the AST_SymbolDeclaration that it points to).
    var lname = -1;
    var to_mangle = [];

    if (options.cache) {
        this.globals.each(function(symbol){
            if (options.except.indexOf(symbol.name) < 0) {
                to_mangle.push(symbol);
            }
        });
    }

    var tw = new TreeWalker(function(node, descend){
        if (node instanceof AST_LabeledStatement) {
            // lname is incremented when we get to the AST_Label
            var save_nesting = lname;
            descend();
            lname = save_nesting;
            return true;        // don't descend again in TreeWalker
        }
        if (node instanceof AST_Scope) {
            var p = tw.parent(), a = [];
            node.variables.each(function(symbol){
                if (options.except.indexOf(symbol.name) < 0) {
                    a.push(symbol);
                }
            });
            to_mangle.push.apply(to_mangle, a);
            return;
        }
        if (node instanceof AST_Label) {
            var name;
            do name = base54(++lname); while (!is_identifier(name));
            node.mangled_name = name;
            return true;
        }
        if (options.screw_ie8 && node instanceof AST_SymbolCatch) {
            to_mangle.push(node.definition());
            return;
        }
    });
    this.walk(tw);
    to_mangle.forEach(function(def){ def.mangle(options) });

    if (options.cache) {
        options.cache.cname = this.cname;
    }
});

AST_Toplevel.DEFMETHOD("compute_char_frequency", function(options){
    options = this._default_mangler_options(options);
    var tw = new TreeWalker(function(node){
        if (node instanceof AST_Constant)
            base54.consider(node.print_to_string());
        else if (node instanceof AST_Return)
            base54.consider("return");
        else if (node instanceof AST_Throw)
            base54.consider("throw");
        else if (node instanceof AST_Continue)
            base54.consider("continue");
        else if (node instanceof AST_Break)
            base54.consider("break");
        else if (node instanceof AST_Debugger)
            base54.consider("debugger");
        else if (node instanceof AST_Directive)
            base54.consider(node.value);
        else if (node instanceof AST_While)
            base54.consider("while");
        else if (node instanceof AST_Do)
            base54.consider("do while");
        else if (node instanceof AST_If) {
            base54.consider("if");
            if (node.alternative) base54.consider("else");
        }
        else if (node instanceof AST_Var)
            base54.consider("var");
        else if (node instanceof AST_Const)
            base54.consider("const");
        else if (node instanceof AST_Lambda)
            base54.consider("function");
        else if (node instanceof AST_For)
            base54.consider("for");
        else if (node instanceof AST_ForIn)
            base54.consider("for in");
        else if (node instanceof AST_Switch)
            base54.consider("switch");
        else if (node instanceof AST_Case)
            base54.consider("case");
        else if (node instanceof AST_Default)
            base54.consider("default");
        else if (node instanceof AST_With)
            base54.consider("with");
        else if (node instanceof AST_ObjectSetter)
            base54.consider("set" + node.key);
        else if (node instanceof AST_ObjectGetter)
            base54.consider("get" + node.key);
        else if (node instanceof AST_ObjectKeyVal)
            base54.consider(node.key);
        else if (node instanceof AST_New)
            base54.consider("new");
        else if (node instanceof AST_This)
            base54.consider("this");
        else if (node instanceof AST_Try)
            base54.consider("try");
        else if (node instanceof AST_Catch)
            base54.consider("catch");
        else if (node instanceof AST_Finally)
            base54.consider("finally");
        else if (node instanceof AST_Symbol && node.unmangleable(options))
            base54.consider(node.name);
        else if (node instanceof AST_Unary || node instanceof AST_Binary)
            base54.consider(node.operator);
        else if (node instanceof AST_Dot)
            base54.consider(node.property);
    });
    this.walk(tw);
    base54.sort();
});

var base54 = (function() {
    var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
    var chars, frequency;
    function reset() {
        frequency = Object.create(null);
        chars = string.split("").map(function(ch){ return ch.charCodeAt(0) });
        chars.forEach(function(ch){ frequency[ch] = 0 });
    }
    base54.consider = function(str){
        for (var i = str.length; --i >= 0;) {
            var code = str.charCodeAt(i);
            if (code in frequency) ++frequency[code];
        }
    };
    base54.sort = function() {
        chars = mergeSort(chars, function(a, b){
            if (is_digit(a) && !is_digit(b)) return 1;
            if (is_digit(b) && !is_digit(a)) return -1;
            return frequency[b] - frequency[a];
        });
    };
    base54.reset = reset;
    reset();
    base54.get = function(){ return chars };
    base54.freq = function(){ return frequency };
    function base54(num) {
        var ret = "", base = 54;
        num++;
        do {
            num--;
            ret += String.fromCharCode(chars[num % base]);
            num = Math.floor(num / base);
            base = 64;
        } while (num > 0);
        return ret;
    };
    return base54;
})();

AST_Toplevel.DEFMETHOD("scope_warnings", function(options){
    options = defaults(options, {
        assign_to_global : true,
        eval             : true,
        func_arguments   : true,
        nested_defuns    : true,
        undeclared       : false, // this makes a lot of noise
        unreferenced     : true,
    });
    var tw = new TreeWalker(function(node){
        if (options.undeclared
            && node instanceof AST_SymbolRef
            && node.undeclared())
        {
            // XXX: this also warns about JS standard names,
            // i.e. Object, Array, parseInt etc.  Should add a list of
            // exceptions.
            AST_Node.warn("Undeclared symbol: {name} [{file}:{line},{col}]", {
                name: node.name,
                file: node.start.file,
                line: node.start.line,
                col: node.start.col
            });
        }
        if (options.assign_to_global)
        {
            var sym = null;
            if (node instanceof AST_Assign && node.left instanceof AST_SymbolRef)
                sym = node.left;
            else if (node instanceof AST_ForIn && node.init instanceof AST_SymbolRef)
                sym = node.init;
            if (sym
                && (sym.undeclared()
                    || (sym.global() && sym.scope !== sym.definition().scope))) {
                AST_Node.warn("{msg}: {name} [{file}:{line},{col}]", {
                    msg: sym.undeclared() ? "Accidental global?" : "Assignment to global",
                    name: sym.name,
                    file: sym.start.file,
                    line: sym.start.line,
                    col: sym.start.col
                });
            }
        }
        if (options.eval
            && node instanceof AST_SymbolRef
            && node.undeclared()
            && node.name == "eval") {
            AST_Node.warn("Eval is used [{file}:{line},{col}]", node.start);
        }
        if (options.unreferenced
            && (node instanceof AST_SymbolDeclaration || node instanceof AST_Label)
            && !(node instanceof AST_SymbolCatch)
            && node.unreferenced()) {
            AST_Node.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]", {
                type: node instanceof AST_Label ? "Label" : "Symbol",
                name: node.name,
                file: node.start.file,
                line: node.start.line,
                col: node.start.col
            });
        }
        if (options.func_arguments
            && node instanceof AST_Lambda
            && node.uses_arguments) {
            AST_Node.warn("arguments used in function {name} [{file}:{line},{col}]", {
                name: node.name ? node.name.name : "anonymous",
                file: node.start.file,
                line: node.start.line,
                col: node.start.col
            });
        }
        if (options.nested_defuns
            && node instanceof AST_Defun
            && !(tw.parent() instanceof AST_Scope)) {
            AST_Node.warn("Function {name} declared in nested statement \"{type}\" [{file}:{line},{col}]", {
                name: node.name.name,
                type: tw.parent().TYPE,
                file: node.start.file,
                line: node.start.line,
                col: node.start.col
            });
        }
    });
    this.walk(tw);
});
