/**
 * Filters out Vite plugins that have `apply: 'serve'` set.
 *
 * Since Rolldown operates in build mode, plugins marked with `apply: 'serve'`
 * are intended only for Vite's dev server and should be excluded from the build process.
 *
 * @param plugins - Array of plugins (can include nested arrays)
 * @returns Filtered array with serve-only plugins removed
 *
 * @example
 * ```ts
 * import { defineConfig } from 'rolldown';
 * import { filterVitePlugins } from '@rolldown/pluginutils';
 * import viteReact from '@vitejs/plugin-react';
 *
 * export default defineConfig({
 *   plugins: filterVitePlugins([
 *     viteReact(),
 *     {
 *       name: 'dev-only',
 *       apply: 'serve', // This will be filtered out
 *       // ...
 *     }
 *   ])
 * });
 * ```
 */
export declare function filterVitePlugins<T = any>(plugins: T | T[] | null | undefined | false): T[];
