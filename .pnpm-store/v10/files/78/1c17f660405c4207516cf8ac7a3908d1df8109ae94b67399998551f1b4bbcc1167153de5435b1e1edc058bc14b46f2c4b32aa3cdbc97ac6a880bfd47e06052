import type { Client } from './client';
import { Scope } from './scope';
import type { TraceContext } from './types/context';
/**
 * Register an external propagation context provider function.
 * When registered, trace context will be read from the external source (e.g. OpenTelemetry)
 * instead of from the Sentry scope's propagation context.
 */
export declare function registerExternalPropagationContext(fn: () => {
    traceId: string;
    spanId: string;
} | undefined): void;
/**
 * Get the external propagation context, if a provider has been registered.
 */
export declare function getExternalPropagationContext(): {
    traceId: string;
    spanId: string;
} | undefined;
/**
 * Check if an external propagation context provider has been registered.
 */
export declare function hasExternalPropagationContext(): boolean;
/**
 * Get the currently active scope.
 */
export declare function getCurrentScope(): Scope;
/**
 * Get the currently active isolation scope.
 * The isolation scope is active for the current execution context.
 */
export declare function getIsolationScope(): Scope;
/**
 * Get the global scope.
 * This scope is applied to _all_ events.
 */
export declare function getGlobalScope(): Scope;
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 */
export declare function withScope<T>(callback: (scope: Scope) => T): T;
/**
 * Set the given scope as the active scope in the callback.
 */
export declare function withScope<T>(scope: Scope | undefined, callback: (scope: Scope) => T): T;
/**
 * Attempts to fork the current isolation scope and the current scope based on the current async context strategy. If no
 * async context strategy is set, the isolation scope and the current scope will not be forked (this is currently the
 * case, for example, in the browser).
 *
 * Usage of this function in environments without async context strategy is discouraged and may lead to unexpected behaviour.
 *
 * This function is intended for Sentry SDK and SDK integration development. It is not recommended to be used in "normal"
 * applications directly because it comes with pitfalls. Use at your own risk!
 */
export declare function withIsolationScope<T>(callback: (isolationScope: Scope) => T): T;
/**
 * Set the provided isolation scope as active in the given callback. If no
 * async context strategy is set, the isolation scope and the current scope will not be forked (this is currently the
 * case, for example, in the browser).
 *
 * Usage of this function in environments without async context strategy is discouraged and may lead to unexpected behaviour.
 *
 * This function is intended for Sentry SDK and SDK integration development. It is not recommended to be used in "normal"
 * applications directly because it comes with pitfalls. Use at your own risk!
 *
 * If you pass in `undefined` as a scope, it will fork a new isolation scope, the same as if no scope is passed.
 */
export declare function withIsolationScope<T>(isolationScope: Scope | undefined, callback: (isolationScope: Scope) => T): T;
/**
 * Get the currently active client.
 */
export declare function getClient<C extends Client>(): C | undefined;
/**
 * Get a trace context for the given scope.
 */
export declare function getTraceContextFromScope(scope: Scope): TraceContext;
//# sourceMappingURL=currentScopes.d.ts.map