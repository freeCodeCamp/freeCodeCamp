"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
const getESLintCoreRule_1 = require("../util/getESLintCoreRule");
const baseRule = (0, getESLintCoreRule_1.getESLintCoreRule)('max-params');
exports.default = (0, util_1.createRule)({
    name: 'max-params',
    meta: {
        type: 'suggestion',
        // defaultOptions, -- base rule does not use defaultOptions
        docs: {
            description: 'Enforce a maximum number of parameters in function definitions',
            extendsBaseRule: true,
        },
        messages: baseRule.meta.messages,
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    countVoidThis: {
                        type: 'boolean',
                        description: 'Whether to count a `this` declaration when the type is `void`.',
                    },
                    max: {
                        type: 'integer',
                        description: 'A maximum number of parameters in function definitions.',
                        minimum: 0,
                    },
                    maximum: {
                        type: 'integer',
                        description: '(deprecated) A maximum number of parameters in function definitions.',
                        minimum: 0,
                    },
                },
            },
        ],
    },
    defaultOptions: [{ countVoidThis: false, max: 3 }],
    create(context, [{ countVoidThis }]) {
        const baseRules = baseRule.create(context);
        if (countVoidThis === true) {
            return baseRules;
        }
        const removeVoidThisParam = (node) => {
            if (node.params.length === 0 ||
                node.params[0].type !== utils_1.AST_NODE_TYPES.Identifier ||
                node.params[0].name !== 'this' ||
                node.params[0].typeAnnotation?.typeAnnotation.type !==
                    utils_1.AST_NODE_TYPES.TSVoidKeyword) {
                return node;
            }
            return {
                ...node,
                params: node.params.slice(1),
            };
        };
        const wrapListener = (listener) => {
            return (node) => {
                listener(removeVoidThisParam(node));
            };
        };
        return {
            ArrowFunctionExpression: wrapListener(baseRules.ArrowFunctionExpression),
            FunctionDeclaration: wrapListener(baseRules.FunctionDeclaration),
            FunctionExpression: wrapListener(baseRules.FunctionExpression),
            TSDeclareFunction: wrapListener(baseRules.FunctionDeclaration),
            TSFunctionType: wrapListener(baseRules.FunctionDeclaration),
        };
    },
});
//# sourceMappingURL=max-params.js.map