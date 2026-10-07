"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("../../utilities");

var _evaluateReturnType = _interopRequireDefault(require("./evaluateReturnType"));

var _evaluateTypical = _interopRequireDefault(require("./evaluateTypical"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _utilities.iterateFunctionNodes)((context, report) => {
  const checkParam = (0, _evaluateTypical.default)(context, report, 'parameter');
  const checkReturnType = (0, _evaluateReturnType.default)(context, report);
  return functionNode => {
    for (const param of functionNode.params) {
      checkParam(param);
    }

    checkReturnType(functionNode);
  };
});

exports.default = _default;
module.exports = exports.default;