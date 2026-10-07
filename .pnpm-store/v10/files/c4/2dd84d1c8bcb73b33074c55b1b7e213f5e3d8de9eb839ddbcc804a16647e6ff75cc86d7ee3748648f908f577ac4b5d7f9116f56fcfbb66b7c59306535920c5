"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    var _a;
    if (chars.value() === "<" ||
        chars.value() === "</" ||
        constants_1.INCOMPLETE_CLOSING_TAG_PATTERN.test(chars.value())) {
        state.sourceCode.next();
        return;
    }
    const regex = new RegExp("</" +
        ((_a = state.contextParams[constants_1.TokenizerContextTypes.CustomTagRawContent]) === null || _a === void 0 ? void 0 : _a.tagName) +
        "\\s*>");
    if (regex.test(chars.value())) {
        return parseClosingCustomTag(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseClosingCustomTag(state) {
    if (state.accumulatedContent.value() !== "") {
        const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
        state.tokens.push({
            type: constants_1.TokenTypes.RawContent,
            value: state.accumulatedContent.value(),
            range: position.range,
            loc: position.loc,
            parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.RawContent),
        });
    }
    const range = [
        state.sourceCode.index() - (state.decisionBuffer.length() - 1),
        state.sourceCode.index() + 1,
    ];
    state.tokens.push({
        type: constants_1.TokenTypes.CloseTag,
        value: state.decisionBuffer.value(),
        range,
        loc: state.sourceCode.getLocationOf(range),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.contextParams[constants_1.TokenizerContextTypes.CustomTagRawContent] = undefined;
    state.currentContext = constants_1.TokenizerContextTypes.Data;
    state.sourceCode.next();
}
