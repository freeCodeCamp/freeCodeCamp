import * as Arr from "../../Array.js";
import * as Chunk from "../../Chunk.js";
import * as Equal from "../../Equal.js";
import { pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import { pipeArguments } from "../../Pipeable.js";
import { hasProperty } from "../../Predicate.js";
/** @internal */
const MetricBoundariesSymbolKey = "effect/MetricBoundaries";
/** @internal */
export const MetricBoundariesTypeId = /*#__PURE__*/Symbol.for(MetricBoundariesSymbolKey);
/** @internal */
class MetricBoundariesImpl {
  values;
  [MetricBoundariesTypeId] = MetricBoundariesTypeId;
  constructor(values) {
    this.values = values;
    this._hash = pipe(Hash.string(MetricBoundariesSymbolKey), Hash.combine(Hash.array(this.values)));
  }
  _hash;
  [Hash.symbol]() {
    return this._hash;
  }
  [Equal.symbol](u) {
    return isMetricBoundaries(u) && Equal.equals(this.values, u.values);
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const isMetricBoundaries = u => hasProperty(u, MetricBoundariesTypeId);
/** @internal */
export const fromIterable = iterable => {
  const values = pipe(iterable, Arr.appendAll(Chunk.of(Number.POSITIVE_INFINITY)), Arr.dedupe);
  return new MetricBoundariesImpl(values);
};
/** @internal */
export const linear = options => pipe(Arr.makeBy(options.count - 1, i => options.start + i * options.width), Chunk.unsafeFromArray, fromIterable);
/** @internal */
export const exponential = options => pipe(Arr.makeBy(options.count - 1, i => options.start * Math.pow(options.factor, i)), Chunk.unsafeFromArray, fromIterable);
//# sourceMappingURL=boundaries.js.map