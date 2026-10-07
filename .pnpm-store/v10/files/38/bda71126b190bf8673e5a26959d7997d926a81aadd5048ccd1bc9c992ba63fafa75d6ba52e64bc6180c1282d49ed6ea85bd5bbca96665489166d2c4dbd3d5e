/**
 * @since 2.0.0
 */
import type * as FiberRefs from "./FiberRefs.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const NodeInspectSymbol: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type NodeInspectSymbol = typeof NodeInspectSymbol;
/**
 * @since 2.0.0
 * @category models
 */
export interface Inspectable {
    toString(): string;
    toJSON(): unknown;
    [NodeInspectSymbol](): unknown;
}
/**
 * @since 2.0.0
 */
export declare const toJSON: (x: unknown) => unknown;
/**
 * @since 2.0.0
 */
export declare const format: (x: unknown) => string;
/**
 * @since 2.0.0
 */
export declare const BaseProto: Inspectable;
/**
 * @since 2.0.0
 */
export declare abstract class Class {
    /**
     * @since 2.0.0
     */
    abstract toJSON(): unknown;
    /**
     * @since 2.0.0
     */
    [NodeInspectSymbol](): unknown;
    /**
     * @since 2.0.0
     */
    toString(): string;
}
/**
 * @since 2.0.0
 */
export declare const toStringUnknown: (u: unknown, whitespace?: number | string | undefined) => string;
/**
 * @since 2.0.0
 */
export declare const stringifyCircular: (obj: unknown, whitespace?: number | string | undefined) => string;
/**
 * @since 3.10.0
 * @category redactable
 */
export interface Redactable {
    readonly [symbolRedactable]: (fiberRefs: FiberRefs.FiberRefs) => unknown;
}
/**
 * @since 3.10.0
 * @category redactable
 */
export declare const symbolRedactable: unique symbol;
/**
 * @since 3.10.0
 * @category redactable
 */
export declare const isRedactable: (u: unknown) => u is Redactable;
/**
 * @since 3.10.0
 * @category redactable
 */
export declare const withRedactableContext: <A>(context: FiberRefs.FiberRefs, f: () => A) => A;
/**
 * @since 3.10.0
 * @category redactable
 */
export declare const redact: (u: unknown) => unknown;
//# sourceMappingURL=Inspectable.d.ts.map