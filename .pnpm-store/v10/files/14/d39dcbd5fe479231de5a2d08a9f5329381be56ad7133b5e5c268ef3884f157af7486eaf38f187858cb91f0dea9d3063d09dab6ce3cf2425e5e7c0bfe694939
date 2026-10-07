import { dual } from "../../Function.js";
import * as OpCodes from "../opCodes/streamHaltStrategy.js";
/** @internal */
export const Left = {
  _tag: OpCodes.OP_LEFT
};
/** @internal */
export const Right = {
  _tag: OpCodes.OP_RIGHT
};
/** @internal */
export const Both = {
  _tag: OpCodes.OP_BOTH
};
/** @internal */
export const Either = {
  _tag: OpCodes.OP_EITHER
};
/** @internal */
export const fromInput = input => {
  switch (input) {
    case "left":
      return Left;
    case "right":
      return Right;
    case "both":
      return Both;
    case "either":
      return Either;
    default:
      return input;
  }
};
/** @internal */
export const isLeft = self => self._tag === OpCodes.OP_LEFT;
/** @internal */
export const isRight = self => self._tag === OpCodes.OP_RIGHT;
/** @internal */
export const isBoth = self => self._tag === OpCodes.OP_BOTH;
/** @internal */
export const isEither = self => self._tag === OpCodes.OP_EITHER;
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, options) => {
  switch (self._tag) {
    case OpCodes.OP_LEFT:
      {
        return options.onLeft();
      }
    case OpCodes.OP_RIGHT:
      {
        return options.onRight();
      }
    case OpCodes.OP_BOTH:
      {
        return options.onBoth();
      }
    case OpCodes.OP_EITHER:
      {
        return options.onEither();
      }
  }
});
//# sourceMappingURL=haltStrategy.js.map