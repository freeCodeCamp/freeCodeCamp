import type { ProjectServiceAndMetadata } from '@typescript-eslint/project-service';
import type * as ts from 'typescript';
import type { CanonicalPath } from '../create-program/shared';
import type { TSESTree } from '../ts-estree';
import type { CacheLike } from './ExpiringCache';
type DebugModule = 'eslint' | 'typescript' | 'typescript-eslint';
declare module 'typescript' {
    enum JSDocParsingMode {
    }
}
declare module 'typescript/lib/tsserverlibrary' {
    enum JSDocParsingMode {
    }
}
/**
 * Internal settings used by the parser to run on a file.
 */
export interface MutableParseSettings {
    /**
     * Prevents the parser from throwing an error if it receives an invalid AST from TypeScript.
     */
    allowInvalidAST: boolean;
    /**
     * Code of the file being parsed, or raw source file containing it.
     */
    code: string | ts.SourceFile;
    /**
     * Full text of the file being parsed.
     */
    codeFullText: string;
    /**
     * Whether the `comment` parse option is enabled.
     */
    comment: boolean;
    /**
     * If the `comment` parse option is enabled, retrieved comments.
     */
    comments: TSESTree.Comment[];
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
     * Any non-standard file extensions which will be parsed.
     */
    extraFileExtensions: string[];
    /**
     * Path of the file being parsed.
     */
    filePath: string;
    /**
     * Sets the external module indicator on the source file.
     * Used by Typescript to determine if a sourceFile is an external module.
     *
     * needed to always parsing `mjs`/`mts` files as ESM
     */
    setExternalModuleIndicator?: (file: ts.SourceFile) => void;
    /**
     * JSDoc parsing style to pass through to TypeScript
     */
    jsDocParsingMode: ts.JSDocParsingMode;
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
     * Whether two-way AST node maps are preserved during the AST conversion process.
     */
    preserveNodeMaps?: boolean;
    /**
     * One or more instances of TypeScript Program objects to be used for type information.
     */
    programs: Iterable<ts.Program> | null;
    /**
     * Normalized paths to provided project paths.
     */
    projects: ReadonlyMap<CanonicalPath, string>;
    /**
     * TypeScript server to power program creation.
     */
    projectService: ProjectServiceAndMetadata | undefined;
    /**
     * Whether to add the `range` property to AST nodes.
     */
    range: boolean;
    /**
     * Whether this is part of a single run, rather than a long-running process.
     */
    singleRun: boolean;
    /**
     * Whether deprecated AST properties should skip calling console.warn on accesses.
     */
    suppressDeprecatedPropertyWarnings: boolean;
    /**
     * If the `tokens` parse option is enabled, retrieved tokens.
     */
    tokens: TSESTree.Token[] | null;
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
