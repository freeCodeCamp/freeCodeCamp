"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFile = removeFile;
exports.removeFileSync = removeFileSync;
exports.writeFile = writeFile;
exports.writeFileSync = writeFileSync;
var _json = _interopRequireDefault(require("./formats/json5.js"));
var _yaml = _interopRequireDefault(require("./formats/yaml.js"));
var _extname = _interopRequireDefault(require("./extname.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var isDeno = typeof Deno !== 'undefined';
var isBun = typeof Bun !== 'undefined';
var YAML = typeof _yaml.default !== 'undefined' && _yaml.default.load ? _yaml.default : undefined;
var fs = !isDeno ? require('node:fs') : undefined;
function dirname(path) {
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) return '//';
  return path.slice(0, end);
}
var writeFileInNodeSync = function writeFileInNodeSync(filename, payload) {
  try {
    fs.mkdirSync(dirname(filename), {
      recursive: true
    });
  } catch (err) {}
  return fs.writeFileSync(filename, payload, 'utf8');
};
var writeFileInNode = function writeFileInNode(filename, payload) {
  return new Promise(function (resolve, reject) {
    fs.mkdir(dirname(filename), {
      recursive: true
    }, function () {
      fs.writeFile(filename, payload, 'utf8', function (err, data) {
        return err ? reject(err) : resolve(data);
      });
    });
  });
};
var removeFileInNodeSync = function removeFileInNodeSync(filename) {
  return fs.unlinkSync(filename);
};
var removeFileInNode = function removeFileInNode(filename) {
  return new Promise(function (resolve, reject) {
    return fs.unlink(filename, function (err) {
      return err ? reject(err) : resolve();
    });
  });
};
var writeFileInDenoSync = function writeFileInDenoSync(filename, payload) {
  var encoder = new TextEncoder();
  var data = encoder.encode(payload);
  try {
    Deno.mkdirSync(dirname(filename), {
      recursive: true
    });
  } catch (err) {}
  Deno.writeFileSync(filename, data);
};
var writeFileInDeno = function writeFileInDeno(filename, payload) {
  var encoder = new TextEncoder();
  var data = encoder.encode(payload);
  return new Promise(function (resolve, reject) {
    Deno.mkdir(dirname(filename), {
      recursive: true
    }).then(function () {
      Deno.writeFile(filename, data).then(resolve, reject);
    }).catch(function () {
      Deno.writeFile(filename, data).then(resolve, reject);
    });
  });
};
var removeFileInDenoSync = function removeFileInDenoSync(filename) {
  Deno.removeSync(filename);
};
var removeFileInDeno = function removeFileInDeno(filename) {
  return Deno.remove(filename);
};
var writeFileInBunSync = writeFileInNodeSync;
var writeFileInBun = writeFileInNode;
var removeFileInBunSync = removeFileInNodeSync;
var removeFileInBun = removeFileInNode;
var stringifyData = function stringifyData(extension, data, options) {
  var result = '';
  switch (extension) {
    case '.js':
    case '.ts':
      if (typeof module === 'undefined') {
        result = "export default ".concat(options.stringify(data, null, options.ident));
      } else {
        result = "module.exports = ".concat(options.stringify(data, null, options.ident));
      }
      break;
    case '.json5':
      result = _json.default.stringify(data, null, options.ident);
      break;
    case '.yml':
    case '.yaml':
      result = YAML.dump(data, {
        ident: options.indent
      });
      break;
    default:
      result = options.stringify(data, null, options.ident);
  }
  return result;
};
function writeFileSync(filename, payload, options) {
  var ext = (0, _extname.default)(filename);
  var data;
  try {
    data = stringifyData(ext, payload, options);
  } catch (err) {
    err.message = 'error stringifying ' + filename + ': ' + err.message;
    throw err;
  }
  if (isBun) {
    return writeFileInBunSync(filename, data);
  } else if (isDeno) {
    return writeFileInDenoSync(filename, data);
  } else {
    return writeFileInNodeSync(filename, data);
  }
}
function writeFile(filename, payload) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    stringify: JSON.stringify,
    ident: 2
  };
  var ext = (0, _extname.default)(filename);
  var data;
  try {
    data = stringifyData(ext, payload, options);
  } catch (err) {
    err.message = 'error stringifying ' + filename + ': ' + err.message;
    throw err;
  }
  var fn = isBun ? writeFileInBun : isDeno ? writeFileInDeno : writeFileInNode;
  return fn(filename, data);
}
function removeFileSync(filename) {
  if (isBun) {
    return removeFileInBunSync(filename);
  } else if (isDeno) {
    return removeFileInDenoSync(filename);
  } else {
    return removeFileInNodeSync(filename);
  }
}
function removeFile(filename) {
  var fn = isBun ? removeFileInBun : isDeno ? removeFileInDeno : removeFileInNode;
  return fn(filename);
}