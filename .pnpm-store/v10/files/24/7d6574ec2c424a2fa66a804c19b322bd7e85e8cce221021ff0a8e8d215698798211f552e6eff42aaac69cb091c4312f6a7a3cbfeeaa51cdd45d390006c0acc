import { Database } from "lmdb";
import { IGatsbyNode } from "../redux/types";
import { GatsbyGraphQLType } from "../../index";
import { IInputQuery } from "./common/query";
import { IGraphQLRunnerStats } from "../query/types";
import { GatsbyIterable } from "./common/iterable";
export type NodeId = string;
export type NodeType = string;
export interface ILmdbDatabases {
    nodes: Database<IGatsbyNode, NodeId>;
    nodesByType: Database<NodeId, NodeType>;
    indexes: Database<NodeId, Array<any>>;
    metadata: Database<any, string>;
}
export interface IQueryResult {
    entries: GatsbyIterable<IGatsbyNode>;
    totalCount: () => Promise<number>;
}
export interface IRunQueryArgs {
    gqlType: GatsbyGraphQLType;
    queryArgs: {
        filter: IInputQuery | undefined;
        sort: {
            fields: Array<string>;
            order: Array<boolean | "asc" | "desc" | "ASC" | "DESC">;
        } | undefined;
        limit?: number;
        skip?: number;
    };
    firstOnly: boolean;
    resolvedFields: Record<string, any>;
    nodeTypeNames: Array<string>;
    stats: IGraphQLRunnerStats;
}
export interface IDataStore {
    getNode(id: string): IGatsbyNode | undefined;
    getTypes(): Array<string>;
    countNodes(typeName?: string): number;
    ready(): Promise<void>;
    iterateNodes(): GatsbyIterable<IGatsbyNode>;
    iterateNodesByType(type: string): GatsbyIterable<IGatsbyNode>;
    runQuery(args: IRunQueryArgs): Promise<IQueryResult>;
    /** @deprecated */
    getNodes(): Array<IGatsbyNode>;
    /** @deprecated */
    getNodesByType(type: string): Array<IGatsbyNode>;
}
