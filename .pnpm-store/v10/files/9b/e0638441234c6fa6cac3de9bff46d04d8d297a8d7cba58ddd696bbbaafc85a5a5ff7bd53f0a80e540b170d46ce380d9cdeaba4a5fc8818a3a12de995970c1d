import { Context } from '@opentelemetry/api';
import { Scope } from '@sentry/core';
import { CurrentScopes } from '../types';
/**
 * Try to get the current scopes from the given OTEL context.
 * This requires a Context Manager that was wrapped with getWrappedContextManager.
 */
export declare function getScopesFromContext(context: Context): CurrentScopes | undefined;
/**
 * Set the current scopes on an OTEL context.
 * This will return a forked context with the Propagation Context set.
 */
export declare function setScopesOnContext(context: Context, scopes: CurrentScopes): Context;
/**
 * Set the context on the scope so we can later look it up.
 * We need this to get the context from the scope in the `trace` functions.
 *
 * We use WeakRef to avoid a circular reference between the scope and the context.
 * The context holds scopes (via SENTRY_SCOPES_CONTEXT_KEY), and if the scope held
 * a strong reference back to the context, neither could be garbage collected even
 * when the context is no longer reachable from application code (e.g., after a
 * request completes but pooled connections retain patched callbacks).
 */
export declare function setContextOnScope(scope: Scope, context: Context): void;
/**
 * Get the context related to a scope.
 * Returns undefined if the context has been garbage collected (when WeakRef is used).
 */
export declare function getContextFromScope(scope: Scope): Context | undefined;
//# sourceMappingURL=contextData.d.ts.map
