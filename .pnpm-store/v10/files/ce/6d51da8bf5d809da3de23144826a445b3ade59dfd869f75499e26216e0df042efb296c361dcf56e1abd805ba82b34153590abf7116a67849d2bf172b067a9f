import type { CacheDurationSeconds, DebugLevel } from '@typescript-eslint/types';
import type * as ts from 'typescript';
import type { TSESTree, TSESTreeToTSNode, TSNode, TSToken } from './ts-estree';
interface ParseOptions {
    /**
     * create a top-level comments array containing all comments
     */
    comment?: boolean;
    /**
     * An array of modules to turn explicit debugging on for.
     * - 'typescript-eslint' is the same as setting the env var `DEBUG=typescript-eslint:*`
     * - 'eslint' is the same as setting the env var `DEBUG=eslint:*`
     * - 'typescript' is the same as setting `extendedDiagnostics: true` in your tsconfig compilerOptions
     *
     * For convenience, also supports a boolean:
     * - true === ['typescript-eslint']
     * - false === []
     */
    debugLevel?: DebugLevel;
    /**
     * Cause the parser to error if it encounters an unknown AST node type (useful for testing).
     * This case only usually occurs when TypeScript releases new features.
     */
    errorOnUnknownASTType?: boolean;
    /**
     * Absolute (or relative to `cwd`) path to the file being parsed.
     */
    filePath?: string;
    /**
     * Enable parsing of JSX.
     * For more details, see https://www.typescriptlang.org/docs/handbook/jsx.html
     *
     * NOTE: this setting does not effect known file types (.js, .cjs, .mjs, .jsx, .ts, .mts, .cts, .tsx, .json) because the
     * TypeScript compiler has its own internal handling for known file extensions.
     *
     * For the exact behavior, see https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser#parseroptionsecmafeaturesjsx
     */
    jsx?: boolean;
    /**
     * Controls whether the `loc` information to each node.
     * The `loc` property is an object which contains the exact line/column the node starts/ends on.
     * This is similar to the `range` property, except it is line/column relative.
     */
    loc?: boolean;
    loggerFn?: ((message: string) => void) | false;
    /**
     * Controls whether the `range` property is included on AST nodes.
     * The `range` property is a [number, number] which indicates the start/end index of the node in the file contents.
     * This is similar to the `loc` property, except this is the absolute index.
     */
    range?: boolean;
    /**
     * Set to true to create a top-level array containing all tokens from the file.
     */
    tokens?: boolean;
}
interface ParseAndGenerateServicesOptions extends ParseOptions {
    /**
     * Causes the parser to error if the TypeScript compiler returns any unexpected syntax/semantic errors.
     */
    errorOnTypeScriptSyntacticAndSemanticIssues?: boolean;
    /**
     * ***EXPERIMENTAL FLAG*** - Use this at your own risk.
     *
     * Causes TS to use the source files for referenced projects instead of the compiled .d.ts files.
     * This feature is not yet optimized, and is likely to cause OOMs for medium to large projects.
     *
     * This flag REQUIRES at least TS v3.9, otherwise it does nothing.
     *
     * See: https://github.com/typescript-eslint/typescript-eslint/issues/2094
     */
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect?: boolean;
    /**
     * When `project` is provided, this controls the non-standard file extensions which will be parsed.
     * It accepts an array of file extensions, each preceded by a `.`.
     */
    extraFileExtensions?: string[];
    /**
     * Absolute (or relative to `tsconfigRootDir`) path to the file being parsed.
     * When `project` is provided, this is required, as it is used to fetch the file from the TypeScript compiler's cache.
     */
    filePath?: string;
    /**
     * Allows the user to control whether or not two-way AST node maps are preserved
     * during the AST conversion process.
     *
     * By default: the AST node maps are NOT preserved, unless `project` has been specified,
     * in which case the maps are made available on the returned `parserServices`.
     *
     * NOTE: If `preserveNodeMaps` is explicitly set by the user, it will be respected,
     * regardless of whether or not `project` is in use.
     */
    preserveNodeMaps?: boolean;
    /**
     * Absolute (or relative to `tsconfigRootDir`) paths to the tsconfig(s),
     * or `true` to find the nearest tsconfig.json to the file.
     * If this is provided, type information will be returned.
     */
    project?: string | string[] | true;
    /**
     * If you provide a glob (or globs) to the project option, you can use this option to ignore certain folders from
     * being matched by the globs.
     * This accepts an array of globs to ignore.
     *
     * By default, this is set to ["**\/node_modules/**"]
     */
    projectFolderIgnoreList?: string[];
    /**
     * The absolute path to the root directory for all provided `project`s.
     */
    tsconfigRootDir?: string;
    /**
     * An array of one or more instances of TypeScript Program objects to be used for type information.
     * This overrides any program or programs that would have been computed from the `project` option.
     * All linted files must be part of the provided program(s).
     */
    programs?: ts.Program[];
    /**
     ***************************************************************************************
     * IT IS RECOMMENDED THAT YOU DO NOT USE THIS OPTION, AS IT CAUSES PERFORMANCE ISSUES. *
     ***************************************************************************************
     *
     * When passed with `project`, this allows the parser to create a catch-all, default program.
     * This means that if the parser encounters a file not included in any of the provided `project`s,
     * it will not error, but will instead parse the file and its dependencies in a new program.
     */
    createDefaultProgram?: boolean;
    /**
     * ESLint (and therefore typescript-eslint) is used in both "single run"/one-time contexts,
     * such as an ESLint CLI invocation, and long-running sessions (such as continuous feedback
     * on a file in an IDE).
     *
     * When typescript-eslint handles TypeScript Program management behind the scenes, this distinction
     * is important because there is significant overhead to managing the so called Watch Programs
     * needed for the long-running use-case.
     *
     * When allowAutomaticSingleRunInference is enabled, we will use common heuristics to infer
     * whether or not ESLint is being used as part of a single run.
     */
    allowAutomaticSingleRunInference?: boolean;
    /**
     * Granular control of the expiry lifetime of our internal caches.
     * You can specify the number of seconds as an integer number, or the string
     * 'Infinity' if you never want the cache to expire.
     *
     * By default cache entries will be evicted after 30 seconds, or will persist
     * indefinitely if `allowAutomaticSingleRunInference = true` AND the parser
     * infers that it is a single run.
     */
    cacheLifetime?: {
        /**
         * Glob resolution for `parserOptions.project` values.
         */
        glob?: CacheDurationSeconds;
    };
    /**
     * Path to a file exporting a custom `ModuleResolver`.
     */
    moduleResolver?: string;
}
export type TSESTreeOptions = ParseAndGenerateServicesOptions;
export interface ParserWeakMap<TKey, TValueBase> {
    get<TValue extends TValueBase>(key: TKey): TValue;
    has(key: unknown): boolean;
}
export interface ParserWeakMapESTreeToTSNode<TKey extends TSESTree.Node = TSESTree.Node> {
    get<TKeyBase extends TKey>(key: TKeyBase): TSESTreeToTSNode<TKeyBase>;
    has(key: unknown): boolean;
}
export interface ParserServices {
    program: ts.Program;
    esTreeNodeToTSNodeMap: ParserWeakMapESTreeToTSNode;
    tsNodeToESTreeNodeMap: ParserWeakMap<TSNode | TSToken, TSESTree.Node>;
    hasFullTypeInformation: boolean;
}
export interface ModuleResolver {
    version: 1;
    resolveModuleNames(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ts.ResolvedProjectReference | undefined, options: ts.CompilerOptions): (ts.ResolvedModule | undefined)[];
}
export {};
//# sourceMappingURL=parser-options.d.ts.map