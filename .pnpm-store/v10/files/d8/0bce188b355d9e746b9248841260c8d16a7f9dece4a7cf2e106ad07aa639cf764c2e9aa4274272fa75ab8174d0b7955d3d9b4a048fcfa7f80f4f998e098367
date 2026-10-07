/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { DeviceRequestPrompt } from '../api/DeviceRequestPrompt.js';
import { assert } from '../util/assert.js';
import { Deferred } from '../util/Deferred.js';
/**
 * @internal
 */
export class CdpDeviceRequestPrompt extends DeviceRequestPrompt {
    #client;
    #timeoutSettings;
    #id;
    #handled = false;
    #updateDevicesHandle = this.#updateDevices.bind(this);
    #waitForDevicePromises = new Set();
    constructor(client, timeoutSettings, firstEvent) {
        super();
        this.#client = client;
        this.#timeoutSettings = timeoutSettings;
        this.#id = firstEvent.id;
        this.#client.on('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#client.on('Target.detachedFromTarget', () => {
            this.#client = null;
        });
        this.#updateDevices(firstEvent);
    }
    #updateDevices(event) {
        if (event.id !== this.#id) {
            return;
        }
        for (const rawDevice of event.devices) {
            if (this.devices.some(device => {
                return device.id === rawDevice.id;
            })) {
                continue;
            }
            const newDevice = { id: rawDevice.id, name: rawDevice.name };
            this.devices.push(newDevice);
            for (const waitForDevicePromise of this.#waitForDevicePromises) {
                if (waitForDevicePromise.filter(newDevice)) {
                    waitForDevicePromise.promise.resolve(newDevice);
                }
            }
        }
    }
    async waitForDevice(filter, options = {}) {
        for (const device of this.devices) {
            if (filter(device)) {
                return device;
            }
        }
        const { timeout = this.#timeoutSettings.timeout() } = options;
        const deferred = Deferred.create({
            message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        if (options.signal) {
            options.signal.addEventListener('abort', () => {
                deferred.reject(options.signal?.reason);
            }, { once: true });
        }
        const handle = { filter, promise: deferred };
        this.#waitForDevicePromises.add(handle);
        try {
            return await deferred.valueOrThrow();
        }
        finally {
            this.#waitForDevicePromises.delete(handle);
        }
    }
    async select(device) {
        assert(this.#client !== null, 'Cannot select device through detached session!');
        assert(this.devices.includes(device), 'Cannot select unknown device!');
        assert(!this.#handled, 'Cannot select DeviceRequestPrompt which is already handled!');
        this.#client.off('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#handled = true;
        return await this.#client.send('DeviceAccess.selectPrompt', {
            id: this.#id,
            deviceId: device.id,
        });
    }
    async cancel() {
        assert(this.#client !== null, 'Cannot cancel prompt through detached session!');
        assert(!this.#handled, 'Cannot cancel DeviceRequestPrompt which is already handled!');
        this.#client.off('DeviceAccess.deviceRequestPrompted', this.#updateDevicesHandle);
        this.#handled = true;
        return await this.#client.send('DeviceAccess.cancelPrompt', { id: this.#id });
    }
}
/**
 * @internal
 */
export class CdpDeviceRequestPromptManager {
    #client;
    #timeoutSettings;
    #deviceRequestPromptDeferreds = new Set();
    constructor(client, timeoutSettings) {
        this.#client = client;
        this.#timeoutSettings = timeoutSettings;
        this.#client.on('DeviceAccess.deviceRequestPrompted', event => {
            this.#onDeviceRequestPrompted(event);
        });
        this.#client.on('Target.detachedFromTarget', () => {
            this.#client = null;
        });
    }
    async waitForDevicePrompt(options = {}) {
        assert(this.#client !== null, 'Cannot wait for device prompt through detached session!');
        const needsEnable = this.#deviceRequestPromptDeferreds.size === 0;
        let enablePromise;
        if (needsEnable) {
            enablePromise = this.#client.send('DeviceAccess.enable');
        }
        const { timeout = this.#timeoutSettings.timeout() } = options;
        const deferred = Deferred.create({
            message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout}ms exceeded`,
            timeout,
        });
        if (options.signal) {
            options.signal.addEventListener('abort', () => {
                deferred.reject(options.signal?.reason);
            }, { once: true });
        }
        this.#deviceRequestPromptDeferreds.add(deferred);
        try {
            const [result] = await Promise.all([
                deferred.valueOrThrow(),
                enablePromise,
            ]);
            return result;
        }
        finally {
            this.#deviceRequestPromptDeferreds.delete(deferred);
        }
    }
    #onDeviceRequestPrompted(event) {
        if (!this.#deviceRequestPromptDeferreds.size) {
            return;
        }
        assert(this.#client !== null);
        const devicePrompt = new CdpDeviceRequestPrompt(this.#client, this.#timeoutSettings, event);
        for (const promise of this.#deviceRequestPromptDeferreds) {
            promise.resolve(devicePrompt);
        }
        this.#deviceRequestPromptDeferreds.clear();
    }
}
//# sourceMappingURL=DeviceRequestPrompt.js.map