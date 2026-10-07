import type { TSESTree } from '@typescript-eslint/types';
import { type IBulkSuppressionsConfig, type ISuppression } from './bulk-suppressions-file';
declare const SUPPRESSION_SYMBOL: unique symbol;
interface IProblem {
    [SUPPRESSION_SYMBOL]?: {
        config: IBulkSuppressionsConfig;
        suppression: ISuppression;
        serializedSuppression: string;
    };
}
export declare function shouldBulkSuppress(params: {
    filename: string;
    currentNode: TSESTree.Node;
    ruleId: string;
    problem: IProblem;
}): boolean;
export declare function prune(): void;
export declare function write(): void;
export declare function requireFromPathToLinterJS(importPath: string): import('eslint-9').Linter | import('eslint-8').Linter;
export declare function patchClass<T, U extends T>(originalClass: new () => T, patchedClass: new () => U): void;
/**
 * This returns a wrapped version of the "verify" function from ESLint's Linter class
 * that postprocesses rule violations that weren't suppressed by comments. This postprocessing
 * records suppressions that weren't otherwise suppressed by comments to be used
 * by the "suppress" and "prune" commands.
 */
export declare function extendVerifyFunction(originalFn: (this: unknown, ...args: unknown[]) => IProblem[] | undefined): (this: unknown, ...args: unknown[]) => IProblem[] | undefined;
export {};
//# sourceMappingURL=bulk-suppressions-patch.d.ts.map