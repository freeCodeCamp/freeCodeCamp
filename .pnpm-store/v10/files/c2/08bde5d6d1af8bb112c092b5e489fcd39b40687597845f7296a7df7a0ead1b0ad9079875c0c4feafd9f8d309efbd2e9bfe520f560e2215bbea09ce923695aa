"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISOWeekParser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Parser2 = require("../Parser.js");
var _constants = require("../constants.js");
var _utils = require("../utils.js");
var _index = _interopRequireDefault(require("../../../_lib/setUTCISOWeek/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/startOfUTCISOWeek/index.js"));
// ISO week of year
var ISOWeekParser = /*#__PURE__*/function (_Parser) {
  (0, _inherits2.default)(ISOWeekParser, _Parser);
  var _super = (0, _createSuper2.default)(ISOWeekParser);
  function ISOWeekParser() {
    var _this;
    (0, _classCallCheck2.default)(this, ISOWeekParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "priority", 100);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incompatibleTokens", ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0, _createClass2.default)(ISOWeekParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'I':
          return (0, _utils.parseNumericPattern)(_constants.numericPatterns.week, dateString);
        case 'Io':
          return match.ordinalNumber(dateString, {
            unit: 'week'
          });
        default:
          return (0, _utils.parseNDigits)(token.length, dateString);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 53;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      return (0, _index2.default)((0, _index.default)(date, value));
    }
  }]);
  return ISOWeekParser;
}(_Parser2.Parser);
exports.ISOWeekParser = ISOWeekParser;