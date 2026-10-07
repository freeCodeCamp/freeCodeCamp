"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stat = exports.readFile = void 0;
function _fs() {
  const data = require("fs");
  _fs = function () {
    return data;
  };
  return data;
}
function _gensync() {
  const data = require("gensync");
  _gensync = function () {
    return data;
  };
  return data;
}
const readFile = exports.readFile = _gensync()({
  sync: _fs().readFileSync,
  errback: _fs().readFile
});
const stat = exports.stat = _gensync()({
  sync: _fs().statSync,
  errback: _fs().stat
});
0 && 0;

//# sourceMappingURL=fs.js.map
