"use strict";

exports.__esModule = true;
exports.isImage = isImage;
function isImage(node) {
  if (!node.mimeType) {
    throw new Error(`RemoteFileNode does not have a mimeType. The field is required.`);
  }
  return node.mimeType.startsWith(`image/`) && node.mimeType !== `image/svg+xml`;
}