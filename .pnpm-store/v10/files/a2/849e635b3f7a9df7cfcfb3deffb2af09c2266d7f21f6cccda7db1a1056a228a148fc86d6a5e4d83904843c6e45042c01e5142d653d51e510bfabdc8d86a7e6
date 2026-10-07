import type * as Cause from "../Cause.js"
import type * as Effect from "../Effect.js"
import { dual } from "../Function.js"
import { hasProperty } from "../Predicate.js"
import type * as Request from "../Request.js"
import type * as Types from "../Types.js"
import * as completedRequestMap from "./completedRequestMap.js"
import * as core from "./core.js"
import { StructuralPrototype } from "./effectable.js"

/** @internal */
const RequestSymbolKey = "effect/Request"

/** @internal */
export const RequestTypeId: Request.RequestTypeId = Symbol.for(
  RequestSymbolKey
) as Request.RequestTypeId

const requestVariance = {
  /* c8 ignore next */
  _E: (_: never) => _,
  /* c8 ignore next */
  _A: (_: never) => _
}

const RequestPrototype = {
  ...StructuralPrototype,
  [RequestTypeId]: requestVariance
}

/** @internal */
export const isRequest = (u: unknown): u is Request.Request<unknown, unknown> => hasProperty(u, RequestTypeId)

/** @internal */
export const of = <R extends Request.Request<any, any>>(): Request.Request.Constructor<R> => (args) =>
  Object.assign(Object.create(RequestPrototype), args)

/** @internal */
export const tagged = <R extends Request.Request<any, any> & { _tag: string }>(
  tag: R["_tag"]
): Request.Request.Constructor<R, "_tag"> =>
(args) => {
  const request = Object.assign(Object.create(RequestPrototype), args)
  request._tag = tag
  return request
}

/** @internal */
export const Class: new<Success, Error, A extends Record<string, any>>(
  args: Types.Equals<Omit<A, keyof Request.Request<unknown, unknown>>, {}> extends true ? void
    : { readonly [P in keyof A as P extends keyof Request.Request<unknown, unknown> ? never : P]: A[P] }
) => Request.Request<Success, Error> & Readonly<A> = (function() {
  function Class(this: any, args: any) {
    if (args) {
      Object.assign(this, args)
    }
  }
  Class.prototype = RequestPrototype
  return Class as any
})()

/** @internal */
export const TaggedClass = <Tag extends string>(
  tag: Tag
): new<Success, Error, A extends Record<string, any>>(
  args: Types.Equals<Omit<A, keyof Request.Request<unknown, unknown>>, {}> extends true ? void
    : { readonly [P in keyof A as P extends "_tag" | keyof Request.Request<unknown, unknown> ? never : P]: A[P] }
) => Request.Request<Success, Error> & Readonly<A> & { readonly _tag: Tag } => {
  return class TaggedClass extends Class<any, any, any> {
    readonly _tag = tag
  } as any
}

/** @internal */
export const complete = dual<
  <A extends Request.Request<any, any>>(
    result: Request.Request.Result<A>
  ) => (self: A) => Effect.Effect<void>,
  <A extends Request.Request<any, any>>(
    self: A,
    result: Request.Request.Result<A>
  ) => Effect.Effect<void>
>(2, (self, result) =>
  core.fiberRefGetWith(
    completedRequestMap.currentRequestMap,
    (map) =>
      core.sync(() => {
        if (map.has(self)) {
          const entry = map.get(self)!
          if (!entry.state.completed) {
            entry.state.completed = true
            core.deferredUnsafeDone(entry.result, result)
          }
        }
      })
  ))

/** @internal */
export const completeEffect = dual<
  <A extends Request.Request<any, any>, R>(
    effect: Effect.Effect<Request.Request.Success<A>, Request.Request.Error<A>, R>
  ) => (self: A) => Effect.Effect<void, never, R>,
  <A extends Request.Request<any, any>, R>(
    self: A,
    effect: Effect.Effect<Request.Request.Success<A>, Request.Request.Error<A>, R>
  ) => Effect.Effect<void, never, R>
>(2, (self, effect) =>
  core.matchEffect(effect, {
    onFailure: (error) => complete(self, core.exitFail(error) as any),
    onSuccess: (value) => complete(self, core.exitSucceed(value) as any)
  }))

/** @internal */
export const fail = dual<
  <A extends Request.Request<any, any>>(
    error: Request.Request.Error<A>
  ) => (self: A) => Effect.Effect<void>,
  <A extends Request.Request<any, any>>(
    self: A,
    error: Request.Request.Error<A>
  ) => Effect.Effect<void>
>(2, (self, error) => complete(self, core.exitFail(error) as any))

/** @internal */
export const failCause = dual<
  <A extends Request.Request<any, any>>(
    cause: Cause.Cause<Request.Request.Error<A>>
  ) => (self: A) => Effect.Effect<void>,
  <A extends Request.Request<any, any>>(
    self: A,
    cause: Cause.Cause<Request.Request.Error<A>>
  ) => Effect.Effect<void>
>(2, (self, cause) => complete(self, core.exitFailCause(cause) as any))

/** @internal */
export const succeed = dual<
  <A extends Request.Request<any, any>>(
    value: Request.Request.Success<A>
  ) => (self: A) => Effect.Effect<void>,
  <A extends Request.Request<any, any>>(
    self: A,
    value: Request.Request.Success<A>
  ) => Effect.Effect<void>
>(2, (self, value) => complete(self, core.exitSucceed(value) as any))

/** @internal */
export class Listeners {
  count = 0
  observers: Set<(count: number) => void> = new Set()
  interrupted = false
  addObserver(f: (count: number) => void): void {
    this.observers.add(f)
  }
  removeObserver(f: (count: number) => void): void {
    this.observers.delete(f)
  }
  increment() {
    this.count++
    this.observers.forEach((f) => f(this.count))
  }
  decrement() {
    this.count--
    this.observers.forEach((f) => f(this.count))
  }
}

/**
 * @internal
 */
export const filterOutCompleted = <A extends Request.Request<any, any>>(requests: Array<A>) =>
  core.fiberRefGetWith(
    completedRequestMap.currentRequestMap,
    (map) =>
      core.succeed(
        requests.filter((request) => !(map.get(request)?.state.completed === true))
      )
  )
