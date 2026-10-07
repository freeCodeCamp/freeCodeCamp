/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Browser } from '../api/Browser.js';
import type { Configuration } from '../common/Configuration.js';
import type { ConnectOptions } from '../common/ConnectOptions.js';
import { type CommonPuppeteerSettings, Puppeteer } from '../common/Puppeteer.js';
import type { SupportedBrowser } from '../common/SupportedBrowser.js';
import type { ChromeReleaseChannel, LaunchOptions } from './LaunchOptions.js';
/**
 * Extends the main {@link Puppeteer} class with Node specific behaviour for
 * fetching and downloading browsers.
 *
 * If you're using Puppeteer in a Node environment, this is the class you'll get
 * when you run `require('puppeteer')` (or the equivalent ES `import`).
 *
 * @remarks
 * The most common method to use is {@link PuppeteerNode.launch | launch}, which
 * is used to launch and connect to a new browser instance.
 *
 * See {@link Puppeteer | the main Puppeteer class} for methods common to all
 * environments, such as {@link Puppeteer.connect}.
 *
 * @example
 * The following is a typical example of using Puppeteer to drive automation:
 *
 * ```ts
 * import puppeteer from 'puppeteer';
 *
 * const browser = await puppeteer.launch();
 * const page = await browser.newPage();
 * await page.goto('https://www.google.com');
 * // other actions...
 * await browser.close();
 * ```
 *
 * Once you have created a `page` you have access to a large API to interact
 * with the page, navigate, or find certain elements in that page.
 * The {@link Page | `page` documentation} lists all the available methods.
 *
 * @public
 */
export declare class PuppeteerNode extends Puppeteer {
    #private;
    configuration: () => Promise<Configuration>;
    /**
     * @internal
     */
    constructor(settings: {
        configuration?: () => Promise<Configuration>;
    } & CommonPuppeteerSettings);
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options: ConnectOptions): Promise<Browser>;
    /**
     * Launches a browser instance with given arguments and options when
     * specified.
     *
     * When using with `puppeteer-core`,
     * {@link LaunchOptions.executablePath | options.executablePath} or
     * {@link LaunchOptions.channel | options.channel} must be provided.
     *
     * @example
     * You can use {@link LaunchOptions.ignoreDefaultArgs | options.ignoreDefaultArgs}
     * to filter out `--mute-audio` from default arguments:
     *
     * ```ts
     * const browser = await puppeteer.launch({
     *   ignoreDefaultArgs: ['--mute-audio'],
     * });
     * ```
     *
     * @remarks
     * Puppeteer can also be used to control the Chrome browser, but it works best
     * with the version of Chrome for Testing downloaded by default.
     * There is no guarantee it will work with any other version. If Google Chrome
     * (rather than Chrome for Testing) is preferred, a
     * {@link https://www.google.com/chrome/browser/canary.html | Chrome Canary}
     * or
     * {@link https://www.chromium.org/getting-involved/dev-channel | Dev Channel}
     * build is suggested. See
     * {@link https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/ | this article}
     * for a description of the differences between Chromium and Chrome.
     * {@link https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md | This article}
     * describes some differences for Linux users. See
     * {@link https://developer.chrome.com/blog/chrome-for-testing/ | this doc} for the description
     * of Chrome for Testing.
     *
     * @param options - Options to configure launching behavior.
     */
    launch(options?: LaunchOptions): Promise<Browser>;
    /**
     * The default executable path for a given ChromeReleaseChannel.
     */
    executablePath(channel: ChromeReleaseChannel): Promise<string>;
    /**
     * The default executable path given LaunchOptions.
     */
    executablePath(options: LaunchOptions): Promise<string>;
    /**
     * The default executable path.
     */
    executablePath(): Promise<string>;
    /**
     * @internal
     */
    browserVersion(): Promise<string>;
    /**
     * The default download path for puppeteer. For puppeteer-core, this
     * code should never be called as it is never defined.
     *
     * @internal
     */
    defaultDownloadPath(): Promise<string | undefined>;
    /**
     * The name of the browser that was last launched.
     */
    lastLaunchedBrowser(): Promise<SupportedBrowser>;
    /**
     * The name of the browser that will be launched by default. For
     * `puppeteer`, this is influenced by your configuration. Otherwise, it's
     * `chrome`.
     */
    defaultBrowser(): Promise<SupportedBrowser>;
    /**
     * @param options - Set of configurable options to set on the browser.
     *
     * @returns The default arguments that the browser will be launched with.
     */
    defaultArgs(options?: LaunchOptions): Promise<string[]>;
    /**
     * Removes all non-current Firefox and Chrome binaries in the cache directory
     * identified by the provided Puppeteer configuration. The current browser
     * version is determined by resolving PUPPETEER_REVISIONS from Puppeteer
     * unless `configuration.browserRevision` is provided.
     *
     * @remarks
     *
     * Note that the method does not check if any other Puppeteer versions
     * installed on the host that use the same cache directory require the
     * non-current binaries.
     *
     * @public
     */
    trimCache(): Promise<void>;
}
//# sourceMappingURL=PuppeteerNode.d.ts.map