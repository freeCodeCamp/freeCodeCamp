// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const is = require('./is');

/**
 * Weighting to apply when using contain/cover fit.
 * @member
 * @private
 */
const gravity = {
  center: 0,
  centre: 0,
  north: 1,
  east: 2,
  south: 3,
  west: 4,
  northeast: 5,
  southeast: 6,
  southwest: 7,
  northwest: 8
};

/**
 * Position to apply when using contain/cover fit.
 * @member
 * @private
 */
const position = {
  top: 1,
  right: 2,
  bottom: 3,
  left: 4,
  'right top': 5,
  'right bottom': 6,
  'left bottom': 7,
  'left top': 8
};

/**
 * How to extend the image.
 * @member
 * @private
 */
const extendWith = {
  background: 'background',
  copy: 'copy',
  repeat: 'repeat',
  mirror: 'mirror'
};

/**
 * Strategies for automagic cover behaviour.
 * @member
 * @private
 */
const strategy = {
  entropy: 16,
  attention: 17
};

/**
 * Reduction kernels.
 * @member
 * @private
 */
const kernel = {
  nearest: 'nearest',
  cubic: 'cubic',
  mitchell: 'mitchell',
  lanczos2: 'lanczos2',
  lanczos3: 'lanczos3'
};

/**
 * Methods by which an image can be resized to fit the provided dimensions.
 * @member
 * @private
 */
const fit = {
  contain: 'contain',
  cover: 'cover',
  fill: 'fill',
  inside: 'inside',
  outside: 'outside'
};

/**
 * Map external fit property to internal canvas property.
 * @member
 * @private
 */
const mapFitToCanvas = {
  contain: 'embed',
  cover: 'crop',
  fill: 'ignore_aspect',
  inside: 'max',
  outside: 'min'
};

/**
 * @private
 */
function isRotationExpected (options) {
  return (options.angle % 360) !== 0 || options.useExifOrientation === true || options.rotationAngle !== 0;
}

/**
 * @private
 */
function isResizeExpected (options) {
  return options.width !== -1 || options.height !== -1;
}

