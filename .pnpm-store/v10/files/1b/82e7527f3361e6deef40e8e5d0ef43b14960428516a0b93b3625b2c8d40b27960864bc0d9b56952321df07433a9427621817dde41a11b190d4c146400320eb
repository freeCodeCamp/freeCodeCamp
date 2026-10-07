"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shuffle = exports.nextRange = exports.nextIntBetween = exports.nextInt = exports.nextBoolean = exports.next = exports.live = exports.Tag = exports.TRandomTypeId = void 0;
var Context = _interopRequireWildcard(require("../../Context.js"));
var _Function = require("../../Function.js");
var Layer = _interopRequireWildcard(require("../../Layer.js"));
var Random = _interopRequireWildcard(require("../../Utils.js"));
var core = _interopRequireWildcard(require("./core.js"));
var stm = _interopRequireWildcard(require("./stm.js"));
var tArray = _interopRequireWildcard(require("./tArray.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const TRandomSymbolKey = "effect/TRandom";
/** @internal */
const TRandomTypeId = exports.TRandomTypeId = /*#__PURE__*/Symbol.for(TRandomSymbolKey);
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
  return (0, _Function.pipe)(state, tRef.modify(f));
};
const shuffleWith = (iterable, nextIntBounded) => {
  const swap = (buffer, index1, index2) => (0, _Function.pipe)(buffer, tArray.get(index1), core.flatMap(tmp => (0, _Function.pipe)(buffer, tArray.updateSTM(index1, () => (0, _Function.pipe)(buffer, tArray.get(index2))), core.zipRight((0, _Function.pipe)(buffer, tArray.update(index2, () => tmp))))));
  return (0, _Function.pipe)(tArray.fromIterable(iterable), core.flatMap(buffer => {
    const array = [];
    for (let i = array.length; i >= 2; i = i - 1) {
      array.push(i);
    }
    return (0, _Function.pipe)(array, stm.forEach(n => (0, _Function.pipe)(nextIntBounded(n), core.flatMap(k => swap(buffer, n - 1, k))), {
      discard: true
    }), core.zipRight(tArray.toArray(buffer)));
  }));
};
/** @internal */
const Tag = exports.Tag = /*#__PURE__*/Context.GenericTag("effect/TRandom");
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
const live = exports.live = /*#__PURE__*/Layer.effect(Tag, /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/tRef.make(/*#__PURE__*/new Random.PCGRandom(Math.random() * 4294967296 >>> 0).getState()), /*#__PURE__*/core.map(seed => new TRandomImpl(seed)), core.commit));
/** @internal */
const next = exports.next = /*#__PURE__*/core.flatMap(Tag, random => random.next);
/** @internal */
const nextBoolean = exports.nextBoolean = /*#__PURE__*/core.flatMap(Tag, random => random.nextBoolean);
/** @internal */
const nextInt = exports.nextInt = /*#__PURE__*/core.flatMap(Tag, random => random.nextInt);
/** @internal */
const nextIntBetween = (low, high) => core.flatMap(Tag, random => random.nextIntBetween(low, high));
/** @internal */
exports.nextIntBetween = nextIntBetween;
const nextRange = (min, max) => core.flatMap(Tag, random => random.nextRange(min, max));
/** @internal */
exports.nextRange = nextRange;
const shuffle = elements => core.flatMap(Tag, random => random.shuffle(elements));
exports.shuffle = shuffle;
//# sourceMappingURL=tRandom.js.map