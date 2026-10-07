"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isNoFlowFileAnnotation = _interopRequireDefault(require("./isNoFlowFileAnnotation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks whether a file has an @flow or @noflow annotation.
 *
 * @param context
 * @param [strict] - By default, the function returns true if the file starts with @flow but not if it
 * starts by @noflow. When the strict flag is set to false, the function returns true if the flag has @noflow also.
 */
var _default = (context, strict = true) => {
  const comments = context.getAllComments();

  if (!comments.length) {
    return false;
  }

  return comments.some(comment => {
    return (0, _isNoFlowFileAnnotation.default)(comment.value, strict);
  });
};

exports.default = _default;
module.exports = exports.default;