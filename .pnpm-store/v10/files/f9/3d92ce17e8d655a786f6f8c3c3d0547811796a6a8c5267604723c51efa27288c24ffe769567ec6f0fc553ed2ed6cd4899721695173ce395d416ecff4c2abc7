"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const COMMENT_END = "-->";
function parse(chars, state) {
    const value = chars.value();
    if (value === "-" || value === "--") {
        state.sourceCode.next();
        return;
    }
    if (value === COMMENT_END) {
        return parseCommentClose(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseCommentClose(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    const endRange = [
        position.range[1],
        position.range[1] + COMMENT_END.length,
    ];
    state.tokens.push({
        type: constants_1.TokenTypes.CommentContent,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
        parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.CommentContent),
    });
    state.tokens.push({
        type: constants_1.TokenTypes.CommentClose,
        value: state.decisionBuffer.value(),
        range: endRange,
        loc: state.sourceCode.getLocationOf(endRange),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Data;
    state.sourceCode.next();
}