/**
 * Resize image to `width`, `height` or `width x height`.
 *
 * When both a `width` and `height` are provided, the possible methods by which the image should **fit** these are:
 * - `cover`: (default) Preserving aspect ratio, attempt to ensure the image covers both provided dimensions by cropping/clipping to fit.
 * - `contain`: Preserving aspect ratio, contain within both provided dimensions using "letterboxing" where necessary.
 * - `fill`: Ignore the aspect ratio of the input and stretch to both provided dimensions.
 * - `inside`: Preserving aspect ratio, resize the image to be as large as possible while ensuring its dimensions are less than or equal to both those specified.
 * - `outside`: Preserving aspect ratio, resize the image to be as small as possible while ensuring its dimensions are greater than or equal to both those specified.
 *
 * Some of these values are based on the [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property.
 *
 * <img alt="Examples of various values for the fit property when resizing" width="100%" style="aspect-ratio: 998/243" src="https://cdn.jsdelivr.net/gh/lovell/sharp@main/docs/image/api-resize-fit.svg">
 *
 * When using a **fit** of `cover` or `contain`, the default **position** is `centre`. Other options are:
 * - `sharp.position`: `top`, `right top`, `right`, `right bottom`, `bottom`, `left bottom`, `left`, `left top`.
 * - `sharp.gravity`: `north`, `northeast`, `east`, `southeast`, `south`, `southwest`, `west`, `northwest`, `center` or `centre`.
 * - `sharp.strategy`: `cover` only, dynamically crop using either the `entropy` or `attention` strategy.
 *
 * Some of these values are based on the [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) CSS property.
 *
 * The experimental strategy-based approach resizes so one dimension is at its target length
 * then repeatedly ranks edge regions, discarding the edge with the lowest score based on the selected strategy.
 * - `entropy`: focus on the region with the highest [Shannon entropy](https://en.wikipedia.org/wiki/Entropy_%28information_theory%29).
 * - `attention`: focus on the region with the highest luminance frequency, colour saturation and presence of skin tones.
 *
 * Possible interpolation kernels are:
 * - `nearest`: Use [nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation).
 * - `cubic`: Use a [Catmull-Rom spline](https://en.wikipedia.org/wiki/Centripetal_Catmull%E2%80%93Rom_spline).
 * - `mitchell`: Use a [Mitchell-Netravali spline](https://www.cs.utexas.edu/~fussell/courses/cs384g-fall2013/lectures/mitchell/Mitchell.pdf).
 * - `lanczos2`: Use a [Lanczos kernel](https://en.wikipedia.org/wiki/Lanczos_resampling#Lanczos_kernel) with `a=2`.
 * - `lanczos3`: Use a Lanczos kernel with `a=3` (the default).
 *
 * Only one resize can occur per pipeline.
 * Previous calls to `resize` in the same pipeline will be ignored.
 *
 * @example
 * sharp(input)
 *   .resize({ width: 100 })
 *   .toBuffer()
 *   .then(data => {
 *     // 100 pixels wide, auto-scaled height
 *   });
 *
 * @example
 * sharp(input)
 *   .resize({ height: 100 })
 *   .toBuffer()
 *   .then(data => {
 *     // 100 pixels high, auto-scaled width
 *   });
 *
 * @example
 * sharp(input)
 *   .resize(200, 300, {
 *     kernel: sharp.kernel.nearest,
 *     fit: 'contain',
 *     position: 'right top',
 *     background: { r: 255, g: 255, b: 255, alpha: 0.5 }
 *   })
 *   .toFile('output.png')
 *   .then(() => {
 *     // output.png is a 200 pixels wide and 300 pixels high image
 *     // containing a nearest-neighbour scaled version
 *     // contained within the north-east corner of a semi-transparent white canvas
 *   });
 *
 * @example
 * const transformer = sharp()
 *   .resize({
 *     width: 200,
 *     height: 200,
 *     fit: sharp.fit.cover,
 *     position: sharp.strategy.entropy
 *   });
 * // Read image data from readableStream
 * // Write 200px square auto-cropped image data to writableStream
 * readableStream
 *   .pipe(transformer)
 *   .pipe(writableStream);
 *
 * @example
 * sharp(input)
 *   .resize(200, 200, {
 *     fit: sharp.fit.inside,
 *     withoutEnlargement: true
 *   })
 *   .toFormat('jpeg')
 *   .toBuffer()
 *   .then(function(outputBuffer) {
 *     // outputBuffer contains JPEG image data
 *     // no wider and no higher than 200 pixels
 *     // and no larger than the input image
 *   });
 *
 * @example
 * sharp(input)
 *   .resize(200, 200, {
 *     fit: sharp.fit.outside,
 *     withoutReduction: true
 *   })
 *   .toFormat('jpeg')
 *   .toBuffer()
 *   .then(function(outputBuffer) {
 *     // outputBuffer contains JPEG image data
 *     // of at least 200 pixels wide and 200 pixels high while maintaining aspect ratio
 *     // and no smaller than the input image
 *   });
 *
 * @example
 * const scaleByHalf = await sharp(input)
 *   .metadata()
 *   .then(({ width }) => sharp(input)
 *     .resize(Math.round(width * 0.5))
 *     .toBuffer()
 *   );
 *
 * @param {number} [width] - How many pixels wide the resultant image should be. Use `null` or `undefined` to auto-scale the width to match the height.
 * @param {number} [height] - How many pixels high the resultant image should be. Use `null` or `undefined` to auto-scale the height to match the width.
 * @param {Object} [options]
 * @param {number} [options.width] - An alternative means of specifying `width`. If both are present this takes priority.
 * @param {number} [options.height] - An alternative means of specifying `height`. If both are present this takes priority.
 * @param {String} [options.fit='cover'] - How the image should be resized/cropped to fit the target dimension(s), one of `cover`, `contain`, `fill`, `inside` or `outside`.
 * @param {String} [options.position='centre'] - A position, gravity or strategy to use when `fit` is `cover` or `contain`.
 * @param {String|Object} [options.background={r: 0, g: 0, b: 0, alpha: 1}] - background colour when `fit` is `contain`, parsed by the [color](https://www.npmjs.org/package/color) module, defaults to black without transparency.
 * @param {String} [options.kernel='lanczos3'] - The kernel to use for image reduction. Use the `fastShrinkOnLoad` option to control kernel vs shrink-on-load.
 * @param {Boolean} [options.withoutEnlargement=false] - Do not scale up if the width *or* height are already less than the target dimensions, equivalent to GraphicsMagick's `>` geometry option. This may result in output dimensions smaller than the target dimensions.
 * @param {Boolean} [options.withoutReduction=false] - Do not scale down if the width *or* height are already greater than the target dimensions, equivalent to GraphicsMagick's `<` geometry option. This may still result in a crop to reach the target dimensions.
 * @param {Boolean} [options.fastShrinkOnLoad=true] - Take greater advantage of the JPEG and WebP shrink-on-load feature, which can lead to a slight moiré pattern or round-down of an auto-scaled dimension.
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
 */
