"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseValueEnd = parseValueEnd;
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parseValueEnd(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    state.tokens.push({
        type: constants_1.TokenTypes.AttributeValue,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
        parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.AttributeValue),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Attributes;
}
function parse(chars, state) {
    if ((0, utils_1.isWhitespace)(chars.value()) ||
        chars.value() === ">" ||
        chars.value() === "/") {
        return parseValueEnd(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
