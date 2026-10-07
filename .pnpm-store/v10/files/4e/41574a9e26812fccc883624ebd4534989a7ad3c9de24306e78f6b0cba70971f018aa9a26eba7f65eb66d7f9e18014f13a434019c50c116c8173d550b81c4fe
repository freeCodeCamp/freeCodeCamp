"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isUndefined = _interopRequireDefault(require("../../utils/isUndefined"));

var _KeyEventState = _interopRequireDefault(require("../../const/KeyEventState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Creates and modifies KeyEvents
 * @class
 */
var KeyEventStateArrayManager =
/*#__PURE__*/
function () {
  function KeyEventStateArrayManager() {
    _classCallCheck(this, KeyEventStateArrayManager);
  }

  _createClass(KeyEventStateArrayManager, null, [{
    key: "newRecord",

    /**
     * Makes a new KeyEvent with one of the bits set to true
     * @param {KeyEventType=} keyEventType Index of bit to set to true
     * @param {KeyEventState} keyEventState The state to set the key event to
     * @returns {KeyEvent} New key event record with bit set to true
     */
    value: function newRecord(keyEventType, keyEventState) {
      var record = [_KeyEventState.default.unseen, _KeyEventState.default.unseen, _KeyEventState.default.unseen];

      if (!(0, _isUndefined.default)(keyEventType)) {
        for (var i = 0; i <= keyEventType; i++) {
          record[i] = keyEventState;
        }
      }

      return record;
    }
    /**
     * Sets a bit in the map to true
     * @param {KeyEvent} record Map to set a bit to true
     * @param {KeyEventType} index Index of bit to set
     * @param {KeyEventState} keyEventState The state to set the key event to
     */

  }, {
    key: "setBit",
    value: function setBit(record, index, keyEventState) {
      record[index] = keyEventState;
      return record;
    }
    /**
     * Returns a new record with the same values as the one passed to it
     * @param {KeyEvent} original Record to copy
     * @returns {KeyEvent} Record with the same values as the original
     */

  }, {
    key: "clone",
    value: function clone(original) {
      var record = this.newRecord();

      for (var i = 0; i < original.length; i++) {
        record[i] = original[i];
      }

      return record;
    }
  }]);

  return KeyEventStateArrayManager;
}();

var _default = KeyEventStateArrayManager;
exports.default = _default;