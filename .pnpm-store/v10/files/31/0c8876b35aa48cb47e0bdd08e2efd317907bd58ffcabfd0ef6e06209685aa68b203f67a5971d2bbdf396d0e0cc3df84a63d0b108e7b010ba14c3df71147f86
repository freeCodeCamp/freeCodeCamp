"use strict";

exports.__esModule = true;
exports.default = void 0;

var _memoize2 = _interopRequireDefault(require("lodash/memoize"));

var _helperModuleImports = require("@babel/helper-module-imports");

var _mapping = _interopRequireDefault(require("./mapping"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*----------------------------------------------------------------------------*/
function resolvePath(pkgStore, name, path) {
  var base = pkgStore.base,
      id = pkgStore.id;
  var lower = name.toLowerCase();

  var module = _mapping.default.modules.get(id);

  if (!module.get(base).has(lower)) {
    base = base ? '' : module.findKey(function (map) {
      return map.has(lower);
    });

    if (!base) {
      throw path.buildCodeFrameError([`The '${id}' method \`${name}\` is not a known module.`, 'Please report bugs to https://github.com/lodash/babel-plugin-lodash/issues.'].join('\n'));
    }
  }

  return id + '/' + (base ? base + '/' : '') + module.get(base).get(lower);
}

function importModule(pkgStore, name, path) {
  return (0, _helperModuleImports.addDefault)(path, resolvePath(pkgStore, name, path), {
    nameHint: name
  });
}

var _default = (0, _memoize2.default)(importModule, function (pkgStore, name) {
  return (pkgStore.path + '/' + name).toLowerCase();
});

exports.default = _default;
module.exports = exports["default"];