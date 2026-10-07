import { MMRegExp } from 'minimatch';
import { Path } from 'path-scurry';
import { Pattern } from './pattern.js';
import { GlobWalkerOpts } from './walker.js';
/**
 * A cache of which patterns have been processed for a given Path
 */
export declare class HasWalkedCache {
    store: Map<string, Set<string>>;
    constructor(store?: Map<string, Set<string>>);
    copy(): HasWalkedCache;
    hasWalked(target: Path, pattern: Pattern): boolean | undefined;
    storeWalked(target: Path, pattern: Pattern): void;
}
/**
 * A record of which paths have been matched in a given walk step,
 * and whether they only are considered a match if they are a directory,
 * and whether their absolute or relative path should be returned.
 */
export declare class MatchRecord {
    store: Map<Path, number>;
    add(target: Path, absolute: boolean, ifDir: boolean): void;
    entries(): [Path, boolean, boolean][];
}
/**
 * A collection of patterns that must be processed in a subsequent step
 * for a given path.
 */
export declare class SubWalks {
    store: Map<Path, Pattern[]>;
    add(target: Path, pattern: Pattern): void;
    get(target: Path): Pattern[];
    entries(): [Path, Pattern[]][];
    keys(): Path[];
}
/**
 * The class that processes patterns for a given path.
 *
 * Handles child entry filtering, and determining whether a path's
 * directory contents must be read.
 */
export declare class Processor {
    hasWalkedCache: HasWalkedCache;
    matches: MatchRecord;
    subwalks: SubWalks;
    patterns?: Pattern[];
    follow: boolean;
    dot: boolean;
    opts: GlobWalkerOpts;
    constructor(opts: GlobWalkerOpts, hasWalkedCache?: HasWalkedCache);
    processPatterns(target: Path, patterns: Pattern[]): this;
    subwalkTargets(): Path[];
    child(): Processor;
    filterEntries(parent: Path, entries: Path[]): Processor;
    testGlobstar(e: Path, pattern: Pattern, rest: Pattern | null, absolute: boolean): void;
    testRegExp(e: Path, p: MMRegExp, rest: Pattern | null, absolute: boolean): void;
    testString(e: Path, p: string, rest: Pattern | null, absolute: boolean): void;
}
//# sourceMappingURL=processor.d.ts.map