import { ChildProcess, SpawnOptions, SpawnSyncOptions } from "node:child_process";
import { Readable } from "node:stream";

//#region src/non-zero-exit-error.d.ts
declare class NonZeroExitError extends Error {
  readonly result: CommonOutputApi;
  readonly output?: Output | undefined;
  get exitCode(): number | undefined;
  constructor(result: CommonOutputApi, output?: Output | undefined);
}
//#endregion
//#region src/main.d.ts
interface Output {
  stderr: string;
  stdout: string;
  exitCode: number | undefined;
}
interface PipeOptions extends Options {}
type KillSignal = Parameters<ChildProcess['kill']>[0];
interface CommonOutputApi {
  get pid(): number | undefined;
  get killed(): boolean;
  get exitCode(): number | undefined;
}
interface OutputApi extends AsyncIterable<string>, CommonOutputApi {
  process: ChildProcess | undefined;
  get aborted(): boolean;
  pipe(command: string, args?: string[], options?: Partial<PipeOptions>): Result;
  kill(signal?: KillSignal): boolean;
}
interface OutputApiSync extends Iterable<string>, CommonOutputApi {}
type Result = PromiseLike<Output> & OutputApi;
type SyncResult = Output & OutputApiSync;
interface CommonOptions {
  timeout: number;
  throwOnError: boolean;
}
interface Options extends CommonOptions {
  signal: AbortSignal;
  nodeOptions: SpawnOptions;
  persist: boolean;
  stdin: Result | ExecProcess | string;
}
interface SyncOptions extends CommonOptions {
  nodeOptions: SpawnSyncOptions;
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
declare function xSync(command: string, args?: string[], options?: Partial<SyncOptions>): SyncResult;
declare const x: TinyExec;
declare const exec: TinyExec;
declare const execSync: typeof xSync;
//#endregion
export { CommonOptions, CommonOutputApi, ExecProcess, KillSignal, NonZeroExitError, Options, Output, OutputApi, OutputApiSync, PipeOptions, Result, SyncOptions, SyncResult, TinyExec, exec, execSync, x, xSync };