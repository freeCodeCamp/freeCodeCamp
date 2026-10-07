import { Command } from "./command";
import { MiddlewareStack } from "./middleware";
import { MetadataBearer } from "./response";
import { OptionalParameter } from "./util";
/**
 * @public
 *
 * A type which checks if the client configuration is optional.
 * If all entries of the client configuration are optional, it allows client creation without passing any config.
 */
export type CheckOptionalClientConfig<T> = OptionalParameter<T>;
/**
 * @public
 *
 * function definition for different overrides of client's 'send' function.
 */
export interface InvokeFunction<InputTypes extends object, OutputTypes extends MetadataBearer, ResolvedClientConfiguration> {
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, options?: any): Promise<OutputType>;
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, cb: (err: any, data?: OutputType) => void): void;
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, options: any, cb: (err: any, data?: OutputType) => void): void;
    <InputType extends InputTypes, OutputType extends OutputTypes>(command: Command<InputTypes, InputType, OutputTypes, OutputType, ResolvedClientConfiguration>, options?: any, cb?: (err: any, data?: OutputType) => void): Promise<OutputType> | void;
}
/**
 * @public
 *
 * Signature that appears on aggregated clients' methods.
 */
export interface InvokeMethod<InputType extends object, OutputType extends MetadataBearer> {
    (input: InputType, options?: any): Promise<OutputType>;
    (input: InputType, cb: (err: any, data?: OutputType) => void): void;
    (input: InputType, options: any, cb: (err: any, data?: OutputType) => void): void;
    (input: InputType, options?: any, cb?: (err: any, data?: OutputType) => void): Promise<OutputType> | void;
}
/**
 * A general interface for service clients, idempotent to browser or node clients
 * This type corresponds to SmithyClient(https://github.com/aws/aws-sdk-js-v3/blob/main/packages/smithy-client/src/client.ts).
 * It's provided for using without importing the SmithyClient class.
 */
export interface Client<Input extends object, Output extends MetadataBearer, ResolvedClientConfiguration> {
    readonly config: ResolvedClientConfiguration;
    middlewareStack: MiddlewareStack<Input, Output>;
    send: InvokeFunction<Input, Output, ResolvedClientConfiguration>;
    destroy: () => void;
}
