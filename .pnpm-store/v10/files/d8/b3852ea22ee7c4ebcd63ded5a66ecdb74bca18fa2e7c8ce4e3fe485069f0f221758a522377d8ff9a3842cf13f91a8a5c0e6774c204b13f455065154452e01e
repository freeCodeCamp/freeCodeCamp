/**
 * Copyright 2021 Google LLC.
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
import type { CdpClient } from '../cdp/CdpClient.js';
import type { CdpConnection } from '../cdp/CdpConnection.js';
import { type ChromiumBidi } from '../protocol/protocol.js';
import { EventEmitter } from '../utils/EventEmitter.js';
import { type LoggerFn } from '../utils/log.js';
import type { Result } from '../utils/result.js';
import type { BidiCommandParameterParser } from './BidiParser.js';
import type { MapperOptions } from './MapperOptions.js';
import type { BluetoothProcessor } from './modules/bluetooth/BluetoothProcessor.js';
import type { ContextConfigStorage } from './modules/browser/ContextConfigStorage.js';
import type { UserContextStorage } from './modules/browser/UserContextStorage.js';
import type { BrowsingContextStorage } from './modules/context/BrowsingContextStorage.js';
import type { NetworkStorage } from './modules/network/NetworkStorage.js';
import type { PreloadScriptStorage } from './modules/script/PreloadScriptStorage.js';
import type { RealmStorage } from './modules/script/RealmStorage.js';
import type { EventManager } from './modules/session/EventManager.js';
import { OutgoingMessage } from './OutgoingMessage.js';
export declare const enum CommandProcessorEvents {
    Response = "response"
}
interface CommandProcessorEventsMap extends Record<string | symbol, unknown> {
    [CommandProcessorEvents.Response]: {
        message: Promise<Result<OutgoingMessage>>;
        event: string;
    };
}
export declare class CommandProcessor extends EventEmitter<CommandProcessorEventsMap> {
    #private;
    constructor(cdpConnection: CdpConnection, browserCdpClient: CdpClient, eventManager: EventManager, browsingContextStorage: BrowsingContextStorage, realmStorage: RealmStorage, preloadScriptStorage: PreloadScriptStorage, networkStorage: NetworkStorage, contextConfigStorage: ContextConfigStorage, bluetoothProcessor: BluetoothProcessor, userContextStorage: UserContextStorage, parser: BidiCommandParameterParser | undefined, initConnection: (options: MapperOptions) => Promise<void>, logger?: LoggerFn);
    processCommand(command: ChromiumBidi.Command): Promise<void>;
}
export {};
