"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _useId = require("./use-id");
var keys = _interopRequireWildcard(require("../helpers/keys"));
var _match = require("../helpers/match");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ChevronIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    focusable: "false",
    preserveAspectRatio: "xMidYMid meet",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    "data-gatsby-overlay": "chevron-icon"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"
  }));
}
function Accordion({
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("ul", (0, _extends2.default)({
    "data-gatsby-overlay": "accordion"
  }, rest), children);
}
function AccordionItem({
  children,
  disabled = false,
  open = false,
  title = `title`,
  ...rest
}) {
  const [isOpen, setIsOpen] = React.useState(open);
  const [prevIsOpen, setPrevIsOpen] = React.useState(open);
  const id = (0, _useId.useId)(`accordion-item`);
  if (open !== prevIsOpen) {
    setIsOpen(open);
    setPrevIsOpen(open);
  }
  const toggleOpen = () => {
    const nextValue = !isOpen;
    setIsOpen(nextValue);
  };

  // If the AccordionItem is open, and the user hits the ESC key, then close it
  const onKeyDown = event => {
    if (isOpen && (0, _match.match)(event, keys.Escape)) {
      setIsOpen(false);
    }
  };
  return /*#__PURE__*/React.createElement("li", (0, _extends2.default)({
    "data-gatsby-overlay": "accordion__item",
    "data-accordion-active": isOpen ? `true` : `false`
  }, rest), /*#__PURE__*/React.createElement("button", {
    "data-gatsby-overlay": "accordion__item__heading",
    type: "button",
    disabled: disabled,
    "aria-controls": id,
    "aria-expanded": isOpen,
    onClick: toggleOpen,
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React.createElement(ChevronIcon, null), /*#__PURE__*/React.createElement("div", {
    "data-gatsby-overlay": "accordion__item__title"
  }, title)), /*#__PURE__*/React.createElement("div", {
    id: id,
    "data-gatsby-overlay": "accordion__item__content"
  }, children));
}
//# sourceMappingURL=accordion.js.map