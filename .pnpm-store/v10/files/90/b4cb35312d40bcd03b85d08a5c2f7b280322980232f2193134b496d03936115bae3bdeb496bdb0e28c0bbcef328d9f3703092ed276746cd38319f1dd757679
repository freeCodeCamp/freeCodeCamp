// Type definitions for scheduler 0.16
// Project: https://reactjs.org/
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type FrameCallbackType = (didTimeout: boolean) => FrameCallbackType | void;
export interface CallbackNode {
    callback: FrameCallbackType;
    priorityLevel: number;
    expirationTime: number;
    next: CallbackNode | null;
    prev: CallbackNode | null;
}

export const unstable_ImmediatePriority = 1;
export const unstable_UserBlockingPriority = 2;
export const unstable_NormalPriority = 3;
export const unstable_IdlePriority = 5;
export const unstable_LowPriority = 4;
export function unstable_runWithPriority<T>(priorityLevel: number, eventHandler: () => T): T;
export function unstable_scheduleCallback(
    priorityLevel: number,
    callback: FrameCallbackType,
    options?: { delay?: number | undefined; timeout?: number | undefined },
): CallbackNode;
export function unstable_next<T>(eventHandler: () => T): T;
export function unstable_cancelCallback(callbackNode: CallbackNode): void;
export function unstable_wrapCallback(callback: FrameCallbackType): () => FrameCallbackType;
export function unstable_getCurrentPriorityLevel(): number;
export function unstable_shouldYield(): boolean;
export function unstable_continueExecution(): void;
export function unstable_pauseExecution(): void;
export function unstable_getFirstCallbackNode(): CallbackNode | null;
export function unstable_now(): number;
