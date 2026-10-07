"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-empty-function');
const defaultOptions = [
    {
        allow: [],
    },
];
const schema = (0, util_1.deepMerge)(
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(baseRule.meta.schema)
    ? baseRule.meta.schema[0]
    : baseRule.meta.schema, {
    properties: {
        allow: {
            description: 'Locations and kinds of functions that are allowed to be empty.',
            items: {
                type: 'string',
                enum: [
                    'functions',
                    'arrowFunctions',
                    'generatorFunctions',
                    'methods',
                    'generatorMethods',
                    'getters',
                    'setters',
                    'constructors',
                    'private-constructors',
                    'protected-constructors',
                    'asyncFunctions',
                    'asyncMethods',
                    'decoratedFunctions',
                    'overrideMethods',
                ],
            },
        },
    },
});
exports.default = (0, util_1.createRule)({
    name: 'no-empty-function',
    meta: {
        type: 'suggestion',
        defaultOptions,
        docs: {
            description: 'Disallow empty functions',
            extendsBaseRule: true,
            recommended: 'stylistic',
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        messages: baseRule.meta.messages,
        schema: [schema],
    },
    defaultOptions,
    create(context, [{ allow = [] }]) {
        const rules = baseRule.create(context);
        const isAllowedProtectedConstructors = allow.includes('protected-constructors');
        const isAllowedPrivateConstructors = allow.includes('private-constructors');
        const isAllowedDecoratedFunctions = allow.includes('decoratedFunctions');
        const isAllowedOverrideMethods = allow.includes('overrideMethods');
        /**
         * Check if the method body is empty
         * @param node the node to be validated
         * @returns true if the body is empty
         * @private
         */
        function isBodyEmpty(node) {
            return node.body.body.length === 0;
        }
        /**
         * Check if method has parameter properties
         * @param node the node to be validated
         * @returns true if the body has parameter properties
         * @private
         */
        function hasParameterProperties(node) {
            return node.params.some(param => param.type === utils_1.AST_NODE_TYPES.TSParameterProperty);
        }
        /**
         * @param node the node to be validated
         * @returns true if the constructor is allowed to be empty
         * @private
         */
        function isAllowedEmptyConstructor(node) {
            const parent = node.parent;
            if (isBodyEmpty(node) &&
                parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                parent.kind === 'constructor') {
                const { accessibility } = parent;
                return (
                // allow protected constructors
                (accessibility === 'protected' && isAllowedProtectedConstructors) ||
                    // allow private constructors
                    (accessibility === 'private' && isAllowedPrivateConstructors) ||
                    // allow constructors which have parameter properties
                    hasParameterProperties(node));
            }
            return false;
        }
        /**
         * @param node the node to be validated
         * @returns true if a function has decorators
         * @private
         */
        function isAllowedEmptyDecoratedFunctions(node) {
            if (isAllowedDecoratedFunctions && isBodyEmpty(node)) {
                const decorators = node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition
                    ? node.parent.decorators
                    : undefined;
                return !!decorators && !!decorators.length;
            }
            return false;
        }
        function isAllowedEmptyOverrideMethod(node) {
            return (isAllowedOverrideMethods &&
                isBodyEmpty(node) &&
                node.parent.type === utils_1.AST_NODE_TYPES.MethodDefinition &&
                node.parent.override);
        }
        return {
            ...rules,
            FunctionExpression(node) {
                if (isAllowedEmptyConstructor(node) ||
                    isAllowedEmptyDecoratedFunctions(node) ||
                    isAllowedEmptyOverrideMethod(node)) {
                    return;
                }
                rules.FunctionExpression(node);
            },
        };
    },
});
//# sourceMappingURL=no-empty-function.js.map