/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {WaitTimeoutOptions} from './Page.js';

/**
 * Device in a request prompt.
 *
 * @public
 */
export interface DeviceRequestPromptDevice {
  /**
   * Device id during a prompt.
   */
  id: string;

  /**
   * Device name as it appears in a prompt.
   */
  name: string;
}

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
export abstract class DeviceRequestPrompt {
  /**
   * Current list of selectable devices.
   */
  readonly devices: DeviceRequestPromptDevice[] = [];

  /**
   * Resolve to the first device in the prompt matching a filter.
   */
  abstract waitForDevice(
    filter: (device: DeviceRequestPromptDevice) => boolean,
    options?: WaitTimeoutOptions,
  ): Promise<DeviceRequestPromptDevice>;

  /**
   * Select a device in the prompt's list.
   */
  abstract select(device: DeviceRequestPromptDevice): Promise<void>;

  /**
   * Cancel the prompt.
   */
  abstract cancel(): Promise<void>;
}
