/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import NodeWebSocket from 'ws';
import type { ConnectionTransport } from '../common/ConnectionTransport.js';
/**
 * @internal
 */
export declare class NodeWebSocketTransport implements ConnectionTransport {
    #private;
    static create(url: string, headers?: Record<string, string>): Promise<NodeWebSocketTransport>;
    onmessage?: (message: NodeWebSocket.Data) => void;
    onclose?: () => void;
    constructor(ws: NodeWebSocket);
    send(message: string): void;
    close(): void;
}
//# sourceMappingURL=NodeWebSocketTransport.d.ts.map