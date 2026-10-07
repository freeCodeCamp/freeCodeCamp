import { dual } from "../../Function.js"
import type * as HaltStrategy from "../../StreamHaltStrategy.js"
import * as OpCodes from "../opCodes/streamHaltStrategy.js"

/** @internal */
export const Left: HaltStrategy.HaltStrategy = {
  _tag: OpCodes.OP_LEFT
}

/** @internal */
export const Right: HaltStrategy.HaltStrategy = {
  _tag: OpCodes.OP_RIGHT
}

/** @internal */
export const Both: HaltStrategy.HaltStrategy = {
  _tag: OpCodes.OP_BOTH
}

/** @internal */
export const Either: HaltStrategy.HaltStrategy = {
  _tag: OpCodes.OP_EITHER
}

/** @internal */
export const fromInput = (input: HaltStrategy.HaltStrategyInput): HaltStrategy.HaltStrategy => {
  switch (input) {
    case "left":
      return Left
    case "right":
      return Right
    case "both":
      return Both
    case "either":
      return Either
    default:
      return input
  }
}

/** @internal */
export const isLeft = (self: HaltStrategy.HaltStrategy): self is HaltStrategy.Left => self._tag === OpCodes.OP_LEFT

/** @internal */
export const isRight = (self: HaltStrategy.HaltStrategy): self is HaltStrategy.Right => self._tag === OpCodes.OP_RIGHT

/** @internal */
export const isBoth = (self: HaltStrategy.HaltStrategy): self is HaltStrategy.Both => self._tag === OpCodes.OP_BOTH

/** @internal */
export const isEither = (self: HaltStrategy.HaltStrategy): self is HaltStrategy.Either =>
  self._tag === OpCodes.OP_EITHER

/** @internal */
export const match = dual<
  <Z>(options: {
    readonly onLeft: () => Z
    readonly onRight: () => Z
    readonly onBoth: () => Z
    readonly onEither: () => Z
  }) => (self: HaltStrategy.HaltStrategy) => Z,
  <Z>(
    self: HaltStrategy.HaltStrategy,
    options: {
      readonly onLeft: () => Z
      readonly onRight: () => Z
      readonly onBoth: () => Z
      readonly onEither: () => Z
    }
  ) => Z
>(2, <Z>(
  self: HaltStrategy.HaltStrategy,
  options: {
    readonly onLeft: () => Z
    readonly onRight: () => Z
    readonly onBoth: () => Z
    readonly onEither: () => Z
  }
): Z => {
  switch (self._tag) {
    case OpCodes.OP_LEFT: {
      return options.onLeft()
    }
    case OpCodes.OP_RIGHT: {
      return options.onRight()
    }
    case OpCodes.OP_BOTH: {
      return options.onBoth()
    }
    case OpCodes.OP_EITHER: {
      return options.onEither()
    }
  }
})
