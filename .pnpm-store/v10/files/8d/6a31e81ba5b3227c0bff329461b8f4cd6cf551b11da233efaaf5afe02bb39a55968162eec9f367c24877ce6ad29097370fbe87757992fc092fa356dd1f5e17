"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-var-requires',
    meta: {
        type: 'problem',
        deprecated: {
            deprecatedSince: '8.0.0',
            replacedBy: [
                {
                    rule: {
                        name: '@typescript-eslint/no-require-imports',
                        url: 'https://typescript-eslint.io/rules/no-require-imports',
                    },
                },
            ],
            url: 'https://github.com/typescript-eslint/typescript-eslint/pull/8334',
        },
        docs: {
            description: 'Disallow `require` statements except in import statements',
        },
        messages: {
            noVarReqs: 'Require statement not part of import statement.',
        },
        replacedBy: ['@typescript-eslint/no-require-imports'],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allow: {
                        type: 'array',
                        description: 'Patterns of import paths to allow requiring from.',
                        items: { type: 'string' },
                    },
                },
            },
        ],
    },
    defaultOptions: [{ allow: [] }],
    create(context, options) {
        const allowPatterns = options[0].allow.map(pattern => new RegExp(pattern, 'u'));
        function isImportPathAllowed(importPath) {
            return allowPatterns.some(pattern => importPath.match(pattern));
        }
        function isStringOrTemplateLiteral(node) {
            return ((node.type === utils_1.AST_NODE_TYPES.Literal &&
                typeof node.value === 'string') ||
                node.type === utils_1.AST_NODE_TYPES.TemplateLiteral);
        }
        return {
            'CallExpression[callee.name="require"]'(node) {
                if (node.arguments[0] && isStringOrTemplateLiteral(node.arguments[0])) {
                    const argValue = (0, util_1.getStaticStringValue)(node.arguments[0]);
                    if (typeof argValue === 'string' && isImportPathAllowed(argValue)) {
                        return;
                    }
                }
                const parent = node.parent.type === utils_1.AST_NODE_TYPES.ChainExpression
                    ? node.parent.parent
                    : node.parent;
                if ([
                    utils_1.AST_NODE_TYPES.CallExpression,
                    utils_1.AST_NODE_TYPES.MemberExpression,
                    utils_1.AST_NODE_TYPES.NewExpression,
                    utils_1.AST_NODE_TYPES.TSAsExpression,
                    utils_1.AST_NODE_TYPES.TSTypeAssertion,
                    utils_1.AST_NODE_TYPES.VariableDeclarator,
                ].includes(parent.type)) {
                    const variable = utils_1.ASTUtils.findVariable(context.sourceCode.getScope(node), 'require');
                    if (!variable?.identifiers.length) {
                        context.report({
                            node,
                            messageId: 'noVarReqs',
                        });
                    }
                }
            },
        };
    },
});
//# sourceMappingURL=no-var-requires.js.map