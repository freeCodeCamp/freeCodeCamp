import * as Arr from "../Array.js"
import type * as Cause from "../Cause.js"
import * as Chunk from "../Chunk.js"
import * as Context from "../Context.js"
import type * as Deferred from "../Deferred.js"
import type * as Differ from "../Differ.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import * as Either from "../Either.js"
import * as Equal from "../Equal.js"
import type * as ExecutionStrategy from "../ExecutionStrategy.js"
import type * as Exit from "../Exit.js"
import type * as Fiber from "../Fiber.js"
import * as FiberId from "../FiberId.js"
import type * as FiberRef from "../FiberRef.js"
import type * as FiberStatus from "../FiberStatus.js"
import type { LazyArg } from "../Function.js"
import { dual, identity, pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import * as Hash from "../Hash.js"
import * as HashMap from "../HashMap.js"
import type * as HashSet from "../HashSet.js"
import { format, NodeInspectSymbol, toJSON } from "../Inspectable.js"
import * as List from "../List.js"
import type * as LogLevel from "../LogLevel.js"
import type * as LogSpan from "../LogSpan.js"
import type * as MetricLabel from "../MetricLabel.js"
import * as MutableRef from "../MutableRef.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty, isObject, isPromiseLike, type Predicate, type Refinement } from "../Predicate.js"
import type * as Request from "../Request.js"
import type * as BlockedRequests from "../RequestBlock.js"
import type * as RequestResolver from "../RequestResolver.js"
import type * as RuntimeFlags from "../RuntimeFlags.js"
import * as RuntimeFlagsPatch from "../RuntimeFlagsPatch.js"
import type * as Scope from "../Scope.js"
import type * as Tracer from "../Tracer.js"
import type { NoInfer, NotFunction } from "../Types.js"
import { internalCall, YieldWrap } from "../Utils.js"
import * as blockedRequests_ from "./blockedRequests.js"
import * as internalCause from "./cause.js"
import * as deferred from "./deferred.js"
import * as internalDiffer from "./differ.js"
import { CommitPrototype, effectVariance, StructuralCommitPrototype } from "./effectable.js"
import { getBugErrorMessage } from "./errors.js"
import type * as FiberRuntime from "./fiberRuntime.js"
import type * as fiberScope from "./fiberScope.js"
import * as DeferredOpCodes from "./opCodes/deferred.js"
import * as OpCodes from "./opCodes/effect.js"
import * as runtimeFlags_ from "./runtimeFlags.js"
import { SingleShotGen } from "./singleShotGen.js"

// -----------------------------------------------------------------------------
// Effect
// -----------------------------------------------------------------------------

/**
 * @internal
 */
export const blocked = <A, E>(
  blockedRequests: BlockedRequests.RequestBlock,
  _continue: Effect.Effect<A, E>
): Effect.Blocked<A, E> => {
  const effect = new EffectPrimitive("Blocked") as any
  effect.effect_instruction_i0 = blockedRequests
  effect.effect_instruction_i1 = _continue
  return effect
}

/**
 * @internal
 */
export const runRequestBlock = (
  blockedRequests: BlockedRequests.RequestBlock
): Effect.Effect<void> => {
  const effect = new EffectPrimitive("RunBlocked") as any
  effect.effect_instruction_i0 = blockedRequests
  return effect
}

/** @internal */
export const EffectTypeId: Effect.EffectTypeId = Symbol.for("effect/Effect") as Effect.EffectTypeId

/** @internal */
export type Primitive =
  | Async
  | Commit
  | Failure
  | OnFailure
  | OnSuccess
  | OnStep
  | OnSuccessAndFailure
  | Success
  | Sync
  | UpdateRuntimeFlags
  | While
  | FromIterator
  | WithRuntime
  | Yield
  | OpTag
  | Blocked
  | RunBlocked
  | Either.Either<any, any>
  | Option.Option<any>

/** @internal */
export type Continuation =
  | OnSuccess
  | OnStep
  | OnSuccessAndFailure
  | OnFailure
  | While
  | FromIterator
  | RevertFlags

/** @internal */
export class RevertFlags {
  readonly _op = OpCodes.OP_REVERT_FLAGS
  constructor(
    readonly patch: RuntimeFlagsPatch.RuntimeFlagsPatch,
    readonly op: Primitive & { _op: OpCodes.OP_UPDATE_RUNTIME_FLAGS }
  ) {
  }
}

class EffectPrimitive {
  public effect_instruction_i0 = undefined
  public effect_instruction_i1 = undefined
  public effect_instruction_i2 = undefined
  public trace = undefined;
  [EffectTypeId] = effectVariance
  constructor(readonly _op: Primitive["_op"]) {}
  [Equal.symbol](this: {}, that: unknown) {
    return this === that
  }
  [Hash.symbol](this: {}) {
    return Hash.cached(this, Hash.random(this))
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
  toJSON() {
    return {
      _id: "Effect",
      _op: this._op,
      effect_instruction_i0: toJSON(this.effect_instruction_i0),
      effect_instruction_i1: toJSON(this.effect_instruction_i1),
      effect_instruction_i2: toJSON(this.effect_instruction_i2)
    }
  }
  toString() {
    return format(this.toJSON())
  }
  [NodeInspectSymbol]() {
    return this.toJSON()
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this))
  }
}

/** @internal */
class EffectPrimitiveFailure {
  public effect_instruction_i0 = undefined
  public effect_instruction_i1 = undefined
  public effect_instruction_i2 = undefined
  public trace = undefined;
  [EffectTypeId] = effectVariance
  constructor(readonly _op: Primitive["_op"]) {
    // @ts-expect-error
    this._tag = _op
  }
  [Equal.symbol](this: {}, that: unknown) {
    return exitIsExit(that) && that._op === "Failure" &&
      // @ts-expect-error
      Equal.equals(this.effect_instruction_i0, that.effect_instruction_i0)
  }
  [Hash.symbol](this: {}) {
    return pipe(
      // @ts-expect-error
      Hash.string(this._tag),
      // @ts-expect-error
      Hash.combine(Hash.hash(this.effect_instruction_i0)),
      Hash.cached(this)
    )
  }
  get cause() {
    return this.effect_instruction_i0
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      cause: (this.cause as any).toJSON()
    }
  }
  toString() {
    return format(this.toJSON())
  }
  [NodeInspectSymbol]() {
    return this.toJSON()
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this))
  }
}

/** @internal */
class EffectPrimitiveSuccess {
  public effect_instruction_i0 = undefined
  public effect_instruction_i1 = undefined
  public effect_instruction_i2 = undefined
  public trace = undefined;
  [EffectTypeId] = effectVariance
  constructor(readonly _op: Primitive["_op"]) {
    // @ts-expect-error
    this._tag = _op
  }
  [Equal.symbol](this: {}, that: unknown) {
    return exitIsExit(that) && that._op === "Success" &&
      // @ts-expect-error
      Equal.equals(this.effect_instruction_i0, that.effect_instruction_i0)
  }
  [Hash.symbol](this: {}) {
    return pipe(
      // @ts-expect-error
      Hash.string(this._tag),
      // @ts-expect-error
      Hash.combine(Hash.hash(this.effect_instruction_i0)),
      Hash.cached(this)
    )
  }
  get value() {
    return this.effect_instruction_i0
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
  toJSON() {
    return {
      _id: "Exit",
      _tag: this._op,
      value: toJSON(this.value)
    }
  }
  toString() {
    return format(this.toJSON())
  }
  [NodeInspectSymbol]() {
    return this.toJSON()
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this))
  }
}

/** @internal */
export type Op<Tag extends string, Body = {}> = Effect.Effect<never> & Body & {
  readonly _op: Tag
}

/** @internal */
export interface Async extends
  Op<OpCodes.OP_ASYNC, {
    effect_instruction_i0(resume: (effect: Primitive) => void): void
    readonly effect_instruction_i1: FiberId.FiberId
  }>
{}

/** @internal */
export interface Blocked<out E = any, out A = any> extends
  Op<"Blocked", {
    readonly effect_instruction_i0: BlockedRequests.RequestBlock
    readonly effect_instruction_i1: Effect.Effect<A, E>
  }>
{}

/** @internal */
export interface RunBlocked extends
  Op<"RunBlocked", {
    readonly effect_instruction_i0: BlockedRequests.RequestBlock
  }>
{}

/** @internal */
export interface Failure extends
  Op<OpCodes.OP_FAILURE, {
    readonly effect_instruction_i0: Cause.Cause<unknown>
  }>
{}

/** @internal */
export interface OpTag extends Op<OpCodes.OP_TAG, {}> {}

/** @internal */
export interface Commit extends
  Op<OpCodes.OP_COMMIT, {
    commit(): Effect.Effect<unknown, unknown, unknown>
  }>
{}

/** @internal */
export interface OnFailure extends
  Op<OpCodes.OP_ON_FAILURE, {
    readonly effect_instruction_i0: Primitive
    effect_instruction_i1(a: Cause.Cause<unknown>): Primitive
  }>
{}

/** @internal */
export interface OnSuccess extends
  Op<OpCodes.OP_ON_SUCCESS, {
    readonly effect_instruction_i0: Primitive
    effect_instruction_i1(a: unknown): Primitive
  }>
{}

/** @internal */
export interface OnStep extends Op<"OnStep", { readonly effect_instruction_i0: Primitive }> {}

/** @internal */
export interface OnSuccessAndFailure extends
  Op<OpCodes.OP_ON_SUCCESS_AND_FAILURE, {
    readonly effect_instruction_i0: Primitive
    effect_instruction_i1(a: Cause.Cause<unknown>): Primitive
    effect_instruction_i2(a: unknown): Primitive
  }>
{}

/** @internal */
export interface Success extends
  Op<OpCodes.OP_SUCCESS, {
    readonly effect_instruction_i0: unknown
  }>
{}

/** @internal */
export interface Sync extends
  Op<OpCodes.OP_SYNC, {
    effect_instruction_i0(): unknown
  }>
{}

/** @internal */
export interface UpdateRuntimeFlags extends
  Op<OpCodes.OP_UPDATE_RUNTIME_FLAGS, {
    readonly effect_instruction_i0: RuntimeFlagsPatch.RuntimeFlagsPatch
    readonly effect_instruction_i1?: (oldRuntimeFlags: RuntimeFlags.RuntimeFlags) => Primitive
  }>
{}

/** @internal */
export interface While extends
  Op<OpCodes.OP_WHILE, {
    effect_instruction_i0(): boolean
    effect_instruction_i1(): Primitive
    effect_instruction_i2(a: unknown): void
  }>
{}

/** @internal */
export interface FromIterator extends
  Op<OpCodes.OP_ITERATOR, {
    effect_instruction_i0: Iterator<YieldWrap<Primitive>, any>
  }>
{}

/** @internal */
export interface WithRuntime extends
  Op<OpCodes.OP_WITH_RUNTIME, {
    effect_instruction_i0(fiber: FiberRuntime.FiberRuntime<unknown, unknown>, status: FiberStatus.Running): Primitive
  }>
{}

/** @internal */
export interface Yield extends Op<OpCodes.OP_YIELD> {}

/** @internal */
export const isEffect = (u: unknown): u is Effect.Effect<unknown, unknown, unknown> => hasProperty(u, EffectTypeId)

