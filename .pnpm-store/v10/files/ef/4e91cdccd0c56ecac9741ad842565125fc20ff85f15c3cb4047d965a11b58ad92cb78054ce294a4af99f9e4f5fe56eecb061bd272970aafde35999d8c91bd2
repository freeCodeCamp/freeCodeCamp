import { Endpoint } from "./http";
import { FinalizeHandler, FinalizeHandlerArguments, FinalizeHandlerOutput } from "./middleware";
import { MetadataBearer } from "./response";
/**
 * @public
 *
 * A generic which checks if Type1 is exactly same as Type2.
 */
export type Exact<Type1, Type2> = [Type1] extends [Type2] ? ([Type2] extends [Type1] ? true : false) : false;
/**
 * @public
 *
 * A function that, given a Uint8Array of bytes, can produce a string
 * representation thereof. The function may optionally attempt to
 * convert other input types to Uint8Array before encoding.
 *
 * @example An encoder function that converts bytes to hexadecimal
 * representation would return `'hello'` when given
 * `new Uint8Array([104, 101, 108, 108, 111])`.
 */
export interface Encoder {
    /**
     * Caution: the `any` type on the input is for backwards compatibility.
     * Runtime support is limited to Uint8Array and string by default.
     *
     * You may choose to support more encoder input types if overriding the default
     * implementations.
     */
    (input: Uint8Array | string | any): string;
}
/**
 * @public
 *
 * A function that, given a string, can derive the bytes represented by that
 * string.
 *
 * @example A decoder function that converts bytes to hexadecimal
 * representation would return `new Uint8Array([104, 101, 108, 108, 111])` when
 * given the string `'hello'`.
 */
export interface Decoder {
    (input: string): Uint8Array;
}
/**
 * @public
 *
 * A function that, when invoked, returns a promise that will be fulfilled with
 * a value of type T.
 *
 * @example A function that reads credentials from shared SDK configuration
 * files, assuming roles and collecting MFA tokens as necessary.
 */
export interface Provider<T> {
    (): Promise<T>;
}
/**
 * @public
 *
 * A tuple that represents an API name and optional version
 * of a library built using the AWS SDK.
 */
export type UserAgentPair = [name: string, version?: string];
/**
 * @public
 *
 * User agent data that to be put into the request's user
 * agent.
 */
export type UserAgent = UserAgentPair[];
/**
 * @public
 *
 * Parses a URL in string form into an Endpoint object.
 */
export interface UrlParser {
    (url: string | URL): Endpoint;
}
/**
 * @public
 *
 * A function that, when invoked, returns a promise that will be fulfilled with
 * a value of type T. It memoizes the result from the previous invocation
 * instead of calling the underlying resources every time.
 *
 * You can force the provider to refresh the memoized value by invoke the
 * function with optional parameter hash with `forceRefresh` boolean key and
 * value `true`.
 *
 * @example A function that reads credentials from IMDS service that could
 * return expired credentials. The SDK will keep using the expired credentials
 * until an unretryable service error requiring a force refresh of the
 * credentials.
 */
export interface MemoizedProvider<T> {
    (options?: {
        forceRefresh?: boolean;
    }): Promise<T>;
}
/**
 * @public
 *
 * A function that, given a request body, determines the
 * length of the body. This is used to determine the Content-Length
 * that should be sent with a request.
 *
 * @example A function that reads a file stream and calculates
 * the size of the file.
 */
export interface BodyLengthCalculator {
    (body: any): number | undefined;
}
/**
 * @public
 *
 * Object containing regionalization information of
 * AWS services.
 */
export interface RegionInfo {
    hostname: string;
    partition: string;
    path?: string;
    signingService?: string;
    signingRegion?: string;
}
/**
 * @public
 *
 * Options to pass when calling {@link RegionInfoProvider}
 */
export interface RegionInfoProviderOptions {
    /**
     * Enables IPv6/IPv4 dualstack endpoint.
     * @defaultValue false
     */
    useDualstackEndpoint: boolean;
    /**
     * Enables FIPS compatible endpoints.
     * @defaultValue false
     */
    useFipsEndpoint: boolean;
}
/**
 * @public
 *
 * Function returns designated service's regionalization
 * information from given region. Each service client
 * comes with its regionalization provider. it serves
 * to provide the default values of related configurations
 */
export interface RegionInfoProvider {
    (region: string, options?: RegionInfoProviderOptions): Promise<RegionInfo | undefined>;
}
/**
 * @public
 *
 * Interface that specifies the retry behavior
 */
export interface RetryStrategy {
    /**
     * The retry mode describing how the retry strategy control the traffic flow.
     */
    mode?: string;
    /**
     * the retry behavior the will invoke the next handler and handle the retry accordingly.
     * This function should also update the $metadata from the response accordingly.
     * @see {@link ResponseMetadata}
     */
    retry: <Input extends object, Output extends MetadataBearer>(next: FinalizeHandler<Input, Output>, args: FinalizeHandlerArguments<Input>) => Promise<FinalizeHandlerOutput<Output>>;
}
/**
 * @public
 *
 * Indicates the parameter may be omitted if the parameter object T
 * is equivalent to a Partial<T>, i.e. all properties optional.
 */
export type OptionalParameter<T> = Exact<Partial<T>, T> extends true ? [] | [T] : [T];
