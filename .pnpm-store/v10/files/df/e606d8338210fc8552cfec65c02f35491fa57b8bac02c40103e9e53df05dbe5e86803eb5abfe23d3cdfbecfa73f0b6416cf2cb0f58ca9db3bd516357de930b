import { HttpResponse, MetadataBearer, ResponseMetadata, RetryableTrait, SmithyException } from "@smithy/types";
/**
 * The type of the exception class constructor parameter. The returned type contains the properties
 * in the `ExceptionType` but not in the `BaseExceptionType`. If the `BaseExceptionType` contains
 * `$metadata` and `message` properties, it's also included in the returned type.
 * @internal
 */
export type ExceptionOptionType<ExceptionType extends Error, BaseExceptionType extends Error> = Omit<ExceptionType, Exclude<keyof BaseExceptionType, "$metadata" | "message">>;
/**
 * @public
 */
export interface ServiceExceptionOptions extends SmithyException, MetadataBearer {
    message?: string;
}
/**
 * @public
 *
 * Base exception class for the exceptions from the server-side.
 */
export declare class ServiceException extends Error implements SmithyException, MetadataBearer {
    readonly $fault: "client" | "server";
    $response?: HttpResponse;
    $retryable?: RetryableTrait;
    $metadata: ResponseMetadata;
    constructor(options: ServiceExceptionOptions);
}
/**
 * This method inject unmodeled member to a deserialized SDK exception,
 * and load the error message from different possible keys('message',
 * 'Message').
 *
 * @internal
 */
export declare const decorateServiceException: <E extends ServiceException>(exception: E, additions?: Record<string, any>) => E;
