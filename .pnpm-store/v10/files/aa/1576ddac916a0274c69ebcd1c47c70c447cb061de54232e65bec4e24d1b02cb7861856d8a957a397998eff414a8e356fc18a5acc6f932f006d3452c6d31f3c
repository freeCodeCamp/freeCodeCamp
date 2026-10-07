/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type Protocol from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import { DeviceRequestPrompt } from '../api/DeviceRequestPrompt.js';
import type { DeviceRequestPromptDevice } from '../api/DeviceRequestPrompt.js';
import type { WaitTimeoutOptions } from '../api/Page.js';
import type { TimeoutSettings } from '../common/TimeoutSettings.js';
/**
 * @internal
 */
export declare class CdpDeviceRequestPrompt extends DeviceRequestPrompt {
    #private;
    constructor(client: CDPSession, timeoutSettings: TimeoutSettings, firstEvent: Protocol.DeviceAccess.DeviceRequestPromptedEvent);
    waitForDevice(filter: (device: DeviceRequestPromptDevice) => boolean, options?: WaitTimeoutOptions): Promise<DeviceRequestPromptDevice>;
    select(device: DeviceRequestPromptDevice): Promise<void>;
    cancel(): Promise<void>;
}
/**
 * @internal
 */
export declare class CdpDeviceRequestPromptManager {
    #private;
    constructor(client: CDPSession, timeoutSettings: TimeoutSettings);
    waitForDevicePrompt(options?: WaitTimeoutOptions): Promise<DeviceRequestPrompt>;
}
//# sourceMappingURL=DeviceRequestPrompt.d.ts.map