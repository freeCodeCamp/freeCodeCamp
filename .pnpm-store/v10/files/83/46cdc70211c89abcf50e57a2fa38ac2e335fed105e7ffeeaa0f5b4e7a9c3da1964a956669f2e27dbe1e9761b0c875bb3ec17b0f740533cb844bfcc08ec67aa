/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import {WebWorker} from '../api/WebWorker.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {CDPSession} from '../puppeteer-core.js';

import type {DedicatedWorkerRealm, SharedWorkerRealm} from './core/Realm.js';
import type {BidiFrame} from './Frame.js';
import {BidiWorkerRealm} from './Realm.js';

/**
 * @internal
 */
export class BidiWebWorker extends WebWorker {
  static from(
    frame: BidiFrame,
    realm: DedicatedWorkerRealm | SharedWorkerRealm,
  ): BidiWebWorker {
    const worker = new BidiWebWorker(frame, realm);
    return worker;
  }

  readonly #frame: BidiFrame;
  readonly #realm: BidiWorkerRealm;
  private constructor(
    frame: BidiFrame,
    realm: DedicatedWorkerRealm | SharedWorkerRealm,
  ) {
    super(realm.origin);
    this.#frame = frame;
    this.#realm = BidiWorkerRealm.from(realm, this);
  }

  get frame(): BidiFrame {
    return this.#frame;
  }

  mainRealm(): BidiWorkerRealm {
    return this.#realm;
  }

  get client(): CDPSession {
    throw new UnsupportedOperation();
  }
}
