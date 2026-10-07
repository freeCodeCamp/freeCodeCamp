"use strict";

exports.__esModule = true;
exports.getRoutePathFromFunction = getRoutePathFromFunction;
exports.getRoutePathFromPage = getRoutePathFromPage;
function maybeDropNamedPartOfWildcard(path) {
  if (!path) {
    return path;
  }

  // Replaces `/foo/*bar` with `/foo/*`
  return path.replace(/\*.+$/, `*`);
}
function getRoutePathFromPage(page) {
  var _maybeDropNamedPartOf;
  return (_maybeDropNamedPartOf = maybeDropNamedPartOfWildcard(page.matchPath)) !== null && _maybeDropNamedPartOf !== void 0 ? _maybeDropNamedPartOf : page.path;
}
function getRoutePathFromFunction(functionInfo) {
  var _maybeDropNamedPartOf2;
  return (_maybeDropNamedPartOf2 = maybeDropNamedPartOfWildcard(functionInfo.matchPath)) !== null && _maybeDropNamedPartOf2 !== void 0 ? _maybeDropNamedPartOf2 : functionInfo.functionRoute;
}
//# sourceMappingURL=get-route-path.js.map