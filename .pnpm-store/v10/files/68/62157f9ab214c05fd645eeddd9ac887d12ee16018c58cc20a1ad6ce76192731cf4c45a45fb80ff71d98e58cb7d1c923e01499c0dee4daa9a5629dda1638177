"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.running = exports.isSTMState = exports.isRunning = exports.isInterrupted = exports.isDone = exports.interrupted = exports.fromTExit = exports.done = exports.STMStateTypeId = void 0;
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var Exit = _interopRequireWildcard(require("../../Exit.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("./opCodes/stmState.js"));
var TExitOpCodes = _interopRequireWildcard(require("./opCodes/tExit.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const STMStateSymbolKey = "effect/STM/State";
/** @internal */
const STMStateTypeId = exports.STMStateTypeId = /*#__PURE__*/Symbol.for(STMStateSymbolKey);
/** @internal */
const isSTMState = u => (0, _Predicate.hasProperty)(u, STMStateTypeId);
/** @internal */
exports.isSTMState = isSTMState;
const isRunning = self => {
  return self._tag === OpCodes.OP_RUNNING;
};
/** @internal */
exports.isRunning = isRunning;
const isDone = self => {
  return self._tag === OpCodes.OP_DONE;
};
/** @internal */
exports.isDone = isDone;
const isInterrupted = self => {
  return self._tag === OpCodes.OP_INTERRUPTED;
};
/** @internal */
exports.isInterrupted = isInterrupted;
const done = exit => {
  return {
    [STMStateTypeId]: STMStateTypeId,
    _tag: OpCodes.OP_DONE,
    exit,
    [Hash.symbol]() {
      return (0, _Function.pipe)(Hash.hash(STMStateSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_DONE)), Hash.combine(Hash.hash(exit)), Hash.cached(this));
    },
    [Equal.symbol](that) {
      return isSTMState(that) && that._tag === OpCodes.OP_DONE && Equal.equals(exit, that.exit);
    }
  };
};
exports.done = done;
const interruptedHash = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/Hash.hash(STMStateSymbolKey), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash(OpCodes.OP_INTERRUPTED)), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash("interrupted")));
/** @internal */
const interrupted = exports.interrupted = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OpCodes.OP_INTERRUPTED,
  [Hash.symbol]() {
    return interruptedHash;
  },
  [Equal.symbol](that) {
    return isSTMState(that) && that._tag === OpCodes.OP_INTERRUPTED;
  }
};
const runningHash = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/Hash.hash(STMStateSymbolKey), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash(OpCodes.OP_RUNNING)), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash("running")));
/** @internal */
const running = exports.running = {
  [STMStateTypeId]: STMStateTypeId,
  _tag: OpCodes.OP_RUNNING,
  [Hash.symbol]() {
    return runningHash;
  },
  [Equal.symbol](that) {
    return isSTMState(that) && that._tag === OpCodes.OP_RUNNING;
  }
};
/** @internal */
const fromTExit = tExit => {
  switch (tExit._tag) {
    case TExitOpCodes.OP_FAIL:
      {
        return done(Exit.fail(tExit.error));
      }
    case TExitOpCodes.OP_DIE:
      {
        return done(Exit.die(tExit.defect));
      }
    case TExitOpCodes.OP_INTERRUPT:
      {
        return done(Exit.interrupt(tExit.fiberId));
      }
    case TExitOpCodes.OP_SUCCEED:
      {
        return done(Exit.succeed(tExit.value));
      }
    case TExitOpCodes.OP_RETRY:
      {
        throw new Error("BUG: STM.STMState.fromTExit - please report an issue at https://github.com/Effect-TS/effect/issues");
      }
  }
};
exports.fromTExit = fromTExit;
//# sourceMappingURL=stmState.js.map