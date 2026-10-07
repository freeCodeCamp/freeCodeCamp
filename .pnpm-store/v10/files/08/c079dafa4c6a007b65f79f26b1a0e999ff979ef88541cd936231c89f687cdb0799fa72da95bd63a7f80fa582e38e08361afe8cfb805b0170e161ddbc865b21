/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Browser as InstalledBrowser, CDP_WEBSOCKET_ENDPOINT_REGEX, launch, TimeoutError as BrowsersTimeoutError, WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX, computeExecutablePath, } from '@puppeteer/browsers';
import { firstValueFrom, from, map, race, timer, } from '../../third_party/rxjs/rxjs.js';
import { CdpBrowser } from '../cdp/Browser.js';
import { Connection } from '../cdp/Connection.js';
import { assertSupportedUrlRestrictions } from '../common/BrowserConnector.js';
import { TimeoutError } from '../common/Errors.js';
import { debugError, DEFAULT_VIEWPORT } from '../common/util.js';
import { createIncrementalIdGenerator, } from '../util/incremental-id-generator.js';
import { NodeWebSocketTransport as WebSocketTransport } from './NodeWebSocketTransport.js';
import { PipeTransport } from './PipeTransport.js';
/**
 * Describes a launcher - a class that is able to create and launch a browser instance.
 *
 * @public
 */
