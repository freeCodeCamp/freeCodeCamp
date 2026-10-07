import type { EcmaVersion, Lib, TSESTree } from '@typescript-eslint/types';
import type { ReferencerOptions } from './referencer';
import { ScopeManager } from './ScopeManager';
interface AnalyzeOptions {
    /**
     * Known visitor keys.
     */
    childVisitorKeys?: ReferencerOptions['childVisitorKeys'];
    /**
     * Which ECMAScript version is considered.
     * Defaults to `2018`.
     * `'latest'` is converted to 1e8 at parser.
     */
    ecmaVersion?: EcmaVersion | 1e8;
    /**
     * Whether the whole script is executed under node.js environment.
     * When enabled, the scope manager adds a function scope immediately following the global scope.
     * Defaults to `false`.
     */
    globalReturn?: boolean;
    /**
     * Implied strict mode (if ecmaVersion >= 5).
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
     * Defaults to the lib for the provided `ecmaVersion`.
     *
     * https://www.typescriptlang.org/tsconfig#lib
     */
    lib?: Lib[];
    /**
     * The source type of the script.
     */
    sourceType?: 'script' | 'module';
    /**
     * Emit design-type metadata for decorated declarations in source.
     * Defaults to `false`.
     */
    emitDecoratorMetadata?: boolean;
}
/**
 * Takes an AST and returns the analyzed scopes.
 */
declare function analyze(tree: TSESTree.Node, providedOptions?: AnalyzeOptions): ScopeManager;
export { analyze, AnalyzeOptions };
//# sourceMappingURL=analyze.d.ts.map