import { ForkTsCheckerWebpackPluginState } from '../ForkTsCheckerWebpackPluginState';
import { FSWatcher } from 'chokidar';
import { Watcher, WatchFileSystem, WatchFileSystemOptions } from './WatchFileSystem';
import { Compiler } from 'webpack';
declare class InclusiveNodeWatchFileSystem implements WatchFileSystem {
    private watchFileSystem;
    private compiler;
    private pluginState;
    get watcher(): import("./WatchFileSystem").Watchpack;
    readonly dirsWatchers: Map<string, FSWatcher | undefined>;
    constructor(watchFileSystem: WatchFileSystem, compiler: Compiler, pluginState: ForkTsCheckerWebpackPluginState);
    private paused;
    watch(files: Iterable<string>, dirs: Iterable<string>, missing: Iterable<string>, startTime?: number, options?: Partial<WatchFileSystemOptions>, callback?: Function, callbackUndelayed?: Function): Watcher;
}
export { InclusiveNodeWatchFileSystem };
