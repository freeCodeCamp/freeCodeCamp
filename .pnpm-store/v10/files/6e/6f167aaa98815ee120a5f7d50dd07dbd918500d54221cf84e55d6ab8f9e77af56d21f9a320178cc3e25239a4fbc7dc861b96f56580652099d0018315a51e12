"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    if (chars.value() === "<" ||
        chars.value() === "</" ||
        constants_1.INCOMPLETE_CLOSING_TAG_PATTERN.test(chars.value())) {
        state.sourceCode.next();
        return;
    }
    if (constants_1.CLOSING_SCRIPT_TAG_PATTERN.test(chars.value())) {
        return parseClosingScriptTag(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseClosingScriptTag(state) {
    if (state.accumulatedContent.value() !== "") {
        const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
        state.tokens.push({
            type: constants_1.TokenTypes.ScriptTagContent,
            value: state.accumulatedContent.value(),
            range: position.range,
            loc: position.loc,
            parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.ScriptTagContent),
        });
    }
    const range = [
        state.sourceCode.index() - (state.decisionBuffer.length() - 1),
        state.sourceCode.index() + 1,
    ];
    state.tokens.push({
        type: constants_1.TokenTypes.CloseScriptTag,
        value: state.decisionBuffer.value(),
        range,
        loc: state.sourceCode.getLocationOf(range),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Data;
    state.sourceCode.next();
}
