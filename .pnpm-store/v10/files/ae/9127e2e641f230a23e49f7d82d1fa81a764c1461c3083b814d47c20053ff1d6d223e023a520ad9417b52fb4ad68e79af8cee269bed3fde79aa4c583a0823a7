"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Setter = require("./Setter.js");
var Parser = /*#__PURE__*/function () {
  function Parser() {
    (0, _classCallCheck2.default)(this, Parser);
    (0, _defineProperty2.default)(this, "incompatibleTokens", void 0);
    (0, _defineProperty2.default)(this, "priority", void 0);
    (0, _defineProperty2.default)(this, "subPriority", void 0);
  }
  (0, _createClass2.default)(Parser, [{
    key: "run",
    value: function run(dateString, token, match, options) {
      var result = this.parse(dateString, token, match, options);
      if (!result) {
        return null;
      }
      return {
        setter: new _Setter.ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
        rest: result.rest
      };
    }
  }, {
    key: "validate",
    value: function validate(_utcDate, _value, _options) {
      return true;
    }
  }]);
  return Parser;
}();
exports.Parser = Parser;