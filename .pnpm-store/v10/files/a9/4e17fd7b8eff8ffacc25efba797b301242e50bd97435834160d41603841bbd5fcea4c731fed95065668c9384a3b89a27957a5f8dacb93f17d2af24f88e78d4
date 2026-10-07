"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTokenCharactersRange = calculateTokenCharactersRange;
function calculateTokenCharactersRange(state, { keepBuffer }) {
    const startPosition = state.sourceCode.index() -
        (state.accumulatedContent.length() - 1) -
        state.decisionBuffer.length();
    let endPosition;
    if (!keepBuffer) {
        endPosition = state.sourceCode.index() - state.decisionBuffer.length();
    }
    else {
        endPosition = state.sourceCode.index();
    }
    return [startPosition, endPosition + 1];
}
