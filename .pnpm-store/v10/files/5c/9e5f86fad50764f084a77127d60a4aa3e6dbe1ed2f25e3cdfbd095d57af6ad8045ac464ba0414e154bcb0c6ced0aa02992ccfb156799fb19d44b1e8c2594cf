import AsyncReader from '../readers/async';
import type Settings from '../settings';
import type { Entry, Errno } from '../types';
export declare type AsyncCallback = (error: Errno, entries: Entry[]) => void;
export default class AsyncProvider {
    private readonly _root;
    private readonly _settings;
    protected readonly _reader: AsyncReader;
    private readonly _storage;
    constructor(_root: string, _settings: Settings);
    read(callback: AsyncCallback): void;
}
