/**
 * @since 2.0.0
 */
import type * as Context from "./Context.js";
import type { Effect } from "./Effect.js";
import type * as Layer from "./Layer.js";
import type { Scope } from "./Scope.js";
/**
 * @since 2.0.0
 * @category type ids
 */
export declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category type ids
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category model
 */
export interface Console {
    readonly [TypeId]: TypeId;
    assert(condition: boolean, ...args: ReadonlyArray<any>): Effect<void>;
    readonly clear: Effect<void>;
    count(label?: string): Effect<void>;
    countReset(label?: string): Effect<void>;
    debug(...args: ReadonlyArray<any>): Effect<void>;
    dir(item: any, options?: any): Effect<void>;
    dirxml(...args: ReadonlyArray<any>): Effect<void>;
    error(...args: ReadonlyArray<any>): Effect<void>;
    group(options?: {
        readonly label?: string | undefined;
        readonly collapsed?: boolean | undefined;
    }): Effect<void>;
    readonly groupEnd: Effect<void>;
    info(...args: ReadonlyArray<any>): Effect<void>;
    log(...args: ReadonlyArray<any>): Effect<void>;
    table(tabularData: any, properties?: ReadonlyArray<string>): Effect<void>;
    time(label?: string): Effect<void>;
    timeEnd(label?: string): Effect<void>;
    timeLog(label?: string, ...args: ReadonlyArray<any>): Effect<void>;
    trace(...args: ReadonlyArray<any>): Effect<void>;
    warn(...args: ReadonlyArray<any>): Effect<void>;
    readonly unsafe: UnsafeConsole;
}
/**
 * @since 2.0.0
 * @category model
 */
export interface UnsafeConsole {
    assert(condition: boolean, ...args: ReadonlyArray<any>): void;
    clear(): void;
    count(label?: string): void;
    countReset(label?: string): void;
    debug(...args: ReadonlyArray<any>): void;
    dir(item: any, options?: any): void;
    dirxml(...args: ReadonlyArray<any>): void;
    error(...args: ReadonlyArray<any>): void;
    group(...args: ReadonlyArray<any>): void;
    groupCollapsed(...args: ReadonlyArray<any>): void;
    groupEnd(): void;
    info(...args: ReadonlyArray<any>): void;
    log(...args: ReadonlyArray<any>): void;
    table(tabularData: any, properties?: ReadonlyArray<string>): void;
    time(label?: string): void;
    timeEnd(label?: string): void;
    timeLog(label?: string, ...args: ReadonlyArray<any>): void;
    trace(...args: ReadonlyArray<any>): void;
    warn(...args: ReadonlyArray<any>): void;
}
/**
 * @since 2.0.0
 * @category context
 */
export declare const Console: Context.Tag<Console, Console>;
/**
 * @since 2.0.0
 * @category default services
 */
export declare const withConsole: {
    /**
     * @since 2.0.0
     * @category default services
     */
    <C extends Console>(console: C): <A, E, R>(effect: Effect<A, E, R>) => Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category default services
     */
    <A, E, R, C extends Console>(effect: Effect<A, E, R>, console: C): Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category default services
 */
export declare const setConsole: <A extends Console>(console: A) => Layer.Layer<never>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const consoleWith: <A, E, R>(f: (console: Console) => Effect<A, E, R>) => Effect<A, E, R>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const assert: (condition: boolean, ...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const clear: Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const count: (label?: string) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const countReset: (label?: string) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const debug: (...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const dir: (item: any, options?: any) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const dirxml: (...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const error: (...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const group: (options?: {
    label?: string | undefined;
    collapsed?: boolean | undefined;
} | undefined) => Effect<void, never, Scope>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const info: (...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const log: (...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const table: (tabularData: any, properties?: ReadonlyArray<string>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const time: (label?: string | undefined) => Effect<void, never, Scope>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const timeLog: (label?: string, ...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const trace: (...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const warn: (...args: ReadonlyArray<any>) => Effect<void>;
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const withGroup: {
    /**
     * @since 2.0.0
     * @category accessor
     */
    (options?: {
        readonly label?: string | undefined;
        readonly collapsed?: boolean | undefined;
    }): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category accessor
     */
    <A, E, R>(self: Effect<A, E, R>, options?: {
        readonly label?: string | undefined;
        readonly collapsed?: boolean | undefined;
    }): Effect<A, E, R>;
};
/**
 * @since 2.0.0
 * @category accessor
 */
export declare const withTime: {
    /**
     * @since 2.0.0
     * @category accessor
     */
    (label?: string): <A, E, R>(self: Effect<A, E, R>) => Effect<A, E, R>;
    /**
     * @since 2.0.0
     * @category accessor
     */
    <A, E, R>(self: Effect<A, E, R>, label?: string): Effect<A, E, R>;
};
//# sourceMappingURL=Console.d.ts.map