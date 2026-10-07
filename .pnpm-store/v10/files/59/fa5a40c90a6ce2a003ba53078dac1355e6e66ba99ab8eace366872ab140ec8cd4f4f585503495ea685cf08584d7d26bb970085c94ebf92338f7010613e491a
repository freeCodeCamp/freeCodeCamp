export type HonoRequest = {
    path: string;
    method: string;
};
export type Context = {
    req: HonoRequest;
    res: Response;
    error: Error | undefined;
};
export type Next = () => Promise<void>;
export type Handler = (c: Context, next: Next) => Promise<Response> | Response;
export type MiddlewareHandler = (c: Context, next: Next) => Promise<Response | void>;
export type HandlerInterface = {
    (...handlers: (Handler | MiddlewareHandler)[]): HonoInstance;
    (path: string, ...handlers: (Handler | MiddlewareHandler)[]): HonoInstance;
};
export type OnHandlerInterface = {
    (method: string | string[], path: string | string[], ...handlers: (Handler | MiddlewareHandler)[]): HonoInstance;
};
export type MiddlewareHandlerInterface = {
    (...handlers: MiddlewareHandler[]): HonoInstance;
    (path: string, ...handlers: MiddlewareHandler[]): HonoInstance;
};
export interface HonoInstance {
    get: HandlerInterface;
    post: HandlerInterface;
    put: HandlerInterface;
    delete: HandlerInterface;
    options: HandlerInterface;
    patch: HandlerInterface;
    all: HandlerInterface;
    on: OnHandlerInterface;
    use: MiddlewareHandlerInterface;
}
export type Hono = new (...args: unknown[]) => HonoInstance;
//# sourceMappingURL=types.d.ts.map