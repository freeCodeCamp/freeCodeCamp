"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    if ((0, utils_1.isWhitespace)(chars.value()) || chars.value() === ">") {
        return parseAttributeEnd(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseAttributeEnd(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    state.tokens.push({
        type: constants_1.TokenTypes.DoctypeAttributeValue,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.DoctypeAttributes;
}
