"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    const value = chars.value();
    if ((0, utils_1.isWhitespace)(value)) {
        return parseWhitespace(state);
    }
    if (value === ">") {
        return parseClosingCornerBrace(state);
    }
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function generateDoctypeOpenToken(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    return {
        type: constants_1.TokenTypes.DoctypeOpen,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
    };
}
function parseWhitespace(state) {
    state.tokens.push(generateDoctypeOpenToken(state));
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.DoctypeAttributes;
}
function parseClosingCornerBrace(state) {
    state.tokens.push(generateDoctypeOpenToken(state));
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.DoctypeClose;
}
