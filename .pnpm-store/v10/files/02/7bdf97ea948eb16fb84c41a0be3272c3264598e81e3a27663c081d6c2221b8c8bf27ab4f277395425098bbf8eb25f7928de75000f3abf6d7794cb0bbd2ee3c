"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeTrack = exports.track = exports.supervisorVariance = exports.none = exports.isZip = exports.fromEffect = exports.fibersIn = exports.Zip = exports.Track = exports.SupervisorTypeId = exports.ProxySupervisor = exports.Const = void 0;
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var MutableRef = _interopRequireWildcard(require("../MutableRef.js"));
var _Predicate = require("../Predicate.js");
var SortedSet = _interopRequireWildcard(require("../SortedSet.js"));
var core = _interopRequireWildcard(require("./core.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const SupervisorSymbolKey = "effect/Supervisor";
/** @internal */
const SupervisorTypeId = exports.SupervisorTypeId = /*#__PURE__*/Symbol.for(SupervisorSymbolKey);
/** @internal */
const supervisorVariance = exports.supervisorVariance = {
  /* c8 ignore next */
  _T: _ => _
};
/** @internal */
class ProxySupervisor {
  underlying;
  value0;
  [SupervisorTypeId] = supervisorVariance;
  constructor(underlying, value0) {
    this.underlying = underlying;
    this.value0 = value0;
  }
  get value() {
    return this.value0;
  }
  onStart(context, effect, parent, fiber) {
    this.underlying.onStart(context, effect, parent, fiber);
  }
  onEnd(value, fiber) {
    this.underlying.onEnd(value, fiber);
  }
  onEffect(fiber, effect) {
    this.underlying.onEffect(fiber, effect);
  }
  onSuspend(fiber) {
    this.underlying.onSuspend(fiber);
  }
  onResume(fiber) {
    this.underlying.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, (0, _Function.pipe)(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
/** @internal */
exports.ProxySupervisor = ProxySupervisor;
class Zip {
  left;
  right;
  _tag = "Zip";
  [SupervisorTypeId] = supervisorVariance;
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }
  get value() {
    return core.zip(this.left.value, this.right.value);
  }
  onStart(context, effect, parent, fiber) {
    this.left.onStart(context, effect, parent, fiber);
    this.right.onStart(context, effect, parent, fiber);
  }
  onEnd(value, fiber) {
    this.left.onEnd(value, fiber);
    this.right.onEnd(value, fiber);
  }
  onEffect(fiber, effect) {
    this.left.onEffect(fiber, effect);
    this.right.onEffect(fiber, effect);
  }
  onSuspend(fiber) {
    this.left.onSuspend(fiber);
    this.right.onSuspend(fiber);
  }
  onResume(fiber) {
    this.left.onResume(fiber);
    this.right.onResume(fiber);
  }
  map(f) {
    return new ProxySupervisor(this, (0, _Function.pipe)(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
}
/** @internal */
exports.Zip = Zip;
const isZip = self => (0, _Predicate.hasProperty)(self, SupervisorTypeId) && (0, _Predicate.isTagged)(self, "Zip");
/** @internal */
exports.isZip = isZip;
class Track {
  [SupervisorTypeId] = supervisorVariance;
  fibers = /*#__PURE__*/new Set();
  get value() {
    return core.sync(() => Array.from(this.fibers));
  }
  onStart(_context, _effect, _parent, fiber) {
    this.fibers.add(fiber);
  }
  onEnd(_value, fiber) {
    this.fibers.delete(fiber);
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, (0, _Function.pipe)(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
  onRun(execution, _fiber) {
    return execution();
  }
}
/** @internal */
exports.Track = Track;
class Const {
  effect;
  [SupervisorTypeId] = supervisorVariance;
  constructor(effect) {
    this.effect = effect;
  }
  get value() {
    return this.effect;
  }
  onStart(_context, _effect, _parent, _fiber) {
    //
  }
  onEnd(_value, _fiber) {
    //
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, (0, _Function.pipe)(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
  onRun(execution, _fiber) {
    return execution();
  }
}
exports.Const = Const;
class FibersIn {
  ref;
  [SupervisorTypeId] = supervisorVariance;
  constructor(ref) {
    this.ref = ref;
  }
  get value() {
    return core.sync(() => MutableRef.get(this.ref));
  }
  onStart(_context, _effect, _parent, fiber) {
    (0, _Function.pipe)(this.ref, MutableRef.set((0, _Function.pipe)(MutableRef.get(this.ref), SortedSet.add(fiber))));
  }
  onEnd(_value, fiber) {
    (0, _Function.pipe)(this.ref, MutableRef.set((0, _Function.pipe)(MutableRef.get(this.ref), SortedSet.remove(fiber))));
  }
  onEffect(_fiber, _effect) {
    //
  }
  onSuspend(_fiber) {
    //
  }
  onResume(_fiber) {
    //
  }
  map(f) {
    return new ProxySupervisor(this, (0, _Function.pipe)(this.value, core.map(f)));
  }
  zip(right) {
    return new Zip(this, right);
  }
  onRun(execution, _fiber) {
    return execution();
  }
}
/** @internal */
const unsafeTrack = () => {
  return new Track();
};
/** @internal */
exports.unsafeTrack = unsafeTrack;
const track = exports.track = /*#__PURE__*/core.sync(unsafeTrack);
/** @internal */
const fromEffect = effect => {
  return new Const(effect);
};
/** @internal */
exports.fromEffect = fromEffect;
const none = exports.none = /*#__PURE__*/(0, _GlobalValue.globalValue)("effect/Supervisor/none", () => fromEffect(core.void));
/** @internal */
const fibersIn = ref => core.sync(() => new FibersIn(ref));
exports.fibersIn = fibersIn;
//# sourceMappingURL=supervisor.js.map