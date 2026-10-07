import { ASTNode, GraphQLError, Source } from 'graphql';
import { Maybe } from './types.cjs';
interface GraphQLErrorOptions {
    nodes?: ReadonlyArray<ASTNode> | ASTNode | null;
    source?: Maybe<Source>;
    positions?: Maybe<ReadonlyArray<number>>;
    path?: Maybe<ReadonlyArray<string | number>>;
    originalError?: Maybe<Error & {
        readonly extensions?: unknown;
    }>;
    extensions?: any;
}
export declare function createGraphQLError(message: string, options?: GraphQLErrorOptions): GraphQLError;
export declare function relocatedError(originalError: GraphQLError, path?: ReadonlyArray<string | number>): GraphQLError;
export {};
