/**
 * @since 2.0.0
 */
import * as Context from "./Context.js";
import * as Effect from "./Effect.js";
import * as core from "./internal/core.js";
import * as internal from "./internal/dataSource.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const RequestResolverTypeId = core.RequestResolverTypeId;
/**
 * @since 2.0.0
 * @category utils
 */
export const contextFromEffect = self => Effect.contextWith(_ => provideContext(self, _));
/**
 * @since 2.0.0
 * @category utils
 */
export const contextFromServices = (...services) => self => Effect.contextWith(_ => provideContext(self, Context.pick(...services)(_)));
/**
 * Returns `true` if the specified value is a `RequestResolver`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isRequestResolver = core.isRequestResolver;
/**
 * Constructs a data source with the specified identifier and method to run
 * requests.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make = internal.make;
/**
 * Constructs a data source with the specified identifier and method to run
 * requests.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeWithEntry = internal.makeWithEntry;
/**
 * Constructs a data source from a function taking a collection of requests.
 *
 * @since 2.0.0
 * @category constructors
 */
export const makeBatched = internal.makeBatched;
/**
 * A data source aspect that executes requests between two effects, `before`
 * and `after`, where the result of `before` can be used by `after`.
 *
 * @since 2.0.0
 * @category combinators
 */
export const around = internal.around;
/**
 * A data source aspect that executes requests between two effects, `before`
 * and `after`, where the result of `before` can be used by `after`.
 *
 * The `before` and `after` effects are provided with the requests being executed.
 *
 * @since 2.0.0
 * @category combinators
 * @example
 * ```ts
 * import { Effect, Request, RequestResolver } from "effect"
 *
 * interface GetUserById extends Request.Request<unknown> {
 *   readonly id: number
 * }
 *
 * const resolver = RequestResolver.fromFunction(
 *   (request: GetUserById) => ({ id: request.id, name: "John" })
 * )
 *
 * RequestResolver.aroundRequests(
 *   resolver,
 *   (requests) => Effect.log(`got ${requests.length} requests`),
 *   (requests, _) => Effect.log(`finised running ${requests.length} requests`)
 * )
 * ```
 */
export const aroundRequests = internal.aroundRequests;
/**
 * Returns a data source that executes at most `n` requests in parallel.
 *
 * @since 2.0.0
 * @category combinators
 */
export const batchN = internal.batchN;
/**
 * Provides this data source with part of its required context.
 *
 * @since 2.0.0
 * @category context
 */
export const mapInputContext = internal.mapInputContext;
/**
 * Returns a new data source that executes requests of type `C` using the
 * specified function to transform `C` requests into requests that either this
 * data source or that data source can execute.
 *
 * @since 2.0.0
 * @category combinators
 */
export const eitherWith = internal.eitherWith;
/**
 * Constructs a data source from a pure function.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromFunction = internal.fromFunction;
/**
 * Constructs a data source from a pure function that takes a list of requests
 * and returns a list of results of the same size. Each item in the result
 * list must correspond to the item at the same index in the request list.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromFunctionBatched = internal.fromFunctionBatched;
/**
 * Constructs a data source from an effectual function.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffect = internal.fromEffect;
/**
 * Constructs a data source from a list of tags paired to functions, that takes
 * a list of requests and returns a list of results of the same size. Each item
 * in the result list must correspond to the item at the same index in the
 * request list.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffectTagged = internal.fromEffectTagged;
/**
 * A data source that never executes requests.
 *
 * @since 2.0.0
 * @category constructors
 */
export const never = internal.never;
/**
 * Provides this data source with its required context.
 *
 * @since 2.0.0
 * @category context
 */
export const provideContext = internal.provideContext;
/**
 * Returns a new data source that executes requests by sending them to this
 * data source and that data source, returning the results from the first data
 * source to complete and safely interrupting the loser.
 *
 * @since 2.0.0
 * @category combinators
 */
export const race = internal.race;
/**
 * Returns a new data source with a localized FiberRef
 *
 * @since 2.0.0
 * @category combinators
 */
export const locally = core.resolverLocally;
//# sourceMappingURL=RequestResolver.js.map