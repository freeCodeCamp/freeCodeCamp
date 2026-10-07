/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ProtocolMapping} from 'devtools-protocol/types/protocol-mapping.js';

import {
  type CDPEvents,
  CDPSession,
  CDPSessionEvent,
  type CommandOptions,
} from '../api/CDPSession.js';
import {CallbackRegistry} from '../common/CallbackRegistry.js';
import {TargetCloseError} from '../common/Errors.js';
import {assert} from '../util/assert.js';
import {createProtocolErrorMessage} from '../util/ErrorLike.js';

import type {Connection} from './Connection.js';
import type {CdpTarget} from './Target.js';

/**
 * @internal
 */

export class CdpCDPSession extends CDPSession {
  #sessionId: string;
  #targetType: string;
  #callbacks: CallbackRegistry;
  #connection: Connection;
  #parentSessionId?: string;
  #target?: CdpTarget;
  #rawErrors = false;
  #detached = false;
  /**
   * @internal
   */
  constructor(
    connection: Connection,
    targetType: string,
    sessionId: string,
    parentSessionId: string | undefined,
    rawErrors: boolean,
  ) {
    super();
    this.#connection = connection;
    this.#targetType = targetType;
    this.#callbacks = new CallbackRegistry(connection._idGenerator);
    this.#sessionId = sessionId;
    this.#parentSessionId = parentSessionId;
    this.#rawErrors = rawErrors;
  }

  /**
   * Sets the {@link CdpTarget} associated with the session instance.
   *
   * @internal
   */
  setTarget(target: CdpTarget): void {
    this.#target = target;
  }

  /**
   * Gets the {@link CdpTarget} associated with the session instance.
   *
   * @internal
   */
  target(): CdpTarget {
    assert(this.#target, 'Target must exist');
    return this.#target;
  }

  override connection(): Connection {
    return this.#connection;
  }

  override get detached(): boolean {
    return this.#connection._closed || this.#detached;
  }

  override parentSession(): CDPSession | undefined {
    if (!this.#parentSessionId) {
      // In some cases, e.g., DevTools pages there is no parent session. In this
      // case, we treat the current session as the parent session.
      return this;
    }
    const parent = this.#connection?.session(this.#parentSessionId);
    return parent ?? undefined;
  }

  override send<T extends keyof ProtocolMapping.Commands>(
    method: T,
    params?: ProtocolMapping.Commands[T]['paramsType'][0],
    options?: CommandOptions,
  ): Promise<ProtocolMapping.Commands[T]['returnType']> {
    if (this.detached) {
      return Promise.reject(
        new TargetCloseError(
          `Protocol error (${method}): Session closed. Most likely the ${this.#targetType} has been closed.`,
        ),
      );
    }
    return this.#connection
      ._rawSend(this.#callbacks, method, params, this.#sessionId, options)
      .catch(error => {
        if (
          error instanceof Error &&
          error.message.includes('Session with given id not found')
        ) {
          this.onClosed();
          throw new TargetCloseError(
            `Protocol error (${method}): Session with given id not found.`,
          );
        }
        throw error;
      });
  }
  /**
   * @internal
   */
  onMessage(object: {
    id?: number;
    method: keyof CDPEvents;
    params: CDPEvents[keyof CDPEvents];
    error: {message: string; data: any; code: number};
    result?: any;
  }): void {
    if (object.id) {
      if (object.error) {
        if (this.#rawErrors) {
          this.#callbacks.rejectRaw(object.id, object.error);
        } else {
          this.#callbacks.reject(
            object.id,
            createProtocolErrorMessage(object),
            object.error.message,
          );
        }
      } else {
        this.#callbacks.resolve(object.id, object.result);
      }
    } else {
      assert(!object.id);
      this.emit(object.method, object.params);
    }
  }

  /**
   * Detaches the cdpSession from the target. Once detached, the cdpSession object
   * won't emit any events and can't be used to send messages.
   */
  override async detach(): Promise<void> {
    if (this.detached) {
      throw new Error(
        `Session already detached. Most likely the ${this.#targetType} has been closed.`,
      );
    }
    await this.#connection.send('Target.detachFromTarget', {
      sessionId: this.#sessionId,
    });
    this.#detached = true;
  }

  /**
   * @internal
   */
  onClosed(): void {
    this.#callbacks.clear();
    this.#detached = true;
    this.emit(CDPSessionEvent.Disconnected, undefined);
  }

  /**
   * Returns the session's id.
   */
  override id(): string {
    return this.#sessionId;
  }

  /**
   * @internal
   */
  hasCallback(id: number): boolean {
    return this.#callbacks.has(id);
  }

  /**
   * @internal
   */
  getPendingProtocolErrors(): Error[] {
    return this.#callbacks.getPendingProtocolErrors();
  }
}
