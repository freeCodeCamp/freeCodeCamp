/**
 * A lightweight alternative to the `Effect` data type, with a subset of the functionality.
 *
 * @since 3.4.0
 * @experimental
 */
import * as Arr from "./Array.js"
import type { Channel } from "./Channel.js"
import * as Context from "./Context.js"
import type { Effect, EffectUnify, EffectUnifyIgnore } from "./Effect.js"
import * as Effectable from "./Effectable.js"
import * as Either from "./Either.js"
import * as Equal from "./Equal.js"
import type { LazyArg } from "./Function.js"
import { constTrue, constVoid, dual, identity } from "./Function.js"
import { globalValue } from "./GlobalValue.js"
import * as Hash from "./Hash.js"
import type { TypeLambda } from "./HKT.js"
import type { Inspectable } from "./Inspectable.js"
import { format, NodeInspectSymbol, toStringUnknown } from "./Inspectable.js"
import * as InternalContext from "./internal/context.js"
import * as doNotation from "./internal/doNotation.js"
import { StructuralPrototype } from "./internal/effectable.js"
import * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"
import type { Predicate, Refinement } from "./Predicate.js"
import { hasProperty, isIterable, isTagged } from "./Predicate.js"
import type { Sink } from "./Sink.js"
import type { Stream } from "./Stream.js"
import type { Concurrency, Covariant, Equals, NoExcessProperties, NotFunction, Simplify } from "./Types.js"
import type * as Unify from "./Unify.js"
import { SingleShotGen, YieldWrap, yieldWrapGet } from "./Utils.js"

/**
 * @since 3.4.0
 * @experimental
 * @category type ids
 */
export const TypeId: unique symbol = Symbol.for("effect/Micro")

/**
 * @since 3.4.0
 * @experimental
 * @category type ids
 */
export type TypeId = typeof TypeId

/**
 * @since 3.4.0
 * @experimental
 * @category MicroExit
 */
export const MicroExitTypeId: unique symbol = Symbol.for(
  "effect/Micro/MicroExit"
)

/**
 * @since 3.4.0
 * @experimental
 * @category MicroExit
 */
export type MicroExitTypeId = typeof TypeId

/**
 * A lightweight alternative to the `Effect` data type, with a subset of the functionality.
 *
 * @since 3.4.0
 * @experimental
 * @category models
 */
export interface Micro<out A, out E = never, out R = never> extends Effect<A, E, R> {
  readonly [TypeId]: Micro.Variance<A, E, R>
  [Symbol.iterator](): MicroIterator<Micro<A, E, R>>
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: MicroUnify<this>
  [Unify.ignoreSymbol]?: MicroUnifyIgnore
}

/**
 * @category models
 * @since 3.4.3
 */
export interface MicroUnify<A extends { [Unify.typeSymbol]?: any }> extends EffectUnify<A> {
  Micro?: () => A[Unify.typeSymbol] extends Micro<infer A0, infer E0, infer R0> | infer _ ? Micro<A0, E0, R0> : never
}

/**
 * @category models
 * @since 3.4.3
 */
export interface MicroUnifyIgnore extends EffectUnifyIgnore {
  Effect?: true
}
/**
 * @category type lambdas
 * @since 3.4.1
 */
export interface MicroTypeLambda extends TypeLambda {
  readonly type: Micro<this["Target"], this["Out1"], this["Out2"]>
}

/**
 * @since 3.4.0
 * @experimental
 */
export declare namespace Micro {
  /**
   * @since 3.4.0
   * @experimental
   */
  export interface Variance<A, E, R> {
    _A: Covariant<A>
    _E: Covariant<E>
    _R: Covariant<R>
  }

  /**
   * @since 3.4.0
   * @experimental
   */
  export type Success<T> = T extends Micro<infer _A, infer _E, infer _R> ? _A : never

  /**
   * @since 3.4.0
   * @experimental
   */
  export type Error<T> = T extends Micro<infer _A, infer _E, infer _R> ? _E : never

  /**
   * @since 3.4.0
   * @experimental
   */
  export type Context<T> = T extends Micro<infer _A, infer _E, infer _R> ? _R : never
}

/**
 * @since 3.4.0
 * @experimental
 * @category guards
 */
export const isMicro = (u: unknown): u is Micro<any, any, any> => typeof u === "object" && u !== null && TypeId in u

/**
 * @since 3.4.0
 * @experimental
 * @category models
 */
export interface MicroIterator<T extends Micro<any, any, any>> {
  next(...args: ReadonlyArray<any>): IteratorResult<YieldWrap<T>, Micro.Success<T>>
}

// ----------------------------------------------------------------------------
// MicroCause
// ----------------------------------------------------------------------------

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const MicroCauseTypeId = Symbol.for("effect/Micro/MicroCause")

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export type MicroCauseTypeId = typeof MicroCauseTypeId

/**
 * A `MicroCause` is a data type that represents the different ways a `Micro` can fail.
 *
 * **Details**
 *
 * `MicroCause` comes in three forms:
 *
 * - `Die`: Indicates an unforeseen defect that wasn't planned for in the system's logic.
 * - `Fail`: Covers anticipated errors that are recognized and typically handled within the application.
 * - `Interrupt`: Signifies an operation that has been purposefully stopped.
 *
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export type MicroCause<E> =
  | MicroCause.Die
  | MicroCause.Fail<E>
  | MicroCause.Interrupt

/**
 * @since 3.6.6
 * @experimental
 * @category guards
 */
export const isMicroCause = (self: unknown): self is MicroCause<unknown> => hasProperty(self, MicroCauseTypeId)

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare namespace MicroCause {
  /**
   * @since 3.4.6
   * @experimental
   */
  export type Error<T> = T extends MicroCause.Fail<infer E> ? E : never

  /**
   * @since 3.4.0
   * @experimental
   */
  export interface Proto<Tag extends string, E> extends Pipeable, globalThis.Error {
    readonly [MicroCauseTypeId]: {
      _E: Covariant<E>
    }
    readonly _tag: Tag
    readonly traces: ReadonlyArray<string>
  }

  /**
   * @since 3.4.6
   * @experimental
   * @category MicroCause
   */
  export interface Die extends Proto<"Die", never> {
    readonly defect: unknown
  }

  /**
   * @since 3.4.6
   * @experimental
   * @category MicroCause
   */
  export interface Fail<E> extends Proto<"Fail", E> {
    readonly error: E
  }

  /**
   * @since 3.4.6
   * @experimental
   * @category MicroCause
   */
  export interface Interrupt extends Proto<"Interrupt", never> {}
}

const microCauseVariance = {
  _E: identity
}

abstract class MicroCauseImpl<Tag extends string, E> extends globalThis.Error implements MicroCause.Proto<Tag, E> {
  readonly [MicroCauseTypeId]: {
    _E: Covariant<E>
  }
  constructor(
    readonly _tag: Tag,
    originalError: unknown,
    readonly traces: ReadonlyArray<string>
  ) {
    const causeName = `MicroCause.${_tag}`
    let name: string
    let message: string
    let stack: string
    if (originalError instanceof globalThis.Error) {
      name = `(${causeName}) ${originalError.name}`
      message = originalError.message as string
      const messageLines = message.split("\n").length
      stack = originalError.stack
        ? `(${causeName}) ${
          originalError.stack
            .split("\n")
            .slice(0, messageLines + 3)
            .join("\n")
        }`
        : `${name}: ${message}`
    } else {
      name = causeName
      message = toStringUnknown(originalError, 0)
      stack = `${name}: ${message}`
    }
    if (traces.length > 0) {
      stack += `\n    ${traces.join("\n    ")}`
    }
    super(message)
    this[MicroCauseTypeId] = microCauseVariance
    this.name = name
    this.stack = stack
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
  toString() {
    return this.stack
  }
  [NodeInspectSymbol]() {
    return this.stack
  }
}

class Fail<E> extends MicroCauseImpl<"Fail", E> implements MicroCause.Fail<E> {
  constructor(
    readonly error: E,
    traces: ReadonlyArray<string> = []
  ) {
    super("Fail", error, traces)
  }
}

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeFail = <E>(
  error: E,
  traces: ReadonlyArray<string> = []
): MicroCause<E> => new Fail(error, traces)

class Die extends MicroCauseImpl<"Die", never> implements MicroCause.Die {
  constructor(
    readonly defect: unknown,
    traces: ReadonlyArray<string> = []
  ) {
    super("Die", defect, traces)
  }
}

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeDie = (
  defect: unknown,
  traces: ReadonlyArray<string> = []
): MicroCause<never> => new Die(defect, traces)

class Interrupt extends MicroCauseImpl<"Interrupt", never> implements MicroCause.Interrupt {
  constructor(traces: ReadonlyArray<string> = []) {
    super("Interrupt", "interrupted", traces)
  }
}

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeInterrupt = (
  traces: ReadonlyArray<string> = []
): MicroCause<never> => new Interrupt(traces)

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeIsFail = <E>(
  self: MicroCause<E>
): self is MicroCause.Fail<E> => self._tag === "Fail"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeIsDie = <E>(self: MicroCause<E>): self is MicroCause.Die => self._tag === "Die"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeIsInterrupt = <E>(
  self: MicroCause<E>
): self is MicroCause.Interrupt => self._tag === "Interrupt"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeSquash = <E>(self: MicroCause<E>): unknown =>
  self._tag === "Fail" ? self.error : self._tag === "Die" ? self.defect : self

/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export const causeWithTrace: {
  /**
   * @since 3.4.6
   * @experimental
   * @category MicroCause
   */
  (trace: string): <E>(self: MicroCause<E>) => MicroCause<E>
  /**
   * @since 3.4.6
   * @experimental
   * @category MicroCause
   */
  <E>(self: MicroCause<E>, trace: string): MicroCause<E>
} = dual(2, <E>(self: MicroCause<E>, trace: string): MicroCause<E> => {
  const traces = [...self.traces, trace]
  switch (self._tag) {
    case "Die":
      return causeDie(self.defect, traces)
    case "Interrupt":
      return causeInterrupt(traces)
    case "Fail":
      return causeFail(self.error, traces)
  }
})

// ----------------------------------------------------------------------------
// MicroFiber
// ----------------------------------------------------------------------------

/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const MicroFiberTypeId = Symbol.for("effect/Micro/MicroFiber")

/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export type MicroFiberTypeId = typeof MicroFiberTypeId

/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export interface MicroFiber<out A, out E = never> {
  readonly [MicroFiberTypeId]: MicroFiber.Variance<A, E>

  readonly currentOpCount: number
  readonly getRef: <I, A>(ref: Context.Reference<I, A>) => A
  readonly context: Context.Context<never>
  readonly addObserver: (cb: (exit: MicroExit<A, E>) => void) => () => void
  readonly unsafeInterrupt: () => void
  readonly unsafePoll: () => MicroExit<A, E> | undefined
}

/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export declare namespace MicroFiber {
  /**
   * @since 3.11.0
   * @experimental
   * @category MicroFiber
   */
  export interface Variance<out A, out E = never> {
    readonly _A: Covariant<A>
    readonly _E: Covariant<E>
  }
}

const fiberVariance = {
  _A: identity,
  _E: identity
}

class MicroFiberImpl<in out A = any, in out E = any> implements MicroFiber<A, E> {
  readonly [MicroFiberTypeId]: MicroFiber.Variance<A, E>

  readonly _stack: Array<Primitive> = []
  readonly _observers: Array<(exit: MicroExit<A, E>) => void> = []
  _exit: MicroExit<A, E> | undefined
  public _children: Set<MicroFiberImpl<any, any>> | undefined

  public currentOpCount = 0

  constructor(
    public context: Context.Context<never>,
    public interruptible = true
  ) {
    this[MicroFiberTypeId] = fiberVariance
  }

  getRef<I, A>(ref: Context.Reference<I, A>): A {
    return InternalContext.unsafeGetReference(this.context, ref)
  }

  addObserver(cb: (exit: MicroExit<A, E>) => void): () => void {
    if (this._exit) {
      cb(this._exit)
      return constVoid
    }
    this._observers.push(cb)
    return () => {
      const index = this._observers.indexOf(cb)
      if (index >= 0) {
        this._observers.splice(index, 1)
      }
    }
  }

  _interrupted = false
  unsafeInterrupt(): void {
    if (this._exit) {
      return
    }
    this._interrupted = true
    if (this.interruptible) {
      this.evaluate(exitInterrupt as any)
    }
  }

  unsafePoll(): MicroExit<A, E> | undefined {
    return this._exit
  }

  evaluate(effect: Primitive): void {
    if (this._exit) {
      return
    } else if (this._yielded !== undefined) {
      const yielded = this._yielded as () => void
      this._yielded = undefined
      yielded()
    }
    const exit = this.runLoop(effect)
    if (exit === Yield) {
      return
    }

    // the interruptChildren middlware is added in Micro.fork, so it can be
    // tree-shaken if not used
    const interruptChildren = fiberMiddleware.interruptChildren && fiberMiddleware.interruptChildren(this)
    if (interruptChildren !== undefined) {
      return this.evaluate(flatMap(interruptChildren, () => exit) as any)
    }

    this._exit = exit
    for (let i = 0; i < this._observers.length; i++) {
      this._observers[i](exit)
    }
    this._observers.length = 0
  }

  runLoop(effect: Primitive): MicroExit<A, E> | Yield {
    let yielding = false
    let current: Primitive | Yield = effect
    this.currentOpCount = 0
    try {
      while (true) {
        this.currentOpCount++
        if (!yielding && this.getRef(CurrentScheduler).shouldYield(this as any)) {
          yielding = true
          const prev = current
          current = flatMap(yieldNow, () => prev as any) as any
        }
        current = (current as any)[evaluate](this)
        if (current === Yield) {
          const yielded = this._yielded!
          if (MicroExitTypeId in yielded) {
            this._yielded = undefined
            return yielded
          }
          return Yield
        }
      }
    } catch (error) {
      if (!hasProperty(current, evaluate)) {
        return exitDie(`MicroFiber.runLoop: Not a valid effect: ${String(current)}`)
      }
      return exitDie(error)
    }
  }

  getCont<S extends successCont | failureCont>(
    symbol: S
  ): Primitive & Record<S, (value: any, fiber: MicroFiberImpl) => Primitive> | undefined {
    while (true) {
      const op = this._stack.pop()
      if (!op) return undefined
      const cont = op[ensureCont] && op[ensureCont](this)
      if (cont) return { [symbol]: cont } as any
      if (op[symbol]) return op as any
    }
  }

  // cancel the yielded operation, or for the yielded exit value
  _yielded: MicroExit<any, any> | (() => void) | undefined = undefined
  yieldWith(value: MicroExit<any, any> | (() => void)): Yield {
    this._yielded = value
    return Yield
  }

  children(): Set<MicroFiber<any, any>> {
    return this._children ??= new Set()
  }
}

const fiberMiddleware = globalValue("effect/Micro/fiberMiddleware", () => ({
  interruptChildren: undefined as ((fiber: MicroFiberImpl) => Micro<void> | undefined) | undefined
}))

const fiberInterruptChildren = (fiber: MicroFiberImpl) => {
  if (fiber._children === undefined || fiber._children.size === 0) {
    return undefined
  }
  return fiberInterruptAll(fiber._children)
}

/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const fiberAwait = <A, E>(self: MicroFiber<A, E>): Micro<MicroExit<A, E>> =>
  async((resume) => sync(self.addObserver((exit) => resume(succeed(exit)))))

/**
 * @since 3.11.2
 * @experimental
 * @category MicroFiber
 */
export const fiberJoin = <A, E>(self: MicroFiber<A, E>): Micro<A, E> => flatten(fiberAwait(self))

/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const fiberInterrupt = <A, E>(self: MicroFiber<A, E>): Micro<void> =>
  suspend(() => {
    self.unsafeInterrupt()
    return asVoid(fiberAwait(self))
  })

/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export const fiberInterruptAll = <A extends Iterable<MicroFiber<any, any>>>(fibers: A): Micro<void> =>
  suspend(() => {
    for (const fiber of fibers) fiber.unsafeInterrupt()
    const iter = fibers[Symbol.iterator]()
    const wait: Micro<void> = suspend(() => {
      let result = iter.next()
      while (!result.done) {
        if (result.value.unsafePoll()) {
          result = iter.next()
          continue
        }
        const fiber = result.value
        return async((resume) => {
          fiber.addObserver((_) => {
            resume(wait)
          })
        })
      }
      return exitVoid
    })
    return wait
  })

const identifier = Symbol.for("effect/Micro/identifier")
type identifier = typeof identifier

const args = Symbol.for("effect/Micro/args")
type args = typeof args

const evaluate = Symbol.for("effect/Micro/evaluate")
type evaluate = typeof evaluate

const successCont = Symbol.for("effect/Micro/successCont")
type successCont = typeof successCont

const failureCont = Symbol.for("effect/Micro/failureCont")
type failureCont = typeof failureCont

const ensureCont = Symbol.for("effect/Micro/ensureCont")
type ensureCont = typeof ensureCont

const Yield = Symbol.for("effect/Micro/Yield")
type Yield = typeof Yield

interface Primitive {
  readonly [identifier]: string
  readonly [successCont]: ((value: unknown, fiber: MicroFiberImpl) => Primitive | Yield) | undefined
  readonly [failureCont]:
    | ((cause: MicroCause<unknown>, fiber: MicroFiberImpl) => Primitive | Yield)
    | undefined
  readonly [ensureCont]:
    | ((fiber: MicroFiberImpl) =>
      | ((value: unknown, fiber: MicroFiberImpl) => Primitive | Yield)
      | undefined)
    | undefined
  [evaluate](fiber: MicroFiberImpl): Primitive | Yield
}

const microVariance = {
  _A: identity,
  _E: identity,
  _R: identity
}

const MicroProto = {
  ...Effectable.EffectPrototype,
  _op: "Micro",
  [TypeId]: microVariance,
  pipe() {
    return pipeArguments(this, arguments)
  },
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this)) as any
  },
  toJSON(this: Primitive) {
    return {
      _id: "Micro",
      op: this[identifier],
      ...(args in this ? { args: this[args] } : undefined)
    }
  },
  toString() {
    return format(this)
  },
  [NodeInspectSymbol]() {
    return format(this)
  }
}

