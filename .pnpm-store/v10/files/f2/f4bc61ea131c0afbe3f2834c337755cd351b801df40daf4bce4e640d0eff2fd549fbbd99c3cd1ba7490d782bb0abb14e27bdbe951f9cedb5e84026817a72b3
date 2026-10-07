/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import type { DeviceRequestPrompt } from '../api/DeviceRequestPrompt.js';
import type { ElementHandle } from '../api/ElementHandle.js';
import type { SetContentWaitForOptions, WaitForOptions } from '../api/Frame.js';
import { Frame } from '../api/Frame.js';
import type { HTTPResponse } from '../api/HTTPResponse.js';
import type { WaitTimeoutOptions } from '../api/Page.js';
import type { Realm } from '../puppeteer-core.js';
import { disposeSymbol } from '../util/disposable.js';
import { Accessibility } from './Accessibility.js';
import type { Binding } from './Binding.js';
import type { CdpPreloadScript } from './CdpPreloadScript.js';
import type { FrameManager } from './FrameManager.js';
import type { IsolatedWorldChart } from './IsolatedWorld.js';
import { IsolatedWorld } from './IsolatedWorld.js';
import { type PuppeteerLifeCycleEvent } from './LifecycleWatcher.js';
import type { CdpPage } from './Page.js';
/**
 * @internal
 */
export declare class CdpFrame extends Frame {
    #private;
    _frameManager: FrameManager;
    _loaderId: string;
    _lifecycleEvents: Set<string>;
    _id: string;
    _parentId?: string;
    accessibility: Accessibility;
    worlds: IsolatedWorldChart;
    extensionWorlds: Record<string, IsolatedWorld>;
    constructor(frameManager: FrameManager, frameId: string, parentFrameId: string | undefined, client: CDPSession);
    /**
     * @internal
     */
    registerWorldListeners(world: IsolatedWorld): void;
    /**
     * This is used internally in DevTools.
     *
     * @internal
     */
    _client(): CDPSession;
    /**
     * Updates the frame ID with the new ID. This happens when the main frame is
     * replaced by a different frame.
     */
    updateId(id: string): void;
    updateClient(client: CDPSession): void;
    page(): CdpPage;
    goto(url: string, options?: {
        referer?: string;
        referrerPolicy?: string;
        timeout?: number;
        waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];
    }): Promise<HTTPResponse | null>;
    waitForNavigation(options?: WaitForOptions): Promise<HTTPResponse | null>;
    get client(): CDPSession;
    mainRealm(): IsolatedWorld;
    isolatedRealm(): IsolatedWorld;
    setContent(html: string, options?: SetContentWaitForOptions): Promise<void>;
    url(): string;
    parentFrame(): CdpFrame | null;
    childFrames(): CdpFrame[];
    addPreloadScript(preloadScript: CdpPreloadScript): Promise<void>;
    addExposedFunctionBinding(binding: Binding): Promise<void>;
    removeExposedFunctionBinding(binding: Binding): Promise<void>;
    waitForDevicePrompt(options?: WaitTimeoutOptions): Promise<DeviceRequestPrompt>;
    _navigated(framePayload: Protocol.Page.Frame): void;
    _navigatedWithinDocument(url: string): void;
    _onLifecycleEvent(loaderId: string, name: string): void;
    _onLoadingStopped(): void;
    _onLoadingStarted(): void;
    get detached(): boolean;
    [disposeSymbol](): void;
    exposeFunction(): never;
    frameElement(): Promise<ElementHandle<HTMLIFrameElement> | null>;
    /**
     * @public
     */
    extensionRealms(): Realm[];
}
/**
 * @internal
 */
export declare function referrerPolicyToProtocol(referrerPolicy: string): Protocol.Page.ReferrerPolicy;
//# sourceMappingURL=Frame.d.ts.map