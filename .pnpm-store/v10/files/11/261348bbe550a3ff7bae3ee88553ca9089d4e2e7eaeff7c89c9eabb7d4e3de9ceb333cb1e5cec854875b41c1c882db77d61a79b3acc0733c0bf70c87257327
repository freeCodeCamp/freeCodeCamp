"use strict";

exports.__esModule = true;
exports.generateResizeFieldConfig = generateResizeFieldConfig;
exports.resizeResolver = resizeResolver;
var _urlGenerator = require("../utils/url-generator");
var _mimeTypeHelpers = require("../utils/mime-type-helpers");
var _stripIndent = require("../utils/strip-indent");
var _dispatchers = require("../jobs/dispatchers");
var _types = require("../types");
var _utils = require("./utils");
const DEFAULT_QUALITY = 75;
const allowedFormats = [`jpg`, `png`, `webp`, `avif`, `auto`];
async function resizeResolver(source, args, actions, store) {
  if (!(0, _types.isImage)(source)) {
    return null;
  }
  if (!args.format) {
    args.format = `auto`;
  }
  if (!args.quality) {
    args.quality = DEFAULT_QUALITY;
  }
  if (!allowedFormats.includes(args.format)) {
    throw new Error(`Unknown format "${args.format}" was given to resize ${source.url}`);
  }
  if (!args.width && !args.height) {
    throw new Error(`No width or height is given to resize "${source.url}"`);
  }
  const formats = (0, _utils.validateAndNormalizeFormats)([args.format], (0, _mimeTypeHelpers.getImageFormatFromMimeType)(source.mimeType));
  const [format] = formats;
  const {
    width,
    height
  } = (0, _utils.calculateImageDimensions)(source, args);
  if ((0, _dispatchers.shouldDispatchLocalImageServiceJob)()) {
    (0, _dispatchers.dispatchLocalImageServiceJob)({
      url: source.url,
      mimeType: source.mimeType,
      filename: source.filename,
      contentDigest: source.internal.contentDigest
    }, {
      ...args,
      width,
      height,
      format
    }, actions, store);
  }
  const src = (0, _urlGenerator.generateImageUrl)(source, {
    ...args,
    width,
    height,
    format
  }, store);
  return {
    src,
    width,
    height
  };
}
function generateResizeFieldConfig(enums, actions, store) {
  return {
    type: `RemoteFileResize`,
    args: {
      width: `Int`,
      height: `Int`,
      aspectRatio: `Float`,
      fit: {
        type: enums.fit.getTypeName(),
        defaultValue: enums.fit.getField(`COVER`).value
      },
      format: {
        type: enums.format.getTypeName(),
        defaultValue: enums.format.getField(`AUTO`).value,
        description: (0, _stripIndent.stripIndent)`
      The image formats to generate. Valid values are AUTO (meaning the same format as the source image), JPG, PNG, WEBP and AVIF.
      The default value is [AUTO, WEBP, AVIF], and you should rarely need to change this. Take care if you specify JPG or PNG when you do
      not know the formats of the source images, as this could lead to unwanted results such as converting JPEGs to PNGs. Specifying
      both PNG and JPG is not supported and will be ignored.`
      },
      cropFocus: {
        type: enums.cropFocus.List.getTypeName()
      },
      quality: {
        type: `Int`,
        defaultValue: DEFAULT_QUALITY
      }
    },
    resolve(source, args) {
      return resizeResolver(source, args, actions, store);
    }
  };
}