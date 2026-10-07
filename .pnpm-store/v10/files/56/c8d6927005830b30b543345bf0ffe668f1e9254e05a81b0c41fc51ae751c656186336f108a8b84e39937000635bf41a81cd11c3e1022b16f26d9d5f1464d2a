import * as RA from "../Array.js"
import * as Cause from "../Cause.js"
import * as Chunk from "../Chunk.js"
import type * as Context from "../Context.js"
import * as Effect from "../Effect.js"
import type * as Either from "../Either.js"
import { dual, pipe } from "../Function.js"
import type * as Request from "../Request.js"
import type * as RequestResolver from "../RequestResolver.js"
import type { NoInfer } from "../Types.js"
import * as core from "./core.js"
import { invokeWithInterrupt, zipWithOptions } from "./fiberRuntime.js"
import { complete } from "./request.js"

/** @internal */
export const make = <A, R>(
  runAll: (requests: Array<Array<A>>) => Effect.Effect<void, never, R>
): RequestResolver.RequestResolver<A, R> =>
  new core.RequestResolverImpl((requests) => runAll(requests.map((_) => _.map((_) => _.request))))

/** @internal */
export const makeWithEntry = <A, R>(
  runAll: (requests: Array<Array<Request.Entry<A>>>) => Effect.Effect<void, never, R>
): RequestResolver.RequestResolver<A, R> => new core.RequestResolverImpl((requests) => runAll(requests))

/** @internal */
export const makeBatched = <A extends Request.Request<any, any>, R>(
  run: (requests: RA.NonEmptyArray<A>) => Effect.Effect<void, never, R>
): RequestResolver.RequestResolver<A, R> =>
  new core.RequestResolverImpl<A, R>(
    (requests) => {
      if (requests.length > 1) {
        return core.forEachSequentialDiscard(requests, (block) => {
          const filtered = block.filter((_) => !_.state.completed).map((_) => _.request)
          if (!RA.isNonEmptyArray(filtered)) {
            return core.void
          }
          return invokeWithInterrupt(run(filtered), block)
        })
      } else if (requests.length === 1) {
        const filtered = requests[0].filter((_) => !_.state.completed).map((_) => _.request)
        if (!RA.isNonEmptyArray(filtered)) {
          return core.void
        }
        return run(filtered)
      }
      return core.void
    }
  )

/** @internal */
export const around = dual<
  <A2, R2, X, R3>(
    before: Effect.Effect<A2, never, R2>,
    after: (a: A2) => Effect.Effect<X, never, R3>
  ) => <A, R>(
    self: RequestResolver.RequestResolver<A, R>
  ) => RequestResolver.RequestResolver<A, R | R2 | R3>,
  <A, R, A2, R2, X, R3>(
    self: RequestResolver.RequestResolver<A, R>,
    before: Effect.Effect<A2, never, R2>,
    after: (a: A2) => Effect.Effect<X, never, R3>
  ) => RequestResolver.RequestResolver<A, R | R2 | R3>
>(3, (self, before, after) =>
  new core.RequestResolverImpl(
    (requests) =>
      core.acquireUseRelease(
        before,
        () => self.runAll(requests),
        after
      ),
    Chunk.make("Around", self, before, after)
  ))

/** @internal */
export const aroundRequests = dual<
  <A, A2, R2, X, R3>(
    before: (requests: ReadonlyArray<NoInfer<A>>) => Effect.Effect<A2, never, R2>,
    after: (requests: ReadonlyArray<NoInfer<A>>, _: A2) => Effect.Effect<X, never, R3>
  ) => <R>(
    self: RequestResolver.RequestResolver<A, R>
  ) => RequestResolver.RequestResolver<A, R | R2 | R3>,
  <A, R, A2, R2, X, R3>(
    self: RequestResolver.RequestResolver<A, R>,
    before: (requests: ReadonlyArray<NoInfer<A>>) => Effect.Effect<A2, never, R2>,
    after: (requests: ReadonlyArray<NoInfer<A>>, _: A2) => Effect.Effect<X, never, R3>
  ) => RequestResolver.RequestResolver<A, R | R2 | R3>
>(3, (self, before, after) =>
  new core.RequestResolverImpl(
    (requests) => {
      const flatRequests = requests.flatMap((chunk) => chunk.map((entry) => entry.request))
      return core.acquireUseRelease(
        before(flatRequests),
        () => self.runAll(requests),
        (a2) => after(flatRequests, a2)
      )
    },
    Chunk.make("AroundRequests", self, before, after)
  ))

