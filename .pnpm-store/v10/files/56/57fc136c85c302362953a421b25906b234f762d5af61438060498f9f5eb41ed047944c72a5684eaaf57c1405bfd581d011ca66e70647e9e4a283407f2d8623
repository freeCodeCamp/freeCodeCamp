/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @public
 * Emulated bluetooth adapter state.
 */
export type AdapterState = 'absent' | 'powered-off' | 'powered-on';
/**
 * @public
 * Represents the simulated bluetooth peripheral's manufacturer data.
 */
export interface BluetoothManufacturerData {
    /**
     * The company identifier, as defined by the {@link https://www.bluetooth.com/specifications/assigned-numbers/company-identifiers/|Bluetooth SIG}.
     */
    key: number;
    /**
     * The manufacturer-specific data as a base64-encoded string.
     */
    data: string;
}
/**
 * @public
 * A bluetooth peripheral to be simulated.
 */
export interface PreconnectedPeripheral {
    address: string;
    name: string;
    manufacturerData: BluetoothManufacturerData[];
    knownServiceUuids: string[];
}
/**
 * Exposes the bluetooth emulation abilities.
 *
 * @remarks {@link https://webbluetoothcg.github.io/web-bluetooth/#simulated-bluetooth-adapter|Web Bluetooth specification}
 * requires the emulated adapters should be isolated per top-level navigable. However,
 * at the moment Chromium's bluetooth emulation implementation is tight to the browser
 * context, not the page. This means the bluetooth emulation exposed from different pages
 * of the same browser context would interfere their states.
 *
 * @example
 *
 * ```ts
 * await page.bluetooth.emulateAdapter('powered-on');
 * await page.bluetooth.simulatePreconnectedPeripheral({
 *   address: '09:09:09:09:09:09',
 *   name: 'SOME_NAME',
 *   manufacturerData: [
 *     {
 *       key: 17,
 *       data: 'AP8BAX8=',
 *     },
 *   ],
 *   knownServiceUuids: ['12345678-1234-5678-9abc-def123456789'],
 * });
 * await page.bluetooth.disableEmulation();
 * ```
 *
 * @experimental
 * @public
 */
export interface BluetoothEmulation {
    /**
     * Emulate Bluetooth adapter. Required for bluetooth simulations
     * See {@link https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command|bluetooth.simulateAdapter}.
     *
     * @param state - The desired bluetooth adapter state.
     * @param leSupported - Mark if the adapter supports low-energy bluetooth.
     *
     * @experimental
     * @public
     */
    emulateAdapter(state: AdapterState, leSupported?: boolean): Promise<void>;
    /**
     * Disable emulated bluetooth adapter.
     * See {@link https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-disableSimulation-command|bluetooth.disableSimulation}.
     *
     * @experimental
     * @public
     */
    disableEmulation(): Promise<void>;
    /**
     * Simulated preconnected Bluetooth Peripheral.
     * See {@link https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateconnectedperipheral-command|bluetooth.simulatePreconnectedPeripheral}.
     *
     * @param preconnectedPeripheral - The peripheral to simulate.
     *
     * @experimental
     * @public
     */
    simulatePreconnectedPeripheral(preconnectedPeripheral: PreconnectedPeripheral): Promise<void>;
}
//# sourceMappingURL=BluetoothEmulation.d.ts.map