"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.maybeAddFileProtocol = void 0;
exports.resolveJSFilepath = resolveJSFilepath;
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
/**
 * On Windows, the file protocol is required for the path to be resolved correctly.
 * On other platforms, the file protocol is not required, but supported, so we want to just always use it.
 * Except jest doesn't work with that and in that environment we never add the file protocol.
 */
const maybeAddFileProtocol = process.env.JEST_WORKER_ID ? module => module : module => (0, _url.pathToFileURL)(module).href;

/**
 * Figure out if the file path is .js or .mjs without relying on the fs module, and return the file path if it exists.
 */
exports.maybeAddFileProtocol = maybeAddFileProtocol;
async function resolveJSFilepath({
  rootDir,
  filePath,
  warn = true
}) {
  const filePathWithJSExtension = filePath.endsWith(`.js`) ? filePath : `${filePath}.js`;
  const filePathWithMJSExtension = filePath.endsWith(`.mjs`) ? filePath : `${filePath}.mjs`;

  // Check if both variants exist
  try {
    if (require.resolve(filePathWithJSExtension) && require.resolve(filePathWithMJSExtension)) {
      if (warn) {
        _reporter.default.warn(`The file '${_path.default.relative(rootDir, filePath)}' has both .js and .mjs variants, please use one or the other. Using .js by default.`);
      }
      return filePathWithJSExtension;
    }
  } catch (_) {
    // Do nothing
  }

  // Check if .js variant exists
  try {
    if (require.resolve(filePathWithJSExtension)) {
      return filePathWithJSExtension;
    }
  } catch (_) {
    // Do nothing
  }
  try {
    if (require.resolve(filePathWithMJSExtension)) {
      return filePathWithMJSExtension;
    }
  } catch (_) {
    // Do nothing
  }
  return ``;
}
//# sourceMappingURL=resolve-js-file-path.js.map