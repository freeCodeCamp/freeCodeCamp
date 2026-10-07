// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const path = require('path');
const is = require('./is');
const sharp = require('./sharp');

const formats = new Map([
  ['heic', 'heif'],
  ['heif', 'heif'],
  ['avif', 'avif'],
  ['jpeg', 'jpeg'],
  ['jpg', 'jpeg'],
  ['jpe', 'jpeg'],
  ['tile', 'tile'],
  ['dz', 'tile'],
  ['png', 'png'],
  ['raw', 'raw'],
  ['tiff', 'tiff'],
  ['tif', 'tiff'],
  ['webp', 'webp'],
  ['gif', 'gif'],
  ['jp2', 'jp2'],
  ['jpx', 'jp2'],
  ['j2k', 'jp2'],
  ['j2c', 'jp2'],
  ['jxl', 'jxl']
]);

const jp2Regex = /\.(jp[2x]|j2[kc])$/i;

const errJp2Save = () => new Error('JP2 output requires libvips with support for OpenJPEG');

const bitdepthFromColourCount = (colours) => 1 << 31 - Math.clz32(Math.ceil(Math.log2(colours)));

/**
 * Write output image data to a file.
 *
 * If an explicit output format is not selected, it will be inferred from the extension,
 * with JPEG, PNG, WebP, AVIF, TIFF, GIF, DZI, and libvips' V format supported.
 * Note that raw pixel data is only supported for buffer output.
 *
 * By default all metadata will be removed, which includes EXIF-based orientation.
 * See {@link #withmetadata|withMetadata} for control over this.
 *
 * The caller is responsible for ensuring directory structures and permissions exist.
 *
 * A `Promise` is returned when `callback` is not provided.
 *
 * @example
 * sharp(input)
 *   .toFile('output.png', (err, info) => { ... });
 *
 * @example
 * sharp(input)
 *   .toFile('output.png')
 *   .then(info => { ... })
 *   .catch(err => { ... });
 *
 * @param {string} fileOut - the path to write the image data to.
 * @param {Function} [callback] - called on completion with two arguments `(err, info)`.
 * `info` contains the output image `format`, `size` (bytes), `width`, `height`,
 * `channels` and `premultiplied` (indicating if premultiplication was used).
 * When using a crop strategy also contains `cropOffsetLeft` and `cropOffsetTop`.
 * When using the attention crop strategy also contains `attentionX` and `attentionY`, the focal point of the cropped region.
 * May also contain `textAutofitDpi` (dpi the font was rendered at) if image was created from text.
 * @returns {Promise<Object>} - when no callback is provided
 * @throws {Error} Invalid parameters
 */
function toFile (fileOut, callback) {
  let err;
  if (!is.string(fileOut)) {
    err = new Error('Missing output file path');
  } else if (is.string(this.options.input.file) && path.resolve(this.options.input.file) === path.resolve(fileOut)) {
    err = new Error('Cannot use same file for input and output');
  } else if (jp2Regex.test(path.extname(fileOut)) && !this.constructor.format.jp2k.output.file) {
    err = errJp2Save();
  }
  if (err) {
    if (is.fn(callback)) {
      callback(err);
    } else {
      return Promise.reject(err);
    }
  } else {
    this.options.fileOut = fileOut;
    return this._pipeline(callback);
  }
  return this;
}

/**
 * Write output to a Buffer.
 * JPEG, PNG, WebP, AVIF, TIFF, GIF and raw pixel data output are supported.
 *
 * Use {@link #toformat|toFormat} or one of the format-specific functions such as {@link jpeg}, {@link png} etc. to set the output format.
 *
 * If no explicit format is set, the output format will match the input image, except SVG input which becomes PNG output.
 *
 * By default all metadata will be removed, which includes EXIF-based orientation.
 * See {@link #withmetadata|withMetadata} for control over this.
 *
 * `callback`, if present, gets three arguments `(err, data, info)` where:
 * - `err` is an error, if any.
 * - `data` is the output image data.
 * - `info` contains the output image `format`, `size` (bytes), `width`, `height`,
 * `channels` and `premultiplied` (indicating if premultiplication was used).
 * When using a crop strategy also contains `cropOffsetLeft` and `cropOffsetTop`.
 * May also contain `textAutofitDpi` (dpi the font was rendered at) if image was created from text.
 *
 * A `Promise` is returned when `callback` is not provided.
 *
 * @example
 * sharp(input)
 *   .toBuffer((err, data, info) => { ... });
 *
 * @example
 * sharp(input)
 *   .toBuffer()
 *   .then(data => { ... })
 *   .catch(err => { ... });
 *
 * @example
 * sharp(input)
 *   .png()
 *   .toBuffer({ resolveWithObject: true })
 *   .then(({ data, info }) => { ... })
 *   .catch(err => { ... });
 *
 * @example
 * const { data, info } = await sharp('my-image.jpg')
 *   // output the raw pixels
 *   .raw()
 *   .toBuffer({ resolveWithObject: true });
 *
 * // create a more type safe way to work with the raw pixel data
 * // this will not copy the data, instead it will change `data`s underlying ArrayBuffer
 * // so `data` and `pixelArray` point to the same memory location
 * const pixelArray = new Uint8ClampedArray(data.buffer);
 *
 * // When you are done changing the pixelArray, sharp takes the `pixelArray` as an input
 * const { width, height, channels } = info;
 * await sharp(pixelArray, { raw: { width, height, channels } })
 *   .toFile('my-changed-image.jpg');
 *
 * @param {Object} [options]
 * @param {boolean} [options.resolveWithObject] Resolve the Promise with an Object containing `data` and `info` properties instead of resolving only with `data`.
 * @param {Function} [callback]
 * @returns {Promise<Buffer>} - when no callback is provided
 */
function toBuffer (options, callback) {
  if (is.object(options)) {
    this._setBooleanOption('resolveWithObject', options.resolveWithObject);
  } else if (this.options.resolveWithObject) {
    this.options.resolveWithObject = false;
  }
  this.options.fileOut = '';
  return this._pipeline(is.fn(options) ? options : callback);
}

