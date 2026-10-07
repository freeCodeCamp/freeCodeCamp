import type { DocumentNode } from '../language/ast';
import type { ParseOptions } from '../language/parser';
import type { Source } from '../language/source';
import type { GraphQLSchemaValidationOptions } from '../type/schema';
import { GraphQLSchema } from '../type/schema';
export interface BuildSchemaOptions extends GraphQLSchemaValidationOptions {
  /**
   * Set to true to assume the SDL is valid.
   *
   * Default: false
   */
  assumeValidSDL?: boolean;
}
/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query,
 * Mutation and Subscription.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 */
export declare function buildASTSchema(
  documentAST: DocumentNode,
  options?: BuildSchemaOptions,
): GraphQLSchema;
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */
export declare function buildSchema(
  source: string | Source,
  options?: BuildSchemaOptions & ParseOptions,
): GraphQLSchema;
