/**
 * @since 2.0.0
 */
import type { Equivalence } from "./Equivalence.js"
import * as Hash from "./Hash.js"
import { hasProperty } from "./Predicate.js"
import { structuralRegionState } from "./Utils.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const symbol: unique symbol = Symbol.for("effect/Equal")

/**
 * @since 2.0.0
 * @category models
 */
export interface Equal extends Hash.Hash {
  [symbol](that: Equal): boolean
}

/**
 * @since 2.0.0
 * @category equality
 */
export function equals<B>(that: B): <A>(self: A) => boolean
export function equals<A, B>(self: A, that: B): boolean
export function equals(): any {
  if (arguments.length === 1) {
    return (self: unknown) => compareBoth(self, arguments[0])
  }
  return compareBoth(arguments[0], arguments[1])
}

function compareBoth(self: unknown, that: unknown): boolean {
  if (self === that) {
    return true
  }
  const selfType = typeof self
  if (selfType !== typeof that) {
    return false
  }
  if (selfType === "object" || selfType === "function") {
    if (self !== null && that !== null) {
      if (isEqual(self) && isEqual(that)) {
        if (Hash.hash(self) === Hash.hash(that) && self[symbol](that)) {
          return true
        } else {
          return structuralRegionState.enabled && structuralRegionState.tester
            ? structuralRegionState.tester(self, that)
            : false
        }
      } else if (self instanceof Date && that instanceof Date) {
        const t1 = self.getTime()
        const t2 = that.getTime()
        return t1 === t2 || (Number.isNaN(t1) && Number.isNaN(t2))
      } else if (self instanceof URL && that instanceof URL) {
        return self.href === that.href
      }
    }
    if (structuralRegionState.enabled) {
      if (self === null || that === null) {
        return false
      }
      if (Array.isArray(self) && Array.isArray(that)) {
        return self.length === that.length && self.every((v, i) => compareBoth(v, that[i]))
      }
      if (Object.getPrototypeOf(self) === Object.prototype && Object.getPrototypeOf(that) === Object.prototype) {
        const keysSelf = Object.keys(self as any)
        const keysThat = Object.keys(that as any)
        if (keysSelf.length === keysThat.length) {
          for (const key of keysSelf) {
            // @ts-expect-error
            if (!(key in that && compareBoth(self[key], that[key]))) {
              return structuralRegionState.tester ? structuralRegionState.tester(self, that) : false
            }
          }
          return true
        }
      }
      return structuralRegionState.tester ? structuralRegionState.tester(self, that) : false
    }
  }

  return structuralRegionState.enabled && structuralRegionState.tester
    ? structuralRegionState.tester(self, that)
    : false
}

/**
 * @since 2.0.0
 * @category guards
 */
export const isEqual = (u: unknown): u is Equal => hasProperty(u, symbol)

/**
 * @since 2.0.0
 * @category instances
 */
export const equivalence: <A>() => Equivalence<A> = () => equals
