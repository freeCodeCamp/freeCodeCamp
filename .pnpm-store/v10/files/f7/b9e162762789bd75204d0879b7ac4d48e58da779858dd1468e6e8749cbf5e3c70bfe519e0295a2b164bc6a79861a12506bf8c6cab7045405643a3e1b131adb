/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {HTTPRequest} from '../api/HTTPRequest.js';
import type {HTTPResponse} from '../api/HTTPResponse.js';

import type {EventType} from './EventEmitter.js';

/**
 * We use symbols to prevent any external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace NetworkManagerEvent {
  export const Request = Symbol('NetworkManager.Request');
  export const RequestServedFromCache = Symbol(
    'NetworkManager.RequestServedFromCache',
  );
  export const Response = Symbol('NetworkManager.Response');
  export const RequestFailed = Symbol('NetworkManager.RequestFailed');
  export const RequestFinished = Symbol('NetworkManager.RequestFinished');
}

/**
 * @internal
 */
export interface NetworkManagerEvents extends Record<EventType, unknown> {
  [NetworkManagerEvent.Request]: HTTPRequest;
  [NetworkManagerEvent.RequestServedFromCache]: HTTPRequest;
  [NetworkManagerEvent.Response]: HTTPResponse;
  [NetworkManagerEvent.RequestFailed]: HTTPRequest;
  [NetworkManagerEvent.RequestFinished]: HTTPRequest;
}