/**
 * Include all metadata (EXIF, XMP, IPTC) from the input image in the output image.
 * This will also convert to and add a web-friendly sRGB ICC profile if appropriate,
 * unless a custom output profile is provided.
 *
 * The default behaviour, when `withMetadata` is not used, is to convert to the device-independent
 * sRGB colour space and strip all metadata, including the removal of any ICC profile.
 *
 * EXIF metadata is unsupported for TIFF output.
 *
 * @example
 * sharp('input.jpg')
 *   .withMetadata()
 *   .toFile('output-with-metadata.jpg')
 *   .then(info => { ... });
 *
 * @example
 * // Set output EXIF metadata
 * const data = await sharp(input)
 *   .withMetadata({
 *     exif: {
 *       IFD0: {
 *         Copyright: 'The National Gallery'
 *       },
 *       IFD3: {
 *         GPSLatitudeRef: 'N',
 *         GPSLatitude: '51/1 30/1 3230/100',
 *         GPSLongitudeRef: 'W',
 *         GPSLongitude: '0/1 7/1 4366/100'
 *       }
 *     }
 *   })
 *   .toBuffer();
 *
 * @example
 * // Set output metadata to 96 DPI
 * const data = await sharp(input)
 *   .withMetadata({ density: 96 })
 *   .toBuffer();
 *
 * @param {Object} [options]
 * @param {number} [options.orientation] value between 1 and 8, used to update the EXIF `Orientation` tag.
 * @param {string} [options.icc='srgb'] Filesystem path to output ICC profile, relative to `process.cwd()`, defaults to built-in sRGB.
 * @param {Object<Object>} [options.exif={}] Object keyed by IFD0, IFD1 etc. of key/value string pairs to write as EXIF data.
 * @param {number} [options.density] Number of pixels per inch (DPI).
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
 */
function withMetadata (options) {
  this.options.withMetadata = is.bool(options) ? options : true;
  if (is.object(options)) {
    if (is.defined(options.orientation)) {
      if (is.integer(options.orientation) && is.inRange(options.orientation, 1, 8)) {
        this.options.withMetadataOrientation = options.orientation;
      } else {
        throw is.invalidParameterError('orientation', 'integer between 1 and 8', options.orientation);
      }
    }
    if (is.defined(options.density)) {
      if (is.number(options.density) && options.density > 0) {
        this.options.withMetadataDensity = options.density;
      } else {
        throw is.invalidParameterError('density', 'positive number', options.density);
      }
    }
    if (is.defined(options.icc)) {
      if (is.string(options.icc)) {
        this.options.withMetadataIcc = options.icc;
      } else {
        throw is.invalidParameterError('icc', 'string filesystem path to ICC profile', options.icc);
      }
    }
    if (is.defined(options.exif)) {
      if (is.object(options.exif)) {
        for (const [ifd, entries] of Object.entries(options.exif)) {
          if (is.object(entries)) {
            for (const [k, v] of Object.entries(entries)) {
              if (is.string(v)) {
                this.options.withMetadataStrs[`exif-${ifd.toLowerCase()}-${k}`] = v;
              } else {
                throw is.invalidParameterError(`exif.${ifd}.${k}`, 'string', v);
              }
            }
          } else {
            throw is.invalidParameterError(`exif.${ifd}`, 'object', entries);
          }
        }
      } else {
        throw is.invalidParameterError('exif', 'object', options.exif);
      }
    }
  }
  return this;
}

/**
 * Force output to a given format.
 *
 * @example
 * // Convert any input to PNG output
 * const data = await sharp(input)
 *   .toFormat('png')
 *   .toBuffer();
 *
 * @param {(string|Object)} format - as a string or an Object with an 'id' attribute
 * @param {Object} options - output options
 * @returns {Sharp}
 * @throws {Error} unsupported format or options
 */
function toFormat (format, options) {
  const actualFormat = formats.get((is.object(format) && is.string(format.id) ? format.id : format).toLowerCase());
  if (!actualFormat) {
    throw is.invalidParameterError('format', `one of: ${[...formats.keys()].join(', ')}`, format);
  }
  return this[actualFormat](options);
}

