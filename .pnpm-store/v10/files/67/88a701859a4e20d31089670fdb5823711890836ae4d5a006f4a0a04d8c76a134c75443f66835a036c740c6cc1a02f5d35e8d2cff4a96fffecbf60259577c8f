import * as RA from "../../Array.js"
import * as Cause from "../../Cause.js"
import * as Chunk from "../../Chunk.js"
import * as Context from "../../Context.js"
import * as Effect from "../../Effect.js"
import * as Either from "../../Either.js"
import * as Exit from "../../Exit.js"
import type * as FiberId from "../../FiberId.js"
import type { LazyArg } from "../../Function.js"
import { constFalse, constTrue, constVoid, dual, identity, pipe } from "../../Function.js"
import * as Option from "../../Option.js"
import type { Predicate, Refinement } from "../../Predicate.js"
import * as predicate from "../../Predicate.js"
import type * as STM from "../../STM.js"
import type * as Types from "../../Types.js"
import { yieldWrapGet } from "../../Utils.js"
import * as effectCore from "../core.js"
import * as core from "./core.js"
import * as Journal from "./journal.js"
import * as STMState from "./stmState.js"

/** @internal */
export const acquireUseRelease = dual<
  <A, A2, E2, R2, A3, E3, R3>(
    use: (resource: A) => STM.STM<A2, E2, R2>,
    release: (resource: A) => STM.STM<A3, E3, R3>
  ) => <E, R>(
    acquire: STM.STM<A, E, R>
  ) => Effect.Effect<A2, E | E2 | E3, R | R2 | R3>,
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    acquire: STM.STM<A, E, R>,
    use: (resource: A) => STM.STM<A2, E2, R2>,
    release: (resource: A) => STM.STM<A3, E3, R3>
  ) => Effect.Effect<A2, E | E2 | E3, R | R2 | R3>
>(3, <A, E, R, A2, E2, R2, A3, E3, R3>(
  acquire: STM.STM<A, E, R>,
  use: (resource: A) => STM.STM<A2, E2, R2>,
  release: (resource: A) => STM.STM<A3, E3, R3>
): Effect.Effect<A2, E | E2 | E3, R | R2 | R3> =>
  Effect.uninterruptibleMask((restore) => {
    let state: STMState.STMState<A, E> = STMState.running
    return pipe(
      restore(
        core.unsafeAtomically(
          acquire,
          (exit) => {
            state = STMState.done(exit)
          },
          () => {
            state = STMState.interrupted
          }
        )
      ),
      Effect.matchCauseEffect({
        onFailure: (cause) => {
          if (STMState.isDone(state) && Exit.isSuccess(state.exit)) {
            return pipe(
              release(state.exit.value),
              Effect.matchCauseEffect({
                onFailure: (cause2) => Effect.failCause(Cause.parallel(cause, cause2)),
                onSuccess: () => Effect.failCause(cause)
              })
            )
          }
          return Effect.failCause(cause)
        },
        onSuccess: (a) =>
          pipe(
            restore(use(a)),
            Effect.matchCauseEffect({
              onFailure: (cause) =>
                pipe(
                  release(a),
                  Effect.matchCauseEffect({
                    onFailure: (cause2) => Effect.failCause(Cause.parallel(cause, cause2)),
                    onSuccess: () => Effect.failCause(cause)
                  })
                ),
              onSuccess: (a2) => pipe(release(a), Effect.as(a2))
            })
          )
      })
    )
  }))

/** @internal */
export const as = dual<
  <A2>(value: A2) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<A2, E, R>,
  <A, E, R, A2>(self: STM.STM<A, E, R>, value: A2) => STM.STM<A2, E, R>
>(2, (self, value) => pipe(self, core.map(() => value)))

/** @internal */
export const asSome = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<Option.Option<A>, E, R> =>
  pipe(self, core.map(Option.some))

/** @internal */
export const asSomeError = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<A, Option.Option<E>, R> =>
  pipe(self, mapError(Option.some))

/** @internal */
export const asVoid = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<void, E, R> => pipe(self, core.map(constVoid))

/** @internal */
export const attempt = <A>(evaluate: LazyArg<A>): STM.STM<A, unknown> =>
  suspend(() => {
    try {
      return core.succeed(evaluate())
    } catch (defect) {
      return core.fail(defect)
    }
  })

export const bind = dual<
  <N extends string, K, A, E2, R2>(
    tag: Exclude<N, keyof K>,
    f: (_: K) => STM.STM<A, E2, R2>
  ) => <E, R>(self: STM.STM<K, E, R>) => STM.STM<Types.MergeRecord<K, { [k in N]: A }>, E | E2, R | R2>,
  <K, E, R, N extends string, A, E2, R2>(
    self: STM.STM<K, E, R>,
    tag: Exclude<N, keyof K>,
    f: (_: K) => STM.STM<A, E2, R2>
  ) => STM.STM<Types.MergeRecord<K, { [k in N]: A }>, E | E2, R | R2>
>(3, <K, E, R, N extends string, A, E2, R2>(
  self: STM.STM<K, E, R>,
  tag: Exclude<N, keyof K>,
  f: (_: K) => STM.STM<A, E2, R2>
) =>
  core.flatMap(self, (k) =>
    core.map(
      f(k),
      (a): Types.MergeRecord<K, { [k in N]: A }> => ({ ...k, [tag]: a } as any)
    )))

/* @internal */
export const bindTo = dual<
  <N extends string>(tag: N) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<
    Record<N, A>,
    E,
    R
  >,
  <A, E, R, N extends string>(
    self: STM.STM<A, E, R>,
    tag: N
  ) => STM.STM<
    Record<N, A>,
    E,
    R
  >
>(
  2,
  <A, E, R, N extends string>(self: STM.STM<A, E, R>, tag: N): STM.STM<Record<N, A>, E, R> =>
    core.map(self, (a) => ({ [tag]: a } as Record<N, A>))
)

/* @internal */
export const let_ = dual<
  <N extends string, K, A>(
    tag: Exclude<N, keyof K>,
    f: (_: K) => A
  ) => <E, R>(self: STM.STM<K, E, R>) => STM.STM<
    Types.MergeRecord<K, { [k in N]: A }>,
    E,
    R
  >,
  <K, E, R, N extends string, A>(
    self: STM.STM<K, E, R>,
    tag: Exclude<N, keyof K>,
    f: (_: K) => A
  ) => STM.STM<
    Types.MergeRecord<K, { [k in N]: A }>,
    E,
    R
  >
>(3, <K, E, R, N extends string, A>(self: STM.STM<K, E, R>, tag: Exclude<N, keyof K>, f: (_: K) => A) =>
  core.map(
    self,
    (k): Types.MergeRecord<K, { [k in N]: A }> => ({ ...k, [tag]: f(k) } as any)
  ))

/** @internal */
export const catchSome = dual<
  <E, A2, E2, R2>(
    pf: (error: E) => Option.Option<STM.STM<A2, E2, R2>>
  ) => <A, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A2 | A, E | E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: STM.STM<A, E, R>,
    pf: (error: E) => Option.Option<STM.STM<A2, E2, R2>>
  ) => STM.STM<A2 | A, E | E2, R2 | R>
