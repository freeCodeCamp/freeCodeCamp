"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _apiRunnerBrowser = require("./api-runner-browser");
var _findPath = require("./find-path");
var _headExportHandlerForBrowser = require("./head/head-export-handler-for-browser");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// Renders page
function PageRenderer(props) {
  const pageComponentProps = {
    ...props,
    params: {
      ...(0, _findPath.grabMatchParams)(props.location.pathname),
      ...props.pageResources.json.pageContext.__params
    }
  };
  const preferDefault = m => m && m.default || m;
  let pageElement;
  if (props.pageResources.partialHydration) {
    pageElement = props.pageResources.partialHydration;
  } else {
    pageElement = /*#__PURE__*/(0, _react.createElement)(preferDefault(props.pageResources.component), {
      ...pageComponentProps,
      key: props.path || props.pageResources.page.path
    });
  }
  const pageComponent = props.pageResources.head;
  (0, _headExportHandlerForBrowser.headHandlerForBrowser)({
    pageComponent,
    staticQueryResults: props.pageResources.staticQueryResults,
    pageComponentProps
  });
  const wrappedPage = (0, _apiRunnerBrowser.apiRunner)(`wrapPageElement`, {
    element: pageElement,
    props: pageComponentProps
  }, pageElement, ({
    result
  }) => {
    return {
      element: result,
      props: pageComponentProps
    };
  }).pop();
  return wrappedPage;
}
PageRenderer.propTypes = {
  location: _propTypes.default.object.isRequired,
  pageResources: _propTypes.default.object.isRequired,
  data: _propTypes.default.object,
  pageContext: _propTypes.default.object.isRequired
};
var _default = PageRenderer;
exports.default = _default;
//# sourceMappingURL=page-renderer.js.map