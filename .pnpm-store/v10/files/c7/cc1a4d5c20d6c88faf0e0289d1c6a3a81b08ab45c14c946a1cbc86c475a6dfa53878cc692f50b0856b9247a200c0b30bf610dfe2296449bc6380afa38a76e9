import Settings from '../../settings';
import { EntryFilterFunction, MicromatchOptions, Pattern } from '../../types';
export default class EntryFilter {
    private readonly _settings;
    private readonly _micromatchOptions;
    readonly index: Map<string, undefined>;
    constructor(_settings: Settings, _micromatchOptions: MicromatchOptions);
    getFilter(positive: Pattern[], negative: Pattern[]): EntryFilterFunction;
    private _filter;
    private _isDuplicateEntry;
    private _createIndexRecord;
    private _onlyFileFilter;
    private _onlyDirectoryFilter;
    private _isMatchToPatternsSet;
    private _isMatchToAbsoluteNegative;
    private _isMatchToPatterns;
}
