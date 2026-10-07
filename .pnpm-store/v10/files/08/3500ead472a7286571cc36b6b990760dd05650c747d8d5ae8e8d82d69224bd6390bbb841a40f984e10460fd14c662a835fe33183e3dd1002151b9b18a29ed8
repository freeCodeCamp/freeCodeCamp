/**
 * @fileoverview `NetworkRequest` represents a single network request and keeps
 * track of all the related CDP events.
 */
import type { Protocol } from 'devtools-protocol';
import { Network } from '../../../protocol/protocol.js';
import { Deferred } from '../../../utils/Deferred.js';
import { type LoggerFn } from '../../../utils/log.js';
import type { CdpTarget } from '../cdp/CdpTarget.js';
import type { EventManager } from '../session/EventManager.js';
import type { NetworkStorage } from './NetworkStorage.js';
/** Abstracts one individual network request. */
export declare class NetworkRequest {
    #private;
    static unknownParameter: string;
    waitNextPhase: Deferred<void>;
    constructor(id: Network.Request, eventManager: EventManager, networkStorage: NetworkStorage, cdpTarget: CdpTarget, redirectCount?: number, logger?: LoggerFn);
    get id(): string;
    get fetchId(): string | undefined;
    /**
     * When blocked returns the phase for it
     */
    get interceptPhase(): Network.InterceptPhase | undefined;
    get url(): string;
    get redirectCount(): number;
    get cdpTarget(): CdpTarget;
    /** CdpTarget can be changed when frame is moving out of process. */
    updateCdpTarget(cdpTarget: CdpTarget): void;
    get cdpClient(): import("../../BidiMapper.js").CdpClient;
    isRedirecting(): boolean;
    get bodySize(): number;
    handleRedirect(event: Protocol.Network.RequestWillBeSentEvent): void;
    onRequestWillBeSentEvent(event: Protocol.Network.RequestWillBeSentEvent): void;
    onRequestWillBeSentExtraInfoEvent(event: Protocol.Network.RequestWillBeSentExtraInfoEvent): void;
    onResponseReceivedExtraInfoEvent(event: Protocol.Network.ResponseReceivedExtraInfoEvent): void;
    onResponseReceivedEvent(event: Protocol.Network.ResponseReceivedEvent): void;
    onServedFromCache(): void;
    onLoadingFinishedEvent(event: Protocol.Network.LoadingFinishedEvent): void;
    onDataReceivedEvent(event: Protocol.Network.DataReceivedEvent): void;
    onLoadingFailedEvent(event: Protocol.Network.LoadingFailedEvent): void;
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-failRequest */
    failRequest(errorReason: Protocol.Network.ErrorReason): Promise<void>;
    onRequestPaused(event: Protocol.Fetch.RequestPausedEvent): void;
    onAuthRequired(event: Protocol.Fetch.AuthRequiredEvent): void;
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueRequest */
    continueRequest(overrides?: Omit<Network.ContinueRequestParameters, 'request'>): Promise<void>;
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueResponse */
    continueResponse(overrides?: Omit<Network.ContinueResponseParameters, 'request'>): Promise<void>;
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-continueWithAuth */
    continueWithAuth(authChallenge: Omit<Network.ContinueWithAuthParameters, 'request'>): Promise<void>;
    /** @see https://chromedevtools.github.io/devtools-protocol/tot/Fetch/#method-provideResponse */
    provideResponse(overrides: Omit<Network.ProvideResponseParameters, 'request'>): Promise<void>;
    dispose(): void;
    get encodedResponseBodySize(): number;
}
