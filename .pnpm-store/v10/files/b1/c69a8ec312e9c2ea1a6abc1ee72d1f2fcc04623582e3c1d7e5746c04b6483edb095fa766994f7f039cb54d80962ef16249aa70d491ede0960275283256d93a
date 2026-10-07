/**
 * @license
 * Copyright 2018 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import NodeWebSocket from 'ws';
import { debugError } from '../common/util.js';
import { packageVersion } from '../util/version.js';
/**
 * @internal
 */
export class NodeWebSocketTransport {
    static create(url, headers) {
        return new Promise((resolve, reject) => {
            const ws = new NodeWebSocket(url, [], {
                followRedirects: true,
                perMessageDeflate: false,
                allowSynchronousEvents: false,
                maxPayload: 256 * 1024 * 1024, // 256Mb
                headers: {
                    'User-Agent': `Puppeteer ${packageVersion}`,
                    ...headers,
                },
            });
            ws.addEventListener('open', () => {
                return resolve(new NodeWebSocketTransport(ws));
            });
            ws.addEventListener('error', reject);
        });
    }
    #ws;
    onmessage;
    onclose;
    constructor(ws) {
        this.#ws = ws;
        this.#ws.addEventListener('message', event => {
            if (this.onmessage) {
                this.onmessage.call(null, event.data);
            }
        });
        this.#ws.addEventListener('close', () => {
            if (this.onclose) {
                this.onclose.call(null);
            }
        });
        // Silently log all errors - we don't know what to do with them.
        this.#ws.addEventListener('error', debugError);
    }
    send(message) {
        this.#ws.send(message);
    }
    close() {
        this.#ws.close();
    }
}
//# sourceMappingURL=NodeWebSocketTransport.js.map