import { Task } from '../managers/tasks';
import Settings from '../settings';
import { MicromatchOptions, ReaderOptions } from '../types';
import DeepFilter from './filters/deep';
import EntryFilter from './filters/entry';
import ErrorFilter from './filters/error';
import EntryTransformer from './transformers/entry';
export default abstract class Provider<T> {
    protected readonly _settings: Settings;
    readonly errorFilter: ErrorFilter;
    readonly entryFilter: EntryFilter;
    readonly deepFilter: DeepFilter;
    readonly entryTransformer: EntryTransformer;
    constructor(_settings: Settings);
    abstract read(_task: Task): T;
    protected _getRootDirectory(task: Task): string;
    protected _getReaderOptions(task: Task): ReaderOptions;
    protected _getMicromatchOptions(): MicromatchOptions;
}
