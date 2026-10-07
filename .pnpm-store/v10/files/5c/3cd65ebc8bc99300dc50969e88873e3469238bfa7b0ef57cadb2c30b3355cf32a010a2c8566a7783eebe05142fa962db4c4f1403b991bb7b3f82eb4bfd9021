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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const scope_manager_1 = require("@typescript-eslint/scope-manager");
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
const explicitReturnTypeUtils_1 = require("../util/explicitReturnTypeUtils");
exports.default = util.createRule({
    name: 'explicit-module-boundary-types',
    meta: {
        type: 'problem',
        docs: {
            description: "Require explicit return and argument types on exported functions' and classes' public class methods",
            recommended: false,
        },
        messages: {
            missingReturnType: 'Missing return type on function.',
            missingArgType: "Argument '{{name}}' should be typed.",
            missingArgTypeUnnamed: '{{type}} argument should be typed.',
            anyTypedArg: "Argument '{{name}}' should be typed with a non-any type.",
            anyTypedArgUnnamed: '{{type}} argument should be typed with a non-any type.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowArgumentsExplicitlyTypedAsAny: {
                        description: 'Whether to ignore arguments that are explicitly typed as `any`.',
                        type: 'boolean',
                    },
                    allowDirectConstAssertionInArrowFunctions: {
                        description: [
                            'Whether to ignore return type annotations on body-less arrow functions that return an `as const` type assertion.',
                            'You must still type the parameters of the function.',
                        ].join('\n'),
                        type: 'boolean',
                    },
                    allowedNames: {
                        description: 'An array of function/method names that will not have their arguments or return values checked.',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                    allowHigherOrderFunctions: {
                        description: [
                            'Whether to ignore return type annotations on functions immediately returning another function expression.',
                            'You must still type the parameters of the function.',
                        ].join('\n'),
                        type: 'boolean',
                    },
                    allowTypedFunctionExpressions: {
                        description: 'Whether to ignore type annotations on the variable of a function expresion.',
                        type: 'boolean',
                    },
                    // DEPRECATED - To be removed in next major
                    shouldTrackReferences: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
    defaultOptions: [
        {
            allowArgumentsExplicitlyTypedAsAny: false,
            allowDirectConstAssertionInArrowFunctions: true,
            allowedNames: [],
            allowHigherOrderFunctions: true,
            allowTypedFunctionExpressions: true,
        },
    ],
    create(context, [options]) {
        const sourceCode = context.getSourceCode();
        // tracks all of the functions we've already checked
        const checkedFunctions = new Set();
        // tracks functions that were found whilst traversing
        const foundFunctions = [];
        // all nodes visited, avoids infinite recursion for cyclic references
        // (such as class member referring to itself)
        const alreadyVisited = new Set();
        /*
        # How the rule works:
    
        As the rule traverses the AST, it immediately checks every single function that it finds is exported.
        "exported" means that it is either directly exported, or that its name is exported.
    
        It also collects a list of every single function it finds on the way, but does not check them.
        After it's finished traversing the AST, it then iterates through the list of found functions, and checks to see if
        any of them are part of a higher-order function
        */
        return {
            ExportDefaultDeclaration(node) {
                checkNode(node.declaration);
            },
            'ExportNamedDeclaration:not([source])'(node) {
                if (node.declaration) {
                    checkNode(node.declaration);
                }
                else {
                    for (const specifier of node.specifiers) {
                        followReference(specifier.local);
                    }
                }
            },
            TSExportAssignment(node) {
                checkNode(node.expression);
            },
            'ArrowFunctionExpression, FunctionDeclaration, FunctionExpression'(node) {
                foundFunctions.push(node);
            },
            'Program:exit'() {
                for (const func of foundFunctions) {
                    if (isExportedHigherOrderFunction(func)) {
                        checkNode(func);
                    }
                }
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
            var _a;
            if (!node || !options.allowedNames || !options.allowedNames.length) {
                return false;
            }
            if (node.type === utils_1.AST_NODE_TYPES.VariableDeclarator ||
                node.type === utils_1.AST_NODE_TYPES.FunctionDeclaration) {
                return (((_a = node.id) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.Identifier &&
                    options.allowedNames.includes(node.id.name));
            }
            else if (node.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
                node.type === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition ||
                (node.type === utils_1.AST_NODE_TYPES.Property && node.method) ||
                node.type === utils_1.AST_NODE_TYPES.PropertyDefinition) {
                if (node.key.type === utils_1.AST_NODE_TYPES.Literal &&
                    typeof node.key.value === 'string') {
                    return options.allowedNames.includes(node.key.value);
                }
                if (node.key.type === utils_1.AST_NODE_TYPES.TemplateLiteral &&
                    node.key.expressions.length === 0) {
                    return options.allowedNames.includes(node.key.quasis[0].value.raw);
                }
                if (!node.computed && node.key.type === utils_1.AST_NODE_TYPES.Identifier) {
                    return options.allowedNames.includes(node.key.name);
                }
            }
            return false;
        }
        function isExportedHigherOrderFunction(node) {
            var _a;
            let current = node.parent;
            while (current) {
                if (current.type === utils_1.AST_NODE_TYPES.ReturnStatement) {
                    // the parent of a return will always be a block statement, so we can skip over it
                    current = (_a = current.parent) === null || _a === void 0 ? void 0 : _a.parent;
                    continue;
                }
                if (!util.isFunction(current) ||
                    !(0, explicitReturnTypeUtils_1.doesImmediatelyReturnFunctionExpression)(current)) {
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
            const scope = context.getScope();
            const variable = scope.set.get(node.name);
            /* istanbul ignore if */ if (!variable) {
                return;
            }
            // check all of the definitions
            for (const definition of variable.defs) {
                // cases we don't care about in this rule
                if ([
                    scope_manager_1.DefinitionType.ImplicitGlobalVariable,
                    scope_manager_1.DefinitionType.ImportBinding,
                    scope_manager_1.DefinitionType.CatchClause,
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
                case utils_1.AST_NODE_TYPES.FunctionExpression:
                    return checkFunctionExpression(node);
                case utils_1.AST_NODE_TYPES.ArrayExpression:
                    for (const element of node.elements) {
                        checkNode(element);
                    }
                    return;
                case utils_1.AST_NODE_TYPES.PropertyDefinition:
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
                case utils_1.AST_NODE_TYPES.FunctionDeclaration:
                    return checkFunction(node);
                case utils_1.AST_NODE_TYPES.MethodDefinition:
                case utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition:
                    if (node.accessibility === 'private' ||
                        node.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier) {
                        return;
                    }
                    return checkNode(node.value);
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
            var _a, _b, _c;
            const isConstructor = ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.MethodDefinition &&
                node.parent.kind === 'constructor';
            const isSetAccessor = (((_b = node.parent) === null || _b === void 0 ? void 0 : _b.type) === utils_1.AST_NODE_TYPES.TSAbstractMethodDefinition ||
                ((_c = node.parent) === null || _c === void 0 ? void 0 : _c.type) === utils_1.AST_NODE_TYPES.MethodDefinition) &&
                node.parent.kind === 'set';
            if (!isConstructor && !isSetAccessor && !node.returnType) {
                context.report({
                    node,
                    messageId: 'missingReturnType',
                });
            }
            checkParameters(node);
        }
        function checkFunctionExpression(node) {
            if (checkedFunctions.has(node)) {
                return;
            }
            checkedFunctions.add(node);
            if (isAllowedName(node.parent) ||
                (0, explicitReturnTypeUtils_1.isTypedFunctionExpression)(node, options) ||
                (0, explicitReturnTypeUtils_1.ancestorHasReturnType)(node)) {
                return;
            }
            (0, explicitReturnTypeUtils_1.checkFunctionExpressionReturnType)(node, options, sourceCode, loc => {
                context.report({
                    node,
                    loc,
                    messageId: 'missingReturnType',
                });
            });
            checkParameters(node);
        }
        function checkFunction(node) {
            if (checkedFunctions.has(node)) {
                return;
            }
            checkedFunctions.add(node);
            if (isAllowedName(node) || (0, explicitReturnTypeUtils_1.ancestorHasReturnType)(node)) {
                return;
            }
            (0, explicitReturnTypeUtils_1.checkFunctionReturnType)(node, options, sourceCode, loc => {
                context.report({
                    node,
                    loc,
                    messageId: 'missingReturnType',
                });
            });
            checkParameters(node);
        }
    },
});
//# sourceMappingURL=explicit-module-boundary-types.js.map