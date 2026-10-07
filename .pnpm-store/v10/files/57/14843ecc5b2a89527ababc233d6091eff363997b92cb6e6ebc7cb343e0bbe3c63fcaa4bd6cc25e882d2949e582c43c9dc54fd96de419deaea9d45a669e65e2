"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readFile = readFile;
exports.readFileSync = readFileSync;
var _json = _interopRequireDefault(require("./formats/json5.js"));
var _jsonc = require("./formats/jsonc.js");
var _yaml = _interopRequireDefault(require("./formats/yaml.js"));
var _extname = _interopRequireDefault(require("./extname.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var isDeno = typeof Deno !== 'undefined';
var isBun = typeof Bun !== 'undefined';
var YAML = typeof _yaml.default !== 'undefined' && _yaml.default.load ? _yaml.default : undefined;
var fs = !isDeno ? require('node:fs') : undefined;
var evalAlias = eval;
var readFileInNodeSync = function readFileInNodeSync(filename) {
  var data = fs.readFileSync(filename, 'utf8');
  var stat;
  try {
    stat = fs.statSync(filename);
  } catch (e) {}
  return {
    data: data,
    stat: stat
  };
};
var readFileInNode = function readFileInNode(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err) return reject(err);
      fs.stat(filename, function (err, stat) {
        if (err) return resolve({
          data: data
        });
        return resolve({
          data: data,
          stat: stat
        });
      });
    });
  });
};
var readFileInDenoSync = function readFileInDenoSync(filename) {
  var decoder = new TextDecoder('utf-8');
  var d = Deno.readFileSync(filename);
  var data = decoder.decode(d);
  var stat;
  try {
    stat = Deno.statSync(filename);
  } catch (e) {}
  return {
    data: data,
    stat: stat
  };
};
var readFileInDeno = function readFileInDeno(filename) {
  return new Promise(function (resolve, reject) {
    var decoder = new TextDecoder('utf-8');
    Deno.readFile(filename).then(function (d) {
      var data = decoder.decode(d);
      Deno.stat(filename).then(function (stat) {
        return resolve({
          data: data,
          stat: stat
        });
      }).catch(function () {
        return resolve({
          data: data
        });
      });
    }).catch(reject);
  });
};
var readFileInBunSync = readFileInNodeSync;
var readFileInBun = readFileInNode;
var replaceLast = function replaceLast(str, find, replace) {
  var index = str.lastIndexOf(find);
  if (index > -1) {
    return str.substring(0, index) + replace + str.substring(index + find.length);
  }
  return str.toString();
};
var parseData = function parseData(extension, data, options) {
  data = data.replace(/^\uFEFF/, '');
  var result = {};
  switch (extension) {
    case '.js':
    case '.ts':
      if (typeof module === 'undefined') {
        if (data.indexOf('exports') > -1) {
          data = "(".concat(replaceLast(data.substring(data.indexOf('=') + 1), '};', ''), ")");
        } else if (data.indexOf('export default ') > -1) {
          data = "(".concat(replaceLast(data.substring(data.indexOf('export default ') + 15), '};', ''), ")");
        }
      }
      result = evalAlias(data);
      break;
    case '.json5':
      result = _json.default.parse(data);
      break;
    case '.jsonc':
      result = (0, _jsonc.parse)(data);
      break;
    case '.yml':
    case '.yaml':
      result = YAML.load(data);
      break;
    default:
      result = options.parse(data);
  }
  return result;
};
function readFileSync(filename, options) {
  var ext = (0, _extname.default)(filename);
  var data, stat;
  if (isBun) {
    var ret = readFileInBunSync(filename);
    data = ret.data;
    stat = ret.stat;
  } else if (isDeno) {
    var _ret = readFileInDenoSync(filename);
    data = _ret.data;
    stat = _ret.stat;
  } else {
    var _ret2 = readFileInNodeSync(filename);
    data = _ret2.data;
    stat = _ret2.stat;
  }
  return {
    data: parseData(ext, data, options),
    stat: stat
  };
}
function readFile(filename) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    parse: JSON.parse
  };
  var ext = (0, _extname.default)(filename);
  var fn = isBun ? readFileInBun : isDeno ? readFileInDeno : readFileInNode;
  return new Promise(function (resolve, reject) {
    fn(filename).then(function (_ref) {
      var data = _ref.data,
        stat = _ref.stat;
      try {
        var ret = parseData(ext, data, options);
        resolve({
          data: ret,
          stat: stat
        });
      } catch (err) {
        err.message = 'error parsing ' + filename + ': ' + err.message;
        reject(err);
      }
    }).catch(reject);
  });
}