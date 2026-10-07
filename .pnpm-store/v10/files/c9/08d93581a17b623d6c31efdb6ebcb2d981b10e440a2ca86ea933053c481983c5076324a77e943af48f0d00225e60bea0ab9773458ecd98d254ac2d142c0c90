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
    MAP,
    noop
} from "./utils/index.js";
import { parse } from "./parse.js";

function DEFNODE(type, props, ctor, methods, base = AST_Node) {
    if (!props) props = [];
    else props = props.split(/\s+/);
    var self_props = props;
    if (base && base.PROPS)
        props = props.concat(base.PROPS);
    const proto = base && Object.create(base.prototype);
    if (proto) {
        ctor.prototype = proto;
        ctor.BASE = base;
    }
    if (base) base.SUBCLASSES.push(ctor);
    ctor.prototype.CTOR = ctor;
    ctor.prototype.constructor = ctor;
    ctor.PROPS = props || null;
    ctor.SELF_PROPS = self_props;
    ctor.SUBCLASSES = [];
    if (type) {
        ctor.prototype.TYPE = ctor.TYPE = type;
    }
    if (methods) for (let i in methods) if (HOP(methods, i)) {
        if (i[0] === "$") {
            ctor[i.substr(1)] = methods[i];
        } else {
            ctor.prototype[i] = methods[i];
        }
    }
    ctor.DEFMETHOD = function(name, method) {
        this.prototype[name] = method;
    };
    return ctor;
}

const has_tok_flag = (tok, flag) => Boolean(tok.flags & flag);
const set_tok_flag = (tok, flag, truth) => {
    if (truth) {
        tok.flags |= flag;
    } else {
        tok.flags &= ~flag;
    }
};

const TOK_FLAG_NLB          = 0b0001;
const TOK_FLAG_QUOTE_SINGLE = 0b0010;
const TOK_FLAG_QUOTE_EXISTS = 0b0100;
const TOK_FLAG_TEMPLATE_END = 0b1000;

class AST_Token {
    constructor(type, value, line, col, pos, nlb, comments_before, comments_after, file) {
        this.flags = (nlb ? 1 : 0);

        this.type = type;
        this.value = value;
        this.line = line;
        this.col = col;
        this.pos = pos;
        this.comments_before = comments_before;
        this.comments_after = comments_after;
        this.file = file;

        Object.seal(this);
    }

    // Return a string summary of the token for node.js console.log
    [Symbol.for("nodejs.util.inspect.custom")](_depth, options) {
        const special = str => options.stylize(str, "special");
        const quote = typeof this.value === "string" && this.value.includes("`") ? "'" : "`";
        const value = `${quote}${this.value}${quote}`;
        return `${special("[AST_Token")} ${value} at ${this.line}:${this.col}${special("]")}`;
    }

    get nlb() {
        return has_tok_flag(this, TOK_FLAG_NLB);
    }

    set nlb(new_nlb) {
        set_tok_flag(this, TOK_FLAG_NLB, new_nlb);
    }

    get quote() {
        return !has_tok_flag(this, TOK_FLAG_QUOTE_EXISTS)
            ? ""
            : (has_tok_flag(this, TOK_FLAG_QUOTE_SINGLE) ? "'" : '"');
    }

    set quote(quote_type) {
        set_tok_flag(this, TOK_FLAG_QUOTE_SINGLE, quote_type === "'");
        set_tok_flag(this, TOK_FLAG_QUOTE_EXISTS, !!quote_type);
    }

    get template_end() {
        return has_tok_flag(this, TOK_FLAG_TEMPLATE_END);
    }

    set template_end(new_template_end) {
        set_tok_flag(this, TOK_FLAG_TEMPLATE_END, new_template_end);
    }
}

var AST_Node = DEFNODE("Node", "start end", function AST_Node(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    _clone: function(deep) {
        if (deep) {
            var self = this.clone();
            return self.transform(new TreeTransformer(function(node) {
                if (node !== self) {
                    return node.clone(true);
                }
            }));
        }
        return new this.CTOR(this);
    },
    clone: function(deep) {
        return this._clone(deep);
    },
    $documentation: "Base class of all AST nodes",
    $propdoc: {
        start: "[AST_Token] The first token of this node",
        end: "[AST_Token] The last token of this node"
    },
    _walk: function(visitor) {
        return visitor._visit(this);
    },
    walk: function(visitor) {
        return this._walk(visitor); // not sure the indirection will be any help
    },
    _children_backwards: () => {}
}, null);

/* -----[ statements ]----- */

var AST_Statement = DEFNODE("Statement", null, function AST_Statement(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class of all statements",
});

var AST_Debugger = DEFNODE("Debugger", null, function AST_Debugger(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Represents a debugger statement",
}, AST_Statement);

var AST_Directive = DEFNODE("Directive", "value quote", function AST_Directive(props) {
    if (props) {
        this.value = props.value;
        this.quote = props.quote;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Represents a directive, like \"use strict\";",
    $propdoc: {
        value: "[string] The value of this directive as a plain string (it's not an AST_String!)",
        quote: "[string] the original quote character"
    },
}, AST_Statement);

var AST_SimpleStatement = DEFNODE("SimpleStatement", "body", function AST_SimpleStatement(props) {
    if (props) {
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A statement consisting of an expression, i.e. a = 1 + 2",
    $propdoc: {
        body: "[AST_Node] an expression node (should not be instanceof AST_Statement)"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.body._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.body);
    }
}, AST_Statement);

function walk_body(node, visitor) {
    const body = node.body;
    for (var i = 0, len = body.length; i < len; i++) {
        body[i]._walk(visitor);
    }
}

function clone_block_scope(deep) {
    var clone = this._clone(deep);
    if (this.block_scope) {
        clone.block_scope = this.block_scope.clone();
    }
    return clone;
}

var AST_Block = DEFNODE("Block", "body block_scope", function AST_Block(props) {
    if (props) {
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A body of statements (usually braced)",
    $propdoc: {
        body: "[AST_Statement*] an array of statements",
        block_scope: "[AST_Scope] the block scope"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            walk_body(this, visitor);
        });
    },
    _children_backwards(push) {
        let i = this.body.length;
        while (i--) push(this.body[i]);
    },
    clone: clone_block_scope
}, AST_Statement);

