import { DocumentNode, ASTNode, StringValueNode } from 'graphql';
import { GraphQLParseOptions } from './Interfaces.js';
export declare function parseGraphQLSDL(location: string | undefined, rawSDL: string, options?: GraphQLParseOptions): {
    location: string | undefined;
    document: DocumentNode;
};
export declare function transformCommentsToDescriptions(sourceSdl: string, options?: GraphQLParseOptions): DocumentNode;
declare type DiscriminateUnion<T, U> = T extends U ? T : never;
declare type DescribableASTNodes = DiscriminateUnion<ASTNode, {
    description?: StringValueNode;
}>;
export declare function isDescribable(node: ASTNode): node is DescribableASTNodes;
export {};
