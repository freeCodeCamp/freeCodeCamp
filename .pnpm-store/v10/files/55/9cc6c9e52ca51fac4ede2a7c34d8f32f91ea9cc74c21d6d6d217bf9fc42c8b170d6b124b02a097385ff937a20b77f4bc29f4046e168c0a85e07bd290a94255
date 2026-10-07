/// <reference types="node" />
import { t as ModuleRunnerTransport } from "./chunks/moduleRunnerTransport.js";
import { ConnectedPayload, CustomPayload, CustomPayload as hmrPayload_CustomPayload, ErrorPayload, FullReloadPayload, HMRPayload, HotPayload, HotPayload as hmrPayload_HotPayload, PrunePayload, Update, UpdatePayload } from "#types/hmrPayload";
import { CustomEventMap, InferCustomEventPayload, InferCustomEventPayload as hmrPayload_InferCustomEventPayload, InvalidatePayload } from "#types/customEvent";
import * as Rollup from "rollup";
import { CustomPluginOptions, ExistingRawSourceMap, InputOption, InputOptions, LoadResult, MinimalPluginContext, ModuleFormat, ModuleInfo, ObjectHook, OutputBundle, OutputChunk, PartialResolvedId, PluginContext, PluginContextMeta, PluginHooks, ResolveIdResult, RollupError, RollupLog, RollupOptions, RollupOutput, RollupWatcher, SourceDescription, SourceMap, SourceMapInput, TransformPluginContext, WatcherOptions } from "rollup";
import { parseAst, parseAstAsync } from "rollup/parseAst";
import * as http from "node:http";
import { Agent, ClientRequest, ClientRequestArgs, OutgoingHttpHeaders, ServerResponse } from "node:http";
import { Http2SecureServer } from "node:http2";
import * as fs from "node:fs";
import { EventEmitter } from "node:events";
import { Server as HttpsServer, ServerOptions as HttpsServerOptions } from "node:https";
import * as net from "node:net";
import { Duplex, DuplexOptions, Stream } from "node:stream";
import { FetchFunction, FetchFunctionOptions, FetchResult, FetchResult as moduleRunner_FetchResult, ModuleEvaluator, ModuleRunner, ModuleRunnerHmr, ModuleRunnerOptions } from "vite/module-runner";
import { BuildOptions as esbuild_BuildOptions, TransformOptions as EsbuildTransformOptions, TransformOptions as esbuild_TransformOptions, TransformResult as esbuild_TransformResult, version as esbuildVersion } from "esbuild";
import { SecureContextOptions } from "node:tls";
import { URL as url_URL } from "node:url";
import { ZlibOptions } from "node:zlib";
import { Terser, TerserMinifyOptions } from "#types/internal/terserOptions";
import * as PostCSS from "postcss";
import { LessPreprocessorBaseOptions, SassModernPreprocessBaseOptions, StylusPreprocessorBaseOptions } from "#types/internal/cssPreprocessorOptions";
import { LightningCSSOptions, LightningCSSOptions as lightningcssOptions_LightningCSSOptions } from "#types/internal/lightningcssOptions";
import { GeneralImportGlobOptions, ImportGlobFunction, ImportGlobOptions, KnownAsTypeMap } from "#types/importGlob";
import { ChunkMetadata, CustomPluginOptionsVite } from "#types/metadata";

//#region rolldown:runtime

//#endregion
//#region src/types/alias.d.ts
interface Alias {
  find: string | RegExp;
  replacement: string;
  /**
   * Instructs the plugin to use an alternative resolving algorithm,
   * rather than the Rollup's resolver.
   * @default null
   */
  customResolver?: ResolverFunction | ResolverObject | null;
}
type MapToFunction<T$1> = T$1 extends Function ? T$1 : never;
type ResolverFunction = MapToFunction<PluginHooks['resolveId']>;
interface ResolverObject {
  buildStart?: PluginHooks['buildStart'];
  resolveId: ResolverFunction;
}
/**
 * Specifies an `Object`, or an `Array` of `Object`,
 * which defines aliases used to replace values in `import` or `require` statements.
 * With either format, the order of the entries is important,
 * in that the first defined rules are applied first.
 *
 * This is passed to \@rollup/plugin-alias as the "entries" field
 * https://github.com/rollup/plugins/tree/master/packages/alias#entries
 */
type AliasOptions = readonly Alias[] | {
  [find: string]: string;
};
//#endregion
//#region src/types/anymatch.d.ts
type AnymatchFn = (testString: string) => boolean;
type AnymatchPattern = string | RegExp | AnymatchFn;
type AnymatchMatcher = AnymatchPattern | AnymatchPattern[];
//#endregion
//#region src/types/chokidar.d.ts
declare class FSWatcher extends EventEmitter implements fs.FSWatcher {
  options: WatchOptions;

  /**
   * Constructs a new FSWatcher instance with optional WatchOptions parameter.
   */
  constructor(options?: WatchOptions);

  /**
   * When called, requests that the Node.js event loop not exit so long as the fs.FSWatcher is active.
   * Calling watcher.ref() multiple times will have no effect.
   */
  ref(): this;

  /**
   * When called, the active fs.FSWatcher object will not require the Node.js event loop to remain active.
   * If there is no other activity keeping the event loop running, the process may exit before the fs.FSWatcher object's callback is invoked.
   * Calling watcher.unref() multiple times will have no effect.
   */
  unref(): this;

  /**
   * Add files, directories, or glob patterns for tracking. Takes an array of strings or just one
   * string.
   */
  add(paths: string | ReadonlyArray<string>): this;

  /**
   * Stop watching files, directories, or glob patterns. Takes an array of strings or just one
   * string.
   */
  unwatch(paths: string | ReadonlyArray<string>): this;

  /**
   * Returns an object representing all the paths on the file system being watched by this
   * `FSWatcher` instance. The object's keys are all the directories (using absolute paths unless
   * the `cwd` option was used), and the values are arrays of the names of the items contained in
   * each directory.
   */
  getWatched(): {
    [directory: string]: string[];
  };

