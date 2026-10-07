"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuarterParser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Parser2 = require("../Parser.js");
var _utils = require("../utils.js");
var QuarterParser = /*#__PURE__*/function (_Parser) {
  (0, _inherits2.default)(QuarterParser, _Parser);
  var _super = (0, _createSuper2.default)(QuarterParser);
  function QuarterParser() {
    var _this;
    (0, _classCallCheck2.default)(this, QuarterParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "priority", 120);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incompatibleTokens", ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']);
    return _this;
  }
  (0, _createClass2.default)(QuarterParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return (0, _utils.parseNDigits)(token.length, dateString);
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return match.ordinalNumber(dateString, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return match.quarter(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value >= 1 && value <= 4;
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
  }]);
  return QuarterParser;
}(_Parser2.Parser);
exports.QuarterParser = QuarterParser;