import * as core from "./internal/core.js";
import * as circular from "./internal/layer/circular.js";
import * as internal from "./internal/supervisor.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const SupervisorTypeId = internal.SupervisorTypeId;
/**
 * @since 2.0.0
 * @category context
 */
export const addSupervisor = circular.addSupervisor;
/**
 * Creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fibersIn = internal.fibersIn;
/**
 * Creates a new supervisor that constantly yields effect when polled
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffect = internal.fromEffect;
/**
 * A supervisor that doesn't do anything in response to supervision events.
 *
 * @since 2.0.0
 * @category constructors
 */
export const none = internal.none;
/**
 * Creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category constructors
 */
export const track = internal.track;
/**
 * Unsafely creates a new supervisor that tracks children in a set.
 *
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeTrack = internal.unsafeTrack;
/**
 * @since 2.0.0
 * @category constructors
 */
export class AbstractSupervisor {
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
//# sourceMappingURL=Supervisor.js.map