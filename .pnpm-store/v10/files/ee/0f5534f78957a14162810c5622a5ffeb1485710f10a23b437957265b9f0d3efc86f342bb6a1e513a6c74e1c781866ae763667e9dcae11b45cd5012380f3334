/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type Debug from 'debug';
declare global {
    const __PUPPETEER_DEBUG: string;
}
/**
 * @internal
 */
export declare function importDebug(): Promise<typeof Debug>;
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
export declare const debug: (prefix: string) => ((...args: unknown[]) => void);
/**
 * @internal
 */
export declare function setLogCapture(value: boolean): void;
/**
 * @internal
 */
export declare function getCapturedLogs(): string[];
//# sourceMappingURL=Debug.d.ts.map