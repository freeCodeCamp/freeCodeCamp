/**
 * Kills process identified by `pid` and all its children
 *
 * @param pid
 * @param signal 'SIGTERM' by default
 * @param callback
 */
declare function treeKill(pid: number, callback?: (error?: Error) => void): void;
declare function treeKill(pid: number, signal?: string | number, callback?: (error?: Error) => void): void;

declare namespace treeKill {}

export = treeKill;
