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

import { make_node } from "./utils/index.js";
import {
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
    AST_ClassStaticBlock,
    AST_ClassExpression,
    AST_ClassProperty,
    AST_ClassPrivateProperty,
    AST_ConciseMethod,
    AST_Conditional,
    AST_Const,
    AST_Constant,
    AST_Continue,
    AST_Debugger,
    AST_Default,
    AST_DefaultAssign,
    AST_DefClass,
    AST_DefinitionsLike,
    AST_Defun,
    AST_Destructuring,
    AST_Directive,
    AST_Do,
    AST_Dot,
    AST_DotHash,
    AST_EmptyStatement,
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
    AST_Label,
    AST_LabeledStatement,
    AST_LabelRef,
    AST_Lambda,
    AST_Let,
    AST_NameMapping,
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
    AST_PrivateIn,
    AST_PropAccess,
    AST_RegExp,
    AST_Return,
    AST_Sequence,
    AST_SimpleStatement,
    AST_Statement,
    AST_String,
    AST_Sub,
    AST_Super,
    AST_Switch,
    AST_SwitchBranch,
    AST_Symbol,
    AST_SymbolCatch,
    AST_SymbolClass,
    AST_SymbolClassProperty,
    AST_SymbolPrivateProperty,
    AST_SymbolConst,
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
    AST_SymbolVar,
    AST_SymbolUsing,
    AST_TemplateSegment,
    AST_TemplateString,
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
    AST_Using,
    AST_UsingDef,
    AST_Var,
    AST_VarDef,
    AST_VarDefLike,
    AST_While,
    AST_With,
    AST_Yield,
} from "./ast.js";
import { is_basic_identifier_string } from "./parse.js";

