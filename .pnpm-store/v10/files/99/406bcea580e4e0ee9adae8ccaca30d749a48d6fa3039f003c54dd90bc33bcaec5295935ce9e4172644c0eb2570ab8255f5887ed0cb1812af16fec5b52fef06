function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

import hasKey from './object/hasKey';

function invertArrayDictionary(dictionary) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(dictionary).reduce(function (memo, key) {
    var arrayValue = dictionary[key];
    arrayValue.forEach(function (shiftedKey) {
      if (!hasKey(memo, shiftedKey)) {
        memo[shiftedKey] = [];
      }

      memo[shiftedKey].push(key);
    });

    if (options.includeOriginal) {
      if (!hasKey(memo, key)) {
        memo[key] = [];
      }

      memo[key] = [].concat(_toConsumableArray(memo[key]), _toConsumableArray(arrayValue));
    }

    return memo;
  }, {});
}

export default invertArrayDictionary;