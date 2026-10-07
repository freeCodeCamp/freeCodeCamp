"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalWeekYearParser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Parser2 = require("../Parser.js");
var _utils = require("../utils.js");
var _index = _interopRequireDefault(require("../../../_lib/getUTCWeekYear/index.js"));
var _index2 = _interopRequireDefault(require("../../../_lib/startOfUTCWeek/index.js"));
// Local week-numbering year
var LocalWeekYearParser = /*#__PURE__*/function (_Parser) {
  (0, _inherits2.default)(LocalWeekYearParser, _Parser);
  var _super = (0, _createSuper2.default)(LocalWeekYearParser);
  function LocalWeekYearParser() {
    var _this;
    (0, _classCallCheck2.default)(this, LocalWeekYearParser);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "priority", 130);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incompatibleTokens", ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']);
    return _this;
  }
  (0, _createClass2.default)(LocalWeekYearParser, [{
    key: "parse",
    value: function parse(dateString, token, match) {
      var valueCallback = function valueCallback(year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };
      switch (token) {
        case 'Y':
          return (0, _utils.mapValue)((0, _utils.parseNDigits)(4, dateString), valueCallback);
        case 'Yo':
          return (0, _utils.mapValue)(match.ordinalNumber(dateString, {
            unit: 'year'
          }), valueCallback);
        default:
          return (0, _utils.mapValue)((0, _utils.parseNDigits)(token.length, dateString), valueCallback);
      }
    }
  }, {
    key: "validate",
    value: function validate(_date, value) {
      return value.isTwoDigitYear || value.year > 0;
    }
  }, {
    key: "set",
    value: function set(date, flags, value, options) {
      var currentYear = (0, _index.default)(date, options);
      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = (0, _utils.normalizeTwoDigitYear)(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return (0, _index2.default)(date, options);
      }
      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return (0, _index2.default)(date, options);
    }
  }]);
  return LocalWeekYearParser;
}(_Parser2.Parser);
exports.LocalWeekYearParser = LocalWeekYearParser;