function resize (widthOrOptions, height, options) {
  if (isResizeExpected(this.options)) {
    this.options.debuglog('ignoring previous resize options');
  }
  if (is.defined(widthOrOptions)) {
    if (is.object(widthOrOptions) && !is.defined(options)) {
      options = widthOrOptions;
    } else if (is.integer(widthOrOptions) && widthOrOptions > 0) {
      this.options.width = widthOrOptions;
    } else {
      throw is.invalidParameterError('width', 'positive integer', widthOrOptions);
    }
  } else {
    this.options.width = -1;
  }
  if (is.defined(height)) {
    if (is.integer(height) && height > 0) {
      this.options.height = height;
    } else {
      throw is.invalidParameterError('height', 'positive integer', height);
    }
  } else {
    this.options.height = -1;
  }
  if (is.object(options)) {
    // Width
    if (is.defined(options.width)) {
      if (is.integer(options.width) && options.width > 0) {
        this.options.width = options.width;
      } else {
        throw is.invalidParameterError('width', 'positive integer', options.width);
      }
    }
    // Height
    if (is.defined(options.height)) {
      if (is.integer(options.height) && options.height > 0) {
        this.options.height = options.height;
      } else {
        throw is.invalidParameterError('height', 'positive integer', options.height);
      }
    }
    // Fit
    if (is.defined(options.fit)) {
      const canvas = mapFitToCanvas[options.fit];
      if (is.string(canvas)) {
        this.options.canvas = canvas;
      } else {
        throw is.invalidParameterError('fit', 'valid fit', options.fit);
      }
    }
    // Position
    if (is.defined(options.position)) {
      const pos = is.integer(options.position)
        ? options.position
        : strategy[options.position] || position[options.position] || gravity[options.position];
      if (is.integer(pos) && (is.inRange(pos, 0, 8) || is.inRange(pos, 16, 17))) {
        this.options.position = pos;
      } else {
        throw is.invalidParameterError('position', 'valid position/gravity/strategy', options.position);
      }
    }
    // Background
    this._setBackgroundColourOption('resizeBackground', options.background);
    // Kernel
    if (is.defined(options.kernel)) {
      if (is.string(kernel[options.kernel])) {
        this.options.kernel = kernel[options.kernel];
      } else {
        throw is.invalidParameterError('kernel', 'valid kernel name', options.kernel);
      }
    }
    // Without enlargement
    if (is.defined(options.withoutEnlargement)) {
      this._setBooleanOption('withoutEnlargement', options.withoutEnlargement);
    }
    // Without reduction
    if (is.defined(options.withoutReduction)) {
      this._setBooleanOption('withoutReduction', options.withoutReduction);
    }
    // Shrink on load
    if (is.defined(options.fastShrinkOnLoad)) {
      this._setBooleanOption('fastShrinkOnLoad', options.fastShrinkOnLoad);
    }
  }
  if (isRotationExpected(this.options) && isResizeExpected(this.options)) {
    this.options.rotateBeforePreExtract = true;
  }
  return this;
}

