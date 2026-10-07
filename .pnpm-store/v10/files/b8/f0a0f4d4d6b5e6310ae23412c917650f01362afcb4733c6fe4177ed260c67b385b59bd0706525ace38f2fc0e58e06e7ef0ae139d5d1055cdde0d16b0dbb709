/**
 * @since 2.0.0
 */
import { identity } from "./Function.js"
import { globalValue } from "./GlobalValue.js"
import type { Kind, TypeLambda } from "./HKT.js"
import { getBugErrorMessage } from "./internal/errors.js"
import { isNullable, isObject } from "./Predicate.js"
import type * as Types from "./Types.js"

/*
 * Copyright 2014 Thom Chiovoloni, released under the MIT license.
 *
 * A random number generator based on the basic implementation of the PCG algorithm,
 * as described here: http://www.pcg-random.org/
 *
 * Adapted for TypeScript from Thom's original code at https://github.com/thomcc/pcg-random
 *
 * forked from https://github.com/frptools
 *
 * @since 2.0.0
 */

/**
 * @category symbols
 * @since 2.0.0
 */
export const GenKindTypeId: unique symbol = Symbol.for("effect/Gen/GenKind")

/**
 * @category symbols
 * @since 2.0.0
 */
export type GenKindTypeId = typeof GenKindTypeId

/**
 * @category models
 * @since 2.0.0
 */
export interface GenKind<F extends TypeLambda, R, O, E, A> extends Variance<F, R, O, E> {
  readonly value: Kind<F, R, O, E, A>

  [Symbol.iterator](): IterableIterator<GenKind<F, R, O, E, A>, A>
}

/**
 * @category predicates
 * @since 3.0.6
 */
export const isGenKind = (u: unknown): u is GenKind<any, any, any, any, any> => isObject(u) && GenKindTypeId in u

/**
 * @category constructors
 * @since 2.0.0
 */
export class GenKindImpl<F extends TypeLambda, R, O, E, A> implements GenKind<F, R, O, E, A> {
  constructor(
    /**
     * @since 2.0.0
     */
    readonly value: Kind<F, R, O, E, A>
  ) {}

  /**
   * @since 2.0.0
   */
  get _F() {
    return identity
  }

  /**
   * @since 2.0.0
   */
  get _R() {
    return (_: R) => _
  }

  /**
   * @since 2.0.0
   */
  get _O() {
    return (_: never): O => _
  }

  /**
   * @since 2.0.0
   */
  get _E() {
    return (_: never): E => _
  }

  /**
   * @since 2.0.0
   */
  readonly [GenKindTypeId]: typeof GenKindTypeId = GenKindTypeId;

  /**
   * @since 2.0.0
   */
  [Symbol.iterator](): IterableIterator<GenKind<F, R, O, E, A>, A> {
    return new SingleShotGen<GenKind<F, R, O, E, A>, A>(this as any)
  }
}

/**
 * @category constructors
 * @since 2.0.0
 */
export class SingleShotGen<T, A> implements IterableIterator<T, A> {
  private called = false

  constructor(readonly self: T) {}

  /**
   * @since 2.0.0
   */
  next(a: A): IteratorResult<T, A> {
    return this.called ?
      ({
        value: a,
        done: true
      }) :
      (this.called = true,
        ({
          value: this.self,
          done: false
        }))
  }

  /**
   * @since 2.0.0
   */
  return(a: A): IteratorResult<T, A> {
    return ({
      value: a,
      done: true
    })
  }

  /**
   * @since 2.0.0
   */
  throw(e: unknown): IteratorResult<T, A> {
    throw e
  }

  /**
   * @since 2.0.0
   */
  [Symbol.iterator](): IterableIterator<T, A> {
    return new SingleShotGen<T, A>(this.self)
  }
}

/**
 * @category constructors
 * @since 2.0.0
 */
export const makeGenKind = <F extends TypeLambda, R, O, E, A>(
  kind: Kind<F, R, O, E, A>
): GenKind<F, R, O, E, A> => new GenKindImpl(kind)

/**
 * @category models
 * @since 2.0.0
 */
