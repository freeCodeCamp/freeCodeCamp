/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as BidiMapper from 'chromium-bidi/lib/bidiMapper/BidiMapper.js';
import type {ProtocolMapping} from 'devtools-protocol/types/protocol-mapping.js';

import type {CDPEvents, CDPSession} from '../api/CDPSession.js';
import type {Connection as CdpConnection} from '../cdp/Connection.js';
import {debug} from '../common/Debug.js';
import {TargetCloseError} from '../common/Errors.js';
import type {Handler} from '../common/EventEmitter.js';

import {BidiConnection} from './Connection.js';

const bidiServerLogger = (prefix: string, ...args: unknown[]): void => {
  debug(`bidi:${prefix}`)(args);
};

/**
 * @internal
 */
export async function connectBidiOverCdp(
  cdp: CdpConnection,
): Promise<BidiConnection> {
  const transportBiDi = new NoOpTransport();
  const cdpConnectionAdapter = new CdpConnectionAdapter(cdp);
  const pptrTransport = {
    send(message: string): void {
      // Forwards a BiDi command sent by Puppeteer to the input of the BidiServer.
      transportBiDi.emitMessage(JSON.parse(message));
    },
    close(): void {
      bidiServer.close();
      cdpConnectionAdapter.close();
      cdp.dispose();
    },
    onmessage(_message: string): void {
      // The method is overridden by the Connection.
    },
  };
  transportBiDi.on('bidiResponse', (message: object) => {
    // Forwards a BiDi event sent by BidiServer to Puppeteer.
    pptrTransport.onmessage(JSON.stringify(message));
  });
  const pptrBiDiConnection = new BidiConnection(
    cdp.url(),
    pptrTransport,
    cdp._idGenerator,
    cdp.delay,
    cdp.timeout,
  );
  const bidiServer = await BidiMapper.BidiServer.createAndStart(
    transportBiDi,
    cdpConnectionAdapter,
    cdpConnectionAdapter.browserClient(),
    /* selfTargetId= */ '',
    undefined,
    bidiServerLogger,
  );
  return pptrBiDiConnection;
}

/**
 * Manages CDPSessions for BidiServer.
 * @internal
 */
class CdpConnectionAdapter {
  #cdp: CdpConnection;
  #adapters = new Map<CDPSession, CDPClientAdapter<CDPSession>>();
  #browserCdpConnection: CDPClientAdapter<CdpConnection>;

  constructor(cdp: CdpConnection) {
    this.#cdp = cdp;
    this.#browserCdpConnection = new CDPClientAdapter(cdp);
  }

  browserClient(): CDPClientAdapter<CdpConnection> {
    return this.#browserCdpConnection;
  }

  getCdpClient(id: string) {
    const session = this.#cdp.session(id);
    if (!session) {
      throw new Error(`Unknown CDP session with id ${id}`);
    }
    if (!this.#adapters.has(session)) {
      const adapter = new CDPClientAdapter(
        session,
        id,
        this.#browserCdpConnection,
      );
      this.#adapters.set(session, adapter);
      return adapter;
    }
    return this.#adapters.get(session)!;
  }

  close() {
    this.#browserCdpConnection.close();
    for (const adapter of this.#adapters.values()) {
      adapter.close();
    }
  }
}

/**
 * Wrapper on top of CDPSession/CDPConnection to satisfy CDP interface that
 * BidiServer needs.
 *
 * @internal
 */
class CDPClientAdapter<T extends CDPSession | CdpConnection>
  extends BidiMapper.EventEmitter<CDPEvents>
  implements BidiMapper.CdpClient
{
  #closed = false;
  #client: T;
  sessionId: string | undefined = undefined;
  #browserClient?: BidiMapper.CdpClient;

  constructor(
    client: T,
    sessionId?: string,
    browserClient?: BidiMapper.CdpClient,
  ) {
    super();
    this.#client = client;
    this.sessionId = sessionId;
    this.#browserClient = browserClient;
    this.#client.on('*', this.#forwardMessage as Handler<any>);
  }

  browserClient(): BidiMapper.CdpClient {
    return this.#browserClient!;
  }

  #forwardMessage = <T extends keyof CDPEvents>(
    method: T,
    event: CDPEvents[T],
  ) => {
    this.emit(method, event);
  };

  async sendCommand<T extends keyof ProtocolMapping.Commands>(
    method: T,
    ...params: ProtocolMapping.Commands[T]['paramsType']
  ): Promise<ProtocolMapping.Commands[T]['returnType']> {
    if (this.#closed) {
      return;
    }
    try {
      return await this.#client.send(method, ...params);
    } catch (err) {
      if (this.#closed) {
        return;
      }
      throw err;
    }
  }

  close() {
    this.#client.off('*', this.#forwardMessage as Handler<any>);
    this.#closed = true;
  }

  isCloseError(error: unknown): boolean {
    return error instanceof TargetCloseError;
  }
}

/**
 * This transport is given to the BiDi server instance and allows Puppeteer
 * to send and receive commands to the BiDiServer.
 * @internal
 */
class NoOpTransport
  extends BidiMapper.EventEmitter<{
    bidiResponse: any;
  }>
  implements BidiMapper.BidiTransport
{
  #onMessage: (message: any) => Promise<void> | void = async (
    _m: any,
  ): Promise<void> => {
    return;
  };

  emitMessage(message: any) {
    void this.#onMessage(message);
  }

  setOnMessage(onMessage: (message: any) => Promise<void> | void): void {
    this.#onMessage = onMessage;
  }

  async sendMessage(message: any): Promise<void> {
    this.emit('bidiResponse', message);
  }

  close() {
    this.#onMessage = async (_m: any): Promise<void> => {
      return;
    };
  }
}