>(2, <A, E, R, A2, E2, R2>(
  self: STM.STM<A, E, R>,
  pf: (error: E) => Option.Option<STM.STM<A2, E2, R2>>
): STM.STM<A2 | A, E | E2, R2 | R> =>
  core.catchAll(
    self,
    (e): STM.STM<A | A2, E | E2, R | R2> => Option.getOrElse(pf(e), () => core.fail(e))
  ))

/** @internal */
export const catchTag = dual<
  <K extends E["_tag"] & string, E extends { _tag: string }, A1, E1, R1>(
    k: K,
    f: (e: Extract<E, { _tag: K }>) => STM.STM<A1, E1, R1>
  ) => <A, R>(self: STM.STM<A, E, R>) => STM.STM<A | A1, Exclude<E, { _tag: K }> | E1, R | R1>,
  <A, E extends { _tag: string }, R, K extends E["_tag"] & string, A1, E1, R1>(
    self: STM.STM<A, E, R>,
    k: K,
    f: (e: Extract<E, { _tag: K }>) => STM.STM<A1, E1, R1>
  ) => STM.STM<A | A1, Exclude<E, { _tag: K }> | E1, R | R1>
>(3, (self, k, f) =>
  core.catchAll(self, (e) => {
    if ("_tag" in e && e["_tag"] === k) {
      return f(e as any)
    }
    return core.fail(e as any)
  }))

/** @internal */
export const catchTags: {
  <
    E extends { _tag: string },
    Cases extends {
      [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => STM.STM<any, any, any>
    }
  >(
    cases: Cases
  ): <A, R>(self: STM.STM<A, E, R>) => STM.STM<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => STM.STM<infer A, any, any>) ? A : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => STM.STM<any, infer E, any>) ? E : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => STM.STM<any, any, infer R>) ? R : never
    }[keyof Cases]
  >
  <
    R,
    E extends { _tag: string },
    A,
    Cases extends {
      [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => STM.STM<any, any, any>
    }
  >(
    self: STM.STM<A, E, R>,
    cases: Cases
  ): STM.STM<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => STM.STM<infer A, any, any>) ? A : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => STM.STM<any, infer E, any>) ? E : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => STM.STM<any, any, infer R>) ? R : never
    }[keyof Cases]
  >
} = dual(2, (self, cases) =>
  core.catchAll(self, (e: any) => {
    const keys = Object.keys(cases)
    if ("_tag" in e && keys.includes(e["_tag"])) {
      return cases[e["_tag"]](e as any)
    }
    return core.fail(e as any)
  }))

/** @internal */
export const check = (predicate: LazyArg<boolean>): STM.STM<void> => suspend(() => predicate() ? void_ : core.retry)

/** @internal */
export const collect = dual<
  <A, A2>(pf: (a: A) => Option.Option<A2>) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<A2, E, R>,
  <A, E, R, A2>(self: STM.STM<A, E, R>, pf: (a: A) => Option.Option<A2>) => STM.STM<A2, E, R>
>(2, (self, pf) =>
  collectSTM(
    self,
    (a) => Option.map(pf(a), core.succeed)
  ))

/** @internal */
export const collectSTM = dual<
  <A, A2, E2, R2>(
    pf: (a: A) => Option.Option<STM.STM<A2, E2, R2>>
  ) => <E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A2, E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: STM.STM<A, E, R>,
    pf: (a: A) => Option.Option<STM.STM<A2, E2, R2>>
  ) => STM.STM<A2, E2 | E, R2 | R>
>(2, (self, pf) =>
  core.matchSTM(self, {
    onFailure: core.fail,
    onSuccess: (a) => {
      const option = pf(a)
      return Option.isSome(option) ? option.value : core.retry
    }
  }))

/** @internal */
export const commitEither = <A, E, R>(self: STM.STM<A, E, R>): Effect.Effect<A, E, R> =>
  Effect.flatten(core.commit(either(self)))

/** @internal */
export const cond = <A, E>(
  predicate: LazyArg<boolean>,
  error: LazyArg<E>,
  result: LazyArg<A>
): STM.STM<A, E> => {
  return suspend(
    () => predicate() ? core.sync(result) : core.failSync(error)
  )
}

/** @internal */
export const either = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<Either.Either<A, E>, never, R> =>
  match(self, { onFailure: Either.left, onSuccess: Either.right })

/** @internal */
export const eventually = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<A, E, R> =>
  core.matchSTM(self, { onFailure: () => eventually(self), onSuccess: core.succeed })

/** @internal */
export const every = dual<
  <A, R, E>(
    predicate: (a: Types.NoInfer<A>) => STM.STM<boolean, E, R>
  ) => (iterable: Iterable<A>) => STM.STM<boolean, E, R>,
  <A, R, E>(iterable: Iterable<A>, predicate: (a: A) => STM.STM<boolean, E, R>) => STM.STM<boolean, E, R>
>(
  2,
  <A, R, E>(
    iterable: Iterable<A>,
    predicate: (a: A) => STM.STM<boolean, E, R>
  ): STM.STM<boolean, E, R> =>
    core.flatMap(core.sync(() => iterable[Symbol.iterator]()), (iterator) => {
      const loop: STM.STM<boolean, E, R> = suspend(() => {
        const next = iterator.next()
        if (next.done) {
          return core.succeed(true)
        }
        return pipe(
          predicate(next.value),
          core.flatMap((bool) => bool ? loop : core.succeed(bool))
        )
      })
      return loop
    })
)

/** @internal */
export const exists = dual<
  <A, R, E>(
    predicate: (a: Types.NoInfer<A>) => STM.STM<boolean, E, R>
  ) => (iterable: Iterable<A>) => STM.STM<boolean, E, R>,
  <A, R, E>(iterable: Iterable<A>, predicate: (a: A) => STM.STM<boolean, E, R>) => STM.STM<boolean, E, R>
>(
  2,
  <A, R, E>(iterable: Iterable<A>, predicate: (a: A) => STM.STM<boolean, E, R>): STM.STM<boolean, E, R> =>
    core.flatMap(core.sync(() => iterable[Symbol.iterator]()), (iterator) => {
      const loop: STM.STM<boolean, E, R> = suspend(() => {
        const next = iterator.next()
        if (next.done) {
          return core.succeed(false)
        }
        return core.flatMap(
          predicate(next.value),
          (bool) => bool ? core.succeed(bool) : loop
        )
      })
      return loop
    })
)

/** @internal */
export const fiberId: STM.STM<FiberId.FiberId> = core.effect<never, FiberId.FiberId>((_, fiberId) => fiberId)

/** @internal */
export const filter = dual<
  <A, R, E>(
    predicate: (a: Types.NoInfer<A>) => STM.STM<boolean, E, R>
  ) => (iterable: Iterable<A>) => STM.STM<Array<A>, E, R>,
  <A, R, E>(iterable: Iterable<A>, predicate: (a: A) => STM.STM<boolean, E, R>) => STM.STM<Array<A>, E, R>
