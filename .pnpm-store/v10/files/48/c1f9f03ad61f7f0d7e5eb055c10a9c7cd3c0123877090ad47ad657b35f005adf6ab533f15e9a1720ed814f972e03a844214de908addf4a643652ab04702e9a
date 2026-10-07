"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const tsutils = __importStar(require("ts-api-utils"));
const ts = __importStar(require("typescript"));
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-deprecated',
    meta: {
        type: 'problem',
        docs: {
            description: 'Disallow using code marked as `@deprecated`',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        messages: {
            deprecated: `\`{{name}}\` is deprecated.`,
            deprecatedWithReason: `\`{{name}}\` is deprecated. {{reason}}`,
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        ...util_1.typeOrValueSpecifiersSchema,
                        description: 'Type specifiers that can be allowed.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allow: [],
        },
    ],
    create(context, [options]) {
        const { jsDocParsingMode } = context.languageOptions.parserOptions;
        const allow = options.allow;
        if (jsDocParsingMode === 'none' || jsDocParsingMode === 'type-info') {
            throw new Error(`Cannot be used with jsDocParsingMode: '${jsDocParsingMode}'.`);
        }
        const services = (0, util_1.getParserServices)(context);
        const checker = services.program.getTypeChecker();
        // Deprecated jsdoc tags can be added on some symbol alias, e.g.
        //
        // export { /** @deprecated */ foo }
        //
        // When we import foo, its symbol is an alias of the exported foo (the one
        // with the deprecated tag), which is itself an alias of the original foo.
        // Therefore, we carefully go through the chain of aliases and check each
        // immediate alias for deprecated tags
        function searchForDeprecationInAliasesChain(symbol, checkDeprecationsOfAliasedSymbol) {
            if (!symbol || !tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)) {
                return checkDeprecationsOfAliasedSymbol
                    ? getJsDocDeprecation(symbol)
                    : undefined;
            }
            const targetSymbol = checker.getAliasedSymbol(symbol);
            while (tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)) {
                const reason = getJsDocDeprecation(symbol);
                if (reason != null) {
                    return reason;
                }
                const immediateAliasedSymbol = symbol.getDeclarations() && checker.getImmediateAliasedSymbol(symbol);
                if (!immediateAliasedSymbol) {
                    break;
                }
                symbol = immediateAliasedSymbol;
                if (checkDeprecationsOfAliasedSymbol && symbol === targetSymbol) {
                    return getJsDocDeprecation(symbol);
                }
            }
            return undefined;
        }
        function isDeclaration(node) {
            const { parent } = node;
            switch (parent.type) {
                case utils_1.AST_NODE_TYPES.ArrayPattern:
                    return parent.elements.includes(node);
                case utils_1.AST_NODE_TYPES.ClassExpression:
                case utils_1.AST_NODE_TYPES.ClassDeclaration:
                case utils_1.AST_NODE_TYPES.VariableDeclarator:
                case utils_1.AST_NODE_TYPES.TSEnumMember:
                    return parent.id === node;
                case utils_1.AST_NODE_TYPES.MethodDefinition:
                case utils_1.AST_NODE_TYPES.PropertyDefinition:
                case utils_1.AST_NODE_TYPES.AccessorProperty:
                    return parent.key === node;
                case utils_1.AST_NODE_TYPES.Property:
                    // foo in "const { foo } = bar" will be processed twice, as parent.key
                    // and parent.value. The second is treated as a declaration.
                    if (parent.value === node) {
                        // const { foo: bar } = baz; -- bar IS a declaration.
                        // const baz = { foo: bar }; -- bar IS NOT a declaration.
                        return parent.parent.type === utils_1.AST_NODE_TYPES.ObjectPattern;
                    }
                    // const { foo: bar } = baz; -- foo IS NOT a declaration.
                    // const baz = { foo: bar }; -- foo IS a declaration.
                    return parent.parent.type === utils_1.AST_NODE_TYPES.ObjectExpression;
                case utils_1.AST_NODE_TYPES.AssignmentPattern:
                    // foo in "const { foo = "" } = bar" will be processed twice, as parent.parent.key
                    // and parent.left. The second is treated as a declaration.
                    return parent.left === node;
                case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
                case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                case utils_1.AST_NODE_TYPES.FunctionExpression:
                case utils_1.AST_NODE_TYPES.TSDeclareFunction:
                case utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression:
                case utils_1.AST_NODE_TYPES.TSEnumDeclaration:
                case utils_1.AST_NODE_TYPES.TSInterfaceDeclaration:
                case utils_1.AST_NODE_TYPES.TSMethodSignature:
                case utils_1.AST_NODE_TYPES.TSModuleDeclaration:
                case utils_1.AST_NODE_TYPES.TSParameterProperty:
                case utils_1.AST_NODE_TYPES.TSPropertySignature:
                case utils_1.AST_NODE_TYPES.TSTypeAliasDeclaration:
                case utils_1.AST_NODE_TYPES.TSTypeParameter:
                    return true;
                // treat `export import Bar = Foo;` (and `import Foo = require('...')`) as declarations
                case utils_1.AST_NODE_TYPES.TSImportEqualsDeclaration:
                    return parent.id === node;
                default:
                    return false;
            }
        }
        function isInsideImport(node) {
            let current = node;
            while (true) {
                switch (current.type) {
                    case utils_1.AST_NODE_TYPES.ImportDeclaration:
                        return true;
                    case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
                    case utils_1.AST_NODE_TYPES.ExportAllDeclaration:
                    case utils_1.AST_NODE_TYPES.ExportNamedDeclaration:
                    case utils_1.AST_NODE_TYPES.BlockStatement:
                    case utils_1.AST_NODE_TYPES.ClassDeclaration:
                    case utils_1.AST_NODE_TYPES.TSInterfaceDeclaration:
                    case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                    case utils_1.AST_NODE_TYPES.FunctionExpression:
                    case utils_1.AST_NODE_TYPES.Program:
                    case utils_1.AST_NODE_TYPES.TSUnionType:
                    case utils_1.AST_NODE_TYPES.VariableDeclarator:
                        return false;
                    default:
                        current = current.parent;
                }
            }
        }
        function getJsDocDeprecation(symbol) {
            let jsDocTags;
            try {
                jsDocTags = symbol?.getJsDocTags(checker);
            }
            catch {
                // workaround for https://github.com/microsoft/TypeScript/issues/60024
                return;
            }
            const tag = jsDocTags?.find(tag => tag.name === 'deprecated');
            if (!tag) {
                return undefined;
            }
            const displayParts = tag.text;
            return displayParts ? ts.displayPartsToString(displayParts) : '';
        }
        function isNodeCalleeOfParent(node) {
            switch (node.parent?.type) {
                case utils_1.AST_NODE_TYPES.NewExpression:
                case utils_1.AST_NODE_TYPES.CallExpression:
                    return node.parent.callee === node;
                case utils_1.AST_NODE_TYPES.TaggedTemplateExpression:
                    return node.parent.tag === node;
                case utils_1.AST_NODE_TYPES.JSXOpeningElement:
                    return node.parent.name === node;
                default:
                    return false;
            }
        }
        function getCallLikeNode(node) {
            let callee = node;
            while (callee.parent?.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                callee.parent.property === callee) {
                callee = callee.parent;
            }
            return isNodeCalleeOfParent(callee) ? callee : undefined;
        }
        function getCallLikeDeprecation(node) {
            const tsNode = services.esTreeNodeToTSNodeMap.get(node.parent);
            // If the node is a direct function call, we look for its signature.
            const signature = (0, util_1.nullThrows)(checker.getResolvedSignature(tsNode), 'Expected call like node to have signature');
            const symbol = services.getSymbolAtLocation(node);
            const aliasedSymbol = symbol != null && tsutils.isSymbolFlagSet(symbol, ts.SymbolFlags.Alias)
                ? checker.getAliasedSymbol(symbol)
                : symbol;
            const symbolDeclarationKind = aliasedSymbol?.declarations?.[0].kind;
            // Properties with function-like types have "deprecated" jsdoc
            // on their symbols, not on their signatures:
            //
            // interface Props {
            //   /** @deprecated */
            //   property: () => 'foo'
            //   ^symbol^  ^signature^
            // }
            if (symbolDeclarationKind !== ts.SyntaxKind.MethodDeclaration &&
                symbolDeclarationKind !== ts.SyntaxKind.FunctionDeclaration &&
                symbolDeclarationKind !== ts.SyntaxKind.MethodSignature) {
                return (searchForDeprecationInAliasesChain(symbol, true) ??
                    getJsDocDeprecation(signature) ??
                    getJsDocDeprecation(aliasedSymbol));
            }
            return (searchForDeprecationInAliasesChain(symbol, 
            // Here we're working with a function declaration or method.
            // Both can have 1 or more overloads, each overload creates one
            // ts.Declaration which is placed in symbol.declarations.
            //
            // Imagine the following code:
            //
            // function foo(): void
            // /** @deprecated Some Reason */
            // function foo(arg: string): void
            // function foo(arg?: string): void {}
            //
            // foo()    // <- foo is our symbol
            //
            // If we call getJsDocDeprecation(checker.getAliasedSymbol(symbol)),
            // we get 'Some Reason', but after all, we are calling foo with
            // a signature that is not deprecated!
            // It works this way because symbol.getJsDocTags returns tags from
            // all symbol declarations combined into one array. And AFAIK there is
            // no publicly exported TS function that can tell us if a particular
            // declaration is deprecated or not.
            //
            // So, in case of function and method declarations, we don't check original
            // aliased symbol, but rely on the getJsDocDeprecation(signature) call below.
            false) ?? getJsDocDeprecation(signature));
        }
        function getJSXAttributeDeprecation(openingElement, propertyName) {
            const contextualType = (0, util_1.nullThrows)(services.getContextualType(openingElement.name), 'Expected JSX opening element name to have contextualType');
            const symbol = contextualType.getProperty(propertyName);
            return getJsDocDeprecation(symbol);
        }
        function getDeprecationReason(node) {
            const callLikeNode = getCallLikeNode(node);
            if (callLikeNode) {
                return getCallLikeDeprecation(callLikeNode);
            }
            if (node.parent.type === utils_1.AST_NODE_TYPES.JSXAttribute &&
                node.type !== utils_1.AST_NODE_TYPES.Super) {
                return getJSXAttributeDeprecation(node.parent.parent, node.name);
            }
            if (node.parent.type === utils_1.AST_NODE_TYPES.Property &&
                node.type !== utils_1.AST_NODE_TYPES.Super) {
                const property = services
                    .getTypeAtLocation(node.parent.parent)
                    .getProperty(node.name);
                const propertySymbol = services.getSymbolAtLocation(node);
                const valueSymbol = checker.getShorthandAssignmentValueSymbol(propertySymbol?.valueDeclaration);
                return (searchForDeprecationInAliasesChain(propertySymbol, true) ??
                    getJsDocDeprecation(property) ??
                    getJsDocDeprecation(propertySymbol) ??
                    searchForDeprecationInAliasesChain(valueSymbol, true));
            }
            return searchForDeprecationInAliasesChain(services.getSymbolAtLocation(node), true);
        }
        function checkIdentifier(node) {
            if (isDeclaration(node) || isInsideImport(node)) {
                return;
            }
            const reason = getDeprecationReason(node);
            if (reason == null) {
                return;
            }
            const type = services.getTypeAtLocation(node);
            if ((0, util_1.typeMatchesSomeSpecifier)(type, allow, services.program) ||
                (0, util_1.valueMatchesSomeSpecifier)(node, allow, services.program, type)) {
                return;
            }
            const name = getReportedNodeName(node);
            context.report({
                ...(reason
                    ? {
                        messageId: 'deprecatedWithReason',
                        data: { name, reason },
                    }
                    : {
                        messageId: 'deprecated',
                        data: { name },
                    }),
                node,
            });
        }
        function checkMemberExpression(node) {
            if (!node.computed) {
                return;
            }
            const propertyType = services.getTypeAtLocation(node.property);
            if (propertyType.isLiteral()) {
                const objectType = services.getTypeAtLocation(node.object);
                const propertyName = propertyType.isStringLiteral()
                    ? propertyType.value
                    : // eslint-disable-next-line @typescript-eslint/no-base-to-string
                        String(propertyType.value);
                const property = objectType.getProperty(propertyName);
                const reason = getJsDocDeprecation(property);
                if (reason == null) {
                    return;
                }
                if ((0, util_1.typeMatchesSomeSpecifier)(objectType, allow, services.program)) {
                    return;
                }
                context.report({
                    ...(reason
                        ? {
                            messageId: 'deprecatedWithReason',
                            data: { name: propertyName, reason },
                        }
                        : {
                            messageId: 'deprecated',
                            data: { name: propertyName },
                        }),
                    node: node.property,
                });
            }
        }
        return {
            Identifier(node) {
                const { parent } = node;
                if (parent.type === utils_1.AST_NODE_TYPES.ExportNamedDeclaration ||
                    parent.type === utils_1.AST_NODE_TYPES.ExportAllDeclaration) {
                    return;
                }
                // Computed identifier expressions are handled by checkMemberExpression
                if (parent.type === utils_1.AST_NODE_TYPES.MemberExpression &&
                    parent.computed &&
                    parent.property === node) {
                    return;
                }
                if (parent.type === utils_1.AST_NODE_TYPES.ExportSpecifier) {
                    // only deal with the alias (exported) side, not the local binding
                    if (parent.exported !== node) {
                        return;
                    }
                    const symbol = services.getSymbolAtLocation(node);
                    const aliasDeprecation = getJsDocDeprecation(symbol);
                    if (aliasDeprecation != null) {
                        return;
                    }
                }
                // whether it's a plain identifier or the exported alias
                checkIdentifier(node);
            },
            JSXIdentifier(node) {
                if (node.parent.type !== utils_1.AST_NODE_TYPES.JSXClosingElement) {
                    checkIdentifier(node);
                }
            },
            MemberExpression: checkMemberExpression,
            PrivateIdentifier: checkIdentifier,
            Super: checkIdentifier,
        };
    },
});
function getReportedNodeName(node) {
    if (node.type === utils_1.AST_NODE_TYPES.Super) {
        return 'super';
    }
    if (node.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
        return `#${node.name}`;
    }
    return node.name;
}
//# sourceMappingURL=no-deprecated.js.map