export interface Variance<in out F extends TypeLambda, in R, out O, out E> {
  readonly [GenKindTypeId]: GenKindTypeId
  readonly _F: Types.Invariant<F>
  readonly _R: Types.Contravariant<R>
  readonly _O: Types.Covariant<O>
  readonly _E: Types.Covariant<E>
}

/**
 * @category models
 * @since 2.0.0
 */
export interface Gen<F extends TypeLambda, Z> {
  <Self, K extends Variance<F, any, any, any> | YieldWrap<Kind<F, any, any, any, any>>, A>(
    ...args:
      | [
        self: Self,
        body: (this: Self, resume: Z) => Generator<K, A, never>
      ]
      | [
        body: (resume: Z) => Generator<K, A, never>
      ]
  ): Kind<
    F,
    [K] extends [Variance<F, infer R, any, any>] ? R
      : [K] extends [YieldWrap<Kind<F, infer R, any, any, any>>] ? R
      : never,
    [K] extends [Variance<F, any, infer O, any>] ? O
      : [K] extends [YieldWrap<Kind<F, any, infer O, any, any>>] ? O
      : never,
    [K] extends [Variance<F, any, any, infer E>] ? E
      : [K] extends [YieldWrap<Kind<F, any, any, infer E, any>>] ? E
      : never,
    A
  >
}

/**
 * @category models
 * @since 2.0.0
 */
export interface Adapter<Z extends TypeLambda> {
  <_R, _O, _E, _A>(
    self: Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, _R, _O, _E, _A>(a: A, ab: (a: A) => Kind<Z, _R, _O, _E, _A>): GenKind<Z, _R, _O, _E, _A>
  <A, B, _R, _O, _E, _A>(a: A, ab: (a: A) => B, bc: (b: B) => Kind<Z, _R, _O, _E, _A>): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: F) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (g: H) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => S,
    st: (s: S) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, _R, _O, _E, _A>(
    a: A,
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    gh: (g: G) => H,
    hi: (h: H) => I,
    ij: (i: I) => J,
    jk: (j: J) => K,
    kl: (k: K) => L,
    lm: (l: L) => M,
    mn: (m: M) => N,
    no: (n: N) => O,
    op: (o: O) => P,
    pq: (p: P) => Q,
    qr: (q: Q) => R,
    rs: (r: R) => S,
    st: (s: S) => T,
    tu: (s: T) => Kind<Z, _R, _O, _E, _A>
  ): GenKind<Z, _R, _O, _E, _A>
}

/**
 * @category adapters
 * @since 2.0.0
 */
export const adapter: <F extends TypeLambda>() => Adapter<F> = () => (function() {
  let x = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    x = arguments[i](x)
  }
  return new GenKindImpl(x) as any
})

const defaultIncHi = 0x14057b7e
const defaultIncLo = 0xf767814f
const MUL_HI = 0x5851f42d >>> 0
const MUL_LO = 0x4c957f2d >>> 0
const BIT_53 = 9007199254740992.0
const BIT_27 = 134217728.0

/**
 * @category model
 * @since 2.0.0
 */
export type PCGRandomState = [number, number, number, number]

/**
 * @category model
 * @since 2.0.0
 */
export type OptionalNumber = number | null | undefined

/**
 * PCG is a family of simple fast space-efficient statistically good algorithms
 * for random number generation. Unlike many general-purpose RNGs, they are also
 * hard to predict.
 *
 * @category model
 * @since 2.0.0
 */
export class PCGRandom {
  private _state!: Int32Array

