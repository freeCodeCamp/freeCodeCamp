import type * as stream from 'stream';
interface Podium {
    new (events?: Events[]): Podium;
    new (events?: Events): Podium;
    registerEvent(events: Events[]): void;
    registerEvent(events: Events): void;
    registerPodium?(podiums: Podium[]): void;
    registerPodium?(podiums: Podium): void;
    emit(criteria: string | {
        name: string;
        channel?: string | undefined;
        tags?: string | string[] | undefined;
    }, data: any, callback?: () => void): void;
    on(criteria: string | Criteria, listener: Listener): void;
    addListener(criteria: string | Criteria, listener: Listener): void;
    once(criteria: string | Criteria, listener: Listener): void;
    removeListener(name: string, listener: Listener): Podium;
    removeAllListeners(name: string): Podium;
    hasListeners(name: string): boolean;
}
export interface Boom<Data = any> extends Error {
    isBoom: boolean;
    isServer: boolean;
    message: string;
    output: Output;
    reformat: () => string;
    isMissing?: boolean | undefined;
    data: Data;
}
export interface Output {
    statusCode: number;
    headers: {
        [index: string]: string;
    };
    payload: Payload;
}
export interface Payload {
    statusCode: number;
    error: string;
    message: string;
    attributes?: any;
}
export type Events = string | EventOptionsObject | Podium;
export interface EventOptionsObject {
    name: string;
    channels?: string | string[] | undefined;
    clone?: boolean | undefined;
    spread?: boolean | undefined;
    tags?: boolean | undefined;
    shared?: boolean | undefined;
}
export interface CriteriaObject {
    name: string;
    block?: boolean | number | undefined;
    channels?: string | string[] | undefined;
    clone?: boolean | undefined;
    count?: number | undefined;
    filter?: string | string[] | CriteriaFilterOptionsObject | undefined;
    spread?: boolean | undefined;
    tags?: boolean | undefined;
    listener?: Listener | undefined;
}
export interface CriteriaFilterOptionsObject {
    tags?: string | string[] | undefined;
    all?: boolean | undefined;
}
export type Criteria = string | CriteriaObject;
export interface Listener {
    (data: any, tags?: Tags, callback?: () => void): void;
}
export type Tags = {
    [tag: string]: boolean;
};
interface UserCredentials {
}
interface AppCredentials {
}
interface AuthCredentials {
    scope?: string[] | undefined;
    user?: UserCredentials | undefined;
    app?: AppCredentials | undefined;
}
interface RequestAuth {
    artifacts: object;
    credentials: AuthCredentials;
    error: Error;
    isAuthenticated: boolean;
    isAuthorized: boolean;
    mode: string;
    strategy: string;
}
interface RequestEvents extends Podium {
    on(criteria: 'peek', listener: PeekListener): void;
    on(criteria: 'finish' | 'disconnect', listener: (data: undefined) => void): void;
    once(criteria: 'peek', listener: PeekListener): void;
    once(criteria: 'finish' | 'disconnect', listener: (data: undefined) => void): void;
}
declare namespace Lifecycle {
    type Method = (request: Request, h: ResponseToolkit, err?: Error) => ReturnValue;
    type ReturnValue = ReturnValueTypes | Promise<ReturnValueTypes>;
    type ReturnValueTypes = (null | string | number | boolean) | Buffer | (Error | Boom) | stream.Stream | (object | object[]) | symbol | ResponseToolkit;
    type FailAction = 'error' | 'log' | 'ignore' | Method;
}
declare namespace Util {
    interface Dictionary<T> {
        [key: string]: T;
    }
    type HTTP_METHODS_PARTIAL_LOWERCASE = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options';
    type HTTP_METHODS_PARTIAL = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS' | HTTP_METHODS_PARTIAL_LOWERCASE;
    type HTTP_METHODS = 'HEAD' | 'head' | HTTP_METHODS_PARTIAL;
}
interface RequestRoute {
    method: Util.HTTP_METHODS_PARTIAL;
    path: string;
    vhost?: string | string[] | undefined;
    realm: any;
    fingerprint: string;
    auth: {
        access(request: Request): boolean;
    };
}
export interface Request extends Podium {
    app: ApplicationState;
    readonly auth: RequestAuth;
    events: RequestEvents;
    readonly headers: Util.Dictionary<string>;
    readonly path: string;
    response: ResponseObject | Boom | null;
    readonly route: RequestRoute;
    readonly url: URL;
}
interface ResponseObjectHeaderOptions {
    append?: boolean | undefined;
    separator?: string | undefined;
    override?: boolean | undefined;
    duplicate?: boolean | undefined;
}
export interface ResponseObject extends Podium {
    readonly statusCode: number;
    header(name: string, value: string, options?: ResponseObjectHeaderOptions): ResponseObject;
}
interface ResponseToolkit {
    readonly continue: symbol;
}
export interface RequestEvent {
    timestamp: string;
    tags: string[];
    channel: 'internal' | 'app' | 'error';
    data: object;
    error: object;
}
interface ServerEvents {
    on(criteria: any, listener: any): void;
}
export type Server = Record<string, any> & {
    events: ServerEvents;
    register: any;
    ext(event: any, method: Lifecycle.Method, options?: Record<string, any>): void;
    initialize(): Promise<void>;
    start(): Promise<void>;
};
interface ApplicationState {
}
type PeekListener = (chunk: string, encoding: string) => void;
export {};
//# sourceMappingURL=types.d.ts.map