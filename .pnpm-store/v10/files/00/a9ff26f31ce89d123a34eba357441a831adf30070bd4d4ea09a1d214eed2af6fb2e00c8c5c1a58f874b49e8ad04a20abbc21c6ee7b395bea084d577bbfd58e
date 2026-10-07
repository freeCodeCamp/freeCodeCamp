import type { FileSystemEvents } from './modules/fs';
import type { ShellEvents } from './modules/shell';
import type { PreviewInfo } from './modules/preview';
import type { PreviewEvents } from './modules/preview';
export interface ConsumerEvents extends FileSystemEvents, ShellEvents, PreviewEvents {
    connect: {
        cdnUrl?: string | null;
    };
}
declare type WatcherEvent = {
    type: 'create';
    path: string;
} | {
    type: 'remove';
    path: string;
} | {
    type: 'change';
    path: string;
} | {
    type: 'rename';
    oldPath: string;
    newPath: string;
} | {
    type: 'close';
};
export declare type FSWatchEvent = WatcherEvent & {
    watcherId: string;
};
export declare type WorkerStatusUpdate = {
    state: 'downloading_manifest';
} | {
    state: 'downloaded_module';
    name: string;
    version: string;
    totalPending: number;
} | {
    state: 'starting_command';
} | {
    state: 'command_running';
};
export interface WorkerEvents {
    'internal/handshake/done': void;
    'internal/operation/done': {
        operationId: string;
        listenerPayload: unknown;
    };
    'internal/operation/failed': {
        operationId: string;
        error: Error;
    };
    'runtime/ready': void;
    'worker/progress': {
        workerId?: string;
        status: WorkerStatusUpdate;
    };
    'worker/tty': {
        workerId: string;
        payload: {
            data: string;
            type: 'out' | 'err';
        };
    };
    'worker/exit': {
        workerId: string;
        exitCode: number;
        error?: {
            message: string;
        };
    };
    'preview/port/ready': PreviewInfo;
    'fs/watch-event': FSWatchEvent;
}
declare type OperationEvent<Payload> = Payload & {
    operationId: string;
};
declare type MaybePromise<T> = T | Promise<T>;
export declare class MessageReceiver {
    private emitter;
    private senderPort;
    constructor();
    private waitForHandshake;
    private addMessageListener;
    on<Event extends keyof ConsumerEvents & string>(event: Event, listener: (message: ConsumerEvents[Event] extends [infer PayloadType, infer _] ? PayloadType : ConsumerEvents[Event]) => MaybePromise<ConsumerEvents[Event] extends [infer _, infer ReturnType] ? ReturnType | undefined : void>, options?: AddEventListenerOptions): void;
    send<Event extends keyof WorkerEvents & string>(event: Event, ...data: WorkerEvents[Event] extends Record<string, unknown> ? [WorkerEvents[Event]] : [undefined?]): void;
}
export declare class MessageSender {
    private readonly target;
    private emitter;
    private channel;
    private receiverPort;
    private receiverReadyPromise;
    constructor(target: Window);
    handshake(): Promise<void>;
    on<Event extends keyof WorkerEvents & string>(event: Event, listener: (message: MessageEvent<WorkerEvents[Event]>) => void, options?: AddEventListenerOptions): void;
    off<Event extends keyof WorkerEvents & string>(event: Event, listener: (message: MessageEvent<WorkerEvents[Event]>) => void, options?: AddEventListenerOptions): void;
    send<Event extends keyof ConsumerEvents & string>(event: Event, ...data: ConsumerEvents[Event] extends [infer PayloadType, infer _] ? [PayloadType] : ConsumerEvents[Event] extends Record<string, unknown> ? [ConsumerEvents[Event]] : [undefined?]): Promise<ConsumerEvents[Event] extends [infer _, infer ReturnType] ? OperationEvent<ReturnType> | undefined : void>;
}
export {};
