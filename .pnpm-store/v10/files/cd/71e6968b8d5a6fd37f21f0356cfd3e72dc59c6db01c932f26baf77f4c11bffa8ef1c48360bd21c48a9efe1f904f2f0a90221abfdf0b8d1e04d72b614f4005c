import type { DocumentNode } from '../language/ast';
import type {
  GraphQLSchemaNormalizedConfig,
  GraphQLSchemaValidationOptions,
} from '../type/schema';
import { GraphQLSchema } from '../type/schema';
interface Options extends GraphQLSchemaValidationOptions {
  /**
   * Set to true to assume the SDL is valid.
   *
   * Default: false
   */
  assumeValidSDL?: boolean;
}
/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 */
export declare function extendSchema(
  schema: GraphQLSchema,
  documentAST: DocumentNode,
  options?: Options,
): GraphQLSchema;
/**
 * @internal
 */
export declare function extendSchemaImpl(
  schemaConfig: GraphQLSchemaNormalizedConfig,
  documentAST: DocumentNode,
  options?: Options,
): GraphQLSchemaNormalizedConfig;
export {};
