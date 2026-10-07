import type * as Effect from "../Effect.js"
import { dual, pipe } from "../Function.js"
import * as Option from "../Option.js"
import type * as Synchronized from "../SynchronizedRef.js"
import * as core from "./core.js"

/** @internal */
export const getAndUpdateEffect = dual<
  <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<A, E, R>,
  <A, R, E>(self: Synchronized.SynchronizedRef<A>, f: (a: A) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
>(2, (self, f) =>
  self.modifyEffect(
    (value) => core.map(f(value), (result) => [value, result] as const)
  ))

/** @internal */
export const getAndUpdateSomeEffect = dual<
  <A, R, E>(
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<A, E, R>,
  <A, R, E>(
    self: Synchronized.SynchronizedRef<A>,
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ) => Effect.Effect<A, E, R>
>(2, (self, pf) =>
  self.modifyEffect((value) => {
    const result = pf(value)
    switch (result._tag) {
      case "None": {
        return core.succeed([value, value] as const)
      }
      case "Some": {
        return core.map(result.value, (newValue) => [value, newValue] as const)
      }
    }
  }))

/** @internal */
export const modify = dual<
  <A, B>(f: (a: A) => readonly [B, A]) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<B>,
  <A, B>(self: Synchronized.SynchronizedRef<A>, f: (a: A) => readonly [B, A]) => Effect.Effect<B>
>(2, (self, f) => self.modify(f))

/** @internal */
export const modifyEffect = dual<
  <A, B, E, R>(
    f: (a: A) => Effect.Effect<readonly [B, A], E, R>
  ) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<B, E, R>,
  <A, B, E, R>(
    self: Synchronized.SynchronizedRef<A>,
    f: (a: A) => Effect.Effect<readonly [B, A], E, R>
  ) => Effect.Effect<B, E, R>
>(2, (self, f) => self.modifyEffect(f))

/** @internal */
export const modifySomeEffect = dual<
  <A, B, R, E>(
    fallback: B,
    pf: (a: A) => Option.Option<Effect.Effect<readonly [B, A], E, R>>
  ) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<B, E, R>,
  <A, B, R, E>(
    self: Synchronized.SynchronizedRef<A>,
    fallback: B,
    pf: (a: A) => Option.Option<Effect.Effect<readonly [B, A], E, R>>
  ) => Effect.Effect<B, E, R>
>(3, (self, fallback, pf) =>
  self.modifyEffect(
    (value) => pipe(pf(value), Option.getOrElse(() => core.succeed([fallback, value] as const)))
  ))

/** @internal */
export const updateEffect = dual<
  <A, R, E>(
    f: (a: A) => Effect.Effect<A, E, R>
  ) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<void, E, R>,
  <A, R, E>(self: Synchronized.SynchronizedRef<A>, f: (a: A) => Effect.Effect<A, E, R>) => Effect.Effect<void, E, R>
>(2, (self, f) =>
  self.modifyEffect((value) =>
    core.map(
      f(value),
      (result) => [undefined as void, result] as const
    )
  ))

/** @internal */
export const updateAndGetEffect = dual<
  <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<A, E, R>,
  <A, R, E>(self: Synchronized.SynchronizedRef<A>, f: (a: A) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
>(2, (self, f) =>
  self.modifyEffect(
    (value) => core.map(f(value), (result) => [result, result] as const)
  ))

/** @internal */
export const updateSomeEffect = dual<
  <A, R, E>(
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ) => (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<void, E, R>,
  <A, R, E>(
    self: Synchronized.SynchronizedRef<A>,
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ) => Effect.Effect<void, E, R>
>(2, (self, pf) =>
  self.modifyEffect((value) => {
    const result = pf(value)
    switch (result._tag) {
      case "None": {
        return core.succeed([void 0, value] as const)
      }
      case "Some": {
        return core.map(result.value, (a) => [void 0, a] as const)
      }
    }
  }))
