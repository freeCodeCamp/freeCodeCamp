import { dual } from "../../Function.js"
import { hasProperty } from "../../Predicate.js"
import type * as UpstreamPullRequest from "../../UpstreamPullRequest.js"
import * as OpCodes from "../opCodes/channelUpstreamPullRequest.js"

/** @internal */
const UpstreamPullRequestSymbolKey = "effect/ChannelUpstreamPullRequest"

/** @internal */
export const UpstreamPullRequestTypeId: UpstreamPullRequest.UpstreamPullRequestTypeId = Symbol.for(
  UpstreamPullRequestSymbolKey
) as UpstreamPullRequest.UpstreamPullRequestTypeId

const upstreamPullRequestVariance = {
  /* c8 ignore next */
  _A: (_: never) => _
}

/** @internal */
const proto = {
  [UpstreamPullRequestTypeId]: upstreamPullRequestVariance
}

/** @internal */
export const Pulled = <A>(value: A): UpstreamPullRequest.UpstreamPullRequest<A> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_PULLED
  op.value = value
  return op
}

/** @internal */
export const NoUpstream = (activeDownstreamCount: number): UpstreamPullRequest.UpstreamPullRequest<never> => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_NO_UPSTREAM
  op.activeDownstreamCount = activeDownstreamCount
  return op
}

/** @internal */
export const isUpstreamPullRequest = (u: unknown): u is UpstreamPullRequest.UpstreamPullRequest<unknown> =>
  hasProperty(u, UpstreamPullRequestTypeId)

/** @internal */
export const isPulled = <A>(
  self: UpstreamPullRequest.UpstreamPullRequest<A>
): self is UpstreamPullRequest.Pulled<A> => self._tag === OpCodes.OP_PULLED

/** @internal */
export const isNoUpstream = <A>(
  self: UpstreamPullRequest.UpstreamPullRequest<A>
): self is UpstreamPullRequest.NoUpstream => self._tag === OpCodes.OP_NO_UPSTREAM

/** @internal */
export const match = dual<
  <A, Z>(
    options: {
      readonly onPulled: (value: A) => Z
      readonly onNoUpstream: (activeDownstreamCount: number) => Z
    }
  ) => (self: UpstreamPullRequest.UpstreamPullRequest<A>) => Z,
  <A, Z>(
    self: UpstreamPullRequest.UpstreamPullRequest<A>,
    options: {
      readonly onPulled: (value: A) => Z
      readonly onNoUpstream: (activeDownstreamCount: number) => Z
    }
  ) => Z
>(2, <A, Z>(
  self: UpstreamPullRequest.UpstreamPullRequest<A>,
  { onNoUpstream, onPulled }: {
    readonly onPulled: (value: A) => Z
    readonly onNoUpstream: (activeDownstreamCount: number) => Z
  }
): Z => {
  switch (self._tag) {
    case OpCodes.OP_PULLED: {
      return onPulled(self.value)
    }
    case OpCodes.OP_NO_UPSTREAM: {
      return onNoUpstream(self.activeDownstreamCount)
    }
  }
})
