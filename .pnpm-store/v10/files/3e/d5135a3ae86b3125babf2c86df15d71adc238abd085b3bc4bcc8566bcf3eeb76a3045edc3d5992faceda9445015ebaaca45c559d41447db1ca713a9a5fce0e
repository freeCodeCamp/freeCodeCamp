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
	return lead >= 0xd800 && lead < 0xdc00 && tail >= 0xdc00 && tail < 0xe000;
};
