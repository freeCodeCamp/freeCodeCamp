import { Endpoint } from "./http";
import { RequestHandler } from "./transfer";
import { Decoder, Encoder, Provider } from "./util";
/**
 * @public
 *
 * Interface for object requires an Endpoint set.
 */
export interface EndpointBearer {
    endpoint: Provider<Endpoint>;
}
/**
 * @public
 */
export interface StreamCollector {
    /**
     * A function that converts a stream into an array of bytes.
     *
     * @param stream - The low-level native stream from browser or Nodejs runtime
     */
    (stream: any): Promise<Uint8Array>;
}
/**
 * @public
 *
 * Request and Response serde util functions and settings for AWS services
 */
export interface SerdeContext extends SerdeFunctions, EndpointBearer {
    requestHandler: RequestHandler<any, any>;
    disableHostPrefix: boolean;
}
/**
 * @public
 *
 * Serde functions from the client config.
 */
export interface SerdeFunctions {
    base64Encoder: Encoder;
    base64Decoder: Decoder;
    utf8Encoder: Encoder;
    utf8Decoder: Decoder;
    streamCollector: StreamCollector;
}
/**
 * @public
 */
export interface RequestSerializer<Request, Context extends EndpointBearer = any> {
    /**
     * Converts the provided `input` into a request object
     *
     * @param input - The user input to serialize.
     *
     * @param context - Context containing runtime-specific util functions.
     */
    (input: any, context: Context): Promise<Request>;
}
/**
 * @public
 */
export interface ResponseDeserializer<OutputType, ResponseType = any, Context = any> {
    /**
     * Converts the output of an operation into JavaScript types.
     *
     * @param output - The HTTP response received from the service
     *
     * @param context - context containing runtime-specific util functions.
     */
    (output: ResponseType, context: Context): Promise<OutputType>;
}
/**
 * The interface contains mix-in utility functions to transfer the runtime-specific
 * stream implementation to specified format. Each stream can ONLY be transformed
 * once.
 */
export interface SdkStreamMixin {
    transformToByteArray: () => Promise<Uint8Array>;
    transformToString: (encoding?: string) => Promise<string>;
    transformToWebStream: () => ReadableStream;
}
/**
 * @public
 *
 * The type describing a runtime-specific stream implementation with mix-in
 * utility functions.
 */
export type SdkStream<BaseStream> = BaseStream & SdkStreamMixin;
/**
 * @public
 *
 * Indicates that the member of type T with
 * key StreamKey have been extended
 * with the SdkStreamMixin helper methods.
 */
export type WithSdkStreamMixin<T, StreamKey extends keyof T> = {
    [key in keyof T]: key extends StreamKey ? SdkStream<T[StreamKey]> : T[key];
};
/**
 * Interface for internal function to inject stream utility functions
 * implementation
 *
 * @internal
 */
export interface SdkStreamMixinInjector {
    (stream: unknown): SdkStreamMixin;
}
/**
 * @internal
 */
export interface SdkStreamSerdeContext {
    sdkStreamMixin: SdkStreamMixinInjector;
}
