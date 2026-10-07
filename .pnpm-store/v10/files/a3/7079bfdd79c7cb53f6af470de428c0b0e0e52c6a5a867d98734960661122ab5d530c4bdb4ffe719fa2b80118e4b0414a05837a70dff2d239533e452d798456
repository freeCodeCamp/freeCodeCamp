import { DocumentNode, GraphQLSchema, BuildSchemaOptions } from 'graphql';
import { GraphQLParseOptions } from './Interfaces.cjs';
export interface Source {
    document?: DocumentNode;
    schema?: GraphQLSchema;
    rawSDL?: string;
    location?: string;
}
export type BaseLoaderOptions = GraphQLParseOptions & BuildSchemaOptions & {
    cwd?: string;
    ignore?: string | string[];
};
export type WithList<T> = T | T[];
export type ElementOf<TList> = TList extends Array<infer TElement> ? TElement : never;
export interface Loader<TOptions extends BaseLoaderOptions = BaseLoaderOptions> {
    load(pointer: string, options?: TOptions): Promise<Source[] | null | never>;
    loadSync?(pointer: string, options?: TOptions): Source[] | null | never;
}
