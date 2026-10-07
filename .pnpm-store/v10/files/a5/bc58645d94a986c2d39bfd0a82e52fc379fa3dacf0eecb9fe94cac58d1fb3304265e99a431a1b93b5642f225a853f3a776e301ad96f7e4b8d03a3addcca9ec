/// <reference types="node" />
import type { Readable } from 'stream';
import type { Dirent, FileSystemAdapter } from '@nodelib/fs.scandir';
import { AsyncCallback } from './providers/async';
import Settings, { DeepFilterFunction, EntryFilterFunction, ErrorFilterFunction, Options } from './settings';
import type { Entry } from './types';
declare function walk(directory: string, callback: AsyncCallback): void;
declare function walk(directory: string, optionsOrSettings: Options | Settings, callback: AsyncCallback): void;
declare namespace walk {
    function __promisify__(directory: string, optionsOrSettings?: Options | Settings): Promise<Entry[]>;
}
declare function walkSync(directory: string, optionsOrSettings?: Options | Settings): Entry[];
declare function walkStream(directory: string, optionsOrSettings?: Options | Settings): Readable;
export { walk, walkSync, walkStream, Settings, AsyncCallback, Dirent, Entry, FileSystemAdapter, Options, DeepFilterFunction, EntryFilterFunction, ErrorFilterFunction };
