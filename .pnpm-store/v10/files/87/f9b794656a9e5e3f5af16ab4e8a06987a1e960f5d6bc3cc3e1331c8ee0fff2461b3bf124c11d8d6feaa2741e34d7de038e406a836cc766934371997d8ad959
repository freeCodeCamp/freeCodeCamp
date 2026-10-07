/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {Protocol} from 'devtools-protocol';
import type * as Bidi from 'webdriver-bidi-protocol';

import type {Frame} from '../api/Frame.js';
import {HTTPResponse, type RemoteAddress} from '../api/HTTPResponse.js';
import {PageEvent} from '../api/Page.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {SecurityDetails} from '../common/SecurityDetails.js';
import {invokeAtMostOnceForArguments} from '../util/decorators.js';
import {normalizeHeaderValue} from '../util/httpUtils.js';

import type {BidiHTTPRequest} from './HTTPRequest.js';

/**
 * @internal
 */
export class BidiHTTPResponse extends HTTPResponse {
  /**
   * Returns a new BidiHTTPResponse or updates the existing one if it already exists.
   */
  static from(
    data: Bidi.Network.ResponseData,
    request: BidiHTTPRequest,
    cdpSupported: boolean,
  ): BidiHTTPResponse {
    const existingResponse = request.response();
    if (existingResponse) {
      // Update existing response data with up-to-date data.
      existingResponse.#data = data;
      return existingResponse;
    }

    const response = new BidiHTTPResponse(data, request, cdpSupported);
    response.#initialize();
    return response;
  }

  #data: Bidi.Network.ResponseData;
  #request: BidiHTTPRequest;
  #securityDetails?: SecurityDetails;
  #cdpSupported = false;

  private constructor(
    data: Bidi.Network.ResponseData,
    request: BidiHTTPRequest,
    cdpSupported: boolean,
  ) {
    super();
    this.#data = data;
    this.#request = request;
    this.#cdpSupported = cdpSupported;

    // @ts-expect-error non-standard property.
    const securityDetails = data['goog:securityDetails'];
    if (cdpSupported && securityDetails) {
      this.#securityDetails = new SecurityDetails(
        securityDetails as Protocol.Network.SecurityDetails,
      );
    }
  }

  #initialize() {
    if (this.#data.fromCache) {
      this.#request._fromMemoryCache = true;
      this.#request
        .frame()
        ?.page()
        .trustedEmitter.emit(PageEvent.RequestServedFromCache, this.#request);
    }
    this.#request.frame()?.page().trustedEmitter.emit(PageEvent.Response, this);
  }

  @invokeAtMostOnceForArguments
  override remoteAddress(): RemoteAddress {
    return {
      ip: '',
      port: -1,
    };
  }

  override url(): string {
    return this.#data.url;
  }

  override status(): number {
    return this.#data.status;
  }

  override statusText(): string {
    return this.#data.statusText;
  }

  override headers(): Record<string, string> {
    const headers: Record<string, string> = {};
    for (const header of this.#data.headers) {
      // TODO: How to handle Binary Headers
      // https://w3c.github.io/webdriver-bidi/#type-network-Header
      if (header.value.type === 'string') {
        headers[header.name.toLowerCase()] = normalizeHeaderValue(
          header.value.value,
        );
      }
    }
    return headers;
  }

  override request(): BidiHTTPRequest {
    return this.#request;
  }

  override fromCache(): boolean {
    return this.#data.fromCache;
  }

  override timing(): Protocol.Network.ResourceTiming | null {
    const bidiTiming = this.#request.timing();
    return {
      requestTime: bidiTiming.requestTime,
      proxyStart: -1,
      proxyEnd: -1,
      dnsStart: bidiTiming.dnsStart,
      dnsEnd: bidiTiming.dnsEnd,
      connectStart: bidiTiming.connectStart,
      connectEnd: bidiTiming.connectEnd,
      sslStart: bidiTiming.tlsStart,
      sslEnd: -1,
      workerStart: -1,
      workerReady: -1,
      workerFetchStart: -1,
      workerRespondWithSettled: -1,
      workerRouterEvaluationStart: -1,
      workerCacheLookupStart: -1,
      sendStart: bidiTiming.requestStart,
      sendEnd: -1,
      pushStart: -1,
      pushEnd: -1,
      receiveHeadersStart: bidiTiming.responseStart,
      receiveHeadersEnd: bidiTiming.responseEnd,
    };
  }

  override frame(): Frame | null {
    return this.#request.frame();
  }

  override fromServiceWorker(): boolean {
    return false;
  }

  override securityDetails(): SecurityDetails | null {
    if (!this.#cdpSupported) {
      throw new UnsupportedOperation();
    }
    return this.#securityDetails ?? null;
  }

  async content(): Promise<Uint8Array> {
    return await this.#request.getResponseContent();
  }
}
