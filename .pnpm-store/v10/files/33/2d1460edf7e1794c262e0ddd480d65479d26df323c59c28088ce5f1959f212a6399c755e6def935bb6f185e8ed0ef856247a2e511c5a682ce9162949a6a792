"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const ast_utils_1 = require("@typescript-eslint/utils/ast-utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'no-array-constructor',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow generic `Array` constructors',
            extendsBaseRule: true,
            recommended: 'recommended',
        },
        fixable: 'code',
        messages: {
            useLiteral: 'The array literal notation [] is preferable.',
        },
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        const sourceCode = context.sourceCode;
        function getArgumentsText(node) {
            const lastToken = sourceCode.getLastToken(node);
            if (lastToken == null || !(0, ast_utils_1.isClosingParenToken)(lastToken)) {
                return '';
            }
            let firstToken = node.callee;
            do {
                firstToken = sourceCode.getTokenAfter(firstToken);
                if (!firstToken || firstToken === lastToken) {
                    return '';
                }
            } while (!(0, ast_utils_1.isOpeningParenToken)(firstToken));
            return sourceCode.text.slice(firstToken.range[1], lastToken.range[0]);
        }
        /**
         * Disallow construction of dense arrays using the Array constructor
         * @param node node to evaluate
         */
        function check(node) {
            if (node.arguments.length !== 1 &&
                node.callee.type === utils_1.AST_NODE_TYPES.Identifier &&
                node.callee.name === 'Array' &&
                !node.typeArguments) {
                context.report({
                    node,
                    messageId: 'useLiteral',
                    fix(fixer) {
                        const argsText = getArgumentsText(node);
                        return fixer.replaceText(node, `[${argsText}]`);
                    },
                });
            }
        }
        return {
            CallExpression: check,
            NewExpression: check,
        };
    },
});
//# sourceMappingURL=no-array-constructor.js.map