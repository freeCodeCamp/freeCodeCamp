import * as webpack from 'webpack';
import { SyncHook, SyncWaterfallHook, AsyncSeriesWaterfallHook } from 'tapable';
import { FilesChange } from '../reporter';
import { Issue } from '../issue';
declare function createForkTsCheckerWebpackPluginHooks(): {
    start: AsyncSeriesWaterfallHook<FilesChange, webpack.compilation.Compilation, any>;
    waiting: SyncHook<webpack.compilation.Compilation, any, any>;
    canceled: SyncHook<webpack.compilation.Compilation, any, any>;
    error: SyncHook<Error, webpack.compilation.Compilation, any>;
    issues: SyncWaterfallHook<Issue[], webpack.compilation.Compilation | undefined, void>;
};
declare type ForkTsCheckerWebpackPluginHooks = ReturnType<typeof createForkTsCheckerWebpackPluginHooks>;
declare function getForkTsCheckerWebpackPluginHooks(compiler: webpack.Compiler | webpack.MultiCompiler): {
    start: AsyncSeriesWaterfallHook<FilesChange, webpack.compilation.Compilation, any>;
    waiting: SyncHook<webpack.compilation.Compilation, any, any>;
    canceled: SyncHook<webpack.compilation.Compilation, any, any>;
    error: SyncHook<Error, webpack.compilation.Compilation, any>;
    issues: SyncWaterfallHook<Issue[], webpack.compilation.Compilation | undefined, void>;
};
export { getForkTsCheckerWebpackPluginHooks, ForkTsCheckerWebpackPluginHooks };
