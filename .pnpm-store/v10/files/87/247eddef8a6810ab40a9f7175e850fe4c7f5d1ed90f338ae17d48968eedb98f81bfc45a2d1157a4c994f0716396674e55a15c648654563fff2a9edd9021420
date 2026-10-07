import net from 'node:net'
import {
  type HeadersCallback,
  HTTPParser,
  type RequestHeadersCompleteCallback,
  type ResponseHeadersCompleteCallback,
} from '_http_common'
import { STATUS_CODES, IncomingMessage, ServerResponse } from 'node:http'
import { Readable } from 'node:stream'
import { invariant } from 'outvariant'
import { INTERNAL_REQUEST_ID_HEADER_NAME } from '../../Interceptor'
import { MockSocket } from '../Socket/MockSocket'
import type { NormalizedSocketWriteArgs } from '../Socket/utils/normalizeSocketWriteArgs'
import { isPropertyAccessible } from '../../utils/isPropertyAccessible'
import { baseUrlFromConnectionOptions } from '../Socket/utils/baseUrlFromConnectionOptions'
import { createRequestId } from '../../createRequestId'
import { getRawFetchHeaders } from './utils/recordRawHeaders'
import { FetchRequest, FetchResponse } from '../../utils/fetchUtils'
import { setRawRequest } from '../../getRawRequest'
import { setRawRequestBodyStream } from '../../utils/node'
import { freeParser } from './utils/parserUtils'

type HttpConnectionOptions = any

export type MockHttpSocketRequestCallback = (args: {
  requestId: string
  request: Request
  socket: MockHttpSocket
}) => void

export type MockHttpSocketResponseCallback = (args: {
  requestId: string
  request: Request
  response: Response
  isMockedResponse: boolean
  socket: MockHttpSocket
}) => Promise<void>

interface MockHttpSocketOptions {
  connectionOptions: HttpConnectionOptions
  createConnection: () => net.Socket
  onRequest: MockHttpSocketRequestCallback
  onResponse: MockHttpSocketResponseCallback
}

export const kRequestId = Symbol('kRequestId')

export class MockHttpSocket extends MockSocket {
  private connectionOptions: HttpConnectionOptions
  private createConnection: () => net.Socket
  private baseUrl: URL

  private onRequest: MockHttpSocketRequestCallback
  private onResponse: MockHttpSocketResponseCallback
  private responseListenersPromise?: Promise<void>

  private requestRawHeadersBuffer: Array<string> = []
  private responseRawHeadersBuffer: Array<string> = []
  private writeBuffer: Array<NormalizedSocketWriteArgs> = []
  private request?: Request
  private requestParser: HTTPParser<0>
  private requestStream?: Readable
  private shouldKeepAlive?: boolean

  private socketState: 'unknown' | 'mock' | 'passthrough' = 'unknown'
  private responseParser: HTTPParser<1>
  private responseStream?: Readable
  private originalSocket?: net.Socket

  constructor(options: MockHttpSocketOptions) {
    super({
      write: (chunk, encoding, callback) => {
        // Buffer the writes so they can be flushed in case of the original connection
        // and when reading the request body in the interceptor. If the connection has
        // been established, no need to buffer the chunks anymore, they will be forwarded.
        if (this.socketState !== 'passthrough') {
          this.writeBuffer.push([chunk, encoding, callback])
        }

        if (chunk) {
          /**
           * Forward any writes to the mock socket to the underlying original socket.
           * This ensures functional duplex connections, like WebSocket.
           * @see https://github.com/mswjs/interceptors/issues/682
           */
          if (this.socketState === 'passthrough') {
            this.originalSocket?.write(chunk, encoding, callback)
          }

          this.requestParser.execute(
            Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding)
          )
        }
      },
      read: (chunk) => {
        if (chunk !== null) {
          /**
           * @todo We need to free the parser if the connection has been
           * upgraded to a non-HTTP protocol. It won't be able to parse data
           * from that point onward anyway. No need to keep it in memory.
           */
          this.responseParser.execute(
            Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
          )
        }
      },
    })

