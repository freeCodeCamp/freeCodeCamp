"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toss = toss;
exports.lazyToss = lazyToss;
const pure_rand_1 = require("pure-rand");
const Random_1 = require("../../random/generator/Random");
const Value_1 = require("../arbitrary/definition/Value");
const globals_1 = require("../../utils/globals");
function tossNext(generator, rng, index) {
    rng.unsafeJump();
    return generator.generate(new Random_1.Random(rng), index);
}
function* toss(generator, seed, random, examples) {
    for (let idx = 0; idx !== examples.length; ++idx) {
        yield new Value_1.Value(examples[idx], undefined);
    }
    for (let idx = 0, rng = random(seed);; ++idx) {
        yield tossNext(generator, rng, idx);
    }
}
function lazyGenerate(generator, rng, idx) {
    return () => generator.generate(new Random_1.Random(rng), idx);
}
function* lazyToss(generator, seed, random, examples) {
    yield* (0, globals_1.safeMap)(examples, (e) => () => new Value_1.Value(e, undefined));
    let idx = 0;
    let rng = random(seed);
    for (;;) {
        rng = rng.jump ? rng.jump() : (0, pure_rand_1.skipN)(rng, 42);
        yield lazyGenerate(generator, rng, idx++);
    }
}
