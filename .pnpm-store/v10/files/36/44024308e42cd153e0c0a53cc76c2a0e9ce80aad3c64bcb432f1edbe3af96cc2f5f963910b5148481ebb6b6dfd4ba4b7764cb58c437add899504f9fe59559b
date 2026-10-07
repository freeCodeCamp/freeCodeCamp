"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizeString = tokenizeString;
const globals_1 = require("../../../utils/globals");
function tokenizeString(patternsArb, value, minLength, maxLength) {
    if (value.length === 0) {
        if (minLength > 0) {
            return undefined;
        }
        return [];
    }
    if (maxLength <= 0) {
        return undefined;
    }
    const stack = [{ endIndexChunks: 0, nextStartIndex: 1, chunks: [] }];
    while (stack.length > 0) {
        const last = (0, globals_1.safePop)(stack);
        for (let index = last.nextStartIndex; index <= value.length; ++index) {
            const chunk = (0, globals_1.safeSubstring)(value, last.endIndexChunks, index);
            if (patternsArb.canShrinkWithoutContext(chunk)) {
                const newChunks = [...last.chunks, chunk];
                if (index === value.length) {
                    if (newChunks.length < minLength) {
                        break;
                    }
                    return newChunks;
                }
                (0, globals_1.safePush)(stack, { endIndexChunks: last.endIndexChunks, nextStartIndex: index + 1, chunks: last.chunks });
                if (newChunks.length < maxLength) {
                    (0, globals_1.safePush)(stack, { endIndexChunks: index, nextStartIndex: index + 1, chunks: newChunks });
                }
                break;
            }
        }
    }
    return undefined;
}
