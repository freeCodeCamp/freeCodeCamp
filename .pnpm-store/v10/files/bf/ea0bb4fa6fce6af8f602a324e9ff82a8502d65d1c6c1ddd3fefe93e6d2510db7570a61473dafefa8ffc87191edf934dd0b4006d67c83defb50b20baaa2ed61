/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type * as Bidi from 'webdriver-bidi-protocol';

import type {ElementHandle} from '../api/ElementHandle.js';
import {JSHandle} from '../api/JSHandle.js';
import {UnsupportedOperation} from '../common/Errors.js';

import {BidiDeserializer} from './Deserializer.js';
import type {BidiRealm} from './Realm.js';

/**
 * @internal
 */
export class BidiJSHandle<T = unknown> extends JSHandle<T> {
  static from<T>(
    value: Bidi.Script.RemoteValue,
    realm: BidiRealm,
  ): BidiJSHandle<T> {
    return new BidiJSHandle(value, realm);
  }

  readonly #remoteValue: Bidi.Script.RemoteValue;

  override readonly realm: BidiRealm;

  #disposed = false;

  constructor(value: Bidi.Script.RemoteValue, realm: BidiRealm) {
    super();
    this.#remoteValue = value;
    this.realm = realm;
  }

  override get disposed(): boolean {
    return this.#disposed;
  }

  override async jsonValue(): Promise<T> {
    return await this.evaluate(value => {
      return value;
    });
  }

  override asElement(): ElementHandle<Node> | null {
    return null;
  }

  override async dispose(): Promise<void> {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    await this.realm.destroyHandles([this]);
  }

  get isPrimitiveValue(): boolean {
    switch (this.#remoteValue.type) {
      case 'string':
      case 'number':
      case 'bigint':
      case 'boolean':
      case 'undefined':
      case 'null':
        return true;

      default:
        return false;
    }
  }

  override toString(): string {
    if (this.isPrimitiveValue) {
      return 'JSHandle:' + BidiDeserializer.deserialize(this.#remoteValue);
    }

    return 'JSHandle@' + this.#remoteValue.type;
  }

  override get id(): string | undefined {
    return 'handle' in this.#remoteValue ? this.#remoteValue.handle : undefined;
  }

  remoteValue(): Bidi.Script.RemoteValue {
    return this.#remoteValue;
  }

  override remoteObject(): never {
    throw new UnsupportedOperation('Not available in WebDriver BiDi');
  }
}
