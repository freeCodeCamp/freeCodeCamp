/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Bidi from 'webdriver-bidi-protocol';

import {ProtocolError, UnsupportedOperation} from '../../common/Errors.js';
import {EventEmitter} from '../../common/EventEmitter.js';
import {inertIfDisposed} from '../../util/decorators.js';
import {DisposableStack, disposeSymbol} from '../../util/disposable.js';
import {stringToTypedArray} from '../../util/encoding.js';

import type {BrowsingContext} from './BrowsingContext.js';

/**
 * @internal
 */
export class Request extends EventEmitter<{
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
  static from(
    browsingContext: BrowsingContext,
    event: Bidi.Network.BeforeRequestSentParameters,
  ): Request {
    const request = new Request(browsingContext, event);
    request.#initialize();
    return request;
  }

  #responseContentPromise: Promise<Uint8Array<ArrayBufferLike>> | null = null;
  #requestBodyPromise: Promise<string> | null = null;
  #error?: string;
  #redirect?: Request;
  #response?: Bidi.Network.ResponseData;
  readonly #browsingContext: BrowsingContext;
  readonly #disposables = new DisposableStack();
  readonly #event: Bidi.Network.BeforeRequestSentParameters;

  private constructor(
    browsingContext: BrowsingContext,
    event: Bidi.Network.BeforeRequestSentParameters,
  ) {
    super();

    this.#browsingContext = browsingContext;
    this.#event = event;
  }

  #initialize() {
    const browsingContextEmitter = this.#disposables.use(
      new EventEmitter(this.#browsingContext),
    );
    browsingContextEmitter.once('closed', reason => {
      this.#error = reason;
      this.emit('error', reason);
      this.dispose();
    });

    const sessionEmitter = this.#disposables.use(
      new EventEmitter(this.#session),
    );
    sessionEmitter.on('network.beforeRequestSent', event => {
      if (
        event.context !== this.#browsingContext.id ||
        event.request.request !== this.id
      ) {
        return;
      }
      // This is a workaround to detect if a beforeRequestSent is for a request
      // sent after continueWithAuth. Currently, only emitted in Firefox.
      const previousRequestHasAuth = this.#event.request.headers.find(
        header => {
          return header.name.toLowerCase() === 'authorization';
        },
      );
      const newRequestHasAuth = event.request.headers.find(header => {
        return header.name.toLowerCase() === 'authorization';
      });
      const isAfterAuth = newRequestHasAuth && !previousRequestHasAuth;
      if (
        event.redirectCount !== this.#event.redirectCount + 1 &&
        !isAfterAuth
      ) {
        return;
      }
      this.#redirect = Request.from(this.#browsingContext, event);
      this.emit('redirect', this.#redirect);
      this.dispose();
    });
    sessionEmitter.on('network.authRequired', event => {
      if (
        event.context !== this.#browsingContext.id ||
        event.request.request !== this.id ||
        // Don't try to authenticate for events that are not blocked
        !event.isBlocked
      ) {
        return;
      }
      this.emit('authenticate', undefined);
    });
    sessionEmitter.on('network.fetchError', event => {
      if (
        event.context !== this.#browsingContext.id ||
        event.request.request !== this.id ||
        this.#event.redirectCount !== event.redirectCount
      ) {
        return;
      }
      this.#error = event.errorText;
      this.emit('error', this.#error);
      this.dispose();
    });
    sessionEmitter.on('network.responseStarted', event => {
      if (
        event.context !== this.#browsingContext.id ||
        event.request.request !== this.id ||
        this.#event.redirectCount !== event.redirectCount
      ) {
        return;
      }
      this.#response = event.response;
      this.#event.request.timings = event.request.timings;
      this.emit('response', this.#response);
    });
    sessionEmitter.on('network.responseCompleted', event => {
      if (
        event.context !== this.#browsingContext.id ||
        event.request.request !== this.id ||
        this.#event.redirectCount !== event.redirectCount
      ) {
        return;
      }
      this.#response = event.response;
      this.#event.request.timings = event.request.timings;
      this.emit('success', this.#response);
      // In case this is a redirect.
      if (this.#response.status >= 300 && this.#response.status < 400) {
        return;
      }
      this.dispose();
    });
  }

  get #session() {
    return this.#browsingContext.userContext.browser.session;
  }
  get disposed(): boolean {
    return this.#disposables.disposed;
  }
  get error(): string | undefined {
    return this.#error;
  }
  get headers(): Bidi.Network.Header[] {
    return this.#event.request.headers;
  }
  get id(): string {
    return this.#event.request.request;
  }
  get initiator(): Bidi.Network.Initiator | undefined {
    return {
      ...this.#event.initiator,
      // Initiator URL is not specified in BiDi.
      // @ts-expect-error non-standard property.
      url: this.#event.request['goog:resourceInitiator']?.url,
      // @ts-expect-error non-standard property.
      stack: this.#event.request['goog:resourceInitiator']?.stack,
    };
  }
  get method(): string {
    return this.#event.request.method;
  }
  get navigation(): string | undefined {
    return this.#event.navigation ?? undefined;
  }
  get redirect(): Request | undefined {
    return this.#redirect;
  }
  get lastRedirect(): Request | undefined {
    let redirect = this.#redirect;
    while (redirect) {
      if (redirect && !redirect.#redirect) {
        return redirect;
      }
      redirect = redirect.#redirect;
    }
    return redirect;
  }
  get response(): Bidi.Network.ResponseData | undefined {
    return this.#response;
  }
  get url(): string {
    return this.#event.request.url;
  }
  get isBlocked(): boolean {
    return this.#event.isBlocked;
  }

  get resourceType(): string | undefined {
    // @ts-expect-error non-standard attribute.
    return this.#event.request['goog:resourceType'] ?? undefined;
  }

  get postData(): string | undefined {
    // @ts-expect-error non-standard attribute.
    return this.#event.request['goog:postData'] ?? undefined;
  }

  get hasPostData(): boolean {
    return (this.#event.request.bodySize ?? 0) > 0;
  }

  async continueRequest({
    url,
    method,
    headers,
    cookies,
    body,
  }: Omit<Bidi.Network.ContinueRequestParameters, 'request'>): Promise<void> {
    await this.#session.send('network.continueRequest', {
      request: this.id,
      url,
      method,
      headers,
      body,
      cookies,
    });
  }

