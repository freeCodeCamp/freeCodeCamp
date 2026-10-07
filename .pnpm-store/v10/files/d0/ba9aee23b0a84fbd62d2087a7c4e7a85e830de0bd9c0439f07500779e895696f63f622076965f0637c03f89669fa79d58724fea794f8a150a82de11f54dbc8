import * as Hapi from './hapi-types';
export declare const HapiComponentName = "@hapi/hapi";
/**
 * This symbol is used to mark a Hapi route handler or server extension handler as
 * already patched, since its possible to use these handlers multiple times
 * i.e. when allowing multiple versions of one plugin, or when registering a plugin
 * multiple times on different servers.
 */
export declare const handlerPatched: unique symbol;
export type HapiServerRouteInputMethod = (route: HapiServerRouteInput) => void;
export type HapiServerRouteInput = PatchableServerRoute | PatchableServerRoute[];
export type PatchableServerRoute = Hapi.ServerRoute<any> & {
    [handlerPatched]?: boolean;
};
export type HapiPluginObject<T> = Hapi.ServerRegisterPluginObject<T>;
export type HapiPluginInput<T> = HapiPluginObject<T> | Array<HapiPluginObject<T>>;
export type RegisterFunction<T> = (plugin: HapiPluginInput<T>, options?: Hapi.ServerRegisterOptions) => Promise<void>;
export type PatchableExtMethod = Hapi.Lifecycle.Method & {
    [handlerPatched]?: boolean;
};
export type ServerExtDirectInput = [
    Hapi.ServerRequestExtType,
    Hapi.Lifecycle.Method,
    (Hapi.ServerExtOptions | undefined)?
];
export declare const HapiLayerType: {
    ROUTER: string;
    PLUGIN: string;
    EXT: string;
};
export declare const HapiLifecycleMethodNames: Set<string>;
//# sourceMappingURL=internal-types.d.ts.map