/* @internal */
export const withFiberRuntime = <A, E = never, R = never>(
  withRuntime: (fiber: FiberRuntime.FiberRuntime<A, E>, status: FiberStatus.Running) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> => {
  const effect = new EffectPrimitive(OpCodes.OP_WITH_RUNTIME) as any
  effect.effect_instruction_i0 = withRuntime
  return effect
}

/* @internal */
export const acquireUseRelease: {
  <A2, E2, R2, A, X, R3>(
    use: (a: A) => Effect.Effect<A2, E2, R2>,
    release: (a: A, exit: Exit.Exit<A2, E2>) => Effect.Effect<X, never, R3>
  ): <E, R>(acquire: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2 | E, R2 | R3 | R>
  <A, E, R, A2, E2, R2, X, R3>(
    acquire: Effect.Effect<A, E, R>,
    use: (a: A) => Effect.Effect<A2, E2, R2>,
    release: (a: A, exit: Exit.Exit<A2, E2>) => Effect.Effect<X, never, R3>
  ): Effect.Effect<A2, E | E2, R | R2 | R3>
} = dual(3, <A, E, R, A2, E2, R2, X, R3>(
  acquire: Effect.Effect<A, E, R>,
  use: (a: A) => Effect.Effect<A2, E2, R2>,
  release: (a: A, exit: Exit.Exit<A2, E2>) => Effect.Effect<X, never, R3>
): Effect.Effect<A2, E | E2, R | R2 | R3> =>
  uninterruptibleMask((restore) =>
    flatMap(
      acquire,
      (a) =>
        flatMap(exit(suspend(() => restore(use(a)))), (exit): Effect.Effect<A2, E | E2, R | R2 | R3> => {
          return suspend(() => release(a, exit)).pipe(
            matchCauseEffect({
              onFailure: (cause) => {
                switch (exit._tag) {
                  case OpCodes.OP_FAILURE:
                    return failCause(internalCause.sequential(exit.effect_instruction_i0, cause))
                  case OpCodes.OP_SUCCESS:
                    return failCause(cause)
                }
              },
              onSuccess: () => exit
            })
          )
        })
    )
  ))

/* @internal */
export const as: {
  <B>(value: B): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R>
  <A, E, R, B>(self: Effect.Effect<A, E, R>, value: B): Effect.Effect<B, E, R>
} = dual(
  2,
  <A, E, R, B>(self: Effect.Effect<A, E, R>, value: B): Effect.Effect<B, E, R> => flatMap(self, () => succeed(value))
)

/* @internal */
export const asVoid = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<void, E, R> => as(self, void 0)

/* @internal */
export const custom: {
  <X, A, E, R>(i0: X, body: (this: { effect_instruction_i0: X }) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R>
  <X, Y, A, E, R>(
    i0: X,
    i1: Y,
    body: (this: { effect_instruction_i0: X; effect_instruction_i1: Y }) => Effect.Effect<A, E, R>
  ): Effect.Effect<A, E, R>
  <X, Y, Z, A, E, R>(
    i0: X,
    i1: Y,
    i2: Z,
    body: (
      this: { effect_instruction_i0: X; effect_instruction_i1: Y; effect_instruction_i2: Z }
    ) => Effect.Effect<A, E, R>
  ): Effect.Effect<A, E, R>
} = function() {
  const wrapper = new EffectPrimitive(OpCodes.OP_COMMIT) as any
  switch (arguments.length) {
    case 2: {
      wrapper.effect_instruction_i0 = arguments[0]
      wrapper.commit = arguments[1]
      break
    }
    case 3: {
      wrapper.effect_instruction_i0 = arguments[0]
      wrapper.effect_instruction_i1 = arguments[1]
      wrapper.commit = arguments[2]
      break
    }
    case 4: {
      wrapper.effect_instruction_i0 = arguments[0]
      wrapper.effect_instruction_i1 = arguments[1]
      wrapper.effect_instruction_i2 = arguments[2]
      wrapper.commit = arguments[3]
      break
    }
    default: {
      throw new Error(getBugErrorMessage("you're not supposed to end up here"))
    }
  }
  return wrapper
}

/* @internal */
export const unsafeAsync = <A, E = never, R = never>(
  register: (
    callback: (_: Effect.Effect<A, E, R>) => void
  ) => void | Effect.Effect<void, never, R>,
  blockingOn: FiberId.FiberId = FiberId.none
): Effect.Effect<A, E, R> => {
  const effect = new EffectPrimitive(OpCodes.OP_ASYNC) as any
  let cancelerRef: Effect.Effect<void, never, R> | void = undefined
  effect.effect_instruction_i0 = (resume: (_: Effect.Effect<A, E, R>) => void) => {
    cancelerRef = register(resume)
  }
  effect.effect_instruction_i1 = blockingOn
  return onInterrupt(effect, (_) => isEffect(cancelerRef) ? cancelerRef : void_)
}

/* @internal */
export const asyncInterrupt = <A, E = never, R = never>(
  register: (
    callback: (_: Effect.Effect<A, E, R>) => void
  ) => void | Effect.Effect<void, never, R>,
  blockingOn: FiberId.FiberId = FiberId.none
): Effect.Effect<A, E, R> => suspend(() => unsafeAsync(register, blockingOn))

const async_ = <A, E = never, R = never>(
  resume: (
    callback: (_: Effect.Effect<A, E, R>) => void,
    signal: AbortSignal
  ) => void | Effect.Effect<void, never, R>,
  blockingOn: FiberId.FiberId = FiberId.none
): Effect.Effect<A, E, R> => {
  return custom(resume, function() {
    let backingResume: ((_: Effect.Effect<A, E, R>) => void) | undefined = undefined
    let pendingEffect: Effect.Effect<A, E, R> | undefined = undefined
    function proxyResume(effect: Effect.Effect<A, E, R>) {
      if (backingResume) {
        backingResume(effect)
      } else if (pendingEffect === undefined) {
        pendingEffect = effect
      }
    }
    const effect = new EffectPrimitive(OpCodes.OP_ASYNC) as any
    effect.effect_instruction_i0 = (resume: (_: Effect.Effect<A, E, R>) => void) => {
      backingResume = resume
      if (pendingEffect) {
        resume(pendingEffect)
      }
    }
    effect.effect_instruction_i1 = blockingOn
    let cancelerRef: Effect.Effect<void, never, R> | void = undefined
    let controllerRef: AbortController | void = undefined
    if (this.effect_instruction_i0.length !== 1) {
      controllerRef = new AbortController()
      cancelerRef = internalCall(() => this.effect_instruction_i0(proxyResume, controllerRef!.signal))
    } else {
      cancelerRef = internalCall(() => (this.effect_instruction_i0 as any)(proxyResume))
    }
    return (cancelerRef || controllerRef) ?
      onInterrupt(effect, (_) => {
        if (controllerRef) {
          controllerRef.abort()
        }
        return cancelerRef ?? void_
      }) :
      effect
  })
}
export {
  /** @internal */
  async_ as async
}

/* @internal */
export const catchAllCause = dual<
  <E, A2, E2, R2>(
    f: (cause: Cause.Cause<E>) => Effect.Effect<A2, E2, R2>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (cause: Cause.Cause<E>) => Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<A2 | A, E2, R2 | R>
>(2, (self, f) => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_FAILURE) as any
  effect.effect_instruction_i0 = self
  effect.effect_instruction_i1 = f
  return effect
})

/* @internal */
export const catchAll: {
  <E, A2, E2, R2>(
    f: (e: E) => Effect.Effect<A2, E2, R2>
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E2, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (e: E) => Effect.Effect<A2, E2, R2>
  ): Effect.Effect<A2 | A, E2, R2 | R>
} = dual(
  2,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (e: E) => Effect.Effect<A2, E2, R2>
  ): Effect.Effect<A2 | A, E2, R2 | R> => matchEffect(self, { onFailure: f, onSuccess: succeed })
)

/* @internal */
export const catchIf: {
  <E, EB extends E, A2, E2, R2>(
    refinement: Refinement<NoInfer<E>, EB>,
    f: (e: EB) => Effect.Effect<A2, E2, R2>
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E2 | Exclude<E, EB>, R2 | R>
  <E, A2, E2, R2>(
    predicate: Predicate<NoInfer<E>>,
    f: (e: NoInfer<E>) => Effect.Effect<A2, E2, R2>
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E | E2, R2 | R>
  <A, E, R, EB extends E, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    refinement: Refinement<E, EB>,
    f: (e: EB) => Effect.Effect<A2, E2, R2>
  ): Effect.Effect<A2 | A, E2 | Exclude<E, EB>, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    predicate: Predicate<E>,
    f: (e: E) => Effect.Effect<A2, E2, R2>
  ): Effect.Effect<A | A2, E | E2, R | R2>
} = dual(3, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  predicate: Predicate<E>,
  f: (e: E) => Effect.Effect<A2, E2, R2>
): Effect.Effect<A | A2, E | E2, R | R2> =>
  catchAllCause(self, (cause): Effect.Effect<A | A2, E | E2, R | R2> => {
    const either = internalCause.failureOrCause(cause)
    switch (either._tag) {
      case "Left":
        return predicate(either.left) ? f(either.left) : failCause(cause)
      case "Right":
        return failCause(either.right)
    }
  }))

/* @internal */
export const catchSome = dual<
  <E, A2, E2, R2>(
    pf: (e: NoInfer<E>) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E | E2, R2 | R>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    pf: (e: NoInfer<E>) => Option.Option<Effect.Effect<A2, E2, R2>>
  ) => Effect.Effect<A2 | A, E | E2, R2 | R>
>(2, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  pf: (e: NoInfer<E>) => Option.Option<Effect.Effect<A2, E2, R2>>
) =>
  catchAllCause(self, (cause): Effect.Effect<A2 | A, E | E2, R2 | R> => {
    const either = internalCause.failureOrCause(cause)
    switch (either._tag) {
      case "Left":
        return pipe(pf(either.left), Option.getOrElse(() => failCause(cause)))
      case "Right":
        return failCause(either.right)
    }
  }))

/* @internal */
export const checkInterruptible = <A, E, R>(
  f: (isInterruptible: boolean) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> => withFiberRuntime((_, status) => f(runtimeFlags_.interruption(status.runtimeFlags)))

const originalSymbol = Symbol.for("effect/OriginalAnnotation")

/* @internal */
export const originalInstance = <E>(obj: E): E => {
  if (hasProperty(obj, originalSymbol)) {
    // @ts-expect-error
    return obj[originalSymbol]
  }
  return obj
}

/* @internal */
export const capture = <E>(obj: E & object, span: Option.Option<Tracer.Span>): E => {
  if (Option.isSome(span)) {
    return new Proxy(obj, {
      has(target, p) {
        return p === internalCause.spanSymbol || p === originalSymbol || p in target
      },
      get(target, p) {
        if (p === internalCause.spanSymbol) {
          return span.value
        }
        if (p === originalSymbol) {
          return obj
        }
        // @ts-expect-error
        return target[p]
      }
    })
  }
  return obj
}

/* @internal */
export const die = (defect: unknown): Effect.Effect<never> =>
  isObject(defect) && !(internalCause.spanSymbol in defect) ?
    withFiberRuntime((fiber) => failCause(internalCause.die(capture(defect, currentSpanFromFiber(fiber)))))
    : failCause(internalCause.die(defect))

/* @internal */
export const dieMessage = (message: string): Effect.Effect<never> =>
  failCauseSync(() => internalCause.die(new RuntimeException(message)))

/* @internal */
export const dieSync = (evaluate: LazyArg<unknown>): Effect.Effect<never> => flatMap(sync(evaluate), die)

/* @internal */
export const either = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<Either.Either<A, E>, never, R> =>
  matchEffect(self, {
    onFailure: (e) => succeed(Either.left(e)),
    onSuccess: (a) => succeed(Either.right(a))
  })

/* @internal */
export const exit = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<Exit.Exit<A, E>, never, R> =>
  matchCause(self, {
    onFailure: exitFailCause,
    onSuccess: exitSucceed
  })

/* @internal */
export const fail = <E>(error: E): Effect.Effect<never, E> =>
  isObject(error) && !(internalCause.spanSymbol in error) ?
    withFiberRuntime((fiber) => failCause(internalCause.fail(capture(error, currentSpanFromFiber(fiber)))))
    : failCause(internalCause.fail(error))

/* @internal */
export const failSync = <E>(evaluate: LazyArg<E>): Effect.Effect<never, E> => flatMap(sync(evaluate), fail)

/* @internal */
export const failCause = <E>(cause: Cause.Cause<E>): Effect.Effect<never, E> => {
  const effect = new EffectPrimitiveFailure(OpCodes.OP_FAILURE) as any
  effect.effect_instruction_i0 = cause
  return effect
}

/* @internal */
export const failCauseSync = <E>(
  evaluate: LazyArg<Cause.Cause<E>>
): Effect.Effect<never, E> => flatMap(sync(evaluate), failCause)

/* @internal */
export const fiberId: Effect.Effect<FiberId.FiberId> = withFiberRuntime((state) => succeed(state.id()))

/* @internal */
export const fiberIdWith = <A, E, R>(
  f: (descriptor: FiberId.Runtime) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> => withFiberRuntime((state) => f(state.id()))

/* @internal */
export const flatMap = dual<
  <A, B, E1, R1>(
    f: (a: A) => Effect.Effect<B, E1, R1>
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E1 | E, R1 | R>,
  <A, E, R, B, E1, R1>(
    self: Effect.Effect<A, E, R>,
    f: (a: A) => Effect.Effect<B, E1, R1>
  ) => Effect.Effect<B, E | E1, R | R1>
>(
  2,
  (self, f) => {
    const effect = new EffectPrimitive(OpCodes.OP_ON_SUCCESS) as any
    effect.effect_instruction_i0 = self
    effect.effect_instruction_i1 = f
    return effect
  }
)

/* @internal */
export const andThen: {
  <A, X>(
    f: (a: NoInfer<A>) => X
  ): <E, R>(
    self: Effect.Effect<A, E, R>
  ) => [X] extends [Effect.Effect<infer A1, infer E1, infer R1>] ? Effect.Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>] ? Effect.Effect<A1, E | Cause.UnknownException, R>
    : Effect.Effect<X, E, R>
  <X>(
    f: NotFunction<X>
  ): <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => [X] extends [Effect.Effect<infer A1, infer E1, infer R1>] ? Effect.Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>] ? Effect.Effect<A1, E | Cause.UnknownException, R>
    : Effect.Effect<X, E, R>
  <A, E, R, X>(
    self: Effect.Effect<A, E, R>,
    f: (a: NoInfer<A>) => X
  ): [X] extends [Effect.Effect<infer A1, infer E1, infer R1>] ? Effect.Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>] ? Effect.Effect<A1, E | Cause.UnknownException, R>
    : Effect.Effect<X, E, R>
  <A, E, R, X>(
    self: Effect.Effect<A, E, R>,
    f: NotFunction<X>
  ): [X] extends [Effect.Effect<infer A1, infer E1, infer R1>] ? Effect.Effect<A1, E | E1, R | R1>
    : [X] extends [PromiseLike<infer A1>] ? Effect.Effect<A1, E | Cause.UnknownException, R>
    : Effect.Effect<X, E, R>
} = dual(2, (self, f) =>
  flatMap(self, (a) => {
    const b = typeof f === "function" ? (f as any)(a) : f
    if (isEffect(b)) {
      return b
    } else if (isPromiseLike(b)) {
      return unsafeAsync<any, Cause.UnknownException>((resume) => {
        b.then((a) => resume(succeed(a)), (e) =>
          resume(fail(new UnknownException(e, "An unknown error occurred in Effect.andThen"))))
      })
    }
    return succeed(b)
  }))

/* @internal */
export const step = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<Exit.Exit<A, E> | Effect.Blocked<A, E>, never, R> => {
  const effect = new EffectPrimitive("OnStep") as any
  effect.effect_instruction_i0 = self
  return effect
}

/* @internal */
export const flatten = <A, E1, R1, E, R>(
  self: Effect.Effect<Effect.Effect<A, E1, R1>, E, R>
): Effect.Effect<A, E | E1, R | R1> => flatMap(self, identity)

/* @internal */
export const flip = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<E, A, R> =>
  matchEffect(self, { onFailure: succeed, onSuccess: fail })

/* @internal */
export const matchCause: {
  <E, A2, A, A3>(
    options: {
      readonly onFailure: (cause: Cause.Cause<E>) => A2
      readonly onSuccess: (a: A) => A3
    }
  ): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A3, never, R>
  <A, E, R, A2, A3>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onFailure: (cause: Cause.Cause<E>) => A2
      readonly onSuccess: (a: A) => A3
    }
  ): Effect.Effect<A2 | A3, never, R>
} = dual(2, <A, E, R, A2, A3>(
  self: Effect.Effect<A, E, R>,
  options: {
    readonly onFailure: (cause: Cause.Cause<E>) => A2
    readonly onSuccess: (a: A) => A3
  }
): Effect.Effect<A2 | A3, never, R> =>
  matchCauseEffect(self, {
    onFailure: (cause) => succeed(options.onFailure(cause)),
    onSuccess: (a) => succeed(options.onSuccess(a))
  }))

/* @internal */
export const matchCauseEffect: {
  <E, A2, E2, R2, A, A3, E3, R3>(
    options: {
      readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<A2, E2, R2>
      readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
    }
  ): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A3, E2 | E3, R2 | R3 | R>
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<A2, E2, R2>
      readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
    }
  ): Effect.Effect<A2 | A3, E2 | E3, R2 | R3 | R>
} = dual(2, <A, E, R, A2, E2, R2, A3, E3, R3>(
  self: Effect.Effect<A, E, R>,
  options: {
    readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<A2, E2, R2>
    readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
  }
): Effect.Effect<A2 | A3, E2 | E3, R2 | R3 | R> => {
  const effect = new EffectPrimitive(OpCodes.OP_ON_SUCCESS_AND_FAILURE) as any
  effect.effect_instruction_i0 = self
  effect.effect_instruction_i1 = options.onFailure
  effect.effect_instruction_i2 = options.onSuccess
  return effect
})

