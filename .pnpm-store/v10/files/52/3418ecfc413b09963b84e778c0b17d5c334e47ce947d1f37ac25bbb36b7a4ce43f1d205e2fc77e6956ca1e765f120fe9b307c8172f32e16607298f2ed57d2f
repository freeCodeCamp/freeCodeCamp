import * as Arr from "../Array.js"
import type * as Cause from "../Cause.js"
import * as Chunk from "../Chunk.js"
import * as Clock from "../Clock.js"
import * as Context from "../Context.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import type { Exit } from "../Exit.js"
import type * as Fiber from "../Fiber.js"
import type * as FiberId from "../FiberId.js"
import type * as FiberRef from "../FiberRef.js"
import * as FiberRefs from "../FiberRefs.js"
import type * as FiberRefsPatch from "../FiberRefsPatch.js"
import type { LazyArg } from "../Function.js"
import { constFalse, constTrue, constVoid, dual, identity, pipe } from "../Function.js"
import * as HashMap from "../HashMap.js"
import * as HashSet from "../HashSet.js"
import * as List from "../List.js"
import * as LogLevel from "../LogLevel.js"
import * as LogSpan from "../LogSpan.js"
import type * as Metric from "../Metric.js"
import type * as MetricLabel from "../MetricLabel.js"
import * as Option from "../Option.js"
import * as Predicate from "../Predicate.js"
import type * as Random from "../Random.js"
import * as Ref from "../Ref.js"
import type * as runtimeFlagsPatch from "../RuntimeFlagsPatch.js"
import * as Tracer from "../Tracer.js"
import type * as Types from "../Types.js"
import type { Unify } from "../Unify.js"
import { internalCall } from "../Utils.js"
import * as internalCause from "./cause.js"
import { clockTag } from "./clock.js"
import * as core from "./core.js"
import * as defaultServices from "./defaultServices.js"
import * as doNotation from "./doNotation.js"
import * as fiberRefsPatch from "./fiberRefs/patch.js"
import type { FiberRuntime } from "./fiberRuntime.js"
import * as metricLabel from "./metric/label.js"
import * as runtimeFlags from "./runtimeFlags.js"
import * as internalTracer from "./tracer.js"

/* @internal */
export const annotateLogs = dual<
  {
    (key: string, value: unknown): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
    (
      values: Record<string, unknown>
    ): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  },
  {
    <A, E, R>(effect: Effect.Effect<A, E, R>, key: string, value: unknown): Effect.Effect<A, E, R>
    <A, E, R>(effect: Effect.Effect<A, E, R>, values: Record<string, unknown>): Effect.Effect<A, E, R>
  }
>(
  (args) => core.isEffect(args[0]),
  function<A, E, R>() {
    const args = arguments
    return core.fiberRefLocallyWith(
      args[0] as Effect.Effect<A, E, R>,
      core.currentLogAnnotations,
      typeof args[1] === "string"
        ? HashMap.set(args[1], args[2])
        : (annotations) =>
          Object.entries(args[1] as Record<string, unknown>).reduce(
            (acc, [key, value]) => HashMap.set(acc, key, value),
            annotations
          )
    )
  }
)

/* @internal */
export const asSome = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<Option.Option<A>, E, R> =>
  core.map(self, Option.some)

/* @internal */
export const asSomeError = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, Option.Option<E>, R> =>
  core.mapError(self, Option.some)

/* @internal */
export const try_: {
  <A, E>(options: {
    readonly try: LazyArg<A>
    readonly catch: (error: unknown) => E
  }): Effect.Effect<A, E>
  <A>(thunk: LazyArg<A>): Effect.Effect<A, Cause.UnknownException>
} = <A, E>(
  arg: LazyArg<A> | {
    readonly try: LazyArg<A>
    readonly catch: (error: unknown) => E
  }
) => {
  let evaluate: LazyArg<A>
  let onFailure: ((error: unknown) => E) | undefined = undefined
  if (typeof arg === "function") {
    evaluate = arg
  } else {
    evaluate = arg.try
    onFailure = arg.catch
  }
  return core.suspend(() => {
    try {
      return core.succeed(internalCall(evaluate))
    } catch (error) {
      return core.fail(
        onFailure
          ? internalCall(() => onFailure(error))
          : new core.UnknownException(error, "An unknown error occurred in Effect.try")
      )
    }
  })
}

/* @internal */
export const _catch: {
  <N extends keyof E, K extends E[N] & string, E, A1, E1, R1>(
    discriminator: N,
    options: {
      readonly failure: K
      readonly onFailure: (error: Extract<E, { [n in N]: K }>) => Effect.Effect<A1, E1, R1>
    }
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<
    A | A1,
    Exclude<E, { [n in N]: K }> | E1,
    R | R1
  >
  <A, E, R, N extends keyof E, K extends E[N] & string, A1, E1, R1>(
    self: Effect.Effect<A, E, R>,
    discriminator: N,
    options: {
      readonly failure: K
      readonly onFailure: (error: Extract<E, { [n in N]: K }>) => Effect.Effect<A1, E1, R1>
    }
  ): Effect.Effect<A | A1, Exclude<E, { [n in N]: K }> | E1, R | R1>
} = dual(
  3,
  (self, tag, options) =>
    core.catchAll(self, (e) => {
      if (Predicate.hasProperty(e, tag) && e[tag] === options.failure) {
        return options.onFailure(e)
      }
      return core.fail(e)
    })
)

/* @internal */
export const catchAllDefect = dual<
  <A2, E2, R2>(
    f: (defect: unknown) => Effect.Effect<A2, E2, R2>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A | A2, E | E2, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (defect: unknown) => Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<A | A2, E | E2, R | R2>
>(2, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  f: (defect: unknown) => Effect.Effect<A2, E2, R2>
): Effect.Effect<A | A2, E | E2, R | R2> =>
  core.catchAllCause(
    self,
    (cause): Effect.Effect<A | A2, E | E2, R | R2> => {
      const option = internalCause.find(cause, (_) => internalCause.isDieType(_) ? Option.some(_) : Option.none())
      switch (option._tag) {
        case "None": {
          return core.failCause(cause)
        }
        case "Some": {
          return f(option.value.defect)
        }
      }
    }
  ))

/* @internal */
export const catchSomeCause: {
  <E, A2, E2, R2>(
    f: (cause: Cause.Cause<Types.NoInfer<E>>) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E | E2, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (cause: Cause.Cause<Types.NoInfer<E>>) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): Effect.Effect<A2 | A, E | E2, R2 | R>
} = dual(
  2,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (cause: Cause.Cause<Types.NoInfer<E>>) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): Effect.Effect<A2 | A, E | E2, R2 | R> =>
    core.matchCauseEffect(self, {
      onFailure: (cause): Effect.Effect<A2, E | E2, R2> => {
        const option = f(cause)
        switch (option._tag) {
          case "None": {
            return core.failCause(cause)
          }
          case "Some": {
            return option.value
          }
        }
      },
      onSuccess: core.succeed
    })
)

/* @internal */
export const catchSomeDefect = dual<
  <A2, E2, R2>(
    pf: (defect: unknown) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A | A2, E | E2, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    pf: (defect: unknown) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => Effect.Effect<A | A2, E | E2, R | R2>
>(
  2,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    pf: (defect: unknown) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): Effect.Effect<A | A2, E | E2, R | R2> =>
    core.catchAllCause(
      self,
      (cause): Effect.Effect<A | A2, E | E2, R | R2> => {
        const option = internalCause.find(cause, (_) => internalCause.isDieType(_) ? Option.some(_) : Option.none())
        switch (option._tag) {
          case "None": {
            return core.failCause(cause)
          }
          case "Some": {
            const optionEffect = pf(option.value.defect)
            return optionEffect._tag === "Some" ? optionEffect.value : core.failCause(cause)
          }
        }
      }
    )
)

/* @internal */
export const catchTag: {
  <
    E,
    const K extends Arr.NonEmptyReadonlyArray<E extends { _tag: string } ? E["_tag"] : never>,
    A1,
    E1,
    R1
  >(
    ...args: [
      ...tags: K,
      f: (e: Extract<Types.NoInfer<E>, { _tag: K[number] }>) => Effect.Effect<A1, E1, R1>
    ]
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A | A1, Exclude<E, { _tag: K[number] }> | E1, R | R1>
  <
    A,
    E,
    R,
    const K extends Arr.NonEmptyReadonlyArray<E extends { _tag: string } ? E["_tag"] : never>,
    A1,
    E1,
    R1
  >(
    self: Effect.Effect<A, E, R>,
    ...args: [
      ...tags: K,
      f: (e: Extract<Types.NoInfer<E>, { _tag: K[number] }>) => Effect.Effect<A1, E1, R1>
    ]
  ): Effect.Effect<A | A1, Exclude<E, { _tag: K[number] }> | E1, R | R1>
} = dual(
  (args: any) => core.isEffect(args[0]),
  <A, E, R, const K extends Arr.NonEmptyReadonlyArray<E extends { _tag: string } ? E["_tag"] : never>, R1, E1, A1>(
    self: Effect.Effect<A, E, R>,
    ...args: [
      ...tags: K & { [I in keyof K]: E extends { _tag: string } ? E["_tag"] : never },
      f: (e: Extract<Types.NoInfer<E>, { _tag: K[number] }>) => Effect.Effect<A1, E1, R1>
    ]
  ): Effect.Effect<A | A1, Exclude<E, { _tag: K[number] }> | E1, R | R1> => {
    const f = args[args.length - 1] as any
    let predicate: Predicate.Predicate<E>
    if (args.length === 2) {
      predicate = Predicate.isTagged(args[0] as string)
    } else {
      predicate = (e) => {
        const tag = Predicate.hasProperty(e, "_tag") ? e["_tag"] : undefined
        if (!tag) return false
        for (let i = 0; i < args.length - 1; i++) {
          if (args[i] === tag) return true
        }
        return false
      }
    }
    return core.catchIf(self, predicate as Predicate.Refinement<E, Extract<E, { _tag: K[number] }>>, f) as any
  }
) as any

/** @internal */
export const catchTags: {
  <
    E,
    Cases extends (E extends { _tag: string } ? {
        [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Effect.Effect<any, any, any>
      } :
      {})
  >(
    cases: Cases
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => Effect.Effect<infer A, any, any>) ? A : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => Effect.Effect<any, infer E, any>) ? E : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => Effect.Effect<any, any, infer R>) ? R : never
    }[keyof Cases]
  >
  <
    R,
    E,
    A,
    Cases extends (E extends { _tag: string } ? {
        [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Effect.Effect<any, any, any>
      } :
      {})
  >(
    self: Effect.Effect<A, E, R>,
    cases: Cases
  ): Effect.Effect<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => Effect.Effect<infer A, any, any>) ? A : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => Effect.Effect<any, infer E, any>) ? E : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends ((...args: Array<any>) => Effect.Effect<any, any, infer R>) ? R : never
    }[keyof Cases]
  >
} = dual(2, (self, cases) => {
  let keys: Array<string>
  return core.catchIf(
    self,
    (e): e is { readonly _tag: string } => {
      keys ??= Object.keys(cases)
      return Predicate.hasProperty(e, "_tag") && Predicate.isString(e["_tag"]) && keys.includes(e["_tag"])
    },
    (e) => cases[e["_tag"]](e)
  )
})

