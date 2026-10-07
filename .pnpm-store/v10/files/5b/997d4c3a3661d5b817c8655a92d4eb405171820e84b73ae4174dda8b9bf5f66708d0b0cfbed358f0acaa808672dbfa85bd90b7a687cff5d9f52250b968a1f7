"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.urlResolve = urlResolve;
var _path = _interopRequireDefault(require("path"));
var _os = _interopRequireDefault(require("os"));
/**
 * Joins all given segments and converts using a forward slash (/) as a delimiter
 * @param segments A sequence of segments
 */
function urlResolve(...segments) {
  const joinedPath = _path.default.join(...segments);
  if (_os.default.platform() === `win32`) {
    return joinedPath.replace(/\\/g, `/`);
  }
  return joinedPath;
}