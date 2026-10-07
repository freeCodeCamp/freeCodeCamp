import * as Effect from "../../Effect.js";
import * as Exit from "../../Exit.js";
import { pipe } from "../../Function.js";
/** @internal */
export const OP_PULL_FROM_CHILD = "PullFromChild";
/** @internal */
export const OP_PULL_FROM_UPSTREAM = "PullFromUpstream";
/** @internal */
export const OP_DRAIN_CHILD_EXECUTORS = "DrainChildExecutors";
/** @internal */
export const OP_EMIT = "Emit";
/**
 * Execute the `childExecutor` and on each emitted value, decide what to do by
 * `onEmit`.
 *
 * @internal
 */
export class PullFromChild {
  childExecutor;
  parentSubexecutor;
  onEmit;
  _tag = OP_PULL_FROM_CHILD;
  constructor(childExecutor, parentSubexecutor, onEmit) {
    this.childExecutor = childExecutor;
    this.parentSubexecutor = parentSubexecutor;
    this.onEmit = onEmit;
  }
  close(exit) {
    const fin1 = this.childExecutor.close(exit);
    const fin2 = this.parentSubexecutor.close(exit);
    if (fin1 !== undefined && fin2 !== undefined) {
      return Effect.zipWith(Effect.exit(fin1), Effect.exit(fin2), (exit1, exit2) => pipe(exit1, Exit.zipRight(exit2)));
    } else if (fin1 !== undefined) {
      return fin1;
    } else if (fin2 !== undefined) {
      return fin2;
    } else {
      return undefined;
    }
  }
  enqueuePullFromChild(_child) {
    return this;
  }
}
/**
 * Execute `upstreamExecutor` and for each emitted element, spawn a child
 * channel and continue with processing it by `PullFromChild`.
 *
 * @internal
 */
export class PullFromUpstream {
  upstreamExecutor;
  createChild;
  lastDone;
  activeChildExecutors;
  combineChildResults;
  combineWithChildResult;
  onPull;
  onEmit;
  _tag = OP_PULL_FROM_UPSTREAM;
  constructor(upstreamExecutor, createChild, lastDone, activeChildExecutors, combineChildResults, combineWithChildResult, onPull, onEmit) {
    this.upstreamExecutor = upstreamExecutor;
    this.createChild = createChild;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
    this.onEmit = onEmit;
  }
  close(exit) {
    const fin1 = this.upstreamExecutor.close(exit);
    const fins = [...this.activeChildExecutors.map(child => child !== undefined ? child.childExecutor.close(exit) : undefined), fin1];
    const result = fins.reduce((acc, next) => {
      if (acc !== undefined && next !== undefined) {
        return Effect.zipWith(acc, Effect.exit(next), (exit1, exit2) => Exit.zipRight(exit1, exit2));
      } else if (acc !== undefined) {
        return acc;
      } else if (next !== undefined) {
        return Effect.exit(next);
      } else {
        return undefined;
      }
    }, undefined);
    return result === undefined ? result : result;
  }
  enqueuePullFromChild(child) {
    return new PullFromUpstream(this.upstreamExecutor, this.createChild, this.lastDone, [...this.activeChildExecutors, child], this.combineChildResults, this.combineWithChildResult, this.onPull, this.onEmit);
  }
}
/**
 * Transformed from `PullFromUpstream` when upstream has finished but there
 * are still active child executors.
 *
 * @internal
 */
export class DrainChildExecutors {
  upstreamExecutor;
  lastDone;
  activeChildExecutors;
  upstreamDone;
  combineChildResults;
  combineWithChildResult;
  onPull;
  _tag = OP_DRAIN_CHILD_EXECUTORS;
  constructor(upstreamExecutor, lastDone, activeChildExecutors, upstreamDone, combineChildResults, combineWithChildResult, onPull) {
    this.upstreamExecutor = upstreamExecutor;
    this.lastDone = lastDone;
    this.activeChildExecutors = activeChildExecutors;
    this.upstreamDone = upstreamDone;
    this.combineChildResults = combineChildResults;
    this.combineWithChildResult = combineWithChildResult;
    this.onPull = onPull;
  }
  close(exit) {
    const fin1 = this.upstreamExecutor.close(exit);
    const fins = [...this.activeChildExecutors.map(child => child !== undefined ? child.childExecutor.close(exit) : undefined), fin1];
    const result = fins.reduce((acc, next) => {
      if (acc !== undefined && next !== undefined) {
        return Effect.zipWith(acc, Effect.exit(next), (exit1, exit2) => Exit.zipRight(exit1, exit2));
      } else if (acc !== undefined) {
        return acc;
      } else if (next !== undefined) {
        return Effect.exit(next);
      } else {
        return undefined;
      }
    }, undefined);
    return result === undefined ? result : result;
  }
  enqueuePullFromChild(child) {
    return new DrainChildExecutors(this.upstreamExecutor, this.lastDone, [...this.activeChildExecutors, child], this.upstreamDone, this.combineChildResults, this.combineWithChildResult, this.onPull);
  }
}
/** @internal */
export class Emit {
  value;
  next;
  _tag = OP_EMIT;
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
  close(exit) {
    const result = this.next.close(exit);
    return result === undefined ? result : result;
  }
  enqueuePullFromChild(_child) {
    return this;
  }
}
//# sourceMappingURL=subexecutor.js.map