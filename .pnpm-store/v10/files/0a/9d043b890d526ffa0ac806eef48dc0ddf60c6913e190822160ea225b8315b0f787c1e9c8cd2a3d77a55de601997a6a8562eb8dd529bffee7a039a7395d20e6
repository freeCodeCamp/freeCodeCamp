/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { debugError, DEFAULT_VIEWPORT } from '../common/util.js';
import { createIncrementalIdGenerator } from '../util/incremental-id-generator.js';
import { CdpBrowser } from './Browser.js';
import { Connection } from './Connection.js';
/**
 * Users should never call this directly; it's called when calling
 * `puppeteer.connect` with `protocol: 'cdp'`.
 *
 * @internal
 */
export async function _connectToCdpBrowser(connectionTransport, url, options) {
    const { acceptInsecureCerts = false, networkEnabled = true, issuesEnabled = true, defaultViewport = DEFAULT_VIEWPORT, downloadBehavior, targetFilter, _isPageTarget: isPageTarget, slowMo = 0, protocolTimeout, handleDevToolsAsPage, idGenerator = createIncrementalIdGenerator(), blocklist, allowlist, } = options;
    const connection = new Connection(url, connectionTransport, slowMo, protocolTimeout, 
    /* rawErrors */ false, idGenerator);
    const { browserContextIds } = await connection.send('Target.getBrowserContexts');
    const browser = await CdpBrowser._create(connection, browserContextIds, acceptInsecureCerts, defaultViewport, downloadBehavior, undefined, () => {
        return connection.send('Browser.close').catch(debugError);
    }, targetFilter, isPageTarget, undefined, networkEnabled, issuesEnabled, handleDevToolsAsPage, blocklist, allowlist);
    return browser;
}
//# sourceMappingURL=BrowserConnector.js.map