/**
 * Extend / pad / extrude one or more edges of the image with either
 * the provided background colour or pixels derived from the image.
 * This operation will always occur after resizing and extraction, if any.
 *
 * @example
 * // Resize to 140 pixels wide, then add 10 transparent pixels
 * // to the top, left and right edges and 20 to the bottom edge
 * sharp(input)
 *   .resize(140)
 *   .extend({
 *     top: 10,
 *     bottom: 20,
 *     left: 10,
 *     right: 10,
 *     background: { r: 0, g: 0, b: 0, alpha: 0 }
 *   })
 *   ...
 *
* @example
 * // Add a row of 10 red pixels to the bottom
 * sharp(input)
 *   .extend({
 *     bottom: 10,
 *     background: 'red'
 *   })
 *   ...
 *
 * @example
 * // Extrude image by 8 pixels to the right, mirroring existing right hand edge
 * sharp(input)
 *   .extend({
 *     right: 8,
 *     background: 'mirror'
 *   })
 *   ...
 *
 * @param {(number|Object)} extend - single pixel count to add to all edges or an Object with per-edge counts
 * @param {number} [extend.top=0]
 * @param {number} [extend.left=0]
 * @param {number} [extend.bottom=0]
 * @param {number} [extend.right=0]
 * @param {String} [extend.extendWith='background'] - populate new pixels using this method, one of: background, copy, repeat, mirror.
 * @param {String|Object} [extend.background={r: 0, g: 0, b: 0, alpha: 1}] - background colour, parsed by the [color](https://www.npmjs.org/package/color) module, defaults to black without transparency.
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
*/
function extend (extend) {
  if (is.integer(extend) && extend > 0) {
    this.options.extendTop = extend;
    this.options.extendBottom = extend;
    this.options.extendLeft = extend;
    this.options.extendRight = extend;
  } else if (is.object(extend)) {
    if (is.defined(extend.top)) {
      if (is.integer(extend.top) && extend.top >= 0) {
        this.options.extendTop = extend.top;
      } else {
        throw is.invalidParameterError('top', 'positive integer', extend.top);
      }
    }
    if (is.defined(extend.bottom)) {
      if (is.integer(extend.bottom) && extend.bottom >= 0) {
        this.options.extendBottom = extend.bottom;
      } else {
        throw is.invalidParameterError('bottom', 'positive integer', extend.bottom);
      }
    }
    if (is.defined(extend.left)) {
      if (is.integer(extend.left) && extend.left >= 0) {
        this.options.extendLeft = extend.left;
      } else {
        throw is.invalidParameterError('left', 'positive integer', extend.left);
      }
    }
    if (is.defined(extend.right)) {
      if (is.integer(extend.right) && extend.right >= 0) {
        this.options.extendRight = extend.right;
      } else {
        throw is.invalidParameterError('right', 'positive integer', extend.right);
      }
    }
    this._setBackgroundColourOption('extendBackground', extend.background);
    if (is.defined(extend.extendWith)) {
      if (is.string(extendWith[extend.extendWith])) {
        this.options.extendWith = extendWith[extend.extendWith];
      } else {
        throw is.invalidParameterError('extendWith', 'one of: background, copy, repeat, mirror', extend.extendWith);
      }
    }
  } else {
    throw is.invalidParameterError('extend', 'integer or object', extend);
  }
  return this;
}

/**
 * Extract/crop a region of the image.
 *
 * - Use `extract` before `resize` for pre-resize extraction.
 * - Use `extract` after `resize` for post-resize extraction.
 * - Use `extract` before and after for both.
 *
 * @example
 * sharp(input)
 *   .extract({ left: left, top: top, width: width, height: height })
 *   .toFile(output, function(err) {
 *     // Extract a region of the input image, saving in the same format.
 *   });
 * @example
 * sharp(input)
 *   .extract({ left: leftOffsetPre, top: topOffsetPre, width: widthPre, height: heightPre })
 *   .resize(width, height)
 *   .extract({ left: leftOffsetPost, top: topOffsetPost, width: widthPost, height: heightPost })
 *   .toFile(output, function(err) {
 *     // Extract a region, resize, then extract from the resized image
 *   });
 *
 * @param {Object} options - describes the region to extract using integral pixel values
 * @param {number} options.left - zero-indexed offset from left edge
 * @param {number} options.top - zero-indexed offset from top edge
 * @param {number} options.width - width of region to extract
 * @param {number} options.height - height of region to extract
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
 */
