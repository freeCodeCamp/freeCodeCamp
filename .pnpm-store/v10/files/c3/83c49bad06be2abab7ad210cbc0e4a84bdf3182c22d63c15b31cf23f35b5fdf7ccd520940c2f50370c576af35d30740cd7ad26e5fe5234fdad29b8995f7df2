import { ChildProcess, SpawnOptions } from 'node:child_process';
import { Readable } from 'node:stream';

declare class NonZeroExitError extends Error {
    readonly result: Result;
    readonly output?: Output;
    get exitCode(): number | undefined;
    constructor(result: Result, output?: Output);
}

interface Output {
    stderr: string;
    stdout: string;
    exitCode: number | undefined;
}
interface PipeOptions extends Options {
}
type KillSignal = Parameters<ChildProcess['kill']>[0];
interface OutputApi extends AsyncIterable<string> {
    pipe(command: string, args?: string[], options?: Partial<PipeOptions>): Result;
    process: ChildProcess | undefined;
    kill(signal?: KillSignal): boolean;
    get pid(): number | undefined;
    get aborted(): boolean;
    get killed(): boolean;
    get exitCode(): number | undefined;
}
type Result = PromiseLike<Output> & OutputApi;
interface Options {
    signal: AbortSignal;
    nodeOptions: SpawnOptions;
    timeout: number;
    persist: boolean;
    stdin: ExecProcess;
    throwOnError: boolean;
}
interface TinyExec {
    (command: string, args?: string[], options?: Partial<Options>): Result;
}
declare class ExecProcess implements Result {
    protected _process?: ChildProcess;
    protected _aborted: boolean;
    protected _options: Partial<Options>;
    protected _command: string;
    protected _args: string[];
    protected _resolveClose?: () => void;
    protected _processClosed: Promise<void>;
    protected _thrownError?: Error;
    get process(): ChildProcess | undefined;
    get pid(): number | undefined;
    get exitCode(): number | undefined;
    constructor(command: string, args?: string[], options?: Partial<Options>);
    kill(signal?: KillSignal): boolean;
    get aborted(): boolean;
    get killed(): boolean;
    pipe(command: string, args?: string[], options?: Partial<PipeOptions>): Result;
    [Symbol.asyncIterator](): AsyncIterator<string>;
    protected _waitForOutput(): Promise<Output>;
    then<TResult1 = Output, TResult2 = never>(onfulfilled?: ((value: Output) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: unknown) => TResult2 | PromiseLike<TResult2>) | null): Promise<TResult1 | TResult2>;
    protected _streamOut?: Readable;
    protected _streamErr?: Readable;
    spawn(): void;
    protected _resetState(): void;
    protected _onError: (err: Error) => void;
    protected _onClose: () => void;
}
declare const x: TinyExec;
declare const exec: TinyExec;

export { ExecProcess, type KillSignal, NonZeroExitError, type Options, type Output, type OutputApi, type PipeOptions, type Result, type TinyExec, exec, x };
