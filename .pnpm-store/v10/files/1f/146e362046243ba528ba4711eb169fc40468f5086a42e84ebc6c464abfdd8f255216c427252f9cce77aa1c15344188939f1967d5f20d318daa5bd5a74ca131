import type { Arbitrary } from '../check/arbitrary/definition/Arbitrary.js';
/**
 * Type of the value produced by {@link letrec}
 * @remarks Since 3.0.0
 * @public
 */
export type LetrecValue<T> = {
    [K in keyof T]: Arbitrary<T[K]>;
};
/**
 * Strongly typed type for the `tie` function passed by {@link letrec} to the `builder` function we pass to it.
 * You may want also want to use its loosely typed version {@link LetrecLooselyTypedTie}.
 *
 * @remarks Since 3.0.0
 * @public
 */
export interface LetrecTypedTie<T> {
    <K extends keyof T>(key: K): Arbitrary<T[K]>;
    (key: string): Arbitrary<unknown>;
}
/**
 * Strongly typed type for the `builder` function passed to {@link letrec}.
 * You may want also want to use its loosely typed version {@link LetrecLooselyTypedBuilder}.
 *
 * @remarks Since 3.0.0
 * @public
 */
export type LetrecTypedBuilder<T> = (tie: LetrecTypedTie<T>) => LetrecValue<T>;
/**
 * Loosely typed type for the `tie` function passed by {@link letrec} to the `builder` function we pass to it.
 * You may want also want to use its strongly typed version {@link LetrecTypedTie}.
 *
 * @remarks Since 3.0.0
 * @public
 */
export type LetrecLooselyTypedTie = (key: string) => Arbitrary<unknown>;
/**
 * Loosely typed type for the `builder` function passed to {@link letrec}.
 * You may want also want to use its strongly typed version {@link LetrecTypedBuilder}.
 *
 * @remarks Since 3.0.0
 * @public
 */
export type LetrecLooselyTypedBuilder<T> = (tie: LetrecLooselyTypedTie) => LetrecValue<T>;
/**
 * For mutually recursive types
 *
 * @example
 * ```typescript
 * type Leaf = number;
 * type Node = [Tree, Tree];
 * type Tree = Node | Leaf;
 * const { tree } = fc.letrec<{ tree: Tree, node: Node, leaf: Leaf }>(tie => ({
 *   tree: fc.oneof({depthSize: 'small'}, tie('leaf'), tie('node')),
 *   node: fc.tuple(tie('tree'), tie('tree')),
 *   leaf: fc.nat()
 * }));
 * // tree is 50% of node, 50% of leaf
 * // the ratio goes in favor of leaves as we go deeper in the tree (thanks to depthSize)
 * ```
 *
 * @param builder - Arbitraries builder based on themselves (through `tie`)
 *
 * @remarks Since 1.16.0
 * @public
 */
export declare function letrec<T>(builder: T extends Record<string, unknown> ? LetrecTypedBuilder<T> : never): LetrecValue<T>;
/**
 * For mutually recursive types
 *
 * @example
 * ```typescript
 * const { tree } = fc.letrec(tie => ({
 *   tree: fc.oneof({depthSize: 'small'}, tie('leaf'), tie('node')),
 *   node: fc.tuple(tie('tree'), tie('tree')),
 *   leaf: fc.nat()
 * }));
 * // tree is 50% of node, 50% of leaf
 * // the ratio goes in favor of leaves as we go deeper in the tree (thanks to depthSize)
 * ```
 *
 * @param builder - Arbitraries builder based on themselves (through `tie`)
 *
 * @remarks Since 1.16.0
 * @public
 */
export declare function letrec<T>(builder: LetrecLooselyTypedBuilder<T>): LetrecValue<T>;
