/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @internal
 */
export class BidiBluetoothEmulation {
    #session;
    #contextId;
    constructor(contextId, session) {
        this.#contextId = contextId;
        this.#session = session;
    }
    async emulateAdapter(state, leSupported = true) {
        await this.#session.send('bluetooth.simulateAdapter', {
            context: this.#contextId,
            state,
            leSupported,
        });
    }
    async disableEmulation() {
        await this.#session.send('bluetooth.disableSimulation', {
            context: this.#contextId,
        });
    }
    async simulatePreconnectedPeripheral(preconnectedPeripheral) {
        await this.#session.send('bluetooth.simulatePreconnectedPeripheral', {
            context: this.#contextId,
            address: preconnectedPeripheral.address,
            name: preconnectedPeripheral.name,
            manufacturerData: preconnectedPeripheral.manufacturerData,
            knownServiceUuids: preconnectedPeripheral.knownServiceUuids,
        });
    }
}
//# sourceMappingURL=BluetoothEmulation.js.map