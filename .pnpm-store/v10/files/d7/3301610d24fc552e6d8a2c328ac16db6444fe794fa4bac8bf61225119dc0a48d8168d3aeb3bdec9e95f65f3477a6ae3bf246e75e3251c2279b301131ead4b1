"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getLmdb = getLmdb;
var _path = _interopRequireDefault(require("path"));
var _importFrom = _interopRequireDefault(require("import-from"));
var _resolveFrom = _interopRequireDefault(require("resolve-from"));
function getLmdb() {
  // Try to use lmdb from gatsby if not we use our own version
  try {
    const gatsbyPkgRoot = _path.default.dirname((0, _resolveFrom.default)(process.cwd(), `gatsby/package.json`));
    return (0, _importFrom.default)(gatsbyPkgRoot, `lmdb`);
  } catch (err) {
    return require(`lmdb`);
  }
}