export class BrowserLauncher {
    #browser;
    /**
     * @internal
     */
    puppeteer;
    /**
     * @internal
     */
    constructor(puppeteer, browser) {
        this.puppeteer = puppeteer;
        this.#browser = browser;
    }
    get browser() {
        return this.#browser;
    }
    async launch(options = {}) {
        const { dumpio = false, enableExtensions = false, env = process.env, handleSIGINT = true, handleSIGTERM = true, handleSIGHUP = true, acceptInsecureCerts = false, networkEnabled = true, issuesEnabled = true, defaultViewport = DEFAULT_VIEWPORT, downloadBehavior, slowMo = 0, timeout = 30000, waitForInitialPage = true, protocolTimeout, handleDevToolsAsPage, idGenerator = createIncrementalIdGenerator(), blocklist, allowlist, } = options;
        let { protocol } = options;
        // Default to 'webDriverBiDi' for Firefox.
        if (this.#browser === 'firefox' && protocol === undefined) {
            protocol = 'webDriverBiDi';
        }
        assertSupportedUrlRestrictions({
            allowlist,
            blocklist,
            protocol,
        });
        if (this.#browser === 'firefox' && protocol === 'cdp') {
            throw new Error('Connecting to Firefox using CDP is no longer supported');
        }
        const launchArgs = await this.computeLaunchArguments({
            ...options,
            protocol,
        });
        if (!existsSync(launchArgs.executablePath)) {
            throw new Error(`Browser was not found at the configured executablePath (${launchArgs.executablePath})`);
        }
        const usePipe = launchArgs.args.includes('--remote-debugging-pipe');
        const onProcessExit = async () => {
            await this.cleanUserDataDir(launchArgs.userDataDir, {
                isTemp: launchArgs.isTempUserDataDir,
            });
        };
        if (this.#browser === 'firefox' &&
            protocol === 'webDriverBiDi' &&
            usePipe) {
            throw new Error('Pipe connections are not supported with Firefox and WebDriver BiDi');
        }
        const browserProcess = launch({
            executablePath: launchArgs.executablePath,
            args: launchArgs.args,
            handleSIGHUP,
            handleSIGTERM,
            handleSIGINT,
            dumpio,
            env,
            pipe: usePipe,
            onExit: onProcessExit,
            signal: options.signal,
        });
        let browser;
        let cdpConnection;
        let closing = false;
        const browserCloseCallback = async () => {
            if (closing) {
                return;
            }
            closing = true;
            await this.closeBrowser(browserProcess, cdpConnection);
        };
        try {
            if (this.#browser === 'firefox') {
                browser = await this.createBiDiBrowser(browserProcess, browserCloseCallback, {
                    timeout,
                    protocolTimeout,
                    slowMo,
                    defaultViewport,
                    acceptInsecureCerts,
                    networkEnabled,
                    idGenerator,
                });
            }
            else {
                if (usePipe) {
                    cdpConnection = await this.createCdpPipeConnection(browserProcess, {
                        timeout,
                        protocolTimeout,
                        slowMo,
                        idGenerator,
                    });
                }
                else {
                    cdpConnection = await this.createCdpSocketConnection(browserProcess, {
                        timeout,
                        protocolTimeout,
                        slowMo,
                        idGenerator,
                    });
                }
                if (protocol === 'webDriverBiDi') {
                    browser = await this.createBiDiOverCdpBrowser(browserProcess, cdpConnection, browserCloseCallback, {
                        defaultViewport,
                        acceptInsecureCerts,
                        networkEnabled,
                        issuesEnabled,
                    });
                }
                else {
                    browser = await CdpBrowser._create(cdpConnection, [], acceptInsecureCerts, defaultViewport, downloadBehavior, browserProcess.nodeProcess, browserCloseCallback, options.targetFilter, undefined, undefined, networkEnabled, issuesEnabled, handleDevToolsAsPage, blocklist, allowlist);
                }
            }
        }
        catch (error) {
            void browserCloseCallback();
            const logs = browserProcess.getRecentLogs().join('\n');
            if (logs.includes('Failed to create a ProcessSingleton for your profile directory') ||
                // On Windows we will not get logs due to the singleton process handover. See
                // https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/process_singleton_win.cc;l=46;drc=fc7952f0422b5073515a205a04ec9c3a1ae81658
                (process.platform === 'win32' &&
                    existsSync(join(launchArgs.userDataDir, 'lockfile')))) {
                throw new Error(`The browser is already running for ${launchArgs.userDataDir}. Use a different \`userDataDir\` or stop the running browser first.`);
            }
            if (logs.includes('Missing X server') && options.headless === false) {
                throw new Error(`Missing X server to start the headful browser. Either set headless to true or use xvfb-run to run your Puppeteer script.`);
            }
            if (error instanceof BrowsersTimeoutError) {
                throw new TimeoutError(error.message);
            }
            throw error;
        }
        if (Array.isArray(enableExtensions)) {
            if (this.#browser === 'chrome' && !usePipe) {
                throw new Error('To use `enableExtensions` with a list of paths in Chrome, you must be connected with `--remote-debugging-pipe` (`pipe: true`).');
            }
            await Promise.all([
                enableExtensions.map(path => {
                    return browser.installExtension(path);
                }),
            ]);
        }
        if (waitForInitialPage) {
            await this.waitForPageTarget(browser, timeout);
        }
        return browser;
    }
    /**
     * @internal
     */
    async closeBrowser(browserProcess, cdpConnection) {
        if (cdpConnection) {
            // Attempt to close the browser gracefully
            try {
                await cdpConnection.closeBrowser();
                await browserProcess.hasClosed();
            }
            catch (error) {
                debugError(error);
                await browserProcess.close();
            }
        }
        else {
            // Wait for a possible graceful shutdown.
            await firstValueFrom(race(from(browserProcess.hasClosed()), timer(5000).pipe(map(() => {
                return from(browserProcess.close());
            }))));
        }
    }
    /**
     * @internal
     */
    async waitForPageTarget(browser, timeout) {
        try {
            await browser.waitForTarget(t => {
                return t.type() === 'page';
            }, { timeout });
        }
        catch (error) {
            await browser.close();
            throw error;
        }
    }
    /**
     * @internal
     */
    async createCdpSocketConnection(browserProcess, opts) {
        const browserWSEndpoint = await browserProcess.waitForLineOutput(CDP_WEBSOCKET_ENDPOINT_REGEX, opts.timeout);
        const transport = await WebSocketTransport.create(browserWSEndpoint);
        return new Connection(browserWSEndpoint, transport, opts.slowMo, opts.protocolTimeout, 
        /* rawErrors */ false, opts.idGenerator);
    }
    /**
     * @internal
     */
    async createCdpPipeConnection(browserProcess, opts) {
        // stdio was assigned during start(), and the 'pipe' option there adds the
        // 4th and 5th items to stdio array
        const { 3: pipeWrite, 4: pipeRead } = browserProcess.nodeProcess.stdio;
        const transport = new PipeTransport(pipeWrite, pipeRead);
        return new Connection('', transport, opts.slowMo, opts.protocolTimeout, 
        /* rawErrors */ false, opts.idGenerator);
    }
    /**
     * @internal
     */
    async createBiDiOverCdpBrowser(browserProcess, cdpConnection, closeCallback, opts) {
        const bidiOnly = process.env['PUPPETEER_WEBDRIVER_BIDI_ONLY'] === 'true';
        const BiDi = await import(/* webpackIgnore: true */ '../bidi/bidi.js');
        const bidiConnection = await BiDi.connectBidiOverCdp(cdpConnection);
        return await BiDi.BidiBrowser.create({
            connection: bidiConnection,
            // Do not provide CDP connection to Browser, if BiDi-only mode is enabled. This
            // would restrict Browser to use only BiDi endpoint.
            cdpConnection: bidiOnly ? undefined : cdpConnection,
            closeCallback,
            process: browserProcess.nodeProcess,
            defaultViewport: opts.defaultViewport,
            acceptInsecureCerts: opts.acceptInsecureCerts,
            networkEnabled: opts.networkEnabled,
            issuesEnabled: opts.issuesEnabled,
        });
    }
    /**
     * @internal
     */
    async createBiDiBrowser(browserProcess, closeCallback, opts) {
        const browserWSEndpoint = (await browserProcess.waitForLineOutput(WEBDRIVER_BIDI_WEBSOCKET_ENDPOINT_REGEX, opts.timeout)) + '/session';
        const transport = await WebSocketTransport.create(browserWSEndpoint);
        const BiDi = await import(/* webpackIgnore: true */ '../bidi/bidi.js');
        const bidiConnection = new BiDi.BidiConnection(browserWSEndpoint, transport, opts.idGenerator, opts.slowMo, opts.protocolTimeout);
        return await BiDi.BidiBrowser.create({
            connection: bidiConnection,
            closeCallback,
            process: browserProcess.nodeProcess,
            defaultViewport: opts.defaultViewport,
            acceptInsecureCerts: opts.acceptInsecureCerts,
            networkEnabled: opts.networkEnabled ?? true,
            issuesEnabled: opts.issuesEnabled ?? true,
        });
    }
    /**
     * @internal
     */
    async getProfilePath() {
        const config = await this.puppeteer.configuration();
        return join(config.temporaryDirectory ?? tmpdir(), `puppeteer_dev_${this.browser}_profile-`);
    }
    /**
     * @internal
     */
    async resolveExecutablePath(headless, validatePath = true) {
        const config = await this.puppeteer.configuration();
        let executablePath = config.executablePath;
        if (executablePath) {
            if (validatePath && !existsSync(executablePath)) {
                throw new Error(`Tried to find the browser at the configured path (${executablePath}), but no executable was found.`);
            }
            return executablePath;
        }
        function puppeteerBrowserToInstalledBrowser(browser, headless) {
            switch (browser) {
                case 'chrome':
                    if (headless === 'shell') {
                        return InstalledBrowser.CHROMEHEADLESSSHELL;
                    }
                    return InstalledBrowser.CHROME;
                case 'firefox':
                    return InstalledBrowser.FIREFOX;
            }
            return InstalledBrowser.CHROME;
        }
        const browserType = puppeteerBrowserToInstalledBrowser(this.browser, headless);
        const defaultDownloadPath = await this.puppeteer.defaultDownloadPath();
        const browserVersion = await this.puppeteer.browserVersion();
        executablePath = computeExecutablePath({
            cacheDir: defaultDownloadPath,
            browser: browserType,
            buildId: browserVersion,
        });
        if (validatePath && !existsSync(executablePath)) {
            const configVersion = config?.[this.browser]?.version;
            if (configVersion) {
                throw new Error(`Tried to find the browser at the configured path (${executablePath}) for version ${configVersion}, but no executable was found.`);
            }
            switch (this.browser) {
                case 'chrome':
                    throw new Error(`Could not find Chrome (ver. ${browserVersion}). This can occur if either\n` +
                        ` 1. you did not perform an installation before running the script (e.g. \`npx puppeteer browsers install ${browserType}\`) or\n` +
                        ` 2. your cache path is incorrectly configured (which is: ${config.cacheDirectory}).\n` +
                        'For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.');
                case 'firefox':
                    throw new Error(`Could not find Firefox (rev. ${browserVersion}). This can occur if either\n` +
                        ' 1. you did not perform an installation for Firefox before running the script (e.g. `npx puppeteer browsers install firefox`) or\n' +
                        ` 2. your cache path is incorrectly configured (which is: ${config.cacheDirectory}).\n` +
                        'For (2), check out our guide on configuring puppeteer at https://pptr.dev/guides/configuration.');
            }
        }
        return executablePath;
    }
}
//# sourceMappingURL=BrowserLauncher.js.map