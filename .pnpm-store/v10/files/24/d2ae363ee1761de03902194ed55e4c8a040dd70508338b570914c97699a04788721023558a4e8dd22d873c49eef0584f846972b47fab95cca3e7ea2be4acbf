import * as fsScandir from '@nodelib/fs.scandir';
import type { Entry } from '../types';
import Reader from './reader';
export default class SyncReader extends Reader {
    protected readonly _scandir: typeof fsScandir.scandirSync;
    private readonly _storage;
    private readonly _queue;
    read(): Entry[];
    private _pushToQueue;
    private _handleQueue;
    private _handleDirectory;
    private _handleError;
    private _handleEntry;
    private _pushToStorage;
}
