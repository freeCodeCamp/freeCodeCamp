/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import { type CDPSession } from '../api/CDPSession.js';
import type { GeolocationOptions, MediaFeature } from '../api/Page.js';
import type { Viewport } from '../common/Viewport.js';
/**
 * @internal
 */
export interface ClientProvider {
    clients(): CDPSession[];
    registerState(state: EmulatedState<any>): void;
}
/**
 * @internal
 */
export declare class EmulatedState<T extends {
    active: boolean;
}> {
    #private;
    constructor(initialState: T, clientProvider: ClientProvider, updater: (client: CDPSession, state: T) => Promise<void>);
    setState(state: T): Promise<void>;
    get state(): T;
    sync(): Promise<void>;
}
/**
 * @internal
 */
export declare class EmulationManager implements ClientProvider {
    #private;
    constructor(client: CDPSession);
    updateClient(client: CDPSession): void;
    registerState(state: EmulatedState<any>): void;
    clients(): CDPSession[];
    registerSpeculativeSession(client: CDPSession): Promise<void>;
    get javascriptEnabled(): boolean;
    emulateViewport(viewport: Viewport | null): Promise<boolean>;
    emulateIdleState(overrides?: {
        isUserActive: boolean;
        isScreenUnlocked: boolean;
    }): Promise<void>;
    emulateTimezone(timezoneId?: string): Promise<void>;
    emulateVisionDeficiency(type?: Protocol.Emulation.SetEmulatedVisionDeficiencyRequest['type']): Promise<void>;
    emulateCPUThrottling(factor: number | null): Promise<void>;
    emulateMediaFeatures(features?: MediaFeature[]): Promise<void>;
    emulateMediaType(type?: string): Promise<void>;
    setGeolocation(options: GeolocationOptions): Promise<void>;
    /**
     * Resets default white background
     */
    resetDefaultBackgroundColor(): Promise<void>;
    /**
     * Hides default white background
     */
    setTransparentBackgroundColor(): Promise<void>;
    setJavaScriptEnabled(enabled: boolean): Promise<void>;
    emulateFocus(enabled: boolean): Promise<void>;
}
//# sourceMappingURL=EmulationManager.d.ts.map