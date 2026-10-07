/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { Frame } from '../api/Frame.js';
import { HTTPResponse, type RemoteAddress } from '../api/HTTPResponse.js';
import { SecurityDetails } from '../common/SecurityDetails.js';
import type { CdpHTTPRequest } from './HTTPRequest.js';
/**
 * @internal
 */
export declare class CdpHTTPResponse extends HTTPResponse {
    #private;
    constructor(request: CdpHTTPRequest, responsePayload: Protocol.Network.Response, extraInfo: Protocol.Network.ResponseReceivedExtraInfoEvent | null);
    _resolveBody(err?: Error): void;
    remoteAddress(): RemoteAddress;
    url(): string;
    status(): number;
    statusText(): string;
    headers(): Record<string, string>;
    securityDetails(): SecurityDetails | null;
    timing(): Protocol.Network.ResourceTiming | null;
    content(): Promise<Uint8Array>;
    request(): CdpHTTPRequest;
    fromCache(): boolean;
    fromServiceWorker(): boolean;
    frame(): Frame | null;
}
//# sourceMappingURL=HTTPResponse.d.ts.map