>(
  2,
  <A, R, E>(iterable: Iterable<A>, predicate: (a: A) => STM.STM<boolean, E, R>): STM.STM<Array<A>, E, R> =>
    Array.from(iterable).reduce(
      (acc, curr) =>
        pipe(
          acc,
          core.zipWith(predicate(curr), (as, p) => {
            if (p) {
              as.push(curr)
              return as
            }
            return as
          })
        ),
      core.succeed([]) as STM.STM<Array<A>, E, R>
    )
)

/** @internal */
export const filterNot = dual<
  <A, R, E>(
    predicate: (a: Types.NoInfer<A>) => STM.STM<boolean, E, R>
  ) => (iterable: Iterable<A>) => STM.STM<Array<A>, E, R>,
  <A, R, E>(iterable: Iterable<A>, predicate: (a: A) => STM.STM<boolean, E, R>) => STM.STM<Array<A>, E, R>
>(
  2,
  <A, R, E>(iterable: Iterable<A>, predicate: (a: A) => STM.STM<boolean, E, R>): STM.STM<Array<A>, E, R> =>
    filter(iterable, (a) => negate(predicate(a)))
)

/** @internal */
export const filterOrDie: {
  <A, B extends A>(
    refinement: Refinement<Types.NoInfer<A>, B>,
    defect: LazyArg<unknown>
  ): <E, R>(self: STM.STM<A, E, R>) => STM.STM<B, E, R>
  <A>(
    predicate: Predicate<Types.NoInfer<A>>,
    defect: LazyArg<unknown>
  ): <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E, R>
  <A, E, R, B extends A>(
    self: STM.STM<A, E, R>,
    refinement: Refinement<A, B>,
    defect: LazyArg<unknown>
  ): STM.STM<B, E, R>
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>, defect: LazyArg<unknown>): STM.STM<A, E, R>
} = dual(
  3,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>, defect: LazyArg<unknown>): STM.STM<A, E, R> =>
    filterOrElse(self, predicate, () => core.dieSync(defect))
)

/** @internal */
export const filterOrDieMessage: {
  <A, B extends A>(
    refinement: Refinement<Types.NoInfer<A>, B>,
    message: string
  ): <E, R>(self: STM.STM<A, E, R>) => STM.STM<B, E, R>
  <A>(predicate: Predicate<Types.NoInfer<A>>, message: string): <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E, R>
  <A, E, R, B extends A>(self: STM.STM<A, E, R>, refinement: Refinement<A, B>, message: string): STM.STM<B, E, R>
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>, message: string): STM.STM<A, E, R>
} = dual(
  3,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>, message: string): STM.STM<A, E, R> =>
    filterOrElse(self, predicate, () => core.dieMessage(message))
)

/** @internal */
export const filterOrElse: {
  <A, B extends A, C, E2, R2>(
    refinement: Refinement<Types.NoInfer<A>, B>,
    orElse: (a: Types.NoInfer<A>) => STM.STM<C, E2, R2>
  ): <E, R>(self: STM.STM<A, E, R>) => STM.STM<B | C, E2 | E, R2 | R>
  <A, B, E2, R2>(
    predicate: Predicate<Types.NoInfer<A>>,
    orElse: (a: Types.NoInfer<A>) => STM.STM<B, E2, R2>
  ): <E, R>(self: STM.STM<A, E, R>) => STM.STM<A | B, E2 | E, R2 | R>
  <A, E, R, B extends A, C, E2, R2>(
    self: STM.STM<A, E, R>,
    refinement: Refinement<A, B>,
    orElse: (a: A) => STM.STM<C, E2, R2>
  ): STM.STM<B | C, E | E2, R | R2>
  <A, E, R, B, E2, R2>(
    self: STM.STM<A, E, R>,
    predicate: Predicate<A>,
    orElse: (a: A) => STM.STM<B, E2, R2>
  ): STM.STM<A | B, E | E2, R | R2>
} = dual(
  3,
  <A, E, R, B, E2, R2>(
    self: STM.STM<A, E, R>,
    predicate: Predicate<A>,
    orElse: (a: A) => STM.STM<B, E2, R2>
  ): STM.STM<A | B, E | E2, R | R2> =>
    core.flatMap(self, (a): STM.STM<A | B, E2, R2> => predicate(a) ? core.succeed(a) : orElse(a))
)

/** @internal */
export const filterOrFail: {
  <A, B extends A, E2>(
    refinement: Refinement<Types.NoInfer<A>, B>,
    orFailWith: (a: Types.NoInfer<A>) => E2
  ): <E, R>(self: STM.STM<A, E, R>) => STM.STM<B, E2 | E, R>
  <A, E2>(
    predicate: Predicate<Types.NoInfer<A>>,
    orFailWith: (a: Types.NoInfer<A>) => E2
  ): <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E2 | E, R>
  <A, E, R, B extends A, E2>(
    self: STM.STM<A, E, R>,
    refinement: Refinement<A, B>,
    orFailWith: (a: A) => E2
  ): STM.STM<B, E | E2, R>
  <A, E, R, E2>(self: STM.STM<A, E, R>, predicate: Predicate<A>, orFailWith: (a: A) => E2): STM.STM<A, E | E2, R>
} = dual(
  3,
  <A, E, R, E2>(self: STM.STM<A, E, R>, predicate: Predicate<A>, orFailWith: (a: A) => E2): STM.STM<A, E | E2, R> =>
    filterOrElse(
      self,
      predicate,
      (a) => core.failSync(() => orFailWith(a))
    )
)

/** @internal */
export const flatten = <A, E2, R2, E, R>(self: STM.STM<STM.STM<A, E2, R2>, E, R>): STM.STM<A, E | E2, R | R2> =>
  core.flatMap(self, identity)

/** @internal */
export const flip = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<E, A, R> =>
  core.matchSTM(self, { onFailure: core.succeed, onSuccess: core.fail })

/** @internal */
export const flipWith = dual<
  <E, A, R, E2, A2, R2>(
    f: (stm: STM.STM<E, A, R>) => STM.STM<E2, A2, R2>
  ) => (
    self: STM.STM<A, E, R>
  ) => STM.STM<A | A2, E | E2, R | R2>,
  <A, E, R, E2, A2, R2>(
    self: STM.STM<A, E, R>,
    f: (stm: STM.STM<E, A, R>) => STM.STM<E2, A2, R2>
  ) => STM.STM<A | A2, E | E2, R | R2>
>(2, (self, f) => flip(f(flip(self))))

/** @internal */
export const match = dual<
  <E, A2, A, A3>(options: {
    readonly onFailure: (error: E) => A2
    readonly onSuccess: (value: A) => A3
  }) => <R>(self: STM.STM<A, E, R>) => STM.STM<A2 | A3, never, R>,
  <A, E, R, A2, A3>(self: STM.STM<A, E, R>, options: {
    readonly onFailure: (error: E) => A2
    readonly onSuccess: (value: A) => A3
  }) => STM.STM<A2 | A3, never, R>
