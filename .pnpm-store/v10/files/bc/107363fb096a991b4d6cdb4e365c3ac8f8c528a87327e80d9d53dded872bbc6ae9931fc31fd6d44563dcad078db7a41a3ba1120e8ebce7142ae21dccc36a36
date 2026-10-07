import type { HandlerDataConsole } from '../types/instrument';
/**
 * Add an instrumentation handler for when a console.xxx method is called.
 * Returns a function to remove the handler.
 *
 * Use at your own risk, this might break without changelog notice, only used internally.
 * @hidden
 */
export declare function addConsoleInstrumentationHandler(handler: (data: HandlerDataConsole) => void): () => void;
/**
 * Add a filter to the console instrumentation to filter out console messages that match the given strings or regular expressions.
 * Returns a function to remove the filter.
 */
export declare function addConsoleInstrumentationFilter(filter: (string | RegExp)[]): () => void;
/** Only exported for tests. */
export declare function _INTERNAL_resetConsoleInstrumentationOptions(): void;
//# sourceMappingURL=console.d.ts.map