# Installation
> `npm install --save @types/hogan.js`

# Summary
This package contains type definitions for hogan.js (http://twitter.github.com/hogan.js/).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/hogan.js.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/hogan.js/index.d.ts)
````ts
export interface Context {
    [key: string]: any;
}

export interface SectionTags {
    o: string;
    c: string;
}

export interface HoganOptions {
    asString?: boolean | undefined;
    sectionTags?: readonly SectionTags[] | undefined;
    delimiters?: string | undefined;
    disableLambda?: boolean | undefined;
}

export interface Token {
    tag: string;
    otag?: string | undefined;
    ctag?: string | undefined;
    i?: number | undefined;
    n?: string | undefined;
    text?: string | undefined;
}

export interface Leaf extends Token {
    end: number;
    nodes: Token[];
}

export type Tree = Leaf[];

export interface Partials {
    [symbol: string]: HoganTemplate;
}
declare class HoganTemplate {
    /**
     * Renders the template to a string.
     *
     * @param context - The data to render the template with.
     * @param partials - The partials to render the template with.
     * @param indent - The string to indent when rendering the template.
     * @returns A rendered template.
     */
    render(context: Context, partials?: Partials, indent?: string): string;
}

export { HoganTemplate as Template, HoganTemplate as template };

export function compile(
    text: string,
    options?: HoganOptions & { asString: false },
): HoganTemplate;
export function compile(
    text: string,
    options?: HoganOptions & { asString: true },
): string;
/**
 * Compiles templates to HoganTemplate objects, which have a render method.
 *
 * @param text - Raw mustache string to compile.
 * @param options - Options to use when compiling. See https://github.com/twitter/hogan.js#compilation-options.
 * @returns A HoganTemplate.
 */
export function compile(
    text: string,
    options?: HoganOptions,
): HoganTemplate | string;
/**
 * Scans templates returning an array of found tokens.
 *
 * @param text - Raw mustache string to scan.
 * @param delimiters - A string that overrides the default delimiters. Example: "<% %>".
 * @returns Found tokens.
 */
export function scan(text: string, delimiters?: string): Token[];
/**
 * Structures tokens into a tree.
 *
 * @param tokens - An array of scanned tokens.
 * @param text - Unused pass undefined.
 * @param options - Options to use when parsing. See https://github.com/twitter/hogan.js#compilation-options.
 * @returns The tree structure of the given tokens.
 */
export function parse(
    tokens: readonly Token[],
    text?: undefined,
    options?: HoganOptions,
): Tree;

````

### Additional Details
 * Last updated: Mon, 20 Nov 2023 23:36:24 GMT
 * Dependencies: none

# Credits
These definitions were written by [Andrew Leedham](https://github.com/AndrewLeedham).
