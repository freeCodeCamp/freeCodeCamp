import { type Inspectable } from "./Inspectable.js";
import type { Pipeable } from "./Pipeable.js";
declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbol
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface MutableRef<out T> extends Pipeable, Inspectable {
    readonly [TypeId]: TypeId;
    current: T;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <T>(value: T) => MutableRef<T>;
/**
 * @since 2.0.0
 * @category general
 */
export declare const compareAndSet: {
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(oldValue: T, newValue: T): (self: MutableRef<T>) => boolean;
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(self: MutableRef<T>, oldValue: T, newValue: T): boolean;
};
/**
 * @since 2.0.0
 * @category numeric
 */
export declare const decrement: (self: MutableRef<number>) => MutableRef<number>;
/**
 * @since 2.0.0
 * @category numeric
 */
export declare const decrementAndGet: (self: MutableRef<number>) => number;
/**
 * @since 2.0.0
 * @category general
 */
export declare const get: <T>(self: MutableRef<T>) => T;
/**
 * @since 2.0.0
 * @category numeric
 */
export declare const getAndDecrement: (self: MutableRef<number>) => number;
/**
 * @since 2.0.0
 * @category numeric
 */
export declare const getAndIncrement: (self: MutableRef<number>) => number;
/**
 * @since 2.0.0
 * @category general
 */
export declare const getAndSet: {
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(value: T): (self: MutableRef<T>) => T;
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(self: MutableRef<T>, value: T): T;
};
/**
 * @since 2.0.0
 * @category general
 */
export declare const getAndUpdate: {
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(f: (value: T) => T): (self: MutableRef<T>) => T;
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(self: MutableRef<T>, f: (value: T) => T): T;
};
/**
 * @since 2.0.0
 * @category numeric
 */
export declare const increment: (self: MutableRef<number>) => MutableRef<number>;
/**
 * @since 2.0.0
 * @category numeric
 */
export declare const incrementAndGet: (self: MutableRef<number>) => number;
/**
 * @since 2.0.0
 * @category general
 */
export declare const set: {
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(value: T): (self: MutableRef<T>) => MutableRef<T>;
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(self: MutableRef<T>, value: T): MutableRef<T>;
};
/**
 * @since 2.0.0
 * @category general
 */
export declare const setAndGet: {
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(value: T): (self: MutableRef<T>) => T;
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(self: MutableRef<T>, value: T): T;
};
/**
 * @since 2.0.0
 * @category general
 */
export declare const update: {
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(f: (value: T) => T): (self: MutableRef<T>) => MutableRef<T>;
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(self: MutableRef<T>, f: (value: T) => T): MutableRef<T>;
};
/**
 * @since 2.0.0
 * @category general
 */
export declare const updateAndGet: {
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(f: (value: T) => T): (self: MutableRef<T>) => T;
    /**
     * @since 2.0.0
     * @category general
     */
    <T>(self: MutableRef<T>, f: (value: T) => T): T;
};
/**
 * @since 2.0.0
 * @category boolean
 */
export declare const toggle: (self: MutableRef<boolean>) => MutableRef<boolean>;
export {};
//# sourceMappingURL=MutableRef.d.ts.map