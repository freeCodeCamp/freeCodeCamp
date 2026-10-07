"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-this-alias',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow aliasing `this`',
            recommended: 'recommended',
        },
        messages: {
            thisAssignment: "Unexpected aliasing of 'this' to local variable.",
            thisDestructure: "Unexpected aliasing of members of 'this' to local variables.",
        },
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowDestructuring: {
                        type: 'boolean',
                        description: 'Whether to ignore destructuring, such as `const { props, state } = this`.',
                    },
                    allowedNames: {
                        type: 'array',
                        description: 'Names to ignore, such as ["self"] for `const self = this;`.',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
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
                    ? // https://github.com/typescript-eslint/typescript-eslint/issues/5439
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        allowedNames.includes(id.name)
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