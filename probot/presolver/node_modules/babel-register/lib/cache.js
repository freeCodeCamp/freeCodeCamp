"use strict";

exports.__esModule = true;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.save = save;
exports.load = load;
exports.get = get;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require("mkdirp");

var _homeOrTmp = require("home-or-tmp");

var _homeOrTmp2 = _interopRequireDefault(_homeOrTmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FILENAME = process.env.BABEL_CACHE_PATH || _path2.default.join(_homeOrTmp2.default, ".babel.json");
var data = {};

function save() {
  var serialised = "{}";

  try {
    serialised = (0, _stringify2.default)(data, null, "  ");
  } catch (err) {

    if (err.message === "Invalid string length") {
      err.message = "Cache too large so it's been cleared.";
      console.error(err.stack);
    } else {
      throw err;
    }
  }

  (0, _mkdirp.sync)(_path2.default.dirname(FILENAME));
  _fs2.default.writeFileSync(FILENAME, serialised);
}

function load() {
  if (process.env.BABEL_DISABLE_CACHE) return;

  process.on("exit", save);
  process.nextTick(save);

  if (!_fs2.default.existsSync(FILENAME)) return;

  try {
    data = JSON.parse(_fs2.default.readFileSync(FILENAME));
  } catch (err) {
    return;
  }
}

function get() {
  return data;
}