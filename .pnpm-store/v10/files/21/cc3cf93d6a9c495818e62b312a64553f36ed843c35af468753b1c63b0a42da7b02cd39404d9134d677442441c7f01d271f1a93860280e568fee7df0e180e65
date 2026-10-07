"use strict";

exports.__esModule = true;
exports.default = _default;
function _default(source) {
  // all it does is adding BaseContext to list of exports
  return source.replace(/export\s+{([^}]+)}/m, (match, exportList) => {
    // return `export { ${exportList}, BaseContext }`

    if (/[,\s]BaseContext[,\s]/.test(exportList)) {
      // If BaseContext is already in export list - do nothing.
      // At the time of writing this, BaseContext is not exported,
      // but this can change in future version of @reach/router
      // and we don't want to export same thing multiple times
      // as this would cause parsing errors:
      // "Module parse failed: Duplicate export 'BaseContext'"
      return match;
    } else {
      return `export { ${exportList}, BaseContext }`;
    }
  });
}
//# sourceMappingURL=reach-router-add-basecontext-export-loader.js.map