>(2, (self, { onFailure, onSuccess }) =>
  core.matchSTM(self, {
    onFailure: (e) => core.succeed(onFailure(e)),
    onSuccess: (a) => core.succeed(onSuccess(a))
  }))

/** @internal */
export const forEach = dual<
  {
    <A, A2, E, R>(f: (a: A) => STM.STM<A2, E, R>, options?: {
      readonly discard?: false | undefined
    }): (elements: Iterable<A>) => STM.STM<Array<A2>, E, R>
    <A, A2, E, R>(f: (a: A) => STM.STM<A2, E, R>, options: {
      readonly discard: true
    }): (elements: Iterable<A>) => STM.STM<void, E, R>
  },
  {
    <A, A2, E, R>(elements: Iterable<A>, f: (a: A) => STM.STM<A2, E, R>, options?: {
      readonly discard?: false | undefined
    }): STM.STM<Array<A2>, E, R>
    <A, A2, E, R>(elements: Iterable<A>, f: (a: A) => STM.STM<A2, E, R>, options: {
      readonly discard: true
    }): STM.STM<void, E, R>
  }
>(
  (args) => predicate.isIterable(args[0]),
  <A, A2, E, R>(iterable: Iterable<A>, f: (a: A) => STM.STM<A2, E, R>, options?: {
    readonly discard?: boolean | undefined
  }): STM.STM<any, E, R> => {
    if (options?.discard) {
      return pipe(
        core.sync(() => iterable[Symbol.iterator]()),
        core.flatMap((iterator) => {
          const loop: STM.STM<void, E, R> = suspend(() => {
            const next = iterator.next()
            if (next.done) {
              return void_
            }
            return pipe(f(next.value), core.flatMap(() => loop))
          })
          return loop
        })
      )
    }

    return suspend(() =>
      RA.fromIterable(iterable).reduce(
        (acc, curr) =>
          core.zipWith(acc, f(curr), (array, elem) => {
            array.push(elem)
            return array
          }),
        core.succeed([]) as STM.STM<Array<A2>, E, R>
      )
    )
  }
)

/** @internal */
export const fromEither = <A, E>(either: Either.Either<A, E>): STM.STM<A, E> => {
  switch (either._tag) {
    case "Left": {
      return core.fail(either.left)
    }
    case "Right": {
      return core.succeed(either.right)
    }
  }
}

/** @internal */
export const fromOption = <A>(option: Option.Option<A>): STM.STM<A, Option.Option<never>> =>
  Option.match(option, {
    onNone: () => core.fail(Option.none()),
    onSome: core.succeed
  })

/**
 * Inspired by https://github.com/tusharmath/qio/pull/22 (revised)
 * @internal
 */
export const gen: typeof STM.gen = (...args) =>
  suspend(() => {
    const f = (args.length === 1)
      ? args[0]
      : args[1].bind(args[0])
    const iterator = f(pipe)
    const state = iterator.next()
    const run = (
      state: IteratorYieldResult<any> | IteratorReturnResult<any>
    ): STM.STM<any, any, any> =>
      state.done ?
        core.succeed(state.value) :
        core.flatMap(yieldWrapGet(state.value) as any, (val: any) => run(iterator.next(val as never)))
    return run(state)
  })

/** @internal */
export const head = <A, E, R>(self: STM.STM<Iterable<A>, E, R>): STM.STM<A, Option.Option<E>, R> =>
  pipe(
    self,
    core.matchSTM({
      onFailure: (e) => core.fail(Option.some(e)),
      onSuccess: (a) => {
        const i = a[Symbol.iterator]()
        const res = i.next()
        if (res.done) {
          return core.fail(Option.none())
        } else {
          return core.succeed(res.value)
        }
      }
    })
  )

/** @internal */
export const if_ = dual<
  <A, E1, R1, A2, E2, R2>(
    options: {
      readonly onTrue: STM.STM<A, E1, R1>
      readonly onFalse: STM.STM<A2, E2, R2>
    }
  ) => <E = never, R = never>(
    self: STM.STM<boolean, E, R> | boolean
  ) => STM.STM<A | A2, E1 | E2 | E, R1 | R2 | R>,
  {
    <A, E1, R1, A2, E2, R2, E = never, R = never>(
      self: boolean,
      options: {
        readonly onTrue: STM.STM<A, E1, R1>
        readonly onFalse: STM.STM<A2, E2, R2>
      }
    ): STM.STM<A | A2, E1 | E2 | E, R1 | R2 | R>
    <E, R, A, E1, R1, A2, E2, R2>(
      self: STM.STM<boolean, E, R>,
      options: {
        readonly onTrue: STM.STM<A, E1, R1>
        readonly onFalse: STM.STM<A2, E2, R2>
      }
    ): STM.STM<A | A2, E1 | E2 | E, R1 | R2 | R>
  }
>(
  (args) => typeof args[0] === "boolean" || core.isSTM(args[0]),
  <E, R, A, E1, R1, A2, E2, R2>(
    self: STM.STM<boolean, E, R> | boolean,
    { onFalse, onTrue }: {
      readonly onTrue: STM.STM<A, E1, R1>
      readonly onFalse: STM.STM<A2, E2, R2>
    }
  ) => {
    if (typeof self === "boolean") {
      return self ? onTrue : onFalse
    }

    return core.flatMap(self, (bool): STM.STM<A | A2, E1 | E2 | E, R1 | R2 | R> => bool ? onTrue : onFalse)
  }
)

/** @internal */
export const ignore = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<void, never, R> =>
  match(self, { onFailure: () => void_, onSuccess: () => void_ })

/** @internal */
export const isFailure = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<boolean, never, R> =>
  match(self, { onFailure: constTrue, onSuccess: constFalse })

/** @internal */
export const isSuccess = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<boolean, never, R> =>
  match(self, { onFailure: constFalse, onSuccess: constTrue })

/** @internal */
export const iterate = <Z, E, R>(
  initial: Z,
  options: {
    readonly while: (z: Z) => boolean
    readonly body: (z: Z) => STM.STM<Z, E, R>
  }
): STM.STM<Z, E, R> => iterateLoop(initial, options.while, options.body)

const iterateLoop = <Z, E, R>(
  initial: Z,
  cont: (z: Z) => boolean,
  body: (z: Z) => STM.STM<Z, E, R>
): STM.STM<Z, E, R> => {
  if (cont(initial)) {
    return pipe(
      body(initial),
      core.flatMap((z) => iterateLoop(z, cont, body))
    )
  }
  return core.succeed(initial)
}

