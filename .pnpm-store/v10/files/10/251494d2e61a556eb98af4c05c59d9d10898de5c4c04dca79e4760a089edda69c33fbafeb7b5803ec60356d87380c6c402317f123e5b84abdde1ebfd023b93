"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextWithParentheses = getTextWithParentheses;
const _1 = require(".");
function getTextWithParentheses(sourceCode, node) {
    // Capture parentheses before and after the node
    let beforeCount = 0;
    let afterCount = 0;
    if ((0, _1.isParenthesized)(node, sourceCode)) {
        const bodyOpeningParen = (0, _1.nullThrows)(sourceCode.getTokenBefore(node, _1.isOpeningParenToken), _1.NullThrowsReasons.MissingToken('(', 'node'));
        const bodyClosingParen = (0, _1.nullThrows)(sourceCode.getTokenAfter(node, _1.isClosingParenToken), _1.NullThrowsReasons.MissingToken(')', 'node'));
        beforeCount = node.range[0] - bodyOpeningParen.range[0];
        afterCount = bodyClosingParen.range[1] - node.range[1];
    }
    return sourceCode.getText(node, beforeCount, afterCount);
}
//# sourceMappingURL=getTextWithParentheses.js.map