"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _isFlowFile = _interopRequireDefault(require("./isFlowFile"));

var _isNoFlowFile = _interopRequireDefault(require("./isNoFlowFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (cb, context) => {
  const checkThisFile = !_lodash.default.get(context, 'settings.flowtype.onlyFilesWithFlowAnnotation') && !(0, _isNoFlowFile.default)(context) || (0, _isFlowFile.default)(context); // eslint-disable-line no-extra-parens, max-len

  if (!checkThisFile) {
    return () => {};
  } // eslint-disable-next-line promise/prefer-await-to-callbacks -- not a promise callback


  return cb(context);
};

exports.default = _default;
module.exports = exports.default;