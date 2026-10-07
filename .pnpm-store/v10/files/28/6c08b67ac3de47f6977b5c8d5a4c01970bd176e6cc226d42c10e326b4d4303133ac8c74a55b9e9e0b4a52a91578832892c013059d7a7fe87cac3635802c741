import { skipN } from 'pure-rand';
import { Random } from '../../random/generator/Random.js';
import { Value } from '../arbitrary/definition/Value.js';
import { safeMap } from '../../utils/globals.js';
function tossNext(generator, rng, index) {
    rng.unsafeJump();
    return generator.generate(new Random(rng), index);
}
export function* toss(generator, seed, random, examples) {
    for (let idx = 0; idx !== examples.length; ++idx) {
        yield new Value(examples[idx], undefined);
    }
    for (let idx = 0, rng = random(seed);; ++idx) {
        yield tossNext(generator, rng, idx);
    }
}
function lazyGenerate(generator, rng, idx) {
    return () => generator.generate(new Random(rng), idx);
}
export function* lazyToss(generator, seed, random, examples) {
    yield* safeMap(examples, (e) => () => new Value(e, undefined));
    let idx = 0;
    let rng = random(seed);
    for (;;) {
        rng = rng.jump ? rng.jump() : skipN(rng, 42);
        yield lazyGenerate(generator, rng, idx++);
    }
}
