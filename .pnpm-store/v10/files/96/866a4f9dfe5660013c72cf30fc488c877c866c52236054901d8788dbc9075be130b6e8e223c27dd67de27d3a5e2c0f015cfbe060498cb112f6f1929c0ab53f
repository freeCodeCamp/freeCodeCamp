/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Protocol } from 'devtools-protocol';
import type { CDPSession } from '../api/CDPSession.js';
import type { Frame } from '../api/Frame.js';
import { type ContinueRequestOverrides, HTTPRequest, type ResourceType, type ResponseForRequest } from '../api/HTTPRequest.js';
import type { CdpHTTPResponse } from './HTTPResponse.js';
/**
 * @internal
 */
export declare class CdpHTTPRequest extends HTTPRequest {
    #private;
    id: string;
    _redirectChain: CdpHTTPRequest[];
    _response: CdpHTTPResponse | null;
    get client(): CDPSession;
    set client(newClient: CDPSession);
    constructor(client: CDPSession, frame: Frame | null, interceptionId: string | undefined, allowInterception: boolean, data: {
        /**
         * Request identifier.
         */
        requestId: Protocol.Network.RequestId;
        /**
         * Loader identifier. Empty string if the request is fetched from worker.
         */
        loaderId?: Protocol.Network.LoaderId;
        /**
         * URL of the document this request is loaded for.
         */
        documentURL?: string;
        /**
         * Request data.
         */
        request: Protocol.Network.Request;
        /**
         * Request initiator.
         */
        initiator?: Protocol.Network.Initiator;
        /**
         * Type of this resource.
         */
        type?: Protocol.Network.ResourceType;
    }, redirectChain: CdpHTTPRequest[]);
    updateHeaders(headers: Protocol.Network.Headers): void;
    url(): string;
    resourceType(): ResourceType;
    method(): string;
    postData(): string | undefined;
    hasPostData(): boolean;
    fetchPostData(): Promise<string | undefined>;
    headers(): Record<string, string>;
    response(): CdpHTTPResponse | null;
    frame(): Frame | null;
    isNavigationRequest(): boolean;
    initiator(): Protocol.Network.Initiator | undefined;
    redirectChain(): CdpHTTPRequest[];
    failure(): {
        errorText: string;
    } | null;
    protected canBeIntercepted(): boolean;
    /**
     * @internal
     */
    _continue(overrides?: ContinueRequestOverrides): Promise<void>;
    _respond(response: Partial<ResponseForRequest>): Promise<void>;
    _abort(errorReason: Protocol.Network.ErrorReason | null): Promise<void>;
}
//# sourceMappingURL=HTTPRequest.d.ts.map