import type { Context, ContextManager } from '@opentelemetry/api';
import { AsyncLocalStorage } from 'node:async_hooks';
import type { AsyncLocalStorageLookup } from './contextManager';
/**
 * OpenTelemetry-compatible context manager using Node.js `AsyncLocalStorage`.
 * Semantics match `@opentelemetry/context-async-hooks` (function `bind` + `EventEmitter` patching).
 */
export declare class SentryAsyncLocalStorageContextManager implements ContextManager {
    protected readonly _asyncLocalStorage: AsyncLocalStorage<Context>;
    private readonly _kOtListeners;
    private _wrapped;
    constructor();
    active(): Context;
    with<A extends unknown[], F extends (...args: A) => ReturnType<F>>(context: Context, fn: F, thisArg?: ThisParameterType<F>, ...args: A): ReturnType<F>;
    enable(): this;
    disable(): this;
    bind<T>(context: Context, target: T): T;
    /**
     * Gets underlying AsyncLocalStorage and symbol to allow lookup of scope.
     * This is Sentry-specific.
     */
    getAsyncLocalStorageLookup(): AsyncLocalStorageLookup;
    private _bindFunction;
    private _bindEventEmitter;
    private _patchRemoveListener;
    private _patchRemoveAllListeners;
    private _patchAddListener;
    private _createPatchMap;
    private _getPatchMap;
}
//# sourceMappingURL=asyncLocalStorageContextManager.d.ts.map