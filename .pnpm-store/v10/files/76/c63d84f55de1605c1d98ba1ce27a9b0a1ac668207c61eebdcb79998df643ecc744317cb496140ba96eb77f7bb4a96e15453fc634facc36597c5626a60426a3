"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStartOfExpressionStatementNeedingParentheses = isStartOfExpressionStatementNeedingParentheses;
const isStartOfExpressionStatement_1 = require("./isStartOfExpressionStatement");
function isStartOfExpressionStatementNeedingParentheses(node, firstToken) {
    return (['{', 'class', 'function'].includes(firstToken.value) &&
        (0, isStartOfExpressionStatement_1.isStartOfExpressionStatement)(node));
}
//# sourceMappingURL=isStartOfExpressionStatementNeedingParentheses.js.map