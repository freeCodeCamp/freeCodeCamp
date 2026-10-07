import type * as ChildExecutorDecision from "../../ChildExecutorDecision.js"
import { dual } from "../../Function.js"
import { hasProperty } from "../../Predicate.js"
import * as OpCodes from "../opCodes/channelChildExecutorDecision.js"

/** @internal */
const ChildExecutorDecisionSymbolKey = "effect/ChannelChildExecutorDecision"

/** @internal */
export const ChildExecutorDecisionTypeId: ChildExecutorDecision.ChildExecutorDecisionTypeId = Symbol.for(
  ChildExecutorDecisionSymbolKey
) as ChildExecutorDecision.ChildExecutorDecisionTypeId

/** @internal */
const proto = {
  [ChildExecutorDecisionTypeId]: ChildExecutorDecisionTypeId
}

/** @internal */
export const Continue = (_: void): ChildExecutorDecision.ChildExecutorDecision => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_CONTINUE
  return op
}

/** @internal */
export const Close = (value: unknown): ChildExecutorDecision.ChildExecutorDecision => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_CLOSE
  op.value = value
  return op
}

/** @internal */
export const Yield = (_: void): ChildExecutorDecision.ChildExecutorDecision => {
  const op = Object.create(proto)
  op._tag = OpCodes.OP_YIELD
  return op
}

/** @internal */
export const isChildExecutorDecision = (u: unknown): u is ChildExecutorDecision.ChildExecutorDecision =>
  hasProperty(u, ChildExecutorDecisionTypeId)

/** @internal */
export const isContinue = (
  self: ChildExecutorDecision.ChildExecutorDecision
): self is ChildExecutorDecision.Continue => self._tag === OpCodes.OP_CONTINUE

/** @internal */
export const isClose = (
  self: ChildExecutorDecision.ChildExecutorDecision
): self is ChildExecutorDecision.Close => self._tag === OpCodes.OP_CLOSE

/** @internal */
export const isYield = (
  self: ChildExecutorDecision.ChildExecutorDecision
): self is ChildExecutorDecision.Yield => self._tag === OpCodes.OP_YIELD

/** @internal */
export const match = dual<
  <A>(
    options: {
      readonly onContinue: () => A
      readonly onClose: (value: unknown) => A
      readonly onYield: () => A
    }
  ) => (self: ChildExecutorDecision.ChildExecutorDecision) => A,
  <A>(
    self: ChildExecutorDecision.ChildExecutorDecision,
    options: {
      readonly onContinue: () => A
      readonly onClose: (value: unknown) => A
      readonly onYield: () => A
    }
  ) => A
>(2, <A>(
  self: ChildExecutorDecision.ChildExecutorDecision,
  { onClose, onContinue, onYield }: {
    readonly onContinue: () => A
    readonly onClose: (value: unknown) => A
    readonly onYield: () => A
  }
): A => {
  switch (self._tag) {
    case OpCodes.OP_CONTINUE: {
      return onContinue()
    }
    case OpCodes.OP_CLOSE: {
      return onClose(self.value)
    }
    case OpCodes.OP_YIELD: {
      return onYield()
    }
  }
})
