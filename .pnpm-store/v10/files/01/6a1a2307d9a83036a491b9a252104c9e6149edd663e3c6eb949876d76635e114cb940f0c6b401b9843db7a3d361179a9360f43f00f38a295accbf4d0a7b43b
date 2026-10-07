import * as Chunk from "../Chunk.js";
import * as Context from "../Context.js";
import { pipe } from "../Function.js";
import * as Hash from "../Hash.js";
import * as PCGRandom from "../Utils.js";
import * as core from "./core.js";
/** @internal */
const RandomSymbolKey = "effect/Random";
/** @internal */
export const RandomTypeId = /*#__PURE__*/Symbol.for(RandomSymbolKey);
/** @internal */
export const randomTag = /*#__PURE__*/Context.GenericTag("effect/Random");
/** @internal */
class RandomImpl {
  seed;
  [RandomTypeId] = RandomTypeId;
  PRNG;
  constructor(seed) {
    this.seed = seed;
    this.PRNG = new PCGRandom.PCGRandom(seed);
  }
  get next() {
    return core.sync(() => this.PRNG.number());
  }
  get nextBoolean() {
    return core.map(this.next, n => n > 0.5);
  }
  get nextInt() {
    return core.sync(() => this.PRNG.integer(Number.MAX_SAFE_INTEGER));
  }
  nextRange(min, max) {
    return core.map(this.next, n => (max - min) * n + min);
  }
  nextIntBetween(min, max) {
    return core.sync(() => this.PRNG.integer(max - min) + min);
  }
  shuffle(elements) {
    return shuffleWith(elements, n => this.nextIntBetween(0, n));
  }
}
const shuffleWith = (elements, nextIntBounded) => {
  return core.suspend(() => pipe(core.sync(() => Array.from(elements)), core.flatMap(buffer => {
    const numbers = [];
    for (let i = buffer.length; i >= 2; i = i - 1) {
      numbers.push(i);
    }
    return pipe(numbers, core.forEachSequentialDiscard(n => pipe(nextIntBounded(n), core.map(k => swap(buffer, n - 1, k)))), core.as(Chunk.fromIterable(buffer)));
  })));
};
const swap = (buffer, index1, index2) => {
  const tmp = buffer[index1];
  buffer[index1] = buffer[index2];
  buffer[index2] = tmp;
  return buffer;
};
export const make = seed => new RandomImpl(Hash.hash(seed));
/** @internal */
class FixedRandomImpl {
  values;
  [RandomTypeId] = RandomTypeId;
  index = 0;
  constructor(values) {
    this.values = values;
    if (values.length === 0) {
      throw new Error("Requires at least one value");
    }
  }
  getNextValue() {
    const value = this.values[this.index];
    this.index = (this.index + 1) % this.values.length;
    return value;
  }
  get next() {
    return core.sync(() => {
      const value = this.getNextValue();
      if (typeof value === "number") {
        return Math.max(0, Math.min(1, value));
      }
      return Hash.hash(value) / 2147483647;
    });
  }
  get nextBoolean() {
    return core.sync(() => {
      const value = this.getNextValue();
      if (typeof value === "boolean") {
        return value;
      }
      return Hash.hash(value) % 2 === 0;
    });
  }
  get nextInt() {
    return core.sync(() => {
      const value = this.getNextValue();
      if (typeof value === "number" && Number.isFinite(value)) {
        return Math.round(value);
      }
      return Math.abs(Hash.hash(value));
    });
  }
  nextRange(min, max) {
    return core.map(this.next, n => (max - min) * n + min);
  }
  nextIntBetween(min, max) {
    return core.sync(() => {
      const value = this.getNextValue();
      if (typeof value === "number" && Number.isFinite(value)) {
        return Math.max(min, Math.min(max - 1, Math.round(value)));
      }
      const hash = Math.abs(Hash.hash(value));
      return min + hash % (max - min);
    });
  }
  shuffle(elements) {
    return shuffleWith(elements, n => this.nextIntBetween(0, n));
  }
}
/** @internal */
export const fixed = values => new FixedRandomImpl(values);
//# sourceMappingURL=random.js.map