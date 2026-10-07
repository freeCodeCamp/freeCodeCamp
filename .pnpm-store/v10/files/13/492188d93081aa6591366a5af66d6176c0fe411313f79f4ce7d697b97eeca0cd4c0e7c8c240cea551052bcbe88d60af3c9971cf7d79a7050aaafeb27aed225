import { GraphQLResolveInfo } from "graphql";
import { IPhantomReporter } from "gatsby-cli/lib/reporter/reporter-phantom";
import { IGraphQLRunnerStats } from "../query/types";
import { Path } from "graphql/jsutils/Path";
export interface IGatsbyResolverContext<TSource, TArgs> {
    defaultFieldResolver: GatsbyResolver<TSource, TArgs>;
    nodeModel: any;
    stats: IGraphQLRunnerStats | null;
    tracer: IGraphQLSpanTracer | null;
    telemetryResolverTimings?: Array<IGraphQLTelemetryRecord>;
    [key: string]: any;
}
export type GatsbyGraphQLResolveInfo = GraphQLResolveInfo & {
    from?: string;
    fromNode?: boolean;
};
export type GatsbyResolver<TSource, TArgs = {
    [argName: string]: any;
}> = (source: TSource, args: TArgs, context: IGatsbyResolverContext<TSource, TArgs>, info: GatsbyGraphQLResolveInfo) => any;
export interface IGatsbyConnection<NodeType> {
    totalCount: () => Promise<number>;
    edges: Array<IGatsbyEdge<NodeType>>;
    nodes: Array<NodeType>;
    pageInfo: IGatsbyPageInfo;
}
export interface IGatsbyEdge<NodeType> {
    node: NodeType;
    next: NodeType | undefined;
    previous: NodeType | undefined;
}
export interface IGatsbyPageInfo {
    currentPage: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    itemCount: number;
    pageCount: () => Promise<number>;
    perPage: number | undefined;
    totalCount: () => Promise<number>;
}
export interface IGraphQLSpanTracer {
    getParentActivity(): IPhantomReporter;
    createResolverActivity(path: Path, name: string): IPhantomReporter;
}
export interface IGraphQLTelemetryRecord {
    name: string;
    duration: number;
}
