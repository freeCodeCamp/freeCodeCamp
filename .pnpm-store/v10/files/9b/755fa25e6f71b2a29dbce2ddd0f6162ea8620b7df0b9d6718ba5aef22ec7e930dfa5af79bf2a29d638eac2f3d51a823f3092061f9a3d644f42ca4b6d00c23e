"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getCache = getCache;
var _importFrom = _interopRequireDefault(require("import-from"));
function getCache() {
  var _global$__GATSBY$root, _global$__GATSBY;
  if (global._polyfillRemoteFileCache) {
    return global._polyfillRemoteFileCache;
  }
  // We need to use import-from to remove circular dependency
  const {
    getCache: getGatsbyCache
  } = (0, _importFrom.default)((_global$__GATSBY$root = (_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) !== null && _global$__GATSBY$root !== void 0 ? _global$__GATSBY$root : process.cwd(), `gatsby/dist/utils/get-cache`);
  const cache = getGatsbyCache(`gatsby`);
  global._polyfillRemoteFileCache = cache;
  return cache;
}