function defaultEvaluate(_fiber: MicroFiberImpl): Primitive | Yield {
  return exitDie(`Micro.evaluate: Not implemented`) as any
}

const makePrimitiveProto = <Op extends string>(options: {
  readonly op: Op
  readonly eval?: (fiber: MicroFiberImpl) => Primitive | Micro<any, any, any> | Yield
  readonly contA?: (this: Primitive, value: any, fiber: MicroFiberImpl) => Primitive | Micro<any, any, any> | Yield
  readonly contE?: (
    this: Primitive,
    cause: MicroCause<any>,
    fiber: MicroFiberImpl
  ) => Primitive | Micro<any, any, any> | Yield
  readonly ensure?: (this: Primitive, fiber: MicroFiberImpl) => void | ((value: any, fiber: MicroFiberImpl) => void)
}): Primitive => ({
  ...MicroProto,
  [identifier]: options.op,
  [evaluate]: options.eval ?? defaultEvaluate,
  [successCont]: options.contA,
  [failureCont]: options.contE,
  [ensureCont]: options.ensure
} as any)

const makePrimitive = <Fn extends (...args: Array<any>) => any, Single extends boolean = true>(options: {
  readonly op: string
  readonly single?: Single
  readonly eval?: (
    this: Primitive & { readonly [args]: Single extends true ? Parameters<Fn>[0] : Parameters<Fn> },
    fiber: MicroFiberImpl
  ) => Primitive | Micro<any, any, any> | Yield
  readonly contA?: (
    this: Primitive & { readonly [args]: Single extends true ? Parameters<Fn>[0] : Parameters<Fn> },
    value: any,
    fiber: MicroFiberImpl
  ) => Primitive | Micro<any, any, any> | Yield
  readonly contE?: (
    this: Primitive & { readonly [args]: Single extends true ? Parameters<Fn>[0] : Parameters<Fn> },
    cause: MicroCause<any>,
    fiber: MicroFiberImpl
  ) => Primitive | Micro<any, any, any> | Yield
  readonly ensure?: (
    this: Primitive & { readonly [args]: Single extends true ? Parameters<Fn>[0] : Parameters<Fn> },
    fiber: MicroFiberImpl
  ) => void | ((value: any, fiber: MicroFiberImpl) => void)
}): Fn => {
  const Proto = makePrimitiveProto(options as any)
  return function() {
    const self = Object.create(Proto)
    self[args] = options.single === false ? arguments : arguments[0]
    return self
  } as Fn
}

const makeExit = <Fn extends (...args: Array<any>) => any, Prop extends string>(options: {
  readonly op: "Success" | "Failure"
  readonly prop: Prop
  readonly eval: (
    this:
      & MicroExit<unknown, unknown>
      & { [args]: Parameters<Fn>[0] },
    fiber: MicroFiberImpl<unknown, unknown>
  ) => Primitive | Yield
}): Fn => {
  const Proto = {
    ...makePrimitiveProto(options),
    [MicroExitTypeId]: MicroExitTypeId,
    _tag: options.op,
    get [options.prop](): any {
      return (this as any)[args]
    },
    toJSON(this: any) {
      return {
        _id: "MicroExit",
        _tag: options.op,
        [options.prop]: this[args]
      }
    },
    [Equal.symbol](this: any, that: any): boolean {
      return isMicroExit(that) && that._tag === options.op &&
        Equal.equals(this[args], (that as any)[args])
    },
    [Hash.symbol](this: any): number {
      return Hash.cached(this, Hash.combine(Hash.string(options.op))(Hash.hash(this[args])))
    }
  }
  return function(value: unknown) {
    const self = Object.create(Proto)
    self[args] = value
    self[successCont] = undefined
    self[failureCont] = undefined
    self[ensureCont] = undefined
    return self
  } as Fn
}

/**
 * Creates a `Micro` effect that will succeed with the specified constant value.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const succeed: <A>(value: A) => Micro<A> = makeExit({
  op: "Success",
  prop: "value",
  eval(fiber) {
    const cont = fiber.getCont(successCont)
    return cont ? cont[successCont](this[args], fiber) : fiber.yieldWith(this)
  }
})

/**
 * Creates a `Micro` effect that will fail with the specified `MicroCause`.
 *
 * @since 3.4.6
 * @experimental
 * @category constructors
 */
export const failCause: <E>(cause: MicroCause<E>) => Micro<never, E> = makeExit({
  op: "Failure",
  prop: "cause",
  eval(fiber) {
    let cont = fiber.getCont(failureCont)
    while (causeIsInterrupt(this[args]) && cont && fiber.interruptible) {
      cont = fiber.getCont(failureCont)
    }
    return cont ? cont[failureCont](this[args], fiber) : fiber.yieldWith(this)
  }
})

/**
 * Creates a `Micro` effect that fails with the given error.
 *
 * This results in a `Fail` variant of the `MicroCause` type, where the error is
 * tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const fail = <E>(error: E): Micro<never, E> => failCause(causeFail(error))

/**
 * Creates a `Micro` effect that succeeds with a lazily evaluated value.
 *
 * If the evaluation of the value throws an error, the effect will fail with a
 * `Die` variant of the `MicroCause` type.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const sync: <A>(evaluate: LazyArg<A>) => Micro<A> = makePrimitive({
  op: "Sync",
  eval(fiber): Primitive | Yield {
    const value = this[args]()
    const cont = fiber.getCont(successCont)
    return cont ? cont[successCont](value, fiber) : fiber.yieldWith(exitSucceed(value))
  }
})

/**
 * Lazily creates a `Micro` effect from the given side-effect.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const suspend: <A, E, R>(evaluate: LazyArg<Micro<A, E, R>>) => Micro<A, E, R> = makePrimitive({
  op: "Suspend",
  eval(_fiber) {
    return this[args]()
  }
})

/**
 * Pause the execution of the current `Micro` effect, and resume it on the next
 * scheduler tick.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const yieldNowWith: (priority?: number) => Micro<void> = makePrimitive({
  op: "Yield",
  eval(fiber) {
    let resumed = false
    fiber.getRef(CurrentScheduler).scheduleTask(() => {
      if (resumed) return
      fiber.evaluate(exitVoid as any)
    }, this[args] ?? 0)
    return fiber.yieldWith(() => {
      resumed = true
    })
  }
})

/**
 * Pause the execution of the current `Micro` effect, and resume it on the next
 * scheduler tick.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const yieldNow: Micro<void> = yieldNowWith(0)

/**
 * Creates a `Micro` effect that will succeed with the value wrapped in `Some`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const succeedSome = <A>(a: A): Micro<Option.Option<A>> => succeed(Option.some(a))

/**
 * Creates a `Micro` effect that succeeds with `None`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const succeedNone: Micro<Option.Option<never>> = succeed(Option.none())

/**
 * Creates a `Micro` effect that will fail with the lazily evaluated `MicroCause`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const failCauseSync = <E>(evaluate: LazyArg<MicroCause<E>>): Micro<never, E> =>
  suspend(() => failCause(evaluate()))

/**
 * Creates a `Micro` effect that will die with the specified error.
 *
 * This results in a `Die` variant of the `MicroCause` type, where the error is
 * not tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const die = (defect: unknown): Micro<never> => exitDie(defect)

/**
 * Creates a `Micro` effect that will fail with the lazily evaluated error.
 *
 * This results in a `Fail` variant of the `MicroCause` type, where the error is
 * tracked at the type level.
 *
 * @since 3.4.6
 * @experimental
 * @category constructors
 */
export const failSync = <E>(error: LazyArg<E>): Micro<never, E> => suspend(() => fail(error()))

/**
 * Converts an `Option` into a `Micro` effect, that will fail with
 * `NoSuchElementException` if the option is `None`. Otherwise, it will succeed with the
 * value of the option.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const fromOption = <A>(option: Option.Option<A>): Micro<A, NoSuchElementException> =>
  option._tag === "Some" ? succeed(option.value) : fail(new NoSuchElementException({}))

/**
 * Converts an `Either` into a `Micro` effect, that will fail with the left side
 * of the either if it is a `Left`. Otherwise, it will succeed with the right
 * side of the either.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const fromEither = <R, L>(either: Either.Either<R, L>): Micro<R, L> =>
  either._tag === "Right" ? succeed(either.right) : fail(either.left)

const void_: Micro<void> = succeed(void 0)
export {
  /**
   * A `Micro` effect that will succeed with `void` (`undefined`).
   *
   * @since 3.4.0
   * @experimental
   * @category constructors
   */
  void_ as void
}

const try_ = <A, E>(options: {
  try: LazyArg<A>
  catch: (error: unknown) => E
}): Micro<A, E> =>
  suspend(() => {
    try {
      return succeed(options.try())
    } catch (err) {
      return fail(options.catch(err))
    }
  })
export {
  /**
   * The `Micro` equivalent of a try / catch block, which allows you to map
   * thrown errors to a specific error type.
   *
   * @example
   * ```ts
   * import { Micro } from "effect"
   *
   * Micro.try({
   *   try: () => { throw new Error("boom") },
   *   catch: (cause) => new Error("caught", { cause })
   * })
   * ```
   *
   * @since 3.4.0
   * @experimental
   * @category constructors
   */
  try_ as try
}

/**
 * Wrap a `Promise` into a `Micro` effect.
 *
 * Any errors will result in a `Die` variant of the `MicroCause` type, where the
 * error is not tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const promise = <A>(evaluate: (signal: AbortSignal) => PromiseLike<A>): Micro<A> =>
  asyncOptions<A>(function(resume, signal) {
    evaluate(signal!).then(
      (a) => resume(succeed(a)),
      (e) => resume(die(e))
    )
  }, evaluate.length !== 0)

/**
 * Wrap a `Promise` into a `Micro` effect. Any errors will be caught and
 * converted into a specific error type.
 *
 * @example
 * ```ts
 * import { Micro } from "effect"
 *
 * Micro.tryPromise({
 *   try: () => Promise.resolve("success"),
 *   catch: (cause) => new Error("caught", { cause })
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const tryPromise = <A, E>(options: {
  readonly try: (signal: AbortSignal) => PromiseLike<A>
  readonly catch: (error: unknown) => E
}): Micro<A, E> =>
  asyncOptions<A, E>(function(resume, signal) {
    try {
      options.try(signal!).then(
        (a) => resume(succeed(a)),
        (e) => resume(fail(options.catch(e)))
      )
    } catch (err) {
      resume(fail(options.catch(err)))
    }
  }, options.try.length !== 0)

/**
 * Create a `Micro` effect using the current `MicroFiber`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const withMicroFiber: <A, E = never, R = never>(
  evaluate: (fiber: MicroFiberImpl<A, E>) => Micro<A, E, R>
) => Micro<A, E, R> = makePrimitive({
  op: "WithMicroFiber",
  eval(fiber) {
    return this[args](fiber)
  }
})

/**
 * Flush any yielded effects that are waiting to be executed.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const yieldFlush: Micro<void> = withMicroFiber((fiber) => {
  fiber.getRef(CurrentScheduler).flush()
  return exitVoid
})

const asyncOptions: <A, E = never, R = never>(
  register: (
    resume: (effect: Micro<A, E, R>) => void,
    signal?: AbortSignal
  ) => void | Micro<void, never, R>,
  withSignal: boolean
) => Micro<A, E, R> = makePrimitive({
  op: "Async",
  single: false,
  eval(fiber) {
    const register = this[args][0]
    let resumed = false
    let yielded: boolean | Primitive = false
    const controller = this[args][1] ? new AbortController() : undefined
    const onCancel = register((effect) => {
      if (resumed) return
      resumed = true
      if (yielded) {
        fiber.evaluate(effect as any)
      } else {
        yielded = effect as any
      }
    }, controller?.signal)
    if (yielded !== false) return yielded
    yielded = true
    fiber._yielded = () => {
      resumed = true
    }
    if (controller === undefined && onCancel === undefined) {
      return Yield
    }
    fiber._stack.push(asyncFinalizer(() => {
      resumed = true
      controller?.abort()
      return onCancel ?? exitVoid
    }))
    return Yield
  }
})
const asyncFinalizer: (onInterrupt: () => Micro<void, any, any>) => Primitive = makePrimitive({
  op: "AsyncFinalizer",
  ensure(fiber) {
    if (fiber.interruptible) {
      fiber.interruptible = false
      fiber._stack.push(setInterruptible(true))
    }
  },
  contE(cause, _fiber) {
    return causeIsInterrupt(cause)
      ? flatMap(this[args](), () => failCause(cause))
      : failCause(cause)
  }
})

/**
 * Create a `Micro` effect from an asynchronous computation.
 *
 * You can return a cleanup effect that will be run when the effect is aborted.
 * It is also passed an `AbortSignal` that is triggered when the effect is
 * aborted.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const async = <A, E = never, R = never>(
  register: (
    resume: (effect: Micro<A, E, R>) => void,
    signal: AbortSignal
  ) => void | Micro<void, never, R>
): Micro<A, E, R> => asyncOptions(register as any, register.length >= 2)

/**
 * A `Micro` that will never succeed or fail. It wraps `setInterval` to prevent
 * the Javascript runtime from exiting.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const never: Micro<never> = async<never>(function() {
  const interval = setInterval(constVoid, 2147483646)
  return sync(() => clearInterval(interval))
})

/**
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export const gen = <Self, Eff extends YieldWrap<Micro<any, any, any>>, AEff>(
  ...args:
    | [self: Self, body: (this: Self) => Generator<Eff, AEff, never>]
    | [body: () => Generator<Eff, AEff, never>]
): Micro<
  AEff,
  [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Micro<infer _A, infer E, infer _R>>] ? E : never,
  [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Micro<infer _A, infer _E, infer R>>] ? R : never
> => suspend(() => fromIterator(args.length === 1 ? args[0]() : args[1].call(args[0]) as any))

const fromIterator: (
  iterator: Iterator<any, YieldWrap<Micro<any, any, any>>>
) => Micro<any, any, any> = makePrimitive({
  op: "Iterator",
  contA(value, fiber) {
    const state = this[args].next(value)
    if (state.done) return succeed(state.value)
    fiber._stack.push(this)
    return yieldWrapGet(state.value)
  },
  eval(this: any, fiber: MicroFiberImpl) {
    return this[successCont](undefined, fiber)
  }
})

// ----------------------------------------------------------------------------
// mapping & sequencing
// ----------------------------------------------------------------------------

/**
 * Create a `Micro` effect that will replace the success value of the given
 * effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const as: {
  // ----------------------------------------------------------------------------
  // mapping & sequencing
  // ----------------------------------------------------------------------------

  /**
   * Create a `Micro` effect that will replace the success value of the given
   * effect.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, B>(value: B): <E, R>(self: Micro<A, E, R>) => Micro<B, E, R>
  // ----------------------------------------------------------------------------
  // mapping & sequencing
  // ----------------------------------------------------------------------------

  /**
   * Create a `Micro` effect that will replace the success value of the given
   * effect.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, E, R, B>(self: Micro<A, E, R>, value: B): Micro<B, E, R>
} = dual(2, <A, E, R, B>(self: Micro<A, E, R>, value: B): Micro<B, E, R> => map(self, (_) => value))

/**
 * Wrap the success value of this `Micro` effect in a `Some`.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const asSome = <A, E, R>(self: Micro<A, E, R>): Micro<Option.Option<A>, E, R> => map(self, Option.some)

/**
 * Swap the error and success types of the `Micro` effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const flip = <A, E, R>(self: Micro<A, E, R>): Micro<E, A, R> =>
  matchEffect(self, {
    onFailure: succeed,
    onSuccess: fail
  })

/**
 * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
 * single API.
 *
 * It also lets you directly pass a `Micro` effect, which will be executed after
 * the current effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const andThen: {
  /**
   * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
   * single API.
   *
   * It also lets you directly pass a `Micro` effect, which will be executed after
   * the current effect.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, X>(f: (a: A) => X): <E, R>(
    self: Micro<A, E, R>
  ) => [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1>
    : Micro<X, E, R>
  /**
   * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
   * single API.
   *
   * It also lets you directly pass a `Micro` effect, which will be executed after
   * the current effect.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <X>(f: NotFunction<X>): <A, E, R>(
    self: Micro<A, E, R>
  ) => [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1>
    : Micro<X, E, R>
  /**
   * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
   * single API.
   *
   * It also lets you directly pass a `Micro` effect, which will be executed after
   * the current effect.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, E, R, X>(self: Micro<A, E, R>, f: (a: A) => X): [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1>
    : Micro<X, E, R>
  /**
   * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
   * single API.
   *
   * It also lets you directly pass a `Micro` effect, which will be executed after
   * the current effect.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, E, R, X>(self: Micro<A, E, R>, f: NotFunction<X>): [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1>
    : Micro<X, E, R>
} = dual(
  2,
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: any): Micro<B, E | E2, R | R2> =>
    flatMap(self, (a) => {
      const value = isMicro(f) ? f : typeof f === "function" ? f(a) : f
      return isMicro(value) ? value : succeed(value)
    })
)

/**
 * Execute a side effect from the success value of the `Micro` effect.
 *
 * It is similar to the `andThen` api, but the success value is ignored.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const tap: {
  /**
   * Execute a side effect from the success value of the `Micro` effect.
   *
   * It is similar to the `andThen` api, but the success value is ignored.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, X>(f: (a: NoInfer<A>) => X): <E, R>(
    self: Micro<A, E, R>
  ) => [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1>
    : Micro<A, E, R>
  /**
   * Execute a side effect from the success value of the `Micro` effect.
   *
   * It is similar to the `andThen` api, but the success value is ignored.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <X>(f: NotFunction<X>): <A, E, R>(
    self: Micro<A, E, R>
  ) => [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1>
    : Micro<A, E, R>
  /**
   * Execute a side effect from the success value of the `Micro` effect.
   *
   * It is similar to the `andThen` api, but the success value is ignored.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, E, R, X>(self: Micro<A, E, R>, f: (a: NoInfer<A>) => X): [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1>
    : Micro<A, E, R>
  /**
   * Execute a side effect from the success value of the `Micro` effect.
   *
   * It is similar to the `andThen` api, but the success value is ignored.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, E, R, X>(self: Micro<A, E, R>, f: NotFunction<X>): [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1>
    : Micro<A, E, R>
} = dual(
  2,
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (a: A) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2> =>
    flatMap(self, (a) => {
      const value = isMicro(f) ? f : typeof f === "function" ? f(a) : f
      return isMicro(value) ? as(value, a) : succeed(a)
    })
)

/**
 * Replace the success value of the `Micro` effect with `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const asVoid = <A, E, R>(self: Micro<A, E, R>): Micro<void, E, R> => flatMap(self, (_) => exitVoid)

/**
 * Access the `MicroExit` of the given `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category mapping & sequencing
 */
