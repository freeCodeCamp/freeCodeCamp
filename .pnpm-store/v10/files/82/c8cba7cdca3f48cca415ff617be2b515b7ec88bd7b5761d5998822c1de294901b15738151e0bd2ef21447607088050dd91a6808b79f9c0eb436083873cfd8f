import * as Cause from "../../Cause.js";
import * as Effect from "../../Effect.js";
import { dual } from "../../Function.js";
import * as STM from "../../STM.js";
import * as core from "./core.js";
import * as tRef from "./tRef.js";
/** @internal */
const TSemaphoreSymbolKey = "effect/TSemaphore";
/** @internal */
export const TSemaphoreTypeId = /*#__PURE__*/Symbol.for(TSemaphoreSymbolKey);
/** @internal */
class TSemaphoreImpl {
  permits;
  [TSemaphoreTypeId] = TSemaphoreTypeId;
  constructor(permits) {
    this.permits = permits;
  }
}
/** @internal */
export const make = permits => STM.map(tRef.make(permits), permits => new TSemaphoreImpl(permits));
/** @internal */
export const acquire = self => acquireN(self, 1);
/** @internal */
export const acquireN = /*#__PURE__*/dual(2, (self, n) => core.withSTMRuntime(driver => {
  if (n < 0) {
    throw new Cause.IllegalArgumentException(`Unexpected negative value ${n} passed to Semaphore.acquireN`);
  }
  const value = tRef.unsafeGet(self.permits, driver.journal);
  if (value < n) {
    return STM.retry;
  } else {
    return STM.succeed(tRef.unsafeSet(self.permits, value - n, driver.journal));
  }
}));
/** @internal */
export const available = self => tRef.get(self.permits);
/** @internal */
export const release = self => releaseN(self, 1);
/** @internal */
export const releaseN = /*#__PURE__*/dual(2, (self, n) => core.withSTMRuntime(driver => {
  if (n < 0) {
    throw new Cause.IllegalArgumentException(`Unexpected negative value ${n} passed to Semaphore.releaseN`);
  }
  const current = tRef.unsafeGet(self.permits, driver.journal);
  return STM.succeed(tRef.unsafeSet(self.permits, current + n, driver.journal));
}));
/** @internal */
export const withPermit = /*#__PURE__*/dual(2, (self, semaphore) => withPermits(self, semaphore, 1));
/** @internal */
export const withPermits = /*#__PURE__*/dual(3, (self, semaphore, permits) => Effect.uninterruptibleMask(restore => Effect.zipRight(restore(core.commit(acquireN(permits)(semaphore))), Effect.ensuring(self, core.commit(releaseN(permits)(semaphore))))));
/** @internal */
export const withPermitScoped = self => withPermitsScoped(self, 1);
/** @internal */
export const withPermitsScoped = /*#__PURE__*/dual(2, (self, permits) => Effect.acquireReleaseInterruptible(core.commit(acquireN(self, permits)), () => core.commit(releaseN(self, permits))));
/** @internal */
export const unsafeMakeSemaphore = permits => {
  return new TSemaphoreImpl(new tRef.TRefImpl(permits));
};
//# sourceMappingURL=tSemaphore.js.map