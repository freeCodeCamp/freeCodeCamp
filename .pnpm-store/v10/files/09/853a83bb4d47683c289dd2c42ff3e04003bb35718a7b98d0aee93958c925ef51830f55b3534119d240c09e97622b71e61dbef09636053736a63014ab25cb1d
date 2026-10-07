import * as Cause from "../../Cause.js";
import * as Context from "../../Context.js";
import * as Effect from "../../Effect.js";
import * as Either from "../../Either.js";
import * as Equal from "../../Equal.js";
import * as Exit from "../../Exit.js";
import * as FiberRef from "../../FiberRef.js";
import { constVoid, dual, pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
import { internalCall, YieldWrap } from "../../Utils.js";
import { ChannelTypeId } from "../core-stream.js";
import { withFiberRuntime } from "../core.js";
import { effectVariance, StreamTypeId } from "../effectable.js";
import { OP_COMMIT } from "../opCodes/effect.js";
import { SingleShotGen } from "../singleShotGen.js";
import { SinkTypeId } from "../sink.js";
import * as Journal from "./journal.js";
import * as OpCodes from "./opCodes/stm.js";
import * as TExitOpCodes from "./opCodes/tExit.js";
import * as TryCommitOpCodes from "./opCodes/tryCommit.js";
import * as STMState from "./stmState.js";
import * as TExit from "./tExit.js";
import * as TryCommit from "./tryCommit.js";
import * as TxnId from "./txnId.js";
/** @internal */
const STMSymbolKey = "effect/STM";
/** @internal */
export const STMTypeId = /*#__PURE__*/Symbol.for(STMSymbolKey);
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
  _op = OP_COMMIT;
  effect_instruction_i1 = undefined;
  effect_instruction_i2 = undefined;
  [Effect.EffectTypeId];
  [StreamTypeId];
  [SinkTypeId];
  [ChannelTypeId];
  get [STMTypeId]() {
    return stmVariance;
  }
  constructor(effect_instruction_i0) {
    this.effect_instruction_i0 = effect_instruction_i0;
    this[Effect.EffectTypeId] = effectVariance;
    this[StreamTypeId] = stmVariance;
    this[SinkTypeId] = stmVariance;
    this[ChannelTypeId] = stmVariance;
  }
  [Equal.symbol](that) {
    return this === that;
  }
  [Hash.symbol]() {
    return Hash.cached(this, Hash.random(this));
  }
  [Symbol.iterator]() {
    return new SingleShotGen(new YieldWrap(this));
  }
  commit() {
    return unsafeAtomically(this, constVoid, constVoid);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const isSTM = u => hasProperty(u, STMTypeId);
/** @internal */
export const commit = self => unsafeAtomically(self, constVoid, constVoid);
/** @internal */
export const unsafeAtomically = (self, onDone, onInterrupt) => withFiberRuntime(state => {
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
        return Effect.uninterruptibleMask(restore => pipe(restore(effect), Effect.catchAllCause(cause => {
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
export const context = () => effect((_, __, env) => env);
/** @internal */
export const contextWith = f => map(context(), f);
/** @internal */
export const contextWithSTM = f => flatMap(context(), f);
/** @internal */
export class STMDriver {
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
                      exit = TExit.die(internalCall(() => current.effect_instruction_i1()));
                      break;
                    }
                  case OpCodes.OP_FAIL:
                    {
                      const cont = this.nextFailure();
                      if (cont === undefined) {
                        exit = TExit.fail(internalCall(() => current.effect_instruction_i1()));
                      } else {
                        curr = internalCall(() => cont.effect_instruction_i2(internalCall(() => current.effect_instruction_i1())));
                      }
                      break;
                    }
                  case OpCodes.OP_RETRY:
                    {
                      const cont = this.nextRetry();
                      if (cont === undefined) {
                        exit = TExit.retry;
                      } else {
                        curr = internalCall(() => cont.effect_instruction_i2());
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
                      curr = internalCall(() => current.effect_instruction_i1(this));
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
                      this.env = internalCall(() => current.effect_instruction_i2(env));
                      curr = pipe(current.effect_instruction_i1, ensuring(sync(() => this.env = env)));
                      break;
                    }
                  case OpCodes.OP_SUCCEED:
                    {
                      const value = current.effect_instruction_i1;
                      const cont = this.nextSuccess();
                      if (cont === undefined) {
                        exit = TExit.succeed(value);
                      } else {
                        curr = internalCall(() => cont.effect_instruction_i2(value));
                      }
                      break;
                    }
                  case OpCodes.OP_SYNC:
                    {
                      const value = internalCall(() => current.effect_instruction_i1());
                      const cont = this.nextSuccess();
                      if (cont === undefined) {
                        exit = TExit.succeed(value);
                      } else {
                        curr = internalCall(() => cont.effect_instruction_i2(value));
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
export const catchAll = /*#__PURE__*/dual(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_FAILURE);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
/** @internal */
export const mapInputContext = /*#__PURE__*/dual(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_PROVIDE);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
/** @internal */
export const die = defect => dieSync(() => defect);
/** @internal */
export const dieMessage = message => dieSync(() => new Cause.RuntimeException(message));
/** @internal */
export const dieSync = evaluate => {
  const stm = new STMPrimitive(OpCodes.OP_DIE);
  stm.effect_instruction_i1 = evaluate;
  return stm;
};
/** @internal */
export const effect = f => withSTMRuntime(_ => succeed(f(_.journal, _.fiberId, _.getEnv())));
/** @internal */
export const ensuring = /*#__PURE__*/dual(2, (self, finalizer) => matchSTM(self, {
  onFailure: e => zipRight(finalizer, fail(e)),
  onSuccess: a => zipRight(finalizer, succeed(a))
}));
/** @internal */
export const fail = error => failSync(() => error);
/** @internal */
export const failSync = evaluate => {
  const stm = new STMPrimitive(OpCodes.OP_FAIL);
  stm.effect_instruction_i1 = evaluate;
  return stm;
};
/** @internal */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_SUCCESS);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = f;
  return stm;
});
/** @internal */
export const matchSTM = /*#__PURE__*/dual(2, (self, {
  onFailure,
  onSuccess
}) => pipe(self, map(Either.right), catchAll(e => pipe(onFailure(e), map(Either.left))), flatMap(either => {
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
export const withSTMRuntime = f => {
  const stm = new STMPrimitive(OpCodes.OP_WITH_STM_RUNTIME);
  stm.effect_instruction_i1 = f;
  return stm;
};
/** @internal */
export const interrupt = /*#__PURE__*/withSTMRuntime(_ => {
  const stm = new STMPrimitive(OpCodes.OP_INTERRUPT);
  stm.effect_instruction_i1 = _.fiberId;
  return stm;
});
/** @internal */
export const interruptAs = fiberId => {
  const stm = new STMPrimitive(OpCodes.OP_INTERRUPT);
  stm.effect_instruction_i1 = fiberId;
  return stm;
};
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => pipe(self, flatMap(a => sync(() => f(a)))));
/** @internal */
export const orTry = /*#__PURE__*/dual(2, (self, that) => {
  const stm = new STMPrimitive(OpCodes.OP_ON_RETRY);
  stm.effect_instruction_i1 = self;
  stm.effect_instruction_i2 = that;
  return stm;
});
/** @internal */
export const retry = /*#__PURE__*/new STMPrimitive(OpCodes.OP_RETRY);
/** @internal */
export const succeed = value => {
  const stm = new STMPrimitive(OpCodes.OP_SUCCEED);
  stm.effect_instruction_i1 = value;
  return stm;
};
/** @internal */
export const sync = evaluate => {
  const stm = new STMPrimitive(OpCodes.OP_SYNC);
  stm.effect_instruction_i1 = evaluate;
  return stm;
};
/** @internal */
export const zip = /*#__PURE__*/dual(2, (self, that) => pipe(self, zipWith(that, (a, a1) => [a, a1])));
/** @internal */
export const zipLeft = /*#__PURE__*/dual(2, (self, that) => pipe(self, flatMap(a => pipe(that, map(() => a)))));
/** @internal */
export const zipRight = /*#__PURE__*/dual(2, (self, that) => pipe(self, flatMap(() => that)));
/** @internal */
export const zipWith = /*#__PURE__*/dual(3, (self, that, f) => pipe(self, flatMap(a => pipe(that, map(b => f(a, b))))));
//# sourceMappingURL=core.js.map