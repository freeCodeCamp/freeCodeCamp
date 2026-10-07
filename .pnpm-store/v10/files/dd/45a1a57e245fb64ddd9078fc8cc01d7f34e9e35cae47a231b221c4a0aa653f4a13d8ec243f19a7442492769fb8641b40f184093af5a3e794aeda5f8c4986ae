/**
 * @import {Encoding, Value} from 'micromark-util-types'
 */

/**
 * @typedef {import('micromark-util-types').Options} Options
 */

/**
 * @callback Callback
 *   Function called when write was successful.
 * @returns {undefined}
 *   Nothing.
 *
 * @typedef PipeOptions
 *   Configuration for piping.
 * @property {boolean | null | undefined} [end]
 *   Whether to end the destination stream when the source stream ends.
 *
 * @typedef {Omit<NodeJS.ReadableStream & NodeJS.WritableStream, 'isPaused' | 'pause' | 'read' | 'resume' | 'setEncoding' | 'unpipe' | 'unshift' | 'wrap'>} MinimalDuplex
 *   Duplex stream.
 */

import { EventEmitter } from 'node:events';
import { compile } from './lib/compile.js';
import { parse } from './lib/parse.js';
import { postprocess } from './lib/postprocess.js';
import { preprocess } from './lib/preprocess.js';

/**
 * Create a duplex (readable and writable) stream.
 *
 * Some of the work to parse markdown can be done streaming, but in the
 * end buffering is required.
 *
 * micromark does not handle errors for you, so you must handle errors on whatever
 * streams you pipe into it.
 * As markdown does not know errors, `micromark` itself does not emit errors.
 *
 * @param {Options | null | undefined} [options]
 *   Configuration (optional).
 * @returns {MinimalDuplex}
 *   Duplex stream.
 */
