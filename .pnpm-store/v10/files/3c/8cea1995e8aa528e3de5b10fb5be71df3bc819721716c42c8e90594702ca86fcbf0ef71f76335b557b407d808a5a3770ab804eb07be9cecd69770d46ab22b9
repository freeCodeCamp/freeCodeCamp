"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.race = exports.provideContext = exports.never = exports.mapInputContext = exports.makeWithEntry = exports.makeBatched = exports.make = exports.fromFunctionBatched = exports.fromFunction = exports.fromEffectTagged = exports.fromEffect = exports.eitherWith = exports.batchN = exports.aroundRequests = exports.around = void 0;
var RA = _interopRequireWildcard(require("../Array.js"));
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var _Function = require("../Function.js");
var core = _interopRequireWildcard(require("./core.js"));
var _fiberRuntime = require("./fiberRuntime.js");
var _request = require("./request.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const make = runAll => new core.RequestResolverImpl(requests => runAll(requests.map(_ => _.map(_ => _.request))));
/** @internal */
exports.make = make;
const makeWithEntry = runAll => new core.RequestResolverImpl(requests => runAll(requests));
/** @internal */
exports.makeWithEntry = makeWithEntry;
const makeBatched = run => new core.RequestResolverImpl(requests => {
  if (requests.length > 1) {
    return core.forEachSequentialDiscard(requests, block => {
      const filtered = block.filter(_ => !_.state.completed).map(_ => _.request);
      if (!RA.isNonEmptyArray(filtered)) {
        return core.void;
      }
      return (0, _fiberRuntime.invokeWithInterrupt)(run(filtered), block);
    });
  } else if (requests.length === 1) {
    const filtered = requests[0].filter(_ => !_.state.completed).map(_ => _.request);
    if (!RA.isNonEmptyArray(filtered)) {
      return core.void;
    }
    return run(filtered);
  }
  return core.void;
});
/** @internal */
exports.makeBatched = makeBatched;
const around = exports.around = /*#__PURE__*/(0, _Function.dual)(3, (self, before, after) => new core.RequestResolverImpl(requests => core.acquireUseRelease(before, () => self.runAll(requests), after), Chunk.make("Around", self, before, after)));
/** @internal */
const aroundRequests = exports.aroundRequests = /*#__PURE__*/(0, _Function.dual)(3, (self, before, after) => new core.RequestResolverImpl(requests => {
  const flatRequests = requests.flatMap(chunk => chunk.map(entry => entry.request));
  return core.acquireUseRelease(before(flatRequests), () => self.runAll(requests), a2 => after(flatRequests, a2));
}, Chunk.make("AroundRequests", self, before, after)));
/** @internal */
const batchN = exports.batchN = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => new core.RequestResolverImpl(requests => {
  return n < 1 ? core.die(new Cause.IllegalArgumentException("RequestResolver.batchN: n must be at least 1")) : self.runAll(Array.from(Chunk.map(RA.reduce(requests, Chunk.empty(), (acc, chunk) => Chunk.appendAll(acc, Chunk.chunksOf(Chunk.unsafeFromArray(chunk), n))), chunk => Array.from(chunk))));
}, Chunk.make("BatchN", self, n)));
/** @internal */
const mapInputContext = exports.mapInputContext = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new core.RequestResolverImpl(requests => core.mapInputContext(self.runAll(requests), context => f(context)), Chunk.make("MapInputContext", self, f)));
/** @internal */
const eitherWith = exports.eitherWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => new core.RequestResolverImpl(batch => core.forEachSequential(batch, requests => {
  const [as, bs] = (0, _Function.pipe)(requests, RA.partitionMap(f));
  return (0, _fiberRuntime.zipWithOptions)(self.runAll(Array.of(as)), that.runAll(Array.of(bs)), () => void 0, {
    concurrent: true
  });
}), Chunk.make("EitherWith", self, that, f)));
/** @internal */
const fromFunction = f => makeBatched(requests => core.forEachSequentialDiscard(requests, request => (0, _request.complete)(request, core.exitSucceed(f(request))))).identified("FromFunction", f);
/** @internal */
exports.fromFunction = fromFunction;
const fromFunctionBatched = f => makeBatched(as => Effect.forEach(f(as), (res, i) => (0, _request.complete)(as[i], core.exitSucceed(res)), {
  discard: true
})).identified("FromFunctionBatched", f);
/** @internal */
exports.fromFunctionBatched = fromFunctionBatched;
const fromEffect = f => makeBatched(requests => Effect.forEach(requests, a => Effect.flatMap(Effect.exit(f(a)), e => (0, _request.complete)(a, e)), {
  concurrency: "unbounded",
  discard: true
})).identified("FromEffect", f);
/** @internal */
exports.fromEffect = fromEffect;
const fromEffectTagged = () => fns => makeBatched(requests => {
  const grouped = {};
  const tags = [];
  for (let i = 0, len = requests.length; i < len; i++) {
    if (tags.includes(requests[i]._tag)) {
      grouped[requests[i]._tag].push(requests[i]);
    } else {
      grouped[requests[i]._tag] = [requests[i]];
      tags.push(requests[i]._tag);
    }
  }
  return Effect.forEach(tags, tag => Effect.matchCauseEffect(fns[tag](grouped[tag]), {
    onFailure: cause => Effect.forEach(grouped[tag], req => (0, _request.complete)(req, core.exitFail(cause)), {
      discard: true
    }),
    onSuccess: res => Effect.forEach(grouped[tag], (req, i) => (0, _request.complete)(req, core.exitSucceed(res[i])), {
      discard: true
    })
  }), {
    concurrency: "unbounded",
    discard: true
  });
}).identified("FromEffectTagged", fns);
/** @internal */
exports.fromEffectTagged = fromEffectTagged;
const never = exports.never = /*#__PURE__*/make(() => Effect.never).identified("Never");
/** @internal */
const provideContext = exports.provideContext = /*#__PURE__*/(0, _Function.dual)(2, (self, context) => mapInputContext(self, _ => context).identified("ProvideContext", self, context));
/** @internal */
const race = exports.race = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => new core.RequestResolverImpl(requests => Effect.race(self.runAll(requests), that.runAll(requests))).identified("Race", self, that));
//# sourceMappingURL=dataSource.js.map