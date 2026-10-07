import asciiSize from './_asciiSize.js';
import hasUnicode from './_hasUnicode.js';
import unicodeSize from './_unicodeSize.js';

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

export default stringSize;
