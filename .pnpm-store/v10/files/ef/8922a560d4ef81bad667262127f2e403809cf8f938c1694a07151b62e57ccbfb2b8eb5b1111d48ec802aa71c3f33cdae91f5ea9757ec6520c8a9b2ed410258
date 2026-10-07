import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Constraints to be applied on {@link record}
 * @remarks Since 0.0.12
 * @public
 */
export type RecordConstraints<T = unknown> = ({
    /**
     * List keys that should never be deleted.
     *
     * Remark:
     * You might need to use an explicit typing in case you need to declare symbols as required (not needed when required keys are simple strings).
     * With something like `{ requiredKeys: [mySymbol1, 'a'] as [typeof mySymbol1, 'a'] }` when both `mySymbol1` and `a` are required.
     *
     * Warning: Cannot be used in conjunction with withDeletedKeys.
     *
     * @defaultValue Array containing all keys of recordModel
     * @remarks Since 2.11.0
     */
    requiredKeys?: T[];
} | {
    /**
     * Allow to remove keys from the generated record.
     * Warning: Cannot be used in conjunction with requiredKeys.
     * Prefer: `requiredKeys: []` over `withDeletedKeys: true`
     *
     * @defaultValue false
     * @remarks Since 1.0.0
     * @deprecated Prefer using `requiredKeys: []` instead of `withDeletedKeys: true` as the flag will be removed in the next major
     */
    withDeletedKeys?: boolean;
}) & {
    /**
     * Do not generate records with null prototype
     * @defaultValue true
     * @remarks Since 3.13.0
     */
    noNullPrototype?: boolean;
};
/**
 * Infer the type of the Arbitrary produced by record
 * given the type of the source arbitrary and constraints to be applied
 *
 * @remarks Since 2.2.0
 * @public
 */
export type RecordValue<T, TConstraints = {}> = TConstraints extends {
    withDeletedKeys: boolean;
    requiredKeys: any[];
} ? never : TConstraints extends {
    withDeletedKeys: true;
} ? Partial<T> : TConstraints extends {
    requiredKeys: (infer TKeys)[];
} ? Partial<T> & Pick<T, TKeys & keyof T> : T;
/**
 * For records following the `recordModel` schema
 *
 * @example
 * ```typescript
 * record({ x: someArbitraryInt, y: someArbitraryInt }): Arbitrary<{x:number,y:number}>
 * // merge two integer arbitraries to produce a {x, y} record
 * ```
 *
 * @param recordModel - Schema of the record
 *
 * @remarks Since 0.0.12
 * @public
 */
declare function record<T>(recordModel: {
    [K in keyof T]: Arbitrary<T[K]>;
}): Arbitrary<RecordValue<{
    [K in keyof T]: T[K];
}>>;
/**
 * For records following the `recordModel` schema
 *
 * @example
 * ```typescript
 * record({ x: someArbitraryInt, y: someArbitraryInt }, {withDeletedKeys: true}): Arbitrary<{x?:number,y?:number}>
 * // merge two integer arbitraries to produce a {x, y}, {x}, {y} or {} record
 * ```
 *
 * @param recordModel - Schema of the record
 * @param constraints - Contraints on the generated record
 *
 * @remarks Since 0.0.12
 * @public
 */
declare function record<T, TConstraints extends RecordConstraints<keyof T>>(recordModel: {
    [K in keyof T]: Arbitrary<T[K]>;
}, constraints: TConstraints): Arbitrary<RecordValue<{
    [K in keyof T]: T[K];
}, TConstraints>>;
export { record };
