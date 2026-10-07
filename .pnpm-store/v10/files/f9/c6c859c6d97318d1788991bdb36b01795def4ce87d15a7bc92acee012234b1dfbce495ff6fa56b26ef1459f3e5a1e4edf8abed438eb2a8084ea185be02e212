/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  AdapterState,
  BluetoothEmulation,
  PreconnectedPeripheral,
} from '../api/BluetoothEmulation.js';

import type {Session} from './core/Session.js';

/**
 * @internal
 */
export class BidiBluetoothEmulation implements BluetoothEmulation {
  readonly #session: Session;
  readonly #contextId: string;

  constructor(contextId: string, session: Session) {
    this.#contextId = contextId;
    this.#session = session;
  }

  async emulateAdapter(state: AdapterState, leSupported = true): Promise<void> {
    await this.#session.send('bluetooth.simulateAdapter', {
      context: this.#contextId,
      state,
      leSupported,
    });
  }

  async disableEmulation(): Promise<void> {
    await this.#session.send('bluetooth.disableSimulation', {
      context: this.#contextId,
    });
  }

  async simulatePreconnectedPeripheral(
    preconnectedPeripheral: PreconnectedPeripheral,
  ): Promise<void> {
    await this.#session.send('bluetooth.simulatePreconnectedPeripheral', {
      context: this.#contextId,
      address: preconnectedPeripheral.address,
      name: preconnectedPeripheral.name,
      manufacturerData: preconnectedPeripheral.manufacturerData,
      knownServiceUuids: preconnectedPeripheral.knownServiceUuids,
    });
  }
}