export const exit = <A, E, R>(self: Micro<A, E, R>): Micro<MicroExit<A, E>, never, R> =>
  matchCause(self, {
    onFailure: exitFailCause,
    onSuccess: exitSucceed
  })

/**
 * Replace the error type of the given `Micro` with the full `MicroCause` object.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const sandbox = <A, E, R>(self: Micro<A, E, R>): Micro<A, MicroCause<E>, R> => catchAllCause(self, fail)

/**
 * Returns an effect that races all the specified effects,
 * yielding the value of the first effect to succeed with a value. Losers of
 * the race will be interrupted immediately
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const raceAll = <Eff extends Micro<any, any, any>>(
  all: Iterable<Eff>
): Micro<Micro.Success<Eff>, Micro.Error<Eff>, Micro.Context<Eff>> =>
  withMicroFiber((parent) =>
    async((resume) => {
      const effects = Arr.fromIterable(all)
      const len = effects.length
      let doneCount = 0
      let done = false
      const fibers = new Set<MicroFiber<any, any>>()
      const causes: Array<MicroCause<any>> = []
      const onExit = (exit: MicroExit<any, any>) => {
        doneCount++
        if (exit._tag === "Failure") {
          causes.push(exit.cause)
          if (doneCount >= len) {
            resume(failCause(causes[0]))
          }
          return
        }
        done = true
        resume(fibers.size === 0 ? exit : flatMap(uninterruptible(fiberInterruptAll(fibers)), () => exit))
      }

      for (let i = 0; i < len; i++) {
        if (done) break
        const fiber = unsafeFork(parent, interruptible(effects[i]), true, true)
        fibers.add(fiber)
        fiber.addObserver((exit) => {
          fibers.delete(fiber)
          onExit(exit)
        })
      }

      return fiberInterruptAll(fibers)
    })
  )

/**
 * Returns an effect that races all the specified effects,
 * yielding the value of the first effect to succeed or fail. Losers of
 * the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const raceAllFirst = <Eff extends Micro<any, any, any>>(
  all: Iterable<Eff>
): Micro<Micro.Success<Eff>, Micro.Error<Eff>, Micro.Context<Eff>> =>
  withMicroFiber((parent) =>
    async((resume) => {
      let done = false
      const fibers = new Set<MicroFiber<any, any>>()
      const onExit = (exit: MicroExit<any, any>) => {
        done = true
        resume(fibers.size === 0 ? exit : flatMap(fiberInterruptAll(fibers), () => exit))
      }

      for (const effect of all) {
        if (done) break
        const fiber = unsafeFork(parent, interruptible(effect), true, true)
        fibers.add(fiber)
        fiber.addObserver((exit) => {
          fibers.delete(fiber)
          onExit(exit)
        })
      }

      return fiberInterruptAll(fibers)
    })
  )

/**
 * Returns an effect that races two effects, yielding the value of the first
 * effect to succeed. Losers of the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const race: {
  /**
   * Returns an effect that races two effects, yielding the value of the first
   * effect to succeed. Losers of the race will be interrupted immediately.
   *
   * @since 3.4.0
   * @experimental
   * @category sequencing
   */
  <A2, E2, R2>(that: Micro<A2, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<A | A2, E | E2, R | R2>
  /**
   * Returns an effect that races two effects, yielding the value of the first
   * effect to succeed. Losers of the race will be interrupted immediately.
   *
   * @since 3.4.0
   * @experimental
   * @category sequencing
   */
  <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>): Micro<A | A2, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>): Micro<A | A2, E | E2, R | R2> =>
    raceAll([self, that])
)

/**
 * Returns an effect that races two effects, yielding the value of the first
 * effect to succeed *or* fail. Losers of the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export const raceFirst: {
  /**
   * Returns an effect that races two effects, yielding the value of the first
   * effect to succeed *or* fail. Losers of the race will be interrupted immediately.
   *
   * @since 3.4.0
   * @experimental
   * @category sequencing
   */
  <A2, E2, R2>(that: Micro<A2, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<A | A2, E | E2, R | R2>
  /**
   * Returns an effect that races two effects, yielding the value of the first
   * effect to succeed *or* fail. Losers of the race will be interrupted immediately.
   *
   * @since 3.4.0
   * @experimental
   * @category sequencing
   */
  <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>): Micro<A | A2, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>): Micro<A | A2, E | E2, R | R2> =>
    raceAllFirst([self, that])
)

/**
 * Map the success value of this `Micro` effect to another `Micro` effect, then
 * flatten the result.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const flatMap: {
  /**
   * Map the success value of this `Micro` effect to another `Micro` effect, then
   * flatten the result.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, B, E2, R2>(f: (a: A) => Micro<B, E2, R2>): <E, R>(self: Micro<A, E, R>) => Micro<B, E | E2, R | R2>
  /**
   * Map the success value of this `Micro` effect to another `Micro` effect, then
   * flatten the result.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (a: A) => Micro<B, E2, R2>): Micro<B, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    f: (a: A) => Micro<B, E2, R2>
  ): Micro<B, E | E2, R | R2> => {
    const onSuccess = Object.create(OnSuccessProto)
    onSuccess[args] = self
    onSuccess[successCont] = f
    return onSuccess
  }
)
const OnSuccessProto = makePrimitiveProto({
  op: "OnSuccess",
  eval(this: any, fiber: MicroFiberImpl): Primitive {
    fiber._stack.push(this)
    return this[args]
  }
})

// ----------------------------------------------------------------------------
// mapping & sequencing
// ----------------------------------------------------------------------------

/**
 * Flattens any nested `Micro` effects, merging the error and requirement types.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const flatten = <A, E, R, E2, R2>(
  self: Micro<Micro<A, E, R>, E2, R2>
): Micro<A, E | E2, R | R2> => flatMap(self, identity)

/**
 * Transforms the success value of the `Micro` effect with the specified
 * function.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export const map: {
  /**
   * Transforms the success value of the `Micro` effect with the specified
   * function.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, B>(f: (a: A) => B): <E, R>(self: Micro<A, E, R>) => Micro<B, E, R>
  /**
   * Transforms the success value of the `Micro` effect with the specified
   * function.
   *
   * @since 3.4.0
   * @experimental
   * @category mapping & sequencing
   */
  <A, E, R, B>(self: Micro<A, E, R>, f: (a: A) => B): Micro<B, E, R>
} = dual(
  2,
  <A, E, R, B>(self: Micro<A, E, R>, f: (a: A) => B): Micro<B, E, R> => flatMap(self, (a) => succeed(f(a)))
)

// ----------------------------------------------------------------------------
// MicroExit
// ----------------------------------------------------------------------------

/**
 * The `MicroExit` type is used to represent the result of a `Micro` computation. It
 * can either be successful, containing a value of type `A`, or it can fail,
 * containing an error of type `E` wrapped in a `MicroCause`.
 *
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export type MicroExit<A, E = never> =
  | MicroExit.Success<A, E>
  | MicroExit.Failure<A, E>

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare namespace MicroExit {
  /**
   * @since 3.4.6
   * @experimental
   * @category MicroExit
   */
  export interface Proto<out A, out E = never> extends Micro<A, E> {
    readonly [MicroExitTypeId]: MicroExitTypeId
  }

  /**
   * @since 3.4.6
   * @experimental
   * @category MicroExit
   */
  export interface Success<out A, out E> extends Proto<A, E> {
    readonly _tag: "Success"
    readonly value: A
  }

  /**
   * @since 3.4.6
   * @experimental
   * @category MicroExit
   */
  export interface Failure<out A, out E> extends Proto<A, E> {
    readonly _tag: "Failure"
    readonly cause: MicroCause<E>
  }
}

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const isMicroExit = (u: unknown): u is MicroExit<unknown, unknown> => hasProperty(u, MicroExitTypeId)

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitSucceed: <A>(a: A) => MicroExit<A, never> = succeed as any

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitFailCause: <E>(cause: MicroCause<E>) => MicroExit<never, E> = failCause as any

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitInterrupt: MicroExit<never> = exitFailCause(causeInterrupt())

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitFail = <E>(e: E): MicroExit<never, E> => exitFailCause(causeFail(e))

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitDie = (defect: unknown): MicroExit<never> => exitFailCause(causeDie(defect))

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsSuccess = <A, E>(
  self: MicroExit<A, E>
): self is MicroExit.Success<A, E> => self._tag === "Success"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsFailure = <A, E>(
  self: MicroExit<A, E>
): self is MicroExit.Failure<A, E> => self._tag === "Failure"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsInterrupt = <A, E>(
  self: MicroExit<A, E>
): self is MicroExit.Failure<A, E> & {
  readonly cause: MicroCause.Interrupt
} => exitIsFailure(self) && self.cause._tag === "Interrupt"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsFail = <A, E>(
  self: MicroExit<A, E>
): self is MicroExit.Failure<A, E> & {
  readonly cause: MicroCause.Fail<E>
} => exitIsFailure(self) && self.cause._tag === "Fail"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitIsDie = <A, E>(
  self: MicroExit<A, E>
): self is MicroExit.Failure<A, E> & {
  readonly cause: MicroCause.Die
} => exitIsFailure(self) && self.cause._tag === "Die"

/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export const exitVoid: MicroExit<void> = exitSucceed(void 0)

/**
 * @since 3.11.0
 * @experimental
 * @category MicroExit
 */
export const exitVoidAll = <I extends Iterable<MicroExit<any, any>>>(
  exits: I
): MicroExit<void, I extends Iterable<MicroExit<infer _A, infer _E>> ? _E : never> => {
  for (const exit of exits) {
    if (exit._tag === "Failure") {
      return exit
    }
  }
  return exitVoid
}

// ----------------------------------------------------------------------------
// scheduler
// ----------------------------------------------------------------------------

/**
 * @since 3.5.9
 * @experimental
 * @category scheduler
 */
export interface MicroScheduler {
  readonly scheduleTask: (task: () => void, priority: number) => void
  readonly shouldYield: (fiber: MicroFiber<unknown, unknown>) => boolean
  readonly flush: () => void
}

const setImmediate = "setImmediate" in globalThis
  ? globalThis.setImmediate
  : (f: () => void) => setTimeout(f, 0)

/**
 * @since 3.5.9
 * @experimental
 * @category scheduler
 */
export class MicroSchedulerDefault implements MicroScheduler {
  private tasks: Array<() => void> = []
  private running = false

  /**
   * @since 3.5.9
   */
  scheduleTask(task: () => void, _priority: number) {
    this.tasks.push(task)
    if (!this.running) {
      this.running = true
      setImmediate(this.afterScheduled)
    }
  }

  /**
   * @since 3.5.9
   */
  afterScheduled = () => {
    this.running = false
    this.runTasks()
  }

  /**
   * @since 3.5.9
   */
  runTasks() {
    const tasks = this.tasks
    this.tasks = []
    for (let i = 0, len = tasks.length; i < len; i++) {
      tasks[i]()
    }
  }

  /**
   * @since 3.5.9
   */
  shouldYield(fiber: MicroFiber<unknown, unknown>) {
    return fiber.currentOpCount >= fiber.getRef(MaxOpsBeforeYield)
  }

  /**
   * @since 3.5.9
   */
  flush() {
    while (this.tasks.length > 0) {
      this.runTasks()
    }
  }
}

/**
 * Access the given `Context.Tag` from the environment.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const service: {
  /**
   * Access the given `Context.Tag` from the environment.
   *
   * @since 3.4.0
   * @experimental
   * @category environment
   */
  <I, S>(tag: Context.Reference<I, S>): Micro<S>
  /**
   * Access the given `Context.Tag` from the environment.
   *
   * @since 3.4.0
   * @experimental
   * @category environment
   */
  <I, S>(tag: Context.Tag<I, S>): Micro<S, never, I>
} =
  (<I, S>(tag: Context.Tag<I, S>): Micro<S, never, I> =>
    withMicroFiber((fiber) => succeed(Context.unsafeGet(fiber.context, tag)))) as any

/**
 * Access the given `Context.Tag` from the environment, without tracking the
 * dependency at the type level.
 *
 * It will return an `Option` of the service, depending on whether it is
 * available in the environment or not.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const serviceOption = <I, S>(
  tag: Context.Tag<I, S>
): Micro<Option.Option<S>> => withMicroFiber((fiber) => succeed(Context.getOption(fiber.context, tag)))

/**
 * Update the Context with the given mapping function.
 *
 * @since 3.11.0
 * @experimental
 * @category environment
 */
