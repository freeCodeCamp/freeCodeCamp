"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimestampMillisecondsParser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Parser2 = require("../Parser.js");
var _utils = require("../utils.js");
var TimestampMillisecondsParser = /*#__PURE__*/function (_Parser) {
  (0, _inherits2.default)(TimestampMillisecondsParser, _Parser);
  var _super = (0, _createSuper2.default)(TimestampMillisecondsParser);
  function TimestampMillisecondsParser() {
    var _this;
    (0, _classCallCheck2.default)(this, TimestampMillisecondsParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "priority", 20);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incompatibleTokens", '*');
    return _this;
  }
  (0, _createClass2.default)(TimestampMillisecondsParser, [{
    key: "parse",
    value: function parse(dateString) {
      return (0, _utils.parseAnyDigitsSigned)(dateString);
    }
  }, {
    key: "set",
    value: function set(_date, _flags, value) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    }
  }]);
  return TimestampMillisecondsParser;
}(_Parser2.Parser);
exports.TimestampMillisecondsParser = TimestampMillisecondsParser;