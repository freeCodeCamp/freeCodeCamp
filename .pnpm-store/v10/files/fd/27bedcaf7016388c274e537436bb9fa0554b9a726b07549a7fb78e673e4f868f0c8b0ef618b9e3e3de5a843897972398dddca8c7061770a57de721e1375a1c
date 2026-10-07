interface SentryTrpcMiddlewareOptions {
    /** Whether to include procedure inputs in reported events. Defaults to `false`. */
    attachRpcInput?: boolean;
    forceTransaction?: boolean;
}
export interface SentryTrpcMiddlewareArguments<T> {
    path?: unknown;
    type?: unknown;
    next: () => T;
    rawInput?: unknown;
    getRawInput?: () => Promise<unknown>;
}
type SentryTrpcMiddleware<T> = T extends Promise<unknown> ? T : Promise<T>;
/**
 * Sentry tRPC middleware that captures errors and creates spans for tRPC procedures.
 */
export declare function trpcMiddleware(options?: SentryTrpcMiddlewareOptions): <T>(opts: SentryTrpcMiddlewareArguments<T>) => SentryTrpcMiddleware<T>;
export {};
//# sourceMappingURL=trpc.d.ts.map
