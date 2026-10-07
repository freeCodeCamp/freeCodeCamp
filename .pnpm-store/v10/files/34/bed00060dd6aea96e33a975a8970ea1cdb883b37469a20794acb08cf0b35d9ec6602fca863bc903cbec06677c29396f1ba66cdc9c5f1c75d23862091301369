import type { Effect } from "../Effect.js"
import * as Either from "../Either.js"
import type * as Api from "../ExecutionPlan.js"
import { dual } from "../Function.js"
import * as Predicate from "../Predicate.js"
import * as core from "./core.js"
import * as layer from "./layer.js"
import * as InternalSchedule from "./schedule.js"

/** @internal */
export const TypeId: Api.TypeId = Symbol.for("effect/ExecutionPlan") as Api.TypeId

/** @internal */
export const isExecutionPlan = (u: unknown): u is Api.ExecutionPlan<any> => Predicate.hasProperty(u, TypeId)

/** @internal */
export const withExecutionPlan: {
  <Input, Provides, PlanE, PlanR>(
    plan: Api.ExecutionPlan<{
      provides: Provides
      input: Input
      error: PlanE
      requirements: PlanR
    }>
  ): <A, E extends Input, R>(effect: Effect<A, E, R>) => Effect<
    A,
    E | PlanE,
    Exclude<R, Provides> | PlanR
  >
  <A, E extends Input, R, Provides, Input, PlanE, PlanR>(
    effect: Effect<A, E, R>,
    plan: Api.ExecutionPlan<{
      provides: Provides
      input: Input
      error: PlanE
      requirements: PlanR
    }>
  ): Effect<
    A,
    E | PlanE,
    Exclude<R, Provides> | PlanR
  >
} = dual(2, <A, E extends Input, R, Provides, Input, PlanE, PlanR>(
  effect: Effect<A, E, R>,
  plan: Api.ExecutionPlan<{
    provides: Provides
    input: Input
    error: PlanE
    requirements: PlanR
  }>
) =>
  core.suspend(() => {
    let i = 0
    let result: Either.Either<A, any> | undefined
    return core.flatMap(
      core.whileLoop({
        while: () => i < plan.steps.length && (result === undefined || Either.isLeft(result)),
        body: () => {
          const step = plan.steps[i]
          let nextEffect: Effect<A, any, any> = layer.effect_provide(effect, step.provide as any)
          if (result) {
            let attempted = false
            const wrapped = nextEffect
            // ensure the schedule is applied at least once
            nextEffect = core.suspend(() => {
              if (attempted) return wrapped
              attempted = true
              return result!
            })
            nextEffect = InternalSchedule.scheduleDefectRefail(
              InternalSchedule.retry_Effect(nextEffect, scheduleFromStep(step, false)!)
            )
          } else {
            const schedule = scheduleFromStep(step, true)
            nextEffect = schedule
              ? InternalSchedule.scheduleDefectRefail(InternalSchedule.retry_Effect(nextEffect, schedule))
              : nextEffect
          }
          return core.either(nextEffect)
        },
        step: (either) => {
          result = either
          i++
        }
      }),
      () => result!
    )
  }))

/** @internal */
export const scheduleFromStep = <Provides, In, PlanE, PlanR>(
  step: Api.ExecutionPlan<{
    provides: Provides
    input: In
    error: PlanE
    requirements: PlanR
  }>["steps"][number],
  first: boolean
) => {
  if (!first) {
    return InternalSchedule.fromRetryOptions({
      schedule: step.schedule ? step.schedule : step.attempts ? undefined : InternalSchedule.once,
      times: step.attempts,
      while: step.while
    })
  } else if (step.attempts === 1 || !(step.schedule || step.attempts)) {
    return undefined
  }
  return InternalSchedule.fromRetryOptions({
    schedule: step.schedule,
    while: step.while,
    times: step.attempts ? step.attempts - 1 : undefined
  })
}
