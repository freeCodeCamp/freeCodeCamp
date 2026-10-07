import { URL } from 'url'
import Dispatcher from './dispatcher'
import buildConnector from './connector'

type H2ClientOptions = Omit<Dispatcher.ConnectOptions, 'origin'>

/**
 * A basic H2C client, mapped on top a single TCP connection. Pipelining is disabled by default.
 */
export class H2CClient extends Dispatcher {
  constructor (url: string | URL, options?: H2CClient.Options)
  /** Property to get and set the pipelining factor. */
  pipelining: number
  /** `true` after `client.close()` has been called. */
  closed: boolean
  /** `true` after `client.destroyed()` has been called or `client.close()` has been called and the client shutdown has completed. */
  destroyed: boolean

  // Override dispatcher APIs.
  override connect (
    options: H2ClientOptions
  ): Promise<Dispatcher.ConnectData>
  override connect (
    options: H2ClientOptions,
    callback: (err: Error | null, data: Dispatcher.ConnectData) => void
  ): void
}

export declare namespace H2CClient {
  export interface Options {
    /** The maximum length of request headers in bytes. Default: Node.js' `--max-http-header-size` or `16384` (16KiB). */
    maxHeaderSize?: number;
    /** The amount of time, in milliseconds, the parser will wait to receive the complete HTTP headers (Node 14 and above only). Default: `300e3` milliseconds (300s). */
    headersTimeout?: number;
    /** TODO */
    connectTimeout?: number;
    /** The timeout after which a request will time out, in milliseconds. Monitors time between receiving body data. Use `0` to disable it entirely. Default: `300e3` milliseconds (300s). */
    bodyTimeout?: number;
    /** the timeout, in milliseconds, after which a socket without active requests will time out. Monitors time between activity on a connected socket. This value may be overridden by *keep-alive* hints from the server. Default: `4e3` milliseconds (4s). */
    keepAliveTimeout?: number;
    /** the maximum allowed `idleTimeout`, in milliseconds, when overridden by *keep-alive* hints from the server. Default: `600e3` milliseconds (10min). */
    keepAliveMaxTimeout?: number;
    /** A number of milliseconds subtracted from server *keep-alive* hints when overriding `idleTimeout` to account for timing inaccuracies caused by e.g. transport latency. Default: `1e3` milliseconds (1s). */
    keepAliveTimeoutThreshold?: number;
    /** TODO */
    socketPath?: string;
    /** The amount of concurrent requests to be sent over the single TCP/TLS connection according to [RFC7230](https://tools.ietf.org/html/rfc7230#section-6.3.2). Default: `1`. */
    pipelining?: number;
    /** If `true`, an error is thrown when the request content-length header doesn't match the length of the request body. Default: `true`. */
    strictContentLength?: boolean;
    /** TODO */
    maxCachedSessions?: number;
    /** TODO */
    connect?: Omit<Partial<buildConnector.BuildOptions>, 'allowH2'> | buildConnector.connector;
    /** TODO */
    maxRequestsPerClient?: number;
    /** TODO */
    localAddress?: string;
    /** Max response body size in bytes, -1 is disabled */
    maxResponseSize?: number;
    /** Enables a family autodetection algorithm that loosely implements section 5 of RFC 8305. */
    autoSelectFamily?: boolean;
    /** The amount of time in milliseconds to wait for a connection attempt to finish before trying the next address when using the `autoSelectFamily` option. */
    autoSelectFamilyAttemptTimeout?: number;
    /**
     * @description Dictates the maximum number of concurrent streams for a single H2 session. It can be overridden by a SETTINGS remote frame.
     * @default 100
    */
    maxConcurrentStreams?: number
  }
}

export default H2CClient
