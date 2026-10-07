"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = parse;
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
function parse(chars, state) {
    const position = (0, utils_1.calculateTokenPosition)(state, { keepBuffer: true });
    state.tokens.push({
        type: constants_1.TokenTypes.DoctypeClose,
        value: state.decisionBuffer.value(),
        range: position.range,
        loc: position.loc,
    });
    state.accumulatedContent.clear();
    state.decisionBuffer.clear();
    state.currentContext = constants_1.TokenizerContextTypes.Data;
    state.sourceCode.next();
}
