"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.applyHtmlAndBodyAttributesSSR = applyHtmlAndBodyAttributesSSR;
exports.getValidHeadNodesAndAttributesSSR = getValidHeadNodesAndAttributesSSR;
exports.headHandlerForSSR = headHandlerForSSR;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _constants = require("./constants");
var _headComponents = require("./components/head-components");
var _apiRunnerSsr = require("../api-runner-ssr");
const React = require(`react`);
const {
  grabMatchParams
} = require(`../find-path`);
const {
  StaticQueryContext
} = require(`gatsby`);
const {
  headExportValidator,
  filterHeadProps,
  isElementType,
  isValidNodeName,
  warnForInvalidTag
} = require(`./utils`);
const {
  ServerLocation,
  Router
} = require(`@gatsbyjs/reach-router`);
const {
  renderToString
} = require(`react-dom/server`);
const {
  parse
} = require(`node-html-parser`);
const styleToOjbect = require(`style-to-object`);
function applyHtmlAndBodyAttributesSSR(htmlAndBodyAttributes, {
  setHtmlAttributes,
  setBodyAttributes
}) {
  if (!htmlAndBodyAttributes) return;
  const {
    html,
    body
  } = htmlAndBodyAttributes;
  setHtmlAttributes(html);
  setBodyAttributes(body);
}
function getValidHeadNodesAndAttributesSSR(rootNode, htmlAndBodyAttributes = {
  html: {},
  body: {}
}) {
  const seenIds = new Map();
  const validHeadNodes = [];

  // Filter out non-element nodes before looping since we don't care about them
  for (const node of rootNode.childNodes) {
    var _node$attributes, _node$attributes$HTML, _node$attributes2;
    const {
      rawTagName
    } = node;
    const id = (_node$attributes = node.attributes) === null || _node$attributes === void 0 ? void 0 : _node$attributes.id;
    if (!isElementType(node)) continue;
    const NodeName = (_node$attributes$HTML = (_node$attributes2 = node.attributes) === null || _node$attributes2 === void 0 ? void 0 : _node$attributes2[_constants.HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY]) !== null && _node$attributes$HTML !== void 0 ? _node$attributes$HTML : rawTagName;
    if (isValidNodeName(NodeName)) {
      if (NodeName === `html` || NodeName === `body`) {
        const {
          style,
          ...nonStyleAttributes
        } = node.attributes;
        htmlAndBodyAttributes[NodeName] = {
          ...htmlAndBodyAttributes[NodeName],
          ...nonStyleAttributes
        };

        // Unfortunately renderToString converts inline styles to a string, so we have to convert them back to an object
        if (style) {
          var _htmlAndBodyAttribute;
          htmlAndBodyAttributes[NodeName].style = {
            ...((_htmlAndBodyAttribute = htmlAndBodyAttributes[NodeName]) === null || _htmlAndBodyAttribute === void 0 ? void 0 : _htmlAndBodyAttribute.style),
            ...styleToOjbect(style)
          };
        }
      } else {
        let element;
        const attributes = {
          ...node.attributes,
          "data-gatsby-head": true
        };
        if (attributes[_constants.ITEM_PROP_WORKAROUND_KEY] === _constants.ITEM_PROP_WORKAROUND_VALUE) {
          delete attributes[_constants.ITEM_PROP_WORKAROUND_KEY];
        }
        if (NodeName === `script` || NodeName === `style`) {
          element = /*#__PURE__*/React.createElement(NodeName, (0, _extends2.default)({}, attributes, {
            dangerouslySetInnerHTML: {
              __html: node.text
            }
          }));
        } else {
          element = node.textContent.length > 0 ? /*#__PURE__*/React.createElement(NodeName, attributes, node.textContent) : /*#__PURE__*/React.createElement(NodeName, attributes);
        }
        if (id) {
          if (!seenIds.has(id)) {
            validHeadNodes.push(element);
            seenIds.set(id, validHeadNodes.length - 1);
          } else {
            const indexOfPreviouslyInsertedNode = seenIds.get(id);
            validHeadNodes[indexOfPreviouslyInsertedNode] = element;
          }
        } else {
          validHeadNodes.push(element);
        }
      }
    } else {
      warnForInvalidTag(rawTagName);
    }
    if (node.childNodes.length) {
      validHeadNodes.push(...getValidHeadNodesAndAttributesSSR(node, htmlAndBodyAttributes).validHeadNodes);
    }
  }
  return {
    validHeadNodes,
    htmlAndBodyAttributes
  };
}

