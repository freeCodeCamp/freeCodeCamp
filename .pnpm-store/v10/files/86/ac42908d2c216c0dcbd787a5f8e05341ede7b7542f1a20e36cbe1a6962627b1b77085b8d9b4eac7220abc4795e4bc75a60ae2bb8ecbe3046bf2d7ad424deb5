"use strict";

exports.__esModule = true;
exports.isFileInsideCompilations = isFileInsideCompilations;
exports.setFilesFromDevelopHtmlCompilation = setFilesFromDevelopHtmlCompilation;
var _webpack = require("webpack");
const filesInsideDevelopHtmlCompilation = new Set();
function removeQueryParams(path) {
  return path.split(`?`)[0];
}
function setFilesFromDevelopHtmlCompilation(developHtmlCompilation) {
  filesInsideDevelopHtmlCompilation.clear();
  for (const module of developHtmlCompilation.modules) {
    if (module instanceof _webpack.NormalModule && module.resource) {
      filesInsideDevelopHtmlCompilation.add(removeQueryParams(module.resource));
    }
  }
}

/**
 * Checks if a file is inside either `develop` or `develop-html` compilation. Used to determine if
 * we should generate codeframe for this file for error overlay.
 */
function isFileInsideCompilations(absolutePath, developBrowserCompilation) {
  if (filesInsideDevelopHtmlCompilation.has(absolutePath)) {
    return true;
  }
  for (const module of developBrowserCompilation.modules) {
    if (module instanceof _webpack.NormalModule && module.resource) {
      if (absolutePath === removeQueryParams(module.resource)) {
        return true;
      }
    }
  }
  return false;
}
//# sourceMappingURL=is-file-inside-compilations.js.map