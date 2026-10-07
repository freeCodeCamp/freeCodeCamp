import { seconds } from "../Duration.js";
import { dual } from "../Function.js";
import { globalValue } from "../GlobalValue.js";
import * as BlockedRequests from "./blockedRequests.js";
import { unsafeMakeWith } from "./cache.js";
import * as core from "./core.js";
import { ensuring } from "./fiberRuntime.js";
import { Listeners } from "./request.js";
/** @internal */
export const currentCache = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentCache"), () => core.fiberRefUnsafeMake(unsafeMakeWith(65536, () => core.map(core.deferredMake(), handle => ({
  listeners: new Listeners(),
  handle
})), () => seconds(60))));
/** @internal */
export const currentCacheEnabled = /*#__PURE__*/globalValue(/*#__PURE__*/Symbol.for("effect/FiberRef/currentCacheEnabled"), () => core.fiberRefUnsafeMake(false));
/** @internal */
export const fromRequest = (request, dataSource) => core.flatMap(core.isEffect(dataSource) ? dataSource : core.succeed(dataSource), ds => core.fiberIdWith(id => {
  const proxy = new Proxy(request, {});
  return core.fiberRefGetWith(currentCacheEnabled, cacheEnabled => {
    if (cacheEnabled) {
      const cached = core.fiberRefGetWith(currentCache, cache => core.flatMap(cache.getEither(proxy), orNew => {
        switch (orNew._tag) {
          case "Left":
            {
              if (orNew.left.listeners.interrupted) {
                return core.flatMap(cache.invalidateWhen(proxy, entry => entry.handle === orNew.left.handle), () => cached);
              }
              orNew.left.listeners.increment();
              return core.uninterruptibleMask(restore => core.flatMap(core.exit(core.blocked(BlockedRequests.empty, restore(core.deferredAwait(orNew.left.handle)))), exit => {
                orNew.left.listeners.decrement();
                return exit;
              }));
            }
          case "Right":
            {
              orNew.right.listeners.increment();
              return core.uninterruptibleMask(restore => core.flatMap(core.exit(core.blocked(BlockedRequests.single(ds, BlockedRequests.makeEntry({
                request: proxy,
                result: orNew.right.handle,
                listeners: orNew.right.listeners,
                ownerId: id,
                state: {
                  completed: false
                }
              })), restore(core.deferredAwait(orNew.right.handle)))), () => {
                orNew.right.listeners.decrement();
                return core.deferredAwait(orNew.right.handle);
              }));
            }
        }
      }));
      return cached;
    }
    const listeners = new Listeners();
    listeners.increment();
    return core.flatMap(core.deferredMake(), ref => ensuring(core.blocked(BlockedRequests.single(ds, BlockedRequests.makeEntry({
      request: proxy,
      result: ref,
      listeners,
      ownerId: id,
      state: {
        completed: false
      }
    })), core.deferredAwait(ref)), core.sync(() => listeners.decrement())));
  });
}));
/** @internal */
export const cacheRequest = (request, result) => {
  return core.fiberRefGetWith(currentCacheEnabled, cacheEnabled => {
    if (cacheEnabled) {
      return core.fiberRefGetWith(currentCache, cache => core.flatMap(cache.getEither(request), orNew => {
        switch (orNew._tag) {
          case "Left":
            {
              return core.void;
            }
          case "Right":
            {
              return core.deferredComplete(orNew.right.handle, result);
            }
        }
      }));
    }
    return core.void;
  });
};
/** @internal */
export const withRequestCaching = /*#__PURE__*/dual(2, (self, strategy) => core.fiberRefLocally(self, currentCacheEnabled, strategy));
/** @internal */
export const withRequestCache = /*#__PURE__*/dual(2,
// @ts-expect-error
(self, cache) => core.fiberRefLocally(self, currentCache, cache));
//# sourceMappingURL=query.js.map