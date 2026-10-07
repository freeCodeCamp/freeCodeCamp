import type { Protocol } from 'devtools-protocol';
import type { CdpClient } from '../../../cdp/CdpClient.js';
import { type Browser, type BrowsingContext, type ChromiumBidi, Emulation, type UAClientHints } from '../../../protocol/protocol.js';
import { Deferred } from '../../../utils/Deferred.js';
import type { LoggerFn } from '../../../utils/log.js';
import type { Result } from '../../../utils/result.js';
import type { ContextConfigStorage } from '../browser/ContextConfigStorage.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
import { type NetworkStorage } from '../network/NetworkStorage.js';
import type { ChannelProxy } from '../script/ChannelProxy.js';
import type { PreloadScriptStorage } from '../script/PreloadScriptStorage.js';
import type { RealmStorage } from '../script/RealmStorage.js';
import type { EventManager } from '../session/EventManager.js';
export declare class CdpTarget {
    #private;
    readonly userContext: Browser.UserContext;
    readonly contextConfigStorage: ContextConfigStorage;
    static create(targetId: Protocol.Target.TargetID, cdpClient: CdpClient, browserCdpClient: CdpClient, parentCdpClient: CdpClient, realmStorage: RealmStorage, eventManager: EventManager, preloadScriptStorage: PreloadScriptStorage, browsingContextStorage: BrowsingContextStorage, networkStorage: NetworkStorage, configStorage: ContextConfigStorage, userContext: Browser.UserContext, defaultUserAgent: string, logger?: LoggerFn): CdpTarget;
    constructor(targetId: Protocol.Target.TargetID, cdpClient: CdpClient, browserCdpClient: CdpClient, parentCdpClient: CdpClient, eventManager: EventManager, realmStorage: RealmStorage, preloadScriptStorage: PreloadScriptStorage, browsingContextStorage: BrowsingContextStorage, configStorage: ContextConfigStorage, networkStorage: NetworkStorage, userContext: Browser.UserContext, defaultUserAgent: string, logger: LoggerFn | undefined);
    /** Returns a deferred that resolves when the target is unblocked. */
    get unblocked(): Deferred<Result<void>>;
    get id(): Protocol.Target.TargetID;
    get cdpClient(): CdpClient;
    get parentCdpClient(): CdpClient;
    get browserCdpClient(): CdpClient;
    /** Needed for CDP escape path. */
    get cdpSessionId(): Protocol.Target.SessionID;
    /**
     * Window id the target belongs to. If not known, returns 0.
     */
    get windowId(): number;
    toggleFetchIfNeeded(): Promise<void>;
    /**
     * Toggles CDP "Fetch" domain and enable/disable network cache.
     */
    toggleNetworkIfNeeded(): Promise<void>;
    toggleSetCacheDisabled(disable?: boolean): Promise<void>;
    toggleDeviceAccessIfNeeded(): Promise<void>;
    togglePreloadIfNeeded(): Promise<void>;
    toggleNetwork(): Promise<void>;
    /**
     * All the ProxyChannels from all the preload scripts of the given
     * BrowsingContext.
     */
    getChannels(): ChannelProxy[];
    setDeviceMetricsOverride(viewport: BrowsingContext.Viewport | null, devicePixelRatio: number | null, screenOrientation: Emulation.ScreenOrientation | null, screenArea: Emulation.ScreenArea | null, scrollbarType?: 'classic' | 'overlay' | null): Promise<void>;
    get topLevelId(): string;
    isSubscribedTo(moduleOrEvent: ChromiumBidi.EventNames): boolean;
    setGeolocationOverride(geolocation: Emulation.GeolocationCoordinates | Emulation.GeolocationPositionError | null): Promise<void>;
    setTouchOverride(maxTouchPoints: number | null): Promise<void>;
    setLocaleOverride(locale: string | null): Promise<void>;
    setScriptingEnabled(scriptingEnabled: false | null): Promise<void>;
    setTimezoneOverride(timezone: string | null): Promise<void>;
    setExtraHeaders(headers: Protocol.Network.Headers): Promise<void>;
    setUserAgentAndAcceptLanguage(userAgent: string | null | undefined, acceptLanguage: string | null | undefined, clientHints?: UAClientHints.UserAgentClientHints.ClientHintsMetadata | null): Promise<void>;
    setEmulatedNetworkConditions(networkConditions: Emulation.NetworkConditions | null): Promise<void>;
}
