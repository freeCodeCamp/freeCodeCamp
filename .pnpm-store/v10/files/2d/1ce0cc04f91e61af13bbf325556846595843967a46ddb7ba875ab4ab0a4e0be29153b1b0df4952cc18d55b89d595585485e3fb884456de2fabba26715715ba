import { FetchResponse } from '@mswjs/interceptors'
import type { DefaultBodyType, JsonBodyType } from './handlers/RequestHandler'
import type { NoInfer } from './typeUtils'
import {
  decorateResponse,
  normalizeResponseInit,
} from './utils/HttpResponse/decorators'

export interface HttpResponseInit extends ResponseInit {
  type?: ResponseType
}

export const bodyType: unique symbol = Symbol('bodyType')
export type DefaultUnsafeFetchResponse = Response & {
  [bodyType]?: never
}

export interface StrictRequest<BodyType extends JsonBodyType> extends Request {
  json(): Promise<BodyType>
  clone(): StrictRequest<BodyType>
}

/**
 * Opaque `Response` type that supports strict body type.
 *
 * @deprecated Please use {@link HttpResponse} instead.
 */
export type StrictResponse<BodyType extends DefaultBodyType> =
  HttpResponse<BodyType>

export const kDefaultContentType = Symbol.for('kDefaultContentType')

/**
 * A drop-in replacement for the standard `Response` class
 * to allow additional features, like mocking the response `Set-Cookie` header.
 *
 * @example
 * new HttpResponse('Hello world', { status: 201 })
 * HttpResponse.json({ name: 'John' })
 * HttpResponse.formData(form)
 *
 * @see {@link https://mswjs.io/docs/api/http-response `HttpResponse` API reference}
 */
export class HttpResponse<
  BodyType extends DefaultBodyType,
> extends FetchResponse {
  readonly [bodyType]: BodyType = null as any

  constructor(body?: NoInfer<BodyType> | null, init?: HttpResponseInit) {
    const responseInit = normalizeResponseInit(init)
    super(body as BodyInit, responseInit)
    decorateResponse(this, responseInit)
  }

  static error(): HttpResponse<any> {
    return super.error() as HttpResponse<any>
  }

  /**
   * Create a `Response` with a `Content-Type: "text/plain"` body.
   * @example
   * HttpResponse.text('hello world')
   * HttpResponse.text('Error', { status: 500 })
   */
  static text<BodyType extends string>(
    body?: NoInfer<BodyType> | null,
    init?: HttpResponseInit,
  ): HttpResponse<BodyType> {
    const responseInit = normalizeResponseInit(init)
    const hasExplicitContentType = responseInit.headers.has('Content-Type')

    if (!hasExplicitContentType) {
      responseInit.headers.set('Content-Type', 'text/plain')
    }

    // Automatically set the "Content-Length" response header
    // for non-empty text responses. This enforces consistency and
    // brings mocked responses closer to production.
    if (!responseInit.headers.has('Content-Length')) {
      responseInit.headers.set(
        'Content-Length',
        body ? new Blob([body]).size.toString() : '0',
      )
    }

    const response = new HttpResponse(body, responseInit)

    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false,
      })
    }

    return response
  }

  /**
   * Create a `Response` with a `Content-Type: "application/json"` body.
   * @example
   * HttpResponse.json({ firstName: 'John' })
   * HttpResponse.json({ error: 'Not Authorized' }, { status: 401 })
   */
  static json<BodyType extends JsonBodyType>(
    body?: NoInfer<BodyType> | null | undefined,
    init?: HttpResponseInit,
  ): HttpResponse<BodyType> {
    const responseInit = normalizeResponseInit(init)
    const hasExplicitContentType = responseInit.headers.has('Content-Type')

    if (!hasExplicitContentType) {
      responseInit.headers.set('Content-Type', 'application/json')
    }

    /**
     * @note TypeScript is incorrect here.
     * Stringifying undefined will return undefined.
     */
    const responseText = JSON.stringify(body) as string | undefined

    if (!responseInit.headers.has('Content-Length')) {
      responseInit.headers.set(
        'Content-Length',
        responseText ? new Blob([responseText]).size.toString() : '0',
      )
    }

    const response = new HttpResponse(responseText, responseInit)

    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false,
      })
    }

    return response as HttpResponse<BodyType>
  }

  /**
   * Create a `Response` with a `Content-Type: "application/xml"` body.
   * @example
   * HttpResponse.xml(`<user name="John" />`)
   * HttpResponse.xml(`<article id="abc-123" />`, { status: 201 })
   */
  static xml<BodyType extends string>(
    body?: BodyType | null,
    init?: HttpResponseInit,
  ): HttpResponse<BodyType> {
    const responseInit = normalizeResponseInit(init)
    const hasExplicitContentType = responseInit.headers.has('Content-Type')

    if (!hasExplicitContentType) {
      responseInit.headers.set('Content-Type', 'text/xml')
    }

    const response = new HttpResponse(body, responseInit)

    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false,
      })
    }

    return response as HttpResponse<BodyType>
  }

  /**
   * Create a `Response` with a `Content-Type: "text/html"` body.
   * @example
   * HttpResponse.html(`<p class="author">Jane Doe</p>`)
   * HttpResponse.html(`<main id="abc-123">Main text</main>`, { status: 201 })
   */
  static html<BodyType extends string>(
    body?: BodyType | null,
    init?: HttpResponseInit,
  ): HttpResponse<BodyType> {
    const responseInit = normalizeResponseInit(init)
    const hasExplicitContentType = responseInit.headers.has('Content-Type')

    if (!hasExplicitContentType) {
      responseInit.headers.set('Content-Type', 'text/html')
    }

    const response = new HttpResponse(body, responseInit)

    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false,
      })
    }

    return response as HttpResponse<BodyType>
  }

  /**
   * Create a `Response` with an `ArrayBuffer` body.
   * @example
   * const buffer = new ArrayBuffer(3)
   * const view = new Uint8Array(buffer)
   * view.set([1, 2, 3])
   *
   * HttpResponse.arrayBuffer(buffer)
   */
  static arrayBuffer<BodyType extends ArrayBuffer | SharedArrayBuffer>(
    body?: BodyType,
    init?: HttpResponseInit,
  ): HttpResponse<BodyType> {
    const responseInit = normalizeResponseInit(init)
    const hasExplicitContentType = responseInit.headers.has('Content-Type')

    if (!hasExplicitContentType) {
      responseInit.headers.set('Content-Type', 'application/octet-stream')
    }

    if (body && !responseInit.headers.has('Content-Length')) {
      responseInit.headers.set('Content-Length', body.byteLength.toString())
    }

    const response = new HttpResponse(body, responseInit)

    if (!hasExplicitContentType) {
      Object.defineProperty(response, kDefaultContentType, {
        value: true,
        enumerable: false,
      })
    }

    return response as HttpResponse<BodyType>
  }

  /**
   * Create a `Response` with a `FormData` body.
   * @example
   * const data = new FormData()
   * data.set('name', 'Alice')
   *
   * HttpResponse.formData(data)
   */
  static formData(
    body?: FormData,
    init?: HttpResponseInit,
  ): HttpResponse<FormData> {
    return new HttpResponse(body, normalizeResponseInit(init))
  }
}
