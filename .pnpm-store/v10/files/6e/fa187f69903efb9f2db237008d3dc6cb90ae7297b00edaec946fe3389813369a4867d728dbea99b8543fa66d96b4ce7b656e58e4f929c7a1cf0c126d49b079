import { SchemaPrintOptions } from '@graphql-tools/utils';
import { GraphQLSchema, DocumentNode, ParseOptions } from 'graphql';
export type OptimizeDocumentsOptions = SchemaPrintOptions & ParseOptions & {
    includeFragments?: boolean;
};
export declare function optimizeDocuments(schema: GraphQLSchema, documents: DocumentNode[], options?: OptimizeDocumentsOptions): DocumentNode[];
