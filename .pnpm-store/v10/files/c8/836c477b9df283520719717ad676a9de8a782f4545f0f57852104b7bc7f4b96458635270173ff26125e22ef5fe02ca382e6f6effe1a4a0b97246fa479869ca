interface AggregateError extends Error {
    errors: any[];
}
interface AggregateErrorConstructor {
    new (errors: Iterable<any>, message?: string): AggregateError;
    (errors: Iterable<any>, message?: string): AggregateError;
    readonly prototype: AggregateError;
}
declare let AggregateErrorImpl: AggregateErrorConstructor;
export { AggregateErrorImpl as AggregateError };
export declare function isAggregateError(error: Error): error is AggregateError;
