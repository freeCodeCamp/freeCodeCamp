/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {ConnectionTransport} from './ConnectionTransport.js';
import {debugError} from './util.js';

/**
 * @internal
 */
export class BrowserWebSocketTransport implements ConnectionTransport {
  static create(url: string): Promise<BrowserWebSocketTransport> {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(url);

      ws.addEventListener('open', () => {
        return resolve(new BrowserWebSocketTransport(ws));
      });
      ws.addEventListener('error', reject);
    });
  }

  #ws: WebSocket;
  onmessage?: (message: string) => void;
  onclose?: () => void;

  constructor(ws: WebSocket) {
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

  send(message: string): void {
    this.#ws.send(message);
  }

  close(): void {
    this.#ws.close();
  }
}