/**
 * Use these JPEG options for output image.
 *
 * @example
 * // Convert any input to very high quality JPEG output
 * const data = await sharp(input)
 *   .jpeg({
 *     quality: 100,
 *     chromaSubsampling: '4:4:4'
 *   })
 *   .toBuffer();
 *
 * @example
 * // Use mozjpeg to reduce output JPEG file size (slower)
 * const data = await sharp(input)
 *   .jpeg({ mozjpeg: true })
 *   .toBuffer();
 *
 * @param {Object} [options] - output options
 * @param {number} [options.quality=80] - quality, integer 1-100
 * @param {boolean} [options.progressive=false] - use progressive (interlace) scan
 * @param {string} [options.chromaSubsampling='4:2:0'] - set to '4:4:4' to prevent chroma subsampling otherwise defaults to '4:2:0' chroma subsampling
 * @param {boolean} [options.optimiseCoding=true] - optimise Huffman coding tables
 * @param {boolean} [options.optimizeCoding=true] - alternative spelling of optimiseCoding
 * @param {boolean} [options.mozjpeg=false] - use mozjpeg defaults, equivalent to `{ trellisQuantisation: true, overshootDeringing: true, optimiseScans: true, quantisationTable: 3 }`
 * @param {boolean} [options.trellisQuantisation=false] - apply trellis quantisation
 * @param {boolean} [options.overshootDeringing=false] - apply overshoot deringing
 * @param {boolean} [options.optimiseScans=false] - optimise progressive scans, forces progressive
 * @param {boolean} [options.optimizeScans=false] - alternative spelling of optimiseScans
 * @param {number} [options.quantisationTable=0] - quantization table to use, integer 0-8
 * @param {number} [options.quantizationTable=0] - alternative spelling of quantisationTable
 * @param {boolean} [options.force=true] - force JPEG output, otherwise attempt to use input format
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function jpeg (options) {
  if (is.object(options)) {
    if (is.defined(options.quality)) {
      if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
        this.options.jpegQuality = options.quality;
      } else {
        throw is.invalidParameterError('quality', 'integer between 1 and 100', options.quality);
      }
    }
    if (is.defined(options.progressive)) {
      this._setBooleanOption('jpegProgressive', options.progressive);
    }
    if (is.defined(options.chromaSubsampling)) {
      if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ['4:2:0', '4:4:4'])) {
        this.options.jpegChromaSubsampling = options.chromaSubsampling;
      } else {
        throw is.invalidParameterError('chromaSubsampling', 'one of: 4:2:0, 4:4:4', options.chromaSubsampling);
      }
    }
    const optimiseCoding = is.bool(options.optimizeCoding) ? options.optimizeCoding : options.optimiseCoding;
    if (is.defined(optimiseCoding)) {
      this._setBooleanOption('jpegOptimiseCoding', optimiseCoding);
    }
    if (is.defined(options.mozjpeg)) {
      if (is.bool(options.mozjpeg)) {
        if (options.mozjpeg) {
          this.options.jpegTrellisQuantisation = true;
          this.options.jpegOvershootDeringing = true;
          this.options.jpegOptimiseScans = true;
          this.options.jpegProgressive = true;
          this.options.jpegQuantisationTable = 3;
        }
      } else {
        throw is.invalidParameterError('mozjpeg', 'boolean', options.mozjpeg);
      }
    }
    const trellisQuantisation = is.bool(options.trellisQuantization) ? options.trellisQuantization : options.trellisQuantisation;
    if (is.defined(trellisQuantisation)) {
      this._setBooleanOption('jpegTrellisQuantisation', trellisQuantisation);
    }
    if (is.defined(options.overshootDeringing)) {
      this._setBooleanOption('jpegOvershootDeringing', options.overshootDeringing);
    }
    const optimiseScans = is.bool(options.optimizeScans) ? options.optimizeScans : options.optimiseScans;
    if (is.defined(optimiseScans)) {
      this._setBooleanOption('jpegOptimiseScans', optimiseScans);
      if (optimiseScans) {
        this.options.jpegProgressive = true;
      }
    }
    const quantisationTable = is.number(options.quantizationTable) ? options.quantizationTable : options.quantisationTable;
    if (is.defined(quantisationTable)) {
      if (is.integer(quantisationTable) && is.inRange(quantisationTable, 0, 8)) {
        this.options.jpegQuantisationTable = quantisationTable;
      } else {
        throw is.invalidParameterError('quantisationTable', 'integer between 0 and 8', quantisationTable);
      }
    }
  }
  return this._updateFormatOut('jpeg', options);
}

/**
 * Use these PNG options for output image.
 *
 * By default, PNG output is full colour at 8 or 16 bits per pixel.
 * Indexed PNG input at 1, 2 or 4 bits per pixel is converted to 8 bits per pixel.
 * Set `palette` to `true` for slower, indexed PNG output.
 *
 * @example
 * // Convert any input to full colour PNG output
 * const data = await sharp(input)
 *   .png()
 *   .toBuffer();
 *
 * @example
 * // Convert any input to indexed PNG output (slower)
 * const data = await sharp(input)
 *   .png({ palette: true })
 *   .toBuffer();
 *
 * @param {Object} [options]
 * @param {boolean} [options.progressive=false] - use progressive (interlace) scan
 * @param {number} [options.compressionLevel=6] - zlib compression level, 0 (fastest, largest) to 9 (slowest, smallest)
 * @param {boolean} [options.adaptiveFiltering=false] - use adaptive row filtering
 * @param {boolean} [options.palette=false] - quantise to a palette-based image with alpha transparency support
 * @param {number} [options.quality=100] - use the lowest number of colours needed to achieve given quality, sets `palette` to `true`
 * @param {number} [options.effort=7] - CPU effort, between 1 (fastest) and 10 (slowest), sets `palette` to `true`
 * @param {number} [options.colours=256] - maximum number of palette entries, sets `palette` to `true`
 * @param {number} [options.colors=256] - alternative spelling of `options.colours`, sets `palette` to `true`
 * @param {number} [options.dither=1.0] - level of Floyd-Steinberg error diffusion, sets `palette` to `true`
 * @param {boolean} [options.force=true] - force PNG output, otherwise attempt to use input format
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function png (options) {
  if (is.object(options)) {
    if (is.defined(options.progressive)) {
      this._setBooleanOption('pngProgressive', options.progressive);
    }
    if (is.defined(options.compressionLevel)) {
      if (is.integer(options.compressionLevel) && is.inRange(options.compressionLevel, 0, 9)) {
        this.options.pngCompressionLevel = options.compressionLevel;
      } else {
        throw is.invalidParameterError('compressionLevel', 'integer between 0 and 9', options.compressionLevel);
      }
    }
    if (is.defined(options.adaptiveFiltering)) {
      this._setBooleanOption('pngAdaptiveFiltering', options.adaptiveFiltering);
    }
    const colours = options.colours || options.colors;
    if (is.defined(colours)) {
      if (is.integer(colours) && is.inRange(colours, 2, 256)) {
        this.options.pngBitdepth = bitdepthFromColourCount(colours);
      } else {
        throw is.invalidParameterError('colours', 'integer between 2 and 256', colours);
      }
    }
    if (is.defined(options.palette)) {
      this._setBooleanOption('pngPalette', options.palette);
    } else if ([options.quality, options.effort, options.colours, options.colors, options.dither].some(is.defined)) {
      this._setBooleanOption('pngPalette', true);
    }
    if (this.options.pngPalette) {
      if (is.defined(options.quality)) {
        if (is.integer(options.quality) && is.inRange(options.quality, 0, 100)) {
          this.options.pngQuality = options.quality;
        } else {
          throw is.invalidParameterError('quality', 'integer between 0 and 100', options.quality);
        }
      }
      if (is.defined(options.effort)) {
        if (is.integer(options.effort) && is.inRange(options.effort, 1, 10)) {
          this.options.pngEffort = options.effort;
        } else {
          throw is.invalidParameterError('effort', 'integer between 1 and 10', options.effort);
        }
      }
      if (is.defined(options.dither)) {
        if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
          this.options.pngDither = options.dither;
        } else {
          throw is.invalidParameterError('dither', 'number between 0.0 and 1.0', options.dither);
        }
      }
    }
  }
  return this._updateFormatOut('png', options);
}

/**
 * Use these WebP options for output image.
 *
 * @example
 * // Convert any input to lossless WebP output
 * const data = await sharp(input)
 *   .webp({ lossless: true })
 *   .toBuffer();
 *
 * @example
 * // Optimise the file size of an animated WebP
 * const outputWebp = await sharp(inputWebp, { animated: true })
 *   .webp({ effort: 6 })
 *   .toBuffer();
 *
 * @param {Object} [options] - output options
 * @param {number} [options.quality=80] - quality, integer 1-100
 * @param {number} [options.alphaQuality=100] - quality of alpha layer, integer 0-100
 * @param {boolean} [options.lossless=false] - use lossless compression mode
 * @param {boolean} [options.nearLossless=false] - use near_lossless compression mode
 * @param {boolean} [options.smartSubsample=false] - use high quality chroma subsampling
 * @param {string} [options.preset='default'] - named preset for preprocessing/filtering, one of: default, photo, picture, drawing, icon, text
 * @param {number} [options.effort=4] - CPU effort, between 0 (fastest) and 6 (slowest)
 * @param {number} [options.loop=0] - number of animation iterations, use 0 for infinite animation
 * @param {number|number[]} [options.delay] - delay(s) between animation frames (in milliseconds)
 * @param {boolean} [options.minSize=false] - prevent use of animation key frames to minimise file size (slow)
 * @param {boolean} [options.mixed=false] - allow mixture of lossy and lossless animation frames (slow)
 * @param {boolean} [options.force=true] - force WebP output, otherwise attempt to use input format
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function webp (options) {
  if (is.object(options)) {
    if (is.defined(options.quality)) {
      if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
        this.options.webpQuality = options.quality;
      } else {
        throw is.invalidParameterError('quality', 'integer between 1 and 100', options.quality);
      }
    }
    if (is.defined(options.alphaQuality)) {
      if (is.integer(options.alphaQuality) && is.inRange(options.alphaQuality, 0, 100)) {
        this.options.webpAlphaQuality = options.alphaQuality;
      } else {
        throw is.invalidParameterError('alphaQuality', 'integer between 0 and 100', options.alphaQuality);
      }
    }
    if (is.defined(options.lossless)) {
      this._setBooleanOption('webpLossless', options.lossless);
    }
    if (is.defined(options.nearLossless)) {
      this._setBooleanOption('webpNearLossless', options.nearLossless);
    }
    if (is.defined(options.smartSubsample)) {
      this._setBooleanOption('webpSmartSubsample', options.smartSubsample);
    }
    if (is.defined(options.preset)) {
      if (is.string(options.preset) && is.inArray(options.preset, ['default', 'photo', 'picture', 'drawing', 'icon', 'text'])) {
        this.options.webpPreset = options.preset;
      } else {
        throw is.invalidParameterError('preset', 'one of: default, photo, picture, drawing, icon, text', options.preset);
      }
    }
    if (is.defined(options.effort)) {
      if (is.integer(options.effort) && is.inRange(options.effort, 0, 6)) {
        this.options.webpEffort = options.effort;
      } else {
        throw is.invalidParameterError('effort', 'integer between 0 and 6', options.effort);
      }
    }
    if (is.defined(options.minSize)) {
      this._setBooleanOption('webpMinSize', options.minSize);
    }
    if (is.defined(options.mixed)) {
      this._setBooleanOption('webpMixed', options.mixed);
    }
  }
  trySetAnimationOptions(options, this.options);
  return this._updateFormatOut('webp', options);
}

/**
 * Use these GIF options for the output image.
 *
 * The first entry in the palette is reserved for transparency.
 *
 * The palette of the input image will be re-used if possible.
 *
 * @since 0.30.0
 *
 * @example
 * // Convert PNG to GIF
 * await sharp(pngBuffer)
 *   .gif()
 *   .toBuffer();
 *
 * @example
 * // Convert animated WebP to animated GIF
 * await sharp('animated.webp', { animated: true })
 *   .toFile('animated.gif');
 *
 * @example
 * // Create a 128x128, cropped, non-dithered, animated thumbnail of an animated GIF
 * const out = await sharp('in.gif', { animated: true })
 *   .resize({ width: 128, height: 128 })
 *   .gif({ dither: 0 })
 *   .toBuffer();
 *
 * @example
 * // Lossy file size reduction of animated GIF
 * await sharp('in.gif', { animated: true })
 *   .gif({ interFrameMaxError: 8 })
 *   .toFile('optim.gif');
 *
 * @param {Object} [options] - output options
 * @param {boolean} [options.reuse=true] - re-use existing palette, otherwise generate new (slow)
 * @param {boolean} [options.progressive=false] - use progressive (interlace) scan
 * @param {number} [options.colours=256] - maximum number of palette entries, including transparency, between 2 and 256
 * @param {number} [options.colors=256] - alternative spelling of `options.colours`
 * @param {number} [options.effort=7] - CPU effort, between 1 (fastest) and 10 (slowest)
 * @param {number} [options.dither=1.0] - level of Floyd-Steinberg error diffusion, between 0 (least) and 1 (most)
 * @param {number} [options.interFrameMaxError=0] - maximum inter-frame error for transparency, between 0 (lossless) and 32
 * @param {number} [options.interPaletteMaxError=3] - maximum inter-palette error for palette reuse, between 0 and 256
 * @param {number} [options.loop=0] - number of animation iterations, use 0 for infinite animation
 * @param {number|number[]} [options.delay] - delay(s) between animation frames (in milliseconds)
 * @param {boolean} [options.force=true] - force GIF output, otherwise attempt to use input format
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function gif (options) {
  if (is.object(options)) {
    if (is.defined(options.reuse)) {
      this._setBooleanOption('gifReuse', options.reuse);
    }
    if (is.defined(options.progressive)) {
      this._setBooleanOption('gifProgressive', options.progressive);
    }
    const colours = options.colours || options.colors;
    if (is.defined(colours)) {
      if (is.integer(colours) && is.inRange(colours, 2, 256)) {
        this.options.gifBitdepth = bitdepthFromColourCount(colours);
      } else {
        throw is.invalidParameterError('colours', 'integer between 2 and 256', colours);
      }
    }
    if (is.defined(options.effort)) {
      if (is.number(options.effort) && is.inRange(options.effort, 1, 10)) {
        this.options.gifEffort = options.effort;
      } else {
        throw is.invalidParameterError('effort', 'integer between 1 and 10', options.effort);
      }
    }
    if (is.defined(options.dither)) {
      if (is.number(options.dither) && is.inRange(options.dither, 0, 1)) {
        this.options.gifDither = options.dither;
      } else {
        throw is.invalidParameterError('dither', 'number between 0.0 and 1.0', options.dither);
      }
    }
    if (is.defined(options.interFrameMaxError)) {
      if (is.number(options.interFrameMaxError) && is.inRange(options.interFrameMaxError, 0, 32)) {
        this.options.gifInterFrameMaxError = options.interFrameMaxError;
      } else {
        throw is.invalidParameterError('interFrameMaxError', 'number between 0.0 and 32.0', options.interFrameMaxError);
      }
    }
    if (is.defined(options.interPaletteMaxError)) {
      if (is.number(options.interPaletteMaxError) && is.inRange(options.interPaletteMaxError, 0, 256)) {
        this.options.gifInterPaletteMaxError = options.interPaletteMaxError;
      } else {
        throw is.invalidParameterError('interPaletteMaxError', 'number between 0.0 and 256.0', options.interPaletteMaxError);
      }
    }
  }
  trySetAnimationOptions(options, this.options);
  return this._updateFormatOut('gif', options);
}

/* istanbul ignore next */
/**
 * Use these JP2 options for output image.
 *
 * Requires libvips compiled with support for OpenJPEG.
 * The prebuilt binaries do not include this - see
 * {@link https://sharp.pixelplumbing.com/install#custom-libvips installing a custom libvips}.
 *
 * @example
 * // Convert any input to lossless JP2 output
 * const data = await sharp(input)
 *   .jp2({ lossless: true })
 *   .toBuffer();
 *
 * @example
 * // Convert any input to very high quality JP2 output
 * const data = await sharp(input)
 *   .jp2({
 *     quality: 100,
 *     chromaSubsampling: '4:4:4'
 *   })
 *   .toBuffer();
 *
 * @since 0.29.1
 *
 * @param {Object} [options] - output options
 * @param {number} [options.quality=80] - quality, integer 1-100
 * @param {boolean} [options.lossless=false] - use lossless compression mode
 * @param {number} [options.tileWidth=512] - horizontal tile size
 * @param {number} [options.tileHeight=512] - vertical tile size
 * @param {string} [options.chromaSubsampling='4:4:4'] - set to '4:2:0' to use chroma subsampling
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function jp2 (options) {
  if (!this.constructor.format.jp2k.output.buffer) {
    throw errJp2Save();
  }
  if (is.object(options)) {
    if (is.defined(options.quality)) {
      if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
        this.options.jp2Quality = options.quality;
      } else {
        throw is.invalidParameterError('quality', 'integer between 1 and 100', options.quality);
      }
    }
    if (is.defined(options.lossless)) {
      if (is.bool(options.lossless)) {
        this.options.jp2Lossless = options.lossless;
      } else {
        throw is.invalidParameterError('lossless', 'boolean', options.lossless);
      }
    }
    if (is.defined(options.tileWidth)) {
      if (is.integer(options.tileWidth) && is.inRange(options.tileWidth, 1, 32768)) {
        this.options.jp2TileWidth = options.tileWidth;
      } else {
        throw is.invalidParameterError('tileWidth', 'integer between 1 and 32768', options.tileWidth);
      }
    }
    if (is.defined(options.tileHeight)) {
      if (is.integer(options.tileHeight) && is.inRange(options.tileHeight, 1, 32768)) {
        this.options.jp2TileHeight = options.tileHeight;
      } else {
        throw is.invalidParameterError('tileHeight', 'integer between 1 and 32768', options.tileHeight);
      }
    }
    if (is.defined(options.chromaSubsampling)) {
      if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ['4:2:0', '4:4:4'])) {
        this.options.jp2ChromaSubsampling = options.chromaSubsampling;
      } else {
        throw is.invalidParameterError('chromaSubsampling', 'one of: 4:2:0, 4:4:4', options.chromaSubsampling);
      }
    }
  }
  return this._updateFormatOut('jp2', options);
}

/**
 * Set animation options if available.
 * @private
 *
 * @param {Object} [source] - output options
 * @param {number} [source.loop=0] - number of animation iterations, use 0 for infinite animation
 * @param {number[]} [source.delay] - list of delays between animation frames (in milliseconds)
 * @param {Object} [target] - target object for valid options
 * @throws {Error} Invalid options
 */
