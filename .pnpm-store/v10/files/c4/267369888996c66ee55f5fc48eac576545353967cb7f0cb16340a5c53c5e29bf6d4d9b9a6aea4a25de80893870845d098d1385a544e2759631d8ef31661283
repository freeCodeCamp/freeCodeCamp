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
import { EventEmitter } from '../utils/EventEmitter.js';
import { LogType } from '../utils/log.js';
import { ProcessingQueue } from '../utils/ProcessingQueue.js';
import { CommandProcessor } from './CommandProcessor.js';
import { BluetoothProcessor } from './modules/bluetooth/BluetoothProcessor.js';
import { ContextConfigStorage } from './modules/browser/ContextConfigStorage.js';
import { UserContextStorage } from './modules/browser/UserContextStorage.js';
import { CdpTargetManager } from './modules/cdp/CdpTargetManager.js';
import { BrowsingContextStorage } from './modules/context/BrowsingContextStorage.js';
import { NetworkStorage } from './modules/network/NetworkStorage.js';
import { PreloadScriptStorage } from './modules/script/PreloadScriptStorage.js';
import { RealmStorage } from './modules/script/RealmStorage.js';
import { EventManager, } from './modules/session/EventManager.js';
import { SpeculationProcessor } from './modules/speculation/SpeculationProcessor.js';
export class BidiServer extends EventEmitter {
    #messageQueue;
    #transport;
    #commandProcessor;
    #eventManager;
    #browsingContextStorage = new BrowsingContextStorage();
    #realmStorage = new RealmStorage();
    #preloadScriptStorage = new PreloadScriptStorage();
    #bluetoothProcessor;
    #speculationProcessor;
    #logger;
    #handleIncomingMessage = (message) => {
        void this.#commandProcessor.processCommand(message).catch((error) => {
            this.#logger?.(LogType.debugError, error);
        });
    };
    #processOutgoingMessage = async (messageEntry) => {
        const message = messageEntry.message;
        if (messageEntry.googChannel !== null) {
            message['goog:channel'] = messageEntry.googChannel;
        }
        await this.#transport.sendMessage(message);
    };
    constructor(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, defaultUserAgent, parser, logger) {
        super();
        this.#logger = logger;
        this.#messageQueue = new ProcessingQueue(this.#processOutgoingMessage, this.#logger);
        this.#transport = bidiTransport;
        this.#transport.setOnMessage(this.#handleIncomingMessage);
        const contextConfigStorage = new ContextConfigStorage();
        const userContextStorage = new UserContextStorage(browserCdpClient);
        this.#eventManager = new EventManager(this.#browsingContextStorage, userContextStorage);
        const networkStorage = new NetworkStorage(this.#eventManager, this.#browsingContextStorage, browserCdpClient, logger);
        this.#bluetoothProcessor = new BluetoothProcessor(this.#eventManager, this.#browsingContextStorage);
        this.#speculationProcessor = new SpeculationProcessor(this.#eventManager, this.#logger);
        this.#commandProcessor = new CommandProcessor(cdpConnection, browserCdpClient, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, this.#preloadScriptStorage, networkStorage, contextConfigStorage, this.#bluetoothProcessor, userContextStorage, parser, async (options) => {
            // This is required to ignore certificate errors when service worker is fetched.
            await browserCdpClient.sendCommand('Security.setIgnoreCertificateErrors', {
                ignore: options.acceptInsecureCerts ?? false,
            });
            contextConfigStorage.updateGlobalConfig({
                acceptInsecureCerts: options.acceptInsecureCerts ?? false,
                userPromptHandler: options.unhandledPromptBehavior,
                prerenderingDisabled: options?.['goog:prerenderingDisabled'] ?? false,
                disableNetworkDurableMessages: options?.['goog:disableNetworkDurableMessages'],
            });
            new CdpTargetManager(cdpConnection, browserCdpClient, selfTargetId, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, networkStorage, contextConfigStorage, this.#bluetoothProcessor, this.#speculationProcessor, this.#preloadScriptStorage, defaultUserContextId, defaultUserAgent, logger);
            // Needed to get events about new targets.
            await browserCdpClient.sendCommand('Target.setDiscoverTargets', {
                discover: true,
            });
            // Needed to automatically attach to new targets.
            await browserCdpClient.sendCommand('Target.setAutoAttach', {
                autoAttach: true,
                waitForDebuggerOnStart: true,
                flatten: true,
                // Browser session should attach to tab instead of the page, so that
                // prerendering is not blocked.
                filter: [
                    {
                        type: 'page',
                        exclude: true,
                    },
                    {},
                ],
            });
            await this.#topLevelContextsLoaded();
        }, this.#logger);
        this.#eventManager.on("event" /* EventManagerEvents.Event */, ({ message, event }) => {
            this.emitOutgoingMessage(message, event);
        });
        this.#commandProcessor.on("response" /* CommandProcessorEvents.Response */, ({ message, event }) => {
            this.emitOutgoingMessage(message, event);
        });
    }
    /**
     * Creates and starts BiDi Mapper instance.
     */
    static async createAndStart(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, parser, logger) {
        const [defaultUserContextId, version] = await Promise.all([
            this.#getDefaultUserContextId(browserCdpClient),
            // Fetch the default User Agent to be used in `CdpTarget`. This allows to avoid
            // round trips to the browser for every target override.
            browserCdpClient.sendCommand('Browser.getVersion'),
            // Required for `Browser.downloadWillBegin` events.
            browserCdpClient.sendCommand('Browser.setDownloadBehavior', {
                behavior: 'default',
                eventsEnabled: true,
            }),
        ]);
        const server = new BidiServer(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, version.userAgent, parser, logger);
        return server;
    }
    static async #getDefaultUserContextId(browserCdpClient) {
        // In chromium before `145.0.7578.0`, the default context is not exposed in
        // `Target.getBrowserContexts`, but can be observed via `Target.getTargets`.
        // If so, try to determine the default browser context by checking which one
        // is mentioned in `Target.getTargets` and not in
        // `Target.getBrowserContexts`.
        // TODO(after 2026-02-24): rely only on `defaultBrowserContextId` from
        // `Target.getBrowserContexts` after Chromium 145 reaches stable.
        const [{ defaultBrowserContextId, browserContextIds }, { targetInfos }] = await Promise.all([
            browserCdpClient.sendCommand('Target.getBrowserContexts'),
            browserCdpClient.sendCommand('Target.getTargets'),
        ]);
        if (defaultBrowserContextId) {
            return defaultBrowserContextId;
        }
        for (const info of targetInfos) {
            if (info.browserContextId &&
                !browserContextIds.includes(info.browserContextId)) {
                // The target belongs to a browser context that is not mentioned in
                // `Target.getBrowserContexts`. This is the default browser context.
                return info.browserContextId;
            }
        }
        // The browser context is unknown.
        return 'default';
    }
    /**
     * Sends BiDi message.
     */
    emitOutgoingMessage(messageEntry, event) {
        this.#messageQueue.add(messageEntry, event);
    }
    close() {
        this.#transport.close();
    }
    async #topLevelContextsLoaded() {
        await Promise.all(this.#browsingContextStorage
            .getTopLevelContexts()
            .map((c) => c.lifecycleLoaded()));
    }
}
//# sourceMappingURL=BidiServer.js.map