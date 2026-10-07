function tsRewriteRelativeImportExtensions(t, e) {
  return "string" == typeof t && /^\.\.?\//.test(t) ? t.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+)?)\.([cm]?)ts$/i, function (t, s, r, n, o) {
    return s ? e ? ".jsx" : ".js" : !r || n && o ? r + n + "." + o.toLowerCase() + "js" : t;
  }) : t;
}
module.exports = tsRewriteRelativeImportExtensions, module.exports.__esModule = true, module.exports["default"] = module.exports;