interface DefaultState {
}
export type Next = () => Promise<any>;
type ParameterizedContext<_StateT = DefaultState, ContextT = {}, _ResponseBodyT = unknown> = {
    [key: string]: any;
} & ContextT;
type Middleware<StateT = DefaultState, ContextT = {}, ResponseBodyT = any> = (context: ParameterizedContext<StateT, ContextT, ResponseBodyT>, next: Next) => any;
interface RouterParamContext<StateT = DefaultState, ContextT = {}> {
    params: Record<string, string>;
    router: Router<StateT, ContextT>;
    _matchedRoute: string | RegExp | undefined;
    _matchedRouteName: string | undefined;
}
interface Layer {
    path: string | RegExp;
    stack: any[];
}
export interface Router<_StateT = DefaultState, _ContextT = {}> {
    stack: Layer[];
}
export type KoaContext = ParameterizedContext<DefaultState, RouterParamContext>;
export type KoaMiddleware = Middleware<DefaultState, KoaContext> & {
    router?: Router;
};
/**
 * This symbol is used to mark a Koa layer as being already instrumented
 * since its possible to use a given layer multiple times (ex: middlewares)
 */
export declare const kLayerPatched: unique symbol;
export type KoaPatchedMiddleware = KoaMiddleware & {
    [kLayerPatched]?: boolean;
};
export {};
//# sourceMappingURL=internal-types.d.ts.map