/* @internal */
export const matchEffect: {
  <E, A2, E2, R2, A, A3, E3, R3>(
    options: {
      readonly onFailure: (e: E) => Effect.Effect<A2, E2, R2>
      readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
    }
  ): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A3, E2 | E3, R2 | R3 | R>
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly onFailure: (e: E) => Effect.Effect<A2, E2, R2>
      readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
    }
  ): Effect.Effect<A2 | A3, E2 | E3, R2 | R3 | R>
} = dual(2, <A, E, R, A2, E2, R2, A3, E3, R3>(
  self: Effect.Effect<A, E, R>,
  options: {
    readonly onFailure: (e: E) => Effect.Effect<A2, E2, R2>
    readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
  }
): Effect.Effect<A2 | A3, E2 | E3, R2 | R3 | R> =>
  matchCauseEffect(self, {
    onFailure: (cause) => {
      const defects = internalCause.defects(cause)
      if (defects.length > 0) {
        return failCause(internalCause.electFailures(cause))
      }
      const failures = internalCause.failures(cause)
      if (failures.length > 0) {
        return options.onFailure(Chunk.unsafeHead(failures))
      }
      return failCause(cause as Cause.Cause<never>)
    },
    onSuccess: options.onSuccess
  }))

/* @internal */
export const forEachSequential: {
  <A, B, E, R>(f: (a: A, i: number) => Effect.Effect<B, E, R>): (self: Iterable<A>) => Effect.Effect<Array<B>, E, R>
  <A, B, E, R>(self: Iterable<A>, f: (a: A, i: number) => Effect.Effect<B, E, R>): Effect.Effect<Array<B>, E, R>
} = dual(
  2,
  <A, B, E, R>(self: Iterable<A>, f: (a: A, i: number) => Effect.Effect<B, E, R>): Effect.Effect<Array<B>, E, R> =>
    suspend(() => {
      const arr = Arr.fromIterable(self)
      const ret = Arr.allocate<B>(arr.length)
      let i = 0
      return as(
        whileLoop({
          while: () => i < arr.length,
          body: () => f(arr[i], i),
          step: (b) => {
            ret[i++] = b
          }
        }),
        ret as Array<B>
      )
    })
)

/* @internal */
export const forEachSequentialDiscard: {
  <A, B, E, R>(f: (a: A, i: number) => Effect.Effect<B, E, R>): (self: Iterable<A>) => Effect.Effect<void, E, R>
  <A, B, E, R>(self: Iterable<A>, f: (a: A, i: number) => Effect.Effect<B, E, R>): Effect.Effect<void, E, R>
} = dual(
  2,
  <A, B, E, R>(self: Iterable<A>, f: (a: A, i: number) => Effect.Effect<B, E, R>): Effect.Effect<void, E, R> =>
    suspend(() => {
      const arr = Arr.fromIterable(self)
      let i = 0
      return whileLoop({
        while: () => i < arr.length,
        body: () => f(arr[i], i),
        step: () => {
          i++
        }
      })
    })
)

/* @internal */
export const if_ = dual<
  <A1, E1, R1, A2, E2, R2>(
    options: {
      readonly onTrue: LazyArg<Effect.Effect<A1, E1, R1>>
      readonly onFalse: LazyArg<Effect.Effect<A2, E2, R2>>
    }
  ) => <E = never, R = never>(
    self: Effect.Effect<boolean, E, R> | boolean
  ) => Effect.Effect<A1 | A2, E | E1 | E2, R | R1 | R2>,
  <A1, E1, R1, A2, E2, R2, E = never, R = never>(
    self: Effect.Effect<boolean, E, R> | boolean,
    options: {
      readonly onTrue: LazyArg<Effect.Effect<A1, E1, R1>>
      readonly onFalse: LazyArg<Effect.Effect<A2, E2, R2>>
    }
  ) => Effect.Effect<A1 | A2, E1 | E2 | E, R1 | R2 | R>
>(
  (args) => typeof args[0] === "boolean" || isEffect(args[0]),
  <A1, E1, R1, A2, E2, R2, E = never, R = never>(
    self: Effect.Effect<boolean, E, R> | boolean,
    options: {
      readonly onTrue: LazyArg<Effect.Effect<A1, E1, R1>>
      readonly onFalse: LazyArg<Effect.Effect<A2, E2, R2>>
    }
  ): Effect.Effect<A1 | A2, E1 | E2 | E, R1 | R2 | R> =>
    isEffect(self)
      ? flatMap(self, (b): Effect.Effect<A1 | A2, E1 | E2, R1 | R2> => (b ? options.onTrue() : options.onFalse()))
      : self
      ? options.onTrue()
      : options.onFalse()
)

/* @internal */
export const interrupt: Effect.Effect<never> = flatMap(fiberId, (fiberId) => interruptWith(fiberId))

/* @internal */
export const interruptWith = (fiberId: FiberId.FiberId): Effect.Effect<never> =>
  failCause(internalCause.interrupt(fiberId))

/* @internal */
export const interruptible = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS) as any
  effect.effect_instruction_i0 = RuntimeFlagsPatch.enable(runtimeFlags_.Interruption)
  effect.effect_instruction_i1 = () => self
  return effect
}

/* @internal */
export const interruptibleMask = <A, E, R>(
  f: (restore: <AX, EX, RX>(effect: Effect.Effect<AX, EX, RX>) => Effect.Effect<AX, EX, RX>) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  custom(f, function() {
    const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS) as any
    effect.effect_instruction_i0 = RuntimeFlagsPatch.enable(runtimeFlags_.Interruption)
    effect.effect_instruction_i1 = (oldFlags: RuntimeFlags.RuntimeFlags) =>
      runtimeFlags_.interruption(oldFlags)
        ? internalCall(() => this.effect_instruction_i0(interruptible))
        : internalCall(() => this.effect_instruction_i0(uninterruptible))
    return effect
  })

/* @internal */
export const intoDeferred: {
  <A, E>(deferred: Deferred.Deferred<A, E>): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<boolean, never, R>
  <A, E, R>(self: Effect.Effect<A, E, R>, deferred: Deferred.Deferred<A, E>): Effect.Effect<boolean, never, R>
} = dual(
  2,
  <A, E, R>(self: Effect.Effect<A, E, R>, deferred: Deferred.Deferred<A, E>): Effect.Effect<boolean, never, R> =>
    uninterruptibleMask((restore) =>
      flatMap(
        exit(restore(self)),
        (exit) => deferredDone(deferred, exit)
      )
    )
)

/* @internal */
export const map: {
  <A, B>(f: (a: A) => B): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R>
  <A, E, R, B>(self: Effect.Effect<A, E, R>, f: (a: A) => B): Effect.Effect<B, E, R>
} = dual(
  2,
  <A, E, R, B>(self: Effect.Effect<A, E, R>, f: (a: A) => B): Effect.Effect<B, E, R> =>
    flatMap(self, (a) => sync(() => f(a)))
)

/* @internal */
export const mapBoth: {
  <E, E2, A, A2>(
    options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
  ): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R>
  <A, E, R, E2, A2>(
    self: Effect.Effect<A, E, R>,
    options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
  ): Effect.Effect<A2, E2, R>
} = dual(2, <A, E, R, E2, A2>(
  self: Effect.Effect<A, E, R>,
  options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
): Effect.Effect<A2, E2, R> =>
  matchEffect(self, {
    onFailure: (e) => failSync(() => options.onFailure(e)),
    onSuccess: (a) => sync(() => options.onSuccess(a))
  }))

/* @internal */
export const mapError: {
  <E, E2>(f: (e: E) => E2): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E2, R>
  <A, E, R, E2>(self: Effect.Effect<A, E, R>, f: (e: E) => E2): Effect.Effect<A, E2, R>
} = dual(
  2,
  <A, E, R, E2>(self: Effect.Effect<A, E, R>, f: (e: E) => E2): Effect.Effect<A, E2, R> =>
    matchCauseEffect(self, {
      onFailure: (cause) => {
        const either = internalCause.failureOrCause(cause)
        switch (either._tag) {
          case "Left": {
            return failSync(() => f(either.left))
          }
          case "Right": {
            return failCause(either.right)
          }
        }
      },
      onSuccess: succeed
    })
)

/* @internal */
export const onError: {
  <E, X, R2>(
    cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect.Effect<A, E, R>,
    cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>
  ): Effect.Effect<A, E, R2 | R>
} = dual(2, <A, E, R, X, R2>(
  self: Effect.Effect<A, E, R>,
  cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>
): Effect.Effect<A, E, R2 | R> =>
  onExit(self, (exit) => exitIsSuccess(exit) ? void_ : cleanup(exit.effect_instruction_i0)))

/* @internal */
export const onExit: {
  <A, E, X, R2>(
    cleanup: (exit: Exit.Exit<A, E>) => Effect.Effect<X, never, R2>
  ): <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect.Effect<A, E, R>,
    cleanup: (exit: Exit.Exit<A, E>) => Effect.Effect<X, never, R2>
  ): Effect.Effect<A, E, R2 | R>
} = dual(2, <A, E, R, X, R2>(
  self: Effect.Effect<A, E, R>,
  cleanup: (exit: Exit.Exit<A, E>) => Effect.Effect<X, never, R2>
): Effect.Effect<A, E, R2 | R> =>
  uninterruptibleMask((restore) =>
    matchCauseEffect(restore(self), {
      onFailure: (cause1) => {
        const result = exitFailCause(cause1)
        return matchCauseEffect(cleanup(result), {
          onFailure: (cause2) => exitFailCause(internalCause.sequential(cause1, cause2)),
          onSuccess: () => result
        })
      },
      onSuccess: (success) => {
        const result = exitSucceed(success)
        return zipRight(cleanup(result), result)
      }
    })
  ))

/* @internal */
export const onInterrupt: {
  <X, R2>(
    cleanup: (interruptors: HashSet.HashSet<FiberId.FiberId>) => Effect.Effect<X, never, R2>
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R2 | R>
  <A, E, R, X, R2>(
    self: Effect.Effect<A, E, R>,
    cleanup: (interruptors: HashSet.HashSet<FiberId.FiberId>) => Effect.Effect<X, never, R2>
  ): Effect.Effect<A, E, R2 | R>
} = dual(2, <A, E, R, X, R2>(
  self: Effect.Effect<A, E, R>,
  cleanup: (interruptors: HashSet.HashSet<FiberId.FiberId>) => Effect.Effect<X, never, R2>
): Effect.Effect<A, E, R2 | R> =>
  onExit(
    self,
    exitMatch({
      onFailure: (cause) =>
        internalCause.isInterruptedOnly(cause)
          ? asVoid(cleanup(internalCause.interruptors(cause)))
          : void_,
      onSuccess: () => void_
    })
  ))

/* @internal */
export const orElse: {
  <A2, E2, R2>(
    that: LazyArg<Effect.Effect<A2, E2, R2>>
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A, E2, R2 | R>
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: LazyArg<Effect.Effect<A2, E2, R2>>
  ): Effect.Effect<A2 | A, E2, R2 | R>
} = dual(
  2,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: LazyArg<Effect.Effect<A2, E2, R2>>
  ): Effect.Effect<A2 | A, E2, R2 | R> => attemptOrElse(self, that, succeed)
)

/* @internal */
export const orDie = <A, E, R>(self: Effect.Effect<A, E, R>): Effect.Effect<A, never, R> => orDieWith(self, identity)

/* @internal */
export const orDieWith: {
  <E>(f: (error: E) => unknown): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, never, R>
  <A, E, R>(self: Effect.Effect<A, E, R>, f: (error: E) => unknown): Effect.Effect<A, never, R>
} = dual(
  2,
  <A, E, R>(self: Effect.Effect<A, E, R>, f: (error: E) => unknown): Effect.Effect<A, never, R> =>
    matchEffect(self, {
      onFailure: (e) => die(f(e)),
      onSuccess: succeed
    })
)

/* @internal */
export const partitionMap: <A, A1, A2>(
  elements: Iterable<A>,
  f: (a: A) => Either.Either<A2, A1>
) => [left: Array<A1>, right: Array<A2>] = Arr.partitionMap
/* @internal */
export const runtimeFlags: Effect.Effect<RuntimeFlags.RuntimeFlags> = withFiberRuntime((_, status) =>
  succeed(status.runtimeFlags)
)

/* @internal */
export const succeed = <A>(value: A): Effect.Effect<A> => {
  const effect = new EffectPrimitiveSuccess(OpCodes.OP_SUCCESS) as any
  effect.effect_instruction_i0 = value
  return effect
}

/* @internal */
export const suspend = <A, E, R>(evaluate: LazyArg<Effect.Effect<A, E, R>>): Effect.Effect<A, E, R> => {
  const effect = new EffectPrimitive(OpCodes.OP_COMMIT) as any
  effect.commit = evaluate
  return effect
}

/* @internal */
export const sync = <A>(thunk: LazyArg<A>): Effect.Effect<A> => {
  const effect = new EffectPrimitive(OpCodes.OP_SYNC) as any
  effect.effect_instruction_i0 = thunk
  return effect
}

