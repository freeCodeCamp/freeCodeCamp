/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type Debug from 'debug';

import {isNode} from '../environment.js';

declare global {
  const __PUPPETEER_DEBUG: string;
}

/**
 * @internal
 */
let debugModule: typeof Debug | null = null;
/**
 * @internal
 */
export async function importDebug(): Promise<typeof Debug> {
  if (!debugModule) {
    debugModule = (await import('debug')).default;
  }
  return debugModule;
}

/**
 * A debug function that can be used in any environment.
 *
 * @remarks
 * If used in Node, it falls back to the
 * {@link https://www.npmjs.com/package/debug | debug module}. In the browser it
 * uses `console.log`.
 *
 * In Node, use the `DEBUG` environment variable to control logging:
 *
 * ```
 * DEBUG=* // logs all channels
 * DEBUG=foo // logs the `foo` channel
 * DEBUG=foo* // logs any channels starting with `foo`
 * ```
 *
 * In the browser, set `window.__PUPPETEER_DEBUG` to a string:
 *
 * ```
 * window.__PUPPETEER_DEBUG='*'; // logs all channels
 * window.__PUPPETEER_DEBUG='foo'; // logs the `foo` channel
 * window.__PUPPETEER_DEBUG='foo*'; // logs any channels starting with `foo`
 * ```
 *
 * @example
 *
 * ```
 * const log = debug('Page');
 *
 * log('new page created')
 * // logs "Page: new page created"
 * ```
 *
 * @param prefix - this will be prefixed to each log.
 * @returns a function that can be called to log to that debug channel.
 *
 * @internal
 */
export const debug = (prefix: string): ((...args: unknown[]) => void) => {
  if (isNode) {
    return async (...logArgs: unknown[]) => {
      if (captureLogs) {
        capturedLogs.push(prefix + logArgs);
      }
      (await importDebug())(prefix)(logArgs);
    };
  }

  return (...logArgs: unknown[]): void => {
    const debugLevel = (globalThis as any).__PUPPETEER_DEBUG;
    if (!debugLevel) {
      return;
    }

    const everythingShouldBeLogged = debugLevel === '*';

    const prefixMatchesDebugLevel =
      everythingShouldBeLogged ||
      /**
       * If the debug level is `foo*`, that means we match any prefix that
       * starts with `foo`. If the level is `foo`, we match only the prefix
       * `foo`.
       */
      (debugLevel.endsWith('*')
        ? prefix.startsWith(debugLevel)
        : prefix === debugLevel);

    if (!prefixMatchesDebugLevel) {
      return;
    }

    console.log(`${prefix}:`, ...logArgs);
  };
};

/**
 * @internal
 */
let capturedLogs: string[] = [];
/**
 * @internal
 */
let captureLogs = false;

/**
 * @internal
 */
export function setLogCapture(value: boolean): void {
  capturedLogs = [];
  captureLogs = value;
}

/**
 * @internal
 */
export function getCapturedLogs(): string[] {
  return capturedLogs;
}
