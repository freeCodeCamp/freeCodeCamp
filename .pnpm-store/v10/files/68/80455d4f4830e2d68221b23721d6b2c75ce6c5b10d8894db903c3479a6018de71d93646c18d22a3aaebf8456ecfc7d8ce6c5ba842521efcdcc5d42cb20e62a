import * as Context from "../Context.js"
import type * as Effect from "../Effect.js"
import { pipe } from "../Function.js"
import type * as Layer from "../Layer.js"
import type * as Reloadable from "../Reloadable.js"
import type * as Schedule from "../Schedule.js"
import * as effect from "./core-effect.js"
import * as core from "./core.js"
import * as fiberRuntime from "./fiberRuntime.js"
import * as layer_ from "./layer.js"
import * as schedule_ from "./schedule.js"
import * as scopedRef from "./scopedRef.js"

/** @internal */
const ReloadableSymbolKey = "effect/Reloadable"

/** @internal */
export const ReloadableTypeId: Reloadable.ReloadableTypeId = Symbol.for(
  ReloadableSymbolKey
) as Reloadable.ReloadableTypeId

const reloadableVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
export const auto = <I, S, E, In, R>(
  tag: Context.Tag<I, S>,
  options: {
    readonly layer: Layer.Layer<I, E, In>
    readonly schedule: Schedule.Schedule<unknown, unknown, R>
  }
): Layer.Layer<Reloadable.Reloadable<I>, E, R | In> =>
  layer_.scoped(
    reloadableTag(tag),
    pipe(
      layer_.build(manual(tag, { layer: options.layer })),
      core.map(Context.unsafeGet(reloadableTag(tag))),
      core.tap((reloadable) =>
        fiberRuntime.acquireRelease(
          pipe(
            reloadable.reload,
            effect.ignoreLogged,
            schedule_.schedule_Effect(options.schedule),
            fiberRuntime.forkDaemon
          ),
          core.interruptFiber
        )
      )
    )
  )

/** @internal */
export const autoFromConfig = <I, S, E, In, R>(
  tag: Context.Tag<I, S>,
  options: {
    readonly layer: Layer.Layer<I, E, In>
    readonly scheduleFromConfig: (context: Context.Context<In>) => Schedule.Schedule<unknown, unknown, R>
  }
): Layer.Layer<Reloadable.Reloadable<I>, E, R | In> =>
  layer_.scoped(
    reloadableTag(tag),
    pipe(
      core.context<In>(),
      core.flatMap((env) =>
        pipe(
          layer_.build(auto(tag, {
            layer: options.layer,
            schedule: options.scheduleFromConfig(env)
          })),
          core.map(Context.unsafeGet(reloadableTag(tag)))
        )
      )
    )
  )

/** @internal */
export const get = <I, S>(
  tag: Context.Tag<I, S>
): Effect.Effect<S, never, Reloadable.Reloadable<I>> =>
  core.flatMap(
    reloadableTag(tag),
    (reloadable) => scopedRef.get(reloadable.scopedRef)
  )

/** @internal */
export const manual = <I, S, In, E>(
  tag: Context.Tag<I, S>,
  options: {
    readonly layer: Layer.Layer<I, E, In>
  }
): Layer.Layer<Reloadable.Reloadable<I>, E, In> =>
  layer_.scoped(
    reloadableTag(tag),
    pipe(
      core.context<In>(),
      core.flatMap((env) =>
        pipe(
          scopedRef.fromAcquire(pipe(layer_.build(options.layer), core.map(Context.unsafeGet(tag)))),
          core.map((ref) => ({
            [ReloadableTypeId]: reloadableVariance,
            scopedRef: ref,
            reload: pipe(
              scopedRef.set(ref, pipe(layer_.build(options.layer), core.map(Context.unsafeGet(tag)))),
              core.provideContext(env)
            )
          }))
        )
      )
    )
  )

/** @internal */
export const reloadableTag = <I, S>(
  tag: Context.Tag<I, S>
): Context.Tag<Reloadable.Reloadable<I>, Reloadable.Reloadable<S>> => {
  return Context.GenericTag<Reloadable.Reloadable<I>, Reloadable.Reloadable<S>>(`effect/Reloadable<${tag.key}>`)
}

/** @internal */
export const reload = <I, S>(
  tag: Context.Tag<I, S>
): Effect.Effect<void, unknown, Reloadable.Reloadable<I>> =>
  core.flatMap(
    reloadableTag(tag),
    (reloadable) => reloadable.reload
  )

/** @internal */
export const reloadFork = <I, S>(
  tag: Context.Tag<I, S>
): Effect.Effect<void, unknown, Reloadable.Reloadable<I>> =>
  core.flatMap(reloadableTag(tag), (reloadable) =>
    pipe(
      reloadable.reload,
      effect.ignoreLogged,
      fiberRuntime.forkDaemon,
      core.asVoid
    ))
