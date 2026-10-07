// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const util = require('util');
const stream = require('stream');
const is = require('./is');

require('./libvips').hasVendoredLibvips();
require('./sharp');

// Use NODE_DEBUG=sharp to enable libvips warnings
const debuglog = util.debuglog('sharp');

/**
 * Constructor factory to create an instance of `sharp`, to which further methods are chained.
 *
 * JPEG, PNG, WebP, GIF, AVIF or TIFF format image data can be streamed out from this object.
 * When using Stream based output, derived attributes are available from the `info` event.
 *
 * Non-critical problems encountered during processing are emitted as `warning` events.
 *
 * Implements the [stream.Duplex](http://nodejs.org/api/stream.html#stream_class_stream_duplex) class.
 *
 * @constructs Sharp
 *
 * @emits Sharp#info
 * @emits Sharp#warning
 *
 * @example
 * sharp('input.jpg')
 *   .resize(300, 200)
 *   .toFile('output.jpg', function(err) {
 *     // output.jpg is a 300 pixels wide and 200 pixels high image
 *     // containing a scaled and cropped version of input.jpg
 *   });
 *
 * @example
 * // Read image data from readableStream,
 * // resize to 300 pixels wide,
 * // emit an 'info' event with calculated dimensions
 * // and finally write image data to writableStream
 * var transformer = sharp()
 *   .resize(300)
 *   .on('info', function(info) {
 *     console.log('Image height is ' + info.height);
 *   });
 * readableStream.pipe(transformer).pipe(writableStream);
 *
 * @example
 * // Create a blank 300x200 PNG image of semi-translucent red pixels
 * sharp({
 *   create: {
 *     width: 300,
 *     height: 200,
 *     channels: 4,
 *     background: { r: 255, g: 0, b: 0, alpha: 0.5 }
 *   }
 * })
 * .png()
 * .toBuffer()
 * .then( ... );
 *
 * @example
 * // Convert an animated GIF to an animated WebP
 * await sharp('in.gif', { animated: true }).toFile('out.webp');
 *
 * @example
 * // Read a raw array of pixels and save it to a png
 * const input = Uint8Array.from([255, 255, 255, 0, 0, 0]); // or Uint8ClampedArray
 * const image = sharp(input, {
 *   // because the input does not contain its dimensions or how many channels it has
 *   // we need to specify it in the constructor options
 *   raw: {
 *     width: 2,
 *     height: 1,
 *     channels: 3
 *   }
 * });
 * await image.toFile('my-two-pixels.png');
 *
 * @example
 * // Generate RGB Gaussian noise
 * await sharp({
 *   create: {
 *     width: 300,
 *     height: 200,
 *     channels: 3,
 *     noise: {
 *       type: 'gaussian',
 *       mean: 128,
 *       sigma: 30
 *     }
 *  }
 * }).toFile('noise.png');
 *
 * @example
 * // Generate an image from text
 * await sharp({
 *   text: {
 *     text: 'Hello, world!',
 *     width: 400, // max width
 *     height: 300 // max height
 *   }
 * }).toFile('text_bw.png');
 *
 * @example
 * // Generate an rgba image from text using pango markup and font
 * await sharp({
 *   text: {
 *     text: '<span foreground="red">Red!</span><span background="cyan">blue</span>',
 *     font: 'sans',
 *     rgba: true,
 *     dpi: 300
 *   }
 * }).toFile('text_rgba.png');
 *
 * @param {(Buffer|ArrayBuffer|Uint8Array|Uint8ClampedArray|Int8Array|Uint16Array|Int16Array|Uint32Array|Int32Array|Float32Array|Float64Array|string)} [input] - if present, can be
 *  a Buffer / ArrayBuffer / Uint8Array / Uint8ClampedArray containing JPEG, PNG, WebP, AVIF, GIF, SVG or TIFF image data, or
 *  a TypedArray containing raw pixel image data, or
 *  a String containing the filesystem path to an JPEG, PNG, WebP, AVIF, GIF, SVG or TIFF image file.
 *  JPEG, PNG, WebP, AVIF, GIF, SVG, TIFF or raw pixel image data can be streamed into the object when not present.
 * @param {Object} [options] - if present, is an Object with optional attributes.
 * @param {string} [options.failOn='warning'] - when to abort processing of invalid pixel data, one of (in order of sensitivity): 'none' (least), 'truncated', 'error' or 'warning' (most), higher levels imply lower levels, invalid metadata will always abort.
 * @param {number|boolean} [options.limitInputPixels=268402689] - Do not process input images where the number of pixels
 *  (width x height) exceeds this limit. Assumes image dimensions contained in the input metadata can be trusted.
 *  An integral Number of pixels, zero or false to remove limit, true to use default limit of 268402689 (0x3FFF x 0x3FFF).
 * @param {boolean} [options.unlimited=false] - Set this to `true` to remove safety features that help prevent memory exhaustion (JPEG, PNG, SVG, HEIF).
 * @param {boolean} [options.sequentialRead=true] - Set this to `false` to use random access rather than sequential read. Some operations will do this automatically.
 * @param {number} [options.density=72] - number representing the DPI for vector images in the range 1 to 100000.
 * @param {number} [options.ignoreIcc=false] - should the embedded ICC profile, if any, be ignored.
 * @param {number} [options.pages=1] - Number of pages to extract for multi-page input (GIF, WebP, TIFF), use -1 for all pages.
 * @param {number} [options.page=0] - Page number to start extracting from for multi-page input (GIF, WebP, TIFF), zero based.
 * @param {number} [options.subifd=-1] - subIFD (Sub Image File Directory) to extract for OME-TIFF, defaults to main image.
 * @param {number} [options.level=0] - level to extract from a multi-level input (OpenSlide), zero based.
 * @param {boolean} [options.animated=false] - Set to `true` to read all frames/pages of an animated image (GIF, WebP, TIFF), equivalent of setting `pages` to `-1`.
 * @param {Object} [options.raw] - describes raw pixel input image data. See `raw()` for pixel ordering.
 * @param {number} [options.raw.width] - integral number of pixels wide.
 * @param {number} [options.raw.height] - integral number of pixels high.
 * @param {number} [options.raw.channels] - integral number of channels, between 1 and 4.
 * @param {boolean} [options.raw.premultiplied] - specifies that the raw input has already been premultiplied, set to `true`
 *  to avoid sharp premultiplying the image. (optional, default `false`)
 * @param {Object} [options.create] - describes a new image to be created.
 * @param {number} [options.create.width] - integral number of pixels wide.
 * @param {number} [options.create.height] - integral number of pixels high.
 * @param {number} [options.create.channels] - integral number of channels, either 3 (RGB) or 4 (RGBA).
 * @param {string|Object} [options.create.background] - parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha.
 * @param {Object} [options.create.noise] - describes a noise to be created.
 * @param {string} [options.create.noise.type] - type of generated noise, currently only `gaussian` is supported.
 * @param {number} [options.create.noise.mean] - mean of pixels in generated noise.
 * @param {number} [options.create.noise.sigma] - standard deviation of pixels in generated noise.
 * @param {Object} [options.text] - describes a new text image to be created.
 * @param {string} [options.text.text] - text to render as a UTF-8 string. It can contain Pango markup, for example `<i>Le</i>Monde`.
 * @param {string} [options.text.font] - font name to render with.
 * @param {string} [options.text.fontfile] - absolute filesystem path to a font file that can be used by `font`.
 * @param {number} [options.text.width=0] - Integral number of pixels to word-wrap at. Lines of text wider than this will be broken at word boundaries.
 * @param {number} [options.text.height=0] - Maximum integral number of pixels high. When defined, `dpi` will be ignored and the text will automatically fit the pixel resolution defined by `width` and `height`. Will be ignored if `width` is not specified or set to 0.
 * @param {string} [options.text.align='left'] - Alignment style for multi-line text (`'left'`, `'centre'`, `'center'`, `'right'`).
 * @param {boolean} [options.text.justify=false] - set this to true to apply justification to the text.
 * @param {number} [options.text.dpi=72] - the resolution (size) at which to render the text. Does not take effect if `height` is specified.
 * @param {boolean} [options.text.rgba=false] - set this to true to enable RGBA output. This is useful for colour emoji rendering, or support for pango markup features like `<span foreground="red">Red!</span>`.
 * @param {number} [options.text.spacing=0] - text line height in points. Will use the font line height if none is specified.
 * @param {string} [options.text.wrap='word'] - word wrapping style when width is provided, one of: 'word', 'char', 'charWord' (prefer char, fallback to word) or 'none'.
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
 */
