/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {Protocol} from 'devtools-protocol';

import type {CDPSession} from '../api/CDPSession.js';
import type {Frame} from '../api/Frame.js';
import {
  type ContinueRequestOverrides,
  headersArray,
  HTTPRequest,
  type ResourceType,
  type ResponseForRequest,
  STATUS_TEXTS,
  handleError,
} from '../api/HTTPRequest.js';
import {debugError} from '../common/util.js';
import {
  mergeUint8Arrays,
  stringToBase64,
  stringToTypedArray,
} from '../util/encoding.js';

import type {CdpHTTPResponse} from './HTTPResponse.js';

/**
 * @internal
 */
export class CdpHTTPRequest extends HTTPRequest {
  override id: string;
  declare _redirectChain: CdpHTTPRequest[];
  declare _response: CdpHTTPResponse | null;

  #client: CDPSession;
  #isNavigationRequest: boolean;

  #url: string;
  #resourceType: ResourceType;

  #method: string;
  #hasPostData = false;
  #postData?: string;
  #headers: Record<string, string> = {};
  #frame: Frame | null;
  #initiator?: Protocol.Network.Initiator;

  override get client(): CDPSession {
    return this.#client;
  }

  override set client(newClient: CDPSession) {
    this.#client = newClient;
  }

  constructor(
    client: CDPSession,
    frame: Frame | null,
    interceptionId: string | undefined,
    allowInterception: boolean,
    data: {
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
    },
    redirectChain: CdpHTTPRequest[],
  ) {
    super();
    this.#client = client;
    this.id = data.requestId;
    this.#isNavigationRequest =
      data.requestId === data.loaderId && data.type === 'Document';
    this._interceptionId = interceptionId;
    this.#url = data.request.url + (data.request.urlFragment ?? '');
    this.#resourceType = (data.type || 'other').toLowerCase() as ResourceType;
    this.#method = data.request.method;
    if (
      data.request.postDataEntries &&
      data.request.postDataEntries.length > 0
    ) {
      this.#postData = new TextDecoder().decode(
        mergeUint8Arrays(
          data.request.postDataEntries
            .map(entry => {
              return entry.bytes ? stringToTypedArray(entry.bytes, true) : null;
            })
            .filter((entry): entry is Uint8Array => {
              return entry !== null;
            }),
        ),
      );
    } else {
      this.#postData = data.request.postData;
    }
    this.#hasPostData = data.request.hasPostData ?? false;
    this.#frame = frame;
    this._redirectChain = redirectChain;
    this.#initiator = data.initiator;

    this.interception.enabled = allowInterception;

    this.updateHeaders(data.request.headers);
  }

  updateHeaders(headers: Protocol.Network.Headers): void {
    for (const [key, value] of Object.entries(headers)) {
      this.#headers[key.toLowerCase()] = value;
    }
  }

  override url(): string {
    return this.#url;
  }

  override resourceType(): ResourceType {
    return this.#resourceType;
  }

  override method(): string {
    return this.#method;
  }

  override postData(): string | undefined {
    return this.#postData;
  }

  override hasPostData(): boolean {
    return this.#hasPostData;
  }

  override async fetchPostData(): Promise<string | undefined> {
    try {
      const result = await this.#client.send('Network.getRequestPostData', {
        requestId: this.id,
      });
      return result.postData;
    } catch (err) {
      debugError(err);
      return;
    }
  }

  override headers(): Record<string, string> {
    // Callers should not be allowed to mutate internal structure.
    return structuredClone(this.#headers);
  }

  override response(): CdpHTTPResponse | null {
    return this._response;
  }

  override frame(): Frame | null {
    return this.#frame;
  }

  override isNavigationRequest(): boolean {
    return this.#isNavigationRequest;
  }

  override initiator(): Protocol.Network.Initiator | undefined {
    return this.#initiator;
  }

  override redirectChain(): CdpHTTPRequest[] {
    return this._redirectChain.slice();
  }

  override failure(): {errorText: string} | null {
    if (!this._failureText) {
      return null;
    }
    return {
      errorText: this._failureText,
    };
  }

  protected canBeIntercepted(): boolean {
    return !this.url().startsWith('data:') && !this._fromMemoryCache;
  }

  /**
   * @internal
   */
  async _continue(overrides: ContinueRequestOverrides = {}): Promise<void> {
    const {url, method, postData, headers} = overrides;
    this.interception.handled = true;

    const postDataBinaryBase64 = postData
      ? stringToBase64(postData)
      : undefined;

    if (this._interceptionId === undefined) {
      throw new Error(
        'HTTPRequest is missing _interceptionId needed for Fetch.continueRequest',
      );
    }
    await this.#client
      .send('Fetch.continueRequest', {
        requestId: this._interceptionId,
        url,
        method,
        postData: postDataBinaryBase64,
        headers: headers ? headersArray(headers) : undefined,
      })
      .catch(error => {
        this.interception.handled = false;
        return handleError(error);
      });
  }

  async _respond(response: Partial<ResponseForRequest>): Promise<void> {
    this.interception.handled = true;

    let parsedBody:
      | {
          contentLength: number;
          base64: string;
        }
      | undefined;
    if (response.body) {
      parsedBody = HTTPRequest.getResponse(response.body);
    }

    const responseHeaders: Record<string, string | string[]> = {};
    if (response.headers) {
      for (const header of Object.keys(response.headers)) {
        const value = response.headers[header];

        responseHeaders[header.toLowerCase()] = Array.isArray(value)
          ? value.map(item => {
              return String(item);
            })
          : String(value);
      }
    }
    if (response.contentType) {
      responseHeaders['content-type'] = response.contentType;
    }
    if (parsedBody?.contentLength && !('content-length' in responseHeaders)) {
      responseHeaders['content-length'] = String(parsedBody.contentLength);
    }

    const status = response.status || 200;
    if (this._interceptionId === undefined) {
      throw new Error(
        'HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest',
      );
    }
    await this.#client
      .send('Fetch.fulfillRequest', {
        requestId: this._interceptionId,
        responseCode: status,
        responsePhrase: STATUS_TEXTS[status],
        responseHeaders: headersArray(responseHeaders),
        body: parsedBody?.base64,
      })
      .catch(error => {
        this.interception.handled = false;
        return handleError(error);
      });
  }

  async _abort(
    errorReason: Protocol.Network.ErrorReason | null,
  ): Promise<void> {
    this.interception.handled = true;
    if (this._interceptionId === undefined) {
      throw new Error(
        'HTTPRequest is missing _interceptionId needed for Fetch.failRequest',
      );
    }
    await this.#client
      .send('Fetch.failRequest', {
        requestId: this._interceptionId,
        errorReason: errorReason || 'Failed',
      })
      .catch(handleError);
  }
}
