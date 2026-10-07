import * as fsScandir from '@nodelib/fs.scandir';
import type { Entry, Errno } from './types';
export declare type FilterFunction<T> = (value: T) => boolean;
export declare type DeepFilterFunction = FilterFunction<Entry>;
export declare type EntryFilterFunction = FilterFunction<Entry>;
export declare type ErrorFilterFunction = FilterFunction<Errno>;
export interface Options {
    basePath?: string;
    concurrency?: number;
    deepFilter?: DeepFilterFunction;
    entryFilter?: EntryFilterFunction;
    errorFilter?: ErrorFilterFunction;
    followSymbolicLinks?: boolean;
    fs?: Partial<fsScandir.FileSystemAdapter>;
    pathSegmentSeparator?: string;
    stats?: boolean;
    throwErrorOnBrokenSymbolicLink?: boolean;
}
export default class Settings {
    private readonly _options;
    readonly basePath?: string;
    readonly concurrency: number;
    readonly deepFilter: DeepFilterFunction | null;
    readonly entryFilter: EntryFilterFunction | null;
    readonly errorFilter: ErrorFilterFunction | null;
    readonly pathSegmentSeparator: string;
    readonly fsScandirSettings: fsScandir.Settings;
    constructor(_options?: Options);
    private _getValue;
}