function trySetAnimationOptions (source, target) {
  if (is.object(source) && is.defined(source.loop)) {
    if (is.integer(source.loop) && is.inRange(source.loop, 0, 65535)) {
      target.loop = source.loop;
    } else {
      throw is.invalidParameterError('loop', 'integer between 0 and 65535', source.loop);
    }
  }
  if (is.object(source) && is.defined(source.delay)) {
    // We allow singular values as well
    if (is.integer(source.delay) && is.inRange(source.delay, 0, 65535)) {
      target.delay = [source.delay];
    } else if (
      Array.isArray(source.delay) &&
      source.delay.every(is.integer) &&
      source.delay.every(v => is.inRange(v, 0, 65535))) {
      target.delay = source.delay;
    } else {
      throw is.invalidParameterError('delay', 'integer or an array of integers between 0 and 65535', source.delay);
    }
  }
}

/**
 * Use these TIFF options for output image.
 *
 * The `density` can be set in pixels/inch via {@link #withmetadata|withMetadata}
 * instead of providing `xres` and `yres` in pixels/mm.
 *
 * @example
 * // Convert SVG input to LZW-compressed, 1 bit per pixel TIFF output
 * sharp('input.svg')
 *   .tiff({
 *     compression: 'lzw',
 *     bitdepth: 1
 *   })
 *   .toFile('1-bpp-output.tiff')
 *   .then(info => { ... });
 *
 * @param {Object} [options] - output options
 * @param {number} [options.quality=80] - quality, integer 1-100
 * @param {boolean} [options.force=true] - force TIFF output, otherwise attempt to use input format
 * @param {string} [options.compression='jpeg'] - compression options: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k
 * @param {string} [options.predictor='horizontal'] - compression predictor options: none, horizontal, float
 * @param {boolean} [options.pyramid=false] - write an image pyramid
 * @param {boolean} [options.tile=false] - write a tiled tiff
 * @param {number} [options.tileWidth=256] - horizontal tile size
 * @param {number} [options.tileHeight=256] - vertical tile size
 * @param {number} [options.xres=1.0] - horizontal resolution in pixels/mm
 * @param {number} [options.yres=1.0] - vertical resolution in pixels/mm
 * @param {string} [options.resolutionUnit='inch'] - resolution unit options: inch, cm
 * @param {number} [options.bitdepth=8] - reduce bitdepth to 1, 2 or 4 bit
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function tiff (options) {
  if (is.object(options)) {
    if (is.defined(options.quality)) {
      if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
        this.options.tiffQuality = options.quality;
      } else {
        throw is.invalidParameterError('quality', 'integer between 1 and 100', options.quality);
      }
    }
    if (is.defined(options.bitdepth)) {
      if (is.integer(options.bitdepth) && is.inArray(options.bitdepth, [1, 2, 4, 8])) {
        this.options.tiffBitdepth = options.bitdepth;
      } else {
        throw is.invalidParameterError('bitdepth', '1, 2, 4 or 8', options.bitdepth);
      }
    }
    // tiling
    if (is.defined(options.tile)) {
      this._setBooleanOption('tiffTile', options.tile);
    }
    if (is.defined(options.tileWidth)) {
      if (is.integer(options.tileWidth) && options.tileWidth > 0) {
        this.options.tiffTileWidth = options.tileWidth;
      } else {
        throw is.invalidParameterError('tileWidth', 'integer greater than zero', options.tileWidth);
      }
    }
    if (is.defined(options.tileHeight)) {
      if (is.integer(options.tileHeight) && options.tileHeight > 0) {
        this.options.tiffTileHeight = options.tileHeight;
      } else {
        throw is.invalidParameterError('tileHeight', 'integer greater than zero', options.tileHeight);
      }
    }
    // pyramid
    if (is.defined(options.pyramid)) {
      this._setBooleanOption('tiffPyramid', options.pyramid);
    }
    // resolution
    if (is.defined(options.xres)) {
      if (is.number(options.xres) && options.xres > 0) {
        this.options.tiffXres = options.xres;
      } else {
        throw is.invalidParameterError('xres', 'number greater than zero', options.xres);
      }
    }
    if (is.defined(options.yres)) {
      if (is.number(options.yres) && options.yres > 0) {
        this.options.tiffYres = options.yres;
      } else {
        throw is.invalidParameterError('yres', 'number greater than zero', options.yres);
      }
    }
    // compression
    if (is.defined(options.compression)) {
      if (is.string(options.compression) && is.inArray(options.compression, ['none', 'jpeg', 'deflate', 'packbits', 'ccittfax4', 'lzw', 'webp', 'zstd', 'jp2k'])) {
        this.options.tiffCompression = options.compression;
      } else {
        throw is.invalidParameterError('compression', 'one of: none, jpeg, deflate, packbits, ccittfax4, lzw, webp, zstd, jp2k', options.compression);
      }
    }
    // predictor
    if (is.defined(options.predictor)) {
      if (is.string(options.predictor) && is.inArray(options.predictor, ['none', 'horizontal', 'float'])) {
        this.options.tiffPredictor = options.predictor;
      } else {
        throw is.invalidParameterError('predictor', 'one of: none, horizontal, float', options.predictor);
      }
    }
    // resolutionUnit
    if (is.defined(options.resolutionUnit)) {
      if (is.string(options.resolutionUnit) && is.inArray(options.resolutionUnit, ['inch', 'cm'])) {
        this.options.tiffResolutionUnit = options.resolutionUnit;
      } else {
        throw is.invalidParameterError('resolutionUnit', 'one of: inch, cm', options.resolutionUnit);
      }
    }
  }
  return this._updateFormatOut('tiff', options);
}

/**
 * Use these AVIF options for output image.
 *
 * Whilst it is possible to create AVIF images smaller than 16x16 pixels,
 * most web browsers do not display these properly.
 *
 * AVIF image sequences are not supported.
 *
 * @example
 * const data = await sharp(input)
 *   .avif({ effort: 2 })
 *   .toBuffer();
 *
 * @example
 * const data = await sharp(input)
 *   .avif({ lossless: true })
 *   .toBuffer();
 *
 * @since 0.27.0
 *
 * @param {Object} [options] - output options
 * @param {number} [options.quality=50] - quality, integer 1-100
 * @param {boolean} [options.lossless=false] - use lossless compression
 * @param {number} [options.effort=4] - CPU effort, between 0 (fastest) and 9 (slowest)
 * @param {string} [options.chromaSubsampling='4:4:4'] - set to '4:2:0' to use chroma subsampling
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function avif (options) {
  return this.heif({ ...options, compression: 'av1' });
}

/**
 * Use these HEIF options for output image.
 *
 * Support for patent-encumbered HEIC images using `hevc` compression requires the use of a
 * globally-installed libvips compiled with support for libheif, libde265 and x265.
 *
 * @example
 * const data = await sharp(input)
 *   .heif({ compression: 'hevc' })
 *   .toBuffer();
 *
 * @since 0.23.0
 *
 * @param {Object} [options] - output options
 * @param {number} [options.quality=50] - quality, integer 1-100
 * @param {string} [options.compression='av1'] - compression format: av1, hevc
 * @param {boolean} [options.lossless=false] - use lossless compression
 * @param {number} [options.effort=4] - CPU effort, between 0 (fastest) and 9 (slowest)
 * @param {string} [options.chromaSubsampling='4:4:4'] - set to '4:2:0' to use chroma subsampling
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function heif (options) {
  if (is.object(options)) {
    if (is.defined(options.quality)) {
      if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
        this.options.heifQuality = options.quality;
      } else {
        throw is.invalidParameterError('quality', 'integer between 1 and 100', options.quality);
      }
    }
    if (is.defined(options.lossless)) {
      if (is.bool(options.lossless)) {
        this.options.heifLossless = options.lossless;
      } else {
        throw is.invalidParameterError('lossless', 'boolean', options.lossless);
      }
    }
    if (is.defined(options.compression)) {
      if (is.string(options.compression) && is.inArray(options.compression, ['av1', 'hevc'])) {
        this.options.heifCompression = options.compression;
      } else {
        throw is.invalidParameterError('compression', 'one of: av1, hevc', options.compression);
      }
    }
    if (is.defined(options.effort)) {
      if (is.integer(options.effort) && is.inRange(options.effort, 0, 9)) {
        this.options.heifEffort = options.effort;
      } else {
        throw is.invalidParameterError('effort', 'integer between 0 and 9', options.effort);
      }
    }
    if (is.defined(options.chromaSubsampling)) {
      if (is.string(options.chromaSubsampling) && is.inArray(options.chromaSubsampling, ['4:2:0', '4:4:4'])) {
        this.options.heifChromaSubsampling = options.chromaSubsampling;
      } else {
        throw is.invalidParameterError('chromaSubsampling', 'one of: 4:2:0, 4:4:4', options.chromaSubsampling);
      }
    }
  }
  return this._updateFormatOut('heif', options);
}

/**
 * Use these JPEG-XL (JXL) options for output image.
 *
 * This feature is experimental, please do not use in production systems.
 *
 * Requires libvips compiled with support for libjxl.
 * The prebuilt binaries do not include this - see
 * {@link https://sharp.pixelplumbing.com/install#custom-libvips installing a custom libvips}.
 *
 * Image metadata (EXIF, XMP) is unsupported.
 *
 * @since 0.31.3
 *
 * @param {Object} [options] - output options
 * @param {number} [options.distance=1.0] - maximum encoding error, between 0 (highest quality) and 15 (lowest quality)
 * @param {number} [options.quality] - calculate `distance` based on JPEG-like quality, between 1 and 100, overrides distance if specified
 * @param {number} [options.decodingTier=0] - target decode speed tier, between 0 (highest quality) and 4 (lowest quality)
 * @param {boolean} [options.lossless=false] - use lossless compression
 * @param {number} [options.effort=7] - CPU effort, between 3 (fastest) and 9 (slowest)
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function jxl (options) {
  if (is.object(options)) {
    if (is.defined(options.quality)) {
      if (is.integer(options.quality) && is.inRange(options.quality, 1, 100)) {
        // https://github.com/libjxl/libjxl/blob/0aeea7f180bafd6893c1db8072dcb67d2aa5b03d/tools/cjxl_main.cc#L640-L644
        this.options.jxlDistance = options.quality >= 30
          ? 0.1 + (100 - options.quality) * 0.09
          : 53 / 3000 * options.quality * options.quality - 23 / 20 * options.quality + 25;
      } else {
        throw is.invalidParameterError('quality', 'integer between 1 and 100', options.quality);
      }
    } else if (is.defined(options.distance)) {
      if (is.number(options.distance) && is.inRange(options.distance, 0, 15)) {
        this.options.jxlDistance = options.distance;
      } else {
        throw is.invalidParameterError('distance', 'number between 0.0 and 15.0', options.distance);
      }
    }
    if (is.defined(options.decodingTier)) {
      if (is.integer(options.decodingTier) && is.inRange(options.decodingTier, 0, 4)) {
        this.options.jxlDecodingTier = options.decodingTier;
      } else {
        throw is.invalidParameterError('decodingTier', 'integer between 0 and 4', options.decodingTier);
      }
    }
    if (is.defined(options.lossless)) {
      if (is.bool(options.lossless)) {
        this.options.jxlLossless = options.lossless;
      } else {
        throw is.invalidParameterError('lossless', 'boolean', options.lossless);
      }
    }
    if (is.defined(options.effort)) {
      if (is.integer(options.effort) && is.inRange(options.effort, 3, 9)) {
        this.options.jxlEffort = options.effort;
      } else {
        throw is.invalidParameterError('effort', 'integer between 3 and 9', options.effort);
      }
    }
  }
  return this._updateFormatOut('jxl', options);
}

/**
 * Force output to be raw, uncompressed pixel data.
 * Pixel ordering is left-to-right, top-to-bottom, without padding.
 * Channel ordering will be RGB or RGBA for non-greyscale colourspaces.
 *
 * @example
 * // Extract raw, unsigned 8-bit RGB pixel data from JPEG input
 * const { data, info } = await sharp('input.jpg')
 *   .raw()
 *   .toBuffer({ resolveWithObject: true });
 *
 * @example
 * // Extract alpha channel as raw, unsigned 16-bit pixel data from PNG input
 * const data = await sharp('input.png')
 *   .ensureAlpha()
 *   .extractChannel(3)
 *   .toColourspace('b-w')
 *   .raw({ depth: 'ushort' })
 *   .toBuffer();
 *
 * @param {Object} [options] - output options
 * @param {string} [options.depth='uchar'] - bit depth, one of: char, uchar (default), short, ushort, int, uint, float, complex, double, dpcomplex
 * @returns {Sharp}
 * @throws {Error} Invalid options
 */