/** @internal */
export const batchN = dual<
  (n: number) => <A, R>(
    self: RequestResolver.RequestResolver<A, R>
  ) => RequestResolver.RequestResolver<A, R>,
  <A, R>(
    self: RequestResolver.RequestResolver<A, R>,
    n: number
  ) => RequestResolver.RequestResolver<A, R>
>(2, <A, R>(
  self: RequestResolver.RequestResolver<A, R>,
  n: number
): RequestResolver.RequestResolver<A, R> =>
  new core.RequestResolverImpl(
    (requests) => {
      return n < 1
        ? core.die(new Cause.IllegalArgumentException("RequestResolver.batchN: n must be at least 1"))
        : self.runAll(
          Array.from(Chunk.map(
            RA.reduce(
              requests,
              Chunk.empty<Chunk.Chunk<Request.Entry<A>>>(),
              (acc, chunk) => Chunk.appendAll(acc, Chunk.chunksOf(Chunk.unsafeFromArray(chunk), n))
            ),
            (chunk) => Array.from(chunk)
          ))
        )
    },
    Chunk.make("BatchN", self, n)
  ))

/** @internal */
export const mapInputContext = dual<
  <R0, R>(
    f: (context: Context.Context<R0>) => Context.Context<R>
  ) => <A extends Request.Request<any, any>>(
    self: RequestResolver.RequestResolver<A, R>
  ) => RequestResolver.RequestResolver<A, R0>,
  <R, A extends Request.Request<any, any>, R0>(
    self: RequestResolver.RequestResolver<A, R>,
    f: (context: Context.Context<R0>) => Context.Context<R>
  ) => RequestResolver.RequestResolver<A, R0>
>(2, <R, A extends Request.Request<any, any>, R0>(
  self: RequestResolver.RequestResolver<A, R>,
  f: (context: Context.Context<R0>) => Context.Context<R>
) =>
  new core.RequestResolverImpl<A, R0>(
    (requests) =>
      core.mapInputContext(
        self.runAll(requests),
        (context: Context.Context<R0>) => f(context)
      ),
    Chunk.make("MapInputContext", self, f)
  ))

/** @internal */
export const eitherWith = dual<
  <
    A extends Request.Request<any, any>,
    R2,
    B extends Request.Request<any, any>,
    C extends Request.Request<any, any>
  >(
    that: RequestResolver.RequestResolver<B, R2>,
    f: (_: Request.Entry<C>) => Either.Either<Request.Entry<B>, Request.Entry<A>>
  ) => <R>(
    self: RequestResolver.RequestResolver<A, R>
  ) => RequestResolver.RequestResolver<C, R | R2>,
  <
    R,
    A extends Request.Request<any, any>,
    R2,
    B extends Request.Request<any, any>,
    C extends Request.Request<any, any>
  >(
    self: RequestResolver.RequestResolver<A, R>,
    that: RequestResolver.RequestResolver<B, R2>,
    f: (_: Request.Entry<C>) => Either.Either<Request.Entry<B>, Request.Entry<A>>
  ) => RequestResolver.RequestResolver<C, R | R2>
>(3, <
  R,
  A extends Request.Request<any, any>,
  R2,
  B extends Request.Request<any, any>,
  C extends Request.Request<any, any>
>(
  self: RequestResolver.RequestResolver<A, R>,
  that: RequestResolver.RequestResolver<B, R2>,
  f: (_: Request.Entry<C>) => Either.Either<Request.Entry<B>, Request.Entry<A>>
) =>
  new core.RequestResolverImpl<C, R | R2>(
    (batch) =>
      core.forEachSequential(batch, (requests) => {
        const [as, bs] = pipe(
          requests,
          RA.partitionMap(f)
        )
        return zipWithOptions(
          self.runAll(Array.of(as)),
          that.runAll(Array.of(bs)),
          () => void 0,
          { concurrent: true }
        )
      }),
    Chunk.make("EitherWith", self, that, f)
  ))

/** @internal */
export const fromFunction = <A extends Request.Request<any>>(
  f: (request: A) => Request.Request.Success<A>
): RequestResolver.RequestResolver<A> =>
  makeBatched((requests: RA.NonEmptyArray<A>) =>
    core.forEachSequentialDiscard(
      requests,
      (request) => complete(request, core.exitSucceed(f(request)) as any)
    )
  ).identified("FromFunction", f)

