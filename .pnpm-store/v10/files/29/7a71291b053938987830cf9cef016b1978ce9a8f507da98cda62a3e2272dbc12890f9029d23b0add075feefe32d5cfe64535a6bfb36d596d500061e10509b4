"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ServerSliceRenderer = void 0;
var _react = _interopRequireDefault(require("react"));
const ServerSliceRenderer = ({
  sliceId,
  children
}) => {
  const contents = [/*#__PURE__*/_react.default.createElement(`slice-start`, {
    id: `${sliceId}-1`
  }), /*#__PURE__*/_react.default.createElement(`slice-end`, {
    id: `${sliceId}-1`
  })];
  if (children) {
    // if children exist, we split the slice into a before and after piece
    // see renderSlices in render-html
    contents.push(children);
    contents.push( /*#__PURE__*/_react.default.createElement(`slice-start`, {
      id: `${sliceId}-2`
    }), /*#__PURE__*/_react.default.createElement(`slice-end`, {
      id: `${sliceId}-2`
    }));
  }
  return contents;
};
exports.ServerSliceRenderer = ServerSliceRenderer;
//# sourceMappingURL=server-slice-renderer.js.map