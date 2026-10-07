"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStartOfArrowFunctionBodyNeedingParentheses = isStartOfArrowFunctionBodyNeedingParentheses;
const utils_1 = require("@typescript-eslint/utils");
const astUtils_1 = require("./astUtils");
function isStartOfArrowFunctionBodyNeedingParentheses(node, firstToken, sourceCode) {
    return ((0, astUtils_1.isOpeningBraceToken)(firstToken) &&
        isStartOfArrowFunctionBody(node, sourceCode));
}
function isStartOfArrowFunctionBody(node, sourceCode) {
    let current = node;
    while (true) {
        if ((0, astUtils_1.isParenthesized)(current, sourceCode)) {
            return false;
        }
        const { parent } = current;
        if (parent == null) {
            return false;
        }
        if (parent.type === utils_1.AST_NODE_TYPES.ArrowFunctionExpression &&
            parent.body === current) {
            return true;
        }
        if (parent.range[0] !== current.range[0]) {
            return false;
        }
        current = parent;
    }
}
//# sourceMappingURL=isStartOfArrowFunctionBodyNeedingParentheses.js.map