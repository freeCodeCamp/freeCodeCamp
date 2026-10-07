/**
 * Copyright 2022 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { Protocol } from 'devtools-protocol';
import { BrowsingContext, type Emulation, type UAClientHints } from '../../../protocol/protocol.js';
import { type LoggerFn } from '../../../utils/log.js';
import type { ContextConfigStorage } from '../browser/ContextConfigStorage.js';
import type { CdpTarget } from '../cdp/CdpTarget.js';
import type { Realm } from '../script/Realm.js';
import type { RealmStorage } from '../script/RealmStorage.js';
import type { EventManager } from '../session/EventManager.js';
import type { BrowsingContextStorage } from './BrowsingContextStorage.js';
export declare class BrowsingContextImpl {
    #private;
    static readonly LOGGER_PREFIX: "debug:browsingContext";
    readonly userContext: string;
    private constructor();
    static create(id: BrowsingContext.BrowsingContext, parentId: BrowsingContext.BrowsingContext | null, userContext: string, cdpTarget: CdpTarget, eventManager: EventManager, browsingContextStorage: BrowsingContextStorage, realmStorage: RealmStorage, configStorage: ContextConfigStorage, url: string, originalOpener?: string, logger?: LoggerFn): BrowsingContextImpl;
    /**
     * @see https://html.spec.whatwg.org/multipage/document-sequences.html#navigable
     */
    get navigableId(): string | undefined;
    get navigationId(): string;
    dispose(emitContextDestroyed: boolean): void;
    /** Returns the ID of this context. */
    get id(): BrowsingContext.BrowsingContext;
    /** Returns the parent context ID. */
    get parentId(): BrowsingContext.BrowsingContext | null;
    /** Sets the parent context ID and updates parent's children. */
    set parentId(parentId: BrowsingContext.BrowsingContext | null);
    /** Returns the parent context. */
    get parent(): BrowsingContextImpl | null;
    /** Returns all direct children contexts. */
    get directChildren(): BrowsingContextImpl[];
    /** Returns all children contexts, flattened. */
    get allChildren(): BrowsingContextImpl[];
    /**
     * Returns true if this is a top-level context.
     * This is the case whenever the parent context ID is null.
     */
    isTopLevelContext(): boolean;
    get top(): BrowsingContextImpl;
    addChild(childId: BrowsingContext.BrowsingContext): void;
    get cdpTarget(): CdpTarget;
    updateCdpTarget(cdpTarget: CdpTarget): void;
    get url(): string;
    lifecycleLoaded(): Promise<void>;
    targetUnblockedOrThrow(): Promise<void>;
    /** Returns a sandbox for internal helper scripts which is not exposed to the user.*/
    getOrCreateHiddenSandbox(): Promise<Realm>;
    /** Returns a sandbox which is exposed to user. */
    getOrCreateUserSandbox(sandbox: string | undefined): Promise<Realm>;
    /**
     * Implements https://w3c.github.io/webdriver-bidi/#get-the-navigable-info.
     */
    serializeToBidiValue(maxDepth?: number | null, addParentField?: boolean): BrowsingContext.Info;
    onTargetInfoChanged(params: Protocol.Target.TargetInfoChangedEvent): void;
    navigate(url: string, wait: BrowsingContext.ReadinessState): Promise<BrowsingContext.NavigateResult>;
    reload(ignoreCache: boolean, wait: BrowsingContext.ReadinessState): Promise<BrowsingContext.NavigateResult>;
    setViewport(viewport: BrowsingContext.Viewport | null, devicePixelRatio: number | null, screenOrientation: Emulation.ScreenOrientation | null): Promise<void>;
    handleUserPrompt(accept?: boolean, userText?: string): Promise<void>;
    activate(): Promise<void>;
    captureScreenshot(params: BrowsingContext.CaptureScreenshotParameters): Promise<BrowsingContext.CaptureScreenshotResult>;
    print(params: BrowsingContext.PrintParameters): Promise<BrowsingContext.PrintResult>;
    close(): Promise<void>;
    traverseHistory(delta: number): Promise<void>;
    toggleModulesIfNeeded(): Promise<void>;
    locateNodes(params: BrowsingContext.LocateNodesParameters): Promise<BrowsingContext.LocateNodesResult>;
    setTimezoneOverride(timezone: string | null): Promise<void>;
    setLocaleOverride(locale: string | null): Promise<void>;
    setGeolocationOverride(geolocation: Emulation.GeolocationCoordinates | Emulation.GeolocationPositionError | null): Promise<void>;
    setScriptingEnabled(scriptingEnabled: false | null): Promise<void>;
    setUserAgentAndAcceptLanguage(userAgent: string | null | undefined, acceptLanguage: string | null | undefined, clientHints: UAClientHints.UserAgentClientHints.ClientHintsMetadata | null | undefined): Promise<void>;
    setEmulatedNetworkConditions(networkConditions: Emulation.NetworkConditions | null): Promise<void>;
    setTouchOverride(maxTouchPoints: number | null): Promise<void>;
    setExtraHeaders(cdpExtraHeaders: Protocol.Network.Headers): Promise<Promise<any>>;
    setScrollbarTypeOverride(scrollbarType: 'classic' | 'overlay' | null): Promise<void>;
}
export declare function serializeOrigin(origin: string): string;
