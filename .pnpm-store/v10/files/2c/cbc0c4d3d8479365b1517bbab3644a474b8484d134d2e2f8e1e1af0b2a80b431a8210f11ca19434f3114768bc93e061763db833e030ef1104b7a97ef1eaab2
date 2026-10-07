"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = config;
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
function config(...configs) {
    return configImpl(...configs);
}
// Implementation of the config function without assuming the runtime type of
// the input.
function configImpl(...configs) {
    const flattened = configs.flat(Infinity);
    return flattened.flatMap((configWithExtends, configIndex) => {
        if (configWithExtends == null ||
            typeof configWithExtends !== 'object' ||
            !('extends' in configWithExtends)) {
            // Unless the object is a config object with extends key, just forward it
            // along to eslint.
            return configWithExtends;
        }
        const { extends: extendsArr, ..._config } = configWithExtends;
        const config = _config;
        if (extendsArr == null) {
            // If the extends value is nullish, just forward along the rest of the
            // config object to eslint.
            return config;
        }
        const name = (() => {
            if ('name' in configWithExtends && configWithExtends.name != null) {
                if (typeof configWithExtends.name !== 'string') {
                    throw new Error(`tseslint.config(): Config at index ${configIndex} has a 'name' property that is not a string.`);
                }
                return configWithExtends.name;
            }
            return undefined;
        })();
        const nameErrorPhrase = name != null ? `, named "${name}",` : ' (anonymous)';
        if (!Array.isArray(extendsArr)) {
            throw new TypeError(`tseslint.config(): Config at index ${configIndex}${nameErrorPhrase} has an 'extends' property that is not an array.`);
        }
        const extendsArrFlattened = extendsArr.flat(Infinity);
        const nonObjectExtensions = [];
        for (const [extensionIndex, extension] of extendsArrFlattened.entries()) {
            // special error message to be clear we don't support eslint's stringly typed extends.
            // https://eslint.org/docs/latest/use/configure/configuration-files#extending-configurations
            if (typeof extension === 'string') {
                throw new Error(`tseslint.config(): Config at index ${configIndex}${nameErrorPhrase} has an 'extends' array that contains a string (${JSON.stringify(extension)}) at index ${extensionIndex}.` +
                    " This is a feature of eslint's `defineConfig()` helper and is not supported by typescript-eslint." +
                    ' Please provide a config object instead.');
            }
            if (extension == null || typeof extension !== 'object') {
                nonObjectExtensions.push(extensionIndex);
                continue;
            }
            // https://github.com/eslint/rewrite/blob/82d07fd0e8e06780b552a41f8bcbe2a4f8741d42/packages/config-helpers/src/define-config.js#L448-L450
            if ('basePath' in extension) {
                throw new TypeError(`tseslint.config(): Config at index ${configIndex}${nameErrorPhrase} has an 'extends' array that contains a config with a 'basePath' property at index ${extensionIndex}.` +
                    ` 'basePath' in 'extends' is not allowed.`);
            }
            if ('extends' in extension) {
                throw new TypeError(`tseslint.config(): Config at index ${configIndex}${nameErrorPhrase} has an 'extends' array that contains a config with an 'extends' property at index ${extensionIndex}.` +
                    ` Nested 'extends' is not allowed.`);
            }
        }
        if (nonObjectExtensions.length > 0) {
            const extensionIndices = nonObjectExtensions.join(', ');
            throw new TypeError(`tseslint.config(): Config at index ${configIndex}${nameErrorPhrase} contains non-object` +
                ` extensions at the following indices: ${extensionIndices}.`);
        }
        const configArray = [];
        for (const _extension of extendsArrFlattened) {
            const extension = _extension;
            const resolvedConfigName = [name, extension.name]
                .filter(Boolean)
                .join('__');
            if (isPossiblyGlobalIgnores(extension)) {
                // If it's a global ignores, then just pass it along
                configArray.push({
                    ...extension,
                    ...(resolvedConfigName !== '' ? { name: resolvedConfigName } : {}),
                });
            }
            else {
                configArray.push({
                    ...extension,
                    ...(config.files ? { files: config.files } : {}),
                    ...(config.ignores ? { ignores: config.ignores } : {}),
                    ...(config.basePath ? { basePath: config.basePath } : {}),
                    ...(resolvedConfigName !== '' ? { name: resolvedConfigName } : {}),
                });
            }
        }
        // If the base config could form a global ignores object, then we mustn't include
        // it in the output. Otherwise, we must add it in order for it to have effect.
        if (!isPossiblyGlobalIgnores(config)) {
            configArray.push(config);
        }
        return configArray;
    });
}
/**
 * This utility function returns false if the config objects contains any field
 * that would prevent it from being considered a global ignores object and true
 * otherwise. Note in particular that the `ignores` field may not be present and
 * the return value can still be true.
 */
function isPossiblyGlobalIgnores(config) {
    return Object.keys(config).every(key => ['name', 'ignores', 'basePath'].includes(key));
}
//# sourceMappingURL=config-helper.js.map