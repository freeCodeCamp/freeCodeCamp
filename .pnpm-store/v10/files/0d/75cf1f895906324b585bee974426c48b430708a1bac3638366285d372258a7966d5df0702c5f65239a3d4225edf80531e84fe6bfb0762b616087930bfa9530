/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { SupportedBrowser } from './SupportedBrowser.js';
/**
 * Defines experiment options for Puppeteer.
 *
 * See individual properties for more information.
 *
 * @public
 */
export type ExperimentsConfiguration = Record<string, never>;
/**
 * Defines options to configure Puppeteer's behavior during installation and
 * runtime.
 *
 * See individual properties for more information.
 *
 * @public
 */
export interface Configuration {
    /**
     * Defines the directory to be used by Puppeteer for caching.
     *
     * Can be overridden by `PUPPETEER_CACHE_DIR`.
     *
     * @defaultValue `path.join(os.homedir(), '.cache', 'puppeteer')`
     */
    cacheDirectory?: string;
    /**
     * Specifies an executable path to be used in
     * {@link PuppeteerNode.launch | puppeteer.launch}.
     *
     * Can be overridden by `PUPPETEER_EXECUTABLE_PATH`.
     *
     * @defaultValue **Auto-computed.**
     */
    executablePath?: string;
    /**
     * Specifies which browser you'd like Puppeteer to use.
     *
     * Can be overridden by `PUPPETEER_BROWSER`.
     *
     * @defaultValue `chrome`
     */
    defaultBrowser?: SupportedBrowser;
    /**
     * Defines the directory to be used by Puppeteer for creating temporary files.
     *
     * Can be overridden by `PUPPETEER_TMP_DIR`.
     *
     * @defaultValue `os.tmpdir()`
     */
    temporaryDirectory?: string;
    /**
     * Tells Puppeteer to not download during installation.
     *
     * Can be overridden by `PUPPETEER_SKIP_DOWNLOAD`.
     */
    skipDownload?: boolean;
    /**
     * Tells Puppeteer to log at the given level.
     *
     * @defaultValue `warn`
     */
    logLevel?: 'silent' | 'error' | 'warn';
    /**
     * Defines experimental options for Puppeteer.
     */
    experiments?: ExperimentsConfiguration;
    chrome?: ChromeSettings;
    ['chrome-headless-shell']?: ChromeHeadlessShellSettings;
    firefox?: FirefoxSettings;
}
/**
 * @public
 */
export interface ChromeSettings {
    /**
     * Tells Puppeteer to not download the browser during installation.
     *
     * Can be overridden by `PUPPETEER_CHROME_SKIP_DOWNLOAD`.
     *
     * @defaultValue false
     */
    skipDownload?: boolean;
    /**
     * Specifies the URL prefix that is used to download the browser.
     *
     * Can be overridden by `PUPPETEER_CHROME_DOWNLOAD_BASE_URL`.
     *
     * @remarks
     * This must include the protocol and may even need a path prefix.
     * This must **not** include a trailing slash similar to the default.
     *
     * @defaultValue https://storage.googleapis.com/chrome-for-testing-public
     */
    downloadBaseUrl?: string;
    /**
     * Specifies a certain version of the browser you'd like Puppeteer to use.
     *
     * Can be overridden by `PUPPETEER_CHROME_VERSION`
     * or `PUPPETEER_SKIP_CHROME_DOWNLOAD`.
     *
     * See {@link PuppeteerNode.launch | puppeteer.launch} on how executable path
     * is inferred.
     *
     * @example 119.0.6045.105
     * @defaultValue The pinned browser version supported by the current Puppeteer
     * version.
     */
    version?: string;
}
/**
 * @public
 */
export interface ChromeHeadlessShellSettings {
    /**
     * Tells Puppeteer to not download the browser during installation.
     *
     * Can be overridden by `PUPPETEER_CHROME_HEADLESS_SHELL_SKIP_DOWNLOAD`
     * or `PUPPETEER_SKIP_CHROME_HEADLESS_SHELL_DOWNLOAD`.
     *
     * @defaultValue false
     */
    skipDownload?: boolean;
    /**
     * Specifies the URL prefix that is used to download the browser.
     *
     * Can be overridden by `PUPPETEER_CHROME_HEADLESS_SHELL_DOWNLOAD_BASE_URL`.
     *
     * @remarks
     * This must include the protocol and may even need a path prefix.
     * This must **not** include a trailing slash similar to the default.
     *
     * @defaultValue https://storage.googleapis.com/chrome-for-testing-public
     */
    downloadBaseUrl?: string;
    /**
     * Specifies a certain version of the browser you'd like Puppeteer to use.
     *
     * Can be overridden by `PUPPETEER_CHROME_HEADLESS_SHELL_VERSION`.
     *
     * See {@link PuppeteerNode.launch | puppeteer.launch} on how executable path
     * is inferred.
     *
     * @example 119.0.6045.105
     * @defaultValue The pinned browser version supported by the current Puppeteer
     * version.
     */
    version?: string;
}
/**
 * @public
 */
export interface FirefoxSettings {
    /**
     * Tells Puppeteer to not download the browser during installation.
     *
     * Can be overridden by `PUPPETEER_FIREFOX_SKIP_DOWNLOAD`.
     *
     * @defaultValue true
     */
    skipDownload?: boolean;
    /**
     * Specifies the URL prefix that is used to download the browser.
     *
     * Can be overridden by `PUPPETEER_FIREFOX_DOWNLOAD_BASE_URL`.
     *
     * @remarks
     * This must include the protocol and may even need a path prefix.
     * This must **not** include a trailing slash similar to the default.
     *
     * @defaultValue https://archive.mozilla.org/pub/firefox/releases
     */
    downloadBaseUrl?: string;
    /**
     * Specifies a certain version of the browser you'd like Puppeteer to use.
     *
     * Can be overridden by `PUPPETEER_FIREFOX_VERSION`.
     *
     * See {@link PuppeteerNode.launch | puppeteer.launch} on how executable path
     * is inferred.
     *
     * @example stable_129.0
     * @defaultValue The pinned browser version supported by the current Puppeteer
     * version.
     */
    version?: string;
}
//# sourceMappingURL=Configuration.d.ts.map