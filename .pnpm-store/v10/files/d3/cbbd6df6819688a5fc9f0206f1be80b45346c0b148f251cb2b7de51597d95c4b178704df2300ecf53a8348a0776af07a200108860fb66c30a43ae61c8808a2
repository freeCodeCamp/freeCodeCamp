"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.withTrailingSlash = exports.withBasePath = exports.truncatePath = exports.tooLongSegmentsInPath = exports.getCommonDir = void 0;
var _path = _interopRequireDefault(require("path"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
const withBasePath = basePath => (...paths) => (0, _gatsbyCoreUtils.joinPath)(basePath, ...paths);
exports.withBasePath = withBasePath;
const withTrailingSlash = basePath => `${basePath}/`;
exports.withTrailingSlash = withTrailingSlash;
const posixJoinWithLeadingSlash = paths => _path.default.posix.join(...paths.map((segment, index) => segment === `` && index === 0 ? `/` : segment));
const getCommonDir = (path1, path2) => {
  const path1Segments = path1.split(/[/\\]/);
  const path2Segments = path2.split(/[/\\]/);
  for (let i = 0; i < path1Segments.length; i++) {
    if (i >= path2Segments.length) {
      return posixJoinWithLeadingSlash(path2Segments);
    } else if (path1Segments[i].toLowerCase() !== path2Segments[i].toLowerCase()) {
      const joined = path1Segments.slice(0, i);
      return posixJoinWithLeadingSlash(joined);
    }
  }
  return posixJoinWithLeadingSlash(path1Segments);
};

// MacOS (APFS) and Windows (NTFS) filename length limit = 255 chars, Others = 255 bytes
exports.getCommonDir = getCommonDir;
const MAX_PATH_SEGMENT_CHARS = 255;
const MAX_PATH_SEGMENT_BYTES = 255;
const SLICING_INDEX = 50;
const pathSegmentRe = /[^/]+/g;
const isMacOs = process.platform === `darwin`;
const isWindows = process.platform === `win32`;
const isNameTooLong = segment => isMacOs || isWindows ? segment.length > MAX_PATH_SEGMENT_CHARS // MacOS (APFS) and Windows (NTFS) filename length limit (255 chars)
: Buffer.from(segment).length > MAX_PATH_SEGMENT_BYTES; // Other (255 bytes)

const tooLongSegmentsInPath = path => {
  const invalidFilenames = [];
  for (const segment of path.split(`/`)) {
    if (isNameTooLong(segment)) {
      invalidFilenames.push(segment);
    }
  }
  return invalidFilenames;
};
exports.tooLongSegmentsInPath = tooLongSegmentsInPath;
const truncatePath = path => path.replace(pathSegmentRe, match => {
  if (isNameTooLong(match)) {
    return match.slice(0, SLICING_INDEX) + (0, _gatsbyCoreUtils.createContentDigest)(match.slice(SLICING_INDEX));
  }
  return match;
});
exports.truncatePath = truncatePath;
//# sourceMappingURL=path.js.map