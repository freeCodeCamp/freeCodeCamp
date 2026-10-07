"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromDequeue = exports.failCause = exports.fail = exports.end = exports.empty = exports.emitChunk = exports.emit = void 0;
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var Queue = _interopRequireWildcard(require("../../Queue.js"));
var take = _interopRequireWildcard(require("../take.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const emit = value => Effect.succeed(Chunk.of(value));
/** @internal */
exports.emit = emit;
const emitChunk = chunk => Effect.succeed(chunk);
/** @internal */
exports.emitChunk = emitChunk;
const empty = () => Effect.succeed(Chunk.empty());
/** @internal */
exports.empty = empty;
const end = () => Effect.fail(Option.none());
/** @internal */
exports.end = end;
const fail = error => Effect.fail(Option.some(error));
/** @internal */
exports.fail = fail;
const failCause = cause => Effect.mapError(Effect.failCause(cause), Option.some);
/** @internal */
exports.failCause = failCause;
const fromDequeue = dequeue => Effect.flatMap(Queue.take(dequeue), take.done);
exports.fromDequeue = fromDequeue;
//# sourceMappingURL=pull.js.map