function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import KeyCombination from './KeyCombination';
/**
 * List of key combinations seen by hot key components
 * @class
 */

var KeyHistory =
/*#__PURE__*/
function () {
  /**
   * Creates a new KeyHistory instance
   * @param {Number} maxLength Maximum length of the list.
   * @param {KeyCombination} startingPoint Initial state of first combination
   * @returns {KeyHistory}
   */
  function KeyHistory(_ref) {
    var maxLength = _ref.maxLength;
    var startingPoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, KeyHistory);

    this._records = [];
    this._maxLength = maxLength;

    if (startingPoint) {
      this._push(startingPoint);
    } else {
      this._push(new KeyCombination());
    }
  }
  /**
   * A subset of the most recently press key combinations
   * @param {Number} numberOfCombinations The number of most recent key combinations
   * @returns {KeyCombination[]} List of key combinations
   */


  _createClass(KeyHistory, [{
    key: "getMostRecentCombinations",
    value: function getMostRecentCombinations(numberOfCombinations) {
      return this._records.slice(-numberOfCombinations, -1);
    }
    /**
     * Whether any keys have been stored in the key history
     * @returns {boolean} true if there is at least one key combination, else false
     */

  }, {
    key: "any",
    value: function any() {
      return this._records.some(function (keyCombination) {
        return keyCombination.any();
      });
    }
    /**
     * The number of key combinations in the history (limited by the max length)
     * @returns {number} Number of key combinations
     */

  }, {
    key: "getLength",
    value: function getLength() {
      return this._records.length;
    }
    /**
     * Most recent or current key combination
     * @returns {KeyCombination} Key combination record
     */

  }, {
    key: "getCurrentCombination",
    value: function getCurrentCombination() {
      return this._records[this.getLength() - 1];
    }
    /**
     * Adds a key event to the current key combination (as opposed to starting a new
     * keyboard combination).
     * @param {ReactKeyName} keyName - Name of the key to add to the current combination
     * @param {KeyEventType} recordIndex - Index in record to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "addKeyToCurrentCombination",
    value: function addKeyToCurrentCombination(keyName, recordIndex, keyEventState) {
      this._ensureInitialKeyCombination();

      this.getCurrentCombination().setKeyState(keyName, recordIndex, keyEventState);
    }
    /**
     * Sets a new maximum length for the key combination history. Once the number of
     * key combinations exceeds this length, the oldest is dropped.
     * @param {Number} length New maximum length of the key history
     */

  }, {
    key: "setMaxLength",
    value: function setMaxLength(length) {
      this._maxLength = length;

      this._trimHistory();
    }
    /**
     * Adds a new KeyCombination to the event history.
     * @param {ReactKeyName} keyName - Name of the keyboard key to add to the new
     *        KeyCombination
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "startNewKeyCombination",
    value: function startNewKeyCombination(keyName, keyEventState) {
      this._ensureInitialKeyCombination();

      var newCombinationRecord = new KeyCombination(this.getCurrentCombination().keysStillPressedDict());
      newCombinationRecord.addKey(keyName, keyEventState);

      this._push(newCombinationRecord);
    }
    /**
     * A plain JavaScript representation of the key combination history, useful for
     * serialization or debugging
     * @returns {Object[]} Serialized representation of the registry
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this._records.map(function (keyCombination) {
        return keyCombination.toJSON();
      });
    }
    /********************************************************************************
     * Private methods
     ********************************************************************************/

  }, {
    key: "_ensureInitialKeyCombination",
    value: function _ensureInitialKeyCombination() {
      if (this.getLength() === 0) {
        this._push(new KeyCombination());
      }
    }
  }, {
    key: "_push",
    value: function _push(record) {
      this._trimHistory();

      this._records.push(record);
    }
  }, {
    key: "_trimHistory",
    value: function _trimHistory() {
      while (this.getLength() > this._maxLength) {
        /**
         * We know the longest key sequence registered for the currently focused
         * components, so we don't need to keep a record of history longer than
         * that
         */
        this._shift();
      }
    }
  }, {
    key: "_shift",
    value: function _shift() {
      this._records.shift();
    }
  }]);

  return KeyHistory;
}();

export default KeyHistory;