/* @internal */
export const tap = dual<
  {
    <A, X>(
      f: (a: NoInfer<A>) => X
    ): <E, R>(
      self: Effect.Effect<A, E, R>
    ) => [X] extends [Effect.Effect<infer _A1, infer E1, infer R1>] ? Effect.Effect<A, E | E1, R | R1>
      : [X] extends [PromiseLike<infer _A1>] ? Effect.Effect<A, E | Cause.UnknownException, R>
      : Effect.Effect<A, E, R>
    <A, X, E1, R1>(
      f: (a: NoInfer<A>) => Effect.Effect<X, E1, R1>,
      options: { onlyEffect: true }
    ): <E, R>(
      self: Effect.Effect<A, E, R>
    ) => Effect.Effect<A, E | E1, R | R1>
    <X>(
      f: NotFunction<X>
    ): <A, E, R>(
      self: Effect.Effect<A, E, R>
    ) => [X] extends [Effect.Effect<infer _A1, infer E1, infer R1>] ? Effect.Effect<A, E | E1, R | R1>
      : [X] extends [PromiseLike<infer _A1>] ? Effect.Effect<A, E | Cause.UnknownException, R>
      : Effect.Effect<A, E, R>
    <X, E1, R1>(
      f: Effect.Effect<X, E1, R1>,
      options: { onlyEffect: true }
    ): <A, E, R>(
      self: Effect.Effect<A, E, R>
    ) => Effect.Effect<A, E | E1, R | R1>
  },
  {
    <A, E, R, X>(
      self: Effect.Effect<A, E, R>,
      f: (a: NoInfer<A>) => X
    ): [X] extends [Effect.Effect<infer _A1, infer E1, infer R1>] ? Effect.Effect<A, E | E1, R | R1>
      : [X] extends [PromiseLike<infer _A1>] ? Effect.Effect<A, E | Cause.UnknownException, R>
      : Effect.Effect<A, E, R>
    <A, E, R, X, E1, R1>(
      self: Effect.Effect<A, E, R>,
      f: (a: NoInfer<A>) => Effect.Effect<X, E1, R1>,
      options: { onlyEffect: true }
    ): Effect.Effect<A, E | E1, R | R1>
    <A, E, R, X>(
      self: Effect.Effect<A, E, R>,
      f: NotFunction<X>
    ): [X] extends [Effect.Effect<infer _A1, infer E1, infer R1>] ? Effect.Effect<A, E | E1, R | R1>
      : [X] extends [PromiseLike<infer _A1>] ? Effect.Effect<A, E | Cause.UnknownException, R>
      : Effect.Effect<A, E, R>
    <A, E, R, X, E1, R1>(
      self: Effect.Effect<A, E, R>,
      f: Effect.Effect<X, E1, R1>,
      options: { onlyEffect: true }
    ): Effect.Effect<A, E | E1, R | R1>
  }
>(
  (args) => args.length === 3 || args.length === 2 && !(isObject(args[1]) && "onlyEffect" in args[1]),
  <A, E, R, X>(self: Effect.Effect<A, E, R>, f: X) =>
    flatMap(self, (a) => {
      const b = typeof f === "function" ? (f as any)(a) : f
      if (isEffect(b)) {
        return as(b, a)
      } else if (isPromiseLike(b)) {
        return unsafeAsync<any, Cause.UnknownException>((resume) => {
          b.then((_) => resume(succeed(a)), (e) =>
            resume(fail(new UnknownException(e, "An unknown error occurred in Effect.tap"))))
        })
      }
      return succeed(a)
    })
)

/* @internal */
export const transplant = <A, E, R>(
  f: (grafter: <A2, E2, R2>(effect: Effect.Effect<A2, E2, R2>) => Effect.Effect<A2, E2, R2>) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  withFiberRuntime<A, E, R>((state) => {
    const scopeOverride = state.getFiberRef(currentForkScopeOverride)
    const scope = pipe(scopeOverride, Option.getOrElse(() => state.scope()))
    return f(fiberRefLocally(currentForkScopeOverride, Option.some(scope)))
  })

/* @internal */
export const attemptOrElse: {
  <A2, E2, R2, A, A3, E3, R3>(
    that: LazyArg<Effect.Effect<A2, E2, R2>>,
    onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2 | A3, E2 | E3, R | R2 | R3>
  <A, E, R, A2, E2, R2, A3, E3, R3>(
    self: Effect.Effect<A, E, R>,
    that: LazyArg<Effect.Effect<A2, E2, R2>>,
    onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
  ): Effect.Effect<A2 | A3, E2 | E3, R | R2 | R3>
} = dual(3, <A, E, R, A2, E2, R2, A3, E3, R3>(
  self: Effect.Effect<A, E, R>,
  that: LazyArg<Effect.Effect<A2, E2, R2>>,
  onSuccess: (a: A) => Effect.Effect<A3, E3, R3>
): Effect.Effect<A2 | A3, E2 | E3, R | R2 | R3> =>
  matchCauseEffect(self, {
    onFailure: (cause) => {
      const defects = internalCause.defects(cause)
      if (defects.length > 0) {
        return failCause(Option.getOrThrow(internalCause.keepDefectsAndElectFailures(cause)))
      }
      return that()
    },
    onSuccess
  }))

/* @internal */
export const uninterruptible: <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R> = <A, E, R>(
  self: Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS) as any
  effect.effect_instruction_i0 = RuntimeFlagsPatch.disable(runtimeFlags_.Interruption)
  effect.effect_instruction_i1 = () => self
  return effect
}

/* @internal */
export const uninterruptibleMask = <A, E, R>(
  f: (restore: <AX, EX, RX>(effect: Effect.Effect<AX, EX, RX>) => Effect.Effect<AX, EX, RX>) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  custom(f, function() {
    const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS) as any
    effect.effect_instruction_i0 = RuntimeFlagsPatch.disable(runtimeFlags_.Interruption)
    effect.effect_instruction_i1 = (oldFlags: RuntimeFlags.RuntimeFlags) =>
      runtimeFlags_.interruption(oldFlags)
        ? internalCall(() => this.effect_instruction_i0(interruptible))
        : internalCall(() => this.effect_instruction_i0(uninterruptible))
    return effect
  })

const void_: Effect.Effect<void> = succeed(void 0)
export {
  /* @internal */
  void_ as void
}

/* @internal */
export const updateRuntimeFlags = (patch: RuntimeFlagsPatch.RuntimeFlagsPatch): Effect.Effect<void> => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS) as any
  effect.effect_instruction_i0 = patch
  effect.effect_instruction_i1 = void 0
  return effect
}

/* @internal */
export const whenEffect: {
  <E, R>(
    condition: Effect.Effect<boolean, E, R>
  ): <A, E2, R2>(
    effect: Effect.Effect<A, E2, R2>
  ) => Effect.Effect<Option.Option<A>, E | E2, R | R2>
  <A, E2, R2, E, R>(
    self: Effect.Effect<A, E2, R2>,
    condition: Effect.Effect<boolean, E, R>
  ): Effect.Effect<Option.Option<A>, E | E2, R | R2>
} = dual(2, <A, E2, R2, E, R>(
  self: Effect.Effect<A, E2, R2>,
  condition: Effect.Effect<boolean, E, R>
): Effect.Effect<Option.Option<A>, E | E2, R | R2> =>
  flatMap(condition, (b) => {
    if (b) {
      return pipe(self, map(Option.some))
    }
    return succeed(Option.none())
  }))

/* @internal */
export const whileLoop = <A, E, R>(
  options: {
    readonly while: LazyArg<boolean>
    readonly body: LazyArg<Effect.Effect<A, E, R>>
    readonly step: (a: A) => void
  }
): Effect.Effect<void, E, R> => {
  const effect = new EffectPrimitive(OpCodes.OP_WHILE) as any
  effect.effect_instruction_i0 = options.while
  effect.effect_instruction_i1 = options.body
  effect.effect_instruction_i2 = options.step
  return effect
}

/* @internal */
export const fromIterator = <Eff extends YieldWrap<Effect.Effect<any, any, any>>, AEff>(
  iterator: LazyArg<Iterator<Eff, AEff, never>>
): Effect.Effect<
  AEff,
  [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect.Effect<infer _A, infer E, infer _R>>] ? E : never,
  [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Effect.Effect<infer _A, infer _E, infer R>>] ? R : never
> =>
  suspend(() => {
    const effect = new EffectPrimitive(OpCodes.OP_ITERATOR) as any
    effect.effect_instruction_i0 = iterator()
    return effect
  })

/* @internal */
export const gen: typeof Effect.gen = function() {
  const f = arguments.length === 1 ? arguments[0] : arguments[1].bind(arguments[0])
  return fromIterator(() => f(pipe))
}

/** @internal */
export const fnUntraced: Effect.fn.Untraced = (body: Function, ...pipeables: Array<any>) =>
  Object.defineProperty(
    pipeables.length === 0
      ? function(this: any, ...args: Array<any>) {
        return fromIterator(() => body.apply(this, args))
      }
      : function(this: any, ...args: Array<any>) {
        let effect = fromIterator(() => body.apply(this, args))
        for (const x of pipeables) {
          effect = x(effect, ...args)
        }
        return effect
      },
    "length",
    { value: body.length, configurable: true }
  )

/* @internal */
export const withConcurrency = dual<
  (concurrency: number | "unbounded") => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, concurrency: number | "unbounded") => Effect.Effect<A, E, R>
>(2, (self, concurrency) => fiberRefLocally(self, currentConcurrency, concurrency))

/* @internal */
export const withRequestBatching = dual<
  (requestBatching: boolean) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, requestBatching: boolean) => Effect.Effect<A, E, R>
>(2, (self, requestBatching) => fiberRefLocally(self, currentRequestBatching, requestBatching))

/* @internal */
export const withRuntimeFlags = dual<
  (update: RuntimeFlagsPatch.RuntimeFlagsPatch) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, update: RuntimeFlagsPatch.RuntimeFlagsPatch) => Effect.Effect<A, E, R>
>(2, (self, update) => {
  const effect = new EffectPrimitive(OpCodes.OP_UPDATE_RUNTIME_FLAGS) as any
  effect.effect_instruction_i0 = update
  effect.effect_instruction_i1 = () => self
  return effect
})

/** @internal */
export const withTracerEnabled = dual<
  (enabled: boolean) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(effect: Effect.Effect<A, E, R>, enabled: boolean) => Effect.Effect<A, E, R>
>(2, (effect, enabled) =>
  fiberRefLocally(
    effect,
    currentTracerEnabled,
    enabled
  ))

/** @internal */
export const withTracerTiming = dual<
  (enabled: boolean) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(effect: Effect.Effect<A, E, R>, enabled: boolean) => Effect.Effect<A, E, R>
>(2, (effect, enabled) =>
  fiberRefLocally(
    effect,
    currentTracerTimingEnabled,
    enabled
  ))

/* @internal */
export const yieldNow = (options?: {
  readonly priority?: number | undefined
}): Effect.Effect<void> => {
  const effect = new EffectPrimitive(OpCodes.OP_YIELD) as any
  return typeof options?.priority !== "undefined" ?
    withSchedulingPriority(effect, options.priority) :
    effect
}

/* @internal */
export const zip = dual<
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>
  ) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<[A, A2], E | E2, R | R2>,
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<[A, A2], E | E2, R | R2>
>(2, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>
): Effect.Effect<[A, A2], E | E2, R | R2> => flatMap(self, (a) => map(that, (b) => [a, b])))

/* @internal */
export const zipFlatten: {
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>
  ): <A extends ReadonlyArray<any>, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<[...A, A2], E | E2, R | R2>
  <A extends ReadonlyArray<any>, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>
  ): Effect.Effect<[...A, A2], E | E2, R | R2>
} = dual(2, <A extends ReadonlyArray<any>, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>
): Effect.Effect<[...A, A2], E | E2, R | R2> => flatMap(self, (a) => map(that, (b) => [...a, b])))

/* @internal */
export const zipLeft: {
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E2, R | R2>
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>
  ): Effect.Effect<A, E | E2, R | R2>
} = dual(2, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>
): Effect.Effect<A, E | E2, R | R2> => flatMap(self, (a) => as(that, a)))

/* @internal */
export const zipRight: {
  <A2, E2, R2>(
    that: Effect.Effect<A2, E2, R2>
  ): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E | E2, R | R2>
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>
  ): Effect.Effect<A2, E | E2, R | R2>
} = dual(2, <A, E, R, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>
): Effect.Effect<A2, E | E2, R | R2> => flatMap(self, () => that))

