"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = patchRequire;
var path = _interopRequireWildcard(require("path"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var isWin32 = process.platform === 'win32';
var correctPath = isWin32 ? require('./correctPath').correctPath : function (p) {
  return p;
};
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}
function patchRequire(vol) {
  var unixifyPaths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var Module = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : require('module');
  if (isWin32 && unixifyPaths) {
    var original = vol;
    vol = {
      readFileSync: function readFileSync(path, options) {
        return original.readFileSync(correctPath(path), options);
      },
      realpathSync: function realpathSync(path) {
        return original.realpathSync(correctPath(path));
      },
      statSync: function statSync(path) {
        return original.statSync(correctPath(path));
      }
    };
  }
  function internalModuleReadFile(path) {
    try {
      return vol.readFileSync(path, 'utf8');
    } catch (err) {}
  }
  function internalModuleStat(filename) {
    try {
      return vol.statSync(filename).isDirectory() ? 1 : 0;
    } catch (err) {
      return -2;
    }
  }
  function stat(filename) {
    filename = path._makeLong(filename);
    var cache = stat.cache;
    if (cache !== null) {
      var _result = cache.get(filename);
      if (_result !== undefined) return _result;
    }
    var result = internalModuleStat(filename);
    if (cache !== null) cache.set(filename, result);
    return result;
  }
  stat.cache = null;
  var preserveSymlinks = false;
  function toRealPath(requestPath) {
    return vol.realpathSync(requestPath);
  }
  var packageMainCache = Object.create(null);
  function readPackage(requestPath) {
    var entry = packageMainCache[requestPath];
    if (entry) return entry;
    var jsonPath = path.resolve(requestPath, 'package.json');
    var json = internalModuleReadFile(path._makeLong(jsonPath));
    if (json === undefined) {
      return false;
    }
    var pkg;
    try {
      var pkgJson = JSON.parse(json);
      pkg = packageMainCache[requestPath] = pkgJson.exports && pkgJson.exports.require || pkgJson.main;
    } catch (e) {
      e.path = jsonPath;
      e.message = 'Error parsing ' + jsonPath + ': ' + e.message;
      throw e;
    }
    return pkg;
  }
  function tryFile(requestPath, isMain) {
    var rc = stat(requestPath);
    if (preserveSymlinks && !isMain) {
      return rc === 0 && path.resolve(requestPath);
    }
    return rc === 0 && toRealPath(requestPath);
  }
  function tryExtensions(p, exts, isMain) {
    for (var i = 0; i < exts.length; i++) {
      var filename = tryFile(p + exts[i], isMain);
      if (filename) {
        return filename;
      }
    }
    return false;
  }
  function tryPackage(requestPath, exts, isMain) {
    var pkg = readPackage(requestPath);
    if (!pkg) return false;
    var filename = path.resolve(requestPath, pkg);
    return tryFile(filename, isMain) || tryExtensions(filename, exts, isMain) || tryExtensions(path.resolve(filename, 'index'), exts, isMain);
  }
  Module._extensions['.js'] = function (module, filename) {
    var content = vol.readFileSync(filename, 'utf8');
    module._compile(stripBOM(content), filename);
  };
  Module._extensions['.json'] = function (module, filename) {
    var content = vol.readFileSync(filename, 'utf8');
    try {
      module.exports = JSON.parse(stripBOM(content));
    } catch (err) {
      err.message = filename + ': ' + err.message;
      throw err;
    }
  };
  var warned = true;
  Module._findPath = function (request, paths, isMain) {
    if (path.isAbsolute(request)) {
      paths = [''];
    } else if (!paths || paths.length === 0) {
      return false;
    }
    var cacheKey = request + '\x00' + (paths.length === 1 ? paths[0] : paths.join('\x00'));
    var entry = Module._pathCache[cacheKey];
    if (entry) return entry;
    var exts;
    var trailingSlash = request.length > 0 && request.charCodeAt(request.length - 1) === 47;
    for (var i = 0; i < paths.length; i++) {
      var curPath = paths[i];
      if (curPath && stat(curPath) < 1) continue;
      var basePath = correctPath(path.resolve(curPath, request));
      var filename;
      var rc = stat(basePath);
      if (!trailingSlash) {
        if (rc === 0) {
          if (preserveSymlinks && !isMain) {
            filename = path.resolve(basePath);
          } else {
            filename = toRealPath(basePath);
          }
        } else if (rc === 1) {
          if (exts === undefined) exts = Object.keys(Module._extensions);
          filename = tryPackage(basePath, exts, isMain);
        }
        if (!filename) {
          if (exts === undefined) exts = Object.keys(Module._extensions);
          filename = tryExtensions(basePath, exts, isMain);
        }
      }
      if (!filename && rc === 1) {
        if (exts === undefined) exts = Object.keys(Module._extensions);
        filename = tryPackage(basePath, exts, isMain);
      }
      if (!filename && rc === 1) {
        if (exts === undefined) exts = Object.keys(Module._extensions);
        filename = tryExtensions(path.resolve(basePath, 'index'), exts, isMain);
      }
      if (filename) {
        if (request === '.' && i > 0) {
          if (!warned) {
            warned = true;
            process.emitWarning('warning: require(\'.\') resolved outside the package ' + 'directory. This functionality is deprecated and will be removed ' + 'soon.', 'DeprecationWarning', 'DEP0019');
          }
        }
        Module._pathCache[cacheKey] = filename;
        return filename;
      }
    }
    return false;
  };
}