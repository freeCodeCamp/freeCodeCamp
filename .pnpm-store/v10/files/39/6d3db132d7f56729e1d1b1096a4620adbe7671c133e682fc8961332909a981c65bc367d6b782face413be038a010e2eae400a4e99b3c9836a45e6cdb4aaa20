/**
 * @since 3.10.0
 */
import * as FastCheck from "./FastCheck.js";
import type * as Schema from "./Schema.js";
/**
 * @category model
 * @since 3.10.0
 */
export interface LazyArbitrary<A> {
    (fc: typeof FastCheck): FastCheck.Arbitrary<A>;
}
/**
 * @category annotations
 * @since 3.10.0
 */
export interface ArbitraryGenerationContext {
    readonly maxDepth: number;
    readonly depthIdentifier?: string;
    readonly constraints?: StringConstraints | NumberConstraints | BigIntConstraints | DateConstraints | ArrayConstraints;
}
/**
 * @category annotations
 * @since 3.10.0
 */
export type ArbitraryAnnotation<A, TypeParameters extends ReadonlyArray<any> = readonly []> = (...arbitraries: [
    ...{
        readonly [K in keyof TypeParameters]: LazyArbitrary<TypeParameters[K]>;
    },
    ctx: ArbitraryGenerationContext
]) => LazyArbitrary<A>;
/**
 * Returns a LazyArbitrary for the `A` type of the provided schema.
 *
 * @category arbitrary
 * @since 3.10.0
 */
export declare const makeLazy: <A, I, R>(schema: Schema.Schema<A, I, R>) => LazyArbitrary<A>;
/**
 * Returns a fast-check Arbitrary for the `A` type of the provided schema.
 *
 * @category arbitrary
 * @since 3.10.0
 */
export declare const make: <A, I, R>(schema: Schema.Schema<A, I, R>) => FastCheck.Arbitrary<A>;
interface StringConstraints {
    readonly _tag: "StringConstraints";
    readonly constraints: FastCheck.StringSharedConstraints;
    readonly pattern?: string;
}
interface NumberConstraints {
    readonly _tag: "NumberConstraints";
    readonly constraints: FastCheck.FloatConstraints;
    readonly isInteger: boolean;
}
interface BigIntConstraints {
    readonly _tag: "BigIntConstraints";
    readonly constraints: FastCheck.BigIntConstraints;
}
interface ArrayConstraints {
    readonly _tag: "ArrayConstraints";
    readonly constraints: FastCheck.ArrayConstraints;
}
interface DateConstraints {
    readonly _tag: "DateConstraints";
    readonly constraints: FastCheck.DateConstraints;
}
export {};
//# sourceMappingURL=Arbitrary.d.ts.map