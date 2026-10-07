"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.halt = exports.end = exports.emit = exports.OP_HALT = exports.OP_END = exports.OP_EMIT = void 0;
/** @internal */
const OP_EMIT = exports.OP_EMIT = "Emit";
/** @internal */
const OP_HALT = exports.OP_HALT = "Halt";
/** @internal */
const OP_END = exports.OP_END = "End";
/** @internal */
const emit = elements => ({
  _tag: OP_EMIT,
  elements
});
/** @internal */
exports.emit = emit;
const halt = cause => ({
  _tag: OP_HALT,
  cause
});
/** @internal */
exports.halt = halt;
const end = reason => ({
  _tag: OP_END,
  reason
});
exports.end = end;
//# sourceMappingURL=handoffSignal.js.map