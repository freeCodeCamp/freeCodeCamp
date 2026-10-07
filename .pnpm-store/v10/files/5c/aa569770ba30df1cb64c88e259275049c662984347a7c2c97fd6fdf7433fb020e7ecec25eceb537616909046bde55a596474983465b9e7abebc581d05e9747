/**
 * @since 2.0.0
 */
import { dual } from "./Function.js";
import * as HashMap from "./HashMap.js";
import { hasProperty } from "./Predicate.js";
/**
 * @since 2.0.0
 */
export const TestAnnotationMapTypeId = /*#__PURE__*/Symbol.for("effect/TestAnnotationMap");
/** @internal */
class TestAnnotationMapImpl {
  map;
  [TestAnnotationMapTypeId] = TestAnnotationMapTypeId;
  constructor(map) {
    this.map = map;
  }
}
/**
 * @since 2.0.0
 */
export const isTestAnnotationMap = u => hasProperty(u, TestAnnotationMapTypeId);
/**
 * @since 2.0.0
 */
export const empty = () => new TestAnnotationMapImpl(HashMap.empty());
/**
 * @since 2.0.0
 */
export const make = map => {
  return new TestAnnotationMapImpl(map);
};
/**
 * @since 2.0.0
 */
export const overwrite = /*#__PURE__*/dual(3, (self, key, value) => make(HashMap.set(self.map, key, value)));
/**
 * @since 2.0.0
 */
export const update = /*#__PURE__*/dual(3, (self, key, f) => {
  let value = key.initial;
  if (HashMap.has(self.map, key)) {
    value = HashMap.unsafeGet(self.map, key);
  }
  return overwrite(self, key, f(value));
});
/**
 * Retrieves the annotation of the specified type, or its default value if
 * there is none.
 *
 * @since 2.0.0
 */
export const get = /*#__PURE__*/dual(2, (self, key) => {
  if (HashMap.has(self.map, key)) {
    return HashMap.unsafeGet(self.map, key);
  }
  return key.initial;
});
/**
 * Appends the specified annotation to the annotation map.
 *
 * @since 2.0.0
 */
export const annotate = /*#__PURE__*/dual(3, (self, key, value) => update(self, key, _ => key.combine(_, value)));
/**
 * @since 2.0.0
 */
export const combine = /*#__PURE__*/dual(2, (self, that) => {
  let result = self.map;
  for (const entry of that.map) {
    if (HashMap.has(result, entry[0])) {
      const value = HashMap.get(result, entry[0]);
      result = HashMap.set(result, entry[0], entry[0].combine(value, entry[1]));
    } else {
      result = HashMap.set(result, entry[0], entry[1]);
    }
  }
  return make(result);
});
//# sourceMappingURL=TestAnnotationMap.js.map