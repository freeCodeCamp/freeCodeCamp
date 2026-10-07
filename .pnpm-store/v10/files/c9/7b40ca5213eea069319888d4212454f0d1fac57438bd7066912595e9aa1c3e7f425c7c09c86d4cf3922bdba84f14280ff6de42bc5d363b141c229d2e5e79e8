import type * as Context from "../Context.js"
import type * as Effect from "../Effect.js"
import type * as Exit from "../Exit.js"
import type * as Fiber from "../Fiber.js"
import { pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import * as MutableRef from "../MutableRef.js"
import type * as Option from "../Option.js"
import { hasProperty, isTagged } from "../Predicate.js"
import * as SortedSet from "../SortedSet.js"
import type * as Supervisor from "../Supervisor.js"
import * as core from "./core.js"

/** @internal */
const SupervisorSymbolKey = "effect/Supervisor"

/** @internal */
export const SupervisorTypeId: Supervisor.SupervisorTypeId = Symbol.for(
  SupervisorSymbolKey
) as Supervisor.SupervisorTypeId

/** @internal */
export const supervisorVariance = {
  /* c8 ignore next */
  _T: (_: never) => _
}

/** @internal */
export class ProxySupervisor<out T> implements Supervisor.Supervisor<T> {
  readonly [SupervisorTypeId] = supervisorVariance

  constructor(
    readonly underlying: Supervisor.Supervisor<any>,
    readonly value0: Effect.Effect<T>
  ) {
  }

  get value(): Effect.Effect<T> {
    return this.value0
  }

  onStart<A, E, R>(
    context: Context.Context<R>,
    effect: Effect.Effect<A, E, R>,
    parent: Option.Option<Fiber.RuntimeFiber<any, any>>,
    fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    this.underlying.onStart(context, effect, parent, fiber)
  }

  onEnd<A, E>(value: Exit.Exit<A, E>, fiber: Fiber.RuntimeFiber<A, E>): void {
    this.underlying.onEnd(value, fiber)
  }

  onEffect<A, E>(fiber: Fiber.RuntimeFiber<A, E>, effect: Effect.Effect<any, any, any>): void {
    this.underlying.onEffect(fiber, effect)
  }

  onSuspend<A, E>(fiber: Fiber.RuntimeFiber<A, E>): void {
    this.underlying.onSuspend(fiber)
  }

  onResume<A, E>(fiber: Fiber.RuntimeFiber<A, E>): void {
    this.underlying.onResume(fiber)
  }

  map<B>(f: (a: T) => B): Supervisor.Supervisor<B> {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)))
  }

  zip<B>(right: Supervisor.Supervisor<B>): Supervisor.Supervisor<[T, B]> {
    return new Zip(this, right)
  }
}

/** @internal */
export class Zip<out T0, out T1> implements Supervisor.Supervisor<readonly [T0, T1]> {
  readonly _tag = "Zip"
  readonly [SupervisorTypeId] = supervisorVariance

  constructor(
    readonly left: Supervisor.Supervisor<T0>,
    readonly right: Supervisor.Supervisor<T1>
  ) {
  }

  get value(): Effect.Effect<[T0, T1]> {
    return core.zip(this.left.value, this.right.value)
  }

  onStart<A, E, R>(
    context: Context.Context<R>,
    effect: Effect.Effect<A, E, R>,
    parent: Option.Option<Fiber.RuntimeFiber<any, any>>,
    fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    this.left.onStart(context, effect, parent, fiber)
    this.right.onStart(context, effect, parent, fiber)
  }

  onEnd<A, E>(value: Exit.Exit<A, E>, fiber: Fiber.RuntimeFiber<A, E>): void {
    this.left.onEnd(value, fiber)
    this.right.onEnd(value, fiber)
  }

  onEffect<A, E>(fiber: Fiber.RuntimeFiber<A, E>, effect: Effect.Effect<any, any, any>): void {
    this.left.onEffect(fiber, effect)
    this.right.onEffect(fiber, effect)
  }

  onSuspend<A, E>(fiber: Fiber.RuntimeFiber<A, E>): void {
    this.left.onSuspend(fiber)
    this.right.onSuspend(fiber)
  }

  onResume<A, E>(fiber: Fiber.RuntimeFiber<A, E>): void {
    this.left.onResume(fiber)
    this.right.onResume(fiber)
  }

  map<B>(f: (a: [T0, T1]) => B): Supervisor.Supervisor<B> {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)))
  }

  zip<A>(right: Supervisor.Supervisor<A>): Supervisor.Supervisor<[[T0, T1], A]> {
    return new Zip(this, right)
  }
}

/** @internal */
export const isZip = (self: unknown): self is Zip<any, any> =>
  hasProperty(self, SupervisorTypeId) && isTagged(self, "Zip")

/** @internal */
export class Track implements Supervisor.Supervisor<Array<Fiber.RuntimeFiber<any, any>>> {
  readonly [SupervisorTypeId] = supervisorVariance

  readonly fibers: Set<Fiber.RuntimeFiber<any, any>> = new Set()

  get value(): Effect.Effect<Array<Fiber.RuntimeFiber<any, any>>> {
    return core.sync(() => Array.from(this.fibers))
  }

  onStart<A, E, R>(
    _context: Context.Context<R>,
    _effect: Effect.Effect<A, E, R>,
    _parent: Option.Option<Fiber.RuntimeFiber<any, any>>,
    fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    this.fibers.add(fiber)
  }

