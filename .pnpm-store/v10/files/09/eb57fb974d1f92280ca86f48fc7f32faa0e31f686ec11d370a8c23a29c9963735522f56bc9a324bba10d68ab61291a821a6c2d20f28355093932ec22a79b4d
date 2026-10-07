"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AMPMParser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Parser2 = require("../Parser.js");
var _utils = require("../utils.js");
var AMPMParser = /*#__PURE__*/function (_Parser) {
  (0, _inherits2.default)(AMPMParser, _Parser);
  var _super = (0, _createSuper2.default)(AMPMParser);
  function AMPMParser() {
    var _this;
    (0, _classCallCheck2.default)(this, AMPMParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "priority", 80);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incompatibleTokens", ['b', 'B', 'H', 'k', 't', 'T']);
    return _this;
  }
  (0, _createClass2.default)(AMPMParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'aaaaa':
          return match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'aaaa':
        default:
          return match.dayPeriod(dateString, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(dateString, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    }
  }, {
    key: "set",
    value: function set(date, _flags, value) {
      date.setUTCHours((0, _utils.dayPeriodEnumToHours)(value), 0, 0, 0);
      return date;
    }
  }]);
  return AMPMParser;
}(_Parser2.Parser);
exports.AMPMParser = AMPMParser;