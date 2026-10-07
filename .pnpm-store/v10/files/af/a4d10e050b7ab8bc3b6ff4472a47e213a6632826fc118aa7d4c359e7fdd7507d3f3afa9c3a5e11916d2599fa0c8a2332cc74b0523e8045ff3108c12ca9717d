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
exports.Converter = void 0;
exports.convertError = convertError;
// There's lots of funny stuff due to the typing of ts.Node
/* eslint-disable @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unnecessary-condition, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access */
const ts = __importStar(require("typescript"));
const check_syntax_errors_1 = require("./check-syntax-errors");
const getModifiers_1 = require("./getModifiers");
const node_utils_1 = require("./node-utils");
const ts_estree_1 = require("./ts-estree");
const SyntaxKind = ts.SyntaxKind;
/**
 * Extends and formats a given error object
 * @param error the error object
 * @returns converted error object
 */
function convertError(error) {
    return (0, node_utils_1.createError)(error.start, ('message' in error && error.message) || error.messageText, error.file);
}
class Converter {
    allowPattern = false;
    ast;
    esTreeNodeToTSNodeMap = new WeakMap();
    options;
    tsNodeToESTreeNodeMap = new WeakMap();
    /**
     * Converts a TypeScript node into an ESTree node
     * @param ast the full TypeScript AST
     * @param options additional options for the conversion
     * @returns the converted ESTreeNode
     */
    constructor(ast, options) {
        this.ast = ast;
        this.options = { ...options };
    }
    #checkSyntaxError(node, parent) {
        if (this.options.allowInvalidAST) {
            return;
        }
        (0, check_syntax_errors_1.checkSyntaxError)(node, parent, this.allowPattern);
    }
    #isValidEscape(text) {
        if (/\\[xu]/.test(text)) {
            const hasInvalidUnicodeEscape = /\\u(?![0-9a-fA-F]{4}|{)/.test(text);
            const hasInvalidHexEscape = /\\x(?![0-9a-fA-F]{2})/.test(text);
            return !hasInvalidUnicodeEscape && !hasInvalidHexEscape;
        }
        return true;
    }
    #throwError(node, message) {
        if (this.options.allowInvalidAST) {
            return;
        }
        throw (0, node_utils_1.createError)(node, message, this.ast);
    }
    /**
     * Creates a getter for a property under aliasKey that returns the value under
     * valueKey. If suppressDeprecatedPropertyWarnings is not enabled, the
     * getter also console warns about the deprecation.
     *
     * @see https://github.com/typescript-eslint/typescript-eslint/issues/6469
     */
    #withDeprecatedAliasGetter(node, aliasKey, valueKey, suppressWarnings = false) {
        let warned = suppressWarnings;
        Object.defineProperty(node, aliasKey, {
            configurable: true,
            get: this.options.suppressDeprecatedPropertyWarnings
                ? () => node[valueKey]
                : () => {
                    if (!warned) {
                        process.emitWarning(`The '${aliasKey}' property is deprecated on ${node.type} nodes. Use '${valueKey}' instead. See https://tseslint.com/key-property-deprecated.`, 'DeprecationWarning');
                        warned = true;
                    }
                    return node[valueKey];
                },
            set(value) {
                Object.defineProperty(node, aliasKey, {
                    enumerable: true,
                    value,
                    writable: true,
                });
            },
        });
        return node;
    }
    #withDeprecatedGetter(node, deprecatedKey, preferredKey, value) {
        let warned = false;
        Object.defineProperty(node, deprecatedKey, {
            configurable: true,
            get: this.options.suppressDeprecatedPropertyWarnings
                ? () => value
                : () => {
                    if (!warned) {
                        let message = `The '${deprecatedKey}' property is deprecated on ${node.type} nodes.`;
                        if (preferredKey) {
                            message += ` Use ${preferredKey} instead.`;
                        }
                        message += ' See https://tseslint.com/key-property-deprecated.';
                        process.emitWarning(message, 'DeprecationWarning');
                        warned = true;
                    }
                    return value;
                },
            set(value) {
                Object.defineProperty(node, deprecatedKey, {
                    enumerable: true,
                    value,
                    writable: true,
                });
            },
        });
        return node;
    }
    convertBindingNameWithTypeAnnotation(name, tsType, parent) {
        const id = this.convertPattern(name);
        if (tsType) {
            id.typeAnnotation = this.convertTypeAnnotation(tsType, parent);
            this.fixParentLocation(id, id.typeAnnotation.range);
        }
        return id;
    }
    /**
     * Coverts body Nodes and add a directive field to StringLiterals
     * @param nodes of ts.Node
     * @param parent parentNode
     * @returns Array of body statements
     */
    convertBodyExpressions(nodes, parent) {
        let allowDirectives = (0, node_utils_1.canContainDirective)(parent);
        return (nodes
            .map(statement => {
            const child = this.convertChild(statement);
            if (allowDirectives) {
                if (child?.expression &&
                    ts.isExpressionStatement(statement) &&
                    ts.isStringLiteral(statement.expression)) {
                    const raw = child.expression.raw;
                    child.directive = raw.slice(1, -1);
                    return child; // child can be null, but it's filtered below
                }
                allowDirectives = false;
            }
            return child; // child can be null, but it's filtered below
        })
            // filter out unknown nodes for now
            .filter(statement => statement));
    }
    convertChainExpression(node, tsNode) {
        const { child, isOptional } = (() => {
            if (node.type === ts_estree_1.AST_NODE_TYPES.MemberExpression) {
                return { child: node.object, isOptional: node.optional };
            }
            if (node.type === ts_estree_1.AST_NODE_TYPES.CallExpression) {
                return { child: node.callee, isOptional: node.optional };
            }
            return { child: node.expression, isOptional: false };
        })();
        const isChildUnwrappable = (0, node_utils_1.isChildUnwrappableOptionalChain)(tsNode, child);
        if (!isChildUnwrappable && !isOptional) {
            return node;
        }
        if (isChildUnwrappable && (0, node_utils_1.isChainExpression)(child)) {
            // unwrap the chain expression child
            const newChild = child.expression;
            if (node.type === ts_estree_1.AST_NODE_TYPES.MemberExpression) {
                node.object = newChild;
            }
            else if (node.type === ts_estree_1.AST_NODE_TYPES.CallExpression) {
                node.callee = newChild;
            }
            else {
                node.expression = newChild;
            }
        }
        return this.createNode(tsNode, {
            type: ts_estree_1.AST_NODE_TYPES.ChainExpression,
            expression: node,
        });
    }
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param child the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    convertChild(child, parent) {
        return this.converter(child, parent, false);
    }
    /**
     * Converts TypeScript node array into an ESTree node list.
     * @param children the child `ts.NodeArray` or `ts.Node[]`
     * @param parent parentNode
     * @returns the converted ESTree node list
     */
    convertChildren(children, parent) {
        return children.map(child => this.converter(child, parent, false));
    }
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param child the child ts.Node
     * @param parent parentNode
     * @returns the converted ESTree node
     */
    convertPattern(child, parent) {
        return this.converter(child, parent, true);
    }
    /**
     * Converts a child into a type annotation. This creates an intermediary
     * TypeAnnotation node to match what Flow does.
     * @param child The TypeScript AST node to convert.
     * @param parent parentNode
     * @returns The type annotation node.
     */
    convertTypeAnnotation(child, parent) {
        // in FunctionType and ConstructorType typeAnnotation has 2 characters `=>` and in other places is just colon
        const offset = parent?.kind === SyntaxKind.FunctionType ||
            parent?.kind === SyntaxKind.ConstructorType
            ? 2
            : 1;
        const annotationStartCol = child.getFullStart() - offset;
        const range = [annotationStartCol, child.end];
        const loc = (0, node_utils_1.getLocFor)(range, this.ast);
        return {
            type: ts_estree_1.AST_NODE_TYPES.TSTypeAnnotation,
            loc,
            range,
            typeAnnotation: this.convertChild(child),
        };
    }
    /**
     * Converts a ts.Node's typeArguments to TSTypeParameterInstantiation node
     * @param typeArguments ts.NodeArray typeArguments
     * @param node parent used to create this node
     * @returns TypeParameterInstantiation node
     */
    convertTypeArguments(node) {
        const { typeArguments } = node;
        if (!typeArguments) {
            return undefined;
        }
        const greaterThanToken = (0, node_utils_1.findNextToken)(typeArguments, this.ast, this.ast);
        const range = [typeArguments.pos - 1, greaterThanToken.end];
        if (typeArguments.length === 0) {
            this.#throwError(range, 'Type argument list cannot be empty.');
        }
        return this.createNode(node, {
            type: ts_estree_1.AST_NODE_TYPES.TSTypeParameterInstantiation,
            range,
            params: this.convertChildren(typeArguments),
        });
    }
    /**
     * Converts a ts.Node's typeParameters to TSTypeParameterDeclaration node
     * @param typeParameters ts.Node typeParameters
     * @returns TypeParameterDeclaration node
     */
    convertTypeParameters(node) {
        const { typeParameters } = node;
        if (!typeParameters) {
            return undefined;
        }
        const greaterThanToken = (0, node_utils_1.findNextToken)(typeParameters, this.ast, this.ast);
        const range = [
            typeParameters.pos - 1,
            greaterThanToken.end,
        ];
        if (typeParameters.length === 0) {
            this.#throwError(range, 'Type parameter list cannot be empty.');
        }
        return {
            type: ts_estree_1.AST_NODE_TYPES.TSTypeParameterDeclaration,
            loc: (0, node_utils_1.getLocFor)(range, this.ast),
            range,
            params: this.convertChildren(typeParameters),
        };
    }
    /**
     * Converts an array of ts.Node parameters into an array of ESTreeNode params
     * @param parameters An array of ts.Node params to be converted
     * @returns an array of converted ESTreeNode params
     */
    convertParameters(parameters) {
        if (!parameters?.length) {
            return [];
        }
        return parameters.map(param => {
            const convertedParam = this.convertChild(param);
            convertedParam.decorators = this.convertChildren((0, getModifiers_1.getDecorators)(param) ?? []);
            return convertedParam;
        });
    }
    /**
     * Converts a TypeScript node into an ESTree node.
     * @param node the child ts.Node
     * @param parent parentNode
     * @param allowPattern flag to determine if patterns are allowed
     * @returns the converted ESTree node
     */
    converter(node, parent, allowPattern) {
        /**
         * Exit early for null and undefined
         */
        if (!node) {
            return null;
        }
        const pattern = this.allowPattern;
        if (allowPattern != null) {
            this.allowPattern = allowPattern;
        }
        const parentNode = (parent ?? node.parent);
        this.#checkSyntaxError(node, parentNode);
        const result = this.convertNode(node, parentNode);
        this.registerTSNodeInNodeMap(node, result);
        this.allowPattern = pattern;
        return result;
    }
    convertImportAttributes(node) {
        // eslint-disable-next-line @typescript-eslint/no-deprecated
        const attributes = node.attributes ?? node.assertClause;
        return this.convertChildren(attributes?.elements ?? []);
    }
    convertJSXIdentifier(node) {
        const result = this.createNode(node, {
            type: ts_estree_1.AST_NODE_TYPES.JSXIdentifier,
            name: node.getText(),
        });
        this.registerTSNodeInNodeMap(node, result);
        return result;
    }
    convertJSXNamespaceOrIdentifier(node) {
        // TypeScript@5.1 added in ts.JsxNamespacedName directly
        // We prefer using that if it's relevant for this node type
        if (node.kind === ts.SyntaxKind.JsxNamespacedName) {
            const result = this.createNode(node, {
                type: ts_estree_1.AST_NODE_TYPES.JSXNamespacedName,
                name: this.createNode(node.name, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXIdentifier,
                    name: node.name.text,
                }),
                namespace: this.createNode(node.namespace, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXIdentifier,
                    name: node.namespace.text,
                }),
            });
            this.registerTSNodeInNodeMap(node, result);
            return result;
        }
        // TypeScript@<5.1 has to manually parse the JSX attributes
        const text = node.getText();
        const colonIndex = text.indexOf(':');
        // this is intentional we can ignore conversion if `:` is in first character
        if (colonIndex > 0) {
            const range = (0, node_utils_1.getRange)(node, this.ast);
            const result = this.createNode(node, {
                type: ts_estree_1.AST_NODE_TYPES.JSXNamespacedName,
                range,
                name: this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXIdentifier,
                    range: [range[0] + colonIndex + 1, range[1]],
                    name: text.slice(colonIndex + 1),
                }),
                namespace: this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXIdentifier,
                    range: [range[0], range[0] + colonIndex],
                    name: text.slice(0, colonIndex),
                }),
            });
            this.registerTSNodeInNodeMap(node, result);
            return result;
        }
        return this.convertJSXIdentifier(node);
    }
    /**
     * Converts a TypeScript JSX node.tagName into an ESTree node.name
     * @param node the tagName object from a JSX ts.Node
     * @returns the converted ESTree name object
     */
    convertJSXTagName(node, parent) {
        let result;
        switch (node.kind) {
            case SyntaxKind.PropertyAccessExpression:
                if (node.name.kind === SyntaxKind.PrivateIdentifier) {
                    // This is one of the few times where TS explicitly errors, and doesn't even gracefully handle the syntax.
                    // So we shouldn't ever get into this state to begin with.
                    this.#throwError(node.name, 'Non-private identifier expected.');
                }
                result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXMemberExpression,
                    object: this.convertJSXTagName(node.expression, parent),
                    property: this.convertJSXIdentifier(node.name),
                });
                break;
            case SyntaxKind.ThisKeyword:
            case SyntaxKind.Identifier:
            default:
                return this.convertJSXNamespaceOrIdentifier(node);
        }
        this.registerTSNodeInNodeMap(node, result);
        return result;
    }
    convertMethodSignature(node) {
        return this.createNode(node, {
            type: ts_estree_1.AST_NODE_TYPES.TSMethodSignature,
            accessibility: (0, node_utils_1.getTSNodeAccessibility)(node),
            computed: (0, node_utils_1.isComputedProperty)(node.name),
            key: this.convertChild(node.name),
            kind: (() => {
                switch (node.kind) {
                    case SyntaxKind.GetAccessor:
                        return 'get';
                    case SyntaxKind.SetAccessor:
                        return 'set';
                    case SyntaxKind.MethodSignature:
                        return 'method';
                }
            })(),
            optional: (0, node_utils_1.isOptional)(node),
            params: this.convertParameters(node.parameters),
            readonly: (0, node_utils_1.hasModifier)(SyntaxKind.ReadonlyKeyword, node),
            returnType: node.type && this.convertTypeAnnotation(node.type, node),
            static: (0, node_utils_1.hasModifier)(SyntaxKind.StaticKeyword, node),
            typeParameters: this.convertTypeParameters(node),
        });
    }
    /**
     * Uses the provided range location to adjust the location data of the given Node
     * @param result The node that will have its location data mutated
     * @param childRange The child node range used to expand location
     */
    fixParentLocation(result, childRange) {
        if (childRange[0] < result.range[0]) {
            result.range[0] = childRange[0];
            result.loc.start = (0, node_utils_1.getLineAndCharacterFor)(result.range[0], this.ast);
        }
        if (childRange[1] > result.range[1]) {
            result.range[1] = childRange[1];
            result.loc.end = (0, node_utils_1.getLineAndCharacterFor)(result.range[1], this.ast);
        }
    }
    /**
     * Converts a TypeScript node into an ESTree node.
     * The core of the conversion logic:
     * Identify and convert each relevant TypeScript SyntaxKind
     * @returns the converted ESTree node
     */
    convertNode(node, parent) {
        switch (node.kind) {
            case SyntaxKind.SourceFile: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Program,
                    range: [node.getStart(this.ast), node.endOfFileToken.end],
                    body: this.convertBodyExpressions(node.statements, node),
                    comments: undefined,
                    sourceType: node.externalModuleIndicator ? 'module' : 'script',
                    tokens: undefined,
                });
            }
            case SyntaxKind.Block: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.BlockStatement,
                    body: this.convertBodyExpressions(node.statements, node),
                });
            }
            case SyntaxKind.Identifier: {
                if ((0, node_utils_1.isThisInTypeQuery)(node)) {
                    // special case for `typeof this.foo` - TS emits an Identifier for `this`
                    // but we want to treat it as a ThisExpression for consistency
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.ThisExpression,
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Identifier,
                    decorators: [],
                    name: node.text,
                    optional: false,
                    typeAnnotation: undefined,
                });
            }
            case SyntaxKind.PrivateIdentifier: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.PrivateIdentifier,
                    // typescript includes the `#` in the text
                    name: node.text.slice(1),
                });
            }
            case SyntaxKind.WithStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.WithStatement,
                    body: this.convertChild(node.statement),
                    object: this.convertChild(node.expression),
                });
            // Control Flow
            case SyntaxKind.ReturnStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ReturnStatement,
                    argument: this.convertChild(node.expression),
                });
            case SyntaxKind.LabeledStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.LabeledStatement,
                    body: this.convertChild(node.statement),
                    label: this.convertChild(node.label),
                });
            case SyntaxKind.ContinueStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ContinueStatement,
                    label: this.convertChild(node.label),
                });
            case SyntaxKind.BreakStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.BreakStatement,
                    label: this.convertChild(node.label),
                });
            // Choice
            case SyntaxKind.IfStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.IfStatement,
                    alternate: this.convertChild(node.elseStatement),
                    consequent: this.convertChild(node.thenStatement),
                    test: this.convertChild(node.expression),
                });
            case SyntaxKind.SwitchStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.SwitchStatement,
                    cases: this.convertChildren(node.caseBlock.clauses),
                    discriminant: this.convertChild(node.expression),
                });
            case SyntaxKind.CaseClause:
            case SyntaxKind.DefaultClause:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.SwitchCase,
                    // expression is present in case only
                    consequent: this.convertChildren(node.statements),
                    test: node.kind === SyntaxKind.CaseClause
                        ? this.convertChild(node.expression)
                        : null,
                });
            // Exceptions
            case SyntaxKind.ThrowStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ThrowStatement,
                    argument: this.convertChild(node.expression),
                });
            case SyntaxKind.TryStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TryStatement,
                    block: this.convertChild(node.tryBlock),
                    finalizer: this.convertChild(node.finallyBlock),
                    handler: this.convertChild(node.catchClause),
                });
            case SyntaxKind.CatchClause:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.CatchClause,
                    body: this.convertChild(node.block),
                    param: node.variableDeclaration
                        ? this.convertBindingNameWithTypeAnnotation(node.variableDeclaration.name, node.variableDeclaration.type)
                        : null,
                });
            // Loops
            case SyntaxKind.WhileStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.WhileStatement,
                    body: this.convertChild(node.statement),
                    test: this.convertChild(node.expression),
                });
            /**
             * Unlike other parsers, TypeScript calls a "DoWhileStatement"
             * a "DoStatement"
             */
            case SyntaxKind.DoStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.DoWhileStatement,
                    body: this.convertChild(node.statement),
                    test: this.convertChild(node.expression),
                });
            case SyntaxKind.ForStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ForStatement,
                    body: this.convertChild(node.statement),
                    init: this.convertChild(node.initializer),
                    test: this.convertChild(node.condition),
                    update: this.convertChild(node.incrementor),
                });
            case SyntaxKind.ForInStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ForInStatement,
                    body: this.convertChild(node.statement),
                    left: this.convertPattern(node.initializer),
                    right: this.convertChild(node.expression),
                });
            case SyntaxKind.ForOfStatement: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ForOfStatement,
                    await: node.awaitModifier?.kind === SyntaxKind.AwaitKeyword,
                    body: this.convertChild(node.statement),
                    left: this.convertPattern(node.initializer),
                    right: this.convertChild(node.expression),
                });
            }
            // Declarations
            case SyntaxKind.FunctionDeclaration: {
                const isDeclare = (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node);
                const isAsync = (0, node_utils_1.hasModifier)(SyntaxKind.AsyncKeyword, node);
                const isGenerator = !!node.asteriskToken;
                const result = this.createNode(node, {
                    // declare implies no body due to the invariant above
                    type: !node.body
                        ? ts_estree_1.AST_NODE_TYPES.TSDeclareFunction
                        : ts_estree_1.AST_NODE_TYPES.FunctionDeclaration,
                    async: isAsync,
                    body: this.convertChild(node.body) || undefined,
                    declare: isDeclare,
                    expression: false,
                    generator: isGenerator,
                    id: this.convertChild(node.name),
                    params: this.convertParameters(node.parameters),
                    returnType: node.type && this.convertTypeAnnotation(node.type, node),
                    typeParameters: this.convertTypeParameters(node),
                });
                return this.fixExports(node, result);
            }
            case SyntaxKind.VariableDeclaration: {
                const hasExclamationToken = !!node.exclamationToken;
                const init = this.convertChild(node.initializer);
                const id = this.convertBindingNameWithTypeAnnotation(node.name, node.type, node);
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.VariableDeclarator,
                    definite: hasExclamationToken,
                    id,
                    init,
                });
            }
            case SyntaxKind.VariableStatement: {
                const declarations = node.declarationList.declarations;
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.VariableDeclaration,
                    declarations: this.convertChildren(declarations),
                    declare: (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node),
                    kind: (0, node_utils_1.getDeclarationKind)(node.declarationList),
                });
                /**
                 * Semantically, decorators are not allowed on variable declarations,
                 * Pre 4.8 TS would include them in the AST, so we did as well.
                 * However as of 4.8 TS no longer includes it (as it is, well, invalid).
                 *
                 * So for consistency across versions, we no longer include it either.
                 */
                return this.fixExports(node, result);
            }
            // mostly for for-of, for-in
            case SyntaxKind.VariableDeclarationList: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.VariableDeclaration,
                    declarations: this.convertChildren(node.declarations),
                    declare: false,
                    kind: (0, node_utils_1.getDeclarationKind)(node),
                });
            }
            // Expressions
            case SyntaxKind.ExpressionStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ExpressionStatement,
                    directive: undefined,
                    expression: this.convertChild(node.expression),
                });
            case SyntaxKind.ThisKeyword:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ThisExpression,
                });
            case SyntaxKind.ArrayLiteralExpression: {
                // TypeScript uses ArrayLiteralExpression in destructuring assignment, too
                if (this.allowPattern) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.ArrayPattern,
                        decorators: [],
                        elements: node.elements.map(el => this.convertPattern(el)),
                        optional: false,
                        typeAnnotation: undefined,
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ArrayExpression,
                    elements: this.convertChildren(node.elements),
                });
            }
            case SyntaxKind.ObjectLiteralExpression: {
                // TypeScript uses ObjectLiteralExpression in destructuring assignment, too
                if (this.allowPattern) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.ObjectPattern,
                        decorators: [],
                        optional: false,
                        properties: node.properties.map(el => this.convertPattern(el)),
                        typeAnnotation: undefined,
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ObjectExpression,
                    properties: this.convertChildren(node.properties),
                });
            }
            case SyntaxKind.PropertyAssignment: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Property,
                    computed: (0, node_utils_1.isComputedProperty)(node.name),
                    key: this.convertChild(node.name),
                    kind: 'init',
                    method: false,
                    optional: false,
                    shorthand: false,
                    value: this.converter(node.initializer, node, this.allowPattern),
                });
            }
            case SyntaxKind.ShorthandPropertyAssignment: {
                if (node.objectAssignmentInitializer) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.Property,
                        computed: false,
                        key: this.convertChild(node.name),
                        kind: 'init',
                        method: false,
                        optional: false,
                        shorthand: true,
                        value: this.createNode(node, {
                            type: ts_estree_1.AST_NODE_TYPES.AssignmentPattern,
                            decorators: [],
                            left: this.convertPattern(node.name),
                            optional: false,
                            right: this.convertChild(node.objectAssignmentInitializer),
                            typeAnnotation: undefined,
                        }),
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Property,
                    computed: false,
                    key: this.convertChild(node.name),
                    kind: 'init',
                    method: false,
                    optional: false,
                    shorthand: true,
                    value: this.convertChild(node.name),
                });
            }
            case SyntaxKind.ComputedPropertyName:
                return this.convertChild(node.expression);
            case SyntaxKind.PropertyDeclaration: {
                const isAbstract = (0, node_utils_1.hasModifier)(SyntaxKind.AbstractKeyword, node);
                const isAccessor = (0, node_utils_1.hasModifier)(SyntaxKind.AccessorKeyword, node);
                const type = (() => {
                    if (isAccessor) {
                        if (isAbstract) {
                            return ts_estree_1.AST_NODE_TYPES.TSAbstractAccessorProperty;
                        }
                        return ts_estree_1.AST_NODE_TYPES.AccessorProperty;
                    }
                    if (isAbstract) {
                        return ts_estree_1.AST_NODE_TYPES.TSAbstractPropertyDefinition;
                    }
                    return ts_estree_1.AST_NODE_TYPES.PropertyDefinition;
                })();
                const key = this.convertChild(node.name);
                return this.createNode(node, {
                    type,
                    accessibility: (0, node_utils_1.getTSNodeAccessibility)(node),
                    computed: (0, node_utils_1.isComputedProperty)(node.name),
                    declare: (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node),
                    decorators: this.convertChildren((0, getModifiers_1.getDecorators)(node) ?? []),
                    definite: !!node.exclamationToken,
                    key,
                    optional: (key.type === ts_estree_1.AST_NODE_TYPES.Literal ||
                        node.name.kind === SyntaxKind.Identifier ||
                        node.name.kind === SyntaxKind.ComputedPropertyName ||
                        node.name.kind === SyntaxKind.PrivateIdentifier) &&
                        !!node.questionToken,
                    override: (0, node_utils_1.hasModifier)(SyntaxKind.OverrideKeyword, node),
                    readonly: (0, node_utils_1.hasModifier)(SyntaxKind.ReadonlyKeyword, node),
                    static: (0, node_utils_1.hasModifier)(SyntaxKind.StaticKeyword, node),
                    typeAnnotation: node.type && this.convertTypeAnnotation(node.type, node),
                    value: isAbstract ? null : this.convertChild(node.initializer),
                });
            }
            case SyntaxKind.GetAccessor:
            case SyntaxKind.SetAccessor: {
                if (node.parent.kind === SyntaxKind.InterfaceDeclaration ||
                    node.parent.kind === SyntaxKind.TypeLiteral) {
                    return this.convertMethodSignature(node);
                }
            }
            // otherwise, it is a non-type accessor - intentional fallthrough
            case SyntaxKind.MethodDeclaration: {
                const method = this.createNode(node, {
                    type: !node.body
                        ? ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression
                        : ts_estree_1.AST_NODE_TYPES.FunctionExpression,
                    range: [node.parameters.pos - 1, node.end],
                    async: (0, node_utils_1.hasModifier)(SyntaxKind.AsyncKeyword, node),
                    body: this.convertChild(node.body),
                    declare: false,
                    expression: false, // ESTreeNode as ESTreeNode here
                    generator: !!node.asteriskToken,
                    id: null,
                    params: [],
                    returnType: node.type && this.convertTypeAnnotation(node.type, node),
                    typeParameters: this.convertTypeParameters(node),
                });
                if (method.typeParameters) {
                    this.fixParentLocation(method, method.typeParameters.range);
                }
                let result;
                if (parent.kind === SyntaxKind.ObjectLiteralExpression) {
                    method.params = this.convertChildren(node.parameters);
                    result = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.Property,
                        computed: (0, node_utils_1.isComputedProperty)(node.name),
                        key: this.convertChild(node.name),
                        kind: 'init',
                        method: node.kind === SyntaxKind.MethodDeclaration,
                        optional: !!node.questionToken,
                        shorthand: false,
                        value: method,
                    });
                }
                else {
                    // class
                    const isAbstract = (0, node_utils_1.hasModifier)(SyntaxKind.AbstractKeyword, node);
                    /**
                     * Unlike in object literal methods, class method params can have decorators
                     */
                    method.params = this.convertParameters(node.parameters);
                    /**
                     * TypeScript class methods can be defined as "abstract"
                     */
                    const methodDefinitionType = isAbstract
                        ? ts_estree_1.AST_NODE_TYPES.TSAbstractMethodDefinition
                        : ts_estree_1.AST_NODE_TYPES.MethodDefinition;
                    result = this.createNode(node, {
                        type: methodDefinitionType,
                        accessibility: (0, node_utils_1.getTSNodeAccessibility)(node),
                        computed: (0, node_utils_1.isComputedProperty)(node.name),
                        decorators: this.convertChildren((0, getModifiers_1.getDecorators)(node) ?? []),
                        key: this.convertChild(node.name),
                        kind: 'method',
                        optional: !!node.questionToken,
                        override: (0, node_utils_1.hasModifier)(SyntaxKind.OverrideKeyword, node),
                        static: (0, node_utils_1.hasModifier)(SyntaxKind.StaticKeyword, node),
                        value: method,
                    });
                }
                if (node.kind === SyntaxKind.GetAccessor) {
                    result.kind = 'get';
                }
                else if (node.kind === SyntaxKind.SetAccessor) {
                    result.kind = 'set';
                }
                else if (!result.static &&
                    node.name.kind === SyntaxKind.StringLiteral &&
                    node.name.text === 'constructor' &&
                    result.type !== ts_estree_1.AST_NODE_TYPES.Property) {
                    result.kind = 'constructor';
                }
                return result;
            }
            // TypeScript uses this even for static methods named "constructor"
            case SyntaxKind.Constructor: {
                const lastModifier = (0, node_utils_1.getLastModifier)(node);
                const constructorToken = (lastModifier && (0, node_utils_1.findNextToken)(lastModifier, node, this.ast)) ??
                    node.getFirstToken();
                const constructor = this.createNode(node, {
                    type: !node.body
                        ? ts_estree_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression
                        : ts_estree_1.AST_NODE_TYPES.FunctionExpression,
                    range: [node.parameters.pos - 1, node.end],
                    async: false,
                    body: this.convertChild(node.body),
                    declare: false,
                    expression: false, // is not present in ESTreeNode
                    generator: false,
                    id: null,
                    params: this.convertParameters(node.parameters),
                    returnType: node.type && this.convertTypeAnnotation(node.type, node),
                    typeParameters: this.convertTypeParameters(node),
                });
                if (constructor.typeParameters) {
                    this.fixParentLocation(constructor, constructor.typeParameters.range);
                }
                const constructorKey = constructorToken.kind === SyntaxKind.StringLiteral
                    ? this.createNode(constructorToken, {
                        type: ts_estree_1.AST_NODE_TYPES.Literal,
                        raw: constructorToken.getText(),
                        value: 'constructor',
                    })
                    : this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.Identifier,
                        range: [
                            constructorToken.getStart(this.ast),
                            constructorToken.end,
                        ],
                        decorators: [],
                        name: 'constructor',
                        optional: false,
                        typeAnnotation: undefined,
                    });
                const isStatic = (0, node_utils_1.hasModifier)(SyntaxKind.StaticKeyword, node);
                return this.createNode(node, {
                    type: (0, node_utils_1.hasModifier)(SyntaxKind.AbstractKeyword, node)
                        ? ts_estree_1.AST_NODE_TYPES.TSAbstractMethodDefinition
                        : ts_estree_1.AST_NODE_TYPES.MethodDefinition,
                    accessibility: (0, node_utils_1.getTSNodeAccessibility)(node),
                    computed: false,
                    decorators: [],
                    key: constructorKey,
                    kind: isStatic ? 'method' : 'constructor',
                    optional: false,
                    override: false,
                    static: isStatic,
                    value: constructor,
                });
            }
            case SyntaxKind.FunctionExpression: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.FunctionExpression,
                    async: (0, node_utils_1.hasModifier)(SyntaxKind.AsyncKeyword, node),
                    body: this.convertChild(node.body),
                    declare: false,
                    expression: false,
                    generator: !!node.asteriskToken,
                    id: this.convertChild(node.name),
                    params: this.convertParameters(node.parameters),
                    returnType: node.type && this.convertTypeAnnotation(node.type, node),
                    typeParameters: this.convertTypeParameters(node),
                });
            }
            case SyntaxKind.SuperKeyword:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Super,
                });
            case SyntaxKind.ArrayBindingPattern:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ArrayPattern,
                    decorators: [],
                    elements: node.elements.map(el => this.convertPattern(el)),
                    optional: false,
                    typeAnnotation: undefined,
                });
            // occurs with missing array elements like [,]
            case SyntaxKind.OmittedExpression:
                return null;
            case SyntaxKind.ObjectBindingPattern:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ObjectPattern,
                    decorators: [],
                    optional: false,
                    properties: node.elements.map(el => this.convertPattern(el)),
                    typeAnnotation: undefined,
                });
            case SyntaxKind.BindingElement: {
                if (parent.kind === SyntaxKind.ArrayBindingPattern) {
                    const arrayItem = this.convertChild(node.name, parent);
                    if (node.initializer) {
                        return this.createNode(node, {
                            type: ts_estree_1.AST_NODE_TYPES.AssignmentPattern,
                            decorators: [],
                            left: arrayItem,
                            optional: false,
                            right: this.convertChild(node.initializer),
                            typeAnnotation: undefined,
                        });
                    }
                    if (node.dotDotDotToken) {
                        return this.createNode(node, {
                            type: ts_estree_1.AST_NODE_TYPES.RestElement,
                            argument: arrayItem,
                            decorators: [],
                            optional: false,
                            typeAnnotation: undefined,
                            value: undefined,
                        });
                    }
                    return arrayItem;
                }
                let result;
                if (node.dotDotDotToken) {
                    result = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.RestElement,
                        argument: this.convertChild(node.propertyName ?? node.name),
                        decorators: [],
                        optional: false,
                        typeAnnotation: undefined,
                        value: undefined,
                    });
                }
                else {
                    result = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.Property,
                        computed: node.propertyName?.kind === SyntaxKind.ComputedPropertyName,
                        key: this.convertChild(node.propertyName ?? node.name),
                        kind: 'init',
                        method: false,
                        optional: false,
                        shorthand: !node.propertyName,
                        value: this.convertChild(node.name),
                    });
                }
                if (node.initializer) {
                    result.value = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.AssignmentPattern,
                        range: [node.name.getStart(this.ast), node.initializer.end],
                        decorators: [],
                        left: this.convertChild(node.name),
                        optional: false,
                        right: this.convertChild(node.initializer),
                        typeAnnotation: undefined,
                    });
                }
                return result;
            }
            case SyntaxKind.ArrowFunction: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ArrowFunctionExpression,
                    async: (0, node_utils_1.hasModifier)(SyntaxKind.AsyncKeyword, node),
                    body: this.convertChild(node.body),
                    expression: node.body.kind !== SyntaxKind.Block,
                    generator: false,
                    id: null,
                    params: this.convertParameters(node.parameters),
                    returnType: node.type && this.convertTypeAnnotation(node.type, node),
                    typeParameters: this.convertTypeParameters(node),
                });
            }
            case SyntaxKind.YieldExpression:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.YieldExpression,
                    argument: this.convertChild(node.expression),
                    delegate: !!node.asteriskToken,
                });
            case SyntaxKind.AwaitExpression:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.AwaitExpression,
                    argument: this.convertChild(node.expression),
                });
            // Template Literals
            case SyntaxKind.NoSubstitutionTemplateLiteral: {
                const rawText = this.ast.text.slice(node.getStart(this.ast) + 1, node.end - 1);
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TemplateLiteral,
                    expressions: [],
                    quasis: [
                        this.createNode(node, {
                            type: ts_estree_1.AST_NODE_TYPES.TemplateElement,
                            tail: true,
                            value: {
                                cooked: node.parent.kind === SyntaxKind.TaggedTemplateExpression &&
                                    !this.#isValidEscape(rawText)
                                    ? null
                                    : node.text,
                                raw: rawText,
                            },
                        }),
                    ],
                });
            }
            case SyntaxKind.TemplateExpression: {
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TemplateLiteral,
                    expressions: [],
                    quasis: [this.convertChild(node.head)],
                });
                node.templateSpans.forEach(templateSpan => {
                    result.expressions.push(this.convertChild(templateSpan.expression));
                    result.quasis.push(this.convertChild(templateSpan.literal));
                });
                return result;
            }
            case SyntaxKind.TaggedTemplateExpression: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TaggedTemplateExpression,
                    quasi: this.convertChild(node.template),
                    tag: this.convertChild(node.tag),
                    typeArguments: this.convertTypeArguments(node),
                });
            }
            case SyntaxKind.TemplateHead:
            case SyntaxKind.TemplateMiddle:
            case SyntaxKind.TemplateTail: {
                const tail = node.kind === SyntaxKind.TemplateTail;
                const rawText = this.ast.text.slice(node.getStart(this.ast) + 1, node.end - (tail ? 1 : 2));
                const isTagged = node.kind === SyntaxKind.TemplateHead
                    ? node.parent.parent.kind === SyntaxKind.TaggedTemplateExpression
                    : node.parent.parent.parent.kind ===
                        SyntaxKind.TaggedTemplateExpression;
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TemplateElement,
                    tail,
                    value: {
                        cooked: isTagged && !this.#isValidEscape(rawText) ? null : node.text,
                        raw: rawText,
                    },
                });
            }
            // Patterns
            case SyntaxKind.SpreadAssignment:
            case SyntaxKind.SpreadElement: {
                if (this.allowPattern) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.RestElement,
                        argument: this.convertPattern(node.expression),
                        decorators: [],
                        optional: false,
                        typeAnnotation: undefined,
                        value: undefined,
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.SpreadElement,
                    argument: this.convertChild(node.expression),
                });
            }
            case SyntaxKind.Parameter: {
                let parameter;
                let result;
                if (node.dotDotDotToken) {
                    parameter = result = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.RestElement,
                        argument: this.convertChild(node.name),
                        decorators: [],
                        optional: false,
                        typeAnnotation: undefined,
                        value: undefined,
                    });
                }
                else if (node.initializer) {
                    parameter = this.convertChild(node.name);
                    result = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.AssignmentPattern,
                        range: [node.name.getStart(this.ast), node.initializer.end],
                        decorators: [],
                        left: parameter,
                        optional: false,
                        right: this.convertChild(node.initializer),
                        typeAnnotation: undefined,
                    });
                    const modifiers = (0, getModifiers_1.getModifiers)(node);
                    if (modifiers) {
                        // AssignmentPattern should not contain modifiers in range
                        result.range[0] = parameter.range[0];
                        result.loc = (0, node_utils_1.getLocFor)(result.range, this.ast);
                    }
                }
                else {
                    parameter = result = this.convertChild(node.name, parent);
                }
                if (node.type) {
                    parameter.typeAnnotation = this.convertTypeAnnotation(node.type, node);
                    this.fixParentLocation(parameter, parameter.typeAnnotation.range);
                }
                if (node.questionToken) {
                    if (node.questionToken.end > parameter.range[1]) {
                        parameter.range[1] = node.questionToken.end;
                        parameter.loc.end = (0, node_utils_1.getLineAndCharacterFor)(parameter.range[1], this.ast);
                    }
                    parameter.optional = true;
                }
                const modifiers = (0, getModifiers_1.getModifiers)(node);
                if (modifiers) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.TSParameterProperty,
                        accessibility: (0, node_utils_1.getTSNodeAccessibility)(node),
                        decorators: [],
                        override: (0, node_utils_1.hasModifier)(SyntaxKind.OverrideKeyword, node),
                        parameter: result,
                        readonly: (0, node_utils_1.hasModifier)(SyntaxKind.ReadonlyKeyword, node),
                        static: (0, node_utils_1.hasModifier)(SyntaxKind.StaticKeyword, node),
                    });
                }
                return result;
            }
            // Classes
            case SyntaxKind.ClassDeclaration:
            case SyntaxKind.ClassExpression: {
                const classNodeType = node.kind === SyntaxKind.ClassDeclaration
                    ? ts_estree_1.AST_NODE_TYPES.ClassDeclaration
                    : ts_estree_1.AST_NODE_TYPES.ClassExpression;
                const extendsClause = node.heritageClauses?.find(heritageClause => heritageClause.token === SyntaxKind.ExtendsKeyword);
                const implementsClause = node.heritageClauses?.find(heritageClause => heritageClause.token === SyntaxKind.ImplementsKeyword);
                const result = this.createNode(node, {
                    type: classNodeType,
                    abstract: (0, node_utils_1.hasModifier)(SyntaxKind.AbstractKeyword, node),
                    body: this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.ClassBody,
                        range: [node.members.pos - 1, node.end],
                        body: this.convertChildren(node.members.filter(node_utils_1.isESTreeClassMember)),
                    }),
                    declare: (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node),
                    decorators: this.convertChildren((0, getModifiers_1.getDecorators)(node) ?? []),
                    id: this.convertChild(node.name),
                    implements: this.convertChildren(implementsClause?.types ?? []),
                    superClass: extendsClause?.types[0]
                        ? this.convertChild(extendsClause.types[0].expression)
                        : null,
                    superTypeArguments: undefined,
                    typeParameters: this.convertTypeParameters(node),
                });
                if (extendsClause?.types[0]?.typeArguments) {
                    result.superTypeArguments = this.convertTypeArguments(extendsClause.types[0]);
                }
                return this.fixExports(node, result);
            }
            // Modules
            case SyntaxKind.ModuleBlock:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSModuleBlock,
                    body: this.convertBodyExpressions(node.statements, node),
                });
            case SyntaxKind.ImportDeclaration: {
                const result = this.createNode(node, this.#withDeprecatedAliasGetter({
                    type: ts_estree_1.AST_NODE_TYPES.ImportDeclaration,
                    attributes: this.convertImportAttributes(node),
                    importKind: 'value',
                    source: this.convertChild(node.moduleSpecifier),
                    specifiers: [],
                }, 'assertions', 'attributes', true));
                if (node.importClause) {
                    // TODO(bradzacher) swap to `phaseModifier` once we add support for `import defer`
                    // https://github.com/estree/estree/issues/328
                    // eslint-disable-next-line @typescript-eslint/no-deprecated
                    if (node.importClause.isTypeOnly) {
                        result.importKind = 'type';
                    }
                    if (node.importClause.name) {
                        result.specifiers.push(this.convertChild(node.importClause));
                    }
                    if (node.importClause.namedBindings) {
                        switch (node.importClause.namedBindings.kind) {
                            case SyntaxKind.NamespaceImport:
                                result.specifiers.push(this.convertChild(node.importClause.namedBindings));
                                break;
                            case SyntaxKind.NamedImports:
                                result.specifiers.push(...this.convertChildren(node.importClause.namedBindings.elements));
                                break;
                        }
                    }
                }
                return result;
            }
            case SyntaxKind.NamespaceImport:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ImportNamespaceSpecifier,
                    local: this.convertChild(node.name),
                });
            case SyntaxKind.ImportSpecifier:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ImportSpecifier,
                    imported: this.convertChild(node.propertyName ?? node.name),
                    importKind: node.isTypeOnly ? 'type' : 'value',
                    local: this.convertChild(node.name),
                });
            case SyntaxKind.ImportClause: {
                const local = this.convertChild(node.name);
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ImportDefaultSpecifier,
                    range: local.range,
                    local,
                });
            }
            case SyntaxKind.ExportDeclaration: {
                if (node.exportClause?.kind === SyntaxKind.NamedExports) {
                    return this.createNode(node, this.#withDeprecatedAliasGetter({
                        type: ts_estree_1.AST_NODE_TYPES.ExportNamedDeclaration,
                        attributes: this.convertImportAttributes(node),
                        declaration: null,
                        exportKind: node.isTypeOnly ? 'type' : 'value',
                        source: this.convertChild(node.moduleSpecifier),
                        specifiers: this.convertChildren(node.exportClause.elements, node),
                    }, 'assertions', 'attributes', true));
                }
                return this.createNode(node, this.#withDeprecatedAliasGetter({
                    type: ts_estree_1.AST_NODE_TYPES.ExportAllDeclaration,
                    attributes: this.convertImportAttributes(node),
                    exported: node.exportClause?.kind === SyntaxKind.NamespaceExport
                        ? this.convertChild(node.exportClause.name)
                        : null,
                    exportKind: node.isTypeOnly ? 'type' : 'value',
                    source: this.convertChild(node.moduleSpecifier),
                }, 'assertions', 'attributes', true));
            }
            case SyntaxKind.ExportSpecifier: {
                const local = node.propertyName ?? node.name;
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ExportSpecifier,
                    exported: this.convertChild(node.name),
                    exportKind: node.isTypeOnly ? 'type' : 'value',
                    local: this.convertChild(local),
                });
            }
            case SyntaxKind.ExportAssignment:
                if (node.isExportEquals) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.TSExportAssignment,
                        expression: this.convertChild(node.expression),
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ExportDefaultDeclaration,
                    declaration: this.convertChild(node.expression),
                    exportKind: 'value',
                });
            // Unary Operations
            case SyntaxKind.PrefixUnaryExpression:
            case SyntaxKind.PostfixUnaryExpression: {
                const operator = (0, node_utils_1.getTextForTokenKind)(node.operator);
                /**
                 * ESTree uses UpdateExpression for ++/--
                 */
                if (operator === '++' || operator === '--') {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.UpdateExpression,
                        argument: this.convertChild(node.operand),
                        operator,
                        prefix: node.kind === SyntaxKind.PrefixUnaryExpression,
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.UnaryExpression,
                    argument: this.convertChild(node.operand),
                    operator,
                    prefix: node.kind === SyntaxKind.PrefixUnaryExpression,
                });
            }
            case SyntaxKind.DeleteExpression:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.UnaryExpression,
                    argument: this.convertChild(node.expression),
                    operator: 'delete',
                    prefix: true,
                });
            case SyntaxKind.VoidExpression:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.UnaryExpression,
                    argument: this.convertChild(node.expression),
                    operator: 'void',
                    prefix: true,
                });
            case SyntaxKind.TypeOfExpression:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.UnaryExpression,
                    argument: this.convertChild(node.expression),
                    operator: 'typeof',
                    prefix: true,
                });
            case SyntaxKind.TypeOperator:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypeOperator,
                    operator: (0, node_utils_1.getTextForTokenKind)(node.operator),
                    typeAnnotation: this.convertChild(node.type),
                });
            // Binary Operations
            case SyntaxKind.BinaryExpression: {
                // TypeScript uses BinaryExpression for sequences as well
                if ((0, node_utils_1.isComma)(node.operatorToken)) {
                    const result = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.SequenceExpression,
                        expressions: [],
                    });
                    const left = this.convertChild(node.left);
                    if (left.type === ts_estree_1.AST_NODE_TYPES.SequenceExpression &&
                        node.left.kind !== SyntaxKind.ParenthesizedExpression) {
                        result.expressions.push(...left.expressions);
                    }
                    else {
                        result.expressions.push(left);
                    }
                    result.expressions.push(this.convertChild(node.right));
                    return result;
                }
                const expressionType = (0, node_utils_1.getBinaryExpressionType)(node.operatorToken);
                if (this.allowPattern &&
                    expressionType.type === ts_estree_1.AST_NODE_TYPES.AssignmentExpression) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.AssignmentPattern,
                        decorators: [],
                        left: this.convertPattern(node.left, node),
                        optional: false,
                        right: this.convertChild(node.right),
                        typeAnnotation: undefined,
                    });
                }
                return this.createNode(node, {
                    ...expressionType,
                    left: this.converter(node.left, node, expressionType.type === ts_estree_1.AST_NODE_TYPES.AssignmentExpression),
                    right: this.convertChild(node.right),
                });
            }
            case SyntaxKind.PropertyAccessExpression: {
                const object = this.convertChild(node.expression);
                const property = this.convertChild(node.name);
                const computed = false;
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.MemberExpression,
                    computed,
                    object,
                    optional: node.questionDotToken != null,
                    property,
                });
                return this.convertChainExpression(result, node);
            }
            case SyntaxKind.ElementAccessExpression: {
                const object = this.convertChild(node.expression);
                const property = this.convertChild(node.argumentExpression);
                const computed = true;
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.MemberExpression,
                    computed,
                    object,
                    optional: node.questionDotToken != null,
                    property,
                });
                return this.convertChainExpression(result, node);
            }
            case SyntaxKind.CallExpression: {
                if (node.expression.kind === SyntaxKind.ImportKeyword) {
                    return this.createNode(node, this.#withDeprecatedAliasGetter({
                        type: ts_estree_1.AST_NODE_TYPES.ImportExpression,
                        options: node.arguments[1]
                            ? this.convertChild(node.arguments[1])
                            : null,
                        source: this.convertChild(node.arguments[0]),
                    }, 'attributes', 'options', true));
                }
                const callee = this.convertChild(node.expression);
                const args = this.convertChildren(node.arguments);
                const typeArguments = this.convertTypeArguments(node);
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.CallExpression,
                    arguments: args,
                    callee,
                    optional: node.questionDotToken != null,
                    typeArguments,
                });
                return this.convertChainExpression(result, node);
            }
            case SyntaxKind.NewExpression: {
                const typeArguments = this.convertTypeArguments(node);
                // NOTE - NewExpression cannot have an optional chain in it
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.NewExpression,
                    arguments: this.convertChildren(node.arguments ?? []),
                    callee: this.convertChild(node.expression),
                    typeArguments,
                });
            }
            case SyntaxKind.ConditionalExpression:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ConditionalExpression,
                    alternate: this.convertChild(node.whenFalse),
                    consequent: this.convertChild(node.whenTrue),
                    test: this.convertChild(node.condition),
                });
            case SyntaxKind.MetaProperty: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.MetaProperty,
                    meta: this.createNode(
                    // TODO: do we really want to convert it to Token?
                    node.getFirstToken(), {
                        type: ts_estree_1.AST_NODE_TYPES.Identifier,
                        decorators: [],
                        name: (0, node_utils_1.getTextForTokenKind)(node.keywordToken),
                        optional: false,
                        typeAnnotation: undefined,
                    }),
                    property: this.convertChild(node.name),
                });
            }
            case SyntaxKind.Decorator: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Decorator,
                    expression: this.convertChild(node.expression),
                });
            }
            // Literals
            case SyntaxKind.StringLiteral: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Literal,
                    raw: node.getText(),
                    value: parent.kind === SyntaxKind.JsxAttribute
                        ? (0, node_utils_1.unescapeStringLiteralText)(node.text)
                        : node.text,
                });
            }
            case SyntaxKind.NumericLiteral: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Literal,
                    raw: node.getText(),
                    value: Number(node.text),
                });
            }
            case SyntaxKind.BigIntLiteral: {
                const range = (0, node_utils_1.getRange)(node, this.ast);
                const rawValue = this.ast.text.slice(range[0], range[1]);
                const bigint = rawValue
                    // remove suffix `n`
                    .slice(0, -1)
                    // `BigInt` doesn't accept numeric separator
                    // and `bigint` property should not include numeric separator
                    .replaceAll('_', '');
                const value = typeof BigInt !== 'undefined' ? BigInt(bigint) : null;
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Literal,
                    range,
                    bigint: value == null ? bigint : String(value),
                    raw: rawValue,
                    value,
                });
            }
            case SyntaxKind.RegularExpressionLiteral: {
                const pattern = node.text.slice(1, node.text.lastIndexOf('/'));
                const flags = node.text.slice(node.text.lastIndexOf('/') + 1);
                let regex = null;
                try {
                    regex = new RegExp(pattern, flags);
                }
                catch {
                    // Intentionally blank, so regex stays null
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Literal,
                    raw: node.text,
                    regex: {
                        flags,
                        pattern,
                    },
                    value: regex,
                });
            }
            case SyntaxKind.TrueKeyword:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Literal,
                    raw: 'true',
                    value: true,
                });
            case SyntaxKind.FalseKeyword:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Literal,
                    raw: 'false',
                    value: false,
                });
            case SyntaxKind.NullKeyword: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.Literal,
                    raw: 'null',
                    value: null,
                });
            }
            case SyntaxKind.EmptyStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.EmptyStatement,
                });
            case SyntaxKind.DebuggerStatement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.DebuggerStatement,
                });
            // JSX
            case SyntaxKind.JsxElement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXElement,
                    children: this.convertChildren(node.children),
                    closingElement: this.convertChild(node.closingElement),
                    openingElement: this.convertChild(node.openingElement),
                });
            case SyntaxKind.JsxFragment:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXFragment,
                    children: this.convertChildren(node.children),
                    closingFragment: this.convertChild(node.closingFragment),
                    openingFragment: this.convertChild(node.openingFragment),
                });
            case SyntaxKind.JsxSelfClosingElement: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXElement,
                    /**
                     * Convert SyntaxKind.JsxSelfClosingElement to SyntaxKind.JsxOpeningElement,
                     * TypeScript does not seem to have the idea of openingElement when tag is self-closing
                     */
                    children: [],
                    closingElement: null,
                    openingElement: this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.JSXOpeningElement,
                        range: (0, node_utils_1.getRange)(node, this.ast),
                        attributes: this.convertChildren(node.attributes.properties),
                        name: this.convertJSXTagName(node.tagName, node),
                        selfClosing: true,
                        typeArguments: this.convertTypeArguments(node),
                    }),
                });
            }
            case SyntaxKind.JsxOpeningElement: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXOpeningElement,
                    attributes: this.convertChildren(node.attributes.properties),
                    name: this.convertJSXTagName(node.tagName, node),
                    selfClosing: false,
                    typeArguments: this.convertTypeArguments(node),
                });
            }
            case SyntaxKind.JsxClosingElement:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXClosingElement,
                    name: this.convertJSXTagName(node.tagName, node),
                });
            case SyntaxKind.JsxOpeningFragment:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXOpeningFragment,
                });
            case SyntaxKind.JsxClosingFragment:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXClosingFragment,
                });
            case SyntaxKind.JsxExpression: {
                const expression = node.expression
                    ? this.convertChild(node.expression)
                    : this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.JSXEmptyExpression,
                        range: [node.getStart(this.ast) + 1, node.getEnd() - 1],
                    });
                if (node.dotDotDotToken) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.JSXSpreadChild,
                        expression,
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXExpressionContainer,
                    expression,
                });
            }
            case SyntaxKind.JsxAttribute: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXAttribute,
                    name: this.convertJSXNamespaceOrIdentifier(node.name),
                    value: this.convertChild(node.initializer),
                });
            }
            case SyntaxKind.JsxText: {
                const start = node.getFullStart();
                const end = node.getEnd();
                const text = this.ast.text.slice(start, end);
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXText,
                    range: [start, end],
                    raw: text,
                    value: (0, node_utils_1.unescapeStringLiteralText)(text),
                });
            }
            case SyntaxKind.JsxSpreadAttribute:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.JSXSpreadAttribute,
                    argument: this.convertChild(node.expression),
                });
            case SyntaxKind.QualifiedName: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSQualifiedName,
                    left: this.convertChild(node.left),
                    right: this.convertChild(node.right),
                });
            }
            // TypeScript specific
            case SyntaxKind.TypeReference:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypeReference,
                    typeArguments: this.convertTypeArguments(node),
                    typeName: this.convertChild(node.typeName),
                });
            case SyntaxKind.TypeParameter: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypeParameter,
                    const: (0, node_utils_1.hasModifier)(SyntaxKind.ConstKeyword, node),
                    constraint: node.constraint && this.convertChild(node.constraint),
                    default: node.default ? this.convertChild(node.default) : undefined,
                    in: (0, node_utils_1.hasModifier)(SyntaxKind.InKeyword, node),
                    name: this.convertChild(node.name),
                    out: (0, node_utils_1.hasModifier)(SyntaxKind.OutKeyword, node),
                });
            }
            case SyntaxKind.ThisType:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSThisType,
                });
            case SyntaxKind.AnyKeyword:
            case SyntaxKind.BigIntKeyword:
            case SyntaxKind.BooleanKeyword:
            case SyntaxKind.NeverKeyword:
            case SyntaxKind.NumberKeyword:
            case SyntaxKind.ObjectKeyword:
            case SyntaxKind.StringKeyword:
            case SyntaxKind.SymbolKeyword:
            case SyntaxKind.UnknownKeyword:
            case SyntaxKind.VoidKeyword:
            case SyntaxKind.UndefinedKeyword:
            case SyntaxKind.IntrinsicKeyword: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES[`TS${SyntaxKind[node.kind]}`],
                });
            }
            case SyntaxKind.NonNullExpression: {
                const nnExpr = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSNonNullExpression,
                    expression: this.convertChild(node.expression),
                });
                return this.convertChainExpression(nnExpr, node);
            }
            case SyntaxKind.TypeLiteral: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypeLiteral,
                    members: this.convertChildren(node.members),
                });
            }
            case SyntaxKind.ArrayType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSArrayType,
                    elementType: this.convertChild(node.elementType),
                });
            }
            case SyntaxKind.IndexedAccessType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSIndexedAccessType,
                    indexType: this.convertChild(node.indexType),
                    objectType: this.convertChild(node.objectType),
                });
            }
            case SyntaxKind.ConditionalType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSConditionalType,
                    checkType: this.convertChild(node.checkType),
                    extendsType: this.convertChild(node.extendsType),
                    falseType: this.convertChild(node.falseType),
                    trueType: this.convertChild(node.trueType),
                });
            }
            case SyntaxKind.TypeQuery:
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypeQuery,
                    exprName: this.convertChild(node.exprName),
                    typeArguments: this.convertTypeArguments(node),
                });
            case SyntaxKind.MappedType: {
                return this.createNode(node, this.#withDeprecatedGetter({
                    type: ts_estree_1.AST_NODE_TYPES.TSMappedType,
                    constraint: this.convertChild(node.typeParameter.constraint),
                    key: this.convertChild(node.typeParameter.name),
                    nameType: this.convertChild(node.nameType) ?? null,
                    optional: node.questionToken
                        ? node.questionToken.kind === SyntaxKind.QuestionToken ||
                            (0, node_utils_1.getTextForTokenKind)(node.questionToken.kind)
                        : false,
                    readonly: node.readonlyToken
                        ? node.readonlyToken.kind === SyntaxKind.ReadonlyKeyword ||
                            (0, node_utils_1.getTextForTokenKind)(node.readonlyToken.kind)
                        : undefined,
                    typeAnnotation: node.type && this.convertChild(node.type),
                }, 'typeParameter', "'constraint' and 'key'", this.convertChild(node.typeParameter)));
            }
            case SyntaxKind.ParenthesizedExpression:
                return this.convertChild(node.expression, parent);
            case SyntaxKind.TypeAliasDeclaration: {
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypeAliasDeclaration,
                    declare: (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node),
                    id: this.convertChild(node.name),
                    typeAnnotation: this.convertChild(node.type),
                    typeParameters: this.convertTypeParameters(node),
                });
                return this.fixExports(node, result);
            }
            case SyntaxKind.MethodSignature: {
                return this.convertMethodSignature(node);
            }
            case SyntaxKind.PropertySignature: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSPropertySignature,
                    accessibility: (0, node_utils_1.getTSNodeAccessibility)(node),
                    computed: (0, node_utils_1.isComputedProperty)(node.name),
                    key: this.convertChild(node.name),
                    optional: (0, node_utils_1.isOptional)(node),
                    readonly: (0, node_utils_1.hasModifier)(SyntaxKind.ReadonlyKeyword, node),
                    static: (0, node_utils_1.hasModifier)(SyntaxKind.StaticKeyword, node),
                    typeAnnotation: node.type && this.convertTypeAnnotation(node.type, node),
                });
            }
            case SyntaxKind.IndexSignature: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSIndexSignature,
                    accessibility: (0, node_utils_1.getTSNodeAccessibility)(node),
                    parameters: this.convertChildren(node.parameters),
                    readonly: (0, node_utils_1.hasModifier)(SyntaxKind.ReadonlyKeyword, node),
                    static: (0, node_utils_1.hasModifier)(SyntaxKind.StaticKeyword, node),
                    typeAnnotation: node.type && this.convertTypeAnnotation(node.type, node),
                });
            }
            case SyntaxKind.ConstructorType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSConstructorType,
                    abstract: (0, node_utils_1.hasModifier)(SyntaxKind.AbstractKeyword, node),
                    params: this.convertParameters(node.parameters),
                    returnType: node.type && this.convertTypeAnnotation(node.type, node),
                    typeParameters: this.convertTypeParameters(node),
                });
            }
            case SyntaxKind.FunctionType:
            case SyntaxKind.ConstructSignature:
            case SyntaxKind.CallSignature: {
                const type = node.kind === SyntaxKind.ConstructSignature
                    ? ts_estree_1.AST_NODE_TYPES.TSConstructSignatureDeclaration
                    : node.kind === SyntaxKind.CallSignature
                        ? ts_estree_1.AST_NODE_TYPES.TSCallSignatureDeclaration
                        : ts_estree_1.AST_NODE_TYPES.TSFunctionType;
                return this.createNode(node, {
                    type,
                    params: this.convertParameters(node.parameters),
                    returnType: node.type && this.convertTypeAnnotation(node.type, node),
                    typeParameters: this.convertTypeParameters(node),
                });
            }
            case SyntaxKind.ExpressionWithTypeArguments: {
                const parentKind = parent.kind;
                const type = parentKind === SyntaxKind.InterfaceDeclaration
                    ? ts_estree_1.AST_NODE_TYPES.TSInterfaceHeritage
                    : parentKind === SyntaxKind.HeritageClause
                        ? ts_estree_1.AST_NODE_TYPES.TSClassImplements
                        : ts_estree_1.AST_NODE_TYPES.TSInstantiationExpression;
                return this.createNode(node, {
                    type,
                    expression: this.convertChild(node.expression),
                    typeArguments: this.convertTypeArguments(node),
                });
            }
            case SyntaxKind.InterfaceDeclaration: {
                const interfaceExtends = node.heritageClauses?.flatMap(heritageClause => 
                // `InterfaceDeclaration` can only have `extends`,
                // already checked in `check-syntax-errors.ts`,
                // However, `allowInvalidAST` allow to bypass the syntax check,
                // We'll just ignore clauses after other keywords
                heritageClause.token === SyntaxKind.ExtendsKeyword
                    ? heritageClause.types.map(heritageType => this.convertChild(heritageType, node))
                    : []) ?? [];
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSInterfaceDeclaration,
                    body: this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.TSInterfaceBody,
                        range: [node.members.pos - 1, node.end],
                        body: this.convertChildren(node.members),
                    }),
                    declare: (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node),
                    extends: interfaceExtends,
                    id: this.convertChild(node.name),
                    typeParameters: this.convertTypeParameters(node),
                });
                return this.fixExports(node, result);
            }
            case SyntaxKind.TypePredicate: {
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypePredicate,
                    asserts: node.assertsModifier != null,
                    parameterName: this.convertChild(node.parameterName),
                    typeAnnotation: null,
                });
                /**
                 * Specific fix for type-guard location data
                 */
                if (node.type) {
                    result.typeAnnotation = this.convertTypeAnnotation(node.type, node);
                    result.typeAnnotation.loc = result.typeAnnotation.typeAnnotation.loc;
                    result.typeAnnotation.range =
                        result.typeAnnotation.typeAnnotation.range;
                }
                return result;
            }
            case SyntaxKind.ImportType: {
                const range = (0, node_utils_1.getRange)(node, this.ast);
                if (node.isTypeOf) {
                    const token = (0, node_utils_1.findNextToken)(node.getFirstToken(), node, this.ast);
                    range[0] = token.getStart(this.ast);
                }
                let options = null;
                if (node.attributes) {
                    const value = this.createNode(node.attributes, {
                        type: ts_estree_1.AST_NODE_TYPES.ObjectExpression,
                        properties: node.attributes.elements.map(importAttribute => this.createNode(importAttribute, {
                            type: ts_estree_1.AST_NODE_TYPES.Property,
                            computed: false,
                            key: this.convertChild(importAttribute.name),
                            kind: 'init',
                            method: false,
                            optional: false,
                            shorthand: false,
                            value: this.convertChild(importAttribute.value),
                        })),
                    });
                    const commaToken = (0, node_utils_1.findNextToken)(node.argument, node, this.ast);
                    const openBraceToken = (0, node_utils_1.findNextToken)(commaToken, node, this.ast);
                    const tokenAfterAttributes = (0, node_utils_1.findNextToken)(node.attributes, node, this.ast);
                    // Since TS 5.9, there could be a trailing comma, i.e. `{ with: { ... }, }`
                    const closeBraceToken = tokenAfterAttributes.kind === ts.SyntaxKind.CommaToken
                        ? (0, node_utils_1.findNextToken)(tokenAfterAttributes, node, this.ast)
                        : tokenAfterAttributes;
                    const withOrAssertToken = (0, node_utils_1.findNextToken)(openBraceToken, node, this.ast);
                    const withOrAssertTokenRange = (0, node_utils_1.getRange)(withOrAssertToken, this.ast);
                    const withOrAssertName = withOrAssertToken.kind === ts.SyntaxKind.AssertKeyword
                        ? 'assert'
                        : 'with';
                    options = this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.ObjectExpression,
                        range: [openBraceToken.getStart(this.ast), closeBraceToken.end],
                        properties: [
                            this.createNode(node, {
                                type: ts_estree_1.AST_NODE_TYPES.Property,
                                range: [withOrAssertTokenRange[0], node.attributes.end],
                                computed: false,
                                key: this.createNode(node, {
                                    type: ts_estree_1.AST_NODE_TYPES.Identifier,
                                    range: withOrAssertTokenRange,
                                    decorators: [],
                                    name: withOrAssertName,
                                    optional: false,
                                    typeAnnotation: undefined,
                                }),
                                kind: 'init',
                                method: false,
                                optional: false,
                                shorthand: false,
                                value,
                            }),
                        ],
                    });
                }
                const argument = this.convertChild(node.argument);
                const source = argument.literal;
                const result = this.createNode(node, this.#withDeprecatedGetter({
                    type: ts_estree_1.AST_NODE_TYPES.TSImportType,
                    range,
                    options,
                    qualifier: this.convertChild(node.qualifier),
                    source,
                    typeArguments: this.convertTypeArguments(node) ?? null,
                }, 'argument', 'source', argument));
                if (node.isTypeOf) {
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.TSTypeQuery,
                        exprName: result,
                        typeArguments: undefined,
                    });
                }
                return result;
            }
            case SyntaxKind.EnumDeclaration: {
                const members = this.convertChildren(node.members);
                const result = this.createNode(node, this.#withDeprecatedGetter({
                    type: ts_estree_1.AST_NODE_TYPES.TSEnumDeclaration,
                    body: this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.TSEnumBody,
                        range: [node.members.pos - 1, node.end],
                        members,
                    }),
                    const: (0, node_utils_1.hasModifier)(SyntaxKind.ConstKeyword, node),
                    declare: (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node),
                    id: this.convertChild(node.name),
                }, 'members', `'body.members'`, this.convertChildren(node.members)));
                return this.fixExports(node, result);
            }
            case SyntaxKind.EnumMember: {
                const computed = node.name.kind === ts.SyntaxKind.ComputedPropertyName;
                return this.createNode(node, this.#withDeprecatedGetter({
                    type: ts_estree_1.AST_NODE_TYPES.TSEnumMember,
                    id: this.convertChild(node.name),
                    initializer: node.initializer && this.convertChild(node.initializer),
                }, 'computed', undefined, computed));
            }
            case SyntaxKind.ModuleDeclaration: {
                let isDeclare = (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node);
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSModuleDeclaration,
                    ...(() => {
                        if (node.flags & ts.NodeFlags.GlobalAugmentation) {
                            return {
                                body: this.convertChild(node.body),
                                declare: false,
                                global: false,
                                id: this.convertChild(node.name),
                                kind: 'global',
                            };
                        }
                        if (ts.isStringLiteral(node.name)) {
                            const body = this.convertChild(node.body);
                            return {
                                kind: 'module',
                                ...(body != null ? { body } : {}),
                                declare: false,
                                global: false,
                                id: this.convertChild(node.name),
                            };
                        }
                        // Nested module declarations are stored in TypeScript as nested tree nodes.
                        // We "unravel" them here by making our own nested TSQualifiedName,
                        // with the innermost node's body as the actual node body.
                        let name = this.createNode(node.name, {
                            type: ts_estree_1.AST_NODE_TYPES.Identifier,
                            range: [node.name.getStart(this.ast), node.name.getEnd()],
                            decorators: [],
                            name: node.name.text,
                            optional: false,
                            typeAnnotation: undefined,
                        });
                        while (node.body &&
                            ts.isModuleDeclaration(node.body) &&
                            node.body.name) {
                            node = node.body;
                            isDeclare ||= (0, node_utils_1.hasModifier)(SyntaxKind.DeclareKeyword, node);
                            const nextName = node.name;
                            const right = this.createNode(nextName, {
                                type: ts_estree_1.AST_NODE_TYPES.Identifier,
                                range: [nextName.getStart(this.ast), nextName.getEnd()],
                                decorators: [],
                                name: nextName.text,
                                optional: false,
                                typeAnnotation: undefined,
                            });
                            name = this.createNode(nextName, {
                                type: ts_estree_1.AST_NODE_TYPES.TSQualifiedName,
                                range: [name.range[0], right.range[1]],
                                left: name,
                                right,
                            });
                        }
                        return {
                            body: this.convertChild(node.body),
                            declare: false,
                            global: false,
                            id: name,
                            kind: node.flags & ts.NodeFlags.Namespace ? 'namespace' : 'module',
                        };
                    })(),
                });
                result.declare = isDeclare;
                if (node.flags & ts.NodeFlags.GlobalAugmentation) {
                    // eslint-disable-next-line @typescript-eslint/no-deprecated
                    result.global = true;
                }
                return this.fixExports(node, result);
            }
            // TypeScript specific types
            case SyntaxKind.ParenthesizedType: {
                return this.convertChild(node.type);
            }
            case SyntaxKind.UnionType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSUnionType,
                    types: this.convertChildren(node.types),
                });
            }
            case SyntaxKind.IntersectionType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSIntersectionType,
                    types: this.convertChildren(node.types),
                });
            }
            case SyntaxKind.AsExpression: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSAsExpression,
                    expression: this.convertChild(node.expression),
                    typeAnnotation: this.convertChild(node.type),
                });
            }
            case SyntaxKind.InferType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSInferType,
                    typeParameter: this.convertChild(node.typeParameter),
                });
            }
            case SyntaxKind.LiteralType: {
                if (node.literal.kind === SyntaxKind.NullKeyword) {
                    // 4.0 started nesting null types inside a LiteralType node
                    // but our AST is designed around the old way of null being a keyword
                    return this.createNode(node.literal, {
                        type: ts_estree_1.AST_NODE_TYPES.TSNullKeyword,
                    });
                }
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSLiteralType,
                    literal: this.convertChild(node.literal),
                });
            }
            case SyntaxKind.TypeAssertionExpression: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTypeAssertion,
                    expression: this.convertChild(node.expression),
                    typeAnnotation: this.convertChild(node.type),
                });
            }
            case SyntaxKind.ImportEqualsDeclaration: {
                return this.fixExports(node, this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSImportEqualsDeclaration,
                    id: this.convertChild(node.name),
                    importKind: node.isTypeOnly ? 'type' : 'value',
                    moduleReference: this.convertChild(node.moduleReference),
                }));
            }
            case SyntaxKind.ExternalModuleReference: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSExternalModuleReference,
                    expression: this.convertChild(node.expression),
                });
            }
            case SyntaxKind.NamespaceExportDeclaration: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSNamespaceExportDeclaration,
                    id: this.convertChild(node.name),
                });
            }
            case SyntaxKind.AbstractKeyword: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSAbstractKeyword,
                });
            }
            // Tuple
            case SyntaxKind.TupleType: {
                const elementTypes = this.convertChildren(node.elements);
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTupleType,
                    elementTypes,
                });
            }
            case SyntaxKind.NamedTupleMember: {
                const member = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSNamedTupleMember,
                    elementType: this.convertChild(node.type, node),
                    label: this.convertChild(node.name, node),
                    optional: node.questionToken != null,
                });
                if (node.dotDotDotToken) {
                    // adjust the start to account for the "..."
                    member.range[0] = member.label.range[0];
                    member.loc.start = member.label.loc.start;
                    return this.createNode(node, {
                        type: ts_estree_1.AST_NODE_TYPES.TSRestType,
                        typeAnnotation: member,
                    });
                }
                return member;
            }
            case SyntaxKind.OptionalType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSOptionalType,
                    typeAnnotation: this.convertChild(node.type),
                });
            }
            case SyntaxKind.RestType: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSRestType,
                    typeAnnotation: this.convertChild(node.type),
                });
            }
            // Template Literal Types
            case SyntaxKind.TemplateLiteralType: {
                const result = this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSTemplateLiteralType,
                    quasis: [this.convertChild(node.head)],
                    types: [],
                });
                node.templateSpans.forEach(templateSpan => {
                    result.types.push(this.convertChild(templateSpan.type));
                    result.quasis.push(this.convertChild(templateSpan.literal));
                });
                return result;
            }
            case SyntaxKind.ClassStaticBlockDeclaration: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.StaticBlock,
                    body: this.convertBodyExpressions(node.body.statements, node),
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-deprecated
            case SyntaxKind.AssertEntry:
            case SyntaxKind.ImportAttribute: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ImportAttribute,
                    key: this.convertChild(node.name),
                    value: this.convertChild(node.value),
                });
            }
            case SyntaxKind.SatisfiesExpression: {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.TSSatisfiesExpression,
                    expression: this.convertChild(node.expression),
                    typeAnnotation: this.convertChild(node.type),
                });
            }
            default:
                return this.deeplyCopy(node);
        }
    }
    createNode(node, data) {
        const result = data;
        result.range ??= (0, node_utils_1.getRange)(node, this.ast);
        result.loc ??= (0, node_utils_1.getLocFor)(result.range, this.ast);
        if (result && this.options.shouldPreserveNodeMaps) {
            this.esTreeNodeToTSNodeMap.set(result, node);
        }
        return result;
    }
    convertProgram() {
        return this.converter(this.ast);
    }
    /**
     * For nodes that are copied directly from the TypeScript AST into
     * ESTree mostly as-is. The only difference is the addition of a type
     * property instead of a kind property. Recursively copies all children.
     */
    deeplyCopy(node) {
        if (node.kind === ts.SyntaxKind.JSDocFunctionType) {
            this.#throwError(node, 'JSDoc types can only be used inside documentation comments.');
        }
        const customType = `TS${SyntaxKind[node.kind]}`;
        /**
         * If the "errorOnUnknownASTType" option is set to true, throw an error,
         * otherwise fallback to just including the unknown type as-is.
         */
        if (this.options.errorOnUnknownASTType && !ts_estree_1.AST_NODE_TYPES[customType]) {
            throw new Error(`Unknown AST_NODE_TYPE: "${customType}"`);
        }
        const result = this.createNode(node, {
            type: customType,
        });
        if ('type' in node) {
            result.typeAnnotation =
                node.type && 'kind' in node.type && ts.isTypeNode(node.type)
                    ? this.convertTypeAnnotation(node.type, node)
                    : null;
        }
        if ('typeArguments' in node) {
            result.typeArguments =
                node.typeArguments && 'pos' in node.typeArguments
                    ? this.convertTypeArguments(node)
                    : null;
        }
        if ('typeParameters' in node) {
            result.typeParameters =
                node.typeParameters && 'pos' in node.typeParameters
                    ? // @ts-expect-error -- Fix me
                        this.convertTypeParameters(node)
                    : null;
        }
        const decorators = (0, getModifiers_1.getDecorators)(node);
        if (decorators?.length) {
            result.decorators = this.convertChildren(decorators);
        }
        // keys we never want to clone from the base typescript node as they
        // introduce garbage into our AST
        const KEYS_TO_NOT_COPY = new Set([
            '_children',
            'decorators',
            'end',
            'flags',
            'heritageClauses',
            'illegalDecorators',
            'jsDoc',
            'kind',
            'locals',
            'localSymbol',
            'modifierFlagsCache',
            'modifiers',
            'nextContainer',
            'parent',
            'pos',
            'symbol',
            'transformFlags',
            'type',
            'typeArguments',
            'typeParameters',
        ]);
        Object.entries(node)
            .filter(([key]) => !KEYS_TO_NOT_COPY.has(key))
            .forEach(([key, value]) => {
            if (Array.isArray(value)) {
                result[key] = this.convertChildren(value);
            }
            else if (value && typeof value === 'object' && value.kind) {
                // need to check node[key].kind to ensure we don't try to convert a symbol
                result[key] = this.convertChild(value);
            }
            else {
                result[key] = value;
            }
        });
        return result;
    }
    /**
     * Fixes the exports of the given ts.Node
     * @returns the ESTreeNode with fixed exports
     */
    fixExports(node, result) {
        const isNamespaceNode = ts.isModuleDeclaration(node) && !ts.isStringLiteral(node.name);
        const modifiers = isNamespaceNode
            ? (0, node_utils_1.getNamespaceModifiers)(node)
            : (0, getModifiers_1.getModifiers)(node);
        if (modifiers?.[0].kind === SyntaxKind.ExportKeyword) {
            /**
             * Make sure that original node is registered instead of export
             */
            this.registerTSNodeInNodeMap(node, result);
            const exportKeyword = modifiers[0];
            const nextModifier = modifiers[1];
            const declarationIsDefault = nextModifier?.kind === SyntaxKind.DefaultKeyword;
            const varToken = declarationIsDefault
                ? (0, node_utils_1.findNextToken)(nextModifier, this.ast, this.ast)
                : (0, node_utils_1.findNextToken)(exportKeyword, this.ast, this.ast);
            result.range[0] = varToken.getStart(this.ast);
            result.loc = (0, node_utils_1.getLocFor)(result.range, this.ast);
            if (declarationIsDefault) {
                return this.createNode(node, {
                    type: ts_estree_1.AST_NODE_TYPES.ExportDefaultDeclaration,
                    range: [exportKeyword.getStart(this.ast), result.range[1]],
                    declaration: result,
                    exportKind: 'value',
                });
            }
            const isType = result.type === ts_estree_1.AST_NODE_TYPES.TSInterfaceDeclaration ||
                result.type === ts_estree_1.AST_NODE_TYPES.TSTypeAliasDeclaration;
            const isDeclare = 'declare' in result && result.declare;
            return this.createNode(node, 
            // @ts-expect-error - TODO, narrow the types here
            this.#withDeprecatedAliasGetter({
                type: ts_estree_1.AST_NODE_TYPES.ExportNamedDeclaration,
                range: [exportKeyword.getStart(this.ast), result.range[1]],
                attributes: [],
                declaration: result,
                exportKind: isType || isDeclare ? 'type' : 'value',
                source: null,
                specifiers: [],
            }, 'assertions', 'attributes', true));
        }
        return result;
    }
    getASTMaps() {
        return {
            esTreeNodeToTSNodeMap: this.esTreeNodeToTSNodeMap,
            tsNodeToESTreeNodeMap: this.tsNodeToESTreeNodeMap,
        };
    }
    /**
     * Register specific TypeScript node into map with first ESTree node provided
     */
    registerTSNodeInNodeMap(node, result) {
        if (result &&
            this.options.shouldPreserveNodeMaps &&
            !this.tsNodeToESTreeNodeMap.has(node)) {
            this.tsNodeToESTreeNodeMap.set(node, result);
        }
    }
}
exports.Converter = Converter;