/** @internal */
export const fromFunctionBatched = <A extends Request.Request<any>>(
  f: (chunk: RA.NonEmptyArray<A>) => Iterable<Request.Request.Success<A>>
): RequestResolver.RequestResolver<A> =>
  makeBatched((as: RA.NonEmptyArray<A>) =>
    Effect.forEach(
      f(as),
      (res, i) => complete(as[i], core.exitSucceed(res) as any),
      { discard: true }
    )
  ).identified("FromFunctionBatched", f)

/** @internal */
export const fromEffect = <R, A extends Request.Request<any, any>>(
  f: (a: A) => Effect.Effect<Request.Request.Success<A>, Request.Request.Error<A>, R>
): RequestResolver.RequestResolver<A, R> =>
  makeBatched((requests: RA.NonEmptyArray<A>) =>
    Effect.forEach(
      requests,
      (a) => Effect.flatMap(Effect.exit(f(a)), (e) => complete(a, e as any)),
      { concurrency: "unbounded", discard: true }
    )
  ).identified("FromEffect", f)

/** @internal */
export const fromEffectTagged = <
  A extends Request.Request<any, any> & {
    readonly _tag: string
  }
>() =>
<
  Fns extends {
    readonly [Tag in A["_tag"]]: [Extract<A, { readonly _tag: Tag }>] extends [infer Req] ?
      Req extends Request.Request<infer ReqA, infer ReqE> ?
        (requests: Array<Req>) => Effect.Effect<Iterable<ReqA>, ReqE, any>
      : never
      : never
  }
>(
  fns: Fns
): RequestResolver.RequestResolver<
  A,
  ReturnType<Fns[keyof Fns]> extends Effect.Effect<infer _A, infer _E, infer R> ? R : never
> =>
  makeBatched<A, any>((requests: RA.NonEmptyArray<A>) => {
    const grouped: Record<string, Array<A>> = {}
    const tags: Array<A["_tag"]> = []
    for (let i = 0, len = requests.length; i < len; i++) {
      if (tags.includes(requests[i]._tag)) {
        grouped[requests[i]._tag].push(requests[i])
      } else {
        grouped[requests[i]._tag] = [requests[i]]
        tags.push(requests[i]._tag)
      }
    }
    return Effect.forEach(
      tags,
      (tag) =>
        Effect.matchCauseEffect((fns[tag] as any)(grouped[tag]) as Effect.Effect<Array<any>, unknown, unknown>, {
          onFailure: (cause) =>
            Effect.forEach(grouped[tag], (req) => complete(req, core.exitFail(cause) as any), { discard: true }),
          onSuccess: (res) =>
            Effect.forEach(grouped[tag], (req, i) => complete(req, core.exitSucceed(res[i]) as any), { discard: true })
        }),
      { concurrency: "unbounded", discard: true }
    )
  }).identified("FromEffectTagged", fns)

/** @internal */
export const never: RequestResolver.RequestResolver<never> = make(() => Effect.never).identified("Never")

/** @internal */
export const provideContext = dual<
  <R>(
    context: Context.Context<R>
  ) => <A extends Request.Request<any, any>>(
    self: RequestResolver.RequestResolver<A, R>
  ) => RequestResolver.RequestResolver<A>,
  <R, A extends Request.Request<any, any>>(
    self: RequestResolver.RequestResolver<A, R>,
    context: Context.Context<R>
  ) => RequestResolver.RequestResolver<A>
>(2, (self, context) =>
  mapInputContext(
    self,
    (_: Context.Context<never>) => context
  ).identified("ProvideContext", self, context))

/** @internal */
export const race = dual<
  <A2 extends Request.Request<any, any>, R2>(
    that: RequestResolver.RequestResolver<A2, R2>
  ) => <A extends Request.Request<any, any>, R>(
    self: RequestResolver.RequestResolver<A, R>
  ) => RequestResolver.RequestResolver<A | A2, R | R2>,
  <A extends Request.Request<any, any>, R, A2 extends Request.Request<any, any>, R2>(
    self: RequestResolver.RequestResolver<A, R>,
    that: RequestResolver.RequestResolver<A2, R2>
  ) => RequestResolver.RequestResolver<A | A2, R | R2>
>(2, <A, R, A2, R2>(
  self: RequestResolver.RequestResolver<A, R>,
  that: RequestResolver.RequestResolver<A2, R2>
) =>
  new core.RequestResolverImpl((requests) =>
    Effect.race(
      self.runAll(requests as Array<Array<Request.Entry<A>>>),
      that.runAll(requests as Array<Array<Request.Entry<A2>>>)
    )
  ).identified("Race", self, that))
