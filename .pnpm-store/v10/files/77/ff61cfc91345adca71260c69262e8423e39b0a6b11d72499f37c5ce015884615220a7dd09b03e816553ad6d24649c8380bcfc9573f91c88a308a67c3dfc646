"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSuggestion;
var _damerauLevenshtein = _interopRequireDefault(require("damerau-levenshtein"));
var _object = _interopRequireDefault(require("object.fromentries"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Minimum edit distance to be considered a good suggestion.
var THRESHOLD = 2;

/**
 * Returns an array of suggestions given a word and a dictionary and limit of suggestions
 * to return.
 */
function getSuggestion(word) {
  var dictionary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  var distances = (0, _object["default"])(dictionary.map(function (dictionaryWord) {
    var distance = (0, _damerauLevenshtein["default"])(word.toUpperCase(), dictionaryWord.toUpperCase());
    var steps = distance.steps;
    return [dictionaryWord, steps];
  }));
  return Object.keys(distances).filter(function (suggestion) {
    return distances[suggestion] <= THRESHOLD;
  }).sort(function (a, b) {
    return distances[a] - distances[b];
  }) // Sort by distance
  .slice(0, limit);
}
module.exports = exports.default;