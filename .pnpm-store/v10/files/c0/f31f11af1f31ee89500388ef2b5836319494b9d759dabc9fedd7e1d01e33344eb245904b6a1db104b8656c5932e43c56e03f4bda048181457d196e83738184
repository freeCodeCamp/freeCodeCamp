/**
 * @since 2.0.0
 */
import * as Chunk from "./Chunk.js"
import * as Either from "./Either.js"
import * as Equal from "./Equal.js"
import type * as Fiber from "./Fiber.js"
import { pipe } from "./Function.js"
import * as Hash from "./Hash.js"
import * as HashSet from "./HashSet.js"
import { getBugErrorMessage } from "./internal/errors.js"
import type * as MutableRef from "./MutableRef.js"
import { hasProperty } from "./Predicate.js"
import type * as SortedSet from "./SortedSet.js"
import type * as Types from "./Types.js"

/** @internal */
const TestAnnotationSymbolKey = "effect/TestAnnotation"

/**
 * @since 2.0.0
 */
export const TestAnnotationTypeId: unique symbol = Symbol.for(TestAnnotationSymbolKey)

/**
 * @since 2.0.0
 */
export type TestAnnotationTypeId = typeof TestAnnotationTypeId

/**
 * @since 2.0.0
 */
export interface TestAnnotation<in out A> extends Equal.Equal {
  readonly [TestAnnotationTypeId]: {
    readonly _A: Types.Invariant<A>
  }
  readonly identifier: string
  readonly initial: A
  combine(a: A, b: A): A
}

/** @internal */
class TestAnnotationImpl<A> implements Equal.Equal {
  readonly [TestAnnotationTypeId] = {
    _A: (_: any) => _
  }
  constructor(
    readonly identifier: string,
    readonly initial: A,
    readonly combine: (a: A, b: A) => A
  ) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(TestAnnotationSymbolKey),
      Hash.combine(Hash.hash(this.identifier)),
      Hash.cached(this)
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return isTestAnnotation(that) &&
      this.identifier === that.identifier
  }
}

/**
 * @since 2.0.0
 */
export const isTestAnnotation = (u: unknown): u is TestAnnotation<unknown> => hasProperty(u, TestAnnotationTypeId)

/**
 * @since 2.0.0
 */
export const make = <A>(
  identifier: string,
  initial: A,
  combine: (a: A, b: A) => A
): TestAnnotation<A> => {
  return new TestAnnotationImpl<A>(identifier, initial, combine)
}

/**
 * @since 2.0.0
 */
export const compose = <A>(
  left: Either.Either<Chunk.Chunk<A>, number>,
  right: Either.Either<Chunk.Chunk<A>, number>
): Either.Either<Chunk.Chunk<A>, number> => {
  if (Either.isLeft(left) && Either.isLeft(right)) {
    return Either.left(left.left + right.left)
  }
  if (Either.isRight(left) && Either.isRight(right)) {
    return Either.right(pipe(left.right, Chunk.appendAll(right.right)))
  }
  if (Either.isRight(left) && Either.isLeft(right)) {
    return right
  }
  if (Either.isLeft(left) && Either.isRight(right)) {
    return right
  }
  throw new Error(getBugErrorMessage("TestAnnotation.compose"))
}

/**
 * @since 2.0.0
 */
export const fibers: TestAnnotation<
  Either.Either<Chunk.Chunk<MutableRef.MutableRef<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>>>, number>
> = make<
  Either.Either<Chunk.Chunk<MutableRef.MutableRef<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>>>, number>
>(
  "fibers",
  Either.left(0),
  compose
)

/**
 * An annotation which counts ignored tests.
 *
 * @since 2.0.0
 */
export const ignored: TestAnnotation<number> = make(
  "ignored",
  0,
  (a, b) => a + b
)

/**
 * An annotation which counts repeated tests.
 *
 * @since 2.0.0
 */
export const repeated: TestAnnotation<number> = make(
  "repeated",
  0,
  (a, b) => a + b
)

/**
 * An annotation which counts retried tests.
 *
 * @since 2.0.0
 */
export const retried: TestAnnotation<number> = make(
  "retried",
  0,
  (a, b) => a + b
)

/**
 * An annotation which tags tests with strings.
 *
 * @since 2.0.0
 */
export const tagged: TestAnnotation<HashSet.HashSet<string>> = make(
  "tagged",
  HashSet.empty(),
  (a, b) => pipe(a, HashSet.union(b))
)
