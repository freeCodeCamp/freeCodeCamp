import { Span } from "opentracing";
import reporter from "gatsby-cli/lib/reporter";
import { IProgram } from "../commands/types";
import { Runner } from "../bootstrap/create-graphql-runner";
import { GraphQLRunner } from "../query/graphql-runner";
import { Store, AnyAction } from "redux";
import { IGatsbyPage, IGatsbyState } from "../redux/types";
import { Express } from "express";
import type { GatsbyWorkerPool } from "../utils/worker/pool";
import { Actor, AnyEventObject } from "xstate";
import { Compiler } from "webpack";
import { WebsocketManager } from "../utils/websocket-manager";
import { type WebpackWatching } from "../utils/start-server";
type Reporter = typeof reporter;
export interface IGroupedQueryIds {
    pageQueryIds: Array<IGatsbyPage>;
    staticQueryIds: Array<string>;
    sliceQueryIds: Array<string>;
}
export interface IMutationAction {
    type: string;
    payload: Array<unknown>;
    resolve?: (result: unknown) => void;
}
export interface IBuildContext {
    reporter?: Reporter;
    shouldRunInitialTypegen?: boolean;
    program: IProgram;
    store?: Store<IGatsbyState, AnyAction>;
    parentSpan?: Span;
    gatsbyNodeGraphQLFunction?: Runner;
    graphqlRunner?: GraphQLRunner;
    queryIds?: IGroupedQueryIds;
    webhookBody?: Record<string, unknown>;
    webhookSourcePluginName?: string;
    refresh?: boolean;
    workerPool?: GatsbyWorkerPool;
    app?: Express;
    nodesMutatedDuringQueryRun?: boolean;
    nodesMutatedDuringQueryRunRecompileCount?: number;
    mutationListener?: Actor<unknown, AnyEventObject>;
    nodeMutationBatch?: Array<IMutationAction>;
    compiler?: Compiler;
    websocketManager?: WebsocketManager;
    webpackWatching?: WebpackWatching;
    webpackListener?: Actor<unknown, AnyEventObject>;
    queryFilesDirty?: boolean;
    sourceFilesDirty?: boolean;
    changedSourceFiles?: Set<string>;
    recompiledFiles?: Set<string>;
    pendingQueryRuns?: Set<string>;
}
export {};
