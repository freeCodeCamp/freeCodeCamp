import { URL } from 'node:url'
import Dispatcher from './dispatcher'
import buildConnector from './connector'
import TClientStats from './client-stats'

type ClientConnectOptions = Omit<Dispatcher.ConnectOptions, 'origin'>

/**
 * A basic HTTP/1.1 client, mapped on top a single TCP/TLS connection. Pipelining is disabled by default.
 */
export class Client extends Dispatcher {
  constructor (url: string | URL, options?: Client.Options)
  /** Property to get and set the pipelining factor. */
  pipelining: number
  /** `true` after `client.close()` has been called. */
  closed: boolean
  /** `true` after `client.destroyed()` has been called or `client.close()` has been called and the client shutdown has completed. */
  destroyed: boolean
  /** Aggregate stats for a Client. */
  readonly stats: TClientStats

  // Override dispatcher APIs.
  override connect (
    options: ClientConnectOptions
  ): Promise<Dispatcher.ConnectData>
  override connect (
    options: ClientConnectOptions,
    callback: (err: Error | null, data: Dispatcher.ConnectData) => void
  ): void
}

export declare namespace Client {
  export interface OptionsInterceptors {
    Client: readonly Dispatcher.DispatchInterceptor[];
  }
  export interface Options {
    /** TODO */
    interceptors?: OptionsInterceptors;
    /** The maximum length of request headers in bytes. Default: Node.js' `--max-http-header-size` or `16384` (16KiB). */
    maxHeaderSize?: number;
    /** The amount of time, in milliseconds, the parser will wait to receive the complete HTTP headers (Node 14 and above only). Default: `300e3` milliseconds (300s). */
    headersTimeout?: number;
    /** @deprecated unsupported socketTimeout, use headersTimeout & bodyTimeout instead */
    socketTimeout?: never;
    /** @deprecated unsupported requestTimeout, use headersTimeout & bodyTimeout instead */
    requestTimeout?: never;
    /** TODO */
    connectTimeout?: number;
    /** The timeout after which a request will time out, in milliseconds. Monitors time between receiving body data. Use `0` to disable it entirely. Default: `300e3` milliseconds (300s). */
    bodyTimeout?: number;
    /** @deprecated unsupported idleTimeout, use keepAliveTimeout instead */
    idleTimeout?: never;
    /** @deprecated unsupported keepAlive, use pipelining=0 instead */
    keepAlive?: never;
    /** the timeout, in milliseconds, after which a socket without active requests will time out. Monitors time between activity on a connected socket. This value may be overridden by *keep-alive* hints from the server. Default: `4e3` milliseconds (4s). */
    keepAliveTimeout?: number;
    /** @deprecated unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead */
    maxKeepAliveTimeout?: never;
    /** the maximum allowed `idleTimeout`, in milliseconds, when overridden by *keep-alive* hints from the server. Default: `600e3` milliseconds (10min). */
    keepAliveMaxTimeout?: number;
    /** A number of milliseconds subtracted from server *keep-alive* hints when overriding `idleTimeout` to account for timing inaccuracies caused by e.g. transport latency. Default: `1e3` milliseconds (1s). */
    keepAliveTimeoutThreshold?: number;
    /** TODO */
    socketPath?: string;
    /** The amount of concurrent requests to be sent over the single TCP/TLS connection according to [RFC7230](https://tools.ietf.org/html/rfc7230#section-6.3.2). Default: `1`. */
    pipelining?: number;
    /** @deprecated use the connect option instead */
    tls?: never;
    /** If `true`, an error is thrown when the request content-length header doesn't match the length of the request body. Default: `true`. */
    strictContentLength?: boolean;
    /** TODO */
    maxCachedSessions?: number;
    /** TODO */
    connect?: Partial<buildConnector.BuildOptions> | buildConnector.connector;
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
     * @description Enables support for H2 if the server has assigned bigger priority to it through ALPN negotiation.
     * @default false
     */
    allowH2?: boolean;
    /**
     * @description Dictates the maximum number of concurrent streams for a single H2 session. It can be overridden by a SETTINGS remote frame.
     * @default 100
     */
    maxConcurrentStreams?: number;
    /**
     * @description Sets the HTTP/2 stream-level flow-control window size (SETTINGS_INITIAL_WINDOW_SIZE).
     * @default 262144
     */
    initialWindowSize?: number;
    /**
     * @description Sets the HTTP/2 connection-level flow-control window size (ClientHttp2Session.setLocalWindowSize).
     * @default 524288
     */
    connectionWindowSize?: number;
  }
  export interface SocketInfo {
    localAddress?: string
    localPort?: number
    remoteAddress?: string
    remotePort?: number
    remoteFamily?: string
    timeout?: number
    bytesWritten?: number
    bytesRead?: number
  }
}

export default Client
