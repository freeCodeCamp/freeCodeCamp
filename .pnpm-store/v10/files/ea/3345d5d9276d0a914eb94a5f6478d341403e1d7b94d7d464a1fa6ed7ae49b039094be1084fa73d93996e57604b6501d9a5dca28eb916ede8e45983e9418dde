import { Dispatch } from "redux";
import { ActivityStatuses, ActivityTypes } from "../constants";
import { IPendingActivity, ICreateLog, ISetStatus, IStartActivity, ICancelActivity, IEndActivity, IUpdateActivity, IActivityErrored, IGatsbyCLIState, ISetLogs, IRenderPageTree } from "./types";
import { IStructuredError, ErrorCategory } from "../../structured-errors/types";
import { IRenderPageArgs } from "../types";
export declare const setStatus: (status: ActivityStatuses | "", force?: boolean) => (dispatch: Dispatch<ISetStatus>) => void;
export declare const createLog: ({ level, text, statusText, duration, group, code, type, category, filePath, location, docsUrl, context, activity_current, activity_total, activity_type, activity_uuid, stack, pluginName, }: {
    level: string;
    text?: string | undefined;
    statusText?: string | undefined;
    duration?: number | undefined;
    group?: string | undefined;
    code?: string | undefined;
    type?: string | undefined;
    category?: "USER" | "SYSTEM" | "THIRD_PARTY" | "UNKNOWN" | undefined;
    filePath?: string | undefined;
    location?: IStructuredError["location"];
    docsUrl?: string | undefined;
    context?: string | undefined;
    activity_current?: number | undefined;
    activity_total?: number | undefined;
    activity_type?: string | undefined;
    activity_uuid?: string | undefined;
    stack?: import("../../structured-errors/types").IStructuredStackFrame[] | undefined;
    pluginName?: string | undefined;
}) => ICreateLog;
type ActionsToEmit = Array<IPendingActivity | ReturnType<typeof setStatus>>;
export declare const createPendingActivity: ({ id, status, }: {
    id: string;
    status?: ActivityStatuses | undefined;
}) => ActionsToEmit;
type QueuedStartActivityActions = Array<IStartActivity | ReturnType<typeof setStatus>>;
export declare const startActivity: ({ id, text, type, status, current, total, }: {
    id: string;
    text: string;
    type: ActivityTypes;
    status?: ActivityStatuses | undefined;
    current?: number | undefined;
    total?: number | undefined;
}) => QueuedStartActivityActions;
type QueuedEndActivity = Array<ICancelActivity | IEndActivity | ICreateLog | ReturnType<typeof setStatus>>;
export declare const endActivity: ({ id, status, }: {
    id: string;
    status: ActivityStatuses;
}) => QueuedEndActivity | null;
export declare const updateActivity: ({ id, ...rest }: {
    id: string;
    statusText?: string | undefined;
    total?: number | undefined;
    current?: number | undefined;
}) => IUpdateActivity | null;
export declare const setActivityErrored: ({ id, }: {
    id: string;
}) => IActivityErrored | null;
export declare const setActivityStatusText: ({ id, statusText, }: {
    id: string;
    statusText: string;
}) => IUpdateActivity | null;
export declare const setActivityTotal: ({ id, total, }: {
    id: string;
    total: number;
}) => IUpdateActivity | null;
export declare const activityTick: ({ id, increment, }: {
    id: string;
    increment: number;
}) => IUpdateActivity | null;
export declare const setLogs: (logs: IGatsbyCLIState) => ISetLogs;
export declare const renderPageTree: (payload: IRenderPageArgs) => IRenderPageTree;
export {};
