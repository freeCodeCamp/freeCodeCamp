/**
 * @since 3.16.0
 * @experimental
 */
import type { NonEmptyReadonlyArray } from "./Array.js"
import type * as Context from "./Context.js"
import * as Effect from "./Effect.js"
import * as internal from "./internal/executionPlan.js"
import * as Layer from "./Layer.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"
import type * as Schedule from "./Schedule.js"

/**
 * @since 3.16.0
 * @category Symbols
 * @experimental
 */
export const TypeId: unique symbol = internal.TypeId

/**
 * @since 3.16.0
 * @category Symbols
 * @experimental
 */
export type TypeId = typeof TypeId

/**
 * @since 3.16.0
 * @category Guards
 * @experimental
 */
export const isExecutionPlan: (u: unknown) => u is ExecutionPlan<any> = internal.isExecutionPlan

/**
 * A `ExecutionPlan` can be used with `Effect.withExecutionPlan` or `Stream.withExecutionPlan`, allowing you to provide different resources for each step of execution until the effect succeeds or the plan is exhausted.
 *
 * ```ts
 * import type { LanguageModel } from "@effect/ai"
 * import type { Layer } from "effect"
 * import { Effect, ExecutionPlan, Schedule } from "effect"
 *
 * declare const layerBad: Layer.Layer<LanguageModel.LanguageModel>
 * declare const layerGood: Layer.Layer<LanguageModel.LanguageModel>
 *
 * const ThePlan = ExecutionPlan.make(
 *   {
 *     // First try with the bad layer 2 times with a 3 second delay between attempts
 *     provide: layerBad,
 *     attempts: 2,
 *     schedule: Schedule.spaced(3000)
 *   },
 *   // Then try with the bad layer 3 times with a 1 second delay between attempts
 *   {
 *     provide: layerBad,
 *     attempts: 3,
 *     schedule: Schedule.spaced(1000)
 *   },
 *   // Finally try with the good layer.
 *   //
 *   // If `attempts` is omitted, the plan will only attempt once, unless a schedule is provided.
 *   {
 *     provide: layerGood
 *   }
 * )
 *
 * declare const effect: Effect.Effect<
 *   void,
 *   never,
 *   LanguageModel.LanguageModel
 * >
 * const withPlan: Effect.Effect<void> = Effect.withExecutionPlan(effect, ThePlan)
 * ```
 *
 * @since 3.16.0
 * @category Models
 * @experimental
 */
export interface ExecutionPlan<
  Types extends {
    provides: any
    input: any
    error: any
    requirements: any
  }
> extends Pipeable {
  readonly [TypeId]: TypeId
  readonly steps: NonEmptyReadonlyArray<{
    readonly provide:
      | Context.Context<Types["provides"]>
      | Layer.Layer<Types["provides"], Types["error"], Types["requirements"]>
    readonly attempts?: number | undefined
    readonly while?:
      | ((input: Types["input"]) => Effect.Effect<boolean, Types["error"], Types["requirements"]>)
      | undefined
    readonly schedule?: Schedule.Schedule<any, Types["input"], Types["requirements"]> | undefined
  }>

  /**
   * Returns an equivalent `ExecutionPlan` with the requirements satisfied,
   * using the current context.
   */
  readonly withRequirements: Effect.Effect<
    ExecutionPlan<{
      provides: Types["provides"]
      input: Types["input"]
      error: Types["error"]
      requirements: never
    }>,
    never,
    Types["requirements"]
  >
}

/**
 * @since 3.16.0
 * @experimental
 */
export type TypesBase = {
  provides: any
  input: any
  error: any
  requirements: any
}

/**
 * Create an `ExecutionPlan`, which can be used with `Effect.withExecutionPlan` or `Stream.withExecutionPlan`, allowing you to provide different resources for each step of execution until the effect succeeds or the plan is exhausted.
 *
 * ```ts
 * import type { LanguageModel } from "@effect/ai"
 * import type { Layer } from "effect"
 * import { Effect, ExecutionPlan, Schedule } from "effect"
 *
 * declare const layerBad: Layer.Layer<LanguageModel.LanguageModel>
 * declare const layerGood: Layer.Layer<LanguageModel.LanguageModel>
 *
 * const ThePlan = ExecutionPlan.make(
 *   {
 *     // First try with the bad layer 2 times with a 3 second delay between attempts
 *     provide: layerBad,
 *     attempts: 2,
 *     schedule: Schedule.spaced(3000)
 *   },
 *   // Then try with the bad layer 3 times with a 1 second delay between attempts
 *   {
 *     provide: layerBad,
 *     attempts: 3,
 *     schedule: Schedule.spaced(1000)
 *   },
 *   // Finally try with the good layer.
 *   //
 *   // If `attempts` is omitted, the plan will only attempt once, unless a schedule is provided.
 *   {
 *     provide: layerGood
 *   }
 * )
 *
 * declare const effect: Effect.Effect<
 *   void,
 *   never,
 *   LanguageModel.LanguageModel
 * >
 * const withPlan: Effect.Effect<void> = Effect.withExecutionPlan(effect, ThePlan)
 * ```
 *
 * @since 3.16.0
 * @category Constructors
 * @experimental
 */
