/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { HTTPRequest } from '../api/HTTPRequest.js';
import type { HTTPResponse } from '../api/HTTPResponse.js';
import type { EventType } from './EventEmitter.js';
/**
 * We use symbols to prevent any external parties listening to these events.
 * They are internal to Puppeteer.
 *
 * @internal
 */
export declare namespace NetworkManagerEvent {
    const Request: unique symbol;
    const RequestServedFromCache: unique symbol;
    const Response: unique symbol;
    const RequestFailed: unique symbol;
    const RequestFinished: unique symbol;
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
//# sourceMappingURL=NetworkManagerEvents.d.ts.map