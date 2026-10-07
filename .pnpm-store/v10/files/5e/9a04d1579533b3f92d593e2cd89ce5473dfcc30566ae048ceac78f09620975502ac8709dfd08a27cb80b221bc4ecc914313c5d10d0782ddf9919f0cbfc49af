"use strict";

exports.__esModule = true;
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _errorBoundary = require("./components/error-boundary");
var _shadowPortal = require("../shadow-portal");
var _style = require("./style");
var _buildError = require("./components/build-error");
var _runtimeErrors = require("./components/runtime-errors");
var _graphqlErrors = require("./components/graphql-errors");
var _devSsrError = require("./components/dev-ssr-error");
var _getserverdataError = require("./components/getserverdata-error");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const reducer = (state, event) => {
  switch (event.action) {
    case `CLEAR_COMPILE_ERROR`:
      {
        return {
          ...state,
          buildError: null
        };
      }
    case `CLEAR_RUNTIME_ERRORS`:
      {
        return {
          ...state,
          errors: []
        };
      }
    case `CLEAR_DEV_SSR_ERROR`:
      {
        return {
          ...state,
          devSsrError: null
        };
      }
    case `SHOW_COMPILE_ERROR`:
      {
        return {
          ...state,
          buildError: event.payload
        };
      }
    case `SHOW_DEV_SSR_ERROR`:
      {
        return {
          ...state,
          devSsrError: event.payload
        };
      }
    case `HANDLE_RUNTIME_ERROR`:
    case `SHOW_RUNTIME_ERRORS`:
      {
        return {
          ...state,
          errors: state.errors.concat(event.payload)
        };
      }
    case `SHOW_GETSERVERDATA_ERROR`:
      {
        return {
          ...state,
          getServerDataError: event.payload
        };
      }
    case `SHOW_GRAPHQL_ERRORS`:
      {
        return {
          ...state,
          graphqlErrors: event.payload
        };
      }
    case `CLEAR_GRAPHQL_ERRORS`:
      {
        return {
          ...state,
          graphqlErrors: []
        };
      }
    case `DISMISS`:
      {
        return {
          ...state,
          buildError: null,
          errors: [],
          graphqlErrors: [],
          getServerDataError: null
        };
      }
    default:
      {
        return state;
      }
  }
};
const initialState = {
  errors: [],
  buildError: null,
  devSsrError: null,
  getServerDataError: null,
  graphqlErrors: []
};
function DevOverlay({
  children
}) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    const gatsbyEvents = window._gatsbyEvents || [];
    window._gatsbyEvents = {
      push: ([channel, event]) => {
        if (channel === `FAST_REFRESH`) {
          dispatch(event);
        }
      }
    };
    gatsbyEvents.forEach(([channel, event]) => {
      if (channel === `FAST_REFRESH`) {
        dispatch(event);
      }
    });
    return () => {
      window._gatsbyEvents = [];
    };
  }, [dispatch]);
  const dismiss = () => {
    dispatch({
      action: `DISMISS`
    });
    // Setting gatsbyEvents = [] is necessary for the runtime errors to correctly clear
    // However, using this for serverData errors doesn't work and results in the overlay not showing up
    // again since the component isn't remounted and thus the .push method is not reinitalized
    window._gatsbyEvents = [];
  };
  const hasBuildError = state.buildError !== null;
  const hasRuntimeErrors = Boolean(state.errors.length);
  const hasGetServerDataError = Boolean(state.getServerDataError);
  const hasGraphqlErrors = Boolean(state.graphqlErrors.length);
  const hasDevSsrError = state.devSsrError !== null;
  const hasErrors = hasBuildError || hasRuntimeErrors || hasGraphqlErrors || hasDevSsrError || hasGetServerDataError;

  // This component has a deliberate order (priority)
  const ErrorComponent = () => {
    if (hasBuildError) {
      return /*#__PURE__*/React.createElement(_buildError.BuildError, {
        error: state.buildError
      });
    }
    if (hasGetServerDataError) {
      return /*#__PURE__*/React.createElement(_getserverdataError.GetServerDataError, {
        error: state.getServerDataError
      });
    }
    if (hasRuntimeErrors) {
      return /*#__PURE__*/React.createElement(_runtimeErrors.RuntimeErrors, {
        errors: state.errors,
        dismiss: dismiss
      });
    }
    if (hasGraphqlErrors) {
      return /*#__PURE__*/React.createElement(_graphqlErrors.GraphqlErrors, {
        errors: state.graphqlErrors,
        dismiss: dismiss
      });
    }
    if (hasDevSsrError) {
      return /*#__PURE__*/React.createElement(_devSsrError.DevSsrError, {
        error: state.devSsrError
      });
    }
    return null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_errorBoundary.ErrorBoundary, {
    hasErrors: hasErrors
  }, children !== null && children !== void 0 ? children : null), hasErrors ? /*#__PURE__*/React.createElement(_shadowPortal.ShadowPortal, {
    identifier: "gatsby-fast-refresh"
  }, /*#__PURE__*/React.createElement(_style.Style, null), /*#__PURE__*/React.createElement(ErrorComponent, null)) : undefined);
}
var _default = DevOverlay;
exports.default = _default;
//# sourceMappingURL=index.js.map