import type { GraphQLCompositeType, GraphQLType } from '../type/definition';
import type { GraphQLSchema } from '../type/schema';
/**
 * Provided two types, return true if the types are equal (invariant).
 */
export declare function isEqualType(
  typeA: GraphQLType,
  typeB: GraphQLType,
): boolean;
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */
export declare function isTypeSubTypeOf(
  schema: GraphQLSchema,
  maybeSubType: GraphQLType,
  superType: GraphQLType,
): boolean;
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */
export declare function doTypesOverlap(
  schema: GraphQLSchema,
  typeA: GraphQLCompositeType,
  typeB: GraphQLCompositeType,
): boolean;
