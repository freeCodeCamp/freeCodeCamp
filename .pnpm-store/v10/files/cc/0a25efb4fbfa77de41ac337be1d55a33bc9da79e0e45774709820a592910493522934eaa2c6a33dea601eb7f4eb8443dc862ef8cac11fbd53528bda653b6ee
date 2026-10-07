/**
 * @since 2.0.0
 */
import * as Context from "./Context.js";
import * as core from "./internal/core.js";
/**
 * @since 2.0.0
 */
export const TestSizedTypeId = /*#__PURE__*/Symbol.for("effect/TestSized");
/**
 * @since 2.0.0
 */
export const TestSized = /*#__PURE__*/Context.GenericTag("effect/TestSized");
/** @internal */
class SizedImpl {
  fiberRef;
  [TestSizedTypeId] = TestSizedTypeId;
  constructor(fiberRef) {
    this.fiberRef = fiberRef;
  }
  get size() {
    return core.fiberRefGet(this.fiberRef);
  }
  withSize(size) {
    return effect => core.fiberRefLocally(this.fiberRef, size)(effect);
  }
}
/**
 * @since 2.0.0
 */
export const make = size => new SizedImpl(core.fiberRefUnsafeMake(size));
/**
 * @since 2.0.0
 */
export const fromFiberRef = fiberRef => new SizedImpl(fiberRef);
//# sourceMappingURL=TestSized.js.map