export function stream(options) {
  const prep = preprocess();
  const tokenize = parse(options).document().write;
  const comp = compile(options);
  /** @type {boolean} */
  let ended;
  const emitter = /** @type {MinimalDuplex} */new EventEmitter();
  // @ts-expect-error: fine.
  emitter.end = end;
  emitter.pipe = pipe;
  emitter.readable = true;
  emitter.writable = true;
  // @ts-expect-error: fine.
  emitter.write = write;
  return emitter;

  /**
   * Write a chunk into memory.
   *
   * @overload
   * @param {Value | null | undefined} [chunk]
   *   Slice of markdown to parse (`string` or `Uint8Array`).
   * @param {Encoding | null | undefined} [encoding]
   *   Character encoding to understand `chunk` as when it’s a `Uint8Array`
   *   (`string`, default: `'utf8'`).
   * @param {Callback | null | undefined} [callback]
   *   Function called when write was successful.
   * @returns {boolean}
   *   Whether write was successful.
   *
   * @overload
   * @param {Value | null | undefined} [chunk]
   *   Slice of markdown to parse (`string` or `Uint8Array`).
   * @param {Callback | null | undefined} [callback]
   *   Function called when write was successful.
   * @returns {boolean}
   *   Whether write was successful.
   *
   * @param {Value | null | undefined} [chunk]
   *   Slice of markdown to parse (`string` or `Uint8Array`).
   * @param {Callback | Encoding | null | undefined} [encoding]
   *   Character encoding to understand `chunk` as when it’s a `Uint8Array`
   *   (`string`, default: `'utf8'`).
   * @param {Callback | null | undefined} [callback]
   *   Function called when write was successful.
   * @returns {boolean}
   *   Whether write was successful.
   */
  function write(chunk, encoding, callback) {
    if (typeof encoding === 'function') {
      callback = encoding;
      encoding = undefined;
    }
    if (ended) {
      throw new Error('Did not expect `write` after `end`');
    }
    tokenize(prep(chunk || '', encoding));
    if (callback) {
      callback();
    }

    // Signal successful write.
    return true;
  }

  /**
   * End the writing.
   *
   * Passes all arguments as a final `write`.
   *
   * @overload
   * @param {Value | null | undefined} [chunk]
   *   Slice of markdown to parse (`string` or `Uint8Array`).
   * @param {Encoding | null | undefined} [encoding]
   *   Character encoding to understand `chunk` as when it’s a `Uint8Array`
   *   (`string`, default: `'utf8'`).
   * @param {Callback | null | undefined} [callback]
   *   Function called when write was successful.
   * @returns {boolean}
   *   Whether write was successful.
   *
   * @overload
   * @param {Value | null | undefined} [chunk]
   *   Slice of markdown to parse (`string` or `Uint8Array`).
   * @param {Callback | null | undefined} [callback]
   *   Function called when write was successful.
   * @returns {boolean}
   *   Whether write was successful.
   *
   * @overload
   * @param {Callback | null | undefined} [callback]
   *   Function called when write was successful.
   * @returns {boolean}
   *   Whether write was successful.
   *
   * @param {Callback | Value | null | undefined} [chunk]
   *   Slice of markdown to parse (`string` or `Uint8Array`).
   * @param {Callback | Encoding | null | undefined} [encoding]
   *   Character encoding to understand `chunk` as when it’s a `Uint8Array`
   *   (`string`, default: `'utf8'`).
   * @param {Callback | null | undefined} [callback]
   *   Function called when write was successful.
   * @returns {boolean}
   *   Whether write was successful.
   */
  function end(chunk, encoding, callback) {
    if (typeof chunk === 'function') {
      encoding = chunk;
      chunk = undefined;
    }
    if (typeof encoding === 'function') {
      callback = encoding;
      encoding = undefined;
    }
    write(chunk, encoding, callback);
    emitter.emit('data', comp(postprocess(tokenize(prep('', encoding, true)))));
    emitter.emit('end');
    ended = true;
    return true;
  }

  /**
   * Pipe the processor into a writable stream.
   *
   * Basically `Stream#pipe`, but inlined and simplified to keep the bundled
   * size down.
   * See: <https://github.com/nodejs/node/blob/43a5170/lib/internal/streams/legacy.js#L13>.
   *
   * @template {NodeJS.WritableStream} Stream
   *   Writable stream.
   * @param {Stream} destination
   *   Stream to pipe into.
   * @param {PipeOptions | null | undefined} [options]
   *   Configuration.
   * @returns {Stream}
   *   Destination stream.
   */
  function pipe(destination, options) {
    emitter.on('data', ondata);
    emitter.on('error', onerror);
    emitter.on('end', cleanup);
    emitter.on('close', cleanup);

    // If the `end` option is not supplied, `destination.end()` will be
    // called when the `end` or `close` events are received.
    // @ts-expect-error `_isStdio` is available on `std{err,out}`
    if (!destination._isStdio && (!options || options.end !== false)) {
      emitter.on('end', onend);
    }
    destination.on('error', onerror);
    destination.on('close', cleanup);
    destination.emit('pipe', emitter);
    return destination;

    /**
     * End destination stream.
     *
     * @returns {undefined}
     *   Nothing.
     */
    function onend() {
      if (destination.end) {
        destination.end();
      }
    }

    /**
     * Handle data.
     *
     * @param {string} chunk
     *   Data.
     * @returns {undefined}
     *   Nothing.
     */
    function ondata(chunk) {
      if (destination.writable) {
        destination.write(chunk);
      }
    }

    /**
     * Clean listeners.
     *
     * @returns {undefined}
     *   Nothing.
     */
    function cleanup() {
      emitter.removeListener('data', ondata);
      emitter.removeListener('end', onend);
      emitter.removeListener('error', onerror);
      emitter.removeListener('end', cleanup);
      emitter.removeListener('close', cleanup);
      destination.removeListener('error', onerror);
      destination.removeListener('close', cleanup);
    }

    /**
     * Close dangling pipes and handle unheard errors.
     *
     * @param {Error | null | undefined} [error]
     *   Error, if any.
     * @returns {undefined}
     *   Nothing.
     */
    function onerror(error) {
      cleanup();
      if (!emitter.listenerCount('error')) {
        throw error; // Unhandled stream error in pipe.
      }
    }
  }
}