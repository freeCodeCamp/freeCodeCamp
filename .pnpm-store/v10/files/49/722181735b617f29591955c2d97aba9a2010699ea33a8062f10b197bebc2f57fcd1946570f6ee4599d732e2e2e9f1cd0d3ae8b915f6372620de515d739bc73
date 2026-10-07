export const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
export const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
export const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});
