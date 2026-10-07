import { MachineConfig } from "xstate";
import { IWaitingContext } from "./types";
export type WaitingResult = Pick<IWaitingContext, "nodeMutationBatch">;
/**
 * This idle state also handles batching of node mutations and running of
 * mutations when we first start it
 */
export declare const waitingStates: MachineConfig<IWaitingContext, any, any>;
export declare const waitingMachine: import("xstate").StateMachine<IWaitingContext, any, any, {
    value: any;
    context: IWaitingContext;
}, import("xstate").BaseActionObject, import("xstate").ServiceMap, import("xstate").ResolveTypegenMeta<import("xstate").TypegenDisabled, any, import("xstate").BaseActionObject, import("xstate").ServiceMap>>;
