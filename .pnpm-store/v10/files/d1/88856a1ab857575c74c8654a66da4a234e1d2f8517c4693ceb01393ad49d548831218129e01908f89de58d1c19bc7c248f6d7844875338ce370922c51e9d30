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
    makePredicate,
    noop,
    regexp_source_fix,
    sort_regexp_flags,
    return_false,
    return_true,
} from "./utils/index.js";
import { first_in_statement, left_is_object } from "./utils/first_in_statement.js";
import {
    AST_Array,
    AST_Arrow,
    AST_Assign,
    AST_Await,
    AST_BigInt,
    AST_Binary,
    AST_BlockStatement,
    AST_Break,
    AST_Call,
    AST_Case,
    AST_Catch,
    AST_Chain,
    AST_Class,
    AST_ClassExpression,
    AST_ClassPrivateProperty,
    AST_ClassProperty,
    AST_ClassStaticBlock,
    AST_ConciseMethod,
    AST_PrivateGetter,
    AST_PrivateMethod,
    AST_SymbolPrivateProperty,
    AST_PrivateSetter,
    AST_PrivateIn,
    AST_Conditional,
    AST_Const,
    AST_Constant,
    AST_Continue,
    AST_Debugger,
    AST_Default,
    AST_DefaultAssign,
    AST_Definitions,
    AST_DefinitionsLike,
    AST_Defun,
    AST_Destructuring,
    AST_Directive,
    AST_Do,
    AST_Dot,
    AST_DotHash,
    AST_EmptyStatement,
    AST_Exit,
    AST_Expansion,
    AST_Export,
    AST_Finally,
    AST_For,
    AST_ForIn,
    AST_ForOf,
    AST_Function,
    AST_Hole,
    AST_If,
    AST_Import,
    AST_ImportMeta,
    AST_Jump,
    AST_LabeledStatement,
    AST_Lambda,
    AST_Let,
    AST_LoopControl,
    AST_NameMapping,
    AST_New,
    AST_NewTarget,
    AST_Node,
    AST_Number,
    AST_Object,
    AST_ObjectGetter,
    AST_ObjectKeyVal,
    AST_ObjectProperty,
    AST_ObjectSetter,
    AST_PrefixedTemplateString,
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
    AST_SymbolClassProperty,
    AST_SymbolMethod,
    AST_SymbolRef,
    AST_TemplateSegment,
    AST_TemplateString,
    AST_This,
    AST_Throw,
    AST_Toplevel,
    AST_Try,
    AST_TryBlock,
    AST_Unary,
    AST_UnaryPostfix,
    AST_UnaryPrefix,
    AST_Using,
    AST_Var,
    AST_VarDefLike,
    AST_While,
    AST_With,
    AST_Yield,
    TreeWalker,
    walk,
    walk_abort
} from "./ast.js";
import {
    get_full_char_code,
    get_full_char,
    is_identifier_char,
    is_basic_identifier_string,
    is_identifier_string,
    PRECEDENCE,
    ALL_RESERVED_WORDS,
} from "./parse.js";

const CODE_LINE_BREAK = 10;
const CODE_SPACE = 32;

