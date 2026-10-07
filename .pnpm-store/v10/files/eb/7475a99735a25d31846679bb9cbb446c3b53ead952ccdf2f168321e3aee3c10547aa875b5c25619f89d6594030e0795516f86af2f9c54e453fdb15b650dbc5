/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {Event} from 'webdriver-bidi-protocol';
import type {Commands} from 'webdriver-bidi-protocol';

import type {EventEmitter} from '../../common/EventEmitter.js';

export type {Commands};

/**
 * @internal
 */
export type BidiEvents = {
  [K in Event['method']]: Extract<Event, {method: K}>['params'];
};

/**
 * @internal
 */
export interface Connection<
  Events extends BidiEvents = BidiEvents,
> extends EventEmitter<Events> {
  send<T extends keyof Commands>(
    method: T,
    params: Commands[T]['params'],
  ): Promise<{result: Commands[T]['returnType']}>;
}
