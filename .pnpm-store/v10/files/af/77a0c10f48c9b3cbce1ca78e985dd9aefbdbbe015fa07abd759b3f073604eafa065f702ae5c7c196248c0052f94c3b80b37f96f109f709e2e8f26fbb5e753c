var _forEach = require('lodash.foreach');
var _map = require('lodash.map');
var _every = require('lodash.every');
var _maxBy = require('lodash.maxby');
var _flattenDeep = require('lodash.flattendeep');

exports.compareTwoStrings = compareTwoStrings;
exports.findBestMatch = findBestMatch;

function compareTwoStrings(str1, str2) {
  var result = null;
  result = calculateResultIfIdentical(str1, str2);
  if (result != null) {
    return result;
  }
  result = calculateResultIfEitherIsEmpty(str1, str2);
  if (result != null) {
    return result;
  }
  result = calculateResultIfBothAreSingleCharacter(str1, str2);
  if (result != null) {
    return result;
  }

  var pairs1 = wordLetterPairs(str1.toUpperCase());
  var pairs2 = wordLetterPairs(str2.toUpperCase());
  var intersection = 0;
  var union = pairs1.length + pairs2.length;

  _forEach(pairs1, function (pair1) {
    for(var i = 0; i < pairs2.length; i++) {
      var pair2 = pairs2[i];
      if (pair1 === pair2) {
        intersection++;
        pairs2.splice(i, 1);
        break;
      }
    }
  });

  return (2.0 * intersection) / union;

  // private functions ---------------------------
  function letterPairs(str) {
    var numPairs = str.length - 1;
    var pairs = [];
    for(var i = 0; i < numPairs; i++) {
      pairs[i] = str.substring(i, i + 2);
    }
    return pairs;
  }

  function wordLetterPairs(str) {
    return _flattenDeep(_map(str.split(' '), letterPairs));
  }

  function calculateResultIfIdentical(str1, str2) {
    if (str1.toUpperCase() == str2.toUpperCase()) {
      return 1;
    }
    return null;
  }

  function calculateResultIfBothAreSingleCharacter(str1, str2) {
    if (str1.length == 1 && str2.length == 1) {
      return 0;
    }
  }

  function calculateResultIfEitherIsEmpty(str1, str2) {
    // if both are empty strings
    if (str1.length == 0 && str2.length == 0) {
      return 1;
    }

    // if only one is empty string
    if ((str1.length + str2.length) > 0 && (str1.length * str2.length) == 0) {
      return 0;
    }
    return null;
  }
}


function findBestMatch(mainString, targetStrings) {
  if (!areArgsValid(mainString, targetStrings)) {
    throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
  }
  var ratings = _map(targetStrings, function (targetString) {
    return {
      target: targetString,
      rating: compareTwoStrings(mainString, targetString)
    };
  });

  return {
    ratings: ratings,
    bestMatch: _maxBy(ratings, 'rating')
  };

  // private functions ---------------------------
  function areArgsValid(mainString, targetStrings) {
    var mainStringIsAString = (typeof mainString === 'string');

    var targetStringsIsAnArrayOfStrings = Array.isArray(targetStrings) &&
      targetStrings.length > 0 &&
      _every(targetStrings, function (targetString) {
        return (typeof targetString === 'string');
      });

    return mainStringIsAString && targetStringsIsAnArrayOfStrings;
  }
}
