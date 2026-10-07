import SyncReader from '../readers/sync';
import type Settings from '../settings';
import type { Entry } from '../types';
export default class SyncProvider {
    private readonly _root;
    private readonly _settings;
    protected readonly _reader: SyncReader;
    constructor(_root: string, _settings: Settings);
    read(): Entry[];
}
