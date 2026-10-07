"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const explicitReturnTypeUtils_1 = require("../util/explicitReturnTypeUtils");
exports.default = (0, util_1.createRule)({
    name: 'explicit-function-return-type',
    meta: {
        type: 'problem',
        docs: {
            description: 'Require explicit return types on functions and class methods',
        },
        messages: {
            missingReturnType: 'Missing return type on function.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowConciseArrowFunctionExpressionsStartingWithVoid: {
                        type: 'boolean',
                        description: 'Whether to allow arrow functions that start with the `void` keyword.',
                    },
                    allowDirectConstAssertionInArrowFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore arrow functions immediately returning a `as const` value.',
                    },
                    allowedNames: {
                        type: 'array',
                        description: 'An array of function/method names that will not have their arguments or return values checked.',
                        items: {
                            type: 'string',
                        },
                    },
                    allowExpressions: {
                        type: 'boolean',
                        description: 'Whether to ignore function expressions (functions which are not part of a declaration).',
                    },
                    allowFunctionsWithoutTypeParameters: {
                        type: 'boolean',
                        description: "Whether to ignore functions that don't have generic type parameters.",
                    },
                    allowHigherOrderFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore functions immediately returning another function expression.',
                    },
                    allowIIFEs: {
                        type: 'boolean',
                        description: 'Whether to ignore immediately invoked function expressions (IIFEs).',
                    },
                    allowTypedFunctionExpressions: {
                        type: 'boolean',
                        description: 'Whether to ignore type annotations on the variable of function expressions.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowExpressions: false,
            allowFunctionsWithoutTypeParameters: false,
            allowHigherOrderFunctions: true,
            allowIIFEs: false,
            allowTypedFunctionExpressions: true,
        },
    ],
    create(context, [options]) {
        const functionInfoStack = [];
        function enterFunction(node) {
            functionInfoStack.push({
                node,
                returns: [],
            });
        }
        function popFunctionInfo(exitNodeType) {
            return (0, util_1.nullThrows)(functionInfoStack.pop(), `Stack should exist on ${exitNodeType} exit`);
        }
        function isAllowedFunction(node) {
            if (options.allowFunctionsWithoutTypeParameters && !node.typeParameters) {
                return true;
            }
            if (options.allowIIFEs && isIIFE(node)) {
                return true;
            }
            if (!options.allowedNames?.length) {
                return false;
            }
            if (node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression ||
                node.type === utils_1.AST_NODE_TYPES.FunctionExpression) {
                const parent = node.parent;
                let funcName;
                if (node.id?.name) {
                    funcName = node.id.name;
                }
                else {
                    switch (parent.type) {
                        case utils_1.AST_NODE_TYPES.VariableDeclarator: {
                            if (parent.id.type === utils_1.AST_NODE_TYPES.Identifier) {
                                funcName = parent.id.name;
                            }
                            break;
                        }
                        case utils_1.AST_NODE_TYPES.MethodDefinition:
                        case utils_1.AST_NODE_TYPES.PropertyDefinition:
                        case utils_1.AST_NODE_TYPES.Property: {
                            if (parent.key.type === utils_1.AST_NODE_TYPES.Identifier &&
                                !parent.computed) {
                                funcName = parent.key.name;
                            }
                            break;
                        }
                    }
                }
                if (!!funcName && options.allowedNames.includes(funcName)) {
                    return true;
                }
            }
            if (node.type === utils_1.AST_NODE_TYPES.FunctionDeclaration &&
                node.id &&
                options.allowedNames.includes(node.id.name)) {
                return true;
            }
            return false;
        }
        function isIIFE(node) {
            return node.parent.type === utils_1.AST_NODE_TYPES.CallExpression;
        }
        function exitFunctionExpression(node) {
            const info = popFunctionInfo('function expression');
            if (options.allowConciseArrowFunctionExpressionsStartingWithVoid &&
                node.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
                node.expression &&
                node.body.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
                node.body.operator === 'void') {
                return;
            }
            if (isAllowedFunction(node)) {
                return;
            }
            if (options.allowTypedFunctionExpressions &&
                ((0, explicitReturnTypeUtils_1.isValidFunctionExpressionReturnType)(node, options) ||
                    (0, explicitReturnTypeUtils_1.ancestorHasReturnType)(node))) {
                return;
            }
            (0, explicitReturnTypeUtils_1.checkFunctionReturnType)(info, options, context.sourceCode, loc => context.report({
                loc,
                node,
                messageId: 'missingReturnType',
            }));
        }
        return {
            'ArrowFunctionExpression, FunctionExpression, FunctionDeclaration': enterFunction,
            'ArrowFunctionExpression:exit': exitFunctionExpression,
            'FunctionDeclaration:exit'(node) {
                const info = popFunctionInfo('function declaration');
                if (isAllowedFunction(node)) {
                    return;
                }
                if (options.allowTypedFunctionExpressions && node.returnType) {
                    return;
                }
                (0, explicitReturnTypeUtils_1.checkFunctionReturnType)(info, options, context.sourceCode, loc => context.report({
                    loc,
                    node,
                    messageId: 'missingReturnType',
                }));
            },
            'FunctionExpression:exit': exitFunctionExpression,
            ReturnStatement(node) {
                functionInfoStack.at(-1)?.returns.push(node);
            },
        };
    },
});
//# sourceMappingURL=explicit-function-return-type.js.map