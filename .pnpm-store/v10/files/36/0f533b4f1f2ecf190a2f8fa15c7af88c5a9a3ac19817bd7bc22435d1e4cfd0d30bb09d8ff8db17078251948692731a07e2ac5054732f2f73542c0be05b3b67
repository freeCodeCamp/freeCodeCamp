import { AST } from './ast.js';
export type Platform = 'aix' | 'android' | 'darwin' | 'freebsd' | 'haiku' | 'linux' | 'openbsd' | 'sunos' | 'win32' | 'cygwin' | 'netbsd';
export interface MinimatchOptions {
    /** do not expand `{x,y}` style braces */
    nobrace?: boolean;
    /** do not treat patterns starting with `#` as a comment */
    nocomment?: boolean;
    /** do not treat patterns starting with `!` as a negation */
    nonegate?: boolean;
    /** print LOTS of debugging output */
    debug?: boolean;
    /** treat `**` the same as `*` */
    noglobstar?: boolean;
    /** do not expand extglobs like `+(a|b)` */
    noext?: boolean;
    /** return the pattern if nothing matches */
    nonull?: boolean;
    /** treat `\\` as a path separator, not an escape character */
    windowsPathsNoEscape?: boolean;
    /**
     * inverse of {@link MinimatchOptions.windowsPathsNoEscape}
     * @deprecated
     */
    allowWindowsEscape?: boolean;
    /**
     * Compare a partial path to a pattern. As long as the parts
     * of the path that are present are not contradicted by the
     * pattern, it will be treated as a match. This is useful in
     * applications where you're walking through a folder structure,
     * and don't yet have the full path, but want to ensure that you
     * do not walk down paths that can never be a match.
     */
    partial?: boolean;
    /** allow matches that start with `.` even if the pattern does not */
    dot?: boolean;
    /** ignore case */
    nocase?: boolean;
    /** ignore case only in wildcard patterns */
    nocaseMagicOnly?: boolean;
    /** consider braces to be "magic" for the purpose of `hasMagic` */
    magicalBraces?: boolean;
    /**
     * If set, then patterns without slashes will be matched
     * against the basename of the path if it contains slashes.
     * For example, `a?b` would match the path `/xyz/123/acb`, but
     * not `/xyz/acb/123`.
     */
    matchBase?: boolean;
    /** invert the results of negated matches */
    flipNegate?: boolean;
    /** do not collapse multiple `/` into a single `/` */
    preserveMultipleSlashes?: boolean;
    /**
     * A number indicating the level of optimization that should be done
     * to the pattern prior to parsing and using it for matches.
     */
    optimizationLevel?: number;
    /** operating system platform */
    platform?: Platform;
    /**
     * When a pattern starts with a UNC path or drive letter, and in
     * `nocase:true` mode, do not convert the root portions of the
     * pattern into a case-insensitive regular expression, and instead
     * leave them as strings.
     *
     * This is the default when the platform is `win32` and
     * `nocase:true` is set.
     */
    windowsNoMagicRoot?: boolean;
    /**
     * max number of `{...}` patterns to expand. Default 100_000.
     */
    braceExpandMax?: number;
    /**
     * Max number of non-adjacent `**` patterns to recursively walk down.
     *
     * The default of 200 is almost certainly high enough for most purposes,
     * and can handle absurdly excessive patterns.
     */
    maxGlobstarRecursion?: number;
    /**
     * Max depth to traverse for nested extglobs like `*(a|b|c)`
     *
     * Default is 2, which is quite low, but any higher value
     * swiftly results in punishing performance impacts. Note
     * that this is *not*  relevant when the globstar types can
     * be safely coalesced into a single set.
     *
     * For example, `*(a|@(b|c)|d)` would be flattened into
     * `*(a|b|c|d)`. Thus, many common extglobs will retain good
     * performance and  never hit this limit, even if they are
     * excessively deep and complicated.
     *
     * If the limit is hit, then the extglob characters are simply
     * not parsed, and the pattern effectively switches into
     * `noextglob: true` mode for the contents of that nested
     * sub-pattern. This will typically _not_ result in a match,
     * but is considered a valid trade-off for security and
     * performance.
     */
    maxExtglobRecursion?: number;
}
export declare const minimatch: {
    (p: string, pattern: string, options?: MinimatchOptions): boolean;
    sep: Sep;
    GLOBSTAR: typeof GLOBSTAR;
    filter: (pattern: string, options?: MinimatchOptions) => (p: string) => boolean;
    defaults: (def: MinimatchOptions) => typeof minimatch;
    braceExpand: (pattern: string, options?: MinimatchOptions) => string[];
    makeRe: (pattern: string, options?: MinimatchOptions) => false | MMRegExp;
    match: (list: string[], pattern: string, options?: MinimatchOptions) => string[];
    AST: typeof AST;
    Minimatch: typeof Minimatch;
    escape: (s: string, { windowsPathsNoEscape, magicalBraces, }?: Pick<MinimatchOptions, "windowsPathsNoEscape" | "magicalBraces">) => string;
    unescape: (s: string, { windowsPathsNoEscape, magicalBraces, }?: Pick<MinimatchOptions, "windowsPathsNoEscape" | "magicalBraces">) => string;
};
export type Sep = '\\' | '/';
export declare const sep: Sep;
export declare const GLOBSTAR: unique symbol;
export declare const filter: (pattern: string, options?: MinimatchOptions) => (p: string) => boolean;
export declare const defaults: (def: MinimatchOptions) => typeof minimatch;
export declare const braceExpand: (pattern: string, options?: MinimatchOptions) => string[];
export declare const makeRe: (pattern: string, options?: MinimatchOptions) => false | MMRegExp;
export declare const match: (list: string[], pattern: string, options?: MinimatchOptions) => string[];
export type MMRegExp = RegExp & {
    _src?: string;
    _glob?: string;
};
export type ParseReturnFiltered = string | MMRegExp | typeof GLOBSTAR;
export type ParseReturn = ParseReturnFiltered | false;
export declare class Minimatch {
    #private;
    options: MinimatchOptions;
    set: ParseReturnFiltered[][];
    pattern: string;
    windowsPathsNoEscape: boolean;
    nonegate: boolean;
    negate: boolean;
    comment: boolean;
    empty: boolean;
    preserveMultipleSlashes: boolean;
    partial: boolean;
    globSet: string[];
    globParts: string[][];
    nocase: boolean;
    isWindows: boolean;
    platform: Platform;
    windowsNoMagicRoot: boolean;
    maxGlobstarRecursion: number;
    regexp: false | null | MMRegExp;
    constructor(pattern: string, options?: MinimatchOptions);
    hasMagic(): boolean;
    debug(..._: unknown[]): void;
    make(): void;
    preprocess(globParts: string[][]): string[][];
    adjascentGlobstarOptimize(globParts: string[][]): string[][];
    levelOneOptimize(globParts: string[][]): string[][];
    levelTwoFileOptimize(parts: string | string[]): string[];
    firstPhasePreProcess(globParts: string[][]): string[][];
    secondPhasePreProcess(globParts: string[][]): string[][];
    partsMatch(a: string[], b: string[], emptyGSMatch?: boolean): false | string[];
    parseNegate(): void;
    matchOne(file: string[], pattern: ParseReturn[], partial?: boolean): boolean;
    braceExpand(): string[];
    parse(pattern: string): ParseReturn;
    makeRe(): false | MMRegExp;
    slashSplit(p: string): string[];
    match(f: string, partial?: boolean): boolean;
    static defaults(def: MinimatchOptions): typeof Minimatch;
}
export { AST } from './ast.js';
export { escape } from './escape.js';
export { unescape } from './unescape.js';
//# sourceMappingURL=index.d.ts.map