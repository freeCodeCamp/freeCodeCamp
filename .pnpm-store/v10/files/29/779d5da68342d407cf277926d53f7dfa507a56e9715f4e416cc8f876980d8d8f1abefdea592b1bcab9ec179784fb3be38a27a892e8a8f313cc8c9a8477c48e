(function () {
    'use strict';

    function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

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
    class EventEmitter {
        #emitter = mitt();
        on(type, handler) {
            this.#emitter.on(type, handler);
            return this;
        }
        once(event, handler) {
            const onceHandler = (eventData) => {
                handler(eventData);
                this.off(event, onceHandler);
            };
            return this.on(event, onceHandler);
        }
        off(type, handler) {
            this.#emitter.off(type, handler);
            return this;
        }
        emit(event, eventData) {
            this.#emitter.emit(event, eventData);
        }
        removeAllListeners(event) {
            if (event) {
                this.#emitter.all.delete(event);
            }
            else {
                this.#emitter.all.clear();
            }
            return this;
        }
    }

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
    var LogType;
    (function (LogType) {
        LogType["bidi"] = "bidi";
        LogType["cdp"] = "cdp";
        LogType["debug"] = "debug";
        LogType["debugError"] = "debug:error";
        LogType["debugInfo"] = "debug:info";
        LogType["debugWarn"] = "debug:warn";
    })(LogType || (LogType = {}));

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
    var _a$6;
    class ProcessingQueue {
        static LOGGER_PREFIX = `${LogType.debug}:queue`;
        #logger;
        #processor;
        #queue = [];
        #isProcessing = false;
        constructor(processor, logger) {
            this.#processor = processor;
            this.#logger = logger;
        }
        add(entry, name) {
            this.#queue.push([entry, name]);
            void this.#processIfNeeded();
        }
        async #processIfNeeded() {
            if (this.#isProcessing) {
                return;
            }
            this.#isProcessing = true;
            while (this.#queue.length > 0) {
                const arrayEntry = this.#queue.shift();
                if (!arrayEntry) {
                    continue;
                }
                const [entryPromise, name] = arrayEntry;
                this.#logger?.(_a$6.LOGGER_PREFIX, 'Processing event:', name);
                await entryPromise
                    .then((entry) => {
                    if (entry.kind === 'error') {
                        this.#logger?.(LogType.debugError, 'Event threw before sending:', entry.error.message, entry.error.stack);
                        return;
                    }
                    return this.#processor(entry.value);
                })
                    .catch((error) => {
                    this.#logger?.(LogType.debugError, 'Event was not processed:', error?.message);
                });
            }
            this.#isProcessing = false;
        }
    }
    _a$6 = ProcessingQueue;

    /**
     * Copyright 2023 Google LLC.
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
    var BiDiModule;
    (function (BiDiModule) {
        BiDiModule["Bluetooth"] = "bluetooth";
        BiDiModule["Browser"] = "browser";
        BiDiModule["BrowsingContext"] = "browsingContext";
        BiDiModule["Cdp"] = "goog:cdp";
        BiDiModule["Input"] = "input";
        BiDiModule["Log"] = "log";
        BiDiModule["Network"] = "network";
        BiDiModule["Script"] = "script";
        BiDiModule["Session"] = "session";
        BiDiModule["Speculation"] = "speculation";
    })(BiDiModule || (BiDiModule = {}));
    var Script$2;
    (function (Script) {
        (function (EventNames) {
            EventNames["Message"] = "script.message";
            EventNames["RealmCreated"] = "script.realmCreated";
            EventNames["RealmDestroyed"] = "script.realmDestroyed";
        })(Script.EventNames || (Script.EventNames = {}));
    })(Script$2 || (Script$2 = {}));
    var Log$1;
    (function (Log) {
        (function (EventNames) {
            EventNames["LogEntryAdded"] = "log.entryAdded";
        })(Log.EventNames || (Log.EventNames = {}));
    })(Log$1 || (Log$1 = {}));
    var BrowsingContext$2;
    (function (BrowsingContext) {
        (function (EventNames) {
            EventNames["ContextCreated"] = "browsingContext.contextCreated";
            EventNames["ContextDestroyed"] = "browsingContext.contextDestroyed";
            EventNames["DomContentLoaded"] = "browsingContext.domContentLoaded";
            EventNames["DownloadEnd"] = "browsingContext.downloadEnd";
            EventNames["DownloadWillBegin"] = "browsingContext.downloadWillBegin";
            EventNames["FragmentNavigated"] = "browsingContext.fragmentNavigated";
            EventNames["HistoryUpdated"] = "browsingContext.historyUpdated";
            EventNames["Load"] = "browsingContext.load";
            EventNames["NavigationAborted"] = "browsingContext.navigationAborted";
            EventNames["NavigationCommitted"] = "browsingContext.navigationCommitted";
            EventNames["NavigationFailed"] = "browsingContext.navigationFailed";
            EventNames["NavigationStarted"] = "browsingContext.navigationStarted";
            EventNames["UserPromptClosed"] = "browsingContext.userPromptClosed";
            EventNames["UserPromptOpened"] = "browsingContext.userPromptOpened";
        })(BrowsingContext.EventNames || (BrowsingContext.EventNames = {}));
    })(BrowsingContext$2 || (BrowsingContext$2 = {}));
    var Input$2;
    (function (Input) {
        (function (EventNames) {
            EventNames["FileDialogOpened"] = "input.fileDialogOpened";
        })(Input.EventNames || (Input.EventNames = {}));
    })(Input$2 || (Input$2 = {}));
    var Network$2;
    (function (Network) {
        (function (EventNames) {
            EventNames["AuthRequired"] = "network.authRequired";
            EventNames["BeforeRequestSent"] = "network.beforeRequestSent";
            EventNames["FetchError"] = "network.fetchError";
            EventNames["ResponseCompleted"] = "network.responseCompleted";
            EventNames["ResponseStarted"] = "network.responseStarted";
        })(Network.EventNames || (Network.EventNames = {}));
    })(Network$2 || (Network$2 = {}));
    var Bluetooth$2;
    (function (Bluetooth) {
        (function (EventNames) {
            EventNames["RequestDevicePromptUpdated"] = "bluetooth.requestDevicePromptUpdated";
            EventNames["GattConnectionAttempted"] = "bluetooth.gattConnectionAttempted";
            EventNames["CharacteristicEventGenerated"] = "bluetooth.characteristicEventGenerated";
            EventNames["DescriptorEventGenerated"] = "bluetooth.descriptorEventGenerated";
        })(Bluetooth.EventNames || (Bluetooth.EventNames = {}));
    })(Bluetooth$2 || (Bluetooth$2 = {}));
    var Speculation;
    (function (Speculation) {
        (function (EventNames) {
            EventNames["PrefetchStatusUpdated"] = "speculation.prefetchStatusUpdated";
        })(Speculation.EventNames || (Speculation.EventNames = {}));
    })(Speculation || (Speculation = {}));
    const EVENT_NAMES = new Set([
        ...Object.values(BiDiModule),
        ...Object.values(Bluetooth$2.EventNames),
        ...Object.values(BrowsingContext$2.EventNames),
        ...Object.values(Input$2.EventNames),
        ...Object.values(Log$1.EventNames),
        ...Object.values(Network$2.EventNames),
        ...Object.values(Script$2.EventNames),
        ...Object.values(Speculation.EventNames),
    ]);

    class Exception extends Error {
        error;
        message;
        stacktrace;
        constructor(error, message, stacktrace) {
            super();
            this.error = error;
            this.message = message;
            this.stacktrace = stacktrace;
        }
        toErrorResponse(commandId) {
            return {
                type: 'error',
                id: commandId,
                error: this.error,
                message: this.message,
                stacktrace: this.stacktrace,
            };
        }
    }
    class InvalidArgumentException extends Exception {
        constructor(message, stacktrace) {
            super("invalid argument" , message, stacktrace);
        }
    }
    class InvalidSelectorException extends Exception {
        constructor(message, stacktrace) {
            super("invalid selector" , message, stacktrace);
        }
    }
    class MoveTargetOutOfBoundsException extends Exception {
        constructor(message, stacktrace) {
            super("move target out of bounds" , message, stacktrace);
        }
    }
    class NoSuchAlertException extends Exception {
        constructor(message, stacktrace) {
            super("no such alert" , message, stacktrace);
        }
    }
    class NoSuchElementException extends Exception {
        constructor(message, stacktrace) {
            super("no such element" , message, stacktrace);
        }
    }
    class NoSuchFrameException extends Exception {
        constructor(message, stacktrace) {
            super("no such frame" , message, stacktrace);
        }
    }
    class NoSuchHandleException extends Exception {
        constructor(message, stacktrace) {
            super("no such handle" , message, stacktrace);
        }
    }
    class NoSuchHistoryEntryException extends Exception {
        constructor(message, stacktrace) {
            super("no such history entry" , message, stacktrace);
        }
    }
    class NoSuchInterceptException extends Exception {
        constructor(message, stacktrace) {
            super("no such intercept" , message, stacktrace);
        }
    }
    class NoSuchNodeException extends Exception {
        constructor(message, stacktrace) {
            super("no such node" , message, stacktrace);
        }
    }
    class NoSuchRequestException extends Exception {
        constructor(message, stacktrace) {
            super("no such request" , message, stacktrace);
        }
    }
    class NoSuchScriptException extends Exception {
        constructor(message, stacktrace) {
            super("no such script" , message, stacktrace);
        }
    }
    class NoSuchUserContextException extends Exception {
        constructor(message, stacktrace) {
            super("no such user context" , message, stacktrace);
        }
    }
    class UnknownCommandException extends Exception {
        constructor(message, stacktrace) {
            super("unknown command" , message, stacktrace);
        }
    }
    class UnknownErrorException extends Exception {
        constructor(message, stacktrace = new Error().stack) {
            super("unknown error" , message, stacktrace);
        }
    }
    class UnableToCaptureScreenException extends Exception {
        constructor(message, stacktrace) {
            super("unable to capture screen" , message, stacktrace);
        }
    }
    class UnsupportedOperationException extends Exception {
        constructor(message, stacktrace) {
            super("unsupported operation" , message, stacktrace);
        }
    }
    class UnableToSetCookieException extends Exception {
        constructor(message, stacktrace) {
            super("unable to set cookie" , message, stacktrace);
        }
    }
    class UnableToSetFileInputException extends Exception {
        constructor(message, stacktrace) {
            super("unable to set file input" , message, stacktrace);
        }
    }
    class InvalidWebExtensionException extends Exception {
        constructor(message, stacktrace) {
            super("invalid web extension" , message, stacktrace);
        }
    }
    class NoSuchWebExtensionException extends Exception {
        constructor(message, stacktrace) {
            super("no such web extension" , message, stacktrace);
        }
    }
    class NoSuchNetworkCollectorException extends Exception {
        constructor(message, stacktrace) {
            super("no such network collector" , message, stacktrace);
        }
    }
    class NoSuchNetworkDataException extends Exception {
        constructor(message, stacktrace) {
            super("no such network data" , message, stacktrace);
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    class BidiNoOpParser {
        parseDisableSimulationParameters(params) {
            return params;
        }
        parseHandleRequestDevicePromptParams(params) {
            return params;
        }
        parseSimulateAdapterParameters(params) {
            return params;
        }
        parseSimulateAdvertisementParameters(params) {
            return params;
        }
        parseSimulateCharacteristicParameters(params) {
            return params;
        }
        parseSimulateCharacteristicResponseParameters(params) {
            return params;
        }
        parseSimulateDescriptorParameters(params) {
            return params;
        }
        parseSimulateDescriptorResponseParameters(params) {
            return params;
        }
        parseSimulateGattConnectionResponseParameters(params) {
            return params;
        }
        parseSimulateGattDisconnectionParameters(params) {
            return params;
        }
        parseSimulatePreconnectedPeripheralParameters(params) {
            return params;
        }
        parseSimulateServiceParameters(params) {
            return params;
        }
        parseCreateUserContextParameters(params) {
            return params;
        }
        parseRemoveUserContextParameters(params) {
            return params;
        }
        parseSetClientWindowStateParameters(params) {
            return params;
        }
        parseSetDownloadBehaviorParameters(params) {
            return params;
        }
        parseActivateParams(params) {
            return params;
        }
        parseCaptureScreenshotParams(params) {
            return params;
        }
        parseCloseParams(params) {
            return params;
        }
        parseCreateParams(params) {
            return params;
        }
        parseGetTreeParams(params) {
            return params;
        }
        parseHandleUserPromptParams(params) {
            return params;
        }
        parseLocateNodesParams(params) {
            return params;
        }
        parseNavigateParams(params) {
            return params;
        }
        parsePrintParams(params) {
            return params;
        }
        parseReloadParams(params) {
            return params;
        }
        parseSetBypassCspParams(params) {
            return params;
        }
        parseSetViewportParams(params) {
            return params;
        }
        parseTraverseHistoryParams(params) {
            return params;
        }
        parseGetSessionParams(params) {
            return params;
        }
        parseResolveRealmParams(params) {
            return params;
        }
        parseSendCommandParams(params) {
            return params;
        }
        parseSetClientHintsOverrideParams(params) {
            return params;
        }
        parseSetForcedColorsModeThemeOverrideParams(params) {
            return params;
        }
        parseSetGeolocationOverrideParams(params) {
            return params;
        }
        parseSetLocaleOverrideParams(params) {
            return params;
        }
        parseSetNetworkConditionsParams(params) {
            return params;
        }
        parseSetScreenOrientationOverrideParams(params) {
            return params;
        }
        parseSetScreenSettingsOverrideParams(params) {
            return params;
        }
        parseSetScriptingEnabledParams(params) {
            return params;
        }
        parseSetScrollbarTypeOverrideParams(params) {
            return params;
        }
        parseSetTimezoneOverrideParams(params) {
            return params;
        }
        parseSetTouchOverrideParams(params) {
            return params;
        }
        parseSetUserAgentOverrideParams(params) {
            return params;
        }
        parseAddPreloadScriptParams(params) {
            return params;
        }
        parseCallFunctionParams(params) {
            return params;
        }
        parseDisownParams(params) {
            return params;
        }
        parseEvaluateParams(params) {
            return params;
        }
        parseGetRealmsParams(params) {
            return params;
        }
        parseRemovePreloadScriptParams(params) {
            return params;
        }
        parsePerformActionsParams(params) {
            return params;
        }
        parseReleaseActionsParams(params) {
            return params;
        }
        parseSetFilesParams(params) {
            return params;
        }
        parseAddDataCollectorParams(params) {
            return params;
        }
        parseAddInterceptParams(params) {
            return params;
        }
        parseContinueRequestParams(params) {
            return params;
        }
        parseContinueResponseParams(params) {
            return params;
        }
        parseContinueWithAuthParams(params) {
            return params;
        }
        parseDisownDataParams(params) {
            return params;
        }
        parseFailRequestParams(params) {
            return params;
        }
        parseGetDataParams(params) {
            return params;
        }
        parseProvideResponseParams(params) {
            return params;
        }
        parseRemoveDataCollectorParams(params) {
            return params;
        }
        parseRemoveInterceptParams(params) {
            return params;
        }
        parseSetCacheBehaviorParams(params) {
            return params;
        }
        parseSetExtraHeadersParams(params) {
            return params;
        }
        parseSetPermissionsParams(params) {
            return params;
        }
        parseSubscribeParams(params) {
            return params;
        }
        parseUnsubscribeParams(params) {
            return params;
        }
        parseDeleteCookiesParams(params) {
            return params;
        }
        parseGetCookiesParams(params) {
            return params;
        }
        parseSetCookieParams(params) {
            return params;
        }
        parseInstallParams(params) {
            return params;
        }
        parseUninstallParams(params) {
            return params;
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    class BrowserProcessor {
        #browserCdpClient;
        #browsingContextStorage;
        #configStorage;
        #userContextStorage;
        constructor(browserCdpClient, browsingContextStorage, configStorage, userContextStorage) {
            this.#browserCdpClient = browserCdpClient;
            this.#browsingContextStorage = browsingContextStorage;
            this.#configStorage = configStorage;
            this.#userContextStorage = userContextStorage;
        }
        close() {
            setTimeout(() => this.#browserCdpClient.sendCommand('Browser.close').catch(() => { }), 0);
            return {};
        }
        async createUserContext(params) {
            const w3cParams = params;
            const globalConfig = this.#configStorage.getGlobalConfig();
            if (w3cParams.acceptInsecureCerts !== undefined) {
                if (w3cParams.acceptInsecureCerts === false &&
                    globalConfig.acceptInsecureCerts === true)
                    throw new UnknownErrorException(`Cannot set user context's "acceptInsecureCerts" to false, when a capability "acceptInsecureCerts" is set to true`);
            }
            const request = {};
            if (w3cParams.proxy) {
                const proxyStr = getProxyStr(w3cParams.proxy);
                if (proxyStr) {
                    request.proxyServer = proxyStr;
                }
                if (w3cParams.proxy.noProxy) {
                    request.proxyBypassList = w3cParams.proxy.noProxy.join(',');
                }
            }
            else {
                if (params['goog:proxyServer'] !== undefined) {
                    request.proxyServer = params['goog:proxyServer'];
                }
                const proxyBypassList = params['goog:proxyBypassList'] ?? undefined;
                if (proxyBypassList) {
                    request.proxyBypassList = proxyBypassList.join(',');
                }
            }
            const context = await this.#browserCdpClient.sendCommand('Target.createBrowserContext', request);
            await this.#applyDownloadBehavior(globalConfig.downloadBehavior ?? null, context.browserContextId);
            this.#configStorage.updateUserContextConfig(context.browserContextId, {
                acceptInsecureCerts: params['acceptInsecureCerts'],
                userPromptHandler: params['unhandledPromptBehavior'],
            });
            return {
                userContext: context.browserContextId,
            };
        }
        async removeUserContext(params) {
            const userContext = params.userContext;
            if (userContext === 'default') {
                throw new InvalidArgumentException('`default` user context cannot be removed');
            }
            try {
                await this.#browserCdpClient.sendCommand('Target.disposeBrowserContext', {
                    browserContextId: userContext,
                });
            }
            catch (err) {
                if (err.message.startsWith('Failed to find context with id')) {
                    throw new NoSuchUserContextException(err.message);
                }
                throw err;
            }
            return {};
        }
        async getUserContexts() {
            return {
                userContexts: await this.#userContextStorage.getUserContexts(),
            };
        }
        async #getWindowInfo(targetId) {
            const windowInfo = await this.#browserCdpClient.sendCommand('Browser.getWindowForTarget', { targetId });
            return {
                active: false,
                clientWindow: `${windowInfo.windowId}`,
                state: windowInfo.bounds.windowState ?? 'normal',
                height: windowInfo.bounds.height ?? 0,
                width: windowInfo.bounds.width ?? 0,
                x: windowInfo.bounds.left ?? 0,
                y: windowInfo.bounds.top ?? 0,
            };
        }
        async setClientWindowState(params) {
            const { clientWindow } = params;
            const bounds = {
                windowState: params.state,
            };
            if (params.state === 'normal') {
                if (params.width !== undefined) {
                    bounds.width = params.width;
                }
                if (params.height !== undefined) {
                    bounds.height = params.height;
                }
                if (params.x !== undefined) {
                    bounds.left = params.x;
                }
                if (params.y !== undefined) {
                    bounds.top = params.y;
                }
            }
            const windowId = Number.parseInt(clientWindow);
            if (isNaN(windowId)) {
                throw new InvalidArgumentException('no such client window');
            }
            await this.#browserCdpClient.sendCommand('Browser.setWindowBounds', {
                windowId,
                bounds,
            });
            const result = await this.#browserCdpClient.sendCommand('Browser.getWindowBounds', {
                windowId,
            });
            return {
                active: false,
                clientWindow: `${windowId}`,
                state: result.bounds.windowState ?? 'normal',
                height: result.bounds.height ?? 0,
                width: result.bounds.width ?? 0,
                x: result.bounds.left ?? 0,
                y: result.bounds.top ?? 0,
            };
        }
        async getClientWindows() {
            const topLevelTargetIds = this.#browsingContextStorage
                .getTopLevelContexts()
                .map((b) => b.cdpTarget.id);
            const clientWindows = await Promise.all(topLevelTargetIds.map(async (targetId) => await this.#getWindowInfo(targetId)));
            const uniqueClientWindowIds = new Set();
            const uniqueClientWindows = new Array();
            for (const window of clientWindows) {
                if (!uniqueClientWindowIds.has(window.clientWindow)) {
                    uniqueClientWindowIds.add(window.clientWindow);
                    uniqueClientWindows.push(window);
                }
            }
            return { clientWindows: uniqueClientWindows };
        }
        #toCdpDownloadBehavior(downloadBehavior) {
            if (downloadBehavior === null)
                return {
                    behavior: 'default',
                };
            if (downloadBehavior?.type === 'denied')
                return {
                    behavior: 'deny',
                };
            if (downloadBehavior?.type === 'allowed') {
                return {
                    behavior: 'allow',
                    downloadPath: downloadBehavior.destinationFolder,
                };
            }
            throw new UnknownErrorException('Unexpected download behavior');
        }
        async #applyDownloadBehavior(downloadBehavior, userContext) {
            await this.#browserCdpClient.sendCommand('Browser.setDownloadBehavior', {
                ...this.#toCdpDownloadBehavior(downloadBehavior),
                browserContextId: userContext === 'default' ? undefined : userContext,
                eventsEnabled: true,
            });
        }
        async setDownloadBehavior(params) {
            let userContexts;
            if (params.userContexts === undefined) {
                userContexts = (await this.#userContextStorage.getUserContexts()).map((c) => c.userContext);
            }
            else {
                userContexts = Array.from(await this.#userContextStorage.verifyUserContextIdList(params.userContexts));
            }
            if (params.userContexts === undefined) {
                this.#configStorage.updateGlobalConfig({
                    downloadBehavior: params.downloadBehavior,
                });
            }
            else {
                params.userContexts.map((userContext) => this.#configStorage.updateUserContextConfig(userContext, {
                    downloadBehavior: params.downloadBehavior,
                }));
            }
            await Promise.all(userContexts.map(async (userContext) => {
                const downloadBehavior = this.#configStorage.getActiveConfig(undefined, userContext)
                    .downloadBehavior ?? null;
                await this.#applyDownloadBehavior(downloadBehavior, userContext);
            }));
            return {};
        }
    }
    function getProxyStr(proxyConfig) {
        if (proxyConfig.proxyType === 'direct' ||
            proxyConfig.proxyType === 'system') {
            return undefined;
        }
        if (proxyConfig.proxyType === 'pac') {
            throw new UnsupportedOperationException(`PAC proxy configuration is not supported per user context`);
        }
        if (proxyConfig.proxyType === 'autodetect') {
            throw new UnsupportedOperationException(`Autodetect proxy is not supported per user context`);
        }
        if (proxyConfig.proxyType === 'manual') {
            const servers = [];
            if (proxyConfig.httpProxy !== undefined) {
                servers.push(`http=${proxyConfig.httpProxy}`);
            }
            if (proxyConfig.sslProxy !== undefined) {
                servers.push(`https=${proxyConfig.sslProxy}`);
            }
            if (proxyConfig.socksProxy !== undefined ||
                proxyConfig.socksVersion !== undefined) {
                if (proxyConfig.socksProxy === undefined) {
                    throw new InvalidArgumentException(`'socksVersion' cannot be set without 'socksProxy'`);
                }
                if (proxyConfig.socksVersion === undefined ||
                    typeof proxyConfig.socksVersion !== 'number' ||
                    !Number.isInteger(proxyConfig.socksVersion) ||
                    proxyConfig.socksVersion < 0 ||
                    proxyConfig.socksVersion > 255) {
                    throw new InvalidArgumentException(`'socksVersion' must be between 0 and 255`);
                }
                servers.push(`socks=socks${proxyConfig.socksVersion}://${proxyConfig.socksProxy}`);
            }
            if (servers.length === 0) {
                return undefined;
            }
            return servers.join(';');
        }
        throw new UnknownErrorException(`Unknown proxy type`);
    }

    /**
     * Copyright 2023 Google LLC.
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
    class CdpProcessor {
        #browsingContextStorage;
        #realmStorage;
        #cdpConnection;
        #browserCdpClient;
        constructor(browsingContextStorage, realmStorage, cdpConnection, browserCdpClient) {
            this.#browsingContextStorage = browsingContextStorage;
            this.#realmStorage = realmStorage;
            this.#cdpConnection = cdpConnection;
            this.#browserCdpClient = browserCdpClient;
        }
        getSession(params) {
            const context = params.context;
            const sessionId = this.#browsingContextStorage.getContext(context).cdpTarget.cdpSessionId;
            if (sessionId === undefined) {
                return {};
            }
            return { session: sessionId };
        }
        resolveRealm(params) {
            const context = params.realm;
            const realm = this.#realmStorage.getRealm({ realmId: context });
            if (realm === undefined) {
                throw new UnknownErrorException(`Could not find realm ${params.realm}`);
            }
            return { executionContextId: realm.executionContextId };
        }
        async sendCommand(params) {
            const client = params.session
                ? this.#cdpConnection.getCdpClient(params.session)
                : this.#browserCdpClient;
            const result = await client.sendCommand(params.method, params.params);
            return {
                result,
                session: params.session,
            };
        }
    }

    class BrowsingContextProcessor {
        #browserCdpClient;
        #browsingContextStorage;
        #contextConfigStorage;
        #eventManager;
        #userContextStorage;
        constructor(browserCdpClient, browsingContextStorage, userContextStorage, contextConfigStorage, eventManager) {
            this.#contextConfigStorage = contextConfigStorage;
            this.#userContextStorage = userContextStorage;
            this.#browserCdpClient = browserCdpClient;
            this.#browsingContextStorage = browsingContextStorage;
            this.#eventManager = eventManager;
            this.#eventManager.addSubscribeHook(BrowsingContext$2.EventNames.ContextCreated, this.#onContextCreatedSubscribeHook.bind(this));
        }
        getTree(params) {
            const resultContexts = params.root === undefined
                ? this.#browsingContextStorage.getTopLevelContexts()
                : [this.#browsingContextStorage.getContext(params.root)];
            return {
                contexts: resultContexts.map((c) => c.serializeToBidiValue(params.maxDepth ?? Number.MAX_VALUE)),
            };
        }
        async create(params) {
            let referenceContext;
            let userContext = 'default';
            if (params.referenceContext !== undefined) {
                referenceContext = this.#browsingContextStorage.getContext(params.referenceContext);
                if (!referenceContext.isTopLevelContext()) {
                    throw new InvalidArgumentException(`referenceContext should be a top-level context`);
                }
                userContext = referenceContext.userContext;
            }
            if (params.userContext !== undefined) {
                userContext = params.userContext;
            }
            const existingContexts = this.#browsingContextStorage
                .getAllContexts()
                .filter((context) => context.userContext === userContext);
            let newWindow = false;
            switch (params.type) {
                case "tab" :
                    newWindow = false;
                    break;
                case "window" :
                    newWindow = true;
                    break;
            }
            if (!existingContexts.length) {
                newWindow = true;
            }
            let result;
            try {
                result = await this.#browserCdpClient.sendCommand('Target.createTarget', {
                    url: 'about:blank',
                    newWindow,
                    browserContextId: userContext === 'default' ? undefined : userContext,
                    background: params.background === true,
                });
            }
            catch (err) {
                if (
                err.message.startsWith('Failed to find browser context with id') ||
                    err.message === 'browserContextId') {
                    throw new NoSuchUserContextException(`The context ${userContext} was not found`);
                }
                throw err;
            }
            const context = await this.#browsingContextStorage.waitForContext(result.targetId);
            await context.lifecycleLoaded();
            return { context: context.id };
        }
        navigate(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            return context.navigate(params.url, params.wait ?? "none" );
        }
        reload(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            return context.reload(params.ignoreCache ?? false, params.wait ?? "none" );
        }
        async activate(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            if (!context.isTopLevelContext()) {
                throw new InvalidArgumentException('Activation is only supported on the top-level context');
            }
            await context.activate();
            return {};
        }
        async captureScreenshot(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            return await context.captureScreenshot(params);
        }
        async print(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            return await context.print(params);
        }
        async setViewport(params) {
            const maxDimensionSize = 10_000_000;
            if ((params.viewport?.height ?? 0) > maxDimensionSize ||
                (params.viewport?.width ?? 0) > maxDimensionSize) {
                throw new UnsupportedOperationException(`Viewport dimension over ${maxDimensionSize} are not supported`);
            }
            const config = {};
            if (params.devicePixelRatio !== undefined) {
                config.devicePixelRatio = params.devicePixelRatio;
            }
            if (params.viewport !== undefined) {
                config.viewport = params.viewport;
            }
            const impactedTopLevelContexts = await this.#getRelatedTopLevelBrowsingContexts(params.context, params.userContexts);
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, config);
            }
            if (params.context !== undefined) {
                this.#contextConfigStorage.updateBrowsingContextConfig(params.context, config);
            }
            await Promise.all(impactedTopLevelContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setViewport(config.viewport ?? null, config.devicePixelRatio ?? null, config.screenOrientation ?? null);
            }));
            return {};
        }
        async #getRelatedTopLevelBrowsingContexts(browsingContextId, userContextIds) {
            if (browsingContextId === undefined && userContextIds === undefined) {
                throw new InvalidArgumentException('Either userContexts or context must be provided');
            }
            if (browsingContextId !== undefined && userContextIds !== undefined) {
                throw new InvalidArgumentException('userContexts and context are mutually exclusive');
            }
            if (browsingContextId !== undefined) {
                const context = this.#browsingContextStorage.getContext(browsingContextId);
                if (!context.isTopLevelContext()) {
                    throw new InvalidArgumentException('Emulating viewport is only supported on the top-level context');
                }
                return [context];
            }
            await this.#userContextStorage.verifyUserContextIdList(userContextIds);
            const result = [];
            for (const userContextId of userContextIds) {
                const topLevelBrowsingContexts = this.#browsingContextStorage
                    .getTopLevelContexts()
                    .filter((browsingContext) => browsingContext.userContext === userContextId);
                result.push(...topLevelBrowsingContexts);
            }
            return [...new Set(result).values()];
        }
        async traverseHistory(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            if (!context) {
                throw new InvalidArgumentException(`No browsing context with id ${params.context}`);
            }
            if (!context.isTopLevelContext()) {
                throw new InvalidArgumentException('Traversing history is only supported on the top-level context');
            }
            await context.traverseHistory(params.delta);
            return {};
        }
        async handleUserPrompt(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            try {
                await context.handleUserPrompt(params.accept, params.userText);
            }
            catch (error) {
                if (error.message?.includes('No dialog is showing')) {
                    throw new NoSuchAlertException('No dialog is showing');
                }
                throw error;
            }
            return {};
        }
        async close(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            if (!context.isTopLevelContext()) {
                throw new InvalidArgumentException(`Non top-level browsing context ${context.id} cannot be closed.`);
            }
            const parentCdpClient = context.cdpTarget.parentCdpClient;
            try {
                const detachedFromTargetPromise = new Promise((resolve) => {
                    const onContextDestroyed = (event) => {
                        if (event.targetId === params.context) {
                            parentCdpClient.off('Target.detachedFromTarget', onContextDestroyed);
                            resolve();
                        }
                    };
                    parentCdpClient.on('Target.detachedFromTarget', onContextDestroyed);
                });
                try {
                    if (params.promptUnload) {
                        await context.close();
                    }
                    else {
                        await parentCdpClient.sendCommand('Target.closeTarget', {
                            targetId: params.context,
                        });
                    }
                }
                catch (error) {
                    if (!parentCdpClient.isCloseError(error)) {
                        throw error;
                    }
                }
                await detachedFromTargetPromise;
            }
            catch (error) {
                if (!(error.code === -32e3  &&
                    error.message === 'Not attached to an active page')) {
                    throw error;
                }
            }
            return {};
        }
        async locateNodes(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            return await context.locateNodes(params);
        }
        #onContextCreatedSubscribeHook(contextId) {
            const context = this.#browsingContextStorage.getContext(contextId);
            const contextsToReport = [
                context,
                ...this.#browsingContextStorage.getContext(contextId).allChildren,
            ];
            contextsToReport.forEach((context) => {
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: BrowsingContext$2.EventNames.ContextCreated,
                    params: context.serializeToBidiValue(),
                }, context.id);
            });
            return Promise.resolve();
        }
    }

    /**
     * Copyright 2025 Google LLC.
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
    class EmulationProcessor {
        #userContextStorage;
        #browsingContextStorage;
        #contextConfigStorage;
        constructor(browsingContextStorage, userContextStorage, contextConfigStorage) {
            this.#userContextStorage = userContextStorage;
            this.#browsingContextStorage = browsingContextStorage;
            this.#contextConfigStorage = contextConfigStorage;
        }
        async setGeolocationOverride(params) {
            if ('coordinates' in params && 'error' in params) {
                throw new InvalidArgumentException('Coordinates and error cannot be set at the same time');
            }
            let geolocation = null;
            if ('coordinates' in params) {
                if ((params.coordinates?.altitude ?? null) === null &&
                    (params.coordinates?.altitudeAccuracy ?? null) !== null) {
                    throw new InvalidArgumentException('Geolocation altitudeAccuracy can be set only with altitude');
                }
                geolocation = params.coordinates;
            }
            else if ('error' in params) {
                if (params.error.type !== 'positionUnavailable') {
                    throw new InvalidArgumentException(`Unknown geolocation error ${params.error.type}`);
                }
                geolocation = params.error;
            }
            else {
                throw new InvalidArgumentException(`Coordinates or error should be set`);
            }
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    geolocation,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    geolocation,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setGeolocationOverride(config.geolocation ?? null);
            }));
            return {};
        }
        async setLocaleOverride(params) {
            const locale = params.locale ?? null;
            if (locale !== null && !isValidLocale(locale)) {
                throw new InvalidArgumentException(`Invalid locale "${locale}"`);
            }
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    locale,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    locale,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await Promise.all([
                    context.setLocaleOverride(config.locale ?? null),
                    context.setUserAgentAndAcceptLanguage(config.userAgent, config.locale, config.clientHints),
                ]);
            }));
            return {};
        }
        async setScriptingEnabled(params) {
            const scriptingEnabled = params.enabled;
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    scriptingEnabled,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    scriptingEnabled,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setScriptingEnabled(config.scriptingEnabled ?? null);
            }));
            return {};
        }
        async setScrollbarTypeOverride(params) {
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    scrollbarType: params.scrollbarType,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    scrollbarType: params.scrollbarType,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setScrollbarTypeOverride(config.scrollbarType ?? null);
            }));
            return {};
        }
        async setScreenOrientationOverride(params) {
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    screenOrientation: params.screenOrientation,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    screenOrientation: params.screenOrientation,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setViewport(config.viewport ?? null, config.devicePixelRatio ?? null, config.screenOrientation ?? null);
            }));
            return {};
        }
        async setScreenSettingsOverride(params) {
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    screenArea: params.screenArea,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    screenArea: params.screenArea,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setViewport(config.viewport ?? null, config.devicePixelRatio ?? null, config.screenOrientation ?? null);
            }));
            return {};
        }
        async #getRelatedTopLevelBrowsingContexts(browsingContextIds, userContextIds, allowGlobal = false) {
            if (browsingContextIds === undefined && userContextIds === undefined) {
                if (allowGlobal) {
                    return this.#browsingContextStorage.getTopLevelContexts();
                }
                throw new InvalidArgumentException('Either user contexts or browsing contexts must be provided');
            }
            if (browsingContextIds !== undefined && userContextIds !== undefined) {
                throw new InvalidArgumentException('User contexts and browsing contexts are mutually exclusive');
            }
            const result = [];
            if (browsingContextIds === undefined) {
                if (userContextIds.length === 0) {
                    throw new InvalidArgumentException('user context should be provided');
                }
                await this.#userContextStorage.verifyUserContextIdList(userContextIds);
                for (const userContextId of userContextIds) {
                    const topLevelBrowsingContexts = this.#browsingContextStorage
                        .getTopLevelContexts()
                        .filter((browsingContext) => browsingContext.userContext === userContextId);
                    result.push(...topLevelBrowsingContexts);
                }
            }
            else {
                if (browsingContextIds.length === 0) {
                    throw new InvalidArgumentException('browsing context should be provided');
                }
                for (const browsingContextId of browsingContextIds) {
                    const browsingContext = this.#browsingContextStorage.getContext(browsingContextId);
                    if (!browsingContext.isTopLevelContext()) {
                        throw new InvalidArgumentException('The command is only supported on the top-level context');
                    }
                    result.push(browsingContext);
                }
            }
            return [...new Set(result).values()];
        }
        async setTimezoneOverride(params) {
            let timezone = params.timezone ?? null;
            if (timezone !== null && !isValidTimezone(timezone)) {
                throw new InvalidArgumentException(`Invalid timezone "${timezone}"`);
            }
            if (timezone !== null && isTimeZoneOffsetString(timezone)) {
                timezone = `GMT${timezone}`;
            }
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    timezone,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    timezone,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setTimezoneOverride(config.timezone ?? null);
            }));
            return {};
        }
        async setTouchOverride(params) {
            const maxTouchPoints = params.maxTouchPoints;
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts, true);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    maxTouchPoints,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    maxTouchPoints,
                });
            }
            if (params.contexts === undefined && params.userContexts === undefined) {
                this.#contextConfigStorage.updateGlobalConfig({
                    maxTouchPoints,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setTouchOverride(config.maxTouchPoints ?? null);
            }));
            return {};
        }
        async setUserAgentOverrideParams(params) {
            if (params.userAgent === '') {
                throw new UnsupportedOperationException('empty user agent string is not supported');
            }
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts, true);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    userAgent: params.userAgent,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    userAgent: params.userAgent,
                });
            }
            if (params.contexts === undefined && params.userContexts === undefined) {
                this.#contextConfigStorage.updateGlobalConfig({
                    userAgent: params.userAgent,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setUserAgentAndAcceptLanguage(config.userAgent, config.locale, config.clientHints);
            }));
            return {};
        }
        async setClientHintsOverride(params) {
            const clientHints = params.clientHints ?? null;
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts, true);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    clientHints,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    clientHints,
                });
            }
            if (params.contexts === undefined && params.userContexts === undefined) {
                this.#contextConfigStorage.updateGlobalConfig({
                    clientHints,
                });
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setUserAgentAndAcceptLanguage(config.userAgent, config.locale, config.clientHints);
            }));
            return {};
        }
        async setNetworkConditions(params) {
            const browsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts, true);
            for (const browsingContextId of params.contexts ?? []) {
                this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, {
                    emulatedNetworkConditions: params.networkConditions,
                });
            }
            for (const userContextId of params.userContexts ?? []) {
                this.#contextConfigStorage.updateUserContextConfig(userContextId, {
                    emulatedNetworkConditions: params.networkConditions,
                });
            }
            if (params.contexts === undefined && params.userContexts === undefined) {
                this.#contextConfigStorage.updateGlobalConfig({
                    emulatedNetworkConditions: params.networkConditions,
                });
            }
            if (params.networkConditions !== null &&
                params.networkConditions.type !== 'offline') {
                throw new UnsupportedOperationException(`Unsupported network conditions ${params.networkConditions.type}`);
            }
            await Promise.all(browsingContexts.map(async (context) => {
                const config = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext);
                await context.setEmulatedNetworkConditions(config.emulatedNetworkConditions ?? null);
            }));
            return {};
        }
    }
    function isValidLocale(locale) {
        try {
            new Intl.Locale(locale);
            return true;
        }
        catch (e) {
            if (e instanceof RangeError) {
                return false;
            }
            throw e;
        }
    }
    function isValidTimezone(timezone) {
        try {
            Intl.DateTimeFormat(undefined, { timeZone: timezone });
            return true;
        }
        catch (e) {
            if (e instanceof RangeError) {
                return false;
            }
            throw e;
        }
    }
    function isTimeZoneOffsetString(timezone) {
        return /^[+-](?:2[0-3]|[01]\d)(?::[0-5]\d)?$/.test(timezone);
    }

    /**
     * Copyright 2023 Google LLC.
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
    function assert(predicate, message) {
        if (!predicate) {
            throw new Error(message ?? 'Internal assertion failed.');
        }
    }

    /*
     * Copyright 2024 Google LLC.
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
    function isSingleComplexGrapheme(value) {
        return isSingleGrapheme(value) && value.length > 1;
    }
    function isSingleGrapheme(value) {
        const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
        return [...segmenter.segment(value)].length === 1;
    }

    /**
     * Copyright 2023 Google LLC.
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
    class NoneSource {
        type = "none" ;
    }
    class KeySource {
        type = "key" ;
        pressed = new Set();
        #modifiers = 0;
        get modifiers() {
            return this.#modifiers;
        }
        get alt() {
            return (this.#modifiers & 1) === 1;
        }
        set alt(value) {
            this.#setModifier(value, 1);
        }
        get ctrl() {
            return (this.#modifiers & 2) === 2;
        }
        set ctrl(value) {
            this.#setModifier(value, 2);
        }
        get meta() {
            return (this.#modifiers & 4) === 4;
        }
        set meta(value) {
            this.#setModifier(value, 4);
        }
        get shift() {
            return (this.#modifiers & 8) === 8;
        }
        set shift(value) {
            this.#setModifier(value, 8);
        }
        #setModifier(value, bit) {
            if (value) {
                this.#modifiers |= bit;
            }
            else {
                this.#modifiers &= ~bit;
            }
        }
    }
    class PointerSource {
        type = "pointer" ;
        subtype;
        pointerId;
        pressed = new Set();
        x = 0;
        y = 0;
        radiusX;
        radiusY;
        force;
        constructor(id, subtype) {
            this.pointerId = id;
            this.subtype = subtype;
        }
        get buttons() {
            let buttons = 0;
            for (const button of this.pressed) {
                switch (button) {
                    case 0:
                        buttons |= 1;
                        break;
                    case 1:
                        buttons |= 4;
                        break;
                    case 2:
                        buttons |= 2;
                        break;
                    case 3:
                        buttons |= 8;
                        break;
                    case 4:
                        buttons |= 16;
                        break;
                }
            }
            return buttons;
        }
        static ClickContext = class ClickContext {
            static #DOUBLE_CLICK_TIME_MS = 500;
            static #MAX_DOUBLE_CLICK_RADIUS = 2;
            count = 0;
            #x;
            #y;
            #time;
            constructor(x, y, time) {
                this.#x = x;
                this.#y = y;
                this.#time = time;
            }
            compare(context) {
                return (
                context.#time - this.#time > ClickContext.#DOUBLE_CLICK_TIME_MS ||
                    Math.abs(context.#x - this.#x) >
                        ClickContext.#MAX_DOUBLE_CLICK_RADIUS ||
                    Math.abs(context.#y - this.#y) > ClickContext.#MAX_DOUBLE_CLICK_RADIUS);
            }
        };
        #clickContexts = new Map();
        setClickCount(button, context) {
            let storedContext = this.#clickContexts.get(button);
            if (!storedContext || storedContext.compare(context)) {
                storedContext = context;
            }
            ++storedContext.count;
            this.#clickContexts.set(button, storedContext);
            return storedContext.count;
        }
        getClickCount(button) {
            return this.#clickContexts.get(button)?.count ?? 0;
        }
        resetClickCount() {
            this.#clickContexts = new Map();
        }
    }
    class WheelSource {
        type = "wheel" ;
    }

    /**
     * Copyright 2023 Google LLC.
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
    function getNormalizedKey(value) {
        switch (value) {
            case '\uE000':
                return 'Unidentified';
            case '\uE001':
                return 'Cancel';
            case '\uE002':
                return 'Help';
            case '\uE003':
                return 'Backspace';
            case '\uE004':
                return 'Tab';
            case '\uE005':
                return 'Clear';
            case '\uE006':
            case '\uE007':
                return 'Enter';
            case '\uE008':
                return 'Shift';
            case '\uE009':
                return 'Control';
            case '\uE00A':
                return 'Alt';
            case '\uE00B':
                return 'Pause';
            case '\uE00C':
                return 'Escape';
            case '\uE00D':
                return ' ';
            case '\uE00E':
                return 'PageUp';
            case '\uE00F':
                return 'PageDown';
            case '\uE010':
                return 'End';
            case '\uE011':
                return 'Home';
            case '\uE012':
                return 'ArrowLeft';
            case '\uE013':
                return 'ArrowUp';
            case '\uE014':
                return 'ArrowRight';
            case '\uE015':
                return 'ArrowDown';
            case '\uE016':
                return 'Insert';
            case '\uE017':
                return 'Delete';
            case '\uE018':
                return ';';
            case '\uE019':
                return '=';
            case '\uE01A':
                return '0';
            case '\uE01B':
                return '1';
            case '\uE01C':
                return '2';
            case '\uE01D':
                return '3';
            case '\uE01E':
                return '4';
            case '\uE01F':
                return '5';
            case '\uE020':
                return '6';
            case '\uE021':
                return '7';
            case '\uE022':
                return '8';
            case '\uE023':
                return '9';
            case '\uE024':
                return '*';
            case '\uE025':
                return '+';
            case '\uE026':
                return ',';
            case '\uE027':
                return '-';
            case '\uE028':
                return '.';
            case '\uE029':
                return '/';
            case '\uE031':
                return 'F1';
            case '\uE032':
                return 'F2';
            case '\uE033':
                return 'F3';
            case '\uE034':
                return 'F4';
            case '\uE035':
                return 'F5';
            case '\uE036':
                return 'F6';
            case '\uE037':
                return 'F7';
            case '\uE038':
                return 'F8';
            case '\uE039':
                return 'F9';
            case '\uE03A':
                return 'F10';
            case '\uE03B':
                return 'F11';
            case '\uE03C':
                return 'F12';
            case '\uE03D':
                return 'Meta';
            case '\uE040':
                return 'ZenkakuHankaku';
            case '\uE050':
                return 'Shift';
            case '\uE051':
                return 'Control';
            case '\uE052':
                return 'Alt';
            case '\uE053':
                return 'Meta';
            case '\uE054':
                return 'PageUp';
            case '\uE055':
                return 'PageDown';
            case '\uE056':
                return 'End';
            case '\uE057':
                return 'Home';
            case '\uE058':
                return 'ArrowLeft';
            case '\uE059':
                return 'ArrowUp';
            case '\uE05A':
                return 'ArrowRight';
            case '\uE05B':
                return 'ArrowDown';
            case '\uE05C':
                return 'Insert';
            case '\uE05D':
                return 'Delete';
            default:
                return value;
        }
    }
    function getKeyCode(key) {
        switch (key) {
            case '`':
            case '~':
                return 'Backquote';
            case '\\':
            case '|':
                return 'Backslash';
            case '\uE003':
                return 'Backspace';
            case '[':
            case '{':
                return 'BracketLeft';
            case ']':
            case '}':
                return 'BracketRight';
            case ',':
            case '<':
                return 'Comma';
            case '0':
            case ')':
                return 'Digit0';
            case '1':
            case '!':
                return 'Digit1';
            case '2':
            case '@':
                return 'Digit2';
            case '3':
            case '#':
                return 'Digit3';
            case '4':
            case '$':
                return 'Digit4';
            case '5':
            case '%':
                return 'Digit5';
            case '6':
            case '^':
                return 'Digit6';
            case '7':
            case '&':
                return 'Digit7';
            case '8':
            case '*':
                return 'Digit8';
            case '9':
            case '(':
                return 'Digit9';
            case '=':
            case '+':
                return 'Equal';
            case '>':
                return 'IntlBackslash';
            case 'a':
            case 'A':
                return 'KeyA';
            case 'b':
            case 'B':
                return 'KeyB';
            case 'c':
            case 'C':
                return 'KeyC';
            case 'd':
            case 'D':
                return 'KeyD';
            case 'e':
            case 'E':
                return 'KeyE';
            case 'f':
            case 'F':
                return 'KeyF';
            case 'g':
            case 'G':
                return 'KeyG';
            case 'h':
            case 'H':
                return 'KeyH';
            case 'i':
            case 'I':
                return 'KeyI';
            case 'j':
            case 'J':
                return 'KeyJ';
            case 'k':
            case 'K':
                return 'KeyK';
            case 'l':
            case 'L':
                return 'KeyL';
            case 'm':
            case 'M':
                return 'KeyM';
            case 'n':
            case 'N':
                return 'KeyN';
            case 'o':
            case 'O':
                return 'KeyO';
            case 'p':
            case 'P':
                return 'KeyP';
            case 'q':
            case 'Q':
                return 'KeyQ';
            case 'r':
            case 'R':
                return 'KeyR';
            case 's':
            case 'S':
                return 'KeyS';
            case 't':
            case 'T':
                return 'KeyT';
            case 'u':
            case 'U':
                return 'KeyU';
            case 'v':
            case 'V':
                return 'KeyV';
            case 'w':
            case 'W':
                return 'KeyW';
            case 'x':
            case 'X':
                return 'KeyX';
            case 'y':
            case 'Y':
                return 'KeyY';
            case 'z':
            case 'Z':
                return 'KeyZ';
            case '-':
            case '_':
                return 'Minus';
            case '.':
                return 'Period';
            case "'":
            case '"':
                return 'Quote';
            case ';':
            case ':':
                return 'Semicolon';
            case '/':
            case '?':
                return 'Slash';
            case '\uE00A':
                return 'AltLeft';
            case '\uE052':
                return 'AltRight';
            case '\uE009':
                return 'ControlLeft';
            case '\uE051':
                return 'ControlRight';
            case '\uE006':
                return 'Enter';
            case '\uE00B':
                return 'Pause';
            case '\uE03D':
                return 'MetaLeft';
            case '\uE053':
                return 'MetaRight';
            case '\uE008':
                return 'ShiftLeft';
            case '\uE050':
                return 'ShiftRight';
            case ' ':
            case '\uE00D':
                return 'Space';
            case '\uE004':
                return 'Tab';
            case '\uE017':
                return 'Delete';
            case '\uE010':
                return 'End';
            case '\uE002':
                return 'Help';
            case '\uE011':
                return 'Home';
            case '\uE016':
                return 'Insert';
            case '\uE00F':
                return 'PageDown';
            case '\uE00E':
                return 'PageUp';
            case '\uE015':
                return 'ArrowDown';
            case '\uE012':
                return 'ArrowLeft';
            case '\uE014':
                return 'ArrowRight';
            case '\uE013':
                return 'ArrowUp';
            case '\uE00C':
                return 'Escape';
            case '\uE031':
                return 'F1';
            case '\uE032':
                return 'F2';
            case '\uE033':
                return 'F3';
            case '\uE034':
                return 'F4';
            case '\uE035':
                return 'F5';
            case '\uE036':
                return 'F6';
            case '\uE037':
                return 'F7';
            case '\uE038':
                return 'F8';
            case '\uE039':
                return 'F9';
            case '\uE03A':
                return 'F10';
            case '\uE03B':
                return 'F11';
            case '\uE03C':
                return 'F12';
            case '\uE019':
                return 'NumpadEqual';
            case '\uE01A':
            case '\uE05C':
                return 'Numpad0';
            case '\uE01B':
            case '\uE056':
                return 'Numpad1';
            case '\uE01C':
            case '\uE05B':
                return 'Numpad2';
            case '\uE01D':
            case '\uE055':
                return 'Numpad3';
            case '\uE01E':
            case '\uE058':
                return 'Numpad4';
            case '\uE01F':
                return 'Numpad5';
            case '\uE020':
            case '\uE05A':
                return 'Numpad6';
            case '\uE021':
            case '\uE057':
                return 'Numpad7';
            case '\uE022':
            case '\uE059':
                return 'Numpad8';
            case '\uE023':
            case '\uE054':
                return 'Numpad9';
            case '\uE025':
                return 'NumpadAdd';
            case '\uE026':
                return 'NumpadComma';
            case '\uE028':
            case '\uE05D':
                return 'NumpadDecimal';
            case '\uE029':
                return 'NumpadDivide';
            case '\uE007':
                return 'NumpadEnter';
            case '\uE024':
                return 'NumpadMultiply';
            case '\uE027':
                return 'NumpadSubtract';
            default:
                return;
        }
    }
    function getKeyLocation(key) {
        switch (key) {
            case '\uE007':
            case '\uE008':
            case '\uE009':
            case '\uE00A':
            case '\uE03D':
                return 1;
            case '\uE019':
            case '\uE01A':
            case '\uE01B':
            case '\uE01C':
            case '\uE01D':
            case '\uE01E':
            case '\uE01F':
            case '\uE020':
            case '\uE021':
            case '\uE022':
            case '\uE023':
            case '\uE024':
            case '\uE025':
            case '\uE026':
            case '\uE027':
            case '\uE028':
            case '\uE029':
            case '\uE054':
            case '\uE055':
            case '\uE056':
            case '\uE057':
            case '\uE058':
            case '\uE059':
            case '\uE05A':
            case '\uE05B':
            case '\uE05C':
            case '\uE05D':
                return 3;
            case '\uE050':
            case '\uE051':
            case '\uE052':
            case '\uE053':
                return 2;
            default:
                return 0;
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    const KeyToKeyCode = {
        '0': 48,
        '1': 49,
        '2': 50,
        '3': 51,
        '4': 52,
        '5': 53,
        '6': 54,
        '7': 55,
        '8': 56,
        '9': 57,
        Abort: 3,
        Help: 6,
        Backspace: 8,
        Tab: 9,
        Numpad5: 12,
        NumpadEnter: 13,
        Enter: 13,
        '\\r': 13,
        '\\n': 13,
        ShiftLeft: 16,
        ShiftRight: 16,
        ControlLeft: 17,
        ControlRight: 17,
        AltLeft: 18,
        AltRight: 18,
        Pause: 19,
        CapsLock: 20,
        Escape: 27,
        Convert: 28,
        NonConvert: 29,
        Space: 32,
        Numpad9: 33,
        PageUp: 33,
        Numpad3: 34,
        PageDown: 34,
        End: 35,
        Numpad1: 35,
        Home: 36,
        Numpad7: 36,
        ArrowLeft: 37,
        Numpad4: 37,
        Numpad8: 38,
        ArrowUp: 38,
        ArrowRight: 39,
        Numpad6: 39,
        Numpad2: 40,
        ArrowDown: 40,
        Select: 41,
        Open: 43,
        PrintScreen: 44,
        Insert: 45,
        Numpad0: 45,
        Delete: 46,
        NumpadDecimal: 46,
        Digit0: 48,
        Digit1: 49,
        Digit2: 50,
        Digit3: 51,
        Digit4: 52,
        Digit5: 53,
        Digit6: 54,
        Digit7: 55,
        Digit8: 56,
        Digit9: 57,
        KeyA: 65,
        KeyB: 66,
        KeyC: 67,
        KeyD: 68,
        KeyE: 69,
        KeyF: 70,
        KeyG: 71,
        KeyH: 72,
        KeyI: 73,
        KeyJ: 74,
        KeyK: 75,
        KeyL: 76,
        KeyM: 77,
        KeyN: 78,
        KeyO: 79,
        KeyP: 80,
        KeyQ: 81,
        KeyR: 82,
        KeyS: 83,
        KeyT: 84,
        KeyU: 85,
        KeyV: 86,
        KeyW: 87,
        KeyX: 88,
        KeyY: 89,
        KeyZ: 90,
        MetaLeft: 91,
        MetaRight: 92,
        ContextMenu: 93,
        NumpadMultiply: 106,
        NumpadAdd: 107,
        NumpadSubtract: 109,
        NumpadDivide: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        F13: 124,
        F14: 125,
        F15: 126,
        F16: 127,
        F17: 128,
        F18: 129,
        F19: 130,
        F20: 131,
        F21: 132,
        F22: 133,
        F23: 134,
        F24: 135,
        NumLock: 144,
        ScrollLock: 145,
        AudioVolumeMute: 173,
        AudioVolumeDown: 174,
        AudioVolumeUp: 175,
        MediaTrackNext: 176,
        MediaTrackPrevious: 177,
        MediaStop: 178,
        MediaPlayPause: 179,
        Semicolon: 186,
        Equal: 187,
        NumpadEqual: 187,
        Comma: 188,
        Minus: 189,
        Period: 190,
        Slash: 191,
        Backquote: 192,
        BracketLeft: 219,
        Backslash: 220,
        BracketRight: 221,
        Quote: 222,
        AltGraph: 225,
        Props: 247,
        Cancel: 3,
        Clear: 12,
        Shift: 16,
        Control: 17,
        Alt: 18,
        Accept: 30,
        ModeChange: 31,
        ' ': 32,
        Print: 42,
        Execute: 43,
        '\\u0000': 46,
        a: 65,
        b: 66,
        c: 67,
        d: 68,
        e: 69,
        f: 70,
        g: 71,
        h: 72,
        i: 73,
        j: 74,
        k: 75,
        l: 76,
        m: 77,
        n: 78,
        o: 79,
        p: 80,
        q: 81,
        r: 82,
        s: 83,
        t: 84,
        u: 85,
        v: 86,
        w: 87,
        x: 88,
        y: 89,
        z: 90,
        Meta: 91,
        '*': 106,
        '+': 107,
        '-': 109,
        '/': 111,
        ';': 186,
        '=': 187,
        ',': 188,
        '.': 190,
        '`': 192,
        '[': 219,
        '\\\\': 220,
        ']': 221,
        "'": 222,
        Attn: 246,
        CrSel: 247,
        ExSel: 248,
        EraseEof: 249,
        Play: 250,
        ZoomOut: 251,
        ')': 48,
        '!': 49,
        '@': 50,
        '#': 51,
        $: 52,
        '%': 53,
        '^': 54,
        '&': 55,
        '(': 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        ':': 186,
        '<': 188,
        _: 189,
        '>': 190,
        '?': 191,
        '~': 192,
        '{': 219,
        '|': 220,
        '}': 221,
        '"': 222,
        Camera: 44,
        EndCall: 95,
        VolumeDown: 182,
        VolumeUp: 183,
    };

    /**
     * Copyright 2023 Google LLC.
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
    const CALCULATE_IN_VIEW_CENTER_PT_DECL = ((i) => {
        const t = i.getClientRects()[0], e = Math.max(0, Math.min(t.x, t.x + t.width)), n = Math.min(window.innerWidth, Math.max(t.x, t.x + t.width)), h = Math.max(0, Math.min(t.y, t.y + t.height)), m = Math.min(window.innerHeight, Math.max(t.y, t.y + t.height));
        return [e + ((n - e) >> 1), h + ((m - h) >> 1)];
    }).toString();
    const IS_MAC_DECL = (() => {
        return navigator.platform.toLowerCase().includes('mac');
    }).toString();
    async function getElementCenter(context, element) {
        const hiddenSandboxRealm = await context.getOrCreateHiddenSandbox();
        const result = await hiddenSandboxRealm.callFunction(CALCULATE_IN_VIEW_CENTER_PT_DECL, false, { type: 'undefined' }, [element]);
        if (result.type === 'exception') {
            throw new NoSuchElementException(`Origin element ${element.sharedId} was not found`);
        }
        assert(result.result.type === 'array');
        assert(result.result.value?.[0]?.type === 'number');
        assert(result.result.value?.[1]?.type === 'number');
        const { result: { value: [{ value: x }, { value: y }], }, } = result;
        return { x: x, y: y };
    }
    class ActionDispatcher {
        static isMacOS = async (context) => {
            const hiddenSandboxRealm = await context.getOrCreateHiddenSandbox();
            const result = await hiddenSandboxRealm.callFunction(IS_MAC_DECL, false);
            assert(result.type !== 'exception');
            assert(result.result.type === 'boolean');
            return result.result.value;
        };
        #browsingContextStorage;
        #tickStart = 0;
        #tickDuration = 0;
        #inputState;
        #contextId;
        #isMacOS;
        constructor(inputState, browsingContextStorage, contextId, isMacOS) {
            this.#browsingContextStorage = browsingContextStorage;
            this.#inputState = inputState;
            this.#contextId = contextId;
            this.#isMacOS = isMacOS;
        }
        get #context() {
            return this.#browsingContextStorage.getContext(this.#contextId);
        }
        async dispatchActions(optionsByTick) {
            await this.#inputState.queue.run(async () => {
                for (const options of optionsByTick) {
                    await this.dispatchTickActions(options);
                }
            });
        }
        async dispatchTickActions(options) {
            this.#tickStart = performance.now();
            this.#tickDuration = 0;
            for (const { action } of options) {
                if ('duration' in action && action.duration !== undefined) {
                    this.#tickDuration = Math.max(this.#tickDuration, action.duration);
                }
            }
            const promises = [
                new Promise((resolve) => setTimeout(resolve, this.#tickDuration)),
            ];
            for (const option of options) {
                promises.push(this.#dispatchAction(option));
            }
            await Promise.all(promises);
        }
        async #dispatchAction({ id, action }) {
            const source = this.#inputState.get(id);
            const keyState = this.#inputState.getGlobalKeyState();
            switch (action.type) {
                case 'keyDown': {
                    await this.#dispatchKeyDownAction(source, action);
                    this.#inputState.cancelList.push({
                        id,
                        action: {
                            ...action,
                            type: 'keyUp',
                        },
                    });
                    break;
                }
                case 'keyUp': {
                    await this.#dispatchKeyUpAction(source, action);
                    break;
                }
                case 'pause': {
                    break;
                }
                case 'pointerDown': {
                    await this.#dispatchPointerDownAction(source, keyState, action);
                    this.#inputState.cancelList.push({
                        id,
                        action: {
                            ...action,
                            type: 'pointerUp',
                        },
                    });
                    break;
                }
                case 'pointerMove': {
                    await this.#dispatchPointerMoveAction(source, keyState, action);
                    break;
                }
                case 'pointerUp': {
                    await this.#dispatchPointerUpAction(source, keyState, action);
                    break;
                }
                case 'scroll': {
                    await this.#dispatchScrollAction(source, keyState, action);
                    break;
                }
            }
        }
        async #dispatchPointerDownAction(source, keyState, action) {
            const { button } = action;
            if (source.pressed.has(button)) {
                return;
            }
            source.pressed.add(button);
            const { x, y, subtype: pointerType } = source;
            const { width, height, pressure, twist, tangentialPressure } = action;
            const { tiltX, tiltY } = getTilt(action);
            const { modifiers } = keyState;
            const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
            switch (pointerType) {
                case "mouse" :
                case "pen" :
                    await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
                        type: 'mousePressed',
                        x,
                        y,
                        modifiers,
                        button: getCdpButton(button),
                        buttons: source.buttons,
                        clickCount: source.setClickCount(button, new PointerSource.ClickContext(x, y, performance.now())),
                        pointerType,
                        tangentialPressure,
                        tiltX,
                        tiltY,
                        twist,
                        force: pressure,
                    });
                    break;
                case "touch" :
                    await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchTouchEvent', {
                        type: 'touchStart',
                        touchPoints: [
                            {
                                x,
                                y,
                                radiusX,
                                radiusY,
                                tangentialPressure,
                                tiltX,
                                tiltY,
                                twist,
                                force: pressure,
                                id: source.pointerId,
                            },
                        ],
                        modifiers,
                    });
                    break;
            }
            source.radiusX = radiusX;
            source.radiusY = radiusY;
            source.force = pressure;
        }
        #dispatchPointerUpAction(source, keyState, action) {
            const { button } = action;
            if (!source.pressed.has(button)) {
                return;
            }
            source.pressed.delete(button);
            const { x, y, force, radiusX, radiusY, subtype: pointerType } = source;
            const { modifiers } = keyState;
            switch (pointerType) {
                case "mouse" :
                case "pen" :
                    return this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
                        type: 'mouseReleased',
                        x,
                        y,
                        modifiers,
                        button: getCdpButton(button),
                        buttons: source.buttons,
                        clickCount: source.getClickCount(button),
                        pointerType,
                    });
                case "touch" :
                    return this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchTouchEvent', {
                        type: 'touchEnd',
                        touchPoints: [
                            {
                                x,
                                y,
                                id: source.pointerId,
                                force,
                                radiusX,
                                radiusY,
                            },
                        ],
                        modifiers,
                    });
            }
        }
        async #dispatchPointerMoveAction(source, keyState, action) {
            const { x: startX, y: startY, subtype: pointerType } = source;
            const { width, height, pressure, twist, tangentialPressure, x: offsetX, y: offsetY, origin = 'viewport', duration = this.#tickDuration, } = action;
            const { tiltX, tiltY } = getTilt(action);
            const { radiusX, radiusY } = getRadii(width ?? 1, height ?? 1);
            const { targetX, targetY } = await this.#getCoordinateFromOrigin(origin, offsetX, offsetY, startX, startY);
            if (targetX < 0 || targetY < 0) {
                throw new MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
            }
            let last;
            do {
                const ratio = duration > 0 ? (performance.now() - this.#tickStart) / duration : 1;
                last = ratio >= 1;
                let x;
                let y;
                if (last) {
                    x = targetX;
                    y = targetY;
                }
                else {
                    x = Math.round(ratio * (targetX - startX) + startX);
                    y = Math.round(ratio * (targetY - startY) + startY);
                }
                if (source.x !== x || source.y !== y) {
                    const { modifiers } = keyState;
                    switch (pointerType) {
                        case "mouse" :
                            await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
                                type: 'mouseMoved',
                                x,
                                y,
                                modifiers,
                                clickCount: 0,
                                button: getCdpButton(source.pressed.values().next().value ?? 5),
                                buttons: source.buttons,
                                pointerType,
                                tangentialPressure,
                                tiltX,
                                tiltY,
                                twist,
                                force: pressure,
                            });
                            break;
                        case "pen" :
                            if (source.pressed.size !== 0) {
                                await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
                                    type: 'mouseMoved',
                                    x,
                                    y,
                                    modifiers,
                                    clickCount: 0,
                                    button: getCdpButton(source.pressed.values().next().value ?? 5),
                                    buttons: source.buttons,
                                    pointerType,
                                    tangentialPressure,
                                    tiltX,
                                    tiltY,
                                    twist,
                                    force: pressure ?? 0.5,
                                });
                            }
                            break;
                        case "touch" :
                            if (source.pressed.size !== 0) {
                                await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchTouchEvent', {
                                    type: 'touchMove',
                                    touchPoints: [
                                        {
                                            x,
                                            y,
                                            radiusX,
                                            radiusY,
                                            tangentialPressure,
                                            tiltX,
                                            tiltY,
                                            twist,
                                            force: pressure,
                                            id: source.pointerId,
                                        },
                                    ],
                                    modifiers,
                                });
                            }
                            break;
                    }
                    source.x = x;
                    source.y = y;
                    source.radiusX = radiusX;
                    source.radiusY = radiusY;
                    source.force = pressure;
                }
            } while (!last);
        }
        async #getFrameOffset() {
            if (this.#context.id === this.#context.cdpTarget.id) {
                return { x: 0, y: 0 };
            }
            const { backendNodeId } = await this.#context.cdpTarget.cdpClient.sendCommand('DOM.getFrameOwner', { frameId: this.#context.id });
            const { model: frameBoxModel } = await this.#context.cdpTarget.cdpClient.sendCommand('DOM.getBoxModel', {
                backendNodeId,
            });
            return { x: frameBoxModel.content[0], y: frameBoxModel.content[1] };
        }
        async #getCoordinateFromOrigin(origin, offsetX, offsetY, startX, startY) {
            let targetX;
            let targetY;
            const frameOffset = await this.#getFrameOffset();
            switch (origin) {
                case 'viewport':
                    targetX = offsetX + frameOffset.x;
                    targetY = offsetY + frameOffset.y;
                    break;
                case 'pointer':
                    targetX = startX + offsetX + frameOffset.x;
                    targetY = startY + offsetY + frameOffset.y;
                    break;
                default: {
                    const { x: posX, y: posY } = await getElementCenter(this.#context, origin.element);
                    targetX = posX + offsetX + frameOffset.x;
                    targetY = posY + offsetY + frameOffset.y;
                    break;
                }
            }
            return { targetX, targetY };
        }
        async #dispatchScrollAction(_source, keyState, action) {
            const { deltaX: targetDeltaX, deltaY: targetDeltaY, x: offsetX, y: offsetY, origin = 'viewport', duration = this.#tickDuration, } = action;
            if (origin === 'pointer') {
                throw new InvalidArgumentException('"pointer" origin is invalid for scrolling.');
            }
            const { targetX, targetY } = await this.#getCoordinateFromOrigin(origin, offsetX, offsetY, 0, 0);
            if (targetX < 0 || targetY < 0) {
                throw new MoveTargetOutOfBoundsException(`Cannot move beyond viewport (x: ${targetX}, y: ${targetY})`);
            }
            let currentDeltaX = 0;
            let currentDeltaY = 0;
            let last;
            do {
                const ratio = duration > 0 ? (performance.now() - this.#tickStart) / duration : 1;
                last = ratio >= 1;
                let deltaX;
                let deltaY;
                if (last) {
                    deltaX = targetDeltaX - currentDeltaX;
                    deltaY = targetDeltaY - currentDeltaY;
                }
                else {
                    deltaX = Math.round(ratio * targetDeltaX - currentDeltaX);
                    deltaY = Math.round(ratio * targetDeltaY - currentDeltaY);
                }
                if (deltaX !== 0 || deltaY !== 0) {
                    const { modifiers } = keyState;
                    await this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchMouseEvent', {
                        type: 'mouseWheel',
                        deltaX,
                        deltaY,
                        x: targetX,
                        y: targetY,
                        modifiers,
                    });
                    currentDeltaX += deltaX;
                    currentDeltaY += deltaY;
                }
            } while (!last);
        }
        async #dispatchKeyDownAction(source, action) {
            const rawKey = action.value;
            if (!isSingleGrapheme(rawKey)) {
                throw new InvalidArgumentException(`Invalid key value: ${rawKey}`);
            }
            const isGrapheme = isSingleComplexGrapheme(rawKey);
            const key = getNormalizedKey(rawKey);
            const repeat = source.pressed.has(key);
            const code = getKeyCode(rawKey);
            const location = getKeyLocation(rawKey);
            switch (key) {
                case 'Alt':
                    source.alt = true;
                    break;
                case 'Shift':
                    source.shift = true;
                    break;
                case 'Control':
                    source.ctrl = true;
                    break;
                case 'Meta':
                    source.meta = true;
                    break;
            }
            source.pressed.add(key);
            const { modifiers } = source;
            const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
            const text = getKeyEventText(code ?? '', source) ?? unmodifiedText;
            let command;
            if (this.#isMacOS && source.meta) {
                switch (code) {
                    case 'KeyA':
                        command = 'SelectAll';
                        break;
                    case 'KeyC':
                        command = 'Copy';
                        break;
                    case 'KeyV':
                        command = source.shift ? 'PasteAndMatchStyle' : 'Paste';
                        break;
                    case 'KeyX':
                        command = 'Cut';
                        break;
                    case 'KeyZ':
                        command = source.shift ? 'Redo' : 'Undo';
                        break;
                }
            }
            const promises = [
                this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchKeyEvent', {
                    type: text ? 'keyDown' : 'rawKeyDown',
                    windowsVirtualKeyCode: KeyToKeyCode[key],
                    key,
                    code,
                    text,
                    unmodifiedText,
                    autoRepeat: repeat,
                    isSystemKey: source.alt || undefined,
                    location: location < 3 ? location : undefined,
                    isKeypad: location === 3,
                    modifiers,
                    commands: command ? [command] : undefined,
                }),
            ];
            if (key === 'Escape') {
                if (!source.alt &&
                    ((this.#isMacOS && !source.ctrl && !source.meta) || !this.#isMacOS)) {
                    promises.push(this.#context.cdpTarget.cdpClient.sendCommand('Input.cancelDragging'));
                }
            }
            await Promise.all(promises);
        }
        #dispatchKeyUpAction(source, action) {
            const rawKey = action.value;
            if (!isSingleGrapheme(rawKey)) {
                throw new InvalidArgumentException(`Invalid key value: ${rawKey}`);
            }
            const isGrapheme = isSingleComplexGrapheme(rawKey);
            const key = getNormalizedKey(rawKey);
            if (!source.pressed.has(key)) {
                return;
            }
            const code = getKeyCode(rawKey);
            const location = getKeyLocation(rawKey);
            switch (key) {
                case 'Alt':
                    source.alt = false;
                    break;
                case 'Shift':
                    source.shift = false;
                    break;
                case 'Control':
                    source.ctrl = false;
                    break;
                case 'Meta':
                    source.meta = false;
                    break;
            }
            source.pressed.delete(key);
            const { modifiers } = source;
            const unmodifiedText = getKeyEventUnmodifiedText(key, source, isGrapheme);
            const text = getKeyEventText(code ?? '', source) ?? unmodifiedText;
            return this.#context.cdpTarget.cdpClient.sendCommand('Input.dispatchKeyEvent', {
                type: 'keyUp',
                windowsVirtualKeyCode: KeyToKeyCode[key],
                key,
                code,
                text,
                unmodifiedText,
                location: location < 3 ? location : undefined,
                isSystemKey: source.alt || undefined,
                isKeypad: location === 3,
                modifiers,
            });
        }
    }
    const getKeyEventUnmodifiedText = (key, source, isGrapheme) => {
        if (isGrapheme) {
            return key;
        }
        if (key === 'Enter') {
            return '\r';
        }
        return [...key].length === 1
            ? source.shift
                ? key.toLocaleUpperCase('en-US')
                : key
            : undefined;
    };
    const getKeyEventText = (code, source) => {
        if (source.ctrl) {
            switch (code) {
                case 'Digit2':
                    if (source.shift) {
                        return '\x00';
                    }
                    break;
                case 'KeyA':
                    return '\x01';
                case 'KeyB':
                    return '\x02';
                case 'KeyC':
                    return '\x03';
                case 'KeyD':
                    return '\x04';
                case 'KeyE':
                    return '\x05';
                case 'KeyF':
                    return '\x06';
                case 'KeyG':
                    return '\x07';
                case 'KeyH':
                    return '\x08';
                case 'KeyI':
                    return '\x09';
                case 'KeyJ':
                    return '\x0A';
                case 'KeyK':
                    return '\x0B';
                case 'KeyL':
                    return '\x0C';
                case 'KeyM':
                    return '\x0D';
                case 'KeyN':
                    return '\x0E';
                case 'KeyO':
                    return '\x0F';
                case 'KeyP':
                    return '\x10';
                case 'KeyQ':
                    return '\x11';
                case 'KeyR':
                    return '\x12';
                case 'KeyS':
                    return '\x13';
                case 'KeyT':
                    return '\x14';
                case 'KeyU':
                    return '\x15';
                case 'KeyV':
                    return '\x16';
                case 'KeyW':
                    return '\x17';
                case 'KeyX':
                    return '\x18';
                case 'KeyY':
                    return '\x19';
                case 'KeyZ':
                    return '\x1A';
                case 'BracketLeft':
                    return '\x1B';
                case 'Backslash':
                    return '\x1C';
                case 'BracketRight':
                    return '\x1D';
                case 'Digit6':
                    if (source.shift) {
                        return '\x1E';
                    }
                    break;
                case 'Minus':
                    return '\x1F';
            }
            return '';
        }
        if (source.alt) {
            return '';
        }
        return;
    };
    function getCdpButton(button) {
        switch (button) {
            case 0:
                return 'left';
            case 1:
                return 'middle';
            case 2:
                return 'right';
            case 3:
                return 'back';
            case 4:
                return 'forward';
            default:
                return 'none';
        }
    }
    function getTilt(action) {
        const altitudeAngle = action.altitudeAngle ?? Math.PI / 2;
        const azimuthAngle = action.azimuthAngle ?? 0;
        let tiltXRadians = 0;
        let tiltYRadians = 0;
        if (altitudeAngle === 0) {
            if (azimuthAngle === 0 || azimuthAngle === 2 * Math.PI) {
                tiltXRadians = Math.PI / 2;
            }
            if (azimuthAngle === Math.PI / 2) {
                tiltYRadians = Math.PI / 2;
            }
            if (azimuthAngle === Math.PI) {
                tiltXRadians = -Math.PI / 2;
            }
            if (azimuthAngle === (3 * Math.PI) / 2) {
                tiltYRadians = -Math.PI / 2;
            }
            if (azimuthAngle > 0 && azimuthAngle < Math.PI / 2) {
                tiltXRadians = Math.PI / 2;
                tiltYRadians = Math.PI / 2;
            }
            if (azimuthAngle > Math.PI / 2 && azimuthAngle < Math.PI) {
                tiltXRadians = -Math.PI / 2;
                tiltYRadians = Math.PI / 2;
            }
            if (azimuthAngle > Math.PI && azimuthAngle < (3 * Math.PI) / 2) {
                tiltXRadians = -Math.PI / 2;
                tiltYRadians = -Math.PI / 2;
            }
            if (azimuthAngle > (3 * Math.PI) / 2 && azimuthAngle < 2 * Math.PI) {
                tiltXRadians = Math.PI / 2;
                tiltYRadians = -Math.PI / 2;
            }
        }
        if (altitudeAngle !== 0) {
            const tanAlt = Math.tan(altitudeAngle);
            tiltXRadians = Math.atan(Math.cos(azimuthAngle) / tanAlt);
            tiltYRadians = Math.atan(Math.sin(azimuthAngle) / tanAlt);
        }
        const factor = 180 / Math.PI;
        return {
            tiltX: Math.round(tiltXRadians * factor),
            tiltY: Math.round(tiltYRadians * factor),
        };
    }
    function getRadii(width, height) {
        return {
            radiusX: width ? width / 2 : 0.5,
            radiusY: height ? height / 2 : 0.5,
        };
    }

    /**
     * Copyright 2023 Google LLC.
     * Copyright (c) Microsoft Corporation.
     * Copyright 2022 The Chromium Authors.
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
    class Mutex {
        #locked = false;
        #acquirers = [];
        acquire() {
            const state = { resolved: false };
            if (this.#locked) {
                return new Promise((resolve) => {
                    this.#acquirers.push(() => resolve(this.#release.bind(this, state)));
                });
            }
            this.#locked = true;
            return Promise.resolve(this.#release.bind(this, state));
        }
        #release(state) {
            if (state.resolved) {
                throw new Error('Cannot release more than once.');
            }
            state.resolved = true;
            const resolve = this.#acquirers.shift();
            if (!resolve) {
                this.#locked = false;
                return;
            }
            resolve();
        }
        async run(action) {
            const release = await this.acquire();
            try {
                const result = await action();
                return result;
            }
            finally {
                release();
            }
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    class InputState {
        cancelList = [];
        #sources = new Map();
        #mutex = new Mutex();
        getOrCreate(id, type, subtype) {
            let source = this.#sources.get(id);
            if (!source) {
                switch (type) {
                    case "none" :
                        source = new NoneSource();
                        break;
                    case "key" :
                        source = new KeySource();
                        break;
                    case "pointer" : {
                        let pointerId = subtype === "mouse"  ? 0 : 2;
                        const pointerIds = new Set();
                        for (const [, source] of this.#sources) {
                            if (source.type === "pointer" ) {
                                pointerIds.add(source.pointerId);
                            }
                        }
                        while (pointerIds.has(pointerId)) {
                            ++pointerId;
                        }
                        source = new PointerSource(pointerId, subtype);
                        break;
                    }
                    case "wheel" :
                        source = new WheelSource();
                        break;
                    default:
                        throw new InvalidArgumentException(`Expected "${"none" }", "${"key" }", "${"pointer" }", or "${"wheel" }". Found unknown source type ${type}.`);
                }
                this.#sources.set(id, source);
                return source;
            }
            if (source.type !== type) {
                throw new InvalidArgumentException(`Input source type of ${id} is ${source.type}, but received ${type}.`);
            }
            return source;
        }
        get(id) {
            const source = this.#sources.get(id);
            if (!source) {
                throw new UnknownErrorException(`Internal error.`);
            }
            return source;
        }
        getGlobalKeyState() {
            const state = new KeySource();
            for (const [, source] of this.#sources) {
                if (source.type !== "key" ) {
                    continue;
                }
                for (const pressed of source.pressed) {
                    state.pressed.add(pressed);
                }
                state.alt ||= source.alt;
                state.ctrl ||= source.ctrl;
                state.meta ||= source.meta;
                state.shift ||= source.shift;
            }
            return state;
        }
        get queue() {
            return this.#mutex;
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    class InputStateManager extends WeakMap {
        get(context) {
            assert(context.isTopLevelContext());
            if (!this.has(context)) {
                this.set(context, new InputState());
            }
            return super.get(context);
        }
    }

    /*
     * Copyright 2023 Google LLC.
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
    class InputProcessor {
        #browsingContextStorage;
        #inputStateManager = new InputStateManager();
        constructor(browsingContextStorage) {
            this.#browsingContextStorage = browsingContextStorage;
        }
        async performActions(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            const inputState = this.#inputStateManager.get(context.top);
            const actionsByTick = this.#getActionsByTick(params, inputState);
            const dispatcher = new ActionDispatcher(inputState, this.#browsingContextStorage, params.context, await ActionDispatcher.isMacOS(context).catch(() => false));
            await dispatcher.dispatchActions(actionsByTick);
            return {};
        }
        async releaseActions(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            const topContext = context.top;
            const inputState = this.#inputStateManager.get(topContext);
            const dispatcher = new ActionDispatcher(inputState, this.#browsingContextStorage, params.context, await ActionDispatcher.isMacOS(context).catch(() => false));
            await dispatcher.dispatchTickActions(inputState.cancelList.reverse());
            this.#inputStateManager.delete(topContext);
            return {};
        }
        async setFiles(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            const hiddenSandboxRealm = await context.getOrCreateHiddenSandbox();
            let result;
            try {
                result = await hiddenSandboxRealm.callFunction(String(function getFiles(fileListLength) {
                    if (!(this instanceof HTMLInputElement)) {
                        if (this instanceof Element) {
                            return 1 ;
                        }
                        return 0 ;
                    }
                    if (this.type !== 'file') {
                        return 2 ;
                    }
                    if (this.disabled) {
                        return 3 ;
                    }
                    if (fileListLength > 1 && !this.multiple) {
                        return 4 ;
                    }
                    return;
                }), false, params.element, [{ type: 'number', value: params.files.length }]);
            }
            catch {
                throw new NoSuchNodeException(`Could not find element ${params.element.sharedId}`);
            }
            assert(result.type === 'success');
            if (result.result.type === 'number') {
                switch (result.result.value) {
                    case 0 : {
                        throw new NoSuchElementException(`Could not find element ${params.element.sharedId}`);
                    }
                    case 1 : {
                        throw new UnableToSetFileInputException(`Element ${params.element.sharedId} is not a input`);
                    }
                    case 2 : {
                        throw new UnableToSetFileInputException(`Input element ${params.element.sharedId} is not a file type`);
                    }
                    case 3 : {
                        throw new UnableToSetFileInputException(`Input element ${params.element.sharedId} is disabled`);
                    }
                    case 4 : {
                        throw new UnableToSetFileInputException(`Cannot set multiple files on a non-multiple input element`);
                    }
                }
            }
            if (params.files.length === 0) {
                await hiddenSandboxRealm.callFunction(String(function dispatchEvent() {
                    if (this.files?.length === 0) {
                        this.dispatchEvent(new Event('cancel', {
                            bubbles: true,
                        }));
                        return;
                    }
                    this.files = new DataTransfer().files;
                    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
                    this.dispatchEvent(new Event('change', { bubbles: true }));
                }), false, params.element);
                return {};
            }
            const paths = [];
            for (let i = 0; i < params.files.length; ++i) {
                const result = await hiddenSandboxRealm.callFunction(String(function getFiles(index) {
                    return this.files?.item(index);
                }), false, params.element, [{ type: 'number', value: 0 }], "root" );
                assert(result.type === 'success');
                if (result.result.type !== 'object') {
                    break;
                }
                const { handle } = result.result;
                assert(handle !== undefined);
                const { path } = await hiddenSandboxRealm.cdpClient.sendCommand('DOM.getFileInfo', {
                    objectId: handle,
                });
                paths.push(path);
                void hiddenSandboxRealm.disown(handle).catch(undefined);
            }
            paths.sort();
            const sortedFiles = [...params.files].sort();
            if (paths.length !== params.files.length ||
                sortedFiles.some((path, index) => {
                    return paths[index] !== path;
                })) {
                const { objectId } = await hiddenSandboxRealm.deserializeForCdp(params.element);
                assert(objectId !== undefined);
                await hiddenSandboxRealm.cdpClient.sendCommand('DOM.setFileInputFiles', {
                    files: params.files,
                    objectId,
                });
            }
            else {
                await hiddenSandboxRealm.callFunction(String(function dispatchEvent() {
                    this.dispatchEvent(new Event('cancel', {
                        bubbles: true,
                    }));
                }), false, params.element);
            }
            return {};
        }
        #getActionsByTick(params, inputState) {
            const actionsByTick = [];
            for (const action of params.actions) {
                switch (action.type) {
                    case "pointer" : {
                        action.parameters ??= { pointerType: "mouse"  };
                        action.parameters.pointerType ??= "mouse" ;
                        const source = inputState.getOrCreate(action.id, "pointer" , action.parameters.pointerType);
                        if (source.subtype !== action.parameters.pointerType) {
                            throw new InvalidArgumentException(`Expected input source ${action.id} to be ${source.subtype}; got ${action.parameters.pointerType}.`);
                        }
                        source.resetClickCount();
                        break;
                    }
                    default:
                        inputState.getOrCreate(action.id, action.type);
                }
                const actions = action.actions.map((item) => ({
                    id: action.id,
                    action: item,
                }));
                for (let i = 0; i < actions.length; i++) {
                    if (actionsByTick.length === i) {
                        actionsByTick.push([]);
                    }
                    actionsByTick[i].push(actions[i]);
                }
            }
            return actionsByTick;
        }
    }

    /**
     * Copyright 2024 Google LLC.
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
    function base64ToString(base64Str) {
        if ('atob' in globalThis) {
            return globalThis.atob(base64Str);
        }
        return Buffer.from(base64Str, 'base64').toString('ascii');
    }

    /*
     * Copyright 2023 Google LLC.
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
     *
     */
    function computeHeadersSize(headers) {
        const requestHeaders = headers.reduce((acc, header) => {
            return `${acc}${header.name}: ${header.value.value}\r\n`;
        }, '');
        return new TextEncoder().encode(requestHeaders).length;
    }
    function stringToBase64(str) {
        return typedArrayToBase64(new TextEncoder().encode(str));
    }
    function typedArrayToBase64(typedArray) {
        const chunkSize = 65534;
        const chunks = [];
        for (let i = 0; i < typedArray.length; i += chunkSize) {
            const chunk = typedArray.subarray(i, i + chunkSize);
            chunks.push(String.fromCodePoint.apply(null, chunk));
        }
        const binaryString = chunks.join('');
        return btoa(binaryString);
    }
    function bidiNetworkHeadersFromCdpNetworkHeaders(headers) {
        if (!headers) {
            return [];
        }
        return Object.entries(headers).map(([name, value]) => ({
            name,
            value: {
                type: 'string',
                value,
            },
        }));
    }
    function cdpFetchHeadersFromBidiNetworkHeaders(headers) {
        if (headers === undefined) {
            return undefined;
        }
        return headers.map(({ name, value }) => ({
            name,
            value: value.value,
        }));
    }
    function networkHeaderFromCookieHeaders(headers) {
        if (headers === undefined) {
            return undefined;
        }
        const value = headers.reduce((acc, value, index) => {
            if (index > 0) {
                acc += ';';
            }
            const cookieValue = value.value.type === 'base64'
                ? btoa(value.value.value)
                : value.value.value;
            acc += `${value.name}=${cookieValue}`;
            return acc;
        }, '');
        return {
            name: 'Cookie',
            value: {
                type: 'string',
                value,
            },
        };
    }
    function cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(action) {
        switch (action) {
            case 'default':
                return 'Default';
            case 'cancel':
                return 'CancelAuth';
            case 'provideCredentials':
                return 'ProvideCredentials';
        }
    }
    function cdpToBiDiCookie(cookie) {
        const result = {
            name: cookie.name,
            value: { type: 'string', value: cookie.value },
            domain: cookie.domain,
            path: cookie.path,
            size: cookie.size,
            httpOnly: cookie.httpOnly,
            secure: cookie.secure,
            sameSite: cookie.sameSite === undefined
                ? "none"
                : sameSiteCdpToBiDi(cookie.sameSite),
            ...(cookie.expires >= 0 ? { expiry: Math.round(cookie.expires) } : undefined),
        };
        result[`goog:session`] = cookie.session;
        result[`goog:priority`] = cookie.priority;
        result[`goog:sourceScheme`] = cookie.sourceScheme;
        result[`goog:sourcePort`] = cookie.sourcePort;
        if (cookie.partitionKey !== undefined) {
            result[`goog:partitionKey`] = cookie.partitionKey;
        }
        if (cookie.partitionKeyOpaque !== undefined) {
            result[`goog:partitionKeyOpaque`] = cookie.partitionKeyOpaque;
        }
        return result;
    }
    function deserializeByteValue(value) {
        if (value.type === 'base64') {
            return base64ToString(value.value);
        }
        return value.value;
    }
    function bidiToCdpCookie(params, partitionKey) {
        const deserializedValue = deserializeByteValue(params.cookie.value);
        const result = {
            name: params.cookie.name,
            value: deserializedValue,
            domain: params.cookie.domain,
            path: params.cookie.path ?? '/',
            secure: params.cookie.secure ?? false,
            httpOnly: params.cookie.httpOnly ?? false,
            ...(partitionKey.sourceOrigin !== undefined && {
                partitionKey: {
                    hasCrossSiteAncestor: false,
                    topLevelSite: partitionKey.sourceOrigin,
                },
            }),
            ...(params.cookie.expiry !== undefined && {
                expires: params.cookie.expiry,
            }),
            ...(params.cookie.sameSite !== undefined && {
                sameSite: sameSiteBiDiToCdp(params.cookie.sameSite),
            }),
        };
        if (params.cookie[`goog:url`] !== undefined) {
            result.url = params.cookie[`goog:url`];
        }
        if (params.cookie[`goog:priority`] !== undefined) {
            result.priority = params.cookie[`goog:priority`];
        }
        if (params.cookie[`goog:sourceScheme`] !== undefined) {
            result.sourceScheme = params.cookie[`goog:sourceScheme`];
        }
        if (params.cookie[`goog:sourcePort`] !== undefined) {
            result.sourcePort = params.cookie[`goog:sourcePort`];
        }
        return result;
    }
    function sameSiteCdpToBiDi(sameSite) {
        switch (sameSite) {
            case 'Strict':
                return "strict" ;
            case 'None':
                return "none" ;
            case 'Lax':
                return "lax" ;
            default:
                return "lax" ;
        }
    }
    function sameSiteBiDiToCdp(sameSite) {
        switch (sameSite) {
            case "none" :
                return 'None';
            case "strict" :
                return 'Strict';
            case "default" :
            case "lax" :
                return 'Lax';
        }
        throw new InvalidArgumentException(`Unknown 'sameSite' value ${sameSite}`);
    }
    function isSpecialScheme(protocol) {
        return ['ftp', 'file', 'http', 'https', 'ws', 'wss'].includes(protocol.replace(/:$/, ''));
    }
    function getScheme(url) {
        return url.protocol.replace(/:$/, '');
    }
    function matchUrlPattern(pattern, url) {
        const parsedUrl = new URL(url);
        if (pattern.protocol !== undefined &&
            pattern.protocol !== getScheme(parsedUrl)) {
            return false;
        }
        if (pattern.hostname !== undefined &&
            pattern.hostname !== parsedUrl.hostname) {
            return false;
        }
        if (pattern.port !== undefined && pattern.port !== parsedUrl.port) {
            return false;
        }
        if (pattern.pathname !== undefined &&
            pattern.pathname !== parsedUrl.pathname) {
            return false;
        }
        if (pattern.search !== undefined && pattern.search !== parsedUrl.search) {
            return false;
        }
        return true;
    }
    function bidiBodySizeFromCdpPostDataEntries(entries) {
        let size = 0;
        for (const entry of entries) {
            size += atob(entry.bytes ?? '').length;
        }
        return size;
    }
    function getTiming(timing, offset = 0) {
        if (!timing) {
            return 0;
        }
        if (timing <= 0 || timing + offset <= 0) {
            return 0;
        }
        return timing + offset;
    }

    /**
     * Copyright 2023 Google LLC.
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
    class NetworkProcessor {
        #browsingContextStorage;
        #networkStorage;
        #userContextStorage;
        #contextConfigStorage;
        constructor(browsingContextStorage, networkStorage, userContextStorage, contextConfigStorage) {
            this.#userContextStorage = userContextStorage;
            this.#browsingContextStorage = browsingContextStorage;
            this.#networkStorage = networkStorage;
            this.#contextConfigStorage = contextConfigStorage;
        }
        async addIntercept(params) {
            this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
            const urlPatterns = params.urlPatterns ?? [];
            const parsedUrlPatterns = NetworkProcessor.parseUrlPatterns(urlPatterns);
            const intercept = this.#networkStorage.addIntercept({
                urlPatterns: parsedUrlPatterns,
                phases: params.phases,
                contexts: params.contexts,
            });
            await this.#toggleNetwork();
            return {
                intercept,
            };
        }
        async continueRequest(params) {
            if (params.url !== undefined) {
                NetworkProcessor.parseUrlString(params.url);
            }
            if (params.method !== undefined) {
                if (!NetworkProcessor.isMethodValid(params.method)) {
                    throw new InvalidArgumentException(`Method '${params.method}' is invalid.`);
                }
            }
            if (params.headers) {
                NetworkProcessor.validateHeaders(params.headers);
            }
            const request = this.#getBlockedRequestOrFail(params.request, [
                "beforeRequestSent" ,
            ]);
            try {
                await request.continueRequest(params);
            }
            catch (error) {
                throw NetworkProcessor.wrapInterceptionError(error);
            }
            return {};
        }
        async continueResponse(params) {
            if (params.headers) {
                NetworkProcessor.validateHeaders(params.headers);
            }
            const request = this.#getBlockedRequestOrFail(params.request, [
                "authRequired" ,
                "responseStarted" ,
            ]);
            try {
                await request.continueResponse(params);
            }
            catch (error) {
                throw NetworkProcessor.wrapInterceptionError(error);
            }
            return {};
        }
        async continueWithAuth(params) {
            const networkId = params.request;
            const request = this.#getBlockedRequestOrFail(networkId, [
                "authRequired" ,
            ]);
            await request.continueWithAuth(params);
            return {};
        }
        async failRequest({ request: networkId, }) {
            const request = this.#getRequestOrFail(networkId);
            if (request.interceptPhase === "authRequired" ) {
                throw new InvalidArgumentException(`Request '${networkId}' in 'authRequired' phase cannot be failed`);
            }
            if (!request.interceptPhase) {
                throw new NoSuchRequestException(`No blocked request found for network id '${networkId}'`);
            }
            await request.failRequest('Failed');
            return {};
        }
        async provideResponse(params) {
            if (params.headers) {
                NetworkProcessor.validateHeaders(params.headers);
            }
            const request = this.#getBlockedRequestOrFail(params.request, [
                "beforeRequestSent" ,
                "responseStarted" ,
                "authRequired" ,
            ]);
            try {
                await request.provideResponse(params);
            }
            catch (error) {
                throw NetworkProcessor.wrapInterceptionError(error);
            }
            return {};
        }
        async #toggleNetwork() {
            await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
                return context.cdpTarget.toggleNetwork();
            }));
        }
        async removeIntercept(params) {
            this.#networkStorage.removeIntercept(params.intercept);
            await this.#toggleNetwork();
            return {};
        }
        async setCacheBehavior(params) {
            const contexts = this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
            if (contexts.size === 0) {
                this.#networkStorage.defaultCacheBehavior = params.cacheBehavior;
                await Promise.all(this.#browsingContextStorage.getAllContexts().map((context) => {
                    return context.cdpTarget.toggleSetCacheDisabled();
                }));
                return {};
            }
            const cacheDisabled = params.cacheBehavior === 'bypass';
            await Promise.all([...contexts.values()].map((context) => {
                return context.cdpTarget.toggleSetCacheDisabled(cacheDisabled);
            }));
            return {};
        }
        #getRequestOrFail(id) {
            const request = this.#networkStorage.getRequestById(id);
            if (!request) {
                throw new NoSuchRequestException(`Network request with ID '${id}' doesn't exist`);
            }
            return request;
        }
        #getBlockedRequestOrFail(id, phases) {
            const request = this.#getRequestOrFail(id);
            if (!request.interceptPhase) {
                throw new NoSuchRequestException(`No blocked request found for network id '${id}'`);
            }
            if (request.interceptPhase && !phases.includes(request.interceptPhase)) {
                throw new InvalidArgumentException(`Blocked request for network id '${id}' is in '${request.interceptPhase}' phase`);
            }
            return request;
        }
        static validateHeaders(headers) {
            for (const header of headers) {
                let headerValue;
                if (header.value.type === 'string') {
                    headerValue = header.value.value;
                }
                else {
                    headerValue = atob(header.value.value);
                }
                if (headerValue !== headerValue.trim() ||
                    headerValue.includes('\n') ||
                    headerValue.includes('\0')) {
                    throw new InvalidArgumentException(`Header value '${headerValue}' is not acceptable value`);
                }
            }
        }
        static isMethodValid(method) {
            return /^[!#$%&'*+\-.^_`|~a-zA-Z\d]+$/.test(method);
        }
        static parseUrlString(url) {
            try {
                return new URL(url);
            }
            catch (error) {
                throw new InvalidArgumentException(`Invalid URL '${url}': ${error}`);
            }
        }
        static parseUrlPatterns(urlPatterns) {
            return urlPatterns.map((urlPattern) => {
                let patternUrl = '';
                let hasProtocol = true;
                let hasHostname = true;
                let hasPort = true;
                let hasPathname = true;
                let hasSearch = true;
                switch (urlPattern.type) {
                    case 'string': {
                        patternUrl = unescapeURLPattern(urlPattern.pattern);
                        break;
                    }
                    case 'pattern': {
                        if (urlPattern.protocol === undefined) {
                            hasProtocol = false;
                            patternUrl += 'http';
                        }
                        else {
                            if (urlPattern.protocol === '') {
                                throw new InvalidArgumentException('URL pattern must specify a protocol');
                            }
                            urlPattern.protocol = unescapeURLPattern(urlPattern.protocol);
                            if (!urlPattern.protocol.match(/^[a-zA-Z+-.]+$/)) {
                                throw new InvalidArgumentException('Forbidden characters');
                            }
                            patternUrl += urlPattern.protocol;
                        }
                        const scheme = patternUrl.toLocaleLowerCase();
                        patternUrl += ':';
                        if (isSpecialScheme(scheme)) {
                            patternUrl += '//';
                        }
                        if (urlPattern.hostname === undefined) {
                            if (scheme !== 'file') {
                                patternUrl += 'placeholder';
                            }
                            hasHostname = false;
                        }
                        else {
                            if (urlPattern.hostname === '') {
                                throw new InvalidArgumentException('URL pattern must specify a hostname');
                            }
                            if (urlPattern.protocol === 'file') {
                                throw new InvalidArgumentException(`URL pattern protocol cannot be 'file'`);
                            }
                            urlPattern.hostname = unescapeURLPattern(urlPattern.hostname);
                            let insideBrackets = false;
                            for (const c of urlPattern.hostname) {
                                if (c === '/' || c === '?' || c === '#') {
                                    throw new InvalidArgumentException(`'/', '?', '#' are forbidden in hostname`);
                                }
                                if (!insideBrackets && c === ':') {
                                    throw new InvalidArgumentException(`':' is only allowed inside brackets in hostname`);
                                }
                                if (c === '[') {
                                    insideBrackets = true;
                                }
                                if (c === ']') {
                                    insideBrackets = false;
                                }
                            }
                            patternUrl += urlPattern.hostname;
                        }
                        if (urlPattern.port === undefined) {
                            hasPort = false;
                        }
                        else {
                            if (urlPattern.port === '') {
                                throw new InvalidArgumentException(`URL pattern must specify a port`);
                            }
                            urlPattern.port = unescapeURLPattern(urlPattern.port);
                            patternUrl += ':';
                            if (!urlPattern.port.match(/^\d+$/)) {
                                throw new InvalidArgumentException('Forbidden characters');
                            }
                            patternUrl += urlPattern.port;
                        }
                        if (urlPattern.pathname === undefined) {
                            hasPathname = false;
                        }
                        else {
                            urlPattern.pathname = unescapeURLPattern(urlPattern.pathname);
                            if (urlPattern.pathname[0] !== '/') {
                                patternUrl += '/';
                            }
                            if (urlPattern.pathname.includes('#') ||
                                urlPattern.pathname.includes('?')) {
                                throw new InvalidArgumentException('Forbidden characters');
                            }
                            patternUrl += urlPattern.pathname;
                        }
                        if (urlPattern.search === undefined) {
                            hasSearch = false;
                        }
                        else {
                            urlPattern.search = unescapeURLPattern(urlPattern.search);
                            if (urlPattern.search[0] !== '?') {
                                patternUrl += '?';
                            }
                            if (urlPattern.search.includes('#')) {
                                throw new InvalidArgumentException('Forbidden characters');
                            }
                            patternUrl += urlPattern.search;
                        }
                        break;
                    }
                }
                const serializePort = (url) => {
                    const defaultPorts = {
                        'ftp:': 21,
                        'file:': null,
                        'http:': 80,
                        'https:': 443,
                        'ws:': 80,
                        'wss:': 443,
                    };
                    if (isSpecialScheme(url.protocol) &&
                        defaultPorts[url.protocol] !== null &&
                        (!url.port || String(defaultPorts[url.protocol]) === url.port)) {
                        return '';
                    }
                    else if (url.port) {
                        return url.port;
                    }
                    return undefined;
                };
                try {
                    const url = new URL(patternUrl);
                    return {
                        protocol: hasProtocol ? url.protocol.replace(/:$/, '') : undefined,
                        hostname: hasHostname ? url.hostname : undefined,
                        port: hasPort ? serializePort(url) : undefined,
                        pathname: hasPathname && url.pathname ? url.pathname : undefined,
                        search: hasSearch ? url.search : undefined,
                    };
                }
                catch (err) {
                    throw new InvalidArgumentException(`${err.message} '${patternUrl}'`);
                }
            });
        }
        static wrapInterceptionError(error) {
            if (error?.message.includes('Invalid header') ||
                error?.message.includes('Unsafe header')) {
                return new InvalidArgumentException(error.message);
            }
            return error;
        }
        async addDataCollector(params) {
            if (params.userContexts !== undefined && params.contexts !== undefined) {
                throw new InvalidArgumentException("'contexts' and 'userContexts' are mutually exclusive");
            }
            if (params.userContexts !== undefined) {
                await this.#userContextStorage.verifyUserContextIdList(params.userContexts);
            }
            if (params.contexts !== undefined) {
                for (const browsingContextId of params.contexts) {
                    const browsingContext = this.#browsingContextStorage.getContext(browsingContextId);
                    if (!browsingContext.isTopLevelContext()) {
                        throw new InvalidArgumentException(`Data collectors are available only on top-level browsing contexts`);
                    }
                }
            }
            const collectorId = this.#networkStorage.addDataCollector(params);
            await this.#toggleNetwork();
            return { collector: collectorId };
        }
        async getData(params) {
            return await this.#networkStorage.getCollectedData(params);
        }
        async removeDataCollector(params) {
            this.#networkStorage.removeDataCollector(params);
            await this.#toggleNetwork();
            return {};
        }
        disownData(params) {
            this.#networkStorage.disownData(params);
            return {};
        }
        async #getRelatedTopLevelBrowsingContexts(browsingContextIds, userContextIds) {
            if (browsingContextIds === undefined && userContextIds === undefined) {
                return this.#browsingContextStorage.getTopLevelContexts();
            }
            if (browsingContextIds !== undefined && userContextIds !== undefined) {
                throw new InvalidArgumentException('User contexts and browsing contexts are mutually exclusive');
            }
            const result = [];
            if (userContextIds !== undefined) {
                if (userContextIds.length === 0) {
                    throw new InvalidArgumentException('user context should be provided');
                }
                await this.#userContextStorage.verifyUserContextIdList(userContextIds);
                for (const userContextId of userContextIds) {
                    const topLevelBrowsingContexts = this.#browsingContextStorage
                        .getTopLevelContexts()
                        .filter((browsingContext) => browsingContext.userContext === userContextId);
                    result.push(...topLevelBrowsingContexts);
                }
            }
            if (browsingContextIds !== undefined) {
                if (browsingContextIds.length === 0) {
                    throw new InvalidArgumentException('browsing context should be provided');
                }
                for (const browsingContextId of browsingContextIds) {
                    const browsingContext = this.#browsingContextStorage.getContext(browsingContextId);
                    if (!browsingContext.isTopLevelContext()) {
                        throw new InvalidArgumentException('The command is only supported on the top-level context');
                    }
                    result.push(browsingContext);
                }
            }
            return [...new Set(result).values()];
        }
        async setExtraHeaders(params) {
            const affectedBrowsingContexts = await this.#getRelatedTopLevelBrowsingContexts(params.contexts, params.userContexts);
            const cdpExtraHeaders = parseBiDiHeaders(params.headers);
            if (params.userContexts === undefined && params.contexts === undefined) {
                this.#contextConfigStorage.updateGlobalConfig({
                    extraHeaders: cdpExtraHeaders,
                });
            }
            if (params.userContexts !== undefined) {
                params.userContexts.forEach((userContext) => {
                    this.#contextConfigStorage.updateUserContextConfig(userContext, {
                        extraHeaders: cdpExtraHeaders,
                    });
                });
            }
            if (params.contexts !== undefined) {
                params.contexts.forEach((browsingContextId) => {
                    this.#contextConfigStorage.updateBrowsingContextConfig(browsingContextId, { extraHeaders: cdpExtraHeaders });
                });
            }
            await Promise.all(affectedBrowsingContexts.map(async (context) => {
                const extraHeaders = this.#contextConfigStorage.getActiveConfig(context.id, context.userContext).extraHeaders ?? {};
                await context.setExtraHeaders(extraHeaders);
            }));
            return {};
        }
    }
    function unescapeURLPattern(pattern) {
        const forbidden = new Set(['(', ')', '*', '{', '}']);
        let result = '';
        let isEscaped = false;
        for (const c of pattern) {
            if (!isEscaped) {
                if (forbidden.has(c)) {
                    throw new InvalidArgumentException('Forbidden characters');
                }
                if (c === '\\') {
                    isEscaped = true;
                    continue;
                }
            }
            result += c;
            isEscaped = false;
        }
        return result;
    }
    const FORBIDDEN_HEADER_NAME_SYMBOLS = new Set([
        ' ',
        '\t',
        '\n',
        '"',
        '(',
        ')',
        ',',
        '/',
        ':',
        ';',
        '<',
        '=',
        '>',
        '?',
        '@',
        '[',
        '\\',
        ']',
        '{',
        '}',
    ]);
    const FORBIDDEN_HEADER_VALUE_SYMBOLS = new Set(['\0', '\n', '\r']);
    function includesChar(str, chars) {
        for (const char of str) {
            if (chars.has(char)) {
                return true;
            }
        }
        return false;
    }
    function parseBiDiHeaders(headers) {
        const parsedHeaders = {};
        for (const bidiHeader of headers) {
            if (bidiHeader.value.type === 'string') {
                const name = bidiHeader.name;
                const value = bidiHeader.value.value;
                if (name.length === 0) {
                    throw new InvalidArgumentException(`Empty header name is not allowed`);
                }
                if (includesChar(name, FORBIDDEN_HEADER_NAME_SYMBOLS)) {
                    throw new InvalidArgumentException(`Header name '${name}' contains forbidden symbols`);
                }
                if (includesChar(value, FORBIDDEN_HEADER_VALUE_SYMBOLS)) {
                    throw new InvalidArgumentException(`Header value '${value}' contains forbidden symbols`);
                }
                if (value.trim() !== value) {
                    throw new InvalidArgumentException(`Header value should not contain trailing or ending whitespaces`);
                }
                parsedHeaders[bidiHeader.name] = bidiHeader.value.value;
            }
            else {
                throw new UnsupportedOperationException('Only string headers values are supported');
            }
        }
        return parsedHeaders;
    }

    /**
     * Copyright 2024 Google LLC.
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
    class PermissionsProcessor {
        #browserCdpClient;
        constructor(browserCdpClient) {
            this.#browserCdpClient = browserCdpClient;
        }
        async setPermissions(params) {
            try {
                const userContextId = params['goog:userContext'] ||
                    params.userContext;
                await this.#browserCdpClient.sendCommand('Browser.setPermission', {
                    origin: params.origin,
                    embeddedOrigin: params.embeddedOrigin,
                    browserContextId: userContextId && userContextId !== 'default'
                        ? userContextId
                        : undefined,
                    permission: {
                        name: params.descriptor.name,
                    },
                    setting: params.state,
                });
            }
            catch (err) {
                if (err.message ===
                    `Permission can't be granted to opaque origins.`) {
                    return {};
                }
                throw new InvalidArgumentException(err.message);
            }
            return {};
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    function bytesToHex(bytes) {
        return bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, '0'), '');
    }
    function uuidv4() {
        if ('crypto' in globalThis && 'randomUUID' in globalThis.crypto) {
            return globalThis.crypto.randomUUID();
        }
        const randomValues = new Uint8Array(16);
        if ('crypto' in globalThis && 'getRandomValues' in globalThis.crypto) {
            globalThis.crypto.getRandomValues(randomValues);
        }
        else {
            require('crypto').webcrypto.getRandomValues(randomValues);
        }
        randomValues[6] = (randomValues[6] & 0x0f) | 0x40;
        randomValues[8] = (randomValues[8] & 0x3f) | 0x80;
        return [
            bytesToHex(randomValues.subarray(0, 4)),
            bytesToHex(randomValues.subarray(4, 6)),
            bytesToHex(randomValues.subarray(6, 8)),
            bytesToHex(randomValues.subarray(8, 10)),
            bytesToHex(randomValues.subarray(10, 16)),
        ].join('-');
    }

    /*
     * Copyright 2023 Google LLC.
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
     *
     */
    class ChannelProxy {
        #properties;
        #id = uuidv4();
        #logger;
        constructor(channel, logger) {
            this.#properties = channel;
            this.#logger = logger;
        }
        async init(realm, eventManager) {
            const channelHandle = await ChannelProxy.#createAndGetHandleInRealm(realm);
            const sendMessageHandle = await ChannelProxy.#createSendMessageHandle(realm, channelHandle);
            void this.#startListener(realm, channelHandle, eventManager);
            return sendMessageHandle;
        }
        async startListenerFromWindow(realm, eventManager) {
            try {
                const channelHandle = await this.#getHandleFromWindow(realm);
                void this.#startListener(realm, channelHandle, eventManager);
            }
            catch (error) {
                this.#logger?.(LogType.debugError, error);
            }
        }
        static #createChannelProxyEvalStr() {
            const functionStr = String(() => {
                const queue = [];
                let queueNonEmptyResolver = null;
                return {
                    async getMessage() {
                        const onMessage = queue.length > 0
                            ? Promise.resolve()
                            : new Promise((resolve) => {
                                queueNonEmptyResolver = resolve;
                            });
                        await onMessage;
                        return queue.shift();
                    },
                    sendMessage(message) {
                        queue.push(message);
                        if (queueNonEmptyResolver !== null) {
                            queueNonEmptyResolver();
                            queueNonEmptyResolver = null;
                        }
                    },
                };
            });
            return `(${functionStr})()`;
        }
        static async #createAndGetHandleInRealm(realm) {
            const createChannelHandleResult = await realm.cdpClient.sendCommand('Runtime.evaluate', {
                expression: this.#createChannelProxyEvalStr(),
                contextId: realm.executionContextId,
                serializationOptions: {
                    serialization: "idOnly" ,
                },
            });
            if (createChannelHandleResult.exceptionDetails ||
                createChannelHandleResult.result.objectId === undefined) {
                throw new Error(`Cannot create channel`);
            }
            return createChannelHandleResult.result.objectId;
        }
        static async #createSendMessageHandle(realm, channelHandle) {
            const sendMessageArgResult = await realm.cdpClient.sendCommand('Runtime.callFunctionOn', {
                functionDeclaration: String((channelHandle) => {
                    return channelHandle.sendMessage;
                }),
                arguments: [{ objectId: channelHandle }],
                executionContextId: realm.executionContextId,
                serializationOptions: {
                    serialization: "idOnly" ,
                },
            });
            return sendMessageArgResult.result.objectId;
        }
        async #startListener(realm, channelHandle, eventManager) {
            for (;;) {
                try {
                    const message = await realm.cdpClient.sendCommand('Runtime.callFunctionOn', {
                        functionDeclaration: String(async (channelHandle) => await channelHandle.getMessage()),
                        arguments: [
                            {
                                objectId: channelHandle,
                            },
                        ],
                        awaitPromise: true,
                        executionContextId: realm.executionContextId,
                        serializationOptions: {
                            serialization: "deep" ,
                            maxDepth: this.#properties.serializationOptions?.maxObjectDepth ??
                                undefined,
                        },
                    });
                    if (message.exceptionDetails) {
                        throw new Error('Runtime.callFunctionOn in ChannelProxy', {
                            cause: message.exceptionDetails,
                        });
                    }
                    for (const browsingContext of realm.associatedBrowsingContexts) {
                        eventManager.registerEvent({
                            type: 'event',
                            method: Script$2.EventNames.Message,
                            params: {
                                channel: this.#properties.channel,
                                data: realm.cdpToBidiValue(message, this.#properties.ownership ?? "none" ),
                                source: realm.source,
                            },
                        }, browsingContext.id);
                    }
                }
                catch (error) {
                    this.#logger?.(LogType.debugError, error);
                    break;
                }
            }
        }
        async #getHandleFromWindow(realm) {
            const channelHandleResult = await realm.cdpClient.sendCommand('Runtime.callFunctionOn', {
                functionDeclaration: String((id) => {
                    const w = window;
                    if (w[id] === undefined) {
                        return new Promise((resolve) => (w[id] = resolve));
                    }
                    const channelProxy = w[id];
                    delete w[id];
                    return channelProxy;
                }),
                arguments: [{ value: this.#id }],
                executionContextId: realm.executionContextId,
                awaitPromise: true,
                serializationOptions: {
                    serialization: "idOnly" ,
                },
            });
            if (channelHandleResult.exceptionDetails !== undefined ||
                channelHandleResult.result.objectId === undefined) {
                throw new Error(`ChannelHandle not found in window["${this.#id}"]`);
            }
            return channelHandleResult.result.objectId;
        }
        getEvalInWindowStr() {
            const delegate = String((id, channelProxy) => {
                const w = window;
                if (w[id] === undefined) {
                    w[id] = channelProxy;
                }
                else {
                    w[id](channelProxy);
                    delete w[id];
                }
                return channelProxy.sendMessage;
            });
            const channelProxyEval = ChannelProxy.#createChannelProxyEvalStr();
            return `(${delegate})('${this.#id}',${channelProxyEval})`;
        }
    }

    /*
     * Copyright 2023 Google LLC.
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
     *
     */
    class PreloadScript {
        #id = uuidv4();
        #cdpPreloadScripts = [];
        #functionDeclaration;
        #targetIds = new Set();
        #channels;
        #sandbox;
        #contexts;
        #userContexts;
        get id() {
            return this.#id;
        }
        get targetIds() {
            return this.#targetIds;
        }
        constructor(params, logger) {
            this.#channels =
                params.arguments?.map((a) => new ChannelProxy(a.value, logger)) ?? [];
            this.#functionDeclaration = params.functionDeclaration;
            this.#sandbox = params.sandbox;
            this.#contexts = params.contexts;
            this.#userContexts = params.userContexts;
        }
        get channels() {
            return this.#channels;
        }
        get contexts() {
            return this.#contexts;
        }
        get userContexts() {
            return this.#userContexts;
        }
        #getEvaluateString() {
            const channelsArgStr = `[${this.channels
            .map((c) => c.getEvalInWindowStr())
            .join(', ')}]`;
            return `(()=>{(${this.#functionDeclaration})(...${channelsArgStr})})()`;
        }
        async initInTargets(cdpTargets, runImmediately) {
            await Promise.all(Array.from(cdpTargets).map((cdpTarget) => this.initInTarget(cdpTarget, runImmediately)));
        }
        async initInTarget(cdpTarget, runImmediately) {
            const addCdpPreloadScriptResult = await cdpTarget.cdpClient.sendCommand('Page.addScriptToEvaluateOnNewDocument', {
                source: this.#getEvaluateString(),
                worldName: this.#sandbox,
                runImmediately,
            });
            this.#cdpPreloadScripts.push({
                target: cdpTarget,
                preloadScriptId: addCdpPreloadScriptResult.identifier,
            });
            this.#targetIds.add(cdpTarget.id);
        }
        async remove() {
            await Promise.all([
                this.#cdpPreloadScripts.map(async (cdpPreloadScript) => {
                    const cdpTarget = cdpPreloadScript.target;
                    const cdpPreloadScriptId = cdpPreloadScript.preloadScriptId;
                    return await cdpTarget.cdpClient.sendCommand('Page.removeScriptToEvaluateOnNewDocument', {
                        identifier: cdpPreloadScriptId,
                    });
                }),
            ]);
        }
        dispose(cdpTargetId) {
            this.#cdpPreloadScripts = this.#cdpPreloadScripts.filter((cdpPreloadScript) => cdpPreloadScript.target?.id !== cdpTargetId);
            this.#targetIds.delete(cdpTargetId);
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    class ScriptProcessor {
        #eventManager;
        #browsingContextStorage;
        #realmStorage;
        #preloadScriptStorage;
        #userContextStorage;
        #logger;
        constructor(eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, userContextStorage, logger) {
            this.#browsingContextStorage = browsingContextStorage;
            this.#realmStorage = realmStorage;
            this.#preloadScriptStorage = preloadScriptStorage;
            this.#userContextStorage = userContextStorage;
            this.#logger = logger;
            this.#eventManager = eventManager;
            this.#eventManager.addSubscribeHook(Script$2.EventNames.RealmCreated, this.#onRealmCreatedSubscribeHook.bind(this));
        }
        #onRealmCreatedSubscribeHook(contextId) {
            const context = this.#browsingContextStorage.getContext(contextId);
            const contextsToReport = [
                context,
                ...this.#browsingContextStorage.getContext(contextId).allChildren,
            ];
            const realms = new Set();
            for (const reportContext of contextsToReport) {
                const realmsForContext = this.#realmStorage.findRealms({
                    browsingContextId: reportContext.id,
                });
                for (const realm of realmsForContext) {
                    realms.add(realm);
                }
            }
            for (const realm of realms) {
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: Script$2.EventNames.RealmCreated,
                    params: realm.realmInfo,
                }, context.id);
            }
            return Promise.resolve();
        }
        async addPreloadScript(params) {
            if (params.userContexts?.length && params.contexts?.length) {
                throw new InvalidArgumentException('Both userContexts and contexts cannot be specified.');
            }
            const userContexts = await this.#userContextStorage.verifyUserContextIdList(params.userContexts ?? []);
            const browsingContexts = this.#browsingContextStorage.verifyTopLevelContextsList(params.contexts);
            const preloadScript = new PreloadScript(params, this.#logger);
            this.#preloadScriptStorage.add(preloadScript);
            let contextsToRunIn = [];
            if (userContexts.size) {
                contextsToRunIn = this.#browsingContextStorage
                    .getTopLevelContexts()
                    .filter((context) => {
                    return userContexts.has(context.userContext);
                });
            }
            else if (browsingContexts.size) {
                contextsToRunIn = [...browsingContexts.values()];
            }
            else {
                contextsToRunIn = this.#browsingContextStorage.getTopLevelContexts();
            }
            const cdpTargets = new Set(contextsToRunIn.map((context) => context.cdpTarget));
            await preloadScript.initInTargets(cdpTargets, false);
            return {
                script: preloadScript.id,
            };
        }
        async removePreloadScript(params) {
            const { script: id } = params;
            const script = this.#preloadScriptStorage.getPreloadScript(id);
            await script.remove();
            this.#preloadScriptStorage.remove(id);
            return {};
        }
        async callFunction(params) {
            const realm = await this.#getRealm(params.target);
            return await realm.callFunction(params.functionDeclaration, params.awaitPromise, params.this, params.arguments, params.resultOwnership, params.serializationOptions, params.userActivation);
        }
        async evaluate(params) {
            const realm = await this.#getRealm(params.target);
            return await realm.evaluate(params.expression, params.awaitPromise, params.resultOwnership, params.serializationOptions, params.userActivation);
        }
        async disown(params) {
            const realm = await this.#getRealm(params.target);
            await Promise.all(params.handles.map(async (handle) => await realm.disown(handle)));
            return {};
        }
        getRealms(params) {
            if (params.context !== undefined) {
                this.#browsingContextStorage.getContext(params.context);
            }
            const realms = this.#realmStorage
                .findRealms({
                browsingContextId: params.context,
                type: params.type,
                isHidden: false,
            })
                .map((realm) => realm.realmInfo);
            return { realms };
        }
        async #getRealm(target) {
            if ('context' in target) {
                const context = this.#browsingContextStorage.getContext(target.context);
                return await context.getOrCreateUserSandbox(target.sandbox);
            }
            return this.#realmStorage.getRealm({
                realmId: target.realm,
                isHidden: false,
            });
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    class SessionProcessor {
        #eventManager;
        #browserCdpClient;
        #initConnection;
        #created = false;
        constructor(eventManager, browserCdpClient, initConnection) {
            this.#eventManager = eventManager;
            this.#browserCdpClient = browserCdpClient;
            this.#initConnection = initConnection;
        }
        status() {
            return { ready: false, message: 'already connected' };
        }
        #mergeCapabilities(capabilitiesRequest) {
            const mergedCapabilities = [];
            for (const first of capabilitiesRequest.firstMatch ?? [{}]) {
                const result = {
                    ...capabilitiesRequest.alwaysMatch,
                };
                for (const key of Object.keys(first)) {
                    if (result[key] !== undefined) {
                        throw new InvalidArgumentException(`Capability ${key} in firstMatch is already defined in alwaysMatch`);
                    }
                    result[key] = first[key];
                }
                mergedCapabilities.push(result);
            }
            const match = mergedCapabilities.find((c) => c.browserName === 'chrome') ??
                mergedCapabilities[0] ??
                {};
            match.unhandledPromptBehavior = this.#getUnhandledPromptBehavior(match.unhandledPromptBehavior);
            return match;
        }
        #getUnhandledPromptBehavior(capabilityValue) {
            if (capabilityValue === undefined) {
                return undefined;
            }
            if (typeof capabilityValue === 'object') {
                return capabilityValue;
            }
            if (typeof capabilityValue !== 'string') {
                throw new InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' type: ${typeof capabilityValue}`);
            }
            switch (capabilityValue) {
                case 'accept':
                case 'accept and notify':
                    return {
                        default: "accept" ,
                        beforeUnload: "accept" ,
                    };
                case 'dismiss':
                case 'dismiss and notify':
                    return {
                        default: "dismiss" ,
                        beforeUnload: "accept" ,
                    };
                case 'ignore':
                    return {
                        default: "ignore" ,
                        beforeUnload: "accept" ,
                    };
                default:
                    throw new InvalidArgumentException(`Unexpected 'unhandledPromptBehavior' value: ${capabilityValue}`);
            }
        }
        async new(params) {
            if (this.#created) {
                throw new Error('Session has been already created.');
            }
            this.#created = true;
            const matchedCapabitlites = this.#mergeCapabilities(params.capabilities);
            await this.#initConnection(matchedCapabitlites);
            const version = await this.#browserCdpClient.sendCommand('Browser.getVersion');
            return {
                sessionId: 'unknown',
                capabilities: {
                    ...matchedCapabitlites,
                    acceptInsecureCerts: matchedCapabitlites.acceptInsecureCerts ?? false,
                    browserName: version.product,
                    browserVersion: version.revision,
                    platformName: '',
                    setWindowRect: false,
                    webSocketUrl: '',
                    userAgent: version.userAgent,
                },
            };
        }
        async subscribe(params, googChannel = null) {
            const subscription = await this.#eventManager.subscribe(params.events, params.contexts ?? [], params.userContexts ?? [], googChannel);
            return {
                subscription,
            };
        }
        async unsubscribe(params, googChannel = null) {
            if ('subscriptions' in params) {
                await this.#eventManager.unsubscribeByIds(params.subscriptions);
                return {};
            }
            await this.#eventManager.unsubscribe(params.events, googChannel);
            return {};
        }
    }

    class StorageProcessor {
        #browserCdpClient;
        #browsingContextStorage;
        #logger;
        constructor(browserCdpClient, browsingContextStorage, logger) {
            this.#browsingContextStorage = browsingContextStorage;
            this.#browserCdpClient = browserCdpClient;
            this.#logger = logger;
        }
        async deleteCookies(params) {
            const partitionKey = this.#expandStoragePartitionSpec(params.partition);
            let cdpResponse;
            try {
                cdpResponse = await this.#browserCdpClient.sendCommand('Storage.getCookies', {
                    browserContextId: this.#getCdpBrowserContextId(partitionKey),
                });
            }
            catch (err) {
                if (this.#isNoSuchUserContextError(err)) {
                    throw new NoSuchUserContextException(err.message);
                }
                throw err;
            }
            const cdpCookiesToDelete = cdpResponse.cookies
                .filter(
            (c) => partitionKey.sourceOrigin === undefined ||
                c.partitionKey?.topLevelSite === partitionKey.sourceOrigin)
                .filter((cdpCookie) => {
                const bidiCookie = cdpToBiDiCookie(cdpCookie);
                return this.#matchCookie(bidiCookie, params.filter);
            })
                .map((cookie) => ({
                ...cookie,
                expires: 1,
            }));
            await this.#browserCdpClient.sendCommand('Storage.setCookies', {
                cookies: cdpCookiesToDelete,
                browserContextId: this.#getCdpBrowserContextId(partitionKey),
            });
            return {
                partitionKey,
            };
        }
        async getCookies(params) {
            const partitionKey = this.#expandStoragePartitionSpec(params.partition);
            let cdpResponse;
            try {
                cdpResponse = await this.#browserCdpClient.sendCommand('Storage.getCookies', {
                    browserContextId: this.#getCdpBrowserContextId(partitionKey),
                });
            }
            catch (err) {
                if (this.#isNoSuchUserContextError(err)) {
                    throw new NoSuchUserContextException(err.message);
                }
                throw err;
            }
            const filteredBiDiCookies = cdpResponse.cookies
                .filter(
            (c) => partitionKey.sourceOrigin === undefined ||
                c.partitionKey?.topLevelSite === partitionKey.sourceOrigin)
                .map((c) => cdpToBiDiCookie(c))
                .filter((c) => this.#matchCookie(c, params.filter));
            return {
                cookies: filteredBiDiCookies,
                partitionKey,
            };
        }
        async setCookie(params) {
            const partitionKey = this.#expandStoragePartitionSpec(params.partition);
            const cdpCookie = bidiToCdpCookie(params, partitionKey);
            try {
                await this.#browserCdpClient.sendCommand('Storage.setCookies', {
                    cookies: [cdpCookie],
                    browserContextId: this.#getCdpBrowserContextId(partitionKey),
                });
            }
            catch (err) {
                if (this.#isNoSuchUserContextError(err)) {
                    throw new NoSuchUserContextException(err.message);
                }
                this.#logger?.(LogType.debugError, err);
                throw new UnableToSetCookieException(err.toString());
            }
            return {
                partitionKey,
            };
        }
        #isNoSuchUserContextError(err) {
            return err.message?.startsWith('Failed to find browser context for id');
        }
        #getCdpBrowserContextId(partitionKey) {
            return partitionKey.userContext === 'default'
                ? undefined
                : partitionKey.userContext;
        }
        #expandStoragePartitionSpecByBrowsingContext(descriptor) {
            const browsingContextId = descriptor.context;
            const browsingContext = this.#browsingContextStorage.getContext(browsingContextId);
            return {
                userContext: browsingContext.userContext,
            };
        }
        #expandStoragePartitionSpecByStorageKey(descriptor) {
            const unsupportedPartitionKeys = new Map();
            let sourceOrigin = descriptor.sourceOrigin;
            if (sourceOrigin !== undefined) {
                const url = NetworkProcessor.parseUrlString(sourceOrigin);
                if (url.origin === 'null') {
                    sourceOrigin = url.origin;
                }
                else {
                    sourceOrigin = `${url.protocol}//${url.hostname}`;
                }
            }
            for (const [key, value] of Object.entries(descriptor)) {
                if (key !== undefined &&
                    value !== undefined &&
                    !['type', 'sourceOrigin', 'userContext'].includes(key)) {
                    unsupportedPartitionKeys.set(key, value);
                }
            }
            if (unsupportedPartitionKeys.size > 0) {
                this.#logger?.(LogType.debugInfo, `Unsupported partition keys: ${JSON.stringify(Object.fromEntries(unsupportedPartitionKeys))}`);
            }
            const userContext = descriptor.userContext ?? 'default';
            return {
                userContext,
                ...(sourceOrigin === undefined ? {} : { sourceOrigin }),
            };
        }
        #expandStoragePartitionSpec(partitionSpec) {
            if (partitionSpec === undefined) {
                return { userContext: 'default' };
            }
            if (partitionSpec.type === 'context') {
                return this.#expandStoragePartitionSpecByBrowsingContext(partitionSpec);
            }
            assert(partitionSpec.type === 'storageKey', 'Unknown partition type');
            return this.#expandStoragePartitionSpecByStorageKey(partitionSpec);
        }
        #matchCookie(cookie, filter) {
            if (filter === undefined) {
                return true;
            }
            return ((filter.domain === undefined || filter.domain === cookie.domain) &&
                (filter.name === undefined || filter.name === cookie.name) &&
                (filter.value === undefined ||
                    deserializeByteValue(filter.value) ===
                        deserializeByteValue(cookie.value)) &&
                (filter.path === undefined || filter.path === cookie.path) &&
                (filter.size === undefined || filter.size === cookie.size) &&
                (filter.httpOnly === undefined || filter.httpOnly === cookie.httpOnly) &&
                (filter.secure === undefined || filter.secure === cookie.secure) &&
                (filter.sameSite === undefined || filter.sameSite === cookie.sameSite) &&
                (filter.expiry === undefined || filter.expiry === cookie.expiry));
        }
    }

    /**
     * Copyright 2025 Google LLC.
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
    class WebExtensionProcessor {
        #browserCdpClient;
        constructor(browserCdpClient) {
            this.#browserCdpClient = browserCdpClient;
        }
        async install(params) {
            switch (params.extensionData.type) {
                case 'archivePath':
                case 'base64':
                    throw new UnsupportedOperationException('Archived and Base64 extensions are not supported');
            }
            try {
                const response = await this.#browserCdpClient.sendCommand('Extensions.loadUnpacked', {
                    path: params.extensionData.path,
                });
                return {
                    extension: response.id,
                };
            }
            catch (err) {
                if (err.message.startsWith('invalid web extension')) {
                    throw new InvalidWebExtensionException(err.message);
                }
                throw err;
            }
        }
        async uninstall(params) {
            try {
                await this.#browserCdpClient.sendCommand('Extensions.uninstall', {
                    id: params.extension,
                });
                return {};
            }
            catch (err) {
                if (err.message ===
                    'Uninstall failed. Reason: could not find extension.') {
                    throw new NoSuchWebExtensionException('no such web extension');
                }
                throw err;
            }
        }
    }

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
    class OutgoingMessage {
        #message;
        #googChannel;
        constructor(message, googChannel = null) {
            this.#message = message;
            this.#googChannel = googChannel;
        }
        static createFromPromise(messagePromise, googChannel) {
            return messagePromise.then((message) => {
                if (message.kind === 'success') {
                    return {
                        kind: 'success',
                        value: new OutgoingMessage(message.value, googChannel),
                    };
                }
                return message;
            });
        }
        static createResolved(message, googChannel = null) {
            return Promise.resolve({
                kind: 'success',
                value: new OutgoingMessage(message, googChannel),
            });
        }
        get message() {
            return this.#message;
        }
        get googChannel() {
            return this.#googChannel;
        }
    }

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
    class CommandProcessor extends EventEmitter {
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
        #parser;
        #logger;
        constructor(cdpConnection, browserCdpClient, eventManager, browsingContextStorage, realmStorage, preloadScriptStorage, networkStorage, contextConfigStorage, bluetoothProcessor, userContextStorage, parser = new BidiNoOpParser(), initConnection, logger) {
            super();
            this.#browserCdpClient = browserCdpClient;
            this.#parser = parser;
            this.#logger = logger;
            this.#bluetoothProcessor = bluetoothProcessor;
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
        }
        async #processCommand(command) {
            switch (command.method) {
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
                case 'goog:cdp.getSession':
                    return this.#cdpProcessor.getSession(this.#parser.parseGetSessionParams(command.params));
                case 'goog:cdp.resolveRealm':
                    return this.#cdpProcessor.resolveRealm(this.#parser.parseResolveRealmParams(command.params));
                case 'goog:cdp.sendCommand':
                    return await this.#cdpProcessor.sendCommand(this.#parser.parseSendCommandParams(command.params));
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
                case 'input.performActions':
                    return await this.#inputProcessor.performActions(this.#parser.parsePerformActionsParams(command.params));
                case 'input.releaseActions':
                    return await this.#inputProcessor.releaseActions(this.#parser.parseReleaseActionsParams(command.params));
                case 'input.setFiles':
                    return await this.#inputProcessor.setFiles(this.#parser.parseSetFilesParams(command.params));
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
                case 'permissions.setPermission':
                    return await this.#permissionsProcessor.setPermissions(this.#parser.parseSetPermissionsParams(command.params));
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
                case 'storage.deleteCookies':
                    return await this.#storageProcessor.deleteCookies(this.#parser.parseDeleteCookiesParams(command.params));
                case 'storage.getCookies':
                    return await this.#storageProcessor.getCookies(this.#parser.parseGetCookiesParams(command.params));
                case 'storage.setCookie':
                    return await this.#storageProcessor.setCookie(this.#parser.parseSetCookieParams(command.params));
                case 'webExtension.install':
                    return await this.#webExtensionProcessor.install(this.#parser.parseInstallParams(command.params));
                case 'webExtension.uninstall':
                    return await this.#webExtensionProcessor.uninstall(this.#parser.parseUninstallParams(command.params));
            }
            throw new UnknownCommandException(`Unknown command '${command?.method}'.`);
        }
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
                this.emit("response" , {
                    message: OutgoingMessage.createResolved(response, command['goog:channel']),
                    event: command.method,
                });
            }
            catch (e) {
                if (e instanceof Exception) {
                    this.emit("response" , {
                        message: OutgoingMessage.createResolved(e.toErrorResponse(command.id), command['goog:channel']),
                        event: command.method,
                    });
                }
                else {
                    const error = e;
                    this.#logger?.(LogType.bidi, error);
                    const errorException = this.#browserCdpClient.isCloseError(e)
                        ? new NoSuchFrameException(`Browsing context is gone`)
                        : new UnknownErrorException(error.message, error.stack);
                    this.emit("response" , {
                        message: OutgoingMessage.createResolved(errorException.toErrorResponse(command.id), command['goog:channel']),
                        event: command.method,
                    });
                }
            }
        }
    }

    /**
     * Copyright 2024 Google LLC.
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
    class BluetoothGattItem {
        id;
        uuid;
        constructor(id, uuid) {
            this.id = id;
            this.uuid = uuid;
        }
    }
    class BluetoothDescriptor extends BluetoothGattItem {
        characteristic;
        constructor(id, uuid, characteristic) {
            super(id, uuid);
            this.characteristic = characteristic;
        }
    }
    class BluetoothCharacteristic extends BluetoothGattItem {
        descriptors = new Map();
        service;
        constructor(id, uuid, service) {
            super(id, uuid);
            this.service = service;
        }
    }
    class BluetoothService extends BluetoothGattItem {
        characteristics = new Map();
        device;
        constructor(id, uuid, device) {
            super(id, uuid);
            this.device = device;
        }
    }
    class BluetoothDevice {
        address;
        services = new Map();
        constructor(address) {
            this.address = address;
        }
    }
    class BluetoothProcessor {
        #eventManager;
        #browsingContextStorage;
        #bluetoothDevices = new Map();
        #bluetoothCharacteristics = new Map();
        #bluetoothDescriptors = new Map();
        constructor(eventManager, browsingContextStorage) {
            this.#eventManager = eventManager;
            this.#browsingContextStorage = browsingContextStorage;
        }
        #getDevice(address) {
            const device = this.#bluetoothDevices.get(address);
            if (!device) {
                throw new InvalidArgumentException(`Bluetooth device with address ${address} does not exist`);
            }
            return device;
        }
        #getService(device, serviceUuid) {
            const service = device.services.get(serviceUuid);
            if (!service) {
                throw new InvalidArgumentException(`Service with UUID ${serviceUuid} on device ${device.address} does not exist`);
            }
            return service;
        }
        #getCharacteristic(service, characteristicUuid) {
            const characteristic = service.characteristics.get(characteristicUuid);
            if (!characteristic) {
                throw new InvalidArgumentException(`Characteristic with UUID ${characteristicUuid} does not exist for service ${service.uuid} on device ${service.device.address}`);
            }
            return characteristic;
        }
        #getDescriptor(characteristic, descriptorUuid) {
            const descriptor = characteristic.descriptors.get(descriptorUuid);
            if (!descriptor) {
                throw new InvalidArgumentException(`Descriptor with UUID ${descriptorUuid} does not exist for characteristic ${characteristic.uuid} on service ${characteristic.service.uuid} on device ${characteristic.service.device.address}`);
            }
            return descriptor;
        }
        async simulateAdapter(params) {
            if (params.state === undefined) {
                throw new InvalidArgumentException(`Parameter "state" is required for creating a Bluetooth adapter`);
            }
            const context = this.#browsingContextStorage.getContext(params.context);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.disable');
            this.#bluetoothDevices.clear();
            this.#bluetoothCharacteristics.clear();
            this.#bluetoothDescriptors.clear();
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.enable', {
                state: params.state,
                leSupported: params.leSupported ?? true,
            });
            return {};
        }
        async disableSimulation(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.disable');
            this.#bluetoothDevices.clear();
            this.#bluetoothCharacteristics.clear();
            this.#bluetoothDescriptors.clear();
            return {};
        }
        async simulatePreconnectedPeripheral(params) {
            if (this.#bluetoothDevices.has(params.address)) {
                throw new InvalidArgumentException(`Bluetooth device with address ${params.address} already exists`);
            }
            const context = this.#browsingContextStorage.getContext(params.context);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulatePreconnectedPeripheral', {
                address: params.address,
                name: params.name,
                knownServiceUuids: params.knownServiceUuids,
                manufacturerData: params.manufacturerData,
            });
            this.#bluetoothDevices.set(params.address, new BluetoothDevice(params.address));
            return {};
        }
        async simulateAdvertisement(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateAdvertisement', {
                entry: params.scanEntry,
            });
            return {};
        }
        async simulateCharacteristic(params) {
            const device = this.#getDevice(params.address);
            const service = this.#getService(device, params.serviceUuid);
            const context = this.#browsingContextStorage.getContext(params.context);
            switch (params.type) {
                case 'add': {
                    if (params.characteristicProperties === undefined) {
                        throw new InvalidArgumentException(`Parameter "characteristicProperties" is required for adding a Bluetooth characteristic`);
                    }
                    if (service.characteristics.has(params.characteristicUuid)) {
                        throw new InvalidArgumentException(`Characteristic with UUID ${params.characteristicUuid} already exists`);
                    }
                    const response = await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.addCharacteristic', {
                        serviceId: service.id,
                        characteristicUuid: params.characteristicUuid,
                        properties: params.characteristicProperties,
                    });
                    const characteristic = new BluetoothCharacteristic(response.characteristicId, params.characteristicUuid, service);
                    service.characteristics.set(params.characteristicUuid, characteristic);
                    this.#bluetoothCharacteristics.set(characteristic.id, characteristic);
                    return {};
                }
                case 'remove': {
                    if (params.characteristicProperties !== undefined) {
                        throw new InvalidArgumentException(`Parameter "characteristicProperties" should not be provided for removing a Bluetooth characteristic`);
                    }
                    const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
                    await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.removeCharacteristic', {
                        characteristicId: characteristic.id,
                    });
                    service.characteristics.delete(params.characteristicUuid);
                    this.#bluetoothCharacteristics.delete(characteristic.id);
                    return {};
                }
                default:
                    throw new InvalidArgumentException(`Parameter "type" of ${params.type} is not supported`);
            }
        }
        async simulateCharacteristicResponse(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            const device = this.#getDevice(params.address);
            const service = this.#getService(device, params.serviceUuid);
            const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateCharacteristicOperationResponse', {
                characteristicId: characteristic.id,
                type: params.type,
                code: params.code,
                ...(params.data && {
                    data: btoa(String.fromCharCode(...params.data)),
                }),
            });
            return {};
        }
        async simulateDescriptor(params) {
            const device = this.#getDevice(params.address);
            const service = this.#getService(device, params.serviceUuid);
            const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
            const context = this.#browsingContextStorage.getContext(params.context);
            switch (params.type) {
                case 'add': {
                    if (characteristic.descriptors.has(params.descriptorUuid)) {
                        throw new InvalidArgumentException(`Descriptor with UUID ${params.descriptorUuid} already exists`);
                    }
                    const response = await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.addDescriptor', {
                        characteristicId: characteristic.id,
                        descriptorUuid: params.descriptorUuid,
                    });
                    const descriptor = new BluetoothDescriptor(response.descriptorId, params.descriptorUuid, characteristic);
                    characteristic.descriptors.set(params.descriptorUuid, descriptor);
                    this.#bluetoothDescriptors.set(descriptor.id, descriptor);
                    return {};
                }
                case 'remove': {
                    const descriptor = this.#getDescriptor(characteristic, params.descriptorUuid);
                    await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.removeDescriptor', {
                        descriptorId: descriptor.id,
                    });
                    characteristic.descriptors.delete(params.descriptorUuid);
                    this.#bluetoothDescriptors.delete(descriptor.id);
                    return {};
                }
                default:
                    throw new InvalidArgumentException(`Parameter "type" of ${params.type} is not supported`);
            }
        }
        async simulateDescriptorResponse(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            const device = this.#getDevice(params.address);
            const service = this.#getService(device, params.serviceUuid);
            const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
            const descriptor = this.#getDescriptor(characteristic, params.descriptorUuid);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateDescriptorOperationResponse', {
                descriptorId: descriptor.id,
                type: params.type,
                code: params.code,
                ...(params.data && {
                    data: btoa(String.fromCharCode(...params.data)),
                }),
            });
            return {};
        }
        async simulateGattConnectionResponse(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateGATTOperationResponse', {
                address: params.address,
                type: 'connection',
                code: params.code,
            });
            return {};
        }
        async simulateGattDisconnection(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateGATTDisconnection', {
                address: params.address,
            });
            return {};
        }
        async simulateService(params) {
            const device = this.#getDevice(params.address);
            const context = this.#browsingContextStorage.getContext(params.context);
            switch (params.type) {
                case 'add': {
                    if (device.services.has(params.uuid)) {
                        throw new InvalidArgumentException(`Service with UUID ${params.uuid} already exists`);
                    }
                    const response = await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.addService', {
                        address: params.address,
                        serviceUuid: params.uuid,
                    });
                    device.services.set(params.uuid, new BluetoothService(response.serviceId, params.uuid, device));
                    return {};
                }
                case 'remove': {
                    const service = this.#getService(device, params.uuid);
                    await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.removeService', {
                        serviceId: service.id,
                    });
                    device.services.delete(params.uuid);
                    return {};
                }
                default:
                    throw new InvalidArgumentException(`Parameter "type" of ${params.type} is not supported`);
            }
        }
        onCdpTargetCreated(cdpTarget) {
            cdpTarget.cdpClient.on('DeviceAccess.deviceRequestPrompted', (event) => {
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: 'bluetooth.requestDevicePromptUpdated',
                    params: {
                        context: cdpTarget.id,
                        prompt: event.id,
                        devices: event.devices,
                    },
                }, cdpTarget.id);
            });
            cdpTarget.browserCdpClient.on('BluetoothEmulation.gattOperationReceived', async (event) => {
                switch (event.type) {
                    case 'connection':
                        this.#eventManager.registerEvent({
                            type: 'event',
                            method: 'bluetooth.gattConnectionAttempted',
                            params: {
                                context: cdpTarget.id,
                                address: event.address,
                            },
                        }, cdpTarget.id);
                        return;
                    case 'discovery':
                        await cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateGATTOperationResponse', {
                            address: event.address,
                            type: 'discovery',
                            code: 0x0,
                        });
                }
            });
            cdpTarget.browserCdpClient.on('BluetoothEmulation.characteristicOperationReceived', (event) => {
                if (!this.#bluetoothCharacteristics.has(event.characteristicId)) {
                    return;
                }
                let type;
                if (event.type === 'write') {
                    if (event.writeType === 'write-default-deprecated') {
                        return;
                    }
                    type = event.writeType;
                }
                else {
                    type = event.type;
                }
                const characteristic = this.#bluetoothCharacteristics.get(event.characteristicId);
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: 'bluetooth.characteristicEventGenerated',
                    params: {
                        context: cdpTarget.id,
                        address: characteristic.service.device.address,
                        serviceUuid: characteristic.service.uuid,
                        characteristicUuid: characteristic.uuid,
                        type,
                        ...(event.data && {
                            data: Array.from(atob(event.data), (c) => c.charCodeAt(0)),
                        }),
                    },
                }, cdpTarget.id);
            });
            cdpTarget.browserCdpClient.on('BluetoothEmulation.descriptorOperationReceived', (event) => {
                if (!this.#bluetoothDescriptors.has(event.descriptorId)) {
                    return;
                }
                const descriptor = this.#bluetoothDescriptors.get(event.descriptorId);
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: 'bluetooth.descriptorEventGenerated',
                    params: {
                        context: cdpTarget.id,
                        address: descriptor.characteristic.service.device.address,
                        serviceUuid: descriptor.characteristic.service.uuid,
                        characteristicUuid: descriptor.characteristic.uuid,
                        descriptorUuid: descriptor.uuid,
                        type: event.type,
                        ...(event.data && {
                            data: Array.from(atob(event.data), (c) => c.charCodeAt(0)),
                        }),
                    },
                }, cdpTarget.id);
            });
        }
        async handleRequestDevicePrompt(params) {
            const context = this.#browsingContextStorage.getContext(params.context);
            if (params.accept) {
                await context.cdpTarget.cdpClient.sendCommand('DeviceAccess.selectPrompt', {
                    id: params.prompt,
                    deviceId: params.device,
                });
            }
            else {
                await context.cdpTarget.cdpClient.sendCommand('DeviceAccess.cancelPrompt', {
                    id: params.prompt,
                });
            }
            return {};
        }
    }

    /**
     * Copyright 2025 Google LLC.
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
    class ContextConfig {
        acceptInsecureCerts;
        clientHints;
        devicePixelRatio;
        disableNetworkDurableMessages;
        downloadBehavior;
        emulatedNetworkConditions;
        extraHeaders;
        geolocation;
        locale;
        maxTouchPoints;
        prerenderingDisabled;
        screenArea;
        screenOrientation;
        scriptingEnabled;
        scrollbarType;
        timezone;
        userAgent;
        userPromptHandler;
        viewport;
        static merge(...configs) {
            const result = new ContextConfig();
            for (const config of configs) {
                if (!config) {
                    continue;
                }
                for (const key in config) {
                    const value = config[key];
                    if (value === null) {
                        delete result[key];
                    }
                    else if (value !== undefined) {
                        result[key] = value;
                    }
                }
            }
            return result;
        }
    }

    /*
     * Copyright 2025 Google LLC.
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
    class ContextConfigStorage {
        #global = new ContextConfig();
        #userContextConfigs = new Map();
        #browsingContextConfigs = new Map();
        updateGlobalConfig(config) {
            this.#global = ContextConfig.merge(this.#global, config);
        }
        updateBrowsingContextConfig(browsingContextId, config) {
            this.#browsingContextConfigs.set(browsingContextId, ContextConfig.merge(this.#browsingContextConfigs.get(browsingContextId), config));
        }
        updateUserContextConfig(userContext, config) {
            this.#userContextConfigs.set(userContext, ContextConfig.merge(this.#userContextConfigs.get(userContext), config));
        }
        getGlobalConfig() {
            return this.#global;
        }
        #getExtraHeaders(topLevelBrowsingContextId, userContext) {
            const globalHeaders = this.#global.extraHeaders ?? {};
            const userContextHeaders = this.#userContextConfigs.get(userContext)?.extraHeaders ?? {};
            const browsingContextHeaders = topLevelBrowsingContextId === undefined
                ? {}
                : (this.#browsingContextConfigs.get(topLevelBrowsingContextId)
                    ?.extraHeaders ?? {});
            return { ...globalHeaders, ...userContextHeaders, ...browsingContextHeaders };
        }
        getActiveConfig(topLevelBrowsingContextId, userContext) {
            let result = ContextConfig.merge(this.#global, this.#userContextConfigs.get(userContext));
            if (topLevelBrowsingContextId !== undefined) {
                result = ContextConfig.merge(result, this.#browsingContextConfigs.get(topLevelBrowsingContextId));
            }
            const extraHeaders = this.#getExtraHeaders(topLevelBrowsingContextId, userContext);
            result.extraHeaders =
                Object.keys(extraHeaders).length > 0 ? extraHeaders : undefined;
            return result;
        }
    }

    /**
     * Copyright 2025 Google LLC.
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
    class UserContextStorage {
        #browserClient;
        constructor(browserClient) {
            this.#browserClient = browserClient;
        }
        async getUserContexts() {
            const result = await this.#browserClient.sendCommand('Target.getBrowserContexts');
            return [
                {
                    userContext: 'default',
                },
                ...result.browserContextIds.map((id) => {
                    return {
                        userContext: id,
                    };
                }),
            ];
        }
        async verifyUserContextIdList(userContextIds) {
            const foundContexts = new Set();
            if (!userContextIds.length) {
                return foundContexts;
            }
            const userContexts = await this.getUserContexts();
            const knownUserContextIds = new Set(userContexts.map((userContext) => userContext.userContext));
            for (const userContextId of userContextIds) {
                if (!knownUserContextIds.has(userContextId)) {
                    throw new NoSuchUserContextException(`User context ${userContextId} not found`);
                }
                foundContexts.add(userContextId);
            }
            return foundContexts;
        }
    }

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
    class Deferred {
        #isFinished = false;
        #promise;
        #result;
        #resolve;
        #reject;
        get isFinished() {
            return this.#isFinished;
        }
        get result() {
            if (!this.#isFinished) {
                throw new Error('Deferred is not finished yet');
            }
            return this.#result;
        }
        constructor() {
            this.#promise = new Promise((resolve, reject) => {
                this.#resolve = resolve;
                this.#reject = reject;
            });
            this.#promise.catch((_error) => {
            });
        }
        then(onFulfilled, onRejected) {
            return this.#promise.then(onFulfilled, onRejected);
        }
        catch(onRejected) {
            return this.#promise.catch(onRejected);
        }
        resolve(value) {
            this.#result = value;
            if (!this.#isFinished) {
                this.#isFinished = true;
                this.#resolve(value);
            }
        }
        reject(reason) {
            if (!this.#isFinished) {
                this.#isFinished = true;
                this.#reject(reason);
            }
        }
        finally(onFinally) {
            return this.#promise.finally(onFinally);
        }
        [Symbol.toStringTag] = 'Promise';
    }

    /**
     * Copyright 2024 Google LLC.
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
    function getTimestamp() {
        return new Date().getTime();
    }

    /**
     * Copyright 2023 Google LLC.
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
    function inchesFromCm(cm) {
        return cm / 2.54;
    }

    /*
     * Copyright 2023 Google LLC.
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
    const SHARED_ID_DIVIDER = '_element_';
    function getSharedId(frameId, documentId, backendNodeId) {
        return `f.${frameId}.d.${documentId}.e.${backendNodeId}`;
    }
    function parseLegacySharedId(sharedId) {
        const match = sharedId.match(new RegExp(`(.*)${SHARED_ID_DIVIDER}(.*)`));
        if (!match) {
            return null;
        }
        const documentId = match[1];
        const elementId = match[2];
        if (documentId === undefined || elementId === undefined) {
            return null;
        }
        const backendNodeId = parseInt(elementId ?? '');
        if (isNaN(backendNodeId)) {
            return null;
        }
        return {
            documentId,
            backendNodeId,
        };
    }
    function parseSharedId(sharedId) {
        const legacyFormattedSharedId = parseLegacySharedId(sharedId);
        if (legacyFormattedSharedId !== null) {
            return { ...legacyFormattedSharedId, frameId: undefined };
        }
        const match = sharedId.match(/f\.(.*)\.d\.(.*)\.e\.([0-9]*)/);
        if (!match) {
            return null;
        }
        const frameId = match[1];
        const documentId = match[2];
        const elementId = match[3];
        if (frameId === undefined ||
            documentId === undefined ||
            elementId === undefined) {
            return null;
        }
        const backendNodeId = parseInt(elementId ?? '');
        if (isNaN(backendNodeId)) {
            return null;
        }
        return {
            frameId,
            documentId,
            backendNodeId,
        };
    }

    class Realm {
        #cdpClient;
        #eventManager;
        #executionContextId;
        #logger;
        #origin;
        #realmId;
        realmStorage;
        constructor(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage) {
            this.#cdpClient = cdpClient;
            this.#eventManager = eventManager;
            this.#executionContextId = executionContextId;
            this.#logger = logger;
            this.#origin = origin;
            this.#realmId = realmId;
            this.realmStorage = realmStorage;
            this.realmStorage.addRealm(this);
        }
        cdpToBidiValue(cdpValue, resultOwnership) {
            const bidiValue = this.serializeForBiDi(cdpValue.result.deepSerializedValue, new Map());
            if (cdpValue.result.objectId) {
                const objectId = cdpValue.result.objectId;
                if (resultOwnership === "root" ) {
                    bidiValue.handle = objectId;
                    this.realmStorage.knownHandlesToRealmMap.set(objectId, this.realmId);
                }
                else {
                    void this.#releaseObject(objectId).catch((error) => this.#logger?.(LogType.debugError, error));
                }
            }
            return bidiValue;
        }
        isHidden() {
            return false;
        }
        serializeForBiDi(deepSerializedValue, internalIdMap) {
            if (Object.hasOwn(deepSerializedValue, 'weakLocalObjectReference')) {
                const weakLocalObjectReference = deepSerializedValue.weakLocalObjectReference;
                if (!internalIdMap.has(weakLocalObjectReference)) {
                    internalIdMap.set(weakLocalObjectReference, uuidv4());
                }
                deepSerializedValue.internalId = internalIdMap.get(weakLocalObjectReference);
                delete deepSerializedValue['weakLocalObjectReference'];
            }
            if (deepSerializedValue.type === 'node' &&
                deepSerializedValue.value &&
                Object.hasOwn(deepSerializedValue.value, 'frameId')) {
                delete deepSerializedValue.value['frameId'];
            }
            if (deepSerializedValue.type === 'platformobject') {
                return { type: 'object' };
            }
            const bidiValue = deepSerializedValue.value;
            if (bidiValue === undefined) {
                return deepSerializedValue;
            }
            if (['array', 'set', 'htmlcollection', 'nodelist'].includes(deepSerializedValue.type)) {
                for (const i in bidiValue) {
                    bidiValue[i] = this.serializeForBiDi(bidiValue[i], internalIdMap);
                }
            }
            if (['object', 'map'].includes(deepSerializedValue.type)) {
                for (const i in bidiValue) {
                    bidiValue[i] = [
                        this.serializeForBiDi(bidiValue[i][0], internalIdMap),
                        this.serializeForBiDi(bidiValue[i][1], internalIdMap),
                    ];
                }
            }
            return deepSerializedValue;
        }
        get realmId() {
            return this.#realmId;
        }
        get executionContextId() {
            return this.#executionContextId;
        }
        get origin() {
            return this.#origin;
        }
        get source() {
            return {
                realm: this.realmId,
            };
        }
        get cdpClient() {
            return this.#cdpClient;
        }
        get baseInfo() {
            return {
                realm: this.realmId,
                origin: this.origin,
            };
        }
        async evaluate(expression, awaitPromise, resultOwnership = "none" , serializationOptions = {}, userActivation = false, includeCommandLineApi = false) {
            const cdpEvaluateResult = await this.cdpClient.sendCommand('Runtime.evaluate', {
                contextId: this.executionContextId,
                expression,
                awaitPromise,
                serializationOptions: Realm.#getSerializationOptions("deep" , serializationOptions),
                userGesture: userActivation,
                includeCommandLineAPI: includeCommandLineApi,
            });
            if (cdpEvaluateResult.exceptionDetails) {
                return await this.#getExceptionResult(cdpEvaluateResult.exceptionDetails, 0, resultOwnership);
            }
            return {
                realm: this.realmId,
                result: this.cdpToBidiValue(cdpEvaluateResult, resultOwnership),
                type: 'success',
            };
        }
        #registerEvent(event) {
            if (this.associatedBrowsingContexts.length === 0) {
                this.#eventManager.registerGlobalEvent(event);
            }
            else {
                for (const browsingContext of this.associatedBrowsingContexts) {
                    this.#eventManager.registerEvent(event, browsingContext.id);
                }
            }
        }
        initialize() {
            if (!this.isHidden()) {
                this.#registerEvent({
                    type: 'event',
                    method: Script$2.EventNames.RealmCreated,
                    params: this.realmInfo,
                });
            }
        }
        async serializeCdpObject(cdpRemoteObject, resultOwnership) {
            const argument = Realm.#cdpRemoteObjectToCallArgument(cdpRemoteObject);
            const cdpValue = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                functionDeclaration: String((remoteObject) => remoteObject),
                awaitPromise: false,
                arguments: [argument],
                serializationOptions: {
                    serialization: "deep" ,
                },
                executionContextId: this.executionContextId,
            });
            return this.cdpToBidiValue(cdpValue, resultOwnership);
        }
        static #cdpRemoteObjectToCallArgument(cdpRemoteObject) {
            if (cdpRemoteObject.objectId !== undefined) {
                return { objectId: cdpRemoteObject.objectId };
            }
            if (cdpRemoteObject.unserializableValue !== undefined) {
                return { unserializableValue: cdpRemoteObject.unserializableValue };
            }
            return { value: cdpRemoteObject.value };
        }
        async stringifyObject(cdpRemoteObject) {
            const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                functionDeclaration: String((remoteObject) => String(remoteObject)),
                awaitPromise: false,
                arguments: [cdpRemoteObject],
                returnByValue: true,
                executionContextId: this.executionContextId,
            });
            return result.value;
        }
        async #flattenKeyValuePairs(mappingLocalValue) {
            const keyValueArray = await Promise.all(mappingLocalValue.map(async ([key, value]) => {
                let keyArg;
                if (typeof key === 'string') {
                    keyArg = { value: key };
                }
                else {
                    keyArg = await this.deserializeForCdp(key);
                }
                const valueArg = await this.deserializeForCdp(value);
                return [keyArg, valueArg];
            }));
            return keyValueArray.flat();
        }
        async #flattenValueList(listLocalValue) {
            return await Promise.all(listLocalValue.map((localValue) => this.deserializeForCdp(localValue)));
        }
        async #serializeCdpExceptionDetails(cdpExceptionDetails, lineOffset, resultOwnership) {
            const callFrames = cdpExceptionDetails.stackTrace?.callFrames.map((frame) => ({
                url: frame.url,
                functionName: frame.functionName,
                lineNumber: frame.lineNumber - lineOffset,
                columnNumber: frame.columnNumber,
            })) ?? [];
            const exception = cdpExceptionDetails.exception;
            return {
                exception: await this.serializeCdpObject(exception, resultOwnership),
                columnNumber: cdpExceptionDetails.columnNumber,
                lineNumber: cdpExceptionDetails.lineNumber - lineOffset,
                stackTrace: {
                    callFrames,
                },
                text: (await this.stringifyObject(exception)) || cdpExceptionDetails.text,
            };
        }
        async callFunction(functionDeclaration, awaitPromise, thisLocalValue = {
            type: 'undefined',
        }, argumentsLocalValues = [], resultOwnership = "none" , serializationOptions = {}, userActivation = false) {
            const callFunctionAndSerializeScript = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${functionDeclaration}
      ), args);
    }`;
            const thisAndArgumentsList = [
                await this.deserializeForCdp(thisLocalValue),
                ...(await Promise.all(argumentsLocalValues.map(async (argumentLocalValue) => await this.deserializeForCdp(argumentLocalValue)))),
            ];
            let cdpCallFunctionResult;
            try {
                cdpCallFunctionResult = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                    functionDeclaration: callFunctionAndSerializeScript,
                    awaitPromise,
                    arguments: thisAndArgumentsList,
                    serializationOptions: Realm.#getSerializationOptions("deep" , serializationOptions),
                    executionContextId: this.executionContextId,
                    userGesture: userActivation,
                });
            }
            catch (error) {
                if (error.code === -32e3  &&
                    [
                        'Could not find object with given id',
                        'Argument should belong to the same JavaScript world as target object',
                        'Invalid remote object id',
                    ].includes(error.message)) {
                    throw new NoSuchHandleException('Handle was not found.');
                }
                throw error;
            }
            if (cdpCallFunctionResult.exceptionDetails) {
                return await this.#getExceptionResult(cdpCallFunctionResult.exceptionDetails, 1, resultOwnership);
            }
            return {
                type: 'success',
                result: this.cdpToBidiValue(cdpCallFunctionResult, resultOwnership),
                realm: this.realmId,
            };
        }
        async deserializeForCdp(localValue) {
            if ('handle' in localValue && localValue.handle) {
                return { objectId: localValue.handle };
            }
            else if ('handle' in localValue || 'sharedId' in localValue) {
                throw new NoSuchHandleException('Handle was not found.');
            }
            switch (localValue.type) {
                case 'undefined':
                    return { unserializableValue: 'undefined' };
                case 'null':
                    return { unserializableValue: 'null' };
                case 'string':
                    return { value: localValue.value };
                case 'number':
                    if (localValue.value === 'NaN') {
                        return { unserializableValue: 'NaN' };
                    }
                    else if (localValue.value === '-0') {
                        return { unserializableValue: '-0' };
                    }
                    else if (localValue.value === 'Infinity') {
                        return { unserializableValue: 'Infinity' };
                    }
                    else if (localValue.value === '-Infinity') {
                        return { unserializableValue: '-Infinity' };
                    }
                    return {
                        value: localValue.value,
                    };
                case 'boolean':
                    return { value: Boolean(localValue.value) };
                case 'bigint':
                    return {
                        unserializableValue: `BigInt(${JSON.stringify(localValue.value)})`,
                    };
                case 'date':
                    return {
                        unserializableValue: `new Date(Date.parse(${JSON.stringify(localValue.value)}))`,
                    };
                case 'regexp':
                    return {
                        unserializableValue: `new RegExp(${JSON.stringify(localValue.value.pattern)}, ${JSON.stringify(localValue.value.flags)})`,
                    };
                case 'map': {
                    const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
                    const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                        functionDeclaration: String((...args) => {
                            const result = new Map();
                            for (let i = 0; i < args.length; i += 2) {
                                result.set(args[i], args[i + 1]);
                            }
                            return result;
                        }),
                        awaitPromise: false,
                        arguments: keyValueArray,
                        returnByValue: false,
                        executionContextId: this.executionContextId,
                    });
                    return { objectId: result.objectId };
                }
                case 'object': {
                    const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
                    const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                        functionDeclaration: String((...args) => {
                            const result = {};
                            for (let i = 0; i < args.length; i += 2) {
                                const key = args[i];
                                result[key] = args[i + 1];
                            }
                            return result;
                        }),
                        awaitPromise: false,
                        arguments: keyValueArray,
                        returnByValue: false,
                        executionContextId: this.executionContextId,
                    });
                    return { objectId: result.objectId };
                }
                case 'array': {
                    const args = await this.#flattenValueList(localValue.value);
                    const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                        functionDeclaration: String((...args) => args),
                        awaitPromise: false,
                        arguments: args,
                        returnByValue: false,
                        executionContextId: this.executionContextId,
                    });
                    return { objectId: result.objectId };
                }
                case 'set': {
                    const args = await this.#flattenValueList(localValue.value);
                    const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                        functionDeclaration: String((...args) => new Set(args)),
                        awaitPromise: false,
                        arguments: args,
                        returnByValue: false,
                        executionContextId: this.executionContextId,
                    });
                    return { objectId: result.objectId };
                }
                case 'channel': {
                    const channelProxy = new ChannelProxy(localValue.value, this.#logger);
                    const channelProxySendMessageHandle = await channelProxy.init(this, this.#eventManager);
                    return { objectId: channelProxySendMessageHandle };
                }
            }
            throw new Error(`Value ${JSON.stringify(localValue)} is not deserializable.`);
        }
        async #getExceptionResult(exceptionDetails, lineOffset, resultOwnership) {
            return {
                exceptionDetails: await this.#serializeCdpExceptionDetails(exceptionDetails, lineOffset, resultOwnership),
                realm: this.realmId,
                type: 'exception',
            };
        }
        static #getSerializationOptions(serialization, serializationOptions) {
            return {
                serialization,
                additionalParameters: Realm.#getAdditionalSerializationParameters(serializationOptions),
                ...Realm.#getMaxObjectDepth(serializationOptions),
            };
        }
        static #getAdditionalSerializationParameters(serializationOptions) {
            const additionalParameters = {};
            if (serializationOptions.maxDomDepth !== undefined) {
                additionalParameters['maxNodeDepth'] =
                    serializationOptions.maxDomDepth === null
                        ? 1000
                        : serializationOptions.maxDomDepth;
            }
            if (serializationOptions.includeShadowTree !== undefined) {
                additionalParameters['includeShadowTree'] =
                    serializationOptions.includeShadowTree;
            }
            return additionalParameters;
        }
        static #getMaxObjectDepth(serializationOptions) {
            return serializationOptions.maxObjectDepth === undefined ||
                serializationOptions.maxObjectDepth === null
                ? {}
                : { maxDepth: serializationOptions.maxObjectDepth };
        }
        async #releaseObject(handle) {
            try {
                await this.cdpClient.sendCommand('Runtime.releaseObject', {
                    objectId: handle,
                });
            }
            catch (error) {
                if (!(error.code === -32e3  &&
                    error.message === 'Invalid remote object id')) {
                    throw error;
                }
            }
        }
        async disown(handle) {
            if (this.realmStorage.knownHandlesToRealmMap.get(handle) !== this.realmId) {
                return;
            }
            await this.#releaseObject(handle);
            this.realmStorage.knownHandlesToRealmMap.delete(handle);
        }
        dispose() {
            if (!this.isHidden()) {
                this.#registerEvent({
                    type: 'event',
                    method: Script$2.EventNames.RealmDestroyed,
                    params: {
                        realm: this.realmId,
                    },
                });
            }
        }
    }

    /**
     * Copyright 2024 Google LLC.
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
    class WindowRealm extends Realm {
        #browsingContextId;
        #browsingContextStorage;
        sandbox;
        constructor(browsingContextId, browsingContextStorage, cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage, sandbox) {
            super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
            this.#browsingContextId = browsingContextId;
            this.#browsingContextStorage = browsingContextStorage;
            this.sandbox = sandbox;
            this.initialize();
        }
        #getBrowsingContextId(navigableId) {
            const maybeBrowsingContext = this.#browsingContextStorage
                .getAllContexts()
                .find((context) => context.navigableId === navigableId);
            return maybeBrowsingContext?.id ?? 'UNKNOWN';
        }
        get browsingContext() {
            return this.#browsingContextStorage.getContext(this.#browsingContextId);
        }
        isHidden() {
            return this.realmStorage.hiddenSandboxes.has(this.sandbox);
        }
        get associatedBrowsingContexts() {
            return [this.browsingContext];
        }
        get realmType() {
            return 'window';
        }
        get realmInfo() {
            return {
                ...this.baseInfo,
                type: this.realmType,
                context: this.#browsingContextId,
                sandbox: this.sandbox,
            };
        }
        get source() {
            return {
                realm: this.realmId,
                context: this.browsingContext.id,
            };
        }
        serializeForBiDi(deepSerializedValue, internalIdMap) {
            const bidiValue = deepSerializedValue.value;
            if (deepSerializedValue.type === 'node' && bidiValue !== undefined) {
                if (Object.hasOwn(bidiValue, 'backendNodeId')) {
                    let navigableId = this.browsingContext.navigableId ?? 'UNKNOWN';
                    if (Object.hasOwn(bidiValue, 'loaderId')) {
                        navigableId = bidiValue.loaderId;
                        delete bidiValue['loaderId'];
                    }
                    deepSerializedValue.sharedId =
                        getSharedId(this.#getBrowsingContextId(navigableId), navigableId, bidiValue.backendNodeId);
                    delete bidiValue['backendNodeId'];
                }
                if (Object.hasOwn(bidiValue, 'children')) {
                    for (const i in bidiValue.children) {
                        bidiValue.children[i] = this.serializeForBiDi(bidiValue.children[i], internalIdMap);
                    }
                }
                if (Object.hasOwn(bidiValue, 'shadowRoot') &&
                    bidiValue.shadowRoot !== null) {
                    bidiValue.shadowRoot = this.serializeForBiDi(bidiValue.shadowRoot, internalIdMap);
                }
                if (bidiValue.namespaceURI === '') {
                    bidiValue.namespaceURI = null;
                }
            }
            return super.serializeForBiDi(deepSerializedValue, internalIdMap);
        }
        async deserializeForCdp(localValue) {
            if ('sharedId' in localValue && localValue.sharedId) {
                const parsedSharedId = parseSharedId(localValue.sharedId);
                if (parsedSharedId === null) {
                    throw new NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
                }
                const { documentId, backendNodeId } = parsedSharedId;
                if (this.browsingContext.navigableId !== documentId) {
                    throw new NoSuchNodeException(`SharedId "${localValue.sharedId}" belongs to different document. Current document is ${this.browsingContext.navigableId}.`);
                }
                try {
                    const { object } = await this.cdpClient.sendCommand('DOM.resolveNode', {
                        backendNodeId,
                        executionContextId: this.executionContextId,
                    });
                    return { objectId: object.objectId };
                }
                catch (error) {
                    if (error.code === -32e3  &&
                        error.message === 'No node with given id found') {
                        throw new NoSuchNodeException(`SharedId "${localValue.sharedId}" was not found.`);
                    }
                    throw new UnknownErrorException(error.message, error.stack);
                }
            }
            return await super.deserializeForCdp(localValue);
        }
        async evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi) {
            await this.#browsingContextStorage
                .getContext(this.#browsingContextId)
                .targetUnblockedOrThrow();
            return await super.evaluate(expression, awaitPromise, resultOwnership, serializationOptions, userActivation, includeCommandLineApi);
        }
        async callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation) {
            await this.#browsingContextStorage
                .getContext(this.#browsingContextId)
                .targetUnblockedOrThrow();
            return await super.callFunction(functionDeclaration, awaitPromise, thisLocalValue, argumentsLocalValues, resultOwnership, serializationOptions, userActivation);
        }
    }

    /*
     *  Copyright 2024 Google LLC.
     *  Copyright (c) Microsoft Corporation.
     *
     *  Licensed under the Apache License, Version 2.0 (the "License");
     *  you may not use this file except in compliance with the License.
     *  You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     *  distributed under the License is distributed on an "AS IS" BASIS,
     *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *  See the License for the specific language governing permissions and
     *  limitations under the License.
     *
     */
    function urlMatchesAboutBlank(url) {
        if (url === '') {
            return true;
        }
        try {
            const parsedUrl = new URL(url);
            const schema = parsedUrl.protocol.replace(/:$/, '');
            return (schema.toLowerCase() === 'about' &&
                parsedUrl.pathname.toLowerCase() === 'blank' &&
                parsedUrl.username === '' &&
                parsedUrl.password === '' &&
                parsedUrl.host === '');
        }
        catch (err) {
            if (err instanceof TypeError) {
                return false;
            }
            throw err;
        }
    }

    /*
     *  Copyright 2024 Google LLC.
     *  Copyright (c) Microsoft Corporation.
     *
     *  Licensed under the Apache License, Version 2.0 (the "License");
     *  you may not use this file except in compliance with the License.
     *  You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     *  Unless required by applicable law or agreed to in writing, software
     *  distributed under the License is distributed on an "AS IS" BASIS,
     *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     *  See the License for the specific language governing permissions and
     *  limitations under the License.
     *
     */
    class NavigationResult {
        eventName;
        message;
        constructor(eventName, message) {
            this.eventName = eventName;
            this.message = message;
        }
    }
    class NavigationState {
        navigationId = uuidv4();
        #browsingContextId;
        #started = false;
        #finished = new Deferred();
        url;
        loaderId;
        #isInitial;
        #eventManager;
        committed = new Deferred();
        isFragmentNavigation;
        get finished() {
            return this.#finished;
        }
        constructor(url, browsingContextId, isInitial, eventManager) {
            this.#browsingContextId = browsingContextId;
            this.url = url;
            this.#isInitial = isInitial;
            this.#eventManager = eventManager;
        }
        navigationInfo() {
            return {
                context: this.#browsingContextId,
                navigation: this.navigationId,
                timestamp: getTimestamp(),
                url: this.url,
            };
        }
        start() {
            if (
            !this.#isInitial &&
                !this.#started &&
                !this.isFragmentNavigation) {
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: BrowsingContext$2.EventNames.NavigationStarted,
                    params: this.navigationInfo(),
                }, this.#browsingContextId);
            }
            this.#started = true;
        }
        #finish(navigationResult) {
            this.#started = true;
            if (!this.#isInitial &&
                !this.#finished.isFinished &&
                navigationResult.eventName !== "browsingContext.load" ) {
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: navigationResult.eventName,
                    params: this.navigationInfo(),
                }, this.#browsingContextId);
            }
            this.#finished.resolve(navigationResult);
        }
        frameNavigated() {
            this.committed.resolve();
            if (!this.#isInitial) {
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: BrowsingContext$2.EventNames.NavigationCommitted,
                    params: this.navigationInfo(),
                }, this.#browsingContextId);
            }
        }
        fragmentNavigated() {
            this.committed.resolve();
            this.#finish(new NavigationResult("browsingContext.fragmentNavigated" ));
        }
        load() {
            this.#finish(new NavigationResult("browsingContext.load" ));
        }
        fail(message) {
            this.#finish(new NavigationResult(this.committed.isFinished
                ? "browsingContext.navigationAborted"
                : "browsingContext.navigationFailed" , message));
        }
    }
    class NavigationTracker {
        #eventManager;
        #logger;
        #loaderIdToNavigationsMap = new Map();
        #browsingContextId;
        #lastCommittedNavigation;
        #pendingNavigation;
        #isInitialNavigation = true;
        constructor(url, browsingContextId, eventManager, logger) {
            this.#browsingContextId = browsingContextId;
            this.#eventManager = eventManager;
            this.#logger = logger;
            this.#isInitialNavigation = true;
            this.#lastCommittedNavigation = new NavigationState(url, browsingContextId, urlMatchesAboutBlank(url), this.#eventManager);
        }
        get currentNavigationId() {
            if (this.#pendingNavigation?.isFragmentNavigation === false) {
                return this.#pendingNavigation.navigationId;
            }
            return this.#lastCommittedNavigation.navigationId;
        }
        get isInitialNavigation() {
            return this.#isInitialNavigation;
        }
        get url() {
            return this.#lastCommittedNavigation.url;
        }
        createPendingNavigation(url, canBeInitialNavigation = false) {
            this.#logger?.(LogType.debug, 'createCommandNavigation');
            this.#isInitialNavigation =
                canBeInitialNavigation &&
                    this.#isInitialNavigation &&
                    urlMatchesAboutBlank(url);
            this.#pendingNavigation?.fail('navigation canceled by concurrent navigation');
            const navigation = new NavigationState(url, this.#browsingContextId, this.#isInitialNavigation, this.#eventManager);
            this.#pendingNavigation = navigation;
            return navigation;
        }
        dispose() {
            this.#pendingNavigation?.fail('navigation canceled by context disposal');
            this.#lastCommittedNavigation.fail('navigation canceled by context disposal');
        }
        onTargetInfoChanged(url) {
            this.#logger?.(LogType.debug, `onTargetInfoChanged ${url}`);
            this.#lastCommittedNavigation.url = url;
        }
        #getNavigationForFrameNavigated(url, loaderId) {
            if (this.#loaderIdToNavigationsMap.has(loaderId)) {
                return this.#loaderIdToNavigationsMap.get(loaderId);
            }
            if (this.#pendingNavigation !== undefined &&
                this.#pendingNavigation.loaderId === undefined) {
                return this.#pendingNavigation;
            }
            return this.createPendingNavigation(url, true);
        }
        frameNavigated(url, loaderId, unreachableUrl) {
            this.#logger?.(LogType.debug, `frameNavigated ${url}`);
            if (unreachableUrl !== undefined) {
                const navigation = this.#loaderIdToNavigationsMap.get(loaderId) ??
                    this.#pendingNavigation ??
                    this.createPendingNavigation(unreachableUrl, true);
                navigation.url = unreachableUrl;
                navigation.start();
                navigation.fail('the requested url is unreachable');
                return;
            }
            const navigation = this.#getNavigationForFrameNavigated(url, loaderId);
            if (navigation !== this.#lastCommittedNavigation) {
                this.#lastCommittedNavigation.fail('navigation canceled by concurrent navigation');
            }
            navigation.url = url;
            navigation.loaderId = loaderId;
            this.#loaderIdToNavigationsMap.set(loaderId, navigation);
            navigation.start();
            navigation.frameNavigated();
            this.#lastCommittedNavigation = navigation;
            if (this.#pendingNavigation === navigation) {
                this.#pendingNavigation = undefined;
            }
        }
        navigatedWithinDocument(url, navigationType) {
            this.#logger?.(LogType.debug, `navigatedWithinDocument ${url}, ${navigationType}`);
            this.#lastCommittedNavigation.url = url;
            if (navigationType !== 'fragment') {
                return;
            }
            const fragmentNavigation = this.#pendingNavigation?.isFragmentNavigation === true
                ? this.#pendingNavigation
                : new NavigationState(url, this.#browsingContextId, false, this.#eventManager);
            fragmentNavigation.fragmentNavigated();
            if (fragmentNavigation === this.#pendingNavigation) {
                this.#pendingNavigation = undefined;
            }
        }
        loadPageEvent(loaderId) {
            this.#logger?.(LogType.debug, 'loadPageEvent');
            this.#isInitialNavigation = false;
            this.#loaderIdToNavigationsMap.get(loaderId)?.load();
        }
        failNavigation(navigation, errorText) {
            this.#logger?.(LogType.debug, 'failCommandNavigation');
            navigation.fail(errorText);
        }
        navigationCommandFinished(navigation, loaderId) {
            this.#logger?.(LogType.debug, `finishCommandNavigation ${navigation.navigationId}, ${loaderId}`);
            if (loaderId !== undefined) {
                navigation.loaderId = loaderId;
                this.#loaderIdToNavigationsMap.set(loaderId, navigation);
            }
            navigation.isFragmentNavigation = loaderId === undefined;
        }
        frameStartedNavigating(url, loaderId, navigationType) {
            this.#logger?.(LogType.debug, `frameStartedNavigating ${url}, ${loaderId}`);
            if (this.#pendingNavigation &&
                this.#pendingNavigation?.loaderId !== undefined &&
                this.#pendingNavigation?.loaderId !== loaderId) {
                this.#pendingNavigation?.fail('navigation canceled by concurrent navigation');
                this.#pendingNavigation = undefined;
            }
            if (this.#loaderIdToNavigationsMap.has(loaderId)) {
                const existingNavigation = this.#loaderIdToNavigationsMap.get(loaderId);
                existingNavigation.isFragmentNavigation =
                    NavigationTracker.#isFragmentNavigation(navigationType);
                this.#pendingNavigation = existingNavigation;
                return;
            }
            const pendingNavigation = this.#pendingNavigation ?? this.createPendingNavigation(url, true);
            this.#loaderIdToNavigationsMap.set(loaderId, pendingNavigation);
            pendingNavigation.isFragmentNavigation =
                NavigationTracker.#isFragmentNavigation(navigationType);
            pendingNavigation.url = url;
            pendingNavigation.loaderId = loaderId;
            pendingNavigation.start();
        }
        static #isFragmentNavigation(navigationType) {
            return ['historySameDocument', 'sameDocument'].includes(navigationType);
        }
        networkLoadingFailed(loaderId, errorText) {
            this.#loaderIdToNavigationsMap.get(loaderId)?.fail(errorText);
        }
    }

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
    var _a$5;
    class BrowsingContextImpl {
        static LOGGER_PREFIX = `${LogType.debug}:browsingContext`;
        #children = new Set();
        #id;
        userContext;
        #hiddenSandbox = uuidv4();
        #downloadIdToUrlMap = new Map();
        #loaderId;
        #parentId = null;
        #originalOpener;
        #lifecycle = {
            DOMContentLoaded: new Deferred(),
            load: new Deferred(),
        };
        #cdpTarget;
        #defaultRealmDeferred = new Deferred();
        #browsingContextStorage;
        #eventManager;
        #logger;
        #navigationTracker;
        #realmStorage;
        #configStorage;
        #lastUserPromptType;
        constructor(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, configStorage, url, originalOpener, logger) {
            this.#cdpTarget = cdpTarget;
            this.#id = id;
            this.#parentId = parentId;
            this.userContext = userContext;
            this.#eventManager = eventManager;
            this.#browsingContextStorage = browsingContextStorage;
            this.#realmStorage = realmStorage;
            this.#configStorage = configStorage;
            this.#logger = logger;
            this.#originalOpener = originalOpener;
            this.#realmStorage.hiddenSandboxes.add(this.#hiddenSandbox);
            this.#navigationTracker = new NavigationTracker(url, id, eventManager, logger);
        }
        static create(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, configStorage, url, originalOpener, logger) {
            const context = new _a$5(id, parentId, userContext, cdpTarget, eventManager, browsingContextStorage, realmStorage, configStorage, url, originalOpener, logger);
            context.#initListeners();
            browsingContextStorage.addContext(context);
            if (!context.isTopLevelContext()) {
                context.parent.addChild(context.id);
            }
            eventManager.registerPromiseEvent(context.targetUnblockedOrThrow().then(() => {
                return {
                    kind: 'success',
                    value: {
                        type: 'event',
                        method: BrowsingContext$2.EventNames.ContextCreated,
                        params: {
                            ...context.serializeToBidiValue(),
                            url,
                        },
                    },
                };
            }, (error) => {
                return {
                    kind: 'error',
                    error,
                };
            }), context.id, BrowsingContext$2.EventNames.ContextCreated);
            return context;
        }
        get navigableId() {
            return this.#loaderId;
        }
        get navigationId() {
            return this.#navigationTracker.currentNavigationId;
        }
        dispose(emitContextDestroyed) {
            this.#navigationTracker.dispose();
            this.#realmStorage.deleteRealms({
                browsingContextId: this.id,
            });
            if (!this.isTopLevelContext()) {
                this.parent.#children.delete(this.id);
            }
            this.#failLifecycleIfNotFinished();
            if (emitContextDestroyed) {
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: BrowsingContext$2.EventNames.ContextDestroyed,
                    params: this.serializeToBidiValue(null),
                }, this.id);
            }
            this.#deleteAllChildren();
            this.#eventManager.clearBufferedEvents(this.id);
            this.#browsingContextStorage.deleteContextById(this.id);
        }
        get id() {
            return this.#id;
        }
        get parentId() {
            return this.#parentId;
        }
        set parentId(parentId) {
            if (this.#parentId !== null) {
                this.#logger?.(LogType.debugError, 'Parent context already set');
                return;
            }
            this.#parentId = parentId;
            if (!this.isTopLevelContext()) {
                this.parent.addChild(this.id);
            }
        }
        get parent() {
            if (this.parentId === null) {
                return null;
            }
            return this.#browsingContextStorage.getContext(this.parentId);
        }
        get directChildren() {
            return [...this.#children].map((id) => this.#browsingContextStorage.getContext(id));
        }
        get allChildren() {
            const children = this.directChildren;
            return children.concat(...children.map((child) => child.allChildren));
        }
        isTopLevelContext() {
            return this.#parentId === null;
        }
        get top() {
            let topContext = this;
            let parent = topContext.parent;
            while (parent) {
                topContext = parent;
                parent = topContext.parent;
            }
            return topContext;
        }
        addChild(childId) {
            this.#children.add(childId);
        }
        #deleteAllChildren(emitContextDestroyed = false) {
            this.directChildren.map((child) => child.dispose(emitContextDestroyed));
        }
        get cdpTarget() {
            return this.#cdpTarget;
        }
        updateCdpTarget(cdpTarget) {
            this.#cdpTarget = cdpTarget;
            this.#initListeners();
        }
        get url() {
            return this.#navigationTracker.url;
        }
        async lifecycleLoaded() {
            await this.#lifecycle.load;
        }
        async targetUnblockedOrThrow() {
            const result = await this.#cdpTarget.unblocked;
            if (result.kind === 'error') {
                throw result.error;
            }
        }
        async getOrCreateHiddenSandbox() {
            return await this.#getOrCreateSandboxInternal(this.#hiddenSandbox);
        }
        async getOrCreateUserSandbox(sandbox) {
            const realm = await this.#getOrCreateSandboxInternal(sandbox);
            if (realm.isHidden()) {
                throw new NoSuchFrameException(`Realm "${sandbox}" not found`);
            }
            return realm;
        }
        async #getOrCreateSandboxInternal(sandbox) {
            if (sandbox === undefined || sandbox === '') {
                return await this.#defaultRealmDeferred;
            }
            let maybeSandboxes = this.#realmStorage.findRealms({
                browsingContextId: this.id,
                sandbox,
            });
            if (maybeSandboxes.length === 0) {
                await this.#cdpTarget.cdpClient.sendCommand('Page.createIsolatedWorld', {
                    frameId: this.id,
                    worldName: sandbox,
                });
                maybeSandboxes = this.#realmStorage.findRealms({
                    browsingContextId: this.id,
                    sandbox,
                });
                assert(maybeSandboxes.length !== 0);
            }
            return maybeSandboxes[0];
        }
        serializeToBidiValue(maxDepth = 0, addParentField = true) {
            return {
                context: this.#id,
                url: this.url,
                userContext: this.userContext,
                originalOpener: this.#originalOpener ?? null,
                clientWindow: `${this.cdpTarget.windowId}`,
                children: maxDepth === null || maxDepth > 0
                    ? this.directChildren.map((c) => c.serializeToBidiValue(maxDepth === null ? maxDepth : maxDepth - 1, false))
                    : null,
                ...(addParentField ? { parent: this.#parentId } : {}),
            };
        }
        onTargetInfoChanged(params) {
            this.#navigationTracker.onTargetInfoChanged(params.targetInfo.url);
        }
        #initListeners() {
            this.#cdpTarget.cdpClient.on('Network.loadingFailed', (params) => {
                this.#navigationTracker.networkLoadingFailed(params.requestId, params.errorText);
            });
            this.#cdpTarget.cdpClient.on('Page.fileChooserOpened', (params) => {
                if (this.id !== params.frameId) {
                    return;
                }
                if (this.#loaderId === undefined) {
                    this.#logger?.(LogType.debugError, 'LoaderId should be defined when file upload is shown', params);
                    return;
                }
                const element = params.backendNodeId === undefined
                    ? undefined
                    : {
                        sharedId: getSharedId(this.id, this.#loaderId, params.backendNodeId),
                    };
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: Input$2.EventNames.FileDialogOpened,
                    params: {
                        context: this.id,
                        multiple: params.mode === 'selectMultiple',
                        element,
                    },
                }, this.id);
            });
            this.#cdpTarget.cdpClient.on('Page.frameNavigated', (params) => {
                if (this.id !== params.frame.id) {
                    return;
                }
                this.#navigationTracker.frameNavigated(params.frame.url + (params.frame.urlFragment ?? ''), params.frame.loaderId,
                params.frame.unreachableUrl);
                this.#deleteAllChildren();
                this.#documentChanged(params.frame.loaderId);
            });
            this.#cdpTarget.cdpClient.on('Page.frameStartedNavigating', (params) => {
                if (this.id !== params.frameId) {
                    return;
                }
                this.#navigationTracker.frameStartedNavigating(params.url, params.loaderId, params.navigationType);
            });
            this.#cdpTarget.cdpClient.on('Page.navigatedWithinDocument', (params) => {
                if (this.id !== params.frameId) {
                    return;
                }
                this.#navigationTracker.navigatedWithinDocument(params.url, params.navigationType);
                if (params.navigationType === 'historyApi') {
                    this.#eventManager.registerEvent({
                        type: 'event',
                        method: 'browsingContext.historyUpdated',
                        params: {
                            context: this.id,
                            timestamp: getTimestamp(),
                            url: this.#navigationTracker.url,
                        },
                    }, this.id);
                    return;
                }
            });
            this.#cdpTarget.cdpClient.on('Page.lifecycleEvent', (params) => {
                if (this.id !== params.frameId) {
                    return;
                }
                if (params.name === 'init') {
                    this.#documentChanged(params.loaderId);
                    return;
                }
                if (params.name === 'commit') {
                    this.#loaderId = params.loaderId;
                    return;
                }
                if (!this.#loaderId) {
                    this.#loaderId = params.loaderId;
                }
                if (params.loaderId !== this.#loaderId) {
                    return;
                }
                switch (params.name) {
                    case 'DOMContentLoaded':
                        if (!this.#navigationTracker.isInitialNavigation) {
                            this.#eventManager.registerEvent({
                                type: 'event',
                                method: BrowsingContext$2.EventNames.DomContentLoaded,
                                params: {
                                    context: this.id,
                                    navigation: this.#navigationTracker.currentNavigationId,
                                    timestamp: getTimestamp(),
                                    url: this.#navigationTracker.url,
                                },
                            }, this.id);
                        }
                        this.#lifecycle.DOMContentLoaded.resolve();
                        break;
                    case 'load':
                        if (!this.#navigationTracker.isInitialNavigation) {
                            this.#eventManager.registerEvent({
                                type: 'event',
                                method: BrowsingContext$2.EventNames.Load,
                                params: {
                                    context: this.id,
                                    navigation: this.#navigationTracker.currentNavigationId,
                                    timestamp: getTimestamp(),
                                    url: this.#navigationTracker.url,
                                },
                            }, this.id);
                        }
                        this.#navigationTracker.loadPageEvent(params.loaderId);
                        this.#lifecycle.load.resolve();
                        break;
                }
            });
            this.#cdpTarget.cdpClient.on('Runtime.executionContextCreated', (params) => {
                const { auxData, name, uniqueId, id } = params.context;
                if (!auxData || auxData.frameId !== this.id) {
                    return;
                }
                if (auxData.type === 'isolated' && name === '') {
                    return;
                }
                let origin;
                let sandbox;
                switch (auxData.type) {
                    case 'isolated':
                        sandbox = name;
                        if (!this.#defaultRealmDeferred.isFinished) {
                            this.#logger?.(LogType.debugError, 'Unexpectedly, isolated realm created before the default one');
                        }
                        origin = this.#defaultRealmDeferred.isFinished
                            ? this.#defaultRealmDeferred.result.origin
                            :
                                '';
                        break;
                    case 'default':
                        origin = serializeOrigin(params.context.origin);
                        break;
                    default:
                        return;
                }
                const realm = new WindowRealm(this.id, this.#browsingContextStorage, this.#cdpTarget.cdpClient, this.#eventManager, id, this.#logger, origin, uniqueId, this.#realmStorage, sandbox);
                if (auxData.isDefault) {
                    this.#defaultRealmDeferred.resolve(realm);
                    void Promise.all(this.#cdpTarget
                        .getChannels()
                        .map((channel) => channel.startListenerFromWindow(realm, this.#eventManager)));
                }
            });
            this.#cdpTarget.cdpClient.on('Runtime.executionContextDestroyed', (params) => {
                if (this.#defaultRealmDeferred.isFinished &&
                    this.#defaultRealmDeferred.result.executionContextId ===
                        params.executionContextId) {
                    this.#defaultRealmDeferred = new Deferred();
                }
                this.#realmStorage.deleteRealms({
                    cdpSessionId: this.#cdpTarget.cdpSessionId,
                    executionContextId: params.executionContextId,
                });
            });
            this.#cdpTarget.cdpClient.on('Runtime.executionContextsCleared', () => {
                if (!this.#defaultRealmDeferred.isFinished) {
                    this.#defaultRealmDeferred.reject(new UnknownErrorException('execution contexts cleared'));
                }
                this.#defaultRealmDeferred = new Deferred();
                this.#realmStorage.deleteRealms({
                    cdpSessionId: this.#cdpTarget.cdpSessionId,
                });
            });
            this.#cdpTarget.cdpClient.on('Page.javascriptDialogClosed', (params) => {
                if (params.frameId && this.id !== params.frameId) {
                    return;
                }
                if (!params.frameId &&
                    this.#parentId &&
                    this.#cdpTarget.cdpClient !==
                        this.#browsingContextStorage.getContext(this.#parentId)?.cdpTarget
                            .cdpClient) {
                    return;
                }
                const accepted = params.result;
                if (this.#lastUserPromptType === undefined) {
                    this.#logger?.(LogType.debugError, 'Unexpectedly no opening prompt event before closing one');
                }
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: BrowsingContext$2.EventNames.UserPromptClosed,
                    params: {
                        context: this.id,
                        accepted,
                        type: this.#lastUserPromptType ??
                            'UNKNOWN',
                        userText: accepted && params.userInput ? params.userInput : undefined,
                    },
                }, this.id);
                this.#lastUserPromptType = undefined;
            });
            this.#cdpTarget.cdpClient.on('Page.javascriptDialogOpening', (params) => {
                if (params.frameId && this.id !== params.frameId) {
                    return;
                }
                if (!params.frameId &&
                    this.#parentId &&
                    this.#cdpTarget.cdpClient !==
                        this.#browsingContextStorage.getContext(this.#parentId)?.cdpTarget
                            .cdpClient) {
                    return;
                }
                const promptType = _a$5.#getPromptType(params.type);
                this.#lastUserPromptType = promptType;
                const promptHandler = this.#getPromptHandler(promptType);
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: BrowsingContext$2.EventNames.UserPromptOpened,
                    params: {
                        context: this.id,
                        handler: promptHandler,
                        type: promptType,
                        message: params.message,
                        ...(params.type === 'prompt'
                            ? { defaultValue: params.defaultPrompt }
                            : {}),
                    },
                }, this.id);
                switch (promptHandler) {
                    case "accept" :
                        void this.handleUserPrompt(true);
                        break;
                    case "dismiss" :
                        void this.handleUserPrompt(false);
                        break;
                }
            });
            this.#cdpTarget.browserCdpClient.on('Browser.downloadWillBegin', (params) => {
                if (this.id !== params.frameId) {
                    return;
                }
                this.#downloadIdToUrlMap.set(params.guid, params.url);
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: BrowsingContext$2.EventNames.DownloadWillBegin,
                    params: {
                        context: this.id,
                        suggestedFilename: params.suggestedFilename,
                        navigation: params.guid,
                        timestamp: getTimestamp(),
                        url: params.url,
                    },
                }, this.id);
            });
            this.#cdpTarget.browserCdpClient.on('Browser.downloadProgress', (params) => {
                if (!this.#downloadIdToUrlMap.has(params.guid)) {
                    return;
                }
                if (params.state === 'inProgress') {
                    return;
                }
                const url = this.#downloadIdToUrlMap.get(params.guid);
                switch (params.state) {
                    case 'canceled':
                        this.#eventManager.registerEvent({
                            type: 'event',
                            method: BrowsingContext$2.EventNames.DownloadEnd,
                            params: {
                                status: 'canceled',
                                context: this.id,
                                navigation: params.guid,
                                timestamp: getTimestamp(),
                                url,
                            },
                        }, this.id);
                        break;
                    case 'completed':
                        this.#eventManager.registerEvent({
                            type: 'event',
                            method: BrowsingContext$2.EventNames.DownloadEnd,
                            params: {
                                filepath: params.filePath ?? null,
                                status: 'complete',
                                context: this.id,
                                navigation: params.guid,
                                timestamp: getTimestamp(),
                                url,
                            },
                        }, this.id);
                        break;
                    default:
                        throw new UnknownErrorException(`Unknown download state: ${params.state}`);
                }
            });
        }
        static #getPromptType(cdpType) {
            switch (cdpType) {
                case 'alert':
                    return "alert" ;
                case 'beforeunload':
                    return "beforeunload" ;
                case 'confirm':
                    return "confirm" ;
                case 'prompt':
                    return "prompt" ;
            }
        }
        #getPromptHandler(promptType) {
            const defaultPromptHandler = "dismiss" ;
            const contextConfig = this.#configStorage.getActiveConfig(this.top.id, this.userContext);
            switch (promptType) {
                case "alert" :
                    return (contextConfig.userPromptHandler?.alert ??
                        contextConfig.userPromptHandler?.default ??
                        defaultPromptHandler);
                case "beforeunload" :
                    return (contextConfig.userPromptHandler?.beforeUnload ??
                        contextConfig.userPromptHandler?.default ??
                        "accept" );
                case "confirm" :
                    return (contextConfig.userPromptHandler?.confirm ??
                        contextConfig.userPromptHandler?.default ??
                        defaultPromptHandler);
                case "prompt" :
                    return (contextConfig.userPromptHandler?.prompt ??
                        contextConfig.userPromptHandler?.default ??
                        defaultPromptHandler);
            }
        }
        #documentChanged(loaderId) {
            if (loaderId === undefined || this.#loaderId === loaderId) {
                return;
            }
            this.#resetLifecycleIfFinished();
            this.#loaderId = loaderId;
            this.#deleteAllChildren(true);
        }
        #resetLifecycleIfFinished() {
            if (this.#lifecycle.DOMContentLoaded.isFinished) {
                this.#lifecycle.DOMContentLoaded = new Deferred();
            }
            else {
                this.#logger?.(_a$5.LOGGER_PREFIX, 'Document changed (DOMContentLoaded)');
            }
            if (this.#lifecycle.load.isFinished) {
                this.#lifecycle.load = new Deferred();
            }
            else {
                this.#logger?.(_a$5.LOGGER_PREFIX, 'Document changed (load)');
            }
        }
        #failLifecycleIfNotFinished() {
            if (!this.#lifecycle.DOMContentLoaded.isFinished) {
                this.#lifecycle.DOMContentLoaded.reject(new UnknownErrorException('navigation canceled'));
            }
            if (!this.#lifecycle.load.isFinished) {
                this.#lifecycle.load.reject(new UnknownErrorException('navigation canceled'));
            }
        }
        async navigate(url, wait) {
            try {
                new URL(url);
            }
            catch {
                throw new InvalidArgumentException(`Invalid URL: ${url}`);
            }
            const navigationState = this.#navigationTracker.createPendingNavigation(url);
            const cdpNavigatePromise = (async () => {
                const cdpNavigateResult = await this.#cdpTarget.cdpClient.sendCommand('Page.navigate', {
                    url,
                    frameId: this.id,
                });
                if (cdpNavigateResult.errorText) {
                    this.#navigationTracker.failNavigation(navigationState, cdpNavigateResult.errorText);
                    throw new UnknownErrorException(cdpNavigateResult.errorText);
                }
                this.#navigationTracker.navigationCommandFinished(navigationState, cdpNavigateResult.loaderId);
                this.#documentChanged(cdpNavigateResult.loaderId);
            })();
            const result = await Promise.race([
                this.#waitNavigation(wait, cdpNavigatePromise, navigationState),
                navigationState.finished,
            ]);
            if (result instanceof NavigationResult) {
                if (
                result.eventName === "browsingContext.navigationAborted"  ||
                    result.eventName === "browsingContext.navigationFailed" ) {
                    throw new UnknownErrorException(result.message ?? 'unknown exception');
                }
            }
            return {
                navigation: navigationState.navigationId,
                url: navigationState.url,
            };
        }
        async #waitNavigation(wait, cdpCommandPromise, navigationState) {
            await Promise.all([navigationState.committed, cdpCommandPromise]);
            if (wait === "none" ) {
                return;
            }
            if (navigationState.isFragmentNavigation === true) {
                await navigationState.finished;
                return;
            }
            if (wait === "interactive" ) {
                await this.#lifecycle.DOMContentLoaded;
                return;
            }
            if (wait === "complete" ) {
                await this.#lifecycle.load;
                return;
            }
            throw new InvalidArgumentException(`Wait condition ${wait} is not supported`);
        }
        async reload(ignoreCache, wait) {
            await this.targetUnblockedOrThrow();
            this.#resetLifecycleIfFinished();
            const navigationState = this.#navigationTracker.createPendingNavigation(this.#navigationTracker.url);
            const cdpReloadPromise = this.#cdpTarget.cdpClient.sendCommand('Page.reload', {
                ignoreCache,
            });
            const result = await Promise.race([
                this.#waitNavigation(wait, cdpReloadPromise, navigationState),
                navigationState.finished,
            ]);
            if (result instanceof NavigationResult) {
                if (result.eventName === "browsingContext.navigationAborted"  ||
                    result.eventName === "browsingContext.navigationFailed" ) {
                    throw new UnknownErrorException(result.message ?? 'unknown exception');
                }
            }
            return {
                navigation: navigationState.navigationId,
                url: navigationState.url,
            };
        }
        async setViewport(viewport, devicePixelRatio, screenOrientation) {
            const config = this.#configStorage.getActiveConfig(this.id, this.userContext);
            await this.cdpTarget.setDeviceMetricsOverride(viewport, devicePixelRatio, screenOrientation, config.screenArea ?? null, config.scrollbarType ?? null);
        }
        async handleUserPrompt(accept, userText) {
            await this.top.#cdpTarget.cdpClient.sendCommand('Page.handleJavaScriptDialog', {
                accept: accept ?? true,
                promptText: userText,
            });
        }
        async activate() {
            await this.#cdpTarget.cdpClient.sendCommand('Page.bringToFront');
        }
        async captureScreenshot(params) {
            if (!this.isTopLevelContext()) {
                throw new UnsupportedOperationException(`Non-top-level 'context' (${params.context}) is currently not supported`);
            }
            const formatParameters = getImageFormatParameters(params);
            let captureBeyondViewport = false;
            let script;
            params.origin ??= 'viewport';
            switch (params.origin) {
                case 'document': {
                    script = String(() => {
                        const element = document.documentElement;
                        return {
                            x: 0,
                            y: 0,
                            width: element.scrollWidth,
                            height: element.scrollHeight,
                        };
                    });
                    captureBeyondViewport = true;
                    break;
                }
                case 'viewport': {
                    script = String(() => {
                        const viewport = window.visualViewport;
                        return {
                            x: viewport.pageLeft,
                            y: viewport.pageTop,
                            width: viewport.width,
                            height: viewport.height,
                        };
                    });
                    break;
                }
            }
            const hiddenSandboxRealm = await this.getOrCreateHiddenSandbox();
            const originResult = await hiddenSandboxRealm.callFunction(script, false);
            assert(originResult.type === 'success');
            const origin = deserializeDOMRect(originResult.result);
            assert(origin);
            let rect = origin;
            if (params.clip) {
                const clip = params.clip;
                if (params.origin === 'viewport' && clip.type === 'box') {
                    clip.x += origin.x;
                    clip.y += origin.y;
                }
                rect = getIntersectionRect(await this.#parseRect(clip), origin);
            }
            if (rect.width === 0 || rect.height === 0) {
                throw new UnableToCaptureScreenException(`Unable to capture screenshot with zero dimensions: width=${rect.width}, height=${rect.height}`);
            }
            return await this.#cdpTarget.cdpClient.sendCommand('Page.captureScreenshot', {
                clip: { ...rect, scale: 1.0 },
                ...formatParameters,
                captureBeyondViewport,
            });
        }
        async print(params) {
            if (!this.isTopLevelContext()) {
                throw new UnsupportedOperationException('Printing of non-top level contexts is not supported');
            }
            const cdpParams = {};
            if (params.background !== undefined) {
                cdpParams.printBackground = params.background;
            }
            if (params.margin?.bottom !== undefined) {
                cdpParams.marginBottom = inchesFromCm(params.margin.bottom);
            }
            if (params.margin?.left !== undefined) {
                cdpParams.marginLeft = inchesFromCm(params.margin.left);
            }
            if (params.margin?.right !== undefined) {
                cdpParams.marginRight = inchesFromCm(params.margin.right);
            }
            if (params.margin?.top !== undefined) {
                cdpParams.marginTop = inchesFromCm(params.margin.top);
            }
            if (params.orientation !== undefined) {
                cdpParams.landscape = params.orientation === 'landscape';
            }
            if (params.page?.height !== undefined) {
                cdpParams.paperHeight = inchesFromCm(params.page.height);
            }
            if (params.page?.width !== undefined) {
                cdpParams.paperWidth = inchesFromCm(params.page.width);
            }
            if (params.pageRanges !== undefined) {
                for (const range of params.pageRanges) {
                    if (typeof range === 'number') {
                        continue;
                    }
                    const rangeParts = range.split('-');
                    if (rangeParts.length < 1 || rangeParts.length > 2) {
                        throw new InvalidArgumentException(`Invalid page range: ${range} is not a valid integer range.`);
                    }
                    if (rangeParts.length === 1) {
                        void parseInteger(rangeParts[0] ?? '');
                        continue;
                    }
                    let lowerBound;
                    let upperBound;
                    const [rangeLowerPart = '', rangeUpperPart = ''] = rangeParts;
                    if (rangeLowerPart === '') {
                        lowerBound = 1;
                    }
                    else {
                        lowerBound = parseInteger(rangeLowerPart);
                    }
                    if (rangeUpperPart === '') {
                        upperBound = Number.MAX_SAFE_INTEGER;
                    }
                    else {
                        upperBound = parseInteger(rangeUpperPart);
                    }
                    if (lowerBound > upperBound) {
                        throw new InvalidArgumentException(`Invalid page range: ${rangeLowerPart} > ${rangeUpperPart}`);
                    }
                }
                cdpParams.pageRanges = params.pageRanges.join(',');
            }
            if (params.scale !== undefined) {
                cdpParams.scale = params.scale;
            }
            if (params.shrinkToFit !== undefined) {
                cdpParams.preferCSSPageSize = !params.shrinkToFit;
            }
            try {
                const result = await this.#cdpTarget.cdpClient.sendCommand('Page.printToPDF', cdpParams);
                return {
                    data: result.data,
                };
            }
            catch (error) {
                if (error.message ===
                    'invalid print parameters: content area is empty') {
                    throw new UnsupportedOperationException(error.message);
                }
                throw error;
            }
        }
        async #parseRect(clip) {
            switch (clip.type) {
                case 'box':
                    return { x: clip.x, y: clip.y, width: clip.width, height: clip.height };
                case 'element': {
                    const hiddenSandboxRealm = await this.getOrCreateHiddenSandbox();
                    const result = await hiddenSandboxRealm.callFunction(String((element) => {
                        return element instanceof Element;
                    }), false, { type: 'undefined' }, [clip.element]);
                    if (result.type === 'exception') {
                        throw new NoSuchElementException(`Element '${clip.element.sharedId}' was not found`);
                    }
                    assert(result.result.type === 'boolean');
                    if (!result.result.value) {
                        throw new NoSuchElementException(`Node '${clip.element.sharedId}' is not an Element`);
                    }
                    {
                        const result = await hiddenSandboxRealm.callFunction(String((element) => {
                            const rect = element.getBoundingClientRect();
                            return {
                                x: rect.x,
                                y: rect.y,
                                height: rect.height,
                                width: rect.width,
                            };
                        }), false, { type: 'undefined' }, [clip.element]);
                        assert(result.type === 'success');
                        const rect = deserializeDOMRect(result.result);
                        if (!rect) {
                            throw new UnableToCaptureScreenException(`Could not get bounding box for Element '${clip.element.sharedId}'`);
                        }
                        return rect;
                    }
                }
            }
        }
        async close() {
            await this.#cdpTarget.cdpClient.sendCommand('Page.close');
        }
        async traverseHistory(delta) {
            if (delta === 0) {
                return;
            }
            const history = await this.#cdpTarget.cdpClient.sendCommand('Page.getNavigationHistory');
            const entry = history.entries[history.currentIndex + delta];
            if (!entry) {
                throw new NoSuchHistoryEntryException(`No history entry at delta ${delta}`);
            }
            await this.#cdpTarget.cdpClient.sendCommand('Page.navigateToHistoryEntry', {
                entryId: entry.id,
            });
        }
        async toggleModulesIfNeeded() {
            await Promise.all([
                this.#cdpTarget.toggleNetworkIfNeeded(),
                this.#cdpTarget.toggleDeviceAccessIfNeeded(),
                this.#cdpTarget.togglePreloadIfNeeded(),
            ]);
        }
        async locateNodes(params) {
            return await this.#locateNodesByLocator(await this.#defaultRealmDeferred, params.locator, params.startNodes ?? [], params.maxNodeCount, params.serializationOptions);
        }
        #getLocatorDelegate(locator, maxNodeCount, startNodes) {
            switch (locator.type) {
                case 'context':
                case 'accessibility':
                    throw new Error('Unreachable');
                case 'css':
                    return {
                        functionDeclaration: String((cssSelector, maxNodeCount, ...startNodes) => {
                            const locateNodesUsingCss = (element) => {
                                if (!(element instanceof HTMLElement ||
                                    element instanceof Document ||
                                    element instanceof DocumentFragment ||
                                    element instanceof SVGElement)) {
                                    throw new Error('startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment');
                                }
                                return [...element.querySelectorAll(cssSelector)];
                            };
                            startNodes = startNodes.length > 0 ? startNodes : [document];
                            const returnedNodes = startNodes
                                .map((startNode) =>
                            locateNodesUsingCss(startNode))
                                .flat(1);
                            return maxNodeCount === 0
                                ? returnedNodes
                                : returnedNodes.slice(0, maxNodeCount);
                        }),
                        argumentsLocalValues: [
                            { type: 'string', value: locator.value },
                            { type: 'number', value: maxNodeCount ?? 0 },
                            ...startNodes,
                        ],
                    };
                case 'xpath':
                    return {
                        functionDeclaration: String((xPathSelector, maxNodeCount, ...startNodes) => {
                            const evaluator = new XPathEvaluator();
                            const expression = evaluator.createExpression(xPathSelector);
                            const locateNodesUsingXpath = (element) => {
                                const xPathResult = expression.evaluate(element, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE);
                                const returnedNodes = [];
                                for (let i = 0; i < xPathResult.snapshotLength; i++) {
                                    returnedNodes.push(xPathResult.snapshotItem(i));
                                }
                                return returnedNodes;
                            };
                            startNodes = startNodes.length > 0 ? startNodes : [document];
                            const returnedNodes = startNodes
                                .map((startNode) =>
                            locateNodesUsingXpath(startNode))
                                .flat(1);
                            return maxNodeCount === 0
                                ? returnedNodes
                                : returnedNodes.slice(0, maxNodeCount);
                        }),
                        argumentsLocalValues: [
                            { type: 'string', value: locator.value },
                            { type: 'number', value: maxNodeCount ?? 0 },
                            ...startNodes,
                        ],
                    };
                case 'innerText':
                    if (locator.value === '') {
                        throw new InvalidSelectorException('innerText locator cannot be empty');
                    }
                    return {
                        functionDeclaration: String((innerTextSelector, fullMatch, ignoreCase, maxNodeCount, maxDepth, ...startNodes) => {
                            const searchText = ignoreCase
                                ? innerTextSelector.toUpperCase()
                                : innerTextSelector;
                            const locateNodesUsingInnerText = (node, currentMaxDepth) => {
                                const returnedNodes = [];
                                if (node instanceof DocumentFragment ||
                                    node instanceof Document) {
                                    const children = [...node.children];
                                    children.forEach((child) =>
                                    returnedNodes.push(...locateNodesUsingInnerText(child, currentMaxDepth)));
                                    return returnedNodes;
                                }
                                if (!(node instanceof HTMLElement)) {
                                    return [];
                                }
                                const element = node;
                                const nodeInnerText = ignoreCase
                                    ? element.innerText?.toUpperCase()
                                    : element.innerText;
                                if (!nodeInnerText.includes(searchText)) {
                                    return [];
                                }
                                const childNodes = [];
                                for (const child of element.children) {
                                    if (child instanceof HTMLElement) {
                                        childNodes.push(child);
                                    }
                                }
                                if (childNodes.length === 0) {
                                    if (fullMatch && nodeInnerText === searchText) {
                                        returnedNodes.push(element);
                                    }
                                    else {
                                        if (!fullMatch) {
                                            returnedNodes.push(element);
                                        }
                                    }
                                }
                                else {
                                    const childNodeMatches =
                                    currentMaxDepth <= 0
                                        ? []
                                        : childNodes
                                            .map((child) => locateNodesUsingInnerText(child, currentMaxDepth - 1))
                                            .flat(1);
                                    if (childNodeMatches.length === 0) {
                                        if (!fullMatch || nodeInnerText === searchText) {
                                            returnedNodes.push(element);
                                        }
                                    }
                                    else {
                                        returnedNodes.push(...childNodeMatches);
                                    }
                                }
                                return returnedNodes;
                            };
                            startNodes = startNodes.length > 0 ? startNodes : [document];
                            const returnedNodes = startNodes
                                .map((startNode) =>
                            locateNodesUsingInnerText(startNode, maxDepth))
                                .flat(1);
                            return maxNodeCount === 0
                                ? returnedNodes
                                : returnedNodes.slice(0, maxNodeCount);
                        }),
                        argumentsLocalValues: [
                            { type: 'string', value: locator.value },
                            { type: 'boolean', value: locator.matchType !== 'partial' },
                            { type: 'boolean', value: locator.ignoreCase === true },
                            { type: 'number', value: maxNodeCount ?? 0 },
                            { type: 'number', value: locator.maxDepth ?? 1000 },
                            ...startNodes,
                        ],
                    };
            }
        }
        async #locateNodesByLocator(realm, locator, startNodes, maxNodeCount, serializationOptions) {
            if (locator.type === 'context') {
                return await this.#locateNodesByContextLocator(locator, startNodes, realm, serializationOptions);
            }
            if (locator.type === 'accessibility') {
                return await this.#locateNodesByAccessibility(locator, startNodes, maxNodeCount, realm);
            }
            const locatorDelegate = this.#getLocatorDelegate(locator, maxNodeCount, startNodes);
            serializationOptions = {
                ...serializationOptions,
                maxObjectDepth: 1,
            };
            const locatorResult = await realm.callFunction(locatorDelegate.functionDeclaration, false, { type: 'undefined' }, locatorDelegate.argumentsLocalValues, "none" , serializationOptions);
            if (locatorResult.type !== 'success') {
                this.#logger?.(_a$5.LOGGER_PREFIX, 'Failed locateNodesByLocator', locatorResult);
                if (
                locatorResult.exceptionDetails.text?.endsWith('is not a valid selector.') ||
                    locatorResult.exceptionDetails.text?.endsWith('is not a valid XPath expression.')) {
                    throw new InvalidSelectorException(`Not valid selector ${typeof locator.value === 'string' ? locator.value : JSON.stringify(locator.value)}`);
                }
                if (locatorResult.exceptionDetails.text ===
                    'Error: startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment') {
                    throw new InvalidArgumentException('startNodes in css selector should be HTMLElement, SVGElement or Document or DocumentFragment');
                }
                throw new UnknownErrorException(`Unexpected error in selector script: ${locatorResult.exceptionDetails.text}`);
            }
            if (locatorResult.result.type !== 'array') {
                throw new UnknownErrorException(`Unexpected selector script result type: ${locatorResult.result.type}`);
            }
            const nodes = locatorResult.result.value.map((value) => {
                if (value.type !== 'node') {
                    throw new UnknownErrorException(`Unexpected selector script result element: ${value.type}`);
                }
                return value;
            });
            return { nodes };
        }
        async #locateNodesByContextLocator(locator, startNodes, realm, serializationOptions) {
            if (startNodes.length !== 0) {
                throw new InvalidArgumentException('Start nodes are not supported');
            }
            const contextId = locator.value.context;
            if (!contextId) {
                throw new InvalidSelectorException('Invalid context');
            }
            const context = this.#browsingContextStorage.getContext(contextId);
            const parent = context.parent;
            if (!parent) {
                throw new InvalidArgumentException('This context has no container');
            }
            try {
                const { backendNodeId } = await parent.#cdpTarget.cdpClient.sendCommand('DOM.getFrameOwner', {
                    frameId: contextId,
                });
                const { object } = await parent.#cdpTarget.cdpClient.sendCommand('DOM.resolveNode', {
                    backendNodeId,
                });
                const locatorResult = await realm.callFunction(`function () { return this; }`, false, { handle: object.objectId }, [], "none" , serializationOptions);
                if (locatorResult.type === 'exception') {
                    throw new Error('Unknown exception');
                }
                return { nodes: [locatorResult.result] };
            }
            catch {
                throw new InvalidArgumentException('Context does not exist');
            }
        }
        async #locateNodesByAccessibility(locator, startNodes, maxNodeCount, realm) {
            if (!locator.value.name && !locator.value.role) {
                throw new InvalidSelectorException('Either name or role has to be specified');
            }
            await this.#cdpTarget.cdpClient.sendCommand('Accessibility.enable');
            const startBackendNodeIds = [];
            if (startNodes.length === 0) {
                const { root: documentRoot } = await this.#cdpTarget.cdpClient.sendCommand('DOM.getDocument');
                startBackendNodeIds.push(documentRoot.backendNodeId);
            }
            else {
                for (const node of startNodes) {
                    if (node.sharedId) {
                        const parsed = parseSharedId(node.sharedId);
                        if (!parsed) {
                            throw new NoSuchNodeException(`Invalid sharedId: ${node.sharedId}`);
                        }
                        startBackendNodeIds.push(parsed.backendNodeId);
                    }
                    else {
                        if (node.handle) {
                            const { nodeId } = await this.#cdpTarget.cdpClient.sendCommand('DOM.requestNode', {
                                objectId: node.handle,
                            });
                            const { node: describedNode } = await this.#cdpTarget.cdpClient.sendCommand('DOM.describeNode', {
                                nodeId,
                            });
                            startBackendNodeIds.push(describedNode.backendNodeId);
                        }
                        else {
                            throw new NoSuchNodeException('Start node must have sharedId or handle');
                        }
                    }
                }
            }
            const matchedBackendNodeIds = new Set();
            for (const backendNodeId of startBackendNodeIds) {
                const { nodes } = await this.#cdpTarget.cdpClient.sendCommand('Accessibility.queryAXTree', {
                    backendNodeId,
                    accessibleName: locator.value.name,
                    role: locator.value.role,
                });
                for (const node of nodes) {
                    if (node.backendDOMNodeId && node.role?.type === 'role') {
                        matchedBackendNodeIds.add(node.backendDOMNodeId);
                        if (maxNodeCount !== undefined &&
                            maxNodeCount > 0 &&
                            matchedBackendNodeIds.size >= maxNodeCount) {
                            break;
                        }
                    }
                }
            }
            const resultNodes = await Promise.all(Array.from(matchedBackendNodeIds).map(async (backendNodeId) => {
                const { object } = await this.#cdpTarget.cdpClient.sendCommand('DOM.resolveNode', {
                    backendNodeId,
                });
                return await realm.serializeCdpObject(object, "none" );
            }));
            return {
                nodes: resultNodes.filter((result) => result.type === 'node'),
            };
        }
        #getAllRelatedCdpTargets() {
            const targets = new Set();
            targets.add(this.cdpTarget);
            this.allChildren.forEach((c) => targets.add(c.cdpTarget));
            return Array.from(targets);
        }
        async setTimezoneOverride(timezone) {
            await Promise.all(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setTimezoneOverride(timezone)));
        }
        async setLocaleOverride(locale) {
            await Promise.all(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setLocaleOverride(locale)));
        }
        async setGeolocationOverride(geolocation) {
            await Promise.all(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setGeolocationOverride(geolocation)));
        }
        async setScriptingEnabled(scriptingEnabled) {
            await Promise.all(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setScriptingEnabled(scriptingEnabled)));
        }
        async setUserAgentAndAcceptLanguage(userAgent, acceptLanguage, clientHints) {
            await Promise.all(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setUserAgentAndAcceptLanguage(userAgent, acceptLanguage, clientHints)));
        }
        async setEmulatedNetworkConditions(networkConditions) {
            await Promise.all(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setEmulatedNetworkConditions(networkConditions)));
        }
        async setTouchOverride(maxTouchPoints) {
            await Promise.allSettled(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setTouchOverride(maxTouchPoints)));
        }
        async setExtraHeaders(cdpExtraHeaders) {
            await Promise.all(this.#getAllRelatedCdpTargets().map(async (cdpTarget) => await cdpTarget.setExtraHeaders(cdpExtraHeaders)));
        }
        async setScrollbarTypeOverride(scrollbarType) {
            const config = this.#configStorage.getActiveConfig(this.id, this.userContext);
            await this.cdpTarget.setDeviceMetricsOverride(config.viewport ?? null, config.devicePixelRatio ?? null, config.screenOrientation ?? null, config.screenArea ?? null, scrollbarType);
        }
    }
    _a$5 = BrowsingContextImpl;
    function serializeOrigin(origin) {
        if (['://', ''].includes(origin)) {
            origin = 'null';
        }
        return origin;
    }
    function getImageFormatParameters(params) {
        const { quality, type } = params.format ?? {
            type: 'image/png',
        };
        switch (type) {
            case 'image/png': {
                return { format: 'png' };
            }
            case 'image/jpeg': {
                return {
                    format: 'jpeg',
                    ...(quality === undefined ? {} : { quality: Math.round(quality * 100) }),
                };
            }
            case 'image/webp': {
                return {
                    format: 'webp',
                    ...(quality === undefined ? {} : { quality: Math.round(quality * 100) }),
                };
            }
        }
        throw new InvalidArgumentException(`Image format '${type}' is not a supported format`);
    }
    function deserializeDOMRect(result) {
        if (result.type !== 'object' || result.value === undefined) {
            return;
        }
        const x = result.value.find(([key]) => {
            return key === 'x';
        })?.[1];
        const y = result.value.find(([key]) => {
            return key === 'y';
        })?.[1];
        const height = result.value.find(([key]) => {
            return key === 'height';
        })?.[1];
        const width = result.value.find(([key]) => {
            return key === 'width';
        })?.[1];
        if (x?.type !== 'number' ||
            y?.type !== 'number' ||
            height?.type !== 'number' ||
            width?.type !== 'number') {
            return;
        }
        return {
            x: x.value,
            y: y.value,
            width: width.value,
            height: height.value,
        };
    }
    function normalizeRect(box) {
        return {
            ...(box.width < 0
                ? {
                    x: box.x + box.width,
                    width: -box.width,
                }
                : {
                    x: box.x,
                    width: box.width,
                }),
            ...(box.height < 0
                ? {
                    y: box.y + box.height,
                    height: -box.height,
                }
                : {
                    y: box.y,
                    height: box.height,
                }),
        };
    }
    function getIntersectionRect(first, second) {
        first = normalizeRect(first);
        second = normalizeRect(second);
        const x = Math.max(first.x, second.x);
        const y = Math.max(first.y, second.y);
        return {
            x,
            y,
            width: Math.max(Math.min(first.x + first.width, second.x + second.width) - x, 0),
            height: Math.max(Math.min(first.y + first.height, second.y + second.height) - y, 0),
        };
    }
    function parseInteger(value) {
        value = value.trim();
        if (!/^[0-9]+$/.test(value)) {
            throw new InvalidArgumentException(`Invalid integer: ${value}`);
        }
        return parseInt(value);
    }

    /**
     * Copyright 2024 Google LLC.
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
    class WorkerRealm extends Realm {
        #realmType;
        #ownerRealms;
        constructor(cdpClient, eventManager, executionContextId, logger, origin, ownerRealms, realmId, realmStorage, realmType) {
            super(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage);
            this.#ownerRealms = ownerRealms;
            this.#realmType = realmType;
            this.initialize();
        }
        get associatedBrowsingContexts() {
            return this.#ownerRealms.flatMap((realm) => realm.associatedBrowsingContexts);
        }
        get realmType() {
            return this.#realmType;
        }
        get source() {
            return {
                realm: this.realmId,
                context: this.associatedBrowsingContexts[0]?.id,
            };
        }
        get realmInfo() {
            const owners = this.#ownerRealms.map((realm) => realm.realmId);
            const { realmType } = this;
            switch (realmType) {
                case 'dedicated-worker': {
                    const owner = owners[0];
                    if (owner === undefined || owners.length !== 1) {
                        throw new Error('Dedicated worker must have exactly one owner');
                    }
                    return {
                        ...this.baseInfo,
                        type: realmType,
                        owners: [owner],
                    };
                }
                case 'service-worker':
                case 'shared-worker': {
                    return {
                        ...this.baseInfo,
                        type: realmType,
                    };
                }
            }
        }
    }

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
    const specifiers = ['%s', '%d', '%i', '%f', '%o', '%O', '%c'];
    function isFormatSpecifier(str) {
        return specifiers.some((spec) => str.includes(spec));
    }
    function logMessageFormatter(args) {
        let output = '';
        const argFormat = args[0].value.toString();
        const argValues = args.slice(1, undefined);
        const tokens = argFormat.split(new RegExp(specifiers.map((spec) => `(${spec})`).join('|'), 'g'));
        for (const token of tokens) {
            if (token === undefined || token === '') {
                continue;
            }
            if (isFormatSpecifier(token)) {
                const arg = argValues.shift();
                assert(arg, `Less value is provided: "${getRemoteValuesText(args, false)}"`);
                if (token === '%s') {
                    output += stringFromArg(arg);
                }
                else if (token === '%d' || token === '%i') {
                    if (arg.type === 'bigint' ||
                        arg.type === 'number' ||
                        arg.type === 'string') {
                        output += parseInt(arg.value.toString(), 10);
                    }
                    else {
                        output += 'NaN';
                    }
                }
                else if (token === '%f') {
                    if (arg.type === 'bigint' ||
                        arg.type === 'number' ||
                        arg.type === 'string') {
                        output += parseFloat(arg.value.toString());
                    }
                    else {
                        output += 'NaN';
                    }
                }
                else {
                    output += toJson(arg);
                }
            }
            else {
                output += token;
            }
        }
        if (argValues.length > 0) {
            throw new Error(`More value is provided: "${getRemoteValuesText(args, false)}"`);
        }
        return output;
    }
    function toJson(arg) {
        if (arg.type !== 'array' &&
            arg.type !== 'bigint' &&
            arg.type !== 'date' &&
            arg.type !== 'number' &&
            arg.type !== 'object' &&
            arg.type !== 'string') {
            return stringFromArg(arg);
        }
        if (arg.type === 'bigint') {
            return `${arg.value.toString()}n`;
        }
        if (arg.type === 'number') {
            return arg.value.toString();
        }
        if (['date', 'string'].includes(arg.type)) {
            return JSON.stringify(arg.value);
        }
        if (arg.type === 'object') {
            return `{${arg.value
            .map((pair) => {
            return `${JSON.stringify(pair[0])}:${toJson(pair[1])}`;
        })
            .join(',')}}`;
        }
        if (arg.type === 'array') {
            return `[${arg.value?.map((val) => toJson(val)).join(',') ?? ''}]`;
        }
        throw Error(`Invalid value type: ${arg}`);
    }
    function stringFromArg(arg) {
        if (!Object.hasOwn(arg, 'value')) {
            return arg.type;
        }
        switch (arg.type) {
            case 'string':
            case 'number':
            case 'boolean':
            case 'bigint':
                return String(arg.value);
            case 'regexp':
                return `/${arg.value.pattern}/${arg.value.flags ?? ''}`;
            case 'date':
                return new Date(arg.value).toString();
            case 'object':
                return `Object(${arg.value?.length ?? ''})`;
            case 'array':
                return `Array(${arg.value?.length ?? ''})`;
            case 'map':
                return `Map(${arg.value?.length})`;
            case 'set':
                return `Set(${arg.value?.length})`;
            default:
                return arg.type;
        }
    }
    function getRemoteValuesText(args, formatText) {
        const arg = args[0];
        if (!arg) {
            return '';
        }
        if (arg.type === 'string' &&
            isFormatSpecifier(arg.value.toString()) &&
            formatText) {
            return logMessageFormatter(args);
        }
        return args
            .map((arg) => {
            return stringFromArg(arg);
        })
            .join('\u0020');
    }

    var _a$4;
    function getBidiStackTrace(cdpStackTrace) {
        const stackFrames = cdpStackTrace?.callFrames.map((callFrame) => {
            return {
                columnNumber: callFrame.columnNumber,
                functionName: callFrame.functionName,
                lineNumber: callFrame.lineNumber,
                url: callFrame.url,
            };
        });
        return stackFrames ? { callFrames: stackFrames } : undefined;
    }
    function getLogLevel(consoleApiType) {
        if (["error" , 'assert'].includes(consoleApiType)) {
            return "error" ;
        }
        if (["debug" , 'trace'].includes(consoleApiType)) {
            return "debug" ;
        }
        if (["warn" , 'warning'].includes(consoleApiType)) {
            return "warn" ;
        }
        return "info" ;
    }
    function getLogMethod(consoleApiType) {
        switch (consoleApiType) {
            case 'warning':
                return 'warn';
            case 'startGroup':
                return 'group';
            case 'startGroupCollapsed':
                return 'groupCollapsed';
            case 'endGroup':
                return 'groupEnd';
        }
        return consoleApiType;
    }
    class LogManager {
        #eventManager;
        #realmStorage;
        #cdpTarget;
        #logger;
        constructor(cdpTarget, realmStorage, eventManager, logger) {
            this.#cdpTarget = cdpTarget;
            this.#realmStorage = realmStorage;
            this.#eventManager = eventManager;
            this.#logger = logger;
        }
        static create(cdpTarget, realmStorage, eventManager, logger) {
            const logManager = new _a$4(cdpTarget, realmStorage, eventManager, logger);
            logManager.#initializeEntryAddedEventListener();
            return logManager;
        }
        async #heuristicSerializeArg(arg, realm) {
            switch (arg.type) {
                case 'undefined':
                    return { type: 'undefined' };
                case 'boolean':
                    return { type: 'boolean', value: arg.value };
                case 'string':
                    return { type: 'string', value: arg.value };
                case 'number':
                    return { type: 'number', value: arg.unserializableValue ?? arg.value };
                case 'bigint':
                    if (arg.unserializableValue !== undefined &&
                        arg.unserializableValue[arg.unserializableValue.length - 1] === 'n') {
                        return {
                            type: arg.type,
                            value: arg.unserializableValue.slice(0, -1),
                        };
                    }
                    break;
                case 'object':
                    if (arg.subtype === 'null') {
                        return { type: 'null' };
                    }
                    break;
            }
            return await realm.serializeCdpObject(arg, "none" );
        }
        #initializeEntryAddedEventListener() {
            this.#cdpTarget.cdpClient.on('Runtime.consoleAPICalled', (params) => {
                const realm = this.#realmStorage.findRealm({
                    cdpSessionId: this.#cdpTarget.cdpSessionId,
                    executionContextId: params.executionContextId,
                });
                if (realm === undefined) {
                    this.#logger?.(LogType.cdp, params);
                    return;
                }
                const argsPromise = Promise.all(params.args.map((arg) => this.#heuristicSerializeArg(arg, realm)));
                for (const browsingContext of realm.associatedBrowsingContexts) {
                    this.#eventManager.registerPromiseEvent(argsPromise.then((args) => ({
                        kind: 'success',
                        value: {
                            type: 'event',
                            method: Log$1.EventNames.LogEntryAdded,
                            params: {
                                level: getLogLevel(params.type),
                                source: realm.source,
                                text: getRemoteValuesText(args, true),
                                timestamp: Math.round(params.timestamp),
                                stackTrace: getBidiStackTrace(params.stackTrace),
                                type: 'console',
                                method: getLogMethod(params.type),
                                args,
                            },
                        },
                    }), (error) => ({
                        kind: 'error',
                        error,
                    })), browsingContext.id, Log$1.EventNames.LogEntryAdded);
                }
            });
            this.#cdpTarget.cdpClient.on('Runtime.exceptionThrown', (params) => {
                const realm = this.#realmStorage.findRealm({
                    cdpSessionId: this.#cdpTarget.cdpSessionId,
                    executionContextId: params.exceptionDetails.executionContextId,
                });
                if (realm === undefined) {
                    this.#logger?.(LogType.cdp, params);
                    return;
                }
                for (const browsingContext of realm.associatedBrowsingContexts) {
                    this.#eventManager.registerPromiseEvent(_a$4.#getExceptionText(params, realm).then((text) => ({
                        kind: 'success',
                        value: {
                            type: 'event',
                            method: Log$1.EventNames.LogEntryAdded,
                            params: {
                                level: "error" ,
                                source: realm.source,
                                text,
                                timestamp: Math.round(params.timestamp),
                                stackTrace: getBidiStackTrace(params.exceptionDetails.stackTrace),
                                type: 'javascript',
                            },
                        },
                    }), (error) => ({
                        kind: 'error',
                        error,
                    })), browsingContext.id, Log$1.EventNames.LogEntryAdded);
                }
            });
        }
        static async #getExceptionText(params, realm) {
            if (!params.exceptionDetails.exception) {
                return params.exceptionDetails.text;
            }
            if (realm === undefined) {
                return JSON.stringify(params.exceptionDetails.exception);
            }
            return await realm.stringifyObject(params.exceptionDetails.exception);
        }
    }
    _a$4 = LogManager;

    /*
     * Copyright 2025 Google LLC.
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
    class CollectorsStorage {
        #collectors = new Map();
        #responseCollectors = new Map();
        #requestBodyCollectors = new Map();
        #maxEncodedDataSize;
        #logger;
        constructor(maxEncodedDataSize, logger) {
            this.#maxEncodedDataSize = maxEncodedDataSize;
            this.#logger = logger;
        }
        addDataCollector(params) {
            if (params.maxEncodedDataSize < 1 ||
                params.maxEncodedDataSize > this.#maxEncodedDataSize) {
                throw new InvalidArgumentException(`Max encoded data size should be between 1 and ${this.#maxEncodedDataSize}`);
            }
            const collectorId = uuidv4();
            this.#collectors.set(collectorId, params);
            return collectorId;
        }
        isCollected(requestId, dataType, collectorId) {
            if (collectorId !== undefined && !this.#collectors.has(collectorId)) {
                throw new NoSuchNetworkCollectorException(`Unknown collector ${collectorId}`);
            }
            if (dataType === undefined) {
                return (this.isCollected(requestId, "response" , collectorId) ||
                    this.isCollected(requestId, "request" , collectorId));
            }
            const requestToCollectorsMap = this.#getRequestToCollectorMap(dataType).get(requestId);
            if (requestToCollectorsMap === undefined ||
                requestToCollectorsMap.size === 0) {
                return false;
            }
            if (collectorId === undefined) {
                return true;
            }
            if (!requestToCollectorsMap.has(collectorId)) {
                return false;
            }
            return true;
        }
        #getRequestToCollectorMap(dataType) {
            switch (dataType) {
                case "response" :
                    return this.#responseCollectors;
                case "request" :
                    return this.#requestBodyCollectors;
                default:
                    throw new UnsupportedOperationException(`Unsupported data type ${dataType}`);
            }
        }
        disownData(requestId, dataType, collectorId) {
            const requestToCollectorsMap = this.#getRequestToCollectorMap(dataType);
            if (collectorId !== undefined) {
                requestToCollectorsMap.get(requestId)?.delete(collectorId);
            }
            if (collectorId === undefined ||
                requestToCollectorsMap.get(requestId)?.size === 0) {
                requestToCollectorsMap.delete(requestId);
            }
        }
        #shouldCollectRequest(collectorId, request, dataType, topLevelBrowsingContext, userContext) {
            const collector = this.#collectors.get(collectorId);
            if (collector === undefined) {
                throw new NoSuchNetworkCollectorException(`Unknown collector ${collectorId}`);
            }
            if (collector.userContexts &&
                !collector.userContexts.includes(userContext)) {
                return false;
            }
            if (collector.contexts &&
                !collector.contexts.includes(topLevelBrowsingContext)) {
                return false;
            }
            if (!collector.dataTypes.includes(dataType)) {
                return false;
            }
            if (dataType === "request"  &&
                request.bodySize > collector.maxEncodedDataSize) {
                this.#logger?.(LogType.debug, `Request's ${request.id} body size is too big for the collector ${collectorId}`);
                return false;
            }
            if (dataType === "response"  &&
                request.encodedResponseBodySize > collector.maxEncodedDataSize) {
                this.#logger?.(LogType.debug, `Request's ${request.id} response is too big for the collector ${collectorId}`);
                return false;
            }
            this.#logger?.(LogType.debug, `Collector ${collectorId} collected ${dataType} of ${request.id}`);
            return true;
        }
        collectIfNeeded(request, dataType, topLevelBrowsingContext, userContext) {
            const collectorIds = [...this.#collectors.keys()].filter((collectorId) => this.#shouldCollectRequest(collectorId, request, dataType, topLevelBrowsingContext, userContext));
            if (collectorIds.length > 0) {
                this.#getRequestToCollectorMap(dataType).set(request.id, new Set(collectorIds));
            }
        }
        removeDataCollector(collectorId) {
            if (!this.#collectors.has(collectorId)) {
                throw new NoSuchNetworkCollectorException(`Collector ${collectorId} does not exist`);
            }
            this.#collectors.delete(collectorId);
            const affectedRequests = [];
            for (const [requestId, collectorIds] of this.#responseCollectors) {
                if (collectorIds.has(collectorId)) {
                    collectorIds.delete(collectorId);
                    if (collectorIds.size === 0) {
                        this.#responseCollectors.delete(requestId);
                        affectedRequests.push(requestId);
                    }
                }
            }
            for (const [requestId, collectorIds] of this.#requestBodyCollectors) {
                if (collectorIds.has(collectorId)) {
                    collectorIds.delete(collectorId);
                    if (collectorIds.size === 0) {
                        this.#requestBodyCollectors.delete(requestId);
                        affectedRequests.push(requestId);
                    }
                }
            }
            return affectedRequests;
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    class DefaultMap extends Map {
        #getDefaultValue;
        constructor(getDefaultValue, entries) {
            super(entries);
            this.#getDefaultValue = getDefaultValue;
        }
        get(key) {
            if (!this.has(key)) {
                this.set(key, this.#getDefaultValue(key));
            }
            return super.get(key);
        }
    }

    /*
     * Copyright 2023 Google LLC.
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
     *
     */
    var _a$3;
    const REALM_REGEX = /(?<=realm=").*(?=")/;
    class NetworkRequest {
        static unknownParameter = 'UNKNOWN';
        #id;
        #fetchId;
        #interceptPhase;
        #servedFromCache = false;
        #redirectCount;
        #request = {};
        #requestOverrides;
        #responseOverrides;
        #response = {
            decodedSize: 0,
            encodedSize: 0,
        };
        #eventManager;
        #networkStorage;
        #cdpTarget;
        #logger;
        #emittedEvents = {
            [Network$2.EventNames.AuthRequired]: false,
            [Network$2.EventNames.BeforeRequestSent]: false,
            [Network$2.EventNames.FetchError]: false,
            [Network$2.EventNames.ResponseCompleted]: false,
            [Network$2.EventNames.ResponseStarted]: false,
        };
        waitNextPhase = new Deferred();
        constructor(id, eventManager, networkStorage, cdpTarget, redirectCount = 0, logger) {
            this.#id = id;
            this.#eventManager = eventManager;
            this.#networkStorage = networkStorage;
            this.#cdpTarget = cdpTarget;
            this.#redirectCount = redirectCount;
            this.#logger = logger;
        }
        get id() {
            return this.#id;
        }
        get fetchId() {
            return this.#fetchId;
        }
        get interceptPhase() {
            return this.#interceptPhase;
        }
        get url() {
            const fragment = this.#request.info?.request.urlFragment ??
                this.#request.paused?.request.urlFragment ??
                '';
            const url = this.#response.paused?.request.url ??
                this.#requestOverrides?.url ??
                this.#response.info?.url ??
                this.#request.auth?.request.url ??
                this.#request.info?.request.url ??
                this.#request.paused?.request.url ??
                _a$3.unknownParameter;
            return `${url}${fragment}`;
        }
        get redirectCount() {
            return this.#redirectCount;
        }
        get cdpTarget() {
            return this.#cdpTarget;
        }
        updateCdpTarget(cdpTarget) {
            if (cdpTarget !== this.#cdpTarget) {
                this.#logger?.(LogType.debugInfo, `Request ${this.id} was moved from ${this.#cdpTarget.id} to ${cdpTarget.id}`);
                this.#cdpTarget = cdpTarget;
            }
        }
        get cdpClient() {
            return this.#cdpTarget.cdpClient;
        }
        isRedirecting() {
            return Boolean(this.#request.info);
        }
        #isDataUrl() {
            return this.url.startsWith('data:');
        }
        #isNonInterceptable() {
            return (
            this.#isDataUrl() ||
                this.#servedFromCache);
        }
        get #method() {
            return (this.#requestOverrides?.method ??
                this.#request.info?.request.method ??
                this.#request.paused?.request.method ??
                this.#request.auth?.request.method ??
                this.#response.paused?.request.method);
        }
        get #navigationId() {
            if (!this.#request.info ||
                !this.#request.info.loaderId ||
                this.#request.info.loaderId !== this.#request.info.requestId) {
                return null;
            }
            return this.#networkStorage.getNavigationId(this.#context ?? undefined);
        }
        get #cookies() {
            let cookies = [];
            if (this.#request.extraInfo) {
                cookies = this.#request.extraInfo.associatedCookies
                    .filter(({ blockedReasons }) => {
                    return !Array.isArray(blockedReasons) || blockedReasons.length === 0;
                })
                    .map(({ cookie }) => cdpToBiDiCookie(cookie));
            }
            return cookies;
        }
        #getBodySizeFromHeaders(headers) {
            if (headers === undefined) {
                return undefined;
            }
            if (headers['Content-Length'] !== undefined) {
                const bodySize = Number.parseInt(headers['Content-Length']);
                if (Number.isInteger(bodySize)) {
                    return bodySize;
                }
                this.#logger?.(LogType.debugError, "Unexpected non-integer 'Content-Length' header");
            }
            return undefined;
        }
        get bodySize() {
            if (typeof this.#requestOverrides?.bodySize === 'number') {
                return this.#requestOverrides.bodySize;
            }
            if (this.#request.info?.request.postDataEntries !== undefined) {
                return bidiBodySizeFromCdpPostDataEntries(this.#request.info?.request.postDataEntries);
            }
            return (this.#getBodySizeFromHeaders(this.#request.info?.request.headers) ??
                this.#getBodySizeFromHeaders(this.#request.extraInfo?.headers) ??
                0);
        }
        get #context() {
            const result = this.#response.paused?.frameId ??
                this.#request.info?.frameId ??
                this.#request.paused?.frameId ??
                this.#request.auth?.frameId;
            if (result !== undefined) {
                return result;
            }
            if (this.#request?.info?.initiator.type === 'preflight' &&
                this.#request?.info?.initiator.requestId !== undefined) {
                const maybeInitiator = this.#networkStorage.getRequestById(this.#request?.info?.initiator.requestId);
                if (maybeInitiator !== undefined) {
                    return maybeInitiator.#request.info?.frameId ?? null;
                }
            }
            return null;
        }
        get #statusCode() {
            return (this.#responseOverrides?.statusCode ??
                this.#response.paused?.responseStatusCode ??
                this.#response.extraInfo?.statusCode ??
                this.#response.info?.status);
        }
        get #requestHeaders() {
            let headers = [];
            if (this.#requestOverrides?.headers) {
                const headerMap = new DefaultMap(() => []);
                for (const header of this.#requestOverrides.headers) {
                    headerMap.get(header.name).push(header.value.value);
                }
                for (const [name, value] of headerMap.entries()) {
                    headers.push({
                        name,
                        value: {
                            type: 'string',
                            value: value.join('\n').trimEnd(),
                        },
                    });
                }
            }
            else {
                headers = [
                    ...bidiNetworkHeadersFromCdpNetworkHeaders(this.#request.info?.request.headers),
                    ...bidiNetworkHeadersFromCdpNetworkHeaders(this.#request.extraInfo?.headers),
                ];
            }
            return headers;
        }
        get #authChallenges() {
            if (!this.#response.info) {
                return;
            }
            if (!(this.#statusCode === 401 || this.#statusCode === 407)) {
                return undefined;
            }
            const headerName = this.#statusCode === 401 ? 'WWW-Authenticate' : 'Proxy-Authenticate';
            const authChallenges = [];
            for (const [header, value] of Object.entries(this.#response.info.headers)) {
                if (header.localeCompare(headerName, undefined, { sensitivity: 'base' }) === 0) {
                    authChallenges.push({
                        scheme: value.split(' ').at(0) ?? '',
                        realm: value.match(REALM_REGEX)?.at(0) ?? '',
                    });
                }
            }
            return authChallenges;
        }
        get #timings() {
            const responseTimeOffset = getTiming(getTiming(this.#response.info?.timing?.requestTime) -
                getTiming(this.#request.info?.timestamp));
            return {
                timeOrigin: Math.round(getTiming(this.#request.info?.wallTime) * 1000),
                requestTime: 0,
                redirectStart: 0,
                redirectEnd: 0,
                fetchStart: getTiming(this.#response.info?.timing?.workerFetchStart, responseTimeOffset),
                dnsStart: getTiming(this.#response.info?.timing?.dnsStart, responseTimeOffset),
                dnsEnd: getTiming(this.#response.info?.timing?.dnsEnd, responseTimeOffset),
                connectStart: getTiming(this.#response.info?.timing?.connectStart, responseTimeOffset),
                connectEnd: getTiming(this.#response.info?.timing?.connectEnd, responseTimeOffset),
                tlsStart: getTiming(this.#response.info?.timing?.sslStart, responseTimeOffset),
                requestStart: getTiming(this.#response.info?.timing?.sendStart, responseTimeOffset),
                responseStart: getTiming(this.#response.info?.timing?.receiveHeadersStart, responseTimeOffset),
                responseEnd: getTiming(this.#response.info?.timing?.receiveHeadersEnd, responseTimeOffset),
            };
        }
        #phaseChanged() {
            this.waitNextPhase.resolve();
            this.waitNextPhase = new Deferred();
        }
        #interceptsInPhase(phase) {
            if (this.#isNonInterceptable() ||
                !this.#cdpTarget.isSubscribedTo(`network.${phase}`)) {
                return new Set();
            }
            return this.#networkStorage.getInterceptsForPhase(this, phase);
        }
        #isBlockedInPhase(phase) {
            return this.#interceptsInPhase(phase).size > 0;
        }
        handleRedirect(event) {
            this.#response.hasExtraInfo = false;
            this.#response.decodedSize = 0;
            this.#response.encodedSize = 0;
            this.#response.info = event.redirectResponse;
            this.#emitEventsIfReady({
                wasRedirected: true,
            });
        }
        #emitEventsIfReady(options = {}) {
            const requestExtraInfoCompleted =
            options.wasRedirected ||
                Boolean(this.#response.loadingFailed) ||
                this.#isDataUrl() ||
                Boolean(this.#request.extraInfo) ||
                this.#isBlockedInPhase("authRequired" ) ||
                this.#servedFromCache ||
                Boolean(this.#response.info && !this.#response.hasExtraInfo);
            const noInterceptionExpected = this.#isNonInterceptable();
            const requestInterceptionExpected = !noInterceptionExpected &&
                this.#isBlockedInPhase("beforeRequestSent" );
            const requestInterceptionCompleted = !requestInterceptionExpected ||
                (requestInterceptionExpected && Boolean(this.#request.paused));
            if (Boolean(this.#request.info) &&
                (requestInterceptionExpected
                    ? requestInterceptionCompleted
                    : requestExtraInfoCompleted)) {
                this.#emitEvent(this.#getBeforeRequestEvent.bind(this));
            }
            const responseExtraInfoCompleted = Boolean(this.#response.extraInfo) ||
                this.#servedFromCache ||
                Boolean(this.#response.info && !this.#response.hasExtraInfo);
            const responseInterceptionExpected = !noInterceptionExpected &&
                this.#isBlockedInPhase("responseStarted" );
            if (this.#response.info ||
                (responseInterceptionExpected && Boolean(this.#response.paused))) {
                this.#emitEvent(this.#getResponseStartedEvent.bind(this));
            }
            const responseInterceptionCompleted = !responseInterceptionExpected ||
                (responseInterceptionExpected && Boolean(this.#response.paused));
            const loadingFinished = Boolean(this.#response.loadingFailed) ||
                Boolean(this.#response.loadingFinished);
            if (Boolean(this.#response.info) &&
                responseExtraInfoCompleted &&
                responseInterceptionCompleted &&
                (loadingFinished || options.wasRedirected)) {
                this.#emitEvent(this.#getResponseReceivedEvent.bind(this));
                this.#networkStorage.disposeRequest(this.id);
            }
        }
        onRequestWillBeSentEvent(event) {
            this.#request.info = event;
            this.#networkStorage.collectIfNeeded(this, "request" );
            this.#emitEventsIfReady();
        }
        onRequestWillBeSentExtraInfoEvent(event) {
            this.#request.extraInfo = event;
            this.#emitEventsIfReady();
        }
        onResponseReceivedExtraInfoEvent(event) {
            if (event.statusCode >= 300 &&
                event.statusCode <= 399 &&
                this.#request.info &&
                event.headers['location'] === this.#request.info.request.url) {
                return;
            }
            this.#response.extraInfo = event;
            this.#emitEventsIfReady();
        }
        onResponseReceivedEvent(event) {
            this.#response.hasExtraInfo = event.hasExtraInfo;
            this.#response.info = event.response;
            this.#networkStorage.collectIfNeeded(this, "response" );
            this.#emitEventsIfReady();
        }
        onServedFromCache() {
            this.#servedFromCache = true;
            this.#emitEventsIfReady();
        }
        onLoadingFinishedEvent(event) {
            this.#response.loadingFinished = event;
            this.#emitEventsIfReady();
        }
        onDataReceivedEvent(event) {
            this.#response.decodedSize += event.dataLength;
            this.#response.encodedSize += event.encodedDataLength;
        }
        onLoadingFailedEvent(event) {
            this.#response.loadingFailed = event;
            this.#emitEventsIfReady();
            this.#emitEvent(() => {
                return {
                    method: Network$2.EventNames.FetchError,
                    params: {
                        ...this.#getBaseEventParams(),
                        errorText: event.errorText,
                    },
                };
            });
        }
        async failRequest(errorReason) {
            assert(this.#fetchId, 'Network Interception not set-up.');
            await this.cdpClient.sendCommand('Fetch.failRequest', {
                requestId: this.#fetchId,
                errorReason,
            });
            this.#interceptPhase = undefined;
        }
        onRequestPaused(event) {
            this.#fetchId = event.requestId;
            if (event.responseStatusCode || event.responseErrorReason) {
                this.#response.paused = event;
                if (this.#isBlockedInPhase("responseStarted" ) &&
                    !this.#emittedEvents[Network$2.EventNames.ResponseStarted] &&
                    this.#fetchId !== this.id) {
                    this.#interceptPhase = "responseStarted" ;
                }
                else {
                    void this.#continueResponse();
                }
            }
            else {
                this.#request.paused = event;
                if (this.#isBlockedInPhase("beforeRequestSent" ) &&
                    !this.#emittedEvents[Network$2.EventNames.BeforeRequestSent] &&
                    this.#fetchId !== this.id) {
                    this.#interceptPhase = "beforeRequestSent" ;
                }
                else {
                    void this.#continueRequest();
                }
            }
            this.#emitEventsIfReady();
        }
        onAuthRequired(event) {
            this.#fetchId = event.requestId;
            this.#request.auth = event;
            if (this.#isBlockedInPhase("authRequired" ) &&
                this.#fetchId !== this.id) {
                this.#interceptPhase = "authRequired" ;
                this.#emitEventsIfReady();
            }
            else {
                void this.#continueWithAuth({
                    response: 'Default',
                });
            }
            this.#emitEvent(() => {
                return {
                    method: Network$2.EventNames.AuthRequired,
                    params: {
                        ...this.#getBaseEventParams("authRequired" ),
                        response: this.#getResponseEventParams(),
                    },
                };
            });
        }
        async continueRequest(overrides = {}) {
            const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
            const headers = cdpFetchHeadersFromBidiNetworkHeaders(overrideHeaders);
            const postData = getCdpBodyFromBiDiBytesValue(overrides.body);
            await this.#continueRequest({
                url: overrides.url,
                method: overrides.method,
                headers,
                postData,
            });
            this.#requestOverrides = {
                url: overrides.url,
                method: overrides.method,
                headers: overrides.headers,
                cookies: overrides.cookies,
                bodySize: getSizeFromBiDiBytesValue(overrides.body),
            };
        }
        async #continueRequest(overrides = {}) {
            assert(this.#fetchId, 'Network Interception not set-up.');
            await this.cdpClient.sendCommand('Fetch.continueRequest', {
                requestId: this.#fetchId,
                url: overrides.url,
                method: overrides.method,
                headers: overrides.headers,
                postData: overrides.postData,
            });
            this.#interceptPhase = undefined;
        }
        async continueResponse(overrides = {}) {
            if (this.interceptPhase === "authRequired" ) {
                if (overrides.credentials) {
                    await Promise.all([
                        this.waitNextPhase,
                        await this.#continueWithAuth({
                            response: 'ProvideCredentials',
                            username: overrides.credentials.username,
                            password: overrides.credentials.password,
                        }),
                    ]);
                }
                else {
                    return await this.#continueWithAuth({
                        response: 'ProvideCredentials',
                    });
                }
            }
            if (this.#interceptPhase === "responseStarted" ) {
                const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
                const responseHeaders = cdpFetchHeadersFromBidiNetworkHeaders(overrideHeaders);
                await this.#continueResponse({
                    responseCode: overrides.statusCode ?? this.#response.paused?.responseStatusCode,
                    responsePhrase: overrides.reasonPhrase ?? this.#response.paused?.responseStatusText,
                    responseHeaders: responseHeaders ?? this.#response.paused?.responseHeaders,
                });
                this.#responseOverrides = {
                    statusCode: overrides.statusCode,
                    headers: overrideHeaders,
                };
            }
        }
        async #continueResponse({ responseCode, responsePhrase, responseHeaders, } = {}) {
            assert(this.#fetchId, 'Network Interception not set-up.');
            await this.cdpClient.sendCommand('Fetch.continueResponse', {
                requestId: this.#fetchId,
                responseCode,
                responsePhrase,
                responseHeaders,
            });
            this.#interceptPhase = undefined;
        }
        async continueWithAuth(authChallenge) {
            let username;
            let password;
            if (authChallenge.action === 'provideCredentials') {
                const { credentials } = authChallenge;
                username = credentials.username;
                password = credentials.password;
            }
            const response = cdpAuthChallengeResponseFromBidiAuthContinueWithAuthAction(authChallenge.action);
            await this.#continueWithAuth({
                response,
                username,
                password,
            });
        }
        async provideResponse(overrides) {
            assert(this.#fetchId, 'Network Interception not set-up.');
            if (this.interceptPhase === "authRequired" ) {
                return await this.#continueWithAuth({
                    response: 'ProvideCredentials',
                });
            }
            if (!overrides.body && !overrides.headers) {
                return await this.#continueRequest();
            }
            const overrideHeaders = this.#getOverrideHeader(overrides.headers, overrides.cookies);
            const responseHeaders = cdpFetchHeadersFromBidiNetworkHeaders(overrideHeaders);
            const responseCode = overrides.statusCode ?? this.#statusCode ?? 200;
            await this.cdpClient.sendCommand('Fetch.fulfillRequest', {
                requestId: this.#fetchId,
                responseCode,
                responsePhrase: overrides.reasonPhrase,
                responseHeaders,
                body: getCdpBodyFromBiDiBytesValue(overrides.body),
            });
            this.#interceptPhase = undefined;
        }
        dispose() {
            this.waitNextPhase.reject(new Error('waitNextPhase disposed'));
        }
        async #continueWithAuth(authChallengeResponse) {
            assert(this.#fetchId, 'Network Interception not set-up.');
            await this.cdpClient.sendCommand('Fetch.continueWithAuth', {
                requestId: this.#fetchId,
                authChallengeResponse,
            });
            this.#interceptPhase = undefined;
        }
        #emitEvent(getEvent) {
            let event;
            try {
                event = getEvent();
            }
            catch (error) {
                this.#logger?.(LogType.debugError, error);
                return;
            }
            if (this.#isIgnoredEvent() ||
                (this.#emittedEvents[event.method] &&
                    event.method !== Network$2.EventNames.AuthRequired)) {
                return;
            }
            this.#phaseChanged();
            this.#emittedEvents[event.method] = true;
            if (this.#context) {
                this.#eventManager.registerEvent(Object.assign(event, {
                    type: 'event',
                }), this.#context);
            }
            else {
                this.#eventManager.registerGlobalEvent(Object.assign(event, {
                    type: 'event',
                }));
            }
        }
        #getBaseEventParams(phase) {
            const interceptProps = {
                isBlocked: false,
            };
            if (phase) {
                const blockedBy = this.#interceptsInPhase(phase);
                interceptProps.isBlocked = blockedBy.size > 0;
                if (interceptProps.isBlocked) {
                    interceptProps.intercepts = [...blockedBy];
                }
            }
            return {
                context: this.#context,
                navigation: this.#navigationId,
                redirectCount: this.#redirectCount,
                request: this.#getRequestData(),
                timestamp: Math.round(getTiming(this.#request.info?.wallTime) * 1000),
                ...interceptProps,
            };
        }
        #getResponseEventParams() {
            if (this.#response.info?.fromDiskCache) {
                this.#response.extraInfo = undefined;
            }
            const cdpHeaders = this.#response.info?.headers ?? {};
            const cdpRawHeaders = this.#response.extraInfo?.headers ?? {};
            for (const [key, value] of Object.entries(cdpRawHeaders)) {
                cdpHeaders[key] = value;
            }
            const headers = bidiNetworkHeadersFromCdpNetworkHeaders(cdpHeaders);
            const authChallenges = this.#authChallenges;
            const response = {
                url: this.url,
                protocol: this.#response.info?.protocol ?? '',
                status: this.#statusCode ?? -1,
                statusText: this.#response.info?.statusText ||
                    this.#response.paused?.responseStatusText ||
                    '',
                fromCache: this.#response.info?.fromDiskCache ||
                    this.#response.info?.fromPrefetchCache ||
                    this.#servedFromCache,
                headers: this.#responseOverrides?.headers ?? headers,
                mimeType: this.#response.info?.mimeType || '',
                bytesReceived: this.encodedResponseBodySize,
                headersSize: computeHeadersSize(headers),
                bodySize: this.encodedResponseBodySize,
                content: {
                    size: this.#response.decodedSize ?? 0,
                },
                ...(authChallenges ? { authChallenges } : {}),
            };
            return {
                ...response,
                'goog:securityDetails': this.#response.info?.securityDetails,
            };
        }
        get encodedResponseBodySize() {
            return (this.#response.loadingFinished?.encodedDataLength ??
                this.#response.info?.encodedDataLength ??
                this.#response.encodedSize ??
                0);
        }
        #getRequestData() {
            const headers = this.#requestHeaders;
            const request = {
                request: this.#id,
                url: this.url,
                method: this.#method ?? _a$3.unknownParameter,
                headers,
                cookies: this.#cookies,
                headersSize: computeHeadersSize(headers),
                bodySize: this.bodySize,
                destination: this.#getDestination(),
                initiatorType: this.#getInitiatorType(),
                timings: this.#timings,
            };
            return {
                ...request,
                'goog:postData': this.#request.info?.request?.postData,
                'goog:hasPostData': this.#request.info?.request?.hasPostData,
                'goog:resourceType': this.#request.info?.type,
                'goog:resourceInitiator': this.#request.info?.initiator,
            };
        }
        #getDestination() {
            switch (this.#request.info?.type) {
                case 'Script':
                    return 'script';
                case 'Stylesheet':
                    return 'style';
                case 'Image':
                    return 'image';
                case 'Document':
                    return this.#request.info?.initiator.type === 'parser'
                        ? 'iframe'
                        : 'document';
                default:
                    return '';
            }
        }
        #getInitiatorType() {
            if (this.#request.info?.initiator.type === 'parser') {
                switch (this.#request.info?.type) {
                    case 'Document':
                        return 'iframe';
                    case 'Font':
                        return this.#request.info?.initiator?.url ===
                            this.#request.info?.documentURL
                            ? 'font'
                            : 'css';
                    case 'Image':
                        return this.#request.info?.initiator?.url ===
                            this.#request.info?.documentURL
                            ? 'img'
                            : 'css';
                    case 'Script':
                        return 'script';
                    case 'Stylesheet':
                        return 'link';
                    default:
                        return null;
                }
            }
            if (this.#request?.info?.type === 'Fetch') {
                return 'fetch';
            }
            return null;
        }
        #getBeforeRequestEvent() {
            assert(this.#request.info, 'RequestWillBeSentEvent is not set');
            return {
                method: Network$2.EventNames.BeforeRequestSent,
                params: {
                    ...this.#getBaseEventParams("beforeRequestSent" ),
                    initiator: {
                        type: _a$3.#getInitiator(this.#request.info.initiator.type),
                        columnNumber: this.#request.info.initiator.columnNumber,
                        lineNumber: this.#request.info.initiator.lineNumber,
                        stackTrace: this.#request.info.initiator.stack,
                        request: this.#request.info.initiator.requestId,
                    },
                },
            };
        }
        #getResponseStartedEvent() {
            return {
                method: Network$2.EventNames.ResponseStarted,
                params: {
                    ...this.#getBaseEventParams("responseStarted" ),
                    response: this.#getResponseEventParams(),
                },
            };
        }
        #getResponseReceivedEvent() {
            return {
                method: Network$2.EventNames.ResponseCompleted,
                params: {
                    ...this.#getBaseEventParams(),
                    response: this.#getResponseEventParams(),
                },
            };
        }
        #isIgnoredEvent() {
            const faviconUrl = '/favicon.ico';
            return (this.#request.paused?.request.url.endsWith(faviconUrl) ??
                this.#request.info?.request.url.endsWith(faviconUrl) ??
                false);
        }
        #getOverrideHeader(headers, cookies) {
            if (!headers && !cookies) {
                return undefined;
            }
            let overrideHeaders = headers;
            const cookieHeader = networkHeaderFromCookieHeaders(cookies);
            if (cookieHeader && !overrideHeaders) {
                overrideHeaders = this.#requestHeaders;
            }
            if (cookieHeader && overrideHeaders) {
                overrideHeaders.filter((header) => header.name.localeCompare('cookie', undefined, {
                    sensitivity: 'base',
                }) !== 0);
                overrideHeaders.push(cookieHeader);
            }
            return overrideHeaders;
        }
        static #getInitiator(initiatorType) {
            switch (initiatorType) {
                case 'parser':
                case 'script':
                case 'preflight':
                    return initiatorType;
                default:
                    return 'other';
            }
        }
    }
    _a$3 = NetworkRequest;
    function getCdpBodyFromBiDiBytesValue(body) {
        let parsedBody;
        if (body?.type === 'string') {
            parsedBody = stringToBase64(body.value);
        }
        else if (body?.type === 'base64') {
            parsedBody = body.value;
        }
        return parsedBody;
    }
    function getSizeFromBiDiBytesValue(body) {
        if (body?.type === 'string') {
            return body.value.length;
        }
        else if (body?.type === 'base64') {
            return atob(body.value).length;
        }
        return 0;
    }

    const MAX_TOTAL_COLLECTED_SIZE = 200_000_000;
    class NetworkStorage {
        #browsingContextStorage;
        #eventManager;
        #collectorsStorage;
        #logger;
        #requests = new Map();
        #intercepts = new Map();
        #defaultCacheBehavior = 'default';
        constructor(eventManager, browsingContextStorage, browserClient, logger) {
            this.#browsingContextStorage = browsingContextStorage;
            this.#eventManager = eventManager;
            this.#collectorsStorage = new CollectorsStorage(MAX_TOTAL_COLLECTED_SIZE, logger);
            browserClient.on('Target.detachedFromTarget', ({ sessionId }) => {
                this.disposeRequestMap(sessionId);
            });
            this.#logger = logger;
        }
        #getOrCreateNetworkRequest(id, cdpTarget, redirectCount) {
            let request = this.getRequestById(id);
            if (redirectCount === undefined && request) {
                return request;
            }
            request = new NetworkRequest(id, this.#eventManager, this, cdpTarget, redirectCount, this.#logger);
            this.addRequest(request);
            return request;
        }
        onCdpTargetCreated(cdpTarget) {
            const cdpClient = cdpTarget.cdpClient;
            const listeners = [
                [
                    'Network.requestWillBeSent',
                    (params) => {
                        const request = this.getRequestById(params.requestId);
                        request?.updateCdpTarget(cdpTarget);
                        if (request && request.isRedirecting()) {
                            request.handleRedirect(params);
                            this.disposeRequest(params.requestId);
                            this.#getOrCreateNetworkRequest(params.requestId, cdpTarget, request.redirectCount + 1).onRequestWillBeSentEvent(params);
                        }
                        else {
                            this.#getOrCreateNetworkRequest(params.requestId, cdpTarget).onRequestWillBeSentEvent(params);
                        }
                    },
                ],
                [
                    'Network.requestWillBeSentExtraInfo',
                    (params) => {
                        const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                        request.updateCdpTarget(cdpTarget);
                        request.onRequestWillBeSentExtraInfoEvent(params);
                    },
                ],
                [
                    'Network.responseReceived',
                    (params) => {
                        const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                        request.updateCdpTarget(cdpTarget);
                        request.onResponseReceivedEvent(params);
                    },
                ],
                [
                    'Network.responseReceivedExtraInfo',
                    (params) => {
                        const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                        request.updateCdpTarget(cdpTarget);
                        request.onResponseReceivedExtraInfoEvent(params);
                    },
                ],
                [
                    'Network.requestServedFromCache',
                    (params) => {
                        const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                        request.updateCdpTarget(cdpTarget);
                        request.onServedFromCache();
                    },
                ],
                [
                    'Fetch.requestPaused',
                    (event) => {
                        const request = this.#getOrCreateNetworkRequest(
                        event.networkId ?? event.requestId, cdpTarget);
                        request.updateCdpTarget(cdpTarget);
                        request.onRequestPaused(event);
                    },
                ],
                [
                    'Fetch.authRequired',
                    (event) => {
                        let request = this.getRequestByFetchId(event.requestId);
                        if (!request) {
                            request = this.#getOrCreateNetworkRequest(event.requestId, cdpTarget);
                        }
                        request.updateCdpTarget(cdpTarget);
                        request.onAuthRequired(event);
                    },
                ],
                [
                    'Network.dataReceived',
                    (params) => {
                        const request = this.getRequestById(params.requestId);
                        request?.updateCdpTarget(cdpTarget);
                        request?.onDataReceivedEvent(params);
                    },
                ],
                [
                    'Network.loadingFailed',
                    (params) => {
                        const request = this.#getOrCreateNetworkRequest(params.requestId, cdpTarget);
                        request.updateCdpTarget(cdpTarget);
                        request.onLoadingFailedEvent(params);
                    },
                ],
                [
                    'Network.loadingFinished',
                    (params) => {
                        const request = this.getRequestById(params.requestId);
                        request?.updateCdpTarget(cdpTarget);
                        request?.onLoadingFinishedEvent(params);
                    },
                ],
            ];
            for (const [event, listener] of listeners) {
                cdpClient.on(event, listener);
            }
        }
        async getCollectedData(params) {
            if (!this.#collectorsStorage.isCollected(params.request, params.dataType, params.collector)) {
                throw new NoSuchNetworkDataException(params.collector === undefined
                    ? `No collected ${params.dataType} data`
                    : `Collector ${params.collector} didn't collect ${params.dataType} data`);
            }
            if (params.disown && params.collector === undefined) {
                throw new InvalidArgumentException('Cannot disown collected data without collector ID');
            }
            const request = this.getRequestById(params.request);
            if (request === undefined) {
                throw new NoSuchNetworkDataException(`No data for ${params.request}`);
            }
            let result = undefined;
            switch (params.dataType) {
                case "response" :
                    result = await this.#getCollectedResponseData(request);
                    break;
                case "request" :
                    result = await this.#getCollectedRequestData(request);
                    break;
                default:
                    throw new UnsupportedOperationException(`Unsupported data type ${params.dataType}`);
            }
            if (params.disown && params.collector !== undefined) {
                this.#collectorsStorage.disownData(request.id, params.dataType, params.collector);
                this.disposeRequest(request.id);
            }
            return result;
        }
        async #getCollectedResponseData(request) {
            try {
                const responseBody = await request.cdpClient.sendCommand('Network.getResponseBody', { requestId: request.id });
                return {
                    bytes: {
                        type: responseBody.base64Encoded ? 'base64' : 'string',
                        value: responseBody.body,
                    },
                };
            }
            catch (error) {
                if (error.code === -32e3  &&
                    error.message === 'No resource with given identifier found') {
                    throw new NoSuchNetworkDataException(`Response data was disposed`);
                }
                if (error.code === -32001 ) {
                    throw new NoSuchNetworkDataException(`Response data is disposed after the related page`);
                }
                throw error;
            }
        }
        async #getCollectedRequestData(request) {
            const requestPostData = await request.cdpClient.sendCommand('Network.getRequestPostData', { requestId: request.id });
            return {
                bytes: {
                    type: 'string',
                    value: requestPostData.postData,
                },
            };
        }
        collectIfNeeded(request, dataType) {
            this.#collectorsStorage.collectIfNeeded(request, dataType, request.cdpTarget.topLevelId, request.cdpTarget.userContext);
        }
        getInterceptionStages(browsingContextId) {
            const stages = {
                request: false,
                response: false,
                auth: false,
            };
            for (const intercept of this.#intercepts.values()) {
                if (intercept.contexts &&
                    !intercept.contexts.includes(browsingContextId)) {
                    continue;
                }
                stages.request ||= intercept.phases.includes("beforeRequestSent" );
                stages.response ||= intercept.phases.includes("responseStarted" );
                stages.auth ||= intercept.phases.includes("authRequired" );
            }
            return stages;
        }
        getInterceptsForPhase(request, phase) {
            if (request.url === NetworkRequest.unknownParameter) {
                return new Set();
            }
            const intercepts = new Set();
            for (const [interceptId, intercept] of this.#intercepts.entries()) {
                if (!intercept.phases.includes(phase) ||
                    (intercept.contexts &&
                        !intercept.contexts.includes(request.cdpTarget.topLevelId))) {
                    continue;
                }
                if (intercept.urlPatterns.length === 0) {
                    intercepts.add(interceptId);
                    continue;
                }
                for (const pattern of intercept.urlPatterns) {
                    if (matchUrlPattern(pattern, request.url)) {
                        intercepts.add(interceptId);
                        break;
                    }
                }
            }
            return intercepts;
        }
        disposeRequestMap(sessionId) {
            for (const request of this.#requests.values()) {
                if (request.cdpClient.sessionId === sessionId) {
                    this.#requests.delete(request.id);
                    request.dispose();
                }
            }
        }
        addIntercept(value) {
            const interceptId = uuidv4();
            this.#intercepts.set(interceptId, value);
            return interceptId;
        }
        removeIntercept(intercept) {
            if (!this.#intercepts.has(intercept)) {
                throw new NoSuchInterceptException(`Intercept '${intercept}' does not exist.`);
            }
            this.#intercepts.delete(intercept);
        }
        getRequestsByTarget(target) {
            const requests = [];
            for (const request of this.#requests.values()) {
                if (request.cdpTarget === target) {
                    requests.push(request);
                }
            }
            return requests;
        }
        getRequestById(id) {
            return this.#requests.get(id);
        }
        getRequestByFetchId(fetchId) {
            for (const request of this.#requests.values()) {
                if (request.fetchId === fetchId) {
                    return request;
                }
            }
            return;
        }
        addRequest(request) {
            this.#requests.set(request.id, request);
        }
        disposeRequest(id) {
            if (this.#collectorsStorage.isCollected(id)) {
                return;
            }
            this.#requests.delete(id);
        }
        getNavigationId(contextId) {
            if (contextId === undefined) {
                return null;
            }
            return (this.#browsingContextStorage.findContext(contextId)?.navigationId ?? null);
        }
        set defaultCacheBehavior(behavior) {
            this.#defaultCacheBehavior = behavior;
        }
        get defaultCacheBehavior() {
            return this.#defaultCacheBehavior;
        }
        addDataCollector(params) {
            return this.#collectorsStorage.addDataCollector(params);
        }
        removeDataCollector(params) {
            const releasedRequests = this.#collectorsStorage.removeDataCollector(params.collector);
            releasedRequests.map((request) => this.disposeRequest(request));
        }
        disownData(params) {
            if (!this.#collectorsStorage.isCollected(params.request, params.dataType, params.collector)) {
                throw new NoSuchNetworkDataException(`Collector ${params.collector} didn't collect ${params.dataType} data`);
            }
            this.#collectorsStorage.disownData(params.request, params.dataType, params.collector);
            this.disposeRequest(params.request);
        }
    }

    class CdpTarget {
        #id;
        userContext;
        #cdpClient;
        #browserCdpClient;
        #parentCdpClient;
        #realmStorage;
        #eventManager;
        #preloadScriptStorage;
        #browsingContextStorage;
        #networkStorage;
        contextConfigStorage;
        #unblocked = new Deferred();
        #defaultUserAgent;
        #logger;
        #windowId;
        #deviceAccessEnabled = false;
        #cacheDisableState = false;
        #preloadEnabled = false;
        #fetchDomainStages = {
            request: false,
            response: false,
            auth: false,
        };
        static create(targetId, cdpClient, browserCdpClient, parentCdpClient, realmStorage, eventManager, preloadScriptStorage, browsingContextStorage, networkStorage, configStorage, userContext, defaultUserAgent, logger) {
            const cdpTarget = new CdpTarget(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, configStorage, networkStorage, userContext, defaultUserAgent, logger);
            LogManager.create(cdpTarget, realmStorage, eventManager, logger);
            cdpTarget.#setEventListeners();
            void cdpTarget.#unblock();
            return cdpTarget;
        }
        constructor(targetId, cdpClient, browserCdpClient, parentCdpClient, eventManager, realmStorage, preloadScriptStorage, browsingContextStorage, configStorage, networkStorage, userContext, defaultUserAgent, logger) {
            this.#defaultUserAgent = defaultUserAgent;
            this.userContext = userContext;
            this.#id = targetId;
            this.#cdpClient = cdpClient;
            this.#browserCdpClient = browserCdpClient;
            this.#parentCdpClient = parentCdpClient;
            this.#eventManager = eventManager;
            this.#realmStorage = realmStorage;
            this.#preloadScriptStorage = preloadScriptStorage;
            this.#networkStorage = networkStorage;
            this.#browsingContextStorage = browsingContextStorage;
            this.contextConfigStorage = configStorage;
            this.#logger = logger;
        }
        get unblocked() {
            return this.#unblocked;
        }
        get id() {
            return this.#id;
        }
        get cdpClient() {
            return this.#cdpClient;
        }
        get parentCdpClient() {
            return this.#parentCdpClient;
        }
        get browserCdpClient() {
            return this.#browserCdpClient;
        }
        get cdpSessionId() {
            return this.#cdpClient.sessionId;
        }
        get windowId() {
            if (this.#windowId === undefined) {
                this.#logger?.(LogType.debugError, 'Getting windowId before it was set, returning 0');
            }
            return this.#windowId ?? 0;
        }
        async #unblock() {
            const config = this.contextConfigStorage.getActiveConfig(this.topLevelId, this.userContext);
            const results = await Promise.allSettled([
                this.#cdpClient.sendCommand('Page.enable', {
                    enableFileChooserOpenedEvent: true,
                }),
                ...(this.#ignoreFileDialog()
                    ? []
                    : [
                        this.#cdpClient.sendCommand('Page.setInterceptFileChooserDialog', {
                            enabled: true,
                            cancel: true,
                        }),
                    ]),
                this.#cdpClient
                    .sendCommand('Page.getFrameTree')
                    .then((frameTree) => this.#restoreFrameTreeState(frameTree.frameTree)),
                this.#cdpClient.sendCommand('Runtime.enable'),
                this.#cdpClient.sendCommand('Page.setLifecycleEventsEnabled', {
                    enabled: true,
                }),
                this.#cdpClient
                    .sendCommand('Network.enable', {
                    enableDurableMessages: config.disableNetworkDurableMessages !== true,
                    maxTotalBufferSize: MAX_TOTAL_COLLECTED_SIZE,
                })
                    .then(() => this.toggleNetworkIfNeeded()),
                this.#cdpClient.sendCommand('Target.setAutoAttach', {
                    autoAttach: true,
                    waitForDebuggerOnStart: true,
                    flatten: true,
                }),
                this.#updateWindowId(),
                this.#setUserContextConfig(config),
                this.#initAndEvaluatePreloadScripts(),
                this.#cdpClient.sendCommand('Runtime.runIfWaitingForDebugger'),
                this.#parentCdpClient.sendCommand('Runtime.runIfWaitingForDebugger'),
                this.toggleDeviceAccessIfNeeded(),
                this.togglePreloadIfNeeded(),
            ]);
            for (const result of results) {
                if (result instanceof Error) {
                    this.#logger?.(LogType.debugError, 'Error happened when configuring a new target', result);
                }
            }
            this.#unblocked.resolve({
                kind: 'success',
                value: undefined,
            });
        }
        #restoreFrameTreeState(frameTree) {
            const frame = frameTree.frame;
            const maybeContext = this.#browsingContextStorage.findContext(frame.id);
            if (maybeContext !== undefined) {
                if (maybeContext.parentId === null &&
                    frame.parentId !== null &&
                    frame.parentId !== undefined) {
                    maybeContext.parentId = frame.parentId;
                }
            }
            if (maybeContext === undefined && frame.parentId !== undefined) {
                const parentBrowsingContext = this.#browsingContextStorage.getContext(frame.parentId);
                BrowsingContextImpl.create(frame.id, frame.parentId, this.userContext, parentBrowsingContext.cdpTarget, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, this.contextConfigStorage, frame.url, undefined, this.#logger);
            }
            frameTree.childFrames?.map((frameTree) => this.#restoreFrameTreeState(frameTree));
        }
        async toggleFetchIfNeeded() {
            const stages = this.#networkStorage.getInterceptionStages(this.topLevelId);
            if (this.#fetchDomainStages.request === stages.request &&
                this.#fetchDomainStages.response === stages.response &&
                this.#fetchDomainStages.auth === stages.auth) {
                return;
            }
            const patterns = [];
            this.#fetchDomainStages = stages;
            if (stages.request || stages.auth) {
                patterns.push({
                    urlPattern: '*',
                    requestStage: 'Request',
                });
            }
            if (stages.response) {
                patterns.push({
                    urlPattern: '*',
                    requestStage: 'Response',
                });
            }
            if (patterns.length) {
                await this.#cdpClient.sendCommand('Fetch.enable', {
                    patterns,
                    handleAuthRequests: stages.auth,
                });
            }
            else {
                const blockedRequest = this.#networkStorage
                    .getRequestsByTarget(this)
                    .filter((request) => request.interceptPhase);
                void Promise.allSettled(blockedRequest.map((request) => request.waitNextPhase))
                    .then(async () => {
                    const blockedRequest = this.#networkStorage
                        .getRequestsByTarget(this)
                        .filter((request) => request.interceptPhase);
                    if (blockedRequest.length) {
                        return await this.toggleFetchIfNeeded();
                    }
                    return await this.#cdpClient.sendCommand('Fetch.disable');
                })
                    .catch((error) => {
                    this.#logger?.(LogType.bidi, 'Disable failed', error);
                });
            }
        }
        async toggleNetworkIfNeeded() {
            try {
                await Promise.all([
                    this.toggleSetCacheDisabled(),
                    this.toggleFetchIfNeeded(),
                ]);
            }
            catch (err) {
                this.#logger?.(LogType.debugError, err);
                if (!this.#isExpectedError(err)) {
                    throw err;
                }
            }
        }
        async toggleSetCacheDisabled(disable) {
            const defaultCacheDisabled = this.#networkStorage.defaultCacheBehavior === 'bypass';
            const cacheDisabled = disable ?? defaultCacheDisabled;
            if (this.#cacheDisableState === cacheDisabled) {
                return;
            }
            this.#cacheDisableState = cacheDisabled;
            try {
                await this.#cdpClient.sendCommand('Network.setCacheDisabled', {
                    cacheDisabled,
                });
            }
            catch (err) {
                this.#logger?.(LogType.debugError, err);
                this.#cacheDisableState = !cacheDisabled;
                if (!this.#isExpectedError(err)) {
                    throw err;
                }
            }
        }
        async toggleDeviceAccessIfNeeded() {
            const enabled = this.isSubscribedTo(Bluetooth$2.EventNames.RequestDevicePromptUpdated);
            if (this.#deviceAccessEnabled === enabled) {
                return;
            }
            this.#deviceAccessEnabled = enabled;
            try {
                await this.#cdpClient.sendCommand(enabled ? 'DeviceAccess.enable' : 'DeviceAccess.disable');
            }
            catch (err) {
                this.#logger?.(LogType.debugError, err);
                this.#deviceAccessEnabled = !enabled;
                if (!this.#isExpectedError(err)) {
                    throw err;
                }
            }
        }
        async togglePreloadIfNeeded() {
            const enabled = this.isSubscribedTo(Speculation.EventNames.PrefetchStatusUpdated);
            if (this.#preloadEnabled === enabled) {
                return;
            }
            this.#preloadEnabled = enabled;
            try {
                await this.#cdpClient.sendCommand(enabled ? 'Preload.enable' : 'Preload.disable');
            }
            catch (err) {
                this.#logger?.(LogType.debugError, err);
                this.#preloadEnabled = !enabled;
                if (!this.#isExpectedError(err)) {
                    throw err;
                }
            }
        }
        #isExpectedError(err) {
            const error = err;
            return ((error.code === -32001 &&
                error.message === 'Session with given id not found.') ||
                this.#cdpClient.isCloseError(err));
        }
        #setEventListeners() {
            this.#cdpClient.on('*', (event, params) => {
                if (typeof event !== 'string') {
                    return;
                }
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: `goog:cdp.${event}`,
                    params: {
                        event,
                        params,
                        session: this.cdpSessionId,
                    },
                }, this.id);
            });
        }
        async #enableFetch(stages) {
            const patterns = [];
            if (stages.request || stages.auth) {
                patterns.push({
                    urlPattern: '*',
                    requestStage: 'Request',
                });
            }
            if (stages.response) {
                patterns.push({
                    urlPattern: '*',
                    requestStage: 'Response',
                });
            }
            if (patterns.length) {
                const oldStages = this.#fetchDomainStages;
                this.#fetchDomainStages = stages;
                try {
                    await this.#cdpClient.sendCommand('Fetch.enable', {
                        patterns,
                        handleAuthRequests: stages.auth,
                    });
                }
                catch {
                    this.#fetchDomainStages = oldStages;
                }
            }
        }
        async #disableFetch() {
            const blockedRequest = this.#networkStorage
                .getRequestsByTarget(this)
                .filter((request) => request.interceptPhase);
            if (blockedRequest.length === 0) {
                this.#fetchDomainStages = {
                    request: false,
                    response: false,
                    auth: false,
                };
                await this.#cdpClient.sendCommand('Fetch.disable');
            }
        }
        async toggleNetwork() {
            const stages = this.#networkStorage.getInterceptionStages(this.topLevelId);
            const fetchEnable = Object.values(stages).some((value) => value);
            const fetchChanged = this.#fetchDomainStages.request !== stages.request ||
                this.#fetchDomainStages.response !== stages.response ||
                this.#fetchDomainStages.auth !== stages.auth;
            this.#logger?.(LogType.debugInfo, 'Toggle Network', `Fetch (${fetchEnable}) ${fetchChanged}`);
            if (fetchEnable && fetchChanged) {
                await this.#enableFetch(stages);
            }
            if (!fetchEnable && fetchChanged) {
                await this.#disableFetch();
            }
        }
        getChannels() {
            return this.#preloadScriptStorage
                .find()
                .flatMap((script) => script.channels);
        }
        async #updateWindowId() {
            const { windowId } = await this.#browserCdpClient.sendCommand('Browser.getWindowForTarget', { targetId: this.id });
            this.#windowId = windowId;
        }
        async #initAndEvaluatePreloadScripts() {
            await Promise.all(this.#preloadScriptStorage
                .find({
                targetId: this.topLevelId,
            })
                .map((script) => {
                return script.initInTarget(this, true);
            }));
        }
        async setDeviceMetricsOverride(viewport, devicePixelRatio, screenOrientation, screenArea, scrollbarType = null) {
            if (viewport === null &&
                devicePixelRatio === null &&
                screenOrientation === null &&
                screenArea === null &&
                scrollbarType === null) {
                await this.cdpClient.sendCommand('Emulation.clearDeviceMetricsOverride');
                return;
            }
            const metricsOverride = {
                width: viewport?.width ?? 0,
                height: viewport?.height ?? 0,
                deviceScaleFactor: devicePixelRatio ?? 0,
                screenOrientation: this.#toCdpScreenOrientationAngle(screenOrientation) ?? undefined,
                mobile: false,
                screenWidth: screenArea?.width,
                screenHeight: screenArea?.height,
                scrollbarType: scrollbarType === 'overlay' ? 'overlay' : 'default',
            };
            await this.cdpClient.sendCommand('Emulation.setDeviceMetricsOverride', metricsOverride);
        }
        async #setUserContextConfig(config) {
            const promises = [];
            promises.push(this.#cdpClient
                .sendCommand('Page.setPrerenderingAllowed', {
                isAllowed: !config.prerenderingDisabled,
            })
                .catch(() => {
            }));
            if (config.viewport !== undefined ||
                config.devicePixelRatio !== undefined ||
                config.screenOrientation !== undefined ||
                config.screenArea !== undefined) {
                promises.push(this.setDeviceMetricsOverride(config.viewport ?? null, config.devicePixelRatio ?? null, config.screenOrientation ?? null, config.screenArea ?? null, config.scrollbarType ?? null).catch(() => {
                }));
            }
            if (config.geolocation !== undefined && config.geolocation !== null) {
                promises.push(this.setGeolocationOverride(config.geolocation));
            }
            if (config.locale !== undefined) {
                promises.push(this.setLocaleOverride(config.locale));
            }
            if (config.timezone !== undefined) {
                promises.push(this.setTimezoneOverride(config.timezone));
            }
            if (config.extraHeaders !== undefined) {
                promises.push(this.setExtraHeaders(config.extraHeaders));
            }
            if (config.userAgent !== undefined ||
                config.locale !== undefined ||
                config.clientHints !== undefined) {
                promises.push(this.setUserAgentAndAcceptLanguage(config.userAgent, config.locale, config.clientHints));
            }
            if (config.scriptingEnabled !== undefined) {
                promises.push(this.setScriptingEnabled(config.scriptingEnabled));
            }
            if (config.acceptInsecureCerts !== undefined) {
                promises.push(this.cdpClient.sendCommand('Security.setIgnoreCertificateErrors', {
                    ignore: config.acceptInsecureCerts,
                }));
            }
            if (config.emulatedNetworkConditions !== undefined) {
                promises.push(this.setEmulatedNetworkConditions(config.emulatedNetworkConditions));
            }
            if (config.maxTouchPoints !== undefined) {
                promises.push(this.setTouchOverride(config.maxTouchPoints));
            }
            await Promise.all(promises);
        }
        get topLevelId() {
            return (this.#browsingContextStorage.findTopLevelContextId(this.id) ?? this.id);
        }
        isSubscribedTo(moduleOrEvent) {
            return this.#eventManager.subscriptionManager.isSubscribedTo(moduleOrEvent, this.topLevelId);
        }
        #ignoreFileDialog() {
            const config = this.contextConfigStorage.getActiveConfig(this.topLevelId, this.userContext);
            return ((config.userPromptHandler?.file ??
                config.userPromptHandler?.default ??
                "ignore" ) ===
                "ignore" );
        }
        async setGeolocationOverride(geolocation) {
            if (geolocation === null) {
                await this.cdpClient.sendCommand('Emulation.clearGeolocationOverride');
            }
            else if ('type' in geolocation) {
                if (geolocation.type !== 'positionUnavailable') {
                    throw new UnknownErrorException(`Unknown geolocation error ${geolocation.type}`);
                }
                await this.cdpClient.sendCommand('Emulation.setGeolocationOverride', {});
            }
            else if ('latitude' in geolocation) {
                await this.cdpClient.sendCommand('Emulation.setGeolocationOverride', {
                    latitude: geolocation.latitude,
                    longitude: geolocation.longitude,
                    accuracy: geolocation.accuracy ?? 1,
                    altitude: geolocation.altitude ?? undefined,
                    altitudeAccuracy: geolocation.altitudeAccuracy ?? undefined,
                    heading: geolocation.heading ?? undefined,
                    speed: geolocation.speed ?? undefined,
                });
            }
            else {
                throw new UnknownErrorException('Unexpected geolocation coordinates value');
            }
        }
        async setTouchOverride(maxTouchPoints) {
            const touchEmulationParams = {
                enabled: maxTouchPoints !== null,
            };
            if (maxTouchPoints !== null) {
                touchEmulationParams.maxTouchPoints = maxTouchPoints;
            }
            await this.cdpClient.sendCommand('Emulation.setTouchEmulationEnabled', touchEmulationParams);
        }
        #toCdpScreenOrientationAngle(orientation) {
            if (orientation === null) {
                return null;
            }
            if (orientation.natural === "portrait" ) {
                switch (orientation.type) {
                    case 'portrait-primary':
                        return {
                            angle: 0,
                            type: 'portraitPrimary',
                        };
                    case 'landscape-primary':
                        return {
                            angle: 90,
                            type: 'landscapePrimary',
                        };
                    case 'portrait-secondary':
                        return {
                            angle: 180,
                            type: 'portraitSecondary',
                        };
                    case 'landscape-secondary':
                        return {
                            angle: 270,
                            type: 'landscapeSecondary',
                        };
                    default:
                        throw new UnknownErrorException(`Unexpected screen orientation type ${orientation.type}`);
                }
            }
            if (orientation.natural === "landscape" ) {
                switch (orientation.type) {
                    case 'landscape-primary':
                        return {
                            angle: 0,
                            type: 'landscapePrimary',
                        };
                    case 'portrait-primary':
                        return {
                            angle: 90,
                            type: 'portraitPrimary',
                        };
                    case 'landscape-secondary':
                        return {
                            angle: 180,
                            type: 'landscapeSecondary',
                        };
                    case 'portrait-secondary':
                        return {
                            angle: 270,
                            type: 'portraitSecondary',
                        };
                    default:
                        throw new UnknownErrorException(`Unexpected screen orientation type ${orientation.type}`);
                }
            }
            throw new UnknownErrorException(`Unexpected orientation natural ${orientation.natural}`);
        }
        async setLocaleOverride(locale) {
            if (locale === null) {
                await this.cdpClient.sendCommand('Emulation.setLocaleOverride', {});
            }
            else {
                await this.cdpClient.sendCommand('Emulation.setLocaleOverride', {
                    locale,
                });
            }
        }
        async setScriptingEnabled(scriptingEnabled) {
            await this.cdpClient.sendCommand('Emulation.setScriptExecutionDisabled', {
                value: scriptingEnabled === false,
            });
        }
        async setTimezoneOverride(timezone) {
            if (timezone === null) {
                await this.cdpClient.sendCommand('Emulation.setTimezoneOverride', {
                    timezoneId: '',
                });
            }
            else {
                await this.cdpClient.sendCommand('Emulation.setTimezoneOverride', {
                    timezoneId: timezone,
                });
            }
        }
        async setExtraHeaders(headers) {
            await this.cdpClient.sendCommand('Network.setExtraHTTPHeaders', {
                headers,
            });
        }
        async setUserAgentAndAcceptLanguage(userAgent, acceptLanguage, clientHints) {
            const userAgentMetadata = clientHints
                ? {
                    brands: clientHints.brands?.map((b) => ({
                        brand: b.brand,
                        version: b.version,
                    })),
                    fullVersionList: clientHints.fullVersionList,
                    platform: clientHints.platform ?? '',
                    platformVersion: clientHints.platformVersion ?? '',
                    architecture: clientHints.architecture ?? '',
                    model: clientHints.model ?? '',
                    mobile: clientHints.mobile ?? false,
                    bitness: clientHints.bitness ?? undefined,
                    wow64: clientHints.wow64 ?? undefined,
                    formFactors: clientHints.formFactors ?? undefined,
                }
                : undefined;
            await this.cdpClient.sendCommand('Emulation.setUserAgentOverride', {
                userAgent: userAgent || (userAgentMetadata ? this.#defaultUserAgent : ''),
                acceptLanguage: acceptLanguage ?? undefined,
                platform: clientHints?.platform ?? undefined,
                userAgentMetadata,
            });
        }
        async setEmulatedNetworkConditions(networkConditions) {
            if (networkConditions !== null && networkConditions.type !== 'offline') {
                throw new UnsupportedOperationException(`Unsupported network conditions ${networkConditions.type}`);
            }
            await Promise.all([
                this.cdpClient.sendCommand('Network.emulateNetworkConditionsByRule', {
                    offline: networkConditions?.type === 'offline',
                    matchedNetworkConditions: [
                        {
                            urlPattern: '',
                            latency: 0,
                            downloadThroughput: -1,
                            uploadThroughput: -1,
                        },
                    ],
                }),
                this.cdpClient.sendCommand('Network.overrideNetworkState', {
                    offline: networkConditions?.type === 'offline',
                    latency: 0,
                    downloadThroughput: -1,
                    uploadThroughput: -1,
                }),
            ]);
        }
    }

    const cdpToBidiTargetTypes = {
        service_worker: 'service-worker',
        shared_worker: 'shared-worker',
        worker: 'dedicated-worker',
    };
    class CdpTargetManager {
        #browserCdpClient;
        #cdpConnection;
        #targetKeysToBeIgnoredByAutoAttach = new Set();
        #selfTargetId;
        #eventManager;
        #browsingContextStorage;
        #networkStorage;
        #bluetoothProcessor;
        #preloadScriptStorage;
        #realmStorage;
        #configStorage;
        #speculationProcessor;
        #defaultUserContextId;
        #defaultUserAgent;
        #logger;
        constructor(cdpConnection, browserCdpClient, selfTargetId, eventManager, browsingContextStorage, realmStorage, networkStorage, configStorage, bluetoothProcessor, speculationProcessor, preloadScriptStorage, defaultUserContextId, defaultUserAgent, logger) {
            this.#cdpConnection = cdpConnection;
            this.#browserCdpClient = browserCdpClient;
            this.#targetKeysToBeIgnoredByAutoAttach.add(selfTargetId);
            this.#selfTargetId = selfTargetId;
            this.#eventManager = eventManager;
            this.#browsingContextStorage = browsingContextStorage;
            this.#preloadScriptStorage = preloadScriptStorage;
            this.#networkStorage = networkStorage;
            this.#configStorage = configStorage;
            this.#bluetoothProcessor = bluetoothProcessor;
            this.#speculationProcessor = speculationProcessor;
            this.#realmStorage = realmStorage;
            this.#defaultUserContextId = defaultUserContextId;
            this.#defaultUserAgent = defaultUserAgent;
            this.#logger = logger;
            this.#setEventListeners(browserCdpClient);
        }
        #setEventListeners(cdpClient) {
            cdpClient.on('Target.attachedToTarget', (params) => {
                this.#handleAttachedToTargetEvent(params, cdpClient);
            });
            cdpClient.on('Target.detachedFromTarget', this.#handleDetachedFromTargetEvent.bind(this));
            cdpClient.on('Target.targetInfoChanged', this.#handleTargetInfoChangedEvent.bind(this));
            cdpClient.on('Inspector.targetCrashed', () => {
                this.#handleTargetCrashedEvent(cdpClient);
            });
            cdpClient.on('Page.frameAttached', this.#handleFrameAttachedEvent.bind(this));
            cdpClient.on('Page.frameSubtreeWillBeDetached', this.#handleFrameSubtreeWillBeDetached.bind(this));
        }
        #handleFrameAttachedEvent(params) {
            const parentBrowsingContext = this.#browsingContextStorage.findContext(params.parentFrameId);
            if (parentBrowsingContext !== undefined) {
                BrowsingContextImpl.create(params.frameId, params.parentFrameId, parentBrowsingContext.userContext, parentBrowsingContext.cdpTarget, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, this.#configStorage,
                'about:blank', undefined, this.#logger);
            }
        }
        #handleFrameSubtreeWillBeDetached(params) {
            this.#browsingContextStorage.findContext(params.frameId)?.dispose(true);
        }
        #handleAttachedToTargetEvent(params, parentSessionCdpClient) {
            const { sessionId, targetInfo } = params;
            const targetCdpClient = this.#cdpConnection.getCdpClient(sessionId);
            const detach = async () => {
                await targetCdpClient
                    .sendCommand('Runtime.runIfWaitingForDebugger')
                    .then(() => parentSessionCdpClient.sendCommand('Target.detachFromTarget', params))
                    .catch((error) => this.#logger?.(LogType.debugError, error));
            };
            if (this.#selfTargetId === targetInfo.targetId) {
                void detach();
                return;
            }
            const targetKey = targetInfo.type === 'service_worker'
                ? `${parentSessionCdpClient.sessionId}_${targetInfo.targetId}`
                : targetInfo.targetId;
            if (this.#targetKeysToBeIgnoredByAutoAttach.has(targetKey)) {
                return;
            }
            this.#targetKeysToBeIgnoredByAutoAttach.add(targetKey);
            const userContext = targetInfo.browserContextId &&
                targetInfo.browserContextId !== this.#defaultUserContextId
                ? targetInfo.browserContextId
                : 'default';
            switch (targetInfo.type) {
                case 'tab': {
                    this.#setEventListeners(targetCdpClient);
                    void (async () => {
                        await targetCdpClient.sendCommand('Target.setAutoAttach', {
                            autoAttach: true,
                            waitForDebuggerOnStart: true,
                            flatten: true,
                        });
                    })();
                    return;
                }
                case 'page':
                case 'iframe': {
                    const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo, userContext);
                    const maybeContext = this.#browsingContextStorage.findContext(targetInfo.targetId);
                    if (maybeContext && targetInfo.type === 'iframe') {
                        maybeContext.updateCdpTarget(cdpTarget);
                    }
                    else {
                        const parentId = this.#findFrameParentId(targetInfo, parentSessionCdpClient.sessionId);
                        BrowsingContextImpl.create(targetInfo.targetId, parentId, userContext, cdpTarget, this.#eventManager, this.#browsingContextStorage, this.#realmStorage, this.#configStorage,
                        targetInfo.url === '' ? 'about:blank' : targetInfo.url, targetInfo.openerFrameId ?? targetInfo.openerId, this.#logger);
                    }
                    return;
                }
                case 'service_worker':
                case 'worker': {
                    const realm = this.#realmStorage.findRealm({
                        cdpSessionId: parentSessionCdpClient.sessionId,
                        sandbox: null,
                    });
                    if (!realm) {
                        void detach();
                        return;
                    }
                    const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo, userContext);
                    this.#handleWorkerTarget(cdpToBidiTargetTypes[targetInfo.type], cdpTarget, realm);
                    return;
                }
                case 'shared_worker': {
                    const cdpTarget = this.#createCdpTarget(targetCdpClient, parentSessionCdpClient, targetInfo, userContext);
                    this.#handleWorkerTarget(cdpToBidiTargetTypes[targetInfo.type], cdpTarget);
                    return;
                }
            }
            void detach();
        }
        #findFrameParentId(targetInfo, parentSessionId) {
            if (targetInfo.type !== 'iframe') {
                return null;
            }
            const parentId = targetInfo.openerFrameId ?? targetInfo.openerId;
            if (parentId !== undefined) {
                return parentId;
            }
            if (parentSessionId !== undefined) {
                return (this.#browsingContextStorage.findContextBySession(parentSessionId)
                    ?.id ?? null);
            }
            return null;
        }
        #createCdpTarget(targetCdpClient, parentCdpClient, targetInfo, userContext) {
            this.#setEventListeners(targetCdpClient);
            this.#preloadScriptStorage.onCdpTargetCreated(targetInfo.targetId, userContext);
            const target = CdpTarget.create(targetInfo.targetId, targetCdpClient, this.#browserCdpClient, parentCdpClient, this.#realmStorage, this.#eventManager, this.#preloadScriptStorage, this.#browsingContextStorage, this.#networkStorage, this.#configStorage, userContext,
            this.#defaultUserAgent, this.#logger);
            this.#networkStorage.onCdpTargetCreated(target);
            this.#bluetoothProcessor.onCdpTargetCreated(target);
            this.#speculationProcessor.onCdpTargetCreated(target);
            return target;
        }
        #workers = new Map();
        #handleWorkerTarget(realmType, cdpTarget, ownerRealm) {
            cdpTarget.cdpClient.on('Runtime.executionContextCreated', (params) => {
                const { uniqueId, id, origin } = params.context;
                const workerRealm = new WorkerRealm(cdpTarget.cdpClient, this.#eventManager, id, this.#logger, serializeOrigin(origin), ownerRealm ? [ownerRealm] : [], uniqueId, this.#realmStorage, realmType);
                this.#workers.set(cdpTarget.cdpSessionId, workerRealm);
            });
        }
        #handleDetachedFromTargetEvent({ sessionId, targetId, }) {
            if (targetId) {
                this.#preloadScriptStorage.find({ targetId }).map((preloadScript) => {
                    preloadScript.dispose(targetId);
                });
            }
            const context = this.#browsingContextStorage.findContextBySession(sessionId);
            if (context) {
                context.dispose(true);
                return;
            }
            const worker = this.#workers.get(sessionId);
            if (worker) {
                this.#realmStorage.deleteRealms({
                    cdpSessionId: worker.cdpClient.sessionId,
                });
            }
        }
        #handleTargetInfoChangedEvent(params) {
            const context = this.#browsingContextStorage.findContext(params.targetInfo.targetId);
            if (context) {
                context.onTargetInfoChanged(params);
            }
        }
        #handleTargetCrashedEvent(cdpClient) {
            const realms = this.#realmStorage.findRealms({
                cdpSessionId: cdpClient.sessionId,
            });
            for (const realm of realms) {
                realm.dispose();
            }
        }
    }

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
    class BrowsingContextStorage {
        #contexts = new Map();
        #eventEmitter = new EventEmitter();
        getTopLevelContexts() {
            return this.getAllContexts().filter((context) => context.isTopLevelContext());
        }
        getAllContexts() {
            return Array.from(this.#contexts.values());
        }
        deleteContextById(id) {
            this.#contexts.delete(id);
        }
        deleteContext(context) {
            this.#contexts.delete(context.id);
        }
        addContext(context) {
            this.#contexts.set(context.id, context);
            this.#eventEmitter.emit("added" , {
                browsingContext: context,
            });
        }
        waitForContext(browsingContextId) {
            if (this.#contexts.has(browsingContextId)) {
                return Promise.resolve(this.getContext(browsingContextId));
            }
            return new Promise((resolve) => {
                const listener = (event) => {
                    if (event.browsingContext.id === browsingContextId) {
                        this.#eventEmitter.off("added" , listener);
                        resolve(event.browsingContext);
                    }
                };
                this.#eventEmitter.on("added" , listener);
            });
        }
        hasContext(id) {
            return this.#contexts.has(id);
        }
        findContext(id) {
            return this.#contexts.get(id);
        }
        findTopLevelContextId(id) {
            if (id === null) {
                return null;
            }
            const maybeContext = this.findContext(id);
            if (!maybeContext) {
                return null;
            }
            const parentId = maybeContext.parentId ?? null;
            if (parentId === null) {
                return id;
            }
            return this.findTopLevelContextId(parentId);
        }
        findContextBySession(sessionId) {
            for (const context of this.#contexts.values()) {
                if (context.cdpTarget.cdpSessionId === sessionId) {
                    return context;
                }
            }
            return;
        }
        getContext(id) {
            const result = this.findContext(id);
            if (result === undefined) {
                throw new NoSuchFrameException(`Context ${id} not found`);
            }
            return result;
        }
        verifyTopLevelContextsList(contexts) {
            const foundContexts = new Set();
            if (!contexts) {
                return foundContexts;
            }
            for (const contextId of contexts) {
                const context = this.getContext(contextId);
                if (context.isTopLevelContext()) {
                    foundContexts.add(context);
                }
                else {
                    throw new InvalidArgumentException(`Non top-level context '${contextId}' given.`);
                }
            }
            return foundContexts;
        }
        verifyContextsList(contexts) {
            if (!contexts.length) {
                return;
            }
            for (const contextId of contexts) {
                this.getContext(contextId);
            }
        }
    }

    /*
     * Copyright 2023 Google LLC.
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
    class PreloadScriptStorage {
        #scripts = new Set();
        find(filter) {
            if (!filter) {
                return [...this.#scripts];
            }
            return [...this.#scripts].filter((script) => {
                if (script.contexts === undefined && script.userContexts === undefined) {
                    return true;
                }
                if (filter.targetId !== undefined &&
                    script.targetIds.has(filter.targetId)) {
                    return true;
                }
                return false;
            });
        }
        add(preloadScript) {
            this.#scripts.add(preloadScript);
        }
        remove(id) {
            const script = [...this.#scripts].find((script) => script.id === id);
            if (script === undefined) {
                throw new NoSuchScriptException(`No preload script with id '${id}'`);
            }
            this.#scripts.delete(script);
        }
        getPreloadScript(id) {
            const script = [...this.#scripts].find((script) => script.id === id);
            if (script === undefined) {
                throw new NoSuchScriptException(`No preload script with id '${id}'`);
            }
            return script;
        }
        onCdpTargetCreated(targetId, userContext) {
            const scriptInUserContext = [...this.#scripts].filter((script) => {
                if (!script.userContexts && !script.contexts) {
                    return true;
                }
                return script.userContexts?.includes(userContext);
            });
            for (const script of scriptInUserContext) {
                script.targetIds.add(targetId);
            }
        }
    }

    class RealmStorage {
        #knownHandlesToRealmMap = new Map();
        #realmMap = new Map();
        hiddenSandboxes = new Set();
        get knownHandlesToRealmMap() {
            return this.#knownHandlesToRealmMap;
        }
        addRealm(realm) {
            this.#realmMap.set(realm.realmId, realm);
        }
        findRealms(filter) {
            const sandboxFilterValue = filter.sandbox === null ? undefined : filter.sandbox;
            return Array.from(this.#realmMap.values()).filter((realm) => {
                if (filter.realmId !== undefined && filter.realmId !== realm.realmId) {
                    return false;
                }
                if (filter.browsingContextId !== undefined &&
                    !realm.associatedBrowsingContexts
                        .map((browsingContext) => browsingContext.id)
                        .includes(filter.browsingContextId)) {
                    return false;
                }
                if (filter.sandbox !== undefined &&
                    (!(realm instanceof WindowRealm) ||
                        sandboxFilterValue !== realm.sandbox)) {
                    return false;
                }
                if (filter.executionContextId !== undefined &&
                    filter.executionContextId !== realm.executionContextId) {
                    return false;
                }
                if (filter.origin !== undefined && filter.origin !== realm.origin) {
                    return false;
                }
                if (filter.type !== undefined && filter.type !== realm.realmType) {
                    return false;
                }
                if (filter.cdpSessionId !== undefined &&
                    filter.cdpSessionId !== realm.cdpClient.sessionId) {
                    return false;
                }
                if (filter.isHidden !== undefined &&
                    filter.isHidden !== realm.isHidden()) {
                    return false;
                }
                return true;
            });
        }
        findRealm(filter) {
            return this.findRealms(filter)[0];
        }
        getRealm(filter) {
            const maybeRealm = this.findRealm(filter);
            if (maybeRealm === undefined) {
                throw new NoSuchFrameException(`Realm ${JSON.stringify(filter)} not found`);
            }
            return maybeRealm;
        }
        deleteRealms(filter) {
            this.findRealms(filter).map((realm) => {
                realm.dispose();
                this.#realmMap.delete(realm.realmId);
                Array.from(this.knownHandlesToRealmMap.entries())
                    .filter(([, r]) => r === realm.realmId)
                    .map(([handle]) => this.knownHandlesToRealmMap.delete(handle));
            });
        }
    }

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
    let Buffer$1 = class Buffer {
        #capacity;
        #entries = [];
        #onItemRemoved;
        constructor(capacity, onItemRemoved) {
            this.#capacity = capacity;
            this.#onItemRemoved = onItemRemoved;
        }
        get() {
            return this.#entries;
        }
        add(value) {
            this.#entries.push(value);
            while (this.#entries.length > this.#capacity) {
                const item = this.#entries.shift();
                if (item !== undefined) {
                    this.#onItemRemoved?.(item);
                }
            }
        }
    };

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
    class IdWrapper {
        static #counter = 0;
        #id;
        constructor() {
            this.#id = ++IdWrapper.#counter;
        }
        get id() {
            return this.#id;
        }
    }

    /**
     * Copyright 2023 Google LLC.
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
    function isCdpEvent(name) {
        return (name.split('.').at(0)?.startsWith(BiDiModule.Cdp) ?? false);
    }
    function assertSupportedEvent(name) {
        if (!EVENT_NAMES.has(name) && !isCdpEvent(name)) {
            throw new InvalidArgumentException(`Unknown event: ${name}`);
        }
    }

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
    function unrollEvents(events) {
        const allEvents = new Set();
        function addEvents(events) {
            for (const event of events) {
                allEvents.add(event);
            }
        }
        for (const event of events) {
            switch (event) {
                case BiDiModule.Bluetooth:
                    addEvents(Object.values(Bluetooth$2.EventNames));
                    break;
                case BiDiModule.BrowsingContext:
                    addEvents(Object.values(BrowsingContext$2.EventNames));
                    break;
                case BiDiModule.Input:
                    addEvents(Object.values(Input$2.EventNames));
                    break;
                case BiDiModule.Log:
                    addEvents(Object.values(Log$1.EventNames));
                    break;
                case BiDiModule.Network:
                    addEvents(Object.values(Network$2.EventNames));
                    break;
                case BiDiModule.Script:
                    addEvents(Object.values(Script$2.EventNames));
                    break;
                case BiDiModule.Speculation:
                    addEvents(Object.values(Speculation.EventNames));
                    break;
                default:
                    allEvents.add(event);
            }
        }
        return allEvents.values();
    }
    class SubscriptionManager {
        #subscriptions = [];
        #knownSubscriptionIds = new Set();
        #browsingContextStorage;
        constructor(browsingContextStorage) {
            this.#browsingContextStorage = browsingContextStorage;
        }
        getGoogChannelsSubscribedToEvent(eventName, contextId) {
            const googChannels = new Set();
            for (const subscription of this.#subscriptions) {
                if (this.#isSubscribedTo(subscription, eventName, contextId)) {
                    googChannels.add(subscription.googChannel);
                }
            }
            return Array.from(googChannels);
        }
        getGoogChannelsSubscribedToEventGlobally(eventName) {
            const googChannels = new Set();
            for (const subscription of this.#subscriptions) {
                if (this.#isSubscribedTo(subscription, eventName)) {
                    googChannels.add(subscription.googChannel);
                }
            }
            return Array.from(googChannels);
        }
        #isSubscribedTo(subscription, moduleOrEvent, browsingContextId) {
            let includesEvent = false;
            for (const eventName of subscription.eventNames) {
                if (
                eventName === moduleOrEvent ||
                    eventName === moduleOrEvent.split('.').at(0) ||
                    eventName.split('.').at(0) === moduleOrEvent) {
                    includesEvent = true;
                    break;
                }
            }
            if (!includesEvent) {
                return false;
            }
            if (subscription.userContextIds.size !== 0) {
                if (!browsingContextId) {
                    return false;
                }
                const context = this.#browsingContextStorage.findContext(browsingContextId);
                if (!context) {
                    return false;
                }
                return subscription.userContextIds.has(context.userContext);
            }
            if (subscription.topLevelTraversableIds.size !== 0) {
                if (!browsingContextId) {
                    return false;
                }
                const topLevelContext = this.#browsingContextStorage.findTopLevelContextId(browsingContextId);
                return (topLevelContext !== null &&
                    subscription.topLevelTraversableIds.has(topLevelContext));
            }
            return true;
        }
        isSubscribedTo(moduleOrEvent, contextId) {
            for (const subscription of this.#subscriptions) {
                if (this.#isSubscribedTo(subscription, moduleOrEvent, contextId)) {
                    return true;
                }
            }
            return false;
        }
        subscribe(eventNames, contextIds, userContextIds, googChannel) {
            const subscription = {
                id: uuidv4(),
                eventNames: new Set(unrollEvents(eventNames)),
                topLevelTraversableIds: new Set(contextIds.map((contextId) => {
                    const topLevelContext = this.#browsingContextStorage.findTopLevelContextId(contextId);
                    if (!topLevelContext) {
                        throw new NoSuchFrameException(`Top-level navigable not found for context id ${contextId}`);
                    }
                    return topLevelContext;
                })),
                userContextIds: new Set(userContextIds),
                googChannel,
            };
            this.#subscriptions.push(subscription);
            this.#knownSubscriptionIds.add(subscription.id);
            return subscription;
        }
        unsubscribe(inputEventNames, googChannel) {
            const eventNames = new Set(unrollEvents(inputEventNames));
            const newSubscriptions = [];
            const eventsMatched = new Set();
            for (const subscription of this.#subscriptions) {
                if (subscription.googChannel !== googChannel) {
                    newSubscriptions.push(subscription);
                    continue;
                }
                if (subscription.userContextIds.size !== 0) {
                    newSubscriptions.push(subscription);
                    continue;
                }
                if (intersection(subscription.eventNames, eventNames).size === 0) {
                    newSubscriptions.push(subscription);
                    continue;
                }
                if (subscription.topLevelTraversableIds.size !== 0) {
                    newSubscriptions.push(subscription);
                    continue;
                }
                const subscriptionEventNames = new Set(subscription.eventNames);
                for (const eventName of eventNames) {
                    if (subscriptionEventNames.has(eventName)) {
                        eventsMatched.add(eventName);
                        subscriptionEventNames.delete(eventName);
                    }
                }
                if (subscriptionEventNames.size !== 0) {
                    newSubscriptions.push({
                        ...subscription,
                        eventNames: subscriptionEventNames,
                    });
                }
            }
            if (!equal(eventsMatched, eventNames)) {
                throw new InvalidArgumentException('No subscription found');
            }
            this.#subscriptions = newSubscriptions;
        }
        unsubscribeById(subscriptionIds) {
            const subscriptionIdsSet = new Set(subscriptionIds);
            const unknownIds = difference(subscriptionIdsSet, this.#knownSubscriptionIds);
            if (unknownIds.size !== 0) {
                throw new InvalidArgumentException('No subscription found');
            }
            this.#subscriptions = this.#subscriptions.filter((subscription) => {
                return !subscriptionIdsSet.has(subscription.id);
            });
            this.#knownSubscriptionIds = difference(this.#knownSubscriptionIds, subscriptionIdsSet);
        }
    }
    function intersection(setA, setB) {
        const result = new Set();
        for (const a of setA) {
            if (setB.has(a)) {
                result.add(a);
            }
        }
        return result;
    }
    function difference(setA, setB) {
        const result = new Set();
        for (const a of setA) {
            if (!setB.has(a)) {
                result.add(a);
            }
        }
        return result;
    }
    function equal(setA, setB) {
        if (setA.size !== setB.size) {
            return false;
        }
        for (const a of setA) {
            if (!setB.has(a)) {
                return false;
            }
        }
        return true;
    }

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
    var _a$2;
    class EventWrapper {
        #idWrapper = new IdWrapper();
        #contextId;
        #event;
        constructor(event, contextId) {
            this.#event = event;
            this.#contextId = contextId;
        }
        get id() {
            return this.#idWrapper.id;
        }
        get contextId() {
            return this.#contextId;
        }
        get event() {
            return this.#event;
        }
    }
    const eventBufferLength = new Map([[Log$1.EventNames.LogEntryAdded, 100]]);
    class EventManager extends EventEmitter {
        #eventToContextsMap = new DefaultMap(() => new Set());
        #eventBuffers = new Map();
        #lastMessageSent = new Map();
        #subscriptionManager;
        #browsingContextStorage;
        #subscribeHooks;
        #userContextStorage;
        constructor(browsingContextStorage, userContextStorage) {
            super();
            this.#browsingContextStorage = browsingContextStorage;
            this.#userContextStorage = userContextStorage;
            this.#subscriptionManager = new SubscriptionManager(browsingContextStorage);
            this.#subscribeHooks = new DefaultMap(() => []);
        }
        get subscriptionManager() {
            return this.#subscriptionManager;
        }
        static #getMapKey(eventName, browsingContext) {
            return JSON.stringify({ eventName, browsingContext });
        }
        addSubscribeHook(event, hook) {
            this.#subscribeHooks.get(event).push(hook);
        }
        registerEvent(event, contextId) {
            this.registerPromiseEvent(Promise.resolve({
                kind: 'success',
                value: event,
            }), contextId, event.method);
        }
        registerGlobalEvent(event) {
            this.registerGlobalPromiseEvent(Promise.resolve({
                kind: 'success',
                value: event,
            }), event.method);
        }
        registerPromiseEvent(event, contextId, eventName) {
            const eventWrapper = new EventWrapper(event, contextId);
            const sortedGoogChannels = this.#subscriptionManager.getGoogChannelsSubscribedToEvent(eventName, contextId);
            this.#bufferEvent(eventWrapper, eventName);
            for (const googChannel of sortedGoogChannels) {
                this.emit("event" , {
                    message: OutgoingMessage.createFromPromise(event, googChannel),
                    event: eventName,
                });
                this.#markEventSent(eventWrapper, googChannel, eventName);
            }
        }
        registerGlobalPromiseEvent(event, eventName) {
            const eventWrapper = new EventWrapper(event, null);
            const sortedGoogChannels = this.#subscriptionManager.getGoogChannelsSubscribedToEventGlobally(eventName);
            this.#bufferEvent(eventWrapper, eventName);
            for (const googChannel of sortedGoogChannels) {
                this.emit("event" , {
                    message: OutgoingMessage.createFromPromise(event, googChannel),
                    event: eventName,
                });
                this.#markEventSent(eventWrapper, googChannel, eventName);
            }
        }
        async subscribe(eventNames, contextIds, userContextIds, googChannel) {
            for (const name of eventNames) {
                assertSupportedEvent(name);
            }
            if (userContextIds.length && contextIds.length) {
                throw new InvalidArgumentException('Both userContexts and contexts cannot be specified.');
            }
            this.#browsingContextStorage.verifyContextsList(contextIds);
            await this.#userContextStorage.verifyUserContextIdList(userContextIds);
            const unrolledEventNames = new Set(unrollEvents(eventNames));
            const subscribeStepEvents = new Map();
            const subscriptionNavigableIds = new Set(contextIds.length
                ? contextIds.map((contextId) => {
                    const id = this.#browsingContextStorage.findTopLevelContextId(contextId);
                    if (!id) {
                        throw new InvalidArgumentException('Invalid context id');
                    }
                    return id;
                })
                : this.#browsingContextStorage.getTopLevelContexts().map((c) => c.id));
            for (const eventName of unrolledEventNames) {
                const subscribedNavigableIds = new Set(this.#browsingContextStorage
                    .getTopLevelContexts()
                    .map((c) => c.id)
                    .filter((id) => {
                    return this.#subscriptionManager.isSubscribedTo(eventName, id);
                }));
                subscribeStepEvents.set(eventName, difference(subscriptionNavigableIds, subscribedNavigableIds));
            }
            const subscription = this.#subscriptionManager.subscribe(eventNames, contextIds, userContextIds, googChannel);
            for (const eventName of subscription.eventNames) {
                for (const contextId of subscriptionNavigableIds) {
                    for (const eventWrapper of this.#getBufferedEvents(eventName, contextId, googChannel)) {
                        this.emit("event" , {
                            message: OutgoingMessage.createFromPromise(eventWrapper.event, googChannel),
                            event: eventName,
                        });
                        this.#markEventSent(eventWrapper, googChannel, eventName);
                    }
                }
            }
            for (const [eventName, contextIds] of subscribeStepEvents) {
                for (const contextId of contextIds) {
                    this.#subscribeHooks.get(eventName).forEach((hook) => hook(contextId));
                }
            }
            await this.toggleModulesIfNeeded();
            return subscription.id;
        }
        async unsubscribe(eventNames, googChannel) {
            for (const name of eventNames) {
                assertSupportedEvent(name);
            }
            this.#subscriptionManager.unsubscribe(eventNames, googChannel);
            await this.toggleModulesIfNeeded();
        }
        async unsubscribeByIds(subscriptionIds) {
            this.#subscriptionManager.unsubscribeById(subscriptionIds);
            await this.toggleModulesIfNeeded();
        }
        async toggleModulesIfNeeded() {
            await Promise.all(this.#browsingContextStorage.getAllContexts().map(async (context) => {
                return await context.toggleModulesIfNeeded();
            }));
        }
        clearBufferedEvents(contextId) {
            for (const eventName of eventBufferLength.keys()) {
                const bufferMapKey = _a$2.#getMapKey(eventName, contextId);
                this.#eventBuffers.delete(bufferMapKey);
            }
        }
        #bufferEvent(eventWrapper, eventName) {
            if (!eventBufferLength.has(eventName)) {
                return;
            }
            const bufferMapKey = _a$2.#getMapKey(eventName, eventWrapper.contextId);
            if (!this.#eventBuffers.has(bufferMapKey)) {
                this.#eventBuffers.set(bufferMapKey, new Buffer$1(eventBufferLength.get(eventName)));
            }
            this.#eventBuffers.get(bufferMapKey).add(eventWrapper);
            this.#eventToContextsMap.get(eventName).add(eventWrapper.contextId);
        }
        #markEventSent(eventWrapper, googChannel, eventName) {
            if (!eventBufferLength.has(eventName)) {
                return;
            }
            const lastSentMapKey = _a$2.#getMapKey(eventName, eventWrapper.contextId);
            const lastId = Math.max(this.#lastMessageSent.get(lastSentMapKey)?.get(googChannel) ?? 0, eventWrapper.id);
            const googChannelMap = this.#lastMessageSent.get(lastSentMapKey);
            if (googChannelMap) {
                googChannelMap.set(googChannel, lastId);
            }
            else {
                this.#lastMessageSent.set(lastSentMapKey, new Map([[googChannel, lastId]]));
            }
        }
        #getBufferedEvents(eventName, contextId, googChannel) {
            const bufferMapKey = _a$2.#getMapKey(eventName, contextId);
            const lastSentMessageId = this.#lastMessageSent.get(bufferMapKey)?.get(googChannel) ?? -Infinity;
            const result = this.#eventBuffers
                .get(bufferMapKey)
                ?.get()
                .filter((wrapper) => wrapper.id > lastSentMessageId) ?? [];
            if (contextId === null) {
                Array.from(this.#eventToContextsMap.get(eventName).keys())
                    .filter((_contextId) =>
                _contextId !== null &&
                    this.#browsingContextStorage.hasContext(_contextId))
                    .map((_contextId) => this.#getBufferedEvents(eventName, _contextId, googChannel))
                    .forEach((events) => result.push(...events));
            }
            return result.sort((e1, e2) => e1.id - e2.id);
        }
    }
    _a$2 = EventManager;

    /**
     * Copyright 2025 Google LLC.
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
    class SpeculationProcessor {
        #eventManager;
        #logger;
        constructor(eventManager, logger) {
            this.#eventManager = eventManager;
            this.#logger = logger;
        }
        onCdpTargetCreated(cdpTarget) {
            cdpTarget.cdpClient.on('Preload.prefetchStatusUpdated', (event) => {
                let prefetchStatus;
                switch (event.status) {
                    case 'Running':
                        prefetchStatus = "pending" ;
                        break;
                    case 'Ready':
                        prefetchStatus = "ready" ;
                        break;
                    case 'Success':
                        prefetchStatus = "success" ;
                        break;
                    case 'Failure':
                        prefetchStatus = "failure" ;
                        break;
                    default:
                        this.#logger?.(LogType.debugWarn, `Unknown prefetch status: ${event.status}`);
                        return;
                }
                this.#eventManager.registerEvent({
                    type: 'event',
                    method: 'speculation.prefetchStatusUpdated',
                    params: {
                        context: event.initiatingFrameId,
                        url: event.prefetchUrl,
                        status: prefetchStatus,
                    },
                }, cdpTarget.id);
            });
        }
    }

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
    class BidiServer extends EventEmitter {
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
                await browserCdpClient.sendCommand('Target.setDiscoverTargets', {
                    discover: true,
                });
                await browserCdpClient.sendCommand('Target.setAutoAttach', {
                    autoAttach: true,
                    waitForDebuggerOnStart: true,
                    flatten: true,
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
            this.#eventManager.on("event" , ({ message, event }) => {
                this.emitOutgoingMessage(message, event);
            });
            this.#commandProcessor.on("response" , ({ message, event }) => {
                this.emitOutgoingMessage(message, event);
            });
        }
        static async createAndStart(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, parser, logger) {
            const [defaultUserContextId, version] = await Promise.all([
                this.#getDefaultUserContextId(browserCdpClient),
                browserCdpClient.sendCommand('Browser.getVersion'),
                browserCdpClient.sendCommand('Browser.setDownloadBehavior', {
                    behavior: 'default',
                    eventsEnabled: true,
                }),
            ]);
            const server = new BidiServer(bidiTransport, cdpConnection, browserCdpClient, selfTargetId, defaultUserContextId, version.userAgent, parser, logger);
            return server;
        }
        static async #getDefaultUserContextId(browserCdpClient) {
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
                    return info.browserContextId;
                }
            }
            return 'default';
        }
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
    class CloseError extends Error {
    }
    class MapperCdpClient extends EventEmitter {
        #cdpConnection;
        #sessionId;
        constructor(cdpConnection, sessionId) {
            super();
            this.#cdpConnection = cdpConnection;
            this.#sessionId = sessionId;
        }
        get sessionId() {
            return this.#sessionId;
        }
        sendCommand(method, ...params) {
            return this.#cdpConnection.sendCommand(method, params[0], this.#sessionId);
        }
        isCloseError(error) {
            return error instanceof CloseError;
        }
    }

    var _a$1;
    class MapperCdpConnection {
        static LOGGER_PREFIX_RECV = `${LogType.cdp}:RECV ◂`;
        static LOGGER_PREFIX_SEND = `${LogType.cdp}:SEND ▸`;
        #mainBrowserCdpClient;
        #transport;
        #sessionCdpClients = new Map();
        #commandCallbacks = new Map();
        #logger;
        #nextId = 0;
        constructor(transport, logger) {
            this.#transport = transport;
            this.#logger = logger;
            this.#transport.setOnMessage(this.#onMessage);
            this.#mainBrowserCdpClient = this.#createCdpClient(undefined);
        }
        close() {
            this.#transport.close();
            for (const [, { reject, error }] of this.#commandCallbacks) {
                reject(error);
            }
            this.#commandCallbacks.clear();
            this.#sessionCdpClients.clear();
        }
        async createBrowserSession() {
            const { sessionId } = await this.#mainBrowserCdpClient.sendCommand('Target.attachToBrowserTarget');
            return this.#createCdpClient(sessionId);
        }
        getCdpClient(sessionId) {
            const cdpClient = this.#sessionCdpClients.get(sessionId);
            if (!cdpClient) {
                throw new Error(`Unknown CDP session ID: ${sessionId}`);
            }
            return cdpClient;
        }
        sendCommand(method, params, sessionId) {
            return new Promise((resolve, reject) => {
                const id = this.#nextId++;
                this.#commandCallbacks.set(id, {
                    sessionId,
                    resolve,
                    reject,
                    error: new CloseError(`${method} ${JSON.stringify(params)} ${sessionId ?? ''} call rejected because the connection has been closed.`),
                });
                const cdpMessage = { id, method, params };
                if (sessionId) {
                    cdpMessage.sessionId = sessionId;
                }
                void this.#transport
                    .sendMessage(JSON.stringify(cdpMessage))
                    ?.catch((error) => {
                    this.#logger?.(LogType.debugError, error);
                    this.#transport.close();
                });
                this.#logger?.(_a$1.LOGGER_PREFIX_SEND, cdpMessage);
            });
        }
        #onMessage = (json) => {
            const message = JSON.parse(json);
            this.#logger?.(_a$1.LOGGER_PREFIX_RECV, message);
            if (message.method === 'Target.attachedToTarget') {
                const { sessionId } = message.params;
                this.#createCdpClient(sessionId);
            }
            if (message.id !== undefined) {
                const callbacks = this.#commandCallbacks.get(message.id);
                this.#commandCallbacks.delete(message.id);
                if (callbacks) {
                    if (message.result) {
                        callbacks.resolve(message.result);
                    }
                    else if (message.error) {
                        callbacks.reject(message.error);
                    }
                }
            }
            else if (message.method) {
                const client = this.#sessionCdpClients.get(message.sessionId ?? undefined);
                client?.emit(message.method, message.params || {});
                if (message.method === 'Target.detachedFromTarget') {
                    const { sessionId } = message.params;
                    const client = this.#sessionCdpClients.get(sessionId);
                    if (client) {
                        this.#sessionCdpClients.delete(sessionId);
                        client.removeAllListeners();
                    }
                    for (const callback of this.#commandCallbacks.values()) {
                        if (callback.sessionId === sessionId) {
                            callback.reject(callback.error);
                        }
                    }
                }
            }
        };
        #createCdpClient(sessionId) {
            const cdpClient = new MapperCdpClient(this, sessionId);
            this.#sessionCdpClients.set(sessionId, cdpClient);
            return cdpClient;
        }
    }
    _a$1 = MapperCdpConnection;

    var util;
    (function (util) {
        util.assertEqual = (_) => { };
        function assertIs(_arg) { }
        util.assertIs = assertIs;
        function assertNever(_x) {
            throw new Error();
        }
        util.assertNever = assertNever;
        util.arrayToEnum = (items) => {
            const obj = {};
            for (const item of items) {
                obj[item] = item;
            }
            return obj;
        };
        util.getValidEnumValues = (obj) => {
            const validKeys = util.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
            const filtered = {};
            for (const k of validKeys) {
                filtered[k] = obj[k];
            }
            return util.objectValues(filtered);
        };
        util.objectValues = (obj) => {
            return util.objectKeys(obj).map(function (e) {
                return obj[e];
            });
        };
        util.objectKeys = typeof Object.keys === "function"
            ? (obj) => Object.keys(obj)
            : (object) => {
                const keys = [];
                for (const key in object) {
                    if (Object.prototype.hasOwnProperty.call(object, key)) {
                        keys.push(key);
                    }
                }
                return keys;
            };
        util.find = (arr, checker) => {
            for (const item of arr) {
                if (checker(item))
                    return item;
            }
            return undefined;
        };
        util.isInteger = typeof Number.isInteger === "function"
            ? (val) => Number.isInteger(val)
            : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
        function joinValues(array, separator = " | ") {
            return array.map((val) => (typeof val === "string" ? `'${val}'` : val)).join(separator);
        }
        util.joinValues = joinValues;
        util.jsonStringifyReplacer = (_, value) => {
            if (typeof value === "bigint") {
                return value.toString();
            }
            return value;
        };
    })(util || (util = {}));
    var objectUtil;
    (function (objectUtil) {
        objectUtil.mergeShapes = (first, second) => {
            return {
                ...first,
                ...second,
            };
        };
    })(objectUtil || (objectUtil = {}));
    const ZodParsedType = util.arrayToEnum([
        "string",
        "nan",
        "number",
        "integer",
        "float",
        "boolean",
        "date",
        "bigint",
        "symbol",
        "function",
        "undefined",
        "null",
        "array",
        "object",
        "unknown",
        "promise",
        "void",
        "never",
        "map",
        "set",
    ]);
    const getParsedType = (data) => {
        const t = typeof data;
        switch (t) {
            case "undefined":
                return ZodParsedType.undefined;
            case "string":
                return ZodParsedType.string;
            case "number":
                return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
            case "boolean":
                return ZodParsedType.boolean;
            case "function":
                return ZodParsedType.function;
            case "bigint":
                return ZodParsedType.bigint;
            case "symbol":
                return ZodParsedType.symbol;
            case "object":
                if (Array.isArray(data)) {
                    return ZodParsedType.array;
                }
                if (data === null) {
                    return ZodParsedType.null;
                }
                if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                    return ZodParsedType.promise;
                }
                if (typeof Map !== "undefined" && data instanceof Map) {
                    return ZodParsedType.map;
                }
                if (typeof Set !== "undefined" && data instanceof Set) {
                    return ZodParsedType.set;
                }
                if (typeof Date !== "undefined" && data instanceof Date) {
                    return ZodParsedType.date;
                }
                return ZodParsedType.object;
            default:
                return ZodParsedType.unknown;
        }
    };

    const ZodIssueCode = util.arrayToEnum([
        "invalid_type",
        "invalid_literal",
        "custom",
        "invalid_union",
        "invalid_union_discriminator",
        "invalid_enum_value",
        "unrecognized_keys",
        "invalid_arguments",
        "invalid_return_type",
        "invalid_date",
        "invalid_string",
        "too_small",
        "too_big",
        "invalid_intersection_types",
        "not_multiple_of",
        "not_finite",
    ]);
    const quotelessJson = (obj) => {
        const json = JSON.stringify(obj, null, 2);
        return json.replace(/"([^"]+)":/g, "$1:");
    };
    class ZodError extends Error {
        get errors() {
            return this.issues;
        }
        constructor(issues) {
            super();
            this.issues = [];
            this.addIssue = (sub) => {
                this.issues = [...this.issues, sub];
            };
            this.addIssues = (subs = []) => {
                this.issues = [...this.issues, ...subs];
            };
            const actualProto = new.target.prototype;
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(this, actualProto);
            }
            else {
                this.__proto__ = actualProto;
            }
            this.name = "ZodError";
            this.issues = issues;
        }
        format(_mapper) {
            const mapper = _mapper ||
                function (issue) {
                    return issue.message;
                };
            const fieldErrors = { _errors: [] };
            const processError = (error) => {
                for (const issue of error.issues) {
                    if (issue.code === "invalid_union") {
                        issue.unionErrors.map(processError);
                    }
                    else if (issue.code === "invalid_return_type") {
                        processError(issue.returnTypeError);
                    }
                    else if (issue.code === "invalid_arguments") {
                        processError(issue.argumentsError);
                    }
                    else if (issue.path.length === 0) {
                        fieldErrors._errors.push(mapper(issue));
                    }
                    else {
                        let curr = fieldErrors;
                        let i = 0;
                        while (i < issue.path.length) {
                            const el = issue.path[i];
                            const terminal = i === issue.path.length - 1;
                            if (!terminal) {
                                curr[el] = curr[el] || { _errors: [] };
                            }
                            else {
                                curr[el] = curr[el] || { _errors: [] };
                                curr[el]._errors.push(mapper(issue));
                            }
                            curr = curr[el];
                            i++;
                        }
                    }
                }
            };
            processError(this);
            return fieldErrors;
        }
        static assert(value) {
            if (!(value instanceof ZodError)) {
                throw new Error(`Not a ZodError: ${value}`);
            }
        }
        toString() {
            return this.message;
        }
        get message() {
            return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
        }
        get isEmpty() {
            return this.issues.length === 0;
        }
        flatten(mapper = (issue) => issue.message) {
            const fieldErrors = {};
            const formErrors = [];
            for (const sub of this.issues) {
                if (sub.path.length > 0) {
                    const firstEl = sub.path[0];
                    fieldErrors[firstEl] = fieldErrors[firstEl] || [];
                    fieldErrors[firstEl].push(mapper(sub));
                }
                else {
                    formErrors.push(mapper(sub));
                }
            }
            return { formErrors, fieldErrors };
        }
        get formErrors() {
            return this.flatten();
        }
    }
    ZodError.create = (issues) => {
        const error = new ZodError(issues);
        return error;
    };

    const errorMap = (issue, _ctx) => {
        let message;
        switch (issue.code) {
            case ZodIssueCode.invalid_type:
                if (issue.received === ZodParsedType.undefined) {
                    message = "Required";
                }
                else {
                    message = `Expected ${issue.expected}, received ${issue.received}`;
                }
                break;
            case ZodIssueCode.invalid_literal:
                message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
                break;
            case ZodIssueCode.unrecognized_keys:
                message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
                break;
            case ZodIssueCode.invalid_union:
                message = `Invalid input`;
                break;
            case ZodIssueCode.invalid_union_discriminator:
                message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
                break;
            case ZodIssueCode.invalid_enum_value:
                message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
                break;
            case ZodIssueCode.invalid_arguments:
                message = `Invalid function arguments`;
                break;
            case ZodIssueCode.invalid_return_type:
                message = `Invalid function return type`;
                break;
            case ZodIssueCode.invalid_date:
                message = `Invalid date`;
                break;
            case ZodIssueCode.invalid_string:
                if (typeof issue.validation === "object") {
                    if ("includes" in issue.validation) {
                        message = `Invalid input: must include "${issue.validation.includes}"`;
                        if (typeof issue.validation.position === "number") {
                            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
                        }
                    }
                    else if ("startsWith" in issue.validation) {
                        message = `Invalid input: must start with "${issue.validation.startsWith}"`;
                    }
                    else if ("endsWith" in issue.validation) {
                        message = `Invalid input: must end with "${issue.validation.endsWith}"`;
                    }
                    else {
                        util.assertNever(issue.validation);
                    }
                }
                else if (issue.validation !== "regex") {
                    message = `Invalid ${issue.validation}`;
                }
                else {
                    message = "Invalid";
                }
                break;
            case ZodIssueCode.too_small:
                if (issue.type === "array")
                    message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
                else if (issue.type === "string")
                    message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
                else if (issue.type === "number")
                    message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
                else if (issue.type === "bigint")
                    message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
                else if (issue.type === "date")
                    message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
                else
                    message = "Invalid input";
                break;
            case ZodIssueCode.too_big:
                if (issue.type === "array")
                    message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
                else if (issue.type === "string")
                    message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
                else if (issue.type === "number")
                    message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
                else if (issue.type === "bigint")
                    message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
                else if (issue.type === "date")
                    message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
                else
                    message = "Invalid input";
                break;
            case ZodIssueCode.custom:
                message = `Invalid input`;
                break;
            case ZodIssueCode.invalid_intersection_types:
                message = `Intersection results could not be merged`;
                break;
            case ZodIssueCode.not_multiple_of:
                message = `Number must be a multiple of ${issue.multipleOf}`;
                break;
            case ZodIssueCode.not_finite:
                message = "Number must be finite";
                break;
            default:
                message = _ctx.defaultError;
                util.assertNever(issue);
        }
        return { message };
    };

    let overrideErrorMap = errorMap;
    function setErrorMap(map) {
        overrideErrorMap = map;
    }
    function getErrorMap() {
        return overrideErrorMap;
    }

    const makeIssue = (params) => {
        const { data, path, errorMaps, issueData } = params;
        const fullPath = [...path, ...(issueData.path || [])];
        const fullIssue = {
            ...issueData,
            path: fullPath,
        };
        if (issueData.message !== undefined) {
            return {
                ...issueData,
                path: fullPath,
                message: issueData.message,
            };
        }
        let errorMessage = "";
        const maps = errorMaps
            .filter((m) => !!m)
            .slice()
            .reverse();
        for (const map of maps) {
            errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
        }
        return {
            ...issueData,
            path: fullPath,
            message: errorMessage,
        };
    };
    const EMPTY_PATH = [];
    function addIssueToContext(ctx, issueData) {
        const overrideMap = getErrorMap();
        const issue = makeIssue({
            issueData: issueData,
            data: ctx.data,
            path: ctx.path,
            errorMaps: [
                ctx.common.contextualErrorMap,
                ctx.schemaErrorMap,
                overrideMap,
                overrideMap === errorMap ? undefined : errorMap,
            ].filter((x) => !!x),
        });
        ctx.common.issues.push(issue);
    }
    class ParseStatus {
        constructor() {
            this.value = "valid";
        }
        dirty() {
            if (this.value === "valid")
                this.value = "dirty";
        }
        abort() {
            if (this.value !== "aborted")
                this.value = "aborted";
        }
        static mergeArray(status, results) {
            const arrayValue = [];
            for (const s of results) {
                if (s.status === "aborted")
                    return INVALID;
                if (s.status === "dirty")
                    status.dirty();
                arrayValue.push(s.value);
            }
            return { status: status.value, value: arrayValue };
        }
        static async mergeObjectAsync(status, pairs) {
            const syncPairs = [];
            for (const pair of pairs) {
                const key = await pair.key;
                const value = await pair.value;
                syncPairs.push({
                    key,
                    value,
                });
            }
            return ParseStatus.mergeObjectSync(status, syncPairs);
        }
        static mergeObjectSync(status, pairs) {
            const finalObject = {};
            for (const pair of pairs) {
                const { key, value } = pair;
                if (key.status === "aborted")
                    return INVALID;
                if (value.status === "aborted")
                    return INVALID;
                if (key.status === "dirty")
                    status.dirty();
                if (value.status === "dirty")
                    status.dirty();
                if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
                    finalObject[key.value] = value.value;
                }
            }
            return { status: status.value, value: finalObject };
        }
    }
    const INVALID = Object.freeze({
        status: "aborted",
    });
    const DIRTY = (value) => ({ status: "dirty", value });
    const OK = (value) => ({ status: "valid", value });
    const isAborted = (x) => x.status === "aborted";
    const isDirty = (x) => x.status === "dirty";
    const isValid = (x) => x.status === "valid";
    const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

    var errorUtil;
    (function (errorUtil) {
        errorUtil.errToObj = (message) => typeof message === "string" ? { message } : message || {};
        errorUtil.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil || (errorUtil = {}));

    class ParseInputLazyPath {
        constructor(parent, value, path, key) {
            this._cachedPath = [];
            this.parent = parent;
            this.data = value;
            this._path = path;
            this._key = key;
        }
        get path() {
            if (!this._cachedPath.length) {
                if (Array.isArray(this._key)) {
                    this._cachedPath.push(...this._path, ...this._key);
                }
                else {
                    this._cachedPath.push(...this._path, this._key);
                }
            }
            return this._cachedPath;
        }
    }
    const handleResult = (ctx, result) => {
        if (isValid(result)) {
            return { success: true, data: result.value };
        }
        else {
            if (!ctx.common.issues.length) {
                throw new Error("Validation failed but no issues detected.");
            }
            return {
                success: false,
                get error() {
                    if (this._error)
                        return this._error;
                    const error = new ZodError(ctx.common.issues);
                    this._error = error;
                    return this._error;
                },
            };
        }
    };
    function processCreateParams(params) {
        if (!params)
            return {};
        const { errorMap, invalid_type_error, required_error, description } = params;
        if (errorMap && (invalid_type_error || required_error)) {
            throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
        }
        if (errorMap)
            return { errorMap: errorMap, description };
        const customMap = (iss, ctx) => {
            const { message } = params;
            if (iss.code === "invalid_enum_value") {
                return { message: message ?? ctx.defaultError };
            }
            if (typeof ctx.data === "undefined") {
                return { message: message ?? required_error ?? ctx.defaultError };
            }
            if (iss.code !== "invalid_type")
                return { message: ctx.defaultError };
            return { message: message ?? invalid_type_error ?? ctx.defaultError };
        };
        return { errorMap: customMap, description };
    }
    class ZodType {
        get description() {
            return this._def.description;
        }
        _getType(input) {
            return getParsedType(input.data);
        }
        _getOrReturnCtx(input, ctx) {
            return (ctx || {
                common: input.parent.common,
                data: input.data,
                parsedType: getParsedType(input.data),
                schemaErrorMap: this._def.errorMap,
                path: input.path,
                parent: input.parent,
            });
        }
        _processInputParams(input) {
            return {
                status: new ParseStatus(),
                ctx: {
                    common: input.parent.common,
                    data: input.data,
                    parsedType: getParsedType(input.data),
                    schemaErrorMap: this._def.errorMap,
                    path: input.path,
                    parent: input.parent,
                },
            };
        }
        _parseSync(input) {
            const result = this._parse(input);
            if (isAsync(result)) {
                throw new Error("Synchronous parse encountered promise.");
            }
            return result;
        }
        _parseAsync(input) {
            const result = this._parse(input);
            return Promise.resolve(result);
        }
        parse(data, params) {
            const result = this.safeParse(data, params);
            if (result.success)
                return result.data;
            throw result.error;
        }
        safeParse(data, params) {
            const ctx = {
                common: {
                    issues: [],
                    async: params?.async ?? false,
                    contextualErrorMap: params?.errorMap,
                },
                path: params?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data,
                parsedType: getParsedType(data),
            };
            const result = this._parseSync({ data, path: ctx.path, parent: ctx });
            return handleResult(ctx, result);
        }
        "~validate"(data) {
            const ctx = {
                common: {
                    issues: [],
                    async: !!this["~standard"].async,
                },
                path: [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data,
                parsedType: getParsedType(data),
            };
            if (!this["~standard"].async) {
                try {
                    const result = this._parseSync({ data, path: [], parent: ctx });
                    return isValid(result)
                        ? {
                            value: result.value,
                        }
                        : {
                            issues: ctx.common.issues,
                        };
                }
                catch (err) {
                    if (err?.message?.toLowerCase()?.includes("encountered")) {
                        this["~standard"].async = true;
                    }
                    ctx.common = {
                        issues: [],
                        async: true,
                    };
                }
            }
            return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result)
                ? {
                    value: result.value,
                }
                : {
                    issues: ctx.common.issues,
                });
        }
        async parseAsync(data, params) {
            const result = await this.safeParseAsync(data, params);
            if (result.success)
                return result.data;
            throw result.error;
        }
        async safeParseAsync(data, params) {
            const ctx = {
                common: {
                    issues: [],
                    contextualErrorMap: params?.errorMap,
                    async: true,
                },
                path: params?.path || [],
                schemaErrorMap: this._def.errorMap,
                parent: null,
                data,
                parsedType: getParsedType(data),
            };
            const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
            const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
            return handleResult(ctx, result);
        }
        refine(check, message) {
            const getIssueProperties = (val) => {
                if (typeof message === "string" || typeof message === "undefined") {
                    return { message };
                }
                else if (typeof message === "function") {
                    return message(val);
                }
                else {
                    return message;
                }
            };
            return this._refinement((val, ctx) => {
                const result = check(val);
                const setError = () => ctx.addIssue({
                    code: ZodIssueCode.custom,
                    ...getIssueProperties(val),
                });
                if (typeof Promise !== "undefined" && result instanceof Promise) {
                    return result.then((data) => {
                        if (!data) {
                            setError();
                            return false;
                        }
                        else {
                            return true;
                        }
                    });
                }
                if (!result) {
                    setError();
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        refinement(check, refinementData) {
            return this._refinement((val, ctx) => {
                if (!check(val)) {
                    ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
                    return false;
                }
                else {
                    return true;
                }
            });
        }
        _refinement(refinement) {
            return new ZodEffects({
                schema: this,
                typeName: ZodFirstPartyTypeKind.ZodEffects,
                effect: { type: "refinement", refinement },
            });
        }
        superRefine(refinement) {
            return this._refinement(refinement);
        }
        constructor(def) {
            this.spa = this.safeParseAsync;
            this._def = def;
            this.parse = this.parse.bind(this);
            this.safeParse = this.safeParse.bind(this);
            this.parseAsync = this.parseAsync.bind(this);
            this.safeParseAsync = this.safeParseAsync.bind(this);
            this.spa = this.spa.bind(this);
            this.refine = this.refine.bind(this);
            this.refinement = this.refinement.bind(this);
            this.superRefine = this.superRefine.bind(this);
            this.optional = this.optional.bind(this);
            this.nullable = this.nullable.bind(this);
            this.nullish = this.nullish.bind(this);
            this.array = this.array.bind(this);
            this.promise = this.promise.bind(this);
            this.or = this.or.bind(this);
            this.and = this.and.bind(this);
            this.transform = this.transform.bind(this);
            this.brand = this.brand.bind(this);
            this.default = this.default.bind(this);
            this.catch = this.catch.bind(this);
            this.describe = this.describe.bind(this);
            this.pipe = this.pipe.bind(this);
            this.readonly = this.readonly.bind(this);
            this.isNullable = this.isNullable.bind(this);
            this.isOptional = this.isOptional.bind(this);
            this["~standard"] = {
                version: 1,
                vendor: "zod",
                validate: (data) => this["~validate"](data),
            };
        }
        optional() {
            return ZodOptional.create(this, this._def);
        }
        nullable() {
            return ZodNullable.create(this, this._def);
        }
        nullish() {
            return this.nullable().optional();
        }
        array() {
            return ZodArray.create(this);
        }
        promise() {
            return ZodPromise.create(this, this._def);
        }
        or(option) {
            return ZodUnion.create([this, option], this._def);
        }
        and(incoming) {
            return ZodIntersection.create(this, incoming, this._def);
        }
        transform(transform) {
            return new ZodEffects({
                ...processCreateParams(this._def),
                schema: this,
                typeName: ZodFirstPartyTypeKind.ZodEffects,
                effect: { type: "transform", transform },
            });
        }
        default(def) {
            const defaultValueFunc = typeof def === "function" ? def : () => def;
            return new ZodDefault({
                ...processCreateParams(this._def),
                innerType: this,
                defaultValue: defaultValueFunc,
                typeName: ZodFirstPartyTypeKind.ZodDefault,
            });
        }
        brand() {
            return new ZodBranded({
                typeName: ZodFirstPartyTypeKind.ZodBranded,
                type: this,
                ...processCreateParams(this._def),
            });
        }
        catch(def) {
            const catchValueFunc = typeof def === "function" ? def : () => def;
            return new ZodCatch({
                ...processCreateParams(this._def),
                innerType: this,
                catchValue: catchValueFunc,
                typeName: ZodFirstPartyTypeKind.ZodCatch,
            });
        }
        describe(description) {
            const This = this.constructor;
            return new This({
                ...this._def,
                description,
            });
        }
        pipe(target) {
            return ZodPipeline.create(this, target);
        }
        readonly() {
            return ZodReadonly.create(this);
        }
        isOptional() {
            return this.safeParse(undefined).success;
        }
        isNullable() {
            return this.safeParse(null).success;
        }
    }
    const cuidRegex = /^c[^\s-]{8,}$/i;
    const cuid2Regex = /^[0-9a-z]+$/;
    const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    const nanoidRegex = /^[a-z0-9_-]{21}$/i;
    const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    let emojiRegex;
    const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    const dateRegex = new RegExp(`^${dateRegexSource}$`);
    function timeRegexSource(args) {
        let secondsRegexSource = `[0-5]\\d`;
        if (args.precision) {
            secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
        }
        else if (args.precision == null) {
            secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
        }
        const secondsQuantifier = args.precision ? "+" : "?";
        return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    function timeRegex(args) {
        return new RegExp(`^${timeRegexSource(args)}$`);
    }
    function datetimeRegex(args) {
        let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
        const opts = [];
        opts.push(args.local ? `Z?` : `Z`);
        if (args.offset)
            opts.push(`([+-]\\d{2}:?\\d{2})`);
        regex = `${regex}(${opts.join("|")})`;
        return new RegExp(`^${regex}$`);
    }
    function isValidIP(ip, version) {
        if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
            return true;
        }
        if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
            return true;
        }
        return false;
    }
    function isValidJWT(jwt, alg) {
        if (!jwtRegex.test(jwt))
            return false;
        try {
            const [header] = jwt.split(".");
            if (!header)
                return false;
            const base64 = header
                .replace(/-/g, "+")
                .replace(/_/g, "/")
                .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
            const decoded = JSON.parse(atob(base64));
            if (typeof decoded !== "object" || decoded === null)
                return false;
            if ("typ" in decoded && decoded?.typ !== "JWT")
                return false;
            if (!decoded.alg)
                return false;
            if (alg && decoded.alg !== alg)
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    function isValidCidr(ip, version) {
        if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
            return true;
        }
        if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
            return true;
        }
        return false;
    }
    class ZodString extends ZodType {
        _parse(input) {
            if (this._def.coerce) {
                input.data = String(input.data);
            }
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.string) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.string,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            const status = new ParseStatus();
            let ctx = undefined;
            for (const check of this._def.checks) {
                if (check.kind === "min") {
                    if (input.data.length < check.value) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: false,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "max") {
                    if (input.data.length > check.value) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "string",
                            inclusive: true,
                            exact: false,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "length") {
                    const tooBig = input.data.length > check.value;
                    const tooSmall = input.data.length < check.value;
                    if (tooBig || tooSmall) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        if (tooBig) {
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_big,
                                maximum: check.value,
                                type: "string",
                                inclusive: true,
                                exact: true,
                                message: check.message,
                            });
                        }
                        else if (tooSmall) {
                            addIssueToContext(ctx, {
                                code: ZodIssueCode.too_small,
                                minimum: check.value,
                                type: "string",
                                inclusive: true,
                                exact: true,
                                message: check.message,
                            });
                        }
                        status.dirty();
                    }
                }
                else if (check.kind === "email") {
                    if (!emailRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "email",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "emoji") {
                    if (!emojiRegex) {
                        emojiRegex = new RegExp(_emojiRegex, "u");
                    }
                    if (!emojiRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "emoji",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "uuid") {
                    if (!uuidRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "uuid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "nanoid") {
                    if (!nanoidRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "nanoid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "cuid") {
                    if (!cuidRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "cuid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "cuid2") {
                    if (!cuid2Regex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "cuid2",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "ulid") {
                    if (!ulidRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "ulid",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "url") {
                    try {
                        new URL(input.data);
                    }
                    catch {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "url",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "regex") {
                    check.regex.lastIndex = 0;
                    const testResult = check.regex.test(input.data);
                    if (!testResult) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "regex",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "trim") {
                    input.data = input.data.trim();
                }
                else if (check.kind === "includes") {
                    if (!input.data.includes(check.value, check.position)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: { includes: check.value, position: check.position },
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "toLowerCase") {
                    input.data = input.data.toLowerCase();
                }
                else if (check.kind === "toUpperCase") {
                    input.data = input.data.toUpperCase();
                }
                else if (check.kind === "startsWith") {
                    if (!input.data.startsWith(check.value)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: { startsWith: check.value },
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "endsWith") {
                    if (!input.data.endsWith(check.value)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: { endsWith: check.value },
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "datetime") {
                    const regex = datetimeRegex(check);
                    if (!regex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: "datetime",
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "date") {
                    const regex = dateRegex;
                    if (!regex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: "date",
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "time") {
                    const regex = timeRegex(check);
                    if (!regex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_string,
                            validation: "time",
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "duration") {
                    if (!durationRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "duration",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "ip") {
                    if (!isValidIP(input.data, check.version)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "ip",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "jwt") {
                    if (!isValidJWT(input.data, check.alg)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "jwt",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "cidr") {
                    if (!isValidCidr(input.data, check.version)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "cidr",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "base64") {
                    if (!base64Regex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "base64",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "base64url") {
                    if (!base64urlRegex.test(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            validation: "base64url",
                            code: ZodIssueCode.invalid_string,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else {
                    util.assertNever(check);
                }
            }
            return { status: status.value, value: input.data };
        }
        _regex(regex, validation, message) {
            return this.refinement((data) => regex.test(data), {
                validation,
                code: ZodIssueCode.invalid_string,
                ...errorUtil.errToObj(message),
            });
        }
        _addCheck(check) {
            return new ZodString({
                ...this._def,
                checks: [...this._def.checks, check],
            });
        }
        email(message) {
            return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
        }
        url(message) {
            return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
        }
        emoji(message) {
            return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
        }
        uuid(message) {
            return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
        }
        nanoid(message) {
            return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
        }
        cuid(message) {
            return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
        }
        cuid2(message) {
            return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
        }
        ulid(message) {
            return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
        }
        base64(message) {
            return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
        }
        base64url(message) {
            return this._addCheck({
                kind: "base64url",
                ...errorUtil.errToObj(message),
            });
        }
        jwt(options) {
            return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
        }
        ip(options) {
            return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
        }
        cidr(options) {
            return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
        }
        datetime(options) {
            if (typeof options === "string") {
                return this._addCheck({
                    kind: "datetime",
                    precision: null,
                    offset: false,
                    local: false,
                    message: options,
                });
            }
            return this._addCheck({
                kind: "datetime",
                precision: typeof options?.precision === "undefined" ? null : options?.precision,
                offset: options?.offset ?? false,
                local: options?.local ?? false,
                ...errorUtil.errToObj(options?.message),
            });
        }
        date(message) {
            return this._addCheck({ kind: "date", message });
        }
        time(options) {
            if (typeof options === "string") {
                return this._addCheck({
                    kind: "time",
                    precision: null,
                    message: options,
                });
            }
            return this._addCheck({
                kind: "time",
                precision: typeof options?.precision === "undefined" ? null : options?.precision,
                ...errorUtil.errToObj(options?.message),
            });
        }
        duration(message) {
            return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
        }
        regex(regex, message) {
            return this._addCheck({
                kind: "regex",
                regex: regex,
                ...errorUtil.errToObj(message),
            });
        }
        includes(value, options) {
            return this._addCheck({
                kind: "includes",
                value: value,
                position: options?.position,
                ...errorUtil.errToObj(options?.message),
            });
        }
        startsWith(value, message) {
            return this._addCheck({
                kind: "startsWith",
                value: value,
                ...errorUtil.errToObj(message),
            });
        }
        endsWith(value, message) {
            return this._addCheck({
                kind: "endsWith",
                value: value,
                ...errorUtil.errToObj(message),
            });
        }
        min(minLength, message) {
            return this._addCheck({
                kind: "min",
                value: minLength,
                ...errorUtil.errToObj(message),
            });
        }
        max(maxLength, message) {
            return this._addCheck({
                kind: "max",
                value: maxLength,
                ...errorUtil.errToObj(message),
            });
        }
        length(len, message) {
            return this._addCheck({
                kind: "length",
                value: len,
                ...errorUtil.errToObj(message),
            });
        }
        nonempty(message) {
            return this.min(1, errorUtil.errToObj(message));
        }
        trim() {
            return new ZodString({
                ...this._def,
                checks: [...this._def.checks, { kind: "trim" }],
            });
        }
        toLowerCase() {
            return new ZodString({
                ...this._def,
                checks: [...this._def.checks, { kind: "toLowerCase" }],
            });
        }
        toUpperCase() {
            return new ZodString({
                ...this._def,
                checks: [...this._def.checks, { kind: "toUpperCase" }],
            });
        }
        get isDatetime() {
            return !!this._def.checks.find((ch) => ch.kind === "datetime");
        }
        get isDate() {
            return !!this._def.checks.find((ch) => ch.kind === "date");
        }
        get isTime() {
            return !!this._def.checks.find((ch) => ch.kind === "time");
        }
        get isDuration() {
            return !!this._def.checks.find((ch) => ch.kind === "duration");
        }
        get isEmail() {
            return !!this._def.checks.find((ch) => ch.kind === "email");
        }
        get isURL() {
            return !!this._def.checks.find((ch) => ch.kind === "url");
        }
        get isEmoji() {
            return !!this._def.checks.find((ch) => ch.kind === "emoji");
        }
        get isUUID() {
            return !!this._def.checks.find((ch) => ch.kind === "uuid");
        }
        get isNANOID() {
            return !!this._def.checks.find((ch) => ch.kind === "nanoid");
        }
        get isCUID() {
            return !!this._def.checks.find((ch) => ch.kind === "cuid");
        }
        get isCUID2() {
            return !!this._def.checks.find((ch) => ch.kind === "cuid2");
        }
        get isULID() {
            return !!this._def.checks.find((ch) => ch.kind === "ulid");
        }
        get isIP() {
            return !!this._def.checks.find((ch) => ch.kind === "ip");
        }
        get isCIDR() {
            return !!this._def.checks.find((ch) => ch.kind === "cidr");
        }
        get isBase64() {
            return !!this._def.checks.find((ch) => ch.kind === "base64");
        }
        get isBase64url() {
            return !!this._def.checks.find((ch) => ch.kind === "base64url");
        }
        get minLength() {
            let min = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "min") {
                    if (min === null || ch.value > min)
                        min = ch.value;
                }
            }
            return min;
        }
        get maxLength() {
            let max = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "max") {
                    if (max === null || ch.value < max)
                        max = ch.value;
                }
            }
            return max;
        }
    }
    ZodString.create = (params) => {
        return new ZodString({
            checks: [],
            typeName: ZodFirstPartyTypeKind.ZodString,
            coerce: params?.coerce ?? false,
            ...processCreateParams(params),
        });
    };
    function floatSafeRemainder(val, step) {
        const valDecCount = (val.toString().split(".")[1] || "").length;
        const stepDecCount = (step.toString().split(".")[1] || "").length;
        const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
        const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
        const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
        return (valInt % stepInt) / 10 ** decCount;
    }
    class ZodNumber extends ZodType {
        constructor() {
            super(...arguments);
            this.min = this.gte;
            this.max = this.lte;
            this.step = this.multipleOf;
        }
        _parse(input) {
            if (this._def.coerce) {
                input.data = Number(input.data);
            }
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.number) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.number,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            let ctx = undefined;
            const status = new ParseStatus();
            for (const check of this._def.checks) {
                if (check.kind === "int") {
                    if (!util.isInteger(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.invalid_type,
                            expected: "integer",
                            received: "float",
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "min") {
                    const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                    if (tooSmall) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            minimum: check.value,
                            type: "number",
                            inclusive: check.inclusive,
                            exact: false,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "max") {
                    const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                    if (tooBig) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            maximum: check.value,
                            type: "number",
                            inclusive: check.inclusive,
                            exact: false,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "multipleOf") {
                    if (floatSafeRemainder(input.data, check.value) !== 0) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.not_multiple_of,
                            multipleOf: check.value,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "finite") {
                    if (!Number.isFinite(input.data)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.not_finite,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else {
                    util.assertNever(check);
                }
            }
            return { status: status.value, value: input.data };
        }
        gte(value, message) {
            return this.setLimit("min", value, true, errorUtil.toString(message));
        }
        gt(value, message) {
            return this.setLimit("min", value, false, errorUtil.toString(message));
        }
        lte(value, message) {
            return this.setLimit("max", value, true, errorUtil.toString(message));
        }
        lt(value, message) {
            return this.setLimit("max", value, false, errorUtil.toString(message));
        }
        setLimit(kind, value, inclusive, message) {
            return new ZodNumber({
                ...this._def,
                checks: [
                    ...this._def.checks,
                    {
                        kind,
                        value,
                        inclusive,
                        message: errorUtil.toString(message),
                    },
                ],
            });
        }
        _addCheck(check) {
            return new ZodNumber({
                ...this._def,
                checks: [...this._def.checks, check],
            });
        }
        int(message) {
            return this._addCheck({
                kind: "int",
                message: errorUtil.toString(message),
            });
        }
        positive(message) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: false,
                message: errorUtil.toString(message),
            });
        }
        negative(message) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: false,
                message: errorUtil.toString(message),
            });
        }
        nonpositive(message) {
            return this._addCheck({
                kind: "max",
                value: 0,
                inclusive: true,
                message: errorUtil.toString(message),
            });
        }
        nonnegative(message) {
            return this._addCheck({
                kind: "min",
                value: 0,
                inclusive: true,
                message: errorUtil.toString(message),
            });
        }
        multipleOf(value, message) {
            return this._addCheck({
                kind: "multipleOf",
                value: value,
                message: errorUtil.toString(message),
            });
        }
        finite(message) {
            return this._addCheck({
                kind: "finite",
                message: errorUtil.toString(message),
            });
        }
        safe(message) {
            return this._addCheck({
                kind: "min",
                inclusive: true,
                value: Number.MIN_SAFE_INTEGER,
                message: errorUtil.toString(message),
            })._addCheck({
                kind: "max",
                inclusive: true,
                value: Number.MAX_SAFE_INTEGER,
                message: errorUtil.toString(message),
            });
        }
        get minValue() {
            let min = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "min") {
                    if (min === null || ch.value > min)
                        min = ch.value;
                }
            }
            return min;
        }
        get maxValue() {
            let max = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "max") {
                    if (max === null || ch.value < max)
                        max = ch.value;
                }
            }
            return max;
        }
        get isInt() {
            return !!this._def.checks.find((ch) => ch.kind === "int" || (ch.kind === "multipleOf" && util.isInteger(ch.value)));
        }
        get isFinite() {
            let max = null;
            let min = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
                    return true;
                }
                else if (ch.kind === "min") {
                    if (min === null || ch.value > min)
                        min = ch.value;
                }
                else if (ch.kind === "max") {
                    if (max === null || ch.value < max)
                        max = ch.value;
                }
            }
            return Number.isFinite(min) && Number.isFinite(max);
        }
    }
    ZodNumber.create = (params) => {
        return new ZodNumber({
            checks: [],
            typeName: ZodFirstPartyTypeKind.ZodNumber,
            coerce: params?.coerce || false,
            ...processCreateParams(params),
        });
    };
    class ZodBigInt extends ZodType {
        constructor() {
            super(...arguments);
            this.min = this.gte;
            this.max = this.lte;
        }
        _parse(input) {
            if (this._def.coerce) {
                try {
                    input.data = BigInt(input.data);
                }
                catch {
                    return this._getInvalidInput(input);
                }
            }
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.bigint) {
                return this._getInvalidInput(input);
            }
            let ctx = undefined;
            const status = new ParseStatus();
            for (const check of this._def.checks) {
                if (check.kind === "min") {
                    const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
                    if (tooSmall) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            type: "bigint",
                            minimum: check.value,
                            inclusive: check.inclusive,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "max") {
                    const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
                    if (tooBig) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            type: "bigint",
                            maximum: check.value,
                            inclusive: check.inclusive,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "multipleOf") {
                    if (input.data % check.value !== BigInt(0)) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.not_multiple_of,
                            multipleOf: check.value,
                            message: check.message,
                        });
                        status.dirty();
                    }
                }
                else {
                    util.assertNever(check);
                }
            }
            return { status: status.value, value: input.data };
        }
        _getInvalidInput(input) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.bigint,
                received: ctx.parsedType,
            });
            return INVALID;
        }
        gte(value, message) {
            return this.setLimit("min", value, true, errorUtil.toString(message));
        }
        gt(value, message) {
            return this.setLimit("min", value, false, errorUtil.toString(message));
        }
        lte(value, message) {
            return this.setLimit("max", value, true, errorUtil.toString(message));
        }
        lt(value, message) {
            return this.setLimit("max", value, false, errorUtil.toString(message));
        }
        setLimit(kind, value, inclusive, message) {
            return new ZodBigInt({
                ...this._def,
                checks: [
                    ...this._def.checks,
                    {
                        kind,
                        value,
                        inclusive,
                        message: errorUtil.toString(message),
                    },
                ],
            });
        }
        _addCheck(check) {
            return new ZodBigInt({
                ...this._def,
                checks: [...this._def.checks, check],
            });
        }
        positive(message) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: false,
                message: errorUtil.toString(message),
            });
        }
        negative(message) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: false,
                message: errorUtil.toString(message),
            });
        }
        nonpositive(message) {
            return this._addCheck({
                kind: "max",
                value: BigInt(0),
                inclusive: true,
                message: errorUtil.toString(message),
            });
        }
        nonnegative(message) {
            return this._addCheck({
                kind: "min",
                value: BigInt(0),
                inclusive: true,
                message: errorUtil.toString(message),
            });
        }
        multipleOf(value, message) {
            return this._addCheck({
                kind: "multipleOf",
                value,
                message: errorUtil.toString(message),
            });
        }
        get minValue() {
            let min = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "min") {
                    if (min === null || ch.value > min)
                        min = ch.value;
                }
            }
            return min;
        }
        get maxValue() {
            let max = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "max") {
                    if (max === null || ch.value < max)
                        max = ch.value;
                }
            }
            return max;
        }
    }
    ZodBigInt.create = (params) => {
        return new ZodBigInt({
            checks: [],
            typeName: ZodFirstPartyTypeKind.ZodBigInt,
            coerce: params?.coerce ?? false,
            ...processCreateParams(params),
        });
    };
    class ZodBoolean extends ZodType {
        _parse(input) {
            if (this._def.coerce) {
                input.data = Boolean(input.data);
            }
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.boolean) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.boolean,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        }
    }
    ZodBoolean.create = (params) => {
        return new ZodBoolean({
            typeName: ZodFirstPartyTypeKind.ZodBoolean,
            coerce: params?.coerce || false,
            ...processCreateParams(params),
        });
    };
    class ZodDate extends ZodType {
        _parse(input) {
            if (this._def.coerce) {
                input.data = new Date(input.data);
            }
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.date) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.date,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            if (Number.isNaN(input.data.getTime())) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_date,
                });
                return INVALID;
            }
            const status = new ParseStatus();
            let ctx = undefined;
            for (const check of this._def.checks) {
                if (check.kind === "min") {
                    if (input.data.getTime() < check.value) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_small,
                            message: check.message,
                            inclusive: true,
                            exact: false,
                            minimum: check.value,
                            type: "date",
                        });
                        status.dirty();
                    }
                }
                else if (check.kind === "max") {
                    if (input.data.getTime() > check.value) {
                        ctx = this._getOrReturnCtx(input, ctx);
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.too_big,
                            message: check.message,
                            inclusive: true,
                            exact: false,
                            maximum: check.value,
                            type: "date",
                        });
                        status.dirty();
                    }
                }
                else {
                    util.assertNever(check);
                }
            }
            return {
                status: status.value,
                value: new Date(input.data.getTime()),
            };
        }
        _addCheck(check) {
            return new ZodDate({
                ...this._def,
                checks: [...this._def.checks, check],
            });
        }
        min(minDate, message) {
            return this._addCheck({
                kind: "min",
                value: minDate.getTime(),
                message: errorUtil.toString(message),
            });
        }
        max(maxDate, message) {
            return this._addCheck({
                kind: "max",
                value: maxDate.getTime(),
                message: errorUtil.toString(message),
            });
        }
        get minDate() {
            let min = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "min") {
                    if (min === null || ch.value > min)
                        min = ch.value;
                }
            }
            return min != null ? new Date(min) : null;
        }
        get maxDate() {
            let max = null;
            for (const ch of this._def.checks) {
                if (ch.kind === "max") {
                    if (max === null || ch.value < max)
                        max = ch.value;
                }
            }
            return max != null ? new Date(max) : null;
        }
    }
    ZodDate.create = (params) => {
        return new ZodDate({
            checks: [],
            coerce: params?.coerce || false,
            typeName: ZodFirstPartyTypeKind.ZodDate,
            ...processCreateParams(params),
        });
    };
    class ZodSymbol extends ZodType {
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.symbol) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.symbol,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        }
    }
    ZodSymbol.create = (params) => {
        return new ZodSymbol({
            typeName: ZodFirstPartyTypeKind.ZodSymbol,
            ...processCreateParams(params),
        });
    };
    class ZodUndefined extends ZodType {
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.undefined) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.undefined,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        }
    }
    ZodUndefined.create = (params) => {
        return new ZodUndefined({
            typeName: ZodFirstPartyTypeKind.ZodUndefined,
            ...processCreateParams(params),
        });
    };
    class ZodNull extends ZodType {
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.null) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.null,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        }
    }
    ZodNull.create = (params) => {
        return new ZodNull({
            typeName: ZodFirstPartyTypeKind.ZodNull,
            ...processCreateParams(params),
        });
    };
    class ZodAny extends ZodType {
        constructor() {
            super(...arguments);
            this._any = true;
        }
        _parse(input) {
            return OK(input.data);
        }
    }
    ZodAny.create = (params) => {
        return new ZodAny({
            typeName: ZodFirstPartyTypeKind.ZodAny,
            ...processCreateParams(params),
        });
    };
    class ZodUnknown extends ZodType {
        constructor() {
            super(...arguments);
            this._unknown = true;
        }
        _parse(input) {
            return OK(input.data);
        }
    }
    ZodUnknown.create = (params) => {
        return new ZodUnknown({
            typeName: ZodFirstPartyTypeKind.ZodUnknown,
            ...processCreateParams(params),
        });
    };
    class ZodNever extends ZodType {
        _parse(input) {
            const ctx = this._getOrReturnCtx(input);
            addIssueToContext(ctx, {
                code: ZodIssueCode.invalid_type,
                expected: ZodParsedType.never,
                received: ctx.parsedType,
            });
            return INVALID;
        }
    }
    ZodNever.create = (params) => {
        return new ZodNever({
            typeName: ZodFirstPartyTypeKind.ZodNever,
            ...processCreateParams(params),
        });
    };
    class ZodVoid extends ZodType {
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.undefined) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.void,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return OK(input.data);
        }
    }
    ZodVoid.create = (params) => {
        return new ZodVoid({
            typeName: ZodFirstPartyTypeKind.ZodVoid,
            ...processCreateParams(params),
        });
    };
    class ZodArray extends ZodType {
        _parse(input) {
            const { ctx, status } = this._processInputParams(input);
            const def = this._def;
            if (ctx.parsedType !== ZodParsedType.array) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.array,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            if (def.exactLength !== null) {
                const tooBig = ctx.data.length > def.exactLength.value;
                const tooSmall = ctx.data.length < def.exactLength.value;
                if (tooBig || tooSmall) {
                    addIssueToContext(ctx, {
                        code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
                        minimum: (tooSmall ? def.exactLength.value : undefined),
                        maximum: (tooBig ? def.exactLength.value : undefined),
                        type: "array",
                        inclusive: true,
                        exact: true,
                        message: def.exactLength.message,
                    });
                    status.dirty();
                }
            }
            if (def.minLength !== null) {
                if (ctx.data.length < def.minLength.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: def.minLength.value,
                        type: "array",
                        inclusive: true,
                        exact: false,
                        message: def.minLength.message,
                    });
                    status.dirty();
                }
            }
            if (def.maxLength !== null) {
                if (ctx.data.length > def.maxLength.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: def.maxLength.value,
                        type: "array",
                        inclusive: true,
                        exact: false,
                        message: def.maxLength.message,
                    });
                    status.dirty();
                }
            }
            if (ctx.common.async) {
                return Promise.all([...ctx.data].map((item, i) => {
                    return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
                })).then((result) => {
                    return ParseStatus.mergeArray(status, result);
                });
            }
            const result = [...ctx.data].map((item, i) => {
                return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
            });
            return ParseStatus.mergeArray(status, result);
        }
        get element() {
            return this._def.type;
        }
        min(minLength, message) {
            return new ZodArray({
                ...this._def,
                minLength: { value: minLength, message: errorUtil.toString(message) },
            });
        }
        max(maxLength, message) {
            return new ZodArray({
                ...this._def,
                maxLength: { value: maxLength, message: errorUtil.toString(message) },
            });
        }
        length(len, message) {
            return new ZodArray({
                ...this._def,
                exactLength: { value: len, message: errorUtil.toString(message) },
            });
        }
        nonempty(message) {
            return this.min(1, message);
        }
    }
    ZodArray.create = (schema, params) => {
        return new ZodArray({
            type: schema,
            minLength: null,
            maxLength: null,
            exactLength: null,
            typeName: ZodFirstPartyTypeKind.ZodArray,
            ...processCreateParams(params),
        });
    };
    function deepPartialify(schema) {
        if (schema instanceof ZodObject) {
            const newShape = {};
            for (const key in schema.shape) {
                const fieldSchema = schema.shape[key];
                newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
            }
            return new ZodObject({
                ...schema._def,
                shape: () => newShape,
            });
        }
        else if (schema instanceof ZodArray) {
            return new ZodArray({
                ...schema._def,
                type: deepPartialify(schema.element),
            });
        }
        else if (schema instanceof ZodOptional) {
            return ZodOptional.create(deepPartialify(schema.unwrap()));
        }
        else if (schema instanceof ZodNullable) {
            return ZodNullable.create(deepPartialify(schema.unwrap()));
        }
        else if (schema instanceof ZodTuple) {
            return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
        }
        else {
            return schema;
        }
    }
    class ZodObject extends ZodType {
        constructor() {
            super(...arguments);
            this._cached = null;
            this.nonstrict = this.passthrough;
            this.augment = this.extend;
        }
        _getCached() {
            if (this._cached !== null)
                return this._cached;
            const shape = this._def.shape();
            const keys = util.objectKeys(shape);
            this._cached = { shape, keys };
            return this._cached;
        }
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.object) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            const { status, ctx } = this._processInputParams(input);
            const { shape, keys: shapeKeys } = this._getCached();
            const extraKeys = [];
            if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
                for (const key in ctx.data) {
                    if (!shapeKeys.includes(key)) {
                        extraKeys.push(key);
                    }
                }
            }
            const pairs = [];
            for (const key of shapeKeys) {
                const keyValidator = shape[key];
                const value = ctx.data[key];
                pairs.push({
                    key: { status: "valid", value: key },
                    value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
                    alwaysSet: key in ctx.data,
                });
            }
            if (this._def.catchall instanceof ZodNever) {
                const unknownKeys = this._def.unknownKeys;
                if (unknownKeys === "passthrough") {
                    for (const key of extraKeys) {
                        pairs.push({
                            key: { status: "valid", value: key },
                            value: { status: "valid", value: ctx.data[key] },
                        });
                    }
                }
                else if (unknownKeys === "strict") {
                    if (extraKeys.length > 0) {
                        addIssueToContext(ctx, {
                            code: ZodIssueCode.unrecognized_keys,
                            keys: extraKeys,
                        });
                        status.dirty();
                    }
                }
                else if (unknownKeys === "strip") ;
                else {
                    throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
                }
            }
            else {
                const catchall = this._def.catchall;
                for (const key of extraKeys) {
                    const value = ctx.data[key];
                    pairs.push({
                        key: { status: "valid", value: key },
                        value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)
                        ),
                        alwaysSet: key in ctx.data,
                    });
                }
            }
            if (ctx.common.async) {
                return Promise.resolve()
                    .then(async () => {
                    const syncPairs = [];
                    for (const pair of pairs) {
                        const key = await pair.key;
                        const value = await pair.value;
                        syncPairs.push({
                            key,
                            value,
                            alwaysSet: pair.alwaysSet,
                        });
                    }
                    return syncPairs;
                })
                    .then((syncPairs) => {
                    return ParseStatus.mergeObjectSync(status, syncPairs);
                });
            }
            else {
                return ParseStatus.mergeObjectSync(status, pairs);
            }
        }
        get shape() {
            return this._def.shape();
        }
        strict(message) {
            errorUtil.errToObj;
            return new ZodObject({
                ...this._def,
                unknownKeys: "strict",
                ...(message !== undefined
                    ? {
                        errorMap: (issue, ctx) => {
                            const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
                            if (issue.code === "unrecognized_keys")
                                return {
                                    message: errorUtil.errToObj(message).message ?? defaultError,
                                };
                            return {
                                message: defaultError,
                            };
                        },
                    }
                    : {}),
            });
        }
        strip() {
            return new ZodObject({
                ...this._def,
                unknownKeys: "strip",
            });
        }
        passthrough() {
            return new ZodObject({
                ...this._def,
                unknownKeys: "passthrough",
            });
        }
        extend(augmentation) {
            return new ZodObject({
                ...this._def,
                shape: () => ({
                    ...this._def.shape(),
                    ...augmentation,
                }),
            });
        }
        merge(merging) {
            const merged = new ZodObject({
                unknownKeys: merging._def.unknownKeys,
                catchall: merging._def.catchall,
                shape: () => ({
                    ...this._def.shape(),
                    ...merging._def.shape(),
                }),
                typeName: ZodFirstPartyTypeKind.ZodObject,
            });
            return merged;
        }
        setKey(key, schema) {
            return this.augment({ [key]: schema });
        }
        catchall(index) {
            return new ZodObject({
                ...this._def,
                catchall: index,
            });
        }
        pick(mask) {
            const shape = {};
            for (const key of util.objectKeys(mask)) {
                if (mask[key] && this.shape[key]) {
                    shape[key] = this.shape[key];
                }
            }
            return new ZodObject({
                ...this._def,
                shape: () => shape,
            });
        }
        omit(mask) {
            const shape = {};
            for (const key of util.objectKeys(this.shape)) {
                if (!mask[key]) {
                    shape[key] = this.shape[key];
                }
            }
            return new ZodObject({
                ...this._def,
                shape: () => shape,
            });
        }
        deepPartial() {
            return deepPartialify(this);
        }
        partial(mask) {
            const newShape = {};
            for (const key of util.objectKeys(this.shape)) {
                const fieldSchema = this.shape[key];
                if (mask && !mask[key]) {
                    newShape[key] = fieldSchema;
                }
                else {
                    newShape[key] = fieldSchema.optional();
                }
            }
            return new ZodObject({
                ...this._def,
                shape: () => newShape,
            });
        }
        required(mask) {
            const newShape = {};
            for (const key of util.objectKeys(this.shape)) {
                if (mask && !mask[key]) {
                    newShape[key] = this.shape[key];
                }
                else {
                    const fieldSchema = this.shape[key];
                    let newField = fieldSchema;
                    while (newField instanceof ZodOptional) {
                        newField = newField._def.innerType;
                    }
                    newShape[key] = newField;
                }
            }
            return new ZodObject({
                ...this._def,
                shape: () => newShape,
            });
        }
        keyof() {
            return createZodEnum(util.objectKeys(this.shape));
        }
    }
    ZodObject.create = (shape, params) => {
        return new ZodObject({
            shape: () => shape,
            unknownKeys: "strip",
            catchall: ZodNever.create(),
            typeName: ZodFirstPartyTypeKind.ZodObject,
            ...processCreateParams(params),
        });
    };
    ZodObject.strictCreate = (shape, params) => {
        return new ZodObject({
            shape: () => shape,
            unknownKeys: "strict",
            catchall: ZodNever.create(),
            typeName: ZodFirstPartyTypeKind.ZodObject,
            ...processCreateParams(params),
        });
    };
    ZodObject.lazycreate = (shape, params) => {
        return new ZodObject({
            shape,
            unknownKeys: "strip",
            catchall: ZodNever.create(),
            typeName: ZodFirstPartyTypeKind.ZodObject,
            ...processCreateParams(params),
        });
    };
    class ZodUnion extends ZodType {
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            const options = this._def.options;
            function handleResults(results) {
                for (const result of results) {
                    if (result.result.status === "valid") {
                        return result.result;
                    }
                }
                for (const result of results) {
                    if (result.result.status === "dirty") {
                        ctx.common.issues.push(...result.ctx.common.issues);
                        return result.result;
                    }
                }
                const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_union,
                    unionErrors,
                });
                return INVALID;
            }
            if (ctx.common.async) {
                return Promise.all(options.map(async (option) => {
                    const childCtx = {
                        ...ctx,
                        common: {
                            ...ctx.common,
                            issues: [],
                        },
                        parent: null,
                    };
                    return {
                        result: await option._parseAsync({
                            data: ctx.data,
                            path: ctx.path,
                            parent: childCtx,
                        }),
                        ctx: childCtx,
                    };
                })).then(handleResults);
            }
            else {
                let dirty = undefined;
                const issues = [];
                for (const option of options) {
                    const childCtx = {
                        ...ctx,
                        common: {
                            ...ctx.common,
                            issues: [],
                        },
                        parent: null,
                    };
                    const result = option._parseSync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: childCtx,
                    });
                    if (result.status === "valid") {
                        return result;
                    }
                    else if (result.status === "dirty" && !dirty) {
                        dirty = { result, ctx: childCtx };
                    }
                    if (childCtx.common.issues.length) {
                        issues.push(childCtx.common.issues);
                    }
                }
                if (dirty) {
                    ctx.common.issues.push(...dirty.ctx.common.issues);
                    return dirty.result;
                }
                const unionErrors = issues.map((issues) => new ZodError(issues));
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_union,
                    unionErrors,
                });
                return INVALID;
            }
        }
        get options() {
            return this._def.options;
        }
    }
    ZodUnion.create = (types, params) => {
        return new ZodUnion({
            options: types,
            typeName: ZodFirstPartyTypeKind.ZodUnion,
            ...processCreateParams(params),
        });
    };
    const getDiscriminator = (type) => {
        if (type instanceof ZodLazy) {
            return getDiscriminator(type.schema);
        }
        else if (type instanceof ZodEffects) {
            return getDiscriminator(type.innerType());
        }
        else if (type instanceof ZodLiteral) {
            return [type.value];
        }
        else if (type instanceof ZodEnum) {
            return type.options;
        }
        else if (type instanceof ZodNativeEnum) {
            return util.objectValues(type.enum);
        }
        else if (type instanceof ZodDefault) {
            return getDiscriminator(type._def.innerType);
        }
        else if (type instanceof ZodUndefined) {
            return [undefined];
        }
        else if (type instanceof ZodNull) {
            return [null];
        }
        else if (type instanceof ZodOptional) {
            return [undefined, ...getDiscriminator(type.unwrap())];
        }
        else if (type instanceof ZodNullable) {
            return [null, ...getDiscriminator(type.unwrap())];
        }
        else if (type instanceof ZodBranded) {
            return getDiscriminator(type.unwrap());
        }
        else if (type instanceof ZodReadonly) {
            return getDiscriminator(type.unwrap());
        }
        else if (type instanceof ZodCatch) {
            return getDiscriminator(type._def.innerType);
        }
        else {
            return [];
        }
    };
    class ZodDiscriminatedUnion extends ZodType {
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            if (ctx.parsedType !== ZodParsedType.object) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            const discriminator = this.discriminator;
            const discriminatorValue = ctx.data[discriminator];
            const option = this.optionsMap.get(discriminatorValue);
            if (!option) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_union_discriminator,
                    options: Array.from(this.optionsMap.keys()),
                    path: [discriminator],
                });
                return INVALID;
            }
            if (ctx.common.async) {
                return option._parseAsync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
            }
            else {
                return option._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
            }
        }
        get discriminator() {
            return this._def.discriminator;
        }
        get options() {
            return this._def.options;
        }
        get optionsMap() {
            return this._def.optionsMap;
        }
        static create(discriminator, options, params) {
            const optionsMap = new Map();
            for (const type of options) {
                const discriminatorValues = getDiscriminator(type.shape[discriminator]);
                if (!discriminatorValues.length) {
                    throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
                }
                for (const value of discriminatorValues) {
                    if (optionsMap.has(value)) {
                        throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
                    }
                    optionsMap.set(value, type);
                }
            }
            return new ZodDiscriminatedUnion({
                typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
                discriminator,
                options,
                optionsMap,
                ...processCreateParams(params),
            });
        }
    }
    function mergeValues(a, b) {
        const aType = getParsedType(a);
        const bType = getParsedType(b);
        if (a === b) {
            return { valid: true, data: a };
        }
        else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
            const bKeys = util.objectKeys(b);
            const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
            const newObj = { ...a, ...b };
            for (const key of sharedKeys) {
                const sharedValue = mergeValues(a[key], b[key]);
                if (!sharedValue.valid) {
                    return { valid: false };
                }
                newObj[key] = sharedValue.data;
            }
            return { valid: true, data: newObj };
        }
        else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
            if (a.length !== b.length) {
                return { valid: false };
            }
            const newArray = [];
            for (let index = 0; index < a.length; index++) {
                const itemA = a[index];
                const itemB = b[index];
                const sharedValue = mergeValues(itemA, itemB);
                if (!sharedValue.valid) {
                    return { valid: false };
                }
                newArray.push(sharedValue.data);
            }
            return { valid: true, data: newArray };
        }
        else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
            return { valid: true, data: a };
        }
        else {
            return { valid: false };
        }
    }
    class ZodIntersection extends ZodType {
        _parse(input) {
            const { status, ctx } = this._processInputParams(input);
            const handleParsed = (parsedLeft, parsedRight) => {
                if (isAborted(parsedLeft) || isAborted(parsedRight)) {
                    return INVALID;
                }
                const merged = mergeValues(parsedLeft.value, parsedRight.value);
                if (!merged.valid) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.invalid_intersection_types,
                    });
                    return INVALID;
                }
                if (isDirty(parsedLeft) || isDirty(parsedRight)) {
                    status.dirty();
                }
                return { status: status.value, value: merged.data };
            };
            if (ctx.common.async) {
                return Promise.all([
                    this._def.left._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    }),
                    this._def.right._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    }),
                ]).then(([left, right]) => handleParsed(left, right));
            }
            else {
                return handleParsed(this._def.left._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }), this._def.right._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                }));
            }
        }
    }
    ZodIntersection.create = (left, right, params) => {
        return new ZodIntersection({
            left: left,
            right: right,
            typeName: ZodFirstPartyTypeKind.ZodIntersection,
            ...processCreateParams(params),
        });
    };
    class ZodTuple extends ZodType {
        _parse(input) {
            const { status, ctx } = this._processInputParams(input);
            if (ctx.parsedType !== ZodParsedType.array) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.array,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            if (ctx.data.length < this._def.items.length) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_small,
                    minimum: this._def.items.length,
                    inclusive: true,
                    exact: false,
                    type: "array",
                });
                return INVALID;
            }
            const rest = this._def.rest;
            if (!rest && ctx.data.length > this._def.items.length) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.too_big,
                    maximum: this._def.items.length,
                    inclusive: true,
                    exact: false,
                    type: "array",
                });
                status.dirty();
            }
            const items = [...ctx.data]
                .map((item, itemIndex) => {
                const schema = this._def.items[itemIndex] || this._def.rest;
                if (!schema)
                    return null;
                return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
            })
                .filter((x) => !!x);
            if (ctx.common.async) {
                return Promise.all(items).then((results) => {
                    return ParseStatus.mergeArray(status, results);
                });
            }
            else {
                return ParseStatus.mergeArray(status, items);
            }
        }
        get items() {
            return this._def.items;
        }
        rest(rest) {
            return new ZodTuple({
                ...this._def,
                rest,
            });
        }
    }
    ZodTuple.create = (schemas, params) => {
        if (!Array.isArray(schemas)) {
            throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
        }
        return new ZodTuple({
            items: schemas,
            typeName: ZodFirstPartyTypeKind.ZodTuple,
            rest: null,
            ...processCreateParams(params),
        });
    };
    class ZodRecord extends ZodType {
        get keySchema() {
            return this._def.keyType;
        }
        get valueSchema() {
            return this._def.valueType;
        }
        _parse(input) {
            const { status, ctx } = this._processInputParams(input);
            if (ctx.parsedType !== ZodParsedType.object) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.object,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            const pairs = [];
            const keyType = this._def.keyType;
            const valueType = this._def.valueType;
            for (const key in ctx.data) {
                pairs.push({
                    key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
                    value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
                    alwaysSet: key in ctx.data,
                });
            }
            if (ctx.common.async) {
                return ParseStatus.mergeObjectAsync(status, pairs);
            }
            else {
                return ParseStatus.mergeObjectSync(status, pairs);
            }
        }
        get element() {
            return this._def.valueType;
        }
        static create(first, second, third) {
            if (second instanceof ZodType) {
                return new ZodRecord({
                    keyType: first,
                    valueType: second,
                    typeName: ZodFirstPartyTypeKind.ZodRecord,
                    ...processCreateParams(third),
                });
            }
            return new ZodRecord({
                keyType: ZodString.create(),
                valueType: first,
                typeName: ZodFirstPartyTypeKind.ZodRecord,
                ...processCreateParams(second),
            });
        }
    }
    class ZodMap extends ZodType {
        get keySchema() {
            return this._def.keyType;
        }
        get valueSchema() {
            return this._def.valueType;
        }
        _parse(input) {
            const { status, ctx } = this._processInputParams(input);
            if (ctx.parsedType !== ZodParsedType.map) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.map,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            const keyType = this._def.keyType;
            const valueType = this._def.valueType;
            const pairs = [...ctx.data.entries()].map(([key, value], index) => {
                return {
                    key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
                    value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
                };
            });
            if (ctx.common.async) {
                const finalMap = new Map();
                return Promise.resolve().then(async () => {
                    for (const pair of pairs) {
                        const key = await pair.key;
                        const value = await pair.value;
                        if (key.status === "aborted" || value.status === "aborted") {
                            return INVALID;
                        }
                        if (key.status === "dirty" || value.status === "dirty") {
                            status.dirty();
                        }
                        finalMap.set(key.value, value.value);
                    }
                    return { status: status.value, value: finalMap };
                });
            }
            else {
                const finalMap = new Map();
                for (const pair of pairs) {
                    const key = pair.key;
                    const value = pair.value;
                    if (key.status === "aborted" || value.status === "aborted") {
                        return INVALID;
                    }
                    if (key.status === "dirty" || value.status === "dirty") {
                        status.dirty();
                    }
                    finalMap.set(key.value, value.value);
                }
                return { status: status.value, value: finalMap };
            }
        }
    }
    ZodMap.create = (keyType, valueType, params) => {
        return new ZodMap({
            valueType,
            keyType,
            typeName: ZodFirstPartyTypeKind.ZodMap,
            ...processCreateParams(params),
        });
    };
    class ZodSet extends ZodType {
        _parse(input) {
            const { status, ctx } = this._processInputParams(input);
            if (ctx.parsedType !== ZodParsedType.set) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.set,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            const def = this._def;
            if (def.minSize !== null) {
                if (ctx.data.size < def.minSize.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_small,
                        minimum: def.minSize.value,
                        type: "set",
                        inclusive: true,
                        exact: false,
                        message: def.minSize.message,
                    });
                    status.dirty();
                }
            }
            if (def.maxSize !== null) {
                if (ctx.data.size > def.maxSize.value) {
                    addIssueToContext(ctx, {
                        code: ZodIssueCode.too_big,
                        maximum: def.maxSize.value,
                        type: "set",
                        inclusive: true,
                        exact: false,
                        message: def.maxSize.message,
                    });
                    status.dirty();
                }
            }
            const valueType = this._def.valueType;
            function finalizeSet(elements) {
                const parsedSet = new Set();
                for (const element of elements) {
                    if (element.status === "aborted")
                        return INVALID;
                    if (element.status === "dirty")
                        status.dirty();
                    parsedSet.add(element.value);
                }
                return { status: status.value, value: parsedSet };
            }
            const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
            if (ctx.common.async) {
                return Promise.all(elements).then((elements) => finalizeSet(elements));
            }
            else {
                return finalizeSet(elements);
            }
        }
        min(minSize, message) {
            return new ZodSet({
                ...this._def,
                minSize: { value: minSize, message: errorUtil.toString(message) },
            });
        }
        max(maxSize, message) {
            return new ZodSet({
                ...this._def,
                maxSize: { value: maxSize, message: errorUtil.toString(message) },
            });
        }
        size(size, message) {
            return this.min(size, message).max(size, message);
        }
        nonempty(message) {
            return this.min(1, message);
        }
    }
    ZodSet.create = (valueType, params) => {
        return new ZodSet({
            valueType,
            minSize: null,
            maxSize: null,
            typeName: ZodFirstPartyTypeKind.ZodSet,
            ...processCreateParams(params),
        });
    };
    class ZodFunction extends ZodType {
        constructor() {
            super(...arguments);
            this.validate = this.implement;
        }
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            if (ctx.parsedType !== ZodParsedType.function) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.function,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            function makeArgsIssue(args, error) {
                return makeIssue({
                    data: args,
                    path: ctx.path,
                    errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter((x) => !!x),
                    issueData: {
                        code: ZodIssueCode.invalid_arguments,
                        argumentsError: error,
                    },
                });
            }
            function makeReturnsIssue(returns, error) {
                return makeIssue({
                    data: returns,
                    path: ctx.path,
                    errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), errorMap].filter((x) => !!x),
                    issueData: {
                        code: ZodIssueCode.invalid_return_type,
                        returnTypeError: error,
                    },
                });
            }
            const params = { errorMap: ctx.common.contextualErrorMap };
            const fn = ctx.data;
            if (this._def.returns instanceof ZodPromise) {
                const me = this;
                return OK(async function (...args) {
                    const error = new ZodError([]);
                    const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
                        error.addIssue(makeArgsIssue(args, e));
                        throw error;
                    });
                    const result = await Reflect.apply(fn, this, parsedArgs);
                    const parsedReturns = await me._def.returns._def.type
                        .parseAsync(result, params)
                        .catch((e) => {
                        error.addIssue(makeReturnsIssue(result, e));
                        throw error;
                    });
                    return parsedReturns;
                });
            }
            else {
                const me = this;
                return OK(function (...args) {
                    const parsedArgs = me._def.args.safeParse(args, params);
                    if (!parsedArgs.success) {
                        throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
                    }
                    const result = Reflect.apply(fn, this, parsedArgs.data);
                    const parsedReturns = me._def.returns.safeParse(result, params);
                    if (!parsedReturns.success) {
                        throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
                    }
                    return parsedReturns.data;
                });
            }
        }
        parameters() {
            return this._def.args;
        }
        returnType() {
            return this._def.returns;
        }
        args(...items) {
            return new ZodFunction({
                ...this._def,
                args: ZodTuple.create(items).rest(ZodUnknown.create()),
            });
        }
        returns(returnType) {
            return new ZodFunction({
                ...this._def,
                returns: returnType,
            });
        }
        implement(func) {
            const validatedFunc = this.parse(func);
            return validatedFunc;
        }
        strictImplement(func) {
            const validatedFunc = this.parse(func);
            return validatedFunc;
        }
        static create(args, returns, params) {
            return new ZodFunction({
                args: (args ? args : ZodTuple.create([]).rest(ZodUnknown.create())),
                returns: returns || ZodUnknown.create(),
                typeName: ZodFirstPartyTypeKind.ZodFunction,
                ...processCreateParams(params),
            });
        }
    }
    class ZodLazy extends ZodType {
        get schema() {
            return this._def.getter();
        }
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            const lazySchema = this._def.getter();
            return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
        }
    }
    ZodLazy.create = (getter, params) => {
        return new ZodLazy({
            getter: getter,
            typeName: ZodFirstPartyTypeKind.ZodLazy,
            ...processCreateParams(params),
        });
    };
    class ZodLiteral extends ZodType {
        _parse(input) {
            if (input.data !== this._def.value) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    received: ctx.data,
                    code: ZodIssueCode.invalid_literal,
                    expected: this._def.value,
                });
                return INVALID;
            }
            return { status: "valid", value: input.data };
        }
        get value() {
            return this._def.value;
        }
    }
    ZodLiteral.create = (value, params) => {
        return new ZodLiteral({
            value: value,
            typeName: ZodFirstPartyTypeKind.ZodLiteral,
            ...processCreateParams(params),
        });
    };
    function createZodEnum(values, params) {
        return new ZodEnum({
            values,
            typeName: ZodFirstPartyTypeKind.ZodEnum,
            ...processCreateParams(params),
        });
    }
    class ZodEnum extends ZodType {
        _parse(input) {
            if (typeof input.data !== "string") {
                const ctx = this._getOrReturnCtx(input);
                const expectedValues = this._def.values;
                addIssueToContext(ctx, {
                    expected: util.joinValues(expectedValues),
                    received: ctx.parsedType,
                    code: ZodIssueCode.invalid_type,
                });
                return INVALID;
            }
            if (!this._cache) {
                this._cache = new Set(this._def.values);
            }
            if (!this._cache.has(input.data)) {
                const ctx = this._getOrReturnCtx(input);
                const expectedValues = this._def.values;
                addIssueToContext(ctx, {
                    received: ctx.data,
                    code: ZodIssueCode.invalid_enum_value,
                    options: expectedValues,
                });
                return INVALID;
            }
            return OK(input.data);
        }
        get options() {
            return this._def.values;
        }
        get enum() {
            const enumValues = {};
            for (const val of this._def.values) {
                enumValues[val] = val;
            }
            return enumValues;
        }
        get Values() {
            const enumValues = {};
            for (const val of this._def.values) {
                enumValues[val] = val;
            }
            return enumValues;
        }
        get Enum() {
            const enumValues = {};
            for (const val of this._def.values) {
                enumValues[val] = val;
            }
            return enumValues;
        }
        extract(values, newDef = this._def) {
            return ZodEnum.create(values, {
                ...this._def,
                ...newDef,
            });
        }
        exclude(values, newDef = this._def) {
            return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
                ...this._def,
                ...newDef,
            });
        }
    }
    ZodEnum.create = createZodEnum;
    class ZodNativeEnum extends ZodType {
        _parse(input) {
            const nativeEnumValues = util.getValidEnumValues(this._def.values);
            const ctx = this._getOrReturnCtx(input);
            if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
                const expectedValues = util.objectValues(nativeEnumValues);
                addIssueToContext(ctx, {
                    expected: util.joinValues(expectedValues),
                    received: ctx.parsedType,
                    code: ZodIssueCode.invalid_type,
                });
                return INVALID;
            }
            if (!this._cache) {
                this._cache = new Set(util.getValidEnumValues(this._def.values));
            }
            if (!this._cache.has(input.data)) {
                const expectedValues = util.objectValues(nativeEnumValues);
                addIssueToContext(ctx, {
                    received: ctx.data,
                    code: ZodIssueCode.invalid_enum_value,
                    options: expectedValues,
                });
                return INVALID;
            }
            return OK(input.data);
        }
        get enum() {
            return this._def.values;
        }
    }
    ZodNativeEnum.create = (values, params) => {
        return new ZodNativeEnum({
            values: values,
            typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
            ...processCreateParams(params),
        });
    };
    class ZodPromise extends ZodType {
        unwrap() {
            return this._def.type;
        }
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.promise,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
            return OK(promisified.then((data) => {
                return this._def.type.parseAsync(data, {
                    path: ctx.path,
                    errorMap: ctx.common.contextualErrorMap,
                });
            }));
        }
    }
    ZodPromise.create = (schema, params) => {
        return new ZodPromise({
            type: schema,
            typeName: ZodFirstPartyTypeKind.ZodPromise,
            ...processCreateParams(params),
        });
    };
    class ZodEffects extends ZodType {
        innerType() {
            return this._def.schema;
        }
        sourceType() {
            return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
                ? this._def.schema.sourceType()
                : this._def.schema;
        }
        _parse(input) {
            const { status, ctx } = this._processInputParams(input);
            const effect = this._def.effect || null;
            const checkCtx = {
                addIssue: (arg) => {
                    addIssueToContext(ctx, arg);
                    if (arg.fatal) {
                        status.abort();
                    }
                    else {
                        status.dirty();
                    }
                },
                get path() {
                    return ctx.path;
                },
            };
            checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
            if (effect.type === "preprocess") {
                const processed = effect.transform(ctx.data, checkCtx);
                if (ctx.common.async) {
                    return Promise.resolve(processed).then(async (processed) => {
                        if (status.value === "aborted")
                            return INVALID;
                        const result = await this._def.schema._parseAsync({
                            data: processed,
                            path: ctx.path,
                            parent: ctx,
                        });
                        if (result.status === "aborted")
                            return INVALID;
                        if (result.status === "dirty")
                            return DIRTY(result.value);
                        if (status.value === "dirty")
                            return DIRTY(result.value);
                        return result;
                    });
                }
                else {
                    if (status.value === "aborted")
                        return INVALID;
                    const result = this._def.schema._parseSync({
                        data: processed,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (result.status === "aborted")
                        return INVALID;
                    if (result.status === "dirty")
                        return DIRTY(result.value);
                    if (status.value === "dirty")
                        return DIRTY(result.value);
                    return result;
                }
            }
            if (effect.type === "refinement") {
                const executeRefinement = (acc) => {
                    const result = effect.refinement(acc, checkCtx);
                    if (ctx.common.async) {
                        return Promise.resolve(result);
                    }
                    if (result instanceof Promise) {
                        throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                    }
                    return acc;
                };
                if (ctx.common.async === false) {
                    const inner = this._def.schema._parseSync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (inner.status === "aborted")
                        return INVALID;
                    if (inner.status === "dirty")
                        status.dirty();
                    executeRefinement(inner.value);
                    return { status: status.value, value: inner.value };
                }
                else {
                    return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
                        if (inner.status === "aborted")
                            return INVALID;
                        if (inner.status === "dirty")
                            status.dirty();
                        return executeRefinement(inner.value).then(() => {
                            return { status: status.value, value: inner.value };
                        });
                    });
                }
            }
            if (effect.type === "transform") {
                if (ctx.common.async === false) {
                    const base = this._def.schema._parseSync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (!isValid(base))
                        return INVALID;
                    const result = effect.transform(base.value, checkCtx);
                    if (result instanceof Promise) {
                        throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                    }
                    return { status: status.value, value: result };
                }
                else {
                    return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
                        if (!isValid(base))
                            return INVALID;
                        return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                            status: status.value,
                            value: result,
                        }));
                    });
                }
            }
            util.assertNever(effect);
        }
    }
    ZodEffects.create = (schema, effect, params) => {
        return new ZodEffects({
            schema,
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            effect,
            ...processCreateParams(params),
        });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
        return new ZodEffects({
            schema,
            effect: { type: "preprocess", transform: preprocess },
            typeName: ZodFirstPartyTypeKind.ZodEffects,
            ...processCreateParams(params),
        });
    };
    class ZodOptional extends ZodType {
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType === ZodParsedType.undefined) {
                return OK(undefined);
            }
            return this._def.innerType._parse(input);
        }
        unwrap() {
            return this._def.innerType;
        }
    }
    ZodOptional.create = (type, params) => {
        return new ZodOptional({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodOptional,
            ...processCreateParams(params),
        });
    };
    class ZodNullable extends ZodType {
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType === ZodParsedType.null) {
                return OK(null);
            }
            return this._def.innerType._parse(input);
        }
        unwrap() {
            return this._def.innerType;
        }
    }
    ZodNullable.create = (type, params) => {
        return new ZodNullable({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodNullable,
            ...processCreateParams(params),
        });
    };
    class ZodDefault extends ZodType {
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            let data = ctx.data;
            if (ctx.parsedType === ZodParsedType.undefined) {
                data = this._def.defaultValue();
            }
            return this._def.innerType._parse({
                data,
                path: ctx.path,
                parent: ctx,
            });
        }
        removeDefault() {
            return this._def.innerType;
        }
    }
    ZodDefault.create = (type, params) => {
        return new ZodDefault({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodDefault,
            defaultValue: typeof params.default === "function" ? params.default : () => params.default,
            ...processCreateParams(params),
        });
    };
    class ZodCatch extends ZodType {
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            const newCtx = {
                ...ctx,
                common: {
                    ...ctx.common,
                    issues: [],
                },
            };
            const result = this._def.innerType._parse({
                data: newCtx.data,
                path: newCtx.path,
                parent: {
                    ...newCtx,
                },
            });
            if (isAsync(result)) {
                return result.then((result) => {
                    return {
                        status: "valid",
                        value: result.status === "valid"
                            ? result.value
                            : this._def.catchValue({
                                get error() {
                                    return new ZodError(newCtx.common.issues);
                                },
                                input: newCtx.data,
                            }),
                    };
                });
            }
            else {
                return {
                    status: "valid",
                    value: result.status === "valid"
                        ? result.value
                        : this._def.catchValue({
                            get error() {
                                return new ZodError(newCtx.common.issues);
                            },
                            input: newCtx.data,
                        }),
                };
            }
        }
        removeCatch() {
            return this._def.innerType;
        }
    }
    ZodCatch.create = (type, params) => {
        return new ZodCatch({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodCatch,
            catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
            ...processCreateParams(params),
        });
    };
    class ZodNaN extends ZodType {
        _parse(input) {
            const parsedType = this._getType(input);
            if (parsedType !== ZodParsedType.nan) {
                const ctx = this._getOrReturnCtx(input);
                addIssueToContext(ctx, {
                    code: ZodIssueCode.invalid_type,
                    expected: ZodParsedType.nan,
                    received: ctx.parsedType,
                });
                return INVALID;
            }
            return { status: "valid", value: input.data };
        }
    }
    ZodNaN.create = (params) => {
        return new ZodNaN({
            typeName: ZodFirstPartyTypeKind.ZodNaN,
            ...processCreateParams(params),
        });
    };
    const BRAND = Symbol("zod_brand");
    class ZodBranded extends ZodType {
        _parse(input) {
            const { ctx } = this._processInputParams(input);
            const data = ctx.data;
            return this._def.type._parse({
                data,
                path: ctx.path,
                parent: ctx,
            });
        }
        unwrap() {
            return this._def.type;
        }
    }
    class ZodPipeline extends ZodType {
        _parse(input) {
            const { status, ctx } = this._processInputParams(input);
            if (ctx.common.async) {
                const handleAsync = async () => {
                    const inResult = await this._def.in._parseAsync({
                        data: ctx.data,
                        path: ctx.path,
                        parent: ctx,
                    });
                    if (inResult.status === "aborted")
                        return INVALID;
                    if (inResult.status === "dirty") {
                        status.dirty();
                        return DIRTY(inResult.value);
                    }
                    else {
                        return this._def.out._parseAsync({
                            data: inResult.value,
                            path: ctx.path,
                            parent: ctx,
                        });
                    }
                };
                return handleAsync();
            }
            else {
                const inResult = this._def.in._parseSync({
                    data: ctx.data,
                    path: ctx.path,
                    parent: ctx,
                });
                if (inResult.status === "aborted")
                    return INVALID;
                if (inResult.status === "dirty") {
                    status.dirty();
                    return {
                        status: "dirty",
                        value: inResult.value,
                    };
                }
                else {
                    return this._def.out._parseSync({
                        data: inResult.value,
                        path: ctx.path,
                        parent: ctx,
                    });
                }
            }
        }
        static create(a, b) {
            return new ZodPipeline({
                in: a,
                out: b,
                typeName: ZodFirstPartyTypeKind.ZodPipeline,
            });
        }
    }
    class ZodReadonly extends ZodType {
        _parse(input) {
            const result = this._def.innerType._parse(input);
            const freeze = (data) => {
                if (isValid(data)) {
                    data.value = Object.freeze(data.value);
                }
                return data;
            };
            return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
        }
        unwrap() {
            return this._def.innerType;
        }
    }
    ZodReadonly.create = (type, params) => {
        return new ZodReadonly({
            innerType: type,
            typeName: ZodFirstPartyTypeKind.ZodReadonly,
            ...processCreateParams(params),
        });
    };
    function cleanParams(params, data) {
        const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
        const p2 = typeof p === "string" ? { message: p } : p;
        return p2;
    }
    function custom(check, _params = {},
    fatal) {
        if (check)
            return ZodAny.create().superRefine((data, ctx) => {
                const r = check(data);
                if (r instanceof Promise) {
                    return r.then((r) => {
                        if (!r) {
                            const params = cleanParams(_params, data);
                            const _fatal = params.fatal ?? fatal ?? true;
                            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
                        }
                    });
                }
                if (!r) {
                    const params = cleanParams(_params, data);
                    const _fatal = params.fatal ?? fatal ?? true;
                    ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
                }
                return;
            });
        return ZodAny.create();
    }
    const late = {
        object: ZodObject.lazycreate,
    };
    var ZodFirstPartyTypeKind;
    (function (ZodFirstPartyTypeKind) {
        ZodFirstPartyTypeKind["ZodString"] = "ZodString";
        ZodFirstPartyTypeKind["ZodNumber"] = "ZodNumber";
        ZodFirstPartyTypeKind["ZodNaN"] = "ZodNaN";
        ZodFirstPartyTypeKind["ZodBigInt"] = "ZodBigInt";
        ZodFirstPartyTypeKind["ZodBoolean"] = "ZodBoolean";
        ZodFirstPartyTypeKind["ZodDate"] = "ZodDate";
        ZodFirstPartyTypeKind["ZodSymbol"] = "ZodSymbol";
        ZodFirstPartyTypeKind["ZodUndefined"] = "ZodUndefined";
        ZodFirstPartyTypeKind["ZodNull"] = "ZodNull";
        ZodFirstPartyTypeKind["ZodAny"] = "ZodAny";
        ZodFirstPartyTypeKind["ZodUnknown"] = "ZodUnknown";
        ZodFirstPartyTypeKind["ZodNever"] = "ZodNever";
        ZodFirstPartyTypeKind["ZodVoid"] = "ZodVoid";
        ZodFirstPartyTypeKind["ZodArray"] = "ZodArray";
        ZodFirstPartyTypeKind["ZodObject"] = "ZodObject";
        ZodFirstPartyTypeKind["ZodUnion"] = "ZodUnion";
        ZodFirstPartyTypeKind["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
        ZodFirstPartyTypeKind["ZodIntersection"] = "ZodIntersection";
        ZodFirstPartyTypeKind["ZodTuple"] = "ZodTuple";
        ZodFirstPartyTypeKind["ZodRecord"] = "ZodRecord";
        ZodFirstPartyTypeKind["ZodMap"] = "ZodMap";
        ZodFirstPartyTypeKind["ZodSet"] = "ZodSet";
        ZodFirstPartyTypeKind["ZodFunction"] = "ZodFunction";
        ZodFirstPartyTypeKind["ZodLazy"] = "ZodLazy";
        ZodFirstPartyTypeKind["ZodLiteral"] = "ZodLiteral";
        ZodFirstPartyTypeKind["ZodEnum"] = "ZodEnum";
        ZodFirstPartyTypeKind["ZodEffects"] = "ZodEffects";
        ZodFirstPartyTypeKind["ZodNativeEnum"] = "ZodNativeEnum";
        ZodFirstPartyTypeKind["ZodOptional"] = "ZodOptional";
        ZodFirstPartyTypeKind["ZodNullable"] = "ZodNullable";
        ZodFirstPartyTypeKind["ZodDefault"] = "ZodDefault";
        ZodFirstPartyTypeKind["ZodCatch"] = "ZodCatch";
        ZodFirstPartyTypeKind["ZodPromise"] = "ZodPromise";
        ZodFirstPartyTypeKind["ZodBranded"] = "ZodBranded";
        ZodFirstPartyTypeKind["ZodPipeline"] = "ZodPipeline";
        ZodFirstPartyTypeKind["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
    const instanceOfType = (
    cls, params = {
        message: `Input not instance of ${cls.name}`,
    }) => custom((data) => data instanceof cls, params);
    const stringType = ZodString.create;
    const numberType = ZodNumber.create;
    const nanType = ZodNaN.create;
    const bigIntType = ZodBigInt.create;
    const booleanType = ZodBoolean.create;
    const dateType = ZodDate.create;
    const symbolType = ZodSymbol.create;
    const undefinedType = ZodUndefined.create;
    const nullType = ZodNull.create;
    const anyType = ZodAny.create;
    const unknownType = ZodUnknown.create;
    const neverType = ZodNever.create;
    const voidType = ZodVoid.create;
    const arrayType = ZodArray.create;
    const objectType = ZodObject.create;
    const strictObjectType = ZodObject.strictCreate;
    const unionType = ZodUnion.create;
    const discriminatedUnionType = ZodDiscriminatedUnion.create;
    const intersectionType = ZodIntersection.create;
    const tupleType = ZodTuple.create;
    const recordType = ZodRecord.create;
    const mapType = ZodMap.create;
    const setType = ZodSet.create;
    const functionType = ZodFunction.create;
    const lazyType = ZodLazy.create;
    const literalType = ZodLiteral.create;
    const enumType = ZodEnum.create;
    const nativeEnumType = ZodNativeEnum.create;
    const promiseType = ZodPromise.create;
    const effectsType = ZodEffects.create;
    const optionalType = ZodOptional.create;
    const nullableType = ZodNullable.create;
    const preprocessType = ZodEffects.createWithPreprocess;
    const pipelineType = ZodPipeline.create;
    const ostring = () => stringType().optional();
    const onumber = () => numberType().optional();
    const oboolean = () => booleanType().optional();
    const coerce = {
        string: ((arg) => ZodString.create({ ...arg, coerce: true })),
        number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
        boolean: ((arg) => ZodBoolean.create({
            ...arg,
            coerce: true,
        })),
        bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
        date: ((arg) => ZodDate.create({ ...arg, coerce: true })),
    };
    const NEVER = INVALID;

    var z = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BRAND: BRAND,
        DIRTY: DIRTY,
        EMPTY_PATH: EMPTY_PATH,
        INVALID: INVALID,
        NEVER: NEVER,
        OK: OK,
        ParseStatus: ParseStatus,
        Schema: ZodType,
        ZodAny: ZodAny,
        ZodArray: ZodArray,
        ZodBigInt: ZodBigInt,
        ZodBoolean: ZodBoolean,
        ZodBranded: ZodBranded,
        ZodCatch: ZodCatch,
        ZodDate: ZodDate,
        ZodDefault: ZodDefault,
        ZodDiscriminatedUnion: ZodDiscriminatedUnion,
        ZodEffects: ZodEffects,
        ZodEnum: ZodEnum,
        ZodError: ZodError,
        get ZodFirstPartyTypeKind () { return ZodFirstPartyTypeKind; },
        ZodFunction: ZodFunction,
        ZodIntersection: ZodIntersection,
        ZodIssueCode: ZodIssueCode,
        ZodLazy: ZodLazy,
        ZodLiteral: ZodLiteral,
        ZodMap: ZodMap,
        ZodNaN: ZodNaN,
        ZodNativeEnum: ZodNativeEnum,
        ZodNever: ZodNever,
        ZodNull: ZodNull,
        ZodNullable: ZodNullable,
        ZodNumber: ZodNumber,
        ZodObject: ZodObject,
        ZodOptional: ZodOptional,
        ZodParsedType: ZodParsedType,
        ZodPipeline: ZodPipeline,
        ZodPromise: ZodPromise,
        ZodReadonly: ZodReadonly,
        ZodRecord: ZodRecord,
        ZodSchema: ZodType,
        ZodSet: ZodSet,
        ZodString: ZodString,
        ZodSymbol: ZodSymbol,
        ZodTransformer: ZodEffects,
        ZodTuple: ZodTuple,
        ZodType: ZodType,
        ZodUndefined: ZodUndefined,
        ZodUnion: ZodUnion,
        ZodUnknown: ZodUnknown,
        ZodVoid: ZodVoid,
        addIssueToContext: addIssueToContext,
        any: anyType,
        array: arrayType,
        bigint: bigIntType,
        boolean: booleanType,
        coerce: coerce,
        custom: custom,
        date: dateType,
        datetimeRegex: datetimeRegex,
        defaultErrorMap: errorMap,
        discriminatedUnion: discriminatedUnionType,
        effect: effectsType,
        enum: enumType,
        function: functionType,
        getErrorMap: getErrorMap,
        getParsedType: getParsedType,
        instanceof: instanceOfType,
        intersection: intersectionType,
        isAborted: isAborted,
        isAsync: isAsync,
        isDirty: isDirty,
        isValid: isValid,
        late: late,
        lazy: lazyType,
        literal: literalType,
        makeIssue: makeIssue,
        map: mapType,
        nan: nanType,
        nativeEnum: nativeEnumType,
        never: neverType,
        null: nullType,
        nullable: nullableType,
        number: numberType,
        object: objectType,
        get objectUtil () { return objectUtil; },
        oboolean: oboolean,
        onumber: onumber,
        optional: optionalType,
        ostring: ostring,
        pipeline: pipelineType,
        preprocess: preprocessType,
        promise: promiseType,
        quotelessJson: quotelessJson,
        record: recordType,
        set: setType,
        setErrorMap: setErrorMap,
        strictObject: strictObjectType,
        string: stringType,
        symbol: symbolType,
        transformer: effectsType,
        tuple: tupleType,
        undefined: undefinedType,
        union: unionType,
        unknown: unknownType,
        get util () { return util; },
        void: voidType
    });

    /**
     * Copyright 2024 Google LLC.
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
    var Bluetooth$1;
    (function (Bluetooth) {
        Bluetooth.BluetoothUuidSchema = z.lazy(() => z.string());
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.BluetoothManufacturerDataSchema = z.lazy(() => z.object({
            key: z.number().int().nonnegative(),
            data: z.string(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.CharacteristicPropertiesSchema = z.lazy(() => z.object({
            broadcast: z.boolean().optional(),
            read: z.boolean().optional(),
            writeWithoutResponse: z.boolean().optional(),
            write: z.boolean().optional(),
            notify: z.boolean().optional(),
            indicate: z.boolean().optional(),
            authenticatedSignedWrites: z.boolean().optional(),
            extendedProperties: z.boolean().optional(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.RequestDeviceSchema = z.lazy(() => z.string());
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.RequestDeviceInfoSchema = z.lazy(() => z.object({
            id: Bluetooth.RequestDeviceSchema,
            name: z.union([z.string(), z.null()]),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.RequestDevicePromptSchema = z.lazy(() => z.string());
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.ScanRecordSchema = z.lazy(() => z.object({
            name: z.string().optional(),
            uuids: z.array(Bluetooth.BluetoothUuidSchema).optional(),
            appearance: z.number().optional(),
            manufacturerData: z
                .array(Bluetooth.BluetoothManufacturerDataSchema)
                .optional(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    z.lazy(() => z.union([
        Bluetooth$1.HandleRequestDevicePromptSchema,
        Bluetooth$1.SimulateAdapterSchema,
        Bluetooth$1.DisableSimulationSchema,
        Bluetooth$1.SimulatePreconnectedPeripheralSchema,
        Bluetooth$1.SimulateAdvertisementSchema,
        Bluetooth$1.SimulateGattConnectionResponseSchema,
        Bluetooth$1.SimulateGattDisconnectionSchema,
        Bluetooth$1.SimulateServiceSchema,
        Bluetooth$1.SimulateCharacteristicSchema,
        Bluetooth$1.SimulateCharacteristicResponseSchema,
        Bluetooth$1.SimulateDescriptorSchema,
        Bluetooth$1.SimulateDescriptorResponseSchema,
    ]));
    (function (Bluetooth) {
        Bluetooth.HandleRequestDevicePromptSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.handleRequestDevicePrompt'),
            params: Bluetooth.HandleRequestDevicePromptParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.HandleRequestDevicePromptParametersSchema = z.lazy(() => z
            .object({
            context: z.string(),
            prompt: Bluetooth.RequestDevicePromptSchema,
        })
            .and(z.union([
            Bluetooth.HandleRequestDevicePromptAcceptParametersSchema,
            Bluetooth.HandleRequestDevicePromptCancelParametersSchema,
        ])));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.HandleRequestDevicePromptAcceptParametersSchema = z.lazy(() => z.object({
            accept: z.literal(true),
            device: Bluetooth.RequestDeviceSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.HandleRequestDevicePromptCancelParametersSchema = z.lazy(() => z.object({
            accept: z.literal(false),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateAdapterSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateAdapter'),
            params: Bluetooth.SimulateAdapterParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateAdapterParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            leSupported: z.boolean().optional(),
            state: z.enum(['absent', 'powered-off', 'powered-on']),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.DisableSimulationSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.disableSimulation'),
            params: Bluetooth.DisableSimulationParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.DisableSimulationParametersSchema = z.lazy(() => z.object({
            context: z.string(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulatePreconnectedPeripheralSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulatePreconnectedPeripheral'),
            params: Bluetooth.SimulatePreconnectedPeripheralParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulatePreconnectedPeripheralParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            name: z.string(),
            manufacturerData: z.array(Bluetooth.BluetoothManufacturerDataSchema),
            knownServiceUuids: z.array(Bluetooth.BluetoothUuidSchema),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateAdvertisementSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateAdvertisement'),
            params: Bluetooth.SimulateAdvertisementParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateAdvertisementParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            scanEntry: Bluetooth.SimulateAdvertisementScanEntryParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateAdvertisementScanEntryParametersSchema = z.lazy(() => z.object({
            deviceAddress: z.string(),
            rssi: z.number(),
            scanRecord: Bluetooth.ScanRecordSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateGattConnectionResponseSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateGattConnectionResponse'),
            params: Bluetooth.SimulateGattConnectionResponseParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateGattConnectionResponseParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            code: z.number().int().nonnegative(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateGattDisconnectionSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateGattDisconnection'),
            params: Bluetooth.SimulateGattDisconnectionParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateGattDisconnectionParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateServiceSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateService'),
            params: Bluetooth.SimulateServiceParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateServiceParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            uuid: Bluetooth.BluetoothUuidSchema,
            type: z.enum(['add', 'remove']),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateCharacteristicSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateCharacteristic'),
            params: Bluetooth.SimulateCharacteristicParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateCharacteristicParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            serviceUuid: Bluetooth.BluetoothUuidSchema,
            characteristicUuid: Bluetooth.BluetoothUuidSchema,
            characteristicProperties: Bluetooth.CharacteristicPropertiesSchema.optional(),
            type: z.enum(['add', 'remove']),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateCharacteristicResponseSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateCharacteristicResponse'),
            params: Bluetooth.SimulateCharacteristicResponseParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateCharacteristicResponseParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            serviceUuid: Bluetooth.BluetoothUuidSchema,
            characteristicUuid: Bluetooth.BluetoothUuidSchema,
            type: z.enum([
                'read',
                'write',
                'subscribe-to-notifications',
                'unsubscribe-from-notifications',
            ]),
            code: z.number().int().nonnegative(),
            data: z.array(z.number().int().nonnegative()).optional(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateDescriptorSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateDescriptor'),
            params: Bluetooth.SimulateDescriptorParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateDescriptorParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            serviceUuid: Bluetooth.BluetoothUuidSchema,
            characteristicUuid: Bluetooth.BluetoothUuidSchema,
            descriptorUuid: Bluetooth.BluetoothUuidSchema,
            type: z.enum(['add', 'remove']),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateDescriptorResponseSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.simulateDescriptorResponse'),
            params: Bluetooth.SimulateDescriptorResponseParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.SimulateDescriptorResponseParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            serviceUuid: Bluetooth.BluetoothUuidSchema,
            characteristicUuid: Bluetooth.BluetoothUuidSchema,
            descriptorUuid: Bluetooth.BluetoothUuidSchema,
            type: z.enum(['read', 'write']),
            code: z.number().int().nonnegative(),
            data: z.array(z.number().int().nonnegative()).optional(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    z.lazy(() => z.union([
        Bluetooth$1.RequestDevicePromptUpdatedSchema,
        Bluetooth$1.GattConnectionAttemptedSchema,
    ]));
    (function (Bluetooth) {
        Bluetooth.RequestDevicePromptUpdatedSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.requestDevicePromptUpdated'),
            params: Bluetooth.RequestDevicePromptUpdatedParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.RequestDevicePromptUpdatedParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            prompt: Bluetooth.RequestDevicePromptSchema,
            devices: z.array(Bluetooth.RequestDeviceInfoSchema),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.GattConnectionAttemptedSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.gattConnectionAttempted'),
            params: Bluetooth.GattConnectionAttemptedParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.GattConnectionAttemptedParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.CharacteristicEventGeneratedSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.characteristicEventGenerated'),
            params: Bluetooth.CharacteristicEventGeneratedParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.CharacteristicEventGeneratedParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            serviceUuid: Bluetooth.BluetoothUuidSchema,
            characteristicUuid: Bluetooth.BluetoothUuidSchema,
            type: z.enum([
                'read',
                'write-with-response',
                'write-without-response',
                'subscribe-to-notifications',
                'unsubscribe-from-notifications',
            ]),
            data: z.array(z.number().int().nonnegative()).optional(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.DescriptorEventGeneratedSchema = z.lazy(() => z.object({
            method: z.literal('bluetooth.descriptorEventGenerated'),
            params: Bluetooth.DescriptorEventGeneratedParametersSchema,
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));
    (function (Bluetooth) {
        Bluetooth.DescriptorEventGeneratedParametersSchema = z.lazy(() => z.object({
            context: z.string(),
            address: z.string(),
            serviceUuid: Bluetooth.BluetoothUuidSchema,
            characteristicUuid: Bluetooth.BluetoothUuidSchema,
            descriptorUuid: Bluetooth.BluetoothUuidSchema,
            type: z.enum(['read', 'write']),
            data: z.array(z.number().int().nonnegative()).optional(),
        }));
    })(Bluetooth$1 || (Bluetooth$1 = {}));

    /**
     * Copyright 2024 Google LLC.
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
    z.lazy(() => Permissions$1.SetPermissionSchema);
    var Permissions$1;
    (function (Permissions) {
        Permissions.PermissionDescriptorSchema = z.lazy(() => z.object({
            name: z.string(),
        }));
    })(Permissions$1 || (Permissions$1 = {}));
    (function (Permissions) {
        Permissions.PermissionStateSchema = z.lazy(() => z.enum(['granted', 'denied', 'prompt']));
    })(Permissions$1 || (Permissions$1 = {}));
    (function (Permissions) {
        Permissions.SetPermissionSchema = z.lazy(() => z.object({
            method: z.literal('permissions.setPermission'),
            params: Permissions.SetPermissionParametersSchema,
        }));
    })(Permissions$1 || (Permissions$1 = {}));
    (function (Permissions) {
        Permissions.SetPermissionParametersSchema = z.lazy(() => z.object({
            descriptor: Permissions.PermissionDescriptorSchema,
            state: Permissions.PermissionStateSchema,
            origin: z.string(),
            embeddedOrigin: z.string().optional(),
            userContext: z.string().optional(),
        }));
    })(Permissions$1 || (Permissions$1 = {}));

    /**
     * Copyright 2024 Google LLC.
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
    z.lazy(() => UserAgentClientHints.SetClientHintsOverrideCommandSchema);
    var UserAgentClientHints;
    (function (UserAgentClientHints) {
        UserAgentClientHints.SetClientHintsOverrideCommandSchema = z.lazy(() => z.object({
            method: z.literal('userAgentClientHints.setClientHintsOverride'),
            params: z.object({
                clientHints: z.union([
                    UserAgentClientHints.ClientHintsMetadataSchema,
                    z.null(),
                ]),
                contexts: z.array(z.string()).min(1).optional(),
                userContexts: z.array(z.string()).min(1).optional(),
            }),
        }));
    })(UserAgentClientHints || (UserAgentClientHints = {}));
    (function (UserAgentClientHints) {
        UserAgentClientHints.ClientHintsMetadataSchema = z.lazy(() => z.object({
            brands: z.array(UserAgentClientHints.BrandVersionSchema).optional(),
            fullVersionList: z
                .array(UserAgentClientHints.BrandVersionSchema)
                .optional(),
            platform: z.string().optional(),
            platformVersion: z.string().optional(),
            architecture: z.string().optional(),
            model: z.string().optional(),
            mobile: z.boolean().optional(),
            bitness: z.string().optional(),
            wow64: z.boolean().optional(),
            formFactors: z.array(z.string()).optional(),
        }));
    })(UserAgentClientHints || (UserAgentClientHints = {}));
    (function (UserAgentClientHints) {
        UserAgentClientHints.BrandVersionSchema = z.lazy(() => z.object({
            brand: z.string(),
            version: z.string(),
        }));
    })(UserAgentClientHints || (UserAgentClientHints = {}));
    (function (UserAgentClientHints) {
        UserAgentClientHints.SetClientHintsOverrideResultSchema = z.lazy(() => z.object({}));
    })(UserAgentClientHints || (UserAgentClientHints = {}));

    /**
     * Copyright 2024 Google LLC.
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
    z.lazy(() => z
        .object({
        id: JsUintSchema,
    })
        .and(CommandDataSchema)
        .and(ExtensibleSchema));
    const CommandDataSchema = z.lazy(() => z.union([
        BrowserCommandSchema,
        BrowsingContextCommandSchema,
        EmulationCommandSchema,
        InputCommandSchema,
        NetworkCommandSchema,
        ScriptCommandSchema,
        SessionCommandSchema,
        StorageCommandSchema,
        WebExtensionCommandSchema,
    ]));
    const EmptyParamsSchema = z.lazy(() => ExtensibleSchema);
    z.lazy(() => z.union([CommandResponseSchema, ErrorResponseSchema, EventSchema]));
    const CommandResponseSchema = z.lazy(() => z
        .object({
        type: z.literal('success'),
        id: JsUintSchema,
        result: ResultDataSchema,
    })
        .and(ExtensibleSchema));
    const ErrorResponseSchema = z.lazy(() => z
        .object({
        type: z.literal('error'),
        id: z.union([JsUintSchema, z.null()]),
        error: ErrorCodeSchema,
        message: z.string(),
        stacktrace: z.string().optional(),
    })
        .and(ExtensibleSchema));
    const ResultDataSchema = z.lazy(() => z.union([
        BrowserResultSchema,
        BrowsingContextResultSchema,
        EmulationResultSchema,
        InputResultSchema,
        NetworkResultSchema,
        ScriptResultSchema,
        SessionResultSchema,
        StorageResultSchema,
        WebExtensionResultSchema,
    ]));
    const EmptyResultSchema = z.lazy(() => ExtensibleSchema);
    const EventSchema = z.lazy(() => z
        .object({
        type: z.literal('event'),
    })
        .and(EventDataSchema)
        .and(ExtensibleSchema));
    const EventDataSchema = z.lazy(() => z.union([
        BrowsingContextEventSchema,
        InputEventSchema,
        LogEventSchema,
        NetworkEventSchema,
        ScriptEventSchema,
    ]));
    const ExtensibleSchema = z.lazy(() => z.record(z.string(), z.any()));
    const JsIntSchema = z
        .number()
        .int()
        .gte(-9007199254740991)
        .lte(9007199254740991);
    const JsUintSchema = z
        .number()
        .int()
        .nonnegative()
        .gte(0)
        .lte(9007199254740991);
    const ErrorCodeSchema = z.lazy(() => z.enum([
        'invalid argument',
        'invalid selector',
        'invalid session id',
        'invalid web extension',
        'move target out of bounds',
        'no such alert',
        'no such network collector',
        'no such element',
        'no such frame',
        'no such handle',
        'no such history entry',
        'no such intercept',
        'no such network data',
        'no such node',
        'no such request',
        'no such script',
        'no such storage partition',
        'no such user context',
        'no such web extension',
        'session not created',
        'unable to capture screen',
        'unable to close browser',
        'unable to set cookie',
        'unable to set file input',
        'unavailable network data',
        'underspecified storage partition',
        'unknown command',
        'unknown error',
        'unsupported operation',
    ]));
    const SessionCommandSchema = z.lazy(() => z.union([
        Session$1.EndSchema,
        Session$1.NewSchema,
        Session$1.StatusSchema,
        Session$1.SubscribeSchema,
        Session$1.UnsubscribeSchema,
    ]));
    const SessionResultSchema = z.lazy(() => z.union([
        Session$1.EndResultSchema,
        Session$1.NewResultSchema,
        Session$1.StatusResultSchema,
        Session$1.SubscribeResultSchema,
        Session$1.UnsubscribeResultSchema,
    ]));
    var Session$1;
    (function (Session) {
        Session.CapabilitiesRequestSchema = z.lazy(() => z.object({
            alwaysMatch: Session.CapabilityRequestSchema.optional(),
            firstMatch: z.array(Session.CapabilityRequestSchema).optional(),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.CapabilityRequestSchema = z.lazy(() => z
            .object({
            acceptInsecureCerts: z.boolean().optional(),
            browserName: z.string().optional(),
            browserVersion: z.string().optional(),
            platformName: z.string().optional(),
            proxy: Session.ProxyConfigurationSchema.optional(),
            unhandledPromptBehavior: Session.UserPromptHandlerSchema.optional(),
        })
            .and(ExtensibleSchema));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.ProxyConfigurationSchema = z.lazy(() => z.union([
            Session.AutodetectProxyConfigurationSchema,
            Session.DirectProxyConfigurationSchema,
            Session.ManualProxyConfigurationSchema,
            Session.PacProxyConfigurationSchema,
            Session.SystemProxyConfigurationSchema,
        ]));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.AutodetectProxyConfigurationSchema = z.lazy(() => z
            .object({
            proxyType: z.literal('autodetect'),
        })
            .and(ExtensibleSchema));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.DirectProxyConfigurationSchema = z.lazy(() => z
            .object({
            proxyType: z.literal('direct'),
        })
            .and(ExtensibleSchema));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.ManualProxyConfigurationSchema = z.lazy(() => z
            .object({
            proxyType: z.literal('manual'),
            httpProxy: z.string().optional(),
            sslProxy: z.string().optional(),
        })
            .and(Session.SocksProxyConfigurationSchema.or(z.object({})))
            .and(z.object({
            noProxy: z.array(z.string()).optional(),
        }))
            .and(ExtensibleSchema));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.SocksProxyConfigurationSchema = z.lazy(() => z.object({
            socksProxy: z.string(),
            socksVersion: z.number().int().nonnegative().gte(0).lte(255),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.PacProxyConfigurationSchema = z.lazy(() => z
            .object({
            proxyType: z.literal('pac'),
            proxyAutoconfigUrl: z.string(),
        })
            .and(ExtensibleSchema));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.SystemProxyConfigurationSchema = z.lazy(() => z
            .object({
            proxyType: z.literal('system'),
        })
            .and(ExtensibleSchema));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.UserPromptHandlerSchema = z.lazy(() => z.object({
            alert: Session.UserPromptHandlerTypeSchema.optional(),
            beforeUnload: Session.UserPromptHandlerTypeSchema.optional(),
            confirm: Session.UserPromptHandlerTypeSchema.optional(),
            default: Session.UserPromptHandlerTypeSchema.optional(),
            file: Session.UserPromptHandlerTypeSchema.optional(),
            prompt: Session.UserPromptHandlerTypeSchema.optional(),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.UserPromptHandlerTypeSchema = z.lazy(() => z.enum(['accept', 'dismiss', 'ignore']));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.SubscriptionSchema = z.lazy(() => z.string());
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.SubscribeParametersSchema = z.lazy(() => z.object({
            events: z.array(z.string()).min(1),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.UnsubscribeByIdRequestSchema = z.lazy(() => z.object({
            subscriptions: z.array(Session.SubscriptionSchema).min(1),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.UnsubscribeByAttributesRequestSchema = z.lazy(() => z.object({
            events: z.array(z.string()).min(1),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.StatusSchema = z.lazy(() => z.object({
            method: z.literal('session.status'),
            params: EmptyParamsSchema,
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.StatusResultSchema = z.lazy(() => z.object({
            ready: z.boolean(),
            message: z.string(),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.NewSchema = z.lazy(() => z.object({
            method: z.literal('session.new'),
            params: Session.NewParametersSchema,
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.NewParametersSchema = z.lazy(() => z.object({
            capabilities: Session.CapabilitiesRequestSchema,
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.NewResultSchema = z.lazy(() => z.object({
            sessionId: z.string(),
            capabilities: z
                .object({
                acceptInsecureCerts: z.boolean(),
                browserName: z.string(),
                browserVersion: z.string(),
                platformName: z.string(),
                setWindowRect: z.boolean(),
                userAgent: z.string(),
                proxy: Session.ProxyConfigurationSchema.optional(),
                unhandledPromptBehavior: Session.UserPromptHandlerSchema.optional(),
                webSocketUrl: z.string().optional(),
            })
                .and(ExtensibleSchema),
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.EndSchema = z.lazy(() => z.object({
            method: z.literal('session.end'),
            params: EmptyParamsSchema,
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.EndResultSchema = z.lazy(() => EmptyResultSchema);
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.SubscribeSchema = z.lazy(() => z.object({
            method: z.literal('session.subscribe'),
            params: Session.SubscribeParametersSchema,
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.SubscribeResultSchema = z.lazy(() => z.object({
            subscription: Session.SubscriptionSchema,
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.UnsubscribeSchema = z.lazy(() => z.object({
            method: z.literal('session.unsubscribe'),
            params: Session.UnsubscribeParametersSchema,
        }));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.UnsubscribeParametersSchema = z.lazy(() => z.union([
            Session.UnsubscribeByAttributesRequestSchema,
            Session.UnsubscribeByIdRequestSchema,
        ]));
    })(Session$1 || (Session$1 = {}));
    (function (Session) {
        Session.UnsubscribeResultSchema = z.lazy(() => EmptyResultSchema);
    })(Session$1 || (Session$1 = {}));
    const BrowserCommandSchema = z.lazy(() => z.union([
        Browser$1.CloseSchema,
        Browser$1.CreateUserContextSchema,
        Browser$1.GetClientWindowsSchema,
        Browser$1.GetUserContextsSchema,
        Browser$1.RemoveUserContextSchema,
        Browser$1.SetClientWindowStateSchema,
        Browser$1.SetDownloadBehaviorSchema,
    ]));
    const BrowserResultSchema = z.lazy(() => z.union([
        Browser$1.CloseResultSchema,
        Browser$1.CreateUserContextResultSchema,
        Browser$1.GetClientWindowsResultSchema,
        Browser$1.GetUserContextsResultSchema,
        Browser$1.RemoveUserContextResultSchema,
        Browser$1.SetClientWindowStateResultSchema,
        Browser$1.SetDownloadBehaviorResultSchema,
    ]));
    var Browser$1;
    (function (Browser) {
        Browser.ClientWindowSchema = z.lazy(() => z.string());
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.ClientWindowInfoSchema = z.lazy(() => z.object({
            active: z.boolean(),
            clientWindow: Browser.ClientWindowSchema,
            height: JsUintSchema,
            state: z.enum(['fullscreen', 'maximized', 'minimized', 'normal']),
            width: JsUintSchema,
            x: JsIntSchema,
            y: JsIntSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.UserContextSchema = z.lazy(() => z.string());
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.UserContextInfoSchema = z.lazy(() => z.object({
            userContext: Browser.UserContextSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.CloseSchema = z.lazy(() => z.object({
            method: z.literal('browser.close'),
            params: EmptyParamsSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.CloseResultSchema = z.lazy(() => EmptyResultSchema);
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.CreateUserContextSchema = z.lazy(() => z.object({
            method: z.literal('browser.createUserContext'),
            params: Browser.CreateUserContextParametersSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.CreateUserContextParametersSchema = z.lazy(() => z.object({
            acceptInsecureCerts: z.boolean().optional(),
            proxy: Session$1.ProxyConfigurationSchema.optional(),
            unhandledPromptBehavior: Session$1.UserPromptHandlerSchema.optional(),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.CreateUserContextResultSchema = z.lazy(() => Browser.UserContextInfoSchema);
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.GetClientWindowsSchema = z.lazy(() => z.object({
            method: z.literal('browser.getClientWindows'),
            params: EmptyParamsSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.GetClientWindowsResultSchema = z.lazy(() => z.object({
            clientWindows: z.array(Browser.ClientWindowInfoSchema),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.GetUserContextsSchema = z.lazy(() => z.object({
            method: z.literal('browser.getUserContexts'),
            params: EmptyParamsSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.GetUserContextsResultSchema = z.lazy(() => z.object({
            userContexts: z.array(Browser.UserContextInfoSchema).min(1),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.RemoveUserContextSchema = z.lazy(() => z.object({
            method: z.literal('browser.removeUserContext'),
            params: Browser.RemoveUserContextParametersSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.RemoveUserContextParametersSchema = z.lazy(() => z.object({
            userContext: Browser.UserContextSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.RemoveUserContextResultSchema = z.lazy(() => EmptyResultSchema);
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.SetClientWindowStateSchema = z.lazy(() => z.object({
            method: z.literal('browser.setClientWindowState'),
            params: Browser.SetClientWindowStateParametersSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.SetClientWindowStateParametersSchema = z.lazy(() => z
            .object({
            clientWindow: Browser.ClientWindowSchema,
        })
            .and(z.union([
            Browser.ClientWindowNamedStateSchema,
            Browser.ClientWindowRectStateSchema,
        ])));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.ClientWindowNamedStateSchema = z.lazy(() => z.object({
            state: z.enum(['fullscreen', 'maximized', 'minimized']),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.ClientWindowRectStateSchema = z.lazy(() => z.object({
            state: z.literal('normal'),
            width: JsUintSchema.optional(),
            height: JsUintSchema.optional(),
            x: JsIntSchema.optional(),
            y: JsIntSchema.optional(),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.SetClientWindowStateResultSchema = z.lazy(() => Browser.ClientWindowInfoSchema);
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.SetDownloadBehaviorSchema = z.lazy(() => z.object({
            method: z.literal('browser.setDownloadBehavior'),
            params: Browser.SetDownloadBehaviorParametersSchema,
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.SetDownloadBehaviorParametersSchema = z.lazy(() => z.object({
            downloadBehavior: z.union([Browser.DownloadBehaviorSchema, z.null()]),
            userContexts: z.array(Browser.UserContextSchema).min(1).optional(),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.DownloadBehaviorSchema = z.lazy(() => z.union([
            Browser.DownloadBehaviorAllowedSchema,
            Browser.DownloadBehaviorDeniedSchema,
        ]));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.DownloadBehaviorAllowedSchema = z.lazy(() => z.object({
            type: z.literal('allowed'),
            destinationFolder: z.string(),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.DownloadBehaviorDeniedSchema = z.lazy(() => z.object({
            type: z.literal('denied'),
        }));
    })(Browser$1 || (Browser$1 = {}));
    (function (Browser) {
        Browser.SetDownloadBehaviorResultSchema = z.lazy(() => EmptyResultSchema);
    })(Browser$1 || (Browser$1 = {}));
    const BrowsingContextCommandSchema = z.lazy(() => z.union([
        BrowsingContext$1.ActivateSchema,
        BrowsingContext$1.CaptureScreenshotSchema,
        BrowsingContext$1.CloseSchema,
        BrowsingContext$1.CreateSchema,
        BrowsingContext$1.GetTreeSchema,
        BrowsingContext$1.HandleUserPromptSchema,
        BrowsingContext$1.LocateNodesSchema,
        BrowsingContext$1.NavigateSchema,
        BrowsingContext$1.PrintSchema,
        BrowsingContext$1.ReloadSchema,
        BrowsingContext$1.SetBypassCspSchema,
        BrowsingContext$1.SetViewportSchema,
        BrowsingContext$1.TraverseHistorySchema,
    ]));
    const BrowsingContextResultSchema = z.lazy(() => z.union([
        BrowsingContext$1.ActivateResultSchema,
        BrowsingContext$1.CaptureScreenshotResultSchema,
        BrowsingContext$1.CloseResultSchema,
        BrowsingContext$1.CreateResultSchema,
        BrowsingContext$1.GetTreeResultSchema,
        BrowsingContext$1.HandleUserPromptResultSchema,
        BrowsingContext$1.LocateNodesResultSchema,
        BrowsingContext$1.NavigateResultSchema,
        BrowsingContext$1.PrintResultSchema,
        BrowsingContext$1.ReloadResultSchema,
        BrowsingContext$1.SetBypassCspResultSchema,
        BrowsingContext$1.SetViewportResultSchema,
        BrowsingContext$1.TraverseHistoryResultSchema,
    ]));
    const BrowsingContextEventSchema = z.lazy(() => z.union([
        BrowsingContext$1.ContextCreatedSchema,
        BrowsingContext$1.ContextDestroyedSchema,
        BrowsingContext$1.DomContentLoadedSchema,
        BrowsingContext$1.DownloadEndSchema,
        BrowsingContext$1.DownloadWillBeginSchema,
        BrowsingContext$1.FragmentNavigatedSchema,
        BrowsingContext$1.HistoryUpdatedSchema,
        BrowsingContext$1.LoadSchema,
        BrowsingContext$1.NavigationAbortedSchema,
        BrowsingContext$1.NavigationCommittedSchema,
        BrowsingContext$1.NavigationFailedSchema,
        BrowsingContext$1.NavigationStartedSchema,
        BrowsingContext$1.UserPromptClosedSchema,
        BrowsingContext$1.UserPromptOpenedSchema,
    ]));
    var BrowsingContext$1;
    (function (BrowsingContext) {
        BrowsingContext.BrowsingContextSchema = z.lazy(() => z.string());
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.InfoListSchema = z.lazy(() => z.array(BrowsingContext.InfoSchema));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.InfoSchema = z.lazy(() => z.object({
            children: z.union([BrowsingContext.InfoListSchema, z.null()]),
            clientWindow: Browser$1.ClientWindowSchema,
            context: BrowsingContext.BrowsingContextSchema,
            originalOpener: z.union([
                BrowsingContext.BrowsingContextSchema,
                z.null(),
            ]),
            url: z.string(),
            userContext: Browser$1.UserContextSchema,
            parent: z
                .union([BrowsingContext.BrowsingContextSchema, z.null()])
                .optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.LocatorSchema = z.lazy(() => z.union([
            BrowsingContext.AccessibilityLocatorSchema,
            BrowsingContext.CssLocatorSchema,
            BrowsingContext.ContextLocatorSchema,
            BrowsingContext.InnerTextLocatorSchema,
            BrowsingContext.XPathLocatorSchema,
        ]));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.AccessibilityLocatorSchema = z.lazy(() => z.object({
            type: z.literal('accessibility'),
            value: z.object({
                name: z.string().optional(),
                role: z.string().optional(),
            }),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CssLocatorSchema = z.lazy(() => z.object({
            type: z.literal('css'),
            value: z.string(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ContextLocatorSchema = z.lazy(() => z.object({
            type: z.literal('context'),
            value: z.object({
                context: BrowsingContext.BrowsingContextSchema,
            }),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.InnerTextLocatorSchema = z.lazy(() => z.object({
            type: z.literal('innerText'),
            value: z.string(),
            ignoreCase: z.boolean().optional(),
            matchType: z.enum(['full', 'partial']).optional(),
            maxDepth: JsUintSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.XPathLocatorSchema = z.lazy(() => z.object({
            type: z.literal('xpath'),
            value: z.string(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigationSchema = z.lazy(() => z.string());
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.BaseNavigationInfoSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            navigation: z.union([BrowsingContext.NavigationSchema, z.null()]),
            timestamp: JsUintSchema,
            url: z.string(),
            userContext: Browser$1.UserContextSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigationInfoSchema = z.lazy(() => BrowsingContext.BaseNavigationInfoSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ReadinessStateSchema = z.lazy(() => z.enum(['none', 'interactive', 'complete']));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.UserPromptTypeSchema = z.lazy(() => z.enum(['alert', 'beforeunload', 'confirm', 'prompt']));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ActivateSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.activate'),
            params: BrowsingContext.ActivateParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ActivateParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ActivateResultSchema = z.lazy(() => EmptyResultSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CaptureScreenshotSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.captureScreenshot'),
            params: BrowsingContext.CaptureScreenshotParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CaptureScreenshotParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            origin: z.enum(['viewport', 'document']).default('viewport').optional(),
            format: BrowsingContext.ImageFormatSchema.optional(),
            clip: BrowsingContext.ClipRectangleSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ImageFormatSchema = z.lazy(() => z.object({
            type: z.string(),
            quality: z.number().gte(0).lte(1).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ClipRectangleSchema = z.lazy(() => z.union([
            BrowsingContext.BoxClipRectangleSchema,
            BrowsingContext.ElementClipRectangleSchema,
        ]));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ElementClipRectangleSchema = z.lazy(() => z.object({
            type: z.literal('element'),
            element: Script$1.SharedReferenceSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.BoxClipRectangleSchema = z.lazy(() => z.object({
            type: z.literal('box'),
            x: z.number(),
            y: z.number(),
            width: z.number(),
            height: z.number(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CaptureScreenshotResultSchema = z.lazy(() => z.object({
            data: z.string(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CloseSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.close'),
            params: BrowsingContext.CloseParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CloseParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            promptUnload: z.boolean().default(false).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CloseResultSchema = z.lazy(() => EmptyResultSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CreateSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.create'),
            params: BrowsingContext.CreateParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CreateTypeSchema = z.lazy(() => z.enum(['tab', 'window']));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CreateParametersSchema = z.lazy(() => z.object({
            type: BrowsingContext.CreateTypeSchema,
            referenceContext: BrowsingContext.BrowsingContextSchema.optional(),
            background: z.boolean().default(false).optional(),
            userContext: Browser$1.UserContextSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.CreateResultSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            userContext: Browser$1.UserContextSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.GetTreeSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.getTree'),
            params: BrowsingContext.GetTreeParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.GetTreeParametersSchema = z.lazy(() => z.object({
            maxDepth: JsUintSchema.optional(),
            root: BrowsingContext.BrowsingContextSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.GetTreeResultSchema = z.lazy(() => z.object({
            contexts: BrowsingContext.InfoListSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.HandleUserPromptSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.handleUserPrompt'),
            params: BrowsingContext.HandleUserPromptParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.HandleUserPromptParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            accept: z.boolean().optional(),
            userText: z.string().optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.HandleUserPromptResultSchema = z.lazy(() => EmptyResultSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.LocateNodesSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.locateNodes'),
            params: BrowsingContext.LocateNodesParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.LocateNodesParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            locator: BrowsingContext.LocatorSchema,
            maxNodeCount: JsUintSchema.gte(1).optional(),
            serializationOptions: Script$1.SerializationOptionsSchema.optional(),
            startNodes: z.array(Script$1.SharedReferenceSchema).min(1).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.LocateNodesResultSchema = z.lazy(() => z.object({
            nodes: z.array(Script$1.NodeRemoteValueSchema),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigateSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.navigate'),
            params: BrowsingContext.NavigateParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigateParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            url: z.string(),
            wait: BrowsingContext.ReadinessStateSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigateResultSchema = z.lazy(() => z.object({
            navigation: z.union([BrowsingContext.NavigationSchema, z.null()]),
            url: z.string(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.PrintSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.print'),
            params: BrowsingContext.PrintParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.PrintParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            background: z.boolean().default(false).optional(),
            margin: BrowsingContext.PrintMarginParametersSchema.optional(),
            orientation: z
                .enum(['portrait', 'landscape'])
                .default('portrait')
                .optional(),
            page: BrowsingContext.PrintPageParametersSchema.optional(),
            pageRanges: z.array(z.union([JsUintSchema, z.string()])).optional(),
            scale: z.number().gte(0.1).lte(2).default(1).optional(),
            shrinkToFit: z.boolean().default(true).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.PrintMarginParametersSchema = z.lazy(() => z.object({
            bottom: z.number().gte(0).default(1).optional(),
            left: z.number().gte(0).default(1).optional(),
            right: z.number().gte(0).default(1).optional(),
            top: z.number().gte(0).default(1).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.PrintPageParametersSchema = z.lazy(() => z.object({
            height: z.number().gte(0.0352).default(27.94).optional(),
            width: z.number().gte(0.0352).default(21.59).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.PrintResultSchema = z.lazy(() => z.object({
            data: z.string(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ReloadSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.reload'),
            params: BrowsingContext.ReloadParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ReloadParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            ignoreCache: z.boolean().optional(),
            wait: BrowsingContext.ReadinessStateSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ReloadResultSchema = z.lazy(() => BrowsingContext.NavigateResultSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.SetBypassCspSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.setBypassCSP'),
            params: BrowsingContext.SetBypassCspParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.SetBypassCspParametersSchema = z.lazy(() => z.object({
            bypass: z.union([z.literal(true), z.null()]),
            contexts: z
                .array(BrowsingContext.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.SetBypassCspResultSchema = z.lazy(() => EmptyResultSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.SetViewportSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.setViewport'),
            params: BrowsingContext.SetViewportParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.SetViewportParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema.optional(),
            viewport: z.union([BrowsingContext.ViewportSchema, z.null()]).optional(),
            devicePixelRatio: z.union([z.number().gt(0), z.null()]).optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ViewportSchema = z.lazy(() => z.object({
            width: JsUintSchema,
            height: JsUintSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.SetViewportResultSchema = z.lazy(() => EmptyResultSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.TraverseHistorySchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.traverseHistory'),
            params: BrowsingContext.TraverseHistoryParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.TraverseHistoryParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            delta: JsIntSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.TraverseHistoryResultSchema = z.lazy(() => EmptyResultSchema);
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ContextCreatedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.contextCreated'),
            params: BrowsingContext.InfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.ContextDestroyedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.contextDestroyed'),
            params: BrowsingContext.InfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigationStartedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.navigationStarted'),
            params: BrowsingContext.NavigationInfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.FragmentNavigatedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.fragmentNavigated'),
            params: BrowsingContext.NavigationInfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.HistoryUpdatedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.historyUpdated'),
            params: BrowsingContext.HistoryUpdatedParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.HistoryUpdatedParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            timestamp: JsUintSchema,
            url: z.string(),
            userContext: Browser$1.UserContextSchema.optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.DomContentLoadedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.domContentLoaded'),
            params: BrowsingContext.NavigationInfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.LoadSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.load'),
            params: BrowsingContext.NavigationInfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.DownloadWillBeginSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.downloadWillBegin'),
            params: BrowsingContext.DownloadWillBeginParamsSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.DownloadWillBeginParamsSchema = z.lazy(() => z
            .object({
            suggestedFilename: z.string(),
        })
            .and(BrowsingContext.BaseNavigationInfoSchema));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.DownloadEndSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.downloadEnd'),
            params: BrowsingContext.DownloadEndParamsSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.DownloadEndParamsSchema = z.lazy(() => z.union([
            BrowsingContext.DownloadCanceledParamsSchema,
            BrowsingContext.DownloadCompleteParamsSchema,
        ]));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.DownloadCanceledParamsSchema = z.lazy(() => z
            .object({
            status: z.literal('canceled'),
        })
            .and(BrowsingContext.BaseNavigationInfoSchema));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.DownloadCompleteParamsSchema = z.lazy(() => z
            .object({
            status: z.literal('complete'),
            filepath: z.union([z.string(), z.null()]),
        })
            .and(BrowsingContext.BaseNavigationInfoSchema));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigationAbortedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.navigationAborted'),
            params: BrowsingContext.NavigationInfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigationCommittedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.navigationCommitted'),
            params: BrowsingContext.NavigationInfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.NavigationFailedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.navigationFailed'),
            params: BrowsingContext.NavigationInfoSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.UserPromptClosedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.userPromptClosed'),
            params: BrowsingContext.UserPromptClosedParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.UserPromptClosedParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            accepted: z.boolean(),
            type: BrowsingContext.UserPromptTypeSchema,
            userContext: Browser$1.UserContextSchema.optional(),
            userText: z.string().optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.UserPromptOpenedSchema = z.lazy(() => z.object({
            method: z.literal('browsingContext.userPromptOpened'),
            params: BrowsingContext.UserPromptOpenedParametersSchema,
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    (function (BrowsingContext) {
        BrowsingContext.UserPromptOpenedParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext.BrowsingContextSchema,
            handler: Session$1.UserPromptHandlerTypeSchema,
            message: z.string(),
            type: BrowsingContext.UserPromptTypeSchema,
            userContext: Browser$1.UserContextSchema.optional(),
            defaultValue: z.string().optional(),
        }));
    })(BrowsingContext$1 || (BrowsingContext$1 = {}));
    const EmulationCommandSchema = z.lazy(() => z.union([
        Emulation$1.SetForcedColorsModeThemeOverrideSchema,
        Emulation$1.SetGeolocationOverrideSchema,
        Emulation$1.SetLocaleOverrideSchema,
        Emulation$1.SetNetworkConditionsSchema,
        Emulation$1.SetScreenOrientationOverrideSchema,
        Emulation$1.SetScreenSettingsOverrideSchema,
        Emulation$1.SetScriptingEnabledSchema,
        Emulation$1.SetScrollbarTypeOverrideSchema,
        Emulation$1.SetTimezoneOverrideSchema,
        Emulation$1.SetTouchOverrideSchema,
        Emulation$1.SetUserAgentOverrideSchema,
    ]));
    const EmulationResultSchema = z.lazy(() => z.union([
        Emulation$1.SetForcedColorsModeThemeOverrideResultSchema,
        Emulation$1.SetGeolocationOverrideResultSchema,
        Emulation$1.SetLocaleOverrideResultSchema,
        Emulation$1.SetScreenOrientationOverrideResultSchema,
        Emulation$1.SetScriptingEnabledResultSchema,
        Emulation$1.SetScrollbarTypeOverrideResultSchema,
        Emulation$1.SetTimezoneOverrideResultSchema,
        Emulation$1.SetTouchOverrideResultSchema,
        Emulation$1.SetUserAgentOverrideResultSchema,
    ]));
    var Emulation$1;
    (function (Emulation) {
        Emulation.SetForcedColorsModeThemeOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setForcedColorsModeThemeOverride'),
            params: Emulation.SetForcedColorsModeThemeOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetForcedColorsModeThemeOverrideParametersSchema = z.lazy(() => z.object({
            theme: z.union([Emulation.ForcedColorsModeThemeSchema, z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.ForcedColorsModeThemeSchema = z.lazy(() => z.enum(['light', 'dark']));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetForcedColorsModeThemeOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetGeolocationOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setGeolocationOverride'),
            params: Emulation.SetGeolocationOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetGeolocationOverrideParametersSchema = z.lazy(() => z
            .union([
            z.object({
                coordinates: z.union([
                    Emulation.GeolocationCoordinatesSchema,
                    z.null(),
                ]),
            }),
            z.object({
                error: Emulation.GeolocationPositionErrorSchema,
            }),
        ])
            .and(z.object({
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        })));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.GeolocationCoordinatesSchema = z.lazy(() => z.object({
            latitude: z.number().gte(-90).lte(90),
            longitude: z.number().gte(-180).lte(180),
            accuracy: z.number().gte(0).default(1).optional(),
            altitude: z.union([z.number(), z.null().default(null)]).optional(),
            altitudeAccuracy: z
                .union([z.number().gte(0), z.null().default(null)])
                .optional(),
            heading: z
                .union([z.number().gt(0).lt(360), z.null().default(null)])
                .optional(),
            speed: z.union([z.number().gte(0), z.null().default(null)]).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.GeolocationPositionErrorSchema = z.lazy(() => z.object({
            type: z.literal('positionUnavailable'),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetGeolocationOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetLocaleOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setLocaleOverride'),
            params: Emulation.SetLocaleOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetLocaleOverrideParametersSchema = z.lazy(() => z.object({
            locale: z.union([z.string(), z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetLocaleOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetNetworkConditionsSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setNetworkConditions'),
            params: Emulation.SetNetworkConditionsParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetNetworkConditionsParametersSchema = z.lazy(() => z.object({
            networkConditions: z.union([Emulation.NetworkConditionsSchema, z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.NetworkConditionsSchema = z.lazy(() => Emulation.NetworkConditionsOfflineSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.NetworkConditionsOfflineSchema = z.lazy(() => z.object({
            type: z.literal('offline'),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetNetworkConditionsResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScreenSettingsOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setScreenSettingsOverride'),
            params: Emulation.SetScreenSettingsOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.ScreenAreaSchema = z.lazy(() => z.object({
            width: JsUintSchema,
            height: JsUintSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScreenSettingsOverrideParametersSchema = z.lazy(() => z.object({
            screenArea: z.union([Emulation.ScreenAreaSchema, z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScreenSettingsOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScreenOrientationOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setScreenOrientationOverride'),
            params: Emulation.SetScreenOrientationOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.ScreenOrientationNaturalSchema = z.lazy(() => z.enum(['portrait', 'landscape']));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.ScreenOrientationTypeSchema = z.lazy(() => z.enum([
            'portrait-primary',
            'portrait-secondary',
            'landscape-primary',
            'landscape-secondary',
        ]));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.ScreenOrientationSchema = z.lazy(() => z.object({
            natural: Emulation.ScreenOrientationNaturalSchema,
            type: Emulation.ScreenOrientationTypeSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScreenOrientationOverrideParametersSchema = z.lazy(() => z.object({
            screenOrientation: z.union([Emulation.ScreenOrientationSchema, z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScreenOrientationOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetUserAgentOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setUserAgentOverride'),
            params: Emulation.SetUserAgentOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetUserAgentOverrideParametersSchema = z.lazy(() => z.object({
            userAgent: z.union([z.string(), z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetUserAgentOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScriptingEnabledSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setScriptingEnabled'),
            params: Emulation.SetScriptingEnabledParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScriptingEnabledParametersSchema = z.lazy(() => z.object({
            enabled: z.union([z.literal(false), z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScriptingEnabledResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScrollbarTypeOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setScrollbarTypeOverride'),
            params: Emulation.SetScrollbarTypeOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScrollbarTypeOverrideParametersSchema = z.lazy(() => z.object({
            scrollbarType: z.union([
                z.literal('classic'),
                z.literal('overlay'),
                z.null(),
            ]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetScrollbarTypeOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetTimezoneOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setTimezoneOverride'),
            params: Emulation.SetTimezoneOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetTimezoneOverrideParametersSchema = z.lazy(() => z.object({
            timezone: z.union([z.string(), z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetTimezoneOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetTouchOverrideSchema = z.lazy(() => z.object({
            method: z.literal('emulation.setTouchOverride'),
            params: Emulation.SetTouchOverrideParametersSchema,
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetTouchOverrideParametersSchema = z.lazy(() => z.object({
            maxTouchPoints: z.union([JsUintSchema.gte(1), z.null()]),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Emulation$1 || (Emulation$1 = {}));
    (function (Emulation) {
        Emulation.SetTouchOverrideResultSchema = z.lazy(() => EmptyResultSchema);
    })(Emulation$1 || (Emulation$1 = {}));
    const NetworkCommandSchema = z.lazy(() => z.union([
        Network$1.AddDataCollectorSchema,
        Network$1.AddInterceptSchema,
        Network$1.ContinueRequestSchema,
        Network$1.ContinueResponseSchema,
        Network$1.ContinueWithAuthSchema,
        Network$1.DisownDataSchema,
        Network$1.FailRequestSchema,
        Network$1.GetDataSchema,
        Network$1.ProvideResponseSchema,
        Network$1.RemoveDataCollectorSchema,
        Network$1.RemoveInterceptSchema,
        Network$1.SetCacheBehaviorSchema,
        Network$1.SetExtraHeadersSchema,
    ]));
    const NetworkResultSchema = z.lazy(() => z.union([
        Network$1.AddDataCollectorResultSchema,
        Network$1.AddInterceptResultSchema,
        Network$1.ContinueRequestResultSchema,
        Network$1.ContinueResponseResultSchema,
        Network$1.ContinueWithAuthResultSchema,
        Network$1.DisownDataResultSchema,
        Network$1.FailRequestResultSchema,
        Network$1.GetDataResultSchema,
        Network$1.ProvideResponseResultSchema,
        Network$1.RemoveDataCollectorResultSchema,
        Network$1.RemoveInterceptResultSchema,
        Network$1.SetCacheBehaviorResultSchema,
        Network$1.SetExtraHeadersResultSchema,
    ]));
    const NetworkEventSchema = z.lazy(() => z.union([
        Network$1.AuthRequiredSchema,
        Network$1.BeforeRequestSentSchema,
        Network$1.FetchErrorSchema,
        Network$1.ResponseCompletedSchema,
        Network$1.ResponseStartedSchema,
    ]));
    var Network$1;
    (function (Network) {
        Network.AuthChallengeSchema = z.lazy(() => z.object({
            scheme: z.string(),
            realm: z.string(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AuthCredentialsSchema = z.lazy(() => z.object({
            type: z.literal('password'),
            username: z.string(),
            password: z.string(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.BaseParametersSchema = z.lazy(() => z.object({
            context: z.union([BrowsingContext$1.BrowsingContextSchema, z.null()]),
            isBlocked: z.boolean(),
            navigation: z.union([BrowsingContext$1.NavigationSchema, z.null()]),
            redirectCount: JsUintSchema,
            request: Network.RequestDataSchema,
            timestamp: JsUintSchema,
            userContext: z.union([Browser$1.UserContextSchema, z.null()]).optional(),
            intercepts: z.array(Network.InterceptSchema).min(1).optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.BytesValueSchema = z.lazy(() => z.union([Network.StringValueSchema, Network.Base64ValueSchema]));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.StringValueSchema = z.lazy(() => z.object({
            type: z.literal('string'),
            value: z.string(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.Base64ValueSchema = z.lazy(() => z.object({
            type: z.literal('base64'),
            value: z.string(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.CollectorSchema = z.lazy(() => z.string());
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.CollectorTypeSchema = z.literal('blob');
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SameSiteSchema = z.lazy(() => z.enum(['strict', 'lax', 'none', 'default']));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.CookieSchema = z.lazy(() => z
            .object({
            name: z.string(),
            value: Network.BytesValueSchema,
            domain: z.string(),
            path: z.string(),
            size: JsUintSchema,
            httpOnly: z.boolean(),
            secure: z.boolean(),
            sameSite: Network.SameSiteSchema,
            expiry: JsUintSchema.optional(),
        })
            .and(ExtensibleSchema));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.CookieHeaderSchema = z.lazy(() => z.object({
            name: z.string(),
            value: Network.BytesValueSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.DataTypeSchema = z.lazy(() => z.enum(['request', 'response']));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.FetchTimingInfoSchema = z.lazy(() => z.object({
            timeOrigin: z.number(),
            requestTime: z.number(),
            redirectStart: z.number(),
            redirectEnd: z.number(),
            fetchStart: z.number(),
            dnsStart: z.number(),
            dnsEnd: z.number(),
            connectStart: z.number(),
            connectEnd: z.number(),
            tlsStart: z.number(),
            requestStart: z.number(),
            responseStart: z.number(),
            responseEnd: z.number(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.HeaderSchema = z.lazy(() => z.object({
            name: z.string(),
            value: Network.BytesValueSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.InitiatorSchema = z.lazy(() => z.object({
            columnNumber: JsUintSchema.optional(),
            lineNumber: JsUintSchema.optional(),
            request: Network.RequestSchema.optional(),
            stackTrace: Script$1.StackTraceSchema.optional(),
            type: z.enum(['parser', 'script', 'preflight', 'other']).optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.InterceptSchema = z.lazy(() => z.string());
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RequestSchema = z.lazy(() => z.string());
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RequestDataSchema = z.lazy(() => z.object({
            request: Network.RequestSchema,
            url: z.string(),
            method: z.string(),
            headers: z.array(Network.HeaderSchema),
            cookies: z.array(Network.CookieSchema),
            headersSize: JsUintSchema,
            bodySize: z.union([JsUintSchema, z.null()]),
            destination: z.string(),
            initiatorType: z.union([z.string(), z.null()]),
            timings: Network.FetchTimingInfoSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ResponseContentSchema = z.lazy(() => z.object({
            size: JsUintSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ResponseDataSchema = z.lazy(() => z.object({
            url: z.string(),
            protocol: z.string(),
            status: JsUintSchema,
            statusText: z.string(),
            fromCache: z.boolean(),
            headers: z.array(Network.HeaderSchema),
            mimeType: z.string(),
            bytesReceived: JsUintSchema,
            headersSize: z.union([JsUintSchema, z.null()]),
            bodySize: z.union([JsUintSchema, z.null()]),
            content: Network.ResponseContentSchema,
            authChallenges: z.array(Network.AuthChallengeSchema).optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SetCookieHeaderSchema = z.lazy(() => z.object({
            name: z.string(),
            value: Network.BytesValueSchema,
            domain: z.string().optional(),
            httpOnly: z.boolean().optional(),
            expiry: z.string().optional(),
            maxAge: JsIntSchema.optional(),
            path: z.string().optional(),
            sameSite: Network.SameSiteSchema.optional(),
            secure: z.boolean().optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.UrlPatternSchema = z.lazy(() => z.union([Network.UrlPatternPatternSchema, Network.UrlPatternStringSchema]));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.UrlPatternPatternSchema = z.lazy(() => z.object({
            type: z.literal('pattern'),
            protocol: z.string().optional(),
            hostname: z.string().optional(),
            port: z.string().optional(),
            pathname: z.string().optional(),
            search: z.string().optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.UrlPatternStringSchema = z.lazy(() => z.object({
            type: z.literal('string'),
            pattern: z.string(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AddDataCollectorSchema = z.lazy(() => z.object({
            method: z.literal('network.addDataCollector'),
            params: Network.AddDataCollectorParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AddDataCollectorParametersSchema = z.lazy(() => z.object({
            dataTypes: z.array(Network.DataTypeSchema).min(1),
            maxEncodedDataSize: JsUintSchema,
            collectorType: Network.CollectorTypeSchema.default('blob').optional(),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AddDataCollectorResultSchema = z.lazy(() => z.object({
            collector: Network.CollectorSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AddInterceptSchema = z.lazy(() => z.object({
            method: z.literal('network.addIntercept'),
            params: Network.AddInterceptParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AddInterceptParametersSchema = z.lazy(() => z.object({
            phases: z.array(Network.InterceptPhaseSchema).min(1),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            urlPatterns: z.array(Network.UrlPatternSchema).optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.InterceptPhaseSchema = z.lazy(() => z.enum(['beforeRequestSent', 'responseStarted', 'authRequired']));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AddInterceptResultSchema = z.lazy(() => z.object({
            intercept: Network.InterceptSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueRequestSchema = z.lazy(() => z.object({
            method: z.literal('network.continueRequest'),
            params: Network.ContinueRequestParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueRequestParametersSchema = z.lazy(() => z.object({
            request: Network.RequestSchema,
            body: Network.BytesValueSchema.optional(),
            cookies: z.array(Network.CookieHeaderSchema).optional(),
            headers: z.array(Network.HeaderSchema).optional(),
            method: z.string().optional(),
            url: z.string().optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueRequestResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueResponseSchema = z.lazy(() => z.object({
            method: z.literal('network.continueResponse'),
            params: Network.ContinueResponseParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueResponseParametersSchema = z.lazy(() => z.object({
            request: Network.RequestSchema,
            cookies: z.array(Network.SetCookieHeaderSchema).optional(),
            credentials: Network.AuthCredentialsSchema.optional(),
            headers: z.array(Network.HeaderSchema).optional(),
            reasonPhrase: z.string().optional(),
            statusCode: JsUintSchema.optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueResponseResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueWithAuthSchema = z.lazy(() => z.object({
            method: z.literal('network.continueWithAuth'),
            params: Network.ContinueWithAuthParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueWithAuthParametersSchema = z.lazy(() => z
            .object({
            request: Network.RequestSchema,
        })
            .and(z.union([
            Network.ContinueWithAuthCredentialsSchema,
            Network.ContinueWithAuthNoCredentialsSchema,
        ])));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueWithAuthCredentialsSchema = z.lazy(() => z.object({
            action: z.literal('provideCredentials'),
            credentials: Network.AuthCredentialsSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueWithAuthNoCredentialsSchema = z.lazy(() => z.object({
            action: z.enum(['default', 'cancel']),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ContinueWithAuthResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.DisownDataSchema = z.lazy(() => z.object({
            method: z.literal('network.disownData'),
            params: Network.DisownDataParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.DisownDataParametersSchema = z.lazy(() => z.object({
            dataType: Network.DataTypeSchema,
            collector: Network.CollectorSchema,
            request: Network.RequestSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.DisownDataResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.FailRequestSchema = z.lazy(() => z.object({
            method: z.literal('network.failRequest'),
            params: Network.FailRequestParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.FailRequestParametersSchema = z.lazy(() => z.object({
            request: Network.RequestSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.FailRequestResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.GetDataSchema = z.lazy(() => z.object({
            method: z.literal('network.getData'),
            params: Network.GetDataParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.GetDataParametersSchema = z.lazy(() => z.object({
            dataType: Network.DataTypeSchema,
            collector: Network.CollectorSchema.optional(),
            disown: z.boolean().default(false).optional(),
            request: Network.RequestSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.GetDataResultSchema = z.lazy(() => z.object({
            bytes: Network.BytesValueSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ProvideResponseSchema = z.lazy(() => z.object({
            method: z.literal('network.provideResponse'),
            params: Network.ProvideResponseParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ProvideResponseParametersSchema = z.lazy(() => z.object({
            request: Network.RequestSchema,
            body: Network.BytesValueSchema.optional(),
            cookies: z.array(Network.SetCookieHeaderSchema).optional(),
            headers: z.array(Network.HeaderSchema).optional(),
            reasonPhrase: z.string().optional(),
            statusCode: JsUintSchema.optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ProvideResponseResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RemoveDataCollectorSchema = z.lazy(() => z.object({
            method: z.literal('network.removeDataCollector'),
            params: Network.RemoveDataCollectorParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RemoveDataCollectorParametersSchema = z.lazy(() => z.object({
            collector: Network.CollectorSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RemoveDataCollectorResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RemoveInterceptSchema = z.lazy(() => z.object({
            method: z.literal('network.removeIntercept'),
            params: Network.RemoveInterceptParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RemoveInterceptParametersSchema = z.lazy(() => z.object({
            intercept: Network.InterceptSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.RemoveInterceptResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SetCacheBehaviorSchema = z.lazy(() => z.object({
            method: z.literal('network.setCacheBehavior'),
            params: Network.SetCacheBehaviorParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SetCacheBehaviorParametersSchema = z.lazy(() => z.object({
            cacheBehavior: z.enum(['default', 'bypass']),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SetCacheBehaviorResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SetExtraHeadersSchema = z.lazy(() => z.object({
            method: z.literal('network.setExtraHeaders'),
            params: Network.SetExtraHeadersParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SetExtraHeadersParametersSchema = z.lazy(() => z.object({
            headers: z.array(Network.HeaderSchema),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.SetExtraHeadersResultSchema = z.lazy(() => EmptyResultSchema);
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AuthRequiredSchema = z.lazy(() => z.object({
            method: z.literal('network.authRequired'),
            params: Network.AuthRequiredParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.AuthRequiredParametersSchema = z.lazy(() => Network.BaseParametersSchema.and(z.object({
            response: Network.ResponseDataSchema,
        })));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.BeforeRequestSentSchema = z.lazy(() => z.object({
            method: z.literal('network.beforeRequestSent'),
            params: Network.BeforeRequestSentParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.BeforeRequestSentParametersSchema = z.lazy(() => Network.BaseParametersSchema.and(z.object({
            initiator: Network.InitiatorSchema.optional(),
        })));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.FetchErrorSchema = z.lazy(() => z.object({
            method: z.literal('network.fetchError'),
            params: Network.FetchErrorParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.FetchErrorParametersSchema = z.lazy(() => Network.BaseParametersSchema.and(z.object({
            errorText: z.string(),
        })));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ResponseCompletedSchema = z.lazy(() => z.object({
            method: z.literal('network.responseCompleted'),
            params: Network.ResponseCompletedParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ResponseCompletedParametersSchema = z.lazy(() => Network.BaseParametersSchema.and(z.object({
            response: Network.ResponseDataSchema,
        })));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ResponseStartedSchema = z.lazy(() => z.object({
            method: z.literal('network.responseStarted'),
            params: Network.ResponseStartedParametersSchema,
        }));
    })(Network$1 || (Network$1 = {}));
    (function (Network) {
        Network.ResponseStartedParametersSchema = z.lazy(() => Network.BaseParametersSchema.and(z.object({
            response: Network.ResponseDataSchema,
        })));
    })(Network$1 || (Network$1 = {}));
    const ScriptCommandSchema = z.lazy(() => z.union([
        Script$1.AddPreloadScriptSchema,
        Script$1.CallFunctionSchema,
        Script$1.DisownSchema,
        Script$1.EvaluateSchema,
        Script$1.GetRealmsSchema,
        Script$1.RemovePreloadScriptSchema,
    ]));
    const ScriptResultSchema = z.lazy(() => z.union([
        Script$1.AddPreloadScriptResultSchema,
        Script$1.CallFunctionResultSchema,
        Script$1.DisownResultSchema,
        Script$1.EvaluateResultSchema,
        Script$1.GetRealmsResultSchema,
        Script$1.RemovePreloadScriptResultSchema,
    ]));
    const ScriptEventSchema = z.lazy(() => z.union([
        Script$1.MessageSchema,
        Script$1.RealmCreatedSchema,
        Script$1.RealmDestroyedSchema,
    ]));
    var Script$1;
    (function (Script) {
        Script.ChannelSchema = z.lazy(() => z.string());
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ChannelValueSchema = z.lazy(() => z.object({
            type: z.literal('channel'),
            value: Script.ChannelPropertiesSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ChannelPropertiesSchema = z.lazy(() => z.object({
            channel: Script.ChannelSchema,
            serializationOptions: Script.SerializationOptionsSchema.optional(),
            ownership: Script.ResultOwnershipSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.EvaluateResultSchema = z.lazy(() => z.union([
            Script.EvaluateResultSuccessSchema,
            Script.EvaluateResultExceptionSchema,
        ]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.EvaluateResultSuccessSchema = z.lazy(() => z.object({
            type: z.literal('success'),
            result: Script.RemoteValueSchema,
            realm: Script.RealmSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.EvaluateResultExceptionSchema = z.lazy(() => z.object({
            type: z.literal('exception'),
            exceptionDetails: Script.ExceptionDetailsSchema,
            realm: Script.RealmSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ExceptionDetailsSchema = z.lazy(() => z.object({
            columnNumber: JsUintSchema,
            exception: Script.RemoteValueSchema,
            lineNumber: JsUintSchema,
            stackTrace: Script.StackTraceSchema,
            text: z.string(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.HandleSchema = z.lazy(() => z.string());
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.InternalIdSchema = z.lazy(() => z.string());
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.LocalValueSchema = z.lazy(() => z.union([
            Script.RemoteReferenceSchema,
            Script.PrimitiveProtocolValueSchema,
            Script.ChannelValueSchema,
            Script.ArrayLocalValueSchema,
            Script.DateLocalValueSchema,
            Script.MapLocalValueSchema,
            Script.ObjectLocalValueSchema,
            Script.RegExpLocalValueSchema,
            Script.SetLocalValueSchema,
        ]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ListLocalValueSchema = z.lazy(() => z.array(Script.LocalValueSchema));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ArrayLocalValueSchema = z.lazy(() => z.object({
            type: z.literal('array'),
            value: Script.ListLocalValueSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.DateLocalValueSchema = z.lazy(() => z.object({
            type: z.literal('date'),
            value: z.string(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.MappingLocalValueSchema = z.lazy(() => z.array(z.tuple([
            z.union([Script.LocalValueSchema, z.string()]),
            Script.LocalValueSchema,
        ])));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.MapLocalValueSchema = z.lazy(() => z.object({
            type: z.literal('map'),
            value: Script.MappingLocalValueSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ObjectLocalValueSchema = z.lazy(() => z.object({
            type: z.literal('object'),
            value: Script.MappingLocalValueSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RegExpValueSchema = z.lazy(() => z.object({
            pattern: z.string(),
            flags: z.string().optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RegExpLocalValueSchema = z.lazy(() => z.object({
            type: z.literal('regexp'),
            value: Script.RegExpValueSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SetLocalValueSchema = z.lazy(() => z.object({
            type: z.literal('set'),
            value: Script.ListLocalValueSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.PreloadScriptSchema = z.lazy(() => z.string());
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RealmSchema = z.lazy(() => z.string());
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.PrimitiveProtocolValueSchema = z.lazy(() => z.union([
            Script.UndefinedValueSchema,
            Script.NullValueSchema,
            Script.StringValueSchema,
            Script.NumberValueSchema,
            Script.BooleanValueSchema,
            Script.BigIntValueSchema,
        ]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.UndefinedValueSchema = z.lazy(() => z.object({
            type: z.literal('undefined'),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.NullValueSchema = z.lazy(() => z.object({
            type: z.literal('null'),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.StringValueSchema = z.lazy(() => z.object({
            type: z.literal('string'),
            value: z.string(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SpecialNumberSchema = z.lazy(() => z.enum(['NaN', '-0', 'Infinity', '-Infinity']));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.NumberValueSchema = z.lazy(() => z.object({
            type: z.literal('number'),
            value: z.union([z.number(), Script.SpecialNumberSchema]),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.BooleanValueSchema = z.lazy(() => z.object({
            type: z.literal('boolean'),
            value: z.boolean(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.BigIntValueSchema = z.lazy(() => z.object({
            type: z.literal('bigint'),
            value: z.string(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RealmInfoSchema = z.lazy(() => z.union([
            Script.WindowRealmInfoSchema,
            Script.DedicatedWorkerRealmInfoSchema,
            Script.SharedWorkerRealmInfoSchema,
            Script.ServiceWorkerRealmInfoSchema,
            Script.WorkerRealmInfoSchema,
            Script.PaintWorkletRealmInfoSchema,
            Script.AudioWorkletRealmInfoSchema,
            Script.WorkletRealmInfoSchema,
        ]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.BaseRealmInfoSchema = z.lazy(() => z.object({
            realm: Script.RealmSchema,
            origin: z.string(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.WindowRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('window'),
            context: BrowsingContext$1.BrowsingContextSchema,
            userContext: Browser$1.UserContextSchema.optional(),
            sandbox: z.string().optional(),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.DedicatedWorkerRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('dedicated-worker'),
            owners: z.tuple([Script.RealmSchema]),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SharedWorkerRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('shared-worker'),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ServiceWorkerRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('service-worker'),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.WorkerRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('worker'),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.PaintWorkletRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('paint-worklet'),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.AudioWorkletRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('audio-worklet'),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.WorkletRealmInfoSchema = z.lazy(() => Script.BaseRealmInfoSchema.and(z.object({
            type: z.literal('worklet'),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RealmTypeSchema = z.lazy(() => z.enum([
            'window',
            'dedicated-worker',
            'shared-worker',
            'service-worker',
            'worker',
            'paint-worklet',
            'audio-worklet',
            'worklet',
        ]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RemoteReferenceSchema = z.lazy(() => z.union([Script.SharedReferenceSchema, Script.RemoteObjectReferenceSchema]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SharedReferenceSchema = z.lazy(() => z
            .object({
            sharedId: Script.SharedIdSchema,
            handle: Script.HandleSchema.optional(),
        })
            .and(ExtensibleSchema));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RemoteObjectReferenceSchema = z.lazy(() => z
            .object({
            handle: Script.HandleSchema,
            sharedId: Script.SharedIdSchema.optional(),
        })
            .and(ExtensibleSchema));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RemoteValueSchema = z.lazy(() => z.union([
            Script.PrimitiveProtocolValueSchema,
            Script.SymbolRemoteValueSchema,
            Script.ArrayRemoteValueSchema,
            Script.ObjectRemoteValueSchema,
            Script.FunctionRemoteValueSchema,
            Script.RegExpRemoteValueSchema,
            Script.DateRemoteValueSchema,
            Script.MapRemoteValueSchema,
            Script.SetRemoteValueSchema,
            Script.WeakMapRemoteValueSchema,
            Script.WeakSetRemoteValueSchema,
            Script.GeneratorRemoteValueSchema,
            Script.ErrorRemoteValueSchema,
            Script.ProxyRemoteValueSchema,
            Script.PromiseRemoteValueSchema,
            Script.TypedArrayRemoteValueSchema,
            Script.ArrayBufferRemoteValueSchema,
            Script.NodeListRemoteValueSchema,
            Script.HtmlCollectionRemoteValueSchema,
            Script.NodeRemoteValueSchema,
            Script.WindowProxyRemoteValueSchema,
        ]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ListRemoteValueSchema = z.lazy(() => z.array(Script.RemoteValueSchema));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.MappingRemoteValueSchema = z.lazy(() => z.array(z.tuple([
            z.union([Script.RemoteValueSchema, z.string()]),
            Script.RemoteValueSchema,
        ])));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SymbolRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('symbol'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ArrayRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('array'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
            value: Script.ListRemoteValueSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ObjectRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('object'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
            value: Script.MappingRemoteValueSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.FunctionRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('function'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RegExpRemoteValueSchema = z.lazy(() => Script.RegExpLocalValueSchema.and(z.object({
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.DateRemoteValueSchema = z.lazy(() => Script.DateLocalValueSchema.and(z.object({
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        })));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.MapRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('map'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
            value: Script.MappingRemoteValueSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SetRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('set'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
            value: Script.ListRemoteValueSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.WeakMapRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('weakmap'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.WeakSetRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('weakset'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.GeneratorRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('generator'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ErrorRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('error'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ProxyRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('proxy'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.PromiseRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('promise'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.TypedArrayRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('typedarray'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ArrayBufferRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('arraybuffer'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.NodeListRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('nodelist'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
            value: Script.ListRemoteValueSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.HtmlCollectionRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('htmlcollection'),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
            value: Script.ListRemoteValueSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.NodeRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('node'),
            sharedId: Script.SharedIdSchema.optional(),
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
            value: Script.NodePropertiesSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.NodePropertiesSchema = z.lazy(() => z.object({
            nodeType: JsUintSchema,
            childNodeCount: JsUintSchema,
            attributes: z.record(z.string(), z.string()).optional(),
            children: z.array(Script.NodeRemoteValueSchema).optional(),
            localName: z.string().optional(),
            mode: z.enum(['open', 'closed']).optional(),
            namespaceURI: z.string().optional(),
            nodeValue: z.string().optional(),
            shadowRoot: z.union([Script.NodeRemoteValueSchema, z.null()]).optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.WindowProxyRemoteValueSchema = z.lazy(() => z.object({
            type: z.literal('window'),
            value: Script.WindowProxyPropertiesSchema,
            handle: Script.HandleSchema.optional(),
            internalId: Script.InternalIdSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.WindowProxyPropertiesSchema = z.lazy(() => z.object({
            context: BrowsingContext$1.BrowsingContextSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ResultOwnershipSchema = z.lazy(() => z.enum(['root', 'none']));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SerializationOptionsSchema = z.lazy(() => z.object({
            maxDomDepth: z.union([JsUintSchema, z.null()]).default(0).optional(),
            maxObjectDepth: z
                .union([JsUintSchema, z.null()])
                .default(null)
                .optional(),
            includeShadowTree: z
                .enum(['none', 'open', 'all'])
                .default('none')
                .optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SharedIdSchema = z.lazy(() => z.string());
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.StackFrameSchema = z.lazy(() => z.object({
            columnNumber: JsUintSchema,
            functionName: z.string(),
            lineNumber: JsUintSchema,
            url: z.string(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.StackTraceSchema = z.lazy(() => z.object({
            callFrames: z.array(Script.StackFrameSchema),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.SourceSchema = z.lazy(() => z.object({
            realm: Script.RealmSchema,
            context: BrowsingContext$1.BrowsingContextSchema.optional(),
            userContext: Browser$1.UserContextSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RealmTargetSchema = z.lazy(() => z.object({
            realm: Script.RealmSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.ContextTargetSchema = z.lazy(() => z.object({
            context: BrowsingContext$1.BrowsingContextSchema,
            sandbox: z.string().optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.TargetSchema = z.lazy(() => z.union([Script.ContextTargetSchema, Script.RealmTargetSchema]));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.AddPreloadScriptSchema = z.lazy(() => z.object({
            method: z.literal('script.addPreloadScript'),
            params: Script.AddPreloadScriptParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.AddPreloadScriptParametersSchema = z.lazy(() => z.object({
            functionDeclaration: z.string(),
            arguments: z.array(Script.ChannelValueSchema).optional(),
            contexts: z
                .array(BrowsingContext$1.BrowsingContextSchema)
                .min(1)
                .optional(),
            userContexts: z.array(Browser$1.UserContextSchema).min(1).optional(),
            sandbox: z.string().optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.AddPreloadScriptResultSchema = z.lazy(() => z.object({
            script: Script.PreloadScriptSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.DisownSchema = z.lazy(() => z.object({
            method: z.literal('script.disown'),
            params: Script.DisownParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.DisownParametersSchema = z.lazy(() => z.object({
            handles: z.array(Script.HandleSchema),
            target: Script.TargetSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.DisownResultSchema = z.lazy(() => EmptyResultSchema);
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.CallFunctionSchema = z.lazy(() => z.object({
            method: z.literal('script.callFunction'),
            params: Script.CallFunctionParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.CallFunctionParametersSchema = z.lazy(() => z.object({
            functionDeclaration: z.string(),
            awaitPromise: z.boolean(),
            target: Script.TargetSchema,
            arguments: z.array(Script.LocalValueSchema).optional(),
            resultOwnership: Script.ResultOwnershipSchema.optional(),
            serializationOptions: Script.SerializationOptionsSchema.optional(),
            this: Script.LocalValueSchema.optional(),
            userActivation: z.boolean().default(false).optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.CallFunctionResultSchema = z.lazy(() => Script.EvaluateResultSchema);
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.EvaluateSchema = z.lazy(() => z.object({
            method: z.literal('script.evaluate'),
            params: Script.EvaluateParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.EvaluateParametersSchema = z.lazy(() => z.object({
            expression: z.string(),
            target: Script.TargetSchema,
            awaitPromise: z.boolean(),
            resultOwnership: Script.ResultOwnershipSchema.optional(),
            serializationOptions: Script.SerializationOptionsSchema.optional(),
            userActivation: z.boolean().default(false).optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.GetRealmsSchema = z.lazy(() => z.object({
            method: z.literal('script.getRealms'),
            params: Script.GetRealmsParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.GetRealmsParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext$1.BrowsingContextSchema.optional(),
            type: Script.RealmTypeSchema.optional(),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.GetRealmsResultSchema = z.lazy(() => z.object({
            realms: z.array(Script.RealmInfoSchema),
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RemovePreloadScriptSchema = z.lazy(() => z.object({
            method: z.literal('script.removePreloadScript'),
            params: Script.RemovePreloadScriptParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RemovePreloadScriptParametersSchema = z.lazy(() => z.object({
            script: Script.PreloadScriptSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RemovePreloadScriptResultSchema = z.lazy(() => EmptyResultSchema);
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.MessageSchema = z.lazy(() => z.object({
            method: z.literal('script.message'),
            params: Script.MessageParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.MessageParametersSchema = z.lazy(() => z.object({
            channel: Script.ChannelSchema,
            data: Script.RemoteValueSchema,
            source: Script.SourceSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RealmCreatedSchema = z.lazy(() => z.object({
            method: z.literal('script.realmCreated'),
            params: Script.RealmInfoSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RealmDestroyedSchema = z.lazy(() => z.object({
            method: z.literal('script.realmDestroyed'),
            params: Script.RealmDestroyedParametersSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    (function (Script) {
        Script.RealmDestroyedParametersSchema = z.lazy(() => z.object({
            realm: Script.RealmSchema,
        }));
    })(Script$1 || (Script$1 = {}));
    const StorageCommandSchema = z.lazy(() => z.union([
        Storage$1.DeleteCookiesSchema,
        Storage$1.GetCookiesSchema,
        Storage$1.SetCookieSchema,
    ]));
    const StorageResultSchema = z.lazy(() => z.union([
        Storage$1.DeleteCookiesResultSchema,
        Storage$1.GetCookiesResultSchema,
        Storage$1.SetCookieResultSchema,
    ]));
    var Storage$1;
    (function (Storage) {
        Storage.PartitionKeySchema = z.lazy(() => z
            .object({
            userContext: z.string().optional(),
            sourceOrigin: z.string().optional(),
        })
            .and(ExtensibleSchema));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.GetCookiesSchema = z.lazy(() => z.object({
            method: z.literal('storage.getCookies'),
            params: Storage.GetCookiesParametersSchema,
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.CookieFilterSchema = z.lazy(() => z
            .object({
            name: z.string().optional(),
            value: Network$1.BytesValueSchema.optional(),
            domain: z.string().optional(),
            path: z.string().optional(),
            size: JsUintSchema.optional(),
            httpOnly: z.boolean().optional(),
            secure: z.boolean().optional(),
            sameSite: Network$1.SameSiteSchema.optional(),
            expiry: JsUintSchema.optional(),
        })
            .and(ExtensibleSchema));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.BrowsingContextPartitionDescriptorSchema = z.lazy(() => z.object({
            type: z.literal('context'),
            context: BrowsingContext$1.BrowsingContextSchema,
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.StorageKeyPartitionDescriptorSchema = z.lazy(() => z
            .object({
            type: z.literal('storageKey'),
            userContext: z.string().optional(),
            sourceOrigin: z.string().optional(),
        })
            .and(ExtensibleSchema));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.PartitionDescriptorSchema = z.lazy(() => z.union([
            Storage.BrowsingContextPartitionDescriptorSchema,
            Storage.StorageKeyPartitionDescriptorSchema,
        ]));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.GetCookiesParametersSchema = z.lazy(() => z.object({
            filter: Storage.CookieFilterSchema.optional(),
            partition: Storage.PartitionDescriptorSchema.optional(),
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.GetCookiesResultSchema = z.lazy(() => z.object({
            cookies: z.array(Network$1.CookieSchema),
            partitionKey: Storage.PartitionKeySchema,
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.SetCookieSchema = z.lazy(() => z.object({
            method: z.literal('storage.setCookie'),
            params: Storage.SetCookieParametersSchema,
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.PartialCookieSchema = z.lazy(() => z
            .object({
            name: z.string(),
            value: Network$1.BytesValueSchema,
            domain: z.string(),
            path: z.string().optional(),
            httpOnly: z.boolean().optional(),
            secure: z.boolean().optional(),
            sameSite: Network$1.SameSiteSchema.optional(),
            expiry: JsUintSchema.optional(),
        })
            .and(ExtensibleSchema));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.SetCookieParametersSchema = z.lazy(() => z.object({
            cookie: Storage.PartialCookieSchema,
            partition: Storage.PartitionDescriptorSchema.optional(),
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.SetCookieResultSchema = z.lazy(() => z.object({
            partitionKey: Storage.PartitionKeySchema,
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.DeleteCookiesSchema = z.lazy(() => z.object({
            method: z.literal('storage.deleteCookies'),
            params: Storage.DeleteCookiesParametersSchema,
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.DeleteCookiesParametersSchema = z.lazy(() => z.object({
            filter: Storage.CookieFilterSchema.optional(),
            partition: Storage.PartitionDescriptorSchema.optional(),
        }));
    })(Storage$1 || (Storage$1 = {}));
    (function (Storage) {
        Storage.DeleteCookiesResultSchema = z.lazy(() => z.object({
            partitionKey: Storage.PartitionKeySchema,
        }));
    })(Storage$1 || (Storage$1 = {}));
    const LogEventSchema = z.lazy(() => Log.EntryAddedSchema);
    var Log;
    (function (Log) {
        Log.LevelSchema = z.lazy(() => z.enum(['debug', 'info', 'warn', 'error']));
    })(Log || (Log = {}));
    (function (Log) {
        Log.EntrySchema = z.lazy(() => z.union([
            Log.GenericLogEntrySchema,
            Log.ConsoleLogEntrySchema,
            Log.JavascriptLogEntrySchema,
        ]));
    })(Log || (Log = {}));
    (function (Log) {
        Log.BaseLogEntrySchema = z.lazy(() => z.object({
            level: Log.LevelSchema,
            source: Script$1.SourceSchema,
            text: z.union([z.string(), z.null()]),
            timestamp: JsUintSchema,
            stackTrace: Script$1.StackTraceSchema.optional(),
        }));
    })(Log || (Log = {}));
    (function (Log) {
        Log.GenericLogEntrySchema = z.lazy(() => Log.BaseLogEntrySchema.and(z.object({
            type: z.string(),
        })));
    })(Log || (Log = {}));
    (function (Log) {
        Log.ConsoleLogEntrySchema = z.lazy(() => Log.BaseLogEntrySchema.and(z.object({
            type: z.literal('console'),
            method: z.string(),
            args: z.array(Script$1.RemoteValueSchema),
        })));
    })(Log || (Log = {}));
    (function (Log) {
        Log.JavascriptLogEntrySchema = z.lazy(() => Log.BaseLogEntrySchema.and(z.object({
            type: z.literal('javascript'),
        })));
    })(Log || (Log = {}));
    (function (Log) {
        Log.EntryAddedSchema = z.lazy(() => z.object({
            method: z.literal('log.entryAdded'),
            params: Log.EntrySchema,
        }));
    })(Log || (Log = {}));
    const InputCommandSchema = z.lazy(() => z.union([
        Input$1.PerformActionsSchema,
        Input$1.ReleaseActionsSchema,
        Input$1.SetFilesSchema,
    ]));
    const InputResultSchema = z.lazy(() => z.union([
        Input$1.PerformActionsResultSchema,
        Input$1.ReleaseActionsResultSchema,
        Input$1.SetFilesResultSchema,
    ]));
    const InputEventSchema = z.lazy(() => Input$1.FileDialogOpenedSchema);
    var Input$1;
    (function (Input) {
        Input.ElementOriginSchema = z.lazy(() => z.object({
            type: z.literal('element'),
            element: Script$1.SharedReferenceSchema,
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PerformActionsSchema = z.lazy(() => z.object({
            method: z.literal('input.performActions'),
            params: Input.PerformActionsParametersSchema,
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PerformActionsParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext$1.BrowsingContextSchema,
            actions: z.array(Input.SourceActionsSchema),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.SourceActionsSchema = z.lazy(() => z.union([
            Input.NoneSourceActionsSchema,
            Input.KeySourceActionsSchema,
            Input.PointerSourceActionsSchema,
            Input.WheelSourceActionsSchema,
        ]));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.NoneSourceActionsSchema = z.lazy(() => z.object({
            type: z.literal('none'),
            id: z.string(),
            actions: z.array(Input.NoneSourceActionSchema),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.NoneSourceActionSchema = z.lazy(() => Input.PauseActionSchema);
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.KeySourceActionsSchema = z.lazy(() => z.object({
            type: z.literal('key'),
            id: z.string(),
            actions: z.array(Input.KeySourceActionSchema),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.KeySourceActionSchema = z.lazy(() => z.union([
            Input.PauseActionSchema,
            Input.KeyDownActionSchema,
            Input.KeyUpActionSchema,
        ]));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerSourceActionsSchema = z.lazy(() => z.object({
            type: z.literal('pointer'),
            id: z.string(),
            parameters: Input.PointerParametersSchema.optional(),
            actions: z.array(Input.PointerSourceActionSchema),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerTypeSchema = z.lazy(() => z.enum(['mouse', 'pen', 'touch']));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerParametersSchema = z.lazy(() => z.object({
            pointerType: Input.PointerTypeSchema.default('mouse').optional(),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerSourceActionSchema = z.lazy(() => z.union([
            Input.PauseActionSchema,
            Input.PointerDownActionSchema,
            Input.PointerUpActionSchema,
            Input.PointerMoveActionSchema,
        ]));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.WheelSourceActionsSchema = z.lazy(() => z.object({
            type: z.literal('wheel'),
            id: z.string(),
            actions: z.array(Input.WheelSourceActionSchema),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.WheelSourceActionSchema = z.lazy(() => z.union([Input.PauseActionSchema, Input.WheelScrollActionSchema]));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PauseActionSchema = z.lazy(() => z.object({
            type: z.literal('pause'),
            duration: JsUintSchema.optional(),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.KeyDownActionSchema = z.lazy(() => z.object({
            type: z.literal('keyDown'),
            value: z.string(),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.KeyUpActionSchema = z.lazy(() => z.object({
            type: z.literal('keyUp'),
            value: z.string(),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerUpActionSchema = z.lazy(() => z.object({
            type: z.literal('pointerUp'),
            button: JsUintSchema,
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerDownActionSchema = z.lazy(() => z
            .object({
            type: z.literal('pointerDown'),
            button: JsUintSchema,
        })
            .and(Input.PointerCommonPropertiesSchema));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerMoveActionSchema = z.lazy(() => z
            .object({
            type: z.literal('pointerMove'),
            x: z.number(),
            y: z.number(),
            duration: JsUintSchema.optional(),
            origin: Input.OriginSchema.optional(),
        })
            .and(Input.PointerCommonPropertiesSchema));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.WheelScrollActionSchema = z.lazy(() => z.object({
            type: z.literal('scroll'),
            x: JsIntSchema,
            y: JsIntSchema,
            deltaX: JsIntSchema,
            deltaY: JsIntSchema,
            duration: JsUintSchema.optional(),
            origin: Input.OriginSchema.default('viewport').optional(),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PointerCommonPropertiesSchema = z.lazy(() => z.object({
            width: JsUintSchema.optional(),
            height: JsUintSchema.optional(),
            pressure: z.number().gte(0).lte(1).optional(),
            tangentialPressure: z.number().gte(-1).lte(1).optional(),
            twist: z.number().int().nonnegative().gte(0).lte(359).optional(),
            altitudeAngle: z.number().gte(0).lte(1.5707963267948966).optional(),
            azimuthAngle: z.number().gte(0).lte(6.283185307179586).optional(),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.OriginSchema = z.lazy(() => z.union([
            z.literal('viewport'),
            z.literal('pointer'),
            Input.ElementOriginSchema,
        ]));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.PerformActionsResultSchema = z.lazy(() => EmptyResultSchema);
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.ReleaseActionsSchema = z.lazy(() => z.object({
            method: z.literal('input.releaseActions'),
            params: Input.ReleaseActionsParametersSchema,
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.ReleaseActionsParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext$1.BrowsingContextSchema,
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.ReleaseActionsResultSchema = z.lazy(() => EmptyResultSchema);
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.SetFilesSchema = z.lazy(() => z.object({
            method: z.literal('input.setFiles'),
            params: Input.SetFilesParametersSchema,
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.SetFilesParametersSchema = z.lazy(() => z.object({
            context: BrowsingContext$1.BrowsingContextSchema,
            element: Script$1.SharedReferenceSchema,
            files: z.array(z.string()),
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.SetFilesResultSchema = z.lazy(() => EmptyResultSchema);
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.FileDialogOpenedSchema = z.lazy(() => z.object({
            method: z.literal('input.fileDialogOpened'),
            params: Input.FileDialogInfoSchema,
        }));
    })(Input$1 || (Input$1 = {}));
    (function (Input) {
        Input.FileDialogInfoSchema = z.lazy(() => z.object({
            context: BrowsingContext$1.BrowsingContextSchema,
            userContext: Browser$1.UserContextSchema.optional(),
            element: Script$1.SharedReferenceSchema.optional(),
            multiple: z.boolean(),
        }));
    })(Input$1 || (Input$1 = {}));
    const WebExtensionCommandSchema = z.lazy(() => z.union([WebExtension.InstallSchema, WebExtension.UninstallSchema]));
    const WebExtensionResultSchema = z.lazy(() => z.union([
        WebExtension.InstallResultSchema,
        WebExtension.UninstallResultSchema,
    ]));
    var WebExtension;
    (function (WebExtension) {
        WebExtension.ExtensionSchema = z.lazy(() => z.string());
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.InstallSchema = z.lazy(() => z.object({
            method: z.literal('webExtension.install'),
            params: WebExtension.InstallParametersSchema,
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.InstallParametersSchema = z.lazy(() => z.object({
            extensionData: WebExtension.ExtensionDataSchema,
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.ExtensionDataSchema = z.lazy(() => z.union([
            WebExtension.ExtensionArchivePathSchema,
            WebExtension.ExtensionBase64EncodedSchema,
            WebExtension.ExtensionPathSchema,
        ]));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.ExtensionPathSchema = z.lazy(() => z.object({
            type: z.literal('path'),
            path: z.string(),
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.ExtensionArchivePathSchema = z.lazy(() => z.object({
            type: z.literal('archivePath'),
            path: z.string(),
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.ExtensionBase64EncodedSchema = z.lazy(() => z.object({
            type: z.literal('base64'),
            value: z.string(),
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.InstallResultSchema = z.lazy(() => z.object({
            extension: WebExtension.ExtensionSchema,
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.UninstallSchema = z.lazy(() => z.object({
            method: z.literal('webExtension.uninstall'),
            params: WebExtension.UninstallParametersSchema,
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.UninstallParametersSchema = z.lazy(() => z.object({
            extension: WebExtension.ExtensionSchema,
        }));
    })(WebExtension || (WebExtension = {}));
    (function (WebExtension) {
        WebExtension.UninstallResultSchema = z.lazy(() => EmptyResultSchema);
    })(WebExtension || (WebExtension = {}));

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
    function parseObject(obj, schema) {
        const parseResult = schema.safeParse(obj);
        if (parseResult.success) {
            return parseResult.data;
        }
        const errorMessage = parseResult.error.errors
            .map((e) => `${e.message} in ` +
            `${e.path.map((p) => JSON.stringify(p)).join('/')}.`)
            .join(' ');
        throw new InvalidArgumentException(errorMessage);
    }
    var Browser;
    (function (Browser) {
        function parseCreateUserContextParameters(params) {
            return parseObject(params, Browser$1.CreateUserContextParametersSchema);
        }
        Browser.parseCreateUserContextParameters = parseCreateUserContextParameters;
        function parseRemoveUserContextParameters(params) {
            return parseObject(params, Browser$1.RemoveUserContextParametersSchema);
        }
        Browser.parseRemoveUserContextParameters = parseRemoveUserContextParameters;
        function parseSetClientWindowStateParameters(params) {
            return parseObject(params, Browser$1.SetClientWindowStateParametersSchema);
        }
        Browser.parseSetClientWindowStateParameters = parseSetClientWindowStateParameters;
        function parseSetDownloadBehaviorParameters(params) {
            return parseObject(params, Browser$1.SetDownloadBehaviorParametersSchema);
        }
        Browser.parseSetDownloadBehaviorParameters = parseSetDownloadBehaviorParameters;
    })(Browser || (Browser = {}));
    var Network;
    (function (Network) {
        function parseAddDataCollectorParameters(params) {
            return parseObject(params, Network$1.AddDataCollectorParametersSchema);
        }
        Network.parseAddDataCollectorParameters = parseAddDataCollectorParameters;
        function parseAddInterceptParameters(params) {
            return parseObject(params, Network$1.AddInterceptParametersSchema);
        }
        Network.parseAddInterceptParameters = parseAddInterceptParameters;
        function parseContinueRequestParameters(params) {
            return parseObject(params, Network$1.ContinueRequestParametersSchema);
        }
        Network.parseContinueRequestParameters = parseContinueRequestParameters;
        function parseContinueResponseParameters(params) {
            return parseObject(params, Network$1.ContinueResponseParametersSchema);
        }
        Network.parseContinueResponseParameters = parseContinueResponseParameters;
        function parseContinueWithAuthParameters(params) {
            return parseObject(params, Network$1.ContinueWithAuthParametersSchema);
        }
        Network.parseContinueWithAuthParameters = parseContinueWithAuthParameters;
        function parseDisownDataParameters(params) {
            return parseObject(params, Network$1.DisownDataParametersSchema);
        }
        Network.parseDisownDataParameters = parseDisownDataParameters;
        function parseFailRequestParameters(params) {
            return parseObject(params, Network$1.FailRequestParametersSchema);
        }
        Network.parseFailRequestParameters = parseFailRequestParameters;
        function parseGetDataParameters(params) {
            return parseObject(params, Network$1.GetDataParametersSchema);
        }
        Network.parseGetDataParameters = parseGetDataParameters;
        function parseProvideResponseParameters(params) {
            return parseObject(params, Network$1.ProvideResponseParametersSchema);
        }
        Network.parseProvideResponseParameters = parseProvideResponseParameters;
        function parseRemoveDataCollectorParameters(params) {
            return parseObject(params, Network$1.RemoveDataCollectorParametersSchema);
        }
        Network.parseRemoveDataCollectorParameters = parseRemoveDataCollectorParameters;
        function parseRemoveInterceptParameters(params) {
            return parseObject(params, Network$1.RemoveInterceptParametersSchema);
        }
        Network.parseRemoveInterceptParameters = parseRemoveInterceptParameters;
        function parseSetCacheBehaviorParameters(params) {
            return parseObject(params, Network$1.SetCacheBehaviorParametersSchema);
        }
        Network.parseSetCacheBehaviorParameters = parseSetCacheBehaviorParameters;
        function parseSetExtraHeadersParameters(params) {
            return parseObject(params, Network$1.SetExtraHeadersParametersSchema);
        }
        Network.parseSetExtraHeadersParameters = parseSetExtraHeadersParameters;
    })(Network || (Network = {}));
    var Script;
    (function (Script) {
        function parseAddPreloadScriptParams(params) {
            return parseObject(params, Script$1.AddPreloadScriptParametersSchema);
        }
        Script.parseAddPreloadScriptParams = parseAddPreloadScriptParams;
        function parseCallFunctionParams(params) {
            return parseObject(params, Script$1.CallFunctionParametersSchema);
        }
        Script.parseCallFunctionParams = parseCallFunctionParams;
        function parseDisownParams(params) {
            return parseObject(params, Script$1.DisownParametersSchema);
        }
        Script.parseDisownParams = parseDisownParams;
        function parseEvaluateParams(params) {
            return parseObject(params, Script$1.EvaluateParametersSchema);
        }
        Script.parseEvaluateParams = parseEvaluateParams;
        function parseGetRealmsParams(params) {
            return parseObject(params, Script$1.GetRealmsParametersSchema);
        }
        Script.parseGetRealmsParams = parseGetRealmsParams;
        function parseRemovePreloadScriptParams(params) {
            return parseObject(params, Script$1.RemovePreloadScriptParametersSchema);
        }
        Script.parseRemovePreloadScriptParams = parseRemovePreloadScriptParams;
    })(Script || (Script = {}));
    var BrowsingContext;
    (function (BrowsingContext) {
        function parseActivateParams(params) {
            return parseObject(params, BrowsingContext$1.ActivateParametersSchema);
        }
        BrowsingContext.parseActivateParams = parseActivateParams;
        function parseCaptureScreenshotParams(params) {
            return parseObject(params, BrowsingContext$1.CaptureScreenshotParametersSchema);
        }
        BrowsingContext.parseCaptureScreenshotParams = parseCaptureScreenshotParams;
        function parseCloseParams(params) {
            return parseObject(params, BrowsingContext$1.CloseParametersSchema);
        }
        BrowsingContext.parseCloseParams = parseCloseParams;
        function parseCreateParams(params) {
            return parseObject(params, BrowsingContext$1.CreateParametersSchema);
        }
        BrowsingContext.parseCreateParams = parseCreateParams;
        function parseGetTreeParams(params) {
            return parseObject(params, BrowsingContext$1.GetTreeParametersSchema);
        }
        BrowsingContext.parseGetTreeParams = parseGetTreeParams;
        function parseHandleUserPromptParameters(params) {
            return parseObject(params, BrowsingContext$1.HandleUserPromptParametersSchema);
        }
        BrowsingContext.parseHandleUserPromptParameters = parseHandleUserPromptParameters;
        function parseLocateNodesParams(params) {
            return parseObject(params, BrowsingContext$1.LocateNodesParametersSchema);
        }
        BrowsingContext.parseLocateNodesParams = parseLocateNodesParams;
        function parseNavigateParams(params) {
            return parseObject(params, BrowsingContext$1.NavigateParametersSchema);
        }
        BrowsingContext.parseNavigateParams = parseNavigateParams;
        function parsePrintParams(params) {
            return parseObject(params, BrowsingContext$1.PrintParametersSchema);
        }
        BrowsingContext.parsePrintParams = parsePrintParams;
        function parseReloadParams(params) {
            return parseObject(params, BrowsingContext$1.ReloadParametersSchema);
        }
        BrowsingContext.parseReloadParams = parseReloadParams;
        function parseSetBypassCspParams(params) {
            return parseObject(params, BrowsingContext$1.SetBypassCspParametersSchema);
        }
        BrowsingContext.parseSetBypassCspParams = parseSetBypassCspParams;
        function parseSetViewportParams(params) {
            return parseObject(params, BrowsingContext$1.SetViewportParametersSchema);
        }
        BrowsingContext.parseSetViewportParams = parseSetViewportParams;
        function parseTraverseHistoryParams(params) {
            return parseObject(params, BrowsingContext$1.TraverseHistoryParametersSchema);
        }
        BrowsingContext.parseTraverseHistoryParams = parseTraverseHistoryParams;
    })(BrowsingContext || (BrowsingContext = {}));
    var Session;
    (function (Session) {
        function parseSubscribeParams(params) {
            return parseObject(params, Session$1.SubscribeParametersSchema);
        }
        Session.parseSubscribeParams = parseSubscribeParams;
        function parseUnsubscribeParams(params) {
            if (params && typeof params === 'object' && 'subscriptions' in params) {
                return parseObject(params, Session$1.UnsubscribeByIdRequestSchema);
            }
            return parseObject(params, Session$1.UnsubscribeParametersSchema);
        }
        Session.parseUnsubscribeParams = parseUnsubscribeParams;
    })(Session || (Session = {}));
    var Emulation;
    (function (Emulation) {
        function parseSetClientHintsOverrideParams(params) {
            const SetClientHintsOverrideParametersSchema = objectType({
                clientHints: unionType([
                    UserAgentClientHints
                        .ClientHintsMetadataSchema,
                    nullType(),
                ]),
                contexts: arrayType(stringType()).min(1).optional(),
                userContexts: arrayType(stringType()).min(1).optional(),
            });
            return parseObject(params, SetClientHintsOverrideParametersSchema);
        }
        Emulation.parseSetClientHintsOverrideParams = parseSetClientHintsOverrideParams;
        function parseSetForcedColorsModeThemeOverrideParams(params) {
            return parseObject(params, Emulation$1.SetForcedColorsModeThemeOverrideParametersSchema);
        }
        Emulation.parseSetForcedColorsModeThemeOverrideParams = parseSetForcedColorsModeThemeOverrideParams;
        function parseSetGeolocationOverrideParams(params) {
            if ('coordinates' in params && 'error' in params) {
                throw new InvalidArgumentException('Coordinates and error cannot be set at the same time');
            }
            return parseObject(params, Emulation$1.SetGeolocationOverrideParametersSchema);
        }
        Emulation.parseSetGeolocationOverrideParams = parseSetGeolocationOverrideParams;
        function parseSetLocaleOverrideParams(params) {
            return parseObject(params, Emulation$1.SetLocaleOverrideParametersSchema);
        }
        Emulation.parseSetLocaleOverrideParams = parseSetLocaleOverrideParams;
        function parseSetNetworkConditionsParams(params) {
            return parseObject(params, Emulation$1.SetNetworkConditionsParametersSchema);
        }
        Emulation.parseSetNetworkConditionsParams = parseSetNetworkConditionsParams;
        function parseSetScreenOrientationOverrideParams(params) {
            return parseObject(params, Emulation$1.SetScreenOrientationOverrideParametersSchema);
        }
        Emulation.parseSetScreenOrientationOverrideParams = parseSetScreenOrientationOverrideParams;
        function parseSetScreenSettingsOverrideParams(params) {
            return parseObject(params, Emulation$1.SetScreenSettingsOverrideParametersSchema);
        }
        Emulation.parseSetScreenSettingsOverrideParams = parseSetScreenSettingsOverrideParams;
        function parseSetScriptingEnabledParams(params) {
            return parseObject(params, Emulation$1.SetScriptingEnabledParametersSchema);
        }
        Emulation.parseSetScriptingEnabledParams = parseSetScriptingEnabledParams;
        function parseSetScrollbarTypeOverrideParams(params) {
            return parseObject(params, Emulation$1.SetScrollbarTypeOverrideParametersSchema);
        }
        Emulation.parseSetScrollbarTypeOverrideParams = parseSetScrollbarTypeOverrideParams;
        function parseSetTimezoneOverrideParams(params) {
            return parseObject(params, Emulation$1.SetTimezoneOverrideParametersSchema);
        }
        Emulation.parseSetTimezoneOverrideParams = parseSetTimezoneOverrideParams;
        function parseSetTouchOverrideParams(params) {
            return parseObject(params, Emulation$1.SetTouchOverrideParametersSchema);
        }
        Emulation.parseSetTouchOverrideParams = parseSetTouchOverrideParams;
        function parseSetUserAgentOverrideParams(params) {
            return parseObject(params, Emulation$1.SetUserAgentOverrideParametersSchema);
        }
        Emulation.parseSetUserAgentOverrideParams = parseSetUserAgentOverrideParams;
    })(Emulation || (Emulation = {}));
    var Input;
    (function (Input) {
        function parsePerformActionsParams(params) {
            return parseObject(params, Input$1.PerformActionsParametersSchema);
        }
        Input.parsePerformActionsParams = parsePerformActionsParams;
        function parseReleaseActionsParams(params) {
            return parseObject(params, Input$1.ReleaseActionsParametersSchema);
        }
        Input.parseReleaseActionsParams = parseReleaseActionsParams;
        function parseSetFilesParams(params) {
            return parseObject(params, Input$1.SetFilesParametersSchema);
        }
        Input.parseSetFilesParams = parseSetFilesParams;
    })(Input || (Input = {}));
    var Storage;
    (function (Storage) {
        function parseDeleteCookiesParams(params) {
            return parseObject(params, Storage$1.DeleteCookiesParametersSchema);
        }
        Storage.parseDeleteCookiesParams = parseDeleteCookiesParams;
        function parseGetCookiesParams(params) {
            return parseObject(params, Storage$1.GetCookiesParametersSchema);
        }
        Storage.parseGetCookiesParams = parseGetCookiesParams;
        function parseSetCookieParams(params) {
            return parseObject(params, Storage$1.SetCookieParametersSchema);
        }
        Storage.parseSetCookieParams = parseSetCookieParams;
    })(Storage || (Storage = {}));
    var Cdp;
    (function (Cdp) {
        const GetSessionRequestSchema = objectType({
            context: BrowsingContext$1.BrowsingContextSchema,
        });
        const ResolveRealmRequestSchema = objectType({
            realm: Script$1.RealmSchema,
        });
        const SendCommandRequestSchema = objectType({
            method: stringType(),
            params: objectType({}).passthrough().optional(),
            session: stringType().optional(),
        });
        function parseGetSessionRequest(params) {
            return parseObject(params, GetSessionRequestSchema);
        }
        Cdp.parseGetSessionRequest = parseGetSessionRequest;
        function parseResolveRealmRequest(params) {
            return parseObject(params, ResolveRealmRequestSchema);
        }
        Cdp.parseResolveRealmRequest = parseResolveRealmRequest;
        function parseSendCommandRequest(params) {
            return parseObject(params, SendCommandRequestSchema);
        }
        Cdp.parseSendCommandRequest = parseSendCommandRequest;
    })(Cdp || (Cdp = {}));
    var Permissions;
    (function (Permissions) {
        function parseSetPermissionsParams(params) {
            return {
                ...params,
                ...parseObject(params, Permissions$1.SetPermissionParametersSchema),
            };
        }
        Permissions.parseSetPermissionsParams = parseSetPermissionsParams;
    })(Permissions || (Permissions = {}));
    var Bluetooth;
    (function (Bluetooth) {
        function parseDisableSimulationParameters(params) {
            return parseObject(params, Bluetooth$1.DisableSimulationParametersSchema);
        }
        Bluetooth.parseDisableSimulationParameters = parseDisableSimulationParameters;
        function parseHandleRequestDevicePromptParams(params) {
            return parseObject(params, Bluetooth$1
                .HandleRequestDevicePromptParametersSchema);
        }
        Bluetooth.parseHandleRequestDevicePromptParams = parseHandleRequestDevicePromptParams;
        function parseSimulateAdapterParams(params) {
            return parseObject(params, Bluetooth$1.SimulateAdapterParametersSchema);
        }
        Bluetooth.parseSimulateAdapterParams = parseSimulateAdapterParams;
        function parseSimulateAdvertisementParams(params) {
            return parseObject(params, Bluetooth$1.SimulateAdvertisementParametersSchema);
        }
        Bluetooth.parseSimulateAdvertisementParams = parseSimulateAdvertisementParams;
        function parseSimulateCharacteristicParams(params) {
            return parseObject(params, Bluetooth$1.SimulateCharacteristicParametersSchema);
        }
        Bluetooth.parseSimulateCharacteristicParams = parseSimulateCharacteristicParams;
        function parseSimulateCharacteristicResponseParams(params) {
            return parseObject(params, Bluetooth$1
                .SimulateCharacteristicResponseParametersSchema);
        }
        Bluetooth.parseSimulateCharacteristicResponseParams = parseSimulateCharacteristicResponseParams;
        function parseSimulateDescriptorParams(params) {
            return parseObject(params, Bluetooth$1.SimulateDescriptorParametersSchema);
        }
        Bluetooth.parseSimulateDescriptorParams = parseSimulateDescriptorParams;
        function parseSimulateDescriptorResponseParams(params) {
            return parseObject(params, Bluetooth$1
                .SimulateDescriptorResponseParametersSchema);
        }
        Bluetooth.parseSimulateDescriptorResponseParams = parseSimulateDescriptorResponseParams;
        function parseSimulateGattConnectionResponseParams(params) {
            return parseObject(params, Bluetooth$1
                .SimulateGattConnectionResponseParametersSchema);
        }
        Bluetooth.parseSimulateGattConnectionResponseParams = parseSimulateGattConnectionResponseParams;
        function parseSimulateGattDisconnectionParams(params) {
            return parseObject(params, Bluetooth$1
                .SimulateGattDisconnectionParametersSchema);
        }
        Bluetooth.parseSimulateGattDisconnectionParams = parseSimulateGattDisconnectionParams;
        function parseSimulatePreconnectedPeripheralParams(params) {
            return parseObject(params, Bluetooth$1
                .SimulatePreconnectedPeripheralParametersSchema);
        }
        Bluetooth.parseSimulatePreconnectedPeripheralParams = parseSimulatePreconnectedPeripheralParams;
        function parseSimulateServiceParams(params) {
            return parseObject(params, Bluetooth$1.SimulateServiceParametersSchema);
        }
        Bluetooth.parseSimulateServiceParams = parseSimulateServiceParams;
    })(Bluetooth || (Bluetooth = {}));
    var WebModule;
    (function (WebModule) {
        function parseInstallParams(params) {
            return parseObject(params, WebExtension.InstallParametersSchema);
        }
        WebModule.parseInstallParams = parseInstallParams;
        function parseUninstallParams(params) {
            return parseObject(params, WebExtension.UninstallParametersSchema);
        }
        WebModule.parseUninstallParams = parseUninstallParams;
    })(WebModule || (WebModule = {}));

    class BidiParser {
        parseDisableSimulationParameters(params) {
            return Bluetooth.parseDisableSimulationParameters(params);
        }
        parseHandleRequestDevicePromptParams(params) {
            return Bluetooth.parseHandleRequestDevicePromptParams(params);
        }
        parseSimulateAdapterParameters(params) {
            return Bluetooth.parseSimulateAdapterParams(params);
        }
        parseSimulateAdvertisementParameters(params) {
            return Bluetooth.parseSimulateAdvertisementParams(params);
        }
        parseSimulateCharacteristicParameters(params) {
            return Bluetooth.parseSimulateCharacteristicParams(params);
        }
        parseSimulateCharacteristicResponseParameters(params) {
            return Bluetooth.parseSimulateCharacteristicResponseParams(params);
        }
        parseSimulateDescriptorParameters(params) {
            return Bluetooth.parseSimulateDescriptorParams(params);
        }
        parseSimulateDescriptorResponseParameters(params) {
            return Bluetooth.parseSimulateDescriptorResponseParams(params);
        }
        parseSimulateGattConnectionResponseParameters(params) {
            return Bluetooth.parseSimulateGattConnectionResponseParams(params);
        }
        parseSimulateGattDisconnectionParameters(params) {
            return Bluetooth.parseSimulateGattDisconnectionParams(params);
        }
        parseSimulatePreconnectedPeripheralParameters(params) {
            return Bluetooth.parseSimulatePreconnectedPeripheralParams(params);
        }
        parseSimulateServiceParameters(params) {
            return Bluetooth.parseSimulateServiceParams(params);
        }
        parseCreateUserContextParameters(params) {
            Browser.parseCreateUserContextParameters(params);
            return params;
        }
        parseRemoveUserContextParameters(params) {
            return Browser.parseRemoveUserContextParameters(params);
        }
        parseSetClientWindowStateParameters(params) {
            return Browser.parseSetClientWindowStateParameters(params);
        }
        parseSetDownloadBehaviorParameters(params) {
            return Browser.parseSetDownloadBehaviorParameters(params);
        }
        parseActivateParams(params) {
            return BrowsingContext.parseActivateParams(params);
        }
        parseCaptureScreenshotParams(params) {
            return BrowsingContext.parseCaptureScreenshotParams(params);
        }
        parseCloseParams(params) {
            return BrowsingContext.parseCloseParams(params);
        }
        parseCreateParams(params) {
            return BrowsingContext.parseCreateParams(params);
        }
        parseGetTreeParams(params) {
            return BrowsingContext.parseGetTreeParams(params);
        }
        parseHandleUserPromptParams(params) {
            return BrowsingContext.parseHandleUserPromptParameters(params);
        }
        parseLocateNodesParams(params) {
            return BrowsingContext.parseLocateNodesParams(params);
        }
        parseNavigateParams(params) {
            return BrowsingContext.parseNavigateParams(params);
        }
        parsePrintParams(params) {
            return BrowsingContext.parsePrintParams(params);
        }
        parseReloadParams(params) {
            return BrowsingContext.parseReloadParams(params);
        }
        parseSetBypassCspParams(params) {
            return BrowsingContext.parseSetBypassCspParams(params);
        }
        parseSetViewportParams(params) {
            return BrowsingContext.parseSetViewportParams(params);
        }
        parseTraverseHistoryParams(params) {
            return BrowsingContext.parseTraverseHistoryParams(params);
        }
        parseGetSessionParams(params) {
            return Cdp.parseGetSessionRequest(params);
        }
        parseResolveRealmParams(params) {
            return Cdp.parseResolveRealmRequest(params);
        }
        parseSendCommandParams(params) {
            return Cdp.parseSendCommandRequest(params);
        }
        parseSetClientHintsOverrideParams(params) {
            return Emulation.parseSetClientHintsOverrideParams(params);
        }
        parseSetForcedColorsModeThemeOverrideParams(params) {
            return Emulation.parseSetForcedColorsModeThemeOverrideParams(params);
        }
        parseSetGeolocationOverrideParams(params) {
            return Emulation.parseSetGeolocationOverrideParams(params);
        }
        parseSetLocaleOverrideParams(params) {
            return Emulation.parseSetLocaleOverrideParams(params);
        }
        parseSetNetworkConditionsParams(params) {
            return Emulation.parseSetNetworkConditionsParams(params);
        }
        parseSetScreenOrientationOverrideParams(params) {
            return Emulation.parseSetScreenOrientationOverrideParams(params);
        }
        parseSetScreenSettingsOverrideParams(params) {
            return Emulation.parseSetScreenSettingsOverrideParams(params);
        }
        parseSetScriptingEnabledParams(params) {
            return Emulation.parseSetScriptingEnabledParams(params);
        }
        parseSetScrollbarTypeOverrideParams(params) {
            return Emulation.parseSetScrollbarTypeOverrideParams(params);
        }
        parseSetTimezoneOverrideParams(params) {
            return Emulation.parseSetTimezoneOverrideParams(params);
        }
        parseSetTouchOverrideParams(params) {
            return Emulation.parseSetTouchOverrideParams(params);
        }
        parseSetUserAgentOverrideParams(params) {
            return Emulation.parseSetUserAgentOverrideParams(params);
        }
        parsePerformActionsParams(params) {
            return Input.parsePerformActionsParams(params);
        }
        parseReleaseActionsParams(params) {
            return Input.parseReleaseActionsParams(params);
        }
        parseSetFilesParams(params) {
            return Input.parseSetFilesParams(params);
        }
        parseAddDataCollectorParams(params) {
            return Network.parseAddDataCollectorParameters(params);
        }
        parseAddInterceptParams(params) {
            return Network.parseAddInterceptParameters(params);
        }
        parseContinueRequestParams(params) {
            return Network.parseContinueRequestParameters(params);
        }
        parseContinueResponseParams(params) {
            return Network.parseContinueResponseParameters(params);
        }
        parseContinueWithAuthParams(params) {
            return Network.parseContinueWithAuthParameters(params);
        }
        parseDisownDataParams(params) {
            return Network.parseDisownDataParameters(params);
        }
        parseFailRequestParams(params) {
            return Network.parseFailRequestParameters(params);
        }
        parseGetDataParams(params) {
            return Network.parseGetDataParameters(params);
        }
        parseProvideResponseParams(params) {
            return Network.parseProvideResponseParameters(params);
        }
        parseRemoveDataCollectorParams(params) {
            return Network.parseRemoveDataCollectorParameters(params);
        }
        parseRemoveInterceptParams(params) {
            return Network.parseRemoveInterceptParameters(params);
        }
        parseSetCacheBehaviorParams(params) {
            return Network.parseSetCacheBehaviorParameters(params);
        }
        parseSetExtraHeadersParams(params) {
            return Network.parseSetExtraHeadersParameters(params);
        }
        parseSetPermissionsParams(params) {
            return Permissions.parseSetPermissionsParams(params);
        }
        parseAddPreloadScriptParams(params) {
            return Script.parseAddPreloadScriptParams(params);
        }
        parseCallFunctionParams(params) {
            return Script.parseCallFunctionParams(params);
        }
        parseDisownParams(params) {
            return Script.parseDisownParams(params);
        }
        parseEvaluateParams(params) {
            return Script.parseEvaluateParams(params);
        }
        parseGetRealmsParams(params) {
            return Script.parseGetRealmsParams(params);
        }
        parseRemovePreloadScriptParams(params) {
            return Script.parseRemovePreloadScriptParams(params);
        }
        parseSubscribeParams(params) {
            return Session.parseSubscribeParams(params);
        }
        parseUnsubscribeParams(params) {
            return Session.parseUnsubscribeParams(params);
        }
        parseDeleteCookiesParams(params) {
            return Storage.parseDeleteCookiesParams(params);
        }
        parseGetCookiesParams(params) {
            return Storage.parseGetCookiesParams(params);
        }
        parseSetCookieParams(params) {
            return Storage.parseSetCookieParams(params);
        }
        parseInstallParams(params) {
            return WebModule.parseInstallParams(params);
        }
        parseUninstallParams(params) {
            return WebModule.parseUninstallParams(params);
        }
    }

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
    const mapperPageSource = '<!DOCTYPE html><title>BiDi-CDP Mapper</title><style>body{font-family: Roboto,serif;font-size:13px;color:#202124;}.log{padding: 10px;font-family:Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;font-size:11px;line-height:180%;background: #f1f3f4;border-radius:4px;}.pre{overflow-wrap: break-word; margin:10px;}.card{margin:60px auto;padding:2px 0;max-width:900px;box-shadow:0 1px 4px rgba(0,0,0,0.15),0 1px 6px rgba(0,0,0,0.2);border-radius:8px;}.divider{height:1px;background:#f0f0f0;}.item{padding:16px 20px;}</style><div class="card"><div class="item"><h1>BiDi-CDP Mapper is controlling this tab</h1><p>Closing or reloading it will stop the BiDi process. <a target="_blank" title="BiDi-CDP Mapper GitHub Repository" href="https://github.com/GoogleChromeLabs/chromium-bidi">Details.</a></p></div><div class="item"><div id="logs" class="log"></div></div></div></div>';
    function generatePage() {
        if (!globalThis.document.documentElement) {
            return;
        }
        globalThis.document.documentElement.innerHTML = mapperPageSource;
        globalThis.window.onbeforeunload = () => 'Closing or reloading this tab will stop the BiDi process. Are you sure you want to leave?';
    }
    function stringify(message) {
        if (typeof message === 'object') {
            return JSON.stringify(message, null, 2);
        }
        return message;
    }
    function log(logPrefix, ...messages) {
        if (!globalThis.document.documentElement) {
            return;
        }
        if (!logPrefix.startsWith(LogType.bidi)) {
            globalThis.window?.sendDebugMessage?.(JSON.stringify({ logType: logPrefix, messages }, null, 2));
        }
        const debugContainer = document.getElementById('logs');
        if (!debugContainer) {
            return;
        }
        const lineElement = document.createElement('div');
        lineElement.className = 'pre';
        lineElement.textContent = [logPrefix, ...messages].map(stringify).join(' ');
        debugContainer.appendChild(lineElement);
        if (debugContainer.childNodes.length > 400) {
            debugContainer.removeChild(debugContainer.childNodes[0]);
        }
    }

    var _a;
    class WindowBidiTransport {
        static LOGGER_PREFIX_RECV = `${LogType.bidi}:RECV ◂`;
        static LOGGER_PREFIX_SEND = `${LogType.bidi}:SEND ▸`;
        static LOGGER_PREFIX_WARN = LogType.debugWarn;
        #onMessage = null;
        constructor() {
            window.onBidiMessage = (message) => {
                log(_a.LOGGER_PREFIX_RECV, message);
                try {
                    const command = _a.#parseBidiMessage(message);
                    this.#onMessage?.call(null, command);
                }
                catch (e) {
                    const error = e instanceof Error ? e : new Error(e);
                    this.#respondWithError(message, "invalid argument" , error, null);
                }
            };
        }
        setOnMessage(onMessage) {
            this.#onMessage = onMessage;
        }
        sendMessage(message) {
            log(_a.LOGGER_PREFIX_SEND, message);
            const json = JSON.stringify(message);
            window.sendBidiResponse(json);
        }
        close() {
            this.#onMessage = null;
            window.onBidiMessage = null;
        }
        #respondWithError(plainCommandData, errorCode, error, googChannel) {
            const errorResponse = _a.#getErrorResponse(plainCommandData, errorCode, error);
            if (googChannel) {
                this.sendMessage({
                    ...errorResponse,
                    'goog:channel': googChannel,
                });
            }
            else {
                this.sendMessage(errorResponse);
            }
        }
        static #getJsonType(value) {
            if (value === null) {
                return 'null';
            }
            if (Array.isArray(value)) {
                return 'array';
            }
            return typeof value;
        }
        static #getErrorResponse(message, errorCode, error) {
            let messageId;
            try {
                const command = JSON.parse(message);
                if (_a.#getJsonType(command) === 'object' &&
                    'id' in command) {
                    messageId = command.id;
                }
            }
            catch { }
            return {
                type: 'error',
                id: messageId,
                error: errorCode,
                message: error.message,
            };
        }
        static #parseBidiMessage(message) {
            let command;
            try {
                command = JSON.parse(message);
            }
            catch {
                throw new Error('Cannot parse data as JSON');
            }
            const type = _a.#getJsonType(command);
            if (type !== 'object') {
                throw new Error(`Expected JSON object but got ${type}`);
            }
            const { id, method, params } = command;
            const idType = _a.#getJsonType(id);
            if (idType !== 'number' || !Number.isInteger(id) || id < 0) {
                throw new Error(`Expected unsigned integer but got ${idType}`);
            }
            const methodType = _a.#getJsonType(method);
            if (methodType !== 'string') {
                throw new Error(`Expected string method but got ${methodType}`);
            }
            const paramsType = _a.#getJsonType(params);
            if (paramsType !== 'object') {
                throw new Error(`Expected object params but got ${paramsType}`);
            }
            let googChannel = command['goog:channel'];
            if (googChannel !== undefined) {
                const googChannelType = _a.#getJsonType(googChannel);
                if (googChannelType !== 'string') {
                    throw new Error(`Expected string channel but got ${googChannelType}`);
                }
                if (googChannel === '') {
                    googChannel = undefined;
                }
            }
            return {
                id,
                method,
                params,
                'goog:channel': googChannel,
            };
        }
    }
    _a = WindowBidiTransport;
    class WindowCdpTransport {
        #onMessage = null;
        #cdpSend;
        constructor() {
            this.#cdpSend = window.cdp.send;
            window.cdp.send = undefined;
            window.cdp.onmessage = (message) => {
                this.#onMessage?.call(null, message);
            };
        }
        setOnMessage(onMessage) {
            this.#onMessage = onMessage;
        }
        sendMessage(message) {
            this.#cdpSend(message);
        }
        close() {
            this.#onMessage = null;
            window.cdp.onmessage = null;
        }
    }

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
     *
     * @license
     */
    generatePage();
    const mapperTabToServerTransport = new WindowBidiTransport();
    const cdpTransport = new WindowCdpTransport();
    const cdpConnection = new MapperCdpConnection(cdpTransport, log);
    async function runMapperInstance(selfTargetId) {
        console.log('Launching Mapper instance with selfTargetId:', selfTargetId);
        const bidiServer = await BidiServer.createAndStart(mapperTabToServerTransport, cdpConnection,
        await cdpConnection.createBrowserSession(), selfTargetId, new BidiParser(), log);
        log(LogType.debugInfo, 'Mapper instance has been launched');
        return bidiServer;
    }
    window.runMapperInstance = async (selfTargetId) => {
        await runMapperInstance(selfTargetId);
    };

})();
//# sourceMappingURL=mapperTab.js.map
