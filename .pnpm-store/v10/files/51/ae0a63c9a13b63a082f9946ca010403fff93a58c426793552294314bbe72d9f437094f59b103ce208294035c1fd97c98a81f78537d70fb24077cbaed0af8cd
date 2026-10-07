function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import KeyEventSequenceIndex from '../../const/KeyEventSequenceIndex';
import KeyEventType from '../../const/KeyEventType';
import KeyCombinationSerializer from '../shared/KeyCombinationSerializer';
import resolveKeyAlias from '../../helpers/resolving-handlers/resolveKeyAlias';
import applicableAliasFunctions from '../../helpers/resolving-handlers/applicableAliasFunctions';
import KeyEventStateArrayManager from '../shared/KeyEventStateArrayManager';
import isEmpty from '../../utils/collection/isEmpty';
import size from '../../utils/collection/size';
import KeyEventState from '../../const/KeyEventState';
import dictionaryFrom from '../../utils/object/dictionaryFrom';
/**
 * Record of one or more keys pressed together, in a combination
 * @class
 */

var KeyCombination =
/*#__PURE__*/
function () {
  /**
   * Creates a new KeyCombination instance
   * @param {Object.<ReactKeyName, Array.<KeyEventState[]>>} keys Dictionary
   *        of keys
   * @returns {KeyCombination}
   */
  function KeyCombination() {
    var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, KeyCombination);

    this._keys = keys;
    this._includesKeyUp = false;

    this._update();
  }
  /********************************************************************************
   * Getters
   *********************************************************************************/

  /**
   * List of ids (serialized representations) for the keys involved in the combination
   * @returns {KeySequence[]} List of combination ids
   */


  _createClass(KeyCombination, [{
    key: "getIds",
    value: function getIds() {
      return this._ids;
    }
    /**
     * Dictionary mapping keys to their acceptable aliases. This includes "shifted" or
     * "alted" key characters.
     * @returns {Object.<ReactKeyName, ReactKeyName[]>}
     */

  }, {
    key: "getKeyAliases",
    value: function getKeyAliases() {
      return this._keyAliases;
    }
    /**
     * A normalized version of the key, achieved by comparing it to the list of known
     * aliases for the keys in the combination
     * @param {ReactKeyName} keyName Name of the key to normalize
     * @returns {ReactKeyName} Normalized key name
     */

  }, {
    key: "getNormalizedKeyName",
    value: function getNormalizedKeyName(keyName) {
      var keyState = this._keys[keyName];

      if (keyState) {
        return keyName;
      } else {
        var keyAlias = this._keyAliases[keyName];

        if (keyAlias) {
          return keyAlias;
        } else {
          return keyName;
        }
      }
    }
    /********************************************************************************
     * Query attributes of entire combination
     *********************************************************************************/

    /**
     * Number of keys involved in the combination
     * @returns {number} Number of keys
     */

  }, {
    key: "getNumberOfKeys",
    value: function getNumberOfKeys() {
      return size(this._keys);
    }
    /**
     * Whether there are any keys in the combination
     * @returns {boolean} true if there is 1 or more keys involved in the combination,
     *          else false.
     */

  }, {
    key: "any",
    value: function any() {
      return Object.keys(this._getKeyStates()).length > 0;
    }
    /**
     * Whether any of the keys in the combination have been released
     * @returns {boolean} true if at least 1 key has been released in the combination
     */

  }, {
    key: "isEnding",
    value: function isEnding() {
      return this._includesKeyUp;
    }
    /**
     * Whether there are any keys in the current combination still being pressed
     * @returns {boolean} True if all keys in the current combination are released
     */

  }, {
    key: "hasEnded",
    value: function hasEnded() {
      return isEmpty(this.keysStillPressedDict());
    }
    /********************************************************************************
     * Adding & modifying key states
     *********************************************************************************/

    /**
     * Add a new key to the combination (starting with a state of keydown)
     * @param {ReactKeyName} keyName Name of key
     * @param {KeyEventState} keyEventState State key is in
     * @returns {void}
     */

  }, {
    key: "addKey",
    value: function addKey(keyName, keyEventState) {
      this._setKeyState(keyName, [KeyEventStateArrayManager.newRecord(), KeyEventStateArrayManager.newRecord(KeyEventType.keydown, keyEventState)]);
    }
    /**
     * Adds a key event to the current key combination (as opposed to starting a new
     * keyboard combination).
     * @param {ReactKeyName} keyName - Name of the key to add to the current combination
     * @param {KeyEventType} recordIndex - Index in record to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "setKeyState",
    value: function setKeyState(keyName, recordIndex, keyEventState) {
      var existingRecord = this._getKeyState(keyName);

      if (this.isKeyIncluded(keyName)) {
        var previous = KeyEventStateArrayManager.clone(existingRecord[1]);
        var current = KeyEventStateArrayManager.clone(previous);
        KeyEventStateArrayManager.setBit(current, recordIndex, keyEventState);

        this._setKeyState(keyName, [previous, current]);
      } else {
        this.addKey(keyName, keyEventState);
      }

      if (recordIndex === KeyEventType.keyup) {
        this._includesKeyUp = true;
      }
    }
    /********************************************************************************
     * Iteration and subsets
     *********************************************************************************/

    /**
     * @callback forEachHandler
     * @param {ReactKeyName} keyName Name of a key in the combination
     * @returns {void}
     */

    /**
     * Iterates over every key in the combination, calling an function with each
     * key name
     * @param {forEachHandler} handler Function to call with the name of each key
     *        in the combination
     * @returns {void}
     */

  }, {
    key: "forEachKey",
    value: function forEachKey(handler) {
      return Object.keys(this._keys).forEach(handler);
    }
    /**
     * @callback evaluator
     * @param {ReactKeyName} keyName Name of a key in the combination
     * @returns {boolean}
     */

    /**
     * Whether at least one of the keys causes a evaluator function to return true
     * @callback {evaluator} evaluator Function to evaluate each key
     * @returns {boolean} Whether at least one key satisfies the evaluator
     */

  }, {
    key: "some",
    value: function some(evaluator) {
      return Object.keys(this._keys).some(evaluator);
    }
    /**
     * Dictionary of keys included in the combination record
     * @returns {Object.<ReactKeyName, boolean>}
     */

  }, {
    key: "getKeyDictionary",
    value: function getKeyDictionary() {
      return dictionaryFrom(Object.keys(this._getKeyStates()), true);
    }
    /**
     * Returns a new KeyCombination without the keys that have been
     * released (had the keyup event recorded). Essentially, the keys that are
     * currently still pressed down at the time a key event is being handled.
     * @returns {KeyCombination} New KeyCombination with all of the
     *        keys with keyup events omitted
     */

  }, {
    key: "keysStillPressedDict",
    value: function keysStillPressedDict() {
      var _this = this;

      return Object.keys(this._keys).reduce(function (memo, keyName) {
        if (_this.isKeyStillPressed(keyName)) {
          memo[keyName] = _this._getKeyState(keyName);
        }

        return memo;
      }, {});
    }
    /********************************************************************************
     * Query individual keys
     *********************************************************************************/

    /**
     * Whether key is in the combination
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination
     */

  }, {
    key: "isKeyIncluded",
    value: function isKeyIncluded(keyName) {
      return !!this._getKeyState(keyName);
    }
    /**
     * Whether key is in the combination and has yet to be released
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination and yet to be released
     */

  }, {
    key: "isKeyStillPressed",
    value: function isKeyStillPressed(keyName) {
      return this.isEventTriggered(keyName, KeyEventType.keypress) && !this.isKeyReleased(keyName);
    }
    /**
     * Whether key is in the combination and been released
     * @param {ReactKeyName} keyName Name of key
     * @returns {boolean} true if the key is in the combination and has been released
     */

  }, {
    key: "isKeyReleased",
    value: function isKeyReleased(keyName) {
      return this.isEventTriggered(keyName, KeyEventType.keyup);
    }
    /**
     * Whether an event has been recorded for a key yet
     * @param {ReactKeyName} keyName Name of the key
     * @param {KeyEventType} keyEventType Index of the event type
     * @returns {boolean} true if the event has been recorded for the key
     */

  }, {
    key: "isEventTriggered",
    value: function isEventTriggered(keyName, keyEventType) {
      return this._getKeyStateType(keyName, KeyEventSequenceIndex.current, keyEventType);
    }
    /**
     * Whether an event has been previously recorded for a key (the second most recent
     * event to occur for the key)
     * @param {ReactKeyName} keyName Name of the key
     * @param {KeyEventType} keyEventType Index of the event type
     * @returns {boolean} true if the event has been previously recorded for the key
     */

  }, {
    key: "wasEventPreviouslyTriggered",
    value: function wasEventPreviouslyTriggered(keyName, keyEventType) {
      return this._getKeyStateType(keyName, KeyEventSequenceIndex.previous, keyEventType);
    }
    /**
     * Whether a keypress event is currently being simulated
     * @param {ReactKeyName} keyName Name of the key
     * @returns {boolean} true if the keypress event is currently being simulated for the
     *        key
     */

  }, {
    key: "isKeyPressSimulated",
    value: function isKeyPressSimulated(keyName) {
      return this._isKeyEventSimulated(keyName, KeyEventType.keypress);
    }
    /**
     * Whether a keyup event is currently being simulated
     * @param {ReactKeyName} keyName Name of the key
     * @returns {boolean} true if the keyup event is currently being simulated for the
     *        key
     */

  }, {
    key: "isKeyUpSimulated",
    value: function isKeyUpSimulated(keyName) {
      return this._isKeyEventSimulated(keyName, KeyEventType.keyup);
    }
    /********************************************************************************
     * Presentation
     *********************************************************************************/

    /**
     * Return a serialized description of the keys in the combination
     * @returns {KeySequence}
     */

  }, {
    key: "describe",
    value: function describe() {
      return this.getIds()[0];
    }
    /**
     * A plain JavaScript representation of the key combination record, useful for
     * serialization or debugging
     * @returns {Object} Serialized representation of the combination record
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        keys: this._getKeyStates(),
        ids: this.getIds(),
        keyAliases: this.getKeyAliases()
      };
    }
    /********************************************************************************
     * Private methods
     *********************************************************************************/

  }, {
    key: "_getKeyStateType",
    value: function _getKeyStateType(keyName, keyStage, keyEventType) {
      var keyState = this._getKeyState(keyName);

      return keyState && keyState[keyStage][keyEventType];
    }
  }, {
    key: "_update",
    value: function _update() {
      this._ids = KeyCombinationSerializer.serialize(this._keys);
      this._keyAliases = buildKeyAliases(this._keys);
    }
  }, {
    key: "_isKeyEventSimulated",
    value: function _isKeyEventSimulated(keyName, keyEventType) {
      return this.isEventTriggered(keyName, keyEventType) === KeyEventState.simulated;
    }
  }, {
    key: "_getKeyStates",
    value: function _getKeyStates() {
      return this._keys;
    }
  }, {
    key: "_getKeyState",
    value: function _getKeyState(keyName) {
      var keyState = this._keys[keyName];

      if (keyState) {
        return keyState;
      } else {
        var keyAlias = this._keyAliases[keyName];

        if (keyAlias) {
          return this._keys[keyAlias];
        }
      }
    }
  }, {
    key: "_setKeyState",
    value: function _setKeyState(keyName, keyState) {
      var keyAlias = this.getNormalizedKeyName(keyName);
      this._keys[keyAlias] = keyState;

      this._update();
    }
  }]);

  return KeyCombination;
}();

function buildKeyAliases(keyDictionary) {
  return Object.keys(keyDictionary).reduce(function (memo, keyName) {
    resolveKeyAlias(keyName).forEach(function (normalizedKey) {
      applicableAliasFunctions(keyDictionary).forEach(function (aliasFunction) {
        aliasFunction(normalizedKey).forEach(function (keyAlias) {
          if (keyAlias !== keyName || keyName !== normalizedKey) {
            memo[keyAlias] = keyName;
          }
        });
      });
    });
    return memo;
  }, {});
}

export default KeyCombination;