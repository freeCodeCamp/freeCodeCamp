import http from 'node:http'
import https from 'node:https'
import { Interceptor } from '../../Interceptor'
import type { HttpRequestEventMap } from '../../glossary'
import {
  kRequestId,
  MockHttpSocketRequestCallback,
  MockHttpSocketResponseCallback,
} from './MockHttpSocket'
import { MockAgent, MockHttpsAgent } from './agents'
import { RequestController } from '../../RequestController'
import { emitAsync } from '../../utils/emitAsync'
import { normalizeClientRequestArgs } from './utils/normalizeClientRequestArgs'
import { handleRequest } from '../../utils/handleRequest'
import {
  recordRawFetchHeaders,
  restoreHeadersPrototype,
} from './utils/recordRawHeaders'

export class ClientRequestInterceptor extends Interceptor<HttpRequestEventMap> {
  static symbol = Symbol('client-request-interceptor')

  constructor() {
    super(ClientRequestInterceptor.symbol)
  }

  protected setup(): void {
    const {
      ClientRequest: OriginalClientRequest,
      get: originalGet,
      request: originalRequest,
    } = http
    const { get: originalHttpsGet, request: originalHttpsRequest } = https

    const onRequest = this.onRequest.bind(this)
    const onResponse = this.onResponse.bind(this)

    // Support requests performed via the `ClientRequest` constructor directly.
    http.ClientRequest = new Proxy(http.ClientRequest, {
      construct: (target, args: Parameters<typeof http.request>) => {
        const [url, options, callback] = normalizeClientRequestArgs(
          'http:',
          args
        )

        // Create a mock agent instance appropriate for the request protocol.
        const Agent = options.protocol === 'https:' ? MockHttpsAgent : MockAgent
        const mockAgent = new Agent({
          customAgent: options.agent,
          onRequest,
          onResponse,
        })
        options.agent = mockAgent

        return Reflect.construct(target, [url, options, callback])
      },
    })

    http.request = new Proxy(http.request, {
      apply: (target, thisArg, args: Parameters<typeof http.request>) => {
        const [url, options, callback] = normalizeClientRequestArgs(
          'http:',
          args
        )
        const mockAgent = new MockAgent({
          customAgent: options.agent,
          onRequest,
          onResponse,
        })
        options.agent = mockAgent

        return Reflect.apply(target, thisArg, [url, options, callback])
      },
    })

    http.get = new Proxy(http.get, {
      apply: (target, thisArg, args: Parameters<typeof http.get>) => {
        const [url, options, callback] = normalizeClientRequestArgs(
          'http:',
          args
        )

        const mockAgent = new MockAgent({
          customAgent: options.agent,
          onRequest,
          onResponse,
        })
        options.agent = mockAgent

        return Reflect.apply(target, thisArg, [url, options, callback])
      },
    })

    //
    // HTTPS.
    //

    https.request = new Proxy(https.request, {
      apply: (target, thisArg, args: Parameters<typeof https.request>) => {
        const [url, options, callback] = normalizeClientRequestArgs(
          'https:',
          args
        )

        const mockAgent = new MockHttpsAgent({
          customAgent: options.agent,
          onRequest,
          onResponse,
        })
        options.agent = mockAgent

        return Reflect.apply(target, thisArg, [url, options, callback])
      },
    })

    https.get = new Proxy(https.get, {
      apply: (target, thisArg, args: Parameters<typeof https.get>) => {
        const [url, options, callback] = normalizeClientRequestArgs(
          'https:',
          args
        )

        const mockAgent = new MockHttpsAgent({
          customAgent: options.agent,
          onRequest,
          onResponse,
        })
        options.agent = mockAgent

        return Reflect.apply(target, thisArg, [url, options, callback])
      },
    })

    // Spy on `Header.prototype.set` and `Header.prototype.append` calls
    // and record the raw header names provided. This is to support
    // `IncomingMessage.prototype.rawHeaders`.
    recordRawFetchHeaders()

    this.subscriptions.push(() => {
      http.ClientRequest = OriginalClientRequest

      http.get = originalGet
      http.request = originalRequest

      https.get = originalHttpsGet
      https.request = originalHttpsRequest

      restoreHeadersPrototype()
    })
  }

  private onRequest: MockHttpSocketRequestCallback = async ({
    request,
    socket,
  }) => {
    const controller = new RequestController(request, {
      passthrough() {
        socket.passthrough()
      },
      async respondWith(response) {
        await socket.respondWith(response)
      },
      errorWith(reason) {
        if (reason instanceof Error) {
          socket.errorWith(reason)
        }
      },
    })

    await handleRequest({
      request,
      requestId: Reflect.get(request, kRequestId),
      controller,
      emitter: this.emitter,
    })
  }

  public onResponse: MockHttpSocketResponseCallback = async ({
    requestId,
    request,
    response,
    isMockedResponse,
  }) => {
    // Return the promise to when all the response event listeners
    // are finished.
    return emitAsync(this.emitter, 'response', {
      requestId,
      request,
      response,
      isMockedResponse,
    })
  }
}
