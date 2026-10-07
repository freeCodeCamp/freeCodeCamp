"use strict";

exports.__esModule = true;
exports.GraphqlErrors = GraphqlErrors;
var React = _interopRequireWildcard(require("react"));
var _overlay = require("./overlay");
var _accordion = require("./accordion");
var _utils = require("../utils");
var _codeFrame = require("./code-frame");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function WrappedAccordionItem({
  error,
  open
}) {
  var _error$error, _error$location, _error$location$start, _error$location2, _error$location2$star;
  const title = (error === null || error === void 0 ? void 0 : (_error$error = error.error) === null || _error$error === void 0 ? void 0 : _error$error.message) || error.context.sourceMessage || `Unknown GraphQL error`;
  const docsUrl = error === null || error === void 0 ? void 0 : error.docsUrl;
  const filePath = error === null || error === void 0 ? void 0 : error.filePath;
  const lineNumber = error === null || error === void 0 ? void 0 : (_error$location = error.location) === null || _error$location === void 0 ? void 0 : (_error$location$start = _error$location.start) === null || _error$location$start === void 0 ? void 0 : _error$location$start.line;
  const columnNumber = error === null || error === void 0 ? void 0 : (_error$location2 = error.location) === null || _error$location2 === void 0 ? void 0 : (_error$location2$star = _error$location2.start) === null || _error$location2$star === void 0 ? void 0 : _error$location2$star.column;
  let locString = ``;
  if (typeof lineNumber !== `undefined`) {
    locString += `:${lineNumber}`;
    if (typeof columnNumber !== `undefined`) {
      locString += `:${columnNumber}`;
    }
  }

  // Sometimes the GraphQL error text has ANSI in it. If it's only text, it'll be passed through
  const decoded = (0, _utils.prettifyStack)(error.text);
  return /*#__PURE__*/React.createElement(_accordion.AccordionItem, {
    open: open,
    title: title
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "body__graphql-error-message"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "codeframe__top"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "tag"
  }, error.level, ` `, "#", error.code), /*#__PURE__*/React.createElement("button", {
    "data-gatsby-overlay": "body__open-in-editor",
    onClick: () => (0, _utils.openInEditor)(filePath, lineNumber)
  }, "Open in Editor")), filePath && /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "codeframe__top"
  }, filePath, locString), /*#__PURE__*/React.createElement(_codeFrame.CodeFrame, {
    decoded: decoded
  }), docsUrl && /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "codeframe__bottom"
  }, "See our docs page for more info on this error:", ` `, /*#__PURE__*/React.createElement("a", {
    href: docsUrl
  }, docsUrl))));
}
function GraphqlErrors({
  errors,
  dismiss
}) {
  const deduplicatedErrors = React.useMemo(() => Array.from(new Set(errors)), [errors]);
  const hasMultipleErrors = deduplicatedErrors.length > 1;
  return /*#__PURE__*/React.createElement(_overlay.Overlay, null, /*#__PURE__*/React.createElement(_overlay.Header, {
    "data-gatsby-error-type": "graphql-error"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "header__cause-file"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "gatsby-overlay-labelledby"
  }, hasMultipleErrors ? `${errors.length} Unhandled GraphQL Errors` : `Unhandled GraphQL Error`)), /*#__PURE__*/React.createElement(_overlay.HeaderOpenClose, {
    dismiss: dismiss
  })), /*#__PURE__*/React.createElement(_overlay.Body, null, /*#__PURE__*/React.createElement("p", {
    "data-gatsby-overlay": "body__describedby",
    id: "gatsby-overlay-describedby"
  }, hasMultipleErrors ? `Multiple` : `One`, " unhandled GraphQL", ` `, hasMultipleErrors ? `errors` : `error`, " found in your files. See the list below to fix ", hasMultipleErrors ? `them` : `it`, ":"), /*#__PURE__*/React.createElement(_accordion.Accordion, null, deduplicatedErrors.map((error, index) => /*#__PURE__*/React.createElement(WrappedAccordionItem, {
    open: index === 0,
    error: error,
    key: `${error.sourceMessage}-${index}`
  })))));
}
//# sourceMappingURL=graphql-errors.js.map