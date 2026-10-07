"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromProjectPath = void 0;
exports.fromProjectPathRelative = fromProjectPathRelative;
exports.joinProjectPath = joinProjectPath;
exports.toProjectPath = void 0;
exports.toProjectPathUnsafe = toProjectPathUnsafe;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toProjectPath_(projectRoot, p) {
  if (p == null) {
    return p;
  } // If the file is outside the project root, store an absolute path rather
  // than a relative one. This way if the project root is moved, the file
  // references still work. Accessing files outside the project root is not
  // portable anyway.


  let relative = (0, _utils().relativePath)(projectRoot, p, false);

  if (relative.startsWith('..')) {
    return process.platform === 'win32' ? (0, _utils().normalizeSeparators)(p) : p;
  }

  return relative;
}

const toProjectPath = toProjectPath_;
exports.toProjectPath = toProjectPath;

function fromProjectPath_(projectRoot, p) {
  if (p == null) {
    return null;
  } // Project paths use normalized unix separators, so we only need to
  // convert them on Windows.


  let projectPath = process.platform === 'win32' ? _path().default.normalize(p) : p; // If the path is absolute (e.g. outside the project root), just return it.

  if (_path().default.isAbsolute(projectPath)) {
    return projectPath;
  } // Add separator if needed. Doing this manunally is much faster than path.join.


  if (projectRoot[projectRoot.length - 1] !== _path().default.sep) {
    return projectRoot + _path().default.sep + projectPath;
  }

  return projectRoot + projectPath;
}

const fromProjectPath = fromProjectPath_;
/**
 * Returns a path relative to the project root. This should be used when computing cache keys
 */

exports.fromProjectPath = fromProjectPath;

function fromProjectPathRelative(p) {
  return p;
}
/**
 * This function should be avoided, it doesn't change the actual value.
 */


function toProjectPathUnsafe(p) {
  return p;
}
/**
 * Joins a project root with relative paths (similar to `path.join`)
 */


function joinProjectPath(a, ...b) {
  return _path().default.posix.join(a, ...b);
}