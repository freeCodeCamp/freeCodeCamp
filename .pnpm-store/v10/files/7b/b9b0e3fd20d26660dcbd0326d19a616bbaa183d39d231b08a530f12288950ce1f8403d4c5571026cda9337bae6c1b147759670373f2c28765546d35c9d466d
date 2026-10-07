"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.StaticQueryStore = exports.SliceDataStore = exports.PageQueryStore = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _gatsby = require("gatsby");
var _socketIo = require("./socketIo");
var _pageRenderer = _interopRequireDefault(require("./page-renderer"));
var _normalizePagePath = _interopRequireDefault(require("./normalize-page-path"));
var _loader = _interopRequireWildcard(require("./loader"));
var _context = require("./slice/context");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
if (process.env.NODE_ENV === `production`) {
  throw new Error(`It appears like Gatsby is misconfigured. JSONStore is Gatsby internal ` + `development-only component and should never be used in production.\n\n` + `Unless your site has a complex or custom webpack/Gatsby ` + `configuration this is likely a bug in Gatsby. ` + `Please report this at https://github.com/gatsbyjs/gatsby/issues ` + `with steps to reproduce this error.`);
}
const getPathFromProps = props => props.pageResources && props.pageResources.page ? (0, _normalizePagePath.default)(props.pageResources.page.path) : undefined;
class PageQueryStore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: null,
      path: null
    };
  }
  handleMittEvent = () => {
    this.setState(state => {
      return {
        page: state.path ? _loader.default.loadPageSync((0, _normalizePagePath.default)(state.path)) : null
      };
    });
  };
  componentDidMount() {
    var _this$state, _this$state$page, _this$state$page$page;
    (0, _socketIo.registerPath)(getPathFromProps(this.props));
    ___emitter.on(`pageQueryResult`, this.handleMittEvent);
    ___emitter.on(`serverDataResult`, this.handleMittEvent);
    ___emitter.on(`onPostLoadPageResources`, this.handleMittEvent);
    window._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `SHOW_GETSERVERDATA_ERROR`,
      payload: (_this$state = this.state) === null || _this$state === void 0 ? void 0 : (_this$state$page = _this$state.page) === null || _this$state$page === void 0 ? void 0 : (_this$state$page$page = _this$state$page.page) === null || _this$state$page$page === void 0 ? void 0 : _this$state$page$page.getServerDataError
    }]);
  }
  componentDidUpdate() {
    var _this$state2, _this$state2$page, _this$state2$page$pag;
    window._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `SHOW_GETSERVERDATA_ERROR`,
      payload: (_this$state2 = this.state) === null || _this$state2 === void 0 ? void 0 : (_this$state2$page = _this$state2.page) === null || _this$state2$page === void 0 ? void 0 : (_this$state2$page$pag = _this$state2$page.page) === null || _this$state2$page$pag === void 0 ? void 0 : _this$state2$page$pag.getServerDataError
    }]);
  }
  componentWillUnmount() {
    (0, _socketIo.unregisterPath)(this.state.path);
    ___emitter.off(`pageQueryResult`, this.handleMittEvent);
    ___emitter.off(`serverDataResult`, this.handleMittEvent);
    ___emitter.off(`onPostLoadPageResources`, this.handleMittEvent);
  }
  static getDerivedStateFromProps(props, state) {
    const newPath = getPathFromProps(props);
    if (newPath !== state.path) {
      (0, _socketIo.unregisterPath)(state.path);
      (0, _socketIo.registerPath)(newPath);
      return {
        path: newPath,
        page: newPath ? _loader.default.loadPageSync((0, _normalizePagePath.default)(newPath)) : null
      };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - location changed
    // - page data for path changed

    return this.props.location !== nextProps.location || this.state.path !== nextState.path || this.state.page !== nextState.page;
  }
  render() {
    // eslint-disable-next-line
    if (!this.state.page) {
      return /*#__PURE__*/_react.default.createElement("div", null);
    }
    if (this.state.page.page.getServerDataError) {
      return /*#__PURE__*/_react.default.createElement("div", null);
    }
    return /*#__PURE__*/_react.default.createElement(_pageRenderer.default, (0, _extends2.default)({}, this.props, this.state.page.json));
  }
}
exports.PageQueryStore = PageQueryStore;
class StaticQueryStore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      staticQueryData: {
        ...(0, _loader.getStaticQueryResults)()
      }
    };
  }
  handleMittEvent = () => {
    this.setState({
      staticQueryData: {
        ...(0, _loader.getStaticQueryResults)()
      }
    });
  };
  componentDidMount() {
    ___emitter.on(`staticQueryResult`, this.handleMittEvent);
    ___emitter.on(`onPostLoadPageResources`, this.handleMittEvent);
  }
  componentWillUnmount() {
    ___emitter.off(`staticQueryResult`, this.handleMittEvent);
    ___emitter.off(`onPostLoadPageResources`, this.handleMittEvent);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - static query results changed

    return this.state.staticQueryData !== nextState.staticQueryData;
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_gatsby.StaticQueryContext.Provider, {
      value: this.state.staticQueryData
    }, this.props.children);
  }
}
exports.StaticQueryStore = StaticQueryStore;
class SliceDataStore extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      slicesData: new Map((0, _loader.getSliceResults)())
    };
  }
  handleMittEvent = () => {
    this.setState({
      slicesData: new Map((0, _loader.getSliceResults)())
    });
  };
  componentDidMount() {
    ___emitter.on(`sliceQueryResult`, this.handleMittEvent);
    ___emitter.on(`onPostLoadPageResources`, this.handleMittEvent);
  }
  componentWillUnmount() {
    ___emitter.off(`sliceQueryResult`, this.handleMittEvent);
    ___emitter.off(`onPostLoadPageResources`, this.handleMittEvent);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - slice results changed

    return this.state.slicesData !== nextState.slicesData;
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_context.SlicesResultsContext.Provider, {
      value: this.state.slicesData
    }, this.props.children);
  }
}
exports.SliceDataStore = SliceDataStore;
//# sourceMappingURL=query-result-store.js.map