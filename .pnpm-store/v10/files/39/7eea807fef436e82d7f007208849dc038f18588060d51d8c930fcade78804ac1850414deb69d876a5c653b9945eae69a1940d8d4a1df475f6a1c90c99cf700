import { ActivityStatuses } from "../constants";
import { ActionsUnion, IActivity } from "./types";
export declare function isActivityInProgress(activityStatus: ActivityStatuses): boolean;
export declare const getGlobalStatus: (id: string, status: ActivityStatuses) => ActivityStatuses;
export declare const getActivity: (id: string) => IActivity | null;
/**
 * @returns {Number} Milliseconds from activity start
 */
export declare const getElapsedTimeMS: (activity: IActivity) => number;
export declare const isInternalAction: (action: ActionsUnion) => boolean;
/**
 * Like setTimeout, but also handle signalExit
 */
export declare const delayedCall: (fn: () => void, timeout: number) => (() => void);
