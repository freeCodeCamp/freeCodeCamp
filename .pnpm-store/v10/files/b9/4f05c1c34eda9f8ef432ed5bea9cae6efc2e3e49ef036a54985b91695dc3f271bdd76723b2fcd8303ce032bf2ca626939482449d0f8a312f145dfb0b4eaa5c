/**
 * @since 2.0.0
 */
import * as Equal from "./Equal.js"
import * as Dual from "./Function.js"
import { format, type Inspectable, NodeInspectSymbol, toJSON } from "./Inspectable.js"
import type { Pipeable } from "./Pipeable.js"
import { pipeArguments } from "./Pipeable.js"

const TypeId: unique symbol = Symbol.for("effect/MutableRef") as TypeId

/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface MutableRef<out T> extends Pipeable, Inspectable {
  readonly [TypeId]: TypeId
  current: T
}

const MutableRefProto: Omit<MutableRef<unknown>, "current"> = {
  [TypeId]: TypeId,
  toString<A>(this: MutableRef<A>): string {
    return format(this.toJSON())
  },
  toJSON<A>(this: MutableRef<A>) {
    return {
      _id: "MutableRef",
      current: toJSON(this.current)
    }
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const make = <T>(value: T): MutableRef<T> => {
  const ref = Object.create(MutableRefProto)
  ref.current = value
  return ref
}

/**
 * @since 2.0.0
 * @category general
 */
export const compareAndSet: {
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(oldValue: T, newValue: T): (self: MutableRef<T>) => boolean
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(self: MutableRef<T>, oldValue: T, newValue: T): boolean
} = Dual.dual<
  <T>(oldValue: T, newValue: T) => (self: MutableRef<T>) => boolean,
  <T>(self: MutableRef<T>, oldValue: T, newValue: T) => boolean
>(3, (self, oldValue, newValue) => {
  if (Equal.equals(oldValue, self.current)) {
    self.current = newValue
    return true
  }
  return false
})

/**
 * @since 2.0.0
 * @category numeric
 */
export const decrement = (self: MutableRef<number>): MutableRef<number> => update(self, (n) => n - 1)

/**
 * @since 2.0.0
 * @category numeric
 */
export const decrementAndGet = (self: MutableRef<number>): number => updateAndGet(self, (n) => n - 1)

/**
 * @since 2.0.0
 * @category general
 */
export const get = <T>(self: MutableRef<T>): T => self.current

/**
 * @since 2.0.0
 * @category numeric
 */
export const getAndDecrement = (self: MutableRef<number>): number => getAndUpdate(self, (n) => n - 1)

/**
 * @since 2.0.0
 * @category numeric
 */
export const getAndIncrement = (self: MutableRef<number>): number => getAndUpdate(self, (n) => n + 1)

/**
 * @since 2.0.0
 * @category general
 */
export const getAndSet: {
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(value: T): (self: MutableRef<T>) => T
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(self: MutableRef<T>, value: T): T
} = Dual.dual<
  <T>(value: T) => (self: MutableRef<T>) => T,
  <T>(self: MutableRef<T>, value: T) => T
>(2, (self, value) => {
  const ret = self.current
  self.current = value
  return ret
})

/**
 * @since 2.0.0
 * @category general
 */
export const getAndUpdate: {
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(f: (value: T) => T): (self: MutableRef<T>) => T
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(self: MutableRef<T>, f: (value: T) => T): T
} = Dual.dual<
  <T>(f: (value: T) => T) => (self: MutableRef<T>) => T,
  <T>(self: MutableRef<T>, f: (value: T) => T) => T
>(2, (self, f) => getAndSet(self, f(get(self))))

/**
 * @since 2.0.0
 * @category numeric
 */
export const increment = (self: MutableRef<number>): MutableRef<number> => update(self, (n) => n + 1)

/**
 * @since 2.0.0
 * @category numeric
 */
export const incrementAndGet = (self: MutableRef<number>): number => updateAndGet(self, (n) => n + 1)

/**
 * @since 2.0.0
 * @category general
 */
export const set: {
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(value: T): (self: MutableRef<T>) => MutableRef<T>
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(self: MutableRef<T>, value: T): MutableRef<T>
} = Dual.dual<
  <T>(value: T) => (self: MutableRef<T>) => MutableRef<T>,
  <T>(self: MutableRef<T>, value: T) => MutableRef<T>
>(2, (self, value) => {
  self.current = value
  return self
})

/**
 * @since 2.0.0
 * @category general
 */
export const setAndGet: {
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(value: T): (self: MutableRef<T>) => T
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(self: MutableRef<T>, value: T): T
} = Dual.dual<
  <T>(value: T) => (self: MutableRef<T>) => T,
  <T>(self: MutableRef<T>, value: T) => T
>(2, (self, value) => {
  self.current = value
  return self.current
})

/**
 * @since 2.0.0
 * @category general
 */
export const update: {
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(f: (value: T) => T): (self: MutableRef<T>) => MutableRef<T>
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(self: MutableRef<T>, f: (value: T) => T): MutableRef<T>
} = Dual.dual<
  <T>(f: (value: T) => T) => (self: MutableRef<T>) => MutableRef<T>,
  <T>(self: MutableRef<T>, f: (value: T) => T) => MutableRef<T>
>(2, (self, f) => set(self, f(get(self))))

/**
 * @since 2.0.0
 * @category general
 */
export const updateAndGet: {
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(f: (value: T) => T): (self: MutableRef<T>) => T
  /**
   * @since 2.0.0
   * @category general
   */
  <T>(self: MutableRef<T>, f: (value: T) => T): T
} = Dual.dual<
  <T>(f: (value: T) => T) => (self: MutableRef<T>) => T,
  <T>(self: MutableRef<T>, f: (value: T) => T) => T
>(2, (self, f) => setAndGet(self, f(get(self))))

/**
 * @since 2.0.0
 * @category boolean
 */
export const toggle = (self: MutableRef<boolean>): MutableRef<boolean> => update(self, (_) => !_)
