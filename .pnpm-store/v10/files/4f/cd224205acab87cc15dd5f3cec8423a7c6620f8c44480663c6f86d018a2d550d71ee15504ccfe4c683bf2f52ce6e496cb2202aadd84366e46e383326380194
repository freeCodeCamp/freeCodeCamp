"use strict";

exports.__esModule = true;
exports.ShadowPortal = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const ShadowPortal = ({
  children,
  identifier
}) => {
  const mountNode = React.useRef(null);
  const portalNode = React.useRef(null);
  const shadowNode = React.useRef(null);
  const [, forceUpdate] = React.useState();
  React.useLayoutEffect(() => {
    const ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument.createElement(identifier);
    shadowNode.current = portalNode.current.attachShadow({
      mode: `open`
    });
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate({});
    return () => {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, []);
  return shadowNode.current ? /*#__PURE__*/(0, _reactDom.createPortal)(children, shadowNode.current) : /*#__PURE__*/React.createElement("span", {
    ref: mountNode
  });
};
exports.ShadowPortal = ShadowPortal;
//# sourceMappingURL=shadow-portal.js.map