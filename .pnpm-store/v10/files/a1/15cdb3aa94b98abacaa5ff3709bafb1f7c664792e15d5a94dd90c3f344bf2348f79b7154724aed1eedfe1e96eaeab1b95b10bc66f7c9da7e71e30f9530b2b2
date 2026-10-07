import type * as webpack from 'webpack';
export interface IAddWorkerEntryPointPluginOptions {
    id: string;
    entry: string;
    filename: string;
    chunkFilename?: string;
    plugins: webpack.WebpackPluginInstance[];
}
export declare class AddWorkerEntryPointPlugin implements webpack.WebpackPluginInstance {
    private readonly options;
    constructor({ id, entry, filename, chunkFilename, plugins }: IAddWorkerEntryPointPluginOptions);
    apply(compiler: webpack.Compiler): void;
}
