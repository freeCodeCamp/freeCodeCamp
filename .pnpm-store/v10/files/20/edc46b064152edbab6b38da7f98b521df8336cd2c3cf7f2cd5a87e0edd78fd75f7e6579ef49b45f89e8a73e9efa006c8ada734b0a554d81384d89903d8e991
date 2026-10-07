import { MicromatchOptions, EntryFilterFunction, Pattern } from '../../types';
import Settings from '../../settings';
export default class DeepFilter {
    private readonly _settings;
    private readonly _micromatchOptions;
    constructor(_settings: Settings, _micromatchOptions: MicromatchOptions);
    getFilter(basePath: string, positive: Pattern[], negative: Pattern[]): EntryFilterFunction;
    private _getMatcher;
    private _getNegativePatternsRe;
    private _filter;
    private _isSkippedByDeep;
    private _getEntryLevel;
    private _isSkippedSymbolicLink;
    private _isSkippedByPositivePatterns;
    private _isSkippedByNegativePatterns;
}
