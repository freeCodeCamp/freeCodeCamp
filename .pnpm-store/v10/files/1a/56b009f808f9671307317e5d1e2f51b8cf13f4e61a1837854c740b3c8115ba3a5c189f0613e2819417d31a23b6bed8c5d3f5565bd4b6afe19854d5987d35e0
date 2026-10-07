import { safePop, safePush, safeSubstring } from '../../../utils/globals.js';
export function tokenizeString(patternsArb, value, minLength, maxLength) {
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
        const last = safePop(stack);
        for (let index = last.nextStartIndex; index <= value.length; ++index) {
            const chunk = safeSubstring(value, last.endIndexChunks, index);
            if (patternsArb.canShrinkWithoutContext(chunk)) {
                const newChunks = [...last.chunks, chunk];
                if (index === value.length) {
                    if (newChunks.length < minLength) {
                        break;
                    }
                    return newChunks;
                }
                safePush(stack, { endIndexChunks: last.endIndexChunks, nextStartIndex: index + 1, chunks: last.chunks });
                if (newChunks.length < maxLength) {
                    safePush(stack, { endIndexChunks: index, nextStartIndex: index + 1, chunks: newChunks });
                }
                break;
            }
        }
    }
    return undefined;
}
