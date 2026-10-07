"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stripSuperfluousWhitespace = _interopRequireDefault(require("../../utils/string/stripSuperfluousWhitespace"));

var _standardizeKeyName = _interopRequireDefault(require("../../helpers/parsing-key-maps/standardizeKeyName"));

var _isValidKey = _interopRequireWildcard(require("../../helpers/parsing-key-maps/isValidKey"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Returns a normalized KeyCombinationString (with the key names in the combination
 * sorted in alphabetical order)
 * @param {KeyName[]} keys List of key names to sort and reconstitute as a
 *        KeyCombinationString
 * @returns {NormalizedKeyCombinationString} Normalized KeyCombinationString
 */
function normalizedCombinationId(keys) {
  return keys.sort().join('+');
}
/**
 * Parses KeySequenceStrings and returns KeySequenceOptions
 *
 * Used primarily to parse strings describing hot key sequences and combinations
 * so that they may be matched with key events when they occur.
 * @class
 */


var KeySequenceParser =
/*#__PURE__*/
function () {
  function KeySequenceParser() {
    _classCallCheck(this, KeySequenceParser);
  }

  _createClass(KeySequenceParser, null, [{
    key: "parse",

    /**
     * @typedef {Object} BasicKeyCombination Object containing the basic information that
     *          describes a key combination
     * @property {KeyCombinationString} id - String description of keys involved in the key
     *          combination
     * @property {number} size - Number of keys involved in the combination
     * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
     *           in the key combination
     * @property {KeyEventType} keyEventType - Record index for key event that
     *          the matcher should match on
     */

    /**
     * @typedef {string} KeySequenceString String describing a sequence of one or more key
     * combinations with whitespace separating key combinations in the sequence and '+'
     * separating keys within a key combination.
     */

    /**
     * @typedef {KeySequenceString} NormalizedKeySequenceId key sequence id with all of the
     * combination id's normalized
     */

    /**
     * @typedef {Object} BasicKeySequence Object containing the basic information that
     *          describes a key sequence
     * @property {NormalizedKeySequenceId} prefix - Normalized key sequence id
     * @property {number} size - Number of combinations involved in the sequence
     */

    /**
     * @typedef {Object} KeySequenceObject Object containing description of a key sequence
     *          to compared against key events
     * @property {KeySequenceString} id Id describing key sequence used for matching against
     *            key events
     * @property {ComponentId} componentId Id associated with the HotKeys component
     *          that registered the key sequence
     * @property {BasicKeyCombination[]} sequence A list of key combinations involved in
     *            the sequence
     * @property {number} size Number of key combinations in the key sequence
     * @property {KeyEventType} keyEventType Index that matches key event type
     * @property {ActionName} actionName Name of the action that should be triggered if a
     *           keyboard event matching the sequence and event type occur
     */

    /**
     * @typedef {Object} KeySequenceOptions Object containing the results of parsing a
     *          KeySequenceString
     * @property {BasicKeyCombination} combination Properties of the final combination in
     *        the sequence
     * @property {BasicKeySequence} sequence Properties of the sequence of keys leading
     *        up to the final combination
     */

    /**
     * Parses a KeySequenceString and returns a KeySequenceOptions object containing
     * information about the sequence in a format that is easier to query
     * @param {KeySequenceString} sequenceString String describing a key sequence to
     *        parse
     * @param {Object} options Configuration object describing how the KeySequenceString
     *        should be parsed.
     * @param {KeyEventType} options.keyEventType Event record index indicating
     *        what key event the sequence should match
     * @param {boolean} options.ensureValidKeys Whether to throw an exception if an invalid
     *        key name is found in the key combination string.
     * @returns {KeySequenceOptions} Object containing information about the key
     *        sequence described by the KeySequenceString
     */
    value: function parse(sequenceString) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var trimmedSequenceString = (0, _stripSuperfluousWhitespace.default)(sequenceString);
      var keyCombinationsArray = trimmedSequenceString.split(' ');

      try {
        var nonTerminalCombinations = keyCombinationsArray.slice(0, keyCombinationsArray.length - 1);
        var terminalCombination = keyCombinationsArray[keyCombinationsArray.length - 1];
        var prefix = nonTerminalCombinations.map(function (keyCombination) {
          var keysInComboDict = parseCombination(keyCombination, options);
          return normalizedCombinationId(Object.keys(keysInComboDict));
        }).join(' ');
        var keysInComboDict = parseCombination(terminalCombination, options);
        var normalizedComboString = normalizedCombinationId(Object.keys(keysInComboDict));
        var combination = {
          id: normalizedComboString,
          keyDictionary: keysInComboDict,
          keyEventType: options.keyEventType,
          size: Object.keys(keysInComboDict).length
        };
        return {
          sequence: {
            prefix: prefix,
            size: nonTerminalCombinations.length + 1
          },
          combination: combination
        };
      } catch (InvalidKeyNameError) {
        return {
          sequence: null,
          combination: null
        };
      }
    }
  }]);

  return KeySequenceParser;
}();
/**
 * @typedef {string} KeyCombinationString String describing a combination of one or more
 * keys separated by '+'
 */

/**
 * @typedef {KeyCombinationString} NormalizedKeyCombinationString key combination id where
 * the keys have been normalized (sorted in alphabetical order)
 */

/**
 * @typedef {Object.<ReactKeyName, Boolean>} KeyDictionary Registry of the names
 * of keys in a particular combination, for easy/quick checking if a particular
 * key is in the key combination
 */

/**
 * Parses a key combination string and returns the corresponding KeyDictionary
 * @param {KeyCombinationString} string Describes key combination
 * @param {Object} options Options hash of how the string should be parsed
 * @param {boolean} options.ensureValidKeys Whether to throw an exception if an invalid
 *        key name is found in the key combination string.
 * @returns {KeyDictionary} Dictionary of keys in the parsed combination
 */


function parseCombination(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return string.replace(/^\+|(\s|[^+]\+)\+/, '$1plus').split('+').reduce(function (keyDictionary, keyName) {
    var finalKeyName = (0, _standardizeKeyName.default)(keyName);

    if (options.ensureValidKeys) {
      if (!(0, _isValidKey.default)(finalKeyName)) {
        throw new _isValidKey.InvalidKeyNameError();
      }
    }

    keyDictionary[finalKeyName] = true;
    return keyDictionary;
  }, {});
}

var _default = KeySequenceParser;
exports.default = _default;