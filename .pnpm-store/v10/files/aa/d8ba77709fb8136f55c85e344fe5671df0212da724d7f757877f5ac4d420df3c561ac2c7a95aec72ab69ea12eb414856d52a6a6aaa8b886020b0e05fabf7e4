"use strict";

exports.__esModule = true;
exports.DevSsrError = DevSsrError;
var React = _interopRequireWildcard(require("react"));
var _overlay = require("./overlay");
var _codeFrame = require("./code-frame");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function DevSsrError({
  error
}) {
  const {
    codeFrame,
    source,
    line
  } = error;
  const decoded = (0, _utils.prettifyStack)(codeFrame);
  return /*#__PURE__*/React.createElement(_overlay.Overlay, null, /*#__PURE__*/React.createElement(_overlay.Header, {
    "data-gatsby-error-type": "build-error"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "header__cause-file"
  }, /*#__PURE__*/React.createElement("h1", {
    id: "gatsby-overlay-labelledby"
  }, "Failed to server render (SSR)"), /*#__PURE__*/React.createElement("span", null, source)), /*#__PURE__*/React.createElement(_overlay.HeaderOpenClose, {
    open: () => (0, _utils.openInEditor)(source, line),
    dismiss: false
  })), /*#__PURE__*/React.createElement(_overlay.Body, null, /*#__PURE__*/React.createElement("p", {
    id: "gatsby-overlay-describedby",
    "data-gatsby-overlay": "body__describedby"
  }, "React Components in Gatsby must render both successfully in the browser and in a Node.js environment. When we tried to render your page component in Node.js, it errored."), /*#__PURE__*/React.createElement("h2", null, "Source"), /*#__PURE__*/React.createElement(_codeFrame.CodeFrame, {
    decoded: decoded
  }), /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "codeframe__bottom"
  }, "See our docs page for more info on SSR errors:", ` `, /*#__PURE__*/React.createElement("a", {
    href: "https://www.gatsbyjs.com/docs/debugging-html-builds/"
  }, "Debugging HTML Builds")), /*#__PURE__*/React.createElement("p", null, "If you fixed the error, saved your file, and want to retry server rendering this page, please reload the page."), /*#__PURE__*/React.createElement("button", {
    onClick: () => (0, _utils.reloadPage)(),
    "data-gatsby-overlay": "primary-button"
  }, "Reload page"), /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: `var(--space)`
    }
  }, "Skip Server Render"), /*#__PURE__*/React.createElement("p", null, "If you don't wish to fix the SSR error at the moment, press the button below to reload the page without attempting to do SSR."), /*#__PURE__*/React.createElement("button", {
    onClick: () => (0, _utils.skipSSR)(),
    "data-gatsby-overlay": "primary-button"
  }, "Skip SSR"), /*#__PURE__*/React.createElement(_overlay.Footer, null, /*#__PURE__*/React.createElement("span", {
    "data-font-weight": "bold"
  }, "Note:"), " This error will show up during \"gatsby build\" so it must be fixed before then. SSR errors in module scope, e.g. outside of your own React components can't be skipped.")));
}
//# sourceMappingURL=dev-ssr-error.js.map