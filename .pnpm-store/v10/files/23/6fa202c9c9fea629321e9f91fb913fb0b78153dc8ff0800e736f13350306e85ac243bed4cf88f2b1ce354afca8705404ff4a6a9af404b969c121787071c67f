"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    const value = chars.value();
    if (value === ">" || value === "/") {
        return parseTagEnd(state);
    }
    if (value === "=") {
        return parseEqual(state);
    }
    if (!(0, utils_1.isWhitespace)(value)) {
        return parseNoneWhitespace(chars, state);
    }
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseTagEnd(state) {
    var _a;
    const tagName = (_a = state.contextParams[constants_1.TokenizerContextTypes.Attributes]) === null || _a === void 0 ? void 0 : _a.tagName;
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.OpenTagEnd;
    state.contextParams[constants_1.TokenizerContextTypes.OpenTagEnd] = { tagName: tagName };
    state.contextParams[constants_1.TokenizerContextTypes.Attributes] = undefined;
}
function parseNoneWhitespace(chars, state) {
    if (chars.value() === "<") {
        (0, utils_1.raise)((0, utils_1.calculateTokenPosition)(state, { keepBuffer: true }), "Unexpected end of tag. Expected '>' to close the opening tag.");
    }
    state.accumulatedContent.replace(state.decisionBuffer);
    state.currentContext = constants_1.TokenizerContextTypes.AttributeKey;
    state.sourceCode.next();
    state.decisionBuffer.clear();
}
function parseEqual(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: true });
    state.tokens.push({
        type: constants_1.TokenTypes.AttributeAssignment,
        value: state.decisionBuffer.value(),
        range: position.range,
        loc: position.loc,
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.AttributeValue;
    state.sourceCode.next();
}
