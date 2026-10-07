import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import type { Value } from '../../check/arbitrary/definition/Value.js';
import type { Random } from '../../random/generator/Random.js';
import { Stream } from '../../stream/Stream.js';
import type { GeneratorValue } from './builders/GeneratorValueBuilder.js';
/**
 * The generator arbitrary is responsible to generate instances of {@link GeneratorValue}.
 * These instances can be used to produce "random values" within the tests themselves while still
 * providing a bit of shrinking capabilities (not all).
 */
export declare class GeneratorArbitrary extends Arbitrary<GeneratorValue> {
    private readonly arbitraryCache;
    generate(mrng: Random, biasFactor: number | undefined): Value<GeneratorValue>;
    canShrinkWithoutContext(value: unknown): value is GeneratorValue;
    shrink(_value: GeneratorValue, context: unknown): Stream<Value<GeneratorValue>>;
}
