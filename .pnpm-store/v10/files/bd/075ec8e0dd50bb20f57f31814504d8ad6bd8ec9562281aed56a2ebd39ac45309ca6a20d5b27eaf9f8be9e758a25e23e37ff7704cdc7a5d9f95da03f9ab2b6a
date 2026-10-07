import { dual } from "../../Function.js"
import type * as Option from "../../Option.js"
import { hasProperty } from "../../Predicate.js"
import type * as UpstreamPullStrategy from "../../UpstreamPullStrategy.js"
import * as OpCodes from "../opCodes/channelUpstreamPullStrategy.js"

/** @internal */
const UpstreamPullStrategySymbolKey = "effect/ChannelUpstreamPullStrategy"

/** @internal */
export const UpstreamPullStrategyTypeId: UpstreamPullStrategy.UpstreamPullStrategyTypeId = Symbol.for(
  UpstreamPullStrategySymbolKey
) as UpstreamPullStrategy.UpstreamPullStrategyTypeId

const upstreamPullStrategyVariance = {
  /* c8 ignore next */
  _A: (_: never) => _
}

/** @internal */
const proto = {
  [UpstreamPullStrategyTypeId]: upstreamPullStrategyVariance
}

/** @internal */
export const PullAfterNext = <A>(emitSeparator: Option.Option<A>): UpstreamPullStrategy.UpstreamPullStrategy<A> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_PULL_AFTER_NEXT
  op.emitSeparator = emitSeparator
  return op
}

/** @internal */
export const PullAfterAllEnqueued = <A>(
  emitSeparator: Option.Option<A>
): UpstreamPullStrategy.UpstreamPullStrategy<A> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_PULL_AFTER_ALL_ENQUEUED
  op.emitSeparator = emitSeparator
  return op
}

/** @internal */
export const isUpstreamPullStrategy = (u: unknown): u is UpstreamPullStrategy.UpstreamPullStrategy<unknown> =>
  hasProperty(u, UpstreamPullStrategyTypeId)

/** @internal */
export const isPullAfterNext = <A>(
  self: UpstreamPullStrategy.UpstreamPullStrategy<A>
): self is UpstreamPullStrategy.PullAfterNext<A> => self._tag === OpCodes.OP_PULL_AFTER_NEXT

/** @internal */
export const isPullAfterAllEnqueued = <A>(
  self: UpstreamPullStrategy.UpstreamPullStrategy<A>
): self is UpstreamPullStrategy.PullAfterAllEnqueued<A> => self._tag === OpCodes.OP_PULL_AFTER_ALL_ENQUEUED

/** @internal */
export const match = dual<
  <A, Z>(
    options: {
      readonly onNext: (emitSeparator: Option.Option<A>) => Z
      readonly onAllEnqueued: (emitSeparator: Option.Option<A>) => Z
    }
  ) => (self: UpstreamPullStrategy.UpstreamPullStrategy<A>) => Z,
  <A, Z>(
    self: UpstreamPullStrategy.UpstreamPullStrategy<A>,
    options: {
      readonly onNext: (emitSeparator: Option.Option<A>) => Z
      readonly onAllEnqueued: (emitSeparator: Option.Option<A>) => Z
    }
  ) => Z
>(2, <A, Z>(
  self: UpstreamPullStrategy.UpstreamPullStrategy<A>,
  { onAllEnqueued, onNext }: {
    readonly onNext: (emitSeparator: Option.Option<A>) => Z
    readonly onAllEnqueued: (emitSeparator: Option.Option<A>) => Z
  }
): Z => {
  switch (self._tag) {
    case OpCodes.OP_PULL_AFTER_NEXT: {
      return onNext(self.emitSeparator)
    }
    case OpCodes.OP_PULL_AFTER_ALL_ENQUEUED: {
      return onAllEnqueued(self.emitSeparator)
    }
  }
})
