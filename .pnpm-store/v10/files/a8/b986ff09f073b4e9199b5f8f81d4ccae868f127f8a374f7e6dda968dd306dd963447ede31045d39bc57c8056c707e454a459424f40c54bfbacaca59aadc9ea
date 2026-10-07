"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.partytownProxy = partytownProxy;
exports.thirdPartyProxyPath = void 0;
var _expressHttpProxy = _interopRequireDefault(require("express-http-proxy"));
const thirdPartyProxyPath = `/__third-party-proxy`;
exports.thirdPartyProxyPath = thirdPartyProxyPath;
function partytownProxy(partytownProxiedURLs) {
  return (0, _expressHttpProxy.default)(req => new URL(req.query.url).origin, {
    filter: req => partytownProxiedURLs.some(url => {
      var _req$query;
      return ((_req$query = req.query) === null || _req$query === void 0 ? void 0 : _req$query.url) === url;
    }),
    proxyReqPathResolver: req => {
      var _req$query2;
      const {
        pathname = ``,
        search = ``
      } = new URL((_req$query2 = req.query) === null || _req$query2 === void 0 ? void 0 : _req$query2.url);
      return pathname + search;
    }
  });
}
//# sourceMappingURL=proxy.js.map