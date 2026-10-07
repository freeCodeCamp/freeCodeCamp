/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';
import type {ProtocolMapping} from 'devtools-protocol/types/protocol-mapping.js';

import type {CommandOptions} from '../api/CDPSession.js';
import {
  CDPSessionEvent,
  type CDPSession,
  type CDPSessionEvents,
} from '../api/CDPSession.js';
import {CallbackRegistry} from '../common/CallbackRegistry.js';
import type {ConnectionTransport} from '../common/ConnectionTransport.js';
import {debug} from '../common/Debug.js';
import {ConnectionClosedError, TargetCloseError} from '../common/Errors.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {createProtocolErrorMessage} from '../util/ErrorLike.js';
import {
  createIncrementalIdGenerator,
  type GetIdFn,
} from '../util/incremental-id-generator.js';

import {CdpCDPSession} from './CdpSession.js';

const debugProtocolSend = debug('puppeteer:protocol:SEND ►');
const debugProtocolReceive = debug('puppeteer:protocol:RECV ◀');

/**
 * @public
 */
export class Connection extends EventEmitter<CDPSessionEvents> {
  #url: string;
  #transport: ConnectionTransport;
  #delay: number;
  #timeout: number;
  #sessions = new Map<string, CdpCDPSession>();
  #closed = false;
  #manuallyAttached = new Set<string>();
  #rejectEmulateNetworkConditionsCalls = false;
  #callbacks: CallbackRegistry;
  #rawErrors = false;
  #idGenerator: GetIdFn;

  constructor(
    url: string,
    transport: ConnectionTransport,
    delay = 0,
    timeout?: number,
    rawErrors = false,
    idGenerator: () => number = createIncrementalIdGenerator(),
  ) {
    super();
    this.#rawErrors = rawErrors;
    this.#idGenerator = idGenerator;
    this.#callbacks = new CallbackRegistry(idGenerator);
    this.#url = url;
    this.#delay = delay;
    this.#timeout = timeout ?? 180_000;

    this.#transport = transport;
    this.#transport.onmessage = this.onMessage.bind(this);
    this.#transport.onclose = this.#onClose.bind(this);
  }

  static fromSession(session: CDPSession): Connection | undefined {
    return session.connection();
  }

  /**
   * @internal
   */
  get delay(): number {
    return this.#delay;
  }

  get timeout(): number {
    return this.#timeout;
  }

  /**
   * @internal
   */
  get rejectEmulateNetworkConditionsCalls(): boolean {
    return this.#rejectEmulateNetworkConditionsCalls;
  }

  set rejectEmulateNetworkConditionsCalls(value: boolean) {
    this.#rejectEmulateNetworkConditionsCalls = value;
  }

  /**
   * @internal
   */
  get _closed(): boolean {
    return this.#closed;
  }

  /**
   * @internal
   */
  get _idGenerator(): GetIdFn {
    return this.#idGenerator;
  }

  /**
   * @internal
   */
  get _sessions(): Map<string, CdpCDPSession> {
    return this.#sessions;
  }

  /**
   * @internal
   */
  _session(sessionId: string): CdpCDPSession | null {
    return this.#sessions.get(sessionId) || null;
  }

  /**
   * @param sessionId - The session id
   * @returns The current CDP session if it exists
   */
  session(sessionId: string): CDPSession | null {
    return this._session(sessionId);
  }

  url(): string {
    return this.#url;
  }

  send<T extends keyof ProtocolMapping.Commands>(
    method: T,
    params?: ProtocolMapping.Commands[T]['paramsType'][0],
    options?: CommandOptions,
  ): Promise<ProtocolMapping.Commands[T]['returnType']> {
    // There is only ever 1 param arg passed, but the Protocol defines it as an
    // array of 0 or 1 items See this comment:
    // https://github.com/ChromeDevTools/devtools-protocol/pull/113#issuecomment-412603285
    // which explains why the protocol defines the params this way for better
    // type-inference.
    // So now we check if there are any params or not and deal with them accordingly.
    return this._rawSend(this.#callbacks, method, params, undefined, options);
  }

  /**
   * @internal
   */
  _rawSend<T extends keyof ProtocolMapping.Commands>(
    callbacks: CallbackRegistry,
    method: T,
    params: ProtocolMapping.Commands[T]['paramsType'][0],
    sessionId?: string,
    options?: CommandOptions,
  ): Promise<ProtocolMapping.Commands[T]['returnType']> {
    if (this.#closed) {
      return Promise.reject(new ConnectionClosedError('Connection closed.'));
    }
    if (
      method === 'Network.emulateNetworkConditions' &&
      this.rejectEmulateNetworkConditionsCalls
    ) {
      return Promise.reject(
        new Error(
          'Cannot reset network conditions: rule-based emulation is enabled.',
        ),
      );
    }
    return callbacks.create(method, options?.timeout ?? this.#timeout, id => {
      const stringifiedMessage = JSON.stringify({
        method,
        params,
        id,
        sessionId,
      });
      debugProtocolSend(stringifiedMessage);
      this.#transport.send(stringifiedMessage);
    }) as Promise<ProtocolMapping.Commands[T]['returnType']>;
  }

