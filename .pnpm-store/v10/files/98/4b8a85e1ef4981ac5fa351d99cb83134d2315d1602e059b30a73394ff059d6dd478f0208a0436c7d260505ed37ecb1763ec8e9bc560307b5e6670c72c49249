"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const util_1 = require("../util");
exports.default = (0, util_1.createRule)({
    name: 'default-param-last',
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Enforce default parameters to be last',
            recommended: false,
            extendsBaseRule: true,
        },
        schema: [],
        messages: {
            shouldBeLast: 'Default parameters should be last.',
        },
    },
    defaultOptions: [],
    create(context) {
        /**
         * checks if node is optional parameter
         * @param node the node to be evaluated
         * @private
         */
        function isOptionalParam(node) {
            return 'optional' in node && node.optional === true;
        }
        /**
         * checks if node is plain parameter
         * @param node the node to be evaluated
         * @private
         */
        function isPlainParam(node) {
            return !(node.type === utils_1.AST_NODE_TYPES.AssignmentPattern ||
                node.type === utils_1.AST_NODE_TYPES.RestElement ||
                isOptionalParam(node));
        }
        function checkDefaultParamLast(node) {
            let hasSeenPlainParam = false;
            for (let i = node.params.length - 1; i >= 0; i--) {
                const current = node.params[i];
                const param = current.type === utils_1.AST_NODE_TYPES.TSParameterProperty
                    ? current.parameter
                    : current;
                if (isPlainParam(param)) {
                    hasSeenPlainParam = true;
                    continue;
                }
                if (hasSeenPlainParam &&
                    (isOptionalParam(param) ||
                        param.type === utils_1.AST_NODE_TYPES.AssignmentPattern)) {
                    context.report({ node: current, messageId: 'shouldBeLast' });
                }
            }
        }
        return {
            ArrowFunctionExpression: checkDefaultParamLast,
            FunctionDeclaration: checkDefaultParamLast,
            FunctionExpression: checkDefaultParamLast,
        };
    },
});
//# sourceMappingURL=default-param-last.js.map