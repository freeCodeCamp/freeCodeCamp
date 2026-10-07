import { AssignAction, ActionFunctionMap, AnyEventObject, ActionFunction } from "xstate";
import { IWaitingContext } from "./types";
import { AnyAction } from "redux";
export declare const callApi: ActionFunction<IWaitingContext, AnyEventObject>;
/**
 * Event handler used when we're not ready to process node mutations.
 * Instead we add it to a batch to process when we're next idle
 */
export declare const addNodeMutation: AssignAction<IWaitingContext, AnyAction>;
export declare const extractQueries: import("xstate").SendAction<IWaitingContext, AnyEventObject, AnyEventObject>;
export declare const waitingActions: ActionFunctionMap<IWaitingContext, AnyAction>;
