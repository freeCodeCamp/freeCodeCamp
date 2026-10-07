import Settings from '../settings';
import { Pattern, PatternsGroup } from '../types';
export type Task = {
    base: string;
    dynamic: boolean;
    patterns: Pattern[];
    positive: Pattern[];
    negative: Pattern[];
};
export declare function generate(input: Pattern[], settings: Settings): Task[];
/**
 * Returns tasks grouped by basic pattern directories.
 *
 * Patterns that can be found inside (`./`) and outside (`../`) the current directory are handled separately.
 * This is necessary because directory traversal starts at the base directory and goes deeper.
 */
export declare function convertPatternsToTasks(positive: Pattern[], negative: Pattern[], dynamic: boolean): Task[];
export declare function getPositivePatterns(patterns: Pattern[]): Pattern[];
export declare function getNegativePatternsAsPositive(patterns: Pattern[], ignore: Pattern[]): Pattern[];
export declare function groupPatternsByBaseDirectory(patterns: Pattern[]): PatternsGroup;
export declare function convertPatternGroupsToTasks(positive: PatternsGroup, negative: Pattern[], dynamic: boolean): Task[];
export declare function convertPatternGroupToTask(base: string, positive: Pattern[], negative: Pattern[], dynamic: boolean): Task;
