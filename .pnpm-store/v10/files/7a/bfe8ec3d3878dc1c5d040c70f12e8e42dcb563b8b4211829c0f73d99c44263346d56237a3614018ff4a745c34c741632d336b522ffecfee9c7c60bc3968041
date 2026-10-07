// Copyright 2013 Lovell Fuller and others.
// SPDX-License-Identifier: Apache-2.0

'use strict';

const fs = require('fs');
const path = require('path');
const events = require('events');
const detectLibc = require('detect-libc');

const is = require('./is');
const platformAndArch = require('./platform')();
const sharp = require('./sharp');

/**
 * An Object containing nested boolean values representing the available input and output formats/methods.
 * @member
 * @example
 * console.log(sharp.format);
 * @returns {Object}
 */
const format = sharp.format();
format.heif.output.alias = ['avif', 'heic'];
format.jpeg.output.alias = ['jpe', 'jpg'];
format.tiff.output.alias = ['tif'];
format.jp2k.output.alias = ['j2c', 'j2k', 'jp2', 'jpx'];

/**
 * An Object containing the available interpolators and their proper values
 * @readonly
 * @enum {string}
 */
const interpolators = {
  /** [Nearest neighbour interpolation](http://en.wikipedia.org/wiki/Nearest-neighbor_interpolation). Suitable for image enlargement only. */
  nearest: 'nearest',
  /** [Bilinear interpolation](http://en.wikipedia.org/wiki/Bilinear_interpolation). Faster than bicubic but with less smooth results. */
  bilinear: 'bilinear',
  /** [Bicubic interpolation](http://en.wikipedia.org/wiki/Bicubic_interpolation) (the default). */
  bicubic: 'bicubic',
  /** [LBB interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/lbb.cpp#L100). Prevents some "[acutance](http://en.wikipedia.org/wiki/Acutance)" but typically reduces performance by a factor of 2. */
  locallyBoundedBicubic: 'lbb',
  /** [Nohalo interpolation](http://eprints.soton.ac.uk/268086/). Prevents acutance but typically reduces performance by a factor of 3. */
  nohalo: 'nohalo',
  /** [VSQBS interpolation](https://github.com/libvips/libvips/blob/master/libvips/resample/vsqbs.cpp#L48). Prevents "staircasing" when enlarging. */
  vertexSplitQuadraticBasisSpline: 'vsqbs'
};

/**
 * An Object containing the version numbers of sharp, libvips and its dependencies.
 * @member
 * @example
 * console.log(sharp.versions);
 */
let versions = {
  vips: sharp.libvipsVersion()
};
try {
  versions = require(`../vendor/${versions.vips}/${platformAndArch}/versions.json`);
} catch (_err) { /* ignore */ }
versions.sharp = require('../package.json').version;

/**
 * An Object containing the platform and architecture
 * of the current and installed vendored binaries.
 * @member
 * @example
 * console.log(sharp.vendor);
 */
const vendor = {
  current: platformAndArch,
  installed: []
};
try {
  vendor.installed = fs.readdirSync(path.join(__dirname, `../vendor/${versions.vips}`));
} catch (_err) { /* ignore */ }

/**
 * Gets or, when options are provided, sets the limits of _libvips'_ operation cache.
 * Existing entries in the cache will be trimmed after any change in limits.
 * This method always returns cache statistics,
 * useful for determining how much working memory is required for a particular task.
 *
 * @example
 * const stats = sharp.cache();
 * @example
 * sharp.cache( { items: 200 } );
 * sharp.cache( { files: 0 } );
 * sharp.cache(false);
 *
 * @param {Object|boolean} [options=true] - Object with the following attributes, or boolean where true uses default cache settings and false removes all caching
 * @param {number} [options.memory=50] - is the maximum memory in MB to use for this cache
 * @param {number} [options.files=20] - is the maximum number of files to hold open
 * @param {number} [options.items=100] - is the maximum number of operations to cache
 * @returns {Object}
 */
function cache (options) {
  if (is.bool(options)) {
    if (options) {
      // Default cache settings of 50MB, 20 files, 100 items
      return sharp.cache(50, 20, 100);
    } else {
      return sharp.cache(0, 0, 0);
    }
  } else if (is.object(options)) {
    return sharp.cache(options.memory, options.files, options.items);
  } else {
    return sharp.cache();
  }
}
cache(true);

