"use strict";

exports.__esModule = true;
exports.Indicator = Indicator;
var React = _interopRequireWildcard(require("react"));
var _shadowPortal = require("../shadow-portal");
var _style = require("./style");
var _loadingIndicator = require("$virtual/loading-indicator");
var _debugLog = require("../debug-log");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
if (typeof window === `undefined`) {
  throw new Error(`Loading indicator should never be imported in code that doesn't target only browsers`);
}
if (module.hot) {
  module.hot.accept(`$virtual/loading-indicator`, () => {
    // isLoadingIndicatorEnabled is imported with ES import so no need
    // for dedicated handling as HMR just replace it in that case
  });
}

// HMR can rerun this, so check if it was set before
// we also set it on window and not just in module scope because of HMR resetting
// module scope
if (typeof window.___gatsbyDidShowLoadingIndicatorBefore === `undefined`) {
  window.___gatsbyDidShowLoadingIndicatorBefore = false;
}
function Indicator({
  visible = true
}) {
  if (!(0, _loadingIndicator.isLoadingIndicatorEnabled)()) {
    return null;
  }
  if (!window.___gatsbyDidShowLoadingIndicatorBefore) {
    // not ideal to this in render function, but that's just console info
    (0, _debugLog.debugLog)(`A loading indicator is displayed in-browser whenever content is being requested upon navigation (Query On Demand).\n\nYou can disable the loading indicator for your current session by visiting ${window.location.origin}/___loading-indicator/disable`);
    window.___gatsbyDidShowLoadingIndicatorBefore = true;
  }
  return /*#__PURE__*/React.createElement(_shadowPortal.ShadowPortal, {
    identifier: "gatsby-qod"
  }, /*#__PURE__*/React.createElement(_style.Style, null), /*#__PURE__*/React.createElement("div", {
    "data-gatsby-loading-indicator": "root"
    // preact doesn't render data attributes with a literal bool false value to dom
    ,
    "data-gatsby-loading-indicator-visible": visible.toString(),
    "aria-live": "assertive"
  }, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-loading-indicator": "spinner",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"
  }))), /*#__PURE__*/React.createElement("div", {
    "data-gatsby-loading-indicator": "text"
  }, visible ? `Preparing requested page` : ``)));
}
//# sourceMappingURL=indicator.js.map