  onEnd<A, E>(_value: Exit.Exit<A, E>, fiber: Fiber.RuntimeFiber<A, E>): void {
    this.fibers.delete(fiber)
  }

  onEffect<A, E>(_fiber: Fiber.RuntimeFiber<A, E>, _effect: Effect.Effect<any, any, any>): void {
    //
  }

  onSuspend<A, E>(_fiber: Fiber.RuntimeFiber<A, E>): void {
    //
  }

  onResume<A, E>(_fiber: Fiber.RuntimeFiber<A, E>): void {
    //
  }

  map<B>(f: (a: Array<Fiber.RuntimeFiber<any, any>>) => B): Supervisor.Supervisor<B> {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)))
  }

  zip<A>(
    right: Supervisor.Supervisor<A>
  ): Supervisor.Supervisor<[Array<Fiber.RuntimeFiber<any, any>>, A]> {
    return new Zip(this, right)
  }

  onRun<E, A, X>(execution: () => X, _fiber: Fiber.RuntimeFiber<A, E>): X {
    return execution()
  }
}

/** @internal */
export class Const<out T> implements Supervisor.Supervisor<T> {
  readonly [SupervisorTypeId] = supervisorVariance

  constructor(readonly effect: Effect.Effect<T>) {
  }

  get value(): Effect.Effect<T> {
    return this.effect
  }

  onStart<A, E, R>(
    _context: Context.Context<R>,
    _effect: Effect.Effect<A, E, R>,
    _parent: Option.Option<Fiber.RuntimeFiber<any, any>>,
    _fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    //
  }

  onEnd<A, E>(_value: Exit.Exit<A, E>, _fiber: Fiber.RuntimeFiber<A, E>): void {
    //
  }

  onEffect<A, E>(_fiber: Fiber.RuntimeFiber<A, E>, _effect: Effect.Effect<any, any, any>): void {
    //
  }

  onSuspend<A, E>(_fiber: Fiber.RuntimeFiber<A, E>): void {
    //
  }

  onResume<A, E>(_fiber: Fiber.RuntimeFiber<A, E>): void {
    //
  }

  map<B>(f: (a: T) => B): Supervisor.Supervisor<B> {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)))
  }

  zip<A>(right: Supervisor.Supervisor<A>): Supervisor.Supervisor<[T, A]> {
    return new Zip(this, right)
  }

  onRun<E, A, X>(execution: () => X, _fiber: Fiber.RuntimeFiber<A, E>): X {
    return execution()
  }
}

class FibersIn implements Supervisor.Supervisor<SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>> {
  readonly [SupervisorTypeId] = supervisorVariance

  constructor(readonly ref: MutableRef.MutableRef<SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>>) {
  }

  get value(): Effect.Effect<SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>> {
    return core.sync(() => MutableRef.get(this.ref))
  }

  onStart<A, E, R>(
    _context: Context.Context<R>,
    _effect: Effect.Effect<A, E, R>,
    _parent: Option.Option<Fiber.RuntimeFiber<any, any>>,
    fiber: Fiber.RuntimeFiber<A, E>
  ): void {
    pipe(this.ref, MutableRef.set(pipe(MutableRef.get(this.ref), SortedSet.add(fiber))))
  }

  onEnd<A, E>(_value: Exit.Exit<A, E>, fiber: Fiber.RuntimeFiber<A, E>): void {
    pipe(this.ref, MutableRef.set(pipe(MutableRef.get(this.ref), SortedSet.remove(fiber))))
  }

  onEffect<A, E>(_fiber: Fiber.RuntimeFiber<A, E>, _effect: Effect.Effect<any, any, any>): void {
    //
  }

  onSuspend<A, E>(_fiber: Fiber.RuntimeFiber<A, E>): void {
    //
  }

  onResume<A, E>(_fiber: Fiber.RuntimeFiber<A, E>): void {
    //
  }

  map<B>(f: (a: SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>) => B): Supervisor.Supervisor<B> {
    return new ProxySupervisor(this, pipe(this.value, core.map(f)))
  }

  zip<A>(
    right: Supervisor.Supervisor<A>
  ): Supervisor.Supervisor<[SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>, A]> {
    return new Zip(this, right)
  }

  onRun<E, A, X>(execution: () => X, _fiber: Fiber.RuntimeFiber<A, E>): X {
    return execution()
  }
}

/** @internal */
export const unsafeTrack = (): Supervisor.Supervisor<Array<Fiber.RuntimeFiber<any, any>>> => {
  return new Track()
}

/** @internal */
export const track: Effect.Effect<Supervisor.Supervisor<Array<Fiber.RuntimeFiber<any, any>>>> = core.sync(unsafeTrack)

/** @internal */
export const fromEffect = <A>(effect: Effect.Effect<A>): Supervisor.Supervisor<A> => {
  return new Const(effect)
}

/** @internal */
export const none = globalValue("effect/Supervisor/none", () => fromEffect(core.void))

/** @internal */
export const fibersIn = (
  ref: MutableRef.MutableRef<SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>>
): Effect.Effect<Supervisor.Supervisor<SortedSet.SortedSet<Fiber.RuntimeFiber<any, any>>>> =>
  core.sync(() => new FibersIn(ref))
