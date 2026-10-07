"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    const value = chars.value();
    if (value === '"' || value === "'") {
        return parseWrapper(state);
    }
    if (value === ">" || value === "/") {
        return parseTagEnd(state);
    }
    if (!(0, utils_1.isWhitespace)(value)) {
        return parseBare(state);
    }
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseWrapper(state) {
    const wrapper = state.decisionBuffer.value();
    const range = [state.sourceCode.index(), state.sourceCode.index() + 1];
    state.tokens.push({
        type: constants_1.TokenTypes.AttributeValueWrapperStart,
        value: wrapper,
        range,
        loc: state.sourceCode.getLocationOf(range),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.AttributeValueWrapped;
    state.contextParams[constants_1.TokenizerContextTypes.AttributeValueWrapped] = {
        wrapper: wrapper,
    };
    state.sourceCode.next();
}
function parseBare(state) {
    state.accumulatedContent.replace(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.AttributeValueBare;
    state.sourceCode.next();
}
function parseTagEnd(state) {
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Attributes;
}
