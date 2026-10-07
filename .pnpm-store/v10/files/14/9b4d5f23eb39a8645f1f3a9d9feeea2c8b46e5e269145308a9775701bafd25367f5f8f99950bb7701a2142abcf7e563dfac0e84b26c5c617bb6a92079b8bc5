"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.make = exports.invalidate = exports.get = exports.TypeId = void 0;
var Context = _interopRequireWildcard(require("../Context.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Effectable = _interopRequireWildcard(require("../Effectable.js"));
var _Function = require("../Function.js");
var Readable = _interopRequireWildcard(require("../Readable.js"));
var coreEffect = _interopRequireWildcard(require("./core-effect.js"));
var core = _interopRequireWildcard(require("./core.js"));
var circular = _interopRequireWildcard(require("./effect/circular.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TypeId = exports.TypeId = /*#__PURE__*/Symbol.for("effect/RcRef");
const stateEmpty = {
  _tag: "Empty"
};
const stateClosed = {
  _tag: "Closed"
};
const variance = {
  _A: _Function.identity,
  _E: _Function.identity
};
class RcRefImpl extends Effectable.Class {
  acquire;
  context;
  scope;
  idleTimeToLive;
  [TypeId] = variance;
  [Readable.TypeId] = Readable.TypeId;
  state = stateEmpty;
  semaphore = /*#__PURE__*/circular.unsafeMakeSemaphore(1);
  constructor(acquire, context, scope, idleTimeToLive) {
    super();
    this.acquire = acquire;
    this.context = context;
    this.scope = scope;
    this.idleTimeToLive = idleTimeToLive;
    this.get = get(this);
  }
  get;
  commit() {
    return this.get;
  }
}
/** @internal */
const make = options => core.withFiberRuntime(fiber => {
  const context = fiber.getFiberRef(core.currentContext);
  const scope = Context.get(context, fiberRuntime.scopeTag);
  const ref = new RcRefImpl(options.acquire, context, scope, options.idleTimeToLive ? Duration.decode(options.idleTimeToLive) : undefined);
  return core.as(scope.addFinalizer(() => ref.semaphore.withPermits(1)(core.suspend(() => {
    const close = ref.state._tag === "Acquired" ? core.scopeClose(ref.state.scope, core.exitVoid) : core.void;
    ref.state = stateClosed;
    return close;
  }))), ref);
});
/** @internal */
exports.make = make;
const get = self_ => {
  const self = self_;
  const isInfinite = self.idleTimeToLive && !Duration.isFinite(self.idleTimeToLive);
  return core.uninterruptibleMask(restore => core.suspend(() => {
    switch (self.state._tag) {
      case "Closed":
        {
          return core.interrupt;
        }
      case "Acquired":
        {
          self.state.refCount++;
          return self.state.fiber ? core.as(core.interruptFiber(self.state.fiber), self.state) : core.succeed(self.state);
        }
      case "Empty":
        {
          return fiberRuntime.scopeMake().pipe(coreEffect.bindTo("scope"), coreEffect.bind("value", ({
            scope
          }) => restore(core.fiberRefLocally(self.acquire, core.currentContext, Context.add(self.context, fiberRuntime.scopeTag, scope)))), core.map(({
            scope,
            value
          }) => {
            const state = {
              _tag: "Acquired",
              value,
              scope,
              fiber: undefined,
              refCount: 1
            };
            self.state = state;
            return state;
          }));
        }
    }
  })).pipe(self.semaphore.withPermits(1), coreEffect.bindTo("state"), coreEffect.bind("scope", () => fiberRuntime.scopeTag), core.tap(({
    scope,
    state
  }) => scope.addFinalizer(() => core.suspend(() => {
    state.refCount--;
    if (state.refCount > 0 || isInfinite) {
      return core.void;
    }
    if (self.idleTimeToLive === undefined) {
      self.state = stateEmpty;
      return core.scopeClose(state.scope, core.exitVoid);
    }
    return coreEffect.sleep(self.idleTimeToLive).pipe(core.interruptible, core.zipRight(core.suspend(() => {
      if (self.state._tag === "Acquired" && self.state.refCount === 0) {
        self.state = stateEmpty;
        return core.scopeClose(state.scope, core.exitVoid);
      }
      return core.void;
    })), fiberRuntime.ensuring(core.sync(() => {
      state.fiber = undefined;
    })), circular.forkIn(self.scope), core.tap(fiber => {
      state.fiber = fiber;
    }), self.semaphore.withPermits(1));
  }))), core.map(({
    state
  }) => state.value));
};
/** @internal */
exports.get = get;
const invalidate = self_ => {
  const self = self_;
  return core.uninterruptible(core.suspend(() => {
    if (self.state._tag !== "Acquired") {
      return core.void;
    }
    const state = self.state;
    self.state = stateEmpty;
    return state.scope.close(core.exitVoid);
  }));
};
exports.invalidate = invalidate;
//# sourceMappingURL=rcRef.js.map