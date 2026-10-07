import * as Context from "./Context.js";
import type * as Effect from "./Effect.js";
import type * as Fiber from "./Fiber.js";
import * as Ref from "./Ref.js";
import * as SortedSet from "./SortedSet.js";
import * as TestAnnotation from "./TestAnnotation.js";
import * as TestAnnotationMap from "./TestAnnotationMap.js";
/**
 * @since 2.0.0
 */
export declare const TestAnnotationsTypeId: unique symbol;
/**
 * @since 2.0.0
 */
export type TestAnnotationsTypeId = typeof TestAnnotationsTypeId;
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
    readonly [TestAnnotationsTypeId]: TestAnnotationsTypeId;
    /**
     * A ref containing the bacnking map for all annotations
     */
    readonly ref: Ref.Ref<TestAnnotationMap.TestAnnotationMap>;
    /**
     * Accesses an `Annotations` instance in the context and retrieves the
     * annotation of the specified type, or its default value if there is none.
     */
    get<A>(key: TestAnnotation.TestAnnotation<A>): Effect.Effect<A>;
    /**
     * Accesses an `Annotations` instance in the context and appends the
     * specified annotation to the annotation map.
     */
    annotate<A>(key: TestAnnotation.TestAnnotation<A>, value: A): Effect.Effect<void>;
    /**
     * Returns the set of all fibers in this test.
     */
    readonly supervisedFibers: Effect.Effect<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>>;
}
/**
 * @since 2.0.0
 */
export declare const TestAnnotations: Context.Tag<TestAnnotations, TestAnnotations>;
/**
 * @since 2.0.0
 */
export declare const isTestAnnotations: (u: unknown) => u is TestAnnotations;
/**
 * @since 2.0.0
 */
export declare const make: (ref: Ref.Ref<TestAnnotationMap.TestAnnotationMap>) => TestAnnotations;
//# sourceMappingURL=TestAnnotations.d.ts.map