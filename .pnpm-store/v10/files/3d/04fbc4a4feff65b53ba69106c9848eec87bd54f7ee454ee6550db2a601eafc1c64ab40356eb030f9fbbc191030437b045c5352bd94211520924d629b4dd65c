import type { Maybe } from '../jsutils/Maybe';
import type { DocumentNode } from '../language/ast';
import type { GraphQLFieldResolver } from '../type/definition';
import type { GraphQLSchema } from '../type/schema';
import type { ExecutionArgs, ExecutionResult } from './execute';
/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */
export declare function subscribe(
  args: ExecutionArgs,
): Promise<AsyncGenerator<ExecutionResult, void, void> | ExecutionResult>;
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise which resolves to either an AsyncIterable (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to the AsyncIterable for the
 * event stream returned by the resolver.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */
export declare function createSourceEventStream(
  args: ExecutionArgs,
): Promise<AsyncIterable<unknown> | ExecutionResult>;
/** @deprecated will be removed in next major version in favor of named arguments */
export declare function createSourceEventStream(
  schema: GraphQLSchema,
  document: DocumentNode,
  rootValue?: unknown,
  contextValue?: unknown,
  variableValues?: Maybe<{
    readonly [variable: string]: unknown;
  }>,
  operationName?: Maybe<string>,
  subscribeFieldResolver?: Maybe<GraphQLFieldResolver<any, any>>,
): Promise<AsyncIterable<unknown> | ExecutionResult>;
