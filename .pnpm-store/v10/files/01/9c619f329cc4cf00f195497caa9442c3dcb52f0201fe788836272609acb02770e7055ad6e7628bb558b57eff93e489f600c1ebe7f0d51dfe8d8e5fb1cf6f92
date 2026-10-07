import { Command } from "../command";
import { MetadataBearer } from "../response";
import { StreamingBlobPayloadOutputTypes } from "../streaming-payload/streaming-blob-payload-output-types";
import { Transform } from "./type-transform";
/**
 * @internal
 *
 * Narrowed version of InvokeFunction used in Client::send.
 */
export interface NarrowedInvokeFunction<NarrowType, HttpHandlerOptions, InputTypes extends object, OutputTypes extends MetadataBearer, ResolvedClientConfiguration> {
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, options?: HttpHandlerOptions): Promise<Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>>;
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, cb: (err: unknown, data?: Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>) => void): void;
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, options: HttpHandlerOptions, cb: (err: unknown, data?: Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>) => void): void;
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, options?: HttpHandlerOptions, cb?: (err: unknown, data?: Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>) => void): Promise<Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>> | void;
}
/**
 * @internal
 *
 * Narrowed version of InvokeMethod used in aggregated Client methods.
 */
export interface NarrowedInvokeMethod<NarrowType, HttpHandlerOptions, InputType extends object, OutputType extends MetadataBearer> {
    (input: InputType, options?: HttpHandlerOptions): Promise<Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>>;
    (input: InputType, cb: (err: unknown, data?: Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>) => void): void;
    (input: InputType, options: HttpHandlerOptions, cb: (err: unknown, data?: Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>) => void): void;
    (input: InputType, options?: HttpHandlerOptions, cb?: (err: unknown, data?: OutputType) => void): Promise<Transform<OutputType, StreamingBlobPayloadOutputTypes | undefined, NarrowType>> | void;
}
