/**
 * @since 2.0.0
 */
import type * as Context from "./Context.js"
import type * as Effect from "./Effect.js"
import type * as Exit from "./Exit.js"
import type * as Fiber from "./Fiber.js"
import type { LazyArg } from "./Function.js"
import * as defaultServices from "./internal/defaultServices.js"
import * as internal from "./internal/tracer.js"
import type * as Option from "./Option.js"

/**
 * @since 2.0.0
 */
export const TracerTypeId: unique symbol = internal.TracerTypeId

/**
 * @since 2.0.0
 */
export type TracerTypeId = typeof TracerTypeId

/**
 * @since 2.0.0
 */
export interface Tracer {
  readonly [TracerTypeId]: TracerTypeId
  span(
    name: string,
    parent: Option.Option<AnySpan>,
    context: Context.Context<never>,
    links: ReadonlyArray<SpanLink>,
    startTime: bigint,
    kind: SpanKind,
    options?: SpanOptions
  ): Span
  context<X>(f: () => X, fiber: Fiber.RuntimeFiber<any, any>): X
}

/**
 * @since 2.0.0
 * @category models
 */
export type SpanStatus = {
  _tag: "Started"
  startTime: bigint
} | {
  _tag: "Ended"
  startTime: bigint
  endTime: bigint
  exit: Exit.Exit<unknown, unknown>
}

/**
 * @since 2.0.0
 * @category models
 */
export type AnySpan = Span | ExternalSpan

/**
 * @since 2.0.0
 * @category tags
 */
export interface ParentSpan {
  readonly _: unique symbol
}

/**
 * @since 2.0.0
 * @category tags
 */
export const ParentSpan: Context.Tag<ParentSpan, AnySpan> = internal.spanTag

/**
 * @since 2.0.0
 * @category models
 */
export interface ExternalSpan {
  readonly _tag: "ExternalSpan"
  readonly spanId: string
  readonly traceId: string
  readonly sampled: boolean
  readonly context: Context.Context<never>
}

/**
 * @since 3.1.0
 * @category models
 */
export interface SpanOptions {
  readonly attributes?: Record<string, unknown> | undefined
  readonly links?: ReadonlyArray<SpanLink> | undefined
  readonly parent?: AnySpan | undefined
  readonly root?: boolean | undefined
  readonly context?: Context.Context<never> | undefined
  readonly kind?: SpanKind | undefined
  readonly captureStackTrace?: boolean | LazyArg<string | undefined> | undefined
}

/**
 * @since 3.1.0
 * @category models
 */
export type SpanKind = "internal" | "server" | "client" | "producer" | "consumer"

/**
 * @since 2.0.0
 * @category models
 */
export interface Span {
  readonly _tag: "Span"
  readonly name: string
  readonly spanId: string
  readonly traceId: string
  readonly parent: Option.Option<AnySpan>
  readonly context: Context.Context<never>
  readonly status: SpanStatus
  readonly attributes: ReadonlyMap<string, unknown>
  readonly links: ReadonlyArray<SpanLink>
  readonly sampled: boolean
  readonly kind: SpanKind
  end(endTime: bigint, exit: Exit.Exit<unknown, unknown>): void
  attribute(key: string, value: unknown): void
  event(name: string, startTime: bigint, attributes?: Record<string, unknown>): void
  addLinks(links: ReadonlyArray<SpanLink>): void
}

/**
 * @since 2.0.0
 * @category models
 */
export interface SpanLink {
  readonly _tag: "SpanLink"
  readonly span: AnySpan
  readonly attributes: Readonly<Record<string, unknown>>
}

/**
 * @since 2.0.0
 * @category tags
 */
export const Tracer: Context.Tag<Tracer, Tracer> = internal.tracerTag

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: (options: Omit<Tracer, typeof TracerTypeId>) => Tracer = internal.make

/**
 * @since 2.0.0
 * @category constructors
 */
export const externalSpan: (
  options: {
    readonly spanId: string
    readonly traceId: string
    readonly sampled?: boolean | undefined
    readonly context?: Context.Context<never> | undefined
  }
) => ExternalSpan = internal.externalSpan

/**
 * @since 2.0.0
 * @category constructors
 */
export const tracerWith: <A, E, R>(f: (tracer: Tracer) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R> =
  defaultServices.tracerWith

/**
 * @since 3.12.0
 * @category annotations
 */
export interface DisablePropagation {
  readonly _: unique symbol
}

/**
 * @since 3.12.0
 * @category annotations
 */
export const DisablePropagation: Context.Reference<DisablePropagation, boolean> = internal.DisablePropagation