/** @internal */
export const loop: {
  <Z, A, E, R>(
    initial: Z,
    options: {
      readonly while: (z: Z) => boolean
      readonly step: (z: Z) => Z
      readonly body: (z: Z) => STM.STM<A, E, R>
      readonly discard?: false | undefined
    }
  ): STM.STM<Array<A>, E, R>
  <Z, A, E, R>(
    initial: Z,
    options: {
      readonly while: (z: Z) => boolean
      readonly step: (z: Z) => Z
      readonly body: (z: Z) => STM.STM<A, E, R>
      readonly discard: true
    }
  ): STM.STM<void, E, R>
} = <Z, A, E, R>(
  initial: Z,
  options: {
    readonly while: (z: Z) => boolean
    readonly step: (z: Z) => Z
    readonly body: (z: Z) => STM.STM<A, E, R>
    readonly discard?: boolean | undefined
  }
): STM.STM<any, E, R> =>
  options.discard ?
    loopDiscardLoop(initial, options.while, options.step, options.body) :
    core.map(loopLoop(initial, options.while, options.step, options.body), (a) => Array.from(a))

const loopLoop = <Z, A, E, R>(
  initial: Z,
  cont: (z: Z) => boolean,
  inc: (z: Z) => Z,
  body: (z: Z) => STM.STM<A, E, R>
): STM.STM<Chunk.Chunk<A>, E, R> => {
  if (cont(initial)) {
    return pipe(
      body(initial),
      core.flatMap((a) => pipe(loopLoop(inc(initial), cont, inc, body), core.map(Chunk.append(a))))
    )
  }
  return core.succeed(Chunk.empty<A>())
}

const loopDiscardLoop = <Z, R, E, X>(
  initial: Z,
  cont: (z: Z) => boolean,
  inc: (z: Z) => Z,
  body: (z: Z) => STM.STM<X, E, R>
): STM.STM<void, E, R> => {
  if (cont(initial)) {
    return pipe(
      body(initial),
      core.flatMap(() => loopDiscardLoop(inc(initial), cont, inc, body))
    )
  }
  return void_
}

/** @internal */
export const mapAttempt = dual<
  <A, B>(f: (a: A) => B) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<B, unknown, R>,
  <A, E, R, B>(self: STM.STM<A, E, R>, f: (a: A) => B) => STM.STM<B, unknown, R>
>(2, <A, E, R, B>(self: STM.STM<A, E, R>, f: (a: A) => B): STM.STM<B, unknown, R> =>
  core.matchSTM(self, {
    onFailure: (e) => core.fail(e),
    onSuccess: (a) => attempt(() => f(a))
  }))

/** @internal */
export const mapBoth = dual<
  <E, E2, A, A2>(options: {
    readonly onFailure: (error: E) => E2
    readonly onSuccess: (value: A) => A2
  }) => <R>(self: STM.STM<A, E, R>) => STM.STM<A2, E2, R>,
  <A, E, R, E2, A2>(self: STM.STM<A, E, R>, options: {
    readonly onFailure: (error: E) => E2
    readonly onSuccess: (value: A) => A2
  }) => STM.STM<A2, E2, R>
>(2, (self, { onFailure, onSuccess }) =>
  core.matchSTM(self, {
    onFailure: (e) => core.fail(onFailure(e)),
    onSuccess: (a) => core.succeed(onSuccess(a))
  }))

/** @internal */
export const mapError = dual<
  <E, E2>(f: (error: E) => E2) => <A, R>(self: STM.STM<A, E, R>) => STM.STM<A, E2, R>,
  <A, E, R, E2>(self: STM.STM<A, E, R>, f: (error: E) => E2) => STM.STM<A, E2, R>
>(2, (self, f) =>
  core.matchSTM(self, {
    onFailure: (e) => core.fail(f(e)),
    onSuccess: core.succeed
  }))

/** @internal */
export const merge = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<E | A, never, R> =>
  core.matchSTM(self, { onFailure: (e) => core.succeed(e), onSuccess: core.succeed })

/** @internal */
export const mergeAll = dual<
  <A2, A>(zero: A2, f: (a2: A2, a: A) => A2) => <E, R>(iterable: Iterable<STM.STM<A, E, R>>) => STM.STM<A2, E, R>,
  <A, E, R, A2>(iterable: Iterable<STM.STM<A, E, R>>, zero: A2, f: (a2: A2, a: A) => A2) => STM.STM<A2, E, R>
>(
  3,
  <A, E, R, A2>(iterable: Iterable<STM.STM<A, E, R>>, zero: A2, f: (a2: A2, a: A) => A2): STM.STM<A2, E, R> =>
    suspend(() =>
      Array.from(iterable).reduce(
        (acc, curr) => pipe(acc, core.zipWith(curr, f)),
        core.succeed(zero) as STM.STM<A2, E, R>
      )
    )
)

/** @internal */
export const negate = <E, R>(self: STM.STM<boolean, E, R>): STM.STM<boolean, E, R> => pipe(self, core.map((b) => !b))

/** @internal */
export const none = <A, E, R>(self: STM.STM<Option.Option<A>, E, R>): STM.STM<void, Option.Option<E>, R> =>
  core.matchSTM(self, {
    onFailure: (e) => core.fail(Option.some(e)),
    onSuccess: Option.match({
      onNone: () => void_,
      onSome: () => core.fail(Option.none())
    })
  })

/** @internal */
export const option = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<Option.Option<A>, never, R> =>
  match(self, { onFailure: () => Option.none(), onSuccess: Option.some })

/** @internal */
export const orDie = <A, E, R>(self: STM.STM<A, E, R>): STM.STM<A, never, R> => pipe(self, orDieWith(identity))

/** @internal */
export const orDieWith = dual<
  <E>(f: (error: E) => unknown) => <A, R>(self: STM.STM<A, E, R>) => STM.STM<A, never, R>,
  <A, E, R>(self: STM.STM<A, E, R>, f: (error: E) => unknown) => STM.STM<A, never, R>
>(2, (self, f) => pipe(self, mapError(f), core.catchAll(core.die)))

/** @internal */
export const orElse = dual<
  <A2, E2, R2>(that: LazyArg<STM.STM<A2, E2, R2>>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<A2 | A, E2, R2 | R>,
  <A, E, R, A2, E2, R2>(self: STM.STM<A, E, R>, that: LazyArg<STM.STM<A2, E2, R2>>) => STM.STM<A2 | A, E2, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(self: STM.STM<A, E, R>, that: LazyArg<STM.STM<A2, E2, R2>>): STM.STM<A2 | A, E2, R2 | R> =>
    core.flatMap(core.effect<R, LazyArg<void>>((journal) => Journal.prepareResetJournal(journal)), (reset) =>
      pipe(
        core.orTry(self, () => core.flatMap(core.sync(reset), that)),
        core.catchAll(() => core.flatMap(core.sync(reset), that))
      ))
)

/** @internal */
export const orElseEither = dual<
  <A2, E2, R2>(
    that: LazyArg<STM.STM<A2, E2, R2>>
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<Either.Either<A2, A>, E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: STM.STM<A, E, R>,
    that: LazyArg<STM.STM<A2, E2, R2>>
  ) => STM.STM<Either.Either<A2, A>, E2, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: STM.STM<A, E, R>,
    that: LazyArg<STM.STM<A2, E2, R2>>
  ): STM.STM<Either.Either<A2, A>, E2, R2 | R> =>
    orElse(core.map(self, Either.left), () => core.map(that(), Either.right))
)

