/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { Connection } from '../cdp/Connection.js';
import { ProtocolError, UnsupportedOperation } from '../common/Errors.js';
import { debugError, DEFAULT_VIEWPORT } from '../common/util.js';
import { createIncrementalIdGenerator } from '../util/incremental-id-generator.js';
/**
 * Users should never call this directly; it's called when calling `puppeteer.connect`
 * with `protocol: 'webDriverBiDi'`. This method attaches Puppeteer to an existing browser
 * instance. First it tries to connect to the browser using pure BiDi. If the protocol is
 * not supported, connects to the browser using BiDi over CDP.
 *
 * @internal
 */
export async function _connectToBiDiBrowser(connectionTransport, url, options) {
    const { acceptInsecureCerts = false, networkEnabled = true, issuesEnabled = true, defaultViewport = DEFAULT_VIEWPORT, } = options;
    const { bidiConnection, cdpConnection, closeCallback } = await getBiDiConnection(connectionTransport, url, options);
    const BiDi = await import(/* webpackIgnore: true */ './bidi.js');
    const bidiBrowser = await BiDi.BidiBrowser.create({
        connection: bidiConnection,
        cdpConnection,
        closeCallback,
        process: undefined,
        defaultViewport: defaultViewport,
        acceptInsecureCerts: acceptInsecureCerts,
        networkEnabled,
        issuesEnabled,
        capabilities: options.capabilities,
    });
    return bidiBrowser;
}
/**
 * Returns a BiDiConnection established to the endpoint specified by the options and a
 * callback closing the browser. Callback depends on whether the connection is pure BiDi
 * or BiDi over CDP.
 * The method tries to connect to the browser using pure BiDi protocol, and falls back
 * to BiDi over CDP.
 */
async function getBiDiConnection(connectionTransport, url, options) {
    const BiDi = await import(/* webpackIgnore: true */ './bidi.js');
    const { slowMo = 0, protocolTimeout, idGenerator = createIncrementalIdGenerator(), } = options;
    // Try pure BiDi first.
    const pureBidiConnection = new BiDi.BidiConnection(url, connectionTransport, idGenerator, slowMo, protocolTimeout);
    try {
        const result = await pureBidiConnection.send('session.status', {});
        if ('type' in result && result.type === 'success') {
            // The `browserWSEndpoint` points to an endpoint supporting pure WebDriver BiDi.
            return {
                bidiConnection: pureBidiConnection,
                closeCallback: async () => {
                    await pureBidiConnection.send('browser.close', {}).catch(debugError);
                },
            };
        }
    }
    catch (e) {
        if (!(e instanceof ProtocolError)) {
            // Unexpected exception not related to BiDi / CDP. Rethrow.
            throw e;
        }
    }
    // Unbind the connection to avoid memory leaks.
    pureBidiConnection.unbind();
    // Fall back to CDP over BiDi reusing the WS connection.
    const cdpConnection = new Connection(url, connectionTransport, slowMo, protocolTimeout, 
    /* rawErrors= */ true, idGenerator);
    const version = await cdpConnection.send('Browser.getVersion');
    if (version.product.toLowerCase().includes('firefox')) {
        throw new UnsupportedOperation('Firefox is not supported in BiDi over CDP mode.');
    }
    const bidiOverCdpConnection = await BiDi.connectBidiOverCdp(cdpConnection);
    return {
        cdpConnection,
        bidiConnection: bidiOverCdpConnection,
        closeCallback: async () => {
            // In case of BiDi over CDP, we need to close browser via CDP.
            await cdpConnection.send('Browser.close').catch(debugError);
        },
    };
}
//# sourceMappingURL=BrowserConnector.js.map