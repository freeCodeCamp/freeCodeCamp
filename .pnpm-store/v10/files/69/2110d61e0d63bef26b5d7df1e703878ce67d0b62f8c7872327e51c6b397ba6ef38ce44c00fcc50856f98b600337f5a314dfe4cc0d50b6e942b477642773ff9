import * as RA from "../Array.js";
import * as Cause from "../Cause.js";
import * as Chunk from "../Chunk.js";
import * as Effect from "../Effect.js";
import { dual, pipe } from "../Function.js";
import * as core from "./core.js";
import { invokeWithInterrupt, zipWithOptions } from "./fiberRuntime.js";
import { complete } from "./request.js";
/** @internal */
export const make = runAll => new core.RequestResolverImpl(requests => runAll(requests.map(_ => _.map(_ => _.request))));
/** @internal */
export const makeWithEntry = runAll => new core.RequestResolverImpl(requests => runAll(requests));
/** @internal */
export const makeBatched = run => new core.RequestResolverImpl(requests => {
  if (requests.length > 1) {
    return core.forEachSequentialDiscard(requests, block => {
      const filtered = block.filter(_ => !_.state.completed).map(_ => _.request);
      if (!RA.isNonEmptyArray(filtered)) {
        return core.void;
      }
      return invokeWithInterrupt(run(filtered), block);
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
export const around = /*#__PURE__*/dual(3, (self, before, after) => new core.RequestResolverImpl(requests => core.acquireUseRelease(before, () => self.runAll(requests), after), Chunk.make("Around", self, before, after)));
/** @internal */
export const aroundRequests = /*#__PURE__*/dual(3, (self, before, after) => new core.RequestResolverImpl(requests => {
  const flatRequests = requests.flatMap(chunk => chunk.map(entry => entry.request));
  return core.acquireUseRelease(before(flatRequests), () => self.runAll(requests), a2 => after(flatRequests, a2));
}, Chunk.make("AroundRequests", self, before, after)));
/** @internal */
export const batchN = /*#__PURE__*/dual(2, (self, n) => new core.RequestResolverImpl(requests => {
  return n < 1 ? core.die(new Cause.IllegalArgumentException("RequestResolver.batchN: n must be at least 1")) : self.runAll(Array.from(Chunk.map(RA.reduce(requests, Chunk.empty(), (acc, chunk) => Chunk.appendAll(acc, Chunk.chunksOf(Chunk.unsafeFromArray(chunk), n))), chunk => Array.from(chunk))));
}, Chunk.make("BatchN", self, n)));
/** @internal */
export const mapInputContext = /*#__PURE__*/dual(2, (self, f) => new core.RequestResolverImpl(requests => core.mapInputContext(self.runAll(requests), context => f(context)), Chunk.make("MapInputContext", self, f)));
/** @internal */
export const eitherWith = /*#__PURE__*/dual(3, (self, that, f) => new core.RequestResolverImpl(batch => core.forEachSequential(batch, requests => {
  const [as, bs] = pipe(requests, RA.partitionMap(f));
  return zipWithOptions(self.runAll(Array.of(as)), that.runAll(Array.of(bs)), () => void 0, {
    concurrent: true
  });
}), Chunk.make("EitherWith", self, that, f)));
/** @internal */
export const fromFunction = f => makeBatched(requests => core.forEachSequentialDiscard(requests, request => complete(request, core.exitSucceed(f(request))))).identified("FromFunction", f);
/** @internal */
export const fromFunctionBatched = f => makeBatched(as => Effect.forEach(f(as), (res, i) => complete(as[i], core.exitSucceed(res)), {
  discard: true
})).identified("FromFunctionBatched", f);
/** @internal */
export const fromEffect = f => makeBatched(requests => Effect.forEach(requests, a => Effect.flatMap(Effect.exit(f(a)), e => complete(a, e)), {
  concurrency: "unbounded",
  discard: true
})).identified("FromEffect", f);
/** @internal */
export const fromEffectTagged = () => fns => makeBatched(requests => {
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
    onFailure: cause => Effect.forEach(grouped[tag], req => complete(req, core.exitFail(cause)), {
      discard: true
    }),
    onSuccess: res => Effect.forEach(grouped[tag], (req, i) => complete(req, core.exitSucceed(res[i])), {
      discard: true
    })
  }), {
    concurrency: "unbounded",
    discard: true
  });
}).identified("FromEffectTagged", fns);
/** @internal */
export const never = /*#__PURE__*/make(() => Effect.never).identified("Never");
/** @internal */
export const provideContext = /*#__PURE__*/dual(2, (self, context) => mapInputContext(self, _ => context).identified("ProvideContext", self, context));
/** @internal */
export const race = /*#__PURE__*/dual(2, (self, that) => new core.RequestResolverImpl(requests => Effect.race(self.runAll(requests), that.runAll(requests))).identified("Race", self, that));
//# sourceMappingURL=dataSource.js.map