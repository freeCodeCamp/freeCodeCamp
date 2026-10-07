"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.zipRight = exports.zipLeft = exports.zip = exports.withSTMRuntime = exports.unsafeAtomically = exports.sync = exports.succeed = exports.retry = exports.orTry = exports.matchSTM = exports.mapInputContext = exports.map = exports.isSTM = exports.interruptAs = exports.interrupt = exports.flatMap = exports.failSync = exports.fail = exports.ensuring = exports.effect = exports.dieSync = exports.dieMessage = exports.die = exports.contextWithSTM = exports.contextWith = exports.context = exports.commit = exports.catchAll = exports.STMTypeId = exports.STMDriver = void 0;
var Cause = _interopRequireWildcard(require("../../Cause.js"));
var Context = _interopRequireWildcard(require("../../Context.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var Either = _interopRequireWildcard(require("../../Either.js"));
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var Exit = _interopRequireWildcard(require("../../Exit.js"));
var FiberRef = _interopRequireWildcard(require("../../FiberRef.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var _Pipeable = require("../../Pipeable.js");
var _Predicate = require("../../Predicate.js");
var _Utils = require("../../Utils.js");
var _coreStream = require("../core-stream.js");
var _core = require("../core.js");
var _effectable = require("../effectable.js");
var _effect = require("../opCodes/effect.js");
var _singleShotGen = require("../singleShotGen.js");
var _sink = require("../sink.js");
var Journal = _interopRequireWildcard(require("./journal.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/stm.js"));
var TExitOpCodes = _interopRequireWildcard(require("./opCodes/tExit.js"));
var TryCommitOpCodes = _interopRequireWildcard(require("./opCodes/tryCommit.js"));
var STMState = _interopRequireWildcard(require("./stmState.js"));
var TExit = _interopRequireWildcard(require("./tExit.js"));
var TryCommit = _interopRequireWildcard(require("./tryCommit.js"));
var TxnId = _interopRequireWildcard(require("./txnId.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const STMSymbolKey = "effect/STM";
/** @internal */
const STMTypeId = exports.STMTypeId = /*#__PURE__*/Symbol.for(STMSymbolKey);
const stmVariance = {
  /* c8 ignore next */
  _R: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class STMPrimitive {
  effect_instruction_i0;
  _op = _effect.OP_COMMIT;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  [Effect.EffectTypeId];
  [_effectable.StreamTypeId];
  [_sink.SinkTypeId];
  [_coreStream.ChannelTypeId];
  get [STMTypeId]() {
    return stmVariance;
  }
  constructor(effect_instruction_i0) {
    this.effect_instruction_i0 = effect_instruction_i0;
    this[Effect.EffectTypeId] = _effectable.effectVariance;
    this[_effectable.StreamTypeId] = stmVariance;
    this[_sink.SinkTypeId] = stmVariance;
    this[_coreStream.ChannelTypeId] = stmVariance;
  }
  [Equal.symbol](that) {
    return this === that;
  }
  [Hash.symbol]() {
    return Hash.cached(this, Hash.random(this));
  }
  [Symbol.iterator]() {
    return new _singleShotGen.SingleShotGen(new _Utils.YieldWrap(this));
  }
  commit() {
    return unsafeAtomically(this, _Function.constVoid, _Function.constVoid);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
const isSTM = u => (0, _Predicate.hasProperty)(u, STMTypeId);
/** @internal */
exports.isSTM = isSTM;
const commit = self => unsafeAtomically(self, _Function.constVoid, _Function.constVoid);
/** @internal */
exports.commit = commit;
const unsafeAtomically = (self, onDone, onInterrupt) => (0, _core.withFiberRuntime)(state => {
  const fiberId = state.id();
  const env = state.getFiberRef(FiberRef.currentContext);
  const scheduler = state.getFiberRef(FiberRef.currentScheduler);
  const priority = state.getFiberRef(FiberRef.currentSchedulingPriority);
  const commitResult = tryCommitSync(fiberId, self, env, scheduler, priority);
  switch (commitResult._tag) {
    case TryCommitOpCodes.OP_DONE:
      {
        onDone(commitResult.exit);
        return commitResult.exit;
      }
    case TryCommitOpCodes.OP_SUSPEND:
      {
        const txnId = TxnId.make();
        const state = {
          value: STMState.running
        };
        const effect = Effect.async(k => tryCommitAsync(fiberId, self, txnId, state, env, scheduler, priority, k));
        return Effect.uninterruptibleMask(restore => (0, _Function.pipe)(restore(effect), Effect.catchAllCause(cause => {
          let currentState = state.value;
          if (STMState.isRunning(currentState)) {
            state.value = STMState.interrupted;
          }
          currentState = state.value;
          if (STMState.isDone(currentState)) {
            onDone(currentState.exit);
            return currentState.exit;
          }
          onInterrupt();
          return Effect.failCause(cause);
        })));
      }
  }
});
/** @internal */
exports.unsafeAtomically = unsafeAtomically;
const tryCommit = (fiberId, stm, state, env, scheduler, priority) => {
  const journal = new Map();
  const tExit = new STMDriver(stm, journal, fiberId, env).run();
  const analysis = Journal.analyzeJournal(journal);
  if (analysis === Journal.JournalAnalysisReadWrite) {
    Journal.commitJournal(journal);
  } else if (analysis === Journal.JournalAnalysisInvalid) {
    throw new Error("BUG: STM.TryCommit.tryCommit - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  switch (tExit._tag) {
    case TExitOpCodes.OP_SUCCEED:
      {
        state.value = STMState.fromTExit(tExit);
        return completeTodos(Exit.succeed(tExit.value), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_FAIL:
      {
        state.value = STMState.fromTExit(tExit);
        const cause = Cause.fail(tExit.error);
        return completeTodos(Exit.failCause(cause), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_DIE:
      {
        state.value = STMState.fromTExit(tExit);
        const cause = Cause.die(tExit.defect);
        return completeTodos(Exit.failCause(cause), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_INTERRUPT:
      {
        state.value = STMState.fromTExit(tExit);
        const cause = Cause.interrupt(fiberId);
        return completeTodos(Exit.failCause(cause), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_RETRY:
      {
        return TryCommit.suspend(journal);
      }
  }
};
/** @internal */
const tryCommitSync = (fiberId, stm, env, scheduler, priority) => {
  const journal = new Map();
  const tExit = new STMDriver(stm, journal, fiberId, env).run();
  const analysis = Journal.analyzeJournal(journal);
  if (analysis === Journal.JournalAnalysisReadWrite && TExit.isSuccess(tExit)) {
    Journal.commitJournal(journal);
  } else if (analysis === Journal.JournalAnalysisInvalid) {
    throw new Error("BUG: STM.TryCommit.tryCommitSync - please report an issue at https://github.com/Effect-TS/effect/issues");
  }
  switch (tExit._tag) {
    case TExitOpCodes.OP_SUCCEED:
      {
        return completeTodos(Exit.succeed(tExit.value), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_FAIL:
      {
        const cause = Cause.fail(tExit.error);
        return completeTodos(Exit.failCause(cause), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_DIE:
      {
        const cause = Cause.die(tExit.defect);
        return completeTodos(Exit.failCause(cause), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_INTERRUPT:
      {
        const cause = Cause.interrupt(fiberId);
        return completeTodos(Exit.failCause(cause), journal, scheduler, priority);
      }
    case TExitOpCodes.OP_RETRY:
      {
        return TryCommit.suspend(journal);
      }
  }
};
/** @internal */
const tryCommitAsync = (fiberId, self, txnId, state, context, scheduler, priority, k) => {
  if (STMState.isRunning(state.value)) {
    const result = tryCommit(fiberId, self, state, context, scheduler, priority);
    switch (result._tag) {
      case TryCommitOpCodes.OP_DONE:
        {
          completeTryCommit(result.exit, k);
          break;
        }
      case TryCommitOpCodes.OP_SUSPEND:
        {
          Journal.addTodo(txnId, result.journal, () => tryCommitAsync(fiberId, self, txnId, state, context, scheduler, priority, k));
          break;
        }
    }
  }
};
/** @internal */
const completeTodos = (exit, journal, scheduler, priority) => {
  const todos = Journal.collectTodos(journal);
  if (todos.size > 0) {
    scheduler.scheduleTask(() => Journal.execTodos(todos), priority);
  }
  return TryCommit.done(exit);
};
/** @internal */
const completeTryCommit = (exit, k) => {
  k(exit);
};
/** @internal */
const context = () => effect((_, __, env) => env);
/** @internal */
exports.context = context;
const contextWith = f => map(context(), f);
/** @internal */
exports.contextWith = contextWith;
const contextWithSTM = f => flatMap(context(), f);
/** @internal */
exports.contextWithSTM = contextWithSTM;
class STMDriver {
  self;
  journal;
  fiberId;
  contStack = [];
  env;
  constructor(self, journal, fiberId, r0) {
    this.self = self;
    this.journal = journal;
    this.fiberId = fiberId;
    this.env = r0;
  }
  getEnv() {
    return this.env;
  }
  pushStack(cont) {
    this.contStack.push(cont);
  }
  popStack() {
    return this.contStack.pop();
  }
  nextSuccess() {
    let current = this.popStack();
    while (current !== undefined && current.effect_instruction_i0 !== OpCodes.OP_ON_SUCCESS) {
      current = this.popStack();
    }
    return current;
  }
  nextFailure() {
    let current = this.popStack();
    while (current !== undefined && current.effect_instruction_i0 !== OpCodes.OP_ON_FAILURE) {
      current = this.popStack();
    }
    return current;
  }
  nextRetry() {
    let current = this.popStack();
    while (current !== undefined && current.effect_instruction_i0 !== OpCodes.OP_ON_RETRY) {
      current = this.popStack();
    }
    return current;
  }
  run() {
    let curr = this.self;
    let exit = undefined;
    while (exit === undefined && curr !== undefined) {
      try {
        const current = curr;
        if (current) {
          switch (current._op) {
            case "Tag":
              {
                curr = effect((_, __, env) => Context.unsafeGet(env, current));
                break;
              }
            case "Left":
              {
                curr = fail(current.left);
                break;
              }
            case "None":
              {
                curr = fail(new Cause.NoSuchElementException());
                break;
              }
            case "Right":
              {
                curr = succeed(current.right);
                break;
              }
            case "Some":
              {
                curr = succeed(current.value);
                break;
              }
            case "Commit":
              {
                switch (current.effect_instruction_i0) {
                  case OpCodes.OP_DIE:
                    {
                      exit = TExit.die((0, _Utils.internalCall)(() => current.effect_instruction_i1()));
                      break;
                    }
                  case OpCodes.OP_FAIL:
                    {
                      const cont = this.nextFailure();
                      if (cont === undefined) {
                        exit = TExit.fail((0, _Utils.internalCall)(() => current.effect_instruction_i1()));
                      } else {
                        curr = (0, _Utils.internalCall)(() => cont.effect_instruction_i2((0, _Utils.internalCall)(() => current.effect_instruction_i1())));
                      }
                      break;
                    }
                  case OpCodes.OP_RETRY:
                    {
                      const cont = this.nextRetry();
                      if (cont === undefined) {
                        exit = TExit.retry;
                      } else {
                        curr = (0, _Utils.internalCall)(() => cont.effect_instruction_i2());
                      }
                      break;
                    }
                  case OpCodes.OP_INTERRUPT:
                    {
                      exit = TExit.interrupt(this.fiberId);
                      break;
                    }
                  case OpCodes.OP_WITH_STM_RUNTIME:
                    {
                      curr = (0, _Utils.internalCall)(() => current.effect_instruction_i1(this));
                      break;
                    }
                  case OpCodes.OP_ON_SUCCESS:
                  case OpCodes.OP_ON_FAILURE:
                  case OpCodes.OP_ON_RETRY:
                    {
                      this.pushStack(current);
                      curr = current.effect_instruction_i1;
                      break;
                    }
                  case OpCodes.OP_PROVIDE:
                    {
                      const env = this.env;
                      this.env = (0, _Utils.internalCall)(() => current.effect_instruction_i2(env));
                      curr = (0, _Function.pipe)(current.effect_instruction_i1, ensuring(sync(() => this.env = env)));
                      break;
                    }
                  case OpCodes.OP_SUCCEED:
                    {
                      const value = current.effect_instruction_i1;
                      const cont = this.nextSuccess();
                      if (cont === undefined) {
                        exit = TExit.succeed(value);
                      } else {
                        curr = (0, _Utils.internalCall)(() => cont.effect_instruction_i2(value));
                      }
                      break;
                    }
                  case OpCodes.OP_SYNC:
                    {
                      const value = (0, _Utils.internalCall)(() => current.effect_instruction_i1());
                      const cont = this.nextSuccess();
                      if (cont === undefined) {
                        exit = TExit.succeed(value);
                      } else {
                        curr = (0, _Utils.internalCall)(() => cont.effect_instruction_i2(value));
                      }
                      break;
                    }
                }
                break;
              }
          }
        }
      } catch (e) {
        curr = die(e);
      }
    }
    return exit;
  }
}
/** @internal */
exports.STMDriver = STMDriver;
const catchAll = exports.catchAll = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_FAILURE);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
/** @internal */
const mapInputContext = exports.mapInputContext = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_PROVIDE);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
/** @internal */
const die = defect => dieSync(() => defect);
/** @internal */
exports.die = die;
const dieMessage = message => dieSync(() => new Cause.RuntimeException(message));
/** @internal */
exports.dieMessage = dieMessage;
const dieSync = evaluate => {
  const stm = new STMPrimitive(OpCodes.OP_DIE);
  stm.effect_instruction_i1 = evaluate;
  return stm;
};
/** @internal */
exports.dieSync = dieSync;
const effect = f => withSTMRuntime(_ => succeed(f(_.journal, _.fiberId, _.getEnv())));
/** @internal */
exports.effect = effect;
const ensuring = exports.ensuring = /*#__PURE__*/(0, _Function.dual)(2, (self, finalizer) => matchSTM(self, {
  onFailure: e => zipRight(finalizer, fail(e)),
  onSuccess: a => zipRight(finalizer, succeed(a))
}));
/** @internal */
const fail = error => failSync(() => error);
/** @internal */
exports.fail = fail;
const failSync = evaluate => {
  const stm = new STMPrimitive(OpCodes.OP_FAIL);
  stm.effect_instruction_i1 = evaluate;
  return stm;
};
/** @internal */
exports.failSync = failSync;
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_SUCCESS);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
/** @internal */
const matchSTM = exports.matchSTM = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onFailure,
  onSuccess
}) => (0, _Function.pipe)(self, map(Either.right), catchAll(e => (0, _Function.pipe)(onFailure(e), map(Either.left))), flatMap(either => {
  switch (either._tag) {
    case "Left":
      {
        return succeed(either.left);
      }
    case "Right":
      {
        return onSuccess(either.right);
      }
  }
})));
/** @internal */
const withSTMRuntime = f => {
  const stm = new STMPrimitive(OpCodes.OP_WITH_STM_RUNTIME);
  stm.effect_instruction_i1 = f;
  return stm;
};
/** @internal */
exports.withSTMRuntime = withSTMRuntime;
const interrupt = exports.interrupt = /*#__PURE__*/withSTMRuntime(_ => {
  const stm = new STMPrimitive(OpCodes.OP_INTERRUPT);
  stm.effect_instruction_i1 = _.fiberId;
  return stm;
});
/** @internal */
const interruptAs = fiberId => {
  const stm = new STMPrimitive(OpCodes.OP_INTERRUPT);
  stm.effect_instruction_i1 = fiberId;
  return stm;
};
/** @internal */
exports.interruptAs = interruptAs;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, flatMap(a => sync(() => f(a)))));
/** @internal */
const orTry = exports.orTry = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_RETRY);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = that;
  return stm;
});
/** @internal */
const retry = exports.retry = /*#__PURE__*/new STMPrimitive(OpCodes.OP_RETRY);
/** @internal */
const succeed = value => {
  const stm = new STMPrimitive(OpCodes.OP_SUCCEED);
  stm.effect_instruction_i1 = value;
  return stm;
};
/** @internal */
exports.succeed = succeed;
const sync = evaluate => {
  const stm = new STMPrimitive(OpCodes.OP_SYNC);
  stm.effect_instruction_i1 = evaluate;
  return stm;
};
/** @internal */
exports.sync = sync;
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, zipWith(that, (a, a1) => [a, a1])));
/** @internal */
const zipLeft = exports.zipLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, flatMap(a => (0, _Function.pipe)(that, map(() => a)))));
/** @internal */
const zipRight = exports.zipRight = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, flatMap(() => that)));
/** @internal */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => (0, _Function.pipe)(self, flatMap(a => (0, _Function.pipe)(that, map(b => f(a, b))))));
//# sourceMappingURL=core.js.map