// @flow
import type {Diagnostic} from '@parcel/diagnostic';
import type {FilePath} from '@parcel/types';

export type LocationCallRequest = {|
  args: $ReadOnlyArray<mixed>,
  location: string,
  method?: string,
|};

export type HandleCallRequest = {|
  args: $ReadOnlyArray<mixed>,
  handle: number,
|};

export type CallRequest = LocationCallRequest | HandleCallRequest;

export type WorkerRequest = {|
  args: $ReadOnlyArray<any>,
  awaitResponse?: boolean,
  child?: ?number,
  idx?: number,
  location?: FilePath,
  method?: ?string,
  type: 'request',
  handle?: number,
|};

export type WorkerDataResponse = {|
  idx?: number,
  child?: number,
  type: 'response',
  contentType: 'data',
  content: string,
|};

export type WorkerErrorResponse = {|
  idx?: number,
  child?: number,
  type: 'response',
  contentType: 'error',
  content: Diagnostic | Array<Diagnostic>,
|};

export type WorkerResponse = WorkerDataResponse | WorkerErrorResponse;
export type WorkerMessage = WorkerRequest | WorkerResponse;

export type MessageHandler = (data: WorkerMessage) => void;
export type ErrorHandler = (err: Error) => void;
export type ExitHandler = (code: number) => void;
export interface WorkerImpl {
  constructor(
    execArgv: Object,
    onMessage: MessageHandler,
    onError: ErrorHandler,
    onExit: ExitHandler,
  ): void;
  start(): Promise<void>;
  stop(): Promise<void>;
  send(data: WorkerMessage): void;
}

export interface ChildImpl {
  constructor(onMessage: MessageHandler, onExit: ExitHandler): void;
  send(data: WorkerMessage): void;
}

export type BackendType = 'threads' | 'process';
