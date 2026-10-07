/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type * as Bidi from 'webdriver-bidi-protocol';
import type { Frame } from '../api/Frame.js';
import { HTTPResponse, type RemoteAddress } from '../api/HTTPResponse.js';
import { SecurityDetails } from '../common/SecurityDetails.js';
import type { BidiHTTPRequest } from './HTTPRequest.js';
/**
 * @internal
 */
export declare class BidiHTTPResponse extends HTTPResponse {
    #private;
    /**
     * Returns a new BidiHTTPResponse or updates the existing one if it already exists.
     */
    static from(data: Bidi.Network.ResponseData, request: BidiHTTPRequest, cdpSupported: boolean): BidiHTTPResponse;
    private constructor();
    remoteAddress(): RemoteAddress;
    url(): string;
    status(): number;
    statusText(): string;
    headers(): Record<string, string>;
    request(): BidiHTTPRequest;
    fromCache(): boolean;
    timing(): Protocol.Network.ResourceTiming | null;
    frame(): Frame | null;
    fromServiceWorker(): boolean;
    securityDetails(): SecurityDetails | null;
    content(): Promise<Uint8Array>;
}
//# sourceMappingURL=HTTPResponse.d.ts.map