import { Task } from '../managers/tasks';
import { Entry, EntryItem, ReaderOptions } from '../types';
import ReaderAsync from '../readers/async';
import Provider from './provider';
export default class ProviderAsync extends Provider<Promise<EntryItem[]>> {
    protected _reader: ReaderAsync;
    read(task: Task): Promise<EntryItem[]>;
    api(root: string, task: Task, options: ReaderOptions): Promise<Entry[]>;
}
