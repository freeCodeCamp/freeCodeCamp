import type { ScopeVariable } from '@typescript-eslint/scope-manager';
import { TSESLint } from '@typescript-eslint/utils';
interface VariableAnalysis {
    readonly unusedVariables: ReadonlySet<ScopeVariable>;
    readonly usedVariables: ReadonlySet<ScopeVariable>;
}
/**
 * Collects the set of unused variables for a given context.
 *
 * Due to complexity, this does not take into consideration:
 * - variables within declaration files
 * - variables within ambient module declarations
 */
export declare function collectVariables<MessageIds extends string, Options extends readonly unknown[]>(context: Readonly<TSESLint.RuleContext<MessageIds, Options>>): VariableAnalysis;
export {};
