/**
 * Copyright 2023 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { Protocol } from 'devtools-protocol';
import { Network, type EmptyResult } from '../../../protocol/protocol.js';
import type { ContextConfigStorage } from '../browser/ContextConfigStorage.js';
import type { UserContextStorage } from '../browser/UserContextStorage.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
import type { NetworkStorage } from './NetworkStorage.js';
import { type ParsedUrlPattern } from './NetworkUtils.js';
/** Dispatches Network module commands. */
export declare class NetworkProcessor {
    #private;
    constructor(browsingContextStorage: BrowsingContextStorage, networkStorage: NetworkStorage, userContextStorage: UserContextStorage, contextConfigStorage: ContextConfigStorage);
    addIntercept(params: Network.AddInterceptParameters): Promise<Network.AddInterceptResult>;
    continueRequest(params: Network.ContinueRequestParameters): Promise<EmptyResult>;
    continueResponse(params: Network.ContinueResponseParameters): Promise<EmptyResult>;
    continueWithAuth(params: Network.ContinueWithAuthParameters): Promise<EmptyResult>;
    failRequest({ request: networkId, }: Network.FailRequestParameters): Promise<EmptyResult>;
    provideResponse(params: Network.ProvideResponseParameters): Promise<EmptyResult>;
    removeIntercept(params: Network.RemoveInterceptParameters): Promise<EmptyResult>;
    setCacheBehavior(params: Network.SetCacheBehaviorParameters): Promise<EmptyResult>;
    /**
     * Validate https://fetch.spec.whatwg.org/#header-value
     */
    static validateHeaders(headers: Network.Header[]): void;
    static isMethodValid(method: string): boolean;
    /**
     * Attempts to parse the given url.
     * Throws an InvalidArgumentException if the url is invalid.
     */
    static parseUrlString(url: string): URL;
    static parseUrlPatterns(urlPatterns: Network.UrlPattern[]): ParsedUrlPattern[];
    static wrapInterceptionError(error: any): any;
    addDataCollector(params: Network.AddDataCollectorParameters): Promise<Network.AddDataCollectorResult>;
    getData(params: Network.GetDataParameters): Promise<Network.GetDataResult>;
    removeDataCollector(params: Network.RemoveDataCollectorParameters): Promise<EmptyResult>;
    disownData(params: Network.DisownDataParameters): EmptyResult;
    setExtraHeaders(params: Network.SetExtraHeadersParameters): Promise<EmptyResult>;
}
export declare function parseBiDiHeaders(headers: Network.Header[]): Protocol.Network.Headers;
