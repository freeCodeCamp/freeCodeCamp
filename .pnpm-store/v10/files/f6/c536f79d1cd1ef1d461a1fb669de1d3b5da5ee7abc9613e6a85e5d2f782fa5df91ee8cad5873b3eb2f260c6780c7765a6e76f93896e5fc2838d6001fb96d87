"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getFileExtensionFromMimeType = getFileExtensionFromMimeType;
exports.getImageFormatFromMimeType = getImageFormatFromMimeType;
var _mime = _interopRequireDefault(require("mime"));
function getImageFormatFromMimeType(mimeType) {
  return mimeType.replace(`image/jpeg`, `image/jpg`).replace(`image/`, ``);
}
function getFileExtensionFromMimeType(mimeType) {
  var _mime$getExtension$re, _mime$getExtension;
  // convert jpeg to jpg and make up extension if we return null
  return (_mime$getExtension$re = (_mime$getExtension = _mime.default.getExtension(mimeType)) === null || _mime$getExtension === void 0 ? void 0 : _mime$getExtension.replace(`jpeg`, `jpg`)) !== null && _mime$getExtension$re !== void 0 ? _mime$getExtension$re : `gatsby`;
}