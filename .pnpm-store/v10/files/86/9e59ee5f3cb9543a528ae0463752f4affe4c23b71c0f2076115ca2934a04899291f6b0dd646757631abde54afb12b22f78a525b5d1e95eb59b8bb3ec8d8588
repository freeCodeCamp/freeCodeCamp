"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globs = exports.extensions = void 0;
const jsExtensions = ['mjs', 'js', 'cjs', 'jsx'];
Object.freeze(jsExtensions);
const tsExtensions = ['mts', 'ts', 'cts', 'tsx'];
Object.freeze(tsExtensions);
const jstsExtensions = [...jsExtensions, ...tsExtensions];
Object.freeze(jstsExtensions);
/**
 * File extensions for JS- and TS-based files, provided to facilitate
 * programmatic construction of globs used in configs.
 */
exports.extensions = {
    /**
     * File extensions (without leading .) for standard JS-based files supported by typescript-eslint.
     *
     * The value of this property is the array `['mjs', 'js', 'cjs', 'jsx']`
     */
    js: jsExtensions,
    /**
     * File extensions (without leading .) for standard TS-based files supported by typescript-eslint.
     *
     * The value of this property is the array `['mts', 'ts', 'cts', 'tsx']`
     */
    ts: tsExtensions,
    /**
     * File extensions (without leading .) for both standard JS- and TS-based files supported by typescript-eslint.
     *
     * The value of this property is the array `['mjs', 'js', 'cjs', 'jsx', 'mts', 'ts', 'cts', 'tsx', ]`
     */
    jsts: jstsExtensions,
};
/**
 * Globs for JS- and TS-based files supported by typescript-eslint, in order to
 * simplify typical configurations.
 */
exports.globs = {
    // Note that &sol; is used instead of / in the JSDocs in order to
    // avoid unintentionally terminating block comments with */
    /**
     * Glob to match standard JS-based files supported by typescript-eslint.
     *
     * The value of this glob is the string "**&sol;*.{mjs,js,cjs,jsx}"
     *
     * @example
     * ```ts
     * import { defineConfig } from 'eslint/config';
     * import tseslint from 'typescript-eslint';
     *
     * export default defineConfig(
     *   // other configs...
     *   {
     *     name: 'disable-type-checked-rules-for-JavaScript',
     *     files: [tseslint.globs.js],
     *     extends: [
     *       tseslint.configs.disableTypeChecked,
     *     ],
     *   },
     * );
     * ```
     */
    js: `**/*.{${exports.extensions.js.join(',')}}`,
    /**
     * Glob to match standard TS-based files supported by typescript-eslint.
     *
     * The value of this glob is the string "**&sol;*.{mts,ts,cts,tsx}"
     *
     * @example
     * ```ts
     * import { defineConfig } from 'eslint/config';
     * import tseslint from 'typescript-eslint';
     *
     * export default defineConfig(
     *   // other configs...
     *   {
     *     name: 'config-for-TypeScript',
     *     files: [tseslint.globs.ts],
     *     extends: [
     *        tseslint.configs.recommended,
     *     ]
     *   },
     * );
     * ```
     */
    ts: `**/*.{${exports.extensions.ts.join(',')}}`,
    /**
     * Glob to match both standard JS- and TS-based files supported by typescript-eslint.
     *
     * The value of this glob is the string "**&sol;*.{mjs,js,cjs,jsx,mts,ts,cts,tsx}"
     *
     * @example
     * ```ts
     * import { defineConfig } from 'eslint/config';
     * import tseslint from 'typescript-eslint';
     *
     * export default defineConfig(
     *   // other configs...
     *   {
     *     name: 'config-for-TypeScript/JavaScript',
     *     files: [tseslint.globs.jsts],
     *     extends: [
     *       tseslint.configs.recommended,
     *     ],
     *   },
     * );
     * ```
     */
    jsts: `**/*.{${exports.extensions.jsts.join(',')}}`,
    /**
     * Glob to match TypeScript declaration files (.d.ts, .d.css.ts, .d.other-file-type.ts).
     *
     * The value of this glob is the string "**&sol;*.{d.ts,d.*ts}"
     *
     * @example
     * ```ts
     * import { defineConfig } from 'eslint/config';
     * import tseslint from 'typescript-eslint';
     *
     * export default defineConfig(
     *   // other configs...
     *   {
     *     name: 'disable-rules-for-declaration-files',
     *     files: [tseslint.globs.tsDeclaration],
     *     rules: {
     *       // Disable rules that are problematic in declaration files
     *       'no-var': 'off',
     *     },
     *   },
     * );
     * ```
     */
    tsDeclaration: '**/*.{d.ts,d.*.ts}',
};
//# sourceMappingURL=globs.js.map