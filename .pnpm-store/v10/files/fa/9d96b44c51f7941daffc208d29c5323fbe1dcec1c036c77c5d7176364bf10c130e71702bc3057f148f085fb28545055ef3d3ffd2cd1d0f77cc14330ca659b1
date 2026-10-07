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
export function filterVitePlugins(plugins) {
    if (!plugins) {
        return [];
    }
    const pluginArray = Array.isArray(plugins) ? plugins : [plugins];
    const result = [];
    for (const plugin of pluginArray) {
        // Skip falsy values
        if (!plugin) {
            continue;
        }
        // Handle nested arrays recursively
        if (Array.isArray(plugin)) {
            result.push(...filterVitePlugins(plugin));
            continue;
        }
        // Check if plugin has apply property
        const pluginWithApply = plugin;
        if ('apply' in pluginWithApply) {
            const applyValue = pluginWithApply.apply;
            // If apply is a function, call it with build mode
            if (typeof applyValue === 'function') {
                try {
                    const shouldApply = applyValue({}, // config object
                    { command: 'build', mode: 'production' });
                    if (shouldApply) {
                        result.push(plugin);
                    }
                }
                catch {
                    // If function throws, include the plugin to be safe
                    result.push(plugin);
                }
            } // If apply is 'serve', skip this plugin
            else if (applyValue === 'serve') {
                continue;
            } // If apply is 'build' or anything else, include it
            else {
                result.push(plugin);
            }
        }
        else {
            // No apply property, include the plugin
            result.push(plugin);
        }
    }
    return result;
}
