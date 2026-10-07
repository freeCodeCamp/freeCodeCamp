import { Span } from "opentracing";
import reporter from "gatsby-cli/lib/reporter";
import { IProgram } from "../../commands/types";
import { Runner } from "../../bootstrap/create-graphql-runner";
import { GraphQLRunner } from "../../query/graphql-runner";
import { Store, AnyAction } from "redux";
import { IGatsbyState } from "../../redux/types";
import { IGroupedQueryIds } from "../../services/types";
import { WebsocketManager } from "../../utils/websocket-manager";
type Reporter = typeof reporter;
export interface IQueryRunningContext {
    reporter?: Reporter;
    program?: IProgram;
    store?: Store<IGatsbyState, AnyAction>;
    parentSpan?: Span;
    gatsbyNodeGraphQLFunction?: Runner;
    graphqlRunner?: GraphQLRunner;
    pagesToBuild?: Array<string>;
    pagesToDelete?: Array<string>;
    queryIds?: IGroupedQueryIds;
    websocketManager?: WebsocketManager;
    filesDirty?: boolean;
    pendingQueryRuns?: Set<string>;
    currentlyHandledPendingQueryRuns?: Set<string>;
}
export {};
