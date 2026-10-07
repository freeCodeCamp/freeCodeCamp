export declare enum ImportType {
    /**
     * A normal static using any syntax variations
     *   import .. from 'module'
     */
    Static = 1,
    /**
     * A dynamic import expression `import(specifier)`
     * or `import(specifier, opts)`
     */
    Dynamic = 2,
    /**
     * An import.meta expression
     */
    ImportMeta = 3,
    /**
     * A source phase import
     *   import source x from 'module'
     */
    StaticSourcePhase = 4,
    /**
     * A dynamic source phase import
     *   import.source('module')
     */
    DynamicSourcePhase = 5,
    /**
     * A defer phase import
     *   import defer * as x from 'module'
     */
    StaticDeferPhase = 6,
    /**
     * A dynamic defer phase import
     *   import.defer('module')
     */
    DynamicDeferPhase = 7
}
export interface ImportSpecifier {
    /**
     * Module name
     *
     * To handle escape sequences in specifier strings, the .n field of imported specifiers will be provided where possible.
     *
     * For dynamic import expressions, this field will be empty if not a valid JS string.
     * For static import expressions, this field will always be populated.
     *
     * @example
     * const [imports1, exports1] = parse(String.raw`import './\u0061\u0062.js'`);
     * imports1[0].n;
     * // Returns "./ab.js"
     *
     * const [imports2, exports2] = parse(`import("./ab.js")`);
     * imports2[0].n;
     * // Returns "./ab.js"
     *
     * const [imports3, exports3] = parse(`import("./" + "ab.js")`);
     * imports3[0].n;
     * // Returns undefined
     */
    readonly n: string | undefined;
    /**
     * Type of import statement
     */
    readonly t: ImportType;
    /**
     * Start of module specifier
     *
     * @example
     * const source = `import { a } from 'asdf'`;
     * const [imports, exports] = parse(source);
     * source.substring(imports[0].s, imports[0].e);
     * // Returns "asdf"
     */
    readonly s: number;
    /**
     * End of module specifier
     */
    readonly e: number;
    /**
     * Start of import statement
     *
     * @example
     * const source = `import { a } from 'asdf'`;
     * const [imports, exports] = parse(source);
     * source.substring(imports[0].ss, imports[0].se);
     * // Returns "import { a } from 'asdf';"
     */
    readonly ss: number;
    /**
     * End of import statement
     */
    readonly se: number;
    /**
     * If this import keyword is a dynamic import, this is the start value.
     * If this import keyword is a static import, this is -1.
     * If this import keyword is an import.meta expresion, this is -2.
     */
    readonly d: number;
    /**
     * If this import has an import assertion, this is the start value.
     * Otherwise this is `-1`.
     */
    readonly a: number;
}
export interface ExportSpecifier {
    /**
     * Exported name
     *
     * @example
     * const source = `export default []`;
     * const [imports, exports] = parse(source);
     * exports[0].n;
     * // Returns "default"
     *
     * @example
     * const source = `export const asdf = 42`;
     * const [imports, exports] = parse(source);
     * exports[0].n;
     * // Returns "asdf"
     */
    readonly n: string;
    /**
     * Local name, or undefined.
     *
     * @example
     * const source = `export default []`;
     * const [imports, exports] = parse(source);
     * exports[0].ln;
     * // Returns undefined
     *
     * @example
     * const asdf = 42;
     * const source = `export { asdf as a }`;
     * const [imports, exports] = parse(source);
     * exports[0].ln;
     * // Returns "asdf"
     */
    readonly ln: string | undefined;
    /**
     * Start of exported name
     *
     * @example
     * const source = `export default []`;
     * const [imports, exports] = parse(source);
     * source.substring(exports[0].s, exports[0].e);
     * // Returns "default"
     *
     * @example
     * const source = `export { 42 as asdf }`;
     * const [imports, exports] = parse(source);
     * source.substring(exports[0].s, exports[0].e);
     * // Returns "asdf"
     */
    readonly s: number;
    /**
     * End of exported name
     */
    readonly e: number;
    /**
     * Start of local name, or -1.
     *
     * @example
     * const asdf = 42;
     * const source = `export { asdf as a }`;
     * const [imports, exports] = parse(source);
     * source.substring(exports[0].ls, exports[0].le);
     * // Returns "asdf"
     */
    readonly ls: number;
    /**
     * End of local name, or -1.
     */
    readonly le: number;
}
export interface ParseError extends Error {
    idx: number;
}
/**
 * Outputs the list of exports and locations of import specifiers,
 * including dynamic import and import meta handling.
 *
 * @param source Source code to parser
 * @param name Optional sourcename
 * @returns Tuple contaning imports list and exports list.
 */
export declare function parse(source: string, name?: string): readonly [
    imports: ReadonlyArray<ImportSpecifier>,
    exports: ReadonlyArray<ExportSpecifier>,
    facade: boolean,
    hasModuleSyntax: boolean
];
/**
 * Wait for init to resolve before calling `parse`.
 */
export declare const init: Promise<void>;
export declare const initSync: () => void;
