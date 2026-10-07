import { Actions, ActivityStatuses, ActivityTypes } from "../constants";
import { IStructuredError, ErrorCategory } from "../../structured-errors/types";
import { IRenderPageArgs } from "../types";
export interface IGatsbyCLIState {
    activities: {
        [id: string]: IActivity;
    };
    status: ActivityStatuses | "";
}
export type ActionsUnion = ICreateLog | ISetStatus | IEndActivity | IPendingActivity | IStartActivity | ICancelActivity | IUpdateActivity | IActivityErrored | ISetLogs | IRenderPageTree;
export interface IActivity {
    startTime?: [number, number];
    id: string;
    uuid: string;
    text: string;
    type: ActivityTypes;
    status: ActivityStatuses;
    statusText: string;
    current?: number;
    total?: number;
    duration?: number;
    errored?: boolean;
}
export interface ILog {
    level: string;
    text: string | undefined;
    statusText: string | undefined;
    duration: number | undefined;
    group: string | undefined;
    code: string | undefined;
    type: string | undefined;
    category?: keyof typeof ErrorCategory;
    filePath: string | undefined;
    location: IStructuredError["location"] | undefined;
    docsUrl: string | undefined;
    context: string | undefined;
    activity_current: number | undefined;
    activity_total: number | undefined;
    activity_type: string | undefined;
    activity_uuid: string | undefined;
    timestamp: string;
    stack: IStructuredError["stack"] | undefined;
    pluginName: string | undefined;
}
export interface ICreateLog {
    type: Actions.Log;
    payload: ILog;
}
export interface ISetStatus {
    type: Actions.SetStatus;
    payload: ActivityStatuses | "";
}
export interface IPendingActivity {
    type: Actions.PendingActivity;
    payload: {
        id: string;
        type: ActivityTypes;
        status: ActivityStatuses;
        startTime?: [number, number];
    };
}
export interface IStartActivity {
    type: Actions.StartActivity;
    payload: IActivity;
}
export interface ICancelActivity {
    type: Actions.CancelActivity;
    payload: {
        id: string;
        status: ActivityStatuses.Cancelled;
        duration: number;
        type: ActivityTypes;
    };
}
export interface IEndActivity {
    type: Actions.EndActivity;
    payload: {
        uuid: string;
        id: string;
        status: ActivityStatuses;
        duration: number;
        type: ActivityTypes;
    };
}
export interface IUpdateActivity {
    type: Actions.UpdateActivity;
    payload: {
        uuid: string;
        id: string;
        statusText?: string;
        total?: number;
        current?: number;
    };
}
export interface IActivityErrored {
    type: Actions.ActivityErrored;
    payload: {
        id: string;
    };
}
export interface ISetLogs {
    type: Actions.SetLogs;
    payload: IGatsbyCLIState;
}
export interface IRenderPageTree {
    type: Actions.RenderPageTree;
    payload: IRenderPageArgs;
}
