import * as Context from "../../Context.js";
import { pipe } from "../../Function.js";
import * as Layer from "../../Layer.js";
import * as Random from "../../Utils.js";
import * as core from "./core.js";
import * as stm from "./stm.js";
import * as tArray from "./tArray.js";
import * as tRef from "./tRef.js";
const TRandomSymbolKey = "effect/TRandom";
/** @internal */
export const TRandomTypeId = /*#__PURE__*/Symbol.for(TRandomSymbolKey);
const randomInteger = state => {
  const prng = new Random.PCGRandom();
  prng.setState(state);
  return [prng.integer(0), prng.getState()];
};
const randomIntegerBetween = (low, high) => {
  return state => {
    const prng = new Random.PCGRandom();
    prng.setState(state);
    return [prng.integer(high - low) + low, prng.getState()];
  };
};
const randomNumber = state => {
  const prng = new Random.PCGRandom();
  prng.setState(state);
  return [prng.number(), prng.getState()];
};
const withState = (state, f) => {
  return pipe(state, tRef.modify(f));
};
const shuffleWith = (iterable, nextIntBounded) => {
  const swap = (buffer, index1, index2) => pipe(buffer, tArray.get(index1), core.flatMap(tmp => pipe(buffer, tArray.updateSTM(index1, () => pipe(buffer, tArray.get(index2))), core.zipRight(pipe(buffer, tArray.update(index2, () => tmp))))));
  return pipe(tArray.fromIterable(iterable), core.flatMap(buffer => {
    const array = [];
    for (let i = array.length; i >= 2; i = i - 1) {
      array.push(i);
    }
    return pipe(array, stm.forEach(n => pipe(nextIntBounded(n), core.flatMap(k => swap(buffer, n - 1, k))), {
      discard: true
    }), core.zipRight(tArray.toArray(buffer)));
  }));
};
/** @internal */
export const Tag = /*#__PURE__*/Context.GenericTag("effect/TRandom");
class TRandomImpl {
  state;
  [TRandomTypeId] = TRandomTypeId;
  constructor(state) {
    this.state = state;
    this.next = withState(this.state, randomNumber);
    this.nextBoolean = core.flatMap(this.next, n => core.succeed(n > 0.5));
    this.nextInt = withState(this.state, randomInteger);
  }
  next;
  nextBoolean;
  nextInt;
  nextRange(min, max) {
    return core.flatMap(this.next, n => core.succeed((max - min) * n + min));
  }
  nextIntBetween(low, high) {
    return withState(this.state, randomIntegerBetween(low, high));
  }
  shuffle(elements) {
    return shuffleWith(elements, n => this.nextIntBetween(0, n));
  }
}
/** @internal */
export const live = /*#__PURE__*/Layer.effect(Tag, /*#__PURE__*/pipe(/*#__PURE__*/tRef.make(/*#__PURE__*/new Random.PCGRandom(Math.random() * 4294967296 >>> 0).getState()), /*#__PURE__*/core.map(seed => new TRandomImpl(seed)), core.commit));
/** @internal */
export const next = /*#__PURE__*/core.flatMap(Tag, random => random.next);
/** @internal */
export const nextBoolean = /*#__PURE__*/core.flatMap(Tag, random => random.nextBoolean);
/** @internal */
export const nextInt = /*#__PURE__*/core.flatMap(Tag, random => random.nextInt);
/** @internal */
export const nextIntBetween = (low, high) => core.flatMap(Tag, random => random.nextIntBetween(low, high));
/** @internal */
export const nextRange = (min, max) => core.flatMap(Tag, random => random.nextRange(min, max));
/** @internal */
export const shuffle = elements => core.flatMap(Tag, random => random.shuffle(elements));
//# sourceMappingURL=tRandom.js.map