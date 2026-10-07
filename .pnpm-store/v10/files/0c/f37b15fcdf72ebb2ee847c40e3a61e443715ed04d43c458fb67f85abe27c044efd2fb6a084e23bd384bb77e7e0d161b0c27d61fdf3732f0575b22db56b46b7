/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type * as ChromiumBidi from 'chromium-bidi/lib/protocol/protocol.js';
import type * as Bidi from 'webdriver-bidi-protocol';

import {CallbackRegistry} from '../common/CallbackRegistry.js';
import type {ConnectionTransport} from '../common/ConnectionTransport.js';
import {debug} from '../common/Debug.js';
import {ConnectionClosedError} from '../common/Errors.js';
import type {EventsWithWildcard} from '../common/EventEmitter.js';
import {EventEmitter} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import type {GetIdFn} from '../util/incremental-id-generator.js';

import {BidiCdpSession} from './CDPSession.js';
import type {
  BidiEvents,
  Commands as BidiCommands,
  Connection,
} from './core/Connection.js';

const debugProtocolSend = debug('puppeteer:webDriverBiDi:SEND ►');
const debugProtocolReceive = debug('puppeteer:webDriverBiDi:RECV ◀');

export type CdpEvent = ChromiumBidi.Cdp.Event;

/**
 * @internal
 */
export interface Commands extends BidiCommands {
  'goog:cdp.sendCommand': {
    params: ChromiumBidi.Cdp.SendCommandParameters;
    returnType: ChromiumBidi.Cdp.SendCommandResult;
  };
  'goog:cdp.getSession': {
    params: ChromiumBidi.Cdp.GetSessionParameters;
    returnType: ChromiumBidi.Cdp.GetSessionResult;
  };
  'goog:cdp.resolveRealm': {
    params: ChromiumBidi.Cdp.ResolveRealmParameters;
    returnType: ChromiumBidi.Cdp.ResolveRealmResult;
  };
}

/**
 * @internal
 */
export class BidiConnection
  extends EventEmitter<BidiEvents>
  implements Connection
{
  #url: string;
  #transport: ConnectionTransport;
  #delay: number;
  #timeout = 0;
  #closed = false;
  #callbacks: CallbackRegistry;
  #emitters: Array<EventEmitter<any>> = [];

  constructor(
    url: string,
    transport: ConnectionTransport,
    idGenerator: GetIdFn,
    delay = 0,
    timeout?: number,
  ) {
    super();
    this.#url = url;
    this.#delay = delay;
    this.#timeout = timeout ?? 180_000;
    this.#callbacks = new CallbackRegistry(idGenerator);

    this.#transport = transport;
    this.#transport.onmessage = this.onMessage.bind(this);
    this.#transport.onclose = this.unbind.bind(this);
  }

  get closed(): boolean {
    return this.#closed;
  }

  get url(): string {
    return this.#url;
  }

  pipeTo<Events extends BidiEvents>(emitter: EventEmitter<Events>): void {
    this.#emitters.push(emitter);
  }

  #toWebDriverOnlyEvent(event: Record<string, any>) {
    for (const key in event) {
      if (key.startsWith('goog:')) {
        delete event[key];
      } else {
        if (typeof event[key] === 'object' && event[key] !== null) {
          this.#toWebDriverOnlyEvent(event[key]);
        }
      }
    }
  }

  override emit<Key extends keyof EventsWithWildcard<BidiEvents>>(
    type: Key,
    event: EventsWithWildcard<BidiEvents>[Key],
  ): boolean {
    if (process.env['PUPPETEER_WEBDRIVER_BIDI_ONLY'] === 'true') {
      // Required for WebDriver-only testing.
      this.#toWebDriverOnlyEvent(event);
    }
    for (const emitter of this.#emitters) {
      emitter.emit(type, event);
    }
    return super.emit(type, event);
  }

  send<T extends keyof Commands>(
    method: T,
    params: Commands[T]['params'],
    timeout?: number,
  ): Promise<{result: Commands[T]['returnType']}> {
    if (this.#closed) {
      return Promise.reject(new ConnectionClosedError('Connection closed.'));
    }
    return this.#callbacks.create(method, timeout ?? this.#timeout, id => {
      const stringifiedMessage = JSON.stringify({
        id,
        method,
        params,
      } as Bidi.Command);
      debugProtocolSend(stringifiedMessage);
      this.#transport.send(stringifiedMessage);
    }) as Promise<{result: Commands[T]['returnType']}>;
  }

  /**
   * @internal
   */
  protected async onMessage(message: string): Promise<void> {
    if (this.#delay) {
      await new Promise(f => {
        return setTimeout(f, this.#delay);
      });
    }
    debugProtocolReceive(message);
    const object: Bidi.Message | CdpEvent = JSON.parse(message);
    if ('type' in object) {
      switch (object.type) {
        case 'success':
          this.#callbacks.resolve(object.id, object);
          return;
        case 'error':
          if (object.id === null) {
            break;
          }
          this.#callbacks.reject(
            object.id,
            createProtocolError(object),
            `${object.error}: ${object.message}`,
          );
          return;
        case 'event':
          if (isCdpEvent(object)) {
            BidiCdpSession.sessions
              .get(object.params.session)
              ?.emit(object.params.event, object.params.params);
            return;
          }
          // SAFETY: We know the method and parameter still match here.
          this.emit(object.method, object.params);
          return;
      }
    }
    // Even if the response in not in BiDi protocol format but `id` is provided, reject
    // the callback. This can happen if the endpoint supports CDP instead of BiDi.
    if ('id' in object) {
      this.#callbacks.reject(
        (object as {id: number}).id,
        `Protocol Error. Message is not in BiDi protocol format: '${message}'`,
        object.message,
      );
    }
    debugError(object);
  }

  /**
   * Unbinds the connection, but keeps the transport open. Useful when the transport will
   * be reused by other connection e.g. with different protocol.
   * @internal
   */
  unbind(): void {
    if (this.#closed) {
      return;
    }
    this.#closed = true;
    // Both may still be invoked and produce errors
    this.#transport.onmessage = () => {};
    this.#transport.onclose = () => {};

    this.#callbacks.clear();
  }

  /**
   * Unbinds the connection and closes the transport.
   */
  dispose(): void {
    this.unbind();
    this.#transport.close();
  }

  getPendingProtocolErrors(): Error[] {
    return this.#callbacks.getPendingProtocolErrors();
  }
}

/**
 * @internal
 */
function createProtocolError(object: Bidi.ErrorResponse): string {
  let message = `${object.error} ${object.message}`;
  if (object.stacktrace) {
    message += ` ${object.stacktrace}`;
  }
  return message;
}

function isCdpEvent(event: Bidi.Event | CdpEvent): event is CdpEvent {
  return event.method.startsWith('goog:cdp.');
}
