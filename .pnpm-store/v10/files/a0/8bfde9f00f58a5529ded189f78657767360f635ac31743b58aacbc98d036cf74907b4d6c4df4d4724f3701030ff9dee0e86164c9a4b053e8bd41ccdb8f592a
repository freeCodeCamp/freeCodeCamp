/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { _connectToBiDiBrowser } from '../bidi/BrowserConnector.js';
import { _connectToCdpBrowser } from '../cdp/BrowserConnector.js';
import { environment, isNode } from '../environment.js';
import { assert } from '../util/assert.js';
import { isErrorLike } from '../util/ErrorLike.js';
const getWebSocketTransportClass = async () => {
    return isNode
        ? (await import('../node/NodeWebSocketTransport.js')).NodeWebSocketTransport
        : (await import('../common/BrowserWebSocketTransport.js'))
            .BrowserWebSocketTransport;
};
/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect`. This method attaches Puppeteer to an existing browser instance.
 *
 * @internal
 */
export function assertSupportedUrlRestrictions(options) {
    if (options.blocklist && options.allowlist) {
        throw new Error('Cannot specify both blocklist and allowlist');
    }
    if (options.protocol === 'webDriverBiDi' &&
        (options.blocklist || options.allowlist)) {
        throw new Error('blocklist and allowlist are only supported with the CDP protocol');
    }
}
export async function _connectToBrowser(options) {
    assertSupportedUrlRestrictions(options);
    const { connectionTransport, endpointUrl } = await getConnectionTransport(options);
    if (options.protocol === 'webDriverBiDi') {
        const bidiBrowser = await _connectToBiDiBrowser(connectionTransport, endpointUrl, options);
        return bidiBrowser;
    }
    else {
        const cdpBrowser = await _connectToCdpBrowser(connectionTransport, endpointUrl, options);
        return cdpBrowser;
    }
}
/**
 * Establishes a websocket connection by given options and returns both transport and
 * endpoint url the transport is connected to.
 */
async function getConnectionTransport(options) {
    const { browserWSEndpoint, browserURL, channel, transport, headers = {}, } = options;
    assert(Number(!!browserWSEndpoint) +
        Number(!!browserURL) +
        Number(!!transport) +
        Number(!!channel) ===
        1, 'Exactly one of browserWSEndpoint, browserURL, transport or channel must be passed to puppeteer.connect');
    if (transport) {
        return { connectionTransport: transport, endpointUrl: '' };
    }
    else if (browserWSEndpoint) {
        const WebSocketClass = await getWebSocketTransportClass();
        const connectionTransport = await WebSocketClass.create(browserWSEndpoint, headers);
        return {
            connectionTransport: connectionTransport,
            endpointUrl: browserWSEndpoint,
        };
    }
    else if (browserURL) {
        const connectionURL = await getWSEndpoint(browserURL);
        const WebSocketClass = await getWebSocketTransportClass();
        const connectionTransport = await WebSocketClass.create(connectionURL);
        return {
            connectionTransport: connectionTransport,
            endpointUrl: connectionURL,
        };
    }
    else if (options.channel && isNode) {
        const { detectBrowserPlatform, resolveDefaultUserDataDir, Browser } = await import('@puppeteer/browsers');
        const platform = detectBrowserPlatform();
        if (!platform) {
            throw new Error('Could not detect required browser platform');
        }
        const { convertPuppeteerChannelToBrowsersChannel } = await import('../node/LaunchOptions.js');
        const { join } = await import('node:path');
        const userDataDir = resolveDefaultUserDataDir(Browser.CHROME, platform, convertPuppeteerChannelToBrowsersChannel(options.channel));
        const portPath = join(userDataDir, 'DevToolsActivePort');
        try {
            const fileContent = await environment.value.fs.promises.readFile(portPath, 'ascii');
            const [rawPort, rawPath] = fileContent
                .split('\n')
                .map(line => {
                return line.trim();
            })
                .filter(line => {
                return !!line;
            });
            if (!rawPort || !rawPath) {
                throw new Error(`Invalid DevToolsActivePort '${fileContent}' found`);
            }
            const port = parseInt(rawPort, 10);
            if (isNaN(port) || port <= 0 || port > 65535) {
                throw new Error(`Invalid port '${rawPort}' found`);
            }
            const browserWSEndpoint = `ws://localhost:${port}${rawPath}`;
            const WebSocketClass = await getWebSocketTransportClass();
            const connectionTransport = await WebSocketClass.create(browserWSEndpoint, headers);
            return {
                connectionTransport: connectionTransport,
                endpointUrl: browserWSEndpoint,
            };
        }
        catch (error) {
            throw new Error(`Could not find DevToolsActivePort for ${options.channel} at ${portPath}`, {
                cause: error,
            });
        }
    }
    throw new Error('Invalid connection options');
}
async function getWSEndpoint(browserURL) {
    const endpointURL = new URL('/json/version', browserURL);
    try {
        const result = await globalThis.fetch(endpointURL.toString(), {
            method: 'GET',
        });
        if (!result.ok) {
            throw new Error(`HTTP ${result.statusText}`);
        }
        const data = await result.json();
        return data.webSocketDebuggerUrl;
    }
    catch (error) {
        if (isErrorLike(error)) {
            error.message =
                `Failed to fetch browser webSocket URL from ${endpointURL}: ` +
                    error.message;
        }
        throw error;
    }
}
//# sourceMappingURL=BrowserConnector.js.map