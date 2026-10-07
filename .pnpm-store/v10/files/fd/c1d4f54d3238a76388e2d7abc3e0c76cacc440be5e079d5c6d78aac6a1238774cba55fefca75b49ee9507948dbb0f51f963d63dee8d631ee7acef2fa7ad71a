"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeOptions;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
function normalizeOptions(config) {
  const {
    filename,
    cwd,
    filenameRelative = typeof filename === "string" ? _path().relative(cwd, filename) : "unknown",
    sourceType = "module",
    inputSourceMap,
    sourceMaps = !!inputSourceMap,
    sourceRoot = config.options.moduleRoot,
    sourceFileName = _path().basename(filenameRelative),
    comments = true,
    compact = "auto"
  } = config.options;
  const opts = config.options;
  const options = Object.assign({}, opts, {
    parserOpts: Object.assign({
      sourceType: _path().extname(filenameRelative) === ".mjs" ? "module" : sourceType,
      sourceFileName: filename,
      plugins: []
    }, opts.parserOpts),
    generatorOpts: Object.assign({
      filename,
      auxiliaryCommentBefore: opts.auxiliaryCommentBefore,
      auxiliaryCommentAfter: opts.auxiliaryCommentAfter,
      retainLines: opts.retainLines,
      comments,
      shouldPrintComment: opts.shouldPrintComment,
      compact,
      minified: opts.minified,
      sourceMaps: !!sourceMaps,
      sourceRoot,
      sourceFileName
    }, opts.generatorOpts)
  });
  for (const plugins of config.passes) {
    for (const plugin of plugins) {
      if (plugin.manipulateOptions) {
        plugin.manipulateOptions(options, options.parserOpts);
      }
    }
  }
  return options;
}
0 && 0;

//# sourceMappingURL=normalize-opts.js.map
