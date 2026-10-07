/**
 * @since 2.0.0
 */
import * as RA from "./Array.js"
import * as Context from "./Context.js"
import type * as Effect from "./Effect.js"
import * as Equal from "./Equal.js"
import type * as Fiber from "./Fiber.js"
import { pipe } from "./Function.js"
import * as effect from "./internal/core-effect.js"
import * as core from "./internal/core.js"
import * as fiber from "./internal/fiber.js"
import * as MutableRef from "./MutableRef.js"
import { hasProperty } from "./Predicate.js"
import * as Ref from "./Ref.js"
import * as SortedSet from "./SortedSet.js"
import * as TestAnnotation from "./TestAnnotation.js"
import * as TestAnnotationMap from "./TestAnnotationMap.js"

/**
 * @since 2.0.0
 */
export const TestAnnotationsTypeId: unique symbol = Symbol.for("effect/TestAnnotations")

/**
 * @since 2.0.0
 */
export type TestAnnotationsTypeId = typeof TestAnnotationsTypeId

/**
 * The `Annotations` trait provides access to an annotation map that tests can
 * add arbitrary annotations to. Each annotation consists of a string
 * identifier, an initial value, and a function for combining two values.
 * Annotations form monoids and you can think of `Annotations` as a more
 * structured logging service or as a super polymorphic version of the writer
 * monad effect.
 *
 * @since 2.0.0
 */
export interface TestAnnotations {
  readonly [TestAnnotationsTypeId]: TestAnnotationsTypeId

  /**
   * A ref containing the bacnking map for all annotations
   */
  readonly ref: Ref.Ref<TestAnnotationMap.TestAnnotationMap>

  /**
   * Accesses an `Annotations` instance in the context and retrieves the
   * annotation of the specified type, or its default value if there is none.
   */
  get<A>(key: TestAnnotation.TestAnnotation<A>): Effect.Effect<A>

  /**
   * Accesses an `Annotations` instance in the context and appends the
   * specified annotation to the annotation map.
   */
  annotate<A>(key: TestAnnotation.TestAnnotation<A>, value: A): Effect.Effect<void>

  /**
   * Returns the set of all fibers in this test.
   */
  readonly supervisedFibers: Effect.Effect<
    SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>
  >
}

/** @internal */
class AnnotationsImpl implements TestAnnotations {
  readonly [TestAnnotationsTypeId]: TestAnnotationsTypeId = TestAnnotationsTypeId
  constructor(readonly ref: Ref.Ref<TestAnnotationMap.TestAnnotationMap>) {
  }
  get<A>(key: TestAnnotation.TestAnnotation<A>): Effect.Effect<A> {
    return core.map(Ref.get(this.ref), TestAnnotationMap.get(key))
  }
  annotate<A>(key: TestAnnotation.TestAnnotation<A>, value: A): Effect.Effect<void> {
    return Ref.update(this.ref, TestAnnotationMap.annotate(key, value))
  }
  get supervisedFibers(): Effect.Effect<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>> {
    return effect.descriptorWith((descriptor) =>
      core.flatMap(this.get(TestAnnotation.fibers), (either) => {
        switch (either._tag) {
          case "Left": {
            return core.succeed(SortedSet.empty(fiber.Order))
          }
          case "Right": {
            return pipe(
              either.right,
              core.forEachSequential((ref) => core.sync(() => MutableRef.get(ref))),
              core.map(RA.reduce(SortedSet.empty(fiber.Order), (a, b) => SortedSet.union(a, b))),
              core.map(SortedSet.filter((fiber) => !Equal.equals(fiber.id(), descriptor.id)))
            )
          }
        }
      })
    )
  }
}

/**
 * @since 2.0.0
 */
export const TestAnnotations: Context.Tag<TestAnnotations, TestAnnotations> = Context.GenericTag<TestAnnotations>(
  "effect/Annotations"
)

/**
 * @since 2.0.0
 */
export const isTestAnnotations = (u: unknown): u is TestAnnotations => hasProperty(u, TestAnnotationsTypeId)

/**
 * @since 2.0.0
 */
export const make = (
  ref: Ref.Ref<TestAnnotationMap.TestAnnotationMap>
): TestAnnotations => new AnnotationsImpl(ref)
