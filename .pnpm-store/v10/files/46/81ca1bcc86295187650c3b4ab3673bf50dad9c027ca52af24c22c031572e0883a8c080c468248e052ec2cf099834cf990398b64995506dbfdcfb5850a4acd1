"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.addImageRoutes = addImageRoutes;
exports.polyfillImageServiceDevRoutes = polyfillImageServiceDevRoutes;
var _path = _interopRequireDefault(require("path"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _fetchRemoteFile = require("gatsby-core-utils/fetch-remote-file");
var _hasFeature = require("../has-feature");
var _urlGenerator = require("./utils/url-generator");
var _mimeTypeHelpers = require("./utils/mime-type-helpers");
var _transformImages = require("./transform-images");
var _getRequestHeadersForUrl = require("./utils/get-request-headers-for-url");
function polyfillImageServiceDevRoutes(app, store) {
  if ((0, _hasFeature.hasFeature)(`image-cdn`)) {
    return;
  }
  addImageRoutes(app, store);
}
function addImageRoutes(app, store) {
  app.get(`/_gatsby/file/:url/:filename`, async (req, res) => {
    var _global$__GATSBY;
    const outputDir = _path.default.join(((_global$__GATSBY = global.__GATSBY) === null || _global$__GATSBY === void 0 ? void 0 : _global$__GATSBY.root) || process.cwd(), `public`, `_gatsby`, `file`);
    const url = req.query[_urlGenerator.ImageCDNUrlKeys.URL];
    const filePath = await (0, _fetchRemoteFile.fetchRemoteFile)({
      directory: outputDir,
      url,
      name: req.params.filename,
      httpHeaders: (0, _getRequestHeadersForUrl.getRequestHeadersForUrl)(url, store)
    });
    _fsExtra.default.createReadStream(filePath).pipe(res);
  });
  app.get(`/_gatsby/image/:url/:params/:filename`, async (req, res) => {
    var _global$__GATSBY2;
    const {
      url,
      params,
      filename
    } = req.params;
    const remoteUrl = decodeURIComponent(req.query[_urlGenerator.ImageCDNUrlKeys.URL]);
    const searchParams = new URLSearchParams(decodeURIComponent(req.query[_urlGenerator.ImageCDNUrlKeys.ARGS]));
    const resizeParams = {
      width: 0,
      height: 0,
      quality: 75,
      format: ``
    };
    for (const [key, value] of searchParams) {
      switch (key) {
        case `w`:
          {
            resizeParams.width = Number(value);
            break;
          }
        case `h`:
          {
            resizeParams.height = Number(value);
            break;
          }
        case `fm`:
          {
            resizeParams.format = value;
            break;
          }
        case `q`:
          {
            resizeParams.quality = Number(value);
            break;
          }
      }
    }
    const outputDir = _path.default.join(((_global$__GATSBY2 = global.__GATSBY) === null || _global$__GATSBY2 === void 0 ? void 0 : _global$__GATSBY2.root) || process.cwd(), `public`, `_gatsby`, `_image`, url, params);
    const httpHeaders = (0, _getRequestHeadersForUrl.getRequestHeadersForUrl)(remoteUrl, store);
    const filePath = await (0, _transformImages.transformImage)({
      outputDir,
      args: {
        url: remoteUrl,
        filename,
        httpHeaders,
        ...resizeParams
      }
    });
    res.setHeader(`content-type`, (0, _mimeTypeHelpers.getFileExtensionFromMimeType)(_path.default.extname(filename)));
    _fsExtra.default.createReadStream(filePath).pipe(res);
  });
  return app;
}