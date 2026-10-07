import { MicromatchOptions, Pattern, PatternRe } from '../types';
type PatternTypeOptions = {
    braceExpansion?: boolean;
    caseSensitiveMatch?: boolean;
    extglob?: boolean;
};
export declare function isStaticPattern(pattern: Pattern, options?: PatternTypeOptions): boolean;
export declare function isDynamicPattern(pattern: Pattern, options?: PatternTypeOptions): boolean;
export declare function convertToPositivePattern(pattern: Pattern): Pattern;
export declare function convertToNegativePattern(pattern: Pattern): Pattern;
export declare function isNegativePattern(pattern: Pattern): boolean;
export declare function isPositivePattern(pattern: Pattern): boolean;
export declare function getNegativePatterns(patterns: Pattern[]): Pattern[];
export declare function getPositivePatterns(patterns: Pattern[]): Pattern[];
/**
 * Returns patterns that can be applied inside the current directory.
 *
 * @example
 * // ['./*', '*', 'a/*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */
export declare function getPatternsInsideCurrentDirectory(patterns: Pattern[]): Pattern[];
/**
 * Returns patterns to be expanded relative to (outside) the current directory.
 *
 * @example
 * // ['../*', './../*']
 * getPatternsInsideCurrentDirectory(['./*', '*', 'a/*', '../*', './../*'])
 */
export declare function getPatternsOutsideCurrentDirectory(patterns: Pattern[]): Pattern[];
export declare function isPatternRelatedToParentDirectory(pattern: Pattern): boolean;
export declare function getBaseDirectory(pattern: Pattern): string;
export declare function hasGlobStar(pattern: Pattern): boolean;
export declare function endsWithSlashGlobStar(pattern: Pattern): boolean;
export declare function isAffectDepthOfReadingPattern(pattern: Pattern): boolean;
export declare function expandPatternsWithBraceExpansion(patterns: Pattern[]): Pattern[];
export declare function expandBraceExpansion(pattern: Pattern): Pattern[];
export declare function getPatternParts(pattern: Pattern, options: MicromatchOptions): Pattern[];
export declare function makeRe(pattern: Pattern, options: MicromatchOptions): PatternRe;
export declare function convertPatternsToRe(patterns: Pattern[], options: MicromatchOptions): PatternRe[];
export declare function matchAny(entry: string, patternsRe: PatternRe[]): boolean;
/**
 * This package only works with forward slashes as a path separator.
 * Because of this, we cannot use the standard `path.normalize` method, because on Windows platform it will use of backslashes.
 */
export declare function removeDuplicateSlashes(pattern: string): string;
export declare function partitionAbsoluteAndRelative(patterns: Pattern[]): Pattern[][];
export declare function isAbsolute(pattern: string): boolean;
export {};
