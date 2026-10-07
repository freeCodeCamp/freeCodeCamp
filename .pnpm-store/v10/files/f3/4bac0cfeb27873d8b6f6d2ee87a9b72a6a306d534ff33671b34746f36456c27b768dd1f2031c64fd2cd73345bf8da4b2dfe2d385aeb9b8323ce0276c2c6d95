import type { FileSystemAdapter, ReaddirAsynchronousMethod, ReaddirSynchronousMethod } from './adapters/fs';
import * as async from './providers/async';
import Settings, { Options } from './settings';
import type { Dirent, Entry } from './types';
declare type AsyncCallback = async.AsyncCallback;
declare function scandir(path: string, callback: AsyncCallback): void;
declare function scandir(path: string, optionsOrSettings: Options | Settings, callback: AsyncCallback): void;
declare namespace scandir {
    function __promisify__(path: string, optionsOrSettings?: Options | Settings): Promise<Entry[]>;
}
declare function scandirSync(path: string, optionsOrSettings?: Options | Settings): Entry[];
export { scandir, scandirSync, Settings, AsyncCallback, Dirent, Entry, FileSystemAdapter, ReaddirAsynchronousMethod, ReaddirSynchronousMethod, Options };
