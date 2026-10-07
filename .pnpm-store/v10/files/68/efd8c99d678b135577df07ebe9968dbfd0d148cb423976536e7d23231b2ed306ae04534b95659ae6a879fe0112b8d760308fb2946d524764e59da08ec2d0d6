import { Tracer } from "opentracing";
/**
 * tracerFile should be a js file that exports two functions.
 *
 * `create` - Create and return an open-tracing compatible tracer. See
 * https://github.com/opentracing/opentracing-javascript/blob/master/src/tracer.ts
 *
 * `stop` - Run any tracer cleanup required before the node.js process
 * exits
 */
export declare const initTracer: (tracerFile: string) => Promise<Tracer>;
export declare const stopTracer: () => Promise<void>;
