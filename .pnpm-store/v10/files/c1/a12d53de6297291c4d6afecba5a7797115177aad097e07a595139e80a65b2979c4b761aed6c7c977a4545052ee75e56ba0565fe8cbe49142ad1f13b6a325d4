"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConditionalTest = isConditionalTest;
const utils_1 = require("@typescript-eslint/utils");
function isConditionalTest(node) {
    const parent = node.parent;
    if (parent == null) {
        return false;
    }
    if (parent.type === utils_1.AST_NODE_TYPES.LogicalExpression) {
        return isConditionalTest(parent);
    }
    if (parent.type === utils_1.AST_NODE_TYPES.ConditionalExpression &&
        (parent.consequent === node || parent.alternate === node)) {
        return isConditionalTest(parent);
    }
    if (parent.type === utils_1.AST_NODE_TYPES.SequenceExpression &&
        parent.expressions.at(-1) === node) {
        return isConditionalTest(parent);
    }
    if (parent.type === utils_1.AST_NODE_TYPES.UnaryExpression &&
        parent.operator === '!') {
        return isConditionalTest(parent);
    }
    if ((parent.type === utils_1.AST_NODE_TYPES.ConditionalExpression ||
        parent.type === utils_1.AST_NODE_TYPES.DoWhileStatement ||
        parent.type === utils_1.AST_NODE_TYPES.IfStatement ||
        parent.type === utils_1.AST_NODE_TYPES.ForStatement ||
        parent.type === utils_1.AST_NODE_TYPES.WhileStatement) &&
        parent.test === node) {
        return true;
    }
    return false;
}
//# sourceMappingURL=isConditionalTest.js.map