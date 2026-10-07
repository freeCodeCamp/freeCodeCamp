"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Creates an array of letter pairs from a given array
// origin: https://github.com/d3/d3-array/blob/master/src/pairs.js
const arrayPairs = array => {
  let ii = 0;
  const length = array.length - 1;
  let letter = array[0];
  const pairs = new Array(length < 0 ? 0 : length);

  while (ii < length) {
    pairs[ii] = [letter, letter = array[++ii]];
  }

  return pairs;
}; // Based on http://stackoverflow.com/a/23305385


const stringSimilarity = (str1, str2) => {
  if (str1.length > 0 && str2.length > 0) {
    const pairs1 = arrayPairs(str1);
    const pairs2 = arrayPairs(str2);
    const unionLen = pairs1.length + pairs2.length;
    let hitCount;
    hitCount = 0;

    _lodash.default.forIn(pairs1, val1 => {
      _lodash.default.forIn(pairs2, val2 => {
        if (_lodash.default.isEqual(val1, val2)) {
          hitCount++;
        }
      });
    });

    if (hitCount > 0) {
      return 2 * hitCount / unionLen;
    }
  }

  return 0;
};

var _default = (needle, haystack, weight = 0.5) => {
  return stringSimilarity(needle, haystack) >= Number(weight);
};

exports.default = _default;
module.exports = exports.default;