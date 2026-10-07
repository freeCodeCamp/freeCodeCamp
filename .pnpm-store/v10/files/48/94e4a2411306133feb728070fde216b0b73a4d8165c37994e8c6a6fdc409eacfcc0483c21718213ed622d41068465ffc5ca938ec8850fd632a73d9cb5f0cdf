"use strict";

exports.__esModule = true;
exports.BuildError = BuildError;
var React = _interopRequireWildcard(require("react"));
var _overlay = require("./overlay");
var _codeFrame = require("./code-frame");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Error that is thrown on e.g. webpack errors and thus can't be dismissed and must be fixed
function BuildError({
  error
}) {
  // Incoming build error shape is like this:
  // Sometimes "Enter"
  // ./relative-path-to-file
  // Additional information (sometimes empty line => handled in "prettifyStack" function)
  // /absolute-path-to-file
  // Errors/Warnings
  const decoded = (0, _utils.prettifyStack)(error);
  const [filePath] = decoded;
  const file = filePath.content.split(`\n`)[0];
  const lineMatch = filePath.content.match(/\((\d+)[^)]+\)/);
  let line = 1;
  if (lineMatch) {
    line = lineMatch[1];
  }
  return /*#__PURE__*/React.createElement(_overlay.Overlay, null, /*#__PURE__*/React.createElement(_overlay.Header, {
    "data-gatsby-error-type": "build-error"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "header__cause-file"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "gatsby-overlay-labelledby"
  }, "Failed to compile"), /*#__PURE__*/React.createElement("span", null, file)), /*#__PURE__*/React.createElement(_overlay.HeaderOpenClose, {
    open: () => (0, _utils.openInEditor)(file, line),
    dismiss: false
  })), /*#__PURE__*/React.createElement(_overlay.Body, null, /*#__PURE__*/React.createElement("h2", null, "Source"), /*#__PURE__*/React.createElement(_codeFrame.CodeFrame, {
    decoded: decoded
  }), /*#__PURE__*/React.createElement(_overlay.Footer, {
    id: "gatsby-overlay-describedby"
  }, "This error occurred during the build process and can only be dismissed by fixing the error.")));
}
//# sourceMappingURL=build-error.js.map