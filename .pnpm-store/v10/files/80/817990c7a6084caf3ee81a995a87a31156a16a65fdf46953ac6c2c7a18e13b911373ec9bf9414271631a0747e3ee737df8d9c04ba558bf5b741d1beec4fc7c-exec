// Type definitions for common-tags 1.8
// Project: https://github.com/declandewet/common-tags
// Definitions by: Viktor Zozuliak <https://github.com/zuzusik>
//                 Paul Wang <https://github.com/tzupengwang>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export as namespace commonTags;

export type JSTag = (literals: TemplateStringsArray, ...placeholders: any[]) => string;

export interface TemplateTag {
    (str: string): string;
    (tag: JSTag): TemplateTag;
    (literals: TemplateStringsArray, ...placeholders: any[]): string;
}

/**
 * You'll often find that you might want to include an array in a template.
 * Typically, doing something like `${array.join(', ')}` would work - but what if you're printing a list of items
 * in an HTML template and want to maintain the indentation? You'd have to count the spaces manually and include
 * them in the `.join()` call - which is a bit ugly for my taste.
 * This tag properly indents arrays, as well as newline characters in string substitutions,
 * by converting them to an array split by newline and re-using the same array inclusion logic.
 */
export const html: TemplateTag;

/**
 * alias for `html`
 */
export const codeBlock: TemplateTag;

/**
 * alias for `html`
 */
export const source: TemplateTag;

/**
 * A tag very similar to `html` but it does safe HTML escaping for strings coming from substitutions.
 * When combined with regular `html` tag, you can do basic HTML templating that is safe from
 * XSS (Cross-Site Scripting) attacks.
 */
export const safeHtml: TemplateTag;

/**
 * Allows you to keep your single-line strings under 80 characters without resorting to crazy string concatenation.
 */
export const oneLine: TemplateTag;

/**
 * Allows you to keep your single-line strings under 80 characters while trimming the new lines.
 */
export const oneLineTrim: TemplateTag;

/**
 * If you want to strip the initial indentation from the beginning of each line in a multiline string.
 * Important note: this tag will not indent multiline strings coming from the substitutions.
 * If you want that behavior, use the `html` tag (aliases: `source`, `codeBlock`).
 */
export const stripIndent: TemplateTag;

/**
 * If you want to strip *all* of the indentation from the beginning of each line in a multiline string.
 */
export const stripIndents: TemplateTag;

/**
 * Allows you to inline an array substitution as a list.
 */
export const inlineLists: TemplateTag;

/**
 * Allows you to inline an array substitution as a list, rendered out on a single line.
 */
export const oneLineInlineLists: TemplateTag;

/**
 * Allows you to inline an array substitution as a comma-separated list.
 */
export const commaLists: TemplateTag;

/**
 * Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "or".
 */
export const commaListsOr: TemplateTag;

/**
 * Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "and".
 */
export const commaListsAnd: TemplateTag;

/**
 * Allows you to inline an array substitution as a comma-separated list, and is rendered out on to a single line.
 */
export const oneLineCommaLists: TemplateTag;

/**
 * Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "or", and is rendered out on to a single line.
 */
export const oneLineCommaListsOr: TemplateTag;

/**
 * Allows you to inline an array substitution as a comma-separated list, the last of which is preceded by the word "and", and is rendered out on to a single line.
 */
export const oneLineCommaListsAnd: TemplateTag;

/**
 * A no-op tag that might come in useful in some scenarios, e.g. mocking.
 */
export const id: TemplateTag;

export interface TemplateTransformer<TCtx = { [key: string]: any }> {
    /**
     * Called before everything else.
     * The result of this hook will be passed to other hooks as `context`.
     * If omitted, `context` will be an empty object.
     */
    getInitialContext?: (() => TCtx) | undefined;
    /**
     * Called when the tag encounters a string.
     * (a string is whatever's not inside "${}" in your template literal)
     * `str` is the value of the current string
     */
    onString?: ((str: string, context: TCtx) => string) | undefined;
    /**
     * Called when the tag encounters a substitution.
     * (a substitution is whatever's inside "${}" in your template literal)
     * `substitution` is the value of the current substitution
     * `resultSoFar` is the end result up to the point of this substitution
     */
    onSubstitution?: ((substitution: string, resultSoFar: string, context: TCtx) => string) | undefined;
    /**
     * Called when all substitutions have been parsed
     * `endResult` is the final value.
     */
    onEndResult?: ((endResult: string, context: TCtx) => string) | undefined;
}

export type PluginFunction = (oldValue: string, newValue: string) => TemplateTransformer<any>;

/**
 * New Tag factory
 */
export function createTag(transformers?: Array<TemplateTransformer<any>>): TemplateTag;
export function createTag(...transformers: Array<TemplateTransformer<any>>): TemplateTag;
export function createTag(...pluginFunctions: PluginFunction[]): TemplateTag;

export const TemplateTag: {
    /**
     * New Tag Constructor
     * @deprecated
     */
    new(transformers?: Array<TemplateTransformer<any>>): TemplateTag;
    new(...transformers: Array<TemplateTransformer<any>>): TemplateTag;
    new(...pluginFunctions: PluginFunction[]): TemplateTag;
};

/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  [side=''] The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return a TemplateTag transformer
 */
export function trimResultTransformer(
    side?: "start" | "end" | "left" | "right" | "",
): TemplateTransformer;

/**
 * strips indentation from a template literal
 * @param  [type='initial'] whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return a TemplateTag transformer
 */
export function stripIndentTransformer(type?: "initial" | "all"): TemplateTransformer;

/**
 * Replaces a value or pattern in the end result with a new value.
 * @param  replaceWhat the value or pattern that should be replaced
 * @param  replaceWith the replacement value
 * @return a TemplateTag transformer
 */
export function replaceResultTransformer(
    replaceWhat: string | RegExp,
    replaceWith: string | ((substring: string, ...args: any[]) => string),
): TemplateTransformer;

/**
 * Replaces the result of all substitutions (results of calling ${ ... }) with a new value.
 * Same as for `replaceResultTransformer`, replaceWhat can be a string or regular expression and replaceWith is the new value.
 */
export function replaceSubstitutionTransformer(
    replaceWhat: string | RegExp,
    replaceWith: string | ((substring: string, ...args: any[]) => string),
): TemplateTransformer;

/**
 * Replaces the result of all strings (what's not in ${ ... }) with a new value.
 * Same as for `replaceResultTransformer`, replaceWhat can be a string or regular expression and replaceWith is the new value.
 */
export function replaceStringTransformer(
    replaceWhat: string | RegExp,
    replaceWith: string | ((substring: string, ...args: any[]) => string),
): TemplateTransformer;

/**
 * Converts an array substitution to a string containing a list
 * @param  [opts.separator=''] what to separate each item with (always followed by a space)
 * @param  [opts.conjunction=''] replace the last separator with this value
 * @param  [opts.serial=false] should the separator be included before the conjunction? As in the case of serial/oxford commas
 * @return a TemplateTag transformer
 */
export function inlineArrayTransformer(opts?: {
    separator?: string | undefined;
    conjunction?: string | undefined;
    serial?: boolean | undefined;
}): TemplateTransformer;

/**
 * Splits a string substitution into an array by the provided splitBy substring, only if the string contains the splitBy substring.
 */
export function splitStringTransformer(splitBy: string): TemplateTransformer;
