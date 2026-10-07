"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.RuntimeErrors = RuntimeErrors;
var React = _interopRequireWildcard(require("react"));
var _errorStackParser = _interopRequireDefault(require("error-stack-parser"));
var _overlay = require("./overlay");
var _hooks = require("./hooks");
var _codeFrame = require("./code-frame");
var _utils = require("../utils");
var _accordion = require("./accordion");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function getCodeFrameInformationFromError(error) {
  if (error.forcedLocation) {
    return {
      skipSourceMap: true,
      moduleId: error.forcedLocation.fileName,
      functionName: error.forcedLocation.functionName,
      lineNumber: error.forcedLocation.lineNumber,
      columnNumber: error.forcedLocation.columnNumber,
      endLineNumber: error.forcedLocation.endLineNumber,
      endColumnNumber: error.forcedLocation.endColumnNumber
    };
  }
  const stacktrace = _errorStackParser.default.parse(error);
  return (0, _utils.getCodeFrameInformationFromStackTrace)(stacktrace);
}
function WrappedAccordionItem({
  error,
  open
}) {
  var _res$sourcePosition;
  const codeFrameInformation = error.stack ? getCodeFrameInformationFromError(error) : null;
  const modulePath = codeFrameInformation === null || codeFrameInformation === void 0 ? void 0 : codeFrameInformation.moduleId;
  const name = codeFrameInformation === null || codeFrameInformation === void 0 ? void 0 : codeFrameInformation.functionName;
  // With the introduction of Metadata management the modulePath can have a resourceQuery that needs to be removed first
  const filePath = modulePath === null || modulePath === void 0 ? void 0 : modulePath.replace(/(\?|&)export=(default|head)$/, ``);
  const res = (0, _hooks.useStackFrame)(codeFrameInformation);
  const line = (_res$sourcePosition = res.sourcePosition) === null || _res$sourcePosition === void 0 ? void 0 : _res$sourcePosition.line;
  const Title = () => {
    if (!name || !error.stack) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, "Unknown Runtime Error");
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, "Error in function", ` `, /*#__PURE__*/React.createElement("span", {
      "data-font-weight": "bold"
    }, name), " in", ` `, /*#__PURE__*/React.createElement("span", {
      "data-font-weight": "bold"
    }, filePath, ":", line));
  };
  return /*#__PURE__*/React.createElement(_accordion.AccordionItem, {
    open: open,
    title: /*#__PURE__*/React.createElement(Title, null)
  }, /*#__PURE__*/React.createElement("p", {
    "data-gatsby-overlay": "body__error-message"
  }, error.message), error.stack ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "codeframe__top"
  }, /*#__PURE__*/React.createElement("div", null, filePath, ":", line), /*#__PURE__*/React.createElement("button", {
    "data-gatsby-overlay": "body__open-in-editor",
    onClick: () => (0, _utils.openInEditor)(filePath, line)
  }, "Open in Editor")), /*#__PURE__*/React.createElement(_codeFrame.CodeFrame, {
    decoded: res.decoded
  })) : /*#__PURE__*/React.createElement("p", {
    "data-font-weight": "bold"
  }, "To identify the exact location of the error, please open the browser's developer tools console."));
}
function RuntimeErrors({
  errors,
  dismiss
}) {
  const deduplicatedErrors = React.useMemo(() => {
    const errorCache = new Set();
    const errorList = [];
    errors.forEach(error => {
      let cacheKey;
      if (error.stack) {
        var _error$stack;
        // Second line contains the exact location
        const secondLine = (_error$stack = error.stack) === null || _error$stack === void 0 ? void 0 : _error$stack.split(`\n`)[1];
        cacheKey = secondLine;
      } else {
        cacheKey = error.toString();
      }
      if (!errorCache.has(cacheKey)) {
        errorList.push(error);
        errorCache.add(cacheKey);
      }
    });
    return errorList;
  }, [errors]);
  const hasMultipleErrors = deduplicatedErrors.length > 1;
  return /*#__PURE__*/React.createElement(_overlay.Overlay, null, /*#__PURE__*/React.createElement(_overlay.Header, {
    "data-gatsby-error-type": "runtime-error"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "header__cause-file"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "gatsby-overlay-labelledby"
  }, hasMultipleErrors ? `${deduplicatedErrors.length} Unhandled Runtime Errors` : `Unhandled Runtime Error`)), /*#__PURE__*/React.createElement(_overlay.HeaderOpenClose, {
    dismiss: dismiss
  })), /*#__PURE__*/React.createElement(_overlay.Body, null, /*#__PURE__*/React.createElement("p", {
    "data-gatsby-overlay": "body__describedby",
    id: "gatsby-overlay-describedby"
  }, hasMultipleErrors ? `Multiple` : `One`, " unhandled runtime", ` `, hasMultipleErrors ? `errors` : `error`, " found in your files. See the list below to fix ", hasMultipleErrors ? `them` : `it`, ":"), /*#__PURE__*/React.createElement(_accordion.Accordion, null, deduplicatedErrors.map((error, index) => /*#__PURE__*/React.createElement(WrappedAccordionItem, {
    open: index === 0,
    key: `${error.message}-${index}`,
    error: error
  })))));
}
//# sourceMappingURL=runtime-errors.js.map