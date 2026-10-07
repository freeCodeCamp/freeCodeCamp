import * as fsWalk from '@nodelib/fs.walk';
import { Entry, ReaderOptions, Pattern } from '../types';
import Reader from './reader';
import ReaderStream from './stream';
export default class ReaderAsync extends Reader<Promise<Entry[]>> {
    protected _walkAsync: typeof fsWalk.walk;
    protected _readerStream: ReaderStream;
    dynamic(root: string, options: ReaderOptions): Promise<Entry[]>;
    static(patterns: Pattern[], options: ReaderOptions): Promise<Entry[]>;
}
