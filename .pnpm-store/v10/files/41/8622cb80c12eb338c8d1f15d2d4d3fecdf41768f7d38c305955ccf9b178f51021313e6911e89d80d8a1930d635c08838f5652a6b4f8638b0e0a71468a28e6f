import * as Equal from "../../Equal.js"
import * as Hash from "../../Hash.js"
import type * as MetricLabel from "../../MetricLabel.js"
import { pipeArguments } from "../../Pipeable.js"
import { hasProperty } from "../../Predicate.js"

/** @internal */
const MetricLabelSymbolKey = "effect/MetricLabel"

/** @internal */
export const MetricLabelTypeId: MetricLabel.MetricLabelTypeId = Symbol.for(
  MetricLabelSymbolKey
) as MetricLabel.MetricLabelTypeId

/** @internal */
class MetricLabelImpl implements MetricLabel.MetricLabel {
  readonly [MetricLabelTypeId]: MetricLabel.MetricLabelTypeId = MetricLabelTypeId
  readonly _hash: number
  constructor(readonly key: string, readonly value: string) {
    this._hash = Hash.string(MetricLabelSymbolKey + this.key + this.value)
  }
  [Hash.symbol](): number {
    return this._hash
  }
  [Equal.symbol](that: unknown): boolean {
    return isMetricLabel(that) &&
      this.key === that.key &&
      this.value === that.value
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const make = (key: string, value: string): MetricLabel.MetricLabel => {
  return new MetricLabelImpl(key, value)
}

/** @internal */
export const isMetricLabel = (u: unknown): u is MetricLabel.MetricLabel => hasProperty(u, MetricLabelTypeId)
