/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ChildProcess } from 'node:child_process';
import type { CreatePageOptions } from '../api/Browser.js';
import { Browser, type BrowserCloseCallback, type BrowserContextOptions, type ScreenInfo, type AddScreenParams, type WindowBounds, type WindowId, type DebugInfo } from '../api/Browser.js';
import type { Extension } from '../api/Extension.js';
import type { Page } from '../api/Page.js';
import type { Target } from '../api/Target.js';
import type { Connection as CdpConnection } from '../cdp/Connection.js';
import type { SupportedWebDriverCapabilities } from '../common/ConnectOptions.js';
import type { Viewport } from '../common/Viewport.js';
import { BidiBrowserContext } from './BrowserContext.js';
import type { BidiConnection, CdpEvent } from './Connection.js';
import { BidiBrowserTarget } from './Target.js';
/**
 * @internal
 */
export interface BidiBrowserOptions {
    process?: ChildProcess;
    closeCallback?: BrowserCloseCallback;
    connection: BidiConnection;
    cdpConnection?: CdpConnection;
    defaultViewport: Viewport | null;
    acceptInsecureCerts?: boolean;
    capabilities?: SupportedWebDriverCapabilities;
    networkEnabled: boolean;
    issuesEnabled: boolean;
}
/**
 * @internal
 */
export declare class BidiBrowser extends Browser {
    #private;
    readonly protocol = "webDriverBiDi";
    static readonly subscribeModules: [string, ...string[]];
    static readonly subscribeCdpEvents: Array<CdpEvent['method']>;
    static create(opts: BidiBrowserOptions): Promise<BidiBrowser>;
    private constructor();
    get cdpSupported(): boolean;
    get cdpConnection(): CdpConnection | undefined;
    userAgent(): Promise<string>;
    get connection(): BidiConnection;
    wsEndpoint(): string;
    close(): Promise<void>;
    get connected(): boolean;
    process(): ChildProcess | null;
    createBrowserContext(options?: BrowserContextOptions): Promise<BidiBrowserContext>;
    version(): Promise<string>;
    browserContexts(): BidiBrowserContext[];
    defaultBrowserContext(): BidiBrowserContext;
    newPage(options?: CreatePageOptions): Promise<Page>;
    installExtension(path: string): Promise<string>;
    uninstallExtension(id: string): Promise<void>;
    screens(): Promise<ScreenInfo[]>;
    addScreen(_params: AddScreenParams): Promise<ScreenInfo>;
    removeScreen(_screenId: string): Promise<void>;
    getWindowBounds(windowId: WindowId): Promise<WindowBounds>;
    setWindowBounds(windowId: WindowId, windowBounds: WindowBounds): Promise<void>;
    targets(): Target[];
    target(): BidiBrowserTarget;
    disconnect(): Promise<void>;
    get debugInfo(): DebugInfo;
    isNetworkEnabled(): boolean;
    extensions(): Promise<Map<string, Extension>>;
    isIssuesEnabled(): boolean;
}
//# sourceMappingURL=Browser.d.ts.map