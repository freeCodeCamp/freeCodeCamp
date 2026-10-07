/**
 * Single-use utility classes to provide functionality to the {@link Glob}
 * methods.
 *
 * @module
 */
import { Minipass } from 'minipass';
import { Path } from 'path-scurry';
import { IgnoreLike } from './ignore.js';
import { Pattern } from './pattern.js';
import { Processor } from './processor.js';
export interface GlobWalkerOpts {
    absolute?: boolean;
    allowWindowsEscape?: boolean;
    cwd?: string | URL;
    dot?: boolean;
    dotRelative?: boolean;
    follow?: boolean;
    ignore?: string | string[] | IgnoreLike;
    mark?: boolean;
    matchBase?: boolean;
    maxDepth?: number;
    nobrace?: boolean;
    nocase?: boolean;
    nodir?: boolean;
    noext?: boolean;
    noglobstar?: boolean;
    platform?: NodeJS.Platform;
    posix?: boolean;
    realpath?: boolean;
    root?: string;
    stat?: boolean;
    signal?: AbortSignal;
    windowsPathsNoEscape?: boolean;
    withFileTypes?: boolean;
    includeChildMatches?: boolean;
}
export type GWOFileTypesTrue = GlobWalkerOpts & {
    withFileTypes: true;
};
export type GWOFileTypesFalse = GlobWalkerOpts & {
    withFileTypes: false;
};
export type GWOFileTypesUnset = GlobWalkerOpts & {
    withFileTypes?: undefined;
};
export type Result<O extends GlobWalkerOpts> = O extends GWOFileTypesTrue ? Path : O extends GWOFileTypesFalse ? string : O extends GWOFileTypesUnset ? string : Path | string;
export type Matches<O extends GlobWalkerOpts> = O extends GWOFileTypesTrue ? Set<Path> : O extends GWOFileTypesFalse ? Set<string> : O extends GWOFileTypesUnset ? Set<string> : Set<Path | string>;
export type MatchStream<O extends GlobWalkerOpts> = Minipass<Result<O>, Result<O>>;
/**
 * basic walking utilities that all the glob walker types use
 */
export declare abstract class GlobUtil<O extends GlobWalkerOpts = GlobWalkerOpts> {
    #private;
    path: Path;
    patterns: Pattern[];
    opts: O;
    seen: Set<Path>;
    paused: boolean;
    aborted: boolean;
    signal?: AbortSignal;
    maxDepth: number;
    includeChildMatches: boolean;
    constructor(patterns: Pattern[], path: Path, opts: O);
    pause(): void;
    resume(): void;
    onResume(fn: () => any): void;
    matchCheck(e: Path, ifDir: boolean): Promise<Path | undefined>;
    matchCheckTest(e: Path | undefined, ifDir: boolean): Path | undefined;
    matchCheckSync(e: Path, ifDir: boolean): Path | undefined;
    abstract matchEmit(p: Result<O>): void;
    abstract matchEmit(p: string | Path): void;
    matchFinish(e: Path, absolute: boolean): void;
    match(e: Path, absolute: boolean, ifDir: boolean): Promise<void>;
    matchSync(e: Path, absolute: boolean, ifDir: boolean): void;
    walkCB(target: Path, patterns: Pattern[], cb: () => any): void;
    walkCB2(target: Path, patterns: Pattern[], processor: Processor, cb: () => any): any;
    walkCB3(target: Path, entries: Path[], processor: Processor, cb: () => any): void;
    walkCBSync(target: Path, patterns: Pattern[], cb: () => any): void;
    walkCB2Sync(target: Path, patterns: Pattern[], processor: Processor, cb: () => any): any;
    walkCB3Sync(target: Path, entries: Path[], processor: Processor, cb: () => any): void;
}
export declare class GlobWalker<O extends GlobWalkerOpts = GlobWalkerOpts> extends GlobUtil<O> {
    matches: Set<Result<O>>;
    constructor(patterns: Pattern[], path: Path, opts: O);
    matchEmit(e: Result<O>): void;
    walk(): Promise<Set<Result<O>>>;
    walkSync(): Set<Result<O>>;
}
export declare class GlobStream<O extends GlobWalkerOpts = GlobWalkerOpts> extends GlobUtil<O> {
    results: Minipass<Result<O>, Result<O>>;
    constructor(patterns: Pattern[], path: Path, opts: O);
    matchEmit(e: Result<O>): void;
    stream(): MatchStream<O>;
    streamSync(): MatchStream<O>;
}
//# sourceMappingURL=walker.d.ts.map