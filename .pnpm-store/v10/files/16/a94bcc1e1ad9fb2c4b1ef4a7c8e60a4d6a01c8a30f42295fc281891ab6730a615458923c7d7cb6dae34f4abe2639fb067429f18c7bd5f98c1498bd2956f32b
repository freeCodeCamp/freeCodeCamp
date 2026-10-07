import { safeJoin, safeMap, safePush, safeSplit, safeSubstring, safeToLowerCase, safeToUpperCase, } from '../../../utils/globals.js';
export function wordsToJoinedStringMapper(words) {
    return safeJoin(safeMap(words, (w) => (w[w.length - 1] === ',' ? safeSubstring(w, 0, w.length - 1) : w)), ' ');
}
export function wordsToJoinedStringUnmapperFor(wordsArbitrary) {
    return function wordsToJoinedStringUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        const words = [];
        for (const candidate of safeSplit(value, ' ')) {
            if (wordsArbitrary.canShrinkWithoutContext(candidate))
                safePush(words, candidate);
            else if (wordsArbitrary.canShrinkWithoutContext(candidate + ','))
                safePush(words, candidate + ',');
            else
                throw new Error('Unsupported word');
        }
        return words;
    };
}
export function wordsToSentenceMapper(words) {
    let sentence = safeJoin(words, ' ');
    if (sentence[sentence.length - 1] === ',') {
        sentence = safeSubstring(sentence, 0, sentence.length - 1);
    }
    return safeToUpperCase(sentence[0]) + safeSubstring(sentence, 1) + '.';
}
export function wordsToSentenceUnmapperFor(wordsArbitrary) {
    return function wordsToSentenceUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        if (value.length < 2 ||
            value[value.length - 1] !== '.' ||
            value[value.length - 2] === ',' ||
            safeToUpperCase(safeToLowerCase(value[0])) !== value[0]) {
            throw new Error('Unsupported value');
        }
        const adaptedValue = safeToLowerCase(value[0]) + safeSubstring(value, 1, value.length - 1);
        const words = [];
        const candidates = safeSplit(adaptedValue, ' ');
        for (let idx = 0; idx !== candidates.length; ++idx) {
            const candidate = candidates[idx];
            if (wordsArbitrary.canShrinkWithoutContext(candidate))
                safePush(words, candidate);
            else if (idx === candidates.length - 1 && wordsArbitrary.canShrinkWithoutContext(candidate + ','))
                safePush(words, candidate + ',');
            else
                throw new Error('Unsupported word');
        }
        return words;
    };
}
export function sentencesToParagraphMapper(sentences) {
    return safeJoin(sentences, ' ');
}
export function sentencesToParagraphUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported type');
    }
    const sentences = safeSplit(value, '. ');
    for (let idx = 0; idx < sentences.length - 1; ++idx) {
        sentences[idx] += '.';
    }
    return sentences;
}
