import { DeserializeHandlerOptions, Endpoint, MetadataBearer, Pluggable, Provider, RequestSerializer, ResponseDeserializer, SerdeContext, SerdeFunctions, SerializeHandlerOptions, UrlParser } from "@smithy/types";
export declare const deserializerMiddlewareOption: DeserializeHandlerOptions;
export declare const serializerMiddlewareOption: SerializeHandlerOptions;
export type V1OrV2Endpoint = {
    urlParser?: UrlParser;
    endpoint?: Provider<Endpoint>;
};
/**
 * @internal
 *
 */
export declare function getSerdePlugin<InputType extends object = any, CommandSerdeContext extends SerdeContext = any, OutputType extends MetadataBearer = any>(config: V1OrV2Endpoint & SerdeFunctions, serializer: RequestSerializer<any, CommandSerdeContext>, deserializer: ResponseDeserializer<OutputType, any, CommandSerdeContext>): Pluggable<InputType, OutputType>;