export const updateContext: {
  /**
   * Update the Context with the given mapping function.
   *
   * @since 3.11.0
   * @experimental
   * @category environment
   */
  <R2, R>(f: (context: Context.Context<R2>) => Context.Context<NoInfer<R>>): <A, E>(self: Micro<A, E, R>) => Micro<A, E, R2>
  /**
   * Update the Context with the given mapping function.
   *
   * @since 3.11.0
   * @experimental
   * @category environment
   */
  <A, E, R, R2>(
    self: Micro<A, E, R>,
    f: (context: Context.Context<R2>) => Context.Context<NoInfer<R>>
  ): Micro<A, E, R2>
} = dual(
  2,
  <A, E, R, R2>(
    self: Micro<A, E, R>,
    f: (context: Context.Context<R2>) => Context.Context<NoInfer<R>>
  ): Micro<A, E, R2> =>
    withMicroFiber</**
     * Update the Context with the given mapping function.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    A, /**
     * Update the Context with the given mapping function.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    E, /**
     * Update the Context with the given mapping function.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    R2>((fiber) => {
      const prev = fiber.context as Context.Context<R2>
      fiber.context = f(prev)
      return onExit(
        self as any,
        () => {
          fiber.context = prev
          return void_
        }
      )
    })
)

/**
 * Update the service for the given `Context.Tag` in the environment.
 *
 * @since 3.11.0
 * @experimental
 * @category environment
 */
export const updateService: {
  /**
   * Update the service for the given `Context.Tag` in the environment.
   *
   * @since 3.11.0
   * @experimental
   * @category environment
   */
  <I, A>(tag: Context.Reference<I, A>, f: (value: A) => A): <XA, E, R>(self: Micro<XA, E, R>) => Micro<XA, E, R>
  /**
   * Update the service for the given `Context.Tag` in the environment.
   *
   * @since 3.11.0
   * @experimental
   * @category environment
   */
  <I, A>(tag: Context.Tag<I, A>, f: (value: A) => A): <XA, E, R>(self: Micro<XA, E, R>) => Micro<XA, E, R | I>
  /**
   * Update the service for the given `Context.Tag` in the environment.
   *
   * @since 3.11.0
   * @experimental
   * @category environment
   */
  <XA, E, R, I, A>(self: Micro<XA, E, R>, tag: Context.Reference<I, A>, f: (value: A) => A): Micro<XA, E, R>
  /**
   * Update the service for the given `Context.Tag` in the environment.
   *
   * @since 3.11.0
   * @experimental
   * @category environment
   */
  <XA, E, R, I, A>(self: Micro<XA, E, R>, tag: Context.Tag<I, A>, f: (value: A) => A): Micro<XA, E, R | I>
} = dual(
  3,
  <XA, E, R, I, A>(
    self: Micro<XA, E, R>,
    tag: Context.Reference<I, A>,
    f: (value: A) => A
  ): Micro<XA, E, R> =>
    withMicroFiber((fiber) => {
      const prev = Context.unsafeGet(fiber.context, tag)
      fiber.context = Context.add(fiber.context, tag, f(prev))
      return onExit(
        self,
        () => {
          fiber.context = Context.add(fiber.context, tag, prev)
          return void_
        }
      )
    })
)

/**
 * Access the current `Context` from the environment.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const context = <R>(): Micro<Context.Context<R>> => getContext as any
const getContext = withMicroFiber((fiber) => succeed(fiber.context))

/**
 * Merge the given `Context` with the current context.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const provideContext: {
  /**
   * Merge the given `Context` with the current context.
   *
   * @since 3.4.0
   * @experimental
   * @category environment
   */
  <XR>(context: Context.Context<XR>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, Exclude<R, XR>>
  /**
   * Merge the given `Context` with the current context.
   *
   * @since 3.4.0
   * @experimental
   * @category environment
   */
  <A, E, R, XR>(self: Micro<A, E, R>, context: Context.Context<XR>): Micro<A, E, Exclude<R, XR>>
} = dual(
  2,
  <A, E, R, XR>(
    self: Micro<A, E, R>,
    provided: Context.Context<XR>
  ): Micro<A, E, Exclude<R, XR>> => updateContext(self, Context.merge(provided)) as any
)

/**
 * Add the provided service to the current context.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export const provideService: {
  /**
   * Add the provided service to the current context.
   *
   * @since 3.4.0
   * @experimental
   * @category environment
   */
  <I, S>(tag: Context.Tag<I, S>, service: S): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, Exclude<R, I>>
  /**
   * Add the provided service to the current context.
   *
   * @since 3.4.0
   * @experimental
   * @category environment
   */
  <A, E, R, I, S>(self: Micro<A, E, R>, tag: Context.Tag<I, S>, service: S): Micro<A, E, Exclude<R, I>>
} = dual(
  3,
  <A, E, R, I, S>(
    self: Micro<A, E, R>,
    tag: Context.Tag<I, S>,
    service: S
  ): Micro<A, E, Exclude<R, I>> => updateContext(self, Context.add(tag, service)) as any
)

/**
 * Create a service using the provided `Micro` effect, and add it to the
 * current context.
 *
 * @since 3.4.6
 * @experimental
 * @category environment
 */
export const provideServiceEffect: {
  /**
   * Create a service using the provided `Micro` effect, and add it to the
   * current context.
   *
   * @since 3.4.6
   * @experimental
   * @category environment
   */
  <I, S, E2, R2>(tag: Context.Tag<I, S>, acquire: Micro<S, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | E2, Exclude<R, I> | R2>
  /**
   * Create a service using the provided `Micro` effect, and add it to the
   * current context.
   *
   * @since 3.4.6
   * @experimental
   * @category environment
   */
  <A, E, R, I, S, E2, R2>(self: Micro<A, E, R>, tag: Context.Tag<I, S>, acquire: Micro<S, E2, R2>): Micro<A, E | E2, Exclude<R, I> | R2>
} = dual(
  3,
  <A, E, R, I, S, E2, R2>(
    self: Micro<A, E, R>,
    tag: Context.Tag<I, S>,
    acquire: Micro<S, E2, R2>
  ): Micro<A, E | E2, Exclude<R, I> | R2> => flatMap(acquire, (service) => provideService(self, tag, service))
)

// ========================================================================
// References
// ========================================================================

/**
 * @since 3.11.0
 * @experimental
 * @category references
 */
export class MaxOpsBeforeYield extends Context.Reference<MaxOpsBeforeYield>()<
  "effect/Micro/currentMaxOpsBeforeYield",
  number
>(
  "effect/Micro/currentMaxOpsBeforeYield",
  { defaultValue: () => 2048 }
) {}

/**
 * @since 3.11.0
 * @experimental
 * @category environment refs
 */
export class CurrentConcurrency extends Context.Reference<CurrentConcurrency>()<
  "effect/Micro/currentConcurrency",
  "unbounded" | number
>(
  "effect/Micro/currentConcurrency",
  { defaultValue: () => "unbounded" }
) {}

/**
 * @since 3.11.0
 * @experimental
 * @category environment refs
 */
export class CurrentScheduler extends Context.Reference<CurrentScheduler>()<
  "effect/Micro/currentScheduler",
  MicroScheduler
>(
  "effect/Micro/currentScheduler",
  { defaultValue: () => new MicroSchedulerDefault() }
) {}

/**
 * If you have a `Micro` that uses `concurrency: "inherit"`, you can use this
 * api to control the concurrency of that `Micro` when it is run.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * Micro.forEach([1, 2, 3], (n) => Micro.succeed(n), {
 *   concurrency: "inherit"
 * }).pipe(
 *   Micro.withConcurrency(2) // use a concurrency of 2
 * )
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category environment refs
 */
export const withConcurrency: {
  /**
   * If you have a `Micro` that uses `concurrency: "inherit"`, you can use this
   * api to control the concurrency of that `Micro` when it is run.
   *
   * @example
   * ```ts
   * import * as Micro from "effect/Micro"
   *
   * Micro.forEach([1, 2, 3], (n) => Micro.succeed(n), {
   *   concurrency: "inherit"
   * }).pipe(
   *   Micro.withConcurrency(2) // use a concurrency of 2
   * )
   * ```
   *
   * @since 3.4.0
   * @experimental
   * @category environment refs
   */
  (concurrency: "unbounded" | number): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>
  /**
   * If you have a `Micro` that uses `concurrency: "inherit"`, you can use this
   * api to control the concurrency of that `Micro` when it is run.
   *
   * @example
   * ```ts
   * import * as Micro from "effect/Micro"
   *
   * Micro.forEach([1, 2, 3], (n) => Micro.succeed(n), {
   *   concurrency: "inherit"
   * }).pipe(
   *   Micro.withConcurrency(2) // use a concurrency of 2
   * )
   * ```
   *
   * @since 3.4.0
   * @experimental
   * @category environment refs
   */
  <A, E, R>(self: Micro<A, E, R>, concurrency: "unbounded" | number): Micro<A, E, R>
} = dual(
  2,
  <A, E, R>(
    self: Micro<A, E, R>,
    concurrency: "unbounded" | number
  ): Micro<A, E, R> => provideService(self, CurrentConcurrency, concurrency)
)

// ----------------------------------------------------------------------------
// zipping
// ----------------------------------------------------------------------------

/**
 * Combine two `Micro` effects into a single effect that produces a tuple of
 * their results.
 *
 * @since 3.4.0
 * @experimental
 * @category zipping
 */
export const zip: {
  // ----------------------------------------------------------------------------
  // zipping
  // ----------------------------------------------------------------------------

  /**
   * Combine two `Micro` effects into a single effect that produces a tuple of
   * their results.
   *
   * @since 3.4.0
   * @experimental
   * @category zipping
   */
  <A2, E2, R2>(
    that: Micro<A2, E2, R2>,
    options?:
      | { readonly concurrent?: boolean | undefined }
      | undefined
  ): <A, E, R>(self: Micro<A, E, R>) => Micro<[A, A2], E2 | E, R2 | R>
  // ----------------------------------------------------------------------------
  // zipping
  // ----------------------------------------------------------------------------

  /**
   * Combine two `Micro` effects into a single effect that produces a tuple of
   * their results.
   *
   * @since 3.4.0
   * @experimental
   * @category zipping
   */
  <A, E, R, A2, E2, R2>(
    self: Micro<A, E, R>,
    that: Micro<A2, E2, R2>,
    options?: { readonly concurrent?: boolean | undefined }
  ): Micro<[A, A2], E | E2, R | R2>
} = dual((args) => isMicro(args[1]), <A, E, R, A2, E2, R2>(
  self: Micro<A, E, R>,
  that: Micro<A2, E2, R2>,
  options?: { readonly concurrent?: boolean | undefined }
): Micro<[A, A2], E | E2, R | R2> => zipWith(self, that, (a, a2) => [a, a2], options))

/**
 * The `Micro.zipWith` function combines two `Micro` effects and allows you to
 * apply a function to the results of the combined effects, transforming them
 * into a single value.
 *
 * @since 3.4.3
 * @experimental
 * @category zipping
 */
export const zipWith: {
  /**
   * The `Micro.zipWith` function combines two `Micro` effects and allows you to
   * apply a function to the results of the combined effects, transforming them
   * into a single value.
   *
   * @since 3.4.3
   * @experimental
   * @category zipping
   */
  <A2, E2, R2, A, B>(
    that: Micro<A2, E2, R2>,
    f: (a: A, b: A2) => B,
    options?: { readonly concurrent?: boolean | undefined }
  ): <E, R>(self: Micro<A, E, R>) => Micro<B, E2 | E, R2 | R>
  /**
   * The `Micro.zipWith` function combines two `Micro` effects and allows you to
   * apply a function to the results of the combined effects, transforming them
   * into a single value.
   *
   * @since 3.4.3
   * @experimental
   * @category zipping
   */
  <A, E, R, A2, E2, R2, B>(
    self: Micro<A, E, R>,
    that: Micro<A2, E2, R2>,
    f: (a: A, b: A2) => B,
    options?: { readonly concurrent?: boolean | undefined }
  ): Micro<B, E2 | E, R2 | R>
} = dual((args) => isMicro(args[1]), <A, E, R, A2, E2, R2, B>(
  self: Micro<A, E, R>,
  that: Micro<A2, E2, R2>,
  f: (a: A, b: A2) => B,
  options?: { readonly concurrent?: boolean | undefined }
): Micro<B, E2 | E, R2 | R> =>
  options?.concurrent
    // Use `all` exclusively for concurrent cases, as it introduces additional overhead due to the management of concurrency
    ? map(all([self, that], { concurrency: 2 }), ([a, a2]) => f(a, a2))
    : flatMap(self, (a) => map(that, (a2) => f(a, a2))))

// ----------------------------------------------------------------------------
// filtering & conditionals
// ----------------------------------------------------------------------------

/**
 * Filter the specified effect with the provided function, failing with specified
 * `MicroCause` if the predicate fails.
 *
 * In addition to the filtering capabilities discussed earlier, you have the option to further
 * refine and narrow down the type of the success channel by providing a
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export const filterOrFailCause: {
  // ----------------------------------------------------------------------------
  // filtering & conditionals
  // ----------------------------------------------------------------------------

  /**
   * Filter the specified effect with the provided function, failing with specified
   * `MicroCause` if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, B extends A, E2>(
    refinement: Refinement<A, B>,
    orFailWith: (a: NoInfer<A>) => MicroCause<E2>
  ): <E, R>(self: Micro<A, E, R>) => Micro<B, E2 | E, R>
  // ----------------------------------------------------------------------------
  // filtering & conditionals
  // ----------------------------------------------------------------------------

  /**
   * Filter the specified effect with the provided function, failing with specified
   * `MicroCause` if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, E2>(
    predicate: Predicate<NoInfer<A>>,
    orFailWith: (a: NoInfer<A>) => MicroCause<E2>
  ): <E, R>(self: Micro<A, E, R>) => Micro<A, E2 | E, R>
  // ----------------------------------------------------------------------------
  // filtering & conditionals
  // ----------------------------------------------------------------------------

  /**
   * Filter the specified effect with the provided function, failing with specified
   * `MicroCause` if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, E, R, B extends A, E2>(
    self: Micro<A, E, R>,
    refinement: Refinement<A, B>,
    orFailWith: (a: A) => MicroCause<E2>
  ): Micro<B, E | E2, R>
  // ----------------------------------------------------------------------------
  // filtering & conditionals
  // ----------------------------------------------------------------------------

  /**
   * Filter the specified effect with the provided function, failing with specified
   * `MicroCause` if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, E, R, E2>(
    self: Micro<A, E, R>,
    predicate: Predicate<A>,
    orFailWith: (a: A) => MicroCause<E2>
  ): Micro<A, E | E2, R>
} = dual((args) => isMicro(args[0]), <A, E, R, B extends A, E2>(
  self: Micro<A, E, R>,
  refinement: Refinement<A, B>,
  orFailWith: (a: A) => MicroCause<E2>
): Micro<B, E | E2, R> => flatMap(self, (a) => refinement(a) ? succeed(a) : failCause(orFailWith(a))))

/**
 * Filter the specified effect with the provided function, failing with specified
 * error if the predicate fails.
 *
 * In addition to the filtering capabilities discussed earlier, you have the option to further
 * refine and narrow down the type of the success channel by providing a
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export const filterOrFail: {
  /**
   * Filter the specified effect with the provided function, failing with specified
   * error if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, B extends A, E2>(refinement: Refinement<A, B>, orFailWith: (a: NoInfer<A>) => E2): <E, R>(self: Micro<A, E, R>) => Micro<B, E2 | E, R>
  /**
   * Filter the specified effect with the provided function, failing with specified
   * error if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, E2>(predicate: Predicate<NoInfer<A>>, orFailWith: (a: NoInfer<A>) => E2): <E, R>(self: Micro<A, E, R>) => Micro<A, E2 | E, R>
  /**
   * Filter the specified effect with the provided function, failing with specified
   * error if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, E, R, B extends A, E2>(
    self: Micro<A, E, R>,
    refinement: Refinement<A, B>,
    orFailWith: (a: A) => E2
  ): Micro<B, E | E2, R>
  /**
   * Filter the specified effect with the provided function, failing with specified
   * error if the predicate fails.
   *
   * In addition to the filtering capabilities discussed earlier, you have the option to further
   * refine and narrow down the type of the success channel by providing a
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, E, R, E2>(self: Micro<A, E, R>, predicate: Predicate<A>, orFailWith: (a: A) => E2): Micro<A, E | E2, R>
} = dual((args) => isMicro(args[0]), <A, E, R, B extends A, E2>(
  self: Micro<A, E, R>,
  refinement: Refinement<A, B>,
  orFailWith: (a: A) => E2
): Micro<B, E | E2, R> => flatMap(self, (a) => refinement(a) ? succeed(a) : fail(orFailWith(a))))

/**
 * The moral equivalent of `if (p) exp`.
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export const when: {
  /**
   * The moral equivalent of `if (p) exp`.
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <E2 = never, R2 = never>(condition: LazyArg<boolean> | Micro<boolean, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<Option.Option<A>, E | E2, R | R2>
  /**
   * The moral equivalent of `if (p) exp`.
   *
   * @since 3.4.0
   * @experimental
   * @category filtering & conditionals
   */
  <A, E, R, E2 = never, R2 = never>(self: Micro<A, E, R>, condition: LazyArg<boolean> | Micro<boolean, E2, R2>): Micro<Option.Option<A>, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, E2 = never, R2 = never>(
    self: Micro<A, E, R>,
    condition: LazyArg<boolean> | Micro<boolean, E2, R2>
  ): Micro<Option.Option<A>, E | E2, R | R2> =>
    flatMap(isMicro(condition) ? condition : sync(condition), (pass) => pass ? asSome(self) : succeedNone)
)

// ----------------------------------------------------------------------------
// repetition
// ----------------------------------------------------------------------------

/**
 * Repeat the given `Micro` using the provided options.
 *
 * The `while` predicate will be checked after each iteration, and can use the
 * fall `MicroExit` of the effect to determine if the repetition should continue.
 *
 * @since 3.4.6
 * @experimental
 * @category repetition
 */
export const repeatExit: {
  // ----------------------------------------------------------------------------
  // repetition
  // ----------------------------------------------------------------------------

  /**
   * Repeat the given `Micro` using the provided options.
   *
   * The `while` predicate will be checked after each iteration, and can use the
   * fall `MicroExit` of the effect to determine if the repetition should continue.
   *
   * @since 3.4.6
   * @experimental
   * @category repetition
   */
  <A, E>(
    options: {
      while: Predicate<MicroExit<A, E>>
      times?: number | undefined
      schedule?: MicroSchedule | undefined
    }
  ): <R>(self: Micro<A, E, R>) => Micro<A, E, R>
  // ----------------------------------------------------------------------------
  // repetition
  // ----------------------------------------------------------------------------

  /**
   * Repeat the given `Micro` using the provided options.
   *
   * The `while` predicate will be checked after each iteration, and can use the
   * fall `MicroExit` of the effect to determine if the repetition should continue.
   *
   * @since 3.4.6
   * @experimental
   * @category repetition
   */
  <A, E, R>(
    self: Micro<A, E, R>,
    options: {
      while: Predicate<MicroExit<A, E>>
      times?: number | undefined
      schedule?: MicroSchedule | undefined
    }
  ): Micro<A, E, R>
} = dual(2, <A, E, R>(self: Micro<A, E, R>, options: {
  while: Predicate<MicroExit<A, E>>
  times?: number | undefined
  schedule?: MicroSchedule | undefined
}): Micro<A, E, R> =>
  suspend(() => {
    const startedAt = options.schedule ? Date.now() : 0
    let attempt = 0

    const loop: Micro<A, E, R> = flatMap(exit(self), (exit) => {
      if (options.while !== undefined && !options.while(exit)) {
        return exit
      } else if (options.times !== undefined && attempt >= options.times) {
        return exit
      }
      attempt++
      let delayEffect = yieldNow
      if (options.schedule !== undefined) {
        const elapsed = Date.now() - startedAt
        const duration = options.schedule(attempt, elapsed)
        if (Option.isNone(duration)) {
          return exit
        }
        delayEffect = sleep(duration.value)
      }
      return flatMap(delayEffect, () => loop)
    })

    return loop
  }))

