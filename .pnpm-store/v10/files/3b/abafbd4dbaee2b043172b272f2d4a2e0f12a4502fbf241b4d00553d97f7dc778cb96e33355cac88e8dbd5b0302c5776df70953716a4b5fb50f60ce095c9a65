import { launch } from '@puppeteer/browsers';
import type { Browser, BrowserCloseCallback } from '../api/Browser.js';
import { Connection } from '../cdp/Connection.js';
import type { SupportedBrowser } from '../common/SupportedBrowser.js';
import type { Viewport } from '../common/Viewport.js';
import { type GetIdFn } from '../util/incremental-id-generator.js';
import type { ChromeReleaseChannel, LaunchOptions } from './LaunchOptions.js';
import type { PuppeteerNode } from './PuppeteerNode.js';
/**
 * @internal
 */
export interface ResolvedLaunchArgs {
    isTempUserDataDir: boolean;
    userDataDir: string;
    executablePath: string;
    args: string[];
}
/**
 * Describes a launcher - a class that is able to create and launch a browser instance.
 *
 * @public
 */
export declare abstract class BrowserLauncher {
    #private;
    /**
     * @internal
     */
    puppeteer: PuppeteerNode;
    /**
     * @internal
     */
    constructor(puppeteer: PuppeteerNode, browser: SupportedBrowser);
    get browser(): SupportedBrowser;
    launch(options?: LaunchOptions): Promise<Browser>;
    abstract executablePath(channel?: ChromeReleaseChannel, validatePath?: boolean): Promise<string>;
    abstract defaultArgs(object: LaunchOptions): string[];
    /**
     * @internal
     */
    protected abstract computeLaunchArguments(options: LaunchOptions): Promise<ResolvedLaunchArgs>;
    /**
     * @internal
     */
    protected abstract cleanUserDataDir(path: string, opts: {
        isTemp: boolean;
    }): Promise<void>;
    /**
     * @internal
     */
    protected closeBrowser(browserProcess: ReturnType<typeof launch>, cdpConnection?: Connection): Promise<void>;
    /**
     * @internal
     */
    protected waitForPageTarget(browser: Browser, timeout: number): Promise<void>;
    /**
     * @internal
     */
    protected createCdpSocketConnection(browserProcess: ReturnType<typeof launch>, opts: {
        timeout: number;
        protocolTimeout: number | undefined;
        slowMo: number;
        idGenerator: GetIdFn;
    }): Promise<Connection>;
    /**
     * @internal
     */
    protected createCdpPipeConnection(browserProcess: ReturnType<typeof launch>, opts: {
        timeout: number;
        protocolTimeout: number | undefined;
        slowMo: number;
        idGenerator: GetIdFn;
    }): Promise<Connection>;
    /**
     * @internal
     */
    protected createBiDiOverCdpBrowser(browserProcess: ReturnType<typeof launch>, cdpConnection: Connection, closeCallback: BrowserCloseCallback, opts: {
        defaultViewport: Viewport | null;
        acceptInsecureCerts?: boolean;
        networkEnabled: boolean;
        issuesEnabled: boolean;
    }): Promise<Browser>;
    /**
     * @internal
     */
    protected createBiDiBrowser(browserProcess: ReturnType<typeof launch>, closeCallback: BrowserCloseCallback, opts: {
        timeout: number;
        protocolTimeout: number | undefined;
        slowMo: number;
        idGenerator: GetIdFn;
        defaultViewport: Viewport | null;
        acceptInsecureCerts?: boolean;
        networkEnabled?: boolean;
        issuesEnabled?: boolean;
    }): Promise<Browser>;
    /**
     * @internal
     */
    protected getProfilePath(): Promise<string>;
    /**
     * @internal
     */
    resolveExecutablePath(headless?: boolean | 'shell', validatePath?: boolean): Promise<string>;
}
//# sourceMappingURL=BrowserLauncher.d.ts.map