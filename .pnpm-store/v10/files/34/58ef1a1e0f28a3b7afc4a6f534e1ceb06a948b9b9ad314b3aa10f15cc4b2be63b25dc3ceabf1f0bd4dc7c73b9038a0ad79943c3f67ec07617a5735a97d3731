"use strict";

exports.__esModule = true;
exports.generatePublicUrlFieldConfig = generatePublicUrlFieldConfig;
exports.publicUrlResolver = publicUrlResolver;
var _urlGenerator = require("../utils/url-generator");
var _dispatchers = require("../jobs/dispatchers");
function publicUrlResolver(source, actions, store) {
  if ((0, _dispatchers.shouldDispatchLocalFileServiceJob)()) {
    (0, _dispatchers.dispatchLocalFileServiceJob)({
      url: source.url,
      mimeType: source.mimeType,
      filename: source.filename,
      contentDigest: source.internal.contentDigest
    }, actions, store);
  }
  return (0, _urlGenerator.generateFileUrl)({
    url: source.url,
    mimeType: source.mimeType,
    filename: source.filename,
    internal: {
      contentDigest: source.internal.contentDigest
    }
  }, store);
}
function generatePublicUrlFieldConfig(actions, store) {
  return {
    type: `String!`,
    resolve(source) {
      return publicUrlResolver(source, actions, store);
    }
  };
}