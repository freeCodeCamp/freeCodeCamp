/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as chromeHeadlessShell from './chrome-headless-shell.js';
import * as chrome from './chrome.js';
import * as chromedriver from './chromedriver.js';
import * as chromium from './chromium.js';
import * as firefox from './firefox.js';
import { Browser, BrowserPlatform, BrowserTag, ChromeReleaseChannel, type ProfileOptions } from './types.js';
export type { ProfileOptions };
export declare const downloadUrls: {
    chromedriver: typeof chromedriver.resolveDownloadUrl;
    "chrome-headless-shell": typeof chromeHeadlessShell.resolveDownloadUrl;
    chrome: typeof chrome.resolveDownloadUrl;
    chromium: typeof chromium.resolveDownloadUrl;
    firefox: typeof firefox.resolveDownloadUrl;
};
export declare const downloadPaths: {
    chromedriver: typeof chromedriver.resolveDownloadPath;
    "chrome-headless-shell": typeof chromeHeadlessShell.resolveDownloadPath;
    chrome: typeof chrome.resolveDownloadPath;
    chromium: typeof chromium.resolveDownloadPath;
    firefox: typeof firefox.resolveDownloadPath;
};
export declare const executablePathByBrowser: {
    chromedriver: typeof chromedriver.relativeExecutablePath;
    "chrome-headless-shell": typeof chromeHeadlessShell.relativeExecutablePath;
    chrome: typeof chrome.relativeExecutablePath;
    chromium: typeof chromium.relativeExecutablePath;
    firefox: typeof firefox.relativeExecutablePath;
};
export declare const versionComparators: {
    chromedriver: typeof chromeHeadlessShell.compareVersions;
    "chrome-headless-shell": typeof chromeHeadlessShell.compareVersions;
    chrome: typeof chromeHeadlessShell.compareVersions;
    chromium: typeof chromium.compareVersions;
    firefox: typeof firefox.compareVersions;
};
export { Browser, BrowserPlatform, ChromeReleaseChannel };
/**
 * @public
 */
export declare function resolveBuildId(browser: Browser, platform: BrowserPlatform, tag: string | BrowserTag): Promise<string>;
/**
 * @public
 */
export declare function createProfile(browser: Browser, opts: ProfileOptions): Promise<void>;
/**
 * @public
 *
 * Get's the first resolved system path
 */
export declare function resolveSystemExecutablePath(browser: Browser, platform: BrowserPlatform, channel: ChromeReleaseChannel): string;
/**
 * Returns the expected default user data dir for the given channel. It does not
 * check if the dir actually exists.
 *
 * @public
 */
export declare function resolveDefaultUserDataDir(browser: Browser, platform: BrowserPlatform, channel: ChromeReleaseChannel): string;
/**
 * @internal
 *
 * Returns multiple paths where the executable may be located at on the current system
 * ordered by likelihood (based on heuristics).
 */
export declare function resolveSystemExecutablePaths(browser: Browser, platform: BrowserPlatform, channel: ChromeReleaseChannel): [string, ...string[]];
/**
 * Returns a version comparator for the given browser that can be used to sort
 * browser versions.
 *
 * @public
 */
export declare function getVersionComparator(browser: Browser): (a: string, b: string) => number;
//# sourceMappingURL=browser-data.d.ts.map