/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ChildProcess } from 'node:child_process';
import type { CreatePageOptions, DebugInfo } from '../api/Browser.js';
import { Browser as BrowserBase, type BrowserCloseCallback, type BrowserContextOptions, type IsPageTargetCallback, type TargetFilterCallback, type ScreenInfo, type AddScreenParams, type WindowBounds, type WindowId } from '../api/Browser.js';
import type { Extension } from '../api/Extension.js';
import type { Page } from '../api/Page.js';
import type { DownloadBehavior } from '../common/DownloadBehavior.js';
import type { Viewport } from '../common/Viewport.js';
import { CdpBrowserContext } from './BrowserContext.js';
import type { Connection } from './Connection.js';
import { type CdpTarget } from './Target.js';
import { TargetManager } from './TargetManager.js';
/**
 * @internal
 */
export declare class CdpBrowser extends BrowserBase {
    #private;
    readonly protocol = "cdp";
    static _create(connection: Connection, contextIds: string[], acceptInsecureCerts: boolean, defaultViewport?: Viewport | null, downloadBehavior?: DownloadBehavior, process?: ChildProcess, closeCallback?: BrowserCloseCallback, targetFilterCallback?: TargetFilterCallback, isPageTargetCallback?: IsPageTargetCallback, waitForInitiallyDiscoveredTargets?: boolean, networkEnabled?: boolean, issuesEnabled?: boolean, handleDevToolsAsPage?: boolean, blocklist?: string[], allowlist?: string[]): Promise<CdpBrowser>;
    constructor(connection: Connection, contextIds: string[], defaultViewport?: Viewport | null, process?: ChildProcess, closeCallback?: BrowserCloseCallback, targetFilterCallback?: TargetFilterCallback, isPageTargetCallback?: IsPageTargetCallback, waitForInitiallyDiscoveredTargets?: boolean, networkEnabled?: boolean, issuesEnabled?: boolean, handleDevToolsAsPage?: boolean, blocklist?: string[], allowlist?: string[]);
    _attach(downloadBehavior: DownloadBehavior | undefined): Promise<void>;
    _detach(): void;
    process(): ChildProcess | null;
    _targetManager(): TargetManager;
    _getIsPageTargetCallback(): IsPageTargetCallback | undefined;
    createBrowserContext(options?: BrowserContextOptions): Promise<CdpBrowserContext>;
    browserContexts(): CdpBrowserContext[];
    defaultBrowserContext(): CdpBrowserContext;
    _disposeContext(contextId?: string): Promise<void>;
    wsEndpoint(): string;
    newPage(options?: CreatePageOptions): Promise<Page>;
    _createPageInContext(contextId?: string, options?: CreatePageOptions): Promise<Page>;
    _createDevToolsPage(pageTargetId: string): Promise<Page>;
    _getDevToolsTargetPage(devtoolsTargetId: string): Promise<Page>;
    _hasDevToolsTarget(pageTargetId: string): Promise<string | undefined>;
    installExtension(path: string): Promise<string>;
    uninstallExtension(id: string): Promise<void>;
    screens(): Promise<ScreenInfo[]>;
    addScreen(params: AddScreenParams): Promise<ScreenInfo>;
    removeScreen(screenId: string): Promise<void>;
    getWindowBounds(windowId: WindowId): Promise<WindowBounds>;
    setWindowBounds(windowId: WindowId, windowBounds: WindowBounds): Promise<void>;
    targets(): CdpTarget[];
    target(): CdpTarget;
    version(): Promise<string>;
    userAgent(): Promise<string>;
    close(): Promise<void>;
    disconnect(): Promise<void>;
    /**
     * @internal
     */
    get _connection(): Connection;
    get connected(): boolean;
    get debugInfo(): DebugInfo;
    isNetworkEnabled(): boolean;
    extensions(): Promise<Map<string, Extension>>;
    isIssuesEnabled(): boolean;
}
//# sourceMappingURL=Browser.d.ts.map