import * as ts from 'typescript';
import { CanonicalPath } from '../create-program/shared';
import { TSESTree } from '../ts-estree';
import { CacheLike } from './ExpiringCache';
type DebugModule = 'typescript-eslint' | 'eslint' | 'typescript';
/**
 * Internal settings used by the parser to run on a file.
 */
export interface MutableParseSettings {
    /**
     * Code of the file being parsed.
     */
    code: string;
    /**
     * Whether the `comment` parse option is enabled.
     */
    comment: boolean;
    /**
     * If the `comment` parse option is enabled, retrieved comments.
     */
    comments: TSESTree.Comment[];
    /**
     * Whether to create a TypeScript program if one is not provided.
     */
    createDefaultProgram: boolean;
    /**
     * Which debug areas should be logged.
     */
    debugLevel: Set<DebugModule>;
    /**
     * Whether to error if TypeScript reports a semantic or syntactic error diagnostic.
     */
    errorOnTypeScriptSyntacticAndSemanticIssues: boolean;
    /**
     * Whether to error if an unknown AST node type is encountered.
     */
    errorOnUnknownASTType: boolean;
    /**
     * Whether TS should use the source files for referenced projects instead of the compiled .d.ts files.
     *
     * @remarks
     * This feature is not yet optimized, and is likely to cause OOMs for medium to large projects.
     * This flag REQUIRES at least TS v3.9, otherwise it does nothing.
     */
    EXPERIMENTAL_useSourceOfProjectReferenceRedirect: boolean;
    /**
     * Any non-standard file extensions which will be parsed.
     */
    extraFileExtensions: string[];
    /**
     * Path of the file being parsed.
     */
    filePath: string;
    /**
     * Whether parsing of JSX is enabled.
     *
     * @remarks The applicable file extension is still required.
     */
    jsx: boolean;
    /**
     * Whether to add `loc` information to each node.
     */
    loc: boolean;
    /**
     * Log function, if not `console.log`.
     */
    log: (message: string) => void;
    /**
     * Path for a module resolver to use for the compiler host's `resolveModuleNames`.
     */
    moduleResolver: string;
    /**
     * Whether two-way AST node maps are preserved during the AST conversion process.
     */
    preserveNodeMaps?: boolean;
    /**
     * One or more instances of TypeScript Program objects to be used for type information.
     */
    programs: null | Iterable<ts.Program>;
    /**
     * Normalized paths to provided project paths.
     */
    projects: readonly CanonicalPath[];
    /**
     * Whether to add the `range` property to AST nodes.
     */
    range: boolean;
    /**
     * Whether this is part of a single run, rather than a long-running process.
     */
    singleRun: boolean;
    /**
     * If the `tokens` parse option is enabled, retrieved tokens.
     */
    tokens: null | TSESTree.Token[];
    /**
     * Caches searches for TSConfigs from project directories.
     */
    tsconfigMatchCache: CacheLike<string, string>;
    /**
     * The absolute path to the root directory for all provided `project`s.
     */
    tsconfigRootDir: string;
}
export type ParseSettings = Readonly<MutableParseSettings>;
export {};
//# sourceMappingURL=index.d.ts.map
