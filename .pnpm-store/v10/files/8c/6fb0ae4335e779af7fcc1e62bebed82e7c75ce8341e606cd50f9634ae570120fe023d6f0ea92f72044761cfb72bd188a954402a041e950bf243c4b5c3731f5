"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suspended = exports.running = exports.isSuspended = exports.isRunning = exports.isFiberStatus = exports.isDone = exports.done = exports.OP_SUSPENDED = exports.OP_RUNNING = exports.OP_DONE = exports.FiberStatusTypeId = void 0;
var Equal = _interopRequireWildcard(require("../Equal.js"));
var _Function = require("../Function.js");
var Hash = _interopRequireWildcard(require("../Hash.js"));
var _Predicate = require("../Predicate.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const FiberStatusSymbolKey = "effect/FiberStatus";
/** @internal */
const FiberStatusTypeId = exports.FiberStatusTypeId = /*#__PURE__*/Symbol.for(FiberStatusSymbolKey);
/** @internal */
const OP_DONE = exports.OP_DONE = "Done";
/** @internal */
const OP_RUNNING = exports.OP_RUNNING = "Running";
/** @internal */
const OP_SUSPENDED = exports.OP_SUSPENDED = "Suspended";
const DoneHash = /*#__PURE__*/Hash.string(`${FiberStatusSymbolKey}-${OP_DONE}`);
/** @internal */
class Done {
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_DONE;
  [Hash.symbol]() {
    return DoneHash;
  }
  [Equal.symbol](that) {
    return isFiberStatus(that) && that._tag === OP_DONE;
  }
}
/** @internal */
class Running {
  runtimeFlags;
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_RUNNING;
  constructor(runtimeFlags) {
    this.runtimeFlags = runtimeFlags;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(FiberStatusSymbolKey), Hash.combine(Hash.hash(this._tag)), Hash.combine(Hash.hash(this.runtimeFlags)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFiberStatus(that) && that._tag === OP_RUNNING && this.runtimeFlags === that.runtimeFlags;
  }
}
/** @internal */
class Suspended {
  runtimeFlags;
  blockingOn;
  [FiberStatusTypeId] = FiberStatusTypeId;
  _tag = OP_SUSPENDED;
  constructor(runtimeFlags, blockingOn) {
    this.runtimeFlags = runtimeFlags;
    this.blockingOn = blockingOn;
  }
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(FiberStatusSymbolKey), Hash.combine(Hash.hash(this._tag)), Hash.combine(Hash.hash(this.runtimeFlags)), Hash.combine(Hash.hash(this.blockingOn)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isFiberStatus(that) && that._tag === OP_SUSPENDED && this.runtimeFlags === that.runtimeFlags && Equal.equals(this.blockingOn, that.blockingOn);
  }
}
/** @internal */
const done = exports.done = /*#__PURE__*/new Done();
/** @internal */
const running = runtimeFlags => new Running(runtimeFlags);
/** @internal */
exports.running = running;
const suspended = (runtimeFlags, blockingOn) => new Suspended(runtimeFlags, blockingOn);
/** @internal */
exports.suspended = suspended;
const isFiberStatus = u => (0, _Predicate.hasProperty)(u, FiberStatusTypeId);
/** @internal */
exports.isFiberStatus = isFiberStatus;
const isDone = self => self._tag === OP_DONE;
/** @internal */
exports.isDone = isDone;
const isRunning = self => self._tag === OP_RUNNING;
/** @internal */
exports.isRunning = isRunning;
const isSuspended = self => self._tag === OP_SUSPENDED;
exports.isSuspended = isSuspended;
//# sourceMappingURL=fiberStatus.js.map