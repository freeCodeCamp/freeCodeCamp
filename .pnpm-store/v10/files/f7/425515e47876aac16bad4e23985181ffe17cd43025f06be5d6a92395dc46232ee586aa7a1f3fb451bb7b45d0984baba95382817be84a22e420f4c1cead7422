declare type FilePath = string;
declare type GlobPattern = string;

declare namespace ParcelWatcher {
  export type BackendType = 
    | 'fs-events'
    | 'watchman'
    | 'inotify'
    | 'windows'
    | 'brute-force';
  export type EventType = 'create' | 'update' | 'delete';
  export interface Options {
    ignore?: (FilePath|GlobPattern)[];
    backend?: BackendType;
  }
  export type SubscribeCallback = (
    err: Error | null,
    events: Event[]
  ) => unknown;
  export interface AsyncSubscription {
    unsubscribe(): Promise<void>;
  }
  export interface Event {
    path: FilePath;
    type: EventType;
  }
  export function getEventsSince(
    dir: FilePath,
    snapshot: FilePath,
    opts?: Options
  ): Promise<Event[]>;
  export function subscribe(
    dir: FilePath,
    fn: SubscribeCallback,
    opts?: Options
  ): Promise<AsyncSubscription>;
  export function unsubscribe(
    dir: FilePath,
    fn: SubscribeCallback,
    opts?: Options
  ): Promise<void>;
  export function writeSnapshot(
    dir: FilePath,
    snapshot: FilePath,
    opts?: Options
  ): Promise<FilePath>;
}

export = ParcelWatcher;