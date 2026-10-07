import * as Effect from "./Effect.js";
import * as internal from "./internal/executionPlan.js";
import * as Layer from "./Layer.js";
import { pipeArguments } from "./Pipeable.js";
/**
 * @since 3.16.0
 * @category Symbols
 * @experimental
 */
export const TypeId = internal.TypeId;
/**
 * @since 3.16.0
 * @category Guards
 * @experimental
 */
export const isExecutionPlan = internal.isExecutionPlan;
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
export const make = (...steps) => makeProto(steps.map((options, i) => {
  if (options.attempts && options.attempts < 1) {
    throw new Error(`ExecutionPlan.make: step[${i}].attempts must be greater than 0`);
  }
  return {
    schedule: options.schedule,
    attempts: options.attempts,
    while: options.while ? input => Effect.suspend(() => {
      const result = options.while(input);
      return typeof result === "boolean" ? Effect.succeed(result) : result;
    }) : undefined,
    provide: options.provide
  };
}));
const Proto = {
  [TypeId]: TypeId,
  get withRequirements() {
    const self = this;
    return Effect.contextWith(context => makeProto(self.steps.map(step => ({
      ...step,
      provide: Layer.isLayer(step.provide) ? Layer.provide(step.provide, Layer.succeedContext(context)) : step.provide
    }))));
  },
  pipe() {
    return pipeArguments(this, arguments);
  }
};
const makeProto = steps => {
  const self = Object.create(Proto);
  self.steps = steps;
  return self;
};
/**
 * @since 3.16.0
 * @category Combining
 * @experimental
 */
export const merge = (...plans) => makeProto(plans.flatMap(plan => plan.steps));
//# sourceMappingURL=ExecutionPlan.js.map