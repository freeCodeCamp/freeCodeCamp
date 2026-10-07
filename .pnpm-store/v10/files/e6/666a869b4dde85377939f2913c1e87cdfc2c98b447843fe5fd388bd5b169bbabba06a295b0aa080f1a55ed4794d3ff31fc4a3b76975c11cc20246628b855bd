import asciiToArray from './_asciiToArray.js';
import hasUnicode from './_hasUnicode.js';
import unicodeToArray from './_unicodeToArray.js';

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

export default stringToArray;
