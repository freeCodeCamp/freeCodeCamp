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
const getParentFunctionNode_1 = require("../util/getParentFunctionNode");
exports.default = (0, util_1.createRule)({
    name: 'no-confusing-void-expression',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require expressions of type void to appear in statement position',
            recommended: 'strict',
            requiresTypeChecking: true,
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            invalidVoidExpr: 'Placing a void expression inside another expression is forbidden. ' +
                'Move it to its own statement instead.',
            invalidVoidExprArrow: 'Returning a void expression from an arrow function shorthand is forbidden. ' +
                'Please add braces to the arrow function.',
            invalidVoidExprArrowWrapVoid: 'Void expressions returned from an arrow function shorthand ' +
                'must be marked explicitly with the `void` operator.',
            invalidVoidExprReturn: 'Returning a void expression from a function is forbidden. ' +
                'Please move it before the `return` statement.',
            invalidVoidExprReturnLast: 'Returning a void expression from a function is forbidden. ' +
                'Please remove the `return` statement.',
            invalidVoidExprReturnWrapVoid: 'Void expressions returned from a function ' +
                'must be marked explicitly with the `void` operator.',
            invalidVoidExprWrapVoid: 'Void expressions used inside another expression ' +
                'must be moved to its own statement ' +
                'or marked explicitly with the `void` operator.',
            voidExprWrapVoid: 'Mark with an explicit `void` operator.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreArrowShorthand: {
                        type: 'boolean',
                        description: 'Whether to ignore "shorthand" `() =>` arrow functions: those without `{ ... }` braces.',
                    },
                    ignoreVoidOperator: {
                        type: 'boolean',
                        description: 'Whether to ignore returns that start with the `void` operator.',
                    },
                    ignoreVoidReturningFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore returns from functions with explicit `void` return types and functions with contextual `void` return types.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            ignoreArrowShorthand: false,
            ignoreVoidOperator: false,
            ignoreVoidReturningFunctions: false,
        },
    ],
    create(context, [options]) {
        const services = (0, util_1.getParserServices)(context);
        return {
            'AwaitExpression, CallExpression, TaggedTemplateExpression'(node) {
                const invalidAncestor = findInvalidAncestor(node);
                if (invalidAncestor == null) {
                    // void expression is in valid position
                    return;
                }
                const type = (0, util_1.getConstrainedTypeAtLocation)(services, node);
                if (!tsutils.isTypeFlagSet(type, ts.TypeFlags.VoidLike)) {
                    // not a void expression
                    return;
                }
                const wrapVoidFix = (fixer) => {
                    const nodeText = context.sourceCode.getText(node);
                    const newNodeText = `void ${nodeText}`;
                    return fixer.replaceText(node, newNodeText);
                };
                if (invalidAncestor.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression) {
                    // handle arrow function shorthand
                    if (options.ignoreVoidReturningFunctions) {
                        const returnsVoid = isVoidReturningFunctionNode(invalidAncestor);
                        if (returnsVoid) {
                            return;
                        }
                    }
                    if (options.ignoreVoidOperator) {
                        // handle wrapping with `void`
                        return context.report({
                            node,
                            messageId: 'invalidVoidExprArrowWrapVoid',
                            fix: wrapVoidFix,
                        });
                    }
                    // handle wrapping with braces
                    const arrowFunction = invalidAncestor;
                    return context.report({
                        node,
                        messageId: 'invalidVoidExprArrow',
                        fix(fixer) {
                            if (!canFix(arrowFunction)) {
                                return null;
                            }
                            const arrowToken = (0, util_1.nullThrows)(context.sourceCode.getTokenBefore(arrowFunction.body, {
                                filter: token => token.value === '=>',
                            }), util_1.NullThrowsReasons.MissingToken('arrow token', 'before arrow function body'));
                            return [
                                fixer.replaceTextRange([arrowToken.range[1], arrowFunction.body.range[0]], ' { '),
                                fixer.replaceTextRange([arrowFunction.body.range[1], arrowFunction.range[1]], '; }'),
                            ];
                        },
                    });
                }
                if (invalidAncestor.type === utils_1.AST_NODE_TYPES.ReturnStatement) {
                    // handle return statement
                    if (options.ignoreVoidReturningFunctions) {
                        const functionNode = (0, getParentFunctionNode_1.getParentFunctionNode)(invalidAncestor);
                        if (functionNode) {
                            const returnsVoid = isVoidReturningFunctionNode(functionNode);
                            if (returnsVoid) {
                                return;
                            }
                        }
                    }
                    if (options.ignoreVoidOperator) {
                        // handle wrapping with `void`
                        return context.report({
                            node,
                            messageId: 'invalidVoidExprReturnWrapVoid',
                            fix: wrapVoidFix,
                        });
                    }
                    if (isFinalReturn(invalidAncestor)) {
                        // remove the `return` keyword
                        return context.report({
                            node,
                            messageId: 'invalidVoidExprReturnLast',
                            fix(fixer) {
                                if (!canFix(invalidAncestor)) {
                                    return null;
                                }
                                const returnValue = invalidAncestor.argument;
                                const returnValueText = context.sourceCode.getText(returnValue);
                                let newReturnStmtText = `${returnValueText};`;
                                if (isPreventingASI(returnValue)) {
                                    // put a semicolon at the beginning of the line
                                    newReturnStmtText = `;${newReturnStmtText}`;
                                }
                                return fixer.replaceText(invalidAncestor, newReturnStmtText);
                            },
                        });
                    }
                    // move before the `return` keyword
                    return context.report({
                        node,
                        messageId: 'invalidVoidExprReturn',
                        fix(fixer) {
                            const returnValue = invalidAncestor.argument;
                            const returnValueText = context.sourceCode.getText(returnValue);
                            let newReturnStmtText = `${returnValueText}; return;`;
                            if (isPreventingASI(returnValue)) {
                                // put a semicolon at the beginning of the line
                                newReturnStmtText = `;${newReturnStmtText}`;
                            }
                            if (invalidAncestor.parent.type !== utils_1.AST_NODE_TYPES.BlockStatement) {
                                // e.g. `if (cond) return console.error();`
                                // add braces if not inside a block
                                newReturnStmtText = `{ ${newReturnStmtText} }`;
                            }
                            return fixer.replaceText(invalidAncestor, newReturnStmtText);
                        },
                    });
                }
                // handle generic case
                if (options.ignoreVoidOperator) {
                    // this would be reported by this rule btw. such irony
                    return context.report({
                        node,
                        messageId: 'invalidVoidExprWrapVoid',
                        suggest: [{ messageId: 'voidExprWrapVoid', fix: wrapVoidFix }],
                    });
                }
                context.report({
                    node,
                    messageId: 'invalidVoidExpr',
                });
            },
        };
        /**
         * Inspects the void expression's ancestors and finds closest invalid one.
         * By default anything other than an ExpressionStatement is invalid.
         * Parent expressions which can be used for their short-circuiting behavior
         * are ignored and their parents are checked instead.
         * @param node The void expression node to check.
         * @returns Invalid ancestor node if it was found. `null` otherwise.
         */
        function findInvalidAncestor(node) {
            const parent = node.parent;
            if (parent.type === utils_1.AST_NODE_TYPES.SequenceExpression &&
                node !== parent.expressions[parent.expressions.length - 1]) {
                return null;
            }
            if (parent.type === utils_1.AST_NODE_TYPES.ExpressionStatement) {
                // e.g. `{ console.log("foo"); }`
                // this is always valid
                return null;
            }
            if (parent.type === utils_1.AST_NODE_TYPES.LogicalExpression &&
                parent.right === node) {
                // e.g. `x && console.log(x)`
                // this is valid only if the next ancestor is valid
                return findInvalidAncestor(parent);
            }
            if (parent.type === utils_1.AST_NODE_TYPES.ConditionalExpression &&
                (parent.consequent === node || parent.alternate === node)) {
                // e.g. `cond ? console.log(true) : console.log(false)`
                // this is valid only if the next ancestor is valid
                return findInvalidAncestor(parent);
            }
            if (parent.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
                // e.g. `() => console.log("foo")`
                // this is valid with an appropriate option
                options.ignoreArrowShorthand) {
                return null;
            }
            if (parent.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                parent.operator === 'void' &&
                // e.g. `void console.log("foo")`
                // this is valid with an appropriate option
                options.ignoreVoidOperator) {
                return null;
            }
            if (parent.type === utils_1.AST_NODE_TYPES.ChainExpression) {
                // e.g. `console?.log('foo')`
                return findInvalidAncestor(parent);
            }
            // Any other parent is invalid.
            // We can assume a return statement will have an argument.
            return parent;
        }
        /** Checks whether the return statement is the last statement in a function body. */
        function isFinalReturn(node) {
            // the parent must be a block
            const block = node.parent;
            if (block.type !== utils_1.AST_NODE_TYPES.BlockStatement) {
                // e.g. `if (cond) return;` (not in a block)
                return false;
            }
            // the block's parent must be a function
            const blockParent = block.parent;
            if (![
                utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
                utils_1.AST_NODE_TYPES.FunctionDeclaration,
                utils_1.AST_NODE_TYPES.FunctionExpression,
            ].includes(blockParent.type)) {
                // e.g. `if (cond) { return; }`
                // not in a top-level function block
                return false;
            }
            // must be the last child of the block
            if (block.body.indexOf(node) < block.body.length - 1) {
                // not the last statement in the block
                return false;
            }
            return true;
        }
        /**
         * Checks whether the given node, if placed on its own line,
         * would prevent automatic semicolon insertion on the line before.
         *
         * This happens if the line begins with `(`, `[` or `` ` ``
         */
        function isPreventingASI(node) {
            const startToken = (0, util_1.nullThrows)(context.sourceCode.getFirstToken(node), util_1.NullThrowsReasons.MissingToken('first token', node.type));
            return ['(', '[', '`'].includes(startToken.value);
        }
        function canFix(node) {
            const targetNode = node.type === utils_1.AST_NODE_TYPES.ReturnStatement
                ? node.argument
                : node.body;
            const type = (0, util_1.getConstrainedTypeAtLocation)(services, targetNode);
            return tsutils.isTypeFlagSet(type, ts.TypeFlags.VoidLike);
        }
        function isFunctionReturnTypeIncludesVoid(functionType) {
            const callSignatures = tsutils.getCallSignaturesOfType(functionType);
            return callSignatures.some(signature => {
                const returnType = signature.getReturnType();
                return tsutils
                    .unionConstituents(returnType)
                    .some(tsutils.isIntrinsicVoidType);
            });
        }
        function isVoidReturningFunctionNode(functionNode) {
            // Game plan:
            //   - If the function node has a type annotation, check if it includes `void`.
            //     - If it does then the function is safe to return `void` expressions in.
            //   - Otherwise, check if the function is a function-expression or an arrow-function.
            //   -   If it is, get its contextual type and bail if we cannot.
            //   - Return based on whether the contextual type includes `void` or not
            if (functionNode.returnType) {
                const returnType = services.getTypeFromTypeNode(functionNode.returnType.typeAnnotation);
                return tsutils
                    .unionConstituents(returnType)
                    .some(tsutils.isIntrinsicVoidType);
            }
            if (functionNode.type !== utils_1.AST_NODE_TYPES.FunctionDeclaration) {
                const functionType = services.getContextualType(functionNode);
                if (functionType) {
                    return tsutils
                        .unionConstituents(functionType)
                        .some(isFunctionReturnTypeIncludesVoid);
                }
            }
            return false;
        }
    },
});
//# sourceMappingURL=no-confusing-void-expression.js.map