var AST_BlockStatement = DEFNODE("BlockStatement", null, function AST_BlockStatement(props) {
    if (props) {
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A block statement",
}, AST_Block);

var AST_EmptyStatement = DEFNODE("EmptyStatement", null, function AST_EmptyStatement(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The empty statement (empty block or simply a semicolon)"
}, AST_Statement);

var AST_StatementWithBody = DEFNODE("StatementWithBody", "body", function AST_StatementWithBody(props) {
    if (props) {
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",
    $propdoc: {
        body: "[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"
    }
}, AST_Statement);

var AST_LabeledStatement = DEFNODE("LabeledStatement", "label", function AST_LabeledStatement(props) {
    if (props) {
        this.label = props.label;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Statement with a label",
    $propdoc: {
        label: "[AST_Label] a label definition"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.label._walk(visitor);
            this.body._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.body);
        push(this.label);
    },
    clone: function(deep) {
        var node = this._clone(deep);
        if (deep) {
            var label = node.label;
            var def = this.label;
            node.walk(new TreeWalker(function(node) {
                if (node instanceof AST_LoopControl
                    && node.label && node.label.thedef === def) {
                    node.label.thedef = label;
                    label.references.push(node);
                }
            }));
        }
        return node;
    }
}, AST_StatementWithBody);

var AST_IterationStatement = DEFNODE(
    "IterationStatement",
    "block_scope",
    function AST_IterationStatement(props) {
        if (props) {
            this.block_scope = props.block_scope;
            this.body = props.body;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "Internal class.  All loops inherit from it.",
        $propdoc: {
            block_scope: "[AST_Scope] the block scope for this iteration statement."
        },
        clone: clone_block_scope
    },
    AST_StatementWithBody
);

var AST_DWLoop = DEFNODE("DWLoop", "condition", function AST_DWLoop(props) {
    if (props) {
        this.condition = props.condition;
        this.block_scope = props.block_scope;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for do/while statements",
    $propdoc: {
        condition: "[AST_Node] the loop condition.  Should not be instanceof AST_Statement"
    }
}, AST_IterationStatement);

var AST_Do = DEFNODE("Do", null, function AST_Do(props) {
    if (props) {
        this.condition = props.condition;
        this.block_scope = props.block_scope;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `do` statement",
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.body._walk(visitor);
            this.condition._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.condition);
        push(this.body);
    }
}, AST_DWLoop);

var AST_While = DEFNODE("While", null, function AST_While(props) {
    if (props) {
        this.condition = props.condition;
        this.block_scope = props.block_scope;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `while` statement",
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.condition._walk(visitor);
            this.body._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.body);
        push(this.condition);
    },
}, AST_DWLoop);

var AST_For = DEFNODE("For", "init condition step", function AST_For(props) {
    if (props) {
        this.init = props.init;
        this.condition = props.condition;
        this.step = props.step;
        this.block_scope = props.block_scope;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `for` statement",
    $propdoc: {
        init: "[AST_Node?] the `for` initialization code, or null if empty",
        condition: "[AST_Node?] the `for` termination clause, or null if empty",
        step: "[AST_Node?] the `for` update clause, or null if empty"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            if (this.init) this.init._walk(visitor);
            if (this.condition) this.condition._walk(visitor);
            if (this.step) this.step._walk(visitor);
            this.body._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.body);
        if (this.step) push(this.step);
        if (this.condition) push(this.condition);
        if (this.init) push(this.init);
    },
}, AST_IterationStatement);

var AST_ForIn = DEFNODE("ForIn", "init object", function AST_ForIn(props) {
    if (props) {
        this.init = props.init;
        this.object = props.object;
        this.block_scope = props.block_scope;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `for ... in` statement",
    $propdoc: {
        init: "[AST_Node] the `for/in` initialization code",
        object: "[AST_Node] the object that we're looping through"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.init._walk(visitor);
            this.object._walk(visitor);
            this.body._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.body);
        if (this.object) push(this.object);
        if (this.init) push(this.init);
    },
}, AST_IterationStatement);

var AST_ForOf = DEFNODE("ForOf", "await", function AST_ForOf(props) {
    if (props) {
        this.await = props.await;
        this.init = props.init;
        this.object = props.object;
        this.block_scope = props.block_scope;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `for ... of` statement",
}, AST_ForIn);

var AST_With = DEFNODE("With", "expression", function AST_With(props) {
    if (props) {
        this.expression = props.expression;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `with` statement",
    $propdoc: {
        expression: "[AST_Node] the `with` expression"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
            this.body._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.body);
        push(this.expression);
    },
}, AST_StatementWithBody);

/* -----[ scope and functions ]----- */

var AST_Scope = DEFNODE(
    "Scope",
    "variables uses_with uses_eval parent_scope enclosed cname",
    function AST_Scope(props) {
        if (props) {
            this.variables = props.variables;
            this.uses_with = props.uses_with;
            this.uses_eval = props.uses_eval;
            this.parent_scope = props.parent_scope;
            this.enclosed = props.enclosed;
            this.cname = props.cname;
            this.body = props.body;
            this.block_scope = props.block_scope;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "Base class for all statements introducing a lexical scope",
        $propdoc: {
            variables: "[Map/S] a map of name -> SymbolDef for all variables/functions defined in this scope",
            uses_with: "[boolean/S] tells whether this scope uses the `with` statement",
            uses_eval: "[boolean/S] tells whether this scope contains a direct call to the global `eval`",
            parent_scope: "[AST_Scope?/S] link to the parent scope",
            enclosed: "[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",
            cname: "[integer/S] current index for mangling variables (used internally by the mangler)",
        },
        get_defun_scope: function() {
            var self = this;
            while (self.is_block_scope()) {
                self = self.parent_scope;
            }
            return self;
        },
        clone: function(deep, toplevel) {
            var node = this._clone(deep);
            if (deep && this.variables && toplevel && !this._block_scope) {
                node.figure_out_scope({}, {
                    toplevel: toplevel,
                    parent_scope: this.parent_scope
                });
            } else {
                if (this.variables) node.variables = new Map(this.variables);
                if (this.enclosed) node.enclosed = this.enclosed.slice();
                if (this._block_scope) node._block_scope = this._block_scope;
            }
            return node;
        },
        pinned: function() {
            return this.uses_eval || this.uses_with;
        }
    },
    AST_Block
);

var AST_Toplevel = DEFNODE("Toplevel", "globals", function AST_Toplevel(props) {
    if (props) {
        this.globals = props.globals;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The toplevel scope",
    $propdoc: {
        globals: "[Map/S] a map of name -> SymbolDef for all undeclared names",
    },
    wrap_commonjs: function(name) {
        var body = this.body;
        var wrapped_tl = "(function(exports){'$ORIG';})(typeof " + name + "=='undefined'?(" + name + "={}):" + name + ");";
        wrapped_tl = parse(wrapped_tl);
        wrapped_tl = wrapped_tl.transform(new TreeTransformer(function(node) {
            if (node instanceof AST_Directive && node.value == "$ORIG") {
                return MAP.splice(body);
            }
        }));
        return wrapped_tl;
    },
    wrap_enclose: function(args_values) {
        if (typeof args_values != "string") args_values = "";
        var index = args_values.indexOf(":");
        if (index < 0) index = args_values.length;
        var body = this.body;
        return parse([
            "(function(",
            args_values.slice(0, index),
            '){"$ORIG"})(',
            args_values.slice(index + 1),
            ")"
        ].join("")).transform(new TreeTransformer(function(node) {
            if (node instanceof AST_Directive && node.value == "$ORIG") {
                return MAP.splice(body);
            }
        }));
    }
}, AST_Scope);

var AST_Expansion = DEFNODE("Expansion", "expression", function AST_Expansion(props) {
    if (props) {
        this.expression = props.expression;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "An expandible argument, such as ...rest, a splat, such as [1,2,...all], or an expansion in a variable declaration, such as var [first, ...rest] = list",
    $propdoc: {
        expression: "[AST_Node] the thing to be expanded"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression.walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.expression);
    },
});

var AST_Lambda = DEFNODE(
    "Lambda",
    "name argnames uses_arguments is_generator async",
    function AST_Lambda(props) {
        if (props) {
            this.name = props.name;
            this.argnames = props.argnames;
            this.uses_arguments = props.uses_arguments;
            this.is_generator = props.is_generator;
            this.async = props.async;
            this.variables = props.variables;
            this.uses_with = props.uses_with;
            this.uses_eval = props.uses_eval;
            this.parent_scope = props.parent_scope;
            this.enclosed = props.enclosed;
            this.cname = props.cname;
            this.body = props.body;
            this.block_scope = props.block_scope;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "Base class for functions",
        $propdoc: {
            name: "[AST_SymbolDeclaration?] the name of this function",
            argnames: "[AST_SymbolFunarg|AST_Destructuring|AST_Expansion|AST_DefaultAssign*] array of function arguments, destructurings, or expanding arguments",
            uses_arguments: "[boolean/S] tells whether this function accesses the arguments array",
            is_generator: "[boolean] is this a generator method",
            async: "[boolean] is this method async",
        },
        args_as_names: function () {
            var out = [];
            for (var i = 0; i < this.argnames.length; i++) {
                if (this.argnames[i] instanceof AST_Destructuring) {
                    out.push(...this.argnames[i].all_symbols());
                } else {
                    out.push(this.argnames[i]);
                }
            }
            return out;
        },
        _walk: function(visitor) {
            return visitor._visit(this, function() {
                if (this.name) this.name._walk(visitor);
                var argnames = this.argnames;
                for (var i = 0, len = argnames.length; i < len; i++) {
                    argnames[i]._walk(visitor);
                }
                walk_body(this, visitor);
            });
        },
        _children_backwards(push) {
            let i = this.body.length;
            while (i--) push(this.body[i]);

            i = this.argnames.length;
            while (i--) push(this.argnames[i]);

            if (this.name) push(this.name);
        },
        is_braceless() {
            return this.body[0] instanceof AST_Return && this.body[0].value;
        },
        // Default args and expansion don't count, so .argnames.length doesn't cut it
        length_property() {
            let length = 0;

            for (const arg of this.argnames) {
                if (arg instanceof AST_SymbolFunarg || arg instanceof AST_Destructuring) {
                    length++;
                }
            }

            return length;
        }
    },
    AST_Scope
);

var AST_Accessor = DEFNODE("Accessor", null, function AST_Accessor(props) {
    if (props) {
        this.name = props.name;
        this.argnames = props.argnames;
        this.uses_arguments = props.uses_arguments;
        this.is_generator = props.is_generator;
        this.async = props.async;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A setter/getter function.  The `name` property is always null."
}, AST_Lambda);

var AST_Function = DEFNODE("Function", null, function AST_Function(props) {
    if (props) {
        this.name = props.name;
        this.argnames = props.argnames;
        this.uses_arguments = props.uses_arguments;
        this.is_generator = props.is_generator;
        this.async = props.async;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A function expression"
}, AST_Lambda);

var AST_Arrow = DEFNODE("Arrow", null, function AST_Arrow(props) {
    if (props) {
        this.name = props.name;
        this.argnames = props.argnames;
        this.uses_arguments = props.uses_arguments;
        this.is_generator = props.is_generator;
        this.async = props.async;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "An ES6 Arrow function ((a) => b)"
}, AST_Lambda);

var AST_Defun = DEFNODE("Defun", null, function AST_Defun(props) {
    if (props) {
        this.name = props.name;
        this.argnames = props.argnames;
        this.uses_arguments = props.uses_arguments;
        this.is_generator = props.is_generator;
        this.async = props.async;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A function definition"
}, AST_Lambda);

/* -----[ DESTRUCTURING ]----- */
var AST_Destructuring = DEFNODE("Destructuring", "names is_array", function AST_Destructuring(props) {
    if (props) {
        this.names = props.names;
        this.is_array = props.is_array;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A destructuring of several names. Used in destructuring assignment and with destructuring function argument names",
    $propdoc: {
        "names": "[AST_Node*] Array of properties or elements",
        "is_array": "[Boolean] Whether the destructuring represents an object or array"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.names.forEach(function(name) {
                name._walk(visitor);
            });
        });
    },
    _children_backwards(push) {
        let i = this.names.length;
        while (i--) push(this.names[i]);
    },
    all_symbols: function() {
        var out = [];
        walk(this, node => {
            if (node instanceof AST_SymbolDeclaration) {
                out.push(node);
            }
            if (node instanceof AST_Lambda) {
                return true;
            }
        });
        return out;
    }
});

var AST_PrefixedTemplateString = DEFNODE(
    "PrefixedTemplateString",
    "template_string prefix",
    function AST_PrefixedTemplateString(props) {
        if (props) {
            this.template_string = props.template_string;
            this.prefix = props.prefix;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "A templatestring with a prefix, such as String.raw`foobarbaz`",
        $propdoc: {
            template_string: "[AST_TemplateString] The template string",
            prefix: "[AST_Node] The prefix, which will get called."
        },
        _walk: function(visitor) {
            return visitor._visit(this, function () {
                this.prefix._walk(visitor);
                this.template_string._walk(visitor);
            });
        },
        _children_backwards(push) {
            push(this.template_string);
            push(this.prefix);
        },
    }
);

var AST_TemplateString = DEFNODE("TemplateString", "segments", function AST_TemplateString(props) {
    if (props) {
        this.segments = props.segments;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A template string literal",
    $propdoc: {
        segments: "[AST_Node*] One or more segments, starting with AST_TemplateSegment. AST_Node may follow AST_TemplateSegment, but each AST_Node must be followed by AST_TemplateSegment."
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.segments.forEach(function(seg) {
                seg._walk(visitor);
            });
        });
    },
    _children_backwards(push) {
        let i = this.segments.length;
        while (i--) push(this.segments[i]);
    }
});

var AST_TemplateSegment = DEFNODE("TemplateSegment", "value raw", function AST_TemplateSegment(props) {
    if (props) {
        this.value = props.value;
        this.raw = props.raw;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A segment of a template string literal",
    $propdoc: {
        value: "Content of the segment",
        raw: "Raw source of the segment",
    }
});

/* -----[ JUMPS ]----- */

var AST_Jump = DEFNODE("Jump", null, function AST_Jump(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"
}, AST_Statement);

/** Base class for “exits” (`return` and `throw`) */
var AST_Exit = DEFNODE("Exit", "value", function AST_Exit(props) {
    if (props) {
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for “exits” (`return` and `throw`)",
    $propdoc: {
        value: "[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"
    },
    _walk: function(visitor) {
        return visitor._visit(this, this.value && function() {
            this.value._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.value) push(this.value);
    },
}, AST_Jump);

var AST_Return = DEFNODE("Return", null, function AST_Return(props) {
    if (props) {
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `return` statement"
}, AST_Exit);

var AST_Throw = DEFNODE("Throw", null, function AST_Throw(props) {
    if (props) {
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `throw` statement"
}, AST_Exit);

var AST_LoopControl = DEFNODE("LoopControl", "label", function AST_LoopControl(props) {
    if (props) {
        this.label = props.label;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for loop control statements (`break` and `continue`)",
    $propdoc: {
        label: "[AST_LabelRef?] the label, or null if none",
    },
    _walk: function(visitor) {
        return visitor._visit(this, this.label && function() {
            this.label._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.label) push(this.label);
    },
}, AST_Jump);

var AST_Break = DEFNODE("Break", null, function AST_Break(props) {
    if (props) {
        this.label = props.label;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `break` statement"
}, AST_LoopControl);

var AST_Continue = DEFNODE("Continue", null, function AST_Continue(props) {
    if (props) {
        this.label = props.label;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `continue` statement"
}, AST_LoopControl);

var AST_Await = DEFNODE("Await", "expression", function AST_Await(props) {
    if (props) {
        this.expression = props.expression;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "An `await` statement",
    $propdoc: {
        expression: "[AST_Node] the mandatory expression being awaited",
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.expression);
    },
});

var AST_Yield = DEFNODE("Yield", "expression is_star", function AST_Yield(props) {
    if (props) {
        this.expression = props.expression;
        this.is_star = props.is_star;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `yield` statement",
    $propdoc: {
        expression: "[AST_Node?] the value returned or thrown by this statement; could be null (representing undefined) but only when is_star is set to false",
        is_star: "[Boolean] Whether this is a yield or yield* statement"
    },
    _walk: function(visitor) {
        return visitor._visit(this, this.expression && function() {
            this.expression._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.expression) push(this.expression);
    }
});

/* -----[ IF ]----- */

var AST_If = DEFNODE("If", "condition alternative", function AST_If(props) {
    if (props) {
        this.condition = props.condition;
        this.alternative = props.alternative;
        this.body = props.body;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `if` statement",
    $propdoc: {
        condition: "[AST_Node] the `if` condition",
        alternative: "[AST_Statement?] the `else` part, or null if not present"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.condition._walk(visitor);
            this.body._walk(visitor);
            if (this.alternative) this.alternative._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.alternative) {
            push(this.alternative);
        }
        push(this.body);
        push(this.condition);
    }
}, AST_StatementWithBody);

/* -----[ SWITCH ]----- */

var AST_Switch = DEFNODE("Switch", "expression", function AST_Switch(props) {
    if (props) {
        this.expression = props.expression;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `switch` statement",
    $propdoc: {
        expression: "[AST_Node] the `switch` “discriminant”"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
            walk_body(this, visitor);
        });
    },
    _children_backwards(push) {
        let i = this.body.length;
        while (i--) push(this.body[i]);
        push(this.expression);
    }
}, AST_Block);

var AST_SwitchBranch = DEFNODE("SwitchBranch", null, function AST_SwitchBranch(props) {
    if (props) {
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for `switch` branches",
}, AST_Block);

var AST_Default = DEFNODE("Default", null, function AST_Default(props) {
    if (props) {
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `default` switch branch",
}, AST_SwitchBranch);

var AST_Case = DEFNODE("Case", "expression", function AST_Case(props) {
    if (props) {
        this.expression = props.expression;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `case` switch branch",
    $propdoc: {
        expression: "[AST_Node] the `case` expression"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
            walk_body(this, visitor);
        });
    },
    _children_backwards(push) {
        let i = this.body.length;
        while (i--) push(this.body[i]);
        push(this.expression);
    },
}, AST_SwitchBranch);

/* -----[ EXCEPTIONS ]----- */

var AST_Try = DEFNODE("Try", "body bcatch bfinally", function AST_Try(props) {
    if (props) {
        this.body = props.body;
        this.bcatch = props.bcatch;
        this.bfinally = props.bfinally;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `try` statement",
    $propdoc: {
        body: "[AST_TryBlock] the try block",
        bcatch: "[AST_Catch?] the catch block, or null if not present",
        bfinally: "[AST_Finally?] the finally block, or null if not present"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.body._walk(visitor);
            if (this.bcatch) this.bcatch._walk(visitor);
            if (this.bfinally) this.bfinally._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.bfinally) push(this.bfinally);
        if (this.bcatch) push(this.bcatch);
        push(this.body);
    },
}, AST_Statement);

var AST_TryBlock = DEFNODE("TryBlock", null, function AST_TryBlock(props) {
    if (props) {
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `try` block of a try statement"
}, AST_Block);

var AST_Catch = DEFNODE("Catch", "argname", function AST_Catch(props) {
    if (props) {
        this.argname = props.argname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `catch` node; only makes sense as part of a `try` statement",
    $propdoc: {
        argname: "[AST_SymbolCatch|AST_Destructuring|AST_Expansion|AST_DefaultAssign] symbol for the exception"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            if (this.argname) this.argname._walk(visitor);
            walk_body(this, visitor);
        });
    },
    _children_backwards(push) {
        let i = this.body.length;
        while (i--) push(this.body[i]);
        if (this.argname) push(this.argname);
    },
}, AST_Block);

var AST_Finally = DEFNODE("Finally", null, function AST_Finally(props) {
    if (props) {
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `finally` node; only makes sense as part of a `try` statement"
}, AST_Block);

/* -----[ VAR/CONST ]----- */

var AST_DefinitionsLike = DEFNODE("DefinitionsLike", "definitions", function AST_DefinitionsLike(props) {
    if (props) {
        this.definitions = props.definitions;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for variable definitions and `using`",
    $propdoc: {
        definitions: "[AST_VarDef*|AST_UsingDef*] array of variable definitions"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            var definitions = this.definitions;
            for (var i = 0, len = definitions.length; i < len; i++) {
                definitions[i]._walk(visitor);
            }
        });
    },
    _children_backwards(push) {
        let i = this.definitions.length;
        while (i--) push(this.definitions[i]);
    },
}, AST_Statement);

var AST_Definitions = DEFNODE("Definitions", null, function AST_Definitions(props) {
    if (props) {
        this.definitions = props.definitions;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for `var` or `const` nodes (variable declarations/initializations)",
}, AST_DefinitionsLike);

var AST_Var = DEFNODE("Var", null, function AST_Var(props) {
    if (props) {
        this.definitions = props.definitions;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `var` statement"
}, AST_Definitions);

var AST_Let = DEFNODE("Let", null, function AST_Let(props) {
    if (props) {
        this.definitions = props.definitions;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `let` statement"
}, AST_Definitions);

var AST_Const = DEFNODE("Const", null, function AST_Const(props) {
    if (props) {
        this.definitions = props.definitions;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `const` statement"
}, AST_Definitions);

var AST_Using = DEFNODE("Using", "await", function AST_Using(props) {
    if (props) {
        this.await = props.await;
        this.definitions = props.definitions;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `using` statement",
    $propdoc: {
        await: "[boolean] Whether it's `await using`"
    },
}, AST_DefinitionsLike);

var AST_VarDefLike = DEFNODE("VarDefLike", "name value", function AST_VarDefLike(props) {
    if (props) {
        this.name = props.name;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A name=value pair in a variable definition statement or `using`",
    $propdoc: {
        name: "[AST_Destructuring|AST_SymbolDeclaration] name of the variable",
        value: "[AST_Node?] initializer, or null of there's no initializer"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.name._walk(visitor);
            if (this.value) this.value._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.value) push(this.value);
        push(this.name);
    },
    declarations_as_names() {
        if (this.name instanceof AST_SymbolDeclaration) {
            return [this.name];
        } else {
            return this.name.all_symbols();
        }
    }
});

var AST_VarDef = DEFNODE("VarDef", null, function AST_VarDef(props) {
    if (props) {
        this.name = props.name;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A variable declaration; only appears in a AST_Definitions node",
}, AST_VarDefLike);

var AST_UsingDef = DEFNODE("UsingDef", null, function AST_UsingDef(props) {
    if (props) {
        this.name = props.name;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Like VarDef but specific to AST_Using",
}, AST_VarDefLike);

var AST_NameMapping = DEFNODE("NameMapping", "foreign_name name", function AST_NameMapping(props) {
    if (props) {
        this.foreign_name = props.foreign_name;
        this.name = props.name;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The part of the export/import statement that declare names from a module.",
    $propdoc: {
        foreign_name: "[AST_SymbolExportForeign|AST_SymbolImportForeign] The name being exported/imported (as specified in the module)",
        name: "[AST_SymbolExport|AST_SymbolImport] The name as it is visible to this module."
    },
    _walk: function (visitor) {
        return visitor._visit(this, function() {
            this.foreign_name._walk(visitor);
            this.name._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.name);
        push(this.foreign_name);
    },
});

var AST_Import = DEFNODE(
    "Import",
    "imported_name imported_names module_name attributes",
    function AST_Import(props) {
        if (props) {
            this.imported_name = props.imported_name;
            this.imported_names = props.imported_names;
            this.module_name = props.module_name;
            this.attributes = props.attributes;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "An `import` statement",
        $propdoc: {
            imported_name: "[AST_SymbolImport] The name of the variable holding the module's default export.",
            imported_names: "[AST_NameMapping*] The names of non-default imported variables",
            module_name: "[AST_String] String literal describing where this module came from",
            attributes: "[AST_Object?] The import attributes (with {...})"
        },
        _walk: function(visitor) {
            return visitor._visit(this, function() {
                if (this.imported_name) {
                    this.imported_name._walk(visitor);
                }
                if (this.imported_names) {
                    this.imported_names.forEach(function(name_import) {
                        name_import._walk(visitor);
                    });
                }
                this.module_name._walk(visitor);
            });
        },
        _children_backwards(push) {
            push(this.module_name);
            if (this.imported_names) {
                let i = this.imported_names.length;
                while (i--) push(this.imported_names[i]);
            }
            if (this.imported_name) push(this.imported_name);
        },
    }
);

var AST_ImportMeta = DEFNODE("ImportMeta", null, function AST_ImportMeta(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A reference to import.meta",
});

var AST_Export = DEFNODE(
    "Export",
    "exported_definition exported_value is_default exported_names module_name attributes",
    function AST_Export(props) {
        if (props) {
            this.exported_definition = props.exported_definition;
            this.exported_value = props.exported_value;
            this.is_default = props.is_default;
            this.exported_names = props.exported_names;
            this.module_name = props.module_name;
            this.attributes = props.attributes;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "An `export` statement",
        $propdoc: {
            exported_definition: "[AST_Defun|AST_Definitions|AST_DefClass?] An exported definition",
            exported_value: "[AST_Node?] An exported value",
            exported_names: "[AST_NameMapping*?] List of exported names",
            module_name: "[AST_String?] Name of the file to load exports from",
            is_default: "[Boolean] Whether this is the default exported value of this module",
            attributes: "[AST_Object?] The import attributes"
        },
        _walk: function (visitor) {
            return visitor._visit(this, function () {
                if (this.exported_definition) {
                    this.exported_definition._walk(visitor);
                }
                if (this.exported_value) {
                    this.exported_value._walk(visitor);
                }
                if (this.exported_names) {
                    this.exported_names.forEach(function(name_export) {
                        name_export._walk(visitor);
                    });
                }
                if (this.module_name) {
                    this.module_name._walk(visitor);
                }
            });
        },
        _children_backwards(push) {
            if (this.module_name) push(this.module_name);
            if (this.exported_names) {
                let i = this.exported_names.length;
                while (i--) push(this.exported_names[i]);
            }
            if (this.exported_value) push(this.exported_value);
            if (this.exported_definition) push(this.exported_definition);
        }
    },
    AST_Statement
);

/* -----[ OTHER ]----- */

var AST_Call = DEFNODE(
    "Call",
    "expression args optional _annotations",
    function AST_Call(props) {
        if (props) {
            this.expression = props.expression;
            this.args = props.args;
            this.optional = props.optional;
            this._annotations = props._annotations;
            this.start = props.start;
            this.end = props.end;
            this.initialize();
        }

        this.flags = 0;
    },
    {
        $documentation: "A function call expression",
        $propdoc: {
            expression: "[AST_Node] expression to invoke as function",
            args: "[AST_Node*] array of arguments",
            optional: "[boolean] whether this is an optional call (IE ?.() )",
            _annotations: "[number] bitfield containing information about the call"
        },
        initialize() {
            if (this._annotations == null) this._annotations = 0;
        },
        _walk(visitor) {
            return visitor._visit(this, function() {
                var args = this.args;
                for (var i = 0, len = args.length; i < len; i++) {
                    args[i]._walk(visitor);
                }
                this.expression._walk(visitor);  // TODO why do we need to crawl this last?
            });
        },
        _children_backwards(push) {
            let i = this.args.length;
            while (i--) push(this.args[i]);
            push(this.expression);
        },
    }
);

var AST_New = DEFNODE("New", null, function AST_New(props) {
    if (props) {
        this.expression = props.expression;
        this.args = props.args;
        this.optional = props.optional;
        this._annotations = props._annotations;
        this.start = props.start;
        this.end = props.end;
        this.initialize();
    }

    this.flags = 0;
}, {
    $documentation: "An object instantiation.  Derives from a function call since it has exactly the same properties"
}, AST_Call);

var AST_Sequence = DEFNODE("Sequence", "expressions", function AST_Sequence(props) {
    if (props) {
        this.expressions = props.expressions;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A sequence expression (comma-separated expressions)",
    $propdoc: {
        expressions: "[AST_Node*] array of expressions (at least two)"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expressions.forEach(function(node) {
                node._walk(visitor);
            });
        });
    },
    _children_backwards(push) {
        let i = this.expressions.length;
        while (i--) push(this.expressions[i]);
    },
});

var AST_PropAccess = DEFNODE(
    "PropAccess",
    "expression property optional",
    function AST_PropAccess(props) {
        if (props) {
            this.expression = props.expression;
            this.property = props.property;
            this.optional = props.optional;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "Base class for property access expressions, i.e. `a.foo` or `a[\"foo\"]`",
        $propdoc: {
            expression: "[AST_Node] the “container” expression",
            property: "[AST_Node|string] the property to access.  For AST_Dot & AST_DotHash this is always a plain string, while for AST_Sub it's an arbitrary AST_Node",

            optional: "[boolean] whether this is an optional property access (IE ?.)"
        }
    }
);

var AST_Dot = DEFNODE("Dot", "quote", function AST_Dot(props) {
    if (props) {
        this.quote = props.quote;
        this.expression = props.expression;
        this.property = props.property;
        this.optional = props.optional;
        this._annotations = props._annotations;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A dotted property access expression",
    $propdoc: {
        quote: "[string] the original quote character when transformed from AST_Sub",
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.expression);
    },
}, AST_PropAccess);

var AST_DotHash = DEFNODE("DotHash", "", function AST_DotHash(props) {
    if (props) {
        this.expression = props.expression;
        this.property = props.property;
        this.optional = props.optional;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A dotted property access to a private property",
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.expression);
    },
}, AST_PropAccess);

var AST_Sub = DEFNODE("Sub", null, function AST_Sub(props) {
    if (props) {
        this.expression = props.expression;
        this.property = props.property;
        this.optional = props.optional;
        this._annotations = props._annotations;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Index-style property access, i.e. `a[\"foo\"]`",
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
            this.property._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.property);
        push(this.expression);
    },
}, AST_PropAccess);

var AST_Chain = DEFNODE("Chain", "expression", function AST_Chain(props) {
    if (props) {
        this.expression = props.expression;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A chain expression like a?.b?.(c)?.[d]",
    $propdoc: {
        expression: "[AST_Call|AST_Dot|AST_DotHash|AST_Sub] chain element."
    },
    _walk: function (visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.expression);
    },
});

var AST_Unary = DEFNODE("Unary", "operator expression", function AST_Unary(props) {
    if (props) {
        this.operator = props.operator;
        this.expression = props.expression;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for unary expressions",
    $propdoc: {
        operator: "[string] the operator",
        expression: "[AST_Node] expression that this unary operator applies to"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.expression._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.expression);
    },
});

var AST_UnaryPrefix = DEFNODE("UnaryPrefix", null, function AST_UnaryPrefix(props) {
    if (props) {
        this.operator = props.operator;
        this.expression = props.expression;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Unary prefix expression, i.e. `typeof i` or `++i`"
}, AST_Unary);

var AST_UnaryPostfix = DEFNODE("UnaryPostfix", null, function AST_UnaryPostfix(props) {
    if (props) {
        this.operator = props.operator;
        this.expression = props.expression;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Unary postfix expression, i.e. `i++`"
}, AST_Unary);

var AST_Binary = DEFNODE("Binary", "operator left right", function AST_Binary(props) {
    if (props) {
        this.operator = props.operator;
        this.left = props.left;
        this.right = props.right;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Binary expression, i.e. `a + b`",
    $propdoc: {
        left: "[AST_Node] left-hand side expression",
        operator: "[string] the operator",
        right: "[AST_Node] right-hand side expression"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.left._walk(visitor);
            this.right._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.right);
        push(this.left);
    },
});

var AST_Conditional = DEFNODE(
    "Conditional",
    "condition consequent alternative",
    function AST_Conditional(props) {
        if (props) {
            this.condition = props.condition;
            this.consequent = props.consequent;
            this.alternative = props.alternative;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "Conditional expression using the ternary operator, i.e. `a ? b : c`",
        $propdoc: {
            condition: "[AST_Node]",
            consequent: "[AST_Node]",
            alternative: "[AST_Node]"
        },
        _walk: function(visitor) {
            return visitor._visit(this, function() {
                this.condition._walk(visitor);
                this.consequent._walk(visitor);
                this.alternative._walk(visitor);
            });
        },
        _children_backwards(push) {
            push(this.alternative);
            push(this.consequent);
            push(this.condition);
        },
    }
);

var AST_Assign = DEFNODE("Assign", "logical", function AST_Assign(props) {
    if (props) {
        this.logical = props.logical;
        this.operator = props.operator;
        this.left = props.left;
        this.right = props.right;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "An assignment expression — `a = b + 5`",
    $propdoc: {
        logical: "Whether it's a logical assignment"
    }
}, AST_Binary);

var AST_DefaultAssign = DEFNODE("DefaultAssign", null, function AST_DefaultAssign(props) {
    if (props) {
        this.operator = props.operator;
        this.left = props.left;
        this.right = props.right;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A default assignment expression like in `(a = 3) => a`"
}, AST_Binary);

/* -----[ LITERALS ]----- */

var AST_Array = DEFNODE("Array", "elements", function AST_Array(props) {
    if (props) {
        this.elements = props.elements;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "An array literal",
    $propdoc: {
        elements: "[AST_Node*] array of elements"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            var elements = this.elements;
            for (var i = 0, len = elements.length; i < len; i++) {
                elements[i]._walk(visitor);
            }
        });
    },
    _children_backwards(push) {
        let i = this.elements.length;
        while (i--) push(this.elements[i]);
    },
});

var AST_Object = DEFNODE("Object", "properties", function AST_Object(props) {
    if (props) {
        this.properties = props.properties;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "An object literal",
    $propdoc: {
        properties: "[AST_ObjectProperty*] array of properties"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            var properties = this.properties;
            for (var i = 0, len = properties.length; i < len; i++) {
                properties[i]._walk(visitor);
            }
        });
    },
    _children_backwards(push) {
        let i = this.properties.length;
        while (i--) push(this.properties[i]);
    },
});

/* -----[ OBJECT/CLASS PROPERTIES ]----- */

/**
 * Everything inside the curly braces of an object/class is a subclass of AST_ObjectProperty, except for AST_ClassStaticBlock.
 **/
var AST_ObjectProperty = DEFNODE("ObjectProperty", "key value", function AST_ObjectProperty(props) {
    if (props) {
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
        this._annotations = props._annotations;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for literal object properties",
    $propdoc: {
        key: "[string|AST_Node] property name. For ObjectKeyVal this is a string. For getters, setters and computed property this is an AST_Node.",
        value: "[AST_Node] property value.  For getters, setters and methods this is an AST_Accessor."
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            if (this.key instanceof AST_Node)
                this.key._walk(visitor);
            this.value._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.value);
        if (this.key instanceof AST_Node) push(this.key);
    },
});

var AST_ObjectKeyVal = DEFNODE("ObjectKeyVal", "quote", function AST_ObjectKeyVal(props) {
    if (props) {
        this.quote = props.quote;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
        this._annotations = props._annotations;
    }

    this.flags = 0;
}, {
    $documentation: "A key: value object property",
    $propdoc: {
        quote: "[string] the original quote character"
    },
    computed_key() {
        return this.key instanceof AST_Node;
    }
}, AST_ObjectProperty);

var AST_PrivateSetter = DEFNODE("PrivateSetter", "static", function AST_PrivateSetter(props) {
    if (props) {
        this.static = props.static;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $propdoc: {
        static: "[boolean] whether this is a static private setter"
    },
    $documentation: "A private setter property",
    computed_key() {
        return false;
    }
}, AST_ObjectProperty);

var AST_PrivateGetter = DEFNODE("PrivateGetter", "static", function AST_PrivateGetter(props) {
    if (props) {
        this.static = props.static;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $propdoc: {
        static: "[boolean] whether this is a static private getter"
    },
    $documentation: "A private getter property",
    computed_key() {
        return false;
    }
}, AST_ObjectProperty);

var AST_ObjectSetter = DEFNODE("ObjectSetter", "quote static", function AST_ObjectSetter(props) {
    if (props) {
        this.quote = props.quote;
        this.static = props.static;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
        this._annotations = props._annotations;
    }

    this.flags = 0;
}, {
    $propdoc: {
        quote: "[string|undefined] the original quote character, if any",
        static: "[boolean] whether this is a static setter (classes only)"
    },
    $documentation: "An object setter property",
    computed_key() {
        return !(this.key instanceof AST_SymbolMethod);
    }
}, AST_ObjectProperty);

var AST_ObjectGetter = DEFNODE("ObjectGetter", "quote static", function AST_ObjectGetter(props) {
    if (props) {
        this.quote = props.quote;
        this.static = props.static;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
        this._annotations = props._annotations;
    }

    this.flags = 0;
}, {
    $propdoc: {
        quote: "[string|undefined] the original quote character, if any",
        static: "[boolean] whether this is a static getter (classes only)"
    },
    $documentation: "An object getter property",
    computed_key() {
        return !(this.key instanceof AST_SymbolMethod);
    }
}, AST_ObjectProperty);

var AST_ConciseMethod = DEFNODE("ConciseMethod", "quote static", function AST_ConciseMethod(props) {
    if (props) {
        this.quote = props.quote;
        this.static = props.static;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
        this._annotations = props._annotations;
    }

    this.flags = 0;
}, {
    $propdoc: {
        quote: "[string|undefined] the original quote character, if any",
        static: "[boolean] is this method static (classes only)",
    },
    $documentation: "An ES6 concise method inside an object or class",
    computed_key() {
        return !(this.key instanceof AST_SymbolMethod);
    }
}, AST_ObjectProperty);

var AST_PrivateMethod = DEFNODE("PrivateMethod", "static", function AST_PrivateMethod(props) {
    if (props) {
        this.static = props.static;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A private class method inside a class",
    $propdoc: {
        static: "[boolean] is this a static private method",
    },
    computed_key() {
        return false;
    },
}, AST_ObjectProperty);

var AST_Class = DEFNODE("Class", "name extends properties", function AST_Class(props) {
    if (props) {
        this.name = props.name;
        this.extends = props.extends;
        this.properties = props.properties;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $propdoc: {
        name: "[AST_SymbolClass|AST_SymbolDefClass?] optional class name.",
        extends: "[AST_Node]? optional parent class",
        properties: "[AST_ObjectProperty|AST_ClassStaticBlock]* array of properties or static blocks"
    },
    $documentation: "An ES6 class",
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            if (this.name) {
                this.name._walk(visitor);
            }
            if (this.extends) {
                this.extends._walk(visitor);
            }
            this.properties.forEach((prop) => prop._walk(visitor));
        });
    },
    _children_backwards(push) {
        let i = this.properties.length;
        while (i--) push(this.properties[i]);
        if (this.extends) push(this.extends);
        if (this.name) push(this.name);
    },
    /** go through the bits that are executed instantly, not when the class is `new`'d. Doesn't walk the name. */
    visit_nondeferred_class_parts(visitor) {
        if (this.extends) {
            this.extends._walk(visitor);
        }
        this.properties.forEach((prop) => {
            if (prop instanceof AST_ClassStaticBlock) {
                prop._walk(visitor);
                return;
            }
            if (prop.computed_key()) {
                visitor.push(prop);
                prop.key._walk(visitor);
                visitor.pop();
            }
            if (
                prop instanceof AST_ClassPrivateProperty && prop.static && prop.value
                || prop instanceof AST_ClassProperty && prop.static && prop.value
            ) {
                visitor.push(prop);
                prop.value._walk(visitor);
                visitor.pop();
            }
        });
    },
    /** go through the bits that are executed later, when the class is `new`'d or a static method is called */
    visit_deferred_class_parts(visitor) {
        this.properties.forEach((prop) => {
            if (
                prop instanceof AST_ConciseMethod
                || prop instanceof AST_PrivateMethod
            ) {
                prop.walk(visitor);
            } else if (
                prop instanceof AST_ClassProperty && !prop.static && prop.value
                || prop instanceof AST_ClassPrivateProperty && !prop.static && prop.value
            ) {
                visitor.push(prop);
                prop.value._walk(visitor);
                visitor.pop();
            }
        });
    },
    is_self_referential: function() {
        const this_id = this.name && this.name.definition().id;
        let found = false;
        let class_this = true;
        this.visit_nondeferred_class_parts(new TreeWalker((node, descend) => {
            if (found) return true;
            if (node instanceof AST_This) return (found = class_this);
            if (node instanceof AST_SymbolRef) return (found = node.definition().id === this_id);
            if (node instanceof AST_Lambda && !(node instanceof AST_Arrow)) {
                const class_this_save = class_this;
                class_this = false;
                descend();
                class_this = class_this_save;
                return true;
            }
        }));
        return found;
    },
}, AST_Scope /* TODO a class might have a scope but it's not a scope */);

var AST_ClassProperty = DEFNODE("ClassProperty", "static quote", function AST_ClassProperty(props) {
    if (props) {
        this.static = props.static;
        this.quote = props.quote;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
        this._annotations = props._annotations;
    }

    this.flags = 0;
}, {
    $documentation: "A class property",
    $propdoc: {
        static: "[boolean] whether this is a static key",
        quote: "[string] which quote is being used"
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            if (this.key instanceof AST_Node)
                this.key._walk(visitor);
            if (this.value instanceof AST_Node)
                this.value._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.value instanceof AST_Node) push(this.value);
        if (this.key instanceof AST_Node) push(this.key);
    },
    computed_key() {
        return !(this.key instanceof AST_SymbolClassProperty);
    }
}, AST_ObjectProperty);

var AST_ClassPrivateProperty = DEFNODE("ClassPrivateProperty", "", function AST_ClassPrivateProperty(props) {
    if (props) {
        this.static = props.static;
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A class property for a private property",
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            if (this.value instanceof AST_Node)
                this.value._walk(visitor);
        });
    },
    _children_backwards(push) {
        if (this.value instanceof AST_Node) push(this.value);
    },
    computed_key() {
        return false;
    },
}, AST_ObjectProperty);

var AST_PrivateIn = DEFNODE("PrivateIn", "key value", function AST_PrivateIn(props) {
    if (props) {
        this.key = props.key;
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "An `in` binop when the key is private, eg #x in this",
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            this.key._walk(visitor);
            this.value._walk(visitor);
        });
    },
    _children_backwards(push) {
        push(this.value);
        push(this.key);
    },
});

var AST_DefClass = DEFNODE("DefClass", null, function AST_DefClass(props) {
    if (props) {
        this.name = props.name;
        this.extends = props.extends;
        this.properties = props.properties;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A class definition",
}, AST_Class);

var AST_ClassStaticBlock = DEFNODE("ClassStaticBlock", "body block_scope", function AST_ClassStaticBlock (props) {
    this.body = props.body;
    this.block_scope = props.block_scope;
    this.start = props.start;
    this.end = props.end;
}, {
    $documentation: "A block containing statements to be executed in the context of the class",
    $propdoc: {
        body: "[AST_Statement*] an array of statements",
    },
    _walk: function(visitor) {
        return visitor._visit(this, function() {
            walk_body(this, visitor);
        });
    },
    _children_backwards(push) {
        let i = this.body.length;
        while (i--) push(this.body[i]);
    },
    clone: clone_block_scope,
    computed_key() {
        return false;
    },
}, AST_Scope);

var AST_ClassExpression = DEFNODE("ClassExpression", null, function AST_ClassExpression(props) {
    if (props) {
        this.name = props.name;
        this.extends = props.extends;
        this.properties = props.properties;
        this.variables = props.variables;
        this.uses_with = props.uses_with;
        this.uses_eval = props.uses_eval;
        this.parent_scope = props.parent_scope;
        this.enclosed = props.enclosed;
        this.cname = props.cname;
        this.body = props.body;
        this.block_scope = props.block_scope;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A class expression."
}, AST_Class);

var AST_Symbol = DEFNODE("Symbol", "scope name thedef", function AST_Symbol(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $propdoc: {
        name: "[string] name of this symbol",
        scope: "[AST_Scope/S] the current scope (not necessarily the definition scope)",
        thedef: "[SymbolDef/S] the definition of this symbol"
    },
    $documentation: "Base class for all symbols"
});

var AST_NewTarget = DEFNODE("NewTarget", null, function AST_NewTarget(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A reference to new.target"
});

var AST_SymbolDeclaration = DEFNODE("SymbolDeclaration", "init", function AST_SymbolDeclaration(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",
}, AST_Symbol);

var AST_SymbolVar = DEFNODE("SymbolVar", null, function AST_SymbolVar(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol defining a variable",
}, AST_SymbolDeclaration);

var AST_SymbolBlockDeclaration = DEFNODE(
    "SymbolBlockDeclaration",
    null,
    function AST_SymbolBlockDeclaration(props) {
        if (props) {
            this.init = props.init;
            this.scope = props.scope;
            this.name = props.name;
            this.thedef = props.thedef;
            this.start = props.start;
            this.end = props.end;
        }

        this.flags = 0;
    },
    {
        $documentation: "Base class for block-scoped declaration symbols"
    },
    AST_SymbolDeclaration
);

var AST_SymbolConst = DEFNODE("SymbolConst", null, function AST_SymbolConst(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A constant declaration"
}, AST_SymbolBlockDeclaration);

var AST_SymbolUsing = DEFNODE("SymbolUsing", null, function AST_SymbolUsing(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A `using` declaration"
}, AST_SymbolBlockDeclaration);

var AST_SymbolLet = DEFNODE("SymbolLet", null, function AST_SymbolLet(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A block-scoped `let` declaration"
}, AST_SymbolBlockDeclaration);

var AST_SymbolFunarg = DEFNODE("SymbolFunarg", null, function AST_SymbolFunarg(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol naming a function argument",
}, AST_SymbolVar);

var AST_SymbolDefun = DEFNODE("SymbolDefun", null, function AST_SymbolDefun(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol defining a function",
}, AST_SymbolDeclaration);

var AST_SymbolMethod = DEFNODE("SymbolMethod", null, function AST_SymbolMethod(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol in an object defining a method",
}, AST_Symbol);

var AST_SymbolClassProperty = DEFNODE("SymbolClassProperty", null, function AST_SymbolClassProperty(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol for a class property",
}, AST_Symbol);

var AST_SymbolLambda = DEFNODE("SymbolLambda", null, function AST_SymbolLambda(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol naming a function expression",
}, AST_SymbolDeclaration);

var AST_SymbolDefClass = DEFNODE("SymbolDefClass", null, function AST_SymbolDefClass(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol naming a class's name in a class declaration. Lexically scoped to its containing scope, and accessible within the class."
}, AST_SymbolBlockDeclaration);

var AST_SymbolClass = DEFNODE("SymbolClass", null, function AST_SymbolClass(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol naming a class's name. Lexically scoped to the class."
}, AST_SymbolDeclaration);

var AST_SymbolCatch = DEFNODE("SymbolCatch", null, function AST_SymbolCatch(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol naming the exception in catch",
}, AST_SymbolBlockDeclaration);

var AST_SymbolImport = DEFNODE("SymbolImport", null, function AST_SymbolImport(props) {
    if (props) {
        this.init = props.init;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol referring to an imported name",
}, AST_SymbolBlockDeclaration);

var AST_SymbolImportForeign = DEFNODE("SymbolImportForeign", "quote", function AST_SymbolImportForeign(props) {
    if (props) {
        this.quote = props.quote;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A symbol imported from a module, but it is defined in the other module, and its real name is irrelevant for this module's purposes",
}, AST_Symbol);

var AST_Label = DEFNODE("Label", "references", function AST_Label(props) {
    if (props) {
        this.references = props.references;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
        this.initialize();
    }

    this.flags = 0;
}, {
    $documentation: "Symbol naming a label (declaration)",
    $propdoc: {
        references: "[AST_LoopControl*] a list of nodes referring to this label"
    },
    initialize: function() {
        this.references = [];
        this.thedef = this;
    }
}, AST_Symbol);

var AST_SymbolRef = DEFNODE("SymbolRef", null, function AST_SymbolRef(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Reference to some symbol (not definition/declaration)",
}, AST_Symbol);

var AST_SymbolExport = DEFNODE("SymbolExport", "quote", function AST_SymbolExport(props) {
    if (props) {
        this.quote = props.quote;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Symbol referring to a name to export",
}, AST_SymbolRef);

var AST_SymbolExportForeign = DEFNODE("SymbolExportForeign", "quote", function AST_SymbolExportForeign(props) {
    if (props) {
        this.quote = props.quote;
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A symbol exported from this module, but it is used in the other module, and its real name is irrelevant for this module's purposes",
}, AST_Symbol);

var AST_LabelRef = DEFNODE("LabelRef", null, function AST_LabelRef(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Reference to a label symbol",
}, AST_Symbol);

var AST_SymbolPrivateProperty = DEFNODE("SymbolPrivateProperty", null, function AST_SymbolPrivateProperty(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A symbol that refers to a private property",
}, AST_Symbol);

var AST_This = DEFNODE("This", null, function AST_This(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `this` symbol",
}, AST_Symbol);

var AST_Super = DEFNODE("Super", null, function AST_Super(props) {
    if (props) {
        this.scope = props.scope;
        this.name = props.name;
        this.thedef = props.thedef;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `super` symbol",
}, AST_This);

var AST_Constant = DEFNODE("Constant", null, function AST_Constant(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for all constants",
    getValue: function() {
        return this.value;
    }
});

var AST_String = DEFNODE("String", "value quote", function AST_String(props) {
    if (props) {
        this.value = props.value;
        this.quote = props.quote;
        this.start = props.start;
        this.end = props.end;
        this._annotations = props._annotations;
    }

    this.flags = 0;
}, {
    $documentation: "A string literal",
    $propdoc: {
        value: "[string] the contents of this string",
        quote: "[string] the original quote character"
    }
}, AST_Constant);

var AST_Number = DEFNODE("Number", "value raw", function AST_Number(props) {
    if (props) {
        this.value = props.value;
        this.raw = props.raw;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A number literal",
    $propdoc: {
        value: "[number] the numeric value",
        raw: "[string] numeric value as string"
    }
}, AST_Constant);

var AST_BigInt = DEFNODE("BigInt", "value raw", function AST_BigInt(props) {
    if (props) {
        this.value = props.value;
        this.raw = props.raw;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A big int literal",
    $propdoc: {
        value: "[string] big int value, represented as a string",
        raw: "[string] the original format preserved"
    }
}, AST_Constant);

var AST_RegExp = DEFNODE("RegExp", "value", function AST_RegExp(props) {
    if (props) {
        this.value = props.value;
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A regexp literal",
    $propdoc: {
        value: "[RegExp] the actual regexp",
    }
}, AST_Constant);

var AST_Atom = DEFNODE("Atom", null, function AST_Atom(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for atoms",
}, AST_Constant);

var AST_Null = DEFNODE("Null", null, function AST_Null(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `null` atom",
    value: null
}, AST_Atom);

var AST_NaN = DEFNODE("NaN", null, function AST_NaN(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The impossible value",
    value: 0/0
}, AST_Atom);

var AST_Undefined = DEFNODE("Undefined", null, function AST_Undefined(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `undefined` value",
    value: (function() {}())
}, AST_Atom);

var AST_Hole = DEFNODE("Hole", null, function AST_Hole(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "A hole in an array",
    value: (function() {}())
}, AST_Atom);

var AST_Infinity = DEFNODE("Infinity", null, function AST_Infinity(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `Infinity` value",
    value: 1/0
}, AST_Atom);

var AST_Boolean = DEFNODE("Boolean", null, function AST_Boolean(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "Base class for booleans",
}, AST_Atom);

var AST_False = DEFNODE("False", null, function AST_False(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `false` atom",
    value: false
}, AST_Boolean);

var AST_True = DEFNODE("True", null, function AST_True(props) {
    if (props) {
        this.start = props.start;
        this.end = props.end;
    }

    this.flags = 0;
}, {
    $documentation: "The `true` atom",
    value: true
}, AST_Boolean);

/* -----[ Walk function ]---- */

/**
 * Walk nodes in depth-first search fashion.
 * Callback can return `walk_abort` symbol to stop iteration.
 * It can also return `true` to stop iteration just for child nodes.
 * Iteration can be stopped and continued by passing the `to_visit` argument,
 * which is given to the callback in the second argument.
 **/
function walk(node, cb, to_visit = [node]) {
    const push = to_visit.push.bind(to_visit);
    while (to_visit.length) {
        const node = to_visit.pop();
        const ret = cb(node, to_visit);

        if (ret) {
            if (ret === walk_abort) return true;
            continue;
        }

        node._children_backwards(push);
    }
    return false;
}

/**
 * Walks an AST node and its children.
 *
 * {cb} can return `walk_abort` to interrupt the walk.
 *
 * @param node
 * @param cb {(node, info: { parent: (nth) => any }) => (boolean | undefined)}
 *
 * @returns {boolean} whether the walk was aborted
 *
 * @example
 * const found_some_cond = walk_parent(my_ast_node, (node, { parent }) => {
 *   if (some_cond(node, parent())) return walk_abort
 * });
 */
function walk_parent(node, cb, initial_stack) {
    const to_visit = [node];
    const push = to_visit.push.bind(to_visit);
    const stack = initial_stack ? initial_stack.slice() : [];
    const parent_pop_indices = [];

    let current;

    const info = {
        parent: (n = 0) => {
            if (n === -1) {
                return current;
            }

            // [ p1 p0 ] [ 1 0 ]
            if (initial_stack && n >= stack.length) {
                n -= stack.length;
                return initial_stack[
                    initial_stack.length - (n + 1)
                ];
            }

            return stack[stack.length - (1 + n)];
        },
    };

    while (to_visit.length) {
        current = to_visit.pop();

        while (
            parent_pop_indices.length &&
            to_visit.length == parent_pop_indices[parent_pop_indices.length - 1]
        ) {
            stack.pop();
            parent_pop_indices.pop();
        }

        const ret = cb(current, info);

        if (ret) {
            if (ret === walk_abort) return true;
            continue;
        }

        const visit_length = to_visit.length;

        current._children_backwards(push);

        // Push only if we're going to traverse the children
        if (to_visit.length > visit_length) {
            stack.push(current);
            parent_pop_indices.push(visit_length - 1);
        }
    }

    return false;
}

const walk_abort = Symbol("abort walk");

/* -----[ TreeWalker ]----- */

class TreeWalker {
    constructor(callback) {
        this.visit = callback;
        this.stack = [];
        this.directives = Object.create(null);
    }

    _visit(node, descend) {
        this.push(node);
        var ret = this.visit(node, descend ? function() {
            descend.call(node);
        } : noop);
        if (!ret && descend) {
            descend.call(node);
        }
        this.pop();
        return ret;
    }

    parent(n) {
        return this.stack[this.stack.length - 2 - (n || 0)];
    }

    push(node) {
        if (node instanceof AST_Lambda) {
            this.directives = Object.create(this.directives);
        } else if (node instanceof AST_Directive && !this.directives[node.value]) {
            this.directives[node.value] = node;
        } else if (node instanceof AST_Class) {
            this.directives = Object.create(this.directives);
            if (!this.directives["use strict"]) {
                this.directives["use strict"] = node;
            }
        }
        this.stack.push(node);
    }

    pop() {
        var node = this.stack.pop();
        if (node instanceof AST_Lambda || node instanceof AST_Class) {
            this.directives = Object.getPrototypeOf(this.directives);
        }
    }

    self() {
        return this.stack[this.stack.length - 1];
    }

    find_parent(type) {
        var stack = this.stack;
        for (var i = stack.length; --i >= 0;) {
            var x = stack[i];
            if (x instanceof type) return x;
        }
    }

    is_within_loop() {
        let i = this.stack.length - 1;
        let child = this.stack[i];
        while (i--) {
            const node = this.stack[i];

            if (node instanceof AST_Lambda) return false;
            if (
                node instanceof AST_IterationStatement
                // exclude for-loop bits that only run once
                && !((node instanceof AST_For) && child === node.init)
                && !((node instanceof AST_ForIn || node instanceof AST_ForOf) && child === node.object)
            ) {
                return true;
            }

            child = node;
        }

        return false;
    }

    find_scope() {
        var stack = this.stack;
        for (var i = stack.length; --i >= 0;) {
            const p = stack[i];
            if (p instanceof AST_Toplevel) return p;
            if (p instanceof AST_Lambda) return p;
            if (p.block_scope) return p.block_scope;
        }
    }

    has_directive(type) {
        var dir = this.directives[type];
        if (dir) return dir;
        var node = this.stack[this.stack.length - 1];
        if (node instanceof AST_Scope && node.body) {
            for (var i = 0; i < node.body.length; ++i) {
                var st = node.body[i];
                if (!(st instanceof AST_Directive)) break;
                if (st.value == type) return st;
            }
        }
    }

    loopcontrol_target(node) {
        var stack = this.stack;
        if (node.label) for (var i = stack.length; --i >= 0;) {
            var x = stack[i];
            if (x instanceof AST_LabeledStatement && x.label.name == node.label.name)
                return x.body;
        } else for (var i = stack.length; --i >= 0;) {
            var x = stack[i];
            if (x instanceof AST_IterationStatement
                || node instanceof AST_Break && x instanceof AST_Switch)
                return x;
        }
    }
}

// Tree transformer helpers.
class TreeTransformer extends TreeWalker {
    constructor(before, after) {
        super();
        this.before = before;
        this.after = after;
    }
}

const _PURE       = 0b00000001;
const _INLINE     = 0b00000010;
const _NOINLINE   = 0b00000100;
const _KEY        = 0b00001000;
const _MANGLEPROP = 0b00010000;

export {
    AST_Accessor,
    AST_Array,
    AST_Arrow,
    AST_Assign,
    AST_Atom,
    AST_Await,
    AST_BigInt,
    AST_Binary,
    AST_Block,
    AST_BlockStatement,
    AST_Boolean,
    AST_Break,
    AST_Call,
    AST_Case,
    AST_Catch,
    AST_Chain,
    AST_Class,
    AST_ClassExpression,
    AST_ClassPrivateProperty,
    AST_PrivateIn,
    AST_ClassProperty,
    AST_ClassStaticBlock,
    AST_ConciseMethod,
    AST_Conditional,
    AST_Const,
    AST_Constant,
    AST_Continue,
    AST_Debugger,
    AST_Default,
    AST_DefaultAssign,
    AST_DefClass,
    AST_Definitions,
    AST_DefinitionsLike,
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
    AST_Finally,
    AST_For,
    AST_ForIn,
    AST_ForOf,
    AST_Function,
    AST_Hole,
    AST_If,
    AST_Import,
    AST_ImportMeta,
    AST_Infinity,
    AST_IterationStatement,
    AST_Jump,
    AST_Label,
    AST_LabeledStatement,
    AST_LabelRef,
    AST_Lambda,
    AST_Let,
    AST_LoopControl,
    AST_NameMapping,
    AST_NaN,
    AST_New,
    AST_NewTarget,
    AST_Node,
    AST_Null,
    AST_Number,
    AST_Object,
    AST_ObjectGetter,
    AST_ObjectKeyVal,
    AST_ObjectProperty,
    AST_ObjectSetter,
    AST_PrefixedTemplateString,
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
    AST_StatementWithBody,
    AST_String,
    AST_Sub,
    AST_Super,
    AST_Switch,
    AST_SwitchBranch,
    AST_Symbol,
    AST_SymbolBlockDeclaration,
    AST_SymbolCatch,
    AST_SymbolClass,
    AST_SymbolClassProperty,
    AST_SymbolConst,
    AST_SymbolDeclaration,
    AST_SymbolDefClass,
    AST_SymbolDefun,
    AST_SymbolExport,
    AST_SymbolExportForeign,
    AST_SymbolFunarg,
    AST_SymbolImport,
    AST_SymbolImportForeign,
    AST_SymbolLambda,
    AST_SymbolLet,
    AST_SymbolMethod,
    AST_SymbolRef,
    AST_SymbolUsing,
    AST_SymbolVar,
    AST_TemplateSegment,
    AST_TemplateString,
    AST_SymbolPrivateProperty,
    AST_This,
    AST_Throw,
    AST_Token,
    AST_Toplevel,
    AST_True,
    AST_Try,
    AST_TryBlock,
    AST_Unary,
    AST_UnaryPostfix,
    AST_UnaryPrefix,
    AST_Undefined,
    AST_Using,
    AST_UsingDef,
    AST_Var,
    AST_VarDef,
    AST_VarDefLike,
    AST_While,
    AST_With,
    AST_Yield,

    // Walkers
    TreeTransformer,
    TreeWalker,
    walk,
    walk_abort,
    walk_body,
    walk_parent,

    // annotations
    _INLINE,
    _NOINLINE,
    _PURE,
    _KEY,
    _MANGLEPROP,
};
