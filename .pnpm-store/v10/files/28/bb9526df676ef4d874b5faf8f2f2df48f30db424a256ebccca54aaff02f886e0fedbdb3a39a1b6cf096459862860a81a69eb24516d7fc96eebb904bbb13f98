"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-explicit-any',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the `any` type',
            recommended: 'recommended',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            suggestNever: "Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.",
            suggestPropertyKey: 'Use `PropertyKey` instead, this is more explicit than `keyof any`.',
            suggestUnknown: 'Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.',
            unexpectedAny: 'Unexpected any. Specify a different type.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    fixToUnknown: {
                        type: 'boolean',
                        description: 'Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.',
                    },
                    ignoreRestArgs: {
                        type: 'boolean',
                        description: 'Whether to ignore rest parameter arrays.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            fixToUnknown: false,
            ignoreRestArgs: false,
        },
    ],
    create(context, [{ fixToUnknown, ignoreRestArgs }]) {
        /**
         * Checks if the node is an arrow function, function/constructor declaration or function expression
         * @param node the node to be validated.
         * @returns true if the node is any kind of function declaration or expression
         * @private
         */
        function isNodeValidFunction(node) {
            return [
                utils_1.AST_NODE_TYPES.ArrowFunctionExpression, // const x = (...args: any[]) => {};
                utils_1.AST_NODE_TYPES.FunctionDeclaration, // function f(...args: any[]) {}
                utils_1.AST_NODE_TYPES.FunctionExpression, // const x = function(...args: any[]) {};
                utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration, // type T = {(...args: any[]): unknown};
                utils_1.AST_NODE_TYPES.TSConstructorType, // type T = new (...args: any[]) => unknown
                utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration, // type T = {new (...args: any[]): unknown};
                utils_1.AST_NODE_TYPES.TSDeclareFunction, // declare function _8(...args: any[]): unknown;
                utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression, // declare class A { f(...args: any[]): unknown; }
                utils_1.AST_NODE_TYPES.TSFunctionType, // type T = (...args: any[]) => unknown;
                utils_1.AST_NODE_TYPES.TSMethodSignature, // type T = {f(...args: any[]): unknown};
            ].includes(node.type);
        }
        /**
         * Checks if the node is a rest element child node of a function
         * @param node the node to be validated.
         * @returns true if the node is a rest element child node of a function
         * @private
         */
        function isNodeRestElementInFunction(node) {
            return (node.type === utils_1.AST_NODE_TYPES.RestElement &&
                isNodeValidFunction(node.parent));
        }
        /**
         * Checks if the node is a TSTypeOperator node with a readonly operator
         * @param node the node to be validated.
         * @returns true if the node is a TSTypeOperator node with a readonly operator
         * @private
         */
        function isNodeReadonlyTSTypeOperator(node) {
            return (node.type === utils_1.AST_NODE_TYPES.TSTypeOperator &&
                node.operator === 'readonly');
        }
        /**
         * Checks if the node is a TSTypeReference node with an Array identifier
         * @param node the node to be validated.
         * @returns true if the node is a TSTypeReference node with an Array identifier
         * @private
         */
        function isNodeValidArrayTSTypeReference(node) {
            return (node.type === utils_1.AST_NODE_TYPES.TSTypeReference &&
                node.typeName.type === utils_1.AST_NODE_TYPES.Identifier &&
                ['Array', 'ReadonlyArray'].includes(node.typeName.name));
        }
        /**
         * Checks if the node is a valid TSTypeOperator or TSTypeReference node
         * @param node the node to be validated.
         * @returns true if the node is a valid TSTypeOperator or TSTypeReference node
         * @private
         */
        function isNodeValidTSType(node) {
            return (isNodeReadonlyTSTypeOperator(node) ||
                isNodeValidArrayTSTypeReference(node));
        }
        /**
         * Checks if the great grand-parent node is a RestElement node in a function
         * @param node the node to be validated.
         * @returns true if the great grand-parent node is a RestElement node in a function
         * @private
         */
        function isGreatGrandparentRestElement(node) {
            return (node.parent?.parent?.parent != null &&
                isNodeRestElementInFunction(node.parent.parent.parent));
        }
        /**
         * Checks if the great great grand-parent node is a valid RestElement node in a function
         * @param node the node to be validated.
         * @returns true if the great great grand-parent node is a valid RestElement node in a function
         * @private
         */
        function isGreatGreatGrandparentRestElement(node) {
            return (node.parent?.parent?.parent?.parent != null &&
                isNodeValidTSType(node.parent.parent) &&
                isNodeRestElementInFunction(node.parent.parent.parent.parent));
        }
        /**
         * Checks if the great grand-parent or the great great grand-parent node is a RestElement node
         * @param node the node to be validated.
         * @returns true if the great grand-parent or the great great grand-parent node is a RestElement node
         * @private
         */
        function isNodeDescendantOfRestElementInFunction(node) {
            return (isGreatGrandparentRestElement(node) ||
                isGreatGreatGrandparentRestElement(node));
        }
        /**
         * Checks if the node is within a keyof any expression
         * @param node the node to be validated.
         * @returns true if the node is within a keyof any expression, false otherwise
         * @private
         */
        function isNodeWithinKeyofAny(node) {
            return (node.parent.type === utils_1.AST_NODE_TYPES.TSTypeOperator &&
                node.parent.operator === 'keyof');
        }
        /**
         * Creates a fixer that replaces a keyof any with PropertyKey
         * @param node the node to be fixed.
         * @returns a function that will fix the node.
         * @private
         */
        function createPropertyKeyFixer(node) {
            return (fixer) => {
                return fixer.replaceText(node.parent, 'PropertyKey');
            };
        }
        function createUnknownFixer(node) {
            return (fixer) => {
                return fixer.replaceText(node, node.parent.type === utils_1.AST_NODE_TYPES.TSTypeAnnotation &&
                    isNodeRestElementInFunction(node.parent.parent)
                    ? 'unknown[]'
                    : 'unknown');
            };
        }
        return {
            TSAnyKeyword(node) {
                const isKeyofAny = isNodeWithinKeyofAny(node);
                if (ignoreRestArgs && isNodeDescendantOfRestElementInFunction(node)) {
                    return;
                }
                const fixOrSuggest = {
                    fix: null,
                    suggest: isKeyofAny
                        ? [
                            {
                                messageId: 'suggestPropertyKey',
                                fix: createPropertyKeyFixer(node),
                            },
                        ]
                        : [
                            {
                                messageId: 'suggestUnknown',
                                fix: createUnknownFixer(node),
                            },
                            {
                                messageId: 'suggestNever',
                                fix: fixer => fixer.replaceText(node, 'never'),
                            },
                        ],
                };
                if (fixToUnknown) {
                    fixOrSuggest.fix = isKeyofAny
                        ? createPropertyKeyFixer(node)
                        : createUnknownFixer(node);
                }
                context.report({
                    node,
                    messageId: 'unexpectedAny',
                    ...fixOrSuggest,
                });
            },
        };
    },
});
//# sourceMappingURL=no-explicit-any.js.map