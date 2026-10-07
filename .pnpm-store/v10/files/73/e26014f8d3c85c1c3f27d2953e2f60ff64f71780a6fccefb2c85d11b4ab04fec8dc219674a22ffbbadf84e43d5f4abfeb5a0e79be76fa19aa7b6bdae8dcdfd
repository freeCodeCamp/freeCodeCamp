/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type * as Bidi from 'webdriver-bidi-protocol';
import { DeviceRequestPrompt, type DeviceRequestPromptDevice } from '../api/DeviceRequestPrompt.js';
import type { Session } from './core/Session.js';
/**
 * @internal
 */
export declare class BidiDeviceRequestPromptManager {
    #private;
    constructor(contextId: string, session: Session);
    waitForDevicePrompt(timeout: number, signal: AbortSignal | undefined): Promise<DeviceRequestPrompt>;
}
/**
 * @internal
 */
export declare class BidiDeviceRequestPrompt extends DeviceRequestPrompt {
    #private;
    constructor(contextId: string, promptId: string, session: Session, devices: Bidi.Bluetooth.RequestDeviceInfo[]);
    cancel(): Promise<void>;
    select(device: DeviceRequestPromptDevice): Promise<void>;
    waitForDevice(): never;
}
//# sourceMappingURL=DeviceRequestPrompt.d.ts.map