/* @internal */
export const zipWith: {
  <A2, E2, R2, A, B>(
    that: Effect.Effect<A2, E2, R2>,
    f: (a: A, b: A2) => B
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E | E2, R | R2>
  <A, E, R, A2, E2, R2, B>(
    self: Effect.Effect<A, E, R>,
    that: Effect.Effect<A2, E2, R2>,
    f: (a: A, b: A2) => B
  ): Effect.Effect<B, E | E2, R | R2>
} = dual(3, <A, E, R, A2, E2, R2, B>(
  self: Effect.Effect<A, E, R>,
  that: Effect.Effect<A2, E2, R2>,
  f: (a: A, b: A2) => B
): Effect.Effect<B, E | E2, R | R2> => flatMap(self, (a) => map(that, (b) => f(a, b))))

/* @internal */
export const never: Effect.Effect<never> = asyncInterrupt<never>(() => {
  const interval = setInterval(() => {
    //
  }, 2 ** 31 - 1)
  return sync(() => clearInterval(interval))
})

// -----------------------------------------------------------------------------
// Fiber
// -----------------------------------------------------------------------------

/* @internal */
export const interruptFiber = <A, E>(self: Fiber.Fiber<A, E>): Effect.Effect<Exit.Exit<A, E>> =>
  flatMap(fiberId, (fiberId) => pipe(self, interruptAsFiber(fiberId)))

/* @internal */
export const interruptAsFiber = dual<
  (fiberId: FiberId.FiberId) => <A, E>(self: Fiber.Fiber<A, E>) => Effect.Effect<Exit.Exit<A, E>>,
  <A, E>(self: Fiber.Fiber<A, E>, fiberId: FiberId.FiberId) => Effect.Effect<Exit.Exit<A, E>>
>(2, (self, fiberId) => flatMap(self.interruptAsFork(fiberId), () => self.await))

// -----------------------------------------------------------------------------
// LogLevel
// -----------------------------------------------------------------------------

/** @internal */
export const logLevelAll: LogLevel.LogLevel = {
  _tag: "All",
  syslog: 0,
  label: "ALL",
  ordinal: Number.MIN_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const logLevelFatal: LogLevel.LogLevel = {
  _tag: "Fatal",
  syslog: 2,
  label: "FATAL",
  ordinal: 50000,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const logLevelError: LogLevel.LogLevel = {
  _tag: "Error",
  syslog: 3,
  label: "ERROR",
  ordinal: 40000,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const logLevelWarning: LogLevel.LogLevel = {
  _tag: "Warning",
  syslog: 4,
  label: "WARN",
  ordinal: 30000,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const logLevelInfo: LogLevel.LogLevel = {
  _tag: "Info",
  syslog: 6,
  label: "INFO",
  ordinal: 20000,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const logLevelDebug: LogLevel.LogLevel = {
  _tag: "Debug",
  syslog: 7,
  label: "DEBUG",
  ordinal: 10000,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const logLevelTrace: LogLevel.LogLevel = {
  _tag: "Trace",
  syslog: 7,
  label: "TRACE",
  ordinal: 0,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const logLevelNone: LogLevel.LogLevel = {
  _tag: "None",
  syslog: 7,
  label: "OFF",
  ordinal: Number.MAX_SAFE_INTEGER,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const allLogLevels: ReadonlyArray<LogLevel.LogLevel> = [
  logLevelAll,
  logLevelTrace,
  logLevelDebug,
  logLevelInfo,
  logLevelWarning,
  logLevelError,
  logLevelFatal,
  logLevelNone
]

// -----------------------------------------------------------------------------
// FiberRef
// -----------------------------------------------------------------------------

/** @internal */
const FiberRefSymbolKey = "effect/FiberRef"

/** @internal */
export const FiberRefTypeId: FiberRef.FiberRefTypeId = Symbol.for(
  FiberRefSymbolKey
) as FiberRef.FiberRefTypeId

const fiberRefVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/* @internal */
export const fiberRefGet = <A>(self: FiberRef.FiberRef<A>): Effect.Effect<A> =>
  withFiberRuntime((fiber) => exitSucceed(fiber.getFiberRef(self)))

/* @internal */
export const fiberRefGetAndSet = dual<
  <A>(value: A) => (self: FiberRef.FiberRef<A>) => Effect.Effect<A>,
  <A>(self: FiberRef.FiberRef<A>, value: A) => Effect.Effect<A>
>(2, (self, value) => fiberRefModify(self, (v) => [v, value] as const))

/* @internal */
export const fiberRefGetAndUpdate = dual<
  <A>(f: (a: A) => A) => (self: FiberRef.FiberRef<A>) => Effect.Effect<A>,
  <A>(self: FiberRef.FiberRef<A>, f: (a: A) => A) => Effect.Effect<A>
>(2, (self, f) => fiberRefModify(self, (v) => [v, f(v)] as const))

/* @internal */
export const fiberRefGetAndUpdateSome = dual<
  <A>(
    pf: (a: A) => Option.Option<A>
  ) => (self: FiberRef.FiberRef<A>) => Effect.Effect<A>,
  <A>(
    self: FiberRef.FiberRef<A>,
    pf: (a: A) => Option.Option<A>
  ) => Effect.Effect<A>
>(2, (self, pf) => fiberRefModify(self, (v) => [v, Option.getOrElse(pf(v), () => v)] as const))

/* @internal */
export const fiberRefGetWith = dual<
  <B, E, R, A>(f: (a: A) => Effect.Effect<B, E, R>) => (self: FiberRef.FiberRef<A>) => Effect.Effect<B, E, R>,
  <A, B, E, R>(self: FiberRef.FiberRef<A>, f: (a: A) => Effect.Effect<B, E, R>) => Effect.Effect<B, E, R>
>(2, (self, f) => flatMap(fiberRefGet(self), f))

/* @internal */
export const fiberRefSet = dual<
  <A>(value: A) => (self: FiberRef.FiberRef<A>) => Effect.Effect<void>,
  <A>(self: FiberRef.FiberRef<A>, value: A) => Effect.Effect<void>
>(2, (self, value) => fiberRefModify(self, () => [void 0, value] as const))

/* @internal */
export const fiberRefDelete = <A>(self: FiberRef.FiberRef<A>): Effect.Effect<void> =>
  withFiberRuntime((state) => {
    state.unsafeDeleteFiberRef(self)
    return void_
  })

/* @internal */
export const fiberRefReset = <A>(self: FiberRef.FiberRef<A>): Effect.Effect<void> => fiberRefSet(self, self.initial)

/* @internal */
export const fiberRefModify = dual<
  <A, B>(f: (a: A) => readonly [B, A]) => (self: FiberRef.FiberRef<A>) => Effect.Effect<B>,
  <A, B>(self: FiberRef.FiberRef<A>, f: (a: A) => readonly [B, A]) => Effect.Effect<B>
>(2, <A, B>(
  self: FiberRef.FiberRef<A>,
  f: (a: A) => readonly [B, A]
): Effect.Effect<B> =>
  withFiberRuntime((state) => {
    const [b, a] = f(state.getFiberRef(self) as A)
    state.setFiberRef(self, a)
    return succeed(b)
  }))

/* @internal */
export const fiberRefModifySome = <A, B>(
  self: FiberRef.FiberRef<A>,
  def: B,
  f: (a: A) => Option.Option<readonly [B, A]>
): Effect.Effect<B> => fiberRefModify(self, (v) => Option.getOrElse(f(v), () => [def, v] as const))

/* @internal */
export const fiberRefUpdate = dual<
  <A>(f: (a: A) => A) => (self: FiberRef.FiberRef<A>) => Effect.Effect<void>,
  <A>(self: FiberRef.FiberRef<A>, f: (a: A) => A) => Effect.Effect<void>
>(2, (self, f) => fiberRefModify(self, (v) => [void 0, f(v)] as const))

/* @internal */
export const fiberRefUpdateSome = dual<
  <A>(pf: (a: A) => Option.Option<A>) => (self: FiberRef.FiberRef<A>) => Effect.Effect<void>,
  <A>(self: FiberRef.FiberRef<A>, pf: (a: A) => Option.Option<A>) => Effect.Effect<void>
>(2, (self, pf) => fiberRefModify(self, (v) => [void 0, Option.getOrElse(pf(v), () => v)] as const))

/* @internal */
export const fiberRefUpdateAndGet = dual<
  <A>(f: (a: A) => A) => (self: FiberRef.FiberRef<A>) => Effect.Effect<A>,
  <A>(self: FiberRef.FiberRef<A>, f: (a: A) => A) => Effect.Effect<A>
>(2, (self, f) =>
  fiberRefModify(self, (v) => {
    const result = f(v)
    return [result, result] as const
  }))

/* @internal */
export const fiberRefUpdateSomeAndGet = dual<
  <A>(pf: (a: A) => Option.Option<A>) => (self: FiberRef.FiberRef<A>) => Effect.Effect<A>,
  <A>(self: FiberRef.FiberRef<A>, pf: (a: A) => Option.Option<A>) => Effect.Effect<A>
>(2, (self, pf) =>
  fiberRefModify(self, (v) => {
    const result = Option.getOrElse(pf(v), () => v)
    return [result, result] as const
  }))

// circular
/** @internal */
const RequestResolverSymbolKey = "effect/RequestResolver"

/** @internal */
export const RequestResolverTypeId: RequestResolver.RequestResolverTypeId = Symbol.for(
  RequestResolverSymbolKey
) as RequestResolver.RequestResolverTypeId

const requestResolverVariance = {
  /* c8 ignore next */
  _A: (_: unknown) => _,
  /* c8 ignore next */
  _R: (_: never) => _
}

/** @internal */
export class RequestResolverImpl<in A, out R> implements RequestResolver.RequestResolver<A, R> {
  readonly [RequestResolverTypeId] = requestResolverVariance
  constructor(
    readonly runAll: (
      requests: Array<Array<Request.Entry<A>>>
    ) => Effect.Effect<void, never, R>,
    readonly target?: unknown
  ) {
  }
  [Hash.symbol](): number {
    return Hash.cached(this, this.target ? Hash.hash(this.target) : Hash.random(this))
  }
  [Equal.symbol](that: unknown): boolean {
    return this.target ?
      isRequestResolver(that) && Equal.equals(this.target, (that as RequestResolverImpl<any, any>).target) :
      this === that
  }
  identified(...ids: Array<unknown>): RequestResolver.RequestResolver<A, R> {
    return new RequestResolverImpl(this.runAll, Chunk.fromIterable(ids))
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const isRequestResolver = (u: unknown): u is RequestResolver.RequestResolver<unknown, unknown> =>
  hasProperty(u, RequestResolverTypeId)

// end

/** @internal */
export const resolverLocally = dual<
  <A>(
    self: FiberRef.FiberRef<A>,
    value: A
  ) => <R, B extends Request.Request<any, any>>(
    use: RequestResolver.RequestResolver<B, R>
  ) => RequestResolver.RequestResolver<B, R>,
  <R, B extends Request.Request<any, any>, A>(
    use: RequestResolver.RequestResolver<B, R>,
    self: FiberRef.FiberRef<A>,
    value: A
  ) => RequestResolver.RequestResolver<B, R>
>(3, <R, B extends Request.Request<any, any>, A>(
  use: RequestResolver.RequestResolver<B, R>,
  self: FiberRef.FiberRef<A>,
  value: A
): RequestResolver.RequestResolver<B, R> =>
  new RequestResolverImpl<B, R>(
    (requests) =>
      fiberRefLocally(
        use.runAll(requests),
        self,
        value
      ),
    Chunk.make("Locally", use, self, value)
  ))

/** @internal */
export const requestBlockLocally = <A>(
  self: BlockedRequests.RequestBlock,
  ref: FiberRef.FiberRef<A>,
  value: A
): BlockedRequests.RequestBlock => blockedRequests_.reduce(self, LocallyReducer(ref, value))

const LocallyReducer = <A>(
  ref: FiberRef.FiberRef<A>,
  value: A
): BlockedRequests.RequestBlock.Reducer<BlockedRequests.RequestBlock> => ({
  emptyCase: () => blockedRequests_.empty,
  parCase: (left, right) => blockedRequests_.par(left, right),
  seqCase: (left, right) => blockedRequests_.seq(left, right),
  singleCase: (dataSource, blockedRequest) =>
    blockedRequests_.single(
      resolverLocally(dataSource, ref, value),
      blockedRequest as any
    )
})

/* @internal */
export const fiberRefLocally: {
  <A>(self: FiberRef.FiberRef<A>, value: A): <B, E, R>(use: Effect.Effect<B, E, R>) => Effect.Effect<B, E, R>
  <B, E, R, A>(use: Effect.Effect<B, E, R>, self: FiberRef.FiberRef<A>, value: A): Effect.Effect<B, E, R>
} = dual(
  3,
  <B, E, R, A>(use: Effect.Effect<B, E, R>, self: FiberRef.FiberRef<A>, value: A): Effect.Effect<B, E, R> =>
    acquireUseRelease(
      zipLeft(fiberRefGet(self), fiberRefSet(self, value)),
      () => use,
      (oldValue) => fiberRefSet(self, oldValue)
    )
)

/* @internal */
export const fiberRefLocallyWith = dual<
  <A>(self: FiberRef.FiberRef<A>, f: (a: A) => A) => <B, E, R>(use: Effect.Effect<B, E, R>) => Effect.Effect<B, E, R>,
  <B, E, R, A>(use: Effect.Effect<B, E, R>, self: FiberRef.FiberRef<A>, f: (a: A) => A) => Effect.Effect<B, E, R>
>(3, (use, self, f) => fiberRefGetWith(self, (a) => fiberRefLocally(use, self, f(a))))

/** @internal */
export const fiberRefUnsafeMake = <Value>(
  initial: Value,
  options?: {
    readonly fork?: ((a: Value) => Value) | undefined
    readonly join?: ((left: Value, right: Value) => Value) | undefined
  }
): FiberRef.FiberRef<Value> =>
  fiberRefUnsafeMakePatch(initial, {
    differ: internalDiffer.update(),
    fork: options?.fork ?? identity,
    join: options?.join
  })

/** @internal */
export const fiberRefUnsafeMakeHashSet = <A>(
  initial: HashSet.HashSet<A>
): FiberRef.FiberRef<HashSet.HashSet<A>> => {
  const differ = internalDiffer.hashSet<A>()
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  })
}

/** @internal */
export const fiberRefUnsafeMakeReadonlyArray = <A>(
  initial: ReadonlyArray<A>
): FiberRef.FiberRef<ReadonlyArray<A>> => {
  const differ = internalDiffer.readonlyArray(internalDiffer.update<A>())
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  })
}

/** @internal */
export const fiberRefUnsafeMakeContext = <A>(
  initial: Context.Context<A>
): FiberRef.FiberRef<Context.Context<A>> => {
  const differ = internalDiffer.environment<A>()
  return fiberRefUnsafeMakePatch(initial, {
    differ,
    fork: differ.empty
  })
}

/** @internal */
export const fiberRefUnsafeMakePatch = <Value, Patch>(
  initial: Value,
  options: {
    readonly differ: Differ.Differ<Value, Patch>
    readonly fork: Patch
    readonly join?: ((oldV: Value, newV: Value) => Value) | undefined
  }
): FiberRef.FiberRef<Value> => {
  const _fiberRef = {
    ...CommitPrototype,
    [FiberRefTypeId]: fiberRefVariance,
    initial,
    commit() {
      return fiberRefGet(this)
    },
    diff: (oldValue: Value, newValue: Value) => options.differ.diff(oldValue, newValue),
    combine: (first: Patch, second: Patch) => options.differ.combine(first, second),
    patch: (patch: Patch) => (oldValue: Value) => options.differ.patch(patch, oldValue),
    fork: options.fork,
    join: options.join ?? ((_, n) => n)
  }
  return _fiberRef
}

/** @internal */
export const fiberRefUnsafeMakeRuntimeFlags = (
  initial: RuntimeFlags.RuntimeFlags
): FiberRef.FiberRef<RuntimeFlags.RuntimeFlags> =>
  fiberRefUnsafeMakePatch(initial, {
    differ: runtimeFlags_.differ,
    fork: runtimeFlags_.differ.empty
  })

/** @internal */
export const currentContext: FiberRef.FiberRef<Context.Context<never>> = globalValue(
  Symbol.for("effect/FiberRef/currentContext"),
  () => fiberRefUnsafeMakeContext(Context.empty())
)

/** @internal */
export const currentSchedulingPriority: FiberRef.FiberRef<number> = globalValue(
  Symbol.for("effect/FiberRef/currentSchedulingPriority"),
  () => fiberRefUnsafeMake(0)
)

/** @internal */
export const currentMaxOpsBeforeYield: FiberRef.FiberRef<number> = globalValue(
  Symbol.for("effect/FiberRef/currentMaxOpsBeforeYield"),
  () => fiberRefUnsafeMake(2048)
)

/** @internal */
export const currentLogAnnotations: FiberRef.FiberRef<HashMap.HashMap<string, unknown>> = globalValue(
  Symbol.for("effect/FiberRef/currentLogAnnotation"),
  () => fiberRefUnsafeMake(HashMap.empty())
)

/** @internal */
export const currentLogLevel: FiberRef.FiberRef<LogLevel.LogLevel> = globalValue(
  Symbol.for("effect/FiberRef/currentLogLevel"),
  () => fiberRefUnsafeMake<LogLevel.LogLevel>(logLevelInfo)
)

/** @internal */
export const currentLogSpan: FiberRef.FiberRef<List.List<LogSpan.LogSpan>> = globalValue(
  Symbol.for("effect/FiberRef/currentLogSpan"),
  () => fiberRefUnsafeMake(List.empty<LogSpan.LogSpan>())
)

/** @internal */
export const withSchedulingPriority = dual<
  (priority: number) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, priority: number) => Effect.Effect<A, E, R>
>(2, (self, scheduler) => fiberRefLocally(self, currentSchedulingPriority, scheduler))

/** @internal */
export const withMaxOpsBeforeYield = dual<
  (priority: number) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, priority: number) => Effect.Effect<A, E, R>
>(2, (self, scheduler) => fiberRefLocally(self, currentMaxOpsBeforeYield, scheduler))

/** @internal */
export const currentConcurrency: FiberRef.FiberRef<"unbounded" | number> = globalValue(
  Symbol.for("effect/FiberRef/currentConcurrency"),
  () => fiberRefUnsafeMake<"unbounded" | number>("unbounded")
)

/**
 * @internal
 */
export const currentRequestBatching = globalValue(
  Symbol.for("effect/FiberRef/currentRequestBatching"),
  () => fiberRefUnsafeMake(true)
)

/** @internal */
export const currentUnhandledErrorLogLevel: FiberRef.FiberRef<Option.Option<LogLevel.LogLevel>> = globalValue(
  Symbol.for("effect/FiberRef/currentUnhandledErrorLogLevel"),
  () => fiberRefUnsafeMake(Option.some<LogLevel.LogLevel>(logLevelDebug))
)

/** @internal */
export const currentVersionMismatchErrorLogLevel: FiberRef.FiberRef<Option.Option<LogLevel.LogLevel>> = globalValue(
  Symbol.for("effect/FiberRef/versionMismatchErrorLogLevel"),
  () => fiberRefUnsafeMake(Option.some<LogLevel.LogLevel>(logLevelWarning))
)

/** @internal */
export const withUnhandledErrorLogLevel = dual<
  (level: Option.Option<LogLevel.LogLevel>) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R>(self: Effect.Effect<A, E, R>, level: Option.Option<LogLevel.LogLevel>) => Effect.Effect<A, E, R>
>(2, (self, level) => fiberRefLocally(self, currentUnhandledErrorLogLevel, level))

/** @internal */
export const currentMetricLabels: FiberRef.FiberRef<ReadonlyArray<MetricLabel.MetricLabel>> = globalValue(
  Symbol.for("effect/FiberRef/currentMetricLabels"),
  () => fiberRefUnsafeMakeReadonlyArray(Arr.empty())
)

/* @internal */
export const metricLabels: Effect.Effect<ReadonlyArray<MetricLabel.MetricLabel>> = fiberRefGet(
  currentMetricLabels
)

/** @internal */
export const currentForkScopeOverride: FiberRef.FiberRef<Option.Option<fiberScope.FiberScope>> = globalValue(
  Symbol.for("effect/FiberRef/currentForkScopeOverride"),
  () =>
    fiberRefUnsafeMake(Option.none(), {
      fork: () => Option.none() as Option.Option<fiberScope.FiberScope>,
      join: (parent, _) => parent
    })
)

/** @internal */
export const currentInterruptedCause: FiberRef.FiberRef<Cause.Cause<never>> = globalValue(
  Symbol.for("effect/FiberRef/currentInterruptedCause"),
  () =>
    fiberRefUnsafeMake(internalCause.empty, {
      fork: () => internalCause.empty,
      join: (parent, _) => parent
    })
)

/** @internal */
export const currentTracerEnabled: FiberRef.FiberRef<boolean> = globalValue(
  Symbol.for("effect/FiberRef/currentTracerEnabled"),
  () => fiberRefUnsafeMake(true)
)

/** @internal */
export const currentTracerTimingEnabled: FiberRef.FiberRef<boolean> = globalValue(
  Symbol.for("effect/FiberRef/currentTracerTiming"),
  () => fiberRefUnsafeMake(true)
)

/** @internal */
export const currentTracerSpanAnnotations: FiberRef.FiberRef<HashMap.HashMap<string, unknown>> = globalValue(
  Symbol.for("effect/FiberRef/currentTracerSpanAnnotations"),
  () => fiberRefUnsafeMake(HashMap.empty())
)

/** @internal */
export const currentTracerSpanLinks: FiberRef.FiberRef<Chunk.Chunk<Tracer.SpanLink>> = globalValue(
  Symbol.for("effect/FiberRef/currentTracerSpanLinks"),
  () => fiberRefUnsafeMake(Chunk.empty())
)

// -----------------------------------------------------------------------------
// Scope
// -----------------------------------------------------------------------------

/** @internal */
export const ScopeTypeId: Scope.ScopeTypeId = Symbol.for("effect/Scope") as Scope.ScopeTypeId

/** @internal */
export const CloseableScopeTypeId: Scope.CloseableScopeTypeId = Symbol.for(
  "effect/CloseableScope"
) as Scope.CloseableScopeTypeId

/* @internal */
export const scopeAddFinalizer = (
  self: Scope.Scope,
  finalizer: Effect.Effect<unknown>
): Effect.Effect<void> => self.addFinalizer(() => asVoid(finalizer))

/* @internal */
export const scopeAddFinalizerExit = (
  self: Scope.Scope,
  finalizer: Scope.Scope.Finalizer
): Effect.Effect<void> => self.addFinalizer(finalizer)

/* @internal */
export const scopeClose = (
  self: Scope.Scope.Closeable,
  exit: Exit.Exit<unknown, unknown>
): Effect.Effect<void> => self.close(exit)

/* @internal */
export const scopeFork = (
  self: Scope.Scope,
  strategy: ExecutionStrategy.ExecutionStrategy
): Effect.Effect<Scope.Scope.Closeable> => self.fork(strategy)

// -----------------------------------------------------------------------------
// Cause
// -----------------------------------------------------------------------------

/** @internal */
export const causeSquash = <E>(self: Cause.Cause<E>): unknown => {
  return causeSquashWith(identity)(self)
}

/** @internal */
export const causeSquashWith = dual<
  <E>(f: (error: E) => unknown) => (self: Cause.Cause<E>) => unknown,
  <E>(self: Cause.Cause<E>, f: (error: E) => unknown) => unknown
>(2, (self, f) => {
  const option = pipe(self, internalCause.failureOption, Option.map(f))
  switch (option._tag) {
    case "None": {
      return pipe(
        internalCause.defects(self),
        Chunk.head,
        Option.match({
          onNone: () => {
            const interrupts = Arr.fromIterable(internalCause.interruptors(self)).flatMap((fiberId) =>
              Arr.fromIterable(FiberId.ids(fiberId)).map((id) => `#${id}`)
            )
            return new InterruptedException(interrupts ? `Interrupted by fibers: ${interrupts.join(", ")}` : void 0)
          },
          onSome: identity
        })
      )
    }
    case "Some": {
      return option.value
    }
  }
})

// -----------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------

/** @internal */
export const YieldableError: new(message?: string, options?: ErrorOptions) => Cause.YieldableError = (function() {
  class YieldableError extends globalThis.Error {
    commit() {
      return fail(this)
    }
    toJSON() {
      const obj = { ...this }
      if (this.message) obj.message = this.message
      if (this.cause) obj.cause = this.cause
      return obj
    }
    [NodeInspectSymbol]() {
      if (this.toString !== globalThis.Error.prototype.toString) {
        return this.stack ? `${this.toString()}\n${this.stack.split("\n").slice(1).join("\n")}` : this.toString()
      } else if ("Bun" in globalThis) {
        return internalCause.pretty(internalCause.fail(this), { renderErrorCause: true })
      }
      return this
    }
  }
  // @effect-diagnostics-next-line floatingEffect:off
  Object.assign(YieldableError.prototype, StructuralCommitPrototype)
  return YieldableError as any
})()

const makeException = <T extends { _tag: string; message?: string }>(
  proto: Omit<T, keyof Cause.YieldableError | "_tag">,
  tag: T["_tag"]
): new(message?: string | undefined) => T => {
  class Base extends YieldableError {
    readonly _tag = tag
  }
  Object.assign(Base.prototype, proto)
  ;(Base.prototype as any).name = tag
  return Base as any
}

/** @internal */
export const RuntimeExceptionTypeId: Cause.RuntimeExceptionTypeId = Symbol.for(
  "effect/Cause/errors/RuntimeException"
) as Cause.RuntimeExceptionTypeId

/** @internal */
export const RuntimeException = makeException<Cause.RuntimeException>({
  [RuntimeExceptionTypeId]: RuntimeExceptionTypeId
}, "RuntimeException")

/** @internal */
export const isRuntimeException = (u: unknown): u is Cause.RuntimeException => hasProperty(u, RuntimeExceptionTypeId)

/** @internal */
export const InterruptedExceptionTypeId: Cause.InterruptedExceptionTypeId = Symbol.for(
  "effect/Cause/errors/InterruptedException"
) as Cause.InterruptedExceptionTypeId

/** @internal */
export const InterruptedException = makeException<Cause.InterruptedException>({
  [InterruptedExceptionTypeId]: InterruptedExceptionTypeId
}, "InterruptedException")

/** @internal */
export const isInterruptedException = (u: unknown): u is Cause.InterruptedException =>
  hasProperty(u, InterruptedExceptionTypeId)

/** @internal */
export const IllegalArgumentExceptionTypeId: Cause.IllegalArgumentExceptionTypeId = Symbol.for(
  "effect/Cause/errors/IllegalArgument"
) as Cause.IllegalArgumentExceptionTypeId

/** @internal */
export const IllegalArgumentException = makeException<Cause.IllegalArgumentException>({
  [IllegalArgumentExceptionTypeId]: IllegalArgumentExceptionTypeId
}, "IllegalArgumentException")

/** @internal */
export const isIllegalArgumentException = (u: unknown): u is Cause.IllegalArgumentException =>
  hasProperty(u, IllegalArgumentExceptionTypeId)

/** @internal */
export const NoSuchElementExceptionTypeId: Cause.NoSuchElementExceptionTypeId = Symbol.for(
  "effect/Cause/errors/NoSuchElement"
) as Cause.NoSuchElementExceptionTypeId

/** @internal */
export const NoSuchElementException = makeException<Cause.NoSuchElementException>({
  [NoSuchElementExceptionTypeId]: NoSuchElementExceptionTypeId
}, "NoSuchElementException")

/** @internal */
export const isNoSuchElementException = (u: unknown): u is Cause.NoSuchElementException =>
  hasProperty(u, NoSuchElementExceptionTypeId)

/** @internal */
export const InvalidPubSubCapacityExceptionTypeId: Cause.InvalidPubSubCapacityExceptionTypeId = Symbol.for(
  "effect/Cause/errors/InvalidPubSubCapacityException"
) as Cause.InvalidPubSubCapacityExceptionTypeId

/** @internal */
export const InvalidPubSubCapacityException = makeException<Cause.InvalidPubSubCapacityException>({
  [InvalidPubSubCapacityExceptionTypeId]: InvalidPubSubCapacityExceptionTypeId
}, "InvalidPubSubCapacityException")

/** @internal */
export const ExceededCapacityExceptionTypeId: Cause.ExceededCapacityExceptionTypeId = Symbol.for(
  "effect/Cause/errors/ExceededCapacityException"
) as Cause.ExceededCapacityExceptionTypeId

/** @internal */
export const ExceededCapacityException = makeException<Cause.ExceededCapacityException>({
  [ExceededCapacityExceptionTypeId]: ExceededCapacityExceptionTypeId
}, "ExceededCapacityException")

/** @internal */
export const isExceededCapacityException = (u: unknown): u is Cause.ExceededCapacityException =>
  hasProperty(u, ExceededCapacityExceptionTypeId)

/** @internal */
export const isInvalidCapacityError = (u: unknown): u is Cause.InvalidPubSubCapacityException =>
  hasProperty(u, InvalidPubSubCapacityExceptionTypeId)

/** @internal */
export const TimeoutExceptionTypeId: Cause.TimeoutExceptionTypeId = Symbol.for(
  "effect/Cause/errors/Timeout"
) as Cause.TimeoutExceptionTypeId

/** @internal */
export const TimeoutException = makeException<Cause.TimeoutException>({
  [TimeoutExceptionTypeId]: TimeoutExceptionTypeId
}, "TimeoutException")

/** @internal */
export const timeoutExceptionFromDuration = (duration: Duration.DurationInput): Cause.TimeoutException =>
  new TimeoutException(`Operation timed out after '${Duration.format(duration)}'`)

/** @internal */
export const isTimeoutException = (u: unknown): u is Cause.TimeoutException => hasProperty(u, TimeoutExceptionTypeId)

/** @internal */
export const UnknownExceptionTypeId: Cause.UnknownExceptionTypeId = Symbol.for(
  "effect/Cause/errors/UnknownException"
) as Cause.UnknownExceptionTypeId

/** @internal */
export const UnknownException: new(cause: unknown, message?: string | undefined) => Cause.UnknownException =
  (function() {
    class UnknownException extends YieldableError {
      readonly _tag = "UnknownException"
      readonly error: unknown
      constructor(cause: unknown, message?: string) {
        super(message ?? "An unknown error occurred", { cause })
        this.error = cause
      }
    }
    Object.assign(UnknownException.prototype, {
      [UnknownExceptionTypeId]: UnknownExceptionTypeId,
      name: "UnknownException"
    })
    return UnknownException as any
  })()

/** @internal */
export const isUnknownException = (u: unknown): u is Cause.UnknownException => hasProperty(u, UnknownExceptionTypeId)

// -----------------------------------------------------------------------------
// Exit
// -----------------------------------------------------------------------------

/** @internal */
export const exitIsExit = (u: unknown): u is Exit.Exit<unknown, unknown> =>
  isEffect(u) && "_tag" in u && (u._tag === "Success" || u._tag === "Failure")

/** @internal */
export const exitIsFailure = <A, E>(self: Exit.Exit<A, E>): self is Exit.Failure<A, E> => self._tag === "Failure"

/** @internal */
export const exitIsSuccess = <A, E>(self: Exit.Exit<A, E>): self is Exit.Success<A, E> => self._tag === "Success"

/** @internal */
export const exitIsInterrupted = <A, E>(self: Exit.Exit<A, E>): boolean => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return internalCause.isInterrupted(self.effect_instruction_i0)
    case OpCodes.OP_SUCCESS:
      return false
  }
}

/** @internal */
export const exitAs = dual<
  <A2>(value: A2) => <A, E>(self: Exit.Exit<A, E>) => Exit.Exit<A2, E>,
  <A, E, A2>(self: Exit.Exit<A, E>, value: A2) => Exit.Exit<A2, E>
>(2, <A, E, A2>(self: Exit.Exit<A, E>, value: A2): Exit.Exit<A2, E> => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE: {
      return exitFailCause(self.effect_instruction_i0)
    }
    case OpCodes.OP_SUCCESS: {
      return exitSucceed(value) as Exit.Exit<A2, E>
    }
  }
})

/** @internal */
export const exitAsVoid = <A, E>(self: Exit.Exit<A, E>): Exit.Exit<void, E> => exitAs(self, void 0)

/** @internal */
export const exitCauseOption = <A, E>(self: Exit.Exit<A, E>): Option.Option<Cause.Cause<E>> => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return Option.some(self.effect_instruction_i0)
    case OpCodes.OP_SUCCESS:
      return Option.none()
  }
}

