import fs, { promises, existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { relative, resolve, dirname, extname, normalize, join, basename, isAbsolute } from 'pathe';
import { C as CoverageProviderMap } from './coverage.DVF1vEu8.js';
import path, { resolve as resolve$1 } from 'node:path';
import { noop, isPrimitive, createDefer, slash, highlight, toArray, deepMerge, nanoid, deepClone, notNullish } from '@vitest/utils';
import { f as findUp, p as prompt } from './index.X0nbfr6-.js';
import * as vite from 'vite';
import { searchForWorkspaceRoot, version, createServer, mergeConfig } from 'vite';
import { A as API_PATH, c as configFiles, d as defaultBrowserPort, w as workspacesFiles, a as defaultPort } from './constants.DnKduX2e.js';
import { generateFileHash, limitConcurrency, createFileTask, hasFailed, getTasks, getTests } from '@vitest/runner/utils';
import { SnapshotManager } from '@vitest/snapshot/manager';
import { ViteNodeRunner } from 'vite-node/client';
import { ViteNodeServer } from 'vite-node/server';
import { v as version$1 } from './cac.Cb-PYCCB.js';
import { c as createBirpc } from './index.B521nVV-.js';
import { p as parse, s as stringify, d as printError, f as formatProjectName, w as withLabel, e as errorBanner, h as divider, i as generateCodeFrame, R as ReportersMap, j as BlobReporter, r as readBlobs, H as HangingProcessReporter } from './index.VByaPkjc.js';
import require$$0$3 from 'events';
import require$$1$1 from 'https';
import require$$2 from 'http';
import require$$3 from 'net';
import require$$4 from 'tls';
import require$$1 from 'crypto';
import require$$0$2 from 'stream';
import require$$7 from 'url';
import require$$0 from 'zlib';
import require$$0$1 from 'buffer';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers.BFTU3MAI.js';
import { parseErrorStacktrace } from '@vitest/utils/source-map';
import crypto, { createHash } from 'node:crypto';
import { distDir, rootDir } from '../path.js';
import { h as hash, R as RandomSequencer, i as isPackageExists, g as getFilePoolName, d as isBrowserEnabled, r as resolveConfig, e as groupBy, f as getCoverageProvider, j as createPool, w as wildcardPatternToRegExp, a as resolveApiServerConfig, s as stdout } from './coverage.DL5VHqXY.js';
import { c as convertTasksToEvents } from './typechecker.DRKU1-1g.js';
import { Console } from 'node:console';
import c from 'tinyrainbow';
import { createRequire } from 'node:module';
import url from 'node:url';
import { i as isTTY, a as isWindows } from './env.D4Lgay0q.js';
import { rm, mkdir, copyFile } from 'node:fs/promises';
import nodeos__default, { tmpdir } from 'node:os';
import pm from 'picomatch';
import { glob, isDynamicPattern } from 'tinyglobby';
import { normalizeRequestId, cleanUrl } from 'vite-node/utils';
import { hoistMocksPlugin, automockPlugin } from '@vitest/mocker/node';
import { c as configDefaults } from './defaults.B7q_naMc.js';
import MagicString from 'magic-string';
import { a as BenchmarkReportsMap } from './index.BCWujgDG.js';
import assert$1 from 'node:assert';
import { serializeError } from '@vitest/utils/error';
import readline from 'node:readline';
import { stripVTControlCharacters } from 'node:util';

var bufferUtil = {exports: {}};

var constants;
var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;

	const BINARY_TYPES = ['nodebuffer', 'arraybuffer', 'fragments'];
	const hasBlob = typeof Blob !== 'undefined';

	if (hasBlob) BINARY_TYPES.push('blob');

	constants = {
	  BINARY_TYPES,
	  EMPTY_BUFFER: Buffer.alloc(0),
	  GUID: '258EAFA5-E914-47DA-95CA-C5AB0DC85B11',
	  hasBlob,
	  kForOnEventAttribute: Symbol('kIsForOnEventAttribute'),
	  kListener: Symbol('kListener'),
	  kStatusCode: Symbol('status-code'),
	  kWebSocket: Symbol('websocket'),
	  NOOP: () => {}
	};
	return constants;
}

var hasRequiredBufferUtil;

function requireBufferUtil () {
	if (hasRequiredBufferUtil) return bufferUtil.exports;
	hasRequiredBufferUtil = 1;

	const { EMPTY_BUFFER } = requireConstants();

	const FastBuffer = Buffer[Symbol.species];

	/**
	 * Merges an array of buffers into a new buffer.
	 *
	 * @param {Buffer[]} list The array of buffers to concat
	 * @param {Number} totalLength The total length of buffers in the list
	 * @return {Buffer} The resulting buffer
	 * @public
	 */
	function concat(list, totalLength) {
	  if (list.length === 0) return EMPTY_BUFFER;
	  if (list.length === 1) return list[0];

	  const target = Buffer.allocUnsafe(totalLength);
	  let offset = 0;

	  for (let i = 0; i < list.length; i++) {
	    const buf = list[i];
	    target.set(buf, offset);
	    offset += buf.length;
	  }

	  if (offset < totalLength) {
	    return new FastBuffer(target.buffer, target.byteOffset, offset);
	  }

	  return target;
	}

	/**
	 * Masks a buffer using the given mask.
	 *
	 * @param {Buffer} source The buffer to mask
	 * @param {Buffer} mask The mask to use
	 * @param {Buffer} output The buffer where to store the result
	 * @param {Number} offset The offset at which to start writing
	 * @param {Number} length The number of bytes to mask.
	 * @public
	 */
	function _mask(source, mask, output, offset, length) {
	  for (let i = 0; i < length; i++) {
	    output[offset + i] = source[i] ^ mask[i & 3];
	  }
	}

	/**
	 * Unmasks a buffer using the given mask.
	 *
	 * @param {Buffer} buffer The buffer to unmask
	 * @param {Buffer} mask The mask to use
	 * @public
	 */
	function _unmask(buffer, mask) {
	  for (let i = 0; i < buffer.length; i++) {
	    buffer[i] ^= mask[i & 3];
	  }
	}

	/**
	 * Converts a buffer to an `ArrayBuffer`.
	 *
	 * @param {Buffer} buf The buffer to convert
	 * @return {ArrayBuffer} Converted buffer
	 * @public
	 */
	function toArrayBuffer(buf) {
	  if (buf.length === buf.buffer.byteLength) {
	    return buf.buffer;
	  }

	  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
	}

	/**
	 * Converts `data` to a `Buffer`.
	 *
	 * @param {*} data The data to convert
	 * @return {Buffer} The buffer
	 * @throws {TypeError}
	 * @public
	 */
	function toBuffer(data) {
	  toBuffer.readOnly = true;

	  if (Buffer.isBuffer(data)) return data;

	  let buf;

	  if (data instanceof ArrayBuffer) {
	    buf = new FastBuffer(data);
	  } else if (ArrayBuffer.isView(data)) {
	    buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
	  } else {
	    buf = Buffer.from(data);
	    toBuffer.readOnly = false;
	  }

	  return buf;
	}

	bufferUtil.exports = {
	  concat,
	  mask: _mask,
	  toArrayBuffer,
	  toBuffer,
	  unmask: _unmask
	};

	/* istanbul ignore else  */
	if (!process.env.WS_NO_BUFFER_UTIL) {
	  try {
	    const bufferUtil$1 = require('bufferutil');

	    bufferUtil.exports.mask = function (source, mask, output, offset, length) {
	      if (length < 48) _mask(source, mask, output, offset, length);
	      else bufferUtil$1.mask(source, mask, output, offset, length);
	    };

	    bufferUtil.exports.unmask = function (buffer, mask) {
	      if (buffer.length < 32) _unmask(buffer, mask);
	      else bufferUtil$1.unmask(buffer, mask);
	    };
	  } catch (e) {
	    // Continue regardless of the error.
	  }
	}
	return bufferUtil.exports;
}

var limiter;
var hasRequiredLimiter;

function requireLimiter () {
	if (hasRequiredLimiter) return limiter;
	hasRequiredLimiter = 1;

	const kDone = Symbol('kDone');
	const kRun = Symbol('kRun');

	/**
	 * A very simple job queue with adjustable concurrency. Adapted from
	 * https://github.com/STRML/async-limiter
	 */
	class Limiter {
	  /**
	   * Creates a new `Limiter`.
	   *
	   * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
	   *     to run concurrently
	   */
	  constructor(concurrency) {
	    this[kDone] = () => {
	      this.pending--;
	      this[kRun]();
	    };
	    this.concurrency = concurrency || Infinity;
	    this.jobs = [];
	    this.pending = 0;
	  }

	  /**
	   * Adds a job to the queue.
	   *
	   * @param {Function} job The job to run
	   * @public
	   */
	  add(job) {
	    this.jobs.push(job);
	    this[kRun]();
	  }

	  /**
	   * Removes a job from the queue and runs it if possible.
	   *
	   * @private
	   */
	  [kRun]() {
	    if (this.pending === this.concurrency) return;

	    if (this.jobs.length) {
	      const job = this.jobs.shift();

	      this.pending++;
	      job(this[kDone]);
	    }
	  }
	}

	limiter = Limiter;
	return limiter;
}

var permessageDeflate;
var hasRequiredPermessageDeflate;

function requirePermessageDeflate () {
	if (hasRequiredPermessageDeflate) return permessageDeflate;
	hasRequiredPermessageDeflate = 1;

	const zlib = require$$0;

	const bufferUtil = requireBufferUtil();
	const Limiter = requireLimiter();
	const { kStatusCode } = requireConstants();

	const FastBuffer = Buffer[Symbol.species];
	const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
	const kPerMessageDeflate = Symbol('permessage-deflate');
	const kTotalLength = Symbol('total-length');
	const kCallback = Symbol('callback');
	const kBuffers = Symbol('buffers');
	const kError = Symbol('error');

	//
	// We limit zlib concurrency, which prevents severe memory fragmentation
	// as documented in https://github.com/nodejs/node/issues/8871#issuecomment-250915913
	// and https://github.com/websockets/ws/issues/1202
	//
	// Intentionally global; it's the global thread pool that's an issue.
	//
	let zlibLimiter;

	/**
	 * permessage-deflate implementation.
	 */
	class PerMessageDeflate {
	  /**
	   * Creates a PerMessageDeflate instance.
	   *
	   * @param {Object} [options] Configuration options
	   * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
	   *     for, or request, a custom client window size
	   * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
	   *     acknowledge disabling of client context takeover
	   * @param {Number} [options.concurrencyLimit=10] The number of concurrent
	   *     calls to zlib
	   * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
	   *     use of a custom server window size
	   * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
	   *     disabling of server context takeover
	   * @param {Number} [options.threshold=1024] Size (in bytes) below which
	   *     messages should not be compressed if context takeover is disabled
	   * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
	   *     deflate
	   * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
	   *     inflate
	   * @param {Boolean} [isServer=false] Create the instance in either server or
	   *     client mode
	   * @param {Number} [maxPayload=0] The maximum allowed message length
	   */
	  constructor(options, isServer, maxPayload) {
	    this._maxPayload = maxPayload | 0;
	    this._options = options || {};
	    this._threshold =
	      this._options.threshold !== undefined ? this._options.threshold : 1024;
	    this._isServer = !!isServer;
	    this._deflate = null;
	    this._inflate = null;

	    this.params = null;

	    if (!zlibLimiter) {
	      const concurrency =
	        this._options.concurrencyLimit !== undefined
	          ? this._options.concurrencyLimit
	          : 10;
	      zlibLimiter = new Limiter(concurrency);
	    }
	  }

	  /**
	   * @type {String}
	   */
	  static get extensionName() {
	    return 'permessage-deflate';
	  }

	  /**
	   * Create an extension negotiation offer.
	   *
	   * @return {Object} Extension parameters
	   * @public
	   */
	  offer() {
	    const params = {};

	    if (this._options.serverNoContextTakeover) {
	      params.server_no_context_takeover = true;
	    }
	    if (this._options.clientNoContextTakeover) {
	      params.client_no_context_takeover = true;
	    }
	    if (this._options.serverMaxWindowBits) {
	      params.server_max_window_bits = this._options.serverMaxWindowBits;
	    }
	    if (this._options.clientMaxWindowBits) {
	      params.client_max_window_bits = this._options.clientMaxWindowBits;
	    } else if (this._options.clientMaxWindowBits == null) {
	      params.client_max_window_bits = true;
	    }

	    return params;
	  }

	  /**
	   * Accept an extension negotiation offer/response.
	   *
	   * @param {Array} configurations The extension negotiation offers/reponse
	   * @return {Object} Accepted configuration
	   * @public
	   */
	  accept(configurations) {
	    configurations = this.normalizeParams(configurations);

	    this.params = this._isServer
	      ? this.acceptAsServer(configurations)
	      : this.acceptAsClient(configurations);

	    return this.params;
	  }

	  /**
	   * Releases all resources used by the extension.
	   *
	   * @public
	   */
	  cleanup() {
	    if (this._inflate) {
	      this._inflate.close();
	      this._inflate = null;
	    }

	    if (this._deflate) {
	      const callback = this._deflate[kCallback];

	      this._deflate.close();
	      this._deflate = null;

	      if (callback) {
	        callback(
	          new Error(
	            'The deflate stream was closed while data was being processed'
	          )
	        );
	      }
	    }
	  }

	  /**
	   *  Accept an extension negotiation offer.
	   *
	   * @param {Array} offers The extension negotiation offers
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsServer(offers) {
	    const opts = this._options;
	    const accepted = offers.find((params) => {
	      if (
	        (opts.serverNoContextTakeover === false &&
	          params.server_no_context_takeover) ||
	        (params.server_max_window_bits &&
	          (opts.serverMaxWindowBits === false ||
	            (typeof opts.serverMaxWindowBits === 'number' &&
	              opts.serverMaxWindowBits > params.server_max_window_bits))) ||
	        (typeof opts.clientMaxWindowBits === 'number' &&
	          !params.client_max_window_bits)
	      ) {
	        return false;
	      }

	      return true;
	    });

	    if (!accepted) {
	      throw new Error('None of the extension offers can be accepted');
	    }

	    if (opts.serverNoContextTakeover) {
	      accepted.server_no_context_takeover = true;
	    }
	    if (opts.clientNoContextTakeover) {
	      accepted.client_no_context_takeover = true;
	    }
	    if (typeof opts.serverMaxWindowBits === 'number') {
	      accepted.server_max_window_bits = opts.serverMaxWindowBits;
	    }
	    if (typeof opts.clientMaxWindowBits === 'number') {
	      accepted.client_max_window_bits = opts.clientMaxWindowBits;
	    } else if (
	      accepted.client_max_window_bits === true ||
	      opts.clientMaxWindowBits === false
	    ) {
	      delete accepted.client_max_window_bits;
	    }

	    return accepted;
	  }

	  /**
	   * Accept the extension negotiation response.
	   *
	   * @param {Array} response The extension negotiation response
	   * @return {Object} Accepted configuration
	   * @private
	   */
	  acceptAsClient(response) {
	    const params = response[0];

	    if (
	      this._options.clientNoContextTakeover === false &&
	      params.client_no_context_takeover
	    ) {
	      throw new Error('Unexpected parameter "client_no_context_takeover"');
	    }

	    if (!params.client_max_window_bits) {
	      if (typeof this._options.clientMaxWindowBits === 'number') {
	        params.client_max_window_bits = this._options.clientMaxWindowBits;
	      }
	    } else if (
	      this._options.clientMaxWindowBits === false ||
	      (typeof this._options.clientMaxWindowBits === 'number' &&
	        params.client_max_window_bits > this._options.clientMaxWindowBits)
	    ) {
	      throw new Error(
	        'Unexpected or invalid parameter "client_max_window_bits"'
	      );
	    }

	    return params;
	  }

	  /**
	   * Normalize parameters.
	   *
	   * @param {Array} configurations The extension negotiation offers/reponse
	   * @return {Array} The offers/response with normalized parameters
	   * @private
	   */
	  normalizeParams(configurations) {
	    configurations.forEach((params) => {
	      Object.keys(params).forEach((key) => {
	        let value = params[key];

	        if (value.length > 1) {
	          throw new Error(`Parameter "${key}" must have only a single value`);
	        }

	        value = value[0];

	        if (key === 'client_max_window_bits') {
	          if (value !== true) {
	            const num = +value;
	            if (!Number.isInteger(num) || num < 8 || num > 15) {
	              throw new TypeError(
	                `Invalid value for parameter "${key}": ${value}`
	              );
	            }
	            value = num;
	          } else if (!this._isServer) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	        } else if (key === 'server_max_window_bits') {
	          const num = +value;
	          if (!Number.isInteger(num) || num < 8 || num > 15) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	          value = num;
	        } else if (
	          key === 'client_no_context_takeover' ||
	          key === 'server_no_context_takeover'
	        ) {
	          if (value !== true) {
	            throw new TypeError(
	              `Invalid value for parameter "${key}": ${value}`
	            );
	          }
	        } else {
	          throw new Error(`Unknown parameter "${key}"`);
	        }

	        params[key] = value;
	      });
	    });

	    return configurations;
	  }

	  /**
	   * Decompress data. Concurrency limited.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  decompress(data, fin, callback) {
	    zlibLimiter.add((done) => {
	      this._decompress(data, fin, (err, result) => {
	        done();
	        callback(err, result);
	      });
	    });
	  }

	  /**
	   * Compress data. Concurrency limited.
	   *
	   * @param {(Buffer|String)} data Data to compress
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @public
	   */
	  compress(data, fin, callback) {
	    zlibLimiter.add((done) => {
	      this._compress(data, fin, (err, result) => {
	        done();
	        callback(err, result);
	      });
	    });
	  }

	  /**
	   * Decompress data.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @private
	   */
	  _decompress(data, fin, callback) {
	    const endpoint = this._isServer ? 'client' : 'server';

	    if (!this._inflate) {
	      const key = `${endpoint}_max_window_bits`;
	      const windowBits =
	        typeof this.params[key] !== 'number'
	          ? zlib.Z_DEFAULT_WINDOWBITS
	          : this.params[key];

	      this._inflate = zlib.createInflateRaw({
	        ...this._options.zlibInflateOptions,
	        windowBits
	      });
	      this._inflate[kPerMessageDeflate] = this;
	      this._inflate[kTotalLength] = 0;
	      this._inflate[kBuffers] = [];
	      this._inflate.on('error', inflateOnError);
	      this._inflate.on('data', inflateOnData);
	    }

	    this._inflate[kCallback] = callback;

	    this._inflate.write(data);
	    if (fin) this._inflate.write(TRAILER);

	    this._inflate.flush(() => {
	      const err = this._inflate[kError];

	      if (err) {
	        this._inflate.close();
	        this._inflate = null;
	        callback(err);
	        return;
	      }

	      const data = bufferUtil.concat(
	        this._inflate[kBuffers],
	        this._inflate[kTotalLength]
	      );

	      if (this._inflate._readableState.endEmitted) {
	        this._inflate.close();
	        this._inflate = null;
	      } else {
	        this._inflate[kTotalLength] = 0;
	        this._inflate[kBuffers] = [];

	        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
	          this._inflate.reset();
	        }
	      }

	      callback(null, data);
	    });
	  }

	  /**
	   * Compress data.
	   *
	   * @param {(Buffer|String)} data Data to compress
	   * @param {Boolean} fin Specifies whether or not this is the last fragment
	   * @param {Function} callback Callback
	   * @private
	   */
	  _compress(data, fin, callback) {
	    const endpoint = this._isServer ? 'server' : 'client';

	    if (!this._deflate) {
	      const key = `${endpoint}_max_window_bits`;
	      const windowBits =
	        typeof this.params[key] !== 'number'
	          ? zlib.Z_DEFAULT_WINDOWBITS
	          : this.params[key];

	      this._deflate = zlib.createDeflateRaw({
	        ...this._options.zlibDeflateOptions,
	        windowBits
	      });

	      this._deflate[kTotalLength] = 0;
	      this._deflate[kBuffers] = [];

	      this._deflate.on('data', deflateOnData);
	    }

	    this._deflate[kCallback] = callback;

	    this._deflate.write(data);
	    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
	      if (!this._deflate) {
	        //
	        // The deflate stream was closed while data was being processed.
	        //
	        return;
	      }

	      let data = bufferUtil.concat(
	        this._deflate[kBuffers],
	        this._deflate[kTotalLength]
	      );

	      if (fin) {
	        data = new FastBuffer(data.buffer, data.byteOffset, data.length - 4);
	      }

	      //
	      // Ensure that the callback will not be called again in
	      // `PerMessageDeflate#cleanup()`.
	      //
	      this._deflate[kCallback] = null;

	      this._deflate[kTotalLength] = 0;
	      this._deflate[kBuffers] = [];

	      if (fin && this.params[`${endpoint}_no_context_takeover`]) {
	        this._deflate.reset();
	      }

	      callback(null, data);
	    });
	  }
	}

	permessageDeflate = PerMessageDeflate;

	/**
	 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function deflateOnData(chunk) {
	  this[kBuffers].push(chunk);
	  this[kTotalLength] += chunk.length;
	}

	/**
	 * The listener of the `zlib.InflateRaw` stream `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function inflateOnData(chunk) {
	  this[kTotalLength] += chunk.length;

	  if (
	    this[kPerMessageDeflate]._maxPayload < 1 ||
	    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
	  ) {
	    this[kBuffers].push(chunk);
	    return;
	  }

	  this[kError] = new RangeError('Max payload size exceeded');
	  this[kError].code = 'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH';
	  this[kError][kStatusCode] = 1009;
	  this.removeListener('data', inflateOnData);

	  //
	  // The choice to employ `zlib.reset()` over `zlib.close()` is dictated by the
	  // fact that in Node.js versions prior to 13.10.0, the callback for
	  // `zlib.flush()` is not called if `zlib.close()` is used. Utilizing
	  // `zlib.reset()` ensures that either the callback is invoked or an error is
	  // emitted.
	  //
	  this.reset();
	}

	/**
	 * The listener of the `zlib.InflateRaw` stream `'error'` event.
	 *
	 * @param {Error} err The emitted error
	 * @private
	 */
	function inflateOnError(err) {
	  //
	  // There is no need to call `Zlib#close()` as the handle is automatically
	  // closed when an error is emitted.
	  //
	  this[kPerMessageDeflate]._inflate = null;

	  if (this[kError]) {
	    this[kCallback](this[kError]);
	    return;
	  }

	  err[kStatusCode] = 1007;
	  this[kCallback](err);
	}
	return permessageDeflate;
}

var validation = {exports: {}};

var hasRequiredValidation;

function requireValidation () {
	if (hasRequiredValidation) return validation.exports;
	hasRequiredValidation = 1;

	const { isUtf8 } = require$$0$1;

	const { hasBlob } = requireConstants();

	//
	// Allowed token characters:
	//
	// '!', '#', '$', '%', '&', ''', '*', '+', '-',
	// '.', 0-9, A-Z, '^', '_', '`', a-z, '|', '~'
	//
	// tokenChars[32] === 0 // ' '
	// tokenChars[33] === 1 // '!'
	// tokenChars[34] === 0 // '"'
	// ...
	//
	// prettier-ignore
	const tokenChars = [
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
	  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
	  0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, // 32 - 47
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
	  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, // 80 - 95
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
	  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0 // 112 - 127
	];

	/**
	 * Checks if a status code is allowed in a close frame.
	 *
	 * @param {Number} code The status code
	 * @return {Boolean} `true` if the status code is valid, else `false`
	 * @public
	 */
	function isValidStatusCode(code) {
	  return (
	    (code >= 1000 &&
	      code <= 1014 &&
	      code !== 1004 &&
	      code !== 1005 &&
	      code !== 1006) ||
	    (code >= 3000 && code <= 4999)
	  );
	}

	/**
	 * Checks if a given buffer contains only correct UTF-8.
	 * Ported from https://www.cl.cam.ac.uk/%7Emgk25/ucs/utf8_check.c by
	 * Markus Kuhn.
	 *
	 * @param {Buffer} buf The buffer to check
	 * @return {Boolean} `true` if `buf` contains only correct UTF-8, else `false`
	 * @public
	 */
	function _isValidUTF8(buf) {
	  const len = buf.length;
	  let i = 0;

	  while (i < len) {
	    if ((buf[i] & 0x80) === 0) {
	      // 0xxxxxxx
	      i++;
	    } else if ((buf[i] & 0xe0) === 0xc0) {
	      // 110xxxxx 10xxxxxx
	      if (
	        i + 1 === len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i] & 0xfe) === 0xc0 // Overlong
	      ) {
	        return false;
	      }

	      i += 2;
	    } else if ((buf[i] & 0xf0) === 0xe0) {
	      // 1110xxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 2 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        (buf[i] === 0xe0 && (buf[i + 1] & 0xe0) === 0x80) || // Overlong
	        (buf[i] === 0xed && (buf[i + 1] & 0xe0) === 0xa0) // Surrogate (U+D800 - U+DFFF)
	      ) {
	        return false;
	      }

	      i += 3;
	    } else if ((buf[i] & 0xf8) === 0xf0) {
	      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
	      if (
	        i + 3 >= len ||
	        (buf[i + 1] & 0xc0) !== 0x80 ||
	        (buf[i + 2] & 0xc0) !== 0x80 ||
	        (buf[i + 3] & 0xc0) !== 0x80 ||
	        (buf[i] === 0xf0 && (buf[i + 1] & 0xf0) === 0x80) || // Overlong
	        (buf[i] === 0xf4 && buf[i + 1] > 0x8f) ||
	        buf[i] > 0xf4 // > U+10FFFF
	      ) {
	        return false;
	      }

	      i += 4;
	    } else {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Determines whether a value is a `Blob`.
	 *
	 * @param {*} value The value to be tested
	 * @return {Boolean} `true` if `value` is a `Blob`, else `false`
	 * @private
	 */
	function isBlob(value) {
	  return (
	    hasBlob &&
	    typeof value === 'object' &&
	    typeof value.arrayBuffer === 'function' &&
	    typeof value.type === 'string' &&
	    typeof value.stream === 'function' &&
	    (value[Symbol.toStringTag] === 'Blob' ||
	      value[Symbol.toStringTag] === 'File')
	  );
	}

	validation.exports = {
	  isBlob,
	  isValidStatusCode,
	  isValidUTF8: _isValidUTF8,
	  tokenChars
	};

	if (isUtf8) {
	  validation.exports.isValidUTF8 = function (buf) {
	    return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
	  };
	} /* istanbul ignore else  */ else if (!process.env.WS_NO_UTF_8_VALIDATE) {
	  try {
	    const isValidUTF8 = require('utf-8-validate');

	    validation.exports.isValidUTF8 = function (buf) {
	      return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
	    };
	  } catch (e) {
	    // Continue regardless of the error.
	  }
	}
	return validation.exports;
}

var receiver;
var hasRequiredReceiver;

function requireReceiver () {
	if (hasRequiredReceiver) return receiver;
	hasRequiredReceiver = 1;

	const { Writable } = require$$0$2;

	const PerMessageDeflate = requirePermessageDeflate();
	const {
	  BINARY_TYPES,
	  EMPTY_BUFFER,
	  kStatusCode,
	  kWebSocket
	} = requireConstants();
	const { concat, toArrayBuffer, unmask } = requireBufferUtil();
	const { isValidStatusCode, isValidUTF8 } = requireValidation();

	const FastBuffer = Buffer[Symbol.species];

	const GET_INFO = 0;
	const GET_PAYLOAD_LENGTH_16 = 1;
	const GET_PAYLOAD_LENGTH_64 = 2;
	const GET_MASK = 3;
	const GET_DATA = 4;
	const INFLATING = 5;
	const DEFER_EVENT = 6;

	/**
	 * HyBi Receiver implementation.
	 *
	 * @extends Writable
	 */
	class Receiver extends Writable {
	  /**
	   * Creates a Receiver instance.
	   *
	   * @param {Object} [options] Options object
	   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {String} [options.binaryType=nodebuffer] The type for binary data
	   * @param {Object} [options.extensions] An object containing the negotiated
	   *     extensions
	   * @param {Boolean} [options.isServer=false] Specifies whether to operate in
	   *     client or server mode
	   * @param {Number} [options.maxPayload=0] The maximum allowed message length
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   */
	  constructor(options = {}) {
	    super();

	    this._allowSynchronousEvents =
	      options.allowSynchronousEvents !== undefined
	        ? options.allowSynchronousEvents
	        : true;
	    this._binaryType = options.binaryType || BINARY_TYPES[0];
	    this._extensions = options.extensions || {};
	    this._isServer = !!options.isServer;
	    this._maxPayload = options.maxPayload | 0;
	    this._skipUTF8Validation = !!options.skipUTF8Validation;
	    this[kWebSocket] = undefined;

	    this._bufferedBytes = 0;
	    this._buffers = [];

	    this._compressed = false;
	    this._payloadLength = 0;
	    this._mask = undefined;
	    this._fragmented = 0;
	    this._masked = false;
	    this._fin = false;
	    this._opcode = 0;

	    this._totalPayloadLength = 0;
	    this._messageLength = 0;
	    this._fragments = [];

	    this._errored = false;
	    this._loop = false;
	    this._state = GET_INFO;
	  }

	  /**
	   * Implements `Writable.prototype._write()`.
	   *
	   * @param {Buffer} chunk The chunk of data to write
	   * @param {String} encoding The character encoding of `chunk`
	   * @param {Function} cb Callback
	   * @private
	   */
	  _write(chunk, encoding, cb) {
	    if (this._opcode === 0x08 && this._state == GET_INFO) return cb();

	    this._bufferedBytes += chunk.length;
	    this._buffers.push(chunk);
	    this.startLoop(cb);
	  }

	  /**
	   * Consumes `n` bytes from the buffered data.
	   *
	   * @param {Number} n The number of bytes to consume
	   * @return {Buffer} The consumed bytes
	   * @private
	   */
	  consume(n) {
	    this._bufferedBytes -= n;

	    if (n === this._buffers[0].length) return this._buffers.shift();

	    if (n < this._buffers[0].length) {
	      const buf = this._buffers[0];
	      this._buffers[0] = new FastBuffer(
	        buf.buffer,
	        buf.byteOffset + n,
	        buf.length - n
	      );

	      return new FastBuffer(buf.buffer, buf.byteOffset, n);
	    }

	    const dst = Buffer.allocUnsafe(n);

	    do {
	      const buf = this._buffers[0];
	      const offset = dst.length - n;

	      if (n >= buf.length) {
	        dst.set(this._buffers.shift(), offset);
	      } else {
	        dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
	        this._buffers[0] = new FastBuffer(
	          buf.buffer,
	          buf.byteOffset + n,
	          buf.length - n
	        );
	      }

	      n -= buf.length;
	    } while (n > 0);

	    return dst;
	  }

	  /**
	   * Starts the parsing loop.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  startLoop(cb) {
	    this._loop = true;

	    do {
	      switch (this._state) {
	        case GET_INFO:
	          this.getInfo(cb);
	          break;
	        case GET_PAYLOAD_LENGTH_16:
	          this.getPayloadLength16(cb);
	          break;
	        case GET_PAYLOAD_LENGTH_64:
	          this.getPayloadLength64(cb);
	          break;
	        case GET_MASK:
	          this.getMask();
	          break;
	        case GET_DATA:
	          this.getData(cb);
	          break;
	        case INFLATING:
	        case DEFER_EVENT:
	          this._loop = false;
	          return;
	      }
	    } while (this._loop);

	    if (!this._errored) cb();
	  }

	  /**
	   * Reads the first two bytes of a frame.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getInfo(cb) {
	    if (this._bufferedBytes < 2) {
	      this._loop = false;
	      return;
	    }

	    const buf = this.consume(2);

	    if ((buf[0] & 0x30) !== 0x00) {
	      const error = this.createError(
	        RangeError,
	        'RSV2 and RSV3 must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_RSV_2_3'
	      );

	      cb(error);
	      return;
	    }

	    const compressed = (buf[0] & 0x40) === 0x40;

	    if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
	      const error = this.createError(
	        RangeError,
	        'RSV1 must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_RSV_1'
	      );

	      cb(error);
	      return;
	    }

	    this._fin = (buf[0] & 0x80) === 0x80;
	    this._opcode = buf[0] & 0x0f;
	    this._payloadLength = buf[1] & 0x7f;

	    if (this._opcode === 0x00) {
	      if (compressed) {
	        const error = this.createError(
	          RangeError,
	          'RSV1 must be clear',
	          true,
	          1002,
	          'WS_ERR_UNEXPECTED_RSV_1'
	        );

	        cb(error);
	        return;
	      }

	      if (!this._fragmented) {
	        const error = this.createError(
	          RangeError,
	          'invalid opcode 0',
	          true,
	          1002,
	          'WS_ERR_INVALID_OPCODE'
	        );

	        cb(error);
	        return;
	      }

	      this._opcode = this._fragmented;
	    } else if (this._opcode === 0x01 || this._opcode === 0x02) {
	      if (this._fragmented) {
	        const error = this.createError(
	          RangeError,
	          `invalid opcode ${this._opcode}`,
	          true,
	          1002,
	          'WS_ERR_INVALID_OPCODE'
	        );

	        cb(error);
	        return;
	      }

	      this._compressed = compressed;
	    } else if (this._opcode > 0x07 && this._opcode < 0x0b) {
	      if (!this._fin) {
	        const error = this.createError(
	          RangeError,
	          'FIN must be set',
	          true,
	          1002,
	          'WS_ERR_EXPECTED_FIN'
	        );

	        cb(error);
	        return;
	      }

	      if (compressed) {
	        const error = this.createError(
	          RangeError,
	          'RSV1 must be clear',
	          true,
	          1002,
	          'WS_ERR_UNEXPECTED_RSV_1'
	        );

	        cb(error);
	        return;
	      }

	      if (
	        this._payloadLength > 0x7d ||
	        (this._opcode === 0x08 && this._payloadLength === 1)
	      ) {
	        const error = this.createError(
	          RangeError,
	          `invalid payload length ${this._payloadLength}`,
	          true,
	          1002,
	          'WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH'
	        );

	        cb(error);
	        return;
	      }
	    } else {
	      const error = this.createError(
	        RangeError,
	        `invalid opcode ${this._opcode}`,
	        true,
	        1002,
	        'WS_ERR_INVALID_OPCODE'
	      );

	      cb(error);
	      return;
	    }

	    if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
	    this._masked = (buf[1] & 0x80) === 0x80;

	    if (this._isServer) {
	      if (!this._masked) {
	        const error = this.createError(
	          RangeError,
	          'MASK must be set',
	          true,
	          1002,
	          'WS_ERR_EXPECTED_MASK'
	        );

	        cb(error);
	        return;
	      }
	    } else if (this._masked) {
	      const error = this.createError(
	        RangeError,
	        'MASK must be clear',
	        true,
	        1002,
	        'WS_ERR_UNEXPECTED_MASK'
	      );

	      cb(error);
	      return;
	    }

	    if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
	    else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
	    else this.haveLength(cb);
	  }

	  /**
	   * Gets extended payload length (7+16).
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getPayloadLength16(cb) {
	    if (this._bufferedBytes < 2) {
	      this._loop = false;
	      return;
	    }

	    this._payloadLength = this.consume(2).readUInt16BE(0);
	    this.haveLength(cb);
	  }

	  /**
	   * Gets extended payload length (7+64).
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getPayloadLength64(cb) {
	    if (this._bufferedBytes < 8) {
	      this._loop = false;
	      return;
	    }

	    const buf = this.consume(8);
	    const num = buf.readUInt32BE(0);

	    //
	    // The maximum safe integer in JavaScript is 2^53 - 1. An error is returned
	    // if payload length is greater than this number.
	    //
	    if (num > Math.pow(2, 53 - 32) - 1) {
	      const error = this.createError(
	        RangeError,
	        'Unsupported WebSocket frame: payload length > 2^53 - 1',
	        false,
	        1009,
	        'WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH'
	      );

	      cb(error);
	      return;
	    }

	    this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
	    this.haveLength(cb);
	  }

	  /**
	   * Payload length has been read.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  haveLength(cb) {
	    if (this._payloadLength && this._opcode < 0x08) {
	      this._totalPayloadLength += this._payloadLength;
	      if (this._totalPayloadLength > this._maxPayload && this._maxPayload > 0) {
	        const error = this.createError(
	          RangeError,
	          'Max payload size exceeded',
	          false,
	          1009,
	          'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
	        );

	        cb(error);
	        return;
	      }
	    }

	    if (this._masked) this._state = GET_MASK;
	    else this._state = GET_DATA;
	  }

	  /**
	   * Reads mask bytes.
	   *
	   * @private
	   */
	  getMask() {
	    if (this._bufferedBytes < 4) {
	      this._loop = false;
	      return;
	    }

	    this._mask = this.consume(4);
	    this._state = GET_DATA;
	  }

	  /**
	   * Reads data bytes.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  getData(cb) {
	    let data = EMPTY_BUFFER;

	    if (this._payloadLength) {
	      if (this._bufferedBytes < this._payloadLength) {
	        this._loop = false;
	        return;
	      }

	      data = this.consume(this._payloadLength);

	      if (
	        this._masked &&
	        (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0
	      ) {
	        unmask(data, this._mask);
	      }
	    }

	    if (this._opcode > 0x07) {
	      this.controlMessage(data, cb);
	      return;
	    }

	    if (this._compressed) {
	      this._state = INFLATING;
	      this.decompress(data, cb);
	      return;
	    }

	    if (data.length) {
	      //
	      // This message is not compressed so its length is the sum of the payload
	      // length of all fragments.
	      //
	      this._messageLength = this._totalPayloadLength;
	      this._fragments.push(data);
	    }

	    this.dataMessage(cb);
	  }

	  /**
	   * Decompresses data.
	   *
	   * @param {Buffer} data Compressed data
	   * @param {Function} cb Callback
	   * @private
	   */
	  decompress(data, cb) {
	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

	    perMessageDeflate.decompress(data, this._fin, (err, buf) => {
	      if (err) return cb(err);

	      if (buf.length) {
	        this._messageLength += buf.length;
	        if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
	          const error = this.createError(
	            RangeError,
	            'Max payload size exceeded',
	            false,
	            1009,
	            'WS_ERR_UNSUPPORTED_MESSAGE_LENGTH'
	          );

	          cb(error);
	          return;
	        }

	        this._fragments.push(buf);
	      }

	      this.dataMessage(cb);
	      if (this._state === GET_INFO) this.startLoop(cb);
	    });
	  }

	  /**
	   * Handles a data message.
	   *
	   * @param {Function} cb Callback
	   * @private
	   */
	  dataMessage(cb) {
	    if (!this._fin) {
	      this._state = GET_INFO;
	      return;
	    }

	    const messageLength = this._messageLength;
	    const fragments = this._fragments;

	    this._totalPayloadLength = 0;
	    this._messageLength = 0;
	    this._fragmented = 0;
	    this._fragments = [];

	    if (this._opcode === 2) {
	      let data;

	      if (this._binaryType === 'nodebuffer') {
	        data = concat(fragments, messageLength);
	      } else if (this._binaryType === 'arraybuffer') {
	        data = toArrayBuffer(concat(fragments, messageLength));
	      } else if (this._binaryType === 'blob') {
	        data = new Blob(fragments);
	      } else {
	        data = fragments;
	      }

	      if (this._allowSynchronousEvents) {
	        this.emit('message', data, true);
	        this._state = GET_INFO;
	      } else {
	        this._state = DEFER_EVENT;
	        setImmediate(() => {
	          this.emit('message', data, true);
	          this._state = GET_INFO;
	          this.startLoop(cb);
	        });
	      }
	    } else {
	      const buf = concat(fragments, messageLength);

	      if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
	        const error = this.createError(
	          Error,
	          'invalid UTF-8 sequence',
	          true,
	          1007,
	          'WS_ERR_INVALID_UTF8'
	        );

	        cb(error);
	        return;
	      }

	      if (this._state === INFLATING || this._allowSynchronousEvents) {
	        this.emit('message', buf, false);
	        this._state = GET_INFO;
	      } else {
	        this._state = DEFER_EVENT;
	        setImmediate(() => {
	          this.emit('message', buf, false);
	          this._state = GET_INFO;
	          this.startLoop(cb);
	        });
	      }
	    }
	  }

	  /**
	   * Handles a control message.
	   *
	   * @param {Buffer} data Data to handle
	   * @return {(Error|RangeError|undefined)} A possible error
	   * @private
	   */
	  controlMessage(data, cb) {
	    if (this._opcode === 0x08) {
	      if (data.length === 0) {
	        this._loop = false;
	        this.emit('conclude', 1005, EMPTY_BUFFER);
	        this.end();
	      } else {
	        const code = data.readUInt16BE(0);

	        if (!isValidStatusCode(code)) {
	          const error = this.createError(
	            RangeError,
	            `invalid status code ${code}`,
	            true,
	            1002,
	            'WS_ERR_INVALID_CLOSE_CODE'
	          );

	          cb(error);
	          return;
	        }

	        const buf = new FastBuffer(
	          data.buffer,
	          data.byteOffset + 2,
	          data.length - 2
	        );

	        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
	          const error = this.createError(
	            Error,
	            'invalid UTF-8 sequence',
	            true,
	            1007,
	            'WS_ERR_INVALID_UTF8'
	          );

	          cb(error);
	          return;
	        }

	        this._loop = false;
	        this.emit('conclude', code, buf);
	        this.end();
	      }

	      this._state = GET_INFO;
	      return;
	    }

	    if (this._allowSynchronousEvents) {
	      this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
	      this._state = GET_INFO;
	    } else {
	      this._state = DEFER_EVENT;
	      setImmediate(() => {
	        this.emit(this._opcode === 0x09 ? 'ping' : 'pong', data);
	        this._state = GET_INFO;
	        this.startLoop(cb);
	      });
	    }
	  }

	  /**
	   * Builds an error object.
	   *
	   * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
	   * @param {String} message The error message
	   * @param {Boolean} prefix Specifies whether or not to add a default prefix to
	   *     `message`
	   * @param {Number} statusCode The status code
	   * @param {String} errorCode The exposed error code
	   * @return {(Error|RangeError)} The error
	   * @private
	   */
	  createError(ErrorCtor, message, prefix, statusCode, errorCode) {
	    this._loop = false;
	    this._errored = true;

	    const err = new ErrorCtor(
	      prefix ? `Invalid WebSocket frame: ${message}` : message
	    );

	    Error.captureStackTrace(err, this.createError);
	    err.code = errorCode;
	    err[kStatusCode] = statusCode;
	    return err;
	  }
	}

	receiver = Receiver;
	return receiver;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex" }] */

var sender;
var hasRequiredSender;

function requireSender () {
	if (hasRequiredSender) return sender;
	hasRequiredSender = 1;

	const { Duplex } = require$$0$2;
	const { randomFillSync } = require$$1;

	const PerMessageDeflate = requirePermessageDeflate();
	const { EMPTY_BUFFER, kWebSocket, NOOP } = requireConstants();
	const { isBlob, isValidStatusCode } = requireValidation();
	const { mask: applyMask, toBuffer } = requireBufferUtil();

	const kByteLength = Symbol('kByteLength');
	const maskBuffer = Buffer.alloc(4);
	const RANDOM_POOL_SIZE = 8 * 1024;
	let randomPool;
	let randomPoolPointer = RANDOM_POOL_SIZE;

	const DEFAULT = 0;
	const DEFLATING = 1;
	const GET_BLOB_DATA = 2;

	/**
	 * HyBi Sender implementation.
	 */
	class Sender {
	  /**
	   * Creates a Sender instance.
	   *
	   * @param {Duplex} socket The connection socket
	   * @param {Object} [extensions] An object containing the negotiated extensions
	   * @param {Function} [generateMask] The function used to generate the masking
	   *     key
	   */
	  constructor(socket, extensions, generateMask) {
	    this._extensions = extensions || {};

	    if (generateMask) {
	      this._generateMask = generateMask;
	      this._maskBuffer = Buffer.alloc(4);
	    }

	    this._socket = socket;

	    this._firstFragment = true;
	    this._compress = false;

	    this._bufferedBytes = 0;
	    this._queue = [];
	    this._state = DEFAULT;
	    this.onerror = NOOP;
	    this[kWebSocket] = undefined;
	  }

	  /**
	   * Frames a piece of data according to the HyBi WebSocket protocol.
	   *
	   * @param {(Buffer|String)} data The data to frame
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @return {(Buffer|String)[]} The framed data
	   * @public
	   */
	  static frame(data, options) {
	    let mask;
	    let merge = false;
	    let offset = 2;
	    let skipMasking = false;

	    if (options.mask) {
	      mask = options.maskBuffer || maskBuffer;

	      if (options.generateMask) {
	        options.generateMask(mask);
	      } else {
	        if (randomPoolPointer === RANDOM_POOL_SIZE) {
	          /* istanbul ignore else  */
	          if (randomPool === undefined) {
	            //
	            // This is lazily initialized because server-sent frames must not
	            // be masked so it may never be used.
	            //
	            randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
	          }

	          randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
	          randomPoolPointer = 0;
	        }

	        mask[0] = randomPool[randomPoolPointer++];
	        mask[1] = randomPool[randomPoolPointer++];
	        mask[2] = randomPool[randomPoolPointer++];
	        mask[3] = randomPool[randomPoolPointer++];
	      }

	      skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
	      offset = 6;
	    }

	    let dataLength;

	    if (typeof data === 'string') {
	      if (
	        (!options.mask || skipMasking) &&
	        options[kByteLength] !== undefined
	      ) {
	        dataLength = options[kByteLength];
	      } else {
	        data = Buffer.from(data);
	        dataLength = data.length;
	      }
	    } else {
	      dataLength = data.length;
	      merge = options.mask && options.readOnly && !skipMasking;
	    }

	    let payloadLength = dataLength;

	    if (dataLength >= 65536) {
	      offset += 8;
	      payloadLength = 127;
	    } else if (dataLength > 125) {
	      offset += 2;
	      payloadLength = 126;
	    }

	    const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);

	    target[0] = options.fin ? options.opcode | 0x80 : options.opcode;
	    if (options.rsv1) target[0] |= 0x40;

	    target[1] = payloadLength;

	    if (payloadLength === 126) {
	      target.writeUInt16BE(dataLength, 2);
	    } else if (payloadLength === 127) {
	      target[2] = target[3] = 0;
	      target.writeUIntBE(dataLength, 4, 6);
	    }

	    if (!options.mask) return [target, data];

	    target[1] |= 0x80;
	    target[offset - 4] = mask[0];
	    target[offset - 3] = mask[1];
	    target[offset - 2] = mask[2];
	    target[offset - 1] = mask[3];

	    if (skipMasking) return [target, data];

	    if (merge) {
	      applyMask(data, mask, target, offset, dataLength);
	      return [target];
	    }

	    applyMask(data, mask, data, 0, dataLength);
	    return [target, data];
	  }

	  /**
	   * Sends a close message to the other peer.
	   *
	   * @param {Number} [code] The status code component of the body
	   * @param {(String|Buffer)} [data] The message component of the body
	   * @param {Boolean} [mask=false] Specifies whether or not to mask the message
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  close(code, data, mask, cb) {
	    let buf;

	    if (code === undefined) {
	      buf = EMPTY_BUFFER;
	    } else if (typeof code !== 'number' || !isValidStatusCode(code)) {
	      throw new TypeError('First argument must be a valid error code number');
	    } else if (data === undefined || !data.length) {
	      buf = Buffer.allocUnsafe(2);
	      buf.writeUInt16BE(code, 0);
	    } else {
	      const length = Buffer.byteLength(data);

	      if (length > 123) {
	        throw new RangeError('The message must not be greater than 123 bytes');
	      }

	      buf = Buffer.allocUnsafe(2 + length);
	      buf.writeUInt16BE(code, 0);

	      if (typeof data === 'string') {
	        buf.write(data, 2);
	      } else {
	        buf.set(data, 2);
	      }
	    }

	    const options = {
	      [kByteLength]: buf.length,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x08,
	      readOnly: false,
	      rsv1: false
	    };

	    if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, buf, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(buf, options), cb);
	    }
	  }

	  /**
	   * Sends a ping message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  ping(data, mask, cb) {
	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (byteLength > 125) {
	      throw new RangeError('The data size must not be greater than 125 bytes');
	    }

	    const options = {
	      [kByteLength]: byteLength,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x09,
	      readOnly,
	      rsv1: false
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, false, options, cb]);
	      } else {
	        this.getBlobData(data, false, options, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(data, options), cb);
	    }
	  }

	  /**
	   * Sends a pong message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  pong(data, mask, cb) {
	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (byteLength > 125) {
	      throw new RangeError('The data size must not be greater than 125 bytes');
	    }

	    const options = {
	      [kByteLength]: byteLength,
	      fin: true,
	      generateMask: this._generateMask,
	      mask,
	      maskBuffer: this._maskBuffer,
	      opcode: 0x0a,
	      readOnly,
	      rsv1: false
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, false, options, cb]);
	      } else {
	        this.getBlobData(data, false, options, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, false, options, cb]);
	    } else {
	      this.sendFrame(Sender.frame(data, options), cb);
	    }
	  }

	  /**
	   * Sends a data message to the other peer.
	   *
	   * @param {*} data The message to send
	   * @param {Object} options Options object
	   * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
	   *     or text
	   * @param {Boolean} [options.compress=false] Specifies whether or not to
	   *     compress `data`
	   * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
	   *     last one
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Function} [cb] Callback
	   * @public
	   */
	  send(data, options, cb) {
	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];
	    let opcode = options.binary ? 2 : 1;
	    let rsv1 = options.compress;

	    let byteLength;
	    let readOnly;

	    if (typeof data === 'string') {
	      byteLength = Buffer.byteLength(data);
	      readOnly = false;
	    } else if (isBlob(data)) {
	      byteLength = data.size;
	      readOnly = false;
	    } else {
	      data = toBuffer(data);
	      byteLength = data.length;
	      readOnly = toBuffer.readOnly;
	    }

	    if (this._firstFragment) {
	      this._firstFragment = false;
	      if (
	        rsv1 &&
	        perMessageDeflate &&
	        perMessageDeflate.params[
	          perMessageDeflate._isServer
	            ? 'server_no_context_takeover'
	            : 'client_no_context_takeover'
	        ]
	      ) {
	        rsv1 = byteLength >= perMessageDeflate._threshold;
	      }
	      this._compress = rsv1;
	    } else {
	      rsv1 = false;
	      opcode = 0;
	    }

	    if (options.fin) this._firstFragment = true;

	    const opts = {
	      [kByteLength]: byteLength,
	      fin: options.fin,
	      generateMask: this._generateMask,
	      mask: options.mask,
	      maskBuffer: this._maskBuffer,
	      opcode,
	      readOnly,
	      rsv1
	    };

	    if (isBlob(data)) {
	      if (this._state !== DEFAULT) {
	        this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
	      } else {
	        this.getBlobData(data, this._compress, opts, cb);
	      }
	    } else if (this._state !== DEFAULT) {
	      this.enqueue([this.dispatch, data, this._compress, opts, cb]);
	    } else {
	      this.dispatch(data, this._compress, opts, cb);
	    }
	  }

	  /**
	   * Gets the contents of a blob as binary data.
	   *
	   * @param {Blob} blob The blob
	   * @param {Boolean} [compress=false] Specifies whether or not to compress
	   *     the data
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  getBlobData(blob, compress, options, cb) {
	    this._bufferedBytes += options[kByteLength];
	    this._state = GET_BLOB_DATA;

	    blob
	      .arrayBuffer()
	      .then((arrayBuffer) => {
	        if (this._socket.destroyed) {
	          const err = new Error(
	            'The socket was closed while the blob was being read'
	          );

	          //
	          // `callCallbacks` is called in the next tick to ensure that errors
	          // that might be thrown in the callbacks behave like errors thrown
	          // outside the promise chain.
	          //
	          process.nextTick(callCallbacks, this, err, cb);
	          return;
	        }

	        this._bufferedBytes -= options[kByteLength];
	        const data = toBuffer(arrayBuffer);

	        if (!compress) {
	          this._state = DEFAULT;
	          this.sendFrame(Sender.frame(data, options), cb);
	          this.dequeue();
	        } else {
	          this.dispatch(data, compress, options, cb);
	        }
	      })
	      .catch((err) => {
	        //
	        // `onError` is called in the next tick for the same reason that
	        // `callCallbacks` above is.
	        //
	        process.nextTick(onError, this, err, cb);
	      });
	  }

	  /**
	   * Dispatches a message.
	   *
	   * @param {(Buffer|String)} data The message to send
	   * @param {Boolean} [compress=false] Specifies whether or not to compress
	   *     `data`
	   * @param {Object} options Options object
	   * @param {Boolean} [options.fin=false] Specifies whether or not to set the
	   *     FIN bit
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Boolean} [options.mask=false] Specifies whether or not to mask
	   *     `data`
	   * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
	   *     key
	   * @param {Number} options.opcode The opcode
	   * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
	   *     modified
	   * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
	   *     RSV1 bit
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  dispatch(data, compress, options, cb) {
	    if (!compress) {
	      this.sendFrame(Sender.frame(data, options), cb);
	      return;
	    }

	    const perMessageDeflate = this._extensions[PerMessageDeflate.extensionName];

	    this._bufferedBytes += options[kByteLength];
	    this._state = DEFLATING;
	    perMessageDeflate.compress(data, options.fin, (_, buf) => {
	      if (this._socket.destroyed) {
	        const err = new Error(
	          'The socket was closed while data was being compressed'
	        );

	        callCallbacks(this, err, cb);
	        return;
	      }

	      this._bufferedBytes -= options[kByteLength];
	      this._state = DEFAULT;
	      options.readOnly = false;
	      this.sendFrame(Sender.frame(buf, options), cb);
	      this.dequeue();
	    });
	  }

	  /**
	   * Executes queued send operations.
	   *
	   * @private
	   */
	  dequeue() {
	    while (this._state === DEFAULT && this._queue.length) {
	      const params = this._queue.shift();

	      this._bufferedBytes -= params[3][kByteLength];
	      Reflect.apply(params[0], this, params.slice(1));
	    }
	  }

	  /**
	   * Enqueues a send operation.
	   *
	   * @param {Array} params Send operation parameters.
	   * @private
	   */
	  enqueue(params) {
	    this._bufferedBytes += params[3][kByteLength];
	    this._queue.push(params);
	  }

	  /**
	   * Sends a frame.
	   *
	   * @param {(Buffer | String)[]} list The frame to send
	   * @param {Function} [cb] Callback
	   * @private
	   */
	  sendFrame(list, cb) {
	    if (list.length === 2) {
	      this._socket.cork();
	      this._socket.write(list[0]);
	      this._socket.write(list[1], cb);
	      this._socket.uncork();
	    } else {
	      this._socket.write(list[0], cb);
	    }
	  }
	}

	sender = Sender;

	/**
	 * Calls queued callbacks with an error.
	 *
	 * @param {Sender} sender The `Sender` instance
	 * @param {Error} err The error to call the callbacks with
	 * @param {Function} [cb] The first callback
	 * @private
	 */
	function callCallbacks(sender, err, cb) {
	  if (typeof cb === 'function') cb(err);

	  for (let i = 0; i < sender._queue.length; i++) {
	    const params = sender._queue[i];
	    const callback = params[params.length - 1];

	    if (typeof callback === 'function') callback(err);
	  }
	}

	/**
	 * Handles a `Sender` error.
	 *
	 * @param {Sender} sender The `Sender` instance
	 * @param {Error} err The error
	 * @param {Function} [cb] The first pending callback
	 * @private
	 */
	function onError(sender, err, cb) {
	  callCallbacks(sender, err, cb);
	  sender.onerror(err);
	}
	return sender;
}

var eventTarget;
var hasRequiredEventTarget;

function requireEventTarget () {
	if (hasRequiredEventTarget) return eventTarget;
	hasRequiredEventTarget = 1;

	const { kForOnEventAttribute, kListener } = requireConstants();

	const kCode = Symbol('kCode');
	const kData = Symbol('kData');
	const kError = Symbol('kError');
	const kMessage = Symbol('kMessage');
	const kReason = Symbol('kReason');
	const kTarget = Symbol('kTarget');
	const kType = Symbol('kType');
	const kWasClean = Symbol('kWasClean');

	/**
	 * Class representing an event.
	 */
	class Event {
	  /**
	   * Create a new `Event`.
	   *
	   * @param {String} type The name of the event
	   * @throws {TypeError} If the `type` argument is not specified
	   */
	  constructor(type) {
	    this[kTarget] = null;
	    this[kType] = type;
	  }

	  /**
	   * @type {*}
	   */
	  get target() {
	    return this[kTarget];
	  }

	  /**
	   * @type {String}
	   */
	  get type() {
	    return this[kType];
	  }
	}

	Object.defineProperty(Event.prototype, 'target', { enumerable: true });
	Object.defineProperty(Event.prototype, 'type', { enumerable: true });

	/**
	 * Class representing a close event.
	 *
	 * @extends Event
	 */
	class CloseEvent extends Event {
	  /**
	   * Create a new `CloseEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {Number} [options.code=0] The status code explaining why the
	   *     connection was closed
	   * @param {String} [options.reason=''] A human-readable string explaining why
	   *     the connection was closed
	   * @param {Boolean} [options.wasClean=false] Indicates whether or not the
	   *     connection was cleanly closed
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kCode] = options.code === undefined ? 0 : options.code;
	    this[kReason] = options.reason === undefined ? '' : options.reason;
	    this[kWasClean] = options.wasClean === undefined ? false : options.wasClean;
	  }

	  /**
	   * @type {Number}
	   */
	  get code() {
	    return this[kCode];
	  }

	  /**
	   * @type {String}
	   */
	  get reason() {
	    return this[kReason];
	  }

	  /**
	   * @type {Boolean}
	   */
	  get wasClean() {
	    return this[kWasClean];
	  }
	}

	Object.defineProperty(CloseEvent.prototype, 'code', { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, 'reason', { enumerable: true });
	Object.defineProperty(CloseEvent.prototype, 'wasClean', { enumerable: true });

	/**
	 * Class representing an error event.
	 *
	 * @extends Event
	 */
	class ErrorEvent extends Event {
	  /**
	   * Create a new `ErrorEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {*} [options.error=null] The error that generated this event
	   * @param {String} [options.message=''] The error message
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kError] = options.error === undefined ? null : options.error;
	    this[kMessage] = options.message === undefined ? '' : options.message;
	  }

	  /**
	   * @type {*}
	   */
	  get error() {
	    return this[kError];
	  }

	  /**
	   * @type {String}
	   */
	  get message() {
	    return this[kMessage];
	  }
	}

	Object.defineProperty(ErrorEvent.prototype, 'error', { enumerable: true });
	Object.defineProperty(ErrorEvent.prototype, 'message', { enumerable: true });

	/**
	 * Class representing a message event.
	 *
	 * @extends Event
	 */
	class MessageEvent extends Event {
	  /**
	   * Create a new `MessageEvent`.
	   *
	   * @param {String} type The name of the event
	   * @param {Object} [options] A dictionary object that allows for setting
	   *     attributes via object members of the same name
	   * @param {*} [options.data=null] The message content
	   */
	  constructor(type, options = {}) {
	    super(type);

	    this[kData] = options.data === undefined ? null : options.data;
	  }

	  /**
	   * @type {*}
	   */
	  get data() {
	    return this[kData];
	  }
	}

	Object.defineProperty(MessageEvent.prototype, 'data', { enumerable: true });

	/**
	 * This provides methods for emulating the `EventTarget` interface. It's not
	 * meant to be used directly.
	 *
	 * @mixin
	 */
	const EventTarget = {
	  /**
	   * Register an event listener.
	   *
	   * @param {String} type A string representing the event type to listen for
	   * @param {(Function|Object)} handler The listener to add
	   * @param {Object} [options] An options object specifies characteristics about
	   *     the event listener
	   * @param {Boolean} [options.once=false] A `Boolean` indicating that the
	   *     listener should be invoked at most once after being added. If `true`,
	   *     the listener would be automatically removed when invoked.
	   * @public
	   */
	  addEventListener(type, handler, options = {}) {
	    for (const listener of this.listeners(type)) {
	      if (
	        !options[kForOnEventAttribute] &&
	        listener[kListener] === handler &&
	        !listener[kForOnEventAttribute]
	      ) {
	        return;
	      }
	    }

	    let wrapper;

	    if (type === 'message') {
	      wrapper = function onMessage(data, isBinary) {
	        const event = new MessageEvent('message', {
	          data: isBinary ? data : data.toString()
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'close') {
	      wrapper = function onClose(code, message) {
	        const event = new CloseEvent('close', {
	          code,
	          reason: message.toString(),
	          wasClean: this._closeFrameReceived && this._closeFrameSent
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'error') {
	      wrapper = function onError(error) {
	        const event = new ErrorEvent('error', {
	          error,
	          message: error.message
	        });

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else if (type === 'open') {
	      wrapper = function onOpen() {
	        const event = new Event('open');

	        event[kTarget] = this;
	        callListener(handler, this, event);
	      };
	    } else {
	      return;
	    }

	    wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
	    wrapper[kListener] = handler;

	    if (options.once) {
	      this.once(type, wrapper);
	    } else {
	      this.on(type, wrapper);
	    }
	  },

	  /**
	   * Remove an event listener.
	   *
	   * @param {String} type A string representing the event type to remove
	   * @param {(Function|Object)} handler The listener to remove
	   * @public
	   */
	  removeEventListener(type, handler) {
	    for (const listener of this.listeners(type)) {
	      if (listener[kListener] === handler && !listener[kForOnEventAttribute]) {
	        this.removeListener(type, listener);
	        break;
	      }
	    }
	  }
	};

	eventTarget = {
	  CloseEvent,
	  ErrorEvent,
	  Event,
	  EventTarget,
	  MessageEvent
	};

	/**
	 * Call an event listener
	 *
	 * @param {(Function|Object)} listener The listener to call
	 * @param {*} thisArg The value to use as `this`` when calling the listener
	 * @param {Event} event The event to pass to the listener
	 * @private
	 */
	function callListener(listener, thisArg, event) {
	  if (typeof listener === 'object' && listener.handleEvent) {
	    listener.handleEvent.call(listener, event);
	  } else {
	    listener.call(thisArg, event);
	  }
	}
	return eventTarget;
}

var extension;
var hasRequiredExtension;

function requireExtension () {
	if (hasRequiredExtension) return extension;
	hasRequiredExtension = 1;

	const { tokenChars } = requireValidation();

	/**
	 * Adds an offer to the map of extension offers or a parameter to the map of
	 * parameters.
	 *
	 * @param {Object} dest The map of extension offers or parameters
	 * @param {String} name The extension or parameter name
	 * @param {(Object|Boolean|String)} elem The extension parameters or the
	 *     parameter value
	 * @private
	 */
	function push(dest, name, elem) {
	  if (dest[name] === undefined) dest[name] = [elem];
	  else dest[name].push(elem);
	}

	/**
	 * Parses the `Sec-WebSocket-Extensions` header into an object.
	 *
	 * @param {String} header The field value of the header
	 * @return {Object} The parsed object
	 * @public
	 */
	function parse(header) {
	  const offers = Object.create(null);
	  let params = Object.create(null);
	  let mustUnescape = false;
	  let isEscaping = false;
	  let inQuotes = false;
	  let extensionName;
	  let paramName;
	  let start = -1;
	  let code = -1;
	  let end = -1;
	  let i = 0;

	  for (; i < header.length; i++) {
	    code = header.charCodeAt(i);

	    if (extensionName === undefined) {
	      if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (
	        i !== 0 &&
	        (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
	      ) {
	        if (end === -1 && start !== -1) end = i;
	      } else if (code === 0x3b /* ';' */ || code === 0x2c /* ',' */) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        const name = header.slice(start, end);
	        if (code === 0x2c) {
	          push(offers, name, params);
	          params = Object.create(null);
	        } else {
	          extensionName = name;
	        }

	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    } else if (paramName === undefined) {
	      if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (code === 0x20 || code === 0x09) {
	        if (end === -1 && start !== -1) end = i;
	      } else if (code === 0x3b || code === 0x2c) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        push(params, header.slice(start, end), true);
	        if (code === 0x2c) {
	          push(offers, extensionName, params);
	          params = Object.create(null);
	          extensionName = undefined;
	        }

	        start = end = -1;
	      } else if (code === 0x3d /* '=' */ && start !== -1 && end === -1) {
	        paramName = header.slice(start, i);
	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    } else {
	      //
	      // The value of a quoted-string after unescaping must conform to the
	      // token ABNF, so only token characters are valid.
	      // Ref: https://tools.ietf.org/html/rfc6455#section-9.1
	      //
	      if (isEscaping) {
	        if (tokenChars[code] !== 1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }
	        if (start === -1) start = i;
	        else if (!mustUnescape) mustUnescape = true;
	        isEscaping = false;
	      } else if (inQuotes) {
	        if (tokenChars[code] === 1) {
	          if (start === -1) start = i;
	        } else if (code === 0x22 /* '"' */ && start !== -1) {
	          inQuotes = false;
	          end = i;
	        } else if (code === 0x5c /* '\' */) {
	          isEscaping = true;
	        } else {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }
	      } else if (code === 0x22 && header.charCodeAt(i - 1) === 0x3d) {
	        inQuotes = true;
	      } else if (end === -1 && tokenChars[code] === 1) {
	        if (start === -1) start = i;
	      } else if (start !== -1 && (code === 0x20 || code === 0x09)) {
	        if (end === -1) end = i;
	      } else if (code === 0x3b || code === 0x2c) {
	        if (start === -1) {
	          throw new SyntaxError(`Unexpected character at index ${i}`);
	        }

	        if (end === -1) end = i;
	        let value = header.slice(start, end);
	        if (mustUnescape) {
	          value = value.replace(/\\/g, '');
	          mustUnescape = false;
	        }
	        push(params, paramName, value);
	        if (code === 0x2c) {
	          push(offers, extensionName, params);
	          params = Object.create(null);
	          extensionName = undefined;
	        }

	        paramName = undefined;
	        start = end = -1;
	      } else {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }
	    }
	  }

	  if (start === -1 || inQuotes || code === 0x20 || code === 0x09) {
	    throw new SyntaxError('Unexpected end of input');
	  }

	  if (end === -1) end = i;
	  const token = header.slice(start, end);
	  if (extensionName === undefined) {
	    push(offers, token, params);
	  } else {
	    if (paramName === undefined) {
	      push(params, token, true);
	    } else if (mustUnescape) {
	      push(params, paramName, token.replace(/\\/g, ''));
	    } else {
	      push(params, paramName, token);
	    }
	    push(offers, extensionName, params);
	  }

	  return offers;
	}

	/**
	 * Builds the `Sec-WebSocket-Extensions` header field value.
	 *
	 * @param {Object} extensions The map of extensions and parameters to format
	 * @return {String} A string representing the given object
	 * @public
	 */
	function format(extensions) {
	  return Object.keys(extensions)
	    .map((extension) => {
	      let configurations = extensions[extension];
	      if (!Array.isArray(configurations)) configurations = [configurations];
	      return configurations
	        .map((params) => {
	          return [extension]
	            .concat(
	              Object.keys(params).map((k) => {
	                let values = params[k];
	                if (!Array.isArray(values)) values = [values];
	                return values
	                  .map((v) => (v === true ? k : `${k}=${v}`))
	                  .join('; ');
	              })
	            )
	            .join('; ');
	        })
	        .join(', ');
	    })
	    .join(', ');
	}

	extension = { format, parse };
	return extension;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex|Readable$", "caughtErrors": "none" }] */

var websocket;
var hasRequiredWebsocket;

function requireWebsocket () {
	if (hasRequiredWebsocket) return websocket;
	hasRequiredWebsocket = 1;

	const EventEmitter = require$$0$3;
	const https = require$$1$1;
	const http = require$$2;
	const net = require$$3;
	const tls = require$$4;
	const { randomBytes, createHash } = require$$1;
	const { Duplex, Readable } = require$$0$2;
	const { URL } = require$$7;

	const PerMessageDeflate = requirePermessageDeflate();
	const Receiver = requireReceiver();
	const Sender = requireSender();
	const { isBlob } = requireValidation();

	const {
	  BINARY_TYPES,
	  EMPTY_BUFFER,
	  GUID,
	  kForOnEventAttribute,
	  kListener,
	  kStatusCode,
	  kWebSocket,
	  NOOP
	} = requireConstants();
	const {
	  EventTarget: { addEventListener, removeEventListener }
	} = requireEventTarget();
	const { format, parse } = requireExtension();
	const { toBuffer } = requireBufferUtil();

	const closeTimeout = 30 * 1000;
	const kAborted = Symbol('kAborted');
	const protocolVersions = [8, 13];
	const readyStates = ['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'];
	const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;

	/**
	 * Class representing a WebSocket.
	 *
	 * @extends EventEmitter
	 */
	class WebSocket extends EventEmitter {
	  /**
	   * Create a new `WebSocket`.
	   *
	   * @param {(String|URL)} address The URL to which to connect
	   * @param {(String|String[])} [protocols] The subprotocols
	   * @param {Object} [options] Connection options
	   */
	  constructor(address, protocols, options) {
	    super();

	    this._binaryType = BINARY_TYPES[0];
	    this._closeCode = 1006;
	    this._closeFrameReceived = false;
	    this._closeFrameSent = false;
	    this._closeMessage = EMPTY_BUFFER;
	    this._closeTimer = null;
	    this._errorEmitted = false;
	    this._extensions = {};
	    this._paused = false;
	    this._protocol = '';
	    this._readyState = WebSocket.CONNECTING;
	    this._receiver = null;
	    this._sender = null;
	    this._socket = null;

	    if (address !== null) {
	      this._bufferedAmount = 0;
	      this._isServer = false;
	      this._redirects = 0;

	      if (protocols === undefined) {
	        protocols = [];
	      } else if (!Array.isArray(protocols)) {
	        if (typeof protocols === 'object' && protocols !== null) {
	          options = protocols;
	          protocols = [];
	        } else {
	          protocols = [protocols];
	        }
	      }

	      initAsClient(this, address, protocols, options);
	    } else {
	      this._autoPong = options.autoPong;
	      this._isServer = true;
	    }
	  }

	  /**
	   * For historical reasons, the custom "nodebuffer" type is used by the default
	   * instead of "blob".
	   *
	   * @type {String}
	   */
	  get binaryType() {
	    return this._binaryType;
	  }

	  set binaryType(type) {
	    if (!BINARY_TYPES.includes(type)) return;

	    this._binaryType = type;

	    //
	    // Allow to change `binaryType` on the fly.
	    //
	    if (this._receiver) this._receiver._binaryType = type;
	  }

	  /**
	   * @type {Number}
	   */
	  get bufferedAmount() {
	    if (!this._socket) return this._bufferedAmount;

	    return this._socket._writableState.length + this._sender._bufferedBytes;
	  }

	  /**
	   * @type {String}
	   */
	  get extensions() {
	    return Object.keys(this._extensions).join();
	  }

	  /**
	   * @type {Boolean}
	   */
	  get isPaused() {
	    return this._paused;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onclose() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onerror() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onopen() {
	    return null;
	  }

	  /**
	   * @type {Function}
	   */
	  /* istanbul ignore next */
	  get onmessage() {
	    return null;
	  }

	  /**
	   * @type {String}
	   */
	  get protocol() {
	    return this._protocol;
	  }

	  /**
	   * @type {Number}
	   */
	  get readyState() {
	    return this._readyState;
	  }

	  /**
	   * @type {String}
	   */
	  get url() {
	    return this._url;
	  }

	  /**
	   * Set up the socket and the internal resources.
	   *
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Object} options Options object
	   * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {Function} [options.generateMask] The function used to generate the
	   *     masking key
	   * @param {Number} [options.maxPayload=0] The maximum allowed message size
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   * @private
	   */
	  setSocket(socket, head, options) {
	    const receiver = new Receiver({
	      allowSynchronousEvents: options.allowSynchronousEvents,
	      binaryType: this.binaryType,
	      extensions: this._extensions,
	      isServer: this._isServer,
	      maxPayload: options.maxPayload,
	      skipUTF8Validation: options.skipUTF8Validation
	    });

	    const sender = new Sender(socket, this._extensions, options.generateMask);

	    this._receiver = receiver;
	    this._sender = sender;
	    this._socket = socket;

	    receiver[kWebSocket] = this;
	    sender[kWebSocket] = this;
	    socket[kWebSocket] = this;

	    receiver.on('conclude', receiverOnConclude);
	    receiver.on('drain', receiverOnDrain);
	    receiver.on('error', receiverOnError);
	    receiver.on('message', receiverOnMessage);
	    receiver.on('ping', receiverOnPing);
	    receiver.on('pong', receiverOnPong);

	    sender.onerror = senderOnError;

	    //
	    // These methods may not be available if `socket` is just a `Duplex`.
	    //
	    if (socket.setTimeout) socket.setTimeout(0);
	    if (socket.setNoDelay) socket.setNoDelay();

	    if (head.length > 0) socket.unshift(head);

	    socket.on('close', socketOnClose);
	    socket.on('data', socketOnData);
	    socket.on('end', socketOnEnd);
	    socket.on('error', socketOnError);

	    this._readyState = WebSocket.OPEN;
	    this.emit('open');
	  }

	  /**
	   * Emit the `'close'` event.
	   *
	   * @private
	   */
	  emitClose() {
	    if (!this._socket) {
	      this._readyState = WebSocket.CLOSED;
	      this.emit('close', this._closeCode, this._closeMessage);
	      return;
	    }

	    if (this._extensions[PerMessageDeflate.extensionName]) {
	      this._extensions[PerMessageDeflate.extensionName].cleanup();
	    }

	    this._receiver.removeAllListeners();
	    this._readyState = WebSocket.CLOSED;
	    this.emit('close', this._closeCode, this._closeMessage);
	  }

	  /**
	   * Start a closing handshake.
	   *
	   *          +----------+   +-----------+   +----------+
	   *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
	   *    |     +----------+   +-----------+   +----------+     |
	   *          +----------+   +-----------+         |
	   * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
	   *          +----------+   +-----------+   |
	   *    |           |                        |   +---+        |
	   *                +------------------------+-->|fin| - - - -
	   *    |         +---+                      |   +---+
	   *     - - - - -|fin|<---------------------+
	   *              +---+
	   *
	   * @param {Number} [code] Status code explaining why the connection is closing
	   * @param {(String|Buffer)} [data] The reason why the connection is
	   *     closing
	   * @public
	   */
	  close(code, data) {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      const msg = 'WebSocket was closed before the connection was established';
	      abortHandshake(this, this._req, msg);
	      return;
	    }

	    if (this.readyState === WebSocket.CLOSING) {
	      if (
	        this._closeFrameSent &&
	        (this._closeFrameReceived || this._receiver._writableState.errorEmitted)
	      ) {
	        this._socket.end();
	      }

	      return;
	    }

	    this._readyState = WebSocket.CLOSING;
	    this._sender.close(code, data, !this._isServer, (err) => {
	      //
	      // This error is handled by the `'error'` listener on the socket. We only
	      // want to know if the close frame has been sent here.
	      //
	      if (err) return;

	      this._closeFrameSent = true;

	      if (
	        this._closeFrameReceived ||
	        this._receiver._writableState.errorEmitted
	      ) {
	        this._socket.end();
	      }
	    });

	    setCloseTimer(this);
	  }

	  /**
	   * Pause the socket.
	   *
	   * @public
	   */
	  pause() {
	    if (
	      this.readyState === WebSocket.CONNECTING ||
	      this.readyState === WebSocket.CLOSED
	    ) {
	      return;
	    }

	    this._paused = true;
	    this._socket.pause();
	  }

	  /**
	   * Send a ping.
	   *
	   * @param {*} [data] The data to send
	   * @param {Boolean} [mask] Indicates whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when the ping is sent
	   * @public
	   */
	  ping(data, mask, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof data === 'function') {
	      cb = data;
	      data = mask = undefined;
	    } else if (typeof mask === 'function') {
	      cb = mask;
	      mask = undefined;
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    if (mask === undefined) mask = !this._isServer;
	    this._sender.ping(data || EMPTY_BUFFER, mask, cb);
	  }

	  /**
	   * Send a pong.
	   *
	   * @param {*} [data] The data to send
	   * @param {Boolean} [mask] Indicates whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when the pong is sent
	   * @public
	   */
	  pong(data, mask, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof data === 'function') {
	      cb = data;
	      data = mask = undefined;
	    } else if (typeof mask === 'function') {
	      cb = mask;
	      mask = undefined;
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    if (mask === undefined) mask = !this._isServer;
	    this._sender.pong(data || EMPTY_BUFFER, mask, cb);
	  }

	  /**
	   * Resume the socket.
	   *
	   * @public
	   */
	  resume() {
	    if (
	      this.readyState === WebSocket.CONNECTING ||
	      this.readyState === WebSocket.CLOSED
	    ) {
	      return;
	    }

	    this._paused = false;
	    if (!this._receiver._writableState.needDrain) this._socket.resume();
	  }

	  /**
	   * Send a data message.
	   *
	   * @param {*} data The message to send
	   * @param {Object} [options] Options object
	   * @param {Boolean} [options.binary] Specifies whether `data` is binary or
	   *     text
	   * @param {Boolean} [options.compress] Specifies whether or not to compress
	   *     `data`
	   * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
	   *     last one
	   * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
	   * @param {Function} [cb] Callback which is executed when data is written out
	   * @public
	   */
	  send(data, options, cb) {
	    if (this.readyState === WebSocket.CONNECTING) {
	      throw new Error('WebSocket is not open: readyState 0 (CONNECTING)');
	    }

	    if (typeof options === 'function') {
	      cb = options;
	      options = {};
	    }

	    if (typeof data === 'number') data = data.toString();

	    if (this.readyState !== WebSocket.OPEN) {
	      sendAfterClose(this, data, cb);
	      return;
	    }

	    const opts = {
	      binary: typeof data !== 'string',
	      mask: !this._isServer,
	      compress: true,
	      fin: true,
	      ...options
	    };

	    if (!this._extensions[PerMessageDeflate.extensionName]) {
	      opts.compress = false;
	    }

	    this._sender.send(data || EMPTY_BUFFER, opts, cb);
	  }

	  /**
	   * Forcibly close the connection.
	   *
	   * @public
	   */
	  terminate() {
	    if (this.readyState === WebSocket.CLOSED) return;
	    if (this.readyState === WebSocket.CONNECTING) {
	      const msg = 'WebSocket was closed before the connection was established';
	      abortHandshake(this, this._req, msg);
	      return;
	    }

	    if (this._socket) {
	      this._readyState = WebSocket.CLOSING;
	      this._socket.destroy();
	    }
	  }
	}

	/**
	 * @constant {Number} CONNECTING
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CONNECTING', {
	  enumerable: true,
	  value: readyStates.indexOf('CONNECTING')
	});

	/**
	 * @constant {Number} CONNECTING
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CONNECTING', {
	  enumerable: true,
	  value: readyStates.indexOf('CONNECTING')
	});

	/**
	 * @constant {Number} OPEN
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'OPEN', {
	  enumerable: true,
	  value: readyStates.indexOf('OPEN')
	});

	/**
	 * @constant {Number} OPEN
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'OPEN', {
	  enumerable: true,
	  value: readyStates.indexOf('OPEN')
	});

	/**
	 * @constant {Number} CLOSING
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CLOSING', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSING')
	});

	/**
	 * @constant {Number} CLOSING
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CLOSING', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSING')
	});

	/**
	 * @constant {Number} CLOSED
	 * @memberof WebSocket
	 */
	Object.defineProperty(WebSocket, 'CLOSED', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSED')
	});

	/**
	 * @constant {Number} CLOSED
	 * @memberof WebSocket.prototype
	 */
	Object.defineProperty(WebSocket.prototype, 'CLOSED', {
	  enumerable: true,
	  value: readyStates.indexOf('CLOSED')
	});

	[
	  'binaryType',
	  'bufferedAmount',
	  'extensions',
	  'isPaused',
	  'protocol',
	  'readyState',
	  'url'
	].forEach((property) => {
	  Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
	});

	//
	// Add the `onopen`, `onerror`, `onclose`, and `onmessage` attributes.
	// See https://html.spec.whatwg.org/multipage/comms.html#the-websocket-interface
	//
	['open', 'error', 'close', 'message'].forEach((method) => {
	  Object.defineProperty(WebSocket.prototype, `on${method}`, {
	    enumerable: true,
	    get() {
	      for (const listener of this.listeners(method)) {
	        if (listener[kForOnEventAttribute]) return listener[kListener];
	      }

	      return null;
	    },
	    set(handler) {
	      for (const listener of this.listeners(method)) {
	        if (listener[kForOnEventAttribute]) {
	          this.removeListener(method, listener);
	          break;
	        }
	      }

	      if (typeof handler !== 'function') return;

	      this.addEventListener(method, handler, {
	        [kForOnEventAttribute]: true
	      });
	    }
	  });
	});

	WebSocket.prototype.addEventListener = addEventListener;
	WebSocket.prototype.removeEventListener = removeEventListener;

	websocket = WebSocket;

	/**
	 * Initialize a WebSocket client.
	 *
	 * @param {WebSocket} websocket The client to initialize
	 * @param {(String|URL)} address The URL to which to connect
	 * @param {Array} protocols The subprotocols
	 * @param {Object} [options] Connection options
	 * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether any
	 *     of the `'message'`, `'ping'`, and `'pong'` events can be emitted multiple
	 *     times in the same tick
	 * @param {Boolean} [options.autoPong=true] Specifies whether or not to
	 *     automatically send a pong in response to a ping
	 * @param {Function} [options.finishRequest] A function which can be used to
	 *     customize the headers of each http request before it is sent
	 * @param {Boolean} [options.followRedirects=false] Whether or not to follow
	 *     redirects
	 * @param {Function} [options.generateMask] The function used to generate the
	 *     masking key
	 * @param {Number} [options.handshakeTimeout] Timeout in milliseconds for the
	 *     handshake request
	 * @param {Number} [options.maxPayload=104857600] The maximum allowed message
	 *     size
	 * @param {Number} [options.maxRedirects=10] The maximum number of redirects
	 *     allowed
	 * @param {String} [options.origin] Value of the `Origin` or
	 *     `Sec-WebSocket-Origin` header
	 * @param {(Boolean|Object)} [options.perMessageDeflate=true] Enable/disable
	 *     permessage-deflate
	 * @param {Number} [options.protocolVersion=13] Value of the
	 *     `Sec-WebSocket-Version` header
	 * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	 *     not to skip UTF-8 validation for text and close messages
	 * @private
	 */
	function initAsClient(websocket, address, protocols, options) {
	  const opts = {
	    allowSynchronousEvents: true,
	    autoPong: true,
	    protocolVersion: protocolVersions[1],
	    maxPayload: 100 * 1024 * 1024,
	    skipUTF8Validation: false,
	    perMessageDeflate: true,
	    followRedirects: false,
	    maxRedirects: 10,
	    ...options,
	    socketPath: undefined,
	    hostname: undefined,
	    protocol: undefined,
	    timeout: undefined,
	    method: 'GET',
	    host: undefined,
	    path: undefined,
	    port: undefined
	  };

	  websocket._autoPong = opts.autoPong;

	  if (!protocolVersions.includes(opts.protocolVersion)) {
	    throw new RangeError(
	      `Unsupported protocol version: ${opts.protocolVersion} ` +
	        `(supported versions: ${protocolVersions.join(', ')})`
	    );
	  }

	  let parsedUrl;

	  if (address instanceof URL) {
	    parsedUrl = address;
	  } else {
	    try {
	      parsedUrl = new URL(address);
	    } catch (e) {
	      throw new SyntaxError(`Invalid URL: ${address}`);
	    }
	  }

	  if (parsedUrl.protocol === 'http:') {
	    parsedUrl.protocol = 'ws:';
	  } else if (parsedUrl.protocol === 'https:') {
	    parsedUrl.protocol = 'wss:';
	  }

	  websocket._url = parsedUrl.href;

	  const isSecure = parsedUrl.protocol === 'wss:';
	  const isIpcUrl = parsedUrl.protocol === 'ws+unix:';
	  let invalidUrlMessage;

	  if (parsedUrl.protocol !== 'ws:' && !isSecure && !isIpcUrl) {
	    invalidUrlMessage =
	      'The URL\'s protocol must be one of "ws:", "wss:", ' +
	      '"http:", "https:", or "ws+unix:"';
	  } else if (isIpcUrl && !parsedUrl.pathname) {
	    invalidUrlMessage = "The URL's pathname is empty";
	  } else if (parsedUrl.hash) {
	    invalidUrlMessage = 'The URL contains a fragment identifier';
	  }

	  if (invalidUrlMessage) {
	    const err = new SyntaxError(invalidUrlMessage);

	    if (websocket._redirects === 0) {
	      throw err;
	    } else {
	      emitErrorAndClose(websocket, err);
	      return;
	    }
	  }

	  const defaultPort = isSecure ? 443 : 80;
	  const key = randomBytes(16).toString('base64');
	  const request = isSecure ? https.request : http.request;
	  const protocolSet = new Set();
	  let perMessageDeflate;

	  opts.createConnection =
	    opts.createConnection || (isSecure ? tlsConnect : netConnect);
	  opts.defaultPort = opts.defaultPort || defaultPort;
	  opts.port = parsedUrl.port || defaultPort;
	  opts.host = parsedUrl.hostname.startsWith('[')
	    ? parsedUrl.hostname.slice(1, -1)
	    : parsedUrl.hostname;
	  opts.headers = {
	    ...opts.headers,
	    'Sec-WebSocket-Version': opts.protocolVersion,
	    'Sec-WebSocket-Key': key,
	    Connection: 'Upgrade',
	    Upgrade: 'websocket'
	  };
	  opts.path = parsedUrl.pathname + parsedUrl.search;
	  opts.timeout = opts.handshakeTimeout;

	  if (opts.perMessageDeflate) {
	    perMessageDeflate = new PerMessageDeflate(
	      opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
	      false,
	      opts.maxPayload
	    );
	    opts.headers['Sec-WebSocket-Extensions'] = format({
	      [PerMessageDeflate.extensionName]: perMessageDeflate.offer()
	    });
	  }
	  if (protocols.length) {
	    for (const protocol of protocols) {
	      if (
	        typeof protocol !== 'string' ||
	        !subprotocolRegex.test(protocol) ||
	        protocolSet.has(protocol)
	      ) {
	        throw new SyntaxError(
	          'An invalid or duplicated subprotocol was specified'
	        );
	      }

	      protocolSet.add(protocol);
	    }

	    opts.headers['Sec-WebSocket-Protocol'] = protocols.join(',');
	  }
	  if (opts.origin) {
	    if (opts.protocolVersion < 13) {
	      opts.headers['Sec-WebSocket-Origin'] = opts.origin;
	    } else {
	      opts.headers.Origin = opts.origin;
	    }
	  }
	  if (parsedUrl.username || parsedUrl.password) {
	    opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
	  }

	  if (isIpcUrl) {
	    const parts = opts.path.split(':');

	    opts.socketPath = parts[0];
	    opts.path = parts[1];
	  }

	  let req;

	  if (opts.followRedirects) {
	    if (websocket._redirects === 0) {
	      websocket._originalIpc = isIpcUrl;
	      websocket._originalSecure = isSecure;
	      websocket._originalHostOrSocketPath = isIpcUrl
	        ? opts.socketPath
	        : parsedUrl.host;

	      const headers = options && options.headers;

	      //
	      // Shallow copy the user provided options so that headers can be changed
	      // without mutating the original object.
	      //
	      options = { ...options, headers: {} };

	      if (headers) {
	        for (const [key, value] of Object.entries(headers)) {
	          options.headers[key.toLowerCase()] = value;
	        }
	      }
	    } else if (websocket.listenerCount('redirect') === 0) {
	      const isSameHost = isIpcUrl
	        ? websocket._originalIpc
	          ? opts.socketPath === websocket._originalHostOrSocketPath
	          : false
	        : websocket._originalIpc
	          ? false
	          : parsedUrl.host === websocket._originalHostOrSocketPath;

	      if (!isSameHost || (websocket._originalSecure && !isSecure)) {
	        //
	        // Match curl 7.77.0 behavior and drop the following headers. These
	        // headers are also dropped when following a redirect to a subdomain.
	        //
	        delete opts.headers.authorization;
	        delete opts.headers.cookie;

	        if (!isSameHost) delete opts.headers.host;

	        opts.auth = undefined;
	      }
	    }

	    //
	    // Match curl 7.77.0 behavior and make the first `Authorization` header win.
	    // If the `Authorization` header is set, then there is nothing to do as it
	    // will take precedence.
	    //
	    if (opts.auth && !options.headers.authorization) {
	      options.headers.authorization =
	        'Basic ' + Buffer.from(opts.auth).toString('base64');
	    }

	    req = websocket._req = request(opts);

	    if (websocket._redirects) {
	      //
	      // Unlike what is done for the `'upgrade'` event, no early exit is
	      // triggered here if the user calls `websocket.close()` or
	      // `websocket.terminate()` from a listener of the `'redirect'` event. This
	      // is because the user can also call `request.destroy()` with an error
	      // before calling `websocket.close()` or `websocket.terminate()` and this
	      // would result in an error being emitted on the `request` object with no
	      // `'error'` event listeners attached.
	      //
	      websocket.emit('redirect', websocket.url, req);
	    }
	  } else {
	    req = websocket._req = request(opts);
	  }

	  if (opts.timeout) {
	    req.on('timeout', () => {
	      abortHandshake(websocket, req, 'Opening handshake has timed out');
	    });
	  }

	  req.on('error', (err) => {
	    if (req === null || req[kAborted]) return;

	    req = websocket._req = null;
	    emitErrorAndClose(websocket, err);
	  });

	  req.on('response', (res) => {
	    const location = res.headers.location;
	    const statusCode = res.statusCode;

	    if (
	      location &&
	      opts.followRedirects &&
	      statusCode >= 300 &&
	      statusCode < 400
	    ) {
	      if (++websocket._redirects > opts.maxRedirects) {
	        abortHandshake(websocket, req, 'Maximum redirects exceeded');
	        return;
	      }

	      req.abort();

	      let addr;

	      try {
	        addr = new URL(location, address);
	      } catch (e) {
	        const err = new SyntaxError(`Invalid URL: ${location}`);
	        emitErrorAndClose(websocket, err);
	        return;
	      }

	      initAsClient(websocket, addr, protocols, options);
	    } else if (!websocket.emit('unexpected-response', req, res)) {
	      abortHandshake(
	        websocket,
	        req,
	        `Unexpected server response: ${res.statusCode}`
	      );
	    }
	  });

	  req.on('upgrade', (res, socket, head) => {
	    websocket.emit('upgrade', res);

	    //
	    // The user may have closed the connection from a listener of the
	    // `'upgrade'` event.
	    //
	    if (websocket.readyState !== WebSocket.CONNECTING) return;

	    req = websocket._req = null;

	    const upgrade = res.headers.upgrade;

	    if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
	      abortHandshake(websocket, socket, 'Invalid Upgrade header');
	      return;
	    }

	    const digest = createHash('sha1')
	      .update(key + GUID)
	      .digest('base64');

	    if (res.headers['sec-websocket-accept'] !== digest) {
	      abortHandshake(websocket, socket, 'Invalid Sec-WebSocket-Accept header');
	      return;
	    }

	    const serverProt = res.headers['sec-websocket-protocol'];
	    let protError;

	    if (serverProt !== undefined) {
	      if (!protocolSet.size) {
	        protError = 'Server sent a subprotocol but none was requested';
	      } else if (!protocolSet.has(serverProt)) {
	        protError = 'Server sent an invalid subprotocol';
	      }
	    } else if (protocolSet.size) {
	      protError = 'Server sent no subprotocol';
	    }

	    if (protError) {
	      abortHandshake(websocket, socket, protError);
	      return;
	    }

	    if (serverProt) websocket._protocol = serverProt;

	    const secWebSocketExtensions = res.headers['sec-websocket-extensions'];

	    if (secWebSocketExtensions !== undefined) {
	      if (!perMessageDeflate) {
	        const message =
	          'Server sent a Sec-WebSocket-Extensions header but no extension ' +
	          'was requested';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      let extensions;

	      try {
	        extensions = parse(secWebSocketExtensions);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Extensions header';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      const extensionNames = Object.keys(extensions);

	      if (
	        extensionNames.length !== 1 ||
	        extensionNames[0] !== PerMessageDeflate.extensionName
	      ) {
	        const message = 'Server indicated an extension that was not requested';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      try {
	        perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Extensions header';
	        abortHandshake(websocket, socket, message);
	        return;
	      }

	      websocket._extensions[PerMessageDeflate.extensionName] =
	        perMessageDeflate;
	    }

	    websocket.setSocket(socket, head, {
	      allowSynchronousEvents: opts.allowSynchronousEvents,
	      generateMask: opts.generateMask,
	      maxPayload: opts.maxPayload,
	      skipUTF8Validation: opts.skipUTF8Validation
	    });
	  });

	  if (opts.finishRequest) {
	    opts.finishRequest(req, websocket);
	  } else {
	    req.end();
	  }
	}

	/**
	 * Emit the `'error'` and `'close'` events.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {Error} The error to emit
	 * @private
	 */
	function emitErrorAndClose(websocket, err) {
	  websocket._readyState = WebSocket.CLOSING;
	  //
	  // The following assignment is practically useless and is done only for
	  // consistency.
	  //
	  websocket._errorEmitted = true;
	  websocket.emit('error', err);
	  websocket.emitClose();
	}

	/**
	 * Create a `net.Socket` and initiate a connection.
	 *
	 * @param {Object} options Connection options
	 * @return {net.Socket} The newly created socket used to start the connection
	 * @private
	 */
	function netConnect(options) {
	  options.path = options.socketPath;
	  return net.connect(options);
	}

	/**
	 * Create a `tls.TLSSocket` and initiate a connection.
	 *
	 * @param {Object} options Connection options
	 * @return {tls.TLSSocket} The newly created socket used to start the connection
	 * @private
	 */
	function tlsConnect(options) {
	  options.path = undefined;

	  if (!options.servername && options.servername !== '') {
	    options.servername = net.isIP(options.host) ? '' : options.host;
	  }

	  return tls.connect(options);
	}

	/**
	 * Abort the handshake and emit an error.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {(http.ClientRequest|net.Socket|tls.Socket)} stream The request to
	 *     abort or the socket to destroy
	 * @param {String} message The error message
	 * @private
	 */
	function abortHandshake(websocket, stream, message) {
	  websocket._readyState = WebSocket.CLOSING;

	  const err = new Error(message);
	  Error.captureStackTrace(err, abortHandshake);

	  if (stream.setHeader) {
	    stream[kAborted] = true;
	    stream.abort();

	    if (stream.socket && !stream.socket.destroyed) {
	      //
	      // On Node.js >= 14.3.0 `request.abort()` does not destroy the socket if
	      // called after the request completed. See
	      // https://github.com/websockets/ws/issues/1869.
	      //
	      stream.socket.destroy();
	    }

	    process.nextTick(emitErrorAndClose, websocket, err);
	  } else {
	    stream.destroy(err);
	    stream.once('error', websocket.emit.bind(websocket, 'error'));
	    stream.once('close', websocket.emitClose.bind(websocket));
	  }
	}

	/**
	 * Handle cases where the `ping()`, `pong()`, or `send()` methods are called
	 * when the `readyState` attribute is `CLOSING` or `CLOSED`.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @param {*} [data] The data to send
	 * @param {Function} [cb] Callback
	 * @private
	 */
	function sendAfterClose(websocket, data, cb) {
	  if (data) {
	    const length = isBlob(data) ? data.size : toBuffer(data).length;

	    //
	    // The `_bufferedAmount` property is used only when the peer is a client and
	    // the opening handshake fails. Under these circumstances, in fact, the
	    // `setSocket()` method is not called, so the `_socket` and `_sender`
	    // properties are set to `null`.
	    //
	    if (websocket._socket) websocket._sender._bufferedBytes += length;
	    else websocket._bufferedAmount += length;
	  }

	  if (cb) {
	    const err = new Error(
	      `WebSocket is not open: readyState ${websocket.readyState} ` +
	        `(${readyStates[websocket.readyState]})`
	    );
	    process.nextTick(cb, err);
	  }
	}

	/**
	 * The listener of the `Receiver` `'conclude'` event.
	 *
	 * @param {Number} code The status code
	 * @param {Buffer} reason The reason for closing
	 * @private
	 */
	function receiverOnConclude(code, reason) {
	  const websocket = this[kWebSocket];

	  websocket._closeFrameReceived = true;
	  websocket._closeMessage = reason;
	  websocket._closeCode = code;

	  if (websocket._socket[kWebSocket] === undefined) return;

	  websocket._socket.removeListener('data', socketOnData);
	  process.nextTick(resume, websocket._socket);

	  if (code === 1005) websocket.close();
	  else websocket.close(code, reason);
	}

	/**
	 * The listener of the `Receiver` `'drain'` event.
	 *
	 * @private
	 */
	function receiverOnDrain() {
	  const websocket = this[kWebSocket];

	  if (!websocket.isPaused) websocket._socket.resume();
	}

	/**
	 * The listener of the `Receiver` `'error'` event.
	 *
	 * @param {(RangeError|Error)} err The emitted error
	 * @private
	 */
	function receiverOnError(err) {
	  const websocket = this[kWebSocket];

	  if (websocket._socket[kWebSocket] !== undefined) {
	    websocket._socket.removeListener('data', socketOnData);

	    //
	    // On Node.js < 14.0.0 the `'error'` event is emitted synchronously. See
	    // https://github.com/websockets/ws/issues/1940.
	    //
	    process.nextTick(resume, websocket._socket);

	    websocket.close(err[kStatusCode]);
	  }

	  if (!websocket._errorEmitted) {
	    websocket._errorEmitted = true;
	    websocket.emit('error', err);
	  }
	}

	/**
	 * The listener of the `Receiver` `'finish'` event.
	 *
	 * @private
	 */
	function receiverOnFinish() {
	  this[kWebSocket].emitClose();
	}

	/**
	 * The listener of the `Receiver` `'message'` event.
	 *
	 * @param {Buffer|ArrayBuffer|Buffer[])} data The message
	 * @param {Boolean} isBinary Specifies whether the message is binary or not
	 * @private
	 */
	function receiverOnMessage(data, isBinary) {
	  this[kWebSocket].emit('message', data, isBinary);
	}

	/**
	 * The listener of the `Receiver` `'ping'` event.
	 *
	 * @param {Buffer} data The data included in the ping frame
	 * @private
	 */
	function receiverOnPing(data) {
	  const websocket = this[kWebSocket];

	  if (websocket._autoPong) websocket.pong(data, !this._isServer, NOOP);
	  websocket.emit('ping', data);
	}

	/**
	 * The listener of the `Receiver` `'pong'` event.
	 *
	 * @param {Buffer} data The data included in the pong frame
	 * @private
	 */
	function receiverOnPong(data) {
	  this[kWebSocket].emit('pong', data);
	}

	/**
	 * Resume a readable stream
	 *
	 * @param {Readable} stream The readable stream
	 * @private
	 */
	function resume(stream) {
	  stream.resume();
	}

	/**
	 * The `Sender` error event handler.
	 *
	 * @param {Error} The error
	 * @private
	 */
	function senderOnError(err) {
	  const websocket = this[kWebSocket];

	  if (websocket.readyState === WebSocket.CLOSED) return;
	  if (websocket.readyState === WebSocket.OPEN) {
	    websocket._readyState = WebSocket.CLOSING;
	    setCloseTimer(websocket);
	  }

	  //
	  // `socket.end()` is used instead of `socket.destroy()` to allow the other
	  // peer to finish sending queued data. There is no need to set a timer here
	  // because `CLOSING` means that it is already set or not needed.
	  //
	  this._socket.end();

	  if (!websocket._errorEmitted) {
	    websocket._errorEmitted = true;
	    websocket.emit('error', err);
	  }
	}

	/**
	 * Set a timer to destroy the underlying raw socket of a WebSocket.
	 *
	 * @param {WebSocket} websocket The WebSocket instance
	 * @private
	 */
	function setCloseTimer(websocket) {
	  websocket._closeTimer = setTimeout(
	    websocket._socket.destroy.bind(websocket._socket),
	    closeTimeout
	  );
	}

	/**
	 * The listener of the socket `'close'` event.
	 *
	 * @private
	 */
	function socketOnClose() {
	  const websocket = this[kWebSocket];

	  this.removeListener('close', socketOnClose);
	  this.removeListener('data', socketOnData);
	  this.removeListener('end', socketOnEnd);

	  websocket._readyState = WebSocket.CLOSING;

	  let chunk;

	  //
	  // The close frame might not have been received or the `'end'` event emitted,
	  // for example, if the socket was destroyed due to an error. Ensure that the
	  // `receiver` stream is closed after writing any remaining buffered data to
	  // it. If the readable side of the socket is in flowing mode then there is no
	  // buffered data as everything has been already written and `readable.read()`
	  // will return `null`. If instead, the socket is paused, any possible buffered
	  // data will be read as a single chunk.
	  //
	  if (
	    !this._readableState.endEmitted &&
	    !websocket._closeFrameReceived &&
	    !websocket._receiver._writableState.errorEmitted &&
	    (chunk = websocket._socket.read()) !== null
	  ) {
	    websocket._receiver.write(chunk);
	  }

	  websocket._receiver.end();

	  this[kWebSocket] = undefined;

	  clearTimeout(websocket._closeTimer);

	  if (
	    websocket._receiver._writableState.finished ||
	    websocket._receiver._writableState.errorEmitted
	  ) {
	    websocket.emitClose();
	  } else {
	    websocket._receiver.on('error', receiverOnFinish);
	    websocket._receiver.on('finish', receiverOnFinish);
	  }
	}

	/**
	 * The listener of the socket `'data'` event.
	 *
	 * @param {Buffer} chunk A chunk of data
	 * @private
	 */
	function socketOnData(chunk) {
	  if (!this[kWebSocket]._receiver.write(chunk)) {
	    this.pause();
	  }
	}

	/**
	 * The listener of the socket `'end'` event.
	 *
	 * @private
	 */
	function socketOnEnd() {
	  const websocket = this[kWebSocket];

	  websocket._readyState = WebSocket.CLOSING;
	  websocket._receiver.end();
	  this.end();
	}

	/**
	 * The listener of the socket `'error'` event.
	 *
	 * @private
	 */
	function socketOnError() {
	  const websocket = this[kWebSocket];

	  this.removeListener('error', socketOnError);
	  this.on('error', NOOP);

	  if (websocket) {
	    websocket._readyState = WebSocket.CLOSING;
	    this.destroy();
	  }
	}
	return websocket;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^WebSocket$" }] */

var stream;
var hasRequiredStream;

function requireStream () {
	if (hasRequiredStream) return stream;
	hasRequiredStream = 1;

	requireWebsocket();
	const { Duplex } = require$$0$2;

	/**
	 * Emits the `'close'` event on a stream.
	 *
	 * @param {Duplex} stream The stream.
	 * @private
	 */
	function emitClose(stream) {
	  stream.emit('close');
	}

	/**
	 * The listener of the `'end'` event.
	 *
	 * @private
	 */
	function duplexOnEnd() {
	  if (!this.destroyed && this._writableState.finished) {
	    this.destroy();
	  }
	}

	/**
	 * The listener of the `'error'` event.
	 *
	 * @param {Error} err The error
	 * @private
	 */
	function duplexOnError(err) {
	  this.removeListener('error', duplexOnError);
	  this.destroy();
	  if (this.listenerCount('error') === 0) {
	    // Do not suppress the throwing behavior.
	    this.emit('error', err);
	  }
	}

	/**
	 * Wraps a `WebSocket` in a duplex stream.
	 *
	 * @param {WebSocket} ws The `WebSocket` to wrap
	 * @param {Object} [options] The options for the `Duplex` constructor
	 * @return {Duplex} The duplex stream
	 * @public
	 */
	function createWebSocketStream(ws, options) {
	  let terminateOnDestroy = true;

	  const duplex = new Duplex({
	    ...options,
	    autoDestroy: false,
	    emitClose: false,
	    objectMode: false,
	    writableObjectMode: false
	  });

	  ws.on('message', function message(msg, isBinary) {
	    const data =
	      !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;

	    if (!duplex.push(data)) ws.pause();
	  });

	  ws.once('error', function error(err) {
	    if (duplex.destroyed) return;

	    // Prevent `ws.terminate()` from being called by `duplex._destroy()`.
	    //
	    // - If the `'error'` event is emitted before the `'open'` event, then
	    //   `ws.terminate()` is a noop as no socket is assigned.
	    // - Otherwise, the error is re-emitted by the listener of the `'error'`
	    //   event of the `Receiver` object. The listener already closes the
	    //   connection by calling `ws.close()`. This allows a close frame to be
	    //   sent to the other peer. If `ws.terminate()` is called right after this,
	    //   then the close frame might not be sent.
	    terminateOnDestroy = false;
	    duplex.destroy(err);
	  });

	  ws.once('close', function close() {
	    if (duplex.destroyed) return;

	    duplex.push(null);
	  });

	  duplex._destroy = function (err, callback) {
	    if (ws.readyState === ws.CLOSED) {
	      callback(err);
	      process.nextTick(emitClose, duplex);
	      return;
	    }

	    let called = false;

	    ws.once('error', function error(err) {
	      called = true;
	      callback(err);
	    });

	    ws.once('close', function close() {
	      if (!called) callback(err);
	      process.nextTick(emitClose, duplex);
	    });

	    if (terminateOnDestroy) ws.terminate();
	  };

	  duplex._final = function (callback) {
	    if (ws.readyState === ws.CONNECTING) {
	      ws.once('open', function open() {
	        duplex._final(callback);
	      });
	      return;
	    }

	    // If the value of the `_socket` property is `null` it means that `ws` is a
	    // client websocket and the handshake failed. In fact, when this happens, a
	    // socket is never assigned to the websocket. Wait for the `'error'` event
	    // that will be emitted by the websocket.
	    if (ws._socket === null) return;

	    if (ws._socket._writableState.finished) {
	      callback();
	      if (duplex._readableState.endEmitted) duplex.destroy();
	    } else {
	      ws._socket.once('finish', function finish() {
	        // `duplex` is not destroyed here because the `'end'` event will be
	        // emitted on `duplex` after this `'finish'` event. The EOF signaling
	        // `null` chunk is, in fact, pushed when the websocket emits `'close'`.
	        callback();
	      });
	      ws.close();
	    }
	  };

	  duplex._read = function () {
	    if (ws.isPaused) ws.resume();
	  };

	  duplex._write = function (chunk, encoding, callback) {
	    if (ws.readyState === ws.CONNECTING) {
	      ws.once('open', function open() {
	        duplex._write(chunk, encoding, callback);
	      });
	      return;
	    }

	    ws.send(chunk, callback);
	  };

	  duplex.on('end', duplexOnEnd);
	  duplex.on('error', duplexOnError);
	  return duplex;
	}

	stream = createWebSocketStream;
	return stream;
}

requireStream();

requireReceiver();

requireSender();

requireWebsocket();

var subprotocol;
var hasRequiredSubprotocol;

function requireSubprotocol () {
	if (hasRequiredSubprotocol) return subprotocol;
	hasRequiredSubprotocol = 1;

	const { tokenChars } = requireValidation();

	/**
	 * Parses the `Sec-WebSocket-Protocol` header into a set of subprotocol names.
	 *
	 * @param {String} header The field value of the header
	 * @return {Set} The subprotocol names
	 * @public
	 */
	function parse(header) {
	  const protocols = new Set();
	  let start = -1;
	  let end = -1;
	  let i = 0;

	  for (i; i < header.length; i++) {
	    const code = header.charCodeAt(i);

	    if (end === -1 && tokenChars[code] === 1) {
	      if (start === -1) start = i;
	    } else if (
	      i !== 0 &&
	      (code === 0x20 /* ' ' */ || code === 0x09) /* '\t' */
	    ) {
	      if (end === -1 && start !== -1) end = i;
	    } else if (code === 0x2c /* ',' */) {
	      if (start === -1) {
	        throw new SyntaxError(`Unexpected character at index ${i}`);
	      }

	      if (end === -1) end = i;

	      const protocol = header.slice(start, end);

	      if (protocols.has(protocol)) {
	        throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
	      }

	      protocols.add(protocol);
	      start = end = -1;
	    } else {
	      throw new SyntaxError(`Unexpected character at index ${i}`);
	    }
	  }

	  if (start === -1 || end !== -1) {
	    throw new SyntaxError('Unexpected end of input');
	  }

	  const protocol = header.slice(start, i);

	  if (protocols.has(protocol)) {
	    throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
	  }

	  protocols.add(protocol);
	  return protocols;
	}

	subprotocol = { parse };
	return subprotocol;
}

/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "^Duplex$", "caughtErrors": "none" }] */

var websocketServer;
var hasRequiredWebsocketServer;

function requireWebsocketServer () {
	if (hasRequiredWebsocketServer) return websocketServer;
	hasRequiredWebsocketServer = 1;

	const EventEmitter = require$$0$3;
	const http = require$$2;
	const { Duplex } = require$$0$2;
	const { createHash } = require$$1;

	const extension = requireExtension();
	const PerMessageDeflate = requirePermessageDeflate();
	const subprotocol = requireSubprotocol();
	const WebSocket = requireWebsocket();
	const { GUID, kWebSocket } = requireConstants();

	const keyRegex = /^[+/0-9A-Za-z]{22}==$/;

	const RUNNING = 0;
	const CLOSING = 1;
	const CLOSED = 2;

	/**
	 * Class representing a WebSocket server.
	 *
	 * @extends EventEmitter
	 */
	class WebSocketServer extends EventEmitter {
	  /**
	   * Create a `WebSocketServer` instance.
	   *
	   * @param {Object} options Configuration options
	   * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
	   *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
	   *     multiple times in the same tick
	   * @param {Boolean} [options.autoPong=true] Specifies whether or not to
	   *     automatically send a pong in response to a ping
	   * @param {Number} [options.backlog=511] The maximum length of the queue of
	   *     pending connections
	   * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
	   *     track clients
	   * @param {Function} [options.handleProtocols] A hook to handle protocols
	   * @param {String} [options.host] The hostname where to bind the server
	   * @param {Number} [options.maxPayload=104857600] The maximum allowed message
	   *     size
	   * @param {Boolean} [options.noServer=false] Enable no server mode
	   * @param {String} [options.path] Accept only connections matching this path
	   * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
	   *     permessage-deflate
	   * @param {Number} [options.port] The port where to bind the server
	   * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
	   *     server to use
	   * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
	   *     not to skip UTF-8 validation for text and close messages
	   * @param {Function} [options.verifyClient] A hook to reject connections
	   * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
	   *     class to use. It must be the `WebSocket` class or class that extends it
	   * @param {Function} [callback] A listener for the `listening` event
	   */
	  constructor(options, callback) {
	    super();

	    options = {
	      allowSynchronousEvents: true,
	      autoPong: true,
	      maxPayload: 100 * 1024 * 1024,
	      skipUTF8Validation: false,
	      perMessageDeflate: false,
	      handleProtocols: null,
	      clientTracking: true,
	      verifyClient: null,
	      noServer: false,
	      backlog: null, // use default (511 as implemented in net.js)
	      server: null,
	      host: null,
	      path: null,
	      port: null,
	      WebSocket,
	      ...options
	    };

	    if (
	      (options.port == null && !options.server && !options.noServer) ||
	      (options.port != null && (options.server || options.noServer)) ||
	      (options.server && options.noServer)
	    ) {
	      throw new TypeError(
	        'One and only one of the "port", "server", or "noServer" options ' +
	          'must be specified'
	      );
	    }

	    if (options.port != null) {
	      this._server = http.createServer((req, res) => {
	        const body = http.STATUS_CODES[426];

	        res.writeHead(426, {
	          'Content-Length': body.length,
	          'Content-Type': 'text/plain'
	        });
	        res.end(body);
	      });
	      this._server.listen(
	        options.port,
	        options.host,
	        options.backlog,
	        callback
	      );
	    } else if (options.server) {
	      this._server = options.server;
	    }

	    if (this._server) {
	      const emitConnection = this.emit.bind(this, 'connection');

	      this._removeListeners = addListeners(this._server, {
	        listening: this.emit.bind(this, 'listening'),
	        error: this.emit.bind(this, 'error'),
	        upgrade: (req, socket, head) => {
	          this.handleUpgrade(req, socket, head, emitConnection);
	        }
	      });
	    }

	    if (options.perMessageDeflate === true) options.perMessageDeflate = {};
	    if (options.clientTracking) {
	      this.clients = new Set();
	      this._shouldEmitClose = false;
	    }

	    this.options = options;
	    this._state = RUNNING;
	  }

	  /**
	   * Returns the bound address, the address family name, and port of the server
	   * as reported by the operating system if listening on an IP socket.
	   * If the server is listening on a pipe or UNIX domain socket, the name is
	   * returned as a string.
	   *
	   * @return {(Object|String|null)} The address of the server
	   * @public
	   */
	  address() {
	    if (this.options.noServer) {
	      throw new Error('The server is operating in "noServer" mode');
	    }

	    if (!this._server) return null;
	    return this._server.address();
	  }

	  /**
	   * Stop the server from accepting new connections and emit the `'close'` event
	   * when all existing connections are closed.
	   *
	   * @param {Function} [cb] A one-time listener for the `'close'` event
	   * @public
	   */
	  close(cb) {
	    if (this._state === CLOSED) {
	      if (cb) {
	        this.once('close', () => {
	          cb(new Error('The server is not running'));
	        });
	      }

	      process.nextTick(emitClose, this);
	      return;
	    }

	    if (cb) this.once('close', cb);

	    if (this._state === CLOSING) return;
	    this._state = CLOSING;

	    if (this.options.noServer || this.options.server) {
	      if (this._server) {
	        this._removeListeners();
	        this._removeListeners = this._server = null;
	      }

	      if (this.clients) {
	        if (!this.clients.size) {
	          process.nextTick(emitClose, this);
	        } else {
	          this._shouldEmitClose = true;
	        }
	      } else {
	        process.nextTick(emitClose, this);
	      }
	    } else {
	      const server = this._server;

	      this._removeListeners();
	      this._removeListeners = this._server = null;

	      //
	      // The HTTP/S server was created internally. Close it, and rely on its
	      // `'close'` event.
	      //
	      server.close(() => {
	        emitClose(this);
	      });
	    }
	  }

	  /**
	   * See if a given request should be handled by this server instance.
	   *
	   * @param {http.IncomingMessage} req Request object to inspect
	   * @return {Boolean} `true` if the request is valid, else `false`
	   * @public
	   */
	  shouldHandle(req) {
	    if (this.options.path) {
	      const index = req.url.indexOf('?');
	      const pathname = index !== -1 ? req.url.slice(0, index) : req.url;

	      if (pathname !== this.options.path) return false;
	    }

	    return true;
	  }

	  /**
	   * Handle a HTTP Upgrade request.
	   *
	   * @param {http.IncomingMessage} req The request object
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @public
	   */
	  handleUpgrade(req, socket, head, cb) {
	    socket.on('error', socketOnError);

	    const key = req.headers['sec-websocket-key'];
	    const upgrade = req.headers.upgrade;
	    const version = +req.headers['sec-websocket-version'];

	    if (req.method !== 'GET') {
	      const message = 'Invalid HTTP method';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
	      return;
	    }

	    if (upgrade === undefined || upgrade.toLowerCase() !== 'websocket') {
	      const message = 'Invalid Upgrade header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (key === undefined || !keyRegex.test(key)) {
	      const message = 'Missing or invalid Sec-WebSocket-Key header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (version !== 8 && version !== 13) {
	      const message = 'Missing or invalid Sec-WebSocket-Version header';
	      abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	      return;
	    }

	    if (!this.shouldHandle(req)) {
	      abortHandshake(socket, 400);
	      return;
	    }

	    const secWebSocketProtocol = req.headers['sec-websocket-protocol'];
	    let protocols = new Set();

	    if (secWebSocketProtocol !== undefined) {
	      try {
	        protocols = subprotocol.parse(secWebSocketProtocol);
	      } catch (err) {
	        const message = 'Invalid Sec-WebSocket-Protocol header';
	        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	        return;
	      }
	    }

	    const secWebSocketExtensions = req.headers['sec-websocket-extensions'];
	    const extensions = {};

	    if (
	      this.options.perMessageDeflate &&
	      secWebSocketExtensions !== undefined
	    ) {
	      const perMessageDeflate = new PerMessageDeflate(
	        this.options.perMessageDeflate,
	        true,
	        this.options.maxPayload
	      );

	      try {
	        const offers = extension.parse(secWebSocketExtensions);

	        if (offers[PerMessageDeflate.extensionName]) {
	          perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
	          extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
	        }
	      } catch (err) {
	        const message =
	          'Invalid or unacceptable Sec-WebSocket-Extensions header';
	        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
	        return;
	      }
	    }

	    //
	    // Optionally call external client verification handler.
	    //
	    if (this.options.verifyClient) {
	      const info = {
	        origin:
	          req.headers[`${version === 8 ? 'sec-websocket-origin' : 'origin'}`],
	        secure: !!(req.socket.authorized || req.socket.encrypted),
	        req
	      };

	      if (this.options.verifyClient.length === 2) {
	        this.options.verifyClient(info, (verified, code, message, headers) => {
	          if (!verified) {
	            return abortHandshake(socket, code || 401, message, headers);
	          }

	          this.completeUpgrade(
	            extensions,
	            key,
	            protocols,
	            req,
	            socket,
	            head,
	            cb
	          );
	        });
	        return;
	      }

	      if (!this.options.verifyClient(info)) return abortHandshake(socket, 401);
	    }

	    this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
	  }

	  /**
	   * Upgrade the connection to WebSocket.
	   *
	   * @param {Object} extensions The accepted extensions
	   * @param {String} key The value of the `Sec-WebSocket-Key` header
	   * @param {Set} protocols The subprotocols
	   * @param {http.IncomingMessage} req The request object
	   * @param {Duplex} socket The network socket between the server and client
	   * @param {Buffer} head The first packet of the upgraded stream
	   * @param {Function} cb Callback
	   * @throws {Error} If called more than once with the same socket
	   * @private
	   */
	  completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
	    //
	    // Destroy the socket if the client has already sent a FIN packet.
	    //
	    if (!socket.readable || !socket.writable) return socket.destroy();

	    if (socket[kWebSocket]) {
	      throw new Error(
	        'server.handleUpgrade() was called more than once with the same ' +
	          'socket, possibly due to a misconfiguration'
	      );
	    }

	    if (this._state > RUNNING) return abortHandshake(socket, 503);

	    const digest = createHash('sha1')
	      .update(key + GUID)
	      .digest('base64');

	    const headers = [
	      'HTTP/1.1 101 Switching Protocols',
	      'Upgrade: websocket',
	      'Connection: Upgrade',
	      `Sec-WebSocket-Accept: ${digest}`
	    ];

	    const ws = new this.options.WebSocket(null, undefined, this.options);

	    if (protocols.size) {
	      //
	      // Optionally call external protocol selection handler.
	      //
	      const protocol = this.options.handleProtocols
	        ? this.options.handleProtocols(protocols, req)
	        : protocols.values().next().value;

	      if (protocol) {
	        headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
	        ws._protocol = protocol;
	      }
	    }

	    if (extensions[PerMessageDeflate.extensionName]) {
	      const params = extensions[PerMessageDeflate.extensionName].params;
	      const value = extension.format({
	        [PerMessageDeflate.extensionName]: [params]
	      });
	      headers.push(`Sec-WebSocket-Extensions: ${value}`);
	      ws._extensions = extensions;
	    }

	    //
	    // Allow external modification/inspection of handshake headers.
	    //
	    this.emit('headers', headers, req);

	    socket.write(headers.concat('\r\n').join('\r\n'));
	    socket.removeListener('error', socketOnError);

	    ws.setSocket(socket, head, {
	      allowSynchronousEvents: this.options.allowSynchronousEvents,
	      maxPayload: this.options.maxPayload,
	      skipUTF8Validation: this.options.skipUTF8Validation
	    });

	    if (this.clients) {
	      this.clients.add(ws);
	      ws.on('close', () => {
	        this.clients.delete(ws);

	        if (this._shouldEmitClose && !this.clients.size) {
	          process.nextTick(emitClose, this);
	        }
	      });
	    }

	    cb(ws, req);
	  }
	}

	websocketServer = WebSocketServer;

	/**
	 * Add event listeners on an `EventEmitter` using a map of <event, listener>
	 * pairs.
	 *
	 * @param {EventEmitter} server The event emitter
	 * @param {Object.<String, Function>} map The listeners to add
	 * @return {Function} A function that will remove the added listeners when
	 *     called
	 * @private
	 */
	function addListeners(server, map) {
	  for (const event of Object.keys(map)) server.on(event, map[event]);

	  return function removeListeners() {
	    for (const event of Object.keys(map)) {
	      server.removeListener(event, map[event]);
	    }
	  };
	}

	/**
	 * Emit a `'close'` event on an `EventEmitter`.
	 *
	 * @param {EventEmitter} server The event emitter
	 * @private
	 */
	function emitClose(server) {
	  server._state = CLOSED;
	  server.emit('close');
	}

	/**
	 * Handle socket errors.
	 *
	 * @private
	 */
	function socketOnError() {
	  this.destroy();
	}

	/**
	 * Close the connection when preconditions are not fulfilled.
	 *
	 * @param {Duplex} socket The socket of the upgrade request
	 * @param {Number} code The HTTP response status code
	 * @param {String} [message] The HTTP response body
	 * @param {Object} [headers] Additional HTTP response headers
	 * @private
	 */
	function abortHandshake(socket, code, message, headers) {
	  //
	  // The socket is writable unless the user destroyed or ended it before calling
	  // `server.handleUpgrade()` or in the `verifyClient` function, which is a user
	  // error. Handling this does not make much sense as the worst that can happen
	  // is that some of the data written by the user might be discarded due to the
	  // call to `socket.end()` below, which triggers an `'error'` event that in
	  // turn causes the socket to be destroyed.
	  //
	  message = message || http.STATUS_CODES[code];
	  headers = {
	    Connection: 'close',
	    'Content-Type': 'text/html',
	    'Content-Length': Buffer.byteLength(message),
	    ...headers
	  };

	  socket.once('finish', socket.destroy);

	  socket.end(
	    `HTTP/1.1 ${code} ${http.STATUS_CODES[code]}\r\n` +
	      Object.keys(headers)
	        .map((h) => `${h}: ${headers[h]}`)
	        .join('\r\n') +
	      '\r\n\r\n' +
	      message
	  );
	}

	/**
	 * Emit a `'wsClientError'` event on a `WebSocketServer` if there is at least
	 * one listener for it, otherwise call `abortHandshake()`.
	 *
	 * @param {WebSocketServer} server The WebSocket server
	 * @param {http.IncomingMessage} req The request object
	 * @param {Duplex} socket The socket of the upgrade request
	 * @param {Number} code The HTTP response status code
	 * @param {String} message The HTTP response body
	 * @private
	 */
	function abortHandshakeOrEmitwsClientError(server, req, socket, code, message) {
	  if (server.listenerCount('wsClientError')) {
	    const err = new Error(message);
	    Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);

	    server.emit('wsClientError', err, socket, req);
	  } else {
	    abortHandshake(socket, code, message);
	  }
	}
	return websocketServer;
}

var websocketServerExports = requireWebsocketServer();
var WebSocketServer = /*@__PURE__*/getDefaultExportFromCjs(websocketServerExports);

async function getModuleGraph(ctx, projectName, id, browser = false) {
	const graph = {};
	const externalized = /* @__PURE__ */ new Set();
	const inlined = /* @__PURE__ */ new Set();
	const project = ctx.getProjectByName(projectName);
	async function get(mod, seen = /* @__PURE__ */ new Map()) {
		if (!mod || !mod.id) return;
		if (mod.id === "\0@vitest/browser/context") return;
		if (seen.has(mod)) return seen.get(mod);
		let id = clearId(mod.id);
		seen.set(mod, id);
		const rewrote = browser ? mod.file?.includes(project.browser.vite.config.cacheDir) ? mod.id : false : await project.vitenode.shouldExternalize(id);
		if (rewrote) {
			id = rewrote;
			externalized.add(id);
			seen.set(mod, id);
		} else inlined.add(id);
		const mods = Array.from(mod.importedModules).filter((i) => i.id && !i.id.includes("/vitest/dist/"));
		graph[id] = (await Promise.all(mods.map((m) => get(m, seen)))).filter(Boolean);
		return id;
	}
	if (browser && project.browser) await get(project.browser.vite.moduleGraph.getModuleById(id));
	else await get(project.vite.moduleGraph.getModuleById(id));
	return {
		graph,
		externalized: Array.from(externalized),
		inlined: Array.from(inlined)
	};
}
function clearId(id) {
	return id?.replace(/\?v=\w+$/, "") || "";
}

// Serialization support utils.
function cloneByOwnProperties(value) {
	// Clones the value's properties into a new Object. The simpler approach of
	// Object.assign() won't work in the case that properties are not enumerable.
	return Object.getOwnPropertyNames(value).reduce((clone, prop) => ({
		...clone,
		[prop]: value[prop]
	}), {});
}
/**
* Replacer function for serialization methods such as JS.stringify() or
* flatted.stringify().
*/
function stringifyReplace(key, value) {
	if (value instanceof Error) {
		const cloned = cloneByOwnProperties(value);
		return {
			name: value.name,
			message: value.message,
			stack: value.stack,
			...cloned
		};
	} else return value;
}

function isValidApiRequest(config, req) {
	const url = new URL(req.url ?? "", "http://localhost");
	// validate token. token is injected in ui/tester/orchestrator html, which is cross origin protected.
	try {
		const token = url.searchParams.get("token");
		if (token && crypto.timingSafeEqual(Buffer.from(token), Buffer.from(config.api.token))) return true;
	} 
	// an error is thrown when the length is incorrect
catch {}
	return false;
}

function setup(ctx, _server) {
	const wss = new WebSocketServer({ noServer: true });
	const clients = /* @__PURE__ */ new Map();
	const server = _server || ctx.server;
	server.httpServer?.on("upgrade", (request, socket, head) => {
		if (!request.url) return;
		const { pathname } = new URL(request.url, "http://localhost");
		if (pathname !== API_PATH) return;
		if (!isValidApiRequest(ctx.config, request)) {
			socket.destroy();
			return;
		}
		wss.handleUpgrade(request, socket, head, (ws) => {
			wss.emit("connection", ws, request);
			setupClient(ws);
		});
	});
	function setupClient(ws) {
		const rpc = createBirpc({
			async onTaskUpdate(packs, events) {
				await ctx._testRun.updated(packs, events);
			},
			getFiles() {
				return ctx.state.getFiles();
			},
			getPaths() {
				return ctx.state.getPaths();
			},
			async readTestFile(id) {
				if (!ctx.state.filesMap.has(id) || !existsSync(id)) return null;
				return promises.readFile(id, "utf-8");
			},
			async saveTestFile(id, content) {
				if (!ctx.state.filesMap.has(id) || !existsSync(id)) throw new Error(`Test file "${id}" was not registered, so it cannot be updated using the API.`);
				return promises.writeFile(id, content, "utf-8");
			},
			async rerun(files, resetTestNamePattern) {
				await ctx.rerunFiles(files, void 0, true, resetTestNamePattern);
			},
			async rerunTask(id) {
				await ctx.rerunTask(id);
			},
			getConfig() {
				return ctx.getRootProject().serializedConfig;
			},
			getResolvedProjectNames() {
				return ctx.projects.map((p) => p.name);
			},
			getResolvedProjectLabels() {
				return ctx.projects.map((p) => ({
					name: p.name,
					color: p.color
				}));
			},
			async getTransformResult(projectName, id, browser = false) {
				const project = ctx.getProjectByName(projectName);
				const result = browser ? await project.browser.vite.transformRequest(id) : await project.vitenode.transformRequest(id);
				if (result) {
					try {
						result.source = result.source || await promises.readFile(id, "utf-8");
					} catch {}
					return result;
				}
			},
			async getModuleGraph(project, id, browser) {
				return getModuleGraph(ctx, project, id, browser);
			},
			async updateSnapshot(file) {
				if (!file) await ctx.updateSnapshot();
				else await ctx.updateSnapshot([file.filepath]);
			},
			getUnhandledErrors() {
				return ctx.state.getUnhandledErrors();
			},
			async getTestFiles() {
				const spec = await ctx.globTestSpecifications();
				return spec.map((spec) => [
					{
						name: spec.project.config.name,
						root: spec.project.config.root
					},
					spec.moduleId,
					{ pool: spec.pool }
				]);
			}
		}, {
			post: (msg) => ws.send(msg),
			on: (fn) => ws.on("message", fn),
			eventNames: [
				"onUserConsoleLog",
				"onFinished",
				"onFinishedReportCoverage",
				"onCollected",
				"onTaskUpdate"
			],
			serialize: (data) => stringify(data, stringifyReplace),
			deserialize: parse,
			onTimeoutError(functionName) {
				throw new Error(`[vitest-api]: Timeout calling "${functionName}"`);
			}
		});
		clients.set(ws, rpc);
		ws.on("close", () => {
			clients.delete(ws);
		});
	}
	ctx.reporters.push(new WebSocketReporter(ctx, wss, clients));
}
class WebSocketReporter {
	constructor(ctx, wss, clients) {
		this.ctx = ctx;
		this.wss = wss;
		this.clients = clients;
	}
	onCollected(files) {
		if (this.clients.size === 0) return;
		this.clients.forEach((client) => {
			client.onCollected?.(files)?.catch?.(noop);
		});
	}
	onSpecsCollected(specs) {
		if (this.clients.size === 0) return;
		this.clients.forEach((client) => {
			client.onSpecsCollected?.(specs)?.catch?.(noop);
		});
	}
	async onTestCaseAnnotate(testCase, annotation) {
		if (this.clients.size === 0) return;
		this.clients.forEach((client) => {
			client.onTestAnnotate?.(testCase.id, annotation)?.catch?.(noop);
		});
	}
	async onTaskUpdate(packs, events) {
		if (this.clients.size === 0) return;
		packs.forEach(([taskId, result]) => {
			const task = this.ctx.state.idMap.get(taskId);
			const isBrowser = task && task.file.pool === "browser";
			result?.errors?.forEach((error) => {
				if (isPrimitive(error)) return;
				if (isBrowser) {
					const project = this.ctx.getProjectByName(task.file.projectName || "");
					error.stacks = project.browser?.parseErrorStacktrace(error);
				} else error.stacks = parseErrorStacktrace(error);
			});
		});
		this.clients.forEach((client) => {
			client.onTaskUpdate?.(packs, events)?.catch?.(noop);
		});
	}
	onFinished(files, errors) {
		this.clients.forEach((client) => {
			client.onFinished?.(files, errors)?.catch?.(noop);
		});
	}
	onFinishedReportCoverage() {
		this.clients.forEach((client) => {
			client.onFinishedReportCoverage?.()?.catch?.(noop);
		});
	}
	onUserConsoleLog(log) {
		this.clients.forEach((client) => {
			client.onUserConsoleLog?.(log)?.catch?.(noop);
		});
	}
}

var setup$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  WebSocketReporter: WebSocketReporter,
  setup: setup
});

class BrowserSessions {
	sessions = /* @__PURE__ */ new Map();
	sessionIds = /* @__PURE__ */ new Set();
	getSession(sessionId) {
		return this.sessions.get(sessionId);
	}
	destroySession(sessionId) {
		this.sessions.delete(sessionId);
	}
	createSession(sessionId, project, pool) {
		// this promise only waits for the WS connection with the orhcestrator to be established
		const defer = createDefer();
		const timeout = setTimeout(() => {
			defer.reject(new Error(`Failed to connect to the browser session "${sessionId}" [${project.name}] within the timeout.`));
		}, project.vitest.config.browser.connectTimeout ?? 6e4).unref();
		this.sessions.set(sessionId, {
			project,
			connected: () => {
				defer.resolve();
				clearTimeout(timeout);
			},
			fail: (error) => {
				defer.resolve();
				clearTimeout(timeout);
				pool.reject(error);
			}
		});
		return defer;
	}
}

class FilesStatsCache {
	cache = /* @__PURE__ */ new Map();
	getStats(key) {
		return this.cache.get(key);
	}
	async populateStats(root, specs) {
		const promises = specs.map((spec) => {
			const key = `${spec[0].name}:${relative(root, spec.moduleId)}`;
			return this.updateStats(spec.moduleId, key);
		});
		await Promise.all(promises);
	}
	async updateStats(fsPath, key) {
		if (!fs.existsSync(fsPath)) return;
		const stats = await fs.promises.stat(fsPath);
		this.cache.set(key, { size: stats.size });
	}
	removeStats(fsPath) {
		this.cache.forEach((_, key) => {
			if (key.endsWith(fsPath)) this.cache.delete(key);
		});
	}
}

class ResultsCache {
	cache = /* @__PURE__ */ new Map();
	workspacesKeyMap = /* @__PURE__ */ new Map();
	cachePath = null;
	version;
	root = "/";
	constructor(version) {
		this.version = version;
	}
	getCachePath() {
		return this.cachePath;
	}
	setConfig(root, config) {
		this.root = root;
		if (config) this.cachePath = resolve(config.dir, "results.json");
	}
	getResults(key) {
		return this.cache.get(key);
	}
	async readFromCache() {
		if (!this.cachePath) return;
		if (!fs.existsSync(this.cachePath)) return;
		const resultsCache = await fs.promises.readFile(this.cachePath, "utf8");
		const { results, version } = JSON.parse(resultsCache || "[]");
		const [major, minor] = version.split(".");
		// handling changed in 0.30.0
		if (major > 0 || Number(minor) >= 30) {
			this.cache = new Map(results);
			this.version = version;
			results.forEach(([spec]) => {
				const [projectName, relativePath] = spec.split(":");
				const keyMap = this.workspacesKeyMap.get(relativePath) || [];
				keyMap.push(projectName);
				this.workspacesKeyMap.set(relativePath, keyMap);
			});
		}
	}
	updateResults(files) {
		files.forEach((file) => {
			const result = file.result;
			if (!result) return;
			const duration = result.duration || 0;
			// store as relative, so cache would be the same in CI and locally
			const relativePath = relative(this.root, file.filepath);
			this.cache.set(`${file.projectName || ""}:${relativePath}`, {
				duration: duration >= 0 ? duration : 0,
				failed: result.state === "fail"
			});
		});
	}
	removeFromCache(filepath) {
		this.cache.forEach((_, key) => {
			if (key.endsWith(filepath)) this.cache.delete(key);
		});
	}
	async writeToCache() {
		if (!this.cachePath) return;
		const results = Array.from(this.cache.entries());
		const cacheDirname = dirname(this.cachePath);
		if (!fs.existsSync(cacheDirname)) await fs.promises.mkdir(cacheDirname, { recursive: true });
		const cache = JSON.stringify({
			version: this.version,
			results
		});
		await fs.promises.writeFile(this.cachePath, cache);
	}
}

class VitestCache {
	results;
	stats = new FilesStatsCache();
	constructor(version) {
		this.results = new ResultsCache(version);
	}
	getFileTestResults(key) {
		return this.results.getResults(key);
	}
	getFileStats(key) {
		return this.stats.getStats(key);
	}
	static resolveCacheDir(root, dir, projectName) {
		const baseDir = slash(dir || "node_modules/.vite");
		return resolve(root, baseDir, "vitest", hash("sha1", projectName || "", "hex"));
	}
}

class FilesNotFoundError extends Error {
	code = "VITEST_FILES_NOT_FOUND";
	constructor(mode) {
		super(`No ${mode} files found`);
	}
}
class GitNotFoundError extends Error {
	code = "VITEST_GIT_NOT_FOUND";
	constructor() {
		super("Could not find Git root. Have you initialized git with `git init`?");
	}
}
class LocationFilterFileNotFoundError extends Error {
	code = "VITEST_LOCATION_FILTER_FILE_NOT_FOUND";
	constructor(filename) {
		super(`Couldn\'t find file ${filename}. Note when specifying the test location you have to specify the full test filename.`);
	}
}
class IncludeTaskLocationDisabledError extends Error {
	code = "VITEST_INCLUDE_TASK_LOCATION_DISABLED";
	constructor() {
		super("Received line number filters while `includeTaskLocation` option is disabled");
	}
}
class RangeLocationFilterProvidedError extends Error {
	code = "VITEST_RANGE_LOCATION_FILTER_PROVIDED";
	constructor(filter) {
		super(`Found "-" in location filter ${filter}.  Note that range location filters are not supported.  Consider specifying the exact line numbers of your tests.`);
	}
}
class VitestFilteredOutProjectError extends Error {
	code = "VITEST_FILTERED_OUT_PROJECT";
	constructor() {
		super("VITEST_FILTERED_OUT_PROJECT");
	}
}

const HIGHLIGHT_SUPPORTED_EXTS = new Set(["js", "ts"].flatMap((lang) => [
	`.${lang}`,
	`.m${lang}`,
	`.c${lang}`,
	`.${lang}x`,
	`.m${lang}x`,
	`.c${lang}x`
]));
function highlightCode(id, source, colors) {
	const ext = extname(id);
	if (!HIGHLIGHT_SUPPORTED_EXTS.has(ext)) return source;
	const isJsx = ext.endsWith("x");
	return highlight(source, {
		jsx: isJsx,
		colors: c
	});
}

const PAD = "      ";
const ESC$1 = "\x1B[";
const ERASE_DOWN = `${ESC$1}J`;
const ERASE_SCROLLBACK = `${ESC$1}3J`;
const CURSOR_TO_START = `${ESC$1}1;1H`;
const HIDE_CURSOR = `${ESC$1}?25l`;
const SHOW_CURSOR = `${ESC$1}?25h`;
const CLEAR_SCREEN = "\x1Bc";
class Logger {
	_clearScreenPending;
	_highlights = /* @__PURE__ */ new Map();
	cleanupListeners = [];
	console;
	constructor(ctx, outputStream = process.stdout, errorStream = process.stderr) {
		this.ctx = ctx;
		this.outputStream = outputStream;
		this.errorStream = errorStream;
		this.console = new Console({
			stdout: outputStream,
			stderr: errorStream
		});
		this._highlights.clear();
		this.addCleanupListeners();
		this.registerUnhandledRejection();
		if (this.outputStream.isTTY) this.outputStream.write(HIDE_CURSOR);
	}
	log(...args) {
		this._clearScreen();
		this.console.log(...args);
	}
	error(...args) {
		this._clearScreen();
		this.console.error(...args);
	}
	warn(...args) {
		this._clearScreen();
		this.console.warn(...args);
	}
	clearFullScreen(message = "") {
		if (!this.ctx.config.clearScreen) {
			this.console.log(message);
			return;
		}
		if (message) this.console.log(`${CLEAR_SCREEN}${ERASE_SCROLLBACK}${message}`);
		else this.outputStream.write(`${CLEAR_SCREEN}${ERASE_SCROLLBACK}`);
	}
	clearScreen(message, force = false) {
		if (!this.ctx.config.clearScreen) {
			this.console.log(message);
			return;
		}
		this._clearScreenPending = message;
		if (force) this._clearScreen();
	}
	_clearScreen() {
		if (this._clearScreenPending == null) return;
		const log = this._clearScreenPending;
		this._clearScreenPending = void 0;
		this.console.log(`${CURSOR_TO_START}${ERASE_DOWN}${log}`);
	}
	printError(err, options = {}) {
		printError(err, this.ctx, this, options);
	}
	deprecate(message) {
		this.error(c.bold(c.bgYellow(" DEPRECATED ")), c.yellow(message));
	}
	clearHighlightCache(filename) {
		if (filename) this._highlights.delete(filename);
		else this._highlights.clear();
	}
	highlight(filename, source) {
		if (this._highlights.has(filename)) return this._highlights.get(filename);
		const code = highlightCode(filename, source);
		this._highlights.set(filename, code);
		return code;
	}
	printNoTestFound(filters) {
		const config = this.ctx.config;
		if (config.watch && (config.changed || config.related?.length)) this.log(`No affected ${config.mode} files found\n`);
		else if (config.watch) this.log(c.red(`No ${config.mode} files found. You can change the file name pattern by pressing "p"\n`));
		else if (config.passWithNoTests) this.log(`No ${config.mode} files found, exiting with code 0\n`);
		else this.error(c.red(`No ${config.mode} files found, exiting with code 1\n`));
		const comma = c.dim(", ");
		if (filters?.length) this.console.error(c.dim("filter: ") + c.yellow(filters.join(comma)));
		const projectsFilter = toArray(config.project);
		if (projectsFilter.length) this.console.error(c.dim("projects: ") + c.yellow(projectsFilter.join(comma)));
		this.ctx.projects.forEach((project) => {
			const config = project.config;
			const printConfig = !project.isRootProject() && project.name;
			if (printConfig) this.console.error(`\n${formatProjectName(project)}\n`);
			if (config.include) this.console.error(c.dim("include: ") + c.yellow(config.include.join(comma)));
			if (config.exclude) this.console.error(c.dim("exclude:  ") + c.yellow(config.exclude.join(comma)));
			if (config.typecheck.enabled) {
				this.console.error(c.dim("typecheck include: ") + c.yellow(config.typecheck.include.join(comma)));
				this.console.error(c.dim("typecheck exclude: ") + c.yellow(config.typecheck.exclude.join(comma)));
			}
		});
		this.console.error();
	}
	printBanner() {
		this.log();
		const color = this.ctx.config.watch ? "blue" : "cyan";
		const mode = this.ctx.config.watch ? "DEV" : "RUN";
		this.log(withLabel(color, mode, `v${this.ctx.version} `) + c.gray(this.ctx.config.root));
		if (this.ctx.config.sequence.sequencer === RandomSequencer) this.log(PAD + c.gray(`Running tests with seed "${this.ctx.config.sequence.seed}"`));
		if (this.ctx.config.ui) {
			const host = this.ctx.config.api?.host || "localhost";
			const port = this.ctx.server.config.server.port;
			const base = this.ctx.config.uiBase;
			this.log(PAD + c.dim(c.green(`UI started at http://${host}:${c.bold(port)}${base}`)));
		} else if (this.ctx.config.api?.port) {
			const resolvedUrls = this.ctx.server.resolvedUrls;
			// workaround for https://github.com/vitejs/vite/issues/15438, it was fixed in vite 5.1
			const fallbackUrl = `http://${this.ctx.config.api.host || "localhost"}:${this.ctx.config.api.port}`;
			const origin = resolvedUrls?.local[0] ?? resolvedUrls?.network[0] ?? fallbackUrl;
			this.log(PAD + c.dim(c.green(`API started at ${new URL("/", origin)}`)));
		}
		if (this.ctx.coverageProvider) this.log(PAD + c.dim("Coverage enabled with ") + c.yellow(this.ctx.coverageProvider.name));
		if (this.ctx.config.standalone) this.log(c.yellow(`\nVitest is running in standalone mode. Edit a test file to rerun tests.`));
		else this.log();
	}
	printBrowserBanner(project) {
		if (!project.browser) return;
		const resolvedUrls = project.browser.vite.resolvedUrls;
		const origin = resolvedUrls?.local[0] ?? resolvedUrls?.network[0];
		if (!origin) return;
		const output = project.isRootProject() ? "" : formatProjectName(project);
		const provider = project.browser.provider.name;
		const providerString = provider === "preview" ? "" : ` by ${c.reset(c.bold(provider))}`;
		this.log(c.dim(`${output}Browser runner started${providerString} ${c.dim("at")} ${c.blue(new URL("/__vitest_test__/", origin))}\n`));
	}
	printUnhandledErrors(errors) {
		const errorMessage = c.red(c.bold(`\nVitest caught ${errors.length} unhandled error${errors.length > 1 ? "s" : ""} during the test run.
This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.`));
		this.error(errorBanner("Unhandled Errors"));
		this.error(errorMessage);
		errors.forEach((err) => {
			this.printError(err, {
				fullStack: true,
				type: err.type || "Unhandled Error"
			});
		});
		this.error(c.red(divider()));
	}
	printSourceTypeErrors(errors) {
		const errorMessage = c.red(c.bold(`\nVitest found ${errors.length} error${errors.length > 1 ? "s" : ""} not related to your test files.`));
		this.log(errorBanner("Source Errors"));
		this.log(errorMessage);
		errors.forEach((err) => {
			this.printError(err, { fullStack: true });
		});
		this.log(c.red(divider()));
	}
	getColumns() {
		return "columns" in this.outputStream ? this.outputStream.columns : 80;
	}
	onTerminalCleanup(listener) {
		this.cleanupListeners.push(listener);
	}
	addCleanupListeners() {
		const cleanup = () => {
			this.cleanupListeners.forEach((fn) => fn());
			if (this.outputStream.isTTY) this.outputStream.write(SHOW_CURSOR);
		};
		const onExit = (signal, exitCode) => {
			cleanup();
			// Interrupted signals don't set exit code automatically.
			// Use same exit code as node: https://nodejs.org/api/process.html#signal-events
			if (process.exitCode === void 0) process.exitCode = exitCode !== void 0 ? 128 + exitCode : Number(signal);
			process.exit();
		};
		process.once("SIGINT", onExit);
		process.once("SIGTERM", onExit);
		process.once("exit", onExit);
		this.ctx.onClose(() => {
			process.off("SIGINT", onExit);
			process.off("SIGTERM", onExit);
			process.off("exit", onExit);
			cleanup();
		});
	}
	registerUnhandledRejection() {
		const onUnhandledRejection = (err) => {
			process.exitCode = 1;
			this.printError(err, {
				fullStack: true,
				type: "Unhandled Rejection"
			});
			this.error("\n\n");
			process.exit();
		};
		process.on("unhandledRejection", onUnhandledRejection);
		this.ctx.onClose(() => {
			process.off("unhandledRejection", onUnhandledRejection);
		});
	}
}

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
class VitestPackageInstaller {
	isPackageExists(name, options) {
		return isPackageExists(name, options);
	}
	async ensureInstalled(dependency, root, version) {
		if (process.env.VITEST_SKIP_INSTALL_CHECKS) return true;
		if (process.versions.pnp) {
			const targetRequire = createRequire(__dirname);
			try {
				targetRequire.resolve(dependency, { paths: [root, __dirname] });
				return true;
			} catch {}
		}
		if (/* @__PURE__ */ isPackageExists(dependency, { paths: [root, __dirname] })) return true;
		process.stderr.write(c.red(`${c.inverse(c.red(" MISSING DEPENDENCY "))} Cannot find dependency '${dependency}'\n\n`));
		if (!isTTY) return false;
		const prompts = await import('./index.X0nbfr6-.js').then(function (n) { return n.i; });
		const { install } = await prompts.default({
			type: "confirm",
			name: "install",
			message: c.reset(`Do you want to install ${c.green(dependency)}?`)
		});
		if (install) {
			const packageName = version ? `${dependency}@${version}` : dependency;
			await (await import('./index.D3XRDfWc.js')).installPackage(packageName, { dev: true });
			// TODO: somehow it fails to load the package after installation, remove this when it's fixed
			process.stderr.write(c.yellow(`\nPackage ${packageName} installed, re-run the command to start.\n`));
			process.exit();
			return true;
		}
		return false;
	}
}

function serializeConfig(config, coreConfig, viteConfig) {
	const optimizer = config.deps?.optimizer;
	const poolOptions = config.poolOptions;
	// Resolve from server.config to avoid comparing against default value
	const isolate = viteConfig?.test?.isolate;
	return {
		environmentOptions: config.environmentOptions,
		mode: config.mode,
		isolate: config.isolate,
		base: config.base,
		logHeapUsage: config.logHeapUsage,
		runner: config.runner,
		bail: config.bail,
		defines: config.defines,
		chaiConfig: config.chaiConfig,
		setupFiles: config.setupFiles,
		allowOnly: config.allowOnly,
		testTimeout: config.testTimeout,
		testNamePattern: config.testNamePattern,
		hookTimeout: config.hookTimeout,
		clearMocks: config.clearMocks,
		mockReset: config.mockReset,
		restoreMocks: config.restoreMocks,
		unstubEnvs: config.unstubEnvs,
		unstubGlobals: config.unstubGlobals,
		maxConcurrency: config.maxConcurrency,
		pool: config.pool,
		expect: config.expect,
		snapshotSerializers: config.snapshotSerializers,
		diff: config.diff,
		retry: config.retry,
		disableConsoleIntercept: config.disableConsoleIntercept,
		root: config.root,
		name: config.name,
		globals: config.globals,
		snapshotEnvironment: config.snapshotEnvironment,
		passWithNoTests: config.passWithNoTests,
		coverage: ((coverage) => {
			const htmlReporter = coverage.reporter.find(([reporterName]) => reporterName === "html");
			const subdir = htmlReporter && htmlReporter[1]?.subdir;
			return {
				reportsDirectory: coverage.reportsDirectory,
				provider: coverage.provider,
				enabled: coverage.enabled,
				htmlReporter: htmlReporter ? { subdir } : void 0,
				customProviderModule: "customProviderModule" in coverage ? coverage.customProviderModule : void 0
			};
		})(config.coverage),
		fakeTimers: config.fakeTimers,
		poolOptions: {
			forks: {
				singleFork: poolOptions?.forks?.singleFork ?? coreConfig.poolOptions?.forks?.singleFork ?? false,
				isolate: poolOptions?.forks?.isolate ?? isolate ?? coreConfig.poolOptions?.forks?.isolate ?? true
			},
			threads: {
				singleThread: poolOptions?.threads?.singleThread ?? coreConfig.poolOptions?.threads?.singleThread ?? false,
				isolate: poolOptions?.threads?.isolate ?? isolate ?? coreConfig.poolOptions?.threads?.isolate ?? true
			},
			vmThreads: { singleThread: poolOptions?.vmThreads?.singleThread ?? coreConfig.poolOptions?.vmThreads?.singleThread ?? false },
			vmForks: { singleFork: poolOptions?.vmForks?.singleFork ?? coreConfig.poolOptions?.vmForks?.singleFork ?? false }
		},
		deps: {
			web: config.deps.web || {},
			optimizer: {
				web: { enabled: optimizer?.web?.enabled ?? true },
				ssr: { enabled: optimizer?.ssr?.enabled ?? true }
			},
			interopDefault: config.deps.interopDefault,
			moduleDirectories: config.deps.moduleDirectories
		},
		snapshotOptions: {
			snapshotEnvironment: void 0,
			updateSnapshot: coreConfig.snapshotOptions.updateSnapshot,
			snapshotFormat: {
				...coreConfig.snapshotOptions.snapshotFormat,
				compareKeys: void 0
			},
			expand: config.snapshotOptions.expand ?? coreConfig.snapshotOptions.expand
		},
		sequence: {
			shuffle: coreConfig.sequence.shuffle,
			concurrent: coreConfig.sequence.concurrent,
			seed: coreConfig.sequence.seed,
			hooks: coreConfig.sequence.hooks,
			setupFiles: coreConfig.sequence.setupFiles
		},
		inspect: coreConfig.inspect,
		inspectBrk: coreConfig.inspectBrk,
		inspector: coreConfig.inspector,
		watch: config.watch,
		includeTaskLocation: config.includeTaskLocation ?? coreConfig.includeTaskLocation,
		env: {
			...viteConfig?.env,
			...config.env
		},
		browser: ((browser) => {
			return {
				name: browser.name,
				headless: browser.headless,
				isolate: browser.isolate,
				fileParallelism: browser.fileParallelism,
				ui: browser.ui,
				viewport: browser.viewport,
				screenshotFailures: browser.screenshotFailures,
				locators: { testIdAttribute: browser.locators.testIdAttribute },
				providerOptions: browser.provider === "playwright" ? { actionTimeout: browser.providerOptions?.context?.actionTimeout } : {}
			};
		})(config.browser),
		standalone: config.standalone,
		printConsoleTrace: config.printConsoleTrace ?? coreConfig.printConsoleTrace,
		benchmark: config.benchmark && { includeSamples: config.benchmark.includeSamples }
	};
}

async function loadGlobalSetupFiles(runner, globalSetup) {
	const globalSetupFiles = toArray(globalSetup);
	return Promise.all(globalSetupFiles.map((file) => loadGlobalSetupFile(file, runner)));
}
async function loadGlobalSetupFile(file, runner) {
	const m = await runner.executeFile(file);
	for (const exp of [
		"default",
		"setup",
		"teardown"
	]) if (m[exp] != null && typeof m[exp] !== "function") throw new Error(`invalid export in globalSetup file ${file}: ${exp} must be a function`);
	if (m.default) return {
		file,
		setup: m.default
	};
	else if (m.setup || m.teardown) return {
		file,
		setup: m.setup,
		teardown: m.teardown
	};
	else throw new Error(`invalid globalSetup file ${file}. Must export setup, teardown or have a default export`);
}

function CoverageTransform(ctx) {
	return {
		name: "vitest:coverage-transform",
		transform(srcCode, id) {
			return ctx.coverageProvider?.onFileTransform?.(srcCode, normalizeRequestId(id), this);
		}
	};
}

function MocksPlugins(options = {}) {
	const normalizedDistDir = normalize(distDir);
	return [hoistMocksPlugin({
		filter(id) {
			if (id.includes(normalizedDistDir)) return false;
			if (options.filter) return options.filter(id);
			return true;
		},
		codeFrameGenerator(node, id, code) {
			return generateCodeFrame(code, 4, node.start + 1);
		}
	}), automockPlugin()];
}

function generateCssFilenameHash(filepath) {
	return hash("sha1", filepath, "hex").slice(0, 6);
}
function generateScopedClassName(strategy, name, filename) {
	// should be configured by Vite defaults
	if (strategy === "scoped") return null;
	if (strategy === "non-scoped") return name;
	const hash = generateCssFilenameHash(filename);
	return `_${name}_${hash}`;
}

const LogLevels = {
	silent: 0,
	error: 1,
	warn: 2,
	info: 3
};
function clearScreen(logger) {
	const repeatCount = process.stdout.rows - 2;
	const blank = repeatCount > 0 ? "\n".repeat(repeatCount) : "";
	logger.clearScreen(blank);
}
let lastType;
let lastMsg;
let sameCount = 0;
// Only initialize the timeFormatter when the timestamp option is used, and
// reuse it across all loggers
let timeFormatter;
function getTimeFormatter() {
	timeFormatter ??= new Intl.DateTimeFormat(void 0, {
		hour: "numeric",
		minute: "numeric",
		second: "numeric"
	});
	return timeFormatter;
}
// This is copy-pasted and needs to be synced from time to time. Ideally, Vite's `createLogger` should accept a custom `console`
// https://github.com/vitejs/vite/blob/main/packages/vite/src/node/logger.ts?rgh-link-date=2024-10-16T23%3A29%3A19Z
// When Vitest supports only Vite 6 and above, we can use Vite's `createLogger({ console })`
// https://github.com/vitejs/vite/pull/18379
function createViteLogger(console, level = "info", options = {}) {
	const loggedErrors = /* @__PURE__ */ new WeakSet();
	const { prefix = "[vite]", allowClearScreen = true } = options;
	const thresh = LogLevels[level];
	const canClearScreen = allowClearScreen && process.stdout.isTTY && !process.env.CI;
	const clear = canClearScreen ? clearScreen : () => {};
	function format(type, msg, options = {}) {
		if (options.timestamp) {
			let tag = "";
			if (type === "info") tag = c.cyan(c.bold(prefix));
			else if (type === "warn") tag = c.yellow(c.bold(prefix));
			else tag = c.red(c.bold(prefix));
			const environment = options.environment ? `${options.environment} ` : "";
			return `${c.dim(getTimeFormatter().format(/* @__PURE__ */ new Date()))} ${tag} ${environment}${msg}`;
		} else return msg;
	}
	function output(type, msg, options = {}) {
		if (thresh >= LogLevels[type]) {
			const method = type === "info" ? "log" : type;
			if (options.error) loggedErrors.add(options.error);
			if (canClearScreen) if (type === lastType && msg === lastMsg) {
				sameCount++;
				clear(console);
				console[method](format(type, msg, options), c.yellow(`(x${sameCount + 1})`));
			} else {
				sameCount = 0;
				lastMsg = msg;
				lastType = type;
				if (options.clear) clear(console);
				console[method](format(type, msg, options));
			}
			else console[method](format(type, msg, options));
		}
	}
	const warnedMessages = /* @__PURE__ */ new Set();
	const logger = {
		hasWarned: false,
		info(msg, opts) {
			output("info", msg, opts);
		},
		warn(msg, opts) {
			logger.hasWarned = true;
			output("warn", msg, opts);
		},
		warnOnce(msg, opts) {
			if (warnedMessages.has(msg)) return;
			logger.hasWarned = true;
			output("warn", msg, opts);
			warnedMessages.add(msg);
		},
		error(msg, opts) {
			logger.hasWarned = true;
			output("error", msg, opts);
		},
		clearScreen(type) {
			if (thresh >= LogLevels[type]) clear(console);
		},
		hasErrorLogged(error) {
			return loggedErrors.has(error);
		}
	};
	return logger;
}
// silence warning by Vite for statically not analyzable dynamic import
function silenceImportViteIgnoreWarning(logger) {
	return {
		...logger,
		warn(msg, options) {
			if (msg.includes("The above dynamic import cannot be analyzed by Vite")) return;
			logger.warn(msg, options);
		}
	};
}

const cssLangs = "\\.(?:css|less|sass|scss|styl|stylus|pcss|postcss)(?:$|\\?)";
const cssLangRE = new RegExp(cssLangs);
const cssModuleRE = new RegExp(`\\.module${cssLangs}`);
const cssInlineRE = /[?&]inline(?:&|$)/;
function isCSS(id) {
	return cssLangRE.test(id);
}
function isCSSModule(id) {
	return cssModuleRE.test(id);
}
// inline css requests are expected to just return the
// string content directly and not the proxy module
function isInline(id) {
	return cssInlineRE.test(id);
}
function getCSSModuleProxyReturn(strategy, filename) {
	if (strategy === "non-scoped") return "style";
	const hash = generateCssFilenameHash(filename);
	return `\`_\${style}_${hash}\``;
}
function CSSEnablerPlugin(ctx) {
	const shouldProcessCSS = (id) => {
		const { css } = ctx.config;
		if (typeof css === "boolean") return css;
		if (toArray(css.exclude).some((re) => re.test(id))) return false;
		if (toArray(css.include).some((re) => re.test(id))) return true;
		return false;
	};
	return [{
		name: "vitest:css-disable",
		enforce: "pre",
		transform(code, id) {
			if (!isCSS(id)) return;
			// css plugin inside Vite won't do anything if the code is empty
			// but it will put __vite__updateStyle anyway
			if (!shouldProcessCSS(id)) return { code: "" };
		}
	}, {
		name: "vitest:css-empty-post",
		enforce: "post",
		transform(_, id) {
			if (!isCSS(id) || shouldProcessCSS(id)) return;
			if (isCSSModule(id) && !isInline(id)) {
				// return proxy for css modules, so that imported module has names:
				// styles.foo returns a "foo" instead of "undefined"
				// we don't use code content to generate hash for "scoped", because it's empty
				const scopeStrategy = typeof ctx.config.css !== "boolean" && ctx.config.css.modules?.classNameStrategy || "stable";
				const proxyReturn = getCSSModuleProxyReturn(scopeStrategy, relative(ctx.config.root, id));
				const code = `export default new Proxy(Object.create(null), {
            get(_, style) {
              return ${proxyReturn};
            },
          })`;
				return { code };
			}
			return { code: "export default \"\"" };
		}
	}];
}

var jsTokens_1;
var hasRequiredJsTokens;

function requireJsTokens () {
	if (hasRequiredJsTokens) return jsTokens_1;
	hasRequiredJsTokens = 1;
	// Copyright 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023 Simon Lydell
	// License: MIT.
	var HashbangComment, Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace;
	RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
	Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
	Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
	StringLiteral = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
	NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
	Template = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
	WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/yu;
	LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
	MultiLineComment = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
	SingleLineComment = /\/\/.*/y;
	HashbangComment = /^#!.*/;
	JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
	JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
	JSXString = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
	JSXText = /[^<>{}]+/y;
	TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
	TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
	KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
	KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
	Newline = RegExp(LineTerminatorSequence.source);
	jsTokens_1 = function*(input, {jsx = false} = {}) {
		var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
		({length} = input);
		lastIndex = 0;
		lastSignificantToken = "";
		stack = [
			{tag: "JS"}
		];
		braces = [];
		parenNesting = 0;
		postfixIncDec = false;
		if (match = HashbangComment.exec(input)) {
			yield ({
				type: "HashbangComment",
				value: match[0]
			});
			lastIndex = match[0].length;
		}
		while (lastIndex < length) {
			mode = stack[stack.length - 1];
			switch (mode.tag) {
				case "JS":
				case "JSNonExpressionParen":
				case "InterpolationInTemplate":
				case "InterpolationInJSX":
					if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
						RegularExpressionLiteral.lastIndex = lastIndex;
						if (match = RegularExpressionLiteral.exec(input)) {
							lastIndex = RegularExpressionLiteral.lastIndex;
							lastSignificantToken = match[0];
							postfixIncDec = true;
							yield ({
								type: "RegularExpressionLiteral",
								value: match[0],
								closed: match[1] !== void 0 && match[1] !== "\\"
							});
							continue;
						}
					}
					Punctuator.lastIndex = lastIndex;
					if (match = Punctuator.exec(input)) {
						punctuator = match[0];
						nextLastIndex = Punctuator.lastIndex;
						nextLastSignificantToken = punctuator;
						switch (punctuator) {
							case "(":
								if (lastSignificantToken === "?NonExpressionParenKeyword") {
									stack.push({
										tag: "JSNonExpressionParen",
										nesting: parenNesting
									});
								}
								parenNesting++;
								postfixIncDec = false;
								break;
							case ")":
								parenNesting--;
								postfixIncDec = true;
								if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
									stack.pop();
									nextLastSignificantToken = "?NonExpressionParenEnd";
									postfixIncDec = false;
								}
								break;
							case "{":
								Punctuator.lastIndex = 0;
								isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
								braces.push(isExpression);
								postfixIncDec = false;
								break;
							case "}":
								switch (mode.tag) {
									case "InterpolationInTemplate":
										if (braces.length === mode.nesting) {
											Template.lastIndex = lastIndex;
											match = Template.exec(input);
											lastIndex = Template.lastIndex;
											lastSignificantToken = match[0];
											if (match[1] === "${") {
												lastSignificantToken = "?InterpolationInTemplate";
												postfixIncDec = false;
												yield ({
													type: "TemplateMiddle",
													value: match[0]
												});
											} else {
												stack.pop();
												postfixIncDec = true;
												yield ({
													type: "TemplateTail",
													value: match[0],
													closed: match[1] === "`"
												});
											}
											continue;
										}
										break;
									case "InterpolationInJSX":
										if (braces.length === mode.nesting) {
											stack.pop();
											lastIndex += 1;
											lastSignificantToken = "}";
											yield ({
												type: "JSXPunctuator",
												value: "}"
											});
											continue;
										}
								}
								postfixIncDec = braces.pop();
								nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
								break;
							case "]":
								postfixIncDec = true;
								break;
							case "++":
							case "--":
								nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
								break;
							case "<":
								if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
									stack.push({tag: "JSXTag"});
									lastIndex += 1;
									lastSignificantToken = "<";
									yield ({
										type: "JSXPunctuator",
										value: punctuator
									});
									continue;
								}
								postfixIncDec = false;
								break;
							default:
								postfixIncDec = false;
						}
						lastIndex = nextLastIndex;
						lastSignificantToken = nextLastSignificantToken;
						yield ({
							type: "Punctuator",
							value: punctuator
						});
						continue;
					}
					Identifier.lastIndex = lastIndex;
					if (match = Identifier.exec(input)) {
						lastIndex = Identifier.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "for":
							case "if":
							case "while":
							case "with":
								if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
									nextLastSignificantToken = "?NonExpressionParenKeyword";
								}
						}
						lastSignificantToken = nextLastSignificantToken;
						postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
						yield ({
							type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
							value: match[0]
						});
						continue;
					}
					StringLiteral.lastIndex = lastIndex;
					if (match = StringLiteral.exec(input)) {
						lastIndex = StringLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "StringLiteral",
							value: match[0],
							closed: match[2] !== void 0
						});
						continue;
					}
					NumericLiteral.lastIndex = lastIndex;
					if (match = NumericLiteral.exec(input)) {
						lastIndex = NumericLiteral.lastIndex;
						lastSignificantToken = match[0];
						postfixIncDec = true;
						yield ({
							type: "NumericLiteral",
							value: match[0]
						});
						continue;
					}
					Template.lastIndex = lastIndex;
					if (match = Template.exec(input)) {
						lastIndex = Template.lastIndex;
						lastSignificantToken = match[0];
						if (match[1] === "${") {
							lastSignificantToken = "?InterpolationInTemplate";
							stack.push({
								tag: "InterpolationInTemplate",
								nesting: braces.length
							});
							postfixIncDec = false;
							yield ({
								type: "TemplateHead",
								value: match[0]
							});
						} else {
							postfixIncDec = true;
							yield ({
								type: "NoSubstitutionTemplate",
								value: match[0],
								closed: match[1] === "`"
							});
						}
						continue;
					}
					break;
				case "JSXTag":
				case "JSXTagEnd":
					JSXPunctuator.lastIndex = lastIndex;
					if (match = JSXPunctuator.exec(input)) {
						lastIndex = JSXPunctuator.lastIndex;
						nextLastSignificantToken = match[0];
						switch (match[0]) {
							case "<":
								stack.push({tag: "JSXTag"});
								break;
							case ">":
								stack.pop();
								if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
									nextLastSignificantToken = "?JSX";
									postfixIncDec = true;
								} else {
									stack.push({tag: "JSXChildren"});
								}
								break;
							case "{":
								stack.push({
									tag: "InterpolationInJSX",
									nesting: braces.length
								});
								nextLastSignificantToken = "?InterpolationInJSX";
								postfixIncDec = false;
								break;
							case "/":
								if (lastSignificantToken === "<") {
									stack.pop();
									if (stack[stack.length - 1].tag === "JSXChildren") {
										stack.pop();
									}
									stack.push({tag: "JSXTagEnd"});
								}
						}
						lastSignificantToken = nextLastSignificantToken;
						yield ({
							type: "JSXPunctuator",
							value: match[0]
						});
						continue;
					}
					JSXIdentifier.lastIndex = lastIndex;
					if (match = JSXIdentifier.exec(input)) {
						lastIndex = JSXIdentifier.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXIdentifier",
							value: match[0]
						});
						continue;
					}
					JSXString.lastIndex = lastIndex;
					if (match = JSXString.exec(input)) {
						lastIndex = JSXString.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXString",
							value: match[0],
							closed: match[2] !== void 0
						});
						continue;
					}
					break;
				case "JSXChildren":
					JSXText.lastIndex = lastIndex;
					if (match = JSXText.exec(input)) {
						lastIndex = JSXText.lastIndex;
						lastSignificantToken = match[0];
						yield ({
							type: "JSXText",
							value: match[0]
						});
						continue;
					}
					switch (input[lastIndex]) {
						case "<":
							stack.push({tag: "JSXTag"});
							lastIndex++;
							lastSignificantToken = "<";
							yield ({
								type: "JSXPunctuator",
								value: "<"
							});
							continue;
						case "{":
							stack.push({
								tag: "InterpolationInJSX",
								nesting: braces.length
							});
							lastIndex++;
							lastSignificantToken = "?InterpolationInJSX";
							postfixIncDec = false;
							yield ({
								type: "JSXPunctuator",
								value: "{"
							});
							continue;
					}
			}
			WhiteSpace.lastIndex = lastIndex;
			if (match = WhiteSpace.exec(input)) {
				lastIndex = WhiteSpace.lastIndex;
				yield ({
					type: "WhiteSpace",
					value: match[0]
				});
				continue;
			}
			LineTerminatorSequence.lastIndex = lastIndex;
			if (match = LineTerminatorSequence.exec(input)) {
				lastIndex = LineTerminatorSequence.lastIndex;
				postfixIncDec = false;
				if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
					lastSignificantToken = "?NoLineTerminatorHere";
				}
				yield ({
					type: "LineTerminatorSequence",
					value: match[0]
				});
				continue;
			}
			MultiLineComment.lastIndex = lastIndex;
			if (match = MultiLineComment.exec(input)) {
				lastIndex = MultiLineComment.lastIndex;
				if (Newline.test(match[0])) {
					postfixIncDec = false;
					if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
						lastSignificantToken = "?NoLineTerminatorHere";
					}
				}
				yield ({
					type: "MultiLineComment",
					value: match[0],
					closed: match[1] !== void 0
				});
				continue;
			}
			SingleLineComment.lastIndex = lastIndex;
			if (match = SingleLineComment.exec(input)) {
				lastIndex = SingleLineComment.lastIndex;
				postfixIncDec = false;
				yield ({
					type: "SingleLineComment",
					value: match[0]
				});
				continue;
			}
			firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
			lastIndex += firstCodePoint.length;
			lastSignificantToken = firstCodePoint;
			postfixIncDec = false;
			yield ({
				type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
				value: firstCodePoint
			});
		}
		return void 0;
	};
	return jsTokens_1;
}

var jsTokensExports = requireJsTokens();
var jsTokens = /*@__PURE__*/getDefaultExportFromCjs(jsTokensExports);

function stripLiteralJsTokens(code, options) {
  const FILL = " ";
  const FILL_COMMENT = " ";
  let result = "";
  const tokens = [];
  for (const token of jsTokens(code, { jsx: false })) {
    tokens.push(token);
    if (token.type === "SingleLineComment") {
      result += FILL_COMMENT.repeat(token.value.length);
      continue;
    }
    if (token.type === "MultiLineComment") {
      result += token.value.replace(/[^\n]/g, FILL_COMMENT);
      continue;
    }
    if (token.type === "StringLiteral") {
      if (!token.closed) {
        result += token.value;
        continue;
      }
      const body = token.value.slice(1, -1);
      {
        result += token.value[0] + FILL.repeat(body.length) + token.value[token.value.length - 1];
        continue;
      }
    }
    if (token.type === "NoSubstitutionTemplate") {
      const body = token.value.slice(1, -1);
      {
        result += `\`${body.replace(/[^\n]/g, FILL)}\``;
        continue;
      }
    }
    if (token.type === "RegularExpressionLiteral") {
      const body = token.value;
      {
        result += body.replace(/\/(.*)\/(\w?)$/g, (_, $1, $2) => `/${FILL.repeat($1.length)}/${$2}`);
        continue;
      }
    }
    if (token.type === "TemplateHead") {
      const body = token.value.slice(1, -2);
      {
        result += `\`${body.replace(/[^\n]/g, FILL)}\${`;
        continue;
      }
    }
    if (token.type === "TemplateTail") {
      const body = token.value.slice(0, -2);
      {
        result += `}${body.replace(/[^\n]/g, FILL)}\``;
        continue;
      }
    }
    if (token.type === "TemplateMiddle") {
      const body = token.value.slice(1, -2);
      {
        result += `}${body.replace(/[^\n]/g, FILL)}\${`;
        continue;
      }
    }
    result += token.value;
  }
  return {
    result,
    tokens
  };
}

function stripLiteral(code, options) {
  return stripLiteralDetailed(code).result;
}
function stripLiteralDetailed(code, options) {
  return stripLiteralJsTokens(code);
}

const metaUrlLength = 15;
const locationString = "self.location".padEnd(metaUrlLength, " ");
// Vite transforms new URL('./path', import.meta.url) to new URL('/path.js', import.meta.url)
// This makes "href" equal to "http://localhost:3000/path.js" in the browser, but if we keep it like this,
// then in tests the URL will become "file:///path.js".
// To battle this, we replace "import.meta.url" with "self.location" in the code to keep the browser behavior.
function NormalizeURLPlugin() {
	return {
		name: "vitest:normalize-url",
		enforce: "post",
		transform(code, id, options) {
			const ssr = options?.ssr === true;
			if (ssr || !code.includes("new URL") || !code.includes("import.meta.url")) return;
			const cleanString = stripLiteral(code);
			const assetImportMetaUrlRE = /\bnew\s+URL\s*\(\s*(?:'[^']+'|"[^"]+"|`[^`]+`)\s*,\s*(?:'' \+ )?import\.meta\.url\s*(?:,\s*)?\)/g;
			let updatedCode = code;
			let match;
			// eslint-disable-next-line no-cond-assign
			while (match = assetImportMetaUrlRE.exec(cleanString)) {
				const { 0: exp, index } = match;
				const metaUrlIndex = index + exp.indexOf("import.meta.url");
				updatedCode = updatedCode.slice(0, metaUrlIndex) + locationString + updatedCode.slice(metaUrlIndex + metaUrlLength);
			}
			return {
				code: updatedCode,
				map: null
			};
		}
	};
}

function resolveOptimizerConfig(_testOptions, viteOptions) {
	const testOptions = _testOptions || {};
	const newConfig = {};
	const [major, minor, fix] = version.split(".").map(Number);
	const allowed = major >= 5 || major === 4 && minor >= 4 || major === 4 && minor === 3 && fix >= 2;
	if (!allowed && testOptions?.enabled === true) console.warn(`Vitest: "deps.optimizer" is only available in Vite >= 4.3.2, current Vite version: ${version}`);
	else testOptions.enabled ??= false;
	if (!allowed || testOptions?.enabled !== true) {
		newConfig.cacheDir = void 0;
		newConfig.optimizeDeps = {
			disabled: true,
			entries: []
		};
	} else {
		const currentInclude = testOptions.include || viteOptions?.include || [];
		const exclude = [
			"vitest",
			"react",
			"vue",
			...testOptions.exclude || viteOptions?.exclude || []
		];
		const runtime = currentInclude.filter((n) => n.endsWith("jsx-dev-runtime") || n.endsWith("jsx-runtime"));
		exclude.push(...runtime);
		const include = (testOptions.include || viteOptions?.include || []).filter((n) => !exclude.includes(n));
		newConfig.optimizeDeps = {
			...viteOptions,
			...testOptions,
			noDiscovery: true,
			disabled: false,
			entries: [],
			exclude,
			include
		};
	}
	// `optimizeDeps.disabled` is deprecated since v5.1.0-beta.1
	// https://github.com/vitejs/vite/pull/15184
	if (major >= 5 && minor >= 1 || major >= 6) {
		if (newConfig.optimizeDeps.disabled) {
			newConfig.optimizeDeps.noDiscovery = true;
			newConfig.optimizeDeps.include = [];
		}
		delete newConfig.optimizeDeps.disabled;
	}
	return newConfig;
}
function deleteDefineConfig(viteConfig) {
	const defines = {};
	if (viteConfig.define) {
		delete viteConfig.define["import.meta.vitest"];
		delete viteConfig.define["process.env"];
		delete viteConfig.define.process;
		delete viteConfig.define.global;
	}
	for (const key in viteConfig.define) {
		const val = viteConfig.define[key];
		let replacement;
		try {
			replacement = typeof val === "string" ? JSON.parse(val) : val;
		} catch {
			// probably means it contains reference to some variable,
			// like this: "__VAR__": "process.env.VAR"
			continue;
		}
		if (key.startsWith("import.meta.env.")) {
			const envKey = key.slice(16);
			process.env[envKey] = replacement;
			delete viteConfig.define[key];
		} else if (key.startsWith("process.env.")) {
			const envKey = key.slice(12);
			process.env[envKey] = replacement;
			delete viteConfig.define[key];
		} else if (!key.includes(".")) {
			defines[key] = replacement;
			delete viteConfig.define[key];
		}
	}
	return defines;
}
function resolveFsAllow(projectRoot, rootConfigFile) {
	if (!rootConfigFile) return [searchForWorkspaceRoot(projectRoot), rootDir];
	return [
		dirname(rootConfigFile),
		searchForWorkspaceRoot(projectRoot),
		rootDir
	];
}
function getDefaultResolveOptions() {
	return {
		mainFields: [],
		conditions: getDefaultServerConditions()
	};
}
function getDefaultServerConditions() {
	const viteMajor = Number(version.split(".")[0]);
	if (viteMajor >= 6) {
		const conditions = vite.defaultServerConditions;
		return conditions.filter((c) => c !== "module");
	}
	return ["node"];
}

function VitestOptimizer() {
	return {
		name: "vitest:normalize-optimizer",
		config: {
			order: "post",
			handler(viteConfig) {
				const testConfig = viteConfig.test || {};
				const webOptimizer = resolveOptimizerConfig(testConfig.deps?.optimizer?.web, viteConfig.optimizeDeps);
				const ssrOptimizer = resolveOptimizerConfig(testConfig.deps?.optimizer?.ssr, viteConfig.ssr?.optimizeDeps);
				const root = resolve(viteConfig.root || process.cwd());
				const name = viteConfig.test?.name;
				const label = typeof name === "string" ? name : name?.label || "";
				viteConfig.cacheDir = VitestCache.resolveCacheDir(resolve(root || process.cwd()), testConfig.cache != null && testConfig.cache !== false ? testConfig.cache.dir : viteConfig.cacheDir, label);
				viteConfig.optimizeDeps = webOptimizer.optimizeDeps;
				viteConfig.ssr ??= {};
				viteConfig.ssr.optimizeDeps = ssrOptimizer.optimizeDeps;
			}
		}
	};
}

// so people can reassign envs at runtime
// import.meta.env.VITE_NAME = 'app' -> process.env.VITE_NAME = 'app'
function SsrReplacerPlugin() {
	return {
		name: "vitest:ssr-replacer",
		enforce: "pre",
		transform(code, id) {
			if (!/\bimport\.meta\.env\b/.test(code)) return null;
			let s = null;
			const cleanCode = stripLiteral(code);
			const envs = cleanCode.matchAll(/\bimport\.meta\.env\b/g);
			for (const env of envs) {
				s ||= new MagicString(code);
				const startIndex = env.index;
				const endIndex = startIndex + env[0].length;
				s.overwrite(startIndex, endIndex, "__vite_ssr_import_meta__.env");
			}
			if (s) return {
				code: s.toString(),
				map: s.generateMap({
					hires: "boundary",
					source: cleanUrl(id)
				})
			};
		}
	};
}

function VitestProjectResolver(ctx) {
	const plugin = {
		name: "vitest:resolve-root",
		enforce: "pre",
		async resolveId(id, _, { ssr }) {
			if (id === "vitest" || id.startsWith("@vitest/") || id.startsWith("vitest/")) {
				// always redirect the request to the root vitest plugin since
				// it will be the one used to run Vitest
				const resolved = await ctx.server.pluginContainer.resolveId(id, void 0, {
					skip: new Set([plugin]),
					ssr
				});
				return resolved;
			}
		}
	};
	return plugin;
}
function VitestCoreResolver(ctx) {
	return {
		name: "vitest:resolve-core",
		enforce: "pre",
		async resolveId(id) {
			if (id === "vitest") return resolve(distDir, "index.js");
			if (id.startsWith("@vitest/") || id.startsWith("vitest/"))
 // ignore actual importer, we want it to be resolved relative to the root
			return this.resolve(id, join(ctx.config.root, "index.html"), { skipSelf: true });
		}
	};
}

function WorkspaceVitestPlugin(project, options) {
	return [
		{
			name: "vitest:project:name",
			enforce: "post",
			config(viteConfig) {
				const testConfig = viteConfig.test || {};
				let { label: name, color } = typeof testConfig.name === "string" ? { label: testConfig.name } : {
					label: "",
					...testConfig.name
				};
				if (!name) if (typeof options.workspacePath === "string") {
					// if there is a package.json, read the name from it
					const dir = options.workspacePath.endsWith("/") ? options.workspacePath.slice(0, -1) : dirname(options.workspacePath);
					const pkgJsonPath = resolve(dir, "package.json");
					if (existsSync(pkgJsonPath)) name = JSON.parse(readFileSync(pkgJsonPath, "utf-8")).name;
					if (typeof name !== "string" || !name) name = basename(dir);
				} else name = options.workspacePath.toString();
				const isUserBrowserEnabled = viteConfig.test?.browser?.enabled;
				const isBrowserEnabled = isUserBrowserEnabled ?? (viteConfig.test?.browser && project.vitest._cliOptions.browser?.enabled);
				// keep project names to potentially filter it out
				const workspaceNames = [name];
				const browser = viteConfig.test.browser || {};
				if (isBrowserEnabled && browser.name && !browser.instances?.length)
 // vitest injects `instances` in this case later on
				workspaceNames.push(name ? `${name} (${browser.name})` : browser.name);
				viteConfig.test?.browser?.instances?.forEach((instance) => {
					// every instance is a potential project
					instance.name ??= name ? `${name} (${instance.browser})` : instance.browser;
					if (isBrowserEnabled) workspaceNames.push(instance.name);
				});
				const filters = project.vitest.config.project;
				// if there is `--project=...` filter, check if any of the potential projects match
				// if projects don't match, we ignore the test project altogether
				// if some of them match, they will later be filtered again by `resolveWorkspace`
				if (filters.length) {
					const hasProject = workspaceNames.some((name) => {
						return project.vitest.matchesProjectFilter(name);
					});
					if (!hasProject) throw new VitestFilteredOutProjectError();
				}
				return { test: { name: {
					label: name,
					color
				} } };
			}
		},
		{
			name: "vitest:project",
			enforce: "pre",
			options() {
				this.meta.watchMode = false;
			},
			config(viteConfig) {
				const defines = deleteDefineConfig(viteConfig);
				const testConfig = viteConfig.test || {};
				const root = testConfig.root || viteConfig.root || options.root;
				const resolveOptions = getDefaultResolveOptions();
				const config = {
					root,
					define: { "process.env.NODE_ENV": "process.env.NODE_ENV" },
					resolve: {
						...resolveOptions,
						alias: testConfig.alias
					},
					esbuild: viteConfig.esbuild === false ? false : {
						target: viteConfig.esbuild?.target || "node18",
						sourcemap: "external",
						legalComments: "inline"
					},
					server: {
						watch: null,
						open: false,
						hmr: false,
						ws: false,
						preTransformRequests: false,
						middlewareMode: true,
						fs: { allow: resolveFsAllow(project.vitest.config.root, project.vitest.vite.config.configFile) }
					},
					environments: { ssr: { resolve: resolveOptions } },
					test: {}
				};
				config.test.defines = defines;
				const classNameStrategy = typeof testConfig.css !== "boolean" && testConfig.css?.modules?.classNameStrategy || "stable";
				if (classNameStrategy !== "scoped") {
					config.css ??= {};
					config.css.modules ??= {};
					if (config.css.modules) config.css.modules.generateScopedName = (name, filename) => {
						const root = project.config.root;
						return generateScopedClassName(classNameStrategy, name, relative(root, filename));
					};
				}
				config.customLogger = createViteLogger(project.vitest.logger, viteConfig.logLevel || "warn", { allowClearScreen: false });
				config.customLogger = silenceImportViteIgnoreWarning(config.customLogger);
				return config;
			}
		},
		{
			name: "vitest:project:server",
			enforce: "post",
			async configureServer(server) {
				const options = deepMerge({}, configDefaults, server.config.test || {});
				await project._configureServer(options, server);
				await server.watcher.close();
			}
		},
		SsrReplacerPlugin(),
		...CSSEnablerPlugin(project),
		CoverageTransform(project.vitest),
		...MocksPlugins(),
		VitestProjectResolver(project.vitest),
		VitestOptimizer(),
		NormalizeURLPlugin()
	];
}

class TestSpecification {
	/**
	* @deprecated use `project` instead
	*/
	0;
	/**
	* @deprecated use `moduleId` instead
	*/
	1;
	/**
	* @deprecated use `pool` instead
	*/
	2;
	/**
	* The task ID associated with the test module.
	*/
	taskId;
	/**
	* The test project that the module belongs to.
	*/
	project;
	/**
	* The ID of the module in the Vite module graph. It is usually an absolute file path.
	*/
	moduleId;
	/**
	* The current test pool. It's possible to have multiple pools in a single test project with `poolMatchGlob` and `typecheck.enabled`.
	* @experimental In Vitest 4, the project will only support a single pool and this property will be removed.
	*/
	pool;
	/**
	* Line numbers of the test locations to run.
	*/
	testLines;
	constructor(project, moduleId, pool, testLines) {
		this[0] = project;
		this[1] = moduleId;
		this[2] = { pool };
		const name = project.config.name;
		const hashName = pool !== "typescript" ? name : name ? `${name}:__typecheck__` : "__typecheck__";
		this.taskId = generateFileHash(relative(project.config.root, moduleId), hashName);
		this.project = project;
		this.moduleId = moduleId;
		this.pool = pool;
		this.testLines = testLines;
	}
	/**
	* Test module associated with the specification.
	*/
	get testModule() {
		const task = this.project.vitest.state.idMap.get(this.taskId);
		if (!task) return void 0;
		return this.project.vitest.state.getReportedEntity(task);
	}
	toJSON() {
		return [
			{
				name: this.project.config.name,
				root: this.project.config.root
			},
			this.moduleId,
			{
				pool: this.pool,
				testLines: this.testLines
			}
		];
	}
	/**
	* for backwards compatibility
	* @deprecated
	*/
	*[Symbol.iterator]() {
		yield this.project;
		yield this.moduleId;
		yield this.pool;
	}
}

async function createViteServer(inlineConfig) {
	// Vite prints an error (https://github.com/vitejs/vite/issues/14328)
	// But Vitest works correctly either way
	const error = console.error;
	console.error = (...args) => {
		if (typeof args[0] === "string" && args[0].includes("WebSocket server error:")) return;
		error(...args);
	};
	const server = await createServer(inlineConfig);
	console.error = error;
	return server;
}

class TestProject {
	/**
	* The global Vitest instance.
	* @experimental The public Vitest API is experimental and does not follow semver.
	*/
	vitest;
	/**
	* Resolved global configuration. If there are no workspace projects, this will be the same as `config`.
	*/
	globalConfig;
	/**
	* Browser instance if the browser is enabled. This is initialized when the tests run for the first time.
	*/
	browser;
	/** @deprecated use `vitest` instead */
	ctx;
	/**
	* Temporary directory for the project. This is unique for each project. Vitest stores transformed content here.
	*/
	tmpDir = join(tmpdir(), nanoid());
	/** @internal */ vitenode;
	/** @internal */ typechecker;
	/** @internal */ _config;
	/** @internal */ _vite;
	/** @internal */ _hash;
	runner;
	closingPromise;
	testFilesList = null;
	typecheckFilesList = null;
	_globalSetups;
	_provided = {};
	constructor(path, vitest, options) {
		this.path = path;
		this.options = options;
		this.vitest = vitest;
		this.ctx = vitest;
		this.globalConfig = vitest.config;
	}
	/**
	* The unique hash of this project. This value is consistent between the reruns.
	*
	* It is based on the root of the project (not consistent between OS) and its name.
	*/
	get hash() {
		if (!this._hash) throw new Error("The server was not set. It means that `project.hash` was called before the Vite server was established.");
		return this._hash;
	}
	// "provide" is a property, not a method to keep the context when destructed in the global setup,
	// making it a method would be a breaking change, and can be done in Vitest 3 at minimum
	/**
	* Provide a value to the test context. This value will be available to all tests with `inject`.
	*/
	provide = (key, value) => {
		try {
			structuredClone(value);
		} catch (err) {
			throw new Error(`Cannot provide "${key}" because it's not serializable.`, { cause: err });
		}
		// casting `any` because the default type is `never` since `ProvidedContext` is empty
		this._provided[key] = value;
	};
	/**
	* Get the provided context. The project context is merged with the global context.
	*/
	getProvidedContext() {
		if (this.isRootProject()) return this._provided;
		// globalSetup can run even if core workspace is not part of the test run
		// so we need to inherit its provided context
		return {
			...this.vitest.getRootProject().getProvidedContext(),
			...this._provided
		};
	}
	/**
	* Creates a new test specification. Specifications describe how to run tests.
	* @param moduleId The file path
	*/
	createSpecification(moduleId, locations, pool) {
		return new TestSpecification(this, moduleId, pool || getFilePoolName(this, moduleId), locations);
	}
	toJSON() {
		return {
			name: this.name,
			serializedConfig: this.serializedConfig,
			context: this.getProvidedContext()
		};
	}
	/**
	* Vite's dev server instance. Every workspace project has its own server.
	*/
	get vite() {
		if (!this._vite) throw new Error("The server was not set. It means that `project.vite` was called before the Vite server was established.");
		// checking it once should be enough
		Object.defineProperty(this, "vite", {
			configurable: true,
			writable: true,
			value: this._vite
		});
		return this._vite;
	}
	/**
	* Resolved project configuration.
	*/
	get config() {
		if (!this._config) throw new Error("The config was not set. It means that `project.config` was called before the Vite server was established.");
		// checking it once should be enough
		// Object.defineProperty(this, 'config', {
		//   configurable: true,
		//   writable: true,
		//   value: this._config,
		// })
		return this._config;
	}
	/**
	* The name of the project or an empty string if not set.
	*/
	get name() {
		return this.config.name || "";
	}
	/**
	* The color used when reporting tasks of this project.
	*/
	get color() {
		return this.config.color;
	}
	/**
	* Serialized project configuration. This is the config that tests receive.
	*/
	get serializedConfig() {
		return this._serializeOverriddenConfig();
	}
	/** @deprecated use `vite` instead */
	get server() {
		return this._vite;
	}
	/**
	* Check if this is the root project. The root project is the one that has the root config.
	*/
	isRootProject() {
		return this.vitest.getRootProject() === this;
	}
	/** @deprecated use `isRootProject` instead */
	isCore() {
		return this.isRootProject();
	}
	/** @deprecated use `createSpecification` instead */
	createSpec(moduleId, pool) {
		return new TestSpecification(this, moduleId, pool);
	}
	/** @deprecated */
	initializeGlobalSetup() {
		return this._initializeGlobalSetup();
	}
	/** @internal */
	async _initializeGlobalSetup() {
		if (this._globalSetups) return;
		this._globalSetups = await loadGlobalSetupFiles(this.runner, this.config.globalSetup);
		for (const globalSetupFile of this._globalSetups) {
			const teardown = await globalSetupFile.setup?.(this);
			if (teardown == null || !!globalSetupFile.teardown) continue;
			if (typeof teardown !== "function") throw new TypeError(`invalid return value in globalSetup file ${globalSetupFile.file}. Must return a function`);
			globalSetupFile.teardown = teardown;
		}
	}
	onTestsRerun(cb) {
		this.vitest.onTestsRerun(cb);
	}
	/** @deprecated */
	teardownGlobalSetup() {
		return this._teardownGlobalSetup();
	}
	/** @internal */
	async _teardownGlobalSetup() {
		if (!this._globalSetups) return;
		for (const globalSetupFile of [...this._globalSetups].reverse()) await globalSetupFile.teardown?.();
	}
	/** @deprecated use `vitest.logger` instead */
	get logger() {
		return this.vitest.logger;
	}
	// it's possible that file path was imported with different queries (?raw, ?url, etc)
	/** @deprecated use `.vite` or `.browser.vite` directly */
	getModulesByFilepath(file) {
		const set = this.server.moduleGraph.getModulesByFile(file) || this.browser?.vite.moduleGraph.getModulesByFile(file);
		return set || /* @__PURE__ */ new Set();
	}
	/** @deprecated use `.vite` or `.browser.vite` directly */
	getModuleById(id) {
		return this.server.moduleGraph.getModuleById(id) || this.browser?.vite.moduleGraph.getModuleById(id);
	}
	/** @deprecated use `.vite` or `.browser.vite` directly */
	getSourceMapModuleById(id) {
		const mod = this.server.moduleGraph.getModuleById(id);
		return mod?.ssrTransformResult?.map || mod?.transformResult?.map;
	}
	/** @deprecated use `vitest.reporters` instead */
	get reporters() {
		return this.ctx.reporters;
	}
	/**
	* Get all files in the project that match the globs in the config and the filters.
	* @param filters String filters to match the test files.
	*/
	async globTestFiles(filters = []) {
		const dir = this.config.dir || this.config.root;
		const { include, exclude, includeSource } = this.config;
		const typecheck = this.config.typecheck;
		const [testFiles, typecheckTestFiles] = await Promise.all([typecheck.enabled && typecheck.only ? [] : this.globAllTestFiles(include, exclude, includeSource, dir), typecheck.enabled ? this.typecheckFilesList || this.globFiles(typecheck.include, typecheck.exclude, dir) : []]);
		this.typecheckFilesList = typecheckTestFiles;
		return {
			testFiles: this.filterFiles(testFiles, filters, dir),
			typecheckTestFiles: this.filterFiles(typecheckTestFiles, filters, dir)
		};
	}
	async globAllTestFiles(include, exclude, includeSource, cwd) {
		if (this.testFilesList) return this.testFilesList;
		const testFiles = await this.globFiles(include, exclude, cwd);
		if (includeSource?.length) {
			const files = await this.globFiles(includeSource, exclude, cwd);
			await Promise.all(files.map(async (file) => {
				try {
					const code = await promises.readFile(file, "utf-8");
					if (this.isInSourceTestCode(code)) testFiles.push(file);
				} catch {
					return null;
				}
			}));
		}
		this.testFilesList = testFiles;
		return testFiles;
	}
	isBrowserEnabled() {
		return isBrowserEnabled(this.config);
	}
	markTestFile(testPath) {
		this.testFilesList?.push(testPath);
	}
	/** @internal */
	_removeCachedTestFile(testPath) {
		if (this.testFilesList) this.testFilesList = this.testFilesList.filter((file) => file !== testPath);
	}
	/**
	* Returns if the file is a test file. Requires `.globTestFiles()` to be called first.
	* @internal
	*/
	_isCachedTestFile(testPath) {
		return !!this.testFilesList && this.testFilesList.includes(testPath);
	}
	/**
	* Returns if the file is a typecheck test file. Requires `.globTestFiles()` to be called first.
	* @internal
	*/
	_isCachedTypecheckFile(testPath) {
		return !!this.typecheckFilesList && this.typecheckFilesList.includes(testPath);
	}
	/** @deprecated use `serializedConfig` instead */
	getSerializableConfig() {
		return this._serializeOverriddenConfig();
	}
	/** @internal */
	async globFiles(include, exclude, cwd) {
		const globOptions = {
			dot: true,
			cwd,
			ignore: exclude,
			expandDirectories: false
		};
		const files = await glob(include, globOptions);
		// keep the slashes consistent with Vite
		// we are not using the pathe here because it normalizes the drive letter on Windows
		// and we want to keep it the same as working dir
		return files.map((file) => slash(path.resolve(cwd, file)));
	}
	/**
	* Test if a file matches the test globs. This does the actual glob matching if the test is not cached, unlike `isCachedTestFile`.
	*/
	matchesTestGlob(moduleId, source) {
		if (this._isCachedTestFile(moduleId)) return true;
		const relativeId = relative(this.config.dir || this.config.root, moduleId);
		if (pm.isMatch(relativeId, this.config.exclude)) return false;
		if (pm.isMatch(relativeId, this.config.include)) {
			this.markTestFile(moduleId);
			return true;
		}
		if (this.config.includeSource?.length && pm.isMatch(relativeId, this.config.includeSource)) {
			const code = source?.() || readFileSync(moduleId, "utf-8");
			if (this.isInSourceTestCode(code)) {
				this.markTestFile(moduleId);
				return true;
			}
		}
		return false;
	}
	/** @deprecated use `matchesTestGlob` instead */
	async isTargetFile(id, source) {
		return this.matchesTestGlob(id, source ? () => source : void 0);
	}
	isInSourceTestCode(code) {
		return code.includes("import.meta.vitest");
	}
	filterFiles(testFiles, filters, dir) {
		if (filters.length && process.platform === "win32") filters = filters.map((f) => slash(f));
		if (filters.length) return testFiles.filter((t) => {
			const testFile = relative(dir, t).toLocaleLowerCase();
			return filters.some((f) => {
				// if filter is a full file path, we should include it if it's in the same folder
				if (isAbsolute(f) && t.startsWith(f)) return true;
				const relativePath = f.endsWith("/") ? join(relative(dir, f), "/") : relative(dir, f);
				return testFile.includes(f.toLocaleLowerCase()) || testFile.includes(relativePath.toLocaleLowerCase());
			});
		});
		return testFiles;
	}
	_parentBrowser;
	/** @internal */
	_parent;
	/** @internal */
	_initParentBrowser = deduped(async () => {
		if (!this.isBrowserEnabled() || this._parentBrowser) return;
		await this.vitest.packageInstaller.ensureInstalled("@vitest/browser", this.config.root, this.vitest.version);
		const { createBrowserServer, distRoot } = await import('@vitest/browser');
		let cacheDir;
		const browser = await createBrowserServer(this, this.vite.config.configFile, [{
			name: "vitest:browser-cacheDir",
			configResolved(config) {
				cacheDir = config.cacheDir;
			}
		}, ...MocksPlugins({ filter(id) {
			if (id.includes(distRoot) || id.includes(cacheDir)) return false;
			return true;
		} })], [CoverageTransform(this.vitest)]);
		this._parentBrowser = browser;
		if (this.config.browser.ui) setup(this.vitest, browser.vite);
	});
	/** @internal */
	_initBrowserServer = deduped(async () => {
		await this._parent?._initParentBrowser();
		if (!this.browser && this._parent?._parentBrowser) {
			this.browser = this._parent._parentBrowser.spawn(this);
			await this.vitest.report("onBrowserInit", this);
		}
	});
	/**
	* Closes the project and all associated resources. This can only be called once; the closing promise is cached until the server restarts.
	* If the resources are needed again, create a new project.
	*/
	close() {
		if (!this.closingPromise) this.closingPromise = Promise.all([
			this.vite?.close(),
			this.typechecker?.stop(),
			this.browser?.close(),
			this.clearTmpDir()
		].filter(Boolean)).then(() => {
			this._provided = {};
			this._vite = void 0;
		});
		return this.closingPromise;
	}
	/**
	* Import a file using Vite module runner.
	* @param moduleId The ID of the module in Vite module graph
	*/
	import(moduleId) {
		return this.runner.executeId(moduleId);
	}
	/** @deprecated use `name` instead */
	getName() {
		return this.config.name || "";
	}
	/** @deprecated internal */
	setServer(options, server) {
		return this._configureServer(options, server);
	}
	_setHash() {
		this._hash = generateHash(this._config.root + this._config.name);
	}
	/** @internal */
	async _configureServer(options, server) {
		this._config = resolveConfig(this.vitest, {
			...options,
			coverage: this.vitest.config.coverage
		}, server.config);
		this._setHash();
		for (const _providedKey in this.config.provide) {
			const providedKey = _providedKey;
			// type is very strict here, so we cast it to any
			this.provide(providedKey, this.config.provide[providedKey]);
		}
		this.closingPromise = void 0;
		this._vite = server;
		this.vitenode = new ViteNodeServer(server, this.config.server);
		const node = this.vitenode;
		this.runner = new ViteNodeRunner({
			root: server.config.root,
			base: server.config.base,
			fetchModule(id) {
				return node.fetchModule(id);
			},
			resolveId(id, importer) {
				return node.resolveId(id, importer);
			}
		});
	}
	_serializeOverriddenConfig() {
		// TODO: serialize the config _once_ or when needed
		const config = serializeConfig(this.config, this.vitest.config, this.vite.config);
		if (!this.vitest.configOverride) return config;
		return deepMerge(config, this.vitest.configOverride);
	}
	async clearTmpDir() {
		try {
			await rm(this.tmpDir, { recursive: true });
		} catch {}
	}
	/** @deprecated */
	initBrowserProvider() {
		return this._initBrowserProvider();
	}
	/** @internal */
	_initBrowserProvider = deduped(async () => {
		if (!this.isBrowserEnabled() || this.browser?.provider) return;
		if (!this.browser) await this._initBrowserServer();
		await this.browser?.initBrowserProvider(this);
	});
	/** @internal */
	_provideObject(context) {
		for (const _providedKey in context) {
			const providedKey = _providedKey;
			// type is very strict here, so we cast it to any
			this.provide(providedKey, context[providedKey]);
		}
	}
	/** @internal */
	static _createBasicProject(vitest) {
		const project = new TestProject(vitest.config.name || vitest.config.root, vitest);
		project.vitenode = vitest.vitenode;
		project.runner = vitest.runner;
		project._vite = vitest.server;
		project._config = vitest.config;
		project._setHash();
		project._provideObject(vitest.config.provide);
		return project;
	}
	/** @internal */
	static _cloneBrowserProject(parent, config) {
		const clone = new TestProject(parent.path, parent.vitest);
		clone.vitenode = parent.vitenode;
		clone.runner = parent.runner;
		clone._vite = parent._vite;
		clone._config = config;
		clone._setHash();
		clone._parent = parent;
		clone._provideObject(config.provide);
		return clone;
	}
}
function deduped(cb) {
	let _promise;
	return (...args) => {
		if (!_promise) _promise = cb(...args).finally(() => {
			_promise = void 0;
		});
		return _promise;
	};
}
async function initializeProject(workspacePath, ctx, options) {
	const project = new TestProject(workspacePath, ctx, options);
	const { configFile,...restOptions } = options;
	const config = {
		...restOptions,
		configFile,
		configLoader: ctx.vite.config.inlineConfig.configLoader,
		mode: options.test?.mode || options.mode || ctx.config.mode,
		plugins: [...options.plugins || [], WorkspaceVitestPlugin(project, {
			...options,
			workspacePath
		})]
	};
	await createViteServer(config);
	return project;
}
function generateHash(str) {
	let hash = 0;
	if (str.length === 0) return `${hash}`;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}
	return `${hash}`;
}

async function resolveProjects(vitest, cliOptions, workspaceConfigPath, projectsDefinition, names) {
	const { configFiles, projectConfigs, nonConfigDirectories } = await resolveTestProjectConfigs(vitest, workspaceConfigPath, projectsDefinition);
	// cli options that affect the project config,
	// not all options are allowed to be overridden
	const overridesOptions = [
		"logHeapUsage",
		"allowOnly",
		"sequence",
		"testTimeout",
		"pool",
		"update",
		"globals",
		"expandSnapshotDiff",
		"disableConsoleIntercept",
		"retry",
		"testNamePattern",
		"passWithNoTests",
		"bail",
		"isolate",
		"printConsoleTrace",
		"inspect",
		"inspectBrk",
		"fileParallelism"
	];
	const cliOverrides = overridesOptions.reduce((acc, name) => {
		if (name in cliOptions) acc[name] = cliOptions[name];
		return acc;
	}, {});
	const projectPromises = [];
	const fileProjects = [...configFiles, ...nonConfigDirectories];
	const concurrent = limitConcurrency(nodeos__default.availableParallelism?.() || nodeos__default.cpus().length || 5);
	projectConfigs.forEach((options, index) => {
		const configRoot = workspaceConfigPath ? dirname(workspaceConfigPath) : vitest.config.root;
		// if extends a config file, resolve the file path
		const configFile = typeof options.extends === "string" ? resolve(configRoot, options.extends) : options.extends === true ? vitest.vite.config.configFile || false : false;
		// if `root` is configured, resolve it relative to the workspace file or vite root (like other options)
		// if `root` is not specified, inline configs use the same root as the root project
		const root = options.root ? resolve(configRoot, options.root) : vitest.config.root;
		projectPromises.push(concurrent(() => initializeProject(index, vitest, {
			...options,
			root,
			configFile,
			test: {
				...options.test,
				...cliOverrides
			}
		})));
	});
	for (const path of fileProjects) {
		// if file leads to the root config, then we can just reuse it because we already initialized it
		if (vitest.vite.config.configFile === path) {
			const project = getDefaultTestProject(vitest);
			if (project) projectPromises.push(Promise.resolve(project));
			continue;
		}
		const configFile = path.endsWith("/") ? false : path;
		const root = path.endsWith("/") ? path : dirname(path);
		projectPromises.push(concurrent(() => initializeProject(path, vitest, {
			root,
			configFile,
			test: cliOverrides
		})));
	}
	// pretty rare case - the glob didn't match anything and there are no inline configs
	if (!projectPromises.length) throw new Error([
		"No projects were found. Make sure your configuration is correct. ",
		vitest.config.project.length ? `The filter matched no projects: ${vitest.config.project.join(", ")}. ` : "",
		`The projects definition: ${JSON.stringify(projectsDefinition, null, 4)}.`
	].join(""));
	const resolvedProjectsPromises = await Promise.allSettled(projectPromises);
	const errors = [];
	const resolvedProjects = [];
	for (const result of resolvedProjectsPromises) if (result.status === "rejected") {
		if (result.reason instanceof VitestFilteredOutProjectError)
 // filter out filtered out projects
		continue;
		errors.push(result.reason);
	} else resolvedProjects.push(result.value);
	if (errors.length) throw new AggregateError(errors, "Failed to initialize projects. There were errors during projects setup. See below for more details.");
	// project names are guaranteed to be unique
	for (const project of resolvedProjects) {
		const name = project.name;
		if (names.has(name)) {
			const duplicate = resolvedProjects.find((p) => p.name === name && p !== project);
			const filesError = fileProjects.length ? [
				"\n\nYour config matched these files:\n",
				fileProjects.map((p) => ` - ${relative(vitest.config.root, p)}`).join("\n"),
				"\n\n"
			].join("") : " ";
			throw new Error([
				`Project name "${name}"`,
				project.vite.config.configFile ? ` from "${relative(vitest.config.root, project.vite.config.configFile)}"` : "",
				" is not unique.",
				duplicate?.vite.config.configFile ? ` The project is already defined by "${relative(vitest.config.root, duplicate.vite.config.configFile)}".` : "",
				filesError,
				"All projects should have unique names. Make sure your configuration is correct."
			].join(""));
		}
		names.add(name);
	}
	return resolveBrowserProjects(vitest, names, resolvedProjects);
}
async function resolveBrowserProjects(vitest, names, resolvedProjects) {
	const removeProjects = /* @__PURE__ */ new Set();
	resolvedProjects.forEach((project) => {
		if (!project.config.browser.enabled) return;
		const instances = project.config.browser.instances || [];
		const browser = project.config.browser.name;
		if (instances.length === 0 && browser) {
			instances.push({
				browser,
				name: project.name ? `${project.name} (${browser})` : browser
			});
			vitest.logger.warn(withLabel("yellow", "Vitest", [
				`No browser "instances" were defined`,
				project.name ? ` for the "${project.name}" project. ` : ". ",
				`Running tests in "${project.config.browser.name}" browser. `,
				"The \"browser.name\" field is deprecated since Vitest 3. ",
				"Read more: https://vitest.dev/guide/browser/config#browser-instances"
			].filter(Boolean).join("")));
		}
		const originalName = project.config.name;
		// if original name is in the --project=name filter, keep all instances
		const filteredInstances = vitest.matchesProjectFilter(originalName) ? instances : instances.filter((instance) => {
			const newName = instance.name;
			return vitest.matchesProjectFilter(newName);
		});
		// every project was filtered out
		if (!filteredInstances.length) {
			removeProjects.add(project);
			return;
		}
		if (project.config.browser.providerOptions) vitest.logger.warn(withLabel("yellow", "Vitest", `"providerOptions"${originalName ? ` in "${originalName}" project` : ""} is ignored because it's overridden by the configs. To hide this warning, remove the "providerOptions" property from the browser configuration.`));
		filteredInstances.forEach((config, index) => {
			const browser = config.browser;
			if (!browser) {
				const nth = index + 1;
				const ending = nth === 2 ? "nd" : nth === 3 ? "rd" : "th";
				throw new Error(`The browser configuration must have a "browser" property. The ${nth}${ending} item in "browser.instances" doesn't have it. Make sure your${originalName ? ` "${originalName}"` : ""} configuration is correct.`);
			}
			const name = config.name;
			if (name == null) throw new Error(`The browser configuration must have a "name" property. This is a bug in Vitest. Please, open a new issue with reproduction`);
			if (names.has(name)) throw new Error([
				`Cannot define a nested project for a ${browser} browser. The project name "${name}" was already defined. `,
				"If you have multiple instances for the same browser, make sure to define a custom \"name\". ",
				"All projects should have unique names. Make sure your configuration is correct."
			].join(""));
			names.add(name);
			const clonedConfig = cloneConfig(project, config);
			clonedConfig.name = name;
			const clone = TestProject._cloneBrowserProject(project, clonedConfig);
			resolvedProjects.push(clone);
		});
		removeProjects.add(project);
	});
	resolvedProjects = resolvedProjects.filter((project) => !removeProjects.has(project));
	const headedBrowserProjects = resolvedProjects.filter((project) => {
		return project.config.browser.enabled && !project.config.browser.headless;
	});
	if (headedBrowserProjects.length > 1) {
		const message = [`Found multiple projects that run browser tests in headed mode: "${headedBrowserProjects.map((p) => p.name).join("\", \"")}".`, ` Vitest cannot run multiple headed browsers at the same time.`].join("");
		if (!isTTY) throw new Error(`${message} Please, filter projects with --browser=name or --project=name flag or run tests with "headless: true" option.`);
		const prompts = await import('./index.X0nbfr6-.js').then(function (n) { return n.i; });
		const { projectName } = await prompts.default({
			type: "select",
			name: "projectName",
			choices: headedBrowserProjects.map((project) => ({
				title: project.name,
				value: project.name
			})),
			message: `${message} Select a single project to run or cancel and run tests with "headless: true" option. Note that you can also start tests with --browser=name or --project=name flag.`
		});
		if (!projectName) throw new Error("The test run was aborted.");
		return resolvedProjects.filter((project) => project.name === projectName);
	}
	return resolvedProjects;
}
function cloneConfig(project, { browser,...config }) {
	const { locators, viewport, testerHtmlPath, headless, screenshotDirectory, screenshotFailures, browser: _browser, name,...overrideConfig } = config;
	const currentConfig = project.config.browser;
	return mergeConfig({
		...deepClone(project.config),
		browser: {
			...project.config.browser,
			locators: locators ? { testIdAttribute: locators.testIdAttribute ?? currentConfig.locators.testIdAttribute } : project.config.browser.locators,
			viewport: viewport ?? currentConfig.viewport,
			testerHtmlPath: testerHtmlPath ?? currentConfig.testerHtmlPath,
			screenshotDirectory: screenshotDirectory ?? currentConfig.screenshotDirectory,
			screenshotFailures: screenshotFailures ?? currentConfig.screenshotFailures,
			headless: headless ?? currentConfig.headless,
			name: browser,
			providerOptions: config,
			instances: void 0
		}
	}, overrideConfig);
}
async function resolveTestProjectConfigs(vitest, workspaceConfigPath, projectsDefinition) {
	// project configurations that were specified directly
	const projectsOptions = [];
	// custom config files that were specified directly or resolved from a directory
	const projectsConfigFiles = [];
	// custom glob matches that should be resolved as directories or config files
	const projectsGlobMatches = [];
	// directories that don't have a config file inside, but should be treated as projects
	const nonConfigProjectDirectories = [];
	for (const definition of projectsDefinition) if (typeof definition === "string") {
		const stringOption = definition.replace("<rootDir>", vitest.config.root);
		// if the string doesn't contain a glob, we can resolve it directly
		// ['./vitest.config.js']
		if (!isDynamicPattern(stringOption)) {
			const file = resolve(vitest.config.root, stringOption);
			if (!existsSync(file)) {
				const relativeWorkspaceConfigPath = workspaceConfigPath ? relative(vitest.config.root, workspaceConfigPath) : void 0;
				const note = workspaceConfigPath ? `Workspace config file "${relativeWorkspaceConfigPath}"` : "Projects definition";
				throw new Error(`${note} references a non-existing file or a directory: ${file}`);
			}
			const stats = await promises.stat(file);
			// user can specify a config file directly
			if (stats.isFile()) projectsConfigFiles.push(file);
			else if (stats.isDirectory()) {
				const configFile = await resolveDirectoryConfig(file);
				if (configFile) projectsConfigFiles.push(configFile);
				else {
					const directory = file[file.length - 1] === "/" ? file : `${file}/`;
					nonConfigProjectDirectories.push(directory);
				}
			} else
 // should never happen
			throw new TypeError(`Unexpected file type: ${file}`);
		} else projectsGlobMatches.push(stringOption);
	} else if (typeof definition === "function") projectsOptions.push(await definition({
		command: vitest.vite.config.command,
		mode: vitest.vite.config.mode,
		isPreview: false,
		isSsrBuild: false
	}));
	else projectsOptions.push(await definition);
	if (projectsGlobMatches.length) {
		const globOptions = {
			absolute: true,
			dot: true,
			onlyFiles: false,
			cwd: vitest.config.root,
			expandDirectories: false,
			ignore: [
				"**/node_modules/**",
				"**/*.timestamp-*",
				"**/.DS_Store"
			]
		};
		const projectsFs = await glob(projectsGlobMatches, globOptions);
		await Promise.all(projectsFs.map(async (path) => {
			// directories are allowed with a glob like `packages/*`
			// in this case every directory is treated as a project
			if (path.endsWith("/")) {
				const configFile = await resolveDirectoryConfig(path);
				if (configFile) projectsConfigFiles.push(configFile);
				else nonConfigProjectDirectories.push(path);
			} else projectsConfigFiles.push(path);
		}));
	}
	const projectConfigFiles = Array.from(new Set(projectsConfigFiles));
	return {
		projectConfigs: projectsOptions,
		nonConfigDirectories: nonConfigProjectDirectories,
		configFiles: projectConfigFiles
	};
}
async function resolveDirectoryConfig(directory) {
	const files = new Set(await promises.readdir(directory));
	// default resolution looks for vitest.config.* or vite.config.* files
	// this simulates how `findUp` works in packages/vitest/src/node/create.ts:29
	const configFile = configFiles.find((file) => files.has(file));
	if (configFile) return resolve(directory, configFile);
	return null;
}
function getDefaultTestProject(vitest) {
	const filter = vitest.config.project;
	const project = vitest._ensureRootProject();
	if (!filter.length) return project;
	// check for the project name and browser names
	const hasProjects = getPotentialProjectNames(project).some((p) => vitest.matchesProjectFilter(p));
	if (hasProjects) return project;
	return null;
}
function getPotentialProjectNames(project) {
	const names = [project.name];
	if (project.config.browser.instances) names.push(...project.config.browser.instances.map((i) => i.name));
	else if (project.config.browser.name) names.push(project.config.browser.name);
	return names;
}

async function loadCustomReporterModule(path, runner) {
	let customReporterModule;
	try {
		customReporterModule = await runner.executeId(path);
	} catch (customReporterModuleError) {
		throw new Error(`Failed to load custom Reporter from ${path}`, { cause: customReporterModuleError });
	}
	if (customReporterModule.default === null || customReporterModule.default === void 0) throw new Error(`Custom reporter loaded from ${path} was not the default export`);
	return customReporterModule.default;
}
function createReporters(reporterReferences, ctx) {
	const runner = ctx.runner;
	const promisedReporters = reporterReferences.map(async (referenceOrInstance) => {
		if (Array.isArray(referenceOrInstance)) {
			const [reporterName, reporterOptions] = referenceOrInstance;
			if (reporterName === "html") {
				await ctx.packageInstaller.ensureInstalled("@vitest/ui", runner.root, ctx.version);
				const CustomReporter = await loadCustomReporterModule("@vitest/ui/reporter", runner);
				return new CustomReporter(reporterOptions);
			} else if (reporterName in ReportersMap) {
				const BuiltinReporter = ReportersMap[reporterName];
				return new BuiltinReporter(reporterOptions);
			} else {
				const CustomReporter = await loadCustomReporterModule(reporterName, runner);
				return new CustomReporter(reporterOptions);
			}
		}
		return referenceOrInstance;
	});
	return Promise.all(promisedReporters);
}
function createBenchmarkReporters(reporterReferences, runner) {
	const promisedReporters = reporterReferences.map(async (referenceOrInstance) => {
		if (typeof referenceOrInstance === "string") if (referenceOrInstance in BenchmarkReportsMap) {
			const BuiltinReporter = BenchmarkReportsMap[referenceOrInstance];
			return new BuiltinReporter();
		} else {
			const CustomReporter = await loadCustomReporterModule(referenceOrInstance, runner);
			return new CustomReporter();
		}
		return referenceOrInstance;
	});
	return Promise.all(promisedReporters);
}

function parseFilter(filter) {
	const colonIndex = filter.lastIndexOf(":");
	if (colonIndex === -1) return { filename: filter };
	const [parsedFilename, lineNumber] = [filter.substring(0, colonIndex), filter.substring(colonIndex + 1)];
	if (lineNumber.match(/^\d+$/)) return {
		filename: parsedFilename,
		lineNumber: Number.parseInt(lineNumber)
	};
	else if (lineNumber.match(/^\d+-\d+$/)) throw new RangeLocationFilterProvidedError(filter);
	else return { filename: filter };
}
function groupFilters(filters) {
	const groupedFilters_ = groupBy(filters, (f) => f.filename);
	const groupedFilters = Object.fromEntries(Object.entries(groupedFilters_).map((entry) => {
		const [filename, filters] = entry;
		const testLocations = filters.map((f) => f.lineNumber);
		return [filename, testLocations.filter((l) => l !== void 0)];
	}));
	return groupedFilters;
}

class VitestSpecifications {
	_cachedSpecs = /* @__PURE__ */ new Map();
	constructor(vitest) {
		this.vitest = vitest;
	}
	getModuleSpecifications(moduleId) {
		const _cached = this.getCachedSpecifications(moduleId);
		if (_cached) return _cached;
		const specs = [];
		for (const project of this.vitest.projects) {
			if (project._isCachedTestFile(moduleId)) specs.push(project.createSpecification(moduleId));
			if (project._isCachedTypecheckFile(moduleId)) specs.push(project.createSpecification(moduleId, [], "typescript"));
		}
		specs.forEach((spec) => this.ensureSpecificationCached(spec));
		return specs;
	}
	async getRelevantTestSpecifications(filters = []) {
		return this.filterTestsBySource(await this.globTestSpecifications(filters));
	}
	async globTestSpecifications(filters = []) {
		const files = [];
		const dir = process.cwd();
		const parsedFilters = filters.map((f) => parseFilter(f));
		// Require includeTaskLocation when a location filter is passed
		if (!this.vitest.config.includeTaskLocation && parsedFilters.some((f) => f.lineNumber !== void 0)) throw new IncludeTaskLocationDisabledError();
		const testLines = groupFilters(parsedFilters.map((f) => ({
			...f,
			filename: resolve(dir, f.filename)
		})));
		// Key is file and val specifies whether we have matched this file with testLocation
		const testLocHasMatch = {};
		await Promise.all(this.vitest.projects.map(async (project) => {
			const { testFiles, typecheckTestFiles } = await project.globTestFiles(parsedFilters.map((f) => f.filename));
			testFiles.forEach((file) => {
				const lines = testLines[file];
				testLocHasMatch[file] = true;
				const spec = project.createSpecification(file, lines);
				this.ensureSpecificationCached(spec);
				files.push(spec);
			});
			typecheckTestFiles.forEach((file) => {
				const lines = testLines[file];
				testLocHasMatch[file] = true;
				const spec = project.createSpecification(file, lines, "typescript");
				this.ensureSpecificationCached(spec);
				files.push(spec);
			});
		}));
		Object.entries(testLines).forEach(([filepath, loc]) => {
			if (loc.length !== 0 && !testLocHasMatch[filepath]) throw new LocationFilterFileNotFoundError(relative(dir, filepath));
		});
		return files;
	}
	clearCache(moduleId) {
		if (moduleId) this._cachedSpecs.delete(moduleId);
		else this._cachedSpecs.clear();
	}
	getCachedSpecifications(moduleId) {
		return this._cachedSpecs.get(moduleId);
	}
	ensureSpecificationCached(spec) {
		const file = spec.moduleId;
		const specs = this._cachedSpecs.get(file) || [];
		const index = specs.findIndex((_s) => _s.project === spec.project && _s.pool === spec.pool);
		if (index === -1) {
			specs.push(spec);
			this._cachedSpecs.set(file, specs);
		} else specs.splice(index, 1, spec);
		return specs;
	}
	async filterTestsBySource(specs) {
		if (this.vitest.config.changed && !this.vitest.config.related) {
			const { VitestGit } = await import('./git.BVQ8w_Sw.js');
			const vitestGit = new VitestGit(this.vitest.config.root);
			const related = await vitestGit.findChangedFiles({ changedSince: this.vitest.config.changed });
			if (!related) {
				process.exitCode = 1;
				throw new GitNotFoundError();
			}
			this.vitest.config.related = Array.from(new Set(related));
		}
		const related = this.vitest.config.related;
		if (!related) return specs;
		const forceRerunTriggers = this.vitest.config.forceRerunTriggers;
		const matcher = forceRerunTriggers.length ? pm(forceRerunTriggers) : void 0;
		if (matcher && related.some((file) => matcher(file))) return specs;
		// don't run anything if no related sources are found
		// if we are in watch mode, we want to process all tests
		if (!this.vitest.config.watch && !related.length) return [];
		const testGraphs = await Promise.all(specs.map(async (spec) => {
			const deps = await this.getTestDependencies(spec);
			return [spec, deps];
		}));
		const runningTests = [];
		for (const [specification, deps] of testGraphs)
 // if deps or the test itself were changed
		if (related.some((path) => path === specification.moduleId || deps.has(path))) runningTests.push(specification);
		return runningTests;
	}
	async getTestDependencies(spec, deps = /* @__PURE__ */ new Set()) {
		const addImports = async (project, filepath) => {
			if (deps.has(filepath)) return;
			deps.add(filepath);
			const mod = project.vite.moduleGraph.getModuleById(filepath);
			const transformed = mod?.ssrTransformResult || await project.vitenode.transformRequest(filepath);
			if (!transformed) return;
			const dependencies = [...transformed.deps || [], ...transformed.dynamicDeps || []];
			await Promise.all(dependencies.map(async (dep) => {
				const fsPath = dep.startsWith("/@fs/") ? dep.slice(isWindows ? 5 : 4) : join(project.config.root, dep);
				if (!fsPath.includes("node_modules") && !deps.has(fsPath) && existsSync(fsPath)) await addImports(project, fsPath);
			}));
		};
		await addImports(spec.project, spec.moduleId);
		deps.delete(spec.moduleId);
		return deps;
	}
}

class ReportedTaskImplementation {
	/**
	* Task instance.
	* @internal
	*/
	task;
	/**
	* The project associated with the test or suite.
	*/
	project;
	/**
	* Unique identifier.
	* This ID is deterministic and will be the same for the same test across multiple runs.
	* The ID is based on the project name, module url and test order.
	*/
	id;
	/**
	* Location in the module where the test or suite is defined.
	*/
	location;
	/** @internal */
	constructor(task, project) {
		this.task = task;
		this.project = project;
		this.id = task.id;
		this.location = task.location;
	}
	/**
	* Checks if the test did not fail the suite.
	* If the test is not finished yet or was skipped, it will return `true`.
	*/
	ok() {
		const result = this.task.result;
		return !result || result.state !== "fail";
	}
	/**
	* Custom metadata that was attached to the test during its execution.
	*/
	meta() {
		return this.task.meta;
	}
	/**
	* Creates a new reported task instance and stores it in the project's state for future use.
	* @internal
	*/
	static register(task, project) {
		const state = new this(task, project);
		storeTask(project, task, state);
		return state;
	}
}
class TestCase extends ReportedTaskImplementation {
	#fullName;
	type = "test";
	/**
	* Direct reference to the test module where the test or suite is defined.
	*/
	module;
	/**
	* Name of the test.
	*/
	name;
	/**
	* Options that the test was initiated with.
	*/
	options;
	/**
	* Parent suite. If the test was called directly inside the module, the parent will be the module itself.
	*/
	parent;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.name = task.name;
		this.module = getReportedTask(project, task.file);
		const suite = this.task.suite;
		if (suite) this.parent = getReportedTask(project, suite);
		else this.parent = this.module;
		this.options = buildOptions(task);
	}
	/**
	* Full name of the test including all parent suites separated with `>`.
	*/
	get fullName() {
		if (this.#fullName === void 0) if (this.parent.type !== "module") this.#fullName = `${this.parent.fullName} > ${this.name}`;
		else this.#fullName = this.name;
		return this.#fullName;
	}
	/**
	* Test results.
	* - **pending**: Test was collected, but didn't finish running yet.
	* - **passed**: Test passed successfully
	* - **failed**: Test failed to execute
	* - **skipped**: Test was skipped during collection or dynamically with `ctx.skip()`.
	*/
	result() {
		const result = this.task.result;
		const mode = result?.state || this.task.mode;
		if (!result && (mode === "skip" || mode === "todo")) return {
			state: "skipped",
			note: void 0,
			errors: void 0
		};
		if (!result || result.state === "run" || result.state === "queued") return {
			state: "pending",
			errors: void 0
		};
		const state = result.state === "fail" ? "failed" : result.state === "pass" ? "passed" : "skipped";
		if (state === "skipped") return {
			state,
			note: result.note,
			errors: void 0
		};
		if (state === "passed") return {
			state,
			errors: result.errors
		};
		return {
			state,
			errors: result.errors || []
		};
	}
	/**
	* Test annotations added via the `task.annotate` API during the test execution.
	*/
	annotations() {
		return [...this.task.annotations];
	}
	/**
	* Useful information about the test like duration, memory usage, etc.
	* Diagnostic is only available after the test has finished.
	*/
	diagnostic() {
		const result = this.task.result;
		// startTime should always be available if the test has properly finished
		if (!result || !result.startTime) return void 0;
		const duration = result.duration || 0;
		const slow = duration > this.project.globalConfig.slowTestThreshold;
		return {
			slow,
			heap: result.heap,
			duration,
			startTime: result.startTime,
			retryCount: result.retryCount ?? 0,
			repeatCount: result.repeatCount ?? 0,
			flaky: !!result.retryCount && result.state === "pass" && result.retryCount > 0
		};
	}
}
class TestCollection {
	#task;
	#project;
	constructor(task, project) {
		this.#task = task;
		this.#project = project;
	}
	/**
	* Returns the test or suite at a specific index.
	*/
	at(index) {
		if (index < 0) index = this.size + index;
		return getReportedTask(this.#project, this.#task.tasks[index]);
	}
	/**
	* The number of tests and suites in the collection.
	*/
	get size() {
		return this.#task.tasks.length;
	}
	/**
	* Returns the collection in array form for easier manipulation.
	*/
	array() {
		return Array.from(this);
	}
	/**
	* Filters all tests that are part of this collection and its children.
	*/
	*allTests(state) {
		for (const child of this) if (child.type === "suite") yield* child.children.allTests(state);
		else if (state) {
			const testState = child.result().state;
			if (state === testState) yield child;
		} else yield child;
	}
	/**
	* Filters only the tests that are part of this collection.
	*/
	*tests(state) {
		for (const child of this) {
			if (child.type !== "test") continue;
			if (state) {
				const testState = child.result().state;
				if (state === testState) yield child;
			} else yield child;
		}
	}
	/**
	* Filters only the suites that are part of this collection.
	*/
	*suites() {
		for (const child of this) if (child.type === "suite") yield child;
	}
	/**
	* Filters all suites that are part of this collection and its children.
	*/
	*allSuites() {
		for (const child of this) if (child.type === "suite") {
			yield child;
			yield* child.children.allSuites();
		}
	}
	*[Symbol.iterator]() {
		for (const task of this.#task.tasks) yield getReportedTask(this.#project, task);
	}
}
class SuiteImplementation extends ReportedTaskImplementation {
	/**
	* Collection of suites and tests that are part of this suite.
	*/
	children;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.children = new TestCollection(task, project);
	}
	/**
	* Errors that happened outside of the test run during collection, like syntax errors.
	*/
	errors() {
		return this.task.result?.errors || [];
	}
}
class TestSuite extends SuiteImplementation {
	#fullName;
	type = "suite";
	/**
	* Name of the test or the suite.
	*/
	name;
	/**
	* Direct reference to the test module where the test or suite is defined.
	*/
	module;
	/**
	* Parent suite. If suite was called directly inside the module, the parent will be the module itself.
	*/
	parent;
	/**
	* Options that suite was initiated with.
	*/
	options;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.name = task.name;
		this.module = getReportedTask(project, task.file);
		const suite = this.task.suite;
		if (suite) this.parent = getReportedTask(project, suite);
		else this.parent = this.module;
		this.options = buildOptions(task);
	}
	/**
	* Checks the running state of the suite.
	*/
	state() {
		return getSuiteState(this.task);
	}
	/**
	* Full name of the suite including all parent suites separated with `>`.
	*/
	get fullName() {
		if (this.#fullName === void 0) if (this.parent.type !== "module") this.#fullName = `${this.parent.fullName} > ${this.name}`;
		else this.#fullName = this.name;
		return this.#fullName;
	}
}
class TestModule extends SuiteImplementation {
	type = "module";
	/**
	* This is usually an absolute UNIX file path.
	* It can be a virtual ID if the file is not on the disk.
	* This value corresponds to the ID in the Vite's module graph.
	*/
	moduleId;
	/** @internal */
	constructor(task, project) {
		super(task, project);
		this.moduleId = task.filepath;
	}
	/**
	* Checks the running state of the test file.
	*/
	state() {
		const state = this.task.result?.state;
		if (state === "queued") return "queued";
		return getSuiteState(this.task);
	}
	/**
	* Useful information about the module like duration, memory usage, etc.
	* If the module was not executed yet, all diagnostic values will return `0`.
	*/
	diagnostic() {
		const setupDuration = this.task.setupDuration || 0;
		const collectDuration = this.task.collectDuration || 0;
		const prepareDuration = this.task.prepareDuration || 0;
		const environmentSetupDuration = this.task.environmentLoad || 0;
		const duration = this.task.result?.duration || 0;
		const heap = this.task.result?.heap;
		const importDurations = this.task.importDurations ?? {};
		return {
			environmentSetupDuration,
			prepareDuration,
			collectDuration,
			setupDuration,
			duration,
			heap,
			importDurations
		};
	}
}
function buildOptions(task) {
	return {
		each: task.each,
		fails: task.type === "test" && task.fails,
		concurrent: task.concurrent,
		shuffle: task.shuffle,
		retry: task.retry,
		repeats: task.repeats,
		mode: task.mode
	};
}
function storeTask(project, runnerTask, reportedTask) {
	project.vitest.state.reportedTasksMap.set(runnerTask, reportedTask);
}
function getReportedTask(project, runnerTask) {
	const reportedTask = project.vitest.state.getReportedEntity(runnerTask);
	if (!reportedTask) throw new Error(`Task instance was not found for ${runnerTask.type} "${runnerTask.name}"`);
	return reportedTask;
}
function getSuiteState(task) {
	const mode = task.mode;
	const state = task.result?.state;
	if (mode === "skip" || mode === "todo" || state === "skip" || state === "todo") return "skipped";
	if (state == null || state === "run" || state === "only") return "pending";
	if (state === "fail") return "failed";
	if (state === "pass") return "passed";
	throw new Error(`Unknown suite state: ${state}`);
}

function isAggregateError(err) {
	if (typeof AggregateError !== "undefined" && err instanceof AggregateError) return true;
	return err instanceof Error && "errors" in err;
}
class StateManager {
	filesMap = /* @__PURE__ */ new Map();
	pathsSet = /* @__PURE__ */ new Set();
	idMap = /* @__PURE__ */ new Map();
	taskFileMap = /* @__PURE__ */ new WeakMap();
	errorsSet = /* @__PURE__ */ new Set();
	processTimeoutCauses = /* @__PURE__ */ new Set();
	reportedTasksMap = /* @__PURE__ */ new WeakMap();
	blobs;
	catchError(err, type) {
		if (isAggregateError(err)) return err.errors.forEach((error) => this.catchError(error, type));
		if (err === Object(err)) err.type = type;
		else err = {
			type,
			message: err
		};
		const _err = err;
		if (_err && typeof _err === "object" && _err.code === "VITEST_PENDING") {
			const task = this.idMap.get(_err.taskId);
			if (task) {
				task.mode = "skip";
				task.result ??= { state: "skip" };
				task.result.state = "skip";
				task.result.note = _err.note;
			}
			return;
		}
		this.errorsSet.add(err);
	}
	clearErrors() {
		this.errorsSet.clear();
	}
	getUnhandledErrors() {
		return Array.from(this.errorsSet.values());
	}
	addProcessTimeoutCause(cause) {
		this.processTimeoutCauses.add(cause);
	}
	getProcessTimeoutCauses() {
		return Array.from(this.processTimeoutCauses.values());
	}
	getPaths() {
		return Array.from(this.pathsSet);
	}
	/**
	* Return files that were running or collected.
	*/
	getFiles(keys) {
		if (keys) return keys.map((key) => this.filesMap.get(key)).flat().filter((file) => file && !file.local);
		return Array.from(this.filesMap.values()).flat().filter((file) => !file.local).sort((f1, f2) => {
			// print typecheck files first
			if (f1.meta?.typecheck && f2.meta?.typecheck) return 0;
			if (f1.meta?.typecheck) return -1;
			return 1;
		});
	}
	getTestModules(keys) {
		return this.getFiles(keys).map((file) => this.getReportedEntity(file));
	}
	getFilepaths() {
		return Array.from(this.filesMap.keys());
	}
	getFailedFilepaths() {
		return this.getFiles().filter((i) => i.result?.state === "fail").map((i) => i.filepath);
	}
	collectPaths(paths = []) {
		paths.forEach((path) => {
			this.pathsSet.add(path);
		});
	}
	collectFiles(project, files = []) {
		files.forEach((file) => {
			const existing = this.filesMap.get(file.filepath) || [];
			const otherFiles = existing.filter((i) => i.projectName !== file.projectName || i.meta.typecheck !== file.meta.typecheck);
			const currentFile = existing.find((i) => i.projectName === file.projectName);
			// keep logs for the previous file because it should always be initiated before the collections phase
			// which means that all logs are collected during the collection and not inside tests
			if (currentFile) file.logs = currentFile.logs;
			otherFiles.push(file);
			this.filesMap.set(file.filepath, otherFiles);
			this.updateId(file, project);
		});
	}
	clearFiles(project, paths = []) {
		paths.forEach((path) => {
			const files = this.filesMap.get(path);
			const fileTask = createFileTask(path, project.config.root, project.config.name);
			fileTask.local = true;
			TestModule.register(fileTask, project);
			this.idMap.set(fileTask.id, fileTask);
			if (!files) {
				this.filesMap.set(path, [fileTask]);
				return;
			}
			const filtered = files.filter((file) => file.projectName !== project.config.name);
			// always keep a File task, so we can associate logs with it
			if (!filtered.length) this.filesMap.set(path, [fileTask]);
			else this.filesMap.set(path, [...filtered, fileTask]);
		});
	}
	updateId(task, project) {
		if (this.idMap.get(task.id) === task) return;
		if (task.type === "suite" && "filepath" in task) TestModule.register(task, project);
		else if (task.type === "suite") TestSuite.register(task, project);
		else TestCase.register(task, project);
		this.idMap.set(task.id, task);
		if (task.type === "suite") task.tasks.forEach((task) => {
			this.updateId(task, project);
		});
	}
	getReportedEntity(task) {
		return this.reportedTasksMap.get(task);
	}
	updateTasks(packs) {
		for (const [id, result, meta] of packs) {
			const task = this.idMap.get(id);
			if (task) {
				task.result = result;
				task.meta = meta;
				// skipped with new PendingError
				if (result?.state === "skip") task.mode = "skip";
			}
		}
	}
	updateUserLog(log) {
		const task = log.taskId && this.idMap.get(log.taskId);
		if (task) {
			if (!task.logs) task.logs = [];
			task.logs.push(log);
		}
	}
	getCountOfFailedTests() {
		return Array.from(this.idMap.values()).filter((t) => t.result?.state === "fail").length;
	}
	cancelFiles(files, project) {
		this.collectFiles(project, files.map((filepath) => createFileTask(filepath, project.config.root, project.config.name)));
	}
}

const types = {
    'application/andrew-inset': ['ez'],
    'application/appinstaller': ['appinstaller'],
    'application/applixware': ['aw'],
    'application/appx': ['appx'],
    'application/appxbundle': ['appxbundle'],
    'application/atom+xml': ['atom'],
    'application/atomcat+xml': ['atomcat'],
    'application/atomdeleted+xml': ['atomdeleted'],
    'application/atomsvc+xml': ['atomsvc'],
    'application/atsc-dwd+xml': ['dwd'],
    'application/atsc-held+xml': ['held'],
    'application/atsc-rsat+xml': ['rsat'],
    'application/automationml-aml+xml': ['aml'],
    'application/automationml-amlx+zip': ['amlx'],
    'application/bdoc': ['bdoc'],
    'application/calendar+xml': ['xcs'],
    'application/ccxml+xml': ['ccxml'],
    'application/cdfx+xml': ['cdfx'],
    'application/cdmi-capability': ['cdmia'],
    'application/cdmi-container': ['cdmic'],
    'application/cdmi-domain': ['cdmid'],
    'application/cdmi-object': ['cdmio'],
    'application/cdmi-queue': ['cdmiq'],
    'application/cpl+xml': ['cpl'],
    'application/cu-seeme': ['cu'],
    'application/cwl': ['cwl'],
    'application/dash+xml': ['mpd'],
    'application/dash-patch+xml': ['mpp'],
    'application/davmount+xml': ['davmount'],
    'application/dicom': ['dcm'],
    'application/docbook+xml': ['dbk'],
    'application/dssc+der': ['dssc'],
    'application/dssc+xml': ['xdssc'],
    'application/ecmascript': ['ecma'],
    'application/emma+xml': ['emma'],
    'application/emotionml+xml': ['emotionml'],
    'application/epub+zip': ['epub'],
    'application/exi': ['exi'],
    'application/express': ['exp'],
    'application/fdf': ['fdf'],
    'application/fdt+xml': ['fdt'],
    'application/font-tdpfr': ['pfr'],
    'application/geo+json': ['geojson'],
    'application/gml+xml': ['gml'],
    'application/gpx+xml': ['gpx'],
    'application/gxf': ['gxf'],
    'application/gzip': ['gz'],
    'application/hjson': ['hjson'],
    'application/hyperstudio': ['stk'],
    'application/inkml+xml': ['ink', 'inkml'],
    'application/ipfix': ['ipfix'],
    'application/its+xml': ['its'],
    'application/java-archive': ['jar', 'war', 'ear'],
    'application/java-serialized-object': ['ser'],
    'application/java-vm': ['class'],
    'application/javascript': ['*js'],
    'application/json': ['json', 'map'],
    'application/json5': ['json5'],
    'application/jsonml+json': ['jsonml'],
    'application/ld+json': ['jsonld'],
    'application/lgr+xml': ['lgr'],
    'application/lost+xml': ['lostxml'],
    'application/mac-binhex40': ['hqx'],
    'application/mac-compactpro': ['cpt'],
    'application/mads+xml': ['mads'],
    'application/manifest+json': ['webmanifest'],
    'application/marc': ['mrc'],
    'application/marcxml+xml': ['mrcx'],
    'application/mathematica': ['ma', 'nb', 'mb'],
    'application/mathml+xml': ['mathml'],
    'application/mbox': ['mbox'],
    'application/media-policy-dataset+xml': ['mpf'],
    'application/mediaservercontrol+xml': ['mscml'],
    'application/metalink+xml': ['metalink'],
    'application/metalink4+xml': ['meta4'],
    'application/mets+xml': ['mets'],
    'application/mmt-aei+xml': ['maei'],
    'application/mmt-usd+xml': ['musd'],
    'application/mods+xml': ['mods'],
    'application/mp21': ['m21', 'mp21'],
    'application/mp4': ['*mp4', '*mpg4', 'mp4s', 'm4p'],
    'application/msix': ['msix'],
    'application/msixbundle': ['msixbundle'],
    'application/msword': ['doc', 'dot'],
    'application/mxf': ['mxf'],
    'application/n-quads': ['nq'],
    'application/n-triples': ['nt'],
    'application/node': ['cjs'],
    'application/octet-stream': [
        'bin',
        'dms',
        'lrf',
        'mar',
        'so',
        'dist',
        'distz',
        'pkg',
        'bpk',
        'dump',
        'elc',
        'deploy',
        'exe',
        'dll',
        'deb',
        'dmg',
        'iso',
        'img',
        'msi',
        'msp',
        'msm',
        'buffer',
    ],
    'application/oda': ['oda'],
    'application/oebps-package+xml': ['opf'],
    'application/ogg': ['ogx'],
    'application/omdoc+xml': ['omdoc'],
    'application/onenote': [
        'onetoc',
        'onetoc2',
        'onetmp',
        'onepkg',
        'one',
        'onea',
    ],
    'application/oxps': ['oxps'],
    'application/p2p-overlay+xml': ['relo'],
    'application/patch-ops-error+xml': ['xer'],
    'application/pdf': ['pdf'],
    'application/pgp-encrypted': ['pgp'],
    'application/pgp-keys': ['asc'],
    'application/pgp-signature': ['sig', '*asc'],
    'application/pics-rules': ['prf'],
    'application/pkcs10': ['p10'],
    'application/pkcs7-mime': ['p7m', 'p7c'],
    'application/pkcs7-signature': ['p7s'],
    'application/pkcs8': ['p8'],
    'application/pkix-attr-cert': ['ac'],
    'application/pkix-cert': ['cer'],
    'application/pkix-crl': ['crl'],
    'application/pkix-pkipath': ['pkipath'],
    'application/pkixcmp': ['pki'],
    'application/pls+xml': ['pls'],
    'application/postscript': ['ai', 'eps', 'ps'],
    'application/provenance+xml': ['provx'],
    'application/pskc+xml': ['pskcxml'],
    'application/raml+yaml': ['raml'],
    'application/rdf+xml': ['rdf', 'owl'],
    'application/reginfo+xml': ['rif'],
    'application/relax-ng-compact-syntax': ['rnc'],
    'application/resource-lists+xml': ['rl'],
    'application/resource-lists-diff+xml': ['rld'],
    'application/rls-services+xml': ['rs'],
    'application/route-apd+xml': ['rapd'],
    'application/route-s-tsid+xml': ['sls'],
    'application/route-usd+xml': ['rusd'],
    'application/rpki-ghostbusters': ['gbr'],
    'application/rpki-manifest': ['mft'],
    'application/rpki-roa': ['roa'],
    'application/rsd+xml': ['rsd'],
    'application/rss+xml': ['rss'],
    'application/rtf': ['rtf'],
    'application/sbml+xml': ['sbml'],
    'application/scvp-cv-request': ['scq'],
    'application/scvp-cv-response': ['scs'],
    'application/scvp-vp-request': ['spq'],
    'application/scvp-vp-response': ['spp'],
    'application/sdp': ['sdp'],
    'application/senml+xml': ['senmlx'],
    'application/sensml+xml': ['sensmlx'],
    'application/set-payment-initiation': ['setpay'],
    'application/set-registration-initiation': ['setreg'],
    'application/shf+xml': ['shf'],
    'application/sieve': ['siv', 'sieve'],
    'application/smil+xml': ['smi', 'smil'],
    'application/sparql-query': ['rq'],
    'application/sparql-results+xml': ['srx'],
    'application/sql': ['sql'],
    'application/srgs': ['gram'],
    'application/srgs+xml': ['grxml'],
    'application/sru+xml': ['sru'],
    'application/ssdl+xml': ['ssdl'],
    'application/ssml+xml': ['ssml'],
    'application/swid+xml': ['swidtag'],
    'application/tei+xml': ['tei', 'teicorpus'],
    'application/thraud+xml': ['tfi'],
    'application/timestamped-data': ['tsd'],
    'application/toml': ['toml'],
    'application/trig': ['trig'],
    'application/ttml+xml': ['ttml'],
    'application/ubjson': ['ubj'],
    'application/urc-ressheet+xml': ['rsheet'],
    'application/urc-targetdesc+xml': ['td'],
    'application/voicexml+xml': ['vxml'],
    'application/wasm': ['wasm'],
    'application/watcherinfo+xml': ['wif'],
    'application/widget': ['wgt'],
    'application/winhlp': ['hlp'],
    'application/wsdl+xml': ['wsdl'],
    'application/wspolicy+xml': ['wspolicy'],
    'application/xaml+xml': ['xaml'],
    'application/xcap-att+xml': ['xav'],
    'application/xcap-caps+xml': ['xca'],
    'application/xcap-diff+xml': ['xdf'],
    'application/xcap-el+xml': ['xel'],
    'application/xcap-ns+xml': ['xns'],
    'application/xenc+xml': ['xenc'],
    'application/xfdf': ['xfdf'],
    'application/xhtml+xml': ['xhtml', 'xht'],
    'application/xliff+xml': ['xlf'],
    'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
    'application/xml-dtd': ['dtd'],
    'application/xop+xml': ['xop'],
    'application/xproc+xml': ['xpl'],
    'application/xslt+xml': ['*xsl', 'xslt'],
    'application/xspf+xml': ['xspf'],
    'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
    'application/yang': ['yang'],
    'application/yin+xml': ['yin'],
    'application/zip': ['zip'],
    'application/zip+dotlottie': ['lottie'],
    'audio/3gpp': ['*3gpp'],
    'audio/aac': ['adts', 'aac'],
    'audio/adpcm': ['adp'],
    'audio/amr': ['amr'],
    'audio/basic': ['au', 'snd'],
    'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
    'audio/mobile-xmf': ['mxmf'],
    'audio/mp3': ['*mp3'],
    'audio/mp4': ['m4a', 'mp4a', 'm4b'],
    'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
    'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
    'audio/s3m': ['s3m'],
    'audio/silk': ['sil'],
    'audio/wav': ['wav'],
    'audio/wave': ['*wav'],
    'audio/webm': ['weba'],
    'audio/xm': ['xm'],
    'font/collection': ['ttc'],
    'font/otf': ['otf'],
    'font/ttf': ['ttf'],
    'font/woff': ['woff'],
    'font/woff2': ['woff2'],
    'image/aces': ['exr'],
    'image/apng': ['apng'],
    'image/avci': ['avci'],
    'image/avcs': ['avcs'],
    'image/avif': ['avif'],
    'image/bmp': ['bmp', 'dib'],
    'image/cgm': ['cgm'],
    'image/dicom-rle': ['drle'],
    'image/dpx': ['dpx'],
    'image/emf': ['emf'],
    'image/fits': ['fits'],
    'image/g3fax': ['g3'],
    'image/gif': ['gif'],
    'image/heic': ['heic'],
    'image/heic-sequence': ['heics'],
    'image/heif': ['heif'],
    'image/heif-sequence': ['heifs'],
    'image/hej2k': ['hej2'],
    'image/ief': ['ief'],
    'image/jaii': ['jaii'],
    'image/jais': ['jais'],
    'image/jls': ['jls'],
    'image/jp2': ['jp2', 'jpg2'],
    'image/jpeg': ['jpg', 'jpeg', 'jpe'],
    'image/jph': ['jph'],
    'image/jphc': ['jhc'],
    'image/jpm': ['jpm', 'jpgm'],
    'image/jpx': ['jpx', 'jpf'],
    'image/jxl': ['jxl'],
    'image/jxr': ['jxr'],
    'image/jxra': ['jxra'],
    'image/jxrs': ['jxrs'],
    'image/jxs': ['jxs'],
    'image/jxsc': ['jxsc'],
    'image/jxsi': ['jxsi'],
    'image/jxss': ['jxss'],
    'image/ktx': ['ktx'],
    'image/ktx2': ['ktx2'],
    'image/pjpeg': ['jfif'],
    'image/png': ['png'],
    'image/sgi': ['sgi'],
    'image/svg+xml': ['svg', 'svgz'],
    'image/t38': ['t38'],
    'image/tiff': ['tif', 'tiff'],
    'image/tiff-fx': ['tfx'],
    'image/webp': ['webp'],
    'image/wmf': ['wmf'],
    'message/disposition-notification': ['disposition-notification'],
    'message/global': ['u8msg'],
    'message/global-delivery-status': ['u8dsn'],
    'message/global-disposition-notification': ['u8mdn'],
    'message/global-headers': ['u8hdr'],
    'message/rfc822': ['eml', 'mime', 'mht', 'mhtml'],
    'model/3mf': ['3mf'],
    'model/gltf+json': ['gltf'],
    'model/gltf-binary': ['glb'],
    'model/iges': ['igs', 'iges'],
    'model/jt': ['jt'],
    'model/mesh': ['msh', 'mesh', 'silo'],
    'model/mtl': ['mtl'],
    'model/obj': ['obj'],
    'model/prc': ['prc'],
    'model/step': ['step', 'stp', 'stpnc', 'p21', '210'],
    'model/step+xml': ['stpx'],
    'model/step+zip': ['stpz'],
    'model/step-xml+zip': ['stpxz'],
    'model/stl': ['stl'],
    'model/u3d': ['u3d'],
    'model/vrml': ['wrl', 'vrml'],
    'model/x3d+binary': ['*x3db', 'x3dbz'],
    'model/x3d+fastinfoset': ['x3db'],
    'model/x3d+vrml': ['*x3dv', 'x3dvz'],
    'model/x3d+xml': ['x3d', 'x3dz'],
    'model/x3d-vrml': ['x3dv'],
    'text/cache-manifest': ['appcache', 'manifest'],
    'text/calendar': ['ics', 'ifb'],
    'text/coffeescript': ['coffee', 'litcoffee'],
    'text/css': ['css'],
    'text/csv': ['csv'],
    'text/html': ['html', 'htm', 'shtml'],
    'text/jade': ['jade'],
    'text/javascript': ['js', 'mjs'],
    'text/jsx': ['jsx'],
    'text/less': ['less'],
    'text/markdown': ['md', 'markdown'],
    'text/mathml': ['mml'],
    'text/mdx': ['mdx'],
    'text/n3': ['n3'],
    'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
    'text/richtext': ['rtx'],
    'text/rtf': ['*rtf'],
    'text/sgml': ['sgml', 'sgm'],
    'text/shex': ['shex'],
    'text/slim': ['slim', 'slm'],
    'text/spdx': ['spdx'],
    'text/stylus': ['stylus', 'styl'],
    'text/tab-separated-values': ['tsv'],
    'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
    'text/turtle': ['ttl'],
    'text/uri-list': ['uri', 'uris', 'urls'],
    'text/vcard': ['vcard'],
    'text/vtt': ['vtt'],
    'text/wgsl': ['wgsl'],
    'text/xml': ['*xml'],
    'text/yaml': ['yaml', 'yml'],
    'video/3gpp': ['3gp', '3gpp'],
    'video/3gpp2': ['3g2'],
    'video/h261': ['h261'],
    'video/h263': ['h263'],
    'video/h264': ['h264'],
    'video/iso.segment': ['m4s'],
    'video/jpeg': ['jpgv'],
    'video/jpm': ['*jpm', '*jpgm'],
    'video/mj2': ['mj2', 'mjp2'],
    'video/mp2t': ['ts', 'm2t', 'm2ts', 'mts'],
    'video/mp4': ['mp4', 'mp4v', 'mpg4'],
    'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
    'video/ogg': ['ogv'],
    'video/quicktime': ['qt', 'mov'],
    'video/webm': ['webm'],
};
Object.freeze(types);

var __classPrivateFieldGet = ({} && {}.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mime_extensionToType, _Mime_typeToExtension, _Mime_typeToExtensions;
class Mime {
    constructor(...args) {
        _Mime_extensionToType.set(this, new Map());
        _Mime_typeToExtension.set(this, new Map());
        _Mime_typeToExtensions.set(this, new Map());
        for (const arg of args) {
            this.define(arg);
        }
    }
    define(typeMap, force = false) {
        for (let [type, extensions] of Object.entries(typeMap)) {
            type = type.toLowerCase();
            extensions = extensions.map((ext) => ext.toLowerCase());
            if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
                __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, new Set());
            }
            const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
            let first = true;
            for (let extension of extensions) {
                const starred = extension.startsWith('*');
                extension = starred ? extension.slice(1) : extension;
                allExtensions?.add(extension);
                if (first) {
                    __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
                }
                first = false;
                if (starred)
                    continue;
                const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
                if (currentType && currentType != type && !force) {
                    throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
                }
                __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
            }
        }
        return this;
    }
    getType(path) {
        if (typeof path !== 'string')
            return null;
        const last = path.replace(/^.*[/\\]/s, '').toLowerCase();
        const ext = last.replace(/^.*\./s, '').toLowerCase();
        const hasPath = last.length < path.length;
        const hasDot = ext.length < last.length - 1;
        if (!hasDot && hasPath)
            return null;
        return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
        if (typeof type !== 'string')
            return null;
        type = type?.split?.(';')[0];
        return ((type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null);
    }
    getAllExtensions(type) {
        if (typeof type !== 'string')
            return null;
        return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
        this.define = () => {
            throw new Error('define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances');
        };
        Object.freeze(this);
        for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
            Object.freeze(extensions);
        }
        return this;
    }
    _getTestState() {
        return {
            types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
            extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f"),
        };
    }
}
_Mime_extensionToType = new WeakMap(), _Mime_typeToExtension = new WeakMap(), _Mime_typeToExtensions = new WeakMap();

var mime = new Mime(types)._freeze();

class TestRun {
	constructor(vitest) {
		this.vitest = vitest;
	}
	async start(specifications) {
		const filepaths = specifications.map((spec) => spec.moduleId);
		this.vitest.state.collectPaths(filepaths);
		await this.vitest.report("onPathsCollected", Array.from(new Set(filepaths)));
		await this.vitest.report("onSpecsCollected", specifications.map((spec) => spec.toJSON()));
		await this.vitest.report("onTestRunStart", [...specifications]);
	}
	async enqueued(project, file) {
		this.vitest.state.collectFiles(project, [file]);
		const testModule = this.vitest.state.getReportedEntity(file);
		await this.vitest.report("onTestModuleQueued", testModule);
	}
	async collected(project, files) {
		this.vitest.state.collectFiles(project, files);
		await Promise.all([this.vitest.report("onCollected", files), ...files.map((file) => {
			const testModule = this.vitest.state.getReportedEntity(file);
			return this.vitest.report("onTestModuleCollected", testModule);
		})]);
	}
	async log(log) {
		this.vitest.state.updateUserLog(log);
		await this.vitest.report("onUserConsoleLog", log);
	}
	async annotate(testId, annotation) {
		const task = this.vitest.state.idMap.get(testId);
		const entity = task && this.vitest.state.getReportedEntity(task);
		assert$1(task && entity, `Entity must be found for task ${task?.name || testId}`);
		assert$1(entity.type === "test", `Annotation can only be added to a test, instead got ${entity.type}`);
		await this.resolveTestAttachment(entity, annotation);
		entity.task.annotations.push(annotation);
		await this.vitest.report("onTestCaseAnnotate", entity, annotation);
		return annotation;
	}
	async updated(update, events) {
		this.vitest.state.updateTasks(update);
		for (const [id, event, data] of events) await this.reportEvent(id, event, data).catch((error) => {
			this.vitest.state.catchError(serializeError(error), "Unhandled Reporter Error");
		});
		// TODO: what is the order or reports here?
		// "onTaskUpdate" in parallel with others or before all or after all?
		// TODO: error handling - what happens if custom reporter throws an error?
		await this.vitest.report("onTaskUpdate", update, events);
	}
	async end(specifications, errors, coverage) {
		// specification won't have the File task if they were filtered by the --shard command
		const modules = specifications.map((spec) => spec.testModule).filter((s) => s != null);
		const files = modules.map((m) => m.task);
		const state = this.vitest.isCancelling ? "interrupted" : this.hasFailed(modules) ? "failed" : "passed";
		if (state !== "passed") process.exitCode = 1;
		try {
			await Promise.all([this.vitest.report("onTestRunEnd", modules, [...errors], state), this.vitest.report("onFinished", files, errors, coverage)]);
		} finally {
			if (coverage) await this.vitest.report("onCoverage", coverage);
		}
	}
	hasFailed(modules) {
		if (!modules.length) return !this.vitest.config.passWithNoTests;
		return modules.some((m) => !m.ok());
	}
	async reportEvent(id, event, data) {
		const task = this.vitest.state.idMap.get(id);
		const entity = task && this.vitest.state.getReportedEntity(task);
		assert$1(task && entity, `Entity must be found for task ${task?.name || id}`);
		if (event === "suite-prepare" && entity.type === "suite") return await this.vitest.report("onTestSuiteReady", entity);
		if (event === "suite-prepare" && entity.type === "module") return await this.vitest.report("onTestModuleStart", entity);
		if (event === "suite-finished") {
			assert$1(entity.type === "suite" || entity.type === "module", "Entity type must be suite or module");
			if (entity.state() === "skipped")
 // everything inside suite or a module is skipped,
			// so we won't get any children events
			// we need to report everything manually
			await this.reportChildren(entity.children);
			if (entity.type === "module") await this.vitest.report("onTestModuleEnd", entity);
			else await this.vitest.report("onTestSuiteResult", entity);
			return;
		}
		if (event === "test-prepare" && entity.type === "test") return await this.vitest.report("onTestCaseReady", entity);
		if (event === "test-finished" && entity.type === "test") return await this.vitest.report("onTestCaseResult", entity);
		if (event.startsWith("before-hook") || event.startsWith("after-hook")) {
			const isBefore = event.startsWith("before-hook");
			const hook = entity.type === "test" ? {
				name: isBefore ? "beforeEach" : "afterEach",
				entity
			} : {
				name: isBefore ? "beforeAll" : "afterAll",
				entity
			};
			if (event.endsWith("-start")) await this.vitest.report("onHookStart", hook);
			else await this.vitest.report("onHookEnd", hook);
			// this can only happen in --merge-reports, and annotation is already resolved
			if (event === "test-annotation") {
				const annotation = data?.annotation;
				assert$1(annotation && entity.type === "test");
				await this.vitest.report("onTestCaseAnnotate", entity, annotation);
			}
		}
	}
	async resolveTestAttachment(test, annotation) {
		const project = test.project;
		const attachment = annotation.attachment;
		if (!attachment) return attachment;
		const path = attachment.path;
		if (path && !path.startsWith("http://") && !path.startsWith("https://")) {
			const currentPath = resolve(project.config.root, path);
			const hash = createHash("sha1").update(currentPath).digest("hex");
			const newPath = resolve(project.config.attachmentsDir, `${sanitizeFilePath(annotation.message)}-${hash}${extname(currentPath)}`);
			await mkdir(dirname(newPath), { recursive: true });
			await copyFile(currentPath, newPath);
			attachment.path = newPath;
			const contentType = attachment.contentType ?? mime.getType(basename(currentPath));
			attachment.contentType = contentType || void 0;
		}
		return attachment;
	}
	async reportChildren(children) {
		for (const child of children) if (child.type === "test") {
			await this.vitest.report("onTestCaseReady", child);
			await this.vitest.report("onTestCaseResult", child);
		} else {
			await this.vitest.report("onTestSuiteReady", child);
			await this.reportChildren(child.children);
			await this.vitest.report("onTestSuiteResult", child);
		}
	}
}
function sanitizeFilePath(s) {
	// eslint-disable-next-line no-control-regex
	return s.replace(/[\x00-\x2C\x2E\x2F\x3A-\x40\x5B-\x60\x7B-\x7F]+/g, "-");
}

class VitestWatcher {
	/**
	* Modules that will be invalidated on the next run.
	*/
	invalidates = /* @__PURE__ */ new Set();
	/**
	* Test files that have changed and need to be rerun.
	*/
	changedTests = /* @__PURE__ */ new Set();
	_onRerun = [];
	constructor(vitest) {
		this.vitest = vitest;
	}
	/**
	* Register a handler that will be called when test files need to be rerun.
	* The callback can receive several files in case the changed file is imported by several test files.
	* Several invocations of this method will add multiple handlers.
	* @internal
	*/
	onWatcherRerun(cb) {
		this._onRerun.push(cb);
		return this;
	}
	unregisterWatcher = noop;
	registerWatcher() {
		const watcher = this.vitest.vite.watcher;
		if (this.vitest.config.forceRerunTriggers.length) watcher.add(this.vitest.config.forceRerunTriggers);
		watcher.on("change", this.onChange);
		watcher.on("unlink", this.onUnlink);
		watcher.on("add", this.onAdd);
		this.unregisterWatcher = () => {
			watcher.off("change", this.onChange);
			watcher.off("unlink", this.onUnlink);
			watcher.off("add", this.onAdd);
			this.unregisterWatcher = noop;
		};
		return this;
	}
	scheduleRerun(file) {
		this._onRerun.forEach((cb) => cb(file));
	}
	getTestFilesFromWatcherTrigger(id) {
		if (!this.vitest.config.watchTriggerPatterns) return false;
		let triggered = false;
		this.vitest.config.watchTriggerPatterns.forEach((definition) => {
			const exec = definition.pattern.exec(id);
			if (exec) {
				const files = definition.testsToRun(id, exec);
				if (Array.isArray(files)) {
					triggered = true;
					files.forEach((file) => this.changedTests.add(resolve(this.vitest.config.root, file)));
				} else if (typeof files === "string") {
					triggered = true;
					this.changedTests.add(resolve(this.vitest.config.root, files));
				}
			}
		});
		return triggered;
	}
	onChange = (id) => {
		id = slash(id);
		this.vitest.logger.clearHighlightCache(id);
		this.vitest.invalidateFile(id);
		const testFiles = this.getTestFilesFromWatcherTrigger(id);
		if (testFiles) this.scheduleRerun(id);
		else {
			const needsRerun = this.handleFileChanged(id);
			if (needsRerun) this.scheduleRerun(id);
		}
	};
	onUnlink = (id) => {
		id = slash(id);
		this.vitest.logger.clearHighlightCache(id);
		this.invalidates.add(id);
		if (this.vitest.state.filesMap.has(id)) {
			this.vitest.projects.forEach((project) => project._removeCachedTestFile(id));
			this.vitest.state.filesMap.delete(id);
			this.vitest.cache.results.removeFromCache(id);
			this.vitest.cache.stats.removeStats(id);
			this.changedTests.delete(id);
			this.vitest.report("onTestRemoved", id);
		}
	};
	onAdd = (id) => {
		id = slash(id);
		this.vitest.invalidateFile(id);
		const testFiles = this.getTestFilesFromWatcherTrigger(id);
		if (testFiles) {
			this.scheduleRerun(id);
			return;
		}
		let fileContent;
		const matchingProjects = [];
		this.vitest.projects.forEach((project) => {
			if (project.matchesTestGlob(id, () => fileContent ??= readFileSync(id, "utf-8"))) matchingProjects.push(project);
		});
		if (matchingProjects.length > 0) {
			this.changedTests.add(id);
			this.scheduleRerun(id);
		} else {
			// it's possible that file was already there but watcher triggered "add" event instead
			const needsRerun = this.handleFileChanged(id);
			if (needsRerun) this.scheduleRerun(id);
		}
	};
	handleSetupFile(filepath) {
		let isSetupFile = false;
		this.vitest.projects.forEach((project) => {
			if (!project.config.setupFiles.includes(filepath)) return;
			this.vitest.state.filesMap.forEach((files) => {
				files.forEach((file) => {
					if (file.projectName === project.name) {
						isSetupFile = true;
						this.changedTests.add(file.filepath);
					}
				});
			});
		});
		return isSetupFile;
	}
	/**
	* @returns A value indicating whether rerun is needed (changedTests was mutated)
	*/
	handleFileChanged(filepath) {
		if (this.changedTests.has(filepath) || this.invalidates.has(filepath)) return false;
		if (pm.isMatch(filepath, this.vitest.config.forceRerunTriggers)) {
			this.vitest.state.getFilepaths().forEach((file) => this.changedTests.add(file));
			return true;
		}
		if (this.handleSetupFile(filepath)) return true;
		const projects = this.vitest.projects.filter((project) => {
			const moduleGraph = project.browser?.vite.moduleGraph || project.vite.moduleGraph;
			return moduleGraph.getModulesByFile(filepath)?.size;
		});
		if (!projects.length) {
			// if there are no modules it's possible that server was restarted
			// we don't have information about importers anymore, so let's check if the file is a test file at least
			if (this.vitest.state.filesMap.has(filepath) || this.vitest.projects.some((project) => project._isCachedTestFile(filepath))) {
				this.changedTests.add(filepath);
				return true;
			}
			return false;
		}
		const files = [];
		for (const project of projects) {
			const mods = project.browser?.vite.moduleGraph.getModulesByFile(filepath) || project.vite.moduleGraph.getModulesByFile(filepath);
			if (!mods || !mods.size) continue;
			this.invalidates.add(filepath);
			// one of test files that we already run, or one of test files that we can run
			if (this.vitest.state.filesMap.has(filepath) || project._isCachedTestFile(filepath)) {
				this.changedTests.add(filepath);
				files.push(filepath);
				continue;
			}
			let rerun = false;
			for (const mod of mods) mod.importers.forEach((i) => {
				if (!i.file) return;
				const needsRerun = this.handleFileChanged(i.file);
				if (needsRerun) rerun = true;
			});
			if (rerun) files.push(filepath);
		}
		return !!files.length;
	}
}

const WATCHER_DEBOUNCE = 100;
class Vitest {
	/**
	* Current Vitest version.
	* @example '2.0.0'
	*/
	version = version$1;
	static version = version$1;
	/**
	* The logger instance used to log messages. It's recommended to use this logger instead of `console`.
	* It's possible to override stdout and stderr streams when initiating Vitest.
	* @example
	* new Vitest('test', {
	*   stdout: new Writable(),
	* })
	*/
	logger;
	/**
	* The package installer instance used to install Vitest packages.
	* @example
	* await vitest.packageInstaller.ensureInstalled('@vitest/browser', process.cwd())
	*/
	packageInstaller;
	/**
	* A path to the built Vitest directory. This is usually a folder in `node_modules`.
	*/
	distPath = distDir;
	/**
	* A list of projects that are currently running.
	* If projects were filtered with `--project` flag, they won't appear here.
	*/
	projects = [];
	/** @internal */ configOverride = {};
	/** @internal */ coverageProvider;
	/** @internal */ filenamePattern;
	/** @internal */ runningPromise;
	/** @internal */ closingPromise;
	/** @internal */ isCancelling = false;
	/** @internal */ coreWorkspaceProject;
	/**
	* @internal
	* @deprecated
	*/
	resolvedProjects = [];
	/** @internal */ _browserLastPort = defaultBrowserPort;
	/** @internal */ _browserSessions = new BrowserSessions();
	/** @internal */ _cliOptions = {};
	/** @internal */ reporters = [];
	/** @internal */ vitenode = void 0;
	/** @internal */ runner = void 0;
	/** @internal */ _testRun = void 0;
	isFirstRun = true;
	restartsCount = 0;
	specifications;
	watcher;
	pool;
	_config;
	_vite;
	_state;
	_cache;
	_snapshot;
	_workspaceConfigPath;
	constructor(mode, cliOptions, options = {}) {
		this.mode = mode;
		this._cliOptions = cliOptions;
		this.logger = new Logger(this, options.stdout, options.stderr);
		this.packageInstaller = options.packageInstaller || new VitestPackageInstaller();
		this.specifications = new VitestSpecifications(this);
		this.watcher = new VitestWatcher(this).onWatcherRerun((file) => this.scheduleRerun([file]));
	}
	_onRestartListeners = [];
	_onClose = [];
	_onSetServer = [];
	_onCancelListeners = [];
	_onUserTestsRerun = [];
	_onFilterWatchedSpecification = [];
	/** @deprecated will be removed in 4.0, use `onFilterWatchedSpecification` instead */
	get invalidates() {
		return this.watcher.invalidates;
	}
	/** @deprecated will be removed in 4.0, use `onFilterWatchedSpecification` instead */
	get changedTests() {
		return this.watcher.changedTests;
	}
	/**
	* The global config.
	*/
	get config() {
		assert(this._config, "config");
		return this._config;
	}
	/** @deprecated use `vitest.vite` instead */
	get server() {
		return this._vite;
	}
	/**
	* Global Vite's dev server instance.
	*/
	get vite() {
		assert(this._vite, "vite", "server");
		return this._vite;
	}
	/**
	* The global test state manager.
	* @experimental The State API is experimental and not subject to semver.
	*/
	get state() {
		assert(this._state, "state");
		return this._state;
	}
	/**
	* The global snapshot manager. You can access the current state on `snapshot.summary`.
	*/
	get snapshot() {
		assert(this._snapshot, "snapshot", "snapshot manager");
		return this._snapshot;
	}
	/**
	* Test results and test file stats cache. Primarily used by the sequencer to sort tests.
	*/
	get cache() {
		assert(this._cache, "cache");
		return this._cache;
	}
	/** @deprecated internal */
	setServer(options, server) {
		return this._setServer(options, server);
	}
	/** @internal */
	async _setServer(options, server) {
		this.watcher.unregisterWatcher();
		clearTimeout(this._rerunTimer);
		this.restartsCount += 1;
		this._browserLastPort = defaultBrowserPort;
		this.pool?.close?.();
		this.pool = void 0;
		this.closingPromise = void 0;
		this.projects = [];
		this.resolvedProjects = [];
		this._workspaceConfigPath = void 0;
		this.coverageProvider = void 0;
		this.runningPromise = void 0;
		this.coreWorkspaceProject = void 0;
		this.specifications.clearCache();
		this._onUserTestsRerun = [];
		this._vite = server;
		const resolved = resolveConfig(this, options, server.config);
		this._config = resolved;
		this._state = new StateManager();
		this._cache = new VitestCache(this.version);
		this._snapshot = new SnapshotManager({ ...resolved.snapshotOptions });
		this._testRun = new TestRun(this);
		if (this.config.watch) this.watcher.registerWatcher();
		this.vitenode = new ViteNodeServer(server, this.config.server);
		const node = this.vitenode;
		this.runner = new ViteNodeRunner({
			root: server.config.root,
			base: server.config.base,
			fetchModule(id) {
				return node.fetchModule(id);
			},
			resolveId(id, importer) {
				return node.resolveId(id, importer);
			}
		});
		if (this.config.watch) {
			// hijack server restart
			const serverRestart = server.restart;
			server.restart = async (...args) => {
				await Promise.all(this._onRestartListeners.map((fn) => fn()));
				this.report("onServerRestart");
				await this.close();
				await serverRestart(...args);
			};
			// since we set `server.hmr: false`, Vite does not auto restart itself
			server.watcher.on("change", async (file) => {
				file = normalize(file);
				const isConfig = file === server.config.configFile || this.projects.some((p) => p.vite.config.configFile === file) || file === this._workspaceConfigPath;
				if (isConfig) {
					await Promise.all(this._onRestartListeners.map((fn) => fn("config")));
					this.report("onServerRestart", "config");
					await this.close();
					await serverRestart();
				}
			});
		}
		this.cache.results.setConfig(resolved.root, resolved.cache);
		try {
			await this.cache.results.readFromCache();
		} catch {}
		const projects = await this.resolveProjects(this._cliOptions);
		this.resolvedProjects = projects;
		this.projects = projects;
		await Promise.all(projects.flatMap((project) => {
			const hooks = project.vite.config.getSortedPluginHooks("configureVitest");
			return hooks.map((hook) => hook({
				project,
				vitest: this,
				injectTestProjects: this.injectTestProject
			}));
		}));
		if (this._cliOptions.browser?.enabled) {
			const browserProjects = this.projects.filter((p) => p.config.browser.enabled);
			if (!browserProjects.length) throw new Error(`Vitest received --browser flag, but no project had a browser configuration.`);
		}
		if (!this.projects.length) {
			const filter = toArray(resolved.project).join("\", \"");
			if (filter) throw new Error(`No projects matched the filter "${filter}".`);
			else throw new Error(`Vitest wasn't able to resolve any project.`);
		}
		if (!this.coreWorkspaceProject) this.coreWorkspaceProject = TestProject._createBasicProject(this);
		if (this.config.testNamePattern) this.configOverride.testNamePattern = this.config.testNamePattern;
		this.reporters = resolved.mode === "benchmark" ? await createBenchmarkReporters(toArray(resolved.benchmark?.reporters), this.runner) : await createReporters(resolved.reporters, this);
		await Promise.all(this._onSetServer.map((fn) => fn()));
	}
	/**
	* Inject new test projects into the workspace.
	* @param config Glob, config path or a custom config options.
	* @returns An array of new test projects. Can be empty if the name was filtered out.
	*/
	injectTestProject = async (config) => {
		const currentNames = new Set(this.projects.map((p) => p.name));
		const projects = await resolveProjects(this, this._cliOptions, void 0, Array.isArray(config) ? config : [config], currentNames);
		this.projects.push(...projects);
		return projects;
	};
	/**
	* Provide a value to the test context. This value will be available to all tests with `inject`.
	*/
	provide = (key, value) => {
		this.getRootProject().provide(key, value);
	};
	/**
	* Get global provided context.
	*/
	getProvidedContext() {
		return this.getRootProject().getProvidedContext();
	}
	/** @internal */
	_ensureRootProject() {
		if (this.coreWorkspaceProject) return this.coreWorkspaceProject;
		this.coreWorkspaceProject = TestProject._createBasicProject(this);
		return this.coreWorkspaceProject;
	}
	/** @deprecated use `getRootProject` instead */
	getCoreWorkspaceProject() {
		return this.getRootProject();
	}
	/**
	* Return project that has the root (or "global") config.
	*/
	getRootProject() {
		if (!this.coreWorkspaceProject) throw new Error(`Root project is not initialized. This means that the Vite server was not established yet and the the workspace config is not resolved.`);
		return this.coreWorkspaceProject;
	}
	/**
	* @deprecated use Reported Task API instead
	*/
	getProjectByTaskId(taskId) {
		const task = this.state.idMap.get(taskId);
		const projectName = task.projectName || task?.file?.projectName || "";
		return this.getProjectByName(projectName);
	}
	getProjectByName(name) {
		const project = this.projects.find((p) => p.name === name) || this.coreWorkspaceProject || this.projects[0];
		if (!project) throw new Error(`Project "${name}" was not found.`);
		return project;
	}
	/**
	* Import a file using Vite module runner. The file will be transformed by Vite and executed in a separate context.
	* @param moduleId The ID of the module in Vite module graph
	*/
	import(moduleId) {
		return this.runner.executeId(moduleId);
	}
	async resolveWorkspaceConfigPath() {
		if (typeof this.config.workspace === "string") return this.config.workspace;
		const configDir = this.vite.config.configFile ? dirname(this.vite.config.configFile) : this.config.root;
		const rootFiles = await promises.readdir(configDir);
		const workspaceConfigName = workspacesFiles.find((configFile) => {
			return rootFiles.includes(configFile);
		});
		if (!workspaceConfigName) return void 0;
		return join(configDir, workspaceConfigName);
	}
	async resolveProjects(cliOptions) {
		const names = /* @__PURE__ */ new Set();
		if (this.config.projects) {
			if (typeof this.config.workspace !== "undefined") this.logger.warn("Both `test.projects` and `test.workspace` are defined. Ignoring the `test.workspace` option.");
			return resolveProjects(this, cliOptions, void 0, this.config.projects, names);
		}
		if (Array.isArray(this.config.workspace)) {
			this.logger.deprecate("The `test.workspace` option is deprecated and will be removed in the next major. To hide this warning, rename `test.workspace` option to `test.projects`.");
			return resolveProjects(this, cliOptions, void 0, this.config.workspace, names);
		}
		const workspaceConfigPath = await this.resolveWorkspaceConfigPath();
		this._workspaceConfigPath = workspaceConfigPath;
		// user doesn't have a workspace config, return default project
		if (!workspaceConfigPath) {
			// user can filter projects with --project flag, `getDefaultTestProject`
			// returns the project only if it matches the filter
			const project = getDefaultTestProject(this);
			if (!project) return [];
			return resolveBrowserProjects(this, new Set([project.name]), [project]);
		}
		const configFile = this.vite.config.configFile ? resolve(this.vite.config.root, this.vite.config.configFile) : "the root config file";
		this.logger.deprecate(`The workspace file is deprecated and will be removed in the next major. Please, use the \`test.projects\` field in ${configFile} instead.`);
		const workspaceModule = await this.import(workspaceConfigPath);
		if (!workspaceModule.default || !Array.isArray(workspaceModule.default)) throw new TypeError(`Workspace config file "${workspaceConfigPath}" must export a default array of project paths.`);
		return resolveProjects(this, cliOptions, workspaceConfigPath, workspaceModule.default, names);
	}
	/**
	* Glob test files in every project and create a TestSpecification for each file and pool.
	* @param filters String filters to match the test files.
	*/
	async globTestSpecifications(filters = []) {
		return this.specifications.globTestSpecifications(filters);
	}
	async initCoverageProvider() {
		if (this.coverageProvider !== void 0) return;
		this.coverageProvider = await getCoverageProvider(this.config.coverage, this.runner);
		if (this.coverageProvider) {
			await this.coverageProvider.initialize(this);
			this.config.coverage = this.coverageProvider.resolveOptions();
		}
		return this.coverageProvider;
	}
	/**
	* Merge reports from multiple runs located in the specified directory (value from `--merge-reports` if not specified).
	*/
	async mergeReports(directory) {
		if (this.reporters.some((r) => r instanceof BlobReporter)) throw new Error("Cannot merge reports when `--reporter=blob` is used. Remove blob reporter from the config first.");
		const { files, errors, coverages, executionTimes } = await readBlobs(this.version, directory || this.config.mergeReports, this.projects);
		this.state.blobs = {
			files,
			errors,
			coverages,
			executionTimes
		};
		await this.report("onInit", this);
		await this.report("onPathsCollected", files.flatMap((f) => f.filepath));
		const specifications = [];
		for (const file of files) {
			const project = this.getProjectByName(file.projectName || "");
			const specification = project.createSpecification(file.filepath, void 0, file.pool);
			specifications.push(specification);
		}
		await this.report("onSpecsCollected", specifications.map((spec) => spec.toJSON()));
		await this._testRun.start(specifications).catch(noop);
		for (const file of files) await this._reportFileTask(file);
		this._checkUnhandledErrors(errors);
		await this._testRun.end(specifications, errors).catch(noop);
		await this.initCoverageProvider();
		await this.coverageProvider?.mergeReports?.(coverages);
		return {
			testModules: this.state.getTestModules(),
			unhandledErrors: this.state.getUnhandledErrors()
		};
	}
	/** @internal */
	async _reportFileTask(file) {
		const project = this.getProjectByName(file.projectName || "");
		await this._testRun.enqueued(project, file).catch(noop);
		await this._testRun.collected(project, [file]).catch(noop);
		const logs = [];
		const { packs, events } = convertTasksToEvents(file, (task) => {
			if (task.logs) logs.push(...task.logs);
		});
		logs.sort((log1, log2) => log1.time - log2.time);
		for (const log of logs) await this._testRun.log(log).catch(noop);
		await this._testRun.updated(packs, events).catch(noop);
	}
	async collect(filters) {
		const files = await this.specifications.getRelevantTestSpecifications(filters);
		// if run with --changed, don't exit if no tests are found
		if (!files.length) return {
			testModules: [],
			unhandledErrors: []
		};
		return this.collectTests(files);
	}
	/** @deprecated use `getRelevantTestSpecifications` instead */
	listFiles(filters) {
		return this.getRelevantTestSpecifications(filters);
	}
	/**
	* Returns the list of test files that match the config and filters.
	* @param filters String filters to match the test files
	*/
	getRelevantTestSpecifications(filters) {
		return this.specifications.getRelevantTestSpecifications(filters);
	}
	/**
	* Initialize reporters, the coverage provider, and run tests.
	* This method can throw an error:
	*   - `FilesNotFoundError` if no tests are found
	*   - `GitNotFoundError` if `--related` flag is used, but git repository is not initialized
	*   - `Error` from the user reporters
	* @param filters String filters to match the test files
	*/
	async start(filters) {
		try {
			await this.initCoverageProvider();
			await this.coverageProvider?.clean(this.config.coverage.clean);
		} finally {
			await this.report("onInit", this);
		}
		this.filenamePattern = filters && filters?.length > 0 ? filters : void 0;
		const files = await this.specifications.getRelevantTestSpecifications(filters);
		// if run with --changed, don't exit if no tests are found
		if (!files.length) {
			await this._testRun.start([]);
			const coverage = await this.coverageProvider?.generateCoverage?.({ allTestsRun: true });
			await this._testRun.end([], [], coverage);
			// Report coverage for uncovered files
			await this.reportCoverage(coverage, true);
			if (!this.config.watch || !(this.config.changed || this.config.related?.length)) throw new FilesNotFoundError(this.mode);
		}
		let testModules = {
			testModules: [],
			unhandledErrors: []
		};
		if (files.length) {
			// populate once, update cache on watch
			await this.cache.stats.populateStats(this.config.root, files);
			testModules = await this.runFiles(files, true);
		}
		if (this.config.watch) await this.report("onWatcherStart");
		return testModules;
	}
	/**
	* Initialize reporters and the coverage provider. This method doesn't run any tests.
	* If the `--watch` flag is provided, Vitest will still run changed tests even if this method was not called.
	*/
	async init() {
		try {
			await this.initCoverageProvider();
			await this.coverageProvider?.clean(this.config.coverage.clean);
		} finally {
			await this.report("onInit", this);
		}
		// populate test files cache so watch mode can trigger a file rerun
		await this.globTestSpecifications();
		if (this.config.watch) await this.report("onWatcherStart");
	}
	/**
	* @deprecated remove when vscode extension supports "getModuleSpecifications"
	*/
	getProjectsByTestFile(file) {
		return this.getModuleSpecifications(file);
	}
	/** @deprecated */
	getFileWorkspaceSpecs(file) {
		return this.getModuleSpecifications(file);
	}
	/**
	* Get test specifications associated with the given module. If module is not a test file, an empty array is returned.
	*
	* **Note:** this method relies on a cache generated by `globTestSpecifications`. If the file was not processed yet, use `project.matchesGlobPattern` instead.
	* @param moduleId The module ID to get test specifications for.
	*/
	getModuleSpecifications(moduleId) {
		return this.specifications.getModuleSpecifications(moduleId);
	}
	/**
	* Vitest automatically caches test specifications for each file. This method clears the cache for the given file or the whole cache altogether.
	*/
	clearSpecificationsCache(moduleId) {
		this.specifications.clearCache(moduleId);
	}
	/**
	* Run tests for the given test specifications. This does not trigger `onWatcher*` events.
	* @param specifications A list of specifications to run.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	runTestSpecifications(specifications, allTestsRun = false) {
		specifications.forEach((spec) => this.specifications.ensureSpecificationCached(spec));
		return this.runFiles(specifications, allTestsRun);
	}
	/**
	* Rerun files and trigger `onWatcherRerun`, `onWatcherStart` and `onTestsRerun` events.
	* @param specifications A list of specifications to run.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	async rerunTestSpecifications(specifications, allTestsRun = false) {
		this.configOverride.testNamePattern = void 0;
		const files = specifications.map((spec) => spec.moduleId);
		await Promise.all([this.report("onWatcherRerun", files, "rerun test"), ...this._onUserTestsRerun.map((fn) => fn(specifications))]);
		const result = await this.runTestSpecifications(specifications, allTestsRun);
		await this.report("onWatcherStart", this.state.getFiles(files));
		return result;
	}
	async runFiles(specs, allTestsRun) {
		await this._testRun.start(specs);
		// previous run
		await this.runningPromise;
		this._onCancelListeners = [];
		this.isCancelling = false;
		// schedule the new run
		this.runningPromise = (async () => {
			try {
				if (!this.pool) this.pool = createPool(this);
				const invalidates = Array.from(this.watcher.invalidates);
				this.watcher.invalidates.clear();
				this.snapshot.clear();
				this.state.clearErrors();
				if (!this.isFirstRun && this.config.coverage.cleanOnRerun) await this.coverageProvider?.clean();
				await this.initializeGlobalSetup(specs);
				try {
					await this.pool.runTests(specs, invalidates);
				} catch (err) {
					this.state.catchError(err, "Unhandled Error");
				}
				const files = this.state.getFiles();
				this.cache.results.updateResults(files);
				try {
					await this.cache.results.writeToCache();
				} catch {}
				return {
					testModules: this.state.getTestModules(),
					unhandledErrors: this.state.getUnhandledErrors()
				};
			} finally {
				// TODO: wait for coverage only if `onFinished` is defined
				const coverage = await this.coverageProvider?.generateCoverage({ allTestsRun });
				const errors = this.state.getUnhandledErrors();
				this._checkUnhandledErrors(errors);
				await this._testRun.end(specs, errors, coverage);
				await this.reportCoverage(coverage, allTestsRun);
			}
		})().finally(() => {
			this.runningPromise = void 0;
			this.isFirstRun = false;
			// all subsequent runs will treat this as a fresh run
			this.config.changed = false;
			this.config.related = void 0;
		});
		return await this.runningPromise;
	}
	/**
	* Collect tests in specified modules. Vitest will run the files to collect tests.
	* @param specifications A list of specifications to run.
	*/
	async collectTests(specifications) {
		const filepaths = specifications.map((spec) => spec.moduleId);
		this.state.collectPaths(filepaths);
		// previous run
		await this.runningPromise;
		this._onCancelListeners = [];
		this.isCancelling = false;
		// schedule the new run
		this.runningPromise = (async () => {
			if (!this.pool) this.pool = createPool(this);
			const invalidates = Array.from(this.watcher.invalidates);
			this.watcher.invalidates.clear();
			this.snapshot.clear();
			this.state.clearErrors();
			await this.initializeGlobalSetup(specifications);
			try {
				await this.pool.collectTests(specifications, invalidates);
			} catch (err) {
				this.state.catchError(err, "Unhandled Error");
			}
			const files = this.state.getFiles();
			// can only happen if there was a syntax error in describe block
			// or there was an error importing a file
			if (hasFailed(files)) process.exitCode = 1;
			return {
				testModules: this.state.getTestModules(),
				unhandledErrors: this.state.getUnhandledErrors()
			};
		})().finally(() => {
			this.runningPromise = void 0;
			// all subsequent runs will treat this as a fresh run
			this.config.changed = false;
			this.config.related = void 0;
		});
		return await this.runningPromise;
	}
	/**
	* Gracefully cancel the current test run. Vitest will wait until all running tests are finished before cancelling.
	*/
	async cancelCurrentRun(reason) {
		this.isCancelling = true;
		await Promise.all(this._onCancelListeners.splice(0).map((listener) => listener(reason)));
		await this.runningPromise;
	}
	/** @internal */
	async _initBrowserServers() {
		await Promise.all(this.projects.map((p) => p._initBrowserServer()));
	}
	async initializeGlobalSetup(paths) {
		const projects = new Set(paths.map((spec) => spec.project));
		const coreProject = this.getRootProject();
		if (!projects.has(coreProject)) projects.add(coreProject);
		for (const project of projects) await project._initializeGlobalSetup();
	}
	/** @internal */
	async rerunFiles(files = this.state.getFilepaths(), trigger, allTestsRun = true, resetTestNamePattern = false) {
		if (resetTestNamePattern) this.configOverride.testNamePattern = void 0;
		if (this.filenamePattern) {
			const filteredFiles = await this.globTestSpecifications(this.filenamePattern);
			files = files.filter((file) => filteredFiles.some((f) => f.moduleId === file));
		}
		const specifications = files.flatMap((file) => this.getModuleSpecifications(file));
		await Promise.all([this.report("onWatcherRerun", files, trigger), ...this._onUserTestsRerun.map((fn) => fn(specifications))]);
		const testResult = await this.runFiles(specifications, allTestsRun);
		await this.report("onWatcherStart", this.state.getFiles(files));
		return testResult;
	}
	/** @internal */
	async rerunTask(id) {
		const task = this.state.idMap.get(id);
		if (!task) throw new Error(`Task ${id} was not found`);
		const taskNamePattern = task.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		await this.changeNamePattern(taskNamePattern, [task.file.filepath], "tasks" in task ? "rerun suite" : "rerun test");
	}
	/** @internal */
	async changeProjectName(pattern) {
		if (pattern === "") this.configOverride.project = void 0;
		else this.configOverride.project = [pattern];
		await this.vite.restart();
	}
	/** @internal */
	async changeNamePattern(pattern, files = this.state.getFilepaths(), trigger) {
		// Empty test name pattern should reset filename pattern as well
		if (pattern === "") this.filenamePattern = void 0;
		const testNamePattern = pattern ? new RegExp(pattern) : void 0;
		this.configOverride.testNamePattern = testNamePattern;
		// filter only test files that have tests matching the pattern
		if (testNamePattern) files = files.filter((filepath) => {
			const files = this.state.getFiles([filepath]);
			return !files.length || files.some((file) => {
				const tasks = getTasks(file);
				return !tasks.length || tasks.some((task) => testNamePattern.test(task.name));
			});
		});
		await this.rerunFiles(files, trigger, pattern === "");
	}
	/** @internal */
	async changeFilenamePattern(pattern, files = this.state.getFilepaths()) {
		this.filenamePattern = pattern ? [pattern] : [];
		const trigger = this.filenamePattern.length ? "change filename pattern" : "reset filename pattern";
		await this.rerunFiles(files, trigger, pattern === "");
	}
	/** @internal */
	async rerunFailed() {
		await this.rerunFiles(this.state.getFailedFilepaths(), "rerun failed", false);
	}
	/**
	* Update snapshots in specified files. If no files are provided, it will update files with failed tests and obsolete snapshots.
	* @param files The list of files on the file system
	*/
	async updateSnapshot(files) {
		// default to failed files
		files = files || [...this.state.getFailedFilepaths(), ...this.snapshot.summary.uncheckedKeysByFile.map((s) => s.filePath)];
		this.enableSnapshotUpdate();
		try {
			return await this.rerunFiles(files, "update snapshot", false);
		} finally {
			this.resetSnapshotUpdate();
		}
	}
	/**
	* Enable the mode that allows updating snapshots when running tests.
	* This method doesn't run any tests.
	*
	* Every test that runs after this method is called will update snapshots.
	* To disable the mode, call `resetSnapshotUpdate`.
	*/
	enableSnapshotUpdate() {
		this.configOverride.snapshotOptions = {
			updateSnapshot: "all",
			snapshotEnvironment: null
		};
		this.snapshot.options.updateSnapshot = "all";
	}
	/**
	* Disable the mode that allows updating snapshots when running tests.
	*/
	resetSnapshotUpdate() {
		delete this.configOverride.snapshotOptions;
		this.snapshot.options.updateSnapshot = this.config.snapshotOptions.updateSnapshot;
	}
	/**
	* Set the global test name pattern to a regexp.
	* This method doesn't run any tests.
	*/
	setGlobalTestNamePattern(pattern) {
		if (pattern instanceof RegExp) this.configOverride.testNamePattern = pattern;
		else this.configOverride.testNamePattern = pattern ? new RegExp(pattern) : void 0;
	}
	/**
	* Resets the global test name pattern. This method doesn't run any tests.
	*/
	resetGlobalTestNamePattern() {
		this.configOverride.testNamePattern = void 0;
	}
	_rerunTimer;
	// we can't use a single `triggerId` yet because vscode extension relies on this
	async scheduleRerun(triggerId) {
		const currentCount = this.restartsCount;
		clearTimeout(this._rerunTimer);
		await this.runningPromise;
		clearTimeout(this._rerunTimer);
		// server restarted
		if (this.restartsCount !== currentCount) return;
		this._rerunTimer = setTimeout(async () => {
			if (this.watcher.changedTests.size === 0) {
				this.watcher.invalidates.clear();
				return;
			}
			// server restarted
			if (this.restartsCount !== currentCount) return;
			this.isFirstRun = false;
			this.snapshot.clear();
			let files = Array.from(this.watcher.changedTests);
			if (this.filenamePattern) {
				const filteredFiles = await this.globTestSpecifications(this.filenamePattern);
				files = files.filter((file) => filteredFiles.some((f) => f.moduleId === file));
				// A file that does not match the current filename pattern was changed
				if (files.length === 0) return;
			}
			this.watcher.changedTests.clear();
			const triggerIds = new Set(triggerId.map((id) => relative(this.config.root, id)));
			const triggerLabel = Array.from(triggerIds).join(", ");
			// get file specifications and filter them if needed
			const specifications = files.flatMap((file) => this.getModuleSpecifications(file)).filter((specification) => {
				if (this._onFilterWatchedSpecification.length === 0) return true;
				return this._onFilterWatchedSpecification.every((fn) => fn(specification));
			});
			await Promise.all([this.report("onWatcherRerun", files, triggerLabel), ...this._onUserTestsRerun.map((fn) => fn(specifications))]);
			await this.runFiles(specifications, false);
			await this.report("onWatcherStart", this.state.getFiles(files));
		}, WATCHER_DEBOUNCE);
	}
	/**
	* Invalidate a file in all projects.
	*/
	invalidateFile(filepath) {
		this.projects.forEach(({ vite, browser }) => {
			const serverMods = vite.moduleGraph.getModulesByFile(filepath);
			serverMods?.forEach((mod) => vite.moduleGraph.invalidateModule(mod));
			if (browser) {
				const browserMods = browser.vite.moduleGraph.getModulesByFile(filepath);
				browserMods?.forEach((mod) => browser.vite.moduleGraph.invalidateModule(mod));
			}
		});
	}
	/** @deprecated use `invalidateFile` */
	updateLastChanged(filepath) {
		this.invalidateFile(filepath);
	}
	/** @internal */
	_checkUnhandledErrors(errors) {
		if (errors.length && !this.config.dangerouslyIgnoreUnhandledErrors) process.exitCode = 1;
	}
	async reportCoverage(coverage, allTestsRun) {
		if (this.state.getCountOfFailedTests() > 0) {
			await this.coverageProvider?.onTestFailure?.();
			if (!this.config.coverage.reportOnFailure) return;
		}
		if (this.coverageProvider) {
			await this.coverageProvider.reportCoverage(coverage, { allTestsRun });
			// notify coverage iframe reload
			for (const reporter of this.reporters) if (reporter instanceof WebSocketReporter) reporter.onFinishedReportCoverage();
		}
	}
	/**
	* Closes all projects and their associated resources.
	* This can only be called once; the closing promise is cached until the server restarts.
	*/
	async close() {
		if (!this.closingPromise) this.closingPromise = (async () => {
			const teardownProjects = [...this.projects];
			if (this.coreWorkspaceProject && !teardownProjects.includes(this.coreWorkspaceProject)) teardownProjects.push(this.coreWorkspaceProject);
			// do teardown before closing the server
			for (const project of teardownProjects.reverse()) await project._teardownGlobalSetup();
			const closePromises = this.projects.map((w) => w.close());
			// close the core workspace server only once
			// it's possible that it's not initialized at all because it's not running any tests
			if (this.coreWorkspaceProject && !this.projects.includes(this.coreWorkspaceProject)) closePromises.push(this.coreWorkspaceProject.close().then(() => this._vite = void 0));
			if (this.pool) closePromises.push((async () => {
				await this.pool?.close?.();
				this.pool = void 0;
			})());
			closePromises.push(...this._onClose.map((fn) => fn()));
			return Promise.allSettled(closePromises).then((results) => {
				results.forEach((r) => {
					if (r.status === "rejected") this.logger.error("error during close", r.reason);
				});
			});
		})();
		return this.closingPromise;
	}
	/**
	* Closes all projects and exit the process
	* @param force If true, the process will exit immediately after closing the projects.
	*/
	async exit(force = false) {
		setTimeout(() => {
			this.report("onProcessTimeout").then(() => {
				console.warn(`close timed out after ${this.config.teardownTimeout}ms`);
				this.state.getProcessTimeoutCauses().forEach((cause) => console.warn(cause));
				if (!this.pool) {
					const runningServers = [this._vite, ...this.projects.map((p) => p._vite)].filter(Boolean).length;
					if (runningServers === 1) console.warn("Tests closed successfully but something prevents Vite server from exiting");
					else if (runningServers > 1) console.warn(`Tests closed successfully but something prevents ${runningServers} Vite servers from exiting`);
					else console.warn("Tests closed successfully but something prevents the main process from exiting");
					if (!this.reporters.some((r) => r instanceof HangingProcessReporter)) console.warn("You can try to identify the cause by enabling \"hanging-process\" reporter. See https://vitest.dev/config/#reporters");
				}
				process.exit();
			});
		}, this.config.teardownTimeout).unref();
		await this.close();
		if (force) process.exit();
	}
	/** @internal */
	async report(name, ...args) {
		await Promise.all(this.reporters.map((r) => r[name]?.(
			// @ts-expect-error let me go
			...args
		)));
	}
	/** @internal */
	async _globTestFilepaths() {
		const specifications = await this.globTestSpecifications();
		return Array.from(new Set(specifications.map((spec) => spec.moduleId)));
	}
	/**
	* @deprecated use `globTestSpecifications` instead
	*/
	async globTestSpecs(filters = []) {
		return this.globTestSpecifications(filters);
	}
	/**
	* @deprecated use `globTestSpecifications` instead
	*/
	async globTestFiles(filters = []) {
		return this.globTestSpecifications(filters);
	}
	/** @deprecated filter by `this.projects` yourself */
	getModuleProjects(filepath) {
		return this.projects.filter((project) => {
			return project.getModulesByFilepath(filepath).size;
			// TODO: reevaluate || project.browser?.moduleGraph.getModulesByFile(id)?.size
		});
	}
	/**
	* Should the server be kept running after the tests are done.
	*/
	shouldKeepServer() {
		return !!this.config?.watch;
	}
	/**
	* Register a handler that will be called when the server is restarted due to a config change.
	*/
	onServerRestart(fn) {
		this._onRestartListeners.push(fn);
	}
	/**
	* Register a handler that will be called when the test run is cancelled with `vitest.cancelCurrentRun`.
	*/
	onCancel(fn) {
		this._onCancelListeners.push(fn);
	}
	/**
	* Register a handler that will be called when the server is closed.
	*/
	onClose(fn) {
		this._onClose.push(fn);
	}
	/**
	* Register a handler that will be called when the tests are rerunning.
	*/
	onTestsRerun(fn) {
		this._onUserTestsRerun.push(fn);
	}
	/**
	* Register a handler that will be called when a file is changed.
	* This callback should return `true` of `false` indicating whether the test file needs to be rerun.
	* @example
	* const testsToRun = [resolve('./test.spec.ts')]
	* vitest.onFilterWatchedSpecification(specification => testsToRun.includes(specification.moduleId))
	*/
	onFilterWatchedSpecification(fn) {
		this._onFilterWatchedSpecification.push(fn);
	}
	/** @internal */
	onAfterSetServer(fn) {
		this._onSetServer.push(fn);
	}
	/**
	* Check if the project with a given name should be included.
	*/
	matchesProjectFilter(name) {
		const projects = this._config?.project || this._cliOptions?.project;
		// no filters applied, any project can be included
		if (!projects || !projects.length) return true;
		return toArray(projects).some((project) => {
			const regexp = wildcardPatternToRegExp(project);
			return regexp.test(name);
		});
	}
}
function assert(condition, property, name = property) {
	if (!condition) throw new Error(`The ${name} was not set. It means that \`vitest.${property}\` was called before the Vite server was established. Await the Vitest promise before accessing \`vitest.${property}\`.`);
}

async function VitestPlugin(options = {}, vitest = new Vitest("test", deepClone(options))) {
	const userConfig = deepMerge({}, options);
	async function UIPlugin() {
		await vitest.packageInstaller.ensureInstalled("@vitest/ui", options.root || process.cwd(), vitest.version);
		return (await import('@vitest/ui')).default(vitest);
	}
	return [
		{
			name: "vitest",
			enforce: "pre",
			options() {
				this.meta.watchMode = false;
			},
			async config(viteConfig) {
				if (options.watch)
 // Earlier runs have overwritten values of the `options`.
				// Reset it back to initial user config before setting up the server again.
				options = deepMerge({}, userConfig);
				// preliminary merge of options to be able to create server options for vite
				// however to allow vitest plugins to modify vitest config values
				// this is repeated in configResolved where the config is final
				const testConfig = deepMerge({}, configDefaults, removeUndefinedValues(viteConfig.test ?? {}), options);
				testConfig.api = resolveApiServerConfig(testConfig, defaultPort);
				// store defines for globalThis to make them
				// reassignable when running in worker in src/runtime/setup.ts
				const defines = deleteDefineConfig(viteConfig);
				options.defines = defines;
				let open = false;
				if (testConfig.ui && testConfig.open) open = testConfig.uiBase ?? "/__vitest__/";
				const resolveOptions = getDefaultResolveOptions();
				const config = {
					root: viteConfig.test?.root || options.root,
					define: { "process.env.NODE_ENV": "process.env.NODE_ENV" },
					esbuild: viteConfig.esbuild === false ? false : {
						target: viteConfig.esbuild?.target || "node18",
						sourcemap: "external",
						legalComments: "inline"
					},
					resolve: {
						...resolveOptions,
						alias: testConfig.alias
					},
					server: {
						...testConfig.api,
						open,
						hmr: false,
						ws: testConfig.api?.middlewareMode ? false : void 0,
						preTransformRequests: false,
						fs: { allow: resolveFsAllow(options.root || process.cwd(), testConfig.config) }
					},
					build: {
						outDir: "dummy-non-existing-folder",
						emptyOutDir: false
					},
					environments: { ssr: { resolve: resolveOptions } },
					test: {
						poolOptions: {
							threads: { isolate: options.poolOptions?.threads?.isolate ?? options.isolate ?? testConfig.poolOptions?.threads?.isolate ?? viteConfig.test?.isolate },
							forks: { isolate: options.poolOptions?.forks?.isolate ?? options.isolate ?? testConfig.poolOptions?.forks?.isolate ?? viteConfig.test?.isolate }
						},
						root: testConfig.root ?? viteConfig.test?.root,
						deps: testConfig.deps ?? viteConfig.test?.deps
					}
				};
				// inherit so it's available in VitestOptimizer
				// I cannot wait to rewrite all of this in Vitest 4
				if (options.cache != null) config.test.cache = options.cache;
				if (vitest.configOverride.project)
 // project filter was set by the user, so we need to filter the project
				options.project = vitest.configOverride.project;
				config.customLogger = createViteLogger(vitest.logger, viteConfig.logLevel || "warn", { allowClearScreen: false });
				config.customLogger = silenceImportViteIgnoreWarning(config.customLogger);
				// we want inline dependencies to be resolved by analyser plugin so module graph is populated correctly
				if (viteConfig.ssr?.noExternal !== true) {
					const inline = testConfig.server?.deps?.inline;
					if (inline === true) config.ssr = { noExternal: true };
					else {
						const noExternal = viteConfig.ssr?.noExternal;
						const noExternalArray = typeof noExternal !== "undefined" ? toArray(noExternal) : void 0;
						// filter the same packages
						const uniqueInline = inline && noExternalArray ? inline.filter((dep) => !noExternalArray.includes(dep)) : inline;
						config.ssr = { noExternal: uniqueInline };
					}
				}
				// chokidar fsevents is unstable on macos when emitting "ready" event
				if (process.platform === "darwin" && false);
				const classNameStrategy = typeof testConfig.css !== "boolean" && testConfig.css?.modules?.classNameStrategy || "stable";
				if (classNameStrategy !== "scoped") {
					config.css ??= {};
					config.css.modules ??= {};
					if (config.css.modules) config.css.modules.generateScopedName = (name, filename) => {
						const root = vitest.config.root || options.root || process.cwd();
						return generateScopedClassName(classNameStrategy, name, relative(root, filename));
					};
				}
				return config;
			},
			async configResolved(viteConfig) {
				const viteConfigTest = viteConfig.test || {};
				if (viteConfigTest.watch === false) viteConfigTest.run = true;
				if ("alias" in viteConfigTest) delete viteConfigTest.alias;
				// viteConfig.test is final now, merge it for real
				options = deepMerge({}, configDefaults, viteConfigTest, options);
				options.api = resolveApiServerConfig(options, defaultPort);
				// we replace every "import.meta.env" with "process.env"
				// to allow reassigning, so we need to put all envs on process.env
				const { PROD, DEV,...envs } = viteConfig.env;
				// process.env can have only string values and will cast string on it if we pass other type,
				// so we are making them truthy
				process.env.PROD ??= PROD ? "1" : "";
				process.env.DEV ??= DEV ? "1" : "";
				for (const name in envs) process.env[name] ??= envs[name];
				// don't watch files in run mode
				if (!options.watch) viteConfig.server.watch = null;
				if (options.ui)
 // @ts-expect-error mutate readonly
				viteConfig.plugins.push(await UIPlugin());
				Object.defineProperty(viteConfig, "_vitest", {
					value: options,
					enumerable: false,
					configurable: true
				});
				const originalName = options.name;
				if (options.browser?.instances) options.browser.instances.forEach((instance) => {
					instance.name ??= originalName ? `${originalName} (${instance.browser})` : instance.browser;
				});
			},
			configureServer: {
				order: "post",
				async handler(server) {
					if (options.watch && false);
					await vitest._setServer(options, server);
					if (options.api && options.watch) (await Promise.resolve().then(function () { return setup$1; })).setup(vitest);
					// #415, in run mode we don't need the watcher, close it would improve the performance
					if (!options.watch) await server.watcher.close();
				}
			}
		},
		SsrReplacerPlugin(),
		...CSSEnablerPlugin(vitest),
		CoverageTransform(vitest),
		VitestCoreResolver(vitest),
		...MocksPlugins(),
		VitestOptimizer(),
		NormalizeURLPlugin()
	].filter(notNullish);
}
function removeUndefinedValues(obj) {
	for (const key in Object.keys(obj)) if (obj[key] === void 0) delete obj[key];
	return obj;
}

async function createVitest(mode, options, viteOverrides = {}, vitestOptions = {}) {
	const ctx = new Vitest(mode, deepClone(options), vitestOptions);
	const root = slash(resolve$1(options.root || process.cwd()));
	const configPath = options.config === false ? false : options.config ? resolve$1(root, options.config) : await findUp(configFiles, { cwd: root });
	options.config = configPath;
	const { browser: _removeBrowser,...restOptions } = options;
	const config = {
		configFile: configPath,
		configLoader: options.configLoader,
		mode: options.mode || mode,
		plugins: await VitestPlugin(restOptions, ctx)
	};
	const server = await createViteServer(mergeConfig(config, mergeConfig(viteOverrides, { root: options.root })));
	if (ctx.config.api?.port) await server.listen();
	return ctx;
}

const MAX_RESULT_COUNT = 10;
const SELECTION_MAX_INDEX = 7;
const ESC = "\x1B[";
class WatchFilter {
	filterRL;
	currentKeyword = void 0;
	message;
	results = [];
	selectionIndex = -1;
	onKeyPress;
	stdin;
	stdout;
	constructor(message, stdin = process.stdin, stdout$1 = stdout()) {
		this.message = message;
		this.stdin = stdin;
		this.stdout = stdout$1;
		this.filterRL = readline.createInterface({
			input: this.stdin,
			escapeCodeTimeout: 50
		});
		readline.emitKeypressEvents(this.stdin, this.filterRL);
		if (this.stdin.isTTY) this.stdin.setRawMode(true);
	}
	async filter(filterFunc) {
		this.write(this.promptLine());
		const resultPromise = createDefer();
		this.onKeyPress = this.filterHandler(filterFunc, (result) => {
			resultPromise.resolve(result);
		});
		this.stdin.on("keypress", this.onKeyPress);
		try {
			return await resultPromise;
		} finally {
			this.close();
		}
	}
	filterHandler(filterFunc, onSubmit) {
		return async (str, key) => {
			switch (true) {
				case key.sequence === "":
					if (this.currentKeyword && this.currentKeyword?.length > 1) this.currentKeyword = this.currentKeyword?.slice(0, -1);
					else this.currentKeyword = void 0;
					break;
				case key?.ctrl && key?.name === "c":
				case key?.name === "escape":
					this.write(`${ESC}1G${ESC}0J`);
					onSubmit(void 0);
					return;
				case key?.name === "enter":
				case key?.name === "return":
					onSubmit(this.results[this.selectionIndex] || this.currentKeyword || "");
					this.currentKeyword = void 0;
					break;
				case key?.name === "up":
					if (this.selectionIndex && this.selectionIndex > 0) this.selectionIndex--;
					else this.selectionIndex = -1;
					break;
				case key?.name === "down":
					if (this.selectionIndex < this.results.length - 1) this.selectionIndex++;
					else if (this.selectionIndex >= this.results.length - 1) this.selectionIndex = this.results.length - 1;
					break;
				case !key?.ctrl && !key?.meta:
					if (this.currentKeyword === void 0) this.currentKeyword = str;
					else this.currentKeyword += str || "";
					break;
			}
			if (this.currentKeyword) this.results = await filterFunc(this.currentKeyword);
			this.render();
		};
	}
	render() {
		let printStr = this.promptLine();
		if (!this.currentKeyword) printStr += "\nPlease input filter pattern";
		else if (this.currentKeyword && this.results.length === 0) printStr += "\nPattern matches no results";
		else {
			const resultCountLine = this.results.length === 1 ? `Pattern matches ${this.results.length} result` : `Pattern matches ${this.results.length} results`;
			let resultBody = "";
			if (this.results.length > MAX_RESULT_COUNT) {
				const offset = this.selectionIndex > SELECTION_MAX_INDEX ? this.selectionIndex - SELECTION_MAX_INDEX : 0;
				const displayResults = this.results.slice(offset, MAX_RESULT_COUNT + offset);
				const remainingResultCount = this.results.length - offset - displayResults.length;
				resultBody = `${displayResults.map((result, index) => index + offset === this.selectionIndex ? c.green(` › ${result}`) : c.dim(` › ${result}`)).join("\n")}`;
				if (remainingResultCount > 0) resultBody += `
${c.dim(`   ...and ${remainingResultCount} more ${remainingResultCount === 1 ? "result" : "results"}`)}`;
			} else resultBody = this.results.map((result, index) => index === this.selectionIndex ? c.green(` › ${result}`) : c.dim(` › ${result}`)).join("\n");
			printStr += `\n${resultCountLine}\n${resultBody}`;
		}
		this.eraseAndPrint(printStr);
		this.restoreCursor();
	}
	keywordOffset() {
		return `? ${this.message} › `.length + 1;
	}
	promptLine() {
		return `${c.cyan("?")} ${c.bold(this.message)} › ${this.currentKeyword || ""}`;
	}
	eraseAndPrint(str) {
		let rows = 0;
		const lines = str.split(/\r?\n/);
		for (const line of lines) {
			const columns = "columns" in this.stdout ? this.stdout.columns : 80;
			// We have to take care of screen width in case of long lines
			rows += 1 + Math.floor(Math.max(stripVTControlCharacters(line).length - 1, 0) / columns);
		}
		this.write(`${ESC}1G`);
		this.write(`${ESC}J`);
		this.write(str);
		this.write(`${ESC}${rows - 1}A`);
	}
	close() {
		this.filterRL.close();
		if (this.onKeyPress) this.stdin.removeListener("keypress", this.onKeyPress);
		if (this.stdin.isTTY) this.stdin.setRawMode(false);
	}
	restoreCursor() {
		const cursortPos = this.keywordOffset() + (this.currentKeyword?.length || 0);
		this.write(`${ESC}${cursortPos}G`);
	}
	write(data) {
		this.stdout.write(data);
	}
	getLastResults() {
		return this.results;
	}
}

const keys = [
	[["a", "return"], "rerun all tests"],
	["r", "rerun current pattern tests"],
	["f", "rerun only failed tests"],
	["u", "update snapshot"],
	["p", "filter by a filename"],
	["t", "filter by a test name regex pattern"],
	["w", "filter by a project name"],
	["b", "start the browser server if not started yet"],
	["q", "quit"]
];
const cancelKeys = [
	"space",
	"c",
	"h",
	...keys.map((key) => key[0]).flat()
];
function printShortcutsHelp() {
	stdout().write(`
${c.bold("  Watch Usage")}
${keys.map((i) => c.dim("  press ") + c.reset([i[0]].flat().map(c.bold).join(", ")) + c.dim(` to ${i[1]}`)).join("\n")}
`);
}
function registerConsoleShortcuts(ctx, stdin = process.stdin, stdout) {
	let latestFilename = "";
	async function _keypressHandler(str, key) {
		// Cancel run and exit when ctrl-c or esc is pressed.
		// If cancelling takes long and key is pressed multiple times, exit forcefully.
		if (str === "" || str === "\x1B" || key && key.ctrl && key.name === "c") {
			if (!ctx.isCancelling) {
				ctx.logger.log(c.red("Cancelling test run. Press CTRL+c again to exit forcefully.\n"));
				process.exitCode = 130;
				await ctx.cancelCurrentRun("keyboard-input");
			}
			return ctx.exit(true);
		}
		// window not support suspend
		if (!isWindows && key && key.ctrl && key.name === "z") {
			process.kill(process.ppid, "SIGTSTP");
			process.kill(process.pid, "SIGTSTP");
			return;
		}
		const name = key?.name;
		if (ctx.runningPromise) {
			if (cancelKeys.includes(name)) await ctx.cancelCurrentRun("keyboard-input");
			return;
		}
		// quit
		if (name === "q") return ctx.exit(true);
		// help
		if (name === "h") return printShortcutsHelp();
		// update snapshot
		if (name === "u") return ctx.updateSnapshot();
		// rerun all tests
		if (name === "a" || name === "return") {
			const files = await ctx._globTestFilepaths();
			return ctx.changeNamePattern("", files, "rerun all tests");
		}
		// rerun current pattern tests
		if (name === "r") return ctx.rerunFiles();
		// rerun only failed tests
		if (name === "f") return ctx.rerunFailed();
		// change project filter
		if (name === "w") return inputProjectName();
		// change testNamePattern
		if (name === "t") return inputNamePattern();
		// change fileNamePattern
		if (name === "p") return inputFilePattern();
		if (name === "b") {
			await ctx._initBrowserServers();
			ctx.projects.forEach((project) => {
				ctx.logger.log();
				ctx.logger.printBrowserBanner(project);
			});
			return null;
		}
	}
	async function keypressHandler(str, key) {
		await _keypressHandler(str, key);
	}
	async function inputNamePattern() {
		off();
		const watchFilter = new WatchFilter("Input test name pattern (RegExp)", stdin, stdout);
		const filter = await watchFilter.filter((str) => {
			const files = ctx.state.getFiles();
			const tests = getTests(files);
			try {
				const reg = new RegExp(str);
				return tests.map((test) => test.name).filter((testName) => testName.match(reg));
			} catch {
				// `new RegExp` may throw error when input is invalid regexp
				return [];
			}
		});
		on();
		if (typeof filter === "undefined") return;
		const files = ctx.state.getFilepaths();
		// if running in standalone mode, Vitest instance doesn't know about any test file
		const cliFiles = ctx.config.standalone && !files.length ? await ctx._globTestFilepaths() : void 0;
		await ctx.changeNamePattern(filter?.trim() || "", cliFiles, "change pattern");
	}
	async function inputProjectName() {
		off();
		const { filter = "" } = await prompt([{
			name: "filter",
			type: "text",
			message: "Input a single project name",
			initial: ctx.config.project[0] || ""
		}]);
		on();
		await ctx.changeProjectName(filter.trim());
	}
	async function inputFilePattern() {
		off();
		const watchFilter = new WatchFilter("Input filename pattern", stdin, stdout);
		const filter = await watchFilter.filter(async (str) => {
			const files = await ctx.globTestFiles([str]);
			return files.map((file) => relative(ctx.config.root, file[1]));
		});
		on();
		if (typeof filter === "undefined") return;
		latestFilename = filter?.trim() || "";
		const lastResults = watchFilter.getLastResults();
		await ctx.changeFilenamePattern(latestFilename, filter && lastResults.length ? lastResults.map((i) => resolve(ctx.config.root, i)) : void 0);
	}
	let rl;
	function on() {
		off();
		rl = readline.createInterface({
			input: stdin,
			escapeCodeTimeout: 50
		});
		readline.emitKeypressEvents(stdin, rl);
		if (stdin.isTTY) stdin.setRawMode(true);
		stdin.on("keypress", keypressHandler);
	}
	function off() {
		rl?.close();
		rl = void 0;
		stdin.removeListener("keypress", keypressHandler);
		if (stdin.isTTY) stdin.setRawMode(false);
	}
	on();
	return function cleanup() {
		off();
	};
}

/**
* Start Vitest programmatically
*
* Returns a Vitest instance if initialized successfully.
*/
async function startVitest(mode, cliFilters = [], options = {}, viteOverrides, vitestOptions) {
	const root = resolve(options.root || process.cwd());
	const ctx = await prepareVitest(mode, options, viteOverrides, vitestOptions);
	if (mode === "test" && ctx.config.coverage.enabled) {
		const provider = ctx.config.coverage.provider || "v8";
		const requiredPackages = CoverageProviderMap[provider];
		if (requiredPackages) {
			if (!await ctx.packageInstaller.ensureInstalled(requiredPackages, root, ctx.version)) {
				process.exitCode = 1;
				return ctx;
			}
		}
	}
	const stdin = vitestOptions?.stdin || process.stdin;
	const stdout = vitestOptions?.stdout || process.stdout;
	let stdinCleanup;
	if (stdin.isTTY && ctx.config.watch) stdinCleanup = registerConsoleShortcuts(ctx, stdin, stdout);
	ctx.onAfterSetServer(() => {
		if (ctx.config.standalone) ctx.init();
		else ctx.start(cliFilters);
	});
	try {
		if (ctx.config.mergeReports) await ctx.mergeReports();
		else if (ctx.config.standalone) await ctx.init();
		else await ctx.start(cliFilters);
	} catch (e) {
		if (e instanceof FilesNotFoundError) return ctx;
		if (e instanceof GitNotFoundError) {
			ctx.logger.error(e.message);
			return ctx;
		}
		if (e instanceof IncludeTaskLocationDisabledError || e instanceof RangeLocationFilterProvidedError || e instanceof LocationFilterFileNotFoundError) {
			ctx.logger.printError(e, { verbose: false });
			return ctx;
		}
		process.exitCode = 1;
		ctx.logger.printError(e, {
			fullStack: true,
			type: "Unhandled Error"
		});
		ctx.logger.error("\n\n");
		return ctx;
	}
	if (ctx.shouldKeepServer()) return ctx;
	stdinCleanup?.();
	await ctx.close();
	return ctx;
}
async function prepareVitest(mode, options = {}, viteOverrides, vitestOptions) {
	process.env.TEST = "true";
	process.env.VITEST = "true";
	process.env.NODE_ENV ??= "test";
	if (options.run) options.watch = false;
	// this shouldn't affect _application root_ that can be changed inside config
	const root = resolve(options.root || process.cwd());
	const ctx = await createVitest(mode, options, viteOverrides, vitestOptions);
	const environmentPackage = getEnvPackageName(ctx.config.environment);
	if (environmentPackage && !await ctx.packageInstaller.ensureInstalled(environmentPackage, root)) {
		process.exitCode = 1;
		return ctx;
	}
	return ctx;
}
function processCollected(ctx, files, options) {
	let errorsPrinted = false;
	forEachSuite(files, (suite) => {
		suite.errors().forEach((error) => {
			errorsPrinted = true;
			ctx.logger.printError(error, { project: suite.project });
		});
	});
	if (errorsPrinted) return;
	if (typeof options.json !== "undefined") return processJsonOutput(files, options);
	return formatCollectedAsString(files).forEach((test) => console.log(test));
}
function outputFileList(files, options) {
	if (typeof options.json !== "undefined") return outputJsonFileList(files, options);
	formatFilesAsString(files, options).map((file) => console.log(file));
}
function outputJsonFileList(files, options) {
	if (typeof options.json === "boolean") return console.log(JSON.stringify(formatFilesAsJSON(files), null, 2));
	if (typeof options.json === "string") {
		const jsonPath = resolve(options.root || process.cwd(), options.json);
		mkdirSync(dirname(jsonPath), { recursive: true });
		writeFileSync(jsonPath, JSON.stringify(formatFilesAsJSON(files), null, 2));
	}
}
function formatFilesAsJSON(files) {
	return files.map((file) => {
		const result = { file: file.moduleId };
		if (file.project.name) result.projectName = file.project.name;
		return result;
	});
}
function formatFilesAsString(files, options) {
	return files.map((file) => {
		let name = relative(options.root || process.cwd(), file.moduleId);
		if (file.project.name) name = `[${file.project.name}] ${name}`;
		return name;
	});
}
function processJsonOutput(files, options) {
	if (typeof options.json === "boolean") return console.log(JSON.stringify(formatCollectedAsJSON(files), null, 2));
	if (typeof options.json === "string") {
		const jsonPath = resolve(options.root || process.cwd(), options.json);
		mkdirSync(dirname(jsonPath), { recursive: true });
		writeFileSync(jsonPath, JSON.stringify(formatCollectedAsJSON(files), null, 2));
	}
}
function forEachSuite(modules, callback) {
	modules.forEach((testModule) => {
		callback(testModule);
		for (const suite of testModule.children.allSuites()) callback(suite);
	});
}
function formatCollectedAsJSON(files) {
	const results = [];
	files.forEach((file) => {
		for (const test of file.children.allTests()) {
			if (test.result().state === "skipped") continue;
			const result = {
				name: test.fullName,
				file: test.module.moduleId
			};
			if (test.project.name) result.projectName = test.project.name;
			if (test.location) result.location = test.location;
			results.push(result);
		}
	});
	return results;
}
function formatCollectedAsString(testModules) {
	const results = [];
	testModules.forEach((testModule) => {
		for (const test of testModule.children.allTests()) {
			if (test.result().state === "skipped") continue;
			const fullName = `${test.module.task.name} > ${test.fullName}`;
			results.push((test.project.name ? `[${test.project.name}] ` : "") + fullName);
		}
	});
	return results;
}
const envPackageNames = {
	"jsdom": "jsdom",
	"happy-dom": "happy-dom",
	"edge-runtime": "@edge-runtime/vm"
};
function getEnvPackageName(env) {
	if (env === "node") return null;
	if (env in envPackageNames) return envPackageNames[env];
	if (env[0] === "." || isAbsolute(env)) return null;
	return `vitest-environment-${env}`;
}

var cliApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  formatCollectedAsJSON: formatCollectedAsJSON,
  formatCollectedAsString: formatCollectedAsString,
  outputFileList: outputFileList,
  prepareVitest: prepareVitest,
  processCollected: processCollected,
  startVitest: startVitest
});

export { FilesNotFoundError as F, GitNotFoundError as G, TestModule as T, Vitest as V, VitestPlugin as a, VitestPackageInstaller as b, createVitest as c, registerConsoleShortcuts as d, createViteLogger as e, cliApi as f, isValidApiRequest as i, resolveFsAllow as r, startVitest as s };
