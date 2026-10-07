"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSTM = exports.update = exports.transformSTM = exports.transform = exports.toArray = exports.someSTM = exports.some = exports.size = exports.reduceSTM = exports.reduceOptionSTM = exports.reduceOption = exports.reduce = exports.minOption = exports.maxOption = exports.make = exports.lastOption = exports.headOption = exports.get = exports.fromIterable = exports.forEach = exports.findLastSTM = exports.findLastIndexFrom = exports.findLastIndex = exports.findLast = exports.findFirstSTM = exports.findFirstIndexWhereSTM = exports.findFirstIndexWhereFromSTM = exports.findFirstIndexWhereFrom = exports.findFirstIndexWhere = exports.findFirstIndexFrom = exports.findFirstIndex = exports.findFirst = exports.everySTM = exports.every = exports.empty = exports.countSTM = exports.count = exports.contains = exports.collectFirstSTM = exports.collectFirst = exports.TArrayTypeId = exports.TArrayImpl = void 0;
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var Order = _interopRequireWildcard(require("../../Order.js"));
var core = _interopRequireWildcard(require("./core.js"));
var stm = _interopRequireWildcard(require("./stm.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TArraySymbolKey = "effect/TArray";
/** @internal */
const TArrayTypeId = exports.TArrayTypeId = /*#__PURE__*/Symbol.for(TArraySymbolKey);
const tArrayVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class TArrayImpl {
  chunk;
  [TArrayTypeId] = tArrayVariance;
  constructor(chunk) {
    this.chunk = chunk;
  }
}
/** @internal */
exports.TArrayImpl = TArrayImpl;
const collectFirst = exports.collectFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => collectFirstSTM(self, a => (0, _Function.pipe)(pf(a), Option.map(core.succeed))));
/** @internal */
const collectFirstSTM = exports.collectFirstSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => core.withSTMRuntime(runtime => {
  let index = 0;
  let result = Option.none();
  while (Option.isNone(result) && index < self.chunk.length) {
    const element = (0, _Function.pipe)(self.chunk[index], tRef.unsafeGet(runtime.journal));
    const option = pf(element);
    if (Option.isSome(option)) {
      result = option;
    }
    index = index + 1;
  }
  return (0, _Function.pipe)(result, Option.match({
    onNone: () => stm.succeedNone,
    onSome: core.map(Option.some)
  }));
}));
/** @internal */
const contains = exports.contains = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => some(self, a => Equal.equals(a)(value)));
/** @internal */
const count = exports.count = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => reduce(self, 0, (n, a) => predicate(a) ? n + 1 : n));
/** @internal */
const countSTM = exports.countSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => reduceSTM(self, 0, (n, a) => core.map(predicate(a), bool => bool ? n + 1 : n)));
/** @internal */
const empty = () => fromIterable([]);
/** @internal */
exports.empty = empty;
const every = exports.every = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => stm.negate(some(self, a => !predicate(a))));
/** @internal */
const everySTM = exports.everySTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.map(countSTM(self, predicate), count => count === self.chunk.length));
/** @internal */
const findFirst = exports.findFirst = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => collectFirst(self, a => predicate(a) ? Option.some(a) : Option.none()));
/** @internal */
const findFirstIndex = exports.findFirstIndex = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => findFirstIndexFrom(self, value, 0));
/** @internal */
const findFirstIndexFrom = exports.findFirstIndexFrom = /*#__PURE__*/(0, _Function.dual)(3, (self, value, from) => findFirstIndexWhereFrom(self, a => Equal.equals(a)(value), from));
/** @internal */
const findFirstIndexWhere = exports.findFirstIndexWhere = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => findFirstIndexWhereFrom(self, predicate, 0));
/** @internal */
const findFirstIndexWhereFrom = exports.findFirstIndexWhereFrom = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, from) => {
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
const findFirstIndexWhereSTM = exports.findFirstIndexWhereSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => findFirstIndexWhereFromSTM(self, predicate, 0));
/** @internal */
const findFirstIndexWhereFromSTM = exports.findFirstIndexWhereFromSTM = /*#__PURE__*/(0, _Function.dual)(3, (self, predicate, from) => {
  const forIndex = index => index < self.chunk.length ? (0, _Function.pipe)(tRef.get(self.chunk[index]), core.flatMap(predicate), core.flatMap(bool => bool ? core.succeed(Option.some(index)) : forIndex(index + 1))) : stm.succeedNone;
  return from < 0 ? stm.succeedNone : forIndex(from);
});
/** @internal */
const findFirstSTM = exports.findFirstSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const init = [Option.none(), 0];
  const cont = state => Option.isNone(state[0]) && state[1] < self.chunk.length - 1;
  return core.map(stm.iterate(init, {
    while: cont,
    body: state => {
      const index = state[1];
      return (0, _Function.pipe)(tRef.get(self.chunk[index]), core.flatMap(value => core.map(predicate(value), bool => [bool ? Option.some(value) : Option.none(), index + 1])));
    }
  }), state => state[0]);
});
/** @internal */
const findLast = exports.findLast = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.effect(journal => {
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
const findLastIndex = exports.findLastIndex = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => findLastIndexFrom(self, value, self.chunk.length - 1));
/** @internal */
const findLastIndexFrom = exports.findLastIndexFrom = /*#__PURE__*/(0, _Function.dual)(3, (self, value, end) => {
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
const findLastSTM = exports.findLastSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const init = [Option.none(), self.chunk.length - 1];
  const cont = state => Option.isNone(state[0]) && state[1] >= 0;
  return core.map(stm.iterate(init, {
    while: cont,
    body: state => {
      const index = state[1];
      return (0, _Function.pipe)(tRef.get(self.chunk[index]), core.flatMap(value => core.map(predicate(value), bool => [bool ? Option.some(value) : Option.none(), index - 1])));
    }
  }), state => state[0]);
});
/** @internal */
const forEach = exports.forEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduceSTM(self, void 0, (_, a) => f(a)));
/** @internal */
const fromIterable = iterable => core.map(stm.forEach(iterable, tRef.make), chunk => new TArrayImpl(chunk));
/** @internal */
exports.fromIterable = fromIterable;
const get = exports.get = /*#__PURE__*/(0, _Function.dual)(2, (self, index) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds");
  }
  return tRef.get(self.chunk[index]);
});
/** @internal */
const headOption = self => self.chunk.length === 0 ? core.succeed(Option.none()) : core.map(tRef.get(self.chunk[0]), Option.some);
/** @internal */
exports.headOption = headOption;
const lastOption = self => self.chunk.length === 0 ? stm.succeedNone : core.map(tRef.get(self.chunk[self.chunk.length - 1]), Option.some);
/** @internal */
exports.lastOption = lastOption;
const make = (...elements) => fromIterable(elements);
/** @internal */
exports.make = make;
const maxOption = exports.maxOption = /*#__PURE__*/(0, _Function.dual)(2, (self, order) => {
  const greaterThan = Order.greaterThan(order);
  return reduceOption(self, (acc, curr) => greaterThan(acc)(curr) ? curr : acc);
});
/** @internal */
const minOption = exports.minOption = /*#__PURE__*/(0, _Function.dual)(2, (self, order) => {
  const lessThan = Order.lessThan(order);
  return reduceOption(self, (acc, curr) => lessThan(acc)(curr) ? curr : acc);
});
/** @internal */
const reduce = exports.reduce = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => core.effect(journal => {
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
const reduceOption = exports.reduceOption = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.effect(journal => {
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
const reduceOptionSTM = exports.reduceOptionSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => reduceSTM(self, Option.none(), (acc, curr) => Option.isSome(acc) ? core.map(f(acc.value, curr), Option.some) : stm.succeedSome(curr)));
/** @internal */
const reduceSTM = exports.reduceSTM = /*#__PURE__*/(0, _Function.dual)(3, (self, zero, f) => core.flatMap(toArray(self), stm.reduce(zero, f)));
/** @internal */
const size = self => self.chunk.length;
/** @internal */
exports.size = size;
const some = exports.some = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.map(findFirst(self, predicate), Option.isSome));
/** @internal */
const someSTM = exports.someSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => core.map(countSTM(self, predicate), n => n > 0));
/** @internal */
const toArray = self => stm.forEach(self.chunk, tRef.get);
/** @internal */
exports.toArray = toArray;
const transform = exports.transform = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.effect(journal => {
  let index = 0;
  while (index < self.chunk.length) {
    const ref = self.chunk[index];
    tRef.unsafeSet(ref, f(tRef.unsafeGet(ref, journal)), journal);
    index = index + 1;
  }
  return void 0;
}));
/** @internal */
const transformSTM = exports.transformSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.flatMap(stm.forEach(self.chunk, ref => core.flatMap(tRef.get(ref), f)), chunk => core.effect(journal => {
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
const update = exports.update = /*#__PURE__*/(0, _Function.dual)(3, (self, index, f) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds");
  }
  return tRef.update(self.chunk[index], f);
});
/** @internal */
const updateSTM = exports.updateSTM = /*#__PURE__*/(0, _Function.dual)(3, (self, index, f) => {
  if (index < 0 || index >= self.chunk.length) {
    return core.dieMessage("Index out of bounds");
  }
  return (0, _Function.pipe)(tRef.get(self.chunk[index]), core.flatMap(f), core.flatMap(updated => tRef.set(self.chunk[index], updated)));
});
//# sourceMappingURL=tArray.js.map