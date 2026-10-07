"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const token_types_1 = require("../../constants/token-types");
const utils_1 = require("../../utils");
function parse(chars, state) {
    if (isKeyBreak(chars)) {
        return parseKeyEnd(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function isKeyBreak(chars) {
    const value = chars.value();
    return value === "=" || value === "/" || value === ">" || (0, utils_1.isWhitespace)(value);
}
function parseKeyEnd(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    state.tokens.push({
        type: token_types_1.TokenTypes.AttributeKey,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
        parts: (0, utils_1.createParts)(state, token_types_1.TokenTypes.AttributeKey),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Attributes;
}
