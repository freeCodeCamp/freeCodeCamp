"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.ImageCDNUrlKeys = void 0;
exports.generateFileUrl = generateFileUrl;
exports.generateImageUrl = generateImageUrl;
var _crypto = _interopRequireDefault(require("crypto"));
var _path = require("path");
var _url = require("url");
var _createContentDigest = require("gatsby-core-utils/create-content-digest");
var _types = require("../types");
// this is an arbitrary origin that we use #branding so we can construct a full url for the URL constructor
const ORIGIN = `https://gatsbyjs.com`;
let ImageCDNUrlKeys;
exports.ImageCDNUrlKeys = ImageCDNUrlKeys;
(function (ImageCDNUrlKeys) {
  ImageCDNUrlKeys["URL"] = "u";
  ImageCDNUrlKeys["ENCRYPTED_URL"] = "eu";
  ImageCDNUrlKeys["ARGS"] = "a";
  ImageCDNUrlKeys["CONTENT_DIGEST"] = "cd";
})(ImageCDNUrlKeys || (exports.ImageCDNUrlKeys = ImageCDNUrlKeys = {}));
function encryptImageCdnUrl(secretKey, iv, urlToEncrypt) {
  const randomPadding = _crypto.default.randomBytes(_crypto.default.randomInt(32, 64)).toString(`hex`);
  const toEncrypt = `${randomPadding}:${urlToEncrypt}`;
  const cipher = _crypto.default.createCipheriv(`aes-256-ctr`, Buffer.from(secretKey, `hex`), Buffer.from(iv, `hex`));
  const encrypted = cipher.update(toEncrypt);
  const finalBuffer = Buffer.concat([encrypted, cipher.final()]);
  return finalBuffer.toString(`hex`);
}
function appendUrlParamToSearchParams(searchParams, url) {
  const key = process.env.IMAGE_CDN_ENCRYPTION_SECRET_KEY || ``;
  const iv = process.env.IMAGE_CDN_ENCRYPTION_IV || ``;
  const shouldEncrypt = !!(iv && key);
  const paramName = shouldEncrypt ? ImageCDNUrlKeys.ENCRYPTED_URL : ImageCDNUrlKeys.URL;
  const finalUrl = shouldEncrypt ? encryptImageCdnUrl(key, iv, url) : url;
  searchParams.append(paramName, finalUrl);
}
const frontendHostName = process.env.IMAGE_CDN_HOSTNAME || ``;
let customImageCDNUrlGenerator = undefined;
let customFileCDNUrlGenerator = undefined;
const preferDefault = m => m && m.default || m;
function generateFileUrl(source, store) {
  var _state$program, _state$config, _global$__GATSBY;
  const state = store === null || store === void 0 ? void 0 : store.getState();
  const pathPrefix = state !== null && state !== void 0 && (_state$program = state.program) !== null && _state$program !== void 0 && _state$program.prefixPaths ? state === null || state === void 0 ? void 0 : (_state$config = state.config) === null || _state$config === void 0 ? void 0 : _state$config.pathPrefix : ``;
  if ((_global$__GATSBY = global.__GATSBY) !== null && _global$__GATSBY !== void 0 && _global$__GATSBY.fileCDNUrlGeneratorModulePath) {
    if (!customFileCDNUrlGenerator) {
      customFileCDNUrlGenerator = preferDefault(require(global.__GATSBY.fileCDNUrlGeneratorModulePath));
    }
    return customFileCDNUrlGenerator(source, pathPrefix);
  }
  const {
    url,
    filename
  } = source;
  const fileExt = (0, _path.extname)(filename);
  const filenameWithoutExt = (0, _path.basename)(filename, fileExt);
  const parsedURL = new _url.URL(`${ORIGIN}${generatePublicUrl({
    url
  }, pathPrefix)}/${filenameWithoutExt}${fileExt}`);
  appendUrlParamToSearchParams(parsedURL.searchParams, url);
  return `${frontendHostName}${parsedURL.pathname}${parsedURL.search}`;
}
function generateImageUrl(source, imageArgs, store) {
  var _state$program2, _state$config2, _global$__GATSBY2;
  const state = store === null || store === void 0 ? void 0 : store.getState();
  const pathPrefix = state !== null && state !== void 0 && (_state$program2 = state.program) !== null && _state$program2 !== void 0 && _state$program2.prefixPaths ? state === null || state === void 0 ? void 0 : (_state$config2 = state.config) === null || _state$config2 === void 0 ? void 0 : _state$config2.pathPrefix : ``;
  if ((_global$__GATSBY2 = global.__GATSBY) !== null && _global$__GATSBY2 !== void 0 && _global$__GATSBY2.imageCDNUrlGeneratorModulePath) {
    if (!customImageCDNUrlGenerator) {
      customImageCDNUrlGenerator = preferDefault(require(global.__GATSBY.imageCDNUrlGeneratorModulePath));
    }
    return customImageCDNUrlGenerator(source, imageArgs, pathPrefix);
  }
  const filenameWithoutExt = (0, _path.basename)(source.filename, (0, _path.extname)(source.filename));
  const queryStr = generateImageArgs(imageArgs);
  const parsedURL = new _url.URL(`${ORIGIN}${generatePublicUrl(source, pathPrefix)}/${(0, _createContentDigest.createContentDigest)(queryStr)}/${filenameWithoutExt}.${imageArgs.format}`);
  appendUrlParamToSearchParams(parsedURL.searchParams, source.url);
  parsedURL.searchParams.append(ImageCDNUrlKeys.ARGS, queryStr);
  parsedURL.searchParams.append(ImageCDNUrlKeys.CONTENT_DIGEST, source.internal.contentDigest);
  return `${frontendHostName}${parsedURL.pathname}${parsedURL.search}`;
}
const routePrefix = process.env.IMAGE_CDN_ROUTE_PREFIX || `_gatsby`;
function generatePublicUrl({
  url,
  mimeType
}, pathPrefix) {
  const remoteUrl = (0, _createContentDigest.createContentDigest)(url);
  let publicUrl = pathPrefix + (mimeType && (0, _types.isImage)({
    mimeType
  }) ? `/${routePrefix}/image/` : `/${routePrefix}/file/`);
  publicUrl += `${remoteUrl}`;
  return publicUrl;
}
function generateImageArgs({
  width,
  height,
  format,
  cropFocus,
  quality
}) {
  const args = [];
  if (width) {
    args.push(`w=${width}`);
  }
  if (height) {
    args.push(`h=${height}`);
  }
  if (cropFocus) {
    args.push(`fit=crop`);
    args.push(`crop=${Array.isArray(cropFocus) ? cropFocus.join(`,`) : cropFocus}`);
  }
  args.push(`fm=${format}`);
  args.push(`q=${quality}`);
  return args.join(`&`);
}