// see explanation in "head-export-handler-for-browser.js" module for reasons behind this patching
let applyCreateElementPatch = undefined;
let revertCreateElementPatch = undefined;
let needToRevertCreateElementPatch = false;
const reactMajor = parseInt(React.version.split(`.`)[0], 10);
if (reactMajor !== 18) {
  const originalCreateElement = React.createElement;
  const validHeadComponentReplacements = (0, _headComponents.getValidHeadComponentReplacements)(originalCreateElement, true);
  function patchedCreateElement(type, props, ...rest) {
    const headReplacement = validHeadComponentReplacements.get(type);
    if (headReplacement) {
      type = headReplacement;
    }
    return originalCreateElement.call(React, type, props, ...rest);
  }
  applyCreateElementPatch = () => {
    needToRevertCreateElementPatch = true;
    React.createElement = patchedCreateElement;
  };
  revertCreateElementPatch = () => {
    if (needToRevertCreateElementPatch) {
      React.createElement = originalCreateElement;
      needToRevertCreateElementPatch = false;
    }
  };
}

// if this sync function is changed to async one, make sure to cover potential React.createElement patching as
// current handling relies on it being sync and we can just modify React.createElement temporarily without checking context of render
// (check how it's done in "head-export-handler-for-browser.js" module for potential solution)
function headHandlerForSSR({
  pageComponent,
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
  staticQueryContext,
  pageData,
  pagePath
}) {
  if (pageComponent !== null && pageComponent !== void 0 && pageComponent.Head) {
    try {
      var _applyCreateElementPa, _revertCreateElementP;
      headExportValidator(pageComponent.Head);
      function HeadRouteHandler(props) {
        var _pageData$result, _pageData$result$page;
        const _props = {
          ...props,
          ...pageData.result,
          params: {
            ...grabMatchParams(props.location.pathname),
            ...(((_pageData$result = pageData.result) === null || _pageData$result === void 0 ? void 0 : (_pageData$result$page = _pageData$result.pageContext) === null || _pageData$result$page === void 0 ? void 0 : _pageData$result$page.__params) || {})
          }
        };
        const HeadElement = /*#__PURE__*/React.createElement(pageComponent.Head, filterHeadProps(_props));
        const headWithWrapRootElement = (0, _apiRunnerSsr.apiRunner)(`wrapRootElement`, {
          element: HeadElement
        }, HeadElement, ({
          result
        }) => {
          return {
            element: result
          };
        }).pop();
        return headWithWrapRootElement;
      }
      const routerElement = /*#__PURE__*/React.createElement(StaticQueryContext.Provider, {
        value: staticQueryContext
      }, /*#__PURE__*/React.createElement(ServerLocation, {
        url: `${__BASE_PATH__}${pagePath}`
      }, /*#__PURE__*/React.createElement(Router, {
        baseuri: __BASE_PATH__,
        component: ({
          children
        }) => /*#__PURE__*/React.createElement(React.Fragment, null, children)
      }, /*#__PURE__*/React.createElement(HeadRouteHandler, {
        path: "/*"
      }))));
      (_applyCreateElementPa = applyCreateElementPatch) === null || _applyCreateElementPa === void 0 ? void 0 : _applyCreateElementPa();
      const rawString = renderToString(routerElement);
      (_revertCreateElementP = revertCreateElementPatch) === null || _revertCreateElementP === void 0 ? void 0 : _revertCreateElementP();
      const rootNode = parse(rawString);
      const {
        validHeadNodes,
        htmlAndBodyAttributes
      } = getValidHeadNodesAndAttributesSSR(rootNode);
      applyHtmlAndBodyAttributesSSR(htmlAndBodyAttributes, {
        setHtmlAttributes,
        setBodyAttributes
      });
      setHeadComponents(validHeadNodes);
    } catch (e) {
      var _revertCreateElementP2;
      // make sure that we don't leave this function without reverting the patch
      (_revertCreateElementP2 = revertCreateElementPatch) === null || _revertCreateElementP2 === void 0 ? void 0 : _revertCreateElementP2();
      throw e;
    }
  }
}
//# sourceMappingURL=head-export-handler-for-ssr.js.map