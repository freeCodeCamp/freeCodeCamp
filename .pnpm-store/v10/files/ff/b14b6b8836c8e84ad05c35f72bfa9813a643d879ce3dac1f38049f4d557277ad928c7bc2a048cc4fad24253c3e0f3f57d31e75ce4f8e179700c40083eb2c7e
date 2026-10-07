/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type Protocol from 'devtools-protocol';
import type { EventType } from '../common/EventEmitter.js';
import type { CdpFrame } from './Frame.js';
import type { IsolatedWorld } from './IsolatedWorld.js';
/**
 * We use symbols to prevent external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
export declare namespace FrameManagerEvent {
    const FrameAttached: unique symbol;
    const FrameNavigated: unique symbol;
    const FrameDetached: unique symbol;
    const FrameSwapped: unique symbol;
    const LifecycleEvent: unique symbol;
    const FrameNavigatedWithinDocument: unique symbol;
    const ConsoleApiCalled: unique symbol;
    const BindingCalled: unique symbol;
}
/**
 * @internal
 */
export interface FrameManagerEvents extends Record<EventType, unknown> {
    [FrameManagerEvent.FrameAttached]: CdpFrame;
    [FrameManagerEvent.FrameNavigated]: CdpFrame;
    [FrameManagerEvent.FrameDetached]: CdpFrame;
    [FrameManagerEvent.FrameSwapped]: CdpFrame;
    [FrameManagerEvent.LifecycleEvent]: CdpFrame;
    [FrameManagerEvent.FrameNavigatedWithinDocument]: CdpFrame;
    [FrameManagerEvent.ConsoleApiCalled]: [
        IsolatedWorld,
        Protocol.Runtime.ConsoleAPICalledEvent
    ];
    [FrameManagerEvent.BindingCalled]: [
        IsolatedWorld,
        Protocol.Runtime.BindingCalledEvent
    ];
}
//# sourceMappingURL=FrameManagerEvents.d.ts.map