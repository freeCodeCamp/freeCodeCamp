import { Span } from "opentracing";
import { ExecutionResult, Source } from "graphql";
import { Store } from "redux";
import { Reporter } from "../..";
import { IGatsbyState } from "../redux/types";
export type Runner = (query: string | Source, context: Record<string, any>) => Promise<ExecutionResult>;
export declare const createGraphQLRunner: (store: Store<IGatsbyState>, reporter: Reporter, { parentSpan, graphqlTracing, }?: {
    parentSpan: Span | undefined;
    graphqlTracing?: boolean | undefined;
}) => Runner;
