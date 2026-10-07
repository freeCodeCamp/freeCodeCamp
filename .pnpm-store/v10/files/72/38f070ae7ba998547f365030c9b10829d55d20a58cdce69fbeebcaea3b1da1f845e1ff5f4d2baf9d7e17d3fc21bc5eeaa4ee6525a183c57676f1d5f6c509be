/// <reference lib="es2015" />

import { SectionedSourceMapInput, EncodedSourceMap, DecodedSourceMap } from '@jridgewell/source-map';

export type ECMA = 5 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020;

export type ConsoleProperty = keyof typeof console;
type DropConsoleOption = boolean | ConsoleProperty[];

export interface ParseOptions {
    bare_returns?: boolean;
    /** @deprecated legacy option. Currently, all supported EcmaScript is valid to parse. */
    ecma?: ECMA;
    html5_comments?: boolean;
    shebang?: boolean;
}

export interface CompressOptions {
    arguments?: boolean;
    arrows?: boolean;
    booleans_as_integers?: boolean;
    booleans?: boolean;
    collapse_vars?: boolean;
    comparisons?: boolean;
    computed_props?: boolean;
    conditionals?: boolean;
    dead_code?: boolean;
    defaults?: boolean;
    directives?: boolean;
    drop_console?: DropConsoleOption;
    drop_debugger?: boolean;
    ecma?: ECMA;
    evaluate?: boolean;
    expression?: boolean;
    global_defs?: object;
    hoist_funs?: boolean;
    hoist_props?: boolean;
    hoist_vars?: boolean;
    ie8?: boolean;
    if_return?: boolean;
    inline?: boolean | InlineFunctions;
    join_vars?: boolean;
    keep_classnames?: boolean | RegExp;
    keep_fargs?: boolean;
    keep_fnames?: boolean | RegExp;
    keep_infinity?: boolean;
    lhs_constants?: boolean;
    loops?: boolean;
    module?: boolean;
    negate_iife?: boolean;
    passes?: number;
    properties?: boolean;
    pure_funcs?: string[];
    pure_new?: boolean;
    pure_getters?: boolean | 'strict';
    reduce_funcs?: boolean;
    reduce_vars?: boolean;
    sequences?: boolean | number;
    side_effects?: boolean;
    switches?: boolean;
    toplevel?: boolean;
    top_retain?: null | string | string[] | RegExp;
    typeofs?: boolean;
    unsafe_arrows?: boolean;
    unsafe?: boolean;
    unsafe_comps?: boolean;
    unsafe_Function?: boolean;
    unsafe_math?: boolean;
    unsafe_symbols?: boolean;
    unsafe_methods?: boolean;
    unsafe_proto?: boolean;
    unsafe_regexp?: boolean;
    unsafe_undefined?: boolean;
    unused?: boolean;
}

export enum InlineFunctions {
    Disabled = 0,
    SimpleFunctions = 1,
    WithArguments = 2,
    WithArgumentsAndVariables = 3
}

export interface MangleOptions {
    eval?: boolean;
    keep_classnames?: boolean | RegExp;
    keep_fnames?: boolean | RegExp;
    module?: boolean;
    nth_identifier?: SimpleIdentifierMangler | WeightedIdentifierMangler;
    properties?: boolean | ManglePropertiesOptions;
    reserved?: string[];
    safari10?: boolean;
    toplevel?: boolean;
}

/**
 * An identifier mangler for which the output is invariant with respect to the source code.
 */
export interface SimpleIdentifierMangler {
    /**
     * Obtains the nth most favored (usually shortest) identifier to rename a variable to.
     * The mangler will increment n and retry until the return value is not in use in scope, and is not a reserved word.
     * This function is expected to be stable; Evaluating get(n) === get(n) should always return true.
     * @param n The ordinal of the identifier.
     */
    get(n: number): string;
}

/**
 * An identifier mangler that leverages character frequency analysis to determine identifier precedence.
 */
export interface WeightedIdentifierMangler extends SimpleIdentifierMangler {
    /**
     * Modifies the internal weighting of the input characters by the specified delta.
     * Will be invoked on the entire printed AST, and then deduct mangleable identifiers.
     * @param chars The characters to modify the weighting of.
     * @param delta The numeric weight to add to the characters.
     */
    consider(chars: string, delta: number): number;
    /**
     * Resets character weights.
     */
    reset(): void;
    /**
     * Sorts identifiers by character frequency, in preparation for calls to get(n).
     */
    sort(): void;
}

export interface ManglePropertiesOptions {
    builtins?: boolean;
    debug?: boolean;
    keep_quoted?: boolean | 'strict';
    nth_identifier?: SimpleIdentifierMangler | WeightedIdentifierMangler;
    regex?: RegExp | string;
    reserved?: string[];
}

export interface FormatOptions {
    ascii_only?: boolean;
    /** @deprecated Not implemented anymore */
    beautify?: boolean;
    braces?: boolean;
    comments?: boolean | 'all' | 'some' | RegExp | ( (node: any, comment: {
        value: string,
        type: 'comment1' | 'comment2' | 'comment3' | 'comment4',
        pos: number,
        line: number,
        col: number,
    }) => boolean );
    ecma?: ECMA;
    ie8?: boolean;
    keep_numbers?: boolean;
    indent_level?: number;
    indent_start?: number;
    inline_script?: boolean;
    keep_quoted_props?: boolean;
    max_line_len?: number | false;
    preamble?: string;
    preserve_annotations?: boolean;
    quote_keys?: boolean;
    quote_style?: OutputQuoteStyle;
    safari10?: boolean;
    semicolons?: boolean;
    shebang?: boolean;
    shorthand?: boolean;
    source_map?: SourceMapOptions;
    webkit?: boolean;
    width?: number;
    wrap_iife?: boolean;
    wrap_func_args?: boolean;
}

export enum OutputQuoteStyle {
    PreferDouble = 0,
    AlwaysSingle = 1,
    AlwaysDouble = 2,
    AlwaysOriginal = 3
}

export interface MinifyOptions {
    compress?: boolean | CompressOptions;
    ecma?: ECMA;
    enclose?: boolean | string;
    ie8?: boolean;
    keep_classnames?: boolean | RegExp;
    keep_fnames?: boolean | RegExp;
    mangle?: boolean | MangleOptions;
    module?: boolean;
    nameCache?: object;
    format?: FormatOptions;
    /** @deprecated */
    output?: FormatOptions;
    parse?: ParseOptions;
    safari10?: boolean;
    sourceMap?: boolean | SourceMapOptions;
    toplevel?: boolean;
}

export interface MinifyOutput {
    code?: string;
    map?: EncodedSourceMap | string;
    decoded_map?: DecodedSourceMap | null;
}

export interface SourceMapOptions {
    /** Source map object, 'inline' or source map file content */
    content?: SectionedSourceMapInput | string;
    includeSources?: boolean;
    filename?: string;
    root?: string;
    asObject?: boolean;
    url?: string | 'inline';
}

export function minify(files: string | string[] | { [file: string]: string }, options?: MinifyOptions): Promise<MinifyOutput>;
export function minify_sync(files: string | string[] | { [file: string]: string }, options?: MinifyOptions): MinifyOutput;