/**
 * Repeat the given `Micro` effect using the provided options. Only successful
 * results will be repeated.
 *
 * @since 3.4.0
 * @experimental
 * @category repetition
 */
export const repeat: {
  /**
   * Repeat the given `Micro` effect using the provided options. Only successful
   * results will be repeated.
   *
   * @since 3.4.0
   * @experimental
   * @category repetition
   */
  <A, E>(
    options?: {
      while?: Predicate<A> | undefined
      times?: number | undefined
      schedule?: MicroSchedule | undefined
    } | undefined
  ): <R>(self: Micro<A, E, R>) => Micro<A, E, R>
  /**
   * Repeat the given `Micro` effect using the provided options. Only successful
   * results will be repeated.
   *
   * @since 3.4.0
   * @experimental
   * @category repetition
   */
  <A, E, R>(
    self: Micro<A, E, R>,
    options?: {
      while?: Predicate<A> | undefined
      times?: number | undefined
      schedule?: MicroSchedule | undefined
    } | undefined
  ): Micro<A, E, R>
} = dual((args) => isMicro(args[0]), <A, E, R>(
  self: Micro<A, E, R>,
  options?: {
    while?: Predicate<A> | undefined
    times?: number | undefined
    schedule?: MicroSchedule | undefined
  } | undefined
): Micro<A, E, R> =>
  repeatExit(self, {
    ...options,
    while: (exit) => exit._tag === "Success" && (options?.while === undefined || options.while(exit.value))
  }))

/**
 * Replicates the given effect `n` times.
 *
 * @since 3.11.0
 * @experimental
 * @category repetition
 */
export const replicate: {
  /**
   * Replicates the given effect `n` times.
   *
   * @since 3.11.0
   * @experimental
   * @category repetition
   */
  (n: number): <A, E, R>(self: Micro<A, E, R>) => Array<Micro<A, E, R>>
  /**
   * Replicates the given effect `n` times.
   *
   * @since 3.11.0
   * @experimental
   * @category repetition
   */
  <A, E, R>(self: Micro<A, E, R>, n: number): Array<Micro<A, E, R>>
} = dual(
  2,
  <A, E, R>(self: Micro<A, E, R>, n: number): Array<Micro<A, E, R>> => Array.from({ length: n }, () => self)
)

/**
 * Performs this effect the specified number of times and collects the
 * results.
 *
 * @since 3.11.0
 * @category repetition
 */
export const replicateEffect: {
  /**
   * Performs this effect the specified number of times and collects the
   * results.
   *
   * @since 3.11.0
   * @category repetition
   */
  (
    n: number,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly discard?: false | undefined
    }
  ): <A, E, R>(self: Micro<A, E, R>) => Micro<Array<A>, E, R>
  /**
   * Performs this effect the specified number of times and collects the
   * results.
   *
   * @since 3.11.0
   * @category repetition
   */
  (
    n: number,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly discard: true
    }
  ): <A, E, R>(self: Micro<A, E, R>) => Micro<void, E, R>
  /**
   * Performs this effect the specified number of times and collects the
   * results.
   *
   * @since 3.11.0
   * @category repetition
   */
  <A, E, R>(
    self: Micro<A, E, R>,
    n: number,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly discard?: false | undefined
    }
  ): Micro<Array<A>, E, R>
  /**
   * Performs this effect the specified number of times and collects the
   * results.
   *
   * @since 3.11.0
   * @category repetition
   */
  <A, E, R>(
    self: Micro<A, E, R>,
    n: number,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly discard: true
    }
  ): Micro<void, E, R>
} = dual(
  (args) => isMicro(args[0]),
  <A, E, R>(
    self: Micro<A, E, R>,
    n: number,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly discard: true
    }
  ): Micro<void, E, R> => all(replicate(self, n), options)
)

/**
 * Repeat the given `Micro` effect forever, only stopping if the effect fails.
 *
 * @since 3.4.0
 * @experimental
 * @category repetition
 */
export const forever = <A, E, R>(self: Micro<A, E, R>): Micro<never, E, R> => repeat(self) as any

// ----------------------------------------------------------------------------
// scheduling
// ----------------------------------------------------------------------------

/**
 * The `MicroSchedule` type represents a function that can be used to calculate
 * the delay between repeats.
 *
 * The function takes the current attempt number and the elapsed time since the
 * first attempt, and returns the delay for the next attempt. If the function
 * returns `None`, the repetition will stop.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export type MicroSchedule = (attempt: number, elapsed: number) => Option.Option<number>

/**
 * Create a `MicroSchedule` that will stop repeating after the specified number
 * of attempts.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleRecurs = (n: number): MicroSchedule => (attempt) => attempt <= n ? Option.some(0) : Option.none()

/**
 * Create a `MicroSchedule` that will generate a constant delay.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleSpaced = (millis: number): MicroSchedule => () => Option.some(millis)

/**
 * Create a `MicroSchedule` that will generate a delay with an exponential backoff.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleExponential = (baseMillis: number, factor = 2): MicroSchedule => (attempt) =>
  Option.some(Math.pow(factor, attempt) * baseMillis)

/**
 * Returns a new `MicroSchedule` with an added calculated delay to each delay
 * returned by this schedule.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleAddDelay: {
  /**
   * Returns a new `MicroSchedule` with an added calculated delay to each delay
   * returned by this schedule.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (f: () => number): (self: MicroSchedule) => MicroSchedule
  /**
   * Returns a new `MicroSchedule` with an added calculated delay to each delay
   * returned by this schedule.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (self: MicroSchedule, f: () => number): MicroSchedule
} = dual(
  2,
  (self: MicroSchedule, f: () => number): MicroSchedule => (attempt, elapsed) =>
    Option.map(self(attempt, elapsed), (duration) => duration + f())
)

/**
 * Transform a `MicroSchedule` to one that will have a delay that will never exceed
 * the specified maximum.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleWithMaxDelay: {
  /**
   * Transform a `MicroSchedule` to one that will have a delay that will never exceed
   * the specified maximum.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (max: number): (self: MicroSchedule) => MicroSchedule
  /**
   * Transform a `MicroSchedule` to one that will have a delay that will never exceed
   * the specified maximum.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (self: MicroSchedule, max: number): MicroSchedule
} = dual(
  2,
  (self: MicroSchedule, max: number): MicroSchedule => (attempt, elapsed) =>
    Option.map(self(attempt, elapsed), (duration) => Math.min(duration, max))
)

/**
 * Transform a `MicroSchedule` to one that will stop repeating after the specified
 * amount of time.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleWithMaxElapsed: {
  /**
   * Transform a `MicroSchedule` to one that will stop repeating after the specified
   * amount of time.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (max: number): (self: MicroSchedule) => MicroSchedule
  /**
   * Transform a `MicroSchedule` to one that will stop repeating after the specified
   * amount of time.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (self: MicroSchedule, max: number): MicroSchedule
} = dual(
  2,
  (self: MicroSchedule, max: number): MicroSchedule => (attempt, elapsed) =>
    elapsed < max ? self(attempt, elapsed) : Option.none()
)

/**
 * Combines two `MicroSchedule`s, by recurring if either schedule wants to
 * recur, using the minimum of the two durations between recurrences.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleUnion: {
  /**
   * Combines two `MicroSchedule`s, by recurring if either schedule wants to
   * recur, using the minimum of the two durations between recurrences.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (that: MicroSchedule): (self: MicroSchedule) => MicroSchedule
  /**
   * Combines two `MicroSchedule`s, by recurring if either schedule wants to
   * recur, using the minimum of the two durations between recurrences.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (self: MicroSchedule, that: MicroSchedule): MicroSchedule
} = dual(
  2,
  (self: MicroSchedule, that: MicroSchedule): MicroSchedule => (attempt, elapsed) =>
    Option.zipWith(self(attempt, elapsed), that(attempt, elapsed), (d1, d2) => Math.min(d1, d2))
)

/**
 * Combines two `MicroSchedule`s, by recurring only if both schedules want to
 * recur, using the maximum of the two durations between recurrences.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export const scheduleIntersect: {
  /**
   * Combines two `MicroSchedule`s, by recurring only if both schedules want to
   * recur, using the maximum of the two durations between recurrences.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (that: MicroSchedule): (self: MicroSchedule) => MicroSchedule
  /**
   * Combines two `MicroSchedule`s, by recurring only if both schedules want to
   * recur, using the maximum of the two durations between recurrences.
   *
   * @since 3.4.6
   * @experimental
   * @category scheduling
   */
  (self: MicroSchedule, that: MicroSchedule): MicroSchedule
} = dual(
  2,
  (self: MicroSchedule, that: MicroSchedule): MicroSchedule => (attempt, elapsed) =>
    Option.zipWith(self(attempt, elapsed), that(attempt, elapsed), (d1, d2) => Math.max(d1, d2))
)

// ----------------------------------------------------------------------------
// error handling
// ----------------------------------------------------------------------------

/**
 * Catch the full `MicroCause` object of the given `Micro` effect, allowing you to
 * recover from any kind of cause.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchAllCause: {
  // ----------------------------------------------------------------------------
  // error handling
  // ----------------------------------------------------------------------------

  /**
   * Catch the full `MicroCause` object of the given `Micro` effect, allowing you to
   * recover from any kind of cause.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E2, R | R2>
  // ----------------------------------------------------------------------------
  // error handling
  // ----------------------------------------------------------------------------

  /**
   * Catch the full `MicroCause` object of the given `Micro` effect, allowing you to
   * recover from any kind of cause.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): Micro<A | B, E2, R | R2>
} = dual(
  2,
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): Micro<A | B, E2, R | R2> => {
    const onFailure = Object.create(OnFailureProto)
    onFailure[args] = self
    onFailure[failureCont] = f
    return onFailure
  }
)
const OnFailureProto = makePrimitiveProto({
  op: "OnFailure",
  eval(this: any, fiber: MicroFiberImpl): Primitive {
    fiber._stack.push(this as any)
    return this[args]
  }
})

/**
 * Selectively catch a `MicroCause` object of the given `Micro` effect,
 * using the provided predicate to determine if the failure should be caught.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchCauseIf: {
  /**
   * Selectively catch a `MicroCause` object of the given `Micro` effect,
   * using the provided predicate to determine if the failure should be caught.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2, EB extends MicroCause<E>>(
    refinement: Refinement<MicroCause<E>, EB>,
    f: (cause: EB) => Micro<B, E2, R2>
  ): <A, R>(
    self: Micro<A, E, R>
  ) => Micro<A | B, Exclude<E, MicroCause.Error<EB>> | E2, R | R2>
  /**
   * Selectively catch a `MicroCause` object of the given `Micro` effect,
   * using the provided predicate to determine if the failure should be caught.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(
    predicate: Predicate<MicroCause<NoInfer<E>>>,
    f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E | E2, R | R2>
  /**
   * Selectively catch a `MicroCause` object of the given `Micro` effect,
   * using the provided predicate to determine if the failure should be caught.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2, EB extends MicroCause<E>>(
    self: Micro<A, E, R>,
    refinement: Refinement<MicroCause<E>, EB>,
    f: (cause: EB) => Micro<B, E2, R2>
  ): Micro<A | B, Exclude<E, MicroCause.Error<EB>> | E2, R | R2>
  /**
   * Selectively catch a `MicroCause` object of the given `Micro` effect,
   * using the provided predicate to determine if the failure should be caught.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    predicate: Predicate<MicroCause<NoInfer<E>>>,
    f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): Micro<A | B, E | E2, R | R2>
} = dual(
  3,
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    predicate: Predicate<MicroCause<E>>,
    f: (cause: MicroCause<E>) => Micro<B, E2, R2>
  ): Micro<A | B, E | E2, R | R2> =>
    catchAllCause(self, (cause) => predicate(cause) ? f(cause) : failCause(cause) as any)
)

/**
 * Catch the error of the given `Micro` effect, allowing you to recover from it.
 *
 * It only catches expected errors.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchAll: {
  /**
   * Catch the error of the given `Micro` effect, allowing you to recover from it.
   *
   * It only catches expected errors.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(f: (e: NoInfer<E>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E2, R | R2>
  /**
   * Catch the error of the given `Micro` effect, allowing you to recover from it.
   *
   * It only catches expected errors.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (e: NoInfer<E>) => Micro<B, E2, R2>): Micro<A | B, E2, R | R2>
} = dual(
  2,
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    f: (a: NoInfer<E>) => Micro<B, E2, R2>
  ): Micro<A | B, E2, R | R2> => catchCauseIf(self, causeIsFail, (cause) => f(cause.error))
)

/**
 * Catch any unexpected errors of the given `Micro` effect, allowing you to recover from them.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const catchAllDefect: {
  /**
   * Catch any unexpected errors of the given `Micro` effect, allowing you to recover from them.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(f: (defect: unknown) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E | E2, R | R2>
  /**
   * Catch any unexpected errors of the given `Micro` effect, allowing you to recover from them.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (defect: unknown) => Micro<B, E2, R2>): Micro<A | B, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (defect: unknown) => Micro<B, E2, R2>): Micro<A | B, E | E2, R | R2> =>
    catchCauseIf(self, causeIsDie, (die) => f(die.defect))
)

/**
 * Perform a side effect using the full `MicroCause` object of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const tapErrorCause: {
  /**
   * Perform a side effect using the full `MicroCause` object of the given `Micro`.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>
  /**
   * Perform a side effect using the full `MicroCause` object of the given `Micro`.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): Micro<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): Micro<A, E | E2, R | R2> => tapErrorCauseIf(self, constTrue, f)
)

/**
 * Perform a side effect using if a `MicroCause` object matches the specified
 * predicate.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const tapErrorCauseIf: {
  /**
   * Perform a side effect using if a `MicroCause` object matches the specified
   * predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2, EB extends MicroCause<E>>(refinement: Refinement<MicroCause<E>, EB>, f: (a: EB) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>
  /**
   * Perform a side effect using if a `MicroCause` object matches the specified
   * predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(
    predicate: (cause: NoInfer<MicroCause<E>>) => boolean,
    f: (a: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>
  /**
   * Perform a side effect using if a `MicroCause` object matches the specified
   * predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2, EB extends MicroCause<E>>(
    self: Micro<A, E, R>,
    refinement: Refinement<MicroCause<E>, EB>,
    f: (a: EB) => Micro<B, E2, R2>
  ): Micro<A, E | E2, R | R2>
  /**
   * Perform a side effect using if a `MicroCause` object matches the specified
   * predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(
    self: Micro<A, E, R>,
    predicate: (cause: NoInfer<MicroCause<E>>) => boolean,
    f: (a: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>
  ): Micro<A, E | E2, R | R2>
} = dual(
  3,
  <A, E, R, B, E2, R2, EB extends MicroCause<E>>(
    self: Micro<A, E, R>,
    refinement: Refinement<MicroCause<E>, EB>,
    f: (a: EB) => Micro<B, E2, R2>
  ): Micro<A, E | E2, R | R2> => catchCauseIf(self, refinement, (cause) => andThen(f(cause), failCause(cause)))
)

/**
 * Perform a side effect from expected errors of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const tapError: {
  /**
   * Perform a side effect from expected errors of the given `Micro`.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(f: (e: NoInfer<E>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>
  /**
   * Perform a side effect from expected errors of the given `Micro`.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (e: NoInfer<E>) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (e: NoInfer<E>) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2> =>
    tapErrorCauseIf(self, causeIsFail, (fail) => f(fail.error))
)

/**
 * Perform a side effect from unexpected errors of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const tapDefect: {
  /**
   * Perform a side effect from unexpected errors of the given `Micro`.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, B, E2, R2>(f: (defect: unknown) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>
  /**
   * Perform a side effect from unexpected errors of the given `Micro`.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (defect: unknown) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (defect: unknown) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2> =>
    tapErrorCauseIf(self, causeIsDie, (die) => f(die.defect))
)

/**
 * Catch any expected errors that match the specified predicate.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const catchIf: {
  /**
   * Catch any expected errors that match the specified predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <E, EB extends E, A2, E2, R2>(refinement: Refinement<NoInfer<E>, EB>, f: (e: EB) => Micro<A2, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A2 | A, E2 | Exclude<E, EB>, R2 | R>
  /**
   * Catch any expected errors that match the specified predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <E, A2, E2, R2>(predicate: Predicate<NoInfer<E>>, f: (e: NoInfer<E>) => Micro<A2, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A2 | A, E | E2, R2 | R>
  /**
   * Catch any expected errors that match the specified predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R, EB extends E, A2, E2, R2>(
    self: Micro<A, E, R>,
    refinement: Refinement<E, EB>,
    f: (e: EB) => Micro<A2, E2, R2>
  ): Micro<A | A2, E2 | Exclude<E, EB>, R | R2>
  /**
   * Catch any expected errors that match the specified predicate.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(
    self: Micro<A, E, R>,
    predicate: Predicate<E>,
    f: (e: E) => Micro<A2, E2, R2>
  ): Micro<A | A2, E | E2, R | R2>
} = dual(
  3,
  <A, E, R, A2, E2, R2>(
    self: Micro<A, E, R>,
    predicate: Predicate<E>,
    f: (e: E) => Micro<A2, E2, R2>
  ): Micro<A | A2, E | E2, R | R2> =>
    catchCauseIf(
      self,
      (f): f is MicroCause.Fail<E> => causeIsFail(f) && predicate(f.error),
      (fail) => f(fail.error)
    )
)

/**
 * Recovers from the specified tagged error.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const catchTag: {
  /**
   * Recovers from the specified tagged error.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <K extends E extends { _tag: string } ? E["_tag"] : never, E, A1, E1, R1>(k: K, f: (e: Extract<E, { _tag: K }>) => Micro<A1, E1, R1>): <A, R>(self: Micro<A, E, R>) => Micro<A1 | A, E1 | Exclude<E, { _tag: K }>, R1 | R>
  /**
   * Recovers from the specified tagged error.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R, K extends E extends { _tag: string } ? E["_tag"] : never, R1, E1, A1>(
    self: Micro<A, E, R>,
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Micro<A1, E1, R1>
  ): Micro<A | A1, E1 | Exclude<E, { _tag: K }>, R | R1>
} = dual(3, <A, E, R, K extends E extends { _tag: string } ? E["_tag"] : never, R1, E1, A1>(
  self: Micro<A, E, R>,
  k: K,
  f: (e: Extract<E, { _tag: K }>) => Micro<A1, E1, R1>
): Micro<A | A1, E1 | Exclude<E, { _tag: K }>, R | R1> =>
  catchIf(self, isTagged(k) as Refinement<E, Extract<E, { _tag: K }>>, f) as any)

/**
 * Transform the full `MicroCause` object of the given `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export const mapErrorCause: {
  /**
   * Transform the full `MicroCause` object of the given `Micro` effect.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <E, E2>(f: (e: MicroCause<E>) => MicroCause<E2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E2, R>
  /**
   * Transform the full `MicroCause` object of the given `Micro` effect.
   *
   * @since 3.4.6
   * @experimental
   * @category error handling
   */
  <A, E, R, E2>(self: Micro<A, E, R>, f: (e: MicroCause<E>) => MicroCause<E2>): Micro<A, E2, R>
} = dual(
  2,
  <A, E, R, E2>(self: Micro<A, E, R>, f: (e: MicroCause<E>) => MicroCause<E2>): Micro<A, E2, R> =>
    catchAllCause(self, (cause) => failCause(f(cause)))
)

