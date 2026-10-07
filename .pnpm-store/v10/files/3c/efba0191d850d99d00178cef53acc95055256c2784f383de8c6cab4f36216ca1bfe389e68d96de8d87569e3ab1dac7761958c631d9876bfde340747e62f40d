/**
 * @since 2.0.0
 */
import * as Chunk from "./Chunk.js";
import * as Either from "./Either.js";
import * as Equal from "./Equal.js";
import { pipe } from "./Function.js";
import * as Hash from "./Hash.js";
import * as HashSet from "./HashSet.js";
import { getBugErrorMessage } from "./internal/errors.js";
import { hasProperty } from "./Predicate.js";
/** @internal */
const TestAnnotationSymbolKey = "effect/TestAnnotation";
/**
 * @since 2.0.0
 */
export const TestAnnotationTypeId = /*#__PURE__*/Symbol.for(TestAnnotationSymbolKey);
/** @internal */
class TestAnnotationImpl {
  identifier;
  initial;
  combine;
  [TestAnnotationTypeId] = {
    _A: _ => _
  };
  constructor(identifier, initial, combine) {
    this.identifier = identifier;
    this.initial = initial;
    this.combine = combine;
  }
  [Hash.symbol]() {
    return pipe(Hash.hash(TestAnnotationSymbolKey), Hash.combine(Hash.hash(this.identifier)), Hash.cached(this));
  }
  [Equal.symbol](that) {
    return isTestAnnotation(that) && this.identifier === that.identifier;
  }
}
/**
 * @since 2.0.0
 */
export const isTestAnnotation = u => hasProperty(u, TestAnnotationTypeId);
/**
 * @since 2.0.0
 */
export const make = (identifier, initial, combine) => {
  return new TestAnnotationImpl(identifier, initial, combine);
};
/**
 * @since 2.0.0
 */
export const compose = (left, right) => {
  if (Either.isLeft(left) && Either.isLeft(right)) {
    return Either.left(left.left + right.left);
  }
  if (Either.isRight(left) && Either.isRight(right)) {
    return Either.right(pipe(left.right, Chunk.appendAll(right.right)));
  }
  if (Either.isRight(left) && Either.isLeft(right)) {
    return right;
  }
  if (Either.isLeft(left) && Either.isRight(right)) {
    return right;
  }
  throw new Error(getBugErrorMessage("TestAnnotation.compose"));
};
/**
 * @since 2.0.0
 */
export const fibers = /*#__PURE__*/make("fibers", /*#__PURE__*/Either.left(0), compose);
/**
 * An annotation which counts ignored tests.
 *
 * @since 2.0.0
 */
export const ignored = /*#__PURE__*/make("ignored", 0, (a, b) => a + b);
/**
 * An annotation which counts repeated tests.
 *
 * @since 2.0.0
 */
export const repeated = /*#__PURE__*/make("repeated", 0, (a, b) => a + b);
/**
 * An annotation which counts retried tests.
 *
 * @since 2.0.0
 */
export const retried = /*#__PURE__*/make("retried", 0, (a, b) => a + b);
/**
 * An annotation which tags tests with strings.
 *
 * @since 2.0.0
 */
export const tagged = /*#__PURE__*/make("tagged", /*#__PURE__*/HashSet.empty(), (a, b) => pipe(a, HashSet.union(b)));
//# sourceMappingURL=TestAnnotation.js.map