/* @internal */
export const cause = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<Cause.Cause<E>, never, R> =>
  core.matchCause(self, { onFailure: identity, onSuccess: () => internalCause.empty })

/* @internal */
export const clockWith: <A, E, R>(f: (clock: Clock.Clock) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R> =
  Clock.clockWith

/* @internal */
export const clock: Effect.Effect<Clock.Clock> = clockWith(core.succeed)

/* @internal */
export const delay = dual<
  (duration: Duration.DurationInput) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, duration: Duration.DurationInput) => Effect.Effect<A, E, R>
>(2, (self, duration) => core.zipRight(Clock.sleep(duration), self))

/* @internal */
export const descriptorWith = <A, E, R>(
  f: (descriptor: Fiber.Fiber.Descriptor) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  core.withFiberRuntime((state, status) =>
    f({
      id: state.id(),
      status,
      interruptors: internalCause.interruptors(state.getFiberRef(core.currentInterruptedCause))
    })
  ) as Effect.Effect<A, E, R>

/* @internal */
export const allowInterrupt: Effect.Effect<void> = descriptorWith(
  (descriptor) =>
    HashSet.size(descriptor.interruptors) > 0
      ? core.interrupt
      : core.void
)

/* @internal */
export const descriptor: Effect.Effect<Fiber.Fiber.Descriptor> = descriptorWith(core.succeed)

/* @internal */
export const diffFiberRefs = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<[FiberRefsPatch.FiberRefsPatch, A], E, R> => summarized(self, fiberRefs, fiberRefsPatch.diff)

/* @internal */
export const diffFiberRefsAndRuntimeFlags = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<[[FiberRefsPatch.FiberRefsPatch, runtimeFlagsPatch.RuntimeFlagsPatch], A], E, R> =>
  summarized(
    self,
    core.zip(fiberRefs, core.runtimeFlags),
    ([refs, flags], [refsNew, flagsNew]) => [fiberRefsPatch.diff(refs, refsNew), runtimeFlags.diff(flags, flagsNew)]
  )

/* @internal */
export const Do: Effect.Effect<{}> = core.succeed({})

/* @internal */
export const bind: {
  <N extends string, A extends object, B, E2, R2>(
    name: Exclude<N, keyof A>,
    f: (a: Types.NoInfer<A>) => Effect.Effect<B, E2, R2>
  ): <E1, R1>(
    self: Effect.Effect<A, E1, R1>
  ) => Effect.Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E2 | E1, R2 | R1>
  <A extends object, N extends string, E1, R1, B, E2, R2>(
    self: Effect.Effect<A, E1, R1>,
    name: Exclude<N, keyof A>,
    f: (a: Types.NoInfer<A>) => Effect.Effect<B, E2, R2>
  ): Effect.Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E1 | E2, R1 | R2>
} = doNotation.bind<Effect.EffectTypeLambda>(core.map, core.flatMap)

/* @internal */
export const bindTo: {
  <N extends string>(name: N): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<{ [K in N]: A }, E, R>
  <A, E, R, N extends string>(self: Effect.Effect<A, E, R>, name: N): Effect.Effect<{ [K in N]: A }, E, R>
} = doNotation.bindTo<Effect.EffectTypeLambda>(core.map)

/* @internal */
export const let_: {
  <N extends string, A extends object, B>(
    name: Exclude<N, keyof A>,
    f: (a: Types.NoInfer<A>) => B
  ): <E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
  <A extends object, N extends string, E, R, B>(
    self: Effect.Effect<A, E, R>,
    name: Exclude<N, keyof A>,
    f: (a: Types.NoInfer<A>) => B
  ): Effect.Effect<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
} = doNotation.let_<Effect.EffectTypeLambda>(core.map)

/* @internal */
export const dropUntil: {
  <A, E, R>(
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect.Effect<Array<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Array<A>, E, R>
} = dual(
  2,
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Array<A>, E, R> =>
    core.suspend(() => {
      const iterator = elements[Symbol.iterator]()
      const builder: Array<A> = []
      let next: IteratorResult<A, any>
      let dropping: Effect.Effect<boolean, E, R> = core.succeed(false)
      let i = 0
      while ((next = iterator.next()) && !next.done) {
        const a = next.value
        const index = i++
        dropping = core.flatMap(dropping, (bool) => {
          if (bool) {
            builder.push(a)
            return core.succeed(true)
          }
          return predicate(a, index)
        })
      }
      return core.map(dropping, () => builder)
    })
)

/* @internal */
export const dropWhile: {
  <A, E, R>(
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect.Effect<Array<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Array<A>, E, R>
} = dual(
  2,
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Array<A>, E, R> =>
    core.suspend(() => {
      const iterator = elements[Symbol.iterator]()
      const builder: Array<A> = []
      let next
      let dropping: Effect.Effect<boolean, E, R> = core.succeed(true)
      let i = 0
      while ((next = iterator.next()) && !next.done) {
        const a = next.value
        const index = i++
        dropping = core.flatMap(dropping, (d) =>
          core.map(d ? predicate(a, index) : core.succeed(false), (b) => {
            if (!b) {
              builder.push(a)
            }
            return b
          }))
      }
      return core.map(dropping, () => builder)
    })
)

/* @internal */
export const contextWith = <R, A>(f: (context: Context.Context<R>) => A): Effect.Effect<A, never, R> =>
  core.map(core.context<R>(), f)

/* @internal */
export const eventually = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, never, R> =>
  core.orElse(self, () => core.flatMap(core.yieldNow(), () => eventually(self)))

/* @internal */
export const filterMap = dual<
  <Eff extends Effect.Effect<any, any, any>, B>(
    pf: (a: Effect.Effect.Success<Eff>) => Option.Option<B>
  ) => (elements: Iterable<Eff>) => Effect.Effect<Array<B>, Effect.Effect.Error<Eff>, Effect.Effect.Context<Eff>>,
  <Eff extends Effect.Effect<any, any, any>, B>(
    elements: Iterable<Eff>,
    pf: (a: Effect.Effect.Success<Eff>) => Option.Option<B>
  ) => Effect.Effect<Array<B>, Effect.Effect.Error<Eff>, Effect.Effect.Context<Eff>>
>(2, (elements, pf) =>
  core.map(
    core.forEachSequential(elements, identity),
    Arr.filterMap(pf)
  ))

/* @internal */
export const filterOrDie: {
  <A, B extends A>(
    refinement: Predicate.Refinement<Types.NoInfer<A>, B>,
    orDieWith: (a: Types.EqualsWith<A, B, A, Exclude<A, B>>) => unknown
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R>
  <A>(
    predicate: Predicate.Predicate<Types.NoInfer<A>>,
    orDieWith: (a: Types.NoInfer<A>) => unknown
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  <A, E, R, B extends A>(
    self: Effect.Effect<A, E, R>,
    refinement: Predicate.Refinement<A, B>,
    orDieWith: (a: Types.EqualsWith<A, B, A, Exclude<A, B>>) => unknown
  ): Effect.Effect<B, E, R>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    predicate: Predicate.Predicate<A>,
    orDieWith: (a: A) => unknown
  ): Effect.Effect<A, E, R>
} = dual(
  3,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    predicate: Predicate.Predicate<A>,
    orDieWith: (a: A) => unknown
  ): Effect.Effect<A, E, R> => filterOrElse(self, predicate, (a) => core.dieSync(() => orDieWith(a)))
)

/* @internal */
export const filterOrDieMessage: {
  <A, B extends A>(
    refinement: Predicate.Refinement<Types.NoInfer<A>, B>,
    message: string
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R>
  <A>(
    predicate: Predicate.Predicate<Types.NoInfer<A>>,
    message: string
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  <A, E, R, B extends A>(
    self: Effect.Effect<A, E, R>,
    refinement: Predicate.Refinement<A, B>,
    message: string
  ): Effect.Effect<B, E, R>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    predicate: Predicate.Predicate<A>,
    message: string
  ): Effect.Effect<A, E, R>
} = dual(
  3,
  <A, E, R>(self: Effect.Effect<A, E, R>, predicate: Predicate.Predicate<A>, message: string): Effect.Effect<A, E, R> =>
    filterOrElse(self, predicate, () => core.dieMessage(message))
)

/* @internal */
export const filterOrElse: {
  <A, C, E2, R2, B extends A>(
    refinement: Predicate.Refinement<Types.NoInfer<A>, B>,
    orElse: (a: Types.EqualsWith<A, B, Types.NoInfer<A>, Exclude<Types.NoInfer<A>, B>>) => Effect.Effect<C, E2, R2>
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B | C, E2 | E, R2 | R>
  <A, C, E2, R2>(
    predicate: Predicate.Predicate<Types.NoInfer<A>>,
    orElse: (a: Types.NoInfer<A>) => Effect.Effect<C, E2, R2>
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A | C, E2 | E, R2 | R>
  <A, E, R, C, E2, R2, B extends A>(
    self: Effect.Effect<A, E, R>,
    refinement: Predicate.Refinement<A, B>,
    orElse: (a: Types.EqualsWith<A, B, A, Exclude<A, B>>) => Effect.Effect<C, E2, R2>
  ): Effect.Effect<B | C, E | E2, R | R2>
  <A, E, R, C, E2, R2>(
    self: Effect.Effect<A, E, R>,
    predicate: Predicate.Predicate<A>,
    orElse: (a: A) => Effect.Effect<C, E2, R2>
  ): Effect.Effect<A | C, E | E2, R | R2>
} = dual(3, <A, E, R, B, E2, R2>(
  self: Effect.Effect<A, E, R>,
  predicate: Predicate.Predicate<A>,
  orElse: (a: A) => Effect.Effect<B, E2, R2>
): Effect.Effect<A | B, E | E2, R | R2> =>
  core.flatMap(
    self,
    (a) => predicate(a) ? core.succeed<A | B>(a) : orElse(a)
  ))

/** @internal */
export const liftPredicate = dual<
  <T extends A, E, B extends T = T, A = T>(
    predicate: Predicate.Refinement<T, B> | Predicate.Predicate<T>,
    orFailWith: (a: Types.EqualsWith<T, B, A, Exclude<A, B>>) => E
  ) => (a: A) => Effect.Effect<Types.EqualsWith<T, B, A, B>, E>,
  <A, E, B extends A = A>(
    self: A,
    predicate: Predicate.Refinement<A, B> | Predicate.Predicate<A>,
    orFailWith: (a: Types.EqualsWith<A, B, A, Exclude<A, B>>) => E
  ) => Effect.Effect<B, E>
>(
  3,
  <A, E, B extends A = A>(
    self: A,
    predicate: Predicate.Refinement<A, B> | Predicate.Predicate<A>,
    orFailWith: (a: Types.EqualsWith<A, B, A, Exclude<A, B>>) => E
  ): Effect.Effect<B, E> =>
    core.suspend(() => predicate(self) ? core.succeed(self as B) : core.fail(orFailWith(self as any)))
)

/* @internal */
export const filterOrFail: {
  <A, E2, B extends A>(
    refinement: Predicate.Refinement<Types.NoInfer<A>, B>,
    orFailWith: (a: Types.EqualsWith<A, B, Types.NoInfer<A>, Exclude<Types.NoInfer<A>, B>>) => E2
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Types.NoInfer<B>, E2 | E, R>
  <A, E2>(
    predicate: Predicate.Predicate<Types.NoInfer<A>>,
    orFailWith: (a: Types.NoInfer<A>) => E2
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E2 | E, R>
  <A, E, R, E2, B extends A>(
    self: Effect.Effect<A, E, R>,
    refinement: Predicate.Refinement<A, B>,
    orFailWith: (a: Types.EqualsWith<A, B, A, Exclude<A, B>>) => E2
  ): Effect.Effect<Types.NoInfer<B>, E2 | E, R>
  <A, E, R, E2>(
    self: Effect.Effect<A, E, R>,
    predicate: Predicate.Predicate<A>,
    orFailWith: (a: A) => E2
  ): Effect.Effect<A, E2 | E, R>
  <A, B extends A>(
    refinement: Predicate.Refinement<Types.NoInfer<A>, B>
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Types.NoInfer<B>, Cause.NoSuchElementException | E, R>
  <A>(
    predicate: Predicate.Predicate<Types.NoInfer<A>>
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, Cause.NoSuchElementException | E, R>
  <A, E, R, B extends A>(
    self: Effect.Effect<A, E, R>,
    refinement: Predicate.Refinement<A, B>
  ): Effect.Effect<Types.NoInfer<B>, E | Cause.NoSuchElementException, R>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    predicate: Predicate.Predicate<A>
  ): Effect.Effect<A, E | Cause.NoSuchElementException, R>
} = dual((args) => core.isEffect(args[0]), <A, E, R, E2>(
  self: Effect.Effect<A, E, R>,
  predicate: Predicate.Predicate<A>,
  orFailWith?: (a: A) => E2
): Effect.Effect<A, E | E2 | Cause.NoSuchElementException, R> =>
  filterOrElse(
    self,
    predicate,
    (a): Effect.Effect<never, E2 | Cause.NoSuchElementException, never> =>
      orFailWith === undefined ? core.fail(new core.NoSuchElementException()) : core.failSync(() => orFailWith(a))
  ))

/* @internal */
export const findFirst: {
  <A, E, R>(
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect.Effect<Option.Option<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Option.Option<A>, E, R>
} = dual(
  2,
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Option.Option<A>, E, R> =>
    core.suspend(() => {
      const iterator = elements[Symbol.iterator]()
      const next = iterator.next()
      if (!next.done) {
        return findLoop(iterator, 0, predicate, next.value)
      }
      return core.succeed(Option.none())
    })
)

const findLoop = <A, E, R>(
  iterator: Iterator<A>,
  index: number,
  f: (a: A, i: number) => Effect.Effect<boolean, E, R>,
  value: A
): Effect.Effect<Option.Option<A>, E, R> =>
  core.flatMap(f(value, index), (result) => {
    if (result) {
      return core.succeed(Option.some(value))
    }
    const next = iterator.next()
    if (!next.done) {
      return findLoop(iterator, index + 1, f, next.value)
    }
    return core.succeed(Option.none())
  })

/* @internal */
export const firstSuccessOf = <Eff extends Effect.Effect<any, any, any>>(
  effects: Iterable<Eff>
): Effect.Effect<Effect.Effect.Success<Eff>, Effect.Effect.Error<Eff>, Effect.Effect.Context<Eff>> =>
  core.suspend(() => {
    const list = Chunk.fromIterable(effects)
    if (!Chunk.isNonEmpty(list)) {
      return core.dieSync(() => new core.IllegalArgumentException(`Received an empty collection of effects`))
    }
    return pipe(
      Chunk.tailNonEmpty(list),
      Arr.reduce(Chunk.headNonEmpty(list), (left, right) => core.orElse(left, () => right) as Eff)
    )
  })

/* @internal */
export const flipWith: {
  <E, A, R, E2, A2, R2>(
    f: (effect: Effect.Effect<E, A, R>) => Effect.Effect<E2, A2, R2>
  ): (self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R2>
  <A, E, R, E2, A2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (effect: Effect.Effect<E, A, R>) => Effect.Effect<E2, A2, R2>
  ): Effect.Effect<A2, E2, R2>
} = dual(2, <A, E, R, E2, A2, R2>(
  self: Effect.Effect<A, E, R>,
  f: (effect: Effect.Effect<E, A, R>) => Effect.Effect<E2, A2, R2>
): Effect.Effect<A2, E2, R2> => core.flip(f(core.flip(self))))

/* @internal */
export const match: {
  <E, A2, A, A3>(
    options: {
      readonly onFailure: (error: E) => A2
      readonly onSuccess: (value: A) => A3
    }
  ): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A3, never, R>
  <A, E, R, A2, A3>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onFailure: (error: E) => A2
      readonly onSuccess: (value: A) => A3
    }
  ): Effect.Effect<A2 | A3, never, R>
} = dual(2, <A, E, R, A2, A3>(
  self: Effect.Effect<A, E, R>,
  options: {
    readonly onFailure: (error: E) => A2
    readonly onSuccess: (value: A) => A3
  }
): Effect.Effect<A2 | A3, never, R> =>
  core.matchEffect(self, {
    onFailure: (e) => core.succeed(options.onFailure(e)),
    onSuccess: (a) => core.succeed(options.onSuccess(a))
  }))

/* @internal */
export const every: {
  <A, E, R>(
    predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect.Effect<boolean, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<boolean, E, R>
} = dual(
  2,
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: A, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<boolean, E, R> => core.suspend(() => forAllLoop(elements[Symbol.iterator](), 0, predicate))
)

const forAllLoop = <A, E, R>(
  iterator: Iterator<A>,
  index: number,
  f: (a: A, i: number) => Effect.Effect<boolean, E, R>
): Effect.Effect<boolean, E, R> => {
  const next = iterator.next()
  return next.done
    ? core.succeed(true)
    : core.flatMap(
      f(next.value, index),
      (b) => b ? forAllLoop(iterator, index + 1, f) : core.succeed(b)
    )
}

/* @internal */
export const forever = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<never, E, R> => {
  const loop: Effect.Effect<never, E, R> = core.flatMap(core.flatMap(self, () => core.yieldNow()), () => loop)
  return loop
}

/* @internal */
export const fiberRefs: Effect.Effect<FiberRefs.FiberRefs> = core.withFiberRuntime((state) =>
  core.succeed(state.getFiberRefs())
)

/* @internal */
export const head = <A, E, R>(
  self: Effect.Effect<Iterable<A>, E, R>
): Effect.Effect<A, E | Cause.NoSuchElementException, R> =>
  core.flatMap(self, (as) => {
    const iterator = as[Symbol.iterator]()
    const next = iterator.next()
    if (next.done) {
      return core.fail(new core.NoSuchElementException())
    }
    return core.succeed(next.value)
  })

/* @internal */
export const ignore = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<void, never, R> =>
  match(self, { onFailure: constVoid, onSuccess: constVoid })

/* @internal */
export const ignoreLogged = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<void, never, R> =>
  core.matchCauseEffect(self, {
    onFailure: (cause) => logDebug(cause, "An error was silently ignored because it is not anticipated to be useful"),
    onSuccess: () => core.void
  })

/* @internal */
export const inheritFiberRefs = (childFiberRefs: FiberRefs.FiberRefs) =>
  updateFiberRefs((parentFiberId, parentFiberRefs) => FiberRefs.joinAs(parentFiberRefs, parentFiberId, childFiberRefs))

/* @internal */
export const isFailure = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<boolean, never, R> =>
  match(self, { onFailure: constTrue, onSuccess: constFalse })

/* @internal */
export const isSuccess = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<boolean, never, R> =>
  match(self, { onFailure: constFalse, onSuccess: constTrue })

/* @internal */
export const iterate: {
  <A, B extends A, R, E>(
    initial: A,
    options: {
      readonly while: Predicate.Refinement<A, B>
      readonly body: (b: B) => Effect.Effect<A, E, R>
    }
  ): Effect.Effect<A, E, R>
  <A, R, E>(
    initial: A,
    options: {
      readonly while: Predicate.Predicate<A>
      readonly body: (a: A) => Effect.Effect<A, E, R>
    }
  ): Effect.Effect<A, E, R>
} = <A, E, R>(
  initial: A,
  options: {
    readonly while: Predicate.Predicate<A>
    readonly body: (z: A) => Effect.Effect<A, E, R>
  }
): Effect.Effect<A, E, R> =>
  core.suspend<A, E, R>(() => {
    if (options.while(initial)) {
      return core.flatMap(options.body(initial), (z2) => iterate(z2, options))
    }
    return core.succeed(initial)
  })

/** @internal */
export const logWithLevel = (level?: LogLevel.LogLevel) =>
(
  ...message: ReadonlyArray<any>
): Effect.Effect<void> => {
  const levelOption = Option.fromNullable(level)
  let cause: Cause.Cause<unknown> | undefined = undefined
  for (let i = 0, len = message.length; i < len; i++) {
    const msg = message[i]
    if (internalCause.isCause(msg)) {
      if (cause !== undefined) {
        cause = internalCause.sequential(cause, msg)
      } else {
        cause = msg
      }
      message = [...message.slice(0, i), ...message.slice(i + 1)]
      i--
    }
  }
  if (cause === undefined) {
    cause = internalCause.empty
  }
  return core.withFiberRuntime((fiberState) => {
    fiberState.log(message, cause, levelOption)
    return core.void
  })
}

/** @internal */
export const log: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never> = logWithLevel()

/** @internal */
export const logTrace: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never> = logWithLevel(
  LogLevel.Trace
)

/** @internal */
export const logDebug: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never> = logWithLevel(
  LogLevel.Debug
)

/** @internal */
export const logInfo: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never> = logWithLevel(
  LogLevel.Info
)

/** @internal */
export const logWarning: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never> = logWithLevel(
  LogLevel.Warning
)

/** @internal */
export const logError: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never> = logWithLevel(
  LogLevel.Error
)

/** @internal */
export const logFatal: (...message: ReadonlyArray<any>) => Effect.Effect<void, never, never> = logWithLevel(
  LogLevel.Fatal
)

/* @internal */
export const withLogSpan = dual<
  (label: string) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(effect: Effect.Effect<A, E, R>, label: string) => Effect.Effect<A, E, R>
>(2, (effect, label) =>
  core.flatMap(Clock.currentTimeMillis, (now) =>
    core.fiberRefLocallyWith(
      effect,
      core.currentLogSpan,
      List.prepend(LogSpan.make(label, now))
    )))

/* @internal */
export const logAnnotations: Effect.Effect<HashMap.HashMap<string, unknown>> = core
  .fiberRefGet(
    core.currentLogAnnotations
  )

/* @internal */
export const loop: {
  <A, B extends A, C, E, R>(
    initial: A,
    options: {
      readonly while: Predicate.Refinement<A, B>
      readonly step: (b: B) => A
      readonly body: (b: B) => Effect.Effect<C, E, R>
      readonly discard?: false | undefined
    }
  ): Effect.Effect<Array<C>, E, R>
  <A, C, E, R>(
    initial: A,
    options: {
      readonly while: (a: A) => boolean
      readonly step: (a: A) => A
      readonly body: (a: A) => Effect.Effect<C, E, R>
      readonly discard?: false | undefined
    }
  ): Effect.Effect<Array<C>, E, R>
  <A, B extends A, C, E, R>(
    initial: A,
    options: {
      readonly while: Predicate.Refinement<A, B>
      readonly step: (b: B) => A
      readonly body: (b: B) => Effect.Effect<R, E, C>
      readonly discard: true
    }
  ): Effect.Effect<void, E, R>
  <A, C, E, R>(
    initial: A,
    options: {
      readonly while: (a: A) => boolean
      readonly step: (a: A) => A
      readonly body: (a: A) => Effect.Effect<C, E, R>
      readonly discard: true
    }
  ): Effect.Effect<void, E, R>
} = <A, C, E, R>(
  initial: A,
  options: {
    readonly while: Predicate.Predicate<A>
    readonly step: (a: A) => A
    readonly body: (a: A) => Effect.Effect<C, E, R>
    readonly discard?: boolean | undefined
  }
): any =>
  options.discard
    ? loopDiscard(initial, options.while, options.step, options.body)
    : core.map(loopInternal(initial, options.while, options.step, options.body), Arr.fromIterable)

const loopInternal = <Z, A, E, R>(
  initial: Z,
  cont: Predicate.Predicate<Z>,
  inc: (z: Z) => Z,
  body: (z: Z) => Effect.Effect<A, E, R>
): Effect.Effect<List.List<A>, E, R> =>
  core.suspend(() =>
    cont(initial)
      ? core.flatMap(body(initial), (a) =>
        core.map(
          loopInternal(inc(initial), cont, inc, body),
          List.prepend(a)
        ))
      : core.sync(() => List.empty())
  )

const loopDiscard = <S, X, E, R>(
  initial: S,
  cont: Predicate.Predicate<S>,
  inc: (s: S) => S,
  body: (s: S) => Effect.Effect<X, E, R>
): Effect.Effect<void, E, R> =>
  core.suspend(() =>
    cont(initial)
      ? core.flatMap(
        body(initial),
        () => loopDiscard(inc(initial), cont, inc, body)
      )
      : core.void
  )

/* @internal */
export const mapAccum: {
  <S, A, B, E, R, I extends Iterable<A> = Iterable<A>>(
    initial: S,
    f: (state: S, a: A, i: number) => Effect.Effect<readonly [S, B], E, R>
  ): (elements: I) => Effect.Effect<[S, Arr.ReadonlyArray.With<I, B>], E, R>
  <A, S, B, E, R, I extends Iterable<A> = Iterable<A>>(
    elements: I,
    initial: S,
    f: (state: S, a: A, i: number) => Effect.Effect<readonly [S, B], E, R>
  ): Effect.Effect<[S, Arr.ReadonlyArray.With<I, B>], E, R>
} = dual(3, <A, S, B, E, R, I extends Iterable<A> = Iterable<A>>(
  elements: I,
  initial: S,
  f: (state: S, a: A, i: number) => Effect.Effect<readonly [S, B], E, R>
): Effect.Effect<[S, Array<B>], E, R> =>
  core.suspend(() => {
    const iterator = elements[Symbol.iterator]()
    const builder: Array<B> = []
    let result: Effect.Effect<S, E, R> = core.succeed(initial)
    let next: IteratorResult<A, any>
    let i = 0
    while (!(next = iterator.next()).done) {
      const index = i++
      const value = next.value
      result = core.flatMap(result, (state) =>
        core.map(f(state, value, index), ([z, b]) => {
          builder.push(b)
          return z
        }))
    }
    return core.map(result, (z) => [z, builder])
  }))

/* @internal */
export const mapErrorCause: {
  <E, E2>(
    f: (cause: Cause.Cause<E>) => Cause.Cause<E2>
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E2, R>
  <A, E, R, E2>(self: Effect.Effect<A, E, R>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): Effect.Effect<A, E2, R>
} = dual(
  2,
  <A, E, R, E2>(self: Effect.Effect<A, E, R>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): Effect.Effect<A, E2, R> =>
    core.matchCauseEffect(self, {
      onFailure: (c) => core.failCauseSync(() => f(c)),
      onSuccess: core.succeed
    })
)

/* @internal */
export const memoize = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<Effect.Effect<A, E, R>> =>
  pipe(
    core.deferredMake<[[FiberRefsPatch.FiberRefsPatch, runtimeFlagsPatch.RuntimeFlagsPatch], A], E>(),
    core.flatMap((deferred) =>
      pipe(
        diffFiberRefsAndRuntimeFlags(self),
        core.intoDeferred(deferred),
        once,
        core.map((complete) =>
          core.zipRight(
            complete,
            pipe(
              core.deferredAwait(deferred),
              core.flatMap(([patch, a]) =>
                core.as(core.zip(patchFiberRefs(patch[0]), core.updateRuntimeFlags(patch[1])), a)
              )
            )
          )
        )
      )
    )
  )

/* @internal */
export const merge = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<E | A, never, R> =>
  core.matchEffect(self, {
    onFailure: (e) => core.succeed(e),
    onSuccess: core.succeed
  })

/* @internal */
export const negate = <E, R>(self: Effect.Effect<boolean, E, R>): Effect.Effect<boolean, E, R> =>
  core.map(self, (b) => !b)

/* @internal */
export const none = <A, E, R>(
  self: Effect.Effect<Option.Option<A>, E, R>
): Effect.Effect<void, E | Cause.NoSuchElementException, R> =>
  core.flatMap(self, (option) => {
    switch (option._tag) {
      case "None":
        return core.void
      case "Some":
        return core.fail(new core.NoSuchElementException())
    }
  })

/* @internal */
export const once = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<Effect.Effect<void, E, R>> =>
  core.map(
    Ref.make(true),
    (ref) => core.asVoid(core.whenEffect(self, Ref.getAndSet(ref, false)))
  )

/* @internal */
export const option = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<Option.Option<A>, never, R> =>
  core.matchEffect(self, {
    onFailure: () => core.succeed(Option.none()),
    onSuccess: (a) => core.succeed(Option.some(a))
  })

/* @internal */
export const orElseFail = dual<
  <E2>(evaluate: LazyArg<E2>) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E2, R>,
  <A, E, R, E2>(self: Effect.Effect<A, E, R>, evaluate: LazyArg<E2>) => Effect.Effect<A, E2, R>
>(2, (self, evaluate) => core.orElse(self, () => core.failSync(evaluate)))

/* @internal */
export const orElseSucceed = dual<
  <A2>(evaluate: LazyArg<A2>) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A | A2, never, R>,
  <A, E, R, A2>(self: Effect.Effect<A, E, R>, evaluate: LazyArg<A2>) => Effect.Effect<A | A2, never, R>
>(2, (self, evaluate) => core.orElse(self, () => core.sync(evaluate)))

/* @internal */
export const parallelErrors = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, Array<E>, R> =>
  core.matchCauseEffect(self, {
    onFailure: (cause) => {
      const errors = Arr.fromIterable(internalCause.failures(cause))
      return errors.length === 0
        ? core.failCause(cause as Cause.Cause<never>)
        : core.fail(errors)
    },
    onSuccess: core.succeed
  })

/* @internal */
export const patchFiberRefs = (patch: FiberRefsPatch.FiberRefsPatch): Effect.Effect<void> =>
  updateFiberRefs((fiberId, fiberRefs) => pipe(patch, fiberRefsPatch.patch(fiberId, fiberRefs)))

/* @internal */
export const promise = <A>(evaluate: (signal: AbortSignal) => PromiseLike<A>): Effect.Effect<A> =>
  evaluate.length >= 1
    ? core.async((resolve, signal) => {
      try {
        evaluate(signal)
          .then((a) => resolve(core.succeed(a)), (e) => resolve(core.die(e)))
      } catch (e) {
        resolve(core.die(e))
      }
    })
    : core.async((resolve) => {
      try {
        ;(evaluate as LazyArg<PromiseLike<A>>)()
          .then((a) => resolve(core.succeed(a)), (e) => resolve(core.die(e)))
      } catch (e) {
        resolve(core.die(e))
      }
    })

/* @internal */
export const provideService = dual<
  <I, S>(
    tag: Context.Tag<I, S>,
    service: Types.NoInfer<S>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, I>>,
  <A, E, R, I, S>(
    self: Effect.Effect<A, E, R>,
    tag: Context.Tag<I, S>,
    service: Types.NoInfer<S>
  ) => Effect.Effect<A, E, Exclude<R, I>>
>(
  3,
  <A, E, R, I, S>(
    self: Effect.Effect<A, E, R>,
    tag: Context.Tag<I, S>,
    service: Types.NoInfer<S>
  ): Effect.Effect<A, E, Exclude<R, I>> =>
    core.contextWithEffect((env) =>
      core.provideContext(
        self as Effect.Effect<A, E, I | Exclude<R, I>>,
        Context.add(env, tag, service)
      )
    )
)

/* @internal */
export const provideServiceEffect = dual<
  <I, S, E1, R1>(
    tag: Context.Tag<I, S>,
    effect: Effect.Effect<Types.NoInfer<S>, E1, R1>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E1, R1 | Exclude<R, I>>,
  <A, E, R, I, S, E1, R1>(
    self: Effect.Effect<A, E, R>,
    tag: Context.Tag<I, S>,
    effect: Effect.Effect<Types.NoInfer<S>, E1, R1>
  ) => Effect.Effect<A, E | E1, R1 | Exclude<R, I>>
>(3, <A, E, R, I, S, E1, R1>(
  self: Effect.Effect<A, E, R>,
  tag: Context.Tag<I, S>,
  effect: Effect.Effect<Types.NoInfer<S>, E1, R1>
) =>
  core.contextWithEffect((env: Context.Context<R1 | Exclude<R, I>>) =>
    core.flatMap(
      effect,
      (service) => core.provideContext(self, pipe(env, Context.add(tag, service)) as Context.Context<R | R1>)
    )
  ))

/* @internal */
export const random: Effect.Effect<Random.Random> = defaultServices.randomWith(core.succeed)

/* @internal */
export const reduce = dual<
  <Z, A, E, R>(
    zero: Z,
    f: (z: Z, a: A, i: number) => Effect.Effect<Z, E, R>
  ) => (elements: Iterable<A>) => Effect.Effect<Z, E, R>,
  <A, Z, E, R>(
    elements: Iterable<A>,
    zero: Z,
    f: (z: Z, a: A, i: number) => Effect.Effect<Z, E, R>
  ) => Effect.Effect<Z, E, R>
>(
  3,
  <A, Z, E, R>(
    elements: Iterable<A>,
    zero: Z,
    f: (z: Z, a: A, i: number) => Effect.Effect<Z, E, R>
  ) =>
    Arr.fromIterable(elements).reduce(
      (acc, el, i) => core.flatMap(acc, (a) => f(a, el, i)),
      core.succeed(zero) as Effect.Effect<Z, E, R>
    )
)

/* @internal */
export const reduceRight = dual<
  <A, Z, R, E>(
    zero: Z,
    f: (a: A, z: Z, i: number) => Effect.Effect<Z, E, R>
  ) => (elements: Iterable<A>) => Effect.Effect<Z, E, R>,
  <A, Z, R, E>(
    elements: Iterable<A>,
    zero: Z,
    f: (a: A, z: Z, i: number) => Effect.Effect<Z, E, R>
  ) => Effect.Effect<Z, E, R>
>(
  3,
  <A, Z, R, E>(elements: Iterable<A>, zero: Z, f: (a: A, z: Z, i: number) => Effect.Effect<Z, E, R>) =>
    Arr.fromIterable(elements).reduceRight(
      (acc, el, i) => core.flatMap(acc, (a) => f(el, a, i)),
      core.succeed(zero) as Effect.Effect<Z, E, R>
    )
)

/* @internal */
export const reduceWhile = dual<
  <Z, A, E, R>(
    zero: Z,
    options: {
      readonly while: Predicate.Predicate<Z>
      readonly body: (s: Z, a: A, i: number) => Effect.Effect<Z, E, R>
    }
  ) => (elements: Iterable<A>) => Effect.Effect<Z, E, R>,
  <A, Z, E, R>(
    elements: Iterable<A>,
    zero: Z,
    options: {
      readonly while: Predicate.Predicate<Z>
      readonly body: (s: Z, a: A, i: number) => Effect.Effect<Z, E, R>
    }
  ) => Effect.Effect<Z, E, R>
>(3, <A, Z, E, R>(
  elements: Iterable<A>,
  zero: Z,
  options: {
    readonly while: Predicate.Predicate<Z>
    readonly body: (s: Z, a: A, i: number) => Effect.Effect<Z, E, R>
  }
) =>
  core.flatMap(
    core.sync(() => elements[Symbol.iterator]()),
    (iterator) => reduceWhileLoop(iterator, 0, zero, options.while, options.body)
  ))

const reduceWhileLoop = <A, R, E, Z>(
  iterator: Iterator<A>,
  index: number,
  state: Z,
  predicate: Predicate.Predicate<Z>,
  f: (s: Z, a: A, i: number) => Effect.Effect<Z, E, R>
): Effect.Effect<Z, E, R> => {
  const next = iterator.next()
  if (!next.done && predicate(state)) {
    return core.flatMap(
      f(state, next.value, index),
      (nextState) => reduceWhileLoop(iterator, index + 1, nextState, predicate, f)
    )
  }
  return core.succeed(state)
}

/* @internal */
export const repeatN = dual<
  (n: number) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, n: number) => Effect.Effect<A, E, R>
>(2, (self, n) => core.suspend(() => repeatNLoop(self, n)))

/* @internal */
const repeatNLoop = <A, E, R>(self: Effect.Effect<A, E, R>, n: number): Effect.Effect<A, E, R> =>
  core.flatMap(self, (a) =>
    n <= 0
      ? core.succeed(a)
      : core.zipRight(core.yieldNow(), repeatNLoop(self, n - 1)))

/* @internal */
export const sandbox = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, Cause.Cause<E>, R> =>
  core.matchCauseEffect(self, {
    onFailure: core.fail,
    onSuccess: core.succeed
  })

/* @internal */
export const setFiberRefs = (fiberRefs: FiberRefs.FiberRefs): Effect.Effect<void> =>
  core.suspend(() => FiberRefs.setAll(fiberRefs))

/* @internal */
export const sleep: (duration: Duration.DurationInput) => Effect.Effect<void> = Clock.sleep

/* @internal */
export const succeedNone: Effect.Effect<Option.Option<never>> = core.succeed(Option.none())

/* @internal */
export const succeedSome = <A>(value: A): Effect.Effect<Option.Option<A>> => core.succeed(Option.some(value))

/* @internal */
export const summarized: {
  <B, E2, R2, C>(
    summary: Effect.Effect<B, E2, R2>,
    f: (start: B, end: B) => C
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<[C, A], E2 | E, R2 | R>
  <A, E, R, B, E2, R2, C>(
    self: Effect.Effect<A, E, R>,
    summary: Effect.Effect<B, E2, R2>,
    f: (start: B, end: B) => C
  ): Effect.Effect<[C, A], E2 | E, R2 | R>
} = dual(
  3,
  <A, E, R, B, E2, R2, C>(
    self: Effect.Effect<A, E, R>,
    summary: Effect.Effect<B, E2, R2>,
    f: (start: B, end: B) => C
  ): Effect.Effect<[C, A], E2 | E, R2 | R> =>
    core.flatMap(
      summary,
      (start) => core.flatMap(self, (value) => core.map(summary, (end) => [f(start, end), value]))
    )
)

/* @internal */
export const tagMetrics = dual<
  {
    (key: string, value: string): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
    (
      values: Record<string, string>
    ): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  },
  {
    <A, E, R>(effect: Effect.Effect<A, E, R>, key: string, value: string): Effect.Effect<A, E, R>
    <A, E, R>(effect: Effect.Effect<A, E, R>, values: Record<string, string>): Effect.Effect<A, E, R>
  }
>((args) => core.isEffect(args[0]), function() {
  return labelMetrics(
    arguments[0],
    typeof arguments[1] === "string"
      ? [metricLabel.make(arguments[1], arguments[2])]
      : Object.entries<string>(arguments[1]).map(([k, v]) => metricLabel.make(k, v))
  )
})

/* @internal */
export const labelMetrics = dual<
  (labels: Iterable<MetricLabel.MetricLabel>) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, labels: Iterable<MetricLabel.MetricLabel>) => Effect.Effect<A, E, R>
>(
  2,
  (self, labels) => core.fiberRefLocallyWith(self, core.currentMetricLabels, (old) => Arr.union(old, labels))
)

/* @internal */
export const takeUntil: {
  <A, R, E>(
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): (elements: Iterable<A>) => Effect.Effect<Array<A>, E, R>
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Array<A>, E, R>
} = dual(
  2,
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ): Effect.Effect<Array<A>, E, R> =>
    core.suspend(() => {
      const iterator = elements[Symbol.iterator]()
      const builder: Array<A> = []
      let next: IteratorResult<A, any>
      let effect: Effect.Effect<boolean, E, R> = core.succeed(false)
      let i = 0
      while ((next = iterator.next()) && !next.done) {
        const a = next.value
        const index = i++
        effect = core.flatMap(effect, (bool) => {
          if (bool) {
            return core.succeed(true)
          }
          builder.push(a)
          return predicate(a, index)
        })
      }
      return core.map(effect, () => builder)
    })
)

/* @internal */
export const takeWhile = dual<
  <A, E, R>(
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ) => (elements: Iterable<A>) => Effect.Effect<Array<A>, E, R>,
  <A, E, R>(
    elements: Iterable<A>,
    predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>
  ) => Effect.Effect<Array<A>, E, R>
>(
  2,
  <A, E, R>(elements: Iterable<A>, predicate: (a: Types.NoInfer<A>, i: number) => Effect.Effect<boolean, E, R>) =>
    core.suspend(() => {
      const iterator = elements[Symbol.iterator]()
      const builder: Array<A> = []
      let next: IteratorResult<A, any>
      let taking: Effect.Effect<boolean, E, R> = core.succeed(true)
      let i = 0
      while ((next = iterator.next()) && !next.done) {
        const a = next.value
        const index = i++
        taking = core.flatMap(taking, (taking) =>
          pipe(
            taking ? predicate(a, index) : core.succeed(false),
            core.map((bool) => {
              if (bool) {
                builder.push(a)
              }
              return bool
            })
          ))
      }
      return core.map(taking, () => builder)
    })
)

/* @internal */
export const tapBoth = dual<
  <E, X, E2, R2, A, X1, E3, R3>(
    options: {
      readonly onFailure: (e: Types.NoInfer<E>) => Effect.Effect<X, E2, R2>
      readonly onSuccess: (a: Types.NoInfer<A>) => Effect.Effect<X1, E3, R3>
    }
  ) => <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E2 | E3, R | R2 | R3>,
  <A, E, R, X, E2, R2, X1, E3, R3>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onFailure: (e: E) => Effect.Effect<X, E2, R2>
      readonly onSuccess: (a: A) => Effect.Effect<X1, E3, R3>
    }
  ) => Effect.Effect<A, E | E2 | E3, R | R2 | R3>
>(2, (self, { onFailure, onSuccess }) =>
  core.matchCauseEffect(self, {
    onFailure: (cause) => {
      const either = internalCause.failureOrCause(cause)
      switch (either._tag) {
        case "Left": {
          return core.zipRight(onFailure(either.left as any), core.failCause(cause))
        }
        case "Right": {
          return core.failCause(cause)
        }
      }
    },
    onSuccess: (a) => core.as(onSuccess(a as any), a)
  }))

/* @internal */
export const tapDefect = dual<
  <X, E2, R2>(
    f: (cause: Cause.Cause<never>) => Effect.Effect<X, E2, R2>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E2, R | R2>,
  <A, E, R, X, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (cause: Cause.Cause<never>) => Effect.Effect<X, E2, R2>
  ) => Effect.Effect<A, E | E2, R | R2>
>(2, (self, f) =>
  core.catchAllCause(self, (cause) =>
    Option.match(internalCause.keepDefects(cause), {
      onNone: () => core.failCause(cause),
      onSome: (a) => core.zipRight(f(a), core.failCause(cause))
    })))

/* @internal */
export const tapError = dual<
  <E, X, E2, R2>(
    f: (e: Types.NoInfer<E>) => Effect.Effect<X, E2, R2>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E2, R | R2>,
  <A, E, R, X, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (e: E) => Effect.Effect<X, E2, R2>
  ) => Effect.Effect<A, E | E2, R | R2>
>(2, (self, f) =>
  core.matchCauseEffect(self, {
    onFailure: (cause) => {
      const either = internalCause.failureOrCause(cause)
      switch (either._tag) {
        case "Left":
          return core.zipRight(f(either.left as any), core.failCause(cause))
        case "Right":
          return core.failCause(cause)
      }
    },
    onSuccess: core.succeed
  }))

/* @internal */
export const tapErrorTag = dual<
  <K extends (E extends { _tag: string } ? E["_tag"] : never), E, A1, E1, R1>(
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Effect.Effect<A1, E1, R1>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E1, R | R1>,
  <A, E, R, K extends (E extends { _tag: string } ? E["_tag"] : never), A1, E1, R1>(
    self: Effect.Effect<A, E, R>,
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Effect.Effect<A1, E1, R1>
  ) => Effect.Effect<A, E | E1, R | R1>
>(3, (self, k, f) =>
  tapError(self, (e) => {
    if (Predicate.isTagged(e, k)) {
      return f(e as any)
    }
    return core.void as any
  }))

/* @internal */
export const tapErrorCause = dual<
  <E, X, E2, R2>(
    f: (cause: Cause.Cause<Types.NoInfer<E>>) => Effect.Effect<X, E2, R2>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E2, R | R2>,
  <A, E, R, X, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (cause: Cause.Cause<E>) => Effect.Effect<X, E2, R2>
  ) => Effect.Effect<A, E | E2, R | R2>
>(2, (self, f) =>
  core.matchCauseEffect(self, {
    onFailure: (cause) => core.zipRight(f(cause), core.failCause(cause)),
    onSuccess: core.succeed
  }))

/* @internal */
export const timed = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<[duration: Duration.Duration, result: A], E, R> => timedWith(self, Clock.currentTimeNanos)

/* @internal */
export const timedWith = dual<
  <E1, R1>(
    nanoseconds: Effect.Effect<bigint, E1, R1>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<[Duration.Duration, A], E | E1, R | R1>,
  <A, E, R, E1, R1>(
    self: Effect.Effect<A, E, R>,
    nanoseconds: Effect.Effect<bigint, E1, R1>
  ) => Effect.Effect<[Duration.Duration, A], E | E1, R | R1>
>(
  2,
  (self, nanos) => summarized(self, nanos, (start, end) => Duration.nanos(end - start))
)

/* @internal */
export const tracerWith: <A, E, R>(f: (tracer: Tracer.Tracer) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R> =
  Tracer.tracerWith

/** @internal */
export const tracer: Effect.Effect<Tracer.Tracer> = tracerWith(core.succeed)

/* @internal */
export const tryPromise: {
  <A, E>(
    options: {
      readonly try: (signal: AbortSignal) => PromiseLike<A>
      readonly catch: (error: unknown) => E
    }
  ): Effect.Effect<A, E>
  <A>(evaluate: (signal: AbortSignal) => PromiseLike<A>): Effect.Effect<A, Cause.UnknownException>
} = <A, E>(
  arg: ((signal: AbortSignal) => PromiseLike<A>) | {
    readonly try: (signal: AbortSignal) => PromiseLike<A>
    readonly catch: (error: unknown) => E
  }
): Effect.Effect<A, E | Cause.UnknownException> => {
  let evaluate: (signal?: AbortSignal) => PromiseLike<A>
  let catcher: ((error: unknown) => E) | undefined = undefined
  if (typeof arg === "function") {
    evaluate = arg as (signal?: AbortSignal) => PromiseLike<A>
  } else {
    evaluate = arg.try as (signal?: AbortSignal) => PromiseLike<A>
    catcher = arg.catch
  }
  const fail = (e: unknown) =>
    catcher
      ? core.failSync(() => catcher(e))
      : core.fail(new core.UnknownException(e, "An unknown error occurred in Effect.tryPromise"))

  if (evaluate.length >= 1) {
    return core.async((resolve, signal) => {
      try {
        evaluate(signal).then(
          (a) => resolve(core.succeed(a)),
          (e) => resolve(fail(e))
        )
      } catch (e) {
        resolve(fail(e))
      }
    })
  }

  return core.async((resolve) => {
    try {
      evaluate()
        .then(
          (a) => resolve(core.succeed(a)),
          (e) => resolve(fail(e))
        )
    } catch (e) {
      resolve(fail(e))
    }
  })
}

/* @internal */
export const tryMap = dual<
  <A, B, E1>(
    options: {
      readonly try: (a: A) => B
      readonly catch: (error: unknown) => E1
    }
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E | E1, R>,
  <A, E, R, B, E1>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly try: (a: A) => B
      readonly catch: (error: unknown) => E1
    }
  ) => Effect.Effect<B, E | E1, R>
>(2, (self, options) =>
  core.flatMap(self, (a) =>
    try_({
      try: () => options.try(a),
      catch: options.catch
    })))

/* @internal */
export const tryMapPromise = dual<
  <A, B, E1>(
    options: {
      readonly try: (a: A, signal: AbortSignal) => PromiseLike<B>
      readonly catch: (error: unknown) => E1
    }
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E | E1, R>,
  <A, E, R, B, E1>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly try: (a: A, signal: AbortSignal) => PromiseLike<B>
      readonly catch: (error: unknown) => E1
    }
  ) => Effect.Effect<B, E | E1, R>
>(2, <A, E, R, B, E1>(
  self: Effect.Effect<A, E, R>,
  options: {
    readonly try: (a: A, signal: AbortSignal) => PromiseLike<B>
    readonly catch: (error: unknown) => E1
  }
) =>
  core.flatMap(self, (a) =>
    tryPromise({
      try: options.try.length >= 1
        ? (signal) => options.try(a, signal)
        : () => (options.try as (a: A) => PromiseLike<B>)(a),
      catch: options.catch
    })))

/* @internal */
export const unless = dual<
  (condition: LazyArg<boolean>) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, condition: LazyArg<boolean>) => Effect.Effect<Option.Option<A>, E, R>
>(2, (self, condition) =>
  core.suspend(() =>
    condition()
      ? succeedNone
      : asSome(self)
  ))

/* @internal */
export const unlessEffect = dual<
  <E2, R2>(
    condition: Effect.Effect<boolean, E2, R2>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E | E2, R | R2>,
  <A, E, R, E2, R2>(
    self: Effect.Effect<A, E, R>,
    condition: Effect.Effect<boolean, E2, R2>
  ) => Effect.Effect<Option.Option<A>, E | E2, R | R2>
>(2, (self, condition) => core.flatMap(condition, (b) => (b ? succeedNone : asSome(self))))

/* @internal */
export const unsandbox = <A, E, R>(self: Effect.Effect<A, Cause.Cause<E>, R>) =>
  mapErrorCause(self, internalCause.flatten)

/* @internal */
export const updateFiberRefs = (
  f: (fiberId: FiberId.Runtime, fiberRefs: FiberRefs.FiberRefs) => FiberRefs.FiberRefs
): Effect.Effect<void> =>
  core.withFiberRuntime((state) => {
    state.setFiberRefs(f(state.id(), state.getFiberRefs()))
    return core.void
  })

/* @internal */
export const updateService = dual<
  <I, S>(
    tag: Context.Tag<I, S>,
    f: (service: Types.NoInfer<S>) => Types.NoInfer<S>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R | I>,
  <A, E, R, I, S>(
    self: Effect.Effect<A, E, R>,
    tag: Context.Tag<I, S>,
    f: (service: Types.NoInfer<S>) => Types.NoInfer<S>
  ) => Effect.Effect<A, E, R | I>
>(3, <A, E, R, I, S>(
  self: Effect.Effect<A, E, R>,
  tag: Context.Tag<I, S>,
  f: (service: Types.NoInfer<S>) => Types.NoInfer<S>
) =>
  core.mapInputContext(self, (context) =>
    Context.add(
      context,
      tag,
      f(Context.unsafeGet(context, tag))
    )) as Effect.Effect<A, E, R | I>)

/* @internal */
export const when = dual<
  (condition: LazyArg<boolean>) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Option.Option<A>, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, condition: LazyArg<boolean>) => Effect.Effect<Option.Option<A>, E, R>
>(2, (self, condition) =>
  core.suspend(() =>
    condition()
      ? core.map(self, Option.some)
      : core.succeed(Option.none())
  ))

/* @internal */
export const whenFiberRef = dual<
  <S>(
    fiberRef: FiberRef.FiberRef<S>,
    predicate: Predicate.Predicate<S>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<[S, Option.Option<A>], E, R>,
  <A, E, R, S>(
    self: Effect.Effect<A, E, R>,
    fiberRef: FiberRef.FiberRef<S>,
    predicate: Predicate.Predicate<S>
  ) => Effect.Effect<[S, Option.Option<A>], E, R>
>(
  3,
  <A, E, R, S>(
    self: Effect.Effect<A, E, R>,
    fiberRef: FiberRef.FiberRef<S>,
    predicate: Predicate.Predicate<S>
  ) =>
    core.flatMap(core.fiberRefGet(fiberRef), (s) =>
      predicate(s)
        ? core.map(self, (a) => [s, Option.some(a)])
        : core.succeed<[S, Option.Option<A>]>([s, Option.none()]))
)

/* @internal */
export const whenRef = dual<
  <S>(
    ref: Ref.Ref<S>,
    predicate: Predicate.Predicate<S>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<[S, Option.Option<A>], E, R>,
  <A, E, R, S>(
    self: Effect.Effect<A, E, R>,
    ref: Ref.Ref<S>,
    predicate: Predicate.Predicate<S>
  ) => Effect.Effect<[S, Option.Option<A>], E, R>
>(
  3,
  <A, E, R, S>(self: Effect.Effect<A, E, R>, ref: Ref.Ref<S>, predicate: Predicate.Predicate<S>) =>
    core.flatMap(Ref.get(ref), (s) =>
      predicate(s)
        ? core.map(self, (a) => [s, Option.some(a)])
        : core.succeed<[S, Option.Option<A>]>([s, Option.none()]))
)

/* @internal */
export const withMetric = dual<
  <Type, In, Out>(
    metric: Metric.Metric<Type, In, Out>
  ) => <A extends In, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A extends In, E, R, Type, In, Out>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, In, Out>
  ) => Effect.Effect<A, E, R>
>(2, (self, metric) => metric(self))

/** @internal */
export const serviceFunctionEffect = <T extends Effect.Effect<any, any, any>, Args extends Array<any>, A, E, R>(
  getService: T,
  f: (_: Effect.Effect.Success<T>) => (...args: Args) => Effect.Effect<A, E, R>
) =>
(...args: Args): Effect.Effect<A, E | Effect.Effect.Error<T>, R | Effect.Effect.Context<T>> =>
  core.flatMap(getService, (a) => f(a)(...args))

/** @internal */
export const serviceFunction = <T extends Effect.Effect<any, any, any>, Args extends Array<any>, A>(
  getService: T,
  f: (_: Effect.Effect.Success<T>) => (...args: Args) => A
) =>
(...args: Args): Effect.Effect<A, Effect.Effect.Error<T>, Effect.Effect.Context<T>> =>
  core.map(getService, (a) => f(a)(...args))

/** @internal */
export const serviceFunctions = <S, SE, SR>(
  getService: Effect.Effect<S, SE, SR>
): {
  [k in keyof S as S[k] extends (...args: Array<any>) => Effect.Effect<any, any, any> ? k : never]: S[k] extends
    (...args: infer Args) => Effect.Effect<infer A, infer E, infer R>
    ? (...args: Args) => Effect.Effect<A, E | SE, R | SR>
    : never
} =>
  new Proxy({} as any, {
    get(_target: any, prop: any, _receiver) {
      return (...args: Array<any>) => core.flatMap(getService, (s: any) => s[prop](...args))
    }
  })

/** @internal */
export const serviceConstants = <S, SE, SR>(
  getService: Effect.Effect<S, SE, SR>
): {
  [k in { [k in keyof S]: k }[keyof S]]: S[k] extends Effect.Effect<infer A, infer E, infer R> ?
    Effect.Effect<A, E | SE, R | SR> :
    Effect.Effect<S[k], SE, SR>
} =>
  new Proxy({} as any, {
    get(_target: any, prop: any, _receiver) {
      return core.flatMap(getService, (s: any) => core.isEffect(s[prop]) ? s[prop] : core.succeed(s[prop]))
    }
  })

/** @internal */
export const serviceMembers = <S, SE, SR>(getService: Effect.Effect<S, SE, SR>): {
  functions: {
    [k in keyof S as S[k] extends (...args: Array<any>) => Effect.Effect<any, any, any> ? k : never]: S[k] extends
      (...args: infer Args) => Effect.Effect<infer A, infer E, infer R>
      ? (...args: Args) => Effect.Effect<A, E | SE, R | SR>
      : never
  }
  constants: {
    [k in { [k in keyof S]: k }[keyof S]]: S[k] extends Effect.Effect<infer A, infer E, infer R> ?
      Effect.Effect<A, E | SE, R | SR> :
      Effect.Effect<S[k], SE, SR>
  }
} => ({
  functions: serviceFunctions(getService) as any,
  constants: serviceConstants(getService)
})

/** @internal */
export const serviceOption = <I, S>(tag: Context.Tag<I, S>) => core.map(core.context<never>(), Context.getOption(tag))

/** @internal */
export const serviceOptional = <I, S>(tag: Context.Tag<I, S>) =>
  core.flatMap(core.context<never>(), Context.getOption(tag))

// -----------------------------------------------------------------------------
// tracing
// -----------------------------------------------------------------------------

/* @internal */
export const annotateCurrentSpan: {
  (key: string, value: unknown): Effect.Effect<void>
  (values: Record<string, unknown>): Effect.Effect<void>
} = function(): Effect.Effect<void> {
  const args = arguments
  return ignore(core.flatMap(
    currentPropagatedSpan,
    (span) =>
      core.sync(() => {
        if (typeof args[0] === "string") {
          span.attribute(args[0], args[1])
        } else {
          for (const key in args[0]) {
            span.attribute(key, args[0][key])
          }
        }
      })
  ))
}

/* @internal */
export const linkSpanCurrent: {
  (span: Tracer.AnySpan, attributes?: Readonly<Record<string, unknown>> | undefined): Effect.Effect<void>
  (links: ReadonlyArray<Tracer.SpanLink>): Effect.Effect<void>
} = function(): Effect.Effect<void> {
  const args = arguments
  const links: ReadonlyArray<Tracer.SpanLink> = Array.isArray(args[0])
    ? args[0]
    : [{ _tag: "SpanLink", span: args[0], attributes: args[1] ?? {} }]
  return ignore(core.flatMap(
    currentSpan,
    (span) => core.sync(() => span.addLinks(links))
  ))
}

/* @internal */
export const annotateSpans = dual<
  {
    (key: string, value: unknown): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
    (
      values: Record<string, unknown>
    ): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  },
  {
    <A, E, R>(effect: Effect.Effect<A, E, R>, key: string, value: unknown): Effect.Effect<A, E, R>
    <A, E, R>(effect: Effect.Effect<A, E, R>, values: Record<string, unknown>): Effect.Effect<A, E, R>
  }
>(
  (args) => core.isEffect(args[0]),
  function<A, E, R>() {
    const args = arguments
    return core.fiberRefLocallyWith(
      args[0] as Effect.Effect<A, E, R>,
      core.currentTracerSpanAnnotations,
      typeof args[1] === "string"
        ? HashMap.set(args[1], args[2])
        : (annotations) =>
          Object.entries(args[1] as Record<string, unknown>).reduce(
            (acc, [key, value]) => HashMap.set(acc, key, value),
            annotations
          )
    )
  }
)

/** @internal */
export const currentParentSpan: Effect.Effect<Tracer.AnySpan, Cause.NoSuchElementException> = serviceOptional(
  internalTracer.spanTag
)

/** @internal */
export const currentSpan: Effect.Effect<Tracer.Span, Cause.NoSuchElementException> = core.flatMap(
  core.context<never>(),
  (context) => {
    const span = context.unsafeMap.get(internalTracer.spanTag.key) as Tracer.AnySpan | undefined
    return span !== undefined && span._tag === "Span"
      ? core.succeed(span)
      : core.fail(new core.NoSuchElementException())
  }
)

export const currentPropagatedSpan: Effect.Effect<Tracer.Span, Cause.NoSuchElementException> = core.flatMap(
  core.context<never>(),
  (context) => {
    const span = filterDisablePropagation(Context.getOption(context, internalTracer.spanTag))
    return span._tag === "Some" && span.value._tag === "Span"
      ? core.succeed(span.value)
      : core.fail(new core.NoSuchElementException())
  }
)

/* @internal */
export const linkSpans = dual<
  (
    span: Tracer.AnySpan,
    attributes?: Record<string, unknown>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    span: Tracer.AnySpan,
    attributes?: Record<string, unknown>
  ) => Effect.Effect<A, E, R>
>(
  (args) => core.isEffect(args[0]),
  (self, span, attributes) =>
    core.fiberRefLocallyWith(
      self,
      core.currentTracerSpanLinks,
      Chunk.append(
        {
          _tag: "SpanLink",
          span,
          attributes: attributes ?? {}
        } as const
      )
    )
)

const bigint0 = BigInt(0)

export const filterDisablePropagation: (self: Option.Option<Tracer.AnySpan>) => Option.Option<Tracer.AnySpan> = Option
  .flatMap(
    (span) =>
      Context.get(span.context, internalTracer.DisablePropagation)
        ? span._tag === "Span" ? filterDisablePropagation(span.parent) : Option.none()
        : Option.some(span)
  )

/** @internal */
export const unsafeMakeSpan = <XA, XE>(
  fiber: FiberRuntime<XA, XE>,
  name: string,
  options: Tracer.SpanOptions
) => {
  const disablePropagation = !fiber.getFiberRef(core.currentTracerEnabled) ||
    (options.context && Context.get(options.context, internalTracer.DisablePropagation))
  const context = fiber.getFiberRef(core.currentContext)
  const parent = options.parent
    ? Option.some(options.parent)
    : options.root
    ? Option.none()
    : filterDisablePropagation(Context.getOption(context, internalTracer.spanTag))

  let span: Tracer.Span

  if (disablePropagation) {
    span = core.noopSpan({
      name,
      parent,
      context: Context.add(options.context ?? Context.empty(), internalTracer.DisablePropagation, true)
    })
  } else {
    const services = fiber.getFiberRef(defaultServices.currentServices)

    const tracer = Context.get(services, internalTracer.tracerTag)
    const clock = Context.get(services, Clock.Clock)
    const timingEnabled = fiber.getFiberRef(core.currentTracerTimingEnabled)

    const fiberRefs = fiber.getFiberRefs()
    const annotationsFromEnv = FiberRefs.get(fiberRefs, core.currentTracerSpanAnnotations)
    const linksFromEnv = FiberRefs.get(fiberRefs, core.currentTracerSpanLinks)

    const links = linksFromEnv._tag === "Some" ?
      options.links !== undefined ?
        [
          ...Chunk.toReadonlyArray(linksFromEnv.value),
          ...(options.links ?? [])
        ] :
        Chunk.toReadonlyArray(linksFromEnv.value) :
      options.links ?? Arr.empty()

    span = tracer.span(
      name,
      parent,
      options.context ?? Context.empty(),
      links,
      timingEnabled ? clock.unsafeCurrentTimeNanos() : bigint0,
      options.kind ?? "internal",
      options
    )

    if (annotationsFromEnv._tag === "Some") {
      HashMap.forEach(annotationsFromEnv.value, (value, key) => span.attribute(key, value))
    }
    if (options.attributes !== undefined) {
      Object.entries(options.attributes).forEach(([k, v]) => span.attribute(k, v))
    }
  }

  if (typeof options.captureStackTrace === "function") {
    internalCause.spanToTrace.set(span, options.captureStackTrace)
  }

  return span
}

/** @internal */
export const makeSpan = (
  name: string,
  options?: Tracer.SpanOptions
): Effect.Effect<Tracer.Span> => {
  options = internalTracer.addSpanStackTrace(options)
  return core.withFiberRuntime((fiber) => core.succeed(unsafeMakeSpan(fiber, name, options)))
}

/* @internal */
export const spanAnnotations: Effect.Effect<HashMap.HashMap<string, unknown>> = core
  .fiberRefGet(core.currentTracerSpanAnnotations)

/* @internal */
export const spanLinks: Effect.Effect<Chunk.Chunk<Tracer.SpanLink>> = core
  .fiberRefGet(core.currentTracerSpanLinks)

/** @internal */
export const endSpan = <A, E>(span: Tracer.Span, exit: Exit<A, E>, clock: Clock.Clock, timingEnabled: boolean) =>
  core.sync(() => {
    if (span.status._tag === "Ended") {
      return
    }
    if (core.exitIsFailure(exit) && internalCause.spanToTrace.has(span)) {
      // https://opentelemetry.io/docs/specs/semconv/registry/attributes/code/#code-stacktrace
      span.attribute("code.stacktrace", internalCause.spanToTrace.get(span)!())
    }
    span.end(timingEnabled ? clock.unsafeCurrentTimeNanos() : bigint0, exit)
  })

/** @internal */
export const useSpan: {
  <A, E, R>(name: string, evaluate: (span: Tracer.Span) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R>
  <A, E, R>(
    name: string,
    options: Tracer.SpanOptions,
    evaluate: (span: Tracer.Span) => Effect.Effect<A, E, R>
  ): Effect.Effect<A, E, R>
} = <A, E, R>(
  name: string,
  ...args: [evaluate: (span: Tracer.Span) => Effect.Effect<A, E, R>] | [
    options: any,
    evaluate: (span: Tracer.Span) => Effect.Effect<A, E, R>
  ]
) => {
  const options = internalTracer.addSpanStackTrace(args.length === 1 ? undefined : args[0])
  const evaluate: (span: Tracer.Span) => Effect.Effect<A, E, R> = args[args.length - 1]

  return core.withFiberRuntime<A, E, R>((fiber) => {
    const span = unsafeMakeSpan(fiber, name, options)
    const timingEnabled = fiber.getFiberRef(core.currentTracerTimingEnabled)
    const clock = Context.get(fiber.getFiberRef(defaultServices.currentServices), clockTag)
    return core.onExit(evaluate(span), (exit) => endSpan(span, exit, clock, timingEnabled))
  })
}

/** @internal */
export const withParentSpan = dual<
  (
    span: Tracer.AnySpan
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, Tracer.ParentSpan>>,
  <A, E, R>(self: Effect.Effect<A, E, R>, span: Tracer.AnySpan) => Effect.Effect<A, E, Exclude<R, Tracer.ParentSpan>>
>(2, (self, span) => provideService(self, internalTracer.spanTag, span))

/** @internal */
export const withSpan: {
  (
    name: string,
    options?: Tracer.SpanOptions | undefined
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, Exclude<R, Tracer.ParentSpan>>
  <A, E, R>(
    self: Effect.Effect<A, E, R>,
    name: string,
    options?: Tracer.SpanOptions | undefined
  ): Effect.Effect<A, E, Exclude<R, Tracer.ParentSpan>>
} = function() {
  const dataFirst = typeof arguments[0] !== "string"
  const name = dataFirst ? arguments[1] : arguments[0]
  const options = internalTracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1])
  if (dataFirst) {
    const self = arguments[0]
    return useSpan(name, options, (span) => withParentSpan(self, span))
  }
  return (self: Effect.Effect<any, any, any>) => useSpan(name, options, (span) => withParentSpan(self, span))
} as any

export const functionWithSpan = <Args extends Array<any>, Ret extends Effect.Effect<any, any, any>>(
  options: {
    readonly body: (...args: Args) => Ret
    readonly options: Effect.FunctionWithSpanOptions | ((...args: Args) => Effect.FunctionWithSpanOptions)
    readonly captureStackTrace?: boolean | undefined
  }
): (...args: Args) => Unify<Ret> =>
  (function(this: any) {
    let captureStackTrace: LazyArg<string | undefined> | boolean = options.captureStackTrace ?? false
    if (options.captureStackTrace !== false) {
      const limit = Error.stackTraceLimit
      Error.stackTraceLimit = 2
      const error = new Error()
      Error.stackTraceLimit = limit
      let cache: false | string = false
      captureStackTrace = () => {
        if (cache !== false) {
          return cache
        }
        if (error.stack) {
          const stack = error.stack.trim().split("\n")
          cache = stack.slice(2).join("\n").trim()
          return cache
        }
      }
    }
    return core.suspend(() => {
      const opts = typeof options.options === "function"
        ? options.options.apply(null, arguments as any)
        : options.options
      return withSpan(
        core.suspend(() => internalCall(() => options.body.apply(this, arguments as any))),
        opts.name,
        {
          ...opts,
          captureStackTrace
        }
      )
    })
  }) as any

// -------------------------------------------------------------------------------------
// optionality
// -------------------------------------------------------------------------------------

/* @internal */
export const fromNullable = <A>(value: A): Effect.Effect<NonNullable<A>, Cause.NoSuchElementException> =>
  value == null ? core.fail(new core.NoSuchElementException()) : core.succeed(value as NonNullable<A>)

/* @internal */
export const optionFromOptional = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<Option.Option<A>, Exclude<E, Cause.NoSuchElementException>, R> =>
  core.catchAll(
    core.map(self, Option.some),
    (error) =>
      core.isNoSuchElementException(error) ?
        succeedNone :
        core.fail(error as Exclude<E, Cause.NoSuchElementException>)
  )
