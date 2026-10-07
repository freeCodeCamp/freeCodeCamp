import { Task } from '../managers/tasks';
import ReaderSync from '../readers/sync';
import { Entry, EntryItem, ReaderOptions } from '../types';
import Provider from './provider';
export default class ProviderSync extends Provider<EntryItem[]> {
    protected _reader: ReaderSync;
    read(task: Task): EntryItem[];
    api(root: string, task: Task, options: ReaderOptions): Entry[];
}
