/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type Protocol from 'devtools-protocol';

import type {CDPSession} from '../api/CDPSession.js';
import {DeviceRequestPrompt} from '../api/DeviceRequestPrompt.js';
import type {DeviceRequestPromptDevice} from '../api/DeviceRequestPrompt.js';
import type {WaitTimeoutOptions} from '../api/Page.js';
import type {TimeoutSettings} from '../common/TimeoutSettings.js';
import {assert} from '../util/assert.js';
import {Deferred} from '../util/Deferred.js';

/**
 * @internal
 */
export class CdpDeviceRequestPrompt extends DeviceRequestPrompt {
  #client: CDPSession | null;
  #timeoutSettings: TimeoutSettings;
  #id: string;
  #handled = false;
  #updateDevicesHandle = this.#updateDevices.bind(this);
  #waitForDevicePromises = new Set<{
    filter: (device: DeviceRequestPromptDevice) => boolean;
    promise: Deferred<DeviceRequestPromptDevice>;
  }>();

  constructor(
    client: CDPSession,
    timeoutSettings: TimeoutSettings,
    firstEvent: Protocol.DeviceAccess.DeviceRequestPromptedEvent,
  ) {
    super();
    this.#client = client;
    this.#timeoutSettings = timeoutSettings;
    this.#id = firstEvent.id;

    this.#client.on(
      'DeviceAccess.deviceRequestPrompted',
      this.#updateDevicesHandle,
    );
    this.#client.on('Target.detachedFromTarget', () => {
      this.#client = null;
    });

    this.#updateDevices(firstEvent);
  }

  #updateDevices(event: Protocol.DeviceAccess.DeviceRequestPromptedEvent) {
    if (event.id !== this.#id) {
      return;
    }

    for (const rawDevice of event.devices) {
      if (
        this.devices.some(device => {
          return device.id === rawDevice.id;
        })
      ) {
        continue;
      }

      const newDevice = {id: rawDevice.id, name: rawDevice.name};
      this.devices.push(newDevice);

      for (const waitForDevicePromise of this.#waitForDevicePromises) {
        if (waitForDevicePromise.filter(newDevice)) {
          waitForDevicePromise.promise.resolve(newDevice);
        }
      }
    }
  }

  async waitForDevice(
    filter: (device: DeviceRequestPromptDevice) => boolean,
    options: WaitTimeoutOptions = {},
  ): Promise<DeviceRequestPromptDevice> {
    for (const device of this.devices) {
      if (filter(device)) {
        return device;
      }
    }

    const {timeout = this.#timeoutSettings.timeout()} = options;
    const deferred = Deferred.create<DeviceRequestPromptDevice>({
      message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout}ms exceeded`,
      timeout,
    });

    if (options.signal) {
      options.signal.addEventListener(
        'abort',
        () => {
          deferred.reject(options.signal?.reason);
        },
        {once: true},
      );
    }

    const handle = {filter, promise: deferred};
    this.#waitForDevicePromises.add(handle);
    try {
      return await deferred.valueOrThrow();
    } finally {
      this.#waitForDevicePromises.delete(handle);
    }
  }

  async select(device: DeviceRequestPromptDevice): Promise<void> {
    assert(
      this.#client !== null,
      'Cannot select device through detached session!',
    );
    assert(this.devices.includes(device), 'Cannot select unknown device!');
    assert(
      !this.#handled,
      'Cannot select DeviceRequestPrompt which is already handled!',
    );
    this.#client.off(
      'DeviceAccess.deviceRequestPrompted',
      this.#updateDevicesHandle,
    );
    this.#handled = true;
    return await this.#client.send('DeviceAccess.selectPrompt', {
      id: this.#id,
      deviceId: device.id,
    });
  }

  async cancel(): Promise<void> {
    assert(
      this.#client !== null,
      'Cannot cancel prompt through detached session!',
    );
    assert(
      !this.#handled,
      'Cannot cancel DeviceRequestPrompt which is already handled!',
    );
    this.#client.off(
      'DeviceAccess.deviceRequestPrompted',
      this.#updateDevicesHandle,
    );
    this.#handled = true;
    return await this.#client.send('DeviceAccess.cancelPrompt', {id: this.#id});
  }
}

/**
 * @internal
 */
export class CdpDeviceRequestPromptManager {
  #client: CDPSession | null;
  #timeoutSettings: TimeoutSettings;
  #deviceRequestPromptDeferreds = new Set<Deferred<DeviceRequestPrompt>>();

  constructor(client: CDPSession, timeoutSettings: TimeoutSettings) {
    this.#client = client;
    this.#timeoutSettings = timeoutSettings;

    this.#client.on('DeviceAccess.deviceRequestPrompted', event => {
      this.#onDeviceRequestPrompted(event);
    });
    this.#client.on('Target.detachedFromTarget', () => {
      this.#client = null;
    });
  }

  async waitForDevicePrompt(
    options: WaitTimeoutOptions = {},
  ): Promise<DeviceRequestPrompt> {
    assert(
      this.#client !== null,
      'Cannot wait for device prompt through detached session!',
    );
    const needsEnable = this.#deviceRequestPromptDeferreds.size === 0;
    let enablePromise: Promise<void> | undefined;
    if (needsEnable) {
      enablePromise = this.#client.send('DeviceAccess.enable');
    }

    const {timeout = this.#timeoutSettings.timeout()} = options;
    const deferred = Deferred.create<DeviceRequestPrompt>({
      message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout}ms exceeded`,
      timeout,
    });
    if (options.signal) {
      options.signal.addEventListener(
        'abort',
        () => {
          deferred.reject(options.signal?.reason);
        },
        {once: true},
      );
    }

    this.#deviceRequestPromptDeferreds.add(deferred);

    try {
      const [result] = await Promise.all([
        deferred.valueOrThrow(),
        enablePromise,
      ]);
      return result;
    } finally {
      this.#deviceRequestPromptDeferreds.delete(deferred);
    }
  }

  #onDeviceRequestPrompted(
    event: Protocol.DeviceAccess.DeviceRequestPromptedEvent,
  ) {
    if (!this.#deviceRequestPromptDeferreds.size) {
      return;
    }

    assert(this.#client !== null);
    const devicePrompt = new CdpDeviceRequestPrompt(
      this.#client,
      this.#timeoutSettings,
      event,
    );
    for (const promise of this.#deviceRequestPromptDeferreds) {
      promise.resolve(devicePrompt);
    }
    this.#deviceRequestPromptDeferreds.clear();
  }
}
