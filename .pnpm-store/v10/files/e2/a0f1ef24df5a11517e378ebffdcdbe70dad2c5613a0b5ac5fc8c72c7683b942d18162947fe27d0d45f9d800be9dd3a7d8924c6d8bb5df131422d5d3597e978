"use strict";

exports.__esModule = true;
exports.getServerData = getServerData;
var _reachRouter = require("@gatsbyjs/reach-router");
async function getServerData(req, page, pagePath, mod) {
  var _req$headers, _req$method, _req$url, _req$query;
  if (!(mod !== null && mod !== void 0 && mod.getServerData)) {
    return {};
  }
  const ensuredLeadingSlash = pagePath.startsWith(`/`) ? pagePath : `/${pagePath}`;
  const {
    params
  } = (0, _reachRouter.match)(page.matchPath || page.path, ensuredLeadingSlash);
  const fsRouteParams = typeof page.context[`__params`] === `object` ? page.context[`__params`] : {};
  const getServerDataArg = {
    headers: new Map(Object.entries((_req$headers = req === null || req === void 0 ? void 0 : req.headers) !== null && _req$headers !== void 0 ? _req$headers : {})),
    method: (_req$method = req === null || req === void 0 ? void 0 : req.method) !== null && _req$method !== void 0 ? _req$method : `GET`,
    url: (_req$url = req === null || req === void 0 ? void 0 : req.url) !== null && _req$url !== void 0 ? _req$url : `"req" most likely wasn't passed in`,
    query: (_req$query = req === null || req === void 0 ? void 0 : req.query) !== null && _req$query !== void 0 ? _req$query : {},
    pageContext: page.context,
    params: {
      ...params,
      ...fsRouteParams
    }
  };
  return mod.getServerData(getServerDataArg);
}
//# sourceMappingURL=get-server-data.js.map