"use strict";

exports.__esModule = true;
exports.GetServerDataError = GetServerDataError;
var React = _interopRequireWildcard(require("react"));
var _overlay = require("./overlay");
var _hooks = require("./hooks");
var _codeFrame = require("./code-frame");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const filePathRegex = /webpack:\/[^/]+\/(.*)$/;
function GetServerDataError({
  error
}) {
  var _error$context;
  const stacktrace = error.stack;
  const info = stacktrace.find(CallSite => CallSite.fileName);
  const filePath = `./${filePathRegex.exec(info === null || info === void 0 ? void 0 : info.fileName)[1]}`;
  const lineNumber = info === null || info === void 0 ? void 0 : info.lineNumber;
  const columnNumber = info === null || info === void 0 ? void 0 : info.columnNumber;
  const name = (info === null || info === void 0 ? void 0 : info.functionName) === `Module.getServerData` ? `getServerData` : info === null || info === void 0 ? void 0 : info.functionName;
  const res = (0, _hooks.useFileCodeFrame)({
    filePath,
    lineNumber,
    columnNumber
  });
  return /*#__PURE__*/React.createElement(_overlay.Overlay, null, /*#__PURE__*/React.createElement(_overlay.Header, {
    "data-gatsby-error-type": "build-error"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "header__cause-file"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "gatsby-overlay-labelledby"
  }, "Unhandled getServerData Error"), /*#__PURE__*/React.createElement("span", null, filePath)), /*#__PURE__*/React.createElement(_overlay.HeaderOpenClose, {
    dismiss: false,
    open: () => (0, _utils.openInEditor)(filePath, lineNumber)
  })), /*#__PURE__*/React.createElement(_overlay.Body, null, /*#__PURE__*/React.createElement("h2", null, "Error Message"), /*#__PURE__*/React.createElement("p", {
    "data-gatsby-overlay": "body__error-message"
  }, error === null || error === void 0 ? void 0 : (_error$context = error.context) === null || _error$context === void 0 ? void 0 : _error$context.sourceMessage), /*#__PURE__*/React.createElement("h2", null, "Source"), filePath && /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "codeframe__top"
  }, "Function ", name, " in ", filePath, ":", lineNumber), /*#__PURE__*/React.createElement(_codeFrame.CodeFrame, {
    decoded: res.decoded
  }), /*#__PURE__*/React.createElement(_overlay.Footer, {
    id: "gatsby-overlay-describedby"
  }, "This error occured in the getServerData function and can only be dismissed by fixing the error or adding error handling.")));
}
//# sourceMappingURL=getserverdata-error.js.map