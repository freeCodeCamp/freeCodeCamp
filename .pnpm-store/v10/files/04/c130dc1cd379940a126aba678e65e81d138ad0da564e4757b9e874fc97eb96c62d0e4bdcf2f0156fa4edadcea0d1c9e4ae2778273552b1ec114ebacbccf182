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
    name: 'no-this-alias',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow aliasing `this`',
            recommended: 'error',
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowDestructuring: {
                        description: 'Whether to ignore destructurings, such as `const { props, state } = this`.',
                        type: 'boolean',
                    },
                    allowedNames: {
                        description: 'Names to ignore, such as ["self"] for `const self = this;`.',
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
        messages: {
            thisAssignment: "Unexpected aliasing of 'this' to local variable.",
            thisDestructure: "Unexpected aliasing of members of 'this' to local variables.",
        },
    },
    defaultOptions: [
        {
            allowDestructuring: true,
            allowedNames: [],
        },
    ],
    create(context, [{ allowDestructuring, allowedNames }]) {
        return {
            "VariableDeclarator[init.type='ThisExpression'], AssignmentExpression[right.type='ThisExpression']"(node) {
                const id = node.type === utils_1.AST_NODE_TYPES.VariableDeclarator ? node.id : node.left;
                if (allowDestructuring && id.type !== utils_1.AST_NODE_TYPES.Identifier) {
                    return;
                }
                const hasAllowedName = id.type === utils_1.AST_NODE_TYPES.Identifier
                    ? allowedNames.includes(id.name)
                    : false;
                if (!hasAllowedName) {
                    context.report({
                        node: id,
                        messageId: id.type === utils_1.AST_NODE_TYPES.Identifier
                            ? 'thisAssignment'
                            : 'thisDestructure',
                    });
                }
            },
        };
    },
});
//# sourceMappingURL=no-this-alias.js.map