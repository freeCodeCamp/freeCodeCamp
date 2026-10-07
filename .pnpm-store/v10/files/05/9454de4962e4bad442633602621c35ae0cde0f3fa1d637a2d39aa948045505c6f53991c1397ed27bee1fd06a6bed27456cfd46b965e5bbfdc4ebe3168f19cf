/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Bidi from 'webdriver-bidi-protocol';
import { EventEmitter } from '../../common/EventEmitter.js';
import { disposeSymbol } from '../../util/disposable.js';
import type { BrowsingContext } from './BrowsingContext.js';
/**
 * @internal
 */
export declare class Request extends EventEmitter<{
    /** Emitted when the request is redirected. */
    redirect: Request;
    /** Emitted when the request succeeds. */
    authenticate: void;
    /** Emitted when the request succeeds. */
    success: Bidi.Network.ResponseData;
    /** Analog of WebDriver BiDi event `network.responseStarted`. Emitted when a
     * response is received. */
    response: Bidi.Network.ResponseData;
    /** Emitted when the request fails. */
    error: string;
}> {
    #private;
    static from(browsingContext: BrowsingContext, event: Bidi.Network.BeforeRequestSentParameters): Request;
    private constructor();
    get disposed(): boolean;
    get error(): string | undefined;
    get headers(): Bidi.Network.Header[];
    get id(): string;
    get initiator(): Bidi.Network.Initiator | undefined;
    get method(): string;
    get navigation(): string | undefined;
    get redirect(): Request | undefined;
    get lastRedirect(): Request | undefined;
    get response(): Bidi.Network.ResponseData | undefined;
    get url(): string;
    get isBlocked(): boolean;
    get resourceType(): string | undefined;
    get postData(): string | undefined;
    get hasPostData(): boolean;
    continueRequest({ url, method, headers, cookies, body, }: Omit<Bidi.Network.ContinueRequestParameters, 'request'>): Promise<void>;
    failRequest(): Promise<void>;
    provideResponse({ statusCode, reasonPhrase, headers, body, }: Omit<Bidi.Network.ProvideResponseParameters, 'request'>): Promise<void>;
    fetchPostData(): Promise<string | undefined>;
    getResponseContent(): Promise<Uint8Array>;
    continueWithAuth(parameters: Bidi.Network.ContinueWithAuthCredentials | Bidi.Network.ContinueWithAuthNoCredentials): Promise<void>;
    private dispose;
    [disposeSymbol](): void;
    timing(): Bidi.Network.FetchTimingInfo;
}
//# sourceMappingURL=Request.d.ts.map