/**
 * NOTE: the `graphql/subscription` module has been deprecated with its
 * exported functions integrated into the `graphql/execution` module, to
 * better conform with the terminology of the GraphQL specification.
 *
 * For backwards compatibility, the `graphql/subscription` module
 * currently re-exports the moved functions from the `graphql/execution`
 * module. In the next major release, the `graphql/subscription` module
 * will be dropped entirely.
 */
import type { ExecutionArgs } from '../execution/execute';
/**
 * @deprecated use ExecutionArgs instead. Will be removed in v17
 *
 * ExecutionArgs has been broadened to include all properties within SubscriptionArgs.
 * The SubscriptionArgs type is retained for backwards compatibility.
 */
export interface SubscriptionArgs extends ExecutionArgs {}
export { subscribe, createSourceEventStream } from '../execution/subscribe';
