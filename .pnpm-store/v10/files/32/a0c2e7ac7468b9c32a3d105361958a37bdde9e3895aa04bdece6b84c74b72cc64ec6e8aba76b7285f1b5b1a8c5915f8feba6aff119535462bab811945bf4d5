import { Handler, MiddlewareStack } from "./middleware";
import { MetadataBearer } from "./response";
/**
 * @public
 */
export interface Command<ClientInput extends object, InputType extends ClientInput, ClientOutput extends MetadataBearer, OutputType extends ClientOutput, ResolvedConfiguration> {
    readonly input: InputType;
    readonly middlewareStack: MiddlewareStack<InputType, OutputType>;
    resolveMiddleware(stack: MiddlewareStack<ClientInput, ClientOutput>, configuration: ResolvedConfiguration, options: any): Handler<InputType, OutputType>;
}
