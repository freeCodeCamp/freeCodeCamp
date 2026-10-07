/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ConnectionTransport } from '../common/ConnectionTransport.js';
/**
 * Experimental ExtensionTransport allows establishing a connection via
 * chrome.debugger API if Puppeteer runs in an extension. Since Chrome
 * DevTools Protocol is restricted for extensions, the transport
 * implements missing commands and events.
 *
 * @experimental
 * @public
 */
export declare class ExtensionTransport implements ConnectionTransport {
    #private;
    static connectTab(tabId: number): Promise<ExtensionTransport>;
    onmessage?: (message: string) => void;
    onclose?: () => void;
    /**
     * @internal
     */
    constructor(tabId: number);
    send(message: string): void;
    close(): void;
}
//# sourceMappingURL=ExtensionTransport.d.ts.map