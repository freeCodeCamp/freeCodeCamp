import { Store, AnyAction } from "redux";
import * as WorkerPool from "../utils/worker/pool";
import { IGatsbyState } from "../redux/types";
import { IBuildContext } from "./types";
import type { IDataLayerContext } from "./../state-machines/data-layer/types";
import type { IAdapterManager } from "../utils/adapter/types";
type WebhookBody = IDataLayerContext["webhookBody"];
export declare function initialize({ program: args, parentSpan, }: IBuildContext): Promise<{
    store: Store<IGatsbyState, AnyAction>;
    workerPool: WorkerPool.GatsbyWorkerPool;
    webhookBody?: WebhookBody;
    adapterManager?: IAdapterManager;
}>;
export {};