/**
 * Transform any expected errors of the given `Micro` effect.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const mapError: {
  /**
   * Transform any expected errors of the given `Micro` effect.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <E, E2>(f: (e: E) => E2): <A, R>(self: Micro<A, E, R>) => Micro<A, E2, R>
  /**
   * Transform any expected errors of the given `Micro` effect.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R, E2>(self: Micro<A, E, R>, f: (e: E) => E2): Micro<A, E2, R>
} = dual(
  2,
  <A, E, R, E2>(self: Micro<A, E, R>, f: (e: E) => E2): Micro<A, E2, R> => catchAll(self, (error) => fail(f(error)))
)

/**
 * Elevate any expected errors of the given `Micro` effect to unexpected errors,
 * resulting in an error type of `never`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const orDie = <A, E, R>(self: Micro<A, E, R>): Micro<A, never, R> => catchAll(self, die)

/**
 * Recover from all errors by succeeding with the given value.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const orElseSucceed: {
  /**
   * Recover from all errors by succeeding with the given value.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <B>(f: LazyArg<B>): <A, E, R>(self: Micro<A, E, R>) => Micro<A | B, never, R>
  /**
   * Recover from all errors by succeeding with the given value.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R, B>(self: Micro<A, E, R>, f: LazyArg<B>): Micro<A | B, never, R>
} = dual(
  2,
  <A, E, R, B>(self: Micro<A, E, R>, f: LazyArg<B>): Micro<A | B, never, R> => catchAll(self, (_) => sync(f))
)

/**
 * Ignore any expected errors of the given `Micro` effect, returning `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const ignore = <A, E, R>(self: Micro<A, E, R>): Micro<void, never, R> =>
  matchEffect(self, { onFailure: (_) => void_, onSuccess: (_) => void_ })

/**
 * Ignore any expected errors of the given `Micro` effect, returning `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const ignoreLogged = <A, E, R>(self: Micro<A, E, R>): Micro<void, never, R> =>
  matchEffect(self, {
    // eslint-disable-next-line no-console
    onFailure: (error) => sync(() => console.error(error)),
    onSuccess: (_) => void_
  })

/**
 * Replace the success value of the given `Micro` effect with an `Option`,
 * wrapping the success value in `Some` and returning `None` if the effect fails
 * with an expected error.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const option = <A, E, R>(self: Micro<A, E, R>): Micro<Option.Option<A>, never, R> =>
  match(self, { onFailure: Option.none, onSuccess: Option.some })

/**
 * Replace the success value of the given `Micro` effect with an `Either`,
 * wrapping the success value in `Right` and wrapping any expected errors with
 * a `Left`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const either = <A, E, R>(self: Micro<A, E, R>): Micro<Either.Either<A, E>, never, R> =>
  match(self, { onFailure: Either.left, onSuccess: Either.right })

/**
 * Retry the given `Micro` effect using the provided options.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const retry: {
  /**
   * Retry the given `Micro` effect using the provided options.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E>(
    options?: {
      while?: Predicate<E> | undefined
      times?: number | undefined
      schedule?: MicroSchedule | undefined
    } | undefined
  ): <R>(self: Micro<A, E, R>) => Micro<A, E, R>
  /**
   * Retry the given `Micro` effect using the provided options.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R>(
    self: Micro<A, E, R>,
    options?: {
      while?: Predicate<E> | undefined
      times?: number | undefined
      schedule?: MicroSchedule | undefined
    } | undefined
  ): Micro<A, E, R>
} = dual((args) => isMicro(args[0]), <A, E, R>(
  self: Micro<A, E, R>,
  options?: {
    while?: Predicate<E> | undefined
    times?: number | undefined
    schedule?: MicroSchedule | undefined
  } | undefined
): Micro<A, E, R> =>
  repeatExit(self, {
    ...options,
    while: (exit) =>
      exit._tag === "Failure" && exit.cause._tag === "Fail" &&
      (options?.while === undefined || options.while(exit.cause.error))
  }))

/**
 * Add a stack trace to any failures that occur in the effect. The trace will be
 * added to the `traces` field of the `MicroCause` object.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export const withTrace: {
  /**
   * Add a stack trace to any failures that occur in the effect. The trace will be
   * added to the `traces` field of the `MicroCause` object.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  (name: string): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>
  /**
   * Add a stack trace to any failures that occur in the effect. The trace will be
   * added to the `traces` field of the `MicroCause` object.
   *
   * @since 3.4.0
   * @experimental
   * @category error handling
   */
  <A, E, R>(self: Micro<A, E, R>, name: string): Micro<A, E, R>
} = function() {
  const prevLimit = globalThis.Error.stackTraceLimit
  globalThis.Error.stackTraceLimit = 2
  const error = new globalThis.Error()
  globalThis.Error.stackTraceLimit = prevLimit
  function generate(name: string, cause: MicroCause<any>) {
    const stack = error.stack
    if (!stack) {
      return cause
    }
    const line = stack.split("\n")[2]?.trim().replace(/^at /, "")
    if (!line) {
      return cause
    }
    const lineMatch = line.match(/\((.*)\)$/)
    return causeWithTrace(cause, `at ${name} (${lineMatch ? lineMatch[1] : line})`)
  }
  const f = (name: string) => (self: Micro<any, any, any>) => onError(self, (cause) => failCause(generate(name, cause)))
  if (arguments.length === 2) {
    return f(arguments[1])(arguments[0])
  }
  return f(arguments[0])
} as any

// ----------------------------------------------------------------------------
// pattern matching
// ----------------------------------------------------------------------------

/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export const matchCauseEffect: {
  // ----------------------------------------------------------------------------
  // pattern matching
  // ----------------------------------------------------------------------------

  /**
   * @since 3.4.6
   * @experimental
   * @category pattern matching
   */
  <E, A2, E2, R2, A, A3, E3, R3>(
    options: {
      readonly onFailure: (cause: MicroCause<E>) => Micro<A2, E2, R2>
      readonly onSuccess: (a: A) => Micro<A3, E3, R3>
    }
  ): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, E2 | E3, R2 | R3 | R>
  // ----------------------------------------------------------------------------
  // pattern matching
  // ----------------------------------------------------------------------------

  /**
   * @since 3.4.6
   * @experimental
   * @category pattern matching
   */
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (cause: MicroCause<E>) => Micro<A2, E2, R2>
      readonly onSuccess: (a: A) => Micro<A3, E3, R3>
    }
  ): Micro<A2 | A3, E2 | E3, R2 | R3 | R>
} = dual(
  2,
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (cause: MicroCause<E>) => Micro<A2, E2, R2>
      readonly onSuccess: (a: A) => Micro<A3, E3, R3>
    }
  ): Micro<A2 | A3, E2 | E3, R2 | R3 | R> => {
    const primitive = Object.create(OnSuccessAndFailureProto)
    primitive[args] = self
    primitive[successCont] = options.onSuccess
    primitive[failureCont] = options.onFailure
    return primitive
  }
)
const OnSuccessAndFailureProto = makePrimitiveProto({
  op: "OnSuccessAndFailure",
  eval(this: any, fiber: MicroFiberImpl): Primitive {
    fiber._stack.push(this)
    return this[args]
  }
})

/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export const matchCause: {
  /**
   * @since 3.4.6
   * @experimental
   * @category pattern matching
   */
  <E, A2, A, A3>(
    options: {
      readonly onFailure: (cause: MicroCause<E>) => A2
      readonly onSuccess: (a: A) => A3
    }
  ): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, never, R>
  /**
   * @since 3.4.6
   * @experimental
   * @category pattern matching
   */
  <A, E, R, A2, A3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (cause: MicroCause<E>) => A2
      readonly onSuccess: (a: A) => A3
    }
  ): Micro<A2 | A3, never, R>
} = dual(
  2,
  <A, E, R, A2, A3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (cause: MicroCause<E>) => A2
      readonly onSuccess: (a: A) => A3
    }
  ): Micro<A2 | A3, never, R> =>
    matchCauseEffect(self, {
      onFailure: (cause) => sync(() => options.onFailure(cause)),
      onSuccess: (value) => sync(() => options.onSuccess(value))
    })
)

/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export const matchEffect: {
  /**
   * @since 3.4.6
   * @experimental
   * @category pattern matching
   */
  <E, A2, E2, R2, A, A3, E3, R3>(
    options: {
      readonly onFailure: (e: E) => Micro<A2, E2, R2>
      readonly onSuccess: (a: A) => Micro<A3, E3, R3>
    }
  ): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, E2 | E3, R2 | R3 | R>
  /**
   * @since 3.4.6
   * @experimental
   * @category pattern matching
   */
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (e: E) => Micro<A2, E2, R2>
      readonly onSuccess: (a: A) => Micro<A3, E3, R3>
    }
  ): Micro<A2 | A3, E2 | E3, R2 | R3 | R>
} = dual(
  2,
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (e: E) => Micro<A2, E2, R2>
      readonly onSuccess: (a: A) => Micro<A3, E3, R3>
    }
  ): Micro<A2 | A3, E2 | E3, R2 | R3 | R> =>
    matchCauseEffect(self, {
      onFailure: (cause) => cause._tag === "Fail" ? options.onFailure(cause.error) : failCause(cause),
      onSuccess: options.onSuccess
    })
)

/**
 * @since 3.4.0
 * @experimental
 * @category pattern matching
 */
export const match: {
  /**
   * @since 3.4.0
   * @experimental
   * @category pattern matching
   */
  <E, A2, A, A3>(
    options: {
      readonly onFailure: (error: E) => A2
      readonly onSuccess: (value: A) => A3
    }
  ): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, never, R>
  /**
   * @since 3.4.0
   * @experimental
   * @category pattern matching
   */
  <A, E, R, A2, A3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (error: E) => A2
      readonly onSuccess: (value: A) => A3
    }
  ): Micro<A2 | A3, never, R>
} = dual(
  2,
  <A, E, R, A2, A3>(
    self: Micro<A, E, R>,
    options: {
      readonly onFailure: (error: E) => A2
      readonly onSuccess: (value: A) => A3
    }
  ): Micro<A2 | A3, never, R> =>
    matchEffect(self, {
      onFailure: (error) => sync(() => options.onFailure(error)),
      onSuccess: (value) => sync(() => options.onSuccess(value))
    })
)

// ----------------------------------------------------------------------------
// delays & timeouts
// ----------------------------------------------------------------------------

/**
 * Create a `Micro` effect that will sleep for the specified duration.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const sleep = (millis: number): Micro<void> =>
  async((resume) => {
    const timeout = setTimeout(() => {
      resume(void_)
    }, millis)
    return sync(() => {
      clearTimeout(timeout)
    })
  })

/**
 * Returns an effect that will delay the execution of this effect by the
 * specified duration.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const delay: {
  /**
   * Returns an effect that will delay the execution of this effect by the
   * specified duration.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  (millis: number): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>
  /**
   * Returns an effect that will delay the execution of this effect by the
   * specified duration.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<A, E, R>
} = dual(
  2,
  <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<A, E, R> => andThen(sleep(millis), self)
)

/**
 * Returns an effect that will timeout this effect, that will execute the
 * fallback effect if the timeout elapses before the effect has produced a value.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const timeoutOrElse: {
  /**
   * Returns an effect that will timeout this effect, that will execute the
   * fallback effect if the timeout elapses before the effect has produced a value.
   *
   * If the timeout elapses, the running effect will be safely interrupted.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  <A2, E2, R2>(
    options: {
      readonly duration: number
      readonly onTimeout: LazyArg<Micro<A2, E2, R2>>
    }
  ): <A, E, R>(self: Micro<A, E, R>) => Micro<A | A2, E | E2, R | R2>
  /**
   * Returns an effect that will timeout this effect, that will execute the
   * fallback effect if the timeout elapses before the effect has produced a value.
   *
   * If the timeout elapses, the running effect will be safely interrupted.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  <A, E, R, A2, E2, R2>(
    self: Micro<A, E, R>,
    options: {
      readonly duration: number
      readonly onTimeout: LazyArg<Micro<A2, E2, R2>>
    }
  ): Micro<A | A2, E | E2, R | R2>
} = dual(
  2,
  <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, options: {
    readonly duration: number
    readonly onTimeout: LazyArg<Micro<A2, E2, R2>>
  }): Micro<A | A2, E | E2, R | R2> =>
    raceFirst(self, andThen(interruptible(sleep(options.duration)), options.onTimeout))
)

/**
 * Returns an effect that will timeout this effect, that will fail with a
 * `TimeoutException` if the timeout elapses before the effect has produced a
 * value.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const timeout: {
  /**
   * Returns an effect that will timeout this effect, that will fail with a
   * `TimeoutException` if the timeout elapses before the effect has produced a
   * value.
   *
   * If the timeout elapses, the running effect will be safely interrupted.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  (millis: number): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | TimeoutException, R>
  /**
   * Returns an effect that will timeout this effect, that will fail with a
   * `TimeoutException` if the timeout elapses before the effect has produced a
   * value.
   *
   * If the timeout elapses, the running effect will be safely interrupted.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<A, E | TimeoutException, R>
} = dual(
  2,
  <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<A, E | TimeoutException, R> =>
    timeoutOrElse(self, { duration: millis, onTimeout: () => fail(new TimeoutException()) })
)

/**
 * Returns an effect that will timeout this effect, succeeding with a `None`
 * if the timeout elapses before the effect has produced a value; and `Some` of
 * the produced value otherwise.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export const timeoutOption: {
  /**
   * Returns an effect that will timeout this effect, succeeding with a `None`
   * if the timeout elapses before the effect has produced a value; and `Some` of
   * the produced value otherwise.
   *
   * If the timeout elapses, the running effect will be safely interrupted.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  (millis: number): <A, E, R>(self: Micro<A, E, R>) => Micro<Option.Option<A>, E, R>
  /**
   * Returns an effect that will timeout this effect, succeeding with a `None`
   * if the timeout elapses before the effect has produced a value; and `Some` of
   * the produced value otherwise.
   *
   * If the timeout elapses, the running effect will be safely interrupted.
   *
   * @since 3.4.0
   * @experimental
   * @category delays & timeouts
   */
  <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<Option.Option<A>, E, R>
} = dual(
  2,
  <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<Option.Option<A>, E, R> =>
    raceFirst(
      asSome(self),
      as(interruptible(sleep(millis)), Option.none())
    )
)

// ----------------------------------------------------------------------------
// resources & finalization
// ----------------------------------------------------------------------------

