"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.maybeGetBrowserRedirect = maybeGetBrowserRedirect;
var _redirects = _interopRequireDefault(require("./redirects.json"));
// Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects.default.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);
  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }
  return redirect;
}
//# sourceMappingURL=redirect-utils.js.map