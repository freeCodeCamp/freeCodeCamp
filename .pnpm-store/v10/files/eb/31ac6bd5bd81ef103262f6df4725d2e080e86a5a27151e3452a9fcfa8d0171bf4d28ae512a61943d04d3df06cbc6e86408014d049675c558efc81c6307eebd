/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Device request prompts let you respond to the page requesting for a device
 * through an API like WebBluetooth.
 *
 * @remarks
 * `DeviceRequestPrompt` instances are returned via the
 * {@link Page.waitForDevicePrompt} method.
 *
 * @example
 *
 * ```ts
 * const [devicePrompt] = Promise.all([
 *   page.waitForDevicePrompt(),
 *   page.click('#connect-bluetooth'),
 * ]);
 * await devicePrompt.select(
 *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device')),
 * );
 * ```
 *
 * @public
 */
export class DeviceRequestPrompt {
    /**
     * Current list of selectable devices.
     */
    devices = [];
}
//# sourceMappingURL=DeviceRequestPrompt.js.map