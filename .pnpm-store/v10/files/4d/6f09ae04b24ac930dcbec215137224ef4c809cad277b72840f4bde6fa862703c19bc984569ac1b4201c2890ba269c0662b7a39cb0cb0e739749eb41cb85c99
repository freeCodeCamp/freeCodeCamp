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
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('no-empty-function');
const schema = util.deepMerge(
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- https://github.com/microsoft/TypeScript/issues/17002
Array.isArray(baseRule.meta.schema)
    ? baseRule.meta.schema[0]
    : baseRule.meta.schema, {
    properties: {
        allow: {
            items: {
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
exports.default = util.createRule({
    name: 'no-empty-function',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow empty functions',
            recommended: 'error',
            extendsBaseRule: true,
        },
        hasSuggestions: baseRule.meta.hasSuggestions,
        schema: [schema],
        messages: baseRule.meta.messages,
    },
    defaultOptions: [
        {
            allow: [],
        },
    ],
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
            return !node.body || node.body.body.length === 0;
        }
        /**
         * Check if method has parameter properties
         * @param node the node to be validated
         * @returns true if the body has parameter properties
         * @private
         */
        function hasParameterProperties(node) {
            var _a;
            return (_a = node.params) === null || _a === void 0 ? void 0 : _a.some(param => param.type === utils_1.AST_NODE_TYPES.TSParameterProperty);
        }
        /**
         * @param node the node to be validated
         * @returns true if the constructor is allowed to be empty
         * @private
         */
        function isAllowedEmptyConstructor(node) {
            const parent = node.parent;
            if (isBodyEmpty(node) &&
                (parent === null || parent === void 0 ? void 0 : parent.type) === utils_1.AST_NODE_TYPES.MethodDefinition &&
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
            var _a;
            if (isAllowedDecoratedFunctions && isBodyEmpty(node)) {
                const decorators = ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.MethodDefinition
                    ? node.parent.decorators
                    : undefined;
                return !!decorators && !!decorators.length;
            }
            return false;
        }
        function isAllowedEmptyOverrideMethod(node) {
            var _a;
            return (isAllowedOverrideMethods &&
                isBodyEmpty(node) &&
                ((_a = node.parent) === null || _a === void 0 ? void 0 : _a.type) === utils_1.AST_NODE_TYPES.MethodDefinition &&
                node.parent.override === true);
        }
        return Object.assign(Object.assign({}, rules), { FunctionExpression(node) {
                if (isAllowedEmptyConstructor(node) ||
                    isAllowedEmptyDecoratedFunctions(node) ||
                    isAllowedEmptyOverrideMethod(node)) {
                    return;
                }
                rules.FunctionExpression(node);
            },
            FunctionDeclaration(node) {
                if (isAllowedEmptyDecoratedFunctions(node)) {
                    return;
                }
                rules.FunctionDeclaration(node);
            } });
    },
});
//# sourceMappingURL=no-empty-function.js.map