"use strict";

exports.__esModule = true;
exports.default = config;

var _castArray2 = _interopRequireDefault(require("lodash/castArray"));

var _each2 = _interopRequireDefault(require("lodash/each"));

var _MapCache = _interopRequireDefault(require("./MapCache"));

var _ModuleCache = _interopRequireDefault(require("./ModuleCache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultIds = ['lodash', 'lodash-es', 'lodash-compat'];
var oldCwd;
var ids = [];
var modules = new _MapCache.default();
/*----------------------------------------------------------------------------*/

function config(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$cwd = _ref.cwd,
      cwd = _ref$cwd === void 0 ? process.cwd() : _ref$cwd,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? defaultIds : _ref$id;

  if (oldCwd !== cwd) {
    oldCwd = cwd;
    modules.clear();
  }

  (0, _each2.default)((0, _castArray2.default)(id), function (id) {
    if (!modules.get(id)) {
      var moduleRoot = _ModuleCache.default.resolve(id, cwd);

      if (moduleRoot) {
        ids.push(id);
        modules.set(id, new _ModuleCache.default(moduleRoot));
      }
    }
  });
  return {
    ids,
    modules
  };
}

module.exports = exports["default"];