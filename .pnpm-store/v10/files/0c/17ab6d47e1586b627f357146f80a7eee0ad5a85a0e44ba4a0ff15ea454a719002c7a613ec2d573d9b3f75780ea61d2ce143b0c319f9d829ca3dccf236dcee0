import { ExecutionResult } from "graphql";
export interface IGraphQLRunnerStats {
    totalQueries: number;
    uniqueOperations: Set<string>;
    uniqueQueries: Set<string>;
    totalRunQuery: number;
    totalPluralRunQuery: number;
    totalIndexHits: number;
    totalSiftHits: number;
    totalNonSingleFilters: number;
    comparatorsUsed: Map<string, number>;
    uniqueFilterPaths: Set<string>;
    uniqueSorts: Set<string>;
}
export interface IGraphQLRunnerStatResults {
    totalQueries: number;
    uniqueOperations: number;
    uniqueQueries: number;
    totalRunQuery: number;
    totalPluralRunQuery: number;
    totalIndexHits: number;
    totalSiftHits: number;
    totalNonSingleFilters: number;
    comparatorsUsed: Array<{
        comparator: string;
        amount: number;
    }>;
    uniqueFilterPaths: number;
    uniqueSorts: number;
}
export type PageContext = Record<string, any>;
export interface IExecutionResult extends ExecutionResult {
    pageContext?: PageContext;
    serverData?: unknown;
}