    this.connectionOptions = options.connectionOptions
    this.createConnection = options.createConnection
    this.onRequest = options.onRequest
    this.onResponse = options.onResponse

    this.baseUrl = baseUrlFromConnectionOptions(this.connectionOptions)

    // Request parser.
    this.requestParser = new HTTPParser()
    this.requestParser.initialize(HTTPParser.REQUEST, {})
    this.requestParser[HTTPParser.kOnHeaders] = this.onRequestHeaders.bind(this)
    this.requestParser[HTTPParser.kOnHeadersComplete] =
      this.onRequestStart.bind(this)
    this.requestParser[HTTPParser.kOnBody] = this.onRequestBody.bind(this)
    this.requestParser[HTTPParser.kOnMessageComplete] =
      this.onRequestEnd.bind(this)

    // Response parser.
    this.responseParser = new HTTPParser()
    this.responseParser.initialize(HTTPParser.RESPONSE, {})
    this.responseParser[HTTPParser.kOnHeaders] =
      this.onResponseHeaders.bind(this)
    this.responseParser[HTTPParser.kOnHeadersComplete] =
      this.onResponseStart.bind(this)
    this.responseParser[HTTPParser.kOnBody] = this.onResponseBody.bind(this)
    this.responseParser[HTTPParser.kOnMessageComplete] =
      this.onResponseEnd.bind(this)

    // Once the socket is finished, nothing can write to it
    // anymore. It has also flushed any buffered chunks.
    this.once('finish', () => freeParser(this.requestParser, this))

