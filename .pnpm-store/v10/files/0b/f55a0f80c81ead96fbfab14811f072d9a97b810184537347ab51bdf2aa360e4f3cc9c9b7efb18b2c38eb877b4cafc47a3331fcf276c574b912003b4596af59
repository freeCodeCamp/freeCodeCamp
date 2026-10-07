"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hour0To11Parser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Parser2 = require("../Parser.js");
var _constants = require("../constants.js");
var _utils = require("../utils.js");
var Hour0To11Parser = /*#__PURE__*/function (_Parser) {
  (0, _inherits2.default)(Hour0To11Parser, _Parser);
  var _super = (0, _createSuper2.default)(Hour0To11Parser);
  function Hour0To11Parser() {
    var _this;
    (0, _classCallCheck2.default)(this, Hour0To11Parser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "priority", 70);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incompatibleTokens", ['h', 'H', 'k', 't', 'T']);
    return _this;
  }
  (0, _createClass2.default)(Hour0To11Parser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'K':
          return (0, _utils.parseNumericPattern)(_constants.numericPatterns.hour11h, dateString);
        case 'Ko':
          return match.ordinalNumber(dateString, {
            unit: 'hour'
          });
        default:
          return (0, _utils.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 0 && value <= 11;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      var isPM = date.getUTCHours() >= 12;
      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }
      return date;
    }
  }]);
  return Hour0To11Parser;
}(_Parser2.Parser);
exports.Hour0To11Parser = Hour0To11Parser;