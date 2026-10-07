"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAwaitTokenRemovalRange = getAwaitTokenRemovalRange;
function getAwaitTokenRemovalRange(sourceCode, awaitToken) {
    const startAt = awaitToken.range[0];
    let endAt = awaitToken.range[1];
    const nextToken = sourceCode.getTokenAfter(awaitToken, {
        includeComments: true,
    });
    /* istanbul ignore else */ if (nextToken) {
        endAt = nextToken.range[0];
    }
    return [startAt, endAt];
}
//# sourceMappingURL=getAwaitTokenRemovalRange.js.map