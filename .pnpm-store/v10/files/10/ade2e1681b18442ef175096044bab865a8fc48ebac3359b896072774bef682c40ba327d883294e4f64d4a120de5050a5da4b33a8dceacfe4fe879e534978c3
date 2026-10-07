import { Attributes, Span, Tracer } from '@opentelemetry/api';
import { PluginFastifyReply } from './internal-types';
/**
 * Starts Span
 * @param reply - reply function
 * @param tracer - tracer
 * @param spanName - span name
 * @param spanAttributes - span attributes
 */
export declare function startSpan(reply: PluginFastifyReply, tracer: Tracer, spanName: string, spanAttributes?: Attributes): Span;
/**
 * Ends span
 * @param reply - reply function
 * @param err - error
 */
export declare function endSpan(reply: PluginFastifyReply, err?: any): void;
/**
 * This function handles the missing case from instrumentation package when
 * execute can either return a promise or void. And using async is not an
 * option as it is producing unwanted side effects.
 * @param execute - function to be executed
 * @param onFinish - function called when function executed
 * @param preventThrowingError - prevent to throw error when execute
 * function fails
 */
export declare function safeExecuteInTheMiddleMaybePromise<T>(execute: () => Promise<T>, onFinish: (e: unknown, result?: T) => void, preventThrowingError?: boolean): Promise<T>;
export declare function safeExecuteInTheMiddleMaybePromise<T>(execute: () => T, onFinish: (e: unknown, result?: T) => void, preventThrowingError?: boolean): T;
//# sourceMappingURL=utils.d.ts.map