const Sharp = function (input, options) {
  if (arguments.length === 1 && !is.defined(input)) {
    throw new Error('Invalid input');
  }
  if (!(this instanceof Sharp)) {
    return new Sharp(input, options);
  }
  stream.Duplex.call(this);
  this.options = {
    // resize options
    topOffsetPre: -1,
    leftOffsetPre: -1,
    widthPre: -1,
    heightPre: -1,
    topOffsetPost: -1,
    leftOffsetPost: -1,
    widthPost: -1,
    heightPost: -1,
    width: -1,
    height: -1,
    canvas: 'crop',
    position: 0,
    resizeBackground: [0, 0, 0, 255],
    useExifOrientation: false,
    angle: 0,
    rotationAngle: 0,
    rotationBackground: [0, 0, 0, 255],
    rotateBeforePreExtract: false,
    flip: false,
    flop: false,
    extendTop: 0,
    extendBottom: 0,
    extendLeft: 0,
    extendRight: 0,
    extendBackground: [0, 0, 0, 255],
    extendWith: 'background',
    withoutEnlargement: false,
    withoutReduction: false,
    affineMatrix: [],
    affineBackground: [0, 0, 0, 255],
    affineIdx: 0,
    affineIdy: 0,
    affineOdx: 0,
    affineOdy: 0,
    affineInterpolator: this.constructor.interpolators.bilinear,
    kernel: 'lanczos3',
    fastShrinkOnLoad: true,
    // operations
    tintA: 128,
    tintB: 128,
    flatten: false,
    flattenBackground: [0, 0, 0],
    unflatten: false,
    negate: false,
    negateAlpha: true,
    medianSize: 0,
    blurSigma: 0,
    sharpenSigma: 0,
    sharpenM1: 1,
    sharpenM2: 2,
    sharpenX1: 2,
    sharpenY2: 10,
    sharpenY3: 20,
    threshold: 0,
    thresholdGrayscale: true,
    trimBackground: [],
    trimThreshold: 0,
    gamma: 0,
    gammaOut: 0,
    greyscale: false,
    normalise: false,
    normaliseLower: 1,
    normaliseUpper: 99,
    claheWidth: 0,
    claheHeight: 0,
    claheMaxSlope: 3,
    brightness: 1,
    saturation: 1,
    hue: 0,
    lightness: 0,
    booleanBufferIn: null,
    booleanFileIn: '',
    joinChannelIn: [],
    extractChannel: -1,
    removeAlpha: false,
    ensureAlpha: -1,
    colourspace: 'srgb',
    colourspaceInput: 'last',
    composite: [],
    // output
    fileOut: '',
    formatOut: 'input',
    streamOut: false,
    withMetadata: false,
    withMetadataOrientation: -1,
    withMetadataDensity: 0,
    withMetadataIcc: '',
    withMetadataStrs: {},
    resolveWithObject: false,
    // output format
    jpegQuality: 80,
    jpegProgressive: false,
    jpegChromaSubsampling: '4:2:0',
    jpegTrellisQuantisation: false,
    jpegOvershootDeringing: false,
    jpegOptimiseScans: false,
    jpegOptimiseCoding: true,
    jpegQuantisationTable: 0,
    pngProgressive: false,
    pngCompressionLevel: 6,
    pngAdaptiveFiltering: false,
    pngPalette: false,
    pngQuality: 100,
    pngEffort: 7,
    pngBitdepth: 8,
    pngDither: 1,
    jp2Quality: 80,
    jp2TileHeight: 512,
    jp2TileWidth: 512,
    jp2Lossless: false,
    jp2ChromaSubsampling: '4:4:4',
    webpQuality: 80,
    webpAlphaQuality: 100,
    webpLossless: false,
    webpNearLossless: false,
    webpSmartSubsample: false,
    webpPreset: 'default',
    webpEffort: 4,
    webpMinSize: false,
    webpMixed: false,
    gifBitdepth: 8,
    gifEffort: 7,
    gifDither: 1,
    gifInterFrameMaxError: 0,
    gifInterPaletteMaxError: 3,
    gifReuse: true,
    gifProgressive: false,
    tiffQuality: 80,
    tiffCompression: 'jpeg',
    tiffPredictor: 'horizontal',
    tiffPyramid: false,
    tiffBitdepth: 8,
    tiffTile: false,
    tiffTileHeight: 256,
    tiffTileWidth: 256,
    tiffXres: 1.0,
    tiffYres: 1.0,
    tiffResolutionUnit: 'inch',
    heifQuality: 50,
    heifLossless: false,
    heifCompression: 'av1',
    heifEffort: 4,
    heifChromaSubsampling: '4:4:4',
    jxlDistance: 1,
    jxlDecodingTier: 0,
    jxlEffort: 7,
    jxlLossless: false,
    rawDepth: 'uchar',
    tileSize: 256,
    tileOverlap: 0,
    tileContainer: 'fs',
    tileLayout: 'dz',
    tileFormat: 'last',
    tileDepth: 'last',
    tileAngle: 0,
    tileSkipBlanks: -1,
    tileBackground: [255, 255, 255, 255],
    tileCentre: false,
    tileId: 'https://example.com/iiif',
    tileBasename: '',
    timeoutSeconds: 0,
    linearA: [],
    linearB: [],
    // Function to notify of libvips warnings
    debuglog: warning => {
      this.emit('warning', warning);
      debuglog(warning);
    },
    // Function to notify of queue length changes
    queueListener: function (queueLength) {
      Sharp.queue.emit('change', queueLength);
    }
  };
  this.options.input = this._createInputDescriptor(input, options, { allowStream: true });
  return this;
};
Object.setPrototypeOf(Sharp.prototype, stream.Duplex.prototype);
Object.setPrototypeOf(Sharp, stream.Duplex);

