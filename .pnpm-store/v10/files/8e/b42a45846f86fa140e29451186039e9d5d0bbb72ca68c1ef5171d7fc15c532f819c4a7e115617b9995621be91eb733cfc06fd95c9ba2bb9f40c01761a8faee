"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.WebpackLoggingPlugin = void 0;
var _webpack = require("webpack");
var _resolveFrom = _interopRequireDefault(require("resolve-from"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
class WebpackLoggingPlugin {
  PLUGIN_NAME = `WebpackLogging`;
  isVerbose = false;
  constructor(rootDir, reporter, isVerbose = false) {
    this.rootDir = rootDir;
    this.reporter = reporter;
    this.isVerbose = isVerbose;
  }
  apply(compiler) {
    compiler.options.infrastructureLogging = {
      level: `verbose`,
      debug: /FileSystemInfo/
    };
    compiler.options.profile = true;
    new _webpack.ProgressPlugin({
      profile: true
    }).apply(compiler);

    // if webpack bundle analyzer is installed lets use it
    const webpackBundleAnalyzerPath = _resolveFrom.default.silent(this.rootDir, `webpack-bundle-analyzer`);
    if (webpackBundleAnalyzerPath) {
      compiler.hooks.beforeRun.tapPromise(this.PLUGIN_NAME, () => Promise.resolve(`${webpackBundleAnalyzerPath}`).then(s => _interopRequireWildcard(require(s))).then(({
        BundleAnalyzerPlugin
      }) => {
        new BundleAnalyzerPlugin({
          analyzerMode: `static`,
          openAnalyzer: false,
          title: compiler.name,
          reportFilename: `report.html`
        }).apply(compiler);
      }));
    }
    compiler.hooks.done.tap(this.PLUGIN_NAME, stats => {
      this.reporter.log(stats.toString({
        colors: true,
        logging: this.isVerbose ? `verbose` : `log`
      }));
    });
  }
}
exports.WebpackLoggingPlugin = WebpackLoggingPlugin;
//# sourceMappingURL=webpack-logging.js.map