/** @internal */
export const orElseFail = dual<
  <E2>(error: LazyArg<E2>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E2, R>,
  <A, E, R, E2>(self: STM.STM<A, E, R>, error: LazyArg<E2>) => STM.STM<A, E2, R>
>(
  2,
  <A, E, R, E2>(self: STM.STM<A, E, R>, error: LazyArg<E2>): STM.STM<A, E2, R> =>
    orElse(self, () => core.failSync(error))
)

/** @internal */
export const orElseOptional = dual<
  <A2, E2, R2>(
    that: LazyArg<STM.STM<A2, Option.Option<E2>, R2>>
  ) => <A, E, R>(
    self: STM.STM<A, Option.Option<E>, R>
  ) => STM.STM<A2 | A, Option.Option<E2 | E>, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: STM.STM<A, Option.Option<E>, R>,
    that: LazyArg<STM.STM<A2, Option.Option<E2>, R2>>
  ) => STM.STM<A2 | A, Option.Option<E2 | E>, R2 | R>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: STM.STM<A, Option.Option<E>, R>,
    that: LazyArg<STM.STM<A2, Option.Option<E2>, R2>>
  ): STM.STM<A2 | A, Option.Option<E2 | E>, R2 | R> =>
    core.catchAll(
      self,
      Option.match({
        onNone: that,
        onSome: (e) => core.fail(Option.some<E | E2>(e))
      })
    )
)

/** @internal */
export const orElseSucceed = dual<
  <A2>(value: LazyArg<A2>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<A2 | A, never, R>,
  <A, E, R, A2>(self: STM.STM<A, E, R>, value: LazyArg<A2>) => STM.STM<A2 | A, never, R>
>(
  2,
  <A, E, R, A2>(self: STM.STM<A, E, R>, value: LazyArg<A2>): STM.STM<A2 | A, never, R> =>
    orElse(self, () => core.sync(value))
)

/** @internal */
export const provideContext = dual<
  <R>(env: Context.Context<R>) => <A, E>(self: STM.STM<A, E, R>) => STM.STM<A, E>,
  <A, E, R>(self: STM.STM<A, E, R>, env: Context.Context<R>) => STM.STM<A, E>
>(2, (self, env) => core.mapInputContext(self, (_: Context.Context<never>) => env))

/** @internal */
export const provideSomeContext = dual<
  <R>(context: Context.Context<R>) => <R1, E, A>(self: STM.STM<A, E, R1>) => STM.STM<A, E, Exclude<R1, R>>,
  <R, R1, E, A>(self: STM.STM<A, E, R1>, context: Context.Context<R>) => STM.STM<A, E, Exclude<R1, R>>
>(2, <R, R1, E, A>(
  self: STM.STM<A, E, R1>,
  context: Context.Context<R>
): STM.STM<A, E, Exclude<R1, R>> =>
  core.mapInputContext(
    self,
    (parent: Context.Context<Exclude<R1, R>>): Context.Context<R1> => Context.merge(parent, context) as any
  ))

/** @internal */
export const provideService = dual<
  <I, S>(
    tag: Context.Tag<I, S>,
    resource: Types.NoInfer<S>
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A, E, Exclude<R, I>>,
  <A, E, R, I, S>(
    self: STM.STM<A, E, R>,
    tag: Context.Tag<I, S>,
    resource: Types.NoInfer<S>
  ) => STM.STM<A, E, Exclude<R, I>>
>(3, (self, tag, resource) => provideServiceSTM(self, tag, core.succeed(resource)))

/** @internal */
export const provideServiceSTM = dual<
  <I, S, E1, R1>(
    tag: Context.Tag<I, S>,
    stm: STM.STM<Types.NoInfer<S>, E1, R1>
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A, E1 | E, R1 | Exclude<R, I>>,
  <A, E, R, I, S, E1, R1>(
    self: STM.STM<A, E, R>,
    tag: Context.Tag<I, S>,
    stm: STM.STM<Types.NoInfer<S>, E1, R1>
  ) => STM.STM<A, E1 | E, R1 | Exclude<R, I>>
>(3, <A, E, R, I, S, E1, R1>(
  self: STM.STM<A, E, R>,
  tag: Context.Tag<I, S>,
  stm: STM.STM<Types.NoInfer<S>, E1, R1>
): STM.STM<A, E1 | E, R1 | Exclude<R, I>> =>
  core.contextWithSTM((env: Context.Context<R1 | Exclude<R, I>>) =>
    core.flatMap(
      stm,
      (service) =>
        provideContext(
          self,
          Context.add(env, tag, service) as Context.Context<R | R1>
        )
    )
  ))

/** @internal */
export const reduce = dual<
  <S, A, E, R>(zero: S, f: (s: S, a: A) => STM.STM<S, E, R>) => (iterable: Iterable<A>) => STM.STM<S, E, R>,
  <S, A, E, R>(iterable: Iterable<A>, zero: S, f: (s: S, a: A) => STM.STM<S, E, R>) => STM.STM<S, E, R>
>(
  3,
  <S, A, R, E>(iterable: Iterable<A>, zero: S, f: (s: S, a: A) => STM.STM<S, E, R>): STM.STM<S, E, R> =>
    suspend(() =>
      Array.from(iterable).reduce(
        (acc, curr) => pipe(acc, core.flatMap((s) => f(s, curr))),
        core.succeed(zero) as STM.STM<S, E, R>
      )
    )
)

/** @internal */
export const reduceAll = dual<
  <A, E2, R2>(
    initial: STM.STM<A, E2, R2>,
    f: (x: A, y: A) => A
  ) => <E, R>(
    iterable: Iterable<STM.STM<A, E, R>>
  ) => STM.STM<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    iterable: Iterable<STM.STM<A, E, R>>,
    initial: STM.STM<A, E2, R2>,
    f: (x: A, y: A) => A
  ) => STM.STM<A, E2 | E, R2 | R>
>(3, <A, E, R, E2, R2>(
  iterable: Iterable<STM.STM<A, E, R>>,
  initial: STM.STM<A, E2, R2>,
  f: (x: A, y: A) => A
): STM.STM<A, E2 | E, R2 | R> =>
  suspend(() =>
    Array.from(iterable).reduce(
      (acc, curr) => pipe(acc, core.zipWith(curr, f)),
      initial as STM.STM<A, E | E2, R | R2>
    )
  ))

/** @internal */
export const reduceRight = dual<
  <S, A, R, E>(zero: S, f: (s: S, a: A) => STM.STM<S, E, R>) => (iterable: Iterable<A>) => STM.STM<S, E, R>,
  <S, A, R, E>(iterable: Iterable<A>, zero: S, f: (s: S, a: A) => STM.STM<S, E, R>) => STM.STM<S, E, R>
>(
  3,
  <S, A, R, E>(iterable: Iterable<A>, zero: S, f: (s: S, a: A) => STM.STM<S, E, R>): STM.STM<S, E, R> =>
    suspend(() =>
      Array.from(iterable).reduceRight(
        (acc, curr) => pipe(acc, core.flatMap((s) => f(s, curr))),
        core.succeed(zero) as STM.STM<S, E, R>
      )
    )
)

/** @internal */
export const refineOrDie = dual<
  <E, E2>(pf: (error: E) => Option.Option<E2>) => <A, R>(self: STM.STM<A, E, R>) => STM.STM<A, E2, R>,
  <A, E, R, E2>(self: STM.STM<A, E, R>, pf: (error: E) => Option.Option<E2>) => STM.STM<A, E2, R>
>(2, (self, pf) => refineOrDieWith(self, pf, identity))

/** @internal */
export const refineOrDieWith = dual<
  <E, E2>(
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ) => <A, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A, E2, R>,
  <A, E, R, E2>(
    self: STM.STM<A, E, R>,
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ) => STM.STM<A, E2, R>
>(3, (self, pf, f) =>
  core.catchAll(
    self,
    (e) =>
      Option.match(pf(e), {
        onNone: () => core.die(f(e)),
        onSome: core.fail
      })
  ))

/** @internal */
export const reject = dual<
  <A, E2>(pf: (a: A) => Option.Option<E2>) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E2 | E, R>,
  <A, E, R, E2>(self: STM.STM<A, E, R>, pf: (a: A) => Option.Option<E2>) => STM.STM<A, E2 | E, R>
>(2, (self, pf) =>
  rejectSTM(
    self,
    (a) => Option.map(pf(a), core.fail)
  ))

/** @internal */
export const rejectSTM = dual<
  <A, E2, R2>(
    pf: (a: A) => Option.Option<STM.STM<E2, E2, R2>>
  ) => <E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: STM.STM<A, E, R>,
    pf: (a: A) => Option.Option<STM.STM<E2, E2, R2>>
  ) => STM.STM<A, E2 | E, R2 | R>
>(2, (self, pf) =>
  core.flatMap(self, (a) =>
    Option.match(pf(a), {
      onNone: () => core.succeed(a),
      onSome: core.flatMap(core.fail)
    })))

/** @internal */
export const repeatUntil = dual<
  <A>(predicate: Predicate<A>) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E, R>,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>) => STM.STM<A, E, R>
