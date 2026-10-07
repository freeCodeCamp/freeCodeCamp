"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cosmiconfigSync = exports.cosmiconfig = exports.defaultLoadersSync = exports.defaultLoaders = exports.metaSearchPlaces = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
__exportStar(require("./types.js"), exports);
const os_1 = __importDefault(require("os"));
const Explorer_js_1 = require("./Explorer.js");
const ExplorerSync_js_1 = require("./ExplorerSync.js");
const loaders_js_1 = require("./loaders.js");
const util_1 = require("./util");
// this needs to be hardcoded, as this is intended for end users, who can't supply options at this point
exports.metaSearchPlaces = [
    'package.json',
    '.config.json',
    '.config.yaml',
    '.config.yml',
    '.config.js',
    '.config.ts',
    '.config.cjs',
    '.config.mjs',
];
// do not allow mutation of default loaders. Make sure it is set inside options
exports.defaultLoaders = Object.freeze({
    '.mjs': loaders_js_1.loadJs,
    '.cjs': loaders_js_1.loadJs,
    '.js': loaders_js_1.loadJs,
    '.ts': loaders_js_1.loadTs,
    '.json': loaders_js_1.loadJson,
    '.yaml': loaders_js_1.loadYaml,
    '.yml': loaders_js_1.loadYaml,
    noExt: loaders_js_1.loadYaml,
});
exports.defaultLoadersSync = Object.freeze({
    '.cjs': loaders_js_1.loadJsSync,
    '.js': loaders_js_1.loadJsSync,
    '.ts': loaders_js_1.loadTsSync,
    '.json': loaders_js_1.loadJson,
    '.yaml': loaders_js_1.loadYaml,
    '.yml': loaders_js_1.loadYaml,
    noExt: loaders_js_1.loadYaml,
});
const identity = function identity(x) {
    return x;
};
function getInternalOptions(moduleName, options) {
    const metaExplorer = new ExplorerSync_js_1.ExplorerSync({
        packageProp: 'cosmiconfig',
        stopDir: process.cwd(),
        searchPlaces: exports.metaSearchPlaces,
        ignoreEmptySearchPlaces: false,
        applyPackagePropertyPathToConfiguration: true,
        loaders: exports.defaultLoaders,
        transform: identity,
        cache: true,
        metaConfigFilePath: null,
    });
    const metaConfig = metaExplorer.search();
    if (!metaConfig) {
        return options;
    }
    if (metaConfig.config?.loaders) {
        throw new Error('Can not specify loaders in meta config file');
    }
    const overrideOptions = metaConfig.config ?? {};
    if (overrideOptions.searchPlaces) {
        overrideOptions.searchPlaces = overrideOptions.searchPlaces.map((path) => path.replace('{name}', moduleName));
    }
    overrideOptions.metaConfigFilePath = metaConfig.filepath;
    return { ...options, ...(0, util_1.removeUndefinedValuesFromObject)(overrideOptions) };
}
function normalizeOptions(moduleName, options) {
    const defaults = {
        packageProp: moduleName,
        searchPlaces: [
            'package.json',
            `.${moduleName}rc`,
            `.${moduleName}rc.json`,
            `.${moduleName}rc.yaml`,
            `.${moduleName}rc.yml`,
            `.${moduleName}rc.js`,
            `.${moduleName}rc.ts`,
            `.${moduleName}rc.cjs`,
            `.${moduleName}rc.mjs`,
            `.config/${moduleName}rc`,
            `.config/${moduleName}rc.json`,
            `.config/${moduleName}rc.yaml`,
            `.config/${moduleName}rc.yml`,
            `.config/${moduleName}rc.js`,
            `.config/${moduleName}rc.ts`,
            `.config/${moduleName}rc.cjs`,
            `.config/${moduleName}rc.mjs`,
            `${moduleName}.config.js`,
            `${moduleName}.config.ts`,
            `${moduleName}.config.cjs`,
            `${moduleName}.config.mjs`,
        ],
        ignoreEmptySearchPlaces: true,
        stopDir: os_1.default.homedir(),
        cache: true,
        transform: identity,
        loaders: exports.defaultLoaders,
        metaConfigFilePath: null,
    };
    return {
        ...defaults,
        ...(0, util_1.removeUndefinedValuesFromObject)(options),
        loaders: {
            ...defaults.loaders,
            ...options.loaders,
        },
    };
}
function normalizeOptionsSync(moduleName, options) {
    const defaults = {
        packageProp: moduleName,
        searchPlaces: [
            'package.json',
            `.${moduleName}rc`,
            `.${moduleName}rc.json`,
            `.${moduleName}rc.yaml`,
            `.${moduleName}rc.yml`,
            `.${moduleName}rc.js`,
            `.${moduleName}rc.ts`,
            `.${moduleName}rc.cjs`,
            `.config/${moduleName}rc`,
            `.config/${moduleName}rc.json`,
            `.config/${moduleName}rc.yaml`,
            `.config/${moduleName}rc.yml`,
            `.config/${moduleName}rc.js`,
            `.config/${moduleName}rc.ts`,
            `.config/${moduleName}rc.cjs`,
            `${moduleName}.config.js`,
            `${moduleName}.config.ts`,
            `${moduleName}.config.cjs`,
        ],
        ignoreEmptySearchPlaces: true,
        stopDir: os_1.default.homedir(),
        cache: true,
        transform: identity,
        loaders: exports.defaultLoadersSync,
        metaConfigFilePath: null,
    };
    return {
        ...defaults,
        ...(0, util_1.removeUndefinedValuesFromObject)(options),
        loaders: {
            ...defaults.loaders,
            ...options.loaders,
        },
    };
}
function cosmiconfig(moduleName, options = {}) {
    const internalOptions = getInternalOptions(moduleName, options);
    const normalizedOptions = normalizeOptions(moduleName, internalOptions);
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
    const internalOptions = getInternalOptions(moduleName, options);
    const normalizedOptions = normalizeOptionsSync(moduleName, internalOptions);
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