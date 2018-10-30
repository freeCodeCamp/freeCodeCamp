'use strict';

const Limiter = require('async-limiter');
const zlib = require('zlib');

const bufferUtil = require('./buffer-util');
const constants = require('./constants');

const TRAILER = Buffer.from([0x00, 0x00, 0xff, 0xff]);
const EMPTY_BLOCK = Buffer.from([0x00]);

const kPerMessageDeflate = Symbol('permessage-deflate');
const kWriteInProgress = Symbol('write-in-progress');
const kPendingClose = Symbol('pending-close');
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
   * @param {Object} options Configuration options
   * @param {Boolean} options.serverNoContextTakeover Request/accept disabling
   *     of server context takeover
   * @param {Boolean} options.clientNoContextTakeover Advertise/acknowledge
   *     disabling of client context takeover
   * @param {(Boolean|Number)} options.serverMaxWindowBits Request/confirm the
   *     use of a custom server window size
   * @param {(Boolean|Number)} options.clientMaxWindowBits Advertise support
   *     for, or request, a custom client window size
   * @param {Object} options.zlibDeflateOptions Options to pass to zlib on deflate
   * @param {Object} options.zlibInflateOptions Options to pass to zlib on inflate
   * @param {Number} options.threshold Size (in bytes) below which messages
   *     should not be compressed
   * @param {Number} options.concurrencyLimit The number of concurrent calls to
   *     zlib
   * @param {Boolean} isServer Create the instance in either server or client
   *     mode
   * @param {Number} maxPayload The maximum allowed message length
   */
  constructor (options, isServer, maxPayload) {
    this._maxPayload = maxPayload | 0;
    this._options = options || {};
    this._threshold = this._options.threshold !== undefined
      ? this._options.threshold
      : 1024;
    this._isServer = !!isServer;
    this._deflate = null;
    this._inflate = null;

    this.params = null;

    if (!zlibLimiter) {
      const concurrency = this._options.concurrencyLimit !== undefined
        ? this._options.concurrencyLimit
        : 10;
      zlibLimiter = new Limiter({ concurrency });
    }
  }

  /**
   * @type {String}
   */
  static get extensionName () {
    return 'permessage-deflate';
  }

  /**
   * Create an extension negotiation offer.
   *
   * @return {Object} Extension parameters
   * @public
   */
  offer () {
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
  accept (configurations) {
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
  cleanup () {
    if (this._inflate) {
      if (this._inflate[kWriteInProgress]) {
        this._inflate[kPendingClose] = true;
      } else {
        this._inflate.close();
        this._inflate = null;
      }
    }
    if (this._deflate) {
      if (this._deflate[kWriteInProgress]) {
        this._deflate[kPendingClose] = true;
      } else {
        this._deflate.close();
        this._deflate = null;
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
  acceptAsServer (offers) {
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
  acceptAsClient (response) {
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
  normalizeParams (configurations) {
    configurations.forEach((params) => {
      Object.keys(params).forEach((key) => {
        var value = params[key];

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
   * Decompress data. Concurrency limited by async-limiter.
   *
   * @param {Buffer} data Compressed data
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  decompress (data, fin, callback) {
    zlibLimiter.push((done) => {
      this._decompress(data, fin, (err, result) => {
        done();
        callback(err, result);
      });
    });
  }

  /**
   * Compress data. Concurrency limited by async-limiter.
   *
   * @param {Buffer} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @public
   */
  compress (data, fin, callback) {
    zlibLimiter.push((done) => {
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
  _decompress (data, fin, callback) {
    const endpoint = this._isServer ? 'client' : 'server';

    if (!this._inflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits = typeof this.params[key] !== 'number'
        ? zlib.Z_DEFAULT_WINDOWBITS
        : this.params[key];

      this._inflate = zlib.createInflateRaw(
        Object.assign({}, this._options.zlibInflateOptions, { windowBits })
      );
      this._inflate[kPerMessageDeflate] = this;
      this._inflate[kTotalLength] = 0;
      this._inflate[kBuffers] = [];
      this._inflate.on('error', inflateOnError);
      this._inflate.on('data', inflateOnData);
    }

    this._inflate[kCallback] = callback;
    this._inflate[kWriteInProgress] = true;

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

      if (
        (fin && this.params[`${endpoint}_no_context_takeover`]) ||
        this._inflate[kPendingClose]
      ) {
        this._inflate.close();
        this._inflate = null;
      } else {
        this._inflate[kWriteInProgress] = false;
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];
      }

      callback(null, data);
    });
  }

  /**
   * Compress data.
   *
   * @param {Buffer} data Data to compress
   * @param {Boolean} fin Specifies whether or not this is the last fragment
   * @param {Function} callback Callback
   * @private
   */
  _compress (data, fin, callback) {
    if (!data || data.length === 0) {
      process.nextTick(callback, null, EMPTY_BLOCK);
      return;
    }

    const endpoint = this._isServer ? 'server' : 'client';

    if (!this._deflate) {
      const key = `${endpoint}_max_window_bits`;
      const windowBits = typeof this.params[key] !== 'number'
        ? zlib.Z_DEFAULT_WINDOWBITS
        : this.params[key];

      this._deflate = zlib.createDeflateRaw(
        Object.assign(
          // TODO deprecate memLevel/level and recommend zlibDeflateOptions instead
          {
            memLevel: this._options.memLevel,
            level: this._options.level
          },
          this._options.zlibDeflateOptions,
          { windowBits }
        )
      );

      this._deflate[kTotalLength] = 0;
      this._deflate[kBuffers] = [];

      //
      // `zlib.DeflateRaw` emits an `'error'` event only when an attempt to use
      // it is made after it has already been closed. This cannot happen here,
      // so we only add a listener for the `'data'` event.
      //
      this._deflate.on('data', deflateOnData);
    }

    this._deflate[kWriteInProgress] = true;

    this._deflate.write(data);
    this._deflate.flush(zlib.Z_SYNC_FLUSH, () => {
      var data = bufferUtil.concat(
        this._deflate[kBuffers],
        this._deflate[kTotalLength]
      );

      if (fin) data = data.slice(0, data.length - 4);

      if (
        (fin && this.params[`${endpoint}_no_context_takeover`]) ||
        this._deflate[kPendingClose]
      ) {
        this._deflate.close();
        this._deflate = null;
      } else {
        this._deflate[kWriteInProgress] = false;
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
      }

      callback(null, data);
    });
  }
}

module.exports = PerMessageDeflate;

/**
 * The listener of the `zlib.DeflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function deflateOnData (chunk) {
  this[kBuffers].push(chunk);
  this[kTotalLength] += chunk.length;
}

/**
 * The listener of the `zlib.InflateRaw` stream `'data'` event.
 *
 * @param {Buffer} chunk A chunk of data
 * @private
 */
function inflateOnData (chunk) {
  this[kTotalLength] += chunk.length;

  if (
    this[kPerMessageDeflate]._maxPayload < 1 ||
    this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
  ) {
    this[kBuffers].push(chunk);
    return;
  }

  this[kError] = new RangeError('Max payload size exceeded');
  this[kError][constants.kStatusCode] = 1009;
  this.removeListener('data', inflateOnData);
  this.reset();
}

/**
 * The listener of the `zlib.InflateRaw` stream `'error'` event.
 *
 * @param {Error} err The emitted error
 * @private
 */
function inflateOnError (err) {
  //
  // There is no need to call `Zlib#close()` as the handle is automatically
  // closed when an error is emitted.
  //
  this[kPerMessageDeflate]._inflate = null;
  err[constants.kStatusCode] = 1007;
  this[kCallback](err);
}
