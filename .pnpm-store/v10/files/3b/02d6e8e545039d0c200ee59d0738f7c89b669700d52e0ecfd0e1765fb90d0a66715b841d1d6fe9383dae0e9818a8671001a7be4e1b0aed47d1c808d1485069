/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ConnectionTransport } from '../common/ConnectionTransport.js';
import type { ConnectOptions } from '../common/ConnectOptions.js';
import type { BidiBrowser } from './Browser.js';
/**
 * Users should never call this directly; it's called when calling `puppeteer.connect`
 * with `protocol: 'webDriverBiDi'`. This method attaches Puppeteer to an existing browser
 * instance. First it tries to connect to the browser using pure BiDi. If the protocol is
 * not supported, connects to the browser using BiDi over CDP.
 *
 * @internal
 */
export declare function _connectToBiDiBrowser(connectionTransport: ConnectionTransport, url: string, options: ConnectOptions): Promise<BidiBrowser>;
//# sourceMappingURL=BrowserConnector.d.ts.map