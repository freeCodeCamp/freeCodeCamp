"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const CLOSING_STYLE_TAG_PATTERN = /<\/style\s*>/i;
function parse(chars, state) {
    if (chars.value() === "<" ||
        chars.value() === "</" ||
        constants_1.INCOMPLETE_CLOSING_TAG_PATTERN.test(chars.value())) {
        state.sourceCode.next();
        return;
    }
    if (CLOSING_STYLE_TAG_PATTERN.test(chars.value())) {
        return parseClosingStyleTag(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseClosingStyleTag(state) {
    if (state.accumulatedContent.value() !== "") {
        const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
        state.tokens.push({
            type: constants_1.TokenTypes.StyleTagContent,
            value: state.accumulatedContent.value(),
            range: position.range,
            loc: position.loc,
            parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.StyleTagContent),
        });
    }
    const range = [
        state.sourceCode.index() - (state.decisionBuffer.length() - 1),
        state.sourceCode.index() + 1,
    ];
    state.tokens.push({
        type: constants_1.TokenTypes.CloseStyleTag,
        value: state.decisionBuffer.value(),
        range,
        loc: state.sourceCode.getLocationOf(range),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Data;
    state.sourceCode.next();
}
