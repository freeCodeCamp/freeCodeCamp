"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.hasLocalEslint = void 0;
var _path = _interopRequireDefault(require("path"));
var _glob = _interopRequireDefault(require("glob"));
var _debug = _interopRequireDefault(require("debug"));
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
const log = (0, _debug.default)(`gatsby:webpack-eslint-config`);
const hasLocalEslint = directory => {
  try {
    log(`Attempting to load package.json for eslint config check`);
    const pkg = require(_path.default.resolve(directory, `package.json`));
    if (pkg.eslintConfig) {
      return true;
    }
  } catch (err) {
    _reporter.default.error(`There was a problem processing the package.json file`, err);
  }
  log(`Checking for eslint config file`);
  const eslintFiles = _glob.default.sync(`.eslintrc?(.js|.json|.yaml|.yml)`, {
    cwd: directory
  });
  if (eslintFiles.length) {
    return true;
  }
  return false;
};
exports.hasLocalEslint = hasLocalEslint;
//# sourceMappingURL=local-eslint-config-finder.js.map