"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDone = exports.isContinue = exports.done = exports.continueWith = exports._continue = exports.OP_DONE = exports.OP_CONTINUE = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Intervals = _interopRequireWildcard(require("../../ScheduleIntervals.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const OP_CONTINUE = exports.OP_CONTINUE = "Continue";
/** @internal */
const OP_DONE = exports.OP_DONE = "Done";
/** @internal */
const _continue = intervals => {
  return {
    _tag: OP_CONTINUE,
    intervals
  };
};
/** @internal */
exports._continue = _continue;
const continueWith = interval => {
  return {
    _tag: OP_CONTINUE,
    intervals: Intervals.make(Chunk.of(interval))
  };
};
/** @internal */
exports.continueWith = continueWith;
const done = exports.done = {
  _tag: OP_DONE
};
/** @internal */
const isContinue = self => {
  return self._tag === OP_CONTINUE;
};
/** @internal */
exports.isContinue = isContinue;
const isDone = self => {
  return self._tag === OP_DONE;
};
exports.isDone = isDone;
//# sourceMappingURL=decision.js.map