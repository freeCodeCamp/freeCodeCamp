/// <reference types="node" />
import * as fsWalk from '@nodelib/fs.walk';
export type ErrnoException = NodeJS.ErrnoException;
export type Entry = fsWalk.Entry;
export type EntryItem = string | Entry;
export type Pattern = string;
export type PatternRe = RegExp;
export type PatternsGroup = Record<string, Pattern[]>;
export type ReaderOptions = fsWalk.Options & {
    transform(entry: Entry): EntryItem;
    deepFilter: DeepFilterFunction;
    entryFilter: EntryFilterFunction;
    errorFilter: ErrorFilterFunction;
    fs: FileSystemAdapter;
    stats: boolean;
};
export type ErrorFilterFunction = fsWalk.ErrorFilterFunction;
export type EntryFilterFunction = fsWalk.EntryFilterFunction;
export type DeepFilterFunction = fsWalk.DeepFilterFunction;
export type EntryTransformerFunction = (entry: Entry) => EntryItem;
export type MicromatchOptions = {
    dot?: boolean;
    matchBase?: boolean;
    nobrace?: boolean;
    nocase?: boolean;
    noext?: boolean;
    noglobstar?: boolean;
    posix?: boolean;
    strictSlashes?: boolean;
};
export type FileSystemAdapter = fsWalk.FileSystemAdapter;
