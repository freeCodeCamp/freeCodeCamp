/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import type { BluetoothEmulation } from '../../api/BluetoothEmulation.js';
import type { DeviceRequestPrompt } from '../../api/DeviceRequestPrompt.js';
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import type { AddPreloadScriptOptions } from './Browser.js';
import { Navigation } from './Navigation.js';
import type { DedicatedWorkerRealm } from './Realm.js';
import { WindowRealm } from './Realm.js';
import { Request } from './Request.js';
import type { UserContext } from './UserContext.js';
import { UserPrompt } from './UserPrompt.js';
/**
 * @internal
 */
export type AddInterceptOptions = Omit<Bidi.Network.AddInterceptParameters, 'contexts'>;
/**
 * @internal
 */
export type CaptureScreenshotOptions = Omit<Bidi.BrowsingContext.CaptureScreenshotParameters, 'context'>;
/**
 * @internal
 */
export type ReloadOptions = Omit<Bidi.BrowsingContext.ReloadParameters, 'context'>;
/**
 * @internal
 */
export type PrintOptions = Omit<Bidi.BrowsingContext.PrintParameters, 'context'>;
/**
 * @internal
 */
export type HandleUserPromptOptions = Omit<Bidi.BrowsingContext.HandleUserPromptParameters, 'context'>;
/**
 * @internal
 */
export type SetViewportOptions = Omit<Bidi.BrowsingContext.SetViewportParameters, 'context'>;
/**
 * @internal
 */
export type GetCookiesOptions = Omit<Bidi.Storage.GetCookiesParameters, 'partition'>;
/**
 * @internal
 */
export type SetGeoLocationOverrideOptions = Bidi.Emulation.SetGeolocationOverrideParameters;
/**
 * @internal
 */
export declare class BrowsingContext extends EventEmitter<{
    /** Emitted when this context is closed. */
    closed: string;
    /** Emitted when a child browsing context is created. */
    browsingcontext: BrowsingContext;
    /** Emitted whenever a navigation occurs. */
    navigation: Navigation;
    /** Emitted whenever a file dialog is opened occurs. */
    filedialogopened: Bidi.Input.FileDialogInfo;
    /** Emitted whenever a request is made. */
    request: Request;
    /** Emitted whenever a log entry is added. */
    log: Bidi.Log.Entry;
    /** Emitted whenever a prompt is opened. */
    userprompt: UserPrompt;
    /** Emitted whenever the frame history is updated. */
    historyUpdated: void;
    /** Emitted whenever the frame emits `DOMContentLoaded` */
    DOMContentLoaded: void;
    /** Emitted whenever the frame emits `load` */
    load: void;
    /** Emitted whenever a dedicated worker is created */
    worker: DedicatedWorkerRealm;
}> {
    #private;
    static from(userContext: UserContext, parent: BrowsingContext | undefined, id: string, url: string, originalOpener: string | null, clientWindow: string): BrowsingContext;
    readonly defaultRealm: WindowRealm;
    readonly id: string;
    readonly parent: BrowsingContext | undefined;
    readonly userContext: UserContext;
    readonly originalOpener: string | null;
    readonly windowId: string;
    private constructor();
    get children(): Iterable<BrowsingContext>;
    get closed(): boolean;
    get disposed(): boolean;
    get realms(): Iterable<WindowRealm>;
    get top(): BrowsingContext;
    get url(): string;
    private dispose;
    activate(): Promise<void>;
    captureScreenshot(options?: CaptureScreenshotOptions): Promise<string>;
    close(promptUnload?: boolean): Promise<void>;
    traverseHistory(delta: number): Promise<void>;
    navigate(url: string, wait?: Bidi.BrowsingContext.ReadinessState): Promise<void>;
    reload(options?: ReloadOptions): Promise<void>;
    setCacheBehavior(cacheBehavior: 'default' | 'bypass'): Promise<void>;
    print(options?: PrintOptions): Promise<string>;
    handleUserPrompt(options?: HandleUserPromptOptions): Promise<void>;
    setViewport(options?: SetViewportOptions): Promise<void>;
    setTouchOverride(maxTouchPoints: number | null): Promise<void>;
    performActions(actions: Bidi.Input.SourceActions[]): Promise<void>;
    releaseActions(): Promise<void>;
    createWindowRealm(sandbox: string): WindowRealm;
    addPreloadScript(functionDeclaration: string, options?: AddPreloadScriptOptions): Promise<string>;
    addIntercept(options: AddInterceptOptions): Promise<string>;
    removePreloadScript(script: string): Promise<void>;
    setGeolocationOverride(options: SetGeoLocationOverrideOptions): Promise<void>;
    setTimezoneOverride(timezoneId?: string): Promise<void>;
    setScreenOrientationOverride(screenOrientation: Bidi.Emulation.ScreenOrientation | null): Promise<void>;
    getCookies(options?: GetCookiesOptions): Promise<Bidi.Network.Cookie[]>;
    setCookie(cookie: Bidi.Storage.PartialCookie): Promise<void>;
    setFiles(element: Bidi.Script.SharedReference, files: string[]): Promise<void>;
    subscribe(events: [string, ...string[]]): Promise<void>;
    addInterception(events: [string, ...string[]]): Promise<void>;
    [disposeSymbol](): void;
    deleteCookie(...cookieFilters: Bidi.Storage.CookieFilter[]): Promise<void>;
    locateNodes(locator: Bidi.BrowsingContext.Locator, startNodes?: Bidi.Script.SharedReference[]): Promise<Bidi.Script.NodeRemoteValue[]>;
    setJavaScriptEnabled(enabled: boolean): Promise<void>;
    isJavaScriptEnabled(): boolean;
    setUserAgent(userAgent: string | null): Promise<void>;
    setClientHintsOverride(clientHints: Bidi.BidiUaClientHints.UserAgentClientHints.ClientHintsMetadata | null): Promise<void>;
    setOfflineMode(enabled: boolean): Promise<void>;
    get bluetooth(): BluetoothEmulation;
    waitForDevicePrompt(timeout: number, signal?: AbortSignal): Promise<DeviceRequestPrompt>;
    setExtraHTTPHeaders(headers: Record<string, string>): Promise<void>;
}
//# sourceMappingURL=BrowsingContext.d.ts.map