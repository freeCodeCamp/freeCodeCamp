"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _loader = _interopRequireWildcard(require("./loader"));
var _shallowCompare = _interopRequireDefault(require("shallow-compare"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class EnsureResources extends _react.default.Component {
  constructor(props) {
    super();
    const {
      location,
      pageResources
    } = props;
    this.state = {
      location: {
        ...location
      },
      pageResources: pageResources || _loader.default.loadPageSync(location.pathname + location.search, {
        withErrorDetails: true
      })
    };
  }
  static getDerivedStateFromProps({
    location
  }, prevState) {
    if (prevState.location.href !== location.href) {
      const pageResources = _loader.default.loadPageSync(location.pathname + location.search, {
        withErrorDetails: true
      });
      return {
        pageResources,
        location: {
          ...location
        }
      };
    }
    return {
      location: {
        ...location
      }
    };
  }
  loadResources(rawPath) {
    _loader.default.loadPage(rawPath).then(pageResources => {
      if (pageResources && pageResources.status !== _loader.PageResourceStatus.Error) {
        this.setState({
          location: {
            ...window.location
          },
          pageResources
        });
      } else {
        window.history.replaceState({}, ``, location.href);
        window.location = rawPath;
      }
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    // Always return false if we're missing resources.
    if (!nextState.pageResources) {
      this.loadResources(nextProps.location.pathname + nextProps.location.search);
      return false;
    }
    if (process.env.BUILD_STAGE === `develop` && nextState.pageResources.stale) {
      this.loadResources(nextProps.location.pathname + nextProps.location.search);
      return false;
    }

    // Check if the component or json have changed.
    if (this.state.pageResources !== nextState.pageResources) {
      return true;
    }
    if (this.state.pageResources.component !== nextState.pageResources.component) {
      return true;
    }
    if (this.state.pageResources.json !== nextState.pageResources.json) {
      return true;
    }
    // Check if location has changed on a page using internal routing
    // via matchPath configuration.
    if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
      return true;
    }
    return (0, _shallowCompare.default)(this, nextProps, nextState);
  }
  render() {
    if (process.env.NODE_ENV !== `production` && (!this.state.pageResources || this.state.pageResources.status === _loader.PageResourceStatus.Error)) {
      var _this$state$pageResou;
      const message = `EnsureResources was not able to find resources for path: "${this.props.location.pathname}"
This typically means that an issue occurred building components for that path.
Run \`gatsby clean\` to remove any cached elements.`;
      if ((_this$state$pageResou = this.state.pageResources) !== null && _this$state$pageResou !== void 0 && _this$state$pageResou.error) {
        console.error(message);
        throw this.state.pageResources.error;
      }
      throw new Error(message);
    }
    return this.props.children(this.state);
  }
}
var _default = EnsureResources;
exports.default = _default;
//# sourceMappingURL=ensure-resources.js.map