>(2, (self, predicate) => repeatUntilLoop(self, predicate))

const repeatUntilLoop = <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>): STM.STM<A, E, R> =>
  core.flatMap(self, (a) =>
    predicate(a) ?
      core.succeed(a) :
      repeatUntilLoop(self, predicate))

/** @internal */
export const repeatWhile = dual<
  <A>(predicate: Predicate<A>) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E, R>,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>) => STM.STM<A, E, R>
>(2, (self, predicate) => repeatWhileLoop(self, predicate))

const repeatWhileLoop = <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>): STM.STM<A, E, R> =>
  core.flatMap(self, (a) =>
    predicate(a) ?
      repeatWhileLoop(self, predicate) :
      core.succeed(a))

/** @internal */
export const replicate = dual<
  (n: number) => <A, E, R>(self: STM.STM<A, E, R>) => Array<STM.STM<A, E, R>>,
  <A, E, R>(self: STM.STM<A, E, R>, n: number) => Array<STM.STM<A, E, R>>
>(2, (self, n) => Array.from({ length: n }, () => self))

/** @internal */
export const replicateSTM = dual<
  (n: number) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<Array<A>, E, R>,
  <A, E, R>(self: STM.STM<A, E, R>, n: number) => STM.STM<Array<A>, E, R>
>(2, (self, n) => all(replicate(self, n)))

/** @internal */
export const replicateSTMDiscard = dual<
  (n: number) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<void, E, R>,
  <A, E, R>(self: STM.STM<A, E, R>, n: number) => STM.STM<void, E, R>
>(2, (self, n) => all(replicate(self, n), { discard: true }))

/** @internal */
export const retryUntil = dual<
  {
    <A, B extends A>(refinement: Refinement<Types.NoInfer<A>, B>): <E, R>(self: STM.STM<A, E, R>) => STM.STM<B, E, R>
    <A>(predicate: Predicate<A>): <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E, R>
  },
  {
    <A, E, R, B extends A>(self: STM.STM<A, E, R>, refinement: Refinement<A, B>): STM.STM<B, E, R>
    <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>): STM.STM<A, E, R>
  }
>(
  2,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>) =>
    core.matchSTM(self, { onFailure: core.fail, onSuccess: (a) => predicate(a) ? core.succeed(a) : core.retry })
)

/** @internal */
export const retryWhile = dual<
  <A>(predicate: Predicate<A>) => <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E, R>,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: Predicate<A>) => STM.STM<A, E, R>
>(
  2,
  (self, predicate) =>
    core.matchSTM(self, { onFailure: core.fail, onSuccess: (a) => !predicate(a) ? core.succeed(a) : core.retry })
)

/** @internal */
export const partition = dual<
  <A, A2, E, R>(
    f: (a: A) => STM.STM<A2, E, R>
  ) => (
    elements: Iterable<A>
  ) => STM.STM<[excluded: Array<E>, satisfying: Array<A2>], never, R>,
  <A, A2, E, R>(
    elements: Iterable<A>,
    f: (a: A) => STM.STM<A2, E, R>
  ) => STM.STM<[excluded: Array<E>, satisfying: Array<A2>], never, R>
>(2, (elements, f) =>
  pipe(
    forEach(elements, (a) => either(f(a))),
    core.map((as) => effectCore.partitionMap(as, identity))
  ))

/** @internal */
export const some = <A, E, R>(self: STM.STM<Option.Option<A>, E, R>): STM.STM<A, Option.Option<E>, R> =>
  core.matchSTM(self, {
    onFailure: (e) => core.fail(Option.some(e)),
    onSuccess: Option.match({
      onNone: () => core.fail(Option.none()),
      onSome: core.succeed
    })
  })

/* @internal */
export const all = ((
  input: Iterable<STM.All.STMAny> | Record<string, STM.All.STMAny>,
  options?: STM.All.Options
): STM.STM<any, any, any> => {
  if (Symbol.iterator in input) {
    return forEach(input, identity, options as any)
  } else if (options?.discard) {
    return forEach(Object.values(input), identity, options as any)
  }

  return core.map(
    forEach(
      Object.entries(input),
      ([_, e]) => core.map(e, (a) => [_, a] as const)
    ),
    (values) => {
      const res = {}
      for (const [k, v] of values) {
        ;(res as any)[k] = v
      }
      return res
    }
  )
}) as STM.All.Signature

/** @internal */
export const succeedNone: STM.STM<Option.Option<never>> = core.succeed(Option.none())

/** @internal */
export const succeedSome = <A>(value: A): STM.STM<Option.Option<A>> => core.succeed(Option.some(value))

