import { AsyncLocalStorage } from 'node:async_hooks';
import { ContextManager } from '@opentelemetry/api';
export type AsyncLocalStorageLookup = {
    asyncLocalStorage: AsyncLocalStorage<unknown>;
    contextSymbol: symbol;
};
type ExtendedContextManagerInstance<ContextManagerInstance extends ContextManager> = new (...args: unknown[]) => ContextManagerInstance & {
    getAsyncLocalStorageLookup(): AsyncLocalStorageLookup;
};
/**
 * Wrap an OpenTelemetry ContextManager in a way that ensures the context is kept in sync with the Sentry Scope.
 *
 * Usage:
 * import { AsyncLocalStorageContextManager } from '@opentelemetry/context-async-hooks';
 * const SentryContextManager = wrapContextManagerClass(AsyncLocalStorageContextManager);
 * const contextManager = new SentryContextManager();
 *
 * @deprecated Use {@link SentryAsyncLocalStorageContextManager} instead.
 */
export declare function wrapContextManagerClass<ContextManagerInstance extends ContextManager>(ContextManagerClass: new (...args: unknown[]) => ContextManagerInstance): ExtendedContextManagerInstance<ContextManagerInstance>;
export {};
//# sourceMappingURL=contextManager.d.ts.map
