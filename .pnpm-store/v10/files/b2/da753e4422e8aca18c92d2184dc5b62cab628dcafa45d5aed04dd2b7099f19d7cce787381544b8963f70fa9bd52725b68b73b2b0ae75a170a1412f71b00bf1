"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wordsToJoinedStringMapper = wordsToJoinedStringMapper;
exports.wordsToJoinedStringUnmapperFor = wordsToJoinedStringUnmapperFor;
exports.wordsToSentenceMapper = wordsToSentenceMapper;
exports.wordsToSentenceUnmapperFor = wordsToSentenceUnmapperFor;
exports.sentencesToParagraphMapper = sentencesToParagraphMapper;
exports.sentencesToParagraphUnmapper = sentencesToParagraphUnmapper;
const globals_1 = require("../../../utils/globals");
function wordsToJoinedStringMapper(words) {
    return (0, globals_1.safeJoin)((0, globals_1.safeMap)(words, (w) => (w[w.length - 1] === ',' ? (0, globals_1.safeSubstring)(w, 0, w.length - 1) : w)), ' ');
}
function wordsToJoinedStringUnmapperFor(wordsArbitrary) {
    return function wordsToJoinedStringUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        const words = [];
        for (const candidate of (0, globals_1.safeSplit)(value, ' ')) {
            if (wordsArbitrary.canShrinkWithoutContext(candidate))
                (0, globals_1.safePush)(words, candidate);
            else if (wordsArbitrary.canShrinkWithoutContext(candidate + ','))
                (0, globals_1.safePush)(words, candidate + ',');
            else
                throw new Error('Unsupported word');
        }
        return words;
    };
}
function wordsToSentenceMapper(words) {
    let sentence = (0, globals_1.safeJoin)(words, ' ');
    if (sentence[sentence.length - 1] === ',') {
        sentence = (0, globals_1.safeSubstring)(sentence, 0, sentence.length - 1);
    }
    return (0, globals_1.safeToUpperCase)(sentence[0]) + (0, globals_1.safeSubstring)(sentence, 1) + '.';
}
function wordsToSentenceUnmapperFor(wordsArbitrary) {
    return function wordsToSentenceUnmapper(value) {
        if (typeof value !== 'string') {
            throw new Error('Unsupported type');
        }
        if (value.length < 2 ||
            value[value.length - 1] !== '.' ||
            value[value.length - 2] === ',' ||
            (0, globals_1.safeToUpperCase)((0, globals_1.safeToLowerCase)(value[0])) !== value[0]) {
            throw new Error('Unsupported value');
        }
        const adaptedValue = (0, globals_1.safeToLowerCase)(value[0]) + (0, globals_1.safeSubstring)(value, 1, value.length - 1);
        const words = [];
        const candidates = (0, globals_1.safeSplit)(adaptedValue, ' ');
        for (let idx = 0; idx !== candidates.length; ++idx) {
            const candidate = candidates[idx];
            if (wordsArbitrary.canShrinkWithoutContext(candidate))
                (0, globals_1.safePush)(words, candidate);
            else if (idx === candidates.length - 1 && wordsArbitrary.canShrinkWithoutContext(candidate + ','))
                (0, globals_1.safePush)(words, candidate + ',');
            else
                throw new Error('Unsupported word');
        }
        return words;
    };
}
function sentencesToParagraphMapper(sentences) {
    return (0, globals_1.safeJoin)(sentences, ' ');
}
function sentencesToParagraphUnmapper(value) {
    if (typeof value !== 'string') {
        throw new Error('Unsupported type');
    }
    const sentences = (0, globals_1.safeSplit)(value, '. ');
    for (let idx = 0; idx < sentences.length - 1; ++idx) {
        sentences[idx] += '.';
    }
    return sentences;
}
