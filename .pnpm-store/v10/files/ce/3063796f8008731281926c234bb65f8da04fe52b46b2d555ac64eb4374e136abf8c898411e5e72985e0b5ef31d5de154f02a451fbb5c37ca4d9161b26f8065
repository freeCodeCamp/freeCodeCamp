import "./bootstrap";
import { ExecutionResult, Source } from "graphql";
import { IQueryOptions } from "../../query/graphql-runner";
import type { IGatsbyPage } from "../../redux/types";
export declare class GraphQLEngine {
    private runnerPromise?;
    constructor({ dbPath }: {
        dbPath: string;
    });
    private setupPathPrefix;
    private _doGetRunner;
    private getRunner;
    ready(): Promise<void>;
    runQuery(query: string | Source, context?: Record<string, any>, opts?: IQueryOptions): Promise<ExecutionResult>;
    /**
     * @deprecated use findEnginePageByPath exported from page-ssr module instead
     */
    findPageByPath(pathName: string): IGatsbyPage | undefined;
}
declare const _default: {
    GraphQLEngine: typeof GraphQLEngine;
};
export default _default;
