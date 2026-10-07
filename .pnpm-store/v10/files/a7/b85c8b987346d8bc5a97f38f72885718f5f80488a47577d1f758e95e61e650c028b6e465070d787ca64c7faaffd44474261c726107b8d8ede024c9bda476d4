/**
 * @since 2.0.0
 */
import type * as FiberRefs from "./FiberRefs.js"
import { globalValue } from "./GlobalValue.js"
import * as Predicate from "./Predicate.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const NodeInspectSymbol = Symbol.for("nodejs.util.inspect.custom")

/**
 * @since 2.0.0
 * @category symbols
 */
export type NodeInspectSymbol = typeof NodeInspectSymbol

/**
 * @since 2.0.0
 * @category models
 */
export interface Inspectable {
  toString(): string
  toJSON(): unknown
  [NodeInspectSymbol](): unknown
}

/**
 * @since 2.0.0
 */
export const toJSON = (x: unknown): unknown => {
  try {
    if (
      Predicate.hasProperty(x, "toJSON") && Predicate.isFunction(x["toJSON"]) &&
      x["toJSON"].length === 0
    ) {
      return x.toJSON()
    } else if (Array.isArray(x)) {
      return x.map(toJSON)
    }
  } catch {
    return {}
  }
  return redact(x)
}

const CIRCULAR = "[Circular]"

/** @internal */
export function formatDate(date: Date): string {
  try {
    return date.toISOString()
  } catch {
    return "Invalid Date"
  }
}

function safeToString(input: any): string {
  try {
    const s = input.toString()
    return typeof s === "string" ? s : String(s)
  } catch {
    return "[toString threw]"
  }
}

/** @internal */
export function formatPropertyKey(name: PropertyKey): string {
  return Predicate.isString(name) ? JSON.stringify(name) : String(name)
}

/** @internal */
export function formatUnknown(
  input: unknown,
  options?: {
    readonly space?: number | string | undefined
    readonly ignoreToString?: boolean | undefined
  }
): string {
  const space = options?.space ?? 0
  const seen = new WeakSet<object>()
  const gap = !space ? "" : (Predicate.isNumber(space) ? " ".repeat(space) : space)
  const ind = (d: number) => gap.repeat(d)

  const wrap = (v: unknown, body: string): string => {
    const ctor = (v as any)?.constructor
    return ctor && ctor !== Object.prototype.constructor && ctor.name ? `${ctor.name}(${body})` : body
  }

  const ownKeys = (o: object): Array<PropertyKey> => {
    try {
      return Reflect.ownKeys(o)
    } catch {
      return ["[ownKeys threw]"]
    }
  }

  function go(v: unknown, d = 0): string {
    if (Array.isArray(v)) {
      if (seen.has(v)) return CIRCULAR
      seen.add(v)
      if (!gap || v.length <= 1) return `[${v.map((x) => go(x, d)).join(",")}]`
      const inner = v.map((x) => go(x, d + 1)).join(",\n" + ind(d + 1))
      return `[\n${ind(d + 1)}${inner}\n${ind(d)}]`
    }

    if (Predicate.isDate(v)) return formatDate(v)

    if (
      !options?.ignoreToString &&
      Predicate.hasProperty(v, "toString") &&
      Predicate.isFunction(v["toString"]) &&
      v["toString"] !== Object.prototype.toString &&
      v["toString"] !== Array.prototype.toString
    ) {
      const s = safeToString(v)
      if (v instanceof Error && v.cause) {
        return `${s} (cause: ${go(v.cause, d)})`
      }
      return s
    }

    if (Predicate.isString(v)) return JSON.stringify(v)

    if (
      Predicate.isNumber(v) ||
      v == null ||
      Predicate.isBoolean(v) ||
      Predicate.isSymbol(v)
    ) return String(v)

    if (Predicate.isBigInt(v)) return String(v) + "n"

    if (v instanceof Set || v instanceof Map) {
      if (seen.has(v)) return CIRCULAR
      seen.add(v)
      return `${v.constructor.name}(${go(Array.from(v), d)})`
    }

    if (Predicate.isObject(v)) {
      if (seen.has(v)) return CIRCULAR
      seen.add(v)
      const keys = ownKeys(v)
      if (!gap || keys.length <= 1) {
        const body = `{${keys.map((k) => `${formatPropertyKey(k)}:${go((v as any)[k], d)}`).join(",")}}`
        return wrap(v, body)
      }
      const body = `{\n${
        keys.map((k) => `${ind(d + 1)}${formatPropertyKey(k)}: ${go((v as any)[k], d + 1)}`).join(",\n")
      }\n${ind(d)}}`
      return wrap(v, body)
    }

    return String(v)
  }

  return go(input, 0)
}

/**
 * @since 2.0.0
 */
export const format = (x: unknown): string => JSON.stringify(x, null, 2)

/**
 * @since 2.0.0
 */
export const BaseProto: Inspectable = {
  toJSON() {
    return toJSON(this)
  },
  [NodeInspectSymbol]() {
    return this.toJSON()
  },
  toString() {
    return format(this.toJSON())
  }
}

/**
 * @since 2.0.0
 */
export abstract class Class {
  /**
   * @since 2.0.0
   */
  abstract toJSON(): unknown
  /**
   * @since 2.0.0
   */
  [NodeInspectSymbol]() {
    return this.toJSON()
  }
  /**
   * @since 2.0.0
   */
  toString() {
    return format(this.toJSON())
  }
}

/**
 * @since 2.0.0
 */
export const toStringUnknown = (u: unknown, whitespace: number | string | undefined = 2): string => {
  if (typeof u === "string") {
    return u
  }
  try {
    return typeof u === "object" ? stringifyCircular(u, whitespace) : String(u)
  } catch {
    return String(u)
  }
}

/**
 * @since 2.0.0
 */
export const stringifyCircular = (obj: unknown, whitespace?: number | string | undefined): string => {
  let cache: Array<unknown> = []
  const retVal = JSON.stringify(
    obj,
    (_key, value) =>
      typeof value === "object" && value !== null
        ? cache.includes(value)
          ? undefined // circular reference
          : cache.push(value) && (redactableState.fiberRefs !== undefined && isRedactable(value)
            ? value[symbolRedactable](redactableState.fiberRefs)
            : value)
        : value,
    whitespace
  )
  ;(cache as any) = undefined
  return retVal
}

/**
 * @since 3.10.0
 * @category redactable
 */
export interface Redactable {
  readonly [symbolRedactable]: (fiberRefs: FiberRefs.FiberRefs) => unknown
}

/**
 * @since 3.10.0
 * @category redactable
 */
export const symbolRedactable: unique symbol = Symbol.for("effect/Inspectable/Redactable")

/**
 * @since 3.10.0
 * @category redactable
 */
export const isRedactable = (u: unknown): u is Redactable =>
  typeof u === "object" && u !== null && symbolRedactable in u

const redactableState = globalValue("effect/Inspectable/redactableState", () => ({
  fiberRefs: undefined as FiberRefs.FiberRefs | undefined
}))

/**
 * @since 3.10.0
 * @category redactable
 */
export const withRedactableContext = <A>(context: FiberRefs.FiberRefs, f: () => A): A => {
  const prev = redactableState.fiberRefs
  redactableState.fiberRefs = context
  try {
    return f()
  } finally {
    redactableState.fiberRefs = prev
  }
}

/**
 * @since 3.10.0
 * @category redactable
 */
export const redact = (u: unknown): unknown => {
  if (isRedactable(u) && redactableState.fiberRefs !== undefined) {
    return u[symbolRedactable](redactableState.fiberRefs)
  }
  return u
}
