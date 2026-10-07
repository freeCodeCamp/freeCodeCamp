"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.build = build;
exports.watch = watch;
var _webpack = _interopRequireDefault(require("webpack"));
function build(webpackConfig) {
  const compiler = (0, _webpack.default)(webpackConfig);
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      // stats can only be empty when an error occurs. Adding it to the if makes typescript happy.
      if (err || !stats) {
        return compiler.close(() => {
          reject(err);
        });
      }
      if (stats.hasErrors()) {
        return compiler.close(() => {
          reject(stats.compilation.errors);
        });
      }
      return resolve({
        stats,
        close: () => new Promise((resolve, reject) => compiler.close(err => err ? reject(err) : resolve()))
      });
    });
  });
}
function watch(webpackConfig, onWatch, watchOptions = {}) {
  const compiler = (0, _webpack.default)(webpackConfig);
  const watcher = compiler.watch(watchOptions, (err, stats) => {
    // this runs multiple times
    onWatch(err, stats);
  });
  return {
    watcher,
    close: () => new Promise((resolve, reject) => watcher.close(err => err ? reject(err) : resolve()))
  };
}
//# sourceMappingURL=bundle.js.map