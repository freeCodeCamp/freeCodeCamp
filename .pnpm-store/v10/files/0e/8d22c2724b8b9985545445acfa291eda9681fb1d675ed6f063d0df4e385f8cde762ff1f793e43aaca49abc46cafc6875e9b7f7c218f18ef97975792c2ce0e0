import type { TSESLint } from '@typescript-eslint/utils';
export type InfiniteDepthConfigWithExtends = ConfigWithExtends | InfiniteDepthConfigWithExtends[];
export interface ConfigWithExtends extends TSESLint.FlatConfig.Config {
    /**
     * Allows you to "extend" a set of configs similar to `extends` from the
     * classic configs.
     *
     * This is just a convenience short-hand to help reduce duplication.
     *
     * ```js
     * export default tseslint.config({
     *   files: ['** /*.ts'],
     *   extends: [
     *     js.configs.recommended,
     *     tseslint.configs.recommended,
     *   ],
     *   rules: {
     *     '@typescript-eslint/array-type': 'error',
     *     '@typescript-eslint/consistent-type-imports': 'error',
     *   },
     * })
     *
     * // expands to
     *
     * export default [
     *   {
     *     ...js.configs.recommended,
     *     files: ['** /*.ts'],
     *   },
     *   ...tseslint.configs.recommended.map(conf => ({
     *     ...conf,
     *     files: ['** /*.ts'],
     *   })),
     *   {
     *     files: ['** /*.ts'],
     *     rules: {
     *       '@typescript-eslint/array-type': 'error',
     *       '@typescript-eslint/consistent-type-imports': 'error',
     *     },
     *   },
     * ]
     * ```
     */
    extends?: InfiniteDepthConfigWithExtends[];
}
export type ConfigArray = TSESLint.FlatConfig.ConfigArray;
/**
 * Utility function to make it easy to strictly type your "Flat" config file
 * @example
 * ```js
 * // @ts-check
 *
 * import js from '@eslint/js';
 * import tseslint from 'typescript-eslint';
 *
 * export default tseslint.config(
 *   js.configs.recommended,
 *   tseslint.configs.recommended,
 *   {
 *     rules: {
 *       '@typescript-eslint/array-type': 'error',
 *     },
 *   },
 * );
 * ```
 *
 * @deprecated ESLint core now provides this functionality via `defineConfig()`,
 * which we now recommend instead. See {@link https://typescript-eslint.io/packages/typescript-eslint/#config-deprecated}.
 */
export declare function config(...configs: InfiniteDepthConfigWithExtends[]): ConfigArray;
