import type { GraphQLNamedType } from './definition';
import { GraphQLScalarType } from './definition';
/**
 * Maximum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe up-to 2^53 - 1
 * */
export declare const GRAPHQL_MAX_INT = 2147483647;
/**
 * Minimum possible Int value as per GraphQL Spec (32-bit signed integer).
 * n.b. This differs from JavaScript's numbers that are IEEE 754 doubles safe starting at -(2^53 - 1)
 * */
export declare const GRAPHQL_MIN_INT = -2147483648;
export declare const GraphQLInt: GraphQLScalarType<number, number>;
export declare const GraphQLFloat: GraphQLScalarType<number, number>;
export declare const GraphQLString: GraphQLScalarType<string, string>;
export declare const GraphQLBoolean: GraphQLScalarType<boolean, boolean>;
export declare const GraphQLID: GraphQLScalarType<string, string>;
export declare const specifiedScalarTypes: ReadonlyArray<GraphQLScalarType>;
export declare function isSpecifiedScalarType(type: GraphQLNamedType): boolean;
