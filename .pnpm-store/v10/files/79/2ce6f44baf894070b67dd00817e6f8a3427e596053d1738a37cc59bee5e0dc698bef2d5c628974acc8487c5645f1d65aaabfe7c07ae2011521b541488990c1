"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.LoadingIndicatorEventHandler = LoadingIndicatorEventHandler;
var React = _interopRequireWildcard(require("react"));
var _emitter = _interopRequireDefault(require("../emitter"));
var _indicator = require("./indicator");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function LoadingIndicatorEventHandler() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    _emitter.default.on(`onDelayedLoadPageResources`, () => setVisible(true));
    _emitter.default.on(`onRouteUpdate`, () => setVisible(false));
    return () => {
      _emitter.default.off(`onDelayedLoadPageResources`, () => setVisible(true));
      _emitter.default.off(`onRouteUpdate`, () => setVisible(false));
    };
  }, []);
  return /*#__PURE__*/React.createElement(_indicator.Indicator, {
    visible: visible
  });
}
//# sourceMappingURL=index.js.map