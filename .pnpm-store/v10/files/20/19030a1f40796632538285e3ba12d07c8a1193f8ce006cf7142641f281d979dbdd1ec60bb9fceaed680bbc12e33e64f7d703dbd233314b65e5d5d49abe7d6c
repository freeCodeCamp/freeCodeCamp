/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Browser, BrowserPlatform } from './browser-data/browser-data.js';
import { InstalledBrowser } from './Cache.js';
import type { BrowserProvider } from './provider.js';
/**
 * @public
 */
export interface InstallOptions {
    /**
     * Determines the path to download browsers to.
     */
    cacheDir: string;
    /**
     * Determines which platform the browser will be suited for.
     *
     * @defaultValue **Auto-detected.**
     */
    platform?: BrowserPlatform;
    /**
     * Determines which browser to install.
     */
    browser: Browser;
    /**
     * Determines which buildId to download. BuildId should uniquely identify
     * binaries and they are used for caching.
     */
    buildId: string;
    /**
     * An alias for the provided `buildId`. It will be used to maintain local
     * metadata to support aliases in the `launch` command.
     *
     * @example 'canary'
     */
    buildIdAlias?: string;
    /**
     * Provides information about the progress of the download. If set to
     * 'default', the default callback implementing a progress bar will be
     * used.
     */
    downloadProgressCallback?: 'default' | ((downloadedBytes: number, totalBytes: number) => void);
    /**
     * Determines the host that will be used for downloading.
     *
     * @defaultValue Either
     *
     * - https://storage.googleapis.com/chrome-for-testing-public or
     * - https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central
     *
     */
    baseUrl?: string;
    /**
     * Whether to unpack and install browser archives.
     *
     * @defaultValue `true`
     */
    unpack?: boolean;
    /**
     * @internal
     * @defaultValue `false`
     */
    forceFallbackForTesting?: boolean;
    /**
     * Whether to attempt to install system-level dependencies required
     * for the browser.
     *
     * Only supported for Chrome on Debian or Ubuntu.
     * Requires system-level privileges to run `apt-get`.
     *
     * @defaultValue `false`
     */
    installDeps?: boolean;
    /**
     * Custom provider implementation for alternative download sources.
     *
     * If not provided, uses the default provider.
     * Multiple providers can be chained - they will be tried in order.
     * The default provider is automatically added as the final fallback.
     *
     * ⚠️ **IMPORTANT**: Custom providers are NOT officially supported by
     * Puppeteer.
     *
     * By using custom providers, you accept full responsibility for:
     *
     * - **Version compatibility**: Different platforms may receive different
     *   binary versions
     * - **Archive compatibility**: Binary structure must match Puppeteer's expectations
     * - **Feature integration**: Browser launch and other Puppeteer features may not work
     * - **Testing**: You must validate that downloaded binaries work with Puppeteer
     *
     * **Puppeteer only tests and guarantees compatibility with default binaries.**
     *
     * @example
     *
     * ```typescript
     * import {ElectronProvider} from './puppeteer-browser-provider-electron.js';
     *
     * await install({
     *   browser: Browser.CHROMEDRIVER,
     *   buildId: '142.0.7444.175',
     *   cacheDir: './cache',
     *   providers: [
     *     new ElectronProvider(), // Try Electron releases first
     *     // Falls back to Chrome for Testing automatically
     *   ],
     * });
     * ```
     */
    providers?: BrowserProvider[];
}
/**
 * Downloads and unpacks the browser archive according to the
 * {@link InstallOptions}.
 *
 * @returns a {@link InstalledBrowser} instance.
 *
 * @public
 */
export declare function install(options: InstallOptions & {
    unpack?: true;
}): Promise<InstalledBrowser>;
/**
 * Downloads the browser archive according to the {@link InstallOptions} without
 * unpacking.
 *
 * @returns the absolute path to the archive.
 *
 * @public
 */
export declare function install(options: InstallOptions & {
    unpack: false;
}): Promise<string>;
/**
 * @public
 */
export interface UninstallOptions {
    /**
     * Determines the platform for the browser binary.
     *
     * @defaultValue **Auto-detected.**
     */
    platform?: BrowserPlatform;
    /**
     * The path to the root of the cache directory.
     */
    cacheDir: string;
    /**
     * Determines which browser to uninstall.
     */
    browser: Browser;
    /**
     * The browser build to uninstall
     */
    buildId: string;
}
/**
 *
 * @public
 */
export declare function uninstall(options: UninstallOptions): Promise<void>;
/**
 * @public
 */
export interface GetInstalledBrowsersOptions {
    /**
     * The path to the root of the cache directory.
     */
    cacheDir: string;
}
/**
 * Returns metadata about browsers installed in the cache directory.
 *
 * @public
 */
export declare function getInstalledBrowsers(options: GetInstalledBrowsersOptions): Promise<InstalledBrowser[]>;
/**
 * @public
 */
export declare function canDownload(options: InstallOptions): Promise<boolean>;
/**
 * Retrieves a URL for downloading the binary archive of a given browser.
 *
 * The archive is bound to the specific platform and build ID specified.
 *
 * @public
 */
export declare function getDownloadUrl(browser: Browser, platform: BrowserPlatform, buildId: string, baseUrl?: string): URL;
/**
 * @internal
 */
export declare function makeProgressCallback(browser: Browser, buildId: string): Promise<(downloadedBytes: number, totalBytes: number) => void>;
//# sourceMappingURL=install.d.ts.map