/** @internal */
export const exitCollectAll = <A, E>(
  exits: Iterable<Exit.Exit<A, E>>,
  options?: {
    readonly parallel?: boolean | undefined
  }
): Option.Option<Exit.Exit<Array<A>, E>> =>
  exitCollectAllInternal(exits, options?.parallel ? internalCause.parallel : internalCause.sequential)

/** @internal */
export const exitDie = (defect: unknown): Exit.Exit<never> =>
  exitFailCause(internalCause.die(defect)) as Exit.Exit<never>

/** @internal */
export const exitExists: {
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): <E>(self: Exit.Exit<A, E>) => self is Exit.Exit<B>
  <A>(predicate: Predicate<NoInfer<A>>): <E>(self: Exit.Exit<A, E>) => boolean
  <A, E, B extends A>(self: Exit.Exit<A, E>, refinement: Refinement<A, B>): self is Exit.Exit<B>
  <A, E>(self: Exit.Exit<A, E>, predicate: Predicate<A>): boolean
} = dual(2, <A, E, B extends A>(self: Exit.Exit<A, E>, refinement: Refinement<A, B>): self is Exit.Exit<B> => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return false
    case OpCodes.OP_SUCCESS:
      return refinement(self.effect_instruction_i0)
  }
})

/** @internal */
export const exitFail = <E>(error: E): Exit.Exit<never, E> =>
  exitFailCause(internalCause.fail(error)) as Exit.Exit<never, E>

