import { Pattern, MicromatchOptions, PatternRe } from '../../types';
import Settings from '../../settings';
export type PatternSegment = StaticPatternSegment | DynamicPatternSegment;
type StaticPatternSegment = {
    dynamic: false;
    pattern: Pattern;
};
type DynamicPatternSegment = {
    dynamic: true;
    pattern: Pattern;
    patternRe: PatternRe;
};
export type PatternSection = PatternSegment[];
export type PatternInfo = {
    /**
     * Indicates that the pattern has a globstar (more than a single section).
     */
    complete: boolean;
    pattern: Pattern;
    segments: PatternSegment[];
    sections: PatternSection[];
};
export default abstract class Matcher {
    private readonly _patterns;
    private readonly _settings;
    private readonly _micromatchOptions;
    protected readonly _storage: PatternInfo[];
    constructor(_patterns: Pattern[], _settings: Settings, _micromatchOptions: MicromatchOptions);
    private _fillStorage;
    private _getPatternSegments;
    private _splitSegmentsIntoSections;
}
export {};
