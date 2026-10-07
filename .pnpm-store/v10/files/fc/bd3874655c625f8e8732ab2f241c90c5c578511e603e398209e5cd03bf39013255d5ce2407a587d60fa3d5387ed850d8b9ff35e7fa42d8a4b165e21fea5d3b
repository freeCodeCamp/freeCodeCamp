"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.Body = Body;
exports.CloseButton = CloseButton;
exports.Footer = Footer;
exports.Header = Header;
exports.HeaderOpenClose = HeaderOpenClose;
exports.Overlay = Overlay;
exports.VisuallyHidden = VisuallyHidden;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _lockBody = require("../helpers/lock-body");
var _focusTrap = _interopRequireDefault(require("../helpers/focus-trap"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Backdrop() {
  return /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "backdrop"
  });
}
function VisuallyHidden({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      border: 0,
      clip: `rect(0 0 0 0)`,
      height: `1px`,
      margin: `-1px`,
      overflow: `hidden`,
      padding: 0,
      position: `absolute`,
      width: `1px`,
      whiteSpace: `nowrap`,
      wordWrap: `normal`
    }
  }, children);
}
function Overlay({
  children
}) {
  React.useEffect(() => {
    (0, _lockBody.lock)();
    return () => {
      (0, _lockBody.unlock)();
    };
  }, []);
  const [overlay, setOverlay] = React.useState(null);
  const onOverlay = React.useCallback(el => {
    setOverlay(el);
  }, []);
  React.useEffect(() => {
    if (overlay === null) {
      return;
    }
    const handle = (0, _focusTrap.default)({
      context: overlay
    });

    // eslint-disable-next-line consistent-return
    return () => {
      handle.disengage();
    };
  }, [overlay]);
  return /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "wrapper",
    ref: onOverlay
  }, /*#__PURE__*/React.createElement(Backdrop, null), /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "root",
    role: "alertdialog",
    "aria-labelledby": "gatsby-overlay-labelledby",
    "aria-describedby": "gatsby-overlay-describedby",
    "aria-modal": "true",
    dir: "ltr"
  }, children));
}
function CloseButton({
  dismiss
}) {
  return /*#__PURE__*/React.createElement("button", {
    "data-gatsby-overlay": "close-button",
    onClick: dismiss
  }, /*#__PURE__*/React.createElement(VisuallyHidden, null, "Close"), /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": true,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 6L18 18",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
function HeaderOpenClose({
  open,
  dismiss,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    "data-gatsby-overlay": "header__top"
  }, rest), children, /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "header__open-close"
  }, open && /*#__PURE__*/React.createElement("button", {
    onClick: open,
    "data-gatsby-overlay": "primary-button"
  }, "Open in editor"), dismiss && /*#__PURE__*/React.createElement(CloseButton, {
    dismiss: dismiss
  })));
}
function Header({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", (0, _extends2.default)({
    "data-gatsby-overlay": "header"
  }, rest), children);
}
function Body({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", (0, _extends2.default)({
    "data-gatsby-overlay": "body"
  }, rest), children);
}
function Footer({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", (0, _extends2.default)({
    "data-gatsby-overlay": "footer"
  }, rest), children);
}
//# sourceMappingURL=overlay.js.map