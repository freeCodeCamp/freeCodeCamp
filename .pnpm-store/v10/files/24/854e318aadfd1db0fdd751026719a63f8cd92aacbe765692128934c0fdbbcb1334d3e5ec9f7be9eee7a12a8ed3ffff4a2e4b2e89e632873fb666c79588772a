import { EcmaVersion } from '../ts-eslint';
import { TSESTree } from '../ts-estree';
import { ScopeManager } from './ScopeManager';
interface AnalysisOptions {
    optimistic?: boolean;
    directive?: boolean;
    ignoreEval?: boolean;
    nodejsScope?: boolean;
    impliedStrict?: boolean;
    fallback?: string | ((node: TSESTree.Node) => string[]);
    sourceType?: 'script' | 'module';
    ecmaVersion?: EcmaVersion;
}
declare const analyze: (ast: TSESTree.Node, options?: AnalysisOptions) => ScopeManager;
export { analyze, AnalysisOptions };
//# sourceMappingURL=analyze.d.ts.map
