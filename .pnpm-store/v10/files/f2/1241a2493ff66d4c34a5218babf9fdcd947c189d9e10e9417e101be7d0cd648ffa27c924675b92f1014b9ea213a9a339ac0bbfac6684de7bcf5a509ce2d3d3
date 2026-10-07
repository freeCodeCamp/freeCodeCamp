import { ICreateJobV2Action, IRemoveStaleJobV2Action, IEndJobV2Action, IGatsbyState, IGatsbyIncompleteJobV2, IGatsbyCompleteJobV2, IDeleteCacheAction, ISetJobV2Context, IClearJobV2Context } from "../types";
export declare const jobsV2Reducer: (state: {
    incomplete: Map<string, IGatsbyIncompleteJobV2>;
    complete: Map<string, IGatsbyCompleteJobV2>;
    jobsByRequest: Map<string, Set<string>>;
} | undefined, action: ICreateJobV2Action | IRemoveStaleJobV2Action | IEndJobV2Action | ISetJobV2Context | IClearJobV2Context | IDeleteCacheAction) => IGatsbyState["jobsV2"];
