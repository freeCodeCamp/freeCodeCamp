/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type * as Bidi from 'webdriver-bidi-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import type { ContinueRequestOverrides, InterceptResolutionState, ResponseForRequest } from '../api/HTTPRequest.js';
import { HTTPRequest, type ResourceType } from '../api/HTTPRequest.js';
import type { Request } from './core/Request.js';
import type { BidiFrame } from './Frame.js';
import { BidiHTTPResponse } from './HTTPResponse.js';
export declare const requests: WeakMap<Request, BidiHTTPRequest>;
/**
 * @internal
 */
export declare class BidiHTTPRequest extends HTTPRequest {
    #private;
    static from(bidiRequest: Request, frame: BidiFrame, isNetworkInterceptionEnabled: boolean, redirect?: BidiHTTPRequest): BidiHTTPRequest;
    readonly id: string;
    private constructor();
    get client(): CDPSession;
    protected canBeIntercepted(): boolean;
    interceptResolutionState(): InterceptResolutionState;
    url(): string;
    resourceType(): ResourceType;
    method(): string;
    postData(): string | undefined;
    hasPostData(): boolean;
    fetchPostData(): Promise<string | undefined>;
    headers(): Record<string, string>;
    response(): BidiHTTPResponse | null;
    failure(): {
        errorText: string;
    } | null;
    isNavigationRequest(): boolean;
    initiator(): Protocol.Network.Initiator | undefined;
    redirectChain(): BidiHTTPRequest[];
    frame(): BidiFrame;
    _continue(overrides?: ContinueRequestOverrides): Promise<void>;
    _abort(): Promise<void>;
    _respond(response: Partial<ResponseForRequest>, _priority?: number): Promise<void>;
    timing(): Bidi.Network.FetchTimingInfo;
    getResponseContent(): Promise<Uint8Array>;
}
//# sourceMappingURL=HTTPRequest.d.ts.map