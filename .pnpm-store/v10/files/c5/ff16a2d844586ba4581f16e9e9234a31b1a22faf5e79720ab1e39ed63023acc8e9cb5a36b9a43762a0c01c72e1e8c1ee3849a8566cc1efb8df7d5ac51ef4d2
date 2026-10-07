"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Class = void 0;
var _Pipeable = require("./Pipeable.js");
var Stream = _interopRequireWildcard(require("./Stream.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

const streamVariance = {
  /* c8 ignore next */
  _R: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
/**
 * @since 2.0.0
 * @category constructors
 */
class Class {
  /**
   * @since 2.0.0
   */
  [Stream.StreamTypeId] = streamVariance;
  /**
   * @since 2.0.0
   */
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  /**
   * @internal
   */
  get channel() {
    return Stream.toChannel(this.toStream());
  }
}
exports.Class = Class;
//# sourceMappingURL=Streamable.js.map