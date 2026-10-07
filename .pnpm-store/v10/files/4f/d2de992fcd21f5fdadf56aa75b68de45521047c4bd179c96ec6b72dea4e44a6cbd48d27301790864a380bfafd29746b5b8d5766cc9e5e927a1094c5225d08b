import type { UIMessage } from './types';
export declare function generateId(): string;
export declare function lastAssistantMessageIsCompleteWithToolCalls({ messages, }: {
    messages: UIMessage[];
}): boolean;
export declare class SerialJobExecutor {
    private queue;
    private isRunning;
    run<T>(job: () => Promise<T>): Promise<T>;
    private processQueue;
}
export declare function resolveValue<T>(value: T | (() => T) | (() => Promise<T>) | undefined): Promise<T | undefined>;
