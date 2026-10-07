import { Span } from "opentracing";
import { IGroupedQueryIds } from "../../services";
import { GatsbyWorkerPool } from "./types";
export type { GatsbyWorkerPool };
export declare const create: () => GatsbyWorkerPool;
export declare function runQueriesInWorkersQueue(pool: GatsbyWorkerPool, queryIds: IGroupedQueryIds, opts?: {
    chunkSize?: number;
    parentSpan?: Span;
}): Promise<void>;
export declare function mergeWorkerState(pool: GatsbyWorkerPool, parentSpan?: Span): Promise<void>;
