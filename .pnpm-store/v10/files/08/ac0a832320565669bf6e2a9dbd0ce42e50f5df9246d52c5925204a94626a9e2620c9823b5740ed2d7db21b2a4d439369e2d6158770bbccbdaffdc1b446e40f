"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStartOfExpressionStatement = isStartOfExpressionStatement;
const utils_1 = require("@typescript-eslint/utils");
// The following is copied from `eslint`'s source code.
// https://github.com/eslint/eslint/blob/3a4eaf921543b1cd5d1df4ea9dec02fab396af2a/lib/rules/utils/ast-utils.js#L1026-L1041
// Could be export { isStartOfExpressionStatement } from 'eslint/lib/rules/utils/ast-utils'
/**
 * Tests if a node appears at the beginning of an ancestor ExpressionStatement node.
 * @param node The node to check.
 * @returns Whether the node appears at the beginning of an ancestor ExpressionStatement node.
 */
function isStartOfExpressionStatement(node) {
    const start = node.range[0];
    let ancestor = node;
    while ((ancestor = ancestor.parent) && ancestor.range[0] === start) {
        if (ancestor.type === utils_1.AST_NODE_TYPES.ExpressionStatement) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=isStartOfExpressionStatement.js.map