function extract (options) {
  const suffix = isResizeExpected(this.options) || this.options.widthPre !== -1 ? 'Post' : 'Pre';
  if (this.options[`width${suffix}`] !== -1) {
    this.options.debuglog('ignoring previous extract options');
  }
  ['left', 'top', 'width', 'height'].forEach(function (name) {
    const value = options[name];
    if (is.integer(value) && value >= 0) {
      this.options[name + (name === 'left' || name === 'top' ? 'Offset' : '') + suffix] = value;
    } else {
      throw is.invalidParameterError(name, 'integer', value);
    }
  }, this);
  // Ensure existing rotation occurs before pre-resize extraction
  if (isRotationExpected(this.options) && !isResizeExpected(this.options)) {
    if (this.options.widthPre === -1 || this.options.widthPost === -1) {
      this.options.rotateBeforePreExtract = true;
    }
  }
  return this;
}

/**
 * Trim pixels from all edges that contain values similar to the given background colour, which defaults to that of the top-left pixel.
 *
 * Images with an alpha channel will use the combined bounding box of alpha and non-alpha channels.
 *
 * If the result of this operation would trim an image to nothing then no change is made.
 *
 * The `info` response Object, obtained from callback of `.toFile()` or `.toBuffer()`,
 * will contain `trimOffsetLeft` and `trimOffsetTop` properties.
 *
 * @example
 * // Trim pixels with a colour similar to that of the top-left pixel.
 * sharp(input)
 *   .trim()
 *   .toFile(output, function(err, info) {
 *     ...
 *   });
 * @example
 * // Trim pixels with the exact same colour as that of the top-left pixel.
 * sharp(input)
 *   .trim(0)
 *   .toFile(output, function(err, info) {
 *     ...
 *   });
 * @example
 * // Trim only pixels with a similar colour to red.
 * sharp(input)
 *   .trim("#FF0000")
 *   .toFile(output, function(err, info) {
 *     ...
 *   });
 * @example
 * // Trim all "yellow-ish" pixels, being more lenient with the higher threshold.
 * sharp(input)
 *   .trim({
 *     background: "yellow",
 *     threshold: 42,
 *   })
 *   .toFile(output, function(err, info) {
 *     ...
 *   });
 *
 * @param {string|number|Object} trim - the specific background colour to trim, the threshold for doing so or an Object with both.
 * @param {string|Object} [trim.background='top-left pixel'] - background colour, parsed by the [color](https://www.npmjs.org/package/color) module, defaults to that of the top-left pixel.
 * @param {number} [trim.threshold=10] - the allowed difference from the above colour, a positive number.
 * @returns {Sharp}
 * @throws {Error} Invalid parameters
 */
function trim (trim) {
  if (!is.defined(trim)) {
    this.options.trimThreshold = 10;
  } else if (is.string(trim)) {
    this._setBackgroundColourOption('trimBackground', trim);
    this.options.trimThreshold = 10;
  } else if (is.number(trim)) {
    if (trim >= 0) {
      this.options.trimThreshold = trim;
    } else {
      throw is.invalidParameterError('threshold', 'positive number', trim);
    }
  } else if (is.object(trim)) {
    this._setBackgroundColourOption('trimBackground', trim.background);
    if (!is.defined(trim.threshold)) {
      this.options.trimThreshold = 10;
    } else if (is.number(trim.threshold) && trim.threshold >= 0) {
      this.options.trimThreshold = trim.threshold;
    } else {
      throw is.invalidParameterError('threshold', 'positive number', trim);
    }
  } else {
    throw is.invalidParameterError('trim', 'string, number or object', trim);
  }
  if (isRotationExpected(this.options)) {
    this.options.rotateBeforePreExtract = true;
  }
  return this;
}

/**
 * Decorate the Sharp prototype with resize-related functions.
 * @private
 */
module.exports = function (Sharp) {
  Object.assign(Sharp.prototype, {
    resize,
    extend,
    extract,
    trim
  });
  // Class attributes
  Sharp.gravity = gravity;
  Sharp.strategy = strategy;
  Sharp.kernel = kernel;
  Sharp.fit = fit;
  Sharp.position = position;
};
