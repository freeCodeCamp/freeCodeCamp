"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const explicitReturnTypeUtils_1 = require("../util/explicitReturnTypeUtils");
exports.default = (0, util_1.createRule)({
    name: 'explicit-module-boundary-types',
    meta: {
        type: 'problem',
        docs: {
            description: "Require explicit return and argument types on exported functions' and classes' public class methods",
        },
        messages: {
            anyTypedArg: "Argument '{{name}}' should be typed with a non-any type.",
            anyTypedArgUnnamed: '{{type}} argument should be typed with a non-any type.',
            missingArgType: "Argument '{{name}}' should be typed.",
            missingArgTypeUnnamed: '{{type}} argument should be typed.',
            missingReturnType: 'Missing return type on function.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowArgumentsExplicitlyTypedAsAny: {
                        type: 'boolean',
                        description: 'Whether to ignore arguments that are explicitly typed as `any`.',
                    },
                    allowDirectConstAssertionInArrowFunctions: {
                        type: 'boolean',
                        description: [
                            'Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.',
                            'You must still type the parameters of the function.',
                        ].join('\n'),
                    },
                    allowedNames: {
                        type: 'array',
                        description: 'An array of function/method names that will not have their arguments or return values checked.',
                        items: {
                            type: 'string',
                        },
                    },
                    allowHigherOrderFunctions: {
                        type: 'boolean',
                        description: [
                            'Whether to ignore return type annotations on functions immediately returning another function expression.',
                            'You must still type the parameters of the function.',
                        ].join('\n'),
                    },
                    allowOverloadFunctions: {
                        type: 'boolean',
                        description: 'Whether to ignore return type annotations on functions with overload signatures.',
                    },
                    allowTypedFunctionExpressions: {
                        type: 'boolean',
                        description: 'Whether to ignore type annotations on the variable of a function expression.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowOverloadFunctions: false,
            allowTypedFunctionExpressions: true,
        },
    ],
    create(context, [options]) {
        // tracks all of the functions we've already checked
        const checkedFunctions = new Set();
        const functionStack = [];
        const functionReturnsMap = new Map();
        // all nodes visited, avoids infinite recursion for cyclic references
        // (such as class member referring to itself)
        const alreadyVisited = new Set();
        function getReturnsInFunction(node) {
            return functionReturnsMap.get(node) ?? [];
        }
        function enterFunction(node) {
            functionStack.push(node);
            functionReturnsMap.set(node, []);
        }
        function exitFunction() {
            functionStack.pop();
        }
        /*
        # How the rule works:
    
        As the rule traverses the AST, it immediately checks every single function that it finds is exported.
        "exported" means that it is either directly exported, or that its name is exported.
    
        It also collects a list of every single function it finds on the way, but does not check them.
        After it's finished traversing the AST, it then iterates through the list of found functions, and checks to see if
        any of them are part of a higher-order function
        */
        return {
            'ArrowFunctionExpression, FunctionDeclaration, FunctionExpression': enterFunction,
            'ArrowFunctionExpression:exit': exitFunction,
            'ExportDefaultDeclaration:exit'(node) {
                checkNode(node.declaration);
            },
            'ExportNamedDeclaration:not([source]):exit'(node) {
                if (node.declaration) {
                    checkNode(node.declaration);
                }
                else {
                    for (const specifier of node.specifiers) {
                        followReference(specifier.local);
                    }
                }
            },
            'FunctionDeclaration:exit': exitFunction,
            'FunctionExpression:exit': exitFunction,
            'Program:exit'() {
                for (const [node, returns] of functionReturnsMap) {
                    if (isExportedHigherOrderFunction({ node, returns })) {
                        checkNode(node);
                    }
                }
            },
            ReturnStatement(node) {
                const current = functionStack[functionStack.length - 1];
                functionReturnsMap.get(current)?.push(node);
            },
            'TSExportAssignment:exit'(node) {
                checkNode(node.expression);
            },
        };
        function checkParameters(node) {
            function checkParameter(param) {
                function report(namedMessageId, unnamedMessageId) {
                    if (param.type === utils_1.AST_NODE_TYPES.Identifier) {
                        context.report({
                            node: param,
                            messageId: namedMessageId,
                            data: { name: param.name },
                        });
                    }
                    else if (param.type === utils_1.AST_NODE_TYPES.ArrayPattern) {
                        context.report({
                            node: param,
                            messageId: unnamedMessageId,
                            data: { type: 'Array pattern' },
                        });
                    }
                    else if (param.type === utils_1.AST_NODE_TYPES.ObjectPattern) {
                        context.report({
                            node: param,
                            messageId: unnamedMessageId,
                            data: { type: 'Object pattern' },
                        });
                    }
                    else if (param.type === utils_1.AST_NODE_TYPES.RestElement) {
                        if (param.argument.type === utils_1.AST_NODE_TYPES.Identifier) {
                            context.report({
                                node: param,
                                messageId: namedMessageId,
                                data: { name: param.argument.name },
                            });
                        }
                        else {
                            context.report({
                                node: param,
                                messageId: unnamedMessageId,
                                data: { type: 'Rest' },
                            });
                        }
                    }
                }
                switch (param.type) {
                    case utils_1.AST_NODE_TYPES.ArrayPattern:
                    case utils_1.AST_NODE_TYPES.Identifier:
                    case utils_1.AST_NODE_TYPES.ObjectPattern:
                    case utils_1.AST_NODE_TYPES.RestElement:
                        if (!param.typeAnnotation) {
                            report('missingArgType', 'missingArgTypeUnnamed');
                        }
                        else if (options.allowArgumentsExplicitlyTypedAsAny !== true &&
                            param.typeAnnotation.typeAnnotation.type ===
                                utils_1.AST_NODE_TYPES.TSAnyKeyword) {
                            report('anyTypedArg', 'anyTypedArgUnnamed');
                        }
                        return;
                    case utils_1.AST_NODE_TYPES.TSParameterProperty:
                        return checkParameter(param.parameter);
                    case utils_1.AST_NODE_TYPES.AssignmentPattern: // ignored as it has a type via its assignment
                        return;
                }
            }
            for (const arg of node.params) {
                checkParameter(arg);
            }
        }
        /**
         * Checks if a function name is allowed and should not be checked.
         */
        function isAllowedName(node) {
            if (!node || !options.allowedNames || options.allowedNames.length === 0) {
                return false;
            }
            if (node.type === utils_1.AST_NODE_TYPES.VariableDeclarator ||
                node.type === utils_1.AST_NODE_TYPES.FunctionDeclaration) {
                return (node.id?.type === utils_1.AST_NODE_TYPES.Identifier &&
                    options.allowedNames.includes(node.id.name));
            }
            if (node.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
                node.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition ||
                (node.type === utils_1.AST_NODE_TYPES.Property && node.method) ||
                node.type === utils_1.AST_NODE_TYPES.PropertyDefinition ||
                node.type === utils_1.AST_NODE_TYPES.AccessorProperty) {
                return (0, util_1.isStaticMemberAccessOfValue)(node, context, ...options.allowedNames);
            }
            return false;
        }
        function isExportedHigherOrderFunction({ node, }) {
            let current = node.parent;
            while (current) {
                if (current.type === utils_1.AST_NODE_TYPES.ReturnStatement) {
                    // the parent of a return will always be a block statement, so we can skip over it
                    current = current.parent.parent;
                    continue;
                }
                if (!(0, util_1.isFunction)(current)) {
                    return false;
                }
                const returns = getReturnsInFunction(current);
                if (!(0, explicitReturnTypeUtils_1.doesImmediatelyReturnFunctionExpression)({ node: current, returns })) {
                    return false;
                }
                if (checkedFunctions.has(current)) {
                    return true;
                }
                current = current.parent;
            }
            return false;
        }
        function followReference(node) {
            const scope = context.sourceCode.getScope(node);
            const variable = scope.set.get(node.name);
            /* istanbul ignore if */ if (!variable) {
                return;
            }
            // check all of the definitions
            for (const definition of variable.defs) {
                // cases we don't care about in this rule
                if ([
                    scope_manager_1.DefinitionType.CatchClause,
                    scope_manager_1.DefinitionType.ImplicitGlobalVariable,
                    scope_manager_1.DefinitionType.ImportBinding,
                    scope_manager_1.DefinitionType.Parameter,
                ].includes(definition.type)) {
                    continue;
                }
                checkNode(definition.node);
            }
            // follow references to find writes to the variable
            for (const reference of variable.references) {
                if (
                // we don't want to check the initialization ref, as this is handled by the declaration check
                !reference.init &&
                    reference.writeExpr) {
                    checkNode(reference.writeExpr);
                }
            }
        }
        function checkNode(node) {
            if (node == null || alreadyVisited.has(node)) {
                return;
            }
            alreadyVisited.add(node);
            switch (node.type) {
                case utils_1.AST_NODE_TYPES.ArrowFunctionExpression:
                case utils_1.AST_NODE_TYPES.FunctionExpression: {
                    const returns = getReturnsInFunction(node);
                    return checkFunctionExpression({ node, returns });
                }
                case utils_1.AST_NODE_TYPES.ArrayExpression:
                    for (const element of node.elements) {
                        checkNode(element);
                    }
                    return;
                case utils_1.AST_NODE_TYPES.PropertyDefinition:
                case utils_1.AST_NODE_TYPES.AccessorProperty:
                case utils_1.AST_NODE_TYPES.MethodDefinition:
                case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
                    if (node.accessibility === 'private' ||
                        node.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                        return;
                    }
                    return checkNode(node.value);
                case utils_1.AST_NODE_TYPES.ClassDeclaration:
                case utils_1.AST_NODE_TYPES.ClassExpression:
                    for (const element of node.body.body) {
                        checkNode(element);
                    }
                    return;
                case utils_1.AST_NODE_TYPES.FunctionDeclaration: {
                    const returns = getReturnsInFunction(node);
                    return checkFunction({ node, returns });
                }
                case utils_1.AST_NODE_TYPES.Identifier:
                    return followReference(node);
                case utils_1.AST_NODE_TYPES.ObjectExpression:
                    for (const property of node.properties) {
                        checkNode(property);
                    }
                    return;
                case utils_1.AST_NODE_TYPES.Property:
                    return checkNode(node.value);
                case utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression:
                    return checkEmptyBodyFunctionExpression(node);
                case utils_1.AST_NODE_TYPES.VariableDeclaration:
                    for (const declaration of node.declarations) {
                        checkNode(declaration);
                    }
                    return;
                case utils_1.AST_NODE_TYPES.VariableDeclarator:
                    return checkNode(node.init);
            }
        }
        function checkEmptyBodyFunctionExpression(node) {
            const isConstructor = node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                node.parent.kind === 'constructor';
            const isSetAccessor = (node.parent.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition ||
                node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition) &&
                node.parent.kind === 'set';
            if (!isConstructor && !isSetAccessor && !node.returnType) {
                context.report({
                    node,
                    messageId: 'missingReturnType',
                });
            }
            checkParameters(node);
        }
        function checkFunctionExpression({ node, returns, }) {
            if (checkedFunctions.has(node)) {
                return;
            }
            checkedFunctions.add(node);
            if (isAllowedName(node.parent) ||
                (0, explicitReturnTypeUtils_1.isTypedFunctionExpression)(node, options) ||
                (0, explicitReturnTypeUtils_1.ancestorHasReturnType)(node)) {
                return;
            }
            if (options.allowOverloadFunctions &&
                node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                (0, util_1.hasOverloadSignatures)(node.parent, context)) {
                return;
            }
            (0, explicitReturnTypeUtils_1.checkFunctionExpressionReturnType)({ node, returns }, options, context.sourceCode, loc => {
                context.report({
                    loc,
                    node,
                    messageId: 'missingReturnType',
                });
            });
            checkParameters(node);
        }
        function checkFunction({ node, returns, }) {
            if (checkedFunctions.has(node)) {
                return;
            }
            checkedFunctions.add(node);
            if (isAllowedName(node) || (0, explicitReturnTypeUtils_1.ancestorHasReturnType)(node)) {
                return;
            }
            if (options.allowOverloadFunctions &&
                (0, util_1.hasOverloadSignatures)(node, context)) {
                return;
            }
            (0, explicitReturnTypeUtils_1.checkFunctionReturnType)({ node, returns }, options, context.sourceCode, loc => {
                context.report({
                    loc,
                    node,
                    messageId: 'missingReturnType',
                });
            });
            checkParameters(node);
        }
    },
});
//# sourceMappingURL=explicit-module-boundary-types.js.map