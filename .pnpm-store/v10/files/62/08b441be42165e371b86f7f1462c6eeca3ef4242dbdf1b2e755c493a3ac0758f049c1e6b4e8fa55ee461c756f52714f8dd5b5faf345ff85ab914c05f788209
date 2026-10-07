import { dual } from "../../Function.js"
import type * as MergeStrategy from "../../MergeStrategy.js"
import { hasProperty } from "../../Predicate.js"
import * as OpCodes from "../opCodes/channelMergeStrategy.js"

/** @internal */
const MergeStrategySymbolKey = "effect/ChannelMergeStrategy"

/** @internal */
export const MergeStrategyTypeId: MergeStrategy.MergeStrategyTypeId = Symbol.for(
  MergeStrategySymbolKey
) as MergeStrategy.MergeStrategyTypeId

/** @internal */
const proto = {
  [MergeStrategyTypeId]: MergeStrategyTypeId
}

/** @internal */
export const BackPressure = (_: void): MergeStrategy.MergeStrategy => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_BACK_PRESSURE
  return op
}

/** @internal */
export const BufferSliding = (_: void): MergeStrategy.MergeStrategy => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_BUFFER_SLIDING
  return op
}

/** @internal */
export const isMergeStrategy = (u: unknown): u is MergeStrategy.MergeStrategy => hasProperty(u, MergeStrategyTypeId)

/** @internal */
export const isBackPressure = (self: MergeStrategy.MergeStrategy): self is MergeStrategy.BackPressure =>
  self._tag === OpCodes.OP_BACK_PRESSURE

/** @internal */
export const isBufferSliding = (self: MergeStrategy.MergeStrategy): self is MergeStrategy.BufferSliding =>
  self._tag === OpCodes.OP_BUFFER_SLIDING

/** @internal */
export const match = dual<
  <A>(options: {
    readonly onBackPressure: () => A
    readonly onBufferSliding: () => A
  }) => (self: MergeStrategy.MergeStrategy) => A,
  <A>(
    self: MergeStrategy.MergeStrategy,
    options: {
      readonly onBackPressure: () => A
      readonly onBufferSliding: () => A
    }
  ) => A
>(2, <A>(
  self: MergeStrategy.MergeStrategy,
  { onBackPressure, onBufferSliding }: {
    readonly onBackPressure: () => A
    readonly onBufferSliding: () => A
  }
): A => {
  switch (self._tag) {
    case OpCodes.OP_BACK_PRESSURE: {
      return onBackPressure()
    }
    case OpCodes.OP_BUFFER_SLIDING: {
      return onBufferSliding()
    }
  }
})
