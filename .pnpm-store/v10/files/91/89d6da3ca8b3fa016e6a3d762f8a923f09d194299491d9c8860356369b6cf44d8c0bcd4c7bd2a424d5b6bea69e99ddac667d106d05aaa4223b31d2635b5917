import { Store, AnyAction } from "redux";
import { IGatsbyState } from "../../redux/types";
export interface IMutationAction {
    type: string;
    payload: Array<unknown>;
}
export interface IWaitingContext {
    nodeMutationBatch: Array<IMutationAction>;
    store?: Store<IGatsbyState, AnyAction>;
    runningBatch: Array<IMutationAction>;
    sourceFilesDirty?: boolean;
}
