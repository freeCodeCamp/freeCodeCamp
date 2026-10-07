import { IBuildContext } from "../services";
import { Runner } from "./create-graphql-runner";
import type { GatsbyWorkerPool } from "../utils/worker/pool";
import { IProgram } from "../commands/types";
import type { IAdapterManager } from "../utils/adapter/types";
export declare function bootstrap(initialContext: Partial<IBuildContext> & {
    program: IProgram;
}): Promise<{
    gatsbyNodeGraphQLFunction: Runner;
    workerPool: GatsbyWorkerPool;
    adapterManager?: IAdapterManager;
}>;
