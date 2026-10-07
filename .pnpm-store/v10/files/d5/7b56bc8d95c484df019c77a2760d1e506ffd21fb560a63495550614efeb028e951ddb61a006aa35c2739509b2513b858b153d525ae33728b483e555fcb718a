import * as fs from './adapters/fs';
export interface Options {
    followSymbolicLink?: boolean;
    fs?: Partial<fs.FileSystemAdapter>;
    markSymbolicLink?: boolean;
    throwErrorOnBrokenSymbolicLink?: boolean;
}
export default class Settings {
    private readonly _options;
    readonly followSymbolicLink: boolean;
    readonly fs: fs.FileSystemAdapter;
    readonly markSymbolicLink: boolean;
    readonly throwErrorOnBrokenSymbolicLink: boolean;
    constructor(_options?: Options);
    private _getValue;
}
