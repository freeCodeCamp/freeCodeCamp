"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isUndefined = _interopRequireDefault(require("../../utils/isUndefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Manages the incrementing of a globally unique event id
 * @class
 */
var KeyEventCounter =
/*#__PURE__*/
function () {
  function KeyEventCounter() {
    _classCallCheck(this, KeyEventCounter);
  }

  _createClass(KeyEventCounter, null, [{
    key: "getId",

    /**
     * Globally unique event id
     * @typedef {number} EventId
     */

    /**
     * Get the current event id
     * @returns {EventId} The current event ID
     */
    value: function getId() {
      if ((0, _isUndefined.default)(this._id)) {
        this._id = 0;
      }

      return this._id;
    }
    /**
     * Increment the current event id
     */

  }, {
    key: "incrementId",
    value: function incrementId() {
      this._id = this.getId() + 1;
    }
  }]);

  return KeyEventCounter;
}();

var _default = KeyEventCounter;
exports.default = _default;