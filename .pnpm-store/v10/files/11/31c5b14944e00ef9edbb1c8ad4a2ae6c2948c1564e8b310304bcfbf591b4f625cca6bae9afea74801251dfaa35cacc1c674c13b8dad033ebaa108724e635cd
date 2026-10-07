import { dual } from "./Function.js";
import * as core from "./internal/core.js";
import { pipeArguments } from "./Pipeable.js";
import { hasProperty } from "./Predicate.js";
/**
 * @since 2.0.0
 * @category type ids
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/Readable");
/**
 * @since 2.0.0
 * @category refinements
 */
export const isReadable = u => hasProperty(u, TypeId);
const Proto = {
  [TypeId]: TypeId,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = get => {
  const self = Object.create(Proto);
  self.get = get;
  return self;
};
/**
 * @since 2.0.0
 * @category combinators
 */
export const map = /*#__PURE__*/dual(2, (self, f) => make(core.map(self.get, f)));
/**
 * @since 2.0.0
 * @category combinators
 */
export const mapEffect = /*#__PURE__*/dual(2, (self, f) => make(core.flatMap(self.get, f)));
/**
 * @since 2.0.0
 * @category constructors
 */
export const unwrap = effect => make(core.flatMap(effect, s => s.get));
//# sourceMappingURL=Readable.js.map