function raw (options) {
  if (is.object(options)) {
    if (is.defined(options.depth)) {
      if (is.string(options.depth) && is.inArray(options.depth,
        ['char', 'uchar', 'short', 'ushort', 'int', 'uint', 'float', 'complex', 'double', 'dpcomplex']
      )) {
        this.options.rawDepth = options.depth;
      } else {
        throw is.invalidParameterError('depth', 'one of: char, uchar, short, ushort, int, uint, float, complex, double, dpcomplex', options.depth);
      }
    }
  }
  return this._updateFormatOut('raw');
}

/**
 * Use tile-based deep zoom (image pyramid) output.
 *
 * Set the format and options for tile images via the `toFormat`, `jpeg`, `png` or `webp` functions.
 * Use a `.zip` or `.szi` file extension with `toFile` to write to a compressed archive file format.
 *
 * The container will be set to `zip` when the output is a Buffer or Stream, otherwise it will default to `fs`.
 *
 * Requires libvips compiled with support for libgsf.
 * The prebuilt binaries do not include this - see
 * {@link https://sharp.pixelplumbing.com/install#custom-libvips installing a custom libvips}.
 *
 * @example
 *  sharp('input.tiff')
 *   .png()
 *   .tile({
 *     size: 512
 *   })
 *   .toFile('output.dz', function(err, info) {
 *     // output.dzi is the Deep Zoom XML definition
 *     // output_files contains 512x512 tiles grouped by zoom level
 *   });
 *
 * @example
 * const zipFileWithTiles = await sharp(input)
 *   .tile({ basename: "tiles" })
 *   .toBuffer();
 *
 * @example
 * const iiififier = sharp().tile({ layout: "iiif" });
 * readableStream
 *   .pipe(iiififier)
 *   .pipe(writeableStream);
 *
 * @param {Object} [options]
 * @param {number} [options.size=256] tile size in pixels, a value between 1 and 8192.
 * @param {number} [options.overlap=0] tile overlap in pixels, a value between 0 and 8192.
 * @param {number} [options.angle=0] tile angle of rotation, must be a multiple of 90.
 * @param {string|Object} [options.background={r: 255, g: 255, b: 255, alpha: 1}] - background colour, parsed by the [color](https://www.npmjs.org/package/color) module, defaults to white without transparency.
 * @param {string} [options.depth] how deep to make the pyramid, possible values are `onepixel`, `onetile` or `one`, default based on layout.
 * @param {number} [options.skipBlanks=-1] threshold to skip tile generation, a value 0 - 255 for 8-bit images or 0 - 65535 for 16-bit images
 * @param {string} [options.container='fs'] tile container, with value `fs` (filesystem) or `zip` (compressed file).
 * @param {string} [options.layout='dz'] filesystem layout, possible values are `dz`, `iiif`, `iiif3`, `zoomify` or `google`.
 * @param {boolean} [options.centre=false] centre image in tile.
 * @param {boolean} [options.center=false] alternative spelling of centre.
 * @param {string} [options.id='https://example.com/iiif'] when `layout` is `iiif`/`iiif3`, sets the `@id`/`id` attribute of `info.json`
 * @param {string} [options.basename] the name of the directory within the zip file when container is `zip`.
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
 */
