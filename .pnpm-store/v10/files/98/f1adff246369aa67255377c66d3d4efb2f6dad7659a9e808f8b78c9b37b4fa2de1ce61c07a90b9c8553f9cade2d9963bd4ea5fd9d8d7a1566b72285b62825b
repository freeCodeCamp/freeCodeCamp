"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'class-methods-use-this',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce that class methods utilize `this`',
            extendsBaseRule: true,
            requiresTypeChecking: false,
        },
        messages: {
            missingThis: "Expected 'this' to be used by class {{name}}.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    enforceForClassFields: {
                        type: 'boolean',
                        description: 'Enforces that functions used as instance field initializers utilize `this`.',
                    },
                    exceptMethods: {
                        type: 'array',
                        description: 'Allows specified method names to be ignored with this rule.',
                        items: {
                            type: 'string',
                        },
                    },
                    ignoreClassesThatImplementAnInterface: {
                        description: 'Whether to ignore class members that are defined within a class that `implements` a type.',
                        oneOf: [
                            {
                                type: 'boolean',
                                description: 'Ignore all classes that implement an interface',
                            },
                            {
                                type: 'string',
                                description: 'Ignore only the public fields of classes that implement an interface',
                                enum: ['public-fields'],
                            },
                        ],
                    },
                    ignoreOverrideMethods: {
                        type: 'boolean',
                        description: 'Whether to ignore members marked with the `override` modifier.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            enforceForClassFields: true,
            exceptMethods: [],
            ignoreClassesThatImplementAnInterface: false,
            ignoreOverrideMethods: false,
        },
    ],
    create(context, [{ enforceForClassFields, exceptMethods: exceptMethodsRaw, ignoreClassesThatImplementAnInterface, ignoreOverrideMethods, },]) {
        const exceptMethods = new Set(exceptMethodsRaw);
        let stack;
        function pushContext(member) {
            if (member?.parent.type === utils_1.AST_NODE_TYPES.ClassBody) {
                stack = {
                    class: member.parent.parent,
                    member,
                    parent: stack,
                    usesThis: false,
                };
            }
            else {
                stack = {
                    class: null,
                    member: null,
                    parent: stack,
                    usesThis: false,
                };
            }
        }
        function enterFunction(node) {
            if (node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition ||
                node.parent.type === utils_1.AST_NODE_TYPES.PropertyDefinition ||
                node.parent.type === utils_1.AST_NODE_TYPES.AccessorProperty) {
                pushContext(node.parent);
            }
            else {
                pushContext();
            }
        }
        /**
         * Pop `this` used flag from the stack.
         */
        function popContext() {
            const oldStack = stack;
            stack = stack?.parent;
            return oldStack;
        }
        function isPublicField(accessibility) {
            if (!accessibility || accessibility === 'public') {
                return true;
            }
            return false;
        }
        /**
         * Check if the node is an instance method not excluded by config
         */
        function isIncludedInstanceMethod(node) {
            if (node.static ||
                (node.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                    node.kind === 'constructor') ||
                ((node.type === utils_1.AST_NODE_TYPES.PropertyDefinition ||
                    node.type === utils_1.AST_NODE_TYPES.AccessorProperty) &&
                    !enforceForClassFields)) {
                return false;
            }
            if (node.computed || exceptMethods.size === 0) {
                return true;
            }
            const hashIfNeeded = node.key.type === utils_1.AST_NODE_TYPES.PrivateIdentifier ? '#' : '';
            const name = (0, util_1.getStaticMemberAccessValue)(node, context);
            return (typeof name !== 'string' || !exceptMethods.has(hashIfNeeded + name));
        }
        /**
         * Checks if we are leaving a function that is a method, and reports if 'this' has not been used.
         * Static methods and the constructor are exempt.
         * Then pops the context off the stack.
         */
        function exitFunction(node) {
            const stackContext = popContext();
            if (stackContext?.member == null ||
                stackContext.usesThis ||
                (ignoreOverrideMethods && stackContext.member.override) ||
                (ignoreClassesThatImplementAnInterface === true &&
                    stackContext.class.implements.length > 0) ||
                (ignoreClassesThatImplementAnInterface === 'public-fields' &&
                    stackContext.class.implements.length > 0 &&
                    isPublicField(stackContext.member.accessibility))) {
                return;
            }
            if (isIncludedInstanceMethod(stackContext.member)) {
                context.report({
                    loc: (0, util_1.getFunctionHeadLoc)(node, context.sourceCode),
                    node,
                    messageId: 'missingThis',
                    data: {
                        name: (0, util_1.getFunctionNameWithKind)(node),
                    },
                });
            }
        }
        return {
            // function declarations have their own `this` context
            FunctionDeclaration() {
                pushContext();
            },
            'FunctionDeclaration:exit'() {
                popContext();
            },
            FunctionExpression(node) {
                enterFunction(node);
            },
            'FunctionExpression:exit'(node) {
                exitFunction(node);
            },
            ...(enforceForClassFields
                ? {
                    'AccessorProperty > ArrowFunctionExpression.value'(node) {
                        enterFunction(node);
                    },
                    'AccessorProperty > ArrowFunctionExpression.value:exit'(node) {
                        exitFunction(node);
                    },
                    'PropertyDefinition > ArrowFunctionExpression.value'(node) {
                        enterFunction(node);
                    },
                    'PropertyDefinition > ArrowFunctionExpression.value:exit'(node) {
                        exitFunction(node);
                    },
                }
                : {}),
            /*
             * Class field value are implicit functions.
             */
            'AccessorProperty:exit'() {
                popContext();
            },
            'AccessorProperty > *.key:exit'() {
                pushContext();
            },
            'PropertyDefinition:exit'() {
                popContext();
            },
            'PropertyDefinition > *.key:exit'() {
                pushContext();
            },
            /*
             * Class static blocks are implicit functions. They aren't required to use `this`,
             * but we have to push context so that it captures any use of `this` in the static block
             * separately from enclosing contexts, because static blocks have their own `this` and it
             * shouldn't count as used `this` in enclosing contexts.
             */
            StaticBlock() {
                pushContext();
            },
            'StaticBlock:exit'() {
                popContext();
            },
            'ThisExpression, Super'() {
                if (stack) {
                    stack.usesThis = true;
                }
            },
        };
    },
});
//# sourceMappingURL=class-methods-use-this.js.map