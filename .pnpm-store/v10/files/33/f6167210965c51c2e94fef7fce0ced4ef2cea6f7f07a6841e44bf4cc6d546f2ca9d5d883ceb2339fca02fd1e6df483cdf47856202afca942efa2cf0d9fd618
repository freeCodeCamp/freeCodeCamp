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

import type {Connection} from './Connection.js';

/**
 * @internal
 */
export class CdpBluetoothEmulation implements BluetoothEmulation {
  #connection: Connection;

  constructor(connection: Connection) {
    this.#connection = connection;
  }

  async emulateAdapter(state: AdapterState, leSupported = true): Promise<void> {
    // Bluetooth spec requires overriding the existing adapter (step 6). From the CDP
    // perspective, it means disabling the emulation first.
    // https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command
    await this.#connection.send('BluetoothEmulation.disable');
    await this.#connection.send('BluetoothEmulation.enable', {
      state,
      leSupported,
    });
  }

  async disableEmulation(): Promise<void> {
    await this.#connection.send('BluetoothEmulation.disable');
  }

  async simulatePreconnectedPeripheral(
    preconnectedPeripheral: PreconnectedPeripheral,
  ): Promise<void> {
    await this.#connection.send(
      'BluetoothEmulation.simulatePreconnectedPeripheral',
      preconnectedPeripheral,
    );
  }
}
