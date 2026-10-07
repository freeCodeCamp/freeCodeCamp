/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type Protocol from 'devtools-protocol';

import type {EventType} from '../common/EventEmitter.js';

import type {CdpFrame} from './Frame.js';
import type {IsolatedWorld} from './IsolatedWorld.js';

/**
 * We use symbols to prevent external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace FrameManagerEvent {
  export const FrameAttached = Symbol('FrameManager.FrameAttached');
  export const FrameNavigated = Symbol('FrameManager.FrameNavigated');
  export const FrameDetached = Symbol('FrameManager.FrameDetached');
  export const FrameSwapped = Symbol('FrameManager.FrameSwapped');
  export const LifecycleEvent = Symbol('FrameManager.LifecycleEvent');
  export const FrameNavigatedWithinDocument = Symbol(
    'FrameManager.FrameNavigatedWithinDocument',
  );
  export const ConsoleApiCalled = Symbol('FrameManager.ConsoleApiCalled');
  export const BindingCalled = Symbol('FrameManager.BindingCalled');
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
  // Emitted when a new console message is logged.
  [FrameManagerEvent.ConsoleApiCalled]: [
    IsolatedWorld,
    Protocol.Runtime.ConsoleAPICalledEvent,
  ];
  [FrameManagerEvent.BindingCalled]: [
    IsolatedWorld,
    Protocol.Runtime.BindingCalledEvent,
  ];
}
