import type { Rule } from "eslint";
export interface RuleContextWithOptions extends Rule.RuleContext {
    options: Array<{
        cwd?: string;
        allowList?: Array<string>;
    }>;
}
declare function create(context: RuleContextWithOptions): Rule.RuleListener;
/**
 * Clear all module-level caches. This is primarily useful for test isolation.
 */
export declare function clearCache(): void;
declare const rule: {
    create: typeof create;
    meta: Rule.RuleMetaData;
};
export default rule;
//# sourceMappingURL=no-undeclared-env-vars.d.ts.map