"use strict";

exports.__esModule = true;
exports.CodeFrame = CodeFrame;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function CodeFrame({
  decoded
}) {
  if (!decoded) {
    return /*#__PURE__*/React.createElement("pre", {
      "data-gatsby-overlay": "pre"
    }, /*#__PURE__*/React.createElement("code", {
      "data-gatsby-overlay": "pre__code"
    }));
  }
  return /*#__PURE__*/React.createElement("pre", {
    "data-gatsby-overlay": "pre"
  }, /*#__PURE__*/React.createElement("code", {
    "data-gatsby-overlay": "pre__code"
  }, decoded.map((entry, index) => {
    const style = {
      color: entry.fg ? `var(--color-${entry.fg})` : undefined,
      ...(entry.decoration === `bold` ? {
        fontWeight: 800
      } : entry.decoration === `italic` ? {
        fontStyle: `italic`
      } : undefined)
    };
    return /*#__PURE__*/React.createElement("span", {
      key: `frame-${index}`,
      "data-gatsby-overlay": "pre__code__span",
      style: style
    }, entry.content);
  })));
}
//# sourceMappingURL=code-frame.js.map