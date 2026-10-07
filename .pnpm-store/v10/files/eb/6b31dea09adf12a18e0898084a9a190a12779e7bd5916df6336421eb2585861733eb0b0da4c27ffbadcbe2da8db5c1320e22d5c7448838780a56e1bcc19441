import { IncomingHttpHeaders } from './header'
import Client from './client'

export default Errors

declare namespace Errors {
  export class UndiciError extends Error {
    name: string
    code: string
  }

  /** Connect timeout error. */
  export class ConnectTimeoutError extends UndiciError {
    name: 'ConnectTimeoutError'
    code: 'UND_ERR_CONNECT_TIMEOUT'
  }

  /** A header exceeds the `headersTimeout` option. */
  export class HeadersTimeoutError extends UndiciError {
    name: 'HeadersTimeoutError'
    code: 'UND_ERR_HEADERS_TIMEOUT'
  }

  /** Headers overflow error. */
  export class HeadersOverflowError extends UndiciError {
    name: 'HeadersOverflowError'
    code: 'UND_ERR_HEADERS_OVERFLOW'
  }

  /** A body exceeds the `bodyTimeout` option. */
  export class BodyTimeoutError extends UndiciError {
    name: 'BodyTimeoutError'
    code: 'UND_ERR_BODY_TIMEOUT'
  }

  export class ResponseError extends UndiciError {
    constructor (
      message: string,
      code: number,
      options: {
        headers?: IncomingHttpHeaders | string[] | null,
        body?: null | Record<string, any> | string
      }
    )
    name: 'ResponseError'
    code: 'UND_ERR_RESPONSE'
    statusCode: number
    body: null | Record<string, any> | string
    headers: IncomingHttpHeaders | string[] | null
  }

  /** Passed an invalid argument. */
  export class InvalidArgumentError extends UndiciError {
    name: 'InvalidArgumentError'
    code: 'UND_ERR_INVALID_ARG'
  }

  /** Returned an invalid value. */
  export class InvalidReturnValueError extends UndiciError {
    name: 'InvalidReturnValueError'
    code: 'UND_ERR_INVALID_RETURN_VALUE'
  }

  /** The request has been aborted by the user. */
  export class RequestAbortedError extends UndiciError {
    name: 'AbortError'
    code: 'UND_ERR_ABORTED'
  }

  /** Expected error with reason. */
  export class InformationalError extends UndiciError {
    name: 'InformationalError'
    code: 'UND_ERR_INFO'
  }

  /** Request body length does not match content-length header. */
  export class RequestContentLengthMismatchError extends UndiciError {
    name: 'RequestContentLengthMismatchError'
    code: 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH'
  }

  /** Response body length does not match content-length header. */
  export class ResponseContentLengthMismatchError extends UndiciError {
    name: 'ResponseContentLengthMismatchError'
    code: 'UND_ERR_RES_CONTENT_LENGTH_MISMATCH'
  }

  /** Trying to use a destroyed client. */
  export class ClientDestroyedError extends UndiciError {
    name: 'ClientDestroyedError'
    code: 'UND_ERR_DESTROYED'
  }

  /** Trying to use a closed client. */
  export class ClientClosedError extends UndiciError {
    name: 'ClientClosedError'
    code: 'UND_ERR_CLOSED'
  }

  /** There is an error with the socket. */
  export class SocketError extends UndiciError {
    name: 'SocketError'
    code: 'UND_ERR_SOCKET'
    socket: Client.SocketInfo | null
  }

  /** Encountered unsupported functionality. */
  export class NotSupportedError extends UndiciError {
    name: 'NotSupportedError'
    code: 'UND_ERR_NOT_SUPPORTED'
  }

  /** No upstream has been added to the BalancedPool. */
  export class BalancedPoolMissingUpstreamError extends UndiciError {
    name: 'MissingUpstreamError'
    code: 'UND_ERR_BPL_MISSING_UPSTREAM'
  }

  export class HTTPParserError extends UndiciError {
    name: 'HTTPParserError'
    code: string
  }

  /** The response exceed the length allowed. */
  export class ResponseExceededMaxSizeError extends UndiciError {
    name: 'ResponseExceededMaxSizeError'
    code: 'UND_ERR_RES_EXCEEDED_MAX_SIZE'
  }

  export class RequestRetryError extends UndiciError {
    constructor (
      message: string,
      statusCode: number,
      headers?: IncomingHttpHeaders | string[] | null,
      body?: null | Record<string, any> | string
    )
    name: 'RequestRetryError'
    code: 'UND_ERR_REQ_RETRY'
    statusCode: number
    data: {
      count: number;
    }

    headers: Record<string, string | string[]>
  }

  export class SecureProxyConnectionError extends UndiciError {
    constructor (
      cause?: Error,
      message?: string,
      options?: Record<any, any>
    )
    name: 'SecureProxyConnectionError'
    code: 'UND_ERR_PRX_TLS'
  }

  class MaxOriginsReachedError extends UndiciError {
    name: 'MaxOriginsReachedError'
    code: 'UND_ERR_MAX_ORIGINS_REACHED'
  }
}