const r_annotation = /[@#]__(PURE|INLINE|NOINLINE)__/;

function is_some_comments(comment) {
    // multiline comment
    return (
        (comment.type === "comment2" || comment.type === "comment1")
        && /@preserve|@copyright|@lic|@cc_on|^\**!/i.test(comment.value)
    );
}

const ROPE_COMMIT_WHEN = 8 * 1000;
class Rope {
    constructor() {
        this.committed = "";
        this.current = "";
    }

    append(str) {
        /** When `this.current` is too long, commit it. */
        if (this.current.length > ROPE_COMMIT_WHEN) {
            this.committed += this.current + str;
            this.current = "";
        } else {
            this.current += str;
        }
    }

    insertAt(char, index) {
        const { committed, current } = this;
        if (index < committed.length) {
            this.committed = committed.slice(0, index) + char + committed.slice(index);
        } else if (index === committed.length) {
            this.committed += char;
        } else {
            index -= committed.length;
            this.committed += current.slice(0, index) + char;
            this.current = current.slice(index);
        }
    }

    charAt(index) {
        const { committed } = this;
        if (index < committed.length) return committed[index];
        return this.current[index - committed.length];
    }

    charCodeAt(index) {
        const { committed } = this;
        if (index < committed.length) return committed.charCodeAt(index);
        return this.current.charCodeAt(index - committed.length);
    }

    length() {
        return this.committed.length + this.current.length;
    }

    expectDirective() {
        // /^$|[;{][\s\n]*$/

        let ch, n = this.length();

        if (n <= 0) return true;

        // Skip N whitespace from the end
        while (
            (ch = this.charCodeAt(--n))
            && (ch == CODE_SPACE || ch == CODE_LINE_BREAK)
        );

        // either ";", or "{", or the string ended
        return !ch || ch === 59 || ch === 123;
    }

    hasNLB() {
        let n = this.length() - 1;
        while (n >= 0) {
            const code = this.charCodeAt(n--);

            if (code === CODE_LINE_BREAK) return true;
            if (code !== CODE_SPACE) return false;
        }
        return true;
    }


    toString() {
        return this.committed + this.current;
    }
}

function OutputStream(options) {

    var readonly = !options;
    options = defaults(options, {
        ascii_only           : false,
        beautify             : false,
        braces               : false,
        comments             : "some",
        ecma                 : 5,
        ie8                  : false,
        indent_level         : 4,
        indent_start         : 0,
        inline_script        : true,
        keep_numbers         : false,
        keep_quoted_props    : false,
        max_line_len         : false,
        preamble             : null,
        preserve_annotations : false,
        quote_keys           : false,
        quote_style          : 0,
        safari10             : false,
        semicolons           : true,
        shebang              : true,
        shorthand            : undefined,
        source_map           : null,
        webkit               : false,
        width                : 80,
        wrap_iife            : false,
        wrap_func_args       : false,

        _destroy_ast         : false
    }, true);

    if (options.shorthand === undefined)
        options.shorthand = options.ecma > 5;

    // Convert comment option to RegExp if necessary and set up comments filter
    var comment_filter = return_false; // Default case, throw all comments away
    if (options.comments) {
        let comments = options.comments;
        if (typeof options.comments === "string" && /^\/.*\/[a-zA-Z]*$/.test(options.comments)) {
            var regex_pos = options.comments.lastIndexOf("/");
            comments = new RegExp(
                options.comments.substr(1, regex_pos - 1),
                options.comments.substr(regex_pos + 1)
            );
        }
        if (comments instanceof RegExp) {
            comment_filter = function(comment) {
                return comment.type != "comment5" && comments.test(comment.value);
            };
        } else if (typeof comments === "function") {
            comment_filter = function(comment) {
                return comment.type != "comment5" && comments(this, comment);
            };
        } else if (comments === "some") {
            comment_filter = is_some_comments;
        } else { // NOTE includes "all" option
            comment_filter = return_true;
        }
    }

    if (options.preserve_annotations) {
        let prev_comment_filter = comment_filter;
        comment_filter = function (comment) {
            return r_annotation.test(comment.value) || prev_comment_filter.apply(this, arguments);
        };
    }

    var indentation = 0;
    var current_col = 0;
    var current_line = 1;
    var current_pos = 0;
    var OUTPUT = new Rope();
    let printed_comments = new Set();

    var to_utf8 = options.ascii_only ? function(str, identifier = false, regexp = false) {
        if (options.ecma >= 2015 && !options.safari10 && !regexp) {
            str = str.replace(/[\ud800-\udbff][\udc00-\udfff]/g, function(ch) {
                var code = get_full_char_code(ch, 0).toString(16);
                return "\\u{" + code + "}";
            });
        }
        return str.replace(/[\u0000-\u001f\u007f-\uffff]/g, function(ch) {
            var code = ch.charCodeAt(0).toString(16);
            if (code.length <= 2 && !identifier) {
                while (code.length < 2) code = "0" + code;
                return "\\x" + code;
            } else {
                while (code.length < 4) code = "0" + code;
                return "\\u" + code;
            }
        });
    } : function(str) {
        return str.replace(/[\ud800-\udbff][\udc00-\udfff]|([\ud800-\udbff]|[\udc00-\udfff])/g, function(match, lone) {
            if (lone) {
                return "\\u" + lone.charCodeAt(0).toString(16);
            }
            return match;
        });
    };

    function make_string(str, quote) {
        var dq = 0, sq = 0;
        str = str.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,
          function(s, i) {
            switch (s) {
              case '"': ++dq; return '"';
              case "'": ++sq; return "'";
              case "\\": return "\\\\";
              case "\n": return "\\n";
              case "\r": return "\\r";
              case "\t": return "\\t";
              case "\b": return "\\b";
              case "\f": return "\\f";
              case "\x0B": return options.ie8 ? "\\x0B" : "\\v";
              case "\u2028": return "\\u2028";
              case "\u2029": return "\\u2029";
              case "\ufeff": return "\\ufeff";
              case "\0":
                  return /[0-9]/.test(get_full_char(str, i+1)) ? "\\x00" : "\\0";
            }
            return s;
        });
        function quote_single() {
            return "'" + str.replace(/\x27/g, "\\'") + "'";
        }
        function quote_double() {
            return '"' + str.replace(/\x22/g, '\\"') + '"';
        }
        function quote_template() {
            return "`" + str.replace(/`/g, "\\`") + "`";
        }
        str = to_utf8(str);
        if (quote === "`") return quote_template();
        switch (options.quote_style) {
          case 1:
            return quote_single();
          case 2:
            return quote_double();
          case 3:
            return quote == "'" ? quote_single() : quote_double();
          default:
            return dq > sq ? quote_single() : quote_double();
        }
    }

    function encode_string(str, quote) {
        var ret = make_string(str, quote);
        if (options.inline_script) {
            ret = ret.replace(/<\x2f(script)([>\/\t\n\f\r ])/gi, "<\\/$1$2");
            ret = ret.replace(/\x3c!--/g, "\\x3c!--");
            ret = ret.replace(/--\x3e/g, "--\\x3e");
        }
        return ret;
    }

    function make_name(name) {
        name = name.toString();
        name = to_utf8(name, true);
        return name;
    }

    function make_indent(back) {
        return " ".repeat(options.indent_start + indentation - back * options.indent_level);
    }

    /* -----[ beautification/minification ]----- */

    var has_parens = false;
    var might_need_space = false;
    var might_need_semicolon = false;
    var might_add_newline = 0;
    var need_newline_indented = false;
    var need_space = false;
    var newline_insert = -1;
    var last = "";
    var mapping_token, mapping_name, mappings = options.source_map && [];

    var do_add_mapping = mappings ? function() {
        mappings.forEach(function(mapping) {
            try {
                let { name, token } = mapping;
                if (name !== false) {
                    if (token.type == "name" || token.type === "privatename") {
                        name = token.value;
                    } else if (name instanceof AST_Symbol) {
                        name = token.type === "string" ? token.value : name.name;
                    }
                }
                options.source_map.add(
                    mapping.token.file,
                    mapping.line, mapping.col,
                    mapping.token.line, mapping.token.col,
                    is_basic_identifier_string(name) ? name : undefined
                );
            } catch(ex) {
                // Ignore bad mapping
            }
        });
        mappings = [];
    } : noop;

    var ensure_line_len = options.max_line_len ? function() {
        if (current_col > options.max_line_len) {
            if (might_add_newline) {
                OUTPUT.insertAt("\n", might_add_newline);
                const len_after_newline = OUTPUT.length() - might_add_newline - 1;
                if (mappings) {
                    var delta = len_after_newline - current_col;
                    mappings.forEach(function(mapping) {
                        mapping.line++;
                        mapping.col += delta;
                    });
                }
                current_line++;
                current_pos++;
                current_col = len_after_newline;
            }
        }
        if (might_add_newline) {
            might_add_newline = 0;
            do_add_mapping();
        }
    } : noop;

    var requireSemicolonChars = makePredicate("( [ + * / - , . `");

    function print(str) {
        str = String(str);
        var ch = get_full_char(str, 0);
        if (need_newline_indented && ch) {
            need_newline_indented = false;
            if (ch !== "\n") {
                print("\n");
                indent();
            }
        }
        if (need_space && ch) {
            need_space = false;
            if (!/[\s;})]/.test(ch)) {
                space();
            }
        }
        newline_insert = -1;
        var prev = last.charAt(last.length - 1);
        if (might_need_semicolon) {
            might_need_semicolon = false;

            if (prev === ":" && ch === "}" || (!ch || !";}".includes(ch)) && prev !== ";") {
                if (options.semicolons || requireSemicolonChars.has(ch)) {
                    OUTPUT.append(";");
                    current_col++;
                    current_pos++;
                } else {
                    ensure_line_len();
                    if (current_col > 0) {
                        OUTPUT.append("\n");
                        current_pos++;
                        current_line++;
                        current_col = 0;
                    }

                    if (/^\s+$/.test(str)) {
                        // reset the semicolon flag, since we didn't print one
                        // now and might still have to later
                        might_need_semicolon = true;
                    }
                }

                if (!options.beautify)
                    might_need_space = false;
            }
        }

        if (might_need_space) {
            if ((is_identifier_char(prev)
                    && (is_identifier_char(ch) || ch == "\\"))
                || (ch == "/" && ch == prev)
                || ((ch == "+" || ch == "-") && ch == last)
            ) {
                OUTPUT.append(" ");
                current_col++;
                current_pos++;
            }
            might_need_space = false;
        }

        if (mapping_token) {
            mappings.push({
                token: mapping_token,
                name: mapping_name,
                line: current_line,
                col: current_col
            });
            mapping_token = false;
            if (!might_add_newline) do_add_mapping();
        }

        OUTPUT.append(str);
        has_parens = str[str.length - 1] == "(";
        current_pos += str.length;
        var a = str.split(/\r?\n/), n = a.length - 1;
        current_line += n;
        current_col += a[0].length;
        if (n > 0) {
            ensure_line_len();
            current_col = a[n].length;
        }
        last = str;
    }

    var star = function() {
        print("*");
    };

    var space = options.beautify ? function() {
        print(" ");
    } : function() {
        might_need_space = true;
    };

    var indent = options.beautify ? function(half) {
        if (options.beautify) {
            print(make_indent(half ? 0.5 : 0));
        }
    } : noop;

    var with_indent = options.beautify ? function(col, cont) {
        if (col === true) col = next_indent();
        var save_indentation = indentation;
        indentation = col;
        var ret = cont();
        indentation = save_indentation;
        return ret;
    } : function(col, cont) { return cont(); };

    var newline = options.beautify ? function() {
        if (newline_insert < 0) return print("\n");
        if (OUTPUT.charAt(newline_insert) != "\n") {
            OUTPUT.insertAt("\n", newline_insert);
            current_pos++;
            current_line++;
        }
        newline_insert++;
    } : options.max_line_len ? function() {
        ensure_line_len();
        might_add_newline = OUTPUT.length();
    } : noop;

    var semicolon = options.beautify ? function() {
        print(";");
    } : function() {
        might_need_semicolon = true;
    };

    function force_semicolon() {
        might_need_semicolon = false;
        print(";");
    }

    function next_indent() {
        return indentation + options.indent_level;
    }

    function with_block(cont) {
        var ret;
        print("{");
        newline();
        with_indent(next_indent(), function() {
            ret = cont();
        });
        indent();
        print("}");
        return ret;
    }

    function with_parens(cont) {
        print("(");
        //XXX: still nice to have that for argument lists
        //var ret = with_indent(current_col, cont);
        var ret = cont();
        print(")");
        return ret;
    }

    function with_square(cont) {
        print("[");
        //var ret = with_indent(current_col, cont);
        var ret = cont();
        print("]");
        return ret;
    }

    function comma() {
        print(",");
        space();
    }

    function colon() {
        print(":");
        space();
    }

    var add_mapping = mappings ? function(token, name) {
        mapping_token = token;
        mapping_name = name;
    } : noop;

    function get() {
        if (might_add_newline) {
            ensure_line_len();
        }
        return OUTPUT.toString();
    }

    function filter_comment(comment) {
        if (!options.preserve_annotations) {
            comment = comment.replace(r_annotation, " ");
        }
        if (/^\s*$/.test(comment)) {
            return "";
        }
        return comment.replace(/(<\s*\/\s*)(script)/i, "<\\/$2");
    }

    function prepend_comments(node) {
        var self = this;
        var start = node.start;
        if (!start) return;
        var printed_comments = self.printed_comments;

        // There cannot be a newline between return/yield and its value.
        const keyword_with_value = 
            node instanceof AST_Exit && node.value
            || (node instanceof AST_Await || node instanceof AST_Yield)
                && node.expression;

        if (
            start.comments_before
            && printed_comments.has(start.comments_before)
        ) {
            if (keyword_with_value) {
                start.comments_before = [];
            } else {
                return;
            }
        }

        var comments = start.comments_before;
        if (!comments) {
            comments = start.comments_before = [];
        }
        printed_comments.add(comments);

        if (keyword_with_value) {
            var tw = new TreeWalker(function(node) {
                var parent = tw.parent();
                if (parent instanceof AST_Exit
                    || parent instanceof AST_Await
                    || parent instanceof AST_Yield
                    || parent instanceof AST_Binary && parent.left === node
                    || parent.TYPE == "Call" && parent.expression === node
                    || parent instanceof AST_Conditional && parent.condition === node
                    || parent instanceof AST_Dot && parent.expression === node
                    || parent instanceof AST_Sequence && parent.expressions[0] === node
                    || parent instanceof AST_Sub && parent.expression === node
                    || parent instanceof AST_UnaryPostfix) {
                    if (!node.start) return;
                    var text = node.start.comments_before;
                    if (text && !printed_comments.has(text)) {
                        printed_comments.add(text);
                        comments = comments.concat(text);
                    }
                } else {
                    return true;
                }
            });
            tw.push(node);
            keyword_with_value.walk(tw);
        }

        if (current_pos == 0) {
            if (comments.length > 0 && options.shebang && comments[0].type === "comment5"
                && !printed_comments.has(comments[0])) {
                print("#!" + comments.shift().value + "\n");
                indent();
            }
            var preamble = options.preamble;
            if (preamble) {
                print(preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g, "\n"));
            }
        }

        comments = comments.filter(comment_filter, node).filter(c => !printed_comments.has(c));
        if (comments.length == 0) return;
        var last_nlb = OUTPUT.hasNLB();
        comments.forEach(function(c, i) {
            printed_comments.add(c);
            if (!last_nlb) {
                if (c.nlb) {
                    print("\n");
                    indent();
                    last_nlb = true;
                } else if (i > 0) {
                    space();
                }
            }

            if (/comment[134]/.test(c.type)) {
                var value = filter_comment(c.value);
                if (value) {
                    print("//" + value + "\n");
                    indent();
                }
                last_nlb = true;
            } else if (c.type == "comment2") {
                var value = filter_comment(c.value);
                if (value) {
                    print("/*" + value + "*/");
                }
                last_nlb = false;
            }
        });
        if (!last_nlb) {
            if (start.nlb) {
                print("\n");
                indent();
            } else {
                space();
            }
        }
    }

    function append_comments(node, tail) {
        var self = this;
        var token = node.end;
        if (!token) return;
        var printed_comments = self.printed_comments;
        var comments = token[tail ? "comments_before" : "comments_after"];
        if (!comments || printed_comments.has(comments)) return;
        if (!(node instanceof AST_Statement || comments.every((c) =>
            !/comment[134]/.test(c.type)
        ))) return;
        printed_comments.add(comments);
        var insert = OUTPUT.length();
        comments.filter(comment_filter, node).forEach(function(c, i) {
            if (printed_comments.has(c)) return;
            printed_comments.add(c);
            need_space = false;
            if (need_newline_indented) {
                print("\n");
                indent();
                need_newline_indented = false;
            } else if (c.nlb && (i > 0 || !OUTPUT.hasNLB())) {
                print("\n");
                indent();
            } else if (i > 0 || !tail) {
                space();
            }
            if (/comment[134]/.test(c.type)) {
                const value = filter_comment(c.value);
                if (value) {
                    print("//" + value);
                }
                need_newline_indented = true;
            } else if (c.type == "comment2") {
                const value = filter_comment(c.value);
                if (value) {
                    print("/*" + value + "*/");
                }
                need_space = true;
            }
        });
        if (OUTPUT.length() > insert) newline_insert = insert;
    }

    /**
     * When output.option("_destroy_ast") is enabled, destroy the function.
     * Call this after printing it.
     */
    const gc_scope =
      options["_destroy_ast"]
        ? function gc_scope(scope) {
            scope.body.length = 0;
            scope.argnames.length = 0;
        }
        : noop;

    var stack = [];
    return {
        get             : get,
        toString        : get,
        indent          : indent,
        in_directive    : false,
        use_asm         : null,
        active_scope    : null,
        indentation     : function() { return indentation; },
        current_width   : function() { return current_col - indentation; },
        should_break    : function() { return options.width && this.current_width() >= options.width; },
        has_parens      : function() { return has_parens; },
        newline         : newline,
        print           : print,
        star            : star,
        space           : space,
        comma           : comma,
        colon           : colon,
        last            : function() { return last; },
        semicolon       : semicolon,
        force_semicolon : force_semicolon,
        to_utf8         : to_utf8,
        print_name      : function(name) { print(make_name(name)); },
        print_string    : function(str, quote, escape_directive) {
            var encoded = encode_string(str, quote);
            if (escape_directive === true && !encoded.includes("\\")) {
                // Insert semicolons to break directive prologue
                if (!OUTPUT.expectDirective()) {
                    force_semicolon();
                }
                force_semicolon();
            }
            print(encoded);
        },
        print_template_string_chars: function(str) {
            var encoded = encode_string(str, "`").replace(/\${/g, "\\${");
            return print(encoded.substr(1, encoded.length - 2));
        },
        encode_string   : encode_string,
        next_indent     : next_indent,
        with_indent     : with_indent,
        with_block      : with_block,
        with_parens     : with_parens,
        with_square     : with_square,
        add_mapping     : add_mapping,
        option          : function(opt) { return options[opt]; },
        gc_scope,
        printed_comments: printed_comments,
        prepend_comments: readonly ? noop : prepend_comments,
        append_comments : readonly || comment_filter === return_false ? noop : append_comments,
        line            : function() { return current_line; },
        col             : function() { return current_col; },
        pos             : function() { return current_pos; },
        push_node       : function(node) { stack.push(node); },
        pop_node        : function() { return stack.pop(); },
        parent          : function(n) {
            return stack[stack.length - 2 - (n || 0)];
        }
    };

}

