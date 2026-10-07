/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Browser as browsers_SupportedBrowser, resolveBuildId, detectBrowserPlatform, getInstalledBrowsers, uninstall, } from '@puppeteer/browsers';
import { Puppeteer } from '../common/Puppeteer.js';
import { PUPPETEER_REVISIONS } from '../revisions.js';
import { ChromeLauncher } from './ChromeLauncher.js';
import { FirefoxLauncher } from './FirefoxLauncher.js';
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
export class PuppeteerNode extends Puppeteer {
    #launcher;
    #lastLaunchedBrowser;
    configuration;
    /**
     * @internal
     */
    constructor(settings) {
        const { configuration, ...commonSettings } = settings;
        super(commonSettings);
        if (configuration) {
            this.configuration = configuration;
        }
        else {
            this.configuration = () => {
                return Promise.resolve({});
            };
        }
        this.connect = this.connect.bind(this);
        this.launch = this.launch.bind(this);
        this.executablePath = this.executablePath.bind(this);
        this.defaultArgs = this.defaultArgs.bind(this);
        this.trimCache = this.trimCache.bind(this);
    }
    /**
     * This method attaches Puppeteer to an existing browser instance.
     *
     * @param options - Set of configurable options to set on the browser.
     * @returns Promise which resolves to browser instance.
     */
    connect(options) {
        return super.connect(options);
    }
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
    async launch(options = {}) {
        const { browser = await this.defaultBrowser() } = options;
        this.#lastLaunchedBrowser = browser;
        if (!['chrome', 'firefox'].includes(browser)) {
            throw new Error(`Unknown product: ${browser}`);
        }
        this.#launcher = this.#getLauncher(browser);
        return await this.#launcher.launch(options);
    }
    /**
     * @internal
     */
    #getLauncher(browser) {
        if (this.#launcher && this.#launcher.browser === browser) {
            return this.#launcher;
        }
        switch (browser) {
            case 'chrome':
                return new ChromeLauncher(this);
            case 'firefox':
                return new FirefoxLauncher(this);
            default:
                throw new Error(`Unknown product: ${browser}`);
        }
    }
    async executablePath(optsOrChannel) {
        if (optsOrChannel === undefined) {
            return await this.#getLauncher(await this.lastLaunchedBrowser()).executablePath(undefined, /* validatePath= */ false);
        }
        if (typeof optsOrChannel === 'string') {
            return await this.#getLauncher('chrome').executablePath(optsOrChannel, 
            /* validatePath= */ false);
        }
        return await this.#getLauncher(optsOrChannel.browser ?? (await this.lastLaunchedBrowser())).resolveExecutablePath(optsOrChannel.headless, /* validatePath= */ false);
    }
    /**
     * @internal
     */
    async browserVersion() {
        const config = await this.configuration();
        const lastLaunched = await this.lastLaunchedBrowser();
        return config?.[lastLaunched]?.version ?? PUPPETEER_REVISIONS[lastLaunched];
    }
    /**
     * The default download path for puppeteer. For puppeteer-core, this
     * code should never be called as it is never defined.
     *
     * @internal
     */
    async defaultDownloadPath() {
        const config = await this.configuration();
        return config.cacheDirectory;
    }
    /**
     * The name of the browser that was last launched.
     */
    async lastLaunchedBrowser() {
        return this.#lastLaunchedBrowser ?? (await this.defaultBrowser());
    }
    /**
     * The name of the browser that will be launched by default. For
     * `puppeteer`, this is influenced by your configuration. Otherwise, it's
     * `chrome`.
     */
    async defaultBrowser() {
        const config = await this.configuration();
        return config.defaultBrowser ?? 'chrome';
    }
    /**
     * @param options - Set of configurable options to set on the browser.
     *
     * @returns The default arguments that the browser will be launched with.
     */
    async defaultArgs(options = {}) {
        return this.#getLauncher(options.browser ?? (await this.lastLaunchedBrowser())).defaultArgs(options);
    }
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
    async trimCache() {
        const platform = detectBrowserPlatform();
        if (!platform) {
            throw new Error('The current platform is not supported.');
        }
        const config = await this.configuration();
        const cacheDir = config.cacheDirectory;
        const installedBrowsers = await getInstalledBrowsers({
            cacheDir,
        });
        const puppeteerBrowsers = [
            {
                product: 'chrome',
                browser: browsers_SupportedBrowser.CHROME,
                currentBuildId: '',
            },
            {
                product: 'firefox',
                browser: browsers_SupportedBrowser.FIREFOX,
                currentBuildId: '',
            },
        ];
        // Resolve current buildIds.
        await Promise.all(puppeteerBrowsers.map(async (item) => {
            const tag = config?.[item.product]?.version ?? PUPPETEER_REVISIONS[item.product];
            item.currentBuildId = await resolveBuildId(item.browser, platform, tag);
        }));
        const currentBrowserBuilds = new Set(puppeteerBrowsers.map(browser => {
            return `${browser.browser}_${browser.currentBuildId}`;
        }));
        const currentBrowsers = new Set(puppeteerBrowsers.map(browser => {
            return browser.browser;
        }));
        for (const installedBrowser of installedBrowsers) {
            // Don't uninstall browsers that are not managed by Puppeteer yet.
            if (!currentBrowsers.has(installedBrowser.browser)) {
                continue;
            }
            // Keep the browser build used by the current Puppeteer installation.
            if (currentBrowserBuilds.has(`${installedBrowser.browser}_${installedBrowser.buildId}`)) {
                continue;
            }
            await uninstall({
                browser: installedBrowser.browser,
                platform,
                cacheDir,
                buildId: installedBrowser.buildId,
            });
        }
    }
}
//# sourceMappingURL=PuppeteerNode.js.map