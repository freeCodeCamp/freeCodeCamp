"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.RouteUpdates = void 0;
exports.init = init;
exports.shouldUpdateScroll = shouldUpdateScroll;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _loader = _interopRequireWildcard(require("./loader"));
var _redirectUtils = require("./redirect-utils.js");
exports.maybeGetBrowserRedirect = _redirectUtils.maybeGetBrowserRedirect;
var _apiRunnerBrowser = require("./api-runner-browser");
var _emitter = _interopRequireDefault(require("./emitter"));
var _routeAnnouncerProps = require("./route-announcer-props");
var _reachRouter = require("@gatsbyjs/reach-router");
var _gatsbyLink = require("gatsby-link");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function maybeRedirect(pathname) {
  const redirect = (0, _redirectUtils.maybeGetBrowserRedirect)(pathname);
  const {
    hash,
    search
  } = window.location;
  if (redirect != null) {
    window.___replace(redirect.toPath + search + hash);
    return true;
  } else {
    return false;
  }
}

// Catch unhandled chunk loading errors and force a restart of the app.
let nextRoute = ``;
window.addEventListener(`unhandledrejection`, event => {
  if (/loading chunk \d* failed./i.test(event.reason)) {
    if (nextRoute) {
      window.location.pathname = nextRoute;
    }
  }
});
const onPreRouteUpdate = (location, prevLocation) => {
  if (!maybeRedirect(location.pathname)) {
    nextRoute = location.pathname;
    (0, _apiRunnerBrowser.apiRunner)(`onPreRouteUpdate`, {
      location,
      prevLocation
    });
  }
};
const onRouteUpdate = (location, prevLocation) => {
  if (!maybeRedirect(location.pathname)) {
    (0, _apiRunnerBrowser.apiRunner)(`onRouteUpdate`, {
      location,
      prevLocation
    });
    if (process.env.GATSBY_QUERY_ON_DEMAND && process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR === `true`) {
      _emitter.default.emit(`onRouteUpdate`, {
        location,
        prevLocation
      });
    }
  }
};
const navigate = (to, options = {}) => {
  // Support forward/backward navigation with numbers
  // navigate(-2) (jumps back 2 history steps)
  // navigate(2)  (jumps forward 2 history steps)
  if (typeof to === `number`) {
    _reachRouter.globalHistory.navigate(to);
    return;
  }
  const {
    pathname,
    search,
    hash
  } = (0, _gatsbyLink.parsePath)(to);
  const redirect = (0, _redirectUtils.maybeGetBrowserRedirect)(pathname);

  // If we're redirecting, just replace the passed in pathname
  // to the one we want to redirect to.
  if (redirect) {
    to = redirect.toPath + search + hash;
  }

  // If we had a service worker update, no matter the path, reload window and
  // reset the pathname whitelist
  if (window.___swUpdated) {
    window.location = pathname + search + hash;
    return;
  }

  // Start a timer to wait for a second before transitioning and showing a
  // loader in case resources aren't around yet.
  const timeoutId = setTimeout(() => {
    _emitter.default.emit(`onDelayedLoadPageResources`, {
      pathname
    });
    (0, _apiRunnerBrowser.apiRunner)(`onRouteUpdateDelayed`, {
      location: window.location
    });
  }, 1000);
  _loader.default.loadPage(pathname + search).then(pageResources => {
    // If no page resources, then refresh the page
    // Do this, rather than simply `window.location.reload()`, so that
    // pressing the back/forward buttons work - otherwise when pressing
    // back, the browser will just change the URL and expect JS to handle
    // the change, which won't always work since it might not be a Gatsby
    // page.
    if (!pageResources || pageResources.status === _loader.PageResourceStatus.Error) {
      window.history.replaceState({}, ``, location.href);
      window.location = pathname;
      clearTimeout(timeoutId);
      return;
    }

    // If the loaded page has a different compilation hash to the
    // window, then a rebuild has occurred on the server. Reload.
    if (process.env.NODE_ENV === `production` && pageResources) {
      if (pageResources.page.webpackCompilationHash !== window.___webpackCompilationHash) {
        // Purge plugin-offline cache
        if (`serviceWorker` in navigator && navigator.serviceWorker.controller !== null && navigator.serviceWorker.controller.state === `activated`) {
          navigator.serviceWorker.controller.postMessage({
            gatsbyApi: `clearPathResources`
          });
        }
        window.location = pathname + search + hash;
      }
    }
    (0, _reachRouter.navigate)(to, options);
    clearTimeout(timeoutId);
  });
};
function shouldUpdateScroll(prevRouterProps, {
  location
}) {
  const {
    pathname,
    hash
  } = location;
  const results = (0, _apiRunnerBrowser.apiRunner)(`shouldUpdateScroll`, {
    prevRouterProps,
    // `pathname` for backwards compatibility
    pathname,
    routerProps: {
      location
    },
    getSavedScrollPosition: args => [0,
    // FIXME this is actually a big code smell, we should fix this
    // eslint-disable-next-line @babel/no-invalid-this
    this._stateStorage.read(args, args.key)]
  });
  if (results.length > 0) {
    // Use the latest registered shouldUpdateScroll result, this allows users to override plugin's configuration
    // @see https://github.com/gatsbyjs/gatsby/issues/12038
    return results[results.length - 1];
  }
  if (prevRouterProps) {
    const {
      location: {
        pathname: oldPathname
      }
    } = prevRouterProps;
    if (oldPathname === pathname) {
      // Scroll to element if it exists, if it doesn't, or no hash is provided,
      // scroll to top.
      return hash ? decodeURI(hash.slice(1)) : [0, 0];
    }
  }
  return true;
}
function init() {
  // The "scroll-behavior" package expects the "action" to be on the location
  // object so let's copy it over.
  _reachRouter.globalHistory.listen(args => {
    args.location.action = args.action;
  });
  window.___push = to => navigate(to, {
    replace: false
  });
  window.___replace = to => navigate(to, {
    replace: true
  });
  window.___navigate = (to, options) => navigate(to, options);
}
class RouteAnnouncer extends _react.default.Component {
  constructor(props) {
    super(props);
    this.announcementRef = /*#__PURE__*/_react.default.createRef();
  }
  componentDidUpdate(prevProps, nextProps) {
    requestAnimationFrame(() => {
      let pageName = `new page at ${this.props.location.pathname}`;
      if (document.title) {
        pageName = document.title;
      }
      const pageHeadings = document.querySelectorAll(`#gatsby-focus-wrapper h1`);
      if (pageHeadings && pageHeadings.length) {
        pageName = pageHeadings[0].textContent;
      }
      const newAnnouncement = `Navigated to ${pageName}`;
      if (this.announcementRef.current) {
        const oldAnnouncement = this.announcementRef.current.innerText;
        if (oldAnnouncement !== newAnnouncement) {
          this.announcementRef.current.innerText = newAnnouncement;
        }
      }
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, _routeAnnouncerProps.RouteAnnouncerProps, {
      ref: this.announcementRef
    }));
  }
}
const compareLocationProps = (prevLocation, nextLocation) => {
  var _prevLocation$state, _nextLocation$state;
  if (prevLocation.href !== nextLocation.href) {
    return true;
  }
  if ((prevLocation === null || prevLocation === void 0 ? void 0 : (_prevLocation$state = prevLocation.state) === null || _prevLocation$state === void 0 ? void 0 : _prevLocation$state.key) !== (nextLocation === null || nextLocation === void 0 ? void 0 : (_nextLocation$state = nextLocation.state) === null || _nextLocation$state === void 0 ? void 0 : _nextLocation$state.key)) {
    return true;
  }
  return false;
};

// Fire on(Pre)RouteUpdate APIs
class RouteUpdates extends _react.default.Component {
  constructor(props) {
    super(props);
    onPreRouteUpdate(props.location, null);
  }
  componentDidMount() {
    onRouteUpdate(this.props.location, null);
  }
  shouldComponentUpdate(nextProps) {
    if (compareLocationProps(this.props.location, nextProps.location)) {
      onPreRouteUpdate(nextProps.location, this.props.location);
      return true;
    }
    return false;
  }
  componentDidUpdate(prevProps) {
    if (compareLocationProps(prevProps.location, this.props.location)) {
      onRouteUpdate(this.props.location, prevProps.location);
    }
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this.props.children, /*#__PURE__*/_react.default.createElement(RouteAnnouncer, {
      location: location
    }));
  }
}
exports.RouteUpdates = RouteUpdates;
RouteUpdates.propTypes = {
  location: _propTypes.default.object.isRequired
};
//# sourceMappingURL=navigation.js.map