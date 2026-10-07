/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 */
"use strict";

/**
 * Check whether given two characters are a surrogate pair.
 * @param {number} lead The code of the lead character.
 * @param {number} tail The code of the tail character.
 * @returns {boolean} `true` if the character pair is a surrogate pair.
 */
module.exports = function isSurrogatePair(lead, tail) {
    return lead >= 0xD800 && lead < 0xDC00 && tail >= 0xDC00 && tail < 0xE000;
};
