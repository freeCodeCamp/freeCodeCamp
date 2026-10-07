import webpack from "webpack";
export declare function build(webpackConfig: webpack.Configuration): Promise<{
    stats: webpack.Stats;
    close: () => Promise<void>;
}>;
export declare function watch(webpackConfig: webpack.Configuration, onWatch: (err: Error | webpack.WebpackError | undefined | null, stats: webpack.Stats | undefined) => void, watchOptions?: webpack.Watching["watchOptions"]): {
    watcher: webpack.Watching;
    close: () => Promise<void>;
};
