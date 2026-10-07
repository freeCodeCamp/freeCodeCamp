import { AbsoluteLocation, BuildHandlerOptions, BuildMiddleware, Pluggable } from "@smithy/types";
interface PreviouslyResolved {
    runtime: string;
}
/**
 * Inject to trace ID to request header to detect recursion invocation in Lambda.
 * @internal
 */
export declare const recursionDetectionMiddleware: (options: PreviouslyResolved) => BuildMiddleware<any, any>;
/**
 * @internal
 */
export declare const addRecursionDetectionMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation;
/**
 * @internal
 */
export declare const getRecursionDetectionPlugin: (options: PreviouslyResolved) => Pluggable<any, any>;
export {};
