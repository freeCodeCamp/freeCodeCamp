"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDirectory = getDirectory;
exports.getDirectorySync = getDirectorySync;

var _path = _interopRequireDefault(require("path"));

var _pathType = require("path-type");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getDirectory(filepath) {
  const filePathIsDirectory = await (0, _pathType.isDirectory)(filepath);

  if (filePathIsDirectory === true) {
    return filepath;
  }

  const directory = _path.default.dirname(filepath);

  return directory;
}

function getDirectorySync(filepath) {
  const filePathIsDirectory = (0, _pathType.isDirectorySync)(filepath);

  if (filePathIsDirectory === true) {
    return filepath;
  }

  const directory = _path.default.dirname(filepath);

  return directory;
}
//# sourceMappingURL=getDirectory.js.map