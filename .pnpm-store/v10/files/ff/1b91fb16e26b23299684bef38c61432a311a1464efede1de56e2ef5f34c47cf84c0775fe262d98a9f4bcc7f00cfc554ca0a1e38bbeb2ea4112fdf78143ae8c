/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { ConnectionTransport } from './ConnectionTransport.js';
/**
 * @internal
 */
export declare class BrowserWebSocketTransport implements ConnectionTransport {
    #private;
    static create(url: string): Promise<BrowserWebSocketTransport>;
    onmessage?: (message: string) => void;
    onclose?: () => void;
    constructor(ws: WebSocket);
    send(message: string): void;
    close(): void;
}
//# sourceMappingURL=BrowserWebSocketTransport.d.ts.map