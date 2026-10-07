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
const utils_1 = require("@typescript-eslint/utils");
const util = __importStar(require("../util"));
exports.default = util.createRule({
    name: 'no-explicit-any',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow the `any` type',
            recommended: 'warn',
        },
        fixable: 'code',
        hasSuggestions: true,
        messages: {
            unexpectedAny: 'Unexpected any. Specify a different type.',
            suggestUnknown: 'Use `unknown` instead, this will force you to explicitly, and safely assert the type is correct.',
            suggestNever: "Use `never` instead, this is useful when instantiating generic type parameters that you don't need to know the type of.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    fixToUnknown: {
                        description: 'Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.',
                        type: 'boolean',
                    },
                    ignoreRestArgs: {
                        description: 'Whether to ignore rest parameter arrays.',
                        type: 'boolean',
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
    create(context, [{ ignoreRestArgs, fixToUnknown }]) {
        /**
         * Checks if the node is an arrow function, function/constructor declaration or function expression
         * @param node the node to be validated.
         * @returns true if the node is any kind of function declaration or expression
         * @private
         */
        function isNodeValidFunction(node) {
            return [
                utils_1.AST_NODE_TYPES.ArrowFunctionExpression,
                utils_1.AST_NODE_TYPES.FunctionDeclaration,
                utils_1.AST_NODE_TYPES.FunctionExpression,
                utils_1.AST_NODE_TYPES.TSEmptyBodyFunctionExpression,
                utils_1.AST_NODE_TYPES.TSFunctionType,
                utils_1.AST_NODE_TYPES.TSConstructorType,
                utils_1.AST_NODE_TYPES.TSCallSignatureDeclaration,
                utils_1.AST_NODE_TYPES.TSConstructSignatureDeclaration,
                utils_1.AST_NODE_TYPES.TSMethodSignature,
                utils_1.AST_NODE_TYPES.TSDeclareFunction, // declare function _8(...args: any[]): unknown;
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
                node.parent !== undefined &&
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
                node.typeName !== undefined &&
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
            var _a, _b;
            return (((_b = (_a = node === null || node === void 0 ? void 0 : node.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.parent) != null &&
                isNodeRestElementInFunction(node.parent.parent.parent));
        }
        /**
         * Checks if the great great grand-parent node is a valid RestElement node in a function
         * @param node the node to be validated.
         * @returns true if the great great grand-parent node is a valid RestElement node in a function
         * @private
         */
        function isGreatGreatGrandparentRestElement(node) {
            var _a, _b, _c;
            return (((_c = (_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.parent) === null || _c === void 0 ? void 0 : _c.parent) != null &&
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
        return {
            TSAnyKeyword(node) {
                if (ignoreRestArgs && isNodeDescendantOfRestElementInFunction(node)) {
                    return;
                }
                const fixOrSuggest = {
                    fix: null,
                    suggest: [
                        {
                            messageId: 'suggestUnknown',
                            fix(fixer) {
                                return fixer.replaceText(node, 'unknown');
                            },
                        },
                        {
                            messageId: 'suggestNever',
                            fix(fixer) {
                                return fixer.replaceText(node, 'never');
                            },
                        },
                    ],
                };
                if (fixToUnknown) {
                    fixOrSuggest.fix = (fixer) => fixer.replaceText(node, 'unknown');
                }
                context.report(Object.assign({ node, messageId: 'unexpectedAny' }, fixOrSuggest));
            },
        };
    },
});
//# sourceMappingURL=no-explicit-any.js.map