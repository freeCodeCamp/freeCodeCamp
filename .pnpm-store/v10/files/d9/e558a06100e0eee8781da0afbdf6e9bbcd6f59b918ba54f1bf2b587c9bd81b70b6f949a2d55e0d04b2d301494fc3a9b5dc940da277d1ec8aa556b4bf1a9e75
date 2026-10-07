export declare const EXECUTE = 1;
export declare const ERROR = 2;
export declare const RESULT = 3;
export declare const END = 0;
export declare const CUSTOM_MESSAGE = 4;
export declare const WORKER_READY = 8;
type Counter = number;
type CustomMessage = [typeof CUSTOM_MESSAGE, Counter, unknown];
type FunctionName = string | number | symbol;
type FunctionArgs = Array<any>;
type ExecuteMessage = [typeof EXECUTE, Counter, FunctionName, FunctionArgs];
type EndMessage = [typeof END, Counter];
type WorkerReadyMessage = [typeof WORKER_READY, Counter];
export type ParentMessageUnion = ExecuteMessage | EndMessage | CustomMessage;
type ErrorType = string;
type ErrorMessage = string;
type ErrorStack = string;
type TaskError = [
    typeof ERROR,
    Counter,
    ErrorType,
    ErrorMessage,
    ErrorStack | undefined,
    Error
];
type ResultType = unknown;
type TaskResult = [typeof RESULT, Counter, ResultType];
export type ChildMessageUnion = TaskError | TaskResult | CustomMessage | WorkerReadyMessage;
export {};
