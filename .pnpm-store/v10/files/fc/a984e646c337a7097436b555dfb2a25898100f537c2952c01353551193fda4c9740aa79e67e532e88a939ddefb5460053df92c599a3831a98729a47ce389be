/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

/**
 * Check whether a given character is a combining mark or not.
 * @param {number} codePoint The character code to check.
 * @returns {boolean} `true` if the character belongs to the category, any of `Mc`, `Me`, and `Mn`.
 */
module.exports = function isCombiningCharacter(codePoint) {
    return /^[\p{Mc}\p{Me}\p{Mn}]$/u.test(String.fromCodePoint(codePoint));
};
