/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { downloadUrls, executablePathByBrowser, } from './browser-data/browser-data.js';
/**
 * Default provider implementation that uses default sources.
 * This is the standard provider used by Puppeteer.
 *
 * @public
 */
export class DefaultProvider {
    #baseUrl;
    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }
    supports(_options) {
        // Default provider supports all browsers
        return true;
    }
    getDownloadUrl(options) {
        return this.#getDownloadUrl(options.browser, options.platform, options.buildId);
    }
    #getDownloadUrl(browser, platform, buildId) {
        return new URL(downloadUrls[browser](platform, buildId, this.#baseUrl));
    }
    getExecutablePath(options) {
        return executablePathByBrowser[options.browser](options.platform, options.buildId);
    }
    getName() {
        return 'DefaultProvider';
    }
}
//# sourceMappingURL=DefaultProvider.js.map