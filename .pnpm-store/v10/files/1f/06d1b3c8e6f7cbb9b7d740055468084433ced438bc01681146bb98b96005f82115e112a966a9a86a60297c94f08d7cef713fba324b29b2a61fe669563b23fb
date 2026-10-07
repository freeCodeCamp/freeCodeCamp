"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.isRight = exports.isLeft = exports.isEither = exports.isBoth = exports.fromInput = exports.Right = exports.Left = exports.Either = exports.Both = void 0;
var _Function = require("../../Function.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/streamHaltStrategy.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const Left = exports.Left = {
  _tag: OpCodes.OP_LEFT
};
/** @internal */
const Right = exports.Right = {
  _tag: OpCodes.OP_RIGHT
};
/** @internal */
const Both = exports.Both = {
  _tag: OpCodes.OP_BOTH
};
/** @internal */
const Either = exports.Either = {
  _tag: OpCodes.OP_EITHER
};
/** @internal */
const fromInput = input => {
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
exports.fromInput = fromInput;
const isLeft = self => self._tag === OpCodes.OP_LEFT;
/** @internal */
exports.isLeft = isLeft;
const isRight = self => self._tag === OpCodes.OP_RIGHT;
/** @internal */
exports.isRight = isRight;
const isBoth = self => self._tag === OpCodes.OP_BOTH;
/** @internal */
exports.isBoth = isBoth;
const isEither = self => self._tag === OpCodes.OP_EITHER;
/** @internal */
exports.isEither = isEither;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
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