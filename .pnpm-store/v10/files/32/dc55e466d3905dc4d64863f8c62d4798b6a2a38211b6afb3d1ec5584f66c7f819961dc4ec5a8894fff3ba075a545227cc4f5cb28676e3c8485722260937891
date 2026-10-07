import { HandlerDataFetch } from '../types/instrument';
/**
 * Add an instrumentation handler for when a fetch request happens.
 * The handler function is called once when the request starts and once when it ends,
 * which can be identified by checking if it has an `endTimestamp`.
 * Returns a function to remove the handler.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
export declare function addFetchInstrumentationHandler(handler: (data: HandlerDataFetch) => void, skipNativeFetchCheck?: boolean): () => void;
/**
 * Add an instrumentation handler for long-lived fetch requests, like consuming server-sent events (SSE) via fetch.
 * The handler will resolve the request body and emit the actual `endTimestamp`, so that the
 * span can be updated accordingly.
 * Returns a function to remove the handler.
 *
 * Only used internally
 * @hidden
 */
export declare function addFetchEndInstrumentationHandler(handler: (data: HandlerDataFetch) => void): () => void;
/**
 * Parses the fetch arguments to find the used Http method and the url of the request.
 * Exported for tests only.
 */
export declare function parseFetchArgs(fetchArgs: unknown[]): {
    method: string;
    url: string;
};
//# sourceMappingURL=fetch.d.ts.map
