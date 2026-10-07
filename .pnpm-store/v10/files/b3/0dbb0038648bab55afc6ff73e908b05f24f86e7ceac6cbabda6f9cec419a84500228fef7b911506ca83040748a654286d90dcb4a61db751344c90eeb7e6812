export type InstrumentHandlerType = 'console' | 'dom' | 'fetch' | 'fetch-body-resolved' | 'history' | 'xhr' | 'error' | 'unhandledrejection';
export type InstrumentHandlerCallback = (data: any) => void;
/** Add a handler function. Returns a function to remove the handler. */
export declare function addHandler(type: InstrumentHandlerType, handler: InstrumentHandlerCallback): () => void;
/**
 * Reset all instrumentation handlers.
 * This can be used by tests to ensure we have a clean slate of instrumentation handlers.
 */
export declare function resetInstrumentationHandlers(): void;
/** Maybe run an instrumentation function, unless it was already called. */
export declare function maybeInstrument(type: InstrumentHandlerType, instrumentFn: () => void): void;
/** Trigger handlers for a given instrumentation type. */
export declare function triggerHandlers(type: InstrumentHandlerType, data: unknown): void;
//# sourceMappingURL=handlers.d.ts.map