/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type ProtocolMapping from 'devtools-protocol/types/protocol-mapping.js';

import type {CommandOptions} from '../api/CDPSession.js';
import {CDPSession} from '../api/CDPSession.js';
import type {Connection as CdpConnection} from '../cdp/Connection.js';
import {TargetCloseError, UnsupportedOperation} from '../common/Errors.js';
import {Deferred} from '../util/Deferred.js';

import type {BidiConnection} from './Connection.js';
import type {BidiFrame} from './Frame.js';

/**
 * @internal
 */
export class BidiCdpSession extends CDPSession {
  static sessions = new Map<string, BidiCdpSession>();

  #detached = false;
  readonly #connection?: BidiConnection;
  readonly #sessionId = Deferred.create<string>();
  readonly frame: BidiFrame;

  constructor(frame: BidiFrame, sessionId?: string) {
    super();
    this.frame = frame;
    if (!this.frame.page().browser().cdpSupported) {
      return;
    }

    const connection = this.frame.page().browser().connection;
    this.#connection = connection;

    if (sessionId) {
      this.#sessionId.resolve(sessionId);
      BidiCdpSession.sessions.set(sessionId, this);
    } else {
      (async () => {
        try {
          const {result} = await connection.send('goog:cdp.getSession', {
            context: frame._id,
          });
          this.#sessionId.resolve(result.session!);
          BidiCdpSession.sessions.set(result.session!, this);
        } catch (error) {
          this.#sessionId.reject(error as Error);
        }
      })();
    }

    // SAFETY: We never throw #sessionId.
    BidiCdpSession.sessions.set(this.#sessionId.value() as string, this);
  }

  override connection(): CdpConnection | undefined {
    return undefined;
  }

  override get detached(): boolean {
    return this.#detached;
  }

  override async send<T extends keyof ProtocolMapping.Commands>(
    method: T,
    params?: ProtocolMapping.Commands[T]['paramsType'][0],
    options?: CommandOptions,
  ): Promise<ProtocolMapping.Commands[T]['returnType']> {
    if (this.#connection === undefined) {
      throw new UnsupportedOperation(
        'CDP support is required for this feature. The current browser does not support CDP.',
      );
    }
    if (this.#detached) {
      throw new TargetCloseError(
        `Protocol error (${method}): Session closed. Most likely the page has been closed.`,
      );
    }
    const session = await this.#sessionId.valueOrThrow();
    const {result} = await this.#connection.send(
      'goog:cdp.sendCommand',
      {
        method: method,
        params: params,
        session,
      },
      options?.timeout,
    );
    return result.result;
  }

  override async detach(): Promise<void> {
    if (
      this.#connection === undefined ||
      this.#connection.closed ||
      this.#detached
    ) {
      return;
    }
    try {
      await this.frame.client.send('Target.detachFromTarget', {
        sessionId: this.id(),
      });
    } finally {
      this.onClose();
    }
  }

  /**
   * @internal
   */
  onClose = (): void => {
    BidiCdpSession.sessions.delete(this.id());
    this.#detached = true;
  };

  override id(): string {
    const value = this.#sessionId.value();
    return typeof value === 'string' ? value : '';
  }
}