  async failRequest(): Promise<void> {
    await this.#session.send('network.failRequest', {
      request: this.id,
    });
  }

  async provideResponse({
    statusCode,
    reasonPhrase,
    headers,
    body,
  }: Omit<Bidi.Network.ProvideResponseParameters, 'request'>): Promise<void> {
    await this.#session.send('network.provideResponse', {
      request: this.id,
      statusCode,
      reasonPhrase,
      headers,
      body,
    });
  }

  async fetchPostData(): Promise<string | undefined> {
    if (!this.hasPostData) {
      return undefined;
    }
    if (!this.#requestBodyPromise) {
      this.#requestBodyPromise = (async () => {
        const data = await this.#session.send('network.getData', {
          dataType: Bidi.Network.DataType.Request,
          request: this.id,
        });
        if (data.result.bytes.type === 'string') {
          return data.result.bytes.value;
        }

        // TODO: support base64 response.
        throw new UnsupportedOperation(
          `Collected request body data of type ${data.result.bytes.type} is not supported`,
        );
      })();
    }
    return await this.#requestBodyPromise;
  }

  async getResponseContent(): Promise<Uint8Array> {
    if (!this.#responseContentPromise) {
      this.#responseContentPromise = (async () => {
        try {
          const data = await this.#session.send('network.getData', {
            dataType: Bidi.Network.DataType.Response,
            request: this.id,
          });

          return stringToTypedArray(
            data.result.bytes.value,
            data.result.bytes.type === 'base64',
          );
        } catch (error) {
          if (
            error instanceof ProtocolError &&
            error.originalMessage.includes(
              'No resource with given identifier found',
            )
          ) {
            throw new ProtocolError(
              'Could not load response body for this request. This might happen if the request is a preflight request.',
            );
          }

          throw error;
        }
      })();
    }
    return await this.#responseContentPromise;
  }

  async continueWithAuth(
    parameters:
      | Bidi.Network.ContinueWithAuthCredentials
      | Bidi.Network.ContinueWithAuthNoCredentials,
  ): Promise<void> {
    if (parameters.action === 'provideCredentials') {
      await this.#session.send('network.continueWithAuth', {
        request: this.id,
        action: parameters.action,
        credentials: parameters.credentials,
      });
    } else {
      await this.#session.send('network.continueWithAuth', {
        request: this.id,
        action: parameters.action,
      });
    }
  }

  @inertIfDisposed
  private dispose(): void {
    this[disposeSymbol]();
  }

  override [disposeSymbol](): void {
    this.#disposables.dispose();
    super[disposeSymbol]();
  }

  timing(): Bidi.Network.FetchTimingInfo {
    return this.#event.request.timings;
  }
}
