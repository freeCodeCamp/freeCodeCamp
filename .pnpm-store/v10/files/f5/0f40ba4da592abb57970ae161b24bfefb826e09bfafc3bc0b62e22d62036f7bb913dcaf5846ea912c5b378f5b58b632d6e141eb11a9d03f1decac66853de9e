"use strict";

exports.__esModule = true;
exports.ErrorBoundary = void 0;
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class ErrorBoundary extends React.Component {
  state = {
    error: null
  };
  componentDidCatch(error) {
    this.setState({
      error
    });

    // Forward component errors to Fast Refresh overlay system
    if (window._gatsbyEvents && typeof window._gatsbyEvents.push === `function`) {
      window._gatsbyEvents.push([`FAST_REFRESH`, {
        action: `SHOW_RUNTIME_ERRORS`,
        payload: [error]
      }]);
    }
  }
  render() {
    // Without this check => possible infinite loop
    return this.state.error && this.props.hasErrors ? null : this.props.children;
  }
}
exports.ErrorBoundary = ErrorBoundary;
//# sourceMappingURL=error-boundary.js.map