function tile (options) {
  if (is.object(options)) {
    // Size of square tiles, in pixels
    if (is.defined(options.size)) {
      if (is.integer(options.size) && is.inRange(options.size, 1, 8192)) {
        this.options.tileSize = options.size;
      } else {
        throw is.invalidParameterError('size', 'integer between 1 and 8192', options.size);
      }
    }
    // Overlap of tiles, in pixels
    if (is.defined(options.overlap)) {
      if (is.integer(options.overlap) && is.inRange(options.overlap, 0, 8192)) {
        if (options.overlap > this.options.tileSize) {
          throw is.invalidParameterError('overlap', `<= size (${this.options.tileSize})`, options.overlap);
        }
        this.options.tileOverlap = options.overlap;
      } else {
        throw is.invalidParameterError('overlap', 'integer between 0 and 8192', options.overlap);
      }
    }
    // Container
    if (is.defined(options.container)) {
      if (is.string(options.container) && is.inArray(options.container, ['fs', 'zip'])) {
        this.options.tileContainer = options.container;
      } else {
        throw is.invalidParameterError('container', 'one of: fs, zip', options.container);
      }
    }
    // Layout
    if (is.defined(options.layout)) {
      if (is.string(options.layout) && is.inArray(options.layout, ['dz', 'google', 'iiif', 'iiif3', 'zoomify'])) {
        this.options.tileLayout = options.layout;
      } else {
        throw is.invalidParameterError('layout', 'one of: dz, google, iiif, iiif3, zoomify', options.layout);
      }
    }
    // Angle of rotation,
    if (is.defined(options.angle)) {
      if (is.integer(options.angle) && !(options.angle % 90)) {
        this.options.tileAngle = options.angle;
      } else {
        throw is.invalidParameterError('angle', 'positive/negative multiple of 90', options.angle);
      }
    }
    // Background colour
    this._setBackgroundColourOption('tileBackground', options.background);
    // Depth of tiles
    if (is.defined(options.depth)) {
      if (is.string(options.depth) && is.inArray(options.depth, ['onepixel', 'onetile', 'one'])) {
        this.options.tileDepth = options.depth;
      } else {
        throw is.invalidParameterError('depth', 'one of: onepixel, onetile, one', options.depth);
      }
    }
    // Threshold to skip blank tiles
    if (is.defined(options.skipBlanks)) {
      if (is.integer(options.skipBlanks) && is.inRange(options.skipBlanks, -1, 65535)) {
        this.options.tileSkipBlanks = options.skipBlanks;
      } else {
        throw is.invalidParameterError('skipBlanks', 'integer between -1 and 255/65535', options.skipBlanks);
      }
    } else if (is.defined(options.layout) && options.layout === 'google') {
      this.options.tileSkipBlanks = 5;
    }
    // Center image in tile
    const centre = is.bool(options.center) ? options.center : options.centre;
    if (is.defined(centre)) {
      this._setBooleanOption('tileCentre', centre);
    }
    // @id attribute for IIIF layout
    if (is.defined(options.id)) {
      if (is.string(options.id)) {
        this.options.tileId = options.id;
      } else {
        throw is.invalidParameterError('id', 'string', options.id);
      }
    }
    // Basename for zip container
    if (is.defined(options.basename)) {
      if (is.string(options.basename)) {
        this.options.tileBasename = options.basename;
      } else {
        throw is.invalidParameterError('basename', 'string', options.basename);
      }
    }
  }
  // Format
  if (is.inArray(this.options.formatOut, ['jpeg', 'png', 'webp'])) {
    this.options.tileFormat = this.options.formatOut;
  } else if (this.options.formatOut !== 'input') {
    throw is.invalidParameterError('format', 'one of: jpeg, png, webp', this.options.formatOut);
  }
  return this._updateFormatOut('dz');
}

