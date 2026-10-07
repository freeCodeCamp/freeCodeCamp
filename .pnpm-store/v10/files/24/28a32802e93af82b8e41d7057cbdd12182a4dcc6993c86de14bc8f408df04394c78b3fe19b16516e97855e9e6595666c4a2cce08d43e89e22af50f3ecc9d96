/**
 *
 * common
 *
 */
/**
 * Parameters for GraphQL's request for execution.
 *
 * Reference: https://graphql.github.io/graphql-over-http/draft/#sec-Request-Parameters
 *
 * @category Common
 */
export interface RequestParams {
    operationName?: string | null | undefined;
    query: string;
    variables?: Record<string, unknown> | null | undefined;
    extensions?: Record<string, unknown> | null | undefined;
}
/**
 * A representation of any set of values over any amount of time.
 *
 * @category Common
 */
export interface Sink<T = unknown> {
    /** Next value arriving. */
    next(value: T): void;
    /** An error that has occurred. This function "closes" the sink. */
    error(error: unknown): void;
    /** The sink has completed. This function "closes" the sink. */
    complete(): void;
}
