import type { CdpClient } from '../../../cdp/CdpClient.js';
import type { CdpConnection } from '../../../cdp/CdpConnection.js';
import type { Browser } from '../../../protocol/protocol.js';
import { type LoggerFn } from '../../../utils/log.js';
import type { BluetoothProcessor } from '../bluetooth/BluetoothProcessor.js';
import type { ContextConfigStorage } from '../browser/ContextConfigStorage.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
import type { NetworkStorage } from '../network/NetworkStorage.js';
import type { PreloadScriptStorage } from '../script/PreloadScriptStorage.js';
import type { RealmStorage } from '../script/RealmStorage.js';
import type { EventManager } from '../session/EventManager.js';
import type { SpeculationProcessor } from '../speculation/SpeculationProcessor.js';
export declare class CdpTargetManager {
    #private;
    constructor(cdpConnection: CdpConnection, browserCdpClient: CdpClient, selfTargetId: string, eventManager: EventManager, browsingContextStorage: BrowsingContextStorage, realmStorage: RealmStorage, networkStorage: NetworkStorage, configStorage: ContextConfigStorage, bluetoothProcessor: BluetoothProcessor, speculationProcessor: SpeculationProcessor, preloadScriptStorage: PreloadScriptStorage, defaultUserContextId: Browser.UserContext, defaultUserAgent: string, logger?: LoggerFn);
}
