export type ServerOptions = Record<string, any>;
export declare function server(options?: ServerOptions): Server;
export declare function Server(options?: ServerOptions): Server;
export type ServerRequestExtType = 'onPreAuth' | 'onCredentials' | 'onPostAuth' | 'onPreHandler' | 'onPostHandler' | 'onPreResponse' | 'onRequest';
export declare namespace Lifecycle {
    type Method = (request: any, h: any, err?: Error) => ReturnValue;
    type ReturnValue = any;
    type FailAction = 'error' | 'log' | 'ignore' | Method;
}
export interface ServerRoute<T = any> {
    path: string;
    method: string;
    handler?: Lifecycle.Method | T;
    options?: ((server: Server) => ServerRouteOptions) | ServerRouteOptions;
    [key: string]: any;
}
interface ServerRouteOptions {
    handler?: Lifecycle.Method | any;
    [key: string]: any;
}
export interface Server {
    route: (...args: any[]) => any;
    ext: (...args: any[]) => any;
    register: (...args: any[]) => any;
    [key: string]: any;
}
export interface Plugin<T, _V = void> {
    register: (server: Server, options: T) => void | Promise<void>;
    name?: string;
    pkg?: {
        name: string;
        [key: string]: any;
    };
    [key: string]: any;
}
export interface PluginNameVersion {
    name: string;
    [key: string]: any;
}
export interface PluginPackage {
    pkg: {
        name: string;
        [key: string]: any;
    };
    [key: string]: any;
}
export interface ServerRegisterPluginObject<T> {
    plugin: Plugin<T, void> | {
        plugin: Plugin<T, void>;
        [key: string]: any;
    };
    [key: string]: any;
}
export interface ServerRegisterOptions {
    [key: string]: any;
}
export interface ServerExtEventsObject {
    type: string;
    [key: string]: any;
}
export interface ServerExtEventsRequestObject {
    type: ServerRequestExtType;
    method: Lifecycle.Method;
    [key: string]: any;
}
export interface ServerExtOptions {
    [key: string]: any;
}
export {};
//# sourceMappingURL=hapi-types.d.ts.map