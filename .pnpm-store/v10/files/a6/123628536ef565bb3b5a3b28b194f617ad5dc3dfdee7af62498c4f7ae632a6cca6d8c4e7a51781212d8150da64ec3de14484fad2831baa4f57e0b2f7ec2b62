import * as fsStat from '@nodelib/fs.stat';
import * as fsWalk from '@nodelib/fs.walk';
import { Entry, Pattern, ReaderOptions } from '../types';
import Reader from './reader';
export default class ReaderSync extends Reader<Entry[]> {
    protected _walkSync: typeof fsWalk.walkSync;
    protected _statSync: typeof fsStat.statSync;
    dynamic(root: string, options: ReaderOptions): Entry[];
    static(patterns: Pattern[], options: ReaderOptions): Entry[];
    private _getEntry;
    private _getStat;
}
