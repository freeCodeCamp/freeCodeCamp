/**
 * @since 2.0.0
 */
import * as Effect from "./Effect.js";
import { dual } from "./Function.js";
import { pipeArguments } from "./Pipeable.js";
import { hasProperty } from "./Predicate.js";
import * as Readable from "./Readable.js";
import * as Stream from "./Stream.js";
/**
 * @since 2.0.0
 * @category type ids
 */
export const TypeId = /*#__PURE__*/Symbol.for("effect/Subscribable");
/**
 * @since 2.0.0
 * @category refinements
 */
export const isSubscribable = u => hasProperty(u, TypeId);
const Proto = {
  [Readable.TypeId]: Readable.TypeId,
  [TypeId]: TypeId,
  pipe() {
    return pipeArguments(this, arguments);
  }
};
/**
 * @since 2.0.0
 * @category constructors
 */
export const make = options => Object.assign(Object.create(Proto), options);
/**
 * @since 2.0.0
 * @category combinators
 */
export const map = /*#__PURE__*/dual(2, (self, f) => make({
  get: Effect.map(self.get, f),
  changes: Stream.map(self.changes, f)
}));
/**
 * @since 2.0.0
 * @category combinators
 */
export const mapEffect = /*#__PURE__*/dual(2, (self, f) => make({
  get: Effect.flatMap(self.get, f),
  changes: Stream.mapEffect(self.changes, f)
}));
/**
 * @since 2.0.0
 * @category constructors
 */
export const unwrap = effect => make({
  get: Effect.flatMap(effect, s => s.get),
  changes: Stream.unwrap(Effect.map(effect, s => s.changes))
});
//# sourceMappingURL=Subscribable.js.map