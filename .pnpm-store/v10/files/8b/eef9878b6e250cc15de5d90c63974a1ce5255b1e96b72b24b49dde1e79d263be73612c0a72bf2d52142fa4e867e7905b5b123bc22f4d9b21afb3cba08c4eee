import { HttpResponse } from "./http";
import { MetadataBearer } from "./response";
/**
 * @public
 *
 * A document type represents an untyped JSON-like value.
 *
 * Not all protocols support document types, and the serialization format of a
 * document type is protocol specific. All JSON protocols SHOULD support
 * document types and they SHOULD serialize document types inline as normal
 * JSON values.
 */
export type DocumentType = null | boolean | number | string | DocumentType[] | {
    [prop: string]: DocumentType;
};
/**
 * @public
 *
 * A structure shape with the error trait.
 * https://smithy.io/2.0/spec/behavior-traits.html#smithy-api-retryable-trait
 */
export interface RetryableTrait {
    /**
     * Indicates that the error is a retryable throttling error.
     */
    readonly throttling?: boolean;
}
/**
 * @public
 *
 * Type that is implemented by all Smithy shapes marked with the
 * error trait.
 * @deprecated
 */
export interface SmithyException {
    /**
     * The shape ID name of the exception.
     */
    readonly name: string;
    /**
     * Whether the client or server are at fault.
     */
    readonly $fault: "client" | "server";
    /**
     * The service that encountered the exception.
     */
    readonly $service?: string;
    /**
     * Indicates that an error MAY be retried by the client.
     */
    readonly $retryable?: RetryableTrait;
    /**
     * Reference to low-level HTTP response object.
     */
    readonly $response?: HttpResponse;
}
/**
 * @public
 *
 * @deprecated See {@link https://aws.amazon.com/blogs/developer/service-error-handling-modular-aws-sdk-js/}
 *
 * This type should not be used in your application.
 * Users of the AWS SDK for JavaScript v3 service clients should prefer to
 * use the specific Exception classes corresponding to each operation.
 * These can be found as code in the deserializer for the operation's Command class,
 * or as declarations in the service model file in codegen/sdk-codegen/aws-models.
 *
 * If no exceptions are enumerated by a particular Command operation,
 * the base exception for the service should be used. Each client exports
 * a base ServiceException prefixed with the service name.
 */
export type SdkError = Error & Partial<SmithyException> & Partial<MetadataBearer> & {
    $metadata?: Partial<MetadataBearer>["$metadata"] & {
        /**
         * If present, will have value of true and indicates that the error resulted in a
         * correction of the clock skew, a.k.a. config.systemClockOffset.
         * This is specific to AWS SDK and sigv4.
         */
        readonly clockSkewCorrected?: true;
    };
};