export const make = <const Steps extends NonEmptyReadonlyArray<make.Step>>(
  ...steps: Steps & { [K in keyof Steps]: make.Step }
): ExecutionPlan<{
  provides: make.StepProvides<Steps>
  input: make.StepInput<Steps>
  error:
    | (Steps[number]["provide"] extends Context.Context<infer _P> | Layer.Layer<infer _P, infer E, infer _R> ? E
      : never)
    | (Steps[number]["while"] extends (input: infer _I) => Effect.Effect<infer _A, infer _E, infer _R> ? _E : never)
  requirements:
    | (Steps[number]["provide"] extends Layer.Layer<infer _A, infer _E, infer R> ? R : never)
    | (Steps[number]["while"] extends (input: infer _I) => Effect.Effect<infer _A, infer _E, infer R> ? R : never)
    | (Steps[number]["schedule"] extends Schedule.Schedule<infer _O, infer _I, infer R> ? R : never)
}> =>
  makeProto(steps.map((options, i) => {
    if (options.attempts && options.attempts < 1) {
      throw new Error(`ExecutionPlan.make: step[${i}].attempts must be greater than 0`)
    }
    return {
      schedule: options.schedule,
      attempts: options.attempts,
      while: options.while
        ? (input: any) =>
          Effect.suspend(() => {
            const result = options.while!(input)
            return typeof result === "boolean" ? Effect.succeed(result) : result
          })
        : undefined,
      provide: options.provide
    }
  }) as any)

/**
 * @since 3.16.0
 * @experimental
 */
export declare namespace make {
  /**
   * @since 3.16.0
   * @experimental
   */
  export type Step = {
    readonly provide: Context.Context<any> | Context.Context<never> | Layer.Layer.Any
    readonly attempts?: number | undefined
    readonly while?: ((input: any) => boolean | Effect.Effect<boolean, any, any>) | undefined
    readonly schedule?: Schedule.Schedule<any, any, any> | undefined
  }

  /**
   * @since 3.16.1
   * @experimental
   */
  export type StepProvides<Steps extends ReadonlyArray<any>, Out = unknown> = Steps extends
    readonly [infer Step, ...infer Rest] ? StepProvides<
      Rest,
      & Out
      & (
        (Step extends { readonly provide: Context.Context<infer P> | Layer.Layer<infer P, infer _E, infer _R> } ? P
          : unknown)
      )
    > :
    Out

  /**
   * @since 3.16.1
   * @experimental
   */
  export type PlanProvides<Plans extends ReadonlyArray<any>, Out = unknown> = Plans extends
    readonly [infer Plan, ...infer Rest] ?
    PlanProvides<Rest, Out & (Plan extends ExecutionPlan<infer T> ? T["provides"] : unknown)> :
    Out

  /**
   * @since 3.16.0
   * @experimental
   */
  export type StepInput<Steps extends ReadonlyArray<any>, Out = unknown> = Steps extends
    readonly [infer Step, ...infer Rest] ? StepInput<
      Rest,
      & Out
      & (
        & (Step extends { readonly while: (input: infer I) => infer _ } ? I : unknown)
        & (Step extends { readonly schedule: Schedule.Schedule<infer _O, infer I, infer _R> } ? I : unknown)
      )
    > :
    Out

  /**
   * @since 3.16.0
   * @experimental
   */
  export type PlanInput<Plans extends ReadonlyArray<any>, Out = unknown> = Plans extends
    readonly [infer Plan, ...infer Rest] ?
    PlanInput<Rest, Out & (Plan extends ExecutionPlan<infer T> ? T["input"] : unknown)> :
    Out
}

const Proto: Omit<ExecutionPlan<any>, "steps"> = {
  [TypeId]: TypeId,
  get withRequirements() {
    const self = this as any as ExecutionPlan<any>
    return Effect.contextWith((context: Context.Context<any>) =>
      makeProto(self.steps.map((step) => ({
        ...step,
        provide: Layer.isLayer(step.provide) ? Layer.provide(step.provide, Layer.succeedContext(context)) : step.provide
      })) as any)
    )
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const makeProto = <Provides, In, PlanE, PlanR>(
  steps: ExecutionPlan<{
    provides: Provides
    input: In
    error: PlanE
    requirements: PlanR
  }>["steps"]
) => {
  const self = Object.create(Proto)
  self.steps = steps
  return self
}

/**
 * @since 3.16.0
 * @category Combining
 * @experimental
 */
export const merge = <const Plans extends NonEmptyReadonlyArray<ExecutionPlan<any>>>(
  ...plans: Plans
): ExecutionPlan<{
  provides: make.PlanProvides<Plans>
  input: make.PlanInput<Plans>
  error: Plans[number] extends ExecutionPlan<infer T> ? T["error"] : never
  requirements: Plans[number] extends ExecutionPlan<infer T> ? T["requirements"] : never
}> => makeProto(plans.flatMap((plan) => plan.steps) as any)
