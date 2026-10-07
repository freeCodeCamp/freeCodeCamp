"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _resolveShiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveShiftedAlias"));

var _resolveUnshiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveUnshiftedAlias"));

var _KeyOSAndLayoutAliasesDictionary = _interopRequireDefault(require("../../const/KeyOSAndLayoutAliasesDictionary"));

var _KeySequenceParser = _interopRequireDefault(require("./KeySequenceParser"));

var _resolveUnaltedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveUnaltedAlias"));

var _resolveAltedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveAltedAlias"));

var _resolveUnaltShiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveUnaltShiftedAlias"));

var _resolveAltShiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveAltShiftedAlias"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Serializes instances of KeyCombination to KeyCombinationString.
 *
 * Used primarily to serialize string representations of key events as they happen.
 * @class
 */
var KeyCombinationSerializer =
/*#__PURE__*/
function () {
  function KeyCombinationSerializer() {
    _classCallCheck(this, KeyCombinationSerializer);
  }

  _createClass(KeyCombinationSerializer, null, [{
    key: "serialize",

    /**
     * Returns a string representation of a single KeyCombination
     * @param {KeyCombination} keyCombination KeyCombination to serialize
     * @returns {string[]} Serialization of KeyCombination
     */
    value: function serialize(keyCombination) {
      var combinationIncludesShift = keyCombination['Shift'];
      var combinationIncludesAlt = keyCombination['Alt'];
      var keyCombinationIdDict = {};
      /**
       * List of key names in alphabetical order
       * @type {string[]}
       */

      var sortedKeys = Object.keys(keyCombination).sort();
      sortedKeys.forEach(function (keyName) {
        var keyAliases = [];

        if (combinationIncludesShift) {
          if (combinationIncludesAlt) {
            var unaltShiftedKeyNames = (0, _resolveUnaltShiftedAlias.default)(keyName);
            var altShiftedKeyNames = (0, _resolveAltShiftedAlias.default)(keyName);
            keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unaltShiftedKeyNames), _toConsumableArray(altShiftedKeyNames));
          } else {
            var unshiftedKeyNames = (0, _resolveUnshiftedAlias.default)(keyName);
            var shiftedKeyNames = (0, _resolveShiftedAlias.default)(keyName);
            keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unshiftedKeyNames), _toConsumableArray(shiftedKeyNames));
          }
        } else if (combinationIncludesAlt) {
          var unaltedKeyNames = (0, _resolveUnaltedAlias.default)(keyName);
          var altedKeyNames = (0, _resolveAltedAlias.default)(keyName);
          keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unaltedKeyNames), _toConsumableArray(altedKeyNames));
        } else {
          keyAliases.push(keyName);
          var keyAlias = _KeyOSAndLayoutAliasesDictionary.default[keyName];

          if (keyAlias) {
            keyAliases = [].concat(_toConsumableArray(keyAliases), _toConsumableArray(keyAlias));
          }
        }

        var keyCombinationIds = Object.keys(keyCombinationIdDict);

        if (keyCombinationIds.length > 0) {
          keyCombinationIds.forEach(function (keyCombinationId) {
            keyAliases.forEach(function (keyAlias) {
              keyCombinationIdDict[keyCombinationId + "+".concat(keyAlias)] = _objectSpread({}, keyCombinationIdDict[keyCombinationId], _defineProperty({}, keyAlias, true));
            });
            delete keyCombinationIdDict[keyCombinationId];
          });
        } else {
          keyAliases.forEach(function (keyAlias) {
            keyCombinationIdDict[keyAlias] = _defineProperty({}, keyAlias, true);
          });
        }
      });
      return Object.values(keyCombinationIdDict).map(function (keysInCombo) {
        return Object.keys(keysInCombo).sort().join('+');
      });
    }
    /**
     * Whether the specified key sequence is valid (is of the correct format and contains
     * combinations consisting entirely of valid keys)
     * @param {KeySequenceString} keySequence Key sequence to validate
     * @returns {boolean} Whether the key sequence is valid
     */

  }, {
    key: "isValidKeySerialization",
    value: function isValidKeySerialization(keySequence) {
      if (keySequence.length > 0) {
        return !!_KeySequenceParser.default.parse(keySequence, {
          ensureValidKeys: true
        }).combination;
      } else {
        return false;
      }
    }
  }]);

  return KeyCombinationSerializer;
}();

var _default = KeyCombinationSerializer;
exports.default = _default;