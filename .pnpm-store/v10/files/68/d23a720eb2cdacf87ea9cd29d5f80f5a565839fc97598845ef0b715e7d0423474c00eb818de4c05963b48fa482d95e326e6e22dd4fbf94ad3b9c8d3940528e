/**
 * @internal
 */
export class CdpBluetoothEmulation {
    #connection;
    constructor(connection) {
        this.#connection = connection;
    }
    async emulateAdapter(state, leSupported = true) {
        // Bluetooth spec requires overriding the existing adapter (step 6). From the CDP
        // perspective, it means disabling the emulation first.
        // https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command
        await this.#connection.send('BluetoothEmulation.disable');
        await this.#connection.send('BluetoothEmulation.enable', {
            state,
            leSupported,
        });
    }
    async disableEmulation() {
        await this.#connection.send('BluetoothEmulation.disable');
    }
    async simulatePreconnectedPeripheral(preconnectedPeripheral) {
        await this.#connection.send('BluetoothEmulation.simulatePreconnectedPeripheral', preconnectedPeripheral);
    }
}
//# sourceMappingURL=BluetoothEmulation.js.map