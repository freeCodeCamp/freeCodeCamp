"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
var _exportNames = {
  PageRenderer: true,
  useScrollRestoration: true,
  Link: true,
  withPrefix: true,
  withAssetPrefix: true,
  navigate: true,
  parsePath: true,
  graphql: true,
  prefetchPathname: true,
  StaticQuery: true,
  StaticQueryContext: true,
  useStaticQuery: true,
  Slice: true
};
exports.StaticQueryContext = exports.StaticQuery = exports.Slice = exports.PageRenderer = exports.Link = void 0;
exports.graphql = graphql;
exports.withPrefix = exports.withAssetPrefix = exports.useStaticQuery = exports.useScrollRestoration = exports.prefetchPathname = exports.parsePath = exports.navigate = void 0;
var _loader = _interopRequireDefault(require("./loader"));
var _publicPageRenderer = _interopRequireDefault(require("./public-page-renderer"));
exports.PageRenderer = _publicPageRenderer.default;
var _gatsbyReactRouterScroll = require("gatsby-react-router-scroll");
exports.useScrollRestoration = _gatsbyReactRouterScroll.useScrollRestoration;
var _gatsbyLink = require("gatsby-link");
exports.Link = _gatsbyLink.Link;
exports.withPrefix = _gatsbyLink.withPrefix;
exports.withAssetPrefix = _gatsbyLink.withAssetPrefix;
exports.navigate = _gatsbyLink.navigate;
exports.parsePath = _gatsbyLink.parsePath;
var _staticQuery = require("./static-query");
exports.StaticQuery = _staticQuery.StaticQuery;
exports.StaticQueryContext = _staticQuery.StaticQueryContext;
exports.useStaticQuery = _staticQuery.useStaticQuery;
var _slice = require("./slice");
exports.Slice = _slice.Slice;
var _gatsbyScript = require("gatsby-script");
Object.keys(_gatsbyScript).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _gatsbyScript[key]) return;
  exports[key] = _gatsbyScript[key];
});
const prefetchPathname = _loader.default.enqueue;
exports.prefetchPathname = prefetchPathname;
function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}
//# sourceMappingURL=gatsby-browser-entry.js.map