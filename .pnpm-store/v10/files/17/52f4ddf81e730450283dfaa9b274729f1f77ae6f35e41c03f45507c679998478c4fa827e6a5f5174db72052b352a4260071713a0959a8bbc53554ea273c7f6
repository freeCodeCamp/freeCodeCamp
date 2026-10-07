/**
 * @since 2.0.0
 */
import * as RA from "./Array.js";
import * as Context from "./Context.js";
import * as Equal from "./Equal.js";
import { pipe } from "./Function.js";
import * as effect from "./internal/core-effect.js";
import * as core from "./internal/core.js";
import * as fiber from "./internal/fiber.js";
import * as MutableRef from "./MutableRef.js";
import { hasProperty } from "./Predicate.js";
import * as Ref from "./Ref.js";
import * as SortedSet from "./SortedSet.js";
import * as TestAnnotation from "./TestAnnotation.js";
import * as TestAnnotationMap from "./TestAnnotationMap.js";
/**
 * @since 2.0.0
 */
export const TestAnnotationsTypeId = /*#__PURE__*/Symbol.for("effect/TestAnnotations");
/** @internal */
class AnnotationsImpl {
  ref;
  [TestAnnotationsTypeId] = TestAnnotationsTypeId;
  constructor(ref) {
    this.ref = ref;
  }
  get(key) {
    return core.map(Ref.get(this.ref), TestAnnotationMap.get(key));
  }
  annotate(key, value) {
    return Ref.update(this.ref, TestAnnotationMap.annotate(key, value));
  }
  get supervisedFibers() {
    return effect.descriptorWith(descriptor => core.flatMap(this.get(TestAnnotation.fibers), either => {
      switch (either._tag) {
        case "Left":
          {
            return core.succeed(SortedSet.empty(fiber.Order));
          }
        case "Right":
          {
            return pipe(either.right, core.forEachSequential(ref => core.sync(() => MutableRef.get(ref))), core.map(RA.reduce(SortedSet.empty(fiber.Order), (a, b) => SortedSet.union(a, b))), core.map(SortedSet.filter(fiber => !Equal.equals(fiber.id(), descriptor.id))));
          }
      }
    }));
  }
}
/**
 * @since 2.0.0
 */
export const TestAnnotations = /*#__PURE__*/Context.GenericTag("effect/Annotations");
/**
 * @since 2.0.0
 */
export const isTestAnnotations = u => hasProperty(u, TestAnnotationsTypeId);
/**
 * @since 2.0.0
 */
export const make = ref => new AnnotationsImpl(ref);
//# sourceMappingURL=TestAnnotations.js.map