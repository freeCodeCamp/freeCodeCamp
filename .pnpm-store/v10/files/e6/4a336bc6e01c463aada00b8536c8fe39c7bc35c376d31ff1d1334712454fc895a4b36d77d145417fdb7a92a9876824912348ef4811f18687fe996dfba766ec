/// <reference types="node" />
import { Readable } from 'stream';
import AsyncReader from '../readers/async';
import type Settings from '../settings';
export default class StreamProvider {
    private readonly _root;
    private readonly _settings;
    protected readonly _reader: AsyncReader;
    protected readonly _stream: Readable;
    constructor(_root: string, _settings: Settings);
    read(): Readable;
}