/**
 * Set a timeout for processing, in seconds.
 * Use a value of zero to continue processing indefinitely, the default behaviour.
 *
 * The clock starts when libvips opens an input image for processing.
 * Time spent waiting for a libuv thread to become available is not included.
 *
 * @example
 * // Ensure processing takes no longer than 3 seconds
 * try {
 *   const data = await sharp(input)
 *     .blur(1000)
 *     .timeout({ seconds: 3 })
 *     .toBuffer();
 * } catch (err) {
 *   if (err.message.includes('timeout')) { ... }
 * }
 *
 * @since 0.29.2
 *
 * @param {Object} options
 * @param {number} options.seconds - Number of seconds after which processing will be stopped
 * @returns {Sharp}
 */
function timeout (options) {
  if (!is.plainObject(options)) {
    throw is.invalidParameterError('options', 'object', options);
  }
  if (is.integer(options.seconds) && is.inRange(options.seconds, 0, 3600)) {
    this.options.timeoutSeconds = options.seconds;
  } else {
    throw is.invalidParameterError('seconds', 'integer between 0 and 3600', options.seconds);
  }
  return this;
}

/**
 * Update the output format unless options.force is false,
 * in which case revert to input format.
 * @private
 * @param {string} formatOut
 * @param {Object} [options]
 * @param {boolean} [options.force=true] - force output format, otherwise attempt to use input format
 * @returns {Sharp}
 */
