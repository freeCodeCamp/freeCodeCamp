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
    name: 'no-namespace',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow TypeScript namespaces',
            recommended: 'error',
        },
        messages: {
            moduleSyntaxIsPreferred: 'ES2015 module syntax is preferred over namespaces.',
        },
        schema: [
            {
                type: 'object',
                properties: {
                    allowDeclarations: {
                        description: 'Whether to allow `declare` with custom TypeScript namespaces.',
                        type: 'boolean',
                    },
                    allowDefinitionFiles: {
                        description: 'Whether to allow `declare` with custom TypeScript namespaces inside definition files.',
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
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
        const filename = context.getFilename();
        function isDeclaration(node) {
            if (node.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration &&
                node.declare === true) {
                return true;
            }
            return node.parent != null && isDeclaration(node.parent);
        }
        return {
            "TSModuleDeclaration[global!=true][id.type='Identifier']"(node) {
                if ((node.parent &&
                    node.parent.type === utils_1.AST_NODE_TYPES.TSModuleDeclaration) ||
                    (allowDefinitionFiles && util.isDefinitionFile(filename)) ||
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