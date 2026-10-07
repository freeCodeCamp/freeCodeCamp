"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.IsHeadRenderContext = void 0;
exports.getValidHeadComponentReplacements = getValidHeadComponentReplacements;
var _react = _interopRequireDefault(require("react"));
var _constants = require("../constants");
const IsHeadRenderContext = /*#__PURE__*/_react.default.createContext(false);
exports.IsHeadRenderContext = IsHeadRenderContext;
function getValidHeadComponentReplacements(originalCreateElement, forceHeadRenderContext) {
  function useIsHeadRender() {
    if (forceHeadRenderContext) {
      // for SSR we don't need to use React context, because head rendering is sync
      // so forcing it is more performant
      return true;
    }

    // for Browser we use React Context
    // note: technically this is breaking rules of hooks, because useContext is used
    // not at the top of the hook after some conditional code did run,
    // but this would only manifest if `forceHeadRenderContext` could change between rerenders,
    // and because this is factory argument, it can't change
    const isHeadRenderFromContext = _react.default.useContext(IsHeadRenderContext);
    return isHeadRenderFromContext;
  }
  function htmlOrBodyComponentFactory(TagName) {
    const HeadAwareComponent = props => {
      // De-risk monkey patch by only applying it within a `Head()` render.
      const isHeadRender = useIsHeadRender();
      if (isHeadRender) {
        const allProps = {
          ...props,
          [_constants.HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY]: TagName
        };
        return originalCreateElement(`div`, allProps);
      } else {
        return originalCreateElement(TagName, props);
      }
    };
    HeadAwareComponent.displayName = `React19HeadAPICompat${TagName}`;
    return HeadAwareComponent;
  }
  function nodeComponentFactory(TagName) {
    const HeadAwareComponent = props => {
      // De-risk monkey patch by only applying it within a `Head()` render:
      const isHeadRender = useIsHeadRender();
      // only modify props if ITEM_PROP_WORKAROUND_KEY is not set in props
      if (isHeadRender && !(_constants.ITEM_PROP_WORKAROUND_KEY in props)) {
        const propsWithWorkaround = {
          ...props,
          [_constants.ITEM_PROP_WORKAROUND_KEY]: _constants.ITEM_PROP_WORKAROUND_VALUE
        };
        return originalCreateElement(TagName, propsWithWorkaround);
      }
      return originalCreateElement(TagName, props);
    };
    HeadAwareComponent.displayName = `React19HeadAPICompat${TagName}`;
    return HeadAwareComponent;
  }
  return new Map(_constants.VALID_NODE_NAMES.map(nodeName => {
    // for each of valid head nodes we will create replacement component
    // that can check IsHeadRenderContext context (it is a new component,
    // so this won't break rules of hooks) and apply workarounds for
    // React 19 automatic handling of meta tags which is incompatible with
    // Gatsby Head API

    const replacement = nodeName === `html` || nodeName === `body` ? htmlOrBodyComponentFactory(nodeName) : nodeComponentFactory(nodeName);
    return [nodeName, replacement];
  }));
}
//# sourceMappingURL=head-components.js.map