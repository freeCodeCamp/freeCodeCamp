"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tsRewriteRelativeImportExtensions;
function tsRewriteRelativeImportExtensions(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}

//# sourceMappingURL=tsRewriteRelativeImportExtensions.js.map
