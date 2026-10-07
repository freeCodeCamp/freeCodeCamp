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
import { InvalidArgumentException, NoSuchUserContextException, UnknownErrorException, UnsupportedOperationException, } from '../../../protocol/protocol.js';
export class BrowserProcessor {
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
        // Ensure that it is put at the end of the event loop.
        // This way we send back the response before closing the tab.
        // Always catch uncaught exceptions.
        setTimeout(() => this.#browserCdpClient.sendCommand('Browser.close').catch(() => { }), 0);
        return {};
    }
    async createUserContext(params) {
        // `params` is a record to provide legacy `goog:` parameters. Now as the `proxy`
        // parameter is specified, we should get rid of `goog:proxyServer` and
        // `goog:proxyBypassList` and make the params of type
        // `Browser.CreateUserContextParameters`.
        const w3cParams = params;
        const globalConfig = this.#configStorage.getGlobalConfig();
        if (w3cParams.acceptInsecureCerts !== undefined) {
            if (w3cParams.acceptInsecureCerts === false &&
                globalConfig.acceptInsecureCerts === true)
                // TODO: https://github.com/GoogleChromeLabs/chromium-bidi/issues/3398
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
            // TODO: remove after Puppeteer stops using it.
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
            // https://source.chromium.org/chromium/chromium/src/+/main:content/browser/devtools/protocol/target_handler.cc;l=1424;drc=c686e8f4fd379312469fe018f5c390e9c8f20d0d
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
            // `active` is not supported in CDP yet.
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
        // Filter out duplicated client windows.
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
            // CDP "default" behavior.
            return {
                behavior: 'default',
            };
        if (downloadBehavior?.type === 'denied')
            // Deny all the downloads.
            return {
                behavior: 'deny',
            };
        if (downloadBehavior?.type === 'allowed') {
            // CDP behavior "allow" means "save downloaded files to the specific download path".
            return {
                behavior: 'allow',
                downloadPath: downloadBehavior.destinationFolder,
            };
        }
        // Unreachable. Handled by params parser.
        throw new UnknownErrorException('Unexpected download behavior');
    }
    async #applyDownloadBehavior(downloadBehavior, userContext) {
        await this.#browserCdpClient.sendCommand('Browser.setDownloadBehavior', {
            ...this.#toCdpDownloadBehavior(downloadBehavior),
            browserContextId: userContext === 'default' ? undefined : userContext,
            // Required for enabling download events.
            eventsEnabled: true,
        });
    }
    async setDownloadBehavior(params) {
        let userContexts;
        if (params.userContexts === undefined) {
            // Global download behavior.
            userContexts = (await this.#userContextStorage.getUserContexts()).map((c) => c.userContext);
        }
        else {
            // Download behavior for the specific user contexts.
            userContexts = Array.from(await this.#userContextStorage.verifyUserContextIdList(params.userContexts));
        }
        if (params.userContexts === undefined) {
            // Store the global setting to be applied for the future user contexts.
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
            // Download behavior can be already set per user context, in which case the global
            // one should not be applied.
            const downloadBehavior = this.#configStorage.getActiveConfig(undefined, userContext)
                .downloadBehavior ?? null;
            await this.#applyDownloadBehavior(downloadBehavior, userContext);
        }));
        return {};
    }
}
/**
 * Proxy config parse implementation:
 * https://source.chromium.org/chromium/chromium/src/+/main:net/proxy_resolution/proxy_config.h;drc=743a82d08e59d803c94ee1b8564b8b11dd7b462f;l=107
 */
export function getProxyStr(proxyConfig) {
    if (proxyConfig.proxyType === 'direct' ||
        proxyConfig.proxyType === 'system') {
        // These types imply that Chrome should use its default behavior (e.g., direct
        // connection or system-configured proxy). No specific `proxyServer` string is
        // needed.
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
        // HTTP Proxy
        if (proxyConfig.httpProxy !== undefined) {
            // servers.push(proxyConfig.httpProxy);
            servers.push(`http=${proxyConfig.httpProxy}`);
        }
        // SSL Proxy (uses 'https' scheme)
        if (proxyConfig.sslProxy !== undefined) {
            // servers.push(proxyConfig.sslProxy);
            servers.push(`https=${proxyConfig.sslProxy}`);
        }
        // SOCKS Proxy
        if (proxyConfig.socksProxy !== undefined ||
            proxyConfig.socksVersion !== undefined) {
            // socksVersion is mandatory and must be a valid integer if socksProxy is
            // specified.
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
            // If 'manual' proxyType is chosen but no specific proxy servers (http, ssl, socks)
            // are provided, it means no proxy server should be configured.
            return undefined;
        }
        return servers.join(';');
    }
    // Unreachable.
    throw new UnknownErrorException(`Unknown proxy type`);
}
//# sourceMappingURL=BrowserProcessor.js.map