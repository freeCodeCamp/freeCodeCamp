"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.dispatchLocalFileServiceJob = dispatchLocalFileServiceJob;
exports.dispatchLocalImageServiceJob = dispatchLocalImageServiceJob;
exports.shouldDispatchLocalFileServiceJob = shouldDispatchLocalFileServiceJob;
exports.shouldDispatchLocalImageServiceJob = shouldDispatchLocalImageServiceJob;
var _path = _interopRequireDefault(require("path"));
var _getGatsbyVersion = require("../utils/get-gatsby-version");
var _urlGenerator = require("../utils/url-generator");
var _getRequestHeadersForUrl = require("../utils/get-request-headers-for-url");
function shouldDispatchLocalFileServiceJob() {
  var _global$__GATSBY;
  return !((_global$__GATSBY = global.__GATSBY) !== null && _global$__GATSBY !== void 0 && _global$__GATSBY.fileCDNUrlGeneratorModulePath || process.env.GATSBY_CLOUD_IMAGE_CDN === `1` || process.env.GATSBY_CLOUD_IMAGE_CDN === `true`) && process.env.NODE_ENV === `production`;
}
function shouldDispatchLocalImageServiceJob() {
  var _global$__GATSBY2;
  return !((_global$__GATSBY2 = global.__GATSBY) !== null && _global$__GATSBY2 !== void 0 && _global$__GATSBY2.imageCDNUrlGeneratorModulePath || process.env.GATSBY_CLOUD_IMAGE_CDN === `1` || process.env.GATSBY_CLOUD_IMAGE_CDN === `true`) && process.env.NODE_ENV === `production`;
}
function dispatchLocalFileServiceJob({
  url,
  filename,
  mimeType,
  contentDigest
}, actions, store) {
  var _publicUrl$pop, _publicUrl$pop$split, _global$__GATSBY3;
  const GATSBY_VERSION = (0, _getGatsbyVersion.getGatsbyVersion)();
  const publicUrl = (0, _urlGenerator.generateFileUrl)({
    url,
    mimeType,
    filename,
    internal: {
      contentDigest
    }
  }, store).split(`/`);
  publicUrl.unshift(`public`);
  // get filename and remove querystring
  const outputFilename = decodeURI((_publicUrl$pop = publicUrl.pop()) === null || _publicUrl$pop === void 0 ? void 0 : (_publicUrl$pop$split = _publicUrl$pop.split(`?`)) === null || _publicUrl$pop$split === void 0 ? void 0 : _publicUrl$pop$split[0]);
  const httpHeaders = (0, _getRequestHeadersForUrl.getRequestHeadersForUrl)(url, store);
  actions.createJobV2({
    name: `FILE_CDN`,
    inputPaths: [],
    // we know it's an image so we just mimic an image
    outputDir: _path.default.join(((_global$__GATSBY3 = global.__GATSBY) === null || _global$__GATSBY3 === void 0 ? void 0 : _global$__GATSBY3.root) || process.cwd(), ...publicUrl.filter(Boolean)),
    args: {
      url,
      filename: outputFilename,
      contentDigest,
      httpHeaders
    }
  }, {
    name: `gatsby`,
    // @ts-ignore - version is allowed
    version: GATSBY_VERSION,
    resolve: __dirname
  });
}
function dispatchLocalImageServiceJob({
  url,
  filename,
  mimeType,
  contentDigest
}, imageArgs, actions, store) {
  var _publicUrl$pop2, _publicUrl$pop2$split, _global$__GATSBY4;
  const GATSBY_VERSION = (0, _getGatsbyVersion.getGatsbyVersion)();
  const publicUrl = (0, _urlGenerator.generateImageUrl)({
    url,
    mimeType,
    filename,
    internal: {
      contentDigest
    }
  }, imageArgs, store).split(`/`);
  publicUrl.unshift(`public`);
  // get filename and remove querystring
  const outputFilename = decodeURI((_publicUrl$pop2 = publicUrl.pop()) === null || _publicUrl$pop2 === void 0 ? void 0 : (_publicUrl$pop2$split = _publicUrl$pop2.split(`?`)) === null || _publicUrl$pop2$split === void 0 ? void 0 : _publicUrl$pop2$split[0]);
  const httpHeaders = (0, _getRequestHeadersForUrl.getRequestHeadersForUrl)(url, store);
  actions.createJobV2({
    name: `IMAGE_CDN`,
    inputPaths: [],
    outputDir: _path.default.join(((_global$__GATSBY4 = global.__GATSBY) === null || _global$__GATSBY4 === void 0 ? void 0 : _global$__GATSBY4.root) || process.cwd(), ...publicUrl.filter(Boolean)),
    args: {
      url,
      filename: outputFilename,
      contentDigest,
      httpHeaders,
      ...imageArgs
    }
  }, {
    name: `gatsby`,
    // @ts-ignore - version is allowed
    version: GATSBY_VERSION,
    resolve: __dirname
  });
}