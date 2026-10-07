"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    if (chars.value() === '"' || chars.value() === "'") {
        return parseWrapper(state);
    }
    if (chars.value() === ">") {
        return parseClosingCornerBrace(state);
    }
    if (!(0, utils_1.isWhitespace)(chars.value())) {
        return parseBare(state);
    }
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseWrapper(state) {
    const wrapper = state.decisionBuffer.value();
    const range = [
        state.sourceCode.index(),
        state.sourceCode.index() + wrapper.length,
    ];
    state.tokens.push({
        type: constants_1.TokenTypes.DoctypeAttributeWrapperStart,
        value: wrapper,
        range,
        loc: state.sourceCode.getLocationOf(range),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.DoctypeAttributeWrapped;
    state.contextParams[constants_1.TokenizerContextTypes.DoctypeAttributeWrapped] = {
        wrapper: wrapper,
    };
    state.sourceCode.next();
}
function parseBare(state) {
    state.accumulatedContent.replace(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.DoctypeAttributeBare;
    state.sourceCode.next();
}
function parseClosingCornerBrace(state) {
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.DoctypeClose;
}
