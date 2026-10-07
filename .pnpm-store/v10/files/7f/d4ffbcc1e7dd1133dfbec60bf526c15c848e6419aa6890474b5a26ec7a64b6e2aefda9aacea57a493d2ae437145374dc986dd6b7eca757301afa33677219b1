"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    var _a;
    const wrapperChar = (_a = state.contextParams[constants_1.TokenizerContextTypes.AttributeValueWrapped]) === null || _a === void 0 ? void 0 : _a.wrapper;
    if (chars.value() === wrapperChar) {
        return parseWrapper(state);
    }
    state.accumulatedContent.concatBuffer(state.decisionBuffer);
    state.decisionBuffer.clear();
    state.sourceCode.next();
}
function parseWrapper(state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: false });
    const endWrapperPosition = position.range[1];
    state.tokens.push({
        type: constants_1.TokenTypes.AttributeValue,
        value: state.accumulatedContent.value(),
        range: position.range,
        loc: position.loc,
        parts: (0, utils_1.createParts)(state, constants_1.TokenTypes.AttributeValue),
    });
    const range = [endWrapperPosition, endWrapperPosition + 1];
    state.tokens.push({
        type: constants_1.TokenTypes.AttributeValueWrapperEnd,
        value: state.decisionBuffer.value(),
        range,
        loc: state.sourceCode.getLocationOf(range),
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Attributes;
    state.sourceCode.next();
    state.contextParams[constants_1.TokenizerContextTypes.AttributeValueWrapped] = undefined;
}
