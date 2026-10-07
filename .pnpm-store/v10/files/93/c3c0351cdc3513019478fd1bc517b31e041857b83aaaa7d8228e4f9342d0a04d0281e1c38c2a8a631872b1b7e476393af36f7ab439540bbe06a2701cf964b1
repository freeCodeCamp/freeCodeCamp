// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const is = require('./is');

/**
 * Blend modes.
 * @member
 * @private
 */
const blend = {
  clear: 'clear',
  source: 'source',
  over: 'over',
  in: 'in',
  out: 'out',
  atop: 'atop',
  dest: 'dest',
  'dest-over': 'dest-over',
  'dest-in': 'dest-in',
  'dest-out': 'dest-out',
  'dest-atop': 'dest-atop',
  xor: 'xor',
  add: 'add',
  saturate: 'saturate',
  multiply: 'multiply',
  screen: 'screen',
  overlay: 'overlay',
  darken: 'darken',
  lighten: 'lighten',
  'colour-dodge': 'colour-dodge',
  'color-dodge': 'colour-dodge',
  'colour-burn': 'colour-burn',
  'color-burn': 'colour-burn',
  'hard-light': 'hard-light',
  'soft-light': 'soft-light',
  difference: 'difference',
  exclusion: 'exclusion'
};

/**
 * Composite image(s) over the processed (resized, extracted etc.) image.
 *
 * The images to composite must be the same size or smaller than the processed image.
 * If both `top` and `left` options are provided, they take precedence over `gravity`.
 *
 * Any resize, rotate or extract operations in the same processing pipeline
 * will always be applied to the input image before composition.
 *
 * The `blend` option can be one of `clear`, `source`, `over`, `in`, `out`, `atop`,
 * `dest`, `dest-over`, `dest-in`, `dest-out`, `dest-atop`,
 * `xor`, `add`, `saturate`, `multiply`, `screen`, `overlay`, `darken`, `lighten`,
 * `colour-dodge`, `color-dodge`, `colour-burn`,`color-burn`,
 * `hard-light`, `soft-light`, `difference`, `exclusion`.
 *
 * More information about blend modes can be found at
 * https://www.libvips.org/API/current/libvips-conversion.html#VipsBlendMode
 * and https://www.cairographics.org/operators/
 *
 * @since 0.22.0
 *
 * @example
 * await sharp(background)
 *   .composite([
 *     { input: layer1, gravity: 'northwest' },
 *     { input: layer2, gravity: 'southeast' },
 *   ])
 *   .toFile('combined.png');
 *
 * @example
 * const output = await sharp('input.gif', { animated: true })
 *   .composite([
 *     { input: 'overlay.png', tile: true, blend: 'saturate' }
 *   ])
 *   .toBuffer();
 *
 * @example
 * sharp('input.png')
 *   .rotate(180)
 *   .resize(300)
 *   .flatten( { background: '#ff6600' } )
 *   .composite([{ input: 'overlay.png', gravity: 'southeast' }])
 *   .sharpen()
 *   .withMetadata()
 *   .webp( { quality: 90 } )
 *   .toBuffer()
 *   .then(function(outputBuffer) {
 *     // outputBuffer contains upside down, 300px wide, alpha channel flattened
 *     // onto orange background, composited with overlay.png with SE gravity,
 *     // sharpened, with metadata, 90% quality WebP image data. Phew!
 *   });
 *
 * @param {Object[]} images - Ordered list of images to composite
 * @param {Buffer|String} [images[].input] - Buffer containing image data, String containing the path to an image file, or Create object (see below)
 * @param {Object} [images[].input.create] - describes a blank overlay to be created.
 * @param {Number} [images[].input.create.width]
 * @param {Number} [images[].input.create.height]
 * @param {Number} [images[].input.create.channels] - 3-4
 * @param {String|Object} [images[].input.create.background] - parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha.
 * @param {Object} [images[].input.text] - describes a new text image to be created.
 * @param {string} [images[].input.text.text] - text to render as a UTF-8 string. It can contain Pango markup, for example `<i>Le</i>Monde`.
 * @param {string} [images[].input.text.font] - font name to render with.
 * @param {string} [images[].input.text.fontfile] - absolute filesystem path to a font file that can be used by `font`.
 * @param {number} [images[].input.text.width=0] - integral number of pixels to word-wrap at. Lines of text wider than this will be broken at word boundaries.
 * @param {number} [images[].input.text.height=0] - integral number of pixels high. When defined, `dpi` will be ignored and the text will automatically fit the pixel resolution defined by `width` and `height`. Will be ignored if `width` is not specified or set to 0.
 * @param {string} [images[].input.text.align='left'] - text alignment (`'left'`, `'centre'`, `'center'`, `'right'`).
 * @param {boolean} [images[].input.text.justify=false] - set this to true to apply justification to the text.
 * @param {number} [images[].input.text.dpi=72] - the resolution (size) at which to render the text. Does not take effect if `height` is specified.
 * @param {boolean} [images[].input.text.rgba=false] - set this to true to enable RGBA output. This is useful for colour emoji rendering, or support for Pango markup features like `<span foreground="red">Red!</span>`.
 * @param {number} [images[].input.text.spacing=0] - text line height in points. Will use the font line height if none is specified.
 * @param {String} [images[].blend='over'] - how to blend this image with the image below.
 * @param {String} [images[].gravity='centre'] - gravity at which to place the overlay.
 * @param {Number} [images[].top] - the pixel offset from the top edge.
 * @param {Number} [images[].left] - the pixel offset from the left edge.
 * @param {Boolean} [images[].tile=false] - set to true to repeat the overlay image across the entire image with the given `gravity`.
 * @param {Boolean} [images[].premultiplied=false] - set to true to avoid premultiplying the image below. Equivalent to the `--premultiplied` vips option.
 * @param {Number} [images[].density=72] - number representing the DPI for vector overlay image.
 * @param {Object} [images[].raw] - describes overlay when using raw pixel data.
 * @param {Number} [images[].raw.width]
 * @param {Number} [images[].raw.height]
 * @param {Number} [images[].raw.channels]
 * @param {boolean} [images[].animated=false] - Set to `true` to read all frames/pages of an animated image.
 * @param {string} [images[].failOn='warning'] - @see {@link /api-constructor#parameters|constructor parameters}
 * @param {number|boolean} [images[].limitInputPixels=268402689] - @see {@link /api-constructor#parameters|constructor parameters}
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
 */