/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const MicroScopeTypeId: unique symbol = Symbol.for("effect/Micro/MicroScope")

/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export type MicroScopeTypeId = typeof MicroScopeTypeId

/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export interface MicroScope {
  readonly [MicroScopeTypeId]: MicroScopeTypeId
  readonly addFinalizer: (finalizer: (exit: MicroExit<unknown, unknown>) => Micro<void>) => Micro<void>
  readonly fork: Micro<MicroScope.Closeable>
}

/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare namespace MicroScope {
  /**
   * @since 3.4.0
   * @experimental
   * @category resources & finalization
   */
  export interface Closeable extends MicroScope {
    readonly close: (exit: MicroExit<any, any>) => Micro<void>
  }
}

/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const MicroScope: Context.Tag<MicroScope, MicroScope> = Context.GenericTag<MicroScope>("effect/Micro/MicroScope")

class MicroScopeImpl implements MicroScope.Closeable {
  readonly [MicroScopeTypeId]: MicroScopeTypeId
  state: {
    readonly _tag: "Open"
    readonly finalizers: Set<(exit: MicroExit<any, any>) => Micro<void>>
  } | {
    readonly _tag: "Closed"
    readonly exit: MicroExit<any, any>
  } = { _tag: "Open", finalizers: new Set() }

  constructor() {
    this[MicroScopeTypeId] = MicroScopeTypeId
  }

  unsafeAddFinalizer(finalizer: (exit: MicroExit<any, any>) => Micro<void>): void {
    if (this.state._tag === "Open") {
      this.state.finalizers.add(finalizer)
    }
  }
  addFinalizer(finalizer: (exit: MicroExit<any, any>) => Micro<void>): Micro<void> {
    return suspend(() => {
      if (this.state._tag === "Open") {
        this.state.finalizers.add(finalizer)
        return void_
      }
      return finalizer(this.state.exit)
    })
  }
  unsafeRemoveFinalizer(finalizer: (exit: MicroExit<any, any>) => Micro<void>): void {
    if (this.state._tag === "Open") {
      this.state.finalizers.delete(finalizer)
    }
  }
  close(microExit: MicroExit<any, any>): Micro<void> {
    return suspend(() => {
      if (this.state._tag === "Open") {
        const finalizers = Array.from(this.state.finalizers).reverse()
        this.state = { _tag: "Closed", exit: microExit }
        return flatMap(
          forEach(finalizers, (finalizer) => exit(finalizer(microExit))),
          exitVoidAll
        )
      }
      return void_
    })
  }
  get fork() {
    return sync(() => {
      const newScope = new MicroScopeImpl()
      if (this.state._tag === "Closed") {
        newScope.state = this.state
        return newScope
      }
      function fin(exit: MicroExit<any, any>) {
        return newScope.close(exit)
      }
      this.state.finalizers.add(fin)
      newScope.unsafeAddFinalizer((_) => sync(() => this.unsafeRemoveFinalizer(fin)))
      return newScope
    })
  }
}

/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scopeMake: Micro<MicroScope.Closeable> = sync(() => new MicroScopeImpl())

/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scopeUnsafeMake = (): MicroScope.Closeable => new MicroScopeImpl()

/**
 * Access the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scope: Micro<MicroScope, never, MicroScope> = service(MicroScope)

/**
 * Provide a `MicroScope` to an effect.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const provideScope: {
  /**
   * Provide a `MicroScope` to an effect.
   *
   * @since 3.4.0
   * @experimental
   * @category resources & finalization
   */
  (scope: MicroScope): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, Exclude<R, MicroScope>>
  /**
   * Provide a `MicroScope` to an effect.
   *
   * @since 3.4.0
   * @experimental
   * @category resources & finalization
   */
  <A, E, R>(self: Micro<A, E, R>, scope: MicroScope): Micro<A, E, Exclude<R, MicroScope>>
} = dual(
  2,
  <A, E, R>(self: Micro<A, E, R>, scope: MicroScope): Micro<A, E, Exclude<R, MicroScope>> =>
    provideService(self, MicroScope, scope)
)

/**
 * Provide a `MicroScope` to the given effect, closing it after the effect has
 * finished executing.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const scoped = <A, E, R>(self: Micro<A, E, R>): Micro<A, E, Exclude<R, MicroScope>> =>
  suspend(() => {
    const scope = new MicroScopeImpl()
    return onExit(provideService(self, MicroScope, scope), (exit) => scope.close(exit))
  })

/**
 * Create a resource with a cleanup `Micro` effect, ensuring the cleanup is
 * executed when the `MicroScope` is closed.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const acquireRelease = <A, E, R>(
  acquire: Micro<A, E, R>,
  release: (a: A, exit: MicroExit<unknown, unknown>) => Micro<void>
): Micro<A, E, R | MicroScope> =>
  uninterruptible(flatMap(
    scope,
    (scope) => tap(acquire, (a) => scope.addFinalizer((exit) => release(a, exit)))
  ))

/**
 * Add a finalizer to the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const addFinalizer = (
  finalizer: (exit: MicroExit<unknown, unknown>) => Micro<void>
): Micro<void, never, MicroScope> => flatMap(scope, (scope) => scope.addFinalizer(finalizer))

/**
 * When the `Micro` effect is completed, run the given finalizer effect with the
 * `MicroExit` of the executed effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onExit: {
  /**
   * When the `Micro` effect is completed, run the given finalizer effect with the
   * `MicroExit` of the executed effect.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, XE, XR>(f: (exit: MicroExit<A, E>) => Micro<void, XE, XR>): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>
  /**
   * When the `Micro` effect is completed, run the given finalizer effect with the
   * `MicroExit` of the executed effect.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, R, XE, XR>(self: Micro<A, E, R>, f: (exit: MicroExit<A, E>) => Micro<void, XE, XR>): Micro<A, E | XE, R | XR>
} = dual(
  2,
  <A, E, R, XE, XR>(
    self: Micro<A, E, R>,
    f: (exit: MicroExit<A, E>) => Micro<void, XE, XR>
  ): Micro<A, E | XE, R | XR> =>
    uninterruptibleMask((restore) =>
      matchCauseEffect(restore(self), {
        onFailure: (cause) => flatMap(f(exitFailCause(cause)), () => failCause(cause)),
        onSuccess: (a) => flatMap(f(exitSucceed(a)), () => succeed(a))
      })
    )
)

/**
 * Regardless of the result of the this `Micro` effect, run the finalizer effect.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const ensuring: {
  /**
   * Regardless of the result of the this `Micro` effect, run the finalizer effect.
   *
   * @since 3.4.0
   * @experimental
   * @category resources & finalization
   */
  <XE, XR>(finalizer: Micro<void, XE, XR>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>
  /**
   * Regardless of the result of the this `Micro` effect, run the finalizer effect.
   *
   * @since 3.4.0
   * @experimental
   * @category resources & finalization
   */
  <A, E, R, XE, XR>(self: Micro<A, E, R>, finalizer: Micro<void, XE, XR>): Micro<A, E | XE, R | XR>
} = dual(
  2,
  <A, E, R, XE, XR>(
    self: Micro<A, E, R>,
    finalizer: Micro<void, XE, XR>
  ): Micro<A, E | XE, R | XR> => onExit(self, (_) => finalizer)
)

/**
 * When the `Micro` effect is completed, run the given finalizer effect if it
 * matches the specified predicate.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onExitIf: {
  /**
   * When the `Micro` effect is completed, run the given finalizer effect if it
   * matches the specified predicate.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, XE, XR, B extends MicroExit<A, E>>(
    refinement: Refinement<MicroExit<A, E>, B>,
    f: (exit: B) => Micro<void, XE, XR>
  ): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>
  /**
   * When the `Micro` effect is completed, run the given finalizer effect if it
   * matches the specified predicate.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, XE, XR>(
    predicate: Predicate<MicroExit<NoInfer<A>, NoInfer<E>>>,
    f: (exit: MicroExit<NoInfer<A>, NoInfer<E>>) => Micro<void, XE, XR>
  ): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>
  /**
   * When the `Micro` effect is completed, run the given finalizer effect if it
   * matches the specified predicate.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, R, XE, XR, B extends MicroExit<A, E>>(
    self: Micro<A, E, R>,
    refinement: Refinement<MicroExit<A, E>, B>,
    f: (exit: B) => Micro<void, XE, XR>
  ): Micro<A, E | XE, R | XR>
  /**
   * When the `Micro` effect is completed, run the given finalizer effect if it
   * matches the specified predicate.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, R, XE, XR>(
    self: Micro<A, E, R>,
    predicate: Predicate<MicroExit<NoInfer<A>, NoInfer<E>>>,
    f: (exit: MicroExit<NoInfer<A>, NoInfer<E>>) => Micro<void, XE, XR>
  ): Micro<A, E | XE, R | XR>
} = dual(
  3,
  <A, E, R, XE, XR, B extends MicroExit<A, E>>(
    self: Micro<A, E, R>,
    refinement: Refinement<MicroExit<A, E>, B>,
    f: (exit: B) => Micro<void, XE, XR>
  ): Micro<A, E | XE, R | XR> => onExit(self, (exit) => (refinement(exit) ? f(exit) : exitVoid))
)

/**
 * When the `Micro` effect fails, run the given finalizer effect with the
 * `MicroCause` of the executed effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onError: {
  /**
   * When the `Micro` effect fails, run the given finalizer effect with the
   * `MicroCause` of the executed effect.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, XE, XR>(f: (cause: MicroCause<NoInfer<E>>) => Micro<void, XE, XR>): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>
  /**
   * When the `Micro` effect fails, run the given finalizer effect with the
   * `MicroCause` of the executed effect.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, R, XE, XR>(
    self: Micro<A, E, R>,
    f: (cause: MicroCause<NoInfer<E>>) => Micro<void, XE, XR>
  ): Micro<A, E | XE, R | XR>
} = dual(
  2,
  <A, E, R, XE, XR>(
    self: Micro<A, E, R>,
    f: (cause: MicroCause<NoInfer<E>>) => Micro<void, XE, XR>
  ): Micro<A, E | XE, R | XR> => onExitIf(self, exitIsFailure, (exit) => f(exit.cause))
)

/**
 * If this `Micro` effect is aborted, run the finalizer effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export const onInterrupt: {
  /**
   * If this `Micro` effect is aborted, run the finalizer effect.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <XE, XR>(finalizer: Micro<void, XE, XR>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>
  /**
   * If this `Micro` effect is aborted, run the finalizer effect.
   *
   * @since 3.4.6
   * @experimental
   * @category resources & finalization
   */
  <A, E, R, XE, XR>(self: Micro<A, E, R>, finalizer: Micro<void, XE, XR>): Micro<A, E | XE, R | XR>
} = dual(
  2,
  <A, E, R, XE, XR>(self: Micro<A, E, R>, finalizer: Micro<void, XE, XR>): Micro<A, E | XE, R | XR> =>
    onExitIf(self, exitIsInterrupt, (_) => finalizer)
)

/**
 * Acquire a resource, use it, and then release the resource when the `use`
 * effect has completed.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export const acquireUseRelease = <Resource, E, R, A, E2, R2, E3, R3>(
  acquire: Micro<Resource, E, R>,
  use: (a: Resource) => Micro<A, E2, R2>,
  release: (a: Resource, exit: MicroExit<A, E2>) => Micro<void, E3, R3>
): Micro<A, E | E2 | E3, R | R2 | R3> =>
  uninterruptibleMask((restore) =>
    flatMap(
      acquire,
      (a) =>
        flatMap(
          exit(restore(use(a))),
          (exit) => andThen(release(a, exit), exit)
        )
    )
  )

// ----------------------------------------------------------------------------
// interruption
// ----------------------------------------------------------------------------

/**
 * Abort the current `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category interruption
 */
export const interrupt: Micro<never> = failCause(causeInterrupt())

/**
 * Flag the effect as uninterruptible, which means that when the effect is
 * interrupted, it will be allowed to continue running until completion.
 *
 * @since 3.4.0
 * @experimental
 * @category flags
 */
export const uninterruptible = <A, E, R>(
  self: Micro<A, E, R>
): Micro<A, E, R> =>
  withMicroFiber((fiber) => {
    if (!fiber.interruptible) return self
    fiber.interruptible = false
    fiber._stack.push(setInterruptible(true))
    return self
  })

const setInterruptible: (interruptible: boolean) => Primitive = makePrimitive({
  op: "SetInterruptible",
  ensure(fiber) {
    fiber.interruptible = this[args]
    if (fiber._interrupted && fiber.interruptible) {
      return () => exitInterrupt
    }
  }
})

/**
 * Flag the effect as interruptible, which means that when the effect is
 * interrupted, it will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category flags
 */
export const interruptible = <A, E, R>(
  self: Micro<A, E, R>
): Micro<A, E, R> =>
  withMicroFiber((fiber) => {
    if (fiber.interruptible) return self
    fiber.interruptible = true
    fiber._stack.push(setInterruptible(false))
    if (fiber._interrupted) return exitInterrupt
    return self
  })

/**
 * Wrap the given `Micro` effect in an uninterruptible region, preventing the
 * effect from being aborted.
 *
 * You can use the `restore` function to restore a `Micro` effect to the
 * interruptibility state before the `uninterruptibleMask` was applied.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * Micro.uninterruptibleMask((restore) =>
 *   Micro.sleep(1000).pipe( // uninterruptible
 *     Micro.andThen(restore(Micro.sleep(1000))) // interruptible
 *   )
 * )
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category interruption
 */
export const uninterruptibleMask = <A, E, R>(
  f: (
    restore: <A, E, R>(effect: Micro<A, E, R>) => Micro<A, E, R>
  ) => Micro<A, E, R>
): Micro<A, E, R> =>
  withMicroFiber((fiber) => {
    if (!fiber.interruptible) return f(identity)
    fiber.interruptible = false
    fiber._stack.push(setInterruptible(true))
    return f(interruptible)
  })

// ========================================================================
// collecting & elements
// ========================================================================

/**
 * @since 3.4.0
 * @experimental
 */
export declare namespace All {
  /**
   * @since 3.4.0
   * @experimental
   */
  export type MicroAny = Micro<any, any, any>

  /**
   * @since 3.4.0
   * @experimental
   */
  export type ReturnIterable<T extends Iterable<MicroAny>, Discard extends boolean> = [T] extends
    [Iterable<Micro<infer A, infer E, infer R>>] ? Micro<
      Discard extends true ? void : Array<A>,
      E,
      R
    >
    : never

  /**
   * @since 3.4.0
   * @experimental
   */
  export type ReturnTuple<T extends ReadonlyArray<unknown>, Discard extends boolean> = Micro<
    Discard extends true ? void
      : T[number] extends never ? []
      : { -readonly [K in keyof T]: T[K] extends Micro<infer _A, infer _E, infer _R> ? _A : never },
    T[number] extends never ? never
      : T[number] extends Micro<infer _A, infer _E, infer _R> ? _E
      : never,
    T[number] extends never ? never
      : T[number] extends Micro<infer _A, infer _E, infer _R> ? _R
      : never
  > extends infer X ? X : never

  /**
   * @since 3.4.0
   * @experimental
   */
  export type ReturnObject<T, Discard extends boolean> = [T] extends [{ [K: string]: MicroAny }] ? Micro<
      Discard extends true ? void :
        { -readonly [K in keyof T]: [T[K]] extends [Micro<infer _A, infer _E, infer _R>] ? _A : never },
      keyof T extends never ? never
        : T[keyof T] extends Micro<infer _A, infer _E, infer _R> ? _E
        : never,
      keyof T extends never ? never
        : T[keyof T] extends Micro<infer _A, infer _E, infer _R> ? _R
        : never
    >
    : never

  /**
   * @since 3.4.0
   * @experimental
   */
  export type IsDiscard<A> = [Extract<A, { readonly discard: true }>] extends [never] ? false : true

  /**
   * @since 3.4.0
   * @experimental
   */
  export type Return<
    Arg extends Iterable<MicroAny> | Record<string, MicroAny>,
    O extends NoExcessProperties<{
      readonly concurrency?: Concurrency | undefined
      readonly discard?: boolean | undefined
    }, O>
  > = [Arg] extends [ReadonlyArray<MicroAny>] ? ReturnTuple<Arg, IsDiscard<O>>
    : [Arg] extends [Iterable<MicroAny>] ? ReturnIterable<Arg, IsDiscard<O>>
    : [Arg] extends [Record<string, MicroAny>] ? ReturnObject<Arg, IsDiscard<O>>
    : never
}

/**
 * Runs all the provided effects in sequence respecting the structure provided in input.
 *
 * Supports multiple arguments, a single argument tuple / array or record / struct.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const all = <
  const Arg extends Iterable<Micro<any, any, any>> | Record<string, Micro<any, any, any>>,
  O extends NoExcessProperties<{
    readonly concurrency?: Concurrency | undefined
    readonly discard?: boolean | undefined
  }, O>
>(arg: Arg, options?: O): All.Return<Arg, O> => {
  if (Array.isArray(arg) || isIterable(arg)) {
    return (forEach as any)(arg, identity, options)
  } else if (options?.discard) {
    return (forEach as any)(Object.values(arg), identity, options)
  }
  return suspend(() => {
    const out: Record<string, unknown> = {}
    return as(
      forEach(Object.entries(arg), ([key, effect]) =>
        map(effect, (value) => {
          out[key] = value
        }), {
        discard: true,
        concurrency: options?.concurrency
      }),
      out
    )
  }) as any
}

/**
 * @since 3.11.0
 * @experimental
 * @category collecting & elements
 */
