/// <reference types="node" />
import { Readable } from 'stream';
import { Task } from '../managers/tasks';
import ReaderStream from '../readers/stream';
import { ReaderOptions } from '../types';
import Provider from './provider';
export default class ProviderStream extends Provider<Readable> {
    protected _reader: ReaderStream;
    read(task: Task): Readable;
    api(root: string, task: Task, options: ReaderOptions): Readable;
}
