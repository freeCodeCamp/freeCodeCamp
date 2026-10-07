"use strict";
// NOTE: this file is isolated to be shared across legacy and flat configs.
/**
 * This is a compatibility ruleset that:
 * - disables rules from eslint:recommended which are already handled by TypeScript.
 * - enables rules that make sense due to TS's typechecking / transpilation.
 */
const config = (style) => ({
    files: style === 'glob'
        ? // classic configs use glob syntax
            ['*.ts', '*.tsx', '*.mts', '*.cts']
        : // flat configs use minimatch syntax
            ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    rules: {
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-class-assign': 'off', // ts(2629)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2630)
        'no-import-assign': 'off', // ts(2632) & ts(2540)
        'no-new-native-nonconstructor': 'off', // ts(7009)
        // "no-new-symbol" was deprecated in ESLint 9.0.0 and will be removed in
        // ESLint v11.0.0. See:
        // https://eslint.org/docs/latest/rules/no-new-symbol
        // We need to keep the rule disabled until TSESLint drops support for
        // ESlint 8. See:
        // https://github.com/typescript-eslint/typescript-eslint/pull/8895
        'no-new-symbol': 'off', // ts(7009)
        'no-obj-calls': 'off', // ts(2349)
        'no-redeclare': 'off', // ts(2451)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376) & ts(17009)
        'no-undef': 'off', // ts(2304) & ts(2552)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
        'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
        'no-with': 'off', // ts(1101) & ts(2410)
        'prefer-const': 'error', // ts provides better types with const
        'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
        'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
    },
});
module.exports = config;
//# sourceMappingURL=eslint-recommended-raw.js.map