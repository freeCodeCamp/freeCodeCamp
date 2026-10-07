"use strict";

exports.__esModule = true;
exports.getCollectionRouteParams = getCollectionRouteParams;
var _pathUtils = require("./path-utils");
// This extracts params from its filePath counerpart
// and returns an object of it's matches.
// e.g. /foo/{Product.id}, /foo/123 => {id: 123}
function getCollectionRouteParams(urlTemplate, urlPath) {
  const params = {};

  // Remove file extension first so that urlTemplate and urlPath have the same shape
  const cleanedUrlTemplate = (0, _pathUtils.removeFileExtension)(urlTemplate);
  const urlTemplateParts = cleanedUrlTemplate.split(`/`);
  // Create a regex string for later use by creating groups for all { } finds
  // e.g. /foo/prefix-{Product.id} => /foo/prefix-(.+)
  const templateRegex = cleanedUrlTemplate.replace(/\./g, `\\.`) // Escape dots
  .replace(/(\{.*?\})/g, `(.+)`).split(`/`);
  const urlParts = urlPath.split(`/`);
  urlTemplateParts.forEach((part, i) => {
    var _urlParts$i;
    if (!part.includes(`{`) || !part.includes(`}`)) {
      return;
    }
    // Use the previously created regex to match prefix-123 to prefix-(.+)
    const match = (_urlParts$i = urlParts[i]) === null || _urlParts$i === void 0 ? void 0 : _urlParts$i.match(templateRegex[i]);
    if (!match) {
      return;
    }
    const keys = (0, _pathUtils.extractFieldWithoutUnion)(part);
    keys.some((k, j) => {
      params[k] = match[j + 1];
      return !match;
    });
  });
  return params;
}