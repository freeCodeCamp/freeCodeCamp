import { Span } from "opentracing";
import reporter from "gatsby-cli/lib/reporter";
import { IProgram } from "../../commands/types";
import { Runner } from "../../bootstrap/create-graphql-runner";
import { GraphQLRunner } from "../../query/graphql-runner";
import { Store, AnyAction } from "redux";
import { IGatsbyState } from "../../redux/types";
import type { GatsbyWorkerPool } from "../../utils/worker/pool";
type Reporter = typeof reporter;
export interface IDataLayerContext {
    reporter?: Reporter;
    deferNodeMutation?: boolean;
    nodesMutatedDuringQueryRun?: boolean;
    program?: IProgram;
    store?: Store<IGatsbyState, AnyAction>;
    parentSpan?: Span;
    gatsbyNodeGraphQLFunction?: Runner;
    graphqlRunner?: GraphQLRunner;
    webhookBody?: Record<string, unknown>;
    webhookSourcePluginName?: string;
    refresh?: boolean;
    workerPool?: GatsbyWorkerPool;
    pagesToBuild?: Array<string>;
    pagesToDelete?: Array<string>;
    shouldRunCreatePagesStatefully?: boolean;
}
export {};