  /**
   * Creates an instance of PCGRandom.
   *
   * - `seed` - The low 32 bits of the seed (0 is used for high 32 bits).
   *
   * @memberOf PCGRandom
   */
  constructor(seed?: OptionalNumber)
  /**
   * Creates an instance of PCGRandom.
   *
   * - `seedHi` - The high 32 bits of the seed.
   * - `seedLo` - The low 32 bits of the seed.
   * - `inc` - The low 32 bits of the incrementer (0 is used for high 32 bits).
   *
   * @memberOf PCGRandom
   */
  constructor(seedHi: OptionalNumber, seedLo: OptionalNumber, inc?: OptionalNumber)
  /**
   * Creates an instance of PCGRandom.
   *
   * - `seedHi` - The high 32 bits of the seed.
   * - `seedLo` - The low 32 bits of the seed.
   * - `incHi` - The high 32 bits of the incrementer.
   * - `incLo` - The low 32 bits of the incrementer.
   *
   * @memberOf PCGRandom
   */
  constructor(
    seedHi: OptionalNumber,
    seedLo: OptionalNumber,
    incHi: OptionalNumber,
    incLo: OptionalNumber
  )
  constructor(
    seedHi?: OptionalNumber,
    seedLo?: OptionalNumber,
    incHi?: OptionalNumber,
    incLo?: OptionalNumber
  ) {
    if (isNullable(seedLo) && isNullable(seedHi)) {
      seedLo = (Math.random() * 0xffffffff) >>> 0
      seedHi = 0
    } else if (isNullable(seedLo)) {
      seedLo = seedHi
      seedHi = 0
    }
    if (isNullable(incLo) && isNullable(incHi)) {
      incLo = this._state ? this._state[3] : defaultIncLo
      incHi = this._state ? this._state[2] : defaultIncHi
    } else if (isNullable(incLo)) {
      incLo = <number> incHi
      incHi = 0
    }

    this._state = new Int32Array([0, 0, (<number> incHi) >>> 0, ((incLo || 0) | 1) >>> 0])
    this._next()
    add64(
      this._state,
      this._state[0]!,
      this._state[1]!,
      (<number> seedHi) >>> 0,
      (<number> seedLo) >>> 0
    )
    this._next()
    return this
  }

  /**
   * Returns a copy of the internal state of this random number generator as a
   * JavaScript Array.
   *
   * @category getters
   * @since 2.0.0
   */
  getState(): PCGRandomState {
    return [this._state[0]!, this._state[1]!, this._state[2]!, this._state[3]!]
  }

  /**
   * Restore state previously retrieved using `getState()`.
   *
   * @since 2.0.0
   */
  setState(state: PCGRandomState) {
    this._state[0] = state[0]
    this._state[1] = state[1]
    this._state[2] = state[2]
    this._state[3] = state[3] | 1
  }

  /**
   * Get a uniformly distributed 32 bit integer between [0, max).
   *
   * @category getter
   * @since 2.0.0
   */
  integer(max: number) {
    return Math.round(this.number() * Number.MAX_SAFE_INTEGER) % max
  }

  /**
   * Get a uniformly distributed IEEE-754 double between 0.0 and 1.0, with
   * 53 bits of precision (every bit of the mantissa is randomized).
   *
   * @category getters
   * @since 2.0.0
   */
  number() {
    const hi = (this._next() & 0x03ffffff) * 1.0
    const lo = (this._next() & 0x07ffffff) * 1.0
    return (hi * BIT_27 + lo) / BIT_53
  }

  /** @internal */
  private _next() {
    // save current state (what we'll use for this number)
    const oldHi = this._state[0]! >>> 0
    const oldLo = this._state[1]! >>> 0

    // churn LCG.
    mul64(this._state, oldHi, oldLo, MUL_HI, MUL_LO)
    add64(this._state, this._state[0]!, this._state[1]!, this._state[2]!, this._state[3]!)

    // get least sig. 32 bits of ((oldstate >> 18) ^ oldstate) >> 27
    let xsHi = oldHi >>> 18
    let xsLo = ((oldLo >>> 18) | (oldHi << 14)) >>> 0
    xsHi = (xsHi ^ oldHi) >>> 0
    xsLo = (xsLo ^ oldLo) >>> 0
    const xorshifted = ((xsLo >>> 27) | (xsHi << 5)) >>> 0
    // rotate xorshifted right a random amount, based on the most sig. 5 bits
    // bits of the old state.
    const rot = oldHi >>> 27
    const rot2 = ((-rot >>> 0) & 31) >>> 0
    return ((xorshifted >>> rot) | (xorshifted << rot2)) >>> 0
  }
}

