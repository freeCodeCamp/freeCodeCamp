/**
 * This is a compatibility ruleset that:
 * - disables rules from eslint:recommended which are already handled by TypeScript.
 * - enables rules that make sense due to TS's typechecking / transpilation.
 */
declare const config: (style: 'glob' | 'minimatch') => {
    files: string[];
    rules: Record<string, 'error' | 'off' | 'warn'>;
};
export = config;