/**
 * Take a "snapshot" of the Sharp instance, returning a new instance.
 * Cloned instances inherit the input of their parent instance.
 * This allows multiple output Streams and therefore multiple processing pipelines to share a single input Stream.
 *
 * @example
 * const pipeline = sharp().rotate();
 * pipeline.clone().resize(800, 600).pipe(firstWritableStream);
 * pipeline.clone().extract({ left: 20, top: 20, width: 100, height: 100 }).pipe(secondWritableStream);
 * readableStream.pipe(pipeline);
 * // firstWritableStream receives auto-rotated, resized readableStream
 * // secondWritableStream receives auto-rotated, extracted region of readableStream
 *
 * @example
 * // Create a pipeline that will download an image, resize it and format it to different files
 * // Using Promises to know when the pipeline is complete
 * const fs = require("fs");
 * const got = require("got");
 * const sharpStream = sharp({ failOn: 'none' });
 *
 * const promises = [];
 *
 * promises.push(
 *   sharpStream
 *     .clone()
 *     .jpeg({ quality: 100 })
 *     .toFile("originalFile.jpg")
 * );
 *
 * promises.push(
 *   sharpStream
 *     .clone()
 *     .resize({ width: 500 })
 *     .jpeg({ quality: 80 })
 *     .toFile("optimized-500.jpg")
 * );
 *
 * promises.push(
 *   sharpStream
 *     .clone()
 *     .resize({ width: 500 })
 *     .webp({ quality: 80 })
 *     .toFile("optimized-500.webp")
 * );
 *
 * // https://github.com/sindresorhus/got/blob/main/documentation/3-streams.md
 * got.stream("https://www.example.com/some-file.jpg").pipe(sharpStream);
 *
 * Promise.all(promises)
 *   .then(res => { console.log("Done!", res); })
 *   .catch(err => {
 *     console.error("Error processing files, let's clean it up", err);
 *     try {
 *       fs.unlinkSync("originalFile.jpg");
 *       fs.unlinkSync("optimized-500.jpg");
 *       fs.unlinkSync("optimized-500.webp");
 *     } catch (e) {}
 *   });
 *
 * @returns {Sharp}
 */
function clone () {
  // Clone existing options
  const clone = this.constructor.call();
  clone.options = Object.assign({}, this.options);
  // Pass 'finish' event to clone for Stream-based input
  if (this._isStreamInput()) {
    this.on('finish', () => {
      // Clone inherits input data
      this._flattenBufferIn();
      clone.options.bufferIn = this.options.bufferIn;
      clone.emit('finish');
    });
  }
  return clone;
}
Object.assign(Sharp.prototype, { clone });

/**
 * Export constructor.
 * @private
 */
module.exports = Sharp;
