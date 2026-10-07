"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _reachRouter = require("@gatsbyjs/reach-router");
var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");
var _context = require("./slice/context");
var _navigation = require("./navigation");
var _apiRunnerBrowser = require("./api-runner-browser");
var _loader = _interopRequireDefault(require("./loader"));
var _queryResultStore = require("./query-result-store");
var _ensureResources = _interopRequireDefault(require("./ensure-resources"));
var _fastRefreshOverlay = _interopRequireDefault(require("./fast-refresh-overlay"));
// In gatsby v2 if Router is used in page using matchPaths
// paths need to contain full path.
// For example:
//   - page have `/app/*` matchPath
//   - inside template user needs to use `/app/xyz` as path
// Resetting `basepath`/`baseuri` keeps current behaviour
// to not introduce breaking change.
// Remove this in v3
const RouteHandler = props => /*#__PURE__*/_react.default.createElement(_reachRouter.BaseContext.Provider, {
  value: {
    baseuri: `/`,
    basepath: `/`
  }
}, /*#__PURE__*/_react.default.createElement(_queryResultStore.PageQueryStore, props));
class LocationHandler extends _react.default.Component {
  render() {
    const {
      location
    } = this.props;
    const slicesContext = {
      renderEnvironment: `browser`
    };
    if (!_loader.default.isPageNotFound(location.pathname + location.search)) {
      return /*#__PURE__*/_react.default.createElement(_ensureResources.default, {
        location: location
      }, locationAndPageResources => /*#__PURE__*/_react.default.createElement(_context.SlicesContext.Provider, {
        value: slicesContext
      }, /*#__PURE__*/_react.default.createElement(_context.SlicesMapContext.Provider, {
        value: locationAndPageResources.pageResources.page.slicesMap
      }, /*#__PURE__*/_react.default.createElement(_navigation.RouteUpdates, {
        location: location
      }, /*#__PURE__*/_react.default.createElement(_gatsbyReactRouterScroll.ScrollContext, {
        location: location,
        shouldUpdateScroll: _navigation.shouldUpdateScroll
      }, /*#__PURE__*/_react.default.createElement(_reachRouter.Router, {
        basepath: __BASE_PATH__,
        location: location,
        id: "gatsby-focus-wrapper"
      }, /*#__PURE__*/_react.default.createElement(RouteHandler, (0, _extends2.default)({
        path: encodeURI((locationAndPageResources.pageResources.page.matchPath || locationAndPageResources.pageResources.page.path).split(`?`)[0])
      }, this.props, locationAndPageResources))))))));
    }
    const dev404PageResources = _loader.default.loadPageSync(`/dev-404-page`);
    const real404PageResources = _loader.default.loadPageSync(`/404.html`);
    let custom404;
    if (real404PageResources) {
      custom404 = /*#__PURE__*/_react.default.createElement(_queryResultStore.PageQueryStore, (0, _extends2.default)({}, this.props, {
        pageResources: real404PageResources
      }));
    }
    return /*#__PURE__*/_react.default.createElement(_ensureResources.default, {
      location: location
    }, locationAndPageResources => /*#__PURE__*/_react.default.createElement(_context.SlicesContext.Provider, {
      value: slicesContext
    }, /*#__PURE__*/_react.default.createElement(_context.SlicesMapContext.Provider, {
      value: locationAndPageResources.pageResources.page.slicesMap
    }, /*#__PURE__*/_react.default.createElement(_navigation.RouteUpdates, {
      location: location
    }, /*#__PURE__*/_react.default.createElement(_reachRouter.Router, {
      basepath: __BASE_PATH__,
      location: location,
      id: "gatsby-focus-wrapper"
    }, /*#__PURE__*/_react.default.createElement(RouteHandler, {
      path: location.pathname,
      location: location,
      pageResources: dev404PageResources,
      custom404: custom404
    }))))));
  }
}
const Root = () => /*#__PURE__*/_react.default.createElement(_reachRouter.Location, null, locationContext => /*#__PURE__*/_react.default.createElement(LocationHandler, locationContext));

// Let site, plugins wrap the site e.g. for Redux.
const rootWrappedWithWrapRootElement = (0, _apiRunnerBrowser.apiRunner)(`wrapRootElement`, {
  element: /*#__PURE__*/_react.default.createElement(Root, null)
}, /*#__PURE__*/_react.default.createElement(Root, null), ({
  result,
  plugin
}) => {
  return {
    element: result
  };
}).pop();
function RootWrappedWithOverlayAndProvider() {
  return /*#__PURE__*/_react.default.createElement(_fastRefreshOverlay.default, null, /*#__PURE__*/_react.default.createElement(_queryResultStore.SliceDataStore, null, /*#__PURE__*/_react.default.createElement(_queryResultStore.StaticQueryStore, null, rootWrappedWithWrapRootElement)));
}
var _default = RootWrappedWithOverlayAndProvider;
exports.default = _default;
//# sourceMappingURL=root.js.map