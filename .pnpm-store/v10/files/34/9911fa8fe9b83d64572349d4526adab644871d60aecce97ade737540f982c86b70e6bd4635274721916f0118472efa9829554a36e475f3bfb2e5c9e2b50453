"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = loader;
exports.raw = void 0;

var _path = _interopRequireDefault(require("path"));

var _loaderUtils = require("loader-utils");

var _schemaUtils = require("schema-utils");

var _options = _interopRequireDefault(require("./options.json"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loader(content) {
  const options = (0, _loaderUtils.getOptions)(this);
  (0, _schemaUtils.validate)(_options.default, options, {
    name: 'File Loader',
    baseDataPath: 'options'
  });
  const context = options.context || this.rootContext;
  const name = options.name || '[contenthash].[ext]';
  const url = (0, _loaderUtils.interpolateName)(this, name, {
    context,
    content,
    regExp: options.regExp
  });
  let outputPath = url;

  if (options.outputPath) {
    if (typeof options.outputPath === 'function') {
      outputPath = options.outputPath(url, this.resourcePath, context);
    } else {
      outputPath = _path.default.posix.join(options.outputPath, url);
    }
  }

  let publicPath = `__webpack_public_path__ + ${JSON.stringify(outputPath)}`;

  if (options.publicPath) {
    if (typeof options.publicPath === 'function') {
      publicPath = options.publicPath(url, this.resourcePath, context);
    } else {
      publicPath = `${options.publicPath.endsWith('/') ? options.publicPath : `${options.publicPath}/`}${url}`;
    }

    publicPath = JSON.stringify(publicPath);
  }

  if (options.postTransformPublicPath) {
    publicPath = options.postTransformPublicPath(publicPath);
  }

  if (typeof options.emitFile === 'undefined' || options.emitFile) {
    const assetInfo = {};

    if (typeof name === 'string') {
      let normalizedName = name;
      const idx = normalizedName.indexOf('?');

      if (idx >= 0) {
        normalizedName = normalizedName.substr(0, idx);
      }

      const isImmutable = /\[([^:\]]+:)?(hash|contenthash)(:[^\]]+)?]/gi.test(normalizedName);

      if (isImmutable === true) {
        assetInfo.immutable = true;
      }
    }

    assetInfo.sourceFilename = (0, _utils.normalizePath)(_path.default.relative(this.rootContext, this.resourcePath));
    this.emitFile(outputPath, content, null, assetInfo);
  }

  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;
  return `${esModule ? 'export default' : 'module.exports ='} ${publicPath};`;
}

const raw = true;
exports.raw = raw;