import * as Either from "../../Either.js"
import { dual } from "../../Function.js"
import * as Option from "../../Option.js"
import type * as STM from "../../STM.js"
import type * as TDeferred from "../../TDeferred.js"
import type * as TRef from "../../TRef.js"
import * as core from "./core.js"
import * as stm from "./stm.js"
import * as tRef from "./tRef.js"

/** @internal */
const TDeferredSymbolKey = "effect/TDeferred"

/** @internal */
export const TDeferredTypeId: TDeferred.TDeferredTypeId = Symbol.for(
  TDeferredSymbolKey
) as TDeferred.TDeferredTypeId

/** @internal */
const tDeferredVariance = {
  /* c8 ignore next */
  _A: (_: any) => _,
  /* c8 ignore next */
  _E: (_: any) => _
}

/** @internal */
class TDeferredImpl<in out A, in out E = never> implements TDeferred.TDeferred<A, E> {
  readonly [TDeferredTypeId] = tDeferredVariance
  constructor(readonly ref: TRef.TRef<Option.Option<Either.Either<A, E>>>) {}
}

/** @internal */
export const _await = <A, E>(self: TDeferred.TDeferred<A, E>): STM.STM<A, E> =>
  stm.flatten(
    stm.collect(tRef.get(self.ref), (option) =>
      Option.isSome(option) ?
        Option.some(stm.fromEither(option.value)) :
        Option.none())
  )

/** @internal */
export const done = dual<
  <A, E>(either: Either.Either<A, E>) => (self: TDeferred.TDeferred<A, E>) => STM.STM<boolean>,
  <A, E>(self: TDeferred.TDeferred<A, E>, either: Either.Either<A, E>) => STM.STM<boolean>
>(2, (self, either) =>
  core.flatMap(
    tRef.get(self.ref),
    Option.match({
      onNone: () =>
        core.zipRight(
          tRef.set(self.ref, Option.some(either)),
          core.succeed(true)
        ),
      onSome: () => core.succeed(false)
    })
  ))

/** @internal */
export const fail = dual<
  <E>(error: E) => <A>(self: TDeferred.TDeferred<A, E>) => STM.STM<boolean>,
  <A, E>(self: TDeferred.TDeferred<A, E>, error: E) => STM.STM<boolean>
>(2, (self, error) => done(self, Either.left(error)))

/** @internal */
export const make = <A, E = never>(): STM.STM<TDeferred.TDeferred<A, E>> =>
  core.map(
    tRef.make<Option.Option<Either.Either<A, E>>>(Option.none()),
    (ref) => new TDeferredImpl(ref)
  )

/** @internal */
export const poll = <A, E>(
  self: TDeferred.TDeferred<A, E>
): STM.STM<Option.Option<Either.Either<A, E>>> => tRef.get(self.ref)

/** @internal */
export const succeed = dual<
  <A>(value: A) => <E>(self: TDeferred.TDeferred<A, E>) => STM.STM<boolean>,
  <A, E>(self: TDeferred.TDeferred<A, E>, value: A) => STM.STM<boolean>
>(2, (self, value) => done(self, Either.right(value)))
