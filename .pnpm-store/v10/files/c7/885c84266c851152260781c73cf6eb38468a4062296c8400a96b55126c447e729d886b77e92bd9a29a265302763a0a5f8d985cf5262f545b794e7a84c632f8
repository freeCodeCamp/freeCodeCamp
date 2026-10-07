import { Emitter } from 'strict-event-emitter';
import type { MessageSender, WorkerStatusUpdate } from '../messages';
export interface ShellEvents {
    'shell/runCommand': [
        {
            command: string;
            args: Array<string>;
            options: ShellCommandOptions;
        },
        ShellInfo
    ];
    'shell/exit': ShellInfo;
    'shell/stdin': {
        data: string | Uint8Array;
        workerId: string;
    };
}
export interface ShellCommandOptions {
    cwd?: string;
    env?: Record<string, string>;
}
export declare type ShellInfo = {
    id: string;
};
export declare class ShellApi {
    private readonly channel;
    constructor(channel: MessageSender);
    create(): ShellProcess;
}
export declare class ShellProcess {
    private readonly channel;
    id?: string;
    state: 'running' | 'idle';
    stdout: Emitter<{
        data: [string];
    }>;
    stderr: Emitter<{
        data: [string];
    }>;
    stdin: {
        write: (data: string | Uint8Array) => Promise<void>;
    };
    constructor(channel: MessageSender);
    private forwardStdEvents;
    /**
     * Evaluates a given module in the File
     */
    runCommand(command: string, args: Array<string>, options?: ShellCommandOptions): Promise<ShellInfo>;
    on(message: 'exit', listener: (exitCode: number, error?: {
        message: string;
    }) => void): Promise<void>;
    on(message: 'progress', listener: (status: WorkerStatusUpdate) => void): Promise<void>;
    /**
     * Terminates the shell process.
     */
    kill(): Promise<void>;
}
