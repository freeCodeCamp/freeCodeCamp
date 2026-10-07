/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {CDPSession} from '../api/CDPSession.js';
import {JSHandle} from '../api/JSHandle.js';
import {debugError} from '../common/util.js';

import type {CdpElementHandle} from './ElementHandle.js';
import type {IsolatedWorld} from './IsolatedWorld.js';
import {valueFromPrimitiveRemoteObject} from './utils.js';

/**
 * @internal
 */
export class CdpJSHandle<T = unknown> extends JSHandle<T> {
  #disposed = false;
  readonly #remoteObject: Protocol.Runtime.RemoteObject;
  readonly #world: IsolatedWorld;

  constructor(
    world: IsolatedWorld,
    remoteObject: Protocol.Runtime.RemoteObject,
  ) {
    super();
    this.#world = world;
    this.#remoteObject = remoteObject;
  }

  override get disposed(): boolean {
    return this.#disposed;
  }

  override get realm(): IsolatedWorld {
    return this.#world;
  }

  get client(): CDPSession {
    return this.realm.environment.client;
  }

  override async jsonValue(): Promise<T> {
    if (!this.#remoteObject.objectId) {
      return valueFromPrimitiveRemoteObject(this.#remoteObject) as T;
    }
    const value = await this.evaluate(object => {
      return object;
    });
    if (value === undefined) {
      throw new Error('Could not serialize referenced object');
    }
    return value;
  }

  /**
   * Either `null` or the handle itself if the handle is an
   * instance of {@link ElementHandle}.
   */
  override asElement(): CdpElementHandle<Node> | null {
    return null;
  }

  override async dispose(): Promise<void> {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    await releaseObject(this.client, this.#remoteObject);
  }

  override toString(): string {
    if (!this.#remoteObject.objectId) {
      return 'JSHandle:' + valueFromPrimitiveRemoteObject(this.#remoteObject);
    }
    const type = this.#remoteObject.subtype || this.#remoteObject.type;
    return 'JSHandle@' + type;
  }

  override get id(): string | undefined {
    return this.#remoteObject.objectId;
  }

  override remoteObject(): Protocol.Runtime.RemoteObject {
    return this.#remoteObject;
  }

  override async getProperties(): Promise<Map<string, JSHandle<unknown>>> {
    // We use Runtime.getProperties rather than iterative version for
    // improved performance as it allows getting everything at once.
    const response = await this.client.send('Runtime.getProperties', {
      objectId: this.#remoteObject.objectId!,
      ownProperties: true,
    });
    const result = new Map<string, JSHandle>();
    for (const property of response.result) {
      if (!property.enumerable || !property.value) {
        continue;
      }
      result.set(property.name, this.#world.createCdpHandle(property.value));
    }
    return result;
  }
}

/**
 * @internal
 */
export async function releaseObject(
  client: CDPSession,
  remoteObject: Protocol.Runtime.RemoteObject,
): Promise<void> {
  if (!remoteObject.objectId) {
    return;
  }
  await client
    .send('Runtime.releaseObject', {objectId: remoteObject.objectId})
    .catch(error => {
      // Exceptions might happen in case of a page been navigated or closed.
      // Swallow these since they are harmless and we don't leak anything in this case.
      debugError(error);
    });
}