/** @internal */
export const exitFailCause = <E>(cause: Cause.Cause<E>): Exit.Exit<never, E> => {
  const effect = new EffectPrimitiveFailure(OpCodes.OP_FAILURE) as any
  effect.effect_instruction_i0 = cause
  return effect
}

/** @internal */
export const exitFlatMap = dual<
  <A, A2, E2>(f: (a: A) => Exit.Exit<A2, E2>) => <E>(self: Exit.Exit<A, E>) => Exit.Exit<A2, E | E2>,
  <A, E, E2, A2>(self: Exit.Exit<A, E>, f: (a: A) => Exit.Exit<A2, E2>) => Exit.Exit<A2, E | E2>
>(2, <A, E, E2, A2>(self: Exit.Exit<A, E>, f: (a: A) => Exit.Exit<A2, E2>): Exit.Exit<A2, E | E2> => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE: {
      return exitFailCause(self.effect_instruction_i0)
    }
    case OpCodes.OP_SUCCESS: {
      return f(self.effect_instruction_i0)
    }
  }
})

/** @internal */
export const exitFlatMapEffect: {
  <A, E, A2, E2, R>(
    f: (a: A) => Effect.Effect<Exit.Exit<A2, E>, E2, R>
  ): (self: Exit.Exit<A, E>) => Effect.Effect<Exit.Exit<A2, E>, E2, R>
  <A, E, A2, E2, R>(
    self: Exit.Exit<A, E>,
    f: (a: A) => Effect.Effect<Exit.Exit<A2, E>, E2, R>
  ): Effect.Effect<Exit.Exit<A2, E>, E2, R>
} = dual(2, <A, E, A2, E2, R>(
  self: Exit.Exit<A, E>,
  f: (a: A) => Effect.Effect<Exit.Exit<A2, E>, E2, R>
): Effect.Effect<Exit.Exit<A2, E>, E2, R> => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE: {
      return succeed(exitFailCause(self.effect_instruction_i0))
    }
    case OpCodes.OP_SUCCESS: {
      return f(self.effect_instruction_i0)
    }
  }
})

/** @internal */
export const exitFlatten = <A, E, E2>(
  self: Exit.Exit<Exit.Exit<A, E>, E2>
): Exit.Exit<A, E | E2> => pipe(self, exitFlatMap(identity))

/** @internal */
export const exitForEachEffect: {
  <A, B, E2, R>(
    f: (a: A) => Effect.Effect<B, E2, R>
  ): <E>(self: Exit.Exit<A, E>) => Effect.Effect<Exit.Exit<B, E | E2>, never, R>
  <A, E, B, E2, R>(
    self: Exit.Exit<A, E>,
    f: (a: A) => Effect.Effect<B, E2, R>
  ): Effect.Effect<Exit.Exit<B, E | E2>, never, R>
} = dual(2, <A, E, B, E2, R>(
  self: Exit.Exit<A, E>,
  f: (a: A) => Effect.Effect<B, E2, R>
): Effect.Effect<Exit.Exit<B, E | E2>, never, R> => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE: {
      return succeed(exitFailCause(self.effect_instruction_i0))
    }
    case OpCodes.OP_SUCCESS: {
      return exit(f(self.effect_instruction_i0))
    }
  }
})

/** @internal */
export const exitFromEither = <R, L>(either: Either.Either<R, L>): Exit.Exit<R, L> => {
  switch (either._tag) {
    case "Left":
      return exitFail(either.left)
    case "Right":
      return exitSucceed(either.right)
  }
}

/** @internal */
export const exitFromOption = <A>(option: Option.Option<A>): Exit.Exit<A, void> => {
  switch (option._tag) {
    case "None":
      return exitFail(void 0)
    case "Some":
      return exitSucceed(option.value)
  }
}

/** @internal */
export const exitGetOrElse = dual<
  <E, A2>(orElse: (cause: Cause.Cause<E>) => A2) => <A>(self: Exit.Exit<A, E>) => A | A2,
  <A, E, A2>(self: Exit.Exit<A, E>, orElse: (cause: Cause.Cause<E>) => A2) => A | A2
>(2, (self, orElse) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return orElse(self.effect_instruction_i0)
    case OpCodes.OP_SUCCESS:
      return self.effect_instruction_i0
  }
})

/** @internal */
export const exitInterrupt = (fiberId: FiberId.FiberId): Exit.Exit<never> =>
  exitFailCause(internalCause.interrupt(fiberId))

/** @internal */
export const exitMap = dual<
  <A, B>(f: (a: A) => B) => <E>(self: Exit.Exit<A, E>) => Exit.Exit<B, E>,
  <A, E, B>(self: Exit.Exit<A, E>, f: (a: A) => B) => Exit.Exit<B, E>
>(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(self.effect_instruction_i0)
    case OpCodes.OP_SUCCESS:
      return exitSucceed(f(self.effect_instruction_i0))
  }
})

/** @internal */
export const exitMapBoth = dual<
  <E, A, E2, A2>(
    options: {
      readonly onFailure: (e: E) => E2
      readonly onSuccess: (a: A) => A2
    }
  ) => (self: Exit.Exit<A, E>) => Exit.Exit<A2, E2>,
  <A, E, E2, A2>(
    self: Exit.Exit<A, E>,
    options: {
      readonly onFailure: (e: E) => E2
      readonly onSuccess: (a: A) => A2
    }
  ) => Exit.Exit<A2, E2>
>(2, (self, { onFailure, onSuccess }) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(pipe(self.effect_instruction_i0, internalCause.map(onFailure)))
    case OpCodes.OP_SUCCESS:
      return exitSucceed(onSuccess(self.effect_instruction_i0))
  }
})

/** @internal */
export const exitMapError = dual<
  <E, E2>(f: (e: E) => E2) => <A>(self: Exit.Exit<A, E>) => Exit.Exit<A, E2>,
  <A, E, E2>(self: Exit.Exit<A, E>, f: (e: E) => E2) => Exit.Exit<A, E2>
>(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(pipe(self.effect_instruction_i0, internalCause.map(f)))
    case OpCodes.OP_SUCCESS:
      return exitSucceed(self.effect_instruction_i0)
  }
})

/** @internal */
export const exitMapErrorCause = dual<
  <E, E2>(f: (cause: Cause.Cause<E>) => Cause.Cause<E2>) => <A>(self: Exit.Exit<A, E>) => Exit.Exit<A, E2>,
  <E, A, E2>(self: Exit.Exit<A, E>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>) => Exit.Exit<A, E2>
>(2, (self, f) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return exitFailCause(f(self.effect_instruction_i0))
    case OpCodes.OP_SUCCESS:
      return exitSucceed(self.effect_instruction_i0)
  }
})

/** @internal */
export const exitMatch = dual<
  <E, A, Z1, Z2>(options: {
    readonly onFailure: (cause: Cause.Cause<E>) => Z1
    readonly onSuccess: (a: A) => Z2
  }) => (self: Exit.Exit<A, E>) => Z1 | Z2,
  <A, E, Z1, Z2>(self: Exit.Exit<A, E>, options: {
    readonly onFailure: (cause: Cause.Cause<E>) => Z1
    readonly onSuccess: (a: A) => Z2
  }) => Z1 | Z2
>(2, (self, { onFailure, onSuccess }) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return onFailure(self.effect_instruction_i0)
    case OpCodes.OP_SUCCESS:
      return onSuccess(self.effect_instruction_i0)
  }
})

/** @internal */
export const exitMatchEffect = dual<
  <E, A2, E2, R, A, A3, E3, R2>(
    options: {
      readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<A2, E2, R>
      readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R2>
    }
  ) => (self: Exit.Exit<A, E>) => Effect.Effect<A2 | A3, E2 | E3, R | R2>,
  <A, E, A2, E2, R, A3, E3, R2>(
    self: Exit.Exit<A, E>,
    options: {
      readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<A2, E2, R>
      readonly onSuccess: (a: A) => Effect.Effect<A3, E3, R2>
    }
  ) => Effect.Effect<A2 | A3, E2 | E3, R | R2>
>(2, (self, { onFailure, onSuccess }) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE:
      return onFailure(self.effect_instruction_i0)
    case OpCodes.OP_SUCCESS:
      return onSuccess(self.effect_instruction_i0)
  }
})

/** @internal */
export const exitSucceed = <A>(value: A): Exit.Exit<A> => {
  const effect = new EffectPrimitiveSuccess(OpCodes.OP_SUCCESS) as any
  effect.effect_instruction_i0 = value
  return effect
}

/** @internal */
export const exitVoid: Exit.Exit<void> = exitSucceed(void 0)

/** @internal */
export const exitZip = dual<
  <A2, E2>(that: Exit.Exit<A2, E2>) => <A, E>(self: Exit.Exit<A, E>) => Exit.Exit<[A, A2], E | E2>,
  <A, E, A2, E2>(self: Exit.Exit<A, E>, that: Exit.Exit<A2, E2>) => Exit.Exit<[A, A2], E | E2>
>(2, (self, that) =>
  exitZipWith(self, that, {
    onSuccess: (a, a2) => [a, a2],
    onFailure: internalCause.sequential
  }))

/** @internal */
export const exitZipLeft = dual<
  <A2, E2>(that: Exit.Exit<A2, E2>) => <A, E>(self: Exit.Exit<A, E>) => Exit.Exit<A, E | E2>,
  <A, E, A2, E2>(self: Exit.Exit<A, E>, that: Exit.Exit<A2, E2>) => Exit.Exit<A, E | E2>
>(2, (self, that) =>
  exitZipWith(self, that, {
    onSuccess: (a, _) => a,
    onFailure: internalCause.sequential
  }))

/** @internal */
export const exitZipRight = dual<
  <A2, E2>(that: Exit.Exit<A2, E2>) => <A, E>(self: Exit.Exit<A, E>) => Exit.Exit<A2, E | E2>,
  <A, E, A2, E2>(self: Exit.Exit<A, E>, that: Exit.Exit<A2, E2>) => Exit.Exit<A2, E | E2>
>(2, (self, that) =>
  exitZipWith(self, that, {
    onSuccess: (_, a2) => a2,
    onFailure: internalCause.sequential
  }))

/** @internal */
export const exitZipPar = dual<
  <A2, E2>(that: Exit.Exit<A2, E2>) => <A, E>(self: Exit.Exit<A, E>) => Exit.Exit<[A, A2], E | E2>,
  <A, E, A2, E2>(self: Exit.Exit<A, E>, that: Exit.Exit<A2, E2>) => Exit.Exit<[A, A2], E | E2>
>(2, (self, that) =>
  exitZipWith(self, that, {
    onSuccess: (a, a2) => [a, a2],
    onFailure: internalCause.parallel
  }))

/** @internal */
export const exitZipParLeft = dual<
  <A2, E2>(that: Exit.Exit<A2, E2>) => <A, E>(self: Exit.Exit<A, E>) => Exit.Exit<A, E | E2>,
  <A, E, A2, E2>(self: Exit.Exit<A, E>, that: Exit.Exit<A2, E2>) => Exit.Exit<A, E | E2>
>(2, (self, that) =>
  exitZipWith(self, that, {
    onSuccess: (a, _) => a,
    onFailure: internalCause.parallel
  }))

/** @internal */
export const exitZipParRight = dual<
  <A2, E2>(that: Exit.Exit<A2, E2>) => <A, E>(self: Exit.Exit<A, E>) => Exit.Exit<A2, E | E2>,
  <A, E, A2, E2>(self: Exit.Exit<A, E>, that: Exit.Exit<A2, E2>) => Exit.Exit<A2, E | E2>
>(2, (self, that) =>
  exitZipWith(self, that, {
    onSuccess: (_, a2) => a2,
    onFailure: internalCause.parallel
  }))

/** @internal */
export const exitZipWith = dual<
  <B, E2, A, C, E>(
    that: Exit.Exit<B, E2>,
    options: {
      readonly onSuccess: (a: A, b: B) => C
      readonly onFailure: (cause: Cause.Cause<E>, cause2: Cause.Cause<E2>) => Cause.Cause<E | E2>
    }
  ) => (self: Exit.Exit<A, E>) => Exit.Exit<C, E | E2>,
  <A, E, B, E2, C>(
    self: Exit.Exit<A, E>,
    that: Exit.Exit<B, E2>,
    options: {
      readonly onSuccess: (a: A, b: B) => C
      readonly onFailure: (cause: Cause.Cause<E>, cause2: Cause.Cause<E2>) => Cause.Cause<E | E2>
    }
  ) => Exit.Exit<C, E | E2>
