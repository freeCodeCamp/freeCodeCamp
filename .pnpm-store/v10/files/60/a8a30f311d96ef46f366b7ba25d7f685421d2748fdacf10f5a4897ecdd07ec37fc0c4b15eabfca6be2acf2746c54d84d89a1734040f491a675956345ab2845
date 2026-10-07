import type { CacheDurationSeconds, DebugLevel, JSDocParsingMode, ProjectServiceOptions, SourceType } from '@typescript-eslint/types';
import type * as ts from 'typescript';
import type { TSESTree, TSESTreeToTSNode, TSNode, TSToken } from './ts-estree';
interface ParseOptions {
    /**
     * Specify the `sourceType`.
     * For more details, see https://github.com/typescript-eslint/typescript-eslint/pull/9121
     */
    sourceType?: SourceType;
    /**
     * Prevents the parser from throwing an error if it receives an invalid AST from TypeScript.
     * This case only usually occurs when attempting to lint invalid code.
     */
    allowInvalidAST?: boolean;
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
     * If you are using TypeScript version >=5.3 then this option can be used as a performance optimization.
     *
     * The valid values for this rule are:
     * - `'all'` - parse all JSDoc comments, always.
     * - `'none'` - parse no JSDoc comments, ever.
     * - `'type-info'` - parse just JSDoc comments that are required to provide correct type-info. TS will always parse JSDoc in non-TS files, but never in TS files.
     *
     * If you do not rely on JSDoc tags from the TypeScript AST, then you can safely set this to `'none'` to improve performance.
     */
    jsDocParsingMode?: JSDocParsingMode;
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
    /**
     * Whether deprecated AST properties should skip calling console.warn on accesses.
     */
    suppressDeprecatedPropertyWarnings?: boolean;
}
interface ParseAndGenerateServicesOptions extends ParseOptions {
    /**
     * Granular control of the expiry lifetime of our internal caches.
     * You can specify the number of seconds as an integer number, or the string
     * 'Infinity' if you never want the cache to expire.
     *
     * By default cache entries will be evicted after 30 seconds, or will persist
     * indefinitely if `disallowAutomaticSingleRunInference = false` AND the parser
     * infers that it is a single run.
     */
    cacheLifetime?: {
        /**
         * Glob resolution for `parserOptions.project` values.
         */
        glob?: CacheDurationSeconds;
    };
    /**
     * ESLint (and therefore typescript-eslint) is used in both "single run"/one-time contexts,
     * such as an ESLint CLI invocation, and long-running sessions (such as continuous feedback
     * on a file in an IDE).
     *
     * When typescript-eslint handles TypeScript Program management behind the scenes, this distinction
     * is important because there is significant overhead to managing the so called Watch Programs
     * needed for the long-running use-case.
     *
     * By default, we will use common heuristics to infer whether ESLint is being
     * used as part of a single run. This option disables those heuristics, and
     * therefore the performance optimizations gained by them.
     *
     * In other words, typescript-eslint is faster by default, and this option
     * disables an automatic performance optimization.
     *
     * This setting's default value can be specified by setting a `TSESTREE_SINGLE_RUN`
     * environment variable to `"false"` or `"true"`.
     * Otherwise, the default value is `false`.
     */
    disallowAutomaticSingleRunInference?: boolean;
    /**
     * Causes the parser to error if the TypeScript compiler returns any unexpected syntax/semantic errors.
     */
    errorOnTypeScriptSyntacticAndSemanticIssues?: boolean;
    /**
     * When `project` is provided, this controls the non-standard file extensions which will be parsed.
     * It accepts an array of file extensions, each preceded by a `.`.
     *
     * NOTE: When used with {@link projectService}, full project reloads may occur.
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
     *
     * If set to `false`, `null` or `undefined` type information will not be returned.
     *
     * Note that {@link projectService} is now preferred.
     */
    project?: boolean | string | string[] | null;
    /**
     * If you provide a glob (or globs) to the project option, you can use this option to ignore certain folders from
     * being matched by the globs.
     * This accepts an array of globs to ignore.
     *
     * By default, this is set to ["**\/node_modules/**"]
     */
    projectFolderIgnoreList?: string[];
    /**
     * Whether to create a shared TypeScript project service to power program creation.
     */
    projectService?: boolean | ProjectServiceOptions;
    /**
     * The absolute path to the root directory for all provided `project`s.
     */
    tsconfigRootDir?: string;
    /**
     * An array of one or more instances of TypeScript Program objects to be used for type information.
     * This overrides any program or programs that would have been computed from the `project` option.
     * All linted files must be part of the provided program(s).
     */
    programs?: ts.Program[] | null;
}
export type TSESTreeOptions = ParseAndGenerateServicesOptions;
export interface ParserWeakMap<Key, ValueBase> {
    get<Value extends ValueBase>(key: Key): Value;
    has(key: unknown): boolean;
}
export interface ParserWeakMapESTreeToTSNode<Key extends TSESTree.Node = TSESTree.Node> {
    get<KeyBase extends Key>(key: KeyBase): TSESTreeToTSNode<KeyBase>;
    has(key: unknown): boolean;
}
export interface ParserServicesBase {
    emitDecoratorMetadata: boolean | undefined;
    experimentalDecorators: boolean | undefined;
    isolatedDeclarations: boolean | undefined;
}
export interface ParserServicesNodeMaps {
    esTreeNodeToTSNodeMap: ParserWeakMapESTreeToTSNode;
    tsNodeToESTreeNodeMap: ParserWeakMap<TSNode | TSToken, TSESTree.Node>;
}
export interface ParserServicesWithTypeInformation extends ParserServicesNodeMaps, ParserServicesBase {
    getSymbolAtLocation: (node: TSESTree.Node) => ts.Symbol | undefined;
    getTypeAtLocation: (node: TSESTree.Node) => ts.Type;
    getContextualType: (node: TSESTree.Expression) => ts.Type | undefined;
    getResolvedSignature: (node: TSESTree.CallExpression | TSESTree.NewExpression) => ts.Signature | undefined;
    getTypeFromTypeNode: (node: TSESTree.TypeNode) => ts.Type;
    getTypeOfSymbolAtLocation: (symbol: ts.Symbol, node: TSESTree.Node) => ts.Type;
    program: ts.Program;
}
export interface ParserServicesWithoutTypeInformation extends ParserServicesNodeMaps, ParserServicesBase {
    program: null;
}
export type ParserServices = ParserServicesWithoutTypeInformation | ParserServicesWithTypeInformation;
export {};
