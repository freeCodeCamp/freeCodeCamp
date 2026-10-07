/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { BluetoothEmulation } from '../api/BluetoothEmulation.js';
import type { Browser, WindowId } from '../api/Browser.js';
import type { BrowserContext } from '../api/BrowserContext.js';
import { type CDPSession } from '../api/CDPSession.js';
import type { DeviceRequestPrompt } from '../api/DeviceRequestPrompt.js';
import type { Extension } from '../api/Extension.js';
import type { Frame, WaitForOptions } from '../api/Frame.js';
import type { HTTPResponse } from '../api/HTTPResponse.js';
import type { JSHandle } from '../api/JSHandle.js';
import type { Credentials, HeapSnapshotOptions, ReloadOptions } from '../api/Page.js';
import { Page, type GeolocationOptions, type MediaFeature, type Metrics, type NewDocumentScriptEvaluation, type ScreenshotOptions, type WaitTimeoutOptions } from '../api/Page.js';
import type { Cookie, DeleteCookiesRequest, CookieParam, CookiePartitionKey, CookieSameSite } from '../common/Cookie.js';
import { FileChooser } from '../common/FileChooser.js';
import type { PDFOptions } from '../common/PDFOptions.js';
import type { Viewport } from '../common/Viewport.js';
import type { Realm } from '../index-browser.js';
import { CdpCDPSession } from './CdpSession.js';
import { Coverage } from './Coverage.js';
import type { CdpFrame } from './Frame.js';
import { CdpKeyboard, CdpMouse, CdpTouchscreen } from './Input.js';
import type { NetworkConditions } from './NetworkManager.js';
import type { CdpTarget } from './Target.js';
import { Tracing } from './Tracing.js';
import { WebMCP } from './WebMCP.js';
import { CdpWebWorker } from './WebWorker.js';
/**
 * @internal
 */
export declare function convertSameSiteFromPuppeteerToCdp(sameSite: CookieSameSite | undefined): Protocol.Network.CookieSameSite | undefined;
/**
 * @internal
 */
export declare class CdpPage extends Page {
    #private;
    static _create(client: CdpCDPSession, target: CdpTarget, defaultViewport: Viewport | null): Promise<CdpPage>;
    constructor(client: CdpCDPSession, target: CdpTarget);
    resize(params: {
        contentWidth: number;
        contentHeight: number;
    }): Promise<void>;
    windowId(): Promise<WindowId>;
    _client(): CDPSession;
    _isUrlAllowed(url: string): boolean;
    isServiceWorkerBypassed(): boolean;
    isDragInterceptionEnabled(): boolean;
    isJavaScriptEnabled(): boolean;
    openDevTools(): Promise<Page>;
    hasDevTools(): Promise<boolean>;
    waitForFileChooser(options?: WaitTimeoutOptions): Promise<FileChooser>;
    setGeolocation(options: GeolocationOptions): Promise<void>;
    target(): CdpTarget;
    browser(): Browser;
    browserContext(): BrowserContext;
    mainFrame(): CdpFrame;
    get keyboard(): CdpKeyboard;
    get touchscreen(): CdpTouchscreen;
    get coverage(): Coverage;
    get tracing(): Tracing;
    get webmcp(): WebMCP;
    frames(): Frame[];
    workers(): CdpWebWorker[];
    setRequestInterception(value: boolean): Promise<void>;
    setBypassServiceWorker(bypass: boolean): Promise<void>;
    setDragInterception(enabled: boolean): Promise<void>;
    setOfflineMode(enabled: boolean): Promise<void>;
    emulateNetworkConditions(networkConditions: NetworkConditions | null): Promise<void>;
    emulateFocusedPage(enabled: boolean): Promise<void>;
    setDefaultNavigationTimeout(timeout: number): void;
    setDefaultTimeout(timeout: number): void;
    getDefaultTimeout(): number;
    getDefaultNavigationTimeout(): number;
    queryObjects<Prototype>(prototypeHandle: JSHandle<Prototype>): Promise<JSHandle<Prototype[]>>;
    cookies(...urls: string[]): Promise<Cookie[]>;
    deleteCookie(...cookies: DeleteCookiesRequest[]): Promise<void>;
    setCookie(...cookies: CookieParam[]): Promise<void>;
    exposeFunction(name: string, pptrFunction: Function | {
        default: Function;
    }): Promise<void>;
    removeExposedFunction(name: string): Promise<void>;
    authenticate(credentials: Credentials | null): Promise<void>;
    setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;
    setUserAgent(userAgentOrOptions: string | {
        userAgent?: string;
        userAgentMetadata?: Protocol.Emulation.UserAgentMetadata;
        platform?: string;
    }, userAgentMetadata?: Protocol.Emulation.UserAgentMetadata): Promise<void>;
    metrics(): Promise<Metrics>;
    captureHeapSnapshot(options: HeapSnapshotOptions): Promise<void>;
    reload(options?: ReloadOptions): Promise<HTTPResponse | null>;
    createCDPSession(): Promise<CDPSession>;
    goBack(options?: WaitForOptions): Promise<HTTPResponse | null>;
    goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;
    bringToFront(): Promise<void>;
    setJavaScriptEnabled(enabled: boolean): Promise<void>;
    setBypassCSP(enabled: boolean): Promise<void>;
    triggerExtensionAction(extension: Extension): Promise<void>;
    emulateMediaType(type?: string): Promise<void>;
    emulateCPUThrottling(factor: number | null): Promise<void>;
    emulateMediaFeatures(features?: MediaFeature[]): Promise<void>;
    emulateTimezone(timezoneId?: string): Promise<void>;
    emulateIdleState(overrides?: {
        isUserActive: boolean;
        isScreenUnlocked: boolean;
    }): Promise<void>;
    emulateVisionDeficiency(type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']): Promise<void>;
    setViewport(viewport: Viewport | null): Promise<void>;
    viewport(): Viewport | null;
    evaluateOnNewDocument<Params extends unknown[], Func extends (...args: Params) => unknown = (...args: Params) => unknown>(pageFunction: Func | string, ...args: Params): Promise<NewDocumentScriptEvaluation>;
    removeScriptToEvaluateOnNewDocument(identifier: string): Promise<void>;
    setCacheEnabled(enabled?: boolean): Promise<void>;
    _screenshot(options: Readonly<ScreenshotOptions>): Promise<string>;
    createPDFStream(options?: PDFOptions): Promise<ReadableStream<Uint8Array>>;
    pdf(options?: PDFOptions): Promise<Uint8Array>;
    close(options?: {
        runBeforeUnload?: boolean;
    }): Promise<void>;
    isClosed(): boolean;
    get mouse(): CdpMouse;
    /**
     * This method is typically coupled with an action that triggers a device
     * request from an api such as WebBluetooth.
     *
     * :::caution
     *
     * This must be called before the device request is made. It will not return a
     * currently active device prompt.
     *
     * :::
     *
     * @example
     *
     * ```ts
     * const [devicePrompt] = Promise.all([
     *   page.waitForDevicePrompt(),
     *   page.click('#connect-bluetooth'),
     * ]);
     * await devicePrompt.select(
     *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
     * );
     * ```
     */
    waitForDevicePrompt(options?: WaitTimeoutOptions): Promise<DeviceRequestPrompt>;
    get bluetooth(): BluetoothEmulation;
    extensionRealms(): Realm[];
}
/**
 * @internal
 */
export declare function convertCookiesPartitionKeyFromPuppeteerToCdp(partitionKey: CookiePartitionKey | string | undefined): Protocol.Network.CookiePartitionKey | undefined;
//# sourceMappingURL=Page.d.ts.map