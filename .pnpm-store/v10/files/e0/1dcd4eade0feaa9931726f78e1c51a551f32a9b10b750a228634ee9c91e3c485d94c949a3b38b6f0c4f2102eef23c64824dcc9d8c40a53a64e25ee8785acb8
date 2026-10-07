/// <reference types="node" />
import { EventEmitter } from 'events';
import * as fsScandir from '@nodelib/fs.scandir';
import type Settings from '../settings';
import type { Entry, Errno } from '../types';
import Reader from './reader';
declare type EntryEventCallback = (entry: Entry) => void;
declare type ErrorEventCallback = (error: Errno) => void;
declare type EndEventCallback = () => void;
export default class AsyncReader extends Reader {
    protected readonly _settings: Settings;
    protected readonly _scandir: typeof fsScandir.scandir;
    protected readonly _emitter: EventEmitter;
    private readonly _queue;
    private _isFatalError;
    private _isDestroyed;
    constructor(_root: string, _settings: Settings);
    read(): EventEmitter;
    get isDestroyed(): boolean;
    destroy(): void;
    onEntry(callback: EntryEventCallback): void;
    onError(callback: ErrorEventCallback): void;
    onEnd(callback: EndEventCallback): void;
    private _pushToQueue;
    private _worker;
    private _handleError;
    private _handleEntry;
    private _emitEntry;
}
export {};
