import type { Lib, SourceType, TSESTree } from '@typescript-eslint/types';
import type { ReferencerOptions } from './referencer';
import { ScopeManager } from './ScopeManager';
export interface AnalyzeOptions {
    /**
     * Known visitor keys.
     */
    childVisitorKeys?: ReferencerOptions['childVisitorKeys'];
    /**
     * Whether the whole script is executed under node.js environment.
     * When enabled, the scope manager adds a function scope immediately following the global scope.
     * Defaults to `false`.
     */
    globalReturn?: boolean;
    /**
     * Implied strict mode.
     * Defaults to `false`.
     */
    impliedStrict?: boolean;
    /**
     * The identifier that's used for JSX Element creation (after transpilation).
     * This should not be a member expression - just the root identifier (i.e. use "React" instead of "React.createElement").
     * Defaults to `"React"`.
     */
    jsxPragma?: string | null;
    /**
     * The identifier that's used for JSX fragment elements (after transpilation).
     * If `null`, assumes transpilation will always use a member on `jsxFactory` (i.e. React.Fragment).
     * This should not be a member expression - just the root identifier (i.e. use "h" instead of "h.Fragment").
     * Defaults to `null`.
     */
    jsxFragmentName?: string | null;
    /**
     * The lib used by the project.
     * This automatically defines a type variable for any types provided by the configured TS libs.
     * Defaults to ['esnext'].
     *
     * https://www.typescriptlang.org/tsconfig#lib
     */
    lib?: Lib[];
    /**
     * The source type of the script.
     */
    sourceType?: SourceType;
    /**
     * @deprecated This option never did what it was intended for and will be removed in a future major release.
     */
    emitDecoratorMetadata?: boolean;
}
/**
 * Takes an AST and returns the analyzed scopes.
 */
export declare function analyze(tree: TSESTree.Program, providedOptions?: AnalyzeOptions): ScopeManager;
