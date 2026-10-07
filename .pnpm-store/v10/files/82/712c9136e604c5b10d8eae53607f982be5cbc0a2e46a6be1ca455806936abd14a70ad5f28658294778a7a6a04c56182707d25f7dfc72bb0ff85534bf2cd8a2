import * as HashMap from "./HashMap.js";
import type * as TestAnnotation from "./TestAnnotation.js";
/**
 * @since 2.0.0
 */
export declare const TestAnnotationMapTypeId: unique symbol;
/**
 * @since 2.0.0
 */
export type TestAnnotationMapTypeId = typeof TestAnnotationMapTypeId;
/**
 * An annotation map keeps track of annotations of different types.
 *
 * @since 2.0.0
 */
export interface TestAnnotationMap {
    readonly [TestAnnotationMapTypeId]: TestAnnotationMapTypeId;
}
/**
 * @since 2.0.0
 */
export declare const isTestAnnotationMap: (u: unknown) => u is TestAnnotationMap;
/**
 * @since 2.0.0
 */
export declare const empty: (_: void) => TestAnnotationMap;
/**
 * @since 2.0.0
 */
export declare const make: (map: HashMap.HashMap<TestAnnotation.TestAnnotation<any>, any>) => TestAnnotationMap;
/**
 * @since 2.0.0
 */
export declare const overwrite: (<A>(key: TestAnnotation.TestAnnotation<A>, value: A) => (self: TestAnnotationMap) => TestAnnotationMap) & (<A>(self: TestAnnotationMap, key: TestAnnotation.TestAnnotation<A>, value: A) => TestAnnotationMap);
/**
 * @since 2.0.0
 */
export declare const update: (<A>(key: TestAnnotation.TestAnnotation<A>, f: (value: A) => A) => (self: TestAnnotationMap) => TestAnnotationMap) & (<A>(self: TestAnnotationMap, key: TestAnnotation.TestAnnotation<A>, f: (value: A) => A) => TestAnnotationMap);
/**
 * Retrieves the annotation of the specified type, or its default value if
 * there is none.
 *
 * @since 2.0.0
 */
export declare const get: (<A>(key: TestAnnotation.TestAnnotation<A>) => (self: TestAnnotationMap) => A) & (<A>(self: TestAnnotationMap, key: TestAnnotation.TestAnnotation<A>) => A);
/**
 * Appends the specified annotation to the annotation map.
 *
 * @since 2.0.0
 */
export declare const annotate: (<A>(key: TestAnnotation.TestAnnotation<A>, value: A) => (self: TestAnnotationMap) => TestAnnotationMap) & (<A>(self: TestAnnotationMap, key: TestAnnotation.TestAnnotation<A>, value: A) => TestAnnotationMap);
/**
 * @since 2.0.0
 */
export declare const combine: ((that: TestAnnotationMap) => (self: TestAnnotationMap) => TestAnnotationMap) & ((self: TestAnnotationMap, that: TestAnnotationMap) => TestAnnotationMap);
//# sourceMappingURL=TestAnnotationMap.d.ts.map