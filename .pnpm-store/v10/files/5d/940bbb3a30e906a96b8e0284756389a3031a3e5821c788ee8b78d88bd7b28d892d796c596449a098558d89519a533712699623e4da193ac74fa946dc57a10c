"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createWebpackWatcher = void 0;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
const createWebpackWatcher = compiler => callback => {
  compiler.hooks.invalid.tap(`file invalidation`, file => {
    _reporter.default.verbose(`Webpack file changed: ${file}`);
    callback({
      type: `SOURCE_FILE_CHANGED`,
      file
    });
  });
};
exports.createWebpackWatcher = createWebpackWatcher;
//# sourceMappingURL=listen-to-webpack.js.map