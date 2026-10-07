"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.generateHtmlPath = generateHtmlPath;
exports.remove = remove;
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
const checkForHtmlSuffix = pagePath => !/\.(html?)$/i.test(pagePath);
function generateHtmlPath(dir, outputPath) {
  let outputFileName = outputPath.replace(/^(\/|\\)/, ``); //  Remove leading slashes for webpack-dev-server

  if (checkForHtmlSuffix(outputPath)) {
    outputFileName = _path.default.join(outputFileName, `index.html`);
  }
  return _path.default.join(dir, outputFileName);
}
async function remove({
  publicDir
}, pagePath) {
  const filePath = generateHtmlPath(publicDir, pagePath);
  if (_fsExtra.default.existsSync(filePath)) {
    return await _fsExtra.default.remove(filePath);
  }
  return Promise.resolve();
}