import webpack from 'webpack';
import { ForkTsCheckerWebpackPluginOptions } from './ForkTsCheckerWebpackPluginOptions';
import { Pool } from './utils/async/pool';
declare class ForkTsCheckerWebpackPlugin implements webpack.Plugin {
    /**
     * Current version of the plugin
     */
    static readonly version: string;
    /**
     * Default pools for the plugin concurrency limit
     */
    static readonly issuesPool: Pool;
    static readonly dependenciesPool: Pool;
    /**
     * @deprecated Use ForkTsCheckerWebpackPlugin.issuesPool instead
     */
    static get pool(): Pool;
    private readonly options;
    constructor(options?: ForkTsCheckerWebpackPluginOptions);
    static getCompilerHooks(compiler: webpack.Compiler): {
        start: import("tapable").AsyncSeriesWaterfallHook<import("./reporter/FilesChange").FilesChange, webpack.compilation.Compilation, any>;
        waiting: import("tapable").SyncHook<webpack.compilation.Compilation, any, any>;
        canceled: import("tapable").SyncHook<webpack.compilation.Compilation, any, any>;
        error: import("tapable").SyncHook<Error, webpack.compilation.Compilation, any>;
        issues: import("tapable").SyncWaterfallHook<import("./issue/Issue").Issue[], webpack.compilation.Compilation | undefined, void>;
    };
    apply(compiler: webpack.Compiler): void;
}
export { ForkTsCheckerWebpackPlugin };
