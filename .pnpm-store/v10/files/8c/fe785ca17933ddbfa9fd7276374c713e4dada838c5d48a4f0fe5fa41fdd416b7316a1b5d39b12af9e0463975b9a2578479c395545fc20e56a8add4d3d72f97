import { Minipass } from 'minipass';
import { Path } from 'path-scurry';
import type { GlobOptions, GlobOptionsWithFileTypesFalse, GlobOptionsWithFileTypesTrue, GlobOptionsWithFileTypesUnset } from './glob.js';
import { Glob } from './glob.js';
export { escape, unescape } from 'minimatch';
export type { FSOption, Path, WalkOptions, WalkOptionsWithFileTypesTrue, WalkOptionsWithFileTypesUnset, } from 'path-scurry';
export { Glob } from './glob.js';
export type { GlobOptions, GlobOptionsWithFileTypesFalse, GlobOptionsWithFileTypesTrue, GlobOptionsWithFileTypesUnset, } from './glob.js';
export { hasMagic } from './has-magic.js';
export { Ignore } from './ignore.js';
export type { IgnoreLike } from './ignore.js';
export type { MatchStream } from './walker.js';
/**
 * Syncronous form of {@link globStream}. Will read all the matches as fast as
 * you consume them, even all in a single tick if you consume them immediately,
 * but will still respond to backpressure if they're not consumed immediately.
 */
export declare function globStreamSync(pattern: string | string[], options: GlobOptionsWithFileTypesTrue): Minipass<Path, Path>;
export declare function globStreamSync(pattern: string | string[], options: GlobOptionsWithFileTypesFalse): Minipass<string, string>;
export declare function globStreamSync(pattern: string | string[], options: GlobOptionsWithFileTypesUnset): Minipass<string, string>;
export declare function globStreamSync(pattern: string | string[], options: GlobOptions): Minipass<Path, Path> | Minipass<string, string>;
/**
 * Return a stream that emits all the strings or `Path` objects and
 * then emits `end` when completed.
 */
export declare function globStream(pattern: string | string[], options: GlobOptionsWithFileTypesFalse): Minipass<string, string>;
export declare function globStream(pattern: string | string[], options: GlobOptionsWithFileTypesTrue): Minipass<Path, Path>;
export declare function globStream(pattern: string | string[], options?: GlobOptionsWithFileTypesUnset | undefined): Minipass<string, string>;
export declare function globStream(pattern: string | string[], options: GlobOptions): Minipass<Path, Path> | Minipass<string, string>;
/**
 * Synchronous form of {@link glob}
 */
export declare function globSync(pattern: string | string[], options: GlobOptionsWithFileTypesFalse): string[];
export declare function globSync(pattern: string | string[], options: GlobOptionsWithFileTypesTrue): Path[];
export declare function globSync(pattern: string | string[], options?: GlobOptionsWithFileTypesUnset | undefined): string[];
export declare function globSync(pattern: string | string[], options: GlobOptions): Path[] | string[];
/**
 * Perform an asynchronous glob search for the pattern(s) specified. Returns
 * [Path](https://isaacs.github.io/path-scurry/classes/PathBase) objects if the
 * {@link withFileTypes} option is set to `true`. See {@link GlobOptions} for
 * full option descriptions.
 */
declare function glob_(pattern: string | string[], options?: GlobOptionsWithFileTypesUnset | undefined): Promise<string[]>;
declare function glob_(pattern: string | string[], options: GlobOptionsWithFileTypesTrue): Promise<Path[]>;
declare function glob_(pattern: string | string[], options: GlobOptionsWithFileTypesFalse): Promise<string[]>;
declare function glob_(pattern: string | string[], options: GlobOptions): Promise<Path[] | string[]>;
/**
 * Return a sync iterator for walking glob pattern matches.
 */
export declare function globIterateSync(pattern: string | string[], options?: GlobOptionsWithFileTypesUnset | undefined): Generator<string, void, void>;
export declare function globIterateSync(pattern: string | string[], options: GlobOptionsWithFileTypesTrue): Generator<Path, void, void>;
export declare function globIterateSync(pattern: string | string[], options: GlobOptionsWithFileTypesFalse): Generator<string, void, void>;
export declare function globIterateSync(pattern: string | string[], options: GlobOptions): Generator<Path, void, void> | Generator<string, void, void>;
/**
 * Return an async iterator for walking glob pattern matches.
 */
export declare function globIterate(pattern: string | string[], options?: GlobOptionsWithFileTypesUnset | undefined): AsyncGenerator<string, void, void>;
export declare function globIterate(pattern: string | string[], options: GlobOptionsWithFileTypesTrue): AsyncGenerator<Path, void, void>;
export declare function globIterate(pattern: string | string[], options: GlobOptionsWithFileTypesFalse): AsyncGenerator<string, void, void>;
export declare function globIterate(pattern: string | string[], options: GlobOptions): AsyncGenerator<Path, void, void> | AsyncGenerator<string, void, void>;
export declare const streamSync: typeof globStreamSync;
export declare const stream: typeof globStream & {
    sync: typeof globStreamSync;
};
export declare const iterateSync: typeof globIterateSync;
export declare const iterate: typeof globIterate & {
    sync: typeof globIterateSync;
};
export declare const sync: typeof globSync & {
    stream: typeof globStreamSync;
    iterate: typeof globIterateSync;
};
export declare const glob: typeof glob_ & {
    glob: typeof glob_;
    globSync: typeof globSync;
    sync: typeof globSync & {
        stream: typeof globStreamSync;
        iterate: typeof globIterateSync;
    };
    globStream: typeof globStream;
    stream: typeof globStream & {
        sync: typeof globStreamSync;
    };
    globStreamSync: typeof globStreamSync;
    streamSync: typeof globStreamSync;
    globIterate: typeof globIterate;
    iterate: typeof globIterate & {
        sync: typeof globIterateSync;
    };
    globIterateSync: typeof globIterateSync;
    iterateSync: typeof globIterateSync;
    Glob: typeof Glob;
    hasMagic: (pattern: string | string[], options?: GlobOptions) => boolean;
    escape: (s: string, { windowsPathsNoEscape, magicalBraces, }?: Pick<import("minimatch").MinimatchOptions, "windowsPathsNoEscape" | "magicalBraces">) => string;
    unescape: (s: string, { windowsPathsNoEscape, magicalBraces, }?: Pick<import("minimatch").MinimatchOptions, "windowsPathsNoEscape" | "magicalBraces">) => string;
};
//# sourceMappingURL=index.d.ts.map