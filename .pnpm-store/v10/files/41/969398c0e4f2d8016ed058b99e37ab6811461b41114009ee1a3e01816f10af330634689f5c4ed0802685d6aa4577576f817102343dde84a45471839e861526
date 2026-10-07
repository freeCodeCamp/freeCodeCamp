import type { GraphQLSchemaValidationOptions } from '../type/schema';
import { GraphQLSchema } from '../type/schema';
import type { IntrospectionQuery } from './getIntrospectionQuery';
/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
export declare function buildClientSchema(
  introspection: IntrospectionQuery,
  options?: GraphQLSchemaValidationOptions,
): GraphQLSchema;
