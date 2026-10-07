/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js";
import type * as Chunk from "./Chunk.js";
import type * as Context from "./Context.js";
import type * as Differ from "./Differ.js";
import type * as Effect from "./Effect.js";
import type { LazyArg } from "./Function.js";
import type * as HashMap from "./HashMap.js";
import type * as HashSet from "./HashSet.js";
import type * as List from "./List.js";
import type * as Logger from "./Logger.js";
import type * as LogLevel from "./LogLevel.js";
import type * as LogSpan from "./LogSpan.js";
import type * as MetricLabel from "./MetricLabel.js";
import type * as Option from "./Option.js";
import type * as Request from "./Request.js";
import type * as RuntimeFlags from "./RuntimeFlags.js";
import * as Scheduler from "./Scheduler.js";
import type * as Scope from "./Scope.js";
import type * as Supervisor from "./Supervisor.js";
import type * as Tracer from "./Tracer.js";
import type * as Types from "./Types.js";
import type * as Unify from "./Unify.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FiberRefTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FiberRefTypeId = typeof FiberRefTypeId;
/**
 * @since 2.0.0
 * @category model
 */
export interface FiberRef<in out A> extends Effect.Effect<A>, Variance<A> {
    readonly [Unify.typeSymbol]?: unknown;
    readonly [Unify.unifySymbol]?: FiberRefUnify<this>;
    readonly [Unify.ignoreSymbol]?: FiberRefUnifyIgnore;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface FiberRefUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends Effect.EffectUnify<A> {
    FiberRef?: () => Extract<A[Unify.typeSymbol], FiberRef<any>>;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface FiberRefUnifyIgnore extends Effect.EffectUnifyIgnore {
    Effect?: true;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Variance<in out A> {
    readonly [FiberRefTypeId]: {
        readonly _A: Types.Invariant<A>;
    };
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <A>(initial: A, options?: {
    readonly fork?: ((a: A) => A) | undefined;
    readonly join?: ((left: A, right: A) => A) | undefined;
}) => Effect.Effect<FiberRef<A>, never, Scope.Scope>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const makeWith: <Value>(ref: LazyArg<FiberRef<Value>>) => Effect.Effect<FiberRef<Value>, never, Scope.Scope>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const makeContext: <A>(initial: Context.Context<A>) => Effect.Effect<FiberRef<Context.Context<A>>, never, Scope.Scope>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const makeRuntimeFlags: (initial: RuntimeFlags.RuntimeFlags) => Effect.Effect<FiberRef<RuntimeFlags.RuntimeFlags>, never, Scope.Scope>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeMake: <Value>(initial: Value, options?: {
    readonly fork?: ((a: Value) => Value) | undefined;
    readonly join?: ((left: Value, right: Value) => Value) | undefined;
}) => FiberRef<Value>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeMakeHashSet: <A>(initial: HashSet.HashSet<A>) => FiberRef<HashSet.HashSet<A>>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeMakeContext: <A>(initial: Context.Context<A>) => FiberRef<Context.Context<A>>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeMakeSupervisor: (initial: Supervisor.Supervisor<any>) => FiberRef<Supervisor.Supervisor<any>>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeMakePatch: <Value, Patch>(initial: Value, options: {
    readonly differ: Differ.Differ<Value, Patch>;
    readonly fork: Patch;
    readonly join?: ((oldV: Value, newV: Value) => Value) | undefined;
}) => FiberRef<Value>;
/**
 * @since 2.0.0
 * @category getters
 */
export declare const get: <A>(self: FiberRef<A>) => Effect.Effect<A>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndSet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(value: A): (self: FiberRef<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, value: A): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndUpdate: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(f: (a: A) => A): (self: FiberRef<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, f: (a: A) => A): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getAndUpdateSome: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(pf: (a: A) => Option.Option<A>): (self: FiberRef<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const getWith: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B, E, R>(f: (a: A) => Effect.Effect<B, E, R>): (self: FiberRef<A>) => Effect.Effect<B, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B, E, R>(self: FiberRef<A>, f: (a: A) => Effect.Effect<B, E, R>): Effect.Effect<B, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const set: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(value: A): (self: FiberRef<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, value: A): Effect.Effect<void>;
};
declare const _delete: <A>(self: FiberRef<A>) => Effect.Effect<void>;
export { 
/**
 * @since 2.0.0
 * @category utils
 */
_delete as delete };
/**
 * @since 2.0.0
 * @category utils
 */
export declare const reset: <A>(self: FiberRef<A>) => Effect.Effect<void>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const modify: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B>(f: (a: A) => readonly [B, A]): (self: FiberRef<A>) => Effect.Effect<B>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, B>(self: FiberRef<A>, f: (a: A) => readonly [B, A]): Effect.Effect<B>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const modifySome: <A, B>(self: FiberRef<A>, def: B, f: (a: A) => Option.Option<readonly [B, A]>) => Effect.Effect<B>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const update: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(f: (a: A) => A): (self: FiberRef<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, f: (a: A) => A): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateSome: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(pf: (a: A) => Option.Option<A>): (self: FiberRef<A>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateAndGet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(f: (a: A) => A): (self: FiberRef<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, f: (a: A) => A): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const updateSomeAndGet: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(pf: (a: A) => Option.Option<A>): (self: FiberRef<A>) => Effect.Effect<A>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A>(self: FiberRef<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>;
};
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentConcurrency: FiberRef<number | "unbounded">;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentRequestBatchingEnabled: FiberRef<boolean>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentRequestCache: FiberRef<Request.Cache>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentRequestCacheEnabled: FiberRef<boolean>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentContext: FiberRef<Context.Context<never>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentSchedulingPriority: FiberRef<number>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentMaxOpsBeforeYield: FiberRef<number>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const unhandledErrorLogLevel: FiberRef<Option.Option<LogLevel.LogLevel>>;
/**
 * @since 3.17.0
 * @category fiberRefs
 */
export declare const versionMismatchErrorLogLevel: FiberRef<Option.Option<LogLevel.LogLevel>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentLogAnnotations: FiberRef<HashMap.HashMap<string, unknown>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentLoggers: FiberRef<HashSet.HashSet<Logger.Logger<unknown, any>>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentLogLevel: FiberRef<LogLevel.LogLevel>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentMinimumLogLevel: FiberRef<LogLevel.LogLevel>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentLogSpan: FiberRef<List.List<LogSpan.LogSpan>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentRuntimeFlags: FiberRef<RuntimeFlags.RuntimeFlags>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentScheduler: FiberRef<Scheduler.Scheduler>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentSupervisor: FiberRef<Supervisor.Supervisor<any>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentMetricLabels: FiberRef<ReadonlyArray<MetricLabel.MetricLabel>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentTracerEnabled: FiberRef<boolean>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentTracerTimingEnabled: FiberRef<boolean>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentTracerSpanAnnotations: FiberRef<HashMap.HashMap<string, unknown>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const currentTracerSpanLinks: FiberRef<Chunk.Chunk<Tracer.SpanLink>>;
/**
 * @since 2.0.0
 * @category fiberRefs
 */
export declare const interruptedCause: FiberRef<Cause.Cause<never>>;
//# sourceMappingURL=FiberRef.d.ts.map