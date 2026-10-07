import { AbsoluteLocation, FinalizeHandler, FinalizeRequestHandlerOptions, HandlerExecutionContext, MetadataBearer, Pluggable } from "@smithy/types";
import { RetryResolvedConfig } from "./configurations";
export declare const retryMiddleware: (options: RetryResolvedConfig) => <Output extends MetadataBearer = MetadataBearer>(next: FinalizeHandler<any, Output>, context: HandlerExecutionContext) => FinalizeHandler<any, Output>;
export declare const retryMiddlewareOptions: FinalizeRequestHandlerOptions & AbsoluteLocation;
export declare const getRetryPlugin: (options: RetryResolvedConfig) => Pluggable<any, any>;
export declare const getRetryAfterHint: (response: unknown) => Date | undefined;
