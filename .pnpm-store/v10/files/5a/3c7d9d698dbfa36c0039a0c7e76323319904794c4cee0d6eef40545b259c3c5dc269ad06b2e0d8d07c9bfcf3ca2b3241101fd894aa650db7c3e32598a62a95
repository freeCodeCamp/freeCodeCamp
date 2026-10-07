import { GraphQLType, GraphQLFieldConfig } from "graphql";
import { GatsbyResolver, IGatsbyConnection, IGatsbyResolverContext } from "./type-definitions";
import { IGatsbyNode } from "../redux/types";
import { IQueryResult } from "../datastore/types";
import { INestedPathStructureNode } from "./utils";
export declare function getMaybeResolvedValue(node: IGatsbyNode, field: string | INestedPathStructureNode, nodeInterfaceName: string): any;
export declare function findOne<TSource, TArgs>(typeName: string): GatsbyResolver<TSource, TArgs>;
type PaginatedArgs<TArgs> = TArgs & {
    skip?: number;
    limit?: number;
    sort: any;
};
export declare function findManyPaginated<TSource, TArgs>(typeName: string): GatsbyResolver<TSource, PaginatedArgs<TArgs>>;
interface IFieldConnectionArgs {
    field: string | INestedPathStructureNode;
}
export declare function createDistinctResolver(nodeInterfaceName: string): GatsbyResolver<IGatsbyConnection<IGatsbyNode>, IFieldConnectionArgs>;
export declare function createMinResolver(nodeInterfaceName: string): GatsbyResolver<IGatsbyConnection<IGatsbyNode>, IFieldConnectionArgs>;
export declare function createMaxResolver(nodeInterfaceName: string): GatsbyResolver<IGatsbyConnection<IGatsbyNode>, IFieldConnectionArgs>;
export declare function createSumResolver(nodeInterfaceName: string): GatsbyResolver<IGatsbyConnection<IGatsbyNode>, IFieldConnectionArgs>;
export declare function createGroupResolver(nodeInterfaceName: string): GatsbyResolver<IGatsbyConnection<IGatsbyNode>, PaginatedArgs<IFieldConnectionArgs>>;
export declare function paginate(results: IQueryResult, params: {
    skip?: number;
    limit?: number;
    resultOffset?: number;
}): IGatsbyConnection<IGatsbyNode>;
export declare function link<TSource, TArgs>(options: {
    by: string;
    type?: GraphQLType | undefined;
    from?: string | undefined;
    fromNode?: boolean | undefined;
} | undefined, fieldConfig: GraphQLFieldConfig<TSource, IGatsbyResolverContext<TSource, TArgs>, TArgs>): GatsbyResolver<TSource, TArgs>;
export declare function fileByPath<TSource, TArgs>(options: {
    from?: string | undefined;
    fromNode?: boolean | undefined;
} | undefined, fieldConfig: any): GatsbyResolver<TSource, TArgs>;
export declare const defaultFieldResolver: GatsbyResolver<any, any>;
export declare function wrappingResolver<TSource, TArgs>(resolver: GatsbyResolver<TSource, TArgs>): GatsbyResolver<TSource, TArgs>;
export declare const defaultResolver: GatsbyResolver<any, any>;
export {};
