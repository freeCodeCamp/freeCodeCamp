/**
 * @since 2.0.0
 */

import { identity } from "./Function.js"

/**
 * @since 2.0.0
 */
export declare const unifySymbol: unique symbol

/**
 * @since 2.0.0
 */
export type unifySymbol = typeof unifySymbol

/**
 * @since 2.0.0
 */
export declare const typeSymbol: unique symbol

/**
 * @since 2.0.0
 */
export type typeSymbol = typeof typeSymbol

/**
 * @since 2.0.0
 */
export declare const ignoreSymbol: unique symbol

/**
 * @since 2.0.0
 */
export type ignoreSymbol = typeof ignoreSymbol

type MaybeReturn<F> = F extends () => infer R ? R : NonNullable<F>

type Values<X extends [any, any]> = X extends [infer A, infer Ignore]
  ? Exclude<keyof A, Ignore> extends infer k ? k extends keyof A ? MaybeReturn<A[k]> : never : never
  : never

type Ignore<X> = X extends { [ignoreSymbol]?: infer Obj } ? keyof NonNullable<Obj>
  : never

type ExtractTypes<
  X
> = X extends {
  [typeSymbol]?: infer _Type
  [unifySymbol]?: infer _Unify
} ? [NonNullable<_Unify>, Ignore<X>]
  : never

type FilterIn<A> = A extends any ? typeSymbol extends keyof A ? A : never : never

type FilterOut<A> = A extends any ? typeSymbol extends keyof A ? never : A : never

/**
 * @since 2.0.0
 */
export type Unify<A> = Values<
  ExtractTypes<
    (
      & FilterIn<A>
      & { [typeSymbol]: A }
    )
  >
> extends infer Z ? Z | Exclude<A, Z> | FilterOut<A> : never

/**
 * @since 2.0.0
 */
export const unify: {
  /**
   * @since 2.0.0
   */
  <
    Args extends Array<any>,
    Args2 extends Array<any>,
    Args3 extends Array<any>,
    Args4 extends Array<any>,
    Args5 extends Array<any>,
    T
  >(
    x: (...args: Args) => (...args: Args2) => (...args: Args3) => (...args: Args4) => (...args: Args5) => T
  ): (...args: Args) => (...args: Args2) => (...args: Args3) => (...args: Args4) => (...args: Args5) => Unify<T>
  /**
   * @since 2.0.0
   */
  <
    Args extends Array<any>,
    Args2 extends Array<any>,
    Args3 extends Array<any>,
    Args4 extends Array<any>,
    T
  >(
    x: (...args: Args) => (...args: Args2) => (...args: Args3) => (...args: Args4) => T
  ): (...args: Args) => (...args: Args2) => (...args: Args3) => (...args: Args4) => Unify<T>
  /**
   * @since 2.0.0
   */
  <
    Args extends Array<any>,
    Args2 extends Array<any>,
    Args3 extends Array<any>,
    T
  >(x: (...args: Args) => (...args: Args2) => (...args: Args3) => T): (...args: Args) => (...args: Args2) => (...args: Args3) => Unify<T>
  /**
   * @since 2.0.0
   */
  <
    Args extends Array<any>,
    Args2 extends Array<any>,
    T
  >(x: (...args: Args) => (...args: Args2) => T): (...args: Args) => (...args: Args2) => Unify<T>
  /**
   * @since 2.0.0
   */
  <
    Args extends Array<any>,
    T
  >(x: (...args: Args) => T): (...args: Args) => Unify<T>
  /**
   * @since 2.0.0
   */
  <T>(x: T): Unify<T>
} = identity as any