function mul64(
  out: Int32Array,
  aHi: number,
  aLo: number,
  bHi: number,
  bLo: number
): void {
  let c1 = ((aLo >>> 16) * (bLo & 0xffff)) >>> 0
  let c0 = ((aLo & 0xffff) * (bLo >>> 16)) >>> 0

  let lo = ((aLo & 0xffff) * (bLo & 0xffff)) >>> 0
  let hi = ((aLo >>> 16) * (bLo >>> 16) + ((c0 >>> 16) + (c1 >>> 16))) >>> 0

  c0 = (c0 << 16) >>> 0
  lo = (lo + c0) >>> 0
  if ((lo >>> 0) < (c0 >>> 0)) {
    hi = (hi + 1) >>> 0
  }

  c1 = (c1 << 16) >>> 0
  lo = (lo + c1) >>> 0
  if ((lo >>> 0) < (c1 >>> 0)) {
    hi = (hi + 1) >>> 0
  }

  hi = (hi + Math.imul(aLo, bHi)) >>> 0
  hi = (hi + Math.imul(aHi, bLo)) >>> 0

  out[0] = hi
  out[1] = lo
}

// add two 64 bit numbers (given in parts), and store the result in `out`.
function add64(
  out: Int32Array,
  aHi: number,
  aLo: number,
  bHi: number,
  bLo: number
): void {
  let hi = (aHi + bHi) >>> 0
  const lo = (aLo + bLo) >>> 0
  if ((lo >>> 0) < (aLo >>> 0)) {
    hi = (hi + 1) | 0
  }
  out[0] = hi
  out[1] = lo
}

/**
 * @since 3.0.6
 */
export const YieldWrapTypeId: unique symbol = Symbol.for("effect/Utils/YieldWrap")

/**
 * @since 3.0.6
 */
export class YieldWrap<T> {
  /**
   * @since 3.0.6
   */
  readonly #value: T
  constructor(value: T) {
    this.#value = value
  }
  /**
   * @since 3.0.6
   */
  [YieldWrapTypeId](): T {
    return this.#value
  }
}

/**
 * @since 3.0.6
 */
export function yieldWrapGet<T>(self: YieldWrap<T>): T {
  if (typeof self === "object" && self !== null && YieldWrapTypeId in self) {
    return self[YieldWrapTypeId]()
  }
  throw new Error(getBugErrorMessage("yieldWrapGet"))
}

/**
 * Note: this is an experimental feature made available to allow custom matchers in tests, not to be directly used yet in user code
 *
 * @since 3.1.1
 * @status experimental
 * @category modifiers
 */
export const structuralRegionState = globalValue(
  "effect/Utils/isStructuralRegion",
  (): { enabled: boolean; tester: ((a: unknown, b: unknown) => boolean) | undefined } => ({
    enabled: false,
    tester: undefined
  })
)

/**
 * Note: this is an experimental feature made available to allow custom matchers in tests, not to be directly used yet in user code
 *
 * @since 3.1.1
 * @status experimental
 * @category modifiers
 */
export const structuralRegion = <A>(body: () => A, tester?: (a: unknown, b: unknown) => boolean): A => {
  const current = structuralRegionState.enabled
  const currentTester = structuralRegionState.tester
  structuralRegionState.enabled = true
  if (tester) {
    structuralRegionState.tester = tester
  }
  try {
    return body()
  } finally {
    structuralRegionState.enabled = current
    structuralRegionState.tester = currentTester
  }
}

const standard = {
  effect_internal_function: <A>(body: () => A) => {
    return body()
  }
}

const forced = {
  effect_internal_function: <A>(body: () => A) => {
    try {
      return body()
    } finally {
      //
    }
  }
}

const isNotOptimizedAway =
  standard.effect_internal_function(() => new Error().stack)?.includes("effect_internal_function") === true

/**
 * @since 3.2.2
 * @status experimental
 * @category tracing
 */
export const internalCall = isNotOptimizedAway ? standard.effect_internal_function : forced.effect_internal_function

const genConstructor = (function*() {}).constructor

/**
 * @since 3.11.0
 */
export const isGeneratorFunction = (u: unknown): u is (...args: Array<any>) => Generator<any, any, any> =>
  isObject(u) && u.constructor === genConstructor
