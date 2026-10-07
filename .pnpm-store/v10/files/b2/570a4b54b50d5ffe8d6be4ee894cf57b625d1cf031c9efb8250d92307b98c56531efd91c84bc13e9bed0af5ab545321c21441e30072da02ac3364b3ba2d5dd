import type { Middleware, StoreEnhancer } from 'redux'
import type { Tuple } from './utils'

export function safeAssign<T extends object>(
  target: T,
  ...args: Array<Partial<NoInfer<T>>>
) {
  Object.assign(target, ...args)
}

/**
 * return True if T is `any`, otherwise return False
 * taken from https://github.com/joonhocho/tsdef
 *
 * @internal
 */
export type IsAny<T, True, False = never> =
  // test if we are going the left AND right path in the condition
  true | false extends (T extends never ? true : false) ? True : False

export type CastAny<T, CastTo> = IsAny<T, CastTo, T>

/**
 * return True if T is `unknown`, otherwise return False
 * taken from https://github.com/joonhocho/tsdef
 *
 * @internal
 */
export type IsUnknown<T, True, False = never> = unknown extends T
  ? IsAny<T, False, True>
  : False

export type FallbackIfUnknown<T, Fallback> = IsUnknown<T, Fallback, T>

/**
 * @internal
 */
export type IfMaybeUndefined<P, True, False> = [undefined] extends [P]
  ? True
  : False

/**
 * @internal
 */
export type IfVoid<P, True, False> = [void] extends [P] ? True : False

/**
 * @internal
 */
export type IsEmptyObj<T, True, False = never> = T extends any
  ? keyof T extends never
    ? IsUnknown<T, False, IfMaybeUndefined<T, False, IfVoid<T, False, True>>>
    : False
  : never

/**
 * returns True if TS version is above 3.5, False if below.
 * uses feature detection to detect TS version >= 3.5
 * * versions below 3.5 will return `{}` for unresolvable interference
 * * versions above will return `unknown`
 *
 * @internal
 */
export type AtLeastTS35<True, False> = [True, False][IsUnknown<
  ReturnType<<T>() => T>,
  0,
  1
>]

/**
 * @internal
 */
export type IsUnknownOrNonInferrable<T, True, False> = AtLeastTS35<
  IsUnknown<T, True, False>,
  IsEmptyObj<T, True, IsUnknown<T, True, False>>
>

/**
 * Convert a Union type `(A|B)` to an intersection type `(A&B)`
 */
export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

// Appears to have a convenient side effect of ignoring `never` even if that's not what you specified
export type ExcludeFromTuple<T, E, Acc extends unknown[] = []> = T extends [
  infer Head,
  ...infer Tail,
]
  ? ExcludeFromTuple<Tail, E, [...Acc, ...([Head] extends [E] ? [] : [Head])]>
  : Acc

type ExtractDispatchFromMiddlewareTuple<
  MiddlewareTuple extends readonly any[],
  Acc extends {},
> = MiddlewareTuple extends [infer Head, ...infer Tail]
  ? ExtractDispatchFromMiddlewareTuple<
      Tail,
      Acc & (Head extends Middleware<infer D> ? IsAny<D, {}, D> : {})
    >
  : Acc

export type ExtractDispatchExtensions<M> =
  M extends Tuple<infer MiddlewareTuple>
    ? ExtractDispatchFromMiddlewareTuple<MiddlewareTuple, {}>
    : M extends ReadonlyArray<Middleware>
      ? ExtractDispatchFromMiddlewareTuple<[...M], {}>
      : never

type ExtractStoreExtensionsFromEnhancerTuple<
  EnhancerTuple extends readonly any[],
  Acc extends {},
> = EnhancerTuple extends [infer Head, ...infer Tail]
  ? ExtractStoreExtensionsFromEnhancerTuple<
      Tail,
      Acc & (Head extends StoreEnhancer<infer Ext> ? IsAny<Ext, {}, Ext> : {})
    >
  : Acc

export type ExtractStoreExtensions<E> =
  E extends Tuple<infer EnhancerTuple>
    ? ExtractStoreExtensionsFromEnhancerTuple<EnhancerTuple, {}>
    : E extends ReadonlyArray<StoreEnhancer>
      ? UnionToIntersection<
          E[number] extends StoreEnhancer<infer Ext>
            ? Ext extends {}
              ? IsAny<Ext, {}, Ext>
              : {}
            : {}
        >
      : never

type ExtractStateExtensionsFromEnhancerTuple<
  EnhancerTuple extends readonly any[],
  Acc extends {},
> = EnhancerTuple extends [infer Head, ...infer Tail]
  ? ExtractStateExtensionsFromEnhancerTuple<
      Tail,
      Acc &
        (Head extends StoreEnhancer<any, infer StateExt>
          ? IsAny<StateExt, {}, StateExt>
          : {})
    >
  : Acc

export type ExtractStateExtensions<E> =
  E extends Tuple<infer EnhancerTuple>
    ? ExtractStateExtensionsFromEnhancerTuple<EnhancerTuple, {}>
    : E extends ReadonlyArray<StoreEnhancer>
      ? UnionToIntersection<
          E[number] extends StoreEnhancer<any, infer StateExt>
            ? StateExt extends {}
              ? IsAny<StateExt, {}, StateExt>
              : {}
            : {}
        >
      : never

/**
 * Helper type. Passes T out again, but boxes it in a way that it cannot
 * "widen" the type by accident if it is a generic that should be inferred
 * from elsewhere.
 *
 * @internal
 */
export type NoInfer<T> = [T][T extends any ? 0 : never]

export type NonUndefined<T> = T extends undefined ? never : T

export type WithRequiredProp<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>

export type WithOptionalProp<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>

export interface TypeGuard<T> {
  (value: any): value is T
}

export interface HasMatchFunction<T> {
  match: TypeGuard<T>
}

export const hasMatchFunction = <T>(
  v: Matcher<T>,
): v is HasMatchFunction<T> => {
  return v && typeof (v as HasMatchFunction<T>).match === 'function'
}

/** @public */
export type Matcher<T> = HasMatchFunction<T> | TypeGuard<T>

/** @public */
export type ActionFromMatcher<M extends Matcher<any>> =
  M extends Matcher<infer T> ? T : never

export type Id<T> = { [K in keyof T]: T[K] } & {}

export type Tail<T extends any[]> = T extends [any, ...infer Tail]
  ? Tail
  : never

export type UnknownIfNonSpecific<T> = {} extends T ? unknown : T

/**
 * A Promise that will never reject.
 * @see https://github.com/reduxjs/redux-toolkit/issues/4101
 */
export type SafePromise<T> = Promise<T> & {
  __linterBrands: 'SafePromise'
}

/**
 * Properly wraps a Promise as a {@link SafePromise} with .catch(fallback).
 */
export function asSafePromise<Resolved, Rejected>(
  promise: Promise<Resolved>,
  fallback: (error: unknown) => Rejected,
) {
  return promise.catch(fallback) as SafePromise<Resolved | Rejected>
}
