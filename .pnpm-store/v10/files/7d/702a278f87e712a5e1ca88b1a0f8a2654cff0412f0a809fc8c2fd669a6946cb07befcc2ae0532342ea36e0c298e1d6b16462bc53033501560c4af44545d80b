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
import { Browser, BrowserPlatform, BrowserTag, ChromeReleaseChannel, } from './types.js';
export const downloadUrls = {
    [Browser.CHROMEDRIVER]: chromedriver.resolveDownloadUrl,
    [Browser.CHROMEHEADLESSSHELL]: chromeHeadlessShell.resolveDownloadUrl,
    [Browser.CHROME]: chrome.resolveDownloadUrl,
    [Browser.CHROMIUM]: chromium.resolveDownloadUrl,
    [Browser.FIREFOX]: firefox.resolveDownloadUrl,
};
export const downloadPaths = {
    [Browser.CHROMEDRIVER]: chromedriver.resolveDownloadPath,
    [Browser.CHROMEHEADLESSSHELL]: chromeHeadlessShell.resolveDownloadPath,
    [Browser.CHROME]: chrome.resolveDownloadPath,
    [Browser.CHROMIUM]: chromium.resolveDownloadPath,
    [Browser.FIREFOX]: firefox.resolveDownloadPath,
};
export const executablePathByBrowser = {
    [Browser.CHROMEDRIVER]: chromedriver.relativeExecutablePath,
    [Browser.CHROMEHEADLESSSHELL]: chromeHeadlessShell.relativeExecutablePath,
    [Browser.CHROME]: chrome.relativeExecutablePath,
    [Browser.CHROMIUM]: chromium.relativeExecutablePath,
    [Browser.FIREFOX]: firefox.relativeExecutablePath,
};
export const versionComparators = {
    [Browser.CHROMEDRIVER]: chromedriver.compareVersions,
    [Browser.CHROMEHEADLESSSHELL]: chromeHeadlessShell.compareVersions,
    [Browser.CHROME]: chrome.compareVersions,
    [Browser.CHROMIUM]: chromium.compareVersions,
    [Browser.FIREFOX]: firefox.compareVersions,
};
export { Browser, BrowserPlatform, ChromeReleaseChannel };
/**
 * @internal
 */
async function resolveBuildIdForBrowserTag(browser, platform, tag) {
    switch (browser) {
        case Browser.FIREFOX:
            switch (tag) {
                case BrowserTag.LATEST:
                    return await firefox.resolveBuildId(firefox.FirefoxChannel.NIGHTLY);
                case BrowserTag.BETA:
                    return await firefox.resolveBuildId(firefox.FirefoxChannel.BETA);
                case BrowserTag.NIGHTLY:
                    return await firefox.resolveBuildId(firefox.FirefoxChannel.NIGHTLY);
                case BrowserTag.DEVEDITION:
                    return await firefox.resolveBuildId(firefox.FirefoxChannel.DEVEDITION);
                case BrowserTag.STABLE:
                    return await firefox.resolveBuildId(firefox.FirefoxChannel.STABLE);
                case BrowserTag.ESR:
                    return await firefox.resolveBuildId(firefox.FirefoxChannel.ESR);
                case BrowserTag.CANARY:
                case BrowserTag.DEV:
                    throw new Error(`${tag.toUpperCase()} is not available for Firefox`);
            }
        case Browser.CHROME: {
            switch (tag) {
                case BrowserTag.LATEST:
                    return await chrome.resolveBuildId(ChromeReleaseChannel.CANARY);
                case BrowserTag.BETA:
                    return await chrome.resolveBuildId(ChromeReleaseChannel.BETA);
                case BrowserTag.CANARY:
                    return await chrome.resolveBuildId(ChromeReleaseChannel.CANARY);
                case BrowserTag.DEV:
                    return await chrome.resolveBuildId(ChromeReleaseChannel.DEV);
                case BrowserTag.STABLE:
                    return await chrome.resolveBuildId(ChromeReleaseChannel.STABLE);
                case BrowserTag.NIGHTLY:
                case BrowserTag.DEVEDITION:
                case BrowserTag.ESR:
                    throw new Error(`${tag.toUpperCase()} is not available for Chrome`);
            }
        }
        case Browser.CHROMEDRIVER: {
            switch (tag) {
                case BrowserTag.LATEST:
                case BrowserTag.CANARY:
                    return await chromedriver.resolveBuildId(ChromeReleaseChannel.CANARY);
                case BrowserTag.BETA:
                    return await chromedriver.resolveBuildId(ChromeReleaseChannel.BETA);
                case BrowserTag.DEV:
                    return await chromedriver.resolveBuildId(ChromeReleaseChannel.DEV);
                case BrowserTag.STABLE:
                    return await chromedriver.resolveBuildId(ChromeReleaseChannel.STABLE);
                case BrowserTag.NIGHTLY:
                case BrowserTag.DEVEDITION:
                case BrowserTag.ESR:
                    throw new Error(`${tag.toUpperCase()} is not available for ChromeDriver`);
            }
        }
        case Browser.CHROMEHEADLESSSHELL: {
            switch (tag) {
                case BrowserTag.LATEST:
                case BrowserTag.CANARY:
                    return await chromeHeadlessShell.resolveBuildId(ChromeReleaseChannel.CANARY);
                case BrowserTag.BETA:
                    return await chromeHeadlessShell.resolveBuildId(ChromeReleaseChannel.BETA);
                case BrowserTag.DEV:
                    return await chromeHeadlessShell.resolveBuildId(ChromeReleaseChannel.DEV);
                case BrowserTag.STABLE:
                    return await chromeHeadlessShell.resolveBuildId(ChromeReleaseChannel.STABLE);
                case BrowserTag.NIGHTLY:
                case BrowserTag.DEVEDITION:
                case BrowserTag.ESR:
                    throw new Error(`${tag} is not available for chrome-headless-shell`);
            }
        }
        case Browser.CHROMIUM:
            switch (tag) {
                case BrowserTag.LATEST:
                    return await chromium.resolveBuildId(platform);
                case BrowserTag.NIGHTLY:
                case BrowserTag.CANARY:
                case BrowserTag.DEV:
                case BrowserTag.DEVEDITION:
                case BrowserTag.BETA:
                case BrowserTag.STABLE:
                case BrowserTag.ESR:
                    throw new Error(`${tag} is not supported for Chromium. Use 'latest' instead.`);
            }
    }
}
/**
 * @public
 */
