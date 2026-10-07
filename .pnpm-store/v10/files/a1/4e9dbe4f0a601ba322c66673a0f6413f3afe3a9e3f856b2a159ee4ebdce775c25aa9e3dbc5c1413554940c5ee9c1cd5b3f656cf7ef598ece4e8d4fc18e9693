import { IncomingMessage, ServerResponse } from 'http';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';

declare function Router<V extends Router.HTTPVersion = Router.HTTPVersion.V1>(
  config?: Router.Config<V>
): Router.Instance<V>;

declare namespace Router {
  enum HTTPVersion {
    V1 = 'http1',
    V2 = 'http2'
  }

  type HTTPMethod =
    | 'ACL'
    | 'BIND'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'DELETE'
    | 'GET'
    | 'HEAD'
    | 'LINK'
    | 'LOCK'
    | 'M-SEARCH'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKCALENDAR'
    | 'MKCOL'
    | 'MOVE'
    | 'NOTIFY'
    | 'OPTIONS'
    | 'PATCH'
    | 'POST'
    | 'PROPFIND'
    | 'PROPPATCH'
    | 'PURGE'
    | 'PUT'
    | 'REBIND'
    | 'REPORT'
    | 'SEARCH'
    | 'SOURCE'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNBIND'
    | 'UNLINK'
    | 'UNLOCK'
    | 'UNSUBSCRIBE';

  type Req<V> = V extends HTTPVersion.V1 ? IncomingMessage : Http2ServerRequest;
  type Res<V> = V extends HTTPVersion.V1 ? ServerResponse : Http2ServerResponse;

  type Handler<V extends HTTPVersion> = (
    req: Req<V>,
    res: Res<V>,
    params: { [k: string]: string | undefined },
    store: any,
    searchParams: { [k: string]: string }
  ) => any;

  type Done = (err: Error | null, result: any) => void;

  interface ConstraintStrategy<V extends HTTPVersion, T = string> {
    name: string,
    mustMatchWhenDerived?: boolean,
    storage() : {
      get(value: T) : Handler<V> | null,
      set(value: T, handler: Handler<V>) : void,
      del?(value: T) : void,
      empty?() : void
    },
    validate?(value: unknown): void,
    deriveConstraint<Context>(req: Req<V>, ctx?: Context) : T,
  }

  type QuerystringParser = (s: string) => unknown;

  interface Config<V extends HTTPVersion> {
    ignoreTrailingSlash?: boolean;

    ignoreDuplicateSlashes?: boolean;

    allowUnsafeRegex?: boolean;

    caseSensitive?: boolean;

    maxParamLength?: number;

    querystringParser?: QuerystringParser;

    defaultRoute?(
      req: Req<V>,
      res: Res<V>
    ): void;

    onBadUrl?(
      path: string,
      req: Req<V>,
      res: Res<V>
    ): void;

    constraints? : {
      [key: string]: ConstraintStrategy<V>
    }
  }

  interface RouteOptions {
    constraints?: { [key: string]: any }
  }

  interface ShortHandRoute<V extends HTTPVersion> {
    (path: string, handler: Handler<V>): void;
    (path: string, opts: RouteOptions, handler: Handler<V>): void;
    (path: string, handler: Handler<V>, store: any): void;
    (path: string, opts: RouteOptions, handler: Handler<V>, store: any): void;
  }

  interface FindResult<V extends HTTPVersion> {
    handler: Handler<V>;
    params: { [k: string]: string | undefined };
    store: any;
    searchParams: { [k: string]: string };
  }

  interface FindRouteResult<V extends HTTPVersion> {
    handler: Handler<V>;
    store: any;
    params: string[];
  }

  interface Instance<V extends HTTPVersion> {
    on(
      method: HTTPMethod | HTTPMethod[],
      path: string,
      handler: Handler<V>
    ): void;
    on(
      method: HTTPMethod | HTTPMethod[],
      path: string,
      options: RouteOptions,
      handler: Handler<V>
    ): void;
    on(
      method: HTTPMethod | HTTPMethod[],
      path: string,
      handler: Handler<V>,
      store: any
    ): void;
    on(
      method: HTTPMethod | HTTPMethod[],
      path: string,
      options: RouteOptions,
      handler: Handler<V>,
      store: any
    ): void;
    off(
      method: HTTPMethod | HTTPMethod[],
      path: string,
      constraints?: { [key: string]: any }
    ): void;

    lookup<Context>(
      req: Req<V>,
      res: Res<V>,
      ctx?: Context | Done,
      done?: Done
    ): any;

    find(
      method: HTTPMethod,
      path: string,
      constraints?: { [key: string]: any }
    ): FindResult<V> | null;

    findRoute(
      method: HTTPMethod,
      path: string,
      constraints?: { [key: string]: any }
    ): FindRouteResult<V> | null;

    hasRoute(
      method: HTTPMethod,
      path: string,
      constraints?: { [key: string]: any }
    ): boolean;

    reset(): void;
    prettyPrint(): string;
    prettyPrint(opts: {
      method?: HTTPMethod,
      commonPrefix?: boolean,
      includeMeta?: boolean | (string | symbol)[]
    }): string;

    hasConstraintStrategy(strategyName: string): boolean;
    addConstraintStrategy(constraintStrategy: ConstraintStrategy<V>): void;

    all: ShortHandRoute<V>;

    acl: ShortHandRoute<V>;
    bind: ShortHandRoute<V>;
    checkout: ShortHandRoute<V>;
    connect: ShortHandRoute<V>;
    copy: ShortHandRoute<V>;
    delete: ShortHandRoute<V>;
    get: ShortHandRoute<V>;
    head: ShortHandRoute<V>;
    link: ShortHandRoute<V>;
    lock: ShortHandRoute<V>;
    'm-search': ShortHandRoute<V>;
    merge: ShortHandRoute<V>;
    mkactivity: ShortHandRoute<V>;
    mkcalendar: ShortHandRoute<V>;
    mkcol: ShortHandRoute<V>;
    move: ShortHandRoute<V>;
    notify: ShortHandRoute<V>;
    options: ShortHandRoute<V>;
    patch: ShortHandRoute<V>;
    post: ShortHandRoute<V>;
    propfind: ShortHandRoute<V>;
    proppatch: ShortHandRoute<V>;
    purge: ShortHandRoute<V>;
    put: ShortHandRoute<V>;
    rebind: ShortHandRoute<V>;
    report: ShortHandRoute<V>;
    search: ShortHandRoute<V>;
    source: ShortHandRoute<V>;
    subscribe: ShortHandRoute<V>;
    trace: ShortHandRoute<V>;
    unbind: ShortHandRoute<V>;
    unlink: ShortHandRoute<V>;
    unlock: ShortHandRoute<V>;
    unsubscribe: ShortHandRoute<V>;
  }
}

export = Router;
