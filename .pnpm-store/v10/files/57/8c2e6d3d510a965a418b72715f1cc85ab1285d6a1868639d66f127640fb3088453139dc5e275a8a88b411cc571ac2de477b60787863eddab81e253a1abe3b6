import type * as ConfigProvider from "../../ConfigProvider.js"
import * as Context from "../../Context.js"
import type * as Effect from "../../Effect.js"
import type * as Exit from "../../Exit.js"
import { dual } from "../../Function.js"
import * as HashSet from "../../HashSet.js"
import type * as Layer from "../../Layer.js"
import type * as Logger from "../../Logger.js"
import type * as LogLevel from "../../LogLevel.js"
import type { Scope } from "../../Scope.js"
import type * as Supervisor from "../../Supervisor.js"
import type * as Tracer from "../../Tracer.js"
import * as core from "../core.js"
import * as fiberRuntime from "../fiberRuntime.js"
import * as layer from "../layer.js"
import * as runtimeFlags from "../runtimeFlags.js"
import * as runtimeFlagsPatch from "../runtimeFlagsPatch.js"
import * as supervisor_ from "../supervisor.js"
import * as tracer from "../tracer.js"

// circular with Logger

/** @internal */
export const minimumLogLevel = (level: LogLevel.LogLevel): Layer.Layer<never> =>
  layer.scopedDiscard(
    fiberRuntime.fiberRefLocallyScoped(
      fiberRuntime.currentMinimumLogLevel,
      level
    )
  )

/** @internal */
export const withMinimumLogLevel = dual<
  (level: LogLevel.LogLevel) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, level: LogLevel.LogLevel) => Effect.Effect<A, E, R>
>(2, (self, level) =>
  core.fiberRefLocally(
    fiberRuntime.currentMinimumLogLevel,
    level
  )(self))

/** @internal */
export const addLogger = <A>(logger: Logger.Logger<unknown, A>): Layer.Layer<never> =>
  layer.scopedDiscard(
    fiberRuntime.fiberRefLocallyScopedWith(
      fiberRuntime.currentLoggers,
      HashSet.add(logger)
    )
  )

/** @internal */
export const addLoggerEffect = <A, E, R>(
  effect: Effect.Effect<Logger.Logger<unknown, A>, E, R>
): Layer.Layer<never, E, R> =>
  layer.unwrapEffect(
    core.map(effect, addLogger)
  )

/** @internal */
export const addLoggerScoped = <A, E, R>(
  effect: Effect.Effect<Logger.Logger<unknown, A>, E, R>
): Layer.Layer<never, E, Exclude<R, Scope>> =>
  layer.unwrapScoped(
    core.map(effect, addLogger)
  )

/** @internal */
export const removeLogger = <A>(logger: Logger.Logger<unknown, A>): Layer.Layer<never> =>
  layer.scopedDiscard(
    fiberRuntime.fiberRefLocallyScopedWith(
      fiberRuntime.currentLoggers,
      HashSet.remove(logger)
    )
  )

/** @internal */
export const replaceLogger = dual<
  <B>(that: Logger.Logger<unknown, B>) => <A>(self: Logger.Logger<unknown, A>) => Layer.Layer<never>,
  <A, B>(self: Logger.Logger<unknown, A>, that: Logger.Logger<unknown, B>) => Layer.Layer<never>
>(2, (self, that) => layer.flatMap(removeLogger(self), () => addLogger(that)))

/** @internal */
export const replaceLoggerEffect = dual<
  <B, E, R>(
    that: Effect.Effect<Logger.Logger<unknown, B>, E, R>
  ) => <A>(self: Logger.Logger<unknown, A>) => Layer.Layer<never, E, R>,
  <A, B, E, R>(
    self: Logger.Logger<unknown, A>,
    that: Effect.Effect<Logger.Logger<unknown, B>, E, R>
  ) => Layer.Layer<never, E, R>
>(2, (self, that) => layer.flatMap(removeLogger(self), () => addLoggerEffect(that)))

/** @internal */
export const replaceLoggerScoped = dual<
  <B, E, R>(
    that: Effect.Effect<Logger.Logger<unknown, B>, E, R>
  ) => <A>(self: Logger.Logger<unknown, A>) => Layer.Layer<never, E, Exclude<R, Scope>>,
  <A, B, E, R>(
    self: Logger.Logger<unknown, A>,
    that: Effect.Effect<Logger.Logger<unknown, B>, E, R>
  ) => Layer.Layer<never, E, Exclude<R, Scope>>
>(2, (self, that) => layer.flatMap(removeLogger(self), () => addLoggerScoped(that)))

/** @internal */
export const addSupervisor = <A>(supervisor: Supervisor.Supervisor<A>): Layer.Layer<never> =>
  layer.scopedDiscard(
    fiberRuntime.fiberRefLocallyScopedWith(
      fiberRuntime.currentSupervisor,
      (current) => new supervisor_.Zip(current, supervisor)
    )
  )

/** @internal */
export const enableCooperativeYielding: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.enable(runtimeFlags.CooperativeYielding)
  )
)

/** @internal */
export const enableInterruption: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.enable(runtimeFlags.Interruption)
  )
)

/** @internal */
export const enableOpSupervision: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.enable(runtimeFlags.OpSupervision)
  )
)

/** @internal */
export const enableRuntimeMetrics: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.enable(runtimeFlags.RuntimeMetrics)
  )
)

/** @internal */
export const enableWindDown: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.enable(runtimeFlags.WindDown)
  )
)

/** @internal */
export const disableCooperativeYielding: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.disable(runtimeFlags.CooperativeYielding)
  )
)

/** @internal */
export const disableInterruption: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.disable(runtimeFlags.Interruption)
  )
)

/** @internal */
export const disableOpSupervision: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.disable(runtimeFlags.OpSupervision)
  )
)

/** @internal */
export const disableRuntimeMetrics: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.disable(runtimeFlags.RuntimeMetrics)
  )
)

/** @internal */
export const disableWindDown: Layer.Layer<never> = layer.scopedDiscard(
  fiberRuntime.withRuntimeFlagsScoped(
    runtimeFlagsPatch.disable(runtimeFlags.WindDown)
  )
)

/** @internal */
export const setConfigProvider = (configProvider: ConfigProvider.ConfigProvider): Layer.Layer<never> =>
  layer.scopedDiscard(fiberRuntime.withConfigProviderScoped(configProvider))

/** @internal */
export const parentSpan = (span: Tracer.AnySpan): Layer.Layer<Tracer.ParentSpan> =>
  layer.succeedContext(Context.make(tracer.spanTag, span))

/** @internal */
export const span = (
  name: string,
  options?: Tracer.SpanOptions & {
    readonly onEnd?:
      | ((span: Tracer.Span, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void>)
      | undefined
  }
): Layer.Layer<Tracer.ParentSpan> => {
  options = tracer.addSpanStackTrace(options) as any
  return layer.scoped(
    tracer.spanTag,
    options?.onEnd
      ? core.tap(
        fiberRuntime.makeSpanScoped(name, options),
        (span) => fiberRuntime.addFinalizer((exit) => options.onEnd!(span, exit))
      )
      : fiberRuntime.makeSpanScoped(name, options)
  )
}

/** @internal */
export const setTracer = (tracer: Tracer.Tracer): Layer.Layer<never> =>
  layer.scopedDiscard(fiberRuntime.withTracerScoped(tracer))