>(3, (
  self,
  that,
  { onFailure, onSuccess }
) => {
  switch (self._tag) {
    case OpCodes.OP_FAILURE: {
      switch (that._tag) {
        case OpCodes.OP_SUCCESS:
          return exitFailCause(self.effect_instruction_i0)
        case OpCodes.OP_FAILURE: {
          return exitFailCause(onFailure(self.effect_instruction_i0, that.effect_instruction_i0))
        }
      }
    }
    case OpCodes.OP_SUCCESS: {
      switch (that._tag) {
        case OpCodes.OP_SUCCESS:
          return exitSucceed(onSuccess(self.effect_instruction_i0, that.effect_instruction_i0))
        case OpCodes.OP_FAILURE:
          return exitFailCause(that.effect_instruction_i0)
      }
    }
  }
})

const exitCollectAllInternal = <A, E>(
  exits: Iterable<Exit.Exit<A, E>>,
  combineCauses: (causeA: Cause.Cause<E>, causeB: Cause.Cause<E>) => Cause.Cause<E>
): Option.Option<Exit.Exit<Array<A>, E>> => {
  const list = Chunk.fromIterable(exits)
  if (!Chunk.isNonEmpty(list)) {
    return Option.none()
  }
  return pipe(
    Chunk.tailNonEmpty(list),
    Arr.reduce(
      pipe(Chunk.headNonEmpty(list), exitMap<A, Chunk.Chunk<A>>(Chunk.of)),
      (accumulator, current) =>
        pipe(
          accumulator,
          exitZipWith(current, {
            onSuccess: (list, value) => pipe(list, Chunk.prepend(value)),
            onFailure: combineCauses
          })
        )
    ),
    exitMap(Chunk.reverse),
    exitMap((chunk) => Chunk.toReadonlyArray(chunk) as Array<A>),
    Option.some
  )
}

// -----------------------------------------------------------------------------
// Deferred
// -----------------------------------------------------------------------------

/** @internal */
export const deferredUnsafeMake = <A, E = never>(fiberId: FiberId.FiberId): Deferred.Deferred<A, E> => {
  const _deferred = {
    ...CommitPrototype,
    [deferred.DeferredTypeId]: deferred.deferredVariance,
    state: MutableRef.make(deferred.pending<A, E>([])),
    commit() {
      return deferredAwait(this)
    },
    blockingOn: fiberId
  }
  return _deferred
}

/* @internal */
export const deferredMake = <A, E = never>(): Effect.Effect<Deferred.Deferred<A, E>> =>
  flatMap(fiberId, (id) => deferredMakeAs<A, E>(id))

/* @internal */
export const deferredMakeAs = <A, E = never>(fiberId: FiberId.FiberId): Effect.Effect<Deferred.Deferred<A, E>> =>
  sync(() => deferredUnsafeMake<A, E>(fiberId))

/* @internal */
export const deferredAwait = <A, E>(self: Deferred.Deferred<A, E>): Effect.Effect<A, E> =>
  asyncInterrupt<A, E>((resume) => {
    const state = MutableRef.get(self.state)
    switch (state._tag) {
      case DeferredOpCodes.OP_STATE_DONE: {
        return resume(state.effect)
      }
      case DeferredOpCodes.OP_STATE_PENDING: {
        // we can push here as the internal state is mutable
        state.joiners.push(resume)
        return deferredInterruptJoiner(self, resume)
      }
    }
  }, self.blockingOn)

/* @internal */
export const deferredComplete: {
  <A, E>(effect: Effect.Effect<A, E>): (self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>
  <A, E>(self: Deferred.Deferred<A, E>, effect: Effect.Effect<A, E>): Effect.Effect<boolean>
} = dual(
  2,
  <A, E>(self: Deferred.Deferred<A, E>, effect: Effect.Effect<A, E>): Effect.Effect<boolean> =>
    intoDeferred(effect, self)
)

/* @internal */
export const deferredCompleteWith = dual<
  <A, E>(effect: Effect.Effect<A, E>) => (self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, effect: Effect.Effect<A, E>) => Effect.Effect<boolean>
>(2, (self, effect) =>
  sync(() => {
    const state = MutableRef.get(self.state)
    switch (state._tag) {
      case DeferredOpCodes.OP_STATE_DONE: {
        return false
      }
      case DeferredOpCodes.OP_STATE_PENDING: {
        MutableRef.set(self.state, deferred.done(effect))
        for (let i = 0, len = state.joiners.length; i < len; i++) {
          state.joiners[i](effect)
        }
        return true
      }
    }
  }))

/* @internal */
export const deferredDone = dual<
  <A, E>(exit: Exit.Exit<A, E>) => (self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, exit: Exit.Exit<A, E>) => Effect.Effect<boolean>
>(2, (self, exit) => deferredCompleteWith(self, exit))

/* @internal */
export const deferredFail = dual<
  <E>(error: E) => <A>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, error: E) => Effect.Effect<boolean>
>(2, (self, error) => deferredCompleteWith(self, fail(error)))

/* @internal */
export const deferredFailSync = dual<
  <E>(evaluate: LazyArg<E>) => <A>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, evaluate: LazyArg<E>) => Effect.Effect<boolean>
>(2, (self, evaluate) => deferredCompleteWith(self, failSync(evaluate)))

/* @internal */
export const deferredFailCause = dual<
  <E>(cause: Cause.Cause<E>) => <A>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, cause: Cause.Cause<E>) => Effect.Effect<boolean>
>(2, (self, cause) => deferredCompleteWith(self, failCause(cause)))

/* @internal */
export const deferredFailCauseSync = dual<
  <E>(evaluate: LazyArg<Cause.Cause<E>>) => <A>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, evaluate: LazyArg<Cause.Cause<E>>) => Effect.Effect<boolean>
>(2, (self, evaluate) => deferredCompleteWith(self, failCauseSync(evaluate)))

/* @internal */
export const deferredDie = dual<
  (defect: unknown) => <A, E>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, defect: unknown) => Effect.Effect<boolean>
>(2, (self, defect) => deferredCompleteWith(self, die(defect)))

/* @internal */
export const deferredDieSync = dual<
  (evaluate: LazyArg<unknown>) => <A, E>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, evaluate: LazyArg<unknown>) => Effect.Effect<boolean>
>(2, (self, evaluate) => deferredCompleteWith(self, dieSync(evaluate)))

/* @internal */
export const deferredInterrupt = <A, E>(self: Deferred.Deferred<A, E>): Effect.Effect<boolean> =>
  flatMap(fiberId, (fiberId) => deferredCompleteWith(self, interruptWith(fiberId)))

/* @internal */
export const deferredInterruptWith = dual<
  (fiberId: FiberId.FiberId) => <A, E>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, fiberId: FiberId.FiberId) => Effect.Effect<boolean>
>(2, (self, fiberId) => deferredCompleteWith(self, interruptWith(fiberId)))

/* @internal */
export const deferredIsDone = <A, E>(self: Deferred.Deferred<A, E>): Effect.Effect<boolean> =>
  sync(() => MutableRef.get(self.state)._tag === DeferredOpCodes.OP_STATE_DONE)

/* @internal */
export const deferredPoll = <A, E>(
  self: Deferred.Deferred<A, E>
): Effect.Effect<Option.Option<Effect.Effect<A, E>>> =>
  sync(() => {
    const state = MutableRef.get(self.state)
    switch (state._tag) {
      case DeferredOpCodes.OP_STATE_DONE: {
        return Option.some(state.effect)
      }
      case DeferredOpCodes.OP_STATE_PENDING: {
        return Option.none()
      }
    }
  })

/* @internal */
export const deferredSucceed = dual<
  <A>(value: A) => <E>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, value: A) => Effect.Effect<boolean>
>(2, (self, value) => deferredCompleteWith(self, succeed(value)))

/* @internal */
export const deferredSync = dual<
  <A>(evaluate: LazyArg<A>) => <E>(self: Deferred.Deferred<A, E>) => Effect.Effect<boolean>,
  <A, E>(self: Deferred.Deferred<A, E>, evaluate: LazyArg<A>) => Effect.Effect<boolean>
>(2, (self, evaluate) => deferredCompleteWith(self, sync(evaluate)))

/** @internal */
export const deferredUnsafeDone = <A, E>(self: Deferred.Deferred<A, E>, effect: Effect.Effect<A, E>): void => {
  const state = MutableRef.get(self.state)
  if (state._tag === DeferredOpCodes.OP_STATE_PENDING) {
    MutableRef.set(self.state, deferred.done(effect))
    for (let i = 0, len = state.joiners.length; i < len; i++) {
      state.joiners[i](effect)
    }
  }
}

const deferredInterruptJoiner = <A, E>(
  self: Deferred.Deferred<A, E>,
  joiner: (effect: Effect.Effect<A, E>) => void
): Effect.Effect<void> =>
  sync(() => {
    const state = MutableRef.get(self.state)
    if (state._tag === DeferredOpCodes.OP_STATE_PENDING) {
      const index = state.joiners.indexOf(joiner)
      if (index >= 0) {
        // we can splice here as the internal state is mutable
        state.joiners.splice(index, 1)
      }
    }
  })

// -----------------------------------------------------------------------------
// Context
// -----------------------------------------------------------------------------

const constContext = withFiberRuntime((fiber) => exitSucceed(fiber.currentContext))

/* @internal */
export const context = <R>(): Effect.Effect<Context.Context<R>, never, R> => constContext as any

/* @internal */
export const contextWith = <R0, A>(
  f: (context: Context.Context<R0>) => A
): Effect.Effect<A, never, R0> => map(context<R0>(), f)

/* @internal */
export const contextWithEffect = <R2, A, E, R>(
  f: (context: Context.Context<R2>) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R | R2> => flatMap(context<R2>(), f)

/* @internal */
export const provideContext = dual<
  <R>(context: Context.Context<R>) => <A, E>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E>,
  <A, E, R>(self: Effect.Effect<A, E, R>, context: Context.Context<R>) => Effect.Effect<A, E>
>(2, <A, E, R>(self: Effect.Effect<A, E, R>, context: Context.Context<R>) =>
  fiberRefLocally(
    currentContext,
    context
  )(self as Effect.Effect<A, E>))

/* @internal */
export const provideSomeContext = dual<
  <R>(context: Context.Context<R>) => <A, E, R1>(self: Effect.Effect<A, E, R1>) => Effect.Effect<A, E, Exclude<R1, R>>,
  <A, E, R1, R>(self: Effect.Effect<A, E, R1>, context: Context.Context<R>) => Effect.Effect<A, E, Exclude<R1, R>>
>(2, <A, E, R1, R>(self: Effect.Effect<A, E, R1>, context: Context.Context<R>) =>
  fiberRefLocallyWith(
    currentContext,
    (parent) => Context.merge(parent, context)
  )(self as Effect.Effect<A, E>))

/* @internal */
export const mapInputContext = dual<
  <R2, R>(
    f: (context: Context.Context<R2>) => Context.Context<R>
  ) => <A, E>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R2>,
  <A, E, R, R2>(
    self: Effect.Effect<A, E, R>,
    f: (context: Context.Context<R2>) => Context.Context<R>
  ) => Effect.Effect<A, E, R2>
>(2, <A, E, R, R2>(
  self: Effect.Effect<A, E, R>,
  f: (context: Context.Context<R2>) => Context.Context<R>
) => contextWithEffect((context: Context.Context<R2>) => provideContext(self, f(context))))

// -----------------------------------------------------------------------------
// Filtering
// -----------------------------------------------------------------------------

/** @internal */
export const filterEffectOrElse: {
  <A, E2, R2, A2, E3, R3>(
    options: {
      readonly predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>
      readonly orElse: (a: NoInfer<A>) => Effect.Effect<A2, E3, R3>
    }
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A | A2, E | E2 | E3, R | R2 | R3>
  <A, E, R, E2, R2, A2, E3, R3>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly predicate: (a: A) => Effect.Effect<boolean, E2, R2>
      readonly orElse: (a: A) => Effect.Effect<A2, E3, R3>
    }
  ): Effect.Effect<A | A2, E | E2 | E3, R | R2 | R3>
} = dual(2, <A, E, R, E2, R2, A2, E3, R3>(
  self: Effect.Effect<A, E, R>,
  options: {
    readonly predicate: (a: A) => Effect.Effect<boolean, E2, R2>
    readonly orElse: (a: A) => Effect.Effect<A2, E3, R3>
  }
): Effect.Effect<A | A2, E | E2 | E3, R | R2 | R3> =>
  flatMap(
    self,
    (a) =>
      flatMap(
        options.predicate(a),
        (pass): Effect.Effect<A | A2, E3, R3> => pass ? succeed(a) : options.orElse(a)
      )
  ))

/** @internal */
export const filterEffectOrFail: {
  <A, E2, R2, E3>(
    options: {
      readonly predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>
      readonly orFailWith: (a: NoInfer<A>) => E3
    }
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E | E2 | E3, R | R2>
  <A, E, R, E2, R2, E3>(
    self: Effect.Effect<A, E, R>,
    options: {
      readonly predicate: (a: A) => Effect.Effect<boolean, E2, R2>
      readonly orFailWith: (a: A) => E3
    }
  ): Effect.Effect<A, E | E2 | E3, R | R2>
} = dual(2, <A, E, R, E2, R2, E3>(
  self: Effect.Effect<A, E, R>,
  options: {
    readonly predicate: (a: A) => Effect.Effect<boolean, E2, R2>
    readonly orFailWith: (a: A) => E3
  }
): Effect.Effect<A, E | E2 | E3, R | R2> =>
  filterEffectOrElse(self, {
    predicate: options.predicate,
    orElse: (a) => fail(options.orFailWith(a))
  }))

// -----------------------------------------------------------------------------
// Tracing
// -----------------------------------------------------------------------------

/** @internal */
export const currentSpanFromFiber = <A, E>(fiber: Fiber.RuntimeFiber<A, E>): Option.Option<Tracer.Span> => {
  const span = fiber.currentSpan
  return span !== undefined && span._tag === "Span" ? Option.some(span) : Option.none()
}

const NoopSpanProto: Omit<Tracer.Span, "parent" | "name" | "context"> = {
  _tag: "Span",
  spanId: "noop",
  traceId: "noop",
  sampled: false,
  status: {
    _tag: "Ended",
    startTime: BigInt(0),
    endTime: BigInt(0),
    exit: exitVoid
  },
  attributes: new Map(),
  links: [],
  kind: "internal",
  attribute() {},
  event() {},
  end() {},
  addLinks() {}
}

/** @internal */
export const noopSpan = (options: {
  readonly name: string
  readonly parent: Option.Option<Tracer.AnySpan>
  readonly context: Context.Context<never>
}): Tracer.Span => Object.assign(Object.create(NoopSpanProto), options)
