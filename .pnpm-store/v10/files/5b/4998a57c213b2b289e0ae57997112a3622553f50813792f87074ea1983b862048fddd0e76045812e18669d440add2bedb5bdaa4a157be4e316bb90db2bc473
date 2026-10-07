"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = exports.provideContext = exports.never = exports.mapInputContext = exports.makeWithEntry = exports.makeBatched = exports.make = exports.locally = exports.isRequestResolver = exports.fromFunctionBatched = exports.fromFunction = exports.fromEffectTagged = exports.fromEffect = exports.eitherWith = exports.contextFromServices = exports.contextFromEffect = exports.batchN = exports.aroundRequests = exports.around = exports.RequestResolverTypeId = void 0;
var Context = _interopRequireWildcard(require("./Context.js"));
var Effect = _interopRequireWildcard(require("./Effect.js"));
var core = _interopRequireWildcard(require("./internal/core.js"));
var internal = _interopRequireWildcard(require("./internal/dataSource.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 * @category symbols
 */
const RequestResolverTypeId = exports.RequestResolverTypeId = core.RequestResolverTypeId;
/**
 * @since 2.0.0
 * @category utils
 */
const contextFromEffect = self => Effect.contextWith(_ => provideContext(self, _));
/**
 * @since 2.0.0
 * @category utils
 */
exports.contextFromEffect = contextFromEffect;
const contextFromServices = (...services) => self => Effect.contextWith(_ => provideContext(self, Context.pick(...services)(_)));
/**
 * Returns `true` if the specified value is a `RequestResolver`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
exports.contextFromServices = contextFromServices;
const isRequestResolver = exports.isRequestResolver = core.isRequestResolver;
/**
 * Constructs a data source with the specified identifier and method to run
 * requests.
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Constructs a data source with the specified identifier and method to run
 * requests.
 *
 * @since 2.0.0
 * @category constructors
 */
const makeWithEntry = exports.makeWithEntry = internal.makeWithEntry;
/**
 * Constructs a data source from a function taking a collection of requests.
 *
 * @since 2.0.0
 * @category constructors
 */
const makeBatched = exports.makeBatched = internal.makeBatched;
/**
 * A data source aspect that executes requests between two effects, `before`
 * and `after`, where the result of `before` can be used by `after`.
 *
 * @since 2.0.0
 * @category combinators
 */
const around = exports.around = internal.around;
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
const aroundRequests = exports.aroundRequests = internal.aroundRequests;
/**
 * Returns a data source that executes at most `n` requests in parallel.
 *
 * @since 2.0.0
 * @category combinators
 */
const batchN = exports.batchN = internal.batchN;
/**
 * Provides this data source with part of its required context.
 *
 * @since 2.0.0
 * @category context
 */
const mapInputContext = exports.mapInputContext = internal.mapInputContext;
/**
 * Returns a new data source that executes requests of type `C` using the
 * specified function to transform `C` requests into requests that either this
 * data source or that data source can execute.
 *
 * @since 2.0.0
 * @category combinators
 */
const eitherWith = exports.eitherWith = internal.eitherWith;
/**
 * Constructs a data source from a pure function.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromFunction = exports.fromFunction = internal.fromFunction;
/**
 * Constructs a data source from a pure function that takes a list of requests
 * and returns a list of results of the same size. Each item in the result
 * list must correspond to the item at the same index in the request list.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromFunctionBatched = exports.fromFunctionBatched = internal.fromFunctionBatched;
/**
 * Constructs a data source from an effectual function.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffect = exports.fromEffect = internal.fromEffect;
/**
 * Constructs a data source from a list of tags paired to functions, that takes
 * a list of requests and returns a list of results of the same size. Each item
 * in the result list must correspond to the item at the same index in the
 * request list.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffectTagged = exports.fromEffectTagged = internal.fromEffectTagged;
/**
 * A data source that never executes requests.
 *
 * @since 2.0.0
 * @category constructors
 */
const never = exports.never = internal.never;
/**
 * Provides this data source with its required context.
 *
 * @since 2.0.0
 * @category context
 */
const provideContext = exports.provideContext = internal.provideContext;
/**
 * Returns a new data source that executes requests by sending them to this
 * data source and that data source, returning the results from the first data
 * source to complete and safely interrupting the loser.
 *
 * @since 2.0.0
 * @category combinators
 */
const race = exports.race = internal.race;
/**
 * Returns a new data source with a localized FiberRef
 *
 * @since 2.0.0
 * @category combinators
 */
const locally = exports.locally = core.resolverLocally;
//# sourceMappingURL=RequestResolver.js.map