  /**
   * Removes all listeners from watched files.
   */
  close(): Promise<void>;
  on(event: 'add' | 'addDir' | 'change', listener: (path: string, stats?: fs.Stats) => void): this;
  on(event: 'all', listener: (eventName: 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir', path: string, stats?: fs.Stats) => void): this;

  /**
   * Error occurred
   */
  on(event: 'error', listener: (error: Error) => void): this;

  /**
   * Exposes the native Node `fs.FSWatcher events`
   */
  on(event: 'raw', listener: (eventName: string, path: string, details: any) => void): this;

  /**
   * Fires when the initial scan is complete
   */
  on(event: 'ready', listener: () => void): this;
  on(event: 'unlink' | 'unlinkDir', listener: (path: string) => void): this;
  on(event: string, listener: (...args: any[]) => void): this;
}
interface WatchOptions {
  /**
   * Indicates whether the process should continue to run as long as files are being watched. If
   * set to `false` when using `fsevents` to watch, no more events will be emitted after `ready`,
   * even if the process continues to run.
   */
  persistent?: boolean;

  /**
   * ([anymatch](https://github.com/micromatch/anymatch)-compatible definition) Defines files/paths to
   * be ignored. The whole relative or absolute path is tested, not just filename. If a function
   * with two arguments is provided, it gets called twice per path - once with a single argument
   * (the path), second time with two arguments (the path and the
   * [`fs.Stats`](https://nodejs.org/api/fs.html#fs_class_fs_stats) object of that path).
   */
  ignored?: AnymatchMatcher;

  /**
   * If set to `false` then `add`/`addDir` events are also emitted for matching paths while
   * instantiating the watching as chokidar discovers these file paths (before the `ready` event).
   */
  ignoreInitial?: boolean;

  /**
   * When `false`, only the symlinks themselves will be watched for changes instead of following
   * the link references and bubbling events through the link's path.
   */
  followSymlinks?: boolean;

  /**
   * The base directory from which watch `paths` are to be derived. Paths emitted with events will
   * be relative to this.
   */
  cwd?: string;

  /**
   * If set to true then the strings passed to .watch() and .add() are treated as literal path
   * names, even if they look like globs.
   *
   * @default false
   */
  disableGlobbing?: boolean;

  /**
   * Whether to use fs.watchFile (backed by polling), or fs.watch. If polling leads to high CPU
   * utilization, consider setting this to `false`. It is typically necessary to **set this to
   * `true` to successfully watch files over a network**, and it may be necessary to successfully
   * watch files in other non-standard situations. Setting to `true` explicitly on OS X overrides
   * the `useFsEvents` default.
   */
  usePolling?: boolean;

  /**
   * Whether to use the `fsevents` watching interface if available. When set to `true` explicitly
   * and `fsevents` is available this supersedes the `usePolling` setting. When set to `false` on
   * OS X, `usePolling: true` becomes the default.
   */
  useFsEvents?: boolean;

  /**
   * If relying upon the [`fs.Stats`](https://nodejs.org/api/fs.html#fs_class_fs_stats) object that
   * may get passed with `add`, `addDir`, and `change` events, set this to `true` to ensure it is
   * provided even in cases where it wasn't already available from the underlying watch events.
   */
  alwaysStat?: boolean;

  /**
   * If set, limits how many levels of subdirectories will be traversed.
   */
  depth?: number;

  /**
   * Interval of file system polling.
   */
  interval?: number;

  /**
   * Interval of file system polling for binary files. ([see list of binary extensions](https://gi
   * thub.com/sindresorhus/binary-extensions/blob/master/binary-extensions.json))
   */
  binaryInterval?: number;

  /**
   *  Indicates whether to watch files that don't have read permissions if possible. If watching
   *  fails due to `EPERM` or `EACCES` with this set to `true`, the errors will be suppressed
   *  silently.
   */
  ignorePermissionErrors?: boolean;

  /**
   * `true` if `useFsEvents` and `usePolling` are `false`. Automatically filters out artifacts
   * that occur when using editors that use "atomic writes" instead of writing directly to the
   * source file. If a file is re-added within 100 ms of being deleted, Chokidar emits a `change`
   * event rather than `unlink` then `add`. If the default of 100 ms does not work well for you,
   * you can override it by setting `atomic` to a custom value, in milliseconds.
   */
  atomic?: boolean | number;

  /**
   * can be set to an object in order to adjust timing params:
   */
  awaitWriteFinish?: AwaitWriteFinishOptions | boolean;
}
interface AwaitWriteFinishOptions {
  /**
   * Amount of time in milliseconds for a file size to remain constant before emitting its event.
   */
  stabilityThreshold?: number;

  /**
   * File size polling interval.
   */
  pollInterval?: number;
}
//#endregion
//#region src/types/connect.d.ts
declare namespace Connect {
  export type ServerHandle = HandleFunction | http.Server;
  export class IncomingMessage extends http.IncomingMessage {
    originalUrl?: http.IncomingMessage['url'] | undefined;
  }
  export type NextFunction = (err?: any) => void;
  export type SimpleHandleFunction = (req: IncomingMessage, res: http.ServerResponse) => void;
  export type NextHandleFunction = (req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void;
  export type ErrorHandleFunction = (err: any, req: IncomingMessage, res: http.ServerResponse, next: NextFunction) => void;
  export type HandleFunction = SimpleHandleFunction | NextHandleFunction | ErrorHandleFunction;
  export interface ServerStackItem {
    route: string;
    handle: ServerHandle;
  }
  export interface Server extends NodeJS.EventEmitter {
    (req: http.IncomingMessage, res: http.ServerResponse, next?: Function): void;
    route: string;
    stack: ServerStackItem[];

    /**
     * Utilize the given middleware `handle` to the given `route`,
     * defaulting to _/_. This "route" is the mount-point for the
     * middleware, when given a value other than _/_ the middleware
     * is only effective when that segment is present in the request's
     * pathname.
     *
     * For example if we were to mount a function at _/admin_, it would
     * be invoked on _/admin_, and _/admin/settings_, however it would
     * not be invoked for _/_, or _/posts_.
     */
    use(fn: NextHandleFunction): Server;
    use(fn: HandleFunction): Server;
    use(route: string, fn: NextHandleFunction): Server;
    use(route: string, fn: HandleFunction): Server;

    /**
     * Handle server requests, punting them down
     * the middleware stack.
     */
    handle(req: http.IncomingMessage, res: http.ServerResponse, next: Function): void;

    /**
     * Listen for connections.
     *
     * This method takes the same arguments
     * as node's `http.Server#listen()`.
     *
     * HTTP and HTTPS:
     *
     * If you run your application both as HTTP
     * and HTTPS you may wrap them individually,
     * since your Connect "server" is really just
     * a JavaScript `Function`.
     *
     *      var connect = require('connect')
     *        , http = require('http')
     *        , https = require('https');
     *
     *      var app = connect();
     *
     *      http.createServer(app).listen(80);
     *      https.createServer(options, app).listen(443);
     */
    listen(port: number, hostname?: string, backlog?: number, callback?: Function): http.Server;
    listen(port: number, hostname?: string, callback?: Function): http.Server;
    listen(path: string, callback?: Function): http.Server;
    listen(handle: any, listeningListener?: Function): http.Server;
  }
}
//#endregion
//#region ../../node_modules/.pnpm/http-proxy-3@1.22.0_patch_hash=d89dff5a0afc2cb277080ad056a3baf7feeeeac19144878abc17f4c91ad89095_ms@2.1.3/node_modules/http-proxy-3/dist/lib/http-proxy/index.d.ts
interface ProxyTargetDetailed {
  host: string;
  port: number;
  protocol?: string;
  hostname?: string;
  socketPath?: string;
  key?: string;
  passphrase?: string;
  pfx?: Buffer | string;
  cert?: string;
  ca?: string;
  ciphers?: string;
  secureProtocol?: string;
}
type ProxyType = "ws" | "web";
type ProxyTarget = ProxyTargetUrl | ProxyTargetDetailed;
type ProxyTargetUrl = URL | string | {
  port: number;
  host: string;
  protocol?: string;
};
type NormalizeProxyTarget<T$1 extends ProxyTargetUrl> = Exclude<T$1, string> | URL;
interface ServerOptions$3 {
  /** URL string to be parsed with the url module. */
  target?: ProxyTarget;
  /** URL string to be parsed with the url module or a URL object. */
  forward?: ProxyTargetUrl;
  /** Object to be passed to http(s).request. */
  agent?: any;
  /** Object to be passed to https.createServer(). */
  ssl?: any;
  /** If you want to proxy websockets. */
  ws?: boolean;
  /** Adds x- forward headers. */
  xfwd?: boolean;
  /** Verify SSL certificate. */
  secure?: boolean;
  /** Explicitly specify if we are proxying to another proxy. */
  toProxy?: boolean;
  /** Specify whether you want to prepend the target's path to the proxy path. */
  prependPath?: boolean;
  /** Specify whether you want to ignore the proxy path of the incoming request. */
  ignorePath?: boolean;
  /** Local interface string to bind for outgoing connections. */
  localAddress?: string;
  /** Changes the origin of the host header to the target URL. */
  changeOrigin?: boolean;
  /** specify whether you want to keep letter case of response header key */
  preserveHeaderKeyCase?: boolean;
  /** Basic authentication i.e. 'user:password' to compute an Authorization header. */
  auth?: string;
  /** Rewrites the location hostname on (301 / 302 / 307 / 308) redirects, Default: null. */
  hostRewrite?: string;
  /** Rewrites the location host/ port on (301 / 302 / 307 / 308) redirects based on requested host/ port.Default: false. */
  autoRewrite?: boolean;
  /** Rewrites the location protocol on (301 / 302 / 307 / 308) redirects to 'http' or 'https'.Default: null. */
  protocolRewrite?: string;
  /** rewrites domain of set-cookie headers. */
  cookieDomainRewrite?: false | string | {
    [oldDomain: string]: string;
  };
  /** rewrites path of set-cookie headers. Default: false */
  cookiePathRewrite?: false | string | {
    [oldPath: string]: string;
  };
  /** object with extra headers to be added to target requests. */
  headers?: {
    [header: string]: string | string[] | undefined;
  };
  /** Timeout (in milliseconds) when proxy receives no response from target. Default: 120000 (2 minutes) */
  proxyTimeout?: number;
  /** Timeout (in milliseconds) for incoming requests */
  timeout?: number;
  /** Specify whether you want to follow redirects. Default: false */
  followRedirects?: boolean;
  /** If set to true, none of the webOutgoing passes are called and it's your responsibility to appropriately return the response by listening and acting on the proxyRes event */
  selfHandleResponse?: boolean;
  /** Buffer */
  buffer?: Stream;
  /** Explicitly set the method type of the ProxyReq */
  method?: string;
  /**
   * Optionally override the trusted CA certificates.
   * This is passed to https.request.
   */
  ca?: string;
}
interface NormalizedServerOptions extends ServerOptions$3 {
  target?: NormalizeProxyTarget<ProxyTarget>;
  forward?: NormalizeProxyTarget<ProxyTargetUrl>;
}
type ErrorCallback<TIncomingMessage extends typeof http.IncomingMessage = typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse = typeof http.ServerResponse, TError = Error> = (err: TError, req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse> | net.Socket, target?: ProxyTargetUrl) => void;
type ProxyServerEventMap<TIncomingMessage extends typeof http.IncomingMessage = typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse = typeof http.ServerResponse, TError = Error> = {
  error: Parameters<ErrorCallback<TIncomingMessage, TServerResponse, TError>>;
  start: [req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse>, target: ProxyTargetUrl];
  open: [socket: net.Socket];
  proxyReq: [proxyReq: http.ClientRequest, req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse>, options: ServerOptions$3, socket: net.Socket];
  proxyRes: [proxyRes: InstanceType<TIncomingMessage>, req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse>];
  proxyReqWs: [proxyReq: http.ClientRequest, req: InstanceType<TIncomingMessage>, socket: net.Socket, options: ServerOptions$3, head: any];
  econnreset: [err: Error, req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse>, target: ProxyTargetUrl];
  end: [req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse>, proxyRes: InstanceType<TIncomingMessage>];
  close: [proxyRes: InstanceType<TIncomingMessage>, proxySocket: net.Socket, proxyHead: any];
};
type ProxyMethodArgs<TIncomingMessage extends typeof http.IncomingMessage = typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse = typeof http.ServerResponse, TError = Error> = {
  ws: [req: InstanceType<TIncomingMessage>, socket: any, head: any, ...args: [options?: ServerOptions$3, callback?: ErrorCallback<TIncomingMessage, TServerResponse, TError>] | [callback?: ErrorCallback<TIncomingMessage, TServerResponse, TError>]];
  web: [req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse>, ...args: [options: ServerOptions$3, callback?: ErrorCallback<TIncomingMessage, TServerResponse, TError>] | [callback?: ErrorCallback<TIncomingMessage, TServerResponse, TError>]];
};
type PassFunctions<TIncomingMessage extends typeof http.IncomingMessage = typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse = typeof http.ServerResponse, TError = Error> = {
  ws: (req: InstanceType<TIncomingMessage>, socket: net.Socket, options: NormalizedServerOptions, head: Buffer | undefined, server: ProxyServer<TIncomingMessage, TServerResponse, TError>, cb?: ErrorCallback<TIncomingMessage, TServerResponse, TError>) => unknown;
  web: (req: InstanceType<TIncomingMessage>, res: InstanceType<TServerResponse>, options: NormalizedServerOptions, head: Buffer | undefined, server: ProxyServer<TIncomingMessage, TServerResponse, TError>, cb?: ErrorCallback<TIncomingMessage, TServerResponse, TError>) => unknown;
};
declare class ProxyServer<TIncomingMessage extends typeof http.IncomingMessage = typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse = typeof http.ServerResponse, TError = Error> extends EventEmitter<ProxyServerEventMap<TIncomingMessage, TServerResponse, TError>> {
  /**
   * Used for proxying WS(S) requests
   * @param req - Client request.
   * @param socket - Client socket.
   * @param head - Client head.
   * @param options - Additional options.
   */
  readonly ws: (...args: ProxyMethodArgs<TIncomingMessage, TServerResponse, TError>["ws"]) => void;
  /**
   * Used for proxying regular HTTP(S) requests
   * @param req - Client request.
   * @param res - Client response.
   * @param options - Additional options.
   */
  readonly web: (...args: ProxyMethodArgs<TIncomingMessage, TServerResponse, TError>["web"]) => void;
  private options;
  private webPasses;
  private wsPasses;
  private _server?;
  /**
   * Creates the proxy server with specified options.
   * @param options - Config object passed to the proxy
   */
  constructor(options?: ServerOptions$3);
  /**
   * Creates the proxy server with specified options.
   * @param options Config object passed to the proxy
   * @returns Proxy object with handlers for `ws` and `web` requests
   */
  static createProxyServer<TIncomingMessage extends typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse, TError = Error>(options?: ServerOptions$3): ProxyServer<TIncomingMessage, TServerResponse, TError>;
  /**
   * Creates the proxy server with specified options.
   * @param options Config object passed to the proxy
   * @returns Proxy object with handlers for `ws` and `web` requests
   */
  static createServer<TIncomingMessage extends typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse, TError = Error>(options?: ServerOptions$3): ProxyServer<TIncomingMessage, TServerResponse, TError>;
  /**
   * Creates the proxy server with specified options.
   * @param options Config object passed to the proxy
   * @returns Proxy object with handlers for `ws` and `web` requests
   */
  static createProxy<TIncomingMessage extends typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse, TError = Error>(options?: ServerOptions$3): ProxyServer<TIncomingMessage, TServerResponse, TError>;
  createRightProxy: <PT extends ProxyType>(type: PT) => Function;
  onError: (err: TError) => void;
  /**
   * A function that wraps the object in a webserver, for your convenience
   * @param port - Port to listen on
   * @param hostname - The hostname to listen on
   */
  listen: (port: number, hostname?: string) => this;
  address: () => string | net.AddressInfo | null | undefined;
  /**
   * A function that closes the inner webserver and stops listening on given port
   */
  close: (cb?: Function) => void;
  before: <PT extends ProxyType>(type: PT, passName: string, cb: PassFunctions<TIncomingMessage, TServerResponse, TError>[PT]) => void;
  after: <PT extends ProxyType>(type: PT, passName: string, cb: PassFunctions<TIncomingMessage, TServerResponse, TError>[PT]) => void;
}
//#endregion
//#region ../../node_modules/.pnpm/http-proxy-3@1.22.0_patch_hash=d89dff5a0afc2cb277080ad056a3baf7feeeeac19144878abc17f4c91ad89095_ms@2.1.3/node_modules/http-proxy-3/dist/lib/http-proxy/passes/ws-incoming.d.ts
declare function numOpenSockets(): number;
declare namespace index_d_exports {
  export { ErrorCallback, ProxyServer, ProxyTarget, ProxyTargetUrl, ServerOptions$3 as ServerOptions, createProxyServer as createProxy, createProxyServer, createProxyServer as createServer, ProxyServer as default, numOpenSockets };
}
/**
 * Creates the proxy server.
 *
 * Examples:
 *
 *    httpProxy.createProxyServer({ .. }, 8000)
 *    // => '{ web: [Function], ws: [Function] ... }'
 *
 * @param {Object} Options Config object passed to the proxy
 *
 * @return {Object} Proxy Proxy object with handlers for `ws` and `web` requests
 *
 * @api public
 */
declare function createProxyServer<TIncomingMessage extends typeof http.IncomingMessage = typeof http.IncomingMessage, TServerResponse extends typeof http.ServerResponse = typeof http.ServerResponse, TError = Error>(options?: ServerOptions$3): ProxyServer<TIncomingMessage, TServerResponse, TError>;
//#endregion
//#region src/node/server/middlewares/proxy.d.ts
interface ProxyOptions extends ServerOptions$3 {
  /**
  * rewrite path
  */
  rewrite?: (path: string) => string;
  /**
  * configure the proxy server (e.g. listen to events)
  */
  configure?: (proxy: ProxyServer, options: ProxyOptions) => void;
  /**
  * webpack-dev-server style bypass function
  */
  bypass?: (req: http.IncomingMessage, res: http.ServerResponse | undefined, options: ProxyOptions) => void | null | undefined | false | string | Promise<void | null | undefined | boolean | string>;
  /**
  * rewrite the Origin header of a WebSocket request to match the target
  *
  * **Exercise caution as rewriting the Origin can leave the proxying open to [CSRF attacks](https://owasp.org/www-community/attacks/csrf).**
  */
  rewriteWsOrigin?: boolean | undefined;
}
//#endregion
//#region src/node/logger.d.ts
type LogType = "error" | "warn" | "info";
type LogLevel = LogType | "silent";
interface Logger {
  info(msg: string, options?: LogOptions): void;
  warn(msg: string, options?: LogOptions): void;
  warnOnce(msg: string, options?: LogOptions): void;
  error(msg: string, options?: LogErrorOptions): void;
  clearScreen(type: LogType): void;
  hasErrorLogged(error: Error | RollupError): boolean;
  hasWarned: boolean;
}
interface LogOptions {
  clear?: boolean;
  timestamp?: boolean;
  environment?: string;
}
interface LogErrorOptions extends LogOptions {
  error?: Error | RollupError | null;
}
interface LoggerOptions {
  prefix?: string;
  allowClearScreen?: boolean;
  customLogger?: Logger;
  console?: Console;
}
declare function createLogger(level?: LogLevel, options?: LoggerOptions): Logger;
//#endregion
//#region src/node/http.d.ts
interface CommonServerOptions {
  /**
  * Specify server port. Note if the port is already being used, Vite will
  * automatically try the next available port so this may not be the actual
  * port the server ends up listening on.
  */
  port?: number;
  /**
  * If enabled, vite will exit if specified port is already in use
  */
  strictPort?: boolean;
  /**
  * Specify which IP addresses the server should listen on.
  * Set to 0.0.0.0 to listen on all addresses, including LAN and public addresses.
  */
  host?: string | boolean;
  /**
  * The hostnames that Vite is allowed to respond to.
  * `localhost` and subdomains under `.localhost` and all IP addresses are allowed by default.
  * When using HTTPS, this check is skipped.
  *
  * If a string starts with `.`, it will allow that hostname without the `.` and all subdomains under the hostname.
  * For example, `.example.com` will allow `example.com`, `foo.example.com`, and `foo.bar.example.com`.
  *
  * If set to `true`, the server is allowed to respond to requests for any hosts.
  * This is not recommended as it will be vulnerable to DNS rebinding attacks.
  */
  allowedHosts?: string[] | true;
  /**
  * Enable TLS + HTTP/2.
  * Note: this downgrades to TLS only when the proxy option is also used.
  */
  https?: HttpsServerOptions;
  /**
  * Open browser window on startup
  */
  open?: boolean | string;
  /**
  * Configure custom proxy rules for the dev server. Expects an object
  * of `{ key: options }` pairs.
  * Uses [`http-proxy-3`](https://github.com/sagemathinc/http-proxy-3).
  * Full options [here](https://github.com/sagemathinc/http-proxy-3#options).
  *
  * Example `vite.config.js`:
  * ``` js
  * module.exports = {
  *   proxy: {
  *     // string shorthand: /foo -> http://localhost:4567/foo
  *     '/foo': 'http://localhost:4567',
  *     // with options
  *     '/api': {
  *       target: 'http://jsonplaceholder.typicode.com',
  *       changeOrigin: true,
  *       rewrite: path => path.replace(/^\/api/, '')
  *     }
  *   }
  * }
  * ```
  */
  proxy?: Record<string, string | ProxyOptions>;
  /**
  * Configure CORS for the dev server.
  * Uses https://github.com/expressjs/cors.
  *
  * When enabling this option, **we recommend setting a specific value
  * rather than `true`** to avoid exposing the source code to untrusted origins.
  *
  * Set to `true` to allow all methods from any origin, or configure separately
  * using an object.
  *
  * @default false
  */
  cors?: CorsOptions | boolean;
  /**
  * Specify server response headers.
  */
  headers?: OutgoingHttpHeaders;
}
/**
* https://github.com/expressjs/cors#configuration-options
*/
interface CorsOptions {
  /**
  * Configures the Access-Control-Allow-Origin CORS header.
  *
  * **We recommend setting a specific value rather than
  * `true`** to avoid exposing the source code to untrusted origins.
  */
  origin?: CorsOrigin | ((origin: string | undefined, cb: (err: Error, origins: CorsOrigin) => void) => void);
  methods?: string | string[];
  allowedHeaders?: string | string[];
  exposedHeaders?: string | string[];
  credentials?: boolean;
  maxAge?: number;
  preflightContinue?: boolean;
  optionsSuccessStatus?: number;
}
type CorsOrigin = boolean | string | RegExp | (string | RegExp)[];
//#endregion
//#region src/node/typeUtils.d.ts
type RequiredExceptFor<T$1, K$1 extends keyof T$1> = Pick<T$1, K$1> & Required<Omit<T$1, K$1>>;
//#endregion
//#region src/node/preview.d.ts
interface PreviewOptions extends CommonServerOptions {}
interface ResolvedPreviewOptions extends RequiredExceptFor<PreviewOptions, "host" | "https" | "proxy"> {}
interface PreviewServer {
  /**
  * The resolved vite config object
  */
  config: ResolvedConfig;
  /**
  * Stop the server.
  */
  close(): Promise<void>;
  /**
  * A connect app instance.
  * - Can be used to attach custom middlewares to the preview server.
  * - Can also be used as the handler function of a custom http server
  *   or as a middleware in any connect-style Node.js frameworks
  *
  * https://github.com/senchalabs/connect#use-middleware
  */
  middlewares: Connect.Server;
  /**
  * native Node http server instance
  */
  httpServer: HttpServer;
  /**
  * The resolved urls Vite prints on the CLI (URL-encoded). Returns `null`
  * if the server is not listening on any port.
  */
  resolvedUrls: ResolvedServerUrls | null;
  /**
  * Print server urls
  */
  printUrls(): void;
  /**
  * Bind CLI shortcuts
  */
  bindCLIShortcuts(options?: BindCLIShortcutsOptions<PreviewServer>): void;
}
type PreviewServerHook = (this: MinimalPluginContextWithoutEnvironment, server: PreviewServer) => (() => void) | void | Promise<(() => void) | void>;
/**
* Starts the Vite server in preview mode, to simulate a production deployment
*/
declare function preview(inlineConfig?: InlineConfig): Promise<PreviewServer>;
//#endregion
//#region src/node/shortcuts.d.ts
type BindCLIShortcutsOptions<Server$3 = ViteDevServer | PreviewServer> = {
  /**
  * Print a one-line shortcuts "help" hint to the terminal
  */
  print?: boolean;
  /**
  * Custom shortcuts to run when a key is pressed. These shortcuts take priority
  * over the default shortcuts if they have the same keys (except the `h` key).
  * To disable a default shortcut, define the same key but with `action: undefined`.
  */
  customShortcuts?: CLIShortcut<Server$3>[];
};
type CLIShortcut<Server$3 = ViteDevServer | PreviewServer> = {
  key: string;
  description: string;
  action?(server: Server$3): void | Promise<void>;
};
//#endregion
//#region src/node/baseEnvironment.d.ts
declare class PartialEnvironment {
  name: string;
  getTopLevelConfig(): ResolvedConfig;
  config: ResolvedConfig & ResolvedEnvironmentOptions;
  logger: Logger;
  constructor(name: string, topLevelConfig: ResolvedConfig, options?: ResolvedEnvironmentOptions);
}
declare class BaseEnvironment extends PartialEnvironment {
  get plugins(): readonly Plugin[];
  constructor(name: string, config: ResolvedConfig, options?: ResolvedEnvironmentOptions);
}
/**
* This class discourages users from inversely checking the `mode`
* to determine the type of environment, e.g.
*
* ```js
* const isDev = environment.mode !== 'build' // bad
* const isDev = environment.mode === 'dev'   // good
* ```
*
* You should also not check against `"unknown"` specifically. It's
* a placeholder for more possible environment types.
*/
declare class UnknownEnvironment extends BaseEnvironment {
  mode: "unknown";
}
//#endregion
//#region src/node/optimizer/scan.d.ts
declare class ScanEnvironment extends BaseEnvironment {
  mode: "scan";
  get pluginContainer(): EnvironmentPluginContainer;
  init(): Promise<void>;
}
//#endregion
//#region src/node/optimizer/index.d.ts
type ExportsData = {
  hasModuleSyntax: boolean;
  exports: readonly string[];
  jsxLoader?: boolean;
};
interface DepsOptimizer {
  init: () => Promise<void>;
  metadata: DepOptimizationMetadata;
  scanProcessing?: Promise<void>;
  registerMissingImport: (id: string, resolved: string) => OptimizedDepInfo;
  run: () => void;
  isOptimizedDepFile: (id: string) => boolean;
  isOptimizedDepUrl: (url: string) => boolean;
  getOptimizedDepId: (depInfo: OptimizedDepInfo) => string;
  close: () => Promise<void>;
  options: DepOptimizationOptions;
}
interface DepOptimizationConfig {
  /**
  * Force optimize listed dependencies (must be resolvable import paths,
  * cannot be globs).
  */
  include?: string[];
  /**
  * Do not optimize these dependencies (must be resolvable import paths,
  * cannot be globs).
  */
  exclude?: string[];
  /**
  * Forces ESM interop when importing these dependencies. Some legacy
  * packages advertise themselves as ESM but use `require` internally
  * @experimental
  */
  needsInterop?: string[];
  /**
  * Options to pass to esbuild during the dep scanning and optimization
  *
  * Certain options are omitted since changing them would not be compatible
  * with Vite's dep optimization.
  *
  * - `external` is also omitted, use Vite's `optimizeDeps.exclude` option
  * - `plugins` are merged with Vite's dep plugin
  *
  * https://esbuild.github.io/api
  */
  esbuildOptions?: Omit<esbuild_BuildOptions, "bundle" | "entryPoints" | "external" | "write" | "watch" | "outdir" | "outfile" | "outbase" | "outExtension" | "metafile">;
  /**
  * List of file extensions that can be optimized. A corresponding esbuild
  * plugin must exist to handle the specific extension.
  *
  * By default, Vite can optimize `.mjs`, `.js`, `.ts`, and `.mts` files. This option
  * allows specifying additional extensions.
  *
  * @experimental
  */
  extensions?: string[];
  /**
  * Deps optimization during build was removed in Vite 5.1. This option is
  * now redundant and will be removed in a future version. Switch to using
  * `optimizeDeps.noDiscovery` and an empty or undefined `optimizeDeps.include`.
  * true or 'dev' disables the optimizer, false or 'build' leaves it enabled.
  * @default 'build'
  * @deprecated
  * @experimental
  */
  disabled?: boolean | "build" | "dev";
  /**
  * Automatic dependency discovery. When `noDiscovery` is true, only dependencies
  * listed in `include` will be optimized. The scanner isn't run for cold start
  * in this case. CJS-only dependencies must be present in `include` during dev.
  * @default false
  */
  noDiscovery?: boolean;
  /**
  * When enabled, it will hold the first optimized deps results until all static
  * imports are crawled on cold start. This avoids the need for full-page reloads
  * when new dependencies are discovered and they trigger the generation of new
  * common chunks. If all dependencies are found by the scanner plus the explicitly
  * defined ones in `include`, it is better to disable this option to let the
  * browser process more requests in parallel.
  * @default true
  * @experimental
  */
  holdUntilCrawlEnd?: boolean;
  /**
  * When enabled, Vite will not throw an error when an outdated optimized
  * dependency is requested. Enabling this option may cause a single module
  * to have a multiple reference.
  * @default false
  * @experimental
  */
  ignoreOutdatedRequests?: boolean;
}
type DepOptimizationOptions = DepOptimizationConfig & {
  /**
  * By default, Vite will crawl your `index.html` to detect dependencies that
  * need to be pre-bundled. If `build.rollupOptions.input` is specified, Vite
  * will crawl those entry points instead.
  *
  * If neither of these fit your needs, you can specify custom entries using
  * this option - the value should be a tinyglobby pattern or array of patterns
  * (https://github.com/SuperchupuDev/tinyglobby) that are relative from
  * vite project root. This will overwrite default entries inference.
  */
  entries?: string | string[];
  /**
  * Force dep pre-optimization regardless of whether deps have changed.
  * @experimental
  */
  force?: boolean;
};
interface OptimizedDepInfo {
  id: string;
  file: string;
  src?: string;
  needsInterop?: boolean;
  browserHash?: string;
  fileHash?: string;
  /**
  * During optimization, ids can still be resolved to their final location
  * but the bundles may not yet be saved to disk
  */
  processing?: Promise<void>;
  /**
  * ExportData cache, discovered deps will parse the src entry to get exports
  * data used both to define if interop is needed and when pre-bundling
  */
  exportsData?: Promise<ExportsData>;
}
interface DepOptimizationMetadata {
  /**
  * The main hash is determined by user config and dependency lockfiles.
  * This is checked on server startup to avoid unnecessary re-bundles.
  */
  hash: string;
  /**
  * This hash is determined by dependency lockfiles.
  * This is checked on server startup to avoid unnecessary re-bundles.
  */
  lockfileHash: string;
  /**
  * This hash is determined by user config.
  * This is checked on server startup to avoid unnecessary re-bundles.
  */
  configHash: string;
  /**
  * The browser hash is determined by the main hash plus additional dependencies
  * discovered at runtime. This is used to invalidate browser requests to
  * optimized deps.
  */
  browserHash: string;
  /**
  * Metadata for each already optimized dependency
  */
  optimized: Record<string, OptimizedDepInfo>;
  /**
  * Metadata for non-entry optimized chunks and dynamic imports
  */
  chunks: Record<string, OptimizedDepInfo>;
  /**
  * Metadata for each newly discovered dependency after processing
  */
  discovered: Record<string, OptimizedDepInfo>;
  /**
  * OptimizedDepInfo list
  */
  depInfoList: OptimizedDepInfo[];
}
/**
* Scan and optimize dependencies within a project.
* Used by Vite CLI when running `vite optimize`.
*
* @deprecated the optimization process runs automatically and does not need to be called
*/
declare function optimizeDeps(config: ResolvedConfig, force?: boolean | undefined, asCommand?: boolean): Promise<DepOptimizationMetadata>;
//#endregion
//#region src/node/server/transformRequest.d.ts
interface TransformResult {
  code: string;
  map: SourceMap | {
    mappings: "";
  } | null;
  ssr?: boolean;
  etag?: string;
  deps?: string[];
  dynamicDeps?: string[];
}
interface TransformOptions {
  /**
  * @deprecated inferred from environment
  */
  ssr?: boolean;
}
interface TransformOptionsInternal {}
//#endregion
//#region src/node/server/moduleGraph.d.ts
declare class EnvironmentModuleNode {
  environment: string;
  /**
  * Public served url path, starts with /
  */
  url: string;
  /**
  * Resolved file system path + query
  */
  id: string | null;
  file: string | null;
  type: "js" | "css" | "asset";
  info?: ModuleInfo;
  meta?: Record<string, any>;
  importers: Set<EnvironmentModuleNode>;
  importedModules: Set<EnvironmentModuleNode>;
  acceptedHmrDeps: Set<EnvironmentModuleNode>;
  acceptedHmrExports: Set<string> | null;
  importedBindings: Map<string, Set<string>> | null;
  isSelfAccepting?: boolean;
  transformResult: TransformResult | null;
  ssrModule: Record<string, any> | null;
  ssrError: Error | null;
  lastHMRTimestamp: number;
  lastInvalidationTimestamp: number;
  /**
  * @param setIsSelfAccepting - set `false` to set `isSelfAccepting` later. e.g. #7870
  */
  constructor(url: string, environment: string, setIsSelfAccepting?: boolean);
}
type ResolvedUrl = [url: string, resolvedId: string, meta: object | null | undefined];
declare class EnvironmentModuleGraph {
  environment: string;
  urlToModuleMap: Map<string, EnvironmentModuleNode>;
  idToModuleMap: Map<string, EnvironmentModuleNode>;
  etagToModuleMap: Map<string, EnvironmentModuleNode>;
  fileToModulesMap: Map<string, Set<EnvironmentModuleNode>>;
  constructor(environment: string, resolveId: (url: string) => Promise<PartialResolvedId | null>);
  getModuleByUrl(rawUrl: string): Promise<EnvironmentModuleNode | undefined>;
  getModuleById(id: string): EnvironmentModuleNode | undefined;
  getModulesByFile(file: string): Set<EnvironmentModuleNode> | undefined;
  onFileChange(file: string): void;
  onFileDelete(file: string): void;
  invalidateModule(mod: EnvironmentModuleNode, seen?: Set<EnvironmentModuleNode>, timestamp?: number, isHmr?: boolean, softInvalidate?: boolean): void;
  invalidateAll(): void;
  /**
  * Update the module graph based on a module's updated imports information
  * If there are dependencies that no longer have any importers, they are
  * returned as a Set.
  *
  * @param staticImportedUrls Subset of `importedModules` where they're statically imported in code.
  *   This is only used for soft invalidations so `undefined` is fine but may cause more runtime processing.
  */
  updateModuleInfo(mod: EnvironmentModuleNode, importedModules: Set<string | EnvironmentModuleNode>, importedBindings: Map<string, Set<string>> | null, acceptedModules: Set<string | EnvironmentModuleNode>, acceptedExports: Set<string> | null, isSelfAccepting: boolean, staticImportedUrls?: Set<string>): Promise<Set<EnvironmentModuleNode> | undefined>;
  ensureEntryFromUrl(rawUrl: string, setIsSelfAccepting?: boolean): Promise<EnvironmentModuleNode>;
  createFileOnlyEntry(file: string): EnvironmentModuleNode;
  resolveUrl(url: string): Promise<ResolvedUrl>;
  updateModuleTransformResult(mod: EnvironmentModuleNode, result: TransformResult | null): void;
  getModuleByEtag(etag: string): EnvironmentModuleNode | undefined;
}
//#endregion
//#region src/node/server/mixedModuleGraph.d.ts
declare class ModuleNode {
  _moduleGraph: ModuleGraph;
  _clientModule: EnvironmentModuleNode | undefined;
  _ssrModule: EnvironmentModuleNode | undefined;
  constructor(moduleGraph: ModuleGraph, clientModule?: EnvironmentModuleNode, ssrModule?: EnvironmentModuleNode);
  _get<T$1 extends keyof EnvironmentModuleNode>(prop: T$1): EnvironmentModuleNode[T$1];
  _set<T$1 extends keyof EnvironmentModuleNode>(prop: T$1, value: EnvironmentModuleNode[T$1]): void;
  _wrapModuleSet(prop: ModuleSetNames, module: EnvironmentModuleNode | undefined): Set<ModuleNode>;
  _getModuleSetUnion(prop: "importedModules" | "importers"): Set<ModuleNode>;
  _getModuleInfoUnion(prop: "info"): ModuleInfo | undefined;
  _getModuleObjectUnion(prop: "meta"): Record<string, any> | undefined;
  get url(): string;
  set url(value: string);
  get id(): string | null;
  set id(value: string | null);
  get file(): string | null;
  set file(value: string | null);
  get type(): "js" | "css" | "asset";
  get info(): ModuleInfo | undefined;
  get meta(): Record<string, any> | undefined;
  get importers(): Set<ModuleNode>;
  get clientImportedModules(): Set<ModuleNode>;
  get ssrImportedModules(): Set<ModuleNode>;
  get importedModules(): Set<ModuleNode>;
  get acceptedHmrDeps(): Set<ModuleNode>;
  get acceptedHmrExports(): Set<string> | null;
  get importedBindings(): Map<string, Set<string>> | null;
  get isSelfAccepting(): boolean | undefined;
  get transformResult(): TransformResult | null;
  set transformResult(value: TransformResult | null);
  get ssrTransformResult(): TransformResult | null;
  set ssrTransformResult(value: TransformResult | null);
  get ssrModule(): Record<string, any> | null;
  get ssrError(): Error | null;
  get lastHMRTimestamp(): number;
  set lastHMRTimestamp(value: number);
  get lastInvalidationTimestamp(): number;
  get invalidationState(): TransformResult | "HARD_INVALIDATED" | undefined;
  get ssrInvalidationState(): TransformResult | "HARD_INVALIDATED" | undefined;
}
declare class ModuleGraph {
  urlToModuleMap: Map<string, ModuleNode>;
  idToModuleMap: Map<string, ModuleNode>;
  etagToModuleMap: Map<string, ModuleNode>;
  fileToModulesMap: Map<string, Set<ModuleNode>>;
  private moduleNodeCache;
  constructor(moduleGraphs: {
    client: () => EnvironmentModuleGraph;
    ssr: () => EnvironmentModuleGraph;
  });
  getModuleById(id: string): ModuleNode | undefined;
  getModuleByUrl(url: string, _ssr?: boolean): Promise<ModuleNode | undefined>;
  getModulesByFile(file: string): Set<ModuleNode> | undefined;
  onFileChange(file: string): void;
  onFileDelete(file: string): void;
  invalidateModule(mod: ModuleNode, seen?: Set<ModuleNode>, timestamp?: number, isHmr?: boolean, softInvalidate?: boolean): void;
  invalidateAll(): void;
  ensureEntryFromUrl(rawUrl: string, ssr?: boolean, setIsSelfAccepting?: boolean): Promise<ModuleNode>;
  createFileOnlyEntry(file: string): ModuleNode;
  resolveUrl(url: string, ssr?: boolean): Promise<ResolvedUrl>;
  updateModuleTransformResult(mod: ModuleNode, result: TransformResult | null, ssr?: boolean): void;
  getModuleByEtag(etag: string): ModuleNode | undefined;
  getBackwardCompatibleBrowserModuleNode(clientModule: EnvironmentModuleNode): ModuleNode;
  getBackwardCompatibleServerModuleNode(ssrModule: EnvironmentModuleNode): ModuleNode;
  getBackwardCompatibleModuleNode(mod: EnvironmentModuleNode): ModuleNode;
  getBackwardCompatibleModuleNodeDual(clientModule?: EnvironmentModuleNode, ssrModule?: EnvironmentModuleNode): ModuleNode;
}
type ModuleSetNames = "acceptedHmrDeps" | "importedModules";
//#endregion
//#region src/node/server/hmr.d.ts
interface HmrOptions {
  protocol?: string;
  host?: string;
  port?: number;
  clientPort?: number;
  path?: string;
  timeout?: number;
  overlay?: boolean;
  server?: HttpServer;
}
interface HotUpdateOptions {
  type: "create" | "update" | "delete";
  file: string;
  timestamp: number;
  modules: Array<EnvironmentModuleNode>;
  read: () => string | Promise<string>;
  server: ViteDevServer;
}
interface HmrContext {
  file: string;
  timestamp: number;
  modules: Array<ModuleNode>;
  read: () => string | Promise<string>;
  server: ViteDevServer;
}
interface HotChannelClient {
  send(payload: hmrPayload_HotPayload): void;
}
type HotChannelListener<T$1 extends string = string> = (data: InferCustomEventPayload<T$1>, client: HotChannelClient) => void;
interface HotChannel<Api = any> {
  /**
  * Broadcast events to all clients
  */
  send?(payload: hmrPayload_HotPayload): void;
  /**
  * Handle custom event emitted by `import.meta.hot.send`
  */
  on?<T$1 extends string>(event: T$1, listener: HotChannelListener<T$1>): void;
  on?(event: "connection", listener: () => void): void;
  /**
  * Unregister event listener
  */
  off?(event: string, listener: Function): void;
  /**
  * Start listening for messages
  */
  listen?(): void;
  /**
  * Disconnect all clients, called when server is closed or restarted.
  */
  close?(): Promise<unknown> | void;
  api?: Api;
}
interface NormalizedHotChannelClient {
  /**
  * Send event to the client
  */
  send(payload: hmrPayload_HotPayload): void;
  /**
  * Send custom event
  */
  send(event: string, payload?: hmrPayload_CustomPayload["data"]): void;
}
interface NormalizedHotChannel<Api = any> {
  /**
  * Broadcast events to all clients
  */
  send(payload: hmrPayload_HotPayload): void;
  /**
  * Send custom event
  */
  send<T$1 extends string>(event: T$1, payload?: InferCustomEventPayload<T$1>): void;
  /**
  * Handle custom event emitted by `import.meta.hot.send`
  */
  on<T$1 extends string>(event: T$1, listener: (data: InferCustomEventPayload<T$1>, client: NormalizedHotChannelClient) => void): void;
  /**
  * @deprecated use `vite:client:connect` event instead
  */
  on(event: "connection", listener: () => void): void;
  /**
  * Unregister event listener
  */
  off(event: string, listener: Function): void;
  handleInvoke(payload: hmrPayload_HotPayload): Promise<{
    result: any;
  } | {
    error: any;
  }>;
  /**
  * Start listening for messages
  */
  listen(): void;
  /**
  * Disconnect all clients, called when server is closed or restarted.
  */
  close(): Promise<unknown> | void;
  api?: Api;
}
type ServerHotChannelApi = {
  innerEmitter: EventEmitter;
  outsideEmitter: EventEmitter;
};
type ServerHotChannel = HotChannel<ServerHotChannelApi>;
type NormalizedServerHotChannel = NormalizedHotChannel<ServerHotChannelApi>;
declare function createServerHotChannel(): ServerHotChannel;
//#endregion
//#region src/types/ws.d.ts
// WebSocket socket.
declare class WebSocket extends EventEmitter {
  /** The connection is not yet open. */
  static readonly CONNECTING: 0;
  /** The connection is open and ready to communicate. */
  static readonly OPEN: 1;
  /** The connection is in the process of closing. */
  static readonly CLOSING: 2;
  /** The connection is closed. */
  static readonly CLOSED: 3;
  binaryType: 'nodebuffer' | 'arraybuffer' | 'fragments';
  readonly bufferedAmount: number;
  readonly extensions: string;
  /** Indicates whether the websocket is paused */
  readonly isPaused: boolean;
  readonly protocol: string;
  /** The current state of the connection */
  readonly readyState: typeof WebSocket.CONNECTING | typeof WebSocket.OPEN | typeof WebSocket.CLOSING | typeof WebSocket.CLOSED;
  readonly url: string;

  /** The connection is not yet open. */
  readonly CONNECTING: 0;
  /** The connection is open and ready to communicate. */
  readonly OPEN: 1;
  /** The connection is in the process of closing. */
  readonly CLOSING: 2;
  /** The connection is closed. */
  readonly CLOSED: 3;
  onopen: ((event: WebSocket.Event) => void) | null;
  onerror: ((event: WebSocket.ErrorEvent) => void) | null;
  onclose: ((event: WebSocket.CloseEvent) => void) | null;
  onmessage: ((event: WebSocket.MessageEvent) => void) | null;
  constructor(address: null);
  constructor(address: string | url_URL, options?: WebSocket.ClientOptions | ClientRequestArgs);
  constructor(address: string | url_URL, protocols?: string | string[], options?: WebSocket.ClientOptions | ClientRequestArgs);
  close(code?: number, data?: string | Buffer): void;
  ping(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
  pong(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
  send(data: any, cb?: (err?: Error) => void): void;
  send(data: any, options: {
    mask?: boolean | undefined;
    binary?: boolean | undefined;
    compress?: boolean | undefined;
    fin?: boolean | undefined;
  }, cb?: (err?: Error) => void): void;
  terminate(): void;

  /**
   * Pause the websocket causing it to stop emitting events. Some events can still be
   * emitted after this is called, until all buffered data is consumed. This method
   * is a noop if the ready state is `CONNECTING` or `CLOSED`.
   */
  pause(): void;
  /**
   * Make a paused socket resume emitting events. This method is a noop if the ready
   * state is `CONNECTING` or `CLOSED`.
   */
  resume(): void;

  // HTML5 WebSocket events
  addEventListener(method: 'message', cb: (event: WebSocket.MessageEvent) => void, options?: WebSocket.EventListenerOptions): void;
  addEventListener(method: 'close', cb: (event: WebSocket.CloseEvent) => void, options?: WebSocket.EventListenerOptions): void;
  addEventListener(method: 'error', cb: (event: WebSocket.ErrorEvent) => void, options?: WebSocket.EventListenerOptions): void;
  addEventListener(method: 'open', cb: (event: WebSocket.Event) => void, options?: WebSocket.EventListenerOptions): void;
  removeEventListener(method: 'message', cb: (event: WebSocket.MessageEvent) => void): void;
  removeEventListener(method: 'close', cb: (event: WebSocket.CloseEvent) => void): void;
  removeEventListener(method: 'error', cb: (event: WebSocket.ErrorEvent) => void): void;
  removeEventListener(method: 'open', cb: (event: WebSocket.Event) => void): void;

  // Events
  on(event: 'close', listener: (this: WebSocket, code: number, reason: Buffer) => void): this;
  on(event: 'error', listener: (this: WebSocket, err: Error) => void): this;
  on(event: 'upgrade', listener: (this: WebSocket, request: http.IncomingMessage) => void): this;
  on(event: 'message', listener: (this: WebSocket, data: WebSocket.RawData, isBinary: boolean) => void): this;
  on(event: 'open', listener: (this: WebSocket) => void): this;
  on(event: 'ping' | 'pong', listener: (this: WebSocket, data: Buffer) => void): this;
  on(event: 'unexpected-response', listener: (this: WebSocket, request: ClientRequest, response: http.IncomingMessage) => void): this;
  on(event: string | symbol, listener: (this: WebSocket, ...args: any[]) => void): this;
  once(event: 'close', listener: (this: WebSocket, code: number, reason: Buffer) => void): this;
  once(event: 'error', listener: (this: WebSocket, err: Error) => void): this;
  once(event: 'upgrade', listener: (this: WebSocket, request: http.IncomingMessage) => void): this;
  once(event: 'message', listener: (this: WebSocket, data: WebSocket.RawData, isBinary: boolean) => void): this;
  once(event: 'open', listener: (this: WebSocket) => void): this;
  once(event: 'ping' | 'pong', listener: (this: WebSocket, data: Buffer) => void): this;
  once(event: 'unexpected-response', listener: (this: WebSocket, request: ClientRequest, response: http.IncomingMessage) => void): this;
  once(event: string | symbol, listener: (this: WebSocket, ...args: any[]) => void): this;
  off(event: 'close', listener: (this: WebSocket, code: number, reason: Buffer) => void): this;
  off(event: 'error', listener: (this: WebSocket, err: Error) => void): this;
  off(event: 'upgrade', listener: (this: WebSocket, request: http.IncomingMessage) => void): this;
  off(event: 'message', listener: (this: WebSocket, data: WebSocket.RawData, isBinary: boolean) => void): this;
  off(event: 'open', listener: (this: WebSocket) => void): this;
  off(event: 'ping' | 'pong', listener: (this: WebSocket, data: Buffer) => void): this;
  off(event: 'unexpected-response', listener: (this: WebSocket, request: ClientRequest, response: http.IncomingMessage) => void): this;
  off(event: string | symbol, listener: (this: WebSocket, ...args: any[]) => void): this;
  addListener(event: 'close', listener: (code: number, reason: Buffer) => void): this;
  addListener(event: 'error', listener: (err: Error) => void): this;
  addListener(event: 'upgrade', listener: (request: http.IncomingMessage) => void): this;
  addListener(event: 'message', listener: (data: WebSocket.RawData, isBinary: boolean) => void): this;
  addListener(event: 'open', listener: () => void): this;
  addListener(event: 'ping' | 'pong', listener: (data: Buffer) => void): this;
  addListener(event: 'unexpected-response', listener: (request: ClientRequest, response: http.IncomingMessage) => void): this;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;
  removeListener(event: 'close', listener: (code: number, reason: Buffer) => void): this;
  removeListener(event: 'error', listener: (err: Error) => void): this;
  removeListener(event: 'upgrade', listener: (request: http.IncomingMessage) => void): this;
  removeListener(event: 'message', listener: (data: WebSocket.RawData, isBinary: boolean) => void): this;
  removeListener(event: 'open', listener: () => void): this;
  removeListener(event: 'ping' | 'pong', listener: (data: Buffer) => void): this;
  removeListener(event: 'unexpected-response', listener: (request: ClientRequest, response: http.IncomingMessage) => void): this;
  removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
}
declare const WebSocketAlias: typeof WebSocket;
interface WebSocketAlias extends WebSocket {}
declare namespace WebSocket {
  /**
   * Data represents the raw message payload received over the WebSocket.
   */
  type RawData = Buffer | ArrayBuffer | Buffer[];

  /**
   * Data represents the message payload received over the WebSocket.
   */
  type Data = string | Buffer | ArrayBuffer | Buffer[];

  /**
   * CertMeta represents the accepted types for certificate & key data.
   */
  type CertMeta = string | string[] | Buffer | Buffer[];

  /**
   * VerifyClientCallbackSync is a synchronous callback used to inspect the
   * incoming message. The return value (boolean) of the function determines
   * whether or not to accept the handshake.
   */
  type VerifyClientCallbackSync = (info: {
    origin: string;
    secure: boolean;
    req: http.IncomingMessage;
  }) => boolean;

  /**
   * VerifyClientCallbackAsync is an asynchronous callback used to inspect the
   * incoming message. The return value (boolean) of the function determines
   * whether or not to accept the handshake.
   */
  type VerifyClientCallbackAsync = (info: {
    origin: string;
    secure: boolean;
    req: http.IncomingMessage;
  }, callback: (res: boolean, code?: number, message?: string, headers?: OutgoingHttpHeaders) => void) => void;
  interface ClientOptions extends SecureContextOptions {
    protocol?: string | undefined;
    followRedirects?: boolean | undefined;
    generateMask?(mask: Buffer): void;
    handshakeTimeout?: number | undefined;
    maxRedirects?: number | undefined;
    perMessageDeflate?: boolean | PerMessageDeflateOptions | undefined;
    localAddress?: string | undefined;
    protocolVersion?: number | undefined;
    headers?: {
      [key: string]: string;
    } | undefined;
    origin?: string | undefined;
    agent?: Agent | undefined;
    host?: string | undefined;
    family?: number | undefined;
    checkServerIdentity?(servername: string, cert: CertMeta): boolean;
    rejectUnauthorized?: boolean | undefined;
    maxPayload?: number | undefined;
    skipUTF8Validation?: boolean | undefined;
  }
  interface PerMessageDeflateOptions {
    serverNoContextTakeover?: boolean | undefined;
    clientNoContextTakeover?: boolean | undefined;
    serverMaxWindowBits?: number | undefined;
    clientMaxWindowBits?: number | undefined;
    zlibDeflateOptions?: {
      flush?: number | undefined;
      finishFlush?: number | undefined;
      chunkSize?: number | undefined;
      windowBits?: number | undefined;
      level?: number | undefined;
      memLevel?: number | undefined;
      strategy?: number | undefined;
      dictionary?: Buffer | Buffer[] | DataView | undefined;
      info?: boolean | undefined;
    } | undefined;
    zlibInflateOptions?: ZlibOptions | undefined;
    threshold?: number | undefined;
    concurrencyLimit?: number | undefined;
  }
  interface Event {
    type: string;
    target: WebSocket;
  }
  interface ErrorEvent {
    error: any;
    message: string;
    type: string;
    target: WebSocket;
  }
  interface CloseEvent {
    wasClean: boolean;
    code: number;
    reason: string;
    type: string;
    target: WebSocket;
  }
  interface MessageEvent {
    data: Data;
    type: string;
    target: WebSocket;
  }
  interface EventListenerOptions {
    once?: boolean | undefined;
  }
  interface ServerOptions {
    host?: string | undefined;
    port?: number | undefined;
    backlog?: number | undefined;
    server?: http.Server | HttpsServer | undefined;
    verifyClient?: VerifyClientCallbackAsync | VerifyClientCallbackSync | undefined;
    handleProtocols?: (protocols: Set<string>, request: http.IncomingMessage) => string | false;
    path?: string | undefined;
    noServer?: boolean | undefined;
    clientTracking?: boolean | undefined;
    perMessageDeflate?: boolean | PerMessageDeflateOptions | undefined;
    maxPayload?: number | undefined;
    skipUTF8Validation?: boolean | undefined;
    WebSocket?: typeof WebSocket.WebSocket | undefined;
  }
  interface AddressInfo {
    address: string;
    family: string;
    port: number;
  }

  // WebSocket Server
  class Server<T$1 extends WebSocket = WebSocket> extends EventEmitter {
    options: ServerOptions;
    path: string;
    clients: Set<T$1>;
    constructor(options?: ServerOptions, callback?: () => void);
    address(): AddressInfo | string;
    close(cb?: (err?: Error) => void): void;
    handleUpgrade(request: http.IncomingMessage, socket: Duplex, upgradeHead: Buffer, callback: (client: T$1, request: http.IncomingMessage) => void): void;
    shouldHandle(request: http.IncomingMessage): boolean | Promise<boolean>;

    // Events
    on(event: 'connection', cb: (this: Server<T$1>, socket: T$1, request: http.IncomingMessage) => void): this;
    on(event: 'error', cb: (this: Server<T$1>, error: Error) => void): this;
    on(event: 'headers', cb: (this: Server<T$1>, headers: string[], request: http.IncomingMessage) => void): this;
    on(event: 'close' | 'listening', cb: (this: Server<T$1>) => void): this;
    on(event: string | symbol, listener: (this: Server<T$1>, ...args: any[]) => void): this;
    once(event: 'connection', cb: (this: Server<T$1>, socket: T$1, request: http.IncomingMessage) => void): this;
    once(event: 'error', cb: (this: Server<T$1>, error: Error) => void): this;
    once(event: 'headers', cb: (this: Server<T$1>, headers: string[], request: http.IncomingMessage) => void): this;
    once(event: 'close' | 'listening', cb: (this: Server<T$1>) => void): this;
    once(event: string | symbol, listener: (this: Server<T$1>, ...args: any[]) => void): this;
    off(event: 'connection', cb: (this: Server<T$1>, socket: T$1, request: http.IncomingMessage) => void): this;
    off(event: 'error', cb: (this: Server<T$1>, error: Error) => void): this;
    off(event: 'headers', cb: (this: Server<T$1>, headers: string[], request: http.IncomingMessage) => void): this;
    off(event: 'close' | 'listening', cb: (this: Server<T$1>) => void): this;
    off(event: string | symbol, listener: (this: Server<T$1>, ...args: any[]) => void): this;
    addListener(event: 'connection', cb: (client: T$1, request: http.IncomingMessage) => void): this;
    addListener(event: 'error', cb: (err: Error) => void): this;
    addListener(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
    addListener(event: 'close' | 'listening', cb: () => void): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;
    removeListener(event: 'connection', cb: (client: T$1) => void): this;
    removeListener(event: 'error', cb: (err: Error) => void): this;
    removeListener(event: 'headers', cb: (headers: string[], request: http.IncomingMessage) => void): this;
    removeListener(event: 'close' | 'listening', cb: () => void): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
  }
  const WebSocketServer: typeof Server;
  interface WebSocketServer extends Server {}
  const WebSocket: typeof WebSocketAlias;
  interface WebSocket extends WebSocketAlias {}

  // WebSocket stream
  function createWebSocketStream(websocket: WebSocket, options?: DuplexOptions): Duplex;
}

// export = WebSocket
//#endregion
//#region src/node/server/ws.d.ts
type WebSocketCustomListener<T$1> = (data: T$1, client: WebSocketClient) => void;
declare const isWebSocketServer: unique symbol;
interface WebSocketServer extends NormalizedHotChannel {
  /**
  * Handle custom event emitted by `import.meta.hot.send`
  */
  on: WebSocket.Server["on"] & {
    <T$1 extends string>(event: T$1, listener: WebSocketCustomListener<hmrPayload_InferCustomEventPayload<T$1>>): void;
  };
  /**
  * Unregister event listener.
  */
  off: WebSocket.Server["off"] & {
    (event: string, listener: Function): void;
  };
  /**
  * Listen on port and host
  */
  listen(): void;
  /**
  * Disconnect all clients and terminate the server.
  */
  close(): Promise<void>;
  [isWebSocketServer]: true;
  /**
  * Get all connected clients.
  */
  clients: Set<WebSocketClient>;
}
interface WebSocketClient extends NormalizedHotChannelClient {
  /**
  * The raw WebSocket instance
  * @advanced
  */
  socket: WebSocket;
}
//#endregion
//#region src/node/server/environment.d.ts
interface DevEnvironmentContext {
  hot: boolean;
  transport?: HotChannel | WebSocketServer;
  options?: EnvironmentOptions;
  remoteRunner?: {
    inlineSourceMap?: boolean;
  };
  depsOptimizer?: DepsOptimizer;
}
declare class DevEnvironment extends BaseEnvironment {
  mode: "dev";
  moduleGraph: EnvironmentModuleGraph;
  depsOptimizer?: DepsOptimizer;
  get pluginContainer(): EnvironmentPluginContainer<DevEnvironment>;
  /**
  * Hot channel for this environment. If not provided or disabled,
  * it will be a noop channel that does nothing.
  *
  * @example
  * environment.hot.send({ type: 'full-reload' })
  */
  hot: NormalizedHotChannel;
  constructor(name: string, config: ResolvedConfig, context: DevEnvironmentContext);
  init(options?: {
    watcher?: FSWatcher;
    /**
    * the previous instance used for the environment with the same name
    *
    * when using, the consumer should check if it's an instance generated from the same class or factory function
    */
    previousInstance?: DevEnvironment;
  }): Promise<void>;
  /**
  * When the dev server is restarted, the methods are called in the following order:
  * - new instance `init`
  * - previous instance `close`
  * - new instance `listen`
  */
  listen(server: ViteDevServer): Promise<void>;
  fetchModule(id: string, importer?: string, options?: FetchFunctionOptions): Promise<moduleRunner_FetchResult>;
  reloadModule(module: EnvironmentModuleNode): Promise<void>;
  transformRequest(url: string, options?: TransformOptionsInternal): Promise<TransformResult | null>;
  warmupRequest(url: string): Promise<void>;
  close(): Promise<void>;
  /**
  * Calling `await environment.waitForRequestsIdle(id)` will wait until all static imports
  * are processed after the first transformRequest call. If called from a load or transform
  * plugin hook, the id needs to be passed as a parameter to avoid deadlocks.
  * Calling this function after the first static imports section of the module graph has been
  * processed will resolve immediately.
  * @experimental
  */
  waitForRequestsIdle(ignoredId?: string): Promise<void>;
}
//#endregion
//#region src/types/commonjs.d.ts

interface RollupCommonJSOptions {
  /**
   * A minimatch pattern, or array of patterns, which specifies the files in
   * the build the plugin should operate on. By default, all files with
   * extension `".cjs"` or those in `extensions` are included, but you can
   * narrow this list by only including specific files. These files will be
   * analyzed and transpiled if either the analysis does not find ES module
   * specific statements or `transformMixedEsModules` is `true`.
   * @default undefined
   */
  include?: string | RegExp | readonly (string | RegExp)[];
  /**
   * A minimatch pattern, or array of patterns, which specifies the files in
   * the build the plugin should _ignore_. By default, all files with
   * extensions other than those in `extensions` or `".cjs"` are ignored, but you
   * can exclude additional files. See also the `include` option.
   * @default undefined
   */
  exclude?: string | RegExp | readonly (string | RegExp)[];
  /**
   * For extensionless imports, search for extensions other than .js in the
   * order specified. Note that you need to make sure that non-JavaScript files
   * are transpiled by another plugin first.
   * @default [ '.js' ]
   */
  extensions?: ReadonlyArray<string>;
  /**
   * If true then uses of `global` won't be dealt with by this plugin
   * @default false
   */
  ignoreGlobal?: boolean;
  /**
   * If false, skips source map generation for CommonJS modules. This will
   * improve performance.
   * @default true
   */
  sourceMap?: boolean;
  /**
   * Some `require` calls cannot be resolved statically to be translated to
   * imports.
   * When this option is set to `false`, the generated code will either
   * directly throw an error when such a call is encountered or, when
   * `dynamicRequireTargets` is used, when such a call cannot be resolved with a
   * configured dynamic require target.
   * Setting this option to `true` will instead leave the `require` call in the
   * code or use it as a fallback for `dynamicRequireTargets`.
   * @default false
   */
  ignoreDynamicRequires?: boolean;
  /**
   * Instructs the plugin whether to enable mixed module transformations. This
   * is useful in scenarios with modules that contain a mix of ES `import`
   * statements and CommonJS `require` expressions. Set to `true` if `require`
   * calls should be transformed to imports in mixed modules, or `false` if the
   * `require` expressions should survive the transformation. The latter can be
   * important if the code contains environment detection, or you are coding
   * for an environment with special treatment for `require` calls such as
   * ElectronJS. See also the `ignore` option.
   * @default false
   */
  transformMixedEsModules?: boolean;
  /**
   * By default, this plugin will try to hoist `require` statements as imports
   * to the top of each file. While this works well for many code bases and
   * allows for very efficient ESM output, it does not perfectly capture
   * CommonJS semantics as the order of side effects like log statements may
   * change. But it is especially problematic when there are circular `require`
   * calls between CommonJS modules as those often rely on the lazy execution of
   * nested `require` calls.
   *
   * Setting this option to `true` will wrap all CommonJS files in functions
   * which are executed when they are required for the first time, preserving
   * NodeJS semantics. Note that this can have an impact on the size and
   * performance of the generated code.
   *
   * The default value of `"auto"` will only wrap CommonJS files when they are
   * part of a CommonJS dependency cycle, e.g. an index file that is required by
   * many of its dependencies. All other CommonJS files are hoisted. This is the
   * recommended setting for most code bases.
   *
   * `false` will entirely prevent wrapping and hoist all files. This may still
   * work depending on the nature of cyclic dependencies but will often cause
   * problems.
   *
   * You can also provide a minimatch pattern, or array of patterns, to only
   * specify a subset of files which should be wrapped in functions for proper
   * `require` semantics.
   *
   * `"debug"` works like `"auto"` but after bundling, it will display a warning
   * containing a list of ids that have been wrapped which can be used as
   * minimatch pattern for fine-tuning.
   * @default "auto"
   */
  strictRequires?: boolean | string | RegExp | readonly (string | RegExp)[];
  /**
   * Sometimes you have to leave require statements unconverted. Pass an array
   * containing the IDs or a `id => boolean` function.
   * @default []
   */
  ignore?: ReadonlyArray<string> | ((id: string) => boolean);
  /**
   * In most cases, where `require` calls are inside a `try-catch` clause,
   * they should be left unconverted as it requires an optional dependency
   * that may or may not be installed beside the rolled up package.
   * Due to the conversion of `require` to a static `import` - the call is
   * hoisted to the top of the file, outside the `try-catch` clause.
   *
   * - `true`: Default. All `require` calls inside a `try` will be left unconverted.
   * - `false`: All `require` calls inside a `try` will be converted as if the
   *   `try-catch` clause is not there.
   * - `remove`: Remove all `require` calls from inside any `try` block.
   * - `string[]`: Pass an array containing the IDs to left unconverted.
   * - `((id: string) => boolean|'remove')`: Pass a function that controls
   *   individual IDs.
   *
   * @default true
   */
  ignoreTryCatch?: boolean | 'remove' | ReadonlyArray<string> | ((id: string) => boolean | 'remove');
  /**
   * Controls how to render imports from external dependencies. By default,
   * this plugin assumes that all external dependencies are CommonJS. This
   * means they are rendered as default imports to be compatible with e.g.
   * NodeJS where ES modules can only import a default export from a CommonJS
   * dependency.
   *
   * If you set `esmExternals` to `true`, this plugin assumes that all
   * external dependencies are ES modules and respect the
   * `requireReturnsDefault` option. If that option is not set, they will be
   * rendered as namespace imports.
   *
   * You can also supply an array of ids to be treated as ES modules, or a
   * function that will be passed each external id to determine whether it is
   * an ES module.
   * @default false
   */
  esmExternals?: boolean | ReadonlyArray<string> | ((id: string) => boolean);
  /**
   * Controls what is returned when requiring an ES module from a CommonJS file.
   * When using the `esmExternals` option, this will also apply to external
   * modules. By default, this plugin will render those imports as namespace
   * imports i.e.
   *
   * ```js
   * // input
   * const foo = require('foo');
   *
   * // output
   * import * as foo from 'foo';
   * ```
   *
   * However, there are some situations where this may not be desired.
   * For these situations, you can change Rollup's behaviour either globally or
   * per module. To change it globally, set the `requireReturnsDefault` option
   * to one of the following values:
   *
   * - `false`: This is the default, requiring an ES module returns its
   *   namespace. This is the only option that will also add a marker
   *   `__esModule: true` to the namespace to support interop patterns in
   *   CommonJS modules that are transpiled ES modules.
   * - `"namespace"`: Like `false`, requiring an ES module returns its
   *   namespace, but the plugin does not add the `__esModule` marker and thus
   *   creates more efficient code. For external dependencies when using
   *   `esmExternals: true`, no additional interop code is generated.
   * - `"auto"`: This is complementary to how `output.exports: "auto"` works in
   *   Rollup: If a module has a default export and no named exports, requiring
   *   that module returns the default export. In all other cases, the namespace
   *   is returned. For external dependencies when using `esmExternals: true`, a
   *   corresponding interop helper is added.
   * - `"preferred"`: If a module has a default export, requiring that module
   *   always returns the default export, no matter whether additional named
   *   exports exist. This is similar to how previous versions of this plugin
   *   worked. Again for external dependencies when using `esmExternals: true`,
   *   an interop helper is added.
   * - `true`: This will always try to return the default export on require
   *   without checking if it actually exists. This can throw at build time if
   *   there is no default export. This is how external dependencies are handled
   *   when `esmExternals` is not used. The advantage over the other options is
   *   that, like `false`, this does not add an interop helper for external
   *   dependencies, keeping the code lean.
   *
   * To change this for individual modules, you can supply a function for
   * `requireReturnsDefault` instead. This function will then be called once for
   * each required ES module or external dependency with the corresponding id
   * and allows you to return different values for different modules.
   * @default false
   */
  requireReturnsDefault?: boolean | 'auto' | 'preferred' | 'namespace' | ((id: string) => boolean | 'auto' | 'preferred' | 'namespace');

  /**
   * @default "auto"
   */
  defaultIsModuleExports?: boolean | 'auto' | ((id: string) => boolean | 'auto');
  /**
   * Some modules contain dynamic `require` calls, or require modules that
   * contain circular dependencies, which are not handled well by static
   * imports. Including those modules as `dynamicRequireTargets` will simulate a
   * CommonJS (NodeJS-like) environment for them with support for dynamic
   * dependencies. It also enables `strictRequires` for those modules.
   *
   * Note: In extreme cases, this feature may result in some paths being
   * rendered as absolute in the final bundle. The plugin tries to avoid
   * exposing paths from the local machine, but if you are `dynamicRequirePaths`
   * with paths that are far away from your project's folder, that may require
   * replacing strings like `"/Users/John/Desktop/foo-project/"` -\> `"/"`.
   */
  dynamicRequireTargets?: string | ReadonlyArray<string>;
  /**
   * To avoid long paths when using the `dynamicRequireTargets` option, you can use this option to specify a directory
   * that is a common parent for all files that use dynamic require statements. Using a directory higher up such as `/`
   * may lead to unnecessarily long paths in the generated code and may expose directory names on your machine like your
   * home directory name. By default, it uses the current working directory.
   */
  dynamicRequireRoot?: string;
}
//#endregion
//#region src/types/dynamicImportVars.d.ts
interface RollupDynamicImportVarsOptions {
  /**
   * Files to include in this plugin (default all).
   * @default []
   */
  include?: string | RegExp | (string | RegExp)[];
  /**
   * Files to exclude in this plugin (default none).
   * @default []
   */
  exclude?: string | RegExp | (string | RegExp)[];
  /**
   * By default, the plugin quits the build process when it encounters an error. If you set this option to true, it will throw a warning instead and leave the code untouched.
   * @default false
   */
  warnOnError?: boolean;
}
//#endregion
//#region src/node/plugins/terser.d.ts
interface TerserOptions extends TerserMinifyOptions {
  /**
  * Vite-specific option to specify the max number of workers to spawn
  * when minifying files with terser.
  *
  * @default number of CPUs minus 1
  */
  maxWorkers?: number;
}
//#endregion
//#region src/node/plugins/resolve.d.ts
interface EnvironmentResolveOptions {
  /**
  * @default ['browser', 'module', 'jsnext:main', 'jsnext']
  */
  mainFields?: string[];
  conditions?: string[];
  externalConditions?: string[];
  /**
  * @default ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json']
  */
  extensions?: string[];
  dedupe?: string[];
  /**
  * Prevent listed dependencies from being externalized and will get bundled in build.
  * Only works in server environments for now. Previously this was `ssr.noExternal`.
  * @experimental
  */
  noExternal?: string | RegExp | (string | RegExp)[] | true;
  /**
  * Externalize the given dependencies and their transitive dependencies.
  * Only works in server environments for now. Previously this was `ssr.external`.
  * @experimental
  */
  external?: string[] | true;
  /**
  * Array of strings or regular expressions that indicate what modules are builtin for the environment.
  */
  builtins?: (string | RegExp)[];
}
interface ResolveOptions extends EnvironmentResolveOptions {
  /**
  * @default false
  */
  preserveSymlinks?: boolean;
}
interface ResolvePluginOptions {
  root: string;
  isBuild: boolean;
  isProduction: boolean;
  packageCache?: PackageCache;
  /**
  * src code mode also attempts the following:
  * - resolving /xxx as URLs
  * - resolving bare imports from optimized deps
  */
  asSrc?: boolean;
  tryIndex?: boolean;
  tryPrefix?: string;
  preferRelative?: boolean;
  isRequire?: boolean;
  scan?: boolean;
}
interface InternalResolveOptions extends Required<ResolveOptions>, ResolvePluginOptions {}
//#endregion
//#region src/node/packages.d.ts
/** Cache for package.json resolution and package.json contents */
type PackageCache = Map<string, PackageData>;
interface PackageData {
  dir: string;
  hasSideEffects: (id: string) => boolean | "no-treeshake" | null;
  setResolvedCache: (key: string, entry: string, options: InternalResolveOptions) => void;
  getResolvedCache: (key: string, options: InternalResolveOptions) => string | undefined;
  data: {
    [field: string]: any;
    name: string;
    type: string;
    version: string;
    main: string;
    module: string;
    browser: string | Record<string, string | false>;
    exports: string | Record<string, any> | string[];
    imports: Record<string, any>;
    dependencies: Record<string, string>;
  };
}
//#endregion
//#region src/node/plugins/license.d.ts
interface LicenseOptions {
  /**
  * The output file name of the license file relative to the output directory.
  * Specify a path that ends with `.json` to output the raw JSON metadata.
  *
  * @default '.vite/license.md'
  */
  fileName: string;
}
//#endregion
//#region src/node/build.d.ts
interface BuildEnvironmentOptions {
  /**
  * Compatibility transform target. The transform is performed with esbuild
  * and the lowest supported target is es2015. Note this only handles
  * syntax transformation and does not cover polyfills
  *
  * Default: 'baseline-widely-available' - transpile targeting browsers that
  * are included in the Baseline Widely Available on 2025-05-01.
  * (Chrome 107+, Edge 107+, Firefox 104+, Safari 16+).
  *
  * Another special value is 'esnext' - which only performs minimal transpiling
  * (for minification compat).
  *
  * For custom targets, see https://esbuild.github.io/api/#target and
  * https://esbuild.github.io/content-types/#javascript for more details.
  * @default 'baseline-widely-available'
  */
  target?: "baseline-widely-available" | esbuild_TransformOptions["target"] | false;
  /**
  * whether to inject module preload polyfill.
  * Note: does not apply to library mode.
  * @default true
  * @deprecated use `modulePreload.polyfill` instead
  */
  polyfillModulePreload?: boolean;
  /**
  * Configure module preload
  * Note: does not apply to library mode.
  * @default true
  */
  modulePreload?: boolean | ModulePreloadOptions;
  /**
  * Directory relative from `root` where build output will be placed. If the
  * directory exists, it will be removed before the build.
  * @default 'dist'
  */
  outDir?: string;
  /**
  * Directory relative from `outDir` where the built js/css/image assets will
  * be placed.
  * @default 'assets'
  */
  assetsDir?: string;
  /**
  * Static asset files smaller than this number (in bytes) will be inlined as
  * base64 strings. If a callback is passed, a boolean can be returned to opt-in
  * or opt-out of inlining. If nothing is returned the default logic applies.
  *
  * Default limit is `4096` (4 KiB). Set to `0` to disable.
  * @default 4096
  */
  assetsInlineLimit?: number | ((filePath: string, content: Buffer) => boolean | undefined);
  /**
  * Whether to code-split CSS. When enabled, CSS in async chunks will be
  * inlined as strings in the chunk and inserted via dynamically created
  * style tags when the chunk is loaded.
  * @default true
  */
  cssCodeSplit?: boolean;
  /**
  * An optional separate target for CSS minification.
  * As esbuild only supports configuring targets to mainstream
  * browsers, users may need this option when they are targeting
  * a niche browser that comes with most modern JavaScript features
  * but has poor CSS support, e.g. Android WeChat WebView, which
  * doesn't support the #RGBA syntax.
  * @default target
  */
  cssTarget?: esbuild_TransformOptions["target"] | false;
  /**
  * Override CSS minification specifically instead of defaulting to `build.minify`,
  * so you can configure minification for JS and CSS separately.
  * @default 'esbuild'
  */
  cssMinify?: boolean | "esbuild" | "lightningcss";
  /**
  * If `true`, a separate sourcemap file will be created. If 'inline', the
  * sourcemap will be appended to the resulting output file as data URI.
  * 'hidden' works like `true` except that the corresponding sourcemap
  * comments in the bundled files are suppressed.
  * @default false
  */
  sourcemap?: boolean | "inline" | "hidden";
  /**
  * Set to `false` to disable minification, or specify the minifier to use.
  * Available options are 'terser' or 'esbuild'.
  * @default 'esbuild'
  */
  minify?: boolean | "terser" | "esbuild";
  /**
  * Options for terser
  * https://terser.org/docs/api-reference#minify-options
  *
  * In addition, you can also pass a `maxWorkers: number` option to specify the
  * max number of workers to spawn. Defaults to the number of CPUs minus 1.
  */
  terserOptions?: TerserOptions;
  /**
  * Will be merged with internal rollup options.
  * https://rollupjs.org/configuration-options/
  */
  rollupOptions?: RollupOptions;
  /**
  * Options to pass on to `@rollup/plugin-commonjs`
  */
  commonjsOptions?: RollupCommonJSOptions;
  /**
  * Options to pass on to `@rollup/plugin-dynamic-import-vars`
  */
  dynamicImportVarsOptions?: RollupDynamicImportVarsOptions;
  /**
  * Whether to write bundle to disk
  * @default true
  */
  write?: boolean;
  /**
  * Empty outDir on write.
  * @default true when outDir is a sub directory of project root
  */
  emptyOutDir?: boolean | null;
  /**
  * Copy the public directory to outDir on write.
  * @default true
  */
  copyPublicDir?: boolean;
  /**
  * Whether to emit a `.vite/license.md` file that includes all bundled dependencies'
  * licenses. Pass an object to customize the output file name.
  * @default false
  */
  license?: boolean | LicenseOptions;
  /**
  * Whether to emit a .vite/manifest.json in the output dir to map hash-less filenames
  * to their hashed versions. Useful when you want to generate your own HTML
  * instead of using the one generated by Vite.
  *
  * Example:
  *
  * ```json
  * {
  *   "main.js": {
  *     "file": "main.68fe3fad.js",
  *     "css": "main.e6b63442.css",
  *     "imports": [...],
  *     "dynamicImports": [...]
  *   }
  * }
  * ```
  * @default false
  */
  manifest?: boolean | string;
  /**
  * Build in library mode. The value should be the global name of the lib in
  * UMD mode. This will produce esm + cjs + umd bundle formats with default
  * configurations that are suitable for distributing libraries.
  * @default false
  */
  lib?: LibraryOptions | false;
  /**
  * Produce SSR oriented build. Note this requires specifying SSR entry via
  * `rollupOptions.input`.
  * @default false
  */
  ssr?: boolean | string;
  /**
  * Generate SSR manifest for determining style links and asset preload
  * directives in production.
  * @default false
  */
  ssrManifest?: boolean | string;
  /**
  * Emit assets during SSR.
  * @default false
  */
  ssrEmitAssets?: boolean;
  /**
  * Emit assets during build. Frameworks can set environments.ssr.build.emitAssets
  * By default, it is true for the client and false for other environments.
  */
  emitAssets?: boolean;
  /**
  * Set to false to disable reporting compressed chunk sizes.
  * Can slightly improve build speed.
  * @default true
  */
  reportCompressedSize?: boolean;
  /**
  * Adjust chunk size warning limit (in kB).
  * @default 500
  */
  chunkSizeWarningLimit?: number;
  /**
  * Rollup watch options
  * https://rollupjs.org/configuration-options/#watch
  * @default null
  */
  watch?: WatcherOptions | null;
  /**
  * create the Build Environment instance
  */
  createEnvironment?: (name: string, config: ResolvedConfig) => Promise<BuildEnvironment> | BuildEnvironment;
}
type BuildOptions = BuildEnvironmentOptions;
interface LibraryOptions {
  /**
  * Path of library entry
  */
  entry: InputOption;
  /**
  * The name of the exposed global variable. Required when the `formats` option includes
  * `umd` or `iife`
  */
  name?: string;
  /**
  * Output bundle formats
  * @default ['es', 'umd']
  */
  formats?: LibraryFormats[];
  /**
  * The name of the package file output. The default file name is the name option
  * of the project package.json. It can also be defined as a function taking the
  * format as an argument.
  */
  fileName?: string | ((format: ModuleFormat, entryName: string) => string);
  /**
  * The name of the CSS file output if the library imports CSS. Defaults to the
  * same value as `build.lib.fileName` if it's set a string, otherwise it falls
  * back to the name option of the project package.json.
  */
  cssFileName?: string;
}
type LibraryFormats = "es" | "cjs" | "umd" | "iife" | "system";
interface ModulePreloadOptions {
  /**
  * Whether to inject a module preload polyfill.
  * Note: does not apply to library mode.
  * @default true
  */
  polyfill?: boolean;
  /**
  * Resolve the list of dependencies to preload for a given dynamic import
  * @experimental
  */
  resolveDependencies?: ResolveModulePreloadDependenciesFn;
}
interface ResolvedModulePreloadOptions {
  polyfill: boolean;
  resolveDependencies?: ResolveModulePreloadDependenciesFn;
}
type ResolveModulePreloadDependenciesFn = (filename: string, deps: string[], context: {
  hostId: string;
  hostType: "html" | "js";
}) => string[];
interface ResolvedBuildEnvironmentOptions extends Required<Omit<BuildEnvironmentOptions, "polyfillModulePreload">> {
  modulePreload: false | ResolvedModulePreloadOptions;
}
interface ResolvedBuildOptions extends Required<Omit<BuildOptions, "polyfillModulePreload">> {
  modulePreload: false | ResolvedModulePreloadOptions;
}
/**
* Bundles a single environment for production.
* Returns a Promise containing the build result.
*/
declare function build(inlineConfig?: InlineConfig): Promise<RollupOutput | RollupOutput[] | RollupWatcher>;
type RenderBuiltAssetUrl = (filename: string, type: {
  type: "asset" | "public";
  hostId: string;
  hostType: "js" | "css" | "html";
  ssr: boolean;
}) => string | {
  relative?: boolean;
  runtime?: string;
} | undefined;
declare class BuildEnvironment extends BaseEnvironment {
  mode: "build";
  isBuilt: boolean;
  constructor(name: string, config: ResolvedConfig, setup?: {
    options?: EnvironmentOptions;
  });
  init(): Promise<void>;
}
interface ViteBuilder {
  environments: Record<string, BuildEnvironment>;
  config: ResolvedConfig;
  buildApp(): Promise<void>;
  build(environment: BuildEnvironment): Promise<RollupOutput | RollupOutput[] | RollupWatcher>;
}
interface BuilderOptions {
  /**
  * Whether to share the config instance among environments to align with the behavior of dev server.
  *
  * @default false
  * @experimental
  */
  sharedConfigBuild?: boolean;
  /**
  * Whether to share the plugin instances among environments to align with the behavior of dev server.
  *
  * @default false
  * @experimental
  */
  sharedPlugins?: boolean;
  buildApp?: (builder: ViteBuilder) => Promise<void>;
}
type ResolvedBuilderOptions = Required<BuilderOptions>;
/**
* Creates a ViteBuilder to orchestrate building multiple environments.
* @experimental
*/
declare function createBuilder(inlineConfig?: InlineConfig, useLegacyBuilder?: null | boolean): Promise<ViteBuilder>;
type BuildAppHook = (this: MinimalPluginContextWithoutEnvironment, builder: ViteBuilder) => Promise<void>;
//#endregion
//#region src/node/environment.d.ts
type Environment = DevEnvironment | BuildEnvironment | ScanEnvironment | UnknownEnvironment;
/**
* Creates a function that hides the complexities of a WeakMap with an initial value
* to implement object metadata. Used by plugins to implement cross hooks per
* environment metadata
*
* @experimental
*/
declare function perEnvironmentState<State>(initial: (environment: Environment) => State): (context: PluginContext) => State;
//#endregion
//#region src/node/server/pluginContainer.d.ts
type SkipInformation = {
  id: string;
  importer: string | undefined;
  plugin: Plugin;
  called?: boolean;
};
declare class EnvironmentPluginContainer<Env extends Environment = Environment> {
  private _pluginContextMap;
  private _resolvedRollupOptions?;
  private _processesing;
  private _seenResolves;
  private _moduleNodeToLoadAddedImports;
  getSortedPluginHooks: PluginHookUtils["getSortedPluginHooks"];
  getSortedPlugins: PluginHookUtils["getSortedPlugins"];
  moduleGraph: EnvironmentModuleGraph | undefined;
  watchFiles: Set<string>;
  minimalContext: MinimalPluginContext$1<Env>;
  private _started;
  private _buildStartPromise;
  private _closed;
  private _updateModuleLoadAddedImports;
  private _getAddedImports;
  getModuleInfo(id: string): ModuleInfo | null;
  private handleHookPromise;
  get options(): InputOptions;
  resolveRollupOptions(): Promise<InputOptions>;
  private _getPluginContext;
  private hookParallel;
  buildStart(_options?: InputOptions): Promise<void>;
  resolveId(rawId: string, importer?: string | undefined, options?: {
    attributes?: Record<string, string>;
    custom?: CustomPluginOptions;
    /** @deprecated use `skipCalls` instead */
    skip?: Set<Plugin>;
    skipCalls?: readonly SkipInformation[];
    
    isEntry?: boolean;
  }): Promise<PartialResolvedId | null>;
  load(id: string): Promise<LoadResult | null>;
  transform(code: string, id: string, options?: {
    inMap?: SourceDescription["map"];
  }): Promise<{
    code: string;
    map: SourceMap | {
      mappings: "";
    } | null;
  }>;
  watchChange(id: string, change: {
    event: "create" | "update" | "delete";
  }): Promise<void>;
  close(): Promise<void>;
}
declare class BasicMinimalPluginContext<Meta = PluginContextMeta> {
  meta: Meta;
  private _logger;
  constructor(meta: Meta, _logger: Logger);
  debug(rawLog: string | RollupLog | (() => string | RollupLog)): void;
  info(rawLog: string | RollupLog | (() => string | RollupLog)): void;
  warn(rawLog: string | RollupLog | (() => string | RollupLog)): void;
  error(e: string | RollupError): never;
  private _normalizeRawLog;
}
declare class MinimalPluginContext$1<T$1 extends Environment = Environment> extends BasicMinimalPluginContext implements MinimalPluginContext {
  environment: T$1;
  constructor(meta: PluginContextMeta, environment: T$1);
}
declare class PluginContainer {
  private environments;
  constructor(environments: Record<string, Environment>);
  private _getEnvironment;
  private _getPluginContainer;
  getModuleInfo(id: string): ModuleInfo | null;
  get options(): InputOptions;
  buildStart(_options?: InputOptions): Promise<void>;
  watchChange(id: string, change: {
    event: "create" | "update" | "delete";
  }): Promise<void>;
  resolveId(rawId: string, importer?: string, options?: {
    attributes?: Record<string, string>;
    custom?: CustomPluginOptions;
    /** @deprecated use `skipCalls` instead */
    skip?: Set<Plugin>;
    skipCalls?: readonly SkipInformation[];
    ssr?: boolean;
    
    isEntry?: boolean;
  }): Promise<PartialResolvedId | null>;
  load(id: string, options?: {
    ssr?: boolean;
  }): Promise<LoadResult | null>;
  transform(code: string, id: string, options?: {
    ssr?: boolean;
    environment?: Environment;
    inMap?: SourceDescription["map"];
  }): Promise<{
    code: string;
    map: SourceMap | {
      mappings: "";
    } | null;
  }>;
  close(): Promise<void>;
}
/**
* server.pluginContainer compatibility
*
* The default environment is in buildStart, buildEnd, watchChange, and closeBundle hooks,
* which are called once for all environments, or when no environment is passed in other hooks.
* The ssrEnvironment is needed for backward compatibility when the ssr flag is passed without
* an environment. The defaultEnvironment in the main pluginContainer in the server should be
* the client environment for backward compatibility.
**/
//#endregion
//#region src/node/server/index.d.ts
interface ServerOptions$1 extends CommonServerOptions {
  /**
  * Configure HMR-specific options (port, host, path & protocol)
  */
  hmr?: HmrOptions | boolean;
  /**
  * Do not start the websocket connection.
  * @experimental
  */
  ws?: false;
  /**
  * Warm-up files to transform and cache the results in advance. This improves the
  * initial page load during server starts and prevents transform waterfalls.
  */
  warmup?: {
    /**
    * The files to be transformed and used on the client-side. Supports glob patterns.
    */
    clientFiles?: string[];
    /**
    * The files to be transformed and used in SSR. Supports glob patterns.
    */
    ssrFiles?: string[];
  };
  /**
  * chokidar watch options or null to disable FS watching
  * https://github.com/paulmillr/chokidar/tree/3.6.0#api
  */
  watch?: WatchOptions | null;
  /**
  * Create Vite dev server to be used as a middleware in an existing server
  * @default false
  */
  middlewareMode?: boolean | {
    /**
    * Parent server instance to attach to
    *
    * This is needed to proxy WebSocket connections to the parent server.
    */
    server: HttpServer;
  };
  /**
  * Options for files served via '/\@fs/'.
  */
  fs?: FileSystemServeOptions;
  /**
  * Origin for the generated asset URLs.
  *
  * @example `http://127.0.0.1:8080`
  */
  origin?: string;
  /**
  * Pre-transform known direct imports
  * @default true
  */
  preTransformRequests?: boolean;
  /**
  * Whether or not to ignore-list source files in the dev server sourcemap, used to populate
  * the [`x_google_ignoreList` source map extension](https://developer.chrome.com/blog/devtools-better-angular-debugging/#the-x_google_ignorelist-source-map-extension).
  *
  * By default, it excludes all paths containing `node_modules`. You can pass `false` to
  * disable this behavior, or, for full control, a function that takes the source path and
  * sourcemap path and returns whether to ignore the source path.
  */
  sourcemapIgnoreList?: false | ((sourcePath: string, sourcemapPath: string) => boolean);
  /**
  * Backward compatibility. The buildStart and buildEnd hooks were called only once for
  * the client environment. This option enables per-environment buildStart and buildEnd hooks.
  * @default false
  * @experimental
  */
  perEnvironmentStartEndDuringDev?: boolean;
  /**
  * Backward compatibility. The watchChange hook was called only once for the client environment.
  * This option enables per-environment watchChange hooks.
  * @default false
  * @experimental
  */
  perEnvironmentWatchChangeDuringDev?: boolean;
  /**
  * Run HMR tasks, by default the HMR propagation is done in parallel for all environments
  * @experimental
  */
  hotUpdateEnvironments?: (server: ViteDevServer, hmr: (environment: DevEnvironment) => Promise<void>) => Promise<void>;
}
interface ResolvedServerOptions extends Omit<RequiredExceptFor<ServerOptions$1, "host" | "https" | "proxy" | "hmr" | "ws" | "watch" | "origin" | "hotUpdateEnvironments">, "fs" | "middlewareMode" | "sourcemapIgnoreList"> {
  fs: Required<FileSystemServeOptions>;
  middlewareMode: NonNullable<ServerOptions$1["middlewareMode"]>;
  sourcemapIgnoreList: Exclude<ServerOptions$1["sourcemapIgnoreList"], false | undefined>;
}
interface FileSystemServeOptions {
  /**
  * Strictly restrict file accessing outside of allowing paths.
  *
  * Set to `false` to disable the warning
  *
  * @default true
  */
  strict?: boolean;
  /**
  * Restrict accessing files outside the allowed directories.
  *
  * Accepts absolute path or a path relative to project root.
  * Will try to search up for workspace root by default.
  */
  allow?: string[];
  /**
  * Restrict accessing files that matches the patterns.
  *
  * This will have higher priority than `allow`.
  * picomatch patterns are supported.
  *
  * @default ['.env', '.env.*', '*.{crt,pem}', '**\/.git/**']
  */
  deny?: string[];
}
type ServerHook = (this: MinimalPluginContextWithoutEnvironment, server: ViteDevServer) => (() => void) | void | Promise<(() => void) | void>;
type HttpServer = http.Server | Http2SecureServer;
interface ViteDevServer {
  /**
  * The resolved vite config object
  */
  config: ResolvedConfig;
  /**
  * A connect app instance.
  * - Can be used to attach custom middlewares to the dev server.
  * - Can also be used as the handler function of a custom http server
  *   or as a middleware in any connect-style Node.js frameworks
  *
  * https://github.com/senchalabs/connect#use-middleware
  */
  middlewares: Connect.Server;
  /**
  * native Node http server instance
  * will be null in middleware mode
  */
  httpServer: HttpServer | null;
  /**
  * Chokidar watcher instance. If `config.server.watch` is set to `null`,
  * it will not watch any files and calling `add` or `unwatch` will have no effect.
  * https://github.com/paulmillr/chokidar/tree/3.6.0#api
  */
  watcher: FSWatcher;
  /**
  * WebSocket server with `send(payload)` method
  */
  ws: WebSocketServer;
  /**
  * An alias to `server.environments.client.hot`.
  * If you want to interact with all environments, loop over `server.environments`.
  */
  hot: NormalizedHotChannel;
  /**
  * Rollup plugin container that can run plugin hooks on a given file
  */
  pluginContainer: PluginContainer;
  /**
  * Module execution environments attached to the Vite server.
  */
  environments: Record<"client" | "ssr" | (string & {}), DevEnvironment>;
  /**
  * Module graph that tracks the import relationships, url to file mapping
  * and hmr state.
  */
  moduleGraph: ModuleGraph;
  /**
  * The resolved urls Vite prints on the CLI (URL-encoded). Returns `null`
  * in middleware mode or if the server is not listening on any port.
  */
  resolvedUrls: ResolvedServerUrls | null;
  /**
  * Programmatically resolve, load and transform a URL and get the result
  * without going through the http request pipeline.
  */
  transformRequest(url: string, options?: TransformOptions): Promise<TransformResult | null>;
  /**
  * Same as `transformRequest` but only warm up the URLs so the next request
  * will already be cached. The function will never throw as it handles and
  * reports errors internally.
  */
  warmupRequest(url: string, options?: TransformOptions): Promise<void>;
  /**
  * Apply vite built-in HTML transforms and any plugin HTML transforms.
  */
  transformIndexHtml(url: string, html: string, originalUrl?: string): Promise<string>;
  /**
  * Transform module code into SSR format.
  */
  ssrTransform(code: string, inMap: SourceMap | {
    mappings: "";
  } | null, url: string, originalCode?: string): Promise<TransformResult | null>;
  /**
  * Load a given URL as an instantiated module for SSR.
  */
  ssrLoadModule(url: string, opts?: {
    fixStacktrace?: boolean;
  }): Promise<Record<string, any>>;
  /**
  * Returns a fixed version of the given stack
  */
  ssrRewriteStacktrace(stack: string): string;
  /**
  * Mutates the given SSR error by rewriting the stacktrace
  */
  ssrFixStacktrace(e: Error): void;
  /**
  * Triggers HMR for a module in the module graph. You can use the `server.moduleGraph`
  * API to retrieve the module to be reloaded. If `hmr` is false, this is a no-op.
  */
  reloadModule(module: ModuleNode): Promise<void>;
  /**
  * Start the server.
  */
  listen(port?: number, isRestart?: boolean): Promise<ViteDevServer>;
  /**
  * Stop the server.
  */
  close(): Promise<void>;
  /**
  * Print server urls
  */
  printUrls(): void;
  /**
  * Bind CLI shortcuts
  */
  bindCLIShortcuts(options?: BindCLIShortcutsOptions<ViteDevServer>): void;
  /**
  * Restart the server.
  *
  * @param forceOptimize - force the optimizer to re-bundle, same as --force cli flag
  */
  restart(forceOptimize?: boolean): Promise<void>;
  /**
  * Open browser
  */
  openBrowser(): void;
  /**
  * Calling `await server.waitForRequestsIdle(id)` will wait until all static imports
  * are processed. If called from a load or transform plugin hook, the id needs to be
  * passed as a parameter to avoid deadlocks. Calling this function after the first
  * static imports section of the module graph has been processed will resolve immediately.
  */
  waitForRequestsIdle: (ignoredId?: string) => Promise<void>;
}
interface ResolvedServerUrls {
  local: string[];
  network: string[];
}
declare function createServer(inlineConfig?: InlineConfig | ResolvedConfig): Promise<ViteDevServer>;
//#endregion
//#region src/node/plugins/html.d.ts
interface HtmlTagDescriptor {
  tag: string;
  /**
  * attribute values will be escaped automatically if needed
  */
  attrs?: Record<string, string | boolean | undefined>;
  children?: string | HtmlTagDescriptor[];
  /**
  * default: 'head-prepend'
  */
  injectTo?: "head" | "body" | "head-prepend" | "body-prepend";
}
type IndexHtmlTransformResult = string | HtmlTagDescriptor[] | {
  html: string;
  tags: HtmlTagDescriptor[];
};
interface IndexHtmlTransformContext {
  /**
  * public path when served
  */
  path: string;
  /**
  * filename on disk
  */
  filename: string;
  server?: ViteDevServer;
  bundle?: OutputBundle;
  chunk?: OutputChunk;
  originalUrl?: string;
}
type IndexHtmlTransformHook = (this: MinimalPluginContextWithoutEnvironment, html: string, ctx: IndexHtmlTransformContext) => IndexHtmlTransformResult | void | Promise<IndexHtmlTransformResult | void>;
type IndexHtmlTransform = IndexHtmlTransformHook | {
  order?: "pre" | "post" | null;
  handler: IndexHtmlTransformHook;
};
//#endregion
//#region src/node/plugins/pluginFilter.d.ts
type StringFilter<Value = string | RegExp> = Value | Array<Value> | {
  include?: Value | Array<Value>;
  exclude?: Value | Array<Value>;
};
//#endregion
//#region src/node/plugin.d.ts
/**
* Vite plugins extends the Rollup plugin interface with a few extra
* vite-specific options. A valid vite plugin is also a valid Rollup plugin.
* On the contrary, a Rollup plugin may or may NOT be a valid vite universal
* plugin, since some Rollup features do not make sense in an unbundled
* dev server context. That said, as long as a rollup plugin doesn't have strong
* coupling between its bundle phase and output phase hooks then it should
* just work (that means, most of them).
*
* By default, the plugins are run during both serve and build. When a plugin
* is applied during serve, it will only run **non output plugin hooks** (see
* rollup type definition of {@link rollup#PluginHooks}). You can think of the
* dev server as only running `const bundle = rollup.rollup()` but never calling
* `bundle.generate()`.
*
* A plugin that expects to have different behavior depending on serve/build can
* export a factory function that receives the command being run via options.
*
* If a plugin should be applied only for server or build, a function format
* config file can be used to conditional determine the plugins to use.
*
* The current environment can be accessed from the context for the all non-global
* hooks (it is not available in config, configResolved, configureServer, etc).
* It can be a dev, build, or scan environment.
* Plugins can use this.environment.mode === 'dev' to guard for dev specific APIs.
*/
interface PluginContextExtension {
  /**
  * Vite-specific environment instance
  */
  environment: Environment;
}
interface PluginContextMetaExtension {
  viteVersion: string;
}
interface ConfigPluginContext extends Omit<MinimalPluginContext, "meta" | "environment"> {
  meta: Omit<PluginContextMeta, "watchMode">;
}
interface MinimalPluginContextWithoutEnvironment extends Omit<MinimalPluginContext, "environment"> {}
declare module "rollup" {
  interface MinimalPluginContext extends PluginContextExtension {}
  interface PluginContextMeta extends PluginContextMetaExtension {}
}
/**
* There are two types of plugins in Vite. App plugins and environment plugins.
* Environment Plugins are defined by a constructor function that will be called
* once per each environment allowing users to have completely different plugins
* for each of them. The constructor gets the resolved environment after the server
* and builder has already been created simplifying config access and cache
* management for for environment specific plugins.
* Environment Plugins are closer to regular rollup plugins. They can't define
* app level hooks (like config, configResolved, configureServer, etc).
*/
interface Plugin<A = any> extends Rollup.Plugin<A> {
  /**
  * Perform custom handling of HMR updates.
  * The handler receives an options containing changed filename, timestamp, a
  * list of modules affected by the file change, and the dev server instance.
  *
  * - The hook can return a filtered list of modules to narrow down the update.
  *   e.g. for a Vue SFC, we can narrow down the part to update by comparing
  *   the descriptors.
  *
  * - The hook can also return an empty array and then perform custom updates
  *   by sending a custom hmr payload via environment.hot.send().
  *
  * - If the hook doesn't return a value, the hmr update will be performed as
  *   normal.
  */
  hotUpdate?: ObjectHook<(this: MinimalPluginContext & {
    environment: DevEnvironment;
  }, options: HotUpdateOptions) => Array<EnvironmentModuleNode> | void | Promise<Array<EnvironmentModuleNode> | void>>;
  /**
  * extend hooks with ssr flag
  */
  resolveId?: ObjectHook<(this: PluginContext, source: string, importer: string | undefined, options: {
    attributes: Record<string, string>;
    custom?: CustomPluginOptions;
    ssr?: boolean | undefined;
    
    isEntry: boolean;
  }) => Promise<ResolveIdResult> | ResolveIdResult, {
    filter?: {
      id?: StringFilter<RegExp>;
    };
  }>;
  load?: ObjectHook<(this: PluginContext, id: string, options?: {
    ssr?: boolean | undefined;
  }) => Promise<LoadResult> | LoadResult, {
    filter?: {
      id?: StringFilter;
    };
  }>;
  transform?: ObjectHook<(this: TransformPluginContext, code: string, id: string, options?: {
    ssr?: boolean | undefined;
  }) => Promise<Rollup.TransformResult> | Rollup.TransformResult, {
    filter?: {
      id?: StringFilter;
      code?: StringFilter;
    };
  }>;
  /**
  * Opt-in this plugin into the shared plugins pipeline.
  * For backward-compatibility, plugins are re-recreated for each environment
  * during `vite build --app`
  * We have an opt-in per plugin, and a general `builder.sharedPlugins`
  * In a future major, we'll flip the default to be shared by default
  * @experimental
  */
  sharedDuringBuild?: boolean;
  /**
  * Opt-in this plugin into per-environment buildStart and buildEnd during dev.
  * For backward-compatibility, the buildStart hook is called only once during
  * dev, for the client environment. Plugins can opt-in to be called
  * per-environment, aligning with the build hook behavior.
  * @experimental
  */
  perEnvironmentStartEndDuringDev?: boolean;
  /**
  * Opt-in this plugin into per-environment watchChange during dev.
  * For backward-compatibility, the watchChange hook is called only once during
  * dev, for the client environment. Plugins can opt-in to be called
  * per-environment, aligning with the watchChange hook behavior.
  * @experimental
  */
  perEnvironmentWatchChangeDuringDev?: boolean;
  /**
  * Enforce plugin invocation tier similar to webpack loaders. Hooks ordering
  * is still subject to the `order` property in the hook object.
  *
  * Plugin invocation order:
  * - alias resolution
  * - `enforce: 'pre'` plugins
  * - vite core plugins
  * - normal plugins
  * - vite build plugins
  * - `enforce: 'post'` plugins
  * - vite build post plugins
  */
  enforce?: "pre" | "post";
  /**
  * Apply the plugin only for serve or build, or on certain conditions.
  */
  apply?: "serve" | "build" | ((this: void, config: UserConfig, env: ConfigEnv) => boolean);
  /**
  * Define environments where this plugin should be active
  * By default, the plugin is active in all environments
  * @experimental
  */
  applyToEnvironment?: (environment: PartialEnvironment) => boolean | Promise<boolean> | PluginOption;
  /**
  * Modify vite config before it's resolved. The hook can either mutate the
  * passed-in config directly, or return a partial config object that will be
  * deeply merged into existing config.
  *
  * Note: User plugins are resolved before running this hook so injecting other
  * plugins inside  the `config` hook will have no effect.
  */
  config?: ObjectHook<(this: ConfigPluginContext, config: UserConfig, env: ConfigEnv) => Omit<UserConfig, "plugins"> | null | void | Promise<Omit<UserConfig, "plugins"> | null | void>>;
  /**
  * Modify environment configs before it's resolved. The hook can either mutate the
  * passed-in environment config directly, or return a partial config object that will be
  * deeply merged into existing config.
  * This hook is called for each environment with a partially resolved environment config
  * that already accounts for the default environment config values set at the root level.
  * If plugins need to modify the config of a given environment, they should do it in this
  * hook instead of the config hook. Leaving the config hook only for modifying the root
  * default environment config.
  */
  configEnvironment?: ObjectHook<(this: ConfigPluginContext, name: string, config: EnvironmentOptions, env: ConfigEnv & {
    /**
    * Whether this environment is SSR environment and `ssr.target` is set to `'webworker'`.
    * Only intended to be used for backward compatibility.
    */
    isSsrTargetWebworker?: boolean;
  }) => EnvironmentOptions | null | void | Promise<EnvironmentOptions | null | void>>;
  /**
  * Use this hook to read and store the final resolved vite config.
  */
  configResolved?: ObjectHook<(this: MinimalPluginContextWithoutEnvironment, config: ResolvedConfig) => void | Promise<void>>;
  /**
  * Configure the vite server. The hook receives the {@link ViteDevServer}
  * instance. This can also be used to store a reference to the server
  * for use in other hooks.
  *
  * The hooks will be called before internal middlewares are applied. A hook
  * can return a post hook that will be called after internal middlewares
  * are applied. Hook can be async functions and will be called in series.
  */
  configureServer?: ObjectHook<ServerHook>;
  /**
  * Configure the preview server. The hook receives the {@link PreviewServer}
  * instance. This can also be used to store a reference to the server
  * for use in other hooks.
  *
  * The hooks are called before other middlewares are applied. A hook can
  * return a post hook that will be called after other middlewares are
  * applied. Hooks can be async functions and will be called in series.
  */
  configurePreviewServer?: ObjectHook<PreviewServerHook>;
  /**
  * Transform index.html.
  * The hook receives the following arguments:
  *
  * - html: string
  * - ctx: IndexHtmlTransformContext, which contains:
  *    - path: public path when served
  *    - filename: filename on disk
  *    - server?: ViteDevServer (only present during serve)
  *    - bundle?: rollup.OutputBundle (only present during build)
  *    - chunk?: rollup.OutputChunk
  *    - originalUrl?: string
  *
  * It can either return a transformed string, or a list of html tag
  * descriptors that will be injected into the `<head>` or `<body>`.
  *
  * By default the transform is applied **after** vite's internal html
  * transform. If you need to apply the transform before vite, use an object:
  * `{ order: 'pre', handler: hook }`
  */
  transformIndexHtml?: IndexHtmlTransform;
  /**
  * Build Environments
  *
  * @experimental
  */
  buildApp?: ObjectHook<BuildAppHook>;
  /**
  * Perform custom handling of HMR updates.
  * The handler receives a context containing changed filename, timestamp, a
  * list of modules affected by the file change, and the dev server instance.
  *
  * - The hook can return a filtered list of modules to narrow down the update.
  *   e.g. for a Vue SFC, we can narrow down the part to update by comparing
  *   the descriptors.
  *
  * - The hook can also return an empty array and then perform custom updates
  *   by sending a custom hmr payload via server.ws.send().
  *
  * - If the hook doesn't return a value, the hmr update will be performed as
  *   normal.
  */
  handleHotUpdate?: ObjectHook<(this: MinimalPluginContextWithoutEnvironment, ctx: HmrContext) => Array<ModuleNode> | void | Promise<Array<ModuleNode> | void>>;
}
type HookHandler<T$1> = T$1 extends ObjectHook<infer H> ? H : T$1;
type PluginWithRequiredHook<K$1 extends keyof Plugin> = Plugin & { [P in K$1]: NonNullable<Plugin[P]> };
type Thenable<T$1> = T$1 | Promise<T$1>;
type FalsyPlugin = false | null | undefined;
type PluginOption = Thenable<Plugin | FalsyPlugin | PluginOption[]>;
/**
* @experimental
*/
declare function perEnvironmentPlugin(name: string, applyToEnvironment: (environment: PartialEnvironment) => boolean | Promise<boolean> | PluginOption): Plugin;
//#endregion
//#region src/node/plugins/css.d.ts
interface CSSOptions {
  /**
  * Using lightningcss is an experimental option to handle CSS modules,
  * assets and imports via Lightning CSS. It requires to install it as a
  * peer dependency.
  *
  * @default 'postcss'
  * @experimental
  */
  transformer?: "postcss" | "lightningcss";
  /**
  * https://github.com/css-modules/postcss-modules
  */
  modules?: CSSModulesOptions | false;
  /**
  * Options for preprocessors.
  *
  * In addition to options specific to each processors, Vite supports `additionalData` option.
  * The `additionalData` option can be used to inject extra code for each style content.
  */
  preprocessorOptions?: {
    scss?: SassPreprocessorOptions;
    sass?: SassPreprocessorOptions;
    less?: LessPreprocessorOptions;
    styl?: StylusPreprocessorOptions;
    stylus?: StylusPreprocessorOptions;
  };
  /**
  * If this option is set, preprocessors will run in workers when possible.
  * `true` means the number of CPUs minus 1.
  *
  * @default true
  */
  preprocessorMaxWorkers?: number | true;
  postcss?: string | (PostCSS.ProcessOptions & {
    plugins?: PostCSS.AcceptedPlugin[];
  });
  /**
  * Enables css sourcemaps during dev
  * @default false
  * @experimental
  */
  devSourcemap?: boolean;
  /**
  * @experimental
  */
  lightningcss?: lightningcssOptions_LightningCSSOptions;
}
interface CSSModulesOptions {
  getJSON?: (cssFileName: string, json: Record<string, string>, outputFileName: string) => void;
  scopeBehaviour?: "global" | "local";
  globalModulePaths?: RegExp[];
  exportGlobals?: boolean;
  generateScopedName?: string | ((name: string, filename: string, css: string) => string);
  hashPrefix?: string;
  /**
  * default: undefined
  */
  localsConvention?: "camelCase" | "camelCaseOnly" | "dashes" | "dashesOnly" | ((originalClassName: string, generatedClassName: string, inputFile: string) => string);
}
type ResolvedCSSOptions = Omit<CSSOptions, "lightningcss"> & Required<Pick<CSSOptions, "transformer" | "devSourcemap">> & {
  lightningcss?: lightningcssOptions_LightningCSSOptions;
};
interface PreprocessCSSResult {
  code: string;
  map?: SourceMapInput;
  modules?: Record<string, string>;
  deps?: Set<string>;
}
/**
* @experimental
*/
declare function preprocessCSS(code: string, filename: string, config: ResolvedConfig): Promise<PreprocessCSSResult>;
declare function formatPostcssSourceMap(rawMap: ExistingRawSourceMap, file: string): Promise<ExistingRawSourceMap>;
type PreprocessorAdditionalDataResult = string | {
  content: string;
  map?: ExistingRawSourceMap;
};
type PreprocessorAdditionalData = string | ((source: string, filename: string) => PreprocessorAdditionalDataResult | Promise<PreprocessorAdditionalDataResult>);
type SassPreprocessorOptions = {
  additionalData?: PreprocessorAdditionalData;
} & SassModernPreprocessBaseOptions;
type LessPreprocessorOptions = {
  additionalData?: PreprocessorAdditionalData;
} & LessPreprocessorBaseOptions;
type StylusPreprocessorOptions = {
  additionalData?: PreprocessorAdditionalData;
} & StylusPreprocessorBaseOptions;
//#endregion
//#region src/node/plugins/esbuild.d.ts
interface ESBuildOptions extends esbuild_TransformOptions {
  include?: string | RegExp | ReadonlyArray<string | RegExp>;
  exclude?: string | RegExp | ReadonlyArray<string | RegExp>;
  jsxInject?: string;
  /**
  * This option is not respected. Use `build.minify` instead.
  */
  minify?: never;
}
type ESBuildTransformResult = Omit<esbuild_TransformResult, "map"> & {
  map: SourceMap;
};
declare function transformWithEsbuild(code: string, filename: string, options?: esbuild_TransformOptions, inMap?: object, config?: ResolvedConfig, watcher?: FSWatcher): Promise<ESBuildTransformResult>;
//#endregion
//#region src/node/plugins/json.d.ts
interface JsonOptions {
  /**
  * Generate a named export for every property of the JSON object
  * @default true
  */
  namedExports?: boolean;
  /**
  * Generate performant output as JSON.parse("stringified").
  *
  * When set to 'auto', the data will be stringified only if the data is bigger than 10kB.
  * @default 'auto'
  */
  stringify?: boolean | "auto";
}
//#endregion
//#region src/node/ssr/index.d.ts
type SSRTarget = "node" | "webworker";
type SsrDepOptimizationConfig = DepOptimizationConfig;
interface SSROptions {
  noExternal?: string | RegExp | (string | RegExp)[] | true;
  external?: string[] | true;
  /**
  * Define the target for the ssr build. The browser field in package.json
  * is ignored for node but used if webworker is the target
  * This option will be removed in a future major version
  * @default 'node'
  */
  target?: SSRTarget;
  /**
  * Control over which dependencies are optimized during SSR and esbuild options
  * During build:
  *   no external CJS dependencies are optimized by default
  * During dev:
  *   explicit no external CJS dependencies are optimized by default
  * @experimental
  */
  optimizeDeps?: SsrDepOptimizationConfig;
  resolve?: {
    /**
    * Conditions that are used in the plugin pipeline. The default value is the root config's `resolve.conditions`.
    *
    * Use this to override the default ssr conditions for the ssr build.
    *
    * @default rootConfig.resolve.conditions
    */
    conditions?: string[];
    /**
    * Conditions that are used during ssr import (including `ssrLoadModule`) of externalized dependencies.
    *
    * @default ['node', 'module-sync']
    */
    externalConditions?: string[];
    mainFields?: string[];
  };
}
interface ResolvedSSROptions extends SSROptions {
  target: SSRTarget;
  optimizeDeps: SsrDepOptimizationConfig;
}
//#endregion
//#region src/node/config.d.ts
interface ConfigEnv {
  /**
  * 'serve': during dev (`vite` command)
  * 'build': when building for production (`vite build` command)
  */
  command: "build" | "serve";
  mode: string;
  isSsrBuild?: boolean;
  isPreview?: boolean;
}
/**
* spa: include SPA fallback middleware and configure sirv with `single: true` in preview
*
* mpa: only include non-SPA HTML middlewares
*
* custom: don't include HTML middlewares
*/
type AppType = "spa" | "mpa" | "custom";
type UserConfigFnObject = (env: ConfigEnv) => UserConfig;
type UserConfigFnPromise = (env: ConfigEnv) => Promise<UserConfig>;
type UserConfigFn = (env: ConfigEnv) => UserConfig | Promise<UserConfig>;
type UserConfigExport = UserConfig | Promise<UserConfig> | UserConfigFnObject | UserConfigFnPromise | UserConfigFn;
/**
* Type helper to make it easier to use vite.config.ts
* accepts a direct {@link UserConfig} object, or a function that returns it.
* The function receives a {@link ConfigEnv} object.
*/
declare function defineConfig(config: UserConfig): UserConfig;
declare function defineConfig(config: Promise<UserConfig>): Promise<UserConfig>;
declare function defineConfig(config: UserConfigFnObject): UserConfigFnObject;
declare function defineConfig(config: UserConfigFnPromise): UserConfigFnPromise;
declare function defineConfig(config: UserConfigFn): UserConfigFn;
declare function defineConfig(config: UserConfigExport): UserConfigExport;
interface CreateDevEnvironmentContext {
  ws: WebSocketServer;
}
interface DevEnvironmentOptions {
  /**
  * Files to be pre-transformed. Supports glob patterns.
  */
  warmup?: string[];
  /**
  * Pre-transform known direct imports
  * defaults to true for the client environment, false for the rest
  */
  preTransformRequests?: boolean;
  /**
  * Enables sourcemaps during dev
  * @default { js: true }
  * @experimental
  */
  sourcemap?: boolean | {
    js?: boolean;
    css?: boolean;
  };
  /**
  * Whether or not to ignore-list source files in the dev server sourcemap, used to populate
  * the [`x_google_ignoreList` source map extension](https://developer.chrome.com/blog/devtools-better-angular-debugging/#the-x_google_ignorelist-source-map-extension).
  *
  * By default, it excludes all paths containing `node_modules`. You can pass `false` to
  * disable this behavior, or, for full control, a function that takes the source path and
  * sourcemap path and returns whether to ignore the source path.
  */
  sourcemapIgnoreList?: false | ((sourcePath: string, sourcemapPath: string) => boolean);
  /**
  * create the Dev Environment instance
  */
  createEnvironment?: (name: string, config: ResolvedConfig, context: CreateDevEnvironmentContext) => Promise<DevEnvironment> | DevEnvironment;
  /**
  * For environments that support a full-reload, like the client, we can short-circuit when
  * restarting the server throwing early to stop processing current files. We avoided this for
  * SSR requests. Maybe this is no longer needed.
  * @experimental
  */
  recoverable?: boolean;
  /**
  * For environments associated with a module runner.
  * By default, it is false for the client environment and true for non-client environments.
  * This option can also be used instead of the removed config.experimental.skipSsrTransform.
  */
  moduleRunnerTransform?: boolean;
}
type ResolvedDevEnvironmentOptions = Omit<Required<DevEnvironmentOptions>, "sourcemapIgnoreList"> & {
  sourcemapIgnoreList: Exclude<DevEnvironmentOptions["sourcemapIgnoreList"], false | undefined>;
};
type AllResolveOptions = ResolveOptions & {
  alias?: AliasOptions;
};
interface SharedEnvironmentOptions {
  /**
  * Define global variable replacements.
  * Entries will be defined on `window` during dev and replaced during build.
  */
  define?: Record<string, any>;
  /**
  * Configure resolver
  */
  resolve?: EnvironmentResolveOptions;
  /**
  * Define if this environment is used for Server-Side Rendering
  * @default 'server' if it isn't the client environment
  */
  consumer?: "client" | "server";
  /**
  * If true, `process.env` referenced in code will be preserved as-is and evaluated in runtime.
  * Otherwise, it is statically replaced as an empty object.
  */
  keepProcessEnv?: boolean;
  /**
  * Optimize deps config
  */
  optimizeDeps?: DepOptimizationOptions;
}
interface EnvironmentOptions extends SharedEnvironmentOptions {
  /**
  * Dev specific options
  */
  dev?: DevEnvironmentOptions;
  /**
  * Build specific options
  */
  build?: BuildEnvironmentOptions;
}
type ResolvedResolveOptions = Required<ResolveOptions>;
type ResolvedEnvironmentOptions = {
  define?: Record<string, any>;
  resolve: ResolvedResolveOptions;
  consumer: "client" | "server";
  keepProcessEnv?: boolean;
  optimizeDeps: DepOptimizationOptions;
  dev: ResolvedDevEnvironmentOptions;
  build: ResolvedBuildEnvironmentOptions;
  plugins: readonly Plugin[];
};
type DefaultEnvironmentOptions = Omit<EnvironmentOptions, "consumer" | "resolve" | "keepProcessEnv"> & {
  resolve?: AllResolveOptions;
};
interface UserConfig extends DefaultEnvironmentOptions {
  /**
  * Project root directory. Can be an absolute path, or a path relative from
  * the location of the config file itself.
  * @default process.cwd()
  */
  root?: string;
  /**
  * Base public path when served in development or production.
  * @default '/'
  */
  base?: string;
  /**
  * Directory to serve as plain static assets. Files in this directory are
  * served and copied to build dist dir as-is without transform. The value
  * can be either an absolute file system path or a path relative to project root.
  *
  * Set to `false` or an empty string to disable copied static assets to build dist dir.
  * @default 'public'
  */
  publicDir?: string | false;
  /**
  * Directory to save cache files. Files in this directory are pre-bundled
  * deps or some other cache files that generated by vite, which can improve
  * the performance. You can use `--force` flag or manually delete the directory
  * to regenerate the cache files. The value can be either an absolute file
  * system path or a path relative to project root.
  * Default to `.vite` when no `package.json` is detected.
  * @default 'node_modules/.vite'
  */
  cacheDir?: string;
  /**
  * Explicitly set a mode to run in. This will override the default mode for
  * each command, and can be overridden by the command line --mode option.
  */
  mode?: string;
  /**
  * Array of vite plugins to use.
  */
  plugins?: PluginOption[];
  /**
  * HTML related options
  */
  html?: HTMLOptions;
  /**
  * CSS related options (preprocessors and CSS modules)
  */
  css?: CSSOptions;
  /**
  * JSON loading options
  */
  json?: JsonOptions;
  /**
  * Transform options to pass to esbuild.
  * Or set to `false` to disable esbuild.
  */
  esbuild?: ESBuildOptions | false;
  /**
  * Specify additional picomatch patterns to be treated as static assets.
  */
  assetsInclude?: string | RegExp | (string | RegExp)[];
  /**
  * Builder specific options
  * @experimental
  */
  builder?: BuilderOptions;
  /**
  * Server specific options, e.g. host, port, https...
  */
  server?: ServerOptions$1;
  /**
  * Preview specific options, e.g. host, port, https...
  */
  preview?: PreviewOptions;
  /**
  * Experimental features
  *
  * Features under this field could change in the future and might NOT follow semver.
  * Please be careful and always pin Vite's version when using them.
  * @experimental
  */
  experimental?: ExperimentalOptions;
  /**
  * Options to opt-in to future behavior
  */
  future?: FutureOptions | "warn";
  /**
  * Legacy options
  *
  * Features under this field only follow semver for patches, they could be removed in a
  * future minor version. Please always pin Vite's version to a minor when using them.
  */
  legacy?: LegacyOptions;
  /**
  * Log level.
  * @default 'info'
  */
  logLevel?: LogLevel;
  /**
  * Custom logger.
  */
  customLogger?: Logger;
  /**
  * @default true
  */
  clearScreen?: boolean;
  /**
  * Environment files directory. Can be an absolute path, or a path relative from
  * root.
  * @default root
  */
  envDir?: string | false;
  /**
  * Env variables starts with `envPrefix` will be exposed to your client source code via import.meta.env.
  * @default 'VITE_'
  */
  envPrefix?: string | string[];
  /**
  * Worker bundle options
  */
  worker?: {
    /**
    * Output format for worker bundle
    * @default 'iife'
    */
    format?: "es" | "iife";
    /**
    * Vite plugins that apply to worker bundle. The plugins returned by this function
    * should be new instances every time it is called, because they are used for each
    * rollup worker bundling process.
    */
    plugins?: () => PluginOption[];
    /**
    * Rollup options to build worker bundle
    */
    rollupOptions?: Omit<RollupOptions, "plugins" | "input" | "onwarn" | "preserveEntrySignatures">;
  };
  /**
  * Dep optimization options
  */
  optimizeDeps?: DepOptimizationOptions;
  /**
  * SSR specific options
  * We could make SSROptions be a EnvironmentOptions if we can abstract
  * external/noExternal for environments in general.
  */
  ssr?: SSROptions;
  /**
  * Environment overrides
  */
  environments?: Record<string, EnvironmentOptions>;
  /**
  * Whether your application is a Single Page Application (SPA),
  * a Multi-Page Application (MPA), or Custom Application (SSR
  * and frameworks with custom HTML handling)
  * @default 'spa'
  */
  appType?: AppType;
}
interface HTMLOptions {
  /**
  * A nonce value placeholder that will be used when generating script/style tags.
  *
  * Make sure that this placeholder will be replaced with a unique value for each request by the server.
  */
  cspNonce?: string;
}
interface FutureOptions {
  removePluginHookHandleHotUpdate?: "warn";
  removePluginHookSsrArgument?: "warn";
  removeServerModuleGraph?: "warn";
  removeServerReloadModule?: "warn";
  removeServerPluginContainer?: "warn";
  removeServerHot?: "warn";
  removeServerTransformRequest?: "warn";
  removeServerWarmupRequest?: "warn";
  removeSsrLoadModule?: "warn";
}
interface ExperimentalOptions {
  /**
  * Append fake `&lang.(ext)` when queries are specified, to preserve the file extension for following plugins to process.
  *
  * @experimental
  * @default false
  */
  importGlobRestoreExtension?: boolean;
  /**
  * Allow finegrain control over assets and public files paths
  *
  * @experimental
  */
  renderBuiltUrl?: RenderBuiltAssetUrl;
  /**
  * Enables support of HMR partial accept via `import.meta.hot.acceptExports`.
  *
  * @experimental
  * @default false
  */
  hmrPartialAccept?: boolean;
}
interface LegacyOptions {
  /**
  * In Vite 6.0.8 and below, WebSocket server was able to connect from any web pages. However,
  * that could be exploited by a malicious web page.
  *
  * In Vite 6.0.9+, the WebSocket server now requires a token to connect from a web page.
  * But this may break some plugins and frameworks that connects to the WebSocket server
  * on their own. Enabling this option will make Vite skip the token check.
  *
  * **We do not recommend enabling this option unless you are sure that you are fine with
  * that security weakness.**
  */
  skipWebSocketTokenCheck?: boolean;
}
interface ResolvedWorkerOptions {
  format: "es" | "iife";
  plugins: (bundleChain: string[]) => Promise<ResolvedConfig>;
  rollupOptions: RollupOptions;
}
interface InlineConfig extends UserConfig {
  configFile?: string | false;
  /** @experimental */
  configLoader?: "bundle" | "runner" | "native";
  /** @deprecated */
  envFile?: false;
  forceOptimizeDeps?: boolean;
}
interface ResolvedConfig extends Readonly<Omit<UserConfig, "plugins" | "css" | "json" | "assetsInclude" | "optimizeDeps" | "worker" | "build" | "dev" | "environments" | "experimental" | "future" | "server" | "preview"> & {
  configFile: string | undefined;
  configFileDependencies: string[];
  inlineConfig: InlineConfig;
  root: string;
  base: string;
  publicDir: string;
  cacheDir: string;
  command: "build" | "serve";
  mode: string;
  isWorker: boolean;
  isProduction: boolean;
  envDir: string | false;
  env: Record<string, any>;
  resolve: Required<ResolveOptions> & {
    alias: Alias[];
  };
  plugins: readonly Plugin[];
  css: ResolvedCSSOptions;
  json: Required<JsonOptions>;
  esbuild: ESBuildOptions | false;
  server: ResolvedServerOptions;
  dev: ResolvedDevEnvironmentOptions;
  /** @experimental */
  builder: ResolvedBuilderOptions | undefined;
  build: ResolvedBuildOptions;
  preview: ResolvedPreviewOptions;
  ssr: ResolvedSSROptions;
  assetsInclude: (file: string) => boolean;
  logger: Logger;
  /**
  * Create an internal resolver to be used in special scenarios, e.g.
  * optimizer & handling css `@imports`.
  *
  * This API is deprecated. It only works for the client and ssr
  * environments. The `aliasOnly` option is also not being used anymore.
  * Plugins should move to `createIdResolver(environment.config)` instead.
  *
  * @deprecated Use `createIdResolver` from `vite` instead.
  */
  createResolver: (options?: Partial<InternalResolveOptions>) => ResolveFn;
  optimizeDeps: DepOptimizationOptions;
  worker: ResolvedWorkerOptions;
  appType: AppType;
  experimental: RequiredExceptFor<ExperimentalOptions, "renderBuiltUrl">;
  future: FutureOptions | undefined;
  environments: Record<string, ResolvedEnvironmentOptions>;
  /**
  * The token to connect to the WebSocket server from browsers.
  *
  * We recommend using `import.meta.hot` rather than connecting
  * to the WebSocket server directly.
  * If you have a usecase that requires connecting to the WebSocket
  * server, please create an issue so that we can discuss.
  *
  * @deprecated
  */
  webSocketToken: string;
} & PluginHookUtils> {}
interface PluginHookUtils {
  getSortedPlugins: <K$1 extends keyof Plugin>(hookName: K$1) => PluginWithRequiredHook<K$1>[];
  getSortedPluginHooks: <K$1 extends keyof Plugin>(hookName: K$1) => NonNullable<HookHandler<Plugin[K$1]>>[];
}
type ResolveFn = (id: string, importer?: string, aliasOnly?: boolean, ssr?: boolean) => Promise<string | undefined>;
declare function resolveConfig(inlineConfig: InlineConfig, command: "build" | "serve", defaultMode?: string, defaultNodeEnv?: string, isPreview?: boolean, patchConfig?: ((config: ResolvedConfig) => void) | undefined, patchPlugins?: ((resolvedPlugins: Plugin[]) => void) | undefined): Promise<ResolvedConfig>;
declare function sortUserPlugins(plugins: (Plugin | Plugin[])[] | undefined): [Plugin[], Plugin[], Plugin[]];
declare function loadConfigFromFile(configEnv: ConfigEnv, configFile?: string, configRoot?: string, logLevel?: LogLevel, customLogger?: Logger, configLoader?: "bundle" | "runner" | "native"): Promise<{
  path: string;
  config: UserConfig;
  dependencies: string[];
} | null>;
//#endregion
//#region src/node/idResolver.d.ts
type ResolveIdFn = (environment: PartialEnvironment, id: string, importer?: string, aliasOnly?: boolean) => Promise<string | undefined>;
/**
* Create an internal resolver to be used in special scenarios, e.g.
* optimizer and handling css @imports
*/
declare function createIdResolver(config: ResolvedConfig, options?: Partial<InternalResolveOptions>): ResolveIdFn;
//#endregion
//#region src/node/server/middlewares/error.d.ts
declare function buildErrorMessage(err: RollupError, args?: string[], includeStack?: boolean): string;
//#endregion
//#region src/node/ssr/runtime/serverModuleRunner.d.ts
/**
* @experimental
*/
interface ServerModuleRunnerOptions extends Omit<ModuleRunnerOptions, "root" | "fetchModule" | "hmr" | "transport"> {
  /**
  * Disable HMR or configure HMR logger.
  */
  hmr?: false | {
    logger?: ModuleRunnerHmr["logger"];
  };
  /**
  * Provide a custom module evaluator. This controls how the code is executed.
  */
  evaluator?: ModuleEvaluator;
}
declare const createServerModuleRunnerTransport: (options: {
  channel: NormalizedServerHotChannel;
}) => ModuleRunnerTransport;
/**
* Create an instance of the Vite SSR runtime that support HMR.
* @experimental
*/
declare function createServerModuleRunner(environment: DevEnvironment, options?: ServerModuleRunnerOptions): ModuleRunner;
//#endregion
//#region src/node/server/environments/runnableEnvironment.d.ts
declare function createRunnableDevEnvironment(name: string, config: ResolvedConfig, context?: RunnableDevEnvironmentContext): RunnableDevEnvironment;
interface RunnableDevEnvironmentContext extends Omit<DevEnvironmentContext, "hot"> {
  runner?: (environment: RunnableDevEnvironment, options?: ServerModuleRunnerOptions) => ModuleRunner;
  runnerOptions?: ServerModuleRunnerOptions;
  hot?: boolean;
}
declare function isRunnableDevEnvironment(environment: Environment): environment is RunnableDevEnvironment;
declare class RunnableDevEnvironment extends DevEnvironment {
  private _runner;
  private _runnerFactory;
  private _runnerOptions;
  constructor(name: string, config: ResolvedConfig, context: RunnableDevEnvironmentContext);
  get runner(): ModuleRunner;
  close(): Promise<void>;
}
//#endregion
//#region src/node/server/environments/fetchableEnvironments.d.ts
interface FetchableDevEnvironmentContext extends DevEnvironmentContext {
  handleRequest(request: Request): Promise<Response> | Response;
}
declare function createFetchableDevEnvironment(name: string, config: ResolvedConfig, context: FetchableDevEnvironmentContext): FetchableDevEnvironment;
declare function isFetchableDevEnvironment(environment: Environment): environment is FetchableDevEnvironment;
declare class FetchableDevEnvironment extends DevEnvironment {
  private _handleRequest;
  constructor(name: string, config: ResolvedConfig, context: FetchableDevEnvironmentContext);
  dispatchFetch(request: Request): Promise<Response>;
}
//#endregion
//#region src/node/ssr/runnerImport.d.ts
interface RunnerImportResult<T$1> {
  module: T$1;
  dependencies: string[];
}
/**
* Import any file using the default Vite environment.
* @experimental
*/
declare function runnerImport<T$1>(moduleId: string, inlineConfig?: InlineConfig): Promise<RunnerImportResult<T$1>>;
//#endregion
//#region src/node/ssr/fetchModule.d.ts
interface FetchModuleOptions {
  cached?: boolean;
  inlineSourceMap?: boolean;
  startOffset?: number;
}
/**
* Fetch module information for Vite runner.
* @experimental
*/
declare function fetchModule(environment: DevEnvironment, url: string, importer?: string, options?: FetchModuleOptions): Promise<moduleRunner_FetchResult>;
//#endregion
//#region src/node/ssr/ssrTransform.d.ts
interface ModuleRunnerTransformOptions {
  json?: {
    stringify?: boolean;
  };
}
declare function ssrTransform(code: string, inMap: SourceMap | {
  mappings: "";
} | null, url: string, originalCode: string, options?: ModuleRunnerTransformOptions): Promise<TransformResult | null>;
//#endregion
//#region src/node/constants.d.ts
declare const VERSION: string;
declare const DEFAULT_CLIENT_MAIN_FIELDS: readonly string[];
declare const DEFAULT_SERVER_MAIN_FIELDS: readonly string[];
declare const DEFAULT_CLIENT_CONDITIONS: readonly string[];
declare const DEFAULT_SERVER_CONDITIONS: readonly string[];
declare const DEFAULT_EXTERNAL_CONDITIONS: readonly string[];
declare const defaultAllowedOrigins: RegExp;
//#endregion
//#region src/node/utils.d.ts
/**
* Inlined to keep `@rollup/pluginutils` in devDependencies
*/
type FilterPattern = ReadonlyArray<string | RegExp> | string | RegExp | null;
declare const createFilter: (include?: FilterPattern, exclude?: FilterPattern, options?: {
  resolve?: string | false | null;
}) => (id: string | unknown) => boolean;
declare const rollupVersion: string;
declare function normalizePath(id: string): string;
declare const isCSSRequest: (request: string) => boolean;
declare function mergeConfig<D extends Record<string, any>, O extends Record<string, any>>(defaults: D extends Function ? never : D, overrides: O extends Function ? never : O, isRoot?: boolean): Record<string, any>;
declare function mergeAlias(a?: AliasOptions, b?: AliasOptions): AliasOptions | undefined;
//#endregion
//#region src/node/server/send.d.ts
interface SendOptions {
  etag?: string;
  cacheControl?: string;
  headers?: OutgoingHttpHeaders;
  map?: SourceMap | {
    mappings: "";
  } | null;
}
declare function send(req: http.IncomingMessage, res: ServerResponse, content: string | Buffer, type: string, options: SendOptions): void;
//#endregion
//#region src/node/server/searchRoot.d.ts
/**
* Search up for the nearest workspace root
*/
declare function searchForWorkspaceRoot(current: string, root?: string): string;
//#endregion
//#region src/node/server/middlewares/static.d.ts
/**
* Check if the url is allowed to be served, via the `server.fs` config.
* @deprecated Use the `isFileLoadingAllowed` function instead.
*/
declare function isFileServingAllowed(config: ResolvedConfig, url: string): boolean;
declare function isFileServingAllowed(url: string, server: ViteDevServer): boolean;
/**
* Warning: parameters are not validated, only works with normalized absolute paths
*/
declare function isFileLoadingAllowed(config: ResolvedConfig, filePath: string): boolean;
//#endregion
//#region src/node/env.d.ts
declare function loadEnv(mode: string, envDir: string | false, prefixes?: string | string[]): Record<string, string>;
declare function resolveEnvPrefix({
  envPrefix
}: UserConfig): string[];
//#endregion
//#region src/node/plugins/manifest.d.ts
type Manifest = Record<string, ManifestChunk>;
interface ManifestChunk {
  /**
  * The input file name of this chunk / asset if known
  */
  src?: string;
  /**
  * The output file name of this chunk / asset
  */
  file: string;
  /**
  * The list of CSS files imported by this chunk
  *
  * This field is only present in JS chunks.
  */
  css?: string[];
  /**
  * The list of asset files imported by this chunk, excluding CSS files
  *
  * This field is only present in JS chunks.
  */
  assets?: string[];
  /**
  * Whether this chunk or asset is an entry point
  */
  isEntry?: boolean;
  /**
  * The name of this chunk / asset if known
  */
  name?: string;
  /**
  * Whether this chunk is a dynamic entry point
  *
  * This field is only present in JS chunks.
  */
  isDynamicEntry?: boolean;
  /**
  * The list of statically imported chunks by this chunk
  *
  * The values are the keys of the manifest. This field is only present in JS chunks.
  */
  imports?: string[];
  /**
  * The list of dynamically imported chunks by this chunk
  *
  * The values are the keys of the manifest. This field is only present in JS chunks.
  */
  dynamicImports?: string[];
}
//#endregion
export { type Alias, type AliasOptions, type AnymatchFn, type AnymatchPattern, type AppType, type BindCLIShortcutsOptions, type BuildAppHook, BuildEnvironment, type BuildEnvironmentOptions, type BuildOptions, type BuilderOptions, type CLIShortcut, type CSSModulesOptions, type CSSOptions, type ChunkMetadata, type CommonServerOptions, type ConfigEnv, type ConfigPluginContext, type Connect, type ConnectedPayload, type CorsOptions, type CorsOrigin, type CustomEventMap, type CustomPayload, type CustomPluginOptionsVite, type DepOptimizationConfig, type DepOptimizationMetadata, type DepOptimizationOptions, DevEnvironment, type DevEnvironmentContext, type DevEnvironmentOptions, type ESBuildOptions, type ESBuildTransformResult, type Environment, type EnvironmentModuleGraph, type EnvironmentModuleNode, type EnvironmentOptions, type ErrorPayload, type EsbuildTransformOptions, type ExperimentalOptions, type ExportsData, type FSWatcher, type FetchFunction, type FetchModuleOptions, type FetchResult, type FetchableDevEnvironment, type FetchableDevEnvironmentContext, type FileSystemServeOptions, type FilterPattern, type FullReloadPayload, type GeneralImportGlobOptions, type HMRPayload, type HTMLOptions, type HmrContext, type HmrOptions, type HookHandler, type HotChannel, type HotChannelClient, type HotChannelListener, type HotPayload, type HotUpdateOptions, type HtmlTagDescriptor, type index_d_exports as HttpProxy, type HttpServer, type ImportGlobFunction, type ImportGlobOptions, type IndexHtmlTransform, type IndexHtmlTransformContext, type IndexHtmlTransformHook, type IndexHtmlTransformResult, type InferCustomEventPayload, type InlineConfig, type InternalResolveOptions, type InvalidatePayload, type JsonOptions, type KnownAsTypeMap, type LegacyOptions, type LessPreprocessorOptions, type LibraryFormats, type LibraryOptions, type LightningCSSOptions, type LogErrorOptions, type LogLevel, type LogOptions, type LogType, type Logger, type LoggerOptions, type Manifest, type ManifestChunk, type MapToFunction, type AnymatchMatcher as Matcher, type MinimalPluginContextWithoutEnvironment, type ModuleGraph, type ModuleNode, type ModulePreloadOptions, type ModuleRunnerTransformOptions, type NormalizedHotChannel, type NormalizedHotChannelClient, type NormalizedServerHotChannel, type OptimizedDepInfo, type Plugin, type PluginContainer, type PluginHookUtils, type PluginOption, type PreprocessCSSResult, type PreviewOptions, type PreviewServer, type PreviewServerHook, type ProxyOptions, type PrunePayload, type RenderBuiltAssetUrl, type ResolveFn, type ResolveModulePreloadDependenciesFn, type ResolveOptions, type ResolvedBuildEnvironmentOptions, type ResolvedBuildOptions, type ResolvedCSSOptions, type ResolvedConfig, type ResolvedDevEnvironmentOptions, type ResolvedModulePreloadOptions, type ResolvedPreviewOptions, type ResolvedSSROptions, type ResolvedServerOptions, type ResolvedServerUrls, type ResolvedUrl, type ResolvedWorkerOptions, type ResolverFunction, type ResolverObject, type Rollup, type RollupCommonJSOptions, type RollupDynamicImportVarsOptions, type RunnableDevEnvironment, type RunnableDevEnvironmentContext, type SSROptions, type SSRTarget, type SassPreprocessorOptions, type SendOptions, type ServerHook, type ServerHotChannel, type ServerModuleRunnerOptions, type ServerOptions$1 as ServerOptions, type SkipInformation, type SsrDepOptimizationConfig, type StylusPreprocessorOptions, type Terser, type TerserOptions, type TransformOptions, type TransformResult, type Update, type UpdatePayload, type UserConfig, type UserConfigExport, type UserConfigFn, type UserConfigFnObject, type UserConfigFnPromise, type ViteBuilder, type ViteDevServer, type WatchOptions, type WebSocket, type WebSocketAlias, type WebSocketClient, type WebSocketCustomListener, type WebSocketServer, build, buildErrorMessage, createBuilder, createFetchableDevEnvironment, createFilter, createIdResolver, createLogger, createRunnableDevEnvironment, createServer, createServerHotChannel, createServerModuleRunner, createServerModuleRunnerTransport, defaultAllowedOrigins, DEFAULT_CLIENT_CONDITIONS as defaultClientConditions, DEFAULT_CLIENT_MAIN_FIELDS as defaultClientMainFields, DEFAULT_EXTERNAL_CONDITIONS as defaultExternalConditions, DEFAULT_SERVER_CONDITIONS as defaultServerConditions, DEFAULT_SERVER_MAIN_FIELDS as defaultServerMainFields, defineConfig, esbuildVersion, fetchModule, formatPostcssSourceMap, isCSSRequest, isFetchableDevEnvironment, isFileLoadingAllowed, isFileServingAllowed, isRunnableDevEnvironment, loadConfigFromFile, loadEnv, mergeAlias, mergeConfig, ssrTransform as moduleRunnerTransform, normalizePath, optimizeDeps, parseAst, parseAstAsync, perEnvironmentPlugin, perEnvironmentState, preprocessCSS, preview, resolveConfig, resolveEnvPrefix, rollupVersion, runnerImport, searchForWorkspaceRoot, send, sortUserPlugins, transformWithEsbuild, VERSION as version };