import type { Client } from '@sentry/core';
type UnhandledRejectionMode = 'none' | 'warn' | 'strict';
type IgnoreMatcher = {
    name?: string | RegExp;
    message?: string | RegExp;
};
interface OnUnhandledRejectionOptions {
    /**
     * Option deciding what to do after capturing unhandledRejection,
     * that mimicks behavior of node's --unhandled-rejection flag.
     */
    mode: UnhandledRejectionMode;
    /** Rejection Errors to ignore (don't capture or warn). */
    ignore?: IgnoreMatcher[];
}
export declare const onUnhandledRejectionIntegration: (options?: Partial<OnUnhandledRejectionOptions> | undefined) => import("@sentry/core").Integration;
/** Core handler */
export declare function makeUnhandledPromiseHandler(client: Client, options: OnUnhandledRejectionOptions): (reason: unknown, promise: unknown) => void;
export {};
//# sourceMappingURL=onunhandledrejection.d.ts.map