"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.isFile = void 0;
var _path = _interopRequireDefault(require("path"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _mime = _interopRequireDefault(require("mime"));
var _isRelative = _interopRequireDefault(require("is-relative"));
var _isRelativeUrl = _interopRequireDefault(require("is-relative-url"));
var _getValueAt = require("../../utils/get-value-at");
var _datastore = require("../../datastore");
const getFirstValueAt = (node, selector) => {
  let value = (0, _getValueAt.getValueAt)(node, selector);
  while (Array.isArray(value)) {
    value = value[0];
  }
  return value;
};
const withBaseDir = dir => p => _path.default.posix.join(dir, (0, _gatsbyCoreUtils.slash)(p));
const findAncestorNode = (childNode, predicate) => {
  let node = childNode;
  do {
    if (predicate(node)) {
      return node;
    }
    node = (0, _datastore.getNode)(node.parent);
  } while (node !== undefined);
  return null;
};
const getBaseDir = node => {
  if (node) {
    const {
      dir
    } = findAncestorNode(node, node => node.internal.type === `File`) || {
      dir: ``
    };
    return typeof dir === `string` ? dir : null;
  }
  return null;
};
const getAbsolutePath = (node, relativePath) => {
  const dir = getBaseDir(node);
  const withDir = withBaseDir(dir !== null && dir !== void 0 ? dir : ``);
  return dir ? Array.isArray(relativePath) ? relativePath.map(withDir) : withDir(relativePath) : null;
};
const getFilePath = (fieldPath, relativePath) => {
  const [typeName, ...selector] = Array.isArray(fieldPath) ? fieldPath : fieldPath.split(`.`);
  if (typeName === `File`) return null;
  const looksLikeFile = !_path.default.isAbsolute(relativePath) && _mime.default.getType(relativePath) !== null &&
  // FIXME: Do we need all of this?
  _mime.default.getType(relativePath) !== `application/x-msdownload` && (0, _isRelative.default)(relativePath) && (0, _isRelativeUrl.default)(relativePath);
  if (!looksLikeFile) return null;
  const normalizedPath = (0, _gatsbyCoreUtils.slash)(relativePath);
  const node = (0, _datastore.getNodesByType)(typeName).find(node => getFirstValueAt(node, selector) === normalizedPath);
  return node ? getAbsolutePath(node, normalizedPath) : null;
};
const isFile = (fieldPath, relativePath) => {
  const filePath = getFilePath(fieldPath, relativePath);
  if (!filePath) return false;
  const filePathExists = (0, _datastore.getNodesByType)(`File`).some(node => node.absolutePath === filePath);
  return filePathExists;
};
exports.isFile = isFile;
//# sourceMappingURL=is-file.js.map