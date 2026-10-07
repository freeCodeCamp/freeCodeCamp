/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type * as Bidi from 'webdriver-bidi-protocol';

import {
  DeviceRequestPrompt,
  type DeviceRequestPromptDevice,
} from '../api/DeviceRequestPrompt.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {Deferred} from '../util/Deferred.js';

import type {Session} from './core/Session.js';

/**
 * @internal
 */
export class BidiDeviceRequestPromptManager {
  readonly #session: Session;
  readonly #contextId: string;
  #enabled = false;

  constructor(contextId: string, session: Session) {
    this.#session = session;
    this.#contextId = contextId;
  }

  async #enableIfNeeded(): Promise<void> {
    if (!this.#enabled) {
      this.#enabled = true;
      await this.#session.subscribe(
        ['bluetooth.requestDevicePromptUpdated'],
        [this.#contextId],
      );
    }
  }

  async waitForDevicePrompt(
    timeout: number,
    signal: AbortSignal | undefined,
  ): Promise<DeviceRequestPrompt> {
    const deferred = Deferred.create<DeviceRequestPrompt>({
      message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout}ms exceeded`,
      timeout,
    });

    const onRequestDevicePromptUpdated = (
      params: Bidi.Bluetooth.RequestDevicePromptUpdatedParameters,
    ) => {
      if (params.context === this.#contextId) {
        deferred.resolve(
          new BidiDeviceRequestPrompt(
            this.#contextId,
            params.prompt,
            this.#session,
            params.devices,
          ),
        );
        this.#session.off(
          'bluetooth.requestDevicePromptUpdated',
          onRequestDevicePromptUpdated,
        );
      }
    };
    this.#session.on(
      'bluetooth.requestDevicePromptUpdated',
      onRequestDevicePromptUpdated,
    );

    if (signal) {
      signal.addEventListener(
        'abort',
        () => {
          deferred.reject(signal.reason);
        },
        {once: true},
      );
    }

    await this.#enableIfNeeded();

    return await deferred.valueOrThrow();
  }
}

/**
 * @internal
 */
export class BidiDeviceRequestPrompt extends DeviceRequestPrompt {
  readonly #session: Session;
  #promptId: string;
  #contextId: string;

  constructor(
    contextId: string,
    promptId: string,
    session: Session,
    devices: Bidi.Bluetooth.RequestDeviceInfo[],
  ) {
    super();
    this.#session = session;
    this.#promptId = promptId;
    this.#contextId = contextId;

    this.devices.push(
      ...devices.map(d => {
        return {
          id: d.id,
          name: d.name ?? 'UNKNOWN',
        };
      }),
    );
  }

  async cancel(): Promise<void> {
    await this.#session.send('bluetooth.handleRequestDevicePrompt', {
      context: this.#contextId,
      prompt: this.#promptId,
      accept: false,
    });
  }

  async select(device: DeviceRequestPromptDevice): Promise<void> {
    await this.#session.send('bluetooth.handleRequestDevicePrompt', {
      context: this.#contextId,
      prompt: this.#promptId,
      accept: true,
      device: device.id,
    });
  }

  waitForDevice(): never {
    throw new UnsupportedOperation();
  }
}
