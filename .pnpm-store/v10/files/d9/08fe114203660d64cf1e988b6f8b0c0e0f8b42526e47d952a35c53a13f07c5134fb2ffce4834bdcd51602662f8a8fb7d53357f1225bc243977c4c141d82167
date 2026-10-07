"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-namespace',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow TypeScript namespaces',
            recommended: 'recommended',
        },
        messages: {
            moduleSyntaxIsPreferred: 'ES2015 module syntax is preferred over namespaces.',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowDeclarations: {
                        type: 'boolean',
                        description: 'Whether to allow `declare` with custom TypeScript namespaces.',
                    },
                    allowDefinitionFiles: {
                        type: 'boolean',
                        description: 'Whether to allow `declare` with custom TypeScript namespaces inside definition files.',
                    },
                },
            },
        ],
    },
    defaultOptions: [
        {
            allowDeclarations: false,
            allowDefinitionFiles: true,
        },
    ],
    create(context, [{ allowDeclarations, allowDefinitionFiles }]) {
        function isDeclaration(node) {
            if (node.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration && node.declare) {
                return true;
            }
            return node.parent != null && isDeclaration(node.parent);
        }
        return {
            "TSModuleDeclaration[global!=true][id.type!='Literal']"(node) {
                if (node.parent.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration ||
                    (allowDefinitionFiles && (0, util_1.isDefinitionFile)(context.filename)) ||
                    (allowDeclarations && isDeclaration(node))) {
                    return;
                }
                context.report({
                    node,
                    messageId: 'moduleSyntaxIsPreferred',
                });
            },
        };
    },
});
//# sourceMappingURL=no-namespace.js.map