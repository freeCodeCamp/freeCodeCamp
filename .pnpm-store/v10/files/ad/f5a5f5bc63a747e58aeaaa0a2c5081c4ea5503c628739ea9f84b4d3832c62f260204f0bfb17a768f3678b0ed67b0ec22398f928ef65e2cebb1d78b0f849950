"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeTrack = exports.track = exports.none = exports.fromEffect = exports.fibersIn = exports.addSupervisor = exports.SupervisorTypeId = exports.AbstractSupervisor = void 0;
var core = _interopRequireWildcard(require("./internal/core.js"));
var circular = _interopRequireWildcard(require("./internal/layer/circular.js"));
var internal = _interopRequireWildcard(require("./internal/supervisor.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const SupervisorTypeId = exports.SupervisorTypeId = internal.SupervisorTypeId;
/**
 * @since 2.0.0
 * @category context
 */
const addSupervisor = exports.addSupervisor = circular.addSupervisor;
/**
 * Creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category constructors
 */
const fibersIn = exports.fibersIn = internal.fibersIn;
/**
 * Creates a new supervisor that constantly yields effect when polled
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffect = exports.fromEffect = internal.fromEffect;
/**
 * A supervisor that doesn't do anything in response to supervision events.
 *
 * @since 2.0.0
 * @category constructors
 */
const none = exports.none = internal.none;
/**
 * Creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category constructors
 */
const track = exports.track = internal.track;
/**
 * Unsafely creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category unsafe
 */
const unsafeTrack = exports.unsafeTrack = internal.unsafeTrack;
/**
 * @since 2.0.0
 * @category constructors
 */
class AbstractSupervisor {
  /**
   * @since 2.0.0
   */
  onStart(_context, _effect, _parent, _fiber) {
    //
  }
  /**
   * @since 2.0.0
   */
  onEnd(_value, _fiber) {
    //
  }
  /**
   * @since 2.0.0
   */
  onEffect(_fiber, _effect) {
    //
  }
  /**
   * @since 2.0.0
   */
  onSuspend(_fiber) {
    //
  }
  /**
   * @since 2.0.0
   */
  onResume(_fiber) {
    //
  }
  /**
   * @since 2.0.0
   */
  map(f) {
    return new internal.ProxySupervisor(this, core.map(this.value, f));
  }
  /**
   * @since 2.0.0
   */
  zip(right) {
    return new internal.Zip(this, right);
  }
  /**
   * @since 2.0.0
   */
  onRun(execution, _fiber) {
    return execution();
  }
  /**
   * @since 2.0.0
   */
  [SupervisorTypeId] = internal.supervisorVariance;
}
exports.AbstractSupervisor = AbstractSupervisor;
//# sourceMappingURL=Supervisor.js.map