  /**
   * @internal
   */
  async closeBrowser(): Promise<void> {
    await this.send('Browser.close');
  }

  /**
   * @internal
   */
  protected async onMessage(message: string): Promise<void> {
    if (this.#delay) {
      await new Promise(r => {
        return setTimeout(r, this.#delay);
      });
    }
    debugProtocolReceive(message);
    const object = JSON.parse(message);
    if (object.method === 'Target.attachedToTarget') {
      const sessionId = object.params.sessionId;
      const session = new CdpCDPSession(
        this,
        object.params.targetInfo.type,
        sessionId,
        object.sessionId,
        this.#rawErrors,
      );
      this.#sessions.set(sessionId, session);
      this.emit(CDPSessionEvent.SessionAttached, session);
      const parentSession = this.#sessions.get(object.sessionId);
      if (parentSession) {
        parentSession.emit(CDPSessionEvent.SessionAttached, session);
      }
    } else if (object.method === 'Target.detachedFromTarget') {
      const session = this.#sessions.get(object.params.sessionId);
      if (session) {
        session.onClosed();
        this.#sessions.delete(object.params.sessionId);
        this.emit(CDPSessionEvent.SessionDetached, session);
        const parentSession = this.#sessions.get(object.sessionId);
        if (parentSession) {
          parentSession.emit(CDPSessionEvent.SessionDetached, session);
        }
      }
    }
    if (object.sessionId) {
      const session = this.#sessions.get(object.sessionId);
      if (session) {
        session.onMessage(object);
      }
    } else if (object.id) {
      if (this.#callbacks.has(object.id)) {
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
        for (const session of this.#sessions.values()) {
          if (session.hasCallback(object.id)) {
            session.onMessage(object);
            break;
          }
        }
      }
    } else {
      this.emit(object.method, object.params);
    }
  }

  #onClose(): void {
    if (this.#closed) {
      return;
    }
    this.#closed = true;
    this.#transport.onmessage = undefined;
    this.#transport.onclose = undefined;
    this.#callbacks.clear();
    for (const session of this.#sessions.values()) {
      session.onClosed();
    }
    this.#sessions.clear();
    this.emit(CDPSessionEvent.Disconnected, undefined);
  }

  dispose(): void {
    this.#onClose();
    this.#transport.close();
  }

  /**
   * @internal
   */
  isAutoAttached(targetId: string): boolean {
    return !this.#manuallyAttached.has(targetId);
  }

  /**
   * @internal
   */
  async _createSession(
    targetInfo: {targetId: string},
    isAutoAttachEmulated = true,
  ): Promise<CdpCDPSession> {
    if (!isAutoAttachEmulated) {
      this.#manuallyAttached.add(targetInfo.targetId);
    }
    const {sessionId} = await this.send('Target.attachToTarget', {
      targetId: targetInfo.targetId,
      flatten: true,
    });
    this.#manuallyAttached.delete(targetInfo.targetId);
    const session = this.#sessions.get(sessionId);
    if (!session) {
      throw new Error('CDPSession creation failed.');
    }
    return session;
  }

  /**
   * @param targetInfo - The target info
   * @returns The CDP session that is created
   */
  async createSession(
    targetInfo: Protocol.Target.TargetInfo,
  ): Promise<CDPSession> {
    return await this._createSession(targetInfo, false);
  }

  /**
   * @internal
   */
  getPendingProtocolErrors(): Error[] {
    const result: Error[] = [];
    result.push(...this.#callbacks.getPendingProtocolErrors());
    for (const session of this.#sessions.values()) {
      result.push(...session.getPendingProtocolErrors());
    }
    return result;
  }
}

/**
 * @internal
 */
export function isTargetClosedError(error: Error): boolean {
  return error instanceof TargetCloseError;
}