/** @internal */
export const summarized = dual<
  <A2, E2, R2, A3>(
    summary: STM.STM<A2, E2, R2>,
    f: (before: A2, after: A2) => A3
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<[A3, A], E2 | E, R2 | R>,
  <A, E, R, A2, E2, R2, A3>(
    self: STM.STM<A, E, R>,
    summary: STM.STM<A2, E2, R2>,
    f: (before: A2, after: A2) => A3
  ) => STM.STM<[A3, A], E2 | E, R2 | R>
>(3, (self, summary, f) =>
  core.flatMap(summary, (start) =>
    core.flatMap(self, (value) =>
      core.map(
        summary,
        (end) => [f(start, end), value]
      ))))

/** @internal */
export const suspend = <A, E, R>(evaluate: LazyArg<STM.STM<A, E, R>>): STM.STM<A, E, R> => flatten(core.sync(evaluate))

/** @internal */
export const tap: {
  <A, X, E2, R2>(f: (a: A) => STM.STM<X, E2, R2>): <E, R>(self: STM.STM<A, E, R>) => STM.STM<A, E2 | E, R2 | R>
  <A, E, R, X, E2, R2>(self: STM.STM<A, E, R>, f: (a: A) => STM.STM<X, E2, R2>): STM.STM<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, X, E2, R2>(self: STM.STM<A, E, R>, f: (a: A) => STM.STM<X, E2, R2>): STM.STM<A, E | E2, R | R2> =>
    core.flatMap(self, (a) => as(f(a), a))
)

/** @internal */
export const tapBoth = dual<
  <XE extends E, A2, E2, R2, XA extends A, A3, E3, R3, A, E>(
    options: {
      readonly onFailure: (error: XE) => STM.STM<A2, E2, R2>
      readonly onSuccess: (value: XA) => STM.STM<A3, E3, R3>
    }
  ) => <R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<A, E | E2 | E3, R2 | R3 | R>,
  <A, E, R, XE extends E, A2, E2, R2, XA extends A, A3, E3, R3>(
    self: STM.STM<A, E, R>,
    options: {
      readonly onFailure: (error: XE) => STM.STM<A2, E2, R2>
      readonly onSuccess: (value: XA) => STM.STM<A3, E3, R3>
    }
  ) => STM.STM<A, E | E2 | E3, R2 | R3 | R>
>(2, (self, { onFailure, onSuccess }) =>
  core.matchSTM(self, {
    onFailure: (e) => pipe(onFailure(e as any), core.zipRight(core.fail(e))),
    onSuccess: (a) => pipe(onSuccess(a as any), as(a))
  }))

/** @internal */
export const tapError: {
  <E, X, E2, R2>(
    f: (error: Types.NoInfer<E>) => STM.STM<X, E2, R2>
  ): <A, R>(self: STM.STM<A, E, R>) => STM.STM<A, E | E2, R2 | R>
  <A, E, R, X, E2, R2>(self: STM.STM<A, E, R>, f: (error: E) => STM.STM<X, E2, R2>): STM.STM<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, X, E2, R2>(self: STM.STM<A, E, R>, f: (error: E) => STM.STM<X, E2, R2>): STM.STM<A, E | E2, R | R2> =>
    core.matchSTM(self, {
      onFailure: (e) => core.zipRight(f(e), core.fail(e)),
      onSuccess: core.succeed
    })
)

/** @internal */
export const try_: {
  <A, E>(options: {
    readonly try: LazyArg<A>
    readonly catch: (u: unknown) => E
  }): STM.STM<A, E>
  <A>(try_: LazyArg<A>): STM.STM<A, unknown>
} = <A, E>(
  arg: LazyArg<A> | {
    readonly try: LazyArg<A>
    readonly catch: (u: unknown) => E
  }
) => {
  const evaluate = typeof arg === "function" ? arg : arg.try
  return suspend(() => {
    try {
      return core.succeed(evaluate())
    } catch (error) {
      return core.fail("catch" in arg ? arg.catch(error) : error)
    }
  })
}

/** @internal */
const void_: STM.STM<void> = core.succeed(void 0)
export {
  /** @internal */
  void_ as void
}

/** @internal */
export const unless = dual<
  (predicate: LazyArg<boolean>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<Option.Option<A>, E, R>,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: LazyArg<boolean>) => STM.STM<Option.Option<A>, E, R>
>(2, (self, predicate) =>
  suspend(
    () => predicate() ? succeedNone : asSome(self)
  ))

/** @internal */
export const unlessSTM = dual<
  <E2, R2>(
    predicate: STM.STM<boolean, E2, R2>
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<Option.Option<A>, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: STM.STM<A, E, R>,
    predicate: STM.STM<boolean, E2, R2>
  ) => STM.STM<Option.Option<A>, E2 | E, R2 | R>
>(2, (self, predicate) =>
  core.flatMap(
    predicate,
    (bool) => bool ? succeedNone : asSome(self)
  ))

/** @internal */
export const unsome = <A, E, R>(self: STM.STM<A, Option.Option<E>, R>): STM.STM<Option.Option<A>, E, R> =>
  core.matchSTM(self, {
    onFailure: Option.match({
      onNone: () => core.succeed(Option.none()),
      onSome: core.fail
    }),
    onSuccess: (a) => core.succeed(Option.some(a))
  })

/** @internal */
export const validateAll = dual<
  <A, B, E, R>(
    f: (a: A) => STM.STM<B, E, R>
  ) => (
    elements: Iterable<A>
  ) => STM.STM<Array<B>, RA.NonEmptyArray<E>, R>,
  <A, B, E, R>(
    elements: Iterable<A>,
    f: (a: A) => STM.STM<B, E, R>
  ) => STM.STM<Array<B>, RA.NonEmptyArray<E>, R>
>(
  2,
  (elements, f) =>
    core.flatMap(partition(elements, f), ([errors, values]) =>
      RA.isNonEmptyArray(errors) ?
        core.fail(errors) :
        core.succeed(values))
)

/** @internal */
export const validateFirst = dual<
  <A, B, E, R>(f: (a: A) => STM.STM<B, E, R>) => (elements: Iterable<A>) => STM.STM<B, Array<E>, R>,
  <A, B, E, R>(elements: Iterable<A>, f: (a: A) => STM.STM<B, E, R>) => STM.STM<B, Array<E>, R>
>(2, (elements, f) => flip(forEach(elements, (a) => flip(f(a)))))

/** @internal */
export const when = dual<
  (predicate: LazyArg<boolean>) => <A, E, R>(self: STM.STM<A, E, R>) => STM.STM<Option.Option<A>, E, R>,
  <A, E, R>(self: STM.STM<A, E, R>, predicate: LazyArg<boolean>) => STM.STM<Option.Option<A>, E, R>
>(2, (self, predicate) =>
  suspend(
    () => predicate() ? asSome(self) : succeedNone
  ))

/** @internal */
export const whenSTM = dual<
  <E2, R2>(
    predicate: STM.STM<boolean, E2, R2>
  ) => <A, E, R>(
    self: STM.STM<A, E, R>
  ) => STM.STM<Option.Option<A>, E2 | E, R2 | R>,
  <A, E, R, E2, R2>(
    self: STM.STM<A, E, R>,
    predicate: STM.STM<boolean, E2, R2>
  ) => STM.STM<Option.Option<A>, E2 | E, R2 | R>
>(2, (self, predicate) =>
  core.flatMap(
    predicate,
    (bool) => bool ? asSome(self) : succeedNone
  ))
