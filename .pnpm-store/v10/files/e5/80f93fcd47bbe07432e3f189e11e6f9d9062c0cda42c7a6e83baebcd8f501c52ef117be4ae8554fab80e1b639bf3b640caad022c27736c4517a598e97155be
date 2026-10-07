"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
exports.getPageChunk = getPageChunk;
var _merge2 = _interopRequireDefault(require("lodash/merge"));
var _react = _interopRequireDefault(require("react"));
var _server = require("react-dom/server");
var _apiRunnerSsr = require("./api-runner-ssr");
var _asyncRequires = _interopRequireDefault(require("$virtual/async-requires"));
/* global BROWSER_ESM_ONLY */

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`);
  const firstLine = err.toString().split(`\n`)[0];
  return regex.test(firstLine);
};
let Html;
try {
  Html = require(`../src/html`);
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = require(`./default-html`);
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`);
    process.exit();
  }
}
Html = Html && Html.__esModule ? Html.default : Html;
var _default = ({
  pagePath
}) => {
  let headComponents = [/*#__PURE__*/_react.default.createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  let htmlAttributes = {};
  let bodyAttributes = {};
  let preBodyComponents = [];
  let postBodyComponents = [];
  let bodyProps = {};
  let htmlStr;
  const setHeadComponents = components => {
    headComponents = headComponents.concat(components);
  };
  const setHtmlAttributes = attributes => {
    htmlAttributes = (0, _merge2.default)(htmlAttributes, attributes);
  };
  const setBodyAttributes = attributes => {
    bodyAttributes = (0, _merge2.default)(bodyAttributes, attributes);
  };
  const setPreBodyComponents = components => {
    preBodyComponents = preBodyComponents.concat(components);
  };
  const setPostBodyComponents = components => {
    postBodyComponents = postBodyComponents.concat(components);
  };
  const setBodyProps = props => {
    bodyProps = (0, _merge2.default)({}, bodyProps, props);
  };
  const getHeadComponents = () => headComponents;
  const replaceHeadComponents = components => {
    headComponents = components;
  };
  const getPreBodyComponents = () => preBodyComponents;
  const replacePreBodyComponents = components => {
    preBodyComponents = components;
  };
  const getPostBodyComponents = () => postBodyComponents;
  const replacePostBodyComponents = components => {
    postBodyComponents = components;
  };
  (0, _apiRunnerSsr.apiRunner)(`onRenderBody`, {
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
    setPreBodyComponents,
    setPostBodyComponents,
    setBodyProps,
    pathname: pagePath
  });
  (0, _apiRunnerSsr.apiRunner)(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath
  });
  const htmlElement = /*#__PURE__*/_react.default.createElement(Html, {
    ...bodyProps,
    body: ``,
    headComponents: headComponents.concat([/*#__PURE__*/_react.default.createElement("script", {
      key: `io`,
      src: "/socket.io/socket.io.js"
    }), /*#__PURE__*/_react.default.createElement("link", {
      key: "styles",
      rel: "stylesheet",
      href: "/commons.css"
    })]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat([!BROWSER_ESM_ONLY && /*#__PURE__*/_react.default.createElement("script", {
      key: `polyfill`,
      src: "/polyfill.js",
      noModule: true
    }), /*#__PURE__*/_react.default.createElement("script", {
      key: `framework`,
      src: "/framework.js"
    }), /*#__PURE__*/_react.default.createElement("script", {
      key: `commons`,
      src: "/commons.js"
    })].filter(Boolean))
  });
  htmlStr = (0, _server.renderToStaticMarkup)(htmlElement);
  htmlStr = `<!DOCTYPE html>${htmlStr}`;
  return htmlStr;
};
exports.default = _default;
function getPageChunk({
  componentChunkName
}) {
  return _asyncRequires.default.components[componentChunkName]();
}
//# sourceMappingURL=develop-static-entry.js.map