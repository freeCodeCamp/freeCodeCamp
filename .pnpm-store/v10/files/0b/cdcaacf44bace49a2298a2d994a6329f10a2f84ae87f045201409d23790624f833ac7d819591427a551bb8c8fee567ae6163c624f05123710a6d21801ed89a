/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { CDPSession } from '../api/CDPSession.js';
/**
 * @public
 */
export interface TracingOptions {
    path?: string;
    screenshots?: boolean;
    categories?: string[];
}
/**
 * The Tracing class exposes the tracing audit interface.
 * @remarks
 * You can use `tracing.start` and `tracing.stop` to create a trace file
 * which can be opened in Chrome DevTools or {@link https://chromedevtools.github.io/timeline-viewer/ | timeline viewer}.
 *
 * @example
 *
 * ```ts
 * await page.tracing.start({path: 'trace.json'});
 * await page.goto('https://www.google.com');
 * await page.tracing.stop();
 * ```
 *
 * @public
 */
export declare class Tracing {
    #private;
    /**
     * @internal
     */
    constructor(client: CDPSession);
    /**
     * @internal
     */
    updateClient(client: CDPSession): void;
    /**
     * Starts a trace for the current page.
     * @remarks
     * Only one trace can be active at a time per browser.
     *
     * @param options - Optional `TracingOptions`.
     */
    start(options?: TracingOptions): Promise<void>;
    /**
     * Stops a trace started with the `start` method.
     * @returns Promise which resolves to buffer with trace data.
     */
    stop(): Promise<Uint8Array | undefined>;
}
//# sourceMappingURL=Tracing.d.ts.map