/* -----[ code generators ]----- */

(function() {

    /* -----[ utils ]----- */

    function DEFPRINT(nodetype, generator) {
        nodetype.DEFMETHOD("_codegen", generator);
    }

    AST_Node.DEFMETHOD("print", function(output, force_parens) {
        var self = this, generator = self._codegen;
        if (self instanceof AST_Scope) {
            output.active_scope = self;
        } else if (!output.use_asm && self instanceof AST_Directive && self.value == "use asm") {
            output.use_asm = output.active_scope;
        }
        function doit() {
            output.prepend_comments(self);
            self.add_source_map(output);
            generator(self, output);
            output.append_comments(self);
        }
        output.push_node(self);
        if (force_parens || self.needs_parens(output)) {
            output.with_parens(doit);
        } else {
            doit();
        }
        output.pop_node();
        if (self === output.use_asm) {
            output.use_asm = null;
        }
    });
    AST_Node.DEFMETHOD("_print", AST_Node.prototype.print);

    AST_Node.DEFMETHOD("print_to_string", function(options) {
        var output = OutputStream(options);
        this.print(output);
        return output.get();
    });

    /* -----[ PARENTHESES ]----- */

    function PARENS(nodetype, func) {
        if (Array.isArray(nodetype)) {
            nodetype.forEach(function(nodetype) {
                PARENS(nodetype, func);
            });
        } else {
            nodetype.DEFMETHOD("needs_parens", func);
        }
    }

    PARENS(AST_Node, return_false);

    // a function expression needs parens around it when it's provably
    // the first token to appear in a statement.
    PARENS(AST_Function, function(output) {
        if (!output.has_parens() && first_in_statement(output)) {
            return true;
        }

        if (output.option("webkit")) {
            var p = output.parent();
            if (p instanceof AST_PropAccess && p.expression === this) {
                return true;
            }
        }

        if (output.option("wrap_iife")) {
            var p = output.parent();
            if (p instanceof AST_Call && p.expression === this) {
                return true;
            }
        }

        if (output.option("wrap_func_args")) {
            var p = output.parent();
            if (p instanceof AST_Call && p.args.includes(this)) {
                return true;
            }
        }

        return false;
    });

    PARENS(AST_Arrow, function(output) {
        var p = output.parent();

        if (
            output.option("wrap_func_args")
            && p instanceof AST_Call
            && p.args.includes(this)
        ) {
            return true;
        }
        return p instanceof AST_PropAccess && p.expression === this
            || p instanceof AST_Conditional && p.condition === this;
    });

    // same goes for an object literal (as in AST_Function), because
    // otherwise {...} would be interpreted as a block of code.
    PARENS(AST_Object, function(output) {
        return !output.has_parens() && first_in_statement(output);
    });

    PARENS(AST_ClassExpression, first_in_statement);

    PARENS(AST_Unary, function(output) {
        var p = output.parent();
        return p instanceof AST_PropAccess && p.expression === this
            || p instanceof AST_Call && p.expression === this
            || p instanceof AST_Binary
                && p.operator === "**"
                && this instanceof AST_UnaryPrefix
                && p.left === this
                && this.operator !== "++"
                && this.operator !== "--";
    });

    PARENS(AST_Await, function(output) {
        var p = output.parent();
        return p instanceof AST_PropAccess && p.expression === this
            || p instanceof AST_Call && p.expression === this
            || p instanceof AST_Binary && p.operator === "**" && p.left === this
            || output.option("safari10") && p instanceof AST_UnaryPrefix;
    });

    PARENS(AST_Sequence, function(output) {
        var p = output.parent();
        return p instanceof AST_Call                              // (foo, bar)() or foo(1, (2, 3), 4)
            || p instanceof AST_Unary                             // !(foo, bar, baz)
            || p instanceof AST_Binary                            // 1 + (2, 3) + 4 ==> 8
            || p instanceof AST_VarDefLike                        // var a = (1, 2), b = a + a; ==> b == 4
            || p instanceof AST_PropAccess && this !== p.property // (1, {foo:2}).foo, (1, {foo:2})["foo"], not foo[1, 2]
            || p instanceof AST_Array                             // [ 1, (2, 3), 4 ] ==> [ 1, 3, 4 ]
            || p instanceof AST_ObjectProperty                    // { foo: (1, 2) }.foo ==> 2
            || p instanceof AST_Conditional                       /* (false, true) ? (a = 10, b = 20) : (c = 30)
                                                                   * ==> 20 (side effect, set a := 10 and b := 20) */
            || p instanceof AST_Arrow                             // x => (x, x)
            || p instanceof AST_DefaultAssign                     // x => (x = (0, function(){}))
            || p instanceof AST_Expansion                         // [...(a, b)]
            || p instanceof AST_ForOf && this === p.object        // for (e of (foo, bar)) {}
            || p instanceof AST_Yield                             // yield (foo, bar)
            || p instanceof AST_Export                            // export default (foo, bar)
        ;
    });

    PARENS(AST_Binary, function(output) {
        var p = output.parent();
        // (foo && bar)()
        if (p instanceof AST_Call && p.expression === this)
            return true;
        // typeof (foo && bar)
        if (p instanceof AST_Unary)
            return true;
        // (foo && bar)["prop"], (foo && bar).prop
        if (p instanceof AST_PropAccess && p.expression === this)
            return true;
        // this deals with precedence: 3 * (2 + 1)
        if (p instanceof AST_Binary) {
            const parent_op = p.operator;
            const op = this.operator;

            // It is forbidden for ?? to be used with || or && without parens.
            if (op === "??" && (parent_op === "||" || parent_op === "&&")) {
                return true;
            }
            if (parent_op === "??" && (op === "||" || op === "&&")) {
                return true;
            }

            const pp = PRECEDENCE[parent_op];
            const sp = PRECEDENCE[op];
            if (pp > sp
                || (pp == sp
                    && (this === p.right || parent_op == "**"))) {
                return true;
            }
        }
        if (p instanceof AST_PrivateIn) {
            const op = this.operator;

            const pp = PRECEDENCE["in"];
            const sp = PRECEDENCE[op];
            if (pp > sp || (pp == sp && this === p.value)) {
                return true;
            }
        }
    });

    PARENS(AST_PrivateIn, function(output) {
        var p = output.parent();
        // (#x in this)()
        if (p instanceof AST_Call && p.expression === this) {
            return true;
        }
        // typeof (#x in this)
        if (p instanceof AST_Unary) {
            return true;
        }
        // (#x in this)["prop"], (#x in this).prop
        if (p instanceof AST_PropAccess && p.expression === this) {
            return true;
        }
        // same precedence as regular in operator
        if (p instanceof AST_Binary) {
            const parent_op = p.operator;

            const pp = PRECEDENCE[parent_op];
            const sp = PRECEDENCE["in"];
            if (pp > sp
                || (pp == sp
                    && (this === p.right || parent_op == "**"))) {
                return true;
            }
        }
        // rules are the same as binary in, but the class differs
        if (p instanceof AST_PrivateIn && this === p.value) {
            return true;
        }
    });

    PARENS(AST_Yield, function(output) {
        var p = output.parent();
        // (yield 1) + (yield 2)
        // a = yield 3
        if (p instanceof AST_Binary && p.operator !== "=")
            return true;
        // (yield 1)()
        // new (yield 1)()
        if (p instanceof AST_Call && p.expression === this)
            return true;
        // (yield 1) ? yield 2 : yield 3
        if (p instanceof AST_Conditional && p.condition === this)
            return true;
        // -(yield 4)
        if (p instanceof AST_Unary)
            return true;
        // (yield x).foo
        // (yield x)['foo']
        if (p instanceof AST_PropAccess && p.expression === this)
            return true;
    });

    PARENS(AST_Chain, function(output) {
        var p = output.parent();
        if (!(p instanceof AST_Call || p instanceof AST_PropAccess)) return false;
        return p.expression === this;
    });

    PARENS(AST_PropAccess, function(output) {
        var p = output.parent();
        if (p instanceof AST_New && p.expression === this) {
            // i.e. new (foo.bar().baz)
            //
            // if there's one call into this subtree, then we need
            // parens around it too, otherwise the call will be
            // interpreted as passing the arguments to the upper New
            // expression.
            return walk(this, node => {
                if (node instanceof AST_Scope) return true;
                if (node instanceof AST_Call) {
                    return walk_abort;  // makes walk() return true.
                }
            });
        }
    });

    PARENS(AST_Call, function(output) {
        var p = output.parent(), p1;
        if (p instanceof AST_New && p.expression === this
            || p instanceof AST_Export && p.is_default && this.expression instanceof AST_Function)
            return true;

        // workaround for Safari bug.
        // https://bugs.webkit.org/show_bug.cgi?id=123506
        return this.expression instanceof AST_Function
            && p instanceof AST_PropAccess
            && p.expression === this
            && (p1 = output.parent(1)) instanceof AST_Assign
            && p1.left === p;
    });

    PARENS(AST_New, function(output) {
        var p = output.parent();
        if (this.args.length === 0
            && (p instanceof AST_PropAccess // (new Date).getTime(), (new Date)["getTime"]()
                || p instanceof AST_Call && p.expression === this
                || p instanceof AST_PrefixedTemplateString && p.prefix === this)) // (new foo)(bar)
            return true;
    });

    PARENS(AST_Number, function(output) {
        var p = output.parent();
        if (p instanceof AST_PropAccess && p.expression === this) {
            var value = this.getValue();
            if (value < 0 || /^0/.test(make_num(value))) {
                return true;
            }
        }
    });

    PARENS(AST_BigInt, function(output) {
        var p = output.parent();
        if (p instanceof AST_PropAccess && p.expression === this) {
            var value = this.getValue();
            if (value.startsWith("-")) {
                return true;
            }
        }
    });

    PARENS([ AST_Assign, AST_Conditional ], function(output) {
        var p = output.parent();
        // !(a = false) → true
        if (p instanceof AST_Unary)
            return true;
        // 1 + (a = 2) + 3 → 6, side effect setting a = 2
        if (p instanceof AST_Binary && !(p instanceof AST_Assign))
            return true;
        // (a = func)() —or— new (a = Object)()
        if (p instanceof AST_Call && p.expression === this)
            return true;
        // (a = foo) ? bar : baz
        if (p instanceof AST_Conditional && p.condition === this)
            return true;
        // (a = foo)["prop"] —or— (a = foo).prop
        if (p instanceof AST_PropAccess && p.expression === this)
            return true;
        // ({a, b} = {a: 1, b: 2}), a destructuring assignment
        if (this instanceof AST_Assign && this.left instanceof AST_Destructuring && this.left.is_array === false)
            return true;
    });

    /* -----[ PRINTERS ]----- */

    DEFPRINT(AST_Directive, function(self, output) {
        output.print_string(self.value, self.quote);
        output.semicolon();
    });

    DEFPRINT(AST_Expansion, function (self, output) {
        output.print("...");
        self.expression.print(output);
    });

    DEFPRINT(AST_Destructuring, function (self, output) {
        output.print(self.is_array ? "[" : "{");
        var len = self.names.length;
        self.names.forEach(function (name, i) {
            if (i > 0) output.comma();
            name.print(output);
            // If the final element is a hole, we need to make sure it
            // doesn't look like a trailing comma, by inserting an actual
            // trailing comma.
            if (i == len - 1 && name instanceof AST_Hole) output.comma();
        });
        output.print(self.is_array ? "]" : "}");
    });

    DEFPRINT(AST_Debugger, function(self, output) {
        output.print("debugger");
        output.semicolon();
    });

    /* -----[ statements ]----- */

    function display_body(body, is_toplevel, output, allow_directives) {
        var last = body.length - 1;
        output.in_directive = allow_directives;
        body.forEach(function(stmt, i) {
            if (output.in_directive === true && !(stmt instanceof AST_Directive ||
                stmt instanceof AST_EmptyStatement ||
                (stmt instanceof AST_SimpleStatement && stmt.body instanceof AST_String)
            )) {
                output.in_directive = false;
            }
            if (!(stmt instanceof AST_EmptyStatement)) {
                output.indent();
                stmt.print(output);
                if (!(i == last && is_toplevel)) {
                    output.newline();
                    if (is_toplevel) output.newline();
                }
            }
            if (output.in_directive === true &&
                stmt instanceof AST_SimpleStatement &&
                stmt.body instanceof AST_String
            ) {
                output.in_directive = false;
            }
        });
        output.in_directive = false;
    }

    AST_StatementWithBody.DEFMETHOD("_do_print_body", function(output) {
        print_maybe_braced_body(this.body, output);
    });

    DEFPRINT(AST_Statement, function(self, output) {
        self.body.print(output);
        output.semicolon();
    });
    DEFPRINT(AST_Toplevel, function(self, output) {
        display_body(self.body, true, output, true);
        output.print("");
    });
    DEFPRINT(AST_LabeledStatement, function(self, output) {
        self.label.print(output);
        output.colon();
        self.body.print(output);
    });
    DEFPRINT(AST_SimpleStatement, function(self, output) {
        self.body.print(output);
        output.semicolon();
    });
    function print_braced_empty(self, output) {
        output.print("{");
        output.with_indent(output.next_indent(), function() {
            output.append_comments(self, true);
        });
        output.add_mapping(self.end);
        output.print("}");
    }
    function print_braced(self, output, allow_directives) {
        if (self.body.length > 0) {
            output.with_block(function() {
                display_body(self.body, false, output, allow_directives);
                output.add_mapping(self.end);
            });
        } else print_braced_empty(self, output);
    }
    DEFPRINT(AST_BlockStatement, function(self, output) {
        print_braced(self, output);
    });
    DEFPRINT(AST_EmptyStatement, function(self, output) {
        output.semicolon();
    });
    DEFPRINT(AST_Do, function(self, output) {
        output.print("do");
        output.space();
        make_block(self.body, output);
        output.space();
        output.print("while");
        output.space();
        output.with_parens(function() {
            self.condition.print(output);
        });
        output.semicolon();
    });
    DEFPRINT(AST_While, function(self, output) {
        output.print("while");
        output.space();
        output.with_parens(function() {
            self.condition.print(output);
        });
        output.space();
        self._do_print_body(output);
    });
    DEFPRINT(AST_For, function(self, output) {
        output.print("for");
        output.space();
        output.with_parens(function() {
            if (self.init) {
                if (self.init instanceof AST_DefinitionsLike) {
                    self.init.print(output);
                } else {
                    parenthesize_for_noin(self.init, output, true);
                }
                output.print(";");
                output.space();
            } else {
                output.print(";");
            }
            if (self.condition) {
                self.condition.print(output);
                output.print(";");
                output.space();
            } else {
                output.print(";");
            }
            if (self.step) {
                self.step.print(output);
            }
        });
        output.space();
        self._do_print_body(output);
    });
    DEFPRINT(AST_ForIn, function(self, output) {
        output.print("for");
        if (self.await) {
            output.space();
            output.print("await");
        }
        output.space();
        output.with_parens(function() {
            self.init.print(output);
            output.space();
            output.print(self instanceof AST_ForOf ? "of" : "in");
            output.space();
            self.object.print(output);
        });
        output.space();
        self._do_print_body(output);
    });
    DEFPRINT(AST_With, function(self, output) {
        output.print("with");
        output.space();
        output.with_parens(function() {
            self.expression.print(output);
        });
        output.space();
        self._do_print_body(output);
    });

    /* -----[ functions ]----- */
    AST_Lambda.DEFMETHOD("_do_print", function(output, nokeyword) {
        var self = this;
        if (!nokeyword) {
            if (self.async) {
                output.print("async");
                output.space();
            }
            output.print("function");
            if (self.is_generator) {
                output.star();
            }
            if (self.name) {
                output.space();
            }
        }
        if (self.name instanceof AST_Symbol) {
            self.name.print(output);
        } else if (nokeyword && self.name instanceof AST_Node) {
            output.with_square(function() {
                self.name.print(output); // Computed method name
            });
        }
        output.with_parens(function() {
            self.argnames.forEach(function(arg, i) {
                if (i) output.comma();
                arg.print(output);
            });
        });
        output.space();
        print_braced(self, output, true);
    });
    DEFPRINT(AST_Lambda, function(self, output) {
        self._do_print(output);
        output.gc_scope(self);
    });

    DEFPRINT(AST_PrefixedTemplateString, function(self, output) {
        var tag = self.prefix;
        var parenthesize_tag = tag instanceof AST_Lambda
            || tag instanceof AST_Binary
            || tag instanceof AST_Conditional
            || tag instanceof AST_Sequence
            || tag instanceof AST_Unary
            || tag instanceof AST_Dot && tag.expression instanceof AST_Object;
        if (parenthesize_tag) output.print("(");
        self.prefix.print(output);
        if (parenthesize_tag) output.print(")");
        self.template_string.print(output);
    });
    DEFPRINT(AST_TemplateString, function(self, output) {
        var is_tagged = output.parent() instanceof AST_PrefixedTemplateString;

        output.print("`");
        for (var i = 0; i < self.segments.length; i++) {
            if (!(self.segments[i] instanceof AST_TemplateSegment)) {
                output.print("${");
                self.segments[i].print(output);
                output.print("}");
            } else if (is_tagged) {
                output.print(self.segments[i].raw);
            } else {
                output.print_template_string_chars(self.segments[i].value);
            }
        }
        output.print("`");
    });
    DEFPRINT(AST_TemplateSegment, function(self, output) {
        output.print_template_string_chars(self.value);
    });

    AST_Arrow.DEFMETHOD("_do_print", function(output) {
        var self = this;
        var parent = output.parent();
        var needs_parens = (parent instanceof AST_Binary &&
                !(parent instanceof AST_Assign) &&
                !(parent instanceof AST_DefaultAssign)) ||
            parent instanceof AST_Unary ||
            (parent instanceof AST_Call && self === parent.expression);
        if (needs_parens) { output.print("("); }
        if (self.async) {
            output.print("async");
            output.space();
        }
        if (self.argnames.length === 1 && self.argnames[0] instanceof AST_Symbol) {
            self.argnames[0].print(output);
        } else {
            output.with_parens(function() {
                self.argnames.forEach(function(arg, i) {
                    if (i) output.comma();
                    arg.print(output);
                });
            });
        }
        output.space();
        output.print("=>");
        output.space();
        const first_statement = self.body[0];
        if (
            self.body.length === 1
            && first_statement instanceof AST_Return
        ) {
            const returned = first_statement.value;
            if (!returned) {
                output.print("{}");
            } else if (left_is_object(returned)) {
                output.print("(");
                returned.print(output);
                output.print(")");
            } else {
                returned.print(output);
            }
        } else {
            print_braced(self, output);
        }
        if (needs_parens) { output.print(")"); }
        output.gc_scope(self);
    });

    /* -----[ exits ]----- */
    AST_Exit.DEFMETHOD("_do_print", function(output, kind) {
        output.print(kind);
        if (this.value) {
            output.space();
            const comments = this.value.start.comments_before;
            if (comments && comments.length && !output.printed_comments.has(comments)) {
                output.print("(");
                this.value.print(output);
                output.print(")");
            } else {
                this.value.print(output);
            }
        }
        output.semicolon();
    });
    DEFPRINT(AST_Return, function(self, output) {
        self._do_print(output, "return");
    });
    DEFPRINT(AST_Throw, function(self, output) {
        self._do_print(output, "throw");
    });

    /* -----[ yield ]----- */

    DEFPRINT(AST_Yield, function(self, output) {
        var star = self.is_star ? "*" : "";
        output.print("yield" + star);
        if (self.expression) {
            output.space();
            self.expression.print(output);
        }
    });

    DEFPRINT(AST_Await, function(self, output) {
        output.print("await");
        output.space();
        var e = self.expression;
        var parens = !(
               e instanceof AST_Call
            || e instanceof AST_SymbolRef
            || e instanceof AST_PropAccess
            || e instanceof AST_Unary
            || e instanceof AST_Constant
            || e instanceof AST_Await
            || e instanceof AST_Object
        );
        if (parens) output.print("(");
        self.expression.print(output);
        if (parens) output.print(")");
    });

    /* -----[ loop control ]----- */
    AST_LoopControl.DEFMETHOD("_do_print", function(output, kind) {
        output.print(kind);
        if (this.label) {
            output.space();
            this.label.print(output);
        }
        output.semicolon();
    });
    DEFPRINT(AST_Break, function(self, output) {
        self._do_print(output, "break");
    });
    DEFPRINT(AST_Continue, function(self, output) {
        self._do_print(output, "continue");
    });

    /* -----[ if ]----- */
    function make_then(self, output) {
        var b = self.body;
        if (output.option("braces")
            || output.option("ie8") && b instanceof AST_Do)
            return make_block(b, output);
        // The squeezer replaces "block"-s that contain only a single
        // statement with the statement itself; technically, the AST
        // is correct, but this can create problems when we output an
        // IF having an ELSE clause where the THEN clause ends in an
        // IF *without* an ELSE block (then the outer ELSE would refer
        // to the inner IF).  This function checks for this case and
        // adds the block braces if needed.
        if (!b) return output.force_semicolon();
        while (true) {
            if (b instanceof AST_If) {
                if (!b.alternative) {
                    make_block(self.body, output);
                    return;
                }
                b = b.alternative;
            } else if (b instanceof AST_StatementWithBody) {
                b = b.body;
            } else break;
        }
        print_maybe_braced_body(self.body, output);
    }
    DEFPRINT(AST_If, function(self, output) {
        output.print("if");
        output.space();
        output.with_parens(function() {
            self.condition.print(output);
        });
        output.space();
        if (self.alternative) {
            make_then(self, output);
            output.space();
            output.print("else");
            output.space();
            if (self.alternative instanceof AST_If)
                self.alternative.print(output);
            else
                print_maybe_braced_body(self.alternative, output);
        } else {
            self._do_print_body(output);
        }
    });

    /* -----[ switch ]----- */
    DEFPRINT(AST_Switch, function(self, output) {
        output.print("switch");
        output.space();
        output.with_parens(function() {
            self.expression.print(output);
        });
        output.space();
        var last = self.body.length - 1;
        if (last < 0) print_braced_empty(self, output);
        else output.with_block(function() {
            self.body.forEach(function(branch, i) {
                output.indent(true);
                branch.print(output);
                if (i < last && branch.body.length > 0)
                    output.newline();
            });
        });
    });
    AST_SwitchBranch.DEFMETHOD("_do_print_body", function(output) {
        output.newline();
        this.body.forEach(function(stmt) {
            output.indent();
            stmt.print(output);
            output.newline();
        });
    });
    DEFPRINT(AST_Default, function(self, output) {
        output.print("default:");
        self._do_print_body(output);
    });
    DEFPRINT(AST_Case, function(self, output) {
        output.print("case");
        output.space();
        self.expression.print(output);
        output.print(":");
        self._do_print_body(output);
    });

    /* -----[ exceptions ]----- */
    DEFPRINT(AST_Try, function(self, output) {
        output.print("try");
        output.space();
        self.body.print(output);
        if (self.bcatch) {
            output.space();
            self.bcatch.print(output);
        }
        if (self.bfinally) {
            output.space();
            self.bfinally.print(output);
        }
    });
    DEFPRINT(AST_TryBlock, function(self, output) {
        print_braced(self, output);
    });
    DEFPRINT(AST_Catch, function(self, output) {
        output.print("catch");
        if (self.argname) {
            output.space();
            output.with_parens(function() {
                self.argname.print(output);
            });
        }
        output.space();
        print_braced(self, output);
    });
    DEFPRINT(AST_Finally, function(self, output) {
        output.print("finally");
        output.space();
        print_braced(self, output);
    });

    /* -----[ var/const ]----- */
    AST_DefinitionsLike.DEFMETHOD("_do_print", function(output, kind) {
        output.print(kind);
        output.space();
        this.definitions.forEach(function(def, i) {
            if (i) output.comma();
            def.print(output);
        });
        var p = output.parent();
        var in_for = p instanceof AST_For || p instanceof AST_ForIn;
        var output_semicolon = !in_for || p && p.init !== this;
        if (output_semicolon)
            output.semicolon();
    });
    DEFPRINT(AST_Let, function(self, output) {
        self._do_print(output, "let");
    });
    DEFPRINT(AST_Var, function(self, output) {
        self._do_print(output, "var");
    });
    DEFPRINT(AST_Const, function(self, output) {
        self._do_print(output, "const");
    });
    DEFPRINT(AST_Using, function(self, output) {
        self._do_print(output, self.await ? "await using" : "using");
    });
    DEFPRINT(AST_Import, function(self, output) {
        output.print("import");
        output.space();
        if (self.imported_name) {
            self.imported_name.print(output);
        }
        if (self.imported_name && self.imported_names) {
            output.print(",");
            output.space();
        }
        if (self.imported_names) {
            if (self.imported_names.length === 1 &&
                self.imported_names[0].foreign_name.name === "*" &&
                !self.imported_names[0].foreign_name.quote) {
                self.imported_names[0].print(output);
            } else {
                output.print("{");
                self.imported_names.forEach(function (name_import, i) {
                    output.space();
                    name_import.print(output);
                    if (i < self.imported_names.length - 1) {
                        output.print(",");
                    }
                });
                output.space();
                output.print("}");
            }
        }
        if (self.imported_name || self.imported_names) {
            output.space();
            output.print("from");
            output.space();
        }
        self.module_name.print(output);
        if (self.attributes) {
            output.print("with");
            self.attributes.print(output);
        }
        output.semicolon();
    });
    DEFPRINT(AST_ImportMeta, function(self, output) {
        output.print("import.meta");
    });

    DEFPRINT(AST_NameMapping, function(self, output) {
        var is_import = output.parent() instanceof AST_Import;
        var definition = self.name.definition();
        var foreign_name = self.foreign_name;
        var names_are_different =
            (definition && definition.mangled_name || self.name.name) !==
            foreign_name.name;
        if (!names_are_different &&
            foreign_name.name === "*" &&
            !!foreign_name.quote != !!self.name.quote) {
                // export * as "*"
            names_are_different = true;
        }
        var foreign_name_is_name = !foreign_name.quote;
        if (names_are_different) {
            if (is_import) {
                if (foreign_name_is_name) {
                    output.print(foreign_name.name);
                } else {
                    output.print_string(foreign_name.name, foreign_name.quote);
                }
            } else {
                if (!self.name.quote) {
                    self.name.print(output);
                } else {
                    output.print_string(self.name.name, self.name.quote);
                }
                
            }
            output.space();
            output.print("as");
            output.space();
            if (is_import) {
                self.name.print(output);
            } else {
                if (foreign_name_is_name) {
                    output.print(foreign_name.name);
                } else {
                    output.print_string(foreign_name.name, foreign_name.quote);
                }
            }
        } else {
            if (!self.name.quote) {
                self.name.print(output);
            } else {
                output.print_string(self.name.name, self.name.quote);
            }
        }
    });

    DEFPRINT(AST_Export, function(self, output) {
        output.print("export");
        output.space();
        if (self.is_default) {
            output.print("default");
            output.space();
        }
        if (self.exported_names) {
            if (self.exported_names.length === 1 &&
                self.exported_names[0].name.name === "*" &&
                !self.exported_names[0].name.quote) {
                    self.exported_names[0].print(output);
            } else {
                output.print("{");
                self.exported_names.forEach(function(name_export, i) {
                    output.space();
                    name_export.print(output);
                    if (i < self.exported_names.length - 1) {
                        output.print(",");
                    }
                });
                output.space();
                output.print("}");
            }
        } else if (self.exported_value) {
            self.exported_value.print(output);
        } else if (self.exported_definition) {
            self.exported_definition.print(output);
            if (self.exported_definition instanceof AST_Definitions) return;
        }
        if (self.module_name) {
            output.space();
            output.print("from");
            output.space();
            self.module_name.print(output);
        }
        if (self.attributes) {
            output.print("with");
            self.attributes.print(output);
        }
        if (self.exported_value
                && !(self.exported_value instanceof AST_Defun ||
                    self.exported_value instanceof AST_Function ||
                    self.exported_value instanceof AST_Class)
            || self.module_name
            || self.exported_names
        ) {
            output.semicolon();
        }
    });

    function parenthesize_for_noin(node, output, noin) {
        var parens = false;
        // need to take some precautions here:
        //    https://github.com/mishoo/UglifyJS2/issues/60
        if (noin) {
            parens = walk(node, node => {
                // Don't go into scopes -- except arrow functions:
                // https://github.com/terser/terser/issues/1019#issuecomment-877642607
                if (node instanceof AST_Scope && !(node instanceof AST_Arrow)) {
                    return true;
                }
                if (
                    node instanceof AST_Binary && node.operator == "in"
                    || node instanceof AST_PrivateIn
                ) {
                    return walk_abort;  // makes walk() return true
                }
            });
        }
        node.print(output, parens);
    }

    DEFPRINT(AST_VarDefLike, function(self, output) {
        self.name.print(output);
        if (self.value) {
            output.space();
            output.print("=");
            output.space();
            var p = output.parent(1);
            var noin = p instanceof AST_For || p instanceof AST_ForIn;
            parenthesize_for_noin(self.value, output, noin);
        }
    });

    /* -----[ other expressions ]----- */
    DEFPRINT(AST_Call, function(self, output) {
        self.expression.print(output);
        if (self instanceof AST_New && self.args.length === 0)
            return;
        if (self.expression instanceof AST_Call || self.expression instanceof AST_Lambda) {
            output.add_mapping(self.start);
        }
        if (self.optional) output.print("?.");
        output.with_parens(function() {
            self.args.forEach(function(expr, i) {
                if (i) output.comma();
                expr.print(output);
            });
        });
    });
    DEFPRINT(AST_New, function(self, output) {
        output.print("new");
        output.space();
        AST_Call.prototype._codegen(self, output);
    });

    AST_Sequence.DEFMETHOD("_do_print", function(output) {
        this.expressions.forEach(function(node, index) {
            if (index > 0) {
                output.comma();
                if (output.should_break()) {
                    output.newline();
                    output.indent();
                }
            }
            node.print(output);
        });
    });
    DEFPRINT(AST_Sequence, function(self, output) {
        self._do_print(output);
        // var p = output.parent();
        // if (p instanceof AST_Statement) {
        //     output.with_indent(output.next_indent(), function(){
        //         self._do_print(output);
        //     });
        // } else {
        //     self._do_print(output);
        // }
    });
    DEFPRINT(AST_Dot, function(self, output) {
        var expr = self.expression;
        expr.print(output);
        var prop = self.property;
        var print_computed = ALL_RESERVED_WORDS.has(prop)
            ? output.option("ie8")
            : !is_identifier_string(
                prop,
                output.option("ecma") >= 2015 && !output.option("safari10")
            );

        if (self.optional) output.print("?.");

        if (print_computed) {
            output.print("[");
            output.add_mapping(self.end);
            output.print_string(prop);
            output.print("]");
        } else {
            if (expr instanceof AST_Number && expr.getValue() >= 0) {
                if (!/[xa-f.)]/i.test(output.last())) {
                    output.print(".");
                }
            }
            if (!self.optional) output.print(".");
            // the name after dot would be mapped about here.
            output.add_mapping(self.end);
            output.print_name(prop);
        }
    });
    DEFPRINT(AST_DotHash, function(self, output) {
        var expr = self.expression;
        expr.print(output);
        var prop = self.property;

        if (self.optional) output.print("?");
        output.print(".#");
        output.add_mapping(self.end);
        output.print_name(prop);
    });
    DEFPRINT(AST_Sub, function(self, output) {
        self.expression.print(output);
        if (self.optional) output.print("?.");
        output.print("[");
        self.property.print(output);
        output.print("]");
    });
    DEFPRINT(AST_Chain, function(self, output) {
        self.expression.print(output);
    });
    DEFPRINT(AST_UnaryPrefix, function(self, output) {
        var op = self.operator;
        if (op === "--" && output.last().endsWith("!")) {
            // avoid printing "<!--"
            output.print(" ");
        }
        output.print(op);
        if (/^[a-z]/i.test(op)
            || (/[+-]$/.test(op)
                && self.expression instanceof AST_UnaryPrefix
                && /^[+-]/.test(self.expression.operator))) {
            output.space();
        }
        self.expression.print(output);
    });
    DEFPRINT(AST_UnaryPostfix, function(self, output) {
        self.expression.print(output);
        output.print(self.operator);
    });
    DEFPRINT(AST_Binary, function(self, output) {
        var op = self.operator;
        self.left.print(output);
        if (op[0] == ">" /* ">>" ">>>" ">" ">=" */
            && output.last().endsWith("--")) {
            // space is mandatory to avoid outputting -->
            output.print(" ");
        } else {
            // the space is optional depending on "beautify"
            output.space();
        }
        output.print(op);
        output.space();
        self.right.print(output);
    });
    DEFPRINT(AST_Conditional, function(self, output) {
        self.condition.print(output);
        output.space();
        output.print("?");
        output.space();
        self.consequent.print(output);
        output.space();
        output.colon();
        self.alternative.print(output);
    });

    /* -----[ literals ]----- */
    DEFPRINT(AST_Array, function(self, output) {
        output.with_square(function() {
            var a = self.elements, len = a.length;
            if (len > 0) output.space();
            a.forEach(function(exp, i) {
                if (i) output.comma();
                exp.print(output);
                // If the final element is a hole, we need to make sure it
                // doesn't look like a trailing comma, by inserting an actual
                // trailing comma.
                if (i === len - 1 && exp instanceof AST_Hole)
                  output.comma();
            });
            if (len > 0) output.space();
        });
    });
    DEFPRINT(AST_Object, function(self, output) {
        if (self.properties.length > 0) output.with_block(function() {
            self.properties.forEach(function(prop, i) {
                if (i) {
                    output.print(",");
                    output.newline();
                }
                output.indent();
                prop.print(output);
            });
            output.newline();
        });
        else print_braced_empty(self, output);
    });
    DEFPRINT(AST_Class, function(self, output) {
        output.print("class");
        output.space();
        if (self.name) {
            self.name.print(output);
            output.space();
        }
        if (self.extends) {
            var parens = (
                   !(self.extends instanceof AST_SymbolRef)
                && !(self.extends instanceof AST_PropAccess)
                && !(self.extends instanceof AST_ClassExpression)
                && !(self.extends instanceof AST_Function)
            );
            output.print("extends");
            if (parens) {
                output.print("(");
            } else {
                output.space();
            }
            self.extends.print(output);
            if (parens) {
                output.print(")");
            } else {
                output.space();
            }
        }
        if (self.properties.length > 0) output.with_block(function() {
            self.properties.forEach(function(prop, i) {
                if (i) {
                    output.newline();
                }
                output.indent();
                prop.print(output);
            });
            output.newline();
        });
        else output.print("{}");
    });
    DEFPRINT(AST_NewTarget, function(self, output) {
        output.print("new.target");
    });

    /** Prints a prop name. Returns whether it can be used as a shorthand. */
    function print_property_name(key, quote, output) {
        if (output.option("quote_keys")) {
            output.print_string(key);
            return false;
        }
        if ("" + +key == key && key >= 0) {
            if (output.option("keep_numbers")) {
                output.print(key);
                return false;
            }
            output.print(make_num(key));
            return false;
        }
        var print_string = ALL_RESERVED_WORDS.has(key)
            ? output.option("ie8")
            : (
                output.option("ecma") < 2015 || output.option("safari10")
                    ? !is_basic_identifier_string(key)
                    : !is_identifier_string(key, true)
            );
        if (print_string || (quote && output.option("keep_quoted_props"))) {
            output.print_string(key, quote);
            return false;
        }
        output.print_name(key);
        return true;
    }

    DEFPRINT(AST_ObjectKeyVal, function(self, output) {
        function get_name(self) {
            var def = self.definition();
            return def ? def.mangled_name || def.name : self.name;
        }

        const try_shorthand = output.option("shorthand") && !(self.key instanceof AST_Node);
        if (
            try_shorthand
            && self.value instanceof AST_Symbol
            && get_name(self.value) === self.key
            && !ALL_RESERVED_WORDS.has(self.key)
        ) {
            const was_shorthand = print_property_name(self.key, self.quote, output);
            if (!was_shorthand) {
                output.colon();
                self.value.print(output);
            }
        } else if (
            try_shorthand
            && self.value instanceof AST_DefaultAssign
            && self.value.left instanceof AST_Symbol
            && get_name(self.value.left) === self.key
        ) {
            const was_shorthand = print_property_name(self.key, self.quote, output);
            if (!was_shorthand) {
                output.colon();
                self.value.left.print(output);
            }
            output.space();
            output.print("=");
            output.space();
            self.value.right.print(output);
        } else {
            if (!(self.key instanceof AST_Node)) {
                print_property_name(self.key, self.quote, output);
            } else {
                output.with_square(function() {
                    self.key.print(output);
                });
            }
            output.colon();
            self.value.print(output);
        }
    });
    DEFPRINT(AST_ClassPrivateProperty, (self, output) => {
        if (self.static) {
            output.print("static");
            output.space();
        }

        output.print("#");
        
        print_property_name(self.key.name, undefined, output);

        if (self.value) {
            output.print("=");
            self.value.print(output);
        }

        output.semicolon();
    });
    DEFPRINT(AST_ClassProperty, (self, output) => {
        if (self.static) {
            output.print("static");
            output.space();
        }

        if (self.key instanceof AST_SymbolClassProperty) {
            print_property_name(self.key.name, self.quote, output);
        } else {
            output.print("[");
            self.key.print(output);
            output.print("]");
        }

        if (self.value) {
            output.print("=");
            self.value.print(output);
        }

        output.semicolon();
    });
    AST_ObjectProperty.DEFMETHOD("_print_getter_setter", function(type, is_private, output) {
        var self = this;
        if (self.static) {
            output.print("static");
            output.space();
        }
        if (type) {
            output.print(type);
            output.space();
        }
        if (self.key instanceof AST_SymbolMethod) {
            if (is_private) output.print("#");
            print_property_name(self.key.name, self.quote, output);
            self.key.add_source_map(output);
        } else {
            output.with_square(function() {
                self.key.print(output);
            });
        }
        self.value._do_print(output, true);
    });
    DEFPRINT(AST_ObjectSetter, function(self, output) {
        self._print_getter_setter("set", false, output);
    });
    DEFPRINT(AST_ObjectGetter, function(self, output) {
        self._print_getter_setter("get", false, output);
    });
    DEFPRINT(AST_PrivateSetter, function(self, output) {
        self._print_getter_setter("set", true, output);
    });
    DEFPRINT(AST_PrivateGetter, function(self, output) {
        self._print_getter_setter("get", true, output);
    });
    DEFPRINT(AST_ConciseMethod, function(self, output) {
        var type;
        if (self.value.is_generator && self.value.async) {
            type = "async*";
        } else if (self.value.is_generator) {
            type = "*";
        } else if (self.value.async) {
            type = "async";
        }
        self._print_getter_setter(type, false, output);
    });
    DEFPRINT(AST_PrivateMethod, function(self, output) {
        var type;
        if (self.value.is_generator && self.value.async) {
            type = "async*";
        } else if (self.value.is_generator) {
            type = "*";
        } else if (self.value.async) {
            type = "async";
        }
        self._print_getter_setter(type, true, output);
    });
    DEFPRINT(AST_PrivateIn, function(self, output) {
        self.key.print(output);
        output.space();
        output.print("in");
        output.space();
        self.value.print(output);
    });
    DEFPRINT(AST_SymbolPrivateProperty, function(self, output) {
        output.print("#" + self.name);
    });
    DEFPRINT(AST_ClassStaticBlock, function (self, output) {
        output.print("static");
        output.space();
        print_braced(self, output);
    });
    AST_Symbol.DEFMETHOD("_do_print", function(output) {
        var def = this.definition();
        output.print_name(def ? def.mangled_name || def.name : this.name);
    });
    DEFPRINT(AST_Symbol, function (self, output) {
        self._do_print(output);
    });
    DEFPRINT(AST_Hole, noop);
    DEFPRINT(AST_This, function(self, output) {
        output.print("this");
    });
    DEFPRINT(AST_Super, function(self, output) {
        output.print("super");
    });
    DEFPRINT(AST_Constant, function(self, output) {
        output.print(self.getValue());
    });
    DEFPRINT(AST_String, function(self, output) {
        output.print_string(self.getValue(), self.quote, output.in_directive);
    });
    DEFPRINT(AST_Number, function(self, output) {
        if ((output.option("keep_numbers") || output.use_asm) && self.raw) {
            output.print(self.raw);
        } else {
            output.print(make_num(self.getValue()));
        }
    });
    DEFPRINT(AST_BigInt, function(self, output) {
        if (output.option("keep_numbers") && self.raw) {
            output.print(self.raw);
        } else {
            output.print(self.getValue() + "n");
        }
    });

    const r_slash_script = /(<\s*\/\s*script)/i;
    const r_starts_with_script = /^\s*script/i;
    const slash_script_replace = (_, $1) => $1.replace("/", "\\/");
    DEFPRINT(AST_RegExp, function(self, output) {
        let { source, flags } = self.getValue();
        source = regexp_source_fix(source);
        flags = flags ? sort_regexp_flags(flags) : "";

        // Avoid outputting end of script tag
        source = source.replace(r_slash_script, slash_script_replace);
        if (r_starts_with_script.test(source) && output.last().endsWith("<")) {
            output.print(" ");
        }

        output.print(output.to_utf8(`/${source}/${flags}`, false, true));

        const parent = output.parent();
        if (
            parent instanceof AST_Binary
            && /^\w/.test(parent.operator)
            && parent.left === self
        ) {
            output.print(" ");
        }
    });

    /** if, for, while, may or may not have braces surrounding its body */
    function print_maybe_braced_body(stat, output) {
        if (output.option("braces")) {
            make_block(stat, output);
        } else {
            if (!stat || stat instanceof AST_EmptyStatement)
                output.force_semicolon();
            else if ((stat instanceof AST_DefinitionsLike && !(stat instanceof AST_Var)) || stat instanceof AST_Class)
                make_block(stat, output);
            else
                stat.print(output);
        }
    }

    function best_of(a) {
        var best = a[0], len = best.length;
        for (var i = 1; i < a.length; ++i) {
            if (a[i].length < len) {
                best = a[i];
                len = best.length;
            }
        }
        return best;
    }

    function make_num(num) {
        var str = num.toString(10).replace(/^0\./, ".").replace("e+", "e");
        var candidates = [ str ];
        if (Math.floor(num) === num) {
            if (num < 0) {
                candidates.push("-0x" + (-num).toString(16).toLowerCase());
            } else {
                candidates.push("0x" + num.toString(16).toLowerCase());
            }
        }
        var match, len, digits;
        if (match = /^\.0+/.exec(str)) {
            len = match[0].length;
            digits = str.slice(len);
            candidates.push(digits + "e-" + (digits.length + len - 1));
        } else if (match = /0+$/.exec(str)) {
            len = match[0].length;
            candidates.push(str.slice(0, -len) + "e" + len);
        } else if (match = /^(\d)\.(\d+)e(-?\d+)$/.exec(str)) {
            candidates.push(match[1] + match[2] + "e" + (match[3] - match[2].length));
        }
        return best_of(candidates);
    }

    function make_block(stmt, output) {
        if (!stmt || stmt instanceof AST_EmptyStatement)
            output.print("{}");
        else if (stmt instanceof AST_BlockStatement)
            stmt.print(output);
        else output.with_block(function() {
            output.indent();
            stmt.print(output);
            output.newline();
        });
    }

    /* -----[ source map generators ]----- */

    function DEFMAP(nodetype, generator) {
        nodetype.forEach(function(nodetype) {
            nodetype.DEFMETHOD("add_source_map", generator);
        });
    }

    DEFMAP([
        // We could easily add info for ALL nodes, but it seems to me that
        // would be quite wasteful, hence this noop in the base class.
        AST_Node,
        // since the label symbol will mark it
        AST_LabeledStatement,
        AST_Toplevel,
    ], noop);

    // XXX: I'm not exactly sure if we need it for all of these nodes,
    // or if we should add even more.
    DEFMAP([
        AST_Array,
        AST_BlockStatement,
        AST_Catch,
        AST_Class,
        AST_Constant,
        AST_Debugger,
        AST_DefinitionsLike,
        AST_Directive,
        AST_Finally,
        AST_Jump,
        AST_Lambda,
        AST_New,
        AST_Object,
        AST_StatementWithBody,
        AST_Symbol,
        AST_Switch,
        AST_SwitchBranch,
        AST_TemplateString,
        AST_TemplateSegment,
        AST_Try,
    ], function(output) {
        output.add_mapping(this.start);
    });

    DEFMAP([
        AST_ObjectGetter,
        AST_ObjectSetter,
        AST_PrivateGetter,
        AST_PrivateSetter,
        AST_ConciseMethod,
        AST_PrivateMethod,
    ], function(output) {
        output.add_mapping(this.start, false /*name handled below*/);
    });

    DEFMAP([
        AST_SymbolMethod,
        AST_SymbolPrivateProperty
    ], function(output) {
        const tok_type = this.end && this.end.type;
        if (tok_type === "name" || tok_type === "privatename") {
            output.add_mapping(this.end, this.name);
        } else {
            output.add_mapping(this.end);
        }
    });

    DEFMAP([ AST_ObjectProperty ], function(output) {
        output.add_mapping(this.start, this.key);
    });
})();

export {
    OutputStream,
};