/**
 * Gets or, when a concurrency is provided, sets
 * the maximum number of threads _libvips_ should use to process _each image_.
 * These are from a thread pool managed by glib,
 * which helps avoid the overhead of creating new threads.
 *
 * This method always returns the current concurrency.
 *
 * The default value is the number of CPU cores,
 * except when using glibc-based Linux without jemalloc,
 * where the default is `1` to help reduce memory fragmentation.
 *
 * A value of `0` will reset this to the number of CPU cores.
 *
 * Some image format libraries spawn additional threads,
 * e.g. libaom manages its own 4 threads when encoding AVIF images,
 * and these are independent of the value set here.
 *
 * The maximum number of images that sharp can process in parallel
 * is controlled by libuv's `UV_THREADPOOL_SIZE` environment variable,
 * which defaults to 4.
 *
 * https://nodejs.org/api/cli.html#uv_threadpool_sizesize
 *
 * For example, by default, a machine with 8 CPU cores will process
 * 4 images in parallel and use up to 8 threads per image,
 * so there will be up to 32 concurrent threads.
 *
 * @example
 * const threads = sharp.concurrency(); // 4
 * sharp.concurrency(2); // 2
 * sharp.concurrency(0); // 4
 *
 * @param {number} [concurrency]
 * @returns {number} concurrency
 */
function concurrency (concurrency) {
  return sharp.concurrency(is.integer(concurrency) ? concurrency : null);
}
/* istanbul ignore next */
if (detectLibc.familySync() === detectLibc.GLIBC && !sharp._isUsingJemalloc()) {
  // Reduce default concurrency to 1 when using glibc memory allocator
  sharp.concurrency(1);
}

/**
 * An EventEmitter that emits a `change` event when a task is either:
 * - queued, waiting for _libuv_ to provide a worker thread
 * - complete
 * @member
 * @example
 * sharp.queue.on('change', function(queueLength) {
 *   console.log('Queue contains ' + queueLength + ' task(s)');
 * });
 */
const queue = new events.EventEmitter();

/**
 * Provides access to internal task counters.
 * - queue is the number of tasks this module has queued waiting for _libuv_ to provide a worker thread from its pool.
 * - process is the number of resize tasks currently being processed.
 *
 * @example
 * const counters = sharp.counters(); // { queue: 2, process: 4 }
 *
 * @returns {Object}
 */
function counters () {
  return sharp.counters();
}

/**
 * Get and set use of SIMD vector unit instructions.
 * Requires libvips to have been compiled with liborc support.
 *
 * Improves the performance of `resize`, `blur` and `sharpen` operations
 * by taking advantage of the SIMD vector unit of the CPU, e.g. Intel SSE and ARM NEON.
 *
 * @example
 * const simd = sharp.simd();
 * // simd is `true` if the runtime use of liborc is currently enabled
 * @example
 * const simd = sharp.simd(false);
 * // prevent libvips from using liborc at runtime
 *
 * @param {boolean} [simd=true]
 * @returns {boolean}
 */
function simd (simd) {
  return sharp.simd(is.bool(simd) ? simd : null);
}
simd(true);

/**
 * Block libvips operations at runtime.
 *
 * This is in addition to the `VIPS_BLOCK_UNTRUSTED` environment variable,
 * which when set will block all "untrusted" operations.
 *
 * @since 0.32.4
 *
 * @example <caption>Block all TIFF input.</caption>
 * sharp.block({
 *   operation: ['VipsForeignLoadTiff']
 * });
 *
 * @param {Object} options
 * @param {Array<string>} options.operation - List of libvips low-level operation names to block.
 */
function block (options) {
  if (is.object(options)) {
    if (Array.isArray(options.operation) && options.operation.every(is.string)) {
      sharp.block(options.operation, true);
    } else {
      throw is.invalidParameterError('operation', 'Array<string>', options.operation);
    }
  } else {
    throw is.invalidParameterError('options', 'object', options);
  }
}

/**
 * Unblock libvips operations at runtime.
 *
 * This is useful for defining a list of allowed operations.
 *
 * @since 0.32.4
 *
 * @example <caption>Block all input except WebP from the filesystem.</caption>
 * sharp.block({
 *   operation: ['VipsForeignLoad']
 * });
 * sharp.unblock({
 *   operation: ['VipsForeignLoadWebpFile']
 * });
 *
 * @example <caption>Block all input except JPEG and PNG from a Buffer or Stream.</caption>
 * sharp.block({
 *   operation: ['VipsForeignLoad']
 * });
 * sharp.unblock({
 *   operation: ['VipsForeignLoadJpegBuffer', 'VipsForeignLoadPngBuffer']
 * });
 *
 * @param {Object} options
 * @param {Array<string>} options.operation - List of libvips low-level operation names to unblock.
 */
function unblock (options) {
  if (is.object(options)) {
    if (Array.isArray(options.operation) && options.operation.every(is.string)) {
      sharp.block(options.operation, false);
    } else {
      throw is.invalidParameterError('operation', 'Array<string>', options.operation);
    }
  } else {
    throw is.invalidParameterError('options', 'object', options);
  }
}

/**
 * Decorate the Sharp class with utility-related functions.
 * @private
 */
module.exports = function (Sharp) {
  Sharp.cache = cache;
  Sharp.concurrency = concurrency;
  Sharp.counters = counters;
  Sharp.simd = simd;
  Sharp.format = format;
  Sharp.interpolators = interpolators;
  Sharp.versions = versions;
  Sharp.vendor = vendor;
  Sharp.queue = queue;
  Sharp.block = block;
  Sharp.unblock = unblock;
};
