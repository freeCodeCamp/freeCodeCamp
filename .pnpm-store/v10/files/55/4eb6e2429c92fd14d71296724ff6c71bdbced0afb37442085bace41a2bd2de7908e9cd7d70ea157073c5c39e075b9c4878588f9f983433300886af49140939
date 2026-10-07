"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.fixedPagePath = fixedPagePath;
exports.generatePageDataPath = generatePageDataPath;
var _path = _interopRequireDefault(require("path"));
function fixedPagePath(pagePath) {
  return pagePath === `/` ? `index` : pagePath;
}
function generatePageDataPath(publicDir, pagePath) {
  return _path.default.join(publicDir, `page-data`, fixedPagePath(pagePath), `page-data.json`);
}