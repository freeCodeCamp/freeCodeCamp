import * as Equal from "../../Equal.js";
import { dual, pipe } from "../../Function.js";
import * as Option from "../../Option.js";
import * as Order from "../../Order.js";
import * as core from "./core.js";
import * as stm from "./stm.js";
import * as tRef from "./tRef.js";
/** @internal */
const TArraySymbolKey = "effect/TArray";
/** @internal */
export const TArrayTypeId = /*#__PURE__*/Symbol.for(TArraySymbolKey);
const tArrayVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
export class TArrayImpl {
  chunk;
  [TArrayTypeId] = tArrayVariance;
  constructor(chunk) {
    this.chunk = chunk;
  }
}
/** @internal */
export const collectFirst = /*#__PURE__*/dual(2, (self, pf) => collectFirstSTM(self, a => pipe(pf(a), Option.map(core.succeed))));
/** @internal */
export const collectFirstSTM = /*#__PURE__*/dual(2, (self, pf) => core.withSTMRuntime(runtime => {
  let index = 0;
  let result = Option.none();
  while (Option.isNone(result) && index < self.chunk.length) {
    const element = pipe(self.chunk[index], tRef.unsafeGet(runtime.journal));
    const option = pf(element);
    if (Option.isSome(option)) {
      result = option;
    }
    index = index + 1;
  }
  return pipe(result, Option.match({
    onNone: () => stm.succeedNone,
    onSome: core.map(Option.some)
  }));
}));
/** @internal */
export const contains = /*#__PURE__*/dual(2, (self, value) => some(self, a => Equal.equals(a)(value)));
/** @internal */
export const count = /*#__PURE__*/dual(2, (self, predicate) => reduce(self, 0, (n, a) => predicate(a) ? n + 1 : n));
/** @internal */
export const countSTM = /*#__PURE__*/dual(2, (self, predicate) => reduceSTM(self, 0, (n, a) => core.map(predicate(a), bool => bool ? n + 1 : n)));
/** @internal */
export const empty = () => fromIterable([]);
/** @internal */
export const every = /*#__PURE__*/dual(2, (self, predicate) => stm.negate(some(self, a => !predicate(a))));
/** @internal */
export const everySTM = /*#__PURE__*/dual(2, (self, predicate) => core.map(countSTM(self, predicate), count => count === self.chunk.length));
/** @internal */
export const findFirst = /*#__PURE__*/dual(2, (self, predicate) => collectFirst(self, a => predicate(a) ? Option.some(a) : Option.none()));
/** @internal */
export const findFirstIndex = /*#__PURE__*/dual(2, (self, value) => findFirstIndexFrom(self, value, 0));
/** @internal */
export const findFirstIndexFrom = /*#__PURE__*/dual(3, (self, value, from) => findFirstIndexWhereFrom(self, a => Equal.equals(a)(value), from));
/** @internal */
export const findFirstIndexWhere = /*#__PURE__*/dual(2, (self, predicate) => findFirstIndexWhereFrom(self, predicate, 0));
/** @internal */
export const findFirstIndexWhereFrom = /*#__PURE__*/dual(3, (self, predicate, from) => {
  if (from < 0) {
    return stm.succeedNone;
  }
  return core.effect(journal => {
    let index = from;
    let found = false;
    while (!found && index < self.chunk.length) {
      const element = tRef.unsafeGet(self.chunk[index], journal);
      found = predicate(element);
      index = index + 1;
    }
    if (found) {
      return Option.some(index - 1);
    }
    return Option.none();
  });
});
/** @internal */
export const findFirstIndexWhereSTM = /*#__PURE__*/dual(2, (self, predicate) => findFirstIndexWhereFromSTM(self, predicate, 0));
/** @internal */
export const findFirstIndexWhereFromSTM = /*#__PURE__*/dual(3, (self, predicate, from) => {
  const forIndex = index => index < self.chunk.length ? pipe(tRef.get(self.chunk[index]), core.flatMap(predicate), core.flatMap(bool => bool ? core.succeed(Option.some(index)) : forIndex(index + 1))) : stm.succeedNone;
  return from < 0 ? stm.succeedNone : forIndex(from);
});
/** @internal */
export const findFirstSTM = /*#__PURE__*/dual(2, (self, predicate) => {
  const init = [Option.none(), 0];
  const cont = state => Option.isNone(state[0]) && state[1] < self.chunk.length - 1;
  return core.map(stm.iterate(init, {
    while: cont,
    body: state => {
      const index = state[1];
      return pipe(tRef.get(self.chunk[index]), core.flatMap(value => core.map(predicate(value), bool => [bool ? Option.some(value) : Option.none(), index + 1])));
    }
  }), state => state[0]);
});
/** @internal */
export const findLast = /*#__PURE__*/dual(2, (self, predicate) => core.effect(journal => {
  let index = self.chunk.length - 1;
  let result = Option.none();
  while (Option.isNone(result) && index >= 0) {
    const element = tRef.unsafeGet(self.chunk[index], journal);
    if (predicate(element)) {
      result = Option.some(element);
    }
    index = index - 1;
  }
  return result;
}));
/** @internal */
export const findLastIndex = /*#__PURE__*/dual(2, (self, value) => findLastIndexFrom(self, value, self.chunk.length - 1));
/** @internal */
export const findLastIndexFrom = /*#__PURE__*/dual(3, (self, value, end) => {
  if (end >= self.chunk.length) {
    return stm.succeedNone;
  }
  return core.effect(journal => {
    let index = end;
    let found = false;
    while (!found && index >= 0) {
      const element = tRef.unsafeGet(self.chunk[index], journal);
      found = Equal.equals(element)(value);
      index = index - 1;
    }
    if (found) {
      return Option.some(index + 1);
    }
    return Option.none();
  });
});
/** @internal */
export const findLastSTM = /*#__PURE__*/dual(2, (self, predicate) => {
  const init = [Option.none(), self.chunk.length - 1];
  const cont = state => Option.isNone(state[0]) && state[1] >= 0;
  return core.map(stm.iterate(init, {
    while: cont,
    body: state => {
      const index = state[1];
      return pipe(tRef.get(self.chunk[index]), core.flatMap(value => core.map(predicate(value), bool => [bool ? Option.some(value) : Option.none(), index - 1])));
    }
  }), state => state[0]);
});
/** @internal */
export const forEach = /*#__PURE__*/dual(2, (self, f) => reduceSTM(self, void 0, (_, a) => f(a)));
/** @internal */
export const fromIterable = iterable => core.map(stm.forEach(iterable, tRef.make), chunk => new TArrayImpl(chunk));
/** @internal */
export const get = /*#__PURE__*/dual(2, (self, index) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds");
  }
  return tRef.get(self.chunk[index]);
});
/** @internal */
export const headOption = self => self.chunk.length === 0 ? core.succeed(Option.none()) : core.map(tRef.get(self.chunk[0]), Option.some);
/** @internal */
export const lastOption = self => self.chunk.length === 0 ? stm.succeedNone : core.map(tRef.get(self.chunk[self.chunk.length - 1]), Option.some);
/** @internal */
export const make = (...elements) => fromIterable(elements);
/** @internal */
export const maxOption = /*#__PURE__*/dual(2, (self, order) => {
  const greaterThan = Order.greaterThan(order);
  return reduceOption(self, (acc, curr) => greaterThan(acc)(curr) ? curr : acc);
});
/** @internal */
export const minOption = /*#__PURE__*/dual(2, (self, order) => {
  const lessThan = Order.lessThan(order);
  return reduceOption(self, (acc, curr) => lessThan(acc)(curr) ? curr : acc);
});
/** @internal */
export const reduce = /*#__PURE__*/dual(3, (self, zero, f) => core.effect(journal => {
  let index = 0;
  let result = zero;
  while (index < self.chunk.length) {
    const element = tRef.unsafeGet(self.chunk[index], journal);
    result = f(result, element);
    index = index + 1;
  }
  return result;
}));
/** @internal */
export const reduceOption = /*#__PURE__*/dual(2, (self, f) => core.effect(journal => {
  let index = 0;
  let result = undefined;
  while (index < self.chunk.length) {
    const element = tRef.unsafeGet(self.chunk[index], journal);
    result = result === undefined ? element : f(result, element);
    index = index + 1;
  }
  return Option.fromNullable(result);
}));
/** @internal */
export const reduceOptionSTM = /*#__PURE__*/dual(2, (self, f) => reduceSTM(self, Option.none(), (acc, curr) => Option.isSome(acc) ? core.map(f(acc.value, curr), Option.some) : stm.succeedSome(curr)));
/** @internal */
export const reduceSTM = /*#__PURE__*/dual(3, (self, zero, f) => core.flatMap(toArray(self), stm.reduce(zero, f)));
/** @internal */
export const size = self => self.chunk.length;
/** @internal */
export const some = /*#__PURE__*/dual(2, (self, predicate) => core.map(findFirst(self, predicate), Option.isSome));
/** @internal */
export const someSTM = /*#__PURE__*/dual(2, (self, predicate) => core.map(countSTM(self, predicate), n => n > 0));
/** @internal */
export const toArray = self => stm.forEach(self.chunk, tRef.get);
/** @internal */
export const transform = /*#__PURE__*/dual(2, (self, f) => core.effect(journal => {
  let index = 0;
  while (index < self.chunk.length) {
    const ref = self.chunk[index];
    tRef.unsafeSet(ref, f(tRef.unsafeGet(ref, journal)), journal);
    index = index + 1;
  }
  return void 0;
}));
/** @internal */
export const transformSTM = /*#__PURE__*/dual(2, (self, f) => core.flatMap(stm.forEach(self.chunk, ref => core.flatMap(tRef.get(ref), f)), chunk => core.effect(journal => {
  const iterator = chunk[Symbol.iterator]();
  let index = 0;
  let next;
  while ((next = iterator.next()) && !next.done) {
    tRef.unsafeSet(self.chunk[index], next.value, journal);
    index = index + 1;
  }
  return void 0;
})));
/** @internal */
export const update = /*#__PURE__*/dual(3, (self, index, f) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds");
  }
  return tRef.update(self.chunk[index], f);
});
/** @internal */
export const updateSTM = /*#__PURE__*/dual(3, (self, index, f) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds");
  }
  return pipe(tRef.get(self.chunk[index]), core.flatMap(f), core.flatMap(updated => tRef.set(self.chunk[index], updated)));
});
//# sourceMappingURL=tArray.js.map