function _updateFormatOut (formatOut, options) {
  if (!(is.object(options) && options.force === false)) {
    this.options.formatOut = formatOut;
  }
  return this;
}

/**
 * Update a boolean attribute of the this.options Object.
 * @private
 * @param {string} key
 * @param {boolean} val
 * @throws {Error} Invalid key
 */
function _setBooleanOption (key, val) {
  if (is.bool(val)) {
    this.options[key] = val;
  } else {
    throw is.invalidParameterError(key, 'boolean', val);
  }
}

/**
 * Called by a WriteableStream to notify us it is ready for data.
 * @private
 */
function _read () {
  /* istanbul ignore else */
  if (!this.options.streamOut) {
    this.options.streamOut = true;
    this._pipeline();
  }
}

/**
 * Invoke the C++ image processing pipeline
 * Supports callback, stream and promise variants
 * @private
 */
function _pipeline (callback) {
  if (typeof callback === 'function') {
    // output=file/buffer
    if (this._isStreamInput()) {
      // output=file/buffer, input=stream
      this.on('finish', () => {
        this._flattenBufferIn();
        sharp.pipeline(this.options, callback);
      });
    } else {
      // output=file/buffer, input=file/buffer
      sharp.pipeline(this.options, callback);
    }
    return this;
  } else if (this.options.streamOut) {
    // output=stream
    if (this._isStreamInput()) {
      // output=stream, input=stream
      this.once('finish', () => {
        this._flattenBufferIn();
        sharp.pipeline(this.options, (err, data, info) => {
          if (err) {
            this.emit('error', err);
          } else {
            this.emit('info', info);
            this.push(data);
          }
          this.push(null);
          this.on('end', () => this.emit('close'));
        });
      });
      if (this.streamInFinished) {
        this.emit('finish');
      }
    } else {
      // output=stream, input=file/buffer
      sharp.pipeline(this.options, (err, data, info) => {
        if (err) {
          this.emit('error', err);
        } else {
          this.emit('info', info);
          this.push(data);
        }
        this.push(null);
        this.on('end', () => this.emit('close'));
      });
    }
    return this;
  } else {
    // output=promise
    if (this._isStreamInput()) {
      // output=promise, input=stream
      return new Promise((resolve, reject) => {
        this.once('finish', () => {
          this._flattenBufferIn();
          sharp.pipeline(this.options, (err, data, info) => {
            if (err) {
              reject(err);
            } else {
              if (this.options.resolveWithObject) {
                resolve({ data, info });
              } else {
                resolve(data);
              }
            }
          });
        });
      });
    } else {
      // output=promise, input=file/buffer
      return new Promise((resolve, reject) => {
        sharp.pipeline(this.options, (err, data, info) => {
          if (err) {
            reject(err);
          } else {
            if (this.options.resolveWithObject) {
              resolve({ data: data, info: info });
            } else {
              resolve(data);
            }
          }
        });
      });
    }
  }
}

/**
 * Decorate the Sharp prototype with output-related functions.
 * @private
 */
module.exports = function (Sharp) {
  Object.assign(Sharp.prototype, {
    // Public
    toFile,
    toBuffer,
    withMetadata,
    toFormat,
    jpeg,
    jp2,
    png,
    webp,
    tiff,
    avif,
    heif,
    jxl,
    gif,
    raw,
    tile,
    timeout,
    // Private
    _updateFormatOut,
    _setBooleanOption,
    _read,
    _pipeline
  });
};
