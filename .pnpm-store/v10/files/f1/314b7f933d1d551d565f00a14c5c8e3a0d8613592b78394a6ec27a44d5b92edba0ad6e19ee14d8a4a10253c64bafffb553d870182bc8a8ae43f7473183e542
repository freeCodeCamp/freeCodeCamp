import { Context } from '@opentelemetry/api';
/**
 * Merge Sentry scopes into an OpenTelemetry {@link Context} and apply trace-context adjustments
 * used by Sentry OpenTelemetry context manager(s).
 *
 * @param context - Context passed into `ContextManager.with`.
 * @param activeContext - Context that was active before entering `with` (e.g. `this.active()`), used
 *   to restore the parent span when the incoming span is marked ignored for children.
 * @returns A new context ready for `super.with` / `AsyncLocalStorage.run`.
 */
export declare function buildContextWithSentryScopes(context: Context, activeContext: Context): Context;
//# sourceMappingURL=buildContextWithSentryScopes.d.ts.map
