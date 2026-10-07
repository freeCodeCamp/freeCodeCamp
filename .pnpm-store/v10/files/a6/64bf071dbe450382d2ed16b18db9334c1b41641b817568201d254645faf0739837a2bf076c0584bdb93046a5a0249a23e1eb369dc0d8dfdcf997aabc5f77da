"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRequestCaching = exports.withRequestCache = exports.fromRequest = exports.currentCacheEnabled = exports.currentCache = exports.cacheRequest = void 0;
var _Duration = require("../Duration.js");
var _Function = require("../Function.js");
var _GlobalValue = require("../GlobalValue.js");
var BlockedRequests = _interopRequireWildcard(require("./blockedRequests.js"));
var _cache = require("./cache.js");
var core = _interopRequireWildcard(require("./core.js"));
var _fiberRuntime = require("./fiberRuntime.js");
var _request = require("./request.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const currentCache = exports.currentCache = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentCache"), () => core.fiberRefUnsafeMake((0, _cache.unsafeMakeWith)(65536, () => core.map(core.deferredMake(), handle => ({
  listeners: new _request.Listeners(),
  handle
})), () => (0, _Duration.seconds)(60))));
/** @internal */
const currentCacheEnabled = exports.currentCacheEnabled = /*#__PURE__*/(0, _GlobalValue.globalValue)(/*#__PURE__*/Symbol.for("effect/FiberRef/currentCacheEnabled"), () => core.fiberRefUnsafeMake(false));
/** @internal */
const fromRequest = (request, dataSource) => core.flatMap(core.isEffect(dataSource) ? dataSource : core.succeed(dataSource), ds => core.fiberIdWith(id => {
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
    const listeners = new _request.Listeners();
    listeners.increment();
    return core.flatMap(core.deferredMake(), ref => (0, _fiberRuntime.ensuring)(core.blocked(BlockedRequests.single(ds, BlockedRequests.makeEntry({
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
exports.fromRequest = fromRequest;
const cacheRequest = (request, result) => {
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
exports.cacheRequest = cacheRequest;
const withRequestCaching = exports.withRequestCaching = /*#__PURE__*/(0, _Function.dual)(2, (self, strategy) => core.fiberRefLocally(self, currentCacheEnabled, strategy));
/** @internal */
const withRequestCache = exports.withRequestCache = /*#__PURE__*/(0, _Function.dual)(2,
// @ts-expect-error
(self, cache) => core.fiberRefLocally(self, currentCache, cache));
//# sourceMappingURL=query.js.map