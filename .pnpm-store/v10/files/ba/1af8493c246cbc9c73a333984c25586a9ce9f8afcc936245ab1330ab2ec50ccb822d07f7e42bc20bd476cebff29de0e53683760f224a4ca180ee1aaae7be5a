/**
 * @since 2.0.0
 */
import * as Context from "../Context.js"
import type * as Exit from "../Exit.js"
import { constFalse } from "../Function.js"
import type * as Option from "../Option.js"
import type * as Tracer from "../Tracer.js"

/** @internal */
export const TracerTypeId: Tracer.TracerTypeId = Symbol.for("effect/Tracer") as Tracer.TracerTypeId

/** @internal */
export const make = (options: Omit<Tracer.Tracer, Tracer.TracerTypeId>): Tracer.Tracer => ({
  [TracerTypeId]: TracerTypeId,
  ...options
})

/** @internal */
export const tracerTag = Context.GenericTag<Tracer.Tracer>("effect/Tracer")

/** @internal */
export const spanTag = Context.GenericTag<Tracer.ParentSpan, Tracer.AnySpan>("effect/ParentSpan")

const randomHexString = (function() {
  const characters = "abcdef0123456789"
  const charactersLength = characters.length
  return function(length: number) {
    let result = ""
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
})()

/** @internal */
export class NativeSpan implements Tracer.Span {
  readonly _tag = "Span"
  readonly spanId: string
  readonly traceId: string = "native"
  readonly sampled = true

  status: Tracer.SpanStatus
  attributes: Map<string, unknown>
  events: Array<[name: string, startTime: bigint, attributes: Record<string, unknown>]> = []
  links: Array<Tracer.SpanLink>

  constructor(
    readonly name: string,
    readonly parent: Option.Option<Tracer.AnySpan>,
    readonly context: Context.Context<never>,
    links: Iterable<Tracer.SpanLink>,
    readonly startTime: bigint,
    readonly kind: Tracer.SpanKind
  ) {
    this.status = {
      _tag: "Started",
      startTime
    }
    this.attributes = new Map()
    this.traceId = parent._tag === "Some" ? parent.value.traceId : randomHexString(32)
    this.spanId = randomHexString(16)
    this.links = Array.from(links)
  }

  end(endTime: bigint, exit: Exit.Exit<unknown, unknown>): void {
    this.status = {
      _tag: "Ended",
      endTime,
      exit,
      startTime: this.status.startTime
    }
  }

  attribute(key: string, value: unknown): void {
    this.attributes.set(key, value)
  }

  event(name: string, startTime: bigint, attributes?: Record<string, unknown>): void {
    this.events.push([name, startTime, attributes ?? {}])
  }

  addLinks(links: ReadonlyArray<Tracer.SpanLink>): void {
    // eslint-disable-next-line no-restricted-syntax
    this.links.push(...links)
  }
}

/** @internal */
export const nativeTracer: Tracer.Tracer = make({
  span: (name, parent, context, links, startTime, kind) =>
    new NativeSpan(
      name,
      parent,
      context,
      links,
      startTime,
      kind
    ),
  context: (f) => f()
})

/** @internal */
export const externalSpan = (options: {
  readonly spanId: string
  readonly traceId: string
  readonly sampled?: boolean | undefined
  readonly context?: Context.Context<never> | undefined
}): Tracer.ExternalSpan => ({
  _tag: "ExternalSpan",
  spanId: options.spanId,
  traceId: options.traceId,
  sampled: options.sampled ?? true,
  context: options.context ?? Context.empty()
})

/** @internal */
export const addSpanStackTrace = (options: Tracer.SpanOptions | undefined): Tracer.SpanOptions => {
  if (options?.captureStackTrace === false) {
    return options
  } else if (options?.captureStackTrace !== undefined && typeof options.captureStackTrace !== "boolean") {
    return options
  }
  const limit = Error.stackTraceLimit
  Error.stackTraceLimit = 3
  const traceError = new Error()
  Error.stackTraceLimit = limit
  let cache: false | string = false
  return {
    ...options,
    captureStackTrace: () => {
      if (cache !== false) {
        return cache
      }
      if (traceError.stack !== undefined) {
        const stack = traceError.stack.split("\n")
        if (stack[3] !== undefined) {
          cache = stack[3].trim()
          return cache
        }
      }
    }
  }
}

/** @internal */
export const DisablePropagation = Context.Reference<Tracer.DisablePropagation>()("effect/Tracer/DisablePropagation", {
  defaultValue: constFalse
})
