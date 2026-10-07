"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const tokensMap = {
    script: constants_1.TokenTypes.OpenScriptTagStart,
    style: constants_1.TokenTypes.OpenStyleTagStart,
    default: constants_1.TokenTypes.OpenTagStart,
};
function parse(chars, state) {
    if (chars.value() === ">" || chars.value() === "/") {
        return parseTagEnd(state);
    }
    if ((0, utils_1.isWhitespace)(chars.value())) {
        return parseWhitespace(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseWhitespace(state) {
    const tagName = (0, utils_1.parseOpenTagName)(state.accumulatedContent.value());
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    state.tokens.push({
        type: tokensMap[tagName] || tokensMap.default,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Attributes;
    state.contextParams[constants_1.TokenizerContextTypes.Attributes] = { tagName };
    state.sourceCode.next();
}
function parseTagEnd(state) {
    const tagName = (0, utils_1.parseOpenTagName)(state.accumulatedContent.value());
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    state.tokens.push({
        type: tokensMap[tagName] || tokensMap.default,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
    });
    state.decisionBuffer.clear();
    state.accumulatedContent.clear();
    state.currentContext = constants_1.TokenizerContextTypes.OpenTagEnd;
    state.contextParams[constants_1.TokenizerContextTypes.OpenTagEnd] = { tagName };
}
