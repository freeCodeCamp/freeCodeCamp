/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {Protocol} from 'devtools-protocol';

import type {Frame} from '../api/Frame.js';
import {HTTPResponse, type RemoteAddress} from '../api/HTTPResponse.js';
import {ProtocolError} from '../common/Errors.js';
import {SecurityDetails} from '../common/SecurityDetails.js';
import {Deferred} from '../util/Deferred.js';
import {stringToTypedArray} from '../util/encoding.js';
import {normalizeHeaderValue} from '../util/httpUtils.js';

import type {CdpHTTPRequest} from './HTTPRequest.js';

/**
 * @internal
 */
export class CdpHTTPResponse extends HTTPResponse {
  #request: CdpHTTPRequest;
  #contentPromise: Promise<Uint8Array> | null = null;
  #bodyLoadedDeferred = Deferred.create<void, Error>();
  #remoteAddress: RemoteAddress;
  #status: number;
  #statusText: string;
  #fromDiskCache: boolean;
  #fromServiceWorker: boolean;
  #headers: Record<string, string> = {};
  #securityDetails: SecurityDetails | null;
  #timing: Protocol.Network.ResourceTiming | null;

  constructor(
    request: CdpHTTPRequest,
    responsePayload: Protocol.Network.Response,
    extraInfo: Protocol.Network.ResponseReceivedExtraInfoEvent | null,
  ) {
    super();
    this.#request = request;

    this.#remoteAddress = {
      ip: responsePayload.remoteIPAddress,
      port: responsePayload.remotePort,
    };
    this.#statusText =
      this.#parseStatusTextFromExtraInfo(extraInfo) ||
      responsePayload.statusText;
    this.#fromDiskCache = !!responsePayload.fromDiskCache;
    this.#fromServiceWorker = !!responsePayload.fromServiceWorker;

    this.#status = extraInfo ? extraInfo.statusCode : responsePayload.status;
    const headers = extraInfo ? extraInfo.headers : responsePayload.headers;
    for (const [key, value] of Object.entries(headers)) {
      this.#headers[key.toLowerCase()] = normalizeHeaderValue(value);
    }

    this.#securityDetails = responsePayload.securityDetails
      ? new SecurityDetails(responsePayload.securityDetails)
      : null;
    this.#timing = responsePayload.timing || null;
  }

  #parseStatusTextFromExtraInfo(
    extraInfo: Protocol.Network.ResponseReceivedExtraInfoEvent | null,
  ): string | undefined {
    if (!extraInfo || !extraInfo.headersText) {
      return;
    }
    const firstLine = extraInfo.headersText.split('\r', 1)[0];
    if (!firstLine || firstLine.length > 1_000) {
      return;
    }
    const match = firstLine.match(/[^ ]* [^ ]* (.*)/);
    if (!match) {
      return;
    }
    const statusText = match[1];
    if (!statusText) {
      return;
    }
    return statusText;
  }

  _resolveBody(err?: Error): void {
    if (err) {
      return this.#bodyLoadedDeferred.reject(err);
    }
    return this.#bodyLoadedDeferred.resolve();
  }

  override remoteAddress(): RemoteAddress {
    return this.#remoteAddress;
  }

  override url(): string {
    return this.#request.url();
  }

  override status(): number {
    return this.#status;
  }

  override statusText(): string {
    return this.#statusText;
  }

  override headers(): Record<string, string> {
    return this.#headers;
  }

  override securityDetails(): SecurityDetails | null {
    return this.#securityDetails;
  }

  override timing(): Protocol.Network.ResourceTiming | null {
    return this.#timing;
  }

  override content(): Promise<Uint8Array> {
    if (!this.#contentPromise) {
      this.#contentPromise = this.#bodyLoadedDeferred
        .valueOrThrow()
        .then(async () => {
          try {
            // Use CDPSession from corresponding request to retrieve body, as it's client
            // might have been updated (e.g. for an adopted OOPIF).
            const response = await this.#request.client.send(
              'Network.getResponseBody',
              {
                requestId: this.#request.id,
              },
            );

            return stringToTypedArray(response.body, response.base64Encoded);
          } catch (error) {
            if (
              error instanceof ProtocolError &&
              error.originalMessage ===
                'No resource with given identifier found'
            ) {
              throw new ProtocolError(
                'Could not load response body for this request. This might happen if the request is a preflight request.',
              );
            }

            throw error;
          }
        });
    }
    return this.#contentPromise;
  }

  override request(): CdpHTTPRequest {
    return this.#request;
  }

  override fromCache(): boolean {
    return this.#fromDiskCache || this.#request._fromMemoryCache;
  }

  override fromServiceWorker(): boolean {
    return this.#fromServiceWorker;
  }

  override frame(): Frame | null {
    return this.#request.frame();
  }
}