    if (this.baseUrl.protocol === 'https:') {
      Reflect.set(this, 'encrypted', true)
      // The server certificate is not the same as a CA
      // passed to the TLS socket connection options.
      Reflect.set(this, 'authorized', false)
      Reflect.set(this, 'getProtocol', () => 'TLSv1.3')
      Reflect.set(this, 'getSession', () => undefined)
      Reflect.set(this, 'isSessionReused', () => false)
      Reflect.set(this, 'getCipher', () => ({
        name: 'AES256-SHA',
        standardName: 'TLS_RSA_WITH_AES_256_CBC_SHA',
        version: 'TLSv1.3',
      }))
    }
  }

  public emit(event: string | symbol, ...args: any[]): boolean {
    const emitEvent = super.emit.bind(this, event as any, ...args)

    if (this.responseListenersPromise) {
      this.responseListenersPromise.finally(emitEvent)
      return this.listenerCount(event) > 0
    }

    return emitEvent()
  }

  public destroy(error?: Error | undefined): this {
    // Destroy the response parser when the socket gets destroyed.
    // Normally, we should listen to the "close" event but it
    // can be suppressed by using the "emitClose: false" option.
    freeParser(this.responseParser, this)

    if (error) {
      this.emit('error', error)
    }

    return super.destroy(error)
  }

  /**
   * Establish this Socket connection as-is and pipe
   * its data/events through this Socket.
   */
  public passthrough(): void {
    this.socketState = 'passthrough'

    if (this.destroyed) {
      return
    }

    const socket = this.createConnection()
    this.originalSocket = socket

    /**
     * @note Inherit the original socket's connection handle.
     * Without this, each push to the mock socket results in a
     * new "connection" listener being added (i.e. buffering pushes).
     * @see https://github.com/nodejs/node/blob/b18153598b25485ce4f54d0c5cb830a9457691ee/lib/net.js#L734
     */
    if ('_handle' in socket) {
      Object.defineProperty(this, '_handle', {
        value: socket._handle,
        enumerable: true,
        writable: true,
      })
    }

    // The client-facing socket can be destroyed in two ways:
    // 1. The developer destroys the socket.
    // 2. The passthrough socket "close" is forwarded to the socket.
    this.once('close', () => {
      socket.removeAllListeners()

      // If the closure didn't originate from the passthrough socket, destroy it.
      if (!socket.destroyed) {
        socket.destroy()
      }

      this.originalSocket = undefined
    })

    this.address = socket.address.bind(socket)

    // Flush the buffered "socket.write()" calls onto
    // the original socket instance (i.e. write request body).
    // Exhaust the "requestBuffer" in case this Socket
    // gets reused for different requests.
    let writeArgs: NormalizedSocketWriteArgs | undefined
    let headersWritten = false

    while ((writeArgs = this.writeBuffer.shift())) {
      if (writeArgs !== undefined) {
        if (!headersWritten) {
          const [chunk, encoding, callback] = writeArgs
          const chunkString = chunk.toString()
          const chunkBeforeRequestHeaders = chunkString.slice(
            0,
            chunkString.indexOf('\r\n') + 2
          )
          const chunkAfterRequestHeaders = chunkString.slice(
            chunk.indexOf('\r\n\r\n')
          )
          const rawRequestHeaders = getRawFetchHeaders(this.request!.headers)
          const requestHeadersString = rawRequestHeaders
            // Skip the internal request ID deduplication header.
            .filter(([name]) => {
              return name.toLowerCase() !== INTERNAL_REQUEST_ID_HEADER_NAME
            })
            .map(([name, value]) => `${name}: ${value}`)
            .join('\r\n')

          // Modify the HTTP request message headers
          // to reflect any changes to the request headers
          // from the "request" event listener.
          const headersChunk = `${chunkBeforeRequestHeaders}${requestHeadersString}${chunkAfterRequestHeaders}`
          socket.write(headersChunk, encoding, callback)
          headersWritten = true
          continue
        }

        socket.write(...writeArgs)
      }
    }

    // Forward TLS Socket properties onto this Socket instance
    // in the case of a TLS/SSL connection.
    if (Reflect.get(socket, 'encrypted')) {
      const tlsProperties = [
        'encrypted',
        'authorized',
        'getProtocol',
        'getSession',
        'isSessionReused',
        'getCipher',
      ]

      tlsProperties.forEach((propertyName) => {
        Object.defineProperty(this, propertyName, {
          enumerable: true,
          get: () => {
            const value = Reflect.get(socket, propertyName)
            return typeof value === 'function' ? value.bind(socket) : value
          },
        })
      })
    }

    socket
      .on('lookup', (...args) => this.emit('lookup', ...args))
      .on('connect', () => {
        this.connecting = socket.connecting
        this.emit('connect')
      })
      .on('secureConnect', () => this.emit('secureConnect'))
      .on('secure', () => this.emit('secure'))
      .on('session', (session) => this.emit('session', session))
      .on('ready', () => this.emit('ready'))
      .on('drain', () => this.emit('drain'))
      .on('data', (chunk) => {
        // Push the original response to this socket
        // so it triggers the HTTP response parser. This unifies
        // the handling pipeline for original and mocked response.
        this.push(chunk)
      })
      .on('error', (error) => {
        Reflect.set(this, '_hadError', Reflect.get(socket, '_hadError'))
        this.emit('error', error)
      })
      .on('resume', () => this.emit('resume'))
      .on('timeout', () => this.emit('timeout'))
      .on('prefinish', () => this.emit('prefinish'))
      .on('finish', () => this.emit('finish'))
      .on('close', (hadError) => this.emit('close', hadError))
      .on('end', () => this.emit('end'))
  }

  /**
   * Convert the given Fetch API `Response` instance to an
   * HTTP message and push it to the socket.
   */
  public async respondWith(response: Response): Promise<void> {
    // Ignore the mocked response if the socket has been destroyed
    // (e.g. aborted or timed out),
    if (this.destroyed) {
      return
    }

    // Prevent recursive calls.
    invariant(
      this.socketState !== 'mock',
      '[MockHttpSocket] Failed to respond to the "%s %s" request with "%s %s": the request has already been handled',
      this.request?.method,
      this.request?.url,
      response.status,
      response.statusText
    )

    // Handle "type: error" responses.
    if (isPropertyAccessible(response, 'type') && response.type === 'error') {
      this.errorWith(new TypeError('Network error'))
      return
    }

    // First, emit all the connection events
    // to emulate a successful connection.
    this.mockConnect()
    this.socketState = 'mock'

    // Flush the write buffer to trigger write callbacks
    // if it hasn't been flushed already (e.g. someone started reading request stream).
    this.flushWriteBuffer()

    // Create a `ServerResponse` instance to delegate HTTP message parsing,
    // Transfer-Encoding, and other things to Node.js internals.
    const serverResponse = new ServerResponse(new IncomingMessage(this))

    /**
     * Assign a mock socket instance to the server response to
     * spy on the response chunk writes. Push the transformed response chunks
     * to this `MockHttpSocket` instance to trigger the "data" event.
     * @note Providing the same `MockSocket` instance when creating `ServerResponse`
     * does not have the same effect.
     * @see https://github.com/nodejs/node/blob/10099bb3f7fd97bb9dd9667188426866b3098e07/test/parallel/test-http-server-response-standalone.js#L32
     */
    serverResponse.assignSocket(
      new MockSocket({
        write: (chunk, encoding, callback) => {
          this.push(chunk, encoding)
          callback?.()
        },
        read() {},
      })
    )

    /**
     * @note Remove the `Connection` and `Date` response headers
     * injected by `ServerResponse` by default. Those are required
     * from the server but the interceptor is NOT technically a server.
     * It's confusing to add response headers that the developer didn't
     * specify themselves. They can always add these if they wish.
     * @see https://www.rfc-editor.org/rfc/rfc9110#field.date
     * @see https://www.rfc-editor.org/rfc/rfc9110#field.connection
     */
    serverResponse.removeHeader('connection')
    serverResponse.removeHeader('date')

    const rawResponseHeaders = getRawFetchHeaders(response.headers)

    /**
     * @note Call `.writeHead` in order to set the raw response headers
     * in the same case as they were provided by the developer. Using
     * `.setHeader()`/`.appendHeader()` normalizes header names.
     */
    serverResponse.writeHead(
      response.status,
      response.statusText || STATUS_CODES[response.status],
      rawResponseHeaders
    )

    // If the developer destroy the socket, gracefully destroy the response.
    this.once('error', () => {
      serverResponse.destroy()
    })

    if (response.body) {
      try {
        const reader = response.body.getReader()

        while (true) {
          const { done, value } = await reader.read()

          if (done) {
            serverResponse.end()
            break
          }

          serverResponse.write(value)
        }
      } catch (error) {
        if (error instanceof Error) {
          serverResponse.destroy()
          /**
           * @note Destroy the request socket gracefully.
           * Response stream errors do NOT produce request errors.
           */
          this.destroy()
          return
        }

        serverResponse.destroy()
        throw error
      }
    } else {
      serverResponse.end()
    }

    // Close the socket if the connection wasn't marked as keep-alive.
    if (!this.shouldKeepAlive) {
      this.emit('readable')

      /**
       * @todo @fixme This is likely a hack.
       * Since we push null to the socket, it never propagates to the
       * parser, and the parser never calls "onResponseEnd" to close
       * the response stream. We are closing the stream here manually
       * but that shouldn't be the case.
       */
      this.responseStream?.push(null)
      this.push(null)
    }
  }

  /**
   * Close this socket connection with the given error.
   */
  public errorWith(error?: Error): void {
    this.destroy(error)
  }

  private mockConnect(): void {
    // Calling this method immediately puts the socket
    // into the connected state.
    this.connecting = false

    const isIPv6 =
      net.isIPv6(this.connectionOptions.hostname) ||
      this.connectionOptions.family === 6
    const addressInfo = {
      address: isIPv6 ? '::1' : '127.0.0.1',
      family: isIPv6 ? 'IPv6' : 'IPv4',
      port: this.connectionOptions.port,
    }
    // Return fake address information for the socket.
    this.address = () => addressInfo
    this.emit(
      'lookup',
      null,
      addressInfo.address,
      addressInfo.family === 'IPv6' ? 6 : 4,
      this.connectionOptions.host
    )
    this.emit('connect')
    this.emit('ready')

    if (this.baseUrl.protocol === 'https:') {
      this.emit('secure')
      this.emit('secureConnect')

      // A single TLS connection is represented by two "session" events.
      this.emit(
        'session',
        this.connectionOptions.session ||
          Buffer.from('mock-session-renegotiate')
      )
      this.emit('session', Buffer.from('mock-session-resume'))
    }
  }

  private flushWriteBuffer(): void {
    for (const writeCall of this.writeBuffer) {
      if (typeof writeCall[2] === 'function') {
        writeCall[2]()
        /**
         * @note Remove the callback from the write call
         * so it doesn't get called twice on passthrough
         * if `request.end()` was called within `request.write()`.
         * @see https://github.com/mswjs/interceptors/issues/684
         */
        writeCall[2] = undefined
      }
    }
  }

  /**
   * This callback might be called when the request is "slow":
   * - Request headers were fragmented across multiple TCP packages;
   * - Request headers were too large to be processed in a single run
   * (e.g. more than 30 request headers).
   * @note This is called before request start.
   */
  private onRequestHeaders: HeadersCallback = (rawHeaders) => {
    this.requestRawHeadersBuffer.push(...rawHeaders)
  }

  private onRequestStart: RequestHeadersCompleteCallback = (
    versionMajor,
    versionMinor,
    rawHeaders,
    _,
    path,
    __,
    ___,
    ____,
    shouldKeepAlive
  ) => {
    this.shouldKeepAlive = shouldKeepAlive

    const url = new URL(path || '', this.baseUrl)
    const method = this.connectionOptions.method?.toUpperCase() || 'GET'
    const headers = FetchResponse.parseRawHeaders([
      ...this.requestRawHeadersBuffer,
      ...(rawHeaders || []),
    ])
    this.requestRawHeadersBuffer.length = 0

    const canHaveBody = method !== 'GET' && method !== 'HEAD'

    // Translate the basic authorization in the URL to the request header.
    // Constructing a Request instance with a URL containing auth is no-op.
    if (url.username || url.password) {
      if (!headers.has('authorization')) {
        headers.set('authorization', `Basic ${url.username}:${url.password}`)
      }
      url.username = ''
      url.password = ''
    }

    // Create a new stream for each request.
    // If this Socket is reused for multiple requests,
    // this ensures that each request gets its own stream.
    // One Socket instance can only handle one request at a time.
    this.requestStream = new Readable({
      /**
       * @note Provide the `read()` method so a `Readable` could be
       * used as the actual request body (the stream calls "read()").
       * We control the queue in the onRequestBody/End functions.
       */
      read: () => {
        // If the user attempts to read the request body,
        // flush the write buffer to trigger the callbacks.
        // This way, if the request stream ends in the write callback,
        // it will indeed end correctly.
        this.flushWriteBuffer()
      },
    })

    const requestId = createRequestId()
    this.request = new FetchRequest(url, {
      method,
      headers,
      credentials: 'same-origin',
      // @ts-expect-error Undocumented Fetch property.
      duplex: canHaveBody ? 'half' : undefined,
      body: canHaveBody ? (Readable.toWeb(this.requestStream!) as any) : null,
    })

    Reflect.set(this.request, kRequestId, requestId)

    // Set the raw `http.ClientRequest` instance on the request instance.
    // This is useful for cases like getting the raw headers of the request.
    setRawRequest(this.request, Reflect.get(this, '_httpMessage'))

    // Create a copy of the request body stream and store it on the request.
    // This is only needed for the consumers who wish to read the request body stream
    // of requests that cannot have a body per Fetch API specification (i.e. GET, HEAD).
    setRawRequestBodyStream(this.request, this.requestStream)

    // Skip handling the request that's already being handled
    // by another (parent) interceptor. For example, XMLHttpRequest
    // is often implemented via ClientRequest in Node.js (e.g. JSDOM).
    // In that case, XHR interceptor will bubble down to the ClientRequest
    // interceptor. No need to try to handle that request again.
    /**
     * @fixme Stop relying on the "X-Request-Id" request header
     * to figure out if one interceptor has been invoked within another.
     * @see https://github.com/mswjs/interceptors/issues/378
     */
    if (this.request.headers.has(INTERNAL_REQUEST_ID_HEADER_NAME)) {
      this.passthrough()
      return
    }

    this.onRequest({
      requestId,
      request: this.request,
      socket: this,
    })
  }

  private onRequestBody(chunk: Buffer): void {
    invariant(
      this.requestStream,
      'Failed to write to a request stream: stream does not exist'
    )

    this.requestStream.push(chunk)
  }

  private onRequestEnd(): void {
    // Request end can be called for requests without body.
    if (this.requestStream) {
      this.requestStream.push(null)
    }
  }

  /**
   * This callback might be called when the response is "slow":
   * - Response headers were fragmented across multiple TCP packages;
   * - Response headers were too large to be processed in a single run
   * (e.g. more than 30 response headers).
   * @note This is called before response start.
   */
  private onResponseHeaders: HeadersCallback = (rawHeaders) => {
    this.responseRawHeadersBuffer.push(...rawHeaders)
  }

  private onResponseStart: ResponseHeadersCompleteCallback = (
    versionMajor,
    versionMinor,
    rawHeaders,
    method,
    url,
    status,
    statusText
  ) => {
    const headers = FetchResponse.parseRawHeaders([
      ...this.responseRawHeadersBuffer,
      ...(rawHeaders || []),
    ])
    this.responseRawHeadersBuffer.length = 0

    const response = new FetchResponse(
      /**
       * @note The Fetch API response instance exposed to the consumer
       * is created over the response stream of the HTTP parser. It is NOT
       * related to the Socket instance. This way, you can read response body
       * in response listener while the Socket instance delays the emission
       * of "end" and other events until those response listeners are finished.
       */
      FetchResponse.isResponseWithBody(status)
        ? (Readable.toWeb(
            (this.responseStream = new Readable({ read() {} }))
          ) as any)
        : null,
      {
        url,
        status,
        statusText,
        headers,
      }
    )

    invariant(
      this.request,
      'Failed to handle a response: request does not exist'
    )

    FetchResponse.setUrl(this.request.url, response)

    /**
     * @fixme Stop relying on the "X-Request-Id" request header
     * to figure out if one interceptor has been invoked within another.
     * @see https://github.com/mswjs/interceptors/issues/378
     */
    if (this.request.headers.has(INTERNAL_REQUEST_ID_HEADER_NAME)) {
      return
    }

    this.responseListenersPromise = this.onResponse({
      response,
      isMockedResponse: this.socketState === 'mock',
      requestId: Reflect.get(this.request, kRequestId),
      request: this.request,
      socket: this,
    })
  }

  private onResponseBody(chunk: Buffer) {
    invariant(
      this.responseStream,
      'Failed to write to a response stream: stream does not exist'
    )

    this.responseStream.push(chunk)
  }

  private onResponseEnd(): void {
    // Response end can be called for responses without body.
    if (this.responseStream) {
      this.responseStream.push(null)
    }
  }
}
