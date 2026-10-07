type AsyncTuple<ErrorType extends any = Error, DataType extends any = unknown> = {
    error: ErrorType;
    data: null;
} | {
    error: null;
    data: DataType;
};
/**
 * Gracefully handles a given Promise factory.
 * @example
 * const { error, data } = await until(() => asyncAction())
 */
declare const until: <ErrorType extends unknown = Error, DataType extends unknown = unknown>(promise: () => Promise<DataType>) => Promise<AsyncTuple<ErrorType, DataType>>;

export { until };
