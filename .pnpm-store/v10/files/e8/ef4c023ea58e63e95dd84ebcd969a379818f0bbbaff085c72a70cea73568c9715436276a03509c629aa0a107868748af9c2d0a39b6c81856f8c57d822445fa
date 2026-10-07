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
import { Exception, UnknownCommandException, UnknownErrorException, NoSuchFrameException, UnsupportedOperationException, } from '../protocol/protocol.js';
import { EventEmitter } from '../utils/EventEmitter.js';
import { LogType } from '../utils/log.js';
import { BidiNoOpParser } from './BidiNoOpParser.js';
import { BrowserProcessor } from './modules/browser/BrowserProcessor.js';
import { CdpProcessor } from './modules/cdp/CdpProcessor.js';
import { BrowsingContextProcessor } from './modules/context/BrowsingContextProcessor.js';
import { EmulationProcessor } from './modules/emulation/EmulationProcessor.js';
import { InputProcessor } from './modules/input/InputProcessor.js';
import { NetworkProcessor } from './modules/network/NetworkProcessor.js';
import { PermissionsProcessor } from './modules/permissions/PermissionsProcessor.js';
import { ScriptProcessor } from './modules/script/ScriptProcessor.js';
import { SessionProcessor } from './modules/session/SessionProcessor.js';
import { StorageProcessor } from './modules/storage/StorageProcessor.js';
import { WebExtensionProcessor } from './modules/webExtension/WebExtensionProcessor.js';
import { OutgoingMessage } from './OutgoingMessage.js';
export class CommandProcessor extends EventEmitter {
    // keep-sorted start
    #bluetoothProcessor;
    #browserCdpClient;
    #browserProcessor;
    #browsingContextProcessor;
    #cdpProcessor;
    #emulationProcessor;
    #inputProcessor;
    #networkProcessor;
    #permissionsProcessor;
    #scriptProcessor;
    #sessionProcessor;
    #storageProcessor;
    #webExtensionProcessor;
    // keep-sorted end
    #parser;
    #logger;
    constructor(cdpConnection, browserCdpClient, eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, networkStorage, contextConfigStorage, bluetoothProcessor, userContextStorage, parser = new BidiNoOpParser(), initConnection, logger) {
        super();
        this.#browserCdpClient = browserCdpClient;
        this.#parser = parser;
        this.#logger = logger;
        this.#bluetoothProcessor = bluetoothProcessor;
        // keep-sorted start block=yes
        this.#browserProcessor = new BrowserProcessor(browserCdpClient, browsingContextStorage, contextConfigStorage, userContextStorage);
        this.#browsingContextProcessor = new BrowsingContextProcessor(browserCdpClient, browsingContextStorage, userContextStorage, contextConfigStorage, eventManager);
        this.#cdpProcessor = new CdpProcessor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient);
        this.#emulationProcessor = new EmulationProcessor(browsingContextStorage, userContextStorage, contextConfigStorage);
        this.#inputProcessor = new InputProcessor(browsingContextStorage);
        this.#networkProcessor = new NetworkProcessor(browsingContextStorage, networkStorage, userContextStorage, contextConfigStorage);
        this.#permissionsProcessor = new PermissionsProcessor(browserCdpClient);
        this.#scriptProcessor = new ScriptProcessor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, userContextStorage, logger);
        this.#sessionProcessor = new SessionProcessor(eventManager, browserCdpClient, initConnection);
        this.#storageProcessor = new StorageProcessor(browserCdpClient, browsingContextStorage, logger);
        this.#webExtensionProcessor = new WebExtensionProcessor(browserCdpClient);
        // keep-sorted end
    }
    async #processCommand(command) {
        switch (command.method) {
            // Bluetooth module
            // keep-sorted start block=yes
            case 'bluetooth.disableSimulation':
                return await this.#bluetoothProcessor.disableSimulation(this.#parser.parseDisableSimulationParameters(command.params));
            case 'bluetooth.handleRequestDevicePrompt':
                return await this.#bluetoothProcessor.handleRequestDevicePrompt(this.#parser.parseHandleRequestDevicePromptParams(command.params));
            case 'bluetooth.simulateAdapter':
                return await this.#bluetoothProcessor.simulateAdapter(this.#parser.parseSimulateAdapterParameters(command.params));
            case 'bluetooth.simulateAdvertisement':
                return await this.#bluetoothProcessor.simulateAdvertisement(this.#parser.parseSimulateAdvertisementParameters(command.params));
            case 'bluetooth.simulateCharacteristic':
                return await this.#bluetoothProcessor.simulateCharacteristic(this.#parser.parseSimulateCharacteristicParameters(command.params));
            case 'bluetooth.simulateCharacteristicResponse':
                return await this.#bluetoothProcessor.simulateCharacteristicResponse(this.#parser.parseSimulateCharacteristicResponseParameters(command.params));
            case 'bluetooth.simulateDescriptor':
                return await this.#bluetoothProcessor.simulateDescriptor(this.#parser.parseSimulateDescriptorParameters(command.params));
            case 'bluetooth.simulateDescriptorResponse':
                return await this.#bluetoothProcessor.simulateDescriptorResponse(this.#parser.parseSimulateDescriptorResponseParameters(command.params));
            case 'bluetooth.simulateGattConnectionResponse':
                return await this.#bluetoothProcessor.simulateGattConnectionResponse(this.#parser.parseSimulateGattConnectionResponseParameters(command.params));
            case 'bluetooth.simulateGattDisconnection':
                return await this.#bluetoothProcessor.simulateGattDisconnection(this.#parser.parseSimulateGattDisconnectionParameters(command.params));
            case 'bluetooth.simulatePreconnectedPeripheral':
                return await this.#bluetoothProcessor.simulatePreconnectedPeripheral(this.#parser.parseSimulatePreconnectedPeripheralParameters(command.params));
            case 'bluetooth.simulateService':
                return await this.#bluetoothProcessor.simulateService(this.#parser.parseSimulateServiceParameters(command.params));
            // keep-sorted end
            // Browser module
            // keep-sorted start block=yes
            case 'browser.close':
                return this.#browserProcessor.close();
            case 'browser.createUserContext':
                return await this.#browserProcessor.createUserContext(this.#parser.parseCreateUserContextParameters(command.params));
            case 'browser.getClientWindows':
                return await this.#browserProcessor.getClientWindows();
            case 'browser.getUserContexts':
                return await this.#browserProcessor.getUserContexts();
            case 'browser.removeUserContext':
                return await this.#browserProcessor.removeUserContext(this.#parser.parseRemoveUserContextParameters(command.params));
            case 'browser.setClientWindowState':
                return await this.#browserProcessor.setClientWindowState(this.#parser.parseSetClientWindowStateParameters(command.params));
            case 'browser.setDownloadBehavior':
                return await this.#browserProcessor.setDownloadBehavior(this.#parser.parseSetDownloadBehaviorParameters(command.params));
            // keep-sorted end
            // Browsing Context module
            // keep-sorted start block=yes
            case 'browsingContext.activate':
                return await this.#browsingContextProcessor.activate(this.#parser.parseActivateParams(command.params));
            case 'browsingContext.captureScreenshot':
                return await this.#browsingContextProcessor.captureScreenshot(this.#parser.parseCaptureScreenshotParams(command.params));
            case 'browsingContext.close':
                return await this.#browsingContextProcessor.close(this.#parser.parseCloseParams(command.params));
            case 'browsingContext.create':
                return await this.#browsingContextProcessor.create(this.#parser.parseCreateParams(command.params));
            case 'browsingContext.getTree':
                return this.#browsingContextProcessor.getTree(this.#parser.parseGetTreeParams(command.params));
            case 'browsingContext.handleUserPrompt':
                return await this.#browsingContextProcessor.handleUserPrompt(this.#parser.parseHandleUserPromptParams(command.params));
            case 'browsingContext.locateNodes':
                return await this.#browsingContextProcessor.locateNodes(this.#parser.parseLocateNodesParams(command.params));
            case 'browsingContext.navigate':
                return await this.#browsingContextProcessor.navigate(this.#parser.parseNavigateParams(command.params));
            case 'browsingContext.print':
                return await this.#browsingContextProcessor.print(this.#parser.parsePrintParams(command.params));
            case 'browsingContext.reload':
                return await this.#browsingContextProcessor.reload(this.#parser.parseReloadParams(command.params));
            case 'browsingContext.setBypassCSP':
                this.#parser.parseSetBypassCspParams(command.params);
                throw new UnsupportedOperationException(`Method ${command.method} is not implemented.`);
            case 'browsingContext.setViewport':
                return await this.#browsingContextProcessor.setViewport(this.#parser.parseSetViewportParams(command.params));
            case 'browsingContext.traverseHistory':
                return await this.#browsingContextProcessor.traverseHistory(this.#parser.parseTraverseHistoryParams(command.params));
            // keep-sorted end
            // CDP module
            // keep-sorted start block=yes
            case 'goog:cdp.getSession':
                return this.#cdpProcessor.getSession(this.#parser.parseGetSessionParams(command.params));
            case 'goog:cdp.resolveRealm':
                return this.#cdpProcessor.resolveRealm(this.#parser.parseResolveRealmParams(command.params));
            case 'goog:cdp.sendCommand':
                return await this.#cdpProcessor.sendCommand(this.#parser.parseSendCommandParams(command.params));
            // keep-sorted end
            // Emulation module
            // keep-sorted start block=yes
            case 'emulation.setForcedColorsModeThemeOverride':
                this.#parser.parseSetForcedColorsModeThemeOverrideParams(command.params);
                throw new UnsupportedOperationException(`Method ${command.method} is not implemented.`);
            case 'emulation.setGeolocationOverride':
                return await this.#emulationProcessor.setGeolocationOverride(this.#parser.parseSetGeolocationOverrideParams(command.params));
            case 'emulation.setLocaleOverride':
                return await this.#emulationProcessor.setLocaleOverride(this.#parser.parseSetLocaleOverrideParams(command.params));
            case 'emulation.setNetworkConditions':
                return await this.#emulationProcessor.setNetworkConditions(this.#parser.parseSetNetworkConditionsParams(command.params));
            case 'emulation.setScreenOrientationOverride':
                return await this.#emulationProcessor.setScreenOrientationOverride(this.#parser.parseSetScreenOrientationOverrideParams(command.params));
            case 'emulation.setScreenSettingsOverride':
                return await this.#emulationProcessor.setScreenSettingsOverride(this.#parser.parseSetScreenSettingsOverrideParams(command.params));
            case 'emulation.setScriptingEnabled':
                return await this.#emulationProcessor.setScriptingEnabled(this.#parser.parseSetScriptingEnabledParams(command.params));
            case 'emulation.setScrollbarTypeOverride':
                return await this.#emulationProcessor.setScrollbarTypeOverride(this.#parser.parseSetScrollbarTypeOverrideParams(command.params));
            case 'emulation.setTimezoneOverride':
                return await this.#emulationProcessor.setTimezoneOverride(this.#parser.parseSetTimezoneOverrideParams(command.params));
            case 'emulation.setTouchOverride':
                return await this.#emulationProcessor.setTouchOverride(this.#parser.parseSetTouchOverrideParams(command.params));
            case 'emulation.setUserAgentOverride':
                return await this.#emulationProcessor.setUserAgentOverrideParams(this.#parser.parseSetUserAgentOverrideParams(command.params));
            case 'userAgentClientHints.setClientHintsOverride':
                return await this.#emulationProcessor.setClientHintsOverride(this.#parser.parseSetClientHintsOverrideParams(command.params));
            // keep-sorted end
            // Input module
            // keep-sorted start block=yes
            case 'input.performActions':
                return await this.#inputProcessor.performActions(this.#parser.parsePerformActionsParams(command.params));
            case 'input.releaseActions':
                return await this.#inputProcessor.releaseActions(this.#parser.parseReleaseActionsParams(command.params));
            case 'input.setFiles':
                return await this.#inputProcessor.setFiles(this.#parser.parseSetFilesParams(command.params));
            // keep-sorted end
            // Network module
            // keep-sorted start block=yes
            case 'network.addDataCollector':
                return await this.#networkProcessor.addDataCollector(this.#parser.parseAddDataCollectorParams(command.params));
            case 'network.addIntercept':
                return await this.#networkProcessor.addIntercept(this.#parser.parseAddInterceptParams(command.params));
            case 'network.continueRequest':
                return await this.#networkProcessor.continueRequest(this.#parser.parseContinueRequestParams(command.params));
            case 'network.continueResponse':
                return await this.#networkProcessor.continueResponse(this.#parser.parseContinueResponseParams(command.params));
            case 'network.continueWithAuth':
                return await this.#networkProcessor.continueWithAuth(this.#parser.parseContinueWithAuthParams(command.params));
            case 'network.disownData':
                return this.#networkProcessor.disownData(this.#parser.parseDisownDataParams(command.params));
            case 'network.failRequest':
                return await this.#networkProcessor.failRequest(this.#parser.parseFailRequestParams(command.params));
            case 'network.getData':
                return await this.#networkProcessor.getData(this.#parser.parseGetDataParams(command.params));
            case 'network.provideResponse':
                return await this.#networkProcessor.provideResponse(this.#parser.parseProvideResponseParams(command.params));
            case 'network.removeDataCollector':
                return await this.#networkProcessor.removeDataCollector(this.#parser.parseRemoveDataCollectorParams(command.params));
            case 'network.removeIntercept':
                return await this.#networkProcessor.removeIntercept(this.#parser.parseRemoveInterceptParams(command.params));
            case 'network.setCacheBehavior':
                return await this.#networkProcessor.setCacheBehavior(this.#parser.parseSetCacheBehaviorParams(command.params));
            case 'network.setExtraHeaders':
                return await this.#networkProcessor.setExtraHeaders(this.#parser.parseSetExtraHeadersParams(command.params));
            // keep-sorted end
            // Permissions module
            // keep-sorted start block=yes
            case 'permissions.setPermission':
                return await this.#permissionsProcessor.setPermissions(this.#parser.parseSetPermissionsParams(command.params));
            // keep-sorted end
            // Script module
            // keep-sorted start block=yes
            case 'script.addPreloadScript':
                return await this.#scriptProcessor.addPreloadScript(this.#parser.parseAddPreloadScriptParams(command.params));
            case 'script.callFunction':
                return await this.#scriptProcessor.callFunction(this.#parser.parseCallFunctionParams(this.#processTargetParams(command.params)));
            case 'script.disown':
                return await this.#scriptProcessor.disown(this.#parser.parseDisownParams(this.#processTargetParams(command.params)));
            case 'script.evaluate':
                return await this.#scriptProcessor.evaluate(this.#parser.parseEvaluateParams(this.#processTargetParams(command.params)));
            case 'script.getRealms':
                return this.#scriptProcessor.getRealms(this.#parser.parseGetRealmsParams(command.params));
            case 'script.removePreloadScript':
                return await this.#scriptProcessor.removePreloadScript(this.#parser.parseRemovePreloadScriptParams(command.params));
            // keep-sorted end
            // Session module
            // keep-sorted start block=yes
            case 'session.end':
                throw new UnsupportedOperationException(`Method ${command.method} is not implemented.`);
            case 'session.new':
                return await this.#sessionProcessor.new(command.params);
            case 'session.status':
                return this.#sessionProcessor.status();
            case 'session.subscribe':
                return await this.#sessionProcessor.subscribe(this.#parser.parseSubscribeParams(command.params), command['goog:channel']);
            case 'session.unsubscribe':
                return await this.#sessionProcessor.unsubscribe(this.#parser.parseUnsubscribeParams(command.params), command['goog:channel']);
            // keep-sorted end
            // Storage module
            // keep-sorted start block=yes
            case 'storage.deleteCookies':
                return await this.#storageProcessor.deleteCookies(this.#parser.parseDeleteCookiesParams(command.params));
            case 'storage.getCookies':
                return await this.#storageProcessor.getCookies(this.#parser.parseGetCookiesParams(command.params));
            case 'storage.setCookie':
                return await this.#storageProcessor.setCookie(this.#parser.parseSetCookieParams(command.params));
            // keep-sorted end
            // WebExtension module
            // keep-sorted start block=yes
            case 'webExtension.install':
                return await this.#webExtensionProcessor.install(this.#parser.parseInstallParams(command.params));
            case 'webExtension.uninstall':
                return await this.#webExtensionProcessor.uninstall(this.#parser.parseUninstallParams(command.params));
            // keep-sorted end
        }
        // Intentionally kept outside the switch statement to ensure that
        // ESLint @typescript-eslint/switch-exhaustiveness-check triggers if a new
        // command is added.
        throw new UnknownCommandException(`Unknown command '${command?.method}'.`);
    }
    // Workaround for as zod.union always take the first schema
    // https://github.com/w3c/webdriver-bidi/issues/635
    #processTargetParams(params) {
        if (typeof params === 'object' &&
            params &&
            'target' in params &&
            typeof params.target === 'object' &&
            params.target &&
            'context' in params.target) {
            delete params.target['realm'];
        }
        return params;
    }
    async processCommand(command) {
        try {
            const result = await this.#processCommand(command);
            const response = {
                type: 'success',
                id: command.id,
                result,
            };
            this.emit("response" /* CommandProcessorEvents.Response */, {
                message: OutgoingMessage.createResolved(response, command['goog:channel']),
                event: command.method,
            });
        }
        catch (e) {
            if (e instanceof Exception) {
                this.emit("response" /* CommandProcessorEvents.Response */, {
                    message: OutgoingMessage.createResolved(e.toErrorResponse(command.id), command['goog:channel']),
                    event: command.method,
                });
            }
            else {
                const error = e;
                this.#logger?.(LogType.bidi, error);
                // Heuristic required for processing cases when a browsing context is gone
                // during the command processing, e.g. like in test
                // `test_input_keyDown_closes_browsing_context`.
                const errorException = this.#browserCdpClient.isCloseError(e)
                    ? new NoSuchFrameException(`Browsing context is gone`)
                    : new UnknownErrorException(error.message, error.stack);
                this.emit("response" /* CommandProcessorEvents.Response */, {
                    message: OutgoingMessage.createResolved(errorException.toErrorResponse(command.id), command['goog:channel']),
                    event: command.method,
                });
            }
        }
    }
}
//# sourceMappingURL=CommandProcessor.js.map