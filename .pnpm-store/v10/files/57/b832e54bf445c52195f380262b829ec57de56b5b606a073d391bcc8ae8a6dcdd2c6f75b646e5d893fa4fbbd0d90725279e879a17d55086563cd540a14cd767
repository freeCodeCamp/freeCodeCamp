// @flow
declare type FilePath = string;
declare type GlobPattern = string;

export type BackendType = 
  | 'fs-events'
  | 'watchman'
  | 'inotify'
  | 'windows'
  | 'brute-force';
export type EventType = 'create' | 'update' | 'delete';
export interface Options {
  ignore?: Array<FilePath | GlobPattern>,
  backend?: BackendType
}
export type SubscribeCallback = (
  err: ?Error,
  events: Array<Event>
) => mixed;
export interface AsyncSubscription {
  unsubscribe(): Promise<void>
}
export interface Event {
  path: FilePath,
  type: EventType
}
declare module.exports: {
  getEventsSince(
    dir: FilePath,
    snapshot: FilePath,
    opts?: Options
  ): Promise<Array<Event>>,
  subscribe(
    dir: FilePath,
    fn: SubscribeCallback,
    opts?: Options
  ): Promise<AsyncSubscription>,
  unsubscribe(
    dir: FilePath,
    fn: SubscribeCallback,
    opts?: Options
  ): Promise<void>,
  writeSnapshot(
    dir: FilePath,
    snapshot: FilePath,
    opts?: Options
  ): Promise<FilePath>
}