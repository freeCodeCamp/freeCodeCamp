/**
 * Create and return an open-tracing compatible tracer. See
 * https://github.com/opentracing/opentracing-javascript/blob/master/src/tracer.ts
 */
export declare const create: () => ZipkinTracer;
/**
 * Run any tracer cleanup required before the node.js process
 * exits. For Zipkin HTTP, we must manually process any spans still on
 * the queue
 */
export declare const stop: () => Promise<void>;
