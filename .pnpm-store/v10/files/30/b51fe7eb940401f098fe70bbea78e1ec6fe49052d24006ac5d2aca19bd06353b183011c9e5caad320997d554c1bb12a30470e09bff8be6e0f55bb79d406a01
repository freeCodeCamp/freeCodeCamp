import type { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import type { Command as ICommand, Handler, HandlerExecutionContext, HttpRequest as IHttpRequest, HttpResponse as IHttpResponse, Logger, MetadataBearer, MiddlewareStack as IMiddlewareStack, OptionalParameter, Pluggable, RequestHandler, SerdeContext } from "@smithy/types";
/**
 * @public
 */
export declare abstract class Command<Input extends ClientInput, Output extends ClientOutput, ResolvedClientConfiguration, ClientInput extends object = any, ClientOutput extends MetadataBearer = any> implements ICommand<ClientInput, Input, ClientOutput, Output, ResolvedClientConfiguration> {
    abstract input: Input;
    readonly middlewareStack: IMiddlewareStack<Input, Output>;
    /**
     * Factory for Command ClassBuilder.
     * @internal
     */
    static classBuilder<I extends SI, O extends SO, C extends {
        logger: Logger;
        requestHandler: RequestHandler<any, any, any>;
    }, SI extends object = any, SO extends MetadataBearer = any>(): ClassBuilder<I, O, C, SI, SO>;
    abstract resolveMiddleware(stack: IMiddlewareStack<ClientInput, ClientOutput>, configuration: ResolvedClientConfiguration, options: any): Handler<Input, Output>;
    /**
     * @internal
     */
    resolveMiddlewareWithContext(clientStack: IMiddlewareStack<any, any>, configuration: {
        logger: Logger;
        requestHandler: RequestHandler<any, any, any>;
    }, options: any, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor, }: ResolveMiddlewareContextArgs): import("@smithy/types").InitializeHandler<any, Output>;
}
/**
 * @internal
 */
type ResolveMiddlewareContextArgs = {
    middlewareFn: (CommandCtor: any, clientStack: any, config: any, options: any) => Pluggable<any, any>[];
    clientName: string;
    commandName: string;
    smithyContext: Record<string, unknown>;
    additionalContext: HandlerExecutionContext;
    inputFilterSensitiveLog: (_: any) => any;
    outputFilterSensitiveLog: (_: any) => any;
    CommandCtor: any;
};
/**
 * @internal
 */
declare class ClassBuilder<I extends SI, O extends SO, C extends {
    logger: Logger;
    requestHandler: RequestHandler<any, any, any>;
}, SI extends object = any, SO extends MetadataBearer = any> {
    private _init;
    private _ep;
    private _middlewareFn;
    private _commandName;
    private _clientName;
    private _additionalContext;
    private _smithyContext;
    private _inputFilterSensitiveLog;
    private _outputFilterSensitiveLog;
    private _serializer;
    private _deserializer;
    /**
     * Optional init callback.
     */
    init(cb: (_: Command<I, O, C, SI, SO>) => void): void;
    /**
     * Set the endpoint parameter instructions.
     */
    ep(endpointParameterInstructions: EndpointParameterInstructions): ClassBuilder<I, O, C, SI, SO>;
    /**
     * Add any number of middleware.
     */
    m(middlewareSupplier: (CommandCtor: any, clientStack: any, config: any, options: any) => Pluggable<any, any>[]): ClassBuilder<I, O, C, SI, SO>;
    /**
     * Set the initial handler execution context Smithy field.
     */
    s(service: string, operation: string, smithyContext?: Record<string, unknown>): ClassBuilder<I, O, C, SI, SO>;
    /**
     * Set the initial handler execution context.
     */
    c(additionalContext?: HandlerExecutionContext): ClassBuilder<I, O, C, SI, SO>;
    /**
     * Set constant string identifiers for the operation.
     */
    n(clientName: string, commandName: string): ClassBuilder<I, O, C, SI, SO>;
    /**
     * Set the input and output sensistive log filters.
     */
    f(inputFilter?: (_: any) => any, outputFilter?: (_: any) => any): ClassBuilder<I, O, C, SI, SO>;
    /**
     * Sets the serializer.
     */
    ser(serializer: (input: I, context?: SerdeContext | any) => Promise<IHttpRequest>): ClassBuilder<I, O, C, SI, SO>;
    /**
     * Sets the deserializer.
     */
    de(deserializer: (output: IHttpResponse, context?: SerdeContext | any) => Promise<O>): ClassBuilder<I, O, C, SI, SO>;
    /**
     * @returns a Command class with the classBuilder properties.
     */
    build(): {
        new (input: I): CommandImpl<I, O, C, SI, SO>;
        new (...[input]: OptionalParameter<I>): CommandImpl<I, O, C, SI, SO>;
        getEndpointParameterInstructions(): EndpointParameterInstructions;
    };
}
/**
 * A concrete implementation of ICommand with no abstract members.
 * @public
 */
export interface CommandImpl<I extends SI, O extends SO, C extends {
    logger: Logger;
    requestHandler: RequestHandler<any, any, any>;
}, SI extends object = any, SO extends MetadataBearer = any> extends Command<I, O, C, SI, SO> {
    readonly input: I;
    resolveMiddleware(stack: IMiddlewareStack<SI, SO>, configuration: C, options: any): Handler<I, O>;
}
export {};
