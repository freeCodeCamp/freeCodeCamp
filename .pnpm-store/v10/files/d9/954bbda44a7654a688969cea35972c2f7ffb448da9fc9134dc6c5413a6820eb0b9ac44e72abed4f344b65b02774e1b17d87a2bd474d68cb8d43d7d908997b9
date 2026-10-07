"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suspend = exports.done = void 0;
var OpCodes = _interopRequireWildcard(require("./opCodes/tryCommit.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const done = exit => {
  return {
    _tag: OpCodes.OP_DONE,
    exit
  };
};
/** @internal */
exports.done = done;
const suspend = journal => {
  return {
    _tag: OpCodes.OP_SUSPEND,
    journal
  };
};
exports.suspend = suspend;
//# sourceMappingURL=tryCommit.js.map