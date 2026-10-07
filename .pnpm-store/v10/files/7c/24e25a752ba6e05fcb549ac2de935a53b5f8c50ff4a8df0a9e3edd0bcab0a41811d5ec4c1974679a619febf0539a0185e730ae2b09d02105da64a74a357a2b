"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValueSetter = exports.Setter = exports.DateToSystemTimezoneSetter = void 0;
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _createSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/createSuper"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var TIMEZONE_UNIT_PRIORITY = 10;
var Setter = /*#__PURE__*/function () {
  function Setter() {
    (0, _classCallCheck2.default)(this, Setter);
    (0, _defineProperty2.default)(this, "priority", void 0);
    (0, _defineProperty2.default)(this, "subPriority", 0);
  }
  (0, _createClass2.default)(Setter, [{
    key: "validate",
    value: function validate(_utcDate, _options) {
      return true;
    }
  }]);
  return Setter;
}();
exports.Setter = Setter;
var ValueSetter = /*#__PURE__*/function (_Setter) {
  (0, _inherits2.default)(ValueSetter, _Setter);
  var _super = (0, _createSuper2.default)(ValueSetter);
  function ValueSetter(value, validateValue, setValue, priority, subPriority) {
    var _this;
    (0, _classCallCheck2.default)(this, ValueSetter);
    _this = _super.call(this);
    _this.value = value;
    _this.validateValue = validateValue;
    _this.setValue = setValue;
    _this.priority = priority;
    if (subPriority) {
      _this.subPriority = subPriority;
    }
    return _this;
  }
  (0, _createClass2.default)(ValueSetter, [{
    key: "validate",
    value: function validate(utcDate, options) {
      return this.validateValue(utcDate, this.value, options);
    }
  }, {
    key: "set",
    value: function set(utcDate, flags, options) {
      return this.setValue(utcDate, flags, this.value, options);
    }
  }]);
  return ValueSetter;
}(Setter);
exports.ValueSetter = ValueSetter;
var DateToSystemTimezoneSetter = /*#__PURE__*/function (_Setter2) {
  (0, _inherits2.default)(DateToSystemTimezoneSetter, _Setter2);
  var _super2 = (0, _createSuper2.default)(DateToSystemTimezoneSetter);
  function DateToSystemTimezoneSetter() {
    var _this2;
    (0, _classCallCheck2.default)(this, DateToSystemTimezoneSetter);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this2 = _super2.call.apply(_super2, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "priority", TIMEZONE_UNIT_PRIORITY);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "subPriority", -1);
    return _this2;
  }
  (0, _createClass2.default)(DateToSystemTimezoneSetter, [{
    key: "set",
    value: function set(date, flags) {
      if (flags.timestampIsSet) {
        return date;
      }
      var convertedDate = new Date(0);
      convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
      convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
      return convertedDate;
    }
  }]);
  return DateToSystemTimezoneSetter;
}(Setter);
exports.DateToSystemTimezoneSetter = DateToSystemTimezoneSetter;