"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getRequestHeadersForUrl = getRequestHeadersForUrl;
var _url = _interopRequireDefault(require("url"));
let loggedWarning = false;
function getRequestHeadersForUrl(passedUrl, store) {
  const storeIsMissing = !store || !(`getState` in store);
  if (storeIsMissing && !loggedWarning) {
    loggedWarning = true;
    console.warn(`Gatsby's redux store is required in the "addRemoteFilePolyfillInterface" and "polyfillImageServiceDevRoutes" API's for image CDN. No store was found when requesting url "${passedUrl}". This will fail your build in Gatsby V5. Upgrade your source plugins and Gatsby packages to the latest versions to resolve this. If you are a source plugin author visit https://gatsby.dev/source-plugins-image-cdn to learn how to make this warning go away.`);
  }
  if (storeIsMissing) {
    return undefined;
  }
  const baseDomain = _url.default.parse(passedUrl).hostname;
  const {
    requestHeaders
  } = store.getState();
  return baseDomain ? requestHeaders === null || requestHeaders === void 0 ? void 0 : requestHeaders.get(baseDomain) : undefined;
}