export async function resolveBuildId(browser, platform, tag) {
    const browserTag = tag;
    if (Object.values(BrowserTag).includes(browserTag)) {
        return await resolveBuildIdForBrowserTag(browser, platform, browserTag);
    }
    switch (browser) {
        case Browser.FIREFOX:
            return tag;
        case Browser.CHROME:
            const chromeResult = await chrome.resolveBuildId(tag);
            if (chromeResult) {
                return chromeResult;
            }
            return tag;
        case Browser.CHROMEDRIVER:
            const chromeDriverResult = await chromedriver.resolveBuildId(tag);
            if (chromeDriverResult) {
                return chromeDriverResult;
            }
            return tag;
        case Browser.CHROMEHEADLESSSHELL:
            const chromeHeadlessShellResult = await chromeHeadlessShell.resolveBuildId(tag);
            if (chromeHeadlessShellResult) {
                return chromeHeadlessShellResult;
            }
            return tag;
        case Browser.CHROMIUM:
            return tag;
    }
}
/**
 * @public
 */
export async function createProfile(browser, opts) {
    switch (browser) {
        case Browser.FIREFOX:
            return await firefox.createProfile(opts);
        case Browser.CHROME:
        case Browser.CHROMIUM:
            throw new Error(`Profile creation is not support for ${browser} yet`);
    }
}
/**
 * @public
 *
 * Get's the first resolved system path
 */
export function resolveSystemExecutablePath(browser, platform, channel) {
    switch (browser) {
        case Browser.CHROMEDRIVER:
        case Browser.CHROMEHEADLESSSHELL:
        case Browser.FIREFOX:
        case Browser.CHROMIUM:
            throw new Error(`System browser detection is not supported for ${browser} yet.`);
        case Browser.CHROME:
            return chrome.resolveSystemExecutablePaths(platform, channel)[0];
    }
}
/**
 * Returns the expected default user data dir for the given channel. It does not
 * check if the dir actually exists.
 *
 * @public
 */
export function resolveDefaultUserDataDir(browser, platform, channel) {
    switch (browser) {
        case Browser.CHROMEDRIVER:
        case Browser.CHROMEHEADLESSSHELL:
        case Browser.FIREFOX:
        case Browser.CHROMIUM:
            throw new Error(`Default user dir detection is not supported for ${browser} yet.`);
        case Browser.CHROME:
            return chrome.resolveDefaultUserDataDir(platform, channel);
    }
}
/**
 * @internal
 *
 * Returns multiple paths where the executable may be located at on the current system
 * ordered by likelihood (based on heuristics).
 */
export function resolveSystemExecutablePaths(browser, platform, channel) {
    switch (browser) {
        case Browser.CHROMEDRIVER:
        case Browser.CHROMEHEADLESSSHELL:
        case Browser.FIREFOX:
        case Browser.CHROMIUM:
            throw new Error(`System browser detection is not supported for ${browser} yet.`);
        case Browser.CHROME:
            return chrome.resolveSystemExecutablePaths(platform, channel);
    }
}
/**
 * Returns a version comparator for the given browser that can be used to sort
 * browser versions.
 *
 * @public
 */
export function getVersionComparator(browser) {
    return versionComparators[browser];
}
//# sourceMappingURL=browser-data.js.map