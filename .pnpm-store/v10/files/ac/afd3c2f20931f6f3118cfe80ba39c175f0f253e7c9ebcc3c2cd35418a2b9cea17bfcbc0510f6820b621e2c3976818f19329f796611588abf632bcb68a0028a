"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLoadersSync = exports.defaultLoaders = exports.globalConfigSearchPlacesSync = exports.globalConfigSearchPlaces = exports.getDefaultSearchPlacesSync = exports.getDefaultSearchPlaces = exports.cosmiconfigSync = exports.cosmiconfig = void 0;
const defaults_1 = require("./defaults");
Object.defineProperty(exports, "defaultLoaders", { enumerable: true, get: function () { return defaults_1.defaultLoaders; } });
Object.defineProperty(exports, "defaultLoadersSync", { enumerable: true, get: function () { return defaults_1.defaultLoadersSync; } });
Object.defineProperty(exports, "getDefaultSearchPlaces", { enumerable: true, get: function () { return defaults_1.getDefaultSearchPlaces; } });
Object.defineProperty(exports, "getDefaultSearchPlacesSync", { enumerable: true, get: function () { return defaults_1.getDefaultSearchPlacesSync; } });
Object.defineProperty(exports, "globalConfigSearchPlaces", { enumerable: true, get: function () { return defaults_1.globalConfigSearchPlaces; } });
Object.defineProperty(exports, "globalConfigSearchPlacesSync", { enumerable: true, get: function () { return defaults_1.globalConfigSearchPlacesSync; } });
const Explorer_js_1 = require("./Explorer.js");
const ExplorerSync_js_1 = require("./ExplorerSync.js");
const util_1 = require("./util");
const identity = function identity(x) {
    return x;
};
function getUserDefinedOptionsFromMetaConfig() {
    const metaExplorer = new ExplorerSync_js_1.ExplorerSync({
        moduleName: 'cosmiconfig',
        stopDir: process.cwd(),
        searchPlaces: defaults_1.metaSearchPlaces,
        ignoreEmptySearchPlaces: false,
        applyPackagePropertyPathToConfiguration: true,
        loaders: defaults_1.defaultLoaders,
        transform: identity,
        cache: true,
        metaConfigFilePath: null,
        mergeImportArrays: true,
        mergeSearchPlaces: true,
        searchStrategy: 'none',
    });
    const metaConfig = metaExplorer.search();
    if (!metaConfig) {
        return null;
    }
    if (metaConfig.config?.loaders) {
        throw new Error('Can not specify loaders in meta config file');
    }
    if (metaConfig.config?.searchStrategy) {
        throw new Error('Can not specify searchStrategy in meta config file');
    }
    const overrideOptions = {
        mergeSearchPlaces: true,
        ...(metaConfig.config ?? {}),
    };
    return {
        config: (0, util_1.removeUndefinedValuesFromObject)(overrideOptions),
        filepath: metaConfig.filepath,
    };
}
function getResolvedSearchPlaces(moduleName, toolDefinedSearchPlaces, userConfiguredOptions) {
    const userConfiguredSearchPlaces = userConfiguredOptions.searchPlaces?.map((path) => path.replace('{name}', moduleName));
    if (userConfiguredOptions.mergeSearchPlaces) {
        return [...(userConfiguredSearchPlaces ?? []), ...toolDefinedSearchPlaces];
    }
    return (userConfiguredSearchPlaces ??
        /* istanbul ignore next */ toolDefinedSearchPlaces);
}
function mergeOptionsBase(moduleName, defaults, options) {
    const userDefinedConfig = getUserDefinedOptionsFromMetaConfig();
    if (!userDefinedConfig) {
        return {
            ...defaults,
            ...(0, util_1.removeUndefinedValuesFromObject)(options),
            loaders: {
                ...defaults.loaders,
                ...options.loaders,
            },
        };
    }
    const userConfiguredOptions = userDefinedConfig.config;
    const toolDefinedSearchPlaces = options.searchPlaces ?? defaults.searchPlaces;
    return {
        ...defaults,
        ...(0, util_1.removeUndefinedValuesFromObject)(options),
        metaConfigFilePath: userDefinedConfig.filepath,
        ...userConfiguredOptions,
        searchPlaces: getResolvedSearchPlaces(moduleName, toolDefinedSearchPlaces, userConfiguredOptions),
        loaders: {
            ...defaults.loaders,
            ...options.loaders,
        },
    };
}
function validateOptions(options) {
    if (options.searchStrategy != null &&
        options.searchStrategy !== 'global' &&
        options.stopDir) {
        throw new Error('Can not supply `stopDir` option with `searchStrategy` other than "global"');
    }
}
function mergeOptions(moduleName, options) {
    validateOptions(options);
    const defaults = {
        moduleName,
        searchPlaces: (0, defaults_1.getDefaultSearchPlaces)(moduleName),
        ignoreEmptySearchPlaces: true,
        cache: true,
        transform: identity,
        loaders: defaults_1.defaultLoaders,
        metaConfigFilePath: null,
        mergeImportArrays: true,
        mergeSearchPlaces: true,
        searchStrategy: options.stopDir ? 'global' : 'none',
    };
    return mergeOptionsBase(moduleName, defaults, options);
}
function mergeOptionsSync(moduleName, options) {
    validateOptions(options);
    const defaults = {
        moduleName,
        searchPlaces: (0, defaults_1.getDefaultSearchPlacesSync)(moduleName),
        ignoreEmptySearchPlaces: true,
        cache: true,
        transform: identity,
        loaders: defaults_1.defaultLoadersSync,
        metaConfigFilePath: null,
        mergeImportArrays: true,
        mergeSearchPlaces: true,
        searchStrategy: options.stopDir ? 'global' : 'none',
    };
    return mergeOptionsBase(moduleName, defaults, options);
}
function cosmiconfig(moduleName, options = {}) {
    const normalizedOptions = mergeOptions(moduleName, options);
    const explorer = new Explorer_js_1.Explorer(normalizedOptions);
    return {
        search: explorer.search.bind(explorer),
        load: explorer.load.bind(explorer),
        clearLoadCache: explorer.clearLoadCache.bind(explorer),
        clearSearchCache: explorer.clearSearchCache.bind(explorer),
        clearCaches: explorer.clearCaches.bind(explorer),
    };
}
exports.cosmiconfig = cosmiconfig;
function cosmiconfigSync(moduleName, options = {}) {
    const normalizedOptions = mergeOptionsSync(moduleName, options);
    const explorerSync = new ExplorerSync_js_1.ExplorerSync(normalizedOptions);
    return {
        search: explorerSync.search.bind(explorerSync),
        load: explorerSync.load.bind(explorerSync),
        clearLoadCache: explorerSync.clearLoadCache.bind(explorerSync),
        clearSearchCache: explorerSync.clearSearchCache.bind(explorerSync),
        clearCaches: explorerSync.clearCaches.bind(explorerSync),
    };
}
exports.cosmiconfigSync = cosmiconfigSync;
//# sourceMappingURL=index.js.map