(function() {

    var normalize_directives = function(body) {
        for (var i = 0; i < body.length; i++) {
            if (body[i] instanceof AST_Statement && body[i].body instanceof AST_String) {
                body[i] = new AST_Directive({
                    start: body[i].start,
                    end: body[i].end,
                    quote: '"',
                    value: body[i].body.value
                });
            } else {
                return body;
            }
        }

        return body;
    };

    function import_attributes_from_moz(attributes) {
        if (attributes && attributes.length > 0) {
            return new AST_Object({
                start: my_start_token(attributes),
                end: my_end_token(attributes),
                properties: attributes.map((attr) =>
                    new AST_ObjectKeyVal({
                        start: my_start_token(attr),
                        end: my_end_token(attr),
                        key: attr.key.name || attr.key.value,
                        value: from_moz(attr.value)
                    })
                )
            });
        }
        return null;
    }

    var MOZ_TO_ME = {
        Program: function(M) {
            return new AST_Toplevel({
                start: my_start_token(M),
                end: my_end_token(M),
                body: normalize_directives(M.body.map(from_moz))
            });
        },

        ArrayPattern: function(M) {
            return new AST_Destructuring({
                start: my_start_token(M),
                end: my_end_token(M),
                names: M.elements.map(function(elm) {
                    if (elm === null) {
                        return new AST_Hole();
                    }
                    return from_moz(elm);
                }),
                is_array: true
            });
        },

        ObjectPattern: function(M) {
            return new AST_Destructuring({
                start: my_start_token(M),
                end: my_end_token(M),
                names: M.properties.map(from_moz),
                is_array: false
            });
        },

        AssignmentPattern: function(M) {
            return new AST_DefaultAssign({
                start: my_start_token(M),
                end: my_end_token(M),
                left: from_moz(M.left),
                operator: "=",
                right: from_moz(M.right)
            });
        },

        SpreadElement: function(M) {
            return new AST_Expansion({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.argument)
            });
        },

        RestElement: function(M) {
            return new AST_Expansion({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.argument)
            });
        },

        TemplateElement: function(M) {
            return new AST_TemplateSegment({
                start: my_start_token(M),
                end: my_end_token(M),
                value: M.value.cooked,
                raw: M.value.raw
            });
        },

        TemplateLiteral: function(M) {
            var segments = [];
            for (var i = 0; i < M.quasis.length; i++) {
                segments.push(from_moz(M.quasis[i]));
                if (M.expressions[i]) {
                    segments.push(from_moz(M.expressions[i]));
                }
            }
            return new AST_TemplateString({
                start: my_start_token(M),
                end: my_end_token(M),
                segments: segments
            });
        },

        TaggedTemplateExpression: function(M) {
            return new AST_PrefixedTemplateString({
                start: my_start_token(M),
                end: my_end_token(M),
                template_string: from_moz(M.quasi),
                prefix: from_moz(M.tag)
            });
        },

        FunctionDeclaration: function(M) {
            return new AST_Defun({
                start: my_start_token(M),
                end: my_end_token(M),
                name: M.id && from_moz_symbol(AST_SymbolDefun, M.id),
                argnames: M.params.map(M => from_moz_pattern(M, AST_SymbolFunarg)),
                is_generator: M.generator,
                async: M.async,
                body: normalize_directives(from_moz(M.body).body)
            });
        },

        FunctionExpression: function(M) {
            return from_moz_lambda(M, /*is_method=*/false);
        },

        ArrowFunctionExpression: function(M) {
            const body = M.body.type === "BlockStatement"
                ? from_moz(M.body).body
                : [make_node(AST_Return, {}, { value: from_moz(M.body) })];
            return new AST_Arrow({
                start: my_start_token(M),
                end: my_end_token(M),
                argnames: M.params.map(p => from_moz_pattern(p, AST_SymbolFunarg)),
                body,
                async: M.async,
            });
        },

        ExpressionStatement: function(M) {
            return new AST_SimpleStatement({
                start: my_start_token(M),
                end: my_end_token(M),
                body: from_moz(M.expression)
            });
        },

        TryStatement: function(M) {
            var handlers = M.handlers || [M.handler];
            if (handlers.length > 1 || M.guardedHandlers && M.guardedHandlers.length) {
                throw new Error("Multiple catch clauses are not supported.");
            }
            return new AST_Try({
                start    : my_start_token(M),
                end      : my_end_token(M),
                body     : new AST_TryBlock(from_moz(M.block)),
                bcatch   : from_moz(handlers[0]),
                bfinally : M.finalizer ? new AST_Finally(from_moz(M.finalizer)) : null
            });
        },

        Property: function(M) {
            if (M.kind == "init" && !M.method) {
                var args = {
                    start    : my_start_token(M.key || M.value),
                    end      : my_end_token(M.value),
                    key      : M.computed
                                ? from_moz(M.key)
                                : M.key.name || String(M.key.value),
                    quote    : from_moz_quote(M.key, M.computed),
                    static   : false, // always an object
                    value    : from_moz(M.value)
                };

                return new AST_ObjectKeyVal(args);
            } else {
                var value = from_moz_lambda(M.value, /*is_method=*/true);
                var args = {
                    start    : my_start_token(M.key || M.value),
                    end      : my_end_token(M.value),
                    key      : M.computed
                                ? from_moz(M.key)
                                : from_moz_symbol(AST_SymbolMethod, M.key),
                    quote    : from_moz_quote(M.key, M.computed),
                    static   : false, // always an object
                    value,
                };

                if (M.kind == "get") return new AST_ObjectGetter(args);
                if (M.kind == "set") return new AST_ObjectSetter(args);
                if (M.method) return new AST_ConciseMethod(args);
            }
        },

        MethodDefinition: function(M) {
            const is_private = M.key.type === "PrivateIdentifier";
            const key = M.computed ? from_moz(M.key) : new AST_SymbolMethod({ name: M.key.name || String(M.key.value) });

            var args = {
                start    : my_start_token(M),
                end      : my_end_token(M),
                key,
                quote    : from_moz_quote(M.key, M.computed),
                value    : from_moz_lambda(M.value, /*is_method=*/true),
                static   : M.static,
            };
            if (M.kind == "get") {
                return new (is_private ? AST_PrivateGetter : AST_ObjectGetter)(args);
            }
            if (M.kind == "set") {
                return new (is_private ? AST_PrivateSetter : AST_ObjectSetter)(args);
            }
            return new (is_private ? AST_PrivateMethod : AST_ConciseMethod)(args);
        },

        FieldDefinition: function(M) {
            let key;
            if (M.computed) {
                key = from_moz(M.key);
            } else {
                if (M.key.type !== "Identifier") throw new Error("Non-Identifier key in FieldDefinition");
                key = from_moz(M.key);
            }
            return new AST_ClassProperty({
                start    : my_start_token(M),
                end      : my_end_token(M),
                quote    : from_moz_quote(M.key, M.computed),
                key,
                value    : from_moz(M.value),
                static   : M.static,
            });
        },

        PropertyDefinition: function(M) {
            let key;
            if (M.computed) {
                key = from_moz(M.key);
            } else if (M.key.type === "PrivateIdentifier") {
                return new AST_ClassPrivateProperty({
                    start    : my_start_token(M),
                    end      : my_end_token(M),
                    key      : from_moz(M.key),
                    value    : from_moz(M.value),
                    static   : M.static,
                });
            } else {
                key = from_moz_symbol(AST_SymbolClassProperty, M.key);
            }

            return new AST_ClassProperty({
                start    : my_start_token(M),
                end      : my_end_token(M),
                quote    : from_moz_quote(M.key, M.computed),
                key,
                value    : from_moz(M.value),
                static   : M.static,
            });
        },

        PrivateIdentifier: function (M) {
            return new AST_SymbolPrivateProperty({
                start: my_start_token(M),
                end: my_end_token(M),
                name: M.name
            });
        },

        StaticBlock: function(M) {
            return new AST_ClassStaticBlock({
                start : my_start_token(M),
                end   : my_end_token(M),
                body  : M.body.map(from_moz),
            });
        },

        ArrayExpression: function(M) {
            return new AST_Array({
                start    : my_start_token(M),
                end      : my_end_token(M),
                elements : M.elements.map(function(elem) {
                    return elem === null ? new AST_Hole() : from_moz(elem);
                })
            });
        },

        ObjectExpression: function(M) {
            return new AST_Object({
                start      : my_start_token(M),
                end        : my_end_token(M),
                properties : M.properties.map(function(prop) {
                    if (prop.type === "SpreadElement") {
                        return from_moz(prop);
                    }
                    prop.type = "Property";
                    return from_moz(prop);
                })
            });
        },

        SequenceExpression: function(M) {
            return new AST_Sequence({
                start      : my_start_token(M),
                end        : my_end_token(M),
                expressions: M.expressions.map(from_moz)
            });
        },

        MemberExpression: function(M) {
            if (M.property.type === "PrivateIdentifier") {
                return new AST_DotHash({
                    start      : my_start_token(M),
                    end        : my_end_token(M),
                    property   : M.property.name,
                    expression : from_moz(M.object),
                    optional   : M.optional || false
                });
            }
            return new (M.computed ? AST_Sub : AST_Dot)({
                start      : my_start_token(M),
                end        : my_end_token(M),
                property   : M.computed ? from_moz(M.property) : M.property.name,
                expression : from_moz(M.object),
                optional   : M.optional || false
            });
        },

        ChainExpression: function(M) {
            return new AST_Chain({
                start      : my_start_token(M),
                end        : my_end_token(M),
                expression : from_moz(M.expression)
            });
        },

        SwitchCase: function(M) {
            return new (M.test ? AST_Case : AST_Default)({
                start      : my_start_token(M),
                end        : my_end_token(M),
                expression : from_moz(M.test),
                body       : M.consequent.map(from_moz)
            });
        },

        VariableDeclaration: function(M) {
            let decl_type;
            let defs_type = AST_VarDef;
            let sym_type;
            let await_using = false;
            if (M.kind === "const") {
                decl_type = AST_Const;
                sym_type = AST_SymbolConst;
            } else if (M.kind === "let") {
                decl_type = AST_Let;
                sym_type = AST_SymbolLet;
            } else if (M.kind === "using") {
                decl_type = AST_Using;
                defs_type = AST_UsingDef;
                sym_type = AST_SymbolUsing;
            } else if (M.kind === "await using") {
                decl_type = AST_Using;
                defs_type = AST_UsingDef;
                sym_type = AST_SymbolUsing;
                await_using = true;
            } else {
                decl_type = AST_Var;
                sym_type = AST_SymbolVar;
            }
            const definitions = M.declarations.map(M => {
                return new defs_type({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    name: from_moz_pattern(M.id, sym_type),
                    value: from_moz(M.init),
                });
            });
            return new decl_type({
                start       : my_start_token(M),
                end         : my_end_token(M),
                definitions : definitions,
                await       : await_using,
            });
        },

        ImportDeclaration: function(M) {
            var imported_name = null;
            var imported_names = null;
            M.specifiers.forEach(function (specifier) {
                if (specifier.type === "ImportSpecifier" || specifier.type === "ImportNamespaceSpecifier") {
                    if (!imported_names) { imported_names = []; }
                    imported_names.push(from_moz(specifier));
                } else if (specifier.type === "ImportDefaultSpecifier") {
                    imported_name = from_moz(specifier);
                }
            });
            return new AST_Import({
                start       : my_start_token(M),
                end         : my_end_token(M),
                imported_name: imported_name,
                imported_names : imported_names,
                module_name : from_moz(M.source),
                attributes: import_attributes_from_moz(M.attributes || M.assertions)
            });
        },

        ImportSpecifier: function(M) {
            return new AST_NameMapping({
                start: my_start_token(M),
                end: my_end_token(M),
                foreign_name: from_moz_symbol(AST_SymbolImportForeign, M.imported, M.imported.type === "Literal"),
                name: from_moz_symbol(AST_SymbolImport, M.local)
            });
        },

        ImportDefaultSpecifier: function(M) {
            return from_moz_symbol(AST_SymbolImport, M.local);
        },

        ImportNamespaceSpecifier: function(M) {
            return new AST_NameMapping({
                start: my_start_token(M),
                end: my_end_token(M),
                foreign_name: new AST_SymbolImportForeign({ name: "*" }),
                name: from_moz_symbol(AST_SymbolImport, M.local)
            });
        },

        ImportExpression: function(M) {
            const args = [from_moz(M.source)];
            if (M.options) {
                args.push(from_moz(M.options));
            }
            return new AST_Call({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz({
                    type: "Identifier",
                    name: "import"
                }),
                optional: false,
                args
            });
        },

        ExportAllDeclaration: function(M) {
            var foreign_name = M.exported == null ?
                new AST_SymbolExportForeign({ name: "*" }) :
                from_moz_symbol(AST_SymbolExportForeign, M.exported, M.exported.type === "Literal");
            return new AST_Export({
                start: my_start_token(M),
                end: my_end_token(M),
                exported_names: [
                    new AST_NameMapping({
                        start: my_start_token(M),
                        end: my_end_token(M),
                        name: new AST_SymbolExport({ name: "*" }),
                        foreign_name: foreign_name
                    })
                ],
                module_name: from_moz(M.source),
                attributes: import_attributes_from_moz(M.attributes || M.assertions)
            });
        },

        ExportNamedDeclaration: function(M) {
            if (M.declaration) {
                // export const, export function, ...
                return new AST_Export({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    exported_definition: from_moz(M.declaration),
                    exported_names: null,
                    module_name: null,
                    attributes: null,
                });
            } else {
                return new AST_Export({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    exported_definition: null,
                    exported_names: M.specifiers && M.specifiers.length ? M.specifiers.map(from_moz) : [],
                    module_name: from_moz(M.source),
                    attributes: import_attributes_from_moz(M.attributes || M.assertions),
                });
            }
        },

        ExportDefaultDeclaration: function(M) {
            return new AST_Export({
                start: my_start_token(M),
                end: my_end_token(M),
                exported_value: from_moz(M.declaration),
                is_default: true
            });
        },

        ExportSpecifier: function(M) {
            return new AST_NameMapping({
                start: my_start_token(M),
                end: my_end_token(M),
                foreign_name: from_moz_symbol(AST_SymbolExportForeign, M.exported, M.exported.type === "Literal"),
                name: from_moz_symbol(AST_SymbolExport, M.local, M.local.type === "Literal"),
            });
        },

        Literal: function(M) {
            var val = M.value, args = {
                start  : my_start_token(M),
                end    : my_end_token(M)
            };
            var rx = M.regex;
            if (rx && rx.pattern) {
                // RegExpLiteral as per ESTree AST spec
                args.value = {
                    source: rx.pattern,
                    flags: rx.flags
                };
                return new AST_RegExp(args);
            } else if (rx) {
                // support legacy RegExp
                const rx_source = M.raw || val;
                const match = rx_source.match(/^\/(.*)\/(\w*)$/);
                if (!match) throw new Error("Invalid regex source " + rx_source);
                const [_, source, flags] = match;
                args.value = { source, flags };
                return new AST_RegExp(args);
            }
            const bi = typeof M.value === "bigint" ? M.value.toString() : M.bigint;
            if (typeof bi === "string") {
                args.value = bi;
                args.raw = M.raw;
                return new AST_BigInt(args);
            }
            if (val === null) return new AST_Null(args);
            switch (typeof val) {
              case "string":
                args.quote = "\"";
                args.value = val;
                return new AST_String(args);
              case "number":
                args.value = val;
                args.raw = M.raw || val.toString();
                return new AST_Number(args);
              case "boolean":
                return new (val ? AST_True : AST_False)(args);
            }
        },

        MetaProperty: function(M) {
            if (M.meta.name === "new" && M.property.name === "target") {
                return new AST_NewTarget({
                    start: my_start_token(M),
                    end: my_end_token(M)
                });
            } else if (M.meta.name === "import" && M.property.name === "meta") {
                return new AST_ImportMeta({
                    start: my_start_token(M),
                    end: my_end_token(M)
                });
            }
        },

        Identifier: function(M) {
            return new AST_SymbolRef({
                start : my_start_token(M),
                end   : my_end_token(M),
                name  : M.name
            });
        },

        EmptyStatement: function(M) {
            return new AST_EmptyStatement({
                start: my_start_token(M),
                end: my_end_token(M)
            });
        },

        BlockStatement: function(M) {
            return new AST_BlockStatement({
                start: my_start_token(M),
                end: my_end_token(M),
                body: M.body.map(from_moz)
            });
        },

        IfStatement: function(M) {
            return new AST_If({
                start: my_start_token(M),
                end: my_end_token(M),
                condition: from_moz(M.test),
                body: from_moz(M.consequent),
                alternative: from_moz(M.alternate)
            });
        },

        LabeledStatement: function(M) {
            try {
                const label = from_moz_symbol(AST_Label, M.label);
                FROM_MOZ_LABELS.push(label);

                const stat = new AST_LabeledStatement({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    label,
                    body: from_moz(M.body)
                });

                return stat;
            } finally {
                FROM_MOZ_LABELS.pop();
            }
        },

        BreakStatement: function(M) {
            return new AST_Break({
                start: my_start_token(M),
                end: my_end_token(M),
                label: from_moz_label_ref(M.label),
            });
        },

        ContinueStatement: function(M) {
            return new AST_Continue({
                start: my_start_token(M),
                end: my_end_token(M),
                label: from_moz_label_ref(M.label),
            });
        },

        WithStatement: function(M) {
            return new AST_With({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.object),
                body: from_moz(M.body)
            });
        },

        SwitchStatement: function(M) {
            return new AST_Switch({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.discriminant),
                body: M.cases.map(from_moz)
            });
        },

        ReturnStatement: function(M) {
            return new AST_Return({
                start: my_start_token(M),
                end: my_end_token(M),
                value: from_moz(M.argument)
            });
        },

        ThrowStatement: function(M) {
            return new AST_Throw({
                start: my_start_token(M),
                end: my_end_token(M),
                value: from_moz(M.argument)
            });
        },

        WhileStatement: function(M) {
            return new AST_While({
                start: my_start_token(M),
                end: my_end_token(M),
                condition: from_moz(M.test),
                body: from_moz(M.body)
            });
        },

        DoWhileStatement: function(M) {
            return new AST_Do({
                start: my_start_token(M),
                end: my_end_token(M),
                condition: from_moz(M.test),
                body: from_moz(M.body)
            });
        },

        ForStatement: function(M) {
            return new AST_For({
                start: my_start_token(M),
                end: my_end_token(M),
                init: from_moz(M.init),
                condition: from_moz(M.test),
                step: from_moz(M.update),
                body: from_moz(M.body)
            });
        },

        ForInStatement: function(M) {
            return new AST_ForIn({
                start: my_start_token(M),
                end: my_end_token(M),
                init: from_moz(M.left),
                object: from_moz(M.right),
                body: from_moz(M.body)
            });
        },

        ForOfStatement: function(M) {
            return new AST_ForOf({
                start: my_start_token(M),
                end: my_end_token(M),
                init: from_moz(M.left),
                object: from_moz(M.right),
                body: from_moz(M.body),
                await: M.await
            });
        },

        AwaitExpression: function(M) {
            return new AST_Await({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.argument)
            });
        },

        YieldExpression: function(M) {
            return new AST_Yield({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.argument),
                is_star: M.delegate
            });
        },

        DebuggerStatement: function(M) {
            return new AST_Debugger({
                start: my_start_token(M),
                end: my_end_token(M)
            });
        },

        CatchClause: function(M) {
            return new AST_Catch({
                start: my_start_token(M),
                end: my_end_token(M),
                argname: M.param ? from_moz_pattern(M.param, AST_SymbolCatch) : null,
                body: from_moz(M.body).body
            });
        },

        ThisExpression: function(M) {
            return new AST_This({
                start: my_start_token(M),
                name: "this",
                end: my_end_token(M)
            });
        },

        Super: function(M) {
            return new AST_Super({
                start: my_start_token(M),
                end: my_end_token(M),
                name: "super",
            });
        },

        BinaryExpression: function(M) {
            if (M.left.type === "PrivateIdentifier") {
                return new AST_PrivateIn({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    key: new AST_SymbolPrivateProperty({
                        start: my_start_token(M.left),
                        end: my_end_token(M.left),
                        name: M.left.name
                    }),
                    value: from_moz(M.right),
                });
            }
            return new AST_Binary({
                start: my_start_token(M),
                end: my_end_token(M),
                operator: M.operator,
                left: from_moz(M.left),
                right: from_moz(M.right)
            });
        },

        LogicalExpression: function(M) {
            return new AST_Binary({
                start: my_start_token(M),
                end: my_end_token(M),
                operator: M.operator,
                left: from_moz(M.left),
                right: from_moz(M.right)
            });
        },

        AssignmentExpression: function(M) {
            return new AST_Assign({
                start: my_start_token(M),
                end: my_end_token(M),
                operator: M.operator,
                logical: M.operator === "??=" || M.operator === "&&=" || M.operator === "||=",
                left: from_moz(M.left),
                right: from_moz(M.right)
            });
        },

        ConditionalExpression: function(M) {
            return new AST_Conditional({
                start: my_start_token(M),
                end: my_end_token(M),
                condition: from_moz(M.test),
                consequent: from_moz(M.consequent),
                alternative: from_moz(M.alternate)
            });
        },

        NewExpression: function(M) {
            return new AST_New({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.callee),
                args: M.arguments.map(from_moz)
            });
        },

        CallExpression: function(M) {
            return new AST_Call({
                start: my_start_token(M),
                end: my_end_token(M),
                expression: from_moz(M.callee),
                optional: M.optional,
                args: M.arguments.map(from_moz)
            });
        }
    };

    MOZ_TO_ME.UpdateExpression =
    MOZ_TO_ME.UnaryExpression = function To_Moz_Unary(M) {
        var prefix = "prefix" in M ? M.prefix
            : M.type == "UnaryExpression" ? true : false;
        return new (prefix ? AST_UnaryPrefix : AST_UnaryPostfix)({
            start      : my_start_token(M),
            end        : my_end_token(M),
            operator   : M.operator,
            expression : from_moz(M.argument)
        });
    };

    MOZ_TO_ME.ClassDeclaration =
    MOZ_TO_ME.ClassExpression = function From_Moz_Class(M) {
        return new (M.type === "ClassDeclaration" ? AST_DefClass : AST_ClassExpression)({
            start    : my_start_token(M),
            end      : my_end_token(M),
            name     : M.id && from_moz_symbol(M.type === "ClassDeclaration" ? AST_SymbolDefClass : AST_SymbolClass, M.id),
            extends  : from_moz(M.superClass),
            properties: M.body.body.map(from_moz)
        });
    };

    def_to_moz(AST_EmptyStatement, function To_Moz_EmptyStatement() {
        return {
            type: "EmptyStatement"
        };
    });
    def_to_moz(AST_BlockStatement, function To_Moz_BlockStatement(M) {
        return {
            type: "BlockStatement",
            body: M.body.map(to_moz)
        };
    });
    def_to_moz(AST_If, function To_Moz_IfStatement(M) {
        return {
            type: "IfStatement",
            test: to_moz(M.condition),
            consequent: to_moz(M.body),
            alternate: to_moz(M.alternative)
        };
    });
    def_to_moz(AST_LabeledStatement, function To_Moz_LabeledStatement(M) {
        return {
            type: "LabeledStatement",
            label: to_moz(M.label),
            body: to_moz(M.body)
        };
    });
    def_to_moz(AST_Break, function To_Moz_BreakStatement(M) {
        return {
            type: "BreakStatement",
            label: to_moz(M.label)
        };
    });
    def_to_moz(AST_Continue, function To_Moz_ContinueStatement(M) {
        return {
            type: "ContinueStatement",
            label: to_moz(M.label)
        };
    });
    def_to_moz(AST_With, function To_Moz_WithStatement(M) {
        return {
            type: "WithStatement",
            object: to_moz(M.expression),
            body: to_moz(M.body)
        };
    });
    def_to_moz(AST_Switch, function To_Moz_SwitchStatement(M) {
        return {
            type: "SwitchStatement",
            discriminant: to_moz(M.expression),
            cases: M.body.map(to_moz)
        };
    });
    def_to_moz(AST_Return, function To_Moz_ReturnStatement(M) {
        return {
            type: "ReturnStatement",
            argument: to_moz(M.value)
        };
    });
    def_to_moz(AST_Throw, function To_Moz_ThrowStatement(M) {
        return {
            type: "ThrowStatement",
            argument: to_moz(M.value)
        };
    });
    def_to_moz(AST_While, function To_Moz_WhileStatement(M) {
        return {
            type: "WhileStatement",
            test: to_moz(M.condition),
            body: to_moz(M.body)
        };
    });
    def_to_moz(AST_Do, function To_Moz_DoWhileStatement(M) {
        return {
            type: "DoWhileStatement",
            test: to_moz(M.condition),
            body: to_moz(M.body)
        };
    });
    def_to_moz(AST_For, function To_Moz_ForStatement(M) {
        return {
            type: "ForStatement",
            init: to_moz(M.init),
            test: to_moz(M.condition),
            update: to_moz(M.step),
            body: to_moz(M.body)
        };
    });
    def_to_moz(AST_ForIn, function To_Moz_ForInStatement(M) {
        return {
            type: "ForInStatement",
            left: to_moz(M.init),
            right: to_moz(M.object),
            body: to_moz(M.body)
        };
    });
    def_to_moz(AST_ForOf, function To_Moz_ForOfStatement(M) {
        return {
            type: "ForOfStatement",
            left: to_moz(M.init),
            right: to_moz(M.object),
            body: to_moz(M.body),
            await: M.await
        };
    });
    def_to_moz(AST_Await, function To_Moz_AwaitExpression(M) {
        return {
            type: "AwaitExpression",
            argument: to_moz(M.expression)
        };
    });
    def_to_moz(AST_Yield, function To_Moz_YieldExpression(M) {
        return {
            type: "YieldExpression",
            argument: to_moz(M.expression),
            delegate: M.is_star
        };
    });
    def_to_moz(AST_Debugger, function To_Moz_DebuggerStatement() {
        return {
            type: "DebuggerStatement"
        };
    });
    def_to_moz(AST_VarDefLike, function To_Moz_VariableDeclarator(M) {
        return {
            type: "VariableDeclarator",
            id: to_moz(M.name),
            init: to_moz(M.value)
        };
    });

    def_to_moz(AST_This, function To_Moz_ThisExpression() {
        return {
            type: "ThisExpression"
        };
    });
    def_to_moz(AST_Super, function To_Moz_Super() {
        return {
            type: "Super"
        };
    });
    def_to_moz(AST_Conditional, function To_Moz_ConditionalExpression(M) {
        return {
            type: "ConditionalExpression",
            test: to_moz(M.condition),
            consequent: to_moz(M.consequent),
            alternate: to_moz(M.alternative)
        };
    });
    def_to_moz(AST_New, function To_Moz_NewExpression(M) {
        return {
            type: "NewExpression",
            callee: to_moz(M.expression),
            arguments: M.args.map(to_moz)
        };
    });
    def_to_moz(AST_Call, function To_Moz_CallExpression(M) {
        if (M.expression instanceof AST_SymbolRef && M.expression.name === "import") {
            const [source, options] = M.args.map(to_moz);
            return {
                type: "ImportExpression",
                source,
                options: options || null
            };
        }

        return {
            type: "CallExpression",
            callee: to_moz(M.expression),
            optional: M.optional,
            arguments: M.args.map(to_moz)
        };
    });

    def_to_moz(AST_Toplevel, function To_Moz_Program(M) {
        return to_moz_scope("Program", M);
    });

    def_to_moz(AST_Expansion, function To_Moz_Spread(M) {
        return {
            type: to_moz_in_destructuring() ? "RestElement" : "SpreadElement",
            argument: to_moz(M.expression)
        };
    });

    def_to_moz(AST_PrefixedTemplateString, function To_Moz_TaggedTemplateExpression(M) {
        return {
            type: "TaggedTemplateExpression",
            tag: to_moz(M.prefix),
            quasi: to_moz(M.template_string)
        };
    });

    def_to_moz(AST_TemplateString, function To_Moz_TemplateLiteral(M) {
        var quasis = [];
        var expressions = [];
        for (var i = 0; i < M.segments.length; i++) {
            if (i % 2 !== 0) {
                expressions.push(to_moz(M.segments[i]));
            } else {
                quasis.push({
                    type: "TemplateElement",
                    value: {
                        raw: M.segments[i].raw,
                        cooked: M.segments[i].value
                    },
                    tail: i === M.segments.length - 1
                });
            }
        }
        return {
            type: "TemplateLiteral",
            quasis: quasis,
            expressions: expressions
        };
    });

    def_to_moz(AST_Defun, function To_Moz_FunctionDeclaration(M) {
        return {
            type: "FunctionDeclaration",
            id: to_moz(M.name),
            params: M.argnames.map(to_moz_pattern),
            generator: M.is_generator,
            async: M.async,
            body: to_moz_scope("BlockStatement", M)
        };
    });

    def_to_moz(AST_Function, function To_Moz_FunctionExpression(M) {
        return {
            type: "FunctionExpression",
            id: to_moz(M.name),
            params: M.argnames.map(to_moz_pattern),
            generator: M.is_generator || false,
            async: M.async || false,
            body: to_moz_scope("BlockStatement", M)
        };
    });

    def_to_moz(AST_Arrow, function To_Moz_ArrowFunctionExpression(M) {
        var body = M.body.length === 1 && M.body[0] instanceof AST_Return && M.body[0].value
            ? to_moz(M.body[0].value)
            : {
                type: "BlockStatement",
                body: M.body.map(to_moz)
            };
        return {
            type: "ArrowFunctionExpression",
            params: M.argnames.map(to_moz_pattern),
            async: M.async,
            body: body,
        };
    });

    def_to_moz(AST_Destructuring, function To_Moz_ObjectPattern(M) {
        if (M.is_array) {
            return {
                type: "ArrayPattern",
                elements: M.names.map(
                    M => M instanceof AST_Hole ? null : to_moz_pattern(M)
                ),
            };
        }
        return {
            type: "ObjectPattern",
            properties: M.names.map(M => {
                if (M instanceof AST_ObjectKeyVal) {
                    var computed = M.computed_key();
                    const [shorthand, key] = to_moz_property_key(M.key, computed, M.quote, M.value);

                    return {
                        type: "Property",
                        computed,
                        kind: "init",
                        key: key,
                        method: false,
                        shorthand,
                        value: to_moz_pattern(M.value)
                    };
                } else {
                    return to_moz_pattern(M);
                }
            }),
        };
    });

    def_to_moz(AST_DefaultAssign, function To_Moz_AssignmentExpression(M) {
        return {
            type: "AssignmentPattern",
            left: to_moz_pattern(M.left),
            right: to_moz(M.right),
        };
    });

    def_to_moz(AST_Directive, function To_Moz_Directive(M) {
        return {
            type: "ExpressionStatement",
            expression: {
                type: "Literal",
                value: M.value,
                raw: M.print_to_string()
            },
            directive: M.value
        };
    });

    def_to_moz(AST_SimpleStatement, function To_Moz_ExpressionStatement(M) {
        return {
            type: "ExpressionStatement",
            expression: to_moz(M.body)
        };
    });

    def_to_moz(AST_SwitchBranch, function To_Moz_SwitchCase(M) {
        return {
            type: "SwitchCase",
            test: to_moz(M.expression),
            consequent: M.body.map(to_moz)
        };
    });

    def_to_moz(AST_Try, function To_Moz_TryStatement(M) {
        return {
            type: "TryStatement",
            block: to_moz_block(M.body),
            handler: to_moz(M.bcatch),
            guardedHandlers: [],
            finalizer: to_moz(M.bfinally)
        };
    });

    def_to_moz(AST_Catch, function To_Moz_CatchClause(M) {
        return {
            type: "CatchClause",
            param: M.argname != null ? to_moz_pattern(M.argname) : null,
            body: to_moz_block(M)
        };
    });

    def_to_moz(AST_DefinitionsLike, function To_Moz_VariableDeclaration(M) {
        return {
            type: "VariableDeclaration",
            kind:
                M instanceof AST_Const ? "const" :
                M instanceof AST_Let ? "let" :
                M instanceof AST_Using ? (M.await ? "await using" : "using") :
                "var",
            declarations: M.definitions.map(to_moz)
        };
    });

    function import_attributes_to_moz(attribute) {
        const import_attributes = [];
        if (attribute) {
            for (const { key, value } of attribute.properties) {
                const key_moz = is_basic_identifier_string(key)
                    ? { type: "Identifier", name: key }
                    : { type: "Literal", value: key, raw: JSON.stringify(key) };
                import_attributes.push({
                    type: "ImportAttribute",
                    key: key_moz,
                    value: to_moz(value)
                });
            }
        }
        return import_attributes;
    }

    def_to_moz(AST_Export, function To_Moz_ExportDeclaration(M) {
        if (M.exported_names) {
            var first_exported = M.exported_names[0];
            if (first_exported && first_exported.name.name === "*" && !first_exported.name.quote) {
                var foreign_name = first_exported.foreign_name;
                var exported = foreign_name.name === "*" && !foreign_name.quote
                    ? null
                    : to_moz(foreign_name);
                return {
                    type: "ExportAllDeclaration",
                    source: to_moz(M.module_name),
                    exported: exported,
                    attributes: import_attributes_to_moz(M.attributes)
                };
            }
            return {
                type: "ExportNamedDeclaration",
                specifiers: M.exported_names.map(function (name_mapping) {
                    return {
                        type: "ExportSpecifier",
                        exported: to_moz(name_mapping.foreign_name),
                        local: to_moz(name_mapping.name)
                    };
                }),
                declaration: to_moz(M.exported_definition),
                source: to_moz(M.module_name),
                attributes: import_attributes_to_moz(M.attributes)
            };
        }

        if (M.is_default) {
            return {
                type: "ExportDefaultDeclaration",
                declaration: to_moz(M.exported_value || M.exported_definition),
            };
        } else {
            return {
                type: "ExportNamedDeclaration",
                declaration: to_moz(M.exported_value || M.exported_definition),
                specifiers: [],
                source: null,
            };
        }
    });

    def_to_moz(AST_Import, function To_Moz_ImportDeclaration(M) {
        var specifiers = [];
        if (M.imported_name) {
            specifiers.push({
                type: "ImportDefaultSpecifier",
                local: to_moz(M.imported_name)
            });
        }
        if (M.imported_names) {
            var first_imported_foreign_name = M.imported_names[0].foreign_name;
            if (first_imported_foreign_name.name === "*" && !first_imported_foreign_name.quote) {
                specifiers.push({
                    type: "ImportNamespaceSpecifier",
                    local: to_moz(M.imported_names[0].name)
                });
            } else {
                M.imported_names.forEach(function(name_mapping) {
                    specifiers.push({
                        type: "ImportSpecifier",
                        local: to_moz(name_mapping.name),
                        imported: to_moz(name_mapping.foreign_name)
                    });
                });
            }
        }
        return {
            type: "ImportDeclaration",
            specifiers: specifiers,
            source: to_moz(M.module_name),
            attributes: import_attributes_to_moz(M.attributes)
        };
    });

    def_to_moz(AST_ImportMeta, function To_Moz_MetaProperty() {
        return {
            type: "MetaProperty",
            meta: {
                type: "Identifier",
                name: "import"
            },
            property: {
                type: "Identifier",
                name: "meta"
            }
        };
    });

    def_to_moz(AST_Sequence, function To_Moz_SequenceExpression(M) {
        return {
            type: "SequenceExpression",
            expressions: M.expressions.map(to_moz)
        };
    });

    def_to_moz(AST_DotHash, function To_Moz_PrivateMemberExpression(M) {
        return {
            type: "MemberExpression",
            object: to_moz(M.expression),
            computed: false,
            property: {
                type: "PrivateIdentifier",
                name: M.property
            },
            optional: M.optional
        };
    });

    def_to_moz(AST_PropAccess, function To_Moz_MemberExpression(M) {
        var isComputed = M instanceof AST_Sub;
        return {
            type: "MemberExpression",
            object: to_moz(M.expression),
            computed: isComputed,
            property: isComputed ? to_moz(M.property) : {type: "Identifier", name: M.property},
            optional: M.optional
        };
    });

    def_to_moz(AST_Chain, function To_Moz_ChainExpression(M) {
        return {
            type: "ChainExpression",
            expression: to_moz(M.expression)
        };
    });

    def_to_moz(AST_Unary, function To_Moz_Unary(M) {
        return {
            type: M.operator == "++" || M.operator == "--" ? "UpdateExpression" : "UnaryExpression",
            operator: M.operator,
            prefix: M instanceof AST_UnaryPrefix,
            argument: to_moz(M.expression)
        };
    });

    def_to_moz(AST_Binary, function To_Moz_BinaryExpression(M) {
        if (M.operator == "=" && to_moz_in_destructuring()) {
            return {
                type: "AssignmentPattern",
                left: to_moz(M.left),
                right: to_moz(M.right)
            };
        }

        const type = M.operator == "&&" || M.operator == "||" || M.operator === "??"
            ? "LogicalExpression"
            : "BinaryExpression";

        return {
            type,
            left: to_moz(M.left),
            operator: M.operator,
            right: to_moz(M.right)
        };
    });

    def_to_moz(AST_Assign, function To_Moz_AssignmentExpression(M) {
        return {
            type: "AssignmentExpression",
            operator: M.operator,
            left: to_moz(M.left),
            right: to_moz(M.right)
        };
    });

    def_to_moz(AST_PrivateIn, function To_Moz_BinaryExpression_PrivateIn(M) {
        return {
            type: "BinaryExpression",
            left: { type: "PrivateIdentifier", name: M.key.name },
            operator: "in",
            right: to_moz(M.value),
        };
    });

    def_to_moz(AST_Array, function To_Moz_ArrayExpression(M) {
        return {
            type: "ArrayExpression",
            elements: M.elements.map(to_moz)
        };
    });

    def_to_moz(AST_Object, function To_Moz_ObjectExpression(M) {
        return {
            type: "ObjectExpression",
            properties: M.properties.map(to_moz)
        };
    });

    def_to_moz(AST_ObjectProperty, function To_Moz_Property(M, parent) {
        var computed = M.computed_key();
        const [shorthand, key] = to_moz_property_key(M.key, computed, M.quote, M.value);

        var kind;
        if (M instanceof AST_ObjectGetter) {
            kind = "get";
        } else
        if (M instanceof AST_ObjectSetter) {
            kind = "set";
        }
        if (M instanceof AST_PrivateGetter || M instanceof AST_PrivateSetter) {
            const kind = M instanceof AST_PrivateGetter ? "get" : "set";
            return {
                type: "MethodDefinition",
                computed: false,
                kind: kind,
                static: M.static,
                key: {
                    type: "PrivateIdentifier",
                    name: M.key.name
                },
                value: to_moz(M.value)
            };
        }
        if (M instanceof AST_ClassPrivateProperty) {
            return {
                type: "PropertyDefinition",
                key: {
                    type: "PrivateIdentifier",
                    name: M.key.name
                },
                value: to_moz(M.value),
                computed: false,
                static: M.static
            };
        }
        if (M instanceof AST_ClassProperty) {
            return {
                type: "PropertyDefinition",
                key,
                value: to_moz(M.value),
                computed,
                static: M.static
            };
        }
        if (parent instanceof AST_Class) {
            return {
                type: "MethodDefinition",
                computed: computed,
                kind: kind,
                static: M.static,
                key: to_moz(M.key),
                value: to_moz(M.value)
            };
        }
        return {
            type: "Property",
            computed: computed,
            method: false,
            shorthand,
            kind: kind,
            key: key,
            value: to_moz(M.value)
        };
    });

    def_to_moz(AST_ObjectKeyVal, function To_Moz_Property(M) {
        var computed = M.computed_key();
        const [shorthand, key] = to_moz_property_key(M.key, computed, M.quote, M.value);

        return {
            type: "Property",
            computed: computed,
            shorthand: shorthand,
            method: false,
            kind: "init",
            key: key,
            value: to_moz(M.value)
        };
    });

    def_to_moz(AST_ConciseMethod, function To_Moz_MethodDefinition(M, parent) {
        const computed = M.computed_key();
        const [_always_false, key] = to_moz_property_key(M.key, computed, M.quote, M.value);

        if (parent instanceof AST_Object) {
            return {
                type: "Property",
                kind: "init",
                computed,
                method: true,
                shorthand: false,
                key,
                value: to_moz(M.value),
            };
        }

        return {
            type: "MethodDefinition",
            kind: !computed && M.key.name === "constructor" ? "constructor" : "method",
            computed,
            key,
            value: to_moz(M.value),
            static: M.static,
        };
    });

    def_to_moz(AST_PrivateMethod, function To_Moz_MethodDefinition(M) {
        return {
            type: "MethodDefinition",
            kind: "method",
            key: { type: "PrivateIdentifier", name: M.key.name },
            value: to_moz(M.value),
            computed: false,
            static: M.static,
        };
    });

    def_to_moz(AST_Class, function To_Moz_Class(M) {
        var type = M instanceof AST_ClassExpression ? "ClassExpression" : "ClassDeclaration";
        return {
            type: type,
            superClass: to_moz(M.extends),
            id: M.name ? to_moz(M.name) : null,
            body: {
                type: "ClassBody",
                body: M.properties.map(to_moz)
            }
        };
    });

    def_to_moz(AST_ClassStaticBlock, function To_Moz_StaticBlock(M) {
        return {
            type: "StaticBlock",
            body: M.body.map(to_moz),
        };
    });

    def_to_moz(AST_NewTarget, function To_Moz_MetaProperty() {
        return {
            type: "MetaProperty",
            meta: {
                type: "Identifier",
                name: "new"
            },
            property: {
                type: "Identifier",
                name: "target"
            }
        };
    });

    def_to_moz(AST_Symbol, function To_Moz_Identifier(M, parent) {
        if (
            (M instanceof AST_SymbolMethod && parent.quote) ||
            ((
                M instanceof AST_SymbolImportForeign ||
                M instanceof AST_SymbolExportForeign ||
                M instanceof AST_SymbolExport
                ) && M.quote)
         ) {
            return {
                type: "Literal",
                value: M.name
            };
        }
        var def = M.definition();
        return {
            type: "Identifier",
            name: def ? def.mangled_name || def.name : M.name
        };
    });

    def_to_moz(AST_RegExp, function To_Moz_RegExpLiteral(M) {
        const pattern = M.value.source;
        const flags = M.value.flags;
        return {
            type: "Literal",
            value: null,
            raw: M.print_to_string(),
            regex: { pattern, flags }
        };
    });

    def_to_moz(AST_Constant, function To_Moz_Literal(M) {
        var value = M.value;
        return {
            type: "Literal",
            value: value,
            raw: M.raw || M.print_to_string()
        };
    });

    def_to_moz(AST_Atom, function To_Moz_Atom(M) {
        return {
            type: "Identifier",
            name: String(M.value)
        };
    });

    def_to_moz(AST_BigInt, M => ({
        type: "Literal",
        // value cannot be represented natively
        // see: https://github.com/estree/estree/blob/master/es2020.md#bigintliteral
        value: null,
        // `M.value` is a string that may be a hex number representation.
        // but "bigint" property should have only decimal digits
        bigint: typeof BigInt === "function" ? BigInt(M.value).toString() : M.value,
        raw: M.raw,
    }));

    AST_Boolean.DEFMETHOD("to_mozilla_ast", AST_Constant.prototype.to_mozilla_ast);
    AST_Null.DEFMETHOD("to_mozilla_ast", AST_Constant.prototype.to_mozilla_ast);
    AST_Hole.DEFMETHOD("to_mozilla_ast", function To_Moz_ArrayHole() { return null; });

    AST_Block.DEFMETHOD("to_mozilla_ast", AST_BlockStatement.prototype.to_mozilla_ast);
    AST_Lambda.DEFMETHOD("to_mozilla_ast", AST_Function.prototype.to_mozilla_ast);

    /* -----[ tools ]----- */

    function my_start_token(moznode) {
        var loc = moznode.loc, start = loc && loc.start;
        var range = moznode.range;
        return new AST_Token(
            "",
            "",
            start && start.line || 0,
            start && start.column || 0,
            range ? range [0] : moznode.start,
            false,
            [],
            [],
            loc && loc.source,
        );
    }

    function my_end_token(moznode) {
        var loc = moznode.loc, end = loc && loc.end;
        var range = moznode.range;
        return new AST_Token(
            "",
            "",
            end && end.line || 0,
            end && end.column || 0,
            range ? range [0] : moznode.end,
            false,
            [],
            [],
            loc && loc.source,
        );
    }

    var FROM_MOZ_LABELS = null;

    function from_moz(node) {
        if (node == null) return null;
        return MOZ_TO_ME[node.type](node);
    }

    function from_moz_quote(moz_key, computed) {
        if (!computed && moz_key.type === "Literal" && typeof moz_key.value === "string") {
            return '"';
        } else {
            return "";
        }
    }

    function from_moz_symbol(symbol_type, M, has_quote) {
        return new symbol_type({
            start: my_start_token(M),
            quote: has_quote ? '"' : undefined,
            name: M.type === "Identifier" ? M.name : String(M.value),
            end: my_end_token(M),
        });
    }

    function from_moz_lambda(M, is_method) {
        return new (is_method ? AST_Accessor : AST_Function)({
            start: my_start_token(M),
            end: my_end_token(M),
            name: M.id && from_moz_symbol(is_method ? AST_SymbolMethod : AST_SymbolLambda, M.id),
            argnames: M.params.map(M => from_moz_pattern(M, AST_SymbolFunarg)),
            is_generator: M.generator,
            async: M.async,
            body: normalize_directives(from_moz(M.body).body)
        });
    }

    function from_moz_pattern(M, sym_type) {
        switch (M.type) {
            case "ObjectPattern":
                return new AST_Destructuring({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    names: M.properties.map(p => from_moz_pattern(p, sym_type)),
                    is_array: false
                });

            case "Property":
                var key = M.key;
                var args = {
                    start    : my_start_token(key || M.value),
                    end      : my_end_token(M.value),
                    key      : key.type == "Identifier" ? key.name : String(key.value),
                    quote    : !M.computed && key.type === "Literal" && typeof key.value === "string"
                                ? '"'
                                : "",
                    value    : from_moz_pattern(M.value, sym_type)
                };
                if (M.computed) {
                    args.key = from_moz(M.key);
                }
                return new AST_ObjectKeyVal(args);

            case "ArrayPattern":
                return new AST_Destructuring({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    names: M.elements.map(function(elm) {
                        if (elm === null) {
                            return new AST_Hole();
                        }
                        return from_moz_pattern(elm, sym_type);
                    }),
                    is_array: true
                });

            case "SpreadElement":
            case "RestElement":
                return new AST_Expansion({
                    start: my_start_token(M),
                    end: my_end_token(M),
                    expression: from_moz_pattern(M.argument, sym_type),
                });

            case "AssignmentPattern":
                return new AST_DefaultAssign({
                    start : my_start_token(M),
                    end   : my_end_token(M),
                    left  : from_moz_pattern(M.left, sym_type),
                    operator: "=",
                    right : from_moz(M.right),
                });

            case "Identifier":
                return new sym_type({
                    start : my_start_token(M),
                    end   : my_end_token(M),
                    name  : M.name,
                });

            default:
                throw new Error("Invalid node type for destructuring: " + M.type);
        }
    }

    function from_moz_label_ref(m_label) {
        if (!m_label) return null;

        const label = from_moz_symbol(AST_LabelRef, m_label);

        let i = FROM_MOZ_LABELS.length;
        while (i--) {
            const label_origin = FROM_MOZ_LABELS[i];

            if (label.name === label_origin.name) {
                label.thedef = label_origin;
                break;
            }
        }

        return label;
    }

    AST_Node.from_mozilla_ast = function(node) {
        var save_labels = FROM_MOZ_LABELS;
        FROM_MOZ_LABELS = [];
        var ast = from_moz(node);
        FROM_MOZ_LABELS = save_labels;
        return ast;
    };

    function set_moz_loc(mynode, moznode) {
        var start = mynode.start;
        var end = mynode.end;
        if (!(start && end)) {
            return moznode;
        }
        if (start.pos != null && end.endpos != null) {
            moznode.range = [start.pos, end.endpos];
        }
        if (start.line) {
            moznode.loc = {
                start: {line: start.line, column: start.col},
                end: end.endline ? {line: end.endline, column: end.endcol} : null
            };
            if (start.file) {
                moznode.loc.source = start.file;
            }
        }
        return moznode;
    }

    function def_to_moz(mytype, handler) {
        mytype.DEFMETHOD("to_mozilla_ast", function(parent) {
            return set_moz_loc(this, handler(this, parent));
        });
    }

    var TO_MOZ_STACK = null;

    function to_moz(node) {
        if (TO_MOZ_STACK === null) { TO_MOZ_STACK = []; }
        TO_MOZ_STACK.push(node);
        var ast = node != null ? node.to_mozilla_ast(TO_MOZ_STACK[TO_MOZ_STACK.length - 2]) : null;
        TO_MOZ_STACK.pop();
        if (TO_MOZ_STACK.length === 0) { TO_MOZ_STACK = null; }
        return ast;
    }

    /** Object property keys can be number literals, string literals, or raw names. Additionally they can be shorthand. We decide that here. */
    function to_moz_property_key(key, computed = false, quote = false, value = null) {
        if (computed) {
            return [false, to_moz(key)];
        }

        const key_name = typeof key === "string" ? key : key.name;
        let moz_key;
        if (quote) {
            moz_key = { type: "Literal", value: key_name, raw: JSON.stringify(key_name) };
        } else if ("" + +key_name === key_name && +key_name >= 0) {
            // representable as a number
            moz_key = { type: "Literal", value: +key_name, raw: JSON.stringify(+key_name) };
        } else {
            moz_key = { type: "Identifier", name: key_name };
        }

        const shorthand =
            moz_key.type === "Identifier"
            && moz_key.name === key_name
            && (value instanceof AST_Symbol && value.name === key_name
                || value instanceof AST_DefaultAssign && value.left.name === key_name);
        return [shorthand, moz_key];
    }

    function to_moz_pattern(node) {
        if (node instanceof AST_Expansion) {
            return {
                type: "RestElement",
                argument: to_moz_pattern(node.expression),
            };
        }

        if ((
            node instanceof AST_Symbol
            || node instanceof AST_Destructuring
            || node instanceof AST_DefaultAssign
            || node instanceof AST_PropAccess
        )) {
            // Plain translation
            return to_moz(node);
        }

        throw new Error(node.TYPE);
    }

    function to_moz_in_destructuring() {
        var i = TO_MOZ_STACK.length;
        while (i--) {
            if (TO_MOZ_STACK[i] instanceof AST_Destructuring) {
                return true;
            }
        }
        return false;
    }

    function to_moz_block(node) {
        return {
            type: "BlockStatement",
            body: node.body.map(to_moz)
        };
    }

    function to_moz_scope(type, node) {
        var body = node.body.map(to_moz);
        if (node.body[0] instanceof AST_SimpleStatement && node.body[0].body instanceof AST_String) {
            body.unshift(to_moz(new AST_EmptyStatement(node.body[0])));
        }
        return {
            type: type,
            body: body
        };
    }
})();
