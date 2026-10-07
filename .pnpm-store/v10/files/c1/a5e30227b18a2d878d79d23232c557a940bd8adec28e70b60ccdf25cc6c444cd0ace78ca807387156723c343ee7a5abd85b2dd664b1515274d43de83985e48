"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISOTimezoneWithZParser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Parser2 = require("../Parser.js");
var _constants = require("../constants.js");
var _utils = require("../utils.js");
// Timezone (ISO-8601. +00:00 is `'Z'`)
var ISOTimezoneWithZParser = /*#__PURE__*/function (_Parser) {
  (0, _inherits2.default)(ISOTimezoneWithZParser, _Parser);
  var _super = (0, _createSuper2.default)(ISOTimezoneWithZParser);
  function ISOTimezoneWithZParser() {
    var _this;
    (0, _classCallCheck2.default)(this, ISOTimezoneWithZParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "priority", 10);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incompatibleTokens", ['t', 'T', 'x']);
    return _this;
  }
  (0, _createClass2.default)(ISOTimezoneWithZParser, [{
    key: "parse",
    value: function parse(dateString, token) {
      switch (token) {
        case 'X':
          return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basicOptionalMinutes, dateString);
        case 'XX':
          return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basic, dateString);
        case 'XXXX':
          return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.basicOptionalSeconds, dateString);
        case 'XXXXX':
          return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.extendedOptionalSeconds, dateString);
        case 'XXX':
        default:
          return (0, _utils.parseTimezonePattern)(_constants.timezonePatterns.extended, dateString);
      }
    }
  }, {
    key: "set",
    value: function set(date, flags, value) {
      if (flags.timestampIsSet) {
        return date;
      }
      return new Date(date.getTime() - value);
    }
  }]);
  return ISOTimezoneWithZParser;
}(_Parser2.Parser);
exports.ISOTimezoneWithZParser = ISOTimezoneWithZParser;