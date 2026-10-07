import type { ListenerFunction, SandpackMessage, UnsubscribeFunction } from "..";
export declare class EventEmitter {
    private listeners;
    private listenersCount;
    readonly channelId: number;
    constructor();
    cleanup(): void;
    dispatch(message: SandpackMessage): void;
    listener(listener: ListenerFunction): UnsubscribeFunction;
}
