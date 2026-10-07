/// <reference types="node" />
import { Readable } from 'stream';
import * as fsStat from '@nodelib/fs.stat';
import * as fsWalk from '@nodelib/fs.walk';
import { Pattern, ReaderOptions } from '../types';
import Reader from './reader';
export default class ReaderStream extends Reader<Readable> {
    protected _walkStream: typeof fsWalk.walkStream;
    protected _stat: typeof fsStat.stat;
    dynamic(root: string, options: ReaderOptions): Readable;
    static(patterns: Pattern[], options: ReaderOptions): Readable;
    private _getEntry;
    private _getStat;
}
