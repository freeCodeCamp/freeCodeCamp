/**
 * @since 2.0.0
 * @category symbols
 */
export declare const symbol: unique symbol;
/**
 * @since 2.0.0
 * @category models
 */
export interface Hash {
    [symbol](): number;
}
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const hash: <A>(self: A) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const random: <A extends object>(self: A) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const combine: (b: number) => (self: number) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const optimize: (n: number) => number;
/**
 * @since 2.0.0
 * @category guards
 */
export declare const isHash: (u: unknown) => u is Hash;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const number: (n: number) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const string: (str: string) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const structureKeys: <A extends object>(o: A, keys: ReadonlyArray<keyof A>) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const structure: <A extends object>(o: A) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const array: <A>(arr: ReadonlyArray<A>) => number;
/**
 * @since 2.0.0
 * @category hashing
 */
export declare const cached: {
    /**
     * @since 2.0.0
     * @category hashing
     */
    (self: object): (hash: number) => number;
    /**
     * @since 2.0.0
     * @category hashing
     */
    (self: object, hash: number): number;
};
//# sourceMappingURL=Hash.d.ts.map