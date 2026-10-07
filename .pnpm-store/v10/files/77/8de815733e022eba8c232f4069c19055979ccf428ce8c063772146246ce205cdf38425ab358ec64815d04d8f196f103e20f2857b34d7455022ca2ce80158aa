/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Browser, BrowserPlatform } from './browser-data/browser-data.js';
import type { BrowserProvider, DownloadOptions } from './provider.js';
/**
 * Default provider implementation that uses default sources.
 * This is the standard provider used by Puppeteer.
 *
 * @public
 */
export declare class DefaultProvider implements BrowserProvider {
    #private;
    constructor(baseUrl?: string);
    supports(_options: DownloadOptions): boolean;
    getDownloadUrl(options: DownloadOptions): URL;
    getExecutablePath(options: {
        browser: Browser;
        buildId: string;
        platform: BrowserPlatform;
    }): string;
    getName(): string;
}
//# sourceMappingURL=DefaultProvider.d.ts.map