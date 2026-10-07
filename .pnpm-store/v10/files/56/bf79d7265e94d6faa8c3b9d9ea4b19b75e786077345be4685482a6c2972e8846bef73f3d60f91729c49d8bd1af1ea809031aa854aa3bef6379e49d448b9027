// @ts-check
// This is an internal module, not part of the KaTeX distribution,
// whose purpose is to generate `unicodeSymbols` in Parser.js
// In this way, only this module, and not the distribution/browser,
// needs String's normalize function. As this file is not transpiled,
// JSDoc type syntax is used.
const accents = require('./unicodeAccents');

/** @type {Record<string, string>} */
const result = {};
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "αβγδεϵζηθϑικλμνξοπϖρϱςστυφϕχψωΓΔΘΛΞΠΣΥΦΨΩ";
for (const letter of letters) {
    for (const accent of Object.getOwnPropertyNames(accents)) {
        const combined = letter + accent;
        const normalized = combined.normalize('NFC');
        if (normalized.length === 1) {
            result[normalized] = combined;
        }
        for (const accent2 of Object.getOwnPropertyNames(accents)) {
            if (accent === accent2) {
                continue;
            }
            const combined2 = combined + accent2;
            const normalized2 = combined2.normalize('NFC');
            if (normalized2.length === 1) {
                result[normalized2] = combined2;
            }
        }
    }
}

module.exports = result;
