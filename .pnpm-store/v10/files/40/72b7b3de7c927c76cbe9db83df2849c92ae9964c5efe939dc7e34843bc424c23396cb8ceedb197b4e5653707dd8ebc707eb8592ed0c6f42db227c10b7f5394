/**
 * @license
 * Copyright 2026 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Browser, BrowserPlatform} from './browser-data/browser-data.js';
import {
  downloadUrls,
  executablePathByBrowser,
} from './browser-data/browser-data.js';
import type {BrowserProvider, DownloadOptions} from './provider.js';

/**
 * Default provider implementation that uses default sources.
 * This is the standard provider used by Puppeteer.
 *
 * @public
 */
export class DefaultProvider implements BrowserProvider {
  #baseUrl?: string;

  constructor(baseUrl?: string) {
    this.#baseUrl = baseUrl;
  }

  supports(_options: DownloadOptions): boolean {
    // Default provider supports all browsers
    return true;
  }

  getDownloadUrl(options: DownloadOptions): URL {
    return this.#getDownloadUrl(
      options.browser,
      options.platform,
      options.buildId,
    );
  }

  #getDownloadUrl(
    browser: Browser,
    platform: BrowserPlatform,
    buildId: string,
  ): URL {
    return new URL(downloadUrls[browser](platform, buildId, this.#baseUrl));
  }

  getExecutablePath(options: {
    browser: Browser;
    buildId: string;
    platform: BrowserPlatform;
  }): string {
    return executablePathByBrowser[options.browser](
      options.platform,
      options.buildId,
    );
  }

  getName(): string {
    return 'DefaultProvider';
  }
}
