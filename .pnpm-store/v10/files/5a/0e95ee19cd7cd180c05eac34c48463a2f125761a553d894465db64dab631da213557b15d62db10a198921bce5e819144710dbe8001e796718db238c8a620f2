import {
  AbsoluteLocation,
  BuildHandlerOptions,
  BuildMiddleware,
  Pluggable,
} from "@smithy/types";
interface PreviouslyResolved {
  runtime: string;
}
export declare const recursionDetectionMiddleware: (
  options: PreviouslyResolved
) => BuildMiddleware<any, any>;
export declare const addRecursionDetectionMiddlewareOptions: BuildHandlerOptions &
  AbsoluteLocation;
export declare const getRecursionDetectionPlugin: (
  options: PreviouslyResolved
) => Pluggable<any, any>;
export {};