export const whileLoop: <A, E, R>(options: {
  readonly while: LazyArg<boolean>
  readonly body: LazyArg<Micro<A, E, R>>
  readonly step: (a: A) => void
}) => Micro<void, E, R> = makePrimitive({
  op: "While",
  contA(value, fiber) {
    this[args].step(value)
    if (this[args].while()) {
      fiber._stack.push(this)
      return this[args].body()
    }
    return exitVoid
  },
  eval(fiber) {
    if (this[args].while()) {
      fiber._stack.push(this)
      return this[args].body()
    }
    return exitVoid
  }
})

/**
 * For each element of the provided iterable, run the effect and collect the
 * results.
 *
 * If the `discard` option is set to `true`, the results will be discarded and
 * the effect will return `void`.
 *
 * The `concurrency` option can be set to control how many effects are run
 * concurrently. By default, the effects are run sequentially.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const forEach: {
  /**
   * For each element of the provided iterable, run the effect and collect the
   * results.
   *
   * If the `discard` option is set to `true`, the results will be discarded and
   * the effect will return `void`.
   *
   * The `concurrency` option can be set to control how many effects are run
   * concurrently. By default, the effects are run sequentially.
   *
   * @since 3.4.0
   * @experimental
   * @category collecting & elements
   */
  <A, B, E, R>(
    iterable: Iterable<A>,
    f: (a: A, index: number) => Micro<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined
      readonly discard?: false | undefined
    }
  ): Micro<Array<B>, E, R>
  /**
   * For each element of the provided iterable, run the effect and collect the
   * results.
   *
   * If the `discard` option is set to `true`, the results will be discarded and
   * the effect will return `void`.
   *
   * The `concurrency` option can be set to control how many effects are run
   * concurrently. By default, the effects are run sequentially.
   *
   * @since 3.4.0
   * @experimental
   * @category collecting & elements
   */
  <A, B, E, R>(
    iterable: Iterable<A>,
    f: (a: A, index: number) => Micro<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined
      readonly discard: true
    }
  ): Micro<void, E, R>
} = <
  A,
  B,
  E,
  R
>(iterable: Iterable<A>, f: (a: A, index: number) => Micro<B, E, R>, options?: {
  readonly concurrency?: Concurrency | undefined
  readonly discard?: boolean | undefined
}): Micro<any, E, R> =>
  withMicroFiber((parent) => {
    const concurrencyOption = options?.concurrency === "inherit"
      ? parent.getRef(CurrentConcurrency)
      : options?.concurrency ?? 1
    const concurrency = concurrencyOption === "unbounded"
      ? Number.POSITIVE_INFINITY
      : Math.max(1, concurrencyOption)

    const items = Arr.fromIterable(iterable)
    let length = items.length
    if (length === 0) {
      return options?.discard ? void_ : succeed([])
    }

    const out: Array<B> | undefined = options?.discard ? undefined : new Array(length)
    let index = 0

    if (concurrency === 1) {
      return as(
        whileLoop({
          while: () => index < items.length,
          body: () => f(items[index], index),
          step: out ?
            (b) => out[index++] = b :
            (_) => index++
        }),
        out as any
      )
    }
    return async((resume) => {
      const fibers = new Set<MicroFiber<unknown, unknown>>()
      let result: MicroExit<any, any> | undefined = undefined
      let inProgress = 0
      let doneCount = 0
      let pumping = false
      let interrupted = false
      function pump() {
        pumping = true
        while (inProgress < concurrency && index < length) {
          const currentIndex = index
          const item = items[currentIndex]
          index++
          inProgress++
          try {
            const child = unsafeFork(parent, f(item, currentIndex), true, true)
            fibers.add(child)
            child.addObserver((exit) => {
              fibers.delete(child)
              if (interrupted) {
                return
              } else if (exit._tag === "Failure") {
                if (result === undefined) {
                  result = exit
                  length = index
                  fibers.forEach((fiber) => fiber.unsafeInterrupt())
                }
              } else if (out !== undefined) {
                out[currentIndex] = exit.value
              }
              doneCount++
              inProgress--
              if (doneCount === length) {
                resume(result ?? succeed(out))
              } else if (!pumping && inProgress < concurrency) {
                pump()
              }
            })
          } catch (err) {
            result = exitDie(err)
            length = index
            fibers.forEach((fiber) => fiber.unsafeInterrupt())
          }
        }
        pumping = false
      }
      pump()

      return suspend(() => {
        interrupted = true
        index = length
        return fiberInterruptAll(fibers)
      })
    })
  })

/**
 * Effectfully filter the elements of the provided iterable.
 *
 * Use the `concurrency` option to control how many elements are processed
 * concurrently.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const filter = <A, E, R>(iterable: Iterable<A>, f: (a: NoInfer<A>) => Micro<boolean, E, R>, options?: {
  readonly concurrency?: Concurrency | undefined
  readonly negate?: boolean | undefined
}): Micro<Array<A>, E, R> =>
  filterMap(iterable, (a) =>
    map(f(a), (pass) => {
      pass = options?.negate ? !pass : pass
      return pass ? Option.some(a) : Option.none()
    }), options)

/**
 * Effectfully filter the elements of the provided iterable.
 *
 * Use the `concurrency` option to control how many elements are processed
 * concurrently.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const filterMap = <A, B, E, R>(
  iterable: Iterable<A>,
  f: (a: NoInfer<A>) => Micro<Option.Option<B>, E, R>,
  options?: {
    readonly concurrency?: Concurrency | undefined
  }
): Micro<Array<B>, E, R> =>
  suspend(() => {
    const out: Array<B> = []
    return as(
      forEach(iterable, (a) =>
        map(f(a), (o) => {
          if (o._tag === "Some") {
            out.push(o.value)
          }
        }), {
        discard: true,
        concurrency: options?.concurrency
      }),
      out
    )
  })

// ----------------------------------------------------------------------------
// do notation
// ----------------------------------------------------------------------------

/**
 * Start a do notation block.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export const Do: Micro<{}> = succeed({})

/**
 * Bind the success value of this `Micro` effect to the provided name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export const bindTo: {
  /**
   * Bind the success value of this `Micro` effect to the provided name.
   *
   * @since 3.4.0
   * @experimental
   * @category do notation
   */
  <N extends string>(name: N): <A, E, R>(self: Micro<A, E, R>) => Micro<{ [K in N]: A }, E, R>
  /**
   * Bind the success value of this `Micro` effect to the provided name.
   *
   * @since 3.4.0
   * @experimental
   * @category do notation
   */
  <A, E, R, N extends string>(self: Micro<A, E, R>, name: N): Micro<{ [K in N]: A }, E, R>
} = doNotation.bindTo<MicroTypeLambda>(map)

/**
 * Bind the success value of this `Micro` effect to the provided name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export const bind: {
  /**
   * Bind the success value of this `Micro` effect to the provided name.
   *
   * @since 3.4.0
   * @experimental
   * @category do notation
   */
  <N extends string, A extends Record<string, any>, B, E2, R2>(name: N, f: (a: NoInfer<A>) => Micro<B, E2, R2>): <E, R>(self: Micro<A, E, R>) => Micro<Simplify<Omit<A, N> & { [K in N]: B }>, E | E2, R | R2>
  /**
   * Bind the success value of this `Micro` effect to the provided name.
   *
   * @since 3.4.0
   * @experimental
   * @category do notation
   */
  <A extends Record<string, any>, E, R, B, E2, R2, N extends string>(self: Micro<A, E, R>, name: N, f: (a: NoInfer<A>) => Micro<B, E2, R2>): Micro<Simplify<Omit<A, N> & { [K in N]: B }>, E | E2, R | R2>
} = doNotation.bind<MicroTypeLambda>(map, flatMap)

const let_: {
  <N extends string, A extends Record<string, any>, B>(
    name: N,
    f: (a: NoInfer<A>) => B
  ): <E, R>(self: Micro<A, E, R>) => Micro<Simplify<Omit<A, N> & { [K in N]: B }>, E, R>
  <A extends Record<string, any>, E, R, B, N extends string>(
    self: Micro<A, E, R>,
    name: N,
    f: (a: NoInfer<A>) => B
  ): Micro<Simplify<Omit<A, N> & { [K in N]: B }>, E, R>
} = doNotation.let_<MicroTypeLambda>(map)

export {
  /**
   * Bind the result of a synchronous computation to the given name.
   *
   * @since 3.4.0
   * @experimental
   * @category do notation
   */
  let_ as let
}

// ----------------------------------------------------------------------------
// fibers & forking
// ----------------------------------------------------------------------------

/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * When the parent `Micro` finishes, this `Micro` will be aborted.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const fork = <A, E, R>(
  self: Micro<A, E, R>
): Micro<MicroFiber<A, E>, never, R> =>
  withMicroFiber((fiber) => {
    fiberMiddleware.interruptChildren ??= fiberInterruptChildren
    return succeed(unsafeFork(fiber, self))
  })

const unsafeFork = <FA, FE, A, E, R>(
  parent: MicroFiberImpl<FA, FE>,
  effect: Micro<A, E, R>,
  immediate = false,
  daemon = false
): MicroFiber<A, E> => {
  const child = new MicroFiberImpl<A, E>(parent.context, parent.interruptible)
  if (!daemon) {
    parent.children().add(child)
    child.addObserver(() => parent.children().delete(child))
  }
  if (immediate) {
    child.evaluate(effect as any)
  } else {
    parent.getRef(CurrentScheduler).scheduleTask(() => child.evaluate(effect as any), 0)
  }
  return child
}

/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * It will not be aborted when the parent `Micro` finishes.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const forkDaemon = <A, E, R>(
  self: Micro<A, E, R>
): Micro<MicroFiber<A, E>, never, R> => withMicroFiber((fiber) => succeed(unsafeFork(fiber, self, false, true)))

/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * The lifetime of the handle will be attached to the provided `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const forkIn: {
  /**
   * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
   * aborted.
   *
   * The lifetime of the handle will be attached to the provided `MicroScope`.
   *
   * @since 3.4.0
   * @experimental
   * @category fiber & forking
   */
  (scope: MicroScope): <A, E, R>(self: Micro<A, E, R>) => Micro<MicroFiber<A, E>, never, R>
  /**
   * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
   * aborted.
   *
   * The lifetime of the handle will be attached to the provided `MicroScope`.
   *
   * @since 3.4.0
   * @experimental
   * @category fiber & forking
   */
  <A, E, R>(self: Micro<A, E, R>, scope: MicroScope): Micro<MicroFiber<A, E>, never, R>
} = dual(
  2,
  <A, E, R>(self: Micro<A, E, R>, scope: MicroScope): Micro<MicroFiber<A, E>, never, R> =>
    uninterruptibleMask((restore) =>
      flatMap(scope.fork, (scope) =>
        tap(
          restore(forkDaemon(onExit(self, (exit) => scope.close(exit)))),
          (fiber) => scope.addFinalizer((_) => fiberInterrupt(fiber))
        ))
    )
)

/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * The lifetime of the handle will be attached to the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export const forkScoped = <A, E, R>(self: Micro<A, E, R>): Micro<MicroFiber<A, E>, never, R | MicroScope> =>
  flatMap(scope, (scope) => forkIn(self, scope))

// ----------------------------------------------------------------------------
// execution
// ----------------------------------------------------------------------------

/**
 * Execute the `Micro` effect and return a `MicroFiber` that can be awaited, joined,
 * or aborted.
 *
 * You can listen for the result by adding an observer using the handle's
 * `addObserver` method.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * const handle = Micro.succeed(42).pipe(
 *   Micro.delay(1000),
 *   Micro.runFork
 * )
 *
 * handle.addObserver((exit) => {
 *   console.log(exit)
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export const runFork = <A, E>(
  effect: Micro<A, E>,
  options?: {
    readonly signal?: AbortSignal | undefined
    readonly scheduler?: MicroScheduler | undefined
  } | undefined
): MicroFiberImpl<A, E> => {
  const fiber = new MicroFiberImpl<A, E>(CurrentScheduler.context(
    options?.scheduler ?? new MicroSchedulerDefault()
  ))
  fiber.evaluate(effect as any)
  if (options?.signal) {
    if (options.signal.aborted) {
      fiber.unsafeInterrupt()
    } else {
      const abort = () => fiber.unsafeInterrupt()
      options.signal.addEventListener("abort", abort, { once: true })
      fiber.addObserver(() => options.signal!.removeEventListener("abort", abort))
    }
  }
  return fiber
}

/**
 * Execute the `Micro` effect and return a `Promise` that resolves with the
 * `MicroExit` of the computation.
 *
 * @since 3.4.6
 * @experimental
 * @category execution
 */
export const runPromiseExit = <A, E>(
  effect: Micro<A, E>,
  options?: {
    readonly signal?: AbortSignal | undefined
    readonly scheduler?: MicroScheduler | undefined
  } | undefined
): Promise<MicroExit<A, E>> =>
  new Promise((resolve, _reject) => {
    const handle = runFork(effect, options)
    handle.addObserver(resolve)
  })

/**
 * Execute the `Micro` effect and return a `Promise` that resolves with the
 * successful value of the computation.
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export const runPromise = <A, E>(
  effect: Micro<A, E>,
  options?: {
    readonly signal?: AbortSignal | undefined
    readonly scheduler?: MicroScheduler | undefined
  } | undefined
): Promise<A> =>
  runPromiseExit(effect, options).then((exit) => {
    if (exit._tag === "Failure") {
      throw exit.cause
    }
    return exit.value
  })

/**
 * Attempt to execute the `Micro` effect synchronously and return the `MicroExit`.
 *
 * If any asynchronous effects are encountered, the function will return a
 * `CauseDie` containing the `MicroFiber`.
 *
 * @since 3.4.6
 * @experimental
 * @category execution
 */
export const runSyncExit = <A, E>(effect: Micro<A, E>): MicroExit<A, E> => {
  const scheduler = new MicroSchedulerDefault()
  const fiber = runFork(effect, { scheduler })
  scheduler.flush()
  return fiber._exit ?? exitDie(fiber)
}

/**
 * Attempt to execute the `Micro` effect synchronously and return the success
 * value.
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export const runSync = <A, E>(effect: Micro<A, E>): A => {
  const exit = runSyncExit(effect)
  if (exit._tag === "Failure") throw exit.cause
  return exit.value
}

// ----------------------------------------------------------------------------
// Errors
// ----------------------------------------------------------------------------

/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export interface YieldableError extends Pipeable, Inspectable, Readonly<Error> {
  readonly [Effectable.EffectTypeId]: Effect.VarianceStruct<never, this, never>
  readonly [Effectable.StreamTypeId]: Stream.VarianceStruct<never, this, never>
  readonly [Effectable.SinkTypeId]: Sink.VarianceStruct<never, unknown, never, this, never>
  readonly [Effectable.ChannelTypeId]: Channel.VarianceStruct<never, unknown, this, unknown, never, unknown, never>
  readonly [TypeId]: Micro.Variance<never, this, never>
  [Symbol.iterator](): MicroIterator<Micro<never, this, never>>
}

const YieldableError: new(message?: string) => YieldableError = (function() {
  class YieldableError extends globalThis.Error {}
  // @effect-diagnostics-next-line floatingEffect:off
  Object.assign(YieldableError.prototype, MicroProto, StructuralPrototype, {
    [identifier]: "Failure",
    [evaluate]() {
      return fail(this)
    },
    toString(this: Error) {
      return this.message ? `${this.name}: ${this.message}` : this.name
    },
    toJSON() {
      return { ...this }
    },
    [NodeInspectSymbol](this: Error): string {
      const stack = this.stack
      if (stack) {
        return `${this.toString()}\n${stack.split("\n").slice(1).join("\n")}`
      }
      return this.toString()
    }
  })
  return YieldableError as any
})()

/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export const Error: new<A extends Record<string, any> = {}>(
  args: Equals<A, {}> extends true ? void
    : { readonly [P in keyof A]: A[P] }
) => YieldableError & Readonly<A> = (function() {
  return class extends YieldableError {
    constructor(args: any) {
      super()
      if (args) {
        Object.assign(this, args)
      }
    }
  } as any
})()

/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export const TaggedError = <Tag extends string>(tag: Tag): new<A extends Record<string, any> = {}>(
  args: Equals<A, {}> extends true ? void
    : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P] }
) => YieldableError & { readonly _tag: Tag } & Readonly<A> => {
  class Base extends Error<{}> {
    readonly _tag = tag
  }
  ;(Base.prototype as any).name = tag
  return Base as any
}

/**
 * Represents a checked exception which occurs when an expected element was
 * unable to be found.
 *
 * @since 3.4.4
 * @experimental
 * @category errors
 */
export class NoSuchElementException extends TaggedError("NoSuchElementException")<{ message?: string | undefined }> {}

/**
 * Represents a checked exception which occurs when a timeout occurs.
 *
 * @since 3.4.4
 * @experimental
 * @category errors
 */
export class TimeoutException extends TaggedError("TimeoutException") {}
