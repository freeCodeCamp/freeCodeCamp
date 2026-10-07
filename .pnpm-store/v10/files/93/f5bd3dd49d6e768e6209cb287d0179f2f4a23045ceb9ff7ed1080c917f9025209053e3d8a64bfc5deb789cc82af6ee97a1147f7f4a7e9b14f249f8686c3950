import { IQueryRunningContext } from "./types";
import { DoneInvokeEvent, ActionFunctionMap, AnyEventObject } from "xstate";
export declare const flushPageData: (context: IQueryRunningContext) => void;
export declare const assignDirtyQueries: import("xstate").AssignAction<IQueryRunningContext, DoneInvokeEvent<any>, DoneInvokeEvent<any>>;
export declare const markSourceFilesDirty: import("xstate").AssignAction<IQueryRunningContext, import("xstate").EventObject, import("xstate").EventObject>;
export declare const markSourceFilesClean: import("xstate").AssignAction<IQueryRunningContext, import("xstate").EventObject, import("xstate").EventObject>;
export declare const trackRequestedQueryRun: import("xstate").AssignAction<IQueryRunningContext, AnyEventObject, AnyEventObject>;
export declare const clearCurrentlyHandledPendingQueryRuns: import("xstate").AssignAction<IQueryRunningContext, import("xstate").EventObject, import("xstate").EventObject>;
export declare const queryActions: ActionFunctionMap<IQueryRunningContext, any>;
