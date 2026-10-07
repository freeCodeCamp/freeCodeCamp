// Type definitions for pino-abstract-transport 0.4.0
// Project: https://github.com/pinojs/pino-abstract-transport#readme
// Definitions by: Diyar Oktay <https://github.com/windupbird144>

/// <reference types="node" />

import { Transform } from "stream";

type BuildOptions = {
  /**
   * `parseLine(line)` a function that is used to parse line received from pino.
   * @default JSON.parse
   */
  parseLine?: (line: string) => unknown;

  /**
   * `parse` an option to change to data format passed to build function.
   * @default undefined
   *
   */
  parse?: "lines";

  /**
   * `close(err, cb)` a function that is called to shutdown the transport.
   * It's called both on error and non-error shutdowns. It can also return
   * a promise. In this case discard the the cb argument.
   *
   * @example
   * ```typescript
   * {
   *   close: function (err, cb) {
   *     process.nextTick(cb, err)
   *   }
   * }
   * ```
   * */
  close?: (err: Error, cb: Function) => void | Promise<void>;

  /**
   * `metadata` If set to false, do not add metadata properties to the returned stream
   */
  metadata?: false;

  /**
   * `expectPinoConfig` If set to true, the transport will wait for pino to send its
   * configuration before starting to process logs.
   */
  expectPinoConfig?: boolean;
};

/**
 * Pass these options to wrap the split2 stream and
 * the returned stream into a Duplex
 */
type EnablePipelining = BuildOptions & {
  enablePipelining: true;
};

/**
 * Create a split2 instance and returns it. This same instance is also passed
 * to the given function, which is called after pino has sent its configuration.
 *
 * @returns {Promise<Transform>} the split2 instance
 */
declare function build(
  fn: (transform: Transform & build.OnUnknown) => void | Promise<void>,
  opts: BuildOptions & { expectPinoConfig: true }
): Promise<Transform & build.OnUnknown>;

/**
 * Create a split2 instance and returns it. This same instance is also passed
 * to the given function, which is called synchronously.
 *
 * @returns {Transform} the split2 instance
 */
declare function build(
  fn: (transform: Transform & build.OnUnknown) => void | Promise<void>,
  opts?: BuildOptions
): Transform & build.OnUnknown;

/**
 * Creates a split2 instance and passes it to the given function, which is called
 * after pino has sent its configuration. Then wraps the split2 instance and
 * the returned stream into a Duplex, so they can be concatenated into multiple
 * transports.
 *
 * @returns {Promise<Transform>} the wrapped split2 instance
 */
declare function build(
  fn: (transform: Transform & build.OnUnknown) => Transform & build.OnUnknown,
  opts: EnablePipelining & { expectPinoConfig: true }
): Promise<Transform>;

/**
 * Creates a split2 instance and passes it to the given function, which is called
 * synchronously. Then wraps the split2 instance and the returned stream into a
 * Duplex, so they can be concatenated into multiple transports.
 *
 * @returns {Transform} the wrapped split2 instance
 */
declare function build(
  fn: (transform: Transform & build.OnUnknown) => Transform & build.OnUnknown,
  opts: EnablePipelining
): Transform;

declare namespace build {
  export interface OnUnknown {
    /**
     * `unknown` is the event emitted where an unparsable line is found
     *
     * @param event 'unknown'
     * @param line the unparsable line
     * @param error the error that was thrown when parsing the line
     */
    on(
      event: "unknown",
      listener: (line: string, error: unknown) => void
    ): void;
  }
}

export = build;