function composite (images) {
  if (!Array.isArray(images)) {
    throw is.invalidParameterError('images to composite', 'array', images);
  }
  this.options.composite = images.map(image => {
    if (!is.object(image)) {
      throw is.invalidParameterError('image to composite', 'object', image);
    }
    const inputOptions = this._inputOptionsFromObject(image);
    const composite = {
      input: this._createInputDescriptor(image.input, inputOptions, { allowStream: false }),
      blend: 'over',
      tile: false,
      left: 0,
      top: 0,
      hasOffset: false,
      gravity: 0,
      premultiplied: false
    };
    if (is.defined(image.blend)) {
      if (is.string(blend[image.blend])) {
        composite.blend = blend[image.blend];
      } else {
        throw is.invalidParameterError('blend', 'valid blend name', image.blend);
      }
    }
    if (is.defined(image.tile)) {
      if (is.bool(image.tile)) {
        composite.tile = image.tile;
      } else {
        throw is.invalidParameterError('tile', 'boolean', image.tile);
      }
    }
    if (is.defined(image.left)) {
      if (is.integer(image.left)) {
        composite.left = image.left;
      } else {
        throw is.invalidParameterError('left', 'integer', image.left);
      }
    }
    if (is.defined(image.top)) {
      if (is.integer(image.top)) {
        composite.top = image.top;
      } else {
        throw is.invalidParameterError('top', 'integer', image.top);
      }
    }
    if (is.defined(image.top) !== is.defined(image.left)) {
      throw new Error('Expected both left and top to be set');
    } else {
      composite.hasOffset = is.integer(image.top) && is.integer(image.left);
    }
    if (is.defined(image.gravity)) {
      if (is.integer(image.gravity) && is.inRange(image.gravity, 0, 8)) {
        composite.gravity = image.gravity;
      } else if (is.string(image.gravity) && is.integer(this.constructor.gravity[image.gravity])) {
        composite.gravity = this.constructor.gravity[image.gravity];
      } else {
        throw is.invalidParameterError('gravity', 'valid gravity', image.gravity);
      }
    }
    if (is.defined(image.premultiplied)) {
      if (is.bool(image.premultiplied)) {
        composite.premultiplied = image.premultiplied;
      } else {
        throw is.invalidParameterError('premultiplied', 'boolean', image.premultiplied);
      }
    }
    return composite;
  });
  return this;
}

/**
 * Decorate the Sharp prototype with composite-related functions.
 * @private
 */
module.exports = function (Sharp) {
  Sharp.prototype.composite = composite;
  Sharp.blend = blend;
};
