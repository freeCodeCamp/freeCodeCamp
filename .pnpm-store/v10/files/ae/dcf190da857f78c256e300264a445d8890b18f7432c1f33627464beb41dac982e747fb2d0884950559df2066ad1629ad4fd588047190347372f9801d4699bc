import type { Arbitrary } from '../../../check/arbitrary/definition/Arbitrary.js';
export type InternalGeneratorValueFunction = <T>(arb: Arbitrary<T>) => T;
/**
 * Take an arbitrary builder and all its arguments separatly.
 * Generate a value out of it.
 *
 * @remarks Since 3.8.0
 * @public
 */
export type GeneratorValueFunction = <T, TArgs extends unknown[]>(arb: (...params: TArgs) => Arbitrary<T>, ...args: TArgs) => T;
/**
 * The values part is mostly exposed for the purpose of the tests.
 * Or if you want to have a custom error formatter for this kind of values.
 *
 * @remarks Since 3.8.0
 * @public
 */
export type GeneratorValueMethods = {
    values: () => unknown[];
};
/**
 * An instance of {@link GeneratorValue} can be leveraged within predicates themselves to produce extra random values
 * while preserving part of the shrinking capabilities on the produced values.
 *
 * It can be seen as a way to start property based testing within something looking closer from what users will
 * think about when thinking about random in tests. But contrary to raw random, it comes with many useful strengths
 * such as: ability to re-run the test (seeded), shrinking...
 *
 * @remarks Since 3.8.0
 * @public
 */
export type GeneratorValue = GeneratorValueFunction & GeneratorValueMethods;
