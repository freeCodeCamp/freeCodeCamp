"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createFileHash = createFileHash;
exports.createFilePath = createFilePath;
exports.getRemoteFileExtension = getRemoteFileExtension;
exports.getRemoteFileName = getRemoteFileName;
var _path = _interopRequireDefault(require("path"));
var _crypto = _interopRequireDefault(require("crypto"));
var _url = _interopRequireDefault(require("url"));
/**
 * getParsedPath
 * --
 * Parses remote url to a path object
 *
 */
function getParsedPath(url) {
  return _path.default.parse(_url.default.parse(url).pathname || ``);
}

/**
 * getRemoteFileExtension
 * --
 * Parses remote url to retrieve remote file extension
 *
 */
function getRemoteFileExtension(url) {
  return getParsedPath(url).ext;
}

/**
 * getRemoteFileName
 * --
 * Parses remote url to retrieve remote file name
 *
 */
function getRemoteFileName(url) {
  return decodeURIComponent(getParsedPath(url).name);
}
function createFileHash(input, length = 8) {
  return _crypto.default.createHash(`sha1`).update(input).digest(`hex`).substring(0, length);
}
const filenamePurgeRegex = /:|\/|\*|\?|"|<|>|\||\\/g;

/**
 * createFilePath
 * --
 * Gets full file path while replacing forbidden characters with a `-`
 */
function createFilePath(directory, filename, ext) {
  directory = decodeURIComponent(directory);
  filename = decodeURIComponent(filename);
  const purgedFileName = filename.replace(filenamePurgeRegex, `-`);
  const shouldAddHash = purgedFileName !== filename;
  if (shouldAddHash) {
    return _path.default.join(directory, `${purgedFileName}-${createFileHash(filename)}${ext}`);
  } else {
    return _path.default.join(directory, `${filename}${ext}`);
  }
}