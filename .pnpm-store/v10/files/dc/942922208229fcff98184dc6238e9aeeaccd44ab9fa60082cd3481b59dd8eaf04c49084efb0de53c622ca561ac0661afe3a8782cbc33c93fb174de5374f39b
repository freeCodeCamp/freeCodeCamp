/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Protocol} from 'devtools-protocol';

import type {EventType} from '../common/EventEmitter.js';

import type {CdpTarget} from './Target.js';

/**
 * @internal
 */
export const enum TargetManagerEvent {
  TargetDiscovered = 'targetDiscovered',
  TargetAvailable = 'targetAvailable',
  TargetGone = 'targetGone',
  /**
   * Emitted after a target has been initialized and whenever its URL changes.
   */
  TargetChanged = 'targetChanged',
}

/**
 * @internal
 */
export interface TargetManagerEvents extends Record<EventType, unknown> {
  [TargetManagerEvent.TargetAvailable]: CdpTarget;
  [TargetManagerEvent.TargetDiscovered]: Protocol.Target.TargetInfo;
  [TargetManagerEvent.TargetGone]: CdpTarget;
  [TargetManagerEvent.TargetChanged]: {
    target: CdpTarget;
    wasInitialized: true;
    previousURL: string;
  };
}
